(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/roboto.ttf */ "./src/assets/roboto.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../src/assets/restaurant.jpeg */ "./src/assets/restaurant.jpeg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n  --back-black: rgb(0, 0, 0, 0.65);\r\n  --back-slight-black: rgb(0, 0, 0, 0.45);\r\n  --font-color: white;\r\n  font-size: 62.5%;\r\n}\r\n\r\n/* most used font in this application */\r\n@font-face {\r\n  font-family: \"MainFont\";\r\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"ttf\");\r\n}\r\n\r\n* {\r\n  margin: 0;\r\n  font-family: \"MainFont\", cursive;\r\n}\r\n\r\nbutton {\r\n  cursor: pointer;\r\n  border: none;\r\n  outline: none;\r\n}\r\n\r\n/* wrapper Container */\r\n.container {\r\n  min-height: 100vh;\r\n  display: flex;\r\n  flex-flow: column nowrap;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  width: 100%;\r\n  padding: 0;\r\n  margin: 0;\r\n  row-gap: 5em;\r\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n/* Header */\r\n\r\n.header {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-flow: column nowrap;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: var(--back-black);\r\n  color: var(--font-color);\r\n  gap: 0.5em;\r\n  font-size: 2em;\r\n  padding: 2% 0 15px 0;\r\n  border-bottom: 1px solid var(--font-color);\r\n}\r\n\r\n.buttons {\r\n  display: flex;\r\n  flex-flow: row nowrap;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.btn {\r\n  color: var(--font-color);\r\n  padding: 10%;\r\n  background-color: transparent;\r\n  border-bottom: 2px solid transparent;\r\n  font-size: 1em;\r\n  transition: transform 0.4s;\r\n}\r\n\r\n.btn.active {\r\n  border-bottom: 2px solid var(--font-color);\r\n}\r\n\r\n.btn:hover {\r\n  transform: translateY(-10%);\r\n}\r\n\r\n/* Main Content */\r\n.main-content {\r\n  display: flex;\r\n  flex-flow: column wrap;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: var(--back-slight-black);\r\n  color: var(--font-color);\r\n  padding: 4%;\r\n}\r\n\r\n/* Home */\r\n.home {\r\n  display: flex;\r\n  flex-flow: column nowrap;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 4em;\r\n  animation: fadeIn 1.5s;\r\n}\r\n\r\n.homep {\r\n  font-size: 2em;\r\n  color: var(--font-color);\r\n}\r\n\r\n.home img {\r\n  width: 100%;\r\n  border-radius: 1em;\r\n}\r\n\r\n/* menu */\r\n.menu {\r\n  display: inline-grid;\r\n  grid-template-rows: 1fr;\r\n  grid-template-columns: repeat(2, 1fr);\r\n  grid-gap: 4rem;\r\n  animation: fadeIn 1.5s;\r\n}\r\n\r\n.item {\r\n  height: 300px;\r\n  padding: 5em;\r\n  background-color: var(--back-black);\r\n  cursor: pointer;\r\n  color: var(--font-color);\r\n  display: flex;\r\n  flex-flow: column nowrap;\r\n  text-align: center;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 1rem;\r\n}\r\n\r\n.item:hover {\r\n  background-color: rgb(255, 255, 255, 0.25);\r\n  transition: all 0.5s;\r\n}\r\n\r\n.itemp {\r\n  font-size: 2em;\r\n}\r\n\r\n.name {\r\n  font-size: 3em;\r\n  font-weight: 600;\r\n}\r\n\r\n.itemImg {\r\n  width: 50%;\r\n}\r\n\r\n/* Contact */\r\n.contact {\r\n  display: flex;\r\n  /* background-color: var(--back-black); */\r\n  color: var(--font-color);\r\n  flex-flow: column;\r\n  align-items: start;\r\n  justify-content: center;\r\n  gap: 2em;\r\n  animation: fadeIn 1.5s;\r\n}\r\n\r\n.contactp img {\r\n  width: 2em;\r\n}\r\n\r\n.contactp {\r\n  display: flex;\r\n  font-size: 2em;\r\n  gap: 5%;\r\n  /* text-align: center; */\r\n  color: var(--font-color);\r\n  align-items: center;\r\n  justify-content: start;\r\n}\r\n\r\n.britania {\r\n  width: 60vw;\r\n  cursor: move;\r\n}\r\n/* Footer */\r\n.footer {\r\n  width: calc(100% - 2em);\r\n  display: flex;\r\n  flex-flow: row nowrap;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding: 1em;\r\n  background-color: var(--back-slight-black);\r\n  color: var(--font-color);\r\n}\r\n\r\n.footp {\r\n  font-size: 2em;\r\n}\r\n\r\n.git {\r\n  width: 2.5em;\r\n  padding: 0.4em;\r\n}\r\n\r\n.git:hover {\r\n  width: 3.3em;\r\n  padding: 0;\r\n  transform: rotate(360deg);\r\n  transition: all 0.4s;\r\n}\r\n\r\n/* Animations */\r\n@keyframes fadeIn {\r\n  0% {\r\n    opacity: 0;\r\n  }\r\n\r\n  100% {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n@media (max-width: 700px) {\r\n  .menu {\r\n    grid-template-columns: 1fr;\r\n  }\r\n  .britania {\r\n    width: 90vw;\r\n  }\r\n}\r\n\r\n@media (max-width: 430px) {\r\n  .itemImg {\r\n    width: 60%;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,gCAAgC;EAChC,uCAAuC;EACvC,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA,uCAAuC;AACvC;EACE,uBAAuB;EACvB,0DAA6C;AAC/C;;AAEA;EACE,SAAS;EACT,gCAAgC;AAClC;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,aAAa;AACf;;AAEA,sBAAsB;AACtB;EACE,iBAAiB;EACjB,aAAa;EACb,wBAAwB;EACxB,8BAA8B;EAC9B,mBAAmB;EACnB,WAAW;EACX,UAAU;EACV,SAAS;EACT,YAAY;EACZ,mDAAgD;EAChD,sBAAsB;EACtB,4BAA4B;AAC9B;;AAEA,WAAW;;AAEX;EACE,WAAW;EACX,aAAa;EACb,wBAAwB;EACxB,uBAAuB;EACvB,mBAAmB;EACnB,mCAAmC;EACnC,wBAAwB;EACxB,UAAU;EACV,cAAc;EACd,oBAAoB;EACpB,0CAA0C;AAC5C;;AAEA;EACE,aAAa;EACb,qBAAqB;EACrB,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,wBAAwB;EACxB,YAAY;EACZ,6BAA6B;EAC7B,oCAAoC;EACpC,cAAc;EACd,0BAA0B;AAC5B;;AAEA;EACE,0CAA0C;AAC5C;;AAEA;EACE,2BAA2B;AAC7B;;AAEA,iBAAiB;AACjB;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,0CAA0C;EAC1C,wBAAwB;EACxB,WAAW;AACb;;AAEA,SAAS;AACT;EACE,aAAa;EACb,wBAAwB;EACxB,uBAAuB;EACvB,mBAAmB;EACnB,QAAQ;EACR,sBAAsB;AACxB;;AAEA;EACE,cAAc;EACd,wBAAwB;AAC1B;;AAEA;EACE,WAAW;EACX,kBAAkB;AACpB;;AAEA,SAAS;AACT;EACE,oBAAoB;EACpB,uBAAuB;EACvB,qCAAqC;EACrC,cAAc;EACd,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,mCAAmC;EACnC,eAAe;EACf,wBAAwB;EACxB,aAAa;EACb,wBAAwB;EACxB,kBAAkB;EAClB,mBAAmB;EACnB,uBAAuB;EACvB,SAAS;AACX;;AAEA;EACE,0CAA0C;EAC1C,oBAAoB;AACtB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;EACd,gBAAgB;AAClB;;AAEA;EACE,UAAU;AACZ;;AAEA,YAAY;AACZ;EACE,aAAa;EACb,yCAAyC;EACzC,wBAAwB;EACxB,iBAAiB;EACjB,kBAAkB;EAClB,uBAAuB;EACvB,QAAQ;EACR,sBAAsB;AACxB;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,cAAc;EACd,OAAO;EACP,wBAAwB;EACxB,wBAAwB;EACxB,mBAAmB;EACnB,sBAAsB;AACxB;;AAEA;EACE,WAAW;EACX,YAAY;AACd;AACA,WAAW;AACX;EACE,uBAAuB;EACvB,aAAa;EACb,qBAAqB;EACrB,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;EACZ,0CAA0C;EAC1C,wBAAwB;AAC1B;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,YAAY;EACZ,cAAc;AAChB;;AAEA;EACE,YAAY;EACZ,UAAU;EACV,yBAAyB;EACzB,oBAAoB;AACtB;;AAEA,eAAe;AACf;EACE;IACE,UAAU;EACZ;;EAEA;IACE,UAAU;EACZ;AACF;;AAEA;EACE;IACE,0BAA0B;EAC5B;EACA;IACE,WAAW;EACb;AACF;;AAEA;EACE;IACE,UAAU;EACZ;AACF","sourcesContent":[":root {\r\n  --back-black: rgb(0, 0, 0, 0.65);\r\n  --back-slight-black: rgb(0, 0, 0, 0.45);\r\n  --font-color: white;\r\n  font-size: 62.5%;\r\n}\r\n\r\n/* most used font in this application */\r\n@font-face {\r\n  font-family: \"MainFont\";\r\n  src: url(\"./assets/roboto.ttf\") format(\"ttf\");\r\n}\r\n\r\n* {\r\n  margin: 0;\r\n  font-family: \"MainFont\", cursive;\r\n}\r\n\r\nbutton {\r\n  cursor: pointer;\r\n  border: none;\r\n  outline: none;\r\n}\r\n\r\n/* wrapper Container */\r\n.container {\r\n  min-height: 100vh;\r\n  display: flex;\r\n  flex-flow: column nowrap;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  width: 100%;\r\n  padding: 0;\r\n  margin: 0;\r\n  row-gap: 5em;\r\n  background: url(\"../src/assets/restaurant.jpeg\");\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n/* Header */\r\n\r\n.header {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-flow: column nowrap;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: var(--back-black);\r\n  color: var(--font-color);\r\n  gap: 0.5em;\r\n  font-size: 2em;\r\n  padding: 2% 0 15px 0;\r\n  border-bottom: 1px solid var(--font-color);\r\n}\r\n\r\n.buttons {\r\n  display: flex;\r\n  flex-flow: row nowrap;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.btn {\r\n  color: var(--font-color);\r\n  padding: 10%;\r\n  background-color: transparent;\r\n  border-bottom: 2px solid transparent;\r\n  font-size: 1em;\r\n  transition: transform 0.4s;\r\n}\r\n\r\n.btn.active {\r\n  border-bottom: 2px solid var(--font-color);\r\n}\r\n\r\n.btn:hover {\r\n  transform: translateY(-10%);\r\n}\r\n\r\n/* Main Content */\r\n.main-content {\r\n  display: flex;\r\n  flex-flow: column wrap;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: var(--back-slight-black);\r\n  color: var(--font-color);\r\n  padding: 4%;\r\n}\r\n\r\n/* Home */\r\n.home {\r\n  display: flex;\r\n  flex-flow: column nowrap;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 4em;\r\n  animation: fadeIn 1.5s;\r\n}\r\n\r\n.homep {\r\n  font-size: 2em;\r\n  color: var(--font-color);\r\n}\r\n\r\n.home img {\r\n  width: 100%;\r\n  border-radius: 1em;\r\n}\r\n\r\n/* menu */\r\n.menu {\r\n  display: inline-grid;\r\n  grid-template-rows: 1fr;\r\n  grid-template-columns: repeat(2, 1fr);\r\n  grid-gap: 4rem;\r\n  animation: fadeIn 1.5s;\r\n}\r\n\r\n.item {\r\n  height: 300px;\r\n  padding: 5em;\r\n  background-color: var(--back-black);\r\n  cursor: pointer;\r\n  color: var(--font-color);\r\n  display: flex;\r\n  flex-flow: column nowrap;\r\n  text-align: center;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 1rem;\r\n}\r\n\r\n.item:hover {\r\n  background-color: rgb(255, 255, 255, 0.25);\r\n  transition: all 0.5s;\r\n}\r\n\r\n.itemp {\r\n  font-size: 2em;\r\n}\r\n\r\n.name {\r\n  font-size: 3em;\r\n  font-weight: 600;\r\n}\r\n\r\n.itemImg {\r\n  width: 50%;\r\n}\r\n\r\n/* Contact */\r\n.contact {\r\n  display: flex;\r\n  /* background-color: var(--back-black); */\r\n  color: var(--font-color);\r\n  flex-flow: column;\r\n  align-items: start;\r\n  justify-content: center;\r\n  gap: 2em;\r\n  animation: fadeIn 1.5s;\r\n}\r\n\r\n.contactp img {\r\n  width: 2em;\r\n}\r\n\r\n.contactp {\r\n  display: flex;\r\n  font-size: 2em;\r\n  gap: 5%;\r\n  /* text-align: center; */\r\n  color: var(--font-color);\r\n  align-items: center;\r\n  justify-content: start;\r\n}\r\n\r\n.britania {\r\n  width: 60vw;\r\n  cursor: move;\r\n}\r\n/* Footer */\r\n.footer {\r\n  width: calc(100% - 2em);\r\n  display: flex;\r\n  flex-flow: row nowrap;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding: 1em;\r\n  background-color: var(--back-slight-black);\r\n  color: var(--font-color);\r\n}\r\n\r\n.footp {\r\n  font-size: 2em;\r\n}\r\n\r\n.git {\r\n  width: 2.5em;\r\n  padding: 0.4em;\r\n}\r\n\r\n.git:hover {\r\n  width: 3.3em;\r\n  padding: 0;\r\n  transform: rotate(360deg);\r\n  transition: all 0.4s;\r\n}\r\n\r\n/* Animations */\r\n@keyframes fadeIn {\r\n  0% {\r\n    opacity: 0;\r\n  }\r\n\r\n  100% {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n@media (max-width: 700px) {\r\n  .menu {\r\n    grid-template-columns: 1fr;\r\n  }\r\n  .britania {\r\n    width: 90vw;\r\n  }\r\n}\r\n\r\n@media (max-width: 430px) {\r\n  .itemImg {\r\n    width: 60%;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


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

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
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

"use strict";


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

"use strict";


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

"use strict";


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
  } // For old IE

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

"use strict";


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

/***/ "./src/assets/menu sync \\.(png%7Cjpe?g%7Csvg)$":
/*!*******************************************************************!*\
  !*** ./src/assets/menu/ sync nonrecursive \.(png%7Cjpe?g%7Csvg)$ ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./Bread-and-Cheese-with-Sugar.png": "./src/assets/menu/Bread-and-Cheese-with-Sugar.png",
	"./Butter-and-Strawberry-Combo.png": "./src/assets/menu/Butter-and-Strawberry-Combo.png",
	"./Milk-Meat-Pie.png": "./src/assets/menu/Milk-Meat-Pie.png",
	"./Pepper-Grilled-Beef.png": "./src/assets/menu/Pepper-Grilled-Beef.png",
	"./Salt-Grilled-Beef.png": "./src/assets/menu/Salt-Grilled-Beef.png",
	"./Sand-Crawler-Grilled-with-Butter.png": "./src/assets/menu/Sand-Crawler-Grilled-with-Butter.png",
	"./Sand-Crawler-Grilled-with-Herbs.png": "./src/assets/menu/Sand-Crawler-Grilled-with-Herbs.png",
	"./Sand-Crawler-Grilled-with-Salt.png": "./src/assets/menu/Sand-Crawler-Grilled-with-Salt.png",
	"./Sweet-Meat-Pie.png": "./src/assets/menu/Sweet-Meat-Pie.png",
	"./Vegetable-Meat-Pie.png": "./src/assets/menu/Vegetable-Meat-Pie.png"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/assets/menu sync \\.(png%7Cjpe?g%7Csvg)$";

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _assets_phone_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/phone.svg */ "./src/assets/phone.svg");
/* harmony import */ var _assets_boar_hat_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/boar-hat.png */ "./src/assets/boar-hat.png");
/* harmony import */ var _assets_britania_webp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/britania.webp */ "./src/assets/britania.webp");
// This file is used to creatte contact page of application





