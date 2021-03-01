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

/***/ "./src/js/animation.js":
/*!*****************************!*\
  !*** ./src/js/animation.js ***!
  \*****************************/
/***/ (() => {

eval(";(function() {\n  \n  const programSectionBoxes = document.querySelectorAll('#section-programs .box')\n  const animateArr = [\n    {\n      name: \"#section-features .col-xs-12\",\n      active: \"fade-fadeDown\",\n      reverse: false\n    }, \n    {\n      name: \"#section-education\",\n      active: \"fade-fadeDown\",\n      reverse: false\n    },\n    {\n      name: \"#section-teachers .col-xs-6\",\n      active: \"fade-fadeDown\",\n      reverse: false\n    },\n  ]\n\n  const rotateHandler = e => {\n    let {offsetX, offsetY, currentTarget} = e\n    \n    if(e.target !== currentTarget) {\n      offsetX += e.target.parentElement.offsetLeft\n      offsetY += e.target.parentElement.offsetTop\n    } \n\n    let xRotate = Math.floor((offsetY / currentTarget.offsetWidth) * 20) * 2 - 20\n    let yRotate = Math.floor((offsetX / currentTarget.offsetHeight) * 20) * 2 - 20\n\n    currentTarget.style.transform = `perspective(500px) scale(1.03) rotateX(${xRotate * -1}deg) rotateY(${yRotate}deg)`\n\n  }\n\n  const removeRotateHandler = e => {\n    e.currentTarget.style.transform = `perspective(500px) scale(1) rotateX(0) rotateY(0)`\n  }\n\n  const scrollHandler = (animateArr) => {\n    let headerHeight = document.querySelector('.header-container').offsetHeight\n    let scrollDistance = document.documentElement.scrollTop\n    let targetTop = 0\n    let windowBottom = 0\n    let targets = null\n    animateArr.forEach( section => {\n      targets = document.querySelectorAll(section.name)\n\n      targets.forEach( target => {\n        targetTop = (target.offsetTop - headerHeight) - (target.offsetHeight) - 200\n        windowBottom = targetTop + target.offsetHeight\n\n        if(scrollDistance > targetTop && scrollDistance < windowBottom) {\n          target.classList.add('active-start')\n        }else {\n          target.classList.add(section.active)\n          if (section.reverse) {\n            target.classList.remove('active-start')\n          }\n        }\n        \n        \n      })\n    })\n  }\n\n\n\n\n  programSectionBoxes.forEach( (box) => {\n    box.addEventListener('mousemove', rotateHandler)\n    box.addEventListener('mouseout', removeRotateHandler)\n  })\n\n  window.addEventListener('scroll', function(e){\n    scrollHandler(animateArr)\n  })\n\n  scrollHandler(animateArr)\n})();\n\n//# sourceURL=webpack://education/./src/js/animation.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/animation.js"]();
/******/ 	
/******/ })()
;