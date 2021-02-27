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

eval(";(function() {\n  \n  const body = document.querySelector('body')\n  const header = document.querySelector('header.main-header')\n  const burgerMenu = document.querySelector('.bugger-menu')\n  const firstLevelTitle = document.querySelectorAll('.first-title')\n  const firstLevelList = document.querySelectorAll('ul.first-level > li')\n  const mask = document.querySelector('.mask')\n  let nowWidth = window.innerWidth\n\n  const setWindowWidth = () => {\n    nowWidth = window.innerWidth\n  }\n\n  const menuHandler = (e) => {\n    if(body.classList.contains('menu-open')) {\n      body.classList.remove('menu-open')\n      body.style.overflow = 'scroll'\n    }else {\n      body.classList.add('menu-open')\n      body.style.overflow = 'hidden'\n    }\n  }\n\n  const mobileSecondMenu = (e) => {\n    if(e.currentTarget.nextElementSibling.classList) {\n      e.preventDefault();\n      e.currentTarget.nextElementSibling.classList.toggle('open')\n    }\n  }\n\n  const desktopSecondMenu = (e) => {\n    \n    if(e.type === \"mouseenter\") {\n      e.currentTarget.querySelector(\"ul.second-level\").classList.add('open-animate')\n    }else{\n      e.currentTarget.querySelector(\"ul.second-level\").classList.remove('open-animate')\n    }\n\n  }\n\n  const setHeaderBackground = (e) => {\n    console.log(window.pageYOffset);\n    if(window.pageYOffset > 10) {\n      header.classList.add('bg')\n    }else {\n      header.classList.remove('bg')\n    }\n  }\n\n  firstLevelTitle.forEach( title => {\n    if (title.nextElementSibling){\n      title.addEventListener('click', mobileSecondMenu)\n    }\n  })\n\n  firstLevelList.forEach( list => {\n\n    if( list.querySelector(\"ul.second-level\")){\n      list.addEventListener('mouseenter', desktopSecondMenu)\n      list.addEventListener('mouseleave', desktopSecondMenu)\n    }\n\n  })\n\n  \n  burgerMenu.addEventListener('click', menuHandler)\n  mask.addEventListener('click', menuHandler)\n\n  window.addEventListener('scroll', setHeaderBackground)\n  window.addEventListener('resize', setWindowWidth)\n\n})();\n\n//# sourceURL=webpack://education/./src/js/header.js?");

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