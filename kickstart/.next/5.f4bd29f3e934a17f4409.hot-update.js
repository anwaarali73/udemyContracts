webpackHotUpdate(5,{

/***/ 954:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(85);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(86);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var _semanticUiReact = __webpack_require__(955);

var _factory = __webpack_require__(1252);

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/ali/udemyContracts/kickstart/pages/index.js?entry';
// Each such file in pages directory will be a react component

// Now we import our deployed instance of CampaignFactory from factory.js


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
          header: address,
          description: _react2.default.createElement('a', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 37
            }
          }, 'View the campaign'),
          // To make the card fit the window width
          fluid: true
        };
      });
      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {

      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, _react2.default.createElement('link', { rel: 'stylesheet', href: '//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.11/semantic.min.css', __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }), this.renderCampaigns(), _react2.default.createElement(_semanticUiReact.Button, {
        content: 'Create a new campaign',
        icon: 'add',
        primary: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }));
    }
  }], [{
    key: 'getInitialProps',

    // For next we replace react specific componentDidMount with static getInitialProps
    // which is specific to next js. It does the (ethereum-related) data fetching here
    // for the compenent without rendering it (thus making it more cost effective) and passes the fetched data to the props of
    // the compenent for it to render. And can then be accessible wit this.props.<data>
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var campaigns;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _factory2.default.methods.getDeployedCampaigns().call();

              case 2:
                campaigns = _context.sent;
                return _context.abrupt('return', { campaigns: campaigns });

              case 4:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQ2FyZCIsIkJ1dHRvbiIsImZhY3RvcnkiLCJDYW1wYWlnbkluZGV4IiwiaXRlbXMiLCJwcm9wcyIsImNhbXBhaWducyIsIm1hcCIsImhlYWRlciIsImFkZHJlc3MiLCJkZXNjcmlwdGlvbiIsImZsdWlkIiwicmVuZGVyQ2FtcGFpZ25zIiwibWV0aG9kcyIsImdldERlcGxveWVkQ2FtcGFpZ25zIiwiY2FsbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQU07O0FBS2YsQUFBTyxBQUFhOzs7Ozs7O0FBUnBCOztBQU9BOzs7SSxBQUdNOzs7Ozs7Ozs7O1NBV0o7O0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBQ0E7OztzQ0FFa0IsQUFDaEI7QUFDQTtBQUNBO1VBQU0sYUFBUSxBQUFLLE1BQUwsQUFBVyxVQUFYLEFBQXFCLElBQUksbUJBQVcsQUFDaEQ7O0FBRUU7a0JBRkssQUFFRyxBQUNSO3VDQUFhLGNBQUE7O3dCQUFBOzBCQUFBO0FBQUE7QUFBQSxXQUFBLEVBSFIsQUFHUSxBQUNiO0FBQ0E7aUJBTEYsQUFBTyxBQUtFLEFBRVY7QUFQUSxBQUNMO0FBRkosQUFBYyxBQVNkLE9BVGM7MkNBU1AsQUFBQyxzQkFBRCxBQUFNLFNBQU0sT0FBWixBQUFtQjtvQkFBbkI7c0JBQVAsQUFBTyxBQUNSO0FBRFE7T0FBQTs7Ozs2QkFHQSxBQUVQOzs2QkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLDBDQUNRLEtBQU4sQUFBVSxjQUFhLE1BQXZCLEFBQTRCO29CQUE1QjtzQkFERixBQUNFLEFBQ0M7QUFERDtlQURGLEFBRUcsQUFBSyxBQUNOLG1DQUFBLEFBQUM7aUJBQUQsQUFDVSxBQUNSO2NBRkYsQUFFTyxBQUNMO2lCQUhGOztvQkFBQTtzQkFKSixBQUNFLEFBR0UsQUFPTDtBQVBLO0FBQ0U7OztTQXhDUjs7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7dUJBRTBCLGtCQUFBLEFBQVEsUUFBUixBQUFnQix1QkFBaEIsQUFBdUMsQTs7bUJBQXpEO0E7aURBR0MsRUFBRSxXQUFGLEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFUaUIsQSxBQWtENUI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL2hvbWUvYWxpL3VkZW15Q29udHJhY3RzL2tpY2tzdGFydCJ9

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/home/ali/udemyContracts/kickstart/pages/index.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/ali/udemyContracts/kickstart/pages/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(83)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5mNGJkMjlmM2U5MzRhMTdmNDQwOS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/YTJkM2ViMiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFYWNoIHN1Y2ggZmlsZSBpbiBwYWdlcyBkaXJlY3Rvcnkgd2lsbCBiZSBhIHJlYWN0IGNvbXBvbmVudFxuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ2FyZCwgQnV0dG9uIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xuXG5cblxuLy8gTm93IHdlIGltcG9ydCBvdXIgZGVwbG95ZWQgaW5zdGFuY2Ugb2YgQ2FtcGFpZ25GYWN0b3J5IGZyb20gZmFjdG9yeS5qc1xuaW1wb3J0IGZhY3RvcnkgZnJvbSAnLi4vZXRoZXJldW0vZmFjdG9yeSc7XG5cbmNsYXNzIENhbXBhaWduSW5kZXggZXh0ZW5kcyBDb21wb25lbnQge1xuICAvLyBGb3IgbmV4dCB3ZSByZXBsYWNlIHJlYWN0IHNwZWNpZmljIGNvbXBvbmVudERpZE1vdW50IHdpdGggc3RhdGljIGdldEluaXRpYWxQcm9wc1xuICAvLyB3aGljaCBpcyBzcGVjaWZpYyB0byBuZXh0IGpzLiBJdCBkb2VzIHRoZSAoZXRoZXJldW0tcmVsYXRlZCkgZGF0YSBmZXRjaGluZyBoZXJlXG4gIC8vIGZvciB0aGUgY29tcGVuZW50IHdpdGhvdXQgcmVuZGVyaW5nIGl0ICh0aHVzIG1ha2luZyBpdCBtb3JlIGNvc3QgZWZmZWN0aXZlKSBhbmQgcGFzc2VzIHRoZSBmZXRjaGVkIGRhdGEgdG8gdGhlIHByb3BzIG9mXG4gIC8vIHRoZSBjb21wZW5lbnQgZm9yIGl0IHRvIHJlbmRlci4gQW5kIGNhbiB0aGVuIGJlIGFjY2Vzc2libGUgd2l0IHRoaXMucHJvcHMuPGRhdGE+XG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoKSB7XG4gICAgY29uc3QgY2FtcGFpZ25zID0gYXdhaXQgZmFjdG9yeS5tZXRob2RzLmdldERlcGxveWVkQ2FtcGFpZ25zKCkuY2FsbCgpO1xuXG4gICAgLy8gRm9sbG93aW5nIGlzIHRoZSBzYW1lIGFzIHJldHVybiB7Y2FtcGFpZ25zOiBjYW1wYWlnbnN9XG4gICAgcmV0dXJuIHsgY2FtcGFpZ25zIH07XG4gIH1cbiAgLy8gYXN5bmMgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gIC8vICAgY29uc3QgY2FtcGFpZ25zID0gYXdhaXQgZmFjdG9yeS5tZXRob2RzLmdldERlcGxveWVkQ2FtcGFpZ25zKCkuY2FsbCgpO1xuICAvLyAgIGNvbnNvbGUubG9nKGNhbXBhaWducyk7XG4gIC8vIH1cblxuICAvLyBGb2xsb3dpbmcgaXMgZ29pbmcgdG8gYmUgYSBzZXR1cCB0byBtYWtlIHVzZSBvZiBzZW1hbnRpYyB1aVxuICAvLyBzcGVjaWZpY2FsbHkgd2UgYXJlIG1ha2luZyB1c2Ugb2YgQ2FyZC5Hcm91cCB3aGljaCBpcyBhIGxpc3Qgb2Ygb2JqZWN0cyBpbiAnaXRlbXMnXG5cbiAgcmVuZGVyQ2FtcGFpZ25zKCkge1xuICAgIC8vIFRoZSBtYXAgZnVuY3Rpb24gaXRlcmF0ZXMgb3ZlciBhbGwgdGhlIHNwZWNpZmllZCBlbGVtZW50cyBvZiB0aGUgZnVuY3Rpb24gcGFzc2VkIHRvIGl0XG4gICAgLy8gSW4gb3VyIGNhc2Ugd2UgdGFrZSBhZGRyZXNzIG9mIGVhY2ggY2FtcGFpZ24gYW5kIGl0ZXJhdGUgb3ZlciB0aGVtIHRvIGZvcm1hdCB0aGVtXG4gICAgY29uc3QgaXRlbXMgPSB0aGlzLnByb3BzLmNhbXBhaWducy5tYXAoYWRkcmVzcyA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAvLyBGb2xsb3dpbmcgaXMgYSBzZW1hbnRpYyB1aSBzcGVjaWZpYyBzeW50YXggZm9yIENhcmRzLkdyb3VwXG4gICAgICAgIGhlYWRlcjogYWRkcmVzcyxcbiAgICAgICAgZGVzY3JpcHRpb246IDxhPlZpZXcgdGhlIGNhbXBhaWduPC9hPixcbiAgICAgICAgLy8gVG8gbWFrZSB0aGUgY2FyZCBmaXQgdGhlIHdpbmRvdyB3aWR0aFxuICAgICAgICBmbHVpZDogdHJ1ZVxuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiA8Q2FyZC5Hcm91cCBpdGVtcz17aXRlbXN9IC8+XG4gIH1cblxuICByZW5kZXIoKSB7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIvL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9zZW1hbnRpYy11aS8yLjIuMTEvc2VtYW50aWMubWluLmNzc1wiPjwvbGluaz5cbiAgICAgICAge3RoaXMucmVuZGVyQ2FtcGFpZ25zKCl9XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBjb250ZW50PVwiQ3JlYXRlIGEgbmV3IGNhbXBhaWduXCJcbiAgICAgICAgICBpY29uPVwiYWRkXCJcbiAgICAgICAgICBwcmltYXJ5XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FtcGFpZ25JbmRleDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzP2VudHJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFDQTs7O0FBQUE7QUFDQTtBQUlBO0FBQ0E7Ozs7OztBQVRBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBWUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTs7O0FBR0E7QUFDQTtBQUNBO0FBQUE7O0FBR0E7QUFDQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQU5BO0FBT0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBOzs7O0FBS0E7QUFDQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBRUE7QUFFQTtBQUNBO0FBSEE7O0FBQUE7QUFPQTtBQVBBO0FBQ0E7OztBQXhDQTtBQUNBO0FBQUE7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FBRUE7QUFDQTtBQURBOztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0NBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=