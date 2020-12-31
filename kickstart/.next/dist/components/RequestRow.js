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
      loadingF: false
    }, _this.onApprove = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var accounts, campaign;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this.setState({ loadingA: true });
              _context.prev = 1;
              _context.next = 4;
              return _web2.default.eth.getAccounts();

            case 4:
              accounts = _context.sent;
              _context.next = 7;
              return (0, _campaign2.default)(_this.props.address);

            case 7:
              campaign = _context.sent;
              _context.next = 10;
              return campaign.methods.approveRequest(_this.props.id).send({
                from: accounts[0]
              });

            case 10:
              _routes.Router.pushRoute('/campaigns/' + _this.props.address + '/requests');
              _context.next = 15;
              break;

            case 13:
              _context.prev = 13;
              _context.t0 = _context['catch'](1);

            case 15:
              _this.setState({ loadingA: false });

            case 16:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this2, [[1, 13]]);
    })), _this.onFinalise = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
      var accounts, campaign;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _this.setState({ loadingF: true });
              _context2.prev = 1;
              _context2.next = 4;
              return _web2.default.eth.getAccounts();

            case 4:
              accounts = _context2.sent;
              _context2.next = 7;
              return (0, _campaign2.default)(_this.props.address);

            case 7:
              campaign = _context2.sent;
              _context2.next = 10;
              return campaign.methods.finaliseRequest(_this.props.id).send({
                from: accounts[0]
              });

            case 10:
              _routes.Router.pushRoute('/campaigns/' + _this.props.address + '/requests');
              _context2.next = 15;
              break;

            case 13:
              _context2.prev = 13;
              _context2.t0 = _context2['catch'](1);

            case 15:
              _this.setState({ loadingF: false });

            case 16:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, _this2, [[1, 13]]);
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
      return _react2.default.createElement(Row, { disabled: request.complete, positive: readyToFinalise && !request.complete, __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, id), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, request.description), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, _web2.default.utils.fromWei(request.value, 'ether')), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, request.recipient), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, request.approvalCount, '/', approversCount, ' (', request.approvalCount / approversCount * 100, '%)'), request.complete || request.approvalCount == approversCount ? null : _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { error: true, loading: this.state.loadingA, color: 'green', basic: true, labelPosition: 'left', icon: 'arrow up', content: 'Approve', onClick: this.onApprove, __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      })), request.complete ? null : _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { error: true, loading: this.state.loadingF, color: 'blue', basic: true, labelPosition: 'left', icon: 'thumbs up outline', content: 'Finalise', onClick: this.onFinalise, __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      })));
    }
  }]);

  return RequestRow;
}(_react.Component);

