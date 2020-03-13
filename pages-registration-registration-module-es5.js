function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-registration-registration-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/registration/registration.page.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/registration/registration.page.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesRegistrationRegistrationPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\n  <ion-grid>\n\n    <ion-card>\n      <ion-img src=\"../../assets/MifosX_logo.png\"></ion-img>\n    </ion-card>\n\n    <ion-card>\n      <ion-card-header>\n        <ion-card-title>{{ 'registration.register' | translate }}</ion-card-title>\n      </ion-card-header>\n    \n      <ion-card-content>\n        <form [formGroup]=\"registerForm\" (ngSubmit)=\"register()\">\n          <ion-item>\n            <ion-icon name=\"card-outline\" slot=\"start\"></ion-icon>\n            <ion-input type=\"number\" formControlName=\"accountNumber\" placeholder=\"{{ 'registration.accountnumber' | translate }}\" clearInput></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-icon name=\"person-circle-outline\" slot=\"start\"></ion-icon>\n            <ion-input type=\"text\" formControlName=\"username\" placeholder=\"{{ 'login.username' | translate }}\" clearInput></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-icon name=\"person-outline\" slot=\"start\"></ion-icon>\n            <ion-input type=\"text\" formControlName=\"name\" placeholder=\"{{ 'registration.name' | translate }}\" clearInput></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-icon name=\"person-outline\" slot=\"start\"></ion-icon>\n            <ion-input type=\"text\" formControlName=\"lastName\" placeholder=\"{{ 'registration.lastname' | translate }}\" clearInput></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-icon name=\"call-outline\" slot=\"start\"></ion-icon>\n            <ion-input type=\"number\" formControlName=\"phoneNumber\" placeholder=\"{{ 'registration.phonenumber' | translate }}\" clearInput></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-icon name=\"mail-outline\" slot=\"start\"></ion-icon>\n            <ion-input type=\"email\" formControlName=\"email\" placeholder=\"{{ 'registration.email' | translate }}\" clearInput></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-icon name=\"lock-closed-outline\" slot=\"start\"></ion-icon>\n              <ion-input formControlName=\"password\" [type]=\"type\" placeholder=\"{{ 'login.password' | translate }}\" clearInput></ion-input>\n              <ion-icon *ngIf=\"icon\" (click)=\"viewPassword()\" name=\"eye-off-outline\" slot=\"end\"></ion-icon>\n              <ion-icon *ngIf=\"!icon\" (click)=\"viewPassword()\" name=\"eye-outline\" slot=\"end\"></ion-icon>\n          </ion-item>  \n          <ion-item>\n            <ion-icon name=\"lock-closed-outline\" slot=\"start\"></ion-icon>\n              <ion-input formControlName=\"confirmPassword\" [type]=\"reType\" placeholder=\"{{ 'registration.confirmpassword' | translate }}\" clearInput></ion-input>\n              <ion-icon *ngIf=\"reIcon\" (click)=\"viewRePassword()\" name=\"eye-off-outline\" slot=\"end\"></ion-icon>\n              <ion-icon *ngIf=\"!reIcon\" (click)=\"viewRePassword()\" name=\"eye-outline\" slot=\"end\"></ion-icon>\n          </ion-item>\n          <ion-button type=\"submit\" [disabled]=\"!registerForm.valid\" expand=\"block\" color=\"primary\">{{ 'registration.registers' | translate }}</ion-button>    \n        </form>\n        <ion-button [routerLink]=\"['/home']\" routerDirection=\"backward\" expand=\"block\" fill=\"clear\">{{ 'registration.cancel' | translate }}</ion-button>\n      </ion-card-content>\n    </ion-card>\n\n\n\n\n\n  </ion-grid>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/registration/registration-routing.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/pages/registration/registration-routing.module.ts ***!
    \*******************************************************************/

  /*! exports provided: RegistrationPageRoutingModule */

  /***/
  function srcAppPagesRegistrationRegistrationRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegistrationPageRoutingModule", function () {
      return RegistrationPageRoutingModule;
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


    var _registration_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./registration.page */
    "./src/app/pages/registration/registration.page.ts");

    var routes = [{
      path: '',
      component: _registration_page__WEBPACK_IMPORTED_MODULE_3__["RegistrationPage"]
    }];

    var RegistrationPageRoutingModule = function RegistrationPageRoutingModule() {
      _classCallCheck(this, RegistrationPageRoutingModule);
    };

    RegistrationPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], RegistrationPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/registration/registration.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/registration/registration.module.ts ***!
    \***********************************************************/

  /*! exports provided: RegistrationPageModule */

  /***/
  function srcAppPagesRegistrationRegistrationModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegistrationPageModule", function () {
      return RegistrationPageModule;
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


    var _registration_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./registration-routing.module */
    "./src/app/pages/registration/registration-routing.module.ts");
    /* harmony import */


    var _registration_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./registration.page */
    "./src/app/pages/registration/registration.page.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");

    var RegistrationPageModule = function RegistrationPageModule() {
      _classCallCheck(this, RegistrationPageModule);
    };

    RegistrationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _registration_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegistrationPageRoutingModule"]],
      declarations: [_registration_page__WEBPACK_IMPORTED_MODULE_6__["RegistrationPage"]]
    })], RegistrationPageModule);
    /***/
  },

  /***/
  "./src/app/pages/registration/registration.page.scss":
  /*!***********************************************************!*\
    !*** ./src/app/pages/registration/registration.page.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesRegistrationRegistrationPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24ucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/registration/registration.page.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/registration/registration.page.ts ***!
    \*********************************************************/

  /*! exports provided: RegistrationPage */

  /***/
  function srcAppPagesRegistrationRegistrationPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegistrationPage", function () {
      return RegistrationPage;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var RegistrationPage =
    /*#__PURE__*/
    function () {
      function RegistrationPage(router, formBuilder, menuCtrl) {
        _classCallCheck(this, RegistrationPage);

        this.router = router;
        this.formBuilder = formBuilder;
        this.menuCtrl = menuCtrl;
        this.icon = true;
        this.reIcon = true;
        this.type = 'password';
        this.reType = 'password';
        this.registerForm = formBuilder.group({
          username: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(5)])],
          password: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')])],
          name: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(5)])],
          lastName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(5)])],
          accountNumber: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(9), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('[0-9]')])],
          phoneNumber: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('[0-9]')])],
          confirmPassword: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')])],
          email: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$")])]
        });
      }

      _createClass(RegistrationPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.menuCtrl.enable(false);
          this.menuCtrl.swipeGesture(false);
        }
      }, {
        key: "register",
        value: function register() {
          console.log("hacer peticion de registro");
          this.router.navigateByUrl('/dashboard'); //second-login
        }
      }, {
        key: "viewRePassword",
        value: function viewRePassword() {
          if (this.reIcon) {
            console.log("view repassword");
            this.reIcon = false;
            this.reType = "text";
          } else {
            console.log("not view repassword");
            this.reIcon = true;
            this.reType = "password";
          }
        }
      }, {
        key: "viewPassword",
        value: function viewPassword() {
          if (this.icon) {
            console.log("view password");
            this.icon = false;
            this.type = "text";
          } else {
            console.log("not view password");
            this.icon = true;
            this.type = "password";
          }
        }
      }]);

      return RegistrationPage;
    }();

    RegistrationPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]
      }];
    };

    RegistrationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-registration',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./registration.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/registration/registration.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./registration.page.scss */
      "./src/app/pages/registration/registration.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]])], RegistrationPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-registration-registration-module-es5.js.map