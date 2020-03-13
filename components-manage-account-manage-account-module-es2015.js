(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-manage-account-manage-account-module"],{

/***/ "./src/app/pages/transfers/components/manage-account/manage-account-routing.module.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/transfers/components/manage-account/manage-account-routing.module.ts ***!
  \********************************************************************************************/
/*! exports provided: ManageAccountPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageAccountPageRoutingModule", function() { return ManageAccountPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _manage_account_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./manage-account.page */ "./src/app/pages/transfers/components/manage-account/manage-account.page.ts");




const routes = [
    {
        path: '',
        component: _manage_account_page__WEBPACK_IMPORTED_MODULE_3__["ManageAccountPage"]
    }
];
let ManageAccountPageRoutingModule = class ManageAccountPageRoutingModule {
};
ManageAccountPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ManageAccountPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/transfers/components/manage-account/manage-account.module.ts":
/*!************************************************************************************!*\
  !*** ./src/app/pages/transfers/components/manage-account/manage-account.module.ts ***!
  \************************************************************************************/
/*! exports provided: ManageAccountPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageAccountPageModule", function() { return ManageAccountPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _manage_account_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./manage-account-routing.module */ "./src/app/pages/transfers/components/manage-account/manage-account-routing.module.ts");
/* harmony import */ var _manage_account_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./manage-account.page */ "./src/app/pages/transfers/components/manage-account/manage-account.page.ts");







let ManageAccountPageModule = class ManageAccountPageModule {
};
ManageAccountPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _manage_account_routing_module__WEBPACK_IMPORTED_MODULE_5__["ManageAccountPageRoutingModule"]
        ],
        declarations: [_manage_account_page__WEBPACK_IMPORTED_MODULE_6__["ManageAccountPage"]],
        entryComponents: [_manage_account_page__WEBPACK_IMPORTED_MODULE_6__["ManageAccountPage"]]
    })
], ManageAccountPageModule);



/***/ })

}]);
//# sourceMappingURL=components-manage-account-manage-account-module-es2015.js.map