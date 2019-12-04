/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sass_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _sass_styles_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sass_styles_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var waypoints_lib_noframework_waypoints_min_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15);
/* harmony import */ var waypoints_lib_noframework_waypoints_min_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(waypoints_lib_noframework_waypoints_min_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _js_libraries_tools_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16);
/* harmony import */ var _js_organisedPartials_animationOnScrollPartial__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17);





var waypoint = new Waypoint({
    element: document.querySelector('body'),
    handler: function() {
      console.log("kutte kamine :D :D :D")
    }
})

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(2);

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(14)(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// Imports
var getUrl = __webpack_require__(4);
var ___CSS_LOADER_URL___0___ = getUrl(__webpack_require__(5));
var ___CSS_LOADER_URL___1___ = getUrl(__webpack_require__(6));
var ___CSS_LOADER_URL___2___ = getUrl(__webpack_require__(7));
var ___CSS_LOADER_URL___3___ = getUrl(__webpack_require__(8));
var ___CSS_LOADER_URL___4___ = getUrl(__webpack_require__(9));
var ___CSS_LOADER_URL___5___ = getUrl(__webpack_require__(10));
var ___CSS_LOADER_URL___6___ = getUrl(__webpack_require__(11));
var ___CSS_LOADER_URL___7___ = getUrl(__webpack_require__(12));
var ___CSS_LOADER_URL___8___ = getUrl(__webpack_require__(13));
// Module
exports.push([module.i, ".waypoint-hide {\n  opacity: 0; }\n\n.waypoint-reveal {\n  opacity: 1; }\n\n.glide {\n  position: relative;\n  width: 100%;\n  box-sizing: border-box; }\n  .glide * {\n    box-sizing: inherit; }\n  .glide__track {\n    overflow: hidden; }\n  .glide__slides {\n    position: relative;\n    width: 100%;\n    list-style: none;\n    backface-visibility: hidden;\n    transform-style: preserve-3d;\n    touch-action: pan-Y;\n    overflow: hidden;\n    padding: 0;\n    white-space: nowrap;\n    display: flex;\n    flex-wrap: nowrap;\n    will-change: transform; }\n    .glide__slides--dragging {\n      user-select: none; }\n  .glide__slide {\n    width: 100%;\n    height: 100%;\n    flex-shrink: 0;\n    white-space: normal;\n    user-select: none;\n    -webkit-touch-callout: none;\n    -webkit-tap-highlight-color: transparent; }\n    .glide__slide a {\n      user-select: none;\n      -webkit-user-drag: none;\n      -moz-user-select: none;\n      -ms-user-select: none; }\n  .glide__arrows {\n    -webkit-touch-callout: none;\n    user-select: none; }\n  .glide__bullets {\n    -webkit-touch-callout: none;\n    user-select: none; }\n  .glide--rtl {\n    direction: rtl; }\n\n.glide__arrow {\n  position: absolute;\n  display: block;\n  top: 50%;\n  z-index: 2;\n  color: white;\n  text-transform: uppercase;\n  padding: 9px 12px;\n  background-color: transparent;\n  border: 2px solid rgba(255, 255, 255, 0.5);\n  border-radius: 4px;\n  box-shadow: 0 0.25em 0.5em 0 rgba(0, 0, 0, 0.1);\n  text-shadow: 0 0.25em 0.5em rgba(0, 0, 0, 0.1);\n  opacity: 1;\n  cursor: pointer;\n  transition: opacity 150ms ease, border 300ms ease-in-out;\n  transform: translateY(-50%);\n  line-height: 1; }\n  .glide__arrow:focus {\n    outline: none; }\n  .glide__arrow:hover {\n    border-color: white; }\n  .glide__arrow--left {\n    left: 2em; }\n  .glide__arrow--right {\n    right: 2em; }\n  .glide__arrow--disabled {\n    opacity: 0.33; }\n\n.glide__bullets {\n  position: absolute;\n  z-index: 2;\n  bottom: 2em;\n  left: 50%;\n  display: inline-flex;\n  list-style: none;\n  transform: translateX(-50%); }\n\n.glide__bullet {\n  background-color: rgba(255, 255, 255, 0.5);\n  width: 9px;\n  height: 9px;\n  padding: 0;\n  border-radius: 50%;\n  border: 2px solid transparent;\n  transition: all 300ms ease-in-out;\n  cursor: pointer;\n  line-height: 0;\n  box-shadow: 0 0.25em 0.5em 0 rgba(0, 0, 0, 0.1);\n  margin: 0 0.25em; }\n  .glide__bullet:focus {\n    outline: none; }\n  .glide__bullet:hover, .glide__bullet:focus {\n    border: 2px solid white;\n    background-color: rgba(255, 255, 255, 0.5); }\n  .glide__bullet--active {\n    background-color: white; }\n\n.glide--swipeable {\n  cursor: grab;\n  cursor: -moz-grab;\n  cursor: -webkit-grab; }\n\n.glide--dragging {\n  cursor: grabbing;\n  cursor: -moz-grabbing;\n  cursor: -webkit-grabbing; }\n\n/***********************************************  \n***************   TYPOGRAPHY    ****************\n************************************************/\n/*****************************************************  \n************       MEDIA QUERRIES      ***************\n******************************************************/\n/********* BREAKPOINT ***********/\n/* Small devices (landscape phones, 576px and up)\nMedium devices (tablets, 768px and up)\nLarge devices (desktops, 992px and up)\nExtra large devices (large desktops, 1200px and up) */\n/*###############################################\n#############    02 Media Querry    ###########\n################################################*/\n.delay-100ms {\n  animation-delay: 100ms; }\n\n.delay-200ms {\n  animation-delay: 200ms; }\n\n.delay-300ms {\n  animation-delay: 300ms; }\n\n.delay-500ms {\n  animation-delay: 500ms; }\n\n.delay-600ms {\n  animation-delay: 600ms; }\n\n.delay-700ms {\n  animation-delay: 700ms; }\n\n.delay-800ms {\n  animation-delay: 800ms; }\n\n.delay-900ms {\n  animation-delay: 900ms; }\n\n.delay-1800ms {\n  animation-delay: 1800ms; }\n\n@keyframes slideInRight {\n  0% {\n    transform: translate3d(180%, 0, 0); } }\n\n/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline; }\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block; }\n\nbody {\n  line-height: 1; }\n\nol, ul {\n  list-style: none; }\n\nblockquote, q {\n  quotes: none; }\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\n/*-----------------------------------------------------\n---------    Priority: Ultra    -----------\n-----------------------------------------------------*/\nhtml {\n  font-size: 10px;\n  height: 100%; }\n\n* {\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\nbody {\n  font-size: 1.6rem;\n  height: 100%; }\n\na {\n  display: inline-block;\n  text-decoration: none;\n  color: inherit; }\n\n:focus {\n  outline: none; }\n\n::-moz-focus-inner {\n  border: 0; }\n\n/* Prevents adjustments of font size after orientation changes in IE on Windows Phone and in iOS */\nhtml {\n  -ms-text-size-adjust: 100%;\n  -moz-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%; }\n\n/************************************************  \n******    general tags and attributes      ******\n*************************************************/\n[role=button] {\n  cursor: pointer; }\n\n/************************************************  \n*******      BODY AND ITS COMPONENT      ********\n*************************************************/\nbody {\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 400;\n  line-height: 1.5em; }\n\n.col {\n  margin-right: auto;\n  margin-left: auto; }\n\n/************************************************  \n*************      General styles      **********\n*************************************************/\n.orangeHighlight {\n  color: #F7931D; }\n\n.hidden {\n  display: none; }\n\n/************************************************************************  \n*************      general tyles for specific screens size     **********\n************************************************************************/\n@media only screen and (max-width: 48.9375em) {\n  .notForSm {\n    display: none; } }\n\n/**************************************************************  \n*******     Component Style - Self Made (CSSM)       **********\n***************************************************************/\n.cssm-componentHeaderStyle1 {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-bottom: 7.1875em; }\n  .cssm-componentHeaderStyle1 .componentHeading p {\n    font-size: 1.5em;\n    font-family: \"Montserrat\", sans-serif;\n    font-weight: 600;\n    color: #1a1a1a;\n    font-weight: 600;\n    padding: 8px 0 10px 0; }\n  .cssm-componentHeaderStyle1 .headerDivider {\n    background-color: #bfbfbf;\n    margin: 15px auto 40px auto;\n    height: 2px;\n    width: 40px; }\n  .cssm-componentHeaderStyle1 .componentSubHeading {\n    color: #595959;\n    font-size: 15px;\n    letter-spacing: 2px;\n    text-transform: uppercase; }\n\n/*##################################################\n##############   01.01 mainBanner    ###############\n###################################################*/\n.row-mainBanner {\n  background-size: cover;\n  background-image: url(" + ___CSS_LOADER_URL___0___ + ");\n  background-image: -webkit-image-set(url(" + ___CSS_LOADER_URL___0___ + ") 1x, url(" + ___CSS_LOADER_URL___1___ + ") 2x);\n  background-image: image-set(url(" + ___CSS_LOADER_URL___0___ + ") 1x, url(" + ___CSS_LOADER_URL___1___ + ") 2x); }\n  @media only screen and (min-width: 48em) {\n    .row-mainBanner {\n      background-image: url(" + ___CSS_LOADER_URL___2___ + ");\n      background-image: -webkit-image-set(url(" + ___CSS_LOADER_URL___2___ + ") 1x, url(" + ___CSS_LOADER_URL___3___ + ") 2x); } }\n  @media only screen and (min-width: 62em) {\n    .row-mainBanner {\n      background-image: url(" + ___CSS_LOADER_URL___4___ + "); } }\n\n/*##################################################\n##############   01.01 Our Blog    #################\n###################################################*/\n.component.ourBlog .list .firstHalf {\n  background-image: cover;\n  background-image: url(" + ___CSS_LOADER_URL___5___ + ");\n  background-image: -webkit-image-set(url(" + ___CSS_LOADER_URL___5___ + ") 1x, url(" + ___CSS_LOADER_URL___6___ + ") 2x);\n  background-image: image-set(url(" + ___CSS_LOADER_URL___5___ + ") 1x, url(" + ___CSS_LOADER_URL___6___ + ") 2x); }\n\n.dropBtn.activeDropDown .dropDownContent {\n  position: absolute;\n  display: flex;\n  flex-direction: column; }\n\n.dropBtn .dropDownContent {\n  display: none;\n  border-top: 3px solid #f7931d;\n  background-color: #2a2a2a;\n  padding: 0 20px;\n  width: 220px;\n  opacity: 0;\n  transition: all 0.3s ease-in-out; }\n  .dropBtn .dropDownContent li > a {\n    font-size: 13px;\n    color: #c1c1c1;\n    border-top: 1px solid #494949;\n    padding: 10px 0; }\n  .dropBtn .dropDownContent li:first-child > a {\n    border-top: 1px solid transparent; }\n\n.dropBtn.hoverEffect .dropDownContent {\n  opacity: 1;\n  transition: all 0.3s ease-in-out; }\n\n/*###########################################################\n#################      Main partials        #################\n############################################################*/\n/* Extra small device \n$xsBp-max= max-width = 36.9375em;  //575px */\n/*\n\tContent\n\t00. General for small device\n\t01. Landing Page\n\t\t01.00 Header\n\t\t01.01 mainBanner\n\t\t01.02 info\n\t\t\t01.02.00 appendixAd\n\t02. Online Presense\n\t03. Our Services\n\t04. quality and cost\n\t05. Why Us?\n\t  . Footer\n\txx. Miscellaneous\n*/\n/*###############################################\n#######   00. General for small device   ########\n################################################*/\n.row {\n  padding-right: 5%;\n  padding-left: 5%; }\n\n.col {\n  width: 100%; }\n\n/*##################################################\n##############   01 Landing page    ################\n###################################################*/\n.landingPage {\n  display: flex;\n  flex-direction: column;\n  height: 100%; }\n\n/*##################################################\n##############   01.00 Header    ###################\n###################################################*/\n.container-header {\n  font-size: 1.6rem; }\n\n/******************************************\n***             First row               ***\n*******************************************/\n.container-header .row-welcome {\n  background-color: #F7931D; }\n\n.component-welcome {\n  font-size: 1.2rem;\n  padding: 0.41667em 0;\n  color: #fff;\n  display: flex;\n  justify-content: space-between;\n  letter-spacing: 1px; }\n  .component-welcome .leftSection, .component-welcome .rightSection {\n    display: flex;\n    justify-content: space-between; }\n    .component-welcome .leftSection > *, .component-welcome .rightSection > * {\n      margin-left: 0.83333em;\n      padding-left: 10px;\n      border-left: 1px solid rgba(255, 255, 255, 0.6); }\n      .component-welcome .leftSection > *:first-child, .component-welcome .rightSection > *:first-child {\n        margin: 0;\n        padding: 0;\n        border: 0; }\n  .component-welcome i {\n    vertical-align: middle; }\n  .component-welcome .wrapperSocialNetwork {\n    display: flex; }\n    .component-welcome .wrapperSocialNetwork .socialNetwork {\n      padding-right: 0.83333em; }\n    .component-welcome .wrapperSocialNetwork .socialNetwork:last-child {\n      padding-right: 0; }\n    .component-welcome .wrapperSocialNetwork i {\n      font-size: 1.08333em;\n      color: #fff; }\n  .component-welcome .wrapperContactNumber i {\n    font-size: 0.83333em;\n    position: relative;\n    bottom: 2px; }\n\n/*XXXXXXXXXXXXXXXX  Only mobile specific XXXXXXXXXXXXXXX*/\n@media only screen and (max-width: 47.9375em) {\n  .component-welcome {\n    justify-content: center; }\n    .component-welcome .leftSection {\n      display: none; } }\n\n@media only screen and (max-width: 21.5625em) {\n  .component-welcome .wrapperLogin {\n    display: none; } }\n\n/******************************************\n***           2nd row                   ***\n*******************************************/\n@media only screen and (max-width: 61.9375em) {\n  .component-navigation .wrapper-nav {\n    /* General edited styles for all menus \n\t\tIMPORTANT --> some lines are commented as part of edit \n\t*/\n    /* Orientation-dependent styles for the content of the menu */\n    /* Vertical menu that slides from the left or right */\n    /* Push classes applied to the body */\n    /* Transitions */ }\n    .component-navigation .wrapper-nav .component-navigation .wrapper-nav ul {\n      flex-direction: column; }\n      .component-navigation .wrapper-nav .component-navigation .wrapper-nav ul li {\n        display: flex;\n        flex-direction: column; }\n      .component-navigation .wrapper-nav .component-navigation .wrapper-nav ul .cbp-spmenu-vertical {\n        top: null !important;\n        transition: top 0s !important; }\n    .component-navigation .wrapper-nav .cbp-spmenu {\n      background-color: rgba(0, 0, 0, 0.82) !important;\n      position: fixed; }\n    .component-navigation .wrapper-nav .cbp-spmenu .nav-label {\n      color: #afdefa;\n      font-size: 1.9em;\n      padding: 20px;\n      margin: 0;\n      font-weight: 300;\n      background: #0d77b6; }\n    .component-navigation .wrapper-nav .cbp-spmenu a {\n      display: block;\n      color: #fff;\n      font-size: 1.1em;\n      font-weight: 300; }\n    .component-navigation .wrapper-nav .cbp-spmenu a:hover {\n      background: #258ecd !important; }\n    .component-navigation .wrapper-nav .cbp-spmenu a:active {\n      background: #afdefa !important;\n      color: #47a3da !important; }\n    .component-navigation .wrapper-nav .cbp-spmenu-vertical {\n      width: 240px;\n      height: 100%; }\n    .component-navigation .wrapper-nav .cbp-spmenu-vertical a {\n      border-bottom: 1px solid #258ecd;\n      border-bottom: 1px solid #333;\n      padding: 1em; }\n    .component-navigation .wrapper-nav .cbp-spmenu-right {\n      right: -240px; }\n    .component-navigation .wrapper-nav .cbp-spmenu-right.cbp-spmenu-open {\n      right: 0px; }\n    .component-navigation .wrapper-nav .cbp-spmenu-push {\n      overflow-x: hidden;\n      position: relative;\n      left: 0; }\n    .component-navigation .wrapper-nav .cbp-spmenu-push-toright {\n      left: 240px; }\n    .component-navigation .wrapper-nav .cbp-spmenu-push-toleft {\n      left: -240px; }\n    .component-navigation .wrapper-nav .cbp-spmenu,\n    .component-navigation .wrapper-nav .cbp-spmenu-push {\n      -webkit-transition: all 0.5s ease-out;\n      -moz-transition: all 0.5s ease-out;\n      transition: all 0.5s ease-out; } }\n\n.component-navigation .wrapper-nav ul {\n  overflow: auto; }\n\n@media only screen and (max-width: 61.9375em) {\n  .disableScroll {\n    overflow: hidden; }\n  .bgOverlayForMenu {\n    position: fixed;\n    width: 100vh;\n    height: 100vh;\n    top: 0;\n    right: 0; }\n  .bgColor {\n    background-color: rgba(0, 0, 0, 0.6); }\n  .wrapper-nav {\n    transition: background-color 500ms !important; } }\n\n.component-navigation .wrapperAtomAnimation {\n  /* 129 = ellipse.getTotalLength() */\n  /* 129 = ellipse.getTotalLength() */ }\n  .component-navigation .wrapperAtomAnimation .container-atom {\n    width: 100%;\n    height: 100%; }\n  .component-navigation .wrapperAtomAnimation svg.atom {\n    max-height: 100vh;\n    max-width: 100vw;\n    overflow: visible; }\n  .component-navigation .wrapperAtomAnimation svg circle.kern {\n    fill: #FFEA00;\n    stroke: none;\n    filter: drop-shadow(0px 0px 4px #aeea00); }\n  .component-navigation .wrapperAtomAnimation .atom path {\n    fill: none;\n    stroke: #fff;\n    stroke-width: .06;\n    stroke-width: .12; }\n  .component-navigation .wrapperAtomAnimation path.tail {\n    stroke: #bda800;\n    fill: none;\n    animation: atom 1.5s infinite linear;\n    stroke-dashoffset: 0;\n    stroke-dasharray: 20,44.5;\n    stroke-width: .6; }\n  .component-navigation .wrapperAtomAnimation path.electron {\n    stroke: #FFEA00;\n    fill: none;\n    animation: atom 1.5s infinite linear;\n    stroke-dashoffset: 0;\n    stroke-dasharray: .1,64.4;\n    stroke-width: 2;\n    stroke-linecap: round; }\n  .component-navigation .wrapperAtomAnimation path.tail1,\n  .component-navigation .wrapperAtomAnimation path.electron1 {\n    animation-delay: -1s; }\n  .component-navigation .wrapperAtomAnimation path.tail2,\n  .component-navigation .wrapperAtomAnimation path.electron2 {\n    animation-delay: -1.4s; }\n\n@keyframes atom {\n  to {\n    stroke-dashoffset: 129; } }\n\n.component-navigation .wrapperHamburger {\n  /*###############################################\n##########      self edit     ###################\n################################################*/\n  /* //phase 1 of edit \n.hamburger {\n  margin: 0 !important;\n  height: 0 !important;\n  width: 63px;\n  height: 63px;\n}\n.burger-main {\n  width: 54px !important;\n  height: 60px !important;\n}\n.burger-main span {\n  width: 21px !important;\n}\nsvg.svg-circle {\n  padding-left: 2px;\n  padding-top: 7px;\n}\n.top {\n  transform-origin: 21px 2px !important ;\n}\n.bot {\n  transform-origin: 22px 2px !important ;\n}\n.mid {\n  top: 8px !important;\n}\n.burger-inner {\n  height: 20px !important;\n}\n*/\n  /*###############################################\n##########      End of self edit     ###################\n################################################*/ }\n  .component-navigation .wrapperHamburger .hamburger {\n    width: 58px !important;\n    height: 59px !important;\n    background: none !important;\n    margin: 0 !important; }\n  .component-navigation .wrapperHamburger .burger-main {\n    margin-top: 2px !important;\n    padding: 15px 11px !important;\n    width: 56px !important;\n    height: 54px !important; }\n  .component-navigation .wrapperHamburger .hamburger.open .burger-main {\n    margin-top: 0 !important; }\n  .component-navigation .wrapperHamburger .burger-main span {\n    width: 32px !important; }\n  .component-navigation .wrapperHamburger .burger-inner {\n    width: 32px !important;\n    height: 24px !important; }\n  .component-navigation .wrapperHamburger .svg-main {\n    width: 58px !important;\n    height: 0 !important; }\n  .component-navigation .wrapperHamburger .top {\n    transform-origin: 34px -1px !important; }\n  .component-navigation .wrapperHamburger .mid {\n    top: 10px !important; }\n  .component-navigation .wrapperHamburger .bot {\n    transform-origin: 29px 7px !important; }\n  .component-navigation .wrapperHamburger *,\n  .component-navigation .wrapperHamburger *:before,\n  .component-navigation .wrapperHamburger *:after {\n    box-sizing: border-box; }\n  .component-navigation .wrapperHamburger .hamburger {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n    margin: 40px auto;\n    position: relative;\n    display: block;\n    width: 68px;\n    height: 68px;\n    background: #973BE8;\n    -webkit-touch-callout: none;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none; }\n  .component-navigation .wrapperHamburger .burger-main {\n    position: absolute;\n    padding: 20px 16px;\n    height: 68px;\n    width: 68px; }\n  .component-navigation .wrapperHamburger .burger-inner {\n    position: relative;\n    height: 28px;\n    width: 36px; }\n  .component-navigation .wrapperHamburger .burger-main span {\n    position: absolute;\n    display: block;\n    height: 4px;\n    width: 36px;\n    border-radius: 2px;\n    background: #fff; }\n  .component-navigation .wrapperHamburger .top {\n    top: 0;\n    transform-origin: 34px 2px; }\n  .component-navigation .wrapperHamburger .bot {\n    bottom: 0;\n    transform-origin: 34px 2px; }\n  .component-navigation .wrapperHamburger .mid {\n    top: 12px; }\n  .component-navigation .wrapperHamburger .svg-main {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 68px;\n    height: 68px; }\n  .component-navigation .wrapperHamburger .circle {\n    width: 68px;\n    height: 68px;\n    width: 20px;\n    height: 20px; }\n  .component-navigation .wrapperHamburger .path {\n    stroke-dasharray: 240;\n    stroke-dashoffset: 240;\n    stroke-linejoin: round; }\n  .component-navigation .wrapperHamburger .hamburger.open .path {\n    animation: dash-in 0.6s linear normal;\n    animation-fill-mode: forwards; }\n  .component-navigation .wrapperHamburger .hamburger.closed .path {\n    animation: dash-out 0.6s linear normal;\n    animation-fill-mode: forwards; }\n  .component-navigation .wrapperHamburger .hamburger.open .top {\n    animation: close-top-out 0.6s linear normal;\n    animation-fill-mode: forwards; }\n  .component-navigation .wrapperHamburger .hamburger.open .bot {\n    animation: close-bot-out 0.6s linear normal;\n    animation-fill-mode: forwards; }\n  .component-navigation .wrapperHamburger .hamburger.closed .top {\n    animation: close-top-in 0.6s linear normal;\n    animation-fill-mode: forwards; }\n  .component-navigation .wrapperHamburger .hamburger.closed .bot {\n    animation: close-bot-in 0.6s linear normal;\n    animation-fill-mode: forwards; }\n  .component-navigation .wrapperHamburger .hamburger.open .mid {\n    animation: burger-fill-out 0.6s linear normal;\n    animation-fill-mode: forwards; }\n  .component-navigation .wrapperHamburger .hamburger.closed .mid {\n    animation: burger-fill-in 0.6s linear normal; }\n  .component-navigation .wrapperHamburger .path-burger {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 68px;\n    width: 68px;\n    -webkit-mask: url(#mask);\n    mask: url(#mask);\n    -webkit-mask-box-image: url(http://dev.awsm.in/codepen/mask.svg); }\n  .component-navigation .wrapperHamburger .animate-path {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 68px;\n    height: 68px; }\n  .component-navigation .wrapperHamburger .path-rotation {\n    height: 34px;\n    width: 34px;\n    margin: 34px 34px 0 0;\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n    -webkit-transform-origin: 100% 0;\n    transform-origin: 100% 0; }\n  .component-navigation .wrapperHamburger .path-rotation:before {\n    content: '';\n    display: block;\n    width: 30px;\n    height: 34px;\n    margin: 0 4px 0 0;\n    background: #fff; }\n  .component-navigation .wrapperHamburger .hamburger.open .animate-path {\n    animation: circle-in 0.6s linear normal;\n    animation-fill-mode: forwards; }\n  .component-navigation .wrapperHamburger .hamburger.closed .animate-path {\n    animation: circle-out 0.6s linear normal;\n    animation-fill-mode: forwards; }\n\n@-webkit-keyframes dash-in {\n  0% {\n    stroke-dashoffset: 240; }\n  40% {\n    stroke-dashoffset: 240; }\n  100% {\n    stroke-dashoffset: 0; } }\n\n@keyframes dash-in {\n  0% {\n    stroke-dashoffset: 240; }\n  40% {\n    stroke-dashoffset: 240; }\n  100% {\n    stroke-dashoffset: 0; } }\n\n@-webkit-keyframes dash-out {\n  0% {\n    stroke-dashoffset: 0; }\n  40% {\n    stroke-dashoffset: 240; }\n  100% {\n    stroke-dashoffset: 240; } }\n\n@keyframes dash-out {\n  0% {\n    stroke-dashoffset: 0; }\n  40% {\n    stroke-dashoffset: 240; }\n  100% {\n    stroke-dashoffset: 240; } }\n\n@keyframes close-top-out {\n  0% {\n    left: 0;\n    top: 0;\n    transform: rotate(0deg); }\n  20% {\n    left: 0;\n    top: 0;\n    transform: rotate(15deg); }\n  80% {\n    left: -5px;\n    top: 0;\n    transform: rotate(-60deg); }\n  100% {\n    left: -5px;\n    top: 1px;\n    transform: rotate(-45deg); } }\n\n@keyframes close-bot-out {\n  0% {\n    left: 0;\n    transform: rotate(0deg); }\n  20% {\n    left: 0;\n    transform: rotate(-15deg); }\n  80% {\n    left: -5px;\n    transform: rotate(60deg); }\n  100% {\n    left: -5px;\n    transform: rotate(45deg); } }\n\n@keyframes close-top-in {\n  0% {\n    left: -5px;\n    bot: 0;\n    transform: rotate(-45deg); }\n  20% {\n    left: -5px;\n    bot: 0;\n    transform: rotate(-60deg); }\n  80% {\n    left: 0;\n    bot: 0;\n    transform: rotate(15deg); }\n  100% {\n    left: 0;\n    bot: 1px;\n    transform: rotate(0deg); } }\n\n@keyframes close-bot-in {\n  0% {\n    left: -5px;\n    transform: rotate(45deg); }\n  20% {\n    left: -5px;\n    transform: rotate(60deg); }\n  80% {\n    left: 0;\n    transform: rotate(-15deg); }\n  100% {\n    left: 0;\n    transform: rotate(0deg); } }\n\n@keyframes burger-fill-in {\n  0% {\n    width: 0;\n    left: 36px; }\n  40% {\n    width: 0;\n    left: 40px; }\n  80% {\n    width: 36px;\n    left: -6px; }\n  100% {\n    width: 36px;\n    left: 0px; } }\n\n@keyframes burger-fill-out {\n  0% {\n    width: 36px;\n    left: 0px; }\n  20% {\n    width: 42px;\n    left: -6px; }\n  40% {\n    width: 0;\n    left: 40px; }\n  100% {\n    width: 0;\n    left: 36px; } }\n\n@keyframes circle-out {\n  0% {\n    transform: rotate(0deg); }\n  40% {\n    transform: rotate(180deg); }\n  100% {\n    transform: rotate(360deg); } }\n\n@keyframes circle-in {\n  0% {\n    transform: rotate(360deg); }\n  40% {\n    transform: rotate(180deg); }\n  100% {\n    transform: rotate(0deg); } }\n\n.container-header .row-navigation {\n  background-color: #222; }\n\n.container-header .row-navigation.sticky {\n  position: fixed;\n  z-index: 1;\n  top: 0;\n  width: 100%; }\n\n.component-navigation {\n  font-size: 1.6rem;\n  height: 4.125em;\n  display: flex;\n  justify-content: space-between;\n  align-items: center; }\n  .component-navigation .wrapperAtomAnimation {\n    width: 4.125em;\n    height: 4.125em;\n    overflow: visible;\n    position: relative;\n    left: -0.9375em; }\n  .component-navigation .wrapperLogo {\n    display: flex;\n    align-items: center; }\n  .component-navigation .wrapperHamburger {\n    position: relative;\n    z-index: 98;\n    margin-right: -0.75em;\n    display: flex;\n    align-items: center; }\n  .component-navigation .wrapperNavigation {\n    position: relative;\n    z-index: 99; }\n  .component-navigation .wrapper-nav {\n    position: fixed;\n    z-index: 1;\n    right: 0; }\n    .component-navigation .wrapper-nav li a {\n      text-transform: uppercase;\n      color: #f3f3f3;\n      font-size: 14px;\n      transition: all 0.3s ease-in-out; }\n    .component-navigation .wrapper-nav li a:hover {\n      color: #f7931d; }\n\n/*##################################################\n##############   01.01 mainBanner    ###############\n###################################################*/\n.container-mainBanner {\n  flex: 1; }\n  .container-mainBanner .row-mainBanner, .container-mainBanner .col-mainBanner {\n    height: 100%; }\n\n.component-mainBanner {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  justify-content: center;\n  align-items: center; }\n  .component-mainBanner .heading {\n    text-transform: uppercase; }\n    .component-mainBanner .heading p {\n      font-size: 1.3125em;\n      font-family: \"Montserrat\", sans-serif;\n      font-weight: 600;\n      color: #ffffff; }\n    .component-mainBanner .heading span {\n      color: #F7931D; }\n  .component-mainBanner .subHeading {\n    padding-top: 0.25em; }\n    .component-mainBanner .subHeading p {\n      font-size: 0.875em;\n      font-family: \"Montserrat\", sans-serif;\n      font-weight: 400;\n      color: #ffffff; }\n  .component-mainBanner .buttons {\n    padding-top: 0.75em; }\n    .component-mainBanner .buttons .button a {\n      font-size: 0.875em;\n      font-weight: 400;\n      display: flex;\n      align-items: stretch;\n      color: #fff;\n      height: 2.5em;\n      background-color: rgba(247, 147, 29, 0.81);\n      border-radius: 4px; }\n      .component-mainBanner .buttons .button a .lft, .component-mainBanner .buttons .button a .rft {\n        display: flex;\n        align-items: center; }\n      .component-mainBanner .buttons .button a .lft {\n        padding: 0 15px 0 25px;\n        flex-grow: 1;\n        display: flex;\n        justify-content: center; }\n      .component-mainBanner .buttons .button a .rft {\n        display: inline-block;\n        width: 2.5em;\n        text-align: center;\n        background-color: rgba(36, 36, 36, 0.12); }\n        .component-mainBanner .buttons .button a .rft .iconWrapper {\n          height: 100%;\n          display: flex;\n          justify-content: center;\n          align-items: center; }\n        .component-mainBanner .buttons .button a .rft i {\n          font-size: 11px; }\n    .component-mainBanner .buttons .button1 {\n      display: none; }\n\n/*##################################################\n#################   01.02 info    ###################\n###################################################*/\n.container-info {\n  background-image: url(" + ___CSS_LOADER_URL___7___ + ");\n  background-size: auto; }\n\n/*##########################\n\t\t  row-mainInfo\n############################*/\n.component-mainInfo {\n  padding-top: 1.875em;\n  padding-bottom: 1.125em;\n  letter-spacing: 1px; }\n  .component-mainInfo .glide__slides {\n    padding-bottom: 1.1875em; }\n  .component-mainInfo .glide__slide {\n    position: relative;\n    padding: 1.1875em 1em;\n    background-color: #654928;\n    border: 2px solid #8A5E29;\n    display: flex;\n    align-items: center;\n    height: 6.9375em;\n    border-radius: 4px; }\n    .component-mainInfo .glide__slide:before {\n      content: \"\";\n      position: absolute;\n      top: 0;\n      left: 20px;\n      bottom: 0;\n      right: 20px;\n      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.74);\n      z-index: -1; }\n    .component-mainInfo .glide__slide .text {\n      font-size: 0.875em;\n      color: rgba(244, 244, 244, 0.81);\n      font-family: \"Open Sans\", sans-serif;\n      font-weight: 300;\n      text-align: center;\n      transition: height 300ms ease;\n      line-height: 23px; }\n  .component-mainInfo .glide__bullets {\n    position: static;\n    transform: none;\n    display: flex;\n    justify-content: center; }\n  .component-mainInfo .glide__bullet {\n    height: 11px;\n    width: 11px; }\n  .component-mainInfo .glide__bullet--active {\n    background-color: #F7931D; }\n\n/*##########################\n\t\trow-appendixInfo\n############################*/\n.row-appendixInfo {\n  background-color: rgba(17, 17, 17, 0.48);\n  background-color: rgba(35, 35, 35, 0.48); }\n\n.component-appendixInfo {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.5em 0; }\n  .component-appendixInfo .text {\n    color: #959595;\n    font-size: 0.8125em; }\n  .component-appendixInfo a {\n    color: #ffffff;\n    font-size: 0.75em;\n    padding: 4px 24px;\n    border: 1px solid #F7931D;\n    border-radius: 4px; }\n\n/*#######################################################\n#######          02. Online Presense          ###########\n#########################################################*/\n.row-onlinePresence {\n  background-color: #f7f7f7; }\n\n.component-onlinePresence {\n  padding: 5em 0; }\n  .component-onlinePresence .heading p {\n    font-size: 1.5625em;\n    font-weight: 400;\n    line-height: 36px; }\n  .component-onlinePresence .heading span {\n    display: block; }\n    .component-onlinePresence .heading span:first-letter {\n      text-transform: uppercase; }\n  .component-onlinePresence .content p {\n    font-size: 1em;\n    line-height: 24px;\n    font-weight: 400;\n    color: #696969;\n    color: #292929;\n    padding-top: 1.125em; }\n  .component-onlinePresence .divider {\n    display: none; }\n  .component-onlinePresence .cards {\n    margin-top: 4.0625em; }\n    .component-onlinePresence .cards .firstRow {\n      display: flex;\n      align-items: center;\n      margin-bottom: 27px; }\n    .component-onlinePresence .cards .secoundRow {\n      margin-top: 32px; }\n    .component-onlinePresence .cards .headingIcon {\n      font-size: 22px;\n      width: 50px;\n      padding: 0 12px;\n      background-color: #f7931d;\n      line-height: 50px;\n      text-align: center;\n      border-radius: 4px;\n      box-shadow: 0 10px 20px 0 rgba(247, 147, 29, 0.25);\n      color: #f1f1f1; }\n    .component-onlinePresence .cards .cardHeading {\n      font-size: 19px;\n      margin-left: 0.9375em;\n      color: #636363; }\n    .component-onlinePresence .cards .cardContent {\n      font-size: 15px;\n      font-weight: 400;\n      line-height: 1.8;\n      color: #808080;\n      color: #464646; }\n    .component-onlinePresence .cards .thirdRow {\n      padding-top: 32px;\n      padding-top: 10px;\n      text-align: right; }\n    .component-onlinePresence .cards .button {\n      color: #F7931D;\n      font-size: 14px;\n      font-weight: 400;\n      line-height: 11px;\n      letter-spacing: 1px; }\n  .component-onlinePresence .card {\n    background-color: #fff;\n    margin-top: 4.0625em;\n    padding: 42px 37px;\n    padding: 42px 37px 35px 37px;\n    box-shadow: 0 1px 1px 0 rgba(50, 50, 50, 0.2);\n    transition: all 0.4s ease; }\n    .component-onlinePresence .card:first-child {\n      margin-top: 0; }\n\n/*##################################################\n#########     03. Our Services\t       #############\n###################################################*/\n@media only screen and (max-width: 36.9375em) {\n  .row-ourServices {\n    padding-right: 15px;\n    padding-left: 15px; } }\n\n.component-ourServices {\n  padding-top: 6.25em; }\n  .component-ourServices .listContainer {\n    display: flex;\n    justify-content: space-evenly;\n    flex-wrap: wrap;\n    margin-bottom: 100px; }\n  .component-ourServices .listWrapper1 {\n    margin-bottom: 60px;\n    border: 1px solid #eeeeee;\n    background: #fefefe;\n    padding: 10px;\n    transition: box-shadow 0.3s, transform 0.3s; }\n  .component-ourServices .listWrapper1:hover {\n    box-shadow: 0 22px 43px rgba(0, 0, 0, 0.15);\n    transform: translateY(-10px); }\n  .component-ourServices .list {\n    display: flex;\n    flex-direction: column;\n    max-width: 260px;\n    padding: 30px 15px 90px 15px;\n    padding: 57px 25px 30px 25px;\n    border-radius: 2px;\n    border: 1px solid #f7931d; }\n  .component-ourServices .listIconArea {\n    margin-bottom: 40px;\n    display: inline-block;\n    text-align: center; }\n    .component-ourServices .listIconArea i {\n      font-size: 42px;\n      line-height: 110px;\n      color: #777777; }\n  .component-ourServices .iconOuter {\n    height: 110px;\n    width: 110px;\n    display: block;\n    border-radius: 100%;\n    background-color: #eaeaea;\n    box-shadow: 0 0 0 10px #f4f4f4;\n    margin: auto;\n    transition: background-color 0.3s, box-shadow 0.5s; }\n  .component-ourServices .listHeading p {\n    font-size: 15px;\n    margin-bottom: 15px;\n    margin-top: 15px;\n    font-family: \"Montserrat\", sans-serif;\n    color: #1a1a1a;\n    font-weight: 600;\n    letter-spacing: 1px;\n    text-transform: uppercase;\n    text-align: center; }\n  .component-ourServices .listText {\n    font-size: 14px;\n    color: #999999;\n    text-align: center; }\n  .component-ourServices .listKnowMore {\n    text-align: center; }\n    .component-ourServices .listKnowMore a:before {\n      content: \"\\2192\";\n      display: inline-block;\n      color: #333333;\n      margin-left: 10px;\n      vertical-align: top;\n      font-size: 22px;\n      transition: margin-left 0.2s linear;\n      float: right;\n      line-height: 1;\n      color: #fff;\n      display: block;\n      margin-top: -2px; }\n    .component-ourServices .listKnowMore a {\n      margin-top: 35px;\n      font-size: 13px;\n      color: #999999;\n      color: #ffffff;\n      background-color: #f7931d;\n      text-align: center;\n      padding: 8px 21px;\n      border: 1px solid #f7931d;\n      letter-spacing: 1px;\n      border-radius: 4px; }\n\n/*##################################################\n#########     04. Quality and Cost     #############\n###################################################*/\n.row-qualityAndCost {\n  padding: 0; }\n\n.col-qualityAndCost .col-child {\n  padding: 0 5%; }\n\n.col-qualityAndCost .col-child.left {\n  background-color: #F9F9F9; }\n\n.col-qualityAndCost .col-child.right {\n  background-color: #F0F0F0; }\n\n.row-qualityAndCost a.button {\n  font-size: 14px;\n  line-height: 14px;\n  font-weight: 600;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  padding-left: 20px;\n  color: #ffffff;\n  background-color: #292929;\n  border: 1px solid #292929;\n  border-radius: 4px;\n  letter-spacing: 1px; }\n  .row-qualityAndCost a.button .faIcon1 {\n    display: inline-block;\n    margin-left: 16px;\n    padding-left: 9px;\n    padding-right: 9px; }\n\n.component-qualityAndCost {\n  padding: 60px 0; }\n  .component-qualityAndCost .heading p {\n    font-size: 1.5em;\n    font-weight: 600;\n    color: #292929;\n    line-height: 36px;\n    padding-bottom: 40px; }\n  .component-qualityAndCost .heading .optional {\n    display: none; }\n  .component-qualityAndCost .content p {\n    color: #636363; }\n  .component-qualityAndCost .buttons {\n    padding-top: 43px; }\n\n.component.qualityAndCostSkills {\n  padding: 60px 0; }\n  .component.qualityAndCostSkills .title {\n    font-size: 18px;\n    font-weight: 600;\n    color: #292929; }\n  .component.qualityAndCostSkills .skill {\n    margin-top: 16px; }\n    .component.qualityAndCostSkills .skill:first-child {\n      margin-top: 0; }\n  .component.qualityAndCostSkills .skillHeader {\n    display: flex;\n    justify-content: flex-end;\n    color: #616161;\n    font-weight: 600;\n    font-size: 12px;\n    letter-spacing: 1px; }\n  .component.qualityAndCostSkills .progressBar {\n    height: 14px;\n    background-color: rgba(70, 70, 70, 0.1);\n    width: 100%; }\n    .component.qualityAndCostSkills .progressBar .bar {\n      width: 5%;\n      height: 100%;\n      background-color: #f7931d; }\n  .component.qualityAndCostSkills .progressBar::-webkit-progress-bar {\n    background-color: rgba(70, 70, 70, 0.1); }\n  .component.qualityAndCostSkills .progressBar::-webkit-progress-value {\n    background-color: #f7931d; }\n  .component.qualityAndCostSkills .progressBar::-webkit-progress-value {\n    background-color: #46C7DF; }\n\n/*##################################################\n##############    05. Why Us?    ###################\n###################################################*/\n.component-whyUs_largeScreen {\n  display: none; }\n\n.component-whyUs_medScreen {\n  display: flex;\n  flex-direction: column;\n  padding: 5em 0 10.625em 0; }\n  .component-whyUs_medScreen .componentHeading {\n    font-size: 2.0625em;\n    font-weight: 600;\n    color: #636363;\n    text-align: center;\n    padding-bottom: 30px; }\n  .component-whyUs_medScreen .componentImage img {\n    width: 100%;\n    height: auto; }\n  .component-whyUs_medScreen .componentContent {\n    padding: 0.625em 0 3.125em 0; }\n    .component-whyUs_medScreen .componentContent p {\n      font-size: 15px;\n      font-size: 14px;\n      font-family: \"Montserrat\", sans-serif;\n      font-weight: 300;\n      font-weight: 400;\n      color: #8C8C8C;\n      color: #626262; }\n  .component-whyUs_medScreen .componentAppendix .item {\n    max-height: 68px;\n    overflow: hidden;\n    transition: all .5s ease-in;\n    margin-bottom: 2px; }\n  .component-whyUs_medScreen .componentAppendix .item.expand {\n    max-height: 15.625em; }\n  .component-whyUs_medScreen .componentAppendix .header {\n    display: flex;\n    height: 68px;\n    background-color: #F4F4F4;\n    padding-left: 34px;\n    align-items: center;\n    transition: all 0.5s ease; }\n    .component-whyUs_medScreen .componentAppendix .header:last-child {\n      margin-bottom: 0; }\n    .component-whyUs_medScreen .componentAppendix .header .icon i {\n      font-size: 14px;\n      color: #8D8D8D; }\n    .component-whyUs_medScreen .componentAppendix .header .heading {\n      font-size: 14px;\n      color: #8C8C8C;\n      font-family: \"Montserrat\", sans-serif;\n      font-weight: 400;\n      padding-left: 19px; }\n  .component-whyUs_medScreen .componentAppendix .header:hover, .component-whyUs_medScreen .componentAppendix .header.expand {\n    background-color: #47c9e5;\n    transition: all 0.5s ease; }\n    .component-whyUs_medScreen .componentAppendix .header:hover .icon i, .component-whyUs_medScreen .componentAppendix .header:hover .heading, .component-whyUs_medScreen .componentAppendix .header.expand .icon i, .component-whyUs_medScreen .componentAppendix .header.expand .heading {\n      color: #ffffff; }\n  .component-whyUs_medScreen .componentAppendix .content {\n    padding: 20px 10px 20px 20px; }\n    .component-whyUs_medScreen .componentAppendix .content p {\n      color: #8d8d8d;\n      font-size: 15px; }\n\n/*##################################################\n#########     05. Our Features\t       #############\n###################################################*/\n@media only screen and (max-width: 36.9375em) {\n  .row.ourFeatures {\n    padding-right: 15px;\n    padding-left: 15px; } }\n\n.component.ourFeatures {\n  padding-top: 100px;\n  padding-bottom: 110px; }\n  .component.ourFeatures .listContainer {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center; }\n    .component.ourFeatures .listContainer > * {\n      flex: 0 1 auto; }\n  .component.ourFeatures .list {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 216px;\n    box-shadow: 0 1px 1px 0 rgba(50, 50, 50, 0.2);\n    margin-bottom: 40px; }\n    .component.ourFeatures .list .listIconWrapper {\n      width: 100%;\n      height: 210px;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      background: radial-gradient(ellipse at center, #fdfdfd 0%, #f3f3f3 100%); }\n    .component.ourFeatures .list .listHeading {\n      font-size: 15px;\n      font-family: \"Montserrat\", sans-serif;\n      font-weight: 600;\n      letter-spacing: 2px;\n      color: #1a1a1a;\n      margin-top: 48px;\n      margin-bottom: 40px; }\n    .component.ourFeatures .list .listButton {\n      margin-bottom: 48px; }\n      .component.ourFeatures .list .listButton a {\n        font-size: 13px;\n        padding: 11px 24px;\n        font-family: \"Montserrat\", sans-serif;\n        font-weight: 400;\n        background-color: #0fd4bb;\n        letter-spacing: 1px;\n        color: #ffffff;\n        border-radius: 3px;\n        line-height: 13px; }\n    .component.ourFeatures .list .rough {\n      background-image: url(" + ___CSS_LOADER_URL___8___ + ");\n      background-size: auto 100%; }\n\n/*##################################################\n#########       06. Our Blog \t       #############\n###################################################*/\n.row.ourBlog {\n  padding-top: 110px;\n  padding-bottom: 180px;\n  background-color: #f7f7f7; }\n\n.component.ourBlog {\n  display: flex;\n  flex-direction: column;\n  align-items: center; }\n  .component.ourBlog .listContainer {\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    align-items: center; }\n  .component.ourBlog .checkAll {\n    margin-top: 5px;\n    font-family: \"Montserrat\", sans-serif;\n    font-weight: 600;\n    font-size: 13px;\n    letter-spacing: 1px;\n    color: #ffffff;\n    padding: 15px 50px;\n    background-color: #0fd4bb;\n    transition: .3s all ease-in-out;\n    text-transform: uppercase;\n    transition: all 0.5s; }\n    .component.ourBlog .checkAll:hover {\n      background-color: #0fd4bb; }\n  .component.ourBlog .list {\n    margin-bottom: 60px;\n    flex: 0 1 370px;\n    max-width: 370px;\n    display: flex;\n    flex-direction: column;\n    box-shadow: 0 1px 1px 0 rgba(50, 50, 50, 0.2);\n    transition: all 0.3s;\n    background-color: #fff; }\n    .component.ourBlog .list:hover .button {\n      padding: 4px 17px;\n      color: #0fd4bb;\n      border-color: #0fd4bb; }\n    .component.ourBlog .list .postThumbnail {\n      height: 275px;\n      display: flex;\n      align-items: flex-start;\n      justify-content: flex-end; }\n      .component.ourBlog .list .postThumbnail .right.date {\n        margin: 5px;\n        padding: 10px;\n        text-transform: uppercase;\n        background-color: #0fd4bb;\n        text-align: center;\n        color: #fff; }\n        .component.ourBlog .list .postThumbnail .right.date .day {\n          padding: 0 5px 10px 5px;\n          font-size: 32px;\n          letter-spacing: 2px;\n          text-align: center;\n          border-bottom: 1px solid rgba(255, 255, 255, 0.6);\n          margin-bottom: 10px; }\n        .component.ourBlog .list .postThumbnail .right.date .monthyear {\n          font-size: 14px;\n          line-height: 1;\n          font-weight: 600;\n          letter-spacing: 1px; }\n          .component.ourBlog .list .postThumbnail .right.date .monthyear p {\n            margin: 5px;\n            letter-spacing: 1px; }\n    .component.ourBlog .list .postMain {\n      display: flex;\n      flex-direction: column;\n      padding: 0 30px 15px 30px; }\n    .component.ourBlog .list .postFooter {\n      border-top: 1px solid #e9e9e9;\n      padding: 15px 30px;\n      display: flex;\n      justify-content: space-between;\n      align-items: center; }\n      .component.ourBlog .list .postFooter .comment {\n        font-size: 14px;\n        font-weight: 400;\n        color: #8d8d8d; }\n    .component.ourBlog .list .postTitle {\n      font-family: \"Montserrat\", sans-serif;\n      font-weight: 600;\n      font-size: 20px;\n      color: #1a1a1a;\n      line-height: 1.4;\n      margin: 30px 0 15px 0; }\n    .component.ourBlog .list .postContent {\n      font-size: 15px;\n      font-weight: 400;\n      color: #999999;\n      line-height: 1.8; }\n    .component.ourBlog .list .button {\n      padding: 4px 0;\n      align-self: flex-start;\n      font-family: \"Montserrat\", sans-serif;\n      font-size: 13px;\n      font-weight: 400;\n      text-transform: uppercase;\n      transition: all 0.3s;\n      letter-spacing: 1px;\n      margin-top: -4px;\n      margin-bottom: -4px;\n      border: 1px solid #fff;\n      color: #505050; }\n      .component.ourBlog .list .button:hover {\n        color: #ffffff;\n        background-color: #000000;\n        border-color: #000000; }\n        .component.ourBlog .list .button:hover i {\n          margin-left: 25px; }\n      .component.ourBlog .list .button i {\n        margin-left: 10px;\n        transition: margin-left 0.2s linear; }\n\n/*##################################################\n##############    Footer         ###################\n###################################################*/\n.container.footer {\n  background-color: #222222; }\n\n.component.footer {\n  padding-top: 50px; }\n  .component.footer .description .titleLogo {\n    height: 45px;\n    margin-bottom: 15px; }\n    .component.footer .description .titleLogo img {\n      height: 100%; }\n  .component.footer .description .content p {\n    font-size: 14px;\n    color: #bababa; }\n  .component.footer .description .footerSocial {\n    margin-top: 20px; }\n    .component.footer .description .footerSocial a {\n      color: #ce7107;\n      display: inline-block;\n      width: 35px;\n      height: 35px;\n      line-height: 35px;\n      font-size: 12px;\n      text-align: center; }\n  .component.footer .navigation {\n    display: flex;\n    justify-content: center; }\n    .component.footer .navigation .quickLinks {\n      margin-right: 57px; }\n    .component.footer .navigation .title {\n      font-size: 18px;\n      font-weight: 600;\n      color: #ffffff;\n      margin-bottom: 19px; }\n    .component.footer .navigation .links {\n      font-size: 14px;\n      color: #CE7107; }\n      .component.footer .navigation .links .link {\n        margin-bottom: 9px; }\n      .component.footer .navigation .links .link:last-child {\n        margin-bottom: 0; }\n  .component.footer .newsletter {\n    margin-top: 40px;\n    display: flex;\n    flex-direction: column;\n    align-items: center; }\n    .component.footer .newsletter .title {\n      font-size: 18px;\n      font-weight: 600;\n      color: #ffffff;\n      margin-bottom: 15px; }\n    .component.footer .newsletter .content p {\n      font-size: 14px;\n      text-align: center;\n      color: #bababa; }\n    .component.footer .newsletter .inputGroup {\n      position: relative;\n      display: flex;\n      align-items: stretch;\n      width: 100%;\n      margin-top: 20px; }\n      .component.footer .newsletter .inputGroup .formControl {\n        color: #bababa;\n        height: 48px;\n        padding: 10px 20px;\n        background-color: transparent;\n        border: 2px solid #bababa;\n        border-radius: 25px;\n        flex: 1 1 auto;\n        letter-spacing: 1px;\n        font-size: 14px;\n        transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out; }\n        .component.footer .newsletter .inputGroup .formControl::placeholder {\n          color: #bababa; }\n        .component.footer .newsletter .inputGroup .formControl :-ms-input-placeholder {\n          /* Internet Explorer 10-11 */\n          color: red; }\n        .component.footer .newsletter .inputGroup .formControl ::-webkit-input-placeholder {\n          /* Edge */\n          color: red; }\n        .component.footer .newsletter .inputGroup .formControl ::-ms-input-placeholder {\n          /* Microsoft Edge */\n          color: red; }\n      .component.footer .newsletter .inputGroup .formControl:focus {\n        border-color: #f7931d; }\n      .component.footer .newsletter .inputGroup .inputBtn {\n        position: absolute;\n        top: 0;\n        right: 0; }\n      .component.footer .newsletter .inputGroup .button {\n        padding: 16px 25px;\n        border-radius: 25px;\n        line-height: 14px;\n        color: #fff;\n        background-color: #f7931d;\n        border: 1px solid #f7931d;\n        font-size: 14px; }\n        .component.footer .newsletter .inputGroup .button i {\n          padding-right: 5px; }\n\n.row.subFooter {\n  margin-top: 50px;\n  background-color: #1a1a1a; }\n\n.component.subFooter {\n  font-size: 14px;\n  display: flex;\n  align-items: center;\n  color: #898989;\n  padding: 20px 0;\n  letter-spacing: 1px; }\n  .component.subFooter .footerBrand a {\n    color: #f7931d; }\n  .component.subFooter .footerPayment {\n    display: flex; }\n    .component.subFooter .footerPayment .icons {\n      margin-right: 10px; }\n      .component.subFooter .footerPayment .icons:last-child {\n        margin-right: 0; }\n    .component.subFooter .footerPayment i {\n      font-size: 40px;\n      color: #fff; }\n\n@media only screen and (max-width: 47.9375em) {\n  .component.footer .description, .component.footer .content p, .component.footer .footerSocial {\n    text-align: center; }\n  .component.footer .navigation {\n    margin-top: 40px; }\n  .component.subFooter {\n    flex-direction: column; }\n    .component.subFooter .footerPayment {\n      flex: 0 0 100%;\n      flex-basis: 100%; }\n    .component.subFooter .footerBrand {\n      margin-bottom: 15px; } }\n\n/*Medium devices (tablets, 768px and up)\n  min width 48em = 768px */\n/*\n\tContent\n\t00. General for small device\n\t01. Landing Page\n\t\t01.00 Header\n\t\t01.01 mainBanner\n\t\t01.02 info\n\t\t\t01.02.00 appendixAd\n\t02. Online Presence\n\t03. Why us?\n\t04. quality and cost\n\t05. Our Services\n\txx. Miscellaneous\n*/\n@media only screen and (min-width: 48em) {\n  /*###############################################\n\t##############     01.00 Header    ##############\n\t################################################*/\n  /******************************************\n\t***             First row               ***\n \t*******************************************/\n  .component-welcome .rightSection .wrapperContactNumber {\n    display: none; }\n  /*###############################################\n\t############     01.01 mainBanner    ############\n\t################################################*/\n  .component-mainBanner .heading p {\n    font-size: 2.0625em; }\n  .component-mainBanner .subHeading p {\n    font-weight: 400;\n    font-size: 1.125em;\n    padding-top: 0.5625em;\n    text-transform: uppercase; }\n  .component-mainBanner .buttons {\n    display: flex;\n    padding-top: 1.1875em; }\n    .component-mainBanner .buttons .button a {\n      background-color: #f7931d; }\n    .component-mainBanner .buttons .button1 {\n      display: block; }\n      .component-mainBanner .buttons .button1 a {\n        background-color: #292929; }\n    .component-mainBanner .buttons .button2 {\n      margin-left: 2.1875em; }\n  /*######################################################\n\t#######              01.02 info               ##########\n\t########################################################*/\n  /*##########################\n\t\t  row-mainInfo\n\t############################*/\n  .component-mainInfo {\n    padding-bottom: 0; }\n    .component-mainInfo .glide__slides {\n      padding: 1.1875em 1em 1.1875em 1em;\n      padding: 1.1875em 0; }\n    .component-mainInfo .glide__bullets {\n      padding-bottom: 1.1875em; }\n  /*##########################\n\t\t\trow-appendixInfo\n\t############################*/\n  .row-appendixInfo {\n    display: none; }\n  /*#######################################################\n\t#######          02. Online Presense          ###########\n\t#########################################################*/\n  .component-onlinePresence .heading span {\n    display: inline; }\n    .component-onlinePresence .heading span:first-letter {\n      text-transform: lowercase; }\n  .component-onlinePresence .heading, .component-onlinePresence .content {\n    display: flex;\n    justify-content: center; }\n  .component-onlinePresence .heading {\n    margin-bottom: 15px; }\n  .component-onlinePresence .heading p {\n    font-size: 1.875em;\n    font-weight: 600;\n    line-height: 46px; }\n  .component-onlinePresence .content {\n    margin-bottom: 20px; }\n    .component-onlinePresence .content p {\n      padding-top: 0; }\n  .component-onlinePresence .content p {\n    display: flex;\n    flex: 0 0 66.666667%;\n    max-width: 66.666667%;\n    text-align: center;\n    justify-content: center; }\n  .component-onlinePresence .divider {\n    display: flex;\n    align-items: center;\n    justify-content: center; }\n    .component-onlinePresence .divider .left, .component-onlinePresence .divider .right {\n      display: flex;\n      align-items: center;\n      height: 10px; }\n    .component-onlinePresence .divider .left {\n      border-right: 1px solid #d5d5d5; }\n    .component-onlinePresence .divider .right {\n      border-left: 1px solid #d5d5d5; }\n    .component-onlinePresence .divider .divLev1 {\n      height: 1px;\n      background-color: #d5d5d5;\n      width: 150px; }\n    .component-onlinePresence .divider .icon {\n      padding: 0 9px; }\n    .component-onlinePresence .divider .icon i {\n      color: #fff;\n      left: 50%;\n      width: 25px;\n      height: 25px;\n      background: #292929;\n      border-radius: 50%;\n      font-size: 12px;\n      line-height: 25px;\n      text-align: center; }\n  .component-onlinePresence .cards {\n    display: flex;\n    flex-direction: column;\n    align-items: center; }\n    .component-onlinePresence .cards .cardHeading {\n      font-size: 20px; }\n    .component-onlinePresence .cards .cardContent {\n      font-size: 14px;\n      color: #808080; }\n    .component-onlinePresence .cards .thirdRow {\n      position: relative;\n      padding-top: 25px;\n      text-align: left; }\n    .component-onlinePresence .cards .button {\n      position: absolute;\n      padding: 7px 15px;\n      border: 1px solid #dd7a08;\n      transition: all 0.3s ease-in-out; }\n  .component-onlinePresence .card {\n    width: 80%;\n    padding: 42px 37px 59px 37px; }\n  .component-onlinePresence .card:hover {\n    transform: translateY(-10px);\n    box-shadow: 0 22px 43px rgba(0, 0, 0, 0.15); }\n  /*##################################################\n\t##############    03. Why Us?    ###################\n\t###################################################*/\n  .component-whyUs_medScreen .componentImage {\n    text-align: center; }\n    .component-whyUs_medScreen .componentImage img {\n      width: 75%; }\n  /*##################################################\n\t#########     05. Our Services\t       #############\n\t###################################################*/\n  .component-ourServices .header {\n    padding-bottom: 5.625em; }\n  .component-ourServices .list {\n    width: 260px; }\n  /*##################################################\n\t#########     03. Our Features\t       #############\n\t###################################################*/\n  .component.ourFeatures .list {\n    margin-right: 30px; }\n  /*##################################################\n\t#########       06. Our Blog \t       #############\n\t###################################################*/\n  .component.ourBlog .list:hover {\n    box-shadow: 0 22px 43px rgba(0, 0, 0, 0.15);\n    transform: translateY(-10px); }\n  /*##################################################\n\t##############    Footer         ###################\n\t###################################################*/\n  .component.footer {\n    display: flex;\n    flex-wrap: wrap;\n    letter-spacing: 1px; }\n    .component.footer .description, .component.footer .navigation {\n      flex: 1 1 50%; }\n    .component.footer .newsletter {\n      flex: 1 1 100%;\n      margin-left: 0;\n      margin-right: 0; }\n  .component.subFooter {\n    justify-content: space-between;\n    align-items: center; } }\n\n/*##########################################################\n############################################################\n#######\t\t\t\t\t\t\t\t\t\t\t############\n#######\t\t\t\t\t\t\t\t\t\t\t############\n#######\t\t\t\t\t\t\t\t\t\t\t############\n#######\t\t\t\tscreen >= tablet\t\t\t############\n#######\t\t\t\t(Portrait Mode)\t\t\t\t############\n#######\t\t\t\t\t\t\t\t\t\t\t############\n#######\t\t\t\t\t\t\t\t\t\t\t############\n############################################################\n##########################################################*/\n@media only screen and (min-width: 48em) and (orientation: portrait) {\n  /*###############################################\n\t##############     01 Landing page    ###########\n\t################################################*/\n  .landingPage {\n    height: auto; }\n  /*###############################################\n\t############     01.01 mainBanner    ############\n\t################################################*/\n  .container-mainBanner {\n    flex: 0; }\n    .container-mainBanner .row-mainBanner {\n      height: 22.5em; } }\n\n/*##########################################################\n############################################################\n#######\t\t\t\t\t\t\t\t\t\t\t############\n#######\t\t\t\t\t\t\t\t\t\t\t############\n#######\t\t\t\t\t\t\t\t\t\t\t############\n#######\t\t\t\tscreen < desktop\t\t\t############\n#######\t\t\t\t\t\t\t\t\t\t\t############\n#######\t\t\t\t\t\t\t\t\t\t\t############\n#######\t\t\t\t\t\t\t\t\t\t\t############\n############################################################\n##########################################################*/\n@media only screen and (max-width: 61.9375em) {\n  /*###############################################\n\t############     01.01 mainBanner    ############\n\t###############################################*/\n  .container-mainBanner .waypoint-hide {\n    opacity: 1; }\n  /*###############################################\n\t############       01.02 info        ############\n\t################################################*/\n  /***************************\n\t\t  row-mainInfo\n\t****************************/\n  .row-mainInfo {\n    padding-left: 0;\n    padding-right: 0; }\n  /*##################################################\n\t#########     04. Quality and Cost     #############\n\t###################################################*/\n  .component-qualityAndCost .heading .exceptSmallScreen {\n    display: none; } }\n\n/*##########################################################\n############################################################\n#######\t\t\t\t\t\t\t\t\t\t\t############\n#######\t\t\t\t\t\t\t\t\t\t\t############\n#######\t\t\t\t\t\t\t\t\t\t\t############\n#######\t\t   tablet < SCREEN <desktop\t\t\t############\n#######\t\t\t\t\t\t\t\t\t\t\t############\n#######\t\t\t\t\t\t\t\t\t\t\t############\n#######\t\t\t\t\t\t\t\t\t\t\t############\n############################################################\n##########################################################*/\n@media only screen and (min-width: 48em) and (max-width: 61.9375em) {\n  /*##################################################\n\t#########     04. Quality and Cost     #############\n\t###################################################*/\n  .component-qualityAndCost > div, .component-qualityAndCost .buttons {\n    text-align: center; }\n  .component-qualityAndCost .heading p {\n    padding-bottom: 25px; }\n  .component-qualityAndCost .buttons {\n    padding-top: 25px; }\n  /*##################################################\n\t#########           Footer             #############\n\t###################################################*/\n  .component.footer .description .content p {\n    width: 264px; }\n  .component.footer .newsletter {\n    margin-top: 55px; }\n    .component.footer .newsletter .inputGroup {\n      width: 338px; } }\n\n/* Large devices (desktops, 992px and up)\n   min-width 992px = 62em \n   max-width 1199px =74.9375em */\n/*\n\tContent\n\t00. General for small device\n\t01. Landing Page\n\t\t01.00 Header\n\t\t01.01 mainBanner\n\t\t01.02 info\n\t\t\t01.02.00 appendixAd\n\t02. Online Presence\n\t03. Why us?\n\t04. Quality and Cost\n\txx. Miscellaneous\n    \n*/\n@media only screen and (min-width: 62em) {\n  /*###############################################\n\t##############     01.01 2nd row    ##############\n\t################################################*/\n  .container-header .row-navigation.sticky {\n    box-shadow: 0px -2px 8px rgba(0, 0, 0, 0.3); }\n    .container-header .row-navigation.sticky .wrapper-nav li.firstLevelList > a {\n      color: #000; }\n      .container-header .row-navigation.sticky .wrapper-nav li.firstLevelList > a:hover {\n        color: #f7931d; }\n  .component-navigation .wrapperAtomAnimation, .component-navigation .wrapperHamburger {\n    display: none; }\n  .component-navigation .wrapper-nav {\n    position: relative;\n    height: 100%; }\n    .component-navigation .wrapper-nav #cbp-spmenu-s2 {\n      height: 100%; }\n    .component-navigation .wrapper-nav .nav-label {\n      display: none; }\n    .component-navigation .wrapper-nav .navContainer {\n      display: flex;\n      height: 100%; }\n    .component-navigation .wrapper-nav li a {\n      padding-left: 1.25em;\n      padding-right: 1.25em;\n      height: 100%;\n      vertical-align: top;\n      display: flex;\n      align-items: center; }\n    .component-navigation .wrapper-nav li:last-child a {\n      padding-right: 0; }\n  /*###############################################\n\t############     02 mainBanner    ############\n\t################################################*/\n  .component-mainBanner .heading p {\n    font-size: 3.0625em; }\n  .component-mainBanner .subHeading p {\n    font-size: 1.5em; }\n  /*###############################################\n\t############     03 info    #####################\n\t################################################*/\n  .component-mainInfo {\n    padding-top: 1.125em; }\n    .component-mainInfo .glide__slides {\n      justify-content: space-between;\n      padding: 1.1875em 0 2em 0; }\n    .component-mainInfo .glide__slide {\n      width: 23%;\n      flex-shrink: 0; }\n    .component-mainInfo .glide__bullets {\n      display: none; }\n  /*##################################################\n\t#########     04. Quality and Cost     #############\n\t###################################################*/\n  .col-qualityAndCost {\n    display: flex;\n    padding: 0; }\n    .col-qualityAndCost .col-child {\n      flex-basis: 50%;\n      display: flex;\n      padding: 0; }\n      .col-qualityAndCost .col-child.left {\n        padding-left: 5%;\n        justify-content: flex-end; }\n        .col-qualityAndCost .col-child.left .component {\n          padding-right: 60px; }\n      .col-qualityAndCost .col-child.right {\n        padding-right: 5%;\n        justify-content: flex-start; }\n        .col-qualityAndCost .col-child.right .component {\n          padding-left: 60px; }\n      .col-qualityAndCost .col-child .component {\n        max-width: 60rem;\n        flex-basis: 100%; } }\n\n@media only screen and (min-width: 62em) and (min-width: 72.5) {\n  .component-qualityAndCost .heading .optional {\n    display: block; } }\n\n@media only screen and (min-width: 62em) {\n  /*##################################################\n\t##############    03. Why Us?    ###################\n\t###################################################*/\n  .component-whyUs_medScreen {\n    display: none; }\n  .component-whyUs_largeScreen {\n    display: flex;\n    justify-content: center;\n    padding: 3.125em 0 9.375em 0; }\n    .component-whyUs_largeScreen .rightSec {\n      display: flex;\n      flex-direction: column;\n      justify-content: center; }\n    .component-whyUs_largeScreen .componentHeading {\n      font-size: 2.0625em;\n      font-weight: 600;\n      color: #636363;\n      padding-bottom: 30px; }\n    .component-whyUs_largeScreen .componentImage img {\n      width: 100%;\n      height: auto; }\n    .component-whyUs_largeScreen .componentContent {\n      padding: 0.625em 0 3.125em 0; }\n      .component-whyUs_largeScreen .componentContent p {\n        font-size: 15px;\n        font-weight: 300;\n        color: #8C8C8C; }\n    .component-whyUs_largeScreen .componentAppendix .item {\n      max-height: 68px;\n      overflow: hidden;\n      transition: all .7s ease-in;\n      margin-bottom: 2px; }\n    .component-whyUs_largeScreen .componentAppendix .item.expand {\n      max-height: 15.625em; }\n    .component-whyUs_largeScreen .componentAppendix .header {\n      display: flex;\n      height: 68px;\n      background-color: #F4F4F4;\n      padding-left: 34px;\n      align-items: center;\n      transition: all 0.5s ease;\n      transition: background-color 0s; }\n      .component-whyUs_largeScreen .componentAppendix .header:last-child {\n        margin-bottom: 0; }\n      .component-whyUs_largeScreen .componentAppendix .header .icon i {\n        font-size: 14px;\n        color: #8D8D8D; }\n      .component-whyUs_largeScreen .componentAppendix .header .heading {\n        font-size: 14px;\n        color: #8C8C8C;\n        font-family: \"Montserrat\", sans-serif;\n        font-weight: 400;\n        padding-left: 19px; }\n    .component-whyUs_largeScreen .componentAppendix .header:hover, .component-whyUs_largeScreen .componentAppendix .header.expand {\n      background-color: #47c9e5;\n      transition: all 0.5s ease; }\n      .component-whyUs_largeScreen .componentAppendix .header:hover .icon i, .component-whyUs_largeScreen .componentAppendix .header:hover .heading, .component-whyUs_largeScreen .componentAppendix .header.expand .icon i, .component-whyUs_largeScreen .componentAppendix .header.expand .heading {\n        color: #ffffff; }\n    .component-whyUs_largeScreen .componentAppendix .content {\n      padding: 20px 0 20px 68px; }\n      .component-whyUs_largeScreen .componentAppendix .content p {\n        color: #8d8d8d;\n        font-size: 15px; }\n  /*##################################################\n\t#########     03. Our Features\t       #############\n\t###################################################*/\n  .component.ourFeatures .list {\n    transition: box-shadow 0.3s, transform 0.3s; }\n    .component.ourFeatures .list:last-child {\n      margin-right: 0; }\n  .component.ourFeatures .list:hover {\n    box-shadow: 0 22px 43px rgba(0, 0, 0, 0.15);\n    transform: translateY(-10px); }\n  /*##################################################\n\t#########       06. Our Blog \t       #############\n\t###################################################*/\n  .component.ourBlog .listContainer {\n    flex-direction: row; }\n  .component.ourBlog .list {\n    margin-right: 30px; }\n  .component.ourBlog .list:last-child {\n    margin-right: 0; } }\n\n/* Extra large devices (large desktops, 1200px and up) \n   min-width 1200px = 75em*/\n@media only screen and (min-width: 75em) {\n  .col {\n    max-width: 120rem; }\n  /*#######################################################\n\t#######          02. Online Presense          ###########\n\t#########################################################*/\n  .component-onlinePresence .cards {\n    flex-direction: row;\n    justify-content: space-evenly; }\n  .component-onlinePresence .card {\n    flex-basis: 350px;\n    margin: 0 15px; }\n  /*################## ################################\n\t#########     04. Quality and Cost     #############\n\t###################################################*/\n  .col-qualityAndCost {\n    max-width: 100%; }\n  .component.qualityAndCost .heading .optional {\n    display: block; } }\n\n@media only screen and (min-width: 85.375em) {\n  /*###################################################\n\t#########           Main Banner         #############\n\t###################################################*/\n  .component-mainBanner .heading p {\n    font-size: 3.0625em; }\n  .component-mainBanner .subHeading p {\n    font-size: 1.5em;\n    padding-top: 0.875em; }\n  .component-mainBanner .buttons {\n    padding-top: 1.6875em; }\n  /*###################################################\n\t#########          Footer               #############\n\t###################################################*/\n  .component.footer {\n    flex-wrap: nowrap; }\n    .component.footer .description, .component.footer .navigation, .component.footer .newsletter {\n      flex: 1 1 33.33%; }\n    .component.footer .newsletter {\n      align-items: flex-start;\n      margin-top: 0; }\n      .component.footer .newsletter .content p {\n        text-align: left; } }\n\n/*Double extra large devices \n  min width 100em = 1600px */\n/*\n\tContent\n\t00. General for small device\n\t01. Landing Page\n\t\t01.00 Header\n\t\t01.01 mainBanner\n\t\t01.02 info\n\t\t\t01.02.00 appendixAd\n\txx. Miscellaneous\n*/\n@media only screen and (min-width: 106.25em) {\n  /*###############################################\n\t############    01.01 mainBanner   ##############\n\t################################################*/\n  .component-mainBanner .heading p {\n    font-size: 4.0625em; }\n  .component-mainBanner .subHeading p {\n    font-size: 2.125em;\n    padding-top: 1.0625em; }\n  .component-mainBanner .buttons {\n    padding-top: 1.875em; } }\n", ""]);


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, needQuotes) {
  // eslint-disable-next-line no-underscore-dangle, no-param-reassign
  url = url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "8da67cd9ca8c0d666d7be8760c0d50e0.jpg";

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ebcc09d23c694eaedd8b108ed9996b00.jpg";

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "6b4022df1d6ecde6103d5e4985bec45f.jpg";

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "e835325fbe6eb10846d572b8db91b55b.jpg";

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "e835325fbe6eb10846d572b8db91b55b.jpg";

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ab3d34505fb72754439deb4de04dc3a2.jpg";

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "b52089a83e2061083c93f4b88ee40ff1.jpg";

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "a5e4507a10c11d9a49b8dcd7774bc0f7.png";

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ad92dcc2a64373e6708936e0dda02c2a.jpg";

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),
/* 15 */
/***/ (function(module, exports) {

/*!
Waypoints - 4.0.1
Copyright © 2011-2016 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/
!function(){"use strict";function t(n){if(!n)throw new Error("No options passed to Waypoint constructor");if(!n.element)throw new Error("No element option passed to Waypoint constructor");if(!n.handler)throw new Error("No handler option passed to Waypoint constructor");this.key="waypoint-"+e,this.options=t.Adapter.extend({},t.defaults,n),this.element=this.options.element,this.adapter=new t.Adapter(this.element),this.callback=n.handler,this.axis=this.options.horizontal?"horizontal":"vertical",this.enabled=this.options.enabled,this.triggerPoint=null,this.group=t.Group.findOrCreate({name:this.options.group,axis:this.axis}),this.context=t.Context.findOrCreateByElement(this.options.context),t.offsetAliases[this.options.offset]&&(this.options.offset=t.offsetAliases[this.options.offset]),this.group.add(this),this.context.add(this),i[this.key]=this,e+=1}var e=0,i={};t.prototype.queueTrigger=function(t){this.group.queueTrigger(this,t)},t.prototype.trigger=function(t){this.enabled&&this.callback&&this.callback.apply(this,t)},t.prototype.destroy=function(){this.context.remove(this),this.group.remove(this),delete i[this.key]},t.prototype.disable=function(){return this.enabled=!1,this},t.prototype.enable=function(){return this.context.refresh(),this.enabled=!0,this},t.prototype.next=function(){return this.group.next(this)},t.prototype.previous=function(){return this.group.previous(this)},t.invokeAll=function(t){var e=[];for(var n in i)e.push(i[n]);for(var o=0,r=e.length;r>o;o++)e[o][t]()},t.destroyAll=function(){t.invokeAll("destroy")},t.disableAll=function(){t.invokeAll("disable")},t.enableAll=function(){t.Context.refreshAll();for(var e in i)i[e].enabled=!0;return this},t.refreshAll=function(){t.Context.refreshAll()},t.viewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight},t.viewportWidth=function(){return document.documentElement.clientWidth},t.adapters=[],t.defaults={context:window,continuous:!0,enabled:!0,group:"default",horizontal:!1,offset:0},t.offsetAliases={"bottom-in-view":function(){return this.context.innerHeight()-this.adapter.outerHeight()},"right-in-view":function(){return this.context.innerWidth()-this.adapter.outerWidth()}},window.Waypoint=t}(),function(){"use strict";function t(t){window.setTimeout(t,1e3/60)}function e(t){this.element=t,this.Adapter=o.Adapter,this.adapter=new this.Adapter(t),this.key="waypoint-context-"+i,this.didScroll=!1,this.didResize=!1,this.oldScroll={x:this.adapter.scrollLeft(),y:this.adapter.scrollTop()},this.waypoints={vertical:{},horizontal:{}},t.waypointContextKey=this.key,n[t.waypointContextKey]=this,i+=1,o.windowContext||(o.windowContext=!0,o.windowContext=new e(window)),this.createThrottledScrollHandler(),this.createThrottledResizeHandler()}var i=0,n={},o=window.Waypoint,r=window.onload;e.prototype.add=function(t){var e=t.options.horizontal?"horizontal":"vertical";this.waypoints[e][t.key]=t,this.refresh()},e.prototype.checkEmpty=function(){var t=this.Adapter.isEmptyObject(this.waypoints.horizontal),e=this.Adapter.isEmptyObject(this.waypoints.vertical),i=this.element==this.element.window;t&&e&&!i&&(this.adapter.off(".waypoints"),delete n[this.key])},e.prototype.createThrottledResizeHandler=function(){function t(){e.handleResize(),e.didResize=!1}var e=this;this.adapter.on("resize.waypoints",function(){e.didResize||(e.didResize=!0,o.requestAnimationFrame(t))})},e.prototype.createThrottledScrollHandler=function(){function t(){e.handleScroll(),e.didScroll=!1}var e=this;this.adapter.on("scroll.waypoints",function(){(!e.didScroll||o.isTouch)&&(e.didScroll=!0,o.requestAnimationFrame(t))})},e.prototype.handleResize=function(){o.Context.refreshAll()},e.prototype.handleScroll=function(){var t={},e={horizontal:{newScroll:this.adapter.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.adapter.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};for(var i in e){var n=e[i],o=n.newScroll>n.oldScroll,r=o?n.forward:n.backward;for(var s in this.waypoints[i]){var l=this.waypoints[i][s];if(null!==l.triggerPoint){var a=n.oldScroll<l.triggerPoint,h=n.newScroll>=l.triggerPoint,p=a&&h,u=!a&&!h;(p||u)&&(l.queueTrigger(r),t[l.group.id]=l.group)}}}for(var d in t)t[d].flushTriggers();this.oldScroll={x:e.horizontal.newScroll,y:e.vertical.newScroll}},e.prototype.innerHeight=function(){return this.element==this.element.window?o.viewportHeight():this.adapter.innerHeight()},e.prototype.remove=function(t){delete this.waypoints[t.axis][t.key],this.checkEmpty()},e.prototype.innerWidth=function(){return this.element==this.element.window?o.viewportWidth():this.adapter.innerWidth()},e.prototype.destroy=function(){var t=[];for(var e in this.waypoints)for(var i in this.waypoints[e])t.push(this.waypoints[e][i]);for(var n=0,o=t.length;o>n;n++)t[n].destroy()},e.prototype.refresh=function(){var t,e=this.element==this.element.window,i=e?void 0:this.adapter.offset(),n={};this.handleScroll(),t={horizontal:{contextOffset:e?0:i.left,contextScroll:e?0:this.oldScroll.x,contextDimension:this.innerWidth(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:e?0:i.top,contextScroll:e?0:this.oldScroll.y,contextDimension:this.innerHeight(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};for(var r in t){var s=t[r];for(var l in this.waypoints[r]){var a,h,p,u,d,f=this.waypoints[r][l],c=f.options.offset,w=f.triggerPoint,y=0,g=null==w;f.element!==f.element.window&&(y=f.adapter.offset()[s.offsetProp]),"function"==typeof c?c=c.apply(f):"string"==typeof c&&(c=parseFloat(c),f.options.offset.indexOf("%")>-1&&(c=Math.ceil(s.contextDimension*c/100))),a=s.contextScroll-s.contextOffset,f.triggerPoint=Math.floor(y+a-c),h=w<s.oldScroll,p=f.triggerPoint>=s.oldScroll,u=h&&p,d=!h&&!p,!g&&u?(f.queueTrigger(s.backward),n[f.group.id]=f.group):!g&&d?(f.queueTrigger(s.forward),n[f.group.id]=f.group):g&&s.oldScroll>=f.triggerPoint&&(f.queueTrigger(s.forward),n[f.group.id]=f.group)}}return o.requestAnimationFrame(function(){for(var t in n)n[t].flushTriggers()}),this},e.findOrCreateByElement=function(t){return e.findByElement(t)||new e(t)},e.refreshAll=function(){for(var t in n)n[t].refresh()},e.findByElement=function(t){return n[t.waypointContextKey]},window.onload=function(){r&&r(),e.refreshAll()},o.requestAnimationFrame=function(e){var i=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||t;i.call(window,e)},o.Context=e}(),function(){"use strict";function t(t,e){return t.triggerPoint-e.triggerPoint}function e(t,e){return e.triggerPoint-t.triggerPoint}function i(t){this.name=t.name,this.axis=t.axis,this.id=this.name+"-"+this.axis,this.waypoints=[],this.clearTriggerQueues(),n[this.axis][this.name]=this}var n={vertical:{},horizontal:{}},o=window.Waypoint;i.prototype.add=function(t){this.waypoints.push(t)},i.prototype.clearTriggerQueues=function(){this.triggerQueues={up:[],down:[],left:[],right:[]}},i.prototype.flushTriggers=function(){for(var i in this.triggerQueues){var n=this.triggerQueues[i],o="up"===i||"left"===i;n.sort(o?e:t);for(var r=0,s=n.length;s>r;r+=1){var l=n[r];(l.options.continuous||r===n.length-1)&&l.trigger([i])}}this.clearTriggerQueues()},i.prototype.next=function(e){this.waypoints.sort(t);var i=o.Adapter.inArray(e,this.waypoints),n=i===this.waypoints.length-1;return n?null:this.waypoints[i+1]},i.prototype.previous=function(e){this.waypoints.sort(t);var i=o.Adapter.inArray(e,this.waypoints);return i?this.waypoints[i-1]:null},i.prototype.queueTrigger=function(t,e){this.triggerQueues[e].push(t)},i.prototype.remove=function(t){var e=o.Adapter.inArray(t,this.waypoints);e>-1&&this.waypoints.splice(e,1)},i.prototype.first=function(){return this.waypoints[0]},i.prototype.last=function(){return this.waypoints[this.waypoints.length-1]},i.findOrCreate=function(t){return n[t.axis][t.name]||new i(t)},o.Group=i}(),function(){"use strict";function t(t){return t===t.window}function e(e){return t(e)?e:e.defaultView}function i(t){this.element=t,this.handlers={}}var n=window.Waypoint;i.prototype.innerHeight=function(){var e=t(this.element);return e?this.element.innerHeight:this.element.clientHeight},i.prototype.innerWidth=function(){var e=t(this.element);return e?this.element.innerWidth:this.element.clientWidth},i.prototype.off=function(t,e){function i(t,e,i){for(var n=0,o=e.length-1;o>n;n++){var r=e[n];i&&i!==r||t.removeEventListener(r)}}var n=t.split("."),o=n[0],r=n[1],s=this.element;if(r&&this.handlers[r]&&o)i(s,this.handlers[r][o],e),this.handlers[r][o]=[];else if(o)for(var l in this.handlers)i(s,this.handlers[l][o]||[],e),this.handlers[l][o]=[];else if(r&&this.handlers[r]){for(var a in this.handlers[r])i(s,this.handlers[r][a],e);this.handlers[r]={}}},i.prototype.offset=function(){if(!this.element.ownerDocument)return null;var t=this.element.ownerDocument.documentElement,i=e(this.element.ownerDocument),n={top:0,left:0};return this.element.getBoundingClientRect&&(n=this.element.getBoundingClientRect()),{top:n.top+i.pageYOffset-t.clientTop,left:n.left+i.pageXOffset-t.clientLeft}},i.prototype.on=function(t,e){var i=t.split("."),n=i[0],o=i[1]||"__default",r=this.handlers[o]=this.handlers[o]||{},s=r[n]=r[n]||[];s.push(e),this.element.addEventListener(n,e)},i.prototype.outerHeight=function(e){var i,n=this.innerHeight();return e&&!t(this.element)&&(i=window.getComputedStyle(this.element),n+=parseInt(i.marginTop,10),n+=parseInt(i.marginBottom,10)),n},i.prototype.outerWidth=function(e){var i,n=this.innerWidth();return e&&!t(this.element)&&(i=window.getComputedStyle(this.element),n+=parseInt(i.marginLeft,10),n+=parseInt(i.marginRight,10)),n},i.prototype.scrollLeft=function(){var t=e(this.element);return t?t.pageXOffset:this.element.scrollLeft},i.prototype.scrollTop=function(){var t=e(this.element);return t?t.pageYOffset:this.element.scrollTop},i.extend=function(){function t(t,e){if("object"==typeof t&&"object"==typeof e)for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);return t}for(var e=Array.prototype.slice.call(arguments),i=1,n=e.length;n>i;i++)t(e[0],e[i]);return e[0]},i.inArray=function(t,e,i){return null==e?-1:e.indexOf(t,i)},i.isEmptyObject=function(t){for(var e in t)return!1;return!0},n.adapters.push({name:"noframework",Adapter:i}),n.Adapter=i}();

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debouncer", function() { return debouncer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unfade", function() { return unfade; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBgUrl", function() { return getBgUrl; });
//debouncer 
function debouncer( func , timeout ) {
  var timeoutID , timeout = timeout || 200;
  return function () {
      var scope = this , args = arguments;
      clearTimeout( timeoutID );
      timeoutID = setTimeout( function () {
          func.apply( scope , Array.prototype.slice.call( args ) );
      } , timeout );
  }
}  


////fade in 
function unfade(element, initialOp) {
  var op = InitialOp || 0.1;  // initial opacity
  element.style.display = 'block';
  var timer = setInterval(function () {
      if (op >= 1){
          clearInterval(timer);
      }
      element.style.opacity = op;
      element.style.filter = 'alpha(opacity=' + op * 100 + ")";
      op += op * 0.1;
  }, 10);
}




/*########################################################
###         Background Image load event            #####
#######################################################*/

function getBgUrl(el) {
  var bg = "";
  if (el.currentStyle) { // IE
      bg = el.currentStyle.backgroundImage;
  } else if (document.defaultView && document.defaultView.getComputedStyle) { // Firefox
      bg = document.defaultView.getComputedStyle(el, "").backgroundImage;
  } else { // try and get inline style
      bg = el.style.backgroundImage;
  }
  return bg.replace(/url\(['"]?(.*?)['"]?\)/i, "$1");
}

/*-------- How to use ------------
var image = document.createElement('img');
image.src = getBgUrl(mainBannerBgImg);
image.onload = function () {
    alert('Loaded!');
};
-----------------------------------*/

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "componentQualityAndCostSkills", function() { return componentQualityAndCostSkills; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "progressBarsSet1", function() { return progressBarsSet1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "waypoint2", function() { return waypoint2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assignProgressAnimation1", function() { return assignProgressAnimation1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "progressBarMove1", function() { return progressBarMove1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mql_lgBpMin", function() { return mql_lgBpMin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "screenTest_lgBpMin_animationOnScroll", function() { return screenTest_lgBpMin_animationOnScroll; });
/* harmony import */ var _libraries_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);





  /*######################################################
	###               Quality And Cost                 #####
	#######################################################*/

  /*===(1)=======================================================
  Animating Progress bar
  ===============================================================*/
  var componentQualityAndCostSkills = document.querySelector('.component.qualityAndCostSkills')
  var progressBarsSet1 = document.querySelectorAll(".qualityAndCostSkills .progressBar");
  
  //animation on scroll: progressBar
  var waypoint2 = new Waypoint({
    element: componentQualityAndCostSkills,
    handler: assignProgressAnimation1,
    offset: '40%'
  })



  //assining function animation to Nodelists
  function assignProgressAnimation1() {
    progressBarsSet1.forEach(function(elm){
      progressBarMove1(elm, elm.value);
    })
  }

  //function def: animation: progressBar
  function progressBarMove1(elem, maxPerc) {
    //var elem = document.getElementById("myBar"); 
    elem.value = 10;
    var id = setInterval(frame, 10);
    function frame() {
      if (elem.value >= maxPerc) {
        clearInterval(id);
      } else {
        elem.value++;
      }
    }
  }







  
  /***************************************************************
  ****************************************************************
                     only for larger screen    
  ****************************************************************
  ****************************************************************/  

  
  let mql_lgBpMin = window.matchMedia('(min-width: 62em)');
  screenTest_lgBpMin_animationOnScroll(mql_lgBpMin);
  mql_lgBpMin.addListener(screenTest_lgBpMin_animationOnScroll);
  
  
  function screenTest_lgBpMin_animationOnScroll(e) {
    if(e.matches) {
      
      /*######################################################
      ###               mainBanner                       #####
      #######################################################*/
    
      /*===(1)=======================================================
          animate the banner on scroll 
          Only for large screen > 992px
      ===============================================================*/
      var componentMainBannerChildren = document.querySelector('.component-mainBanner').children;
      componentMainBannerChildren = Array.from(componentMainBannerChildren); //Since parent.children returns HTMLCollection, not nodeList
      var mainBannerBgImg = document.querySelector(".row-mainBanner");
    
      //backgroundImage load event tool
      
      var backgroundImageOnScroll_1 = document.createElement('img');
      backgroundImageOnScroll_1.src = Object(_libraries_tools__WEBPACK_IMPORTED_MODULE_0__["getBgUrl"])(mainBannerBgImg);
      backgroundImageOnScroll_1.onload = function () {
        componentMainBannerChildren.forEach(function(elm){
          if (elm.classList.contains("heading")) {
            elm.classList.add("animated","slideInRight", "slow", "delay-200ms")
            elm.style.transitionDelay = "200ms";  
          } else if (elm.classList.contains("subHeading")) {
            elm.classList.add("animated","slideInRight", "slow", "delay-1s")
            elm.style.transitionDelay = "1s";  
          } else if (elm.classList.contains("buttons")) {
            elm.classList.add("animated","slideInRight", "slow", "delay-1800ms")
            elm.style.transitionDelay = "1800ms";  
          }  
          elm.classList.replace("waypoint-hide", "waypoint-reveal")
          //elm.style.transitionDelay = "300ms";  
        })
      };//end of .onload function

      

      /*######################################################
      ###                   Why Us                       #####
      #######################################################*/
    
      var componentWhyUs = document.querySelector(".component-whyUs_largeScreen");
      var componentWhyUsChildren = componentWhyUs.querySelectorAll('.componentHeading, .componentImage, .componentContent, .componentAppendix');
      componentWhyUsChildren.forEach(function(elm){
        elm.classList.add("waypoint-hide");
      })
    
      var waypoint1 = new Waypoint({
        element: document.querySelector(".component-whyUs_largeScreen"),
        handler: function() {  
          componentWhyUsChildren.forEach(function(elm){
            if (elm.classList.contains("componentHeading")) {
              elm.classList.add("animated", "slideInRight");
              elm.classList.replace("waypoint-hide", "waypoint-reveal")
            }
            if (elm.classList.contains("componentImage")) {
              elm.classList.add('animated', 'fadeInUp');
              elm.classList.replace("waypoint-hide", "waypoint-reveal")
            }
            if (elm.classList.contains("componentContent") || elm.classList.contains("componentAppendix")) {
              elm.classList.add('animated','slideInRight');
              elm.classList.replace("waypoint-hide", "waypoint-reveal");
            }
          });
        },
        offset: '40%'
      })


    }// End of e.matches
  }//End of function screeTest_lgBpMin_animationOnScroll()



/***/ })
/******/ ]);