exports.default = RequestRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUmVxdWVzdFJvdy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlRhYmxlIiwiQnV0dG9uIiwiTWVzc2FnZSIsIkZvcm0iLCJ3ZWIzIiwiQ2FtcGFpZ24iLCJSb3V0ZXIiLCJSZXF1ZXN0Um93Iiwic3RhdGUiLCJsb2FkaW5nQSIsImxvYWRpbmdGIiwib25BcHByb3ZlIiwic2V0U3RhdGUiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwicHJvcHMiLCJhZGRyZXNzIiwiY2FtcGFpZ24iLCJtZXRob2RzIiwiYXBwcm92ZVJlcXVlc3QiLCJpZCIsInNlbmQiLCJmcm9tIiwicHVzaFJvdXRlIiwib25GaW5hbGlzZSIsImZpbmFsaXNlUmVxdWVzdCIsIlJvdyIsIkNlbGwiLCJyZXF1ZXN0IiwiYXBwcm92ZXJzQ291bnQiLCJyZWFkeVRvRmluYWxpc2UiLCJhcHByb3ZhbENvdW50IiwiY29tcGxldGUiLCJkZXNjcmlwdGlvbiIsInV0aWxzIiwiZnJvbVdlaSIsInZhbHVlIiwicmVjaXBpZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS0EsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVMsQUFBTyxBQUFRLEFBQVM7O0FBQ2pDLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQWM7Ozs7QUFDckIsQUFBUyxBQUFjOzs7OztBQVR2QjtBQUNBO0FBQ0E7QUFDQTs7SSxBQVFNOzs7Ozs7Ozs7Ozs7Ozs7b04sQUFDSjtnQkFBUSxBQUNJLEFBQ1Y7Z0JBRk0sQUFFSSxBO0FBRkosQUFDTixhLEFBR0YscUZBQVksbUJBQUE7b0JBQUE7b0VBQUE7a0JBQUE7MkNBQUE7aUJBQ1Y7b0JBQUEsQUFBSyxTQUFTLEVBQUUsVUFETixBQUNWLEFBQWMsQUFBWTs4QkFEaEI7OEJBQUE7cUJBR2UsY0FBQSxBQUFLLElBSHBCLEFBR2UsQUFBUzs7aUJBQTFCO0FBSEUsa0NBQUE7OEJBQUE7cUJBSWUsd0JBQVMsTUFBQSxBQUFLLE1BSjdCLEFBSWUsQUFBb0I7O2lCQUFyQztBQUpFLGtDQUFBOzhCQUFBOzhCQUtGLEFBQVMsUUFBVCxBQUFpQixlQUFlLE1BQUEsQUFBSyxNQUFyQyxBQUEyQyxJQUEzQyxBQUErQztzQkFDN0MsU0FOQSxBQUtGLEFBQW9ELEFBQ2xELEFBQVM7QUFEeUMsQUFDeEQsZUFESTs7aUJBR047NkJBQUEsQUFBTywwQkFBd0IsTUFBQSxBQUFLLE1BQXBDLEFBQTBDLFVBUmxDOzhCQUFBO0FBQUE7O2lCQUFBOzhCQUFBOzhDQUFBOztpQkFZVjtvQkFBQSxBQUFLLFNBQVMsRUFBRSxVQVpOLEFBWVYsQUFBYyxBQUFZOztpQkFaaEI7aUJBQUE7OEJBQUE7O0FBQUE7K0JBQUE7QSxlLEFBZVosc0ZBQWEsb0JBQUE7b0JBQUE7c0VBQUE7a0JBQUE7NkNBQUE7aUJBQ1g7b0JBQUEsQUFBSyxTQUFTLEVBQUUsVUFETCxBQUNYLEFBQWMsQUFBWTsrQkFEZjsrQkFBQTtxQkFHYyxjQUFBLEFBQUssSUFIbkIsQUFHYyxBQUFTOztpQkFBMUI7QUFIRyxtQ0FBQTsrQkFBQTtxQkFJYyx3QkFBUyxNQUFBLEFBQUssTUFKNUIsQUFJYyxBQUFvQjs7aUJBQXJDO0FBSkcsbUNBQUE7K0JBQUE7OEJBS0gsQUFBUyxRQUFULEFBQWlCLGdCQUFnQixNQUFBLEFBQUssTUFBdEMsQUFBNEMsSUFBNUMsQUFBZ0Q7c0JBQzlDLFNBTkMsQUFLSCxBQUFxRCxBQUNuRCxBQUFTO0FBRDBDLEFBQ3pELGVBREk7O2lCQUdOOzZCQUFBLEFBQU8sMEJBQXdCLE1BQUEsQUFBSyxNQUFwQyxBQUEwQyxVQVJqQzsrQkFBQTtBQUFBOztpQkFBQTsrQkFBQTtnREFBQTs7aUJBWVg7b0JBQUEsQUFBSyxTQUFTLEVBQUUsVUFaTCxBQVlYLEFBQWMsQUFBWTs7aUJBWmY7aUJBQUE7K0JBQUE7O0FBQUE7Z0NBQUE7QTs7Ozs7NkJBZUo7VUFBQSxBQUNDLE1BREQsQUFDZSx1QkFEZixBQUNDO1VBREQsQUFDTSxPQUROLEFBQ2UsdUJBRGYsQUFDTTttQkFDMkIsS0FGakMsQUFFc0M7VUFGdEMsQUFFQyxZQUZELEFBRUM7VUFGRCxBQUVLLGlCQUZMLEFBRUs7VUFGTCxBQUVjLHdCQUZkLEFBRWMsQUFDckI7O1VBQU0sa0JBQWtCLFFBQUEsQUFBUSxnQkFBaUIsaUJBQWpELEFBQWtFLEFBQ2xFOzZCQUNHLGNBQUQsT0FBSyxVQUFVLFFBQWYsQUFBdUIsVUFBVSxVQUFVLG1CQUFtQixDQUFDLFFBQS9ELEFBQXVFO29CQUF2RTtzQkFBQSxBQUNFO0FBREY7T0FBQSxrQkFDRyxjQUFEOztvQkFBQTtzQkFBQSxBQUFPO0FBQVA7QUFBQSxTQURGLEFBQ0UsQUFDQSxxQkFBQyxjQUFEOztvQkFBQTtzQkFBQSxBQUFPO0FBQVA7QUFBQSxpQkFGRixBQUVFLEFBQWUsQUFDZiw4QkFBQyxjQUFEOztvQkFBQTtzQkFBQSxBQUFPO0FBQVA7QUFBQSx1QkFBTyxBQUFLLE1BQUwsQUFBVyxRQUFRLFFBQW5CLEFBQTJCLE9BSHBDLEFBR0UsQUFBTyxBQUFrQyxBQUN6QywyQkFBQyxjQUFEOztvQkFBQTtzQkFBQSxBQUFPO0FBQVA7QUFBQSxpQkFKRixBQUlFLEFBQWUsQUFDZiw0QkFBQyxjQUFEOztvQkFBQTtzQkFBQSxBQUFPO0FBQVA7QUFBQSxpQkFBQSxBQUFlLGVBQWdCLEtBQS9CLGdCQUFrRCxjQUFBLEFBQVEsZ0JBQVQsQUFBdUIsaUJBQXhFLEFBQXdGLEtBTDFGLEFBS0UsQUFFQyxlQUFBLEFBQVEsWUFBYSxRQUFBLEFBQVEsaUJBQTdCLEFBQThDLGlCQUE5QyxBQUFnRSx1QkFDOUQsY0FBRDs7b0JBQUE7c0JBQUEsQUFBTTtBQUFOO0FBQUEsT0FBQSxrQkFBTSxBQUFDLHlDQUFPLE9BQVIsTUFBYyxTQUFTLEtBQUEsQUFBSyxNQUE1QixBQUFrQyxVQUFVLE9BQTVDLEFBQWtELFNBQVEsT0FBMUQsTUFBZ0UsZUFBaEUsQUFBOEUsUUFBTyxNQUFyRixBQUEwRixZQUFXLFNBQXJHLEFBQTZHLFdBQVUsU0FBUyxLQUFoSSxBQUFxSTtvQkFBckk7c0JBUlYsQUFRSSxBQUFNLEFBSVA7QUFKTzttQkFJUCxBQUFRLFdBQVIsQUFBbUIsdUJBQ2pCLGNBQUQ7O29CQUFBO3NCQUFBLEFBQU07QUFBTjtBQUFBLE9BQUEsa0JBQU0sQUFBQyx5Q0FBTyxPQUFSLE1BQWMsU0FBUyxLQUFBLEFBQUssTUFBNUIsQUFBa0MsVUFBVSxPQUE1QyxBQUFrRCxRQUFPLE9BQXpELE1BQStELGVBQS9ELEFBQTZFLFFBQU8sTUFBcEYsQUFBeUYscUJBQW9CLFNBQTdHLEFBQXFILFlBQVcsU0FBUyxLQUF6SSxBQUE4STtvQkFBOUk7c0JBZFosQUFDRSxBQWFJLEFBQU0sQUFLYjtBQUxhOzs7Ozs7QUFyRFMsQSxBQTZEekI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiUmVxdWVzdFJvdy5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9hbGkvdWRlbXlDb250cmFjdHMva2lja3N0YXJ0In0=