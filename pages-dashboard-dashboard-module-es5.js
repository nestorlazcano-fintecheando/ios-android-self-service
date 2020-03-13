function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-dashboard-dashboard-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/components/movements/movements.page.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/components/movements/movements.page.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesDashboardComponentsMovementsMovementsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header translucent>\n  <ion-toolbar>\n    <ion-title>Movimientos</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"dismissModal()\">\n        <ion-icon name=\"close-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.page.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.page.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesDashboardDashboardPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button style=\"color: #AD915F;\"></ion-menu-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button style=\"color: #AD915F;\">\n        <ion-icon name=\"notifications\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div class=\"ion-text-center\">\n    <ion-text style=\"color: #A3976A; font-size: small;\">Último ingreso 14 ene. 2020 10:30:06 a.m.</ion-text>\n  </div>\n\n  <br>\n\n  <app-card-account [accounts]=\"accounts\"></app-card-account>\n\n  <ion-tabs>\n\n    <ion-button (click)=\"presentModal()\" style=\"margin: auto; margin-bottom: 0.6rem;\" fill=\"clear\" shape=\"round\" size=\"small\">\n      <ion-icon slot=\"icon-only\" name=\"chevron-up\"></ion-icon>\n    </ion-button>\n\n    <ion-img (click)=\"clickMe()\" style=\"width: 4rem; height: 4rem; margin: auto; margin-bottom: -1rem; z-index: 2;\" src=\"./assets/btn-codi.png\"></ion-img>\n\n    <ion-tab-bar slot=\"bottom\" style=\"z-index: 1;\">\n  \n      <ion-tab-button tab=\"schedule\">\n        <ion-icon src=\"assets/icon/clipboard.svg\"></ion-icon>\n        <ion-label>Movimientos</ion-label>\n      </ion-tab-button>\n\n      <ion-tab-button tab=\"speakers\">\n        <ion-icon src=\"assets/icon/transaction.svg\"></ion-icon>\n        <ion-label>Transferir</ion-label>\n      </ion-tab-button>\n  \n      <ion-tab-button tab=\"speakers\">\n        <ion-icon name=\"wallet\"></ion-icon>\n        <ion-label>Cartera</ion-label>\n      </ion-tab-button>\n\n      <ion-tab-button tab=\"speakers\">\n        <ion-icon src=\"assets/icon/posponer.svg\"></ion-icon>\n        <ion-label>Pospuestos</ion-label>\n      </ion-tab-button>\n\n    </ion-tab-bar>\n\n    \n  </ion-tabs>\n\n</ion-content>\n\n\n\n";
    /***/
  },

  /***/
  "./src/app/pages/dashboard/components/movements/movements-routing.module.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/pages/dashboard/components/movements/movements-routing.module.ts ***!
    \**********************************************************************************/

  /*! exports provided: MovementsPageRoutingModule */

  /***/
  function srcAppPagesDashboardComponentsMovementsMovementsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MovementsPageRoutingModule", function () {
      return MovementsPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _movements_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./movements.page */
    "./src/app/pages/dashboard/components/movements/movements.page.ts");

    var routes = [{
      path: '',
      component: _movements_page__WEBPACK_IMPORTED_MODULE_3__["MovementsPage"]
    }];

    var MovementsPageRoutingModule = function MovementsPageRoutingModule() {
      _classCallCheck(this, MovementsPageRoutingModule);
    };

    MovementsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], MovementsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/dashboard/components/movements/movements.module.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/pages/dashboard/components/movements/movements.module.ts ***!
    \**************************************************************************/

  /*! exports provided: MovementsPageModule */

  /***/
  function srcAppPagesDashboardComponentsMovementsMovementsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MovementsPageModule", function () {
      return MovementsPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _movements_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./movements-routing.module */
    "./src/app/pages/dashboard/components/movements/movements-routing.module.ts");
    /* harmony import */


    var _movements_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./movements.page */
    "./src/app/pages/dashboard/components/movements/movements.page.ts");

    var MovementsPageModule = function MovementsPageModule() {
      _classCallCheck(this, MovementsPageModule);
    };

    MovementsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _movements_routing_module__WEBPACK_IMPORTED_MODULE_5__["MovementsPageRoutingModule"]],
      declarations: [_movements_page__WEBPACK_IMPORTED_MODULE_6__["MovementsPage"]],
      entryComponents: [_movements_page__WEBPACK_IMPORTED_MODULE_6__["MovementsPage"]]
    })], MovementsPageModule);
    /***/
  },

  /***/
  "./src/app/pages/dashboard/components/movements/movements.page.scss":
  /*!**************************************************************************!*\
    !*** ./src/app/pages/dashboard/components/movements/movements.page.scss ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesDashboardComponentsMovementsMovementsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC9jb21wb25lbnRzL21vdmVtZW50cy9tb3ZlbWVudHMucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/dashboard/components/movements/movements.page.ts":
  /*!************************************************************************!*\
    !*** ./src/app/pages/dashboard/components/movements/movements.page.ts ***!
    \************************************************************************/

  /*! exports provided: MovementsPage */

  /***/
  function srcAppPagesDashboardComponentsMovementsMovementsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MovementsPage", function () {
      return MovementsPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var MovementsPage =
    /*#__PURE__*/
    function () {
      function MovementsPage(modalController) {
        _classCallCheck(this, MovementsPage);

        this.modalController = modalController;
      }

      _createClass(MovementsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "dismissModal",
        value: function dismissModal() {
          this.modalController.dismiss();
        }
      }]);

      return MovementsPage;
    }();

    MovementsPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }];
    };

    MovementsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-movements',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./movements.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/components/movements/movements.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./movements.page.scss */
      "./src/app/pages/dashboard/components/movements/movements.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])], MovementsPage);
    /***/
  },

  /***/
  "./src/app/pages/dashboard/dashboard-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/dashboard/dashboard-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: DashboardPageRoutingModule */

  /***/
  function srcAppPagesDashboardDashboardRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardPageRoutingModule", function () {
      return DashboardPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _dashboard_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./dashboard.page */
    "./src/app/pages/dashboard/dashboard.page.ts");

    var routes = [{
      path: '',
      component: _dashboard_page__WEBPACK_IMPORTED_MODULE_3__["DashboardPage"]
    }, {
      path: 'movements',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./components/movements/movements.module */
        "./src/app/pages/dashboard/components/movements/movements.module.ts")).then(function (m) {
          return m.MovementsPageModule;
        });
      }
    }];

    var DashboardPageRoutingModule = function DashboardPageRoutingModule() {
      _classCallCheck(this, DashboardPageRoutingModule);
    };

    DashboardPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], DashboardPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/dashboard/dashboard.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/dashboard/dashboard.module.ts ***!
    \*****************************************************/

  /*! exports provided: DashboardPageModule */

  /***/
  function srcAppPagesDashboardDashboardModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardPageModule", function () {
      return DashboardPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./dashboard-routing.module */
    "./src/app/pages/dashboard/dashboard-routing.module.ts");
    /* harmony import */


    var _dashboard_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./dashboard.page */
    "./src/app/pages/dashboard/dashboard.page.ts");
    /* harmony import */


    var _components_movements_movements_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/movements/movements.module */
    "./src/app/pages/dashboard/components/movements/movements.module.ts");
    /* harmony import */


    var _components_card_account_card_account_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @components/card-account/card-account.module */
    "./src/app/components/card-account/card-account.module.ts");

    var DashboardPageModule = function DashboardPageModule() {
      _classCallCheck(this, DashboardPageModule);
    };

    DashboardPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__["DashboardPageRoutingModule"], _components_movements_movements_module__WEBPACK_IMPORTED_MODULE_7__["MovementsPageModule"], _components_card_account_card_account_module__WEBPACK_IMPORTED_MODULE_8__["CardAccountModule"]],
      declarations: [_dashboard_page__WEBPACK_IMPORTED_MODULE_6__["DashboardPage"]]
    })], DashboardPageModule);
    /***/
  },

  /***/
  "./src/app/pages/dashboard/dashboard.page.scss":
  /*!*****************************************************!*\
    !*** ./src/app/pages/dashboard/dashboard.page.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesDashboardDashboardPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".wrapper {\n  height: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  background-color: #fdc0df;\n}\n\n.navbar {\n  position: relative;\n  height: 100px;\n  min-width: 400px;\n  padding-left: 35px;\n  padding-right: 35px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n  border-radius: 25px;\n  background-color: white;\n  box-shadow: 0 10px 20px rgba(82, 74, 74, 0.3);\n}\n\n.navbar:after {\n  content: \"\";\n  position: absolute;\n  bottom: 7px;\n  height: 4px;\n  width: 35%;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  background-color: gray;\n  opacity: 0.3;\n}\n\n.circle {\n  position: absolute;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  bottom: calc(100px - 40px);\n  margin-bottom: 0;\n  height: 80px;\n  width: 80px;\n  border-radius: 40px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  overflow: hidden;\n  background-color: #ff5e00;\n  z-index: 9;\n  box-shadow: 0 5px 5px rgba(255, 147, 85, 0.35);\n  -webkit-transition: height 0.3s;\n  transition: height 0.3s;\n}\n\n.circle:hover {\n  height: 200px;\n  border-radius: 50px;\n}\n\n.circle .plus-icon {\n  color: white;\n  font-size: 27px;\n  -webkit-transition: opacity 0.3s, -webkit-transform 0.2s;\n  transition: opacity 0.3s, -webkit-transform 0.2s;\n  transition: opacity 0.3s, transform 0.2s;\n  transition: opacity 0.3s, transform 0.2s, -webkit-transform 0.2s;\n}\n\n.circle:hover .plus-icon {\n  -webkit-transform: rotate(360deg);\n          transform: rotate(360deg);\n  opacity: 0;\n}\n\n.circle .social {\n  position: absolute;\n  top: 195px;\n  color: white;\n  background-color: rgba(255, 212, 212, 0.308);\n  height: 60px;\n  width: 60px;\n  margin-bottom: 5px;\n  border-radius: 50%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  font-size: 25px;\n  cursor: pointer;\n}\n\n.circle .social:nth-child(2) {\n  opacity: 0;\n  -webkit-transition: opacity 0.3s, top 0.5s ease;\n  transition: opacity 0.3s, top 0.5s ease;\n}\n\n.circle .social:nth-child(3) {\n  opacity: 0;\n  -webkit-transition: opacity 0.3s, top 0.5s 0.1s ease;\n  transition: opacity 0.3s, top 0.5s 0.1s ease;\n}\n\n.circle .social:nth-child(4) {\n  opacity: 0;\n  -webkit-transition: opacity 0.3s, top 0.5s 0.22s ease;\n  transition: opacity 0.3s, top 0.5s 0.22s ease;\n  margin-bottom: 0px;\n}\n\n.circle:hover .social:nth-child(2) {\n  opacity: 1;\n  top: 5px;\n}\n\n.circle:hover .social:nth-child(3) {\n  opacity: 1;\n  top: calc(5px + 60px + 5px);\n}\n\n.circle:hover .social:nth-child(4) {\n  opacity: 1;\n  top: calc(5px + 60px + 5px + 60px + 5px);\n}\n\n.circleBackground {\n  position: absolute;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  bottom: calc(100px - 100px / 2);\n  margin-bottom: 0;\n  height: calc(80px + 20px);\n  width: calc(80px + 20px);\n  border-radius: calc(100px / 2);\n  background-color: #fdc0df;\n}\n\n.icon-home,\n.icon-settings {\n  font-size: 29px;\n  color: #fdc0df;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25lc3Rvci9EZXNrdG9wL2JhbmNhLXBvci1pbnRlcm5ldC9zcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC9kYXNoYm9hcmQucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9kYXNoYm9hcmQvZGFzaGJvYXJkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNFLFlBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHlCQVBnQjtBQ0lsQjs7QURNQTtFQUNFLGtCQUFBO0VBQ0EsYUFkYztFQWVkLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLDZDQUFBO0FDSEY7O0FETUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQ0hGOztBRE1BO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQTNDYztFQTRDZCxXQTVDYztFQTZDZCxtQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLFVBQUE7RUFDQSw4Q0FBQTtFQUNBLCtCQUFBO0VBQUEsdUJBQUE7QUNIRjs7QURNQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQ0hGOztBRE1BO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSx3REFBQTtFQUFBLGdEQUFBO0VBQUEsd0NBQUE7RUFBQSxnRUFBQTtBQ0hGOztBRE1BO0VBQ0UsaUNBQUE7VUFBQSx5QkFBQTtFQUNBLFVBQUE7QUNIRjs7QURNQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSw0Q0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUNIRjs7QURNQTtFQUNFLFVBQUE7RUFDQSwrQ0FBQTtFQUFBLHVDQUFBO0FDSEY7O0FETUE7RUFDRSxVQUFBO0VBQ0Esb0RBQUE7RUFBQSw0Q0FBQTtBQ0hGOztBRE1BO0VBQ0UsVUFBQTtFQUNBLHFEQUFBO0VBQUEsNkNBQUE7RUFDQSxrQkFBQTtBQ0hGOztBRE1BO0VBQ0UsVUFBQTtFQUNBLFFBQUE7QUNIRjs7QURNQTtFQUNFLFVBQUE7RUFDQSwyQkFBQTtBQ0hGOztBRE1BO0VBQ0UsVUFBQTtFQUNBLHdDQUFBO0FDSEY7O0FETUE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0Esd0JBQUE7RUFDQSw4QkFBQTtFQUNBLHlCQWhJZ0I7QUM2SGxCOztBRE1BOztFQUVFLGVBQUE7RUFDQSxjQXRJZ0I7QUNtSWxCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkbmF2YmFyLWhlaWdodDogMTAwcHg7XG4kY2lyY2xlLXJhZGl1czogODBweDtcbiRiYWNrZ3JvdW5kQ29sb3I6IHJnYigyNTMsIDE5MiwgMjIzKTtcblxuLndyYXBwZXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZENvbG9yO1xufVxuXG4ubmF2YmFyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6ICRuYXZiYXItaGVpZ2h0O1xuICBtaW4td2lkdGg6IDQwMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDM1cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDM1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJveC1zaGFkb3c6IDAgMTBweCAyMHB4IHJnYmEoODIsIDc0LCA3NCwgMC4zKTtcbn1cblxuLm5hdmJhcjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiA3cHg7XG4gIGhlaWdodDogNHB4O1xuICB3aWR0aDogMzUlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcbiAgb3BhY2l0eTogMC4zO1xufVxuXG4uY2lyY2xlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgYm90dG9tOiBjYWxjKDEwMHB4IC0gI3skY2lyY2xlLXJhZGl1cyAvIDJ9KTtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgaGVpZ2h0OiAkY2lyY2xlLXJhZGl1cztcbiAgd2lkdGg6ICRjaXJjbGUtcmFkaXVzO1xuICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgOTQsIDApO1xuICB6LWluZGV4OiA5O1xuICBib3gtc2hhZG93OiAwIDVweCA1cHggcmdiYSgyNTUsIDE0NywgODUsIDAuMzUpO1xuICB0cmFuc2l0aW9uOiBoZWlnaHQgMC4zcztcbn1cblxuLmNpcmNsZTpob3ZlciB7XG4gIGhlaWdodDogMjAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG59XG5cbi5jaXJjbGUgLnBsdXMtaWNvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAyN3B4O1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MsIHRyYW5zZm9ybSAwLjJzO1xufVxuXG4uY2lyY2xlOmhvdmVyIC5wbHVzLWljb24ge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICBvcGFjaXR5OiAwO1xufVxuXG4uY2lyY2xlIC5zb2NpYWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTk1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDIxMiwgMjEyLCAwLjMwOCk7XG4gIGhlaWdodDogNjBweDtcbiAgd2lkdGg6IDYwcHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jaXJjbGUgLnNvY2lhbDpudGgtY2hpbGQoMikge1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MsIHRvcCAwLjVzIGVhc2U7XG59XG5cbi5jaXJjbGUgLnNvY2lhbDpudGgtY2hpbGQoMykge1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MsIHRvcCAwLjVzIDAuMXMgZWFzZTtcbn1cblxuLmNpcmNsZSAuc29jaWFsOm50aC1jaGlsZCg0KSB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcywgdG9wIDAuNXMgMC4yMnMgZWFzZTtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG4uY2lyY2xlOmhvdmVyIC5zb2NpYWw6bnRoLWNoaWxkKDIpIHtcbiAgb3BhY2l0eTogMTtcbiAgdG9wOiA1cHg7XG59XG5cbi5jaXJjbGU6aG92ZXIgLnNvY2lhbDpudGgtY2hpbGQoMykge1xuICBvcGFjaXR5OiAxO1xuICB0b3A6IGNhbGMoNXB4ICsgNjBweCArIDVweCk7XG59XG5cbi5jaXJjbGU6aG92ZXIgLnNvY2lhbDpudGgtY2hpbGQoNCkge1xuICBvcGFjaXR5OiAxO1xuICB0b3A6IGNhbGMoNXB4ICsgNjBweCArIDVweCArIDYwcHggKyA1cHgpO1xufVxuXG4uY2lyY2xlQmFja2dyb3VuZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIGJvdHRvbTogY2FsYygxMDBweCAtICN7JGNpcmNsZS1yYWRpdXMgKyAyMH0gLyAyKTtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgaGVpZ2h0OiBjYWxjKCN7JGNpcmNsZS1yYWRpdXN9ICsgMjBweCk7XG4gIHdpZHRoOiBjYWxjKCN7JGNpcmNsZS1yYWRpdXN9ICsgMjBweCk7XG4gIGJvcmRlci1yYWRpdXM6IGNhbGMoI3skY2lyY2xlLXJhZGl1cyArIDIwfSAvIDIpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZENvbG9yO1xufVxuXG4uaWNvbi1ob21lLFxuLmljb24tc2V0dGluZ3Mge1xuICBmb250LXNpemU6IDI5cHg7XG4gIGNvbG9yOiAkYmFja2dyb3VuZENvbG9yO1xufVxuIiwiLndyYXBwZXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRjMGRmO1xufVxuXG4ubmF2YmFyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEwMHB4O1xuICBtaW4td2lkdGg6IDQwMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDM1cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDM1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJveC1zaGFkb3c6IDAgMTBweCAyMHB4IHJnYmEoODIsIDc0LCA3NCwgMC4zKTtcbn1cblxuLm5hdmJhcjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiA3cHg7XG4gIGhlaWdodDogNHB4O1xuICB3aWR0aDogMzUlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcbiAgb3BhY2l0eTogMC4zO1xufVxuXG4uY2lyY2xlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgYm90dG9tOiBjYWxjKDEwMHB4IC0gNDBweCk7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGhlaWdodDogODBweDtcbiAgd2lkdGg6IDgwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY1ZTAwO1xuICB6LWluZGV4OiA5O1xuICBib3gtc2hhZG93OiAwIDVweCA1cHggcmdiYSgyNTUsIDE0NywgODUsIDAuMzUpO1xuICB0cmFuc2l0aW9uOiBoZWlnaHQgMC4zcztcbn1cblxuLmNpcmNsZTpob3ZlciB7XG4gIGhlaWdodDogMjAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG59XG5cbi5jaXJjbGUgLnBsdXMtaWNvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAyN3B4O1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MsIHRyYW5zZm9ybSAwLjJzO1xufVxuXG4uY2lyY2xlOmhvdmVyIC5wbHVzLWljb24ge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICBvcGFjaXR5OiAwO1xufVxuXG4uY2lyY2xlIC5zb2NpYWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTk1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDIxMiwgMjEyLCAwLjMwOCk7XG4gIGhlaWdodDogNjBweDtcbiAgd2lkdGg6IDYwcHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jaXJjbGUgLnNvY2lhbDpudGgtY2hpbGQoMikge1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MsIHRvcCAwLjVzIGVhc2U7XG59XG5cbi5jaXJjbGUgLnNvY2lhbDpudGgtY2hpbGQoMykge1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MsIHRvcCAwLjVzIDAuMXMgZWFzZTtcbn1cblxuLmNpcmNsZSAuc29jaWFsOm50aC1jaGlsZCg0KSB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcywgdG9wIDAuNXMgMC4yMnMgZWFzZTtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG4uY2lyY2xlOmhvdmVyIC5zb2NpYWw6bnRoLWNoaWxkKDIpIHtcbiAgb3BhY2l0eTogMTtcbiAgdG9wOiA1cHg7XG59XG5cbi5jaXJjbGU6aG92ZXIgLnNvY2lhbDpudGgtY2hpbGQoMykge1xuICBvcGFjaXR5OiAxO1xuICB0b3A6IGNhbGMoNXB4ICsgNjBweCArIDVweCk7XG59XG5cbi5jaXJjbGU6aG92ZXIgLnNvY2lhbDpudGgtY2hpbGQoNCkge1xuICBvcGFjaXR5OiAxO1xuICB0b3A6IGNhbGMoNXB4ICsgNjBweCArIDVweCArIDYwcHggKyA1cHgpO1xufVxuXG4uY2lyY2xlQmFja2dyb3VuZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIGJvdHRvbTogY2FsYygxMDBweCAtIDEwMHB4IC8gMik7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGhlaWdodDogY2FsYyg4MHB4ICsgMjBweCk7XG4gIHdpZHRoOiBjYWxjKDgwcHggKyAyMHB4KTtcbiAgYm9yZGVyLXJhZGl1czogY2FsYygxMDBweCAvIDIpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRjMGRmO1xufVxuXG4uaWNvbi1ob21lLFxuLmljb24tc2V0dGluZ3Mge1xuICBmb250LXNpemU6IDI5cHg7XG4gIGNvbG9yOiAjZmRjMGRmO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/dashboard/dashboard.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/dashboard/dashboard.page.ts ***!
    \***************************************************/

  /*! exports provided: DashboardPage */

  /***/
  function srcAppPagesDashboardDashboardPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardPage", function () {
      return DashboardPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _components_movements_movements_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/movements/movements.page */
    "./src/app/pages/dashboard/components/movements/movements.page.ts");

    var DashboardPage =
    /*#__PURE__*/
    function () {
      function DashboardPage(modalController) {
        _classCallCheck(this, DashboardPage);

        this.modalController = modalController;
        this.tabIdex = 0;
        this.color = 'success';
        this.accounts = [{
          account: '0009878554',
          balance: '8650.89',
          clientName: 'Ricardo Salinas Pliego',
          cardNumber: ''
        }, {
          account: '0003893021',
          balance: '12400.45',
          clientName: 'Ricardo Salinas Pliego',
          cardNumber: ''
        }];
      }

      _createClass(DashboardPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log('entre a dashboard.ts');
        }
      }, {
        key: "slideChanged",
        value: function slideChanged(slides) {
          var _this = this;

          slides.getActiveIndex().then(function (index) {
            console.log(index);
            _this.tabIdex = index;
          });
        }
      }, {
        key: "clickMe",
        value: function clickMe() {
          console.log('clickMe');
        }
      }, {
        key: "presentModal",
        value: function presentModal() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var modal;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.color = 'secondary';
                    console.log('Si esta funcionando');
                    _context.next = 4;
                    return this.modalController.create({
                      component: _components_movements_movements_page__WEBPACK_IMPORTED_MODULE_3__["MovementsPage"]
                    });

                  case 4:
                    modal = _context.sent;
                    _context.next = 7;
                    return modal.present();

                  case 7:
                    return _context.abrupt("return", _context.sent);

                  case 8:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return DashboardPage;
    }();

    DashboardPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }];
    };

    DashboardPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dashboard',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dashboard.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dashboard.page.scss */
      "./src/app/pages/dashboard/dashboard.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])], DashboardPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-dashboard-dashboard-module-es5.js.map