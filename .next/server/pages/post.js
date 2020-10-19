module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/post.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/contumaz_aside.js":
/*!**************************************!*\
  !*** ./components/contumaz_aside.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Gino\\Projects\\ctz\\components\\contumaz_aside.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ContumazAside() {
  return __jsx("div", {
    id: "side-bar",
    className: "animate-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 9
    }
  }, __jsx("aside", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "/contumaz_drawer_button.svg",
    alt: "Bot\xE3o Menu",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 17
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (ContumazAside);

/***/ }),

/***/ "./components/contumaz_head.js":
/*!*************************************!*\
  !*** ./components/contumaz_head.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Gino\\Projects\\ctz\\components\\contumaz_head.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function ContumazHead() {
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }
  }, __jsx("meta", {
    charSet: "UTF-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 17
    }
  }), __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 17
    }
  }), __jsx("link", {
    rel: "icon",
    href: "/contumaz_logo.svg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 17
    }
  }), __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 17
    }
  }, "Contumaz"), __jsx("meta", {
    property: "og:title",
    content: "Contumaz",
    key: "title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 17
    }
  }), __jsx("link", {
    href: "https://fonts.googleapis.com/css2?family=Heebo:wght@300;400;700&family=Roboto:wght@300;400;700&display=swap",
    rel: "stylesheet",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 17
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (ContumazHead);

/***/ }),

/***/ "./pages/post.js":
/*!***********************!*\
  !*** ./pages/post.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_contumaz_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/contumaz_head */ "./components/contumaz_head.js");
/* harmony import */ var _components_contumaz_aside__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/contumaz_aside */ "./components/contumaz_aside.js");
var _jsxFileName = "C:\\Users\\Gino\\Projects\\ctz\\pages\\post.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function Post() {
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }, __jsx(_components_contumaz_head__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }), __jsx("body", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx(_components_contumaz_aside__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 11
    }
  }), __jsx("div", {
    id: "post-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 11
    }
  }, __jsx("h1", {
    id: "post-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, "Degrada\xE7\xE3o ambiental e exclus\xE3o  social"), __jsx("h2", {
    id: "post-subtitle",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }, "Os impactos socioecon\xF4micos da destrui\xE7\xE3o da natureza"), __jsx("img", {
    id: "post-image",
    src: "/photo.png",
    alt: "Imagem do post",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }), __jsx("p", {
    id: "post-date",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }, "Brasil, 20 de outubro de 2020."), __jsx("p", {
    id: "post-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, "O aspecto econ\xF4mico-social mais importante do desenvolvimento sustent\xE1vel \xE9 a democratiza\xE7\xE3o do acesso aos recursos naturais como meios de produ\xE7\xE3o. Embora a degrada\xE7\xE3o ambiental torne insuscet\xEDvel a longo prazo qualquer atividade econ\xF4mica que dependa das fontes de recursos n\xE3o renov\xE1veis, sua consequ\xEAncia socioecon\xF4mica imediata \xE9 a elimina\xE7\xE3o da autonomia dos grupos mais vulner\xE1veis. O capital, tradicionalmente, ignora a preserva\xE7\xE3o dos recursos naturais em busca do lucro urgente. Consequentemente, a degrada\xE7\xE3o dos meios naturais coletivos, impossibilita a subsist\xEAncia aut\xF4noma daqueles que antes retiravam seu sustento dos ecossistemas naturais. Com efeito, esses grupos sociais ingressam no modelo econ\xF4mico capitalista, vendendo sua for\xE7a de trabalho barata para o ac\xFAmulo de capital dos j\xE1 detentores dos meios de produ\xE7\xE3o tradicionais. No Brasil, percebe-se a intimida\xE7\xE3o de grupos que tradicionalmente ocupam os espa\xE7os em que o aproveitamento dos recursos naturais d\xE1-se de maneira coletiva e autossustent\xE1vel. Ind\xEDgenas, quilombolas, comunidades tradicionais s\xE3o discriminados e violentados por representarem um obst\xE1culo ao avan\xE7o da demanda capitalista. Em especial aqui, em raz\xE3o das bases econ\xF4micas estruturadas no setor prim\xE1rio da economia e pela press\xE3o do avan\xE7o das fronteiras do setor agropecu\xE1rio, embora ainda exista campo para o desenvolvimento da agricultura por ganho de produtividade e aproveitamento dos solos dispon\xEDveis que sofrem risco de desertifica\xE7\xE3o. H\xE1 ainda, a quest\xE3o da distribui\xE7\xE3o do solo, demanda dos movimentos sociais pela reforma agr\xE1ria. Outro movimento brasileiro que evidencia a luta de classes pela autossufici\xEAncia perante o avan\xE7o dos grandes propriet\xE1rios de capital (terra) em busca dos recursos naturais, \xE9 o movimento seringueiro no Acre a partir da d\xE9cada de 70, cuja principal lideran\xE7a foi o seringueiro Chico Mendes. No plano mundial, estudos sobre o clima t\xEAm destacado o impacto das mudan\xE7as clim\xE1ticas, provocadas pela a\xE7\xE3o homem, a partir da Revolu\xE7\xE3o Industrial, sobre as popula\xE7\xF5es economicamente mais pobres. Segundo Relat\xF3rio do Banco Mundial (2015), as mudan\xE7as clim\xE1ticas e seus desdobramentos, podem deixar mais de 100 milh\xF5es de pessoas na pobreza at\xE9 o ano de 2030. Posto que, a hipossufici\xEAncia econ\xF4mica deixa os mais pobres sujeitos aos efeitos negativos da a\xE7\xE3o humana sobre o clima. Se, de um lado, a atividade econ\xF4mica insustent\xE1vel gera a explora\xE7\xE3o econ\xF4mica dos grupos aut\xF4nomos por retirar-lhes o usufruto dos bens comuns, de outro, os resultados catastr\xF3ficos da atividade econ\xF4mica poluidora e degradante, impinge seus reflexos mais severos sobre esses anteriormente explorados. Portanto, os reflexos do desenvolvimento em bases insustent\xE1veis aumenta a desigualdades, porquanto, gera efeitos negativos \xE0s minorias sociais na entrada (input) e na sa\xEDda (output) do mesmo sistema."), __jsx("div", {
    id: "post-author",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, __jsx("div", {
    id: "author-image",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 15
    }
  }, __jsx("container", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "/gino.png",
    alt: "Imagem de perfil",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 17
    }
  }))), __jsx("div", {
    id: "author-detail",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 15
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 17
    }
  }, "Ginaldo Laranjeiras Jr"), __jsx("h4", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 17
    }
  }, "Desenvolvedor de software e advogado"))))));
}

