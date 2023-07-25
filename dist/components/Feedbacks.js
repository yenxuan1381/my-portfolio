"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _framerMotion = require("framer-motion");
var _styles = require("../styles");
var _hoc = require("../hoc");
var _motion = require("../utils/motion");
var _constants = require("../constants");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var FeedbackCard = function FeedbackCard(_ref) {
  var index = _ref.index,
    testimonial = _ref.testimonial,
    name = _ref.name,
    designation = _ref.designation,
    company = _ref.company,
    image = _ref.image;
  return /*#__PURE__*/_react["default"].createElement(_framerMotion.motion.div, {
    variants: (0, _motion.fadeIn)("", "spring", index * 0.5, 0.75),
    className: "bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
  }, /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-white font-black text-[48px]"
  }, "\""), /*#__PURE__*/_react["default"].createElement("div", {
    className: "mt-1"
  }, /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-white tracking-wider text-[18px]"
  }, testimonial), /*#__PURE__*/_react["default"].createElement("div", {
    className: "mt-7 flex justify-between items-center gap-1"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex-1 flex flex-col"
  }, /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-white font-medium text-[16px]"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "blue-text-gradient"
  }, "@"), " ", name), /*#__PURE__*/_react["default"].createElement("p", {
    className: "mt-1 text-secondary text-[12px]"
  }, designation, " of ", company)), /*#__PURE__*/_react["default"].createElement("img", {
    src: image,
    alt: "feedback_by-".concat(name),
    className: "w-10 h-10 rounded-full object-cover"
  }))));
};
var Feedbacks = function Feedbacks() {
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "mt-12 bg-black-100 rounded-[20px]"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "bg-tertiary rounded-2xl ".concat(_styles.styles.padding, " min-h-[300px]")
  }, /*#__PURE__*/_react["default"].createElement(_framerMotion.motion.div, {
    variants: (0, _motion.textVariant)()
  }, /*#__PURE__*/_react["default"].createElement("p", {
    className: _styles.styles.sectionSubText
  }, "What others say"), /*#__PURE__*/_react["default"].createElement("h2", {
    className: _styles.styles.sectionHeadText
  }, "Testimonials."))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "-mt-20 pb-14 ".concat(_styles.styles.paddingX, " flex flex-wrap gap-7")
  }, _constants.testimonials.map(function (testimonial, index) {
    return /*#__PURE__*/_react["default"].createElement(FeedbackCard, _extends({
      key: testimonial.name,
      index: index
    }, testimonial));
  })));
};
var _default = (0, _hoc.SectionWrapper)(Feedbacks, "");
exports["default"] = _default;