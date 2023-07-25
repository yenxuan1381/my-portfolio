"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.preLoaderAnim = exports.openMenu = exports.mobileLanding = exports.fadeUp = exports.fadeOut = exports.fadeIn = exports.closeMenu = exports.boxHover = exports.boxExit = void 0;
var _gsap = _interopRequireDefault(require("gsap"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// Declare a general timeline to use in all the animation functions.

var tl = _gsap["default"].timeline();

// Preloader Animation
var preLoaderAnim = function preLoaderAnim() {
  tl.to("body", {
    duration: 0.1,
    css: {
      overflowY: "hidden"
    },
    ease: "power3.inOut"
  }).to(".landing", {
    duration: 0.05,
    css: {
      overflowY: "hidden",
      height: "90vh"
    }
  }).to(".texts-container", {
    duration: 0,
    opacity: 1,
    ease: "Power3.easeOut"
  }).from(".texts-container span", {
    duration: 1.5,
    delay: 1,
    y: 70,
    skewY: 10,
    stagger: 0.4,
    ease: "Power3.easeOut"
  }).to(".texts-container span", {
    duration: 1,
    y: 70,
    skewY: -20,
    stagger: 0.2,
    ease: "Power3.easeOut"
  }).to(".landing", {
    duration: 0.05,
    css: {
      overflowY: "hidden",
      height: "unset"
    }
  }).to("body", {
    duration: 0.1,
    css: {
      overflowY: "scroll"
    },
    ease: "power3.inOut"
  }).from(".landing__top .sub", {
    duration: 1,
    opacity: 0,
    y: 80,
    ease: "expo.easeOut"
  }).to(".preloader", {
    duration: 1.5,
    height: "0vh",
    ease: "Power3.easeOut",
    onComplete: mobileLanding()
  }, "-=2").from(".landing__main .text", {
    duration: 2,
    // scale: 0,
    y: 10,
    opacity: 0,
    stagger: {
      amount: 2
    },
    ease: "power3.easeInOut"
  }).from(".links .item", {
    duration: 0.5,
    opacity: 0,
    delay: window.innerWidth < 763 ? -3 : -0.6,
    // y: 80,
    stagger: {
      amount: 0.5
    },
    ease: "expo.easeOut",
    onComplete: animateMainShape()
  }).from(".main-circle", {
    duration: 1,
    opacity: 0,
    ease: "power3.easeInOut",
    onComplete: animateShapes()
  }).from(".shapes .shape", {
    duration: 1,
    opacity: 0,
    delay: -1,
    ease: "power3.easeInOut",
    stagger: 1
  }).to(".preloader", {
    duration: 0,
    css: {
      display: "none"
    }
  });
};
exports.preLoaderAnim = preLoaderAnim;
var openMenu = function openMenu() {
  var tl = _gsap["default"].timeline();
  tl.to("body", {
    duration: 0.1,
    css: {
      overflowY: "hidden"
    },
    ease: "power3.out"
  }).to(".hamburger-menu", {
    duration: 0.1,
    css: {
      display: "block"
    }
  }).to(".header-item", {
    duration: 0.1,
    css: {
      background: "none"
    }
  }).to(".cls-1", {
    duration: 0.1,
    delay: 0.3,
    css: {
      fill: "#ffffff"
    }
  }).to([".nav-secondary", ".nav-primary"], {
    duration: 0.8,
    height: "100%",
    transformOrigin: "right top",
    stagger: {
      amount: 0.1
    },
    ease: "power3.inOut"
  }, "-=.5").from(".nav-link", {
    duration: 0.5,
    x: -80,
    opacity: 0,
    stagger: {
      amount: 0.5
    },
    ease: "Power3.in"
  }, "-=.3");

  // change cursor color when nav is open
  // tl.to(".cursor", {
  //   delay: -1,
  //   css: { className: "+=cursor-active" },
  // }).to(".cursor2", { delay: -1, css: { className: "+=cursor2-active" } });
};
exports.openMenu = openMenu;
var closeMenu = function closeMenu() {
  var tl = _gsap["default"].timeline();
  tl.to("body", {
    duration: 0.05,
    css: {
      overflowY: "scroll"
    },
    ease: "power3.inOut"
  }).to([".nav-primary", ".nav-secondary"], {
    duration: 0.8,
    height: "0",
    transformOrigin: "right top",
    stagger: {
      amount: 0.1
    },
    ease: "power3.inOut"
  }).to(".cls-1", {
    duration: 0.1,
    delay: -0.3,
    css: {
      fill: "#08e7f3"
    }
  }).to(".header-item", {
    duration: 0.5,
    css: {
      background: "rgba(11,11,15,.8)"
    }
  }).to(".hamburger-menu", {
    duration: 0.05,
    css: {
      display: "none"
    }
  });

  // tl.to(".cursor-active", {
  //   css: { className: "+=cursor" },
  // }).to(".cursor2-active", { css: { className: "+=cursor2" } });
};

// recurrent animations
exports.closeMenu = closeMenu;
var fadeUp = function fadeUp(el) {
  var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  tl.from(el, {
    y: 150,
    duration: 1,
    delay: delay,
    opacity: 0,
    ease: "power3.Out"
  });
};
exports.fadeUp = fadeUp;
var mobileLanding = function mobileLanding() {
  window.innerWidth < 763 && tl.from(".landing__main2", {
    duration: 1,
    delay: 0,
    opacity: 0,
    y: 80,
    ease: "expo.easeOut"
  });
};
exports.mobileLanding = mobileLanding;
var animateShapes = function animateShapes() {
  var infiniteTl = _gsap["default"].timeline({
    repeat: -1
  });
  infiniteTl.to(".shapes .shape", {
    duration: 4,
    rotate: 360,
    delay: -1,
    ease: "power3.easeInOut",
    stagger: 2
  }).to(".shapes .shape-3", {
    duration: 1,
    rotate: 360,
    delay: -2,
    ease: "power3.easeInOut"
  }).to(".shapes .shape", {
    duration: 3,
    rotate: 0,
    ease: "power3.easeInOut",
    stagger: 1
  }).to(".shapes .shape", {
    duration: 1,
    opacity: 0,
    delay: -1,
    ease: "power3.easeInOut",
    stagger: 1
  }).to(".shapes .shape", {
    duration: 1.5,
    opacity: 1,
    ease: "power3.easeInOut",
    stagger: 1
  });
};
var animateMainShape = function animateMainShape() {
  var infiniteTl = _gsap["default"].timeline({
    repeat: -1
  });
  infiniteTl.to(".shapes .main-circle", {
    duration: 6,
    x: -30,
    y: -50,
    ease: "expo.easeOut"
  }).to(".shapes .main-circle", {
    duration: 6,
    x: -30,
    y: 50,
    ease: "expo.easeOut"
  }).to(".shapes .main-circle", {
    duration: 4,
    x: 0,
    y: 0,
    ease: "expo.easeOut"
  });
};
var boxHover = function boxHover(e) {
  var tl = _gsap["default"].timeline();
  window.innerWidth >= 986 && tl.to(e.target.querySelector(".link"), {
    duration: 0,
    opacity: 1
  }).from(e.target.querySelectorAll(".box-anim"), {
    duration: 0.3,
    opacity: 0,
    y: 30,
    stagger: 0.1,
    ease: "Power3.easeOut"
  });
};
exports.boxHover = boxHover;
var boxExit = function boxExit(e) {
  window.innerWidth >= 986 && _gsap["default"].to(e.target.querySelector(".link"), {
    duration: 0,
    opacity: 0
  });
};
exports.boxExit = boxExit;
var fadeIn = function fadeIn(el) {
  _gsap["default"].to(el, {
    duration: 2,
    opacity: 1,
    y: -60,
    ease: "power4.out"
  });
};
exports.fadeIn = fadeIn;
var fadeOut = function fadeOut(el) {
  _gsap["default"].to(el, {
    duration: 1,
    opacity: 0,
    y: -20,
    ease: "power4.out"
  });
};
exports.fadeOut = fadeOut;