module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
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
/******/ 	// The chunk loading function for additional chunks
/******/ 	// Since all referenced chunks are already included
/******/ 	// in this file, this function is empty here.
/******/ 	__webpack_require__.e = function requireEnsure() {
/******/ 		return Promise.resolve();
/******/ 	};
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
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!************************************!*\
  !*** multi ./static-build/main.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./static-build/main.js */1);


/***/ }),
/* 1 */
/*!******************************!*\
  !*** ./static-build/main.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return render; });
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/concat */ 2);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_includes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/includes */ 49);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_includes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_includes__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/promise */ 63);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ 116);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom/server */ 117);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ 122);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! connected-react-router */ 123);
/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(connected_react_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! history */ 124);
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(history__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ 125);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-helmet */ 126);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var app_config_generateRoutes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/config/generateRoutes */ 127);
/* harmony import */ var app_config_routes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/config/routes */ 202);
/* harmony import */ var app_store_configureStore__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/store/configureStore */ 283);
/* harmony import */ var app_actions_collections__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/actions/collections */ 232);
/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./template */ 293);















function render(locals) {
  function matchPathToCurrentRoute(urlPattern) {
    return Object(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["matchPath"])(locals.path, {
      path: urlPattern,
      exact: true
    });
  }

  return new _babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_2___default.a((resolve, reject) => {
    ;

    (async () => {
      try {
        var _match$params, _context, _context2, _context3;

        const pathname = locals.path;
        const history = Object(history__WEBPACK_IMPORTED_MODULE_7__["createMemoryHistory"])({
          initialEntries: [pathname]
        });
        const store = Object(app_store_configureStore__WEBPACK_IMPORTED_MODULE_12__["default"])(undefined, history);
        const context = {};
        const match = matchPathToCurrentRoute('/works/:fileName') || matchPathToCurrentRoute('/blog/:fileName');
        const fileName = match === null || match === void 0 ? void 0 : (_match$params = match.params) === null || _match$params === void 0 ? void 0 : _match$params.fileName;

        if (_babel_runtime_corejs3_core_js_stable_instance_includes__WEBPACK_IMPORTED_MODULE_1___default()(_context = ['/blog', '/blog/']).call(_context, pathname) || pathname === '/') {
          await store.dispatch(app_actions_collections__WEBPACK_IMPORTED_MODULE_13__["loadCollection"]('posts'));
        }

        if (_babel_runtime_corejs3_core_js_stable_instance_includes__WEBPACK_IMPORTED_MODULE_1___default()(_context2 = ['/works', '/works/']).call(_context2, pathname) || pathname === '/') {
          await store.dispatch(app_actions_collections__WEBPACK_IMPORTED_MODULE_13__["loadCollection"]('works'));
        }

        if (fileName && _babel_runtime_corejs3_core_js_stable_instance_includes__WEBPACK_IMPORTED_MODULE_1___default()(pathname).call(pathname, '/blog/')) {
          await store.dispatch(app_actions_collections__WEBPACK_IMPORTED_MODULE_13__["loadItem"]('posts', fileName));
        }

        if (fileName && _babel_runtime_corejs3_core_js_stable_instance_includes__WEBPACK_IMPORTED_MODULE_1___default()(pathname).call(pathname, '/works/')) {
          await store.dispatch(app_actions_collections__WEBPACK_IMPORTED_MODULE_13__["loadItem"]('works', fileName));
        }

        const bodyHTML = react_dom_server__WEBPACK_IMPORTED_MODULE_4___default.a.renderToString( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_8__["Provider"], {
          store: store,
          context: react_redux__WEBPACK_IMPORTED_MODULE_8__["ReactReduxContext"]
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(connected_react_router__WEBPACK_IMPORTED_MODULE_6__["ConnectedRouter"], {
          history: history,
          context: react_redux__WEBPACK_IMPORTED_MODULE_8__["ReactReduxContext"]
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Router"], {
          history: history,
          location: pathname,
          context: context
        }, Object(app_config_generateRoutes__WEBPACK_IMPORTED_MODULE_10__["default"])(app_config_routes__WEBPACK_IMPORTED_MODULE_11__["default"])))));
        const head = react_helmet__WEBPACK_IMPORTED_MODULE_9___default.a.renderStatic();

        const headHTML = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0___default()(_context3 = "\n        ".concat(head.title.toString(), "\n        ")).call(_context3, head.meta.toString(), "\n      ");

        const initialState = store.getState();
        const html = await Object(_template__WEBPACK_IMPORTED_MODULE_14__["default"])({
          bodyHTML,
          headHTML,
          initialState
        });
        console.log('\nCurrent path: ', pathname);
        console.log('\nhtml: ', html.substr(-400), '\n');
        resolve(html);
      } catch (error) {
        console.error(error);
        reject(error);
      }
    })();
  });
}

/***/ }),
/* 2 */
/*!********************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/core-js-stable/instance/concat.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js-pure/stable/instance/concat */ 3);

/***/ }),
/* 3 */
/*!**************************************************************!*\
  !*** ../node_modules/core-js-pure/stable/instance/concat.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(/*! ../../es/instance/concat */ 4);

module.exports = parent;


/***/ }),
/* 4 */
/*!**********************************************************!*\
  !*** ../node_modules/core-js-pure/es/instance/concat.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var concat = __webpack_require__(/*! ../array/virtual/concat */ 5);

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.concat;
  return it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.concat) ? concat : own;
};


/***/ }),
/* 5 */
/*!***************************************************************!*\
  !*** ../node_modules/core-js-pure/es/array/virtual/concat.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../../modules/es.array.concat */ 6);
var entryVirtual = __webpack_require__(/*! ../../../internals/entry-virtual */ 48);

module.exports = entryVirtual('Array').concat;


/***/ }),
/* 6 */
/*!***************************************************************!*\
  !*** ../node_modules/core-js-pure/modules/es.array.concat.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ 7);
var fails = __webpack_require__(/*! ../internals/fails */ 11);
var isArray = __webpack_require__(/*! ../internals/is-array */ 30);
var isObject = __webpack_require__(/*! ../internals/is-object */ 19);
var toObject = __webpack_require__(/*! ../internals/to-object */ 31);
var toLength = __webpack_require__(/*! ../internals/to-length */ 32);
var createProperty = __webpack_require__(/*! ../internals/create-property */ 34);
var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ 35);
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ 44);
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ 36);
var V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ 45);

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

// `Array.prototype.concat` method
// https://tc39.github.io/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$({ target: 'Array', proto: true, forced: FORCED }, {
  concat: function concat(arg) { // eslint-disable-line no-unused-vars
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = toLength(E.length);
        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        createProperty(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});


/***/ }),
/* 7 */
/*!********************************************************!*\
  !*** ../node_modules/core-js-pure/internals/export.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ../internals/global */ 8);
var getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ 9).f;
var isForced = __webpack_require__(/*! ../internals/is-forced */ 23);
var path = __webpack_require__(/*! ../internals/path */ 24);
var bind = __webpack_require__(/*! ../internals/function-bind-context */ 25);
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ 27);
var has = __webpack_require__(/*! ../internals/has */ 20);

var wrapConstructor = function (NativeConstructor) {
  var Wrapper = function (a, b, c) {
    if (this instanceof NativeConstructor) {
      switch (arguments.length) {
        case 0: return new NativeConstructor();
        case 1: return new NativeConstructor(a);
        case 2: return new NativeConstructor(a, b);
      } return new NativeConstructor(a, b, c);
    } return NativeConstructor.apply(this, arguments);
  };
  Wrapper.prototype = NativeConstructor.prototype;
  return Wrapper;
};

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var PROTO = options.proto;

  var nativeSource = GLOBAL ? global : STATIC ? global[TARGET] : (global[TARGET] || {}).prototype;

  var target = GLOBAL ? path : path[TARGET] || (path[TARGET] = {});
  var targetPrototype = target.prototype;

  var FORCED, USE_NATIVE, VIRTUAL_PROTOTYPE;
  var key, sourceProperty, targetProperty, nativeProperty, resultProperty, descriptor;

  for (key in source) {
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contains in native
    USE_NATIVE = !FORCED && nativeSource && has(nativeSource, key);

    targetProperty = target[key];

    if (USE_NATIVE) if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(nativeSource, key);
      nativeProperty = descriptor && descriptor.value;
    } else nativeProperty = nativeSource[key];

    // export native or implementation
    sourceProperty = (USE_NATIVE && nativeProperty) ? nativeProperty : source[key];

    if (USE_NATIVE && typeof targetProperty === typeof sourceProperty) continue;

    // bind timers to global for call from export context
    if (options.bind && USE_NATIVE) resultProperty = bind(sourceProperty, global);
    // wrap global constructors for prevent changs in this version
    else if (options.wrap && USE_NATIVE) resultProperty = wrapConstructor(sourceProperty);
    // make static versions for prototype methods
    else if (PROTO && typeof sourceProperty == 'function') resultProperty = bind(Function.call, sourceProperty);
    // default case
    else resultProperty = sourceProperty;

    // add a flag to not completely full polyfills
    if (options.sham || (sourceProperty && sourceProperty.sham) || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(resultProperty, 'sham', true);
    }

    target[key] = resultProperty;

    if (PROTO) {
      VIRTUAL_PROTOTYPE = TARGET + 'Prototype';
      if (!has(path, VIRTUAL_PROTOTYPE)) {
        createNonEnumerableProperty(path, VIRTUAL_PROTOTYPE, {});
      }
      // export virtual prototype methods
      path[VIRTUAL_PROTOTYPE][key] = sourceProperty;
      // export real prototype methods
      if (options.real && targetPrototype && !targetPrototype[key]) {
        createNonEnumerableProperty(targetPrototype, key, sourceProperty);
      }
    }
  }
};


/***/ }),
/* 8 */
/*!********************************************************!*\
  !*** ../node_modules/core-js-pure/internals/global.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line no-undef
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func
  Function('return this')();


/***/ }),
/* 9 */
/*!************************************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/object-get-own-property-descriptor.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ 10);
var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ 12);
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ 13);
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ 14);
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ 18);
var has = __webpack_require__(/*! ../internals/has */ 20);
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ 21);

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),
/* 10 */
/*!*************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/descriptors.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ 11);

// Thank's IE8 for his funny defineProperty
module.exports = !fails(function () {
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),
/* 11 */
/*!*******************************************************!*\
  !*** ../node_modules/core-js-pure/internals/fails.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),
/* 12 */
/*!*******************************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/object-property-is-enumerable.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;


/***/ }),
/* 13 */
/*!****************************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/create-property-descriptor.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 14 */
/*!*******************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/to-indexed-object.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ 15);
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ 17);

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),
/* 15 */
/*!****************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/indexed-object.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ 11);
var classof = __webpack_require__(/*! ../internals/classof-raw */ 16);

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),
/* 16 */
/*!*************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/classof-raw.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 17 */
/*!**************************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/require-object-coercible.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),
/* 18 */
/*!**************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/to-primitive.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ 19);

// `ToPrimitive` abstract operation
// https://tc39.github.io/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 19 */
/*!***********************************************************!*\
  !*** ../node_modules/core-js-pure/internals/is-object.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 20 */
/*!*****************************************************!*\
  !*** ../node_modules/core-js-pure/internals/has.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 21 */
/*!****************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/ie8-dom-define.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ 10);
var fails = __webpack_require__(/*! ../internals/fails */ 11);
var createElement = __webpack_require__(/*! ../internals/document-create-element */ 22);

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),
/* 22 */
/*!*************************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/document-create-element.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ 8);
var isObject = __webpack_require__(/*! ../internals/is-object */ 19);

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),
/* 23 */
/*!***********************************************************!*\
  !*** ../node_modules/core-js-pure/internals/is-forced.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ 11);

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),
/* 24 */
/*!******************************************************!*\
  !*** ../node_modules/core-js-pure/internals/path.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 25 */
/*!***********************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/function-bind-context.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__(/*! ../internals/a-function */ 26);

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 26 */
/*!************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/a-function.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),
/* 27 */
/*!********************************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/create-non-enumerable-property.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ 10);
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ 28);
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ 13);

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 28 */
/*!************************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/object-define-property.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ 10);
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ 21);
var anObject = __webpack_require__(/*! ../internals/an-object */ 29);
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ 18);

var nativeDefineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 29 */
/*!***********************************************************!*\
  !*** ../node_modules/core-js-pure/internals/an-object.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ 19);

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),
/* 30 */
/*!**********************************************************!*\
  !*** ../node_modules/core-js-pure/internals/is-array.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ../internals/classof-raw */ 16);

// `IsArray` abstract operation
// https://tc39.github.io/ecma262/#sec-isarray
module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};


/***/ }),
/* 31 */
/*!***********************************************************!*\
  !*** ../node_modules/core-js-pure/internals/to-object.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ 17);

// `ToObject` abstract operation
// https://tc39.github.io/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),
/* 32 */
/*!***********************************************************!*\
  !*** ../node_modules/core-js-pure/internals/to-length.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ 33);

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.github.io/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),
/* 33 */
/*!************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/to-integer.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.github.io/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),
/* 34 */
/*!*****************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/create-property.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ 18);
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ 28);
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ 13);

module.exports = function (object, key, value) {
  var propertyKey = toPrimitive(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),
/* 35 */
/*!**********************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/array-species-create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ 19);
var isArray = __webpack_require__(/*! ../internals/is-array */ 30);
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ 36);

var SPECIES = wellKnownSymbol('species');

// `ArraySpeciesCreate` abstract operation
// https://tc39.github.io/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};


/***/ }),
/* 36 */
/*!*******************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/well-known-symbol.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ 8);
var shared = __webpack_require__(/*! ../internals/shared */ 37);
var has = __webpack_require__(/*! ../internals/has */ 20);
var uid = __webpack_require__(/*! ../internals/uid */ 41);
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ 42);
var USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ 43);

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name)) {
    if (NATIVE_SYMBOL && has(Symbol, name)) WellKnownSymbolsStore[name] = Symbol[name];
    else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};


/***/ }),
/* 37 */
/*!********************************************************!*\
  !*** ../node_modules/core-js-pure/internals/shared.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ 38);
var store = __webpack_require__(/*! ../internals/shared-store */ 39);

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.6.4',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 38 */
/*!*********************************************************!*\
  !*** ../node_modules/core-js-pure/internals/is-pure.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 39 */
/*!**************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/shared-store.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ 8);
var setGlobal = __webpack_require__(/*! ../internals/set-global */ 40);

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),
/* 40 */
/*!************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/set-global.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ 8);
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ 27);

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),
/* 41 */
/*!*****************************************************!*\
  !*** ../node_modules/core-js-pure/internals/uid.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),
/* 42 */
/*!***************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/native-symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ 11);

module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  // Chrome 38 Symbol has incorrect toString conversion
  // eslint-disable-next-line no-undef
  return !String(Symbol());
});


/***/ }),
/* 43 */
/*!*******************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/use-symbol-as-uid.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ 42);

module.exports = NATIVE_SYMBOL
  // eslint-disable-next-line no-undef
  && !Symbol.sham
  // eslint-disable-next-line no-undef
  && typeof Symbol.iterator == 'symbol';


/***/ }),
/* 44 */
/*!**********************************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/array-method-has-species-support.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ 11);
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ 36);
var V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ 45);

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),
/* 45 */
/*!*******************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/engine-v8-version.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ 8);
var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ 46);

var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] + match[1];
} else if (userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

module.exports = version && +version;


/***/ }),
/* 46 */
/*!*******************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/engine-user-agent.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ 47);

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),
/* 47 */
/*!**************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/get-built-in.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(/*! ../internals/path */ 24);
var global = __webpack_require__(/*! ../internals/global */ 8);

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),
/* 48 */
/*!***************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/entry-virtual.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(/*! ../internals/path */ 24);

module.exports = function (CONSTRUCTOR) {
  return path[CONSTRUCTOR + 'Prototype'];
};


/***/ }),
/* 49 */
/*!**********************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/core-js-stable/instance/includes.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js-pure/stable/instance/includes */ 50);

/***/ }),
/* 50 */
/*!****************************************************************!*\
  !*** ../node_modules/core-js-pure/stable/instance/includes.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(/*! ../../es/instance/includes */ 51);

module.exports = parent;


/***/ }),
/* 51 */
/*!************************************************************!*\
  !*** ../node_modules/core-js-pure/es/instance/includes.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayIncludes = __webpack_require__(/*! ../array/virtual/includes */ 52);
var stringIncludes = __webpack_require__(/*! ../string/virtual/includes */ 58);

var ArrayPrototype = Array.prototype;
var StringPrototype = String.prototype;

module.exports = function (it) {
  var own = it.includes;
  if (it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.includes)) return arrayIncludes;
  if (typeof it === 'string' || it === StringPrototype || (it instanceof String && own === StringPrototype.includes)) {
    return stringIncludes;
  } return own;
};


/***/ }),
/* 52 */
/*!*****************************************************************!*\
  !*** ../node_modules/core-js-pure/es/array/virtual/includes.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../../modules/es.array.includes */ 53);
var entryVirtual = __webpack_require__(/*! ../../../internals/entry-virtual */ 48);

module.exports = entryVirtual('Array').includes;


/***/ }),
/* 53 */
/*!*****************************************************************!*\
  !*** ../node_modules/core-js-pure/modules/es.array.includes.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ 7);
var $includes = __webpack_require__(/*! ../internals/array-includes */ 54).includes;
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ 56);
var arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ 57);

var USES_TO_LENGTH = arrayMethodUsesToLength('indexOf', { ACCESSORS: true, 1: 0 });

// `Array.prototype.includes` method
// https://tc39.github.io/ecma262/#sec-array.prototype.includes
$({ target: 'Array', proto: true, forced: !USES_TO_LENGTH }, {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('includes');


/***/ }),
/* 54 */
/*!****************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/array-includes.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ 14);
var toLength = __webpack_require__(/*! ../internals/to-length */ 32);
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ 55);

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),
/* 55 */
/*!*******************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/to-absolute-index.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ 33);

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),
/* 56 */
/*!********************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/add-to-unscopables.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 57 */
/*!*****************************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/array-method-uses-to-length.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ 10);
var fails = __webpack_require__(/*! ../internals/fails */ 11);
var has = __webpack_require__(/*! ../internals/has */ 20);

var defineProperty = Object.defineProperty;
var cache = {};

var thrower = function (it) { throw it; };

module.exports = function (METHOD_NAME, options) {
  if (has(cache, METHOD_NAME)) return cache[METHOD_NAME];
  if (!options) options = {};
  var method = [][METHOD_NAME];
  var ACCESSORS = has(options, 'ACCESSORS') ? options.ACCESSORS : false;
  var argument0 = has(options, 0) ? options[0] : thrower;
  var argument1 = has(options, 1) ? options[1] : undefined;

  return cache[METHOD_NAME] = !!method && !fails(function () {
    if (ACCESSORS && !DESCRIPTORS) return true;
    var O = { length: -1 };

    if (ACCESSORS) defineProperty(O, 1, { enumerable: true, get: thrower });
    else O[1] = 1;

    method.call(O, argument0, argument1);
  });
};


/***/ }),
/* 58 */
/*!******************************************************************!*\
  !*** ../node_modules/core-js-pure/es/string/virtual/includes.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../../modules/es.string.includes */ 59);
var entryVirtual = __webpack_require__(/*! ../../../internals/entry-virtual */ 48);

module.exports = entryVirtual('String').includes;


/***/ }),
/* 59 */
/*!******************************************************************!*\
  !*** ../node_modules/core-js-pure/modules/es.string.includes.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ 7);
var notARegExp = __webpack_require__(/*! ../internals/not-a-regexp */ 60);
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ 17);
var correctIsRegExpLogic = __webpack_require__(/*! ../internals/correct-is-regexp-logic */ 62);

// `String.prototype.includes` method
// https://tc39.github.io/ecma262/#sec-string.prototype.includes
$({ target: 'String', proto: true, forced: !correctIsRegExpLogic('includes') }, {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~String(requireObjectCoercible(this))
      .indexOf(notARegExp(searchString), arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),
/* 60 */
/*!**************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/not-a-regexp.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isRegExp = __webpack_require__(/*! ../internals/is-regexp */ 61);

module.exports = function (it) {
  if (isRegExp(it)) {
    throw TypeError("The method doesn't accept regular expressions");
  } return it;
};


/***/ }),
/* 61 */
/*!***********************************************************!*\
  !*** ../node_modules/core-js-pure/internals/is-regexp.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ 19);
var classof = __webpack_require__(/*! ../internals/classof-raw */ 16);
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ 36);

var MATCH = wellKnownSymbol('match');

// `IsRegExp` abstract operation
// https://tc39.github.io/ecma262/#sec-isregexp
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');
};


/***/ }),
/* 62 */
/*!*************************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/correct-is-regexp-logic.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ 36);

var MATCH = wellKnownSymbol('match');

module.exports = function (METHOD_NAME) {
  var regexp = /./;
  try {
    '/./'[METHOD_NAME](regexp);
  } catch (e) {
    try {
      regexp[MATCH] = false;
      return '/./'[METHOD_NAME](regexp);
    } catch (f) { /* empty */ }
  } return false;
};


/***/ }),
/* 63 */
/*!************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/core-js-stable/promise.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js-pure/stable/promise */ 64);

/***/ }),
/* 64 */
/*!************************************************************!*\
  !*** ../node_modules/core-js-pure/stable/promise/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(/*! ../../es/promise */ 65);

module.exports = parent;


/***/ }),
/* 65 */
/*!********************************************************!*\
  !*** ../node_modules/core-js-pure/es/promise/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es.object.to-string */ 66);
__webpack_require__(/*! ../../modules/es.string.iterator */ 67);
__webpack_require__(/*! ../../modules/web.dom-collections.iterator */ 93);
__webpack_require__(/*! ../../modules/es.promise */ 96);
__webpack_require__(/*! ../../modules/es.promise.all-settled */ 114);
__webpack_require__(/*! ../../modules/es.promise.finally */ 115);
var path = __webpack_require__(/*! ../../internals/path */ 24);

module.exports = path.Promise;


/***/ }),
/* 66 */
/*!*******************************************************************!*\
  !*** ../node_modules/core-js-pure/modules/es.object.to-string.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty


/***/ }),
/* 67 */
/*!******************************************************************!*\
  !*** ../node_modules/core-js-pure/modules/es.string.iterator.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__(/*! ../internals/string-multibyte */ 68).charAt;
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ 69);
var defineIterator = __webpack_require__(/*! ../internals/define-iterator */ 74);

var STRING_ITERATOR = 'String Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function (iterated) {
  setInternalState(this, {
    type: STRING_ITERATOR,
    string: String(iterated),
    index: 0
  });
// `%StringIteratorPrototype%.next` method
// https://tc39.github.io/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return { value: undefined, done: true };
  point = charAt(string, index);
  state.index += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 68 */
/*!******************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/string-multibyte.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ 33);
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ 17);

// `String.prototype.{ codePointAt, at }` methods implementation
var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = String(requireObjectCoercible($this));
    var position = toInteger(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = S.charCodeAt(position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING ? S.charAt(position) : first
        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};


/***/ }),
/* 69 */
/*!****************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/internal-state.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__(/*! ../internals/native-weak-map */ 70);
var global = __webpack_require__(/*! ../internals/global */ 8);
var isObject = __webpack_require__(/*! ../internals/is-object */ 19);
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ 27);
var objectHas = __webpack_require__(/*! ../internals/has */ 20);
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ 72);
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ 73);

var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP) {
  var store = new WeakMap();
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),
/* 70 */
/*!*****************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/native-weak-map.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ 8);
var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ 71);

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));


/***/ }),
/* 71 */
/*!****************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/inspect-source.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ../internals/shared-store */ 39);

var functionToString = Function.toString;

// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof store.inspectSource != 'function') {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;


/***/ }),
/* 72 */
/*!************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/shared-key.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ../internals/shared */ 37);
var uid = __webpack_require__(/*! ../internals/uid */ 41);

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),
/* 73 */
/*!*************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/hidden-keys.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 74 */
/*!*****************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/define-iterator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ 7);
var createIteratorConstructor = __webpack_require__(/*! ../internals/create-iterator-constructor */ 75);
var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ 77);
var setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ 90);
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ 85);
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ 27);
var redefine = __webpack_require__(/*! ../internals/redefine */ 92);
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ 36);
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ 38);
var Iterators = __webpack_require__(/*! ../internals/iterators */ 89);
var IteratorsCore = __webpack_require__(/*! ../internals/iterators-core */ 76);

var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {
          createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    INCORRECT_VALUES_NAME = true;
    defaultIterator = function values() { return nativeIterator.call(this); };
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    createNonEnumerableProperty(IterablePrototype, ITERATOR, defaultIterator);
  }
  Iterators[NAME] = defaultIterator;

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  return methods;
};


/***/ }),
/* 75 */
/*!*****************************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/create-iterator-constructor.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var IteratorPrototype = __webpack_require__(/*! ../internals/iterators-core */ 76).IteratorPrototype;
var create = __webpack_require__(/*! ../internals/object-create */ 79);
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ 13);
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ 85);
var Iterators = __webpack_require__(/*! ../internals/iterators */ 89);

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),
/* 76 */
/*!****************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/iterators-core.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ 77);
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ 27);
var has = __webpack_require__(/*! ../internals/has */ 20);
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ 36);
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ 38);

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

var returnThis = function () { return this; };

// `%IteratorPrototype%` object
// https://tc39.github.io/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

if (IteratorPrototype == undefined) IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
if (!IS_PURE && !has(IteratorPrototype, ITERATOR)) {
  createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),
/* 77 */
/*!*************************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/object-get-prototype-of.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ 20);
var toObject = __webpack_require__(/*! ../internals/to-object */ 31);
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ 72);
var CORRECT_PROTOTYPE_GETTER = __webpack_require__(/*! ../internals/correct-prototype-getter */ 78);

var IE_PROTO = sharedKey('IE_PROTO');
var ObjectPrototype = Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.getprototypeof
module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectPrototype : null;
};


/***/ }),
/* 78 */
/*!**************************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/correct-prototype-getter.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ 11);

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),
/* 79 */
/*!***************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/object-create.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ 29);
var defineProperties = __webpack_require__(/*! ../internals/object-define-properties */ 80);
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ 83);
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ 73);
var html = __webpack_require__(/*! ../internals/html */ 84);
var documentCreateElement = __webpack_require__(/*! ../internals/document-create-element */ 22);
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ 72);

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    /* global ActiveXObject */
    activeXDocument = document.domain && new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.github.io/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : defineProperties(result, Properties);
};


/***/ }),
/* 80 */
/*!**************************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/object-define-properties.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ 10);
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ 28);
var anObject = __webpack_require__(/*! ../internals/an-object */ 29);
var objectKeys = __webpack_require__(/*! ../internals/object-keys */ 81);

// `Object.defineProperties` method
// https://tc39.github.io/ecma262/#sec-object.defineproperties
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
  return O;
};


/***/ }),
/* 81 */
/*!*************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/object-keys.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ 82);
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ 83);

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),
/* 82 */
/*!**********************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/object-keys-internal.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ 20);
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ 14);
var indexOf = __webpack_require__(/*! ../internals/array-includes */ 54).indexOf;
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ 73);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 83 */
/*!***************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/enum-bug-keys.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),
/* 84 */
/*!******************************************************!*\
  !*** ../node_modules/core-js-pure/internals/html.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ 47);

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),
/* 85 */
/*!*******************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/set-to-string-tag.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ 86);
var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ 28).f;
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ 27);
var has = __webpack_require__(/*! ../internals/has */ 20);
var toString = __webpack_require__(/*! ../internals/object-to-string */ 87);
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ 36);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (it, TAG, STATIC, SET_METHOD) {
  if (it) {
    var target = STATIC ? it : it.prototype;
    if (!has(target, TO_STRING_TAG)) {
      defineProperty(target, TO_STRING_TAG, { configurable: true, value: TAG });
    }
    if (SET_METHOD && !TO_STRING_TAG_SUPPORT) {
      createNonEnumerableProperty(target, 'toString', toString);
    }
  }
};


/***/ }),
/* 86 */
/*!***********************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/to-string-tag-support.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ 36);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),
/* 87 */
/*!******************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/object-to-string.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ 86);
var classof = __webpack_require__(/*! ../internals/classof */ 88);

// `Object.prototype.toString` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};


/***/ }),
/* 88 */
/*!*********************************************************!*\
  !*** ../node_modules/core-js-pure/internals/classof.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ 86);
var classofRaw = __webpack_require__(/*! ../internals/classof-raw */ 16);
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ 36);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
};


/***/ }),
/* 89 */
/*!***********************************************************!*\
  !*** ../node_modules/core-js-pure/internals/iterators.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 90 */
/*!*************************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/object-set-prototype-of.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ 29);
var aPossiblePrototype = __webpack_require__(/*! ../internals/a-possible-prototype */ 91);

// `Object.setPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),
/* 91 */
/*!**********************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/a-possible-prototype.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ 19);

module.exports = function (it) {
  if (!isObject(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  } return it;
};


/***/ }),
/* 92 */
/*!**********************************************************!*\
  !*** ../node_modules/core-js-pure/internals/redefine.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ 27);

module.exports = function (target, key, value, options) {
  if (options && options.enumerable) target[key] = value;
  else createNonEnumerableProperty(target, key, value);
};


/***/ }),
/* 93 */
/*!****************************************************************************!*\
  !*** ../node_modules/core-js-pure/modules/web.dom-collections.iterator.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./es.array.iterator */ 94);
var DOMIterables = __webpack_require__(/*! ../internals/dom-iterables */ 95);
var global = __webpack_require__(/*! ../internals/global */ 8);
var classof = __webpack_require__(/*! ../internals/classof */ 88);
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ 27);
var Iterators = __webpack_require__(/*! ../internals/iterators */ 89);
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ 36);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  if (CollectionPrototype && classof(CollectionPrototype) !== TO_STRING_TAG) {
    createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
  }
  Iterators[COLLECTION_NAME] = Iterators.Array;
}


