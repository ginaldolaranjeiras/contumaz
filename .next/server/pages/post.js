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
    className: "animate-appear",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jb250dW1hel9hc2lkZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbnR1bWF6X2hlYWQuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvcG9zdC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIl0sIm5hbWVzIjpbIkNvbnR1bWF6QXNpZGUiLCJDb250dW1hekhlYWQiLCJQb3N0Il0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQSxTQUFTQSxhQUFULEdBQXlCO0FBQ3JCLFNBQ0k7QUFBSyxNQUFFLEVBQUMsVUFBUjtBQUFtQixhQUFTLEVB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QTtBQUFBO0FBQUEsSUFEQSxDQURGLENBREYsRUFNRTtBQUFLLE1BQUUsRUFBQyxlQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0Q0FGRixDQU5GLENBeEJGLENBRkYsQ0FGRixDQURGO0FBNkNIOztBQUNjQSxtRUFBZixFOzs7Ozs7Ozs7OztBQ2xEQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxrQyIsImZpbGUiOiJwYWdlcy9wb3N0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9wb3N0LmpzXCIpO1xuIiwiZnVuY3Rpb24gQ29udHVtYXpBc2lkZSgpIHtcclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IGlkPSdzaWRlLWJhcicgY2xhc3NOYW1lPSdhbmltYXRlLXJpZ2h0Jz5cclxuICAgICAgICAgICAgPGFzaWRlPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvY29udHVtYXpfZHJhd2VyX2J1dHRvbi5zdmdcIiBhbHQ9XCJCb3TDo28gTWVudVwiIC8+XHJcbiAgICAgICAgICAgIDwvYXNpZGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250dW1hekFzaWRlOyIsImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcblxyXG5mdW5jdGlvbiBDb250dW1hekhlYWQoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgY2hhclNldD1cIlVURi04XCIvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcIj48L21ldGE+XHJcbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9jb250dW1hel9sb2dvLnN2Z1wiPjwvbGluaz5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT5Db250dW1hejwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD1cIkNvbnR1bWF6XCIga2V5PVwidGl0bGVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SGVlYm86d2dodEAzMDA7NDAwOzcwMCZmYW1pbHk9Um9ib3RvOndnaHRAMzAwOzQwMDs3MDAmZGlzcGxheT1zd2FwXCJcclxuICAgICAgICAgICAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCI+ICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvbGluaz5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgIENvbnR1bWF6SGVhZDtcclxuIiwiaW1wb3J0IENvbnR1bWF6SGVhZCBmcm9tICcuLi9jb21wb25lbnRzL2NvbnR1bWF6X2hlYWQnO1xyXG5pbXBvcnQgQ29udHVtYXpBc2lkZSBmcm9tICcuLi9jb21wb25lbnRzL2NvbnR1bWF6X2FzaWRlJztcclxuXHJcbmZ1bmN0aW9uIFBvc3QoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxDb250dW1hekhlYWQvPlxyXG4gICAgICAgIDxib2R5PlxyXG4gICAgICAgICAgPENvbnR1bWF6QXNpZGUvPlxyXG4gICAgICAgICAgPGRpdiBpZD0ncG9zdC1jb250YWluZXInIGNsYXNzTmFtZT0nYW5pbWF0ZS1hcHBlYXInPlxyXG4gICAgICAgICAgICA8aDEgaWQ9J3Bvc3QtdGl0bGUnPlxyXG4gICAgICAgICAgICAgIERlZ3JhZGHDp8OjbyBhbWJpZW50YWwgZSBleGNsdXPDo28gIHNvY2lhbFxyXG4gICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICA8aDIgaWQ9J3Bvc3Qtc3VidGl0bGUnPlxyXG4gICAgICAgICAgICAgIE9zIGltcGFjdG9zIHNvY2lvZWNvbsO0bWljb3MgZGEgZGVzdHJ1acOnw6NvIGRhIG5hdHVyZXphXHJcbiAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgIDxpbWcgaWQ9J3Bvc3QtaW1hZ2UnIHNyYz1cIi9waG90by5wbmdcIiBhbHQ9XCJJbWFnZW0gZG8gcG9zdFwiIC8+XHJcbiAgICAgICAgICAgIDxwIGlkPSdwb3N0LWRhdGUnPlxyXG4gICAgICAgICAgICAgIEJyYXNpbCwgMjAgZGUgb3V0dWJybyBkZSAyMDIwLlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxwIGlkPSdwb3N0LXRleHQnPlxyXG4gICAgICAgICAgICBPIGFzcGVjdG8gZWNvbsO0bWljby1zb2NpYWwgbWFpcyBpbXBvcnRhbnRlIGRvIGRlc2Vudm9sdmltZW50byBzdXN0ZW50w6F2ZWwgw6kgYSBkZW1vY3JhdGl6YcOnw6NvIGRvIGFjZXNzbyBhb3MgcmVjdXJzb3MgbmF0dXJhaXMgY29tbyBtZWlvcyBkZSBwcm9kdcOnw6NvLiBFbWJvcmEgYSBkZWdyYWRhw6fDo28gYW1iaWVudGFsIHRvcm5lIGluc3VzY2V0w612ZWwgYSBsb25nbyBwcmF6byBxdWFscXVlciBhdGl2aWRhZGUgZWNvbsO0bWljYSBxdWUgZGVwZW5kYSBkYXMgZm9udGVzIGRlIHJlY3Vyc29zIG7Do28gcmVub3bDoXZlaXMsIHN1YSBjb25zZXF1w6puY2lhIHNvY2lvZWNvbsO0bWljYSBpbWVkaWF0YSDDqSBhIGVsaW1pbmHDp8OjbyBkYSBhdXRvbm9taWEgZG9zIGdydXBvcyBtYWlzIHZ1bG5lcsOhdmVpcy5cclxuXHJcbk8gY2FwaXRhbCwgdHJhZGljaW9uYWxtZW50ZSwgaWdub3JhIGEgcHJlc2VydmHDp8OjbyBkb3MgcmVjdXJzb3MgbmF0dXJhaXMgZW0gYnVzY2EgZG8gbHVjcm8gdXJnZW50ZS4gQ29uc2VxdWVudGVtZW50ZSwgYSBkZWdyYWRhw6fDo28gZG9zIG1laW9zIG5hdHVyYWlzIGNvbGV0aXZvcywgaW1wb3NzaWJpbGl0YSBhIHN1YnNpc3TDqm5jaWEgYXV0w7Rub21hIGRhcXVlbGVzIHF1ZSBhbnRlcyByZXRpcmF2YW0gc2V1IHN1c3RlbnRvIGRvcyBlY29zc2lzdGVtYXMgbmF0dXJhaXMuIENvbSBlZmVpdG8sIGVzc2VzIGdydXBvcyBzb2NpYWlzIGluZ3Jlc3NhbSBubyBtb2RlbG8gZWNvbsO0bWljbyBjYXBpdGFsaXN0YSwgdmVuZGVuZG8gc3VhIGZvcsOnYSBkZSB0cmFiYWxobyBiYXJhdGEgcGFyYSBvIGFjw7ptdWxvIGRlIGNhcGl0YWwgZG9zIGrDoSBkZXRlbnRvcmVzIGRvcyBtZWlvcyBkZSBwcm9kdcOnw6NvIHRyYWRpY2lvbmFpcy5cclxuXHJcbk5vIEJyYXNpbCwgcGVyY2ViZS1zZSBhIGludGltaWRhw6fDo28gZGUgZ3J1cG9zIHF1ZSB0cmFkaWNpb25hbG1lbnRlIG9jdXBhbSBvcyBlc3Bhw6dvcyBlbSBxdWUgbyBhcHJvdmVpdGFtZW50byBkb3MgcmVjdXJzb3MgbmF0dXJhaXMgZMOhLXNlIGRlIG1hbmVpcmEgY29sZXRpdmEgZSBhdXRvc3N1c3RlbnTDoXZlbC4gSW5kw61nZW5hcywgcXVpbG9tYm9sYXMsIGNvbXVuaWRhZGVzIHRyYWRpY2lvbmFpcyBzw6NvIGRpc2NyaW1pbmFkb3MgZSB2aW9sZW50YWRvcyBwb3IgcmVwcmVzZW50YXJlbSB1bSBvYnN0w6FjdWxvIGFvIGF2YW7Dp28gZGEgZGVtYW5kYSBjYXBpdGFsaXN0YS4gRW0gZXNwZWNpYWwgYXF1aSwgZW0gcmF6w6NvIGRhcyBiYXNlcyBlY29uw7RtaWNhcyBlc3RydXR1cmFkYXMgbm8gc2V0b3IgcHJpbcOhcmlvIGRhIGVjb25vbWlhIGUgcGVsYSBwcmVzc8OjbyBkbyBhdmFuw6dvIGRhcyBmcm9udGVpcmFzIGRvIHNldG9yIGFncm9wZWN1w6FyaW8sIGVtYm9yYSBhaW5kYSBleGlzdGEgY2FtcG8gcGFyYSBvIGRlc2Vudm9sdmltZW50byBkYSBhZ3JpY3VsdHVyYSBwb3IgZ2FuaG8gZGUgcHJvZHV0aXZpZGFkZSBlIGFwcm92ZWl0YW1lbnRvIGRvcyBzb2xvcyBkaXNwb27DrXZlaXMgcXVlIHNvZnJlbSByaXNjbyBkZSBkZXNlcnRpZmljYcOnw6NvLlxyXG5cclxuSMOhIGFpbmRhLCBhIHF1ZXN0w6NvIGRhIGRpc3RyaWJ1acOnw6NvIGRvIHNvbG8sIGRlbWFuZGEgZG9zIG1vdmltZW50b3Mgc29jaWFpcyBwZWxhIHJlZm9ybWEgYWdyw6FyaWEuIE91dHJvIG1vdmltZW50byBicmFzaWxlaXJvIHF1ZSBldmlkZW5jaWEgYSBsdXRhIGRlIGNsYXNzZXMgcGVsYSBhdXRvc3N1ZmljacOqbmNpYSBwZXJhbnRlIG8gYXZhbsOnbyBkb3MgZ3JhbmRlcyBwcm9wcmlldMOhcmlvcyBkZSBjYXBpdGFsICh0ZXJyYSkgZW0gYnVzY2EgZG9zIHJlY3Vyc29zIG5hdHVyYWlzLCDDqSBvIG1vdmltZW50byBzZXJpbmd1ZWlybyBubyBBY3JlIGEgcGFydGlyIGRhIGTDqWNhZGEgZGUgNzAsIGN1amEgcHJpbmNpcGFsIGxpZGVyYW7Dp2EgZm9pIG8gc2VyaW5ndWVpcm8gQ2hpY28gTWVuZGVzLlxyXG5cclxuTm8gcGxhbm8gbXVuZGlhbCwgZXN0dWRvcyBzb2JyZSBvIGNsaW1hIHTDqm0gZGVzdGFjYWRvIG8gaW1wYWN0byBkYXMgbXVkYW7Dp2FzIGNsaW3DoXRpY2FzLCBwcm92b2NhZGFzIHBlbGEgYcOnw6NvIGhvbWVtLCBhIHBhcnRpciBkYSBSZXZvbHXDp8OjbyBJbmR1c3RyaWFsLCBzb2JyZSBhcyBwb3B1bGHDp8O1ZXMgZWNvbm9taWNhbWVudGUgbWFpcyBwb2JyZXMuIFNlZ3VuZG8gUmVsYXTDs3JpbyBkbyBCYW5jbyBNdW5kaWFsICgyMDE1KSwgYXMgbXVkYW7Dp2FzIGNsaW3DoXRpY2FzIGUgc2V1cyBkZXNkb2JyYW1lbnRvcywgcG9kZW0gZGVpeGFyIG1haXMgZGUgMTAwIG1pbGjDtWVzIGRlIHBlc3NvYXMgbmEgcG9icmV6YSBhdMOpIG8gYW5vIGRlIDIwMzAuIFBvc3RvIHF1ZSwgYSBoaXBvc3N1ZmljacOqbmNpYSBlY29uw7RtaWNhIGRlaXhhIG9zIG1haXMgcG9icmVzIHN1amVpdG9zIGFvcyBlZmVpdG9zIG5lZ2F0aXZvcyBkYSBhw6fDo28gaHVtYW5hIHNvYnJlIG8gY2xpbWEuXHJcblxyXG5TZSwgZGUgdW0gbGFkbywgYSBhdGl2aWRhZGUgZWNvbsO0bWljYSBpbnN1c3RlbnTDoXZlbCBnZXJhIGEgZXhwbG9yYcOnw6NvIGVjb27DtG1pY2EgZG9zIGdydXBvcyBhdXTDtG5vbW9zIHBvciByZXRpcmFyLWxoZXMgbyB1c3VmcnV0byBkb3MgYmVucyBjb211bnMsIGRlIG91dHJvLCBvcyByZXN1bHRhZG9zIGNhdGFzdHLDs2ZpY29zIGRhIGF0aXZpZGFkZSBlY29uw7RtaWNhIHBvbHVpZG9yYSBlIGRlZ3JhZGFudGUsIGltcGluZ2Ugc2V1cyByZWZsZXhvcyBtYWlzIHNldmVyb3Mgc29icmUgZXNzZXMgYW50ZXJpb3JtZW50ZSBleHBsb3JhZG9zLiBQb3J0YW50bywgb3MgcmVmbGV4b3MgZG8gZGVzZW52b2x2aW1lbnRvIGVtIGJhc2VzIGluc3VzdGVudMOhdmVpcyBhdW1lbnRhIGEgZGVzaWd1YWxkYWRlcywgcG9ycXVhbnRvLCBnZXJhIGVmZWl0b3MgbmVnYXRpdm9zIMOgcyBtaW5vcmlhcyBzb2NpYWlzIG5hIGVudHJhZGEgKGlucHV0KSBlIG5hIHNhw61kYSAob3V0cHV0KSBkbyBtZXNtbyBzaXN0ZW1hLlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9J3Bvc3QtYXV0aG9yJz5cclxuICAgICAgICAgICAgICA8ZGl2IGlkPSdhdXRob3ItaW1hZ2UnPlxyXG4gICAgICAgICAgICAgICAgPGNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPScvZ2luby5wbmcnIGFsdD0nSW1hZ2VtIGRlIHBlcmZpbCcvPlxyXG4gICAgICAgICAgICAgICAgPC9jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBpZD0nYXV0aG9yLWRldGFpbCc+XHJcbiAgICAgICAgICAgICAgICA8aDM+R2luYWxkbyBMYXJhbmplaXJhcyBKcjwvaDM+XHJcbiAgICAgICAgICAgICAgICA8aDQ+RGVzZW52b2x2ZWRvciBkZSBzb2Z0d2FyZSBlIGFkdm9nYWRvPC9oND5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9ib2R5PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgUG9zdDsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==