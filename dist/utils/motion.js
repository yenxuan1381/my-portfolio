"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.zoomIn = exports.textVariant = exports.staggerContainer = exports.slideIn = exports.fadeIn = void 0;
var textVariant = function textVariant(delay) {
  return {
    hidden: {
      y: -50,
      opacity: 0
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay: delay
      }
    }
  };
};
exports.textVariant = textVariant;
var fadeIn = function fadeIn(direction, type, delay, duration) {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut"
      }
    }
  };
};
exports.fadeIn = fadeIn;
var zoomIn = function zoomIn(delay, duration) {
  return {
    hidden: {
      scale: 0,
      opacity: 0
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "tween",
        delay: delay,
        duration: duration,
        ease: "easeOut"
      }
    }
  };
};
exports.zoomIn = zoomIn;
var slideIn = function slideIn(direction, type, delay, duration) {
  return {
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut"
      }
    }
  };
};
exports.slideIn = slideIn;
var staggerContainer = function staggerContainer(staggerChildren, delayChildren) {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren || 0
      }
    }
  };
};
exports.staggerContainer = staggerContainer;