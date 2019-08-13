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
var NavHandler_1 = __webpack_require__(/*! ./common/NavHandler */ "./assets/scripts/routes/common/NavHandler.ts");
exports.default = {
    init: function () {
        NavHandler_1.default();
    },
    finalize: function () { }
};


/***/ }),

/***/ "./assets/scripts/routes/common/NavHandler.ts":
/*!****************************************************!*\
  !*** ./assets/scripts/routes/common/NavHandler.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function () {
    var hovers = document.querySelectorAll('[data-action="nav-handler"]');
    if (hovers.length === 0) {
        return;
    }
    // @ts-ignore
    for (var _i = 0, hovers_1 = hovers; _i < hovers_1.length; _i++) {
        var el = hovers_1[_i];
        _navHandler(el);
    }
});
var _navHandler = function (element) {
    var _a = element.dataset, target = _a.target, event = _a.event;
    var acceptedEvents = [
        'mouseover',
        'click'
    ];
    if (event.length === 0 || !event) {
        throw Error('No event supplied');
    }
    if (acceptedEvents.indexOf(event) === -1) {
        throw Error("Incorrect event used, supported events: " + acceptedEvents.join(', '));
    }
    if (target.length === 0 || !target) {
        throw Error('No target supplied');
    }
    _addEvents({ element: element, event: event, target: target });
};
var _addEvents = function (_a) {
    var element = _a.element, event = _a.event, target = _a.target;
    var el = document.querySelector(target);
    var elClasses = ['active'];
    var bodyClasses = [
        'hovering',
        "hover-" + target.split('.').join('').split('#').join().split('-').join('_'),
        "hover-" + element.id.split('.').join('').split('#').join().split('-').join('_')
    ];
    element.addEventListener(event, function () {
        if (el.length === 0) {
            return;
        }
        for (var _i = 0, elClasses_1 = elClasses; _i < elClasses_1.length; _i++) {
            var c = elClasses_1[_i];
            el.classList.toggle(c);
        }
        for (var _a = 0, bodyClasses_1 = bodyClasses; _a < bodyClasses_1.length; _a++) {
            var c = bodyClasses_1[_a];
            document.body.classList.toggle(c);
        }
    });
    if (event === 'mouseover') {
        element.addEventListener('mouseout', function () {
            var _a, _b;
            if (el.length === 0) {
                return;
            }
            (_a = el.classList).remove.apply(_a, elClasses);
            (_b = document.body.classList).remove.apply(_b, bodyClasses);
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
exports.default = (function (str) { return "" + str.charAt(0).toLowerCase() + str.replace(/[\W_]/g, '|')
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvTWFpbi50cyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9yb3V0ZXMvUG9zdFR5cGVBcmNoaXZlUHJvZHVjdC50cyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9yb3V0ZXMvUHJvZHVjdEFyY2hpdmUvRmlsdGVyT3BlbmVyLnRzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL3JvdXRlcy9jb21tb24udHMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvcm91dGVzL2NvbW1vbi9OYXZIYW5kbGVyLnRzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL3V0aWxzL0NhbWVsQ2FzZS50cyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy91dGlscy9Sb3V0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUEr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QUNYLFFBQVEsRUFDUjtZQUNJLE9BQU8sRUFBRSxJQUFJO1lBQ2IsTUFBTSxFQUFFO2dCQUNKLEtBQUs7Z0JBQ0wsRUFBRSxFQUFFLEtBQUs7YUFDWjtTQUNKLENBQ0osQ0FDSixDQUFDO1FBRUYsSUFBTSxJQUFJLEdBQUcsS0FBSyxLQUFLLEVBQUU7ZUFDbEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7ZUFDbEIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLFVBQVUsQ0FBQztRQUV2RCxJQUFJLElBQUksRUFBRTtZQUNOLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDbkM7SUFDTCxDQUFDO0lBRUQsMkJBQVUsR0FBVjtRQUFBLGlCQWNDO1FBYkcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUVwQixRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVM7YUFDbEIsV0FBVyxFQUFFO2FBQ2IsT0FBTyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUM7YUFDbEIsS0FBSyxDQUFDLEtBQUssQ0FBQzthQUNaLEdBQUcsQ0FBQyxtQkFBUyxDQUFDO2FBQ2QsT0FBTyxDQUFDLFVBQUMsU0FBaUI7WUFDdkIsS0FBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNyQixLQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUNyQyxDQUFDLENBQUMsQ0FBQztRQUVQLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFDTCxhQUFDO0FBQUQsQ0FBQztBQUVELGtCQUFlLE1BQU0sQ0FBQyIsImZpbGUiOiIvZGlzdC9qcy9tYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxKTtcbiIsImltcG9ydCBSb3V0ZXIgZnJvbSBcIi4vdXRpbHMvUm91dGVyXCI7XG5pbXBvcnQgY29tbW9uIGZyb20gXCIuL3JvdXRlcy9jb21tb25cIjtcbmltcG9ydCBwb3N0VHlwZUFyY2hpdmVQcm9kdWN0IGZyb20gXCIuL3JvdXRlcy9Qb3N0VHlwZUFyY2hpdmVQcm9kdWN0XCI7XG5cbmNvbnN0IHJvdXRlciA9IG5ldyBSb3V0ZXIoe1xuICAgIGNvbW1vbixcbiAgICBwb3N0VHlwZUFyY2hpdmVQcm9kdWN0XG59KTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHJvdXRlci5sb2FkRXZlbnRzKCkpO1xuXG4vKlxuVE9ETzogbWFrZSB0aGlzIGZ1bmN0aW9uIGdsb2JhbFxuICovXG5mdW5jdGlvbiB0b2dnbGVNZW51KCkge1xuICAgIGRvY3VtZW50XG4gICAgICAgIC5xdWVyeVNlbGVjdG9yKCcubWVudWJhcicpXG4gICAgICAgIC5jbGFzc0xpc3RcbiAgICAgICAgLnRvZ2dsZSgnYWN0aXZlJyk7XG59XG4iLCJpbXBvcnQgRmlsdGVyT3BlbmVyIGZyb20gXCIuL1Byb2R1Y3RBcmNoaXZlL0ZpbHRlck9wZW5lclwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgaW5pdCgpIHtcbiAgICAgICAgRmlsdGVyT3BlbmVyKCk7XG4gICAgfSxcbiAgICBmaW5hbGl6ZSgpIHt9XG59XG4iLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgZG9jdW1lbnRcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCcuZmlsdGVyLW9wZW5lcicpXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2R1Y3QtZmlsdGVyJykuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICBkb2N1bWVudFxuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0LWZpbHRlcicpXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIShlLnRhcmdldCBhcyBFbGVtZW50KS5jbGFzc0xpc3QuY29udGFpbnMoJ3Byb2R1Y3QtZmlsdGVyJykgKSByZXR1cm47XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2R1Y3QtZmlsdGVyJykuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICB9KVxuICAgIH0gY2F0Y2ggKCBlICkge1xuICAgICAgICAvLyBkbyBub3RoaW5nXG4gICAgfVxuXG59O1xuIiwiaW1wb3J0IE5hdkhhbmRsZXIgZnJvbSBcIi4vY29tbW9uL05hdkhhbmRsZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGluaXQoKSB7XG4gICAgICAgIE5hdkhhbmRsZXIoKTtcbiAgICB9LFxuXG4gICAgZmluYWxpemUoKSB7fVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICAgIGNvbnN0IGhvdmVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWFjdGlvbj1cIm5hdi1oYW5kbGVyXCJdJyk7XG5cbiAgICBpZiAoaG92ZXJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGZvciAobGV0IGVsIG9mIGhvdmVycykge1xuICAgICAgICBfbmF2SGFuZGxlcihlbCk7XG4gICAgfVxufTtcblxuY29uc3QgX25hdkhhbmRsZXIgPSAoZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IHsgdGFyZ2V0LCBldmVudCB9ID0gZWxlbWVudC5kYXRhc2V0O1xuICAgIGNvbnN0IGFjY2VwdGVkRXZlbnRzID0gW1xuICAgICAgICAnbW91c2VvdmVyJyxcbiAgICAgICAgJ2NsaWNrJ1xuICAgIF07XG5cbiAgICBpZiAoZXZlbnQubGVuZ3RoID09PSAwIHx8ICFldmVudCkge1xuICAgICAgICB0aHJvdyBFcnJvcignTm8gZXZlbnQgc3VwcGxpZWQnKTtcbiAgICB9XG5cbiAgICBpZiAoYWNjZXB0ZWRFdmVudHMuaW5kZXhPZihldmVudCkgPT09IC0xKSB7XG4gICAgICAgIHRocm93IEVycm9yKGBJbmNvcnJlY3QgZXZlbnQgdXNlZCwgc3VwcG9ydGVkIGV2ZW50czogJHthY2NlcHRlZEV2ZW50cy5qb2luKCcsICcpfWApO1xuICAgIH1cblxuICAgIGlmICh0YXJnZXQubGVuZ3RoID09PSAwIHx8ICF0YXJnZXQpIHtcbiAgICAgICAgdGhyb3cgRXJyb3IoJ05vIHRhcmdldCBzdXBwbGllZCcpO1xuICAgIH1cblxuICAgIF9hZGRFdmVudHMoe2VsZW1lbnQsIGV2ZW50LCB0YXJnZXR9KTtcbn1cblxuY29uc3QgX2FkZEV2ZW50cyA9ICh7ZWxlbWVudCwgZXZlbnQsIHRhcmdldH0pID0+IHtcbiAgICBjb25zdCBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbiAgICBjb25zdCBlbENsYXNzZXMgPSBbJ2FjdGl2ZSddO1xuICAgIGNvbnN0IGJvZHlDbGFzc2VzID0gW1xuICAgICAgICAnaG92ZXJpbmcnLFxuICAgICAgICBgaG92ZXItJHt0YXJnZXQuc3BsaXQoJy4nKS5qb2luKCcnKS5zcGxpdCgnIycpLmpvaW4oKS5zcGxpdCgnLScpLmpvaW4oJ18nKX1gLFxuICAgICAgICBgaG92ZXItJHtlbGVtZW50LmlkLnNwbGl0KCcuJykuam9pbignJykuc3BsaXQoJyMnKS5qb2luKCkuc3BsaXQoJy0nKS5qb2luKCdfJyl9YFxuICAgIF07XG5cbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGVsLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgYyBvZiBlbENsYXNzZXMpIHtcbiAgICAgICAgICAgIGVsLmNsYXNzTGlzdC50b2dnbGUoYyk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBjIG9mIGJvZHlDbGFzc2VzKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoYyk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChldmVudCA9PT0gJ21vdXNlb3ZlcicpIHtcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChlbC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoLi4uZWxDbGFzc2VzKTtcblxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFxuICAgICAgICAgICAgICAgIC4uLmJvZHlDbGFzc2VzXG4gICAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICB9XG59O1xuIiwiZXhwb3J0IGRlZmF1bHQgKHN0cjogc3RyaW5nKSA9PiBgJHtzdHIuY2hhckF0KDApLnRvTG93ZXJDYXNlKCl9JHtzdHIucmVwbGFjZSgvW1xcV19dL2csICd8JylcbiAgICAuc3BsaXQoJ3wnKVxuICAgIC5tYXAoKHBhcnQ6IHN0cmluZykgPT4gYCR7cGFydC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke3BhcnQuc2xpY2UoMSl9YClcbiAgICAuam9pbignJylcbiAgICAuc2xpY2UoMSl9YDtcbiIsImltcG9ydCBDYW1lbENhc2UgZnJvbSBcIi4vQ2FtZWxDYXNlXCI7XG5cbmNsYXNzIFJvdXRlciB7XG4gICAgcm91dGVzOiBhbnk7XG5cbiAgICBjb25zdHJ1Y3Rvcihyb3V0ZXM6IGFueSkge1xuICAgICAgICB0aGlzLnJvdXRlcyA9IHJvdXRlcztcbiAgICB9XG5cbiAgICBmaXJlKHJvdXRlLCBldmVudCA9ICdpbml0JywgYXJncyA9IG51bGwpIHtcbiAgICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgICAgIG5ldyBDdXN0b21FdmVudChcbiAgICAgICAgICAgICAgICAncm91dGVkJyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGRldGFpbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBmbjogZXZlbnRcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIClcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCBmaXJlID0gcm91dGUgIT09ICcnXG4gICAgICAgICAgICAmJiB0aGlzLnJvdXRlc1tyb3V0ZV1cbiAgICAgICAgICAgICYmIHR5cGVvZiB0aGlzLnJvdXRlc1tyb3V0ZV1bZXZlbnRdID09PSAnZnVuY3Rpb24nO1xuXG4gICAgICAgIGlmIChmaXJlKSB7XG4gICAgICAgICAgICB0aGlzLnJvdXRlc1tyb3V0ZV1bZXZlbnRdKGFyZ3MpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbG9hZEV2ZW50cygpIHtcbiAgICAgICAgdGhpcy5maXJlKCdjb21tb24nKTtcblxuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTmFtZVxuICAgICAgICAgICAgLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAgIC5yZXBsYWNlKC8tL2csICdfJylcbiAgICAgICAgICAgIC5zcGxpdCgvXFxzKy8pXG4gICAgICAgICAgICAubWFwKENhbWVsQ2FzZSlcbiAgICAgICAgICAgIC5mb3JFYWNoKChjbGFzc05hbWU6IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZmlyZShjbGFzc05hbWUpO1xuICAgICAgICAgICAgICAgIHRoaXMuZmlyZShjbGFzc05hbWUsICdmaW5hbGl6ZScpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5maXJlKCdjb21tb24nLCAnZmluYWxpemUnKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJvdXRlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=