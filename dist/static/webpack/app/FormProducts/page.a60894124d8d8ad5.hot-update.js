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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ FormProducts; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/utils */ \"(app-pages-browser)/./src/utils/utils.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction FormProducts() {\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const searchParams = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useSearchParams)();\n    const title = searchParams.get(\"title\");\n    const description2 = searchParams.get(\"description2\");\n    // Separate the description2 text by periods and convert it into paragraphs\n    const descriptionParagraphs = description2 ? description2.split(\". \").map((paragraph, index, array)=>{\n        // Add the final period only if it is not the last paragraph\n        const paragraphWithPeriod = index < array.length - 1 ? \"\".concat(paragraph, \".\") : paragraph;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            className: \"text-base md:text-lg mb-4\",\n            children: paragraphWithPeriod\n        }, index, false, {\n            fileName: \"/Users/nahuelscudaletti/Documents/proedge-landing/src/app/FormProducts/page.tsx\",\n            lineNumber: 16,\n            columnNumber: 20\n        }, this);\n    }) : null;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col items-center justify-center p-4 bg-gray-900 text-white bg-cover bg-center\",\n        style: {\n            backgroundImage: \"url(\".concat((0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.getBasePath)(), \"/assets/gradient2.png)\")\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full max-w-7xl flex flex-col md:flex-row items-center justify-between\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full md:w-1/2 mb-8 md:mb-0 md:pr-8\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-3xl md:text-4xl font-semibold mb-4\",\n                                children: title\n                            }, void 0, false, {\n                                fileName: \"/Users/nahuelscudaletti/Documents/proedge-landing/src/app/FormProducts/page.tsx\",\n                                lineNumber: 24,\n                                columnNumber: 21\n                            }, this),\n                            descriptionParagraphs\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nahuelscudaletti/Documents/proedge-landing/src/app/FormProducts/page.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full md:w-1/2 flex flex-col items-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"iframe\", {\n                            width: \"100%\",\n                            height: \"100%\",\n                            src: \"https://c80e6f6d.sibforms.com/serve/MUIFAPmiQrSmWX1-GjvkFS9GKLvk56Z6vqC8Io0-PQ_ysIyGN2-8oz_7LbIBsy3-fr7QaWwH-nx-lIHwFyW5oA-rq3eUvWpRIjKMK9tG6VjTzNucqoF3ujhTiUkk5aZE771TOnTYBzZVAVR-nuQzTR7uihqpw9e7VZ99fey-U6Zh95DPgbiZ8vdAMOaHNq4bkHLrVWcle0cGrnY1\",\n                            frameBorder: \"0\",\n                            scrolling: \"no\",\n                            allowFullScreen: true,\n                            style: {\n                                display: \"block\",\n                                width: \"100%\",\n                                height: \"100vh\",\n                                maxWidth: \"100%\"\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/nahuelscudaletti/Documents/proedge-landing/src/app/FormProducts/page.tsx\",\n                            lineNumber: 28,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/nahuelscudaletti/Documents/proedge-landing/src/app/FormProducts/page.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nahuelscudaletti/Documents/proedge-landing/src/app/FormProducts/page.tsx\",\n                lineNumber: 22,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>router.back(),\n                className: \"mt-20 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline\",\n                children: \"Go Back\"\n            }, void 0, false, {\n                fileName: \"/Users/nahuelscudaletti/Documents/proedge-landing/src/app/FormProducts/page.tsx\",\n                lineNumber: 39,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nahuelscudaletti/Documents/proedge-landing/src/app/FormProducts/page.tsx\",\n        lineNumber: 21,\n        columnNumber: 9\n    }, this);\n}\n_s(FormProducts, \"A57ZQKsSKoH4xi482IWIv7kTTfs=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useSearchParams\n    ];\n});\n_c = FormProducts;\nvar _c;\n$RefreshReg$(_c, \"FormProducts\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvRm9ybVByb2R1Y3RzL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDNEM7QUFDaUI7QUFFOUMsU0FBU0c7O0lBQ3BCLE1BQU1DLFNBQVNILDBEQUFTQTtJQUN4QixNQUFNSSxlQUFlSCxnRUFBZUE7SUFDcEMsTUFBTUksUUFBUUQsYUFBYUUsR0FBRyxDQUFDO0lBQy9CLE1BQU1DLGVBQWVILGFBQWFFLEdBQUcsQ0FBQztJQUV0QywyRUFBMkU7SUFDM0UsTUFBTUUsd0JBQXdCRCxlQUN4QkEsYUFBYUUsS0FBSyxDQUFDLE1BQU1DLEdBQUcsQ0FBQyxDQUFDQyxXQUFXQyxPQUFPQztRQUM5Qyw0REFBNEQ7UUFDNUQsTUFBTUMsc0JBQXNCRixRQUFRQyxNQUFNRSxNQUFNLEdBQUcsSUFBSSxHQUFhLE9BQVZKLFdBQVUsT0FBS0E7UUFDekUscUJBQU8sOERBQUNLO1lBQWNDLFdBQVU7c0JBQTZCSDtXQUE5Q0Y7Ozs7O0lBQ25CLEtBQ0U7SUFFTixxQkFDSSw4REFBQ007UUFBSUQsV0FBVTtRQUEwRkUsT0FBTztZQUFFQyxpQkFBaUIsT0FBcUIsT0FBZHJCLHlEQUFXQSxJQUFHO1FBQXdCOzswQkFDNUssOERBQUNtQjtnQkFBSUQsV0FBVTs7a0NBQ1gsOERBQUNDO3dCQUFJRCxXQUFVOzswQ0FDWCw4REFBQ0k7Z0NBQUdKLFdBQVU7MENBQTJDWjs7Ozs7OzRCQUN4REc7Ozs7Ozs7a0NBRUwsOERBQUNVO3dCQUFJRCxXQUFVO2tDQUNYLDRFQUFDSzs0QkFDR0MsT0FBTTs0QkFDTkMsUUFBTzs0QkFDUEMsS0FBSTs0QkFDSkMsYUFBWTs0QkFDWkMsV0FBVTs0QkFDVkMsZUFBZTs0QkFDZlQsT0FBTztnQ0FBRVUsU0FBUztnQ0FBU04sT0FBTztnQ0FBUUMsUUFBUTtnQ0FBU00sVUFBVTs0QkFBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSXhGLDhEQUFDQztnQkFDR0MsU0FBUyxJQUFNN0IsT0FBTzhCLElBQUk7Z0JBQzFCaEIsV0FBVTswQkFDYjs7Ozs7Ozs7Ozs7O0FBS2I7R0ExQ3dCZjs7UUFDTEYsc0RBQVNBO1FBQ0hDLDREQUFlQTs7O0tBRmhCQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL0Zvcm1Qcm9kdWN0cy9wYWdlLnRzeD9lODBjIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IHsgZ2V0QmFzZVBhdGggfSBmcm9tICdAL3V0aWxzL3V0aWxzJztcbmltcG9ydCB7IHVzZVJvdXRlciwgdXNlU2VhcmNoUGFyYW1zIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9ybVByb2R1Y3RzKCkge1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICAgIGNvbnN0IHNlYXJjaFBhcmFtcyA9IHVzZVNlYXJjaFBhcmFtcygpO1xuICAgIGNvbnN0IHRpdGxlID0gc2VhcmNoUGFyYW1zLmdldCgndGl0bGUnKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbjIgPSBzZWFyY2hQYXJhbXMuZ2V0KCdkZXNjcmlwdGlvbjInKTtcblxuICAgIC8vIFNlcGFyYXRlIHRoZSBkZXNjcmlwdGlvbjIgdGV4dCBieSBwZXJpb2RzIGFuZCBjb252ZXJ0IGl0IGludG8gcGFyYWdyYXBoc1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uUGFyYWdyYXBocyA9IGRlc2NyaXB0aW9uMlxuICAgICAgICA/IGRlc2NyaXB0aW9uMi5zcGxpdCgnLiAnKS5tYXAoKHBhcmFncmFwaCwgaW5kZXgsIGFycmF5KSA9PiB7XG4gICAgICAgICAgICAvLyBBZGQgdGhlIGZpbmFsIHBlcmlvZCBvbmx5IGlmIGl0IGlzIG5vdCB0aGUgbGFzdCBwYXJhZ3JhcGhcbiAgICAgICAgICAgIGNvbnN0IHBhcmFncmFwaFdpdGhQZXJpb2QgPSBpbmRleCA8IGFycmF5Lmxlbmd0aCAtIDEgPyBgJHtwYXJhZ3JhcGh9LmAgOiBwYXJhZ3JhcGg7XG4gICAgICAgICAgICByZXR1cm4gPHAga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwidGV4dC1iYXNlIG1kOnRleHQtbGcgbWItNFwiPntwYXJhZ3JhcGhXaXRoUGVyaW9kfTwvcD47XG4gICAgICAgIH0pXG4gICAgICAgIDogbnVsbDtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcC00IGJnLWdyYXktOTAwIHRleHQtd2hpdGUgYmctY292ZXIgYmctY2VudGVyXCIgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7Z2V0QmFzZVBhdGgoKX0vYXNzZXRzL2dyYWRpZW50Mi5wbmcpYCB9fT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1heC13LTd4bCBmbGV4IGZsZXgtY29sIG1kOmZsZXgtcm93IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtZDp3LTEvMiBtYi04IG1kOm1iLTAgbWQ6cHItOFwiPlxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0zeGwgbWQ6dGV4dC00eGwgZm9udC1zZW1pYm9sZCBtYi00XCI+e3RpdGxlfTwvaDE+XG4gICAgICAgICAgICAgICAgICAgIHtkZXNjcmlwdGlvblBhcmFncmFwaHN9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWQ6dy0xLzIgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGlmcmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjEwMCVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9jODBlNmY2ZC5zaWJmb3Jtcy5jb20vc2VydmUvTVVJRkFQbWlRclNtV1gxLUdqdmtGUzlHS0x2azU2WjZ2cUM4SW8wLVBRX3lzSXlHTjItOG96XzdMYklCc3kzLWZyN1FhV3dILW54LWxJSHdGeVc1b0EtcnEzZVV2V3BSSWpLTUs5dEc2VmpUek51Y3FvRjN1amhUaVVrazVhWkU3NzFUT25UWUJ6WlZBVlItbnVRelRSN3VpaHFwdzllN1ZaOTlmZXktVTZaaDk1RFBnYmlaOHZkQU1PYUhOcTRia0hMclZXY2xlMGNHcm5ZMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBmcmFtZUJvcmRlcj1cIjBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsaW5nPVwibm9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgYWxsb3dGdWxsU2NyZWVuXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiAnYmxvY2snLCB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICcxMDB2aCcsIG1heFdpZHRoOiAnMTAwJScgfX1cbiAgICAgICAgICAgICAgICAgICAgPjwvaWZyYW1lPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcm91dGVyLmJhY2soKX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtdC0yMCBiZy1ncmF5LTUwMCBob3ZlcjpiZy1ncmF5LTcwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIHB4LTQgcm91bmRlZCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmVcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIEdvIEJhY2tcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuIl0sIm5hbWVzIjpbImdldEJhc2VQYXRoIiwidXNlUm91dGVyIiwidXNlU2VhcmNoUGFyYW1zIiwiRm9ybVByb2R1Y3RzIiwicm91dGVyIiwic2VhcmNoUGFyYW1zIiwidGl0bGUiLCJnZXQiLCJkZXNjcmlwdGlvbjIiLCJkZXNjcmlwdGlvblBhcmFncmFwaHMiLCJzcGxpdCIsIm1hcCIsInBhcmFncmFwaCIsImluZGV4IiwiYXJyYXkiLCJwYXJhZ3JhcGhXaXRoUGVyaW9kIiwibGVuZ3RoIiwicCIsImNsYXNzTmFtZSIsImRpdiIsInN0eWxlIiwiYmFja2dyb3VuZEltYWdlIiwiaDEiLCJpZnJhbWUiLCJ3aWR0aCIsImhlaWdodCIsInNyYyIsImZyYW1lQm9yZGVyIiwic2Nyb2xsaW5nIiwiYWxsb3dGdWxsU2NyZWVuIiwiZGlzcGxheSIsIm1heFdpZHRoIiwiYnV0dG9uIiwib25DbGljayIsImJhY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/FormProducts/page.tsx\n"));

/***/ })

});