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
      var accounts, balance;
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

              _this.setState({ currentAccount: accounts[0], currentBalance: balance });

            case 7:
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
          lineNumber: 91
        }
      }, _react2.default.createElement(_Layout2.default, { numberOfCampaigns: this.props.campaigns.length, __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, 'Open requests for campaign at: ', this.props.address), _react2.default.createElement('h4', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, '51% votes are required for any request to be approved.'), _react2.default.createElement('h4', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, 'Campaign manager: ', this.props.manager, ' (only the manager can finalise the request)'), _react2.default.createElement('h4', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, 'You are at account: ', this.state.currentAccount), _react2.default.createElement('h4', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }, 'Your balance: ', this.state.currentBalance), _react2.default.createElement('hr', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }), _react2.default.createElement(_routes.Link, { route: '/campaigns/' + this.props.address + '/requests/new', __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, floated: 'right', style: { marginBottom: 10 }, labelPosition: 'right', icon: 'right chevron', content: 'Create a request', __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }))), _react2.default.createElement(_routes.Link, { route: '/campaigns/' + this.props.address, __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { secondary: true, floated: 'right', style: { marginBottom: 10 }, icon: 'left chevron', content: 'Back to campaign details', __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        }
      }))), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        }
      }, _react2.default.createElement('h5', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        }
      }, 'Found ', this.props.requestCount, ' requests.')), _react2.default.createElement(_semanticUiReact.Table, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      }, _react2.default.createElement(Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      }, _react2.default.createElement(Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        }
      }, _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        }
      }, 'ID'), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        }
      }, 'Desciption'), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      }, 'Amount required (ether)'), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        }
      }, 'Recipient'), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        }
      }, 'Approvals (Yes votes/contributors)'), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        }
      }, 'Approve'), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        }
      }, 'Finalise'))), _react2.default.createElement(Body, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9yZXF1ZXN0cy9pbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkxheW91dCIsIkxpbmsiLCJCdXR0b24iLCJUYWJsZSIsImZhY3RvcnkiLCJ3ZWIzIiwiQ2FtcGFpZ24iLCJSZXF1ZXN0Um93IiwiUmVxdWVzdEluZGV4Iiwic3RhdGUiLCJjdXJyZW50QWNjb3VudCIsImN1cnJlbnRCYWxhbmNlIiwib25FbnRlciIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJnZXRCYWxhbmNlIiwiYmFsYW5jZSIsInNldFN0YXRlIiwicHJvcHMiLCJyZXF1ZXN0cyIsIm1hcCIsInJlcXVlc3QiLCJpbmRleCIsImFkZHJlc3MiLCJhcHByb3ZlcnNDb3VudCIsIkhlYWRlciIsIlJvdyIsIkhlYWRlckNlbGwiLCJCb2R5IiwiY2FtcGFpZ25zIiwibGVuZ3RoIiwibWFuYWdlciIsIm1hcmdpbkJvdHRvbSIsInJlcXVlc3RDb3VudCIsInJlbmRlclJvd3MiLCJxdWVyeSIsIm1ldGhvZHMiLCJnZXREZXBsb3llZENhbXBhaWducyIsImNhbGwiLCJjYW1wYWlnbiIsImdldFJlcXVlc3RzQ291bnQiLCJhbGwiLCJBcnJheSIsInBhcnNlSW50IiwiZmlsbCIsImVsZW1lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFTLEFBQVk7O0FBQ3JCLEFBQVMsQUFBUTs7QUFDakIsQUFBTyxBQUFhOzs7O0FBQ3BCLEFBQU8sQUFBVTs7OztBQUVqQixBQUFPLEFBQWM7Ozs7QUFJckIsQUFBTyxBQUFnQjs7Ozs7OztBQUx2Qjs7O0FBR0E7QUFDQTs7O0lBR00sQTs7Ozs7Ozs7Ozs7Ozs7O3dOLEFBQ0o7c0JBQVEsQUFDUyxBQUNmO3NCLEFBRk0sQUFFUztBQUZULEFBQ04sYUFpRUYsQSxtRkFBVSxt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OzttQkFBekQ7QTs7dUJBTXVCLFNBQUEsQUFBUyxRQUFULEFBQWlCLGlCLEFBQWpCLEFBQWtDOzttQkFBekQ7QTs7dUJBR2dCLFNBQUEsQUFBUyxRQUFULEFBQWlCLFVBQWpCLEEsQUFBMkI7O21CQUEzQztBOzt5Q0FHaUIsQUFBUSxVQUN2QixTQUFOLEFBQU0sQUFBUyxlQUFmLEFBQThCLE9BQTlCLEFBQXFDLElBQUksVUFBQSxBQUFDLFNBQUQsQUFBVSxPQUFVLEFBQzNEO0FBQ0E7eUJBQU8sU0FBQSxBQUFTLFFBQVQsQUFBaUIsU0FBakIsQUFBMEIsT0FBakMsQUFBTyxBQUFpQyxBQUN6QztBQUpvQixBQUNyQixBLGlCQUFBLENBRHFCOzttQkFBakI7QTtrREFVQyxFQUFFLFNBQUYsU0FBVyxXQUFYLFdBQXNCLFVBQXRCLFVBQWdDLGNBQWhDLGNBQThDLGdCQUE5QyxnQkFBOEQsU0FBOUQsQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTlDZ0IsQSxBQXNIM0I7O2tCQUFBLEFBQWUiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL2hvbWUvYWxpL3VkZW15Q29udHJhY3RzL2tpY2tzdGFydCJ9