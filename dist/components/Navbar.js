"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _styles = require("../styles");
var _constants = require("../constants");
var _assets = require("../assets");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var Navbar = function Navbar() {
  var _useState = (0, _react.useState)(""),
    _useState2 = _slicedToArray(_useState, 2),
    active = _useState2[0],
    setActive = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    toggle = _useState4[0],
    setToggle = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    scrolled = _useState6[0],
    setScrolled = _useState6[1];
  (0, _react.useEffect)(function () {
    var handleScroll = function handleScroll() {
      var scrollTop = window.scrollY;
      if (scrollTop > 1000) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return function () {
      return window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return /*#__PURE__*/_react["default"].createElement("nav", {
    className: "".concat(_styles.styles.paddingX, " w-full flex items-center py-5 fixed top-0 z-20 ").concat(scrolled ? "bg-primary" : "bg-transparent")
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "w-full flex justify-between items-center max-w-7xl mx-auto"
  }, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
    to: "/",
    className: "flex items-center gap-2",
    onClick: function onClick() {
      setActive("");
      window.scrollTo(0, 0);
    }
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: _assets.logo,
    alt: "logo",
    className: "w-9 h-9 object-contain"
  }), /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-white text-[18px] font-bold cursor-pointer flex "
  }, "Emily Lo \xA0")), /*#__PURE__*/_react["default"].createElement("ul", {
    className: "list-none hidden sm:flex flex-row gap-10"
  }, _constants.navLinks.map(function (nav) {
    return /*#__PURE__*/_react["default"].createElement("li", {
      key: nav.id,
      className: "".concat(active === nav.title ? "text-white" : "text-secondary", " hover:text-white text-[18px] font-medium cursor-pointer"),
      onClick: function onClick() {
        return setActive(nav.title);
      }
    }, /*#__PURE__*/_react["default"].createElement("a", {
      href: "#".concat(nav.id)
    }, nav.title));
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "sm:hidden flex flex-1 justify-end items-center"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: toggle ? _assets.close : _assets.menu,
    alt: "menu",
    className: "w-[28px] h-[28px] object-contain",
    onClick: function onClick() {
      return setToggle(!toggle);
    }
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(!toggle ? "hidden" : "flex", " p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl")
  }, /*#__PURE__*/_react["default"].createElement("ul", {
    className: "list-none flex justify-end items-start flex-1 flex-col gap-4"
  }, _constants.navLinks.map(function (nav) {
    return /*#__PURE__*/_react["default"].createElement("li", {
      key: nav.id,
      className: "font-poppins font-medium cursor-pointer text-[16px] ".concat(active === nav.title ? "text-white" : "text-secondary"),
      onClick: function onClick() {
        setToggle(!toggle);
        setActive(nav.title);
      }
    }, /*#__PURE__*/_react["default"].createElement("a", {
      href: "#".concat(nav.id)
    }, nav.title));
  }))))));
};
var _default = Navbar;
exports["default"] = _default;