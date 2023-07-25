"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _fiber = require("@react-three/fiber");
var _drei = require("@react-three/drei");
var _Loader = _interopRequireDefault(require("../Loader"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var Computers = function Computers(_ref) {
  var isMobile = _ref.isMobile;
  // const computer = useGLTF("./desktop_pc/scene.gltf");
  var computer = (0, _drei.useGLTF)("./girl.gltf");
  return /*#__PURE__*/_react["default"].createElement("mesh", null, /*#__PURE__*/_react["default"].createElement("hemisphereLight", {
    intensity: 0.15,
    groundColor: "black"
  }), /*#__PURE__*/_react["default"].createElement("spotLight", {
    position: [-20, 50, 10],
    angle: 0.12,
    penumbra: 1,
    intensity: 1,
    castShadow: true,
    "shadow-mapSize": 1024
  }), /*#__PURE__*/_react["default"].createElement("pointLight", {
    intensity: 1
  }), /*#__PURE__*/_react["default"].createElement("primitive", {
    object: computer.scene,
    scale: isMobile ? 0.7 : 0.75,
    position: isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5],
    rotation: [-0.01, -0.2, -0.1]
  }));
};
var ComputersCanvas = function ComputersCanvas() {
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isMobile = _useState2[0],
    setIsMobile = _useState2[1];
  (0, _react.useEffect)(function () {
    // Add a listener for changes to the screen size
    var mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    var handleMediaQueryChange = function handleMediaQueryChange(event) {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return function () {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);
  return /*#__PURE__*/_react["default"].createElement(_fiber.Canvas, {
    frameloop: "demand",
    shadows: true,
    dpr: [1, 2],
    camera: {
      position: [20, 3, 5],
      fov: 25
    },
    gl: {
      preserveDrawingBuffer: true
    }
  }, /*#__PURE__*/_react["default"].createElement(_react.Suspense, {
    fallback: /*#__PURE__*/_react["default"].createElement(_Loader["default"], null)
  }, /*#__PURE__*/_react["default"].createElement(_drei.OrbitControls, {
    enableZoom: false,
    maxPolarAngle: Math.PI / 2,
    minPolarAngle: Math.PI / 2
  }), /*#__PURE__*/_react["default"].createElement(Computers, {
    isMobile: isMobile
  })), /*#__PURE__*/_react["default"].createElement(_drei.Preload, {
    all: true
  }));
};
var _default = ComputersCanvas;
exports["default"] = _default;