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

var _semanticUiReact = require('semantic-ui-react');

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _campaign = require('../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/ali/udemyContracts/kickstart/components/ContributeForm.js';
// To enable users to have the ability to contribute while looking at a specific
// campaign's details. This will be used in show.js file

// We will be receiving the address of the relevant and currently redered campaign
// from show.js and we will send user's money to this specific campaign's address

// Following we will import campaign.js to load up the relevant campaign whose
// address we are receiving from show.js and is currently being rendered


var ContributeForm = function (_Component) {
  (0, _inherits3.default)(ContributeForm, _Component);

  function ContributeForm() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ContributeForm);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ContributeForm.__proto__ || (0, _getPrototypeOf2.default)(ContributeForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      currentAccount: '',
      currentBalance: '',
      currentBlock: '',
      numberOfTransactions: '',
      value: '',
      loading: false,
      errorMessage: '',
      tx_time: ''
    }, _this.onSubmit = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        var campaign, start_time, end_time;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();

                _this.setState({ loading: true, errorMessage: '' });
                // Now we load up our relevant instance of the campaign
                campaign = (0, _campaign2.default)(_this.props.address);
                _context.prev = 3;
                start_time = new Date();
                _context.next = 7;
                return campaign.methods.contribute().send({
                  from: _this.state.currentAccount,
                  value: _web2.default.utils.toWei(_this.state.value, 'ether')
                });

              case 7:
                end_time = new Date();

                _this.setState({ tx_time: end_time - start_time });
                // After the above we refresh the page to show the updated campaign data
                _routes.Router.replaceRoute('/campaigns/' + _this.props.address);
                _context.next = 15;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context['catch'](3);

                _this.setState({ errorMessage: _context.t0.message });

              case 15:
                // We set value: '' to clear the contribute form after the page reload
                _this.setState({ loading: false, value: '' });

              case 16:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2, [[3, 12]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _this.onEnter = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
      var accounts, balance, numberOfTransactions, currentBlock;
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
              _context2.next = 8;
              return _web2.default.eth.getTransactionCount(accounts[0]);

            case 8:
              numberOfTransactions = _context2.sent;
              _context2.next = 11;
              return _web2.default.eth.getBlockNumber();

            case 11:
              currentBlock = _context2.sent;

              _this.setState({ currentAccount: accounts[0], currentBalance: balance, numberOfTransactions: numberOfTransactions, currentBlock: currentBlock });

            case 13:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, _this2);
    })), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  // Following function is just to show the user what account he is using at the moment


  (0, _createClass3.default)(ContributeForm, [{
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement('div', { onEnter: this.onEnter(), __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, 'Contribute to this campaign: '), _react2.default.createElement(_semanticUiReact.Input, {
        value: this.state.value,
        onChange: function onChange(event) {
          return _this3.setState({ value: event.target.value });
        },
        label: 'ether',
        labelPosition: 'right',
        placeholder: 'Enter amount in ether',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      })), _react2.default.createElement(_semanticUiReact.Message, {
        error: true,
        header: 'Following went wrong while transacting!',
        content: this.state.errorMessage,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }), _react2.default.createElement(_semanticUiReact.Button, {
        primary: true,
        loading: this.state.loading,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, 'Contribute')), _react2.default.createElement('h4', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, 'Current block: ', this.state.currentBlock), _react2.default.createElement('h4', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, 'Your account: ', this.state.currentAccount), _react2.default.createElement('h4', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, 'Your balance: ', this.state.currentBalance, ' ether'), _react2.default.createElement('h4', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, 'Your total transactions: ', this.state.numberOfTransactions), _react2.default.createElement('h4', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, 'Your last transaction took: ', this.state.tx_time, ' ms'));
    }
  }]);

  return ContributeForm;
}(_react.Component);

exports.default = ContributeForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQ29udHJpYnV0ZUZvcm0uanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJGb3JtIiwiSW5wdXQiLCJNZXNzYWdlIiwiQnV0dG9uIiwid2ViMyIsIkNhbXBhaWduIiwiUm91dGVyIiwiQ29udHJpYnV0ZUZvcm0iLCJzdGF0ZSIsImN1cnJlbnRBY2NvdW50IiwiY3VycmVudEJhbGFuY2UiLCJjdXJyZW50QmxvY2siLCJudW1iZXJPZlRyYW5zYWN0aW9ucyIsInZhbHVlIiwibG9hZGluZyIsImVycm9yTWVzc2FnZSIsInR4X3RpbWUiLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzZXRTdGF0ZSIsImNhbXBhaWduIiwicHJvcHMiLCJhZGRyZXNzIiwic3RhcnRfdGltZSIsIkRhdGUiLCJtZXRob2RzIiwiY29udHJpYnV0ZSIsInNlbmQiLCJmcm9tIiwidXRpbHMiLCJ0b1dlaSIsImVuZF90aW1lIiwicmVwbGFjZVJvdXRlIiwibWVzc2FnZSIsIm9uRW50ZXIiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwiZ2V0QmFsYW5jZSIsImJhbGFuY2UiLCJnZXRUcmFuc2FjdGlvbkNvdW50IiwiZ2V0QmxvY2tOdW1iZXIiLCJ0YXJnZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFNLEFBQU8sQUFBUzs7QUFDL0IsQUFBTyxBQUFVOzs7O0FBSWpCLEFBQU8sQUFBYzs7OztBQUVyQixBQUFTLEFBQWM7Ozs7O0FBZHZCO0FBQ0E7O0FBRUE7QUFDQTs7QUFNQTtBQUNBOzs7SUFLTSxBOzs7Ozs7Ozs7Ozs7Ozs7NE4sQUFDSjtzQkFBUSxBQUNTLEFBQ2Y7c0JBRk0sQUFFUyxBQUNmO29CQUhNLEFBR1EsQUFDZDs0QkFKTSxBQUlnQixBQUN0QjthQUxNLEFBS0MsQUFDUDtlQU5NLEFBTUcsQUFDVDtvQkFQTSxB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TUE7QUFOQTtBQUNFLDBCQUtGLEFBQUM7aUJBQUQsQUFFRTtpQkFBUyxLQUFBLEFBQUssTUFGaEIsQUFFc0I7O29CQUZ0QjtzQkFBQTtBQUFBO0FBQ0UsU0FwQkosQUFDQSxBQWtCRSxBQU9GLGdDQUFBLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUFvQix3QkFBQSxBQUFLLE1BMUJ6QixBQTBCQSxBQUErQixBQUMvQiwrQkFBQSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FBbUIsdUJBQUEsQUFBSyxNQTNCeEIsQUEyQkEsQUFBOEIsQUFDOUIsaUNBQUEsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBQW1CLHVCQUFBLEFBQUssTUFBeEIsQUFBOEIsZ0JBNUI5QixBQTRCQSxBQUNBLDJCQUFBLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUE4QixrQ0FBQSxBQUFLLE1BN0JuQyxBQTZCQSxBQUF5QyxBQUN6Qyx1Q0FBQSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FBaUMscUNBQUEsQUFBSyxNQUF0QyxBQUE0QyxTQS9COUMsQUFDRSxBQThCQSxBQUdIOzs7OztBQS9FMEIsQSxBQWtGN0I7O2tCQUFBLEFBQWUiLCJmaWxlIjoiQ29udHJpYnV0ZUZvcm0uanMiLCJzb3VyY2VSb290IjoiL2hvbWUvYWxpL3VkZW15Q29udHJhY3RzL2tpY2tzdGFydCJ9