"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Footer/icones.js":
/*!*************************************!*\
  !*** ./components/Footer/icones.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Icones; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Icones(param) {\n    var titulo = param.titulo, imagem = param.imagem, subItem = param.subItem;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-lg font-bold\",\n                children: [\n                    titulo,\n                    \":\"\n                ]\n            }, void 0, true, {\n                fileName: \"/home/runner/IanyRamalhoEsteticaeSaude/components/Footer/icones.js\",\n                lineNumber: 6,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-nowrap items-start\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"grid grid-flow-row-dense gap-\".concat(subItem.length + 1),\n                    children: subItem.map(function(res, index) {\n                        //console.log(typeof res)\n                        return {\n                            imagem: imagem\n                        };\n                    //if(index!==0){\n                    //return <p className={'col-span-2'}>{res}</p>\n                    // }else{return <p>{res}</p>}\n                    })\n                }, void 0, false, {\n                    fileName: \"/home/runner/IanyRamalhoEsteticaeSaude/components/Footer/icones.js\",\n                    lineNumber: 9,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/runner/IanyRamalhoEsteticaeSaude/components/Footer/icones.js\",\n                lineNumber: 7,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/runner/IanyRamalhoEsteticaeSaude/components/Footer/icones.js\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, this));\n};\n_c = Icones;\nvar _c;\n$RefreshReg$(_c, \"Icones\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Zvb3Rlci9pY29uZXMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXlCO0FBRVYsUUFBUSxDQUFDQyxNQUFNLENBQUUsS0FBd0IsRUFBQyxDQUFDO1FBQXpCQyxNQUFNLEdBQVAsS0FBd0IsQ0FBdkJBLE1BQU0sRUFBQ0MsTUFBTSxHQUFkLEtBQXdCLENBQWhCQSxNQUFNLEVBQUVDLE9BQU8sR0FBdkIsS0FBd0IsQ0FBUkEsT0FBTztJQUNyRCxNQUFNLDZFQUNIQyxDQUFHOzt3RkFDREMsQ0FBQztnQkFBQ0MsU0FBUyxFQUFDLENBQW1COztvQkFBRUwsTUFBTTtvQkFBQyxDQUFDOzs7Ozs7O3dGQUN6Q0csQ0FBRztnQkFBQ0UsU0FBUyxFQUFDLENBQThCO3NHQUUxQ0YsQ0FBRztvQkFBQ0UsU0FBUyxFQUFHLENBQTZCLCtCQUFtQixPQUFqQkgsT0FBTyxDQUFDSSxNQUFNLEdBQUMsQ0FBQzs4QkFFN0RKLE9BQU8sQ0FBQ0ssR0FBRyxDQUFDLFFBQVEsQ0FBUEMsR0FBRyxFQUFDQyxLQUFLLEVBQUcsQ0FBQzt3QkFDekIsRUFBeUI7d0JBQ3pCLE1BQU0sQ0FBRSxDQUFDUjs0QkFBQUEsTUFBTSxFQUFOQSxNQUFNO3dCQUFBLENBQUM7b0JBQzVCLEVBQWdCO29CQUNGLEVBQThDO29CQUNqRCxFQUE2QjtvQkFDOUIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNWCxDQUFDO0tBcEJ1QkYsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0Zvb3Rlci9pY29uZXMuanM/NjM5NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEljb25lcyAoe3RpdHVsbyxpbWFnZW0sIHN1Ykl0ZW19KXtcbiAgcmV0dXJuKFxuICAgIDxkaXY+XG4gICAgICA8cCBjbGFzc05hbWU9J3RleHQtbGcgZm9udC1ib2xkJz57dGl0dWxvfTo8L3A+IFxuICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1ub3dyYXAgaXRlbXMtc3RhcnQnPlxuICAgICAgICBcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BncmlkIGdyaWQtZmxvdy1yb3ctZGVuc2UgZ2FwLSR7c3ViSXRlbS5sZW5ndGgrMX1gfT5cbiAgICAgICAgICBcbiAgICAgICAgICB7c3ViSXRlbS5tYXAoKHJlcyxpbmRleCk9PntcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2codHlwZW9mIHJlcylcbiAgICAgICAgICAgIHJldHVybiAoe2ltYWdlbX0pXG4vL2lmKGluZGV4IT09MCl7XG4gICAgICAgICAgICAgIC8vcmV0dXJuIDxwIGNsYXNzTmFtZT17J2NvbC1zcGFuLTInfT57cmVzfTwvcD5cbiAgICAgICAgICAgLy8gfWVsc2V7cmV0dXJuIDxwPntyZXN9PC9wPn1cbiAgICAgICAgICB9XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+ICAgIFxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJJY29uZXMiLCJ0aXR1bG8iLCJpbWFnZW0iLCJzdWJJdGVtIiwiZGl2IiwicCIsImNsYXNzTmFtZSIsImxlbmd0aCIsIm1hcCIsInJlcyIsImluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Footer/icones.js\n");

/***/ })

});