class Contact {
  #contact = document.createElement("div");

  createContact() {
    // create map img
    const map = document.createElement("img");
    map.src = _assets_britania_webp__WEBPACK_IMPORTED_MODULE_3__;
    map.alt = "Britania map";
    map.classList.add("britania");

    // append elements to parent element
    this.#contact.classList.add("contact");
    this.#contact.appendChild(this.createParagraph("+998946385930", _assets_phone_svg__WEBPACK_IMPORTED_MODULE_1__));
    this.#contact.appendChild(
      this.createParagraph(
        "Britania, Kingdom of Liones, Melodias street 106",
        _assets_boar_hat_png__WEBPACK_IMPORTED_MODULE_2__
      )
    );
    this.#contact.appendChild(map);
  }

  createParagraph(text, icon) {
    const para = document.createElement("div");
    para.classList.add("contactp");

    // create icon
    const imgIcon = document.createElement("img");
    imgIcon.src = icon;
    imgIcon.alt = "info";

    // create actual paragraph
    const paragraph = document.createElement("p");
    paragraph.innerHTML = text;

    para.appendChild(imgIcon);
    para.appendChild(paragraph);
    return para;
  }

  get getContact() {
    this.createContact();
    return this.#contact;
  }
}

const contact = new Contact();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contact.getContact);


