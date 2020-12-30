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
    var _ref;

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
      loading: '',
      currentAccount: '',
      currentBalance: ''
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(newRequest, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(_Layout2.default, { numberOfCampaigns: this.props.campaigns.length, __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, 'Create a new request for campaign at: ', this.props.address), _react2.default.createElement(_semanticUiReact.Form, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, 'Description: '), _react2.default.createElement(_semanticUiReact.Input, {
        value: this.state.description,
        onChange: function onChange(event) {
          return _this2.setState({ description: event.target.value });
        },
        placeholder: 'Enter request description',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, 'Value (ether): '), _react2.default.createElement(_semanticUiReact.Input, {
        value: this.state.value,
        onChange: function onChange(event) {
          return _this2.setState({ value: event.target.value });
        },
        label: 'ether',
        labelPosition: 'right',
        placeholder: 'Enter value in ether',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, 'Recipient: '), _react2.default.createElement(_semanticUiReact.Input, {
        value: this.state.recipient,
        onChange: function onChange(event) {
          return _this2.setState({ recipient: event.target.value });
        },
        label: 'address (public key)',
        labelPosition: 'right',
        placeholder: 'Enter recipient address (its public key)',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      })), _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, 'Create request')));
    }
  }], [{
    key: 'getInitialProps',

    // We need the address of the relevant campaign we are interested in and that is
    // why use getInitialProps to extract it
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
        var address, campaigns;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                address = props.query.address;
                _context.next = 3;
                return _factory2.default.methods.getDeployedCampaigns().call();

              case 3:
                campaigns = _context.sent;
                return _context.abrupt('return', { address: address, campaigns: campaigns });

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref2.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return newRequest;
}(_react.Component);

exports.default = newRequest;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9yZXF1ZXN0cy9uZXcuanMiXSwibmFtZXMiOlsicmVhY3QiLCJDb21wb25lbnQiLCJDYW1wYWlnbiIsIndlYjMiLCJNZXNzYWdlIiwiRm9ybSIsIkJ1dHRvbiIsIklucHV0IiwiTGluayIsIlJvdXRlciIsIkxheW91dCIsImZhY3RvcnkiLCJuZXdSZXF1ZXN0Iiwic3RhdGUiLCJkZXNjcmlwdGlvbiIsInZhbHVlIiwicmVjaXBpZW50IiwiZXJyb3JNZXNzYWdlIiwibG9hZGluZyIsImN1cnJlbnRBY2NvdW50IiwiY3VycmVudEJhbGFuY2UiLCJwcm9wcyIsImNhbXBhaWducyIsImxlbmd0aCIsImFkZHJlc3MiLCJzZXRTdGF0ZSIsImV2ZW50IiwidGFyZ2V0IiwicXVlcnkiLCJtZXRob2RzIiwiZ2V0RGVwbG95ZWRDYW1wYWlnbnMiLCJjYWxsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBRWhCLEFBQU8sQUFBYzs7OztBQUNyQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBUyxBQUFTLEFBQU0sQUFBUTs7QUFDaEMsQUFBUyxBQUFNLEFBQWM7O0FBQzdCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWE7Ozs7Ozs7QUFOcEI7OztJQVFNLEE7Ozs7Ozs7Ozs7Ozs7O29OQUNKLEE7bUJBQVEsQUFDTSxBQUNaO2FBRk0sQUFFQSxBQUNOO2lCQUhNLEFBR0ksQUFDVjtvQkFKTSxBQUlPLEFBQ2I7ZUFMTSxBQUtFLEFBQ1I7c0JBTk0sQUFNUyxBQUNmO3NCQVBNLEFBT1MsQTtBQVBULEFBQ047Ozs7OzZCQWtCTzttQkFDUDs7NkJBQ0UsQUFBQyxrQ0FBTyxtQkFBbUIsS0FBQSxBQUFLLE1BQUwsQUFBVyxVQUF0QyxBQUFnRDtvQkFBaEQ7c0JBQUEsQUFDQTtBQURBO09BQUEsa0JBQ0EsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBQTJDLCtDQUFBLEFBQUssTUFEaEQsQUFDQSxBQUFzRCxBQUN0RCwwQkFBQSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRyxjQUFELHNCQUFBLEFBQU07O29CQUFOO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDQSxrQ0FBQSxBQUFDO2VBQ1EsS0FBQSxBQUFLLE1BRGQsQUFDb0IsQUFDbEI7a0JBQVUseUJBQUE7aUJBQVMsT0FBQSxBQUFLLFNBQVMsRUFBQyxhQUFhLE1BQUEsQUFBTSxPQUEzQyxBQUFTLEFBQWMsQUFBMkI7QUFGOUQsQUFHRTtxQkFIRixBQUdjOztvQkFIZDtzQkFISixBQUNFLEFBRUUsQUFPRjtBQVBFO0FBQ0UsMkJBTUgsY0FBRCxzQkFBQSxBQUFNOztvQkFBTjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0Esb0NBQUEsQUFBQztlQUNRLEtBQUEsQUFBSyxNQURkLEFBQ29CLEFBQ2xCO2tCQUFVLHlCQUFBO2lCQUFTLE9BQUEsQUFBSyxTQUFTLEVBQUUsT0FBTyxNQUFBLEFBQU0sT0FBdEMsQUFBUyxBQUFjLEFBQXNCO0FBRnpELEFBR0U7ZUFIRixBQUdRLEFBQ047dUJBSkYsQUFJZ0IsQUFDZDtxQkFMRixBQUtjOztvQkFMZDtzQkFaSixBQVVFLEFBRUUsQUFTRjtBQVRFO0FBQ0UsMkJBUUgsY0FBRCxzQkFBQSxBQUFNOztvQkFBTjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0EsZ0NBQUEsQUFBQztlQUNRLEtBQUEsQUFBSyxNQURkLEFBQ29CLEFBQ2xCO2tCQUFVLHlCQUFBO2lCQUFTLE9BQUEsQUFBSyxTQUFTLEVBQUUsV0FBVyxNQUFBLEFBQU0sT0FBMUMsQUFBUyxBQUFjLEFBQTBCO0FBRjdELEFBR0U7ZUFIRixBQUdRLEFBQ047dUJBSkYsQUFJZ0IsQUFDZDtxQkFMRixBQUtjOztvQkFMZDtzQkF2QkosQUFxQkUsQUFFRSxBQVNGO0FBVEU7QUFDRSwyQkFRSixBQUFDLHlDQUFPLFNBQVI7b0JBQUE7c0JBQUE7QUFBQTtTQW5DSixBQUNFLEFBRUEsQUFnQ0UsQUFJTDs7O1NBakREOztBQUNBOzs7NEdBQzZCLEE7Ozs7O21CQUNuQjtBLDBCQUFZLE1BQU0sQSxNQUFsQixBOzt1QkFDZ0Isa0JBQUEsQUFBUSxRQUFSLEFBQWdCLHVCQUFoQixBQUF1QyxBOzttQkFBekQ7QTtpREFFQyxFQUFFLFNBQUYsU0FBVyxXQUFYLEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFqQmMsQSxBQStEekI7O2tCQUFBLEFBQWUiLCJmaWxlIjoibmV3LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9ob21lL2FsaS91ZGVteUNvbnRyYWN0cy9raWNrc3RhcnQifQ==