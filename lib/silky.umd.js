(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["silky"] = factory();
	else
		root["silky"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "0dc4":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "140d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Border_vue_vue_type_style_index_0_id_28ccc9a7_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cf95");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Border_vue_vue_type_style_index_0_id_28ccc9a7_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Border_vue_vue_type_style_index_0_id_28ccc9a7_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "147d":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "1a90":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "1ca0":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "3a09":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Color_vue_vue_type_style_index_0_id_0a2a7dfc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a3b7");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Color_vue_vue_type_style_index_0_id_0a2a7dfc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Color_vue_vue_type_style_index_0_id_0a2a7dfc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "4cc6":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "4e42":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Thunderball_vue_vue_type_style_index_0_id_fa94b08a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("d1cc");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Thunderball_vue_vue_type_style_index_0_id_fa94b08a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Thunderball_vue_vue_type_style_index_0_id_fa94b08a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "53a8":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "5ca5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Scroll_vue_vue_type_style_index_0_id_0f83b194_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("c1dc");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Scroll_vue_vue_type_style_index_0_id_0f83b194_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Scroll_vue_vue_type_style_index_0_id_0f83b194_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "65a4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Animation_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("53a8");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Animation_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Animation_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "6638":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "767d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Text_vue_vue_type_style_index_0_id_6487a802_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("147d");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Text_vue_vue_type_style_index_0_id_6487a802_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Text_vue_vue_type_style_index_0_id_6487a802_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "95bd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Galaxy_vue_vue_type_style_index_0_id_34ec3cdd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1ca0");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Galaxy_vue_vue_type_style_index_0_id_34ec3cdd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Galaxy_vue_vue_type_style_index_0_id_34ec3cdd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "97e3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TabPlan_vue_vue_type_style_index_0_id_37332178_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1a90");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TabPlan_vue_vue_type_style_index_0_id_37332178_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TabPlan_vue_vue_type_style_index_0_id_37332178_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "a353":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tab_vue_vue_type_style_index_0_id_a6ef4198_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0dc4");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tab_vue_vue_type_style_index_0_id_a6ef4198_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tab_vue_vue_type_style_index_0_id_a6ef4198_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "a3b7":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "c1dc":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "c9ef":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuItem_vue_vue_type_style_index_0_id_7ea5b912_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6638");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuItem_vue_vue_type_style_index_0_id_7ea5b912_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuItem_vue_vue_type_style_index_0_id_7ea5b912_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "cf95":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "d1cc":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "db90":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Button_vue_vue_type_style_index_0_id_7716c67d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e1a9");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Button_vue_vue_type_style_index_0_id_7716c67d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Button_vue_vue_type_style_index_0_id_7716c67d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "e1a9":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "e872":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuGroup_vue_vue_type_style_index_0_id_ad91875a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4cc6");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuGroup_vue_vue_type_style_index_0_id_ad91875a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuGroup_vue_vue_type_style_index_0_id_ad91875a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "f24f":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "f3ee":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Water_vue_vue_type_style_index_0_id_e4462e6e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("f24f");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Water_vue_vue_type_style_index_0_id_e4462e6e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Water_vue_vue_type_style_index_0_id_e4462e6e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"761a4670-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/button/src/Button.vue?vue&type=template&id=7716c67d&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"yun-buttons"},[(_vm.type == 'colorliner')?_c('div',{staticClass:"yun-button yun-button-linear",class:("yun-animate-" + _vm.animate),style:(("background-image: linear-gradient(to " + _vm.direction + ", " + (_vm.colors.join(
      ','
    )) + ");border:1px solid " + _vm.borderColor + ";color:" + _vm.fontColor + ";border-radius:" + _vm.radius + "px;")),on:{"mouseenter":_vm.btnMouseEvent,"mouseleave":_vm.btnMouseEvent}},[_vm._t("default")],2):_vm._e(),(_vm.type == 'color')?_c('div',{staticClass:"yun-button yun-button-color",class:("yun-animate-" + _vm.animate),style:(("background:" + _vm.color + ";border:1px solid " + _vm.borderColor + ";color:" + _vm.fontColor + ";border-radius:" + _vm.radius + "px")),on:{"mouseenter":_vm.btnMouseEvent,"mouseleave":_vm.btnMouseEvent}},[_vm._t("default")],2):_vm._e()])}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/button/src/Button.vue?vue&type=template&id=7716c67d&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/button/src/Button.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Buttonvue_type_script_lang_js_ = ({
  name: "yun-button",
  props: {
    color:{
      type:String,
      default:'#fff'
    },
    fontColor:{
      type:String,
      default:'#666'
    },
    borderColor:{
      type:String,
      default:'#efefef'
    },
    radius:{
      type:[Number,String],
      default:4
    },
    colors: {
      type: Array,
      default: () => ["#667eea", "#bf8bf5", " #667eea"],
    },
    direction: {
      type: String,
      default: "right",
    },
    animate: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: "color",
    },
  },
  data() {
    return {
      animateFlag: false,
    };
  },
  methods: {
    btnMouseEvent() {
      if (this.animate) {
        this.animateFlag = !this.animateFlag;
      }
    },
  },
});

// CONCATENATED MODULE: ./packages/button/src/Button.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_Buttonvue_type_script_lang_js_ = (Buttonvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/button/src/Button.vue?vue&type=style&index=0&id=7716c67d&lang=scss&scoped=true&
var Buttonvue_type_style_index_0_id_7716c67d_lang_scss_scoped_true_ = __webpack_require__("db90");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./packages/button/src/Button.vue






/* normalize component */

var component = normalizeComponent(
  src_Buttonvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "7716c67d",
  null
  
)

/* harmony default export */ var Button = (component.exports);
// CONCATENATED MODULE: ./packages/button/index.js


Button.install=function(Vue){
    Vue.component(Button.name,Button)
}
/* harmony default export */ var packages_button = (Button);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"761a4670-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/tab/src/Tab.vue?vue&type=template&id=a6ef4198&scoped=true&
var Tabvue_type_template_id_a6ef4198_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"yun-tab",class:["yun-tab-"+_vm.model,_vm.$attrs.class]},[_c('div',{staticClass:"yun-tab-nav"},_vm._l((_vm.navList),function(item){return _c('div',{key:item.tab,staticClass:"yun-tab-nav-item",class:{"active-tab":item.tab==_vm.value},on:{"click":function($event){return _vm.changeTabEvent(item)}}},[_vm._v(" "+_vm._s(item.label)+" ")])}),0),_c('div',{staticClass:"yun-tab-content"},[_vm._t("default",null,{"active":_vm.value})],2)])}
var Tabvue_type_template_id_a6ef4198_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./packages/tab/src/Tab.vue?vue&type=template&id=a6ef4198&scoped=true&

// CONCATENATED MODULE: ./packages/tab/src/TabNav.vue
var TabNav_render, TabNav_staticRenderFns
var script = {}


/* normalize component */

