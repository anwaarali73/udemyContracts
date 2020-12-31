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
      value: '',
      loading: false,
      errorMessage: ''
    }, _this.onSubmit = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        var campaign;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();

                _this.setState({ loading: true, errorMessage: '' });
                // Now we load up our relevant instance of the campaign
                campaign = (0, _campaign2.default)(_this.props.address);
                _context.prev = 3;
                _context.next = 6;
                return campaign.methods.contribute().send({
                  from: _this.state.currentAccount,
                  value: _web2.default.utils.toWei(_this.state.value, 'ether')
                });

              case 6:
                // After the above we refresh the page to show the updated campaign data
                _routes.Router.replaceRoute('/campaigns/' + _this.props.address);
                _context.next = 12;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context['catch'](3);

                _this.setState({ errorMessage: _context.t0.message });

              case 12:
                // We set value: '' to clear the contribute form after the page reload
                _this.setState({ loading: false, value: '' });

              case 13:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2, [[3, 9]]);
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
          lineNumber: 55
        }
      }, _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
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
          lineNumber: 59
        }
      })), _react2.default.createElement(_semanticUiReact.Message, {
        error: true,
        header: 'Following went wrong while transacting!',
        content: this.state.errorMessage,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }), _react2.default.createElement(_semanticUiReact.Button, {
        primary: true,
        loading: this.state.loading,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, 'Contribute')), _react2.default.createElement('h4', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, 'Your account: ', this.state.currentAccount), _react2.default.createElement('h4', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, 'Your balance: ', this.state.currentBalance, ' ether'));
    }
  }]);

  return ContributeForm;
}(_react.Component);

