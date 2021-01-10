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
      loading: false,
      tx_time: ''
    }, _this.onSubmit = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        var start_time, accounts, end_time;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();

                _this.setState({ loading: true, errorMessage: '' });
                _this.setState({ tx_time: '' });
                start_time = new Date(); // For transaction confirmation time

                // Following to catch error if transaction fails

                _context.prev = 4;
                _context.next = 7;
                return _web2.default.eth.getAccounts();

              case 7:
                accounts = _context.sent;
                _context.next = 10;
                return _factory2.default.methods.createCampaign(_this.state.minimumContribution).send({ from: accounts[0] });

              case 10:
                end_time = new Date();

                _this.setState({ tx_time: end_time - start_time });
                // After the successfull execution of a transaction we re-route to our index.js page as follows
                //Router.pushRoute('/');
                _context.next = 17;
                break;

              case 14:
                _context.prev = 14;
                _context.t0 = _context['catch'](4);

                _this.setState({ errorMessage: _context.t0.message });

              case 17:

                _this.setState({ loading: false });

              case 18:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2, [[4, 14]]);
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

  (0, _createClass3.default)(CampaignNew, [{
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement('div', { onEnter: this.onEnter(), __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, _react2.default.createElement(_Layout2.default, { numberOfCampaigns: this.props.campaigns.length, __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, 'Create a new campaign:'), _react2.default.createElement('h4', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, 'You are at account: ', this.state.currentAccount), _react2.default.createElement('h4', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, 'Your current balance: ', this.state.currentBalance, ' ether'), _react2.default.createElement('h4', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, 'Your transaction took: ', this.state.tx_time, ' ms'), _react2.default.createElement('hr', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
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
          lineNumber: 73
        }
      })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Following went wrong while transacting!', content: this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { loading: this.state.loading, primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, 'Create'))));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
        var campaigns;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _factory2.default.methods.getDeployedCampaigns().call();

              case 2:
                campaigns = _context3.sent;
                return _context3.abrupt('return', { campaigns: campaigns });

              case 4:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getInitialProps() {
        return _ref4.apply(this, arguments);
      }

      return getInitialProps;
    }()

    // Following function is just to show the user what account he is using at the moment

  }]);

  return CampaignNew;
}(_react.Component);

