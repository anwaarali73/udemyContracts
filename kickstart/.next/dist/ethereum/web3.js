'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// We are doing the following to rip out the current provider from the *out-dated*
// injected web3 by metamask. But we do need its provider as it sotres all our cryto
// details to access our accounts. I need to understand this concept properly. This
// might be the key in terms of making my local dockerised blockchain work with metamask
// with imported accounts. I need to describe my current problem in more descriptive manner
// const web3 = new Web3(window.web3.currentProvider); // .enable() to connect the metamask wallet for the first time and then you should remove it. Need to find a better and more automated way

// This time around we do not make use of const web3 as we expect it to be variable instead
var web3 = void 0; // This file is going to be different from what we had for the lottery contract
// As we are making use of Next js now which does the server-side rendering
// and it implies that window variable which is a reference to the client browser
// will be undefined.
// So instead we will make our own http provider at the server side and provide
// the link to our blockchain node

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  // This would clearly imply that we are in client's browser and metamask is running and has injected a web3 so we try to
  // hack it like in the lottery contract to make use of its provider with our version of web3
  web3 = new _web2.default(window.web3.currentProvider);
} else {
  // If above is not true then we are clearly at server side OR metamask is not running and injecting a web3 of its own
  // we create our own provider from scratch
  var provider = new _web2.default.providers.HttpProvider(
  // If a public testnet needs to be used
  // "https://goerli.infura.io/v3/416dd106343b41f489089a9ac6c042a7"
  // Or do the following if you want to use your local dockerised blockchain
  'http://localhost:8545');
  web3 = new _web2.default(provider);
}

exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL3dlYjMuanMiXSwibmFtZXMiOlsiV2ViMyIsIndlYjMiLCJ3aW5kb3ciLCJjdXJyZW50UHJvdmlkZXIiLCJwcm92aWRlciIsInByb3ZpZGVycyIsIkh0dHBQcm92aWRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBTUEsQUFBTzs7Ozs7O0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSxZQUFKLEdBZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQVdBLElBQUcsT0FBQSxBQUFPLFdBQVAsQUFBaUIsZUFBZSxPQUFPLE9BQVAsQUFBYyxTQUFqRCxBQUEwRCxhQUFhLEFBQ3JFO0FBQ0E7QUFDQTtTQUFPLEFBQUksa0JBQUssT0FBQSxBQUFPLEtBQXZCLEFBQU8sQUFBcUIsQUFDN0I7QUFKRCxPQUlPLEFBQ0w7QUFDQTtBQUNBO01BQU0sV0FBVyxJQUFJLGNBQUEsQUFBSyxVQUFULEFBQW1CLEFBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBSkYsQUFBaUIsQUFNakI7U0FBTyxBQUFJLGtCQUFYLEFBQU8sQUFBUyxBQUNqQjtBQUVEOztrQkFBQSxBQUFlIiwiZmlsZSI6IndlYjMuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvYWxpL3VkZW15Q29udHJhY3RzL2tpY2tzdGFydCJ9