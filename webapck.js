var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
jsonpArray.push = webpackJsonpCallback;
(function (modules) { // webpackBootstrap
  // install a JSONP callback for chunk loading
  function webpackJsonpCallback(data) {
    var chunkIds = data[0];
    var moreModules = data[1];


    // add "moreModules" to the modules object,
    // then flag all "chunkIds" as loaded and fire callback
    var moduleId, chunkId, i = 0, resolves = [];
    for (; i < chunkIds.length; i++) {
      chunkId = chunkIds[i];
      if (installedChunks[chunkId]) {
        resolves.push(installedChunks[chunkId][0]);
      }
      //标记为0，表示已经安装过了
      installedChunks[chunkId] = 0;
    }
    //将模块存入modules
    for (moduleId in moreModules) {
      if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {

        modules[moduleId] = moreModules[moduleId];
      }
    }
    if (parentJsonpFunction) parentJsonpFunction(data);
    //执行回调，__webpack_require__.e的promise回调，调用__webpack_require__加载对应的模块
    while (resolves.length) {
      resolves.shift()();
    }

  };


  // 缓存模块的对象
  var installedModules = {};

  // 缓存chunk的对象
  // undefined = chunk not loaded, null = chunk preloaded/prefetched
  // Promise = chunk loading, 0 = chunk loaded
  var installedChunks = {
    "app": 0
  };



  // 拼接异步加载chunk的路径
  function jsonpScriptSrc(chunkId) {
    return __webpack_require__.p + "" + ({}[chunkId] || chunkId) + ".bundle.js"
  }

  // The require function
  function __webpack_require__(moduleId) {
    // 检查模块是否安装过
    if (installedModules[moduleId]) {
      return installedModules[moduleId].exports;
    }
    // 没有安装过就创建新模块存入缓存
    var module = installedModules[moduleId] = {
      i: moduleId,
      l: false,
      exports: {}
    };

    // 执行模块，传入module,module.exports,require
    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

    // 标记模块已经加载过
    module.l = true;

    // 返回模块的内容
    return module.exports;
  }


  // 加载chunk函数
  __webpack_require__.e = function requireEnsure(chunkId) {
    var promises = [];


    // JSONP chunk loading for javascript

    var installedChunkData = installedChunks[chunkId];
    if (installedChunkData !== 0) { // 0表示已经安装过了

      //installedChunkData是个数组，其内容为[resolve,reject,promise]
      if (installedChunkData) {
        //如果存在，表明正在加载	promises.push(installedChunkData[2]);
      } else {
        // 创建promise,并加入缓存
        var promise = new Promise(function (resolve, reject) {
          installedChunkData = installedChunks[chunkId] = [resolve, reject];
        });
        promises.push(installedChunkData[2] = promise);

        // 创建script标签加载chunk,添加到head中
        var script = document.createElement('script');
        var onScriptComplete;

        script.charset = 'utf-8';
        script.timeout = 120;
        if (__webpack_require__.nc) {
          script.setAttribute("nonce", __webpack_require__.nc);
        }
        script.src = jsonpScriptSrc(chunkId);

        onScriptComplete = function (event) {
          // avoid mem leaks in IE.
          script.onerror = script.onload = null;
          clearTimeout(timeout);
          var chunk = installedChunks[chunkId];
          //==0表示加载成功了
          if (chunk !== 0) {
            if (chunk) {
              var errorType = event && (event.type === 'load' ? 'missing' : event.type);
              var realSrc = event && event.target && event.target.src;
              var error = new Error('Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')');
              error.type = errorType;
              error.request = realSrc;
              chunk[1](error);
            }
            installedChunks[chunkId] = undefined;
          }
        };
        var timeout = setTimeout(function () {
          onScriptComplete({ type: 'timeout', target: script });
        }, 120000);
        script.onerror = script.onload = onScriptComplete;
        document.head.appendChild(script);
      }
    }
    //返回promise
    return Promise.all(promises);
  };

  // expose the modules object (__webpack_modules__)
  __webpack_require__.m = modules;

  // expose the module cache
  __webpack_require__.c = installedModules;

  // define getter function for harmony exports
  __webpack_require__.d = function (exports, name, getter) {
    if (!__webpack_require__.o(exports, name)) {
      Object.defineProperty(exports, name, { enumerable: true, get: getter });
    }
  };

  // define __esModule on exports
  __webpack_require__.r = function (exports) {
    if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
    }
    Object.defineProperty(exports, '__esModule', { value: true });
  };

  // create a fake namespace object
  // mode & 1: value is a module id, require it
  // mode & 2: merge all properties of value into the ns
  // mode & 4: return value when already ns object
  // mode & 8|1: behave like require
  __webpack_require__.t = function (value, mode) {
    if (mode & 1) value = __webpack_require__(value);
    if (mode & 8) return value;
    if ((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
    var ns = Object.create(null);
    __webpack_require__.r(ns);
    Object.defineProperty(ns, 'default', { enumerable: true, value: value });
    if (mode & 2 && typeof value != 'string') for (var key in value) __webpack_require__.d(ns, key, function (key) { return value[key]; }.bind(null, key));
    return ns;
  };

  // getDefaultExport function for compatibility with non-harmony modules
  __webpack_require__.n = function (module) {
    var getter = module && module.__esModule ?
      function getDefault() { return module['default']; } :
      function getModuleExports() { return module; };
    __webpack_require__.d(getter, 'a', getter);
    return getter;
  };

  // Object.prototype.hasOwnProperty.call
  __webpack_require__.o = function (object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

  // __webpack_public_path__
  __webpack_require__.p = "";

  // on error function for async loading
  __webpack_require__.oe = function (err) { console.error(err); throw err; };

  var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
  var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
  jsonpArray.push = webpackJsonpCallback;
  jsonpArray = jsonpArray.slice();
  for (var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
  var parentJsonpFunction = oldJsonpFunction;


  // Load entry module and return exports
  return __webpack_require__(__webpack_require__.s = "./src/index.js");
})
  ({

    "./src/b.js":
      (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"c\", function() { return c; });\nconst b = '我是b';\nconst c = 'sb';\n/* harmony default export */ __webpack_exports__[\"default\"] = (b);\n\n\n//# sourceURL=webpack:///./src/b.js?");

      }),

    "./src/index.js":
      (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _b__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./b */ \"./src/b.js\");\n\n__webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ./a */ \"./src/a.js\"))\n    .then((res) => {\n        console.log\n    })\nlet a = _b__WEBPACK_IMPORTED_MODULE_0__[\"default\"]+1;\n\n\n//# sourceURL=webpack:///./src/index.js?");

      })

  });