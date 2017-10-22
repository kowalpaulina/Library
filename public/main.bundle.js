webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>\n  <ul>\n    Lista książek pożyczonych:\n    <li>tytuł</li>\n    <li>autor</li>\n    <li>kto pożyczył</li>\n    <li>notatki</li>\n    <li>button do zwrotu</li>\n\n  </ul>\n</h3>\n"

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-about',
        template: __webpack_require__("../../../../../src/app/about/about.component.html"),
        styles: [__webpack_require__("../../../../../src/app/about/about.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AboutComponent);

//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/admin-dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_auth_service__ = __webpack_require__("../../../../../src/app/login/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminDashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminDashboardComponent = (function () {
    function AdminDashboardComponent(authService) {
        this.authService = authService;
    }
    AdminDashboardComponent.prototype.logout = function () {
        this.authService.isLoggedIn.next(false);
        ///        console.log('LoginComponent AuthService  - TEST', this.authService.test);
    };
    return AdminDashboardComponent;
}());
AdminDashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        template: "\n    <p>Dashboard</p>\n    <button (click)=\"logout()\">wyloguj</button>\n  "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__login_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__login_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], AdminDashboardComponent);

var _a;
//# sourceMappingURL=admin-dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/admin-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__admin_component__ = __webpack_require__("../../../../../src/app/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__admin_dashboard_component__ = __webpack_require__("../../../../../src/app/admin/admin-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__manage_users_manage_users_component__ = __webpack_require__("../../../../../src/app/admin/manage-users/manage-users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_auth_guard_service__ = __webpack_require__("../../../../../src/app/login/auth-guard.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var adminRoutes = [
    {
        path: 'admin',
        component: __WEBPACK_IMPORTED_MODULE_2__admin_component__["a" /* AdminComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_5__login_auth_guard_service__["a" /* AuthGuard */]],
        children: [
            {
                path: '',
                children: [
                    { path: 'users-manage', component: __WEBPACK_IMPORTED_MODULE_4__manage_users_manage_users_component__["a" /* ManageUsersComponent */] },
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__admin_dashboard_component__["a" /* AdminDashboardComponent */] }
                ],
            }
        ]
    }
];
var AdminRoutingModule = (function () {
    function AdminRoutingModule() {
    }
    return AdminRoutingModule;
}());
AdminRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(adminRoutes)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]
        ]
    })
], AdminRoutingModule);

//# sourceMappingURL=admin-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/admin/admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AdminComponent = (function () {
    function AdminComponent() {
    }
    return AdminComponent;
}());
AdminComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        template: "\n    <h3>ADMIN</h3>\n    <nav>\n      <a routerLink=\"./\" routerLinkActive=\"active\"\n        [routerLinkActiveOptions]=\"{ exact: true }\">Dashboard</a>\n      <a routerLink=\"./users-manage\" routerLinkActive=\"active\">Manage users</a>\n    </nav>\n    <router-outlet></router-outlet>\n  "
    })
], AdminComponent);

//# sourceMappingURL=admin.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/admin.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__admin_component__ = __webpack_require__("../../../../../src/app/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__admin_dashboard_component__ = __webpack_require__("../../../../../src/app/admin/admin-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__manage_users_manage_users_component__ = __webpack_require__("../../../../../src/app/admin/manage-users/manage-users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__admin_routing_module__ = __webpack_require__("../../../../../src/app/admin/admin-routing.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AdminModule = (function () {
    function AdminModule() {
    }
    return AdminModule;
}());
AdminModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_5__admin_routing_module__["a" /* AdminRoutingModule */]],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__admin_component__["a" /* AdminComponent */],
            __WEBPACK_IMPORTED_MODULE_3__admin_dashboard_component__["a" /* AdminDashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_4__manage_users_manage_users_component__["a" /* ManageUsersComponent */]
        ]
    })
], AdminModule);

//# sourceMappingURL=admin.module.js.map

/***/ }),

/***/ "../../../../../src/app/admin/manage-users/manage-users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__manage_users_service__ = __webpack_require__("../../../../../src/app/admin/manage-users/manage-users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_auth_service__ = __webpack_require__("../../../../../src/app/login/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageUsersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ManageUsersComponent = (function () {
    function ManageUsersComponent(manageUsersService, authService) {
        this.manageUsersService = manageUsersService;
        this.authService = authService;
    }
    ManageUsersComponent.prototype.delete = function (user) {
        var _this = this;
        this.authService.deleteUser(user).subscribe(function (users) {
            _this.users = users;
        });
    };
    ManageUsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getUserStream().subscribe(function (users) {
            _this.users = users;
        });
    };
    return ManageUsersComponent;
}());
ManageUsersComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        template: __webpack_require__("../../../../../src/app/admin/manage-users/manage-users.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__manage_users_service__["a" /* ManageUsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__manage_users_service__["a" /* ManageUsersService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__login_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__login_auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], ManageUsersComponent);

var _a, _b;
//# sourceMappingURL=manage-users.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/manage-users/manage-users.html":
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-striped\">\r\n      <thead>\r\n        <tr>\r\n          <th> # </th>\r\n          <th> Imię </th>\r\n          <th> Mail </th>\r\n          <th> Zatwierdzony </th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let user of users; let i = index\" class=\"playlist-row\" (click)=\"delete(user)\">\r\n          <td> {{ i + 1 }}. </td>\r\n          <td> {{ user.name }} </td>\r\n          <td> {{ user.email }} </td>\r\n          <td> {{ user.approved }} </td>\r\n          <td>\r\n              <button *ngIf=\"user.approved==true\" class=\"btn btn-primary\">Tak</button>\r\n              <button *ngIf=\"!user.approved\" class=\"btn btn-danger\">Nie</button>\r\n          </td>\r\n        </tr>\r\n        \r\n      </tbody>\r\n      \r\n    </table>"

/***/ }),

