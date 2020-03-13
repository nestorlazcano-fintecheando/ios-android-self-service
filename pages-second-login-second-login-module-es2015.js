(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-second-login-second-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/second-login/second-login.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/second-login/second-login.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n<h1>Second Login</h1>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/second-login/second-login-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/second-login/second-login-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: SecondLoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecondLoginPageRoutingModule", function() { return SecondLoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _second_login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./second-login.page */ "./src/app/pages/second-login/second-login.page.ts");




const routes = [
    {
        path: '',
        component: _second_login_page__WEBPACK_IMPORTED_MODULE_3__["SecondLoginPage"]
    }
];
let SecondLoginPageRoutingModule = class SecondLoginPageRoutingModule {
};
SecondLoginPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SecondLoginPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/second-login/second-login.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/second-login/second-login.module.ts ***!
  \***********************************************************/
/*! exports provided: SecondLoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecondLoginPageModule", function() { return SecondLoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _second_login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./second-login-routing.module */ "./src/app/pages/second-login/second-login-routing.module.ts");
/* harmony import */ var _second_login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./second-login.page */ "./src/app/pages/second-login/second-login.page.ts");







let SecondLoginPageModule = class SecondLoginPageModule {
};
SecondLoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _second_login_routing_module__WEBPACK_IMPORTED_MODULE_5__["SecondLoginPageRoutingModule"]
        ],
        declarations: [_second_login_page__WEBPACK_IMPORTED_MODULE_6__["SecondLoginPage"]]
    })
], SecondLoginPageModule);



/***/ }),

/***/ "./src/app/pages/second-login/second-login.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/second-login/second-login.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NlY29uZC1sb2dpbi9zZWNvbmQtbG9naW4ucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/second-login/second-login.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/second-login/second-login.page.ts ***!
  \*********************************************************/
/*! exports provided: SecondLoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecondLoginPage", function() { return SecondLoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");



let SecondLoginPage = class SecondLoginPage {
    constructor(menuCtrl) {
        this.menuCtrl = menuCtrl;
    }
    ngOnInit() {
        this.menuCtrl.enable(false);
        this.menuCtrl.swipeGesture(false);
    }
};
SecondLoginPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] }
];
SecondLoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-second-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./second-login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/second-login/second-login.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./second-login.page.scss */ "./src/app/pages/second-login/second-login.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]])
], SecondLoginPage);



/***/ })

}]);
//# sourceMappingURL=pages-second-login-second-login-module-es2015.js.map