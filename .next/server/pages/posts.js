"use strict";
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
exports.id = "pages/posts";
exports.ids = ["pages/posts"];
exports.modules = {

/***/ "./pages/posts/index.js":
/*!******************************!*\
  !*** ./pages/posts/index.js ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_1__]);\naxios__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nconst Posts = (props)=>{\n    const [entriesData, setEntries] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(async ()=>{\n        const res = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"/api/beritas\");\n        setEntries(res.data.entriesData);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \" Posts \"\n            }, void 0, false, {\n                fileName: \"C:\\\\react\\\\pertemuan11\\\\kelas3e-next\\\\pages\\\\posts\\\\index.js\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, undefined),\n            entriesData.map((entry)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: `/posts/${entry.slug}`,\n                        children: entry.title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\react\\\\pertemuan11\\\\kelas3e-next\\\\pages\\\\posts\\\\index.js\",\n                        lineNumber: 16,\n                        columnNumber: 11\n                    }, undefined)\n                }, entry.id, false, {\n                    fileName: \"C:\\\\react\\\\pertemuan11\\\\kelas3e-next\\\\pages\\\\posts\\\\index.js\",\n                    lineNumber: 15,\n                    columnNumber: 9\n                }, undefined))\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\react\\\\pertemuan11\\\\kelas3e-next\\\\pages\\\\posts\\\\index.js\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Posts);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0cy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ2tCO0FBRTVDLE1BQU1HLFFBQVEsQ0FBQ0MsUUFBVTtJQUN2QixNQUFNLENBQUNDLGFBQWFDLFdBQVcsR0FBR0osK0NBQVFBLENBQUMsRUFBRTtJQUM3Q0QsZ0RBQVNBLENBQUMsVUFBWTtRQUNwQixNQUFNTSxNQUFNLE1BQU1QLGlEQUFTLENBQUM7UUFDNUJNLFdBQVdDLElBQUlFLElBQUksQ0FBQ0osV0FBVztJQUNqQyxHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ0s7OzBCQUNDLDhEQUFDQzswQkFBRzs7Ozs7O1lBQ0hOLFlBQVlPLEdBQUcsQ0FBQyxDQUFDQyxzQkFDaEIsOERBQUNIOzhCQUNDLDRFQUFDSTt3QkFBRUMsTUFBTSxDQUFDLE9BQU8sRUFBRUYsTUFBTUcsSUFBSSxDQUFDLENBQUM7a0NBQUdILE1BQU1JLEtBQUs7Ozs7OzttQkFEckNKLE1BQU1LLEVBQUU7Ozs7Ozs7Ozs7O0FBTTFCO0FBRUEsaUVBQWVmLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wb3N0cy9pbmRleC5qcz8zYjE2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgUG9zdHMgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBbZW50cmllc0RhdGEsIHNldEVudHJpZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gIHVzZUVmZmVjdChhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoXCIvYXBpL2Jlcml0YXNcIik7XHJcbiAgICBzZXRFbnRyaWVzKHJlcy5kYXRhLmVudHJpZXNEYXRhKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8aDE+IFBvc3RzIDwvaDE+XHJcbiAgICAgIHtlbnRyaWVzRGF0YS5tYXAoKGVudHJ5KSA9PiAoXHJcbiAgICAgICAgPGRpdiBrZXk9e2VudHJ5LmlkfT5cclxuICAgICAgICAgIDxhIGhyZWY9e2AvcG9zdHMvJHtlbnRyeS5zbHVnfWB9PntlbnRyeS50aXRsZX08L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkpfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RzO1xyXG4iXSwibmFtZXMiOlsiYXhpb3MiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlBvc3RzIiwicHJvcHMiLCJlbnRyaWVzRGF0YSIsInNldEVudHJpZXMiLCJyZXMiLCJnZXQiLCJkYXRhIiwiZGl2IiwiaDEiLCJtYXAiLCJlbnRyeSIsImEiLCJocmVmIiwic2x1ZyIsInRpdGxlIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/posts/index.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/posts/index.js"));
module.exports = __webpack_exports__;

})();