/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _assets_github_white_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/github-white.svg */ "./src/assets/github-white.svg");



class Footer {
  #footer = document.createElement("div");

  constructor() {
    this.createFooter();
    return this.#footer;
  }

  createFooter() {
    this.#footer.classList.add("footer");

    // Generate text
    const text = document.createElement("pre");
    text.classList.add("footp");
    text.innerHTML = `Copyright &copy; 2023 khojiakbar `;

    // create link to GitHub
    const link = document.createElement("a");
    link.href = "https://github.com/khojiakbarkhayotov";

    const gitImg = document.createElement("img");
    gitImg.src = _assets_github_white_svg__WEBPACK_IMPORTED_MODULE_1__;
    gitImg.classList.add("git");
    gitImg.alt = "git";

    link.appendChild(gitImg);

    this.#footer.appendChild(text);
    this.#footer.appendChild(link);
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new Footer());


/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


class Header {
  #header = document.createElement("div");
  #btns = [];

  createHeader() {
    this.#header.classList.add("header");

    // create logo text
    const logo = document.createElement("h1");
    logo.innerHTML = "Boar Hat";
    // TODO: create class for it and change font-family

    // Create button group for managing app
    const btnGroup = document.createElement("div");
    btnGroup.classList.add("buttons");
    btnGroup.appendChild(this.generateButtons("Home"));
    btnGroup.appendChild(this.generateButtons("Menu"));
    btnGroup.appendChild(this.generateButtons("Contact"));

    // append child elements
    this.#header.appendChild(logo);
    this.#header.appendChild(btnGroup);
  }

  generateButtons(text) {
    const btn = document.createElement("button");
    btn.classList.add("btn");
    btn.innerHTML = text;

    this.#btns.push(btn);

    return btn;
  }

  get getHeader() {
    this.createHeader();
    return { header: this.#header, btns: this.#btns };
  }
}

const header = new Header();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (header.getHeader);


/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _assets_chef_webp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/chef.webp */ "./src/assets/chef.webp");
// This module is responsible for home page of website



class Home {
  #home = document.createElement("div");

  createHome() {
    // create home img
    const homeImg = document.createElement("img");
    homeImg.classList.add("homeImg");
    homeImg.src = _assets_chef_webp__WEBPACK_IMPORTED_MODULE_1__;
    homeImg.alt = "chef";

    // append home elements to parent
    this.#home.classList.add("home");
    this.#home.appendChild(this.createParagraph("Best food in your country"));
    this.#home.appendChild(
      this.createParagraph("Made with passion since 2014")
    );
    this.#home.appendChild(homeImg);
    this.#home.appendChild(this.createParagraph("Order online or visit us!"));
  }

  createParagraph(text) {
    const para = document.createElement("p");
    para.classList.add("homep");
    para.innerHTML = text;
    return para;
  }

  get getHome() {
    this.createHome();
    return this.#home;
  }
}

const home = new Home();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (home.getHome);


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header.js */ "./src/header.js");
/* harmony import */ var _footer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer.js */ "./src/footer.js");


// this file is for general website

// import _ from "lodash";







function component() {
  const container = document.createElement("container");
  container.classList.add("container");

  container.appendChild(_header_js__WEBPACK_IMPORTED_MODULE_4__["default"].header);

  // create Main content container for holding home, menu and contact
  const mainContent = document.createElement("div");
  mainContent.classList.add("main-content");

  const buttons = _header_js__WEBPACK_IMPORTED_MODULE_4__["default"].btns;

  buttons[0].classList.add("active");
  mainContent.appendChild(_home_js__WEBPACK_IMPORTED_MODULE_1__["default"]);

  buttons.forEach((btn) => {
    btn.addEventListener("click", function () {
      this.classList.add("active");
      buttons.forEach((item) => {
        if (this !== item) {
          item.classList.remove("active");
        }
      });
      const text = btn.textContent.toLowerCase();
      if (text === "home") {
        mainContent.innerHTML = "";
        mainContent.appendChild(_home_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
      } else if (text === "menu") {
        mainContent.innerHTML = "";
        mainContent.appendChild(_menu_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
      } else {
        mainContent.innerHTML = "";
        mainContent.appendChild(_contact_js__WEBPACK_IMPORTED_MODULE_2__["default"]);
      }
    });
  });

  container.appendChild(mainContent);

  container.appendChild(_footer_js__WEBPACK_IMPORTED_MODULE_5__["default"]);
  return container;
}

document.body.appendChild(component());


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
// This file is used for creating menu for clients


class Menu {
  #menu = document.createElement("div");
  #names = [
    "Sweet Meat Pie",
    "Vegetable Meat Pie",
    "Milk Meat Pie",
    "Pepper Grilled Beef",
    "Salt Grilled Beef",
    "Sand Crawler Grilled with Salt",
    "Sand Crawler Grilled with Butter",
    "Sand Crawler Grilled with Herbs",
    "Bread and Cheese with Sugar",
    "Butter and Strawberry Combo",
  ];
  #recipes = [
    "Aged meat, Sugar, Bay leaf",
    "Aged meat, Vegetables, Bay leaf",
    "Aged meat, Milk, Bay leaf",
    "Aged meat, Pepper, Truffle",
    "Aged meat, Salt, Truffle",
    "Organic milk, Salt, Asparagus",
    "Organic milk, Butter, Asparagus",
    "Organic milk, Herbs, Asparagus",
    "Organic milk, Sugar, Glamorous mountain goat milk",
    "Organic vegetables and fruit, Butter, Truly Wild Stawberries",
  ];

  sortImages(keys) {
    let orderedKeys = [];
    for (let i = 0; i < this.#names.length; i++) {
      const key = this.#names[i];
      orderedKeys.push(`./${key.replaceAll(" ", "-")}.png`);
    }
    return orderedKeys;
  }

  importAll(r) {
    let keys = this.sortImages(r.keys());
    return keys.map(r);
  }

  #images = this.importAll(
    __webpack_require__("./src/assets/menu sync \\.(png%7Cjpe?g%7Csvg)$")
  );

  createMenu() {
    this.#menu.classList.add("menu");
    // this.sortImages();

    // append foods to menu dynamically
    for (let i = 0; i < this.#names.length; i++) {
      this.#menu.appendChild(
        this.createMenuItem(this.#images[i], this.#names[i], this.#recipes[i])
      );
    }
  }

  createMenuItem(icon, name, text) {
    const item = document.createElement("div");
    item.classList.add("item");

    // create menu item image
    const itemImg = document.createElement("img");
    itemImg.classList.add("itemIMg");
    itemImg.src = icon;
    itemImg.alt = name;

    // create name of food
    const foodName = document.createElement("p");
    foodName.classList.add("name");
    foodName.innerHTML = name;

    // create recipe
    const recipe = document.createElement("p");
    recipe.classList.add("itemp");
    recipe.innerHTML = text;

    // append all childs to parent and return it
    item.appendChild(itemImg);
    item.appendChild(foodName);
    item.appendChild(recipe);

    return item;
  }

  get getMenu() {
    this.createMenu();
    return this.#menu;
  }
}

const menu = new Menu();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu.getMenu);


/***/ }),

/***/ "./src/assets/boar-hat.png":
/*!*********************************!*\
  !*** ./src/assets/boar-hat.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "9a443b644ec5c568f812.png";

/***/ }),

/***/ "./src/assets/britania.webp":
/*!**********************************!*\
  !*** ./src/assets/britania.webp ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "d7554d72306d546617f1.webp";

/***/ }),

/***/ "./src/assets/chef.webp":
/*!******************************!*\
  !*** ./src/assets/chef.webp ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "f1ea45184acb65d303b6.webp";

/***/ }),

/***/ "./src/assets/github-white.svg":
/*!*************************************!*\
  !*** ./src/assets/github-white.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "97ed8e7eef60d61ca469.svg";

/***/ }),

