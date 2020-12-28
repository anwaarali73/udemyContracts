// This compile script is going to be a bit different from the
// lottery contract's compile script in that we will only need to
// run it once and then stored the compiled output (in json form for the interface or ABI) to the build directory for future use
// !Contents from the build directory can then used to port our contract to other platforms such as truffle suite!

const path = require('path');
const solc = require('solc');
console.log(solc);
const fs = require('fs-extra');

// first we remove the build directory if it already exists
// __dirname is the reference to the current directory
// then we traverse the path to our desired location with , seperated "" list
const buildPath = path.resolve(__dirname, 'build');
fs.removeSync(buildPath);

// Path to our smart contract file
const campaignPath = path.resolve(__dirname, 'contracts', 'Campaign.sol');
//console.log(campaignPath);

// Now we read in the source code of from our contract file with the contract path and text encoding arguments
const source = fs.readFileSync(campaignPath, 'utf8');
//console.log(source);

// Now the actual compilation step
// Output will contain our CampaignFactory and Campaign contracts
const output = solc.compile(source, 1).contracts;
console.log(output);

// Now we create a new build directory and write our output from above in json form in it
// In the output we will have keys as the name of our contracts as :Compaign. In order to remove the :
// we use 'replace' on contract in the path.resolve() function
fs.ensureDirSync(buildPath);
for(let contract in output) {
  fs.outputJsonSync(
    path.resolve(buildPath, contract.replace(':', '') + '.json'),
    output[contract]
  );
}
