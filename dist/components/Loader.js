"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _drei = require("@react-three/drei");
var CanvasLoader = function CanvasLoader() {
  var _useProgress = (0, _drei.useProgress)(),
    progress = _useProgress.progress;
  return /*#__PURE__*/React.createElement(_drei.Html, {
    as: "div",
    center: true,
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "canvas-loader"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: "#F1F1F1",
      fontWeight: 800,
      marginTop: 40
    }
  }, progress.toFixed(2), "%"));
};
var _default = CanvasLoader;
exports["default"] = _default;