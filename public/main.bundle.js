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

module.exports = "<h3>\r\n  <ul>\r\n    Lista książek pożyczonych:\r\n    <li>tytuł</li>\r\n    <li>autor</li>\r\n    <li>kto pożyczył</li>\r\n    <li>notatki</li>\r\n    <li>button do zwrotu</li>\r\n\r\n  </ul>\r\n</h3>\r\n"

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

/***/ "../../../../../src/app/admin/admin-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__admin_component__ = __webpack_require__("../../../../../src/app/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__logout_admin_dashboard_component__ = __webpack_require__("../../../../../src/app/admin/logout/admin-dashboard.component.ts");
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
                    { path: 'logout', component: __WEBPACK_IMPORTED_MODULE_3__logout_admin_dashboard_component__["a" /* AdminDashboardComponent */] }
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
        template: "\n    <h3>Administrative panel</h3>\n    <nav>\n      <a routerLink=\"./logout\" routerLinkActive=\"active\"\n        [routerLinkActiveOptions]=\"{ exact: true }\">Logout</a>\n      <a routerLink=\"./users-manage\" routerLinkActive=\"active\">Manage users</a>\n    </nav>\n    <router-outlet></router-outlet>\n  "
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__logout_admin_dashboard_component__ = __webpack_require__("../../../../../src/app/admin/logout/admin-dashboard.component.ts");
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
            __WEBPACK_IMPORTED_MODULE_3__logout_admin_dashboard_component__["a" /* AdminDashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_4__manage_users_manage_users_component__["a" /* ManageUsersComponent */]
        ]
    })
], AdminModule);

//# sourceMappingURL=admin.module.js.map

/***/ }),

/***/ "../../../../../src/app/admin/logout/admin-dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<button class=\"btn btn-warning logout\" (click)=\"logout()\">Logout</button>"

/***/ }),

/***/ "../../../../../src/app/admin/logout/admin-dashboard.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".logout {\n  margin: 30px 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/logout/admin-dashboard.component.ts":
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
        this.authService.logout();
        this.authService.isLoggedIn.next(false);
        this.message = "Logging out ...";
    };
    return AdminDashboardComponent;
}());
AdminDashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        template: __webpack_require__("../../../../../src/app/admin/logout/admin-dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/logout/admin-dashboard.component.scss")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__login_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__login_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], AdminDashboardComponent);

