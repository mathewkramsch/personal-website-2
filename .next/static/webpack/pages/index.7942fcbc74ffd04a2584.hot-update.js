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

/***/ "./components/contact/comps/emailInput.jsx":
/*!*************************************************!*\
  !*** ./components/contact/comps/emailInput.jsx ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ EmailInput; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_layout_contact_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../styles/layout/contact.module.scss */ \"./styles/layout/contact.module.scss\");\n/* harmony import */ var _styles_layout_contact_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_layout_contact_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! emailjs-com */ \"./node_modules/emailjs-com/es/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/home/mathewkramsch/Desktop/Coding/web_development/react/next_js/resume_website_2/components/contact/comps/emailInput.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n// emailInput.jsx\n\n\n\n\n\n\nvar sendEmailButton = function sendEmailButton(status) {\n  var submitValue = 'send email';\n  if (status === 'sent') submitValue = 'message sent';\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"submitButton\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n      type: \"submit\",\n      value: submitValue,\n      className: \"italic footerText\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {\n      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faPaperPlane,\n      className: \"icon\",\n      id: \"plane\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 13,\n    columnNumber: 9\n  }, _this);\n};\n\nfunction EmailInput() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('notSent'),\n      status = _useState[0],\n      setStatus = _useState[1];\n\n  var sendEmail = function sendEmail(e) {\n    e.preventDefault(); //This is important, i'm not sure why, but the email won't send without it\n\n    emailjs_com__WEBPACK_IMPORTED_MODULE_3__.default.sendForm('service_ooit997', 'template_69kd92e', e.target, 'user_FCqOc9EcSn7381ssMYLsf').then(function (result) {\n      setTimeout(function () {\n        setStatus('sent');\n      }, 5000);\n      window.location.reload();\n    }, function (error) {\n      console.log(error.text);\n    });\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n    action: \"#\",\n    className: (_styles_layout_contact_module_scss__WEBPACK_IMPORTED_MODULE_5___default().inputs),\n    onSubmit: sendEmail,\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_styles_layout_contact_module_scss__WEBPACK_IMPORTED_MODULE_5___default().textInputs),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        type: \"text\",\n        id: \"name\",\n        name: \"from_name\",\n        className: \"inputText\",\n        placeholder: \"Name\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        type: \"text\",\n        id: \"email\",\n        name: \"from_email\",\n        className: \"inputText\",\n        placeholder: \"Email Address\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n        name: \"message\",\n        rows: \"12\",\n        cols: \"30\",\n        className: \"inputText\",\n        placeholder: \"Your message to mathewkramsch@ucsb.edu\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      children: sendEmailButton(status)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 36,\n    columnNumber: 9\n  }, this);\n}\n\n_s(EmailInput, \"INjINM2QRW78gDIheAZrPcNwv88=\");\n\n_c = EmailInput;\n\nvar _c;\n\n$RefreshReg$(_c, \"EmailInput\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NvbnRhY3QvY29tcHMvZW1haWxJbnB1dC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTU0sZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDQyxNQUFELEVBQVU7QUFDOUIsTUFBSUMsV0FBVyxHQUFHLFlBQWxCO0FBQ0EsTUFBSUQsTUFBTSxLQUFHLE1BQWIsRUFBcUJDLFdBQVcsR0FBRyxjQUFkO0FBQ3JCLHNCQUNJO0FBQUssYUFBUyxFQUFDLGNBQWY7QUFBQSw0QkFDSTtBQUFPLFVBQUksRUFBQyxRQUFaO0FBQXFCLFdBQUssRUFBRUEsV0FBNUI7QUFBeUMsZUFBUyxFQUFDO0FBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQUVJLDhEQUFDLDJFQUFEO0FBQWlCLFVBQUksRUFBRUosMkVBQXZCO0FBQXFDLGVBQVMsRUFBQyxNQUEvQztBQUFzRCxRQUFFLEVBQUM7QUFBekQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBTUgsQ0FURDs7QUFXZSxTQUFTSyxVQUFULEdBQXNCO0FBQUE7O0FBQUEsa0JBQ0xSLCtDQUFRLENBQUMsU0FBRCxDQURIO0FBQUEsTUFDMUJNLE1BRDBCO0FBQUEsTUFDbEJHLFNBRGtCOztBQUVqQyxNQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxDQUFELEVBQUs7QUFDbkJBLElBQUFBLENBQUMsQ0FBQ0MsY0FBRixHQURtQixDQUNJOztBQUV2QlIsSUFBQUEseURBQUEsQ0FBaUIsaUJBQWpCLEVBQW1DLGtCQUFuQyxFQUFzRE8sQ0FBQyxDQUFDRyxNQUF4RCxFQUErRCw0QkFBL0QsRUFDQ0MsSUFERCxDQUVJLFVBQUNDLE1BQUQsRUFBWTtBQUNSQyxNQUFBQSxVQUFVLENBQUMsWUFBSTtBQUFFUixRQUFBQSxTQUFTLENBQUMsTUFBRCxDQUFUO0FBQW9CLE9BQTNCLEVBQTZCLElBQTdCLENBQVY7QUFDQVMsTUFBQUEsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxNQUFoQjtBQUNILEtBTEwsRUFNSSxVQUFDQyxLQUFELEVBQVc7QUFBRUMsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQUssQ0FBQ0csSUFBbEI7QUFBMEIsS0FOM0M7QUFRSCxHQVhEOztBQWFBLHNCQUNJO0FBQU0sVUFBTSxFQUFDLEdBQWI7QUFBaUIsYUFBUyxFQUFFdkIsa0ZBQTVCO0FBQXNDLFlBQVEsRUFBRVMsU0FBaEQ7QUFBQSw0QkFDSTtBQUFLLGVBQVMsRUFBRVQsc0ZBQWhCO0FBQUEsOEJBQ0k7QUFBTyxZQUFJLEVBQUMsTUFBWjtBQUFtQixVQUFFLEVBQUMsTUFBdEI7QUFBNkIsWUFBSSxFQUFDLFdBQWxDO0FBQThDLGlCQUFTLEVBQUMsV0FBeEQ7QUFDSSxtQkFBVyxFQUFDO0FBRGhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUdJO0FBQU8sWUFBSSxFQUFDLE1BQVo7QUFBbUIsVUFBRSxFQUFDLE9BQXRCO0FBQThCLFlBQUksRUFBQyxZQUFuQztBQUFnRCxpQkFBUyxFQUFDLFdBQTFEO0FBQ0ksbUJBQVcsRUFBQztBQURoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEosZUFLSTtBQUFVLFlBQUksRUFBQyxTQUFmO0FBQXlCLFlBQUksRUFBQyxJQUE5QjtBQUFtQyxZQUFJLEVBQUMsSUFBeEM7QUFBNkMsaUJBQVMsRUFBQyxXQUF2RDtBQUNJLG1CQUFXLEVBQUM7QUFEaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBVUk7QUFBQSxnQkFDTUksZUFBZSxDQUFDQyxNQUFEO0FBRHJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFWSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQWdCSDs7R0EvQnVCRTs7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb250YWN0L2NvbXBzL2VtYWlsSW5wdXQuanN4PzhlOTIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZW1haWxJbnB1dC5qc3hcblxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgcyBmcm9tICcuLi8uLi8uLi9zdHlsZXMvbGF5b3V0L2NvbnRhY3QubW9kdWxlLnNjc3MnXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnXG5pbXBvcnQgeyBmYVBhcGVyUGxhbmUgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnXG5pbXBvcnQgZW1haWxqcyBmcm9tICdlbWFpbGpzLWNvbSdcblxuY29uc3Qgc2VuZEVtYWlsQnV0dG9uID0gKHN0YXR1cyk9PntcbiAgICBsZXQgc3VibWl0VmFsdWUgPSAnc2VuZCBlbWFpbCdcbiAgICBpZiAoc3RhdHVzPT09J3NlbnQnKSBzdWJtaXRWYWx1ZSA9ICdtZXNzYWdlIHNlbnQnXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3N1Ym1pdEJ1dHRvbic+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT0nc3VibWl0JyB2YWx1ZT17c3VibWl0VmFsdWV9IGNsYXNzTmFtZT0naXRhbGljIGZvb3RlclRleHQnLz5cbiAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFQYXBlclBsYW5lfSBjbGFzc05hbWU9J2ljb24nIGlkPSdwbGFuZScvPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFbWFpbElucHV0KCkge1xuICAgIGNvbnN0IFtzdGF0dXMsIHNldFN0YXR1c10gPSB1c2VTdGF0ZSgnbm90U2VudCcpO1xuICAgIGNvbnN0IHNlbmRFbWFpbCA9IChlKT0+e1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7ICAgIC8vVGhpcyBpcyBpbXBvcnRhbnQsIGknbSBub3Qgc3VyZSB3aHksIGJ1dCB0aGUgZW1haWwgd29uJ3Qgc2VuZCB3aXRob3V0IGl0XG5cbiAgICAgICAgZW1haWxqcy5zZW5kRm9ybSgnc2VydmljZV9vb2l0OTk3JywndGVtcGxhdGVfNjlrZDkyZScsZS50YXJnZXQsJ3VzZXJfRkNxT2M5RWNTbjczODFzc01ZTHNmJylcbiAgICAgICAgLnRoZW4oXG4gICAgICAgICAgICAocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKT0+eyBzZXRTdGF0dXMoJ3NlbnQnKTsgfSwgNTAwMCk7XG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIChlcnJvcikgPT4geyBjb25zb2xlLmxvZyhlcnJvci50ZXh0KTsgfVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxmb3JtIGFjdGlvbj0nIycgY2xhc3NOYW1lPXtzLmlucHV0c30gb25TdWJtaXQ9e3NlbmRFbWFpbH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy50ZXh0SW5wdXRzfT5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIm5hbWVcIiBuYW1lPVwiZnJvbV9uYW1lXCIgY2xhc3NOYW1lPSdpbnB1dFRleHQnXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdOYW1lJy8+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJlbWFpbFwiIG5hbWU9XCJmcm9tX2VtYWlsXCIgY2xhc3NOYW1lPSdpbnB1dFRleHQnXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdFbWFpbCBBZGRyZXNzJy8+XG4gICAgICAgICAgICAgICAgPHRleHRhcmVhIG5hbWU9XCJtZXNzYWdlXCIgcm93cz1cIjEyXCIgY29scz1cIjMwXCIgY2xhc3NOYW1lPSdpbnB1dFRleHQnXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdZb3VyIG1lc3NhZ2UgdG8gbWF0aGV3a3JhbXNjaEB1Y3NiLmVkdSc+XG4gICAgICAgICAgICAgICAgPC90ZXh0YXJlYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICB7IHNlbmRFbWFpbEJ1dHRvbihzdGF0dXMpIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Zvcm0+XG4gICAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwicyIsIkZvbnRBd2Vzb21lSWNvbiIsImZhUGFwZXJQbGFuZSIsImVtYWlsanMiLCJzZW5kRW1haWxCdXR0b24iLCJzdGF0dXMiLCJzdWJtaXRWYWx1ZSIsIkVtYWlsSW5wdXQiLCJzZXRTdGF0dXMiLCJzZW5kRW1haWwiLCJlIiwicHJldmVudERlZmF1bHQiLCJzZW5kRm9ybSIsInRhcmdldCIsInRoZW4iLCJyZXN1bHQiLCJzZXRUaW1lb3V0Iiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJ0ZXh0IiwiaW5wdXRzIiwidGV4dElucHV0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/contact/comps/emailInput.jsx\n");

/***/ })

});