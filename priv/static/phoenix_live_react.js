/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["phoenix_live_react"] = factory(require("react"), require("react-dom"));
	else
		root["phoenix_live_react"] = factory(root["react"], root["react-dom"]);
})(self, (__WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_react_dom__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/phoenix_live_react.js":
/*!**********************************!*\
  !*** ./js/phoenix_live_react.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ LiveReact),\n/* harmony export */   \"initLiveReact\": () => (/* binding */ initLiveReact),\n/* harmony export */   \"initLiveReactElement\": () => (/* binding */ initLiveReactElement)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ \"./node_modules/react-dom/client.js\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }\nfunction _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }\nfunction _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\n\n\nvar render = function render(root, el, componentClass) {\n  var additionalProps = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};\n  var previousProps = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};\n  var props = el.dataset.liveReactProps ? JSON.parse(el.dataset.liveReactProps) : {};\n  if (el.dataset.liveReactMerge) {\n    props = _objectSpread(_objectSpread(_objectSpread({}, previousProps), props), additionalProps);\n  } else {\n    props = _objectSpread(_objectSpread({}, props), additionalProps);\n  }\n  var reactElement = react__WEBPACK_IMPORTED_MODULE_0___default().createElement(componentClass, props);\n  root.render(reactElement);\n  return props;\n};\nvar initLiveReactElement = function initLiveReactElement(el, additionalProps) {\n  var target = el.nextElementSibling;\n  var componentClass = Array.prototype.reduce.call(el.dataset.liveReactClass.split('.'), function (acc, el) {\n    return acc[el];\n  }, window);\n  var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(target);\n  render(root, el, componentClass, additionalProps);\n  return {\n    root: root,\n    target: target,\n    componentClass: componentClass\n  };\n};\nvar initLiveReact = function initLiveReact() {\n  var elements = document.querySelectorAll('[data-live-react-class]');\n  Array.prototype.forEach.call(elements, function (el) {\n    initLiveReactElement(el);\n  });\n};\nvar LiveReact = {\n  mounted: function mounted() {\n    var el = this.el;\n    var pushEvent = this.pushEvent.bind(this);\n    var pushEventTo = this.pushEventTo && this.pushEventTo.bind(this);\n    var handleEvent = this.handleEvent && this.handleEvent.bind(this);\n    var _initLiveReactElement = initLiveReactElement(el, {\n        pushEvent: pushEvent\n      }),\n      root = _initLiveReactElement.root,\n      target = _initLiveReactElement.target,\n      componentClass = _initLiveReactElement.componentClass;\n    var props = render(root, el, componentClass, {\n      pushEvent: pushEvent,\n      pushEventTo: pushEventTo,\n      handleEvent: handleEvent\n    });\n    if (el.dataset.liveReactMerge) this.props = props;\n    Object.assign(this, {\n      target: target,\n      componentClass: componentClass,\n      root: root\n    });\n  },\n  updated: function updated() {\n    var root = this.root,\n      el = this.el,\n      target = this.target,\n      componentClass = this.componentClass;\n    var pushEvent = this.pushEvent.bind(this);\n    var pushEventTo = this.pushEventTo && this.pushEventTo.bind(this);\n    var handleEvent = this.handleEvent;\n    var previousProps = this.props;\n    var props = render(root, el, componentClass, {\n      pushEvent: pushEvent,\n      pushEventTo: pushEventTo\n    }, previousProps);\n    if (el.dataset.liveReactMerge) this.props = props;\n  },\n  destroyed: function destroyed() {\n    var root = this.root;\n    root.unmount();\n  }\n};\n\n\n//# sourceURL=webpack://phoenix_live_react/./js/phoenix_live_react.js?");

/***/ }),

/***/ "./node_modules/react-dom/client.js":
/*!******************************************!*\
  !*** ./node_modules/react-dom/client.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nvar m = __webpack_require__(/*! react-dom */ \"react-dom\");\nif (false) {} else {\n  var i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;\n  exports.createRoot = function(c, o) {\n    i.usingClientEntryPoint = true;\n    try {\n      return m.createRoot(c, o);\n    } finally {\n      i.usingClientEntryPoint = false;\n    }\n  };\n  exports.hydrateRoot = function(c, h, o) {\n    i.usingClientEntryPoint = true;\n    try {\n      return m.hydrateRoot(c, h, o);\n    } finally {\n      i.usingClientEntryPoint = false;\n    }\n  };\n}\n\n\n//# sourceURL=webpack://phoenix_live_react/./node_modules/react-dom/client.js?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_react_dom__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/phoenix_live_react.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});