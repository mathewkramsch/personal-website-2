/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/progLang/comps/lang.jsx":
/*!********************************************!*\
  !*** ./components/progLang/comps/lang.jsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Lang; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _extendedLangCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extendedLangCard */ \"./components/progLang/comps/extendedLangCard.jsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/home/mathewkramsch/Desktop/Coding/web_development/react/next_js/resume_website_2/components/progLang/comps/lang.jsx\",\n    _s = $RefreshSig$();\n\n// lang.jsx\n\n\n\n\nfunction getSkillLevelBar(skillLevel) {\n  var parentWidth = 30; // this is hardcoded\n\n  var blockWidth = parentWidth / 5; // width of a single block (in vw)\n\n  var skillLevelWidth = blockWidth * skillLevel;\n\n  var skillLevelBar = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"skillLevelBar\",\n    style: {\n      width: skillLevelWidth + 'vw'\n    }\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 11,\n    columnNumber: 25\n  }, this);\n\n  return skillLevelBar;\n}\n\nfunction simplify(text) {\n  // returns 'text' in all lowercase, no symbols\n  var newString = '';\n\n  for (var i = 0; i < text.length; i++) {\n    if (text[i].toUpperCase() !== text[i].toLowerCase()) newString += text[i].toLowerCase();\n  }\n\n  console.log(newString);\n  return newString;\n} // function extendLangCard(props) {\n//     if (props.cardView===props.langData.language) {\n//         setFocus(true);\n//         return <ExtendedLangCard langData={props.langData}/>;\n//     } else setFocus(false);\n// }\n\n\nfunction Lang(props) {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      focus = _useState[0],\n      setFocus = _useState[1];\n\n  var toggle = function toggle() {\n    props.toggleView(props.langData.language);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"progLangCard\",\n    onClick: toggle,\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"collapsedLangCard\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"language\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n          src: props.langData.iconSrc,\n          id: simplify(props.langData.language),\n          className: \"langIcons\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n          className: \"langText\",\n          children: props.langData.language\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"skillLevelOutline\",\n        children: getSkillLevelBar(props.langData.skillLevel)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 13\n    }, this), // extendLangCard(props)\n    props.cardView == props.langData.language && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_extendedLangCard__WEBPACK_IMPORTED_MODULE_2__.default, {\n      langData: props.langData\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 17\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 38,\n    columnNumber: 9\n  }, this);\n}\n\n_s(Lang, \"JcMW5INHEFpLqO0Ud660bC8g4FE=\");\n\n_c = Lang;\n\nvar _c;\n\n$RefreshReg$(_c, \"Lang\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9nTGFuZy9jb21wcy9sYW5nLmpzeD8wNTk0Il0sIm5hbWVzIjpbImdldFNraWxsTGV2ZWxCYXIiLCJza2lsbExldmVsIiwicGFyZW50V2lkdGgiLCJibG9ja1dpZHRoIiwic2tpbGxMZXZlbFdpZHRoIiwic2tpbGxMZXZlbEJhciIsIndpZHRoIiwic2ltcGxpZnkiLCJ0ZXh0IiwibmV3U3RyaW5nIiwiaSIsImxlbmd0aCIsInRvVXBwZXJDYXNlIiwidG9Mb3dlckNhc2UiLCJjb25zb2xlIiwibG9nIiwiTGFuZyIsInByb3BzIiwidXNlU3RhdGUiLCJmb2N1cyIsInNldEZvY3VzIiwidG9nZ2xlIiwidG9nZ2xlVmlldyIsImxhbmdEYXRhIiwibGFuZ3VhZ2UiLCJpY29uU3JjIiwiY2FyZFZpZXciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBOztBQUVBLFNBQVNBLGdCQUFULENBQTBCQyxVQUExQixFQUFzQztBQUNsQyxNQUFNQyxXQUFXLEdBQUcsRUFBcEIsQ0FEa0MsQ0FDVDs7QUFDekIsTUFBTUMsVUFBVSxHQUFHRCxXQUFXLEdBQUMsQ0FBL0IsQ0FGa0MsQ0FFQzs7QUFDbkMsTUFBTUUsZUFBZSxHQUFHRCxVQUFVLEdBQUNGLFVBQW5DOztBQUNBLE1BQUlJLGFBQWEsZ0JBQUc7QUFBSyxhQUFTLEVBQUMsZUFBZjtBQUErQixTQUFLLEVBQUU7QUFBQ0MsV0FBSyxFQUFDRixlQUFlLEdBQUc7QUFBekI7QUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFwQjs7QUFDQSxTQUFPQyxhQUFQO0FBQ0g7O0FBRUQsU0FBU0UsUUFBVCxDQUFrQkMsSUFBbEIsRUFBd0I7QUFDcEI7QUFDQSxNQUFJQyxTQUFTLEdBQUcsRUFBaEI7O0FBQ0EsT0FBSyxJQUFJQyxDQUFDLEdBQUMsQ0FBWCxFQUFjQSxDQUFDLEdBQUNGLElBQUksQ0FBQ0csTUFBckIsRUFBNkJELENBQUMsRUFBOUIsRUFBa0M7QUFDOUIsUUFBSUYsSUFBSSxDQUFDRSxDQUFELENBQUosQ0FBUUUsV0FBUixPQUF3QkosSUFBSSxDQUFDRSxDQUFELENBQUosQ0FBUUcsV0FBUixFQUE1QixFQUNJSixTQUFTLElBQUlELElBQUksQ0FBQ0UsQ0FBRCxDQUFKLENBQVFHLFdBQVIsRUFBYjtBQUNQOztBQUNEQyxTQUFPLENBQUNDLEdBQVIsQ0FBWU4sU0FBWjtBQUNBLFNBQU9BLFNBQVA7QUFDSCxDLENBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFZSxTQUFTTyxJQUFULENBQWNDLEtBQWQsRUFBcUI7QUFBQTs7QUFBQSxrQkFDTkMsK0NBQVEsQ0FBQyxLQUFELENBREY7QUFBQSxNQUN6QkMsS0FEeUI7QUFBQSxNQUNsQkMsUUFEa0I7O0FBRWhDLE1BQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQUk7QUFBRUosU0FBSyxDQUFDSyxVQUFOLENBQWlCTCxLQUFLLENBQUNNLFFBQU4sQ0FBZUMsUUFBaEM7QUFBNEMsR0FBakU7O0FBRUEsc0JBQ0k7QUFBSyxhQUFTLEVBQUMsY0FBZjtBQUE4QixXQUFPLEVBQUVILE1BQXZDO0FBQUEsNEJBQ0k7QUFBSyxlQUFTLEVBQUMsbUJBQWY7QUFBQSw4QkFDSTtBQUFLLGlCQUFTLEVBQUMsVUFBZjtBQUFBLGdDQUNJO0FBQUssYUFBRyxFQUFFSixLQUFLLENBQUNNLFFBQU4sQ0FBZUUsT0FBekI7QUFBa0MsWUFBRSxFQUFFbEIsUUFBUSxDQUFDVSxLQUFLLENBQUNNLFFBQU4sQ0FBZUMsUUFBaEIsQ0FBOUM7QUFDSSxtQkFBUyxFQUFDO0FBRGQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQUdJO0FBQUksbUJBQVMsRUFBQyxVQUFkO0FBQUEsb0JBQTBCUCxLQUFLLENBQUNNLFFBQU4sQ0FBZUM7QUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQU1JO0FBQUssaUJBQVMsRUFBQyxtQkFBZjtBQUFBLGtCQUNNeEIsZ0JBQWdCLENBQUNpQixLQUFLLENBQUNNLFFBQU4sQ0FBZXRCLFVBQWhCO0FBRHRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixFQVlRO0FBQ0NnQixTQUFLLENBQUNTLFFBQU4sSUFBZ0JULEtBQUssQ0FBQ00sUUFBTixDQUFlQyxRQUEvQixpQkFDRCw4REFBQyxzREFBRDtBQUFrQixjQUFRLEVBQUVQLEtBQUssQ0FBQ007QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWRSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBbUJIOztHQXZCdUJQLEk7O0tBQUFBLEkiLCJmaWxlIjoiLi9jb21wb25lbnRzL3Byb2dMYW5nL2NvbXBzL2xhbmcuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gbGFuZy5qc3hcblxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHMgZnJvbSAnLi4vLi4vLi4vc3R5bGVzL2xheW91dC9wcm9nTGFuZy5tb2R1bGUuc2NzcydcbmltcG9ydCBFeHRlbmRlZExhbmdDYXJkIGZyb20gJy4vZXh0ZW5kZWRMYW5nQ2FyZCdcblxuZnVuY3Rpb24gZ2V0U2tpbGxMZXZlbEJhcihza2lsbExldmVsKSB7XG4gICAgY29uc3QgcGFyZW50V2lkdGggPSAzMDsgIC8vIHRoaXMgaXMgaGFyZGNvZGVkXG4gICAgY29uc3QgYmxvY2tXaWR0aCA9IHBhcmVudFdpZHRoLzU7ICAvLyB3aWR0aCBvZiBhIHNpbmdsZSBibG9jayAoaW4gdncpXG4gICAgY29uc3Qgc2tpbGxMZXZlbFdpZHRoID0gYmxvY2tXaWR0aCpza2lsbExldmVsO1xuICAgIGxldCBza2lsbExldmVsQmFyID0gPGRpdiBjbGFzc05hbWU9J3NraWxsTGV2ZWxCYXInIHN0eWxlPXt7d2lkdGg6c2tpbGxMZXZlbFdpZHRoICsgJ3Z3J319PjwvZGl2PlxuICAgIHJldHVybiBza2lsbExldmVsQmFyO1xufVxuXG5mdW5jdGlvbiBzaW1wbGlmeSh0ZXh0KSB7XG4gICAgLy8gcmV0dXJucyAndGV4dCcgaW4gYWxsIGxvd2VyY2FzZSwgbm8gc3ltYm9sc1xuICAgIGxldCBuZXdTdHJpbmcgPSAnJztcbiAgICBmb3IgKGxldCBpPTA7IGk8dGV4dC5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAodGV4dFtpXS50b1VwcGVyQ2FzZSgpIT09dGV4dFtpXS50b0xvd2VyQ2FzZSgpKVxuICAgICAgICAgICAgbmV3U3RyaW5nICs9IHRleHRbaV0udG9Mb3dlckNhc2UoKTtcbiAgICB9XG4gICAgY29uc29sZS5sb2cobmV3U3RyaW5nKTtcbiAgICByZXR1cm4gbmV3U3RyaW5nO1xufVxuXG4vLyBmdW5jdGlvbiBleHRlbmRMYW5nQ2FyZChwcm9wcykge1xuLy8gICAgIGlmIChwcm9wcy5jYXJkVmlldz09PXByb3BzLmxhbmdEYXRhLmxhbmd1YWdlKSB7XG4vLyAgICAgICAgIHNldEZvY3VzKHRydWUpO1xuLy8gICAgICAgICByZXR1cm4gPEV4dGVuZGVkTGFuZ0NhcmQgbGFuZ0RhdGE9e3Byb3BzLmxhbmdEYXRhfS8+O1xuLy8gICAgIH0gZWxzZSBzZXRGb2N1cyhmYWxzZSk7XG4vLyB9XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExhbmcocHJvcHMpIHtcbiAgICBjb25zdCBbZm9jdXMsIHNldEZvY3VzXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCB0b2dnbGUgPSAoKT0+eyBwcm9wcy50b2dnbGVWaWV3KHByb3BzLmxhbmdEYXRhLmxhbmd1YWdlKTsgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Byb2dMYW5nQ2FyZCcgb25DbGljaz17dG9nZ2xlfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2xsYXBzZWRMYW5nQ2FyZCc+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xhbmd1YWdlJz5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3Byb3BzLmxhbmdEYXRhLmljb25TcmN9IGlkPXtzaW1wbGlmeShwcm9wcy5sYW5nRGF0YS5sYW5ndWFnZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2xhbmdJY29ucycvPlxuICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPSdsYW5nVGV4dCc+e3Byb3BzLmxhbmdEYXRhLmxhbmd1YWdlfTwvaDQ+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NraWxsTGV2ZWxPdXRsaW5lJz5cbiAgICAgICAgICAgICAgICAgICAgeyBnZXRTa2lsbExldmVsQmFyKHByb3BzLmxhbmdEYXRhLnNraWxsTGV2ZWwpIH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIC8vIGV4dGVuZExhbmdDYXJkKHByb3BzKVxuICAgICAgICAgICAgICAgICBwcm9wcy5jYXJkVmlldz09cHJvcHMubGFuZ0RhdGEubGFuZ3VhZ2UgJiZcbiAgICAgICAgICAgICAgICA8RXh0ZW5kZWRMYW5nQ2FyZCBsYW5nRGF0YT17cHJvcHMubGFuZ0RhdGF9Lz5cbiAgICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/progLang/comps/lang.jsx\n");

/***/ })

});