/***/ "../../../../../src/app/admin/manage-users/manage-users.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__registration_registration_service__ = __webpack_require__("../../../../../src/app/registration/registration.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageUsersService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ManageUsersService = (function () {
    function ManageUsersService(registrationService, http) {
        this.registrationService = registrationService;
        this.http = http;
    }
    return ManageUsersService;
}());
ManageUsersService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__registration_registration_service__["a" /* RegistrationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__registration_registration_service__["a" /* RegistrationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _b || Object])
], ManageUsersService);

var _a, _b;
//# sourceMappingURL=manage-users.service.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body{\r\n    max-width: 1920px;\r\n    height: 100%;\r\n    height: auto;\r\n    overflow: auto;\r\n}\r\n\r\n\r\n\r\n\r\n.container{\r\n    margin-top: 30px;\r\n}\r\n\r\n.form-log-in, .form-group{\r\n    padding-top: 50px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_auth_service__ = __webpack_require__("../../../../../src/app/login/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reviews_service__ = __webpack_require__("../../../../../src/app/reviews.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(reviewsService, authService) {
        this.reviewsService = reviewsService;
        this.authService = authService;
        this.title = 'Moja biblioteka';
    }
    //  getReviews(): void {
    //     this.reviewsService.getReviews().then(reviews => this.reviews = reviews);
    //   }
    AppComponent.prototype.ngOnInit = function () {
        // this.getReviews();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_11" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__reviews_service__["a" /* ReviewsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__reviews_service__["a" /* ReviewsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__login_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__login_auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__company_company_component__ = __webpack_require__("../../../../../src/app/company/company.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__reviews_services_component__ = __webpack_require__("../../../../../src/app/reviews/services.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__reviews_service__ = __webpack_require__("../../../../../src/app/reviews.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__books_books_component__ = __webpack_require__("../../../../../src/app/books/books.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__books_books_list_component__ = __webpack_require__("../../../../../src/app/books/books-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__admin_admin_component__ = __webpack_require__("../../../../../src/app/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__books_books_detail_component__ = __webpack_require__("../../../../../src/app/books/books-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__search_books_books_search_form_component__ = __webpack_require__("../../../../../src/app/search-books/books-search-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__search_books_search_books_component__ = __webpack_require__("../../../../../src/app/search-books/search-books.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__login_auth_service__ = __webpack_require__("../../../../../src/app/login/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__login_auth_guard_service__ = __webpack_require__("../../../../../src/app/login/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__admin_admin_module__ = __webpack_require__("../../../../../src/app/admin/admin.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__search_books_search_books_list_search_books_list_component__ = __webpack_require__("../../../../../src/app/search-books/search-books-list/search-books-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__books_books_service__ = __webpack_require__("../../../../../src/app/books/books.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__registration_registration_component__ = __webpack_require__("../../../../../src/app/registration/registration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__registration_registration_service__ = __webpack_require__("../../../../../src/app/registration/registration.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__admin_manage_users_manage_users_service__ = __webpack_require__("../../../../../src/app/admin/manage-users/manage-users.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






























var AppModule = (function () {
    // Diagnostic only: inspect router configuration
    function AppModule(router) {
        //console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__company_company_component__["a" /* CompanyComponent */],
            __WEBPACK_IMPORTED_MODULE_8__about_about_component__["a" /* AboutComponent */],
            __WEBPACK_IMPORTED_MODULE_9__reviews_services_component__["a" /* ServicesComponent */],
            __WEBPACK_IMPORTED_MODULE_10__footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_12__books_books_component__["a" /* BooksComponent */],
            __WEBPACK_IMPORTED_MODULE_13__books_books_list_component__["a" /* BooksListComponent */],
            __WEBPACK_IMPORTED_MODULE_14__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_16__books_books_detail_component__["a" /* BooksDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_18__navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_19__search_books_search_books_component__["a" /* SearchBooksComponent */],
            __WEBPACK_IMPORTED_MODULE_17__search_books_books_search_form_component__["a" /* BooksSearchFormComponent */],
            __WEBPACK_IMPORTED_MODULE_23__search_books_search_books_list_search_books_list_component__["a" /* SearchBooksListComponent */],
            __WEBPACK_IMPORTED_MODULE_25__registration_registration_component__["a" /* RegistrationComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_22__admin_admin_module__["a" /* AdminModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forRoot([
                {
                    path: "blog",
                    component: __WEBPACK_IMPORTED_MODULE_7__company_company_component__["a" /* CompanyComponent */]
                },
                {
                    path: "about",
                    component: __WEBPACK_IMPORTED_MODULE_8__about_about_component__["a" /* AboutComponent */]
                },
                {
                    path: "books",
                    canActivate: [__WEBPACK_IMPORTED_MODULE_21__login_auth_guard_service__["a" /* AuthGuard */]],
                    component: __WEBPACK_IMPORTED_MODULE_12__books_books_component__["a" /* BooksComponent */],
                    children: [
                        { path: 'new', component: __WEBPACK_IMPORTED_MODULE_16__books_books_detail_component__["a" /* BooksDetailComponent */] },
                        { path: ':id', component: __WEBPACK_IMPORTED_MODULE_16__books_books_detail_component__["a" /* BooksDetailComponent */] },
                        { path: ':id/edit', component: __WEBPACK_IMPORTED_MODULE_16__books_books_detail_component__["a" /* BooksDetailComponent */] },
                    ],
                },
                {
                    path: "searchBooks",
                    component: __WEBPACK_IMPORTED_MODULE_19__search_books_search_books_component__["a" /* SearchBooksComponent */]
                },
                {
                    path: "reviews",
                    component: __WEBPACK_IMPORTED_MODULE_9__reviews_services_component__["a" /* ServicesComponent */]
                },
                {
                    path: "login",
                    component: __WEBPACK_IMPORTED_MODULE_14__login_login_component__["a" /* LoginComponent */]
                },
                {
                    path: "admin",
                    component: __WEBPACK_IMPORTED_MODULE_15__admin_admin_component__["a" /* AdminComponent */]
                },
                {
                    path: "register",
                    component: __WEBPACK_IMPORTED_MODULE_25__registration_registration_component__["a" /* RegistrationComponent */]
                },
                {
                    path: "",
                    redirectTo: "blog",
                    pathMatch: "full"
                }
            ])
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_11__reviews_service__["a" /* ReviewsService */], __WEBPACK_IMPORTED_MODULE_20__login_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_21__login_auth_guard_service__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_24__books_books_service__["a" /* BooksService */], __WEBPACK_IMPORTED_MODULE_26__registration_registration_service__["a" /* RegistrationService */], __WEBPACK_IMPORTED_MODULE_27__admin_manage_users_manage_users_service__["a" /* ManageUsersService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _a || Object])
], AppModule);

var _a;
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/books/books-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__books_service__ = __webpack_require__("../../../../../src/app/books/books.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BooksDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BooksDetailComponent = (function () {
    function BooksDetailComponent(activeRoute, booksDataService, router) {
        this.activeRoute = activeRoute;
        this.booksDataService = booksDataService;
        this.router = router;
    }
    BooksDetailComponent.prototype.save = function (valid, books) {
        var _this = this;
        if (!valid) {
            return;
        }
        this.booksDataService.saveBook(this.books)
            .subscribe(function (books) {
            _this.router.navigate(["books", books._id]);
        });
    };
    BooksDetailComponent.prototype.delete = function (books) {
        var _this = this;
        this.booksDataService.deleteBook(this.books).subscribe(function (books) {
            _this.router.navigate(["books"]);
        });
    };
    BooksDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeRoute.params.subscribe(function (params) {
            var id = params["id"];
            console.log(id);
            if (id) {
                _this.booksDataService.getBook(id).subscribe(function (books) {
                    _this.books = Object.assign({}, books);
                    console.log(_this.books);
                });
            }
            else {
                _this.books = _this.booksDataService.createBook();
            }
        });
    };
    return BooksDetailComponent;
}());
BooksDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: "app-books-detail",
        template: "\n        <div class=\"books-details\" *ngIf=\"books\">\n          <form #formRef=\"ngForm\" (ngSubmit)=\"save(formRef.valid, books)\">\n          <div class=\"form-group\">\n            <label>Title:</label>\n            <input type=\"text\" #nameRef=\"ngModel\" required minlength=\"2\" [(ngModel)]=\"books.title\" name=\"name\" class=\"form-control\">\n            <div class=\"has-danger\" *ngIf=\"nameRef.touched || nameRef.dirty || formRef.submitted\">\n              <div class=\"form-control-feedback\" \n                    *ngIf=\"nameRef.errors?.required\">\n                    To pole jest wymagane\n              </div>\n              <div class=\"form-control-feedback\" \n                    *ngIf=\"nameRef.errors?.minlength\">\n                    To pole musi mie\u0107 przynajmniej {{nameRef.errors.minlength.requiredLength}} znaki\n              </div>\n            </div>\n\n            <label for=\"author\">Author:</label>\n            <input type=\"text\" required minlength=\"3\" [(ngModel)]=\"books.author\" name=\"author\" class=\"form-control\" id=\"author\">\n            <div class=\"has-danger\" *ngIf=\"nameRef.touched || nameRef.dirty || formRef.submitted\">\n              <div class=\"form-control-feedback\" \n                    *ngIf=\"nameRef.errors?.required\">\n                    To pole jest wymagane\n              </div>\n              <div class=\"form-control-feedback\" \n                    *ngIf=\"nameRef.errors?.minlength\">\n                    To pole musi mie\u0107 przynajmniej {{nameRef.errors.minlength.requiredLength}} znaki\n              </div>\n            </div>\n            \n\n            <label for=\"borrower\">Borrower:</label>\n            <input type=\"text\" [(ngModel)]=\"books.borrower\" name=\"borrower\" class=\"form-control\" id=\"borrower\">\n      \n            <label for=\"dateFrom\">Date From</label>\n            <input type=\"date\" [(ngModel)]=\"books.dateFrom\" name=\"dateFrom\" class=\"form-control\" id=\"dateFrom\">\n\n            <label for=\"dateTo\">Date To</label>\n            <input type=\"date\" [(ngModel)]=\"books.dateTo\" name=\"dateTo\" class=\"form-control\" id=\"dateTo\">\n\n\n          </div>\n         \n      \n          \n          <div class=\"form-group\">\n            <label><input type=\"checkbox\" [(ngModel)]=\"books.read\" name=\"read\"> \n            Read?</label>\n          </div>\n\n          <div class=\"form-group\">\n            <label><input type=\"checkbox\" [(ngModel)]=\"books.borrowed\" name=\"borrow\"> \n            Borrowed?</label>\n          </div>\n\n\n          <div class=\"form-group\">\n            <button class=\"btn btn-success float-xs-right\" type=\"submit\">Save</button>\n            <button *ngIf=\"books._id\" class=\"btn btn-warning float-xs-right\" type=\"button\" (click)=\"delete(books); $event.stopPropagation()\">Delete</button>\n          </div>\n          </form>\n        </div>\n  ",
        styles: [
            "\n    input.ng-dirty.ng-invalid, \n    textarea.ng-dirty.ng-invalid,\n    input.ng-touched.ng-invalid, \n    textarea.ng-touched.ng-invalid{\n      border: 1px solid red;\n    }\n  "
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__books_service__["a" /* BooksService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__books_service__["a" /* BooksService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], BooksDetailComponent);

var _a, _b, _c;
//# sourceMappingURL=books-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/books/books-list.component.html":
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-striped\">\r\n    <thead>\r\n        <tr>\r\n            <th> # </th>\r\n            <th> Title </th>\r\n            <th> Author </th>\r\n            <th> Read? </th>\r\n            <th> Borrowed? </th>\r\n\r\n            <th> Borrower </th>\r\n            <th> Date From </th>\r\n            <th> Date To </th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor=\"let book of books; let i = index\" class=\"playlist-row\" (click)=\"edit(book)\">\r\n            <td> {{ i + 1 || \"\" }}. </td>\r\n            <td> {{ book.title || \"\" }} </td>\r\n            <td> {{ book.author || \"\" }} </td>\r\n\r\n\r\n            <td>\r\n                <button *ngIf=\"book.read==true\" class=\"btn btn-primary\">Yes</button>\r\n                <button *ngIf=\"!book.read\" class=\"btn btn-danger\">No</button>\r\n            </td>\r\n\r\n            <td>\r\n                <button *ngIf=\"book.borrowed\" class=\"btn btn-primary\">Yes</button>\r\n                <button *ngIf=\"!book.borrowed\" class=\"btn btn-danger\">No</button>\r\n            </td>\r\n\r\n            <td > {{ book.borrower || \"\" }} </td>\r\n            <td> {{ book.dateFrom || \"\" }} </td>\r\n            <td> {{ book.dateTo || \"\" }} </td>\r\n\r\n        </tr>\r\n\r\n    </tbody>\r\n\r\n</table>\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/books/books-list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".table {\n  width: 60%;\n  max-width: 60%; }\n\ntd {\n  cursor: pointer; }\n\nth {\n  color: #fff; }\n\ntr {\n  background-color: rgba(2, 117, 216, 0.5); }\n\ntr:first-child {\n  background-color: rgba(2, 117, 216, 0.9); }\n\ntable {\n  border: 1px solid transparent; }\n\n.button-blue {\n  background-color: blue; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/books/books-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__books_service__ = __webpack_require__("../../../../../src/app/books/books.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BooksListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BooksListComponent = (function () {
    function BooksListComponent(booksDataService, activeRoute, router) {
        this.booksDataService = booksDataService;
        this.activeRoute = activeRoute;
        this.router = router;
    }
    BooksListComponent.prototype.edit = function (book) {
        console.log("kliknięta ksiązka", book);
        this.router.navigate(['books', book._id, 'edit']);
    };
    BooksListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.booksDataService.getBooksStream()
            .subscribe(function (books) {
            _this.books = books;
        });
        // this.activeRoute.params.subscribe(params => {
        //   let id = parseInt(params['id']);
        //   console.log(id);
        //   if (id) {
        //     this.booksDataService.getBook(id)
        //         .subscribe( (books:Books) => {
        //           this.books = books
        //           console.log("bookf from params with getBookId function",this.books)
        //         })
        //   }
        // })
    };
    return BooksListComponent;
}());
BooksListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'books-list',
        template: __webpack_require__("../../../../../src/app/books/books-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/books/books-list.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__books_service__["a" /* BooksService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__books_service__["a" /* BooksService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__books_service__["a" /* BooksService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], BooksListComponent);

var _a, _b, _c;
//# sourceMappingURL=books-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/books/books.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__books_service__ = __webpack_require__("../../../../../src/app/books/books.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BooksComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BooksComponent = (function () {
    function BooksComponent(booksDataService) {
        this.booksDataService = booksDataService;
    }
    BooksComponent.prototype.ngOnInit = function () { };
    return BooksComponent;
}());
BooksComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: "app-books",
        template: "\n        <h2>Kolekcja ksi\u0105\u017Cek</h2>\n        <books-list></books-list>\n\n        <div class=\"form-group\">\n          <button class=\"btn btn-primary float-xs-right\" [routerLink]=\"['new']\">Dodaj ksi\u0105\u017Ck\u0119</button>\n        </div>\n    ",
        providers: [__WEBPACK_IMPORTED_MODULE_1__books_service__["a" /* BooksService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__books_service__["a" /* BooksService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__books_service__["a" /* BooksService */]) === "function" && _a || Object])
], BooksComponent);

