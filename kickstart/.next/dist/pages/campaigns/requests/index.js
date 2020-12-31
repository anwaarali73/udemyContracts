'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

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

var _Layout = require('../../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _routes = require('../../../routes');

var _semanticUiReact = require('semantic-ui-react');

var _factory = require('../../../ethereum/factory');

var _factory2 = _interopRequireDefault(_factory);

var _campaign = require('../../../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _RequestRow = require('../../../components/RequestRow');

var _RequestRow2 = _interopRequireDefault(_RequestRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/ali/udemyContracts/kickstart/pages/campaigns/requests/index.js?entry';
// We import our already deployed Campaign instance and load it up here


// Following import is for the component that makes redering our individual requests
// quite portable and concise


var RequestIndex = function (_Component) {
  (0, _inherits3.default)(RequestIndex, _Component);

  function RequestIndex() {
    (0, _classCallCheck3.default)(this, RequestIndex);

    return (0, _possibleConstructorReturn3.default)(this, (RequestIndex.__proto__ || (0, _getPrototypeOf2.default)(RequestIndex)).apply(this, arguments));
  }

  (0, _createClass3.default)(RequestIndex, [{
    key: 'renderRows',

    // Following helper function is to configure our /components/RequestRow.js file
    // whenever you try to return a list of items in react it expect a unique key for each item
    // that is why we use request index as a key for each individual request
    value: function renderRows() {
      var _this2 = this;

      return this.props.requests.map(function (request, index) {
        return _react2.default.createElement(_RequestRow2.default, {
          key: index,
          id: index,
          request: request,
          address: _this2.props.address,
          approversCount: _this2.props.approversCount,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          }
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      // Following is the fancy es2015 destructuring for the Table tag to make its use easier
      var Header = _semanticUiReact.Table.Header,
          Row = _semanticUiReact.Table.Row,
          HeaderCell = _semanticUiReact.Table.HeaderCell,
          Body = _semanticUiReact.Table.Body;

      return _react2.default.createElement(_Layout2.default, { numberOfCampaigns: this.props.campaigns.length, __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, 'Open requests for campaign at: ', this.props.address), _react2.default.createElement(_routes.Link, { route: '/campaigns/' + this.props.address, __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { secondary: true, icon: 'left chevron', content: 'Back to campaign details', __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }))), _react2.default.createElement(_routes.Link, { route: '/campaigns/' + this.props.address + '/requests/new', __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, labelPosition: 'right', icon: 'right chevron', content: 'Create a request', __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }))), _react2.default.createElement(_semanticUiReact.Table, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, _react2.default.createElement(Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, _react2.default.createElement(Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, 'ID'), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, 'Desciption'), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, 'Amount required (ether)'), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, 'Recipient'), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }, 'Approvals (Yes votes/contributors)'), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }, 'Approve'), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }, 'Finalise'))), _react2.default.createElement(Body, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }, this.renderRows())));
    }
  }], [{
    key: 'getInitialProps',

    // getInitialProps is different from the general props. getInitialProps referes to the data
    // we send to this component from the outside
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
        var address, campaigns, campaign, requestCount, approversCount, requests;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                address = props.query.address; // This destructuring is the same as const address = props.query.address

                _context.next = 3;
                return _factory2.default.methods.getDeployedCampaigns().call();

              case 3:
                campaigns = _context.sent;

                // Now up untill solidity 0.4.17 there is no support to return an array of structs
                // or user defined data types in general. That is why we make use of some fancy js
                // to handle multiple calls to our Campaign instance to extract all the requests in one go
                // As each call to a smart contract method involves the resolution of a 'promise' so we make
                // use of promise.all() method to extract all the requests' data and populate an array for
                // further use with it as follows.

                // First we load up our relevant Campaign instance at the specifed address that we are receiving in this
                // component's getInitialProps method.

                campaign = (0, _campaign2.default)(address);

                // Now lets extract how many requests this instance of Campaign already has

                _context.next = 7;
                return campaign.methods.getRequestsCount().call();

              case 7:
                requestCount = _context.sent;
                _context.next = 10;
                return campaign.methods.approversCount().call();

              case 10:
                approversCount = _context.sent;
                _context.next = 13;
                return _promise2.default.all(Array(parseInt(requestCount)).fill().map(function (element, index) {
                  // requests is the public array of structs we created in our Campaign.sol file
                  return campaign.methods.requests(index).call();
                }));

              case 13:
                requests = _context.sent;
                return _context.abrupt('return', { address: address, campaigns: campaigns, requests: requests, requestCount: requestCount, approversCount: approversCount });

              case 15:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return RequestIndex;
}(_react.Component);

exports.default = RequestIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9yZXF1ZXN0cy9pbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkxheW91dCIsIkxpbmsiLCJCdXR0b24iLCJUYWJsZSIsImZhY3RvcnkiLCJDYW1wYWlnbiIsIlJlcXVlc3RSb3ciLCJSZXF1ZXN0SW5kZXgiLCJwcm9wcyIsInJlcXVlc3RzIiwibWFwIiwicmVxdWVzdCIsImluZGV4IiwiYWRkcmVzcyIsImFwcHJvdmVyc0NvdW50IiwiSGVhZGVyIiwiUm93IiwiSGVhZGVyQ2VsbCIsIkJvZHkiLCJjYW1wYWlnbnMiLCJsZW5ndGgiLCJyZW5kZXJSb3dzIiwicXVlcnkiLCJtZXRob2RzIiwiZ2V0RGVwbG95ZWRDYW1wYWlnbnMiLCJjYWxsIiwiY2FtcGFpZ24iLCJnZXRSZXF1ZXN0c0NvdW50IiwicmVxdWVzdENvdW50IiwiYWxsIiwiQXJyYXkiLCJwYXJzZUludCIsImZpbGwiLCJlbGVtZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBUyxBQUFZOztBQUNyQixBQUFTLEFBQVE7O0FBQ2pCLEFBQU8sQUFBYTs7OztBQUVwQixBQUFPLEFBQWM7Ozs7QUFJckIsQUFBTyxBQUFnQjs7Ozs7OztBQUx2Qjs7O0FBR0E7QUFDQTs7O0ksQUFHTTs7Ozs7Ozs7OztTQTJDSjs7QUFDQTtBQUNBOztpQ0FDYTttQkFDWDs7a0JBQU8sQUFBSyxNQUFMLEFBQVcsU0FBWCxBQUFvQixJQUFJLFVBQUEsQUFBQyxTQUFELEFBQVUsT0FBVSxBQUNqRDsrQkFDRSxBQUFDO2VBQUQsQUFDTyxBQUNMO2NBRkYsQUFFTSxBQUNKO21CQUhGLEFBR1csQUFDVDttQkFBUyxPQUFBLEFBQUssTUFKaEIsQUFJc0IsQUFDcEI7MEJBQWdCLE9BQUEsQUFBSyxNQUx2QixBQUs2Qjs7c0JBTDdCO3dCQURGLEFBQ0UsQUFRSDtBQVJHO0FBQ0UsU0FERjtBQUZKLEFBQU8sQUFXUixPQVhROzs7OzZCQWFBLEFBQ1A7QUFETztVQUFBLEFBRUMsU0FGRCxBQUVtQyx1QkFGbkMsQUFFQztVQUZELEFBRVMsTUFGVCxBQUVtQyx1QkFGbkMsQUFFUztVQUZULEFBRWMsYUFGZCxBQUVtQyx1QkFGbkMsQUFFYztVQUZkLEFBRTBCLE9BRjFCLEFBRW1DLHVCQUZuQyxBQUUwQixBQUNqQzs7NkJBQ0UsQUFBQyxrQ0FBTyxtQkFBbUIsS0FBQSxBQUFLLE1BQUwsQUFBVyxVQUF0QyxBQUFnRDtvQkFBaEQ7c0JBQUEsQUFDRTtBQURGO09BQUEsa0JBQ0UsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBQW9DLHdDQUFBLEFBQUssTUFEM0MsQUFDRSxBQUErQyxBQUMvQywwQkFBQSxBQUFDLDhCQUFLLHVCQUFxQixLQUFBLEFBQUssTUFBaEMsQUFBc0M7b0JBQXRDO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxBQUFDLHlDQUFPLFdBQVIsTUFBa0IsTUFBbEIsQUFBdUIsZ0JBQWUsU0FBdEMsQUFBOEM7b0JBQTlDO3NCQUpOLEFBRUUsQUFDRSxBQUNFLEFBR0o7QUFISTs0QkFHSixBQUFDLDhCQUFLLHVCQUFxQixLQUFBLEFBQUssTUFBMUIsQUFBZ0MsVUFBdEM7b0JBQUE7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLEFBQUMseUNBQU8sU0FBUixNQUFnQixlQUFoQixBQUE4QixTQUFRLE1BQXRDLEFBQTJDLGlCQUFnQixTQUEzRCxBQUFtRTtvQkFBbkU7c0JBVE4sQUFPRSxBQUNFLEFBQ0UsQUFJSjtBQUpJOzRCQUlKLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNHLGNBQUQ7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNHLGNBQUQ7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNHLGNBQUQ7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDQSx1QkFBQyxjQUFEOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FGRixBQUVFLEFBQ0EsK0JBQUMsY0FBRDs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBSEYsQUFHRSxBQUNBLDRDQUFDLGNBQUQ7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUpGLEFBSUUsQUFDQSw4QkFBQyxjQUFEOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FMRixBQUtFLEFBQ0EsdURBQUMsY0FBRDs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBTkYsQUFNRSxBQUNBLDRCQUFDLGNBQUQ7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQVROLEFBQ0UsQUFDRSxBQU9FLEFBR0osK0JBQUMsY0FBRDs7b0JBQUE7c0JBQUEsQUFDRztBQURIO0FBQUEsY0ExQk4sQUFDRSxBQWFFLEFBWUUsQUFDRyxBQUFLLEFBS2Y7OztTQTlGRDs7QUFDQTs7OzJHQUM2QixBOzs7OzttQkFDbkI7QSwwQkFBWSxNLEFBQU0sTUFBbEIsQSxTQUF5Qjs7O3VCQUNULGtCQUFBLEFBQVEsUUFBUixBQUFnQix1QkFBaEIsQSxBQUF1Qzs7bUJBQXpEO0EscUNBRU47O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUNBO0FBRU07O0EsMkJBQVcsd0JBQUEsQSxBQUFTLEFBRTFCOzs7Ozt1QkFDMkIsU0FBQSxBQUFTLFFBQVQsQUFBaUIsbUJBQWpCLEFBQW9DLEE7O21CQUF6RDtBOzt1QkFNdUIsU0FBQSxBQUFTLFFBQVQsQUFBaUIsaUJBQWpCLEFBQWtDLEE7O21CQUF6RDtBOzt5Q0FJaUIsQUFBUSxVQUN2QixTQUFOLEFBQU0sQUFBUyxlQUFmLEFBQThCLE9BQTlCLEFBQXFDLElBQUksVUFBQSxBQUFDLFNBQUQsQUFBVSxPQUFVLEFBQzNEO0FBQ0E7eUJBQU8sU0FBQSxBQUFTLFFBQVQsQUFBaUIsU0FBakIsQUFBMEIsT0FBakMsQUFBTyxBQUFpQyxBQUN6QztBQUpvQixBQUNyQixBLGlCQUFBLENBRHFCOzttQkFBakI7QTtpREFVQyxFQUFFLFNBQUYsU0FBVyxXQUFYLFdBQXNCLFVBQXRCLFVBQWdDLGNBQWhDLGNBQThDLGdCQUE5QyxBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeENnQixBLEFBa0czQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvaG9tZS9hbGkvdWRlbXlDb250cmFjdHMva2lja3N0YXJ0In0=