/***/ "./src/assets/menu/Bread-and-Cheese-with-Sugar.png":
/*!*********************************************************!*\
  !*** ./src/assets/menu/Bread-and-Cheese-with-Sugar.png ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "94b4ea1a943c2a1b3e9e.png";

/***/ }),

/***/ "./src/assets/menu/Butter-and-Strawberry-Combo.png":
/*!*********************************************************!*\
  !*** ./src/assets/menu/Butter-and-Strawberry-Combo.png ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "b6e64b4cac7ae6bf71bd.png";

/***/ }),

/***/ "./src/assets/menu/Milk-Meat-Pie.png":
/*!*******************************************!*\
  !*** ./src/assets/menu/Milk-Meat-Pie.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "cb6128dbdc7232745755.png";

/***/ }),

/***/ "./src/assets/menu/Pepper-Grilled-Beef.png":
/*!*************************************************!*\
  !*** ./src/assets/menu/Pepper-Grilled-Beef.png ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "73c302e5534ebe18fe29.png";

/***/ }),

/***/ "./src/assets/menu/Salt-Grilled-Beef.png":
/*!***********************************************!*\
  !*** ./src/assets/menu/Salt-Grilled-Beef.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "bbaab69999c219aa937b.png";

/***/ }),

/***/ "./src/assets/menu/Sand-Crawler-Grilled-with-Butter.png":
/*!**************************************************************!*\
  !*** ./src/assets/menu/Sand-Crawler-Grilled-with-Butter.png ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "0b1d5f6864c50c41085c.png";

/***/ }),

/***/ "./src/assets/menu/Sand-Crawler-Grilled-with-Herbs.png":
/*!*************************************************************!*\
  !*** ./src/assets/menu/Sand-Crawler-Grilled-with-Herbs.png ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "5fa92386f593a84d9645.png";

/***/ }),

/***/ "./src/assets/menu/Sand-Crawler-Grilled-with-Salt.png":
/*!************************************************************!*\
  !*** ./src/assets/menu/Sand-Crawler-Grilled-with-Salt.png ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "947d370e02e4c87b2804.png";

/***/ }),

/***/ "./src/assets/menu/Sweet-Meat-Pie.png":
/*!********************************************!*\
  !*** ./src/assets/menu/Sweet-Meat-Pie.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "7acbc4faa0477ba56e65.png";

/***/ }),

/***/ "./src/assets/menu/Vegetable-Meat-Pie.png":
/*!************************************************!*\
  !*** ./src/assets/menu/Vegetable-Meat-Pie.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "1ddee411dae9c56a3707.png";

/***/ }),

/***/ "./src/assets/phone.svg":
/*!******************************!*\
  !*** ./src/assets/phone.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "98ec98715d5d58d9ed97.svg";

/***/ }),

/***/ "./src/assets/restaurant.jpeg":
/*!************************************!*\
  !*** ./src/assets/restaurant.jpeg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "f0ecef019027f10cce39.jpeg";

/***/ }),