var TabNav_component = normalizeComponent(
  script,
  TabNav_render,
  TabNav_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var TabNav = (TabNav_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/tab/src/Tab.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var Tabvue_type_script_lang_js_ = ({
  name: 'yun-tab',
  props: {
    value: "",
    active: '',
    model:{
      type:String,
      default:'inline'
    }
  },
  components: {
    TabNav: TabNav
  },
  created () {
  },
  data() {
    return {
      navList: []
    };
  },
  mounted() {
    this.getNavList()
  },
  methods: {
    getNavList() {
      this.navList = []
      if (this.$slots.default) {
        this.$slots.default.forEach(item => {
          let navObj = {
            label: item.componentInstance.label,
            tab: item.componentInstance.tab
          }
          this.navList.push(navObj)
        });
      }
      
    },
    changeTabEvent(item){
      this.$emit('tab-click',item)
    }
  },
});

// CONCATENATED MODULE: ./packages/tab/src/Tab.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_Tabvue_type_script_lang_js_ = (Tabvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/tab/src/Tab.vue?vue&type=style&index=0&id=a6ef4198&lang=scss&scoped=true&
var Tabvue_type_style_index_0_id_a6ef4198_lang_scss_scoped_true_ = __webpack_require__("a353");

// CONCATENATED MODULE: ./packages/tab/src/Tab.vue






/* normalize component */

var Tab_component = normalizeComponent(
  src_Tabvue_type_script_lang_js_,
  Tabvue_type_template_id_a6ef4198_scoped_true_render,
  Tabvue_type_template_id_a6ef4198_scoped_true_staticRenderFns,
  false,
  null,
  "a6ef4198",
  null
  
)

/* harmony default export */ var src_Tab = (Tab_component.exports);
// CONCATENATED MODULE: ./packages/tab/index.js


src_Tab.install=function(Vue){
    Vue.component(src_Tab.name,src_Tab)
}
/* harmony default export */ var tab = (src_Tab);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"761a4670-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/tab/src/TabPlan.vue?vue&type=template&id=37332178&scoped=true&
var TabPlanvue_type_template_id_37332178_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.active)?_c('div',{staticClass:"yun-tab-plan",class:_vm.$attrs.class},[_vm._t("default")],2):_vm._e()}
var TabPlanvue_type_template_id_37332178_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./packages/tab/src/TabPlan.vue?vue&type=template&id=37332178&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/tab/src/TabPlan.vue?vue&type=script&lang=js&
//
//
//
//
//
//

/* harmony default export */ var TabPlanvue_type_script_lang_js_ = ({
  name: 'yun-tab-plan',
  props: {
    tab:String,
    label:String
  },
  data() {
    return {
    };
  },
  created () {
  },
  computed:{
    active:function(){
      const active = this.$parent.value === this.tab
      return active;
    }
  },
  watch:{
  },
  methods: {
    
  },
  
});

// CONCATENATED MODULE: ./packages/tab/src/TabPlan.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_TabPlanvue_type_script_lang_js_ = (TabPlanvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/tab/src/TabPlan.vue?vue&type=style&index=0&id=37332178&lang=scss&scoped=true&
var TabPlanvue_type_style_index_0_id_37332178_lang_scss_scoped_true_ = __webpack_require__("97e3");

// CONCATENATED MODULE: ./packages/tab/src/TabPlan.vue






/* normalize component */

var TabPlan_component = normalizeComponent(
  src_TabPlanvue_type_script_lang_js_,
  TabPlanvue_type_template_id_37332178_scoped_true_render,
  TabPlanvue_type_template_id_37332178_scoped_true_staticRenderFns,
  false,
  null,
  "37332178",
  null
  
)

/* harmony default export */ var TabPlan = (TabPlan_component.exports);
// CONCATENATED MODULE: ./packages/tab-plan/index.js


