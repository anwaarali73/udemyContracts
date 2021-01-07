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

var _Layout = require('../components/Layout.js');

var _Layout2 = _interopRequireDefault(_Layout);

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _factory = require('../ethereum/factory');

var _factory2 = _interopRequireDefault(_factory);

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/ali/udemyContracts/kickstart/pages/index.js?entry';
// Each such file in pages directory will be a react component

// Now we import our deployed instance of CampaignFactory from factory.js


// Link tag is for user navigation that we import from our routes.js file


var CampaignIndex = function (_Component) {
  (0, _inherits3.default)(CampaignIndex, _Component);

  function CampaignIndex() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, CampaignIndex);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = CampaignIndex.__proto__ || (0, _getPrototypeOf2.default)(CampaignIndex)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      currentAccount: '',
      currentBalance: '',
      currentBlock: '',
      numberOfTransactions: ''
    }, _this.onEnter = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var accounts, currentAccount, currentBalance, numberOfTransactions, currentBlock;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _web2.default.eth.getAccounts();

            case 2:
              accounts = _context.sent;
              currentAccount = accounts[0];
              _context.next = 6;
              return _web2.default.eth.getBalance(accounts[0]);

            case 6:
              currentBalance = _context.sent;
              _context.next = 9;
              return _web2.default.eth.getTransactionCount(accounts[0]);

            case 9:
              numberOfTransactions = _context.sent;
              _context.next = 12;
              return _web2.default.eth.getBlockNumber();

            case 12:
              currentBlock = _context.sent;

              _this.setState({ currentAccount: currentAccount, currentBalance: currentBalance, numberOfTransactions: numberOfTransactions, currentBlock: currentBlock });

            case 14:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this2);
    })), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(CampaignIndex, [{
    key: 'renderCampaigns',

    // async componentDidMount() {
    //   const campaigns = await factory.methods.getDeployedCampaigns().call();
    //   console.log(campaigns);
    // }

    // Following is going to be a setup to make use of semantic ui
    // specifically we are making use of Card.Group which is a list of objects in 'items'

    value: function renderCampaigns() {
      // The map function iterates over all the specified elements of the function passed to it
      // In our case we take address of each campaign and iterate over them to format them
      var items = this.props.campaigns.map(function (address) {
        return {
          // Following is a semantic ui specific syntax for Cards.Group
          header: 'Campaign at: ' + address,
          description: _react2.default.createElement(_routes.Link, { route: '/campaigns/' + address, __source: {
              fileName: _jsxFileName,
              lineNumber: 56
            }
          }, _react2.default.createElement('a', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 57
            }
          }, 'View the campaign')),
          // To make the card fit the window width
          fluid: true
        };
      });
      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Layout2.default, { numberOfCampaigns: this.props.campaigns.length, onEnter: this.onEnter(), __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, 'Open Campaigns: ', this.props.campaigns.length), _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, 'Current block: ', this.state.currentBlock, ' '), _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, 'Gas price: ', this.props.gasPrice, ' '), _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, 'Your account: ', this.state.currentAccount), _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, 'Your balance: ', this.state.currentBalance), _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, 'Your total transactions: ', this.state.numberOfTransactions), _react2.default.createElement(_routes.Link, { route: '/campaigns/new', __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, _react2.default.createElement(_semanticUiReact.Button, {
        floated: 'right',
        content: 'Create a new campaign',
        icon: 'add',
        primary: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }))), this.renderCampaigns()));
    }
  }], [{
    key: 'getInitialProps',

    // For next we replace react specific componentDidMount with static getInitialProps
    // which is specific to next js. It does the (ethereum-related) data fetching here
    // for the compenent without rendering it (thus making it more cost effective) and passes the fetched data to the props of
    // the compenent for it to render. And can then be accessible wit this.props.<data>
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
        var campaigns, gasPrice;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _factory2.default.methods.getDeployedCampaigns().call();

              case 2:
                campaigns = _context2.sent;
                _context2.next = 5;
                return _web2.default.eth.getGasPrice();

              case 5:
                gasPrice = _context2.sent;
                return _context2.abrupt('return', { campaigns: campaigns, gasPrice: gasPrice });

              case 7:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getInitialProps() {
        return _ref3.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return CampaignIndex;
}(_react.Component);

exports.default = CampaignIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQ2FyZCIsIkJ1dHRvbiIsIkxheW91dCIsIndlYjMiLCJmYWN0b3J5IiwiTGluayIsIkNhbXBhaWduSW5kZXgiLCJzdGF0ZSIsImN1cnJlbnRBY2NvdW50IiwiY3VycmVudEJhbGFuY2UiLCJjdXJyZW50QmxvY2siLCJudW1iZXJPZlRyYW5zYWN0aW9ucyIsIm9uRW50ZXIiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwiZ2V0QmFsYW5jZSIsImdldFRyYW5zYWN0aW9uQ291bnQiLCJnZXRCbG9ja051bWJlciIsInNldFN0YXRlIiwiaXRlbXMiLCJwcm9wcyIsImNhbXBhaWducyIsIm1hcCIsImhlYWRlciIsImFkZHJlc3MiLCJkZXNjcmlwdGlvbiIsImZsdWlkIiwibGVuZ3RoIiwiZ2FzUHJpY2UiLCJyZW5kZXJDYW1wYWlnbnMiLCJtZXRob2RzIiwiZ2V0RGVwbG95ZWRDYW1wYWlnbnMiLCJjYWxsIiwiZ2V0R2FzUHJpY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFNOztBQUNmLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQVU7Ozs7QUFHakIsQUFBTyxBQUFhOzs7O0FBR3BCLEFBQVMsQUFBWTs7Ozs7QUFYckI7O0FBT0E7OztBQUdBOzs7SUFHTSxBOzs7Ozs7Ozs7Ozs7Ozs7ME5BQ0osQTtzQkFBUSxBQUNVLEFBQ2hCO3NCQUZNLEFBRVUsQUFDaEI7b0JBSE0sQUFHUSxBQUNkOzRCQUpNLEEsQUFJZ0I7QUFKaEIsQUFDTixhQUtGLEEsbUZBQVUsbUJBQUE7MEVBQUE7b0VBQUE7a0JBQUE7MkNBQUE7aUJBQUE7OEJBQUE7cUJBQ2UsY0FBQSxBQUFLLElBRHBCLEFBQ2UsQUFBUzs7aUJBQTFCO0FBREUsa0NBRUY7QUFGRSwrQkFFZSxTQUZmLEFBRWUsQUFB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