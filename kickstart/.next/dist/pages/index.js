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
      timeStamp: '',
      numberOfTransactions: ''
    }, _this.onEnter = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var accounts, currentAccount, currentBalance, numberOfTransactions, currentBlock, blockTimeStamp, timeStamp;
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
              _context.next = 15;
              return _web2.default.eth.getBlock(currentBlock);

            case 15:
              blockTimeStamp = _context.sent;

              //console.log(blockTimeStamp);
              timeStamp = new Date(blockTimeStamp.timestamp * 1000).toUTCString();
              //console.log(timeStamp);

              _this.setState({ currentAccount: currentAccount, currentBalance: currentBalance, numberOfTransactions: numberOfTransactions, currentBlock: currentBlock, timeStamp: timeStamp });

            case 18:
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
              lineNumber: 61
            }
          }, _react2.default.createElement('a', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 62
            }
          }, 'View the campaign')),
          // To make the card fit the window width
          fluid: true
        };
      });
      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Layout2.default, { numberOfCampaigns: this.props.campaigns.length, onEnter: this.onEnter(), __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, 'Open Campaigns: ', this.props.campaigns.length), _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, 'Current block: ', this.state.currentBlock, ' created at: ', this.state.timeStamp, ' '), _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, 'Gas price: ', this.props.gasPrice, ' '), _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, 'Your account: ', this.state.currentAccount), _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, 'Your balance: ', this.state.currentBalance, ' ether'), _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, 'Your total transactions: ', this.state.numberOfTransactions), _react2.default.createElement(_routes.Link, { route: '/campaigns/new', __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, _react2.default.createElement(_semanticUiReact.Button, {
        floated: 'right',
        content: 'Create a new campaign',
        icon: 'add',
        primary: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQ2FyZCIsIkJ1dHRvbiIsIkxheW91dCIsIndlYjMiLCJmYWN0b3J5IiwiTGluayIsIkNhbXBhaWduSW5kZXgiLCJzdGF0ZSIsImN1cnJlbnRBY2NvdW50IiwiY3VycmVudEJhbGFuY2UiLCJjdXJyZW50QmxvY2siLCJ0aW1lU3RhbXAiLCJudW1iZXJPZlRyYW5zYWN0aW9ucyIsIm9uRW50ZXIiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwiZ2V0QmFsYW5jZSIsImdldFRyYW5zYWN0aW9uQ291bnQiLCJnZXRCbG9ja051bWJlciIsImdldEJsb2NrIiwiYmxvY2tUaW1lU3RhbXAiLCJEYXRlIiwidGltZXN0YW1wIiwidG9VVENTdHJpbmciLCJzZXRTdGF0ZSIsIml0ZW1zIiwicHJvcHMiLCJjYW1wYWlnbnMiLCJtYXAiLCJoZWFkZXIiLCJhZGRyZXNzIiwiZGVzY3JpcHRpb24iLCJmbHVpZCIsImxlbmd0aCIsImdhc1ByaWNlIiwicmVuZGVyQ2FtcGFpZ25zIiwibWV0aG9kcyIsImdldERlcGxveWVkQ2FtcGFpZ25zIiwiY2FsbCIsImdldEdhc1ByaWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVMsQUFBTTs7QUFDZixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFVOzs7O0FBR2pCLEFBQU8sQUFBYTs7OztBQUdwQixBQUFTLEFBQVk7Ozs7O0FBWHJCOztBQU9BOzs7QUFHQTs7O0ksQUFHTTs7Ozs7Ozs7Ozs7Ozs7OzBOLEFBQ0o7c0JBQVEsQUFDVSxBQUNoQjtzQkFGTSxBQUVVLEFBQ2hCO29CQUhNLEFBR1EsQUFDZDtpQkFKTSxBQUlJLEFBQ1Y7NEJBTE0sQUFLZ0IsQTtBQUxoQixBQUNOLGEsQUFNRixtRkFBVSxtQkFBQTt3R0FBQTtvRUFBQTtrQkFBQTsyQ0FBQTtpQkFBQTs4QkFBQTtxQkFDZSxjQUFBLEFBQUssSUFEcEIsQUFDZSxBQUFTOztpQkFBMUI7QUFERSxrQ0FFRjtBQUZFLCtCQUVlLFNBRmYsQUFFZSxBQUFTOzhCQUZ4QjtxQkFHcUIsY0FBQSxBQUFLLElBQUwsQUFBUyxXQUFXLFNBSHpDLEFBR3FCLEFBQW9CLEFBQVM7O2lCQUFwRDtBQUhFLHdDQUFBOzhCQUFBO3FCQUkyQixjQUFBLEFBQUssSUFBTCxBQUFTLG9CQUFvQixTQUp4RCxBQUkyQixBQUE2QixBQUFTOztpQkFBbkU7QUFKRSw4Q0FBQTs4QkFBQTtxQkFLbUIsY0FBQSxBQUFLLElBTHhCLEFBS21CLEFBQVM7O2lCQUE5QjtBQUxFLHNDQUFBOzhCQUFBO3FCQU1xQixjQUFBLEFBQUssSUFBTCxBQUFTLFNBTjlCLEFBTXFCLEFBQWtCOztpQkFBekM7QUFORSx3Q0FPUjs7QUFDTTtBQVJFLDBCQVFVLElBQUEsQUFBSSxLQUFLLGVBQUEsQUFBZSxZQUF4QixBQUFvQyxNQVI5QyxBQVFVLEFBQTBDLEFBQzVEO0FBQ0E7O29CQUFBLEFBQUssU0FBUyxFQUFDLGdCQUFELGdCQUFpQixnQkFBakIsZ0JBQWlDLHNCQUFqQyxzQkFBdUQsY0FBdkQsY0FBcUUsV0FWM0UsQUFVUixBQUFjOztpQkFWTjtpQkFBQTs4QkFBQTs7QUFBQTtrQkFBQTtBOzs7O1NBdUJWOztBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUNBOzs7c0NBRWtCLEFBQ2hCO0FBQ0E7QUFDQTtVQUFNLGFBQVEsQUFBSyxNQUFMLEFBQVcsVUFBWCxBQUFxQixJQUFJLG1CQUFXLEFBQ2hEOztBQUVFO2tCQUFRLGtCQUZILEFBRXFCLEFBQzFCO3VDQUNFLEFBQUMsOEJBQUssdUJBQU4sQUFBMkI7d0JBQTNCOzBCQUFBLEFBQ0U7QUFERjtXQUFBLGtCQUNFLGNBQUE7O3dCQUFBOzBCQUFBO0FBQUE7QUFBQSxhQUxDLEFBSUgsQUFDRSxBQUdKO0FBQ0E7aUJBVEYsQUFBTyxBQVNFLEFBRVY7QUFYUSxBQUNMO0FBRkosQUFBYyxBQWFkLE9BYmM7MkNBYVAsQUFBQyxzQkFBRCxBQUFNLFNBQU0sT0FBWixBQUFtQjtvQkFBbkI7c0JBQVAsQUFBTyxBQUNSO0FBRFE7T0FBQTs7Ozs2QkFHQSxBQUNQOzZCQUNFLEFBQUMsa0NBQU8sbUJBQW1CLEtBQUEsQUFBSyxNQUFMLEFBQVcsVUFBdEMsQUFBZ0QsUUFBUSxTQUFTLEtBQWpFLEFBQWlFLEFBQUs7b0JBQXRFO3NCQUFBLEFBQ0k7QUFESjtPQUFBLGtCQUNJLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUFxQix5QkFBQSxBQUFLLE1BQUwsQUFBVyxVQURsQyxBQUNFLEFBQTBDLEFBQzFDLHlCQUFBLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUFvQix3QkFBQSxBQUFLLE1BQXpCLEFBQStCLGNBQTJCLHNCQUFBLEFBQUssTUFBL0QsQUFBcUUsV0FGdkUsQUFFRSxBQUNBLHNCQUFBLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUFnQixvQkFBQSxBQUFLLE1BQXJCLEFBQTJCLFVBSDdCLEFBR0UsQUFDQSxzQkFBQSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FBbUIsdUJBQUEsQUFBSyxNQUoxQixBQUlFLEFBQThCLEFBQzlCLGlDQUFBLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUFtQix1QkFBQSxBQUFLLE1BQXhCLEFBQThCLGdCQUxoQyxBQUtFLEFBQ0EsMkJBQUEsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBQThCLGtDQUFBLEFBQUssTUFOckMsQUFNRSxBQUF5QyxBQUN6Qyx1Q0FBQSxBQUFDLDhCQUFLLE9BQU4sQUFBWTtvQkFBWjtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsQUFBQztpQkFBRCxBQUNVLEFBQ1I7aUJBRkYsQUFFVSxBQUNSO2NBSEYsQUFHTyxBQUNMO2lCQUpGOztvQkFBQTtzQkFUTixBQU9FLEFBQ0UsQUFDRSxBQVFIO0FBUkc7QUFDRSxpQkFaZCxBQUNFLEFBQ0ksQUFpQkcsQUFBSyxBQUlmOzs7U0E5REQ7O0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O3VCQUcwQixrQkFBQSxBQUFRLFFBQVIsQUFBZ0IsdUJBQWhCLEEsQUFBdUM7O21CQUF6RDtBOzt1QkFDaUIsY0FBQSxBQUFLLElBQUwsQUFBUyxBOzttQkFBMUI7QTtrREFFQyxFQUFFLFdBQUYsV0FBYSxVLEFBQWI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE3QmlCLEEsQUFxRjVCOztrQkFBQSxBQUFlIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9ob21lL2FsaS91ZGVteUNvbnRyYWN0cy9raWNrc3RhcnQifQ==