var _a;
//# sourceMappingURL=admin-dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/manage-users/manage-users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_auth_service__ = __webpack_require__("../../../../../src/app/login/auth.service.ts");
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
    function ManageUsersComponent(authService) {
        this.authService = authService;
    }
    ManageUsersComponent.prototype.delete = function (user) {
        this.authService.deleteUser(user).subscribe(function (users) {
        });
    };
    ManageUsersComponent.prototype.changeApproval = function (user) {
        if (user.approved) {
            user.approved = false;
        }
        else {
            user.approved = true;
        }
        this.authService.upadeApprovedStatus(user).subscribe(function (users) {
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__login_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__login_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], ManageUsersComponent);

var _a;
//# sourceMappingURL=manage-users.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/manage-users/manage-users.html":
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-striped\">\r\n      <thead>\r\n        <tr>\r\n          <th> # </th>\r\n          <th> Name </th>\r\n          <th> Mail </th>\r\n          <th> Approved </th>\r\n          <th> Delete </th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let user of users; let i = index\" class=\"playlist-row\">\r\n          <td> {{ i + 1 }}. </td>\r\n          <td> {{ user.name }} </td>\r\n          <td> {{ user.email }} </td>\r\n          <td>\r\n              <button (click)=\"changeApproval(user)\" class=\"btn btn-primary\">{{user.approved ? 'Yes' : 'No'}}</button>\r\n          </td>\r\n            <td>\r\n              <button class=\"btn btn-danger\" (click)=\"delete(user)\">Delete</button>\r\n            </td>\r\n        </tr>\r\n        \r\n      </tbody>\r\n      \r\n    </table>"

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

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"container\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n"

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
                    path: "logout",
                    redirectTo: '/blog',
                },
                {
                    path: "admin",
                    component: __WEBPACK_IMPORTED_MODULE_15__admin_admin_component__["a" /* AdminComponent */]
                },
                {
                    path: "users",
                    children: [
                        { path: 'register', component: __WEBPACK_IMPORTED_MODULE_25__registration_registration_component__["a" /* RegistrationComponent */] },
                    ],
                },
                {
                    path: "",
                    redirectTo: "blog",
                    pathMatch: "full"
                }
            ])
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_11__reviews_service__["a" /* ReviewsService */], __WEBPACK_IMPORTED_MODULE_20__login_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_21__login_auth_guard_service__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_24__books_books_service__["a" /* BooksService */], __WEBPACK_IMPORTED_MODULE_26__registration_registration_service__["a" /* RegistrationService */]],
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
        this.router.navigate(["books", book._id, "edit"]);
    };
    BooksListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.booksDataService.getBooksStream().subscribe(function (books) {
            _this.books = books;
        });
    };
    return BooksListComponent;
}());
BooksListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: "books-list",
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
        template: "\n        <h2>Books collection</h2>\n        <books-list></books-list>\n\n        <div class=\"form-group\">\n          <button class=\"btn btn-primary float-xs-right\" [routerLink]=\"['new']\">Dodaj ksi\u0105\u017Ck\u0119</button>\n        </div>\n    ",
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
        var request;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ "Content-Type": "application/json" });
        if (books._id) {
            console.log("id z patch z service", books._id);
            request = this.http.patch("" + this.server_url + books._id + "/edit", books, {
                headers: headers
            });
        }
        else {
            console.log("id z post z service", books.id);
            request = this.http.post(this.server_url + "new", books, {
                headers: headers
            });
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
        return request
            .map(function (response) { return response.json().obj; })
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
        return this.http
            .get("" + this.server_url + id + "/edit")
            .map(function (response) { return response.json().obj; });
    };
    BooksService.prototype.addBookToLibrary = function (chosenBook) {
        console.log("Books from search", chosenBook);
        this.saveBook(chosenBook).subscribe(function () {
            //musi być subscribe żeby działało
        });
    };
    return BooksService;
}());
BooksService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
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

module.exports = "<h3>\r\n  Hello!\r\n</h3>\r\n\r\n\r\n"

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

module.exports = "<footer class=\"footer\">\r\n  Stopka\r\n\r\n</footer>\r\n"

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
        this.users_url = "http://localhost:3000/users/";
        this.users_url_manage = "http://localhost:3000/admin/users-manage/";
    }
    AuthService.prototype.signin = function (user) {
        var body = JSON.stringify(user);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ "Content-Type": "application/json" });
        return this.http
            .post(this.users_url + "login", body, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json()); });
    };
    AuthService.prototype.logout = function () {
        localStorage.clear();
    };
    AuthService.prototype.getUserStream = function () {
        this.getUsers();
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].from(this.usersStream$).startWith(this.users);
    };
    AuthService.prototype.getUsers = function () {
        var _this = this;
        return this.http
            .get(this.users_url)
            .map(function (response) { return response.json().obj; })
            .subscribe(function (users) {
            _this.users = users;
            _this.usersStream$.next(_this.users);
        });
    };
    AuthService.prototype.upadeApprovedStatus = function (user) {
        console.log(user._id);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ "Content-Type": "application/json" });
        var request;
        request = this.http.patch("" + this.users_url_manage + user._id, user, {
            headers: headers
        });
        return request
            .map(function (response) { return response.json().obj; })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json()); });
    };
    AuthService.prototype.deleteUser = function (user) {
        var _this = this;
        var request;
        request = this.http.delete("" + this.users_url_manage + user._id);
        return request
            .map(function (response) { return response.json().obj; })
            .do(function (users) {
            console.log(users);
            _this.getUsers();
        });
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/login/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
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
        this.authService.isLoggedIn.subscribe(function (value) {
            _this.isLogged = value;
            _this.setMessage();
        });
    }
    LoginComponent.prototype.setMessage = function () {
        console.log("set");
        this.message =
            "You are " +
                (this.isLogged ? "logged in" : "logged out");
    };
    LoginComponent.prototype.loginSubmit = function (userData) {
        var _this = this;
        this.message = "Loguję ...";
        this.authService.signin(userData)
            .subscribe(function (data) {
            localStorage.setItem('token', data.token);
            localStorage.setItem('userId', data.userId);
            _this.isLoggedIn();
        }, function (error) { return console.error(error); });
        this.loginForm.reset();
    };
    LoginComponent.prototype.isLoggedIn = function () {
        if (localStorage.getItem('token') !== null) {
            this.authService.isLoggedIn.next(true);
        }
        else {
            this.authService.isLoggedIn.next(false);
            this.message = "Email or/and password are incorrect";
        }
        if (this.authService.redirectUrl)
            this.router.navigate([this.authService.redirectUrl]);
        else
            this.router.navigate(["/"]);
    };
    LoginComponent.prototype.logout = function () {
        this.authService.logout();
        this.message = "Logging out ...";
        this.authService.isLoggedIn.next(false);
    };
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormGroup */]({
            email: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormControl */]("", [
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
            ]),
            password: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].required)
        });
        this.setMessage();
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        template: __webpack_require__("../../../../../src/app/login/login.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.scss")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* FormBuilder */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* FormBuilder */]) === "function" && _d || Object])
], LoginComponent);

