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

/***/ "./src/js/slider.js":
/*!**************************!*\
  !*** ./src/js/slider.js ***!
  \**************************/
/***/ (() => {

eval(";(function() {\n  let bannerSwiper = new Swiper('.main-slider .swiper-container', {\n    // autoplay: {\n    //   delay: 5000,\n    // },\n    speed: 1500,\n    loop: true,\n    pagination: {\n      el: '.swiper-pagination',\n      clickable: true\n    },\n  })\n\n  let coursesSwiper = new Swiper('#section-courses .swiper-container', {\n    // autoplay: {\n    //   delay: 5000,\n    // },\n    speed: 1500,\n    loop: true,\n    pagination: {\n      el: '.swiper-pagination',\n      clickable: true\n    },\n    breakpoints: {\n      // when window width is >= 320px\n      320: {\n        slidesPerView: 1,\n      }, \n      720: {\n        slidesPerView: 3,\n      }, \n    }\n  })\n\n  let clientSwiper = new Swiper('#section-client-mobile .swiper-container', {\n    // autoplay: {\n    //   delay: 5000,\n    // },\n    speed: 1500,\n    loop: true,\n    pagination: {\n      el: '.swiper-pagination',\n      clickable: true\n    }\n  })\n\n  let blogSwiper = new Swiper('#section-blog .swiper-container', {\n    // autoplay: {\n    //   delay: 5000,\n    // },\n    slidesPerView: 1.2,\n    centeredSlides: true,\n    speed: 1500,\n    loop: true,\n    pagination: {\n      el: '.swiper-pagination',\n      clickable: true\n    }\n  })\n\n})();\n\n//# sourceURL=webpack://education/./src/js/slider.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/slider.js"]();
/******/ 	
/******/ })()
;