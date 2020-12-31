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
    (0, _classCallCheck3.default)(this, CampaignIndex);

    return (0, _possibleConstructorReturn3.default)(this, (CampaignIndex.__proto__ || (0, _getPrototypeOf2.default)(CampaignIndex)).apply(this, arguments));
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
              lineNumber: 43
            }
          }, _react2.default.createElement('a', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 44
            }
          }, 'View the campaign')),
          // To make the card fit the window width
          fluid: true
        };
      });
      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {

      return _react2.default.createElement(_Layout2.default, { numberOfCampaigns: this.props.campaigns.length, __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, 'Open Campaigns: ', this.props.campaigns.length), _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, 'Current block: ', this.props.blockNumber, ' '), _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, 'Gas price: ', this.props.gasPrice, ' '), _react2.default.createElement(_routes.Link, { route: '/campaigns/new', __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, _react2.default.createElement(_semanticUiReact.Button, {
        floated: 'right',
        content: 'Create a new campaign',
        icon: 'add',
        primary: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
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
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var campaigns, blockNumber, gasPrice;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _factory2.default.methods.getDeployedCampaigns().call();

              case 2:
                campaigns = _context.sent;
                _context.next = 5;
                return _web2.default.eth.getBlockNumber();

              case 5:
                blockNumber = _context.sent;
                _context.next = 8;
                return _web2.default.eth.getGasPrice();

              case 8:
                gasPrice = _context.sent;
                return _context.abrupt('return', { campaigns: campaigns, blockNumber: blockNumber, gasPrice: gasPrice });

              case 10:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps() {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return CampaignIndex;
}(_react.Component);

exports.default = CampaignIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQ2FyZCIsIkJ1dHRvbiIsIkxheW91dCIsIndlYjMiLCJmYWN0b3J5IiwiTGluayIsIkNhbXBhaWduSW5kZXgiLCJpdGVtcyIsInByb3BzIiwiY2FtcGFpZ25zIiwibWFwIiwiaGVhZGVyIiwiYWRkcmVzcyIsImRlc2NyaXB0aW9uIiwiZmx1aWQiLCJsZW5ndGgiLCJibG9ja051bWJlciIsImdhc1ByaWNlIiwicmVuZGVyQ2FtcGFpZ25zIiwibWV0aG9kcyIsImdldERlcGxveWVkQ2FtcGFpZ25zIiwiY2FsbCIsImV0aCIsImdldEJsb2NrTnVtYmVyIiwiZ2V0R2FzUHJpY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFNOztBQUNmLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQVU7Ozs7QUFHakIsQUFBTyxBQUFhOzs7O0FBR3BCLEFBQVMsQUFBWTs7Ozs7QUFYckI7O0FBT0E7OztBQUdBOzs7SSxBQUdNOzs7Ozs7Ozs7O1NBYUo7O0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBQ0E7OztzQ0FFa0IsQUFDaEI7QUFDQTtBQUNBO1VBQU0sYUFBUSxBQUFLLE1BQUwsQUFBVyxVQUFYLEFBQXFCLElBQUksbUJBQVcsQUFDaEQ7O0FBRUU7a0JBQVEsa0JBRkgsQUFFcUIsQUFDMUI7dUNBQ0UsQUFBQyw4QkFBSyx1QkFBTixBQUEyQjt3QkFBM0I7MEJBQUEsQUFDRTtBQURGO1dBQUEsa0JBQ0UsY0FBQTs7d0JBQUE7MEJBQUE7QUFBQTtBQUFBLGFBTEMsQUFJSCxBQUNFLEFBR0o7QUFDQTtpQkFURixBQUFPLEFBU0UsQUFFVjtBQVhRLEFBQ0w7QUFGSixBQUFjLEFBYWQsT0FiYzsyQ0FhUCxBQUFDLHNCQUFELEFBQU0sU0FBTSxPQUFaLEFBQW1CO29CQUFuQjtzQkFBUCxBQUFPLEFBQ1I7QUFEUTtPQUFBOzs7OzZCQUdBLEFBRVA7OzZCQUNFLEFBQUMsa0NBQU8sbUJBQW1CLEtBQUEsQUFBSyxNQUFMLEFBQVcsVUFBdEMsQUFBZ0Q7b0JBQWhEO3NCQUFBLEFBQ0k7QUFESjtPQUFBLGtCQUNJLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUFxQix5QkFBQSxBQUFLLE1BQUwsQUFBVyxVQURsQyxBQUNFLEFBQTBDLEFBQzFDLHlCQUFBLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUFvQix3QkFBQSxBQUFLLE1BQXpCLEFBQStCLGFBRmpDLEFBRUUsQUFDQSxzQkFBQSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FBZ0Isb0JBQUEsQUFBSyxNQUFyQixBQUEyQixVQUg3QixBQUdFLEFBQ0Esc0JBQUEsQUFBQyw4QkFBSyxPQUFOLEFBQVk7b0JBQVo7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLEFBQUM7aUJBQUQsQUFDVSxBQUNSO2lCQUZGLEFBRVUsQUFDUjtjQUhGLEFBR08sQUFDTDtpQkFKRjs7b0JBQUE7c0JBTk4sQUFJRSxBQUNFLEFBQ0UsQUFRSDtBQVJHO0FBQ0UsaUJBVGQsQUFDRSxBQUNJLEFBY0csQUFBSyxBQUlmOzs7U0E3REQ7O0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O3VCQUcwQixrQkFBQSxBQUFRLFFBQVIsQUFBZ0IsdUJBQWhCLEEsQUFBdUM7O21CQUF6RDtBOzt1QkFDb0IsY0FBQSxBQUFLLElBQUwsQUFBUyxBOzttQkFBN0I7QTs7dUJBQ2lCLGNBQUEsQUFBSyxJQUFMLEFBQVMsQTs7bUJBQTFCO0E7aURBRUMsRUFBRSxXQUFGLFdBQWEsYUFBYixhQUEwQixVQUExQixBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBWGlCLEEsQUFpRTVCOztrQkFBQSxBQUFlIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9ob21lL2FsaS91ZGVteUNvbnRyYWN0cy9raWNrc3RhcnQifQ==