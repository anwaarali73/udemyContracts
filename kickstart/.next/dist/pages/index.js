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
              lineNumber: 42
            }
          }, _react2.default.createElement('a', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 43
            }
          }, 'View the campaign')),
          // To make the card fit the window width
          fluid: true
        };
      });
      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {

      return _react2.default.createElement(_Layout2.default, { numberOfCampaigns: this.props.campaigns.length, __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, 'Open Campaigns: ', this.props.campaigns.length), _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, 'Current block: ', this.props.blockNumber, ' '), _react2.default.createElement(_routes.Link, { route: '/campaigns/new', __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, _react2.default.createElement(_semanticUiReact.Button, {
        floated: 'right',
        content: 'Create a new campaign',
        icon: 'add',
        primary: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
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
        var campaigns, blockNumber;
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
                return _context.abrupt('return', { campaigns: campaigns, blockNumber: blockNumber });

              case 7:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQ2FyZCIsIkJ1dHRvbiIsIkxheW91dCIsIndlYjMiLCJmYWN0b3J5IiwiTGluayIsIkNhbXBhaWduSW5kZXgiLCJpdGVtcyIsInByb3BzIiwiY2FtcGFpZ25zIiwibWFwIiwiaGVhZGVyIiwiYWRkcmVzcyIsImRlc2NyaXB0aW9uIiwiZmx1aWQiLCJsZW5ndGgiLCJibG9ja051bWJlciIsInJlbmRlckNhbXBhaWducyIsIm1ldGhvZHMiLCJnZXREZXBsb3llZENhbXBhaWducyIsImNhbGwiLCJldGgiLCJnZXRCbG9ja051bWJlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQU07O0FBQ2YsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBVTs7OztBQUdqQixBQUFPLEFBQWE7Ozs7QUFHcEIsQUFBUyxBQUFZOzs7OztBQVhyQjs7QUFPQTs7O0FBR0E7OztJLEFBR007Ozs7Ozs7Ozs7U0FZSjs7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFDQTs7O3NDQUVrQixBQUNoQjtBQUNBO0FBQ0E7VUFBTSxhQUFRLEFBQUssTUFBTCxBQUFXLFVBQVgsQUFBcUIsSUFBSSxtQkFBVyxBQUNoRDs7QUFFRTtrQkFBUSxrQkFGSCxBQUVxQixBQUMxQjt1Q0FDRSxBQUFDLDhCQUFLLHVCQUFOLEFBQTJCO3dCQUEzQjswQkFBQSxBQUNFO0FBREY7V0FBQSxrQkFDRSxjQUFBOzt3QkFBQTswQkFBQTtBQUFBO0FBQUEsYUFMQyxBQUlILEFBQ0UsQUFHSjtBQUNBO2lCQVRGLEFBQU8sQUFTRSxBQUVWO0FBWFEsQUFDTDtBQUZKLEFBQWMsQUFhZCxPQWJjOzJDQWFQLEFBQUMsc0JBQUQsQUFBTSxTQUFNLE9BQVosQUFBbUI7b0JBQW5CO3NCQUFQLEFBQU8sQUFDUjtBQURRO09BQUE7Ozs7NkJBR0EsQUFFUDs7NkJBQ0UsQUFBQyxrQ0FBTyxtQkFBbUIsS0FBQSxBQUFLLE1BQUwsQUFBVyxVQUF0QyxBQUFnRDtvQkFBaEQ7c0JBQUEsQUFDSTtBQURKO09BQUEsa0JBQ0ksY0FBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBQXFCLHlCQUFBLEFBQUssTUFBTCxBQUFXLFVBRGxDLEFBQ0UsQUFBMEMsQUFDMUMseUJBQUEsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBQW9CLHdCQUFBLEFBQUssTUFBekIsQUFBK0IsYUFGakMsQUFFRSxBQUNBLHNCQUFBLEFBQUMsOEJBQUssT0FBTixBQUFZO29CQUFaO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxBQUFDO2lCQUFELEFBQ1UsQUFDUjtpQkFGRixBQUVVLEFBQ1I7Y0FIRixBQUdPLEFBQ0w7aUJBSkY7O29CQUFBO3NCQUxOLEFBR0UsQUFDRSxBQUNFLEFBUUg7QUFSRztBQUNFLGlCQVJkLEFBQ0UsQUFDSSxBQWFHLEFBQUssQUFJZjs7O1NBM0REOztBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozt1QkFHMEIsa0JBQUEsQUFBUSxRQUFSLEFBQWdCLHVCQUFoQixBQUF1QyxBOzttQkFBekQ7QTs7dUJBQ29CLGNBQUEsQUFBSyxJQUFMLEEsQUFBUzs7bUJBQTdCO0E7aURBRUMsRUFBRSxXQUFGLFdBQWEsYSxBQUFiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVmlCLEEsQUErRDVCOztrQkFBQSxBQUFlIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9ob21lL2FsaS91ZGVteUNvbnRyYWN0cy9raWNrc3RhcnQifQ==