TabPlan.install=function(Vue){
    Vue.component(TabPlan.name,Tab)
}
/* harmony default export */ var tab_plan = (TabPlan);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"761a4670-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/color/src/Color.vue?vue&type=template&id=0a2a7dfc&scoped=true&
var Colorvue_type_template_id_0a2a7dfc_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"yun-color"},[_c('div',{staticClass:"yun-color-custom"},[_c('input',{staticClass:"custom-color",attrs:{"id":"yuncolor","type":"color"},on:{"change":_vm.changeColor}}),_c('input',{attrs:{"id":"copy","type":"text"}})]),_vm._m(0)])}
var Colorvue_type_template_id_0a2a7dfc_scoped_true_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('table',{staticClass:"yun-color-table",attrs:{"border":"0"}},[_c('tbody',[_c('tr',[_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#ffffff"}},[_vm._v("#FFFFFF")]),_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#dddddd"}},[_vm._v("#DDDDDD")]),_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#aaaaaa"}},[_vm._v("#AAAAAA")]),_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#888888"}},[_vm._v("#888888")]),_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#666666"}},[_vm._v("#666666")]),_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#444444"}},[_vm._v("#444444")]),_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#000000"}},[_vm._v("#000000")])]),_c('tr',[_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#ffb7dd"}},[_vm._v("#FFB7DD")]),_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#ff88c2"}},[_vm._v("#FF88C2")]),_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#ff44aa"}},[_vm._v("#FF44AA")]),_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#ff0088"}},[_vm._v("#FF0088")]),_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#c10066"}},[_vm._v("#C10066")]),_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#a20055"}},[_vm._v("#A20055")]),_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#8c0044"}},[_vm._v("#8C0044")])]),_c('tr',[_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#ffcccc"}},[_vm._v("#FFCCCC")]),_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#ff8888"}},[_vm._v("#FF8888")]),_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#ff3333"}},[_vm._v("#FF3333")]),_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#ff0000"}},[_vm._v("#FF0000")]),_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#cc0000"}},[_vm._v("#CC0000")]),_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#aa0000"}},[_vm._v("#AA0000")]),_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#880000"}},[_vm._v("#880000")])]),_c('tr',[_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#ffc8b4"}},[_vm._v("#FFC8B4")]),_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#ffa488"}},[_vm._v("#FFA488")]),_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#ff7744"}},[_vm._v("#FF7744")]),_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#ff5511"}},[_vm._v("#FF5511")]),_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#e63f00"}},[_vm._v("#E63F00")]),_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#c63300"}},[_vm._v("#C63300")]),_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#a42d00"}},[_vm._v("#A42D00")])]),_c('tr',[_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#ffddaa"}},[_vm._v("#FFDDAA")]),_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#ffbb66"}},[_vm._v("#FFBB66")]),_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#ffaa33"}},[_vm._v("#FFAA33")]),_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#ff8800"}},[_vm._v("#FF8800")]),_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#ee7700"}},[_vm._v("#EE7700")]),_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#cc6600"}},[_vm._v("#CC6600")]),_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#bb5500"}},[_vm._v("#BB5500")])]),_c('tr',[_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#ffee99"}},[_vm._v("#FFEE99")]),_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#ffdd55"}},[_vm._v("#FFDD55")]),_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#ffcc22"}},[_vm._v("#FFCC22")]),_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#ffbb00"}},[_vm._v("#FFBB00")]),_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#ddaa00"}},[_vm._v("#DDAA00")]),_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#aa7700"}},[_vm._v("#AA7700")]),_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#886600"}},[_vm._v("#886600")])]),_c('tr',[_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#ffffbb"}},[_vm._v("#FFFFBB")]),_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#ffff77"}},[_vm._v("#FFFF77")]),_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#ffff33"}},[_vm._v("#FFFF33")]),_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#ffff00"}},[_vm._v("#FFFF00")]),_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#eeee00"}},[_vm._v("#EEEE00")]),_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#bbbb00"}},[_vm._v("#BBBB00")]),_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#888800"}},[_vm._v("#888800")])]),_c('tr',[_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#eeffbb"}},[_vm._v("#EEFFBB")]),_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#ddff77"}},[_vm._v("#DDFF77")]),_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#ccff33"}},[_vm._v("#CCFF33")]),_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#bbff00"}},[_vm._v("#BBFF00")]),_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#99dd00"}},[_vm._v("#99DD00")]),_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#88aa00"}},[_vm._v("#88AA00")]),_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#668800"}},[_vm._v("#668800")])]),_c('tr',[_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#ccff99"}},[_vm._v("#CCFF99")]),_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#bbff66"}},[_vm._v("#BBFF66")]),_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#99ff33"}},[_vm._v("#99FF33")]),_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#77ff00"}},[_vm._v("#77FF00")]),_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#66dd00"}},[_vm._v("#66DD00")]),_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#55aa00"}},[_vm._v("#55AA00")]),_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#227700"}},[_vm._v("#227700")])]),_c('tr',[_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#99ff99"}},[_vm._v("#99FF99")]),_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#66ff66"}},[_vm._v("#66FF66")]),_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#33ff33"}},[_vm._v("#33FF33")]),_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#00ff00"}},[_vm._v("#00FF00")]),_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#00dd00"}},[_vm._v("#00DD00")]),_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#00aa00"}},[_vm._v("#00AA00")]),_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#008800"}},[_vm._v("#008800")])]),_c('tr',[_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#bbffee"}},[_vm._v("#BBFFEE")]),_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#77ffcc"}},[_vm._v("#77FFCC")]),_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#33ffaa"}},[_vm._v("#33FFAA")]),_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#00ff99"}},[_vm._v("#00FF99")]),_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#00dd77"}},[_vm._v("#00DD77")]),_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#00aa55"}},[_vm._v("#00AA55")]),_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#008844"}},[_vm._v("#008844")])]),_c('tr',[_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#aaffee"}},[_vm._v("#AAFFEE")]),_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#77ffee"}},[_vm._v("#77FFEE")]),_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#33ffdd"}},[_vm._v("#33FFDD")]),_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#00ffcc"}},[_vm._v("#00FFCC")]),_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#00ddaa"}},[_vm._v("#00DDAA")]),_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#00aa88"}},[_vm._v("#00AA88")]),_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#008866"}},[_vm._v("#008866")])]),_c('tr',[_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#99ffff"}},[_vm._v("#99FFFF")]),_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#66ffff"}},[_vm._v("#66FFFF")]),_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#33ffff"}},[_vm._v("#33FFFF")]),_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#00ffff"}},[_vm._v("#00FFFF")]),_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#00dddd"}},[_vm._v("#00DDDD")]),_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#00aaaa"}},[_vm._v("#00AAAA")]),_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#008888"}},[_vm._v("#008888")])]),_c('tr',[_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#cceeff"}},[_vm._v("#CCEEFF")]),_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#77ddff"}},[_vm._v("#77DDFF")]),_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#33ccff"}},[_vm._v("#33CCFF")]),_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#00bbff"}},[_vm._v("#00BBFF")]),_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#009fcc"}},[_vm._v("#009FCC")]),_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#0088a8"}},[_vm._v("#0088A8")]),_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#007799"}},[_vm._v("#007799")])]),_c('tr',[_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#ccddff"}},[_vm._v("#CCDDFF")]),_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#99bbff"}},[_vm._v("#99BBFF")]),_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#5599ff"}},[_vm._v("#5599FF")]),_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#0066ff"}},[_vm._v("#0066FF")]),_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#0044bb"}},[_vm._v("#0044BB")]),_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#003c9d"}},[_vm._v("#003C9D")]),_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#003377"}},[_vm._v("#003377")])]),_c('tr',[_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#ccccff"}},[_vm._v("#CCCCFF")]),_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#9999ff"}},[_vm._v("#9999FF")]),_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#5555ff"}},[_vm._v("#5555FF")]),_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#0000ff"}},[_vm._v("#0000FF")]),_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#0000cc"}},[_vm._v("#0000CC")]),_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#0000aa"}},[_vm._v("#0000AA")]),_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#000088"}},[_vm._v("#000088")])]),_c('tr',[_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#ccbbff"}},[_vm._v("#CCBBFF")]),_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#9f88ff"}},[_vm._v("#9F88FF")]),_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#7744ff"}},[_vm._v("#7744FF")]),_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#5500ff"}},[_vm._v("#5500FF")]),_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#4400cc"}},[_vm._v("#4400CC")]),_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#2200aa"}},[_vm._v("#2200AA")]),_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#220088"}},[_vm._v("#220088")])]),_c('tr',[_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#d1bbff"}},[_vm._v("#D1BBFF")]),_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#b088ff"}},[_vm._v("#B088FF")]),_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#9955ff"}},[_vm._v("#9955FF")]),_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#7700ff"}},[_vm._v("#7700FF")]),_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#5500dd"}},[_vm._v("#5500DD")]),_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#4400b3"}},[_vm._v("#4400B3")]),_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#3a0088"}},[_vm._v("#3A0088")])]),_c('tr',[_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#e8ccff"}},[_vm._v("#E8CCFF")]),_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#d28eff"}},[_vm._v("#D28EFF")]),_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#b94fff"}},[_vm._v("#B94FFF")]),_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#9900ff"}},[_vm._v("#9900FF")]),_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#7700bb"}},[_vm._v("#7700BB")]),_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#66009d"}},[_vm._v("#66009D")]),_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#550088"}},[_vm._v("#550088")])]),_c('tr',[_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#f0bbff"}},[_vm._v("#F0BBFF")]),_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#e377ff"}},[_vm._v("#E38EFF")]),_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#d93eff"}},[_vm._v("#E93EFF")]),_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#cc00ff"}},[_vm._v("#CC00FF")]),_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#a500cc"}},[_vm._v("#A500CC")]),_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#7a0099"}},[_vm._v("#7A0099")]),_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#660077"}},[_vm._v("#660077")])]),_c('tr',[_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#ffb3ff"}},[_vm._v("#FFB3FF")]),_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#ff77ff"}},[_vm._v("#FF77FF")]),_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#ff3eff"}},[_vm._v("#FF3EFF")]),_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#ff00ff"}},[_vm._v("#FF0 0FF")]),_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#cc00cc"}},[_vm._v("#CC00CC")]),_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#990099"}},[_vm._v("#990099")]),_c('td',{attrs:{"height":"30","width":"95","bgcolor":"#770077"}},[_vm._v("#770077")])])])])}]


// CONCATENATED MODULE: ./packages/color/src/Color.vue?vue&type=template&id=0a2a7dfc&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/color/src/Color.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Colorvue_type_script_lang_js_ = ({
  name: "yun-color",
  data() {
    return {
    };
  },
  mounted () {
    this.$nextTick(()=>{
        let tds = document.getElementsByTagName('td');
        [...tds].forEach(td => {
            td.onclick=function(){
                let input = document.getElementById("copy");
                input.value = td.textContent;
                document.getElementById('yuncolor').value=td.textContent;
                 input.select(); // 选中文本
                document.execCommand("copy"); // 执行浏览器复制命令
                alert("复制成功");
            }  
        });
    })
  },
  methods: {
      changeColor(){
          let input = document.getElementById("copy");
          input.value = document.getElementById('yuncolor').value;
      }
  }
});

// CONCATENATED MODULE: ./packages/color/src/Color.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_Colorvue_type_script_lang_js_ = (Colorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/color/src/Color.vue?vue&type=style&index=0&id=0a2a7dfc&lang=scss&scoped=true&
var Colorvue_type_style_index_0_id_0a2a7dfc_lang_scss_scoped_true_ = __webpack_require__("3a09");

// CONCATENATED MODULE: ./packages/color/src/Color.vue






/* normalize component */

var Color_component = normalizeComponent(
  src_Colorvue_type_script_lang_js_,
  Colorvue_type_template_id_0a2a7dfc_scoped_true_render,
  Colorvue_type_template_id_0a2a7dfc_scoped_true_staticRenderFns,
  false,
  null,
  "0a2a7dfc",
  null
  
)

/* harmony default export */ var src_Color = (Color_component.exports);
// CONCATENATED MODULE: ./packages/color/index.js

src_Color.install=function(Vue){
    Vue.component(src_Color.name,src_Color)
}
/* harmony default export */ var color = (src_Color);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"761a4670-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/menu/src/Menu.vue?vue&type=template&id=6ee21e5c&
var Menuvue_type_template_id_6ee21e5c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"yun-menu",style:(("width:" + _vm.width + "px;background:" + _vm.bgColor))},[_vm._t("default")],2)}
var Menuvue_type_template_id_6ee21e5c_staticRenderFns = []


// CONCATENATED MODULE: ./packages/menu/src/Menu.vue?vue&type=template&id=6ee21e5c&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/menu/src/Menu.vue?vue&type=script&lang=js&
//
//
//
//
//


/* harmony default export */ var Menuvue_type_script_lang_js_ = ({
    name:'yun-menu',
    props:{
        width:{
            type:[String,Number],
            default:200
        },
        bgColor:{
            type:String,
            default:'#1976d2'
        },
        route:{
            type:Boolean,
            default:false
        },
    },
    provide(){
        return {
            route: this.route
        }
    },
    
});

// CONCATENATED MODULE: ./packages/menu/src/Menu.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_Menuvue_type_script_lang_js_ = (Menuvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/menu/src/Menu.vue





/* normalize component */

var Menu_component = normalizeComponent(
  src_Menuvue_type_script_lang_js_,
  Menuvue_type_template_id_6ee21e5c_render,
  Menuvue_type_template_id_6ee21e5c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Menu = (Menu_component.exports);
// CONCATENATED MODULE: ./packages/menu/index.js

Menu.install=function(Vue){
    Vue.component(Menu.name,Color)
}
/* harmony default export */ var menu = (Menu);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"761a4670-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/menu-group/src/MenuGroup.vue?vue&type=template&id=ad91875a&scoped=true&
var MenuGroupvue_type_template_id_ad91875a_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"yun-menu-group"},[_c('div',{staticClass:"yun-menu-group-title",on:{"click":function($event){$event.stopPropagation();return _vm.showMenuGroup.apply(null, arguments)}}},[_vm._t("title")],2),_c('div',{staticClass:"yun-menu-group-content",class:{"show-group":_vm.showflag}},[_vm._t("default")],2)])}
var MenuGroupvue_type_template_id_ad91875a_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./packages/menu-group/src/MenuGroup.vue?vue&type=template&id=ad91875a&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/menu-group/src/MenuGroup.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var MenuGroupvue_type_script_lang_js_ = ({
  name: "yun-menu-group",
  data() {
    return {
        showflag:false
    };
  },
  methods:{
      showMenuGroup(){
        this.showflag = !this.showflag
      }
  }
});

