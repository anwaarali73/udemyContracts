'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Layout = require('../../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _routes = require('../../../routes');

var _semanticUiReact = require('semantic-ui-react');

var _factory = require('../../../ethereum/factory');

var _factory2 = _interopRequireDefault(_factory);

var _web = require('../../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _campaign = require('../../../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _RequestRow = require('../../../components/RequestRow');

var _RequestRow2 = _interopRequireDefault(_RequestRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/ali/udemyContracts/kickstart/pages/campaigns/requests/index.js?entry';
// We import our already deployed Campaign instance and load it up here


// Following import is for the component that makes redering our individual requests
// quite portable and concise


var RequestIndex = function (_Component) {
  (0, _inherits3.default)(RequestIndex, _Component);

  function RequestIndex() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, RequestIndex);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RequestIndex.__proto__ || (0, _getPrototypeOf2.default)(RequestIndex)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      currentAccount: '',
      currentBalance: ''
    }, _this.onEnter = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var accounts, balance, campaign, approver;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _web2.default.eth.getAccounts();

            case 2:
              accounts = _context.sent;
              _context.next = 5;
              return _web2.default.eth.getBalance(accounts[0]);

            case 5:
              balance = _context.sent;
              _context.next = 8;
              return (0, _campaign2.default)(_this.props.address);

            case 8:
              campaign = _context.sent;
              _context.next = 11;
              return campaign.methods.approvers(accounts[0]).call();

            case 11:
              approver = _context.sent;

              _this.setState({ currentAccount: accounts[0], currentBalance: balance, approver: approver });

            case 13:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this2);
    })), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(RequestIndex, [{
    key: 'renderRows',

    // Following helper function is to configure our /components/RequestRow.js file
    // whenever you try to return a list of items in react it expect a unique key for each item
    // that is why we use request index as a key for each individual request
    value: function renderRows() {
      var _this3 = this;

      return this.props.requests.map(function (request, index) {
        return _react2.default.createElement(_RequestRow2.default, {
          key: index,
          id: index,
          request: request,
          address: _this3.props.address,
          approversCount: _this3.props.approversCount,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 69
          }
        });
      });
    }

    // Following function is just to show the user what account he is using at the moment

  }, {
    key: 'render',
    value: function render() {
      // Following is the fancy es2015 destructuring for the Table tag to make its use easier
      var Header = _semanticUiReact.Table.Header,
          Row = _semanticUiReact.Table.Row,
          HeaderCell = _semanticUiReact.Table.HeaderCell,
          Body = _semanticUiReact.Table.Body;

      return _react2.default.createElement('div', { onEnter: this.onEnter(), __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, _react2.default.createElement(_Layout2.default, { numberOfCampaigns: this.props.campaigns.length, __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, 'Open requests for campaign at: ', this.props.address), _react2.default.createElement('h4', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, '51% votes are required for any request to be approved.'), _react2.default.createElement('h4', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }, 'Campaign manager: ', this.props.manager, ' (only the manager can finalise the request)'), _react2.default.createElement('h4', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }, 'You are at account: ', this.state.currentAccount), _react2.default.createElement('h4', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }, 'Your balance: ', this.state.currentBalance), _react2.default.createElement('h4', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }, 'Only approvers can approve a request'), this.state.approver ? _react2.default.createElement('h4', { style: { color: 'green' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }, 'You are an approver') : _react2.default.createElement('h4', { style: { color: 'red' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }, 'You are not an approver yet'), _react2.default.createElement('hr', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      }), _react2.default.createElement(_routes.Link, { route: '/campaigns/' + this.props.address + '/requests/new', __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, floated: 'right', style: { marginBottom: 10 }, labelPosition: 'right', icon: 'right chevron', content: 'Create a request', __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      }))), _react2.default.createElement(_routes.Link, { route: '/campaigns/' + this.props.address, __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { secondary: true, floated: 'right', style: { marginBottom: 10 }, icon: 'left chevron', content: 'Back to campaign details', __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        }
      }))), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      }, _react2.default.createElement('h5', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      }, 'Found ', this.props.requestCount, ' requests.')), _react2.default.createElement(_semanticUiReact.Table, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        }
      }, _react2.default.createElement(Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        }
      }, _react2.default.createElement(Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        }
      }, _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        }
      }, 'ID'), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        }
      }, 'Desciption'), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        }
      }, 'Amount required (ether)'), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        }
      }, 'Recipient'), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        }
      }, 'Approvals (Yes votes/contributors)'), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        }
      }, 'Voted'), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        }
      }, 'Approve'), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        }
      }, 'Finalise'), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        }
      }, 'Tx latency'))), _react2.default.createElement(Body, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        }
      }, this.renderRows()))));
    }
  }], [{
    key: 'getInitialProps',

    // getInitialProps is different from the general props. getInitialProps referes to the data
    // we send to this component from the outside
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(props) {
        var address, campaigns, campaign, requestCount, approversCount, manager, requests;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                address = props.query.address; // This destructuring is the same as const address = props.query.address

                _context2.next = 3;
                return _factory2.default.methods.getDeployedCampaigns().call();

              case 3:
                campaigns = _context2.sent;

                // Now up untill solidity 0.4.17 there is no support to return an array of structs
                // or user defined data types in general. That is why we make use of some fancy js
                // to handle multiple calls to our Campaign instance to extract all the requests in one go
                // As each call to a smart contract method involves the resolution of a 'promise' so we make
                // use of promise.all() method to extract all the requests' data and populate an array for
                // further use with it as follows.

                // First we load up our relevant Campaign instance at the specifed address that we are receiving in this
                // component's getInitialProps method.

                campaign = (0, _campaign2.default)(address);

                // Now lets extract how many requests this instance of Campaign already has

                _context2.next = 7;
                return campaign.methods.getRequestsCount().call();

              case 7:
                requestCount = _context2.sent;
                _context2.next = 10;
                return campaign.methods.approversCount().call();

              case 10:
                approversCount = _context2.sent;
                _context2.next = 13;
                return campaign.methods.manager().call();

              case 13:
                manager = _context2.sent;
                _context2.next = 16;
                return _promise2.default.all(Array(parseInt(requestCount)).fill().map(function (element, index) {
                  // requests is the public array of structs we created in our Campaign.sol file
                  return campaign.methods.requests(index).call();
                }));

              case 16:
                requests = _context2.sent;
                return _context2.abrupt('return', { address: address, campaigns: campaigns, requests: requests, requestCount: requestCount, approversCount: approversCount, manager: manager });

              case 18:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getInitialProps(_x) {
        return _ref3.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return RequestIndex;
}(_react.Component);

exports.default = RequestIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9yZXF1ZXN0cy9pbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkxheW91dCIsIkxpbmsiLCJCdXR0b24iLCJUYWJsZSIsImZhY3RvcnkiLCJ3ZWIzIiwiQ2FtcGFpZ24iLCJSZXF1ZXN0Um93IiwiUmVxdWVzdEluZGV4Iiwic3RhdGUiLCJjdXJyZW50QWNjb3VudCIsImN1cnJlbnRCYWxhbmNlIiwib25FbnRlciIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJnZXRCYWxhbmNlIiwiYmFsYW5jZSIsInByb3BzIiwiYWRkcmVzcyIsImNhbXBhaWduIiwibWV0aG9kcyIsImFwcHJvdmVycyIsImNhbGwiLCJhcHByb3ZlciIsInNldFN0YXRlIiwicmVxdWVzdHMiLCJtYXAiLCJyZXF1ZXN0IiwiaW5kZXgiLCJhcHByb3ZlcnNDb3VudCIsIkhlYWRlciIsIlJvdyIsIkhlYWRlckNlbGwiLCJCb2R5IiwiY2FtcGFpZ25zIiwibGVuZ3RoIiwibWFuYWdlciIsImNvbG9yIiwibWFyZ2luQm90dG9tIiwicmVxdWVzdENvdW50IiwicmVuZGVyUm93cyIsInF1ZXJ5IiwiZ2V0RGVwbG95ZWRDYW1wYWlnbnMiLCJnZXRSZXF1ZXN0c0NvdW50IiwiYWxsIiwiQXJyYXkiLCJwYXJzZUludCIsImZpbGwiLCJlbGVtZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBUyxBQUFZOztBQUNyQixBQUFTLEFBQVE7O0FBQ2pCLEFBQU8sQUFBYTs7OztBQUNwQixBQUFPLEFBQVU7Ozs7QUFFakIsQUFBTyxBQUFjOzs7O0FBSXJCLEFBQU8sQUFBZ0I7Ozs7Ozs7QUFMdkI7OztBQUdBO0FBQ0E7OztJLEFBR007Ozs7Ozs7Ozs7Ozs7Ozt3TixBQUNKO3NCQUFRLEFBQ1MsQUFDZjtzQixBQUZN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