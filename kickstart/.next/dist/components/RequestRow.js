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

var _jsxFileName = '/home/ali/udemyContracts/kickstart/components/RequestRow.js';
// This component is to increase the portability of redering individual rows in our
// requests/index.js file. We will have a renderRows() helper function in requests/index.js
// file that will setup this component and then in return this component will return our jsx
// to be rendered in our main requests/index.js file

var RequestRow = function (_Component) {
  (0, _inherits3.default)(RequestRow, _Component);

  function RequestRow() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, RequestRow);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RequestRow.__proto__ || (0, _getPrototypeOf2.default)(RequestRow)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      loadingA: false,
      loadingF: false,
      tx_time: '',
      voted: false
    }, _this.onApprove = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var start_time, accounts, campaign, end_time;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              start_time = new Date();

              _this.setState({ tx_time: '' });
              _this.setState({ loadingA: true });
              _context.prev = 3;
              _context.next = 6;
              return _web2.default.eth.getAccounts();

            case 6:
              accounts = _context.sent;
              _context.next = 9;
              return (0, _campaign2.default)(_this.props.address);

            case 9:
              campaign = _context.sent;
              _context.next = 12;
              return campaign.methods.approveRequest(_this.props.id).send({
                from: accounts[0]
              });

            case 12:
              end_time = new Date();

              _this.setState({ tx_time: end_time - start_time });
              _routes.Router.pushRoute('/campaigns/' + _this.props.address + '/requests');
              _context.next = 19;
              break;

            case 17:
              _context.prev = 17;
              _context.t0 = _context['catch'](3);

            case 19:
              _this.setState({ loadingA: false });

            case 20:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this2, [[3, 17]]);
    })), _this.onFinalise = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
      var start_time, accounts, campaign, end_time;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _this.setState({ tx_time: '' });
              start_time = new Date();

              _this.setState({ loadingF: true });
              _context2.prev = 3;
              _context2.next = 6;
              return _web2.default.eth.getAccounts();

            case 6:
              accounts = _context2.sent;
              _context2.next = 9;
              return (0, _campaign2.default)(_this.props.address);

            case 9:
              campaign = _context2.sent;
              _context2.next = 12;
              return campaign.methods.finaliseRequest(_this.props.id).send({
                from: accounts[0]
              });

            case 12:
              end_time = new Date();

              _routes.Router.pushRoute('/campaigns/' + _this.props.address + '/requests');
              _context2.next = 18;
              break;

            case 16:
              _context2.prev = 16;
              _context2.t0 = _context2['catch'](3);

            case 18:
              _this.setState({ loadingF: false });

            case 19:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, _this2, [[3, 16]]);
    })), _this.onEnter = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
      var campaign, accounts, voted;
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return (0, _campaign2.default)(_this.props.address);

            case 2:
              campaign = _context3.sent;
              _context3.next = 5;
              return _web2.default.eth.getAccounts();

            case 5:
              accounts = _context3.sent;
              _context3.next = 8;
              return campaign.methods.voted(_this.props.id).call({ from: accounts[0] });

            case 8:
              voted = _context3.sent;

              _this.setState({ voted: voted });

            case 10:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, _this2);
    })), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(RequestRow, [{
    key: 'render',
    value: function render() {
      var Row = _semanticUiReact.Table.Row,
          Cell = _semanticUiReact.Table.Cell;
      var _props = this.props,
          id = _props.id,
          request = _props.request,
          approversCount = _props.approversCount;

      var readyToFinalise = request.approvalCount > approversCount / 2;
      return _react2.default.createElement(Row, { disabled: request.complete, positive: readyToFinalise && !request.complete, onEnter: this.onEnter(), __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, id), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, request.description), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, _web2.default.utils.fromWei(request.value, 'ether')), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, request.recipient), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, request.approvalCount, '/', approversCount, ' (', request.approvalCount / approversCount * 100, '%)'), this.state.voted ? _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, 'YES') : _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, 'NO'), request.complete || request.approvalCount == approversCount ? null : _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { error: true, loading: this.state.loadingA, color: 'green', basic: true, labelPosition: 'left', icon: 'arrow up', content: 'Approve', onClick: this.onApprove, __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      })), request.complete ? null : _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { error: true, loading: this.state.loadingF, color: 'blue', basic: true, labelPosition: 'left', icon: 'thumbs up outline', content: 'Finalise', onClick: this.onFinalise, __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      })), request.complete ? null : _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, this.state.tx_time, ' ms'));
    }
  }]);

  return RequestRow;
}(_react.Component);

