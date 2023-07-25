"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactTilt = _interopRequireDefault(require("react-tilt"));
var _framerMotion = require("framer-motion");
var _styles = require("../styles");
var _assets = require("../assets");
var _hoc = require("../hoc");
var _constants = require("../constants");
var _motion = require("../utils/motion");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var ProjectCard = function ProjectCard(_ref) {
  var index = _ref.index,
    name = _ref.name,
    description = _ref.description,
    tags = _ref.tags,
    image = _ref.image,
    source_code_link = _ref.source_code_link;
  return /*#__PURE__*/_react["default"].createElement(_framerMotion.motion.div, {
    variants: (0, _motion.fadeIn)("up", "spring", index * 0.5, 0.75)
  }, /*#__PURE__*/_react["default"].createElement(_reactTilt["default"], {
    options: {
      max: 45,
      scale: 1,
      speed: 450
    },
    className: "bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "relative w-full h-[230px]"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: image,
    alt: "project_image",
    className: "w-full h-full object-cover rounded-2xl"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "absolute inset-0 flex justify-end m-3 card-img_hover"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    onClick: function onClick() {
      return window.open(source_code_link, "_blank");
    },
    className: "black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: _assets.github,
    alt: "source code",
    className: "w-1/2 h-1/2 object-contain"
  })))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "mt-5"
  }, /*#__PURE__*/_react["default"].createElement("h3", {
    className: "text-white font-bold text-[24px]"
  }, name), /*#__PURE__*/_react["default"].createElement("p", {
    className: "mt-2 text-secondary text-[14px]"
  }, description)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "mt-4 flex flex-wrap gap-2"
  }, tags.map(function (tag) {
    return /*#__PURE__*/_react["default"].createElement("p", {
      key: "".concat(name, "-").concat(tag.name),
      className: "text-[14px] ".concat(tag.color)
    }, "#", tag.name);
  }))));
};
var Works = function Works() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_framerMotion.motion.div, {
    variants: (0, _motion.textVariant)()
  }, /*#__PURE__*/_react["default"].createElement("p", {
    className: "".concat(_styles.styles.sectionSubText, " ")
  }, "My work"), /*#__PURE__*/_react["default"].createElement("h2", {
    className: "".concat(_styles.styles.sectionHeadText)
  }, "Projects.")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "w-full flex"
  }, /*#__PURE__*/_react["default"].createElement(_framerMotion.motion.p, {
    variants: (0, _motion.fadeIn)("", "", 0.1, 1),
    className: "mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
  }, "Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. I am always open to new ideas and opportunities, so feel free to reach out to me if you have any questions or suggestions.")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "mt-20 flex flex-wrap gap-7"
  }, _constants.projects.map(function (project, index) {
    return /*#__PURE__*/_react["default"].createElement(ProjectCard, _extends({
      key: "project-".concat(index),
      index: index
    }, project));
  })));
};
var _default = (0, _hoc.SectionWrapper)(Works, "");
exports["default"] = _default;