var _a, _b, _c, _d;
// //send Logged User Data to authService
// loggedInUser(userData:Users){
//   this.userData = userData;
//   return this.returnUserData(this.userData);
// }
// returnUserData(userData:Users){
//      this.authService.loggedInUser(this.userData);
//      this.authService.getUserPermission().subscribe(value=>{
//       this.value = value;
//       console.log("value-getUserPermission",value)
//       this.authService.isLoggedIn.next(this.value);
//     });
// }
// //send Logged User Data to authService
// loggedInUser(userData:Users){
//   this.userData = userData;
//   return this.returnUserData(this.userData);
// }
// returnUserData(userData:Users){
//      this.authService.loggedInUser(this.userData);
//      this.authService.getUserPermission().subscribe(value=>{
//       this.value = value;
//       console.log("value-getUserPermission",value)
//       this.authService.isLoggedIn.next(this.value);
//     });
// }
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

module.exports = "<h2>Strona logowania</h2>\r\n<p>Message: {{message}}</p>\r\n<form [formGroup]=\"loginForm\" #lgForm=\"ngForm\" (ngSubmit)=\"loginSubmit(lgForm.value)\">\r\n    \r\n    <button class=\"btn btn-warning\" (click)=\"logout()\" *ngIf=\"isLogged\">wyloguj</button>\r\n\r\n    <div class=\"form-group\">\r\n        <input class=\"form-control\" formControlName=\"email\" type=\"email\" placeholder=\"Your email\" *ngIf=\"!isLogged\">\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n        <input class=\"form-control\" formControlName=\"password\" type=\"password\" placeholder=\"Your password\" *ngIf=\"!isLogged\">\r\n    </div>\r\n        <button class=\"btn btn-primary\" type=\"submit\" *ngIf=\"!isLogged\">Log in</button>\r\n</form>\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n\r\n  <a class=\"navbar-brand\" href=\"#\">Library</a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\r\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n    <ul class=\"navbar-nav mr-auto\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"blog\" routerLinkActive=\"active\">Strona powitalna dla wszystkich</a>\r\n      </li>\r\n\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"books\" routerLinkActive=\"active\">My library</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"searchBooks\" routerLinkActive=\"active\">Find books</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"about\" routerLinkActive=\"active\">Borrowed books</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"reviews\" routerLinkActive=\"active\">Waiting for books</a>\r\n      </li>\r\n\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/admin\" routerLinkActive=\"active\">Administrative panel</a>\r\n      </li>\r\n\r\n      <li *ngIf=\"!isLogged\" class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/login\" routerLinkActive=\"active\">Log in</a>\r\n      </li>\r\n       <li *ngIf=\"isLogged\" class=\"nav-item\" (click)=\"logout()\">\r\n        <a class=\"nav-link\" routerLinkActive=\"active\">Log out</a>\r\n      </li> \r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/users/register\" routerLinkActive=\"active\">Friend of library</a>\r\n      </li>\r\n\r\n      <div class=\"invitation\">{{invitation}}</div>\r\n\r\n    </ul>\r\n  </div>\r\n</nav>"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_auth_service__ = __webpack_require__("../../../../../src/app/login/auth.service.ts");
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
    function NavbarComponent(authService) {
        var _this = this;
        this.authService = authService;
        this.authService.isLoggedIn.subscribe(function (value) {
            _this.isLogged = value;
        });
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.logout = function () {
        this.authService.logout();
        this.message = "Logging out ...";
        this.authService.isLoggedIn.next(false);
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__login_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__login_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], NavbarComponent);