// CONCATENATED MODULE: ./packages/menu-group/src/MenuGroup.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_MenuGroupvue_type_script_lang_js_ = (MenuGroupvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/menu-group/src/MenuGroup.vue?vue&type=style&index=0&id=ad91875a&lang=scss&scoped=true&
var MenuGroupvue_type_style_index_0_id_ad91875a_lang_scss_scoped_true_ = __webpack_require__("e872");

// CONCATENATED MODULE: ./packages/menu-group/src/MenuGroup.vue






/* normalize component */

var MenuGroup_component = normalizeComponent(
  src_MenuGroupvue_type_script_lang_js_,
  MenuGroupvue_type_template_id_ad91875a_scoped_true_render,
  MenuGroupvue_type_template_id_ad91875a_scoped_true_staticRenderFns,
  false,
  null,
  "ad91875a",
  null
  
)

/* harmony default export */ var MenuGroup = (MenuGroup_component.exports);
// CONCATENATED MODULE: ./packages/menu-group/index.js

MenuGroup.install=function(Vue){
    Vue.component(MenuGroup.name,Color)
}
/* harmony default export */ var menu_group = (MenuGroup);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"761a4670-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/menu-item/src/MenuItem.vue?vue&type=template&id=7ea5b912&scoped=true&
var MenuItemvue_type_template_id_7ea5b912_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"yun-menu-item",style:(("background:" + _vm.menuColor))},[(_vm.route)?[_c('router-link',{attrs:{"to":_vm.path}},[_vm._t("default")],2)]:[_vm._t("default")]],2)}
var MenuItemvue_type_template_id_7ea5b912_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./packages/menu-item/src/MenuItem.vue?vue&type=template&id=7ea5b912&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/menu-item/src/MenuItem.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var MenuItemvue_type_script_lang_js_ = ({
    name:"yun-menu-item",
    inject: [ "route" ],
    props:{
        path:{
            type:String,
            default:null
        },
        menuColor:{
            type:String,
            default:'#33CCFF'
        },
    }
});

// CONCATENATED MODULE: ./packages/menu-item/src/MenuItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_MenuItemvue_type_script_lang_js_ = (MenuItemvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/menu-item/src/MenuItem.vue?vue&type=style&index=0&id=7ea5b912&lang=scss&scoped=true&
var MenuItemvue_type_style_index_0_id_7ea5b912_lang_scss_scoped_true_ = __webpack_require__("c9ef");

// CONCATENATED MODULE: ./packages/menu-item/src/MenuItem.vue






/* normalize component */