/***/ }),
/* 94 */
/*!*****************************************************************!*\
  !*** ../node_modules/core-js-pure/modules/es.array.iterator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ 14);
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ 56);
var Iterators = __webpack_require__(/*! ../internals/iterators */ 89);
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ 69);
var defineIterator = __webpack_require__(/*! ../internals/define-iterator */ 74);

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.github.io/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.github.io/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.github.io/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.github.io/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.github.io/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return { value: undefined, done: true };
  }
  if (kind == 'keys') return { value: index, done: false };
  if (kind == 'values') return { value: target[index], done: false };
  return { value: [index, target[index]], done: false };
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.github.io/ecma262/#sec-createunmappedargumentsobject
// https://tc39.github.io/ecma262/#sec-createmappedargumentsobject
Iterators.Arguments = Iterators.Array;

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 95 */
/*!***************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/dom-iterables.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),
/* 96 */
/*!**********************************************************!*\
  !*** ../node_modules/core-js-pure/modules/es.promise.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ 7);
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ 38);
var global = __webpack_require__(/*! ../internals/global */ 8);
var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ 47);
var NativePromise = __webpack_require__(/*! ../internals/native-promise-constructor */ 97);
var redefine = __webpack_require__(/*! ../internals/redefine */ 92);
var redefineAll = __webpack_require__(/*! ../internals/redefine-all */ 98);
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ 85);
var setSpecies = __webpack_require__(/*! ../internals/set-species */ 99);
var isObject = __webpack_require__(/*! ../internals/is-object */ 19);
var aFunction = __webpack_require__(/*! ../internals/a-function */ 26);
var anInstance = __webpack_require__(/*! ../internals/an-instance */ 100);
var classof = __webpack_require__(/*! ../internals/classof-raw */ 16);
var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ 71);
var iterate = __webpack_require__(/*! ../internals/iterate */ 101);
var checkCorrectnessOfIteration = __webpack_require__(/*! ../internals/check-correctness-of-iteration */ 105);
var speciesConstructor = __webpack_require__(/*! ../internals/species-constructor */ 106);
var task = __webpack_require__(/*! ../internals/task */ 107).set;
var microtask = __webpack_require__(/*! ../internals/microtask */ 109);
var promiseResolve = __webpack_require__(/*! ../internals/promise-resolve */ 110);
var hostReportErrors = __webpack_require__(/*! ../internals/host-report-errors */ 112);
var newPromiseCapabilityModule = __webpack_require__(/*! ../internals/new-promise-capability */ 111);
var perform = __webpack_require__(/*! ../internals/perform */ 113);
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ 69);
var isForced = __webpack_require__(/*! ../internals/is-forced */ 23);
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ 36);
var V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ 45);

var SPECIES = wellKnownSymbol('species');
var PROMISE = 'Promise';
var getInternalState = InternalStateModule.get;
var setInternalState = InternalStateModule.set;
var getInternalPromiseState = InternalStateModule.getterFor(PROMISE);
var PromiseConstructor = NativePromise;
var TypeError = global.TypeError;
var document = global.document;
var process = global.process;
var $fetch = getBuiltIn('fetch');
var newPromiseCapability = newPromiseCapabilityModule.f;
var newGenericPromiseCapability = newPromiseCapability;
var IS_NODE = classof(process) == 'process';
var DISPATCH_EVENT = !!(document && document.createEvent && global.dispatchEvent);
var UNHANDLED_REJECTION = 'unhandledrejection';
var REJECTION_HANDLED = 'rejectionhandled';
var PENDING = 0;
var FULFILLED = 1;
var REJECTED = 2;
var HANDLED = 1;
var UNHANDLED = 2;
var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;

var FORCED = isForced(PROMISE, function () {
  var GLOBAL_CORE_JS_PROMISE = inspectSource(PromiseConstructor) !== String(PromiseConstructor);
  if (!GLOBAL_CORE_JS_PROMISE) {
    // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
    // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
    // We can't detect it synchronously, so just check versions
    if (V8_VERSION === 66) return true;
    // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    if (!IS_NODE && typeof PromiseRejectionEvent != 'function') return true;
  }
  // We need Promise#finally in the pure version for preventing prototype pollution
  if (IS_PURE && !PromiseConstructor.prototype['finally']) return true;
  // We can't use @@species feature detection in V8 since it causes
  // deoptimization and performance degradation
  // https://github.com/zloirock/core-js/issues/679
  if (V8_VERSION >= 51 && /native code/.test(PromiseConstructor)) return false;
  // Detect correctness of subclassing with @@species support
  var promise = PromiseConstructor.resolve(1);
  var FakePromise = function (exec) {
    exec(function () { /* empty */ }, function () { /* empty */ });
  };
  var constructor = promise.constructor = {};
  constructor[SPECIES] = FakePromise;
  return !(promise.then(function () { /* empty */ }) instanceof FakePromise);
});

var INCORRECT_ITERATION = FORCED || !checkCorrectnessOfIteration(function (iterable) {
  PromiseConstructor.all(iterable)['catch'](function () { /* empty */ });
});

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};

var notify = function (promise, state, isReject) {
  if (state.notified) return;
  state.notified = true;
  var chain = state.reactions;
  microtask(function () {
    var value = state.value;
    var ok = state.state == FULFILLED;
    var index = 0;
    // variable length - can't use forEach
    while (chain.length > index) {
      var reaction = chain[index++];
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (state.rejection === UNHANDLED) onHandleUnhandled(promise, state);
            state.rejection = HANDLED;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // can throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (error) {
        if (domain && !exited) domain.exit();
        reject(error);
      }
    }
    state.reactions = [];
    state.notified = false;
    if (isReject && !state.rejection) onUnhandled(promise, state);
  });
};

var dispatchEvent = function (name, promise, reason) {
  var event, handler;
  if (DISPATCH_EVENT) {
    event = document.createEvent('Event');
    event.promise = promise;
    event.reason = reason;
    event.initEvent(name, false, true);
    global.dispatchEvent(event);
  } else event = { promise: promise, reason: reason };
  if (handler = global['on' + name]) handler(event);
  else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
};

var onUnhandled = function (promise, state) {
  task.call(global, function () {
    var value = state.value;
    var IS_UNHANDLED = isUnhandled(state);
    var result;
    if (IS_UNHANDLED) {
      result = perform(function () {
        if (IS_NODE) {
          process.emit('unhandledRejection', value, promise);
        } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
      if (result.error) throw result.value;
    }
  });
};

var isUnhandled = function (state) {
  return state.rejection !== HANDLED && !state.parent;
};

var onHandleUnhandled = function (promise, state) {
  task.call(global, function () {
    if (IS_NODE) {
      process.emit('rejectionHandled', promise);
    } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
  });
};

var bind = function (fn, promise, state, unwrap) {
  return function (value) {
    fn(promise, state, value, unwrap);
  };
};

var internalReject = function (promise, state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  state.value = value;
  state.state = REJECTED;
  notify(promise, state, true);
};

var internalResolve = function (promise, state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    var then = isThenable(value);
    if (then) {
      microtask(function () {
        var wrapper = { done: false };
        try {
          then.call(value,
            bind(internalResolve, promise, wrapper, state),
            bind(internalReject, promise, wrapper, state)
          );
        } catch (error) {
          internalReject(promise, wrapper, error, state);
        }
      });
    } else {
      state.value = value;
      state.state = FULFILLED;
      notify(promise, state, false);
    }
  } catch (error) {
    internalReject(promise, { done: false }, error, state);
  }
};

// constructor polyfill
if (FORCED) {
  // 25.4.3.1 Promise(executor)
  PromiseConstructor = function Promise(executor) {
    anInstance(this, PromiseConstructor, PROMISE);
    aFunction(executor);
    Internal.call(this);
    var state = getInternalState(this);
    try {
      executor(bind(internalResolve, this, state), bind(internalReject, this, state));
    } catch (error) {
      internalReject(this, state, error);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    setInternalState(this, {
      type: PROMISE,
      done: false,
      notified: false,
      parent: false,
      reactions: [],
      rejection: false,
      state: PENDING,
      value: undefined
    });
  };
  Internal.prototype = redefineAll(PromiseConstructor.prototype, {
    // `Promise.prototype.then` method
    // https://tc39.github.io/ecma262/#sec-promise.prototype.then
    then: function then(onFulfilled, onRejected) {
      var state = getInternalPromiseState(this);
      var reaction = newPromiseCapability(speciesConstructor(this, PromiseConstructor));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = IS_NODE ? process.domain : undefined;
      state.parent = true;
      state.reactions.push(reaction);
      if (state.state != PENDING) notify(this, state, false);
      return reaction.promise;
    },
    // `Promise.prototype.catch` method
    // https://tc39.github.io/ecma262/#sec-promise.prototype.catch
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    var state = getInternalState(promise);
    this.promise = promise;
    this.resolve = bind(internalResolve, promise, state);
    this.reject = bind(internalReject, promise, state);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === PromiseConstructor || C === PromiseWrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };

  if (!IS_PURE && typeof NativePromise == 'function') {
    nativeThen = NativePromise.prototype.then;

    // wrap native Promise#then for native async functions
    redefine(NativePromise.prototype, 'then', function then(onFulfilled, onRejected) {
      var that = this;
      return new PromiseConstructor(function (resolve, reject) {
        nativeThen.call(that, resolve, reject);
      }).then(onFulfilled, onRejected);
    // https://github.com/zloirock/core-js/issues/640
    }, { unsafe: true });

    // wrap fetch result
    if (typeof $fetch == 'function') $({ global: true, enumerable: true, forced: true }, {
      // eslint-disable-next-line no-unused-vars
      fetch: function fetch(input /* , init */) {
        return promiseResolve(PromiseConstructor, $fetch.apply(global, arguments));
      }
    });
  }
}

$({ global: true, wrap: true, forced: FORCED }, {
  Promise: PromiseConstructor
});

setToStringTag(PromiseConstructor, PROMISE, false, true);
setSpecies(PROMISE);

PromiseWrapper = getBuiltIn(PROMISE);

// statics
$({ target: PROMISE, stat: true, forced: FORCED }, {
  // `Promise.reject` method
  // https://tc39.github.io/ecma262/#sec-promise.reject
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    capability.reject.call(undefined, r);
    return capability.promise;
  }
});

$({ target: PROMISE, stat: true, forced: IS_PURE || FORCED }, {
  // `Promise.resolve` method
  // https://tc39.github.io/ecma262/#sec-promise.resolve
  resolve: function resolve(x) {
    return promiseResolve(IS_PURE && this === PromiseWrapper ? PromiseConstructor : this, x);
  }
});

$({ target: PROMISE, stat: true, forced: INCORRECT_ITERATION }, {
  // `Promise.all` method
  // https://tc39.github.io/ecma262/#sec-promise.all
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aFunction(C.resolve);
      var values = [];
      var counter = 0;
      var remaining = 1;
      iterate(iterable, function (promise) {
        var index = counter++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        $promiseResolve.call(C, promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.error) reject(result.value);
    return capability.promise;
  },
  // `Promise.race` method
  // https://tc39.github.io/ecma262/#sec-promise.race
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aFunction(C.resolve);
      iterate(iterable, function (promise) {
        $promiseResolve.call(C, promise).then(capability.resolve, reject);
      });
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});


/***/ }),
/* 97 */
/*!****************************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/native-promise-constructor.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ 8);

module.exports = global.Promise;


/***/ }),
/* 98 */
/*!**************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/redefine-all.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(/*! ../internals/redefine */ 92);

module.exports = function (target, src, options) {
  for (var key in src) {
    if (options && options.unsafe && target[key]) target[key] = src[key];
    else redefine(target, key, src[key], options);
  } return target;
};


/***/ }),
/* 99 */
/*!*************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/set-species.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ 47);
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ 28);
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ 36);
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ 10);

var SPECIES = wellKnownSymbol('species');

module.exports = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
  var defineProperty = definePropertyModule.f;

  if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
    defineProperty(Constructor, SPECIES, {
      configurable: true,
      get: function () { return this; }
    });
  }
};


/***/ }),
/* 100 */
/*!*************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/an-instance.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name) {
  if (!(it instanceof Constructor)) {
    throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');
  } return it;
};


/***/ }),
/* 101 */
/*!*********************************************************!*\
  !*** ../node_modules/core-js-pure/internals/iterate.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ 29);
var isArrayIteratorMethod = __webpack_require__(/*! ../internals/is-array-iterator-method */ 102);
var toLength = __webpack_require__(/*! ../internals/to-length */ 32);
var bind = __webpack_require__(/*! ../internals/function-bind-context */ 25);
var getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ 103);
var callWithSafeIterationClosing = __webpack_require__(/*! ../internals/call-with-safe-iteration-closing */ 104);

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

var iterate = module.exports = function (iterable, fn, that, AS_ENTRIES, IS_ITERATOR) {
  var boundFunction = bind(fn, that, AS_ENTRIES ? 2 : 1);
  var iterator, iterFn, index, length, result, next, step;

  if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (typeof iterFn != 'function') throw TypeError('Target is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = toLength(iterable.length); length > index; index++) {
        result = AS_ENTRIES
          ? boundFunction(anObject(step = iterable[index])[0], step[1])
          : boundFunction(iterable[index]);
        if (result && result instanceof Result) return result;
      } return new Result(false);
    }
    iterator = iterFn.call(iterable);
  }

  next = iterator.next;
  while (!(step = next.call(iterator)).done) {
    result = callWithSafeIterationClosing(iterator, boundFunction, step.value, AS_ENTRIES);
    if (typeof result == 'object' && result && result instanceof Result) return result;
  } return new Result(false);
};

iterate.stop = function (result) {
  return new Result(true, result);
};


/***/ }),
/* 102 */
/*!**************************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/is-array-iterator-method.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ 36);
var Iterators = __webpack_require__(/*! ../internals/iterators */ 89);

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),
/* 103 */
/*!*********************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/get-iterator-method.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ../internals/classof */ 88);
var Iterators = __webpack_require__(/*! ../internals/iterators */ 89);
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ 36);

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 104 */
/*!**********************************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/call-with-safe-iteration-closing.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ 29);

// call something on iterator step with safe closing on error
module.exports = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (error) {
    var returnMethod = iterator['return'];
    if (returnMethod !== undefined) anObject(returnMethod.call(iterator));
    throw error;
  }
};


/***/ }),
/* 105 */
/*!********************************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/check-correctness-of-iteration.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ 36);

var ITERATOR = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR] = function () {
    return this;
  };
  // eslint-disable-next-line no-throw-literal
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

module.exports = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};


/***/ }),
/* 106 */
/*!*********************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/species-constructor.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ 29);
var aFunction = __webpack_require__(/*! ../internals/a-function */ 26);
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ 36);

var SPECIES = wellKnownSymbol('species');

// `SpeciesConstructor` abstract operation
// https://tc39.github.io/ecma262/#sec-speciesconstructor
module.exports = function (O, defaultConstructor) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? defaultConstructor : aFunction(S);
};


/***/ }),
/* 107 */
/*!******************************************************!*\
  !*** ../node_modules/core-js-pure/internals/task.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ 8);
var fails = __webpack_require__(/*! ../internals/fails */ 11);
var classof = __webpack_require__(/*! ../internals/classof-raw */ 16);
var bind = __webpack_require__(/*! ../internals/function-bind-context */ 25);
var html = __webpack_require__(/*! ../internals/html */ 84);
var createElement = __webpack_require__(/*! ../internals/document-create-element */ 22);
var IS_IOS = __webpack_require__(/*! ../internals/engine-is-ios */ 108);

var location = global.location;
var set = global.setImmediate;
var clear = global.clearImmediate;
var process = global.process;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;

var run = function (id) {
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};

var runner = function (id) {
  return function () {
    run(id);
  };
};

var listener = function (event) {
  run(event.data);
};

var post = function (id) {
  // old engines have not location.origin
  global.postMessage(id + '', location.protocol + '//' + location.host);
};

// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!set || !clear) {
  set = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      (typeof fn == 'function' ? fn : Function(fn)).apply(undefined, args);
    };
    defer(counter);
    return counter;
  };
  clear = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (classof(process) == 'process') {
    defer = function (id) {
      process.nextTick(runner(id));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(runner(id));
    };
  // Browsers with MessageChannel, includes WebWorkers
  // except iOS - https://github.com/zloirock/core-js/issues/624
  } else if (MessageChannel && !IS_IOS) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = bind(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts && !fails(post)) {
    defer = post;
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in createElement('script')) {
    defer = function (id) {
      html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(runner(id), 0);
    };
  }
}

module.exports = {
  set: set,
  clear: clear
};


/***/ }),
/* 108 */
/*!***************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/engine-is-ios.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ 46);

module.exports = /(iphone|ipod|ipad).*applewebkit/i.test(userAgent);


/***/ }),
/* 109 */
/*!***********************************************************!*\
  !*** ../node_modules/core-js-pure/internals/microtask.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ 8);
var getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ 9).f;
var classof = __webpack_require__(/*! ../internals/classof-raw */ 16);
var macrotask = __webpack_require__(/*! ../internals/task */ 107).set;
var IS_IOS = __webpack_require__(/*! ../internals/engine-is-ios */ 108);

var MutationObserver = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var IS_NODE = classof(process) == 'process';
// Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`
var queueMicrotaskDescriptor = getOwnPropertyDescriptor(global, 'queueMicrotask');
var queueMicrotask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;

var flush, head, last, notify, toggle, node, promise, then;

// modern engines have queueMicrotask method
if (!queueMicrotask) {
  flush = function () {
    var parent, fn;
    if (IS_NODE && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (error) {
        if (head) notify();
        else last = undefined;
        throw error;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (IS_NODE) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
  } else if (MutationObserver && !IS_IOS) {
    toggle = true;
    node = document.createTextNode('');
    new MutationObserver(flush).observe(node, { characterData: true });
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    promise = Promise.resolve(undefined);
    then = promise.then;
    notify = function () {
      then.call(promise, flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }
}

module.exports = queueMicrotask || function (fn) {
  var task = { fn: fn, next: undefined };
  if (last) last.next = task;
  if (!head) {
    head = task;
    notify();
  } last = task;
};


/***/ }),
/* 110 */
/*!*****************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/promise-resolve.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ 29);
var isObject = __webpack_require__(/*! ../internals/is-object */ 19);
var newPromiseCapability = __webpack_require__(/*! ../internals/new-promise-capability */ 111);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),
/* 111 */
/*!************************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/new-promise-capability.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aFunction = __webpack_require__(/*! ../internals/a-function */ 26);

var PromiseCapability = function (C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
};

// 25.4.1.5 NewPromiseCapability(C)
module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),
/* 112 */
/*!********************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/host-report-errors.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ 8);

module.exports = function (a, b) {
  var console = global.console;
  if (console && console.error) {
    arguments.length === 1 ? console.error(a) : console.error(a, b);
  }
};


/***/ }),
/* 113 */
/*!*********************************************************!*\
  !*** ../node_modules/core-js-pure/internals/perform.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { error: false, value: exec() };
  } catch (error) {
    return { error: true, value: error };
  }
};


/***/ }),
/* 114 */
/*!**********************************************************************!*\
  !*** ../node_modules/core-js-pure/modules/es.promise.all-settled.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ 7);
var aFunction = __webpack_require__(/*! ../internals/a-function */ 26);
var newPromiseCapabilityModule = __webpack_require__(/*! ../internals/new-promise-capability */ 111);
var perform = __webpack_require__(/*! ../internals/perform */ 113);
var iterate = __webpack_require__(/*! ../internals/iterate */ 101);

// `Promise.allSettled` method
// https://github.com/tc39/proposal-promise-allSettled
$({ target: 'Promise', stat: true }, {
  allSettled: function allSettled(iterable) {
    var C = this;
    var capability = newPromiseCapabilityModule.f(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var promiseResolve = aFunction(C.resolve);
      var values = [];
      var counter = 0;
      var remaining = 1;
      iterate(iterable, function (promise) {
        var index = counter++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        promiseResolve.call(C, promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = { status: 'fulfilled', value: value };
          --remaining || resolve(values);
        }, function (e) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = { status: 'rejected', reason: e };
          --remaining || resolve(values);
        });
      });
      --remaining || resolve(values);
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});


/***/ }),
/* 115 */
/*!******************************************************************!*\
  !*** ../node_modules/core-js-pure/modules/es.promise.finally.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ 7);
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ 38);
var NativePromise = __webpack_require__(/*! ../internals/native-promise-constructor */ 97);
var fails = __webpack_require__(/*! ../internals/fails */ 11);
var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ 47);
var speciesConstructor = __webpack_require__(/*! ../internals/species-constructor */ 106);
var promiseResolve = __webpack_require__(/*! ../internals/promise-resolve */ 110);
var redefine = __webpack_require__(/*! ../internals/redefine */ 92);

// Safari bug https://bugs.webkit.org/show_bug.cgi?id=200829
var NON_GENERIC = !!NativePromise && fails(function () {
  NativePromise.prototype['finally'].call({ then: function () { /* empty */ } }, function () { /* empty */ });
});

// `Promise.prototype.finally` method
// https://tc39.github.io/ecma262/#sec-promise.prototype.finally
$({ target: 'Promise', proto: true, real: true, forced: NON_GENERIC }, {
  'finally': function (onFinally) {
    var C = speciesConstructor(this, getBuiltIn('Promise'));
    var isFunction = typeof onFinally == 'function';
    return this.then(
      isFunction ? function (x) {
        return promiseResolve(C, onFinally()).then(function () { return x; });
      } : onFinally,
      isFunction ? function (e) {
        return promiseResolve(C, onFinally()).then(function () { throw e; });
      } : onFinally
    );
  }
});

// patch native Promise.prototype for native async functions
if (!IS_PURE && typeof NativePromise == 'function' && !NativePromise.prototype['finally']) {
  redefine(NativePromise.prototype, 'finally', getBuiltIn('Promise').prototype['finally']);
}


/***/ }),
/* 116 */
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 117 */
/*!*******************************************!*\
  !*** ../node_modules/react-dom/server.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(/*! ./server.node */ 118);


/***/ }),
/* 118 */
/*!************************************************!*\
  !*** ../node_modules/react-dom/server.node.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(/*! ./cjs/react-dom-server.node.production.min.js */ 119);
} else {}


/***/ }),
/* 119 */
/*!*****************************************************************************!*\
  !*** ../node_modules/react-dom/cjs/react-dom-server.node.production.min.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-dom-server.node.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var k=__webpack_require__(/*! object-assign */ 120),m=__webpack_require__(/*! react */ 116),aa=__webpack_require__(/*! stream */ 121);function r(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}
