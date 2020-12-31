webpackHotUpdate(8,{

/***/ 970:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(41);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(42);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(46);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(492);

var _factory = __webpack_require__(835);

var _factory2 = _interopRequireDefault(_factory);

var _routes = __webpack_require__(957);

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
      }, 'CommunityCoin')), _react2.default.createElement(_semanticUiReact.Menu.Menu, { position: 'right', __source: {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiTWVudSIsImZhY3RvcnkiLCJMaW5rIiwiSGVhZGVyIiwicHJvcHMiLCJzdGF0ZSIsIm51bWJlck9mQ2FtcGFpZ25zIiwibWFyZ2luVG9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTOztBQUNULEFBQU8sQUFBYTs7OztBQU1wQixBQUFTLEFBQVk7Ozs7OztBQUpyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztJQUVNLEE7a0NBQ0o7O2tCQUFBLEFBQVksT0FBTzt3Q0FBQTs7c0lBQUEsQUFDWCxBQUNSOztVQUFBLEFBQUs7eUJBQ2dCLE1BQUEsQUFBSyxNQUhQLEFBRW5CLEFBQWEsQUFDbUI7QUFEbkIsQUFDWDtXQUVEOzs7Ozs2QkFDUSxBQUNQOzZCQUNFLEFBQUMsdUNBQUssT0FBTyxFQUFFLFdBQWYsQUFBYSxBQUFZO29CQUF6QjtzQkFBQSxBQUNFO0FBREY7T0FBQSxrQkFDRSxBQUFDLDhCQUFLLE9BQU4sQUFBWTtvQkFBWjtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQSxPQUFHLFdBQUgsQUFBYTtvQkFBYjtzQkFBQTtBQUFBO1NBRkosQUFDRSxBQUNFLEFBS0YsbUNBQUMsY0FBRCxzQkFBQSxBQUFNLFFBQUssVUFBWCxBQUFvQjtvQkFBcEI7c0JBQUEsQUFDQTtBQURBO3lCQUNBLEFBQUMsOEJBQUssT0FBTixBQUFZO29CQUFaO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBLE9BQUcsV0FBSCxBQUFhO29CQUFiO3NCQUFBO0FBQUE7U0FDbUIseUJBQUEsQUFBSyxNQUR4QixBQUM4QixtQkFIaEMsQUFDQSxBQUNFLEFBS0YsdUJBQUEsQUFBQyw4QkFBSyxPQUFOLEFBQVk7b0JBQVo7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUEsT0FBRyxXQUFILEFBQWE7b0JBQWI7c0JBQUE7QUFBQTtTQWhCTixBQUNFLEFBT0UsQUFPQSxBQUNFLEFBT1A7Ozs7O0FBL0JrQixBLEFBa0NyQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJIZWFkZXIuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvYWxpL3VkZW15Q29udHJhY3RzL2tpY2tzdGFydCJ9

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/home/ali/udemyContracts/kickstart/components/Header.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/ali/udemyContracts/kickstart/components/Header.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOC5jYjQ4NjU3NGNiMDgxOTY5YmUxMi5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWFkZXIuanM/Y2VlZTIwZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTWVudSB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcbmltcG9ydCBmYWN0b3J5IGZyb20gJy4uL2V0aGVyZXVtL2ZhY3RvcnknO1xuXG4vLyBGb2xsb3dpbmcgd2UgaW1wb3J0IExpbmsgZnJvbSBvdXIgcm91dGVzLmpzIGRpcmVjdG9yeSBmb3IgdXNlciBuYXZpYXRpb24gYXJvdW5kXG4vLyB0aGUgYXBwLiBUaGUgTGluayB0YWcgY2xhc2hlcyB3aXRoIHdpdGggdGhlIE1lbnUgc3R5bGluZyBmbyB0aGUgTWVudS5JdGVtXG4vLyB3aWxsIHRoZSByZXBsYWNlZCBieSBMaW5rIHRhZyBpbnN0ZWFkLiBMaW5rIHRhZyB3cmFwcyB0aGUgbmF2aWdhdGluIGFiaWxpdHlcbi8vIHRvIGl0cyBjaGlsZHJlbiBhbmQgd2Ugc3BlY2lmeSB0aGUgcm91dGluZyBhcyBMaW5rIHRhZydzIHByb3BzXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnLi4vcm91dGVzJztcbi8vIEZvciBhIGNvbXBvbmVudCBwcm9wIGxpa2UgaW4gPE1lbnU+IGJlbG93IHdlIGhhdmUge2pzeCBoZXJlfVxuLy8gYW5kIHt7YWN0dWFsIG9iamVjdCBsaXRlcmFsIGxpa2UgY3NzIHN0eWxpbmcgaW4gb3VyIGNhc2V9fVxuXG5jbGFzcyBIZWFkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgdGhpcy5zdGF0ZSA9IHtcbiAgICBudW1iZXJPZkNhbXBhaWduczogdGhpcy5wcm9wcy5udW1iZXJPZkNhbXBhaWduc1xuICB9O1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4oXG4gICAgICA8TWVudSBzdHlsZT17eyBtYXJnaW5Ub3A6JzEwcHgnIH19PlxuICAgICAgICA8TGluayByb3V0ZT1cIi9cIj5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJpdGVtXCI+XG4gICAgICAgICAgICBDb21tdW5pdHlDb2luXG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L0xpbms+XG5cbiAgICAgICAgPE1lbnUuTWVudSBwb3NpdGlvbj1cInJpZ2h0XCI+XG4gICAgICAgIDxMaW5rIHJvdXRlPVwiL1wiPlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIml0ZW1cIj5cbiAgICAgICAgICAgIE9wZW4gY2FtcGFpZ25zICh7dGhpcy5zdGF0ZS5udW1iZXJPZkNhbXBhaWduc30pXG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L0xpbms+XG5cbiAgICAgICAgPExpbmsgcm91dGU9XCIvY2FtcGFpZ25zL25ld1wiPlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIml0ZW1cIj5cbiAgICAgICAgICAgICtcbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9NZW51Lk1lbnU+XG4gICAgICA8L01lbnU+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0hlYWRlci5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBS0E7QUFDQTs7Ozs7QUFMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBRUE7Ozs7O0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUlBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBT0E7Ozs7Ozs7QUFHQTs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9