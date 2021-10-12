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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_layout_home_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styles/layout/home.module.scss */ \"./styles/layout/home.module.scss\");\n/* harmony import */ var _styles_layout_home_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_layout_home_module_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _comps_links__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./comps/links */ \"./components/home/comps/links.jsx\");\n/* harmony import */ var _comps_scrollDown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./comps/scrollDown */ \"./components/home/comps/scrollDown.jsx\");\n/* harmony import */ var react_scroll_parallax__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-scroll-parallax */ \"./node_modules/react-scroll-parallax/cjs/index.js\");\n/* harmony import */ var react_fade_in__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-fade-in */ \"./node_modules/react-fade-in/lib/index.js\");\n/* harmony import */ var react_fade_in__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_fade_in__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/home/mathewkramsch/Desktop/Coding/web_development/react/resume_website_2/components/home/home.jsx\",\n    _s = $RefreshSig$();\n\n// home.jsx\n\n\n\n\n\n\nvar titles = ['Full-Stack Software Developer', '5th Year UCSB Student', 'Computer Science Major', 'Software Engineer', 'Web Developer'];\nvar aboutInfoList = [\"I\\u2019m a diligent fifth year Computer Science student at UC Santa Barbara who is currently looking for software development engineering opportunities.\", \"With a strong technical knowledge of data structures, CS fundamentals, and multiple programming languages and technologies, I can operate as a Full-Stack software developer.\", \"Coming from an artistic background, I love UI/UX design but am also a capable back-end programmer.\", \"Scroll to the bottom to send me an email or view the source code for this website, which was built using React, Next.js, and SASS.\", \"Check out my resume!\"];\nfunction Home() {\n  _s();\n\n  var _this = this;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),\n      titleNum = _useState[0],\n      setTitleNum = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),\n      aboutInfoNum = _useState2[0],\n      setAboutInfoNum = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      newMount = _useState3[0],\n      setNewMount = _useState3[1]; // new mount of title\n\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      newMount2 = _useState4[0],\n      setNewMount2 = _useState4[1]; // new mount of about\n\n\n  var toggleTitle = function toggleTitle() {\n    setNewMount(true);\n    setTitleNum(titleNum + 1);\n    var timeoutId = setTimeout(function () {\n      return setNewMount(false);\n    }, 600);\n    return function () {\n      return clearTimeout(timeoutId);\n    };\n  };\n\n  var toggleAboutInfo = function toggleAboutInfo() {\n    setNewMount2(true);\n    setAboutInfoNum(aboutInfoNum + 1);\n    var timeoutId = setTimeout(function () {\n      return setNewMount2(false);\n    }, 600);\n    return function () {\n      return clearTimeout(timeoutId);\n    };\n  };\n\n  var displayTitle = function displayTitle(titleNum) {\n    var numberOfTitles = titles.length;\n    var title = titles[titleNum % numberOfTitles];\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n      onClick: toggleTitle,\n      className: newMount && 'onMountStyle',\n      id: (_styles_layout_home_module_scss__WEBPACK_IMPORTED_MODULE_6___default().title),\n      children: title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 4\n    }, _this);\n  };\n\n  var displayAboutInfo = function displayAboutInfo(aboutInfoNum) {\n    var numberOfAboutInfos = aboutInfoList.length;\n    var aboutInfo = aboutInfoList[aboutInfoNum % numberOfAboutInfos];\n    var classNames = 'description aboutInfo';\n    if (newMount2) classNames = classNames.concat(' onMountStyle');\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n      className: classNames,\n      onClick: toggleAboutInfo,\n      children: aboutInfo\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 10\n    }, _this);\n  };\n\n  var delay = 7000;\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    var aboutTimeout = setTimeout(toggleAboutInfo, delay);\n    return function () {\n      return clearTimeout(aboutTimeout);\n    };\n  }, [aboutInfoNum]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: (_styles_layout_home_module_scss__WEBPACK_IMPORTED_MODULE_6___default().page),\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_styles_layout_home_module_scss__WEBPACK_IMPORTED_MODULE_6___default().pageContent),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_layout_home_module_scss__WEBPACK_IMPORTED_MODULE_6___default().topContainer),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: (_styles_layout_home_module_scss__WEBPACK_IMPORTED_MODULE_6___default().titleContainer),\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_fade_in__WEBPACK_IMPORTED_MODULE_5___default()), {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"firstName\",\n                children: \"Mathew\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 74,\n                columnNumber: 8\n              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"lastName\",\n                children: \"Kramsch\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 75,\n                columnNumber: 8\n              }, this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 73,\n              columnNumber: 15\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 73,\n            columnNumber: 7\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 72,\n          columnNumber: 6\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: (_styles_layout_home_module_scss__WEBPACK_IMPORTED_MODULE_6___default().subHeader),\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_layout_home_module_scss__WEBPACK_IMPORTED_MODULE_6___default().subHeaderLeft),\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_fade_in__WEBPACK_IMPORTED_MODULE_5___default()), {\n              children: [displayTitle(titleNum), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_comps_links__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 82,\n                columnNumber: 9\n              }, this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 80,\n              columnNumber: 8\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 79,\n            columnNumber: 7\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 78,\n          columnNumber: 6\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 71,\n        columnNumber: 5\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_layout_home_module_scss__WEBPACK_IMPORTED_MODULE_6___default().subHeaderRight),\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_fade_in__WEBPACK_IMPORTED_MODULE_5___default()), {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n            className: \"description\",\n            id: (_styles_layout_home_module_scss__WEBPACK_IMPORTED_MODULE_6___default().intro),\n            children: \"Hey what's up!\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 89,\n            columnNumber: 7\n          }, this), displayAboutInfo(aboutInfoNum)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 88,\n          columnNumber: 6\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 87,\n        columnNumber: 5\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_layout_home_module_scss__WEBPACK_IMPORTED_MODULE_6___default().bottomContainer),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n          src: \"/illustrations/coding.svg\",\n          style: {\n            userSelect: 'none'\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 94,\n          columnNumber: 6\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: (_styles_layout_home_module_scss__WEBPACK_IMPORTED_MODULE_6___default().scrollDownButton),\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_comps_scrollDown__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 95,\n            columnNumber: 42\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 95,\n          columnNumber: 6\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: (_styles_layout_home_module_scss__WEBPACK_IMPORTED_MODULE_6___default().dummy)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 96,\n          columnNumber: 6\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 93,\n        columnNumber: 5\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 4\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 69,\n    columnNumber: 3\n  }, this);\n}\n\n_s(Home, \"om77ROXmOJr37H7HszoT3ct1E0U=\");\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQUVBLDhFQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERCxFQUVHeUIsZ0JBQWdCLENBQUNmLFlBQUQsQ0FGbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWpCRCxlQXVCQztBQUFLLGlCQUFTLEVBQUVWLHdGQUFoQjtBQUFBLGdDQUNDO0FBQUssYUFBRyxFQUFDLDJCQUFUO0FBQXFDLGVBQUssRUFBRTtBQUFDeUMsWUFBQUEsVUFBVSxFQUFDO0FBQVo7QUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERCxlQUVDO0FBQUssbUJBQVMsRUFBRXpDLHlGQUFoQjtBQUFBLGlDQUFvQyw4REFBQyxzREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkQsZUFHQztBQUFLLG1CQUFTLEVBQUVBLDhFQUFPMkM7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFIRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F2QkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBaUNBOztHQTNFdUJwQzs7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ob21lL2hvbWUuanN4P2I5NmMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaG9tZS5qc3hcblxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgcyBmcm9tICcuLi8uLi9zdHlsZXMvbGF5b3V0L2hvbWUubW9kdWxlLnNjc3MnXG5pbXBvcnQgTGlua3MgZnJvbSAnLi9jb21wcy9saW5rcydcbmltcG9ydCBTY3JvbGxEb3duIGZyb20gJy4vY29tcHMvc2Nyb2xsRG93bidcbmltcG9ydCB7IFBhcmFsbGF4IH0gZnJvbSAncmVhY3Qtc2Nyb2xsLXBhcmFsbGF4JztcbmltcG9ydCBGYWRlSW4gZnJvbSAncmVhY3QtZmFkZS1pbic7XG5cbmNvbnN0IHRpdGxlcyA9IFtcblx0J0Z1bGwtU3RhY2sgU29mdHdhcmUgRGV2ZWxvcGVyJyxcblx0JzV0aCBZZWFyIFVDU0IgU3R1ZGVudCcsXG5cdCdDb21wdXRlciBTY2llbmNlIE1ham9yJyxcblx0J1NvZnR3YXJlIEVuZ2luZWVyJyxcblx0J1dlYiBEZXZlbG9wZXInXG5dO1xuXG5jb25zdCBhYm91dEluZm9MaXN0ID0gW1xuXHRgSeKAmW0gYSBkaWxpZ2VudCBmaWZ0aCB5ZWFyIENvbXB1dGVyIFNjaWVuY2Ugc3R1ZGVudCBhdCBVQyBTYW50YSBCYXJiYXJhIHdobyBpcyBjdXJyZW50bHkgbG9va2luZyBmb3Igc29mdHdhcmUgZGV2ZWxvcG1lbnQgZW5naW5lZXJpbmcgb3Bwb3J0dW5pdGllcy5gLFxuXHRgV2l0aCBhIHN0cm9uZyB0ZWNobmljYWwga25vd2xlZGdlIG9mIGRhdGEgc3RydWN0dXJlcywgQ1MgZnVuZGFtZW50YWxzLCBhbmQgbXVsdGlwbGUgcHJvZ3JhbW1pbmcgbGFuZ3VhZ2VzIGFuZCB0ZWNobm9sb2dpZXMsIEkgY2FuIG9wZXJhdGUgYXMgYSBGdWxsLVN0YWNrIHNvZnR3YXJlIGRldmVsb3Blci5gLFxuXHRgQ29taW5nIGZyb20gYW4gYXJ0aXN0aWMgYmFja2dyb3VuZCwgSSBsb3ZlIFVJL1VYIGRlc2lnbiBidXQgYW0gYWxzbyBhIGNhcGFibGUgYmFjay1lbmQgcHJvZ3JhbW1lci5gLFxuXHRgU2Nyb2xsIHRvIHRoZSBib3R0b20gdG8gc2VuZCBtZSBhbiBlbWFpbCBvciB2aWV3IHRoZSBzb3VyY2UgY29kZSBmb3IgdGhpcyB3ZWJzaXRlLCB3aGljaCB3YXMgYnVpbHQgdXNpbmcgUmVhY3QsIE5leHQuanMsIGFuZCBTQVNTLmAsXG5cdGBDaGVjayBvdXQgbXkgcmVzdW1lIWBcbl1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcblx0Y29uc3QgW3RpdGxlTnVtLCBzZXRUaXRsZU51bV0gPSB1c2VTdGF0ZSgwKTtcblx0Y29uc3QgW2Fib3V0SW5mb051bSwgc2V0QWJvdXRJbmZvTnVtXSA9IHVzZVN0YXRlKDApO1xuXHRjb25zdCBbbmV3TW91bnQsIHNldE5ld01vdW50XSA9IHVzZVN0YXRlKGZhbHNlKTsgIC8vIG5ldyBtb3VudCBvZiB0aXRsZVxuXHRjb25zdCBbbmV3TW91bnQyLCBzZXROZXdNb3VudDJdID0gdXNlU3RhdGUoZmFsc2UpOyAgLy8gbmV3IG1vdW50IG9mIGFib3V0XG5cblx0Y29uc3QgdG9nZ2xlVGl0bGUgPSAoKT0+e1xuXHRcdHNldE5ld01vdW50KHRydWUpO1xuXHRcdHNldFRpdGxlTnVtKHRpdGxlTnVtKzEpO1xuXHRcdGNvbnN0IHRpbWVvdXRJZCA9IHNldFRpbWVvdXQoKCk9PnNldE5ld01vdW50KGZhbHNlKSwgNjAwKTtcblx0XHRyZXR1cm4gKCk9PmNsZWFyVGltZW91dCh0aW1lb3V0SWQpO1xuXHR9XG5cdGNvbnN0IHRvZ2dsZUFib3V0SW5mbyA9ICgpPT57XG5cdFx0c2V0TmV3TW91bnQyKHRydWUpO1xuXHRcdHNldEFib3V0SW5mb051bShhYm91dEluZm9OdW0rMSk7XG5cdFx0Y29uc3QgdGltZW91dElkID0gc2V0VGltZW91dCgoKT0+c2V0TmV3TW91bnQyKGZhbHNlKSwgNjAwKTtcblx0XHRyZXR1cm4gKCk9PmNsZWFyVGltZW91dCh0aW1lb3V0SWQpO1xuXHR9XG5cblx0Y29uc3QgZGlzcGxheVRpdGxlID0gKHRpdGxlTnVtKT0+e1xuXHRcdGNvbnN0IG51bWJlck9mVGl0bGVzID0gdGl0bGVzLmxlbmd0aDtcblx0XHRjb25zdCB0aXRsZSA9IHRpdGxlc1t0aXRsZU51bSVudW1iZXJPZlRpdGxlc107XG5cdFx0cmV0dXJuIChcblx0XHRcdDxoMyBvbkNsaWNrPXt0b2dnbGVUaXRsZX0gY2xhc3NOYW1lPXtuZXdNb3VudCAmJiAnb25Nb3VudFN0eWxlJ30gaWQ9e3MudGl0bGV9PlxuXHRcdFx0XHR7dGl0bGV9XG5cdFx0XHQ8L2gzPlxuXHRcdCk7XG5cdH1cblx0Y29uc3QgZGlzcGxheUFib3V0SW5mbyA9IChhYm91dEluZm9OdW0pPT57XG5cdFx0Y29uc3QgbnVtYmVyT2ZBYm91dEluZm9zID0gYWJvdXRJbmZvTGlzdC5sZW5ndGg7XG5cdFx0Y29uc3QgYWJvdXRJbmZvID0gYWJvdXRJbmZvTGlzdFthYm91dEluZm9OdW0lbnVtYmVyT2ZBYm91dEluZm9zXTtcblx0XHRsZXQgY2xhc3NOYW1lcyA9ICdkZXNjcmlwdGlvbiBhYm91dEluZm8nO1xuXHRcdGlmIChuZXdNb3VudDIpIGNsYXNzTmFtZXMgPSBjbGFzc05hbWVzLmNvbmNhdCgnIG9uTW91bnRTdHlsZScpO1xuXHRcdHJldHVybiA8aDQgY2xhc3NOYW1lPXtjbGFzc05hbWVzfSBvbkNsaWNrPXt0b2dnbGVBYm91dEluZm99PnthYm91dEluZm99PC9oND5cblx0fVxuXG5cdGNvbnN0IGRlbGF5ID0gNzAwMDtcblx0dXNlRWZmZWN0KCgpPT57XG5cdFx0Y29uc3QgYWJvdXRUaW1lb3V0ID0gc2V0VGltZW91dCh0b2dnbGVBYm91dEluZm8sIGRlbGF5KTtcblx0XHRyZXR1cm4gKCk9PmNsZWFyVGltZW91dChhYm91dFRpbWVvdXQpO1xuXHR9LCBbYWJvdXRJbmZvTnVtXSk7XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT17cy5wYWdlfT5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzLnBhZ2VDb250ZW50fT5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3MudG9wQ29udGFpbmVyfT5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17cy50aXRsZUNvbnRhaW5lcn0+XG5cdFx0XHRcdFx0XHQ8RmFkZUluPjxoMT5cblx0XHRcdFx0XHRcdFx0PGRpdiBpZD0nZmlyc3ROYW1lJz5NYXRoZXc8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBpZD0nbGFzdE5hbWUnPktyYW1zY2g8L2Rpdj5cblx0XHRcdFx0XHRcdDwvaDE+PC9GYWRlSW4+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3Muc3ViSGVhZGVyfT5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzLnN1YkhlYWRlckxlZnR9PlxuXHRcdFx0XHRcdFx0XHQ8RmFkZUluPlxuXHRcdFx0XHRcdFx0XHRcdHsgZGlzcGxheVRpdGxlKHRpdGxlTnVtKSB9XG5cdFx0XHRcdFx0XHRcdFx0PExpbmtzLz5cblx0XHRcdFx0XHRcdFx0PC9GYWRlSW4+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzLnN1YkhlYWRlclJpZ2h0fT5cblx0XHRcdFx0XHQ8RmFkZUluPlxuXHRcdFx0XHRcdFx0PGg0IGNsYXNzTmFtZT0nZGVzY3JpcHRpb24nIGlkPXtzLmludHJvfT5IZXkgd2hhdCdzIHVwITwvaDQ+XG5cdFx0XHRcdFx0XHR7IGRpc3BsYXlBYm91dEluZm8oYWJvdXRJbmZvTnVtKSB9XG5cdFx0XHRcdFx0PC9GYWRlSW4+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17cy5ib3R0b21Db250YWluZXJ9PlxuXHRcdFx0XHRcdDxpbWcgc3JjPScvaWxsdXN0cmF0aW9ucy9jb2Rpbmcuc3ZnJyBzdHlsZT17e3VzZXJTZWxlY3Q6J25vbmUnfX0vPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzLnNjcm9sbERvd25CdXR0b259PjxTY3JvbGxEb3duLz48L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17cy5kdW1teX0+PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdCk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInMiLCJMaW5rcyIsIlNjcm9sbERvd24iLCJQYXJhbGxheCIsIkZhZGVJbiIsInRpdGxlcyIsImFib3V0SW5mb0xpc3QiLCJIb21lIiwidGl0bGVOdW0iLCJzZXRUaXRsZU51bSIsImFib3V0SW5mb051bSIsInNldEFib3V0SW5mb051bSIsIm5ld01vdW50Iiwic2V0TmV3TW91bnQiLCJuZXdNb3VudDIiLCJzZXROZXdNb3VudDIiLCJ0b2dnbGVUaXRsZSIsInRpbWVvdXRJZCIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJ0b2dnbGVBYm91dEluZm8iLCJkaXNwbGF5VGl0bGUiLCJudW1iZXJPZlRpdGxlcyIsImxlbmd0aCIsInRpdGxlIiwiZGlzcGxheUFib3V0SW5mbyIsIm51bWJlck9mQWJvdXRJbmZvcyIsImFib3V0SW5mbyIsImNsYXNzTmFtZXMiLCJjb25jYXQiLCJkZWxheSIsImFib3V0VGltZW91dCIsInBhZ2UiLCJwYWdlQ29udGVudCIsInRvcENvbnRhaW5lciIsInRpdGxlQ29udGFpbmVyIiwic3ViSGVhZGVyIiwic3ViSGVhZGVyTGVmdCIsInN1YkhlYWRlclJpZ2h0IiwiaW50cm8iLCJib3R0b21Db250YWluZXIiLCJ1c2VyU2VsZWN0Iiwic2Nyb2xsRG93bkJ1dHRvbiIsImR1bW15Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/home/home.jsx\n");

/***/ })

});