var u="function"===typeof Symbol&&Symbol.for,ba=u?Symbol.for("react.portal"):60106,v=u?Symbol.for("react.fragment"):60107,ca=u?Symbol.for("react.strict_mode"):60108,da=u?Symbol.for("react.profiler"):60114,w=u?Symbol.for("react.provider"):60109,ea=u?Symbol.for("react.context"):60110,fa=u?Symbol.for("react.concurrent_mode"):60111,ha=u?Symbol.for("react.forward_ref"):60112,B=u?Symbol.for("react.suspense"):60113,ia=u?Symbol.for("react.suspense_list"):60120,ja=u?Symbol.for("react.memo"):60115,ka=u?Symbol.for("react.lazy"):
60116,la=u?Symbol.for("react.block"):60121,ma=u?Symbol.for("react.fundamental"):60117,na=u?Symbol.for("react.scope"):60119;function oa(a){if(-1===a._status){a._status=0;var b=a._ctor;b=b();a._result=b;b.then(function(c){0===a._status&&(c=c.default,a._status=1,a._result=c)},function(c){0===a._status&&(a._status=2,a._result=c)})}}
function C(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case v:return"Fragment";case ba:return"Portal";case da:return"Profiler";case ca:return"StrictMode";case B:return"Suspense";case ia:return"SuspenseList"}if("object"===typeof a)switch(a.$$typeof){case ea:return"Context.Consumer";case w:return"Context.Provider";case ha:var b=a.render;b=b.displayName||b.name||"";return a.displayName||(""!==b?"ForwardRef("+b+")":"ForwardRef");
case ja:return C(a.type);case la:return C(a.render);case ka:if(a=1===a._status?a._result:null)return C(a)}return null}var D=m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;D.hasOwnProperty("ReactCurrentDispatcher")||(D.ReactCurrentDispatcher={current:null});D.hasOwnProperty("ReactCurrentBatchConfig")||(D.ReactCurrentBatchConfig={suspense:null});var pa={};function E(a,b){for(var c=a._threadCount|0;c<=b;c++)a[c]=a._currentValue2,a._threadCount=c+1}
function qa(a,b,c,d){if(d&&(d=a.contextType,"object"===typeof d&&null!==d))return E(d,c),d[c];if(a=a.contextTypes){c={};for(var f in a)c[f]=b[f];b=c}else b=pa;return b}for(var F=new Uint16Array(16),H=0;15>H;H++)F[H]=H+1;F[15]=0;
var ra=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,sa=Object.prototype.hasOwnProperty,ta={},ua={};
function va(a){if(sa.call(ua,a))return!0;if(sa.call(ta,a))return!1;if(ra.test(a))return ua[a]=!0;ta[a]=!0;return!1}function wa(a,b,c,d){if(null!==c&&0===c.type)return!1;switch(typeof b){case "function":case "symbol":return!0;case "boolean":if(d)return!1;if(null!==c)return!c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return"data-"!==a&&"aria-"!==a;default:return!1}}
function xa(a,b,c,d){if(null===b||"undefined"===typeof b||wa(a,b,c,d))return!0;if(d)return!1;if(null!==c)switch(c.type){case 3:return!b;case 4:return!1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return!1}function J(a,b,c,d,f,h){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=f;this.mustUseProperty=c;this.propertyName=a;this.type=b;this.sanitizeURL=h}var K={};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){K[a]=new J(a,0,!1,a,null,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];K[b]=new J(b,1,!1,a[1],null,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(a){K[a]=new J(a,2,!1,a.toLowerCase(),null,!1)});
["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){K[a]=new J(a,2,!1,a,null,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){K[a]=new J(a,3,!1,a.toLowerCase(),null,!1)});
["checked","multiple","muted","selected"].forEach(function(a){K[a]=new J(a,3,!0,a,null,!1)});["capture","download"].forEach(function(a){K[a]=new J(a,4,!1,a,null,!1)});["cols","rows","size","span"].forEach(function(a){K[a]=new J(a,6,!1,a,null,!1)});["rowSpan","start"].forEach(function(a){K[a]=new J(a,5,!1,a.toLowerCase(),null,!1)});var L=/[\-:]([a-z])/g;function M(a){return a[1].toUpperCase()}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(L,
M);K[b]=new J(b,1,!1,a,null,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(L,M);K[b]=new J(b,1,!1,a,"http://www.w3.org/1999/xlink",!1)});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(L,M);K[b]=new J(b,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1)});["tabIndex","crossOrigin"].forEach(function(a){K[a]=new J(a,1,!1,a.toLowerCase(),null,!1)});
K.xlinkHref=new J("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0);["src","href","action","formAction"].forEach(function(a){K[a]=new J(a,1,!1,a.toLowerCase(),null,!0)});var ya=/["'&<>]/;
function N(a){if("boolean"===typeof a||"number"===typeof a)return""+a;a=""+a;var b=ya.exec(a);if(b){var c="",d,f=0;for(d=b.index;d<a.length;d++){switch(a.charCodeAt(d)){case 34:b="&quot;";break;case 38:b="&amp;";break;case 39:b="&#x27;";break;case 60:b="&lt;";break;case 62:b="&gt;";break;default:continue}f!==d&&(c+=a.substring(f,d));f=d+1;c+=b}a=f!==d?c+a.substring(f,d):c}return a}
function za(a,b){var c=K.hasOwnProperty(a)?K[a]:null;var d;if(d="style"!==a)d=null!==c?0===c.type:!(2<a.length)||"o"!==a[0]&&"O"!==a[0]||"n"!==a[1]&&"N"!==a[1]?!1:!0;if(d||xa(a,b,c,!1))return"";if(null!==c){a=c.attributeName;d=c.type;if(3===d||4===d&&!0===b)return a+'=""';c.sanitizeURL&&(b=""+b);return a+'="'+(N(b)+'"')}return va(a)?a+'="'+(N(b)+'"'):""}function Aa(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}
var Ba="function"===typeof Object.is?Object.is:Aa,O=null,P=null,Q=null,R=!1,S=!1,U=null,V=0;function W(){if(null===O)throw Error(r(321));return O}function Ca(){if(0<V)throw Error(r(312));return{memoizedState:null,queue:null,next:null}}function Da(){null===Q?null===P?(R=!1,P=Q=Ca()):(R=!0,Q=P):null===Q.next?(R=!1,Q=Q.next=Ca()):(R=!0,Q=Q.next);return Q}function Ea(a,b,c,d){for(;S;)S=!1,V+=1,Q=null,c=a(b,d);P=O=null;V=0;Q=U=null;return c}function Fa(a,b){return"function"===typeof b?b(a):b}
function Ga(a,b,c){O=W();Q=Da();if(R){var d=Q.queue;b=d.dispatch;if(null!==U&&(c=U.get(d),void 0!==c)){U.delete(d);d=Q.memoizedState;do d=a(d,c.action),c=c.next;while(null!==c);Q.memoizedState=d;return[d,b]}return[Q.memoizedState,b]}a=a===Fa?"function"===typeof b?b():b:void 0!==c?c(b):b;Q.memoizedState=a;a=Q.queue={last:null,dispatch:null};a=a.dispatch=Ha.bind(null,O,a);return[Q.memoizedState,a]}
function Ha(a,b,c){if(!(25>V))throw Error(r(301));if(a===O)if(S=!0,a={action:c,next:null},null===U&&(U=new Map),c=U.get(b),void 0===c)U.set(b,a);else{for(b=c;null!==b.next;)b=b.next;b.next=a}}function Ia(){}
var X=0,Ja={readContext:function(a){var b=X;E(a,b);return a[b]},useContext:function(a){W();var b=X;E(a,b);return a[b]},useMemo:function(a,b){O=W();Q=Da();b=void 0===b?null:b;if(null!==Q){var c=Q.memoizedState;if(null!==c&&null!==b){a:{var d=c[1];if(null===d)d=!1;else{for(var f=0;f<d.length&&f<b.length;f++)if(!Ba(b[f],d[f])){d=!1;break a}d=!0}}if(d)return c[0]}}a=a();Q.memoizedState=[a,b];return a},useReducer:Ga,useRef:function(a){O=W();Q=Da();var b=Q.memoizedState;return null===b?(a={current:a},Q.memoizedState=
a):b},useState:function(a){return Ga(Fa,a)},useLayoutEffect:function(){},useCallback:function(a){return a},useImperativeHandle:Ia,useEffect:Ia,useDebugValue:Ia,useResponder:function(a,b){return{props:b,responder:a}},useDeferredValue:function(a){W();return a},useTransition:function(){W();return[function(a){a()},!1]}},Ka={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};
function La(a){switch(a){case "svg":return"http://www.w3.org/2000/svg";case "math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}
var Ma={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0},Na=k({menuitem:!0},Ma),Y={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,
gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Oa=["Webkit","ms","Moz","O"];Object.keys(Y).forEach(function(a){Oa.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);Y[b]=Y[a]})});
var Pa=/([A-Z])/g,Qa=/^ms-/,Z=m.Children.toArray,Ra=D.ReactCurrentDispatcher,Sa={listing:!0,pre:!0,textarea:!0},Ta=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,Ua={},Va={};function Wa(a){if(void 0===a||null===a)return a;var b="";m.Children.forEach(a,function(a){null!=a&&(b+=a)});return b}var Xa=Object.prototype.hasOwnProperty,Ya={children:null,dangerouslySetInnerHTML:null,suppressContentEditableWarning:null,suppressHydrationWarning:null};function Za(a,b){if(void 0===a)throw Error(r(152,C(b)||"Component"));}
function $a(a,b,c){function d(d,h){var e=h.prototype&&h.prototype.isReactComponent,f=qa(h,b,c,e),p=[],g=!1,l={isMounted:function(){return!1},enqueueForceUpdate:function(){if(null===p)return null},enqueueReplaceState:function(a,c){g=!0;p=[c]},enqueueSetState:function(a,c){if(null===p)return null;p.push(c)}};if(e){if(e=new h(d.props,f,l),"function"===typeof h.getDerivedStateFromProps){var x=h.getDerivedStateFromProps.call(null,d.props,e.state);null!=x&&(e.state=k({},e.state,x))}}else if(O={},e=h(d.props,
f,l),e=Ea(h,d.props,e,f),null==e||null==e.render){a=e;Za(a,h);return}e.props=d.props;e.context=f;e.updater=l;l=e.state;void 0===l&&(e.state=l=null);if("function"===typeof e.UNSAFE_componentWillMount||"function"===typeof e.componentWillMount)if("function"===typeof e.componentWillMount&&"function"!==typeof h.getDerivedStateFromProps&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&"function"!==typeof h.getDerivedStateFromProps&&e.UNSAFE_componentWillMount(),p.length){l=p;var t=
g;p=null;g=!1;if(t&&1===l.length)e.state=l[0];else{x=t?l[0]:e.state;var y=!0;for(t=t?1:0;t<l.length;t++){var q=l[t];q="function"===typeof q?q.call(e,x,d.props,f):q;null!=q&&(y?(y=!1,x=k({},x,q)):k(x,q))}e.state=x}}else p=null;a=e.render();Za(a,h);if("function"===typeof e.getChildContext&&(d=h.childContextTypes,"object"===typeof d)){var A=e.getChildContext();for(var T in A)if(!(T in d))throw Error(r(108,C(h)||"Unknown",T));}A&&(b=k({},b,A))}for(;m.isValidElement(a);){var f=a,h=f.type;if("function"!==
typeof h)break;d(f,h)}return{child:a,context:b}}
var ab=function(){function a(a,b){m.isValidElement(a)?a.type!==v?a=[a]:(a=a.props.children,a=m.isValidElement(a)?[a]:Z(a)):a=Z(a);a={type:null,domNamespace:Ka.html,children:a,childIndex:0,context:pa,footer:""};var c=F[0];if(0===c){var d=F;c=d.length;var p=2*c;if(!(65536>=p))throw Error(r(304));var g=new Uint16Array(p);g.set(d);F=g;F[0]=c+1;for(d=c;d<p-1;d++)F[d]=d+1;F[p-1]=0}else F[0]=F[c];this.threadID=c;this.stack=[a];this.exhausted=!1;this.currentSelectValue=null;this.previousWasTextNode=!1;this.makeStaticMarkup=
b;this.suspenseDepth=0;this.contextIndex=-1;this.contextStack=[];this.contextValueStack=[]}var b=a.prototype;b.destroy=function(){if(!this.exhausted){this.exhausted=!0;this.clearProviders();var a=this.threadID;F[a]=F[0];F[0]=a}};b.pushProvider=function(a){var b=++this.contextIndex,c=a.type._context,h=this.threadID;E(c,h);var p=c[h];this.contextStack[b]=c;this.contextValueStack[b]=p;c[h]=a.props.value};b.popProvider=function(){var a=this.contextIndex,b=this.contextStack[a],f=this.contextValueStack[a];
this.contextStack[a]=null;this.contextValueStack[a]=null;this.contextIndex--;b[this.threadID]=f};b.clearProviders=function(){for(var a=this.contextIndex;0<=a;a--)this.contextStack[a][this.threadID]=this.contextValueStack[a]};b.read=function(a){if(this.exhausted)return null;var b=X;X=this.threadID;var c=Ra.current;Ra.current=Ja;try{for(var h=[""],p=!1;h[0].length<a;){if(0===this.stack.length){this.exhausted=!0;var g=this.threadID;F[g]=F[0];F[0]=g;break}var e=this.stack[this.stack.length-1];if(p||e.childIndex>=
e.children.length){var I=e.footer;""!==I&&(this.previousWasTextNode=!1);this.stack.pop();if("select"===e.type)this.currentSelectValue=null;else if(null!=e.type&&null!=e.type.type&&e.type.type.$$typeof===w)this.popProvider(e.type);else if(e.type===B){this.suspenseDepth--;var G=h.pop();if(p){p=!1;var n=e.fallbackFrame;if(!n)throw Error(r(303));this.stack.push(n);h[this.suspenseDepth]+="\x3c!--$!--\x3e";continue}else h[this.suspenseDepth]+=G}h[this.suspenseDepth]+=I}else{var l=e.children[e.childIndex++],
x="";try{x+=this.render(l,e.context,e.domNamespace)}catch(t){if(null!=t&&"function"===typeof t.then)throw Error(r(294));throw t;}finally{}h.length<=this.suspenseDepth&&h.push("");h[this.suspenseDepth]+=x}}return h[0]}finally{Ra.current=c,X=b}};b.render=function(a,b,f){if("string"===typeof a||"number"===typeof a){f=""+a;if(""===f)return"";if(this.makeStaticMarkup)return N(f);if(this.previousWasTextNode)return"\x3c!-- --\x3e"+N(f);this.previousWasTextNode=!0;return N(f)}b=$a(a,b,this.threadID);a=b.child;
b=b.context;if(null===a||!1===a)return"";if(!m.isValidElement(a)){if(null!=a&&null!=a.$$typeof){f=a.$$typeof;if(f===ba)throw Error(r(257));throw Error(r(258,f.toString()));}a=Z(a);this.stack.push({type:null,domNamespace:f,children:a,childIndex:0,context:b,footer:""});return""}var c=a.type;if("string"===typeof c)return this.renderDOM(a,b,f);switch(c){case ca:case fa:case da:case ia:case v:return a=Z(a.props.children),this.stack.push({type:null,domNamespace:f,children:a,childIndex:0,context:b,footer:""}),
"";case B:throw Error(r(294));}if("object"===typeof c&&null!==c)switch(c.$$typeof){case ha:O={};var d=c.render(a.props,a.ref);d=Ea(c.render,a.props,d,a.ref);d=Z(d);this.stack.push({type:null,domNamespace:f,children:d,childIndex:0,context:b,footer:""});return"";case ja:return a=[m.createElement(c.type,k({ref:a.ref},a.props))],this.stack.push({type:null,domNamespace:f,children:a,childIndex:0,context:b,footer:""}),"";case w:return c=Z(a.props.children),f={type:a,domNamespace:f,children:c,childIndex:0,
context:b,footer:""},this.pushProvider(a),this.stack.push(f),"";case ea:c=a.type;d=a.props;var g=this.threadID;E(c,g);c=Z(d.children(c[g]));this.stack.push({type:a,domNamespace:f,children:c,childIndex:0,context:b,footer:""});return"";case ma:throw Error(r(338));case ka:switch(c=a.type,oa(c),c._status){case 1:return a=[m.createElement(c._result,k({ref:a.ref},a.props))],this.stack.push({type:null,domNamespace:f,children:a,childIndex:0,context:b,footer:""}),"";case 2:throw c._result;default:throw Error(r(295));
}case na:throw Error(r(343));}throw Error(r(130,null==c?c:typeof c,""));};b.renderDOM=function(a,b,f){var c=a.type.toLowerCase();f===Ka.html&&La(c);if(!Ua.hasOwnProperty(c)){if(!Ta.test(c))throw Error(r(65,c));Ua[c]=!0}var d=a.props;if("input"===c)d=k({type:void 0},d,{defaultChecked:void 0,defaultValue:void 0,value:null!=d.value?d.value:d.defaultValue,checked:null!=d.checked?d.checked:d.defaultChecked});else if("textarea"===c){var g=d.value;if(null==g){g=d.defaultValue;var e=d.children;if(null!=e){if(null!=
g)throw Error(r(92));if(Array.isArray(e)){if(!(1>=e.length))throw Error(r(93));e=e[0]}g=""+e}null==g&&(g="")}d=k({},d,{value:void 0,children:""+g})}else if("select"===c)this.currentSelectValue=null!=d.value?d.value:d.defaultValue,d=k({},d,{value:void 0});else if("option"===c){e=this.currentSelectValue;var I=Wa(d.children);if(null!=e){var G=null!=d.value?d.value+"":I;g=!1;if(Array.isArray(e))for(var n=0;n<e.length;n++){if(""+e[n]===G){g=!0;break}}else g=""+e===G;d=k({selected:void 0,children:void 0},
d,{selected:g,children:I})}}if(g=d){if(Na[c]&&(null!=g.children||null!=g.dangerouslySetInnerHTML))throw Error(r(137,c,""));if(null!=g.dangerouslySetInnerHTML){if(null!=g.children)throw Error(r(60));if(!("object"===typeof g.dangerouslySetInnerHTML&&"__html"in g.dangerouslySetInnerHTML))throw Error(r(61));}if(null!=g.style&&"object"!==typeof g.style)throw Error(r(62,""));}g=d;e=this.makeStaticMarkup;I=1===this.stack.length;G="<"+a.type;for(z in g)if(Xa.call(g,z)){var l=g[z];if(null!=l){if("style"===
z){n=void 0;var x="",t="";for(n in l)if(l.hasOwnProperty(n)){var y=0===n.indexOf("--"),q=l[n];if(null!=q){if(y)var A=n;else if(A=n,Va.hasOwnProperty(A))A=Va[A];else{var T=A.replace(Pa,"-$1").toLowerCase().replace(Qa,"-ms-");A=Va[A]=T}x+=t+A+":";t=n;y=null==q||"boolean"===typeof q||""===q?"":y||"number"!==typeof q||0===q||Y.hasOwnProperty(t)&&Y[t]?(""+q).trim():q+"px";x+=y;t=";"}}l=x||null}n=null;b:if(y=c,q=g,-1===y.indexOf("-"))y="string"===typeof q.is;else switch(y){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":y=
!1;break b;default:y=!0}y?Ya.hasOwnProperty(z)||(n=z,n=va(n)&&null!=l?n+'="'+(N(l)+'"'):""):n=za(z,l);n&&(G+=" "+n)}}e||I&&(G+=' data-reactroot=""');var z=G;g="";Ma.hasOwnProperty(c)?z+="/>":(z+=">",g="</"+a.type+">");a:{e=d.dangerouslySetInnerHTML;if(null!=e){if(null!=e.__html){e=e.__html;break a}}else if(e=d.children,"string"===typeof e||"number"===typeof e){e=N(e);break a}e=null}null!=e?(d=[],Sa.hasOwnProperty(c)&&"\n"===e.charAt(0)&&(z+="\n"),z+=e):d=Z(d.children);a=a.type;f=null==f||"http://www.w3.org/1999/xhtml"===
f?La(a):"http://www.w3.org/2000/svg"===f&&"foreignObject"===a?"http://www.w3.org/1999/xhtml":f;this.stack.push({domNamespace:f,type:c,children:d,childIndex:0,context:b,footer:g});this.previousWasTextNode=!1;return z};return a}();function bb(a,b){a.prototype=Object.create(b.prototype);a.prototype.constructor=a;a.__proto__=b}
var cb=function(a){function b(b,c){var d=a.call(this,{})||this;d.partialRenderer=new ab(b,c);return d}bb(b,a);var c=b.prototype;c._destroy=function(a,b){this.partialRenderer.destroy();b(a)};c._read=function(a){try{this.push(this.partialRenderer.read(a))}catch(f){this.destroy(f)}};return b}(aa.Readable),db={renderToString:function(a){a=new ab(a,!1);try{return a.read(Infinity)}finally{a.destroy()}},renderToStaticMarkup:function(a){a=new ab(a,!0);try{return a.read(Infinity)}finally{a.destroy()}},renderToNodeStream:function(a){return new cb(a,
!1)},renderToStaticNodeStream:function(a){return new cb(a,!0)},version:"16.13.1"};module.exports=db.default||db;


/***/ }),
/* 120 */
/*!********************************!*\
  !*** external "object-assign" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("object-assign");

/***/ }),
/* 121 */
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("stream");

/***/ }),
/* 122 */
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 123 */
/*!*****************************************!*\
  !*** external "connected-react-router" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("connected-react-router");

/***/ }),
/* 124 */
/*!**************************!*\
  !*** external "history" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("history");

/***/ }),
/* 125 */
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 126 */
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 127 */
/*!**************************************!*\
  !*** ./app/config/generateRoutes.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ 128);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-properties */ 132);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors */ 136);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/for-each */ 143);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor */ 151);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/filter */ 155);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols */ 160);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/keys */ 167);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ 171);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/defineProperty */ 176);
/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/concat */ 2);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_ends_with__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/ends-with */ 179);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_ends_with__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_ends_with__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_includes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/includes */ 49);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_includes__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_includes__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_reduce__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/reduce */ 184);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_reduce__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_reduce__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _babel_runtime_corejs3_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/objectWithoutProperties */ 190);
/* harmony import */ var _babel_runtime_corejs3_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react */ 116);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! prop-types */ 201);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-router-dom */ 122);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_17__);
















function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_7___default()(object); if (_babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_6___default.a) { var symbols = _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_6___default()(object); if (enumerableOnly) symbols = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_5___default()(symbols).call(symbols, function (sym) { return _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context4; _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_3___default()(_context4 = ownKeys(Object(source), true)).call(_context4, function (key) { _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(target, key, source[key]); }); } else if (_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { var _context5; _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_3___default()(_context5 = ownKeys(Object(source))).call(_context5, function (key) { _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4___default()(source, key)); }); } } return target; }





function generateRoutes(_ref) {
  let {
    prevPaths = [],
    key,
    exact,
    path = '',
    onChange,
    childRoutes,
    indexRoute = {}
  } = _ref,
      config = _babel_runtime_corejs3_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_14___default()(_ref, ["prevPaths", "key", "exact", "path", "onChange", "childRoutes", "indexRoute"]);

  const paths = [...prevPaths, path];

  const currentPath = _babel_runtime_corejs3_core_js_stable_instance_reduce__WEBPACK_IMPORTED_MODULE_13___default()(paths).call(paths, (result, _path) => {
    var _context, _context3;

    if (_babel_runtime_corejs3_core_js_stable_instance_includes__WEBPACK_IMPORTED_MODULE_12___default()(_context = [result, _path]).call(_context, '') || _babel_runtime_corejs3_core_js_stable_instance_ends_with__WEBPACK_IMPORTED_MODULE_11___default()(result).call(result, '/')) {
      var _context2;

      return _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_10___default()(_context2 = "".concat(result)).call(_context2, _path);
    }

    return _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_10___default()(_context3 = "".concat(result, "/")).call(_context3, _path);
  }, '');

  let children;

  if (config.indexRoute || (childRoutes === null || childRoutes === void 0 ? void 0 : childRoutes.length) > 0) {
    children = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_17__["Switch"], null, generateRoutes(_objectSpread({}, indexRoute, {
      prevPaths: paths
    })), _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_8___default()(childRoutes).call(childRoutes, (route, i) => generateRoutes(_objectSpread({}, route, {
      key: i,
      prevPaths: paths
    }))));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_17__["Route"], {
    key: key,
    exact: exact,
    path: currentPath,
    render: props => {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(config.component, props, children);
    }
  });
}

generateRoutes.propTypes = {
  prevPaths: prop_types__WEBPACK_IMPORTED_MODULE_16___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_16___default.a.string),
  // eslint-disable-next-line
  key: prop_types__WEBPACK_IMPORTED_MODULE_16___default.a.any,
  path: prop_types__WEBPACK_IMPORTED_MODULE_16___default.a.string,
  component: prop_types__WEBPACK_IMPORTED_MODULE_16___default.a.elementType,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_16___default.a.func,
  // eslint-disable-next-line
  indexRoute: prop_types__WEBPACK_IMPORTED_MODULE_16___default.a.object,
  exact: prop_types__WEBPACK_IMPORTED_MODULE_16___default.a.bool.isRequired,
  // eslint-disable-next-line
  inheritProps: prop_types__WEBPACK_IMPORTED_MODULE_16___default.a.object,
  childRoutes: prop_types__WEBPACK_IMPORTED_MODULE_16___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_16___default.a.object)
};
/* harmony default export */ __webpack_exports__["default"] = (generateRoutes);

/***/ }),
/* 128 */
/*!***************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js-pure/stable/object/define-property */ 129);

/***/ }),
/* 129 */
/*!*********************************************************************!*\
  !*** ../node_modules/core-js-pure/stable/object/define-property.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(/*! ../../es/object/define-property */ 130);

module.exports = parent;


/***/ }),
/* 130 */
/*!*****************************************************************!*\
  !*** ../node_modules/core-js-pure/es/object/define-property.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es.object.define-property */ 131);
var path = __webpack_require__(/*! ../../internals/path */ 24);

var Object = path.Object;

var defineProperty = module.exports = function defineProperty(it, key, desc) {
  return Object.defineProperty(it, key, desc);
};

if (Object.defineProperty.sham) defineProperty.sham = true;


/***/ }),
/* 131 */
/*!*************************************************************************!*\
  !*** ../node_modules/core-js-pure/modules/es.object.define-property.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ 7);
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ 10);
var objectDefinePropertyModile = __webpack_require__(/*! ../internals/object-define-property */ 28);

// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
$({ target: 'Object', stat: true, forced: !DESCRIPTORS, sham: !DESCRIPTORS }, {
  defineProperty: objectDefinePropertyModile.f
});


/***/ }),
/* 132 */
/*!*****************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/core-js-stable/object/define-properties.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js-pure/stable/object/define-properties */ 133);

/***/ }),
/* 133 */
/*!***********************************************************************!*\
  !*** ../node_modules/core-js-pure/stable/object/define-properties.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(/*! ../../es/object/define-properties */ 134);

module.exports = parent;


/***/ }),
/* 134 */
/*!*******************************************************************!*\
  !*** ../node_modules/core-js-pure/es/object/define-properties.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es.object.define-properties */ 135);
var path = __webpack_require__(/*! ../../internals/path */ 24);

var Object = path.Object;

var defineProperties = module.exports = function defineProperties(T, D) {
  return Object.defineProperties(T, D);
};

if (Object.defineProperties.sham) defineProperties.sham = true;


/***/ }),
/* 135 */
/*!***************************************************************************!*\
  !*** ../node_modules/core-js-pure/modules/es.object.define-properties.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ 7);
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ 10);
var defineProperties = __webpack_require__(/*! ../internals/object-define-properties */ 80);

// `Object.defineProperties` method
// https://tc39.github.io/ecma262/#sec-object.defineproperties
$({ target: 'Object', stat: true, forced: !DESCRIPTORS, sham: !DESCRIPTORS }, {
  defineProperties: defineProperties
});


/***/ }),
/* 136 */
/*!****************************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js-pure/stable/object/get-own-property-descriptors */ 137);

/***/ }),
/* 137 */
/*!**********************************************************************************!*\
  !*** ../node_modules/core-js-pure/stable/object/get-own-property-descriptors.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(/*! ../../es/object/get-own-property-descriptors */ 138);

module.exports = parent;


/***/ }),
/* 138 */
/*!******************************************************************************!*\
  !*** ../node_modules/core-js-pure/es/object/get-own-property-descriptors.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es.object.get-own-property-descriptors */ 139);
var path = __webpack_require__(/*! ../../internals/path */ 24);

module.exports = path.Object.getOwnPropertyDescriptors;


/***/ }),
/* 139 */
/*!**************************************************************************************!*\
  !*** ../node_modules/core-js-pure/modules/es.object.get-own-property-descriptors.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ 7);
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ 10);
var ownKeys = __webpack_require__(/*! ../internals/own-keys */ 140);
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ 14);
var getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ 9);
var createProperty = __webpack_require__(/*! ../internals/create-property */ 34);

// `Object.getOwnPropertyDescriptors` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors
$({ target: 'Object', stat: true, sham: !DESCRIPTORS }, {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIndexedObject(object);
    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
    var keys = ownKeys(O);
    var result = {};
    var index = 0;
    var key, descriptor;
    while (keys.length > index) {
      descriptor = getOwnPropertyDescriptor(O, key = keys[index++]);
      if (descriptor !== undefined) createProperty(result, key, descriptor);
    }
    return result;
  }
});


/***/ }),
/* 140 */
/*!**********************************************************!*\
  !*** ../node_modules/core-js-pure/internals/own-keys.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ 47);
var getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ 141);
var getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ 142);
var anObject = __webpack_require__(/*! ../internals/an-object */ 29);

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),
/* 141 */
/*!*******************************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/object-get-own-property-names.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ 82);
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ 83);

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertynames
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),
/* 142 */
/*!*********************************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/object-get-own-property-symbols.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 143 */
/*!**********************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/core-js-stable/instance/for-each.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js-pure/stable/instance/for-each */ 144);

/***/ }),
/* 144 */
/*!****************************************************************!*\
  !*** ../node_modules/core-js-pure/stable/instance/for-each.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/web.dom-collections.iterator */ 93);
var forEach = __webpack_require__(/*! ../array/virtual/for-each */ 145);
var classof = __webpack_require__(/*! ../../internals/classof */ 88);
var ArrayPrototype = Array.prototype;

var DOMIterables = {
  DOMTokenList: true,
  NodeList: true
};

module.exports = function (it) {
  var own = it.forEach;
  return it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.forEach)
    // eslint-disable-next-line no-prototype-builtins
    || DOMIterables.hasOwnProperty(classof(it)) ? forEach : own;
};


/***/ }),
/* 145 */
/*!*********************************************************************!*\
  !*** ../node_modules/core-js-pure/stable/array/virtual/for-each.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(/*! ../../../es/array/virtual/for-each */ 146);

module.exports = parent;


/***/ }),
/* 146 */
/*!*****************************************************************!*\
  !*** ../node_modules/core-js-pure/es/array/virtual/for-each.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../../modules/es.array.for-each */ 147);
var entryVirtual = __webpack_require__(/*! ../../../internals/entry-virtual */ 48);

module.exports = entryVirtual('Array').forEach;


/***/ }),
/* 147 */
/*!*****************************************************************!*\
  !*** ../node_modules/core-js-pure/modules/es.array.for-each.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ 7);
var forEach = __webpack_require__(/*! ../internals/array-for-each */ 148);

// `Array.prototype.forEach` method
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
$({ target: 'Array', proto: true, forced: [].forEach != forEach }, {
  forEach: forEach
});


/***/ }),
/* 148 */
/*!****************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/array-for-each.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $forEach = __webpack_require__(/*! ../internals/array-iteration */ 149).forEach;
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ 150);
var arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ 57);

var STRICT_METHOD = arrayMethodIsStrict('forEach');
var USES_TO_LENGTH = arrayMethodUsesToLength('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
module.exports = (!STRICT_METHOD || !USES_TO_LENGTH) ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
} : [].forEach;


/***/ }),
/* 149 */
/*!*****************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/array-iteration.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__(/*! ../internals/function-bind-context */ 25);
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ 15);
var toObject = __webpack_require__(/*! ../internals/to-object */ 31);
var toLength = __webpack_require__(/*! ../internals/to-length */ 32);
var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ 35);

var push = [].push;

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push.call(target, value); // filter
        } else if (IS_EVERY) return false;  // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6)
};


/***/ }),
/* 150 */
/*!************************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/array-method-is-strict.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(/*! ../internals/fails */ 11);

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal
    method.call(null, argument || function () { throw 1; }, 1);
  });
};


/***/ }),
/* 151 */
/*!***************************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js-pure/stable/object/get-own-property-descriptor */ 152);

/***/ }),
/* 152 */
/*!*********************************************************************************!*\
  !*** ../node_modules/core-js-pure/stable/object/get-own-property-descriptor.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(/*! ../../es/object/get-own-property-descriptor */ 153);

module.exports = parent;


/***/ }),
/* 153 */
/*!*****************************************************************************!*\
  !*** ../node_modules/core-js-pure/es/object/get-own-property-descriptor.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es.object.get-own-property-descriptor */ 154);
var path = __webpack_require__(/*! ../../internals/path */ 24);

var Object = path.Object;

var getOwnPropertyDescriptor = module.exports = function getOwnPropertyDescriptor(it, key) {
  return Object.getOwnPropertyDescriptor(it, key);
};

if (Object.getOwnPropertyDescriptor.sham) getOwnPropertyDescriptor.sham = true;


/***/ }),
/* 154 */
/*!*************************************************************************************!*\
  !*** ../node_modules/core-js-pure/modules/es.object.get-own-property-descriptor.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ 7);
var fails = __webpack_require__(/*! ../internals/fails */ 11);
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ 14);
var nativeGetOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ 9).f;
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ 10);

var FAILS_ON_PRIMITIVES = fails(function () { nativeGetOwnPropertyDescriptor(1); });
var FORCED = !DESCRIPTORS || FAILS_ON_PRIMITIVES;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
$({ target: 'Object', stat: true, forced: FORCED, sham: !DESCRIPTORS }, {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(it, key) {
    return nativeGetOwnPropertyDescriptor(toIndexedObject(it), key);
  }
});


/***/ }),
/* 155 */
/*!********************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js-pure/stable/instance/filter */ 156);

/***/ }),
/* 156 */
/*!**************************************************************!*\
  !*** ../node_modules/core-js-pure/stable/instance/filter.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(/*! ../../es/instance/filter */ 157);

module.exports = parent;


/***/ }),
/* 157 */
/*!**********************************************************!*\
  !*** ../node_modules/core-js-pure/es/instance/filter.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var filter = __webpack_require__(/*! ../array/virtual/filter */ 158);

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.filter;
  return it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.filter) ? filter : own;
};


/***/ }),
/* 158 */
/*!***************************************************************!*\
  !*** ../node_modules/core-js-pure/es/array/virtual/filter.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../../modules/es.array.filter */ 159);
var entryVirtual = __webpack_require__(/*! ../../../internals/entry-virtual */ 48);

module.exports = entryVirtual('Array').filter;


/***/ }),
/* 159 */
/*!***************************************************************!*\
  !*** ../node_modules/core-js-pure/modules/es.array.filter.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ 7);
var $filter = __webpack_require__(/*! ../internals/array-iteration */ 149).filter;
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ 44);
var arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ 57);

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');
// Edge 14- issue
var USES_TO_LENGTH = arrayMethodUsesToLength('filter');

// `Array.prototype.filter` method
// https://tc39.github.io/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),
/* 160 */
/*!************************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js-pure/stable/object/get-own-property-symbols */ 161);

/***/ }),
/* 161 */
/*!******************************************************************************!*\
  !*** ../node_modules/core-js-pure/stable/object/get-own-property-symbols.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(/*! ../../es/object/get-own-property-symbols */ 162);

module.exports = parent;


/***/ }),
/* 162 */
/*!**************************************************************************!*\
  !*** ../node_modules/core-js-pure/es/object/get-own-property-symbols.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es.symbol */ 163);
var path = __webpack_require__(/*! ../../internals/path */ 24);

module.exports = path.Object.getOwnPropertySymbols;


/***/ }),
/* 163 */
/*!*********************************************************!*\
  !*** ../node_modules/core-js-pure/modules/es.symbol.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ 7);
var global = __webpack_require__(/*! ../internals/global */ 8);
var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ 47);
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ 38);
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ 10);
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ 42);
var USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ 43);
var fails = __webpack_require__(/*! ../internals/fails */ 11);
var has = __webpack_require__(/*! ../internals/has */ 20);
var isArray = __webpack_require__(/*! ../internals/is-array */ 30);
var isObject = __webpack_require__(/*! ../internals/is-object */ 19);
var anObject = __webpack_require__(/*! ../internals/an-object */ 29);
var toObject = __webpack_require__(/*! ../internals/to-object */ 31);
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ 14);
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ 18);
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ 13);
var nativeObjectCreate = __webpack_require__(/*! ../internals/object-create */ 79);
var objectKeys = __webpack_require__(/*! ../internals/object-keys */ 81);
var getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ 141);
var getOwnPropertyNamesExternal = __webpack_require__(/*! ../internals/object-get-own-property-names-external */ 164);
var getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ 142);
var getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ 9);
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ 28);
var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ 12);
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ 27);
var redefine = __webpack_require__(/*! ../internals/redefine */ 92);
var shared = __webpack_require__(/*! ../internals/shared */ 37);
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ 72);
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ 73);
var uid = __webpack_require__(/*! ../internals/uid */ 41);
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ 36);
var wrappedWellKnownSymbolModule = __webpack_require__(/*! ../internals/well-known-symbol-wrapped */ 165);
var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ 166);
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ 85);
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ 69);
var $forEach = __webpack_require__(/*! ../internals/array-iteration */ 149).forEach;

