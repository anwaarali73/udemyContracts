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
      value: ''
    }, _this.onSubmit = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        var campaign;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                // Now we load up our relevant instance of the campaign
                campaign = (0, _campaign2.default)(_this.props.address);
                _context.prev = 2;
                _context.next = 5;
                return campaign.methods.contribute().send({
                  from: _this.state.currentAccount,
                  value: _web2.default.utils.toWei(_this.state.value, 'ether')
                });

              case 5:
                // After the above we refresh the page to show the updated campaign data
                _routes.Router.replaceRoute('/campaigns/' + _this.props.address);
                _context.next = 10;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context['catch'](2);

              case 10:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2, [[2, 8]]);
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


  (0, _createClass3.default)(ContributeForm, [{
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement('div', { onEnter: this.onEnter(), __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
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
          lineNumber: 53
        }
      })), _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, 'Contribute')), _react2.default.createElement('h4', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, 'Your account: ', this.state.currentAccount), _react2.default.createElement('h4', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, 'You balance: ', this.state.currentBalance));
    }
  }]);

  return ContributeForm;
}(_react.Component);

exports.default = ContributeForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQ29udHJpYnV0ZUZvcm0uanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJGb3JtIiwiSW5wdXQiLCJNYXNzYWdlIiwiQnV0dG9uIiwid2ViMyIsIkNhbXBhaWduIiwiUm91dGVyIiwiQ29udHJpYnV0ZUZvcm0iLCJzdGF0ZSIsImN1cnJlbnRBY2NvdW50IiwiY3VycmVudEJhbGFuY2UiLCJ2YWx1ZSIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImNhbXBhaWduIiwicHJvcHMiLCJhZGRyZXNzIiwibWV0aG9kcyIsImNvbnRyaWJ1dGUiLCJzZW5kIiwiZnJvbSIsInV0aWxzIiwidG9XZWkiLCJyZXBsYWNlUm91dGUiLCJvbkVudGVyIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsImdldEJhbGFuY2UiLCJiYWxhbmNlIiwic2V0U3RhdGUiLCJ0YXJnZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFNLEFBQU8sQUFBUzs7QUFDL0IsQUFBTyxBQUFVOzs7O0FBSWpCLEFBQU8sQUFBYzs7OztBQUVyQixBQUFTLEFBQWM7Ozs7O0FBZHZCO0FBQ0E7O0FBRUE7QUFDQTs7QUFNQTtBQUNBOzs7SUFLTSxBOzs7Ozs7Ozs7Ozs7Ozs7NE5BQ0osQTtzQkFBUSxBQUNTLEFBQ2Y7c0JBRk0sQUFFUyxBQUNmO2FBSE0sQUFHQyxBO0FBSEQsQUFDTixhQUtGLEE7MkZBQVcsaUJBQUEsQUFBTyxPQUFQO1lBQUE7c0VBQUE7b0JBQUE7NkNBQUE7bUJBQ1Q7c0JBQUEsQUFBTSxBQUNOO0FBQ007QUFIRywyQkFHUSx3QkFBUyxNQUFBLEFBQUssTUFIdEIsQUFHUSxBQUFvQjtnQ0FINUI7Z0NBQUE7Z0NBTUQsQUFBUyxRQUFULEFBQWlCLGFBQWpCLEFBQThCO3dCQUM5QixNQUFBLEFBQUssTUFEOEIsQUFDeEIsQUFDakI7eUJBQU8sY0FBQSxBQUFLLE1BQUwsQUFBVyxNQUFNLE1BQUEsQUFBSyxNQUF0QixBQUE0QixPQVI1QixBQU1ELEFBQW1DLEFBRWxDLEFBQW1DO0FBRkQsQUFDekMsaUJBRE07O21CQUlOO0FBQ0E7K0JBQUEsQUFBTyw2QkFBMkIsTUFBQSxBQUFLLE1BWGhDLEFBV1AsQUFBNkM7Z0NBWHRDO0FBQUE7O21CQUFBO2dDQUFBO2dEQUFBOzttQkFBQTttQkFBQTtnQ0FBQTs7QUFBQTtpQ0FBQTtBOzs7OztlQWtCWCxBLG1GQUFVLG9CQUFBO29CQUFBO3NFQUFBO2tCQUFBOzZDQUFBO2lCQUFBOytCQUFBO3FCQUNlLGNBQUEsQUFBSyxJQURwQixBQUNlLEFBQVM7O2lCQUExQjtBQURFLG1DQUFBOytCQUFBO3FCQUVjLGNBQUEsQUFBSyxJQUFMLEFBQVMsV0FBVyxTQUZsQyxBQUVjLEFBQW9CLEFBQVM7O2lCQUE3QztBQUZFLGtDQUdSOztvQkFBQSxBQUFLLFNBQVMsRUFBRSxnQkFBZ0IsU0FBbEIsQUFBa0IsQUFBUyxJQUFJLGdCQUhyQyxBQUdSLEFBQWMsQUFBK0M7O2lCQUhyRDtpQkFBQTsrQkFBQTs7QUFBQTttQkFBQTtBO0FBRFY7Ozs7Ozs7NkJBTVM7bUJBQ1A7OzZCQUNFLGNBQUEsU0FBSyxTQUFTLEtBQWQsQUFBYyxBQUFLO29CQUFuQjtzQkFBQSxBQUNBO0FBREE7T0FBQSxrQkFDQSxBQUFDLHVDQUFLLFVBQVUsS0FBaEIsQUFBcUI7b0JBQXJCO3NCQUFBLEFBQ0U7QUFERjt5QkFDRyxjQUFELHNCQUFBLEFBQU07O29CQUFOO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDQSxrREFBQSxBQUFDO2VBQ1EsS0FBQSxBQUFLLE1BRGQsQUFDb0IsQUFDbEI7a0JBQVUseUJBQUE7aUJBQVMsT0FBQSxBQUFLLFNBQVMsRUFBQyxPQUFPLE1BQUEsQUFBTSxPQUFyQyxBQUFTLEFBQWMsQUFBcUI7QUFGeEQsQUFHRTtlQUhGLEFBR1EsQUFDTjt1QkFKRixBQUlnQixBQUNkO3FCQUxGLEFBS2M7O29CQUxkO3NCQUhKLEFBQ0UsQUFFRSxBQVNGO0FBVEU7QUFDRSwyQkFRSixBQUFDLHlDQUFPLFNBQVI7b0JBQUE7c0JBQUE7QUFBQTtTQWJGLEFBQ0EsQUFZRSxBQUVGLGdDQUFBLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUFtQix1QkFBQSxBQUFLLE1BZnhCLEFBZUEsQUFBOEIsQUFDOUIsaUNBQUEsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBQWtCLHNCQUFBLEFBQUssTUFqQnpCLEFBQ0UsQUFnQkEsQUFBNkIsQUFHaEM7Ozs7O0FBbkQwQixBLEFBc0Q3Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJDb250cmlidXRlRm9ybS5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9hbGkvdWRlbXlDb250cmFjdHMva2lja3N0YXJ0In0=