var _a;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/registration/registration.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Become a friend of this library</h2>\r\n\r\n<form action=\"\" #registrationForm=\"ngForm\" (ngSubmit)=\"registerUser(registrationForm.value)\">\r\n  <div class=\"form-group\">\r\n    <label for=\"\">Imię i nazwisko</label>\r\n    <input type=\"text\" class=\"form-control\" name=\"name\" ngControl=\"name\" #name=\"ngModel\" ngModel required>\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <label for=\"\">Email</label>\r\n    <input type=\"text\" class=\"form-control\" name=\"email\" ngModel required>\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <label for=\"\">Hasło</label>\r\n    <input type=\"text\" class=\"form-control\" name=\"password\" ngModel required>\r\n  </div>\r\n\r\n  <button type=\"submit\" class=\"btn btn-success float-xs-right\">Zarejestruj</button>\r\n\r\n</form>"

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
        this.server_url = "http://localhost:3000/users/register/";
        this.users = [];
    }
    RegistrationService.prototype.registerUser = function (users) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ "Content-Type": "application/json" });
        return this.http
            .post(this.server_url, users, { headers: headers })
            .map(function (response) { return response.json().obj; })
            .subscribe(function (users) {
            console.log("user registered", users);
        });
    };
    return RegistrationService;
}());
RegistrationService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
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

module.exports = "<h3>\r\n  Tutaj będzie lista oczekujących na pożyczenia książki z informacją\r\n  <ul>\r\n    <li>autor i tutył</li>\r\n    <li>kto oczekuje</li>\r\n  </ul>\r\n</h3>\r\n\r\n\r\n<ul>\r\n  <li class=\"book-list\" *ngFor=\"let review of reviews\" (click)=\"onSelect(review)\" [ngStyle]=\"{'border-color': review.tag}\">\r\n    <span>{{review.id}}</span> \r\n    <span>{{review.title}}:</span>\r\n    <span>{{review.author}}</span>\r\n\r\n  </li>\r\n</ul>\r\n\r\n\r\n<div class=\"selectedReview\" *ngIf=\"selectedReview\">\r\n  <h2>Szczegóły recenzji {{selectedReview.title}}</h2>\r\n    <div><label>id: </label>{{selectedReview.id}}</div>\r\n    <div>\r\n        <label>Edytuj tytuł: </label>\r\n        <input [(ngModel)]=\"selectedReview.title\" placeholder=\"name\"/>\r\n        <div>\r\n          <label for=\"\">Nadaj kolor</label>\r\n          <input [(ngModel)]=\"selectedReview.tag\" type=\"color\" placeholder=\"name\"/>\r\n        </div>\r\n    </div>\r\n</div>"

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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], BooksSearchService);

var _a;
// The Object.keys() method returns an array of a given object's own enumerable properties, 
// in the same order as that provided by a for...in loop (the difference being that a for-in
// loop enumerates properties in the prototype chain as well).
//# sourceMappingURL=books-search.service.js.map

/***/ }),

/***/ "../../../../../src/app/search-books/search-books-list/search-books-list.component.html":
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-striped\">\r\n      <thead>\r\n        <tr>\r\n          <th> # </th>\r\n          <th> Nazwa </th>\r\n          <th> Autor </th>\r\n          <th> Wydawca </th>\r\n          <th> Description </th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let book of books | async let i =index\" (click)=\"chosen(book)\">\r\n          <td> {{ i + 1 }}. </td>\r\n          <td> {{ book.title }} </td>\r\n          <td> {{ book.author }} </td>\r\n          <td> {{ book.publisher }} </td>\r\n          <td> {{ book.description }} </td>\r\n        </tr>\r\n        \r\n      </tbody>\r\n    </table>"

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

module.exports = "<div class=\"row mt-1\">\r\n  <div class=\"col-xs\">\r\n    <h4 class=\"loat-xs-right mb-2\">Znajdź ksiażki</h4>\r\n    <app-books-search-form></app-books-search-form>\r\n  </div>\r\n</div>\r\n\r\n<app-search-books-list [books]=\"books\"></app-search-books-list>\r\n\r\n"

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