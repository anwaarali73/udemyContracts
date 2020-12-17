const assert = require('assert'); // For tests
const ganache = require('ganache-cli'); // Local testRPC blockchain

// Following by convention when a constructor is extracted from a library
// the first letter is capitalised, as in this case it is Web3. Then when
// creating an instace of web3 using the constructor Web3 we stick to the nomal
// smalle letters throughout

const Web3 = require('web3');

// Following we specify a provider. A provider acts as a communication layer between
// web3 instance and a blockchain network

// This is the main plumbing point where I can connect my own dockerised blockchain

const web3 = new Web3(ganache.provider());  // Patchwork to connect to the ganache local blockchain

// Following we require in and destructure our compiled source code and extract ABI and bytecode

const { interface, bytecode } = require('../compile');

// Mocha is a testing framework with three main functions
// it: runs a test and makes an assertion
// descibe: groups together 'it' functions; you can have a comprehensive test output of sorts
// beforeEach: for some code setup (!before tests)

// Following is just an example class to learn how testing working with Mocha

// class Car {
//   park() {
//     return 'stopped';
//   }
//
//   drive() {
//     return 'vroom';
//   }
// }
// =============================================================================
// // Some initilisation setup that will be required for each of the it function
//
// let car;
//
// beforeEach(() => {
//   car = new Car();
// });
//
// describe('Car function testing', () => {
//   it('Car\'s park function works', () => {
//     assert.equal(car.park(), 'stopped');
//   });
//
//   it('Car\'s drive function works', () => {
//     assert.equal(car.drive(), 'vroom');
//   });
// });
// =============================================================================

let accounts;
let inbox;
let INITIAL_MESSAGE = 'Hi there!';

// Almost everything done with web3 is async so it has to be handeled accordingly

beforeEach(async () => {
  // Get accounts from the ganache blockchain
  // web3.eth.getAccounts().then(fetchedAccounts => {
  //   console.log(fetchedAccounts);});
  // Above is the alternative form to async await syntax for handling promises
  accounts = await web3.eth.getAccounts();
  // Use an account to deploy a new instance of our smart contract
  // The arguments is to initialise the Smart Contract constructor function
  inbox = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: [INITIAL_MESSAGE] })
    .send({ from: accounts[0], gas: '1000000' });
});

describe('Inbox contract deployment testing report', () => {
  it('Deploys contract', () => {
    console.log(inbox);
  });

  it('The contract has an address', () => {
    assert.ok(inbox.options.address);
  });

  it('Has the default message setup', async () => {
    const message = await inbox.methods.message().call();
    assert.equal(message, INITIAL_MESSAGE);
  });

  it('Can successfully change the message', async () => {
    CHANGED_MESSAGE = 'Changed message';
    await inbox.methods.setMessage(CHANGED_MESSAGE).send({ from: accounts[0] });
    const message = await inbox.methods.message().call();
    assert.equal(message, CHANGED_MESSAGE);
  });
});
