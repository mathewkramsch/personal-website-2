"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/home/home.jsx":
/*!**********************************!*\
  !*** ./components/home/home.jsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_layout_home_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/layout/home.module.scss */ \"./styles/layout/home.module.scss\");\n/* harmony import */ var _styles_layout_home_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_layout_home_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _comps_links__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./comps/links */ \"./components/home/comps/links.jsx\");\n/* harmony import */ var _comps_scrollDown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./comps/scrollDown */ \"./components/home/comps/scrollDown.jsx\");\n/* harmony import */ var react_scroll_parallax__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-scroll-parallax */ \"./node_modules/react-scroll-parallax/cjs/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/home/mathewkramsch/Desktop/Coding/web_development/react/next_js/resume_website_2/components/home/home.jsx\",\n    _s = $RefreshSig$();\n\n// home.jsx\n\n\n\n\n\nvar titles = ['Full-Stack Software Developer', '5th Year UCSB Student', 'Computer Science Major', 'Software Engineer', 'Web Developer', 'Programmer', 'Wanna-be Hacker', 'Cool Person', 'Hireable Candidate', 'Your next employee'];\nvar aboutInfoList = [\"I\\u2019m a diligent fifth year Computer Science student at UC Santa Barbara who is currently looking for software development engineering opportunities. \\n[click for more info]\", \"With a strong technical knowledge of data structures, CS fundamentals, and multiple programming languages and technologies, I can operate as a Full-Stack software developer.\", \"Coming from an artistic background, I love UI/UX design but am also a capable back-end programmer.\", \"Scroll to the bottom to send me an email or view the source code for this website, which was built using React, Next.js, and SASS.\", \"Also check out my resume!\"];\nfunction Home() {\n  _s();\n\n  var _this = this;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),\n      titleNum = _useState[0],\n      setTitleNum = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),\n      aboutInfoNum = _useState2[0],\n      setAboutInfoNum = _useState2[1];\n\n  var toggleTitle = function toggleTitle() {\n    setTitleNum(titleNum + 1);\n  };\n\n  var toggleAboutInfo = function toggleAboutInfo() {\n    setAboutInfoNum(aboutInfoNum + 1);\n  };\n\n  var displayTitle = function displayTitle(titleNum) {\n    var numberOfTitles = titles.length;\n    var title = titles[titleNum % numberOfTitles];\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n      onClick: toggleTitle,\n      children: title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 10\n    }, _this);\n  };\n\n  var displayAboutInfo = function displayAboutInfo(aboutInfoNum) {\n    var numberOfAboutInfos = aboutInfoList.length;\n    var aboutInfo = aboutInfoList[aboutInfoNum % numberOfAboutInfos];\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n      className: \"description aboutInfo\",\n      onClick: toggleAboutInfo,\n      children: aboutInfo\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 10\n    }, _this);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"bg-home-page-email-pattern\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_styles_layout_home_module_scss__WEBPACK_IMPORTED_MODULE_5___default().page),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 4\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_layout_home_module_scss__WEBPACK_IMPORTED_MODULE_5___default().topContainer),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: (_styles_layout_home_module_scss__WEBPACK_IMPORTED_MODULE_5___default().titleContainer),\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n              id: \"firstName\",\n              children: \"Mathew\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 52,\n              columnNumber: 10\n            }, this), \"\\xA0Kramsch\"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 52,\n            columnNumber: 6\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 5\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: (_styles_layout_home_module_scss__WEBPACK_IMPORTED_MODULE_5___default().subHeader),\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_layout_home_module_scss__WEBPACK_IMPORTED_MODULE_5___default().subHeaderLeft),\n            children: [displayTitle(titleNum), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_comps_links__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 57,\n              columnNumber: 7\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 55,\n            columnNumber: 6\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_layout_home_module_scss__WEBPACK_IMPORTED_MODULE_5___default().subHeaderRight),\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n              className: \"description\",\n              id: (_styles_layout_home_module_scss__WEBPACK_IMPORTED_MODULE_5___default().intro),\n              children: \"Hey what's up!\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 60,\n              columnNumber: 7\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 60,\n              columnNumber: 67\n            }, this), displayAboutInfo(aboutInfoNum)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 59,\n            columnNumber: 6\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 54,\n          columnNumber: 5\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 4\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_layout_home_module_scss__WEBPACK_IMPORTED_MODULE_5___default().bottomContainer),\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_comps_scrollDown__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 66,\n          columnNumber: 5\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 65,\n        columnNumber: 4\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 3\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 47,\n    columnNumber: 3\n  }, this);\n}\n\n_s(Home, \"Dk+fuDYPo6JhScQLfVuaoftKEGk=\");\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQUE7QUFBQSxrQkFMRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkQsZUFpQkM7QUFBSyxpQkFBUyxFQUFFVCx3RkFBaEI7QUFBQSwrQkFDQyw4REFBQyxzREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWpCRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUF5QkE7O0dBekN1Qk07O0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvaG9tZS9ob21lLmpzeD9iOTZjIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGhvbWUuanN4XG5cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzIGZyb20gJy4uLy4uL3N0eWxlcy9sYXlvdXQvaG9tZS5tb2R1bGUuc2NzcydcbmltcG9ydCBMaW5rcyBmcm9tICcuL2NvbXBzL2xpbmtzJ1xuaW1wb3J0IFNjcm9sbERvd24gZnJvbSAnLi9jb21wcy9zY3JvbGxEb3duJ1xuaW1wb3J0IHsgUGFyYWxsYXggfSBmcm9tICdyZWFjdC1zY3JvbGwtcGFyYWxsYXgnO1xuXG5jb25zdCB0aXRsZXMgPSBbXG5cdCdGdWxsLVN0YWNrIFNvZnR3YXJlIERldmVsb3BlcicsXG5cdCc1dGggWWVhciBVQ1NCIFN0dWRlbnQnLFxuXHQnQ29tcHV0ZXIgU2NpZW5jZSBNYWpvcicsXG5cdCdTb2Z0d2FyZSBFbmdpbmVlcicsXG5cdCdXZWIgRGV2ZWxvcGVyJyxcblx0J1Byb2dyYW1tZXInLFxuXHQnV2FubmEtYmUgSGFja2VyJyxcblx0J0Nvb2wgUGVyc29uJyxcblx0J0hpcmVhYmxlIENhbmRpZGF0ZScsXG5cdCdZb3VyIG5leHQgZW1wbG95ZWUnLFxuXTtcblxuY29uc3QgYWJvdXRJbmZvTGlzdCA9IFtcblx0YEnigJltIGEgZGlsaWdlbnQgZmlmdGggeWVhciBDb21wdXRlciBTY2llbmNlIHN0dWRlbnQgYXQgVUMgU2FudGEgQmFyYmFyYSB3aG8gaXMgY3VycmVudGx5IGxvb2tpbmcgZm9yIHNvZnR3YXJlIGRldmVsb3BtZW50IGVuZ2luZWVyaW5nIG9wcG9ydHVuaXRpZXMuIFxcbltjbGljayBmb3IgbW9yZSBpbmZvXWAsXG5cdGBXaXRoIGEgc3Ryb25nIHRlY2huaWNhbCBrbm93bGVkZ2Ugb2YgZGF0YSBzdHJ1Y3R1cmVzLCBDUyBmdW5kYW1lbnRhbHMsIGFuZCBtdWx0aXBsZSBwcm9ncmFtbWluZyBsYW5ndWFnZXMgYW5kIHRlY2hub2xvZ2llcywgSSBjYW4gb3BlcmF0ZSBhcyBhIEZ1bGwtU3RhY2sgc29mdHdhcmUgZGV2ZWxvcGVyLmAsXG5cdGBDb21pbmcgZnJvbSBhbiBhcnRpc3RpYyBiYWNrZ3JvdW5kLCBJIGxvdmUgVUkvVVggZGVzaWduIGJ1dCBhbSBhbHNvIGEgY2FwYWJsZSBiYWNrLWVuZCBwcm9ncmFtbWVyLmAsXG5cdGBTY3JvbGwgdG8gdGhlIGJvdHRvbSB0byBzZW5kIG1lIGFuIGVtYWlsIG9yIHZpZXcgdGhlIHNvdXJjZSBjb2RlIGZvciB0aGlzIHdlYnNpdGUsIHdoaWNoIHdhcyBidWlsdCB1c2luZyBSZWFjdCwgTmV4dC5qcywgYW5kIFNBU1MuYCxcblx0YEFsc28gY2hlY2sgb3V0IG15IHJlc3VtZSFgXG5dXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG5cdGNvbnN0IFt0aXRsZU51bSwgc2V0VGl0bGVOdW1dID0gdXNlU3RhdGUoMCk7XG5cdGNvbnN0IFthYm91dEluZm9OdW0sIHNldEFib3V0SW5mb051bV0gPSB1c2VTdGF0ZSgwKTtcblx0Y29uc3QgdG9nZ2xlVGl0bGUgPSAoKT0+eyBzZXRUaXRsZU51bSh0aXRsZU51bSsxKTsgfVxuXHRjb25zdCB0b2dnbGVBYm91dEluZm8gPSAoKT0+eyBzZXRBYm91dEluZm9OdW0oYWJvdXRJbmZvTnVtKzEpOyB9XG5cdGNvbnN0IGRpc3BsYXlUaXRsZSA9ICh0aXRsZU51bSk9Pntcblx0XHRjb25zdCBudW1iZXJPZlRpdGxlcyA9IHRpdGxlcy5sZW5ndGg7XG5cdFx0Y29uc3QgdGl0bGUgPSB0aXRsZXNbdGl0bGVOdW0lbnVtYmVyT2ZUaXRsZXNdO1xuXHRcdHJldHVybiA8aDMgb25DbGljaz17dG9nZ2xlVGl0bGV9Pnt0aXRsZX08L2gzPlxuXHR9XG5cdGNvbnN0IGRpc3BsYXlBYm91dEluZm8gPSAoYWJvdXRJbmZvTnVtKT0+e1xuXHRcdGNvbnN0IG51bWJlck9mQWJvdXRJbmZvcyA9IGFib3V0SW5mb0xpc3QubGVuZ3RoO1xuXHRcdGNvbnN0IGFib3V0SW5mbyA9IGFib3V0SW5mb0xpc3RbYWJvdXRJbmZvTnVtJW51bWJlck9mQWJvdXRJbmZvc107XG5cdFx0cmV0dXJuIDxoNCBjbGFzc05hbWU9J2Rlc2NyaXB0aW9uIGFib3V0SW5mbycgb25DbGljaz17dG9nZ2xlQWJvdXRJbmZvfT57YWJvdXRJbmZvfTwvaDQ+XG5cdH1cblxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPSdiZy1ob21lLXBhZ2UtZW1haWwtcGF0dGVybic+XG5cdFx0PGRpdiBjbGFzc05hbWU9e3MucGFnZX0+XG5cdFx0XHQ8ZGl2PjwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3MudG9wQ29udGFpbmVyfT5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3MudGl0bGVDb250YWluZXJ9PlxuXHRcdFx0XHRcdDxoMT48ZGl2IGlkPSdmaXJzdE5hbWUnPk1hdGhldzwvZGl2PiZuYnNwO0tyYW1zY2g8L2gxPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3Muc3ViSGVhZGVyfT5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17cy5zdWJIZWFkZXJMZWZ0fT5cblx0XHRcdFx0XHRcdHsgZGlzcGxheVRpdGxlKHRpdGxlTnVtKSB9XG5cdFx0XHRcdFx0XHQ8TGlua3MvPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzLnN1YkhlYWRlclJpZ2h0fT5cblx0XHRcdFx0XHRcdDxoNCBjbGFzc05hbWU9J2Rlc2NyaXB0aW9uJyBpZD17cy5pbnRyb30+SGV5IHdoYXQncyB1cCE8L2g0Pjxici8+XG5cdFx0XHRcdFx0XHR7IGRpc3BsYXlBYm91dEluZm8oYWJvdXRJbmZvTnVtKSB9XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17cy5ib3R0b21Db250YWluZXJ9PlxuXHRcdFx0XHQ8U2Nyb2xsRG93bi8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwicyIsIkxpbmtzIiwiU2Nyb2xsRG93biIsIlBhcmFsbGF4IiwidGl0bGVzIiwiYWJvdXRJbmZvTGlzdCIsIkhvbWUiLCJ0aXRsZU51bSIsInNldFRpdGxlTnVtIiwiYWJvdXRJbmZvTnVtIiwic2V0QWJvdXRJbmZvTnVtIiwidG9nZ2xlVGl0bGUiLCJ0b2dnbGVBYm91dEluZm8iLCJkaXNwbGF5VGl0bGUiLCJudW1iZXJPZlRpdGxlcyIsImxlbmd0aCIsInRpdGxlIiwiZGlzcGxheUFib3V0SW5mbyIsIm51bWJlck9mQWJvdXRJbmZvcyIsImFib3V0SW5mbyIsInBhZ2UiLCJ0b3BDb250YWluZXIiLCJ0aXRsZUNvbnRhaW5lciIsInN1YkhlYWRlciIsInN1YkhlYWRlckxlZnQiLCJzdWJIZWFkZXJSaWdodCIsImludHJvIiwiYm90dG9tQ29udGFpbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/home/home.jsx\n");

/***/ })

});