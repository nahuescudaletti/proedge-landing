"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/Header/Header.tsx":
/*!******************************************!*\
  !*** ./src/components/Header/Header.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Header: function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_RiMenu3Line_react_icons_ri__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=RiMenu3Line!=!react-icons/ri */ \"(app-pages-browser)/./node_modules/react-icons/ri/index.esm.js\");\n/* harmony import */ var _barrel_optimize_names_IoIosArrowDown_react_icons_io__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=IoIosArrowDown!=!react-icons/io */ \"(app-pages-browser)/./node_modules/react-icons/io/index.esm.js\");\n/* harmony import */ var _Header_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header.data */ \"(app-pages-browser)/./src/components/Header/Header.data.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _MotionTransition___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../MotionTransition/ */ \"(app-pages-browser)/./src/components/MotionTransition/index.ts\");\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils/utils */ \"(app-pages-browser)/./src/utils/utils.js\");\n/* harmony import */ var _DropDown_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DropDown.data */ \"(app-pages-browser)/./src/components/Header/DropDown.data.ts\");\n/* __next_internal_client_entry_do_not_use__ Header auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction Header() {\n    _s();\n    const [openMobileMenu, setOpenMobileMenu] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [openProductDropdown, setOpenProductDropdown] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const toggleMobileMenu = ()=>{\n        setOpenMobileMenu(!openMobileMenu);\n        setOpenProductDropdown(false);\n    };\n    const toggleProductDropdown = ()=>{\n        setOpenProductDropdown(!openProductDropdown);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MotionTransition___WEBPACK_IMPORTED_MODULE_4__.MotionTransition, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n            className: \"flex flex-wrap items-center justify-between max-w-10xl p-4 mx-auto md:py- bg-transparent\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center cursor-pointer\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        src: \"\".concat((0,_utils_utils__WEBPACK_IMPORTED_MODULE_5__.getBasePath)(), \"/assets/PE_logo_white_1_.svg\"),\n                        width: \"150\",\n                        height: \"100\",\n                        alt: \"Logo Bank\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nahuelscudaletti/Documents/proedge-landing/src/components/Header/Header.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/nahuelscudaletti/Documents/proedge-landing/src/components/Header/Header.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_RiMenu3Line_react_icons_ri__WEBPACK_IMPORTED_MODULE_7__.RiMenu3Line, {\n                    className: \"block text-3xl md:hidden cursor-pointer\",\n                    onClick: toggleMobileMenu\n                }, void 0, false, {\n                    fileName: \"/Users/nahuelscudaletti/Documents/proedge-landing/src/components/Header/Header.tsx\",\n                    lineNumber: 32,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"\".concat(openMobileMenu ? \"block\" : \"hidden\", \" w-full md:block md:w-auto\"),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col p-4 mt-4 md:p-0 md:flex-row md:space-x-8 md:mt-0 md:border-0\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"relative px-4 transition-all duration-500 ease-in-out cursor-pointer\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"group\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: \"group flex items-center hover:bg-gray-100 hover:bg-opacity-10 rounded-full px-3 py-2 text-orange-light group-hover:text-orange hover:text-orange-500\",\n                                            onClick: toggleProductDropdown,\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    children: \"Products\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/nahuelscudaletti/Documents/proedge-landing/src/components/Header/Header.tsx\",\n                                                    lineNumber: 38,\n                                                    columnNumber: 37\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_IoIosArrowDown_react_icons_io__WEBPACK_IMPORTED_MODULE_8__.IoIosArrowDown, {\n                                                    className: \"ml-1 \".concat(openProductDropdown ? \"transform rotate-180\" : \"\")\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/nahuelscudaletti/Documents/proedge-landing/src/components/Header/Header.tsx\",\n                                                    lineNumber: 39,\n                                                    columnNumber: 37\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/nahuelscudaletti/Documents/proedge-landing/src/components/Header/Header.tsx\",\n                                            lineNumber: 37,\n                                            columnNumber: 33\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"\".concat(openProductDropdown ? \"block\" : \"hidden\", \" absolute left-0 mt-2 w-48 bg-slate-900 rounded-lg shadow-lg z-10\"),\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"py-1\",\n                                                children: _DropDown_data__WEBPACK_IMPORTED_MODULE_6__.DataDropDown.map((param)=>/*#__PURE__*/ {\n                                                    let { id, name, idLink } = param;\n                                                    return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                        href: idLink,\n                                                        className: \"block px-4 py-2 text-white-800 hover:bg-orange-500 hover:text-black\",\n                                                        onClick: toggleMobileMenu,\n                                                        children: name\n                                                    }, id, false, {\n                                                        fileName: \"/Users/nahuelscudaletti/Documents/proedge-landing/src/components/Header/Header.tsx\",\n                                                        lineNumber: 44,\n                                                        columnNumber: 45\n                                                    }, this);\n                                                })\n                                            }, void 0, false, {\n                                                fileName: \"/Users/nahuelscudaletti/Documents/proedge-landing/src/components/Header/Header.tsx\",\n                                                lineNumber: 42,\n                                                columnNumber: 37\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/nahuelscudaletti/Documents/proedge-landing/src/components/Header/Header.tsx\",\n                                            lineNumber: 41,\n                                            columnNumber: 33\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/nahuelscudaletti/Documents/proedge-landing/src/components/Header/Header.tsx\",\n                                    lineNumber: 36,\n                                    columnNumber: 29\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/nahuelscudaletti/Documents/proedge-landing/src/components/Header/Header.tsx\",\n                                lineNumber: 35,\n                                columnNumber: 25\n                            }, this),\n                            _Header_data__WEBPACK_IMPORTED_MODULE_2__.dataHeader.slice(1).map((param)=>/*#__PURE__*/ {\n                                let { id, name, idLink } = param;\n                                return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"px-4 transition-all duration-500 ease-in-out cursor-pointer flex items-center\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: idLink,\n                                        className: \"group hover:bg-gray-100 hover:bg-opacity-10 rounded-full px-3 py-2 text-orange-light group-hover:text-orange hover:text-orange-500\",\n                                        onClick: toggleMobileMenu,\n                                        children: name\n                                    }, void 0, false, {\n                                        fileName: \"/Users/nahuelscudaletti/Documents/proedge-landing/src/components/Header/Header.tsx\",\n                                        lineNumber: 52,\n                                        columnNumber: 33\n                                    }, this)\n                                }, id, false, {\n                                    fileName: \"/Users/nahuelscudaletti/Documents/proedge-landing/src/components/Header/Header.tsx\",\n                                    lineNumber: 51,\n                                    columnNumber: 29\n                                }, this);\n                            })\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nahuelscudaletti/Documents/proedge-landing/src/components/Header/Header.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/nahuelscudaletti/Documents/proedge-landing/src/components/Header/Header.tsx\",\n                    lineNumber: 33,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center cursor-pointer\"\n                }, void 0, false, {\n                    fileName: \"/Users/nahuelscudaletti/Documents/proedge-landing/src/components/Header/Header.tsx\",\n                    lineNumber: 57,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center cursor-pointer\"\n                }, void 0, false, {\n                    fileName: \"/Users/nahuelscudaletti/Documents/proedge-landing/src/components/Header/Header.tsx\",\n                    lineNumber: 59,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/nahuelscudaletti/Documents/proedge-landing/src/components/Header/Header.tsx\",\n            lineNumber: 28,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/nahuelscudaletti/Documents/proedge-landing/src/components/Header/Header.tsx\",\n        lineNumber: 27,\n        columnNumber: 9\n    }, this);\n}\n_s(Header, \"UiwJ4QAdBZ9mxzb/S0Jy1Nx2jCE=\");\n_c = Header;\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0hlYWRlci9IZWFkZXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRStCO0FBQ2M7QUFDRztBQUNMO0FBQ1Y7QUFDdUI7QUFDWjtBQUVHO0FBRXhDLFNBQVNROztJQUNaLE1BQU0sQ0FBQ0MsZ0JBQWdCQyxrQkFBa0IsR0FBR04sK0NBQVFBLENBQUM7SUFDckQsTUFBTSxDQUFDTyxxQkFBcUJDLHVCQUF1QixHQUFHUiwrQ0FBUUEsQ0FBQztJQUUvRCxNQUFNUyxtQkFBbUI7UUFDckJILGtCQUFrQixDQUFDRDtRQUNuQkcsdUJBQXVCO0lBQzNCO0lBRUEsTUFBTUUsd0JBQXdCO1FBQzFCRix1QkFBdUIsQ0FBQ0Q7SUFDNUI7SUFFQSxxQkFDSSw4REFBQ04sZ0VBQWdCQTtrQkFDYiw0RUFBQ1U7WUFBSUMsV0FBVTs7OEJBQ1gsOERBQUNDO29CQUFJRCxXQUFVOzhCQUNYLDRFQUFDaEIsbURBQUtBO3dCQUFDa0IsS0FBSyxHQUFpQixPQUFkWix5REFBV0EsSUFBRzt3QkFBK0JhLE9BQU07d0JBQU1DLFFBQU87d0JBQU1DLEtBQUk7Ozs7Ozs7Ozs7OzhCQUU3Riw4REFBQ3BCLDBGQUFXQTtvQkFBQ2UsV0FBVTtvQkFBMENNLFNBQVNUOzs7Ozs7OEJBQzFFLDhEQUFDSTtvQkFBSUQsV0FBVyxHQUF1QyxPQUFwQ1AsaUJBQWlCLFVBQVUsVUFBUzs4QkFDbkQsNEVBQUNRO3dCQUFJRCxXQUFVOzswQ0FDWCw4REFBQ0M7Z0NBQUlELFdBQVU7MENBQ1gsNEVBQUNDO29DQUFJRCxXQUFVOztzREFDWCw4REFBQ087NENBQU9QLFdBQVU7NENBQXVKTSxTQUFTUjs7OERBQzlLLDhEQUFDVTs4REFBSzs7Ozs7OzhEQUNOLDhEQUFDdEIsZ0dBQWNBO29EQUFDYyxXQUFXLFFBQTBELE9BQWxETCxzQkFBc0IseUJBQXlCOzs7Ozs7Ozs7Ozs7c0RBRXRGLDhEQUFDTTs0Q0FBSUQsV0FBVyxHQUE0QyxPQUF6Q0wsc0JBQXNCLFVBQVUsVUFBUztzREFDeEQsNEVBQUNNO2dEQUFJRCxXQUFVOzBEQUNWVCx3REFBWUEsQ0FBQ2tCLEdBQUcsQ0FBQzt3REFBQyxFQUFFQyxFQUFFLEVBQUVDLElBQUksRUFBRUMsTUFBTSxFQUFFOzJEQUNuQyw4REFBQ0M7d0RBQVdDLE1BQU1GO3dEQUFRWixXQUFVO3dEQUFzRU0sU0FBU1Q7a0VBQW1CYzt1REFBOUhEOzs7OztnREFBc0k7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NEJBTWpLdkIsb0RBQVVBLENBQUM0QixLQUFLLENBQUMsR0FBR04sR0FBRyxDQUFDO29DQUFDLEVBQUVDLEVBQUUsRUFBRUMsSUFBSSxFQUFFQyxNQUFNLEVBQUU7dUNBQzFDLDhEQUFDWDtvQ0FBYUQsV0FBVTs4Q0FDcEIsNEVBQUNhO3dDQUFFQyxNQUFNRjt3Q0FBUVosV0FBVTt3Q0FBcUlNLFNBQVNUO2tEQUFtQmM7Ozs7OzttQ0FEdExEOzs7Ozs0QkFFTDs7Ozs7Ozs7Ozs7OzhCQUlqQiw4REFBQ1Q7b0JBQUlELFdBQVU7Ozs7Ozs4QkFFZiw4REFBQ0M7b0JBQUlELFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSy9CO0dBbkRnQlI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlci50c3g/OGQyOSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgeyBSaU1lbnUzTGluZSB9IGZyb20gJ3JlYWN0LWljb25zL3JpJztcbmltcG9ydCB7IElvSW9zQXJyb3dEb3duIH0gZnJvbSAncmVhY3QtaWNvbnMvaW8nO1xuaW1wb3J0IHsgZGF0YUhlYWRlciB9IGZyb20gXCIuL0hlYWRlci5kYXRhXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTW90aW9uVHJhbnNpdGlvbiB9IGZyb20gXCIuLi9Nb3Rpb25UcmFuc2l0aW9uL1wiO1xuaW1wb3J0IHsgZ2V0QmFzZVBhdGggfSBmcm9tIFwiQC91dGlscy91dGlsc1wiO1xuaW1wb3J0IHsgUmV2ZWFsIH0gZnJvbSBcIi4uL1JldmVhbFwiO1xuaW1wb3J0IHsgRGF0YURyb3BEb3duIH0gZnJvbSBcIi4vRHJvcERvd24uZGF0YVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gSGVhZGVyKCkge1xuICAgIGNvbnN0IFtvcGVuTW9iaWxlTWVudSwgc2V0T3Blbk1vYmlsZU1lbnVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtvcGVuUHJvZHVjdERyb3Bkb3duLCBzZXRPcGVuUHJvZHVjdERyb3Bkb3duXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIGNvbnN0IHRvZ2dsZU1vYmlsZU1lbnUgPSAoKSA9PiB7XG4gICAgICAgIHNldE9wZW5Nb2JpbGVNZW51KCFvcGVuTW9iaWxlTWVudSk7XG4gICAgICAgIHNldE9wZW5Qcm9kdWN0RHJvcGRvd24oZmFsc2UpO1xuICAgIH07XG5cbiAgICBjb25zdCB0b2dnbGVQcm9kdWN0RHJvcGRvd24gPSAoKSA9PiB7XG4gICAgICAgIHNldE9wZW5Qcm9kdWN0RHJvcGRvd24oIW9wZW5Qcm9kdWN0RHJvcGRvd24pO1xuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8TW90aW9uVHJhbnNpdGlvbj5cbiAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBtYXgtdy0xMHhsIHAtNCBteC1hdXRvIG1kOnB5LSBiZy10cmFuc3BhcmVudFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgY3Vyc29yLXBvaW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz17YCR7Z2V0QmFzZVBhdGgoKX0vYXNzZXRzL1BFX2xvZ29fd2hpdGVfMV8uc3ZnYH0gd2lkdGg9XCIxNTBcIiBoZWlnaHQ9XCIxMDBcIiBhbHQ9XCJMb2dvIEJhbmtcIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxSaU1lbnUzTGluZSBjbGFzc05hbWU9XCJibG9jayB0ZXh0LTN4bCBtZDpoaWRkZW4gY3Vyc29yLXBvaW50ZXJcIiBvbkNsaWNrPXt0b2dnbGVNb2JpbGVNZW51fSAvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtvcGVuTW9iaWxlTWVudSA/ICdibG9jaycgOiAnaGlkZGVuJ30gdy1mdWxsIG1kOmJsb2NrIG1kOnctYXV0b2B9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgcC00IG10LTQgbWQ6cC0wIG1kOmZsZXgtcm93IG1kOnNwYWNlLXgtOCBtZDptdC0wIG1kOmJvcmRlci0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHB4LTQgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tNTAwIGVhc2UtaW4tb3V0IGN1cnNvci1wb2ludGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImdyb3VwIGZsZXggaXRlbXMtY2VudGVyIGhvdmVyOmJnLWdyYXktMTAwIGhvdmVyOmJnLW9wYWNpdHktMTAgcm91bmRlZC1mdWxsIHB4LTMgcHktMiB0ZXh0LW9yYW5nZS1saWdodCBncm91cC1ob3Zlcjp0ZXh0LW9yYW5nZSBob3Zlcjp0ZXh0LW9yYW5nZS01MDBcIiBvbkNsaWNrPXt0b2dnbGVQcm9kdWN0RHJvcGRvd259PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+UHJvZHVjdHM8L3NwYW4+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElvSW9zQXJyb3dEb3duIGNsYXNzTmFtZT17YG1sLTEgJHtvcGVuUHJvZHVjdERyb3Bkb3duID8gJ3RyYW5zZm9ybSByb3RhdGUtMTgwJyA6ICcnfWB9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7b3BlblByb2R1Y3REcm9wZG93biA/ICdibG9jaycgOiAnaGlkZGVuJ30gYWJzb2x1dGUgbGVmdC0wIG10LTIgdy00OCBiZy1zbGF0ZS05MDAgcm91bmRlZC1sZyBzaGFkb3ctbGcgei0xMGB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge0RhdGFEcm9wRG93bi5tYXAoKHsgaWQsIG5hbWUsIGlkTGluayB9KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGtleT17aWR9IGhyZWY9e2lkTGlua30gY2xhc3NOYW1lPVwiYmxvY2sgcHgtNCBweS0yIHRleHQtd2hpdGUtODAwIGhvdmVyOmJnLW9yYW5nZS01MDAgaG92ZXI6dGV4dC1ibGFja1wiIG9uQ2xpY2s9e3RvZ2dsZU1vYmlsZU1lbnV9PntuYW1lfTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAge2RhdGFIZWFkZXIuc2xpY2UoMSkubWFwKCh7IGlkLCBuYW1lLCBpZExpbmsgfSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpZH0gY2xhc3NOYW1lPVwicHgtNCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi01MDAgZWFzZS1pbi1vdXQgY3Vyc29yLXBvaW50ZXIgZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17aWRMaW5rfSBjbGFzc05hbWU9XCJncm91cCBob3ZlcjpiZy1ncmF5LTEwMCBob3ZlcjpiZy1vcGFjaXR5LTEwIHJvdW5kZWQtZnVsbCBweC0zIHB5LTIgdGV4dC1vcmFuZ2UtbGlnaHQgZ3JvdXAtaG92ZXI6dGV4dC1vcmFuZ2UgaG92ZXI6dGV4dC1vcmFuZ2UtNTAwXCIgb25DbGljaz17dG9nZ2xlTW9iaWxlTWVudX0+e25hbWV9PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgY3Vyc29yLXBvaW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGN1cnNvci1wb2ludGVyXCI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L25hdj5cbiAgICAgICAgPC9Nb3Rpb25UcmFuc2l0aW9uPlxuICAgICk7XG59XG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJSaU1lbnUzTGluZSIsIklvSW9zQXJyb3dEb3duIiwiZGF0YUhlYWRlciIsInVzZVN0YXRlIiwiTW90aW9uVHJhbnNpdGlvbiIsImdldEJhc2VQYXRoIiwiRGF0YURyb3BEb3duIiwiSGVhZGVyIiwib3Blbk1vYmlsZU1lbnUiLCJzZXRPcGVuTW9iaWxlTWVudSIsIm9wZW5Qcm9kdWN0RHJvcGRvd24iLCJzZXRPcGVuUHJvZHVjdERyb3Bkb3duIiwidG9nZ2xlTW9iaWxlTWVudSIsInRvZ2dsZVByb2R1Y3REcm9wZG93biIsIm5hdiIsImNsYXNzTmFtZSIsImRpdiIsInNyYyIsIndpZHRoIiwiaGVpZ2h0IiwiYWx0Iiwib25DbGljayIsImJ1dHRvbiIsInNwYW4iLCJtYXAiLCJpZCIsIm5hbWUiLCJpZExpbmsiLCJhIiwiaHJlZiIsInNsaWNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Header/Header.tsx\n"));

/***/ })

});