var _a;
//# sourceMappingURL=books.component.js.map

/***/ }),

/***/ "../../../../../src/app/books/books.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BooksService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BooksService = (function () {
    function BooksService(http) {
        this.http = http;
        this.server_url = "http://localhost:3000/books/";
        this.books = [];
        this.booksStream$ = new __WEBPACK_IMPORTED_MODULE_4_rxjs__["Subject"]();
    }
    BooksService.prototype.saveBook = function (books) {
        var _this = this;
        //books = JSON.stringify(books);
        console.log("save book._id type", typeof books._id);
        console.log("save book._id type", books._id);
        console.log("save", books);
        var request;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' });
        if (books._id) {
            console.log("id z patch z service", books._id);
            request = this.http.patch("" + this.server_url + books._id + "/edit", books, { headers: headers });
        }
        else {
            console.log("id z post z service", books.id);
            request = this.http.post(this.server_url + "new", books, { headers: headers });
        }
        return request
            .map(function (response) { return response.json().obj; })
            .do(function (books) {
            _this.getBooks();
        })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].throw(error.json()); });
    };
    BooksService.prototype.deleteBook = function (books) {
        var _this = this;
        console.log("usun", books);
        var request;
        request = this.http.delete("" + this.server_url + books._id + "/edit");
        return request.map(function (response) { return response.json().obj; })
            .do(function (books) {
            _this.getBooks();
        });
    };
    BooksService.prototype.createBook = function () {
        return {
            id: null,
            author: "",
            title: "",
            read: false,
            borrowed: false,
            borrower: "",
            dateFrom: 0,
            dateTo: 0
        };
    };
    BooksService.prototype.getBooks = function () {
        var _this = this;
        return this.http
            .get(this.server_url)
            .map(function (response) { return response.json().obj; })
            .subscribe(function (books) {
            console.log("getBooks", books);
            _this.books = books;
            _this.booksStream$.next(_this.books);
        });
    };
    //{_id: "59e79d2018722d34b0ca5486", author: "Zlj", title: "Z2", read: false, __v: 0}
    BooksService.prototype.getBooksStream = function () {
        if (!this.books.length) {
            this.getBooks();
        }
        //return this.booksStream$.startWith(this.books);
        console.log("getBooksStream", this.books);
        return __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].from(this.booksStream$).startWith(this.books);
    };
    BooksService.prototype.getBook = function (id) {
        console.log(id);
        return this.http.get("" + this.server_url + id + "/edit").map(function (response) { return response.json().obj; });
    };
    BooksService.prototype.addBookToLibrary = function (chosenBook) {
        console.log("Books from search", chosenBook);
        this.saveBook(chosenBook)
            .subscribe(function () {
            //musi być subscribe żeby działało
        });
    };
    return BooksService;
}());
BooksService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], BooksService);