var HIDDEN = sharedKey('hidden');
var SYMBOL = 'Symbol';
var PROTOTYPE = 'prototype';
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(SYMBOL);
var ObjectPrototype = Object[PROTOTYPE];
var $Symbol = global.Symbol;
var $stringify = getBuiltIn('JSON', 'stringify');
var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
var nativeDefineProperty = definePropertyModule.f;
var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
var nativePropertyIsEnumerable = propertyIsEnumerableModule.f;
var AllSymbols = shared('symbols');
var ObjectPrototypeSymbols = shared('op-symbols');
var StringToSymbolRegistry = shared('string-to-symbol-registry');
var SymbolToStringRegistry = shared('symbol-to-string-registry');
var WellKnownSymbolsStore = shared('wks');
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDescriptor = DESCRIPTORS && fails(function () {
  return nativeObjectCreate(nativeDefineProperty({}, 'a', {
    get: function () { return nativeDefineProperty(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (O, P, Attributes) {
  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);
  if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];
  nativeDefineProperty(O, P, Attributes);
  if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
    nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);
  }
} : nativeDefineProperty;

var wrap = function (tag, description) {
  var symbol = AllSymbols[tag] = nativeObjectCreate($Symbol[PROTOTYPE]);
  setInternalState(symbol, {
    type: SYMBOL,
    tag: tag,
    description: description
  });
  if (!DESCRIPTORS) symbol.description = description;
  return symbol;
};

var isSymbol = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return Object(it) instanceof $Symbol;
};

var $defineProperty = function defineProperty(O, P, Attributes) {
  if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
  anObject(O);
  var key = toPrimitive(P, true);
  anObject(Attributes);
  if (has(AllSymbols, key)) {
    if (!Attributes.enumerable) {
      if (!has(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {}));
      O[HIDDEN][key] = true;
    } else {
      if (has(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
      Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) });
    } return setSymbolDescriptor(O, key, Attributes);
  } return nativeDefineProperty(O, key, Attributes);
};

var $defineProperties = function defineProperties(O, Properties) {
  anObject(O);
  var properties = toIndexedObject(Properties);
  var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
  $forEach(keys, function (key) {
    if (!DESCRIPTORS || $propertyIsEnumerable.call(properties, key)) $defineProperty(O, key, properties[key]);
  });
  return O;
};

var $create = function create(O, Properties) {
  return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
};

var $propertyIsEnumerable = function propertyIsEnumerable(V) {
  var P = toPrimitive(V, true);
  var enumerable = nativePropertyIsEnumerable.call(this, P);
  if (this === ObjectPrototype && has(AllSymbols, P) && !has(ObjectPrototypeSymbols, P)) return false;
  return enumerable || !has(this, P) || !has(AllSymbols, P) || has(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;
};

var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
  var it = toIndexedObject(O);
  var key = toPrimitive(P, true);
  if (it === ObjectPrototype && has(AllSymbols, key) && !has(ObjectPrototypeSymbols, key)) return;
  var descriptor = nativeGetOwnPropertyDescriptor(it, key);
  if (descriptor && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) {
    descriptor.enumerable = true;
  }
  return descriptor;
};

var $getOwnPropertyNames = function getOwnPropertyNames(O) {
  var names = nativeGetOwnPropertyNames(toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (!has(AllSymbols, key) && !has(hiddenKeys, key)) result.push(key);
  });
  return result;
};

var $getOwnPropertySymbols = function getOwnPropertySymbols(O) {
  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (has(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || has(ObjectPrototype, key))) {
      result.push(AllSymbols[key]);
    }
  });
  return result;
};

// `Symbol` constructor
// https://tc39.github.io/ecma262/#sec-symbol-constructor
if (!NATIVE_SYMBOL) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor');
    var description = !arguments.length || arguments[0] === undefined ? undefined : String(arguments[0]);
    var tag = uid(description);
    var setter = function (value) {
      if (this === ObjectPrototype) setter.call(ObjectPrototypeSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
    };
    if (DESCRIPTORS && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, { configurable: true, set: setter });
    return wrap(tag, description);
  };

  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return getInternalState(this).tag;
  });

  redefine($Symbol, 'withoutSetter', function (description) {
    return wrap(uid(description), description);
  });

  propertyIsEnumerableModule.f = $propertyIsEnumerable;
  definePropertyModule.f = $defineProperty;
  getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;
  getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
  getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;

  wrappedWellKnownSymbolModule.f = function (name) {
    return wrap(wellKnownSymbol(name), name);
  };

  if (DESCRIPTORS) {
    // https://github.com/tc39/proposal-Symbol-description
    nativeDefineProperty($Symbol[PROTOTYPE], 'description', {
      configurable: true,
      get: function description() {
        return getInternalState(this).description;
      }
    });
    if (!IS_PURE) {
      redefine(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, { unsafe: true });
    }
  }
}

$({ global: true, wrap: true, forced: !NATIVE_SYMBOL, sham: !NATIVE_SYMBOL }, {
  Symbol: $Symbol
});

$forEach(objectKeys(WellKnownSymbolsStore), function (name) {
  defineWellKnownSymbol(name);
});

$({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL }, {
  // `Symbol.for` method
  // https://tc39.github.io/ecma262/#sec-symbol.for
  'for': function (key) {
    var string = String(key);
    if (has(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
    var symbol = $Symbol(string);
    StringToSymbolRegistry[string] = symbol;
    SymbolToStringRegistry[symbol] = string;
    return symbol;
  },
  // `Symbol.keyFor` method
  // https://tc39.github.io/ecma262/#sec-symbol.keyfor
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol');
    if (has(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
  },
  useSetter: function () { USE_SETTER = true; },
  useSimple: function () { USE_SETTER = false; }
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL, sham: !DESCRIPTORS }, {
  // `Object.create` method
  // https://tc39.github.io/ecma262/#sec-object.create
  create: $create,
  // `Object.defineProperty` method
  // https://tc39.github.io/ecma262/#sec-object.defineproperty
  defineProperty: $defineProperty,
  // `Object.defineProperties` method
  // https://tc39.github.io/ecma262/#sec-object.defineproperties
  defineProperties: $defineProperties,
  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL }, {
  // `Object.getOwnPropertyNames` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertynames
  getOwnPropertyNames: $getOwnPropertyNames,
  // `Object.getOwnPropertySymbols` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertysymbols
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
$({ target: 'Object', stat: true, forced: fails(function () { getOwnPropertySymbolsModule.f(1); }) }, {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return getOwnPropertySymbolsModule.f(toObject(it));
  }
});

// `JSON.stringify` method behavior with symbols
// https://tc39.github.io/ecma262/#sec-json.stringify
if ($stringify) {
  var FORCED_JSON_STRINGIFY = !NATIVE_SYMBOL || fails(function () {
    var symbol = $Symbol();
    // MS Edge converts symbol values to JSON as {}
    return $stringify([symbol]) != '[null]'
      // WebKit converts symbol values to JSON as null
      || $stringify({ a: symbol }) != '{}'
      // V8 throws on boxed symbols
      || $stringify(Object(symbol)) != '{}';
  });

  $({ target: 'JSON', stat: true, forced: FORCED_JSON_STRINGIFY }, {
    // eslint-disable-next-line no-unused-vars
    stringify: function stringify(it, replacer, space) {
      var args = [it];
      var index = 1;
      var $replacer;
      while (arguments.length > index) args.push(arguments[index++]);
      $replacer = replacer;
      if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
      if (!isArray(replacer)) replacer = function (key, value) {
        if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
        if (!isSymbol(value)) return value;
      };
      args[1] = replacer;
      return $stringify.apply(null, args);
    }
  });
}

// `Symbol.prototype[@@toPrimitive]` method
// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@toprimitive
if (!$Symbol[PROTOTYPE][TO_PRIMITIVE]) {
  createNonEnumerableProperty($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
}
// `Symbol.prototype[@@toStringTag]` property
// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@tostringtag
setToStringTag($Symbol, SYMBOL);

hiddenKeys[HIDDEN] = true;


/***/ }),
/* 164 */
/*!****************************************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/object-get-own-property-names-external.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ 14);
var nativeGetOwnPropertyNames = __webpack_require__(/*! ../internals/object-get-own-property-names */ 141).f;

var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return nativeGetOwnPropertyNames(it);
  } catch (error) {
    return windowNames.slice();
  }
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]'
    ? getWindowNames(it)
    : nativeGetOwnPropertyNames(toIndexedObject(it));
};


/***/ }),
/* 165 */
/*!***************************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/well-known-symbol-wrapped.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ 36);

exports.f = wellKnownSymbol;


/***/ }),
/* 166 */
/*!**************************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/define-well-known-symbol.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(/*! ../internals/path */ 24);
var has = __webpack_require__(/*! ../internals/has */ 20);
var wrappedWellKnownSymbolModule = __webpack_require__(/*! ../internals/well-known-symbol-wrapped */ 165);
var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ 28).f;

module.exports = function (NAME) {
  var Symbol = path.Symbol || (path.Symbol = {});
  if (!has(Symbol, NAME)) defineProperty(Symbol, NAME, {
    value: wrappedWellKnownSymbolModule.f(NAME)
  });
};


/***/ }),
/* 167 */
/*!****************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/core-js-stable/object/keys.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js-pure/stable/object/keys */ 168);

/***/ }),
/* 168 */
/*!**********************************************************!*\
  !*** ../node_modules/core-js-pure/stable/object/keys.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(/*! ../../es/object/keys */ 169);

module.exports = parent;


/***/ }),
/* 169 */
/*!******************************************************!*\
  !*** ../node_modules/core-js-pure/es/object/keys.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es.object.keys */ 170);
var path = __webpack_require__(/*! ../../internals/path */ 24);

module.exports = path.Object.keys;


/***/ }),
/* 170 */
/*!**************************************************************!*\
  !*** ../node_modules/core-js-pure/modules/es.object.keys.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ 7);
var toObject = __webpack_require__(/*! ../internals/to-object */ 31);
var nativeKeys = __webpack_require__(/*! ../internals/object-keys */ 81);
var fails = __webpack_require__(/*! ../internals/fails */ 11);

var FAILS_ON_PRIMITIVES = fails(function () { nativeKeys(1); });

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
  keys: function keys(it) {
    return nativeKeys(toObject(it));
  }
});


/***/ }),
/* 171 */
/*!*****************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js-pure/stable/instance/map */ 172);

/***/ }),
/* 172 */
/*!***********************************************************!*\
  !*** ../node_modules/core-js-pure/stable/instance/map.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(/*! ../../es/instance/map */ 173);

module.exports = parent;


/***/ }),
/* 173 */
/*!*******************************************************!*\
  !*** ../node_modules/core-js-pure/es/instance/map.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = __webpack_require__(/*! ../array/virtual/map */ 174);

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.map;
  return it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.map) ? map : own;
};


/***/ }),
/* 174 */
/*!************************************************************!*\
  !*** ../node_modules/core-js-pure/es/array/virtual/map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../../modules/es.array.map */ 175);
var entryVirtual = __webpack_require__(/*! ../../../internals/entry-virtual */ 48);

module.exports = entryVirtual('Array').map;


/***/ }),
/* 175 */
/*!************************************************************!*\
  !*** ../node_modules/core-js-pure/modules/es.array.map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ 7);
var $map = __webpack_require__(/*! ../internals/array-iteration */ 149).map;
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ 44);
var arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ 57);

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');
// FF49- issue
var USES_TO_LENGTH = arrayMethodUsesToLength('map');

// `Array.prototype.map` method
// https://tc39.github.io/ecma262/#sec-array.prototype.map
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),
/* 176 */
/*!************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/helpers/defineProperty.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ 177);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _Object$defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),
/* 177 */
/*!********************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/core-js/object/define-property.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js-pure/features/object/define-property */ 178);

/***/ }),
/* 178 */
/*!***********************************************************************!*\
  !*** ../node_modules/core-js-pure/features/object/define-property.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(/*! ../../es/object/define-property */ 130);

module.exports = parent;


/***/ }),
/* 179 */
/*!***********************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/core-js-stable/instance/ends-with.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js-pure/stable/instance/ends-with */ 180);

/***/ }),
/* 180 */
/*!*****************************************************************!*\
  !*** ../node_modules/core-js-pure/stable/instance/ends-with.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(/*! ../../es/instance/ends-with */ 181);

module.exports = parent;


/***/ }),
/* 181 */
/*!*************************************************************!*\
  !*** ../node_modules/core-js-pure/es/instance/ends-with.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var endsWith = __webpack_require__(/*! ../string/virtual/ends-with */ 182);

var StringPrototype = String.prototype;

module.exports = function (it) {
  var own = it.endsWith;
  return typeof it === 'string' || it === StringPrototype
    || (it instanceof String && own === StringPrototype.endsWith) ? endsWith : own;
};


/***/ }),
/* 182 */
/*!*******************************************************************!*\
  !*** ../node_modules/core-js-pure/es/string/virtual/ends-with.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../../modules/es.string.ends-with */ 183);
var entryVirtual = __webpack_require__(/*! ../../../internals/entry-virtual */ 48);

module.exports = entryVirtual('String').endsWith;


/***/ }),
/* 183 */
/*!*******************************************************************!*\
  !*** ../node_modules/core-js-pure/modules/es.string.ends-with.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ 7);
var getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ 9).f;
var toLength = __webpack_require__(/*! ../internals/to-length */ 32);
var notARegExp = __webpack_require__(/*! ../internals/not-a-regexp */ 60);
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ 17);
var correctIsRegExpLogic = __webpack_require__(/*! ../internals/correct-is-regexp-logic */ 62);
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ 38);

var nativeEndsWith = ''.endsWith;
var min = Math.min;

var CORRECT_IS_REGEXP_LOGIC = correctIsRegExpLogic('endsWith');
// https://github.com/zloirock/core-js/pull/702
var MDN_POLYFILL_BUG = !IS_PURE && !CORRECT_IS_REGEXP_LOGIC && !!function () {
  var descriptor = getOwnPropertyDescriptor(String.prototype, 'endsWith');
  return descriptor && !descriptor.writable;
}();

// `String.prototype.endsWith` method
// https://tc39.github.io/ecma262/#sec-string.prototype.endswith
$({ target: 'String', proto: true, forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC }, {
  endsWith: function endsWith(searchString /* , endPosition = @length */) {
    var that = String(requireObjectCoercible(this));
    notARegExp(searchString);
    var endPosition = arguments.length > 1 ? arguments[1] : undefined;
    var len = toLength(that.length);
    var end = endPosition === undefined ? len : min(toLength(endPosition), len);
    var search = String(searchString);
    return nativeEndsWith
      ? nativeEndsWith.call(that, search, end)
      : that.slice(end - search.length, end) === search;
  }
});


/***/ }),
/* 184 */
/*!********************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/core-js-stable/instance/reduce.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js-pure/stable/instance/reduce */ 185);

/***/ }),
/* 185 */
/*!**************************************************************!*\
  !*** ../node_modules/core-js-pure/stable/instance/reduce.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(/*! ../../es/instance/reduce */ 186);

module.exports = parent;


/***/ }),
/* 186 */
/*!**********************************************************!*\
  !*** ../node_modules/core-js-pure/es/instance/reduce.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var reduce = __webpack_require__(/*! ../array/virtual/reduce */ 187);

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.reduce;
  return it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.reduce) ? reduce : own;
};


/***/ }),
/* 187 */
/*!***************************************************************!*\
  !*** ../node_modules/core-js-pure/es/array/virtual/reduce.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../../modules/es.array.reduce */ 188);
var entryVirtual = __webpack_require__(/*! ../../../internals/entry-virtual */ 48);

module.exports = entryVirtual('Array').reduce;


/***/ }),
/* 188 */
/*!***************************************************************!*\
  !*** ../node_modules/core-js-pure/modules/es.array.reduce.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ 7);
var $reduce = __webpack_require__(/*! ../internals/array-reduce */ 189).left;
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ 150);
var arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ 57);

var STRICT_METHOD = arrayMethodIsStrict('reduce');
var USES_TO_LENGTH = arrayMethodUsesToLength('reduce', { 1: 0 });

// `Array.prototype.reduce` method
// https://tc39.github.io/ecma262/#sec-array.prototype.reduce
$({ target: 'Array', proto: true, forced: !STRICT_METHOD || !USES_TO_LENGTH }, {
  reduce: function reduce(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),
/* 189 */
/*!**************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/array-reduce.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__(/*! ../internals/a-function */ 26);
var toObject = __webpack_require__(/*! ../internals/to-object */ 31);
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ 15);
var toLength = __webpack_require__(/*! ../internals/to-length */ 32);

// `Array.prototype.{ reduce, reduceRight }` methods implementation
var createMethod = function (IS_RIGHT) {
  return function (that, callbackfn, argumentsLength, memo) {
    aFunction(callbackfn);
    var O = toObject(that);
    var self = IndexedObject(O);
    var length = toLength(O.length);
    var index = IS_RIGHT ? length - 1 : 0;
    var i = IS_RIGHT ? -1 : 1;
    if (argumentsLength < 2) while (true) {
      if (index in self) {
        memo = self[index];
        index += i;
        break;
      }
      index += i;
      if (IS_RIGHT ? index < 0 : length <= index) {
        throw TypeError('Reduce of empty array with no initial value');
      }
    }
    for (;IS_RIGHT ? index >= 0 : length > index; index += i) if (index in self) {
      memo = callbackfn(memo, self[index], index, O);
    }
    return memo;
  };
};

module.exports = {
  // `Array.prototype.reduce` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.reduce
  left: createMethod(false),
  // `Array.prototype.reduceRight` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.reduceright
  right: createMethod(true)
};


/***/ }),
/* 190 */
/*!*********************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/helpers/objectWithoutProperties.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _indexOfInstanceProperty = __webpack_require__(/*! ../core-js/instance/index-of */ 191);

var _Object$getOwnPropertySymbols = __webpack_require__(/*! ../core-js/object/get-own-property-symbols */ 196);

var objectWithoutPropertiesLoose = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ 198);

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (_Object$getOwnPropertySymbols) {
    var sourceSymbolKeys = _Object$getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (_indexOfInstanceProperty(excluded).call(excluded, key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

module.exports = _objectWithoutProperties;

/***/ }),
/* 191 */
/*!***************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/core-js/instance/index-of.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js-pure/features/instance/index-of */ 192);

/***/ }),
/* 192 */
/*!******************************************************************!*\
  !*** ../node_modules/core-js-pure/features/instance/index-of.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(/*! ../../es/instance/index-of */ 193);

module.exports = parent;


/***/ }),
/* 193 */
/*!************************************************************!*\
  !*** ../node_modules/core-js-pure/es/instance/index-of.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var indexOf = __webpack_require__(/*! ../array/virtual/index-of */ 194);

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.indexOf;
  return it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.indexOf) ? indexOf : own;
};


/***/ }),
/* 194 */
/*!*****************************************************************!*\
  !*** ../node_modules/core-js-pure/es/array/virtual/index-of.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../../modules/es.array.index-of */ 195);
var entryVirtual = __webpack_require__(/*! ../../../internals/entry-virtual */ 48);

module.exports = entryVirtual('Array').indexOf;


/***/ }),
/* 195 */
/*!*****************************************************************!*\
  !*** ../node_modules/core-js-pure/modules/es.array.index-of.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ 7);
var $indexOf = __webpack_require__(/*! ../internals/array-includes */ 54).indexOf;
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ 150);
var arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ 57);

var nativeIndexOf = [].indexOf;

var NEGATIVE_ZERO = !!nativeIndexOf && 1 / [1].indexOf(1, -0) < 0;
var STRICT_METHOD = arrayMethodIsStrict('indexOf');
var USES_TO_LENGTH = arrayMethodUsesToLength('indexOf', { ACCESSORS: true, 1: 0 });

// `Array.prototype.indexOf` method
// https://tc39.github.io/ecma262/#sec-array.prototype.indexof
$({ target: 'Array', proto: true, forced: NEGATIVE_ZERO || !STRICT_METHOD || !USES_TO_LENGTH }, {
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? nativeIndexOf.apply(this, arguments) || 0
      : $indexOf(this, searchElement, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),
/* 196 */
/*!*****************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/core-js/object/get-own-property-symbols.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js-pure/features/object/get-own-property-symbols */ 197);

/***/ }),
/* 197 */
/*!********************************************************************************!*\
  !*** ../node_modules/core-js-pure/features/object/get-own-property-symbols.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(/*! ../../es/object/get-own-property-symbols */ 162);

module.exports = parent;


/***/ }),
/* 198 */
/*!**************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/helpers/objectWithoutPropertiesLoose.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _indexOfInstanceProperty = __webpack_require__(/*! ../core-js/instance/index-of */ 191);

var _Object$keys = __webpack_require__(/*! ../core-js/object/keys */ 199);

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};

  var sourceKeys = _Object$keys(source);

  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (_indexOfInstanceProperty(excluded).call(excluded, key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),
/* 199 */
/*!*********************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/core-js/object/keys.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js-pure/features/object/keys */ 200);

/***/ }),
/* 200 */
/*!************************************************************!*\
  !*** ../node_modules/core-js-pure/features/object/keys.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(/*! ../../es/object/keys */ 169);

module.exports = parent;


/***/ }),
/* 201 */
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 202 */
/*!******************************!*\
  !*** ./app/config/routes.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var app_components_App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/components/App */ 203);
/* harmony import */ var app_screens_Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/screens/Home */ 215);
/* harmony import */ var app_screens_About__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/screens/About */ 255);
/* harmony import */ var app_screens_Works__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/screens/Works */ 258);
/* harmony import */ var app_screens_Blog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/screens/Blog */ 271);
/* harmony import */ var app_screens_Contact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/screens/Contact */ 280);
/* harmony import */ var app_screens_NotFound__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/screens/NotFound */ 282);







/* harmony default export */ __webpack_exports__["default"] = ({
  path: '/',
  component: app_components_App__WEBPACK_IMPORTED_MODULE_0__["default"],
  indexRoute: app_screens_Home__WEBPACK_IMPORTED_MODULE_1__["default"],
  childRoutes: [app_screens_About__WEBPACK_IMPORTED_MODULE_2__["default"], app_screens_Works__WEBPACK_IMPORTED_MODULE_3__["default"], app_screens_Blog__WEBPACK_IMPORTED_MODULE_4__["default"], app_screens_Contact__WEBPACK_IMPORTED_MODULE_5__["default"], app_screens_NotFound__WEBPACK_IMPORTED_MODULE_6__["default"]]
});

/***/ }),
/* 203 */
/*!*******************************!*\
  !*** ./app/components/App.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 116);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ 122);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ 201);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_AppLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/AppLayout */ 204);





function matchRoute(url, urlPattern) {
  return !!Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["matchPath"])(url, {
    path: urlPattern,
    exact: true
  });
}

function App({
  location,
  children
}) {
  const {
    pathname
  } = location;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    document.getElementsByClassName('c-app-layout__wrapper')[0].scrollIntoView();
  }, [pathname]);
  let headerProps;

  if (matchRoute(pathname, '/')) {
    headerProps = {
      isFixed: true,
      isHome: true
    };
  } else if (matchRoute(pathname, '/works/:fileName')) {
    headerProps = {
      isFixed: true
    };
  } else if (matchRoute(pathname, '/works') || matchRoute(pathname, '/contact') || matchRoute(pathname, '/about')) {
    headerProps = {};
  } else if (matchRoute(location.pathname, '*')) {
    headerProps = {
      isFixed: true
    };
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_AppLayout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    headerProps: headerProps
  }, children);
}

App.propTypes = {
  // eslint-disable-next-line
  location: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any,
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.element
};
/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),
/* 204 */
/*!********************************************!*\
  !*** ./app/shared/components/AppLayout.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 116);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ 201);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SiteHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SiteHeader */ 205);
/* harmony import */ var _SiteFooter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SiteFooter */ 214);





function AppLayout({
  hasHeader = true,
  headerProps = {},
  hasFooter = true,
  children
}) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-app-layout"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-app-layout__wrapper"
  }, hasHeader ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SiteHeader__WEBPACK_IMPORTED_MODULE_2__["default"], headerProps) : null, children, hasFooter ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SiteFooter__WEBPACK_IMPORTED_MODULE_3__["default"], null) : null));
}

AppLayout.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  hasHeader: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  hasFooter: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  headerProps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object // eslint-disable-line

};
/* harmony default export */ __webpack_exports__["default"] = (AppLayout);

/***/ }),
/* 205 */
/*!*********************************************!*\
  !*** ./app/shared/components/SiteHeader.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/defineProperty */ 176);
/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ 116);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ 201);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ 122);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_SiteHeaderLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/SiteHeaderLink */ 206);
/* harmony import */ var _Hamburger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Hamburger */ 207);







class SiteHeader extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(...args) {
    super(...args);

    _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "state", {
      isNavOpen: false
    });

    _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "_toggleNav", () => {
      const {
        isNavOpen
      } = this.state;
      this.setState({
        isNavOpen: !isNavOpen
      });
    });

    _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "_closeNav", () => {
      this.setState({
        isNavOpen: false
      });
    });
  }

  shouldComponentUpdate({
    isFixed,
    isHome
  }, {
    isNavOpen
  }) {
    if (this.props.isFixed !== isFixed || this.state.isNavOpen !== isNavOpen || this.props.isHome !== isHome) {
      return true;
    }

    return false;
  }

  render() {
    const {
      isFixed,
      isHome
    } = this.props;
    const {
      isNavOpen
    } = this.state;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", {
      className: "o-wrapper c-site-header ".concat(isFixed ? 'is-fixed' : '')
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "c-site-header__title"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
      className: "",
      to: "/"
    }, "Gean ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), " Marroquin")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
      className: "o-dialog c-site-nav ".concat(isNavOpen ? 'is-open' : '')
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
      className: "o-dialog__wrapper"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["NavLink"], {
      className: "o-btn c-site-nav__link",
      to: "/about",
      onClick: this._closeNav,
      activeClassName: "is-active"
    }, "Sobre mi")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_SiteHeaderLink__WEBPACK_IMPORTED_MODULE_4__["default"], {
      title: "Portafolio",
      isHome: isHome,
      props: isHome ? {
        href: '#works'
      } : {
        to: '/works',
        onClick: this._closeNav,
        activeClassName: 'is-active'
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_SiteHeaderLink__WEBPACK_IMPORTED_MODULE_4__["default"], {
      title: "Contacto",
      isHome: isHome,
      props: isHome ? {
        href: '#contact'
      } : {
        to: '/contact',
        onClick: this._closeNav,
        activeClassName: 'is-active'
      }
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Hamburger__WEBPACK_IMPORTED_MODULE_5__["default"], {
      className: "c-site-header__btn-toggle ".concat(isNavOpen ? 'is-active' : '', " u-hide@laptop"),
      onClick: this._toggleNav,
      isOpen: isNavOpen
    }));
  }

}

_babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(SiteHeader, "propTypes", {
  isFixed: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  isHome: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool
});

_babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(SiteHeader, "defaultProps", {
  isHome: false
});

/* harmony default export */ __webpack_exports__["default"] = (SiteHeader);

/***/ }),
/* 206 */
/*!*************************************************!*\
  !*** ./app/shared/components/SiteHeaderLink.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ 128);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-properties */ 132);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors */ 136);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/for-each */ 143);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor */ 151);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/filter */ 155);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols */ 160);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/keys */ 167);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/defineProperty */ 176);
/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ 116);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ 201);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-router-dom */ 122);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_11__);










function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_7___default()(object); if (_babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_6___default.a) { var symbols = _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_6___default()(object); if (enumerableOnly) symbols = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_5___default()(symbols).call(symbols, function (sym) { return _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context; _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_3___default()(_context = ownKeys(Object(source), true)).call(_context, function (key) { _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(target, key, source[key]); }); } else if (_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { var _context2; _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_3___default()(_context2 = ownKeys(Object(source))).call(_context2, function (key) { _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4___default()(source, key)); }); } } return target; }





function SiteHeaderLink({
  isHome,
  title,
  props
}) {
  return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(isHome ? 'a' : react_router_dom__WEBPACK_IMPORTED_MODULE_11__["NavLink"], _objectSpread({
    className: 'o-btn c-site-nav__link'
  }, props), title);
}

SiteHeaderLink.propTypes = {
  isHome: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.bool.isRequired,
  title: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string.isRequired,
  props: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.object // eslint-disable-line

};
/* harmony default export */ __webpack_exports__["default"] = (SiteHeaderLink);

/***/ }),
/* 207 */
/*!********************************************!*\
  !*** ./app/shared/components/Hamburger.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/extends */ 208);
/* harmony import */ var _babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/objectWithoutProperties */ 190);
/* harmony import */ var _babel_runtime_corejs3_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ 116);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ 201);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);





function Hamburger(_ref) {
  let {
    className,
    isOpen
  } = _ref,
      restProps = _babel_runtime_corejs3_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref, ["className", "isOpen"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", _babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, restProps, {
    className: "o-btn ".concat(className),
    "aria-label": isOpen ? 'Esconder navegación' : 'Mostrar navegación',
    type: "button"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "c-hamburger ".concat(isOpen ? 'is-open' : '')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("em", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("em", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("em", null)));
}

Hamburger.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  isOpen: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (Hamburger);

/***/ }),
/* 208 */
/*!*****************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/helpers/extends.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ 209);

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),
/* 209 */
/*!***********************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/core-js/object/assign.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js-pure/features/object/assign */ 210);

/***/ }),
/* 210 */
/*!**************************************************************!*\
  !*** ../node_modules/core-js-pure/features/object/assign.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(/*! ../../es/object/assign */ 211);

module.exports = parent;


/***/ }),
/* 211 */
/*!********************************************************!*\
  !*** ../node_modules/core-js-pure/es/object/assign.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es.object.assign */ 212);
