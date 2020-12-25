import Web3 from 'web3';
// We are doing the following to rip out the current provider from the *out-dated*
// injected web3 by metamask. But we do need its provider as it sotres all our cryto
// details to access our accounts. I need to understand this concept properly. This
// might be the key in terms of making my local dockerised blockchain work with metamask
// with imported accounts. I need to describe my current problem in more descriptive manner

const web3 = new Web3(window.web3.currentProvider); // .enable() to connect the metamask wallet for the first time and then you should remove it. Need to find a better and more automated way

export default web3;
