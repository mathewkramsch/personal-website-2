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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ EmailInput; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_layout_contact_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../styles/layout/contact.module.scss */ \"./styles/layout/contact.module.scss\");\n/* harmony import */ var _styles_layout_contact_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_layout_contact_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! emailjs-com */ \"./node_modules/emailjs-com/es/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/home/mathewkramsch/Desktop/Coding/web_development/react/next_js/resume_website_2/components/contact/comps/emailInput.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n// emailInput.jsx\n\n\n\n\n\n\nvar sendEmailButton = function sendEmailButton(status, toggleStatus) {\n  var submitButtonChild = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n      type: \"submit\",\n      value: \"send email\",\n      className: \"italic footerText\",\n      onClick: toggleStatus\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {\n      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faPaperPlane,\n      className: \"icon\",\n      id: \"plane\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true);\n\n  if (status === 'sent') submitButtonChild = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n      className: \"italic footerText emailSent\",\n      children: \"jk this doesn't work yet\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 13\n    }, _this)\n  }, void 0, false);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"submitButton\",\n    children: submitButtonChild\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 23,\n    columnNumber: 9\n  }, _this);\n};\n\nfunction EmailInput() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('notSent'),\n      status = _useState[0],\n      setStatus = _useState[1];\n\n  var toggleStatus = function toggleStatus() {\n    if (status === 'notSent') setStatus('sent');else setStatus('notSent');\n  };\n\n  function sendEmail(e) {\n    e.preventDefault(); //This is important, i'm not sure why, but the email won't send without it\n\n    emailjs_com__WEBPACK_IMPORTED_MODULE_3__.default.sendForm('service_ooit997', 'template_69kd92e', e.target, 'user_FCqOc9EcSn7381ssMYLsf').then(function (result) {\n      window.location.reload();\n    }, // for page to reload\n    function (error) {\n      console.log(error.text);\n    });\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n    action: \"#\",\n    className: (_styles_layout_contact_module_scss__WEBPACK_IMPORTED_MODULE_5___default().inputs),\n    onSubmit: sendEmail,\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_styles_layout_contact_module_scss__WEBPACK_IMPORTED_MODULE_5___default().textInputs),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        type: \"text\",\n        id: \"name\",\n        name: \"from_name\",\n        className: \"inputText\",\n        placeholder: \"Name\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        type: \"text\",\n        id: \"email\",\n        name: \"from_email\",\n        className: \"inputText\",\n        placeholder: \"Email Address\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n        name: \"message\",\n        rows: \"12\",\n        cols: \"30\",\n        className: \"inputText\",\n        placeholder: \"Your message to mathewkramsch@ucsb.edu\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      children: sendEmailButton(status, toggleStatus)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 47,\n    columnNumber: 9\n  }, this);\n} // <input type=\"submit\" value=\"Send\" />\n// <h4 className='italic footerText'>send email</h4>\n// <div className='submitButton' onClick={toggleStatus}>\n//     { sendEmailButton(status,toggleStatus) }\n// </div>\n\n_s(EmailInput, \"INjINM2QRW78gDIheAZrPcNwv88=\");\n\n_c = EmailInput;\n\nvar _c;\n\n$RefreshReg$(_c, \"EmailInput\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NvbnRhY3QvY29tcHMvZW1haWxJbnB1dC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1NLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsTUFBRCxFQUFTQyxZQUFULEVBQXdCO0FBQzVDLE1BQUlDLGlCQUFpQixnQkFDakI7QUFBQSw0QkFDSTtBQUFPLFVBQUksRUFBQyxRQUFaO0FBQXFCLFdBQUssRUFBQyxZQUEzQjtBQUF3QyxlQUFTLEVBQUMsbUJBQWxEO0FBQXNFLGFBQU8sRUFBRUQ7QUFBL0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBRUksOERBQUMsMkVBQUQ7QUFBaUIsVUFBSSxFQUFFSiwyRUFBdkI7QUFBcUMsZUFBUyxFQUFDLE1BQS9DO0FBQXNELFFBQUUsRUFBQztBQUF6RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRko7QUFBQSxrQkFESjs7QUFNQSxNQUFJRyxNQUFNLEtBQUcsTUFBYixFQUFxQkUsaUJBQWlCLGdCQUNsQztBQUFBLDJCQUNJO0FBQUksZUFBUyxFQUFDLDZCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosbUJBRGlCO0FBTXJCLHNCQUNJO0FBQUssYUFBUyxFQUFDLGNBQWY7QUFBQSxjQUNNQTtBQUROO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQUtILENBbEJEOztBQW9CZSxTQUFTQyxVQUFULEdBQXNCO0FBQUE7O0FBQUEsa0JBQ0xULCtDQUFRLENBQUMsU0FBRCxDQURIO0FBQUEsTUFDMUJNLE1BRDBCO0FBQUEsTUFDbEJJLFNBRGtCOztBQUVqQyxNQUFNSCxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFJO0FBQ3JCLFFBQUlELE1BQU0sS0FBRyxTQUFiLEVBQXdCSSxTQUFTLENBQUMsTUFBRCxDQUFULENBQXhCLEtBQ0tBLFNBQVMsQ0FBQyxTQUFELENBQVQ7QUFDUixHQUhEOztBQUtBLFdBQVNDLFNBQVQsQ0FBbUJDLENBQW5CLEVBQXNCO0FBQ2xCQSxJQUFBQSxDQUFDLENBQUNDLGNBQUYsR0FEa0IsQ0FDSzs7QUFFdkJULElBQUFBLHlEQUFBLENBQWlCLGlCQUFqQixFQUFtQyxrQkFBbkMsRUFBc0RRLENBQUMsQ0FBQ0csTUFBeEQsRUFBK0QsNEJBQS9ELEVBQ0NDLElBREQsQ0FFSSxVQUFDQyxNQUFELEVBQVk7QUFBRUMsTUFBQUEsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxNQUFoQjtBQUEyQixLQUY3QyxFQUVnRDtBQUM1QyxjQUFDQyxLQUFELEVBQVc7QUFBRUMsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQUssQ0FBQ0csSUFBbEI7QUFBMEIsS0FIM0M7QUFLSDs7QUFFRCxzQkFDSTtBQUFNLFVBQU0sRUFBQyxHQUFiO0FBQWlCLGFBQVMsRUFBRXZCLGtGQUE1QjtBQUFzQyxZQUFRLEVBQUVVLFNBQWhEO0FBQUEsNEJBQ0k7QUFBSyxlQUFTLEVBQUVWLHNGQUFoQjtBQUFBLDhCQUNJO0FBQU8sWUFBSSxFQUFDLE1BQVo7QUFBbUIsVUFBRSxFQUFDLE1BQXRCO0FBQTZCLFlBQUksRUFBQyxXQUFsQztBQUE4QyxpQkFBUyxFQUFDLFdBQXhEO0FBQ0ksbUJBQVcsRUFBQztBQURoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFHSTtBQUFPLFlBQUksRUFBQyxNQUFaO0FBQW1CLFVBQUUsRUFBQyxPQUF0QjtBQUE4QixZQUFJLEVBQUMsWUFBbkM7QUFBZ0QsaUJBQVMsRUFBQyxXQUExRDtBQUNJLG1CQUFXLEVBQUM7QUFEaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhKLGVBS0k7QUFBVSxZQUFJLEVBQUMsU0FBZjtBQUF5QixZQUFJLEVBQUMsSUFBOUI7QUFBbUMsWUFBSSxFQUFDLElBQXhDO0FBQTZDLGlCQUFTLEVBQUMsV0FBdkQ7QUFDSSxtQkFBVyxFQUFDO0FBRGhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQVVJO0FBQUEsZ0JBQ01JLGVBQWUsQ0FBQ0MsTUFBRCxFQUFRQyxZQUFSO0FBRHJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFWSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQWtCSCxFQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0dBekN3QkU7O0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvY29udGFjdC9jb21wcy9lbWFpbElucHV0LmpzeD84ZTkyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGVtYWlsSW5wdXQuanN4XG5cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHMgZnJvbSAnLi4vLi4vLi4vc3R5bGVzL2xheW91dC9jb250YWN0Lm1vZHVsZS5zY3NzJ1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJ1xuaW1wb3J0IHsgZmFQYXBlclBsYW5lIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJ1xuaW1wb3J0IGVtYWlsanMgZnJvbSAnZW1haWxqcy1jb20nXG5cbmNvbnN0IHNlbmRFbWFpbEJ1dHRvbiA9IChzdGF0dXMsIHRvZ2dsZVN0YXR1cyk9PntcbiAgICBsZXQgc3VibWl0QnV0dG9uQ2hpbGQgPSAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT0nc3VibWl0JyB2YWx1ZT0nc2VuZCBlbWFpbCcgY2xhc3NOYW1lPSdpdGFsaWMgZm9vdGVyVGV4dCcgb25DbGljaz17dG9nZ2xlU3RhdHVzfS8+XG4gICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhUGFwZXJQbGFuZX0gY2xhc3NOYW1lPSdpY29uJyBpZD0ncGxhbmUnLz5cbiAgICAgICAgPC8+XG4gICAgKTtcbiAgICBpZiAoc3RhdHVzPT09J3NlbnQnKSBzdWJtaXRCdXR0b25DaGlsZCA9IChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9J2l0YWxpYyBmb290ZXJUZXh0IGVtYWlsU2VudCc+amsgdGhpcyBkb2Vzbid0IHdvcmsgeWV0PC9oND5cbiAgICAgICAgPC8+XG4gICAgKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzdWJtaXRCdXR0b24nPlxuICAgICAgICAgICAgeyBzdWJtaXRCdXR0b25DaGlsZCB9XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVtYWlsSW5wdXQoKSB7XG4gICAgY29uc3QgW3N0YXR1cywgc2V0U3RhdHVzXSA9IHVzZVN0YXRlKCdub3RTZW50Jyk7XG4gICAgY29uc3QgdG9nZ2xlU3RhdHVzID0gKCk9PntcbiAgICAgICAgaWYgKHN0YXR1cz09PSdub3RTZW50Jykgc2V0U3RhdHVzKCdzZW50Jyk7XG4gICAgICAgIGVsc2Ugc2V0U3RhdHVzKCdub3RTZW50Jyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2VuZEVtYWlsKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpOyAgICAvL1RoaXMgaXMgaW1wb3J0YW50LCBpJ20gbm90IHN1cmUgd2h5LCBidXQgdGhlIGVtYWlsIHdvbid0IHNlbmQgd2l0aG91dCBpdFxuXG4gICAgICAgIGVtYWlsanMuc2VuZEZvcm0oJ3NlcnZpY2Vfb29pdDk5NycsJ3RlbXBsYXRlXzY5a2Q5MmUnLGUudGFyZ2V0LCd1c2VyX0ZDcU9jOUVjU243Mzgxc3NNWUxzZicpXG4gICAgICAgIC50aGVuKFxuICAgICAgICAgICAgKHJlc3VsdCkgPT4geyB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7IH0sICAvLyBmb3IgcGFnZSB0byByZWxvYWRcbiAgICAgICAgICAgIChlcnJvcikgPT4geyBjb25zb2xlLmxvZyhlcnJvci50ZXh0KTsgfVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxmb3JtIGFjdGlvbj0nIycgY2xhc3NOYW1lPXtzLmlucHV0c30gb25TdWJtaXQ9e3NlbmRFbWFpbH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy50ZXh0SW5wdXRzfT5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIm5hbWVcIiBuYW1lPVwiZnJvbV9uYW1lXCIgY2xhc3NOYW1lPSdpbnB1dFRleHQnXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdOYW1lJy8+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJlbWFpbFwiIG5hbWU9XCJmcm9tX2VtYWlsXCIgY2xhc3NOYW1lPSdpbnB1dFRleHQnXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdFbWFpbCBBZGRyZXNzJy8+XG4gICAgICAgICAgICAgICAgPHRleHRhcmVhIG5hbWU9XCJtZXNzYWdlXCIgcm93cz1cIjEyXCIgY29scz1cIjMwXCIgY2xhc3NOYW1lPSdpbnB1dFRleHQnXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdZb3VyIG1lc3NhZ2UgdG8gbWF0aGV3a3JhbXNjaEB1Y3NiLmVkdSc+XG4gICAgICAgICAgICAgICAgPC90ZXh0YXJlYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICB7IHNlbmRFbWFpbEJ1dHRvbihzdGF0dXMsdG9nZ2xlU3RhdHVzKSB9XG4gICAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgIDwvZm9ybT5cbiAgICApO1xufVxuXG4vLyA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiU2VuZFwiIC8+XG4vLyA8aDQgY2xhc3NOYW1lPSdpdGFsaWMgZm9vdGVyVGV4dCc+c2VuZCBlbWFpbDwvaDQ+XG4vLyA8ZGl2IGNsYXNzTmFtZT0nc3VibWl0QnV0dG9uJyBvbkNsaWNrPXt0b2dnbGVTdGF0dXN9PlxuLy8gICAgIHsgc2VuZEVtYWlsQnV0dG9uKHN0YXR1cyx0b2dnbGVTdGF0dXMpIH1cbi8vIDwvZGl2PlxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJzIiwiRm9udEF3ZXNvbWVJY29uIiwiZmFQYXBlclBsYW5lIiwiZW1haWxqcyIsInNlbmRFbWFpbEJ1dHRvbiIsInN0YXR1cyIsInRvZ2dsZVN0YXR1cyIsInN1Ym1pdEJ1dHRvbkNoaWxkIiwiRW1haWxJbnB1dCIsInNldFN0YXR1cyIsInNlbmRFbWFpbCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInNlbmRGb3JtIiwidGFyZ2V0IiwidGhlbiIsInJlc3VsdCIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwidGV4dCIsImlucHV0cyIsInRleHRJbnB1dHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/contact/comps/emailInput.jsx\n");

/***/ })

});