exports.default = RequestRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUmVxdWVzdFJvdy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlRhYmxlIiwiQnV0dG9uIiwiTWVzc2FnZSIsIkZvcm0iLCJ3ZWIzIiwiQ2FtcGFpZ24iLCJSb3V0ZXIiLCJSZXF1ZXN0Um93Iiwic3RhdGUiLCJsb2FkaW5nQSIsImxvYWRpbmdGIiwidHhfdGltZSIsInZvdGVkIiwib25BcHByb3ZlIiwic3RhcnRfdGltZSIsIkRhdGUiLCJzZXRTdGF0ZSIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJwcm9wcyIsImFkZHJlc3MiLCJjYW1wYWlnbiIsIm1ldGhvZHMiLCJhcHByb3ZlUmVxdWVzdCIsImlkIiwic2VuZCIsImZyb20iLCJlbmRfdGltZSIsInB1c2hSb3V0ZSIsIm9uRmluYWxpc2UiLCJmaW5hbGlzZVJlcXVlc3QiLCJvbkVudGVyIiwiY2FsbCIsIlJvdyIsIkNlbGwiLCJyZXF1ZXN0IiwiYXBwcm92ZXJzQ291bnQiLCJyZWFkeVRvRmluYWxpc2UiLCJhcHByb3ZhbENvdW50IiwiY29tcGxldGUiLCJkZXNjcmlwdGlvbiIsInV0aWxzIiwiZnJvbVdlaSIsInZhbHVlIiwicmVjaXBpZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS0EsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVMsQUFBTyxBQUFRLEFBQVM7O0FBQ2pDLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQWM7Ozs7QUFDckIsQUFBUyxBQUFjOzs7OztBQVR2QjtBQUNBO0FBQ0E7QUFDQTs7SUFRTSxBOzs7Ozs7Ozs7Ozs7Ozs7b04sQUFDSjtnQkFBUSxBQUNJLEFBQ1Y7Z0JBRk0sQUFFSSxBQUNWO2VBSE0sQUFHRyxBQUNUO2EsQUFKTSxBQUlDO0FBSkQsQUFDTixhQU1GLEEscUZBQVksbUJBQUE7MENBQUE7b0VBQUE7a0JBQUE7MkNBQUE7aUJBQ0o7QUFESSwyQkFDUyxJQURULEFBQ1Ms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QVlJLEFBQU0sQUFJUDtBQUpPO21CQUlQLEFBQVEsV0FBUixBQUFtQix1QkFDakIsY0FBRDs7b0JBQUE7c0JBQUEsQUFBTTtBQUFOO0FBQUEsT0FBQSxrQkFBTSxBQUFDLHlDQUFPLE9BQVIsTUFBYyxTQUFTLEtBQUEsQUFBSyxNQUE1QixBQUFrQyxVQUFVLE9BQTVDLEFBQWtELFFBQU8sT0FBekQsTUFBK0QsZUFBL0QsQUFBNkUsUUFBTyxNQUFwRixBQUF5RixxQkFBb0IsU0FBN0csQUFBcUgsWUFBVyxTQUFTLEtBQXpJLEFBQThJO29CQUE5STtzQkFqQlYsQUFpQkksQUFBTSxBQUdQO0FBSE87bUJBR1AsQUFBUSxXQUFSLEFBQW1CLHVCQUNqQixjQUFEOztvQkFBQTtzQkFBQSxBQUFPO0FBQVA7QUFBQSxPQUFBLE9BQU8sQUFBSyxNQUFaLEFBQWtCLFNBdEJ4QixBQUNFLEFBcUJJLEFBS1A7Ozs7O0FBbEZzQixBLEFBcUZ6Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJSZXF1ZXN0Um93LmpzIiwic291cmNlUm9vdCI6Ii9ob21lL2FsaS91ZGVteUNvbnRyYWN0cy9raWNrc3RhcnQifQ==