var MenuItem_component = normalizeComponent(
  src_MenuItemvue_type_script_lang_js_,
  MenuItemvue_type_template_id_7ea5b912_scoped_true_render,
  MenuItemvue_type_template_id_7ea5b912_scoped_true_staticRenderFns,
  false,
  null,
  "7ea5b912",
  null
  
)

/* harmony default export */ var MenuItem = (MenuItem_component.exports);
// CONCATENATED MODULE: ./packages/menu-item/index.js

MenuItem.install=function(Vue){
    Vue.component(MenuItem.name,Color)
}
/* harmony default export */ var menu_item = (MenuItem);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"761a4670-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/animation/src/Animation.vue?vue&type=template&id=cfe98ad8&
var Animationvue_type_template_id_cfe98ad8_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"yun-animation",class:_vm.$attrs.class},[(_vm.event == 'hover')?_c('div',{staticClass:"yun-animation-block",style:(_vm.animationFlag ? _vm.animationStyle : ''),on:{"mouseover":_vm.mouseoverEvent,"mouseleave":_vm.mouseleaveEvent}},[_vm._t("default")],2):(_vm.event == 'click')?_c('div',{staticClass:"yun-animation-block",style:(_vm.animationFlag ? _vm.animationStyle : ''),on:{"click":_vm.clickEvet}},[_vm._t("default")],2):_c('div',{staticClass:"yun-animation-block",style:(_vm.animationStyle)},[_vm._t("default")],2)])}
var Animationvue_type_template_id_cfe98ad8_staticRenderFns = []


// CONCATENATED MODULE: ./packages/animation/src/Animation.vue?vue&type=template&id=cfe98ad8&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/animation/src/Animation.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Animationvue_type_script_lang_js_ = ({
  name: "yun-animation",
  props: {
    name: {
      type: String,
      default: "",
    },
    event: {
      type: String,
      default: "",
    },
    infinite: {
      type: Boolean,
      default: false,
    },
    duration: {
      type: [String, Number],
      default: 2,
    },
    delay: {
      type: [String, Number],
      default: 0,
    },
    count: {
      type: [String, Number],
      default: 2,
    },
    animationType: {
      type: [String],
      default: "ease-in-out",
    },
  },
  computed: {
    animationStyle: function () {
      let animateStyle = `animation-name: yun-${this.name};animation-duration: ${this.duration}s;animation-delay: ${this.delay}s;animation-iteration-count: ${this.count};animation-timing-function: ${this.animationType};`;
      return animateStyle;
    },
  },
  data() {
    return {
      animationFlag: false,
    };
  },
  methods: {
    mouseoverEvent() {
      this.animationFlag = true;
    },
    mouseleaveEvent() {
      this.animationFlag = false;
    },
    clickEvet() {
      this.animationFlag = !this.animationFlag;
    },
  },
});

// CONCATENATED MODULE: ./packages/animation/src/Animation.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_Animationvue_type_script_lang_js_ = (Animationvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/animation/src/Animation.vue?vue&type=style&index=0&lang=scss&
var Animationvue_type_style_index_0_lang_scss_ = __webpack_require__("65a4");

// CONCATENATED MODULE: ./packages/animation/src/Animation.vue






/* normalize component */

var Animation_component = normalizeComponent(
  src_Animationvue_type_script_lang_js_,
  Animationvue_type_template_id_cfe98ad8_render,
  Animationvue_type_template_id_cfe98ad8_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Animation = (Animation_component.exports);
// CONCATENATED MODULE: ./packages/animation/index.js


Animation.install=function(Vue){
    Vue.component(Animation.name,Animation)
}
/* harmony default export */ var animation = (Animation);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"761a4670-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/thunder-ball/src/Thunderball.vue?vue&type=template&id=fa94b08a&scoped=true&
var Thunderballvue_type_template_id_fa94b08a_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"yun-thunder-ball",style:(("width:" + _vm.width + "px;height:" + _vm.height + "px;box-shadow: 0 0 20px " + _vm.shadowColor + " inset;"))},[_c('canvas',{ref:"canvas",attrs:{"width":_vm.width,"height":_vm.height}})])}
var Thunderballvue_type_template_id_fa94b08a_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./packages/thunder-ball/src/Thunderball.vue?vue&type=template&id=fa94b08a&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/thunder-ball/src/Thunderball.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//

/* harmony default export */ var Thunderballvue_type_script_lang_js_ = ({
  name:'yun-thunder-ball',
  props: {
    width:{
        type:[String,Number],
        default:200
    },
    height:{
        type:[String,Number],
        default:200
    },
    lineWidth:{
        type:[String,Number],
        default:2
    },
    count:{
        type:Number,
        default:100
    },
    shadowColor:{
        type:String,
        default:'#1cf3f3'
    },
    linecolor:{
      type:String,
      default:'#1cf3f3'
    },
    lineHeight:{
      type:Number,
      default:1000
    },
    speed:{
      type:Number,
      default:2
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initCanvas()
    });
  },
  methods: {
    initCanvas() {
      var canvas = this.$refs.canvas;
      var ctx = canvas.getContext("2d");
      let _this =this;
      var RAF = (function () {
        return (
          window.requestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          window.oRequestAnimationFrame ||
          window.msRequestAnimationFrame ||
          function (callback) {
            window.setTimeout(callback, 1000);
          }
        );
      })();
      // 鼠标活动时，获取鼠标坐标
      var warea = { x: null, y: null, max: 2000 };
      // 添加粒子
      // x，y为粒子坐标，xa, ya为粒子xy轴加速度，max为连线的最大距离
      var dots = [];
      for (var i = 0; i < this.count; i++) {
        var x = Math.random() * canvas.width;
        var y = Math.random() * canvas.height;
        var xa = Math.random() * this.speed - 1;
        var ya = Math.random() * this.speed - 1;
        dots.push({
          x: x,
          y: y,
          xa: xa,
          ya: ya,
          max: this.lineHeight,
        });
      }
      // 延迟100秒开始执行动画，如果立即执行有时位置计算会出错
      setTimeout(function () {
        animate();
      }, 100);
      // 每一帧循环的逻辑
      function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // 将鼠标坐标添加进去，产生一个用于比对距离的点数组
        var ndots = [warea].concat(dots);
        dots.forEach((dot) =>{
          // 粒子位移
          dot.x += dot.xa;
          dot.y += dot.ya;
          // 遇到边界将加速度反向
          dot.xa *= dot.x > canvas.width || dot.x < 0 ? -1 : 1;
          dot.ya *= dot.y > canvas.height || dot.y < 0 ? -1 : 1;
          // 绘制点
          ctx.fillRect(dot.x - 0.2, dot.y - 0.2, 0, 0);
          // 循环比对粒子间的距离
          for (var i = 0; i < ndots.length; i++) {
            var d2 = ndots[i];
            if (dot === d2 || d2.x === null || d2.y === null) continue;
            var xc = dot.x - d2.x;
            var yc = dot.y - d2.y;
            // 两个粒子之间的距离
            var dis = xc * xc + yc * yc;
            // 距离比
            var ratio;
            // 如果两个粒子之间的距离小于粒子对象的max值，则在两个粒子间画线
            if (dis < d2.max) {
              // 如果是鼠标，则让粒子向鼠标的位置移动
              if (d2 === warea && dis > d2.max / 2) {
                dot.x -= xc * 0.03;
                dot.y -= yc * 0.03;
              }
              // 计算距离比
              ratio = (d2.max - dis) / d2.max;
              // 画线
              ctx.beginPath();
              ctx.lineWidth = ratio / _this.lineWidth;
              ctx.strokeStyle = "rgba("+_this.setcolor(_this.linecolor)+"," + (ratio + 0.1) + ")";
              ctx.moveTo(dot.x, dot.y);
              ctx.lineTo(d2.x, d2.y);
              ctx.stroke();
            }
          }
          // 将已经计算过的粒子从数组中删除
          ndots.splice(ndots.indexOf(dot), 1);
        });
        RAF(animate);
      }
    },
    setcolor(sColor){
      
      sColor = sColor.toLowerCase();
      //十六进制颜色值的正则表达式
      var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
      // 如果是16进制颜色
      if (sColor && reg.test(sColor)) {
          if (sColor.length === 4) {
              var sColorNew = "#";
              for (var i=1; i<4; i+=1) {
                  sColorNew += sColor.slice(i, i+1).concat(sColor.slice(i, i+1));    
              }
              sColor = sColorNew;
          }
          //处理六位的颜色值
          var sColorChange = [];
          for (var i=1; i<7; i+=2) {
              sColorChange.push(parseInt("0x"+sColor.slice(i, i+2)));    
          }
          return sColorChange.join(",");
      }
      return sColor;
  }
  },
});

