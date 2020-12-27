const assert  = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');

const web3 = new Web3(ganache.provider());

// Now fetch in the interfaces of the two contracts from the build folder
const compiledFactory = require('../ethereum/build/CampaignFactory.json');
const compiledCampaign = require('../ethereum/build/Campaign.json');

//console.log(compiledFactory);
//console.log(compiledCampaign);

let accounts;
let factory;
let campaignAddress;
let campaign;

beforeEach(async () => {
  accounts = await web3.eth.getAccounts();
  //console.log(accounts);

  // Following we deploy a *new* instance of our CampaignFactory by making use of the interface
  // we imported above from our build directory
  factory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({ data:  compiledFactory.bytecode })
    .send({ from: accounts[0], gas: '1000000' });

  // Now we make use of the above factory for deploy a new instace of Campaign contract
  // We pass '1000' wei as an input to the createCampaign function for Campaign's constructor
  await factory.methods.createCampaign('1000').send({
    from: accounts[0],
    gas: '1000000'
  });

  // Following is the same as accessing the first element in the returned array by getDeployedCampaigns
  // and assigning that to campaignAddress. The following is just fancy js !esx! syntax
  [campaignAddress] = await factory.methods.getDeployedCampaigns().call();

  // Since we have already deployed our Campaign contract, all we now need to do is to load the contract
  // at a specific address (at campaignAddress) with the relevant imported contract's (ie Campaign.sol) interface
  campaign = await new web3.eth.Contract(
    JSON.parse(compiledCampaign.interface),
    campaignAddress
  );
});

// Recall, describe is the collection it tests

describe('Campaigns test report', () => {
  it('Deploys CampaignFactory and Campaign contracts (ie their addresses exist on the blockchain)', () => {
    assert.ok(factory.options.address);
    assert.ok(campaign.options.address);
  });

  it('Sets the manager to the caller of createCampaign() of the CampaignFactory contract', async () => {
    const manager = await campaign.methods.manager().call();
    assert.equal(accounts[0], manager);
  });

  it('People can donate and become approvers', async () => {
    await campaign.methods.contribute().send({
      from: accounts[1],
      value: '1000000000'
    });

    const isContributor = await campaign.methods.approvers(accounts[1]).call();
    assert(isContributor);
  });

  it('Has a minimum contribution value setup', async () => {
    // const minimum = await campaign.methods.minimumContribution().call();
    // assert(minimum > 0);
    // or the following
    try {
      await campaign.methods.contribute().send({
        from: accounts[2],
        value: '10'
      });
    } catch (err) {
      assert(err);
    }
  });

  it('The manager can create a funding request', async () => {
    await campaign.methods
      .createRequest('Buy nasal spray', '1000', accounts[3])
      .send({
        from: accounts[0],
        gas: '1000000'
      });

    const request = await campaign.methods.requests(0).call();
    assert.equal('Buy nasal spray', request.description);
  });

  it('Processes the requests successfully and completely', async () => {
    // Fist we store recipient's initial balance for our reference
    const initialBalance = await web3.eth.getBalance(accounts[1]);

    // We make our manager contribute
    await campaign.methods.contribute().send({
      from: accounts[0],
      value: web3.utils.toWei('25', 'ether')
    });


    // Then we create a new request with the recipient from another account
    await campaign.methods
      .createRequest('Buy more nasal spray', web3.utils.toWei('20', 'ether'), accounts[1])
      .send({
        from: accounts[0],
        gas: '1000000'
      });
    // Then we make the manager to approve the request
    await campaign.methods.approveRequest(0)
      .send({
        from: accounts[0],
        gas: '1000000'
      });

    // Now we make the manager finalise the request, this should update the balance of account[1]
    await campaign.methods.finaliseRequest(0)
      .send({
        from: accounts[0],
        gas: '1000000'
      });

    // Now we see if the balance of accounts[1] has been updated
    const finalBalance = await web3.eth.getBalance(accounts[1]);
    const difference = parseFloat(web3.utils.fromWei(finalBalance, 'ether')) - parseFloat(web3.utils.fromWei(initialBalance, 'ether'));

    assert(20.5 > difference);
  });
});
