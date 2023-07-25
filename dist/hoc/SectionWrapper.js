"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _framerMotion = require("framer-motion");
var _styles = require("../styles");
var _motion = require("../utils/motion");
var StarWrapper = function StarWrapper(Component, idName) {
  return function HOC() {
    return /*#__PURE__*/React.createElement(_framerMotion.motion.section, {
      variants: (0, _motion.staggerContainer)(),
      initial: "hidden",
      whileInView: "show",
      viewport: {
        once: true,
        amount: 0.25
      },
      className: "".concat(_styles.styles.padding, " max-w-7xl mx-auto relative z-0")
    }, /*#__PURE__*/React.createElement("span", {
      className: "hash-span",
      id: idName
    }, "\xA0"), /*#__PURE__*/React.createElement(Component, null));
  };
};
var _default = StarWrapper;
exports["default"] = _default;