// CONCATENATED MODULE: ./packages/thunder-ball/src/Thunderball.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_Thunderballvue_type_script_lang_js_ = (Thunderballvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/thunder-ball/src/Thunderball.vue?vue&type=style&index=0&id=fa94b08a&scoped=true&lang=css&
var Thunderballvue_type_style_index_0_id_fa94b08a_scoped_true_lang_css_ = __webpack_require__("4e42");

// CONCATENATED MODULE: ./packages/thunder-ball/src/Thunderball.vue






/* normalize component */

var Thunderball_component = normalizeComponent(
  src_Thunderballvue_type_script_lang_js_,
  Thunderballvue_type_template_id_fa94b08a_scoped_true_render,
  Thunderballvue_type_template_id_fa94b08a_scoped_true_staticRenderFns,
  false,
  null,
  "fa94b08a",
  null
  
)

/* harmony default export */ var Thunderball = (Thunderball_component.exports);
// CONCATENATED MODULE: ./packages/thunder-ball/index.js

Thunderball.install=function(Vue){
    Vue.component(Thunderball.name,Thunderball)
}
/* harmony default export */ var thunder_ball = (Thunderball);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"761a4670-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/water/src/Water.vue?vue&type=template&id=e4462e6e&scoped=true&
var Watervue_type_template_id_e4462e6e_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"yun-water",class:["yun-water-"+_vm.type,_vm.$attrs.class],style:(("width:" + _vm.width + "px;height:" + _vm.height + "px; border-radius:" + _vm.waterRadius + ";box-shadow: 0 0 8px " + _vm.shadowColor + " inset;"))},[_c('div',{staticClass:"yun-water-number"},[_vm._t("default")],2),_c('div',{staticClass:"yun-water-content",style:(("border-radius:" + _vm.radius))},[_c('div',{staticClass:"yun-water-heavy",style:(("top:" + (90-_vm.number) + "%;background:" + (_vm.waterColor&&_vm.waterColor[0])))}),_c('div',{staticClass:"yun-water-light",style:(("top:" + (100-_vm.number) + "%;background:" + (_vm.waterColor&&_vm.waterColor[1])))})])])}
var Watervue_type_template_id_e4462e6e_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./packages/water/src/Water.vue?vue&type=template&id=e4462e6e&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/water/src/Water.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Watervue_type_script_lang_js_ = ({
    name:'yun-water',
    props:{
      width:{
          type:[Number,String],
          default:20
      },
      height:{
          type:[Number,String],
          default:20
      },
      number:{
          type:[Number,String],
          default:50
      },
      radius:{
           type:[Number,String],
          default:'50%'
      },
      shadowColor:{
        type:String,
        default:'#0cffff'
      },
      waterColor:{
        type:String,
        default:()=>{
          return ['#1cf3f3','#0cffffee']
        }
      },
      type:{
          type:String,
          default:'default'
      }
    },
    computed:{
        waterRadius:function(){
            let wraduis = this.radius
            if(this.type=='drop'){
                wraduis = `6px ${this.width*1.5}px ${this.width}px ${this.width*1.5}px`
            }
            return wraduis
        }
    },
  data() {
    return {
      
    };
  },
  mounted() {
    
  },
  methods: {
   
  },
});

// CONCATENATED MODULE: ./packages/water/src/Water.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_Watervue_type_script_lang_js_ = (Watervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/water/src/Water.vue?vue&type=style&index=0&id=e4462e6e&lang=scss&scoped=true&
var Watervue_type_style_index_0_id_e4462e6e_lang_scss_scoped_true_ = __webpack_require__("f3ee");

// CONCATENATED MODULE: ./packages/water/src/Water.vue






/* normalize component */

var Water_component = normalizeComponent(
  src_Watervue_type_script_lang_js_,
  Watervue_type_template_id_e4462e6e_scoped_true_render,
  Watervue_type_template_id_e4462e6e_scoped_true_staticRenderFns,
  false,
  null,
  "e4462e6e",
  null
  
)

/* harmony default export */ var Water = (Water_component.exports);
// CONCATENATED MODULE: ./packages/water/index.js


Water.install=function(Vue){
    Vue.component(Water.name,Water)
}
/* harmony default export */ var water = (Water);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"761a4670-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/border/src/Border.vue?vue&type=template&id=28ccc9a7&scoped=true&
var Bordervue_type_template_id_28ccc9a7_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"yun-border",class:[_vm.$attrs.class, 'yun-boder-' + _vm.name],style:(("border-color:" + _vm.color + ";border-width:" + _vm.width + "px;border-style:" + _vm.type + ";border-radius:" + _vm.radius + ";color:" + _vm.color))},[_c('div',{staticClass:"yun-border-line",style:(("border-radius:" + _vm.radius + ";"))}),_c('div',{staticClass:"yun-border-line",style:(("border-radius:" + _vm.radius + ";"))}),_c('div',{staticClass:"yun-border-line",style:(("border-radius:" + _vm.radius + ";"))}),_c('div',{staticClass:"yun-border-line",style:(("border-radius:" + _vm.radius + ";"))}),_vm._t("default")],2)}
var Bordervue_type_template_id_28ccc9a7_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./packages/border/src/Border.vue?vue&type=template&id=28ccc9a7&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/border/src/Border.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Bordervue_type_script_lang_js_ = ({
  name: "yun-border",
  props: {
    name: {
      type: String,
      default: "default",
    },
    type: {
      type: String,
      default: "solid",
    },
    radius: {
      type: [Number, String],
      default: 0,
    },
    width: {
      type: [Number, String],
      default: 2,
    },
    color: {
      type: String,
      default: "#efefef",
    },
  },
  data() {
    return {};
  },
  methods: {},
});

