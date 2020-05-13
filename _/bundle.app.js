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
/* harmony import */ var app_store_configureStore__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/store/configureStore */ 325);
/* harmony import */ var app_actions_collections__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/actions/collections */ 249);
/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./template */ 335);















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
    childRoutes = [],
    indexRoute
  } = _ref,
      config = _babel_runtime_corejs3_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_14___default()(_ref, ["prevPaths", "key", "exact", "path", "childRoutes", "indexRoute"]);

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

  if (indexRoute || (childRoutes === null || childRoutes === void 0 ? void 0 : childRoutes.length) > 0) {
    children = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_17__["Switch"], null, indexRoute ? generateRoutes(_objectSpread({}, indexRoute, {
      prevPaths: paths
    })) : null, _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_8___default()(childRoutes).call(childRoutes, (route, i) => generateRoutes(_objectSpread({}, route, {
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
  // eslint-disable-next-line
  indexRoute: prop_types__WEBPACK_IMPORTED_MODULE_16___default.a.object,
  exact: prop_types__WEBPACK_IMPORTED_MODULE_16___default.a.bool.isRequired,
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
/* harmony import */ var app_screens_Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/screens/Home */ 232);
/* harmony import */ var app_screens_About__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/screens/About */ 291);
/* harmony import */ var app_screens_Works__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/screens/Works */ 295);
/* harmony import */ var app_screens_Blog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/screens/Blog */ 308);
/* harmony import */ var app_screens_Contact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/screens/Contact */ 322);
/* harmony import */ var app_screens_NotFound__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/screens/NotFound */ 324);







/* harmony default export */ __webpack_exports__["default"] = ({
  path: '/',
  component: app_components_App__WEBPACK_IMPORTED_MODULE_0__["default"],
  indexRoute: app_screens_Home__WEBPACK_IMPORTED_MODULE_1__["default"],
  childRoutes: [app_screens_About__WEBPACK_IMPORTED_MODULE_2__["default"], app_screens_Works__WEBPACK_IMPORTED_MODULE_3__["default"], app_screens_Blog__WEBPACK_IMPORTED_MODULE_4__["default"], app_screens_Contact__WEBPACK_IMPORTED_MODULE_5__["default"], app_screens_NotFound__WEBPACK_IMPORTED_MODULE_6__["default"]]
});

/***/ }),
/* 203 */
/*!********************************!*\
  !*** ./app/components/App.jsx ***!
  \********************************/
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
  } else if (matchRoute(pathname, '/works/:fileName') || matchRoute(pathname, '/blog/:fileName')) {
    headerProps = {
      isFixed: true
    };
  } else if (matchRoute(pathname, '/blog') || matchRoute(pathname, '/works') || matchRoute(pathname, '/contact') || matchRoute(pathname, '/about')) {
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
/*!*********************************************!*\
  !*** ./app/shared/components/AppLayout.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 116);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ 201);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SiteHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SiteHeader */ 205);
/* harmony import */ var _SiteFooter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SiteFooter */ 231);





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
/*!**********************************************!*\
  !*** ./app/shared/components/SiteHeader.jsx ***!
  \**********************************************/
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
/* harmony import */ var _ThemeToggler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ThemeToggler */ 214);








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
    }, "Gean ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), " Marroquin")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "u-flex u-items-center"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
      className: "o-dialog c-site-nav ".concat(isNavOpen ? 'is-open' : '')
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
      className: "o-dialog__wrapper"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["NavLink"], {
      className: "o-btn c-site-nav__link",
      to: "/about",
      onClick: this._closeNav,
      activeClassName: "is-active"
    }, "Sobre mi")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_SiteHeaderLink__WEBPACK_IMPORTED_MODULE_4__["default"], {
      title: "Blog",
      isHome: isHome,
      props: isHome ? {
        href: '#blog',
        onClick: this._closeNav
      } : {
        to: '/blog',
        onClick: this._closeNav,
        activeClassName: 'is-active'
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_SiteHeaderLink__WEBPACK_IMPORTED_MODULE_4__["default"], {
      title: "Portafolio",
      isHome: isHome,
      props: isHome ? {
        href: '#works',
        onClick: this._closeNav
      } : {
        to: '/works',
        onClick: this._closeNav,
        activeClassName: 'is-active'
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_SiteHeaderLink__WEBPACK_IMPORTED_MODULE_4__["default"], {
      title: "Cont\xE1ctame",
      isHome: isHome,
      props: isHome ? {
        href: '#contact',
        onClick: this._closeNav
      } : {
        to: '/contact',
        onClick: this._closeNav,
        activeClassName: 'is-active'
      }
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ThemeToggler__WEBPACK_IMPORTED_MODULE_6__["default"], {
      className: "u-ml4"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Hamburger__WEBPACK_IMPORTED_MODULE_5__["default"], {
      className: "c-site-header__btn-toggle ".concat(isNavOpen ? 'is-active' : '', " u-hide@laptop"),
      onClick: this._toggleNav,
      isOpen: isNavOpen
    })));
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
/*!**************************************************!*\
  !*** ./app/shared/components/SiteHeaderLink.jsx ***!
  \**************************************************/
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
/*!*********************************************!*\
  !*** ./app/shared/components/Hamburger.jsx ***!
  \*********************************************/
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
/*!************************************************!*\
  !*** ./app/shared/components/ThemeToggler.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ 215);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ 116);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby_plugin_dark_mode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby-plugin-dark-mode */ 230);
/* harmony import */ var gatsby_plugin_dark_mode__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gatsby_plugin_dark_mode__WEBPACK_IMPORTED_MODULE_2__);

 // @ts-ignore



const Button = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("button", {
  target: "eegbprv0",
  label: "Button"
})("label:ThemeToggler;cursor:pointer;font-size:2em;text-align:center;width:46px;&:hover{outline:none;}color:", props => props.color, ";" + ( true ? "" : undefined));

function ThemeToggler({
  className
}) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby_plugin_dark_mode__WEBPACK_IMPORTED_MODULE_2__["ThemeToggler"], null, ({
    theme,
    toggleTheme
  }) => {
    const isLightMode = theme !== 'dark';
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Button, {
      type: "button",
      className: className,
      title: isLightMode ? 'Enable Dark mode' : 'Enable Light mode',
      color: isLightMode ? '#9eb3c6' : '#f9d401',
      onClick: () => toggleTheme(isLightMode ? 'dark' : 'light')
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
      className: "u-icon u-block"
    }, isLightMode ? 'moon' : 'sun'));
  });
}

/* harmony default export */ __webpack_exports__["default"] = (ThemeToggler);

/***/ }),
/* 215 */
/*!********************************************************************!*\
  !*** ../node_modules/@emotion/styled-base/dist/styled-base.esm.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 216);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ 116);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/is-prop-valid */ 217);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/core */ 219);
/* harmony import */ var _emotion_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/utils */ 225);
/* harmony import */ var _emotion_serialize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/serialize */ 226);







var testOmitPropsOnStringTag = _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_2__["default"];

var testOmitPropsOnComponent = function testOmitPropsOnComponent(key) {
  return key !== 'theme' && key !== 'innerRef';
};

var getDefaultShouldForwardProp = function getDefaultShouldForwardProp(tag) {
  return typeof tag === 'string' && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  tag.charCodeAt(0) > 96 ? testOmitPropsOnStringTag : testOmitPropsOnComponent;
};

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var ILLEGAL_ESCAPE_SEQUENCE_ERROR = "You have illegal escape sequence in your template literal, most likely inside content's property value.\nBecause you write your CSS inside a JavaScript string you actually have to do double escaping, so for example \"content: '\\00d7';\" should become \"content: '\\\\00d7';\".\nYou can read more about this here:\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences";
var isBrowser = typeof document !== 'undefined';

var createStyled = function createStyled(tag, options) {
  if (false) {}

  var identifierName;
  var shouldForwardProp;
  var targetClassName;

  if (options !== undefined) {
    identifierName = options.label;
    targetClassName = options.target;
    shouldForwardProp = tag.__emotion_forwardProp && options.shouldForwardProp ? function (propName) {
      return tag.__emotion_forwardProp(propName) && // $FlowFixMe
      options.shouldForwardProp(propName);
    } : options.shouldForwardProp;
  }

  var isReal = tag.__emotion_real === tag;
  var baseTag = isReal && tag.__emotion_base || tag;

  if (typeof shouldForwardProp !== 'function' && isReal) {
    shouldForwardProp = tag.__emotion_forwardProp;
  }

  var defaultShouldForwardProp = shouldForwardProp || getDefaultShouldForwardProp(baseTag);
  var shouldUseAs = !defaultShouldForwardProp('as');
  return function () {
    var args = arguments;
    var styles = isReal && tag.__emotion_styles !== undefined ? tag.__emotion_styles.slice(0) : [];

    if (identifierName !== undefined) {
      styles.push("label:" + identifierName + ";");
    }

    if (args[0] == null || args[0].raw === undefined) {
      styles.push.apply(styles, args);
    } else {
      if (false) {}

      styles.push(args[0][0]);
      var len = args.length;
      var i = 1;

      for (; i < len; i++) {
        if (false) {}

        styles.push(args[i], args[0][i]);
      }
    } // $FlowFixMe: we need to cast StatelessFunctionalComponent to our PrivateStyledComponent class


    var Styled = Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["withEmotionCache"])(function (props, context, ref) {
      return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["ThemeContext"].Consumer, null, function (theme) {
        var finalTag = shouldUseAs && props.as || baseTag;
        var className = '';
        var classInterpolations = [];
        var mergedProps = props;

        if (props.theme == null) {
          mergedProps = {};

          for (var key in props) {
            mergedProps[key] = props[key];
          }

          mergedProps.theme = theme;
        }

        if (typeof props.className === 'string') {
          className = Object(_emotion_utils__WEBPACK_IMPORTED_MODULE_4__["getRegisteredStyles"])(context.registered, classInterpolations, props.className);
        } else if (props.className != null) {
          className = props.className + " ";
        }

        var serialized = Object(_emotion_serialize__WEBPACK_IMPORTED_MODULE_5__["serializeStyles"])(styles.concat(classInterpolations), context.registered, mergedProps);
        var rules = Object(_emotion_utils__WEBPACK_IMPORTED_MODULE_4__["insertStyles"])(context, serialized, typeof finalTag === 'string');
        className += context.key + "-" + serialized.name;

        if (targetClassName !== undefined) {
          className += " " + targetClassName;
        }

        var finalShouldForwardProp = shouldUseAs && shouldForwardProp === undefined ? getDefaultShouldForwardProp(finalTag) : defaultShouldForwardProp;
        var newProps = {};

        for (var _key in props) {
          if (shouldUseAs && _key === 'as') continue;

          if ( // $FlowFixMe
          finalShouldForwardProp(_key)) {
            newProps[_key] = props[_key];
          }
        }

        newProps.className = className;
        newProps.ref = ref || props.innerRef;

        if (false) {}

        var ele = Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(finalTag, newProps);

        if (!isBrowser && rules !== undefined) {
          var _ref;

          var serializedNames = serialized.name;
          var next = serialized.next;

          while (next !== undefined) {
            serializedNames += ' ' + next.name;
            next = next.next;
          }

          return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])("style", (_ref = {}, _ref["data-emotion-" + context.key] = serializedNames, _ref.dangerouslySetInnerHTML = {
            __html: rules
          }, _ref.nonce = context.sheet.nonce, _ref)), ele);
        }

        return ele;
      });
    });
    Styled.displayName = identifierName !== undefined ? identifierName : "Styled(" + (typeof baseTag === 'string' ? baseTag : baseTag.displayName || baseTag.name || 'Component') + ")";
    Styled.defaultProps = tag.defaultProps;
    Styled.__emotion_real = Styled;
    Styled.__emotion_base = baseTag;
    Styled.__emotion_styles = styles;
    Styled.__emotion_forwardProp = shouldForwardProp;
    Object.defineProperty(Styled, 'toString', {
      value: function value() {
        if (targetClassName === undefined && "production" !== 'production') {
          return 'NO_COMPONENT_SELECTOR';
        } // $FlowFixMe: coerce undefined to string


        return "." + targetClassName;
      }
    });

    Styled.withComponent = function (nextTag, nextOptions) {
      return createStyled(nextTag, nextOptions !== undefined ? _objectSpread({}, options || {}, {}, nextOptions) : options).apply(void 0, styles);
    };

    return Styled;
  };
};

/* harmony default export */ __webpack_exports__["default"] = (createStyled);


/***/ }),
/* 216 */
/*!****************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
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
/* 217 */
/*!************************************************************************!*\
  !*** ../node_modules/@emotion/is-prop-valid/dist/is-prop-valid.esm.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_memoize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/memoize */ 218);


var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var index = Object(_emotion_memoize__WEBPACK_IMPORTED_MODULE_0__["default"])(function (prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
  /* o */
  && prop.charCodeAt(1) === 110
  /* n */
  && prop.charCodeAt(2) < 91;
}
/* Z+1 */
);

/* harmony default export */ __webpack_exports__["default"] = (index);


/***/ }),
/* 218 */
/*!************************************************************!*\
  !*** ../node_modules/@emotion/memoize/dist/memoize.esm.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function memoize(fn) {
  var cache = {};
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

/* harmony default export */ __webpack_exports__["default"] = (memoize);


/***/ }),
/* 219 */
/*!******************************************************!*\
  !*** ../node_modules/@emotion/core/dist/core.esm.js ***!
  \******************************************************/
/*! exports provided: css, CacheProvider, ClassNames, Global, ThemeContext, jsx, keyframes, withEmotionCache */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CacheProvider", function() { return CacheProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassNames", function() { return ClassNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Global", function() { return Global; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeContext", function() { return ThemeContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jsx", function() { return jsx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyframes", function() { return keyframes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withEmotionCache", function() { return withEmotionCache; });
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ 220);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ 116);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/cache */ 221);
/* harmony import */ var _emotion_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/utils */ 225);
/* harmony import */ var _emotion_serialize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/serialize */ 226);
/* harmony import */ var _emotion_sheet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/sheet */ 222);
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/css */ 229);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "css", function() { return _emotion_css__WEBPACK_IMPORTED_MODULE_6__["default"]; });










var isBrowser = typeof document !== 'undefined';

var EmotionCacheContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])( // we're doing this to avoid preconstruct's dead code elimination in this one case
// because this module is primarily intended for the browser and node
// but it's also required in react native and similar environments sometimes
// and we could have a special build just for that
// but this is much easier and the native packages
// might use a different theme context in the future anyway
typeof HTMLElement !== 'undefined' ? Object(_emotion_cache__WEBPACK_IMPORTED_MODULE_2__["default"])() : null);
var ThemeContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])({});
var CacheProvider = EmotionCacheContext.Provider;

var withEmotionCache = function withEmotionCache(func) {
  var render = function render(props, ref) {
    return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(EmotionCacheContext.Consumer, null, function (cache) {
      return func(props, cache, ref);
    });
  }; // $FlowFixMe


  return Object(react__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(render);
};

if (!isBrowser) {
  var BasicProvider =
  /*#__PURE__*/
  function (_React$Component) {
    _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(BasicProvider, _React$Component);

    function BasicProvider(props, context, updater) {
      var _this;

      _this = _React$Component.call(this, props, context, updater) || this;
      _this.state = {
        value: Object(_emotion_cache__WEBPACK_IMPORTED_MODULE_2__["default"])()
      };
      return _this;
    }

    var _proto = BasicProvider.prototype;

    _proto.render = function render() {
      return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(EmotionCacheContext.Provider, this.state, this.props.children(this.state.value));
    };

    return BasicProvider;
  }(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

  withEmotionCache = function withEmotionCache(func) {
    return function (props) {
      return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(EmotionCacheContext.Consumer, null, function (context) {
        if (context === null) {
          return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(BasicProvider, null, function (newContext) {
            return func(props, newContext);
          });
        } else {
          return func(props, context);
        }
      });
    };
  };
}

// thus we only need to replace what is a valid character for JS, but not for CSS

var sanitizeIdentifier = function sanitizeIdentifier(identifier) {
  return identifier.replace(/\$/g, '-');
};

var typePropName = '__EMOTION_TYPE_PLEASE_DO_NOT_USE__';
var labelPropName = '__EMOTION_LABEL_PLEASE_DO_NOT_USE__';
var hasOwnProperty = Object.prototype.hasOwnProperty;

var render = function render(cache, props, theme, ref) {
  var cssProp = theme === null ? props.css : props.css(theme); // so that using `css` from `emotion` and passing the result to the css prop works
  // not passing the registered cache to serializeStyles because it would
  // make certain babel optimisations not possible

  if (typeof cssProp === 'string' && cache.registered[cssProp] !== undefined) {
    cssProp = cache.registered[cssProp];
  }

  var type = props[typePropName];
  var registeredStyles = [cssProp];
  var className = '';

  if (typeof props.className === 'string') {
    className = Object(_emotion_utils__WEBPACK_IMPORTED_MODULE_3__["getRegisteredStyles"])(cache.registered, registeredStyles, props.className);
  } else if (props.className != null) {
    className = props.className + " ";
  }

  var serialized = Object(_emotion_serialize__WEBPACK_IMPORTED_MODULE_4__["serializeStyles"])(registeredStyles);

  if (false) { var labelFromStack; }

  var rules = Object(_emotion_utils__WEBPACK_IMPORTED_MODULE_3__["insertStyles"])(cache, serialized, typeof type === 'string');
  className += cache.key + "-" + serialized.name;
  var newProps = {};

  for (var key in props) {
    if (hasOwnProperty.call(props, key) && key !== 'css' && key !== typePropName && ( true || false)) {
      newProps[key] = props[key];
    }
  }

  newProps.ref = ref;
  newProps.className = className;
  var ele = Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(type, newProps);

  if (!isBrowser && rules !== undefined) {
    var _ref;

    var serializedNames = serialized.name;
    var next = serialized.next;

    while (next !== undefined) {
      serializedNames += ' ' + next.name;
      next = next.next;
    }

    return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])("style", (_ref = {}, _ref["data-emotion-" + cache.key] = serializedNames, _ref.dangerouslySetInnerHTML = {
      __html: rules
    }, _ref.nonce = cache.sheet.nonce, _ref)), ele);
  }

  return ele;
};

var Emotion =
/* #__PURE__ */
withEmotionCache(function (props, cache, ref) {
  // use Context.read for the theme when it's stable
  if (typeof props.css === 'function') {
    return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ThemeContext.Consumer, null, function (theme) {
      return render(cache, props, theme, ref);
    });
  }

  return render(cache, props, null, ref);
});

if (false) {} // $FlowFixMe


var jsx = function jsx(type, props) {
  var args = arguments;

  if (props == null || !hasOwnProperty.call(props, 'css')) {
    // $FlowFixMe
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"].apply(undefined, args);
  }

  if (false) {}

  var argsLength = args.length;
  var createElementArgArray = new Array(argsLength);
  createElementArgArray[0] = Emotion;
  var newProps = {};

  for (var key in props) {
    if (hasOwnProperty.call(props, key)) {
      newProps[key] = props[key];
    }
  }

  newProps[typePropName] = type;

  if (false) { var match, error; }

  createElementArgArray[1] = newProps;

  for (var i = 2; i < argsLength; i++) {
    createElementArgArray[i] = args[i];
  } // $FlowFixMe


  return react__WEBPACK_IMPORTED_MODULE_1__["createElement"].apply(null, createElementArgArray);
};

var warnedAboutCssPropForGlobal = false;
var Global =
/* #__PURE__ */
withEmotionCache(function (props, cache) {
  if (false) {}

  var styles = props.styles;

  if (typeof styles === 'function') {
    return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ThemeContext.Consumer, null, function (theme) {
      var serialized = Object(_emotion_serialize__WEBPACK_IMPORTED_MODULE_4__["serializeStyles"])([styles(theme)]);
      return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InnerGlobal, {
        serialized: serialized,
        cache: cache
      });
    });
  }

  var serialized = Object(_emotion_serialize__WEBPACK_IMPORTED_MODULE_4__["serializeStyles"])([styles]);
  return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InnerGlobal, {
    serialized: serialized,
    cache: cache
  });
});

// maintain place over rerenders.
// initial render from browser, insertBefore context.sheet.tags[0] or if a style hasn't been inserted there yet, appendChild
// initial client-side render from SSR, use place of hydrating tag
var InnerGlobal =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(InnerGlobal, _React$Component);

  function InnerGlobal(props, context, updater) {
    return _React$Component.call(this, props, context, updater) || this;
  }

  var _proto = InnerGlobal.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.sheet = new _emotion_sheet__WEBPACK_IMPORTED_MODULE_5__["StyleSheet"]({
      key: this.props.cache.key + "-global",
      nonce: this.props.cache.sheet.nonce,
      container: this.props.cache.sheet.container
    }); // $FlowFixMe

    var node = document.querySelector("style[data-emotion-" + this.props.cache.key + "=\"" + this.props.serialized.name + "\"]");

    if (node !== null) {
      this.sheet.tags.push(node);
    }

    if (this.props.cache.sheet.tags.length) {
      this.sheet.before = this.props.cache.sheet.tags[0];
    }

    this.insertStyles();
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (prevProps.serialized.name !== this.props.serialized.name) {
      this.insertStyles();
    }
  };

  _proto.insertStyles = function insertStyles$1() {
    if (this.props.serialized.next !== undefined) {
      // insert keyframes
      Object(_emotion_utils__WEBPACK_IMPORTED_MODULE_3__["insertStyles"])(this.props.cache, this.props.serialized.next, true);
    }

    if (this.sheet.tags.length) {
      // if this doesn't exist then it will be null so the style element will be appended
      var element = this.sheet.tags[this.sheet.tags.length - 1].nextElementSibling;
      this.sheet.before = element;
      this.sheet.flush();
    }

    this.props.cache.insert("", this.props.serialized, this.sheet, false);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.sheet.flush();
  };

  _proto.render = function render() {
    if (!isBrowser) {
      var serialized = this.props.serialized;
      var serializedNames = serialized.name;
      var serializedStyles = serialized.styles;
      var next = serialized.next;

      while (next !== undefined) {
        serializedNames += ' ' + next.name;
        serializedStyles += next.styles;
        next = next.next;
      }

      var shouldCache = this.props.cache.compat === true;
      var rules = this.props.cache.insert("", {
        name: serializedNames,
        styles: serializedStyles
      }, this.sheet, shouldCache);

      if (!shouldCache) {
        var _ref;

        return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])("style", (_ref = {}, _ref["data-emotion-" + this.props.cache.key] = serializedNames, _ref.dangerouslySetInnerHTML = {
          __html: rules
        }, _ref.nonce = this.props.cache.sheet.nonce, _ref));
      }
    }

    return null;
  };

  return InnerGlobal;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

var keyframes = function keyframes() {
  var insertable = _emotion_css__WEBPACK_IMPORTED_MODULE_6__["default"].apply(void 0, arguments);
  var name = "animation-" + insertable.name; // $FlowFixMe

  return {
    name: name,
    styles: "@keyframes " + name + "{" + insertable.styles + "}",
    anim: 1,
    toString: function toString() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
};

var classnames = function classnames(args) {
  var len = args.length;
  var i = 0;
  var cls = '';

  for (; i < len; i++) {
    var arg = args[i];
    if (arg == null) continue;
    var toAdd = void 0;

    switch (typeof arg) {
      case 'boolean':
        break;

      case 'object':
        {
          if (Array.isArray(arg)) {
            toAdd = classnames(arg);
          } else {
            toAdd = '';

            for (var k in arg) {
              if (arg[k] && k) {
                toAdd && (toAdd += ' ');
                toAdd += k;
              }
            }
          }

          break;
        }

      default:
        {
          toAdd = arg;
        }
    }

    if (toAdd) {
      cls && (cls += ' ');
      cls += toAdd;
    }
  }

  return cls;
};

function merge(registered, css, className) {
  var registeredStyles = [];
  var rawClassName = Object(_emotion_utils__WEBPACK_IMPORTED_MODULE_3__["getRegisteredStyles"])(registered, registeredStyles, className);

  if (registeredStyles.length < 2) {
    return className;
  }

  return rawClassName + css(registeredStyles);
}

var ClassNames = withEmotionCache(function (props, context) {
  return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ThemeContext.Consumer, null, function (theme) {
    var rules = '';
    var serializedHashes = '';
    var hasRendered = false;

    var css = function css() {
      if (hasRendered && "production" !== 'production') {
        throw new Error('css can only be used during render');
      }

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var serialized = Object(_emotion_serialize__WEBPACK_IMPORTED_MODULE_4__["serializeStyles"])(args, context.registered);

      if (isBrowser) {
        Object(_emotion_utils__WEBPACK_IMPORTED_MODULE_3__["insertStyles"])(context, serialized, false);
      } else {
        var res = Object(_emotion_utils__WEBPACK_IMPORTED_MODULE_3__["insertStyles"])(context, serialized, false);

        if (res !== undefined) {
          rules += res;
        }
      }

      if (!isBrowser) {
        serializedHashes += " " + serialized.name;
      }

      return context.key + "-" + serialized.name;
    };

    var cx = function cx() {
      if (hasRendered && "production" !== 'production') {
        throw new Error('cx can only be used during render');
      }

      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return merge(context.registered, css, classnames(args));
    };

    var content = {
      css: css,
      cx: cx,
      theme: theme
    };
    var ele = props.children(content);
    hasRendered = true;

    if (!isBrowser && rules.length !== 0) {
      var _ref;

      return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])("style", (_ref = {}, _ref["data-emotion-" + context.key] = serializedHashes.substring(1), _ref.dangerouslySetInnerHTML = {
        __html: rules
      }, _ref.nonce = context.sheet.nonce, _ref)), ele);
    }

    return ele;
  });
});




/***/ }),
/* 220 */
/*!***************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/inheritsLoose.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

module.exports = _inheritsLoose;

/***/ }),
/* 221 */
/*!********************************************************!*\
  !*** ../node_modules/@emotion/cache/dist/cache.esm.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_sheet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/sheet */ 222);
/* harmony import */ var _emotion_stylis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/stylis */ 223);
/* harmony import */ var _emotion_weak_memoize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/weak-memoize */ 224);




// https://github.com/thysultan/stylis.js/tree/master/plugins/rule-sheet
// inlined to avoid umd wrapper and peerDep warnings/installing stylis
// since we use stylis after closure compiler
var delimiter = '/*|*/';
var needle = delimiter + '}';

function toSheet(block) {
  if (block) {
    Sheet.current.insert(block + '}');
  }
}

var Sheet = {
  current: null
};
var ruleSheet = function ruleSheet(context, content, selectors, parents, line, column, length, ns, depth, at) {
  switch (context) {
    // property
    case 1:
      {
        switch (content.charCodeAt(0)) {
          case 64:
            {
              // @import
              Sheet.current.insert(content + ';');
              return '';
            }
          // charcode for l

          case 108:
            {
              // charcode for b
              // this ignores label
              if (content.charCodeAt(2) === 98) {
                return '';
              }
            }
        }

        break;
      }
    // selector

    case 2:
      {
        if (ns === 0) return content + delimiter;
        break;
      }
    // at-rule

    case 3:
      {
        switch (ns) {
          // @font-face, @page
          case 102:
          case 112:
            {
              Sheet.current.insert(selectors[0] + content);
              return '';
            }

          default:
            {
              return content + (at === 0 ? delimiter : '');
            }
        }
      }

    case -2:
      {
        content.split(needle).forEach(toSheet);
      }
  }
};
var removeLabel = function removeLabel(context, content) {
  if (context === 1 && // charcode for l
  content.charCodeAt(0) === 108 && // charcode for b
  content.charCodeAt(2) === 98 // this ignores label
  ) {
      return '';
    }
};

var isBrowser = typeof document !== 'undefined';
var rootServerStylisCache = {};
var getServerStylisCache = isBrowser ? undefined : Object(_emotion_weak_memoize__WEBPACK_IMPORTED_MODULE_2__["default"])(function () {
  var getCache = Object(_emotion_weak_memoize__WEBPACK_IMPORTED_MODULE_2__["default"])(function () {
    return {};
  });
  var prefixTrueCache = {};
  var prefixFalseCache = {};
  return function (prefix) {
    if (prefix === undefined || prefix === true) {
      return prefixTrueCache;
    }

    if (prefix === false) {
      return prefixFalseCache;
    }

    return getCache(prefix);
  };
});

var createCache = function createCache(options) {
  if (options === undefined) options = {};
  var key = options.key || 'css';
  var stylisOptions;

  if (options.prefix !== undefined) {
    stylisOptions = {
      prefix: options.prefix
    };
  }

  var stylis = new _emotion_stylis__WEBPACK_IMPORTED_MODULE_1__["default"](stylisOptions);

  if (false) {}

  var inserted = {}; // $FlowFixMe

  var container;

  if (isBrowser) {
    container = options.container || document.head;
    var nodes = document.querySelectorAll("style[data-emotion-" + key + "]");
    Array.prototype.forEach.call(nodes, function (node) {
      var attrib = node.getAttribute("data-emotion-" + key); // $FlowFixMe

      attrib.split(' ').forEach(function (id) {
        inserted[id] = true;
      });

      if (node.parentNode !== container) {
        container.appendChild(node);
      }
    });
  }

  var _insert;

  if (isBrowser) {
    stylis.use(options.stylisPlugins)(ruleSheet);

    _insert = function insert(selector, serialized, sheet, shouldCache) {
      var name = serialized.name;
      Sheet.current = sheet;

      if (false) { var map; }

      stylis(selector, serialized.styles);

      if (shouldCache) {
        cache.inserted[name] = true;
      }
    };
  } else {
    stylis.use(removeLabel);
    var serverStylisCache = rootServerStylisCache;

    if (options.stylisPlugins || options.prefix !== undefined) {
      stylis.use(options.stylisPlugins); // $FlowFixMe

      serverStylisCache = getServerStylisCache(options.stylisPlugins || rootServerStylisCache)(options.prefix);
    }

    var getRules = function getRules(selector, serialized) {
      var name = serialized.name;

      if (serverStylisCache[name] === undefined) {
        serverStylisCache[name] = stylis(selector, serialized.styles);
      }

      return serverStylisCache[name];
    };

    _insert = function _insert(selector, serialized, sheet, shouldCache) {
      var name = serialized.name;
      var rules = getRules(selector, serialized);

      if (cache.compat === undefined) {
        // in regular mode, we don't set the styles on the inserted cache
        // since we don't need to and that would be wasting memory
        // we return them so that they are rendered in a style tag
        if (shouldCache) {
          cache.inserted[name] = true;
        }

        if ( // using === development instead of !== production
        // because if people do ssr in tests, the source maps showing up would be annoying
        false) {}

        return rules;
      } else {
        // in compat mode, we put the styles on the inserted cache so
        // that emotion-server can pull out the styles
        // except when we don't want to cache it which was in Global but now
        // is nowhere but we don't want to do a major right now
        // and just in case we're going to leave the case here
        // it's also not affecting client side bundle size
        // so it's really not a big deal
        if (shouldCache) {
          cache.inserted[name] = rules;
        } else {
          return rules;
        }
      }
    };
  }

  if (false) { var commentEnd, commentStart; }

  var cache = {
    key: key,
    sheet: new _emotion_sheet__WEBPACK_IMPORTED_MODULE_0__["StyleSheet"]({
      key: key,
      container: container,
      nonce: options.nonce,
      speedy: options.speedy
    }),
    nonce: options.nonce,
    inserted: inserted,
    registered: {},
    insert: _insert
  };
  return cache;
};

/* harmony default export */ __webpack_exports__["default"] = (createCache);


/***/ }),
/* 222 */
/*!********************************************************!*\
  !*** ../node_modules/@emotion/sheet/dist/sheet.esm.js ***!
  \********************************************************/
/*! exports provided: StyleSheet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleSheet", function() { return StyleSheet; });
/*

Based off glamor's StyleSheet, thanks Sunil ❤️

high performance StyleSheet for css-in-js systems

- uses multiple style tags behind the scenes for millions of rules
- uses `insertRule` for appending in production for *much* faster performance

// usage

import { StyleSheet } from '@emotion/sheet'

let styleSheet = new StyleSheet({ key: '', container: document.head })

styleSheet.insert('#box { border: 1px solid red; }')
- appends a css rule into the stylesheet

styleSheet.flush()
- empties the stylesheet of all its contents

*/
// $FlowFixMe
function sheetForTag(tag) {
  if (tag.sheet) {
    // $FlowFixMe
    return tag.sheet;
  } // this weirdness brought to you by firefox

  /* istanbul ignore next */


  for (var i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].ownerNode === tag) {
      // $FlowFixMe
      return document.styleSheets[i];
    }
  }
}

function createStyleElement(options) {
  var tag = document.createElement('style');
  tag.setAttribute('data-emotion', options.key);

  if (options.nonce !== undefined) {
    tag.setAttribute('nonce', options.nonce);
  }

  tag.appendChild(document.createTextNode(''));
  return tag;
}

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet(options) {
    this.isSpeedy = options.speedy === undefined ? "production" === 'production' : options.speedy;
    this.tags = [];
    this.ctr = 0;
    this.nonce = options.nonce; // key is the value of the data-emotion attribute, it's used to identify different sheets

    this.key = options.key;
    this.container = options.container;
    this.before = null;
  }

  var _proto = StyleSheet.prototype;

  _proto.insert = function insert(rule) {
    // the max length is how many rules we have per style tag, it's 65000 in speedy mode
    // it's 1 in dev because we insert source maps that map a single rule to a location
    // and you can only have one source map per style tag
    if (this.ctr % (this.isSpeedy ? 65000 : 1) === 0) {
      var _tag = createStyleElement(this);

      var before;

      if (this.tags.length === 0) {
        before = this.before;
      } else {
        before = this.tags[this.tags.length - 1].nextSibling;
      }

      this.container.insertBefore(_tag, before);
      this.tags.push(_tag);
    }

    var tag = this.tags[this.tags.length - 1];

    if (this.isSpeedy) {
      var sheet = sheetForTag(tag);

      try {
        // this is a really hot path
        // we check the second character first because having "i"
        // as the second character will happen less often than
        // having "@" as the first character
        var isImportRule = rule.charCodeAt(1) === 105 && rule.charCodeAt(0) === 64; // this is the ultrafast version, works across browsers
        // the big drawback is that the css won't be editable in devtools

        sheet.insertRule(rule, // we need to insert @import rules before anything else
        // otherwise there will be an error
        // technically this means that the @import rules will
        // _usually_(not always since there could be multiple style tags)
        // be the first ones in prod and generally later in dev
        // this shouldn't really matter in the real world though
        // @import is generally only used for font faces from google fonts and etc.
        // so while this could be technically correct then it would be slower and larger
        // for a tiny bit of correctness that won't matter in the real world
        isImportRule ? 0 : sheet.cssRules.length);
      } catch (e) {
        if (false) {}
      }
    } else {
      tag.appendChild(document.createTextNode(rule));
    }

    this.ctr++;
  };

  _proto.flush = function flush() {
    // $FlowFixMe
    this.tags.forEach(function (tag) {
      return tag.parentNode.removeChild(tag);
    });
    this.tags = [];
    this.ctr = 0;
  };

  return StyleSheet;
}();




/***/ }),
/* 223 */
/*!**********************************************************!*\
  !*** ../node_modules/@emotion/stylis/dist/stylis.esm.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function stylis_min (W) {
  function M(d, c, e, h, a) {
    for (var m = 0, b = 0, v = 0, n = 0, q, g, x = 0, K = 0, k, u = k = q = 0, l = 0, r = 0, I = 0, t = 0, B = e.length, J = B - 1, y, f = '', p = '', F = '', G = '', C; l < B;) {
      g = e.charCodeAt(l);
      l === J && 0 !== b + n + v + m && (0 !== b && (g = 47 === b ? 10 : 47), n = v = m = 0, B++, J++);

      if (0 === b + n + v + m) {
        if (l === J && (0 < r && (f = f.replace(N, '')), 0 < f.trim().length)) {
          switch (g) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;

            default:
              f += e.charAt(l);
          }

          g = 59;
        }

        switch (g) {
          case 123:
            f = f.trim();
            q = f.charCodeAt(0);
            k = 1;

            for (t = ++l; l < B;) {
              switch (g = e.charCodeAt(l)) {
                case 123:
                  k++;
                  break;

                case 125:
                  k--;
                  break;

                case 47:
                  switch (g = e.charCodeAt(l + 1)) {
                    case 42:
                    case 47:
                      a: {
                        for (u = l + 1; u < J; ++u) {
                          switch (e.charCodeAt(u)) {
                            case 47:
                              if (42 === g && 42 === e.charCodeAt(u - 1) && l + 2 !== u) {
                                l = u + 1;
                                break a;
                              }

                              break;

                            case 10:
                              if (47 === g) {
                                l = u + 1;
                                break a;
                              }

                          }
                        }

                        l = u;
                      }

                  }

                  break;

                case 91:
                  g++;

                case 40:
                  g++;

                case 34:
                case 39:
                  for (; l++ < J && e.charCodeAt(l) !== g;) {
                  }

              }

              if (0 === k) break;
              l++;
            }

            k = e.substring(t, l);
            0 === q && (q = (f = f.replace(ca, '').trim()).charCodeAt(0));

            switch (q) {
              case 64:
                0 < r && (f = f.replace(N, ''));
                g = f.charCodeAt(1);

                switch (g) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    r = c;
                    break;

                  default:
                    r = O;
                }

                k = M(c, r, k, g, a + 1);
                t = k.length;
                0 < A && (r = X(O, f, I), C = H(3, k, r, c, D, z, t, g, a, h), f = r.join(''), void 0 !== C && 0 === (t = (k = C.trim()).length) && (g = 0, k = ''));
                if (0 < t) switch (g) {
                  case 115:
                    f = f.replace(da, ea);

                  case 100:
                  case 109:
                  case 45:
                    k = f + '{' + k + '}';
                    break;

                  case 107:
                    f = f.replace(fa, '$1 $2');
                    k = f + '{' + k + '}';
                    k = 1 === w || 2 === w && L('@' + k, 3) ? '@-webkit-' + k + '@' + k : '@' + k;
                    break;

                  default:
                    k = f + k, 112 === h && (k = (p += k, ''));
                } else k = '';
                break;

              default:
                k = M(c, X(c, f, I), k, h, a + 1);
            }

            F += k;
            k = I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
            break;

          case 125:
          case 59:
            f = (0 < r ? f.replace(N, '') : f).trim();
            if (1 < (t = f.length)) switch (0 === u && (q = f.charCodeAt(0), 45 === q || 96 < q && 123 > q) && (t = (f = f.replace(' ', ':')).length), 0 < A && void 0 !== (C = H(1, f, c, d, D, z, p.length, h, a, h)) && 0 === (t = (f = C.trim()).length) && (f = '\x00\x00'), q = f.charCodeAt(0), g = f.charCodeAt(1), q) {
              case 0:
                break;

              case 64:
                if (105 === g || 99 === g) {
                  G += f + e.charAt(l);
                  break;
                }

              default:
                58 !== f.charCodeAt(t - 1) && (p += P(f, q, g, f.charCodeAt(2)));
            }
            I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
        }
      }

      switch (g) {
        case 13:
        case 10:
          47 === b ? b = 0 : 0 === 1 + q && 107 !== h && 0 < f.length && (r = 1, f += '\x00');
          0 < A * Y && H(0, f, c, d, D, z, p.length, h, a, h);
          z = 1;
          D++;
          break;

        case 59:
        case 125:
          if (0 === b + n + v + m) {
            z++;
            break;
          }

        default:
          z++;
          y = e.charAt(l);

          switch (g) {
            case 9:
            case 32:
              if (0 === n + m + b) switch (x) {
                case 44:
                case 58:
                case 9:
                case 32:
                  y = '';
                  break;

                default:
                  32 !== g && (y = ' ');
              }
              break;

            case 0:
              y = '\\0';
              break;

            case 12:
              y = '\\f';
              break;

            case 11:
              y = '\\v';
              break;

            case 38:
              0 === n + b + m && (r = I = 1, y = '\f' + y);
              break;

            case 108:
              if (0 === n + b + m + E && 0 < u) switch (l - u) {
                case 2:
                  112 === x && 58 === e.charCodeAt(l - 3) && (E = x);

                case 8:
                  111 === K && (E = K);
              }
              break;

            case 58:
              0 === n + b + m && (u = l);
              break;

            case 44:
              0 === b + v + n + m && (r = 1, y += '\r');
              break;

            case 34:
            case 39:
              0 === b && (n = n === g ? 0 : 0 === n ? g : n);
              break;

            case 91:
              0 === n + b + v && m++;
              break;

            case 93:
              0 === n + b + v && m--;
              break;

            case 41:
              0 === n + b + m && v--;
              break;

            case 40:
              if (0 === n + b + m) {
                if (0 === q) switch (2 * x + 3 * K) {
                  case 533:
                    break;

                  default:
                    q = 1;
                }
                v++;
              }

              break;

            case 64:
              0 === b + v + n + m + u + k && (k = 1);
              break;

            case 42:
            case 47:
              if (!(0 < n + m + v)) switch (b) {
                case 0:
                  switch (2 * g + 3 * e.charCodeAt(l + 1)) {
                    case 235:
                      b = 47;
                      break;

                    case 220:
                      t = l, b = 42;
                  }

                  break;

                case 42:
                  47 === g && 42 === x && t + 2 !== l && (33 === e.charCodeAt(t + 2) && (p += e.substring(t, l + 1)), y = '', b = 0);
              }
          }

          0 === b && (f += y);
      }

      K = x;
      x = g;
      l++;
    }

    t = p.length;

    if (0 < t) {
      r = c;
      if (0 < A && (C = H(2, p, r, d, D, z, t, h, a, h), void 0 !== C && 0 === (p = C).length)) return G + p + F;
      p = r.join(',') + '{' + p + '}';

      if (0 !== w * E) {
        2 !== w || L(p, 2) || (E = 0);

        switch (E) {
          case 111:
            p = p.replace(ha, ':-moz-$1') + p;
            break;

          case 112:
            p = p.replace(Q, '::-webkit-input-$1') + p.replace(Q, '::-moz-$1') + p.replace(Q, ':-ms-input-$1') + p;
        }

        E = 0;
      }
    }

    return G + p + F;
  }

  function X(d, c, e) {
    var h = c.trim().split(ia);
    c = h;
    var a = h.length,
        m = d.length;

    switch (m) {
      case 0:
      case 1:
        var b = 0;

        for (d = 0 === m ? '' : d[0] + ' '; b < a; ++b) {
          c[b] = Z(d, c[b], e).trim();
        }

        break;

      default:
        var v = b = 0;

        for (c = []; b < a; ++b) {
          for (var n = 0; n < m; ++n) {
            c[v++] = Z(d[n] + ' ', h[b], e).trim();
          }
        }

    }

    return c;
  }

  function Z(d, c, e) {
    var h = c.charCodeAt(0);
    33 > h && (h = (c = c.trim()).charCodeAt(0));

    switch (h) {
      case 38:
        return c.replace(F, '$1' + d.trim());

      case 58:
        return d.trim() + c.replace(F, '$1' + d.trim());

      default:
        if (0 < 1 * e && 0 < c.indexOf('\f')) return c.replace(F, (58 === d.charCodeAt(0) ? '' : '$1') + d.trim());
    }

    return d + c;
  }

  function P(d, c, e, h) {
    var a = d + ';',
        m = 2 * c + 3 * e + 4 * h;

    if (944 === m) {
      d = a.indexOf(':', 9) + 1;
      var b = a.substring(d, a.length - 1).trim();
      b = a.substring(0, d).trim() + b + ';';
      return 1 === w || 2 === w && L(b, 1) ? '-webkit-' + b + b : b;
    }

    if (0 === w || 2 === w && !L(a, 1)) return a;

    switch (m) {
      case 1015:
        return 97 === a.charCodeAt(10) ? '-webkit-' + a + a : a;

      case 951:
        return 116 === a.charCodeAt(3) ? '-webkit-' + a + a : a;

      case 963:
        return 110 === a.charCodeAt(5) ? '-webkit-' + a + a : a;

      case 1009:
        if (100 !== a.charCodeAt(4)) break;

      case 969:
      case 942:
        return '-webkit-' + a + a;

      case 978:
        return '-webkit-' + a + '-moz-' + a + a;

      case 1019:
      case 983:
        return '-webkit-' + a + '-moz-' + a + '-ms-' + a + a;

      case 883:
        if (45 === a.charCodeAt(8)) return '-webkit-' + a + a;
        if (0 < a.indexOf('image-set(', 11)) return a.replace(ja, '$1-webkit-$2') + a;
        break;

      case 932:
        if (45 === a.charCodeAt(4)) switch (a.charCodeAt(5)) {
          case 103:
            return '-webkit-box-' + a.replace('-grow', '') + '-webkit-' + a + '-ms-' + a.replace('grow', 'positive') + a;

          case 115:
            return '-webkit-' + a + '-ms-' + a.replace('shrink', 'negative') + a;

          case 98:
            return '-webkit-' + a + '-ms-' + a.replace('basis', 'preferred-size') + a;
        }
        return '-webkit-' + a + '-ms-' + a + a;

      case 964:
        return '-webkit-' + a + '-ms-flex-' + a + a;

      case 1023:
        if (99 !== a.charCodeAt(8)) break;
        b = a.substring(a.indexOf(':', 15)).replace('flex-', '').replace('space-between', 'justify');
        return '-webkit-box-pack' + b + '-webkit-' + a + '-ms-flex-pack' + b + a;

      case 1005:
        return ka.test(a) ? a.replace(aa, ':-webkit-') + a.replace(aa, ':-moz-') + a : a;

      case 1e3:
        b = a.substring(13).trim();
        c = b.indexOf('-') + 1;

        switch (b.charCodeAt(0) + b.charCodeAt(c)) {
          case 226:
            b = a.replace(G, 'tb');
            break;

          case 232:
            b = a.replace(G, 'tb-rl');
            break;

          case 220:
            b = a.replace(G, 'lr');
            break;

          default:
            return a;
        }

        return '-webkit-' + a + '-ms-' + b + a;

      case 1017:
        if (-1 === a.indexOf('sticky', 9)) break;

      case 975:
        c = (a = d).length - 10;
        b = (33 === a.charCodeAt(c) ? a.substring(0, c) : a).substring(d.indexOf(':', 7) + 1).trim();

        switch (m = b.charCodeAt(0) + (b.charCodeAt(7) | 0)) {
          case 203:
            if (111 > b.charCodeAt(8)) break;

          case 115:
            a = a.replace(b, '-webkit-' + b) + ';' + a;
            break;

          case 207:
          case 102:
            a = a.replace(b, '-webkit-' + (102 < m ? 'inline-' : '') + 'box') + ';' + a.replace(b, '-webkit-' + b) + ';' + a.replace(b, '-ms-' + b + 'box') + ';' + a;
        }

        return a + ';';

      case 938:
        if (45 === a.charCodeAt(5)) switch (a.charCodeAt(6)) {
          case 105:
            return b = a.replace('-items', ''), '-webkit-' + a + '-webkit-box-' + b + '-ms-flex-' + b + a;

          case 115:
            return '-webkit-' + a + '-ms-flex-item-' + a.replace(ba, '') + a;

          default:
            return '-webkit-' + a + '-ms-flex-line-pack' + a.replace('align-content', '').replace(ba, '') + a;
        }
        break;

      case 973:
      case 989:
        if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4)) break;

      case 931:
      case 953:
        if (!0 === la.test(d)) return 115 === (b = d.substring(d.indexOf(':') + 1)).charCodeAt(0) ? P(d.replace('stretch', 'fill-available'), c, e, h).replace(':fill-available', ':stretch') : a.replace(b, '-webkit-' + b) + a.replace(b, '-moz-' + b.replace('fill-', '')) + a;
        break;

      case 962:
        if (a = '-webkit-' + a + (102 === a.charCodeAt(5) ? '-ms-' + a : '') + a, 211 === e + h && 105 === a.charCodeAt(13) && 0 < a.indexOf('transform', 10)) return a.substring(0, a.indexOf(';', 27) + 1).replace(ma, '$1-webkit-$2') + a;
    }

    return a;
  }

  function L(d, c) {
    var e = d.indexOf(1 === c ? ':' : '{'),
        h = d.substring(0, 3 !== c ? e : 10);
    e = d.substring(e + 1, d.length - 1);
    return R(2 !== c ? h : h.replace(na, '$1'), e, c);
  }

  function ea(d, c) {
    var e = P(c, c.charCodeAt(0), c.charCodeAt(1), c.charCodeAt(2));
    return e !== c + ';' ? e.replace(oa, ' or ($1)').substring(4) : '(' + c + ')';
  }

  function H(d, c, e, h, a, m, b, v, n, q) {
    for (var g = 0, x = c, w; g < A; ++g) {
      switch (w = S[g].call(B, d, x, e, h, a, m, b, v, n, q)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;

        default:
          x = w;
      }
    }

    if (x !== c) return x;
  }

  function T(d) {
    switch (d) {
      case void 0:
      case null:
        A = S.length = 0;
        break;

      default:
        if ('function' === typeof d) S[A++] = d;else if ('object' === typeof d) for (var c = 0, e = d.length; c < e; ++c) {
          T(d[c]);
        } else Y = !!d | 0;
    }

    return T;
  }

  function U(d) {
    d = d.prefix;
    void 0 !== d && (R = null, d ? 'function' !== typeof d ? w = 1 : (w = 2, R = d) : w = 0);
    return U;
  }

  function B(d, c) {
    var e = d;
    33 > e.charCodeAt(0) && (e = e.trim());
    V = e;
    e = [V];

    if (0 < A) {
      var h = H(-1, c, e, e, D, z, 0, 0, 0, 0);
      void 0 !== h && 'string' === typeof h && (c = h);
    }

    var a = M(O, e, c, 0, 0);
    0 < A && (h = H(-2, a, e, e, D, z, a.length, 0, 0, 0), void 0 !== h && (a = h));
    V = '';
    E = 0;
    z = D = 1;
    return a;
  }

  var ca = /^\0+/g,
      N = /[\0\r\f]/g,
      aa = /: */g,
      ka = /zoo|gra/,
      ma = /([,: ])(transform)/g,
      ia = /,\r+?/g,
      F = /([\t\r\n ])*\f?&/g,
      fa = /@(k\w+)\s*(\S*)\s*/,
      Q = /::(place)/g,
      ha = /:(read-only)/g,
      G = /[svh]\w+-[tblr]{2}/,
      da = /\(\s*(.*)\s*\)/g,
      oa = /([\s\S]*?);/g,
      ba = /-self|flex-/g,
      na = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
      la = /stretch|:\s*\w+\-(?:conte|avail)/,
      ja = /([^-])(image-set\()/,
      z = 1,
      D = 1,
      E = 0,
      w = 1,
      O = [],
      S = [],
      A = 0,
      R = null,
      Y = 0,
      V = '';
  B.use = T;
  B.set = U;
  void 0 !== W && U(W);
  return B;
}

/* harmony default export */ __webpack_exports__["default"] = (stylis_min);


/***/ }),
/* 224 */
/*!**********************************************************************!*\
  !*** ../node_modules/@emotion/weak-memoize/dist/weak-memoize.esm.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var weakMemoize = function weakMemoize(func) {
  // $FlowFixMe flow doesn't include all non-primitive types as allowed for weakmaps
  var cache = new WeakMap();
  return function (arg) {
    if (cache.has(arg)) {
      // $FlowFixMe
      return cache.get(arg);
    }

    var ret = func(arg);
    cache.set(arg, ret);
    return ret;
  };
};

/* harmony default export */ __webpack_exports__["default"] = (weakMemoize);


/***/ }),
/* 225 */
/*!********************************************************!*\
  !*** ../node_modules/@emotion/utils/dist/utils.esm.js ***!
  \********************************************************/
/*! exports provided: getRegisteredStyles, insertStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRegisteredStyles", function() { return getRegisteredStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertStyles", function() { return insertStyles; });
var isBrowser = typeof document !== 'undefined';
function getRegisteredStyles(registered, registeredStyles, classNames) {
  var rawClassName = '';
  classNames.split(' ').forEach(function (className) {
    if (registered[className] !== undefined) {
      registeredStyles.push(registered[className]);
    } else {
      rawClassName += className + " ";
    }
  });
  return rawClassName;
}
var insertStyles = function insertStyles(cache, serialized, isStringTag) {
  var className = cache.key + "-" + serialized.name;

  if ( // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (isStringTag === false || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  isBrowser === false && cache.compat !== undefined) && cache.registered[className] === undefined) {
    cache.registered[className] = serialized.styles;
  }

  if (cache.inserted[serialized.name] === undefined) {
    var stylesForSSR = '';
    var current = serialized;

    do {
      var maybeStyles = cache.insert("." + className, current, cache.sheet, true);

      if (!isBrowser && maybeStyles !== undefined) {
        stylesForSSR += maybeStyles;
      }

      current = current.next;
    } while (current !== undefined);

    if (!isBrowser && stylesForSSR.length !== 0) {
      return stylesForSSR;
    }
  }
};




/***/ }),
/* 226 */
/*!****************************************************************!*\
  !*** ../node_modules/@emotion/serialize/dist/serialize.esm.js ***!
  \****************************************************************/
/*! exports provided: serializeStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serializeStyles", function() { return serializeStyles; });
/* harmony import */ var _emotion_hash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/hash */ 227);
/* harmony import */ var _emotion_unitless__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/unitless */ 228);
/* harmony import */ var _emotion_memoize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/memoize */ 218);




var ILLEGAL_ESCAPE_SEQUENCE_ERROR = "You have illegal escape sequence in your template literal, most likely inside content's property value.\nBecause you write your CSS inside a JavaScript string you actually have to do double escaping, so for example \"content: '\\00d7';\" should become \"content: '\\\\00d7';\".\nYou can read more about this here:\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences";
var UNDEFINED_AS_OBJECT_KEY_ERROR = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).";
var hyphenateRegex = /[A-Z]|^ms/g;
var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;

var isCustomProperty = function isCustomProperty(property) {
  return property.charCodeAt(1) === 45;
};

var isProcessableValue = function isProcessableValue(value) {
  return value != null && typeof value !== 'boolean';
};

var processStyleName = Object(_emotion_memoize__WEBPACK_IMPORTED_MODULE_2__["default"])(function (styleName) {
  return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, '-$&').toLowerCase();
});

var processStyleValue = function processStyleValue(key, value) {
  switch (key) {
    case 'animation':
    case 'animationName':
      {
        if (typeof value === 'string') {
          return value.replace(animationRegex, function (match, p1, p2) {
            cursor = {
              name: p1,
              styles: p2,
              next: cursor
            };
            return p1;
          });
        }
      }
  }

  if (_emotion_unitless__WEBPACK_IMPORTED_MODULE_1__["default"][key] !== 1 && !isCustomProperty(key) && typeof value === 'number' && value !== 0) {
    return value + 'px';
  }

  return value;
};

if (false) { var hyphenatedCache, hyphenPattern, msPattern, oldProcessStyleValue, contentValues, contentValuePattern; }

var shouldWarnAboutInterpolatingClassNameFromCss = true;

function handleInterpolation(mergedProps, registered, interpolation, couldBeSelectorInterpolation) {
  if (interpolation == null) {
    return '';
  }

  if (interpolation.__emotion_styles !== undefined) {
    if (false) {}

    return interpolation;
  }

  switch (typeof interpolation) {
    case 'boolean':
      {
        return '';
      }

    case 'object':
      {
        if (interpolation.anim === 1) {
          cursor = {
            name: interpolation.name,
            styles: interpolation.styles,
            next: cursor
          };
          return interpolation.name;
        }

        if (interpolation.styles !== undefined) {
          var next = interpolation.next;

          if (next !== undefined) {
            // not the most efficient thing ever but this is a pretty rare case
            // and there will be very few iterations of this generally
            while (next !== undefined) {
              cursor = {
                name: next.name,
                styles: next.styles,
                next: cursor
              };
              next = next.next;
            }
          }

          var styles = interpolation.styles + ";";

          if (false) {}

          return styles;
        }

        return createStringFromObject(mergedProps, registered, interpolation);
      }

    case 'function':
      {
        if (mergedProps !== undefined) {
          var previousCursor = cursor;
          var result = interpolation(mergedProps);
          cursor = previousCursor;
          return handleInterpolation(mergedProps, registered, result, couldBeSelectorInterpolation);
        } else if (false) {}

        break;
      }

    case 'string':
      if (false) { var replaced, matched; }

      break;
  } // finalize string values (regular strings and functions interpolated into css calls)


  if (registered == null) {
    return interpolation;
  }

  var cached = registered[interpolation];

  if (false) {}

  return cached !== undefined && !couldBeSelectorInterpolation ? cached : interpolation;
}

function createStringFromObject(mergedProps, registered, obj) {
  var string = '';

  if (Array.isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      string += handleInterpolation(mergedProps, registered, obj[i], false);
    }
  } else {
    for (var _key in obj) {
      var value = obj[_key];

      if (typeof value !== 'object') {
        if (registered != null && registered[value] !== undefined) {
          string += _key + "{" + registered[value] + "}";
        } else if (isProcessableValue(value)) {
          string += processStyleName(_key) + ":" + processStyleValue(_key, value) + ";";
        }
      } else {
        if (_key === 'NO_COMPONENT_SELECTOR' && "production" !== 'production') {
          throw new Error('Component selectors can only be used in conjunction with babel-plugin-emotion.');
        }

        if (Array.isArray(value) && typeof value[0] === 'string' && (registered == null || registered[value[0]] === undefined)) {
          for (var _i = 0; _i < value.length; _i++) {
            if (isProcessableValue(value[_i])) {
              string += processStyleName(_key) + ":" + processStyleValue(_key, value[_i]) + ";";
            }
          }
        } else {
          var interpolated = handleInterpolation(mergedProps, registered, value, false);

          switch (_key) {
            case 'animation':
            case 'animationName':
              {
                string += processStyleName(_key) + ":" + interpolated + ";";
                break;
              }

            default:
              {
                if (false) {}

                string += _key + "{" + interpolated + "}";
              }
          }
        }
      }
    }
  }

  return string;
}

var labelPattern = /label:\s*([^\s;\n{]+)\s*;/g;
var sourceMapPattern;

if (false) {} // this is the cursor for keyframes
// keyframes are stored on the SerializedStyles object as a linked list


var cursor;
var serializeStyles = function serializeStyles(args, registered, mergedProps) {
  if (args.length === 1 && typeof args[0] === 'object' && args[0] !== null && args[0].styles !== undefined) {
    return args[0];
  }

  var stringMode = true;
  var styles = '';
  cursor = undefined;
  var strings = args[0];

  if (strings == null || strings.raw === undefined) {
    stringMode = false;
    styles += handleInterpolation(mergedProps, registered, strings, false);
  } else {
    if (false) {}

    styles += strings[0];
  } // we start at 1 since we've already handled the first arg


  for (var i = 1; i < args.length; i++) {
    styles += handleInterpolation(mergedProps, registered, args[i], styles.charCodeAt(styles.length - 1) === 46);

    if (stringMode) {
      if (false) {}

      styles += strings[i];
    }
  }

  var sourceMap;

  if (false) {} // using a global regex with .exec is stateful so lastIndex has to be reset each time


  labelPattern.lastIndex = 0;
  var identifierName = '';
  var match; // https://esbench.com/bench/5b809c2cf2949800a0f61fb5

  while ((match = labelPattern.exec(styles)) !== null) {
    identifierName += '-' + // $FlowFixMe we know it's not null
    match[1];
  }

  var name = Object(_emotion_hash__WEBPACK_IMPORTED_MODULE_0__["default"])(styles) + identifierName;

  if (false) {}

  return {
    name: name,
    styles: styles,
    next: cursor
  };
};




/***/ }),
/* 227 */
/*!******************************************************!*\
  !*** ../node_modules/@emotion/hash/dist/hash.esm.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable */
// Inspired by https://github.com/garycourt/murmurhash-js
// Ported from https://github.com/aappleby/smhasher/blob/61a0530f28277f2e850bfc39600ce61d02b518de/src/MurmurHash2.cpp#L37-L86
function murmur2(str) {
  // 'm' and 'r' are mixing constants generated offline.
  // They're not really 'magic', they just happen to work well.
  // const m = 0x5bd1e995;
  // const r = 24;
  // Initialize the hash
  var h = 0; // Mix 4 bytes at a time into the hash

  var k,
      i = 0,
      len = str.length;

  for (; len >= 4; ++i, len -= 4) {
    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
    k =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16);
    k ^=
    /* k >>> r: */
    k >>> 24;
    h =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16) ^
    /* Math.imul(h, m): */
    (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Handle the last few bytes of the input array


  switch (len) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;

    case 2:
      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;

    case 1:
      h ^= str.charCodeAt(i) & 0xff;
      h =
      /* Math.imul(h, m): */
      (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Do a few final mixes of the hash to ensure the last few
  // bytes are well-incorporated.


  h ^= h >>> 13;
  h =
  /* Math.imul(h, m): */
  (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  return ((h ^ h >>> 15) >>> 0).toString(36);
}

/* harmony default export */ __webpack_exports__["default"] = (murmur2);


/***/ }),
/* 228 */
/*!**************************************************************!*\
  !*** ../node_modules/@emotion/unitless/dist/unitless.esm.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

/* harmony default export */ __webpack_exports__["default"] = (unitlessKeys);


/***/ }),
/* 229 */
/*!****************************************************!*\
  !*** ../node_modules/@emotion/css/dist/css.esm.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_serialize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/serialize */ 226);


function css() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return Object(_emotion_serialize__WEBPACK_IMPORTED_MODULE_0__["serializeStyles"])(args);
}

/* harmony default export */ __webpack_exports__["default"] = (css);


/***/ }),
/* 230 */
/*!******************************************!*\
  !*** external "gatsby-plugin-dark-mode" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("gatsby-plugin-dark-mode");

/***/ }),
/* 231 */
/*!**********************************************!*\
  !*** ./app/shared/components/SiteFooter.jsx ***!
  \**********************************************/
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
/* 232 */
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
  component: __webpack_require__(/*! ./components/HomeScreen */ 233).default,
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
  exact: true
});

/***/ }),
/* 233 */
/*!****************************************************!*\
  !*** ./app/screens/Home/components/HomeScreen.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 116);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var app_config_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/config/data */ 234);
/* harmony import */ var components_ScreenHelmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/ScreenHelmet */ 235);
/* harmony import */ var components_SiteContact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/SiteContact */ 236);
/* harmony import */ var components_Works__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/Works */ 238);
/* harmony import */ var components_Posts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/Posts */ 284);
/* harmony import */ var _HomeSchema__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./HomeSchema */ 288);








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
  }, "Hola!, soy Gean Marroquin"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-home-screen__hero-about",
    dangerouslySetInnerHTML: {
      __html: app_config_data__WEBPACK_IMPORTED_MODULE_1__["default"].about
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "o-btn c-btn c-btn--secondary u-mr3 u-my2",
    href: "#contact"
  }, "Cont\xE1ctame"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "o-btn c-btn c-btn--secondary c-btn--ghost u-white u-my2",
    href: "#works"
  }, "Ver portafolio")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Posts__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: "o-wrapper u-py5 u-center",
    id: "blog",
    isMultiColumn: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Works__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "u-py5",
    id: "works"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_SiteContact__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "u-py5",
    id: "contact"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_HomeSchema__WEBPACK_IMPORTED_MODULE_6__["default"], null));
}

/* harmony default export */ __webpack_exports__["default"] = (HomeScreen);

/***/ }),
/* 234 */
/*!****************************!*\
  !*** ./app/config/data.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const DOMAIN_NAME = 'geanmarroquin.com';
const BASE_URL = "https://".concat(DOMAIN_NAME);
const TITLE = 'Gean Marroquin';
const ABOUT_HTML = "<p>Establecido en Perú, soy<i class=\"u-fz-h2 u-icon u-mx1 u-color-javascript\">javascript</i>Developer enfocado en la creación de componentes escalables y reusables con<i class=\"u-fz-h2 u-icon u-mx1 u-color-vue_js\">vue_js</i>y<i class=\"u-fz-h2 u-icon u-mx1 u-color-react\">react</i>, apasionado y autodidacta.";
const ABOUT = 'Establecido en Peru, soy Javascript Developer enfocado en la creación de componentes escalables y reusables con vue y react, apasionado y autodidacta.';
/* harmony default export */ __webpack_exports__["default"] = ({
  domainName: DOMAIN_NAME,
  baseUrl: BASE_URL,
  title: TITLE,
  email: 'gean.marroquin@gmail.com',
  about: ABOUT_HTML,
  twitterUser: 'geanmarroquin',
  screens: {
    about: {
      breadCrumbName: 'Sobre mi',
      title: "JS Developer | ".concat(TITLE),
      description: ABOUT,
      canonicalHref: "".concat(BASE_URL, "/about")
    },
    blog: {
      breadCrumbName: 'Blog',
      title: "Art\xEDculos y tutoriales | ".concat(TITLE),
      description: "Tutoriales sobre desarrollo de aplicaciones web y mobile.",
      canonicalHref: "".concat(BASE_URL, "/blog")
    },
    contact: {
      breadCrumbName: 'Contáctame',
      title: "Cont\xE1ctame | ".concat(TITLE),
      description: ABOUT,
      canonicalHref: "".concat(BASE_URL, "/contact")
    },
    home: {
      breadCrumbName: 'Inicio',
      title: "Inicio | ".concat(TITLE),
      description: ABOUT,
      canonicalHref: BASE_URL
    },
    notFound: {
      title: "P\xE1gina no encontrada"
    },
    works: {
      breadCrumbName: 'Portafolio',
      title: "Portafolio | ".concat(TITLE),
      description: "Portafolio de ".concat(TITLE, ", proyectos como freelance y experimentos personales."),
      canonicalHref: "".concat(BASE_URL, "/works")
    }
  }
});

/***/ }),
/* 235 */
/*!************************************************!*\
  !*** ./app/shared/components/ScreenHelmet.jsx ***!
  \************************************************/
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
    }, {
      property: 'og:url ',
      content: canonicalHref
    }, {
      property: 'twitter:card',
      content: 'summary_large_image'
    }, {
      property: 'twitter:site',
      content: '@geanmarroquin'
    }, {
      property: 'twitter:title',
      content: title
    }, {
      property: 'twitter:description',
      content: description
    }, {
      property: 'twitter:creator',
      content: '@geanmarroquin'
    }, {
      property: 'twitter:domain ',
      content: canonicalHref
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
/* 236 */
/*!***********************************************!*\
  !*** ./app/shared/components/SiteContact.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 116);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ 201);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var app_config_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/config/data */ 234);
/* harmony import */ var components_ExternalLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/ExternalLink */ 237);





function SiteContact({
  className,
  id,
  titleTag: TitleTag = 'h2'
}) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "o-wrapper u-center ".concat(className),
    id: id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TitleTag, {
    className: "u-mb3 u-caps u-fz-h2"
  }, "Cont\xE1ctame"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "u-mb4 u-fz-sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "u-muted"
  }, "Env\xEDame un mensaje "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, app_config_data__WEBPACK_IMPORTED_MODULE_2__["default"].email), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "u-muted"
  }, " para trabajar juntos.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
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
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  titleTag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (SiteContact);

/***/ }),
/* 237 */
/*!************************************************!*\
  !*** ./app/shared/components/ExternalLink.jsx ***!
  \************************************************/
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
/* 238 */
/*!*****************************************!*\
  !*** ./app/shared/components/Works.jsx ***!
  \*****************************************/
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
/* harmony import */ var hoc_collection_PropTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! hoc/collection/PropTypes */ 239);
/* harmony import */ var PropTypes_article__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! PropTypes/article */ 240);
/* harmony import */ var hoc_collection_withCollection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! hoc/collection/withCollection */ 241);
/* harmony import */ var components_ShimmerText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/ShimmerText */ 279);
/* harmony import */ var components_SiteError__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/SiteError */ 281);
/* harmony import */ var _WorksList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./WorksList */ 282);









function WorksComponent({
  collectionState,
  collection,
  className,
  id,
  titleTag: TitleTag = 'h2',
  workTitleTag
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
      block: true,
      themeable: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
      className: "o-grid o-grid--gutter-3 u-list-reset"
    }, _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default()(_context = [...new Array(3)]).call(_context, (_, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: "o-grid__item u-12/12 u-6/12@tablet u-4/12@laptop",
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "c-work c-work--is-loading u-relative u-overflow-hidden"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "u-absolute u-left-0 u-top-0",
      style: {
        fontSize: '20rem'
      },
      "aria-label": "Cargando"
    }, "\u2588\u2588"))))));
  } else {
    body = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_WorksList__WEBPACK_IMPORTED_MODULE_8__["default"], {
      works: collection,
      workTitleTag: workTitleTag
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: "o-wrapper ".concat(className),
    id: id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TitleTag, {
    className: "u-mb3 u-caps u-center u-fz-h2"
  }, "Portafolio"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "u-mb5 u-fz-sm u-center u-muted"
  }, "Proyectos personales, freelance y como colaborador."), body);
}
WorksComponent.propTypes = {
  collectionState: hoc_collection_PropTypes__WEBPACK_IMPORTED_MODULE_3__["stateShape"],
  collection: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(PropTypes_article__WEBPACK_IMPORTED_MODULE_4__["articleShape"]).isRequired,
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  id: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  titleTag: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  workTitleTag: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
};
const Works = Object(hoc_collection_withCollection__WEBPACK_IMPORTED_MODULE_5__["default"])(WorksComponent, 'works');
/* harmony default export */ __webpack_exports__["default"] = (Works);

/***/ }),
/* 239 */
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
  error: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.instanceOf(Error)])
}).isRequired;

/***/ }),
/* 240 */
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
/* 241 */
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
/* harmony import */ var recompose_getDisplayName__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! recompose/getDisplayName */ 242);
/* harmony import */ var recompose_getDisplayName__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(recompose_getDisplayName__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ 125);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var hoc_collection_PropTypes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! hoc/collection/PropTypes */ 239);
/* harmony import */ var app_selectors_collections__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/selectors/collections */ 243);
/* harmony import */ var app_actions_collections__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/actions/collections */ 249);









function withCollection(WrappedComponent, collectionName) {
  class CollectionHOC extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
    componentDidMount() {
      const {
        collectionState,
        fetchCollection
      } = this.props;

      if (false) {}

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
/* 242 */
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
/* 243 */
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
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_values__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/values */ 244);
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
/* 244 */
/*!******************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/core-js-stable/object/values.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js-pure/stable/object/values */ 245);

/***/ }),
/* 245 */
/*!************************************************************!*\
  !*** ../node_modules/core-js-pure/stable/object/values.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(/*! ../../es/object/values */ 246);

module.exports = parent;


/***/ }),
/* 246 */
/*!********************************************************!*\
  !*** ../node_modules/core-js-pure/es/object/values.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es.object.values */ 247);
var path = __webpack_require__(/*! ../../internals/path */ 24);

module.exports = path.Object.values;


/***/ }),
/* 247 */
/*!****************************************************************!*\
  !*** ../node_modules/core-js-pure/modules/es.object.values.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ 7);
var $values = __webpack_require__(/*! ../internals/object-to-array */ 248).values;

// `Object.values` method
// https://tc39.github.io/ecma262/#sec-object.values
$({ target: 'Object', stat: true }, {
  values: function values(O) {
    return $values(O);
  }
});


/***/ }),
/* 248 */
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
/* 249 */
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
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_sort__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/sort */ 250);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_sort__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_sort__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/promise */ 63);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ 255);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var normalizr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! normalizr */ 256);
/* harmony import */ var normalizr__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(normalizr__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var app_config_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/config/constants */ 257);





const COLLECTION_SCHEMA_NAME = 'items';
const FETCH_ITEM = 'collections/FETCH_ITEM';
const FETCH_COLLECTION = 'collections/FETCH_COLLECTION';
/**
 * SCHEMA
 */

const itemSchema = new normalizr__WEBPACK_IMPORTED_MODULE_3__["Schema"](COLLECTION_SCHEMA_NAME, {
  idAttribute: entity => {
    return entity.frontMatter.fileName;
  }
});
const arrayOfItemsSchema = Object(normalizr__WEBPACK_IMPORTED_MODULE_3__["arrayOf"])(itemSchema);
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

  let fileRequest;

  try {
    // eslint-disable-next-line
    fileRequest = __webpack_require__(258)("./" + collectionName + '/' + fileName + ".md");
  } catch (error) {
    fileRequest = _babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_1___default.a.reject(error);
  }

  return {
    type: FETCH_ITEM,
    meta: {
      collectionName,
      fileName
    },
    payload: fileRequest.then(item => {
      return Object(normalizr__WEBPACK_IMPORTED_MODULE_3__["normalize"])(item, itemSchema).entities[COLLECTION_SCHEMA_NAME];
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

  let filesRequest;

  try {
    // eslint-disable-next-line
    filesRequest = __webpack_require__(276)("./" + collectionName + ".config.js");
  } catch (error) {
    filesRequest = _babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_1___default.a.reject(error);
  }

  return {
    type: FETCH_COLLECTION,
    meta: {
      collectionName
    },
    payload: filesRequest.then(items => {
      // eslint-disable-next-line
      _babel_runtime_corejs3_core_js_stable_instance_sort__WEBPACK_IMPORTED_MODULE_0___default()(items).call(items, orderByDate);

      return Object(normalizr__WEBPACK_IMPORTED_MODULE_3__["normalize"])(items, arrayOfItemsSchema).entities[COLLECTION_SCHEMA_NAME];
    })
  };
}

function orderByDate(a, b) {
  const aDate = moment__WEBPACK_IMPORTED_MODULE_2___default()(a.frontMatter.date, app_config_constants__WEBPACK_IMPORTED_MODULE_4__["COLLECTION_DATE_FORMAT"]).toDate();
  const bDate = moment__WEBPACK_IMPORTED_MODULE_2___default()(b.frontMatter.date, app_config_constants__WEBPACK_IMPORTED_MODULE_4__["COLLECTION_DATE_FORMAT"]).toDate();

  if (aDate > bDate) {
    return -1;
  }

  if (aDate < bDate) {
    return 1;
  }

  return 0;
}

/***/ }),
/* 250 */
/*!******************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/core-js-stable/instance/sort.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js-pure/stable/instance/sort */ 251);

/***/ }),
/* 251 */
/*!************************************************************!*\
  !*** ../node_modules/core-js-pure/stable/instance/sort.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(/*! ../../es/instance/sort */ 252);

module.exports = parent;


/***/ }),
/* 252 */
/*!********************************************************!*\
  !*** ../node_modules/core-js-pure/es/instance/sort.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var sort = __webpack_require__(/*! ../array/virtual/sort */ 253);

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.sort;
  return it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.sort) ? sort : own;
};


/***/ }),
/* 253 */
/*!*************************************************************!*\
  !*** ../node_modules/core-js-pure/es/array/virtual/sort.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../../modules/es.array.sort */ 254);
var entryVirtual = __webpack_require__(/*! ../../../internals/entry-virtual */ 48);

module.exports = entryVirtual('Array').sort;


/***/ }),
/* 254 */
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
/* 255 */
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),
/* 256 */
/*!****************************!*\
  !*** external "normalizr" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("normalizr");

/***/ }),
/* 257 */
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
/* 258 */
/*!*****************************************************************************************************************************!*\
  !*** ../data sync ../lib/loaders/lazy.js?{"documentEventName":"lazyLoaderFileChange"}!../lib/loaders/markdown ^\.\/.*\.md$ ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./posts/ai.draft.md": 259,
	"./posts/como-mejorar-el-posicionamiento-seo-de-tu-sitio-web.md": 260,
	"./posts/configurar-webpack-5.md": 261,
	"./posts/dart-para-javascript-developers.md": 262,
	"./posts/hiring.draft.md": 263,
	"./posts/implementar-dark-theme.draft.md": 264,
	"./posts/machine-learning.draft.md": 265,
	"./posts/math.draft.md": 266,
	"./posts/nombrar-variables.draft.md": 267,
	"./posts/python-para-javascript-developers.md": 268,
	"./posts/que-es-docker.draft.md": 269,
	"./posts/template.draft.md": 270,
	"./works/fixbrand.md": 271,
	"./works/gean-marroquin.md": 272,
	"./works/la-glorieta.md": 273,
	"./works/ricarica-travel.md": 274,
	"./works/yilancorp.md": 275
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
webpackContext.id = 258;

/***/ }),
/* 259 */
/*!*****************************************************************************************************************************!*\
  !*** ../lib/loaders/lazy.js?{"documentEventName":"lazyLoaderFileChange"}!../lib/loaders/markdown!../data/posts/ai.draft.md ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    module.exports = new Promise(function (resolve) {
      Promise.resolve(/*! require.ensure | data.ai.draft */).then((function (require) {
        resolve(__webpack_require__( /*! !../lib/loaders/markdown!../data/posts/ai.draft.md */ 342 ));
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    });

    if (false) { var event; }
  

/***/ }),
/* 260 */
/*!************************************************************************************************************************************************************************!*\
  !*** ../lib/loaders/lazy.js?{"documentEventName":"lazyLoaderFileChange"}!../lib/loaders/markdown!../data/posts/como-mejorar-el-posicionamiento-seo-de-tu-sitio-web.md ***!
  \************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    module.exports = new Promise(function (resolve) {
      Promise.resolve(/*! require.ensure | data.como-mejorar-el-posicionamiento-seo-de-tu-sitio-web */).then((function (require) {
        resolve(__webpack_require__( /*! !../lib/loaders/markdown!../data/posts/como-mejorar-el-posicionamiento-seo-de-tu-sitio-web.md */ 343 ));
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    });

    if (false) { var event; }
  

/***/ }),
/* 261 */
/*!*****************************************************************************************************************************************!*\
  !*** ../lib/loaders/lazy.js?{"documentEventName":"lazyLoaderFileChange"}!../lib/loaders/markdown!../data/posts/configurar-webpack-5.md ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    module.exports = new Promise(function (resolve) {
      Promise.resolve(/*! require.ensure | data.configurar-webpack-5 */).then((function (require) {
        resolve(__webpack_require__( /*! !../lib/loaders/markdown!../data/posts/configurar-webpack-5.md */ 344 ));
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    });

    if (false) { var event; }
  

/***/ }),
/* 262 */
/*!****************************************************************************************************************************************************!*\
  !*** ../lib/loaders/lazy.js?{"documentEventName":"lazyLoaderFileChange"}!../lib/loaders/markdown!../data/posts/dart-para-javascript-developers.md ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    module.exports = new Promise(function (resolve) {
      Promise.resolve(/*! require.ensure | data.dart-para-javascript-developers */).then((function (require) {
        resolve(__webpack_require__( /*! !../lib/loaders/markdown!../data/posts/dart-para-javascript-developers.md */ 345 ));
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    });

    if (false) { var event; }
  

/***/ }),
/* 263 */
/*!*********************************************************************************************************************************!*\
  !*** ../lib/loaders/lazy.js?{"documentEventName":"lazyLoaderFileChange"}!../lib/loaders/markdown!../data/posts/hiring.draft.md ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    module.exports = new Promise(function (resolve) {
      Promise.resolve(/*! require.ensure | data.hiring.draft */).then((function (require) {
        resolve(__webpack_require__( /*! !../lib/loaders/markdown!../data/posts/hiring.draft.md */ 346 ));
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    });

    if (false) { var event; }
  

/***/ }),
/* 264 */
/*!*************************************************************************************************************************************************!*\
  !*** ../lib/loaders/lazy.js?{"documentEventName":"lazyLoaderFileChange"}!../lib/loaders/markdown!../data/posts/implementar-dark-theme.draft.md ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    module.exports = new Promise(function (resolve) {
      Promise.resolve(/*! require.ensure | data.implementar-dark-theme.draft */).then((function (require) {
        resolve(__webpack_require__( /*! !../lib/loaders/markdown!../data/posts/implementar-dark-theme.draft.md */ 347 ));
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    });

    if (false) { var event; }
  

/***/ }),
/* 265 */
/*!*******************************************************************************************************************************************!*\
  !*** ../lib/loaders/lazy.js?{"documentEventName":"lazyLoaderFileChange"}!../lib/loaders/markdown!../data/posts/machine-learning.draft.md ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    module.exports = new Promise(function (resolve) {
      Promise.resolve(/*! require.ensure | data.machine-learning.draft */).then((function (require) {
        resolve(__webpack_require__( /*! !../lib/loaders/markdown!../data/posts/machine-learning.draft.md */ 348 ));
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    });

    if (false) { var event; }
  

/***/ }),
/* 266 */
/*!*******************************************************************************************************************************!*\
  !*** ../lib/loaders/lazy.js?{"documentEventName":"lazyLoaderFileChange"}!../lib/loaders/markdown!../data/posts/math.draft.md ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    module.exports = new Promise(function (resolve) {
      Promise.resolve(/*! require.ensure | data.math.draft */).then((function (require) {
        resolve(__webpack_require__( /*! !../lib/loaders/markdown!../data/posts/math.draft.md */ 349 ));
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    });

    if (false) { var event; }
  

/***/ }),
/* 267 */
/*!********************************************************************************************************************************************!*\
  !*** ../lib/loaders/lazy.js?{"documentEventName":"lazyLoaderFileChange"}!../lib/loaders/markdown!../data/posts/nombrar-variables.draft.md ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    module.exports = new Promise(function (resolve) {
      Promise.resolve(/*! require.ensure | data.nombrar-variables.draft */).then((function (require) {
        resolve(__webpack_require__( /*! !../lib/loaders/markdown!../data/posts/nombrar-variables.draft.md */ 350 ));
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    });

    if (false) { var event; }
  

/***/ }),
/* 268 */
/*!******************************************************************************************************************************************************!*\
  !*** ../lib/loaders/lazy.js?{"documentEventName":"lazyLoaderFileChange"}!../lib/loaders/markdown!../data/posts/python-para-javascript-developers.md ***!
  \******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    module.exports = new Promise(function (resolve) {
      Promise.resolve(/*! require.ensure | data.python-para-javascript-developers */).then((function (require) {
        resolve(__webpack_require__( /*! !../lib/loaders/markdown!../data/posts/python-para-javascript-developers.md */ 351 ));
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    });

    if (false) { var event; }
  

/***/ }),
/* 269 */
/*!****************************************************************************************************************************************!*\
  !*** ../lib/loaders/lazy.js?{"documentEventName":"lazyLoaderFileChange"}!../lib/loaders/markdown!../data/posts/que-es-docker.draft.md ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    module.exports = new Promise(function (resolve) {
      Promise.resolve(/*! require.ensure | data.que-es-docker.draft */).then((function (require) {
        resolve(__webpack_require__( /*! !../lib/loaders/markdown!../data/posts/que-es-docker.draft.md */ 352 ));
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    });

    if (false) { var event; }
  

/***/ }),
/* 270 */
/*!***********************************************************************************************************************************!*\
  !*** ../lib/loaders/lazy.js?{"documentEventName":"lazyLoaderFileChange"}!../lib/loaders/markdown!../data/posts/template.draft.md ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    module.exports = new Promise(function (resolve) {
      Promise.resolve(/*! require.ensure | data.template.draft */).then((function (require) {
        resolve(__webpack_require__( /*! !../lib/loaders/markdown!../data/posts/template.draft.md */ 353 ));
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    });

    if (false) { var event; }
  

/***/ }),
/* 271 */
/*!*****************************************************************************************************************************!*\
  !*** ../lib/loaders/lazy.js?{"documentEventName":"lazyLoaderFileChange"}!../lib/loaders/markdown!../data/works/fixbrand.md ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    module.exports = new Promise(function (resolve) {
      Promise.resolve(/*! require.ensure | data.fixbrand */).then((function (require) {
        resolve(__webpack_require__( /*! !../lib/loaders/markdown!../data/works/fixbrand.md */ 354 ));
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    });

    if (false) { var event; }
  

/***/ }),
/* 272 */
/*!***********************************************************************************************************************************!*\
  !*** ../lib/loaders/lazy.js?{"documentEventName":"lazyLoaderFileChange"}!../lib/loaders/markdown!../data/works/gean-marroquin.md ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    module.exports = new Promise(function (resolve) {
      Promise.resolve(/*! require.ensure | data.gean-marroquin */).then((function (require) {
        resolve(__webpack_require__( /*! !../lib/loaders/markdown!../data/works/gean-marroquin.md */ 355 ));
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    });

    if (false) { var event; }
  

/***/ }),
/* 273 */
/*!********************************************************************************************************************************!*\
  !*** ../lib/loaders/lazy.js?{"documentEventName":"lazyLoaderFileChange"}!../lib/loaders/markdown!../data/works/la-glorieta.md ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    module.exports = new Promise(function (resolve) {
      Promise.resolve(/*! require.ensure | data.la-glorieta */).then((function (require) {
        resolve(__webpack_require__( /*! !../lib/loaders/markdown!../data/works/la-glorieta.md */ 356 ));
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    });

    if (false) { var event; }
  

/***/ }),
/* 274 */
/*!************************************************************************************************************************************!*\
  !*** ../lib/loaders/lazy.js?{"documentEventName":"lazyLoaderFileChange"}!../lib/loaders/markdown!../data/works/ricarica-travel.md ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    module.exports = new Promise(function (resolve) {
      Promise.resolve(/*! require.ensure | data.ricarica-travel */).then((function (require) {
        resolve(__webpack_require__( /*! !../lib/loaders/markdown!../data/works/ricarica-travel.md */ 357 ));
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    });

    if (false) { var event; }
  

/***/ }),
/* 275 */
/*!******************************************************************************************************************************!*\
  !*** ../lib/loaders/lazy.js?{"documentEventName":"lazyLoaderFileChange"}!../lib/loaders/markdown!../data/works/yilancorp.md ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    module.exports = new Promise(function (resolve) {
      Promise.resolve(/*! require.ensure | data.yilancorp */).then((function (require) {
        resolve(__webpack_require__( /*! !../lib/loaders/markdown!../data/works/yilancorp.md */ 358 ));
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    });

    if (false) { var event; }
  

/***/ }),
/* 276 */
/*!*********************************************************************************************************************!*\
  !*** ../data sync ../lib/loaders/lazy-dir.js?{"documentEventName":"lazyDirLoaderFilesChange"} ^\.\/.*\.config\.js$ ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./posts.config.js": 277,
	"./works.config.js": 278
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
webpackContext.id = 276;

/***/ }),
/* 277 */
/*!***********************************************************************************************************!*\
  !*** ../lib/loaders/lazy-dir.js?{"documentEventName":"lazyDirLoaderFilesChange"}!../data/posts.config.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    module.exports = new Promise(function (resolve, reject) {
      try {
        /* lazy load group of files */
        Promise.resolve(/*! require.ensure | data.posts */).then((function (require) {
          var requireContext = __webpack_require__(359);
          var modules = requireContext.keys().map(function (fileFullName) {
            return requireContext(fileFullName);
          });

          resolve(modules);
        }).bind(null, __webpack_require__)).catch(__webpack_require__.oe)
      } catch (error) {
        reject(error);
      }
    });

    if (false) { var event; }
  

/***/ }),
/* 278 */
/*!***********************************************************************************************************!*\
  !*** ../lib/loaders/lazy-dir.js?{"documentEventName":"lazyDirLoaderFilesChange"}!../data/works.config.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    module.exports = new Promise(function (resolve, reject) {
      try {
        /* lazy load group of files */
        Promise.resolve(/*! require.ensure | data.works */).then((function (require) {
          var requireContext = __webpack_require__(364);
          var modules = requireContext.keys().map(function (fileFullName) {
            return requireContext(fileFullName);
          });

          resolve(modules);
        }).bind(null, __webpack_require__)).catch(__webpack_require__.oe)
      } catch (error) {
        reject(error);
      }
    });

    if (false) { var event; }
  

/***/ }),
/* 279 */
/*!***********************************************!*\
  !*** ./app/shared/components/ShimmerText.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 116);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ 201);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ 280);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);




function ShimmerText({
  darken = false,
  block = false,
  text,
  children,
  themeable = false
}) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('c-shimmer-text', {
      'c-shimmer-text--darken': darken,
      'c-shimmer-text--block': block,
      'c-shimmer-text--themeable': themeable
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-shimmer-text__text u-blokk-font"
  }, text || children));
}

ShimmerText.propTypes = {
  darken: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  block: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  text: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  themeable: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (ShimmerText);

/***/ }),
/* 280 */
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 281 */
/*!*********************************************!*\
  !*** ./app/shared/components/SiteError.jsx ***!
  \*********************************************/
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
  message: error,
  invert
}) {
  const message = error instanceof Error ? error.message : error;
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
  message: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.instanceOf(Error)]).isRequired,
  invert: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (SiteError);

/***/ }),
/* 282 */
/*!*********************************************!*\
  !*** ./app/shared/components/WorksList.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ 171);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/filter */ 155);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ 116);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ 201);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Work__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Work */ 283);






function WorksList({
  works,
  workTitleTag
}) {
  const filteredWorks = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_1___default()(works).call(works, item => {
    var _item$state;

    return !((_item$state = item.state) === null || _item$state === void 0 ? void 0 : _item$state.error);
  });

  const worksCount = filteredWorks.length;

  if (worksCount === 0) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", null, "No hay trabajos que mostrar.");
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", {
    className: "o-grid o-grid--gutter-3 u-list-reset"
  }, _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default()(filteredWorks).call(filteredWorks, work => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
    className: "o-grid__item u-12/12 u-6/12@tablet u-4/12@laptop",
    key: work.frontMatter.fileName
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Work__WEBPACK_IMPORTED_MODULE_4__["default"], {
    work: work.frontMatter,
    titleTag: workTitleTag
  }))));
}

WorksList.propTypes = {
  works: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.shape({
    frontMatter: _Work__WEBPACK_IMPORTED_MODULE_4__["default"].propTypes.work
  })).isRequired,
  workTitleTag: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (WorksList);

/***/ }),
/* 283 */
/*!****************************************!*\
  !*** ./app/shared/components/Work.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var PropTypes_article__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! PropTypes/article */ 240);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ 116);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ 122);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ 201);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);





function Work({
  work,
  titleTag: TitleTag = 'h3'
}) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("article", {
    className: "c-work",
    style: {
      backgroundImage: "url(".concat(work.imageUrl, ")")
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    className: "c-work__link",
    to: "/works/".concat(work.fileName)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TitleTag, {
    className: "c-work__title"
  }, work.title)));
}

Work.propTypes = {
  work: PropTypes_article__WEBPACK_IMPORTED_MODULE_0__["frontMatterShape"].isRequired,
  titleTag: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (Work);

/***/ }),
/* 284 */
/*!*****************************************!*\
  !*** ./app/shared/components/Posts.jsx ***!
  \*****************************************/
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
/* harmony import */ var hoc_collection_PropTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! hoc/collection/PropTypes */ 239);
/* harmony import */ var PropTypes_article__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! PropTypes/article */ 240);
/* harmony import */ var hoc_collection_withCollection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! hoc/collection/withCollection */ 241);
/* harmony import */ var components_ShimmerText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/ShimmerText */ 279);
/* harmony import */ var components_SiteError__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/SiteError */ 281);
/* harmony import */ var _PostsList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PostsList */ 285);









function PostsComponent({
  collectionState,
  collection,
  className,
  id,
  isMultiColumn
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
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_ShimmerText__WEBPACK_IMPORTED_MODULE_6__["default"], {
      themeable: true
    }, _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default()(_context = [...new Array(3)]).call(_context, (_, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: index === 2 ? '' : 'u-pb4',
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "u-block u-fz-lg u-line-height-1"
    }, "Loremipsum"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "u-block u-fz-h0 u-line-height-1"
    }, "Loremipsumdolorsitamet")))));
  } else {
    body = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_PostsList__WEBPACK_IMPORTED_MODULE_8__["default"], {
      posts: collection,
      isMultiColumn: isMultiColumn
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: className,
    id: id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "u-center u-mb4 u-caps"
  }, "Art\xEDculos y tutoriales"), body);
}
PostsComponent.propTypes = {
  collectionState: hoc_collection_PropTypes__WEBPACK_IMPORTED_MODULE_3__["stateShape"],
  collection: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(PropTypes_article__WEBPACK_IMPORTED_MODULE_4__["articleShape"]).isRequired,
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  id: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  isMultiColumn: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool
};
const Posts = Object(hoc_collection_withCollection__WEBPACK_IMPORTED_MODULE_5__["default"])(PostsComponent, 'posts');
/* harmony default export */ __webpack_exports__["default"] = (Posts);

/***/ }),
/* 285 */
/*!*********************************************!*\
  !*** ./app/shared/components/PostsList.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ 171);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/filter */ 155);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/styled-base */ 215);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ 116);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ 201);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Post */ 286);




function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }





const Ul = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_2__["default"])("ul", {
  target: "e1gxv8st0",
  label: "Ul"
})("label:PostList;column-gap:1.5rem;grid-row-gap:1.5rem;list-style:none;margin-bottom:0;padding-left:0;grid-template-columns:", props => props.isMultiColumn ? 'repeat(auto-fill, minmax(300px, 400px))' : 'none', ";justify-content:", props => props.isMultiColumn ? 'center' : 'left', ";.WebKit &,.Blink &,.Gecko &{display:grid;text-align:left;}" + ( true ? "" : undefined));

const Li = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_2__["default"])("li", {
  target: "e1gxv8st1",
  label: "Li"
})( true ? {
  name: "170ikkn-PostList__item",
  styles: "label:PostList__item;margin-bottom:2rem;.WebKit &,.Blink &,.Gecko &{margin-bottom:0;}"
} : undefined);

function PostsList({
  posts,
  isMultiColumn = false
}) {
  const filteredPosts = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_1___default()(posts).call(posts, item => {
    var _item$state;

    return !((_item$state = item.state) === null || _item$state === void 0 ? void 0 : _item$state.error);
  });

  const postsCount = filteredPosts.length;
  return postsCount === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", null, "No hay art\xEDculos que mostrar.") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Ul, {
    isMultiColumn: isMultiColumn
  }, _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default()(filteredPosts).call(filteredPosts, post => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Li, {
    key: post.frontMatter.fileName
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Post__WEBPACK_IMPORTED_MODULE_5__["default"], {
    post: post.frontMatter
  }))));
}

PostsList.propTypes = {
  posts: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.shape({
    frontMatter: _Post__WEBPACK_IMPORTED_MODULE_5__["default"].propTypes.post
  }).isRequired).isRequired,
  isMultiColumn: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (PostsList);

/***/ }),
/* 286 */
/*!****************************************!*\
  !*** ./app/shared/components/Post.jsx ***!
  \****************************************/
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
/* harmony import */ var utils_formatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! utils/formatter */ 287);





function Post({
  post
}) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "u-fz-h2 u-mt0 u-mb1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: "/blog/".concat(post.fileName)
  }, post.title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "u-fz-sm u-muted u-mb0"
  }, Object(utils_formatter__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(post.date), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", null, post.readingTime)));
}

Post.propTypes = {
  post: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    readingTime: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    fileName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    date: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    description: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
  }).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Post);

/***/ }),
/* 287 */
/*!***************************************!*\
  !*** ./app/shared/utils/formatter.js ***!
  \***************************************/
/*! exports provided: formatDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDate", function() { return formatDate; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 255);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var app_config_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/config/constants */ 257);


/**
 * format date with moment
 * @param  {String} date - the date in 'DD-MM-YYYY' format
 * @return {String}      - the date formatted. e.g.: 21 de diciembre de 2016
 */

function formatDate(date) {
  return moment__WEBPACK_IMPORTED_MODULE_0___default()(date, app_config_constants__WEBPACK_IMPORTED_MODULE_1__["COLLECTION_DATE_FORMAT"]).format('LL');
}

/***/ }),
/* 288 */
/*!****************************************************!*\
  !*** ./app/screens/Home/components/HomeSchema.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 116);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_schemaorg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-schemaorg */ 289);
/* harmony import */ var react_schemaorg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_schemaorg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var app_shared_schema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/schema */ 290);
// TODO: apply i18n




function HomeSchema() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [app_shared_schema__WEBPACK_IMPORTED_MODULE_2__["logo"], app_shared_schema__WEBPACK_IMPORTED_MODULE_2__["organization"], app_shared_schema__WEBPACK_IMPORTED_MODULE_2__["webSite"]]
  }; // @ts-ignore

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_schemaorg__WEBPACK_IMPORTED_MODULE_1__["JsonLd"], {
    item: jsonLd
  });
}

/* harmony default export */ __webpack_exports__["default"] = (HomeSchema);

/***/ }),
/* 289 */
/*!**********************************!*\
  !*** external "react-schemaorg" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-schemaorg");

/***/ }),
/* 290 */
/*!******************************!*\
  !*** ./app/shared/schema.ts ***!
  \******************************/
/*! exports provided: logoId, logo, personId, person, organizationId, organization, webSiteId, webSite, blogWebPageId, blogWebPage, aboutWebPageId, aboutWebPage, contactWebPageId, contactWebPage, getCollectionItemWebPage, getCollectionItemBlogPosting, getBreadCrumList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoId", function() { return logoId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logo", function() { return logo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "personId", function() { return personId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "person", function() { return person; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "organizationId", function() { return organizationId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "organization", function() { return organization; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "webSiteId", function() { return webSiteId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "webSite", function() { return webSite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blogWebPageId", function() { return blogWebPageId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blogWebPage", function() { return blogWebPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aboutWebPageId", function() { return aboutWebPageId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aboutWebPage", function() { return aboutWebPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contactWebPageId", function() { return contactWebPageId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contactWebPage", function() { return contactWebPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCollectionItemWebPage", function() { return getCollectionItemWebPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCollectionItemBlogPosting", function() { return getCollectionItemBlogPosting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBreadCrumList", function() { return getBreadCrumList; });
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
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ 171);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/concat */ 2);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! moment */ 255);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var app_config_constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/config/constants */ 257);
/* harmony import */ var app_config_data__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/config/data */ 234);












function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_7___default()(object); if (_babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_6___default.a) { var symbols = _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_6___default()(object); if (enumerableOnly) symbols = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_5___default()(symbols).call(symbols, function (sym) { return _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context2; _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_3___default()(_context2 = ownKeys(Object(source), true)).call(_context2, function (key) { _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(target, key, source[key]); }); } else if (_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { var _context3; _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_3___default()(_context3 = ownKeys(Object(source))).call(_context3, function (key) { _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4___default()(source, key)); }); } } return target; }

 // @ts-ignore

 // @ts-ignore


const logoId = "".concat(app_config_data__WEBPACK_IMPORTED_MODULE_13__["default"].baseUrl, "/#logo");
const logo = {
  '@type': 'ImageObject',
  '@id': logoId,
  'url': 'https://res.cloudinary.com/wochap/image/upload/v1586724454/wochap/android-chrome-384x384.png',
  'caption': app_config_data__WEBPACK_IMPORTED_MODULE_13__["default"].title,
  'width': '384px',
  'height': '384px'
};
const personId = "".concat(app_config_data__WEBPACK_IMPORTED_MODULE_13__["default"].screens.about.canonicalHref, "/#person");
const person = {
  '@type': 'Person',
  '@id': personId,
  'name': app_config_data__WEBPACK_IMPORTED_MODULE_13__["default"].title,
  'jobTitle': 'JS Developer',
  'url': app_config_data__WEBPACK_IMPORTED_MODULE_13__["default"].screens.about.canonicalHref
}; // requires logo

const organizationId = "".concat(app_config_data__WEBPACK_IMPORTED_MODULE_13__["default"].screens.about.canonicalHref, "/#organization");
const organization = {
  '@type': 'Organization',
  '@id': organizationId,
  'name': app_config_data__WEBPACK_IMPORTED_MODULE_13__["default"].title,
  'url': app_config_data__WEBPACK_IMPORTED_MODULE_13__["default"].baseUrl,
  // @ts-ignore
  'logo': {
    '@id': logoId
  }
}; // requires organization

const webSiteId = "".concat(app_config_data__WEBPACK_IMPORTED_MODULE_13__["default"].screens.home.canonicalHref, "/#website");
const webSite = {
  '@type': 'WebSite',
  '@id': webSiteId,
  'url': app_config_data__WEBPACK_IMPORTED_MODULE_13__["default"].screens.home.canonicalHref,
  'name': app_config_data__WEBPACK_IMPORTED_MODULE_13__["default"].screens.home.title,
  'description': app_config_data__WEBPACK_IMPORTED_MODULE_13__["default"].screens.home.description,
  // @ts-ignore
  'publisher': {
    '@id': organizationId
  }
};

const generateWebPage = screenData => {
  const id = "".concat(screenData.canonicalHref, "/#webpage");
  return [id, {
    '@type': 'WebPage',
    '@id': id,
    'url': screenData.canonicalHref,
    'name': screenData.title,
    'description': screenData.description,
    // @ts-ignore
    'isPartOf': {
      '@id': webSiteId
    }
  }];
}; // requires website


const [blogWebPageId, blogWebPage] = generateWebPage(app_config_data__WEBPACK_IMPORTED_MODULE_13__["default"].screens.blog); // requires website

const [aboutWebPageId, aboutWebPage] = generateWebPage(app_config_data__WEBPACK_IMPORTED_MODULE_13__["default"].screens.about); // requires website

const [contactWebPageId, contactWebPage] = generateWebPage(app_config_data__WEBPACK_IMPORTED_MODULE_13__["default"].screens.contact);

const getCollectionItemImage = ({
  siteUrl,
  url,
  caption
}) => ({
  '@type': 'ImageObject',
  '@id': "".concat(siteUrl, "/#image"),
  'url': url,
  'caption': caption
});

const getCollectionItemWebPage = ({
  siteUrl,
  parentId,
  title,
  description
}) => ({
  '@type': 'WebPage',
  '@id': "".concat(siteUrl, "/#webpage"),
  'url': siteUrl,
  'name': title,
  'description': description,
  // @ts-ignore
  'isPartOf': {
    '@id': parentId
  }
});
const getCollectionItemBlogPosting = ({
  screenKey,
  parentId,
  frontMatter
}) => {
  var _context;

  const datePublished = moment__WEBPACK_IMPORTED_MODULE_11___default()(frontMatter.date, app_config_constants__WEBPACK_IMPORTED_MODULE_12__["COLLECTION_DATE_FORMAT"]).format();
  const dateModified = frontMatter.dateModified ? moment__WEBPACK_IMPORTED_MODULE_11___default()(frontMatter.dateModified, app_config_constants__WEBPACK_IMPORTED_MODULE_12__["COLLECTION_DATE_FORMAT"]).format() : datePublished;

  const postUrl = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_10___default()(_context = "".concat(app_config_data__WEBPACK_IMPORTED_MODULE_13__["default"].screens[screenKey].canonicalHref, "/")).call(_context, frontMatter === null || frontMatter === void 0 ? void 0 : frontMatter.slug);

  const collectionItemImage = getCollectionItemImage({
    siteUrl: postUrl,
    url: frontMatter.imageUrl,
    caption: frontMatter.imageCaption || ''
  });
  return {
    '@type': 'BlogPosting',
    '@id': "".concat(postUrl, "/#post"),
    'url': postUrl,
    'description': frontMatter.description,
    'datePublished': datePublished,
    'dateModified': dateModified,
    'name': frontMatter.title,
    'headline': frontMatter.title,
    'wordCount': frontMatter.wordCount,
    'keywords': frontMatter.keywords.join(', '),
    // @ts-ignore
    'author': {
      '@id': personId
    },
    // @ts-ignore
    'publisher': {
      '@id': organizationId
    },
    'image': collectionItemImage,
    // @ts-ignore
    'isPartOf': {
      '@id': parentId
    },
    // @ts-ignore
    'mainEntityOfPage': {
      '@id': parentId
    },
    'inLanguage': {
      '@type': 'Language',
      'name': 'Spanish',
      'alternateName': 'es'
    }
  };
};
const getBreadCrumList = ({
  siteUrl,
  items = []
}) => ({
  '@type': 'BreadcrumbList',
  '@id': "".concat(siteUrl, "/#breadcrumb"),
  'itemListElement': [{
    '@type': 'ListItem',
    'position': 1,
    'name': app_config_data__WEBPACK_IMPORTED_MODULE_13__["default"].screens.home.breadCrumbName,
    'item': app_config_data__WEBPACK_IMPORTED_MODULE_13__["default"].screens.home.canonicalHref
  }, ..._babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_9___default()(items).call(items, (item, index) => _objectSpread({
    '@type': 'ListItem',
    'position': index + 2,
    'name': item.breadCrumbName
  }, items.length - 1 === index ? {} : {
    item: item.siteUrl
  }))]
}); // const jsonLd = {
//   '@context': 'https://schema.org',
//   '@graph': [],
// }

/***/ }),
/* 291 */
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
  component: __webpack_require__(/*! ./components/AboutScreen */ 292).default,
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
/* 292 */
/*!******************************************************!*\
  !*** ./app/screens/About/components/AboutScreen.jsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ 171);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ 116);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var app_config_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/config/data */ 234);
/* harmony import */ var components_ExternalLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/ExternalLink */ 237);
/* harmony import */ var components_ScreenHelmet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/ScreenHelmet */ 235);
/* harmony import */ var _config_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config/data */ 293);
/* harmony import */ var _AboutSchema__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AboutSchema */ 294);








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
  }, "JS Developer"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "c-about-screen__info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: "u-mb5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "u-caps u-mb3"
  }, "Sobre mi"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "o-grid o-grid--gutter-x-5 o-grid--gutter-y-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "o-grid__item u-12/12 u-6/12@tablet",
    dangerouslySetInnerHTML: {
      __html: app_config_data__WEBPACK_IMPORTED_MODULE_2__["default"].about
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
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
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_AboutSchema__WEBPACK_IMPORTED_MODULE_6__["default"], null));
}

/* harmony default export */ __webpack_exports__["default"] = (AboutScreen);

/***/ }),
/* 293 */
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
      title: 'CSS in JS',
      items: [{
        title: 'Emotion',
        link: 'https://emotion.sh/docs/introduction'
      }, {
        title: 'Styled Components',
        link: 'https://styled-components.com/'
      }]
    }, {
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
        link: 'https://webpack.js.org/'
      }, {
        title: 'Parcel',
        link: 'https://parceljs.org/'
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
        title: 'Cypress',
        link: 'https://www.cypress.io/'
      }, {
        title: 'Jest',
        link: 'https://jestjs.io/en/'
      }, {
        title: 'BrowserSync',
        link: 'https://browsersync.io/'
      }]
    }, {
      title: 'Code Style/Linting',
      items: [{
        title: 'Prettier',
        link: 'https://prettier.io/'
      }, {
        title: 'Eslint',
        link: 'https://eslint.org/'
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
/* 294 */
/*!******************************************************!*\
  !*** ./app/screens/About/components/AboutSchema.tsx ***!
  \******************************************************/
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
/* harmony import */ var react_schemaorg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-schemaorg */ 289);
/* harmony import */ var react_schemaorg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_schemaorg__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var app_config_data__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/config/data */ 234);
/* harmony import */ var app_shared_schema__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/shared/schema */ 290);










function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_7___default()(object); if (_babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_6___default.a) { var symbols = _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_6___default()(object); if (enumerableOnly) symbols = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_5___default()(symbols).call(symbols, function (sym) { return _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context; _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_3___default()(_context = ownKeys(Object(source), true)).call(_context, function (key) { _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(target, key, source[key]); }); } else if (_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { var _context2; _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_3___default()(_context2 = ownKeys(Object(source))).call(_context2, function (key) { _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4___default()(source, key)); }); } } return target; }

// TODO: apply i18n

 // @ts-ignore




function AboutSchema() {
  const breadCrumbList = Object(app_shared_schema__WEBPACK_IMPORTED_MODULE_12__["getBreadCrumList"])({
    siteUrl: app_config_data__WEBPACK_IMPORTED_MODULE_11__["default"].screens.about.canonicalHref,
    items: [{
      breadCrumbName: app_config_data__WEBPACK_IMPORTED_MODULE_11__["default"].screens.about.breadCrumbName,
      siteUrl: app_config_data__WEBPACK_IMPORTED_MODULE_11__["default"].screens.about.canonicalHref
    }]
  });
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [app_shared_schema__WEBPACK_IMPORTED_MODULE_12__["logo"], app_shared_schema__WEBPACK_IMPORTED_MODULE_12__["organization"], app_shared_schema__WEBPACK_IMPORTED_MODULE_12__["webSite"], breadCrumbList, _objectSpread({}, app_shared_schema__WEBPACK_IMPORTED_MODULE_12__["aboutWebPage"], {
      breadcrumb: {
        '@id': breadCrumbList['@id']
      }
    })]
  }; // @ts-ignore

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_schemaorg__WEBPACK_IMPORTED_MODULE_10__["JsonLd"], {
    item: jsonLd
  });
}

/* harmony default export */ __webpack_exports__["default"] = (AboutSchema);

/***/ }),
/* 295 */
/*!************************************!*\
  !*** ./app/screens/Works/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _screens_Works__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./screens/Works */ 296);
/* harmony import */ var _screens_Work__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./screens/Work */ 298);
// import {lazy} from 'react'
// import topBar from 'utils/topBar'


/* harmony default export */ __webpack_exports__["default"] = ({
  path: 'works',
  component: __webpack_require__(/*! ./components/WorksScreen */ 307).default,
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
/* 296 */
/*!**************************************************!*\
  !*** ./app/screens/Works/screens/Works/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_WorksScreen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/WorksScreen */ 297);

/* harmony default export */ __webpack_exports__["default"] = ({
  path: '',
  component: _components_WorksScreen__WEBPACK_IMPORTED_MODULE_0__["default"],
  exact: true
});

/***/ }),
/* 297 */
/*!********************************************************************!*\
  !*** ./app/screens/Works/screens/Works/components/WorksScreen.jsx ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 116);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var app_config_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/config/data */ 234);
/* harmony import */ var components_ScreenHelmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/ScreenHelmet */ 235);
/* harmony import */ var components_Works__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Works */ 238);





function WorksScreen() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_ScreenHelmet__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: app_config_data__WEBPACK_IMPORTED_MODULE_1__["default"].screens.works.title,
    description: app_config_data__WEBPACK_IMPORTED_MODULE_1__["default"].screens.works.description,
    canonicalHref: app_config_data__WEBPACK_IMPORTED_MODULE_1__["default"].screens.works.canonicalHref
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Works__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "u-mb5",
    titleTag: "h1",
    workTitleTag: "h2"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (WorksScreen);

/***/ }),
/* 298 */
/*!*************************************************!*\
  !*** ./app/screens/Works/screens/Work/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_WorkScreen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/WorkScreen */ 299);
 // eslint-disable-line

/* harmony default export */ __webpack_exports__["default"] = ({
  path: ':fileName',
  component: _components_WorkScreen__WEBPACK_IMPORTED_MODULE_0__["default"],
  exact: true
});

/***/ }),
/* 299 */
/*!******************************************************************!*\
  !*** ./app/screens/Works/screens/Work/components/WorkScreen.jsx ***!
  \******************************************************************/
/*! exports provided: WorkScreen, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkScreen", function() { return WorkScreen; });
/* harmony import */ var _babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/extends */ 208);
/* harmony import */ var _babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ 116);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var app_config_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/config/data */ 234);
/* harmony import */ var hoc_collection_withCollectionItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! hoc/collection/withCollectionItem */ 300);
/* harmony import */ var components_SiteArticle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/SiteArticle */ 301);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-helmet */ 126);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_5__);






function WorkScreen(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_SiteArticle__WEBPACK_IMPORTED_MODULE_4__["default"], _babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {
    head: {
      canonicalHref: app_config_data__WEBPACK_IMPORTED_MODULE_2__["default"].screens.works.canonicalHref
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_5___default.a, {
    meta: [{
      property: 'robots',
      content: 'noindex'
    }]
  }));
}
/* harmony default export */ __webpack_exports__["default"] = (Object(hoc_collection_withCollectionItem__WEBPACK_IMPORTED_MODULE_3__["default"])(WorkScreen, 'works'));

/***/ }),
/* 300 */
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
/* harmony import */ var recompose_getDisplayName__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! recompose/getDisplayName */ 242);
/* harmony import */ var recompose_getDisplayName__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(recompose_getDisplayName__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var hoc_collection_PropTypes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! hoc/collection/PropTypes */ 239);
/* harmony import */ var app_selectors_collections__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/selectors/collections */ 243);
/* harmony import */ var app_actions_collections__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/actions/collections */ 249);









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
/* 301 */
/*!***********************************************!*\
  !*** ./app/shared/components/SiteArticle.jsx ***!
  \***********************************************/
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
/* harmony import */ var hoc_collection_PropTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! hoc/collection/PropTypes */ 239);
/* harmony import */ var PropTypes_article__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! PropTypes/article */ 240);
/* harmony import */ var app_screens_NotFound_components_NotFoundScreen__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/screens/NotFound/components/NotFoundScreen */ 302);
/* harmony import */ var components_Hero__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/Hero */ 303);
/* harmony import */ var components_MarkdownBody__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/MarkdownBody */ 304);
/* harmony import */ var components_ScreenHelmet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/ScreenHelmet */ 235);
/* harmony import */ var components_ArticleHelmet__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/ArticleHelmet */ 305);
/* harmony import */ var lib_init_tennor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lib/init-tennor */ 306);












function SiteArticle({
  item,
  itemState,
  collectionState,
  head,
  children
}) {
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    Object(lib_init_tennor__WEBPACK_IMPORTED_MODULE_10__["default"])();
  });

  if (itemState.isFulfilled && !itemState.error) {
    var _context;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("article", {
      className: "u-mb5 u-overflow-hidden"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_ScreenHelmet__WEBPACK_IMPORTED_MODULE_8__["default"], {
      title: item.frontMatter.title,
      description: item.frontMatter.description,
      canonicalHref: _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0___default()(_context = "".concat(head.canonicalHref, "/")).call(_context, item.frontMatter.fileName)
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_ArticleHelmet__WEBPACK_IMPORTED_MODULE_9__["default"], {
      imageUrl: item.frontMatter.imageUrl,
      publishedTime: item.frontMatter.date,
      tags: item.frontMatter.tags
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_Hero__WEBPACK_IMPORTED_MODULE_6__["default"], {
      data: item.frontMatter
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_MarkdownBody__WEBPACK_IMPORTED_MODULE_7__["default"], {
      html: item.bodyHtml
    }), children);
  }

  if (collectionState.isFulfilled && !collectionState.error && !itemState.error) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("article", {
      className: "u-mb5"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_Hero__WEBPACK_IMPORTED_MODULE_6__["default"], {
      data: item.frontMatter
    }), itemState.isPending && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_MarkdownBody__WEBPACK_IMPORTED_MODULE_7__["default"], {
      isLoading: true
    }));
  }

  if (itemState.isPending) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("article", {
      className: "u-mb5"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_Hero__WEBPACK_IMPORTED_MODULE_6__["default"], {
      isLoading: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_MarkdownBody__WEBPACK_IMPORTED_MODULE_7__["default"], {
      isLoading: true
    }));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(app_screens_NotFound_components_NotFoundScreen__WEBPACK_IMPORTED_MODULE_5__["default"], {
    message: "Art\xEDculo no encontrado"
  });
}

SiteArticle.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.element,
  item: PropTypes_article__WEBPACK_IMPORTED_MODULE_4__["articleShape"],
  itemState: hoc_collection_PropTypes__WEBPACK_IMPORTED_MODULE_3__["stateShape"],
  collectionState: hoc_collection_PropTypes__WEBPACK_IMPORTED_MODULE_3__["stateShape"],
  head: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    canonicalHref: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired
  }).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (SiteArticle);

/***/ }),
/* 302 */
/*!************************************************************!*\
  !*** ./app/screens/NotFound/components/NotFoundScreen.jsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 116);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ 201);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var app_config_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/config/data */ 234);
/* harmony import */ var components_SiteError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/SiteError */ 281);





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
/* 303 */
/*!****************************************!*\
  !*** ./app/shared/components/Hero.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 116);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ 201);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_ShimmerText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/ShimmerText */ 279);
/* harmony import */ var utils_formatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! utils/formatter */ 287);
/* harmony import */ var components_ExternalLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/ExternalLink */ 237);






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
  }, formattedDate), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "c-hero__reading-time",
    key: "reading-time"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", null, data.readingTime))], footer));
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
/* 304 */
/*!************************************************!*\
  !*** ./app/shared/components/MarkdownBody.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 116);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ 201);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_ShimmerText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/ShimmerText */ 279);




function MarkdownBody({
  html,
  isLoading = false
}) {
  if (isLoading) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "o-wrapper o-wrapper--3 u-pb5"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_ShimmerText__WEBPACK_IMPORTED_MODULE_2__["default"], {
      themeable: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
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
/* 305 */
/*!*************************************************!*\
  !*** ./app/shared/components/ArticleHelmet.jsx ***!
  \*************************************************/
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
/* harmony import */ var app_config_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/config/data */ 234);






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
    }, {
      property: 'twitter:image',
      content: imageUrl
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
/* 306 */
/*!*****************************!*\
  !*** ../lib/init-tennor.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const embedurl = 'https://tenor.com/embed/';
/* harmony default export */ __webpack_exports__["default"] = (function () {
  const canonical = document.querySelector("link[rel='canonical']");
  const elts = document.querySelectorAll('.tenor-embed:not([data-processed]), .tenor-gif-embed:not([data-processed])');

  for (let i = 0; i < elts.length; i += 1) {
    const el = elts[i];
    el.setAttribute('data-processed', true);
    let embedSubPath = el.getAttribute('data-postid');

    if (!embedSubPath) {
      embedSubPath = el.getAttribute('data-type');
    }

    if (!embedSubPath) {
      embedSubPath = el.getAttribute('data-insights-term');

      if (embedSubPath) {
        embedSubPath = "insights/".concat(embedSubPath.replace(/\s+/g, '-'));
        embedSubPath += "?range=".concat(el.getAttribute('data-range'));
        embedSubPath += "&timestamp=".concat(el.getAttribute('data-timestamp'));
      }
    }

    const iframe = document.createElement('iframe');
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('allowtransparency', 'true');
    iframe.setAttribute('allowfullscreen', 'true');
    iframe.setAttribute('scrolling', 'no');
    let root;

    if (el.hasAttribute('data-height')) {
      iframe.setAttribute('width', el.getAttribute('data-width'));
      iframe.setAttribute('height', el.getAttribute('data-height'));
      root = iframe;
    } else {
      const framewrapper = document.createElement('div');
      const aspect = el.getAttribute('data-aspect-ratio') || 1.33;
      el.setAttribute('style', "width:".concat(el.getAttribute('data-width'), ";position:relative;"));
      framewrapper.setAttribute('style', "padding-top:".concat(1 / aspect * 100, "%;"));
      iframe.setAttribute('style', 'position:absolute;top:0;left:0;width:100%;height:100%;');
      framewrapper.appendChild(iframe);
      root = framewrapper;
    }

    let url = embedurl + embedSubPath;
    const sharemethod = el.getAttribute('data-share-method') || 'tenor';

    if (sharemethod === 'host') {
      let hosturl;
      if (canonical) hosturl = canonical.href;else hosturl = document.location.href;
      url += "?canonicalurl=".concat(hosturl);
    }

    iframe.setAttribute('src', url);
    el.innerHTML = '';
    el.appendChild(root);
  }
});

/***/ }),
/* 307 */
/*!******************************************************!*\
  !*** ./app/screens/Works/components/WorksScreen.jsx ***!
  \******************************************************/
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, children);
}

WorksScreen.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element
};
/* harmony default export */ __webpack_exports__["default"] = (WorksScreen);

/***/ }),
/* 308 */
/*!***********************************!*\
  !*** ./app/screens/Blog/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _screens_Post__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./screens/Post */ 309);
/* harmony import */ var _screens_Posts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./screens/Posts */ 318);
// import {lazy} from 'react'
// import topBar from 'utils/topBar'


/* harmony default export */ __webpack_exports__["default"] = ({
  path: 'blog',
  component: __webpack_require__(/*! ./components/BlogScreen */ 321).default,
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
/* 309 */
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
  component: __webpack_require__(/*! ./components/PostScreen */ 310).default,
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
/* 310 */
/*!*****************************************************************!*\
  !*** ./app/screens/Blog/screens/Post/components/PostScreen.jsx ***!
  \*****************************************************************/
/*! exports provided: PostScreen, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostScreen", function() { return PostScreen; });
/* harmony import */ var _babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/extends */ 208);
/* harmony import */ var _babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ 116);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var app_config_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/config/data */ 234);
/* harmony import */ var hoc_collection_withCollectionItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! hoc/collection/withCollectionItem */ 300);
/* harmony import */ var components_SiteArticle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/SiteArticle */ 301);
/* harmony import */ var _PostSchema__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PostSchema */ 311);
/* harmony import */ var _PostComments__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PostComments */ 312);







function PostScreen(props) {
  const {
    canonicalHref
  } = app_config_data__WEBPACK_IMPORTED_MODULE_2__["default"].screens.blog;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_SiteArticle__WEBPACK_IMPORTED_MODULE_4__["default"], _babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {
    head: {
      canonicalHref
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_PostComments__WEBPACK_IMPORTED_MODULE_6__["default"], props)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_PostSchema__WEBPACK_IMPORTED_MODULE_5__["default"], props));
}
/* harmony default export */ __webpack_exports__["default"] = (Object(hoc_collection_withCollectionItem__WEBPACK_IMPORTED_MODULE_3__["default"])(PostScreen, 'posts'));

/***/ }),
/* 311 */
/*!*****************************************************************!*\
  !*** ./app/screens/Blog/screens/Post/components/PostSchema.tsx ***!
  \*****************************************************************/
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
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/concat */ 2);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ 116);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_schemaorg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-schemaorg */ 289);
/* harmony import */ var react_schemaorg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_schemaorg__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var app_config_data__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/config/data */ 234);
/* harmony import */ var app_shared_schema__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/shared/schema */ 290);











function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_7___default()(object); if (_babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_6___default.a) { var symbols = _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_6___default()(object); if (enumerableOnly) symbols = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_5___default()(symbols).call(symbols, function (sym) { return _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context2; _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_3___default()(_context2 = ownKeys(Object(source), true)).call(_context2, function (key) { _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(target, key, source[key]); }); } else if (_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { var _context3; _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_3___default()(_context3 = ownKeys(Object(source))).call(_context3, function (key) { _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4___default()(source, key)); }); } } return target; }

// TODO: apply i18n

 // @ts-ignore




function PostSchema({
  item
}) {
  var _item$state, _item$state2, _context;

  if (!(item === null || item === void 0 ? void 0 : (_item$state = item.state) === null || _item$state === void 0 ? void 0 : _item$state.isFulfilled) || !!(item === null || item === void 0 ? void 0 : (_item$state2 = item.state) === null || _item$state2 === void 0 ? void 0 : _item$state2.error)) {
    return null;
  }

  const {
    frontMatter
  } = item;

  const postUrl = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_9___default()(_context = "".concat(app_config_data__WEBPACK_IMPORTED_MODULE_12__["default"].screens.blog.canonicalHref, "/")).call(_context, frontMatter.slug);

  const itemWebPage = Object(app_shared_schema__WEBPACK_IMPORTED_MODULE_13__["getCollectionItemWebPage"])({
    siteUrl: postUrl,
    parentId: app_shared_schema__WEBPACK_IMPORTED_MODULE_13__["blogWebPageId"],
    title: frontMatter.title,
    description: frontMatter.description
  });
  const blogPosting = Object(app_shared_schema__WEBPACK_IMPORTED_MODULE_13__["getCollectionItemBlogPosting"])({
    screenKey: 'blog',
    parentId: itemWebPage['@id'],
    frontMatter
  });
  const breadCrumbList = Object(app_shared_schema__WEBPACK_IMPORTED_MODULE_13__["getBreadCrumList"])({
    siteUrl: postUrl,
    items: [{
      breadCrumbName: app_config_data__WEBPACK_IMPORTED_MODULE_12__["default"].screens.blog.breadCrumbName,
      siteUrl: app_config_data__WEBPACK_IMPORTED_MODULE_12__["default"].screens.blog.canonicalHref
    }, {
      breadCrumbName: frontMatter.title,
      siteUrl: postUrl
    }]
  });
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [app_shared_schema__WEBPACK_IMPORTED_MODULE_13__["logo"], app_shared_schema__WEBPACK_IMPORTED_MODULE_13__["person"], app_shared_schema__WEBPACK_IMPORTED_MODULE_13__["organization"], app_shared_schema__WEBPACK_IMPORTED_MODULE_13__["webSite"], app_shared_schema__WEBPACK_IMPORTED_MODULE_13__["blogWebPage"], breadCrumbList, _objectSpread({}, itemWebPage, {
      breadcrumb: {
        '@id': breadCrumbList['@id']
      }
    }), blogPosting]
  }; // TODO: add 'articleBody' schema property
  // @ts-ignore

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_schemaorg__WEBPACK_IMPORTED_MODULE_11__["JsonLd"], {
    item: jsonLd
  });
}

/* harmony default export */ __webpack_exports__["default"] = (PostSchema);

/***/ }),
/* 312 */
/*!*******************************************************************!*\
  !*** ./app/screens/Blog/screens/Post/components/PostComments.jsx ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/concat */ 2);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ 116);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby_plugin_disqus_components_Disqus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby-plugin-disqus/components/Disqus */ 313);
/* harmony import */ var gatsby_plugin_disqus_components_Disqus__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gatsby_plugin_disqus_components_Disqus__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var app_config_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/config/data */ 234);
/* harmony import */ var app_shared_PropTypes_article__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/PropTypes/article */ 240);






function PostComments({
  item
}) {
  var _item$state, _item$state2, _context;

  if (!(item === null || item === void 0 ? void 0 : (_item$state = item.state) === null || _item$state === void 0 ? void 0 : _item$state.isFulfilled) || !!(item === null || item === void 0 ? void 0 : (_item$state2 = item.state) === null || _item$state2 === void 0 ? void 0 : _item$state2.error)) {
    return null;
  }

  const {
    frontMatter
  } = item;
  const config = {
    // eslint-disable-next-line
    url: _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0___default()(_context = "".concat(app_config_data__WEBPACK_IMPORTED_MODULE_3__["default"].screens.blog.canonicalHref, "/")).call(_context, frontMatter.slug),
    // eslint-disable-next-line
    identifier: frontMatter.identifier,
    // eslint-disable-next-line
    title: frontMatter.title
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "o-wrapper o-wrapper--3 u-mt5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby_plugin_disqus_components_Disqus__WEBPACK_IMPORTED_MODULE_2___default.a, {
    config: config
  }));
}

PostComments.propTypes = {
  item: app_shared_PropTypes_article__WEBPACK_IMPORTED_MODULE_4__["articleShape"].isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (PostComments);

/***/ }),
/* 313 */
/*!*****************************************************************!*\
  !*** ../node_modules/gatsby-plugin-disqus/components/Disqus.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 314);

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ 315));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ 316));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ 220));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ 116));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ 201));

var _utils = __webpack_require__(/*! ../utils */ 317);

var _jsxFileName = "/Users/brettstevenson/Desktop/Folder/gatsby-plugin-workspace/gatsby-plugin-disqus/src/components/Disqus.jsx";

var Disqus =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(Disqus, _React$Component);

  function Disqus(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.shortname =  true ? "cevichan" : undefined;

    if (props.config) {
      _this.config = props.config;
    } else {
      _this.config = {
        identifier: props.identifier,
        url: props.url,
        title: props.title
      };
    }

    return _this;
  }

  var _proto = Disqus.prototype;

  _proto.componentDidMount = function componentDidMount() {
    if (typeof window !== 'undefined' && window.document && this.shortname) {
      this.cleanInstance();
    }

    this.loadInstance();
  };

  _proto.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
    if (this.props === nextProps) return false;
    return (0, _utils.shallowComparison)(this.props, nextProps);
  };

  _proto.componentDidUpdate = function componentDidUpdate() {
    this.loadInstance();
  };

  _proto.loadInstance = function loadInstance() {
    if (typeof window !== 'undefined' && window.document && this.shortname) {
      var component = this;
      var config = this.config;

      window.disqus_config = function () {
        this.page.identifier = config.identifier;
        this.page.title = config.title;
        this.page.url = config.url;
      };

      (0, _utils.insertScript)("https://" + this.shortname + ".disqus.com/embed.js", 'disqus-embed-script', window.document.body);
    }
  };

  _proto.cleanInstance = function cleanInstance() {
    (0, _utils.removeScript)('disqus-embed-script', window.document.body);

    if (window && window.DISQUS) {
      window.DISQUS.reset();
    }

    try {
      delete window.DISQUS;
    } catch (error) {
      window.DISQUS = undefined;
    }

    var thread = window.document.getElementById('disqus_thread');

    if (thread) {
      while (thread.hasChildNodes()) {
        thread.removeChild(thread.firstChild);
      }
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        config = _this$props.config,
        props = (0, _objectWithoutPropertiesLoose2.default)(_this$props, ["config"]);
    return _react.default.createElement("div", (0, _extends2.default)({
      id: "disqus_thread"
    }, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }));
  };

  return Disqus;
}(_react.default.Component);

exports.default = Disqus;
Disqus.propTypes = {
  config: _propTypes.default.shape({
    /*
     * Tells the Disqus service how to identify the current page. 
     * When the Disqus embed is loaded, the identifier is used to look up 
     * the correct thread. 
     */
    identifier: _propTypes.default.string,

    /*
     * Tells the Disqus service the title of the current page.
     * This is used when creating the thread on Disqus.
     */
    title: _propTypes.default.string,

    /*
     * Tells the Disqus service the URL of the current page.
     * This URL is used when a thread is created so that Disqus knows which
     * page a thread belongs to.
     * (If undefined, Disqus will use the global.location.href)
     */
    url: _propTypes.default.string
  }),
  identifier: _propTypes.default.string,
  title: _propTypes.default.string,
  url: _propTypes.default.string
};

/***/ }),
/* 314 */
/*!***********************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),
/* 315 */
/*!*********************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/extends.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
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
/* 316 */
/*!******************************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),
/* 317 */
/*!*****************************************************!*\
  !*** ../node_modules/gatsby-plugin-disqus/utils.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 314);

exports.__esModule = true;
exports.insertScript = insertScript;
exports.removeScript = removeScript;
exports.debounce = debounce;
exports.isReactElement = isReactElement;
exports.shallowComparison = shallowComparison;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ 116));

function insertScript(src, id, parent) {
  var script = window.document.createElement('script');
  script.async = true;
  script.src = src;
  script.id = id;
  parent.appendChild(script);
  return script;
}

function removeScript(id, parent) {
  var script = window.document.getElementById(id);

  if (script) {
    parent.removeChild(script);
  }
}

function debounce(func, wait, runOnFirstCall) {
  var timeout;
  return function () {
    var context = this;
    var args = arguments;

    var deferredExecution = function deferredExecution() {
      timeout = null;

      if (!runOnFirstCall) {
        func.apply(context, args);
      }
    };

    var callNow = runOnFirstCall && !timeout;
    window.clearTimeout(timeout);
    timeout = setTimeout(deferredExecution, wait);

    if (callNow) {
      func.apply(context, args);
    }
  };
}

function isReactElement(element) {
  if (_react.default.isValidElement(element)) {
    return true;
  } else if (Array.isArray(element)) {
    return element.some(function (value) {
      return _react.default.isValidElement(value);
    });
  }

  return false;
}

function shallowComparison(currentProps, nextProps) {
  // Perform a comparison of all props, excluding React Elements, to prevent unnecessary updates
  var propNames = new Set(Object.keys(currentProps), Object.keys(nextProps));

  for (var _iterator = propNames, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
    var _ref;

    if (_isArray) {
      if (_i >= _iterator.length) break;
      _ref = _iterator[_i++];
    } else {
      _i = _iterator.next();
      if (_i.done) break;
      _ref = _i.value;
    }

    var name = _ref;
    if (currentProps[name] !== nextProps[name] && !isReactElement(currentProps[name])) return true;
  }

  return false;
}

/***/ }),
/* 318 */
/*!*************************************************!*\
  !*** ./app/screens/Blog/screens/Posts/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_PostsScreen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/PostsScreen */ 319);
 // eslint-disable-line

/* harmony default export */ __webpack_exports__["default"] = ({
  path: '',
  component: _components_PostsScreen__WEBPACK_IMPORTED_MODULE_0__["default"],
  exact: true
});

/***/ }),
/* 319 */
/*!*******************************************************************!*\
  !*** ./app/screens/Blog/screens/Posts/components/PostsScreen.jsx ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 116);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var app_config_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/config/data */ 234);
/* harmony import */ var components_ScreenHelmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/ScreenHelmet */ 235);
/* harmony import */ var components_Posts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Posts */ 284);
/* harmony import */ var _PostsSchema__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PostsSchema */ 320);






function PostsScreen() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
    className: "o-wrapper u-overflow-hidden u-mb5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_ScreenHelmet__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: app_config_data__WEBPACK_IMPORTED_MODULE_1__["default"].screens.blog.title,
    description: app_config_data__WEBPACK_IMPORTED_MODULE_1__["default"].screens.blog.description,
    canonicalHref: app_config_data__WEBPACK_IMPORTED_MODULE_1__["default"].screens.blog.canonicalHref
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "u-hide"
  }, "Blog de ", app_config_data__WEBPACK_IMPORTED_MODULE_1__["default"].title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "o-grid o-grid--gutter-5 u-flex-row-reverse"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "o-grid__item u-12/12 u-4/12@laptop"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "u-mb2 u-caps"
  }, "Gean Marroquin"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "u-fw-s-bold u-mb3"
  }, "S\xEDgueme @", app_config_data__WEBPACK_IMPORTED_MODULE_1__["default"].twitterUser), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "u-fz-sm",
    dangerouslySetInnerHTML: {
      __html: app_config_data__WEBPACK_IMPORTED_MODULE_1__["default"].about
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "o-grid__item u-12/12 u-8/12@laptop"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Posts__WEBPACK_IMPORTED_MODULE_3__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PostsSchema__WEBPACK_IMPORTED_MODULE_4__["default"], null));
}

/* harmony default export */ __webpack_exports__["default"] = (PostsScreen);

/***/ }),
/* 320 */
/*!*******************************************************************!*\
  !*** ./app/screens/Blog/screens/Posts/components/PostsSchema.tsx ***!
  \*******************************************************************/
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
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols */ 160);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/keys */ 167);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/defineProperty */ 176);
/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/filter */ 155);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ 171);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ 116);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_schemaorg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-schemaorg */ 289);
/* harmony import */ var react_schemaorg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_schemaorg__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var app_config_data__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/config/data */ 234);
/* harmony import */ var app_shared_hoc_collection_withCollection__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/shared/hoc/collection/withCollection */ 241);
/* harmony import */ var app_shared_schema__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! app/shared/schema */ 290);











function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_6___default()(object); if (_babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_5___default.a) { var symbols = _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_5___default()(object); if (enumerableOnly) symbols = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_8___default()(symbols).call(symbols, function (sym) { return _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context2; _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_3___default()(_context2 = ownKeys(Object(source), true)).call(_context2, function (key) { _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(target, key, source[key]); }); } else if (_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { var _context3; _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_3___default()(_context3 = ownKeys(Object(source))).call(_context3, function (key) { _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4___default()(source, key)); }); } } return target; }

// TODO: apply i18n

 // @ts-ignore

 // @ts-ignore




function PostsSchema({
  collectionState,
  collection
}) {
  var _context;

  if (collectionState.error || !collectionState.isFulfilled) {
    return null;
  }

  const breadCrumbList = Object(app_shared_schema__WEBPACK_IMPORTED_MODULE_14__["getBreadCrumList"])({
    siteUrl: app_config_data__WEBPACK_IMPORTED_MODULE_12__["default"].screens.blog.canonicalHref,
    items: [{
      breadCrumbName: app_config_data__WEBPACK_IMPORTED_MODULE_12__["default"].screens.blog.breadCrumbName,
      siteUrl: app_config_data__WEBPACK_IMPORTED_MODULE_12__["default"].screens.blog.canonicalHref
    }]
  });

  const postsSchemas = _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_9___default()(_context = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_8___default()(collection).call(collection, post => {
    var _post$state;

    return !((_post$state = post.state) === null || _post$state === void 0 ? void 0 : _post$state.error);
  })).call(_context, collectionItem => {
    const {
      frontMatter
    } = collectionItem;
    const blogPosting = Object(app_shared_schema__WEBPACK_IMPORTED_MODULE_14__["getCollectionItemBlogPosting"])({
      screenKey: 'blog',
      parentId: app_shared_schema__WEBPACK_IMPORTED_MODULE_14__["blogWebPageId"],
      frontMatter
    });
    return blogPosting;
  });

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [app_shared_schema__WEBPACK_IMPORTED_MODULE_14__["logo"], app_shared_schema__WEBPACK_IMPORTED_MODULE_14__["person"], app_shared_schema__WEBPACK_IMPORTED_MODULE_14__["organization"], app_shared_schema__WEBPACK_IMPORTED_MODULE_14__["webSite"], breadCrumbList, _objectSpread({}, app_shared_schema__WEBPACK_IMPORTED_MODULE_14__["blogWebPage"], {
      breadcrumb: {
        '@id': breadCrumbList['@id']
      }
    }), ...postsSchemas]
  }; // @ts-ignore

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_schemaorg__WEBPACK_IMPORTED_MODULE_11__["JsonLd"], {
    item: jsonLd
  });
}

/* harmony default export */ __webpack_exports__["default"] = (Object(app_shared_hoc_collection_withCollection__WEBPACK_IMPORTED_MODULE_13__["default"])(PostsSchema, 'posts'));

/***/ }),
/* 321 */
/*!****************************************************!*\
  !*** ./app/screens/Blog/components/BlogScreen.jsx ***!
  \****************************************************/
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, children);
}

BlogScreen.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element
};
/* harmony default export */ __webpack_exports__["default"] = (BlogScreen);

/***/ }),
/* 322 */
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
  component: __webpack_require__(/*! ./components/ContactScreen */ 323).default,
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
/* 323 */
/*!**********************************************************!*\
  !*** ./app/screens/Contact/components/ContactScreen.jsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 116);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var app_config_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/config/data */ 234);
/* harmony import */ var components_ScreenHelmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/ScreenHelmet */ 235);
/* harmony import */ var components_SiteContact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/SiteContact */ 236);





function ContactScreen() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_ScreenHelmet__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: app_config_data__WEBPACK_IMPORTED_MODULE_1__["default"].screens.contact.title,
    description: app_config_data__WEBPACK_IMPORTED_MODULE_1__["default"].screens.contact.description,
    canonicalHref: app_config_data__WEBPACK_IMPORTED_MODULE_1__["default"].screens.contact.canonicalHref
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_SiteContact__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "u-mb5",
    titleTag: "h1"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ContactScreen);

/***/ }),
/* 324 */
/*!***************************************!*\
  !*** ./app/screens/NotFound/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_NotFoundScreen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/NotFoundScreen */ 302);

/* harmony default export */ __webpack_exports__["default"] = ({
  path: '*',
  component: _components_NotFoundScreen__WEBPACK_IMPORTED_MODULE_0__["default"],
  exact: true
});

/***/ }),
/* 325 */
/*!*************************************!*\
  !*** ./app/store/configureStore.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ 326);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _rootReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rootReducer */ 327);
/* harmony import */ var _middlewares__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./middlewares */ 331);




function configureStore(initialState, history) {
  const rootReducer = Object(_rootReducer__WEBPACK_IMPORTED_MODULE_1__["default"])(history);
  const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(rootReducer, initialState, _middlewares__WEBPACK_IMPORTED_MODULE_2__["default"]);

  if (false) {}

  return store;
}

/* harmony default export */ __webpack_exports__["default"] = (configureStore);

/***/ }),
/* 326 */
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 327 */
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
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! redux */ 326);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! connected-react-router */ 123);
/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(connected_react_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var app_reducers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/reducers */ 328);










function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_7___default()(object); if (_babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_6___default.a) { var symbols = _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_6___default()(object); if (enumerableOnly) symbols = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_5___default()(symbols).call(symbols, function (sym) { return _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context; _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_3___default()(_context = ownKeys(Object(source), true)).call(_context, function (key) { _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(target, key, source[key]); }); } else if (_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { var _context2; _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_3___default()(_context2 = ownKeys(Object(source))).call(_context2, function (key) { _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4___default()(source, key)); }); } } return target; }





const createRootReducer = history => Object(redux__WEBPACK_IMPORTED_MODULE_9__["combineReducers"])(_objectSpread({}, app_reducers__WEBPACK_IMPORTED_MODULE_11__, {
  router: Object(connected_react_router__WEBPACK_IMPORTED_MODULE_10__["connectRouter"])(history)
}));

/* harmony default export */ __webpack_exports__["default"] = (createRootReducer);

/***/ }),
/* 328 */
/*!*******************************!*\
  !*** ./app/reducers/index.js ***!
  \*******************************/
/*! exports provided: collections */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _collections__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./collections */ 329);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "collections", function() { return _collections__WEBPACK_IMPORTED_MODULE_0__["default"]; });




/***/ }),
/* 329 */
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
/* harmony import */ var deepmerge__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! deepmerge */ 330);
/* harmony import */ var deepmerge__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var app_actions_collections__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/actions/collections */ 249);










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
/* 330 */
/*!****************************!*\
  !*** external "deepmerge" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("deepmerge");

/***/ }),
/* 331 */
/*!**********************************!*\
  !*** ./app/store/middlewares.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ 326);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ 332);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_promise_middleware__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-promise-middleware */ 333);
/* harmony import */ var redux_promise_middleware__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_promise_middleware__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_immutable_state_invariant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-immutable-state-invariant */ 334);
/* harmony import */ var redux_immutable_state_invariant__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_immutable_state_invariant__WEBPACK_IMPORTED_MODULE_3__);



 // eslint-disable-line

const debug = "production" === 'development';
const middlewares = debug ? Object(redux__WEBPACK_IMPORTED_MODULE_0__["compose"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_immutable_state_invariant__WEBPACK_IMPORTED_MODULE_3___default()(), redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a, redux_promise_middleware__WEBPACK_IMPORTED_MODULE_2___default.a), // redux dev tools
window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__({
  trace: true,
  traceLimit: 5
}) : f => f) : Object(redux__WEBPACK_IMPORTED_MODULE_0__["compose"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a, redux_promise_middleware__WEBPACK_IMPORTED_MODULE_2___default.a));
/* harmony default export */ __webpack_exports__["default"] = (middlewares);

/***/ }),
/* 332 */
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 333 */
/*!*******************************************!*\
  !*** external "redux-promise-middleware" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-promise-middleware");

/***/ }),
/* 334 */
/*!**************************************************!*\
  !*** external "redux-immutable-state-invariant" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-immutable-state-invariant");

/***/ }),
/* 335 */
/*!**********************************!*\
  !*** ./static-build/template.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return template; });
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/json/stringify */ 336);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/promise */ 63);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var cheerio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cheerio */ 340);
/* harmony import */ var cheerio__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cheerio__WEBPACK_IMPORTED_MODULE_2__);


 // eslint-disable-line

function template({
  bodyHTML = '',
  headHTML = '',
  initialState
}) {
  return new _babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_1___default.a((resolve, reject) => {
    try {
      const markup = __webpack_require__(/*! !html-loader!../../dist/index.html */ 341); // eslint-disable-line


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
/* 336 */
/*!*******************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/core-js-stable/json/stringify.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js-pure/stable/json/stringify */ 337);

/***/ }),
/* 337 */
/*!*************************************************************!*\
  !*** ../node_modules/core-js-pure/stable/json/stringify.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(/*! ../../es/json/stringify */ 338);

module.exports = parent;


/***/ }),
/* 338 */
/*!*********************************************************!*\
  !*** ../node_modules/core-js-pure/es/json/stringify.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es.json.stringify */ 339);
var core = __webpack_require__(/*! ../../internals/path */ 24);

if (!core.JSON) core.JSON = { stringify: JSON.stringify };

// eslint-disable-next-line no-unused-vars
module.exports = function stringify(it, replacer, space) {
  return core.JSON.stringify.apply(null, arguments);
};


/***/ }),
/* 339 */
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
/* 340 */
/*!**************************!*\
  !*** external "cheerio" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cheerio");

/***/ }),
/* 341 */
/*!******************************************************************!*\
  !*** ../node_modules/html-loader/dist/cjs.js!../dist/index.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<!DOCTYPE html><html lang=\"es\"><head><meta charset=\"utf-8\"/><meta name=\"theme-color\" content=\"#000000\"/><meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"/><meta property=\"og:type\" content=\"website\"/><meta property=\"og:locale\" content=\"es_LA\"/><link rel=\"manifest\" href=\"/app-manifest.json\"/><link rel=\"shortcut icon\" href=\"/static/icons-ab289d55/favicon.ico\"><link rel=\"icon\" type=\"image/png\" sizes=\"16x16\" href=\"/static/icons-ab289d55/favicon-16x16.png\"><link rel=\"icon\" type=\"image/png\" sizes=\"32x32\" href=\"/static/icons-ab289d55/favicon-32x32.png\"><link rel=\"icon\" type=\"image/png\" sizes=\"48x48\" href=\"/static/icons-ab289d55/favicon-48x48.png\"><link rel=\"manifest\" href=\"/static/icons-ab289d55/manifest.json\"><meta name=\"mobile-web-app-capable\" content=\"yes\"><meta name=\"theme-color\" content=\"#fff\"><meta name=\"application-name\" content=\"wochap\"><link rel=\"apple-touch-icon\" sizes=\"57x57\" href=\"/static/icons-ab289d55/apple-touch-icon-57x57.png\"><link rel=\"apple-touch-icon\" sizes=\"60x60\" href=\"/static/icons-ab289d55/apple-touch-icon-60x60.png\"><link rel=\"apple-touch-icon\" sizes=\"72x72\" href=\"/static/icons-ab289d55/apple-touch-icon-72x72.png\"><link rel=\"apple-touch-icon\" sizes=\"76x76\" href=\"/static/icons-ab289d55/apple-touch-icon-76x76.png\"><link rel=\"apple-touch-icon\" sizes=\"114x114\" href=\"/static/icons-ab289d55/apple-touch-icon-114x114.png\"><link rel=\"apple-touch-icon\" sizes=\"120x120\" href=\"/static/icons-ab289d55/apple-touch-icon-120x120.png\"><link rel=\"apple-touch-icon\" sizes=\"144x144\" href=\"/static/icons-ab289d55/apple-touch-icon-144x144.png\"><link rel=\"apple-touch-icon\" sizes=\"152x152\" href=\"/static/icons-ab289d55/apple-touch-icon-152x152.png\"><link rel=\"apple-touch-icon\" sizes=\"167x167\" href=\"/static/icons-ab289d55/apple-touch-icon-167x167.png\"><link rel=\"apple-touch-icon\" sizes=\"180x180\" href=\"/static/icons-ab289d55/apple-touch-icon-180x180.png\"><link rel=\"apple-touch-icon\" sizes=\"1024x1024\" href=\"/static/icons-ab289d55/apple-touch-icon-1024x1024.png\"><meta name=\"apple-mobile-web-app-capable\" content=\"yes\"><meta name=\"apple-mobile-web-app-status-bar-style\" content=\"black-translucent\"><meta name=\"apple-mobile-web-app-title\" content=\"wochap\"><link rel=\"apple-touch-startup-image\" media=\"(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)\" href=\"/static/icons-ab289d55/apple-touch-startup-image-640x1136.png\"><link rel=\"apple-touch-startup-image\" media=\"(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)\" href=\"/static/icons-ab289d55/apple-touch-startup-image-750x1334.png\"><link rel=\"apple-touch-startup-image\" media=\"(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)\" href=\"/static/icons-ab289d55/apple-touch-startup-image-828x1792.png\"><link rel=\"apple-touch-startup-image\" media=\"(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)\" href=\"/static/icons-ab289d55/apple-touch-startup-image-1125x2436.png\"><link rel=\"apple-touch-startup-image\" media=\"(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)\" href=\"/static/icons-ab289d55/apple-touch-startup-image-1242x2208.png\"><link rel=\"apple-touch-startup-image\" media=\"(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)\" href=\"/static/icons-ab289d55/apple-touch-startup-image-1242x2688.png\"><link rel=\"apple-touch-startup-image\" media=\"(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)\" href=\"/static/icons-ab289d55/apple-touch-startup-image-1536x2048.png\"><link rel=\"apple-touch-startup-image\" media=\"(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)\" href=\"/static/icons-ab289d55/apple-touch-startup-image-1668x2224.png\"><link rel=\"apple-touch-startup-image\" media=\"(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)\" href=\"/static/icons-ab289d55/apple-touch-startup-image-1668x2388.png\"><link rel=\"apple-touch-startup-image\" media=\"(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)\" href=\"/static/icons-ab289d55/apple-touch-startup-image-2048x2732.png\"><link rel=\"apple-touch-startup-image\" media=\"(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)\" href=\"/static/icons-ab289d55/apple-touch-startup-image-1620x2160.png\"><link rel=\"apple-touch-startup-image\" media=\"(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)\" href=\"/static/icons-ab289d55/apple-touch-startup-image-1136x640.png\"><link rel=\"apple-touch-startup-image\" media=\"(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)\" href=\"/static/icons-ab289d55/apple-touch-startup-image-1334x750.png\"><link rel=\"apple-touch-startup-image\" media=\"(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)\" href=\"/static/icons-ab289d55/apple-touch-startup-image-1792x828.png\"><link rel=\"apple-touch-startup-image\" media=\"(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)\" href=\"/static/icons-ab289d55/apple-touch-startup-image-2436x1125.png\"><link rel=\"apple-touch-startup-image\" media=\"(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)\" href=\"/static/icons-ab289d55/apple-touch-startup-image-2208x1242.png\"><link rel=\"apple-touch-startup-image\" media=\"(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)\" href=\"/static/icons-ab289d55/apple-touch-startup-image-2688x1242.png\"><link rel=\"apple-touch-startup-image\" media=\"(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)\" href=\"/static/icons-ab289d55/apple-touch-startup-image-2048x1536.png\"><link rel=\"apple-touch-startup-image\" media=\"(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)\" href=\"/static/icons-ab289d55/apple-touch-startup-image-2224x1668.png\"><link rel=\"apple-touch-startup-image\" media=\"(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)\" href=\"/static/icons-ab289d55/apple-touch-startup-image-2388x1668.png\"><link rel=\"apple-touch-startup-image\" media=\"(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)\" href=\"/static/icons-ab289d55/apple-touch-startup-image-2732x2048.png\"><link rel=\"apple-touch-startup-image\" media=\"(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)\" href=\"/static/icons-ab289d55/apple-touch-startup-image-2160x1620.png\"><link rel=\"icon\" type=\"image/png\" sizes=\"228x228\" href=\"/static/icons-ab289d55/coast-228x228.png\"><meta name=\"msapplication-TileColor\" content=\"#fff\"><meta name=\"msapplication-TileImage\" content=\"/static/icons-ab289d55/mstile-144x144.png\"><meta name=\"msapplication-config\" content=\"/static/icons-ab289d55/browserconfig.xml\"><link rel=\"yandex-tableau-widget\" href=\"/static/icons-ab289d55/yandex-browser-manifest.json\"><link href=\"/static/css/chunk.app.e2e40783.css\" rel=\"stylesheet\"></head><body><script>!function(){if(\"function\"==typeof window.CustomEvent){window.__onThemeChange=function(){},window.__themeChangeEvent=\"themeChange\";var t,n=new CustomEvent(__themeChangeEvent);try{t=localStorage.getItem(\"theme\")}catch(e){}window.__setPreferredTheme=function(e){o(e);try{localStorage.setItem(\"theme\",e)}catch(e){}};var e=window.matchMedia(\"(prefers-color-scheme: dark)\");e.addListener(function(e){window.__setPreferredTheme(e.matches?\"dark\":\"light\")}),o(t||(e.matches?\"dark\":\"light\"))}function o(e){t&&document.body.classList.contains(t)?document.body.classList.replace(t,e):document.body.classList.add(e),window.__theme=e,t=e,window.__onThemeChange(e),document.dispatchEvent(n)}}()</script><div id=\"root\"></div><script>\"serviceWorker\"in navigator&&navigator.serviceWorker.register(\"/service-worker.js\").catch(function(r){console.warn(r)})</script><script type=\"text/javascript\">!function(i){function e(e){for(var a,t,r=e[0],n=e[1],d=e[2],o=0,c=[];o<r.length;o++)t=r[o],Object.prototype.hasOwnProperty.call(u,t)&&u[t]&&c.push(u[t][0]),u[t]=0;for(a in n)Object.prototype.hasOwnProperty.call(n,a)&&(i[a]=n[a]);for(m&&m(e);c.length;)c.shift()();return l.push.apply(l,d||[]),f()}function f(){for(var e,a=0;a<l.length;a++){for(var t=l[a],r=!0,n=1;n<t.length;n++){var d=t[n];0!==u[d]&&(r=!1)}r&&(l.splice(a--,1),e=p(p.s=t[0]))}return e}var t={},s={24:0},u={24:0},l=[];function p(e){if(t[e])return t[e].exports;var a=t[e]={i:e,l:!1,exports:{}};return i[e].call(a.exports,a,a.exports,p),a.l=!0,a.exports}p.e=function(l){var e=[];s[l]?e.push(s[l]):0!==s[l]&&{22:1}[l]&&e.push(s[l]=new Promise(function(e,r){for(var a=\"static/css/chunk.\"+({1:\"data.ai.draft\",2:\"data.como-mejorar-el-posicionamiento-seo-de-tu-sitio-web\",3:\"data.configurar-webpack-5\",4:\"data.dart-para-javascript-developers\",5:\"data.fixbrand\",6:\"data.gean-marroquin\",7:\"data.hiring.draft\",8:\"data.implementar-dark-theme.draft\",9:\"data.la-glorieta\",10:\"data.machine-learning.draft\",11:\"data.math.draft\",12:\"data.nombrar-variables.draft\",13:\"data.posts\",14:\"data.python-para-javascript-developers\",15:\"data.que-es-docker.draft\",16:\"data.ricarica-travel\",17:\"data.template.draft\",18:\"data.works\",19:\"data.yilancorp\",22:\"vendors~katex\",23:\"vendors~platform\"}[l]||l)+\".\"+{1:\"31d6cfe0\",2:\"31d6cfe0\",3:\"31d6cfe0\",4:\"31d6cfe0\",5:\"31d6cfe0\",6:\"31d6cfe0\",7:\"31d6cfe0\",8:\"31d6cfe0\",9:\"31d6cfe0\",10:\"31d6cfe0\",11:\"31d6cfe0\",12:\"31d6cfe0\",13:\"31d6cfe0\",14:\"31d6cfe0\",15:\"31d6cfe0\",16:\"31d6cfe0\",17:\"31d6cfe0\",18:\"31d6cfe0\",19:\"31d6cfe0\",22:\"56f90a90\",23:\"31d6cfe0\",25:\"31d6cfe0\",26:\"31d6cfe0\",27:\"31d6cfe0\"}[l]+\".css\",n=p.p+a,t=document.getElementsByTagName(\"link\"),d=0;d<t.length;d++){var o=(i=t[d]).getAttribute(\"data-href\")||i.getAttribute(\"href\");if(\"stylesheet\"===i.rel&&(o===a||o===n))return e()}var c=document.getElementsByTagName(\"style\");for(d=0;d<c.length;d++){var i;if((o=(i=c[d]).getAttribute(\"data-href\"))===a||o===n)return e()}var f=document.createElement(\"link\");f.rel=\"stylesheet\",f.type=\"text/css\",f.onload=e,f.onerror=function(e){var a=e&&e.target&&e.target.src||n,t=new Error(\"Loading CSS chunk \"+l+\" failed.\\n(\"+a+\")\");t.code=\"CSS_CHUNK_LOAD_FAILED\",t.request=a,delete s[l],f.parentNode.removeChild(f),r(t)},f.href=n,document.getElementsByTagName(\"head\")[0].appendChild(f)}).then(function(){s[l]=0}));var t=u[l];if(0!==t)if(t)e.push(t[2]);else{var a=new Promise(function(e,a){t=u[l]=[e,a]});e.push(t[2]=a);var r,n=document.createElement(\"script\");n.charset=\"utf-8\",n.timeout=120,p.nc&&n.setAttribute(\"nonce\",p.nc),n.src=p.p+\"static/js/chunk.\"+({1:\"data.ai.draft\",2:\"data.como-mejorar-el-posicionamiento-seo-de-tu-sitio-web\",3:\"data.configurar-webpack-5\",4:\"data.dart-para-javascript-developers\",5:\"data.fixbrand\",6:\"data.gean-marroquin\",7:\"data.hiring.draft\",8:\"data.implementar-dark-theme.draft\",9:\"data.la-glorieta\",10:\"data.machine-learning.draft\",11:\"data.math.draft\",12:\"data.nombrar-variables.draft\",13:\"data.posts\",14:\"data.python-para-javascript-developers\",15:\"data.que-es-docker.draft\",16:\"data.ricarica-travel\",17:\"data.template.draft\",18:\"data.works\",19:\"data.yilancorp\",22:\"vendors~katex\",23:\"vendors~platform\"}[l]||l)+\".\"+{1:\"74a6ea0a\",2:\"38ed0796\",3:\"1ebda928\",4:\"c0673889\",5:\"e7097b2b\",6:\"17d2bd49\",7:\"2f636fe9\",8:\"c9194663\",9:\"9244f8ce\",10:\"2d004647\",11:\"b4c42e72\",12:\"c8e51a85\",13:\"91065480\",14:\"6e923ffc\",15:\"807c28f9\",16:\"d9ad5e1e\",17:\"76d1f7f8\",18:\"8dfad95e\",19:\"28611456\",22:\"91db07ce\",23:\"f5ce15ed\",25:\"8b64eee6\",26:\"10c4bb19\",27:\"f83d2af9\"}[l]+\".js\";var d=new Error;r=function(e){n.onerror=n.onload=null,clearTimeout(o);var a=u[l];if(0!==a){if(a){var t=e&&(\"load\"===e.type?\"missing\":e.type),r=e&&e.target&&e.target.src;d.message=\"Loading chunk \"+l+\" failed.\\n(\"+t+\": \"+r+\")\",d.name=\"ChunkLoadError\",d.type=t,d.request=r,a[1](d)}u[l]=void 0}};var o=setTimeout(function(){r({type:\"timeout\",target:n})},12e4);n.onerror=n.onload=r,document.head.appendChild(n)}return Promise.all(e)},p.m=i,p.c=t,p.d=function(e,a,t){p.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:t})},p.r=function(e){\"undefined\"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:\"Module\"}),Object.defineProperty(e,\"__esModule\",{value:!0})},p.t=function(a,e){if(1&e&&(a=p(a)),8&e)return a;if(4&e&&\"object\"==typeof a&&a&&a.__esModule)return a;var t=Object.create(null);if(p.r(t),Object.defineProperty(t,\"default\",{enumerable:!0,value:a}),2&e&&\"string\"!=typeof a)for(var r in a)p.d(t,r,function(e){return a[e]}.bind(null,r));return t},p.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return p.d(a,\"a\",a),a},p.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},p.p=\"/\",p.oe=function(e){throw console.error(e),e};var a=window.webpackJsonp=window.webpackJsonp||[],r=a.push.bind(a);a.push=e,a=a.slice();for(var n=0;n<a.length;n++)e(a[n]);var m=r;f()}([])</script><script type=\"text/javascript\" src=\"/static/js/chunk.react.26d293b4.js\"></script><script type=\"text/javascript\" src=\"/static/js/chunk.vendor.19e4b5bf.js\"></script><script type=\"text/javascript\" src=\"/static/js/chunk.app.a256acce.js\"></script></body></html>";
// Exports
module.exports = code;

/***/ }),
/* 342 */
/*!*********************************************************!*\
  !*** ../lib/loaders/markdown!../data/posts/ai.draft.md ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"frontMatter":{"slug":"ai.draft","fileName":"ai.draft","readingTime":"☕️ 1 minuto de lectura","wordCount":58,"identifier":"blog-#","date":"28-12-2020","dateModified":"28-12-2020","formattedDate":"Abril 2020","imageCaption":"webpack","imageUrl":"//res.cloudinary.com/wochap/image/upload/v1586536747/wochap/hero/configurando_webpack.png","heroImageUrl":"//res.cloudinary.com/wochap/image/upload/v1586536747/wochap/hero/configurando_webpack.png","title":"AI","description":"Aprende a configurar webpack 5 con babel, ¡Actualizate Aquí Ahora!","tags":["webpack"],"keywords":["webpack"]},"bodyHtml":"<h2 id=webpack>Webpack</h2><p><a href=https://drive.google.com/file/d/1IIvPuZ_6LjpE5Qu6EWtR0pYA_4C7BxbD/view rel=nofollow target=_blank>https://drive.google.com/file/d/1IIvPuZ_6LjpE5Qu6EWtR0pYA_4C7BxbD/view</a><p><a href=https://course.elementsofai.com/ rel=nofollow target=_blank>https://course.elementsofai.com/</a><p><a href=https://learndigital.withgoogle.com/digitalgarage/courses rel=nofollow target=_blank>https://learndigital.withgoogle.com/digitalgarage/courses</a><p><a href=https://developers.google.com/machine-learning/crash-course/ml-intro rel=nofollow target=_blank>https://developers.google.com/machine-learning/crash-course/ml-intro</a><p><a href=https://classroom.udacity.com/courses/ud120 rel=nofollow target=_blank>https://classroom.udacity.com/courses/ud120</a><p>learn numpy <a href=\"https://colab.research.google.com/github/google/eng-edu/blob/master/ml/cc/exercises/numpy_ultraquick_tutorial.ipynb?utm_source=mlcc&#38utm_campaign=colab-external&#38utm_medium=referral&#38utm_content=mlcc-prework&#38hl=en\"rel=nofollow target=_blank>https://colab.research.google.com/github/google/eng-edu/blob/master/ml/cc/exercises/numpy_ultraquick_tutorial.ipynb?utm_source=mlcc&#38utm_campaign=colab-external&#38utm_medium=referral&#38utm_content=mlcc-prework&#38hl=en</a><p>learn pandas<h2 id=httpscolabresearchgooglecomgithubgoogleeng-edublobmastermlccexercisespandas_dataframe_ultraquick_tutorialipynbutm_sourcemlccutm_campaigncolab-externalutm_mediumreferralutm_contentmlcc-preworkhlen><a href=\"https://colab.research.google.com/github/google/eng-edu/blob/master/ml/cc/exercises/pandas_dataframe_ultraquick_tutorial.ipynb?utm_source=mlcc&#38utm_campaign=colab-external&#38utm_medium=referral&#38utm_content=mlcc-prework&#38hl=en\"rel=nofollow target=_blank>https://colab.research.google.com/github/google/eng-edu/blob/master/ml/cc/exercises/pandas_dataframe_ultraquick_tutorial.ipynb?utm_source=mlcc&#38utm_campaign=colab-external&#38utm_medium=referral&#38utm_content=mlcc-prework&#38hl=en</a></h2><p><a href=https://openclassrooms.com/en/courses/5281811-learn-how-to-learn rel=nofollow target=_blank>https://openclassrooms.com/en/courses/5281811-learn-how-to-learn</a><p><a href=https://learndigital.withgoogle.com/digitalgarage/course/soft-skills-training rel=nofollow target=_blank>https://learndigital.withgoogle.com/digitalgarage/course/soft-skills-training</a> <a href=\"https://www.open.edu/openlearn/money-business/soft-skills-training?utm_source=digitalgarage&#38utm_campaign=ol&#38utm_medium=partner\"rel=nofollow target=_blank>https://www.open.edu/openlearn/money-business/soft-skills-training?utm_source=digitalgarage&#38utm_campaign=ol&#38utm_medium=partner</a><p><a href=https://learndigital.withgoogle.com/digitalgarage/course/communicate-effectively-at-work rel=nofollow target=_blank>https://learndigital.withgoogle.com/digitalgarage/course/communicate-effectively-at-work</a><p><a href=https://learndigital.withgoogle.com/digitalgarage/course/build-your-online-business rel=nofollow target=_blank>https://learndigital.withgoogle.com/digitalgarage/course/build-your-online-business</a><p><a href=https://learndigital.withgoogle.com/digitalgarage/course/give-and-receive-feedback rel=nofollow target=_blank>https://learndigital.withgoogle.com/digitalgarage/course/give-and-receive-feedback</a><p><a href=https://learndigital.withgoogle.com/digitalgarage/course/digital-wellbeing rel=nofollow target=_blank>https://learndigital.withgoogle.com/digitalgarage/course/digital-wellbeing</a><p><a href=https://learndigital.withgoogle.com/digitalgarage/course/storytelling-design rel=nofollow target=_blank>https://learndigital.withgoogle.com/digitalgarage/course/storytelling-design</a>"}

/***/ }),
/* 343 */
/*!****************************************************************************************************!*\
  !*** ../lib/loaders/markdown!../data/posts/como-mejorar-el-posicionamiento-seo-de-tu-sitio-web.md ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"frontMatter":{"slug":"como-mejorar-el-posicionamiento-seo-de-tu-sitio-web","fileName":"como-mejorar-el-posicionamiento-seo-de-tu-sitio-web","readingTime":"☕️ 5 minutos de lectura","wordCount":947,"identifier":"blog-2","date":"15-04-2020","dateModified":"15-04-2020","formattedDate":"Abril 2020","imageCaption":"SEO posicionamiento en buscadores","imageUrl":"https://res.cloudinary.com/wochap/image/upload/v1586982279/wochap/hero/seo.webp","heroImageUrl":"https://res.cloudinary.com/wochap/image/upload/v1586982279/wochap/hero/seo.webp","title":"¿Comó mejorar el posicionamiento SEO de tu sitio web?","description":"Aprende a mejorar el posicionamiento orgánico (SEO) de tu sitio web con las mejores practicas, ¡Hazlo ahora 😄!","tags":["seo"],"keywords":["seo","posicionamiento web","posicionamiento seo","posicionamiento organico"]},"bodyHtml":"<blockquote><p><strong>DISCLAIMER:</strong> Para no hacer largo el tema no voy a ahondar mucho en cada paso, sin embargo dejare enlaces para que tú puedas profundizar más 😛.</blockquote><p>Esta guía esta enfocada para blogs sin embargo puedes usarlo como referencia para \"e-Commerces\", nuestro motor de búsqueda objetivo es <strong>Google</strong>.<h2 id=nuestra-meta>Nuestra meta</h2><p>Mejorar el posicionamiento orgánico de tu sitio web en las búsquedas realizadas por motores de búsqueda como Google.<h2 id=requerimientos>Requerimientos</h2><ul><li>Saber HTML y JSON.</ul><h2 id=empecemos>Empecemos</h2><h3 id=pasos-para-mejorar-el-posicionamiento-seo-de-tu-sitio-web>Pasos para mejorar el posicionamiento seo de tu sitio web</h3><ol><li><h4 id=enviar-sitemapxml-de-tu-sitio-a-google>Enviar <code>sitemap.xml</code> de tu sitio a Google</h4><p>Para ello debes registrar tu sitio web en <a href=https://search.google.com/search-console/about rel=nofollow target=_blank>Search Console</a>, luego dirigirte a la sección de \"Sitemaps\" y poner la URL de tu <code>sitemap.xml</code>, por ejemplo <a href=https://geanmarroquin.com/sitemap.xml rel=nofollow target=_blank>https://geanmarroquin.com/sitemap.xml</a>.<pre><code class=language-xml><span class=hljs-meta>&#60?xml version=\"1.0\" encoding=\"UTF-8\"?></span>\n<span class=hljs-tag>&lt;<span class=hljs-name>urlset</span> <span class=hljs-attr>xmlns</span>=<span class=hljs-string>\"http://www.sitemaps.org/schemas/sitemap/0.9\"</span>></span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>url</span>></span>\n        <span class=hljs-tag>&lt;<span class=hljs-name>loc</span>></span>https://geanmarroquin.com/<span class=hljs-tag>&#60/<span class=hljs-name>loc</span>></span>\n    <span class=hljs-tag>&#60/<span class=hljs-name>url</span>></span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>url</span>></span>\n        <span class=hljs-tag>&lt;<span class=hljs-name>loc</span>></span>https://geanmarroquin.com/about<span class=hljs-tag>&#60/<span class=hljs-name>loc</span>></span>\n    <span class=hljs-tag>&#60/<span class=hljs-name>url</span>></span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>url</span>></span>\n        <span class=hljs-tag>&lt;<span class=hljs-name>loc</span>></span>https://geanmarroquin.com/blog<span class=hljs-tag>&#60/<span class=hljs-name>loc</span>></span>\n    <span class=hljs-tag>&#60/<span class=hljs-name>url</span>></span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>url</span>></span>\n        <span class=hljs-tag>&lt;<span class=hljs-name>loc</span>></span>https://geanmarroquin.com/contact<span class=hljs-tag>&#60/<span class=hljs-name>loc</span>></span>\n    <span class=hljs-tag>&#60/<span class=hljs-name>url</span>></span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>url</span>></span>\n        <span class=hljs-tag>&lt;<span class=hljs-name>loc</span>></span>https://geanmarroquin.com/blog/configurar-webpack-5<span class=hljs-tag>&#60/<span class=hljs-name>loc</span>></span>\n    <span class=hljs-tag>&#60/<span class=hljs-name>url</span>></span>\n<span class=hljs-tag>&#60/<span class=hljs-name>urlset</span>></span>\n</code></pre><div class=c-markdown-image-full style=\"left:calc(50% - 1em)\"><img alt=\"Search Console sitemap\"src=//res.cloudinary.com/wochap/image/upload/v1586985036/wochap/body/search-console-sitemap.webp></div><p>Si no tienes un archivo <code>sitemap.xml</code>, esta aplicación web <a href=https://www.xml-sitemaps.com/ rel=nofollow target=_blank>https://www.xml-sitemaps.com/</a> lo genera por ti 😉.<p><strong>NOTA:</strong> otra manera de lograr que Google lea tu <code>sitemap.xml</code> es agregando su <code>URL</code> en un archivo <code>robots.txt</code>, este archivo debe ser de acceso publico y estar en la raíz de tu sitio web, por ejemplo: <a href=https://geanmarroquin.com/robots.txt rel=nofollow target=_blank>https://geanmarroquin.com/robots.txt</a><li><h4 id=solucionar-la-duplicidad-de-contenido>Solucionar la duplicidad de contenido</h4><p>Para ello debes agregar en cada página un <code>canonical link element</code>, por ejemplo en la página de un blog post, yo agregaría:<pre><code class=language-html><span class=hljs-tag>&lt;<span class=hljs-name>link</span> <span class=hljs-attr>rel</span>=<span class=hljs-string>\"canonical\"</span> <span class=hljs-attr>href</span>=<span class=hljs-string>\"https://geanmarroquin.com/blog/configurar-webpack-5\"</span> /></span>\n</code></pre><p>De esta manera cuando Google indexe <code>https://geanmarroquin.com/blog/configurar-webpack-5/</code> <strong>nótese</strong> el <code>/</code> al final, Google sabrá que <code>https://geanmarroquin.com/blog/configurar-webpack-5</code> y <code>https://geanmarroquin.com/blog/configurar-webpack-5/</code> son lo mismo, <code>canonical link element</code> va dentro del <code>&#60head></code> de tu página html.<li><h4 id=sacar-un-excelente-puntaje-en-lighthouse>Sacar un excelente puntaje en <a href=https://developers.google.com/web/tools/lighthouse/ rel=nofollow target=_blank>lighthouse</a></h4><p>Ello significa que tu sitio web funciona bajo <code>https</code>, es responsive (funciona bien en mobile devices), es una <a href=https://www.xataka.com/basics/que-es-una-aplicacion-web-progresiva-o-pwa rel=nofollow target=_blank>PWA</a>, etc.<li><h4 id=optimizar-el-contenido-de-tus-páginas>Optimizar el contenido de tus páginas</h4><blockquote><p>Te recomiendo instalar esta extensión para chrome <a href=https://www.omiod.com/meta-seo-inspector/ rel=nofollow target=_blank>meta-seo-inspector</a>, te ayudara a testear lo siguiente.</blockquote><ol><li><p>Asegura que todas tus páginas tengan un titulo y una descripción, por ejemplo:<pre><code class=language-html><span class=hljs-tag>&lt;<span class=hljs-name>title</span>></span>Configurar webpack 5<span class=hljs-tag>&#60/<span class=hljs-name>title</span>></span>\n<span class=hljs-tag>&lt;<span class=hljs-name>meta</span> <span class=hljs-attr>name</span>=<span class=hljs-string>\"description\"</span> <span class=hljs-attr>content</span>=<span class=hljs-string>\"Aprende a configurar webpack 5 con babel.\"</span>></span>\n</code></pre><li><p>Asegura que en cada página solo exista un solo elemento <code>&#60h1></code>.<p><strong>TIP:</strong> Las \"palabras clave\" con las cuales encontraran tu sitio web en Google deben estar presente en <code>&#60title></code>, <code>&#60h1></code> y en el cuerpo de tu página 😉.<li><p>La url de tu página debe guardar relación con <code>&#60title></code> o <code>&#60h1></code><p>Siguiendo los ejemplos más arriba, nuestra URL seria:<p>✅ <code>https://geanmarroquin.com/blog/configurar-webpack-5</code><br>❌ <code>https://geanmarroquin.com/blog/4208429152507995</code></ol><li><h4 id=agregar-structured-data-a-tus-páginas>Agregar <code>Structured Data</code> a tus páginas</h4><blockquote><p>Te recomiendo usar la herramienta <a href=https://www.google.com/webmasters/markup-helper/u/0/ rel=nofollow target=_blank>Structured Data Markup Helper</a> de Google.</blockquote><p><code>Structured Data</code> ayuda a Google a entender mejor el contenido de tu sitio web y a mostrarlo mejor 🌈🦄, existen 3 maneras de agregarlo:<ul><li>JSON-LD (recomendado por Google)<li>Microdata<li>RDF a</ul><p>En este caso usaremos JSON-LD, para la página <a href=https://geanmarroquin.com/blog/configurar-webpack-5 rel=nofollow target=_blank>https://geanmarroquin.com/blog/configurar-webpack-5</a>:<pre><code class=language-html><span class=hljs-tag>&lt;<span class=hljs-name>script</span> <span class=hljs-attr>type</span>=<span class=hljs-string>\"application/ld+json\"</span>></span><span class=javascript>\n  {\n    <span class=hljs-string>\"@context\"</span>: <span class=hljs-string>\"https://schema.org\"</span>,\n    <span class=hljs-string>\"@graph\"</span>: [\n      {\n        <span class=hljs-string>\"@type\"</span>: <span class=hljs-string>\"ImageObject\"</span>,\n        <span class=hljs-string>\"@id\"</span>: <span class=hljs-string>\"https://geanmarroquin.com/#logo\"</span>,\n        <span class=hljs-string>\"url\"</span>: <span class=hljs-string>\"https://res.cloudinary.com/wochap/image/upload/v1586724454/wochap/android-chrome-384x384.png\"</span>,\n        <span class=hljs-string>\"caption\"</span>: <span class=hljs-string>\"Gean Marroquin\"</span>,\n        <span class=hljs-string>\"width\"</span>: <span class=hljs-string>\"384px\"</span>,\n        <span class=hljs-string>\"height\"</span>: <span class=hljs-string>\"384px\"</span>\n      },\n      {\n        <span class=hljs-string>\"@type\"</span>: <span class=hljs-string>\"Person\"</span>,\n        <span class=hljs-string>\"@id\"</span>: <span class=hljs-string>\"https://geanmarroquin.com/about/#person\"</span>,\n        <span class=hljs-string>\"name\"</span>: <span class=hljs-string>\"Gean Marroquin\"</span>,\n        <span class=hljs-string>\"jobTitle\"</span>: <span class=hljs-string>\"JS Developer\"</span>,\n        <span class=hljs-string>\"url\"</span>: <span class=hljs-string>\"https://geanmarroquin.com/about\"</span>\n      },\n      {\n        <span class=hljs-string>\"@type\"</span>: <span class=hljs-string>\"Organization\"</span>,\n        <span class=hljs-string>\"@id\"</span>: <span class=hljs-string>\"https://geanmarroquin.com/about/#organization\"</span>,\n        <span class=hljs-string>\"name\"</span>: <span class=hljs-string>\"Gean Marroquin\"</span>,\n        <span class=hljs-string>\"url\"</span>: <span class=hljs-string>\"https://geanmarroquin.com\"</span>,\n        <span class=hljs-string>\"logo\"</span>: {<span class=hljs-string>\"@id\"</span>: <span class=hljs-string>\"https://geanmarroquin.com/#logo\"</span>}\n      },\n      {\n        <span class=hljs-string>\"@type\"</span>: <span class=hljs-string>\"WebSite\"</span>,\n        <span class=hljs-string>\"@id\"</span>: <span class=hljs-string>\"https://geanmarroquin.com/#website\"</span>,\n        <span class=hljs-string>\"url\"</span>: <span class=hljs-string>\"https://geanmarroquin.com\"</span>,\n        <span class=hljs-string>\"name\"</span>: <span class=hljs-string>\"Inicio | Gean Marroquin\"</span>,\n        <span class=hljs-string>\"description\"</span>: <span class=hljs-string>\"Establecido en Peru, soy Javascript Developer enfocado en la creación de componentes escalables y reusables con vue y react, apasionado y autodidacta.\"</span>,\n        <span class=hljs-string>\"publisher\"</span>: {<span class=hljs-string>\"@id\"</span>: <span class=hljs-string>\"https://geanmarroquin.com/about/#organization\"</span>}\n      },\n      {\n        <span class=hljs-string>\"@type\"</span>: <span class=hljs-string>\"WebPage\"</span>,\n        <span class=hljs-string>\"@id\"</span>: <span class=hljs-string>\"https://geanmarroquin.com/blog/#webpage\"</span>,\n        <span class=hljs-string>\"url\"</span>: <span class=hljs-string>\"https://geanmarroquin.com/blog\"</span>,\n        <span class=hljs-string>\"name\"</span>: <span class=hljs-string>\"Artículos y tutoriales | Gean Marroquin\"</span>,\n        <span class=hljs-string>\"description\"</span>: <span class=hljs-string>\"Tutoriales sobre desarrollo de aplicaciones web y mobile.\"</span>,\n        <span class=hljs-string>\"isPartOf\"</span>: {<span class=hljs-string>\"@id\"</span>: <span class=hljs-string>\"https://geanmarroquin.com/#website\"</span>}\n      },\n      {\n        <span class=hljs-string>\"@type\"</span>: <span class=hljs-string>\"WebPage\"</span>,\n        <span class=hljs-string>\"@id\"</span>: <span class=hljs-string>\"https://geanmarroquin.com/blog/configurar-webpack-5/#webpage\"</span>,\n        <span class=hljs-string>\"url\"</span>: <span class=hljs-string>\"https://geanmarroquin.com/blog/configurar-webpack-5\"</span>,\n        <span class=hljs-string>\"name\"</span>: <span class=hljs-string>\"Configurar webpack 5\"</span>,\n        <span class=hljs-string>\"description\"</span>: <span class=hljs-string>\"Aprende a configurar webpack 5 con babel, ¡Actualizate Aquí Ahora!\"</span>,\n        <span class=hljs-string>\"isPartOf\"</span>: {<span class=hljs-string>\"@id\"</span>: <span class=hljs-string>\"https://geanmarroquin.com/blog/#webpage\"</span>}\n      },\n      {\n        <span class=hljs-string>\"@type\"</span>: <span class=hljs-string>\"BlogPosting\"</span>,\n        <span class=hljs-string>\"@id\"</span>: <span class=hljs-string>\"https://geanmarroquin.com/blog/configurar-webpack-5/#post\"</span>,\n        <span class=hljs-string>\"url\"</span>: <span class=hljs-string>\"https://geanmarroquin.com/blog/configurar-webpack-5\"</span>,\n        <span class=hljs-string>\"description\"</span>: <span class=hljs-string>\"Aprende a configurar webpack 5 con babel\"</span>,\n        <span class=hljs-string>\"datePublished\"</span>: <span class=hljs-string>\"2020-04-09T00:00:00-05:00\"</span>,\n        <span class=hljs-string>\"dateModified\"</span>: <span class=hljs-string>\"2020-04-12T00:00:00-05:00\"</span>,\n        <span class=hljs-string>\"name\"</span>: <span class=hljs-string>\"Configurar webpack 5\"</span>,\n        <span class=hljs-string>\"headline\"</span>: <span class=hljs-string>\"Configurar webpack 5\"</span>,\n        <span class=hljs-string>\"keywords\"</span>: <span class=hljs-string>\"webpack, babel\"</span>,\n        <span class=hljs-string>\"author\"</span>: {<span class=hljs-string>\"@id\"</span>: <span class=hljs-string>\"https://geanmarroquin.com/about/#person\"</span>},\n        <span class=hljs-string>\"publisher\"</span>: {<span class=hljs-string>\"@id\"</span>: <span class=hljs-string>\"https://geanmarroquin.com/about/#organization\"</span>},\n        <span class=hljs-string>\"image\"</span>: {\n          <span class=hljs-string>\"@type\"</span>: <span class=hljs-string>\"ImageObject\"</span>,\n          <span class=hljs-string>\"@id\"</span>: <span class=hljs-string>\"https://geanmarroquin.com/blog/configurar-webpack-5/#image\"</span>,\n          <span class=hljs-string>\"url\"</span>: <span class=hljs-string>\"//res.cloudinary.com/wochap/image/upload/v1586536747/wochap/hero/configurando_webpack.png\"</span>,\n          <span class=hljs-string>\"caption\"</span>: <span class=hljs-string>\"webpack\"</span>\n        },\n        <span class=hljs-string>\"mainEntityOfPage\"</span>: {<span class=hljs-string>\"@id\"</span>: <span class=hljs-string>\"https://geanmarroquin.com/blog/configurar-webpack-5/#webpage\"</span>}\n      }\n    ]\n  }\n</span><span class=hljs-tag>&#60/<span class=hljs-name>script</span>></span>\n</code></pre><p>Ya con agregar el <code>&#60script></code> de arriba al <code>&#60body></code> de nuestra página bastaria que nuestra pagian tenga <code>Structured Data</code>.<p>Para conocer más del esquema usado, haz click <a href=https://schema.org/docs/gs.html rel=nofollow target=_blank>aquí</a>, y sobre como afecta <code>Structured Data</code> a tu página <a href=https://developers.google.com/search/docs/guides/search-gallery rel=nofollow target=_blank>aquí</a>.</ol><h2 id=glosario>Glosario</h2><ul><li><strong>SEO</strong>: De sus siglas en inglés Search Engine Optimization.<li><strong>Posicionamiento orgánico</strong>: Es el posicionamiento natural que aplica cualquier Seach Engine, este mejorará aplicando las buenas practicas descritas más arriba.</ul><h2 id=herramientas>Herramientas</h2><ul><li><a href=https://www.xml-sitemaps.com/ rel=nofollow target=_blank>https://www.xml-sitemaps.com/</a> genera sitemap.xml a partir de tu URL.<li><a href=https://www.screamingfrog.co.uk/ rel=nofollow target=_blank>https://www.screamingfrog.co.uk/</a> sirve para inspeccionar todas tus URLs, muy bueno para encontrar links que no llevan a nada.<li><a href=https://www.omiod.com/meta-seo-inspector/ rel=nofollow target=_blank>https://www.omiod.com/meta-seo-inspector/</a> extensión de chrome para inspeccionar SEO</ul><h2 id=referencias>Referencias</h2><ul><li><a href=https://yoast.com/rel-canonical/ rel=nofollow target=_blank>https://yoast.com/rel-canonical/</a><li><a href=https://developers.google.com/search/docs/guides/search-gallery rel=nofollow target=_blank>https://developers.google.com/search/docs/guides/search-gallery</a></ul>"}

/***/ }),
/* 344 */
/*!*********************************************************************!*\
  !*** ../lib/loaders/markdown!../data/posts/configurar-webpack-5.md ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"frontMatter":{"slug":"configurar-webpack-5","fileName":"configurar-webpack-5","readingTime":"☕️ 7 minutos de lectura","wordCount":1337,"identifier":"blog-1","date":"09-04-2020","dateModified":"12-04-2020","formattedDate":"Abril 2020","imageCaption":"webpack","imageUrl":"//res.cloudinary.com/wochap/image/upload/v1586536747/wochap/hero/configurando_webpack.png","heroImageUrl":"//res.cloudinary.com/wochap/image/upload/v1586536747/wochap/hero/configurando_webpack.png","title":"Configurar webpack 5","description":"Aprende a configurar webpack 5 con babel, ¡Actualizate Aquí Ahora!","tags":["webpack","babel"],"keywords":["webpack","webpack 5","babel","webpack-dev-server"]},"bodyHtml":"<p>Configurar webpack puede ser frustrante...<div class=tenor-gif-embed data-aspect-ratio=1.7785714285714287 data-postid=5384575 data-share-method=host data-width=100%><a href=https://tenor.com/view/fuck-work-gif-5384575>Fuckwork Angry GIF</a> from <a href=https://tenor.com/search/fuckwork-gifs>Fuckwork GIFs</a></div><br><p>Por ello en esta guía te enseñare como configurar <a href=https://webpack.js.org/concepts/ rel=nofollow target=_blank>webpack 5</a> con babel, si deseas ver la configuración final haz click <a href=#configuracion-final>aquí</a> y <a href=https://github.com/wochap/setup-webpack-5 rel=nofollow target=_blank>aquí</a> para ir al repo.<blockquote><p>al día de hoy (9 de abril del 2020) <a href=https://webpack.js.org/concepts/hot-module-replacement/ rel=nofollow target=_blank>HMR (hot module replacement)</a> no funciona con <strong>html-webpack-plugin</strong>, y tambien hay algunos plugins que no funcionaran (por el momento) ya que la API interna cambio bastante en webpack 5</blockquote><h2 id=nuestra-meta>Nuestra meta</h2><p>Tener un solo archivo de configuración <code>webpack.config.js</code> para <code>production</code> y <code>development</code>, configurar <a href=https://babeljs.io/ rel=nofollow target=_blank>babel</a> para que inserte <a href=https://developer.mozilla.org/es/docs/Glossary/Polyfill rel=nofollow target=_blank>polyfills</a> y transforme nuestro código JS a JS que entiendan nuestros <code>target browsers</code>.<h2 id=requerimientos>Requerimientos</h2><ul><li>Saber lo basico de <a href=https://nodejs.org/ rel=nofollow target=_blank>NodeJS</a>.</ul><h2 id=empecemos>Empecemos</h2><h3 id=pasos-para-configurar-webpack-5>Pasos para configurar webpack 5</h3><ol><li><h4 id=instalar-dependencias>Instalar dependencias</h4><p>Webpack<ul><li>webpack - v5.0.0-beta.13<li>webpack-cli - v3.3.11 - <em>permite usar webpack en la terminal</em><li>webpack-dev-server - v3.10.3 - <em>crea un servidor express para poder hacer uso de HMR</em></ul><p>Webpack loaders<ul><li>css-loader - v3.4.2 - <em>permite importar archivos CSS a nuestros JS</em><li>postcss-loader - v3.0.0 - <em>permite aplicar plugins de <a href=https://postcss.org/ rel=nofollow target=_blank>postcss</a> a nuestros CSS</em><li>style-loader - v1.1.3 - <em>agrega una etiqueta <code>style</code> en el DOM por cada CSS que importemos en nuestros JS</em><li>babel-loader - v8.1.0 - <em>permite aplicar babel a todos nuestros JS</em></ul><p>Webpack plugins<ul><li>clean-webpack-plugin - v3.0.0 - <em>eliminara la carpeta dist en cada production build</em><li>html-webpack-plugin - v4.0.4 - <em>inserta en el archivo html que le indiques todos tus imports (script, style, link, etc)</em><li>mini-css-extract-plugin - v0.9.0 - <em>agrega una etiqueta <code>link</code> en el DOM por cada CSS que importemos en nuestros JS</em></ul><p>Babel<ul><li>@babel/core - v7.9.0<li>@babel/plugin-transform-runtime - v7.9.0 - <em>encargado de agregar los polyfills</em><li>@babel/preset-env - v7.9.0 - <em>encargado de transformar nuestro código JS a JS entendible por nuestros <code>target browsers</code></em><li>@babel/runtime-corejs3 - v7.9.2 - <em>modulo que contiene los polyfills</em></ul><p>Postcss plugins<ul><li>autoprefixer - v9.7.5 - <em>insertara prefijos (-webkit-) segun lo requieran nuestros <code>target browsers</code></em></ul><li><h4 id=agregar-nuestros-tasks-en-packagejson>Agregar nuestros tasks en package.json</h4><p>En development, usaremos el comando <code>npm run dev</code> y para production <code>npm run build</code>.<pre><code class=language-json>{\n  <span class=hljs-attr>\"scripts\"</span>: {\n    <span class=hljs-attr>\"build\"</span>: <span class=hljs-string>\"webpack --mode production\"</span>, <span class=hljs-comment>// corre webpack con la configuracion para production, con ello webpack sera capaz de analizar, comprimir, y quitar código innecesario.</span>\n    <span class=hljs-attr>\"dev\"</span>: <span class=hljs-string>\"webpack-dev-server --mode development\"</span> <span class=hljs-comment>// para hacer uso del famoso HMR necesitamos un servidor en nodejs, webpack-dev-server lo creara por nosotros</span>\n  }\n}\n</code></pre><li><h4 id=crear-nuestro-archivo-browserslistrc>Crear nuestro archivo <a href=https://github.com/browserslist/browserslist#browserslist- rel=nofollow target=_blank><code>.browserslistrc</code></a></h4><p>En este archivo indicamos nuestros <code>target browsers</code>, los navegadores que soportaremos. <a href=https://babeljs.io/docs/en/babel-preset-env rel=nofollow target=_blank>Babel</a> y <a href=https://autoprefixer.github.io/ rel=nofollow target=_blank>Autoprefixer</a> usaran este archivo si lo encuentran en la raiz del proyecto.<pre><code><span class=hljs-comment># .browserslistrc</span>\n\n<span class=hljs-meta>></span> <span class=hljs-string>1%</span>\n<span class=hljs-attr>last</span> <span class=hljs-string>2 versions</span>\n<span class=hljs-attr>not</span> <span class=hljs-string>dead</span>\n<span class=hljs-attr>not</span> <span class=hljs-string>IE 11</span>\n<span class=hljs-attr>not</span> <span class=hljs-string>IE 10</span>\n</code></pre><li><h4 id=crear-nuestro-archivo-babelrc>Crear nuestro archivo <code>.babelrc</code></h4><p>Con esto babel sera capaz de insertar polyfills y transformar JS donde se requiera segun nuestro <code>target browsers</code>.<pre><code class=language-json>{\n  <span class=hljs-attr>\"presets\"</span>: [[<span class=hljs-string>\"@babel/preset-env\"</span>]],\n  <span class=hljs-attr>\"plugins\"</span>: [\n    [\n      <span class=hljs-string>\"@babel/plugin-transform-runtime\"</span>,\n      {\n        <span class=hljs-attr>\"corejs\"</span>: <span class=hljs-number>3</span>\n      }\n    ]\n  ]\n}\n</code></pre><li><h4 id=crear-nuestro-archivo-postcssconfigjs>Crear nuestro archivo <code>postcss.config.js</code></h4><p><code>postcss-loader</code> usara esta configuracion, solo usaremos el plugin de autoprefixer.<pre><code class=language-js><span class=hljs-built_in>module</span>.exports = {\n  <span class=hljs-attr>plugins</span>: {\n    <span class=hljs-attr>autoprefixer</span>: {},\n  },\n}\n</code></pre><li><h4 id=crear-nuestro-archivo-webpackconfigjs>Crear nuestro archivo <code>webpack.config.js</code></h4><div class=tenor-gif-embed data-aspect-ratio=1.7744360902255638 data-postid=10383696 data-share-method=host data-width=100%><a href=https://tenor.com/view/ahora-si-viene-lo-chido-gif-10383696>Ahora Si GIF</a> from <a href=https://tenor.com/search/ahora-gifs>Ahora GIFs</a></div><br><p>Empezemos por importar algunos modulos, mas <a href=#1-instalar-dependencias>arriba</a> explique que hace cada modulo.<pre><code class=language-js><span class=hljs-keyword>const</span> path = <span class=hljs-built_in>require</span>(<span class=hljs-string>'path'</span>)\n<span class=hljs-keyword>const</span> webpack = <span class=hljs-built_in>require</span>(<span class=hljs-string>'webpack'</span>)\n<span class=hljs-keyword>const</span> HtmlWebpackPlugin = <span class=hljs-built_in>require</span>(<span class=hljs-string>'html-webpack-plugin'</span>)\n<span class=hljs-keyword>const</span> {CleanWebpackPlugin} = <span class=hljs-built_in>require</span>(<span class=hljs-string>'clean-webpack-plugin'</span>)\n<span class=hljs-keyword>const</span> MiniCssExtractPlugin = <span class=hljs-built_in>require</span>(<span class=hljs-string>'mini-css-extract-plugin'</span>)\n</code></pre><p>El archivo <code>webpack.config.js</code> debe exportar un objeto o una funcion devolviendo un objeto, usaremos la segunda, ya que de esta manera podremos saber si estamos en <code>development</code> o <code>production</code>.<pre><code class=language-js><span class=hljs-keyword>const</span> config = {}\n<span class=hljs-built_in>module</span>.exports = <span class=hljs-function>(<span class=hljs-params>env, argv</span>) =></span> {\n  <span class=hljs-keyword>if</span> (argv.mode === <span class=hljs-string>'development'</span>) {\n    <span class=hljs-comment>// <span class=hljs-doctag>TODO:</span> usar style-loader, es lo recomendado para usar HMR</span>\n    <span class=hljs-comment>// <span class=hljs-doctag>TODO:</span> habilitar HMR plugin</span>\n  }\n\n  <span class=hljs-keyword>if</span> (argv.mode === <span class=hljs-string>'production'</span>) {\n    <span class=hljs-comment>// <span class=hljs-doctag>TODO:</span> insertar `contenthash` en los archivos de salida, esto para tener `long term caching`</span>\n    <span class=hljs-comment>// <span class=hljs-doctag>TODO:</span> usar MiniCssExtractPlugin, para extraer todo nuestro CSS a un archivo CSS, de lo contrario nuestro CSS quedaria en los archivos JS</span>\n  }\n  <span class=hljs-keyword>return</span> config\n}\n</code></pre><p>La configuracion en comun que tiene <code>production</code> y <code>development</code> estara en el objeto <code>config</code>.<pre><code class=language-js><span class=hljs-keyword>const</span> config = {\n  <span class=hljs-comment>// el punto de entrada de nuestra APP, JS que se ejecutara en el BROWSER</span>\n  <span class=hljs-attr>entry</span>: <span class=hljs-string>'./src/index.js'</span>,\n  <span class=hljs-attr>output</span>: {\n    <span class=hljs-comment>// el nombre que le daremos al archivo de salida principal</span>\n    <span class=hljs-attr>filename</span>: <span class=hljs-string>'main.js'</span>,\n\n    <span class=hljs-comment>// donde se crearan los archivos de salida</span>\n    <span class=hljs-attr>path</span>: path.resolve(__dirname, <span class=hljs-string>'dist'</span>),\n  },\n\n  <span class=hljs-comment>// configuracion para webpack-dev-server</span>\n  <span class=hljs-attr>devServer</span>: {\n    <span class=hljs-comment>// abrir la APP en el BROWSER</span>\n    <span class=hljs-attr>open</span>: <span class=hljs-literal>true</span>,\n\n    <span class=hljs-comment>// HACK para permitir ver la APP desde otros dispositivos</span>\n    <span class=hljs-attr>host</span>: <span class=hljs-string>'0.0.0.0'</span>,\n\n    <span class=hljs-comment>// ver el progreso de compilacion en la consola</span>\n    <span class=hljs-attr>progress</span>: <span class=hljs-literal>true</span>,\n\n    <span class=hljs-comment>// esto para que todas las URLs que fallen (404) devuelvan nuestro index.html</span>\n    <span class=hljs-attr>historyApiFallback</span>: <span class=hljs-literal>true</span>,\n\n    <span class=hljs-comment>// para que los errores en consola aparescan en un overlay en el BROWSER</span>\n    <span class=hljs-attr>overlay</span>: <span class=hljs-literal>true</span>,\n\n    <span class=hljs-comment>// habilitar HMR</span>\n    <span class=hljs-attr>hot</span>: <span class=hljs-literal>true</span>,\n  },\n  <span class=hljs-attr>resolve</span>: {\n    <span class=hljs-attr>alias</span>: {\n      <span class=hljs-comment>// un alias que apunta a la carpeta `src/components`</span>\n      <span class=hljs-string>'@components'</span>: path.resolve(__dirname, <span class=hljs-string>'src/components'</span>),\n    },\n  },\n  <span class=hljs-attr>module</span>: {\n    <span class=hljs-attr>rules</span>: [\n      {\n        <span class=hljs-comment>// a que archivos afectara esta regla</span>\n        <span class=hljs-attr>test</span>: <span class=hljs-regexp>/\\.js$/</span>,\n\n        <span class=hljs-comment>// los loaders que apliquemos en la regla no afectaran</span>\n        <span class=hljs-comment>// a archivos que coincidan con</span>\n        exclude: <span class=hljs-regexp>/(node_modules|bower_components)/</span>,\n\n        use: {\n          <span class=hljs-comment>// el nombre  del loader que usaremos</span>\n          <span class=hljs-attr>loader</span>: <span class=hljs-string>'babel-loader'</span>,\n          <span class=hljs-attr>options</span>: {\n            <span class=hljs-comment>// mejora la velocidad de compilacion</span>\n            <span class=hljs-comment>// si en algun momento no se ven reflejados tus cambios</span>\n            <span class=hljs-comment>// elimina la carpeta `node_modules/.cache`</span>\n            <span class=hljs-attr>cacheDirectory</span>: <span class=hljs-literal>true</span>,\n          },\n        },\n      },\n    ],\n  },\n  <span class=hljs-attr>plugins</span>: [\n    <span class=hljs-keyword>new</span> CleanWebpackPlugin(),\n    <span class=hljs-keyword>new</span> HtmlWebpackPlugin({\n      <span class=hljs-comment>// la ruta donde se encuentra nuestro index.html</span>\n      <span class=hljs-comment>// para que HtmlWebpackPlugin lo use</span>\n      <span class=hljs-attr>template</span>: <span class=hljs-string>'src/index.html'</span>,\n    }),\n  ],\n}\n</code></pre><p>Ahora solo falta completar nuestros TODOs<pre><code class=language-js><span class=hljs-built_in>module</span>.exports = <span class=hljs-function>(<span class=hljs-params>env, argv</span>) =></span> {\n  <span class=hljs-keyword>if</span> (argv.mode === <span class=hljs-string>'development'</span>) {\n    <span class=hljs-comment>// nuestra regla para poder importar archivos CSS</span>\n    config.module.rules.push({\n      <span class=hljs-attr>test</span>: <span class=hljs-regexp>/\\.css$/</span>,\n\n      <span class=hljs-comment>// el primer loader en aplicarse es el ultimo, en este caso `postcss-loader`</span>\n      use: [<span class=hljs-string>'style-loader'</span>, <span class=hljs-string>'css-loader'</span>, <span class=hljs-string>'postcss-loader'</span>],\n    })\n    config.plugins.push(\n      <span class=hljs-comment>// con esto ya habilitamos HMR</span>\n      <span class=hljs-keyword>new</span> webpack.HotModuleReplacementPlugin(),\n    )\n  }\n\n  <span class=hljs-keyword>if</span> (argv.mode === <span class=hljs-string>'production'</span>) {\n    <span class=hljs-comment>// webpack reemplazara [name] con el nombre del archivo que importamos, ///</span>\n    <span class=hljs-comment>// [contenthash:8] sera reemplazado por un hash de 8 digitos que cambia segun el contenido del archivo</span>\n    <span class=hljs-comment>// aplicar long term caching a los archivos resultantes JS</span>\n    config.output.filename = <span class=hljs-string>'static/js/bundle.[name].[contenthash:8].js'</span>\n    config.output.chunkFilename = <span class=hljs-string>'static/js/chunk.[name].[contenthash:8].js'</span>\n\n    <span class=hljs-comment>// nuestra regla para extraer los archivos CSSs en sus propios archivos</span>\n    config.module.rules.push({\n      <span class=hljs-attr>test</span>: <span class=hljs-regexp>/\\.css$/</span>,\n      use: [MiniCssExtractPlugin.loader, <span class=hljs-string>'css-loader'</span>, <span class=hljs-string>'postcss-loader'</span>],\n    })\n    config.plugins.push(\n      <span class=hljs-keyword>new</span> MiniCssExtractPlugin({\n        <span class=hljs-comment>// aplicar long term caching a los archivos resultantes CSS</span>\n        <span class=hljs-attr>filename</span>: <span class=hljs-string>'static/css/bundle.[name].[contenthash:8].css'</span>,\n        <span class=hljs-attr>chunkFilename</span>: <span class=hljs-string>'static/css/chunk.[name].[contenthash:8].css'</span>,\n      }),\n    )\n  }\n  <span class=hljs-keyword>return</span> config\n}\n</code></pre></ol><p>Con esto ya tienes una configuracion bien estandar, si trabajas con vue puedes continuar <a href=https://vue-loader.vuejs.org/ rel=nofollow target=_blank>aquí</a>, o si trabajas con react agrega este preset <a href=https://babeljs.io/docs/en/babel-preset-react rel=nofollow target=_blank>@babel/preset-react</a> a la configuracion de babel.<h2 id=configuracion-final>Configuracion final</h2><pre><code class=language-js><span class=hljs-comment>// webpack.config.js</span>\n\n<span class=hljs-keyword>const</span> path = <span class=hljs-built_in>require</span>(<span class=hljs-string>'path'</span>)\n<span class=hljs-keyword>const</span> webpack = <span class=hljs-built_in>require</span>(<span class=hljs-string>'webpack'</span>)\n<span class=hljs-keyword>const</span> HtmlWebpackPlugin = <span class=hljs-built_in>require</span>(<span class=hljs-string>'html-webpack-plugin'</span>)\n<span class=hljs-keyword>const</span> {CleanWebpackPlugin} = <span class=hljs-built_in>require</span>(<span class=hljs-string>'clean-webpack-plugin'</span>)\n<span class=hljs-keyword>const</span> MiniCssExtractPlugin = <span class=hljs-built_in>require</span>(<span class=hljs-string>'mini-css-extract-plugin'</span>)\n\n<span class=hljs-keyword>const</span> config = {\n  <span class=hljs-attr>entry</span>: <span class=hljs-string>'./src/index.js'</span>,\n  <span class=hljs-attr>output</span>: {\n    <span class=hljs-attr>filename</span>: <span class=hljs-string>'main.js'</span>,\n    <span class=hljs-attr>path</span>: path.resolve(__dirname, <span class=hljs-string>'dist'</span>),\n  },\n  <span class=hljs-attr>devServer</span>: {\n    <span class=hljs-attr>open</span>: <span class=hljs-literal>true</span>,\n    <span class=hljs-attr>host</span>: <span class=hljs-string>'0.0.0.0'</span>,\n    <span class=hljs-attr>progress</span>: <span class=hljs-literal>true</span>,\n    <span class=hljs-attr>historyApiFallback</span>: <span class=hljs-literal>true</span>,\n    <span class=hljs-attr>overlay</span>: <span class=hljs-literal>true</span>,\n    <span class=hljs-attr>hot</span>: <span class=hljs-literal>true</span>,\n  },\n  <span class=hljs-attr>resolve</span>: {\n    <span class=hljs-attr>alias</span>: {\n      <span class=hljs-string>'@components'</span>: path.resolve(__dirname, <span class=hljs-string>'src/components'</span>),\n    },\n  },\n  <span class=hljs-attr>module</span>: {\n    <span class=hljs-attr>rules</span>: [\n      {\n        <span class=hljs-attr>test</span>: <span class=hljs-regexp>/\\.js$/</span>,\n        exclude: <span class=hljs-regexp>/(node_modules|bower_components)/</span>,\n        use: {\n          <span class=hljs-attr>loader</span>: <span class=hljs-string>'babel-loader'</span>,\n          <span class=hljs-attr>options</span>: {\n            <span class=hljs-attr>cacheDirectory</span>: <span class=hljs-literal>true</span>,\n          },\n        },\n      },\n    ],\n  },\n  <span class=hljs-attr>plugins</span>: [\n    <span class=hljs-keyword>new</span> CleanWebpackPlugin(),\n    <span class=hljs-keyword>new</span> HtmlWebpackPlugin({\n      <span class=hljs-attr>template</span>: <span class=hljs-string>'src/index.html'</span>,\n    }),\n  ],\n}\n\n<span class=hljs-built_in>module</span>.exports = <span class=hljs-function>(<span class=hljs-params>env, argv</span>) =></span> {\n  <span class=hljs-keyword>if</span> (argv.mode === <span class=hljs-string>'development'</span>) {\n    config.module.rules.push({\n      <span class=hljs-attr>test</span>: <span class=hljs-regexp>/\\.css$/</span>,\n      use: [<span class=hljs-string>'style-loader'</span>, <span class=hljs-string>'css-loader'</span>, <span class=hljs-string>'postcss-loader'</span>],\n    })\n    config.plugins.push(<span class=hljs-keyword>new</span> webpack.HotModuleReplacementPlugin())\n  }\n\n  <span class=hljs-keyword>if</span> (argv.mode === <span class=hljs-string>'production'</span>) {\n    config.output.filename = <span class=hljs-string>'static/js/bundle.[name].[contenthash:8].js'</span>\n    config.output.chunkFilename = <span class=hljs-string>'static/js/chunk.[name].[contenthash:8].js'</span>\n    config.module.rules.push({\n      <span class=hljs-attr>test</span>: <span class=hljs-regexp>/\\.css$/</span>,\n      use: [MiniCssExtractPlugin.loader, <span class=hljs-string>'css-loader'</span>, <span class=hljs-string>'postcss-loader'</span>],\n    })\n    config.plugins.push(\n      <span class=hljs-keyword>new</span> MiniCssExtractPlugin({\n        <span class=hljs-attr>filename</span>: <span class=hljs-string>'static/css/bundle.[name].[contenthash:8].css'</span>,\n        <span class=hljs-attr>chunkFilename</span>: <span class=hljs-string>'static/css/chunk.[name].[contenthash:8].css'</span>,\n      }),\n    )\n  }\n  <span class=hljs-keyword>return</span> config\n}\n</code></pre><h2 id=referencias>Referencias</h2><ul><li><a href=https://www.zzuu666.com/articles/9 rel=nofollow target=_blank>https://www.zzuu666.com/articles/9</a><li><a href=https://webpack.js.org/configuration/mode/#root rel=nofollow target=_blank>https://webpack.js.org/configuration/mode/#root</a><li><a href=https://developers.google.com/web/fundamentals/performance/webpack/use-long-term-caching rel=nofollow target=_blank>https://developers.google.com/web/fundamentals/performance/webpack/use-long-term-caching</a></ul>"}

/***/ }),
/* 345 */
/*!********************************************************************************!*\
  !*** ../lib/loaders/markdown!../data/posts/dart-para-javascript-developers.md ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"frontMatter":{"slug":"dart-para-javascript-developers","fileName":"dart-para-javascript-developers","readingTime":"☕️ 8 minutos de lectura","wordCount":1410,"identifier":"blog-4","date":"24-04-2020","dateModified":"24-04-2020","formattedDate":"Abril 2020","imageCaption":"logo de dart y javascript","imageUrl":"//res.cloudinary.com/wochap/image/upload/v1587759087/wochap/hero/js-dart.webp","heroImageUrl":"//res.cloudinary.com/wochap/image/upload/v1587759087/wochap/hero/js-dart.webp","title":"Dart para Javascript developers","description":"Aprende Dart si ya sabes JavaScript en menos de 8 minutos!'","tags":["dart"],"keywords":["dart","aprender dart"]},"bodyHtml":"<p>Guía para aprender Dart si ya sabes Javascript.<p>A la izquierda codigo Javascript y a su derecha el codigo \"posiblemente\" equivalente en Dart.<h2 id=diferencias-y-similitudes-entre-javascript-y-dart>Diferencias y similitudes entre JavaScript y Dart</h2><p>Para empezar, Dart es tipado y tu codigo de arranque debe encontrarse dentro de una funcion <code>main</code>.<pre><code class=language-dart>main() {\n  <span class=hljs-built_in>print</span>(<span class=hljs-string>'hello world'</span>);\n}\n</code></pre><p>En los siguientes ejemplos voy a obviar poner codigo dentro de la funcion <code>main</code>.<h3 id=asignacion-de-variables><div align=center>Asignacion de variables</div></h3><p>En este apartado javascript y Dart son diferentes, en Dart una vez asginas un valor a una variable, el tipo de valor no puede cambiar a menos que lo hayas declarado con el keyword <code>dynamic</code>.<div class=c-markdown-code-compare><pre><code class=language-js><span class=hljs-keyword>var</span> name = <span class=hljs-string>'Pepe'</span> <span class=hljs-comment>// puede ser reasignado con cualquier otro valor</span>\n<span class=hljs-keyword>let</span> name = <span class=hljs-string>'Pepe'</span> <span class=hljs-comment>// puede ser reasignado con cualquier otro valor</span>\n<span class=hljs-keyword>const</span> name = <span class=hljs-string>'Pepe'</span> <span class=hljs-comment>// no puede ser reasignado</span>\n\n\n\n\n</code></pre><pre><code class=language-dart>\n\n\n<span class=hljs-built_in>dynamic</span> name = <span class=hljs-string>'Pepe'</span>; <span class=hljs-comment>// puede ser reasignado con cualquier otro valor</span>\n<span class=hljs-keyword>var</span> name = <span class=hljs-string>'Pepe'</span>; <span class=hljs-comment>// puede ser reasignado con valores del mismo tipo, en este caso con otro String</span>\n<span class=hljs-keyword>final</span> <span class=hljs-built_in>String</span> name = <span class=hljs-string>'Pepe'</span>; <span class=hljs-comment>// no puede ser reasignado, su valor es resuelta en tiempo de ejecucion</span>\n<span class=hljs-keyword>const</span> <span class=hljs-built_in>String</span> name = <span class=hljs-string>'Pepe'</span>; <span class=hljs-comment>// no puede ser reasignado, su valor es resuelta en tiempo de compilacion</span>\n</code></pre></div><h3 id=boolean><div align=center>Boolean</div></h3><p><strong>IMPORTANTE:</strong> en Dart los operadores logicos <code>&#38&amp</code> <code>||</code> <code>!</code> solo pueden ser aplicados con valores <code>boolean</code> y las expresiones creadas con esos operadores logicos no devuelven el ultimo valor encontrado como sucede en JavaScript.<div class=c-markdown-code-compare><pre><code class=language-js><span class=hljs-keyword>var</span> isOpen = <span class=hljs-literal>true</span>\nisOpen = <span class=hljs-literal>false</span>\n\n<span class=hljs-built_in>console</span>.log(<span class=hljs-number>5</span> || isOpen) <span class=hljs-comment>// 5</span>\n<span class=hljs-built_in>console</span>.log(<span class=hljs-number>5</span> &#38&#38 isOpen) <span class=hljs-comment>// false</span>\n<span class=hljs-built_in>console</span>.log(!isOpen) <span class=hljs-comment>// true</span>\n<span class=hljs-built_in>console</span>.log(<span class=hljs-number>5</span> !== isOpen) <span class=hljs-comment>// true</span>\n</code></pre><pre><code class=language-dart><span class=hljs-built_in>bool</span> isOpen = <span class=hljs-keyword>true</span>;\nisOpen = <span class=hljs-keyword>false</span>;\n\n<span class=hljs-built_in>print</span>(<span class=hljs-number>5</span> || isOpen); <span class=hljs-comment>// Error</span>\n<span class=hljs-built_in>print</span>(<span class=hljs-number>5</span> &#38&#38 isOpen); <span class=hljs-comment>// Error</span>\n<span class=hljs-built_in>print</span>(!isOpen) ; <span class=hljs-comment>// true</span>\n<span class=hljs-built_in>print</span>(<span class=hljs-number>5</span> != isOpen); <span class=hljs-comment>// true</span>\n</code></pre></div><h3 id=string><div align=center>String</div></h3><p>En Dart, usas <code>'</code> para strings de una sola linea, y <code>'''</code> para strings multilinea, tambien puedes escapar cualquier caracter en un string anteponiendo una <code>r</code>.<div class=c-markdown-code-compare><pre><code class=language-js><span class=hljs-keyword>var</span> name = <span class=hljs-string>'Pepito'</span>\n\n<span class=hljs-built_in>console</span>.log(<span class=hljs-string>`i am <span class=hljs-subst>${name}</span> <span class=hljs-subst>${<span class=hljs-number>5</span>}</span> years old.`</span>) <span class=hljs-comment>// i am Pepito 5 years old.</span>\n\n<span class=hljs-built_in>console</span>.log(name.toUpperCase()) <span class=hljs-comment>// PEPITO</span>\n<span class=hljs-built_in>console</span>.log(name.length) <span class=hljs-comment>// 6</span>\n</code></pre><pre><code class=language-dart><span class=hljs-built_in>String</span> name = <span class=hljs-string>'Pepito'</span>;\n\n<span class=hljs-built_in>print</span>(<span class=hljs-string>'''i am <span class=hljs-subst>$name</span> <span class=hljs-subst>${<span class=hljs-number>5</span>}</span> years old.'''</span>); <span class=hljs-comment>// i am Pepito 5 years old.</span>\n<span class=hljs-built_in>print</span>(<span class=hljs-string>r'i am $name ${5} years old.'</span>); <span class=hljs-comment>// i am $name ${5} years old.</span>\n<span class=hljs-built_in>print</span>(name.toUpperCase()); <span class=hljs-comment>// PEPITO</span>\n<span class=hljs-built_in>print</span>(name.length); <span class=hljs-comment>// 6</span>\n</code></pre></div><h3 id=number><div align=center>Number</div></h3><p>En Dart existen 3 tipos para numeros: <code>num</code> <code>double</code> <code>int</code>, en mi experiencia puedes usar cualquiera y no notaras la diferencia.<div class=c-markdown-code-compare><pre><code class=language-js><span class=hljs-keyword>var</span> height = <span class=hljs-number>5</span>\n<span class=hljs-keyword>var</span> width = <span class=hljs-number>2.5</span>\n\n<span class=hljs-built_in>console</span>.log(<span class=hljs-keyword>typeof</span> height) <span class=hljs-comment>// number</span>\n</code></pre><pre><code class=language-dart><span class=hljs-built_in>int</span> height = <span class=hljs-number>5</span>;\n<span class=hljs-built_in>double</span> width = <span class=hljs-number>2.5</span>;\n\n<span class=hljs-built_in>print</span>(height.runtimeType); <span class=hljs-comment>// int</span>\n</code></pre></div><h3 id=array---list><div align=center>Array - List</div></h3><div class=c-markdown-code-compare><pre><code class=language-js>\n\n<span class=hljs-keyword>var</span> numbers = [<span class=hljs-number>1</span>, <span class=hljs-number>2</span>, <span class=hljs-number>3</span>, <span class=hljs-number>4</span>]\nnumbers = [...numbers, <span class=hljs-number>5</span>]\nnumbers = [...numbers.slice(<span class=hljs-number>0</span>, <span class=hljs-number>1</span>), ...[<span class=hljs-number>8</span>, <span class=hljs-number>9</span>], ...numbers.slice(<span class=hljs-number>4</span>)]\n\n<span class=hljs-built_in>console</span>.log(numbers) <span class=hljs-comment>// [1, 8, 9, 5]</span>\n<span class=hljs-built_in>console</span>.log(numbers.slice(<span class=hljs-number>1</span>, <span class=hljs-number>3</span>)) <span class=hljs-comment>// [8, 9]</span>\n\n<span class=hljs-comment>// no hay algo como list comprehension en javascript</span>\nnumbers = numbers.filter(<span class=hljs-function><span class=hljs-params>x</span> =></span> x % <span class=hljs-number>2</span> === <span class=hljs-number>0</span>).map(<span class=hljs-function><span class=hljs-params>x</span> =></span> x ** <span class=hljs-number>2</span>)\n<span class=hljs-built_in>console</span>.log(numbers) <span class=hljs-comment>// [64]</span>\n\n<span class=hljs-comment>// destructuring assignment</span>\n<span class=hljs-keyword>const</span> [n] = numbers\n<span class=hljs-built_in>console</span>.log(n)\n</code></pre><pre><code class=language-dart><span class=hljs-keyword>import</span> <span class=hljs-string>'dart:math'</span>; <span class=hljs-comment>// para hacer uso de pow</span>\n\n<span class=hljs-built_in>List</span>&lt;<span class=hljs-built_in>int</span>> numbers = [<span class=hljs-number>1</span>, <span class=hljs-number>2</span>, <span class=hljs-number>3</span>, <span class=hljs-number>4</span>];\nnumbers = [...numbers, <span class=hljs-number>5</span>];\nnumbers = [...numbers.sublist(<span class=hljs-number>0</span>, <span class=hljs-number>1</span>), ...[<span class=hljs-number>8</span>, <span class=hljs-number>9</span>], ...numbers.sublist(<span class=hljs-number>4</span>)];\n\n<span class=hljs-built_in>print</span>(numbers); <span class=hljs-comment>// [1, 8, 9, 5]</span>\n<span class=hljs-built_in>print</span>(numbers.sublist(<span class=hljs-number>1</span>, <span class=hljs-number>3</span>)); <span class=hljs-comment>// [8, 9]</span>\n\n<span class=hljs-comment>// list comprehension</span>\nnumbers = [<span class=hljs-keyword>for</span> (<span class=hljs-keyword>var</span> x <span class=hljs-keyword>in</span> numbers) <span class=hljs-keyword>if</span> (x % <span class=hljs-number>2</span> == <span class=hljs-number>0</span>) pow(x, <span class=hljs-number>2</span>)];\n<span class=hljs-built_in>print</span>(numbers); <span class=hljs-comment>// [64]</span>\n\n\n\n\n</code></pre></div><h3 id=set><div align=center>Set</div></h3><p>Es como <code>List</code> pero desordenada y no tiene elementos duplicados.<div class=c-markdown-code-compare><pre><code class=language-js><span class=hljs-keyword>var</span> animals = <span class=hljs-keyword>new</span> <span class=hljs-built_in>Set</span>([<span class=hljs-string>'cat'</span>, <span class=hljs-string>'dog'</span>])\n\n</code></pre><pre><code class=language-dart><span class=hljs-built_in>Set</span> animals = <span class=hljs-built_in>Set</span>.from([<span class=hljs-string>'cat'</span>, <span class=hljs-string>'dog'</span>]);\n<span class=hljs-built_in>Set</span> animals = {<span class=hljs-string>'cat'</span>, <span class=hljs-string>'dog'</span>};\n</code></pre></div><h3 id=object---map><div align=center>Object - Map</div></h3><div class=c-markdown-code-compare><pre><code class=language-js><span class=hljs-keyword>var</span> animals = {<span class=hljs-attr>cat</span>: <span class=hljs-string>'nyan'</span>, <span class=hljs-attr>dog</span>: <span class=hljs-string>'snuffles'</span>}\n<span class=hljs-built_in>console</span>.log(animals.fish ?? <span class=hljs-string>'N/A'</span>) <span class=hljs-comment>// N/A</span>\n<span class=hljs-keyword>delete</span> animals.cat\n\n<span class=hljs-comment>// no hay algo como object comprehension en javascript</span>\n<span class=hljs-keyword>var</span> foo = [<span class=hljs-number>1</span>, <span class=hljs-number>2</span>, <span class=hljs-number>3</span>].filter(<span class=hljs-function><span class=hljs-params>x</span> =></span> x % <span class=hljs-number>2</span> === <span class=hljs-number>0</span>).reduce(<span class=hljs-function>(<span class=hljs-params>result, x</span>) =></span> ({...result, [x]: x ** <span class=hljs-number>2</span>}), {})\n<span class=hljs-built_in>console</span>.log(foo) <span class=hljs-comment>// {2: 4}</span>\n</code></pre><pre><code class=language-dart><span class=hljs-built_in>Map</span>&lt;<span class=hljs-built_in>String</span>, <span class=hljs-built_in>String</span>> animals = {<span class=hljs-string>'cat'</span>: <span class=hljs-string>'nyan'</span>, <span class=hljs-string>'dog'</span>: <span class=hljs-string>'snuffles'</span>};\n<span class=hljs-built_in>print</span>(animals[<span class=hljs-string>'fish'</span>] ?? <span class=hljs-string>'N/A'</span>); <span class=hljs-comment>// N/A</span>\nanimals.remove(<span class=hljs-string>'cat'</span>);\n\n<span class=hljs-comment>// object comprehension</span>\n<span class=hljs-built_in>Map</span>&lt;<span class=hljs-built_in>num</span>, <span class=hljs-built_in>num</span>> foo = {<span class=hljs-keyword>for</span> (<span class=hljs-keyword>var</span> x <span class=hljs-keyword>in</span> [<span class=hljs-number>1</span>, <span class=hljs-number>2</span>, <span class=hljs-number>3</span>]) <span class=hljs-keyword>if</span> (x % <span class=hljs-number>2</span> == <span class=hljs-number>0</span>) x: pow(x, <span class=hljs-number>2</span>)};\n<span class=hljs-built_in>print</span>(foo); <span class=hljs-comment>// {2: 4}</span>\n</code></pre></div><h3 id=function><div align=center>Function</div></h3><p>En Dart los parametros de una funcion pueden ser <code>Non-optional</code>, <code>Optional Positional Parameters</code>, <code>Optional Named Parameters</code>.<div class=c-markdown-code-compare><pre><code class=language-js><span class=hljs-function><span class=hljs-keyword>function</span> <span class=hljs-title>sum</span>(<span class=hljs-params>a, b = <span class=hljs-number>3</span>, c = <span class=hljs-number>1</span></span>) </span>{\n  <span class=hljs-built_in>console</span>.log(a + b + c)\n}\n\n<span class=hljs-function><span class=hljs-keyword>function</span> <span class=hljs-title>sum2</span>(<span class=hljs-params>a, {b = <span class=hljs-number>3</span>, c = <span class=hljs-number>1</span>} = {}</span>) </span>{\n  <span class=hljs-built_in>console</span>.log(a + b + c)\n}\n\nsum(<span class=hljs-number>5</span>, <span class=hljs-number>3</span>) <span class=hljs-comment>// 9</span>\nsum2(<span class=hljs-number>5</span>, {<span class=hljs-attr>c</span>: <span class=hljs-number>2</span>, <span class=hljs-attr>b</span>: <span class=hljs-number>8</span>}) <span class=hljs-comment>// 15</span>\n</code></pre><pre><code class=language-dart><span class=hljs-built_in>int</span> sum(<span class=hljs-built_in>int</span> a, [<span class=hljs-built_in>int</span> b = <span class=hljs-number>3</span>, <span class=hljs-built_in>int</span> c = <span class=hljs-number>1</span>]) { <span class=hljs-comment>// parametros opcionales b y c</span>\n  <span class=hljs-built_in>print</span>(a + b + c);\n}\n\n<span class=hljs-built_in>int</span> sum2(<span class=hljs-built_in>int</span> a, {<span class=hljs-built_in>int</span> b = <span class=hljs-number>3</span>, <span class=hljs-built_in>int</span> c = <span class=hljs-number>1</span>}) { <span class=hljs-comment>// parametros opcionales nombrados b y c</span>\n  <span class=hljs-built_in>print</span>(a + b + c);\n}\n\nsum(<span class=hljs-number>5</span>, <span class=hljs-number>3</span>); <span class=hljs-comment>// 9</span>\nsum2(<span class=hljs-number>5</span>, c: <span class=hljs-number>2</span>, b: <span class=hljs-number>8</span>); <span class=hljs-comment>// 15</span>\n</code></pre></div><h3 id=control-flow><div align=center>Control Flow</div></h3><div class=c-markdown-code-compare><pre><code class=language-js><span class=hljs-keyword>if</span> (x > <span class=hljs-number>0</span>) {\n  <span class=hljs-comment>//</span>\n} <span class=hljs-keyword>else</span> <span class=hljs-keyword>if</span> (x &#60 <span class=hljs-number>0</span>) {\n  <span class=hljs-comment>//</span>\n} <span class=hljs-keyword>else</span> {\n  <span class=hljs-keyword>return</span> <span class=hljs-string>'zero'</span>\n}\n\n<span class=hljs-keyword>for</span> (<span class=hljs-keyword>const</span> value <span class=hljs-keyword>of</span> [<span class=hljs-string>'a'</span>, <span class=hljs-string>'b'</span>]) {\n  <span class=hljs-comment>//</span>\n}\n\n<span class=hljs-keyword>for</span> (<span class=hljs-keyword>const</span> [index, value] <span class=hljs-keyword>of</span> [<span class=hljs-number>1</span>, <span class=hljs-number>2</span>, <span class=hljs-number>3</span>].entries()) {\n  <span class=hljs-comment>//</span>\n}\n\n<span class=hljs-keyword>for</span> (<span class=hljs-keyword>const</span> [key, value] <span class=hljs-keyword>of</span> <span class=hljs-built_in>Object</span>.entries({<span class=hljs-attr>foo</span>: <span class=hljs-string>'bar'</span>})) {\n  <span class=hljs-comment>//</span>\n}\n\n<span class=hljs-keyword>while</span> (a &#60 <span class=hljs-number>0</span>) {\n  <span class=hljs-comment>//</span>\n}\n</code></pre><pre><code class=language-dart><span class=hljs-keyword>if</span> (x > <span class=hljs-number>0</span>) {\n  <span class=hljs-comment>//</span>\n} <span class=hljs-keyword>else</span> <span class=hljs-keyword>if</span> (x &#60 <span class=hljs-number>0</span>) {\n  <span class=hljs-comment>//</span>\n} <span class=hljs-keyword>else</span> {\n  <span class=hljs-keyword>return</span> <span class=hljs-string>'zero'</span>\n}\n\n<span class=hljs-keyword>for</span> (<span class=hljs-built_in>String</span> value <span class=hljs-keyword>in</span> [<span class=hljs-string>'a'</span>, <span class=hljs-string>'b'</span>]) {\n  <span class=hljs-comment>//</span>\n}\n\n[<span class=hljs-number>1</span>, <span class=hljs-number>2</span>, <span class=hljs-number>3</span>].asMap().forEach((index, value) {\n  <span class=hljs-comment>//</span>\n});\n\n({<span class=hljs-string>'foo'</span>: <span class=hljs-string>'bar'</span>}).forEach((key, value) {\n  <span class=hljs-comment>//</span>\n});\n\n<span class=hljs-keyword>while</span> (a &#60 <span class=hljs-number>0</span>) {\n  <span class=hljs-comment>//</span>\n}\n</code></pre></div><h3 id=class><div align=center>Class</div></h3><div class=c-markdown-code-compare><pre><code class=language-js><span class=hljs-class><span class=hljs-keyword>class</span> <span class=hljs-title>Greeter</span> <span class=hljs-keyword>extends</span> <span class=hljs-title>BaseGreeter</span> </span>{\n  greetCount = <span class=hljs-number>0</span>\n\n  <span class=hljs-keyword>constructor</span>(name) {\n    <span class=hljs-keyword>this</span>.name = name\n  }\n  greet({ loud = <span class=hljs-literal>false</span> } = {}) {\n    <span class=hljs-keyword>this</span>.greetCount += <span class=hljs-number>1</span>\n    <span class=hljs-keyword>if</span> (loud) {\n      <span class=hljs-built_in>console</span>.log(<span class=hljs-string>`HELLO <span class=hljs-subst>${<span class=hljs-keyword>this</span>.name.toUpperCase()}</span>!`</span>)\n    } <span class=hljs-keyword>else</span> {\n      <span class=hljs-built_in>console</span>.log(<span class=hljs-string>`Hello <span class=hljs-subst>${<span class=hljs-keyword>this</span>.name}</span>`</span>)\n    }\n  }\n}\n<span class=hljs-keyword>var</span> g = <span class=hljs-keyword>new</span> Greeter(<span class=hljs-string>'Fred'</span>)\ng.greet() <span class=hljs-comment>// Hello Fred</span>\ng.greet({<span class=hljs-attr>loud</span>: <span class=hljs-literal>true</span>}) <span class=hljs-comment>// HELLO FRED!</span>\n<span class=hljs-built_in>console</span>.log(g.greetCount) <span class=hljs-comment>// 2</span>\n</code></pre><pre><code class=language-dart><span class=hljs-class><span class=hljs-keyword>class</span> <span class=hljs-title>Greeter</span> <span class=hljs-keyword>extends</span> <span class=hljs-title>BaseGreeter</span> </span>{\n  <span class=hljs-built_in>int</span> greetCount = <span class=hljs-number>0</span>;\n  <span class=hljs-built_in>String</span> name;\n\n  Greeter(<span class=hljs-keyword>this</span>.name); <span class=hljs-comment>// sugar syntax para `this.name = name`</span>\n\n  <span class=hljs-keyword>void</span> greet({ loud = <span class=hljs-keyword>false</span> }) {\n    greetCount += <span class=hljs-number>1</span>;\n    <span class=hljs-keyword>if</span> (loud) {\n      <span class=hljs-built_in>print</span>(<span class=hljs-string>'HELLO <span class=hljs-subst>${name.toUpperCase()}</span>!'</span>);\n    } <span class=hljs-keyword>else</span> {\n      <span class=hljs-built_in>print</span>(<span class=hljs-string>'Hello <span class=hljs-subst>${name}</span>'</span>);\n    }\n  }\n}\nGreeter g = Greeter(<span class=hljs-string>'Fred'</span>);\ng.greet(); <span class=hljs-comment>// Hello Fred</span>\ng.greet(loud: <span class=hljs-keyword>true</span>); <span class=hljs-comment>// HELLO FRED!</span>\n<span class=hljs-built_in>print</span>(g.greetCount); <span class=hljs-comment>// 2</span>\n</code></pre></div><h3 id=null><div align=center>Null</div></h3><p>En Javascript tenemos <code>null</code> y <code>undefined</code>, en Dart solo tenemos <code>null</code>.<div class=c-markdown-code-compare><pre><code class=language-js><span class=hljs-built_in>console</span>.log(<span class=hljs-literal>null</span>)\n<span class=hljs-built_in>console</span>.log(<span class=hljs-literal>undefined</span>)\n</code></pre><pre><code class=language-dart><span class=hljs-built_in>print</span>(<span class=hljs-keyword>null</span>);\n\n</code></pre></div><h3 id=modules><div align=center>Modules</div></h3><p>En Dart, cuando importas un modulo, todos sus miembros (variables, classes, funciones, etc.) estaran disponibles en el ambito global, a menos que la libreria haya definido un <code>namespace</code> o tu crees un <code>namespace</code> con el keyword <code>as</code> al momento de importar.<div class=c-markdown-code-compare><pre><code class=language-js><span class=hljs-comment>// project structure</span>\n<span class=hljs-comment>//</span>\n<span class=hljs-comment>// ├── project1</span>\n<span class=hljs-comment>// │   └── index.js</span>\n<span class=hljs-comment>// └── project2</span>\n<span class=hljs-comment>//     ├── main.js</span>\n<span class=hljs-comment>//     └── package1</span>\n<span class=hljs-comment>//         ├── index.js</span>\n<span class=hljs-comment>//         ├── module1.js</span>\n<span class=hljs-comment>//         └── subpackage1</span>\n<span class=hljs-comment>//             └── module2.js</span>\n\n<span class=hljs-comment>// project1/index.js</span>\n\n\n<span class=hljs-keyword>export</span> <span class=hljs-keyword>const</span> somethingMore = <span class=hljs-string>'...'</span>\n\n<span class=hljs-comment>// project2/main.js</span>\n\n<span class=hljs-keyword>import</span> os <span class=hljs-keyword>from</span> <span class=hljs-string>'os'</span> <span class=hljs-comment>// standard library import</span>\n<span class=hljs-keyword>import</span> {Flask} <span class=hljs-keyword>from</span> <span class=hljs-string>'flask'</span> <span class=hljs-comment>// third party import</span>\n<span class=hljs-keyword>import</span> * <span class=hljs-keyword>as</span> package1 <span class=hljs-keyword>from</span> <span class=hljs-string>'./package1'</span> <span class=hljs-comment>// relative import with alias</span>\n<span class=hljs-keyword>import</span> * <span class=hljs-keyword>as</span> myModule <span class=hljs-keyword>from</span> <span class=hljs-string>'./package1/module1.js'</span> <span class=hljs-comment>// relative import with alias</span>\n</code></pre><pre><code class=language-dart><span class=hljs-comment>// project structure</span>\n<span class=hljs-comment>//</span>\n<span class=hljs-comment>// ├── project1</span>\n<span class=hljs-comment>// │   └── main.dart</span>\n<span class=hljs-comment>// └── project2</span>\n<span class=hljs-comment>//     ├── main.dart</span>\n<span class=hljs-comment>//     └── package1</span>\n<span class=hljs-comment>//         ├── main.dart</span>\n<span class=hljs-comment>//         ├── module1.dart</span>\n<span class=hljs-comment>//         └── subpackage1</span>\n<span class=hljs-comment>//             └── module2.dart</span>\n\n<span class=hljs-comment>// project1/main.dart</span>\n\n<span class=hljs-keyword>library</span> project1; <span class=hljs-comment>// namespace</span>\n<span class=hljs-keyword>var</span> something_more = <span class=hljs-string>'...'</span>;\n\n<span class=hljs-comment>// project2/main.dart</span>\n\n<span class=hljs-keyword>import</span> <span class=hljs-string>'dart:math'</span> <span class=hljs-keyword>as</span> math; <span class=hljs-comment>// standard library import with namespace</span>\n<span class=hljs-keyword>import</span> <span class=hljs-string>'package:get_it/get_it.dart'</span>; <span class=hljs-comment>// third party import</span>\n<span class=hljs-keyword>import</span> <span class=hljs-string>'./package1/main.dart'</span> <span class=hljs-keyword>as</span> package1; <span class=hljs-comment>// relative import with namespace</span>\n<span class=hljs-keyword>import</span> <span class=hljs-string>'../project1/main.dart'</span>; <span class=hljs-comment>// relative import without namespace</span>\n</code></pre></div><h2 id=solo-en-dart>Solo en Dart</h2><p>Algunos features que tiene Dart pero no Javascript.<h3 id=enum><div align=center>Enum</div></h3><pre><code class=language-dart><span class=hljs-keyword>enum</span> Color = { red, green };\n</code></pre><h2 id=referencias>Referencias</h2><ul><li><a href=https://medium.com/jay-tillu/operators-in-dart-5a774aff0788 rel=nofollow target=_blank>https://medium.com/jay-tillu/operators-in-dart-5a774aff0788</a><li><a href=http://blog.sethladd.com/2012/02/booleans-in-dart.html rel=nofollow target=_blank>http://blog.sethladd.com/2012/02/booleans-in-dart.html</a><li><a href=https://en.wikipedia.org/wiki/Comparison_of_programming_languages_(list_comprehension)#Dart rel=nofollow target=_blank>https://en.wikipedia.org/wiki/Comparison_of_programming_languages_(list_comprehension)#Dart</a><li><a href=https://bezkoder.com/dart-map/ rel=nofollow target=_blank>https://bezkoder.com/dart-map/</a><li><a href=https://subscription.packtpub.com/book/web_development/9781783989560/1/ch01lvl1sec08/modularity-and-a-namespace rel=nofollow target=_blank>https://subscription.packtpub.com/book/web_development/9781783989560/1/ch01lvl1sec08/modularity-and-a-namespace</a></ul>"}

/***/ }),
/* 346 */
/*!*************************************************************!*\
  !*** ../lib/loaders/markdown!../data/posts/hiring.draft.md ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"frontMatter":{"slug":"hiring.draft","fileName":"hiring.draft","readingTime":"☕️ 2 minutos de lectura","wordCount":321,"identifier":"blog-#","date":"28-12-2020","dateModified":"28-12-2020","formattedDate":"Abril 2020","imageCaption":"webpack","imageUrl":"//res.cloudinary.com/wochap/image/upload/v1586536747/wochap/hero/configurando_webpack.png","heroImageUrl":"//res.cloudinary.com/wochap/image/upload/v1586536747/wochap/hero/configurando_webpack.png","title":"Hiring","description":"Aprende a configurar webpack 5 con babel, ¡Actualizate Aquí Ahora!","tags":["webpack"],"keywords":["webpack"]},"bodyHtml":"<p>Investigar la empresa, leer su blog y ver que desafios tiene.<p>Computer Science Fundamentals and Programming Topics<p>Data structures: Lists, stacks, queues, strings, hash maps, vectors, matrices, classes &#38 objects, trees, graphs, etc. Algorithms: Recursion, searching, sorting, optimization, dynamic programming, etc. Computability and complexity: P vs. NP, NP-complete problems, big-O notation, approximate algorithms, etc. Computer architecture: Memory, cache, bandwidth, threads &#38 processes, deadlocks, etc. Probability and Statistics Topics<p>Basic probability: Conditional probability, Bayes rule, likelihood, independence, etc. Probabilistic models: Bayes Nets, Markov Decision Processes, Hidden Markov Models, etc. Statistical measures: Mean, median, mode, variance, population parameters vs. sample statistics etc. Proximity and error metrics: Cosine similarity, mean-squared error, Manhattan and Euclidean distance, log-loss, etc. Distributions and random sampling: Uniform, normal, binomial, Poisson, etc. Analysis methods: ANOVA, hypothesis testing, factor analysis, etc. Data Modeling and Evaluation Topics<p>Data preprocessing: Munging/wrangling, transforming, aggregating, etc. Pattern recognition: Correlations, clusters, trends, outliers &#38 anomalies, etc. Dimensionality reduction: Eigenvectors, Principal Component Analysis, etc. Prediction: Classification, regression, sequence prediction, etc.; suitable error/accuracy metrics. Evaluation: Training-testing split, sequential vs. randomized cross-validation, etc. Applying Machine Learning Algorithms and Libraries Topics<p>Models: Parametric vs. nonparametric, decision tree, nearest neighbor, neural net, support vector machine, ensemble of multiple models, etc. Learning procedure: Linear regression, gradient descent, genetic algorithms, bagging, boosting, and other model-specific methods; regularization, hyperparameter tuning, etc. Tradeoffs and gotchas: Relative advantages and disadvantages, bias and variance, overfitting and underfitting, vanishing/exploding gradients, missing data, data leakage, etc. Software Engineering and System Design Topics<p>Software interface: Library calls, REST APIs, data collection endpoints, database queries, etc. User interface: Capturing user inputs &#38 application events, displaying results &#38 visualization, etc. Scalability: Map-reduce, distributed processing, etc. Deployment: Cloud hosting, containers &#38 instances, microservices, etc.<h2 id=stadistics>Stadistics</h2><p><a href=\"https://www.youtube.com/watch?v=rdXw7Ps9vxc&#38list=PLHXZ9OQGMqxersk8fUxiUMSIx0DBqsKZS\"rel=nofollow target=_blank>https://www.youtube.com/watch?v=rdXw7Ps9vxc&#38list=PLHXZ9OQGMqxersk8fUxiUMSIx0DBqsKZS</a>"}

/***/ }),
/* 347 */
/*!*****************************************************************************!*\
  !*** ../lib/loaders/markdown!../data/posts/implementar-dark-theme.draft.md ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"frontMatter":{"slug":"implementar-dark-theme.draft","fileName":"implementar-dark-theme.draft","readingTime":"☕️ 1 minuto de lectura","wordCount":35,"identifier":"blog-4","date":"16-04-2020","dateModified":"16-04-2020","formattedDate":"Abril 2020","imageCaption":"","imageUrl":"","heroImageUrl":"","title":"dark theme","description":"","tags":["seo"],"keywords":["webpack","webpack 5","babel","webpack-dev-server"]},"bodyHtml":""}

/***/ }),
/* 348 */
/*!***********************************************************************!*\
  !*** ../lib/loaders/markdown!../data/posts/machine-learning.draft.md ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"frontMatter":{"slug":"machine-learning.draft","fileName":"machine-learning.draft","readingTime":"☕️ 3 minutos de lectura","wordCount":436,"identifier":"blog-#","date":"28-12-2020","dateModified":"28-12-2020","formattedDate":"Abril 2020","imageCaption":"webpack","imageUrl":"//res.cloudinary.com/wochap/image/upload/v1586536747/wochap/hero/configurando_webpack.png","heroImageUrl":"//res.cloudinary.com/wochap/image/upload/v1586536747/wochap/hero/configurando_webpack.png","title":"Machine Learning","description":"Aprende a configurar webpack 5 con babel, ¡Actualizate Aquí Ahora!","tags":["webpack"],"keywords":["webpack"]},"bodyHtml":"<p>Labels Lo que vamos a predecir, por ejemplo: el tipo de animal mostrado en una imagen, el significado de un audio.<p>Features Caracteristicas de lo que vamos a predecir, mientras mas features mas sotisficado sera nuestro projecto<p>Examples<p>Es una instancia partical de data, estos pertenecen a dos categorias, labeled y unlabeled, labeled incluye feature(s) y su respectivo label, unlabeled solo feature(s).<p>Usamos labeled examples para train nuestro model, y una vez entranado nuestor modelo lo usamos para predecir examples unlabeled<p>Models<p>Define la relacion entre feature(s) y label, el modelo tiene 2 fases<ul><li>Training: significa crear o aprender<li>Inference: significa aplicar el trained model a unlabeled examples</ul><h3 id=regresion>Regresion</h3><p>predice valores continuos, por ejemplo el valor de una casa, probabilidad de hacer click en un anuncio<h3 id=clasification>Clasification</h3><p>predice valores discretos, por ejemplo: si la imagen es un perro o gato, si el email es spam o no.<h2 id=glosario>Glosario</h2><p>X: vector (features) Y: predicciones (label)<h4 id=logistic-regression>logistic regression</h4><p>para binary clasification<hr><p>parametric models linear regression, logistic regression, and SVMs,<p>Non-parametric models: k-nearest neighbors, decision trees, and random forests. Introducing cross-validation, hyperparameter tuning, and ensemble models. k-nearest neighbors (k-NN) <a href=https://machinelearningmastery.com/tutorial-to-implement-k-nearest-neighbors-in-python-from-scratch/ rel=nofollow target=_blank>https://machinelearningmastery.com/tutorial-to-implement-k-nearest-neighbors-in-python-from-scratch/</a><p>the model structure is purely determined from the data.<p>Dataset <a href=https://www.kaggle.com/c/titanic rel=nofollow target=_blank>https://www.kaggle.com/c/titanic</a><p>hyperparameters<p>Deep learning: TensorFlow, Caffe, Torch, Theano<p>Convolutional neural networks (CNNs). images, vision tasks<p>Recurrent neural networks (RNNs) language problems<p>Deep reinforcement learning.<p><a href=https://codelabs.developers.google.com/codelabs/cloud-tensorflow-mnist/#0 rel=nofollow target=_blank>https://codelabs.developers.google.com/codelabs/cloud-tensorflow-mnist/#0</a><p>TensorFlow > Keras Pytorch > FastAI<p><a href=https://www.datacamp.com/community/data-science-cheatsheets rel=nofollow target=_blank>https://www.datacamp.com/community/data-science-cheatsheets</a><p>inference cuando quieres usar el modelo<p><a href=https://www.starlette.io/ rel=nofollow target=_blank>https://www.starlette.io/</a><p>pythonanywhere<p>46:<hr><p>overfitting modelo aprende a identificar tus examples pero no en general<p>train_loss menor que valid_loss<p>3e-3<p><a href=http://matrixmultiplication.xyz/ rel=nofollow target=_blank>http://matrixmultiplication.xyz/</a><p><a href=https://machinelearningmastery.com/computational-linear-algebra-coders-review/ rel=nofollow target=_blank>https://machinelearningmastery.com/computational-linear-algebra-coders-review/</a> <a href=https://github.com/fastai/numerical-linear-algebra rel=nofollow target=_blank>https://github.com/fastai/numerical-linear-algebra</a><div class=\"math math-display\"><span class=katex-display><span class=katex><span class=katex-mathml><math xmlns=http://www.w3.org/1998/Math/MathML><semantics><mrow><mover accent=true><mi>y</mi><mo>⃗</mo></mover><mo>=</mo><mi>X</mi><mover accent=true><mi>a</mi><mo>⃗</mo></mover></mrow><annotation encoding=application/x-tex>\\vec{y}=X\\vec{a}</annotation></semantics></math></span><span class=katex-html aria-hidden=true><span class=base><span class=strut style=height:.9084399999999999em;vertical-align:-.19444em></span><span class=\"mord accent\"><span class=\"vlist-t vlist-t2\"><span class=vlist-r><span class=vlist style=height:.714em><span style=top:-3em><span class=pstrut style=height:3em></span><span class=mord><span class=\"mord mathdefault\"style=margin-right:.03588em>y</span></span></span><span style=top:-3em><span class=pstrut style=height:3em></span><span class=accent-body style=left:-.17994em><span class=overlay style=height:.714em;width:.471em><svg height=0.714em preserveAspectRatio=xMinYMin style=width:.471em viewBox=\"0 0 471 714\"width=0.471em><path d=\"M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5\n3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11\n10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63\n-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1\n-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59\nH213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359\nc-16-25.333-24-45-24-59z\"/></svg></span></span></span></span><span class=vlist-s>​</span></span><span class=vlist-r><span class=vlist style=height:.19444em><span></span></span></span></span></span><span class=mspace style=margin-right:.2777777777777778em></span><span class=mrel>=</span><span class=mspace style=margin-right:.2777777777777778em></span></span><span class=base><span class=strut style=height:.714em;vertical-align:0></span><span class=\"mord mathdefault\"style=margin-right:.07847em>X</span><span class=\"mord accent\"><span class=vlist-t><span class=vlist-r><span class=vlist style=height:.714em><span style=top:-3em><span class=pstrut style=height:3em></span><span class=mord><span class=\"mord mathdefault\">a</span></span></span><span style=top:-3em><span class=pstrut style=height:3em></span><span class=accent-body style=left:-.2355em><span class=overlay style=height:.714em;width:.471em><svg height=0.714em preserveAspectRatio=xMinYMin style=width:.471em viewBox=\"0 0 471 714\"width=0.471em><path d=\"M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5\n3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11\n10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63\n-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1\n-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59\nH213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359\nc-16-25.333-24-45-24-59z\"/></svg></span></span></span></span></span></span></span></span></span></span></span></div><p>SGD Stochastic gradient descent<p><a href=https://fr.wikipedia.org/wiki/Aide:Formules_TeX rel=nofollow target=_blank>https://fr.wikipedia.org/wiki/Aide:Formules_TeX</a><p><a href=\"https://www.youtube.com/watch?v=q6DGVGJ1WP4\"rel=nofollow target=_blank>https://www.youtube.com/watch?v=q6DGVGJ1WP4</a><p>regulation que tan bien trabaja en data que no ah sido usada para las entrenar<h3 id=segmentation-model>Segmentation model</h3><p>✅Gtraining loss lower than validation loss<hr><h3 id=regresion-model>Regresion model</h3><p>we have a function where we take our input pixels (or whatever)<p>we multiply them by some weight matrix we replace the negatives with zeros<p>we multiply it by another weight matrix replace the negatives with zeros<p>we do that a few times<p>we see how close it is to our target<p>and then we use gradient descent to update our weight matrices using the derivatives and we do that a few times and eventually we end up with something that can classify movie reviews, recognize cats, etc.<p>pytorch<h3 id=clasification-with-localiation>Clasification with localiation</h3><h3 id=detection-multiple-objects>Detection (multiple objects)</h3>"}

/***/ }),
/* 349 */
/*!***********************************************************!*\
  !*** ../lib/loaders/markdown!../data/posts/math.draft.md ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"frontMatter":{"slug":"math.draft","fileName":"math.draft","readingTime":"☕️ 3 minutos de lectura","wordCount":401,"identifier":"blog-#","date":"28-12-2020","dateModified":"28-12-2020","formattedDate":"Abril 2020","imageCaption":"webpack","imageUrl":"//res.cloudinary.com/wochap/image/upload/v1586536747/wochap/hero/configurando_webpack.png","heroImageUrl":"//res.cloudinary.com/wochap/image/upload/v1586536747/wochap/hero/configurando_webpack.png","title":"Math","description":"Aprende a configurar webpack 5 con babel, ¡Actualizate Aquí Ahora!","tags":["webpack"],"keywords":["webpack"]},"bodyHtml":"<p><a href=\"https://www.youtube.com/watch?v=gSWTqZrC7Ac\"rel=nofollow target=_blank>https://www.youtube.com/watch?v=gSWTqZrC7Ac</a><p><a href=\"https://www.youtube.com/watch?v=J1PGoNNhCyk\"rel=nofollow target=_blank>https://www.youtube.com/watch?v=J1PGoNNhCyk</a> <a href=\"https://www.youtube.com/watch?v=tfF_-Db8iSA&#38t=560s\"rel=nofollow target=_blank>https://www.youtube.com/watch?v=tfF_-Db8iSA&#38t=560s</a><h2 id=latex>LaTeX</h2><h2 id=katex>KaTeX</h2><p>Lo siguiente es la representacion de un <code>vector</code> en matematicas:<div class=\"math math-display\"><span class=katex-display><span class=katex><span class=katex-mathml><math xmlns=http://www.w3.org/1998/Math/MathML><semantics><mrow><mover accent=true><mi>x</mi><mo>⃗</mo></mover></mrow><annotation encoding=application/x-tex>\\vec{x}</annotation></semantics></math></span><span class=katex-html aria-hidden=true><span class=base><span class=strut style=height:.714em;vertical-align:0></span><span class=\"mord accent\"><span class=vlist-t><span class=vlist-r><span class=vlist style=height:.714em><span style=top:-3em><span class=pstrut style=height:3em></span><span class=mord><span class=\"mord mathdefault\">x</span></span></span><span style=top:-3em><span class=pstrut style=height:3em></span><span class=accent-body style=left:-.20772em><span class=overlay style=height:.714em;width:.471em><svg height=0.714em preserveAspectRatio=xMinYMin viewBox=\"0 0 471 714\"width=0.471em style=width:.471em><path d=\"M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5\n3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11\n10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63\n-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1\n-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59\nH213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359\nc-16-25.333-24-45-24-59z\"/></svg></span></span></span></span></span></span></span></span></span></span></span></div><p>Lo siguiente es la representacion de un <code>array</code> en matematicas:<div class=\"math math-display\"><span class=katex-display><span class=katex><span class=katex-mathml><math xmlns=http://www.w3.org/1998/Math/MathML><semantics><mrow><mi>X</mi></mrow><annotation encoding=application/x-tex>X</annotation></semantics></math></span><span class=katex-html aria-hidden=true><span class=base><span class=strut style=height:.68333em;vertical-align:0></span><span class=\"mord mathdefault\"style=margin-right:.07847em>X</span></span></span></span></span></div><ul><li><h3 id=suma-de-un-array>Suma de un <code>array</code></h3><p>Donde <span class=\"math math-inline\"><span class=katex><span class=katex-mathml><math xmlns=http://www.w3.org/1998/Math/MathML><semantics><mrow><mo>∑</mo></mrow><annotation encoding=application/x-tex>\\sum</annotation></semantics></math></span><span class=katex-html aria-hidden=true><span class=base><span class=strut style=height:1.00001em;vertical-align:-.25001em></span><span class=\"mop op-symbol small-op\"style=position:relative;top:-.0000050000000000050004em>∑</span></span></span></span></span> representa la suma de algo, <span class=\"math math-inline\"><span class=katex><span class=katex-mathml><math xmlns=http://www.w3.org/1998/Math/MathML><semantics><mrow><mi>n</mi></mrow><annotation encoding=application/x-tex>n</annotation></semantics></math></span><span class=katex-html aria-hidden=true><span class=base><span class=strut style=height:.43056em;vertical-align:0></span><span class=\"mord mathdefault\">n</span></span></span></span></span> es el <code>length</code> del <code>array</code>, <span class=\"math math-inline\"><span class=katex><span class=katex-mathml><math xmlns=http://www.w3.org/1998/Math/MathML><semantics><mrow><mi>i</mi></mrow><annotation encoding=application/x-tex>i</annotation></semantics></math></span><span class=katex-html aria-hidden=true><span class=base><span class=strut style=height:.65952em;vertical-align:0></span><span class=\"mord mathdefault\">i</span></span></span></span></span> es el <code>index</code> (en matematicas los <code>index</code> empiezan en 1) y <span class=\"math math-inline\"><span class=katex><span class=katex-mathml><math xmlns=http://www.w3.org/1998/Math/MathML><semantics><mrow><msub><mi>x</mi><mi>i</mi></msub></mrow><annotation encoding=application/x-tex>x_i</annotation></semantics></math></span><span class=katex-html aria-hidden=true><span class=base><span class=strut style=height:.58056em;vertical-align:-.15em></span><span class=mord><span class=\"mord mathdefault\">x</span><span class=msupsub><span class=\"vlist-t vlist-t2\"><span class=vlist-r><span class=vlist style=height:.31166399999999994em><span style=top:-2.5500000000000003em;margin-left:0;margin-right:.05em><span class=pstrut style=height:2.7em></span><span class=\"mtight sizing reset-size6 size3\"><span class=\"mord mathdefault mtight\">i</span></span></span></span><span class=vlist-s>​</span></span><span class=vlist-r><span class=vlist style=height:.15em><span></span></span></span></span></span></span></span></span></span></span> representa a los items del <code>array</code> (ej. <span class=\"math math-inline\"><span class=katex><span class=katex-mathml><math xmlns=http://www.w3.org/1998/Math/MathML><semantics><mrow><msub><mi>x</mi><mn>3</mn></msub></mrow><annotation encoding=application/x-tex>x_3</annotation></semantics></math></span><span class=katex-html aria-hidden=true><span class=base><span class=strut style=height:.58056em;vertical-align:-.15em></span><span class=mord><span class=\"mord mathdefault\">x</span><span class=msupsub><span class=\"vlist-t vlist-t2\"><span class=vlist-r><span class=vlist style=height:.30110799999999993em><span style=top:-2.5500000000000003em;margin-left:0;margin-right:.05em><span class=pstrut style=height:2.7em></span><span class=\"mtight sizing reset-size6 size3\"><span class=\"mord mtight\">3</span></span></span></span><span class=vlist-s>​</span></span><span class=vlist-r><span class=vlist style=height:.15em><span></span></span></span></span></span></span></span></span></span></span> representa al elemento en la tercera posicion).<p>Existen dos formas de representar la suma de un <code>array</code> en matematicas:<div class=\"math math-display\"><span class=katex-display><span class=katex><span class=katex-mathml><math xmlns=http://www.w3.org/1998/Math/MathML><semantics><mrow><msub><mi>x</mi><mn>1</mn></msub><mo>+</mo><msub><mi>x</mi><mn>2</mn></msub><mo>+</mo><mo>⋯</mo><mo>+</mo><msub><mi>x</mi><mi>n</mi></msub></mrow><annotation encoding=application/x-tex>x_1 + x_2 + \\dotsb + x_n</annotation></semantics></math></span><span class=katex-html aria-hidden=true><span class=base><span class=strut style=height:.73333em;vertical-align:-.15em></span><span class=mord><span class=\"mord mathdefault\">x</span><span class=msupsub><span class=\"vlist-t vlist-t2\"><span class=vlist-r><span class=vlist style=height:.30110799999999993em><span style=top:-2.5500000000000003em;margin-left:0;margin-right:.05em><span class=pstrut style=height:2.7em></span><span class=\"mtight sizing reset-size6 size3\"><span class=\"mord mtight\">1</span></span></span></span><span class=vlist-s>​</span></span><span class=vlist-r><span class=vlist style=height:.15em><span></span></span></span></span></span></span><span class=mspace style=margin-right:.2222222222222222em></span><span class=mbin>+</span><span class=mspace style=margin-right:.2222222222222222em></span></span><span class=base><span class=strut style=height:.73333em;vertical-align:-.15em></span><span class=mord><span class=\"mord mathdefault\">x</span><span class=msupsub><span class=\"vlist-t vlist-t2\"><span class=vlist-r><span class=vlist style=height:.30110799999999993em><span style=top:-2.5500000000000003em;margin-left:0;margin-right:.05em><span class=pstrut style=height:2.7em></span><span class=\"mtight sizing reset-size6 size3\"><span class=\"mord mtight\">2</span></span></span></span><span class=vlist-s>​</span></span><span class=vlist-r><span class=vlist style=height:.15em><span></span></span></span></span></span></span><span class=mspace style=margin-right:.2222222222222222em></span><span class=mbin>+</span><span class=mspace style=margin-right:.2222222222222222em></span></span><span class=base><span class=strut style=height:.66666em;vertical-align:-.08333em></span><span class=minner>⋯</span><span class=mspace style=margin-right:.2222222222222222em></span><span class=mbin>+</span><span class=mspace style=margin-right:.2222222222222222em></span></span><span class=base><span class=strut style=height:.58056em;vertical-align:-.15em></span><span class=mord><span class=\"mord mathdefault\">x</span><span class=msupsub><span class=\"vlist-t vlist-t2\"><span class=vlist-r><span class=vlist style=height:.151392em><span style=top:-2.5500000000000003em;margin-left:0;margin-right:.05em><span class=pstrut style=height:2.7em></span><span class=\"mtight sizing reset-size6 size3\"><span class=\"mord mathdefault mtight\">n</span></span></span></span><span class=vlist-s>​</span></span><span class=vlist-r><span class=vlist style=height:.15em><span></span></span></span></span></span></span></span></span></span></span></div><div class=\"math math-display\"><span class=katex-display><span class=katex><span class=katex-mathml><math xmlns=http://www.w3.org/1998/Math/MathML><semantics><mrow><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><msub><mi>x</mi><mi>i</mi></msub></mrow><annotation encoding=application/x-tex>\\sum_{i = 1}^n x_i</annotation></semantics></math></span><span class=katex-html aria-hidden=true><span class=base><span class=strut style=height:2.929066em;vertical-align:-1.277669em></span><span class=\"mop op-limits\"><span class=\"vlist-t vlist-t2\"><span class=vlist-r><span class=vlist style=height:1.6513970000000002em><span style=top:-1.872331em;margin-left:0><span class=pstrut style=height:3.05em></span><span class=\"mtight sizing reset-size6 size3\"><span class=\"mord mtight\"><span class=\"mord mathdefault mtight\">i</span><span class=\"mtight mrel\">=</span><span class=\"mord mtight\">1</span></span></span></span><span style=top:-3.050005em><span class=pstrut style=height:3.05em></span><span><span class=\"mop op-symbol large-op\">∑</span></span></span><span style=top:-4.3000050000000005em;margin-left:0><span class=pstrut style=height:3.05em></span><span class=\"mtight sizing reset-size6 size3\"><span class=\"mord mathdefault mtight\">n</span></span></span></span><span class=vlist-s>​</span></span><span class=vlist-r><span class=vlist style=height:1.277669em><span></span></span></span></span></span><span class=mspace style=margin-right:.16666666666666666em></span><span class=mord><span class=\"mord mathdefault\">x</span><span class=msupsub><span class=\"vlist-t vlist-t2\"><span class=vlist-r><span class=vlist style=height:.31166399999999994em><span style=top:-2.5500000000000003em;margin-left:0;margin-right:.05em><span class=pstrut style=height:2.7em></span><span class=\"mtight sizing reset-size6 size3\"><span class=\"mord mathdefault mtight\">i</span></span></span></span><span class=vlist-s>​</span></span><span class=vlist-r><span class=vlist style=height:.15em><span></span></span></span></span></span></span></span></span></span></span></div><li><h3 id=media>Media</h3><p>Tambien conocido como promedio, la media de una poblacion se denota como <span class=\"math math-inline\"><span class=katex><span class=katex-mathml><math xmlns=http://www.w3.org/1998/Math/MathML><semantics><mrow><mi>μ</mi></mrow><annotation encoding=application/x-tex>\\mu</annotation></semantics></math></span><span class=katex-html aria-hidden=true><span class=base><span class=strut style=height:.625em;vertical-align:-.19444em></span><span class=\"mord mathdefault\">μ</span></span></span></span></span> y de una muestra como <span class=\"math math-inline\"><span class=katex><span class=katex-mathml><math xmlns=http://www.w3.org/1998/Math/MathML><semantics><mrow><mover accent=true><mi>x</mi><mo stretchy=true>‾</mo></mover></mrow><annotation encoding=application/x-tex>\\overline{x}</annotation></semantics></math></span><span class=katex-html aria-hidden=true><span class=base><span class=strut style=height:.63056em;vertical-align:0></span><span class=\"mord overline\"><span class=vlist-t><span class=vlist-r><span class=vlist style=height:.63056em><span style=top:-3em><span class=pstrut style=height:3em></span><span class=mord><span class=\"mord mathdefault\">x</span></span></span><span style=top:-3.55056em><span class=pstrut style=height:3em></span><span class=overline-line style=border-bottom-width:.04em></span></span></span></span></span></span></span></span></span></span>, su formula simboliza la suma de todos los items del <code>array</code> dividido por su <code>length</code>:<div class=\"math math-display\"><span class=katex-display><span class=katex><span class=katex-mathml><math xmlns=http://www.w3.org/1998/Math/MathML><semantics><mrow><mover accent=true><mi>x</mi><mo stretchy=true>‾</mo></mover><mo>=</mo><mfrac><mn>1</mn><mi>n</mi></mfrac><mrow><mo fence=true>(</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><msub><mi>x</mi><mi>i</mi></msub><mo fence=true>)</mo></mrow></mrow><annotation encoding=application/x-tex>\\overline{x} = \\frac{1}{n} \\left( \\sum_{i = 1}^n x_i \\right)</annotation></semantics></math></span><span class=katex-html aria-hidden=true><span class=base><span class=strut style=height:.63056em;vertical-align:0></span><span class=\"mord overline\"><span class=vlist-t><span class=vlist-r><span class=vlist style=height:.63056em><span style=top:-3em><span class=pstrut style=height:3em></span><span class=mord><span class=\"mord mathdefault\">x</span></span></span><span style=top:-3.55056em><span class=pstrut style=height:3em></span><span class=overline-line style=border-bottom-width:.04em></span></span></span></span></span></span><span class=mspace style=margin-right:.2777777777777778em></span><span class=mrel>=</span><span class=mspace style=margin-right:.2777777777777778em></span></span><span class=base><span class=strut style=height:3.027669em;vertical-align:-1.277669em></span><span class=mord><span class=\"mopen nulldelimiter\"></span><span class=mfrac><span class=\"vlist-t vlist-t2\"><span class=vlist-r><span class=vlist style=height:1.32144em><span style=top:-2.314em><span class=pstrut style=height:3em></span><span class=mord><span class=\"mord mathdefault\">n</span></span></span><span style=top:-3.23em><span class=pstrut style=height:3em></span><span class=frac-line style=border-bottom-width:.04em></span></span><span style=top:-3.677em><span class=pstrut style=height:3em></span><span class=mord><span class=mord>1</span></span></span></span><span class=vlist-s>​</span></span><span class=vlist-r><span class=vlist style=height:.686em><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=mspace style=margin-right:.16666666666666666em></span><span class=minner><span class=\"mopen delimcenter\"style=top:0><span class=\"delimsizing size4\">(</span></span><span class=\"mop op-limits\"><span class=\"vlist-t vlist-t2\"><span class=vlist-r><span class=vlist style=height:1.6513970000000002em><span style=top:-1.872331em;margin-left:0><span class=pstrut style=height:3.05em></span><span class=\"mtight sizing reset-size6 size3\"><span class=\"mord mtight\"><span class=\"mord mathdefault mtight\">i</span><span class=\"mtight mrel\">=</span><span class=\"mord mtight\">1</span></span></span></span><span style=top:-3.050005em><span class=pstrut style=height:3.05em></span><span><span class=\"mop op-symbol large-op\">∑</span></span></span><span style=top:-4.3000050000000005em;margin-left:0><span class=pstrut style=height:3.05em></span><span class=\"mtight sizing reset-size6 size3\"><span class=\"mord mathdefault mtight\">n</span></span></span></span><span class=vlist-s>​</span></span><span class=vlist-r><span class=vlist style=height:1.277669em><span></span></span></span></span></span><span class=mspace style=margin-right:.16666666666666666em></span><span class=mord><span class=\"mord mathdefault\">x</span><span class=msupsub><span class=\"vlist-t vlist-t2\"><span class=vlist-r><span class=vlist style=height:.31166399999999994em><span style=top:-2.5500000000000003em;margin-left:0;margin-right:.05em><span class=pstrut style=height:2.7em></span><span class=\"mtight sizing reset-size6 size3\"><span class=\"mord mathdefault mtight\">i</span></span></span></span><span class=vlist-s>​</span></span><span class=vlist-r><span class=vlist style=height:.15em><span></span></span></span></span></span></span><span class=\"mclose delimcenter\"style=top:0><span class=\"delimsizing size4\">)</span></span></span></span></span></span></span></div><li><h3 id=varianza-vxvxvx>Varianza: <span class=\"math math-inline\"><span class=katex><span class=katex-mathml><math xmlns=http://www.w3.org/1998/Math/MathML><semantics><mrow><mi>V</mi><mo stretchy=false>(</mo><mi>X</mi><mo stretchy=false>)</mo></mrow><annotation encoding=application/x-tex>V(X)</annotation></semantics></math></span><span class=katex-html aria-hidden=true><span class=base><span class=strut style=height:1em;vertical-align:-.25em></span><span class=\"mord mathdefault\"style=margin-right:.22222em>V</span><span class=mopen>(</span><span class=\"mord mathdefault\"style=margin-right:.07847em>X</span><span class=mclose>)</span></span></span></span></span></h3><p>Nos indica que tan disperson se encuentran los valores de los <code>items</code> del <code>array</code> respecto a su <a href=#media>media</a>.<div class=\"math math-display\"><span class=katex-display><span class=katex><span class=katex-mathml><math xmlns=http://www.w3.org/1998/Math/MathML><semantics><mrow><mi>V</mi><mo stretchy=false>(</mo><mi>X</mi><mo stretchy=false>)</mo><mo>=</mo><mfrac><mn>1</mn><mi>n</mi></mfrac><mrow><mo fence=true>(</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><mo stretchy=false>(</mo><msub><mi>x</mi><mi>i</mi></msub><mo>−</mo><mi>μ</mi><msup><mo stretchy=false>)</mo><mn>2</mn></msup><mo fence=true>)</mo></mrow></mrow><annotation encoding=application/x-tex>V(X) = \\frac{1}{n} \\left( \\sum_{i = 1}^n (x_i - \\mu)^2 \\right)</annotation></semantics></math></span><span class=katex-html aria-hidden=true><span class=base><span class=strut style=height:1em;vertical-align:-.25em></span><span class=\"mord mathdefault\"style=margin-right:.22222em>V</span><span class=mopen>(</span><span class=\"mord mathdefault\"style=margin-right:.07847em>X</span><span class=mclose>)</span><span class=mspace style=margin-right:.2777777777777778em></span><span class=mrel>=</span><span class=mspace style=margin-right:.2777777777777778em></span></span><span class=base><span class=strut style=height:3.027669em;vertical-align:-1.277669em></span><span class=mord><span class=\"mopen nulldelimiter\"></span><span class=mfrac><span class=\"vlist-t vlist-t2\"><span class=vlist-r><span class=vlist style=height:1.32144em><span style=top:-2.314em><span class=pstrut style=height:3em></span><span class=mord><span class=\"mord mathdefault\">n</span></span></span><span style=top:-3.23em><span class=pstrut style=height:3em></span><span class=frac-line style=border-bottom-width:.04em></span></span><span style=top:-3.677em><span class=pstrut style=height:3em></span><span class=mord><span class=mord>1</span></span></span></span><span class=vlist-s>​</span></span><span class=vlist-r><span class=vlist style=height:.686em><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=mspace style=margin-right:.16666666666666666em></span><span class=minner><span class=\"mopen delimcenter\"style=top:0><span class=\"delimsizing size4\">(</span></span><span class=\"mop op-limits\"><span class=\"vlist-t vlist-t2\"><span class=vlist-r><span class=vlist style=height:1.6513970000000002em><span style=top:-1.872331em;margin-left:0><span class=pstrut style=height:3.05em></span><span class=\"mtight sizing reset-size6 size3\"><span class=\"mord mtight\"><span class=\"mord mathdefault mtight\">i</span><span class=\"mtight mrel\">=</span><span class=\"mord mtight\">1</span></span></span></span><span style=top:-3.050005em><span class=pstrut style=height:3.05em></span><span><span class=\"mop op-symbol large-op\">∑</span></span></span><span style=top:-4.3000050000000005em;margin-left:0><span class=pstrut style=height:3.05em></span><span class=\"mtight sizing reset-size6 size3\"><span class=\"mord mathdefault mtight\">n</span></span></span></span><span class=vlist-s>​</span></span><span class=vlist-r><span class=vlist style=height:1.277669em><span></span></span></span></span></span><span class=mopen>(</span><span class=mord><span class=\"mord mathdefault\">x</span><span class=msupsub><span class=\"vlist-t vlist-t2\"><span class=vlist-r><span class=vlist style=height:.31166399999999994em><span style=top:-2.5500000000000003em;margin-left:0;margin-right:.05em><span class=pstrut style=height:2.7em></span><span class=\"mtight sizing reset-size6 size3\"><span class=\"mord mathdefault mtight\">i</span></span></span></span><span class=vlist-s>​</span></span><span class=vlist-r><span class=vlist style=height:.15em><span></span></span></span></span></span></span><span class=mspace style=margin-right:.2222222222222222em></span><span class=mbin>−</span><span class=mspace style=margin-right:.2222222222222222em></span><span class=\"mord mathdefault\">μ</span><span class=mclose><span class=mclose>)</span><span class=msupsub><span class=vlist-t><span class=vlist-r><span class=vlist style=height:.8641079999999999em><span style=top:-3.113em;margin-right:.05em><span class=pstrut style=height:2.7em></span><span class=\"mtight sizing reset-size6 size3\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span><span class=\"mclose delimcenter\"style=top:0><span class=\"delimsizing size4\">)</span></span></span></span></span></span></span></div><li><h3 id=desviacion-estandar-σsigmaσ>Desviacion estandar: <span class=\"math math-inline\"><span class=katex><span class=katex-mathml><math xmlns=http://www.w3.org/1998/Math/MathML><semantics><mrow><mi>σ</mi></mrow><annotation encoding=application/x-tex>\\sigma</annotation></semantics></math></span><span class=katex-html aria-hidden=true><span class=base><span class=strut style=height:.43056em;vertical-align:0></span><span class=\"mord mathdefault\"style=margin-right:.03588em>σ</span></span></span></span></span></h3><p>Lo mismo que la varianza pero esta en las mismas unidades que la media.<div class=\"math math-display\"><span class=katex-display><span class=katex><span class=katex-mathml><math xmlns=http://www.w3.org/1998/Math/MathML><semantics><mrow><mi>σ</mi><mo>=</mo><msqrt><mrow><mi>V</mi><mo stretchy=false>(</mo><mi>X</mi><mo stretchy=false>)</mo></mrow></msqrt></mrow><annotation encoding=application/x-tex>\\sigma = \\sqrt{ V(X) }</annotation></semantics></math></span><span class=katex-html aria-hidden=true><span class=base><span class=strut style=height:.43056em;vertical-align:0></span><span class=\"mord mathdefault\"style=margin-right:.03588em>σ</span><span class=mspace style=margin-right:.2777777777777778em></span><span class=mrel>=</span><span class=mspace style=margin-right:.2777777777777778em></span></span><span class=base><span class=strut style=height:1.24em;vertical-align:-.25612499999999994em></span><span class=\"mord sqrt\"><span class=\"vlist-t vlist-t2\"><span class=vlist-r><span class=vlist style=height:.983875em><span class=svg-align style=top:-3.2em><span class=pstrut style=height:3.2em></span><span class=mord style=padding-left:1em><span class=\"mord mathdefault\"style=margin-right:.22222em>V</span><span class=mopen>(</span><span class=\"mord mathdefault\"style=margin-right:.07847em>X</span><span class=mclose>)</span></span></span><span style=top:-2.9438750000000002em><span class=pstrut style=height:3.2em></span><span class=hide-tail style=min-width:1.02em;height:1.28em><svg height=1.28em preserveAspectRatio=\"xMinYMin slice\"viewBox=\"0 0 400000 1296\"width=400em><path d=\"M263,681c0.7,0,18,39.7,52,119\nc34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120\nc340,-704.7,510.7,-1060.3,512,-1067\nl0 -0\nc4.7,-7.3,11,-11,19,-11\nH40000v40H1012.3\ns-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232\nc-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1\ns-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26\nc-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z\nM1001 80h400000v40h-400000z\"/></svg></span></span></span><span class=vlist-s>​</span></span><span class=vlist-r><span class=vlist style=height:.25612499999999994em><span></span></span></span></span></span></span></span></span></span></div><li><h3 id=distribucion-normal-fxfxfx>Distribucion normal: <span class=\"math math-inline\"><span class=katex><span class=katex-mathml><math xmlns=http://www.w3.org/1998/Math/MathML><semantics><mrow><mi>f</mi><mo stretchy=false>(</mo><mi>x</mi><mo stretchy=false>)</mo></mrow><annotation encoding=application/x-tex>f(x)</annotation></semantics></math></span><span class=katex-html aria-hidden=true><span class=base><span class=strut style=height:1em;vertical-align:-.25em></span><span class=\"mord mathdefault\"style=margin-right:.10764em>f</span><span class=mopen>(</span><span class=\"mord mathdefault\">x</span><span class=mclose>)</span></span></span></span></span></h3><p>Permite calcular intervalos de confianza con la regla empirica.<div class=\"math math-display\"><span class=katex-display><span class=katex><span class=katex-mathml><math xmlns=http://www.w3.org/1998/Math/MathML><semantics><mrow><mi>f</mi><mo stretchy=false>(</mo><mi>x</mi><mo stretchy=false>)</mo><mo>=</mo><mfrac><mn>1</mn><mrow><mi>σ</mi><msqrt><mrow><mn>2</mn><mi>π</mi></mrow></msqrt></mrow></mfrac><msup><mi>e</mi><mrow><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msup><mrow><mo fence=true>(</mo><mfrac><mrow><mi>x</mi><mo>−</mo><mi>μ</mi></mrow><mi>σ</mi></mfrac><mo fence=true>)</mo></mrow><mn>2</mn></msup></mrow></msup></mrow><annotation encoding=application/x-tex>f(x) = \\frac{1}{\\sigma\\sqrt{2\\pi}} e ^ { -\\frac{1}{2} \\left( \\frac{x - \\mu}{\\sigma} \\right) ^ 2 }</annotation></semantics></math></span><span class=katex-html aria-hidden=true><span class=base><span class=strut style=height:1em;vertical-align:-.25em></span><span class=\"mord mathdefault\"style=margin-right:.10764em>f</span><span class=mopen>(</span><span class=\"mord mathdefault\">x</span><span class=mclose>)</span><span class=mspace style=margin-right:.2777777777777778em></span><span class=mrel>=</span><span class=mspace style=margin-right:.2777777777777778em></span></span><span class=base><span class=strut style=height:2.25144em;vertical-align:-.93em></span><span class=mord><span class=\"mopen nulldelimiter\"></span><span class=mfrac><span class=\"vlist-t vlist-t2\"><span class=vlist-r><span class=vlist style=height:1.32144em><span style=top:-2.2027799999999997em><span class=pstrut style=height:3em></span><span class=mord><span class=\"mord mathdefault\"style=margin-right:.03588em>σ</span><span class=\"mord sqrt\"><span class=\"vlist-t vlist-t2\"><span class=vlist-r><span class=vlist style=height:.90722em><span class=svg-align style=top:-3em><span class=pstrut style=height:3em></span><span class=mord style=padding-left:.833em><span class=mord>2</span><span class=\"mord mathdefault\"style=margin-right:.03588em>π</span></span></span><span style=top:-2.86722em><span class=pstrut style=height:3em></span><span class=hide-tail style=min-width:.853em;height:1.08em><svg height=1.08em preserveAspectRatio=\"xMinYMin slice\"viewBox=\"0 0 400000 1080\"width=400em><path d=\"M95,702\nc-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14\nc0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54\nc44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10\ns173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429\nc69,-144,104.5,-217.7,106.5,-221\nl0 -0\nc5.3,-9.3,12,-14,20,-14\nH400000v40H845.2724\ns-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7\nc-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z\nM834 80h400000v40h-400000z\"/></svg></span></span></span><span class=vlist-s>​</span></span><span class=vlist-r><span class=vlist style=height:.13278em><span></span></span></span></span></span></span></span><span style=top:-3.23em><span class=pstrut style=height:3em></span><span class=frac-line style=border-bottom-width:.04em></span></span><span style=top:-3.677em><span class=pstrut style=height:3em></span><span class=mord><span class=mord>1</span></span></span></span><span class=vlist-s>​</span></span><span class=vlist-r><span class=vlist style=height:.93em><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=mord><span class=\"mord mathdefault\">e</span><span class=msupsub><span class=vlist-t><span class=vlist-r><span class=vlist style=height:1.1857199999999999em><span style=top:-3.4130000000000003em;margin-right:.05em><span class=pstrut style=height:3em></span><span class=\"mtight sizing reset-size6 size3\"><span class=\"mord mtight\"><span class=\"mord mtight\">−</span><span class=\"mord mtight\"><span class=\"sizing mopen reset-size3 nulldelimiter size6\"></span><span class=mfrac><span class=\"vlist-t vlist-t2\"><span class=vlist-r><span class=vlist style=height:.8443142857142858em><span style=top:-2.656em><span class=pstrut style=height:3em></span><span class=\"mtight sizing reset-size3 size1\"><span class=\"mord mtight\"><span class=\"mord mtight\">2</span></span></span></span><span style=top:-3.2255000000000003em><span class=pstrut style=height:3em></span><span class=\"mtight frac-line\"style=border-bottom-width:.049em></span></span><span style=top:-3.384em><span class=pstrut style=height:3em></span><span class=\"mtight sizing reset-size3 size1\"><span class=\"mord mtight\"><span class=\"mord mtight\">1</span></span></span></span></span><span class=vlist-s>​</span></span><span class=vlist-r><span class=vlist style=height:.344em><span></span></span></span></span></span><span class=\"sizing mclose reset-size3 nulldelimiter size6\"></span></span><span class=\"mtight minner\"><span class=\"mtight minner\"><span class=\"mtight sizing mopen reset-size3 delimcenter size6\"style=top:.07500000000000001em><span class=mtight>(</span></span><span class=\"mord mtight\"><span class=\"sizing mopen reset-size3 nulldelimiter size6\"></span><span class=mfrac><span class=\"vlist-t vlist-t2\"><span class=vlist-r><span class=vlist style=height:.87905em><span style=top:-2.656em><span class=pstrut style=height:3em></span><span class=\"mtight sizing reset-size3 size1\"><span class=\"mord mtight\"><span class=\"mord mathdefault mtight\"style=margin-right:.03588em>σ</span></span></span></span><span style=top:-3.2255000000000003em><span class=pstrut style=height:3em></span><span class=\"mtight frac-line\"style=border-bottom-width:.049em></span></span><span style=top:-3.4623857142857144em><span class=pstrut style=height:3em></span><span class=\"mtight sizing reset-size3 size1\"><span class=\"mord mtight\"><span class=\"mord mathdefault mtight\">x</span><span class=\"mtight mbin\">−</span><span class=\"mord mathdefault mtight\">μ</span></span></span></span></span><span class=vlist-s>​</span></span><span class=vlist-r><span class=vlist style=height:.344em><span></span></span></span></span></span><span class=\"sizing mclose reset-size3 nulldelimiter size6\"></span></span><span class=\"mtight sizing mclose reset-size3 delimcenter size6\"style=top:.07500000000000001em><span class=mtight>)</span></span></span><span class=msupsub><span class=vlist-t><span class=vlist-r><span class=vlist style=height:1.1038857142857144em><span style=top:-3.1435714285714287em;margin-right:.07142857142857144em><span class=pstrut style=height:2.5em></span><span class=\"mtight sizing reset-size3 size1\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></div><li><h3 id=regla-empirica-prprpr>Regla empirica: <span class=\"math math-inline\"><span class=katex><span class=katex-mathml><math xmlns=http://www.w3.org/1998/Math/MathML><semantics><mrow><mi>P</mi><mi>r</mi></mrow><annotation encoding=application/x-tex>Pr</annotation></semantics></math></span><span class=katex-html aria-hidden=true><span class=base><span class=strut style=height:.68333em;vertical-align:0></span><span class=\"mord mathdefault\"style=margin-right:.13889em>P</span><span class=\"mord mathdefault\"style=margin-right:.02778em>r</span></span></span></span></span></h3><p>Permite calcular probabilidades con la densidad de la distribucion normal.<div class=\"math math-display\"><span class=katex-display><span class=katex><span class=katex-mathml><math xmlns=http://www.w3.org/1998/Math/MathML><semantics><mrow><mi>P</mi><mi>r</mi><mo stretchy=false>(</mo><mi>μ</mi><mo>−</mo><mn>1</mn><mi>σ</mi><mo>≤</mo><mi>X</mi><mo>≤</mo><mi>μ</mi><mo>+</mo><mn>1</mn><mi>σ</mi><mo stretchy=false>)</mo><mo>≈</mo><mn>0.6827</mn></mrow><annotation encoding=application/x-tex>Pr(\\mu - 1\\sigma \\le X \\le \\mu + 1\\sigma) \\approx 0.6827</annotation></semantics></math></span><span class=katex-html aria-hidden=true><span class=base><span class=strut style=height:1em;vertical-align:-.25em></span><span class=\"mord mathdefault\"style=margin-right:.13889em>P</span><span class=\"mord mathdefault\"style=margin-right:.02778em>r</span><span class=mopen>(</span><span class=\"mord mathdefault\">μ</span><span class=mspace style=margin-right:.2222222222222222em></span><span class=mbin>−</span><span class=mspace style=margin-right:.2222222222222222em></span></span><span class=base><span class=strut style=height:.78041em;vertical-align:-.13597em></span><span class=mord>1</span><span class=\"mord mathdefault\"style=margin-right:.03588em>σ</span><span class=mspace style=margin-right:.2777777777777778em></span><span class=mrel>≤</span><span class=mspace style=margin-right:.2777777777777778em></span></span><span class=base><span class=strut style=height:.8193em;vertical-align:-.13597em></span><span class=\"mord mathdefault\"style=margin-right:.07847em>X</span><span class=mspace style=margin-right:.2777777777777778em></span><span class=mrel>≤</span><span class=mspace style=margin-right:.2777777777777778em></span></span><span class=base><span class=strut style=height:.7777700000000001em;vertical-align:-.19444em></span><span class=\"mord mathdefault\">μ</span><span class=mspace style=margin-right:.2222222222222222em></span><span class=mbin>+</span><span class=mspace style=margin-right:.2222222222222222em></span></span><span class=base><span class=strut style=height:1em;vertical-align:-.25em></span><span class=mord>1</span><span class=\"mord mathdefault\"style=margin-right:.03588em>σ</span><span class=mclose>)</span><span class=mspace style=margin-right:.2777777777777778em></span><span class=mrel>≈</span><span class=mspace style=margin-right:.2777777777777778em></span></span><span class=base><span class=strut style=height:.64444em;vertical-align:0></span><span class=mord>0</span><span class=mord>.</span><span class=mord>6</span><span class=mord>8</span><span class=mord>2</span><span class=mord>7</span></span></span></span></span></div><div class=\"math math-display\"><span class=katex-display><span class=katex><span class=katex-mathml><math xmlns=http://www.w3.org/1998/Math/MathML><semantics><mrow><mi>P</mi><mi>r</mi><mo stretchy=false>(</mo><mi>μ</mi><mo>−</mo><mn>2</mn><mi>σ</mi><mo>≤</mo><mi>X</mi><mo>≤</mo><mi>μ</mi><mo>+</mo><mn>2</mn><mi>σ</mi><mo stretchy=false>)</mo><mo>≈</mo><mn>0.9545</mn></mrow><annotation encoding=application/x-tex>Pr(\\mu - 2\\sigma \\le X \\le \\mu + 2\\sigma) \\approx 0.9545</annotation></semantics></math></span><span class=katex-html aria-hidden=true><span class=base><span class=strut style=height:1em;vertical-align:-.25em></span><span class=\"mord mathdefault\"style=margin-right:.13889em>P</span><span class=\"mord mathdefault\"style=margin-right:.02778em>r</span><span class=mopen>(</span><span class=\"mord mathdefault\">μ</span><span class=mspace style=margin-right:.2222222222222222em></span><span class=mbin>−</span><span class=mspace style=margin-right:.2222222222222222em></span></span><span class=base><span class=strut style=height:.78041em;vertical-align:-.13597em></span><span class=mord>2</span><span class=\"mord mathdefault\"style=margin-right:.03588em>σ</span><span class=mspace style=margin-right:.2777777777777778em></span><span class=mrel>≤</span><span class=mspace style=margin-right:.2777777777777778em></span></span><span class=base><span class=strut style=height:.8193em;vertical-align:-.13597em></span><span class=\"mord mathdefault\"style=margin-right:.07847em>X</span><span class=mspace style=margin-right:.2777777777777778em></span><span class=mrel>≤</span><span class=mspace style=margin-right:.2777777777777778em></span></span><span class=base><span class=strut style=height:.7777700000000001em;vertical-align:-.19444em></span><span class=\"mord mathdefault\">μ</span><span class=mspace style=margin-right:.2222222222222222em></span><span class=mbin>+</span><span class=mspace style=margin-right:.2222222222222222em></span></span><span class=base><span class=strut style=height:1em;vertical-align:-.25em></span><span class=mord>2</span><span class=\"mord mathdefault\"style=margin-right:.03588em>σ</span><span class=mclose>)</span><span class=mspace style=margin-right:.2777777777777778em></span><span class=mrel>≈</span><span class=mspace style=margin-right:.2777777777777778em></span></span><span class=base><span class=strut style=height:.64444em;vertical-align:0></span><span class=mord>0</span><span class=mord>.</span><span class=mord>9</span><span class=mord>5</span><span class=mord>4</span><span class=mord>5</span></span></span></span></span></div><div class=\"math math-display\"><span class=katex-display><span class=katex><span class=katex-mathml><math xmlns=http://www.w3.org/1998/Math/MathML><semantics><mrow><mi>P</mi><mi>r</mi><mo stretchy=false>(</mo><mi>μ</mi><mo>−</mo><mn>3</mn><mi>σ</mi><mo>≤</mo><mi>X</mi><mo>≤</mo><mi>μ</mi><mo>+</mo><mn>3</mn><mi>σ</mi><mo stretchy=false>)</mo><mo>≈</mo><mn>0.9973</mn></mrow><annotation encoding=application/x-tex>Pr(\\mu - 3\\sigma \\le X \\le \\mu + 3\\sigma) \\approx 0.9973</annotation></semantics></math></span><span class=katex-html aria-hidden=true><span class=base><span class=strut style=height:1em;vertical-align:-.25em></span><span class=\"mord mathdefault\"style=margin-right:.13889em>P</span><span class=\"mord mathdefault\"style=margin-right:.02778em>r</span><span class=mopen>(</span><span class=\"mord mathdefault\">μ</span><span class=mspace style=margin-right:.2222222222222222em></span><span class=mbin>−</span><span class=mspace style=margin-right:.2222222222222222em></span></span><span class=base><span class=strut style=height:.78041em;vertical-align:-.13597em></span><span class=mord>3</span><span class=\"mord mathdefault\"style=margin-right:.03588em>σ</span><span class=mspace style=margin-right:.2777777777777778em></span><span class=mrel>≤</span><span class=mspace style=margin-right:.2777777777777778em></span></span><span class=base><span class=strut style=height:.8193em;vertical-align:-.13597em></span><span class=\"mord mathdefault\"style=margin-right:.07847em>X</span><span class=mspace style=margin-right:.2777777777777778em></span><span class=mrel>≤</span><span class=mspace style=margin-right:.2777777777777778em></span></span><span class=base><span class=strut style=height:.7777700000000001em;vertical-align:-.19444em></span><span class=\"mord mathdefault\">μ</span><span class=mspace style=margin-right:.2222222222222222em></span><span class=mbin>+</span><span class=mspace style=margin-right:.2222222222222222em></span></span><span class=base><span class=strut style=height:1em;vertical-align:-.25em></span><span class=mord>3</span><span class=\"mord mathdefault\"style=margin-right:.03588em>σ</span><span class=mclose>)</span><span class=mspace style=margin-right:.2777777777777778em></span><span class=mrel>≈</span><span class=mspace style=margin-right:.2777777777777778em></span></span><span class=base><span class=strut style=height:.64444em;vertical-align:0></span><span class=mord>0</span><span class=mord>.</span><span class=mord>9</span><span class=mord>9</span><span class=mord>7</span><span class=mord>3</span></span></span></span></span></div></ul><p>confidense value<p><a href=https://fr.wikipedia.org/wiki/Aide:Formules_TeX rel=nofollow target=_blank>https://fr.wikipedia.org/wiki/Aide:Formules_TeX</a><hr><h3 id=edge-detection>Edge detection</h3><p>convolution operation (*) image with (filter or kernel) opara detectar bordes<h3 id=bias>Bias</h3><p>bias is an error from erroneous assumptions in the learning algorithm. High bias can cause an algorithm to miss the relevant relations between features and target outputs (underfitting).” Bias is the accuracy of our predictions. A high bias means the prediction will be inaccurate."}

/***/ }),
/* 350 */
/*!************************************************************************!*\
  !*** ../lib/loaders/markdown!../data/posts/nombrar-variables.draft.md ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"frontMatter":{"slug":"nombrar-variables.draft","fileName":"nombrar-variables.draft","readingTime":"☕️ 1 minuto de lectura","wordCount":39,"identifier":"blog-992","date":"28-12-2020","dateModified":"28-12-2020","formattedDate":"Abril 2020","imageCaption":"webpack","imageUrl":"//res.cloudinary.com/wochap/image/upload/v1586536747/wochap/hero/configurando_webpack.png","heroImageUrl":"//res.cloudinary.com/wochap/image/upload/v1586536747/wochap/hero/configurando_webpack.png","title":"Nombrar variables","description":"Aprende a configurar webpack 5 con babel, ¡Actualizate Aquí Ahora!","tags":["webpack"],"keywords":["webpack"]},"bodyHtml":"<h2 id=webpack>Webpack</h2>"}

/***/ }),
/* 351 */
/*!**********************************************************************************!*\
  !*** ../lib/loaders/markdown!../data/posts/python-para-javascript-developers.md ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"frontMatter":{"slug":"python-para-javascript-developers","fileName":"python-para-javascript-developers","readingTime":"☕️ 7 minutos de lectura","wordCount":1204,"identifier":"blog-3","date":"23-04-2020","dateModified":"23-04-2020","formattedDate":"Abril 2020","imageCaption":"logo de python y javascript","imageUrl":"//res.cloudinary.com/wochap/image/upload/v1587051750/wochap/hero/js-python.webp","heroImageUrl":"//res.cloudinary.com/wochap/image/upload/v1587051750/wochap/hero/js-python.webp","title":"Python para Javascript developers","description":"Aprende Python si ya sabes JavaScript en menos de 5 minutos!'","tags":["python"],"keywords":["python","javascript","javascript developers","aprender python","aprender javascript"]},"bodyHtml":"<p>Guía para aprender Python si ya sabes Javascript, o si quieres aprender Javascript y sabes Python.<p>A la izquierda codigo Javascript y a su derecha el codigo \"equivalente\" en Python 🐍.<h2 id=diferencias-y-similitudes-entre-javascript-y-python>Diferencias y similitudes entre JavaScript y Python</h2><p>Una de las primeras diferencias es que los nombres de variables y funciones en Python se escriben en <code>snake_case</code>, en Javascript usamos <code>camelCase</code>.<h3 id=asignacion-de-variables><div align=center>Asignacion de variables</div></h3><p>En python no necesitas ningun <code>keyword</code> (var, let, const) para declarar variables.<div class=c-markdown-code-compare><pre><code class=language-js><span class=hljs-keyword>var</span> name = <span class=hljs-string>'Pepe'</span>\n<span class=hljs-keyword>let</span> name = <span class=hljs-string>'Pepe'</span>\n<span class=hljs-keyword>const</span> name = <span class=hljs-string>'Pepe'</span>\n</code></pre><pre><code class=language-py>name = <span class=hljs-string>'Pepe'</span>\n\n\n</code></pre></div><h3 id=boolean><div align=center>Boolean</div></h3><div class=c-markdown-code-compare><pre><code class=language-js><span class=hljs-keyword>var</span> isOpen = <span class=hljs-literal>true</span>\nisOpen = <span class=hljs-literal>false</span>\n\n<span class=hljs-built_in>console</span>.log(<span class=hljs-number>5</span> || isOpen) <span class=hljs-comment>// 5</span>\n<span class=hljs-built_in>console</span>.log(<span class=hljs-number>5</span> &#38&#38 isOpen) <span class=hljs-comment>// false</span>\n<span class=hljs-built_in>console</span>.log(!isOpen) <span class=hljs-comment>// true</span>\n<span class=hljs-built_in>console</span>.log(<span class=hljs-number>5</span> !== isOpen) <span class=hljs-comment>// true</span>\n</code></pre><pre><code class=language-py>is_open = <span class=hljs-literal>True</span>\nis_open = <span class=hljs-literal>False</span>\n\nprint(<span class=hljs-number>5</span> <span class=hljs-keyword>or</span> is_open) <span class=hljs-comment># 5</span>\nprint(<span class=hljs-number>5</span> <span class=hljs-keyword>and</span> is_open) <span class=hljs-comment># False</span>\nprint(<span class=hljs-keyword>not</span> is_open) <span class=hljs-comment># True</span>\nprint(<span class=hljs-number>5</span> != is_open) <span class=hljs-comment># True</span>\n</code></pre></div><h3 id=string><div align=center>String</div></h3><div class=c-markdown-code-compare><pre><code class=language-js><span class=hljs-keyword>var</span> name = <span class=hljs-string>'Pepito'</span>\n\n<span class=hljs-built_in>console</span>.log(<span class=hljs-string>`i am <span class=hljs-subst>${<span class=hljs-number>5</span>}</span> years old.`</span>) <span class=hljs-comment>// i am 5 years old.</span>\n\n<span class=hljs-built_in>console</span>.log(name.toUpperCase()) <span class=hljs-comment>// PEPITO</span>\n<span class=hljs-built_in>console</span>.log(name.length) <span class=hljs-comment>// 6</span>\n</code></pre><pre><code class=language-py>name = <span class=hljs-string>'Pepito'</span>\n\nprint(<span class=hljs-string>f'i am <span class=hljs-subst>{<span class=hljs-number>5</span>}</span> years old.'</span>) <span class=hljs-comment># i am 5 years old.</span>\nprint(<span class=hljs-string>'i am {age} years old.'</span>.format(age=<span class=hljs-number>5</span>)) <span class=hljs-comment># i am 5 years old.</span>\nprint(name.upper()) <span class=hljs-comment># PEPITO</span>\nprint(len(name)) <span class=hljs-comment># 6</span>\n</code></pre></div><h3 id=number><div align=center>Number</div></h3><div class=c-markdown-code-compare><pre><code class=language-js><span class=hljs-keyword>var</span> height = <span class=hljs-number>5</span>\n<span class=hljs-keyword>var</span> width = <span class=hljs-number>2.5</span>\n\n<span class=hljs-built_in>console</span>.log(<span class=hljs-keyword>typeof</span> height) <span class=hljs-comment>// number</span>\n<span class=hljs-built_in>console</span>.log(<span class=hljs-keyword>typeof</span> height === <span class=hljs-string>'number'</span>) <span class=hljs-comment>// true</span>\n</code></pre><pre><code class=language-py>height = <span class=hljs-number>5</span>\nwidth = <span class=hljs-number>2.5</span>\n\nprint(type(height)) <span class=hljs-comment># &#60class 'int'></span>\nprint(type(height) <span class=hljs-keyword>is</span> int) <span class=hljs-comment># True</span>\n</code></pre></div><h3 id=array---list><div align=center>Array - List</div></h3><p><code>List</code> en Python tiene algo llamado <code>comprehension</code>, <code>syntax sugar</code> para transformar valores de manera simple en una sola linea, Javascript no cuenta con <code>comprehension</code>.<div class=c-markdown-code-compare><pre><code class=language-js><span class=hljs-keyword>var</span> numbers = [<span class=hljs-number>1</span>, <span class=hljs-number>2</span>, <span class=hljs-number>3</span>, <span class=hljs-number>4</span>]\nnumbers = [...numbers, <span class=hljs-number>5</span>]\nnumbers = [...numbers.slice(<span class=hljs-number>0</span>, <span class=hljs-number>1</span>), ...[<span class=hljs-number>8</span>, <span class=hljs-number>9</span>], ...numbers.slice(<span class=hljs-number>4</span>)]\n\n<span class=hljs-built_in>console</span>.log(numbers) <span class=hljs-comment>// [1, 8, 9, 5]</span>\n<span class=hljs-built_in>console</span>.log(numbers.slice(<span class=hljs-number>1</span>, <span class=hljs-number>3</span>)) <span class=hljs-comment>// [8, 9]</span>\n\n<span class=hljs-comment>// no hay algo como list comprehension en javascript</span>\nnumbers = numbers.filter(<span class=hljs-function><span class=hljs-params>x</span> =></span> x % <span class=hljs-number>2</span> === <span class=hljs-number>0</span>).map(<span class=hljs-function><span class=hljs-params>x</span> =></span> x ** <span class=hljs-number>2</span>)\n<span class=hljs-built_in>console</span>.log(numbers) <span class=hljs-comment>// [64]</span>\n\n<span class=hljs-comment>// destructuring assignment</span>\n<span class=hljs-keyword>const</span> [n] = numbers\n<span class=hljs-built_in>console</span>.log(n)\n</code></pre><pre><code class=language-py>numbers = [<span class=hljs-number>1</span>, <span class=hljs-number>2</span>, <span class=hljs-number>3</span>, <span class=hljs-number>4</span>]\nnumbers = [*numbers, <span class=hljs-number>5</span>]\nnumbers[<span class=hljs-number>1</span>:<span class=hljs-number>4</span>] = [<span class=hljs-number>8</span>, <span class=hljs-number>9</span>]\n\nprint(numbers) <span class=hljs-comment># [1, 8, 9, 5]</span>\nprint(numbers[<span class=hljs-number>1</span>:<span class=hljs-number>3</span>]) <span class=hljs-comment># [8, 9]</span>\n\n<span class=hljs-comment># list comprehension</span>\nnumbers = [x ** <span class=hljs-number>2</span> <span class=hljs-keyword>for</span> x <span class=hljs-keyword>in</span> numbers <span class=hljs-keyword>if</span> x % <span class=hljs-number>2</span> == <span class=hljs-number>0</span>]\nprint(numbers) <span class=hljs-comment># [64]</span>\n\n<span class=hljs-comment># destructuring assignment</span>\n[n] = numbers\nprint(n)\n</code></pre></div><h3 id=set><div align=center>Set</div></h3><p>Es como <code>List</code> pero desordenada y no tiene elementos duplicados.<div class=c-markdown-code-compare><pre><code class=language-js><span class=hljs-keyword>var</span> animals = <span class=hljs-keyword>new</span> <span class=hljs-built_in>Set</span>([<span class=hljs-string>'cat'</span>, <span class=hljs-string>'dog'</span>])\n\n</code></pre><pre><code class=language-py>animals = set([<span class=hljs-string>'cat'</span>, <span class=hljs-string>'dog'</span>])\nanimals = {<span class=hljs-string>'cat'</span>, <span class=hljs-string>'dog'</span>}\n</code></pre></div><h3 id=object---dictionary><div align=center>Object - Dictionary</div></h3><div class=c-markdown-code-compare><pre><code class=language-js><span class=hljs-keyword>var</span> animals = {<span class=hljs-attr>cat</span>: <span class=hljs-string>'nyan'</span>, <span class=hljs-attr>dog</span>: <span class=hljs-string>'snuffles'</span>}\n<span class=hljs-built_in>console</span>.log(animals.fish ?? <span class=hljs-string>'N/A'</span>) <span class=hljs-comment>// N/A</span>\n<span class=hljs-keyword>delete</span> animals.cat\n\n<span class=hljs-comment>// no hay algo como object comprehension en javascript</span>\n<span class=hljs-keyword>var</span> foo = [<span class=hljs-number>1</span>, <span class=hljs-number>2</span>, <span class=hljs-number>3</span>].filter(<span class=hljs-function><span class=hljs-params>x</span> =></span> x % <span class=hljs-number>2</span> === <span class=hljs-number>0</span>).reduce(<span class=hljs-function>(<span class=hljs-params>result, x</span>) =></span> ({...result, [x]: x ** <span class=hljs-number>2</span>}), {})\n<span class=hljs-built_in>console</span>.log(foo) <span class=hljs-comment>// {2: 4}</span>\n</code></pre><pre><code class=language-py>animals = {<span class=hljs-string>'cat'</span>: <span class=hljs-string>'nyan'</span>, <span class=hljs-string>'dog'</span>: <span class=hljs-string>'snuffles'</span>}\nprint(animals.get(<span class=hljs-string>'fish'</span>, <span class=hljs-string>'N/A'</span>)) <span class=hljs-comment># N/A</span>\n<span class=hljs-keyword>del</span> animals[<span class=hljs-string>'cat'</span>]\n\n<span class=hljs-comment># object comprehension</span>\nfoo = {x: x ** <span class=hljs-number>2</span> <span class=hljs-keyword>for</span> x <span class=hljs-keyword>in</span> [<span class=hljs-number>1</span>, <span class=hljs-number>2</span>, <span class=hljs-number>3</span>] <span class=hljs-keyword>if</span> x % <span class=hljs-number>2</span> == <span class=hljs-number>0</span>}\nprint(foo) <span class=hljs-comment># {2: 4}</span>\n</code></pre></div><h3 id=function><div align=center>Function</div></h3><div class=c-markdown-code-compare><pre><code class=language-js><span class=hljs-function><span class=hljs-keyword>function</span> <span class=hljs-title>multiplyByTwo</span>(<span class=hljs-params>a, b = <span class=hljs-number>3</span>, ...args</span>) </span>{\n  <span class=hljs-comment>//</span>\n}\n\n<span class=hljs-function><span class=hljs-keyword>function</span> <span class=hljs-title>sum</span>(<span class=hljs-params>a, {b = <span class=hljs-number>3</span>, c = <span class=hljs-number>1</span>} = {}</span>) </span>{\n  <span class=hljs-built_in>console</span>.log(a + b + c)\n}\n\nsum(<span class=hljs-number>5</span>, <span class=hljs-number>3</span>) <span class=hljs-comment>// 9</span>\nsum2(<span class=hljs-number>5</span>, {<span class=hljs-attr>c</span>: <span class=hljs-number>2</span>, <span class=hljs-attr>b</span>: <span class=hljs-number>8</span>}) <span class=hljs-comment>// 15</span>\n</code></pre><pre><code class=language-py><span class=hljs-function><span class=hljs-keyword>def</span> <span class=hljs-title>multiply_by_two</span>(<span class=hljs-params>a, b = <span class=hljs-number>3</span>, *args</span>):</span>\n  <span class=hljs-comment>#</span>\n\n\n<span class=hljs-function><span class=hljs-keyword>def</span> <span class=hljs-title>sum</span>(<span class=hljs-params>a, b = <span class=hljs-number>3</span>, c = <span class=hljs-number>1</span></span>):</span>\n  print(a + b + c)\n\n\nsum(<span class=hljs-number>5</span>, <span class=hljs-number>3</span>) <span class=hljs-comment># 9</span>\nsum(<span class=hljs-number>5</span>, c = <span class=hljs-number>2</span>, b = <span class=hljs-number>8</span>) <span class=hljs-comment># 15</span>\n</code></pre></div><h3 id=control-flow><div align=center>Control Flow</div></h3><div class=c-markdown-code-compare><pre><code class=language-js><span class=hljs-keyword>if</span> (x > <span class=hljs-number>0</span>) {\n  <span class=hljs-comment>//</span>\n} <span class=hljs-keyword>else</span> <span class=hljs-keyword>if</span> (x &#60 <span class=hljs-number>0</span>) {\n  <span class=hljs-comment>//</span>\n} <span class=hljs-keyword>else</span> {\n  <span class=hljs-keyword>return</span> <span class=hljs-string>'zero'</span>\n}\n\n<span class=hljs-keyword>for</span> (<span class=hljs-keyword>const</span> value <span class=hljs-keyword>of</span> [<span class=hljs-string>'a'</span>, <span class=hljs-string>'b'</span>]) {\n  <span class=hljs-comment>//</span>\n}\n\n<span class=hljs-keyword>for</span> (<span class=hljs-keyword>const</span> [index, value] <span class=hljs-keyword>of</span> [<span class=hljs-number>1</span>, <span class=hljs-number>2</span>, <span class=hljs-number>3</span>].entries()) {\n  <span class=hljs-comment>//</span>\n}\n\n<span class=hljs-keyword>for</span> (<span class=hljs-keyword>const</span> [key, value] <span class=hljs-keyword>of</span> <span class=hljs-built_in>Object</span>.entries({<span class=hljs-attr>foo</span>: <span class=hljs-string>'bar'</span>})) {\n  <span class=hljs-comment>//</span>\n}\n\n<span class=hljs-keyword>while</span> (a &#60 <span class=hljs-number>0</span>) {\n  <span class=hljs-comment>//</span>\n}\n</code></pre><pre><code class=language-py><span class=hljs-keyword>if</span> x > <span class=hljs-number>0</span>:\n  <span class=hljs-comment>#</span>\n<span class=hljs-keyword>elif</span> x &#60 <span class=hljs-number>0</span>:\n  <span class=hljs-comment>#</span>\n<span class=hljs-keyword>else</span>:\n  <span class=hljs-keyword>return</span> <span class=hljs-string>'zero'</span>\n\n\n<span class=hljs-keyword>for</span> value <span class=hljs-keyword>in</span> [<span class=hljs-string>'a'</span>, <span class=hljs-string>'b'</span>]:\n  <span class=hljs-comment>#</span>\n\n\n<span class=hljs-keyword>for</span> index, value <span class=hljs-keyword>in</span> enumerate([<span class=hljs-number>1</span>, <span class=hljs-number>2</span>, <span class=hljs-number>3</span>]):\n  <span class=hljs-comment>#</span>\n\n\n<span class=hljs-keyword>for</span> key, value <span class=hljs-keyword>in</span> {<span class=hljs-string>'foo'</span>: <span class=hljs-string>'bar'</span>}.items():\n  <span class=hljs-comment>#</span>\n\n\n<span class=hljs-keyword>while</span> a &#60 <span class=hljs-number>0</span>:\n  <span class=hljs-comment>#</span>\n\n</code></pre></div><h3 id=class><div align=center>Class</div></h3><div class=c-markdown-code-compare><pre><code class=language-js><span class=hljs-class><span class=hljs-keyword>class</span> <span class=hljs-title>Greeter</span> <span class=hljs-keyword>extends</span> <span class=hljs-title>BaseGreeter</span> </span>{\n  greetCount = <span class=hljs-number>0</span>\n\n  <span class=hljs-keyword>constructor</span>(name) {\n    <span class=hljs-keyword>this</span>.name = name\n  }\n  greet({ loud = <span class=hljs-literal>false</span> } = {}) {\n    <span class=hljs-keyword>this</span>.greetCount += <span class=hljs-number>1</span>\n    <span class=hljs-keyword>if</span> (loud) {\n      <span class=hljs-built_in>console</span>.log(<span class=hljs-string>`HELLO <span class=hljs-subst>${<span class=hljs-keyword>this</span>.name.toUpperCase()}</span>!`</span>)\n    } <span class=hljs-keyword>else</span> {\n      <span class=hljs-built_in>console</span>.log(<span class=hljs-string>`Hello <span class=hljs-subst>${<span class=hljs-keyword>this</span>.name}</span>`</span>)\n    }\n  }\n}\n<span class=hljs-keyword>var</span> g = <span class=hljs-keyword>new</span> Greeter(<span class=hljs-string>'Fred'</span>)\ng.greet() <span class=hljs-comment>// Hello Fred</span>\ng.greet({<span class=hljs-attr>loud</span>: <span class=hljs-literal>true</span>}) <span class=hljs-comment>// HELLO FRED!</span>\n<span class=hljs-built_in>console</span>.log(g.greetCount) <span class=hljs-comment>// 2</span>\n</code></pre><pre><code class=language-py><span class=hljs-class><span class=hljs-keyword>class</span> <span class=hljs-title>Greeter</span>(<span class=hljs-params>BaseGreeter</span>):</span>\n  greetCount = <span class=hljs-number>0</span>\n\n  <span class=hljs-function><span class=hljs-keyword>def</span> <span class=hljs-title>__init__</span>(<span class=hljs-params>self, name</span>):</span>\n    self.name = name\n\n  <span class=hljs-function><span class=hljs-keyword>def</span> <span class=hljs-title>greet</span>(<span class=hljs-params>self, loud = False</span>):</span>\n    self.greetCount += <span class=hljs-number>1</span>\n    <span class=hljs-keyword>if</span> loud:\n        print(<span class=hljs-string>'HELLO, %s!'</span> % self.name.upper())\n    <span class=hljs-keyword>else</span>:\n        print(<span class=hljs-string>'Hello, %s'</span> % self.name)\n\n\n\ng = Greeter(<span class=hljs-string>'Fred'</span>)\ng.greet() <span class=hljs-comment># Hello Fred</span>\ng.greet(loud=<span class=hljs-literal>True</span>) <span class=hljs-comment># HELLO FRED!</span>\nprint(g.greetCount) <span class=hljs-comment># 2</span>\n</code></pre></div><h3 id=null---none><div align=center>Null - None</div></h3><p>En Javascript tenemos <code>null</code> y <code>undefined</code>, en Python solo tenemos <code>None</code>.<div class=c-markdown-code-compare><pre><code class=language-js><span class=hljs-built_in>console</span>.log(<span class=hljs-literal>null</span>)\n<span class=hljs-built_in>console</span>.log(<span class=hljs-literal>undefined</span>)\n</code></pre><pre><code class=language-py>print(<span class=hljs-literal>None</span>)\n\n</code></pre></div><h3 id=modules><div align=center>Modules</div></h3><p>En Javascript para exportar algo de un modulo, lo haces usando el keyword <code>export</code> o <code>export default</code>, en Python no necesitas hacer nada.<div class=c-markdown-code-compare><pre><code class=language-js><span class=hljs-comment>// project structure</span>\n<span class=hljs-comment>//</span>\n<span class=hljs-comment>// ├── project1</span>\n<span class=hljs-comment>// │   └── index.js</span>\n<span class=hljs-comment>// └── project2</span>\n<span class=hljs-comment>//     ├── main.js</span>\n<span class=hljs-comment>//     └── package1</span>\n<span class=hljs-comment>//         ├── index.js</span>\n<span class=hljs-comment>//         ├── module1.js</span>\n<span class=hljs-comment>//         └── subpackage1</span>\n<span class=hljs-comment>//             └── module2.js</span>\n\n<span class=hljs-comment>// project1/index.js</span>\n\n<span class=hljs-keyword>export</span> <span class=hljs-keyword>const</span> somethingMore = <span class=hljs-string>'...'</span>\n\n<span class=hljs-comment>// project2/main.js</span>\n\n<span class=hljs-keyword>import</span> os <span class=hljs-keyword>from</span> <span class=hljs-string>'os'</span> <span class=hljs-comment>// standard library import</span>\n<span class=hljs-keyword>import</span> {Flask} <span class=hljs-keyword>from</span> <span class=hljs-string>'flask'</span> <span class=hljs-comment>// third party import</span>\n<span class=hljs-keyword>import</span> * <span class=hljs-keyword>as</span> package1 <span class=hljs-keyword>from</span> <span class=hljs-string>'./package1'</span> <span class=hljs-comment>// relative import with alias</span>\n<span class=hljs-keyword>import</span> {something} <span class=hljs-keyword>from</span> <span class=hljs-string>'./package1/subpackage1/module2.js'</span> <span class=hljs-comment>// relative import</span>\n<span class=hljs-keyword>import</span> {somethingMore} <span class=hljs-keyword>from</span> <span class=hljs-string>'../project1'</span> <span class=hljs-comment>// relative import</span>\n<span class=hljs-keyword>import</span> * <span class=hljs-keyword>as</span> myModule <span class=hljs-keyword>from</span> <span class=hljs-string>'./package1/module1.js'</span> <span class=hljs-comment>// relative import with alias</span>\n</code></pre><pre><code class=language-py><span class=hljs-comment># project structure</span>\n<span class=hljs-comment>#</span>\n<span class=hljs-comment># ├── project1</span>\n<span class=hljs-comment># │   └── __init__.py</span>\n<span class=hljs-comment># └── project2</span>\n<span class=hljs-comment>#     ├── main.py</span>\n<span class=hljs-comment>#     └── package1</span>\n<span class=hljs-comment>#         ├── __init__.py</span>\n<span class=hljs-comment>#         ├── module1.py</span>\n<span class=hljs-comment>#         └── subpackage1</span>\n<span class=hljs-comment>#             └── module2.py</span>\n\n<span class=hljs-comment># project1/__init__.py</span>\n\nsomething_more = <span class=hljs-string>'...'</span>\n\n<span class=hljs-comment># project2/main.py</span>\n\n<span class=hljs-keyword>import</span> os <span class=hljs-comment># standard library import</span>\n<span class=hljs-keyword>from</span> flask <span class=hljs-keyword>import</span> Flask <span class=hljs-comment># third party import</span>\n<span class=hljs-keyword>import</span> package1 <span class=hljs-comment># local application import</span>\n<span class=hljs-keyword>from</span> package1.subpackage1.module2 <span class=hljs-keyword>import</span> something <span class=hljs-comment># absolute import</span>\n<span class=hljs-keyword>from</span> ..project1 <span class=hljs-keyword>import</span> something_more <span class=hljs-comment># relative import</span>\n<span class=hljs-keyword>import</span> package1.module1 <span class=hljs-keyword>as</span> my_module <span class=hljs-comment># relative import with alias</span>\n</code></pre></div><h2 id=solo-en-python>Solo en Python</h2><p>Algunos features que tiene Python pero no Javascript.<h3 id=tuple><div align=center>Tuple</div></h3><p>Es como <code>List</code> pero inmutable.<pre><code class=language-py>myTuple = (<span class=hljs-number>1</span>, <span class=hljs-number>2</span>, <span class=hljs-number>3</span>)\n</code></pre><h3 id=_><div align=center>_</div></h3><p>Cuando una funcion termina en <code>_</code>, esta funcion no retorna el resultado si no que reemplaza<pre><code class=language-py>x = [<span class=hljs-number>-2</span>, <span class=hljs-number>-1</span>, <span class=hljs-number>0</span>, <span class=hljs-number>1</span>, <span class=hljs-number>2</span>, <span class=hljs-number>3</span>]\nx[:,<span class=hljs-number>0</span>].uniform_(<span class=hljs-number>-1.</span>, <span class=hljs-number>1</span>)\nprint(x)\n</code></pre><h2 id=referencias>Referencias</h2><ul><li><a href=https://cs231n.github.io/python-numpy-tutorial/ rel=nofollow target=_blank>https://cs231n.github.io/python-numpy-tutorial/</a><li><a href=https://realpython.com/lessons/python-naming-conventions/ rel=nofollow target=_blank>https://realpython.com/lessons/python-naming-conventions/</a><li><a href=https://dev.to/aveb/from-javascript-to-python-1b1m rel=nofollow target=_blank>https://dev.to/aveb/from-javascript-to-python-1b1m</a><li><a href=https://pypi.org/project/javascripthon/ rel=nofollow target=_blank>https://pypi.org/project/javascripthon/</a><li><a href=https://realpython.com/absolute-vs-relative-python-imports/ rel=nofollow target=_blank>https://realpython.com/absolute-vs-relative-python-imports/</a><li><a href=https://www.datacamp.com/community/data-science-cheatsheets rel=nofollow target=_blank>https://www.datacamp.com/community/data-science-cheatsheets</a></ul>"}

/***/ }),
/* 352 */
/*!********************************************************************!*\
  !*** ../lib/loaders/markdown!../data/posts/que-es-docker.draft.md ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"frontMatter":{"slug":"que-es-docker.draft","fileName":"que-es-docker.draft","readingTime":"☕️ 1 minuto de lectura","wordCount":46,"identifier":"blog-5","date":"08-05-2020","dateModified":"08-05-2020","formattedDate":"Mayo 2020","imageCaption":"docker","imageUrl":"","heroImageUrl":"","title":"¿Que es Docker?","description":"Que es docker, para que y como usarlo, ¡Comienza a aprender Aquí!","tags":["docker"],"keywords":["docker"]},"bodyHtml":"<h2 id=docker>Docker</h2><h2 id=recursos>Recursos</h2><ul><li><a href=https://medium.com/javarevisited/the-10-best-devops-tools-for-2020-72e7c489342a rel=nofollow target=_blank>https://medium.com/javarevisited/the-10-best-devops-tools-for-2020-72e7c489342a</a></ul>"}

/***/ }),
/* 353 */
/*!***************************************************************!*\
  !*** ../lib/loaders/markdown!../data/posts/template.draft.md ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"frontMatter":{"slug":"template.draft","fileName":"template.draft","readingTime":"☕️ 1 minuto de lectura","wordCount":38,"identifier":"blog-#","date":"28-12-2020","dateModified":"28-12-2020","formattedDate":"Abril 2020","imageCaption":"webpack","imageUrl":"//res.cloudinary.com/wochap/image/upload/v1586536747/wochap/hero/configurando_webpack.png","heroImageUrl":"//res.cloudinary.com/wochap/image/upload/v1586536747/wochap/hero/configurando_webpack.png","title":"Template","description":"Aprende a configurar webpack 5 con babel, ¡Actualizate Aquí Ahora!","tags":["webpack"],"keywords":["webpack"]},"bodyHtml":"<h2 id=webpack>Webpack</h2>"}

/***/ }),
/* 354 */
/*!*********************************************************!*\
  !*** ../lib/loaders/markdown!../data/works/fixbrand.md ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"frontMatter":{"slug":"fixbrand","fileName":"fixbrand","readingTime":"☕️ 1 minuto de lectura","wordCount":183,"date":"21-12-2015","formattedDate":"Diciembre 2015","imageUrl":"//res.cloudinary.com/wochap/image/upload/v1495070100/works/fixbrand.png","heroImageUrl":"//res.cloudinary.com/wochap/image/upload/v1495070206/wochap/hero/fixbrand.jpg","title":"Fixbrand","tasks":"Desarrollo landing page y panel de administración","role":"Full-stack developer","siteLink":"http://fixbrand.com/","description":"Fixbrand es una agencia creativa de marcas que apuesta por el trabajo estratégico, creativo y sostenido en el tiempo.","tags":["Full-stack","Laravel","Jquery","Stylus","Gulp","Freelance"]},"bodyHtml":"<h2 id=reto>Reto</h2><p>Realizar un sitio web gestionable, con animaciones entre paginas.<h2 id=solución>Solución</h2><p>Realize el panel de administracion con <a href=http://getbootstrap.com/ rel=nofollow target=_blank>Bootstrap</a> y <a href=https://laravel.com/ rel=nofollow target=_blank>Laravel</a>, y el landing page con <a href=https://jquery.com rel=nofollow target=_blank>Jquery</a>.<h3 id=tecnologías-destacadas>Tecnologías destacadas:</h3><ul><li><a href=https://css-tricks.com/snippets/css/a-guide-to-flexbox/ rel=nofollow target=_blank>CSS FlexBox</a></ul><h3 id=workflow>Workflow:</h3><ul><li><strong>PHP:</strong> <a href=https://laravel.com/ rel=nofollow target=_blank>Laravel</a>.<li><strong>HTML:</strong> <a href=https://laravel.com/docs/5.3/blade rel=nofollow target=_blank>Blade</a>.<li><strong>CSS:</strong> <a href=http://getbootstrap.com/ rel=nofollow target=_blank>Bootstrap</a>, <a href=http://stylus-lang.com/ rel=nofollow target=_blank>Stylus</a>, <a href=https://suitcss.github.io/ rel=nofollow target=_blank>SuitCSS</a>.<li><strong>JS:</strong> <a href=https://jquery.com/ rel=nofollow target=_blank>Jquery</a>.<li><strong>Build System:</strong> <a href=http://gulpjs.com/ rel=nofollow target=_blank>Gulp</a>, <a href=https://laravel.com/docs/5.3/elixir rel=nofollow target=_blank>Laravel elixir</a>.</ul><h3 id=logros>Logros:</h3><ul><li>Simular un <code>SPA</code> con <a href=https://jquery.com/ rel=nofollow target=_blank>Jquery</a>:</ul><div class=c-markdown-image-full><img alt=\"Portafolio del sitio web Fixbrand\"src=//res.cloudinary.com/wochap/image/upload/v1495070187/wochap/body/fixbrand-spa.gif></div><ul><li>Desarrollar 3 <code>CRUD</code> (portafolio, contacto, clientes), tanto en el <code>Back-end</code> como en el <code>Front-end</code>.<li>Subir una o varias imagenes al servidor haciendo uso de <code>AJAX</code>.</ul><h2 id=experiencia>Experiencia</h2><p>Como primer proyecto remoto, quede muy satisfecho, la experiencia de trabajar en pijamas es muy confortable aunque requiere de bastante <strong>disciplina</strong>."}

/***/ }),
/* 355 */
/*!***************************************************************!*\
  !*** ../lib/loaders/markdown!../data/works/gean-marroquin.md ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"frontMatter":{"slug":"gean-marroquin","fileName":"gean-marroquin","readingTime":"☕️ 2 minutos de lectura","wordCount":335,"date":"12-01-2017","formattedDate":"Enero 2017","imageUrl":"//res.cloudinary.com/wochap/image/upload/v1495070100/works/gean-marroquin.png","title":"Gean Marroquin","source":"https://github.com/wochap/wochap.github.io","role":"Front-end developer","siteLink":"https://geanmarroquin.com/","description":"Mi sitio personal.","tags":["PWA","SPA","SSR","Unit testing","Offline first","Static web site","Javascript","SASS","Webpack","Personal"]},"bodyHtml":"<p>¿Cual es la mejor manera de aprender algo? poniendolo en practica, es por eso que me propuse a crear algo que me permitiera demostrar mis habilidades y a la vez practicar lo aprendido. Entre las cosas que queria demostrar:<ul><li><a href=\"https://www.youtube.com/watch?v=IIRj8DftkqE\"rel=nofollow target=_blank>Offline first</a>.<li><a href=\"https://www.youtube.com/watch?v=QH94CXVv3UE\"rel=nofollow target=_blank>Code splitting</a>.<li>TDD.<li>Manejo asincrono en javascript.</ul><h2 id=reto>Reto</h2><p>Crear mi sitio personal, sin un servidor para poder subirlo a <a href=https://pages.github.com/ rel=nofollow target=_blank>GH Pages</a>, y permitirme tener contenido dinamico (portafolio, blog) .<h2 id=solución>Solución</h2><p>Despues de investigar, y habiendome inspirado de proyectos que ya lograban lo que me proponia:<ul><li><a href=https://github.com/gatsbyjs/gatsby rel=nofollow target=_blank>Gatsby</a><li><a href=https://phenomic.io/ rel=nofollow target=_blank>Phenomic</a></ul><p>Llege a la conclusion que las mejores herramientas para este trabajo eran <a href=https://webpack.github.io/ rel=nofollow target=_blank>Webpack</a> con <a href=https://facebook.github.io/react/ rel=nofollow target=_blank>React</a> o <a href=https://vuejs.org/ rel=nofollow target=_blank>VueJS</a>, asi que realize demos con ambos frameworks para elegir cual era el mas conveniente:<ul><li><a href=https://github.com/wochap/vue-static-blog rel=nofollow target=_blank>vue-static-blog</a><li><a href=https://github.com/wochap/webpack-react-static-boilerplate/tree/redux rel=nofollow target=_blank>webpack-react-static-boilerplate</a></ul><p>Me decidi por <a href=https://facebook.github.io/react/ rel=nofollow target=_blank>React</a> porque no tenia un proyecto que mostrar con el, el <a href=https://assets.materialup.com/uploads/d8f0a829-a3ff-4174-ac7e-d8021904463b/attachment.jpg rel=nofollow target=_blank>diseño</a> lo encontre en <a href=https://site.uplabs.com/ rel=nofollow target=_blank>Up Labs</a>.<p>Con todo en orden, comenze por maquetar el diseño, luego cree las pruebas y los componentes; añadí la configuracion necesaria para pre renderizar (con <a href=https://github.com/markdalgleish/static-site-generator-webpack-plugin rel=nofollow target=_blank>static-site-generator-webpack-plugin</a>) las rutas de mi aplicacion, una vez que todo funcionaba añadi <a href=https://github.com/reactjs/redux rel=nofollow target=_blank>redux</a> y refactorize, y refactorize y ...ahora me encuentro añadiendo trabajos a mi portafolio y pronto articulos.<h2 id=tecnologías-destacadas>Tecnologías destacadas:</h2><ul><li><a href=https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API rel=nofollow target=_blank>Service worker</a><li><a href=https://es.wikipedia.org/wiki/JSONP rel=nofollow target=_blank>JSONP</a><li><a href=https://css-tricks.com/snippets/css/a-guide-to-flexbox/ rel=nofollow target=_blank>CSS FlexBox</a></ul><h2 id=workflow>Workflow:</h2><ul><li><strong>CSS:</strong> <a href=http://stylus-lang.com/ rel=nofollow target=_blank>SASS</a>, <a href=http://csswizardry.com/2015/08/bemit-taking-the-bem-naming-convention-a-step-further/ rel=nofollow target=_blank>BEMIT</a>, <a href=http://csswizardry.net/talks/2014/11/itcss-dafed.pdf rel=nofollow target=_blank>ITCSS</a>, <a href=https://github.com/wocss rel=nofollow target=_blank>WOCSS</a>.<li><strong>JS:</strong> <a href=https://facebook.github.io/react/ rel=nofollow target=_blank>React</a> + <a href=https://github.com/ReactTraining/react-router rel=nofollow target=_blank>React router v3</a> + <a href=http://redux.js.org/ rel=nofollow target=_blank>Redux</a>, <a href=http://www.2ality.com/2016/02/ecmascript-2017.html rel=nofollow target=_blank>ES2017</a>, <a href=http://eslint.org/ rel=nofollow target=_blank>ESLint</a>, <a href=https://facebook.github.io/jest/ rel=nofollow target=_blank>Jest</a> + <a href=https://github.com/airbnb/enzyme rel=nofollow target=_blank>Enzyme</a>, <a href=https://gist.github.com/ryanflorence/daafb1e3cb8ad740b346 rel=nofollow target=_blank>by Route hierarchy</a>.<li><strong>Build System:</strong> <a href=https://webpack.github.io/ rel=nofollow target=_blank>Webpack</a> + <a href=https://babeljs.io/ rel=nofollow target=_blank>Babel</a> + <a href=https://github.com/wochap/wochap.github.io/tree/dev/build/webpack/loaders rel=nofollow target=_blank>custom-loaders</a> + <a href=https://github.com/GoogleChrome/sw-precache rel=nofollow target=_blank>sw-precache</a>.</ul><h2 id=logros>Logros:</h2><ul><li>Crear loaders propios en <a href=https://webpack.github.io/ rel=nofollow target=_blank>Webpack</a>.<li><strong>Optimistic updates</strong>.<li>El sitio no necesita cargar los scripts para que puedas navegar por el, gracias a que todas las paginas son generadas por <a href=https://webpack.github.io/ rel=nofollow target=_blank>Webpack</a> y <a href=https://facebook.github.io/react/ rel=nofollow target=_blank>React</a>.</ul>"}

/***/ }),
/* 356 */
/*!************************************************************!*\
  !*** ../lib/loaders/markdown!../data/works/la-glorieta.md ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"frontMatter":{"slug":"la-glorieta","fileName":"la-glorieta","readingTime":"☕️ 2 minutos de lectura","wordCount":306,"date":"26-08-2015","formattedDate":"Agosto 2015","imageUrl":"//res.cloudinary.com/wochap/image/upload/v1495070100/works/la-glorieta.jpg","heroImageUrl":"//res.cloudinary.com/wochap/image/upload/v1495070204/wochap/hero/la-glorieta.jpg","title":"La Glorieta","tasks":"Desarrollo de landing page","role":"Front-end developer","siteLink":"http://cmsreservas.noveltie.la","description":"La Glorieta es un restaurant representante de la culinaria tacneña en múltiples eventos y concursos.","tags":["Front-end","KnockoutJS","Jquery","Stylus","Laravel","Gulp","Noveltie"]},"bodyHtml":"<h2 id=reto>Reto</h2><p>Un sitio web que permitiera a sus clientes realizar reservas online, ademas de mostrar información de la misma, sus noticias y información de contacto.<h2 id=solución>Solución</h2><p>Como el sitio requeria de mucha manipulacion del <code>DOM</code>, aprendí y desarrolle el sitio con <a href=https://knockoutjs.com/ rel=nofollow target=_blank>KnockoutJS</a> y <a href=http://sammyjs.org/ rel=nofollow target=_blank>SammyJS</a> para manejar las rutas del catalogo.<h2 id=tecnologías-destacadas>Tecnologías destacadas:</h2><ul><li><a href=https://css-tricks.com/snippets/css/a-guide-to-flexbox/ rel=nofollow target=_blank>CSS FlexBox</a><li><a href=https://developer.mozilla.org/en-US/docs/Web/API/Storage/LocalStorage rel=nofollow target=_blank>BROWSER LocalStorage</a></ul><h2 id=workflow>Workflow:</h2><ul><li><strong>HTML:</strong> <a href=https://laravel.com/docs/5.3/blade rel=nofollow target=_blank>Blade</a>.<li><strong>CSS:</strong> <a href=http://stylus-lang.com/ rel=nofollow target=_blank>Stylus</a>, <a href=https://suitcss.github.io/ rel=nofollow target=_blank>SuitCSS</a>.<li><strong>JS:</strong> <a href=http://knockoutjs.com/ rel=nofollow target=_blank>KnockoutJS</a> + <a href=https://jquery.com/ rel=nofollow target=_blank>Jquery</a>, <a href=https://babeljs.io/learn-es2015/ rel=nofollow target=_blank>ES2015</a>.<li><strong>Build System:</strong> <a href=http://gulpjs.com/ rel=nofollow target=_blank>Gulp</a>, <a href=https://laravel.com/docs/5.3/elixir rel=nofollow target=_blank>Laravel elixir</a>, <a href=http://browserify.org/ rel=nofollow target=_blank>Browserify</a>, <a href=https://babeljs.io/ rel=nofollow target=_blank>Babel</a>.</ul><h2 id=logros>Logros:</h2><ul><li>Desarrollar un carrito de compras con persistencia de datos, .</ul><p><img alt=\"Carrito de compras del sitio web La Glorieta\"src=//res.cloudinary.com/wochap/image/upload/v1495070180/wochap/body/glorieta-carrito.jpg><ul><li>Desarrollar un catalogo de items, con categorias, sub categorias, ademas de <strong>paginación</strong>, y <strong>busqueda</strong>. Los datos son consumidos por <code>AJAX</code>.</ul><div class=c-markdown-image-full><img alt=\"Catalogo de item del sitio web La Glorieta\"src=//res.cloudinary.com/wochap/image/upload/v1495070190/wochap/body/glorieta-catalogo.jpg></div><ul><li>Implementar calculos y actualizaciones del DOM complejas, un claro <strong>ejemplo</strong> es el formulario de proforma, en cada seccion la suma de cantidades debe ser igual al <code>numero de personas</code>.</ul><p><img alt=\"Formulario de reserva del sitio web La Glorieta\"src=//res.cloudinary.com/wochap/image/upload/v1495070186/wochap/body/glorieta-reserva.gif><ul><li>Aprender <a href=http://knockoutjs.com/ rel=nofollow target=_blank>KnockoutJS</a>.</ul><h2 id=experiencia>Experiencia</h2><p><strong>La Glorieta</strong> es el primer <strong>proyecto real</strong> (es decir ser usado por personas) que desarrollé, y no fue facil, cuando empeze el proyecto mis conocimientos llegaban a solo poder maquetar, pero al termino del mismo acabe aprendiendo <a href=http://knockoutjs.com/ rel=nofollow target=_blank>KnockoutJS</a>, aplique <code>POO</code> y entendi como funcionaba el <code>data-binding</code>.<p>Una de las mejores cosas al desarrollar el sitio, fue que como primer <code>Front-end developer</code> en <a href=https://noveltie.la/ rel=nofollow target=_blank>Noveltie</a> me confiaron todo el desarrollo <code>Front-end</code>."}

/***/ }),
/* 357 */
/*!****************************************************************!*\
  !*** ../lib/loaders/markdown!../data/works/ricarica-travel.md ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"frontMatter":{"slug":"ricarica-travel","fileName":"ricarica-travel","readingTime":"☕️ 2 minutos de lectura","wordCount":288,"date":"19-05-2016","formattedDate":"Mayo 2016","imageUrl":"//res.cloudinary.com/wochap/image/upload/v1495070101/works/ricarica-travel.png","heroImageUrl":"//res.cloudinary.com/wochap/image/upload/v1495070205/wochap/hero/ricarica-travel.jpg","title":"RicaRica Travel","role":"Front-end developer","siteLink":"http://ricaricatravel.com/","description":"RicaRica Travel es una agencia de turismo.","tags":["SPA","i18n","Front-end","VueJS","Jquery","SASS","Laravel","Webpack","Noveltie"]},"bodyHtml":"<h2 id=reto>Reto</h2><p>Desarrollar un <strong>SPA</strong> con <strong>i18n</strong>, <strong>carrito de compras</strong> y <strong>pasarela de pago</strong>.<h2 id=solución>Solución</h2><p><strong>RicaRica Travel</strong> (agencia de turismo) fue uno de los proyectos mas complejos (tanto el diseño como la funcionalidad) que me haya tocado realizar. El desarrollo se hizo bajo un marco de trabajo agil: <strong>Scrum</strong>.<p>Ya que el sitio requeria de mucha manipulacion del <code>DOM</code>, trabaje con <a href=https://vuejs.org/ rel=nofollow target=_blank>VueJS</a>. Para manejar los datos del carrito y formularios añadí <a href=https://github.com/vuejs/vuex rel=nofollow target=_blank>Vuex</a> y <a href=https://github.com/vuejs/vue-router rel=nofollow target=_blank>vue-router</a> para manejar las rutas.<h3 id=tecnologías-destacadas>Tecnologías destacadas:</h3><ul><li><a href=https://developer.mozilla.org/es/docs/Web/API/Fetch_API rel=nofollow target=_blank>Fetch</a><li><a href=https://developer.mozilla.org/en-US/docs/Web/API/Storage/LocalStorage rel=nofollow target=_blank>LocalStorage</a><li><a href=https://developer.mozilla.org/es/docs/Web/CSS/Transiciones_de_CSS rel=nofollow target=_blank>CSS Transitions</a><li><a href=https://css-tricks.com/snippets/css/a-guide-to-flexbox/ rel=nofollow target=_blank>CSS FlexBox</a></ul><h3 id=workflow>Workflow:</h3><ul><li><strong>CSS:</strong> <a href=http://stylus-lang.com/ rel=nofollow target=_blank>SASS</a>, <a href=http://csswizardry.com/2015/08/bemit-taking-the-bem-naming-convention-a-step-further/ rel=nofollow target=_blank>BEMIT</a>, <a href=http://csswizardry.net/talks/2014/11/itcss-dafed.pdf rel=nofollow target=_blank>ITCSS</a>.<li><strong>JS:</strong> <a href=https://vuejs.org/ rel=nofollow target=_blank>VueJS</a> + <a href=https://github.com/vuejs/vue-router rel=nofollow target=_blank>vue-router</a> + <a href=https://github.com/vuejs/vuex/ rel=nofollow target=_blank>vuex</a>, <a href=https://jquery.com/ rel=nofollow target=_blank>Jquery</a>, <a href=https://babeljs.io/learn-es2015/ rel=nofollow target=_blank>ES2015</a>, <a href=http://eslint.org/ rel=nofollow target=_blank>ESLint</a>, <a href=https://gist.github.com/ryanflorence/daafb1e3cb8ad740b346 rel=nofollow target=_blank>by Route hierarchy</a>.<li><strong>Build System:</strong> <a href=https://webpack.github.io/ rel=nofollow target=_blank>Webpack</a> + <a href=https://babeljs.io/ rel=nofollow target=_blank>Babel</a>.</ul><h3 id=logros>Logros:</h3><ul><li>Implementar <code>I18n</code> (internacionalización), mi primer proyecto multi idioma, logrado con <a href=https://github.com/vuejs/vuex/ rel=nofollow target=_blank>vuex</a>.</ul><p><img alt=\"RicaRica Travel i18n demo\"src=//res.cloudinary.com/wochap/image/upload/v1495070196/wochap/body/ricarica-travel-i18n.gif><ul><li>Crear un <code>SPA</code> (Single Page Application), hecho con <a href=https://github.com/vuejs/vue-router rel=nofollow target=_blank>vue-router</a>, las animaciones fueron hechas con <a href=http://v1.vuejs.org/guide/transitions.html#CSS-Transitions rel=nofollow target=_blank>CSS-Transitions</a>.</ul><p><img alt=\"RicaRica Travel spa demo\"src=//res.cloudinary.com/wochap/image/upload/v1495070194/wochap/body/ricarica-travel-spa.gif><ul><li>Pasarela de pagos.</ul><div class=c-markdown-image-full><img alt=\"RicaRica Travel pasarela de pago\"src=//res.cloudinary.com/wochap/image/upload/v1495070174/wochap/body/ricarica-travel-payment.jpg></div><ul><li>Aprender <a href=https://vuejs.org/ rel=nofollow target=_blank>VueJS</a>.</ul><h2 id=experiencia>Experiencia</h2><p>Otro proyecto con grandes desafios, y una vez más... la complejidad de la aplicación me llevo a reemplazar <a href=http://knockoutjs.com/ rel=nofollow target=_blank>KnockoutJS</a> (framework actual que usaba), por uno mucho mas robusto: <a href=https://vuejs.org/ rel=nofollow target=_blank>VueJS</a> (luego de revisar <a href=https://facebook.github.io/react/ rel=nofollow target=_blank>React</a> y <a href=http://aurelia.io/ rel=nofollow target=_blank>Aurelia</a>).<p>Me decidi por <a href=https://vuejs.org/ rel=nofollow target=_blank>VueJS</a> ya que su curva de aprendizaje era bastante corta, llevaba todo lo que requeria, y ademas contaba con lo mejor de cada framework antes mencionados: <strong>componentes</strong>, <strong>directivas</strong>, <strong>data-binding</strong>."}

/***/ }),
/* 358 */
/*!**********************************************************!*\
  !*** ../lib/loaders/markdown!../data/works/yilancorp.md ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"frontMatter":{"slug":"yilancorp","fileName":"yilancorp","readingTime":"☕️ 1 minuto de lectura","wordCount":164,"date":"10-01-2017","formattedDate":"Enero 2017","imageUrl":"//res.cloudinary.com/wochap/image/upload/v1495070101/works/yilancorp.png","heroImageUrl":"//res.cloudinary.com/wochap/image/upload/v1495070203/wochap/hero/yilancorp.jpg","title":"Yilancorp","tasks":"Desarrollo de landing page.","role":"Front-end developer","siteLink":"http://yilancorp.com/","description":"Yilancorp es una empresa que ofrece productos y servicios: inpeccion de mercaderías, contizaciones y verificacion de fabricas.","tags":["Front-end","Jquery","SASS","Webpack","Freelance"]},"bodyHtml":"<h2 id=resumen>Resumen</h2><p>Gracias a la experiencia con anteriores proyectos, fue facil desarrollar el sitio, haciendo uso de mi framework personal <a href=https://github.com/wocss rel=nofollow target=_blank>wocss</a> (inspirado en <a href=https://github.com/inuitcss rel=nofollow target=_blank>InuitCSS</a>) y <a href=https://jquery.com/ rel=nofollow target=_blank>Jquery</a>, para las animaciones use <a href=http://velocityjs.org/ rel=nofollow target=_blank>VelocityJS</a>, tambien hize uso de <a href=http://materializecss.com/scrollspy.html rel=nofollow target=_blank>Scrollspy</a> (modulo de <a href=http://materializecss.com/ rel=nofollow target=_blank>MaterializeCSS</a>), tuve que modificarlo para que funcionara con un diferente <code>scroll container</code>.<h2 id=tecnologías-destacadas>Tecnologías destacadas:</h2><ul><li><a href=https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API rel=nofollow target=_blank>Service worker</a><li><a href=https://developer.mozilla.org/es/docs/Web/CSS/CSS_Animations/Usando_animaciones_CSS rel=nofollow target=_blank>CSS Animations</a><li><a href=https://es.wikipedia.org/wiki/JSONP rel=nofollow target=_blank>JSONP</a></ul><div class=c-markdown-image-full><img alt=\"JSONP demo\"src=//res.cloudinary.com/wochap/image/upload/v1495070174/wochap/body/yilancorp-services.gif></div><ul><li><a href=https://css-tricks.com/snippets/css/a-guide-to-flexbox/ rel=nofollow target=_blank>CSS FlexBox</a></ul><h2 id=workflow>Workflow:</h2><ul><li><strong>CSS:</strong> <a href=http://stylus-lang.com/ rel=nofollow target=_blank>SASS</a>, <a href=http://csswizardry.com/2015/08/bemit-taking-the-bem-naming-convention-a-step-further/ rel=nofollow target=_blank>BEMIT</a>, <a href=http://csswizardry.net/talks/2014/11/itcss-dafed.pdf rel=nofollow target=_blank>ITCSS</a>, <a href=https://github.com/wocss rel=nofollow target=_blank>WOCSS</a>.<li><strong>JS:</strong> <a href=https://jquery.com/ rel=nofollow target=_blank>Jquery</a>, <a href=https://babeljs.io/learn-es2015/ rel=nofollow target=_blank>ES2015</a>, <a href=http://eslint.org/ rel=nofollow target=_blank>ESLint</a>.<li><strong>Build System:</strong> <a href=https://webpack.github.io/ rel=nofollow target=_blank>Webpack</a> + <a href=https://babeljs.io/ rel=nofollow target=_blank>Babel</a> + <a href=https://github.com/wochap/wochap.github.io/tree/dev/build/webpack/loaders rel=nofollow target=_blank>custom-loaders</a>.</ul><h2 id=logros>Logros:</h2><ul><li>Personalizar el plugin <a href=http://materializecss.com/scrollspy.html rel=nofollow target=_blank>Scrollspy</a> de <a href=http://materializecss.com/ rel=nofollow target=_blank>MaterializeCSS</a>, para que funcionase con un diferente <code>scroll container</code>.<li><code>Fancy animations</code>.</ul>"}

/***/ }),
/* 359 */
/*!*************************************************************************************!*\
  !*** ../data/posts sync !../lib/loaders/front-matter.js ^(?!.*\.draft\.md$).*\.md$ ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./como-mejorar-el-posicionamiento-seo-de-tu-sitio-web.md": 360,
	"./configurar-webpack-5.md": 361,
	"./dart-para-javascript-developers.md": 362,
	"./python-para-javascript-developers.md": 363
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
webpackContext.id = 359;

/***/ }),
/* 360 */
/*!***********************************************************************************************************!*\
  !*** ../lib/loaders/front-matter.js!../data/posts/como-mejorar-el-posicionamiento-seo-de-tu-sitio-web.md ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"frontMatter":{"slug":"como-mejorar-el-posicionamiento-seo-de-tu-sitio-web","fileName":"como-mejorar-el-posicionamiento-seo-de-tu-sitio-web","readingTime":"☕️ 5 minutos de lectura","wordCount":947,"identifier":"blog-2","date":"15-04-2020","dateModified":"15-04-2020","formattedDate":"Abril 2020","imageCaption":"SEO posicionamiento en buscadores","imageUrl":"https://res.cloudinary.com/wochap/image/upload/v1586982279/wochap/hero/seo.webp","heroImageUrl":"https://res.cloudinary.com/wochap/image/upload/v1586982279/wochap/hero/seo.webp","title":"¿Comó mejorar el posicionamiento SEO de tu sitio web?","description":"Aprende a mejorar el posicionamiento orgánico (SEO) de tu sitio web con las mejores practicas, ¡Hazlo ahora 😄!","tags":["seo"],"keywords":["seo","posicionamiento web","posicionamiento seo","posicionamiento organico"]}}

/***/ }),
/* 361 */
/*!****************************************************************************!*\
  !*** ../lib/loaders/front-matter.js!../data/posts/configurar-webpack-5.md ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"frontMatter":{"slug":"configurar-webpack-5","fileName":"configurar-webpack-5","readingTime":"☕️ 7 minutos de lectura","wordCount":1337,"identifier":"blog-1","date":"09-04-2020","dateModified":"12-04-2020","formattedDate":"Abril 2020","imageCaption":"webpack","imageUrl":"//res.cloudinary.com/wochap/image/upload/v1586536747/wochap/hero/configurando_webpack.png","heroImageUrl":"//res.cloudinary.com/wochap/image/upload/v1586536747/wochap/hero/configurando_webpack.png","title":"Configurar webpack 5","description":"Aprende a configurar webpack 5 con babel, ¡Actualizate Aquí Ahora!","tags":["webpack","babel"],"keywords":["webpack","webpack 5","babel","webpack-dev-server"]}}

/***/ }),
/* 362 */
/*!***************************************************************************************!*\
  !*** ../lib/loaders/front-matter.js!../data/posts/dart-para-javascript-developers.md ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"frontMatter":{"slug":"dart-para-javascript-developers","fileName":"dart-para-javascript-developers","readingTime":"☕️ 8 minutos de lectura","wordCount":1410,"identifier":"blog-4","date":"24-04-2020","dateModified":"24-04-2020","formattedDate":"Abril 2020","imageCaption":"logo de dart y javascript","imageUrl":"//res.cloudinary.com/wochap/image/upload/v1587759087/wochap/hero/js-dart.webp","heroImageUrl":"//res.cloudinary.com/wochap/image/upload/v1587759087/wochap/hero/js-dart.webp","title":"Dart para Javascript developers","description":"Aprende Dart si ya sabes JavaScript en menos de 8 minutos!'","tags":["dart"],"keywords":["dart","aprender dart"]}}

/***/ }),
/* 363 */
/*!*****************************************************************************************!*\
  !*** ../lib/loaders/front-matter.js!../data/posts/python-para-javascript-developers.md ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"frontMatter":{"slug":"python-para-javascript-developers","fileName":"python-para-javascript-developers","readingTime":"☕️ 7 minutos de lectura","wordCount":1204,"identifier":"blog-3","date":"23-04-2020","dateModified":"23-04-2020","formattedDate":"Abril 2020","imageCaption":"logo de python y javascript","imageUrl":"//res.cloudinary.com/wochap/image/upload/v1587051750/wochap/hero/js-python.webp","heroImageUrl":"//res.cloudinary.com/wochap/image/upload/v1587051750/wochap/hero/js-python.webp","title":"Python para Javascript developers","description":"Aprende Python si ya sabes JavaScript en menos de 5 minutos!'","tags":["python"],"keywords":["python","javascript","javascript developers","aprender python","aprender javascript"]}}

/***/ }),
/* 364 */
/*!*************************************************************************************!*\
  !*** ../data/works sync !../lib/loaders/front-matter.js ^(?!.*\.draft\.md$).*\.md$ ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./fixbrand.md": 365,
	"./gean-marroquin.md": 366,
	"./la-glorieta.md": 367,
	"./ricarica-travel.md": 368,
	"./yilancorp.md": 369
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
webpackContext.id = 364;

/***/ }),
/* 365 */
/*!****************************************************************!*\
  !*** ../lib/loaders/front-matter.js!../data/works/fixbrand.md ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"frontMatter":{"slug":"fixbrand","fileName":"fixbrand","readingTime":"☕️ 1 minuto de lectura","wordCount":183,"date":"21-12-2015","formattedDate":"Diciembre 2015","imageUrl":"//res.cloudinary.com/wochap/image/upload/v1495070100/works/fixbrand.png","heroImageUrl":"//res.cloudinary.com/wochap/image/upload/v1495070206/wochap/hero/fixbrand.jpg","title":"Fixbrand","tasks":"Desarrollo landing page y panel de administración","role":"Full-stack developer","siteLink":"http://fixbrand.com/","description":"Fixbrand es una agencia creativa de marcas que apuesta por el trabajo estratégico, creativo y sostenido en el tiempo.","tags":["Full-stack","Laravel","Jquery","Stylus","Gulp","Freelance"]}}

/***/ }),
/* 366 */
/*!**********************************************************************!*\
  !*** ../lib/loaders/front-matter.js!../data/works/gean-marroquin.md ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"frontMatter":{"slug":"gean-marroquin","fileName":"gean-marroquin","readingTime":"☕️ 2 minutos de lectura","wordCount":335,"date":"12-01-2017","formattedDate":"Enero 2017","imageUrl":"//res.cloudinary.com/wochap/image/upload/v1495070100/works/gean-marroquin.png","title":"Gean Marroquin","source":"https://github.com/wochap/wochap.github.io","role":"Front-end developer","siteLink":"https://geanmarroquin.com/","description":"Mi sitio personal.","tags":["PWA","SPA","SSR","Unit testing","Offline first","Static web site","Javascript","SASS","Webpack","Personal"]}}

/***/ }),
/* 367 */
/*!*******************************************************************!*\
  !*** ../lib/loaders/front-matter.js!../data/works/la-glorieta.md ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"frontMatter":{"slug":"la-glorieta","fileName":"la-glorieta","readingTime":"☕️ 2 minutos de lectura","wordCount":306,"date":"26-08-2015","formattedDate":"Agosto 2015","imageUrl":"//res.cloudinary.com/wochap/image/upload/v1495070100/works/la-glorieta.jpg","heroImageUrl":"//res.cloudinary.com/wochap/image/upload/v1495070204/wochap/hero/la-glorieta.jpg","title":"La Glorieta","tasks":"Desarrollo de landing page","role":"Front-end developer","siteLink":"http://cmsreservas.noveltie.la","description":"La Glorieta es un restaurant representante de la culinaria tacneña en múltiples eventos y concursos.","tags":["Front-end","KnockoutJS","Jquery","Stylus","Laravel","Gulp","Noveltie"]}}

/***/ }),
/* 368 */
/*!***********************************************************************!*\
  !*** ../lib/loaders/front-matter.js!../data/works/ricarica-travel.md ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"frontMatter":{"slug":"ricarica-travel","fileName":"ricarica-travel","readingTime":"☕️ 2 minutos de lectura","wordCount":288,"date":"19-05-2016","formattedDate":"Mayo 2016","imageUrl":"//res.cloudinary.com/wochap/image/upload/v1495070101/works/ricarica-travel.png","heroImageUrl":"//res.cloudinary.com/wochap/image/upload/v1495070205/wochap/hero/ricarica-travel.jpg","title":"RicaRica Travel","role":"Front-end developer","siteLink":"http://ricaricatravel.com/","description":"RicaRica Travel es una agencia de turismo.","tags":["SPA","i18n","Front-end","VueJS","Jquery","SASS","Laravel","Webpack","Noveltie"]}}

/***/ }),
/* 369 */
/*!*****************************************************************!*\
  !*** ../lib/loaders/front-matter.js!../data/works/yilancorp.md ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"frontMatter":{"slug":"yilancorp","fileName":"yilancorp","readingTime":"☕️ 1 minuto de lectura","wordCount":164,"date":"10-01-2017","formattedDate":"Enero 2017","imageUrl":"//res.cloudinary.com/wochap/image/upload/v1495070101/works/yilancorp.png","heroImageUrl":"//res.cloudinary.com/wochap/image/upload/v1495070203/wochap/hero/yilancorp.jpg","title":"Yilancorp","tasks":"Desarrollo de landing page.","role":"Front-end developer","siteLink":"http://yilancorp.com/","description":"Yilancorp es una empresa que ofrece productos y servicios: inpeccion de mercaderías, contizaciones y verificacion de fabricas.","tags":["Front-end","Jquery","SASS","Webpack","Freelance"]}}

/***/ })
/******/ ]);