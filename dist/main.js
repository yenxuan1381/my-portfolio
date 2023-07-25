"use strict";

var _react = _interopRequireDefault(require("react"));
var _client = _interopRequireDefault(require("react-dom/client"));
var _App = _interopRequireDefault(require("./App.jsx"));
require("./index.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
_client["default"].createRoot(document.getElementById("root")).render(
/*#__PURE__*/
// <React.StrictMode>
//   <App />
// </React.StrictMode>
_react["default"].createElement(_App["default"], null));