// CONCATENATED MODULE: ./packages/border/src/Border.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_Bordervue_type_script_lang_js_ = (Bordervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/border/src/Border.vue?vue&type=style&index=0&id=28ccc9a7&scoped=true&lang=scss&
var Bordervue_type_style_index_0_id_28ccc9a7_scoped_true_lang_scss_ = __webpack_require__("140d");

// CONCATENATED MODULE: ./packages/border/src/Border.vue






/* normalize component */

var Border_component = normalizeComponent(
  src_Bordervue_type_script_lang_js_,
  Bordervue_type_template_id_28ccc9a7_scoped_true_render,
  Bordervue_type_template_id_28ccc9a7_scoped_true_staticRenderFns,
  false,
  null,
  "28ccc9a7",
  null
  
)

/* harmony default export */ var Border = (Border_component.exports);
// CONCATENATED MODULE: ./packages/border/index.js


Border.install=function(Vue){
    Vue.component(Border.name,Border)
}

/* harmony default export */ var border = (Border);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"761a4670-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/text/src/Text.vue?vue&type=template&id=6487a802&scoped=true&
var Textvue_type_template_id_6487a802_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"yun-texts",class:[_vm.$attrs.class]},[(_vm.name=='animation-order')?_c('div',{staticClass:"yun-text",class:['yun-text-'+_vm.name],style:(("transform: skew(" + _vm.skew + "deg);"))},_vm._l((_vm.text),function(word,index){return _c('span',{key:index,staticClass:"yun-text-span",style:(("color:" + _vm.color + ";font-size:" + _vm.size + "px;"))},[_vm._v(_vm._s(word))])}),0):(_vm.name=='animation-beat')?_c('div',{staticClass:"yun-text",class:['yun-text-'+_vm.name],style:(("transform: skew(" + _vm.skew + "deg);"))},_vm._l((_vm.text),function(word,index){return _c('span',{key:index,staticClass:"yun-text-span",style:(("color:" + _vm.color + ";font-size:" + _vm.size + "px;"))},[_vm._v(_vm._s(word))])}),0):_c('div',{staticClass:"yun-text",class:['yun-text-'+_vm.name],style:(("color:" + _vm.color + ";font-size:" + _vm.size + "px;transform: skew(" + _vm.skew + "deg);"))},[_vm._t("default")],2)])}
var Textvue_type_template_id_6487a802_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./packages/text/src/Text.vue?vue&type=template&id=6487a802&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/text/src/Text.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Textvue_type_script_lang_js_ = ({
    name:'yun-text',
    props:{
        name:{
            type:String,
            default:"default"
        },
        color:{
            type:String,
            default:"#fff"
        },
        size:{
            type:[String,Number],
            default:14
        },
        skew:{
            type:[String,Number],
            default:-20
        }
    },
    computed:{
        textStyle:function(){

        }
    },
    data() {
        return {
            text:''
        };
    },
    created() {
        if(this.$slots.default){
            this.text=this.$slots.default[0].text
        }
    },
    mounted() {
        this.$nextTick(()=>{
           if(this.name=='animation-order'){
               let words = document.querySelectorAll('.yun-text-animation-order .yun-text-span');
               console.log(words);
                [...words].forEach((word,index)=>{
                    setTimeout(()=>{
                        word.style.bottom= 0;
                        word.style.opacity= 1;
                        word.style.visibility= 'visible';
                    },index*200)
                    
                })
           }
           
        })
    },
    methods: {

    }
});

// CONCATENATED MODULE: ./packages/text/src/Text.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_Textvue_type_script_lang_js_ = (Textvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/text/src/Text.vue?vue&type=style&index=0&id=6487a802&scoped=true&lang=scss&
var Textvue_type_style_index_0_id_6487a802_scoped_true_lang_scss_ = __webpack_require__("767d");

// CONCATENATED MODULE: ./packages/text/src/Text.vue






/* normalize component */

var Text_component = normalizeComponent(
  src_Textvue_type_script_lang_js_,
  Textvue_type_template_id_6487a802_scoped_true_render,
  Textvue_type_template_id_6487a802_scoped_true_staticRenderFns,
  false,
  null,
  "6487a802",
  null
  
)

/* harmony default export */ var Text = (Text_component.exports);
// CONCATENATED MODULE: ./packages/text/index.js

Text.install = function(Vue){
    Vue.component(Text.name,Text)
}
/* harmony default export */ var packages_text = (Text);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"761a4670-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/scroll/src/Scroll.vue?vue&type=template&id=0f83b194&scoped=true&
var Scrollvue_type_template_id_0f83b194_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:("yuniScroll" + _vm.scrollId),staticClass:"yuni-scroll"},[_c('div',{ref:_vm.scrollId+"box",staticClass:"yuni-scroll-cont",class:{'scroll-inline':_vm.direction=='inline'},style:(("height:" + _vm.height + "px;width:" + _vm.scrollboxW + "px")),on:{"mouseenter":_vm.mouseEnterEvent,"mouseleave":_vm.mouseleaveEevent}},[_c('div',{ref:_vm.scrollId+"cont"},[_vm._t("default")],2),_c('div',{domProps:{"innerHTML":_vm._s(_vm.cphtml)}})])])}
var Scrollvue_type_template_id_0f83b194_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./packages/scroll/src/Scroll.vue?vue&type=template&id=0f83b194&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/scroll/src/Scroll.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//

/* harmony default export */ var Scrollvue_type_script_lang_js_ = ({
    name:'yun-scroll',
    props:{
        step:{
            type:[Number,String],
            default:1
        },
        height:{
            type:[Number,String],
            default:300
        },
        direction:{
            type:String,
            default:'vertical' //inline
        },
        scrollId:{
            type:String,
            default:'scroll0'
        },
        
    },
    data(){
        return {
            tempInterval:null,
            cphtml:null,
            scrollT:0,
            scrollboxW:0,
            scrollboxH:0,
            moveTep:2,
            htmlshow:false,
        }
    },
    mounted(){
        this.$nextTick(()=>{
             this.cphtml = this.$refs[this.scrollId+'cont'].innerHTML;
             this.tempInterval = setInterval(this.scrollEvent, this.step);
             this.scrollboxW=this.$refs[`yuniScroll${this.scrollId}`].offsetWidth
        })
    },
    methods:{
        scrollEvent(){
            let boxH = this.$refs[this.scrollId+'cont'].offsetHeight;
            let boxW = this.$refs[this.scrollId+'cont'].offsetWidth;
            if(this.direction=='inline'){
                if(Math.abs(this.scrollT)>= boxW){
                    this.scrollT = 0 
                }
                this.scrollT-= this.moveTep
               
                this.$refs[this.scrollId+'box'].style.transform = "translateX(" + this.scrollT + "px)";
            }else{
                if(Math.abs(this.scrollT)>= boxH){
                    this.scrollT = 0 
                }
                this.scrollT-= this.moveTep
                this.$refs[this.scrollId+'box'].style.transform = "translateY(" + this.scrollT + "px)";
            }
            
        },
        mouseEnterEvent(){
             clearInterval(this.tempInterval);
             if(this.direction == 'vertical'){
                 
                 this.$refs[`yuniScroll${this.scrollId}`].style.overflowY = 'auto'
             }else{
                  this.$refs[`yuniScroll${this.scrollId}`].style.overflowX = 'auto'
             }
        },
        mouseleaveEevent(){
            this.scrollT = 0;
            if(this.direction == 'vertical'){
                this.$refs[`yuniScroll${this.scrollId}`].style.overflowY = 'hidden'
             }else{
                this.$refs[`yuniScroll${this.scrollId}`].style.overflowX = 'hidden'
             }
            this.tempInterval = setInterval(this.scrollEvent, this.step);
            
        }
    },
    computed:{

    },
    destroyed() {
        clearInterval(this.tempInterval);
    },
    
});