var path = __webpack_require__(/*! ../../internals/path */ 24);

module.exports = path.Object.assign;


/***/ }),
/* 212 */
/*!****************************************************************!*\
  !*** ../node_modules/core-js-pure/modules/es.object.assign.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ 7);
var assign = __webpack_require__(/*! ../internals/object-assign */ 213);

// `Object.assign` method
// https://tc39.github.io/ecma262/#sec-object.assign
$({ target: 'Object', stat: true, forced: Object.assign !== assign }, {
  assign: assign
});


/***/ }),
/* 213 */
/*!***************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/object-assign.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ 10);
var fails = __webpack_require__(/*! ../internals/fails */ 11);
var objectKeys = __webpack_require__(/*! ../internals/object-keys */ 81);
var getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ 142);
var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ 12);
var toObject = __webpack_require__(/*! ../internals/to-object */ 31);
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ 15);

var nativeAssign = Object.assign;
var defineProperty = Object.defineProperty;

// `Object.assign` method
// https://tc39.github.io/ecma262/#sec-object.assign
module.exports = !nativeAssign || fails(function () {
  // should have correct order of operations (Edge bug)
  if (DESCRIPTORS && nativeAssign({ b: 1 }, nativeAssign(defineProperty({}, 'a', {
    enumerable: true,
    get: function () {
      defineProperty(this, 'b', {
        value: 3,
        enumerable: false
      });
    }
  }), { b: 2 })).b !== 1) return true;
  // should work with symbols and should have deterministic property order (V8 bug)
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var symbol = Symbol();
  var alphabet = 'abcdefghijklmnopqrst';
  A[symbol] = 7;
  alphabet.split('').forEach(function (chr) { B[chr] = chr; });
  return nativeAssign({}, A)[symbol] != 7 || objectKeys(nativeAssign({}, B)).join('') != alphabet;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var argumentsLength = arguments.length;
  var index = 1;
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  var propertyIsEnumerable = propertyIsEnumerableModule.f;
  while (argumentsLength > index) {
    var S = IndexedObject(arguments[index++]);
    var keys = getOwnPropertySymbols ? objectKeys(S).concat(getOwnPropertySymbols(S)) : objectKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || propertyIsEnumerable.call(S, key)) T[key] = S[key];
    }
  } return T;
} : nativeAssign;


/***/ }),
/* 214 */
/*!*********************************************!*\
  !*** ./app/shared/components/SiteFooter.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 116);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function SiteFooter() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
    className: "o-wrapper u-py3 u-mt-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "u-center u-m0 u-muted u-fz-xs"
  }, "Dise\xF1ado con ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "u-fz-xl"
  }, "\u2665"), " por", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://site.uplabs.com/alisaayeed",
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Ali Sayed"))));
}

/* harmony default export */ __webpack_exports__["default"] = (SiteFooter);

/***/ }),
/* 215 */
/*!***********************************!*\
  !*** ./app/screens/Home/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// import {lazy} from 'react'
// import topBar from 'utils/topBar'
/* harmony default export */ __webpack_exports__["default"] = ({
  component: __webpack_require__(/*! ./components/HomeScreen */ 216).default,
  // component: lazy(async () => {
  //   topBar.show()
  //   const component = await import('./components/HomeScreen')
  //   topBar.hide()
  //   return component
  // }),
  // getComponent(nextState, cb) {
  //   topBar.show()
  //   require.ensure(
  //     [],
  //     require => {
  //       topBar.hide()
  //       cb(null, require('./components/HomeScreen').default) // eslint-disable-line
  //     },
  //     'HomeScreen',
  //   )
  // },
  layoutProps: {
    headerProps: {
      isFixed: true,
      isHome: true
    }
  },
  exact: true
});

/***/ }),
/* 216 */
/*!***************************************************!*\
  !*** ./app/screens/Home/components/HomeScreen.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 116);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var app_config_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/config/data */ 217);
/* harmony import */ var components_ScreenHelmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/ScreenHelmet */ 218);
/* harmony import */ var components_SiteContact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/SiteContact */ 219);
/* harmony import */ var components_Works__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/Works */ 221);




 // import Posts from 'components/Posts'

function HomeScreen() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
    className: "c-home-screen"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_ScreenHelmet__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: app_config_data__WEBPACK_IMPORTED_MODULE_1__["default"].screens.home.title,
    description: app_config_data__WEBPACK_IMPORTED_MODULE_1__["default"].screens.home.description,
    canonicalHref: app_config_data__WEBPACK_IMPORTED_MODULE_1__["default"].screens.home.canonicalHref
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-home-screen__hero"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "o-wrapper u-relative"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-home-screen__hero-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "u-caps"
  }, "Hola!, soy Gean"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, app_config_data__WEBPACK_IMPORTED_MODULE_1__["default"].about), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "o-btn c-btn c-btn--secondary u-mr3 u-my2",
    href: "#contact"
  }, "Cont\xE1ctame"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "o-btn c-btn c-btn--secondary c-btn--ghost u-white u-my2",
    href: "#works"
  }, "Ver portafolio")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Works__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "u-py5",
    id: "works"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_SiteContact__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "u-py5",
    id: "contact"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (HomeScreen);

/***/ }),
/* 217 */
/*!****************************!*\
  !*** ./app/config/data.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const BASE_URL = 'https://geanmarroquin.com';
const TITLE = 'Gean Marroquin';
const ABOUT = 'Soy un apasionado Front-end developer, autodidacta, de esos que gustan aprender y usar con las últimas tendencias/tecnologías web.';
/* harmony default export */ __webpack_exports__["default"] = ({
  baseUrl: BASE_URL,
  title: TITLE,
  email: 'gean.marroquin@gmail.com',
  about: ABOUT,
  twitterUser: 'geanmarroquin',
  screens: {
    about: {
      title: "".concat(TITLE, " | Front-end developer"),
      description: ABOUT,
      canonicalHref: "".concat(BASE_URL, "/about")
    },
    blog: {
      title: "".concat(TITLE, " | Art\xEDculos y tutoriales"),
      description: "Blog de ".concat(TITLE, ". Front-end developer, especialista en CSS y JavaScript."),
      canonicalHref: "".concat(BASE_URL, "/blog")
    },
    contact: {
      title: "".concat(TITLE, " | Front-end developer"),
      description: ABOUT,
      canonicalHref: "".concat(BASE_URL, "/contact")
    },
    home: {
      title: "".concat(TITLE, " | Front-end developer"),
      description: ABOUT,
      canonicalHref: BASE_URL
    },
    notFound: {
      title: '404'
    },
    works: {
      title: "".concat(TITLE, " | Portafolio"),
      description: "Portafolio de ".concat(TITLE, ". Front-end developer, especialista en CSS y JavaScript."),
      canonicalHref: "".concat(BASE_URL, "/works")
    }
  }
});

/***/ }),
/* 218 */
/*!***********************************************!*\
  !*** ./app/shared/components/ScreenHelmet.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 116);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ 201);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ 126);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_2__);




function ScreenHelmet({
  title,
  description = '',
  canonicalHref
}) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_2___default.a, {
    title: title,
    meta: [{
      name: 'description',
      content: description
    }, {
      property: 'og:title',
      content: title
    }, {
      property: 'og:description',
      content: description
    }],
    link: [{
      rel: 'canonical',
      href: canonicalHref
    }]
  });
}

ScreenHelmet.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  description: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  canonicalHref: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ScreenHelmet);

/***/ }),
/* 219 */
/*!**********************************************!*\
  !*** ./app/shared/components/SiteContact.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 116);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ 201);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var app_config_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/config/data */ 217);
/* harmony import */ var components_ExternalLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/ExternalLink */ 220);





function SiteContact({
  className,
  id
}) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "o-wrapper u-center ".concat(className),
    id: id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "u-mb3 u-caps"
  }, "Cont\xE1ctame"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "u-mb4 u-fz-sm u-muted"
  }, "Env\xEDame un mensaje para trabajar juntos."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "u-mb5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "o-btn c-btn c-btn--primary",
    href: "mailto:".concat(app_config_data__WEBPACK_IMPORTED_MODULE_2__["default"].email)
  }, "Enviar mensaje")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "u-m0 u-fz-sm u-muted"
  }, "Y encuentrame en:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "u-list-reset u-fz-h00 u-m0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "u-inline-block u-p3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_ExternalLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "u-block",
    href: "https://github.com/wochap",
    title: "Github"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "u-icon u-block"
  }, "github"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "u-inline-block u-p3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_ExternalLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "u-block u-color-npm",
    href: "https://www.npmjs.com/~wochap",
    title: "NPM"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "u-icon u-block"
  }, "npm"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "u-inline-block u-p3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_ExternalLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "u-block u-color-freecodecamp",
    href: "https://www.freecodecamp.com/wochap",
    title: "Free code camp"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "u-icon u-block"
  }, "freecodecamp"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "u-inline-block u-p3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_ExternalLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "u-block",
    href: "http://codepen.io/wochap",
    title: "Codepen"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "u-icon u-block"
  }, "codepen"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "u-inline-block u-p3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_ExternalLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "u-block u-color-twitter",
    href: "https://twitter.com/".concat(app_config_data__WEBPACK_IMPORTED_MODULE_2__["default"].twitterUser),
    title: "Twitter"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "u-icon u-block"
  }, "twitter")))));
}

SiteContact.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (SiteContact);

/***/ }),
/* 220 */
/*!***********************************************!*\
  !*** ./app/shared/components/ExternalLink.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 116);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ 201);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



function ExternalLink({
  href,
  title,
  children,
  className
}) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: className,
    href: href,
    title: title,
    target: "_blank",
    rel: "noopener noreferrer"
  }, children || title);
}

ExternalLink.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  href: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node
};
/* harmony default export */ __webpack_exports__["default"] = (ExternalLink);

/***/ }),
/* 221 */
/*!****************************************!*\
  !*** ./app/shared/components/Works.js ***!
  \****************************************/
/*! exports provided: WorksComponent, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorksComponent", function() { return WorksComponent; });
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ 171);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ 116);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ 201);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var hoc_collection_PropTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! hoc/collection/PropTypes */ 222);
/* harmony import */ var PropTypes_article__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! PropTypes/article */ 223);
/* harmony import */ var hoc_collection_withCollection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! hoc/collection/withCollection */ 224);
/* harmony import */ var components_ShimmerText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/ShimmerText */ 250);
/* harmony import */ var components_SiteError__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/SiteError */ 252);
/* harmony import */ var _WorksList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./WorksList */ 253);









function WorksComponent({
  collectionState,
  collection,
  className,
  id
}) {
  let body;

  if (collectionState.error) {
    body = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_SiteError__WEBPACK_IMPORTED_MODULE_7__["default"], {
      title: "Ups",
      message: collectionState.error
    });
  } else if (collectionState.isPending) {
    var _context;

    body = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_ShimmerText__WEBPACK_IMPORTED_MODULE_6__["default"], {
      block: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
      className: "o-grid o-grid--gutter-3 u-list-reset"
    }, _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default()(_context = [...new Array(3)]).call(_context, (_, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: "o-grid__item u-12/12 u-6/12@tablet u-4/12@laptop",
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "c-work u-relative u-overflow-hidden"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "u-absolute u-left-0 u-top-0",
      style: {
        fontSize: '20rem'
      },
      "aria-label": "Cargando"
    }, "\u2588\u2588"))))));
  } else {
    body = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_WorksList__WEBPACK_IMPORTED_MODULE_8__["default"], {
      works: collection
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: "o-wrapper ".concat(className),
    id: id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "u-mb3 u-caps u-center"
  }, "Portafolio"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "u-mb5 u-fz-sm u-center u-muted"
  }, "Proyectos personales, freelance y como colaborador Front-End"), body);
}
WorksComponent.propTypes = {
  collectionState: hoc_collection_PropTypes__WEBPACK_IMPORTED_MODULE_3__["stateShape"],
  collection: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(PropTypes_article__WEBPACK_IMPORTED_MODULE_4__["articleShape"]).isRequired,
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  id: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
};
const Works = Object(hoc_collection_withCollection__WEBPACK_IMPORTED_MODULE_5__["default"])(WorksComponent, 'works');
/* harmony default export */ __webpack_exports__["default"] = (Works);

/***/ }),
/* 222 */
/*!************************************************!*\
  !*** ./app/shared/hoc/collection/PropTypes.js ***!
  \************************************************/
/*! exports provided: itemShape, collectionShape, stateShape */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "itemShape", function() { return itemShape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "collectionShape", function() { return collectionShape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stateShape", function() { return stateShape; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ 201);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);

const itemShape = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  frontMatter: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
    fileName: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired
  }),
  bodyHtml: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
});
const collectionShape = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  frontMatter: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
    fileName: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired
  }).isRequired
}).isRequired).isRequired;
const stateShape = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  isPending: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired,
  isFulfilled: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired,
  error: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired])
}).isRequired;

/***/ }),
/* 223 */
/*!*****************************************!*\
  !*** ./app/shared/PropTypes/article.js ***!
  \*****************************************/
/*! exports provided: frontMatterShape, articleShape */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "frontMatterShape", function() { return frontMatterShape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "articleShape", function() { return articleShape; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ 201);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);

const frontMatterShape = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  date: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  formattedDate: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  imageUrl: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  heroImageUrl: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  title: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  tasks: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  role: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  siteLink: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  fileName: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  description: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  tags: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string)
});
const articleShape = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  frontMatter: frontMatterShape,
  bodyHtml: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
});

/***/ }),
/* 224 */
/*!*****************************************************!*\
  !*** ./app/shared/hoc/collection/withCollection.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/defineProperty */ 176);
/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ 116);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ 201);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var recompose_getDisplayName__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! recompose/getDisplayName */ 225);
/* harmony import */ var recompose_getDisplayName__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(recompose_getDisplayName__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ 125);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var hoc_collection_PropTypes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! hoc/collection/PropTypes */ 222);
/* harmony import */ var app_selectors_collections__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/selectors/collections */ 226);
/* harmony import */ var app_actions_collections__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/actions/collections */ 232);









function withCollection(WrappedComponent, collectionName) {
  class CollectionHOC extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
    componentDidMount() {
      const {
        collectionState,
        fetchCollection
      } = this.props;

      if (!collectionState.isFulfilled) {
        fetchCollection();
      }
    }

    render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(WrappedComponent, this.props);
    }

  }

  _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(CollectionHOC, "displayName", "CollectionHOC(".concat(recompose_getDisplayName__WEBPACK_IMPORTED_MODULE_3___default()(WrappedComponent), ")"));

  _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(CollectionHOC, "propTypes", {
    fetchCollection: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
    collectionState: hoc_collection_PropTypes__WEBPACK_IMPORTED_MODULE_5__["stateShape"],
    collection: hoc_collection_PropTypes__WEBPACK_IMPORTED_MODULE_5__["collectionShape"] // eslint-disable-line

  });

  function mapStateToProps(state) {
    return {
      collection: Object(app_selectors_collections__WEBPACK_IMPORTED_MODULE_6__["getCollection"])(state, collectionName),
      collectionState: Object(app_selectors_collections__WEBPACK_IMPORTED_MODULE_6__["getCollectionState"])(state, collectionName)
    };
  }

  function mapDispatchToProps(dispatch) {
    return {
      fetchCollection: () => dispatch(Object(app_actions_collections__WEBPACK_IMPORTED_MODULE_7__["loadCollection"])(collectionName))
    };
  }

  return Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps, mapDispatchToProps)(CollectionHOC);
}

/* harmony default export */ __webpack_exports__["default"] = (withCollection);

/***/ }),
/* 225 */
/*!***************************************************!*\
  !*** ../node_modules/recompose/getDisplayName.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var getDisplayName = function getDisplayName(Component) {
  if (typeof Component === 'string') {
    return Component;
  }

  if (!Component) {
    return undefined;
  }

  return Component.displayName || Component.name || 'Component';
};

exports.default = getDisplayName;

/***/ }),
/* 226 */
/*!**************************************!*\
  !*** ./app/selectors/collections.js ***!
  \**************************************/
/*! exports provided: getItem, getItemState, getCollection, getCollectionState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getItem", function() { return getItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getItemState", function() { return getItemState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCollection", function() { return getCollection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCollectionState", function() { return getCollectionState; });
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_values__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/values */ 227);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_values__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_values__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ 171);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/concat */ 2);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_2__);



const ERROR_NAMESPACE = '(selectors)[collections]';
/**
 * COLLECTION ITEM SELECTORS
 */

function sharedItemValidations(functionName, collectionName, fileName) {
  if (!collectionName) {
    var _context;

    throw new Error(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_2___default()(_context = "".concat(ERROR_NAMESPACE, " ")).call(_context, functionName, ": 'collectionName' is required."));
  }

  if (!fileName) {
    var _context2;

    throw new Error(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_2___default()(_context2 = "".concat(ERROR_NAMESPACE, " ")).call(_context2, functionName, ": 'fileName' is required."));
  }
}

function getItem({
  collections
}, collectionName, fileName) {
  sharedItemValidations('getItem', collectionName, fileName);

  try {
    return collections[collectionName].items[fileName];
  } catch (error) {
    if (false) { var _context3; }

    return {};
  }
}
function getItemState({
  collections
}, collectionName, fileName) {
  sharedItemValidations('getItemState', collectionName, fileName);

  try {
    if (!collections[collectionName].items[fileName].state) {
      throw new Error("".concat(fileName, " has not loaded"));
    }

    return collections[collectionName].items[fileName].state;
  } catch (error) {
    if (false) { var _context4; }

    return {
      isPending: false,
      isFulfilled: false,
      error: false
    };
  }
}
/**
 * COLLECTION SELECTORS
 */

function sharedCollectionValidations(functionName, collectionName) {
  if (!collectionName) {
    var _context5;

    throw new Error(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_2___default()(_context5 = "".concat(ERROR_NAMESPACE, " ")).call(_context5, functionName, ": 'collectionName' is required."));
  }
}

function getCollection({
  collections
}, collectionName) {
  sharedCollectionValidations('getCollection', collectionName);

  try {
    var _context6;

    // TODO: improve code
    return _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_1___default()(_context6 = _babel_runtime_corejs3_core_js_stable_object_values__WEBPACK_IMPORTED_MODULE_0___default()(collections[collectionName].items)).call(_context6, p => p);
  } catch (error) {
    if (false) { var _context7; }

    return [];
  }
}
function getCollectionState({
  collections
}, collectionName) {
  sharedCollectionValidations('getCollectionError', collectionName);

  try {
    if (!collections[collectionName].state) {
      throw new Error("".concat(collectionName, " has not loaded"));
    }

    return collections[collectionName].state;
  } catch (error) {
    if (false) { var _context8; }

    return {
      isPending: false,
      isFulfilled: false,
      error: false
    };
  }
}

/***/ }),
/* 227 */
/*!******************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/core-js-stable/object/values.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js-pure/stable/object/values */ 228);

/***/ }),
/* 228 */
/*!************************************************************!*\
  !*** ../node_modules/core-js-pure/stable/object/values.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(/*! ../../es/object/values */ 229);

module.exports = parent;


/***/ }),
/* 229 */
/*!********************************************************!*\
  !*** ../node_modules/core-js-pure/es/object/values.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es.object.values */ 230);
var path = __webpack_require__(/*! ../../internals/path */ 24);

module.exports = path.Object.values;


/***/ }),
/* 230 */
/*!****************************************************************!*\
  !*** ../node_modules/core-js-pure/modules/es.object.values.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ 7);
var $values = __webpack_require__(/*! ../internals/object-to-array */ 231).values;

// `Object.values` method
// https://tc39.github.io/ecma262/#sec-object.values
$({ target: 'Object', stat: true }, {
  values: function values(O) {
    return $values(O);
  }
});


/***/ }),
/* 231 */
/*!*****************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/object-to-array.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ 10);
var objectKeys = __webpack_require__(/*! ../internals/object-keys */ 81);
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ 14);
var propertyIsEnumerable = __webpack_require__(/*! ../internals/object-property-is-enumerable */ 12).f;

// `Object.{ entries, values }` methods implementation
var createMethod = function (TO_ENTRIES) {
  return function (it) {
    var O = toIndexedObject(it);
    var keys = objectKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) {
      key = keys[i++];
      if (!DESCRIPTORS || propertyIsEnumerable.call(O, key)) {
        result.push(TO_ENTRIES ? [key, O[key]] : O[key]);
      }
    }
    return result;
  };
};

module.exports = {
  // `Object.entries` method
  // https://tc39.github.io/ecma262/#sec-object.entries
  entries: createMethod(true),
  // `Object.values` method
  // https://tc39.github.io/ecma262/#sec-object.values
  values: createMethod(false)
};


/***/ }),
/* 232 */
/*!************************************!*\
  !*** ./app/actions/collections.js ***!
  \************************************/
/*! exports provided: FETCH_ITEM, FETCH_COLLECTION, loadItem, loadCollection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_ITEM", function() { return FETCH_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_COLLECTION", function() { return FETCH_COLLECTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadItem", function() { return loadItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadCollection", function() { return loadCollection; });
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_sort__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/sort */ 233);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_sort__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_sort__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ 238);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var normalizr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! normalizr */ 239);
/* harmony import */ var normalizr__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(normalizr__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var app_config_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/config/constants */ 240);




const COLLECTION_SCHEMA_NAME = 'items';
const FETCH_ITEM = 'collections/FETCH_COLLECTION';
const FETCH_COLLECTION = 'collections/FETCH_COLLECTIONS';
/**
 * SCHEMA
 */

const itemSchema = new normalizr__WEBPACK_IMPORTED_MODULE_2__["Schema"](COLLECTION_SCHEMA_NAME, {
  idAttribute: entity => {
    return entity.frontMatter.fileName;
  }
});
const arrayOfItemsSchema = Object(normalizr__WEBPACK_IMPORTED_MODULE_2__["arrayOf"])(itemSchema);
/**
 * ACTIONS
 */

/**
 * Load item from collection.
 * @param  {String} collectionName - The collection name where the item will be stored (data folder name).
 * @param  {String} fileName       - The file name from the file that will be loaded.
 * @return {Object}                [description]
 */

function loadItem(collectionName, fileName) {
  if (!collectionName) {
    throw new Error('(actions)[collection] loadItem: `collectionName` is required.');
  }

  if (!fileName) {
    throw new Error('(actions)[collection] loadItem: `fileName` is required.');
  }

  return {
    type: FETCH_ITEM,
    meta: {
      collectionName,
      fileName
    },
    // eslint-disable-next-line
    payload: __webpack_require__(241)("./" + collectionName + '/' + fileName + ".md")().then(item => {
      return Object(normalizr__WEBPACK_IMPORTED_MODULE_2__["normalize"])(item, itemSchema).entities[COLLECTION_SCHEMA_NAME];
    })
  };
}
/**
 * Load items from collection.
 * @param  {String} collectionName - The collection name where the item will be stored (data folder name).
 * @return {Object}                [description]
 */

function loadCollection(collectionName) {
  if (!collectionName) {
    throw new Error('(actions)[collection] loadCollection: `collectionName` is required.');
  }

  return {
    type: FETCH_COLLECTION,
    meta: {
      collectionName
    },
    // eslint-disable-next-line
    payload: __webpack_require__(247)("./" + collectionName + ".config.js")().then(items => {
      _babel_runtime_corejs3_core_js_stable_instance_sort__WEBPACK_IMPORTED_MODULE_0___default()(items).call(items, orderByDate); // eslint-disable-line


      return Object(normalizr__WEBPACK_IMPORTED_MODULE_2__["normalize"])(items, arrayOfItemsSchema).entities[COLLECTION_SCHEMA_NAME];
    })
  };
}

function orderByDate(a, b) {
  const aDate = moment__WEBPACK_IMPORTED_MODULE_1___default()(a.frontMatter.date, app_config_constants__WEBPACK_IMPORTED_MODULE_3__["COLLECTION_DATE_FORMAT"]).toDate();
  const bDate = moment__WEBPACK_IMPORTED_MODULE_1___default()(b.frontMatter.date, app_config_constants__WEBPACK_IMPORTED_MODULE_3__["COLLECTION_DATE_FORMAT"]).toDate();

  if (aDate > bDate) {
    return -1;
  }

  if (aDate < bDate) {
    return 1;
  }

  return 0;
}

/***/ }),
/* 233 */
/*!******************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/core-js-stable/instance/sort.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js-pure/stable/instance/sort */ 234);

/***/ }),
/* 234 */
/*!************************************************************!*\
  !*** ../node_modules/core-js-pure/stable/instance/sort.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(/*! ../../es/instance/sort */ 235);

module.exports = parent;


/***/ }),
/* 235 */
/*!********************************************************!*\
  !*** ../node_modules/core-js-pure/es/instance/sort.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var sort = __webpack_require__(/*! ../array/virtual/sort */ 236);

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.sort;
  return it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.sort) ? sort : own;
};


/***/ }),
/* 236 */
/*!*************************************************************!*\
  !*** ../node_modules/core-js-pure/es/array/virtual/sort.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../../modules/es.array.sort */ 237);
var entryVirtual = __webpack_require__(/*! ../../../internals/entry-virtual */ 48);

module.exports = entryVirtual('Array').sort;


/***/ }),
/* 237 */
/*!*************************************************************!*\
  !*** ../node_modules/core-js-pure/modules/es.array.sort.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ 7);
var aFunction = __webpack_require__(/*! ../internals/a-function */ 26);
var toObject = __webpack_require__(/*! ../internals/to-object */ 31);
var fails = __webpack_require__(/*! ../internals/fails */ 11);
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ 150);

var test = [];
var nativeSort = test.sort;

// IE8-
var FAILS_ON_UNDEFINED = fails(function () {
  test.sort(undefined);
});
// V8 bug
var FAILS_ON_NULL = fails(function () {
  test.sort(null);
});
// Old WebKit
var STRICT_METHOD = arrayMethodIsStrict('sort');

var FORCED = FAILS_ON_UNDEFINED || !FAILS_ON_NULL || !STRICT_METHOD;

// `Array.prototype.sort` method
// https://tc39.github.io/ecma262/#sec-array.prototype.sort
$({ target: 'Array', proto: true, forced: FORCED }, {
  sort: function sort(comparefn) {
    return comparefn === undefined
      ? nativeSort.call(toObject(this))
      : nativeSort.call(toObject(this), aFunction(comparefn));
  }
});


/***/ }),
/* 238 */
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),
/* 239 */
/*!****************************!*\
  !*** external "normalizr" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("normalizr");

/***/ }),
/* 240 */
/*!*********************************!*\
  !*** ./app/config/constants.js ***!
  \*********************************/
/*! exports provided: COLLECTION_DATE_FORMAT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLLECTION_DATE_FORMAT", function() { return COLLECTION_DATE_FORMAT; });
const COLLECTION_DATE_FORMAT = 'DD-MM-YYYY'; // eslint-disable-line

/***/ }),
/* 241 */
/*!***********************************************************************************!*\
  !*** ../data sync ../lib/loaders/lazy.js!../lib/loaders/markdown.js ^\.\/.*\.md$ ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./works/fixbrand.md": 242,
	"./works/gean-marroquin.md": 243,
	"./works/la-glorieta.md": 244,
	"./works/ricarica-travel.md": 245,
	"./works/yilancorp.md": 246
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
webpackContext.id = 241;

/***/ }),
/* 242 */
/*!***********************************************************************************!*\
  !*** ../lib/loaders/lazy.js!../lib/loaders/markdown.js!../data/works/fixbrand.md ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function () {
  return new Promise(function (resolve) {
    Promise.resolve(/*! require.ensure | fixbrand */).then((function (require) {
      resolve(__webpack_require__(/*! !../lib/loaders/markdown.js!../data/works/fixbrand.md */ 300));
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  });
}

/***/ }),
/* 243 */
/*!*****************************************************************************************!*\
  !*** ../lib/loaders/lazy.js!../lib/loaders/markdown.js!../data/works/gean-marroquin.md ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function () {
  return new Promise(function (resolve) {
    Promise.resolve(/*! require.ensure | gean-marroquin */).then((function (require) {
      resolve(__webpack_require__(/*! !../lib/loaders/markdown.js!../data/works/gean-marroquin.md */ 301));
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  });
}

/***/ }),
/* 244 */
/*!**************************************************************************************!*\
  !*** ../lib/loaders/lazy.js!../lib/loaders/markdown.js!../data/works/la-glorieta.md ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function () {
  return new Promise(function (resolve) {
    Promise.resolve(/*! require.ensure | la-glorieta */).then((function (require) {
      resolve(__webpack_require__(/*! !../lib/loaders/markdown.js!../data/works/la-glorieta.md */ 302));
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  });
}

/***/ }),
/* 245 */
/*!******************************************************************************************!*\
  !*** ../lib/loaders/lazy.js!../lib/loaders/markdown.js!../data/works/ricarica-travel.md ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function () {
  return new Promise(function (resolve) {
    Promise.resolve(/*! require.ensure | ricarica-travel */).then((function (require) {
      resolve(__webpack_require__(/*! !../lib/loaders/markdown.js!../data/works/ricarica-travel.md */ 303));
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  });
}

/***/ }),
/* 246 */
/*!************************************************************************************!*\
  !*** ../lib/loaders/lazy.js!../lib/loaders/markdown.js!../data/works/yilancorp.md ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function () {
  return new Promise(function (resolve) {
    Promise.resolve(/*! require.ensure | yilancorp */).then((function (require) {
      resolve(__webpack_require__(/*! !../lib/loaders/markdown.js!../data/works/yilancorp.md */ 304));
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  });
}

/***/ }),
/* 247 */
/*!********************************************************************!*\
  !*** ../data sync ../lib/loaders/lazy-dir.js ^\.\/.*\.config\.js$ ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./posts.config.js": 248,
	"./works.config.js": 249
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
webpackContext.id = 247;

/***/ }),
/* 248 */
/*!**********************************************************!*\
  !*** ../lib/loaders/lazy-dir.js!../data/posts.config.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function () {
    return new Promise(function (resolve, reject) {
      try {
        /* lazy load group of files */
        Promise.resolve(/*! require.ensure | posts */).then((function (require) {
          var requireContext = __webpack_require__(305)
          var modules = requireContext.keys().map(function (fileFullName) {
            return requireContext(fileFullName)
          })

          resolve(modules)
        }).bind(null, __webpack_require__)).catch(__webpack_require__.oe)
      } catch (error) {
        reject(error)
      }
    })
  }

