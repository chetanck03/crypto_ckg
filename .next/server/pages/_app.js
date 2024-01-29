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

/***/ "./context/context.js":
/*!****************************!*\
  !*** ./context/context.js ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CONTEXT: () => (/* binding */ CONTEXT),\n/* harmony export */   PROVIDER: () => (/* binding */ PROVIDER)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ethers */ \"ethers\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([ethers__WEBPACK_IMPORTED_MODULE_2__, axios__WEBPACK_IMPORTED_MODULE_3__]);\n([ethers__WEBPACK_IMPORTED_MODULE_2__, axios__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n// Internal Import\nconst CONTEXT = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createContext();\nconst PROVIDER = ({ children })=>{\n    const TRADING_BOT = \"Trading Bot\";\n    const [topTokens, setTopTokens] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [tradingCount, setTradingCount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [loader, setLoader] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    let length;\n    // Load\n    const LOAD_INITIAL_DATA = async ()=>{\n        try {\n            const URL = \"https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v3\";\n            const query = `\r\n            {\r\n                tokens(orderBy: volumeUSD, orderDirection: desc, first:20){\r\n                    id\r\n                    name\r\n                    symbol\r\n                    decimals\r\n                    volume\r\n                    volumeUSD\r\n                    totalSupply\r\n                    feesUSD\r\n                    txCount\r\n                    poolCount\r\n                    totalValueLockedUSD\r\n                    totalValueLocked\r\n                    derivedETH\r\n                }\r\n            }`;\n            const axiosData = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(URL, {\n                query: query\n            });\n            setTopTokens(axiosData.data.data.tokens);\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        LOAD_INITIAL_DATA;\n    }, []);\n    // Buy\n    const buyTokens = async ()=>{\n        try {} catch (error) {\n            console.log(error);\n        }\n    };\n    // sellTokens\n    const sellTokens = async ()=>{\n        try {} catch (error) {\n            console.log(error);\n        }\n    };\n    // Trading\n    const trading = async ()=>{\n        try {} catch (error) {\n            console.log(error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CONTEXT.Provider, {\n        value: {\n            TRADING_BOT,\n            topTokens,\n            trading\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ComHuT\\\\Desktop\\\\crypto_ckg\\\\context\\\\context.js\",\n        lineNumber: 79,\n        columnNumber: 13\n    }, undefined);\n    ;\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L2NvbnRleHQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ25CO0FBQ047QUFFMUIsa0JBQWtCO0FBQ1gsTUFBTUssd0JBQVVMLDBEQUFtQixHQUFHO0FBRXRDLE1BQU1PLFdBQVcsQ0FBQyxFQUFFQyxRQUFRLEVBQUU7SUFDakMsTUFBTUMsY0FBYztJQUNwQixNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR1YsK0NBQVFBLENBQUMsRUFBRTtJQUM3QyxNQUFNLENBQUNXLGNBQWNDLGdCQUFnQixHQUFHWiwrQ0FBUUEsQ0FBQztJQUNqRCxNQUFNLENBQUNhLFFBQVFDLFVBQVUsR0FBR2QsK0NBQVFBLENBQUM7SUFFckMsSUFBSWU7SUFFSixPQUFPO0lBQ1AsTUFBTUMsb0JBQW9CO1FBQ3RCLElBQUk7WUFDQSxNQUFNQyxNQUFNO1lBQ1osTUFBTUMsUUFBUSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OzthQWlCZCxDQUFDO1lBQ0YsTUFBTUMsWUFBWSxNQUFNaEIsa0RBQVUsQ0FBQ2MsS0FBSztnQkFBRUMsT0FBT0E7WUFBTTtZQUN2RFIsYUFBYVMsVUFBVUUsSUFBSSxDQUFDQSxJQUFJLENBQUNDLE1BQU07UUFDM0MsRUFBRSxPQUFPQyxPQUFPO1lBQ1pDLFFBQVFDLEdBQUcsQ0FBQ0Y7UUFDaEI7SUFDSjtJQUVBdEIsZ0RBQVNBLENBQUM7UUFDTmU7SUFDSixHQUFFLEVBQUU7SUFFSixNQUFNO0lBQ04sTUFBTVUsWUFBWTtRQUNkLElBQUksQ0FFSixFQUFFLE9BQU9ILE9BQU87WUFDWkMsUUFBUUMsR0FBRyxDQUFDRjtRQUVoQjtJQUNKO0lBRUEsYUFBYTtJQUNiLE1BQU1JLGFBQWE7UUFDZixJQUFJLENBRUosRUFBRSxPQUFPSixPQUFPO1lBQ1pDLFFBQVFDLEdBQUcsQ0FBQ0Y7UUFFaEI7SUFDSjtJQUVBLFVBQVU7SUFDVixNQUFNSyxVQUFVO1FBQ1osSUFBSSxDQUVKLEVBQUUsT0FBT0wsT0FBTztZQUNaQyxRQUFRQyxHQUFHLENBQUNGO1FBRWhCO0lBQ0o7SUFFQSxxQkFBUSw4REFBQ25CLFFBQVF5QixRQUFRO1FBQ3JCQyxPQUFPO1lBQUV0QjtZQUFhQztZQUFXbUI7UUFBUztrQkFDNUNyQjs7Ozs7OztBQUVMLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lZGl0aW5nLy4vY29udGV4dC9jb250ZXh0LmpzPzcyZWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSBcImV0aGVyc1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG4vLyBJbnRlcm5hbCBJbXBvcnRcclxuZXhwb3J0IGNvbnN0IENPTlRFWFQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KCk7XHJcblxyXG5leHBvcnQgY29uc3QgUFJPVklERVIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgICBjb25zdCBUUkFESU5HX0JPVCA9IFwiVHJhZGluZyBCb3RcIjtcclxuICAgIGNvbnN0IFt0b3BUb2tlbnMsIHNldFRvcFRva2Vuc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbdHJhZGluZ0NvdW50LCBzZXRUcmFkaW5nQ291bnRdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbbG9hZGVyLCBzZXRMb2FkZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGxldCBsZW5ndGg7XHJcblxyXG4gICAgLy8gTG9hZFxyXG4gICAgY29uc3QgTE9BRF9JTklUSUFMX0RBVEEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgVVJMID0gXCJodHRwczovL2FwaS50aGVncmFwaC5jb20vc3ViZ3JhcGhzL25hbWUvdW5pc3dhcC91bmlzd2FwLXYzXCI7XHJcbiAgICAgICAgICAgIGNvbnN0IHF1ZXJ5ID0gYFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0b2tlbnMob3JkZXJCeTogdm9sdW1lVVNELCBvcmRlckRpcmVjdGlvbjogZGVzYywgZmlyc3Q6MjApe1xyXG4gICAgICAgICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICAgICAgICAgIHN5bWJvbFxyXG4gICAgICAgICAgICAgICAgICAgIGRlY2ltYWxzXHJcbiAgICAgICAgICAgICAgICAgICAgdm9sdW1lXHJcbiAgICAgICAgICAgICAgICAgICAgdm9sdW1lVVNEXHJcbiAgICAgICAgICAgICAgICAgICAgdG90YWxTdXBwbHlcclxuICAgICAgICAgICAgICAgICAgICBmZWVzVVNEXHJcbiAgICAgICAgICAgICAgICAgICAgdHhDb3VudFxyXG4gICAgICAgICAgICAgICAgICAgIHBvb2xDb3VudFxyXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsVmFsdWVMb2NrZWRVU0RcclxuICAgICAgICAgICAgICAgICAgICB0b3RhbFZhbHVlTG9ja2VkXHJcbiAgICAgICAgICAgICAgICAgICAgZGVyaXZlZEVUSFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9YDtcclxuICAgICAgICAgICAgY29uc3QgYXhpb3NEYXRhID0gYXdhaXQgYXhpb3MucG9zdChVUkwsIHsgcXVlcnk6IHF1ZXJ5IH0pO1xyXG4gICAgICAgICAgICBzZXRUb3BUb2tlbnMoYXhpb3NEYXRhLmRhdGEuZGF0YS50b2tlbnMpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgTE9BRF9JTklUSUFMX0RBVEFcclxuICAgIH0sW10pO1xyXG5cclxuICAgIC8vIEJ1eVxyXG4gICAgY29uc3QgYnV5VG9rZW5zID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcblxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIHNlbGxUb2tlbnNcclxuICAgIGNvbnN0IHNlbGxUb2tlbnMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcblxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLy8gVHJhZGluZ1xyXG4gICAgY29uc3QgdHJhZGluZyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICB0cnkge1xyXG5cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKDxDT05URVhULlByb3ZpZGVyXHJcbiAgICAgICAgdmFsdWU9e3sgVFJBRElOR19CT1QsIHRvcFRva2VucywgdHJhZGluZywgfX1cclxuICAgID57Y2hpbGRyZW59PC9DT05URVhULlByb3ZpZGVyPlxyXG4gICAgKTtcclxuO30iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImV0aGVycyIsImF4aW9zIiwiQ09OVEVYVCIsImNyZWF0ZUNvbnRleHQiLCJQUk9WSURFUiIsImNoaWxkcmVuIiwiVFJBRElOR19CT1QiLCJ0b3BUb2tlbnMiLCJzZXRUb3BUb2tlbnMiLCJ0cmFkaW5nQ291bnQiLCJzZXRUcmFkaW5nQ291bnQiLCJsb2FkZXIiLCJzZXRMb2FkZXIiLCJsZW5ndGgiLCJMT0FEX0lOSVRJQUxfREFUQSIsIlVSTCIsInF1ZXJ5IiwiYXhpb3NEYXRhIiwicG9zdCIsImRhdGEiLCJ0b2tlbnMiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJidXlUb2tlbnMiLCJzZWxsVG9rZW5zIiwidHJhZGluZyIsIlByb3ZpZGVyIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./context/context.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/context */ \"./context/context.js\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-hot-toast */ \"react-hot-toast\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_context_context__WEBPACK_IMPORTED_MODULE_2__, react_hot_toast__WEBPACK_IMPORTED_MODULE_3__]);\n([_context_context__WEBPACK_IMPORTED_MODULE_2__, react_hot_toast__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n// Internal Import\n\n\nfunction App({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_context__WEBPACK_IMPORTED_MODULE_2__.PROVIDER, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ComHuT\\\\Desktop\\\\crypto_ckg\\\\pages\\\\_app.js\",\n                    lineNumber: 11,\n                    columnNumber: 14\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ComHuT\\\\Desktop\\\\crypto_ckg\\\\pages\\\\_app.js\",\n                lineNumber: 10,\n                columnNumber: 10\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_hot_toast__WEBPACK_IMPORTED_MODULE_3__.Toaster, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ComHuT\\\\Desktop\\\\crypto_ckg\\\\pages\\\\_app.js\",\n                lineNumber: 14,\n                columnNumber: 10\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"script\", {\n                type: \"text/javascript\",\n                src: \"js/jquery.js?ver=1.0.0\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ComHuT\\\\Desktop\\\\crypto_ckg\\\\pages\\\\_app.js\",\n                lineNumber: 16,\n                columnNumber: 10\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"script\", {\n                type: \"text/javascript\",\n                src: \"js/plugins.js?ver=1.0.0\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ComHuT\\\\Desktop\\\\crypto_ckg\\\\pages\\\\_app.js\",\n                lineNumber: 17,\n                columnNumber: 10\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"script\", {\n                type: \"text/javascript\",\n                src: \"js/init.js?ver=1.0.0\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ComHuT\\\\Desktop\\\\crypto_ckg\\\\pages\\\\_app.js\",\n                lineNumber: 18,\n                columnNumber: 10\n            }, this)\n        ]\n    }, void 0, true);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStCO0FBRS9CLGtCQUFrQjtBQUN5QjtBQUNFO0FBRTlCLFNBQVNHLElBQUksRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQUU7SUFDbEQscUJBQ0U7OzBCQUNLLDhEQUFDTCxzREFBUUE7MEJBQ0wsNEVBQUNJO29CQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7OzBCQUc1Qiw4REFBQ0gsb0RBQU9BOzs7OzswQkFFUiw4REFBQ0k7Z0JBQU9DLE1BQUs7Z0JBQWtCQyxLQUFJOzs7Ozs7MEJBQ25DLDhEQUFDRjtnQkFBT0MsTUFBSztnQkFBa0JDLEtBQUk7Ozs7OzswQkFDbkMsOERBQUNGO2dCQUFPQyxNQUFLO2dCQUFrQkMsS0FBSTs7Ozs7Ozs7QUFHNUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lZGl0aW5nLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4uL3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xyXG5cclxuLy8gSW50ZXJuYWwgSW1wb3J0XHJcbmltcG9ydCB7UFJPVklERVJ9IGZyb20gXCIuLi9jb250ZXh0L2NvbnRleHRcIlxyXG5pbXBvcnQgdG9hc3Qse1RvYXN0ZXJ9IGZyb20gXCJyZWFjdC1ob3QtdG9hc3RcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICAgICA8UFJPVklERVI+XHJcbiAgICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgICAgIDwvUFJPVklERVI+XHJcblxyXG4gICAgICAgICA8VG9hc3Rlci8+XHJcblxyXG4gICAgICAgICA8c2NyaXB0IHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIiBzcmM9XCJqcy9qcXVlcnkuanM/dmVyPTEuMC4wXCI+PC9zY3JpcHQ+XHJcbiAgICAgICAgIDxzY3JpcHQgdHlwZT1cInRleHQvamF2YXNjcmlwdFwiIHNyYz1cImpzL3BsdWdpbnMuanM/dmVyPTEuMC4wXCI+PC9zY3JpcHQ+XHJcbiAgICAgICAgIDxzY3JpcHQgdHlwZT1cInRleHQvamF2YXNjcmlwdFwiIHNyYz1cImpzL2luaXQuanM/dmVyPTEuMC4wXCI+PC9zY3JpcHQ+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuIl0sIm5hbWVzIjpbIlBST1ZJREVSIiwidG9hc3QiLCJUb2FzdGVyIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwic2NyaXB0IiwidHlwZSIsInNyYyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

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

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ }),

/***/ "ethers":
/*!*************************!*\
  !*** external "ethers" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = import("ethers");;

/***/ }),

/***/ "react-hot-toast":
/*!**********************************!*\
  !*** external "react-hot-toast" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = import("react-hot-toast");;

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