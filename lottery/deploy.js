const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const mnemonicPhrase = "loud used silk super polar culture point knock silver spoil luggage ozone";

let provider = new HDWalletProvider({
  mnemonic: {
    phrase: mnemonicPhrase
  },
  //providerOrUrl: "https://goerli.infura.io/v3/416dd106343b41f489089a9ac6c042a7"
  providerOrUrl: "http://localhost:8545"
});

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log(accounts);

  console.log('Attempting to deploy from account', accounts[0]);  // You can replace accounts[0] with one of your imported accounts as well

  const result = await new web3.eth.Contract(JSON.parse(interface))
      .deploy({ data: '0x' + bytecode })
      .send({ from: accounts[0] });

  console.log(interface);
  console.log('Contract deployed to: ', result.options.address) ;
};

deploy();
provider.engine.stop();