var _a;
//# sourceMappingURL=books.service.js.map

/***/ }),

/***/ "../../../../../src/app/company/company.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn{\r\n    margin-top: 30px;\r\n}\r\n\r\n.jumbotron{\r\n    width: 100%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/company/company.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>\n  Hello!\n</h3>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/company/company.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CompanyComponent = (function () {
    function CompanyComponent() {
    }
    CompanyComponent.prototype.ngOnInit = function () {
    };
    return CompanyComponent;
}());
CompanyComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-company',
        template: __webpack_require__("../../../../../src/app/company/company.component.html"),
        styles: [__webpack_require__("../../../../../src/app/company/company.component.css")]
    })
], CompanyComponent);

//# sourceMappingURL=company.component.js.map

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\n  Stopka\n\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".footer {\n  width: 100%;\n  height: 100px;\n  background-color: #00bfff;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  color: #fff; }\n  .footer p {\n    color: #000; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
        //console.log($(".footer"));
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/footer/footer.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/login/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        var _this = this;
        this.authService = authService;
        this.router = router;
        this.isLogged = false;
        this.authService.isLoggedIn.subscribe(function (value) {
            console.log("VALUE OF isLoggedIn", value);
            if (!value)
                _this.router.navigate(["/login"]);
            _this.isLogged = value;
        });
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var url = state.url;
        return this.checkLogin(url);
    };
    AuthGuard.prototype.checkLogin = function (url) {
        if (this.isLogged) {
            return true;
        }
        // Store the attempted URL for redirecting
        this.authService.redirectUrl = url;
        this.router.navigate(["/login"]);
        return false;
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth-guard.service.js.map

/***/ }),