/* harmony default export */ __webpack_exports__["default"] = (Post);

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jb250dW1hel9hc2lkZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbnR1bWF6X2hlYWQuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvcG9zdC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIl0sIm5hbWVzIjpbIkNvbnR1bWF6QXNpZGUiLCJDb250dW1hekhlYWQiLCJQb3N0Il0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQSxTQUFTQSxhQUFULEdBQXlCO0FBQ3JCLFNBQ0k7QUFBSyxNQUFFLEVBQUMsVUFBUjtBQUFtQixhQUFTLEVB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QURGLEVBTUU7QUFBSyxNQUFFLEVBQUMsZUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4QkFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNENBRkYsQ0FORixDQXhCRixDQUZGLENBRkYsQ0FERjtBQTZDSDs7QUFDY0EsbUVBQWYsRTs7Ozs7Ozs7Ozs7QUNsREEsc0M7Ozs7Ozs7Ozs7O0FDQUEsa0MiLCJmaWxlIjoicGFnZXMvcG9zdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvcG9zdC5qc1wiKTtcbiIsImZ1bmN0aW9uIENvbnR1bWF6QXNpZGUoKSB7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBpZD0nc2lkZS1iYXInIGNsYXNzTmFtZT0nYW5pbWF0ZS1yaWdodCc+XHJcbiAgICAgICAgICAgIDxhc2lkZT5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2NvbnR1bWF6X2RyYXdlcl9idXR0b24uc3ZnXCIgYWx0PVwiQm90w6NvIE1lbnVcIiAvPlxyXG4gICAgICAgICAgICA8L2FzaWRlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udHVtYXpBc2lkZTsiLCJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5cclxuZnVuY3Rpb24gQ29udHVtYXpIZWFkKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJVVEYtOFwiLz5cclxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXCI+PC9tZXRhPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvY29udHVtYXpfbG9nby5zdmdcIj48L2xpbms+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+Q29udHVtYXo8L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9XCJDb250dW1helwiIGtleT1cInRpdGxlXCIgLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUhlZWJvOndnaHRAMzAwOzQwMDs3MDAmZmFtaWx5PVJvYm90bzp3Z2h0QDMwMDs0MDA7NzAwJmRpc3BsYXk9c3dhcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiPiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2xpbms+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0ICBDb250dW1hekhlYWQ7XHJcbiIsImltcG9ydCBDb250dW1hekhlYWQgZnJvbSAnLi4vY29tcG9uZW50cy9jb250dW1hel9oZWFkJztcclxuaW1wb3J0IENvbnR1bWF6QXNpZGUgZnJvbSAnLi4vY29tcG9uZW50cy9jb250dW1hel9hc2lkZSc7XHJcblxyXG5mdW5jdGlvbiBQb3N0KCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8Q29udHVtYXpIZWFkLz5cclxuICAgICAgICA8Ym9keT5cclxuICAgICAgICAgIDxDb250dW1hekFzaWRlLz5cclxuICAgICAgICAgIDxkaXYgaWQ9J3Bvc3QtY29udGFpbmVyJz5cclxuICAgICAgICAgICAgPGgxIGlkPSdwb3N0LXRpdGxlJz5cclxuICAgICAgICAgICAgICBEZWdyYWRhw6fDo28gYW1iaWVudGFsIGUgZXhjbHVzw6NvICBzb2NpYWxcclxuICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgPGgyIGlkPSdwb3N0LXN1YnRpdGxlJz5cclxuICAgICAgICAgICAgICBPcyBpbXBhY3RvcyBzb2Npb2Vjb27DtG1pY29zIGRhIGRlc3RydWnDp8OjbyBkYSBuYXR1cmV6YVxyXG4gICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICA8aW1nIGlkPSdwb3N0LWltYWdlJyBzcmM9XCIvcGhvdG8ucG5nXCIgYWx0PVwiSW1hZ2VtIGRvIHBvc3RcIiAvPlxyXG4gICAgICAgICAgICA8cCBpZD0ncG9zdC1kYXRlJz5cclxuICAgICAgICAgICAgICBCcmFzaWwsIDIwIGRlIG91dHVicm8gZGUgMjAyMC5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8cCBpZD0ncG9zdC10ZXh0Jz5cclxuICAgICAgICAgICAgTyBhc3BlY3RvIGVjb27DtG1pY28tc29jaWFsIG1haXMgaW1wb3J0YW50ZSBkbyBkZXNlbnZvbHZpbWVudG8gc3VzdGVudMOhdmVsIMOpIGEgZGVtb2NyYXRpemHDp8OjbyBkbyBhY2Vzc28gYW9zIHJlY3Vyc29zIG5hdHVyYWlzIGNvbW8gbWVpb3MgZGUgcHJvZHXDp8Ojby4gRW1ib3JhIGEgZGVncmFkYcOnw6NvIGFtYmllbnRhbCB0b3JuZSBpbnN1c2NldMOtdmVsIGEgbG9uZ28gcHJhem8gcXVhbHF1ZXIgYXRpdmlkYWRlIGVjb27DtG1pY2EgcXVlIGRlcGVuZGEgZGFzIGZvbnRlcyBkZSByZWN1cnNvcyBuw6NvIHJlbm92w6F2ZWlzLCBzdWEgY29uc2VxdcOqbmNpYSBzb2Npb2Vjb27DtG1pY2EgaW1lZGlhdGEgw6kgYSBlbGltaW5hw6fDo28gZGEgYXV0b25vbWlhIGRvcyBncnVwb3MgbWFpcyB2dWxuZXLDoXZlaXMuXHJcblxyXG5PIGNhcGl0YWwsIHRyYWRpY2lvbmFsbWVudGUsIGlnbm9yYSBhIHByZXNlcnZhw6fDo28gZG9zIHJlY3Vyc29zIG5hdHVyYWlzIGVtIGJ1c2NhIGRvIGx1Y3JvIHVyZ2VudGUuIENvbnNlcXVlbnRlbWVudGUsIGEgZGVncmFkYcOnw6NvIGRvcyBtZWlvcyBuYXR1cmFpcyBjb2xldGl2b3MsIGltcG9zc2liaWxpdGEgYSBzdWJzaXN0w6puY2lhIGF1dMO0bm9tYSBkYXF1ZWxlcyBxdWUgYW50ZXMgcmV0aXJhdmFtIHNldSBzdXN0ZW50byBkb3MgZWNvc3Npc3RlbWFzIG5hdHVyYWlzLiBDb20gZWZlaXRvLCBlc3NlcyBncnVwb3Mgc29jaWFpcyBpbmdyZXNzYW0gbm8gbW9kZWxvIGVjb27DtG1pY28gY2FwaXRhbGlzdGEsIHZlbmRlbmRvIHN1YSBmb3LDp2EgZGUgdHJhYmFsaG8gYmFyYXRhIHBhcmEgbyBhY8O6bXVsbyBkZSBjYXBpdGFsIGRvcyBqw6EgZGV0ZW50b3JlcyBkb3MgbWVpb3MgZGUgcHJvZHXDp8OjbyB0cmFkaWNpb25haXMuXHJcblxyXG5ObyBCcmFzaWwsIHBlcmNlYmUtc2UgYSBpbnRpbWlkYcOnw6NvIGRlIGdydXBvcyBxdWUgdHJhZGljaW9uYWxtZW50ZSBvY3VwYW0gb3MgZXNwYcOnb3MgZW0gcXVlIG8gYXByb3ZlaXRhbWVudG8gZG9zIHJlY3Vyc29zIG5hdHVyYWlzIGTDoS1zZSBkZSBtYW5laXJhIGNvbGV0aXZhIGUgYXV0b3NzdXN0ZW50w6F2ZWwuIEluZMOtZ2VuYXMsIHF1aWxvbWJvbGFzLCBjb211bmlkYWRlcyB0cmFkaWNpb25haXMgc8OjbyBkaXNjcmltaW5hZG9zIGUgdmlvbGVudGFkb3MgcG9yIHJlcHJlc2VudGFyZW0gdW0gb2JzdMOhY3VsbyBhbyBhdmFuw6dvIGRhIGRlbWFuZGEgY2FwaXRhbGlzdGEuIEVtIGVzcGVjaWFsIGFxdWksIGVtIHJhesOjbyBkYXMgYmFzZXMgZWNvbsO0bWljYXMgZXN0cnV0dXJhZGFzIG5vIHNldG9yIHByaW3DoXJpbyBkYSBlY29ub21pYSBlIHBlbGEgcHJlc3PDo28gZG8gYXZhbsOnbyBkYXMgZnJvbnRlaXJhcyBkbyBzZXRvciBhZ3JvcGVjdcOhcmlvLCBlbWJvcmEgYWluZGEgZXhpc3RhIGNhbXBvIHBhcmEgbyBkZXNlbnZvbHZpbWVudG8gZGEgYWdyaWN1bHR1cmEgcG9yIGdhbmhvIGRlIHByb2R1dGl2aWRhZGUgZSBhcHJvdmVpdGFtZW50byBkb3Mgc29sb3MgZGlzcG9uw612ZWlzIHF1ZSBzb2ZyZW0gcmlzY28gZGUgZGVzZXJ0aWZpY2HDp8Ojby5cclxuXHJcbkjDoSBhaW5kYSwgYSBxdWVzdMOjbyBkYSBkaXN0cmlidWnDp8OjbyBkbyBzb2xvLCBkZW1hbmRhIGRvcyBtb3ZpbWVudG9zIHNvY2lhaXMgcGVsYSByZWZvcm1hIGFncsOhcmlhLiBPdXRybyBtb3ZpbWVudG8gYnJhc2lsZWlybyBxdWUgZXZpZGVuY2lhIGEgbHV0YSBkZSBjbGFzc2VzIHBlbGEgYXV0b3NzdWZpY2nDqm5jaWEgcGVyYW50ZSBvIGF2YW7Dp28gZG9zIGdyYW5kZXMgcHJvcHJpZXTDoXJpb3MgZGUgY2FwaXRhbCAodGVycmEpIGVtIGJ1c2NhIGRvcyByZWN1cnNvcyBuYXR1cmFpcywgw6kgbyBtb3ZpbWVudG8gc2VyaW5ndWVpcm8gbm8gQWNyZSBhIHBhcnRpciBkYSBkw6ljYWRhIGRlIDcwLCBjdWphIHByaW5jaXBhbCBsaWRlcmFuw6dhIGZvaSBvIHNlcmluZ3VlaXJvIENoaWNvIE1lbmRlcy5cclxuXHJcbk5vIHBsYW5vIG11bmRpYWwsIGVzdHVkb3Mgc29icmUgbyBjbGltYSB0w6ptIGRlc3RhY2FkbyBvIGltcGFjdG8gZGFzIG11ZGFuw6dhcyBjbGltw6F0aWNhcywgcHJvdm9jYWRhcyBwZWxhIGHDp8OjbyBob21lbSwgYSBwYXJ0aXIgZGEgUmV2b2x1w6fDo28gSW5kdXN0cmlhbCwgc29icmUgYXMgcG9wdWxhw6fDtWVzIGVjb25vbWljYW1lbnRlIG1haXMgcG9icmVzLiBTZWd1bmRvIFJlbGF0w7NyaW8gZG8gQmFuY28gTXVuZGlhbCAoMjAxNSksIGFzIG11ZGFuw6dhcyBjbGltw6F0aWNhcyBlIHNldXMgZGVzZG9icmFtZW50b3MsIHBvZGVtIGRlaXhhciBtYWlzIGRlIDEwMCBtaWxow7VlcyBkZSBwZXNzb2FzIG5hIHBvYnJlemEgYXTDqSBvIGFubyBkZSAyMDMwLiBQb3N0byBxdWUsIGEgaGlwb3NzdWZpY2nDqm5jaWEgZWNvbsO0bWljYSBkZWl4YSBvcyBtYWlzIHBvYnJlcyBzdWplaXRvcyBhb3MgZWZlaXRvcyBuZWdhdGl2b3MgZGEgYcOnw6NvIGh1bWFuYSBzb2JyZSBvIGNsaW1hLlxyXG5cclxuU2UsIGRlIHVtIGxhZG8sIGEgYXRpdmlkYWRlIGVjb27DtG1pY2EgaW5zdXN0ZW50w6F2ZWwgZ2VyYSBhIGV4cGxvcmHDp8OjbyBlY29uw7RtaWNhIGRvcyBncnVwb3MgYXV0w7Rub21vcyBwb3IgcmV0aXJhci1saGVzIG8gdXN1ZnJ1dG8gZG9zIGJlbnMgY29tdW5zLCBkZSBvdXRybywgb3MgcmVzdWx0YWRvcyBjYXRhc3Ryw7NmaWNvcyBkYSBhdGl2aWRhZGUgZWNvbsO0bWljYSBwb2x1aWRvcmEgZSBkZWdyYWRhbnRlLCBpbXBpbmdlIHNldXMgcmVmbGV4b3MgbWFpcyBzZXZlcm9zIHNvYnJlIGVzc2VzIGFudGVyaW9ybWVudGUgZXhwbG9yYWRvcy4gUG9ydGFudG8sIG9zIHJlZmxleG9zIGRvIGRlc2Vudm9sdmltZW50byBlbSBiYXNlcyBpbnN1c3RlbnTDoXZlaXMgYXVtZW50YSBhIGRlc2lndWFsZGFkZXMsIHBvcnF1YW50bywgZ2VyYSBlZmVpdG9zIG5lZ2F0aXZvcyDDoHMgbWlub3JpYXMgc29jaWFpcyBuYSBlbnRyYWRhIChpbnB1dCkgZSBuYSBzYcOtZGEgKG91dHB1dCkgZG8gbWVzbW8gc2lzdGVtYS5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8ZGl2IGlkPSdwb3N0LWF1dGhvcic+XHJcbiAgICAgICAgICAgICAgPGRpdiBpZD0nYXV0aG9yLWltYWdlJz5cclxuICAgICAgICAgICAgICAgIDxjb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz0nL2dpbm8ucG5nJyBhbHQ9J0ltYWdlbSBkZSBwZXJmaWwnLz5cclxuICAgICAgICAgICAgICAgIDwvY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgaWQ9J2F1dGhvci1kZXRhaWwnPlxyXG4gICAgICAgICAgICAgICAgPGgzPkdpbmFsZG8gTGFyYW5qZWlyYXMgSnI8L2gzPlxyXG4gICAgICAgICAgICAgICAgPGg0PkRlc2Vudm9sdmVkb3IgZGUgc29mdHdhcmUgZSBhZHZvZ2FkbzwvaDQ+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvYm9keT5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFBvc3Q7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=