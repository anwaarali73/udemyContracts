// The purpose of this file is to make things more portable
// we will do all the necessary imports and loads here and then
// use an instance from this at other places

// Now this is the instace of Web3 with the relevant provider we setup in web3.js file
import web3 from './web3';

// Now we import our already compiled contract from the build directory and load
// it up at the address where it was originally deployed to our local dockerised blockchain. The address we saved
// in file factoryAddress.txt
import CampaignFactory from './build/CampaignFactory.json';

// Now we load up this contract at the specified address on our *local* blockchain
const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x6D2D1CED74E4fAd7508A842017eaf5f93f63931B'
 );

export default instance;
