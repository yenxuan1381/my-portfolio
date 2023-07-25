"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
require("./Button.css");
var CvButton = function CvButton() {
  return /*#__PURE__*/React.createElement("button", {
    "class": "button lg:scale-100  xs:scale-80 "
  }, /*#__PURE__*/React.createElement("a", {
    href: "/src/assets/EmilyLo_CV.pdf",
    download: true
  }, /*#__PURE__*/React.createElement("span", {
    "class": "button-content"
  }, "Download CV")));
};
var _default = CvButton;
exports["default"] = _default;