/***/ }),
/* 249 */
/*!**********************************************************!*\
  !*** ../lib/loaders/lazy-dir.js!../data/works.config.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function () {
    return new Promise(function (resolve, reject) {
      try {
        /* lazy load group of files */
        Promise.resolve(/*! require.ensure | works */).then((function (require) {
          var requireContext = __webpack_require__(306)
          var modules = requireContext.keys().map(function (fileFullName) {
            return requireContext(fileFullName)
          })

          resolve(modules)
        }).bind(null, __webpack_require__)).catch(__webpack_require__.oe)
      } catch (error) {
        reject(error)
      }
    })
  }

/***/ }),
/* 250 */
/*!**********************************************!*\
  !*** ./app/shared/components/ShimmerText.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 116);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ 201);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ 251);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);




function ShimmerText({
  darken = false,
  block = false,
  text,
  children
}) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('c-shimmer-text', {
      'c-shimmer-text--darken': darken,
      'c-shimmer-text--block': block
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-shimmer-text__text u-blokk-font"
  }, text || children));
}

ShimmerText.propTypes = {
  darken: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  block: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  text: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node
};
/* harmony default export */ __webpack_exports__["default"] = (ShimmerText);

/***/ }),
/* 251 */
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 252 */
/*!********************************************!*\
  !*** ./app/shared/components/SiteError.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 116);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ 201);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ 126);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_2__);




function SiteError({
  headTitle,
  title,
  message,
  invert
}) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-site-error ".concat(invert ? 'c-site-error--invert' : '')
  }, headTitle && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_2___default.a, {
    title: headTitle
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "c-site-error__title",
    "data-text": title
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "c-site-error__message u-caps"
  }, message));
}

SiteError.propTypes = {
  headTitle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  message: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  invert: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (SiteError);

/***/ }),
/* 253 */
/*!********************************************!*\
  !*** ./app/shared/components/WorksList.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ 171);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ 116);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ 201);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Work__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Work */ 254);





function WorksList({
  works
}) {
  if (works.length === 0) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "No hay trabajos que mostrar.");
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "o-grid o-grid--gutter-3 u-list-reset"
  }, _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default()(works).call(works, work => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "o-grid__item u-12/12 u-6/12@tablet u-4/12@laptop",
    key: work.frontMatter.fileName
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Work__WEBPACK_IMPORTED_MODULE_3__["default"], {
    work: work.frontMatter
  }))));
}

WorksList.propTypes = {
  works: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    frontMatter: _Work__WEBPACK_IMPORTED_MODULE_3__["default"].propTypes.work
  })).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (WorksList);

/***/ }),
/* 254 */
/*!***************************************!*\
  !*** ./app/shared/components/Work.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var PropTypes_article__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! PropTypes/article */ 223);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ 116);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ 122);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);




function Work({
  work
}) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("article", {
    className: "c-work",
    style: {
      backgroundImage: "url(".concat(work.imageUrl, ")")
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    className: "c-work__link",
    to: "/works/".concat(work.fileName)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "u-caps"
  }, work.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Ver proyecto completo")));
}

Work.propTypes = {
  work: PropTypes_article__WEBPACK_IMPORTED_MODULE_0__["frontMatterShape"].isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Work);

/***/ }),
/* 255 */
/*!************************************!*\
  !*** ./app/screens/About/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// import {lazy} from 'react'
// import topBar from 'utils/topBar'
/* harmony default export */ __webpack_exports__["default"] = ({
  path: 'about',
  component: __webpack_require__(/*! ./components/AboutScreen */ 256).default,
  // component: lazy(async () => {
  //   topBar.show()
  //   const component = await import('./components/AboutScreen')
  //   topBar.hide()
  //   return component
  // }),
  // getComponent(nextState, cb) {
  //   topBar.show()
  //   require.ensure(
  //     [],
  //     require => {
  //       cb(null, require('./components/AboutScreen').default)
  //       topBar.hide()
  //     },
  //     'AboutScreen',
  //   )
  // },
  exact: true
});

/***/ }),
/* 256 */
/*!*****************************************************!*\
  !*** ./app/screens/About/components/AboutScreen.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ 171);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ 116);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var app_config_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/config/data */ 217);
/* harmony import */ var components_ExternalLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/ExternalLink */ 220);
/* harmony import */ var components_ScreenHelmet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/ScreenHelmet */ 218);
/* harmony import */ var _config_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config/data */ 257);







function AboutScreen() {
  var _context, _context4;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: "o-wrapper c-about-screen"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_ScreenHelmet__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: app_config_data__WEBPACK_IMPORTED_MODULE_2__["default"].screens.about.title,
    description: app_config_data__WEBPACK_IMPORTED_MODULE_2__["default"].screens.about.description,
    canonicalHref: app_config_data__WEBPACK_IMPORTED_MODULE_2__["default"].screens.about.canonicalHref
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", {
    className: "c-about-screen__profile"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "u-fz-h4 u-m0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "u-caps u-fz-h2 u-mb2 u-block"
  }, "Gean Marroquin, "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "u-fz-sm u-fw-s-bold u-m0 u-block"
  }, "Front-end developer"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "c-about-screen__info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: "u-mb5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "u-caps u-mb3"
  }, "Sobre mi"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "o-grid o-grid--gutter-x-5 o-grid--gutter-y-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "o-grid__item u-12/12 u-6/12@tablet"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "u-mb0"
  }, app_config_data__WEBPACK_IMPORTED_MODULE_2__["default"].about)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "o-grid__item u-12/12 u-6/12@tablet"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "\xBFDesea contratarme para trabajar en su empresa por tiempo completo o parcial?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "u-mb0 u-flex u-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "u-icon u-fz-h2 u-mr2"
  }, "arrow_drop_down_circle"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "//res.cloudinary.com/wochap/image/upload/v1495421654/wochap/cv_es.pdf"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, "Descarga mi CV")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: "u-mb5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "u-caps u-mb3"
  }, "Skills"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "o-grid o-grid--gutter-x-5 o-grid--gutter-y-3 u-list-reset"
  }, _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default()(_context = _config_data__WEBPACK_IMPORTED_MODULE_5__["default"].skills).call(_context, (skill, index) => {
    var _context2;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: "o-grid__item u-12/12 u-6/12@tablet",
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
      className: "u-fz-inherit u-mb2"
    }, skill.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
      className: "u-mb0"
    }, _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default()(_context2 = skill.rows).call(_context2, (row, _index) => {
      var _context3;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        key: _index
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, row.title, ": "), ' ', _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default()(_context3 = row.items).call(_context3, (item, __index) => [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_ExternalLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
        href: item.link,
        title: item.title,
        key: __index
      }), __index === row.items.length - 1 ? null : ', ']));
    })));
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "u-caps u-mb3"
  }, "Cursos que realize"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "o-grid o-grid--gutter-x-5 o-grid--gutter-y-3 u-list-reset"
  }, _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default()(_context4 = _config_data__WEBPACK_IMPORTED_MODULE_5__["default"].moocs).call(_context4, (mooc, index) => {
    var _context5;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: "o-grid__item u-12/12 u-6/12@tablet",
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
      className: "u-fz-inherit u-mb3"
    }, mooc.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
      className: "u-mb0"
    }, _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default()(_context5 = mooc.courses).call(_context5, (course, _index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      key: _index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
      className: "u-fz-inherit u-mb0"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_ExternalLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
      href: course.link,
      title: course.title
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "u-mb0"
    }, course.year)))));
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = (AboutScreen);

/***/ }),
/* 257 */
/*!******************************************!*\
  !*** ./app/screens/About/config/data.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  skills: [{
    title: 'CSS',
    rows: [{
      title: 'Frameworks',
      items: [{
        title: 'WOCSS',
        link: 'https://github.com/wocss'
      }, {
        title: 'Materialize',
        link: 'http://materializecss.com/'
      }]
    }, {
      title: 'Coding conventions/Guidelines',
      items: [{
        title: "Harry Roberts's CSS Guidelines",
        link: 'http://cssguidelin.es/'
      }, {
        title: 'ITCSS',
        link: 'http://csswizardry.net/talks/2014/11/itcss-dafed.pdf'
      }, {
        title: 'BEMIT',
        link: 'http://csswizardry.com/2015/08/bemit-taking-the-bem-naming-convention-a-step-further/'
      }]
    }, {
      title: 'Procesadores',
      items: [{
        title: 'SASS',
        link: 'http://sass-lang.com/'
      }, {
        title: 'Stylus',
        link: 'http://stylus-lang.com/'
      }, {
        title: 'PostCSS',
        link: 'http://postcss.org/'
      }]
    }]
  }, {
    title: 'JS',
    rows: [{
      title: 'Frameworks',
      items: [{
        title: 'React',
        link: 'https://facebook.github.io/react/'
      }, {
        title: 'VueJS',
        link: 'https://vuejs.org/'
      }]
    }, {
      title: 'Coding conventions/Guidelines',
      items: [{
        title: 'JavaScript Standard Style',
        link: 'http://standardjs.com/rules.html'
      }, {
        title: 'by Route hierarchy',
        link: 'https://gist.github.com/ryanflorence/daafb1e3cb8ad740b346'
      }]
    }]
  }, {
    title: 'Tooling/Workflow',
    rows: [{
      title: 'Build system',
      items: [{
        title: 'Webpack',
        link: 'https://webpack.github.io/'
      }]
    }, {
      title: 'Task runner',
      items: [{
        title: 'NPM scripts',
        link: 'https://medium.freecodecamp.com/why-i-left-gulp-and-grunt-for-npm-scripts-3d6853dd22b8?gi=64bf3727f8f3'
      }]
    }, {
      title: 'Package management',
      items: [{
        title: 'Yarn',
        link: 'https://yarnpkg.com/'
      }, {
        title: 'NPM',
        link: 'https://www.npmjs.com/'
      }]
    }, {
      title: 'Testing',
      items: [{
        title: 'Jest',
        link: 'https://facebook.github.io/jest/'
      }, {
        title: 'BrowserSync',
        link: 'https://browsersync.io/'
      }]
    }]
  }],
  moocs: [{
    title: 'Platzi',
    courses: [{
      title: 'Carrera de Arquitectura Frontend',
      link: 'https://platzi.com/@boni/carrera/42-arquitecto/diploma/detalle/',
      year: '2020'
    }, {
      title: 'Carrera de JavaScript',
      link: 'https://platzi.com/@boni/carrera/111-escuela-js/diploma/detalle/',
      year: '2020'
    }, {
      title: 'Carrera de Backend con JavaScript',
      link: 'https://platzi.com/@boni/ruta/55-backend-javascript/diploma/detalle/',
      year: '2020'
    }, {
      title: 'Carrera de Vue.js',
      link: 'https://platzi.com/@boni/carrera/98-vue/diploma/detalle/',
      year: '2020'
    }, {
      title: 'Carrera de React.js',
      link: 'https://platzi.com/@boni/ruta/8-desarrollo-react/diploma/detalle/',
      year: '2020'
    }, {
      title: 'Carrera de Fundamentos de Programación',
      link: 'https://platzi.com/@boni/carrera/56-fundamentos-programacion/diploma/detalle/',
      year: '2020'
    }]
  }, {
    title: 'Frontend Masters',
    courses: [{
      title: 'Advanced JS',
      link: 'https://frontendmasters.com/courses/advanced-javascript/',
      year: '2016'
    }]
  }, {
    title: 'Udacity',
    courses: [{
      title: 'Website Performance Optimization',
      link: 'https://www.udacity.com/course/website-performance-optimization--ud884',
      year: '2016'
    }, {
      title: 'Browser Rendering Optimization',
      link: 'https://www.udacity.com/course/browser-rendering-optimization--ud860',
      year: '2016'
    }]
  }, {
    title: 'Egghead',
    courses: [{
      title: 'Building React Applications with Idiomatic Redux',
      link: 'https://egghead.io/courses/building-react-applications-with-idiomatic-redux',
      year: '2016'
    }, {
      title: 'Getting Started with Redux',
      link: 'https://egghead.io/courses/getting-started-with-redux',
      year: '2016'
    }]
  }, {
    title: 'CodeSchool',
    courses: [{
      title: 'ES2015: The Shape of JavaScript to Come',
      link: 'https://www.codeschool.com/courses/es2015-the-shape-of-javascript-to-come',
      year: '2016'
    }, {
      title: 'Powering Up With React',
      link: 'https://www.codeschool.com/courses/powering-up-with-react',
      year: '2016'
    }, {
      title: 'JavaScript Best Practices',
      link: 'https://www.codeschool.com/courses/javascript-best-practices',
      year: '2016'
    }, {
      title: 'Discover DevTools',
      link: 'https://www.codeschool.com/courses/discover-devtools',
      year: '2016'
    }]
  }]
});

/***/ }),
/* 258 */
/*!************************************!*\
  !*** ./app/screens/Works/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _screens_Works__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./screens/Works */ 259);
/* harmony import */ var _screens_Work__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./screens/Work */ 261);
// import {lazy} from 'react'
// import topBar from 'utils/topBar'


/* harmony default export */ __webpack_exports__["default"] = ({
  path: 'works',
  component: __webpack_require__(/*! ./components/WorksScreen */ 270).default,
  // component: lazy(async () => {
  //   topBar.show()
  //   const component = await import('./components/WorksScreen')
  //   topBar.hide()
  //   return component
  // }),
  // getComponent(nextState, cb) {
  //   topBar.show()
  //   require.ensure(
  //     [],
  //     require => {
  //       topBar.hide()
  //       cb(null, require('./components/WorksScreen').default) // eslint-disable-line
  //     },
  //     'WorksScreen',
  //   )
  // },
  indexRoute: _screens_Works__WEBPACK_IMPORTED_MODULE_0__["default"],
  childRoutes: [_screens_Work__WEBPACK_IMPORTED_MODULE_1__["default"]],
  exact: false
});

/***/ }),
/* 259 */
/*!**************************************************!*\
  !*** ./app/screens/Works/screens/Works/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_WorksScreen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/WorksScreen */ 260);

/* harmony default export */ __webpack_exports__["default"] = ({
  path: '',
  component: _components_WorksScreen__WEBPACK_IMPORTED_MODULE_0__["default"],
  exact: true
});

/***/ }),
/* 260 */
/*!*******************************************************************!*\
  !*** ./app/screens/Works/screens/Works/components/WorksScreen.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 116);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var app_config_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/config/data */ 217);
/* harmony import */ var components_ScreenHelmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/ScreenHelmet */ 218);
/* harmony import */ var components_Works__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Works */ 221);





function WorksScreen() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_ScreenHelmet__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: app_config_data__WEBPACK_IMPORTED_MODULE_1__["default"].screens.works.title,
    description: app_config_data__WEBPACK_IMPORTED_MODULE_1__["default"].screens.works.description,
    canonicalHref: app_config_data__WEBPACK_IMPORTED_MODULE_1__["default"].screens.works.canonicalHref
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Works__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "u-mb5"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (WorksScreen);

/***/ }),
/* 261 */
/*!*************************************************!*\
  !*** ./app/screens/Works/screens/Work/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_WorkScreen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/WorkScreen */ 262);
 // eslint-disable-line

/* harmony default export */ __webpack_exports__["default"] = ({
  path: ':fileName',
  component: _components_WorkScreen__WEBPACK_IMPORTED_MODULE_0__["default"],
  exact: true,
  layoutProps: {
    headerProps: {
      isFixed: true
    }
  }
});

/***/ }),
/* 262 */
/*!*****************************************************************!*\
  !*** ./app/screens/Works/screens/Work/components/WorkScreen.js ***!
  \*****************************************************************/
/*! exports provided: WorkScreen, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkScreen", function() { return WorkScreen; });
/* harmony import */ var _babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/extends */ 208);
/* harmony import */ var _babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ 116);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var app_config_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/config/data */ 217);
/* harmony import */ var hoc_collection_withCollectionItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! hoc/collection/withCollectionItem */ 263);
/* harmony import */ var components_SiteArticle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/SiteArticle */ 264);




 // eslint-disable-line

function WorkScreen(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_SiteArticle__WEBPACK_IMPORTED_MODULE_4__["default"], _babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {
    head: {
      canonicalHref: app_config_data__WEBPACK_IMPORTED_MODULE_2__["default"].screens.works.canonicalHref
    }
  }));
}
/* harmony default export */ __webpack_exports__["default"] = (Object(hoc_collection_withCollectionItem__WEBPACK_IMPORTED_MODULE_3__["default"])(WorkScreen, 'works'));

/***/ }),
/* 263 */
/*!*********************************************************!*\
  !*** ./app/shared/hoc/collection/withCollectionItem.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/defineProperty */ 176);
/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ 116);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ 201);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ 125);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var recompose_getDisplayName__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! recompose/getDisplayName */ 225);
/* harmony import */ var recompose_getDisplayName__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(recompose_getDisplayName__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var hoc_collection_PropTypes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! hoc/collection/PropTypes */ 222);
/* harmony import */ var app_selectors_collections__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/selectors/collections */ 226);
/* harmony import */ var app_actions_collections__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/actions/collections */ 232);









function withItem(WrappedComponent, collectionName) {
  class ItemHOC extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
    componentDidMount() {
      const {
        fetchItemCollection,
        match,
        itemState
      } = this.props;
      const {
        params
      } = match;

      if (false) {}

      if (!itemState.isFulfilled) {
        fetchItemCollection(params.fileName);
      }
    }

    componentDidUpdate(prevProps) {
      const {
        fetchItemCollection,
        match,
        itemState
      } = this.props;
      const {
        params
      } = match;

      if (prevProps.match.params.fileName !== params.fileName) {
        if (!itemState.isFulfilled) {
          fetchItemCollection(params.fileName);
        }
      }
    }

    render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(WrappedComponent, this.props);
    }

  }

  _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(ItemHOC, "displayName", "ItemHOC(".concat(recompose_getDisplayName__WEBPACK_IMPORTED_MODULE_4___default()(WrappedComponent), ")"));

  _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(ItemHOC, "propTypes", {
    match: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
      params: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
        fileName: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired
      })
    }).isRequired,
    fetchItemCollection: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
    itemState: hoc_collection_PropTypes__WEBPACK_IMPORTED_MODULE_5__["stateShape"],
    item: hoc_collection_PropTypes__WEBPACK_IMPORTED_MODULE_5__["itemShape"],
    // eslint-disable-line
    collectionState: hoc_collection_PropTypes__WEBPACK_IMPORTED_MODULE_5__["stateShape"] // eslint-disable-line

  });

  function mapStateToProps(state, ownProps) {
    const {
      match
    } = ownProps;
    return {
      item: Object(app_selectors_collections__WEBPACK_IMPORTED_MODULE_6__["getItem"])(state, collectionName, match.params.fileName),
      itemState: Object(app_selectors_collections__WEBPACK_IMPORTED_MODULE_6__["getItemState"])(state, collectionName, match.params.fileName),
      collectionState: Object(app_selectors_collections__WEBPACK_IMPORTED_MODULE_6__["getCollectionState"])(state, collectionName)
    };
  }

  function mapDispatchToProps(dispatch) {
    return {
      fetchItemCollection: fileName => dispatch(Object(app_actions_collections__WEBPACK_IMPORTED_MODULE_7__["loadItem"])(collectionName, fileName))
    };
  }

  return Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(ItemHOC);
}

/* harmony default export */ __webpack_exports__["default"] = (withItem);

/***/ }),
/* 264 */
/*!**********************************************!*\
  !*** ./app/shared/components/SiteArticle.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/concat */ 2);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ 116);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ 201);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var hoc_collection_PropTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! hoc/collection/PropTypes */ 222);
/* harmony import */ var PropTypes_article__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! PropTypes/article */ 223);
/* harmony import */ var app_screens_NotFound_components_NotFoundScreen__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/screens/NotFound/components/NotFoundScreen */ 265);
/* harmony import */ var components_SiteError__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/SiteError */ 252);
/* harmony import */ var components_Hero__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/Hero */ 266);
/* harmony import */ var components_MarkdownBody__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/MarkdownBody */ 268);
/* harmony import */ var components_ScreenHelmet__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/ScreenHelmet */ 218);
/* harmony import */ var components_ArticleHelmet__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/ArticleHelmet */ 269);












function SiteArticle({
  item,
  itemState,
  collectionState,
  head
}) {
  if (itemState.error) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_SiteError__WEBPACK_IMPORTED_MODULE_6__["default"], {
      title: "Error",
      message: itemState.error
    });
  }

  if (itemState.isFulfilled) {
    var _context;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("article", {
      className: "u-mb5 u-overflow-hidden"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_ScreenHelmet__WEBPACK_IMPORTED_MODULE_9__["default"], {
      title: item.frontMatter.title,
      description: item.frontMatter.description,
      canonicalHref: _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0___default()(_context = "".concat(head.canonicalHref, "/")).call(_context, item.frontMatter.fileName)
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_ArticleHelmet__WEBPACK_IMPORTED_MODULE_10__["default"], {
      imageUrl: item.frontMatter.imageUrl,
      publishedTime: item.frontMatter.date,
      tags: item.frontMatter.tags
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_Hero__WEBPACK_IMPORTED_MODULE_7__["default"], {
      data: item.frontMatter
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_MarkdownBody__WEBPACK_IMPORTED_MODULE_8__["default"], {
      html: item.bodyHtml
    }));
  }

  if (collectionState.isFulfilled) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("article", {
      className: "u-mb5"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_Hero__WEBPACK_IMPORTED_MODULE_7__["default"], {
      data: item.frontMatter
    }), itemState.isPending && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_MarkdownBody__WEBPACK_IMPORTED_MODULE_8__["default"], {
      isLoading: true
    }));
  }

  if (itemState.isPending) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("article", {
      className: "u-mb5"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_Hero__WEBPACK_IMPORTED_MODULE_7__["default"], {
      isLoading: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_MarkdownBody__WEBPACK_IMPORTED_MODULE_8__["default"], {
      isLoading: true
    }));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(app_screens_NotFound_components_NotFoundScreen__WEBPACK_IMPORTED_MODULE_5__["default"], {
    message: "Art\xEDculo no encontrado"
  });
}

SiteArticle.propTypes = {
  item: PropTypes_article__WEBPACK_IMPORTED_MODULE_4__["articleShape"],
  itemState: hoc_collection_PropTypes__WEBPACK_IMPORTED_MODULE_3__["stateShape"],
  collectionState: hoc_collection_PropTypes__WEBPACK_IMPORTED_MODULE_3__["stateShape"],
  head: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    canonicalHref: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired
  }).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (SiteArticle);

/***/ }),
/* 265 */
/*!***********************************************************!*\
  !*** ./app/screens/NotFound/components/NotFoundScreen.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 116);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ 201);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var app_config_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/config/data */ 217);
/* harmony import */ var components_SiteError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/SiteError */ 252);





function NotFoundScreen({
  message = 'Pagina no encontrada'
}) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_SiteError__WEBPACK_IMPORTED_MODULE_3__["default"], {
    headTitle: app_config_data__WEBPACK_IMPORTED_MODULE_2__["default"].screens.notFound.title,
    title: "404",
    message: message
  });
}

NotFoundScreen.propTypes = {
  message: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (NotFoundScreen);

/***/ }),
/* 266 */
/*!***************************************!*\
  !*** ./app/shared/components/Hero.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 116);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ 201);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_ShimmerText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/ShimmerText */ 250);
/* harmony import */ var utils_formatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! utils/formatter */ 267);
/* harmony import */ var components_ExternalLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/ExternalLink */ 220);






function Hero({
  data = {
    title: 'Cargando artículo ...',
    date: '18-06-1994'
  },
  isLoading = false
}) {
  const backgroundImage = data.heroImageUrl ? "url(".concat(data.heroImageUrl, ")") : null;
  const formattedDate = data.formattedDate || Object(utils_formatter__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(data.date);
  const footer = data.role || data.tasks || data.siteLink || data.source ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "c-hero__footer"
  }, data.role && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Rol: "), data.role), data.tasks && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Tareas: "), data.tasks), data.source && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Source: "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_ExternalLink__WEBPACK_IMPORTED_MODULE_4__["default"], {
    href: data.source,
    title: data.source
  })), data.siteLink && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Sitio: "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_ExternalLink__WEBPACK_IMPORTED_MODULE_4__["default"], {
    href: data.siteLink,
    title: data.siteLink
  }))) : null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
    className: "c-hero",
    style: {
      backgroundImage
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "o-wrapper c-hero__wrapper"
  }, isLoading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_ShimmerText__WEBPACK_IMPORTED_MODULE_2__["default"], {
    darken: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "u-block u-fz-h00 u-pb4 u-line-height-1"
  }, data.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "u-block u-pb6 u-line-height-1"
  }, formattedDate)) : [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "c-hero__title u-caps",
    key: "title"
  }, data.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "c-hero__date",
    key: "date"
  }, formattedDate)], footer));
}

Hero.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    date: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    heroImageUrl: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
  }),
  isLoading: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (Hero);

/***/ }),
/* 267 */
/*!***************************************!*\
  !*** ./app/shared/utils/formatter.js ***!
  \***************************************/
/*! exports provided: formatDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDate", function() { return formatDate; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 238);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var app_config_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/config/constants */ 240);


/**
 * format date with moment
 * @param  {String} date - the date in 'DD-MM-YYYY' format
 * @return {String}      - the date formatted. e.g.: 21 de diciembre de 2016
 */

function formatDate(date) {
  return moment__WEBPACK_IMPORTED_MODULE_0___default()(date, app_config_constants__WEBPACK_IMPORTED_MODULE_1__["COLLECTION_DATE_FORMAT"]).format('LL');
}

/***/ }),
/* 268 */
/*!***********************************************!*\
  !*** ./app/shared/components/MarkdownBody.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 116);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ 201);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_ShimmerText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/ShimmerText */ 250);




function MarkdownBody({
  html,
  isLoading = false
}) {
  if (isLoading) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "o-wrapper o-wrapper--3 u-pb5"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_ShimmerText__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "u-block u-pb3 u-fz-h00 u-line-height-1",
      "aria-label": "cargando"
    }, "Lorem"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "u-block u-pb3",
      "aria-label": "cargando"
    }, "Loremipsumdolorsitamet,consecteturadipisicingelit,seddoeiusmodtemporincididuntutlaboreetdoloremagnaaliqua.Utenimadminimveniam,quisnostrudexercitationullamcolaborisnisiutaliquipexeacommodoconsequat."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      "aria-label": "cargando"
    }, "Duisauteiruredolorinreprehenderitinvoluptatevelitessecillumdoloreeufugiatnullapariatur.Excepteursintoccaecatcupidatatnonproident,suntinculpaquiofficiadeseruntmollitanimidestlaborum.")));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "o-wrapper o-wrapper--3 c-markdown-body",
    dangerouslySetInnerHTML: {
      __html: html
    }
  });
}

MarkdownBody.propTypes = {
  html: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  isLoading: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (MarkdownBody);

/***/ }),
/* 269 */
/*!************************************************!*\
  !*** ./app/shared/components/ArticleHelmet.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ 171);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ 116);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ 201);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-helmet */ 126);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var app_config_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/config/data */ 217);






function ArticleHelmet({
  imageUrl,
  publishedTime,
  tags = []
}) {
  const metaTags = _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default()(tags).call(tags, tag => ({
    property: 'article:tag',
    content: tag
  }));

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_3___default.a, {
    meta: [{
      property: 'og:type',
      content: 'article'
    }, {
      property: 'og:image',
      content: imageUrl
    }, {
      property: 'article:published_time',
      content: publishedTime
    }, {
      property: 'article:author',
      content: "https://twitter.com/".concat(app_config_data__WEBPACK_IMPORTED_MODULE_4__["default"].twitterUser)
    }, ...metaTags]
  });
}

ArticleHelmet.propTypes = {
  imageUrl: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  publishedTime: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  tags: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string)
};
/* harmony default export */ __webpack_exports__["default"] = (ArticleHelmet);

/***/ }),
/* 270 */
/*!*****************************************************!*\
  !*** ./app/screens/Works/components/WorksScreen.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 116);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ 201);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



function WorksScreen({
  children
}) {
  return children ? react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(children) : null;
}

WorksScreen.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element
};
/* harmony default export */ __webpack_exports__["default"] = (WorksScreen);

/***/ }),
/* 271 */
/*!***********************************!*\
  !*** ./app/screens/Blog/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _screens_Post__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./screens/Post */ 272);
/* harmony import */ var _screens_Posts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./screens/Posts */ 274);
// import {lazy} from 'react'
// import topBar from 'utils/topBar'


/* harmony default export */ __webpack_exports__["default"] = ({
  path: 'blog',
  component: __webpack_require__(/*! ./components/BlogScreen */ 279).default,
  // component: lazy(async () => {
  //   topBar.show()
  //   const component = await import('./components/BlogScreen')
  //   topBar.hide()
  //   return component
  // }),
  // getComponent(nextState, cb) {
  //   topBar.show()
  //   require.ensure(
  //     [],
  //     require => {
  //       topBar.hide()
  //       cb(null, require('./components/BlogScreen').default) // eslint-disable-line
  //     },
  //     'BlogScreen',
  //   )
  // },
  indexRoute: _screens_Posts__WEBPACK_IMPORTED_MODULE_1__["default"],
  childRoutes: [_screens_Post__WEBPACK_IMPORTED_MODULE_0__["default"]],
  exact: false
});