/***/ "../../../../../src/app/login/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_delay__ = __webpack_require__("../../../../rxjs/add/operator/delay.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_delay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_delay__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        this.isLoggedIn = new __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__["BehaviorSubject"](false);
        this.usersStream$ = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        this.userPermission$ = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        this.users_url = "http://localhost:4000/users/";
        this.test = "test";
    }
    AuthService.prototype.getUserStream = function () {
        this.getUsers();
        console.log("getUserStream", this.users);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].from(this.usersStream$).startWith(this.users);
    };
    AuthService.prototype.getUsers = function () {
        var _this = this;
        return this.http
            .get(this.users_url)
            .map(function (response) { return response.json(); })
            .subscribe(function (users) {
            console.log("getUsers1", users);
            _this.users = users;
            _this.usersStream$.next(_this.users);
            // this.checkUsers(this.users);
        });
    };
    AuthService.prototype.getUsersafterDelete = function () {
        var _this = this;
        return this.http
            .get(this.users_url)
            .map(function (response) { return response.json(); })
            .subscribe(function (users) {
            console.log("getUsersAfterDelete", users);
            _this.users = users;
            _this.usersStream$.next(_this.users);
            _this.checkUsers(_this.users);
        });
    };
    AuthService.prototype.deleteUser = function (user) {
        var _this = this;
        var request;
        request = this.http.delete(this.users_url + user.id);
        return request.map(function (response) { return response.json(); }).do(function (users) {
            _this.usersStream$.next(_this.users);
            _this.getUsersafterDelete();
        });
    };
    //receive data about logged in user from component
    AuthService.prototype.loggedInUser = function (userLoggedIn) {
        this.userLoggedIn = userLoggedIn;
        return this.userLoggedInFun(userLoggedIn);
    };
    AuthService.prototype.userLoggedInFun = function (userData) {
        this.userData = userData;
        return this.userData;
    };
    AuthService.prototype.returnCheckedUsers = function (isUser) {
        this.isUser = isUser;
        return this.userPermission$.next(isUser);
    };
    // check if loggedIn user is in list of users
    AuthService.prototype.checkUsers = function (users) {
        var _this = this;
        this.userLoggedInFun(this.userLoggedIn);
        var ifUserRegister = this.users.some(function (user) { return user.password == _this.userLoggedIn.password; });
        this.returnCheckedUsers(ifUserRegister);
        return this.userPermission$.next(ifUserRegister);
    };
    AuthService.prototype.getUserPermission = function () {
        this.returnCheckedUsers(this.isUser);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].from(this.userPermission$).startWith(true);
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], AuthService);

