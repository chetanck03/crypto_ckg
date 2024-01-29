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

/***/ "./context/context.js":
/*!****************************!*\
  !*** ./context/context.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CONTEXT: function() { return /* binding */ CONTEXT; },\n/* harmony export */   PROVIDER: function() { return /* binding */ PROVIDER; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n// Internal Import\nconst CONTEXT = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createContext();\nconst PROVIDER = (param)=>{\n    let { children } = param;\n    _s();\n    const TRADING_BOT = \"Trading Bot\";\n    const [topTokens, setTopTokens] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [tradingCount, setTradingCount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [loader, setLoader] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    let length;\n    // Load\n    const LOAD_INITIAL_DATA = async ()=>{\n        try {\n            const URL = \"https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v3\";\n            const query = \"\\n            {\\n                tokens(orderBy: volumeUSD, orderDirection: desc, first:20){\\n                    id\\n                    name\\n                    symbol\\n                    decimals\\n                    volume\\n                    volumeUSD\\n                    totalSupply\\n                    feesUSD\\n                    txCount\\n                    poolCount\\n                    totalValueLockedUSD\\n                    totlaValueLocked\\n                    derivedETH\\n                }\\n            }\";\n            const axiosData = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(URL, {\n                query: query\n            });\n            setTopTokens(axiosData.data.data.tokens);\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        LOAD_INITIAL_DATA;\n    }, []);\n    // Buy\n    const buyTokens = async ()=>{\n        try {} catch (error) {\n            console.log(error);\n        }\n    };\n    // sellTokens\n    const sellTokens = async ()=>{\n        try {} catch (error) {\n            console.log(error);\n        }\n    };\n    // Trading\n    const trading = async ()=>{\n        try {} catch (error) {\n            console.log(error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CONTEXT.Provider, {\n        value: {\n            TRADING_BOT,\n            topTokens,\n            trading\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ComHuT\\\\Desktop\\\\crypto_ckg\\\\context\\\\context.js\",\n        lineNumber: 79,\n        columnNumber: 13\n    }, undefined);\n    ;\n};\n_s(PROVIDER, \"Kyxx0plWGSnmIg4VYPQ+M+u3YW0=\");\n_c = PROVIDER;\nvar _c;\n$RefreshReg$(_c, \"PROVIDER\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L2NvbnRleHQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ25CO0FBQ047QUFFMUIsa0JBQWtCO0FBQ1gsTUFBTUssd0JBQVVMLDBEQUFtQixHQUFHO0FBRXRDLE1BQU1PLFdBQVc7UUFBQyxFQUFFQyxRQUFRLEVBQUU7O0lBQ2pDLE1BQU1DLGNBQWM7SUFDcEIsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdWLCtDQUFRQSxDQUFDLEVBQUU7SUFDN0MsTUFBTSxDQUFDVyxjQUFjQyxnQkFBZ0IsR0FBR1osK0NBQVFBLENBQUM7SUFDakQsTUFBTSxDQUFDYSxRQUFRQyxVQUFVLEdBQUdkLCtDQUFRQSxDQUFDO0lBRXJDLElBQUllO0lBRUosT0FBTztJQUNQLE1BQU1DLG9CQUFvQjtRQUN0QixJQUFJO1lBQ0EsTUFBTUMsTUFBTTtZQUNaLE1BQU1DLFFBQVM7WUFrQmYsTUFBTUMsWUFBWSxNQUFNaEIsa0RBQVUsQ0FBQ2MsS0FBSztnQkFBRUMsT0FBT0E7WUFBTTtZQUN2RFIsYUFBYVMsVUFBVUUsSUFBSSxDQUFDQSxJQUFJLENBQUNDLE1BQU07UUFDM0MsRUFBRSxPQUFPQyxPQUFPO1lBQ1pDLFFBQVFDLEdBQUcsQ0FBQ0Y7UUFDaEI7SUFDSjtJQUVBdEIsZ0RBQVNBLENBQUM7UUFDTmU7SUFDSixHQUFFLEVBQUU7SUFFSixNQUFNO0lBQ04sTUFBTVUsWUFBWTtRQUNkLElBQUksQ0FFSixFQUFFLE9BQU9ILE9BQU87WUFDWkMsUUFBUUMsR0FBRyxDQUFDRjtRQUVoQjtJQUNKO0lBRUEsYUFBYTtJQUNiLE1BQU1JLGFBQWE7UUFDZixJQUFJLENBRUosRUFBRSxPQUFPSixPQUFPO1lBQ1pDLFFBQVFDLEdBQUcsQ0FBQ0Y7UUFFaEI7SUFDSjtJQUVBLFVBQVU7SUFDVixNQUFNSyxVQUFVO1FBQ1osSUFBSSxDQUVKLEVBQUUsT0FBT0wsT0FBTztZQUNaQyxRQUFRQyxHQUFHLENBQUNGO1FBRWhCO0lBQ0o7SUFFQSxxQkFBUSw4REFBQ25CLFFBQVF5QixRQUFRO1FBQ3JCQyxPQUFPO1lBQUV0QjtZQUFhQztZQUFXbUI7UUFBUztrQkFDNUNyQjs7Ozs7OztBQUVMLEVBQUM7R0EzRVdEO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbnRleHQvY29udGV4dC5qcz83MmViIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGV0aGVycyB9IGZyb20gXCJldGhlcnNcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuLy8gSW50ZXJuYWwgSW1wb3J0XHJcbmV4cG9ydCBjb25zdCBDT05URVhUID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuZXhwb3J0IGNvbnN0IFBST1ZJREVSID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gICAgY29uc3QgVFJBRElOR19CT1QgPSBcIlRyYWRpbmcgQm90XCI7XHJcbiAgICBjb25zdCBbdG9wVG9rZW5zLCBzZXRUb3BUb2tlbnNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW3RyYWRpbmdDb3VudCwgc2V0VHJhZGluZ0NvdW50XSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW2xvYWRlciwgc2V0TG9hZGVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBsZXQgbGVuZ3RoO1xyXG5cclxuICAgIC8vIExvYWRcclxuICAgIGNvbnN0IExPQURfSU5JVElBTF9EQVRBID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IFVSTCA9IFwiaHR0cHM6Ly9hcGkudGhlZ3JhcGguY29tL3N1YmdyYXBocy9uYW1lL3VuaXN3YXAvdW5pc3dhcC12M1wiO1xyXG4gICAgICAgICAgICBjb25zdCBxdWVyeSA9IGBcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdG9rZW5zKG9yZGVyQnk6IHZvbHVtZVVTRCwgb3JkZXJEaXJlY3Rpb246IGRlc2MsIGZpcnN0OjIwKXtcclxuICAgICAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgICAgICAgICBzeW1ib2xcclxuICAgICAgICAgICAgICAgICAgICBkZWNpbWFsc1xyXG4gICAgICAgICAgICAgICAgICAgIHZvbHVtZVxyXG4gICAgICAgICAgICAgICAgICAgIHZvbHVtZVVTRFxyXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsU3VwcGx5XHJcbiAgICAgICAgICAgICAgICAgICAgZmVlc1VTRFxyXG4gICAgICAgICAgICAgICAgICAgIHR4Q291bnRcclxuICAgICAgICAgICAgICAgICAgICBwb29sQ291bnRcclxuICAgICAgICAgICAgICAgICAgICB0b3RhbFZhbHVlTG9ja2VkVVNEXHJcbiAgICAgICAgICAgICAgICAgICAgdG90bGFWYWx1ZUxvY2tlZFxyXG4gICAgICAgICAgICAgICAgICAgIGRlcml2ZWRFVEhcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfWA7XHJcbiAgICAgICAgICAgIGNvbnN0IGF4aW9zRGF0YSA9IGF3YWl0IGF4aW9zLnBvc3QoVVJMLCB7IHF1ZXJ5OiBxdWVyeSB9KTtcclxuICAgICAgICAgICAgc2V0VG9wVG9rZW5zKGF4aW9zRGF0YS5kYXRhLmRhdGEudG9rZW5zKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIExPQURfSU5JVElBTF9EQVRBXHJcbiAgICB9LFtdKTtcclxuXHJcbiAgICAvLyBCdXlcclxuICAgIGNvbnN0IGJ1eVRva2VucyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICB0cnkge1xyXG5cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBzZWxsVG9rZW5zXHJcbiAgICBjb25zdCBzZWxsVG9rZW5zID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcblxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIFRyYWRpbmdcclxuICAgIGNvbnN0IHRyYWRpbmcgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcblxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuICg8Q09OVEVYVC5Qcm92aWRlclxyXG4gICAgICAgIHZhbHVlPXt7IFRSQURJTkdfQk9ULCB0b3BUb2tlbnMsIHRyYWRpbmcsIH19XHJcbiAgICA+e2NoaWxkcmVufTwvQ09OVEVYVC5Qcm92aWRlcj5cclxuICAgICk7XHJcbjt9Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJldGhlcnMiLCJheGlvcyIsIkNPTlRFWFQiLCJjcmVhdGVDb250ZXh0IiwiUFJPVklERVIiLCJjaGlsZHJlbiIsIlRSQURJTkdfQk9UIiwidG9wVG9rZW5zIiwic2V0VG9wVG9rZW5zIiwidHJhZGluZ0NvdW50Iiwic2V0VHJhZGluZ0NvdW50IiwibG9hZGVyIiwic2V0TG9hZGVyIiwibGVuZ3RoIiwiTE9BRF9JTklUSUFMX0RBVEEiLCJVUkwiLCJxdWVyeSIsImF4aW9zRGF0YSIsInBvc3QiLCJkYXRhIiwidG9rZW5zIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiYnV5VG9rZW5zIiwic2VsbFRva2VucyIsInRyYWRpbmciLCJQcm92aWRlciIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./context/context.js\n"));

/***/ })

});