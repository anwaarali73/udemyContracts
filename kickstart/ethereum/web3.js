// This file is going to be different from what we had for the lottery contract
// As we are making use of Next js now which does the server-side rendering
// and it implies that window variable which is a reference to the client browser
// will be undefined.
// So instead we will make our own http provider at the server side and provide
// the link to our blockchain node
import Web3 from 'web3';
// We are doing the following to rip out the current provider from the *out-dated*
// injected web3 by metamask. But we do need its provider as it sotres all our cryto
// details to access our accounts. I need to understand this concept properly. This
// might be the key in terms of making my local dockerised blockchain work with metamask
// with imported accounts. I need to describe my current problem in more descriptive manner
// const web3 = new Web3(window.web3.currentProvider); // .enable() to connect the metamask wallet for the first time and then you should remove it. Need to find a better and more automated way

// This time around we do not make use of const web3 as we expect it to be variable instead
let web3;
if(typeof window !=='undefined' && typeof window.web3 !== 'undefined') {
  // This would clearly imply that we are in client's browser and metamask is running and has injected a web3 so we try to
  // hack it like in the lottery contract to make use of its provider with our version of web3
  web3 = new Web3(window.web3.currentProvider);
} else {
  // If above is not true then we are clearly at server side OR metamask is not running and injecting a web3 of its own
  // we create our own provider from scratch
  const provider = new Web3.providers.HttpProvider(
    // If a public testnet needs to be used
    // "https://goerli.infura.io/v3/416dd106343b41f489089a9ac6c042a7"
    // Or do the following if you want to use your local dockerised blockchain
    'http://localhost:8545'
  );
  web3 = new Web3(provider);
}

export default web3;