var _a;
// getData():Observable<Users[]> {
//         return this.http.get(this.users_url)
//             .map(this.extractData)
//             .catch(this.handleError);
//     }
//     private extractData(res:Response) {
//         let users = res.json();
//         return users;
//     }
//     private handleError(error:any) {
//         // In a real world app, we might use a remote logging infrastructure
//         // We'd also dig deeper into the error to get a better message
//         let errMsg = (error.message) ? error.message :
//             error.status ? `${error.status} - ${error.statusText}` : 'Server error';
//         console.error(errMsg); // log to console instead
//         return Observable.throw(errMsg);
//     }
// }
// redirectUrl: string;
// users: User[];
// private errorMessage: any = '';
//
//
// getData(): Observable<User[]> {
//     return this.http.get('./assets/users.json')
//         .map(this.extractData)
//         .catch(this.handleError);
// }
//
// private extractData(res: Response) {
//     let users = res.json();
//     //return body || [];
//     return users;
// }
//
// private handleError(error: any) {
//     // In a real world app, we might use a remote logging infrastructure
//     // We'd also dig deeper into the error to get a better message
//     let errMsg = (error.message) ? error.message :
//         error.status ? `${error.status} - ${error.statusText}` : 'Server error';
//     console.error(errMsg); // log to console instead
//     return Observable.throw(errMsg);
// }
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/login/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(authService, router, fb, formBuilder) {
        var _this = this;
        this.authService = authService;
        this.router = router;
        this.fb = fb;
        this.formBuilder = formBuilder;
        this.errorMessage = "";
        this.test = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["BehaviorSubject"](false);
        this.authService.isLoggedIn.subscribe(function (value) {
            console.log("LoginComponent AuthService Value", value);
            console.log("LoginComponent AuthService  - TEST", _this.authService.test);
            _this.isLogged = value;
        });
    }
    LoginComponent.prototype.setMessage = function () {
        this.message =
            "Jesteś " +
                (this.authService.isLoggedIn ? "zalogowana/y" : "wylogowana/y");
    };
    LoginComponent.prototype.loginSubmit = function (userData) {
        this.message = "Loguję ...";
        var userRegister = this.users.filter(function (user) {
            return (user.email === userData.email && user.password === userData.password);
        });
        if (userRegister.length === 1) {
            this.authService.isLoggedIn.next(true);
            console.log("logowanie ok");
        }
        else {
            this.authService.isLoggedIn.next(false);
            this.message = "Nie ma takiego uzytkownika ...";
            console.log("logowanie nieudane ok");
        }
        if (this.authService.redirectUrl)
            this.router.navigate([this.authService.redirectUrl]);
        else
            this.router.navigate(["/"]);
        return this.loggedInUser(userData);
        // this.invitation = `Witaj ${userRegister[0].name}`;
    };
    //send Logged User Data to authService
    LoginComponent.prototype.loggedInUser = function (userData) {
        this.userData = userData;
        return this.returnUserData(this.userData);
    };
    LoginComponent.prototype.returnUserData = function (userData) {
        var _this = this;
        this.authService.loggedInUser(this.userData);
        this.authService.getUserPermission().subscribe(function (value) {
            _this.value = value;
            console.log("value-getUserPermission", value);
            _this.authService.isLoggedIn.next(_this.value);
        });
    };
    LoginComponent.prototype.logout = function () {
        this.message = "Wylogowuję ...";
        this.authService.isLoggedIn.next(false);
        ///        console.log('LoginComponent AuthService  - TEST', this.authService.test);
    };
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.registerForm = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormGroup */]({
            email: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* Validators */].required),
            password: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* Validators */].required)
        });
        this.authService.getUserStream().subscribe(function (users) {
            _this.users = users;
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        template: __webpack_require__("../../../../../src/app/login/login.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* FormBuilder */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* FormBuilder */]) === "function" && _d || Object])
], LoginComponent);

var _a, _b, _c, _d;
//     let verified = users.find(user=> user.email === "kowal");
// if(verified && verified.password === "kowal"){
//   this.authService.isLoggedIn.next(true);
// }else{
//     this.authService.isLoggedIn.next(false);
// }
// export class User {
//   constructor(
//     public email:string,
//     public password:string
//   ) {}
// }
// this.
//   registerForm.
//   valueChanges.
//   subscribe(form => {
//         return form;
//   }
// );
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.html":
/***/ (function(module, exports) {

module.exports = "<h2>Strona logowania</h2>\r\n<p>Message: {{message}}</p>\r\n<form [formGroup]=\"registerForm\" #lgForm=\"ngForm\" (ngSubmit)=\"loginSubmit(lgForm.value)\">\r\n    <button (click)=\"logout()\" *ngIf=\"isLogged\">wyloguj</button>\r\n    <input formControlName=\"email\" type=\"email\" placeholder=\"Your email\" *ngIf=\"!isLogged\">\r\n    <input formControlName=\"password\" type=\"password\" placeholder=\"Your password\" *ngIf=\"!isLogged\">\r\n    <button type=\"submit\" *ngIf=\"!isLogged\">Zaloguj się</button>\r\n</form>"

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n\n  <a class=\"navbar-brand\" href=\"#\">Library</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"blog\" routerLinkActive=\"active\">Strona powitalna dla wszystkich</a>\n      </li>\n\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"books\" routerLinkActive=\"active\">My library</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"searchBooks\" routerLinkActive=\"active\">Find books</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"about\" routerLinkActive=\"active\">Borrowed books</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"reviews\" routerLinkActive=\"active\">Waiting for books</a>\n      </li>\n\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/admin\" routerLinkActive=\"active\">Panel administracyjny</a>\n      </li>\n\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/login\" routerLinkActive=\"active\">Zaloguj się</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/register\" routerLinkActive=\"active\">Zaprzyjaźnij się z biblioteką</a>\n      </li>\n\n      <div class=\"invitation\">{{invitation}}</div>\n\n    </ul>\n  </div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".nav-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-orient: horizontal !important;\n  -webkit-box-direction: normal !important;\n      -ms-flex-direction: row !important;\n          flex-direction: row !important;\n  max-width: 100%; }\n\n.nav-item a {\n  color: #999; }\n\n.nav-item a.active {\n  color: #7E7E7E; }\n\n.nav-item a:hover {\n  color: #7E7E7E; }\n\n.navbar-brand {\n  color: #000;\n  font-weight: 700; }\n\n.navbar-brand:hover {\n  color: #000; }\n\n.navbar {\n  width: 100%; }\n\n.navbar ul {\n  width: 100%;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/navbar/navbar.component.scss")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ViewEncapsulation */].None
    }),
    __metadata("design:paramtypes", [])
], NavbarComponent);

//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/registration/registration.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Become a friend of this library</h2>\n\n<form action=\"\" #registrationForm=\"ngForm\" (ngSubmit)=\"registerUser(registrationForm.value)\">\n  <div class=\"form-group\">\n    <label for=\"\">Imię i nazwisko</label>\n    <input type=\"text\" class=\"form-control\" name=\"name\" ngControl=\"name\" #name=\"ngModel\" ngModel required>\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"\">Imię i nazwisko</label>\n    <input type=\"text\" class=\"form-control\" name=\"email\" ngModel required>\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"\">Hasło</label>\n    <input type=\"text\" class=\"form-control\" name=\"password\" ngModel required>\n  </div>\n\n  <button type=\"submit\" class=\"btn btn-success float-xs-right\">Zarejestruj</button>\n\n\n  <!--<ul><li *ngFor=\"let user of users\">{{user.name}}</li></ul>-->\n</form>"

