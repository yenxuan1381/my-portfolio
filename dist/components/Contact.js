"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _framerMotion = require("framer-motion");
var _browser = _interopRequireDefault(require("@emailjs/browser"));
var _styles = require("../styles");
var _canvas = require("./canvas");
var _hoc = require("../hoc");
var _motion = require("../utils/motion");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var Contact = function Contact() {
  var formRef = (0, _react.useRef)();
  var _useState = (0, _react.useState)({
      name: "",
      email: "",
      message: ""
    }),
    _useState2 = _slicedToArray(_useState, 2),
    form = _useState2[0],
    setForm = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    loading = _useState4[0],
    setLoading = _useState4[1];
  var handleChange = function handleChange(e) {
    var target = e.target;
    var name = target.name,
      value = target.value;
    setForm(_objectSpread(_objectSpread({}, form), {}, _defineProperty({}, name, value)));
  };
  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    _browser["default"].send(import.meta.env.VITE_APP_EMAILJS_SERVICE_ID, import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID, {
      from_name: form.name,
      to_name: "Emily Lo",
      from_email: form.email,
      to_email: "emilylo1381@gmail.com",
      message: "".concat(form.message, " by ").concat(form.email)
    }, import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY).then(function () {
      setLoading(false);
      alert("Thank you. I will get back to you as soon as possible.");
      setForm({
        name: "",
        email: "",
        message: ""
      });
    }, function (error) {
      setLoading(false);
      console.error(error);
      alert("Ahh, something went wrong. Please try again.");
    });
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden"
  }, /*#__PURE__*/_react["default"].createElement(_framerMotion.motion.div, {
    variants: (0, _motion.slideIn)("left", "tween", 0.2, 1),
    className: "flex-[0.75] bg-black-100 p-8 rounded-2xl"
  }, /*#__PURE__*/_react["default"].createElement("p", {
    className: _styles.styles.sectionSubText
  }, "Get in touch"), /*#__PURE__*/_react["default"].createElement("h3", {
    className: _styles.styles.sectionHeadText
  }, "Contact."), /*#__PURE__*/_react["default"].createElement("form", {
    ref: formRef,
    onSubmit: handleSubmit,
    className: "mt-12 flex flex-col gap-8"
  }, /*#__PURE__*/_react["default"].createElement("label", {
    className: "flex flex-col"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "text-white font-medium mb-4"
  }, "Your Name"), /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    name: "name",
    value: form.name,
    onChange: handleChange,
    placeholder: "What's your good name?",
    className: "bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
  })), /*#__PURE__*/_react["default"].createElement("label", {
    className: "flex flex-col"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "text-white font-medium mb-4"
  }, "Your email"), /*#__PURE__*/_react["default"].createElement("input", {
    type: "email",
    name: "email",
    value: form.email,
    onChange: handleChange,
    placeholder: "What's your web address?",
    className: "bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
  })), /*#__PURE__*/_react["default"].createElement("label", {
    className: "flex flex-col"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "text-white font-medium mb-4"
  }, "Your Message"), /*#__PURE__*/_react["default"].createElement("textarea", {
    rows: 7,
    name: "message",
    value: form.message,
    onChange: handleChange,
    placeholder: "What you want to say?",
    className: "bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
  })), /*#__PURE__*/_react["default"].createElement("button", {
    type: "submit",
    className: "bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
  }, loading ? "Sending..." : "Send"))), /*#__PURE__*/_react["default"].createElement(_framerMotion.motion.div, {
    variants: (0, _motion.slideIn)("right", "tween", 0.2, 1),
    className: "xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
  }, /*#__PURE__*/_react["default"].createElement(_canvas.EarthCanvas, null)));
};
var _default = (0, _hoc.SectionWrapper)(Contact, "contact");
exports["default"] = _default;