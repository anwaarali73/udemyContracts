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

var _campaign = require('../../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _semanticUiReact = require('semantic-ui-react');

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _ContributeForm = require('../../components/ContributeForm');

var _ContributeForm2 = _interopRequireDefault(_ContributeForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/ali/udemyContracts/kickstart/pages/campaigns/show.js?entry';
// This file will dynamically show the relevant campaign
// specific content to the user. The routing rule for this
// dynamic routing is described in routes.js

// We will also be sending a rendered campaing's address to the ContributeForm

// To enable users to have the ability to contribute while looking at a specific
// campaign's details


var CamapaignShow = function (_Component) {
  (0, _inherits3.default)(CamapaignShow, _Component);

  function CamapaignShow() {
    (0, _classCallCheck3.default)(this, CamapaignShow);

    return (0, _possibleConstructorReturn3.default)(this, (CamapaignShow.__proto__ || (0, _getPrototypeOf2.default)(CamapaignShow)).apply(this, arguments));
  }

  (0, _createClass3.default)(CamapaignShow, [{
    key: 'renderCards',
    value: function renderCards() {
      // First we destructure the stuff returned by the above contract in a handy manner as follows
      var _props = this.props,
          minimumContribution = _props.minimumContribution,
          balance = _props.balance,
          requestCount = _props.requestCount,
          approversCount = _props.approversCount,
          manager = _props.manager;
      // Following, items is an array of objects that are passed as props to our Card tag
      // if confused you can look up the documentation for it at semantic ui react
      // each object corresponds to each of the attributes of a campaign such as its manager, balance, etc

      var items = [{
        header: 'Created by: ' + manager,
        meta: 'Address of the campaign creator (or manager)',
        description: 'Manager can create requests for money withdrawls',
        style: { overflowWrap: 'break-word' }
      }, {
        header: 'Min. Contribution: ' + minimumContribution,
        meta: 'Minimum amount in wei',
        description: 'Minimum amount in wei required to become a contributor to this campaign'
      }, {
        header: 'Balance: ' + _web2.default.utils.fromWei(balance, 'ether'),
        meta: 'Campaign\'s current balance (ether).',
        description: 'The current amount of money contributed to the campaign so far.'
      }, {
        header: 'Requests: ' + requestCount,
        meta: 'Number of open requests for campaign.',
        description: 'Each request much be approved by the campaign contributors'
      }, {
        header: 'Approvers: ' + approversCount,
        meta: 'Number of contributions',
        description: 'Number of people who have contributed to this campaign.'
      }];
      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, 'Details of campaign at: ', this.props.address), _react2.default.createElement(_semanticUiReact.Grid, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, this.renderCards()), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 6, __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, _react2.default.createElement(_ContributeForm2.default, { address: this.props.address, __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }))));
    }
  }], [{
    key: 'getInitialProps',

    // getInitialProps loads up some data for the class before it renders
    // props object passed into it is different which gets passed to the render
    // methods: more study is required. We extract our wildcard token containing the
    // address of the relevant campaign URL by using props.query.address
    // It will get updated automatically when user tries to access this page after
    // clicking the address of a campaign on the index.js file
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
        var campaign, summary;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                //console.log(props.query.address) // Passed from index.js and manipulated using the rule in routes.js
                campaign = (0, _campaign2.default)(props.query.address);
                _context.next = 3;
                return campaign.methods.getSummary().call();

              case 3:
                summary = _context.sent;
                return _context.abrupt('return', {
                  minimumContribution: summary[0],
                  balance: summary[1],
                  requestCount: summary[2],
                  approversCount: summary[3],
                  manager: summary[4],
                  address: props.query.address
                });

              case 5:
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

  return CamapaignShow;
}(_react.Component);

exports.default = CamapaignShow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9zaG93LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiTGF5b3V0IiwiQ2FtcGFpZ24iLCJDYXJkIiwiR3JpZCIsIndlYjMiLCJDb250cmlidXRlRm9ybSIsIkNhbWFwYWlnblNob3ciLCJwcm9wcyIsIm1pbmltdW1Db250cmlidXRpb24iLCJiYWxhbmNlIiwicmVxdWVzdENvdW50IiwiYXBwcm92ZXJzQ291bnQiLCJtYW5hZ2VyIiwiaXRlbXMiLCJoZWFkZXIiLCJtZXRhIiwiZGVzY3JpcHRpb24iLCJzdHlsZSIsIm92ZXJmbG93V3JhcCIsInV0aWxzIiwiZnJvbVdlaSIsImFkZHJlc3MiLCJyZW5kZXJDYXJkcyIsImNhbXBhaWduIiwicXVlcnkiLCJtZXRob2RzIiwiZ2V0U3VtbWFyeSIsImNhbGwiLCJzdW1tYXJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWM7Ozs7QUFDckIsQUFBUyxBQUFNOztBQUNmLEFBQU8sQUFBVTs7OztBQUdqQixBQUFPLEFBQW9COzs7Ozs7O0FBYjNCO0FBQ0E7QUFDQTs7QUFFQTs7QUFPQTtBQUNBOzs7SSxBQUdNOzs7Ozs7Ozs7OztrQ0F1QlUsQUFDVjtBQURVO21CQVFOLEtBUk0sQUFRRDtVQVJDLEFBR1IsNkJBSFEsQUFHUjtVQUhRLEFBSVIsaUJBSlEsQUFJUjtVQUpRLEFBS1Isc0JBTFEsQUFLUjtVQUxRLEFBTVIsd0JBTlEsQUFNUjtVQU5RLEFBT1IsaUJBUFEsQUFPUixBQUVGO0FBQ0E7QUFDQTtBQUNBOztVQUFNO2dCQUVNLGlCQURWLEFBQzJCLEFBQ3pCO2NBRkYsQUFFUSxBQUNOO3FCQUhGLEFBR2UsQUFDYjtlQUFPLEVBQUUsY0FMQyxBQUNaLEFBSVMsQUFBZ0I7QUFKekIsQUFDRSxPQUZVO2dCQVFGLHdCQURWLEFBQ2tDLEFBQ2hDO2NBRkYsQUFFUSxBQUNOO3FCQVZVLEFBT1osQUFHZTtBQUhmLEFBQ0U7Z0JBS1EsY0FBYyxjQUFBLEFBQUssTUFBTCxBQUFXLFFBQVgsQUFBbUIsU0FEM0MsQUFDd0IsQUFBNEIsQUFDbEQ7Y0FGRixBQUVRLEFBQ047cUJBZlUsQUFZWixBQUdlO0FBSGYsQUFDRTtnQkFLUSxlQURWLEFBQ3lCLEFBQ3ZCO2NBRkYsQUFFUSxBQUNOO3FCQXBCVSxBQWlCWixBQUdlO0FBSGYsQUFDRTtnQkFLUSxnQkFEVixBQUMwQixBQUN4QjtjQUZGLEFBRVEsQUFDTjtxQkF6QkosQUFBYyxBQXNCWixBQUdlLEFBR2pCO0FBTkUsQUFDRTsyQ0FLRyxBQUFDLHNCQUFELEFBQU0sU0FBTSxPQUFaLEFBQW1CO29CQUFuQjtzQkFBUCxBQUFPLEFBQ1o7QUFEWTtPQUFBOzs7OzZCQUdGLEFBQ1A7NkJBQ0ksQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FBNkIsaUNBQUEsQUFBSyxNQURwQyxBQUNFLEFBQXdDLEFBQ3hDLDBCQUFBLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNHLGNBQUQsc0JBQUEsQUFBTSxVQUFPLE9BQWIsQUFBb0I7b0JBQXBCO3NCQUFBLEFBQ0c7QUFESDtjQURGLEFBQ0UsQUFDRyxBQUFLLEFBRVIsZ0NBQUMsY0FBRCxzQkFBQSxBQUFNLFVBQU8sT0FBYixBQUFvQjtvQkFBcEI7c0JBQUEsQUFDRTtBQURGO3lCQUNFLEFBQUMsMENBQWUsU0FBUyxLQUFBLEFBQUssTUFBOUIsQUFBb0M7b0JBQXBDO3NCQVJWLEFBQ0ksQUFFRSxBQUlFLEFBQ0UsQUFLWDtBQUxXOzs7O1NBMUVaOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OzsyR0FDNkIsQTs7Ozs7bUJBQzNCO0FBQ007QSwyQkFBVyx3QkFBUyxNQUFBLEFBQU0sTUFBZixBQUFxQixBOzt1QkFDaEIsU0FBQSxBQUFTLFFBQVQsQUFBaUIsYUFBakIsQUFBOEIsQTs7bUJBQTlDO0E7O3VDQUlpQixRQURoQixBQUNnQixBQUFRLEFBQzdCOzJCQUFTLFFBRkosQUFFSSxBQUFRLEFBQ2pCO2dDQUFjLFFBSFQsQUFHUyxBQUFRLEFBQ3RCO2tDQUFnQixRQUpYLEFBSVcsQUFBUSxBQUN4QjsyQkFBUyxRQUxKLEFBS0ksQUFBUSxBQUNqQjsyQkFBUyxNQUFBLEFBQU0sTUFBTSxBLEFBTmhCO0FBQUEsQUFDTDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWRzQixBLEFBbUY1Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJzaG93LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9ob21lL2FsaS91ZGVteUNvbnRyYWN0cy9raWNrc3RhcnQifQ==