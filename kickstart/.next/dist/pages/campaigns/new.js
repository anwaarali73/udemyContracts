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

  (0, _createClass3.default)(CampaignNew, [{
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement('div', { onEnter: this.onEnter(), __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, _react2.default.createElement(_Layout2.default, { numberOfCampaigns: this.props.campaigns.length, __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, 'Create a new campaign:'), _react2.default.createElement('h4', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, 'You are at account: ', this.state.currentAccount), _react2.default.createElement('h4', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, 'Your current balance: ', this.state.currentBalance, ' ether'), _react2.default.createElement('hr', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
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
          lineNumber: 67
        }
      })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Following went wrong while transacting!', content: this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { loading: this.state.loading, primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 77
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9uZXcuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJMYXlvdXQiLCJGb3JtIiwiQnV0dG9uIiwiSW5wdXQiLCJNZXNzYWdlIiwiZmFjdG9yeSIsIndlYjMiLCJMaW5rIiwiUm91dGVyIiwiQ2FtcGFpZ25OZXciLCJzdGF0ZSIsIm1pbmltdW1Db250cmlidXRpb24iLCJlcnJvck1lc3NhZ2UiLCJjdXJyZW50QWNjb3VudCIsImN1dXJlbnRCYWxhbmNlIiwibG9hZGluZyIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInNldFN0YXRlIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJjcmVhdGVDYW1wYWlnbiIsInNlbmQiLCJmcm9tIiwicHVzaFJvdXRlIiwibWVzc2FnZSIsIm9uRW50ZXIiLCJnZXRCYWxhbmNlIiwiYmFsYW5jZSIsImN1cnJlbnRCYWxhbmNlIiwicHJvcHMiLCJjYW1wYWlnbnMiLCJsZW5ndGgiLCJ0YXJnZXQiLCJ2YWx1ZSIsImdldERlcGxveWVkQ2FtcGFpZ25zIiwiY2FsbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBUyxBQUFNLEFBQVEsQUFBTzs7QUFHOUIsQUFBTyxBQUFhOzs7O0FBR3BCLEFBQU8sQUFBVTs7OztBQUlqQixBQUFTLEFBQU0sQUFBYzs7Ozs7QUFUN0I7QUFDQTs7O0FBR0E7OztBQUdBO0FBQ0E7OztJLEFBR007Ozs7Ozs7Ozs7Ozs7OztzTkFDSixBOzJCQUFRLEFBQ2UsQUFDckI7b0JBRk0sQUFFUSxBQUNkO3NCQUhNLEFBR1UsQUFDaEI7c0JBSk0sQUFJVSxBQUNoQjtlQUxNLEEsQUFLRztBQUxILEFBQ04sYSxBQVlGOzJGQUFXLGlCQUFBLEFBQU8sT0FBUDtZQUFBO3NFQUFBO29CQUFBOzZDQUFBO21CQUNUO3NCQUFBLEFBQU0sQUFFTjs7c0JBQUEsQUFBSyxTQUFTLEVBQUUsU0FBRixBQUFXLE1BQU0sY0FBL0IsQUFBYyxBQUErQixBQUU3Qzs7QUFMUztnQ0FBQTtnQ0FBQTt1QkFPZ0IsY0FBQSxBQUFLLElBUHJCLEFBT2dCLEFBQVM7O21CQUExQjtBQVBDLG9DQUFBO2dDQUFBO3VCQVFELGtCQUFBLEFBQVEsUUFBUixBQUNILGVBQWUsTUFBQSxBQUFLLE1BRGpCLEFBQ3VCLHFCQUR2QixBQUVILEtBQUssRUFBQyxNQUFNLFNBVlIsQUFRRCxBQUVFLEFBQU8sQUFBUzs7bUJBRXRCOztBQUNBOytCQUFBLEFBQU8sVUFiRixBQWFMLEFBQWlCO2dDQWJaO0FBQUE7O21CQUFBO2dDQUFBO2dEQWVMOztzQkFBQSxBQUFLLFNBQVMsRUFBRSxjQUFjLFlBZnpCLEFBZUwsQUFBYyxBQUFvQjs7bUJBR3RDOztzQkFBQSxBQUFLLFNBQVMsRUFBRSxTQWxCUCxBQWtCVCxBQUFjLEFBQVc7O21CQWxCaEI7bUJBQUE7Z0NBQUE7O0FBQUE7aUNBQUE7QTs7Ozs7ZUFzQlgsQSxtRkFBVSxvQkFBQTtvQkFBQTtzRUFBQTtrQkFBQTs2Q0FBQTtpQkFBQTsrQkFBQTtxQkFDZSxjQUFBLEFBQUssSUFEcEIsQUFDZSxBQUFTOztpQkFBMUI7QUFERSxtQ0FBQTsrQkFBQTtxQkFFYyxjQUFBLEFBQUssSUFBTCxBQUFTLFdBQVcsU0FGbEMsQUFFYyxBQUFvQixBQUFTOztpQkFBN0M7QUFGRSxrQ0FHUjs7b0JBQUEsQUFBSyxTQUFTLEVBQUUsZ0JBQWdCLFNBQWxCLEFBQWtCLEFBQVMsSUFBSSxnQkFIckMsQUFHUixBQUFjLEFBQStDOztpQkFIckQ7aUJBQUE7K0JBQUE7O0FBQUE7bUJBQUE7QTs7Ozs7NkJBS0Q7bUJBQ1A7OzZCQUNFLGNBQUEsU0FBSyxTQUFTLEtBQWQsQUFBYyxBQUFLO29CQUFuQjtzQkFBQSxBQUNBO0FBREE7T0FBQSxrQkFDQSxBQUFDLGtDQUFPLG1CQUFtQixLQUFBLEFBQUssTUFBTCxBQUFXLFVBQXRDLEFBQWdEO29CQUFoRDtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUNBLDJDQUFBLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUF5Qiw2QkFBQSxBQUFLLE1BRmhDLEFBRUUsQUFBb0MsQUFDcEMsaUNBQUEsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBQTJCLCtCQUFBLEFBQUssTUFBaEMsQUFBc0MsZ0JBSHhDLEFBR0UsQUFDQTs7b0JBQUE7c0JBSkYsQUFJRSxBQUNBO0FBREE7QUFBQSwwQkFDQSxBQUFDLHVDQUFLLFVBQVUsS0FBaEIsQUFBcUIsVUFBVSxPQUFPLENBQUMsQ0FBQyxLQUFBLEFBQUssTUFBN0MsQUFBbUQ7b0JBQW5EO3NCQUFBLEFBQ0U7QUFERjt5QkFDRyxjQUFELHNCQUFBLEFBQU07O29CQUFOO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDQSx5Q0FBQSxBQUFDO2VBQUQsQUFDUSxBQUNOO3FCQUZGLEFBRWMsQUFDWjt1QkFIRixBQUdnQixBQUNkO2VBQU8sS0FBQSxBQUFLLE1BSmQsQUFJb0IsQUFDbEI7a0JBQVUseUJBQUE7aUJBQVMsT0FBQSxBQUFLLFNBQVMsRUFBQyxxQkFBcUIsTUFBQSxBQUFNLE9BQW5ELEFBQVMsQUFBYyxBQUFtQztBQUx0RTs7b0JBQUE7c0JBSEosQUFDRSxBQUVFLEFBU0Y7QUFURTtBQUNFLDJCQVFKLEFBQUMsMENBQVEsT0FBVCxNQUFlLFFBQWYsQUFBc0IsMkNBQTBDLFNBQVMsS0FBQSxBQUFLLE1BQTlFLEFBQW9GO29CQUFwRjtzQkFaRixBQVlFLEFBQ0E7QUFEQTswQkFDQSxBQUFDLHlDQUFPLFNBQVMsS0FBQSxBQUFLLE1BQXRCLEFBQTRCLFNBQVMsU0FBckM7b0JBQUE7c0JBQUE7QUFBQTtTQXBCTixBQUNFLEFBQ0EsQUFLRSxBQWFFLEFBS1A7Ozs7Ozs7Ozs7Ozt1QkF6RHlCLGtCQUFBLEFBQVEsUUFBUixBQUFnQix1QixBQUFoQixBQUF1Qzs7bUJBQXpEO0E7a0RBQ0MsRUFBRSxXQUFGLEE7Ozs7Ozs7Ozs7Ozs7OztBQXdCVDs7Ozs7OztBQW5Dd0IsQSxBQXNFMUI7O2tCQUFBLEFBQWUiLCJmaWxlIjoibmV3LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9ob21lL2FsaS91ZGVteUNvbnRyYWN0cy9raWNrc3RhcnQifQ==