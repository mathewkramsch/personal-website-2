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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Lang; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _extendedLangCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extendedLangCard */ \"./components/progLang/comps/extendedLangCard.jsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar _jsxFileName = \"/home/mathewkramsch/Desktop/Coding/web_development/react/next_js/resume_website_2/components/progLang/comps/lang.jsx\";\n// lang.jsx\n\n\n\n\nfunction getSkillLevelBar(skillLevel) {\n  var parentWidth = 30; // this is hardcoded\n\n  var blockWidth = parentWidth / 5; // width of a single block (in vw)\n\n  var skillLevelWidth = blockWidth * skillLevel;\n\n  var skillLevelBar = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"skillLevelBar\",\n    style: {\n      width: skillLevelWidth + 'vw'\n    }\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 11,\n    columnNumber: 25\n  }, this);\n\n  return skillLevelBar;\n}\n\nfunction simplify(text) {\n  // returns 'text' in all lowercase, no symbols\n  var newString = '';\n\n  for (var i = 0; i < text.length; i++) {\n    if (text[i].toUpperCase() !== text[i].toLowerCase()) newString += text[i].toLowerCase();\n  }\n\n  console.log(newString);\n  return newString;\n}\n\nfunction extendLangCard(cardView, language) {\n  if (cardView === language) {}\n}\n\nfunction Lang(props) {\n  var toggle = function toggle() {\n    props.toggleView(props.langData.language);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"progLangCard\",\n    onClick: toggle,\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"collapsedLangCard\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"language\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n          src: props.langData.iconSrc,\n          id: simplify(props.langData.language),\n          className: \"langIcons\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n          className: \"langText\",\n          children: props.langData.language\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"skillLevelOutline\",\n        children: getSkillLevelBar(props.langData.skillLevel)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 13\n    }, this), extendLangCard(props.cardView, props.langData.language), \"//  props.cardView==props.langData.language && // \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_extendedLangCard__WEBPACK_IMPORTED_MODULE_2__.default, {\n      langData: props.langData\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 20\n    }, this), \"}\"]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 35,\n    columnNumber: 9\n  }, this);\n}\n_c = Lang;\n\nvar _c;\n\n$RefreshReg$(_c, \"Lang\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9nTGFuZy9jb21wcy9sYW5nLmpzeD8wNTk0Il0sIm5hbWVzIjpbImdldFNraWxsTGV2ZWxCYXIiLCJza2lsbExldmVsIiwicGFyZW50V2lkdGgiLCJibG9ja1dpZHRoIiwic2tpbGxMZXZlbFdpZHRoIiwic2tpbGxMZXZlbEJhciIsIndpZHRoIiwic2ltcGxpZnkiLCJ0ZXh0IiwibmV3U3RyaW5nIiwiaSIsImxlbmd0aCIsInRvVXBwZXJDYXNlIiwidG9Mb3dlckNhc2UiLCJjb25zb2xlIiwibG9nIiwiZXh0ZW5kTGFuZ0NhcmQiLCJjYXJkVmlldyIsImxhbmd1YWdlIiwiTGFuZyIsInByb3BzIiwidG9nZ2xlIiwidG9nZ2xlVmlldyIsImxhbmdEYXRhIiwiaWNvblNyYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsZ0JBQVQsQ0FBMEJDLFVBQTFCLEVBQXNDO0FBQ2xDLE1BQU1DLFdBQVcsR0FBRyxFQUFwQixDQURrQyxDQUNUOztBQUN6QixNQUFNQyxVQUFVLEdBQUdELFdBQVcsR0FBQyxDQUEvQixDQUZrQyxDQUVDOztBQUNuQyxNQUFNRSxlQUFlLEdBQUdELFVBQVUsR0FBQ0YsVUFBbkM7O0FBQ0EsTUFBSUksYUFBYSxnQkFBRztBQUFLLGFBQVMsRUFBQyxlQUFmO0FBQStCLFNBQUssRUFBRTtBQUFDQyxXQUFLLEVBQUNGLGVBQWUsR0FBRztBQUF6QjtBQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQXBCOztBQUNBLFNBQU9DLGFBQVA7QUFDSDs7QUFFRCxTQUFTRSxRQUFULENBQWtCQyxJQUFsQixFQUF3QjtBQUNwQjtBQUNBLE1BQUlDLFNBQVMsR0FBRyxFQUFoQjs7QUFDQSxPQUFLLElBQUlDLENBQUMsR0FBQyxDQUFYLEVBQWNBLENBQUMsR0FBQ0YsSUFBSSxDQUFDRyxNQUFyQixFQUE2QkQsQ0FBQyxFQUE5QixFQUFrQztBQUM5QixRQUFJRixJQUFJLENBQUNFLENBQUQsQ0FBSixDQUFRRSxXQUFSLE9BQXdCSixJQUFJLENBQUNFLENBQUQsQ0FBSixDQUFRRyxXQUFSLEVBQTVCLEVBQ0lKLFNBQVMsSUFBSUQsSUFBSSxDQUFDRSxDQUFELENBQUosQ0FBUUcsV0FBUixFQUFiO0FBQ1A7O0FBQ0RDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZTixTQUFaO0FBQ0EsU0FBT0EsU0FBUDtBQUNIOztBQUVELFNBQVNPLGNBQVQsQ0FBd0JDLFFBQXhCLEVBQWtDQyxRQUFsQyxFQUE0QztBQUN4QyxNQUFJRCxRQUFRLEtBQUdDLFFBQWYsRUFBeUIsQ0FDeEI7QUFDSjs7QUFFYyxTQUFTQyxJQUFULENBQWNDLEtBQWQsRUFBcUI7QUFDaEMsTUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBSTtBQUFFRCxTQUFLLENBQUNFLFVBQU4sQ0FBaUJGLEtBQUssQ0FBQ0csUUFBTixDQUFlTCxRQUFoQztBQUE0QyxHQUFqRTs7QUFFQSxzQkFDSTtBQUFLLGFBQVMsRUFBQyxjQUFmO0FBQThCLFdBQU8sRUFBRUcsTUFBdkM7QUFBQSw0QkFDSTtBQUFLLGVBQVMsRUFBQyxtQkFBZjtBQUFBLDhCQUNJO0FBQUssaUJBQVMsRUFBQyxVQUFmO0FBQUEsZ0NBQ0k7QUFBSyxhQUFHLEVBQUVELEtBQUssQ0FBQ0csUUFBTixDQUFlQyxPQUF6QjtBQUFrQyxZQUFFLEVBQUVqQixRQUFRLENBQUNhLEtBQUssQ0FBQ0csUUFBTixDQUFlTCxRQUFoQixDQUE5QztBQUNJLG1CQUFTLEVBQUM7QUFEZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBR0k7QUFBSSxtQkFBUyxFQUFDLFVBQWQ7QUFBQSxvQkFBMEJFLEtBQUssQ0FBQ0csUUFBTixDQUFlTDtBQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBTUk7QUFBSyxpQkFBUyxFQUFDLG1CQUFmO0FBQUEsa0JBQ01sQixnQkFBZ0IsQ0FBQ29CLEtBQUssQ0FBQ0csUUFBTixDQUFldEIsVUFBaEI7QUFEdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLEVBV01lLGNBQWMsQ0FBQ0ksS0FBSyxDQUFDSCxRQUFQLEVBQWlCRyxLQUFLLENBQUNHLFFBQU4sQ0FBZUwsUUFBaEMsQ0FYcEIscUVBYVcsOERBQUMsc0RBQUQ7QUFBa0IsY0FBUSxFQUFFRSxLQUFLLENBQUNHO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFiWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQWtCSDtLQXJCdUJKLEkiLCJmaWxlIjoiLi9jb21wb25lbnRzL3Byb2dMYW5nL2NvbXBzL2xhbmcuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gbGFuZy5qc3hcblxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHMgZnJvbSAnLi4vLi4vLi4vc3R5bGVzL2xheW91dC9wcm9nTGFuZy5tb2R1bGUuc2NzcydcbmltcG9ydCBFeHRlbmRlZExhbmdDYXJkIGZyb20gJy4vZXh0ZW5kZWRMYW5nQ2FyZCdcblxuZnVuY3Rpb24gZ2V0U2tpbGxMZXZlbEJhcihza2lsbExldmVsKSB7XG4gICAgY29uc3QgcGFyZW50V2lkdGggPSAzMDsgIC8vIHRoaXMgaXMgaGFyZGNvZGVkXG4gICAgY29uc3QgYmxvY2tXaWR0aCA9IHBhcmVudFdpZHRoLzU7ICAvLyB3aWR0aCBvZiBhIHNpbmdsZSBibG9jayAoaW4gdncpXG4gICAgY29uc3Qgc2tpbGxMZXZlbFdpZHRoID0gYmxvY2tXaWR0aCpza2lsbExldmVsO1xuICAgIGxldCBza2lsbExldmVsQmFyID0gPGRpdiBjbGFzc05hbWU9J3NraWxsTGV2ZWxCYXInIHN0eWxlPXt7d2lkdGg6c2tpbGxMZXZlbFdpZHRoICsgJ3Z3J319PjwvZGl2PlxuICAgIHJldHVybiBza2lsbExldmVsQmFyO1xufVxuXG5mdW5jdGlvbiBzaW1wbGlmeSh0ZXh0KSB7XG4gICAgLy8gcmV0dXJucyAndGV4dCcgaW4gYWxsIGxvd2VyY2FzZSwgbm8gc3ltYm9sc1xuICAgIGxldCBuZXdTdHJpbmcgPSAnJztcbiAgICBmb3IgKGxldCBpPTA7IGk8dGV4dC5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAodGV4dFtpXS50b1VwcGVyQ2FzZSgpIT09dGV4dFtpXS50b0xvd2VyQ2FzZSgpKVxuICAgICAgICAgICAgbmV3U3RyaW5nICs9IHRleHRbaV0udG9Mb3dlckNhc2UoKTtcbiAgICB9XG4gICAgY29uc29sZS5sb2cobmV3U3RyaW5nKTtcbiAgICByZXR1cm4gbmV3U3RyaW5nO1xufVxuXG5mdW5jdGlvbiBleHRlbmRMYW5nQ2FyZChjYXJkVmlldywgbGFuZ3VhZ2UpIHtcbiAgICBpZiAoY2FyZFZpZXc9PT1sYW5ndWFnZSkge1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGFuZyhwcm9wcykge1xuICAgIGNvbnN0IHRvZ2dsZSA9ICgpPT57IHByb3BzLnRvZ2dsZVZpZXcocHJvcHMubGFuZ0RhdGEubGFuZ3VhZ2UpOyB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHJvZ0xhbmdDYXJkJyBvbkNsaWNrPXt0b2dnbGV9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbGxhcHNlZExhbmdDYXJkJz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbGFuZ3VhZ2UnPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cHJvcHMubGFuZ0RhdGEuaWNvblNyY30gaWQ9e3NpbXBsaWZ5KHByb3BzLmxhbmdEYXRhLmxhbmd1YWdlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nbGFuZ0ljb25zJy8+XG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9J2xhbmdUZXh0Jz57cHJvcHMubGFuZ0RhdGEubGFuZ3VhZ2V9PC9oND5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2tpbGxMZXZlbE91dGxpbmUnPlxuICAgICAgICAgICAgICAgICAgICB7IGdldFNraWxsTGV2ZWxCYXIocHJvcHMubGFuZ0RhdGEuc2tpbGxMZXZlbCkgfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7IGV4dGVuZExhbmdDYXJkKHByb3BzLmNhcmRWaWV3LCBwcm9wcy5sYW5nRGF0YS5sYW5ndWFnZSkgfVxuICAgICAgICAgICAgICAgIC8vICBwcm9wcy5jYXJkVmlldz09cHJvcHMubGFuZ0RhdGEubGFuZ3VhZ2UgJiZcbiAgICAgICAgICAgICAgICAvLyA8RXh0ZW5kZWRMYW5nQ2FyZCBsYW5nRGF0YT17cHJvcHMubGFuZ0RhdGF9Lz4gXG4gICAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/progLang/comps/lang.jsx\n");

/***/ })

});