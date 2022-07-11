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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SiteContext\": () => (/* binding */ SiteContext),\n/* harmony export */   \"useSiteContext\": () => (/* binding */ useSiteContext)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst Context = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n    scrollY: 0\n});\nfunction SiteContext({ children  }) {\n    const { 0: scrollY , 1: setScrollY  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const handleScroll = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{\n        setScrollY(window.scrollY);\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        document.addEventListener(\"scroll\", handleScroll, {\n            passive: true\n        });\n        return ()=>{\n            document.removeEventListener(\"scroll\", handleScroll);\n        };\n    }, [\n        handleScroll\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Context.Provider, {\n        value: scrollY,\n        children: children\n    }, void 0, false, {\n        fileName: \"H:\\\\Informatica\\\\Progetti Personali\\\\React\\\\roblox-portfolio\\\\SiteContext.jsx\",\n        lineNumber: 26,\n        columnNumber: 12\n    }, this);\n}\nfunction useSiteContext() {\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(Context);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9TaXRlQ29udGV4dC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFNZTtBQUVmLE1BQU1LLE9BQU8saUJBQUdMLG9EQUFhLENBQUM7SUFBRU0sT0FBTyxFQUFFLENBQUM7Q0FBRSxDQUFDO0FBRXRDLFNBQVNDLFdBQVcsQ0FBQyxFQUFFQyxRQUFRLEdBQUUsRUFBRTtJQUN0QyxNQUFNLEtBQUNGLE9BQU8sTUFBRUcsVUFBVSxNQUFJTCwrQ0FBUSxDQUFDLENBQUMsQ0FBQztJQUV6QyxNQUFNTSxZQUFZLEdBQUdULGtEQUFXLENBQUMsSUFBTTtRQUNuQ1EsVUFBVSxDQUFDRSxNQUFNLENBQUNMLE9BQU8sQ0FBQyxDQUFDO0tBQzlCLENBQUM7SUFFRkgsZ0RBQVMsQ0FBQyxJQUFNO1FBQ1pTLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsUUFBUSxFQUFFSCxZQUFZLEVBQUU7WUFBRUksT0FBTyxFQUFFLElBQUk7U0FBRSxDQUFDLENBQUM7UUFFckUsT0FBTyxJQUFNO1lBQ1RGLFFBQVEsQ0FBQ0csbUJBQW1CLENBQUMsUUFBUSxFQUFFTCxZQUFZLENBQUMsQ0FBQztTQUN4RCxDQUFDO0tBQ0wsRUFBRTtRQUFDQSxZQUFZO0tBQUMsQ0FBQyxDQUFDO0lBRW5CLHFCQUFPLDhEQUFDTCxPQUFPLENBQUNXLFFBQVE7UUFBQ0MsS0FBSyxFQUFFWCxPQUFPO2tCQUFHRSxRQUFROzs7OztZQUFvQixDQUFDO0NBQzFFO0FBRU0sU0FBU1UsY0FBYyxHQUFHO0lBQzdCLE9BQU9oQixpREFBVSxDQUFDRyxPQUFPLENBQUMsQ0FBQztDQUM5QiIsInNvdXJjZXMiOlsid2VicGFjazovL3JvYmxveC1wb3J0Zm9saW8vLi9TaXRlQ29udGV4dC5qc3g/YTkwMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gICAgY3JlYXRlQ29udGV4dCxcclxuICAgIHVzZUNhbGxiYWNrLFxyXG4gICAgdXNlQ29udGV4dCxcclxuICAgIHVzZUVmZmVjdCxcclxuICAgIHVzZVN0YXRlLFxyXG59IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoeyBzY3JvbGxZOiAwIH0pO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNpdGVDb250ZXh0KHsgY2hpbGRyZW4gfSkge1xyXG4gICAgY29uc3QgW3Njcm9sbFksIHNldFNjcm9sbFldID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU2Nyb2xsID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgIHNldFNjcm9sbFkod2luZG93LnNjcm9sbFkpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbCwgeyBwYXNzaXZlOiB0cnVlIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbCk7XHJcbiAgICAgICAgfTtcclxuICAgIH0sIFtoYW5kbGVTY3JvbGxdKTtcclxuXHJcbiAgICByZXR1cm4gPENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3Njcm9sbFl9PntjaGlsZHJlbn08L0NvbnRleHQuUHJvdmlkZXI+O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlU2l0ZUNvbnRleHQoKSB7XHJcbiAgICByZXR1cm4gdXNlQ29udGV4dChDb250ZXh0KTtcclxufVxyXG4iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZUNhbGxiYWNrIiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQ29udGV4dCIsInNjcm9sbFkiLCJTaXRlQ29udGV4dCIsImNoaWxkcmVuIiwic2V0U2Nyb2xsWSIsImhhbmRsZVNjcm9sbCIsIndpbmRvdyIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInBhc3NpdmUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsInVzZVNpdGVDb250ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./SiteContext.jsx\n");

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