/***/ "./src/assets/roboto.ttf":
/*!*******************************!*\
  !*** ./src/assets/roboto.ttf ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "24c71ebd53c3ed50accb.ttf";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b0Isd0JBQXdCO0FBQzVDO0FBQ0EsNEJBQTRCLHlCQUF5QjtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUkscUVBQTZEO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHdCQUF3QjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxZQUFZLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYXNzZXRzL21lbnUvIHN5bmMgbm9ucmVjdXJzaXZlIFxcLihwbmclN0NqcGUiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaGVhZGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvcm9ib3RvLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL3NyYy9hc3NldHMvcmVzdGF1cmFudC5qcGVnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXHJcXG4gIC0tYmFjay1ibGFjazogcmdiKDAsIDAsIDAsIDAuNjUpO1xcclxcbiAgLS1iYWNrLXNsaWdodC1ibGFjazogcmdiKDAsIDAsIDAsIDAuNDUpO1xcclxcbiAgLS1mb250LWNvbG9yOiB3aGl0ZTtcXHJcXG4gIGZvbnQtc2l6ZTogNjIuNSU7XFxyXFxufVxcclxcblxcclxcbi8qIG1vc3QgdXNlZCBmb250IGluIHRoaXMgYXBwbGljYXRpb24gKi9cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTWFpbkZvbnRcXFwiO1xcclxcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIGZvcm1hdChcXFwidHRmXFxcIik7XFxyXFxufVxcclxcblxcclxcbioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJNYWluRm9udFxcXCIsIGN1cnNpdmU7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKiB3cmFwcGVyIENvbnRhaW5lciAqL1xcclxcbi5jb250YWluZXIge1xcclxcbiAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHJvdy1nYXA6IDVlbTtcXHJcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG59XFxyXFxuXFxyXFxuLyogSGVhZGVyICovXFxyXFxuXFxyXFxuLmhlYWRlciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrLWJsYWNrKTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXHJcXG4gIGdhcDogMC41ZW07XFxyXFxuICBmb250LXNpemU6IDJlbTtcXHJcXG4gIHBhZGRpbmc6IDIlIDAgMTVweCAwO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWZvbnQtY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uYnV0dG9ucyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1mbG93OiByb3cgbm93cmFwO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXHJcXG4gIHBhZGRpbmc6IDEwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbiAgZm9udC1zaXplOiAxZW07XFxyXFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC40cztcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi5hY3RpdmUge1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWZvbnQtY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuOmhvdmVyIHtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAlKTtcXHJcXG59XFxyXFxuXFxyXFxuLyogTWFpbiBDb250ZW50ICovXFxyXFxuLm1haW4tY29udGVudCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2stc2xpZ2h0LWJsYWNrKTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXHJcXG4gIHBhZGRpbmc6IDQlO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBIb21lICovXFxyXFxuLmhvbWUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogNGVtO1xcclxcbiAgYW5pbWF0aW9uOiBmYWRlSW4gMS41cztcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWVwIHtcXHJcXG4gIGZvbnQtc2l6ZTogMmVtO1xcclxcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uaG9tZSBpbWcge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxZW07XFxyXFxufVxcclxcblxcclxcbi8qIG1lbnUgKi9cXHJcXG4ubWVudSB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXHJcXG4gIGdyaWQtZ2FwOiA0cmVtO1xcclxcbiAgYW5pbWF0aW9uOiBmYWRlSW4gMS41cztcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW0ge1xcclxcbiAgaGVpZ2h0OiAzMDBweDtcXHJcXG4gIHBhZGRpbmc6IDVlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2stYmxhY2spO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW06aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XFxyXFxufVxcclxcblxcclxcbi5pdGVtcCB7XFxyXFxuICBmb250LXNpemU6IDJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hbWUge1xcclxcbiAgZm9udC1zaXplOiAzZW07XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbn1cXHJcXG5cXHJcXG4uaXRlbUltZyB7XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBDb250YWN0ICovXFxyXFxuLmNvbnRhY3Qge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2stYmxhY2spOyAqL1xcclxcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcclxcbiAgZmxleC1mbG93OiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogc3RhcnQ7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGdhcDogMmVtO1xcclxcbiAgYW5pbWF0aW9uOiBmYWRlSW4gMS41cztcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3RwIGltZyB7XFxyXFxuICB3aWR0aDogMmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdHAge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZvbnQtc2l6ZTogMmVtO1xcclxcbiAgZ2FwOiA1JTtcXHJcXG4gIC8qIHRleHQtYWxpZ246IGNlbnRlcjsgKi9cXHJcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcclxcbn1cXHJcXG5cXHJcXG4uYnJpdGFuaWEge1xcclxcbiAgd2lkdGg6IDYwdnc7XFxyXFxuICBjdXJzb3I6IG1vdmU7XFxyXFxufVxcclxcbi8qIEZvb3RlciAqL1xcclxcbi5mb290ZXIge1xcclxcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDJlbSk7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1mbG93OiByb3cgbm93cmFwO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMWVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFjay1zbGlnaHQtYmxhY2spO1xcclxcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdHAge1xcclxcbiAgZm9udC1zaXplOiAyZW07XFxyXFxufVxcclxcblxcclxcbi5naXQge1xcclxcbiAgd2lkdGg6IDIuNWVtO1xcclxcbiAgcGFkZGluZzogMC40ZW07XFxyXFxufVxcclxcblxcclxcbi5naXQ6aG92ZXIge1xcclxcbiAgd2lkdGg6IDMuM2VtO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC40cztcXHJcXG59XFxyXFxuXFxyXFxuLyogQW5pbWF0aW9ucyAqL1xcclxcbkBrZXlmcmFtZXMgZmFkZUluIHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIDEwMCUge1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNzAwcHgpIHtcXHJcXG4gIC5tZW51IHtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxyXFxuICB9XFxyXFxuICAuYnJpdGFuaWEge1xcclxcbiAgICB3aWR0aDogOTB2dztcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDQzMHB4KSB7XFxyXFxuICAuaXRlbUltZyB7XFxyXFxuICAgIHdpZHRoOiA2MCU7XFxyXFxuICB9XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxnQ0FBZ0M7RUFDaEMsdUNBQXVDO0VBQ3ZDLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUEsdUNBQXVDO0FBQ3ZDO0VBQ0UsdUJBQXVCO0VBQ3ZCLDBEQUE2QztBQUMvQzs7QUFFQTtFQUNFLFNBQVM7RUFDVCxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQSxzQkFBc0I7QUFDdEI7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLHdCQUF3QjtFQUN4Qiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxVQUFVO0VBQ1YsU0FBUztFQUNULFlBQVk7RUFDWixtREFBZ0Q7RUFDaEQsc0JBQXNCO0VBQ3RCLDRCQUE0QjtBQUM5Qjs7QUFFQSxXQUFXOztBQUVYO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYix3QkFBd0I7RUFDeEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixtQ0FBbUM7RUFDbkMsd0JBQXdCO0VBQ3hCLFVBQVU7RUFDVixjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixZQUFZO0VBQ1osNkJBQTZCO0VBQzdCLG9DQUFvQztFQUNwQyxjQUFjO0VBQ2QsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBLGlCQUFpQjtBQUNqQjtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQiwwQ0FBMEM7RUFDMUMsd0JBQXdCO0VBQ3hCLFdBQVc7QUFDYjs7QUFFQSxTQUFTO0FBQ1Q7RUFDRSxhQUFhO0VBQ2Isd0JBQXdCO0VBQ3hCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsUUFBUTtFQUNSLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUVBLFNBQVM7QUFDVDtFQUNFLG9CQUFvQjtFQUNwQix1QkFBdUI7RUFDdkIscUNBQXFDO0VBQ3JDLGNBQWM7RUFDZCxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLG1DQUFtQztFQUNuQyxlQUFlO0VBQ2Ysd0JBQXdCO0VBQ3hCLGFBQWE7RUFDYix3QkFBd0I7RUFDeEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsU0FBUztBQUNYOztBQUVBO0VBQ0UsMENBQTBDO0VBQzFDLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBLFlBQVk7QUFDWjtFQUNFLGFBQWE7RUFDYix5Q0FBeUM7RUFDekMsd0JBQXdCO0VBQ3hCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLFFBQVE7RUFDUixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsY0FBYztFQUNkLE9BQU87RUFDUCx3QkFBd0I7RUFDeEIsd0JBQXdCO0VBQ3hCLG1CQUFtQjtFQUNuQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkO0FBQ0EsV0FBVztBQUNYO0VBQ0UsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osMENBQTBDO0VBQzFDLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osY0FBYztBQUNoQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixVQUFVO0VBQ1YseUJBQXlCO0VBQ3pCLG9CQUFvQjtBQUN0Qjs7QUFFQSxlQUFlO0FBQ2Y7RUFDRTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLFVBQVU7RUFDWjtBQUNGOztBQUVBO0VBQ0U7SUFDRSwwQkFBMEI7RUFDNUI7RUFDQTtJQUNFLFdBQVc7RUFDYjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxyXFxuICAtLWJhY2stYmxhY2s6IHJnYigwLCAwLCAwLCAwLjY1KTtcXHJcXG4gIC0tYmFjay1zbGlnaHQtYmxhY2s6IHJnYigwLCAwLCAwLCAwLjQ1KTtcXHJcXG4gIC0tZm9udC1jb2xvcjogd2hpdGU7XFxyXFxuICBmb250LXNpemU6IDYyLjUlO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBtb3N0IHVzZWQgZm9udCBpbiB0aGlzIGFwcGxpY2F0aW9uICovXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIk1haW5Gb250XFxcIjtcXHJcXG4gIHNyYzogdXJsKFxcXCIuL2Fzc2V0cy9yb2JvdG8udHRmXFxcIikgZm9ybWF0KFxcXCJ0dGZcXFwiKTtcXHJcXG59XFxyXFxuXFxyXFxuKiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBmb250LWZhbWlseTogXFxcIk1haW5Gb250XFxcIiwgY3Vyc2l2ZTtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qIHdyYXBwZXIgQ29udGFpbmVyICovXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcm93LWdhcDogNWVtO1xcclxcbiAgYmFja2dyb3VuZDogdXJsKFxcXCIuLi9zcmMvYXNzZXRzL3Jlc3RhdXJhbnQuanBlZ1xcXCIpO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxufVxcclxcblxcclxcbi8qIEhlYWRlciAqL1xcclxcblxcclxcbi5oZWFkZXIge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFjay1ibGFjayk7XFxyXFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxyXFxuICBnYXA6IDAuNWVtO1xcclxcbiAgZm9udC1zaXplOiAyZW07XFxyXFxuICBwYWRkaW5nOiAyJSAwIDE1cHggMDtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1mb250LWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbnMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0biB7XFxyXFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxyXFxuICBwYWRkaW5nOiAxMCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG4gIGZvbnQtc2l6ZTogMWVtO1xcclxcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNHM7XFxyXFxufVxcclxcblxcclxcbi5idG4uYWN0aXZlIHtcXHJcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1mb250LWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bjpob3ZlciB7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwJSk7XFxyXFxufVxcclxcblxcclxcbi8qIE1haW4gQ29udGVudCAqL1xcclxcbi5tYWluLWNvbnRlbnQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrLXNsaWdodC1ibGFjayk7XFxyXFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxyXFxuICBwYWRkaW5nOiA0JTtcXHJcXG59XFxyXFxuXFxyXFxuLyogSG9tZSAqL1xcclxcbi5ob21lIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDRlbTtcXHJcXG4gIGFuaW1hdGlvbjogZmFkZUluIDEuNXM7XFxyXFxufVxcclxcblxcclxcbi5ob21lcCB7XFxyXFxuICBmb250LXNpemU6IDJlbTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWUgaW1nIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBtZW51ICovXFxyXFxuLm1lbnUge1xcclxcbiAgZGlzcGxheTogaW5saW5lLWdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxyXFxuICBncmlkLWdhcDogNHJlbTtcXHJcXG4gIGFuaW1hdGlvbjogZmFkZUluIDEuNXM7XFxyXFxufVxcclxcblxcclxcbi5pdGVtIHtcXHJcXG4gIGhlaWdodDogMzAwcHg7XFxyXFxuICBwYWRkaW5nOiA1ZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrLWJsYWNrKTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBnYXA6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5pdGVtOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1LCAwLjI1KTtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xcclxcbn1cXHJcXG5cXHJcXG4uaXRlbXAge1xcclxcbiAgZm9udC1zaXplOiAyZW07XFxyXFxufVxcclxcblxcclxcbi5uYW1lIHtcXHJcXG4gIGZvbnQtc2l6ZTogM2VtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW1JbWcge1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG59XFxyXFxuXFxyXFxuLyogQ29udGFjdCAqL1xcclxcbi5jb250YWN0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrLWJsYWNrKTsgKi9cXHJcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXHJcXG4gIGZsZXgtZmxvdzogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBnYXA6IDJlbTtcXHJcXG4gIGFuaW1hdGlvbjogZmFkZUluIDEuNXM7XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0cCBpbWcge1xcclxcbiAgd2lkdGg6IDJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3RwIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmb250LXNpemU6IDJlbTtcXHJcXG4gIGdhcDogNSU7XFxyXFxuICAvKiB0ZXh0LWFsaWduOiBjZW50ZXI7ICovXFxyXFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXHJcXG59XFxyXFxuXFxyXFxuLmJyaXRhbmlhIHtcXHJcXG4gIHdpZHRoOiA2MHZ3O1xcclxcbiAgY3Vyc29yOiBtb3ZlO1xcclxcbn1cXHJcXG4vKiBGb290ZXIgKi9cXHJcXG4uZm9vdGVyIHtcXHJcXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAyZW0pO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDFlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2stc2xpZ2h0LWJsYWNrKTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3RwIHtcXHJcXG4gIGZvbnQtc2l6ZTogMmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2l0IHtcXHJcXG4gIHdpZHRoOiAyLjVlbTtcXHJcXG4gIHBhZGRpbmc6IDAuNGVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2l0OmhvdmVyIHtcXHJcXG4gIHdpZHRoOiAzLjNlbTtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XFxyXFxufVxcclxcblxcclxcbi8qIEFuaW1hdGlvbnMgKi9cXHJcXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XFxyXFxuICAwJSB7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAxMDAlIHtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSB7XFxyXFxuICAubWVudSB7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcclxcbiAgfVxcclxcbiAgLmJyaXRhbmlhIHtcXHJcXG4gICAgd2lkdGg6IDkwdnc7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA0MzBweCkge1xcclxcbiAgLml0ZW1JbWcge1xcclxcbiAgICB3aWR0aDogNjAlO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwidmFyIG1hcCA9IHtcblx0XCIuL0JyZWFkLWFuZC1DaGVlc2Utd2l0aC1TdWdhci5wbmdcIjogXCIuL3NyYy9hc3NldHMvbWVudS9CcmVhZC1hbmQtQ2hlZXNlLXdpdGgtU3VnYXIucG5nXCIsXG5cdFwiLi9CdXR0ZXItYW5kLVN0cmF3YmVycnktQ29tYm8ucG5nXCI6IFwiLi9zcmMvYXNzZXRzL21lbnUvQnV0dGVyLWFuZC1TdHJhd2JlcnJ5LUNvbWJvLnBuZ1wiLFxuXHRcIi4vTWlsay1NZWF0LVBpZS5wbmdcIjogXCIuL3NyYy9hc3NldHMvbWVudS9NaWxrLU1lYXQtUGllLnBuZ1wiLFxuXHRcIi4vUGVwcGVyLUdyaWxsZWQtQmVlZi5wbmdcIjogXCIuL3NyYy9hc3NldHMvbWVudS9QZXBwZXItR3JpbGxlZC1CZWVmLnBuZ1wiLFxuXHRcIi4vU2FsdC1HcmlsbGVkLUJlZWYucG5nXCI6IFwiLi9zcmMvYXNzZXRzL21lbnUvU2FsdC1HcmlsbGVkLUJlZWYucG5nXCIsXG5cdFwiLi9TYW5kLUNyYXdsZXItR3JpbGxlZC13aXRoLUJ1dHRlci5wbmdcIjogXCIuL3NyYy9hc3NldHMvbWVudS9TYW5kLUNyYXdsZXItR3JpbGxlZC13aXRoLUJ1dHRlci5wbmdcIixcblx0XCIuL1NhbmQtQ3Jhd2xlci1HcmlsbGVkLXdpdGgtSGVyYnMucG5nXCI6IFwiLi9zcmMvYXNzZXRzL21lbnUvU2FuZC1DcmF3bGVyLUdyaWxsZWQtd2l0aC1IZXJicy5wbmdcIixcblx0XCIuL1NhbmQtQ3Jhd2xlci1HcmlsbGVkLXdpdGgtU2FsdC5wbmdcIjogXCIuL3NyYy9hc3NldHMvbWVudS9TYW5kLUNyYXdsZXItR3JpbGxlZC13aXRoLVNhbHQucG5nXCIsXG5cdFwiLi9Td2VldC1NZWF0LVBpZS5wbmdcIjogXCIuL3NyYy9hc3NldHMvbWVudS9Td2VldC1NZWF0LVBpZS5wbmdcIixcblx0XCIuL1ZlZ2V0YWJsZS1NZWF0LVBpZS5wbmdcIjogXCIuL3NyYy9hc3NldHMvbWVudS9WZWdldGFibGUtTWVhdC1QaWUucG5nXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjL2Fzc2V0cy9tZW51IHN5bmMgXFxcXC4ocG5nJTdDanBlP2clN0NzdmcpJFwiOyIsIi8vIFRoaXMgZmlsZSBpcyB1c2VkIHRvIGNyZWF0dGUgY29udGFjdCBwYWdlIG9mIGFwcGxpY2F0aW9uXHJcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XHJcbmltcG9ydCBwaG9uZSBmcm9tIFwiLi9hc3NldHMvcGhvbmUuc3ZnXCI7XHJcbmltcG9ydCBsb2NhdGlvbiBmcm9tIFwiLi9hc3NldHMvYm9hci1oYXQucG5nXCI7XHJcbmltcG9ydCBtYXBCcml0YW5pYSBmcm9tIFwiLi9hc3NldHMvYnJpdGFuaWEud2VicFwiO1xyXG5cclxuY2xhc3MgQ29udGFjdCB7XHJcbiAgI2NvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cclxuICBjcmVhdGVDb250YWN0KCkge1xyXG4gICAgLy8gY3JlYXRlIG1hcCBpbWdcclxuICAgIGNvbnN0IG1hcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICBtYXAuc3JjID0gbWFwQnJpdGFuaWE7XHJcbiAgICBtYXAuYWx0ID0gXCJCcml0YW5pYSBtYXBcIjtcclxuICAgIG1hcC5jbGFzc0xpc3QuYWRkKFwiYnJpdGFuaWFcIik7XHJcblxyXG4gICAgLy8gYXBwZW5kIGVsZW1lbnRzIHRvIHBhcmVudCBlbGVtZW50XHJcbiAgICB0aGlzLiNjb250YWN0LmNsYXNzTGlzdC5hZGQoXCJjb250YWN0XCIpO1xyXG4gICAgdGhpcy4jY29udGFjdC5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZVBhcmFncmFwaChcIis5OTg5NDYzODU5MzBcIiwgcGhvbmUpKTtcclxuICAgIHRoaXMuI2NvbnRhY3QuYXBwZW5kQ2hpbGQoXHJcbiAgICAgIHRoaXMuY3JlYXRlUGFyYWdyYXBoKFxyXG4gICAgICAgIFwiQnJpdGFuaWEsIEtpbmdkb20gb2YgTGlvbmVzLCBNZWxvZGlhcyBzdHJlZXQgMTA2XCIsXHJcbiAgICAgICAgbG9jYXRpb25cclxuICAgICAgKVxyXG4gICAgKTtcclxuICAgIHRoaXMuI2NvbnRhY3QuYXBwZW5kQ2hpbGQobWFwKTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZVBhcmFncmFwaCh0ZXh0LCBpY29uKSB7XHJcbiAgICBjb25zdCBwYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHBhcmEuY2xhc3NMaXN0LmFkZChcImNvbnRhY3RwXCIpO1xyXG5cclxuICAgIC8vIGNyZWF0ZSBpY29uXHJcbiAgICBjb25zdCBpbWdJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgIGltZ0ljb24uc3JjID0gaWNvbjtcclxuICAgIGltZ0ljb24uYWx0ID0gXCJpbmZvXCI7XHJcblxyXG4gICAgLy8gY3JlYXRlIGFjdHVhbCBwYXJhZ3JhcGhcclxuICAgIGNvbnN0IHBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgcGFyYWdyYXBoLmlubmVySFRNTCA9IHRleHQ7XHJcblxyXG4gICAgcGFyYS5hcHBlbmRDaGlsZChpbWdJY29uKTtcclxuICAgIHBhcmEuYXBwZW5kQ2hpbGQocGFyYWdyYXBoKTtcclxuICAgIHJldHVybiBwYXJhO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGdldENvbnRhY3QoKSB7XHJcbiAgICB0aGlzLmNyZWF0ZUNvbnRhY3QoKTtcclxuICAgIHJldHVybiB0aGlzLiNjb250YWN0O1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgY29udGFjdCA9IG5ldyBDb250YWN0KCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb250YWN0LmdldENvbnRhY3Q7XHJcbiIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XHJcbmltcG9ydCBnaXRodWIgZnJvbSBcIi4vYXNzZXRzL2dpdGh1Yi13aGl0ZS5zdmdcIjtcclxuXHJcbmNsYXNzIEZvb3RlciB7XHJcbiAgI2Zvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5jcmVhdGVGb290ZXIoKTtcclxuICAgIHJldHVybiB0aGlzLiNmb290ZXI7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVGb290ZXIoKSB7XHJcbiAgICB0aGlzLiNmb290ZXIuY2xhc3NMaXN0LmFkZChcImZvb3RlclwiKTtcclxuXHJcbiAgICAvLyBHZW5lcmF0ZSB0ZXh0XHJcbiAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInByZVwiKTtcclxuICAgIHRleHQuY2xhc3NMaXN0LmFkZChcImZvb3RwXCIpO1xyXG4gICAgdGV4dC5pbm5lckhUTUwgPSBgQ29weXJpZ2h0ICZjb3B5OyAyMDIzIGtob2ppYWtiYXIgYDtcclxuXHJcbiAgICAvLyBjcmVhdGUgbGluayB0byBHaXRIdWJcclxuICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICAgIGxpbmsuaHJlZiA9IFwiaHR0cHM6Ly9naXRodWIuY29tL2tob2ppYWtiYXJraGF5b3RvdlwiO1xyXG5cclxuICAgIGNvbnN0IGdpdEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICBnaXRJbWcuc3JjID0gZ2l0aHViO1xyXG4gICAgZ2l0SW1nLmNsYXNzTGlzdC5hZGQoXCJnaXRcIik7XHJcbiAgICBnaXRJbWcuYWx0ID0gXCJnaXRcIjtcclxuXHJcbiAgICBsaW5rLmFwcGVuZENoaWxkKGdpdEltZyk7XHJcblxyXG4gICAgdGhpcy4jZm9vdGVyLmFwcGVuZENoaWxkKHRleHQpO1xyXG4gICAgdGhpcy4jZm9vdGVyLmFwcGVuZENoaWxkKGxpbmspO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IEZvb3RlcigpO1xyXG4iLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xyXG5cclxuY2xhc3MgSGVhZGVyIHtcclxuICAjaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAjYnRucyA9IFtdO1xyXG5cclxuICBjcmVhdGVIZWFkZXIoKSB7XHJcbiAgICB0aGlzLiNoZWFkZXIuY2xhc3NMaXN0LmFkZChcImhlYWRlclwiKTtcclxuXHJcbiAgICAvLyBjcmVhdGUgbG9nbyB0ZXh0XHJcbiAgICBjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gICAgbG9nby5pbm5lckhUTUwgPSBcIkJvYXIgSGF0XCI7XHJcbiAgICAvLyBUT0RPOiBjcmVhdGUgY2xhc3MgZm9yIGl0IGFuZCBjaGFuZ2UgZm9udC1mYW1pbHlcclxuXHJcbiAgICAvLyBDcmVhdGUgYnV0dG9uIGdyb3VwIGZvciBtYW5hZ2luZyBhcHBcclxuICAgIGNvbnN0IGJ0bkdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGJ0bkdyb3VwLmNsYXNzTGlzdC5hZGQoXCJidXR0b25zXCIpO1xyXG4gICAgYnRuR3JvdXAuYXBwZW5kQ2hpbGQodGhpcy5nZW5lcmF0ZUJ1dHRvbnMoXCJIb21lXCIpKTtcclxuICAgIGJ0bkdyb3VwLmFwcGVuZENoaWxkKHRoaXMuZ2VuZXJhdGVCdXR0b25zKFwiTWVudVwiKSk7XHJcbiAgICBidG5Hcm91cC5hcHBlbmRDaGlsZCh0aGlzLmdlbmVyYXRlQnV0dG9ucyhcIkNvbnRhY3RcIikpO1xyXG5cclxuICAgIC8vIGFwcGVuZCBjaGlsZCBlbGVtZW50c1xyXG4gICAgdGhpcy4jaGVhZGVyLmFwcGVuZENoaWxkKGxvZ28pO1xyXG4gICAgdGhpcy4jaGVhZGVyLmFwcGVuZENoaWxkKGJ0bkdyb3VwKTtcclxuICB9XHJcblxyXG4gIGdlbmVyYXRlQnV0dG9ucyh0ZXh0KSB7XHJcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgYnRuLmNsYXNzTGlzdC5hZGQoXCJidG5cIik7XHJcbiAgICBidG4uaW5uZXJIVE1MID0gdGV4dDtcclxuXHJcbiAgICB0aGlzLiNidG5zLnB1c2goYnRuKTtcclxuXHJcbiAgICByZXR1cm4gYnRuO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGdldEhlYWRlcigpIHtcclxuICAgIHRoaXMuY3JlYXRlSGVhZGVyKCk7XHJcbiAgICByZXR1cm4geyBoZWFkZXI6IHRoaXMuI2hlYWRlciwgYnRuczogdGhpcy4jYnRucyB9O1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgaGVhZGVyID0gbmV3IEhlYWRlcigpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaGVhZGVyLmdldEhlYWRlcjtcclxuIiwiLy8gVGhpcyBtb2R1bGUgaXMgcmVzcG9uc2libGUgZm9yIGhvbWUgcGFnZSBvZiB3ZWJzaXRlXHJcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XHJcbmltcG9ydCBjaGVmIGZyb20gXCIuL2Fzc2V0cy9jaGVmLndlYnBcIjtcclxuXHJcbmNsYXNzIEhvbWUge1xyXG4gICNob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcbiAgY3JlYXRlSG9tZSgpIHtcclxuICAgIC8vIGNyZWF0ZSBob21lIGltZ1xyXG4gICAgY29uc3QgaG9tZUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICBob21lSW1nLmNsYXNzTGlzdC5hZGQoXCJob21lSW1nXCIpO1xyXG4gICAgaG9tZUltZy5zcmMgPSBjaGVmO1xyXG4gICAgaG9tZUltZy5hbHQgPSBcImNoZWZcIjtcclxuXHJcbiAgICAvLyBhcHBlbmQgaG9tZSBlbGVtZW50cyB0byBwYXJlbnRcclxuICAgIHRoaXMuI2hvbWUuY2xhc3NMaXN0LmFkZChcImhvbWVcIik7XHJcbiAgICB0aGlzLiNob21lLmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlUGFyYWdyYXBoKFwiQmVzdCBmb29kIGluIHlvdXIgY291bnRyeVwiKSk7XHJcbiAgICB0aGlzLiNob21lLmFwcGVuZENoaWxkKFxyXG4gICAgICB0aGlzLmNyZWF0ZVBhcmFncmFwaChcIk1hZGUgd2l0aCBwYXNzaW9uIHNpbmNlIDIwMTRcIilcclxuICAgICk7XHJcbiAgICB0aGlzLiNob21lLmFwcGVuZENoaWxkKGhvbWVJbWcpO1xyXG4gICAgdGhpcy4jaG9tZS5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZVBhcmFncmFwaChcIk9yZGVyIG9ubGluZSBvciB2aXNpdCB1cyFcIikpO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlUGFyYWdyYXBoKHRleHQpIHtcclxuICAgIGNvbnN0IHBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIHBhcmEuY2xhc3NMaXN0LmFkZChcImhvbWVwXCIpO1xyXG4gICAgcGFyYS5pbm5lckhUTUwgPSB0ZXh0O1xyXG4gICAgcmV0dXJuIHBhcmE7XHJcbiAgfVxyXG5cclxuICBnZXQgZ2V0SG9tZSgpIHtcclxuICAgIHRoaXMuY3JlYXRlSG9tZSgpO1xyXG4gICAgcmV0dXJuIHRoaXMuI2hvbWU7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBob21lID0gbmV3IEhvbWUoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhvbWUuZ2V0SG9tZTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vLyB0aGlzIGZpbGUgaXMgZm9yIGdlbmVyYWwgd2Vic2l0ZVxyXG5cclxuLy8gaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xyXG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xyXG5pbXBvcnQgaG9tZSBmcm9tIFwiLi9ob21lLmpzXCI7XHJcbmltcG9ydCBjb250YWN0IGZyb20gXCIuL2NvbnRhY3QuanNcIjtcclxuaW1wb3J0IG1lbnUgZnJvbSBcIi4vbWVudS5qc1wiO1xyXG5pbXBvcnQgaGVhZGVyIGZyb20gXCIuL2hlYWRlci5qc1wiO1xyXG5pbXBvcnQgZm9vdGVyIGZyb20gXCIuL2Zvb3Rlci5qc1wiO1xyXG5cclxuZnVuY3Rpb24gY29tcG9uZW50KCkge1xyXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjb250YWluZXJcIik7XHJcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXJcIik7XHJcblxyXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXIuaGVhZGVyKTtcclxuXHJcbiAgLy8gY3JlYXRlIE1haW4gY29udGVudCBjb250YWluZXIgZm9yIGhvbGRpbmcgaG9tZSwgbWVudSBhbmQgY29udGFjdFxyXG4gIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBtYWluQ29udGVudC5jbGFzc0xpc3QuYWRkKFwibWFpbi1jb250ZW50XCIpO1xyXG5cclxuICBjb25zdCBidXR0b25zID0gaGVhZGVyLmJ0bnM7XHJcblxyXG4gIGJ1dHRvbnNbMF0uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChob21lKTtcclxuXHJcbiAgYnV0dG9ucy5mb3JFYWNoKChidG4pID0+IHtcclxuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICB0aGlzLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgICAgIGJ1dHRvbnMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzICE9PSBpdGVtKSB7XHJcbiAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgdGV4dCA9IGJ0bi50ZXh0Q29udGVudC50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICBpZiAodGV4dCA9PT0gXCJob21lXCIpIHtcclxuICAgICAgICBtYWluQ29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgIG1haW5Db250ZW50LmFwcGVuZENoaWxkKGhvbWUpO1xyXG4gICAgICB9IGVsc2UgaWYgKHRleHQgPT09IFwibWVudVwiKSB7XHJcbiAgICAgICAgbWFpbkNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChtZW51KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBtYWluQ29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgIG1haW5Db250ZW50LmFwcGVuZENoaWxkKGNvbnRhY3QpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1haW5Db250ZW50KTtcclxuXHJcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZvb3Rlcik7XHJcbiAgcmV0dXJuIGNvbnRhaW5lcjtcclxufVxyXG5cclxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb21wb25lbnQoKSk7XHJcbiIsIi8vIFRoaXMgZmlsZSBpcyB1c2VkIGZvciBjcmVhdGluZyBtZW51IGZvciBjbGllbnRzXHJcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XHJcblxyXG5jbGFzcyBNZW51IHtcclxuICAjbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgI25hbWVzID0gW1xyXG4gICAgXCJTd2VldCBNZWF0IFBpZVwiLFxyXG4gICAgXCJWZWdldGFibGUgTWVhdCBQaWVcIixcclxuICAgIFwiTWlsayBNZWF0IFBpZVwiLFxyXG4gICAgXCJQZXBwZXIgR3JpbGxlZCBCZWVmXCIsXHJcbiAgICBcIlNhbHQgR3JpbGxlZCBCZWVmXCIsXHJcbiAgICBcIlNhbmQgQ3Jhd2xlciBHcmlsbGVkIHdpdGggU2FsdFwiLFxyXG4gICAgXCJTYW5kIENyYXdsZXIgR3JpbGxlZCB3aXRoIEJ1dHRlclwiLFxyXG4gICAgXCJTYW5kIENyYXdsZXIgR3JpbGxlZCB3aXRoIEhlcmJzXCIsXHJcbiAgICBcIkJyZWFkIGFuZCBDaGVlc2Ugd2l0aCBTdWdhclwiLFxyXG4gICAgXCJCdXR0ZXIgYW5kIFN0cmF3YmVycnkgQ29tYm9cIixcclxuICBdO1xyXG4gICNyZWNpcGVzID0gW1xyXG4gICAgXCJBZ2VkIG1lYXQsIFN1Z2FyLCBCYXkgbGVhZlwiLFxyXG4gICAgXCJBZ2VkIG1lYXQsIFZlZ2V0YWJsZXMsIEJheSBsZWFmXCIsXHJcbiAgICBcIkFnZWQgbWVhdCwgTWlsaywgQmF5IGxlYWZcIixcclxuICAgIFwiQWdlZCBtZWF0LCBQZXBwZXIsIFRydWZmbGVcIixcclxuICAgIFwiQWdlZCBtZWF0LCBTYWx0LCBUcnVmZmxlXCIsXHJcbiAgICBcIk9yZ2FuaWMgbWlsaywgU2FsdCwgQXNwYXJhZ3VzXCIsXHJcbiAgICBcIk9yZ2FuaWMgbWlsaywgQnV0dGVyLCBBc3BhcmFndXNcIixcclxuICAgIFwiT3JnYW5pYyBtaWxrLCBIZXJicywgQXNwYXJhZ3VzXCIsXHJcbiAgICBcIk9yZ2FuaWMgbWlsaywgU3VnYXIsIEdsYW1vcm91cyBtb3VudGFpbiBnb2F0IG1pbGtcIixcclxuICAgIFwiT3JnYW5pYyB2ZWdldGFibGVzIGFuZCBmcnVpdCwgQnV0dGVyLCBUcnVseSBXaWxkIFN0YXdiZXJyaWVzXCIsXHJcbiAgXTtcclxuXHJcbiAgc29ydEltYWdlcyhrZXlzKSB7XHJcbiAgICBsZXQgb3JkZXJlZEtleXMgPSBbXTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy4jbmFtZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3Qga2V5ID0gdGhpcy4jbmFtZXNbaV07XHJcbiAgICAgIG9yZGVyZWRLZXlzLnB1c2goYC4vJHtrZXkucmVwbGFjZUFsbChcIiBcIiwgXCItXCIpfS5wbmdgKTtcclxuICAgIH1cclxuICAgIHJldHVybiBvcmRlcmVkS2V5cztcclxuICB9XHJcblxyXG4gIGltcG9ydEFsbChyKSB7XHJcbiAgICBsZXQga2V5cyA9IHRoaXMuc29ydEltYWdlcyhyLmtleXMoKSk7XHJcbiAgICByZXR1cm4ga2V5cy5tYXAocik7XHJcbiAgfVxyXG5cclxuICAjaW1hZ2VzID0gdGhpcy5pbXBvcnRBbGwoXHJcbiAgICByZXF1aXJlLmNvbnRleHQoXCIuL2Fzc2V0cy9tZW51XCIsIGZhbHNlLCAvXFwuKHBuZ3xqcGU/Z3xzdmcpJC8pXHJcbiAgKTtcclxuXHJcbiAgY3JlYXRlTWVudSgpIHtcclxuICAgIHRoaXMuI21lbnUuY2xhc3NMaXN0LmFkZChcIm1lbnVcIik7XHJcbiAgICAvLyB0aGlzLnNvcnRJbWFnZXMoKTtcclxuXHJcbiAgICAvLyBhcHBlbmQgZm9vZHMgdG8gbWVudSBkeW5hbWljYWxseVxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLiNuYW1lcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICB0aGlzLiNtZW51LmFwcGVuZENoaWxkKFxyXG4gICAgICAgIHRoaXMuY3JlYXRlTWVudUl0ZW0odGhpcy4jaW1hZ2VzW2ldLCB0aGlzLiNuYW1lc1tpXSwgdGhpcy4jcmVjaXBlc1tpXSlcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNyZWF0ZU1lbnVJdGVtKGljb24sIG5hbWUsIHRleHQpIHtcclxuICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgaXRlbS5jbGFzc0xpc3QuYWRkKFwiaXRlbVwiKTtcclxuXHJcbiAgICAvLyBjcmVhdGUgbWVudSBpdGVtIGltYWdlXHJcbiAgICBjb25zdCBpdGVtSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgIGl0ZW1JbWcuY2xhc3NMaXN0LmFkZChcIml0ZW1JTWdcIik7XHJcbiAgICBpdGVtSW1nLnNyYyA9IGljb247XHJcbiAgICBpdGVtSW1nLmFsdCA9IG5hbWU7XHJcblxyXG4gICAgLy8gY3JlYXRlIG5hbWUgb2YgZm9vZFxyXG4gICAgY29uc3QgZm9vZE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIGZvb2ROYW1lLmNsYXNzTGlzdC5hZGQoXCJuYW1lXCIpO1xyXG4gICAgZm9vZE5hbWUuaW5uZXJIVE1MID0gbmFtZTtcclxuXHJcbiAgICAvLyBjcmVhdGUgcmVjaXBlXHJcbiAgICBjb25zdCByZWNpcGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIHJlY2lwZS5jbGFzc0xpc3QuYWRkKFwiaXRlbXBcIik7XHJcbiAgICByZWNpcGUuaW5uZXJIVE1MID0gdGV4dDtcclxuXHJcbiAgICAvLyBhcHBlbmQgYWxsIGNoaWxkcyB0byBwYXJlbnQgYW5kIHJldHVybiBpdFxyXG4gICAgaXRlbS5hcHBlbmRDaGlsZChpdGVtSW1nKTtcclxuICAgIGl0ZW0uYXBwZW5kQ2hpbGQoZm9vZE5hbWUpO1xyXG4gICAgaXRlbS5hcHBlbmRDaGlsZChyZWNpcGUpO1xyXG5cclxuICAgIHJldHVybiBpdGVtO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGdldE1lbnUoKSB7XHJcbiAgICB0aGlzLmNyZWF0ZU1lbnUoKTtcclxuICAgIHJldHVybiB0aGlzLiNtZW51O1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgbWVudSA9IG5ldyBNZW51KCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtZW51LmdldE1lbnU7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==