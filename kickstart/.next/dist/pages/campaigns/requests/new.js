'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _campaign = require('../../../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _web = require('../../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _semanticUiReact = require('semantic-ui-react');

var _routes = require('../../../routes');

var _Layout = require('../../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _factory = require('../../../ethereum/factory');

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/ali/udemyContracts/kickstart/pages/campaigns/requests/new.js?entry';
// Following is an already deployed version of Campaign contract we load it up here in this file


var newRequest = function (_Component) {
  (0, _inherits3.default)(newRequest, _Component);

  function newRequest() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, newRequest);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = newRequest.__proto__ || (0, _getPrototypeOf2.default)(newRequest)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      description: '',
      value: '',
      recipient: '',
      errorMessage: '',
      loading: false,
      currentAccount: '',
      currentBalance: '',
      campaign: '',
      manager: ''
    }, _this.onCurrentCreds = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var accounts, balance, campaign, manager;
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
              return campaign.methods.manager().call();

            case 11:
              manager = _context.sent;

              _this.setState({ currentAccount: accounts[0], currentBalance: balance, campaign: campaign, manager: manager });

            case 13:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this2);
    })), _this.onSubmit = function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(event) {
        var _this$state, campaign, description, value, recipient;

        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                event.preventDefault();

                _this.setState({ loading: true, errorMessage: '' });
                _context2.prev = 2;

                // Now we destructure our relevant state constants for the createRequest parameters

                _this$state = _this.state, campaign = _this$state.campaign, description = _this$state.description, value = _this$state.value, recipient = _this$state.recipient;

                // Now we create a request for funding for this campaign

                _context2.next = 6;
                return campaign.methods.createRequest(description, _web2.default.utils.toWei(value, 'ether'), recipient).send({ from: _this.state.currentAccount });

              case 6:

                // After the successfull request creation we redirect our users back to the request index page
                _routes.Router.pushRoute('/campaigns/' + _this.props.address + '/requests');
                _context2.next = 12;
                break;

              case 9:
                _context2.prev = 9;
                _context2.t0 = _context2['catch'](2);

                _this.setState({ errorMessage: _context2.t0.message });

              case 12:
                _this.setState({ loading: false });

              case 13:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2, [[2, 9]]);
      }));

      return function (_x) {
        return _ref3.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(newRequest, [{
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(_Layout2.default, { numberOfCampaigns: this.props.campaigns.length, onCurrentCreds: this.onCurrentCreds(), __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, _react2.default.createElement(_routes.Link, { route: '/campaigns/' + this.props.address + '/requests', __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { secondary: true, icon: 'left chevron', content: 'Back to campaign requests', __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }))), _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, 'Create a new request for campaign at: ', this.props.address), _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, 'Campaign manager: ', this.state.manager, ' (only the manager can create requests)'), _react2.default.createElement('h4', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, 'You are at account: ', this.state.currentAccount), _react2.default.createElement('h4', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, 'Your balance is: ', this.state.currentBalance, ' ether'), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, 'Description: '), _react2.default.createElement(_semanticUiReact.Input, {
        value: this.state.description,
        onChange: function onChange(event) {
          return _this3.setState({ description: event.target.value });
        },
        placeholder: 'Enter request description',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, 'Value (ether): '), _react2.default.createElement(_semanticUiReact.Input, {
        value: this.state.value,
        onChange: function onChange(event) {
          return _this3.setState({ value: event.target.value });
        },
        label: 'ether',
        labelPosition: 'right',
        placeholder: 'Enter value in ether',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }, 'Recipient: '), _react2.default.createElement(_semanticUiReact.Input, {
        value: this.state.recipient,
        onChange: function onChange(event) {
          return _this3.setState({ recipient: event.target.value });
        },
        label: 'address (public key)',
        labelPosition: 'right',
        placeholder: 'Enter recipient address (its public key)',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      })), _react2.default.createElement(_semanticUiReact.Message, {
        error: true,
        header: 'Following went wrong while transacting',
        content: this.state.errorMessage,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { primary: true, loading: this.state.loading, content: 'Create request', __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        }
      })));
    }
  }], [{
    key: 'getInitialProps',

    // We need the address of the relevant campaign we are interested in and that is
    // why use getInitialProps to extract it
    value: function () {
      var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(props) {
        var address, campaigns;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                address = props.query.address;
                _context3.next = 3;
                return _factory2.default.methods.getDeployedCampaigns().call();

              case 3:
                campaigns = _context3.sent;
                return _context3.abrupt('return', { address: address, campaigns: campaigns });

              case 5:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getInitialProps(_x2) {
        return _ref4.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return newRequest;
}(_react.Component);

exports.default = newRequest;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9yZXF1ZXN0cy9uZXcuanMiXSwibmFtZXMiOlsicmVhY3QiLCJDb21wb25lbnQiLCJDYW1wYWlnbiIsIndlYjMiLCJNZXNzYWdlIiwiRm9ybSIsIkJ1dHRvbiIsIklucHV0IiwiTGluayIsIlJvdXRlciIsIkxheW91dCIsImZhY3RvcnkiLCJuZXdSZXF1ZXN0Iiwic3RhdGUiLCJkZXNjcmlwdGlvbiIsInZhbHVlIiwicmVjaXBpZW50IiwiZXJyb3JNZXNzYWdlIiwibG9hZGluZyIsImN1cnJlbnRBY2NvdW50IiwiY3VycmVudEJhbGFuY2UiLCJjYW1wYWlnbiIsIm1hbmFnZXIiLCJvbkN1cnJlbnRDcmVkcyIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJnZXRCYWxhbmNlIiwiYmFsYW5jZSIsInByb3BzIiwiYWRkcmVzcyIsIm1ldGhvZHMiLCJjYWxsIiwic2V0U3RhdGUiLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJjcmVhdGVSZXF1ZXN0IiwidXRpbHMiLCJ0b1dlaSIsInNlbmQiLCJmcm9tIiwicHVzaFJvdXRlIiwibWVzc2FnZSIsImNhbXBhaWducyIsImxlbmd0aCIsInRhcmdldCIsInF1ZXJ5IiwiZ2V0RGVwbG95ZWRDYW1wYWlnbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFFaEIsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFTLEFBQVMsQUFBTSxBQUFROztBQUNoQyxBQUFTLEFBQU0sQUFBYzs7QUFDN0IsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBYTs7Ozs7OztBQU5wQjs7O0ksQUFRTTs7Ozs7Ozs7Ozs7Ozs7O29OLEFBQ0o7bUJBQVEsQUFDTSxBQUNaO2FBRk0sQUFFQSxBQUNOO2lCQUhNLEFBR0ksQUFDVjtvQkFKTSxBQUlPLEFBQ2I7ZUFMTSxBQUtFLEFBQ1I7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LFdBQVcsTUFBQSxBQUFNLE9BQTFDLEFBQVMsQUFBYyxBQUEwQjtBQUY3RCxBQUdFO2VBSEYsQUFHUSxBQUNOO3VCQUpGLEFBSWdCLEFBQ2Q7cUJBTEYsQUFLYzs7b0JBTGQ7c0JBdkJKLEFBcUJFLEFBRUUsQUFTRjtBQVRFO0FBQ0UsMkJBUUosQUFBQztlQUFELEFBRUU7Z0JBRkYsQUFFUyxBQUNQO2lCQUFTLEtBQUEsQUFBSyxNQUhoQixBQUdzQjs7b0JBSHRCO3NCQWhDRixBQWdDRSxBQU1BO0FBTkE7QUFDRSwwQkFLRixBQUFDLHlDQUFPLFNBQVIsTUFBZ0IsU0FBUyxLQUFBLEFBQUssTUFBOUIsQUFBb0MsU0FBUyxTQUE3QyxBQUFxRDtvQkFBckQ7c0JBakRKLEFBQ0UsQUFVQSxBQXNDRSxBQUlMO0FBSks7Ozs7U0E3Rk47O0FBQ0E7Ozs2R0FDNkIsQTs7Ozs7bUJBQ25CO0EsMEJBQVksTUFBTSxBLE1BQWxCLEE7O3VCQUNnQixrQkFBQSxBQUFRLFFBQVIsQUFBZ0IsdUJBQWhCLEFBQXVDLEE7O21CQUF6RDtBO2tEQUVDLEVBQUUsU0FBRixTQUFXLFdBQVgsQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW5CYyxBLEFBaUh6Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJuZXcuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL2hvbWUvYWxpL3VkZW15Q29udHJhY3RzL2tpY2tzdGFydCJ9