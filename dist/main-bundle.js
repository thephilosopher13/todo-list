"use strict";
(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/styles.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/styles.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
    margin: 0;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center; 
    justify-content: space-between; 
    font-family: 'Roboto', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 16px;
}

#content {
    display: grid;
    grid-template-columns: auto 7fr;
    height: 100%;
    width: 100%;
    flex-grow: 1;
}

header, footer {
    background-color: #226ce0;
    width: 100%
}

h1 {
    font-size: 2.5rem;
    padding: 1rem;
    padding-left: 2rem;
}

footer {
    text-align: center;
}

.homeNav {
    grid-area: 1 / 1 / 2 / 2;
    background-color: #1B1725;
    color: #f5f5f5;
    padding: 3rem;
    display: flex;
    flex-direction: column;
}

.default-buttons-div {
    display: flex;
    flex-direction: column
}

#contentDisplay {
    background-color: #D0BCD5;
}

h2 {
    font-size: 2rem
}

.default-buttons-div > button {
    color: #f5f5f5;
    background-color: #1B1725;
    border: none;
    text-align: left;
    font-size: 1.75rem;
    padding: 1rem
}

.newItem {
    color: #f5f5f5;
    background-color: #D0BCD5;
    border: none;
    border-radius: 20%;
    text-align: left;
    font-size: 1.75rem;
    padding: 1rem;
    bottom: 10;
    margin-top: auto;
    align-self: flex-start;
}

.modal {
    display: none; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
  }

