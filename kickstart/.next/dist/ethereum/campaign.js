'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _Campaign = require('./build/Campaign.json');

var _Campaign2 = _interopRequireDefault(_Campaign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is basically for the show.js file to load up
// and show the relevant campaign details to the user
// we will call the funciton defined here from the show.js
// with the address of the relevant campaign and then in this
// file we will load up and then return the related campaign
// instance back to show.js

exports.default = function (address) {
  return new _web2.default.eth.Contract(JSON.parse(_Campaign2.default.interface), address);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL2NhbXBhaWduLmpzIl0sIm5hbWVzIjpbIndlYjMiLCJDYW1wYWlnbiIsImFkZHJlc3MiLCJldGgiLCJDb250cmFjdCIsIkpTT04iLCJwYXJzZSIsImludGVyZmFjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBT0EsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBYyxBQUVyQjs7Ozs7O0FBVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztrQkFLZSxVQUFBLEFBQUMsU0FBWSxBQUMxQjtTQUFPLElBQUksY0FBQSxBQUFLLElBQVQsQUFBYSxTQUNsQixLQUFBLEFBQUssTUFBTSxtQkFETixBQUNMLEFBQW9CLFlBRHRCLEFBQU8sQUFFTCxBQUVIO0FBTEQiLCJmaWxlIjoiY2FtcGFpZ24uanMiLCJzb3VyY2VSb290IjoiL2hvbWUvYWxpL3VkZW15Q29udHJhY3RzL2tpY2tzdGFydCJ9