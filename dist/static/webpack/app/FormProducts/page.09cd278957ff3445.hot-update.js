"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/FormProducts/page",{

/***/ "(app-pages-browser)/./src/app/FormProducts/page.tsx":
/*!***************************************!*\
  !*** ./src/app/FormProducts/page.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ FormProducts; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/utils */ \"(app-pages-browser)/./src/utils/utils.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction FormProducts() {\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const searchParams = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useSearchParams)();\n    const title = searchParams.get(\"title\");\n    const description2 = searchParams.get(\"description2\");\n    // Separar el texto de description2 por puntos y convertirlo en párrafos\n    const descriptionParagraphs = description2 ? description2.split(\". \").map((paragraph, index, array)=>{\n        // Añadir el punto final solo si no es el último párrafo\n        const paragraphWithPeriod = index < array.length - 1 ? \"\".concat(paragraph, \".\") : paragraph;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            className: \"text-base md:text-lg mb-4 text-white\",\n            children: paragraphWithPeriod\n        }, index, false, {\n            fileName: \"/Users/nahuelscudaletti/Documents/proedge-landing/src/app/FormProducts/page.tsx\",\n            lineNumber: 17,\n            columnNumber: 20\n        }, this);\n    }) : null;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-h-screen flex flex-col items-center justify-center p-4 bg-gray-900 text-white bg-cover bg-center\",\n        style: {\n            backgroundImage: \"url(\".concat((0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.getBasePath)(), \"/assets/gradient2.png)\")\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full max-w-7xl flex flex-col md:flex-row items-center justify-between\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full md:w-1/2 mb-8 md:mb-0 md:pr-8\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-3xl md:text-4xl font-semibold mb-4\",\n                                children: title\n                            }, void 0, false, {\n                                fileName: \"/Users/nahuelscudaletti/Documents/proedge-landing/src/app/FormProducts/page.tsx\",\n                                lineNumber: 25,\n                                columnNumber: 21\n                            }, this),\n                            descriptionParagraphs\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nahuelscudaletti/Documents/proedge-landing/src/app/FormProducts/page.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full md:w-1/2 flex flex-col items-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            className: \"w-full bg-gray-800 bg-opacity-60 p-6 rounded-lg shadow-md\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"mb-4 w-full md:w-2/3\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            className: \"block text-gray-300 text-sm font-bold mb-2\",\n                                            htmlFor: \"firstName\",\n                                            children: \"First Name\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/nahuelscudaletti/Documents/proedge-landing/src/app/FormProducts/page.tsx\",\n                                            lineNumber: 31,\n                                            columnNumber: 29\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            className: \"shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline bg-gray-100\",\n                                            id: \"firstName\",\n                                            type: \"text\",\n                                            placeholder: \"First Name\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/nahuelscudaletti/Documents/proedge-landing/src/app/FormProducts/page.tsx\",\n                                            lineNumber: 34,\n                                            columnNumber: 29\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/nahuelscudaletti/Documents/proedge-landing/src/app/FormProducts/page.tsx\",\n                                    lineNumber: 30,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"mb-4 w-full md:w-2/3\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            className: \"block text-gray-300 text-sm font-bold mb-2\",\n                                            htmlFor: \"lastName\",\n                                            children: \"Last Name\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/nahuelscudaletti/Documents/proedge-landing/src/app/FormProducts/page.tsx\",\n                                            lineNumber: 37,\n                                            columnNumber: 29\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            className: \"shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline bg-gray-100\",\n                                            id: \"lastName\",\n                                            type: \"text\",\n                                            placeholder: \"Last Name\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/nahuelscudaletti/Documents/proedge-landing/src/app/FormProducts/page.tsx\",\n                                            lineNumber: 40,\n                                            columnNumber: 29\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/nahuelscudaletti/Documents/proedge-landing/src/app/FormProducts/page.tsx\",\n                                    lineNumber: 36,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"mb-4 w-full md:w-2/3\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            className: \"block text-gray-300 text-sm font-bold mb-2\",\n                                            htmlFor: \"email\",\n                                            children: \"Email\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/nahuelscudaletti/Documents/proedge-landing/src/app/FormProducts/page.tsx\",\n                                            lineNumber: 43,\n                                            columnNumber: 29\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            className: \"shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline bg-gray-100\",\n                                            id: \"email\",\n                                            type: \"email\",\n                                            placeholder: \"Email\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/nahuelscudaletti/Documents/proedge-landing/src/app/FormProducts/page.tsx\",\n                                            lineNumber: 46,\n                                            columnNumber: 29\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/nahuelscudaletti/Documents/proedge-landing/src/app/FormProducts/page.tsx\",\n                                    lineNumber: 42,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"mb-4 w-full md:w-2/3\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            className: \"block text-gray-300 text-sm font-bold mb-2\",\n                                            htmlFor: \"phone\",\n                                            children: \"Phone Number\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/nahuelscudaletti/Documents/proedge-landing/src/app/FormProducts/page.tsx\",\n                                            lineNumber: 49,\n                                            columnNumber: 29\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            className: \"shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline bg-gray-100\",\n                                            id: \"phone\",\n                                            type: \"tel\",\n                                            placeholder: \"Phone Number\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/nahuelscudaletti/Documents/proedge-landing/src/app/FormProducts/page.tsx\",\n                                            lineNumber: 52,\n                                            columnNumber: 29\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/nahuelscudaletti/Documents/proedge-landing/src/app/FormProducts/page.tsx\",\n                                    lineNumber: 48,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"mb-4 w-full md:w-2/3\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            className: \"block text-gray-300 text-sm font-bold mb-2\",\n                                            htmlFor: \"help\",\n                                            children: \"How can we help you\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/nahuelscudaletti/Documents/proedge-landing/src/app/FormProducts/page.tsx\",\n                                            lineNumber: 55,\n                                            columnNumber: 29\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                            className: \"shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline bg-gray-100\",\n                                            id: \"help\",\n                                            placeholder: \"How can we help you\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/nahuelscudaletti/Documents/proedge-landing/src/app/FormProducts/page.tsx\",\n                                            lineNumber: 58,\n                                            columnNumber: 29\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/nahuelscudaletti/Documents/proedge-landing/src/app/FormProducts/page.tsx\",\n                                    lineNumber: 54,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"mb-4 w-full md:w-2/3\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            className: \"block text-gray-300 text-sm font-bold mb-2\",\n                                            children: \"Expected Budget:\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/nahuelscudaletti/Documents/proedge-landing/src/app/FormProducts/page.tsx\",\n                                            lineNumber: 61,\n                                            columnNumber: 29\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"relative\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                                className: \"block appearance-none w-full bg-gray-100 border border-gray-700 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline text-gray-900\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                        children: \"$1k - $3k\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/nahuelscudaletti/Documents/proedge-landing/src/app/FormProducts/page.tsx\",\n                                                        lineNumber: 66,\n                                                        columnNumber: 37\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                        children: \"$3k - $7k\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/nahuelscudaletti/Documents/proedge-landing/src/app/FormProducts/page.tsx\",\n                                                        lineNumber: 67,\n                                                        columnNumber: 37\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                        children: \"$7k - $15k\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/nahuelscudaletti/Documents/proedge-landing/src/app/FormProducts/page.tsx\",\n                                                        lineNumber: 68,\n                                                        columnNumber: 37\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/nahuelscudaletti/Documents/proedge-landing/src/app/FormProducts/page.tsx\",\n                                                lineNumber: 65,\n                                                columnNumber: 33\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/nahuelscudaletti/Documents/proedge-landing/src/app/FormProducts/page.tsx\",\n                                            lineNumber: 64,\n                                            columnNumber: 29\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/nahuelscudaletti/Documents/proedge-landing/src/app/FormProducts/page.tsx\",\n                                    lineNumber: 60,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex items-center justify-between\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline\",\n                                        type: \"button\",\n                                        children: \"Send Inquiry\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/nahuelscudaletti/Documents/proedge-landing/src/app/FormProducts/page.tsx\",\n                                        lineNumber: 73,\n                                        columnNumber: 29\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/nahuelscudaletti/Documents/proedge-landing/src/app/FormProducts/page.tsx\",\n                                    lineNumber: 72,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/nahuelscudaletti/Documents/proedge-landing/src/app/FormProducts/page.tsx\",\n                            lineNumber: 29,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/nahuelscudaletti/Documents/proedge-landing/src/app/FormProducts/page.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nahuelscudaletti/Documents/proedge-landing/src/app/FormProducts/page.tsx\",\n                lineNumber: 23,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>router.back(),\n                className: \"mt-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline\",\n                children: \"Go Back\"\n            }, void 0, false, {\n                fileName: \"/Users/nahuelscudaletti/Documents/proedge-landing/src/app/FormProducts/page.tsx\",\n                lineNumber: 80,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nahuelscudaletti/Documents/proedge-landing/src/app/FormProducts/page.tsx\",\n        lineNumber: 22,\n        columnNumber: 9\n    }, this);\n}\n_s(FormProducts, \"A57ZQKsSKoH4xi482IWIv7kTTfs=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useSearchParams\n    ];\n});\n_c = FormProducts;\nvar _c;\n$RefreshReg$(_c, \"FormProducts\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvRm9ybVByb2R1Y3RzL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFNEM7QUFDaUI7QUFFOUMsU0FBU0c7O0lBQ3BCLE1BQU1DLFNBQVNILDBEQUFTQTtJQUN4QixNQUFNSSxlQUFlSCxnRUFBZUE7SUFDcEMsTUFBTUksUUFBUUQsYUFBYUUsR0FBRyxDQUFDO0lBQy9CLE1BQU1DLGVBQWVILGFBQWFFLEdBQUcsQ0FBQztJQUV0Qyx3RUFBd0U7SUFDeEUsTUFBTUUsd0JBQXdCRCxlQUN4QkEsYUFBYUUsS0FBSyxDQUFDLE1BQU1DLEdBQUcsQ0FBQyxDQUFDQyxXQUFXQyxPQUFPQztRQUM5Qyx3REFBd0Q7UUFDeEQsTUFBTUMsc0JBQXNCRixRQUFRQyxNQUFNRSxNQUFNLEdBQUcsSUFBSSxHQUFhLE9BQVZKLFdBQVUsT0FBS0E7UUFDekUscUJBQU8sOERBQUNLO1lBQWNDLFdBQVU7c0JBQXdDSDtXQUF6REY7Ozs7O0lBQ25CLEtBQ0U7SUFFTixxQkFDSSw4REFBQ007UUFBSUQsV0FBVTtRQUF1R0UsT0FBTztZQUFFQyxpQkFBaUIsT0FBcUIsT0FBZHJCLHlEQUFXQSxJQUFHO1FBQXdCOzswQkFDekwsOERBQUNtQjtnQkFBSUQsV0FBVTs7a0NBQ1gsOERBQUNDO3dCQUFJRCxXQUFVOzswQ0FDWCw4REFBQ0k7Z0NBQUdKLFdBQVU7MENBQTJDWjs7Ozs7OzRCQUN4REc7Ozs7Ozs7a0NBRUwsOERBQUNVO3dCQUFJRCxXQUFVO2tDQUNYLDRFQUFDSzs0QkFBS0wsV0FBVTs7OENBQ1osOERBQUNDO29DQUFJRCxXQUFVOztzREFDWCw4REFBQ007NENBQU1OLFdBQVU7NENBQTZDTyxTQUFRO3NEQUFZOzs7Ozs7c0RBR2xGLDhEQUFDQzs0Q0FBTVIsV0FBVTs0Q0FBeUlTLElBQUc7NENBQVlDLE1BQUs7NENBQU9DLGFBQVk7Ozs7Ozs7Ozs7Ozs4Q0FFck0sOERBQUNWO29DQUFJRCxXQUFVOztzREFDWCw4REFBQ007NENBQU1OLFdBQVU7NENBQTZDTyxTQUFRO3NEQUFXOzs7Ozs7c0RBR2pGLDhEQUFDQzs0Q0FBTVIsV0FBVTs0Q0FBeUlTLElBQUc7NENBQVdDLE1BQUs7NENBQU9DLGFBQVk7Ozs7Ozs7Ozs7Ozs4Q0FFcE0sOERBQUNWO29DQUFJRCxXQUFVOztzREFDWCw4REFBQ007NENBQU1OLFdBQVU7NENBQTZDTyxTQUFRO3NEQUFROzs7Ozs7c0RBRzlFLDhEQUFDQzs0Q0FBTVIsV0FBVTs0Q0FBeUlTLElBQUc7NENBQVFDLE1BQUs7NENBQVFDLGFBQVk7Ozs7Ozs7Ozs7Ozs4Q0FFbE0sOERBQUNWO29DQUFJRCxXQUFVOztzREFDWCw4REFBQ007NENBQU1OLFdBQVU7NENBQTZDTyxTQUFRO3NEQUFROzs7Ozs7c0RBRzlFLDhEQUFDQzs0Q0FBTVIsV0FBVTs0Q0FBeUlTLElBQUc7NENBQVFDLE1BQUs7NENBQU1DLGFBQVk7Ozs7Ozs7Ozs7Ozs4Q0FFaE0sOERBQUNWO29DQUFJRCxXQUFVOztzREFDWCw4REFBQ007NENBQU1OLFdBQVU7NENBQTZDTyxTQUFRO3NEQUFPOzs7Ozs7c0RBRzdFLDhEQUFDSzs0Q0FBU1osV0FBVTs0Q0FBeUlTLElBQUc7NENBQU9FLGFBQVk7Ozs7Ozs7Ozs7Ozs4Q0FFdkwsOERBQUNWO29DQUFJRCxXQUFVOztzREFDWCw4REFBQ007NENBQU1OLFdBQVU7c0RBQTZDOzs7Ozs7c0RBRzlELDhEQUFDQzs0Q0FBSUQsV0FBVTtzREFDWCw0RUFBQ2E7Z0RBQU9iLFdBQVU7O2tFQUNkLDhEQUFDYztrRUFBTzs7Ozs7O2tFQUNSLDhEQUFDQTtrRUFBTzs7Ozs7O2tFQUNSLDhEQUFDQTtrRUFBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OENBSXBCLDhEQUFDYjtvQ0FBSUQsV0FBVTs4Q0FDWCw0RUFBQ2U7d0NBQU9mLFdBQVU7d0NBQStHVSxNQUFLO2tEQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQU8vSiw4REFBQ0s7Z0JBQ0dDLFNBQVMsSUFBTTlCLE9BQU8rQixJQUFJO2dCQUMxQmpCLFdBQVU7MEJBQ2I7Ozs7Ozs7Ozs7OztBQUtiO0dBbEZ3QmY7O1FBQ0xGLHNEQUFTQTtRQUNIQyw0REFBZUE7OztLQUZoQkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9Gb3JtUHJvZHVjdHMvcGFnZS50c3g/ZTgwYyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgZ2V0QmFzZVBhdGggfSBmcm9tICdAL3V0aWxzL3V0aWxzJztcbmltcG9ydCB7IHVzZVJvdXRlciwgdXNlU2VhcmNoUGFyYW1zIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9ybVByb2R1Y3RzKCkge1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICAgIGNvbnN0IHNlYXJjaFBhcmFtcyA9IHVzZVNlYXJjaFBhcmFtcygpO1xuICAgIGNvbnN0IHRpdGxlID0gc2VhcmNoUGFyYW1zLmdldCgndGl0bGUnKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbjIgPSBzZWFyY2hQYXJhbXMuZ2V0KCdkZXNjcmlwdGlvbjInKTtcblxuICAgIC8vIFNlcGFyYXIgZWwgdGV4dG8gZGUgZGVzY3JpcHRpb24yIHBvciBwdW50b3MgeSBjb252ZXJ0aXJsbyBlbiBww6FycmFmb3NcbiAgICBjb25zdCBkZXNjcmlwdGlvblBhcmFncmFwaHMgPSBkZXNjcmlwdGlvbjJcbiAgICAgICAgPyBkZXNjcmlwdGlvbjIuc3BsaXQoJy4gJykubWFwKChwYXJhZ3JhcGgsIGluZGV4LCBhcnJheSkgPT4ge1xuICAgICAgICAgICAgLy8gQcOxYWRpciBlbCBwdW50byBmaW5hbCBzb2xvIHNpIG5vIGVzIGVsIMO6bHRpbW8gcMOhcnJhZm9cbiAgICAgICAgICAgIGNvbnN0IHBhcmFncmFwaFdpdGhQZXJpb2QgPSBpbmRleCA8IGFycmF5Lmxlbmd0aCAtIDEgPyBgJHtwYXJhZ3JhcGh9LmAgOiBwYXJhZ3JhcGg7XG4gICAgICAgICAgICByZXR1cm4gPHAga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwidGV4dC1iYXNlIG1kOnRleHQtbGcgbWItNCB0ZXh0LXdoaXRlXCI+e3BhcmFncmFwaFdpdGhQZXJpb2R9PC9wPjtcbiAgICAgICAgfSlcbiAgICAgICAgOiBudWxsO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcC00IGJnLWdyYXktOTAwIHRleHQtd2hpdGUgYmctY292ZXIgYmctY2VudGVyXCIgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7Z2V0QmFzZVBhdGgoKX0vYXNzZXRzL2dyYWRpZW50Mi5wbmcpYCB9fT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1heC13LTd4bCBmbGV4IGZsZXgtY29sIG1kOmZsZXgtcm93IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtZDp3LTEvMiBtYi04IG1kOm1iLTAgbWQ6cHItOFwiPlxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0zeGwgbWQ6dGV4dC00eGwgZm9udC1zZW1pYm9sZCBtYi00XCI+e3RpdGxlfTwvaDE+XG4gICAgICAgICAgICAgICAgICAgIHtkZXNjcmlwdGlvblBhcmFncmFwaHN9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWQ6dy0xLzIgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwidy1mdWxsIGJnLWdyYXktODAwIGJnLW9wYWNpdHktNjAgcC02IHJvdW5kZWQtbGcgc2hhZG93LW1kXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTQgdy1mdWxsIG1kOnctMi8zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS0zMDAgdGV4dC1zbSBmb250LWJvbGQgbWItMlwiIGh0bWxGb3I9XCJmaXJzdE5hbWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlyc3QgTmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cInNoYWRvdyBhcHBlYXJhbmNlLW5vbmUgYm9yZGVyIHJvdW5kZWQgdy1mdWxsIHB5LTIgcHgtMyB0ZXh0LWdyYXktOTAwIGxlYWRpbmctdGlnaHQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lIGJnLWdyYXktMTAwXCIgaWQ9XCJmaXJzdE5hbWVcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiRmlyc3QgTmFtZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNCB3LWZ1bGwgbWQ6dy0yLzNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTMwMCB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yXCIgaHRtbEZvcj1cImxhc3ROYW1lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExhc3QgTmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cInNoYWRvdyBhcHBlYXJhbmNlLW5vbmUgYm9yZGVyIHJvdW5kZWQgdy1mdWxsIHB5LTIgcHgtMyB0ZXh0LWdyYXktOTAwIGxlYWRpbmctdGlnaHQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lIGJnLWdyYXktMTAwXCIgaWQ9XCJsYXN0TmFtZVwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJMYXN0IE5hbWVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTQgdy1mdWxsIG1kOnctMi8zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS0zMDAgdGV4dC1zbSBmb250LWJvbGQgbWItMlwiIGh0bWxGb3I9XCJlbWFpbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFbWFpbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cInNoYWRvdyBhcHBlYXJhbmNlLW5vbmUgYm9yZGVyIHJvdW5kZWQgdy1mdWxsIHB5LTIgcHgtMyB0ZXh0LWdyYXktOTAwIGxlYWRpbmctdGlnaHQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lIGJnLWdyYXktMTAwXCIgaWQ9XCJlbWFpbFwiIHR5cGU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiRW1haWxcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTQgdy1mdWxsIG1kOnctMi8zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS0zMDAgdGV4dC1zbSBmb250LWJvbGQgbWItMlwiIGh0bWxGb3I9XCJwaG9uZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQaG9uZSBOdW1iZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJzaGFkb3cgYXBwZWFyYW5jZS1ub25lIGJvcmRlciByb3VuZGVkIHctZnVsbCBweS0yIHB4LTMgdGV4dC1ncmF5LTkwMCBsZWFkaW5nLXRpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZSBiZy1ncmF5LTEwMFwiIGlkPVwicGhvbmVcIiB0eXBlPVwidGVsXCIgcGxhY2Vob2xkZXI9XCJQaG9uZSBOdW1iZXJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTQgdy1mdWxsIG1kOnctMi8zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS0zMDAgdGV4dC1zbSBmb250LWJvbGQgbWItMlwiIGh0bWxGb3I9XCJoZWxwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhvdyBjYW4gd2UgaGVscCB5b3VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzc05hbWU9XCJzaGFkb3cgYXBwZWFyYW5jZS1ub25lIGJvcmRlciByb3VuZGVkIHctZnVsbCBweS0yIHB4LTMgdGV4dC1ncmF5LTkwMCBsZWFkaW5nLXRpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZSBiZy1ncmF5LTEwMFwiIGlkPVwiaGVscFwiIHBsYWNlaG9sZGVyPVwiSG93IGNhbiB3ZSBoZWxwIHlvdVwiPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNCB3LWZ1bGwgbWQ6dy0yLzNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTMwMCB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEV4cGVjdGVkIEJ1ZGdldDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJibG9jayBhcHBlYXJhbmNlLW5vbmUgdy1mdWxsIGJnLWdyYXktMTAwIGJvcmRlciBib3JkZXItZ3JheS03MDAgaG92ZXI6Ym9yZGVyLWdyYXktNTAwIHB4LTQgcHktMiBwci04IHJvdW5kZWQgc2hhZG93IGxlYWRpbmctdGlnaHQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lIHRleHQtZ3JheS05MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+JDFrIC0gJDNrPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPiQzayAtICQ3azwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj4kN2sgLSAkMTVrPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmctYmx1ZS01MDAgaG92ZXI6YmctYmx1ZS03MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lXCIgdHlwZT1cImJ1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZW5kIElucXVpcnlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByb3V0ZXIuYmFjaygpfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTQgYmctZ3JheS01MDAgaG92ZXI6YmctZ3JheS03MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBHbyBCYWNrXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cbiJdLCJuYW1lcyI6WyJnZXRCYXNlUGF0aCIsInVzZVJvdXRlciIsInVzZVNlYXJjaFBhcmFtcyIsIkZvcm1Qcm9kdWN0cyIsInJvdXRlciIsInNlYXJjaFBhcmFtcyIsInRpdGxlIiwiZ2V0IiwiZGVzY3JpcHRpb24yIiwiZGVzY3JpcHRpb25QYXJhZ3JhcGhzIiwic3BsaXQiLCJtYXAiLCJwYXJhZ3JhcGgiLCJpbmRleCIsImFycmF5IiwicGFyYWdyYXBoV2l0aFBlcmlvZCIsImxlbmd0aCIsInAiLCJjbGFzc05hbWUiLCJkaXYiLCJzdHlsZSIsImJhY2tncm91bmRJbWFnZSIsImgxIiwiZm9ybSIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwiaWQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJ0ZXh0YXJlYSIsInNlbGVjdCIsIm9wdGlvbiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJiYWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/FormProducts/page.tsx\n"));

/***/ })

});