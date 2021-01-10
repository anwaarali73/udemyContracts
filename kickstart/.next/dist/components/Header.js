'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _factory = require('../ethereum/factory');

var _factory2 = _interopRequireDefault(_factory);

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/ali/udemyContracts/kickstart/components/Header.js';

// Following we import Link from our routes.js directory for user naviation around
// the app. The Link tag clashes with with the Menu styling fo the Menu.Item
// will the replaced by Link tag instead. Link tag wraps the navigatin ability
// to its children and we specify the routing as Link tag's props

// For a component prop like in <Menu> below we have {jsx here}
// and {{actual object literal like css styling in our case}}

var Header = function (_Component) {
  (0, _inherits3.default)(Header, _Component);

  function Header(props) {
    (0, _classCallCheck3.default)(this, Header);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Header.__proto__ || (0, _getPrototypeOf2.default)(Header)).call(this, props));

    _this.state = {
      numberOfCampaigns: _this.props.numberOfCampaigns
    };
    return _this;
  }

  (0, _createClass3.default)(Header, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_semanticUiReact.Menu, { style: { marginTop: '10px' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, _react2.default.createElement(_routes.Link, { route: '/', __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, _react2.default.createElement('a', { className: 'item', __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, 'JohnCoin')), _react2.default.createElement(_semanticUiReact.Menu.Menu, { position: 'right', __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, _react2.default.createElement(_routes.Link, { route: '/', __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, _react2.default.createElement('a', { className: 'item', __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, 'Open campaigns (', this.state.numberOfCampaigns, ')')), _react2.default.createElement(_routes.Link, { route: '/campaigns/new', __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, _react2.default.createElement('a', { className: 'item', __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, '+'))));
    }
  }]);

  return Header;
}(_react.Component);

exports.default = Header;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiTWVudSIsImZhY3RvcnkiLCJMaW5rIiwiSGVhZGVyIiwicHJvcHMiLCJzdGF0ZSIsIm51bWJlck9mQ2FtcGFpZ25zIiwibWFyZ2luVG9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTOztBQUNULEFBQU8sQUFBYTs7OztBQU1wQixBQUFTLEFBQVk7Ozs7OztBQUpyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztJQUVNLEE7a0NBQ0o7O2tCQUFBLEFBQVksT0FBTzt3Q0FBQTs7c0lBQUEsQUFDWCxBQUNSOztVQUFBLEFBQUs7eUJBQ2dCLE1BQUEsQUFBSyxNQUhQLEFBRW5CLEFBQWEsQUFDbUI7QUFEbkIsQUFDWDtXQUVEOzs7Ozs2QkFDUSxBQUNQOzZCQUNFLEFBQUMsdUNBQUssT0FBTyxFQUFFLFdBQWYsQUFBYSxBQUFZO29CQUF6QjtzQkFBQSxBQUNFO0FBREY7T0FBQSxrQkFDRSxBQUFDLDhCQUFLLE9BQU4sQUFBWTtvQkFBWjtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQSxPQUFHLFdBQUgsQUFBYTtvQkFBYjtzQkFBQTtBQUFBO1NBRkosQUFDRSxBQUNFLEFBS0YsOEJBQUMsY0FBRCxzQkFBQSxBQUFNLFFBQUssVUFBWCxBQUFvQjtvQkFBcEI7c0JBQUEsQUFDQTtBQURBO3lCQUNBLEFBQUMsOEJBQUssT0FBTixBQUFZO29CQUFaO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBLE9BQUcsV0FBSCxBQUFhO29CQUFiO3NCQUFBO0FBQUE7U0FDbUIseUJBQUEsQUFBSyxNQUR4QixBQUM4QixtQkFIaEMsQUFDQSxBQUNFLEFBS0YsdUJBQUEsQUFBQyw4QkFBSyxPQUFOLEFBQVk7b0JBQVo7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUEsT0FBRyxXQUFILEFBQWE7b0JBQWI7c0JBQUE7QUFBQTtTQWhCTixBQUNFLEFBT0UsQUFPQSxBQUNFLEFBT1A7Ozs7O0FBL0JrQixBLEFBa0NyQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJIZWFkZXIuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvYWxpL3VkZW15Q29udHJhY3RzL2tpY2tzdGFydCJ9