/***/ }),

/***/ "../../../../../src/app/registration/registration.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/registration/registration.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__registration_service__ = __webpack_require__("../../../../../src/app/registration/registration.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RegistrationComponent = (function () {
    function RegistrationComponent(registrationService) {
        this.registrationService = registrationService;
    }
    RegistrationComponent.prototype.registerUser = function (user) {
        console.log(user);
        this.registrationService.registerUser(user);
    };
    RegistrationComponent.prototype.ngOnInit = function () {
    };
    return RegistrationComponent;
}());
RegistrationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-registration',
        template: __webpack_require__("../../../../../src/app/registration/registration.component.html"),
        styles: [__webpack_require__("../../../../../src/app/registration/registration.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__registration_service__["a" /* RegistrationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__registration_service__["a" /* RegistrationService */]) === "function" && _a || Object])
], RegistrationComponent);

var _a;
//# sourceMappingURL=registration.component.js.map

/***/ }),

/***/ "../../../../../src/app/registration/registration.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegistrationService = (function () {
    function RegistrationService(http) {
        this.http = http;
        this.server_url = "http://localhost:4000/users/";
        this.users = [];
    }
    RegistrationService.prototype.registerUser = function (users) {
        return this.http.post(this.server_url, users)
            .map(function (response) { return response.json(); })
            .subscribe();
    };
    return RegistrationService;
}());
RegistrationService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], RegistrationService);

var _a;
//# sourceMappingURL=registration.service.js.map

/***/ }),

/***/ "../../../../../src/app/review-mock.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return REVIEWS; });
var REVIEWS = [
    { id: 1, title: 'Harry Potter', author: 'Autor', tag: '' },
    { id: 2, title: 'Potop', author: 'Autor', tag: '' },
    { id: 3, title: 'Mistrz i Małgorzata', author: 'Autor', tag: '' },
    { id: 4, title: 'Dom duchów', author: 'Autor', tag: '' },
    { id: 5, title: 'Jaś i Małgosia', author: 'Autor', tag: '' },
    { id: 6, title: 'Kubuś Puchatek', author: 'Autor', tag: '' },
];
//# sourceMappingURL=review-mock.js.map

/***/ }),

/***/ "../../../../../src/app/reviews.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__review_mock__ = __webpack_require__("../../../../../src/app/review-mock.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReviewsService = (function () {
    function ReviewsService(http) {
        this.http = http;
    }
    ReviewsService.prototype.getReviews = function () {
        return Promise.resolve(__WEBPACK_IMPORTED_MODULE_2__review_mock__["a" /* REVIEWS */]);
    };
    return ReviewsService;
}());
ReviewsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ReviewsService);

var _a;
//# sourceMappingURL=reviews.service.js.map

/***/ }),

/***/ "../../../../../src/app/reviews/services.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "li{\r\n    border:1px solid transparent;\r\n    list-style: none;\r\n}\r\n\r\nul{\r\n    width: 40%;\r\n    height: 500px;\r\n}\r\n\r\n.book-list{\r\n    cursor: pointer;\r\n    margin: 10px;\r\n    background-color: rgba(15,82,139,0.2);\r\n    padding: 10px;\r\n    \r\n}\r\n\r\n.selectedReview{\r\n    margin-top: 50px;\r\n    margin-bottom: 50px;\r\n    height: 400px;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/reviews/services.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>\n  Tutaj będzie lista oczekujących na pożyczenia książki z informacją\n  <ul>\n    <li>autor i tutył</li>\n    <li>kto oczekuje</li>\n  </ul>\n</h3>\n\n\n<ul>\n  <li class=\"book-list\" *ngFor=\"let review of reviews\" (click)=\"onSelect(review)\" [ngStyle]=\"{'border-color': review.tag}\">\n    <span>{{review.id}}</span> \n    <span>{{review.title}}:</span>\n    <span>{{review.author}}</span>\n\n  </li>\n</ul>\n\n\n<div class=\"selectedReview\" *ngIf=\"selectedReview\">\n  <h2>Szczegóły recenzji {{selectedReview.title}}</h2>\n    <div><label>id: </label>{{selectedReview.id}}</div>\n    <div>\n        <label>Edytuj tytuł: </label>\n        <input [(ngModel)]=\"selectedReview.title\" placeholder=\"name\"/>\n        <div>\n          <label for=\"\">Nadaj kolor</label>\n          <input [(ngModel)]=\"selectedReview.tag\" type=\"color\" placeholder=\"name\"/>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/reviews/services.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reviews_service__ = __webpack_require__("../../../../../src/app/reviews.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ServicesComponent = (function () {
    function ServicesComponent(reviewsService) {
        this.reviewsService = reviewsService;
    }
    ServicesComponent.prototype.getReviews = function () {
        var _this = this;
        this.reviewsService.getReviews().then(function (reviews) { return _this.reviews = reviews; });
    };
    ServicesComponent.prototype.ngOnInit = function () {
        this.getReviews();
    };
    ServicesComponent.prototype.onSelect = function (review) {
        this.selectedReview = review;
    };
    return ServicesComponent;
}());
ServicesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'services-app',
        template: __webpack_require__("../../../../../src/app/reviews/services.component.html"),
        styles: [__webpack_require__("../../../../../src/app/reviews/services.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__reviews_service__["a" /* ReviewsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__reviews_service__["a" /* ReviewsService */]) === "function" && _a || Object])
], ServicesComponent);

var _a;
//# sourceMappingURL=services.component.js.map

/***/ }),

