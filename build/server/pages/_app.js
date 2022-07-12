/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./SiteContext.jsx":
/*!*************************!*\
  !*** ./SiteContext.jsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SiteContext\": () => (/* binding */ SiteContext),\n/* harmony export */   \"useSiteContext\": () => (/* binding */ useSiteContext)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst Context = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n    scrollY: \"initial\"\n});\nfunction SiteContext({ children  }) {\n    const { 0: scrollY , 1: setScrollY  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"initial\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (scrollY === \"initial\") {\n            setScrollY(window.scrollY);\n        }\n    }, [\n        scrollY\n    ]);\n    const handleScroll = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{\n        setScrollY(window.scrollY);\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        document.addEventListener(\"scroll\", handleScroll, {\n            passive: true\n        });\n        return ()=>{\n            document.removeEventListener(\"scroll\", handleScroll);\n        };\n    }, [\n        handleScroll\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Context.Provider, {\n        value: scrollY,\n        children: children\n    }, void 0, false, {\n        fileName: \"H:\\\\Informatica\\\\Progetti Personali\\\\React\\\\roblox-portfolio\\\\SiteContext.jsx\",\n        lineNumber: 32,\n        columnNumber: 12\n    }, this);\n}\nfunction useSiteContext() {\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(Context);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9TaXRlQ29udGV4dC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFNZTtBQUVmLE1BQU1LLE9BQU8saUJBQUdMLG9EQUFhLENBQUM7SUFBRU0sT0FBTyxFQUFFLFNBQVM7Q0FBRSxDQUFDO0FBRTlDLFNBQVNDLFdBQVcsQ0FBQyxFQUFFQyxRQUFRLEdBQUUsRUFBRTtJQUN0QyxNQUFNLEtBQUNGLE9BQU8sTUFBRUcsVUFBVSxNQUFJTCwrQ0FBUSxDQUFDLFNBQVMsQ0FBQztJQUVqREQsZ0RBQVMsQ0FBQyxJQUFNO1FBQ1osSUFBSUcsT0FBTyxLQUFLLFNBQVMsRUFBRTtZQUN2QkcsVUFBVSxDQUFDQyxNQUFNLENBQUNKLE9BQU8sQ0FBQyxDQUFDO1NBQzlCO0tBQ0osRUFBRTtRQUFDQSxPQUFPO0tBQUMsQ0FBQyxDQUFDO0lBRWQsTUFBTUssWUFBWSxHQUFHVixrREFBVyxDQUFDLElBQU07UUFDbkNRLFVBQVUsQ0FBQ0MsTUFBTSxDQUFDSixPQUFPLENBQUMsQ0FBQztLQUM5QixDQUFDO0lBRUZILGdEQUFTLENBQUMsSUFBTTtRQUNaUyxRQUFRLENBQUNDLGdCQUFnQixDQUFDLFFBQVEsRUFBRUYsWUFBWSxFQUFFO1lBQUVHLE9BQU8sRUFBRSxJQUFJO1NBQUUsQ0FBQyxDQUFDO1FBRXJFLE9BQU8sSUFBTTtZQUNURixRQUFRLENBQUNHLG1CQUFtQixDQUFDLFFBQVEsRUFBRUosWUFBWSxDQUFDLENBQUM7U0FDeEQsQ0FBQztLQUNMLEVBQUU7UUFBQ0EsWUFBWTtLQUFDLENBQUMsQ0FBQztJQUVuQixxQkFBTyw4REFBQ04sT0FBTyxDQUFDVyxRQUFRO1FBQUNDLEtBQUssRUFBRVgsT0FBTztrQkFBR0UsUUFBUTs7Ozs7WUFBb0IsQ0FBQztDQUMxRTtBQUVNLFNBQVNVLGNBQWMsR0FBRztJQUM3QixPQUFPaEIsaURBQVUsQ0FBQ0csT0FBTyxDQUFDLENBQUM7Q0FDOUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yb2Jsb3gtcG9ydGZvbGlvLy4vU2l0ZUNvbnRleHQuanN4P2E5MDEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICAgIGNyZWF0ZUNvbnRleHQsXHJcbiAgICB1c2VDYWxsYmFjayxcclxuICAgIHVzZUNvbnRleHQsXHJcbiAgICB1c2VFZmZlY3QsXHJcbiAgICB1c2VTdGF0ZSxcclxufSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IENvbnRleHQgPSBjcmVhdGVDb250ZXh0KHsgc2Nyb2xsWTogXCJpbml0aWFsXCIgfSk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU2l0ZUNvbnRleHQoeyBjaGlsZHJlbiB9KSB7XHJcbiAgICBjb25zdCBbc2Nyb2xsWSwgc2V0U2Nyb2xsWV0gPSB1c2VTdGF0ZShcImluaXRpYWxcIik7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoc2Nyb2xsWSA9PT0gXCJpbml0aWFsXCIpIHtcclxuICAgICAgICAgICAgc2V0U2Nyb2xsWSh3aW5kb3cuc2Nyb2xsWSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3Njcm9sbFldKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTY3JvbGwgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgc2V0U2Nyb2xsWSh3aW5kb3cuc2Nyb2xsWSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsLCB7IHBhc3NpdmU6IHRydWUgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsKTtcclxuICAgICAgICB9O1xyXG4gICAgfSwgW2hhbmRsZVNjcm9sbF0pO1xyXG5cclxuICAgIHJldHVybiA8Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17c2Nyb2xsWX0+e2NoaWxkcmVufTwvQ29udGV4dC5Qcm92aWRlcj47XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VTaXRlQ29udGV4dCgpIHtcclxuICAgIHJldHVybiB1c2VDb250ZXh0KENvbnRleHQpO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlQ2FsbGJhY2siLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJDb250ZXh0Iiwic2Nyb2xsWSIsIlNpdGVDb250ZXh0IiwiY2hpbGRyZW4iLCJzZXRTY3JvbGxZIiwid2luZG93IiwiaGFuZGxlU2Nyb2xsIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicGFzc2l2ZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJQcm92aWRlciIsInZhbHVlIiwidXNlU2l0ZUNvbnRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./SiteContext.jsx\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _SiteContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../SiteContext */ \"./SiteContext.jsx\");\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SiteContext__WEBPACK_IMPORTED_MODULE_2__.SiteContext, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"H:\\\\Informatica\\\\Progetti Personali\\\\React\\\\roblox-portfolio\\\\pages\\\\_app.js\",\n            lineNumber: 7,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"H:\\\\Informatica\\\\Progetti Personali\\\\React\\\\roblox-portfolio\\\\pages\\\\_app.js\",\n        lineNumber: 6,\n        columnNumber: 9\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQStCO0FBQ2M7QUFFN0MsU0FBU0MsS0FBSyxDQUFDLEVBQUVDLFNBQVMsR0FBRUMsU0FBUyxHQUFFLEVBQUU7SUFDckMscUJBQ0ksOERBQUNILHFEQUFXO2tCQUNSLDRFQUFDRSxTQUFTO1lBQUUsR0FBR0MsU0FBUzs7Ozs7Z0JBQUk7Ozs7O1lBQ2xCLENBQ2hCO0NBQ0w7QUFFRCxpRUFBZUYsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcm9ibG94LXBvcnRmb2xpby8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcbmltcG9ydCB7IFNpdGVDb250ZXh0IH0gZnJvbSBcIi4uL1NpdGVDb250ZXh0XCI7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxTaXRlQ29udGV4dD5cbiAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgPC9TaXRlQ29udGV4dD5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcbiJdLCJuYW1lcyI6WyJTaXRlQ29udGV4dCIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();