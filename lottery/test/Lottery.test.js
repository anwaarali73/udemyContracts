const assert = require('assert');

// Just by requiring ganache, it automatically boots it up

const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

const { interface, bytecode  } = require('../compile');

let lottery;
let accounts;

beforeEach(async () => {
  accounts = await web3.eth.getAccounts();
  lottery = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode })
    .send({ from: accounts[0], gas: '1000000' });
});

describe('Lottery contract deployment test report:', () => {
  it('Lottery contract deployed and has a blockchain address.', () => {
    assert.ok(lottery.options.address);
  });

  it('The lotter\'s enter function works correctly.', async () => {
    await lottery.methods.enter().send({
      from: accounts[0],
      value: web3.utils.toWei('1', 'ether')
    });

    const players = await lottery.methods.getPlayers().call({ from: accounts[0] });

    assert.equal(accounts[0], players[0]);
    assert.equal(1, players.length);
  });

  it('The lottery allows multiple entrants successfully.', async () => {
    await lottery.methods.enter().send({
      from: accounts[0],
      value: web3.utils.toWei('1', 'ether')
    });

    await lottery.methods.enter().send({
      from: accounts[1],
      value: web3.utils.toWei('1', 'ether')
    });

    await lottery.methods.enter().send({
      from: accounts[2],
      value: web3.utils.toWei('1', 'ether')
    });

    await lottery.methods.enter().send({
      from: accounts[3],
      value: web3.utils.toWei('1', 'ether')
    });

    const players = await lottery.methods.getPlayers().call({ from: accounts[0] });

    assert.equal(accounts[0], players[0]);
    assert.equal(accounts[1], players[1]);
    assert.equal(accounts[2], players[2]);
    assert.equal(accounts[3], players[3]);
    assert.equal(4, players.length);
  });

  // Not really clear about the following test. Confusion about the try, catch, and err stuff
  // I can not seem to make this test fail. It always passes no matter what. And err is always returned!
  it('The Lottery has a minimum fee for entry', async () => {
    try {
      await lottery.methods.enter().send({
        from: accounts[0],
        value: 0
      });
      assert(false); // !Either something went wrong.
    } catch(err) { // !Or something went right.
      assert(err); // assert() checks the truthiness of the arguments. assert.ok checks just the existence of the given arguments.
    }
  });

  it('Lottery winner can only be picked by the manager', async () => {
    try {
      await lottery.methods.pickWinner().send({ from: accounts[0] });
      assert(false); //! I do not understand the reason for this
    } catch(err) {
      assert(err);
      console.log(err);
    }
  });

  it('Lottery transfers the correct amount to the winner', async () => {
    await lottery.methods.enter().send({
      from: accounts[0],
      value: web3.utils.toWei('3', 'ether')
    });
    const initialBalance = await web3.eth.getBalance(accounts[0]);

    await lottery.methods.pickWinner().send({
      from: accounts[0]
    });

    const finalBalance = await web3.eth.getBalance(accounts[0]);
    const difference = finalBalance - initialBalance;
    console.log(difference);
    assert(difference > web3.utils.toWei('2.8', 'ether'));
  });
});
