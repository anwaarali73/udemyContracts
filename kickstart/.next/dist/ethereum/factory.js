'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _CampaignFactory = require('./build/CampaignFactory.json');

var _CampaignFactory2 = _interopRequireDefault(_CampaignFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Now we load up this contract at the specified address on our *local* blockchain
// The purpose of this file is to make things more portable
// we will do all the necessary imports and loads here and then
// use an instance from this at other places

// Now this is the instace of Web3 with the relevant provider we setup in web3.js file
var instance = new _web2.default.eth.Contract(JSON.parse(_CampaignFactory2.default.interface), '0x6D2D1CED74E4fAd7508A842017eaf5f93f63931B');

// Now we import our already compiled contract from the build directory and load
// it up at the address where it was originally deployed to our local dockerised blockchain. The address we saved
// in file factoryAddress.txt
exports.default = instance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL2ZhY3RvcnkuanMiXSwibmFtZXMiOlsid2ViMyIsIkNhbXBhaWduRmFjdG9yeSIsImluc3RhbmNlIiwiZXRoIiwiQ29udHJhY3QiLCJKU09OIiwicGFyc2UiLCJpbnRlcmZhY2UiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUtBLEFBQU8sQUFBVTs7OztBQUtqQixBQUFPLEFBQXFCOzs7Ozs7QUFFNUI7QUFaQTtBQUNBO0FBQ0E7O0FBRUE7QUFTQSxJQUFNLFdBQVcsSUFBSSxjQUFBLEFBQUssSUFBVCxBQUFhLFNBQzVCLEtBQUEsQUFBSyxNQUFNLDBCQURJLEFBQ2YsQUFBMkIsWUFEN0IsQUFBaUIsQUFFZixBQUdGOztBQVhBO0FBQ0E7QUFDQTtrQkFTQSxBQUFlIiwiZmlsZSI6ImZhY3RvcnkuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvYWxpL3VkZW15Q29udHJhY3RzL2tpY2tzdGFydCJ9