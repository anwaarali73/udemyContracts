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

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

var _semanticUiReact = require('semantic-ui-react');

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/ali/udemyContracts/kickstart/components/Layout.js'; // Contrains the width  of all the components inside of it on a webpage


// Below {props.children} will be the stuff (the components that would import this file)
//that will be wrapped inside our this component.

var Layout = function (_Component) {
  (0, _inherits3.default)(Layout, _Component);

  function Layout(props) {
    (0, _classCallCheck3.default)(this, Layout);

    return (0, _possibleConstructorReturn3.default)(this, (Layout.__proto__ || (0, _getPrototypeOf2.default)(Layout)).call(this, props));
  }

  (0, _createClass3.default)(Layout, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_semanticUiReact.Container, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, _react2.default.createElement(_head2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, _react2.default.createElement('link', { rel: 'stylesheet', href: '//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.11/semantic.min.css', __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      })), _react2.default.createElement(_Header2.default, { numberOfCampaigns: this.props.numberOfCampaigns, __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }), this.props.children);
    }
  }]);

  return Layout;
}(_react.Component);

exports.default = Layout;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiSGVhZGVyIiwiQ29udGFpbmVyIiwiSGVhZCIsIkxheW91dCIsInByb3BzIiwibnVtYmVyT2ZDYW1wYWlnbnMiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTyxBQUFZOzs7O0FBQ1YsQSxBQUFUOztBQUNBLEFBQU87Ozs7Ozs4RUFEd0M7OztBQUcvQztBQUNBOztJQUVNLEE7a0NBQ0o7O2tCQUFBLEFBQVksT0FBTzt3Q0FBQTs7aUlBQUEsQUFDWCxBQUNQOzs7Ozs2QkFDUyxBQUNSOzZCQUNFLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEsaURBQ1EsS0FBTixBQUFVLGNBQWEsTUFBdkIsQUFBNEI7b0JBQTVCO3NCQUZKLEFBQ0UsQUFDRSxBQUVGO0FBRkU7MkJBRUYsQUFBQyxrQ0FBTyxtQkFBbUIsS0FBQSxBQUFLLE1BQWhDLEFBQXNDO29CQUF0QztzQkFKRixBQUlFLEFBQ0c7QUFESDtlQUNHLEFBQUssTUFOWixBQUNFLEFBS2dCLEFBR25COzs7OztBQWRrQixBLEFBaUJyQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJMYXlvdXQuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvYWxpL3VkZW15Q29udHJhY3RzL2tpY2tzdGFydCJ9