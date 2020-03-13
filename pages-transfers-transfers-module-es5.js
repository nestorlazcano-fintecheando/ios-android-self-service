function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-transfers-transfers-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/transfers/components/manage-account/manage-account.page.html":
  /*!**************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/transfers/components/manage-account/manage-account.page.html ***!
    \**************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesTransfersComponentsManageAccountManageAccountPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header translucent>\n  <ion-toolbar>\n    <ion-title>Cuenta</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"dismissModal()\">\n        <ion-icon name=\"close-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/transfers/transfers.page.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/transfers/transfers.page.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesTransfersTransfersPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button style=\"color: #AD915F;\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title style=\"color: #AD915F;\">{{ 'tranfers.transfers' | translate }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen id=\"content\">\n\n  <div style=\"height: 100%;width: 100%;\">\n    <div>\n      <br>\n  \n      <div style=\"text-align: center;\"> <b style=\"color: #AD915F; font-size: medium;\">Cuenta Origen</b></div>\n  \n      <app-card-account [accounts]=\"accounts\" [settings]=\"settings\"></app-card-account>\n  \n    </div>\n  \n    <div> \n\n      <ion-fab horizontal=\"end\" edge>\n        <ion-fab-button size=\"medium\">\n          <ion-icon name=\"add\"></ion-icon>\n          <ion-ripple-effect></ion-ripple-effect>\n        </ion-fab-button>\n      </ion-fab>\n  \n      <div style=\"text-align: center; margin-top: 1.6rem;\"> <b style=\"color: #AD915F; font-size: medium;\">Cuenta Destino</b></div>\n  \n      <div style=\"color: #AD915F; font-size: 0.7rem;font-weight: bold; margin-left: 1.3rem;margin-top: 1rem; margin-bottom: 0.4rem;\">CUENTAS GUARDADAS</div>\n  \n      <ion-list style=\"max-height: 10rem; overflow: auto;\">\n  \n        <ion-item-sliding *ngFor=\"let item of savedAccounts; index as index; trackBy: identify\">\n  \n          <ion-item-options side=\"start\">\n            <ion-item-option (click)=\"presentAlertPrompt()\" color=\"danger\">\n              <ion-icon style=\"font-size: 1.5rem; margin: auto 10px;\" name=\"trash-outline\"></ion-icon>\n            </ion-item-option>\n          </ion-item-options>\n      \n          <ion-item (click)=\"selectAccount(index, item)\" [color]=\"item.color\">\n            <ion-label>\n              <h3>{{ item.owner }}</h3>\n              <h4 style=\"color: rgb(92, 92, 92);\">{{ item.bankTitle }}</h4>\n              <h5 style=\"font-size: x-small; color: grey;\">{{ item.accountNo }}</h5>\n            </ion-label>\n          </ion-item>\n      \n          <ion-item-options side=\"end\">\n            <ion-item-option style=\"background-color: #3880ff;\">\n              <ion-icon style=\"font-size: 1.5rem; margin: auto 10px;\" name=\"pencil\"></ion-icon>\n            </ion-item-option>\n          </ion-item-options>\n        </ion-item-sliding>\n        \n      </ion-list>\n  \n  </div>\n\n</div>\n\n<div *ngIf=\"isAccountSelected\" style=\"width: 100%; height: 100%;\">\n\n  <div style=\"margin: auto;\">\n    <br>\n\n    <div style=\"text-align: center;\"> <b style=\"color: #AD915F; font-size: medium;\">Completar</b></div>\n\n    <ion-card>\n\n      <ion-card-header>\n        <div style=\"text-align: center;\">\n          <ion-item>\n            <ion-label style=\"text-align: center;\"> <ion-icon color=\"secondary\" style=\"font-size: 2.3rem;\" src=\"assets/icon/clipboardv2.svg\"></ion-icon></ion-label>\n          </ion-item>\n        </div>\n      </ion-card-header>\n\n    \n      <ion-card-content>\n      <form>\n        <ion-list>\n          \n          <ion-item>\n            <ion-label position=\"stacked\">Monto <ion-text color=\"danger\">*</ion-text></ion-label>\n            <ion-input required inputmode=\"decimal\" type=\"number\"></ion-input>\n          </ion-item>\n    \n          <ion-item>\n            <ion-label position=\"stacked\">Concepto <ion-text color=\"danger\">*</ion-text></ion-label>\n            <ion-input required inputmode=\"text\" type=\"text\"></ion-input>\n          </ion-item>\n    \n          <ion-item>\n            <ion-label position=\"stacked\">Referencia</ion-label>\n            <ion-input inputmode=\"text\" type=\"text\"></ion-input>\n          </ion-item>\n    \n        </ion-list>\n    \n        <br>\n    \n        <div class=\"ion-padding\">\n          <ion-button expand=\"block\" type=\"submit\" class=\"ion-no-margin\">Confirmar</ion-button>\n        </div>\n      </form>\n  \n      <br>\n      </ion-card-content>\n\n    </ion-card>\n  </div>\n\n\n    \n</div>\n\n    \n  \n</ion-content>\n   \n     \n\n";
    /***/
  },

  /***/
  "./src/app/pages/transfers/components/manage-account/manage-account.page.scss":
  /*!************************************************************************************!*\
    !*** ./src/app/pages/transfers/components/manage-account/manage-account.page.scss ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesTransfersComponentsManageAccountManageAccountPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RyYW5zZmVycy9jb21wb25lbnRzL21hbmFnZS1hY2NvdW50L21hbmFnZS1hY2NvdW50LnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/transfers/components/manage-account/manage-account.page.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/pages/transfers/components/manage-account/manage-account.page.ts ***!
    \**********************************************************************************/

  /*! exports provided: ManageAccountPage */

  /***/
  function srcAppPagesTransfersComponentsManageAccountManageAccountPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ManageAccountPage", function () {
      return ManageAccountPage;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var ManageAccountPage =
    /*#__PURE__*/
    function () {
      function ManageAccountPage(modalController, activatedRoute) {
        _classCallCheck(this, ManageAccountPage);

        this.modalController = modalController;
        this.activatedRoute = activatedRoute;
      }

      _createClass(ManageAccountPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log(this.activatedRoute.snapshot);
        }
      }, {
        key: "dismissModal",
        value: function dismissModal() {
          this.modalController.dismiss();
        }
      }]);

      return ManageAccountPage;
    }();

    ManageAccountPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }];
    };

    ManageAccountPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-manage-account',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./manage-account.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/transfers/components/manage-account/manage-account.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./manage-account.page.scss */
      "./src/app/pages/transfers/components/manage-account/manage-account.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])], ManageAccountPage);
    /***/
  },

  /***/
  "./src/app/pages/transfers/transfers-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/transfers/transfers-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: TranfersPageRoutingModule */

  /***/
  function srcAppPagesTransfersTransfersRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TranfersPageRoutingModule", function () {
      return TranfersPageRoutingModule;
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


    var _transfers_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./transfers.page */
    "./src/app/pages/transfers/transfers.page.ts");

    var routes = [{
      path: '',
      component: _transfers_page__WEBPACK_IMPORTED_MODULE_3__["TransfersPage"]
    }, {
      path: 'manage-account',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | components-manage-account-manage-account-module */
        "components-manage-account-manage-account-module").then(__webpack_require__.bind(null,
        /*! ./components/manage-account/manage-account.module */
        "./src/app/pages/transfers/components/manage-account/manage-account.module.ts")).then(function (m) {
          return m.ManageAccountPageModule;
        });
      }
    }];

    var TranfersPageRoutingModule = function TranfersPageRoutingModule() {
      _classCallCheck(this, TranfersPageRoutingModule);
    };

    TranfersPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], TranfersPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/transfers/transfers.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/transfers/transfers.module.ts ***!
    \*****************************************************/

  /*! exports provided: TransfersPageModule */

  /***/
  function srcAppPagesTransfersTransfersModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TransfersPageModule", function () {
      return TransfersPageModule;
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


    var _transfers_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./transfers-routing.module */
    "./src/app/pages/transfers/transfers-routing.module.ts");
    /* harmony import */


    var _transfers_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./transfers.page */
    "./src/app/pages/transfers/transfers.page.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _components_card_account_card_account_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @components/card-account/card-account.module */
    "./src/app/components/card-account/card-account.module.ts");

    var TransfersPageModule = function TransfersPageModule() {
      _classCallCheck(this, TransfersPageModule);
    };

    TransfersPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _transfers_routing_module__WEBPACK_IMPORTED_MODULE_5__["TranfersPageRoutingModule"], _components_card_account_card_account_module__WEBPACK_IMPORTED_MODULE_8__["CardAccountModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
      declarations: [_transfers_page__WEBPACK_IMPORTED_MODULE_6__["TransfersPage"]]
    })], TransfersPageModule);
    /***/
  },

  /***/
  "./src/app/pages/transfers/transfers.page.scss":
  /*!*****************************************************!*\
    !*** ./src/app/pages/transfers/transfers.page.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesTransfersTransfersPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RyYW5zZmVycy90cmFuc2ZlcnMucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/transfers/transfers.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/transfers/transfers.page.ts ***!
    \***************************************************/

  /*! exports provided: TransfersPage */

  /***/
  function srcAppPagesTransfersTransfersPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TransfersPage", function () {
      return TransfersPage;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _components_manage_account_manage_account_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/manage-account/manage-account.page */
    "./src/app/pages/transfers/components/manage-account/manage-account.page.ts");

    var TransfersPage =
    /*#__PURE__*/
    function () {
      function TransfersPage(formBuilder, alertController, modalController) {
        _classCallCheck(this, TransfersPage);

        this.formBuilder = formBuilder;
        this.alertController = alertController;
        this.modalController = modalController;
        this.accounts = [{
          account: '0009878554',
          balance: '8650.25',
          clientName: 'Ricardo Salinas Pliego',
          cardNumber: ''
        }, {
          account: '0003893021',
          balance: '12400.97',
          clientName: 'Ricardo Salinas Pliego',
          cardNumber: ''
        }];
        this.settings = {
          accountSize: 'small',
          balanceSize: 'large',
          cardWidth: '75%',
          spaceBetween: 0,
          orientation: 'horizontal'
        };
        this.savedAccounts = [{
          owner: 'Fernando Jimenez Santiago',
          accountNo: '5546 5454 3223 8922',
          bankTitle: 'Cuenta BBVA Bancomer',
          selected: false,
          color: ''
        }, {
          owner: 'Didier Gomez Oliver',
          accountNo: '5546 5454 3223 8922',
          bankTitle: 'Cuenta HSBC',
          selected: false,
          color: ''
        }, {
          owner: 'Eduardo Moreno Palacios',
          accountNo: '5546 5454 3223 8922',
          bankTitle: 'Cuenta Banorte',
          selected: false,
          color: ''
        }, {
          owner: 'Edgar Arturo Dominguez Narvaez',
          accountNo: '5546 5454 3223 8922',
          bankTitle: 'Cuenta Santander',
          selected: false,
          color: ''
        }];
        this.isAccountSelected = false;
        this.transferForm = formBuilder.group({
          username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
      }

      _createClass(TransfersPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "identify",
        value: function identify(index, item) {
          return item.accountNo;
        }
      }, {
        key: "onMangeAccount",
        value: function onMangeAccount(index) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var modal;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.modalController.create({
                      component: _components_manage_account_manage_account_page__WEBPACK_IMPORTED_MODULE_4__["ManageAccountPage"],
                      componentProps: {
                        'firstName': 'Douglas',
                        'lastName': 'Adams',
                        'middleInitial': 'N'
                      }
                    });

                  case 2:
                    modal = _context.sent;
                    _context.next = 5;
                    return modal.present();

                  case 5:
                    return _context.abrupt("return", _context.sent);

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "onDelete",
        value: function onDelete() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var alert;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.alertController.create({
                      header: 'Eliminar',
                      message: 'Deséa eliminar la cuenta de banco?',
                      buttons: ['Cancelar', {
                        text: 'Aceptar',
                        handler: function handler() {
                          console.log('Confirm Ok');
                        }
                      }]
                    });

                  case 2:
                    alert = _context2.sent;
                    _context2.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "selectAccount",
        value: function selectAccount(index, item) {
          var _this = this;

          console.log('Click Me', index, item);
          var prevSelected = this.savedAccounts.find(function (account) {
            return account.selected;
          });

          if (prevSelected) {
            prevSelected.color = '';
            prevSelected.selected = false;
          }

          item.selected = true;
          item.color = 'light';
          this.isAccountSelected = true;
          setTimeout(function () {
            return _this.content.scrollToBottom(1000);
          }, 200);
        }
      }, {
        key: "makeTransfer",
        value: function makeTransfer() {}
      }, {
        key: "content",
        get: function get() {
          return document.querySelector('#content');
        }
      }]);

      return TransfersPage;
    }();

    TransfersPage.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
      }];
    };

    TransfersPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tranfers',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./transfers.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/transfers/transfers.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./transfers.page.scss */
      "./src/app/pages/transfers/transfers.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]])], TransfersPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-transfers-transfers-module-es5.js.map