exports.default = ContributeForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQ29udHJpYnV0ZUZvcm0uanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJGb3JtIiwiSW5wdXQiLCJNZXNzYWdlIiwiQnV0dG9uIiwid2ViMyIsIkNhbXBhaWduIiwiUm91dGVyIiwiQ29udHJpYnV0ZUZvcm0iLCJzdGF0ZSIsImN1cnJlbnRBY2NvdW50IiwiY3VycmVudEJhbGFuY2UiLCJ2YWx1ZSIsImxvYWRpbmciLCJlcnJvck1lc3NhZ2UiLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzZXRTdGF0ZSIsImNhbXBhaWduIiwicHJvcHMiLCJhZGRyZXNzIiwibWV0aG9kcyIsImNvbnRyaWJ1dGUiLCJzZW5kIiwiZnJvbSIsInV0aWxzIiwidG9XZWkiLCJyZXBsYWNlUm91dGUiLCJtZXNzYWdlIiwib25FbnRlciIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJnZXRCYWxhbmNlIiwiYmFsYW5jZSIsInRhcmdldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1BLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQU0sQUFBTyxBQUFTOztBQUMvQixBQUFPLEFBQVU7Ozs7QUFJakIsQUFBTyxBQUFjOzs7O0FBRXJCLEFBQVMsQUFBYzs7Ozs7QUFkdkI7QUFDQTs7QUFFQTtBQUNBOztBQU1BO0FBQ0E7OztJLEFBS007Ozs7Ozs7Ozs7Ozs7Ozs0TixBQUNKO3NCQUFRLEFBQ1MsQUFDZjtzQkFGTSxBQUVTLEFBQ2Y7YUFITSxBQUdDLEFBQ1A7ZUFKTSxBQUlHLEFBQ1Q7b0JBTE0sQSxBQUtRO0FBTFIsQUFDTixhLEFBT0Y7MkZBQVcsaUJBQUEsQUFBTyxPQUFQO1lBQUE7c0VBQUE7b0JBQUE7NkNBQUE7bUJBQ1Q7c0JBQUEsQUFBTSxBQUVOOztzQkFBQSxBQUFLLFNBQVMsRUFBRSxTQUFGLEFBQVcsTUFBTSxjQUEvQixBQUFjLEFBQThCLEFBQzVDO0FBQ007QUFMRywyQkFLUSx3QkFBUyxNQUFBLEFBQUssTUFMdEIsQUFLUSxBQUFvQjtnQ0FMNUI7Z0NBQUE7Z0NBUUQsQUFBUyxRQUFULEFBQWlCLGFBQWpCLEFBQThCO3dCQUM5QixNQUFBLEFBQUssTUFEOEIsQUFDeEIsQUFDakI7eUJBQU8sY0FBQSxBQUFLLE1BQUwsQUFBVyxNQUFNLE1BQUEsQUFBSyxNQUF0QixBQUE0QixPQVY1QixBQVFELEFBQW1DLEFBRWxDLEFBQW1DO0FBRkQsQUFDekMsaUJBRE07O21CQUlOO0FBQ0E7K0JBQUEsQUFBTyw2QkFBMkIsTUFBQSxBQUFLLE1BYmhDLEFBYVAsQUFBNkM7Z0NBYnRDO0FBQUE7O21CQUFBO2dDQUFBO2dEQWVQOztzQkFBQSxBQUFLLFNBQVMsRUFBRSxjQUFjLFlBZnZCLEFBZVAsQUFBYyxBQUFvQjs7bUJBRXBDO0FBQ0E7c0JBQUEsQUFBSyxTQUFTLEVBQUUsU0FBRixBQUFXLE9BQU8sT0FsQnZCLEFBa0JULEFBQWMsQUFBeUI7O21CQWxCOUI7bUJBQUE7Z0NBQUE7O0FBQUE7aUNBQUE7QTs7Ozs7ZUFzQlgsQSxtRkFBVSxvQkFBQTtvQkFBQTtzRUFBQTtrQkFBQTs2Q0FBQTtpQkFBQTsrQkFBQTtxQkFDZSxjQUFBLEFBQUssSUFEcEIsQUFDZSxBQUFTOztpQkFBMUI7QUFERSxtQ0FBQTsrQkFBQTtxQkFFYyxjQUFBLEFBQUssSUFBTCxBQUFTLFdBQVcsU0FGbEMsQUFFYyxBQUFvQixBQUFTOztpQkFBN0M7QUFGRSxrQ0FHUjs7b0JBQUEsQUFBSyxTQUFTLEVBQUUsZ0JBQWdCLFNBQWxCLEFBQWtCLEFBQVMsSUFBSSxnQkFIckMsQUFHUixBQUFjLEFBQStDOztpQkFIckQ7aUJBQUE7K0JBQUE7O0FBQUE7bUJBQUE7QTtBQURWOzs7Ozs7OzZCQU1TO21CQUNQOzs2QkFDRSxjQUFBLFNBQUssU0FBUyxLQUFkLEFBQWMsQUFBSztvQkFBbkI7c0JBQUEsQUFDQTtBQURBO09BQUEsa0JBQ0EsQUFBQyx1Q0FBSyxVQUFVLEtBQWhCLEFBQXFCLFVBQVUsT0FBTyxDQUFDLENBQUMsS0FBQSxBQUFLLE1BQTdDLEFBQW1EO29CQUFuRDtzQkFBQSxBQUNFO0FBREY7eUJBQ0csY0FBRCxzQkFBQSxBQUFNOztvQkFBTjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0Esa0RBQUEsQUFBQztlQUNRLEtBQUEsQUFBSyxNQURkLEFBQ29CLEFBQ2xCO2tCQUFVLHlCQUFBO2lCQUFTLE9BQUEsQUFBSyxTQUFTLEVBQUMsT0FBTyxNQUFBLEFBQU0sT0FBckMsQUFBUyxBQUFjLEFBQXFCO0FBRnhELEFBR0U7ZUFIRixBQUdRLEFBQ047dUJBSkYsQUFJZ0IsQUFDZDtxQkFMRixBQUtjOztvQkFMZDtzQkFISixBQUNFLEFBRUUsQUFTRjtBQVRFO0FBQ0UsMkJBUUosQUFBQztlQUFELEFBRUU7Z0JBRkYsQUFFUyxBQUNQO2lCQUFTLEtBQUEsQUFBSyxNQUhoQixBQUdzQjs7b0JBSHRCO3NCQVpGLEFBWUUsQUFNQTtBQU5BO0FBQ0UsMEJBS0YsQUFBQztpQkFBRCxBQUVFO2lCQUFTLEtBQUEsQUFBSyxNQUZoQixBQUVzQjs7b0JBRnRCO3NCQUFBO0FBQUE7QUFDRSxTQXBCSixBQUNBLEFBa0JFLEFBT0YsZ0NBQUEsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBQW1CLHVCQUFBLEFBQUssTUExQnhCLEFBMEJBLEFBQThCLEFBQzlCLGlDQUFBLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUFtQix1QkFBQSxBQUFLLE1BQXhCLEFBQThCLGdCQTVCaEMsQUFDRSxBQTJCQSxBQUdIOzs7OztBQXBFMEIsQSxBQXVFN0I7O2tCQUFBLEFBQWUiLCJmaWxlIjoiQ29udHJpYnV0ZUZvcm0uanMiLCJzb3VyY2VSb290IjoiL2hvbWUvYWxpL3VkZW15Q29udHJhY3RzL2tpY2tzdGFydCJ9