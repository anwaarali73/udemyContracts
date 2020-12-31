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

var _factory = require('../../ethereum/factory');

var _factory2 = _interopRequireDefault(_factory);

var _routes = require('../../routes');

var _ContributeForm = require('../../components/ContributeForm');

var _ContributeForm2 = _interopRequireDefault(_ContributeForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/ali/udemyContracts/kickstart/pages/campaigns/show.js?entry';
// This file will dynamically show the relevant campaign
// specific content to the user. The routing rule for this
// dynamic routing is described in routes.js

// We will also be sending a rendered campaing's address to the ContributeForm

// Following we import Link tag from our routes.js file for the user to navigate
// to the requests page for the campaign being rendered on this page. A corresponding
// routes entry will be .added to the file as well.

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
        header: 'Min. Contribution: ' + minimumContribution + ' wei',
        meta: 'Minimum amount in wei',
        description: 'Minimum amount in wei required to become a contributor to this campaign'
      }, {
        header: 'Balance: ' + _web2.default.utils.fromWei(balance, 'ether') + ' ether',
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
          lineNumber: 86
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Layout2.default, { numberOfCampaigns: this.props.numberOfCampaigns, __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, 'Details of campaign at: ', this.props.address), _react2.default.createElement(_semanticUiReact.Grid, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, this.renderCards()), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 6, __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }, _react2.default.createElement(_ContributeForm2.default, { address: this.props.address, __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }))), _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      }, _react2.default.createElement(_routes.Link, { route: '/campaigns/' + this.props.address + '/requests', __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        }
      }, 'View campaign requests')))))));
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
        var campaign, summary, numberOfCampaigns;
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
                _context.next = 6;
                return _factory2.default.methods.getDeployedCampaigns().call();

              case 6:
                numberOfCampaigns = _context.sent;
                return _context.abrupt('return', {
                  minimumContribution: summary[0],
                  balance: summary[1],
                  requestCount: summary[2],
                  approversCount: summary[3],
                  manager: summary[4],
                  address: props.query.address,
                  numberOfCampaigns: numberOfCampaigns.length
                });

              case 8:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9zaG93LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiTGF5b3V0IiwiQ2FtcGFpZ24iLCJDYXJkIiwiR3JpZCIsIkJ1dHRvbiIsIndlYjMiLCJmYWN0b3J5IiwiTGluayIsIkNvbnRyaWJ1dGVGb3JtIiwiQ2FtYXBhaWduU2hvdyIsInByb3BzIiwibWluaW11bUNvbnRyaWJ1dGlvbiIsImJhbGFuY2UiLCJyZXF1ZXN0Q291bnQiLCJhcHByb3ZlcnNDb3VudCIsIm1hbmFnZXIiLCJpdGVtcyIsImhlYWRlciIsIm1ldGEiLCJkZXNjcmlwdGlvbiIsInN0eWxlIiwib3ZlcmZsb3dXcmFwIiwidXRpbHMiLCJmcm9tV2VpIiwibnVtYmVyT2ZDYW1wYWlnbnMiLCJhZGRyZXNzIiwicmVuZGVyQ2FyZHMiLCJjYW1wYWlnbiIsInF1ZXJ5IiwibWV0aG9kcyIsImdldFN1bW1hcnkiLCJjYWxsIiwic3VtbWFyeSIsImdldERlcGxveWVkQ2FtcGFpZ25zIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWM7Ozs7QUFDckIsQUFBUyxBQUFNLEFBQU07O0FBQ3JCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQWE7Ozs7QUFJcEIsQUFBUyxBQUFZOztBQUdyQixBQUFPLEFBQW9COzs7Ozs7O0FBbEIzQjtBQUNBO0FBQ0E7O0FBRUE7O0FBUUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztJQUdNLEE7Ozs7Ozs7Ozs7O2tDQXlCVSxBQUNWO0FBRFU7bUJBUU4sS0FSTSxBQVFEO1VBUkMsQUFHUiw2QkFIUSxBQUdSO1VBSFEsQUFJUixpQkFKUSxBQUlSO1VBSlEsQUFLUixzQkFMUSxBQUtSO1VBTFEsQUFNUix3QkFOUSxBQU1SO1VBTlEsQUFPUixpQkFQUSxBQU9SLEFBRUY7QUFDQTtBQUNB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