/***/ }),
/* 272 */
/*!************************************************!*\
  !*** ./app/screens/Blog/screens/Post/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// import {lazy} from 'react'
// import topBar from 'utils/topBar'
/* harmony default export */ __webpack_exports__["default"] = ({
  path: ':fileName',
  component: __webpack_require__(/*! ./components/PostScreen */ 273).default,
  // component: lazy(async () => {
  //   topBar.show()
  //   const component = await import('./components/PostScreen')
  //   topBar.hide()
  //   return component
  // }),
  // getComponent(nextState, cb) {
  //   topBar.show()
  //   require.ensure(
  //     [],
  //     require => {
  //       cb(null, require('./components/PostScreen').default) // eslint-disable-line
  //       topBar.hide()
  //     },
  //     'PostScreen',
  //   )
  // },
  exact: true
});

/***/ }),
/* 273 */
/*!****************************************************************!*\
  !*** ./app/screens/Blog/screens/Post/components/PostScreen.js ***!
  \****************************************************************/
/*! exports provided: PostScreen, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostScreen", function() { return PostScreen; });
/* harmony import */ var _babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/extends */ 208);
/* harmony import */ var _babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ 116);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var app_config_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/config/data */ 217);
/* harmony import */ var hoc_collection_withCollectionItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! hoc/collection/withCollectionItem */ 263);
/* harmony import */ var components_SiteArticle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/SiteArticle */ 264);




 // eslint-disable-line

function PostScreen(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_SiteArticle__WEBPACK_IMPORTED_MODULE_4__["default"], _babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {
    head: {
      canonicalHref: app_config_data__WEBPACK_IMPORTED_MODULE_2__["default"].screens.blog.canonicalHref
    }
  }));
}
/* harmony default export */ __webpack_exports__["default"] = (Object(hoc_collection_withCollectionItem__WEBPACK_IMPORTED_MODULE_3__["default"])(PostScreen, 'posts'));

/***/ }),
/* 274 */
/*!*************************************************!*\
  !*** ./app/screens/Blog/screens/Posts/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_PostsScreen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/PostsScreen */ 275);
 // eslint-disable-line

/* harmony default export */ __webpack_exports__["default"] = ({
  path: '',
  component: _components_PostsScreen__WEBPACK_IMPORTED_MODULE_0__["default"],
  exact: true
});

/***/ }),
/* 275 */
/*!******************************************************************!*\
  !*** ./app/screens/Blog/screens/Posts/components/PostsScreen.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 116);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var app_config_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/config/data */ 217);
/* harmony import */ var components_ScreenHelmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/ScreenHelmet */ 218);
/* harmony import */ var components_Posts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Posts */ 276);





function PostsScreen() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
    className: "o-wrapper u-overflow-hidden u-mb5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_ScreenHelmet__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: app_config_data__WEBPACK_IMPORTED_MODULE_1__["default"].screens.blog.title,
    description: app_config_data__WEBPACK_IMPORTED_MODULE_1__["default"].screens.blog.description,
    canonicalHref: app_config_data__WEBPACK_IMPORTED_MODULE_1__["default"].screens.blog.canonicalHref
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "u-hide"
  }, "Blog"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "o-grid o-grid--gutter-5 u-flex-row-reverse"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "o-grid__item u-12/12 u-4/12@laptop"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "u-mb2 u-caps"
  }, "Gean Marroquin"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "u-fw-s-bold u-mb3"
  }, "S\xEDgueme @", app_config_data__WEBPACK_IMPORTED_MODULE_1__["default"].twitterUser), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "u-fz-sm"
  }, app_config_data__WEBPACK_IMPORTED_MODULE_1__["default"].about)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "o-grid__item u-12/12 u-8/12@laptop"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Posts__WEBPACK_IMPORTED_MODULE_3__["default"], null))));
}

/* harmony default export */ __webpack_exports__["default"] = (PostsScreen);

/***/ }),
/* 276 */
/*!****************************************!*\
  !*** ./app/shared/components/Posts.js ***!
  \****************************************/
/*! exports provided: PostsComponent, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsComponent", function() { return PostsComponent; });
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ 171);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ 116);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ 201);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var hoc_collection_PropTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! hoc/collection/PropTypes */ 222);
/* harmony import */ var PropTypes_article__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! PropTypes/article */ 223);
/* harmony import */ var hoc_collection_withCollection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! hoc/collection/withCollection */ 224);
/* harmony import */ var components_ShimmerText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/ShimmerText */ 250);
/* harmony import */ var components_SiteError__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/SiteError */ 252);
/* harmony import */ var _PostsList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PostsList */ 277);









function PostsComponent({
  collectionState,
  collection,
  className,
  id
}) {
  let body;

  if (collectionState.error) {
    body = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_SiteError__WEBPACK_IMPORTED_MODULE_7__["default"], {
      title: "Ups",
      message: collectionState.error,
      invert: true
    });
  } else if (collectionState.isPending) {
    var _context;

    body = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
      className: "u-list-reset u-m0"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_ShimmerText__WEBPACK_IMPORTED_MODULE_6__["default"], null, _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default()(_context = [...new Array(3)]).call(_context, (_, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: index === 2 ? '' : 'u-pb4',
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "u-block u-fz-lg u-line-height-1"
    }, "Loremipsum"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "u-block u-fz-h0 u-line-height-1"
    }, "Loremipsumdolorsitamet")))));
  } else {
    body = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_PostsList__WEBPACK_IMPORTED_MODULE_8__["default"], {
      posts: collection
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: className,
    id: id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "u-center u-mb4 u-caps"
  }, "Art\xEDculos"), body);
}
PostsComponent.propTypes = {
  collectionState: hoc_collection_PropTypes__WEBPACK_IMPORTED_MODULE_3__["stateShape"],
  collection: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(PropTypes_article__WEBPACK_IMPORTED_MODULE_4__["articleShape"]).isRequired,
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  id: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
};
const Posts = Object(hoc_collection_withCollection__WEBPACK_IMPORTED_MODULE_5__["default"])(PostsComponent, 'posts');
/* harmony default export */ __webpack_exports__["default"] = (Posts);

/***/ }),
/* 277 */
/*!********************************************!*\
  !*** ./app/shared/components/PostsList.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ 171);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ 116);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ 201);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Post */ 278);





function PostsList({
  posts
}) {
  return posts.length === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "No hay art\xEDculos que mostrar.") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "u-list-reset"
  }, _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default()(posts).call(posts, (post, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: index === posts.length - 1 ? '' : 'u-mb4',
    key: post.frontMatter.fileName
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Post__WEBPACK_IMPORTED_MODULE_3__["default"], {
    post: post.frontMatter
  }))));
}

PostsList.propTypes = {
  posts: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    frontMatter: _Post__WEBPACK_IMPORTED_MODULE_3__["default"].propTypes.post
  }).isRequired).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (PostsList);

/***/ }),
/* 278 */
/*!***************************************!*\
  !*** ./app/shared/components/Post.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 116);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ 201);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ 122);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var utils_formatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! utils/formatter */ 267);





function Post({
  post
}) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "u-fz-sm u-mb1 u-muted"
  }, Object(utils_formatter__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(post.date)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "u-fz-h2 u-mb0 u-line-height-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: "/blog/".concat(post.fileName)
  }, post.title)));
}

Post.propTypes = {
  post: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    fileName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    date: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    description: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
  }).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Post);

/***/ }),
/* 279 */
/*!***************************************************!*\
  !*** ./app/screens/Blog/components/BlogScreen.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 116);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ 201);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



function BlogScreen({
  children
}) {
  return children ? react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(children) : null;
}

BlogScreen.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element
};
/* harmony default export */ __webpack_exports__["default"] = (BlogScreen);

/***/ }),
/* 280 */
/*!**************************************!*\
  !*** ./app/screens/Contact/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// import {lazy} from 'react'
// import topBar from 'utils/topBar'
/* harmony default export */ __webpack_exports__["default"] = ({
  path: 'contact',
  component: __webpack_require__(/*! ./components/ContactScreen */ 281).default,
  // component: lazy(async () => {
  //   topBar.show()
  //   const component = await import('./components/ContactScreen')
  //   topBar.hide()
  //   return component
  // }),
  // getComponent(nextState, cb) {
  //   topBar.show()
  //   require.ensure(
  //     [],
  //     require => {
  //       topBar.hide()
  //       cb(null, require('./components/ContactScreen').default) // eslint-disable-line
  //     },
  //     'ContactScreen',
  //   )
  // },
  exact: true
});

/***/ }),
/* 281 */
/*!*********************************************************!*\
  !*** ./app/screens/Contact/components/ContactScreen.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 116);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var app_config_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/config/data */ 217);
/* harmony import */ var components_ScreenHelmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/ScreenHelmet */ 218);
/* harmony import */ var components_SiteContact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/SiteContact */ 219);





function ContactScreen() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_ScreenHelmet__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: app_config_data__WEBPACK_IMPORTED_MODULE_1__["default"].screens.contact.title,
    description: app_config_data__WEBPACK_IMPORTED_MODULE_1__["default"].screens.contact.description,
    canonicalHref: app_config_data__WEBPACK_IMPORTED_MODULE_1__["default"].screens.contact.canonicalHref
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_SiteContact__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "u-mb5"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ContactScreen);

/***/ }),
/* 282 */
/*!***************************************!*\
  !*** ./app/screens/NotFound/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_NotFoundScreen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/NotFoundScreen */ 265);

/* harmony default export */ __webpack_exports__["default"] = ({
  path: '*',
  component: _components_NotFoundScreen__WEBPACK_IMPORTED_MODULE_0__["default"],
  layoutProps: {
    headerProps: {
      isFixed: true
    }
  },
  exact: true
});

/***/ }),
/* 283 */
/*!*************************************!*\
  !*** ./app/store/configureStore.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ 284);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _rootReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rootReducer */ 285);
/* harmony import */ var _middlewares__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./middlewares */ 289);




function configureStore(initialState, history) {
  const rootReducer = Object(_rootReducer__WEBPACK_IMPORTED_MODULE_1__["default"])(history);
  const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(rootReducer, initialState, _middlewares__WEBPACK_IMPORTED_MODULE_2__["default"]);

  if (false) {}

  return store;
}

/* harmony default export */ __webpack_exports__["default"] = (configureStore);

/***/ }),
/* 284 */
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 285 */
/*!**********************************!*\
  !*** ./app/store/rootReducer.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ 128);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-properties */ 132);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors */ 136);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/for-each */ 143);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor */ 151);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/filter */ 155);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols */ 160);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/keys */ 167);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/defineProperty */ 176);
/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! redux */ 284);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! connected-react-router */ 123);
/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(connected_react_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var app_reducers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/reducers */ 286);










function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_7___default()(object); if (_babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_6___default.a) { var symbols = _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_6___default()(object); if (enumerableOnly) symbols = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_5___default()(symbols).call(symbols, function (sym) { return _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context; _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_3___default()(_context = ownKeys(Object(source), true)).call(_context, function (key) { _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(target, key, source[key]); }); } else if (_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { var _context2; _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_3___default()(_context2 = ownKeys(Object(source))).call(_context2, function (key) { _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4___default()(source, key)); }); } } return target; }





const createRootReducer = history => Object(redux__WEBPACK_IMPORTED_MODULE_9__["combineReducers"])(_objectSpread({}, app_reducers__WEBPACK_IMPORTED_MODULE_11__, {
  router: Object(connected_react_router__WEBPACK_IMPORTED_MODULE_10__["connectRouter"])(history)
}));

/* harmony default export */ __webpack_exports__["default"] = (createRootReducer);

/***/ }),
/* 286 */
/*!*******************************!*\
  !*** ./app/reducers/index.js ***!
  \*******************************/
/*! exports provided: collections */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _collections__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./collections */ 287);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "collections", function() { return _collections__WEBPACK_IMPORTED_MODULE_0__["default"]; });




/***/ }),
/* 287 */
/*!*************************************!*\
  !*** ./app/reducers/collections.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return collections; });
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ 128);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-properties */ 132);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors */ 136);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/for-each */ 143);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor */ 151);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/filter */ 155);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols */ 160);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/keys */ 167);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/defineProperty */ 176);
/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var deepmerge__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! deepmerge */ 288);
/* harmony import */ var deepmerge__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var app_actions_collections__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/actions/collections */ 232);










function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_7___default()(object); if (_babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_6___default.a) { var symbols = _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_6___default()(object); if (enumerableOnly) symbols = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_5___default()(symbols).call(symbols, function (sym) { return _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context; _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_3___default()(_context = ownKeys(Object(source), true)).call(_context, function (key) { _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(target, key, source[key]); }); } else if (_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { var _context2; _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_3___default()(_context2 = ownKeys(Object(source))).call(_context2, function (key) { _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4___default()(source, key)); }); } } return target; }




function collection(state = {
  items: {}
}, type, payload) {
  switch (type) {
    case 'PENDING':
      {
        return _objectSpread({}, state, {
          state: {
            error: false,
            isPending: true,
            isFulfilled: false
          }
        });
      }

    case 'FULFILLED':
      {
        return deepmerge__WEBPACK_IMPORTED_MODULE_9___default()(state, {
          items: payload,
          state: {
            error: false,
            isPending: false,
            isFulfilled: true
          }
        });
      }

    case 'REJECTED':
      {
        return deepmerge__WEBPACK_IMPORTED_MODULE_9___default()(state, {
          state: {
            error: payload,
            isPending: false,
            isFulfilled: true
          }
        });
      }

    default:
      {
        return state;
      }
  }
}

function collections(state = {}, {
  type,
  payload,
  meta
}) {
  switch (type) {
    case "".concat(app_actions_collections__WEBPACK_IMPORTED_MODULE_10__["FETCH_COLLECTION"], "_PENDING"):
      {
        return _objectSpread({}, state, {
          [meta.collectionName]: collection(state[meta.collectionName], 'PENDING')
        });
      }

    case "".concat(app_actions_collections__WEBPACK_IMPORTED_MODULE_10__["FETCH_COLLECTION"], "_FULFILLED"):
      {
        return _objectSpread({}, state, {
          [meta.collectionName]: collection(state[meta.collectionName], 'FULFILLED', payload)
        });
      }

    case "".concat(app_actions_collections__WEBPACK_IMPORTED_MODULE_10__["FETCH_COLLECTION"], "_REJECTED"):
      {
        return _objectSpread({}, state, {
          [meta.collectionName]: collection(state[meta.collectionName], 'REJECTED', payload)
        });
      }

    case "".concat(app_actions_collections__WEBPACK_IMPORTED_MODULE_10__["FETCH_ITEM"], "_PENDING"):
      {
        return deepmerge__WEBPACK_IMPORTED_MODULE_9___default()(state, {
          [meta.collectionName]: {
            items: {
              [meta.fileName]: {
                state: {
                  error: false,
                  isPending: true,
                  isFulfilled: false
                }
              }
            }
          }
        });
      }

    case "".concat(app_actions_collections__WEBPACK_IMPORTED_MODULE_10__["FETCH_ITEM"], "_FULFILLED"):
      {
        return deepmerge__WEBPACK_IMPORTED_MODULE_9___default()(state, {
          [meta.collectionName]: {
            items: {
              [meta.fileName]: _objectSpread({}, payload[meta.fileName], {
                state: {
                  error: false,
                  isPending: false,
                  isFulfilled: true
                }
              })
            }
          }
        });
      }

    case "".concat(app_actions_collections__WEBPACK_IMPORTED_MODULE_10__["FETCH_ITEM"], "_REJECTED"):
      {
        return deepmerge__WEBPACK_IMPORTED_MODULE_9___default()(state, {
          [meta.collectionName]: {
            items: {
              [meta.fileName]: {
                state: {
                  error: payload,
                  isPending: false,
                  isFulfilled: true
                }
              }
            }
          }
        });
      }

    default:
      {
        return state;
      }
  }
}

/***/ }),
/* 288 */
/*!****************************!*\
  !*** external "deepmerge" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("deepmerge");

/***/ }),
/* 289 */
/*!**********************************!*\
  !*** ./app/store/middlewares.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ 284);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ 290);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_promise_middleware__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-promise-middleware */ 291);
/* harmony import */ var redux_promise_middleware__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_promise_middleware__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_immutable_state_invariant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-immutable-state-invariant */ 292);
/* harmony import */ var redux_immutable_state_invariant__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_immutable_state_invariant__WEBPACK_IMPORTED_MODULE_3__);



 // eslint-disable-line

const debug = "production" === 'development';
const middlewares = debug ? Object(redux__WEBPACK_IMPORTED_MODULE_0__["compose"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_immutable_state_invariant__WEBPACK_IMPORTED_MODULE_3___default()(), redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a, redux_promise_middleware__WEBPACK_IMPORTED_MODULE_2___default.a), // redux dev tools
window.devToolsExtension ? window.devToolsExtension() : f => f) : Object(redux__WEBPACK_IMPORTED_MODULE_0__["compose"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a, redux_promise_middleware__WEBPACK_IMPORTED_MODULE_2___default.a));
/* harmony default export */ __webpack_exports__["default"] = (middlewares);

/***/ }),
/* 290 */
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 291 */
/*!*******************************************!*\
  !*** external "redux-promise-middleware" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-promise-middleware");

/***/ }),
/* 292 */
/*!**************************************************!*\
  !*** external "redux-immutable-state-invariant" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-immutable-state-invariant");

/***/ }),
/* 293 */
/*!**********************************!*\
  !*** ./static-build/template.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return template; });
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/json/stringify */ 294);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/promise */ 63);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var cheerio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cheerio */ 298);
/* harmony import */ var cheerio__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cheerio__WEBPACK_IMPORTED_MODULE_2__);


 // eslint-disable-line

function template({
  bodyHTML = '',
  headHTML = '',
  initialState
}) {
  return new _babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_1___default.a((resolve, reject) => {
    try {
      const markup = __webpack_require__(/*! !html-loader!../../dist/index.html */ 299); // eslint-disable-line


      const $ = cheerio__WEBPACK_IMPORTED_MODULE_2___default.a.load(markup);
      $('#root').append(bodyHTML);
      $('head link[rel=manifest]').before(headHTML);
      $('#root').after("<script>window.__INITIAL_STATE__ = ".concat(_babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(initialState), ";</script>"));
      resolve($.html());
    } catch (error) {
      reject(error);
    }
  });
}

/***/ }),
/* 294 */
/*!*******************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/core-js-stable/json/stringify.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js-pure/stable/json/stringify */ 295);

/***/ }),
/* 295 */
/*!*************************************************************!*\
  !*** ../node_modules/core-js-pure/stable/json/stringify.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(/*! ../../es/json/stringify */ 296);

module.exports = parent;


/***/ }),
/* 296 */
/*!*********************************************************!*\
  !*** ../node_modules/core-js-pure/es/json/stringify.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es.json.stringify */ 297);
var core = __webpack_require__(/*! ../../internals/path */ 24);

if (!core.JSON) core.JSON = { stringify: JSON.stringify };

// eslint-disable-next-line no-unused-vars
module.exports = function stringify(it, replacer, space) {
  return core.JSON.stringify.apply(null, arguments);
};


/***/ }),
/* 297 */
/*!*****************************************************************!*\
  !*** ../node_modules/core-js-pure/modules/es.json.stringify.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ 7);
var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ 47);
var fails = __webpack_require__(/*! ../internals/fails */ 11);

var $stringify = getBuiltIn('JSON', 'stringify');
var re = /[\uD800-\uDFFF]/g;
var low = /^[\uD800-\uDBFF]$/;
var hi = /^[\uDC00-\uDFFF]$/;

var fix = function (match, offset, string) {
  var prev = string.charAt(offset - 1);
  var next = string.charAt(offset + 1);
  if ((low.test(match) && !hi.test(next)) || (hi.test(match) && !low.test(prev))) {
    return '\\u' + match.charCodeAt(0).toString(16);
  } return match;
};

var FORCED = fails(function () {
  return $stringify('\uDF06\uD834') !== '"\\udf06\\ud834"'
    || $stringify('\uDEAD') !== '"\\udead"';
});

if ($stringify) {
  // https://github.com/tc39/proposal-well-formed-stringify
  $({ target: 'JSON', stat: true, forced: FORCED }, {
    // eslint-disable-next-line no-unused-vars
    stringify: function stringify(it, replacer, space) {
      var result = $stringify.apply(null, arguments);
      return typeof result == 'string' ? result.replace(re, fix) : result;
    }
  });
}


