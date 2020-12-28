'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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
exports.default = function () {
  return _react2.default.createElement(_semanticUiReact.Menu, { style: { marginTop: '10px' }, __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, _react2.default.createElement(_routes.Link, { route: '/', __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, _react2.default.createElement('a', { className: 'item', __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, 'FinalCoin')), _react2.default.createElement(_semanticUiReact.Menu.Menu, { position: 'right', __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, _react2.default.createElement(_routes.Link, { route: '/', __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, _react2.default.createElement('a', { className: 'item', __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, 'Open campaigns')), _react2.default.createElement(_routes.Link, { route: '/campaigns/new', __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }, _react2.default.createElement('a', { className: 'item', __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }, '+'))));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiTWVudSIsImZhY3RvcnkiLCJMaW5rIiwibWFyZ2luVG9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBUzs7QUFDVCxBQUFPLEFBQWE7Ozs7QUFNcEIsQUFBUyxBQUFZOzs7Ozs7QUFKckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxBQUNBO2tCQUFlLFlBQU0sQUFDbkI7eUJBQ0UsQUFBQyx1Q0FBSyxPQUFPLEVBQUUsV0FBZixBQUFhLEFBQVk7Z0JBQXpCO2tCQUFBLEFBQ0U7QUFERjtHQUFBLGtCQUNFLEFBQUMsOEJBQUssT0FBTixBQUFZO2dCQUFaO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxjQUFBLE9BQUcsV0FBSCxBQUFhO2dCQUFiO2tCQUFBO0FBQUE7S0FGSixBQUNFLEFBQ0UsQUFLRiwrQkFBQyxjQUFELHNCQUFBLEFBQU0sUUFBSyxVQUFYLEFBQW9CO2dCQUFwQjtrQkFBQSxBQUNBO0FBREE7cUJBQ0EsQUFBQyw4QkFBSyxPQUFOLEFBQVk7Z0JBQVo7a0JBQUEsQUFDRTtBQURGO3FCQUNFLGNBQUEsT0FBRyxXQUFILEFBQWE7Z0JBQWI7a0JBQUE7QUFBQTtLQUZGLEFBQ0EsQUFDRSxBQUtGLG9DQUFBLEFBQUMsOEJBQUssT0FBTixBQUFZO2dCQUFaO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxjQUFBLE9BQUcsV0FBSCxBQUFhO2dCQUFiO2tCQUFBO0FBQUE7S0FoQk4sQUFDRSxBQU9FLEFBT0EsQUFDRSxBQU9QO0FBeEJEIiwiZmlsZSI6IkhlYWRlci5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9hbGkvdWRlbXlDb250cmFjdHMva2lja3N0YXJ0In0=