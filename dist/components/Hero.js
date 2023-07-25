"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _framerMotion = require("framer-motion");
var _react = _interopRequireWildcard(require("react"));
var _styles = require("../styles");
var _Girl = require("./Girl");
var _CvButton = _interopRequireDefault(require("./CvButton"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
// import { ComputersCanvas } from "./canvas";

// purple = B2AFE5

var Hero = function Hero() {
  return /*#__PURE__*/_react["default"].createElement("section", {
    className: "relative w-full h-screen mx-auto"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "absolute inset-0 top-[120px]  max-w-7xl mx-auto ".concat(_styles.styles.paddingX, " flex flex-row items-start gap-5")
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex-col justify-center items-center mt-5"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "w-5 h-5 rounded-full bg-[#915EFF]"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "w-1 sm:h-80 h-40 violet-gradient"
  })), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h1", {
    className: "".concat(_styles.styles.heroHeadText, " text-white")
  }, "Hi, I'm ", /*#__PURE__*/_react["default"].createElement("span", {
    className: "text-[#915EFF]"
  }, "Emily")), /*#__PURE__*/_react["default"].createElement("p", {
    className: "".concat(_styles.styles.heroSubText, " mt-2 text-white-100")
  }, "I'm a master's graduate from the ", /*#__PURE__*/_react["default"].createElement("br", {
    className: "sm:block hidden"
  }), "University of Nottingham, UK ", /*#__PURE__*/_react["default"].createElement("br", {
    className: "sm:block hidden"
  })), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement(_CvButton["default"], null))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "absolute inset-0 top-[80px] max-w-7xl ml-auto mr-3 flex flex-row items-end ".concat(_styles.styles.canvas)
  }, /*#__PURE__*/_react["default"].createElement(_Girl.Girl, null)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "absolute xs:bottom-10 bottom-32 w-full  flex justify-center items-center"
  }, /*#__PURE__*/_react["default"].createElement("a", {
    href: "#about"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2"
  }, /*#__PURE__*/_react["default"].createElement(_framerMotion.motion.div, {
    animate: {
      y: [0, 24, 0]
    },
    transition: {
      duration: 1.5,
      repeat: Infinity,
      repeatType: "loop"
    },
    className: "w-3 h-3 rounded-full bg-secondary mb-1"
  })))));
};
var _default = Hero;
exports["default"] = _default;