/***/ }),
/* 298 */
/*!**************************!*\
  !*** external "cheerio" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cheerio");

/***/ }),
/* 299 */
/*!******************************************************************!*\
  !*** ../node_modules/html-loader/dist/cjs.js!../dist/index.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<!DOCTYPE html><html lang=\"es\"><head><meta charset=\"utf-8\"/><meta name=\"theme-color\" content=\"#000000\"/><meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"/><meta property=\"og:type\" content=\"website\"/><meta property=\"og:locale\" content=\"es_LA\"/><link rel=\"manifest\" href=\"/app-manifest.json\"/><link rel=\"shortcut icon\" href=\"/static/icons-ab289d55/favicon.ico\"><link rel=\"icon\" type=\"image/png\" sizes=\"16x16\" href=\"/static/icons-ab289d55/favicon-16x16.png\"><link rel=\"icon\" type=\"image/png\" sizes=\"32x32\" href=\"/static/icons-ab289d55/favicon-32x32.png\"><link rel=\"icon\" type=\"image/png\" sizes=\"48x48\" href=\"/static/icons-ab289d55/favicon-48x48.png\"><link rel=\"manifest\" href=\"/static/icons-ab289d55/manifest.json\"><meta name=\"mobile-web-app-capable\" content=\"yes\"><meta name=\"theme-color\" content=\"#fff\"><meta name=\"application-name\" content=\"wochap\"><link rel=\"apple-touch-icon\" sizes=\"57x57\" href=\"/static/icons-ab289d55/apple-touch-icon-57x57.png\"><link rel=\"apple-touch-icon\" sizes=\"60x60\" href=\"/static/icons-ab289d55/apple-touch-icon-60x60.png\"><link rel=\"apple-touch-icon\" sizes=\"72x72\" href=\"/static/icons-ab289d55/apple-touch-icon-72x72.png\"><link rel=\"apple-touch-icon\" sizes=\"76x76\" href=\"/static/icons-ab289d55/apple-touch-icon-76x76.png\"><link rel=\"apple-touch-icon\" sizes=\"114x114\" href=\"/static/icons-ab289d55/apple-touch-icon-114x114.png\"><link rel=\"apple-touch-icon\" sizes=\"120x120\" href=\"/static/icons-ab289d55/apple-touch-icon-120x120.png\"><link rel=\"apple-touch-icon\" sizes=\"144x144\" href=\"/static/icons-ab289d55/apple-touch-icon-144x144.png\"><link rel=\"apple-touch-icon\" sizes=\"152x152\" href=\"/static/icons-ab289d55/apple-touch-icon-152x152.png\"><link rel=\"apple-touch-icon\" sizes=\"167x167\" href=\"/static/icons-ab289d55/apple-touch-icon-167x167.png\"><link rel=\"apple-touch-icon\" sizes=\"180x180\" href=\"/static/icons-ab289d55/apple-touch-icon-180x180.png\"><link rel=\"apple-touch-icon\" sizes=\"1024x1024\" href=\"/static/icons-ab289d55/apple-touch-icon-1024x1024.png\"><meta name=\"apple-mobile-web-app-capable\" content=\"yes\"><meta name=\"apple-mobile-web-app-status-bar-style\" content=\"black-translucent\"><meta name=\"apple-mobile-web-app-title\" content=\"wochap\"><link rel=\"apple-touch-startup-image\" media=\"(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)\" href=\"/static/icons-ab289d55/apple-touch-startup-image-640x1136.png\"><link rel=\"apple-touch-startup-image\" media=\"(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)\" href=\"/static/icons-ab289d55/apple-touch-startup-image-750x1334.png\"><link rel=\"apple-touch-startup-image\" media=\"(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)\" href=\"/static/icons-ab289d55/apple-touch-startup-image-828x1792.png\"><link rel=\"apple-touch-startup-image\" media=\"(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)\" href=\"/static/icons-ab289d55/apple-touch-startup-image-1125x2436.png\"><link rel=\"apple-touch-startup-image\" media=\"(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)\" href=\"/static/icons-ab289d55/apple-touch-startup-image-1242x2208.png\"><link rel=\"apple-touch-startup-image\" media=\"(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)\" href=\"/static/icons-ab289d55/apple-touch-startup-image-1242x2688.png\"><link rel=\"apple-touch-startup-image\" media=\"(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)\" href=\"/static/icons-ab289d55/apple-touch-startup-image-1536x2048.png\"><link rel=\"apple-touch-startup-image\" media=\"(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)\" href=\"/static/icons-ab289d55/apple-touch-startup-image-1668x2224.png\"><link rel=\"apple-touch-startup-image\" media=\"(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)\" href=\"/static/icons-ab289d55/apple-touch-startup-image-1668x2388.png\"><link rel=\"apple-touch-startup-image\" media=\"(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)\" href=\"/static/icons-ab289d55/apple-touch-startup-image-2048x2732.png\"><link rel=\"apple-touch-startup-image\" media=\"(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)\" href=\"/static/icons-ab289d55/apple-touch-startup-image-1620x2160.png\"><link rel=\"apple-touch-startup-image\" media=\"(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)\" href=\"/static/icons-ab289d55/apple-touch-startup-image-1136x640.png\"><link rel=\"apple-touch-startup-image\" media=\"(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)\" href=\"/static/icons-ab289d55/apple-touch-startup-image-1334x750.png\"><link rel=\"apple-touch-startup-image\" media=\"(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)\" href=\"/static/icons-ab289d55/apple-touch-startup-image-1792x828.png\"><link rel=\"apple-touch-startup-image\" media=\"(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)\" href=\"/static/icons-ab289d55/apple-touch-startup-image-2436x1125.png\"><link rel=\"apple-touch-startup-image\" media=\"(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)\" href=\"/static/icons-ab289d55/apple-touch-startup-image-2208x1242.png\"><link rel=\"apple-touch-startup-image\" media=\"(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)\" href=\"/static/icons-ab289d55/apple-touch-startup-image-2688x1242.png\"><link rel=\"apple-touch-startup-image\" media=\"(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)\" href=\"/static/icons-ab289d55/apple-touch-startup-image-2048x1536.png\"><link rel=\"apple-touch-startup-image\" media=\"(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)\" href=\"/static/icons-ab289d55/apple-touch-startup-image-2224x1668.png\"><link rel=\"apple-touch-startup-image\" media=\"(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)\" href=\"/static/icons-ab289d55/apple-touch-startup-image-2388x1668.png\"><link rel=\"apple-touch-startup-image\" media=\"(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)\" href=\"/static/icons-ab289d55/apple-touch-startup-image-2732x2048.png\"><link rel=\"apple-touch-startup-image\" media=\"(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)\" href=\"/static/icons-ab289d55/apple-touch-startup-image-2160x1620.png\"><link rel=\"icon\" type=\"image/png\" sizes=\"228x228\" href=\"/static/icons-ab289d55/coast-228x228.png\"><meta name=\"msapplication-TileColor\" content=\"#fff\"><meta name=\"msapplication-TileImage\" content=\"/static/icons-ab289d55/mstile-144x144.png\"><meta name=\"msapplication-config\" content=\"/static/icons-ab289d55/browserconfig.xml\"><link rel=\"yandex-tableau-widget\" href=\"/static/icons-ab289d55/yandex-browser-manifest.json\"><link href=\"/static/css/chunk.app.9da17621.css\" rel=\"stylesheet\"></head><body><div id=\"root\"></div><script>\"serviceWorker\"in navigator&&navigator.serviceWorker.register(\"/service-worker.js\").catch(function(r){console.warn(r)})</script><script type=\"text/javascript\">!function(c){function e(e){for(var r,t,n=e[0],o=e[1],a=e[2],i=0,u=[];i<n.length;i++)t=n[i],Object.prototype.hasOwnProperty.call(p,t)&&p[t]&&u.push(p[t][0]),p[t]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(c[r]=o[r]);for(d&&d(e);u.length;)u.shift()();return f.push.apply(f,a||[]),l()}function l(){for(var e,r=0;r<f.length;r++){for(var t=f[r],n=!0,o=1;o<t.length;o++){var a=t[o];0!==p[a]&&(n=!1)}n&&(f.splice(r--,1),e=s(s.s=t[0]))}return e}var t={},p={11:0},f=[];function s(e){if(t[e])return t[e].exports;var r=t[e]={i:e,l:!1,exports:{}};return c[e].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.e=function(o){var e=[],t=p[o];if(0!==t)if(t)e.push(t[2]);else{var r=new Promise(function(e,r){t=p[o]=[e,r]});e.push(t[2]=r);var n,a=document.createElement(\"script\");a.charset=\"utf-8\",a.timeout=120,s.nc&&a.setAttribute(\"nonce\",s.nc),a.src=s.p+\"static/js/chunk.\"+({1:\"fixbrand\",2:\"gean-marroquin\",3:\"la-glorieta\",4:\"posts\",5:\"promise-polyfill\",7:\"ricarica-travel\",8:\"string-prototype-includes\",10:\"vendors~platform\",12:\"works\",13:\"yilancorp\"}[o]||o)+\".\"+{1:\"123c8f7d\",2:\"d7c8ab1e\",3:\"b596c739\",4:\"86480347\",5:\"8788d1ec\",7:\"0a5ad523\",8:\"9d2b3dca\",10:\"d4d4264d\",12:\"87915051\",13:\"025cdebd\"}[o]+\".js\";var i=new Error;n=function(e){a.onerror=a.onload=null,clearTimeout(u);var r=p[o];if(0!==r){if(r){var t=e&&(\"load\"===e.type?\"missing\":e.type),n=e&&e.target&&e.target.src;i.message=\"Loading chunk \"+o+\" failed.\\n(\"+t+\": \"+n+\")\",i.name=\"ChunkLoadError\",i.type=t,i.request=n,r[1](i)}p[o]=void 0}};var u=setTimeout(function(){n({type:\"timeout\",target:a})},12e4);a.onerror=a.onload=n,document.head.appendChild(a)}return Promise.all(e)},s.m=c,s.c=t,s.d=function(e,r,t){s.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},s.r=function(e){\"undefined\"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:\"Module\"}),Object.defineProperty(e,\"__esModule\",{value:!0})},s.t=function(r,e){if(1&e&&(r=s(r)),8&e)return r;if(4&e&&\"object\"==typeof r&&r&&r.__esModule)return r;var t=Object.create(null);if(s.r(t),Object.defineProperty(t,\"default\",{enumerable:!0,value:r}),2&e&&\"string\"!=typeof r)for(var n in r)s.d(t,n,function(e){return r[e]}.bind(null,n));return t},s.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(r,\"a\",r),r},s.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},s.p=\"/\",s.oe=function(e){throw console.error(e),e};var r=window.webpackJsonp=window.webpackJsonp||[],n=r.push.bind(r);r.push=e,r=r.slice();for(var o=0;o<r.length;o++)e(r[o]);var d=n;l()}([])</script><script type=\"text/javascript\" src=\"/static/js/chunk.react.75dd0fb7.js\"></script><script type=\"text/javascript\" src=\"/static/js/chunk.vendor.a661d8a0.js\"></script><script type=\"text/javascript\" src=\"/static/js/chunk.app.61603406.js\"></script></body></html>";
// Exports
module.exports = code;

/***/ }),
/* 300 */
/*!************************************************************!*\
  !*** ../lib/loaders/markdown.js!../data/works/fixbrand.md ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"frontMatter":{"slug":"fixbrand","fileName":"fixbrand","date":"21-12-2015","formattedDate":"Diciembre 2015","imageUrl":"//res.cloudinary.com/wochap/image/upload/v1495070100/works/fixbrand.png","heroImageUrl":"//res.cloudinary.com/wochap/image/upload/v1495070206/wochap/hero/fixbrand.jpg","title":"Fixbrand","tasks":"Desarrollo landing page y panel de administración","role":"Full-stack developer","siteLink":"http://fixbrand.com/","description":"Fixbrand es una agencia creativa de marcas que apuesta por el trabajo estratégico, creativo y sostenido en el tiempo.","tags":["Full-stack","Laravel","Jquery","Stylus","Gulp","Freelance"]},"bodyHtml":"<h2 id=\"reto\">Reto</h2>\n<p>Realizar un sitio web gestionable, con animaciones entre paginas.</p>\n<h2 id=\"soluci-n\">Solución</h2>\n<p>Realize el panel de administracion con <a href=\"http://getbootstrap.com/\">Bootstrap</a> y  <a href=\"https://laravel.com/\">Laravel</a>, y el landing page con <a href=\"https://jquery.com\">Jquery</a>.</p>\n<h3 id=\"tecnolog-as-destacadas-\">Tecnologías destacadas:</h3>\n<ul>\n<li><a href=\"https://css-tricks.com/snippets/css/a-guide-to-flexbox/\">CSS FlexBox</a></li>\n</ul>\n<h3 id=\"workflow-\">Workflow:</h3>\n<ul>\n<li><strong>PHP:</strong> <a href=\"https://laravel.com/\">Laravel</a>.</li>\n<li><strong>HTML:</strong> <a href=\"https://laravel.com/docs/5.3/blade\">Blade</a>.</li>\n<li><strong>CSS:</strong> <a href=\"http://getbootstrap.com/\">Bootstrap</a>, <a href=\"http://stylus-lang.com/\">Stylus</a>, <a href=\"https://suitcss.github.io/\">SuitCSS</a>.</li>\n<li><strong>JS:</strong> <a href=\"https://jquery.com/\">Jquery</a>.</li>\n<li><strong>Build System:</strong> <a href=\"http://gulpjs.com/\">Gulp</a>, <a href=\"https://laravel.com/docs/5.3/elixir\">Laravel elixir</a>.</li>\n</ul>\n<h3 id=\"logros-\">Logros:</h3>\n<ul>\n<li>Simular un <code>SPA</code> con <a href=\"https://jquery.com/\">Jquery</a>:</li>\n</ul>\n<div>\n  <img src=\"//res.cloudinary.com/wochap/image/upload/v1495070187/wochap/body/fixbrand-spa.gif\" alt=\"Portafolio del sitio web Fixbrand\">\n</div>\n\n<ul>\n<li>Desarrollar 3 <code>CRUD</code> (portafolio, contacto, clientes), tanto en el <code>Back-end</code> como en el <code>Front-end</code>.</li>\n<li>Subir una o varias imagenes al servidor haciendo uso de <code>AJAX</code>.</li>\n</ul>\n<h2 id=\"experiencia\">Experiencia</h2>\n<p>Como primer proyecto remoto, quede muy satisfecho, la experiencia de trabajar en pijamas es muy confortable aunque requiere de bastante <strong>disciplina</strong>.</p>\n"}

/***/ }),
/* 301 */
/*!******************************************************************!*\
  !*** ../lib/loaders/markdown.js!../data/works/gean-marroquin.md ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"frontMatter":{"slug":"gean-marroquin","fileName":"gean-marroquin","date":"12-01-2017","formattedDate":"Enero 2017","imageUrl":"//res.cloudinary.com/wochap/image/upload/v1495070100/works/gean-marroquin.png","title":"Gean Marroquin","source":"https://github.com/wochap/wochap.github.io","role":"Front-end developer","siteLink":"https://geanmarroquin.com/","description":"Mi sitio personal.","tags":["PWA","SPA","SSR","Unit testing","Offline first","Static web site","Javascript","SASS","Webpack","Personal"]},"bodyHtml":"<p>¿Cual es la mejor manera de aprender algo? poniendolo en practica, es por eso que me propuse a crear algo que me permitiera demostrar mis habilidades y a la vez practicar lo aprendido. Entre las cosas que queria demostrar:</p>\n<ul>\n<li><a href=\"https://www.youtube.com/watch?v=IIRj8DftkqE\">Offline first</a>.</li>\n<li><a href=\"https://www.youtube.com/watch?v=QH94CXVv3UE\">Code splitting</a>.</li>\n<li>TDD.</li>\n<li>Manejo asincrono en javascript.</li>\n</ul>\n<h2 id=\"reto\">Reto</h2>\n<p>Crear mi sitio personal, sin un servidor para poder subirlo a <a href=\"https://pages.github.com/\">GH Pages</a>, y permitirme tener contenido dinamico (portafolio, blog) .</p>\n<h2 id=\"soluci-n\">Solución</h2>\n<p>Despues de investigar, y habiendome inspirado de proyectos que ya lograban lo que me proponia:</p>\n<ul>\n<li><a href=\"https://github.com/gatsbyjs/gatsby\">Gatsby</a></li>\n<li><a href=\"https://phenomic.io/\">Phenomic</a></li>\n</ul>\n<p>Llege a la conclusion que las mejores herramientas para este trabajo eran <a href=\"https://webpack.github.io/\">Webpack</a> con <a href=\"https://facebook.github.io/react/\">React</a> o <a href=\"https://vuejs.org/\">VueJS</a>, asi que realize demos con ambos frameworks para elegir cual era el mas conveniente:</p>\n<ul>\n<li><a href=\"https://github.com/wochap/vue-static-blog\">vue-static-blog</a></li>\n<li><a href=\"https://github.com/wochap/webpack-react-static-boilerplate/tree/redux\">webpack-react-static-boilerplate</a></li>\n</ul>\n<p>Me decidi por <a href=\"https://facebook.github.io/react/\">React</a> porque no tenia un proyecto que mostrar con el, el <a href=\"https://assets.materialup.com/uploads/d8f0a829-a3ff-4174-ac7e-d8021904463b/attachment.jpg\">diseño</a> lo encontre en <a href=\"https://site.uplabs.com/\">Up Labs</a>.</p>\n<p>Con todo en orden, comenze por maquetar el diseño, luego cree las pruebas y los componentes; añadí la configuracion necesaria para pre renderizar (con <a href=\"https://github.com/markdalgleish/static-site-generator-webpack-plugin\">static-site-generator-webpack-plugin</a>) las rutas de mi aplicacion, una vez que todo funcionaba añadi <a href=\"https://github.com/reactjs/redux\">redux</a> y refactorize, y refactorize y ...ahora me encuentro añadiendo trabajos a mi portafolio y pronto articulos.</p>\n<h2 id=\"tecnolog-as-destacadas-\">Tecnologías destacadas:</h2>\n<ul>\n<li><a href=\"https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API\">Service worker</a></li>\n<li><a href=\"https://es.wikipedia.org/wiki/JSONP\">JSONP</a></li>\n<li><a href=\"https://css-tricks.com/snippets/css/a-guide-to-flexbox/\">CSS FlexBox</a></li>\n</ul>\n<h2 id=\"workflow-\">Workflow:</h2>\n<ul>\n<li><strong>CSS:</strong> <a href=\"http://stylus-lang.com/\">SASS</a>, <a href=\"http://csswizardry.com/2015/08/bemit-taking-the-bem-naming-convention-a-step-further/\">BEMIT</a>, <a href=\"http://csswizardry.net/talks/2014/11/itcss-dafed.pdf\">ITCSS</a>, <a href=\"https://github.com/wocss\">WOCSS</a>.</li>\n<li><strong>JS:</strong> <a href=\"https://facebook.github.io/react/\">React</a> + <a href=\"https://github.com/ReactTraining/react-router\">React router v3</a> + <a href=\"http://redux.js.org/\">Redux</a>, <a href=\"http://www.2ality.com/2016/02/ecmascript-2017.html\">ES2017</a>, <a href=\"http://eslint.org/\">ESLint</a>, <a href=\"https://facebook.github.io/jest/\">Jest</a> + <a href=\"https://github.com/airbnb/enzyme\">Enzyme</a>, <a href=\"https://gist.github.com/ryanflorence/daafb1e3cb8ad740b346\">by Route hierarchy</a>.</li>\n<li><strong>Build System:</strong> <a href=\"https://webpack.github.io/\">Webpack</a> + <a href=\"https://babeljs.io/\">Babel</a> + <a href=\"https://github.com/wochap/wochap.github.io/tree/dev/build/webpack/loaders\">custom-loaders</a> + <a href=\"https://github.com/GoogleChrome/sw-precache\">sw-precache</a>.</li>\n</ul>\n<h2 id=\"logros-\">Logros:</h2>\n<ul>\n<li>Crear loaders propios en <a href=\"https://webpack.github.io/\">Webpack</a>.</li>\n<li><strong>Optimistic updates</strong>.</li>\n<li>El sitio no necesita cargar los scripts para que puedas navegar por el, gracias a que todas las paginas son generadas por <a href=\"https://webpack.github.io/\">Webpack</a> y <a href=\"https://facebook.github.io/react/\">React</a>.</li>\n</ul>\n"}

/***/ }),
/* 302 */
/*!***************************************************************!*\
  !*** ../lib/loaders/markdown.js!../data/works/la-glorieta.md ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"frontMatter":{"slug":"la-glorieta","fileName":"la-glorieta","date":"26-08-2015","formattedDate":"Agosto 2015","imageUrl":"//res.cloudinary.com/wochap/image/upload/v1495070100/works/la-glorieta.jpg","heroImageUrl":"//res.cloudinary.com/wochap/image/upload/v1495070204/wochap/hero/la-glorieta.jpg","title":"La Glorieta","tasks":"Desarrollo de landing page","role":"Front-end developer","siteLink":"http://cmsreservas.noveltie.la","description":"La Glorieta es un restaurant representante de la culinaria tacneña en múltiples eventos y concursos.","tags":["Front-end","KnockoutJS","Jquery","Stylus","Laravel","Gulp","Noveltie"]},"bodyHtml":"<h2 id=\"reto\">Reto</h2>\n<p>Un sitio web que permitiera a sus clientes realizar reservas online, ademas de mostrar información de la misma, sus noticias y información de contacto.</p>\n<h2 id=\"soluci-n\">Solución</h2>\n<p>Como el sitio requeria de mucha manipulacion del <code>DOM</code>, aprendí y desarrolle el sitio con  <a href=\"knockoutjs.com\">KnockoutJS</a> y <a href=\"http://sammyjs.org/\">SammyJS</a> para manejar las rutas del catalogo.</p>\n<h2 id=\"tecnolog-as-destacadas-\">Tecnologías destacadas:</h2>\n<ul>\n<li><a href=\"https://css-tricks.com/snippets/css/a-guide-to-flexbox/\">CSS FlexBox</a></li>\n<li><a href=\"https://developer.mozilla.org/en-US/docs/Web/API/Storage/LocalStorage\">BROWSER LocalStorage</a></li>\n</ul>\n<h2 id=\"workflow-\">Workflow:</h2>\n<ul>\n<li><strong>HTML:</strong> <a href=\"https://laravel.com/docs/5.3/blade\">Blade</a>.</li>\n<li><strong>CSS:</strong> <a href=\"http://stylus-lang.com/\">Stylus</a>, <a href=\"https://suitcss.github.io/\">SuitCSS</a>.</li>\n<li><strong>JS:</strong> <a href=\"http://knockoutjs.com/\">KnockoutJS</a> + <a href=\"https://jquery.com/\">Jquery</a>, <a href=\"https://babeljs.io/learn-es2015/\">ES2015</a>.</li>\n<li><strong>Build System:</strong> <a href=\"http://gulpjs.com/\">Gulp</a>, <a href=\"https://laravel.com/docs/5.3/elixir\">Laravel elixir</a>, <a href=\"http://browserify.org/\">Browserify</a>, <a href=\"https://babeljs.io/\">Babel</a>.</li>\n</ul>\n<h2 id=\"logros-\">Logros:</h2>\n<ul>\n<li>Desarrollar un carrito de compras con persistencia de datos, .</li>\n</ul>\n<p><img src=\"//res.cloudinary.com/wochap/image/upload/v1495070180/wochap/body/glorieta-carrito.jpg\" alt=\"Carrito de compras del sitio web La Glorieta\"></p>\n<ul>\n<li>Desarrollar un catalogo de items, con categorias, sub categorias, ademas de <strong>paginación</strong>, y <strong>busqueda</strong>. Los datos son consumidos por <code>AJAX</code>.</li>\n</ul>\n<div>\n  <img src=\"//res.cloudinary.com/wochap/image/upload/v1495070190/wochap/body/glorieta-catalogo.jpg\" alt=\"Catalogo de item del sitio web La Glorieta\">\n</div>\n\n<ul>\n<li>Implementar calculos y actualizaciones del DOM complejas, un claro <strong>ejemplo</strong> es el formulario de proforma, en cada seccion la suma de cantidades debe ser igual al <code>numero de personas</code>.</li>\n</ul>\n<p><img src=\"//res.cloudinary.com/wochap/image/upload/v1495070186/wochap/body/glorieta-reserva.gif\" alt=\"Formulario de reserva del sitio web La Glorieta\"></p>\n<ul>\n<li>Aprender <a href=\"http://knockoutjs.com/\">KnockoutJS</a>.</li>\n</ul>\n<h2 id=\"experiencia\">Experiencia</h2>\n<p><strong>La Glorieta</strong> es el primer <strong>proyecto real</strong> (es decir ser usado por personas) que desarrollé, y no fue facil, cuando empeze el proyecto mis conocimientos llegaban a solo poder maquetar, pero al termino del mismo acabe aprendiendo <a href=\"http://knockoutjs.com/\">KnockoutJS</a>, aplique <code>POO</code> y entendi como funcionaba el <code>data-binding</code>.</p>\n<p>Una de las mejores cosas al desarrollar el sitio, fue que como primer <code>Front-end developer</code> en <a href=\"https://noveltie.la/\">Noveltie</a> me confiaron todo el desarrollo <code>Front-end</code>.</p>\n"}

/***/ }),
/* 303 */
/*!*******************************************************************!*\
  !*** ../lib/loaders/markdown.js!../data/works/ricarica-travel.md ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"frontMatter":{"slug":"ricarica-travel","fileName":"ricarica-travel","date":"19-05-2016","formattedDate":"Mayo 2016","imageUrl":"//res.cloudinary.com/wochap/image/upload/v1495070101/works/ricarica-travel.png","heroImageUrl":"//res.cloudinary.com/wochap/image/upload/v1495070205/wochap/hero/ricarica-travel.jpg","title":"RicaRica Travel","role":"Front-end developer","siteLink":"http://ricaricatravel.com/","description":"RicaRica Travel es una agencia de turismo.","tags":["SPA","i18n","Front-end","VueJS","Jquery","SASS","Laravel","Webpack","Noveltie"]},"bodyHtml":"<h2 id=\"reto\">Reto</h2>\n<p>Desarrollar un <strong>SPA</strong> con <strong>i18n</strong>, <strong>carrito de compras</strong> y <strong>pasarela de pago</strong>.</p>\n<h2 id=\"soluci-n\">Solución</h2>\n<p><strong>RicaRica Travel</strong> (agencia de turismo) fue uno de los proyectos mas complejos (tanto el diseño como la funcionalidad) que me haya tocado realizar. El desarrollo se hizo bajo un marco de trabajo agil: <strong>Scrum</strong>.</p>\n<p>Ya que el sitio requeria de mucha manipulacion del <code>DOM</code>, trabaje con <a href=\"https://vuejs.org/\">VueJS</a>. Para manejar los datos del carrito y formularios añadí <a href=\"https://github.com/vuejs/vuex\">Vuex</a> y <a href=\"https://github.com/vuejs/vue-router\">vue-router</a> para manejar las rutas.</p>\n<h3 id=\"tecnolog-as-destacadas-\">Tecnologías destacadas:</h3>\n<ul>\n<li><a href=\"https://developer.mozilla.org/es/docs/Web/API/Fetch_API\">Fetch</a></li>\n<li><a href=\"https://developer.mozilla.org/en-US/docs/Web/API/Storage/LocalStorage\">LocalStorage</a></li>\n<li><a href=\"https://developer.mozilla.org/es/docs/Web/CSS/Transiciones_de_CSS\">CSS Transitions</a></li>\n<li><a href=\"https://css-tricks.com/snippets/css/a-guide-to-flexbox/\">CSS FlexBox</a></li>\n</ul>\n<h3 id=\"workflow-\">Workflow:</h3>\n<ul>\n<li><strong>CSS:</strong> <a href=\"http://stylus-lang.com/\">SASS</a>, <a href=\"http://csswizardry.com/2015/08/bemit-taking-the-bem-naming-convention-a-step-further/\">BEMIT</a>, <a href=\"http://csswizardry.net/talks/2014/11/itcss-dafed.pdf\">ITCSS</a>.</li>\n<li><strong>JS:</strong> <a href=\"https://vuejs.org/\">VueJS</a> + <a href=\"https://github.com/vuejs/vue-router\">vue-router</a> + <a href=\"https://github.com/vuejs/vuex/\">vuex</a>, <a href=\"https://jquery.com/\">Jquery</a>, <a href=\"https://babeljs.io/learn-es2015/\">ES2015</a>, <a href=\"http://eslint.org/\">ESLint</a>, <a href=\"https://gist.github.com/ryanflorence/daafb1e3cb8ad740b346\">by Route hierarchy</a>.</li>\n<li><strong>Build System:</strong> <a href=\"https://webpack.github.io/\">Webpack</a> + <a href=\"https://babeljs.io/\">Babel</a>.</li>\n</ul>\n<h3 id=\"logros-\">Logros:</h3>\n<ul>\n<li>Implementar <code>I18n</code> (internacionalización), mi primer proyecto multi idioma, logrado con <a href=\"https://github.com/vuejs/vuex/\">vuex</a>.</li>\n</ul>\n<p><img src=\"//res.cloudinary.com/wochap/image/upload/v1495070196/wochap/body/ricarica-travel-i18n.gif\" alt=\"RicaRica Travel i18n demo\"></p>\n<ul>\n<li>Crear un <code>SPA</code> (Single Page Application), hecho con <a href=\"https://github.com/vuejs/vue-router\">vue-router</a>, las animaciones fueron hechas con <a href=\"http://v1.vuejs.org/guide/transitions.html#CSS-Transitions\">CSS-Transitions</a>.</li>\n</ul>\n<p><img src=\"//res.cloudinary.com/wochap/image/upload/v1495070194/wochap/body/ricarica-travel-spa.gif\" alt=\"RicaRica Travel spa demo\"></p>\n<ul>\n<li>Pasarela de pagos.</li>\n</ul>\n<div>\n  <img src=\"//res.cloudinary.com/wochap/image/upload/v1495070174/wochap/body/ricarica-travel-payment.jpg\" alt=\"RicaRica Travel pasarela de pago\">\n</div>\n\n<ul>\n<li>Aprender <a href=\"https://vuejs.org/\">VueJS</a>.</li>\n</ul>\n<h2 id=\"experiencia\">Experiencia</h2>\n<p>Otro proyecto con grandes desafios, y una vez más... la complejidad de la aplicación me llevo a reemplazar <a href=\"http://knockoutjs.com/\">KnockoutJS</a> (framework actual que usaba), por uno mucho mas robusto: <a href=\"https://vuejs.org/\">VueJS</a> (luego de revisar <a href=\"https://facebook.github.io/react/\">React</a> y  <a href=\"http://aurelia.io/\">Aurelia</a>).</p>\n<p>Me decidi por <a href=\"https://vuejs.org/\">VueJS</a> ya que su curva de aprendizaje era bastante corta, llevaba todo lo que requeria, y ademas contaba con lo mejor de cada framework antes mencionados: <strong>componentes</strong>, <strong>directivas</strong>, <strong>data-binding</strong>.</p>\n"}

/***/ }),
/* 304 */
/*!*************************************************************!*\
  !*** ../lib/loaders/markdown.js!../data/works/yilancorp.md ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"frontMatter":{"slug":"yilancorp","fileName":"yilancorp","date":"10-01-2017","formattedDate":"Enero 2017","imageUrl":"//res.cloudinary.com/wochap/image/upload/v1495070101/works/yilancorp.png","heroImageUrl":"//res.cloudinary.com/wochap/image/upload/v1495070203/wochap/hero/yilancorp.jpg","title":"Yilancorp","tasks":"Desarrollo de landing page.","role":"Front-end developer","siteLink":"http://yilancorp.com/","description":"Yilancorp es una empresa que ofrece productos y servicios: inpeccion de mercaderías, contizaciones y verificacion de fabricas.","tags":["Front-end","Jquery","SASS","Webpack","Freelance"]},"bodyHtml":"<h2 id=\"resumen\">Resumen</h2>\n<p>Gracias a la experiencia con anteriores proyectos, fue facil desarrollar el sitio, haciendo uso de mi framework personal <a href=\"https://github.com/wocss\">wocss</a> (inspirado en <a href=\"https://github.com/inuitcss\">InuitCSS</a>) y <a href=\"https://jquery.com/\">Jquery</a>, para las animaciones use <a href=\"http://velocityjs.org/\">VelocityJS</a>, tambien hize uso de <a href=\"http://materializecss.com/scrollspy.html\">Scrollspy</a> (modulo de <a href=\"http://materializecss.com/\">MaterializeCSS</a>), tuve que modificarlo para que funcionara con un diferente <code>scroll container</code>.</p>\n<h2 id=\"tecnolog-as-destacadas-\">Tecnologías destacadas:</h2>\n<ul>\n<li><a href=\"https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API\">Service worker</a></li>\n<li><a href=\"https://developer.mozilla.org/es/docs/Web/CSS/CSS_Animations/Usando_animaciones_CSS\">CSS Animations</a></li>\n<li><a href=\"https://es.wikipedia.org/wiki/JSONP\">JSONP</a></li>\n</ul>\n<div>\n  <img src=\"//res.cloudinary.com/wochap/image/upload/v1495070174/wochap/body/yilancorp-services.gif\" alt=\"JSONP demo\">\n</div>\n\n<ul>\n<li><a href=\"https://css-tricks.com/snippets/css/a-guide-to-flexbox/\">CSS FlexBox</a></li>\n</ul>\n<h2 id=\"workflow-\">Workflow:</h2>\n<ul>\n<li><strong>CSS:</strong> <a href=\"http://stylus-lang.com/\">SASS</a>, <a href=\"http://csswizardry.com/2015/08/bemit-taking-the-bem-naming-convention-a-step-further/\">BEMIT</a>, <a href=\"http://csswizardry.net/talks/2014/11/itcss-dafed.pdf\">ITCSS</a>, <a href=\"https://github.com/wocss\">WOCSS</a>.</li>\n<li><strong>JS:</strong> <a href=\"https://jquery.com/\">Jquery</a>, <a href=\"https://babeljs.io/learn-es2015/\">ES2015</a>, <a href=\"http://eslint.org/\">ESLint</a>.</li>\n<li><strong>Build System:</strong> <a href=\"https://webpack.github.io/\">Webpack</a> + <a href=\"https://babeljs.io/\">Babel</a> + <a href=\"https://github.com/wochap/wochap.github.io/tree/dev/build/webpack/loaders\">custom-loaders</a>.</li>\n</ul>\n<h2 id=\"logros-\">Logros:</h2>\n<ul>\n<li>Personalizar el plugin <a href=\"http://materializecss.com/scrollspy.html\">Scrollspy</a> de <a href=\"http://materializecss.com/\">MaterializeCSS</a>, para que funcionase con un diferente <code>scroll container</code>.</li>\n<li><code>Fancy animations</code>.</li>\n</ul>\n"}

/***/ }),
/* 305 */
/*!****************************************************************!*\
  !*** ../data/posts sync !../lib/loaders/front-matter.js \.md$ ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 305;

/***/ }),
/* 306 */
/*!****************************************************************!*\
  !*** ../data/works sync !../lib/loaders/front-matter.js \.md$ ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./fixbrand.md": 307,
	"./gean-marroquin.md": 308,
	"./la-glorieta.md": 309,
	"./ricarica-travel.md": 310,
	"./yilancorp.md": 311
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
webpackContext.id = 306;

/***/ }),
/* 307 */
/*!****************************************************************!*\
  !*** ../lib/loaders/front-matter.js!../data/works/fixbrand.md ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"frontMatter":{"slug":"fixbrand","fileName":"fixbrand","date":"21-12-2015","formattedDate":"Diciembre 2015","imageUrl":"//res.cloudinary.com/wochap/image/upload/v1495070100/works/fixbrand.png","heroImageUrl":"//res.cloudinary.com/wochap/image/upload/v1495070206/wochap/hero/fixbrand.jpg","title":"Fixbrand","tasks":"Desarrollo landing page y panel de administración","role":"Full-stack developer","siteLink":"http://fixbrand.com/","description":"Fixbrand es una agencia creativa de marcas que apuesta por el trabajo estratégico, creativo y sostenido en el tiempo.","tags":["Full-stack","Laravel","Jquery","Stylus","Gulp","Freelance"]}}

/***/ }),
/* 308 */
/*!**********************************************************************!*\
  !*** ../lib/loaders/front-matter.js!../data/works/gean-marroquin.md ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"frontMatter":{"slug":"gean-marroquin","fileName":"gean-marroquin","date":"12-01-2017","formattedDate":"Enero 2017","imageUrl":"//res.cloudinary.com/wochap/image/upload/v1495070100/works/gean-marroquin.png","title":"Gean Marroquin","source":"https://github.com/wochap/wochap.github.io","role":"Front-end developer","siteLink":"https://geanmarroquin.com/","description":"Mi sitio personal.","tags":["PWA","SPA","SSR","Unit testing","Offline first","Static web site","Javascript","SASS","Webpack","Personal"]}}

/***/ }),
/* 309 */
/*!*******************************************************************!*\
  !*** ../lib/loaders/front-matter.js!../data/works/la-glorieta.md ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"frontMatter":{"slug":"la-glorieta","fileName":"la-glorieta","date":"26-08-2015","formattedDate":"Agosto 2015","imageUrl":"//res.cloudinary.com/wochap/image/upload/v1495070100/works/la-glorieta.jpg","heroImageUrl":"//res.cloudinary.com/wochap/image/upload/v1495070204/wochap/hero/la-glorieta.jpg","title":"La Glorieta","tasks":"Desarrollo de landing page","role":"Front-end developer","siteLink":"http://cmsreservas.noveltie.la","description":"La Glorieta es un restaurant representante de la culinaria tacneña en múltiples eventos y concursos.","tags":["Front-end","KnockoutJS","Jquery","Stylus","Laravel","Gulp","Noveltie"]}}

/***/ }),
/* 310 */
/*!***********************************************************************!*\
  !*** ../lib/loaders/front-matter.js!../data/works/ricarica-travel.md ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"frontMatter":{"slug":"ricarica-travel","fileName":"ricarica-travel","date":"19-05-2016","formattedDate":"Mayo 2016","imageUrl":"//res.cloudinary.com/wochap/image/upload/v1495070101/works/ricarica-travel.png","heroImageUrl":"//res.cloudinary.com/wochap/image/upload/v1495070205/wochap/hero/ricarica-travel.jpg","title":"RicaRica Travel","role":"Front-end developer","siteLink":"http://ricaricatravel.com/","description":"RicaRica Travel es una agencia de turismo.","tags":["SPA","i18n","Front-end","VueJS","Jquery","SASS","Laravel","Webpack","Noveltie"]}}

/***/ }),
/* 311 */
/*!*****************************************************************!*\
  !*** ../lib/loaders/front-matter.js!../data/works/yilancorp.md ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"frontMatter":{"slug":"yilancorp","fileName":"yilancorp","date":"10-01-2017","formattedDate":"Enero 2017","imageUrl":"//res.cloudinary.com/wochap/image/upload/v1495070101/works/yilancorp.png","heroImageUrl":"//res.cloudinary.com/wochap/image/upload/v1495070203/wochap/hero/yilancorp.jpg","title":"Yilancorp","tasks":"Desarrollo de landing page.","role":"Front-end developer","siteLink":"http://yilancorp.com/","description":"Yilancorp es una empresa que ofrece productos y servicios: inpeccion de mercaderías, contizaciones y verificacion de fabricas.","tags":["Front-end","Jquery","SASS","Webpack","Freelance"]}}

/***/ })
/******/ ]);