/***/ "../../../../../src/app/search-books/books-search-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__books_search_service__ = __webpack_require__("../../../../../src/app/search-books/books-search.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BooksSearchFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BooksSearchFormComponent = (function () {
    function BooksSearchFormComponent(booksSearchService) {
        var _this = this;
        this.booksSearchService = booksSearchService;
        this.searchBooksForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            'query': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */]('Grisham')
        });
        this.searchBooksForm.get('query').valueChanges
            .filter(function (query) { return query.length >= 3; })
            .distinctUntilChanged()
            .debounceTime(400)
            .subscribe(function (query) {
            _this.booksSearchService.search(query);
        });
    }
    BooksSearchFormComponent.prototype.search = function (query) {
        this.booksSearchService.search(query);
    };
    BooksSearchFormComponent.prototype.ngOnInit = function () {
    };
    return BooksSearchFormComponent;
}());
BooksSearchFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-books-search-form',
        template: "\n     <form [formGroup]=\"searchBooksForm\">\n      <div class=\"input-group\">\n        <input type=\"text\" formControlName=\"query\" class=\"form-control\" placeholder=\"Tytu\u0142\">\n      </div>\n    </form>\n  ",
        styles: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__books_search_service__["a" /* BooksSearchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__books_search_service__["a" /* BooksSearchService */]) === "function" && _a || Object])
], BooksSearchFormComponent);

var _a;
//# sourceMappingURL=books-search-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/search-books/books-search.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BooksSearchService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BooksSearchService = (function () {
    function BooksSearchService(http) {
        this.http = http;
        this.books = [];
        this.chosenBook = {};
        this.booksStream = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["Subject"]();
        this.search("Grisham");
    }
    BooksSearchService.prototype.getBooksStream = function () {
        //console.log("getstream",this.books)
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"]
            .from(this.booksStream)
            .startWith(this.books);
    };
    BooksSearchService.prototype.search = function (query) {
        var _this = this;
        console.log("query", query);
        var url = "http://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?api-key=e13a1f4cefca4afba7016dcc43e832ca&author=" + query + "&sort-by=title&sort-order=desc";
        return this.http
            .get(url)
            .map(function (response) { return response.json(); })
            .subscribe(function (books) {
            console.log("stream1", books); //obiekt
            books = Object.keys(books).map(function (p) { return Object.assign(books[p], { field: p }); });
            _this.books = books[3]; //tablica
            _this.booksStream.next(_this.books);
        });
    };
    return BooksSearchService;
}());
BooksSearchService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], BooksSearchService);

var _a;
// The Object.keys() method returns an array of a given object's own enumerable properties, 
// in the same order as that provided by a for...in loop (the difference being that a for-in
// loop enumerates properties in the prototype chain as well).
//# sourceMappingURL=books-search.service.js.map

/***/ }),

/***/ "../../../../../src/app/search-books/search-books-list/search-books-list.component.html":
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-striped\">\n      <thead>\n        <tr>\n          <th> # </th>\n          <th> Nazwa </th>\n          <th> Autor </th>\n          <th> Wydawca </th>\n          <th> Description </th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let book of books | async let i =index\" (click)=\"chosen(book)\">\n          <td> {{ i + 1 }}. </td>\n          <td> {{ book.title }} </td>\n          <td> {{ book.author }} </td>\n          <td> {{ book.publisher }} </td>\n          <td> {{ book.description }} </td>\n        </tr>\n        \n      </tbody>\n    </table>"

/***/ }),

/***/ "../../../../../src/app/search-books/search-books-list/search-books-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__books_books_service__ = __webpack_require__("../../../../../src/app/books/books.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__books_search_service__ = __webpack_require__("../../../../../src/app/search-books/books-search.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchBooksListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchBooksListComponent = (function () {
    function SearchBooksListComponent(booksService, booksSearchService) {
        this.booksService = booksService;
        this.booksSearchService = booksSearchService;
        this.chosenBook = {};
    }
    SearchBooksListComponent.prototype.chosen = function (chosenBook) {
        console.log("kliknięta ksiązka z szukanych", chosenBook);
        this.booksService.addBookToLibrary(chosenBook);
    };
    SearchBooksListComponent.prototype.ngOnInit = function () {
    };
    return SearchBooksListComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Input */])(),
    __metadata("design:type", Object)
], SearchBooksListComponent.prototype, "books", void 0);
SearchBooksListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-search-books-list',
        template: __webpack_require__("../../../../../src/app/search-books/search-books-list/search-books-list.component.html"),
        styles: [],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__books_books_service__["a" /* BooksService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__books_books_service__["a" /* BooksService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__books_search_service__["a" /* BooksSearchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__books_search_service__["a" /* BooksSearchService */]) === "function" && _b || Object])
], SearchBooksListComponent);

var _a, _b;
//# sourceMappingURL=search-books-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/search-books/search-books.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row mt-1\">\n  <div class=\"col-xs\">\n    <h4 class=\"loat-xs-right mb-2\">Znajdź ksiażki</h4>\n    <app-books-search-form></app-books-search-form>\n  </div>\n</div>\n\n<app-search-books-list [books]=\"books\"></app-search-books-list>\n\n"

/***/ }),

/***/ "../../../../../src/app/search-books/search-books.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "table.table-striped {\n  margin-top: 50px; }\n  table.table-striped tbody tr td {\n    text-transform: capitalize;\n    cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/search-books/search-books.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__books_search_service__ = __webpack_require__("../../../../../src/app/search-books/books-search.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchBooksComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchBooksComponent = (function () {
    function SearchBooksComponent(booksSearchService) {
        this.booksSearchService = booksSearchService;
    }
    SearchBooksComponent.prototype.ngOnInit = function () {
        this.books = this.booksSearchService.getBooksStream();
    };
    return SearchBooksComponent;
}());
SearchBooksComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: "app-search-books",
        template: __webpack_require__("../../../../../src/app/search-books/search-books.component.html"),
        styles: [__webpack_require__("../../../../../src/app/search-books/search-books.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__books_search_service__["a" /* BooksSearchService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__books_search_service__["a" /* BooksSearchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__books_search_service__["a" /* BooksSearchService */]) === "function" && _a || Object])
], SearchBooksComponent);

var _a;
//# sourceMappingURL=search-books.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map