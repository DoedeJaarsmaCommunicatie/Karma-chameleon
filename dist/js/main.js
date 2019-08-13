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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/scripts/Main.ts":
/*!********************************!*\
  !*** ./assets/scripts/Main.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Router_1 = __webpack_require__(/*! ./utils/Router */ "./assets/scripts/utils/Router.ts");
var common_1 = __webpack_require__(/*! ./routes/common */ "./assets/scripts/routes/common.ts");
var PostTypeArchiveProduct_1 = __webpack_require__(/*! ./routes/PostTypeArchiveProduct */ "./assets/scripts/routes/PostTypeArchiveProduct.ts");
var router = new Router_1.default({
    common: common_1.default,
    postTypeArchiveProduct: PostTypeArchiveProduct_1.default
});
document.addEventListener('DOMContentLoaded', function () { return router.loadEvents(); });
/*
TODO: make this function global
 */
function toggleMenu() {
    document
        .querySelector('.menubar')
        .classList
        .toggle('active');
}


/***/ }),

/***/ "./assets/scripts/routes/PostTypeArchiveProduct.ts":
/*!*********************************************************!*\
  !*** ./assets/scripts/routes/PostTypeArchiveProduct.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var FilterOpener_1 = __webpack_require__(/*! ./ProductArchive/FilterOpener */ "./assets/scripts/routes/ProductArchive/FilterOpener.ts");
exports.default = {
    init: function () {
        FilterOpener_1.default();
    },
    finalize: function () { }
};


/***/ }),

/***/ "./assets/scripts/routes/ProductArchive/FilterOpener.ts":
/*!**************************************************************!*\
  !*** ./assets/scripts/routes/ProductArchive/FilterOpener.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function () {
    try {
        document
            .querySelector('.filter-opener')
            .addEventListener('click', function () {
            document.querySelector('.product-filter').classList.toggle('active');
        });
        document
            .querySelector('.product-filter')
            .addEventListener('click', function (e) {
            if (!e.target.classList.contains('product-filter'))
                return;
            document.querySelector('.product-filter').classList.remove('active');
        });
    }
    catch (e) {
        // do nothing
    }
});


/***/ }),

/***/ "./assets/scripts/routes/common.ts":
/*!*****************************************!*\
  !*** ./assets/scripts/routes/common.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var MenuOpener_1 = __webpack_require__(/*! ./common/MenuOpener */ "./assets/scripts/routes/common/MenuOpener.ts");
exports.default = {
    init: function () {
        MenuOpener_1.default.addEvent();
    },
    finalize: function () { }
};


/***/ }),

/***/ "./assets/scripts/routes/common/MenuOpener.ts":
/*!****************************************************!*\
  !*** ./assets/scripts/routes/common/MenuOpener.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    addEvent: function () {
        document.querySelector('.js-open-sites').addEventListener('click', function () {
            document.querySelector('.sites-wrapper').classList.add('active');
        });
        document.querySelector('.sites-wrapper').addEventListener('click', function (e) {
            if (e.target !== this) {
                return;
            }
            document.querySelector('.sites-wrapper').classList.remove('active');
        });
    }
};


/***/ }),

/***/ "./assets/scripts/utils/CamelCase.ts":
/*!*******************************************!*\
  !*** ./assets/scripts/utils/CamelCase.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (str) { return "" + str.charAt(0).toLowerCase() + str.replace(/W+/g, '|')
    .split('|')
    .map(function (part) { return "" + part.charAt(0).toUpperCase() + part.slice(1); })
    .join('')
    .slice(1); });


/***/ }),

/***/ "./assets/scripts/utils/Router.ts":
/*!****************************************!*\
  !*** ./assets/scripts/utils/Router.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CamelCase_1 = __webpack_require__(/*! ./CamelCase */ "./assets/scripts/utils/CamelCase.ts");
var Router = /** @class */ (function () {
    function Router(routes) {
        this.routes = routes;
    }
    Router.prototype.fire = function (route, event, args) {
        if (event === void 0) { event = 'init'; }
        if (args === void 0) { args = null; }
        document.dispatchEvent(new CustomEvent('routed', {
            bubbles: true,
            detail: {
                route: route,
                fn: event
            }
        }));
        var fire = route !== ''
            && this.routes[route]
            && typeof this.routes[route][event] === 'function';
        if (fire) {
            this.routes[route][event](args);
        }
    };
    Router.prototype.loadEvents = function () {
        var _this = this;
        this.fire('common');
        document.body.className
            .toLowerCase()
            .replace(/-/g, '_')
            .split(/\s+/)
            .map(CamelCase_1.default)
            .forEach(function (className) {
            _this.fire(className);
            _this.fire(className, 'finalize');
        });
        this.fire('common', 'finalize');
    };
    return Router;
}());
exports.default = Router;


/***/ }),

/***/ 1:
/*!**************************************!*\
  !*** multi ./assets/scripts/Main.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/mitch/OneDrive/DoedeJaarsmaCommunicatie/projects/Wijnplan/italiaansewijnwinkel/wp-content/themes/targaryen/assets/scripts/Main.ts */"./assets/scripts/Main.ts");


/***/ })

/******/ });