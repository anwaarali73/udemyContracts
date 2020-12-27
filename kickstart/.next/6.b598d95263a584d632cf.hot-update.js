webpackHotUpdate(6,{

/***/ 1515:
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

var _Layout = __webpack_require__(1252);

var _Layout2 = _interopRequireDefault(_Layout);

var _semanticUiReact = __webpack_require__(544);

var _factory = __webpack_require__(1254);

var _factory2 = _interopRequireDefault(_factory);

var _web = __webpack_require__(1255);

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/ali/udemyContracts/kickstart/pages/campaigns/new.js?entry';
// Ethereum related imports follow
// Importing the loaded CampaignFactory contract from our portable factory.js file


// And our configured web3 instance from web3.js file


var CampaignNew = function (_Component) {
  (0, _inherits3.default)(CampaignNew, _Component);

  function CampaignNew() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, CampaignNew);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = CampaignNew.__proto__ || (0, _getPrototypeOf2.default)(CampaignNew)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      minimumContribution: '',
      errorMessage: '',
      currentAccount: '',
      cuurentBalance: '',
      loading: false
    }, _this.onSubmit = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        var accounts;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();

                _this.setState({ loading: true, errorMessage: '' });

                // Following to catch error if transaction fails
                _context.prev = 2;
                _context.next = 5;
                return _web2.default.eth.getAccounts();

              case 5:
                accounts = _context.sent;
                _context.next = 8;
                return _factory2.default.methods.createCampaign(_this.state.minimumContribution).send({ from: accounts[0] });

              case 8:
                _context.next = 13;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context['catch'](2);

                _this.setState({ errorMessage: _context.t0.message });

              case 13:

                _this.setState({ loading: false });

              case 14:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2, [[2, 10]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _this.onEnter = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
      var accounts, balance;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _web2.default.eth.getAccounts();

            case 2:
              accounts = _context2.sent;
              _context2.next = 5;
              return _web2.default.eth.getBalance(accounts[0]);

            case 5:
              balance = _context2.sent;

              _this.setState({ currentAccount: accounts[0], currentBalance: balance });

            case 7:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, _this2);
    })), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  // Following function is just to show the user what account he is using at the moment


  (0, _createClass3.default)(CampaignNew, [{
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(_Layout2.default, { onEnter: this.onEnter(), __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, 'Create a new campaign:'), _react2.default.createElement('h4', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, '(You are at account: ', this.state.currentAccount, ')'), _react2.default.createElement('h4', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, '(Your current balance: ', this.state.currentBalance, ' ether)'), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, 'Minimum contribution'), _react2.default.createElement(_semanticUiReact.Input, {
        label: 'wei',
        placeholder: 'Enter an amount in wei',
        labelPosition: 'right',
        value: this.state.minimumContribution,
        onChange: function onChange(event) {
          return _this3.setState({ minimumContribution: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Following went wrong while transacting!', content: this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { loading: this.state.loading, primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, 'Create')));
    }
  }]);

  return CampaignNew;
}(_react.Component);

exports.default = CampaignNew;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9uZXcuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJMYXlvdXQiLCJGb3JtIiwiQnV0dG9uIiwiSW5wdXQiLCJNZXNzYWdlIiwiZmFjdG9yeSIsIndlYjMiLCJDYW1wYWlnbk5ldyIsInN0YXRlIiwibWluaW11bUNvbnRyaWJ1dGlvbiIsImVycm9yTWVzc2FnZSIsImN1cnJlbnRBY2NvdW50IiwiY3V1cmVudEJhbGFuY2UiLCJsb2FkaW5nIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic2V0U3RhdGUiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwibWV0aG9kcyIsImNyZWF0ZUNhbXBhaWduIiwic2VuZCIsImZyb20iLCJtZXNzYWdlIiwib25FbnRlciIsImdldEJhbGFuY2UiLCJiYWxhbmNlIiwiY3VycmVudEJhbGFuY2UiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBUyxBQUFNLEFBQVEsQUFBTzs7QUFHOUIsQUFBTyxBQUFhOzs7O0FBR3BCLEFBQU8sQUFBVTs7Ozs7OztBQUxqQjtBQUNBOzs7QUFHQTs7O0ksQUFHTTs7Ozs7Ozs7Ozs7Ozs7O3NOLEFBQ0o7MkJBQVEsQUFDZSxBQUNyQjtvQkFGTSxBQUVRLEFBQ2Q7c0JBSE0sQUFHVSxBQUNoQjtzQkFKTSxBQUlVLEFBQ2hCO2VBTE0sQUFLRyxBO0FBTEgsQUFDTixhLEFBT0Y7MkZBQVcsaUJBQUEsQUFBTyxPQUFQO1lBQUE7c0VBQUE7b0JBQUE7NkNBQUE7bUJBQ1Q7c0JBQUEsQUFBTSxBQUVOOztzQkFBQSxBQUFLLFNBQVMsRUFBRSxTQUFGLEFBQVcsTUFBTSxjQUEvQixBQUFjLEFBQStCLEFBRTdDOztBQUxTO2dDQUFBO2dDQUFBO3VCQU9nQixjQUFBLEFBQUssSUFQckIsQUFPZ0IsQUFBUzs7bUJBQTFCO0FBUEMsb0NBQUE7Z0NBQUE7dUJBUUQsa0JBQUEsQUFBUSxRQUFSLEFBQ0gsZUFBZSxNQUFBLEFBQUssTUFEakIsQUFDdUIscUJBRHZCLEFBRUgsS0FBSyxFQUFDLE1BQU0sU0FWUixBQVFELEFBRUUsQUFBTyxBQUFTOzttQkFWakI7Z0NBQUE7QUFBQTs7bUJBQUE7Z0NBQUE7Z0RBWUw7O3NCQUFBLEFBQUssU0FBUyxFQUFFLGNBQWMsWUFaekIsQUFZTCxBQUFjLEFBQW9COzttQkFHdEM7O3NCQUFBLEFBQUssU0FBUyxFQUFFLFNBZlAsQUFlVCxBQUFjLEFBQVc7O21CQWZoQjttQkFBQTtnQ0FBQTs7QUFBQTtpQ0FBQTtBOzs7OztlQW1CWCxBLG1GQUFVLG9CQUFBO29CQUFBO3NFQUFBO2tCQUFBOzZDQUFBO2lCQUFBOytCQUFBO3FCQUNlLGNBQUEsQUFBSyxJQURwQixBQUNlLEFBQVM7O2lCQUExQjtBQURFLG1DQUFBOytCQUFBO3FCQUVjLGNBQUEsQUFBSyxJQUFMLEFBQVMsV0FBVyxTQUZsQyxBQUVjLEFBQW9CLEFBQVM7O2lCQUE3QztBQUZFLGtDQUdSOztvQkFBQSxBQUFLLFNBQVMsRUFBRSxnQkFBZ0IsU0FBbEIsQUFBa0IsQUFBUyxJQUFJLGdCQUhyQyxBQUdSLEFBQWMsQUFBK0M7O2lCQUhyRDtpQkFBQTsrQkFBQTs7QUFBQTttQkFBQTtBO0FBRFY7Ozs7Ozs7NkJBTVM7bUJBQ1A7OzZCQUNFLEFBQUMsa0NBQU8sU0FBUyxLQUFqQixBQUFpQixBQUFLO29CQUF0QjtzQkFBQSxBQUNFO0FBREY7T0FBQSxrQkFDRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0EsMkNBQUEsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBQTBCLDhCQUFBLEFBQUssTUFBL0IsQUFBcUMsZ0JBRnZDLEFBRUUsQUFDQSxzQkFBQSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FBNEIsZ0NBQUEsQUFBSyxNQUFqQyxBQUF1QyxnQkFIekMsQUFHRSxBQUNBLDRCQUFBLEFBQUMsdUNBQUssVUFBVSxLQUFoQixBQUFxQixVQUFVLE9BQU8sQ0FBQyxDQUFDLEtBQUEsQUFBSyxNQUE3QyxBQUFtRDtvQkFBbkQ7c0JBQUEsQUFDRTtBQURGO3lCQUNHLGNBQUQsc0JBQUEsQUFBTTs7b0JBQU47c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUNBLHlDQUFBLEFBQUM7ZUFBRCxBQUNRLEFBQ047cUJBRkYsQUFFYyxBQUNaO3VCQUhGLEFBR2dCLEFBQ2Q7ZUFBTyxLQUFBLEFBQUssTUFKZCxBQUlvQixBQUNsQjtrQkFBVSx5QkFBQTtpQkFBUyxPQUFBLEFBQUssU0FBUyxFQUFDLHFCQUFxQixNQUFBLEFBQU0sT0FBbkQsQUFBUyxBQUFjLEFBQW1DO0FBTHRFOztvQkFBQTtzQkFISixBQUNFLEFBRUUsQUFTRjtBQVRFO0FBQ0UsMkJBUUosQUFBQywwQ0FBUSxPQUFULE1BQWUsUUFBZixBQUFzQiwyQ0FBMEMsU0FBUyxLQUFBLEFBQUssTUFBOUUsQUFBb0Y7b0JBQXBGO3NCQVpGLEFBWUUsQUFDQTtBQURBOzBCQUNBLEFBQUMseUNBQU8sU0FBUyxLQUFBLEFBQUssTUFBdEIsQUFBNEIsU0FBUyxTQUFyQztvQkFBQTtzQkFBQTtBQUFBO1NBbEJOLEFBQ0UsQUFJRSxBQWFFLEFBSVA7Ozs7O0FBeER1QixBLEFBMkQxQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJuZXcuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL2hvbWUvYWxpL3VkZW15Q29udHJhY3RzL2tpY2tzdGFydCJ9

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/home/ali/udemyContracts/kickstart/pages/campaigns/new.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/ali/udemyContracts/kickstart/pages/campaigns/new.js"); } } })();
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/campaigns/new")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5iNTk4ZDk1MjYzYTU4NGQ2MzJjZi5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvY2FtcGFpZ25zL25ldy5qcz9jOTdjY2ZiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCB7IEZvcm0sIEJ1dHRvbiwgSW5wdXQsIE1lc3NhZ2UgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XG4vLyBFdGhlcmV1bSByZWxhdGVkIGltcG9ydHMgZm9sbG93XG4vLyBJbXBvcnRpbmcgdGhlIGxvYWRlZCBDYW1wYWlnbkZhY3RvcnkgY29udHJhY3QgZnJvbSBvdXIgcG9ydGFibGUgZmFjdG9yeS5qcyBmaWxlXG5pbXBvcnQgZmFjdG9yeSBmcm9tICcuLi8uLi9ldGhlcmV1bS9mYWN0b3J5JztcblxuLy8gQW5kIG91ciBjb25maWd1cmVkIHdlYjMgaW5zdGFuY2UgZnJvbSB3ZWIzLmpzIGZpbGVcbmltcG9ydCB3ZWIzIGZyb20gJy4uLy4uL2V0aGVyZXVtL3dlYjMnO1xuXG5jbGFzcyBDYW1wYWlnbk5ldyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIG1pbmltdW1Db250cmlidXRpb246ICcnLFxuICAgIGVycm9yTWVzc2FnZTogJycsXG4gICAgY3VycmVudEFjY291bnQ6ICcnLFxuICAgIGN1dXJlbnRCYWxhbmNlOiAnJyxcbiAgICBsb2FkaW5nOiBmYWxzZVxuICB9O1xuXG4gIG9uU3VibWl0ID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiB0cnVlLCBlcnJvck1lc3NhZ2U6ICcnIH0pO1xuXG4gICAgLy8gRm9sbG93aW5nIHRvIGNhdGNoIGVycm9yIGlmIHRyYW5zYWN0aW9uIGZhaWxzXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcbiAgICAgIGF3YWl0IGZhY3RvcnkubWV0aG9kc1xuICAgICAgICAuY3JlYXRlQ2FtcGFpZ24odGhpcy5zdGF0ZS5taW5pbXVtQ29udHJpYnV0aW9uKVxuICAgICAgICAuc2VuZCh7ZnJvbTogYWNjb3VudHNbMF19KTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JNZXNzYWdlOiBlcnIubWVzc2FnZSB9KTtcbiAgICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSB9KTtcbiAgfTtcblxuICAvLyBGb2xsb3dpbmcgZnVuY3Rpb24gaXMganVzdCB0byBzaG93IHRoZSB1c2VyIHdoYXQgYWNjb3VudCBoZSBpcyB1c2luZyBhdCB0aGUgbW9tZW50XG4gIG9uRW50ZXIgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xuICAgIGNvbnN0IGJhbGFuY2UgPSBhd2FpdCB3ZWIzLmV0aC5nZXRCYWxhbmNlKGFjY291bnRzWzBdKTtcbiAgICB0aGlzLnNldFN0YXRlKHsgY3VycmVudEFjY291bnQ6IGFjY291bnRzWzBdLCBjdXJyZW50QmFsYW5jZTogYmFsYW5jZSB9KTtcbiAgfTtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8TGF5b3V0IG9uRW50ZXI9e3RoaXMub25FbnRlcigpfT5cbiAgICAgICAgPGgzPkNyZWF0ZSBhIG5ldyBjYW1wYWlnbjo8L2gzPlxuICAgICAgICA8aDQ+KFlvdSBhcmUgYXQgYWNjb3VudDoge3RoaXMuc3RhdGUuY3VycmVudEFjY291bnR9KTwvaDQ+XG4gICAgICAgIDxoND4oWW91ciBjdXJyZW50IGJhbGFuY2U6IHt0aGlzLnN0YXRlLmN1cnJlbnRCYWxhbmNlfSBldGhlcik8L2g0PlxuICAgICAgICA8Rm9ybSBvblN1Ym1pdD17dGhpcy5vblN1Ym1pdH0gZXJyb3I9eyEhdGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2V9PlxuICAgICAgICAgIDxGb3JtLkZpZWxkPlxuICAgICAgICAgICAgPGxhYmVsPk1pbmltdW0gY29udHJpYnV0aW9uPC9sYWJlbD5cbiAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICBsYWJlbD1cIndlaVwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgYW4gYW1vdW50IGluIHdlaVwiXG4gICAgICAgICAgICAgIGxhYmVsUG9zaXRpb249XCJyaWdodFwiXG4gICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLm1pbmltdW1Db250cmlidXRpb259XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiB0aGlzLnNldFN0YXRlKHttaW5pbXVtQ29udHJpYnV0aW9uOiBldmVudC50YXJnZXQudmFsdWV9KX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Gb3JtLkZpZWxkPlxuXG4gICAgICAgICAgPE1lc3NhZ2UgZXJyb3IgaGVhZGVyPVwiRm9sbG93aW5nIHdlbnQgd3Jvbmcgd2hpbGUgdHJhbnNhY3RpbmchXCIgY29udGVudD17dGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2V9IC8+XG4gICAgICAgICAgPEJ1dHRvbiBsb2FkaW5nPXt0aGlzLnN0YXRlLmxvYWRpbmd9IHByaW1hcnk+Q3JlYXRlPC9CdXR0b24+XG4gICAgICAgIDwvRm9ybT5cbiAgICAgIDwvTGF5b3V0PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FtcGFpZ25OZXc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9jYW1wYWlnbnMvbmV3LmpzP2VudHJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7OztBQUVBO0FBQ0E7Ozs7OztBQU5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBOztBQUpBO0FBT0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFKQTtBQUFBO0FBQUE7QUFPQTtBQUNBO0FBREE7QUFQQTtBQUFBO0FBUUE7QUFDQTtBQVRBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQVlBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFoQkE7QUFBQTtBQUFBOztBQUFBO0FBQUE7Ozs7OztBQW1CQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQURBO0FBQUE7QUFFQTtBQUNBO0FBREE7QUFGQTtBQUNBO0FBRUE7QUFDQTtBQUpBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQURBO0FBQ0E7Ozs7OztBQUtBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUxBOztBQUFBO0FBU0E7QUFUQTtBQUNBO0FBUUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFJQTs7Ozs7OztBQUdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=