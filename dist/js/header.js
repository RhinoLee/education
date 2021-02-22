/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/header.js":
/*!**************************!*\
  !*** ./src/js/header.js ***!
  \**************************/
/***/ (() => {

eval(";(function() {\n  \n  const body = document.querySelector('body')\n  const burgerMenu = document.querySelector('.bugger-menu')\n  const firstLevelTitle = document.querySelectorAll('.first-title')\n  const mask = document.querySelector('.mask')\n\n  if(burgerMenu) {\n\n    const menuHandler = (e) => {\n      if(body.classList.contains('menu-open')) {\n        body.classList.remove('menu-open')\n        body.style.overflow = 'scroll'\n      }else {\n        body.classList.add('menu-open')\n        body.style.overflow = 'hidden'\n      }\n    }\n\n    const secondMenuHandler = (e) => {\n      e.preventDefault();\n      if (e.currentTarget.nextElementSibling){\n        e.currentTarget.nextElementSibling.classList.toggle('open')\n      }\n    }\n\n    firstLevelTitle.forEach( title => {\n      if (title.nextElementSibling){\n        title.addEventListener('click', secondMenuHandler)\n      }\n    })\n\n\n    burgerMenu.addEventListener('click', menuHandler)\n    mask.addEventListener('click', menuHandler)\n\n  }\n\n})();\n\n//# sourceURL=webpack://education/./src/js/header.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/header.js"]();
/******/ 	
/******/ })()
;