/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[3].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[3].oneOf[3].use[4]!./styles/layout/projects.module.scss":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[3].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[3].oneOf[3].use[4]!./styles/layout/projects.module.scss ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".projects_page__1_KIW {\\n  background-color: #f5f5f5;\\n}\\n\\n.projects_pageContent__KoBl3 {\\n  display: -moz-box;\\n  display: flex;\\n  -moz-box-orient: horizontal;\\n  -moz-box-direction: normal;\\n       flex-direction: row;\\n  -moz-box-pack: justify;\\n       justify-content: space-between;\\n  -moz-box-align: top;\\n       align-items: top;\\n  width: 85vw;\\n  margin: auto;\\n  z-index: 1;\\n}\\n\\n.projects_leftContainer__9ojdi {\\n  position: sticky;\\n  top: 0;\\n  height: 100vh;\\n  display: -moz-box;\\n  display: flex;\\n}\\n.projects_leftContainer__9ojdi h2 {\\n  margin: auto;\\n}\\n\\n.projects_rightContainer__1KF6S {\\n  width: 65%;\\n  z-index: 1;\\n}\\n\\n.projects_projectCards__ijHLb {\\n  margin-top: 36vh;\\n  margin-bottom: 36vh;\\n}\\n\\n@media (max-width: 1600px) {\\n  .projects_pageContent__KoBl3 {\\n    -moz-box-orient: vertical;\\n    -moz-box-direction: normal;\\n         flex-direction: column;\\n  }\\n\\n  .projects_leftContainer__9ojdi {\\n    position: relative;\\n    height: auto;\\n    margin-top: 5vh;\\n    text-align: center;\\n  }\\n\\n  .projects_rightContainer__1KF6S {\\n    margin: auto;\\n    width: 85%;\\n  }\\n\\n  .projects_projectCards__ijHLb {\\n    margin-top: 10vh;\\n    margin-bottom: 15vh;\\n  }\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://projects.module.scss\",\"webpack://../components/colors.scss\"],\"names\":[],\"mappings\":\"AAIA;EACI,yBCKQ;ADRZ;;AAMA;EACI,iBAAA;EAAA,aAAA;EACA,2BAAA;EAAA,0BAAA;OAAA,mBAAA;EACA,sBAAA;OAAA,8BAAA;EACA,mBAAA;OAAA,gBAAA;EACA,WAAA;EACA,YAAA;EACA,UAAA;AAHJ;;AAMA;EACI,gBAAA;EACA,MAAA;EACA,aAAA;EACA,iBAAA;EAAA,aAAA;AAHJ;AAII;EAAK,YAAA;AADT;;AAIA;EACI,UAAA;EACA,UAAA;AADJ;;AAIA;EACI,gBAAA;EACA,mBAAA;AADJ;;AAKA;EACI;IACI,yBAAA;IAAA,0BAAA;SAAA,sBAAA;EAFN;;EAKE;IACI,kBAAA;IACA,YAAA;IACA,eAAA;IACA,kBAAA;EAFN;;EAKE;IACI,YAAA;IACA,UAAA;EAFN;;EAKE;IACI,gBAAA;IACA,mBAAA;EAFN;AACF\",\"sourcesContent\":[\"// projects.scss\\n\\n@use '../components/colors';\\n\\n.page {\\n    background-color: colors.$bg-project-page-1;\\n}\\n\\n.pageContent {\\n    display: flex;\\n    flex-direction: row;\\n    justify-content: space-between;\\n    align-items: top;\\n    width: 85vw;\\n    margin: auto;\\n    z-index: 1;\\n}\\n\\n.leftContainer {\\n    position: sticky;\\n    top: 0;\\n    height: 100vh;\\n    display: flex;\\n    h2 { margin: auto; }\\n}\\n\\n.rightContainer {\\n    width: 65%;\\n    z-index: 1;\\n}\\n\\n.projectCards {\\n    margin-top: 36vh;\\n    margin-bottom: 36vh;\\n}\\n\\n\\n@media (max-width: 1600px) {\\n    .pageContent {\\n        flex-direction: column;\\n    }\\n\\n    .leftContainer {\\n        position: relative;\\n        height: auto;\\n        margin-top: 5vh;\\n        text-align: center;\\n    }\\n\\n    .rightContainer {\\n        margin: auto;\\n        width: 85%;\\n    }\\n\\n    .projectCards {\\n        margin-top: 10vh;\\n        margin-bottom: 15vh;\\n    }\\n}\\n\",\"// variables.scss\\n\\n//~~~~~~~~~~~~~~~~ Color Names ~~~~~~~~~~~~~~~~~~~~~~~~~~~\\n$mint-green-100: #32Fca7;  // bluest\\n$mint-green-200: #32fc7f;\\n$mint-green-300: #32fc56;  // greenest\\n\\n$white-100: #fff;  // whitest\\n$white-200: #f9f9f9;\\n$white-300: #f7f7f7;\\n$white-400: #f5f5f5;  //darkest\\n\\n$grey-100: #ececec;  // lightest grey\\n$grey-200: #e8e8e8;\\n$grey-300: #ddd;\\n$grey-400: #cacaca;\\n$grey-500: #b5b5b5;  // darkest grey\\n\\n$black-000: #000;  // blackest\\n$black-150: #1e1e1e;\\n$black-200: #222;\\n$black-300: #333;\\n$black-600: #667;\\n$black-800: #888;  // lightest\\n\\n\\n\\n//~~~~~~~~~~~~~~~~ Component Colors ~~~~~~~~~~~~~~~~~~~~~~\\n\\n// Background Colors\\n$bg-project-page-1: $white-400;\\n$bg-project-page-2: $white-200;\\n\\n$bg-contact-page-1: $black-150;\\n$bg-contact-page-2: $black-200;\\n$bg-contact-page-3: $white-300;\\n\\n// Cards\\n// $bg-card-project-page: $grey-100;\\n$bg-card-project-page: $grey-200;\\n$bg-card-progLang-page: $white-400;\\n$bg-card-progLang-skill: $grey-500;\\n$bg-card-progLang-skill-bg: $grey-300;\\n$bg-card-contact-page: $black-300;\\n\\n// Accents\\n$fg-accent-main: $mint-green-100;\\n$fg-accent-alt: $mint-green-200;\\n\\n// Typography\\n$fg-page-title: $black-200;\\n$fg-text-black: $black-000;\\n$fg-text-link: $black-300;\\n$fg-text-description: $black-600;\\n$fg-text-contact-page: $black-800;\\n$fg-text-proficiency: $grey-500;\\n$fg-card-open-project: $black-300;\\n\\n// Icons\\n$fg-icon-normal: $grey-400;\\n$fg-icon-card: $grey-300;\\n$fg-icon-card-alt: $grey-200;\\n$fg-icon-contact-page: $black-300;\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"page\": \"projects_page__1_KIW\",\n\t\"pageContent\": \"projects_pageContent__KoBl3\",\n\t\"leftContainer\": \"projects_leftContainer__9ojdi\",\n\t\"rightContainer\": \"projects_rightContainer__1KF6S\",\n\t\"projectCards\": \"projects_projectCards__ijHLb\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzNdLnVzZVsxXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzNdLnVzZVsyXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzNdLnVzZVszXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzNdLnVzZVs0XSEuL3N0eWxlcy9sYXlvdXQvcHJvamVjdHMubW9kdWxlLnNjc3MuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyxvSEFBeUQ7QUFDbkc7QUFDQTtBQUNBLGlFQUFpRSw4QkFBOEIsR0FBRyxrQ0FBa0Msc0JBQXNCLGtCQUFrQixnQ0FBZ0MsK0JBQStCLDZCQUE2QiwyQkFBMkIsd0NBQXdDLHdCQUF3QiwwQkFBMEIsZ0JBQWdCLGlCQUFpQixlQUFlLEdBQUcsb0NBQW9DLHFCQUFxQixXQUFXLGtCQUFrQixzQkFBc0Isa0JBQWtCLEdBQUcscUNBQXFDLGlCQUFpQixHQUFHLHFDQUFxQyxlQUFlLGVBQWUsR0FBRyxtQ0FBbUMscUJBQXFCLHdCQUF3QixHQUFHLGdDQUFnQyxrQ0FBa0MsZ0NBQWdDLGlDQUFpQyxrQ0FBa0MsS0FBSyxzQ0FBc0MseUJBQXlCLG1CQUFtQixzQkFBc0IseUJBQXlCLEtBQUssdUNBQXVDLG1CQUFtQixpQkFBaUIsS0FBSyxxQ0FBcUMsdUJBQXVCLDBCQUEwQixLQUFLLEdBQUcsT0FBTywySEFBMkgsV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssV0FBVyxXQUFXLEtBQUsseUVBQXlFLFdBQVcsa0RBQWtELEdBQUcsa0JBQWtCLG9CQUFvQiwwQkFBMEIscUNBQXFDLHVCQUF1QixrQkFBa0IsbUJBQW1CLGlCQUFpQixHQUFHLG9CQUFvQix1QkFBdUIsYUFBYSxvQkFBb0Isb0JBQW9CLFdBQVcsZUFBZSxHQUFHLHFCQUFxQixpQkFBaUIsaUJBQWlCLEdBQUcsbUJBQW1CLHVCQUF1QiwwQkFBMEIsR0FBRyxrQ0FBa0Msb0JBQW9CLGlDQUFpQyxPQUFPLHdCQUF3Qiw2QkFBNkIsdUJBQXVCLDBCQUEwQiw2QkFBNkIsT0FBTyx5QkFBeUIsdUJBQXVCLHFCQUFxQixPQUFPLHVCQUF1QiwyQkFBMkIsOEJBQThCLE9BQU8sR0FBRyxpSEFBaUgsb0NBQW9DLDZCQUE2QixrQ0FBa0MsZ0NBQWdDLHNCQUFzQix3QkFBd0Isa0NBQWtDLHFDQUFxQyxrQkFBa0IscUJBQXFCLHVCQUF1QixzQ0FBc0MsaUNBQWlDLG1CQUFtQixtQkFBbUIsbUJBQW1CLHFCQUFxQixzSUFBc0ksaUNBQWlDLG1DQUFtQyxpQ0FBaUMsaUNBQWlDLGtEQUFrRCxtQ0FBbUMscUNBQXFDLHFDQUFxQyx3Q0FBd0Msb0NBQW9DLGlEQUFpRCxrQ0FBa0MsOENBQThDLDZCQUE2Qiw0QkFBNEIsbUNBQW1DLG9DQUFvQyxrQ0FBa0Msb0NBQW9DLHlDQUF5QywyQkFBMkIsK0JBQStCLG9DQUFvQyxxQkFBcUI7QUFDdnhJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zdHlsZXMvbGF5b3V0L3Byb2plY3RzLm1vZHVsZS5zY3NzP2FkZGMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLnByb2plY3RzX3BhZ2VfXzFfS0lXIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XFxufVxcblxcbi5wcm9qZWN0c19wYWdlQ29udGVudF9fS29CbDMge1xcbiAgZGlzcGxheTogLW1vei1ib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLW1vei1ib3gtb3JpZW50OiBob3Jpem9udGFsO1xcbiAgLW1vei1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XFxuICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAtbW96LWJveC1wYWNrOiBqdXN0aWZ5O1xcbiAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAtbW96LWJveC1hbGlnbjogdG9wO1xcbiAgICAgICBhbGlnbi1pdGVtczogdG9wO1xcbiAgd2lkdGg6IDg1dnc7XFxuICBtYXJnaW46IGF1dG87XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG4ucHJvamVjdHNfbGVmdENvbnRhaW5lcl9fOW9qZGkge1xcbiAgcG9zaXRpb246IHN0aWNreTtcXG4gIHRvcDogMDtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiAtbW96LWJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5wcm9qZWN0c19sZWZ0Q29udGFpbmVyX185b2pkaSBoMiB7XFxuICBtYXJnaW46IGF1dG87XFxufVxcblxcbi5wcm9qZWN0c19yaWdodENvbnRhaW5lcl9fMUtGNlMge1xcbiAgd2lkdGg6IDY1JTtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbi5wcm9qZWN0c19wcm9qZWN0Q2FyZHNfX2lqSExiIHtcXG4gIG1hcmdpbi10b3A6IDM2dmg7XFxuICBtYXJnaW4tYm90dG9tOiAzNnZoO1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogMTYwMHB4KSB7XFxuICAucHJvamVjdHNfcGFnZUNvbnRlbnRfX0tvQmwzIHtcXG4gICAgLW1vei1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcXG4gICAgLW1vei1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XFxuICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG5cXG4gIC5wcm9qZWN0c19sZWZ0Q29udGFpbmVyX185b2pkaSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBtYXJnaW4tdG9wOiA1dmg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5wcm9qZWN0c19yaWdodENvbnRhaW5lcl9fMUtGNlMge1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIHdpZHRoOiA4NSU7XFxuICB9XFxuXFxuICAucHJvamVjdHNfcHJvamVjdENhcmRzX19pakhMYiB7XFxuICAgIG1hcmdpbi10b3A6IDEwdmg7XFxuICAgIG1hcmdpbi1ib3R0b206IDE1dmg7XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9wcm9qZWN0cy5tb2R1bGUuc2Nzc1wiLFwid2VicGFjazovLy4uL2NvbXBvbmVudHMvY29sb3JzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBSUE7RUFDSSx5QkNLUTtBRFJaOztBQU1BO0VBQ0ksaUJBQUE7RUFBQSxhQUFBO0VBQ0EsMkJBQUE7RUFBQSwwQkFBQTtPQUFBLG1CQUFBO0VBQ0Esc0JBQUE7T0FBQSw4QkFBQTtFQUNBLG1CQUFBO09BQUEsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUFISjs7QUFNQTtFQUNJLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUFBLGFBQUE7QUFISjtBQUlJO0VBQUssWUFBQTtBQURUOztBQUlBO0VBQ0ksVUFBQTtFQUNBLFVBQUE7QUFESjs7QUFJQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7QUFESjs7QUFLQTtFQUNJO0lBQ0kseUJBQUE7SUFBQSwwQkFBQTtTQUFBLHNCQUFBO0VBRk47O0VBS0U7SUFDSSxrQkFBQTtJQUNBLFlBQUE7SUFDQSxlQUFBO0lBQ0Esa0JBQUE7RUFGTjs7RUFLRTtJQUNJLFlBQUE7SUFDQSxVQUFBO0VBRk47O0VBS0U7SUFDSSxnQkFBQTtJQUNBLG1CQUFBO0VBRk47QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvLyBwcm9qZWN0cy5zY3NzXFxuXFxuQHVzZSAnLi4vY29tcG9uZW50cy9jb2xvcnMnO1xcblxcbi5wYWdlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY29sb3JzLiRiZy1wcm9qZWN0LXBhZ2UtMTtcXG59XFxuXFxuLnBhZ2VDb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogdG9wO1xcbiAgICB3aWR0aDogODV2dztcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG5cXG4ubGVmdENvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiBzdGlja3k7XFxuICAgIHRvcDogMDtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgaDIgeyBtYXJnaW46IGF1dG87IH1cXG59XFxuXFxuLnJpZ2h0Q29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDY1JTtcXG4gICAgei1pbmRleDogMTtcXG59XFxuXFxuLnByb2plY3RDYXJkcyB7XFxuICAgIG1hcmdpbi10b3A6IDM2dmg7XFxuICAgIG1hcmdpbi1ib3R0b206IDM2dmg7XFxufVxcblxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiAxNjAwcHgpIHtcXG4gICAgLnBhZ2VDb250ZW50IHtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIH1cXG5cXG4gICAgLmxlZnRDb250YWluZXIge1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xcbiAgICAgICAgbWFyZ2luLXRvcDogNXZoO1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgIC5yaWdodENvbnRhaW5lciB7XFxuICAgICAgICBtYXJnaW46IGF1dG87XFxuICAgICAgICB3aWR0aDogODUlO1xcbiAgICB9XFxuXFxuICAgIC5wcm9qZWN0Q2FyZHMge1xcbiAgICAgICAgbWFyZ2luLXRvcDogMTB2aDtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1dmg7XFxuICAgIH1cXG59XFxuXCIsXCIvLyB2YXJpYWJsZXMuc2Nzc1xcblxcbi8vfn5+fn5+fn5+fn5+fn5+fiBDb2xvciBOYW1lcyB+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5cXG4kbWludC1ncmVlbi0xMDA6ICMzMkZjYTc7ICAvLyBibHVlc3RcXG4kbWludC1ncmVlbi0yMDA6ICMzMmZjN2Y7XFxuJG1pbnQtZ3JlZW4tMzAwOiAjMzJmYzU2OyAgLy8gZ3JlZW5lc3RcXG5cXG4kd2hpdGUtMTAwOiAjZmZmOyAgLy8gd2hpdGVzdFxcbiR3aGl0ZS0yMDA6ICNmOWY5Zjk7XFxuJHdoaXRlLTMwMDogI2Y3ZjdmNztcXG4kd2hpdGUtNDAwOiAjZjVmNWY1OyAgLy9kYXJrZXN0XFxuXFxuJGdyZXktMTAwOiAjZWNlY2VjOyAgLy8gbGlnaHRlc3QgZ3JleVxcbiRncmV5LTIwMDogI2U4ZThlODtcXG4kZ3JleS0zMDA6ICNkZGQ7XFxuJGdyZXktNDAwOiAjY2FjYWNhO1xcbiRncmV5LTUwMDogI2I1YjViNTsgIC8vIGRhcmtlc3QgZ3JleVxcblxcbiRibGFjay0wMDA6ICMwMDA7ICAvLyBibGFja2VzdFxcbiRibGFjay0xNTA6ICMxZTFlMWU7XFxuJGJsYWNrLTIwMDogIzIyMjtcXG4kYmxhY2stMzAwOiAjMzMzO1xcbiRibGFjay02MDA6ICM2Njc7XFxuJGJsYWNrLTgwMDogIzg4ODsgIC8vIGxpZ2h0ZXN0XFxuXFxuXFxuXFxuLy9+fn5+fn5+fn5+fn5+fn5+IENvbXBvbmVudCBDb2xvcnMgfn5+fn5+fn5+fn5+fn5+fn5+fn5+flxcblxcbi8vIEJhY2tncm91bmQgQ29sb3JzXFxuJGJnLXByb2plY3QtcGFnZS0xOiAkd2hpdGUtNDAwO1xcbiRiZy1wcm9qZWN0LXBhZ2UtMjogJHdoaXRlLTIwMDtcXG5cXG4kYmctY29udGFjdC1wYWdlLTE6ICRibGFjay0xNTA7XFxuJGJnLWNvbnRhY3QtcGFnZS0yOiAkYmxhY2stMjAwO1xcbiRiZy1jb250YWN0LXBhZ2UtMzogJHdoaXRlLTMwMDtcXG5cXG4vLyBDYXJkc1xcbi8vICRiZy1jYXJkLXByb2plY3QtcGFnZTogJGdyZXktMTAwO1xcbiRiZy1jYXJkLXByb2plY3QtcGFnZTogJGdyZXktMjAwO1xcbiRiZy1jYXJkLXByb2dMYW5nLXBhZ2U6ICR3aGl0ZS00MDA7XFxuJGJnLWNhcmQtcHJvZ0xhbmctc2tpbGw6ICRncmV5LTUwMDtcXG4kYmctY2FyZC1wcm9nTGFuZy1za2lsbC1iZzogJGdyZXktMzAwO1xcbiRiZy1jYXJkLWNvbnRhY3QtcGFnZTogJGJsYWNrLTMwMDtcXG5cXG4vLyBBY2NlbnRzXFxuJGZnLWFjY2VudC1tYWluOiAkbWludC1ncmVlbi0xMDA7XFxuJGZnLWFjY2VudC1hbHQ6ICRtaW50LWdyZWVuLTIwMDtcXG5cXG4vLyBUeXBvZ3JhcGh5XFxuJGZnLXBhZ2UtdGl0bGU6ICRibGFjay0yMDA7XFxuJGZnLXRleHQtYmxhY2s6ICRibGFjay0wMDA7XFxuJGZnLXRleHQtbGluazogJGJsYWNrLTMwMDtcXG4kZmctdGV4dC1kZXNjcmlwdGlvbjogJGJsYWNrLTYwMDtcXG4kZmctdGV4dC1jb250YWN0LXBhZ2U6ICRibGFjay04MDA7XFxuJGZnLXRleHQtcHJvZmljaWVuY3k6ICRncmV5LTUwMDtcXG4kZmctY2FyZC1vcGVuLXByb2plY3Q6ICRibGFjay0zMDA7XFxuXFxuLy8gSWNvbnNcXG4kZmctaWNvbi1ub3JtYWw6ICRncmV5LTQwMDtcXG4kZmctaWNvbi1jYXJkOiAkZ3JleS0zMDA7XFxuJGZnLWljb24tY2FyZC1hbHQ6ICRncmV5LTIwMDtcXG4kZmctaWNvbi1jb250YWN0LXBhZ2U6ICRibGFjay0zMDA7XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwicGFnZVwiOiBcInByb2plY3RzX3BhZ2VfXzFfS0lXXCIsXG5cdFwicGFnZUNvbnRlbnRcIjogXCJwcm9qZWN0c19wYWdlQ29udGVudF9fS29CbDNcIixcblx0XCJsZWZ0Q29udGFpbmVyXCI6IFwicHJvamVjdHNfbGVmdENvbnRhaW5lcl9fOW9qZGlcIixcblx0XCJyaWdodENvbnRhaW5lclwiOiBcInByb2plY3RzX3JpZ2h0Q29udGFpbmVyX18xS0Y2U1wiLFxuXHRcInByb2plY3RDYXJkc1wiOiBcInByb2plY3RzX3Byb2plY3RDYXJkc19faWpITGJcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[3].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[3].oneOf[3].use[4]!./styles/layout/projects.module.scss\n");

/***/ })

});