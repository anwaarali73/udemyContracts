// This file is basically for the show.js file to load up
// and show the relevant campaign details to the user
// we will call the funciton defined here from the show.js
// with the address of the relevant campaign and then in this
// file we will load up and then return the related campaign
// instance back to show.js

import web3 from './web3';
import Campaign from './build/Campaign.json';

export default (address) => {
  return new web3.eth.Contract(
    JSON.parse(Campaign.interface),
    address
  );
};
