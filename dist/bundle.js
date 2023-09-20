/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/styles.css":
/*!********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/styles.css ***!
  \********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../dist/fonts/Jost-VariableFont_wght.ttf */ \"./dist/fonts/Jost-VariableFont_wght.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `*,\r\n::before,\r\n::after {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n@font-face {\r\n  font-family: Jost;\r\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\r\n}\r\n\r\nhtml {\r\n  font-size: 12px;\r\n}\r\n\r\nbody {\r\n  font-family: \"Jost\", sans-serif;\r\n}\r\n\r\n.content {\r\n  min-height: 100vh;\r\n  color: #f2f3f5;\r\n}\r\n\r\n.header {\r\n  background-color: rgb(157, 157, 157, 0.1);\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  color: #353839;\r\n  padding: 0.5rem 1rem;\r\n  border-bottom: 0.0625rem solid rgba(113, 124, 150, 0.2);\r\n}\r\n\r\n.logo-div {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  -moz-column-gap: 1rem;\r\n       column-gap: 1rem;\r\n}\r\n\r\n.logo-img {\r\n  max-width: 2rem;\r\n}\r\n\r\n.logo-text {\r\n  min-height: 1.5rem;\r\n}\r\n\r\n.main {\r\n  display: grid;\r\n  grid-template-rows: 1fr 1fr;\r\n  place-content: center;\r\n  padding-top: 2rem;\r\n  gap: 2rem;\r\n}\r\n\r\n.gameboard-container {\r\n  position: relative;\r\n  background-color: white;\r\n  padding: 1rem;\r\n  display: grid;\r\n  grid-template-columns: auto 1fr;\r\n  box-shadow:\r\n    rgba(0, 0, 0, 0.16) 0px 3px 6px,\r\n    rgba(0, 0, 0, 0.23) 0px 3px 6px;\r\n  border-radius: 1rem;\r\n}\r\n\r\n.info-player {\r\n  grid-column: 1 / span 2;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  font-weight: bold;\r\n  font-size: 1rem;\r\n  color: white;\r\n  background-color: #f05;\r\n  padding: 0.25rem 0;\r\n  border-radius: 0.25rem;\r\n  margin-bottom: 0.5rem;\r\n  letter-spacing: 0.1rem;\r\n}\r\n\r\n.info-computer {\r\n  grid-column: 1 / span 2;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  font-weight: bold;\r\n  font-size: 1rem;\r\n  color: white;\r\n  background-color: #717c96;\r\n  padding: 0.25rem 0;\r\n  border-radius: 0.25rem;\r\n  margin-bottom: 0.5rem;\r\n  letter-spacing: 0.1rem;\r\n}\r\n\r\n.letters {\r\n  grid-column: 1 / span 2;\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  font-weight: bold;\r\n  font-size: 1rem;\r\n  color: #717c96b2;\r\n}\r\n\r\n.numbers {\r\n  display: flex;\r\n  flex-direction: column;\r\n  font-weight: bold;\r\n  font-size: 1rem;\r\n  color: #717c96b2;\r\n}\r\n\r\n.letter,\r\n.number {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: 2rem;\r\n  height: 2rem;\r\n  border: 0.0625rem solid white;\r\n}\r\n\r\n.board-row {\r\n  display: flex;\r\n}\r\n\r\n.cell {\r\n  display: flex;\r\n  width: 2rem;\r\n  height: 2rem;\r\n  border: 0.0625rem solid white;\r\n  background: rgba(97, 198, 255, 0.4);\r\n  border-radius: 0.25rem;\r\n}\r\n\r\n.computer-cell {\r\n  background: rgba(157, 157, 157, 0.2);\r\n}\r\n\r\n.rotate {\r\n  transform: rotate(90deg);\r\n}\r\n\r\n.ship,\r\n.sunk {\r\n  border-radius: 25%;\r\n}\r\n\r\n.overlay {\r\n  position: absolute;\r\n  background-color: rgba(88, 88, 88, 0.3);\r\n  border-radius: 1rem;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.hide {\r\n  display: none;\r\n}\r\n\r\n@media screen and (min-width: 640px) {\r\n}\r\n\r\n@media screen and (min-width: 768px) {\r\n  .main {\r\n    grid-template-columns: 1fr 1fr;\r\n    grid-template-rows: 1fr;\r\n  }\r\n\r\n  #playerContainer {\r\n    justify-self: end;\r\n  }\r\n\r\n  #computerContainer {\r\n    justify-self: start;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 1024px) {\r\n  html {\r\n    font-size: 16px;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 1280px) {\r\n  html {\r\n    font-size: 20px;\r\n  }\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleships/./src/styles.css?./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://battleships/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://battleships/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleships/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleships/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleships/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleships/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleships/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleships/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleships/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleships/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _scripts_game_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/game.js */ \"./src/scripts/game.js\");\n\r\n\r\n\r\n(0,_scripts_game_js__WEBPACK_IMPORTED_MODULE_1__.initGame)();\r\n\n\n//# sourceURL=webpack://battleships/./src/index.js?");

