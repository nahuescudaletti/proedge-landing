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

/***/ "(app-pages-browser)/./src/components/CtaDark/CtaDark.tsx":
/*!********************************************!*\
  !*** ./src/components/CtaDark/CtaDark.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CtaDark: function() { return /* binding */ CtaDark; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction CtaDark() {\n    _s();\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [showSuccessModal, setShowSuccessModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        try {\n            const response = await fetch(\"/.netlify/functions/subscribe\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    email\n                })\n            });\n            if (!response.ok) {\n                throw new Error(\"Network response was not ok\");\n            }\n            const result = await response.json();\n            console.log(\"Subscription successful\", result);\n            // Mostrar el modal de éxito\n            setShowSuccessModal(true);\n            // Limpiar los campos del formulario después de 3 segundos\n            setTimeout(()=>{\n                setShowSuccessModal(false);\n                setEmail(\"\");\n            }, 3000);\n        } catch (error) {\n            console.error(\"Subscription failed:\", error);\n            setMessage(\"There was an error subscribing. Please try again.\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"px-6 mb-20 md:mt-36\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col items-center text-white\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-3xl sm:text-4xl md:text-5xl font-semibold font-montserrat\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"block degradedBlue bg-Orange\",\n                            children: \"Newsletter\"\n                        }, void 0, false, {\n                            fileName: \"/Users/nahuelscudaletti/Documents/proedge-landing/src/components/CtaDark/CtaDark.tsx\",\n                            lineNumber: 45,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/nahuelscudaletti/Documents/proedge-landing/src/components/CtaDark/CtaDark.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"w-full mx-auto mt-5 text-base md:text-xl font-light font-montserrat tracking-wide text-center mb-10\",\n                        children: \"Receive our latest news directly in your inbox.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nahuelscudaletti/Documents/proedge-landing/src/components/CtaDark/CtaDark.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        onSubmit: handleSubmit,\n                        className: \"w-full max-w-lg\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"email\",\n                                    value: email,\n                                    onChange: (e)=>setEmail(e.target.value),\n                                    placeholder: \"Your email address\",\n                                    className: \"flex-1 px-4 py-3 rounded-l-md focus:outline-none focus:ring-2 focus:ring-OrangeRadial bg-white text-black\",\n                                    required: true\n                                }, void 0, false, {\n                                    fileName: \"/Users/nahuelscudaletti/Documents/proedge-landing/src/components/CtaDark/CtaDark.tsx\",\n                                    lineNumber: 52,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    type: \"submit\",\n                                    className: \"px-4 py-3 rounded-r-md bg-OrangeRadial text-white hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-opacity-50\",\n                                    children: \"Subscribe\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/nahuelscudaletti/Documents/proedge-landing/src/components/CtaDark/CtaDark.tsx\",\n                                    lineNumber: 60,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/nahuelscudaletti/Documents/proedge-landing/src/components/CtaDark/CtaDark.tsx\",\n                            lineNumber: 51,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/nahuelscudaletti/Documents/proedge-landing/src/components/CtaDark/CtaDark.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 17\n                    }, this),\n                    message && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"mt-2\",\n                        children: message\n                    }, void 0, false, {\n                        fileName: \"/Users/nahuelscudaletti/Documents/proedge-landing/src/components/CtaDark/CtaDark.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 29\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nahuelscudaletti/Documents/proedge-landing/src/components/CtaDark/CtaDark.tsx\",\n                lineNumber: 43,\n                columnNumber: 13\n            }, this),\n            showSuccessModal && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"bg-green-500 p-8 rounded shadow-lg text-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-lg font-semibold mb-2\",\n                            children: \"Subscription Successful!\"\n                        }, void 0, false, {\n                            fileName: \"/Users/nahuelscudaletti/Documents/proedge-landing/src/components/CtaDark/CtaDark.tsx\",\n                            lineNumber: 74,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"You will receive our latest news shortly.\"\n                        }, void 0, false, {\n                            fileName: \"/Users/nahuelscudaletti/Documents/proedge-landing/src/components/CtaDark/CtaDark.tsx\",\n                            lineNumber: 75,\n                            columnNumber: 25\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/nahuelscudaletti/Documents/proedge-landing/src/components/CtaDark/CtaDark.tsx\",\n                    lineNumber: 73,\n                    columnNumber: 21\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/nahuelscudaletti/Documents/proedge-landing/src/components/CtaDark/CtaDark.tsx\",\n                lineNumber: 72,\n                columnNumber: 17\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nahuelscudaletti/Documents/proedge-landing/src/components/CtaDark/CtaDark.tsx\",\n        lineNumber: 42,\n        columnNumber: 9\n    }, this);\n}\n_s(CtaDark, \"+FKv9jUBqIgHFk8c3Hc9MjH6oWc=\");\n_c = CtaDark;\nvar _c;\n$RefreshReg$(_c, \"CtaDark\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0N0YURhcmsvQ3RhRGFyay50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQTRDO0FBRXJDLFNBQVNDOztJQUNaLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHSCwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNJLFNBQVNDLFdBQVcsR0FBR0wsK0NBQVFBLENBQUM7SUFDdkMsTUFBTSxDQUFDTSxrQkFBa0JDLG9CQUFvQixHQUFHUCwrQ0FBUUEsQ0FBQztJQUV6RCxNQUFNUSxlQUFlLE9BQU9DO1FBQ3hCQSxFQUFFQyxjQUFjO1FBRWhCLElBQUk7WUFDQSxNQUFNQyxXQUFXLE1BQU1DLE1BQU0saUNBQWlDO2dCQUMxREMsUUFBUTtnQkFDUkMsU0FBUztvQkFDTCxnQkFBZ0I7Z0JBQ3BCO2dCQUNBQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7b0JBQUVmO2dCQUFNO1lBQ2pDO1lBRUEsSUFBSSxDQUFDUyxTQUFTTyxFQUFFLEVBQUU7Z0JBQ2QsTUFBTSxJQUFJQyxNQUFNO1lBQ3BCO1lBRUEsTUFBTUMsU0FBUyxNQUFNVCxTQUFTVSxJQUFJO1lBQ2xDQyxRQUFRQyxHQUFHLENBQUMsMkJBQTJCSDtZQUV2Qyw0QkFBNEI7WUFDNUJiLG9CQUFvQjtZQUVwQiwwREFBMEQ7WUFDMURpQixXQUFXO2dCQUNQakIsb0JBQW9CO2dCQUNwQkosU0FBUztZQUNiLEdBQUc7UUFDUCxFQUFFLE9BQU9zQixPQUFPO1lBQ1pILFFBQVFHLEtBQUssQ0FBQyx3QkFBd0JBO1lBQ3RDcEIsV0FBVztRQUNmO0lBQ0o7SUFFQSxxQkFDSSw4REFBQ3FCO1FBQUlDLFdBQVU7OzBCQUNYLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ1gsOERBQUNDO3dCQUFHRCxXQUFVO2tDQUNWLDRFQUFDRTs0QkFBS0YsV0FBVTtzQ0FBK0I7Ozs7Ozs7Ozs7O2tDQUVuRCw4REFBQ0c7d0JBQUVILFdBQVU7a0NBQXNHOzs7Ozs7a0NBR25ILDhEQUFDSTt3QkFBS0MsVUFBVXhCO3dCQUFjbUIsV0FBVTtrQ0FDcEMsNEVBQUNEOzRCQUFJQyxXQUFVOzs4Q0FDWCw4REFBQ007b0NBQ0dDLE1BQUs7b0NBQ0xDLE9BQU9qQztvQ0FDUGtDLFVBQVUsQ0FBQzNCLElBQU1OLFNBQVNNLEVBQUU0QixNQUFNLENBQUNGLEtBQUs7b0NBQ3hDRyxhQUFZO29DQUNaWCxXQUFVO29DQUNWWSxRQUFROzs7Ozs7OENBRVosOERBQUNDO29DQUNHTixNQUFLO29DQUNMUCxXQUFVOzhDQUNiOzs7Ozs7Ozs7Ozs7Ozs7OztvQkFLUnZCLHlCQUFXLDhEQUFDMEI7d0JBQUVILFdBQVU7a0NBQVF2Qjs7Ozs7Ozs7Ozs7O1lBR3BDRSxrQ0FDRyw4REFBQ29CO2dCQUFJQyxXQUFVOzBCQUNYLDRFQUFDRDtvQkFBSUMsV0FBVTs7c0NBQ1gsOERBQUNHOzRCQUFFSCxXQUFVO3NDQUE2Qjs7Ozs7O3NDQUMxQyw4REFBQ0c7c0NBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTTNCO0dBOUVnQjdCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0N0YURhcmsvQ3RhRGFyay50c3g/MTMyYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgRm9ybUV2ZW50IH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZnVuY3Rpb24gQ3RhRGFyaygpIHtcbiAgICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW3Nob3dTdWNjZXNzTW9kYWwsIHNldFNob3dTdWNjZXNzTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGU6IEZvcm1FdmVudDxIVE1MRm9ybUVsZW1lbnQ+KSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnLy5uZXRsaWZ5L2Z1bmN0aW9ucy9zdWJzY3JpYmUnLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBlbWFpbCB9KSxcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOZXR3b3JrIHJlc3BvbnNlIHdhcyBub3Qgb2snKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1N1YnNjcmlwdGlvbiBzdWNjZXNzZnVsJywgcmVzdWx0KTtcblxuICAgICAgICAgICAgLy8gTW9zdHJhciBlbCBtb2RhbCBkZSDDqXhpdG9cbiAgICAgICAgICAgIHNldFNob3dTdWNjZXNzTW9kYWwodHJ1ZSk7XG5cbiAgICAgICAgICAgIC8vIExpbXBpYXIgbG9zIGNhbXBvcyBkZWwgZm9ybXVsYXJpbyBkZXNwdcOpcyBkZSAzIHNlZ3VuZG9zXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRTaG93U3VjY2Vzc01vZGFsKGZhbHNlKTtcbiAgICAgICAgICAgICAgICBzZXRFbWFpbCgnJyk7XG4gICAgICAgICAgICB9LCAzMDAwKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1N1YnNjcmlwdGlvbiBmYWlsZWQ6JywgZXJyb3IpO1xuICAgICAgICAgICAgc2V0TWVzc2FnZSgnVGhlcmUgd2FzIGFuIGVycm9yIHN1YnNjcmliaW5nLiBQbGVhc2UgdHJ5IGFnYWluLicpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtNiBtYi0yMCBtZDptdC0zNlwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciB0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtM3hsIHNtOnRleHQtNHhsIG1kOnRleHQtNXhsIGZvbnQtc2VtaWJvbGQgZm9udC1tb250c2VycmF0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJsb2NrIGRlZ3JhZGVkQmx1ZSBiZy1PcmFuZ2VcIj5OZXdzbGV0dGVyPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidy1mdWxsIG14LWF1dG8gbXQtNSB0ZXh0LWJhc2UgbWQ6dGV4dC14bCBmb250LWxpZ2h0IGZvbnQtbW9udHNlcnJhdCB0cmFja2luZy13aWRlIHRleHQtY2VudGVyIG1iLTEwXCI+XG4gICAgICAgICAgICAgICAgICAgIFJlY2VpdmUgb3VyIGxhdGVzdCBuZXdzIGRpcmVjdGx5IGluIHlvdXIgaW5ib3guXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT1cInctZnVsbCBtYXgtdy1sZ1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiWW91ciBlbWFpbCBhZGRyZXNzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4LTEgcHgtNCBweS0zIHJvdW5kZWQtbC1tZCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctT3JhbmdlUmFkaWFsIGJnLXdoaXRlIHRleHQtYmxhY2tcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTQgcHktMyByb3VuZGVkLXItbWQgYmctT3JhbmdlUmFkaWFsIHRleHQtd2hpdGUgaG92ZXI6Ymctb3BhY2l0eS04MCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctb3BhY2l0eS01MFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU3Vic2NyaWJlXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgIHttZXNzYWdlICYmIDxwIGNsYXNzTmFtZT1cIm10LTJcIj57bWVzc2FnZX08L3A+fVxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIHtzaG93U3VjY2Vzc01vZGFsICYmIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpeGVkIHRvcC0wIGxlZnQtMCB3LWZ1bGwgaC1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGJnLWJsYWNrIGJnLW9wYWNpdHktNTAgei01MFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWdyZWVuLTUwMCBwLTggcm91bmRlZCBzaGFkb3ctbGcgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1zZW1pYm9sZCBtYi0yXCI+U3Vic2NyaXB0aW9uIFN1Y2Nlc3NmdWwhPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+WW91IHdpbGwgcmVjZWl2ZSBvdXIgbGF0ZXN0IG5ld3Mgc2hvcnRseS48L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkN0YURhcmsiLCJlbWFpbCIsInNldEVtYWlsIiwibWVzc2FnZSIsInNldE1lc3NhZ2UiLCJzaG93U3VjY2Vzc01vZGFsIiwic2V0U2hvd1N1Y2Nlc3NNb2RhbCIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJvayIsIkVycm9yIiwicmVzdWx0IiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJzZXRUaW1lb3V0IiwiZXJyb3IiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsInNwYW4iLCJwIiwiZm9ybSIsIm9uU3VibWl0IiwiaW5wdXQiLCJ0eXBlIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsInBsYWNlaG9sZGVyIiwicmVxdWlyZWQiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/CtaDark/CtaDark.tsx\n"));

/***/ })

});