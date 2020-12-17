// We will not use something like require(./contracts/Inbox.sol) because
// require() is usually used only .js files rather we will have to read in
// the contents of the Inbox.sol file. That is why the following method.
// The following method makes the code portable and OS agnostic

const path = require('path');
const fs = require('fs');

// Following we require in our solidity compiler

const solc = require('solc');

// __dirname is a constant in node environment that points to the current directory

const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol');

// Following we are going to read in the raw source code of our Inbox.sol file
// by specifying its path and the coding used

const source = fs.readFileSync(inboxPath, 'utf8');

// ==========================For debugging==========================================
// Following we specify the source code and the *NUMBER* of contracts that we want to
// compile for the solidity compiler

// For debugging purposes we can first check how the compilation is working by
// wrapping the compilation step in console.log

// **Important**: This way you can see bytecode and ABI and other useful properties in the
// console logged output

//console.log(solc.compile(source, 1));
// =================================================================================

// The following makes our compiled output object accessible to other project files
// We are extracting just one relevant contract named Inbox in this case

module.exports = solc.compile(source, 1).contracts[':Inbox'];