exports.default = CampaignNew;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9uZXcuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJMYXlvdXQiLCJGb3JtIiwiQnV0dG9uIiwiSW5wdXQiLCJNZXNzYWdlIiwiZmFjdG9yeSIsIndlYjMiLCJMaW5rIiwiUm91dGVyIiwiQ2FtcGFpZ25OZXciLCJzdGF0ZSIsIm1pbmltdW1Db250cmlidXRpb24iLCJlcnJvck1lc3NhZ2UiLCJjdXJyZW50QWNjb3VudCIsImN1dXJlbnRCYWxhbmNlIiwibG9hZGluZyIsInR4X3RpbWUiLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzZXRTdGF0ZSIsInN0YXJ0X3RpbWUiLCJEYXRlIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJjcmVhdGVDYW1wYWlnbiIsInNlbmQiLCJmcm9tIiwiZW5kX3RpbWUiLCJtZXNzYWdlIiwib25FbnRlciIsImdldEJhbGFuY2UiLCJiYWxhbmNlIiwiY3VycmVudEJhbGFuY2UiLCJwcm9wcyIsImNhbXBhaWducyIsImxlbmd0aCIsInRhcmdldCIsInZhbHVlIiwiZ2V0RGVwbG95ZWRDYW1wYWlnbnMiLCJjYWxsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFTLEFBQU0sQUFBUSxBQUFPOztBQUc5QixBQUFPLEFBQWE7Ozs7QUFHcEIsQUFBTyxBQUFVOzs7O0FBSWpCLEFBQVMsQUFBTSxBQUFjOzs7OztBQVQ3QjtBQUNBOzs7QUFHQTs7O0FBR0E7QUFDQTs7O0ksQUFHTTs7Ozs7Ozs7Ozs7Ozs7O3NOQUNKLEE7MkJBQVEsQUFDZSxBQUNyQjtvQkFGTSxBQUVRLEFBQ2Q7c0JBSE0sQUFHVSxBQUNoQjtzQkFKTSxBQUlVLEFBQ2hCO2VBTE0sQUFLRyxBQUNUO2VBTk0sQSxBQU1HO0FBTkgsQUFDTixhLEFBYUY7MkZBQVcsaUJBQUEsQUFBTyxPQUFQO2tDQUFBO3NFQUFBO29CQUFBOzZDQUFBO21CQUNUO3NCQUFBLEFBQU0sQUFFTjs7c0JBQUEsQUFBSyxTQUFTLEVBQUUsU0FBRixBQUFXLE1BQU0sY0FBL0IsQUFBYyxBQUErQixBQUM3QztzQkFBQSxBQUFLLFNBQVMsRUFBRSxTQUFoQixBQUFjLEFBQVcsQUFDbkI7QUFMRyw2QkFLVSxJQUxWLEFBS1UsQUFBSSxRQUFVLEFBRWpDOztBQVBTOztnQ0FBQTtnQ0FBQTt1QkFTZ0IsY0FBQSxBQUFLLElBVHJCLEFBU2dCLEFBQVM7O21CQUExQjtBQVRDLG9DQUFBO2dDQUFBO3VCQVVELGtCQUFBLEFBQVEsUUFBUixBQUNILGVBQWUsTUFBQSxBQUFLLE1BRGpCLEFBQ3VCLHFCQUR2QixBQUVILEtBQUssRUFBQyxNQUFNLFNBWlIsQUFVRCxBQUVFLEFBQU8sQUFBUzs7bUJBRWxCO0FBZEMsMkJBY1UsSUFkVixBQWNVLEFBQUksQUFDckI7O3NCQUFBLEFBQUssU0FBUyxFQUFFLFNBQVUsV0FBMUIsQUFBYyxBQUFxQixBQUNqQztBQUNBO0FBakJLO2dDQUFBO0FBQUE7O21CQUFBO2dDQUFBO2dEQW1CTDs7c0JBQUEsQUFBSyxTQUFTLEVBQUUsY0FBYyxZQW5CekIsQUFtQkwsQUFBYyxBQUFvQjs7bUJBR3RDOztzQkFBQSxBQUFLLFNBQVMsRUFBRSxTQXRCUCxBQXNCVCxBQUFjLEFBQVc7O21CQXRCaEI7bUJBQUE7Z0NBQUE7O0FBQUE7aUNBQUE7QTs7Ozs7ZUEwQlgsQSxtRkFBVSxvQkFBQTtvQkFBQTtzRUFBQTtrQkFBQTs2Q0FBQTtpQkFBQTsrQkFBQTtxQkFDZSxjQUFBLEFBQUssSUFEcEIsQUFDZSxBQUFTOztpQkFBMUI7QUFERSxtQ0FBQTsrQkFBQTtxQkFFYyxjQUFBLEFBQUssSUFBTCxBQUFTLFdBQVcsU0FGbEMsQUFFYyxBQUFvQixBQUFTOztpQkFBN0M7QUFGRSxrQ0FHUjs7b0JBQUEsQUFBSyxTQUFTLEVBQUUsZ0JBQWdCLFNBQWxCLEFBQWtCLEFBQVMsSUFBSSxnQkFIckMsQUFHUixBQUFjLEFBQStDOztpQkFIckQ7aUJBQUE7K0JBQUE7O0FBQUE7bUJBQUE7QTs7Ozs7NkJBS0Q7bUJBQ1A7OzZCQUNFLGNBQUEsU0FBSyxTQUFTLEtBQWQsQUFBYyxBQUFLO29CQUFuQjtzQkFBQSxBQUNBO0FBREE7T0FBQSxrQkFDQSxBQUFDLGtDQUFPLG1CQUFtQixLQUFBLEFBQUssTUFBTCxBQUFXLFVBQXRDLEFBQWdEO29CQUFoRDtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUNBLDJDQUFBLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUF5Qiw2QkFBQSxBQUFLLE1BRmhDLEFBRUUsQUFBb0MsQUFDcEMsaUNBQUEsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBQTJCLCtCQUFBLEFBQUssTUFBaEMsQUFBc0MsZ0JBSHhDLEFBR0UsQUFDQSwyQkFBQSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FBNEIsZ0NBQUEsQUFBSyxNQUFqQyxBQUF1QyxTQUp6QyxBQUlFLEFBQ0E7O29CQUFBO3NCQUxGLEFBS0UsQUFDQTtBQURBO0FBQUEsMEJBQ0EsQUFBQyx1Q0FBSyxVQUFVLEtBQWhCLEFBQXFCLFVBQVUsT0FBTyxDQUFDLENBQUMsS0FBQSxBQUFLLE1BQTdDLEFBQW1EO29CQUFuRDtzQkFBQSxBQUNFO0FBREY7eUJBQ0csY0FBRCxzQkFBQSxBQUFNOztvQkFBTjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0EseUNBQUEsQUFBQztlQUFELEFBQ1EsQUFDTjtxQkFGRixBQUVjLEFBQ1o7dUJBSEYsQUFHZ0IsQUFDZDtlQUFPLEtBQUEsQUFBSyxNQUpkLEFBSW9CLEFBQ2xCO2tCQUFVLHlCQUFBO2lCQUFTLE9BQUEsQUFBSyxTQUFTLEVBQUMscUJBQXFCLE1BQUEsQUFBTSxPQUFuRCxBQUFTLEFBQWMsQUFBbUM7QUFMdEU7O29CQUFBO3NCQUhKLEFBQ0UsQUFFRSxBQVNGO0FBVEU7QUFDRSwyQkFRSixBQUFDLDBDQUFRLE9BQVQsTUFBZSxRQUFmLEFBQXNCLDJDQUEwQyxTQUFTLEtBQUEsQUFBSyxNQUE5RSxBQUFvRjtvQkFBcEY7c0JBWkYsQUFZRSxBQUNBO0FBREE7MEJBQ0EsQUFBQyx5Q0FBTyxTQUFTLEtBQUEsQUFBSyxNQUF0QixBQUE0QixTQUFTLFNBQXJDO29CQUFBO3NCQUFBO0FBQUE7U0FyQk4sQUFDRSxBQUNBLEFBTUUsQUFhRSxBQUtQOzs7Ozs7Ozs7Ozs7dUJBOUR5QixrQkFBQSxBQUFRLFFBQVIsQUFBZ0IsdUJBQWhCLEEsQUFBdUM7O21CQUF6RDtBO2tEQUNDLEVBQUUsV0FBRixBOzs7Ozs7Ozs7Ozs7Ozs7QUE0QlQ7Ozs7Ozs7QUF4Q3dCLEEsQUE0RTFCOztrQkFBQSxBQUFlIiwiZmlsZSI6Im5ldy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvaG9tZS9hbGkvdWRlbXlDb250cmFjdHMva2lja3N0YXJ0In0=