// CONCATENATED MODULE: ./packages/scroll/src/Scroll.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_Scrollvue_type_script_lang_js_ = (Scrollvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/scroll/src/Scroll.vue?vue&type=style&index=0&id=0f83b194&lang=scss&scoped=true&
var Scrollvue_type_style_index_0_id_0f83b194_lang_scss_scoped_true_ = __webpack_require__("5ca5");

// CONCATENATED MODULE: ./packages/scroll/src/Scroll.vue






/* normalize component */

var Scroll_component = normalizeComponent(
  src_Scrollvue_type_script_lang_js_,
  Scrollvue_type_template_id_0f83b194_scoped_true_render,
  Scrollvue_type_template_id_0f83b194_scoped_true_staticRenderFns,
  false,
  null,
  "0f83b194",
  null
  
)

/* harmony default export */ var Scroll = (Scroll_component.exports);
// CONCATENATED MODULE: ./packages/scroll/index.js

Scroll.install = function(Vue){
    Vue.component(Scroll.name,Scroll)
}
/* harmony default export */ var packages_scroll = (Scroll);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"761a4670-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/galaxy/src/Galaxy.vue?vue&type=template&id=34ec3cdd&scoped=true&
var Galaxyvue_type_template_id_34ec3cdd_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"yun-galaxy",class:_vm.$attrs.class,style:(("width:" + _vm.width + "px;height:" + _vm.height + "px;"))},[_c('div',{staticClass:"yun-galaxy-conent"},[_c('div',{staticClass:"yun-galaxy-center",style:(("transform: translate(-50%, -50%) translateZ(" + (_vm.width/2) + "px);"))},[_vm._t("center")],2),_c('div',{staticClass:"yun-galaxy-disc"},[_vm._t("disc")],2),_c('ul',{ref:"starsSet",staticClass:"yun-galaxy-track",style:(("width:" + _vm.itemW + "px;height:" + _vm.itemH + "px;"))},_vm._l((_vm.stars),function(star,index){return _c('li',{key:index,staticClass:"yun-galaxy-star",style:(("width:" + _vm.itemW + "px;height:" + _vm.itemH + "px;"))},[_c('a',{attrs:{"href":star.url?star.url:'javascript:;'}},[(star.img)?_c('img',{attrs:{"src":star.img,"alt":""}}):_vm._e()])])}),0)])])}
var Galaxyvue_type_template_id_34ec3cdd_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./packages/galaxy/src/Galaxy.vue?vue&type=template&id=34ec3cdd&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/galaxy/src/Galaxy.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Galaxyvue_type_script_lang_js_ = ({
  name: "yun-galaxy",
  props: {
    stars: {
      type: Array,
      default: () => {
        return [];
      },
    },
    width: {
      type: [Number, String],
      default: 450,
    },
    height: {
      type: [Number, String],
      default: 500,
    },
    itemW: {
      type: [Number, String],
      default: 50,
    },
    itemH: {
      type: [Number, String],
      default: 50,
    },
  },
  data() {
    return {};
  },
  created(){
    this.$nextTick(()=>{
      let stars = this.$refs.starsSet.getElementsByClassName('yun-galaxy-star');
      let starLen = this.stars.length;
      let degUnit = 360/starLen;
      [...stars].forEach((dom,index)=>{
        dom.style.transform = `rotateY(${degUnit*(index+1)}deg) translateZ(${(this.width-this.itemW)/2}px) translateY(${this.itemH}px)`
        let doma = dom.getElementsByTagName("a")[0];
        doma.animate([
            { transform: `rotateY(-${degUnit*(index+1)}deg) `}, 
            { transform: `rotateY(-${degUnit*(index+1)+360}deg) ` }
        ], { 
            duration: 12000,
            iterations: Infinity
        });
      })
    })
  },
  methods: {},
});

// CONCATENATED MODULE: ./packages/galaxy/src/Galaxy.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_Galaxyvue_type_script_lang_js_ = (Galaxyvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/galaxy/src/Galaxy.vue?vue&type=style&index=0&id=34ec3cdd&lang=scss&scoped=true&
var Galaxyvue_type_style_index_0_id_34ec3cdd_lang_scss_scoped_true_ = __webpack_require__("95bd");

// CONCATENATED MODULE: ./packages/galaxy/src/Galaxy.vue






/* normalize component */

var Galaxy_component = normalizeComponent(
  src_Galaxyvue_type_script_lang_js_,
  Galaxyvue_type_template_id_34ec3cdd_scoped_true_render,
  Galaxyvue_type_template_id_34ec3cdd_scoped_true_staticRenderFns,
  false,
  null,
  "34ec3cdd",
  null
  
)

/* harmony default export */ var Galaxy = (Galaxy_component.exports);
// CONCATENATED MODULE: ./packages/galaxy/index.js


Galaxy.install=function(Vue){
    Vue.component(Galaxy.name,Galaxy)
}
/* harmony default export */ var galaxy = (Galaxy);
// CONCATENATED MODULE: ./packages/index.js














const components = [
    packages_button,
    tab,
    tab_plan,
    color,
    menu,
    menu_group,
    menu_item,
    animation,
    thunder_ball,
    water,
    border,
    packages_text,
    packages_scroll,
    galaxy
]
const install = function(Vue){
    if(install.installed) return
    components.map(component=>Vue.component(component.name,component))
}
if(typeof window !== 'undefined' && window.Vue){
    install(window.Vue)
}
/* harmony default export */ var packages_0 = ({
    install,
    Button: packages_button,
    Tab: tab,
    TabPlan: tab_plan,
    Color: color,
    Menu: menu,
    MenuGroup: menu_group,
    MenuItem: menu_item,
    Animation: animation,
    Thunderball: thunder_ball,
    Water: water,
    Border: border,
    Text: packages_text,
    Scroll: packages_scroll,
    Galaxy: galaxy
});
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (packages_0);



/***/ })

/******/ });
});
//# sourceMappingURL=silky.umd.js.map