/***/ }),

/***/ "./src/scripts/computer.js":
/*!*********************************!*\
  !*** ./src/scripts/computer.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Computer {\r\n  constructor(name, enemyGameboard) {\r\n    this.name = name;\r\n    this.enemyGameboard = enemyGameboard;\r\n    this.previousAttacks = [];\r\n  }\r\n\r\n  attackRandom() {\r\n    if (!this.enemyGameboard) {\r\n      console.log(\"Error: Enemy Gameboard not set\");\r\n      return;\r\n    }\r\n    let x, y;\r\n    // Generate random coordinates until a legal move is found\r\n    do {\r\n      x = Math.floor(Math.random() * 10);\r\n      y = Math.floor(Math.random() * 10);\r\n    } while (\r\n      this.previousAttacks.some(([prevX, prevY]) => prevX === x && prevY === y)\r\n    );\r\n\r\n    this.previousAttacks.push([x, y]);\r\n\r\n    const result = this.enemyGameboard.receiveAttack(x, y);\r\n\r\n    return result;\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Computer);\r\n\n\n//# sourceURL=webpack://battleships/./src/scripts/computer.js?");

/***/ }),

/***/ "./src/scripts/dom.js":
/*!****************************!*\
  !*** ./src/scripts/dom.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addCellClickListener: () => (/* binding */ addCellClickListener),\n/* harmony export */   createGameboard: () => (/* binding */ createGameboard),\n/* harmony export */   gameboardContainer: () => (/* binding */ gameboardContainer),\n/* harmony export */   initGamePage: () => (/* binding */ initGamePage),\n/* harmony export */   overlayContainers: () => (/* binding */ overlayContainers),\n/* harmony export */   removeCellClickListener: () => (/* binding */ removeCellClickListener),\n/* harmony export */   updateGameboard: () => (/* binding */ updateGameboard)\n/* harmony export */ });\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/scripts/game.js\");\n\r\n// importing for the callback of clickHandler to response for Player Move\r\n\r\nconst assets = {\r\n  ship: \"../../dist/assets/ship.svg\",\r\n  hit: \"../../dist/assets/hit.svg\",\r\n  miss: \"../../dist/assets/miss.svg\",\r\n  sunk: \"../../dist/assets/sunk.svg\",\r\n  logoImg: \"../../dist/assets/battleship-logo.png\",\r\n  logoText: \"../../dist/assets/battleship-text-logo.svg\",\r\n  githubLogo: \"../../dist/assets/github-logo.svg\",\r\n};\r\n\r\nfunction initGamePage() {\r\n  const main = document.querySelector(\".main\");\r\n  const playerContainer = document.createElement(\"div\");\r\n  const computerContainer = document.createElement(\"div\");\r\n\r\n  playerContainer.classList.add(\"gameboard-container\");\r\n  computerContainer.classList.add(\"gameboard-container\");\r\n\r\n  playerContainer.id = \"playerContainer\";\r\n  computerContainer.id = \"computerContainer\";\r\n\r\n  main.appendChild(playerContainer);\r\n  main.appendChild(computerContainer);\r\n}\r\n\r\nfunction gameboardContainer(id) {\r\n  const container = document.getElementById(id);\r\n  const info = document.createElement(\"div\");\r\n\r\n  if (container.id === \"playerContainer\") {\r\n    info.classList.add(\"info-player\");\r\n    info.textContent = \"YOUR FLEET\";\r\n  } else if (container.id === \"computerContainer\") {\r\n    info.classList.add(\"info-computer\");\r\n    info.textContent = \"OPPONENT\";\r\n  }\r\n\r\n  const lettersArr = [\"A\", \"B\", \"C\", \"D\", \"E\", \"F\", \"G\", \"H\", \"I\", \"J\"];\r\n  const letters = document.createElement(\"div\");\r\n  letters.classList.add(\"letters\");\r\n\r\n  for (const letterText of lettersArr) {\r\n    const letterDiv = document.createElement(\"div\");\r\n    letterDiv.classList.add(\"letter\");\r\n    letterDiv.textContent = letterText;\r\n    letters.appendChild(letterDiv);\r\n  }\r\n\r\n  const numbers = document.createElement(\"div\");\r\n  numbers.classList.add(\"numbers\");\r\n\r\n  for (let i = 1; i <= 10; i++) {\r\n    const number = document.createElement(\"div\");\r\n    number.classList.add(\"number\");\r\n    number.textContent = i.toString();\r\n    numbers.appendChild(number);\r\n  }\r\n\r\n  const gameboard = document.createElement(\"div\");\r\n  gameboard.classList.add(\"gameboard\");\r\n\r\n  if (container.id === \"playerContainer\") {\r\n    gameboard.id = \"playerGameboard\";\r\n  } else if (container.id === \"computerContainer\") {\r\n    gameboard.id = \"computerGameboard\";\r\n  }\r\n\r\n  const overlay = document.createElement(\"div\");\r\n  overlay.classList.add(\"overlay\");\r\n\r\n  if (container.id === \"computerContainer\") {\r\n    overlay.classList.add(\"hide\");\r\n  }\r\n\r\n  container.appendChild(info);\r\n  container.appendChild(letters);\r\n  container.appendChild(numbers);\r\n  container.appendChild(gameboard);\r\n  container.appendChild(overlay);\r\n}\r\n\r\nfunction createGameboard(id, size) {\r\n  const gameboard = document.getElementById(id);\r\n\r\n  for (let i = 0; i < size; i++) {\r\n    const row = document.createElement(\"div\");\r\n    row.classList.add(\"board-row\");\r\n    gameboard.appendChild(row);\r\n\r\n    for (let j = 0; j < size; j++) {\r\n      const cell = document.createElement(\"div\");\r\n      cell.classList.add(\"cell\");\r\n\r\n      if (id === \"computerGameboard\") {\r\n        cell.classList.add(\"computer-cell\");\r\n      }\r\n\r\n      cell.dataset.row = i;\r\n      cell.dataset.col = j;\r\n\r\n      row.appendChild(cell);\r\n    }\r\n  }\r\n}\r\n\r\nfunction updateGameboard(board, id, hideShips = false) {\r\n  const gameboard = document.getElementById(id);\r\n\r\n  const cells = gameboard.querySelectorAll(\".cell\");\r\n\r\n  cells.forEach((cell) => {\r\n    const row = parseInt(cell.dataset.row, 10);\r\n    const col = parseInt(cell.dataset.col, 10);\r\n\r\n    const img = document.createElement(\"img\");\r\n\r\n    cell.innerHTML = \"\";\r\n\r\n    // computer Board\r\n    if (hideShips) {\r\n      if (board[row][col] === \"SHIP\") {\r\n        // display nothing on ship\r\n      } else if (board[row][col] === \"miss\") {\r\n        img.src = assets.miss;\r\n        img.alt = \"miss\";\r\n        console.log(\"computer board miss\");\r\n      } else if (board[row][col] === \"hit\") {\r\n        img.src = assets.hit;\r\n        img.alt = \"hit\";\r\n      } else if (board[row][col] === \"sunk\") {\r\n        img.src = assets.sunk;\r\n        img.alt = \"sunk\";\r\n        img.classList.add(\"sunk\");\r\n      }\r\n\r\n      // player Board\r\n    } else {\r\n      if (board[row][col] === \"SHIP\") {\r\n        img.src = assets.ship;\r\n        img.alt = \"SHIP\";\r\n        img.classList.add(\"ship\");\r\n      } else if (board[row][col] === \"hit\") {\r\n        img.src = assets.sunk; // to make the hit overlay the ship\r\n        img.alt = \"hit\";\r\n      } else if (board[row][col] === \"miss\") {\r\n        img.src = assets.miss;\r\n        img.alt = \"miss\";\r\n      } else if (board[row][col] === \"sunk\") {\r\n        img.src = assets.sunk;\r\n        img.alt = \"sunk\";\r\n        img.classList.add(\"sunk\");\r\n      }\r\n    }\r\n\r\n    cell.appendChild(img);\r\n  });\r\n}\r\n\r\nfunction clickHandler(e) {\r\n  console.log(e.target);\r\n  if (e.target.classList.contains(\"cell\")) {\r\n    const cell = e.target;\r\n    const row = parseInt(cell.dataset.row, 10);\r\n    const col = parseInt(cell.dataset.col, 10);\r\n\r\n    if (!cell.classList.contains(\"clicked\")) {\r\n      console.log(\"Row:\", row, \"Col:\", col);\r\n      (0,_game__WEBPACK_IMPORTED_MODULE_0__.handlePlayerMove)(row, col); // callback\r\n      cell.classList.add(\"clicked\");\r\n    }\r\n  }\r\n}\r\n\r\n// Function to add the click event listener\r\nfunction addCellClickListener() {\r\n  const computerGameboard = document.getElementById(\"computerGameboard\");\r\n\r\n  if (computerGameboard) {\r\n    computerGameboard.addEventListener(\"click\", clickHandler);\r\n  }\r\n}\r\n\r\n// Function to remove the click event listener\r\nfunction removeCellClickListener() {\r\n  const computerGameboard = document.getElementById(\"computerGameboard\");\r\n\r\n  if (computerGameboard) {\r\n    computerGameboard.removeEventListener(\"click\", clickHandler);\r\n    console.log(\"Should remove the event Listener clickHandler\");\r\n    console.log(computerGameboard);\r\n  }\r\n}\r\n\r\nfunction overlayContainers() {\r\n  setTimeout(() => {\r\n    const playerContainer = document.getElementById(\"playerContainer\");\r\n    const computerContainer = document.getElementById(\"computerContainer\");\r\n    const playerOverlay = playerContainer.querySelector(\".overlay\");\r\n    const computerOverlay = computerContainer.querySelector(\".overlay\");\r\n\r\n    playerOverlay.classList.toggle(\"hide\");\r\n    computerOverlay.classList.toggle(\"hide\");\r\n  }, 500);\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://battleships/./src/scripts/dom.js?");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   handlePlayerMove: () => (/* binding */ handlePlayerMove),\n/* harmony export */   initGame: () => (/* binding */ initGame)\n/* harmony export */ });\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ \"./src/scripts/gameboard.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ \"./src/scripts/player.js\");\n/* harmony import */ var _computer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./computer */ \"./src/scripts/computer.js\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom */ \"./src/scripts/dom.js\");\n\r\n\r\n\r\n\r\n\r\nconst boardSize = 10;\r\nconst playerGameboard = new _gameboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\nconst computerGameboard = new _gameboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\nconst player = new _player__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"Player\", computerGameboard);\r\nconst computer = new _computer__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\"Computer\", playerGameboard);\r\nconst playerShips = [\r\n  { name: \"warship\", length: 5 },\r\n  { name: \"battleship\", length: 4 },\r\n  { name: \"submarine\", length: 3 },\r\n  { name: \"destroyer\", length: 3 },\r\n  { name: \"cruiser\", length: 2 },\r\n];\r\n\r\nlet playerTurn = true;\r\n\r\nfunction promptCoordinates(shipInfo) {\r\n  while (true) {\r\n    const coordinates = prompt(\r\n      `Enter coordinates for your ${shipInfo.name} with a length of ${shipInfo.length} in a [0-9] by [0-9] grid\r\n      \\n[example => 3, 4]:`,\r\n    );\r\n    if (!coordinates) {\r\n      alert(\"Please enter coordinates for your ship.\");\r\n      continue;\r\n    }\r\n\r\n    const [x, y] = coordinates\r\n      .split(\",\")\r\n      .map((coord) => parseInt(coord.trim(), 10));\r\n    if (isNaN(x) || isNaN(y)) {\r\n      alert(\r\n        \"Invalid coordinates. Please enter valid numbers seperated by a coma.\",\r\n      );\r\n      continue;\r\n    }\r\n\r\n    return [x, y];\r\n  }\r\n}\r\n\r\nfunction promptDirection(shipInfo) {\r\n  while (true) {\r\n    const direction = prompt(\r\n      `Enter direction for your ${shipInfo.name} (0 for horizontal, 1 for vertical):`,\r\n    );\r\n    if (direction === \"0\" || direction === \"1\") {\r\n      return parseInt(direction);\r\n    }\r\n    alert(\"Invalid direction\");\r\n  }\r\n}\r\n\r\nfunction placePlayerShip(shipInfo) {\r\n  while (true) {\r\n    const [x, y] = promptCoordinates(shipInfo);\r\n    const direction = promptDirection(shipInfo);\r\n\r\n    if (playerGameboard.isValidPlacement(x, y, shipInfo.length, direction)) {\r\n      playerGameboard.placeShip(x, y, shipInfo.length, direction);\r\n      (0,_dom__WEBPACK_IMPORTED_MODULE_3__.updateGameboard)(playerGameboard.getBoard(), \"playerGameboard\");\r\n      return;\r\n    } else {\r\n      alert(\"Invalid placement. Please try again\");\r\n    }\r\n  }\r\n}\r\n\r\nfunction placePlayerShips() {\r\n  for (const shipInfo of playerShips) {\r\n    placePlayerShip(shipInfo);\r\n  }\r\n}\r\n\r\nfunction placeComputerShips() {\r\n  computerGameboard.autoPlaceShips();\r\n  (0,_dom__WEBPACK_IMPORTED_MODULE_3__.updateGameboard)(computerGameboard.getBoard(), \"computerGameboard\", true);\r\n}\r\n\r\nfunction handlePlayerMove(row, col) {\r\n  if (!playerTurn || playerGameboard.gameover() || computerGameboard.gameover())\r\n    return;\r\n\r\n  const attackResult = player.attack(row, col);\r\n\r\n  (0,_dom__WEBPACK_IMPORTED_MODULE_3__.updateGameboard)(computerGameboard.getBoard(), \"computerGameboard\", true);\r\n  console.log(\r\n    \"Computer Board after player Attacks:\",\r\n    computerGameboard.getBoard(),\r\n  );\r\n\r\n  if (computerGameboard.gameover()) console.log(\"Player wins the game!\");\r\n  else console.log(\"Player attacks result:\", attackResult);\r\n\r\n  if (attackResult === \"hit\") {\r\n    console.log(\"Player gets another turn!\");\r\n    return;\r\n  }\r\n\r\n  playerTurn = false;\r\n  (0,_dom__WEBPACK_IMPORTED_MODULE_3__.removeCellClickListener)();\r\n  (0,_dom__WEBPACK_IMPORTED_MODULE_3__.overlayContainers)();\r\n\r\n  setTimeout(() => {\r\n    handleComputerMove();\r\n  }, 1500);\r\n}\r\n\r\nfunction handleComputerMove() {\r\n  if (playerTurn || playerGameboard.gameover() || computerGameboard.gameover())\r\n    return;\r\n\r\n  const attackResult = computer.attackRandom();\r\n\r\n  (0,_dom__WEBPACK_IMPORTED_MODULE_3__.updateGameboard)(playerGameboard.getBoard(), \"playerGameboard\");\r\n  console.log(\r\n    \"Player Board after computer Attacks:\",\r\n    playerGameboard.getBoard(),\r\n  );\r\n\r\n  if (playerGameboard.gameover()) console.log(\"Computer wins the game!\");\r\n  else console.log(\"Computer attacks result:\", attackResult);\r\n\r\n  if (attackResult === \"hit\") {\r\n    console.log(\"Computer gets another turn!\");\r\n    setTimeout(() => {\r\n      handleComputerMove();\r\n    }, 2000);\r\n  } else {\r\n    playerTurn = true;\r\n    (0,_dom__WEBPACK_IMPORTED_MODULE_3__.overlayContainers)();\r\n    (0,_dom__WEBPACK_IMPORTED_MODULE_3__.addCellClickListener)(handlePlayerMove);\r\n  }\r\n}\r\n\r\nfunction initGame() {\r\n  (0,_dom__WEBPACK_IMPORTED_MODULE_3__.initGamePage)();\r\n  \r\n  (0,_dom__WEBPACK_IMPORTED_MODULE_3__.gameboardContainer)(\"playerContainer\");\r\n  (0,_dom__WEBPACK_IMPORTED_MODULE_3__.gameboardContainer)(\"computerContainer\");\r\n  (0,_dom__WEBPACK_IMPORTED_MODULE_3__.createGameboard)(\"playerGameboard\", boardSize);\r\n  (0,_dom__WEBPACK_IMPORTED_MODULE_3__.createGameboard)(\"computerGameboard\", boardSize);\r\n\r\n  placePlayerShips();\r\n  placeComputerShips();\r\n\r\n  (0,_dom__WEBPACK_IMPORTED_MODULE_3__.addCellClickListener)(handlePlayerMove);\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://battleships/./src/scripts/game.js?");

