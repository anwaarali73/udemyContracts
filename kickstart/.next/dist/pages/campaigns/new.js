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

var _Layout = require('../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _semanticUiReact = require('semantic-ui-react');

var _factory = require('../../ethereum/factory');

var _factory2 = _interopRequireDefault(_factory);

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/ali/udemyContracts/kickstart/pages/campaigns/new.js?entry';
// Ethereum related imports follow
// Importing the loaded CampaignFactory contract from our portable factory.js file


// And our configured web3 instance from web3.js file


// Following import is for the dynamic routing that we setup
// based on next-routes package in our routes.js file in the root directory


var CampaignNew = function (_Component) {
  (0, _inherits3.default)(CampaignNew, _Component);

  function CampaignNew() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, CampaignNew);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = CampaignNew.__proto__ || (0, _getPrototypeOf2.default)(CampaignNew)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      minimumContribution: '',
      errorMessage: '',
      currentAccount: '',
      cuurentBalance: '',
      loading: false
    }, _this.onSubmit = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        var accounts;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();

                _this.setState({ loading: true, errorMessage: '' });

                // Following to catch error if transaction fails
                _context.prev = 2;
                _context.next = 5;
                return _web2.default.eth.getAccounts();

              case 5:
                accounts = _context.sent;
                _context.next = 8;
                return _factory2.default.methods.createCampaign(_this.state.minimumContribution).send({ from: accounts[0] });

              case 8:

                // After the successfull execution of a transaction we re-route to our index.js page as follows
                _routes.Router.pushRoute('/');
                _context.next = 14;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context['catch'](2);

                _this.setState({ errorMessage: _context.t0.message });

              case 14:

                _this.setState({ loading: false });

              case 15:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2, [[2, 11]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _this.onEnter = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
      var accounts, balance;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _web2.default.eth.getAccounts();

            case 2:
              accounts = _context2.sent;
              _context2.next = 5;
              return _web2.default.eth.getBalance(accounts[0]);

            case 5:
              balance = _context2.sent;

              _this.setState({ currentAccount: accounts[0], currentBalance: balance });

            case 7:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, _this2);
    })), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  // Following function is just to show the user what account he is using at the moment


  (0, _createClass3.default)(CampaignNew, [{
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(_Layout2.default, { onEnter: this.onEnter(), __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, 'Create a new campaign:'), _react2.default.createElement('h4', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, '(You are at account: ', this.state.currentAccount, ')'), _react2.default.createElement('h4', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, '(Your current balance: ', this.state.currentBalance, ' ether)'), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, 'Minimum contribution'), _react2.default.createElement(_semanticUiReact.Input, {
        label: 'wei',
        placeholder: 'Enter an amount in wei',
        labelPosition: 'right',
        value: this.state.minimumContribution,
        onChange: function onChange(event) {
          return _this3.setState({ minimumContribution: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Following went wrong while transacting!', content: this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { loading: this.state.loading, primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, 'Create')));
    }
  }]);

  return CampaignNew;
}(_react.Component);

exports.default = CampaignNew;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9uZXcuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJMYXlvdXQiLCJGb3JtIiwiQnV0dG9uIiwiSW5wdXQiLCJNZXNzYWdlIiwiZmFjdG9yeSIsIndlYjMiLCJMaW5rIiwiUm91dGVyIiwiQ2FtcGFpZ25OZXciLCJzdGF0ZSIsIm1pbmltdW1Db250cmlidXRpb24iLCJlcnJvck1lc3NhZ2UiLCJjdXJyZW50QWNjb3VudCIsImN1dXJlbnRCYWxhbmNlIiwibG9hZGluZyIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInNldFN0YXRlIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJjcmVhdGVDYW1wYWlnbiIsInNlbmQiLCJmcm9tIiwicHVzaFJvdXRlIiwibWVzc2FnZSIsIm9uRW50ZXIiLCJnZXRCYWxhbmNlIiwiYmFsYW5jZSIsImN1cnJlbnRCYWxhbmNlIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQVMsQUFBTSxBQUFRLEFBQU87O0FBRzlCLEFBQU8sQUFBYTs7OztBQUdwQixBQUFPLEFBQVU7Ozs7QUFJakIsQUFBUyxBQUFNLEFBQWM7Ozs7O0FBVDdCO0FBQ0E7OztBQUdBOzs7QUFHQTtBQUNBOzs7SSxBQUdNOzs7Ozs7Ozs7Ozs7Ozs7c04sQUFDSjsyQkFBUSxBQUNlLEFBQ3JCO29CQUZNLEFBRVEsQUFDZDtzQkFITSxBQUdVLEFBQ2hCO3NCQUpNLEFBSVUsQUFDaEI7ZSxBQUxNLEFBS0c7QUFMSCxBQUNOLGEsQUFPRjsyRkFBVyxpQkFBQSxBQUFPLE9BQVA7WUFBQTtzRUFBQTtvQkFBQTs2Q0FBQTttQkFDVDtzQkFBQSxBQUFNLEFBRU47O3NCQUFBLEFBQUssU0FBUyxFQUFFLFNBQUYsQUFBVyxNQUFNLGNBQS9CLEFBQWMsQUFBK0IsQUFFN0M7O0FBTFM7Z0NBQUE7Z0NBQUE7dUJBT2dCLGNBQUEsQUFBSyxJQVByQixBQU9nQixBQUFTOzttQkFBMUI7QUFQQyxvQ0FBQTtnQ0FBQTt1QkFRRCxrQkFBQSxBQUFRLFFBQVIsQUFDSCxlQUFlLE1BQUEsQUFBSyxNQURqQixBQUN1QixxQkFEdkIsQUFFSCxLQUFLLEVBQUMsTUFBTSxTQVZSLEFBUUQsQUFFRSxBQUFPLEFBQVM7O21CQUV0Qjs7QUFDQTsrQkFBQSxBQUFPLFVBYkYsQUFhTCxBQUFpQjtnQ0FiWjtBQUFBOzttQkFBQTtnQ0FBQTtnREFlTDs7c0JBQUEsQUFBSyxTQUFTLEVBQUUsY0FBYyxZQWZ6QixBQWVMLEFBQWMsQUFBb0I7O21CQUd0Qzs7c0JBQUEsQUFBSyxTQUFTLEVBQUUsU0FsQlAsQUFrQlQsQUFBYyxBQUFXOzttQkFsQmhCO21CQUFBO2dDQUFBOztBQUFBO2lDQUFBO0E7Ozs7O2UsQUFzQlgsbUZBQVUsb0JBQUE7b0JBQUE7c0VBQUE7a0JBQUE7NkNBQUE7aUJBQUE7K0JBQUE7cUJBQ2UsY0FBQSxBQUFLLElBRHBCLEFBQ2UsQUFBUzs7aUJBQTFCO0FBREUsbUNBQUE7K0JBQUE7cUJBRWMsY0FBQSxBQUFLLElBQUwsQUFBUyxXQUFXLFNBRmxDLEFBRWMsQUFBb0IsQUFBUzs7aUJBQTdDO0FBRkUsa0NBR1I7O29CQUFBLEFBQUssU0FBUyxFQUFFLGdCQUFnQixTQUFsQixBQUFrQixBQUFTLElBQUksZ0JBSHJDLEFBR1IsQUFBYyxBQUErQzs7aUJBSHJEO2lCQUFBOytCQUFBOztBQUFBO21CQUFBO0E7QUFEVjs7Ozs7Ozs2QkFNUzttQkFDUDs7NkJBQ0UsQUFBQyxrQ0FBTyxTQUFTLEtBQWpCLEFBQWlCLEFBQUs7b0JBQXRCO3NCQUFBLEFBQ0U7QUFERjtPQUFBLGtCQUNFLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDQSwyQ0FBQSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FBMEIsOEJBQUEsQUFBSyxNQUEvQixBQUFxQyxnQkFGdkMsQUFFRSxBQUNBLHNCQUFBLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUE0QixnQ0FBQSxBQUFLLE1BQWpDLEFBQXVDLGdCQUh6QyxBQUdFLEFBQ0EsNEJBQUEsQUFBQyx1Q0FBSyxVQUFVLEtBQWhCLEFBQXFCLFVBQVUsT0FBTyxDQUFDLENBQUMsS0FBQSxBQUFLLE1BQTdDLEFBQW1EO29CQUFuRDtzQkFBQSxBQUNFO0FBREY7eUJBQ0csY0FBRCxzQkFBQSxBQUFNOztvQkFBTjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0EseUNBQUEsQUFBQztlQUFELEFBQ1EsQUFDTjtxQkFGRixBQUVjLEFBQ1o7dUJBSEYsQUFHZ0IsQUFDZDtlQUFPLEtBQUEsQUFBSyxNQUpkLEFBSW9CLEFBQ2xCO2tCQUFVLHlCQUFBO2lCQUFTLE9BQUEsQUFBSyxTQUFTLEVBQUMscUJBQXFCLE1BQUEsQUFBTSxPQUFuRCxBQUFTLEFBQWMsQUFBbUM7QUFMdEU7O29CQUFBO3NCQUhKLEFBQ0UsQUFFRSxBQVNGO0FBVEU7QUFDRSwyQkFRSixBQUFDLDBDQUFRLE9BQVQsTUFBZSxRQUFmLEFBQXNCLDJDQUEwQyxTQUFTLEtBQUEsQUFBSyxNQUE5RSxBQUFvRjtvQkFBcEY7c0JBWkYsQUFZRSxBQUNBO0FBREE7MEJBQ0EsQUFBQyx5Q0FBTyxTQUFTLEtBQUEsQUFBSyxNQUF0QixBQUE0QixTQUFTLFNBQXJDO29CQUFBO3NCQUFBO0FBQUE7U0FsQk4sQUFDRSxBQUlFLEFBYUUsQUFJUDs7Ozs7QUEzRHVCLEEsQUE4RDFCOztrQkFBQSxBQUFlIiwiZmlsZSI6Im5ldy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvaG9tZS9hbGkvdWRlbXlDb250cmFjdHMva2lja3N0YXJ0In0=