#modalcontent {
    background-color: #fefefe;
    padding: 20px;
    border: 1px solid #888;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: inline-block;
}`, "",{"version":3,"sources":["webpack://./src/css/styles.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,iBAAiB;IACjB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,8BAA8B;IAC9B,6JAA6J;IAC7J,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,+BAA+B;IAC/B,YAAY;IACZ,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,yBAAyB;IACzB;AACJ;;AAEA;IACI,iBAAiB;IACjB,aAAa;IACb,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,wBAAwB;IACxB,yBAAyB;IACzB,cAAc;IACd,aAAa;IACb,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb;AACJ;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI;AACJ;;AAEA;IACI,cAAc;IACd,yBAAyB;IACzB,YAAY;IACZ,gBAAgB;IAChB,kBAAkB;IAClB;AACJ;;AAEA;IACI,cAAc;IACd,yBAAyB;IACzB,YAAY;IACZ,kBAAkB;IAClB,gBAAgB;IAChB,kBAAkB;IAClB,aAAa;IACb,UAAU;IACV,gBAAgB;IAChB,sBAAsB;AAC1B;;AAEA;IACI,aAAa,EAAE,sBAAsB;IACrC,eAAe,EAAE,kBAAkB;IACnC,UAAU,EAAE,eAAe;IAC3B,OAAO;IACP,MAAM;IACN,WAAW,EAAE,eAAe;IAC5B,YAAY,EAAE,gBAAgB;IAC9B,cAAc,EAAE,4BAA4B;IAC5C,4BAA4B,EAAE,mBAAmB;IACjD,iCAAiC,EAAE,qBAAqB;EAC1D;;AAEF;IACI,yBAAyB;IACzB,aAAa;IACb,sBAAsB;IACtB,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,gCAAgC;IAChC,qBAAqB;AACzB","sourcesContent":["body {\n    margin: 0;\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n    align-items: center; \n    justify-content: space-between; \n    font-family: 'Roboto', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    font-size: 16px;\n}\n\n#content {\n    display: grid;\n    grid-template-columns: auto 7fr;\n    height: 100%;\n    width: 100%;\n    flex-grow: 1;\n}\n\nheader, footer {\n    background-color: #226ce0;\n    width: 100%\n}\n\nh1 {\n    font-size: 2.5rem;\n    padding: 1rem;\n    padding-left: 2rem;\n}\n\nfooter {\n    text-align: center;\n}\n\n.homeNav {\n    grid-area: 1 / 1 / 2 / 2;\n    background-color: #1B1725;\n    color: #f5f5f5;\n    padding: 3rem;\n    display: flex;\n    flex-direction: column;\n}\n\n.default-buttons-div {\n    display: flex;\n    flex-direction: column\n}\n\n#contentDisplay {\n    background-color: #D0BCD5;\n}\n\nh2 {\n    font-size: 2rem\n}\n\n.default-buttons-div > button {\n    color: #f5f5f5;\n    background-color: #1B1725;\n    border: none;\n    text-align: left;\n    font-size: 1.75rem;\n    padding: 1rem\n}\n\n.newItem {\n    color: #f5f5f5;\n    background-color: #D0BCD5;\n    border: none;\n    border-radius: 20%;\n    text-align: left;\n    font-size: 1.75rem;\n    padding: 1rem;\n    bottom: 10;\n    margin-top: auto;\n    align-self: flex-start;\n}\n\n.modal {\n    display: none; /* Hidden by default */\n    position: fixed; /* Stay in place */\n    z-index: 1; /* Sit on top */\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    overflow: auto; /* Enable scroll if needed */\n    background-color: rgb(0,0,0); /* Fallback color */\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\n  }\n\n#modalcontent {\n    background-color: #fefefe;\n    padding: 20px;\n    border: 1px solid #888;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    display: inline-block;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */
function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument);

  // Clone the date
  if (argument instanceof Date || (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(argument) === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments");
      // eslint-disable-next-line no-console
      console.warn(new Error().stack);
    }
    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/css/styles.css":
/*!****************************!*\
  !*** ./src/css/styles.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_userinterface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/userinterface */ "./src/modules/userinterface.js");
/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/styles.css */ "./src/css/styles.css");



(0,_modules_userinterface__WEBPACK_IMPORTED_MODULE_0__["default"])();



/***/ }),

/***/ "./src/modules/project.js":
/*!********************************!*\
  !*** ./src/modules/project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/*

PROJECT MODULE 
1. create a project object factory with the following properties (this one is a STRUCTURER):
1.1. title, with a value being the name of the project
1.2. item1, item2, item3 .... with the value being a to-do object
2. create an addEventListener on edit/create task that does the ff:
2.1. check the inProject input/value
2.2. searches for the project property "title" with the same value
2.3. pushes the object as the value of item 
3. deleteObject that takes the project out of the project array

*/

const projectModule = (() => {

    const _projectArray = [

        //inbox is a sort of "default" project for tasks not put in other projects
        { 
            title : 'Inbox',
            taskList : []
        }

    ]

    const projectFactory = (title) => {

        let taskList = []

        const getTasklist = () => {
            return taskList
        }

        return { title, taskList }
    }

    const getProjectArray = () => {
        return _projectArray
    }

    return {
        getProjectArray,
        projectFactory
    }
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectModule);

/***/ }),

/***/ "./src/modules/task.js":
/*!*****************************!*\
  !*** ./src/modules/task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/modules/project.js");



/* 

TASK MODULE

2. have two "filter" functions that filter for the ff. values in "duedate":
2.1. "due tomorrow"
2.2. "due this week"
3. another "filter" function that searches for completed tasks
4. another "filter function that searches for the inProject item and looks for all items in a certain project
5. editTask function
6. deleteTask function (put an are you sure popup to this)
7. getTaskDetails function  that does the ff:
7.1. "get" the task details from the object in the array
7.2. displays them in a popUp div
8. an addEventListener that does the ff. on 'click':
8.1. "get" details from form
8.2. turn them into an object and push into toDoListArray

*/

const taskModule = (() => {
    const _taskArray = []

    const taskFactory = (title, dueDate, priority, inProject) => {

        let isAccomplished = false;

        const deleteTask = () => {
            const index = _taskArray.indexOf(undefined);
            if (index !== -1) {
                _taskArray.splice(index, 1);
                console.log(_taskArray)
            }
        }
        
        const projectArray = _project__WEBPACK_IMPORTED_MODULE_0__["default"].getProjectArray;

        const linkTaskToProject = () => {
            const matchingProject = projectArray.find(project => project.title === inProject);
            if (matchingProject) {
              if (!matchingProject.task) {
                matchingProject.task = [];
              }
              matchingProject.task.push(task);
            }
          };


        return { title, dueDate, priority, isAccomplished, inProject }
    }

    const getTaskArray = () => {
      return _taskArray
    }

    const taskArrayFilter = (property, desiredPropertyValue) => {
      const filteredArray = _taskArray.filter((item) => item[property] === desiredPropertyValue);
      return filteredArray
    }
    
    return {
      taskFactory,
      getTaskArray,
      taskArrayFilter
    }
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (taskModule);

/***/ }),

/***/ "./src/modules/userinterface.js":
/*!**************************************!*\
  !*** ./src/modules/userinterface.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/modules/project.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ "./src/modules/task.js");
/* harmony import */ var date_fns_toDate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns/toDate */ "./node_modules/date-fns/esm/toDate/index.js");






/*

INTERFACE MODULE (do these with DOM Manipulation)
1. Create a website with a header, footer, sidebar and content div 
1.1. Sidebar should have :
1.1.1. a first div that has:
1.1.1.1."all tasks", 
1.1.1.2."due today", 
1.1.1.3."due this week", 
1.1.1.4."important tasks" 
1.1.1.5. and "completed tasks"
1.1.2 second division of the sidebar should have all projects
1.1.2.1 THis should havea "+" button that pops up a form that creates the Object
1.1.2.2.  This should have a "title" form and then submit 
2. have a +"add Task" button on the top-right of the header
2.1. have this popup a form that has the ff: input
2.1.1. a "title" input
2.1.2. a "description" input that has a larger box
2.1.3. a "due date" one that's a date input
2.1.4. a "priority" that's a dropdown box of (low, medium, high)
2.1.5. a "project" dropdown that's either "inbox" or existing projects
3. have a function that "converts" a toDo object to an item in a table with the ff. cells:
3.1. the "title" of the toDo item
3.2. the due date of the toDo item
3.3. a "details" button that shows you a popUp that shows the item's details
3.4. a "edit" button that shows a popUp that's like the addProject form
3.5. a checkbox that let's you toggle whether 
3.6. a "delete" button that deletes the item
4. when clicking a project get a function that "gets" the title of the project

*/

const elementFactory = (() => {

    const div = document.createElement('div');
    const h2 = document.createElement('h2')
    const paragraph = document.createElement('p');
    const button = document.createElement('button');
    const input = document.createElement('input');
    const span = document.createElement('span');
    const label = document.createElement('label');
    const textArea = document.createElement('textarea');
    const selection = document.createElement('select');
    const option = document.createElement('option');

    const _selectionOptionFactory = (value) => {
        const selectionOption = option.cloneNode();
        selectionOption.textContent = value;
        selectionOption.value = value.toLowerCase();
        return selectionOption
    }

 /*   const textAreaFactory = (textAreaId, rows, cols, textAreaLabel) => {
        const newTextArea = textArea.cloneNode();
        const newtextAreaLabel = label.cloneNode();
        const newTextAreaDiv = div.cloneNode();

        newTextArea.id = textAreaId;
        newTextArea.rows = rows;
        newTextArea.cols = cols;

        newtextAreaLabel.for = textAreaLabel.toLowerCase();
        newtextAreaLabel.textContent = textAreaLabel;

        newTextAreaDiv.appendChild(newtextAreaLabel);
        newTextAreaDiv.appendChild(newTextArea);

        return newTextAreaDiv
    }

*/

    const selectionFactory = (selectionName, ...options) => {
        const newSelection = selection.cloneNode();
        const selectionLabel = label.cloneNode();
        const selectionDiv = div.cloneNode();

        newSelection.id = selectionName.toLowerCase();
        selectionLabel.for = newSelection.id;
        selectionLabel.textContent = selectionName;
        newSelection.name = selectionName.toLowerCase();

        options.forEach((optionValue) => {
            const optionElement = _selectionOptionFactory(optionValue);
            newSelection.appendChild(optionElement);
        });

        selectionDiv.appendChild(selectionLabel);
        selectionDiv.appendChild(newSelection);
        
        return selectionDiv;
    }

    const inputFactory = (inputType, inputLabel, inputName, inputValue) => {
        const inputDiv = div.cloneNode();
        const inputBox = input.cloneNode();
        const inputBoxLabel = label.cloneNode();

        inputBox.type = inputType;
        inputBox.classList.add = inputName;
        inputBoxLabel.for = inputLabel.toLowerCase();
        inputBoxLabel.textContent = inputLabel;
        inputBox.name = inputName;
        inputBox.value = inputValue;
        inputBoxLabel.for = inputName

        inputDiv.appendChild(inputBoxLabel);
        inputDiv.appendChild(inputBox);

        return inputDiv;
    }

    const _createButtonElement = (buttonClass, textContent) => {
        const newButton = button.cloneNode();
        newButton.classList.add(buttonClass);
        newButton.textContent = textContent
        return newButton
    }

    const _createButtonClickHandler = (button, handleClick) => {
        button.addEventListener('click', handleClick);
    }

    const buttonFactory = (createdButtonClass, buttonText, clickHandler) => {
        const createdButton = _createButtonElement(createdButtonClass, buttonText);
        
        _createButtonClickHandler(createdButton, clickHandler);

        return createdButton
    }

    const modalFactory = () => {
        const modal = div.cloneNode();
        const modalContent = div.cloneNode();

        modal.classList.add('modal');
        modalContent.id = 'modalcontent'

        modal.appendChild(modalContent);
        document.body.appendChild(modal);

        window.onclick = function(event) {
            if (event.target == modal) {
              modal.style.display = "none";
            }
          }
    }

    const itemWithClassDeleter = (className) => {
        const elementToDelete = document.querySelector(`.${className}`);
        if (elementToDelete && elementToDelete.parentElement) {
            elementToDelete.parentElement.removeChild(elementToDelete);
        }
      };

    const modalInit = () => {
        itemWithClassDeleter('modal')
        modalFactory();
    
        const modal = document.querySelector('.modal');
        modal.style.display = "block"
        
    }

    return {
        
        div,
        span,
        paragraph,
        h2,
        buttonFactory,
        inputFactory,
        modalInit,
        itemWithClassDeleter,
        selectionFactory,
    }



})();

const elementCreationOnLoadModule = (() => {

    const _createHeader = () => {
        const header = document.createElement('header');
        const h1 = document.createElement('h1');
        const logoDiv = elementFactory.div.cloneNode();
        const logoSpan = elementFactory.span.cloneNode();

        logoDiv.classList.add("logo");

        h1.textContent = "To-Do"
        
        logoDiv.appendChild(logoSpan);
        logoDiv.appendChild(h1);
        header.appendChild(logoDiv);

        return header
    }

    const _createFooter = () => {
        const footer = document.createElement('footer');
        const footertext = elementFactory.paragraph.cloneNode()

        footertext.textContent = "Copyright © 2023 thephilosopher13";
        
        footer.appendChild(footertext);
        
        return footer;
    }

    const _createDefaultButtonsDiv = () => {
        const defaultButtonsDiv = elementFactory.div.cloneNode();
        const defaultNavh2 = elementFactory.h2.cloneNode();
        const taskArray = _task__WEBPACK_IMPORTED_MODULE_1__["default"].getTaskArray();
        const inboxButton = elementFactory.buttonFactory('inbox-button', "Inbox", () => afterLoadDOMManipulationModule.generateTable(taskArray))
        const dueTodayButton = elementFactory.buttonFactory('due-today-button', "Due Today", () => afterLoadDOMManipulationModule.generateTable(taskArray))
        const dueThisWeekButton = elementFactory.buttonFactory('due-this-week-button', "Due This Week", () => afterLoadDOMManipulationModule.generateTable(taskArray))
        defaultNavh2.textContent = "Home"
        defaultButtonsDiv.classList.add('default-buttons-div')
        
        defaultButtonsDiv.appendChild(defaultNavh2)
        defaultButtonsDiv.appendChild(inboxButton)
        defaultButtonsDiv.appendChild(dueTodayButton)
        defaultButtonsDiv.appendChild(dueThisWeekButton)

        return defaultButtonsDiv
    }

    const _createProjectButtonsDiv = () => {
        const projectButtonsDiv = elementFactory.div.cloneNode();
        const projectsNavh2 = elementFactory.h2.cloneNode();
        //have a project array here
        //make buttons named after the 'title' property of said projects in array (useful to do a forEach loop)

        projectsNavh2.textContent = "Projects"

        projectButtonsDiv.appendChild(projectsNavh2)

        return projectButtonsDiv
    }
    

    const _createHomeNav = () => {
        const homeNavDiv = elementFactory.div.cloneNode();
        const defaultButtonsDiv = _createDefaultButtonsDiv();
        const projectButtonsDiv = _createProjectButtonsDiv();

        const newItemButton = elementFactory.buttonFactory('newItem', "+", afterLoadDOMManipulationModule.newItemPopup)

        homeNavDiv.classList.add('homeNav');

        homeNavDiv.appendChild(defaultButtonsDiv)
        homeNavDiv.appendChild(projectButtonsDiv)
        homeNavDiv.appendChild(newItemButton)
        
        return homeNavDiv
    }

    const _createDisplaySection = () => {
        const displayDiv = elementFactory.div.cloneNode()
        
        displayDiv.setAttribute('id', 'contentDisplay')

        return displayDiv
    }

    const _createContentDiv = () => {
        const contentDiv = elementFactory.div.cloneNode();
        const homeNav = _createHomeNav();
        const contentDisplay = _createDisplaySection();

        contentDiv.setAttribute('id', 'content')

        contentDiv.appendChild(homeNav)
        contentDiv.appendChild(contentDisplay)
        
        return contentDiv
    }

    const loadWebpage = () => {
        const header = _createHeader();
        const content = _createContentDiv();
        const footer = _createFooter();
        const body = document.querySelector('body');

        body.appendChild(header);
        body.appendChild(content);
        body.appendChild(footer);

    }

    return {
        loadWebpage
    }
})();

const afterLoadDOMManipulationModule = (() => {

    const formFactory = document.createElement('form');
    const tableFactory = document.createElement('table');
    const theadFactory = document.createElement('thead');
    const tbodyFactory = document.createElement('tbody')
    const thFactory = document.createElement('th');
    const trFactory = document.createElement('tr');
    const tdFactory = document.createElement('td');

    const newItemPopup = () => {
        elementFactory.modalInit();
        const modal = document.querySelector('.modal')
        modal.style.display = "block"
        const newItemButtonContainer = elementFactory.div.cloneNode();
        const newTaskButton = elementFactory.buttonFactory('newTask', 'New Task', _newTaskPopup);
        const newProjectButton = elementFactory.buttonFactory('newProject', 'New Project', _newProjectPopup);

        newItemButtonContainer.classList.add('newitempopupbuttoncontainer')

        const modalContent = document.getElementById('modalcontent');

        newItemButtonContainer.appendChild(newTaskButton);
        newItemButtonContainer.appendChild(newProjectButton);
        modalContent.appendChild(newItemButtonContainer);
    }

    const _getValueFromInput = (formId, inputName) => {
        const formToGetInputFrom = document.getElementById(formId);
        const inputToGetValueFrom = formToGetInputFrom.querySelector(`[name="${inputName}"]`);
        const inputValue = inputToGetValueFrom.value;
        
        return inputValue;
    }
        
    const _newProjectPopup = () => {

        elementFactory.modalInit();

        const projectForm = formFactory.cloneNode();
        const titleInput = elementFactory.inputFactory('text', 'Name', 'projectname', 'projectname')
        const projectSubmitButton = elementFactory.buttonFactory("submitProjectForm", 'Submit', _submitProjectData);

        const modalContent = document.getElementById('modalcontent');

        if (modalContent) {
            modalContent.innerHTML = '';
          } 

        projectForm.id = 'projectform'
        projectForm.for = 'Task'

        projectForm.appendChild(titleInput);
        projectForm.appendChild(projectSubmitButton);
        modalContent.appendChild(projectForm)
    }

    const _submitProjectData = () => {
        const titleFromProjectForm = _getValueFromInput('projectform', 'title');
        const projectArray = _project__WEBPACK_IMPORTED_MODULE_0__["default"].getProjectArray();

        const newProject = _project__WEBPACK_IMPORTED_MODULE_0__["default"].projectFactory(titleFromProjectForm);
        projectArray.push(newProject);
    }

    const _newTaskPopup = () => {

        elementFactory.modalInit();

        const projectArray = _project__WEBPACK_IMPORTED_MODULE_0__["default"].getProjectArray();
        const projectTitles = projectArray.map((projectTitleValues) => projectTitleValues.title)
        const taskForm = formFactory.cloneNode();
        const taskTitleInput = elementFactory.inputFactory('text', 'Title', 'taskTitle', 'taskTitle');
        const taskDueDateInput = elementFactory.inputFactory('date', 'Deadline', 'dueDate', 'dueDate');
        const taskPriorityInput = elementFactory.selectionFactory('Priority', 'Low', 'Medium', 'High');
        const inWhichProjectInput = elementFactory.selectionFactory('Project', ...projectTitles)
        const taskSubmitButton = elementFactory.buttonFactory("submitTaskForm", 'Submit', _submitTaskData);
        const modalContent = document.getElementById('modalcontent');

        taskForm.for = 'Task'

        if (modalContent) {
            modalContent.innerHTML = '';
          } 
        taskForm.id = 'taskform'

        taskForm.appendChild(taskTitleInput);
        taskForm.appendChild(taskDueDateInput);
        taskForm.appendChild(taskPriorityInput);
        taskForm.appendChild(inWhichProjectInput);
        taskForm.appendChild(taskSubmitButton);
        modalContent.appendChild(taskForm);
    }

    const _convertDateValueToActualDate = (originalDateString) => {
        const dateStringWithoutNonNumeric = originalDateString.replace(/\D/g, '');
        const year = dateStringWithoutNonNumeric.substring(0, 4);
        const month = (parseInt(dateStringWithoutNonNumeric.substring(4, 6)) - 1).toString()
        const day = dateStringWithoutNonNumeric.substring(6);
        const dateInCorrectForm = (0,date_fns_toDate__WEBPACK_IMPORTED_MODULE_2__["default"])(new Date(year, month, day))

        return dateInCorrectForm
    }


    const _submitTaskData = () => {
        const titleFromTaskForm = _getValueFromInput ('taskform', 'taskTitle')
        const dueDatefromTaskForm = _getValueFromInput('taskform', 'dueDate');
        const formattedDate = _convertDateValueToActualDate(dueDatefromTaskForm);
        const taskPriorityfromTaskForm = _getValueFromInput('taskform', 'priority');
        const inProjectFromTaskForm = _getValueFromInput('taskform', 'project');
        const taskArray = _task__WEBPACK_IMPORTED_MODULE_1__["default"].getTaskArray()

        const newTask = _task__WEBPACK_IMPORTED_MODULE_1__["default"].taskFactory(titleFromTaskForm, formattedDate, taskPriorityfromTaskForm, inProjectFromTaskForm)
        taskArray.push(newTask)
        console.log(newTask)
        generateTable(taskArray)
    }

    const _createIsAccopmplishedCheckbox = (task, property) => {
        const checkboxCell = tdFactory.cloneNode();
        const checkbox = elementFactory.inputFactory('checkbox', 'isAccomplished', 'taskIsAccomplished', false)
        checkbox.textContent = '';
        checkbox.checked = task[property];

        checkbox.addEventListener('change', (event) => {
            task[property] = event.target.checked;
          });

        checkboxCell.appendChild(checkbox);

        return checkboxCell
    }

    const _createCellWithTextContent = (factory, content, rowToAppendCellTo) => {
        const cell = factory.cloneNode();
        cell.textContent = content;
        rowToAppendCellTo.appendChild(cell);
    }

    const _generateTableHeader = (array) => {
        const thead = theadFactory.cloneNode()
        const objectKeys = Object.keys(array[0])
        const headerRow = trFactory.cloneNode()
        objectKeys.slice(0, 3).forEach((key) => { 
            _createCellWithTextContent(thFactory, key, headerRow)
        })
        _createCellWithTextContent(thFactory, 'Accomplished?', headerRow)
        _createCellWithTextContent(thFactory, 'Project', headerRow)

        thead.appendChild(headerRow);

        // create functionality for edit and delete item here

        return thead
    }

    const _generateTableBody = (array) => {
        const tbody = tbodyFactory.cloneNode()
        const objectKeys = Object.keys(array[0])

        array.forEach((object) => {
            const row = trFactory.cloneNode()
            objectKeys.slice(0, 3).forEach((key) => {
                _createCellWithTextContent(tdFactory, object[key], row)
            });
            objectKeys.slice(3, 4).forEach((key) => {
                const checkbox = _createIsAccopmplishedCheckbox(object, key);
                row.appendChild(checkbox);
            });
            objectKeys.slice(4, 5).forEach((key) => {
                _createCellWithTextContent(tdFactory, object[key], row)
            });
            tbody.appendChild(row);
        });

        // create functionality for edit and delete item here

        return tbody

        }

    const generateTable = (array) => {
        if (array.length === 0) {
            return
        }

        const table = tableFactory.cloneNode()
        const thead = _generateTableHeader(array);
        const tbody = _generateTableBody(array);
        const contentBox = document.getElementById('contentDisplay')
        
        table.appendChild(thead);
        table.appendChild(tbody);
        contentBox.appendChild(table);

    };

    return {
        newItemPopup,
        generateTable
    }

})();

const init = () => {
    const taskArray = _task__WEBPACK_IMPORTED_MODULE_1__["default"].getTaskArray();
    elementCreationOnLoadModule.loadWebpage();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (init);

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJEQUEyRCxVQUFVO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUEsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiw2Q0FBVTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsK0VBQStFLFVBQVU7QUFDekY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNkJBQTZCLGdEQUFhOztBQUUxQywyQkFBMkIsZ0RBQWE7QUFDeEM7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSw2QkFBNkIsZ0RBQWE7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLDJEQUFNOztBQUV4QztBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsNkNBQVU7O0FBRXBDLHdCQUF3Qiw2Q0FBVTtBQUNsQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXOztBQUVYOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLFNBQVM7O0FBRVQ7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDOztBQUVEO0FBQ0Esc0JBQXNCLDZDQUFVO0FBQ2hDO0FBQ0E7O0FBRUEsaUVBQWU7Ozs7Ozs7Ozs7Ozs7O0FDamdCQTtBQUNmOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxHQUFHO0FBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2Nzcy9zdHlsZXMuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS90b0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jc3Mvc3R5bGVzLmNzcz85OWEzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvdGFzay5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvdXNlcmludGVyZmFjZS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3R5cGVvZi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgYm9keSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyBcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4jY29udGVudCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gN2ZyO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmbGV4LWdyb3c6IDE7XG59XG5cbmhlYWRlciwgZm9vdGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjI2Y2UwO1xuICAgIHdpZHRoOiAxMDAlXG59XG5cbmgxIHtcbiAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIHBhZGRpbmctbGVmdDogMnJlbTtcbn1cblxuZm9vdGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5ob21lTmF2IHtcbiAgICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFCMTcyNTtcbiAgICBjb2xvcjogI2Y1ZjVmNTtcbiAgICBwYWRkaW5nOiAzcmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmRlZmF1bHQtYnV0dG9ucy1kaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtblxufVxuXG4jY29udGVudERpc3BsYXkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNEMEJDRDU7XG59XG5cbmgyIHtcbiAgICBmb250LXNpemU6IDJyZW1cbn1cblxuLmRlZmF1bHQtYnV0dG9ucy1kaXYgPiBidXR0b24ge1xuICAgIGNvbG9yOiAjZjVmNWY1O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxQjE3MjU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZm9udC1zaXplOiAxLjc1cmVtO1xuICAgIHBhZGRpbmc6IDFyZW1cbn1cblxuLm5ld0l0ZW0ge1xuICAgIGNvbG9yOiAjZjVmNWY1O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNEMEJDRDU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwJTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIGJvdHRvbTogMTA7XG4gICAgbWFyZ2luLXRvcDogYXV0bztcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xufVxuXG4ubW9kYWwge1xuICAgIGRpc3BsYXk6IG5vbmU7IC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXG4gICAgcG9zaXRpb246IGZpeGVkOyAvKiBTdGF5IGluIHBsYWNlICovXG4gICAgei1pbmRleDogMTsgLyogU2l0IG9uIHRvcCAqL1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoICovXG4gICAgaGVpZ2h0OiAxMDAlOyAvKiBGdWxsIGhlaWdodCAqL1xuICAgIG92ZXJmbG93OiBhdXRvOyAvKiBFbmFibGUgc2Nyb2xsIGlmIG5lZWRlZCAqL1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLDAsMCk7IC8qIEZhbGxiYWNrIGNvbG9yICovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjQpOyAvKiBCbGFjayB3LyBvcGFjaXR5ICovXG4gIH1cblxuI21vZGFsY29udGVudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxTQUFTO0lBQ1QsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5Qiw2SkFBNko7SUFDN0osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiwrQkFBK0I7SUFDL0IsWUFBWTtJQUNaLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCO0FBQ0o7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4Qix5QkFBeUI7SUFDekIsY0FBYztJQUNkLGFBQWE7SUFDYixhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiO0FBQ0o7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksY0FBYztJQUNkLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQjtBQUNKOztBQUVBO0lBQ0ksY0FBYztJQUNkLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYSxFQUFFLHNCQUFzQjtJQUNyQyxlQUFlLEVBQUUsa0JBQWtCO0lBQ25DLFVBQVUsRUFBRSxlQUFlO0lBQzNCLE9BQU87SUFDUCxNQUFNO0lBQ04sV0FBVyxFQUFFLGVBQWU7SUFDNUIsWUFBWSxFQUFFLGdCQUFnQjtJQUM5QixjQUFjLEVBQUUsNEJBQTRCO0lBQzVDLDRCQUE0QixFQUFFLG1CQUFtQjtJQUNqRCxpQ0FBaUMsRUFBRSxxQkFBcUI7RUFDMUQ7O0FBRUY7SUFDSSx5QkFBeUI7SUFDekIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxnQ0FBZ0M7SUFDaEMscUJBQXFCO0FBQ3pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyBcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyBcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byA3ZnI7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG59XFxuXFxuaGVhZGVyLCBmb290ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjI2Y2UwO1xcbiAgICB3aWR0aDogMTAwJVxcbn1cXG5cXG5oMSB7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDJyZW07XFxufVxcblxcbmZvb3RlciB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmhvbWVOYXYge1xcbiAgICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxQjE3MjU7XFxuICAgIGNvbG9yOiAjZjVmNWY1O1xcbiAgICBwYWRkaW5nOiAzcmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uZGVmYXVsdC1idXR0b25zLWRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW5cXG59XFxuXFxuI2NvbnRlbnREaXNwbGF5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0QwQkNENTtcXG59XFxuXFxuaDIge1xcbiAgICBmb250LXNpemU6IDJyZW1cXG59XFxuXFxuLmRlZmF1bHQtYnV0dG9ucy1kaXYgPiBidXR0b24ge1xcbiAgICBjb2xvcjogI2Y1ZjVmNTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFCMTcyNTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBmb250LXNpemU6IDEuNzVyZW07XFxuICAgIHBhZGRpbmc6IDFyZW1cXG59XFxuXFxuLm5ld0l0ZW0ge1xcbiAgICBjb2xvcjogI2Y1ZjVmNTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0QwQkNENTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMCU7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgYm90dG9tOiAxMDtcXG4gICAgbWFyZ2luLXRvcDogYXV0bztcXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG59XFxuXFxuLm1vZGFsIHtcXG4gICAgZGlzcGxheTogbm9uZTsgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cXG4gICAgcG9zaXRpb246IGZpeGVkOyAvKiBTdGF5IGluIHBsYWNlICovXFxuICAgIHotaW5kZXg6IDE7IC8qIFNpdCBvbiB0b3AgKi9cXG4gICAgbGVmdDogMDtcXG4gICAgdG9wOiAwO1xcbiAgICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAqL1xcbiAgICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0ICovXFxuICAgIG92ZXJmbG93OiBhdXRvOyAvKiBFbmFibGUgc2Nyb2xsIGlmIG5lZWRlZCAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDApOyAvKiBGYWxsYmFjayBjb2xvciAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7IC8qIEJsYWNrIHcvIG9wYWNpdHkgKi9cXG4gIH1cXG5cXG4jbW9kYWxjb250ZW50IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVpcmVkQXJncyhyZXF1aXJlZCwgYXJncykge1xuICBpZiAoYXJncy5sZW5ndGggPCByZXF1aXJlZCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocmVxdWlyZWQgKyAnIGFyZ3VtZW50JyArIChyZXF1aXJlZCA+IDEgPyAncycgOiAnJykgKyAnIHJlcXVpcmVkLCBidXQgb25seSAnICsgYXJncy5sZW5ndGggKyAnIHByZXNlbnQnKTtcbiAgfVxufSIsImltcG9ydCBfdHlwZW9mIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90eXBlb2ZcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTtcblxuICAvLyBDbG9uZSB0aGUgZGF0ZVxuICBpZiAoYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8IF90eXBlb2YoYXJndW1lbnQpID09PSAnb2JqZWN0JyAmJiBhcmdTdHIgPT09ICdbb2JqZWN0IERhdGVdJykge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudC5nZXRUaW1lKCkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudCA9PT0gJ251bWJlcicgfHwgYXJnU3RyID09PSAnW29iamVjdCBOdW1iZXJdJykge1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgU3RyaW5nXScpICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihcIlN0YXJ0aW5nIHdpdGggdjIuMC4wLWJldGEuMSBkYXRlLWZucyBkb2Vzbid0IGFjY2VwdCBzdHJpbmdzIGFzIGRhdGUgYXJndW1lbnRzLiBQbGVhc2UgdXNlIGBwYXJzZUlTT2AgdG8gcGFyc2Ugc3RyaW5ncy4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjc3RyaW5nLWFyZ3VtZW50c1wiKTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4obmV3IEVycm9yKCkuc3RhY2spO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxufSIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgaW5pdCBmcm9tIFwiLi9tb2R1bGVzL3VzZXJpbnRlcmZhY2VcIlxuaW1wb3J0ICcuL2Nzcy9zdHlsZXMuY3NzJztcblxuaW5pdCgpO1xuXG4iLCIvKlxuXG5QUk9KRUNUIE1PRFVMRSBcbjEuIGNyZWF0ZSBhIHByb2plY3Qgb2JqZWN0IGZhY3Rvcnkgd2l0aCB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXMgKHRoaXMgb25lIGlzIGEgU1RSVUNUVVJFUik6XG4xLjEuIHRpdGxlLCB3aXRoIGEgdmFsdWUgYmVpbmcgdGhlIG5hbWUgb2YgdGhlIHByb2plY3RcbjEuMi4gaXRlbTEsIGl0ZW0yLCBpdGVtMyAuLi4uIHdpdGggdGhlIHZhbHVlIGJlaW5nIGEgdG8tZG8gb2JqZWN0XG4yLiBjcmVhdGUgYW4gYWRkRXZlbnRMaXN0ZW5lciBvbiBlZGl0L2NyZWF0ZSB0YXNrIHRoYXQgZG9lcyB0aGUgZmY6XG4yLjEuIGNoZWNrIHRoZSBpblByb2plY3QgaW5wdXQvdmFsdWVcbjIuMi4gc2VhcmNoZXMgZm9yIHRoZSBwcm9qZWN0IHByb3BlcnR5IFwidGl0bGVcIiB3aXRoIHRoZSBzYW1lIHZhbHVlXG4yLjMuIHB1c2hlcyB0aGUgb2JqZWN0IGFzIHRoZSB2YWx1ZSBvZiBpdGVtIFxuMy4gZGVsZXRlT2JqZWN0IHRoYXQgdGFrZXMgdGhlIHByb2plY3Qgb3V0IG9mIHRoZSBwcm9qZWN0IGFycmF5XG5cbiovXG5cbmNvbnN0IHByb2plY3RNb2R1bGUgPSAoKCkgPT4ge1xuXG4gICAgY29uc3QgX3Byb2plY3RBcnJheSA9IFtcblxuICAgICAgICAvL2luYm94IGlzIGEgc29ydCBvZiBcImRlZmF1bHRcIiBwcm9qZWN0IGZvciB0YXNrcyBub3QgcHV0IGluIG90aGVyIHByb2plY3RzXG4gICAgICAgIHsgXG4gICAgICAgICAgICB0aXRsZSA6ICdJbmJveCcsXG4gICAgICAgICAgICB0YXNrTGlzdCA6IFtdXG4gICAgICAgIH1cblxuICAgIF1cblxuICAgIGNvbnN0IHByb2plY3RGYWN0b3J5ID0gKHRpdGxlKSA9PiB7XG5cbiAgICAgICAgbGV0IHRhc2tMaXN0ID0gW11cblxuICAgICAgICBjb25zdCBnZXRUYXNrbGlzdCA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0YXNrTGlzdFxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHsgdGl0bGUsIHRhc2tMaXN0IH1cbiAgICB9XG5cbiAgICBjb25zdCBnZXRQcm9qZWN0QXJyYXkgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBfcHJvamVjdEFycmF5XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0UHJvamVjdEFycmF5LFxuICAgICAgICBwcm9qZWN0RmFjdG9yeVxuICAgIH1cbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHByb2plY3RNb2R1bGUiLCJpbXBvcnQgcHJvamVjdE1vZHVsZSBmcm9tIFwiLi9wcm9qZWN0XCJcblxuXG4vKiBcblxuVEFTSyBNT0RVTEVcblxuMi4gaGF2ZSB0d28gXCJmaWx0ZXJcIiBmdW5jdGlvbnMgdGhhdCBmaWx0ZXIgZm9yIHRoZSBmZi4gdmFsdWVzIGluIFwiZHVlZGF0ZVwiOlxuMi4xLiBcImR1ZSB0b21vcnJvd1wiXG4yLjIuIFwiZHVlIHRoaXMgd2Vla1wiXG4zLiBhbm90aGVyIFwiZmlsdGVyXCIgZnVuY3Rpb24gdGhhdCBzZWFyY2hlcyBmb3IgY29tcGxldGVkIHRhc2tzXG40LiBhbm90aGVyIFwiZmlsdGVyIGZ1bmN0aW9uIHRoYXQgc2VhcmNoZXMgZm9yIHRoZSBpblByb2plY3QgaXRlbSBhbmQgbG9va3MgZm9yIGFsbCBpdGVtcyBpbiBhIGNlcnRhaW4gcHJvamVjdFxuNS4gZWRpdFRhc2sgZnVuY3Rpb25cbjYuIGRlbGV0ZVRhc2sgZnVuY3Rpb24gKHB1dCBhbiBhcmUgeW91IHN1cmUgcG9wdXAgdG8gdGhpcylcbjcuIGdldFRhc2tEZXRhaWxzIGZ1bmN0aW9uICB0aGF0IGRvZXMgdGhlIGZmOlxuNy4xLiBcImdldFwiIHRoZSB0YXNrIGRldGFpbHMgZnJvbSB0aGUgb2JqZWN0IGluIHRoZSBhcnJheVxuNy4yLiBkaXNwbGF5cyB0aGVtIGluIGEgcG9wVXAgZGl2XG44LiBhbiBhZGRFdmVudExpc3RlbmVyIHRoYXQgZG9lcyB0aGUgZmYuIG9uICdjbGljayc6XG44LjEuIFwiZ2V0XCIgZGV0YWlscyBmcm9tIGZvcm1cbjguMi4gdHVybiB0aGVtIGludG8gYW4gb2JqZWN0IGFuZCBwdXNoIGludG8gdG9Eb0xpc3RBcnJheVxuXG4qL1xuXG5jb25zdCB0YXNrTW9kdWxlID0gKCgpID0+IHtcbiAgICBjb25zdCBfdGFza0FycmF5ID0gW11cblxuICAgIGNvbnN0IHRhc2tGYWN0b3J5ID0gKHRpdGxlLCBkdWVEYXRlLCBwcmlvcml0eSwgaW5Qcm9qZWN0KSA9PiB7XG5cbiAgICAgICAgbGV0IGlzQWNjb21wbGlzaGVkID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3QgZGVsZXRlVGFzayA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gX3Rhc2tBcnJheS5pbmRleE9mKHRoaXMpO1xuICAgICAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIF90YXNrQXJyYXkuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhfdGFza0FycmF5KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBjb25zdCBwcm9qZWN0QXJyYXkgPSBwcm9qZWN0TW9kdWxlLmdldFByb2plY3RBcnJheTtcblxuICAgICAgICBjb25zdCBsaW5rVGFza1RvUHJvamVjdCA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoaW5nUHJvamVjdCA9IHByb2plY3RBcnJheS5maW5kKHByb2plY3QgPT4gcHJvamVjdC50aXRsZSA9PT0gaW5Qcm9qZWN0KTtcbiAgICAgICAgICAgIGlmIChtYXRjaGluZ1Byb2plY3QpIHtcbiAgICAgICAgICAgICAgaWYgKCFtYXRjaGluZ1Byb2plY3QudGFzaykge1xuICAgICAgICAgICAgICAgIG1hdGNoaW5nUHJvamVjdC50YXNrID0gW107XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgbWF0Y2hpbmdQcm9qZWN0LnRhc2sucHVzaCh0YXNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuXG5cbiAgICAgICAgcmV0dXJuIHsgdGl0bGUsIGR1ZURhdGUsIHByaW9yaXR5LCBpc0FjY29tcGxpc2hlZCwgaW5Qcm9qZWN0IH1cbiAgICB9XG5cbiAgICBjb25zdCBnZXRUYXNrQXJyYXkgPSAoKSA9PiB7XG4gICAgICByZXR1cm4gX3Rhc2tBcnJheVxuICAgIH1cblxuICAgIGNvbnN0IHRhc2tBcnJheUZpbHRlciA9IChwcm9wZXJ0eSwgZGVzaXJlZFByb3BlcnR5VmFsdWUpID0+IHtcbiAgICAgIGNvbnN0IGZpbHRlcmVkQXJyYXkgPSBfdGFza0FycmF5LmZpbHRlcigoaXRlbSkgPT4gaXRlbVtwcm9wZXJ0eV0gPT09IGRlc2lyZWRQcm9wZXJ0eVZhbHVlKTtcbiAgICAgIHJldHVybiBmaWx0ZXJlZEFycmF5XG4gICAgfVxuICAgIFxuICAgIHJldHVybiB7XG4gICAgICB0YXNrRmFjdG9yeSxcbiAgICAgIGdldFRhc2tBcnJheSxcbiAgICAgIHRhc2tBcnJheUZpbHRlclxuICAgIH1cbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHRhc2tNb2R1bGUiLCJpbXBvcnQgcHJvamVjdE1vZHVsZSBmcm9tICcuL3Byb2plY3QnXG5pbXBvcnQgdGFza01vZHVsZSBmcm9tICcuL3Rhc2snXG5pbXBvcnQgdG9EYXRlIGZyb20gJ2RhdGUtZm5zL3RvRGF0ZSdcbmltcG9ydCB7IGZvcm1hdCwgY29tcGFyZUFzYyB9IGZyb20gJ2RhdGUtZm5zJ1xuXG5cbi8qXG5cbklOVEVSRkFDRSBNT0RVTEUgKGRvIHRoZXNlIHdpdGggRE9NIE1hbmlwdWxhdGlvbilcbjEuIENyZWF0ZSBhIHdlYnNpdGUgd2l0aCBhIGhlYWRlciwgZm9vdGVyLCBzaWRlYmFyIGFuZCBjb250ZW50IGRpdiBcbjEuMS4gU2lkZWJhciBzaG91bGQgaGF2ZSA6XG4xLjEuMS4gYSBmaXJzdCBkaXYgdGhhdCBoYXM6XG4xLjEuMS4xLlwiYWxsIHRhc2tzXCIsIFxuMS4xLjEuMi5cImR1ZSB0b2RheVwiLCBcbjEuMS4xLjMuXCJkdWUgdGhpcyB3ZWVrXCIsIFxuMS4xLjEuNC5cImltcG9ydGFudCB0YXNrc1wiIFxuMS4xLjEuNS4gYW5kIFwiY29tcGxldGVkIHRhc2tzXCJcbjEuMS4yIHNlY29uZCBkaXZpc2lvbiBvZiB0aGUgc2lkZWJhciBzaG91bGQgaGF2ZSBhbGwgcHJvamVjdHNcbjEuMS4yLjEgVEhpcyBzaG91bGQgaGF2ZWEgXCIrXCIgYnV0dG9uIHRoYXQgcG9wcyB1cCBhIGZvcm0gdGhhdCBjcmVhdGVzIHRoZSBPYmplY3RcbjEuMS4yLjIuICBUaGlzIHNob3VsZCBoYXZlIGEgXCJ0aXRsZVwiIGZvcm0gYW5kIHRoZW4gc3VibWl0IFxuMi4gaGF2ZSBhICtcImFkZCBUYXNrXCIgYnV0dG9uIG9uIHRoZSB0b3AtcmlnaHQgb2YgdGhlIGhlYWRlclxuMi4xLiBoYXZlIHRoaXMgcG9wdXAgYSBmb3JtIHRoYXQgaGFzIHRoZSBmZjogaW5wdXRcbjIuMS4xLiBhIFwidGl0bGVcIiBpbnB1dFxuMi4xLjIuIGEgXCJkZXNjcmlwdGlvblwiIGlucHV0IHRoYXQgaGFzIGEgbGFyZ2VyIGJveFxuMi4xLjMuIGEgXCJkdWUgZGF0ZVwiIG9uZSB0aGF0J3MgYSBkYXRlIGlucHV0XG4yLjEuNC4gYSBcInByaW9yaXR5XCIgdGhhdCdzIGEgZHJvcGRvd24gYm94IG9mIChsb3csIG1lZGl1bSwgaGlnaClcbjIuMS41LiBhIFwicHJvamVjdFwiIGRyb3Bkb3duIHRoYXQncyBlaXRoZXIgXCJpbmJveFwiIG9yIGV4aXN0aW5nIHByb2plY3RzXG4zLiBoYXZlIGEgZnVuY3Rpb24gdGhhdCBcImNvbnZlcnRzXCIgYSB0b0RvIG9iamVjdCB0byBhbiBpdGVtIGluIGEgdGFibGUgd2l0aCB0aGUgZmYuIGNlbGxzOlxuMy4xLiB0aGUgXCJ0aXRsZVwiIG9mIHRoZSB0b0RvIGl0ZW1cbjMuMi4gdGhlIGR1ZSBkYXRlIG9mIHRoZSB0b0RvIGl0ZW1cbjMuMy4gYSBcImRldGFpbHNcIiBidXR0b24gdGhhdCBzaG93cyB5b3UgYSBwb3BVcCB0aGF0IHNob3dzIHRoZSBpdGVtJ3MgZGV0YWlsc1xuMy40LiBhIFwiZWRpdFwiIGJ1dHRvbiB0aGF0IHNob3dzIGEgcG9wVXAgdGhhdCdzIGxpa2UgdGhlIGFkZFByb2plY3QgZm9ybVxuMy41LiBhIGNoZWNrYm94IHRoYXQgbGV0J3MgeW91IHRvZ2dsZSB3aGV0aGVyIFxuMy42LiBhIFwiZGVsZXRlXCIgYnV0dG9uIHRoYXQgZGVsZXRlcyB0aGUgaXRlbVxuNC4gd2hlbiBjbGlja2luZyBhIHByb2plY3QgZ2V0IGEgZnVuY3Rpb24gdGhhdCBcImdldHNcIiB0aGUgdGl0bGUgb2YgdGhlIHByb2plY3RcblxuKi9cblxuY29uc3QgZWxlbWVudEZhY3RvcnkgPSAoKCkgPT4ge1xuXG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gICAgY29uc3QgcGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBjb25zdCB0ZXh0QXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgY29uc3Qgc2VsZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG5cbiAgICBjb25zdCBfc2VsZWN0aW9uT3B0aW9uRmFjdG9yeSA9ICh2YWx1ZSkgPT4ge1xuICAgICAgICBjb25zdCBzZWxlY3Rpb25PcHRpb24gPSBvcHRpb24uY2xvbmVOb2RlKCk7XG4gICAgICAgIHNlbGVjdGlvbk9wdGlvbi50ZXh0Q29udGVudCA9IHZhbHVlO1xuICAgICAgICBzZWxlY3Rpb25PcHRpb24udmFsdWUgPSB2YWx1ZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICByZXR1cm4gc2VsZWN0aW9uT3B0aW9uXG4gICAgfVxuXG4gLyogICBjb25zdCB0ZXh0QXJlYUZhY3RvcnkgPSAodGV4dEFyZWFJZCwgcm93cywgY29scywgdGV4dEFyZWFMYWJlbCkgPT4ge1xuICAgICAgICBjb25zdCBuZXdUZXh0QXJlYSA9IHRleHRBcmVhLmNsb25lTm9kZSgpO1xuICAgICAgICBjb25zdCBuZXd0ZXh0QXJlYUxhYmVsID0gbGFiZWwuY2xvbmVOb2RlKCk7XG4gICAgICAgIGNvbnN0IG5ld1RleHRBcmVhRGl2ID0gZGl2LmNsb25lTm9kZSgpO1xuXG4gICAgICAgIG5ld1RleHRBcmVhLmlkID0gdGV4dEFyZWFJZDtcbiAgICAgICAgbmV3VGV4dEFyZWEucm93cyA9IHJvd3M7XG4gICAgICAgIG5ld1RleHRBcmVhLmNvbHMgPSBjb2xzO1xuXG4gICAgICAgIG5ld3RleHRBcmVhTGFiZWwuZm9yID0gdGV4dEFyZWFMYWJlbC50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBuZXd0ZXh0QXJlYUxhYmVsLnRleHRDb250ZW50ID0gdGV4dEFyZWFMYWJlbDtcblxuICAgICAgICBuZXdUZXh0QXJlYURpdi5hcHBlbmRDaGlsZChuZXd0ZXh0QXJlYUxhYmVsKTtcbiAgICAgICAgbmV3VGV4dEFyZWFEaXYuYXBwZW5kQ2hpbGQobmV3VGV4dEFyZWEpO1xuXG4gICAgICAgIHJldHVybiBuZXdUZXh0QXJlYURpdlxuICAgIH1cblxuKi9cblxuICAgIGNvbnN0IHNlbGVjdGlvbkZhY3RvcnkgPSAoc2VsZWN0aW9uTmFtZSwgLi4ub3B0aW9ucykgPT4ge1xuICAgICAgICBjb25zdCBuZXdTZWxlY3Rpb24gPSBzZWxlY3Rpb24uY2xvbmVOb2RlKCk7XG4gICAgICAgIGNvbnN0IHNlbGVjdGlvbkxhYmVsID0gbGFiZWwuY2xvbmVOb2RlKCk7XG4gICAgICAgIGNvbnN0IHNlbGVjdGlvbkRpdiA9IGRpdi5jbG9uZU5vZGUoKTtcblxuICAgICAgICBuZXdTZWxlY3Rpb24uaWQgPSBzZWxlY3Rpb25OYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHNlbGVjdGlvbkxhYmVsLmZvciA9IG5ld1NlbGVjdGlvbi5pZDtcbiAgICAgICAgc2VsZWN0aW9uTGFiZWwudGV4dENvbnRlbnQgPSBzZWxlY3Rpb25OYW1lO1xuICAgICAgICBuZXdTZWxlY3Rpb24ubmFtZSA9IHNlbGVjdGlvbk5hbWUudG9Mb3dlckNhc2UoKTtcblxuICAgICAgICBvcHRpb25zLmZvckVhY2goKG9wdGlvblZhbHVlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBvcHRpb25FbGVtZW50ID0gX3NlbGVjdGlvbk9wdGlvbkZhY3Rvcnkob3B0aW9uVmFsdWUpO1xuICAgICAgICAgICAgbmV3U2VsZWN0aW9uLmFwcGVuZENoaWxkKG9wdGlvbkVsZW1lbnQpO1xuICAgICAgICB9KTtcblxuICAgICAgICBzZWxlY3Rpb25EaXYuYXBwZW5kQ2hpbGQoc2VsZWN0aW9uTGFiZWwpO1xuICAgICAgICBzZWxlY3Rpb25EaXYuYXBwZW5kQ2hpbGQobmV3U2VsZWN0aW9uKTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBzZWxlY3Rpb25EaXY7XG4gICAgfVxuXG4gICAgY29uc3QgaW5wdXRGYWN0b3J5ID0gKGlucHV0VHlwZSwgaW5wdXRMYWJlbCwgaW5wdXROYW1lLCBpbnB1dFZhbHVlKSA9PiB7XG4gICAgICAgIGNvbnN0IGlucHV0RGl2ID0gZGl2LmNsb25lTm9kZSgpO1xuICAgICAgICBjb25zdCBpbnB1dEJveCA9IGlucHV0LmNsb25lTm9kZSgpO1xuICAgICAgICBjb25zdCBpbnB1dEJveExhYmVsID0gbGFiZWwuY2xvbmVOb2RlKCk7XG5cbiAgICAgICAgaW5wdXRCb3gudHlwZSA9IGlucHV0VHlwZTtcbiAgICAgICAgaW5wdXRCb3guY2xhc3NMaXN0LmFkZCA9IGlucHV0TmFtZTtcbiAgICAgICAgaW5wdXRCb3hMYWJlbC5mb3IgPSBpbnB1dExhYmVsLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGlucHV0Qm94TGFiZWwudGV4dENvbnRlbnQgPSBpbnB1dExhYmVsO1xuICAgICAgICBpbnB1dEJveC5uYW1lID0gaW5wdXROYW1lO1xuICAgICAgICBpbnB1dEJveC52YWx1ZSA9IGlucHV0VmFsdWU7XG4gICAgICAgIGlucHV0Qm94TGFiZWwuZm9yID0gaW5wdXROYW1lXG5cbiAgICAgICAgaW5wdXREaXYuYXBwZW5kQ2hpbGQoaW5wdXRCb3hMYWJlbCk7XG4gICAgICAgIGlucHV0RGl2LmFwcGVuZENoaWxkKGlucHV0Qm94KTtcblxuICAgICAgICByZXR1cm4gaW5wdXREaXY7XG4gICAgfVxuXG4gICAgY29uc3QgX2NyZWF0ZUJ1dHRvbkVsZW1lbnQgPSAoYnV0dG9uQ2xhc3MsIHRleHRDb250ZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld0J1dHRvbiA9IGJ1dHRvbi5jbG9uZU5vZGUoKTtcbiAgICAgICAgbmV3QnV0dG9uLmNsYXNzTGlzdC5hZGQoYnV0dG9uQ2xhc3MpO1xuICAgICAgICBuZXdCdXR0b24udGV4dENvbnRlbnQgPSB0ZXh0Q29udGVudFxuICAgICAgICByZXR1cm4gbmV3QnV0dG9uXG4gICAgfVxuXG4gICAgY29uc3QgX2NyZWF0ZUJ1dHRvbkNsaWNrSGFuZGxlciA9IChidXR0b24sIGhhbmRsZUNsaWNrKSA9PiB7XG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUNsaWNrKTtcbiAgICB9XG5cbiAgICBjb25zdCBidXR0b25GYWN0b3J5ID0gKGNyZWF0ZWRCdXR0b25DbGFzcywgYnV0dG9uVGV4dCwgY2xpY2tIYW5kbGVyKSA9PiB7XG4gICAgICAgIGNvbnN0IGNyZWF0ZWRCdXR0b24gPSBfY3JlYXRlQnV0dG9uRWxlbWVudChjcmVhdGVkQnV0dG9uQ2xhc3MsIGJ1dHRvblRleHQpO1xuICAgICAgICBcbiAgICAgICAgX2NyZWF0ZUJ1dHRvbkNsaWNrSGFuZGxlcihjcmVhdGVkQnV0dG9uLCBjbGlja0hhbmRsZXIpO1xuXG4gICAgICAgIHJldHVybiBjcmVhdGVkQnV0dG9uXG4gICAgfVxuXG4gICAgY29uc3QgbW9kYWxGYWN0b3J5ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBtb2RhbCA9IGRpdi5jbG9uZU5vZGUoKTtcbiAgICAgICAgY29uc3QgbW9kYWxDb250ZW50ID0gZGl2LmNsb25lTm9kZSgpO1xuXG4gICAgICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ21vZGFsJyk7XG4gICAgICAgIG1vZGFsQ29udGVudC5pZCA9ICdtb2RhbGNvbnRlbnQnXG5cbiAgICAgICAgbW9kYWwuYXBwZW5kQ2hpbGQobW9kYWxDb250ZW50KTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtb2RhbCk7XG5cbiAgICAgICAgd2luZG93Lm9uY2xpY2sgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgaWYgKGV2ZW50LnRhcmdldCA9PSBtb2RhbCkge1xuICAgICAgICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGl0ZW1XaXRoQ2xhc3NEZWxldGVyID0gKGNsYXNzTmFtZSkgPT4ge1xuICAgICAgICBjb25zdCBlbGVtZW50VG9EZWxldGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtjbGFzc05hbWV9YCk7XG4gICAgICAgIGlmIChlbGVtZW50VG9EZWxldGUgJiYgZWxlbWVudFRvRGVsZXRlLnBhcmVudEVsZW1lbnQpIHtcbiAgICAgICAgICAgIGVsZW1lbnRUb0RlbGV0ZS5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGVsZW1lbnRUb0RlbGV0ZSk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICBjb25zdCBtb2RhbEluaXQgPSAoKSA9PiB7XG4gICAgICAgIGl0ZW1XaXRoQ2xhc3NEZWxldGVyKCdtb2RhbCcpXG4gICAgICAgIG1vZGFsRmFjdG9yeSgpO1xuICAgIFxuICAgICAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpO1xuICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiXG4gICAgICAgIFxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIFxuICAgICAgICBkaXYsXG4gICAgICAgIHNwYW4sXG4gICAgICAgIHBhcmFncmFwaCxcbiAgICAgICAgaDIsXG4gICAgICAgIGJ1dHRvbkZhY3RvcnksXG4gICAgICAgIGlucHV0RmFjdG9yeSxcbiAgICAgICAgbW9kYWxJbml0LFxuICAgICAgICBpdGVtV2l0aENsYXNzRGVsZXRlcixcbiAgICAgICAgc2VsZWN0aW9uRmFjdG9yeSxcbiAgICB9XG5cblxuXG59KSgpO1xuXG5jb25zdCBlbGVtZW50Q3JlYXRpb25PbkxvYWRNb2R1bGUgPSAoKCkgPT4ge1xuXG4gICAgY29uc3QgX2NyZWF0ZUhlYWRlciA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gICAgICAgIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICAgICAgY29uc3QgbG9nb0RpdiA9IGVsZW1lbnRGYWN0b3J5LmRpdi5jbG9uZU5vZGUoKTtcbiAgICAgICAgY29uc3QgbG9nb1NwYW4gPSBlbGVtZW50RmFjdG9yeS5zcGFuLmNsb25lTm9kZSgpO1xuXG4gICAgICAgIGxvZ29EaXYuY2xhc3NMaXN0LmFkZChcImxvZ29cIik7XG5cbiAgICAgICAgaDEudGV4dENvbnRlbnQgPSBcIlRvLURvXCJcbiAgICAgICAgXG4gICAgICAgIGxvZ29EaXYuYXBwZW5kQ2hpbGQobG9nb1NwYW4pO1xuICAgICAgICBsb2dvRGl2LmFwcGVuZENoaWxkKGgxKTtcbiAgICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKGxvZ29EaXYpO1xuXG4gICAgICAgIHJldHVybiBoZWFkZXJcbiAgICB9XG5cbiAgICBjb25zdCBfY3JlYXRlRm9vdGVyID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcbiAgICAgICAgY29uc3QgZm9vdGVydGV4dCA9IGVsZW1lbnRGYWN0b3J5LnBhcmFncmFwaC5jbG9uZU5vZGUoKVxuXG4gICAgICAgIGZvb3RlcnRleHQudGV4dENvbnRlbnQgPSBcIkNvcHlyaWdodCDCqSAyMDIzIHRoZXBoaWxvc29waGVyMTNcIjtcbiAgICAgICAgXG4gICAgICAgIGZvb3Rlci5hcHBlbmRDaGlsZChmb290ZXJ0ZXh0KTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBmb290ZXI7XG4gICAgfVxuXG4gICAgY29uc3QgX2NyZWF0ZURlZmF1bHRCdXR0b25zRGl2ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBkZWZhdWx0QnV0dG9uc0RpdiA9IGVsZW1lbnRGYWN0b3J5LmRpdi5jbG9uZU5vZGUoKTtcbiAgICAgICAgY29uc3QgZGVmYXVsdE5hdmgyID0gZWxlbWVudEZhY3RvcnkuaDIuY2xvbmVOb2RlKCk7XG4gICAgICAgIGNvbnN0IHRhc2tBcnJheSA9IHRhc2tNb2R1bGUuZ2V0VGFza0FycmF5KCk7XG4gICAgICAgIGNvbnN0IGluYm94QnV0dG9uID0gZWxlbWVudEZhY3RvcnkuYnV0dG9uRmFjdG9yeSgnaW5ib3gtYnV0dG9uJywgXCJJbmJveFwiLCAoKSA9PiBhZnRlckxvYWRET01NYW5pcHVsYXRpb25Nb2R1bGUuZ2VuZXJhdGVUYWJsZSh0YXNrQXJyYXkpKVxuICAgICAgICBjb25zdCBkdWVUb2RheUJ1dHRvbiA9IGVsZW1lbnRGYWN0b3J5LmJ1dHRvbkZhY3RvcnkoJ2R1ZS10b2RheS1idXR0b24nLCBcIkR1ZSBUb2RheVwiLCAoKSA9PiBhZnRlckxvYWRET01NYW5pcHVsYXRpb25Nb2R1bGUuZ2VuZXJhdGVUYWJsZSh0YXNrQXJyYXkpKVxuICAgICAgICBjb25zdCBkdWVUaGlzV2Vla0J1dHRvbiA9IGVsZW1lbnRGYWN0b3J5LmJ1dHRvbkZhY3RvcnkoJ2R1ZS10aGlzLXdlZWstYnV0dG9uJywgXCJEdWUgVGhpcyBXZWVrXCIsICgpID0+IGFmdGVyTG9hZERPTU1hbmlwdWxhdGlvbk1vZHVsZS5nZW5lcmF0ZVRhYmxlKHRhc2tBcnJheSkpXG4gICAgICAgIGRlZmF1bHROYXZoMi50ZXh0Q29udGVudCA9IFwiSG9tZVwiXG4gICAgICAgIGRlZmF1bHRCdXR0b25zRGl2LmNsYXNzTGlzdC5hZGQoJ2RlZmF1bHQtYnV0dG9ucy1kaXYnKVxuICAgICAgICBcbiAgICAgICAgZGVmYXVsdEJ1dHRvbnNEaXYuYXBwZW5kQ2hpbGQoZGVmYXVsdE5hdmgyKVxuICAgICAgICBkZWZhdWx0QnV0dG9uc0Rpdi5hcHBlbmRDaGlsZChpbmJveEJ1dHRvbilcbiAgICAgICAgZGVmYXVsdEJ1dHRvbnNEaXYuYXBwZW5kQ2hpbGQoZHVlVG9kYXlCdXR0b24pXG4gICAgICAgIGRlZmF1bHRCdXR0b25zRGl2LmFwcGVuZENoaWxkKGR1ZVRoaXNXZWVrQnV0dG9uKVxuXG4gICAgICAgIHJldHVybiBkZWZhdWx0QnV0dG9uc0RpdlxuICAgIH1cblxuICAgIGNvbnN0IF9jcmVhdGVQcm9qZWN0QnV0dG9uc0RpdiA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgcHJvamVjdEJ1dHRvbnNEaXYgPSBlbGVtZW50RmFjdG9yeS5kaXYuY2xvbmVOb2RlKCk7XG4gICAgICAgIGNvbnN0IHByb2plY3RzTmF2aDIgPSBlbGVtZW50RmFjdG9yeS5oMi5jbG9uZU5vZGUoKTtcbiAgICAgICAgLy9oYXZlIGEgcHJvamVjdCBhcnJheSBoZXJlXG4gICAgICAgIC8vbWFrZSBidXR0b25zIG5hbWVkIGFmdGVyIHRoZSAndGl0bGUnIHByb3BlcnR5IG9mIHNhaWQgcHJvamVjdHMgaW4gYXJyYXkgKHVzZWZ1bCB0byBkbyBhIGZvckVhY2ggbG9vcClcblxuICAgICAgICBwcm9qZWN0c05hdmgyLnRleHRDb250ZW50ID0gXCJQcm9qZWN0c1wiXG5cbiAgICAgICAgcHJvamVjdEJ1dHRvbnNEaXYuYXBwZW5kQ2hpbGQocHJvamVjdHNOYXZoMilcblxuICAgICAgICByZXR1cm4gcHJvamVjdEJ1dHRvbnNEaXZcbiAgICB9XG4gICAgXG5cbiAgICBjb25zdCBfY3JlYXRlSG9tZU5hdiA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgaG9tZU5hdkRpdiA9IGVsZW1lbnRGYWN0b3J5LmRpdi5jbG9uZU5vZGUoKTtcbiAgICAgICAgY29uc3QgZGVmYXVsdEJ1dHRvbnNEaXYgPSBfY3JlYXRlRGVmYXVsdEJ1dHRvbnNEaXYoKTtcbiAgICAgICAgY29uc3QgcHJvamVjdEJ1dHRvbnNEaXYgPSBfY3JlYXRlUHJvamVjdEJ1dHRvbnNEaXYoKTtcblxuICAgICAgICBjb25zdCBuZXdJdGVtQnV0dG9uID0gZWxlbWVudEZhY3RvcnkuYnV0dG9uRmFjdG9yeSgnbmV3SXRlbScsIFwiK1wiLCBhZnRlckxvYWRET01NYW5pcHVsYXRpb25Nb2R1bGUubmV3SXRlbVBvcHVwKVxuXG4gICAgICAgIGhvbWVOYXZEaXYuY2xhc3NMaXN0LmFkZCgnaG9tZU5hdicpO1xuXG4gICAgICAgIGhvbWVOYXZEaXYuYXBwZW5kQ2hpbGQoZGVmYXVsdEJ1dHRvbnNEaXYpXG4gICAgICAgIGhvbWVOYXZEaXYuYXBwZW5kQ2hpbGQocHJvamVjdEJ1dHRvbnNEaXYpXG4gICAgICAgIGhvbWVOYXZEaXYuYXBwZW5kQ2hpbGQobmV3SXRlbUJ1dHRvbilcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBob21lTmF2RGl2XG4gICAgfVxuXG4gICAgY29uc3QgX2NyZWF0ZURpc3BsYXlTZWN0aW9uID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBkaXNwbGF5RGl2ID0gZWxlbWVudEZhY3RvcnkuZGl2LmNsb25lTm9kZSgpXG4gICAgICAgIFxuICAgICAgICBkaXNwbGF5RGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGVudERpc3BsYXknKVxuXG4gICAgICAgIHJldHVybiBkaXNwbGF5RGl2XG4gICAgfVxuXG4gICAgY29uc3QgX2NyZWF0ZUNvbnRlbnREaXYgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnREaXYgPSBlbGVtZW50RmFjdG9yeS5kaXYuY2xvbmVOb2RlKCk7XG4gICAgICAgIGNvbnN0IGhvbWVOYXYgPSBfY3JlYXRlSG9tZU5hdigpO1xuICAgICAgICBjb25zdCBjb250ZW50RGlzcGxheSA9IF9jcmVhdGVEaXNwbGF5U2VjdGlvbigpO1xuXG4gICAgICAgIGNvbnRlbnREaXYuc2V0QXR0cmlidXRlKCdpZCcsICdjb250ZW50JylcblxuICAgICAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGhvbWVOYXYpXG4gICAgICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoY29udGVudERpc3BsYXkpXG4gICAgICAgIFxuICAgICAgICByZXR1cm4gY29udGVudERpdlxuICAgIH1cblxuICAgIGNvbnN0IGxvYWRXZWJwYWdlID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBoZWFkZXIgPSBfY3JlYXRlSGVhZGVyKCk7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBfY3JlYXRlQ29udGVudERpdigpO1xuICAgICAgICBjb25zdCBmb290ZXIgPSBfY3JlYXRlRm9vdGVyKCk7XG4gICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5cbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgICAgICBib2R5LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuICAgICAgICBib2R5LmFwcGVuZENoaWxkKGZvb3Rlcik7XG5cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBsb2FkV2VicGFnZVxuICAgIH1cbn0pKCk7XG5cbmNvbnN0IGFmdGVyTG9hZERPTU1hbmlwdWxhdGlvbk1vZHVsZSA9ICgoKSA9PiB7XG5cbiAgICBjb25zdCBmb3JtRmFjdG9yeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBjb25zdCB0YWJsZUZhY3RvcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0YWJsZScpO1xuICAgIGNvbnN0IHRoZWFkRmFjdG9yeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoZWFkJyk7XG4gICAgY29uc3QgdGJvZHlGYWN0b3J5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGJvZHknKVxuICAgIGNvbnN0IHRoRmFjdG9yeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoJyk7XG4gICAgY29uc3QgdHJGYWN0b3J5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcbiAgICBjb25zdCB0ZEZhY3RvcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuXG4gICAgY29uc3QgbmV3SXRlbVBvcHVwID0gKCkgPT4ge1xuICAgICAgICBlbGVtZW50RmFjdG9yeS5tb2RhbEluaXQoKTtcbiAgICAgICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKVxuICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiXG4gICAgICAgIGNvbnN0IG5ld0l0ZW1CdXR0b25Db250YWluZXIgPSBlbGVtZW50RmFjdG9yeS5kaXYuY2xvbmVOb2RlKCk7XG4gICAgICAgIGNvbnN0IG5ld1Rhc2tCdXR0b24gPSBlbGVtZW50RmFjdG9yeS5idXR0b25GYWN0b3J5KCduZXdUYXNrJywgJ05ldyBUYXNrJywgX25ld1Rhc2tQb3B1cCk7XG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3RCdXR0b24gPSBlbGVtZW50RmFjdG9yeS5idXR0b25GYWN0b3J5KCduZXdQcm9qZWN0JywgJ05ldyBQcm9qZWN0JywgX25ld1Byb2plY3RQb3B1cCk7XG5cbiAgICAgICAgbmV3SXRlbUJ1dHRvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCduZXdpdGVtcG9wdXBidXR0b25jb250YWluZXInKVxuXG4gICAgICAgIGNvbnN0IG1vZGFsQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbGNvbnRlbnQnKTtcblxuICAgICAgICBuZXdJdGVtQnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1Rhc2tCdXR0b24pO1xuICAgICAgICBuZXdJdGVtQnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1Byb2plY3RCdXR0b24pO1xuICAgICAgICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQobmV3SXRlbUJ1dHRvbkNvbnRhaW5lcik7XG4gICAgfVxuXG4gICAgY29uc3QgX2dldFZhbHVlRnJvbUlucHV0ID0gKGZvcm1JZCwgaW5wdXROYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IGZvcm1Ub0dldElucHV0RnJvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGZvcm1JZCk7XG4gICAgICAgIGNvbnN0IGlucHV0VG9HZXRWYWx1ZUZyb20gPSBmb3JtVG9HZXRJbnB1dEZyb20ucXVlcnlTZWxlY3RvcihgW25hbWU9XCIke2lucHV0TmFtZX1cIl1gKTtcbiAgICAgICAgY29uc3QgaW5wdXRWYWx1ZSA9IGlucHV0VG9HZXRWYWx1ZUZyb20udmFsdWU7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gaW5wdXRWYWx1ZTtcbiAgICB9XG4gICAgICAgIFxuICAgIGNvbnN0IF9uZXdQcm9qZWN0UG9wdXAgPSAoKSA9PiB7XG5cbiAgICAgICAgZWxlbWVudEZhY3RvcnkubW9kYWxJbml0KCk7XG5cbiAgICAgICAgY29uc3QgcHJvamVjdEZvcm0gPSBmb3JtRmFjdG9yeS5jbG9uZU5vZGUoKTtcbiAgICAgICAgY29uc3QgdGl0bGVJbnB1dCA9IGVsZW1lbnRGYWN0b3J5LmlucHV0RmFjdG9yeSgndGV4dCcsICdOYW1lJywgJ3Byb2plY3RuYW1lJywgJ3Byb2plY3RuYW1lJylcbiAgICAgICAgY29uc3QgcHJvamVjdFN1Ym1pdEJ1dHRvbiA9IGVsZW1lbnRGYWN0b3J5LmJ1dHRvbkZhY3RvcnkoXCJzdWJtaXRQcm9qZWN0Rm9ybVwiLCAnU3VibWl0JywgX3N1Ym1pdFByb2plY3REYXRhKTtcblxuICAgICAgICBjb25zdCBtb2RhbENvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWxjb250ZW50Jyk7XG5cbiAgICAgICAgaWYgKG1vZGFsQ29udGVudCkge1xuICAgICAgICAgICAgbW9kYWxDb250ZW50LmlubmVySFRNTCA9ICcnO1xuICAgICAgICAgIH0gXG5cbiAgICAgICAgcHJvamVjdEZvcm0uaWQgPSAncHJvamVjdGZvcm0nXG4gICAgICAgIHByb2plY3RGb3JtLmZvciA9ICdUYXNrJ1xuXG4gICAgICAgIHByb2plY3RGb3JtLmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpO1xuICAgICAgICBwcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChwcm9qZWN0U3VibWl0QnV0dG9uKTtcbiAgICAgICAgbW9kYWxDb250ZW50LmFwcGVuZENoaWxkKHByb2plY3RGb3JtKVxuICAgIH1cblxuICAgIGNvbnN0IF9zdWJtaXRQcm9qZWN0RGF0YSA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgdGl0bGVGcm9tUHJvamVjdEZvcm0gPSBfZ2V0VmFsdWVGcm9tSW5wdXQoJ3Byb2plY3Rmb3JtJywgJ3RpdGxlJyk7XG4gICAgICAgIGNvbnN0IHByb2plY3RBcnJheSA9IHByb2plY3RNb2R1bGUuZ2V0UHJvamVjdEFycmF5KCk7XG5cbiAgICAgICAgY29uc3QgbmV3UHJvamVjdCA9IHByb2plY3RNb2R1bGUucHJvamVjdEZhY3RvcnkodGl0bGVGcm9tUHJvamVjdEZvcm0pO1xuICAgICAgICBwcm9qZWN0QXJyYXkucHVzaChuZXdQcm9qZWN0KTtcbiAgICB9XG5cbiAgICBjb25zdCBfbmV3VGFza1BvcHVwID0gKCkgPT4ge1xuXG4gICAgICAgIGVsZW1lbnRGYWN0b3J5Lm1vZGFsSW5pdCgpO1xuXG4gICAgICAgIGNvbnN0IHByb2plY3RBcnJheSA9IHByb2plY3RNb2R1bGUuZ2V0UHJvamVjdEFycmF5KCk7XG4gICAgICAgIGNvbnN0IHByb2plY3RUaXRsZXMgPSBwcm9qZWN0QXJyYXkubWFwKChwcm9qZWN0VGl0bGVWYWx1ZXMpID0+IHByb2plY3RUaXRsZVZhbHVlcy50aXRsZSlcbiAgICAgICAgY29uc3QgdGFza0Zvcm0gPSBmb3JtRmFjdG9yeS5jbG9uZU5vZGUoKTtcbiAgICAgICAgY29uc3QgdGFza1RpdGxlSW5wdXQgPSBlbGVtZW50RmFjdG9yeS5pbnB1dEZhY3RvcnkoJ3RleHQnLCAnVGl0bGUnLCAndGFza1RpdGxlJywgJ3Rhc2tUaXRsZScpO1xuICAgICAgICBjb25zdCB0YXNrRHVlRGF0ZUlucHV0ID0gZWxlbWVudEZhY3RvcnkuaW5wdXRGYWN0b3J5KCdkYXRlJywgJ0RlYWRsaW5lJywgJ2R1ZURhdGUnLCAnZHVlRGF0ZScpO1xuICAgICAgICBjb25zdCB0YXNrUHJpb3JpdHlJbnB1dCA9IGVsZW1lbnRGYWN0b3J5LnNlbGVjdGlvbkZhY3RvcnkoJ1ByaW9yaXR5JywgJ0xvdycsICdNZWRpdW0nLCAnSGlnaCcpO1xuICAgICAgICBjb25zdCBpbldoaWNoUHJvamVjdElucHV0ID0gZWxlbWVudEZhY3Rvcnkuc2VsZWN0aW9uRmFjdG9yeSgnUHJvamVjdCcsIC4uLnByb2plY3RUaXRsZXMpXG4gICAgICAgIGNvbnN0IHRhc2tTdWJtaXRCdXR0b24gPSBlbGVtZW50RmFjdG9yeS5idXR0b25GYWN0b3J5KFwic3VibWl0VGFza0Zvcm1cIiwgJ1N1Ym1pdCcsIF9zdWJtaXRUYXNrRGF0YSk7XG4gICAgICAgIGNvbnN0IG1vZGFsQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbGNvbnRlbnQnKTtcblxuICAgICAgICB0YXNrRm9ybS5mb3IgPSAnVGFzaydcblxuICAgICAgICBpZiAobW9kYWxDb250ZW50KSB7XG4gICAgICAgICAgICBtb2RhbENvbnRlbnQuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgfSBcbiAgICAgICAgdGFza0Zvcm0uaWQgPSAndGFza2Zvcm0nXG5cbiAgICAgICAgdGFza0Zvcm0uYXBwZW5kQ2hpbGQodGFza1RpdGxlSW5wdXQpO1xuICAgICAgICB0YXNrRm9ybS5hcHBlbmRDaGlsZCh0YXNrRHVlRGF0ZUlucHV0KTtcbiAgICAgICAgdGFza0Zvcm0uYXBwZW5kQ2hpbGQodGFza1ByaW9yaXR5SW5wdXQpO1xuICAgICAgICB0YXNrRm9ybS5hcHBlbmRDaGlsZChpbldoaWNoUHJvamVjdElucHV0KTtcbiAgICAgICAgdGFza0Zvcm0uYXBwZW5kQ2hpbGQodGFza1N1Ym1pdEJ1dHRvbik7XG4gICAgICAgIG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZCh0YXNrRm9ybSk7XG4gICAgfVxuXG4gICAgY29uc3QgX2NvbnZlcnREYXRlVmFsdWVUb0FjdHVhbERhdGUgPSAob3JpZ2luYWxEYXRlU3RyaW5nKSA9PiB7XG4gICAgICAgIGNvbnN0IGRhdGVTdHJpbmdXaXRob3V0Tm9uTnVtZXJpYyA9IG9yaWdpbmFsRGF0ZVN0cmluZy5yZXBsYWNlKC9cXEQvZywgJycpO1xuICAgICAgICBjb25zdCB5ZWFyID0gZGF0ZVN0cmluZ1dpdGhvdXROb25OdW1lcmljLnN1YnN0cmluZygwLCA0KTtcbiAgICAgICAgY29uc3QgbW9udGggPSAocGFyc2VJbnQoZGF0ZVN0cmluZ1dpdGhvdXROb25OdW1lcmljLnN1YnN0cmluZyg0LCA2KSkgLSAxKS50b1N0cmluZygpXG4gICAgICAgIGNvbnN0IGRheSA9IGRhdGVTdHJpbmdXaXRob3V0Tm9uTnVtZXJpYy5zdWJzdHJpbmcoNik7XG4gICAgICAgIGNvbnN0IGRhdGVJbkNvcnJlY3RGb3JtID0gdG9EYXRlKG5ldyBEYXRlKHllYXIsIG1vbnRoLCBkYXkpKVxuXG4gICAgICAgIHJldHVybiBkYXRlSW5Db3JyZWN0Rm9ybVxuICAgIH1cblxuXG4gICAgY29uc3QgX3N1Ym1pdFRhc2tEYXRhID0gKCkgPT4ge1xuICAgICAgICBjb25zdCB0aXRsZUZyb21UYXNrRm9ybSA9IF9nZXRWYWx1ZUZyb21JbnB1dCAoJ3Rhc2tmb3JtJywgJ3Rhc2tUaXRsZScpXG4gICAgICAgIGNvbnN0IGR1ZURhdGVmcm9tVGFza0Zvcm0gPSBfZ2V0VmFsdWVGcm9tSW5wdXQoJ3Rhc2tmb3JtJywgJ2R1ZURhdGUnKTtcbiAgICAgICAgY29uc3QgZm9ybWF0dGVkRGF0ZSA9IF9jb252ZXJ0RGF0ZVZhbHVlVG9BY3R1YWxEYXRlKGR1ZURhdGVmcm9tVGFza0Zvcm0pO1xuICAgICAgICBjb25zdCB0YXNrUHJpb3JpdHlmcm9tVGFza0Zvcm0gPSBfZ2V0VmFsdWVGcm9tSW5wdXQoJ3Rhc2tmb3JtJywgJ3ByaW9yaXR5Jyk7XG4gICAgICAgIGNvbnN0IGluUHJvamVjdEZyb21UYXNrRm9ybSA9IF9nZXRWYWx1ZUZyb21JbnB1dCgndGFza2Zvcm0nLCAncHJvamVjdCcpO1xuICAgICAgICBjb25zdCB0YXNrQXJyYXkgPSB0YXNrTW9kdWxlLmdldFRhc2tBcnJheSgpXG5cbiAgICAgICAgY29uc3QgbmV3VGFzayA9IHRhc2tNb2R1bGUudGFza0ZhY3RvcnkodGl0bGVGcm9tVGFza0Zvcm0sIGZvcm1hdHRlZERhdGUsIHRhc2tQcmlvcml0eWZyb21UYXNrRm9ybSwgaW5Qcm9qZWN0RnJvbVRhc2tGb3JtKVxuICAgICAgICB0YXNrQXJyYXkucHVzaChuZXdUYXNrKVxuICAgICAgICBjb25zb2xlLmxvZyhuZXdUYXNrKVxuICAgICAgICBnZW5lcmF0ZVRhYmxlKHRhc2tBcnJheSlcbiAgICB9XG5cbiAgICBjb25zdCBfY3JlYXRlSXNBY2NvcG1wbGlzaGVkQ2hlY2tib3ggPSAodGFzaywgcHJvcGVydHkpID0+IHtcbiAgICAgICAgY29uc3QgY2hlY2tib3hDZWxsID0gdGRGYWN0b3J5LmNsb25lTm9kZSgpO1xuICAgICAgICBjb25zdCBjaGVja2JveCA9IGVsZW1lbnRGYWN0b3J5LmlucHV0RmFjdG9yeSgnY2hlY2tib3gnLCAnaXNBY2NvbXBsaXNoZWQnLCAndGFza0lzQWNjb21wbGlzaGVkJywgZmFsc2UpXG4gICAgICAgIGNoZWNrYm94LnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgIGNoZWNrYm94LmNoZWNrZWQgPSB0YXNrW3Byb3BlcnR5XTtcblxuICAgICAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRhc2tbcHJvcGVydHldID0gZXZlbnQudGFyZ2V0LmNoZWNrZWQ7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgY2hlY2tib3hDZWxsLmFwcGVuZENoaWxkKGNoZWNrYm94KTtcblxuICAgICAgICByZXR1cm4gY2hlY2tib3hDZWxsXG4gICAgfVxuXG4gICAgY29uc3QgX2NyZWF0ZUNlbGxXaXRoVGV4dENvbnRlbnQgPSAoZmFjdG9yeSwgY29udGVudCwgcm93VG9BcHBlbmRDZWxsVG8pID0+IHtcbiAgICAgICAgY29uc3QgY2VsbCA9IGZhY3RvcnkuY2xvbmVOb2RlKCk7XG4gICAgICAgIGNlbGwudGV4dENvbnRlbnQgPSBjb250ZW50O1xuICAgICAgICByb3dUb0FwcGVuZENlbGxUby5hcHBlbmRDaGlsZChjZWxsKTtcbiAgICB9XG5cbiAgICBjb25zdCBfZ2VuZXJhdGVUYWJsZUhlYWRlciA9IChhcnJheSkgPT4ge1xuICAgICAgICBjb25zdCB0aGVhZCA9IHRoZWFkRmFjdG9yeS5jbG9uZU5vZGUoKVxuICAgICAgICBjb25zdCBvYmplY3RLZXlzID0gT2JqZWN0LmtleXMoYXJyYXlbMF0pXG4gICAgICAgIGNvbnN0IGhlYWRlclJvdyA9IHRyRmFjdG9yeS5jbG9uZU5vZGUoKVxuICAgICAgICBvYmplY3RLZXlzLnNsaWNlKDAsIDMpLmZvckVhY2goKGtleSkgPT4geyBcbiAgICAgICAgICAgIF9jcmVhdGVDZWxsV2l0aFRleHRDb250ZW50KHRoRmFjdG9yeSwga2V5LCBoZWFkZXJSb3cpXG4gICAgICAgIH0pXG4gICAgICAgIF9jcmVhdGVDZWxsV2l0aFRleHRDb250ZW50KHRoRmFjdG9yeSwgJ0FjY29tcGxpc2hlZD8nLCBoZWFkZXJSb3cpXG4gICAgICAgIF9jcmVhdGVDZWxsV2l0aFRleHRDb250ZW50KHRoRmFjdG9yeSwgJ1Byb2plY3QnLCBoZWFkZXJSb3cpXG5cbiAgICAgICAgdGhlYWQuYXBwZW5kQ2hpbGQoaGVhZGVyUm93KTtcblxuICAgICAgICAvLyBjcmVhdGUgZnVuY3Rpb25hbGl0eSBmb3IgZWRpdCBhbmQgZGVsZXRlIGl0ZW0gaGVyZVxuXG4gICAgICAgIHJldHVybiB0aGVhZFxuICAgIH1cblxuICAgIGNvbnN0IF9nZW5lcmF0ZVRhYmxlQm9keSA9IChhcnJheSkgPT4ge1xuICAgICAgICBjb25zdCB0Ym9keSA9IHRib2R5RmFjdG9yeS5jbG9uZU5vZGUoKVxuICAgICAgICBjb25zdCBvYmplY3RLZXlzID0gT2JqZWN0LmtleXMoYXJyYXlbMF0pXG5cbiAgICAgICAgYXJyYXkuZm9yRWFjaCgob2JqZWN0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCByb3cgPSB0ckZhY3RvcnkuY2xvbmVOb2RlKClcbiAgICAgICAgICAgIG9iamVjdEtleXMuc2xpY2UoMCwgMykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgX2NyZWF0ZUNlbGxXaXRoVGV4dENvbnRlbnQodGRGYWN0b3J5LCBvYmplY3Rba2V5XSwgcm93KVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBvYmplY3RLZXlzLnNsaWNlKDMsIDQpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNoZWNrYm94ID0gX2NyZWF0ZUlzQWNjb3BtcGxpc2hlZENoZWNrYm94KG9iamVjdCwga2V5KTtcbiAgICAgICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBvYmplY3RLZXlzLnNsaWNlKDQsIDUpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIF9jcmVhdGVDZWxsV2l0aFRleHRDb250ZW50KHRkRmFjdG9yeSwgb2JqZWN0W2tleV0sIHJvdylcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGJvZHkuYXBwZW5kQ2hpbGQocm93KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gY3JlYXRlIGZ1bmN0aW9uYWxpdHkgZm9yIGVkaXQgYW5kIGRlbGV0ZSBpdGVtIGhlcmVcblxuICAgICAgICByZXR1cm4gdGJvZHlcblxuICAgICAgICB9XG5cbiAgICBjb25zdCBnZW5lcmF0ZVRhYmxlID0gKGFycmF5KSA9PiB7XG4gICAgICAgIGlmIChhcnJheS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdGFibGUgPSB0YWJsZUZhY3RvcnkuY2xvbmVOb2RlKClcbiAgICAgICAgY29uc3QgdGhlYWQgPSBfZ2VuZXJhdGVUYWJsZUhlYWRlcihhcnJheSk7XG4gICAgICAgIGNvbnN0IHRib2R5ID0gX2dlbmVyYXRlVGFibGVCb2R5KGFycmF5KTtcbiAgICAgICAgY29uc3QgY29udGVudEJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50RGlzcGxheScpXG4gICAgICAgIFxuICAgICAgICB0YWJsZS5hcHBlbmRDaGlsZCh0aGVhZCk7XG4gICAgICAgIHRhYmxlLmFwcGVuZENoaWxkKHRib2R5KTtcbiAgICAgICAgY29udGVudEJveC5hcHBlbmRDaGlsZCh0YWJsZSk7XG5cbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbmV3SXRlbVBvcHVwLFxuICAgICAgICBnZW5lcmF0ZVRhYmxlXG4gICAgfVxuXG59KSgpO1xuXG5jb25zdCBpbml0ID0gKCkgPT4ge1xuICAgIGNvbnN0IHRhc2tBcnJheSA9IHRhc2tNb2R1bGUuZ2V0VGFza0FycmF5KCk7XG4gICAgZWxlbWVudENyZWF0aW9uT25Mb2FkTW9kdWxlLmxvYWRXZWJwYWdlKCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGluaXQiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gIH0gOiBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgfSwgX3R5cGVvZihvYmopO1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==