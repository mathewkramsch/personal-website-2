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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ EmailInput; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_layout_contact_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../styles/layout/contact.module.scss */ \"./styles/layout/contact.module.scss\");\n/* harmony import */ var _styles_layout_contact_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_layout_contact_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! emailjs-com */ \"./node_modules/emailjs-com/es/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/home/mathewkramsch/Desktop/Coding/web_development/react/next_js/resume_website_2/components/contact/comps/emailInput.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n// emailInput.jsx\n\n\n\n\n\n\nvar sendEmailButton = function sendEmailButton(status) {\n  var submitValue = 'send email';\n  if (status === 'sent') submitValue = 'sent';\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"submitButton\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n      type: \"submit\",\n      value: submitValue,\n      className: \"italic footerText\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {\n      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faPaperPlane,\n      className: \"icon\",\n      id: \"plane\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 13,\n    columnNumber: 9\n  }, _this);\n};\n\nfunction EmailInput() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('notSent'),\n      status = _useState[0],\n      setStatus = _useState[1];\n\n  var toggleStatus = function toggleStatus() {\n    // not using this for now\n    if (status === 'notSent') setStatus('sent');else setStatus('notSent');\n  };\n\n  var sendEmail = function sendEmail(e) {\n    e.preventDefault(); //This is important, i'm not sure why, but the email won't send without it\n\n    emailjs_com__WEBPACK_IMPORTED_MODULE_3__.default.sendForm('service_ooit997', 'template_69kd92e', e.target, 'user_FCqOc9EcSn7381ssMYLsf').then(function (result) {\n      window.location.reload();\n      alert('Message Sent');\n    }, function (error) {\n      console.log(error.text);\n    });\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n    action: \"#\",\n    className: (_styles_layout_contact_module_scss__WEBPACK_IMPORTED_MODULE_5___default().inputs),\n    onSubmit: sendEmail,\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_styles_layout_contact_module_scss__WEBPACK_IMPORTED_MODULE_5___default().textInputs),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        type: \"text\",\n        id: \"name\",\n        name: \"from_name\",\n        className: \"inputText\",\n        placeholder: \"Name\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        type: \"text\",\n        id: \"email\",\n        name: \"from_email\",\n        className: \"inputText\",\n        placeholder: \"Email Address\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n        name: \"message\",\n        rows: \"12\",\n        cols: \"30\",\n        className: \"inputText\",\n        placeholder: \"Your message to mathewkramsch@ucsb.edu\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      children: sendEmailButton(status)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 40,\n    columnNumber: 9\n  }, this);\n}\n\n_s(EmailInput, \"INjINM2QRW78gDIheAZrPcNwv88=\");\n\n_c = EmailInput;\n\nvar _c;\n\n$RefreshReg$(_c, \"EmailInput\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NvbnRhY3QvY29tcHMvZW1haWxJbnB1dC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTU0sZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDQyxNQUFELEVBQVU7QUFDOUIsTUFBSUMsV0FBVyxHQUFHLFlBQWxCO0FBQ0EsTUFBSUQsTUFBTSxLQUFHLE1BQWIsRUFBcUJDLFdBQVcsR0FBRyxNQUFkO0FBQ3JCLHNCQUNJO0FBQUssYUFBUyxFQUFDLGNBQWY7QUFBQSw0QkFDSTtBQUFPLFVBQUksRUFBQyxRQUFaO0FBQXFCLFdBQUssRUFBRUEsV0FBNUI7QUFBeUMsZUFBUyxFQUFDO0FBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQUVJLDhEQUFDLDJFQUFEO0FBQWlCLFVBQUksRUFBRUosMkVBQXZCO0FBQXFDLGVBQVMsRUFBQyxNQUEvQztBQUFzRCxRQUFFLEVBQUM7QUFBekQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBTUgsQ0FURDs7QUFXZSxTQUFTSyxVQUFULEdBQXNCO0FBQUE7O0FBQUEsa0JBQ0xSLCtDQUFRLENBQUMsU0FBRCxDQURIO0FBQUEsTUFDMUJNLE1BRDBCO0FBQUEsTUFDbEJHLFNBRGtCOztBQUVqQyxNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFJO0FBQUc7QUFDeEIsUUFBSUosTUFBTSxLQUFHLFNBQWIsRUFBd0JHLFNBQVMsQ0FBQyxNQUFELENBQVQsQ0FBeEIsS0FDS0EsU0FBUyxDQUFDLFNBQUQsQ0FBVDtBQUNSLEdBSEQ7O0FBSUEsTUFBTUUsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsQ0FBRCxFQUFLO0FBQ25CQSxJQUFBQSxDQUFDLENBQUNDLGNBQUYsR0FEbUIsQ0FDSTs7QUFFdkJULElBQUFBLHlEQUFBLENBQWlCLGlCQUFqQixFQUFtQyxrQkFBbkMsRUFBc0RRLENBQUMsQ0FBQ0csTUFBeEQsRUFBK0QsNEJBQS9ELEVBQ0NDLElBREQsQ0FFSSxVQUFDQyxNQUFELEVBQVk7QUFDUkMsTUFBQUEsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxNQUFoQjtBQUNBQyxNQUFBQSxLQUFLLENBQUMsY0FBRCxDQUFMO0FBQ0gsS0FMTCxFQU1JLFVBQUNDLEtBQUQsRUFBVztBQUFFQyxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBSyxDQUFDRyxJQUFsQjtBQUEwQixLQU4zQztBQVFILEdBWEQ7O0FBYUEsc0JBQ0k7QUFBTSxVQUFNLEVBQUMsR0FBYjtBQUFpQixhQUFTLEVBQUV4QixrRkFBNUI7QUFBc0MsWUFBUSxFQUFFVSxTQUFoRDtBQUFBLDRCQUNJO0FBQUssZUFBUyxFQUFFVixzRkFBaEI7QUFBQSw4QkFDSTtBQUFPLFlBQUksRUFBQyxNQUFaO0FBQW1CLFVBQUUsRUFBQyxNQUF0QjtBQUE2QixZQUFJLEVBQUMsV0FBbEM7QUFBOEMsaUJBQVMsRUFBQyxXQUF4RDtBQUNJLG1CQUFXLEVBQUM7QUFEaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBR0k7QUFBTyxZQUFJLEVBQUMsTUFBWjtBQUFtQixVQUFFLEVBQUMsT0FBdEI7QUFBOEIsWUFBSSxFQUFDLFlBQW5DO0FBQWdELGlCQUFTLEVBQUMsV0FBMUQ7QUFDSSxtQkFBVyxFQUFDO0FBRGhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FISixlQUtJO0FBQVUsWUFBSSxFQUFDLFNBQWY7QUFBeUIsWUFBSSxFQUFDLElBQTlCO0FBQW1DLFlBQUksRUFBQyxJQUF4QztBQUE2QyxpQkFBUyxFQUFDLFdBQXZEO0FBQ0ksbUJBQVcsRUFBQztBQURoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFVSTtBQUFBLGdCQUNNSSxlQUFlLENBQUNDLE1BQUQ7QUFEckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBZ0JIOztHQW5DdUJFOztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2NvbnRhY3QvY29tcHMvZW1haWxJbnB1dC5qc3g/OGU5MiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBlbWFpbElucHV0LmpzeFxuXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBzIGZyb20gJy4uLy4uLy4uL3N0eWxlcy9sYXlvdXQvY29udGFjdC5tb2R1bGUuc2NzcydcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSdcbmltcG9ydCB7IGZhUGFwZXJQbGFuZSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucydcbmltcG9ydCBlbWFpbGpzIGZyb20gJ2VtYWlsanMtY29tJ1xuXG5jb25zdCBzZW5kRW1haWxCdXR0b24gPSAoc3RhdHVzKT0+e1xuICAgIGxldCBzdWJtaXRWYWx1ZSA9ICdzZW5kIGVtYWlsJ1xuICAgIGlmIChzdGF0dXM9PT0nc2VudCcpIHN1Ym1pdFZhbHVlID0gJ3NlbnQnXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3N1Ym1pdEJ1dHRvbic+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT0nc3VibWl0JyB2YWx1ZT17c3VibWl0VmFsdWV9IGNsYXNzTmFtZT0naXRhbGljIGZvb3RlclRleHQnLz5cbiAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFQYXBlclBsYW5lfSBjbGFzc05hbWU9J2ljb24nIGlkPSdwbGFuZScvPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFbWFpbElucHV0KCkge1xuICAgIGNvbnN0IFtzdGF0dXMsIHNldFN0YXR1c10gPSB1c2VTdGF0ZSgnbm90U2VudCcpO1xuICAgIGNvbnN0IHRvZ2dsZVN0YXR1cyA9ICgpPT57ICAvLyBub3QgdXNpbmcgdGhpcyBmb3Igbm93XG4gICAgICAgIGlmIChzdGF0dXM9PT0nbm90U2VudCcpIHNldFN0YXR1cygnc2VudCcpO1xuICAgICAgICBlbHNlIHNldFN0YXR1cygnbm90U2VudCcpO1xuICAgIH1cbiAgICBjb25zdCBzZW5kRW1haWwgPSAoZSk9PntcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpOyAgICAvL1RoaXMgaXMgaW1wb3J0YW50LCBpJ20gbm90IHN1cmUgd2h5LCBidXQgdGhlIGVtYWlsIHdvbid0IHNlbmQgd2l0aG91dCBpdFxuXG4gICAgICAgIGVtYWlsanMuc2VuZEZvcm0oJ3NlcnZpY2Vfb29pdDk5NycsJ3RlbXBsYXRlXzY5a2Q5MmUnLGUudGFyZ2V0LCd1c2VyX0ZDcU9jOUVjU243Mzgxc3NNWUxzZicpXG4gICAgICAgIC50aGVuKFxuICAgICAgICAgICAgKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICAgICAgICBhbGVydCgnTWVzc2FnZSBTZW50Jyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgKGVycm9yKSA9PiB7IGNvbnNvbGUubG9nKGVycm9yLnRleHQpOyB9XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGZvcm0gYWN0aW9uPScjJyBjbGFzc05hbWU9e3MuaW5wdXRzfSBvblN1Ym1pdD17c2VuZEVtYWlsfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLnRleHRJbnB1dHN9PlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibmFtZVwiIG5hbWU9XCJmcm9tX25hbWVcIiBjbGFzc05hbWU9J2lucHV0VGV4dCdcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J05hbWUnLz5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImVtYWlsXCIgbmFtZT1cImZyb21fZW1haWxcIiBjbGFzc05hbWU9J2lucHV0VGV4dCdcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0VtYWlsIEFkZHJlc3MnLz5cbiAgICAgICAgICAgICAgICA8dGV4dGFyZWEgbmFtZT1cIm1lc3NhZ2VcIiByb3dzPVwiMTJcIiBjb2xzPVwiMzBcIiBjbGFzc05hbWU9J2lucHV0VGV4dCdcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J1lvdXIgbWVzc2FnZSB0byBtYXRoZXdrcmFtc2NoQHVjc2IuZWR1Jz5cbiAgICAgICAgICAgICAgICA8L3RleHRhcmVhPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIHsgc2VuZEVtYWlsQnV0dG9uKHN0YXR1cykgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZm9ybT5cbiAgICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJzIiwiRm9udEF3ZXNvbWVJY29uIiwiZmFQYXBlclBsYW5lIiwiZW1haWxqcyIsInNlbmRFbWFpbEJ1dHRvbiIsInN0YXR1cyIsInN1Ym1pdFZhbHVlIiwiRW1haWxJbnB1dCIsInNldFN0YXR1cyIsInRvZ2dsZVN0YXR1cyIsInNlbmRFbWFpbCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInNlbmRGb3JtIiwidGFyZ2V0IiwidGhlbiIsInJlc3VsdCIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwiYWxlcnQiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJ0ZXh0IiwiaW5wdXRzIiwidGV4dElucHV0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/contact/comps/emailInput.jsx\n");

/***/ })

});