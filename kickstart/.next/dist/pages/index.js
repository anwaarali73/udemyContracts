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

              console.log(blockTimeStamp);
              timeStamp = new Date(blockTimeStamp.timestamp * 1000).toUTCString();

              console.log(timeStamp);
              _this.setState({ currentAccount: currentAccount, currentBalance: currentBalance, numberOfTransactions: numberOfTransactions, currentBlock: currentBlock, timeStamp: timeStamp });

            case 20:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQ2FyZCIsIkJ1dHRvbiIsIkxheW91dCIsIndlYjMiLCJmYWN0b3J5IiwiTGluayIsIkNhbXBhaWduSW5kZXgiLCJzdGF0ZSIsImN1cnJlbnRBY2NvdW50IiwiY3VycmVudEJhbGFuY2UiLCJjdXJyZW50QmxvY2siLCJ0aW1lU3RhbXAiLCJudW1iZXJPZlRyYW5zYWN0aW9ucyIsIm9uRW50ZXIiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwiZ2V0QmFsYW5jZSIsImdldFRyYW5zYWN0aW9uQ291bnQiLCJnZXRCbG9ja051bWJlciIsImdldEJsb2NrIiwiYmxvY2tUaW1lU3RhbXAiLCJjb25zb2xlIiwibG9nIiwiRGF0ZSIsInRpbWVzdGFtcCIsInRvVVRDU3RyaW5nIiwic2V0U3RhdGUiLCJpdGVtcyIsInByb3BzIiwiY2FtcGFpZ25zIiwibWFwIiwiaGVhZGVyIiwiYWRkcmVzcyIsImRlc2NyaXB0aW9uIiwiZmx1aWQiLCJsZW5ndGgiLCJnYXNQcmljZSIsInJlbmRlckNhbXBhaWducyIsIm1ldGhvZHMiLCJnZXREZXBsb3llZENhbXBhaWducyIsImNhbGwiLCJnZXRHYXNQcmljZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQU07O0FBQ2YsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBVTs7OztBQUdqQixBQUFPLEFBQWE7Ozs7QUFHcEIsQUFBUyxBQUFZOzs7OztBQVhyQjs7QUFPQTs7O0FBR0E7OztJLEFBR007Ozs7Ozs7Ozs7Ozs7OzswTixBQUNKO3NCQUFRLEFBQ1UsQUFDaEI7c0JBRk0sQUFFVSxBQUNoQjtvQkFITSxBQUdRLEFBQ2Q7aUJBSk0sQUFJSSxBQUNWOzRCQUxNLEFBS2dCLEE7QUFMaEIsQUFDTixhLEFBTUYsbUZBQVUsbUJBQUE7d0dBQUE7b0VBQUE7a0JBQUE7MkNBQUE7aUJBQUE7OEJBQUE7cUJBQ2UsY0FBQSxBQUFLLElBRHBCLEFBQ2UsQUFBUzs7aUJBQTFCO0FBREUsa0NBRUY7QUFGRSwrQkFFZSxTQUZmLEFBRWUsQUFBUzs4QkFGeEI7cUJBR3FCLGNBQUEsQUFBSyxJQUFMLEFBQVMsV0FBVyxTQUh6QyxBQUdxQixBQUFvQixBQUFTOztpQkFBcEQ7QUFIRSx3Q0FBQTs4QkFBQTtxQkFJMkIsY0FBQSxBQUFLLElBQUwsQUFBUyxvQkFBb0IsU0FKeEQsQUFJMkIsQUFBNkIsQUFBUzs7aUJBQW5FO0FBSkUsOENBQUE7OEJBQUE7cUJBS21CLGNBQUEsQUFBSyxJQUx4QixBQUttQixBQUFTOztpQkFBOUI7QUFMRSxzQ0FBQTs4QkFBQTtxQkFNcUIsY0FBQSxBQUFLLElBQUwsQUFBUyxTQU45QixBQU1xQixBQUFrQjs7aUJBQXpDO0FBTkUsd0NBT1I7O3NCQUFBLEFBQVEsSUFBUixBQUFZLEFBQ047QUFSRSwwQkFRVSxJQUFBLEFBQUksS0FBSyxlQUFBLEFBQWUsWUFBeEIsQUFBb0MsTUFSOUMsQUFRVSxBQUEwQyxBQUM1RDs7c0JBQUEsQUFBUSxJQUFSLEFBQVksQUFDWjtvQkFBQSxBQUFLLFNBQVMsRUFBQyxnQkFBRCxnQkFBaUIsZ0JBQWpCLGdCQUFpQyxzQkFBakMsc0JBQXVELGNBQXZELGNBQXFFLFdBVjNFLEFBVVIsQUFBYzs7aUJBVk47aUJBQUE7OEJBQUE7O0FBQUE7a0JBQUE7QTs7OztTQXVCVjs7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFDQTs7O3NDQUVrQixBQUNoQjtBQUNBO0FBQ0E7VUFBTSxhQUFRLEFBQUssTUFBTCxBQUFXLFVBQVgsQUFBcUIsSUFBSSxtQkFBVyxBQUNoRDs7QUFFRTtrQkFBUSxrQkFGSCxBQUVxQixBQUMxQjt1Q0FDRSxBQUFDLDhCQUFLLHVCQUFOLEFBQTJCO3dCQUEzQjswQkFBQSxBQUNFO0FBREY7V0FBQSxrQkFDRSxjQUFBOzt3QkFBQTswQkFBQTtBQUFBO0FBQUEsYUFMQyxBQUlILEFBQ0UsQUFHSjtBQUNBO2lCQVRGLEFBQU8sQUFTRSxBQUVWO0FBWFEsQUFDTDtBQUZKLEFBQWMsQUFhZCxPQWJjOzJDQWFQLEFBQUMsc0JBQUQsQUFBTSxTQUFNLE9BQVosQUFBbUI7b0JBQW5CO3NCQUFQLEFBQU8sQUFDUjtBQURRO09BQUE7Ozs7NkJBR0EsQUFDUDs2QkFDRSxBQUFDLGtDQUFPLG1CQUFtQixLQUFBLEFBQUssTUFBTCxBQUFXLFVBQXRDLEFBQWdELFFBQVEsU0FBUyxLQUFqRSxBQUFpRSxBQUFLO29CQUF0RTtzQkFBQSxBQUNJO0FBREo7T0FBQSxrQkFDSSxjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FBcUIseUJBQUEsQUFBSyxNQUFMLEFBQVcsVUFEbEMsQUFDRSxBQUEwQyxBQUMxQyx5QkFBQSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FBb0Isd0JBQUEsQUFBSyxNQUF6QixBQUErQixjQUEyQixzQkFBQSxBQUFLLE1BQS9ELEFBQXFFLFdBRnZFLEFBRUUsQUFDQSxzQkFBQSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FBZ0Isb0JBQUEsQUFBSyxNQUFyQixBQUEyQixVQUg3QixBQUdFLEFBQ0Esc0JBQUEsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBQW1CLHVCQUFBLEFBQUssTUFKMUIsQUFJRSxBQUE4QixBQUM5QixpQ0FBQSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FBbUIsdUJBQUEsQUFBSyxNQUF4QixBQUE4QixnQkFMaEMsQUFLRSxBQUNBLDJCQUFBLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUE4QixrQ0FBQSxBQUFLLE1BTnJDLEFBTUUsQUFBeUMsQUFDekMsdUNBQUEsQUFBQyw4QkFBSyxPQUFOLEFBQVk7b0JBQVo7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLEFBQUM7aUJBQUQsQUFDVSxBQUNSO2lCQUZGLEFBRVUsQUFDUjtjQUhGLEFBR08sQUFDTDtpQkFKRjs7b0JBQUE7c0JBVE4sQUFPRSxBQUNFLEFBQ0UsQUFRSDtBQVJHO0FBQ0UsaUJBWmQsQUFDRSxBQUNJLEFBaUJHLEFBQUssQUFJZjs7O1NBOUREOztBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozt1QkFHMEIsa0JBQUEsQUFBUSxRQUFSLEFBQWdCLHVCQUFoQixBLEFBQXVDOzttQkFBekQ7QTs7dUJBQ2lCLGNBQUEsQUFBSyxJLEFBQUwsQUFBUzs7bUJBQTFCO0E7a0RBRUMsRUFBRSxXQUFGLFdBQWEsVSxBQUFiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBN0JpQixBLEFBcUY1Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvaG9tZS9hbGkvdWRlbXlDb250cmFjdHMva2lja3N0YXJ0In0=