/***/ }),

/***/ "./src/scripts/gameboard.js":
/*!**********************************!*\
  !*** ./src/scripts/gameboard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./src/scripts/ship.js\");\n\r\n\r\nclass Gameboard {\r\n  constructor() {\r\n    this.board = Array(10)\r\n      .fill(\"\")\r\n      .map((x) => Array(10).fill(\"\"));\r\n    this.ships = [];\r\n  }\r\n\r\n  getBoard() {\r\n    return this.board;\r\n  }\r\n\r\n  getShips() {\r\n    return this.ships;\r\n  }\r\n\r\n  getShipIndex(index) {\r\n    return this.ships[index];\r\n  }\r\n\r\n  resetGameBoard() {\r\n    this.board = Array(10)\r\n      .fill(\"\")\r\n      .map((x) => Array(10).fill(\"\"));\r\n    this.ships = [];\r\n  }\r\n\r\n  isValidPlacement(x, y, len, direction) {\r\n    // Check if x and y are within valid ranges\r\n\r\n    if (x < 0 || x >= 10 || y < 0 || y >= 10) return false; // Invalid coordinates: x=${x}, y=${y}\r\n\r\n    if (direction === 0) {\r\n      if (y + len > 10) return false; // Out of bonds in horizontal\r\n\r\n      for (let i = x; i < x + len; i++) {\r\n        if (this.board[x][i] === \"SHIP\") return false; // Conflict with existing ship at x=${x}, y=${i}\r\n      }\r\n    } else if (direction === 1) {\r\n      if (x + len > 10) return false; // Out of bonds in vertical\r\n\r\n      for (let i = y; i < y + len; i++) {\r\n        if (this.board[x][i] === \"SHIP\") return false; // Conflict with existing ship at x=${x}, y=${i}\r\n      }\r\n    } else return false; // Invalid direction\r\n\r\n    return true;\r\n  }\r\n\r\n  placeShip(x, y, len, direction) {\r\n    const ship = new _ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](len);\r\n    const coords = [];\r\n    for (let i = 0; i < len; i++) {\r\n      this.board[x][y] = \"SHIP\";\r\n      coords.push([x, y]);\r\n      if (direction === 1) {\r\n        x++;\r\n      } else {\r\n        y++;\r\n      }\r\n    }\r\n    if (direction === 1) {\r\n      ship.updateDirection();\r\n    }\r\n    this.ships.push({ coords, ship });\r\n\r\n    return true;\r\n  }\r\n\r\n  autoPlaceShips() {\r\n    const shipLengths = [5, 4, 3, 3, 2];\r\n    for (const len of shipLengths) {\r\n      let isValid = false;\r\n      let x, y, direction;\r\n\r\n      while (!isValid) {\r\n        x = Math.floor(Math.random() * 10);\r\n        y = Math.floor(Math.random() * 10);\r\n        direction = Math.random() < 0.5 ? 0 : 1;\r\n\r\n        isValid = this.isValidPlacement(x, y, len, direction);\r\n      }\r\n\r\n      this.placeShip(x, y, len, direction);\r\n    }\r\n  }\r\n\r\n  receiveAttack(x, y) {\r\n    const cell = this.board[x][y];\r\n\r\n    // check if the cell is already attacked\r\n    if (cell === \"hit\" || cell === \"miss\") return;\r\n\r\n    const attackResult = cell === \"\" ? \"miss\" : \"hit\";\r\n    this.board[x][y] = attackResult;\r\n\r\n    if (attackResult === \"hit\") {\r\n      const { shipIndex, coordIndex } = this.findShipbyCoordinates(x, y);\r\n\r\n      if (shipIndex !== -1 && coordIndex !== -1) {\r\n        this.ships[shipIndex].ship.hit(coordIndex);\r\n\r\n        if (this.ships[shipIndex].ship.isSunk()) {\r\n          this.ships[shipIndex].coords.forEach((coord) => {\r\n            const [shipX, shipY] = coord;\r\n            this.board[shipX][shipY] = \"sunk\";\r\n          });\r\n        }\r\n      }\r\n    }\r\n    return attackResult;\r\n  }\r\n\r\n  findShipbyCoordinates(x, y) {\r\n    const foundShip = this.ships.find((shipObj) => {\r\n      return shipObj.coords.some((coord) => coord[0] === x && coord[1] === y);\r\n    });\r\n\r\n    if (foundShip) {\r\n      const shipIndex = this.ships.indexOf(foundShip);\r\n      const coordIndex = foundShip.coords.findIndex(\r\n        (coord) => coord[0] === x && coord[1] === y,\r\n      );\r\n      return { shipIndex, coordIndex };\r\n    }\r\n\r\n    return { shipIndex: -1, coordIndex: -1 };\r\n  }\r\n\r\n  shipsRemaining() {\r\n    return this.ships.filter((shipObj) => !shipObj.ship.isSunk()).length;\r\n  }\r\n\r\n  gameover() {\r\n    return this.ships.every((shipObj) => shipObj.ship.isSunk());\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);\r\n\n\n//# sourceURL=webpack://battleships/./src/scripts/gameboard.js?");

/***/ }),

