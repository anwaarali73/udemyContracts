const Web3 = require('web3');
const ganache = require('ganache-cli');

web3 = new Web3(ganache.provider());

a = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log(accounts);
  const balance = await web3.eth.getBalance(accounts[1]);
  console.log(web3.utils.fromWei(balance, 'ether'));
}

a();
