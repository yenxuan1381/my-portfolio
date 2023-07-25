"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactVerticalTimelineComponent = require("react-vertical-timeline-component");
var _framerMotion = require("framer-motion");
require("react-vertical-timeline-component/style.min.css");
var _styles = require("../styles");
var _constants = require("../constants");
var _hoc = require("../hoc");
var _motion = require("../utils/motion");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var ExperienceCard = function ExperienceCard(_ref) {
  var experience = _ref.experience;
  return /*#__PURE__*/_react["default"].createElement(_reactVerticalTimelineComponent.VerticalTimelineElement, {
    contentStyle: {
      background: "#1d1836",
      color: "#fff"
    },
    contentArrowStyle: {
      borderRight: "7px solid  #232631"
    },
    date: experience.date,
    iconStyle: {
      background: experience.iconBg
    },
    icon: /*#__PURE__*/_react["default"].createElement("div", {
      className: "flex justify-center items-center w-full h-full"
    }, /*#__PURE__*/_react["default"].createElement("img", {
      src: experience.icon,
      alt: experience.company_name,
      className: "w-[60%] h-[60%] object-contain"
    }))
  }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h3", {
    className: "text-white text-[24px] font-bold"
  }, experience.title), /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-secondary text-[16px] font-semibold",
    style: {
      margin: 0
    }
  }, experience.company_name)), /*#__PURE__*/_react["default"].createElement("ul", {
    className: "mt-5 list-disc ml-5 space-y-2"
  }, experience.points.map(function (point, index) {
    return /*#__PURE__*/_react["default"].createElement("li", {
      key: "experience-point-".concat(index),
      className: "text-white-100 text-[14px] pl-1 tracking-wider"
    }, point);
  })));
};
var Experience = function Experience() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_framerMotion.motion.div, {
    variants: (0, _motion.textVariant)()
  }, /*#__PURE__*/_react["default"].createElement("p", {
    className: "".concat(_styles.styles.sectionSubText, " text-center")
  }, "What I have done so far"), /*#__PURE__*/_react["default"].createElement("h2", {
    className: "".concat(_styles.styles.sectionHeadText, " text-center")
  }, "Past Experience.")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "mt-20 flex flex-col"
  }, /*#__PURE__*/_react["default"].createElement(_reactVerticalTimelineComponent.VerticalTimeline, null, _constants.experiences.map(function (experience, index) {
    return /*#__PURE__*/_react["default"].createElement(ExperienceCard, {
      key: "experience-".concat(index),
      experience: experience
    });
  }))));
};
var _default = (0, _hoc.SectionWrapper)(Experience, "work");
exports["default"] = _default;