/***/ "./src/scripts/player.js":
/*!*******************************!*\
  !*** ./src/scripts/player.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Player {\r\n  constructor(name, enemyGameboard) {\r\n    this.name = name;\r\n    this.enemyGameboard = enemyGameboard;\r\n  }\r\n\r\n  attack(x, y) {\r\n    if (!this.enemyGameboard) {\r\n      console.log(\"Error: Enemy Gameboard not set\");\r\n      return;\r\n    }\r\n    const result = this.enemyGameboard.receiveAttack(x, y);\r\n    return result;\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);\r\n\n\n//# sourceURL=webpack://battleships/./src/scripts/player.js?");

/***/ }),

/***/ "./src/scripts/ship.js":
/*!*****************************!*\
  !*** ./src/scripts/ship.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Ship {\r\n  constructor(length) {\r\n    this.length = length;\r\n    this.hitCount = 0;\r\n    this.direction = 0; // 0 is horizontal, 1 is vertical\r\n    this.position = Array(length).fill(0);\r\n  }\r\n\r\n  hit(num) {\r\n    if (num >= 0 && num < this.length && this.position[num] !== 1) {\r\n      // Check if the position hasn't been hit before\r\n      this.position[num] = 1;\r\n      this.hitCount++;\r\n    }\r\n  }\r\n\r\n  isHit() {\r\n    return this.hitCount > 0;\r\n  }\r\n\r\n  isSunk() {\r\n    return this.hitCount === this.length;\r\n  }\r\n\r\n  getPosition() {\r\n    return this.position;\r\n  }\r\n\r\n  getDirection() {\r\n    return this.direction;\r\n  }\r\n\r\n  updateDirection() {\r\n    this.direction = (this.direction + 1) % 2;\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);\r\n\n\n//# sourceURL=webpack://battleships/./src/scripts/ship.js?");

/***/ }),

/***/ "./dist/fonts/Jost-VariableFont_wght.ttf":
/*!***********************************************!*\
  !*** ./dist/fonts/Jost-VariableFont_wght.ttf ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6de07354a7108bacf175.ttf\";\n\n//# sourceURL=webpack://battleships/./dist/fonts/Jost-VariableFont_wght.ttf?");

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;