webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_error_error_component__ = __webpack_require__("../../../../../src/app/components/error/error.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_user_data_user_data_component__ = __webpack_require__("../../../../../src/app/components/user-data/user-data.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_stepper_stepper_component__ = __webpack_require__("../../../../../src/app/components/stepper/stepper.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_imagegrid_imagegrid_component__ = __webpack_require__("../../../../../src/app/components/imagegrid/imagegrid.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_databases_databases_component__ = __webpack_require__("../../../../../src/app/components/databases/databases.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_guards_loggin_guard__ = __webpack_require__("../../../../../src/app/services/guards/loggin.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_guards_protectLoggin_guard__ = __webpack_require__("../../../../../src/app/services/guards/protectLoggin.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_queue_db_queue_db_component__ = __webpack_require__("../../../../../src/app/components/queue-db/queue-db.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_admin_panel_admin_panel_component__ = __webpack_require__("../../../../../src/app/components/admin-panel/admin-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_guards_admin_guard__ = __webpack_require__("../../../../../src/app/services/guards/admin.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_queuedb_detail_queuedb_detail_component__ = __webpack_require__("../../../../../src/app/components/queuedb-detail/queuedb-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_queuedb_list_queuedb_list_component__ = __webpack_require__("../../../../../src/app/components/queuedb-list/queuedb-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_vizqueue_list_vizqueue_list_component__ = __webpack_require__("../../../../../src/app/components/vizqueue-list/vizqueue-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_vizqueue_detail_vizqueue_detail_component__ = __webpack_require__("../../../../../src/app/components/vizqueue-detail/vizqueue-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_viz_view_viz_view_component__ = __webpack_require__("../../../../../src/app/components/viz-view/viz-view.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//Componentes


















var routes = [
    {
        path: 'visualizer', children: [
            { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__components_login_login_component__["a" /* LoginComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_11__services_guards_protectLoggin_guard__["a" /* ProtectLogginGuard */]] },
            {
                path: 'home', component: __WEBPACK_IMPORTED_MODULE_4__components_home_home_component__["a" /* HomeComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_10__services_guards_loggin_guard__["a" /* LogginGuard */]], children: [
                    { path: '', redirectTo: 'imagegrid', pathMatch: 'full' },
                    { path: 'imagegrid', component: __WEBPACK_IMPORTED_MODULE_8__components_imagegrid_imagegrid_component__["a" /* ImageGridComponent */] },
                    { path: 'vizView/:id', component: __WEBPACK_IMPORTED_MODULE_19__components_viz_view_viz_view_component__["a" /* VizViewComponent */] },
                    { path: 'userdata', component: __WEBPACK_IMPORTED_MODULE_6__components_user_data_user_data_component__["a" /* UserDataComponent */] },
                    { path: 'stepper', component: __WEBPACK_IMPORTED_MODULE_7__components_stepper_stepper_component__["a" /* StepperComponent */] },
                    { path: 'databases', component: __WEBPACK_IMPORTED_MODULE_9__components_databases_databases_component__["a" /* DatabasesComponent */] },
                    { path: 'queueDB', component: __WEBPACK_IMPORTED_MODULE_12__components_queue_db_queue_db_component__["a" /* QueueDbComponent */] },
                    {
                        path: 'adminpanel', canActivate: [__WEBPACK_IMPORTED_MODULE_14__services_guards_admin_guard__["a" /* AdminGuard */]], component: __WEBPACK_IMPORTED_MODULE_13__components_admin_panel_admin_panel_component__["a" /* AdminPanelComponent */], children: [
                            { path: '', redirectTo: 'queuedblist', pathMatch: 'full' },
                            { path: 'queuedblist', component: __WEBPACK_IMPORTED_MODULE_16__components_queuedb_list_queuedb_list_component__["a" /* QueuedbListComponent */] },
                            { path: 'queuedbdetail/:id', component: __WEBPACK_IMPORTED_MODULE_15__components_queuedb_detail_queuedb_detail_component__["a" /* QueuedbDetailComponent */] },
                            { path: 'vizqueuelist', component: __WEBPACK_IMPORTED_MODULE_17__components_vizqueue_list_vizqueue_list_component__["a" /* VizqueueListComponent */] },
                            { path: 'vizqueuedetail/:id', component: __WEBPACK_IMPORTED_MODULE_18__components_vizqueue_detail_vizqueue_detail_component__["a" /* VizqueueDetailComponent */] }
                        ]
                    }
                ]
            },
            { path: 'register', component: __WEBPACK_IMPORTED_MODULE_5__components_register_register_component__["a" /* RegisterComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_11__services_guards_protectLoggin_guard__["a" /* ProtectLogginGuard */]] },
            { path: '', redirectTo: 'login', pathMatch: 'full' },
            { path: '**', component: __WEBPACK_IMPORTED_MODULE_3__components_error_error_component__["a" /* ErrorComponent */] }
        ]
    },
    { path: '**', redirectTo: '' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppMaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppMaterialModule = (function () {
    function AppMaterialModule() {
    }
    AppMaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatCheckboxModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["C" /* MatToolbarModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatChipsModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MatOptionModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MatProgressBarModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["w" /* MatSliderModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["v" /* MatSlideToggleModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatMenuModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatDialogModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["x" /* MatSnackBarModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["t" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MatInputModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["u" /* MatSidenavModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatCardModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatIconModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["s" /* MatRadioModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["r" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["B" /* MatTabsModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatListModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["y" /* MatStepperModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatExpansionModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["A" /* MatTableModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatPaginatorModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatCheckboxModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["C" /* MatToolbarModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatChipsModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MatOptionModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatGridListModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["w" /* MatSliderModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["v" /* MatSlideToggleModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatMenuModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatDialogModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["x" /* MatSnackBarModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["t" /* MatSelectModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["u" /* MatSidenavModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatCardModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatIconModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["s" /* MatRadioModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["r" /* MatProgressSpinnerModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["B" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatListModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["y" /* MatStepperModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatExpansionModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["A" /* MatTableModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatPaginatorModule */]
            ],
        })
    ], AppMaterialModule);
    return AppMaterialModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_error_error_component__ = __webpack_require__("../../../../../src/app/components/error/error.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_validator_equal_validate_directive__ = __webpack_require__("../../../../../src/app/services/validator/equal-validate.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_api_user_service__ = __webpack_require__("../../../../../src/app/services/api/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_guards_loggin_guard__ = __webpack_require__("../../../../../src/app/services/guards/loggin.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_guards_protectLoggin_guard__ = __webpack_require__("../../../../../src/app/services/guards/protectLoggin.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_validator_emailUniq_directive__ = __webpack_require__("../../../../../src/app/services/validator/emailUniq.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_user_data_user_data_component__ = __webpack_require__("../../../../../src/app/components/user-data/user-data.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_stepper_stepper_component__ = __webpack_require__("../../../../../src/app/components/stepper/stepper.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__app_material_module__ = __webpack_require__("../../../../../src/app/app.material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_dialogContent_dialogContent_component__ = __webpack_require__("../../../../../src/app/components/dialogContent/dialogContent.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_imagegrid_imagegrid_component__ = __webpack_require__("../../../../../src/app/components/imagegrid/imagegrid.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_api_database_service__ = __webpack_require__("../../../../../src/app/services/api/database.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_databases_databases_component__ = __webpack_require__("../../../../../src/app/components/databases/databases.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_queue_db_queue_db_component__ = __webpack_require__("../../../../../src/app/components/queue-db/queue-db.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_admin_panel_admin_panel_component__ = __webpack_require__("../../../../../src/app/components/admin-panel/admin-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_guards_admin_guard__ = __webpack_require__("../../../../../src/app/services/guards/admin.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_queuedb_detail_queuedb_detail_component__ = __webpack_require__("../../../../../src/app/components/queuedb-detail/queuedb-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_queuedb_list_queuedb_list_component__ = __webpack_require__("../../../../../src/app/components/queuedb-list/queuedb-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_vizqueue_detail_vizqueue_detail_component__ = __webpack_require__("../../../../../src/app/components/vizqueue-detail/vizqueue-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_vizqueue_list_vizqueue_list_component__ = __webpack_require__("../../../../../src/app/components/vizqueue-list/vizqueue-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__services_api_viz_service__ = __webpack_require__("../../../../../src/app/services/api/viz.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_viz_view_viz_view_component__ = __webpack_require__("../../../../../src/app/components/viz-view/viz-view.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
































var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_error_error_component__["a" /* ErrorComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_11__services_validator_equal_validate_directive__["a" /* EqualValidator */],
                __WEBPACK_IMPORTED_MODULE_15__services_validator_emailUniq_directive__["a" /* EmailValidatorDirective */],
                __WEBPACK_IMPORTED_MODULE_16__components_user_data_user_data_component__["a" /* UserDataComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_stepper_stepper_component__["a" /* StepperComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_dialogContent_dialogContent_component__["a" /* DialogContentComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_imagegrid_imagegrid_component__["a" /* ImageGridComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_databases_databases_component__["a" /* DatabasesComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_queue_db_queue_db_component__["a" /* QueueDbComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_admin_panel_admin_panel_component__["a" /* AdminPanelComponent */],
                __WEBPACK_IMPORTED_MODULE_26__components_queuedb_detail_queuedb_detail_component__["a" /* QueuedbDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_27__components_queuedb_list_queuedb_list_component__["a" /* QueuedbListComponent */],
                __WEBPACK_IMPORTED_MODULE_28__components_vizqueue_detail_vizqueue_detail_component__["a" /* VizqueueDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_29__components_vizqueue_list_vizqueue_list_component__["a" /* VizqueueListComponent */],
                __WEBPACK_IMPORTED_MODULE_31__components_viz_view_viz_view_component__["a" /* VizViewComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_7__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_18__app_material_module__["a" /* AppMaterialModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_forms__["j" /* ReactiveFormsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_12__services_api_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_13__services_guards_loggin_guard__["a" /* LogginGuard */], __WEBPACK_IMPORTED_MODULE_25__services_guards_admin_guard__["a" /* AdminGuard */], __WEBPACK_IMPORTED_MODULE_14__services_guards_protectLoggin_guard__["a" /* ProtectLogginGuard */], __WEBPACK_IMPORTED_MODULE_21__services_api_database_service__["a" /* DatabaseService */], __WEBPACK_IMPORTED_MODULE_30__services_api_viz_service__["a" /* VizService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_19__components_dialogContent_dialogContent_component__["a" /* DialogContentComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/admin-panel/admin-panel.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".demo-tab-group {\r\n  border: 1px solid #e8e8e8;\r\n}\r\n\r\n.demo-tab-content {\r\n  padding: 16px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin-panel/admin-panel.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-card-content>\n    <h2 class=\"example-h2\">Elementos pendientes de añadir por el administrador</h2>\n    <nav mat-tab-nav-bar>\n      <a mat-tab-link [routerLink]=\"['queuedblist']\">\n\n        Bases de datos pendientes\n      </a>\n      <a mat-tab-link [routerLink]=\"['vizqueuelist']\">\n\n        Visualizaciones\n      </a>\n\n    </nav>\n    <router-outlet></router-outlet>\n\n  </mat-card-content>\n</mat-card>\n"

/***/ }),

/***/ "../../../../../src/app/components/admin-panel/admin-panel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminPanelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminPanelComponent = (function () {
    function AdminPanelComponent() {
    }
    AdminPanelComponent.prototype.ngOnInit = function () {
    };
    AdminPanelComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-admin-panel',
            template: __webpack_require__("../../../../../src/app/components/admin-panel/admin-panel.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/admin-panel/admin-panel.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [])
    ], AdminPanelComponent);
    return AdminPanelComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/databases/databases.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "  .example-form-field {\r\n    width: 100%;\r\n  }\r\n\r\n\r\n  .mat-table {\r\n    overflow: auto;\r\n  }\r\n\r\n  mat-cell,\r\n  .mat-header-cell {\r\n    overflow: visible;\r\n  }\r\n\r\n.centerText {\r\n  color: lightgrey;\r\n  text-align: center;\r\n  margin-top: 10%;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/databases/databases.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"dataSource; else templateName\">\n  <ng-template matStepLabel>Selecciona las bases de datos</ng-template>\n  <h2 class=\"example-h2\">Bases de datos</h2>\n  <mat-form-field class=\"example-form-field\">\n    <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filtro\">\n  </mat-form-field>\n\n  <mat-table #table [dataSource]=\"dataSource\">\n\n\n    <ng-container matColumnDef=\"nombre\">\n      <mat-header-cell *matHeaderCellDef> Nombre </mat-header-cell>\n      <mat-cell *matCellDef=\"let database\"> {{database.nombre}} </mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"descripcion\">\n      <mat-header-cell *matHeaderCellDef> Descripcion </mat-header-cell>\n      <mat-cell *matCellDef=\"let database\"> {{database.descripcion}} </mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"campos\">\n      <mat-header-cell *matHeaderCellDef> Campos </mat-header-cell>\n      <mat-cell *matCellDef=\"let database\">\n        <ul>\n          <li *ngFor=\"let campo of database.campos\">\n            {{campo.nombre}} : {{campo.tipo}}\n          </li>\n        </ul>\n      </mat-cell>\n\n    </ng-container>\n\n    <!-- Checkbox Column -->\n    <ng-container *ngIf='isAdmin()' matColumnDef=\"borrar\">\n      <mat-header-cell *matHeaderCellDef>\n        <mat-checkbox (change)=\"$event ? masterToggle() : null\" [checked]=\"selection.hasValue() && isAllSelected()\" [indeterminate]=\"selection.hasValue() && !isAllSelected()\">\n        </mat-checkbox>\n        <button mat-icon-button (click)='deleteSelected()'>\n          <mat-icon aria-label=\"Delete\">delete</mat-icon>\n        </button>\n\n\n      </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\">\n        <mat-checkbox (click)=\"$event.stopPropagation()\" (change)=\"$event ? selection.toggle(row) : null\" [checked]=\"selection.isSelected(row)\">\n        </mat-checkbox>\n      </mat-cell>\n    </ng-container>\n\n\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n\n  </mat-table>\n\n  <button mat-fab class=\"app-fab\" [routerLink]=\"['/visualizer/home/queueDB']\">\n    <mat-icon>add</mat-icon>\n  </button>\n</div>\n\n<ng-template #templateName>\n  <mat-spinner></mat-spinner>\n</ng-template>\n"

/***/ }),

/***/ "../../../../../src/app/components/databases/databases.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatabasesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_cdk_collections__ = __webpack_require__("../../../cdk/esm5/collections.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_api_database_service__ = __webpack_require__("../../../../../src/app/services/api/database.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_api_user_service__ = __webpack_require__("../../../../../src/app/services/api/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var DatabasesComponent = (function () {
    function DatabasesComponent(databaseService, userService, _dialog) {
        this.databaseService = databaseService;
        this.userService = userService;
        this._dialog = _dialog;
        this.displayedColumns = ['nombre', 'descripcion', 'campos'];
        this.selection = new __WEBPACK_IMPORTED_MODULE_2__angular_cdk_collections__["b" /* SelectionModel */](true, []);
        this.resultsLength = 0;
    }
    DatabasesComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var databases;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.isAdmin()) {
                            this.displayedColumns.push('borrar');
                        }
                        return [4 /*yield*/, this.databaseService.getDatabases()];
                    case 1:
                        databases = _a.sent();
                        databases.subscribe(function (response) {
                            _this.data = response.json();
                            _this.resultsLength = _this.data.length;
                            _this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["z" /* MatTableDataSource */](_this.data);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    /** Whether the number of selected elements matches the total number of rows. */
    DatabasesComponent.prototype.isAllSelected = function () {
        var numSelected = this.selection.selected.length;
        var numRows = this.dataSource.data.length;
        return numSelected === numRows;
    };
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    DatabasesComponent.prototype.masterToggle = function () {
        var _this = this;
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach(function (row) { return _this.selection.select(row); });
    };
    DatabasesComponent.prototype.deleteSelected = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _loop_1, this_1, _i, _a, database;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _loop_1 = function (database) {
                            var index, deletedDB;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        index = this_1.data.findIndex(function (d) { return d === database; });
                                        this_1.dataSource.data.splice(index, 1);
                                        this_1.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["z" /* MatTableDataSource */](this_1.dataSource.data);
                                        return [4 /*yield*/, this_1.databaseService.deleteDatabase(database)];
                                    case 1:
                                        deletedDB = _a.sent();
                                        deletedDB.subscribe();
                                        return [2 /*return*/];
                                }
                            });
                        };
                        this_1 = this;
                        _i = 0, _a = this.selection.selected;
                        _b.label = 1;
                    case 1:
                        if (!(_i < _a.length)) return [3 /*break*/, 4];
                        database = _a[_i];
                        return [5 /*yield**/, _loop_1(database)];
                    case 2:
                        _b.sent();
                        _b.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4:
                        this.selection.clear();
                        return [2 /*return*/];
                }
            });
        });
    };
    DatabasesComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    DatabasesComponent.prototype.isAdmin = function () {
        return this.userService.isAdmin();
    };
    DatabasesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-databases',
            template: __webpack_require__("../../../../../src/app/components/databases/databases.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/databases/databases.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_api_database_service__["a" /* DatabaseService */], __WEBPACK_IMPORTED_MODULE_4__services_api_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatDialog */]])
    ], DatabasesComponent);
    return DatabasesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/dialogContent/dialogContent.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogContentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var DialogContentComponent = (function () {
    function DialogContentComponent(data, dialogRef) {
        this.data = data;
        this.dialogRef = dialogRef;
    }
    DialogContentComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DialogContentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: "\n    <span [style.color]=\"data.color\"><mat-icon>{{data.icon}}</mat-icon>  {{data.status}}</span>\n  ",
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])), __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Optional */])()),
        __metadata("design:paramtypes", [Object, __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatDialogRef */]])
    ], DialogContentComponent);
    return DialogContentComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/error/error.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/error/error.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<h1 color=\"red\"> ERROR 404 Page not found! </h1>\r\n\r\nThe page you are trying to reach does not exist, or has been moved. Please use the menus or the <br>\r\nsearch box to find what page are you looking for.\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/error/error.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ErrorComponent = (function () {
    function ErrorComponent() {
    }
    ErrorComponent.prototype.ngOnInit = function () {
    };
    ErrorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-error',
            template: __webpack_require__("../../../../../src/app/components/error/error.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/error/error.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [])
    ], ErrorComponent);
    return ErrorComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.example-sidenav {\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1;\r\n          flex: 1;\r\n\r\n}\r\n\r\n.app-fab {\r\n  position: fixed !important;\r\n  bottom: 20px;\r\n  right: 20px;\r\n}\r\n\r\n.example-container {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container\">\r\n  <mat-toolbar color=\"primary\">\r\n    <button mat-button class=\"app-menu-button\" (click)=\"sidenav.toggle()\">\r\n      <i class=\"material-icons\">menu</i>\r\n    </button>\r\n    <span class=\"title\">Datavisualizer</span>\r\n  </mat-toolbar>\r\n  <mat-sidenav-container class=\"app-sidenav\" color=\"primary\">\r\n\r\n    <mat-sidenav #sidenav mode=\"side\" layout=\"vertical\" class=\"example-sidenav\">\r\n      <mat-toolbar>\r\n        <mat-toolbar-row>\r\n          <a [routerLink]=\"['/visualizer/home/imagegrid']\">\r\n            <span>Visualizaciones</span>\r\n            <span class=\"app-toolbar-filler\"></span>\r\n            <mat-icon class=\"example-icon\">image</mat-icon>\r\n          </a>\r\n        </mat-toolbar-row>\r\n\r\n        <mat-toolbar-row>\r\n          <a [routerLink]=\"['/visualizer/home/userdata']\">\r\n\r\n            <span>Datos del usuario</span>\r\n            <span class=\"app-toolbar-filler\"></span>\r\n            <mat-icon class=\"example-icon\">account_circle</mat-icon>\r\n          </a>\r\n        </mat-toolbar-row>\r\n\r\n        <mat-toolbar-row>\r\n          <a [routerLink]=\"['/visualizer/home/databases']\">\r\n\r\n            <span>Bases de datos</span>\r\n            <span class=\"app-toolbar-filler\"></span>\r\n            <mat-icon class=\"example-icon\">archive</mat-icon>\r\n          </a>\r\n        </mat-toolbar-row>\r\n\r\n        <mat-toolbar-row *ngIf='isAdmin()'>\r\n          <a [routerLink]=\"['/visualizer/home/adminpanel']\">\r\n            <span>Panel de administración</span>\r\n            <span class=\"app-toolbar-filler\"></span>\r\n            <mat-icon class=\"example-icon\">settings</mat-icon>\r\n          </a>\r\n        </mat-toolbar-row>\r\n\r\n\r\n        <mat-toolbar-row>\r\n          <button mat-raised-button color=\"warn\" class=\"app-sidebar-button\" (click)=\"logout()\">\r\n            <mat-icon class=\"example-icon\">power_settings_new</mat-icon>\r\n            Salir\r\n          </button>\r\n        </mat-toolbar-row>\r\n\r\n\r\n      </mat-toolbar>\r\n    </mat-sidenav>\r\n    <mat-sidenav-content>\r\n      <router-outlet></router-outlet>\r\n    </mat-sidenav-content>\r\n\r\n  </mat-sidenav-container>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_user_service__ = __webpack_require__("../../../../../src/app/services/api/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = (function () {
    function HomeComponent(_userService, router) {
        this._userService = _userService;
        this.router = router;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.logout = function () {
        this._userService.logout();
        this.router.navigate(['/visualizer/login']);
    };
    HomeComponent.prototype.isAdmin = function () {
        return this._userService.isAdmin();
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_api_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/imagegrid/imagegrid.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".centerText {\r\n  color: lightgrey;\r\n  text-align: center;\r\n  margin-top: 10%;\r\n}\r\n\r\n.centerTitle {\r\n  margin-top: 10%;\r\n  margin-left: 5%;\r\n  text-align: center;\r\n}\r\n\r\n.container {\r\n  position: relative;\r\n  width: 75%;\r\n}\r\n\r\n.image {\r\n  opacity: 1;\r\n  display: block;\r\n  width: 100%;\r\n  height: auto;\r\n  transition: .5s ease;\r\n  -webkit-backface-visibility: hidden;\r\n          backface-visibility: hidden;\r\n  border: 1px solid #ddd;\r\n  border-radius: 4px;\r\n}\r\n\r\n.middle {\r\n  transition: .5s ease;\r\n  opacity: 0;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  -webkit-transform: translate(-50%, -50%);\r\n          transform: translate(-50%, -50%);\r\n  -ms-transform: translate(-50%, -50%);\r\n  text-align: center;\r\n}\r\n\r\n.container:hover .image {\r\n  opacity: 0.3;\r\n}\r\n\r\n.container:hover .middle {\r\n  opacity: 1;\r\n}\r\n\r\n.text {\r\n  background-color: grey;\r\n  color: whitesmoke;\r\n  font-size: 16px;\r\n  padding: 16px 32px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/imagegrid/imagegrid.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"loaded; else templateName\">\n\n  <h1 *ngIf=\"!vizs; else noViz\" class=' centerText '> No hay Visualizaciones</h1>\n\n  <ng-template #noViz>\n    <mat-grid-list cols=\"4\" rowHeight=\"250px\">\n      <mat-grid-tile *ngFor=\"let viz of vizs\">\n        <div class=\"container\">\n          <img src={{thumbnail(viz.img)}} class=\"image\" style=\"width:100%\">\n          <div class=\"middle\">\n            <button mat-raised-button (click)='ver(viz)' color=\"primary\">Ver</button>\n          </div>\n          <span class=' centerTitle '>{{viz.nombre}}</span>\n        </div>\n      </mat-grid-tile>\n    </mat-grid-list>\n  </ng-template>\n\n  <button mat-fab class=\"app-fab\" [routerLink]=\"['/visualizer/home/stepper']\">\n    <mat-icon>add</mat-icon>\n  </button>\n</div>\n\n<ng-template #templateName>\n  <mat-spinner style=\"margin: auto;\" mode=\"indeterminate\"></mat-spinner>\n</ng-template>\n"

/***/ }),

/***/ "../../../../../src/app/components/imagegrid/imagegrid.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageGridComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_user_service__ = __webpack_require__("../../../../../src/app/services/api/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ImageGridComponent = (function () {
    function ImageGridComponent(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    ImageGridComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getUserViz().subscribe(function (response) {
            _this.vizs = response.viz.filter(function (viz) { return viz.url; });
            _this.loaded = true;
        });
    };
    ImageGridComponent.prototype.thumbnail = function (img) {
        img = img ? img : 'http://www.confidentonline.com/uploads/227057695no%20image.jpg';
        return img;
    };
    ImageGridComponent.prototype.ver = function (viz) {
        this.router.navigate(['visualizer/home/vizView/' + viz._id]);
    };
    ImageGridComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-component',
            template: __webpack_require__("../../../../../src/app/components/imagegrid/imagegrid.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/imagegrid/imagegrid.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_api_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], ImageGridComponent);
    return ImageGridComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\r\n  <span class=\"title\">Datavisualizer</span>\r\n</mat-toolbar>\r\n\r\n<mat-card>\r\n  <mat-card-content>\r\n\r\n    <form class=\"example-container\" #loginForm=\"ngForm\" (ngSubmit)=\"onSubmit(loginForm)\" accept-charset=\"UTF-8\" role=\"form\">\r\n      <h2 class=\"example-h2\">Login</h2>\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Nombre\" type=\"email\" name=\"email\" #email=\"ngModel\" [(ngModel)]=\"user.email\" email\r\n          required>\r\n      </mat-form-field>\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Contraseña\" name=\"password\" type=\"password\" value=\"\" #password=\"ngModel\" [(ngModel)]=\"user.password\"\r\n          required>\r\n        <mat-icon matSuffix>visibility</mat-icon>\r\n      </mat-form-field>\r\n      <button type='submit' class=\"app-button\" mat-raised-button color=\"primary\" [disabled]=\"!loginForm.form.valid\">Login</button>\r\n    </form>\r\n\r\n  </mat-card-content>\r\n<button class=\"app-button\" mat-raised-button color=\"primary\" [routerLink]=\"['/visualizer/register']\">Registrate</button>\r\n\r\n</mat-card>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_user_entity__ = __webpack_require__("../../../../../src/app/components/models/user.entity.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_api_user_service__ = __webpack_require__("../../../../../src/app/services/api/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dialogContent_dialogContent_component__ = __webpack_require__("../../../../../src/app/components/dialogContent/dialogContent.component.ts");
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
    function LoginComponent(_userService, router, _dialog) {
        this._userService = _userService;
        this.router = router;
        this._dialog = _dialog;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.user = new __WEBPACK_IMPORTED_MODULE_1__models_user_entity__["a" /* User */]('', '', '', 'ROLE_USER');
    };
    LoginComponent.prototype.onSubmit = function (loginForm) {
        var _this = this;
        this._userService.login(this.user).subscribe(function (response) {
            if (response.user) {
                _this.identity = response.user;
                _this._userService.setIdentity(_this.identity);
                _this._userService.login(_this.user, 'true').subscribe(function (response) {
                    _this.token = response.token;
                    _this._userService.setToken(_this.token);
                    _this.router.navigate(['visualizer/home']);
                }, function (error) {
                    console.log(error);
                });
            }
            else {
                _this.user = new __WEBPACK_IMPORTED_MODULE_1__models_user_entity__["a" /* User */]('', '', '', 'ROLE_USER');
            }
        }, function (error) {
            if (error._body) {
                var body = JSON.parse(error._body);
                if (body.message) {
                    _this.openDialog(body.message);
                }
            }
            else {
                console.log(error);
            }
        });
    };
    LoginComponent.prototype.openDialog = function (message) {
        var dialogRef = this._dialog.open(__WEBPACK_IMPORTED_MODULE_5__dialogContent_dialogContent_component__["a" /* DialogContentComponent */], {
            data: { status: message, color: "red", icon: "error" },
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_api_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["f" /* MatDialog */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/models/database.entity.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Database; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Field; });
var Database = (function () {
    function Database() {
    }
    return Database;
}());

var Field = (function () {
    function Field() {
    }
    return Field;
}());



/***/ }),

/***/ "../../../../../src/app/components/models/queueDB.entity.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QueueDB; });
var QueueDB = (function () {
    function QueueDB() {
    }
    return QueueDB;
}());



/***/ }),

/***/ "../../../../../src/app/components/models/user.entity.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User(name, email, password, role, viz) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.role = role;
        this.viz = viz;
    }
    return User;
}());



/***/ }),

/***/ "../../../../../src/app/components/models/visualization.entity.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Visualization; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Opcion; });
var Visualization = (function () {
    function Visualization() {
    }
    return Visualization;
}());

var Opcion = (function () {
    function Opcion() {
    }
    return Opcion;
}());



/***/ }),

/***/ "../../../../../src/app/components/queue-db/queue-db.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/queue-db/queue-db.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-card-content>\n\n    <form class=\"example-container\" #queueDBForm=\"ngForm\" (ngSubmit)=\"onSubmit(queueDBForm)\" accept-charset=\"UTF-8\" role=\"form\">\n      <h2 class=\"example-h2\">Petición para añadir base de datos</h2>\n      <mat-form-field>\n        <input matInput class=\"form-control\" name=\"nombre\" placeholder=\"Nombre\" type=\"text\" #name=\"ngModel\" [(ngModel)]=\"queueDB.nombre\"\n          minlength=\"3\" required>\n        <mat-hint align=\"end\">\n          {{queueDB.nombre.length}} / min 3\n        </mat-hint>\n      </mat-form-field>\n      <mat-form-field>\n        <textarea matInput placeholder=\"Descripción de la base de datos\" name='descripcion' #descripcion=\"ngModel\" [(ngModel)]=\"queueDB.descripcion\"></textarea>\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput type=\"url\" placeholder=\"Url de la base de datos\" name=\"url\" #url=\"ngModel\" [(ngModel)]=\"queueDB.url\">\n        <mat-icon matSuffix>link</mat-icon>\n      </mat-form-field>\n      <button type='submit' class=\"app-button\" mat-raised-button color=\"primary\" [disabled]=\"!queueDBForm.form.valid\">Crear Petición BD</button>\n    </form>\n\n  </mat-card-content>\n</mat-card>\n"

/***/ }),

/***/ "../../../../../src/app/components/queue-db/queue-db.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QueueDbComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_queueDB_entity__ = __webpack_require__("../../../../../src/app/components/models/queueDB.entity.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dialogContent_dialogContent_component__ = __webpack_require__("../../../../../src/app/components/dialogContent/dialogContent.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_api_database_service__ = __webpack_require__("../../../../../src/app/services/api/database.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_api_user_service__ = __webpack_require__("../../../../../src/app/services/api/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var QueueDbComponent = (function () {
    function QueueDbComponent(databaseService, _userService, _dialog) {
        this.databaseService = databaseService;
        this._userService = _userService;
        this._dialog = _dialog;
    }
    QueueDbComponent.prototype.ngOnInit = function () {
        this.queueDB = new __WEBPACK_IMPORTED_MODULE_1__models_queueDB_entity__["a" /* QueueDB */]();
        this.queueDB.url = '';
        this.queueDB.descripcion = '';
        this.queueDB.nombre = '';
    };
    QueueDbComponent.prototype.onSubmit = function (queueDBdataForm) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.databaseService.createQueueDB(this.queueDB)];
                    case 1:
                        result = _a.sent();
                        result.subscribe(function (response) {
                            _this.openDialog("Petición de base de datos añadida correctamente", "green", "done");
                        }, function (error) {
                            _this.openDialog("Error al modificar los datos", "red", "error");
                            console.log(error);
                        });
                        this.queueDB.url = '';
                        this.queueDB.descripcion = '';
                        this.queueDB.nombre = '';
                        queueDBdataForm.reset({
                            nombre: this.queueDB.nombre, descripcion: this.queueDB.descripcion, url: this.queueDB.url
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    QueueDbComponent.prototype.openDialog = function (message, color, icon) {
        var dialogRef = this._dialog.open(__WEBPACK_IMPORTED_MODULE_3__dialogContent_dialogContent_component__["a" /* DialogContentComponent */], {
            data: { status: message, color: color, icon: icon },
        });
    };
    QueueDbComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-queue-db',
            template: __webpack_require__("../../../../../src/app/components/queue-db/queue-db.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/queue-db/queue-db.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_api_database_service__["a" /* DatabaseService */], __WEBPACK_IMPORTED_MODULE_5__services_api_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatDialog */]])
    ], QueueDbComponent);
    return QueueDbComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/queuedb-detail/queuedb-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "  .example-form-field {\r\n    width: 100%;\r\n  }\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/queuedb-detail/queuedb-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"database; else templateName\">\n\n  <mat-card>\n    <mat-card-content>\n\n      <form class=\"example-container\" #databaseForm=\"ngForm\" (ngSubmit)=\"onSubmit(databaseForm)\" accept-charset=\"UTF-8\" role=\"form\">\n        <h2 class=\"example-h2\">Añadir base de datos basada en una petición</h2>\n        <mat-form-field>\n          <input matInput class=\"form-control\" name=\"nombre\" placeholder=\"Nombre\" type=\"text\" #name=\"ngModel\" [(ngModel)]=\"database.nombre\"\n            minlength=\"3\" required>\n          <mat-hint align=\"end\">\n            {{database.nombre.length}} / min 3\n          </mat-hint>\n        </mat-form-field>\n        <mat-form-field>\n          <textarea matInput placeholder=\"Descripción de la base de datos\" name='descripcion' #descripcion=\"ngModel\" [(ngModel)]=\"database.descripcion\"></textarea>\n        </mat-form-field>\n        <ul style=\"list-style-type:none\">\n\n          <h2 mat-subheader>Campos\n            <button type=\"button\" mat-icon-button (click)='anadirCampo()'>\n              <mat-icon aria-label=\"Añadir campo a la base de datos\">add</mat-icon>\n            </button>\n          </h2>\n          <li *ngFor=\"let campo of database.campos; index as i\">\n\n            <h3 mat-subheader> Nombre del campo: {{campo.nombre}} Tipo: {{campo.tipo}}</h3>\n            <mat-form-field class=\"example-form-field\">\n              <input matInput class=\"form-control\" name=\"nombreCampo\" placeholder=\"Nombre del campo\" type=\"text\" #name=\"ngModel\" [(ngModel)]=\"database.campos[i].nombre\"\n                minlength=\"3\" required>\n              <mat-hint align=\"end\">\n                {{campo.nombre.length}} / min 3\n              </mat-hint>\n            </mat-form-field>\n\n            <mat-form-field class=\"example-form-field\">\n\n              <mat-select [(value)]=\"campo.tipo\" placeholder=\"Tipo de campo\" required>\n                <mat-option *ngFor=\"let tipo of tiposCampos\" [value]=\"tipo\">\n                  {{tipo}}\n                </mat-option>\n              </mat-select>\n            </mat-form-field>\n            <mat-divider></mat-divider>\n\n          </li>\n\n        </ul>\n        <button type='submit' class=\"app-button\" mat-raised-button color=\"primary\" [disabled]=\"!databaseForm.form.valid\">Crear base de datos</button>\n      </form>\n    </mat-card-content>\n  </mat-card>\n</div>\n\n\n<ng-template #templateName>\n  <mat-spinner></mat-spinner>\n</ng-template>\n"

/***/ }),

/***/ "../../../../../src/app/components/queuedb-detail/queuedb-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QueuedbDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_api_database_service__ = __webpack_require__("../../../../../src/app/services/api/database.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_database_entity__ = __webpack_require__("../../../../../src/app/components/models/database.entity.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dialogContent_dialogContent_component__ = __webpack_require__("../../../../../src/app/components/dialogContent/dialogContent.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var QueuedbDetailComponent = (function () {
    function QueuedbDetailComponent(route, router, databaseService, _dialog) {
        this.route = route;
        this.router = router;
        this.databaseService = databaseService;
        this._dialog = _dialog;
    }
    QueuedbDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.paramMap.get('id');
        this.database = new __WEBPACK_IMPORTED_MODULE_3__models_database_entity__["a" /* Database */]();
        this.database.nombre = '';
        this.database.descripcion = '';
        this.database.campos = new Array();
        this.databaseService.getQueueDatabase(id).subscribe(function (response) {
            _this.queueDB = response.json();
            _this.database.nombre = _this.queueDB.nombre;
            _this.database.descripcion = _this.queueDB.descripcion;
        });
        this.tiposCampos = this.databaseService.tiposCampos();
    };
    QueuedbDetailComponent.prototype.anadirCampo = function () {
        var field = new __WEBPACK_IMPORTED_MODULE_3__models_database_entity__["b" /* Field */]();
        field.nombre = '';
        field.tipo = '';
        this.database.campos.push(field);
    };
    QueuedbDetailComponent.prototype.onSubmit = function (databaseForm) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.databaseService.createDatabase(this.database)];
                    case 1:
                        result = _a.sent();
                        result.subscribe(function (response) { return __awaiter(_this, void 0, void 0, function () {
                            var _this = this;
                            var resultDelete;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.databaseService.deleteQueueDB(this.queueDB)];
                                    case 1:
                                        resultDelete = _a.sent();
                                        resultDelete.subscribe(function (responseDelete) {
                                            _this.openDialog("Petición de base de datos añadida correctamente", "green", "done");
                                            _this.router.navigate(['visualizer/home/adminpanel/queuedblist']);
                                        });
                                        return [2 /*return*/];
                                }
                            });
                        }); }, function (error) {
                            _this.openDialog("Error al modificar los datos", "red", "error");
                            console.log(error);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    QueuedbDetailComponent.prototype.openDialog = function (message, color, icon) {
        var dialogRef = this._dialog.open(__WEBPACK_IMPORTED_MODULE_5__dialogContent_dialogContent_component__["a" /* DialogContentComponent */], {
            data: { status: message, color: color, icon: icon },
        });
    };
    QueuedbDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-queuedb-detail',
            template: __webpack_require__("../../../../../src/app/components/queuedb-detail/queuedb-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/queuedb-detail/queuedb-detail.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_api_database_service__["a" /* DatabaseService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["f" /* MatDialog */]])
    ], QueuedbDetailComponent);
    return QueuedbDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/queuedb-list/queuedb-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "  .example-form-field {\r\n    width: 100%;\r\n  }\r\n\r\n  .mat-table {\r\n    overflow: auto;\r\n  }\r\n\r\n  mat-cell,\r\n  .mat-header-cell {\r\n    overflow: visible;\r\n  }\r\n\r\n  .centerText {\r\n    color: lightgrey;\r\n    text-align: center;\r\n    margin-top: 10%;\r\n  }\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/queuedb-list/queuedb-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"dataSource; else templateName\">\n\n\n<br>\n<mat-form-field class=\"example-form-field\">\n  <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filtro\">\n</mat-form-field>\n\n<mat-table #table [dataSource]=\"dataSource\">\n\n\n  <ng-container matColumnDef=\"nombre\">\n    <mat-header-cell *matHeaderCellDef> Nombre </mat-header-cell>\n    <mat-cell *matCellDef=\"let database\"> {{database.nombre}} </mat-cell>\n  </ng-container>\n\n  <ng-container matColumnDef=\"descripcion\">\n    <mat-header-cell *matHeaderCellDef> Descripcion </mat-header-cell>\n    <mat-cell *matCellDef=\"let database\"> {{database.descripcion}} </mat-cell>\n  </ng-container>\n\n  <!-- Checkbox Column -->\n  <ng-container matColumnDef=\"editar\">\n    <mat-header-cell *matHeaderCellDef>\n      Añadir la base de datos\n    </mat-header-cell>\n    <mat-cell *matCellDef=\"let row\">\n      <button (click)=\"editar(row)\" mat-button color=\"primary\">Añadir</button>\n    </mat-cell>\n  </ng-container>\n\n\n  <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n  <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n\n</mat-table>\n</div>\n\n<ng-template #templateName>\n  <mat-spinner></mat-spinner>\n</ng-template>\n"

/***/ }),

/***/ "../../../../../src/app/components/queuedb-list/queuedb-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QueuedbListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_cdk_collections__ = __webpack_require__("../../../cdk/esm5/collections.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_api_database_service__ = __webpack_require__("../../../../../src/app/services/api/database.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var QueuedbListComponent = (function () {
    function QueuedbListComponent(databaseService, route) {
        this.databaseService = databaseService;
        this.route = route;
        this.displayedColumns = ['nombre', 'descripcion', 'editar'];
        this.selection = new __WEBPACK_IMPORTED_MODULE_2__angular_cdk_collections__["b" /* SelectionModel */](true, []);
    }
    QueuedbListComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var databases;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.databaseService.getQueueDatabases()];
                    case 1:
                        databases = _a.sent();
                        databases.subscribe(function (response) {
                            _this.data = response.json();
                            _this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["z" /* MatTableDataSource */](_this.data);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    /** Whether the number of selected elements matches the total number of rows. */
    QueuedbListComponent.prototype.isAllSelected = function () {
        var numSelected = this.selection.selected.length;
        var numRows = this.dataSource.data.length;
        return numSelected === numRows;
    };
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    QueuedbListComponent.prototype.masterToggle = function () {
        var _this = this;
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach(function (row) { return _this.selection.select(row); });
    };
    QueuedbListComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    QueuedbListComponent.prototype.editar = function (queueDB) {
        this.route.navigate(['visualizer/home/adminpanel/queuedbdetail/' + queueDB._id]);
    };
    QueuedbListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-queuedb-list',
            template: __webpack_require__("../../../../../src/app/components/queuedb-list/queuedb-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/queuedb-list/queuedb-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_api_database_service__["a" /* DatabaseService */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]])
    ], QueuedbListComponent);
    return QueuedbListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\r\n  <span class=\"title\">Datavisualizer</span>\r\n</mat-toolbar>\r\n\r\n<mat-card>\r\n  <mat-card-content>\r\n\r\n    <form class=\"example-container\" #registerForm=\"ngForm\" (ngSubmit)=\"onSubmit(registerForm)\" accept-charset=\"UTF-8\" role=\"form\">\r\n      <h2 class=\"example-h2\">Registro de usuario</h2>\r\n      <mat-form-field>\r\n        <input matInput class=\"form-control\" name=\"name\" placeholder=\"Nombre\" type=\"text\" #name=\"ngModel\" [(ngModel)]=\"user.name\"\r\n          minlength=\"3\" required>\r\n        <mat-icon matSuffix>person</mat-icon>\r\n        <mat-hint align=\"end\">\r\n          {{user.name.length}} / min 3\r\n        </mat-hint>\r\n      </mat-form-field>\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Email\" type=\"email\" name=\"email\" #email=\"ngModel\" [(ngModel)]=\"user.email\" email required asyncEmailValidator>\r\n        <mat-icon matSuffix>mail</mat-icon>\r\n        <mat-hint *ngIf=\"email.errors?.asyncInvalid\" align=\"end\">\r\n          <span style=\"color:red\"> El email ya esta registrado </span>\r\n        </mat-hint>\r\n      </mat-form-field>\r\n      <mat-form-field>\r\n        <input matInput type=\"password\" placeholder=\"Contraseña\" name=\"password\" #password=\"ngModel\" [(ngModel)]=\"user.password\"\r\n          required validateEqual=\"confirmPass\" reverse=\"true\">\r\n        <mat-icon matSuffix>visibility</mat-icon>\r\n      </mat-form-field>\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Repita la contraseña\" name=\"confirmPass\" type=\"password\" #confirmPass=\"ngModel\" [(ngModel)]=\"confirmPassword\"\r\n          validateEqual=\"password\" reverse=\"false\" required>\r\n        <mat-icon matSuffix>visibility</mat-icon>\r\n      </mat-form-field>\r\n      <button type='submit' class=\"app-button\" mat-raised-button color=\"primary\" [disabled]=\"!registerForm.form.valid\">Registrarse</button>\r\n    </form>\r\n\r\n  </mat-card-content>\r\n<button class=\"app-button\" mat-raised-button color=\"primary\" [routerLink]=\"['/visualizer/login']\">Volver al login</button>\r\n\r\n</mat-card>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_user_entity__ = __webpack_require__("../../../../../src/app/components/models/user.entity.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_api_user_service__ = __webpack_require__("../../../../../src/app/services/api/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dialogContent_dialogContent_component__ = __webpack_require__("../../../../../src/app/components/dialogContent/dialogContent.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(_userService, _dialog) {
        this._userService = _userService;
        this._dialog = _dialog;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.user = new __WEBPACK_IMPORTED_MODULE_1__models_user_entity__["a" /* User */]('', '', '', 'ROLE_USER');
        this.confirmPassword = '';
    };
    RegisterComponent.prototype.onSubmit = function (registerForm) {
        var _this = this;
        this._userService.register(this.user).subscribe(function (response) {
            if (response.user) {
                _this.openDialog("La cuenta se ha creado correctamente", "green", "done");
                registerForm.reset();
                _this.user = new __WEBPACK_IMPORTED_MODULE_1__models_user_entity__["a" /* User */]('', '', '', 'ROLE_USER');
            }
            else {
                _this.openDialog("Error al crear la cuenta", "red", "error");
            }
        }, function (error) {
            console.log(error);
        });
    };
    RegisterComponent.prototype.openDialog = function (message, color, icon) {
        var dialogRef = this._dialog.open(__WEBPACK_IMPORTED_MODULE_4__dialogContent_dialogContent_component__["a" /* DialogContentComponent */], {
            data: { status: message, color: color, icon: icon },
        });
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/components/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/register/register.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_api_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["f" /* MatDialog */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/stepper/stepper.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "  .example-form-field {\r\n    width: 100%;\r\n  }\r\n\r\n  .mat-table {\r\n    overflow: auto;\r\n  }\r\n\r\n  mat-cell,\r\n  .mat-header-cell {\r\n    overflow: visible;\r\n  }\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/stepper/stepper.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"example-h2\">Añadir visualización</h1>\r\n<mat-vertical-stepper #stepper linear>\r\n  <mat-step>\r\n    <ng-template matStepLabel>Selecciona las bases de datos</ng-template>\r\n    <h2 class=\"example-h2\">Bases de datos</h2>\r\n    <div *ngIf=\"dataSource; else templateName\">\r\n\r\n\r\n      <mat-form-field class=\"example-form-field\">\r\n        <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filtro\">\r\n      </mat-form-field>\r\n\r\n      <mat-table #table [dataSource]=\"dataSource\">\r\n\r\n\r\n        <ng-container matColumnDef=\"nombre\">\r\n          <mat-header-cell *matHeaderCellDef> Nombre </mat-header-cell>\r\n          <mat-cell *matCellDef=\"let database\"> {{database.nombre}} </mat-cell>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"descripcion\">\r\n          <mat-header-cell *matHeaderCellDef> Descripcion </mat-header-cell>\r\n          <mat-cell *matCellDef=\"let database\"> {{database.descripcion}} </mat-cell>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"campos\">\r\n          <mat-header-cell *matHeaderCellDef> Campos </mat-header-cell>\r\n          <mat-cell *matCellDef=\"let database\">\r\n            <ul>\r\n              <li *ngFor=\"let campo of database.campos\">\r\n                {{campo.nombre}} : {{campo.tipo}}\r\n              </li>\r\n            </ul>\r\n          </mat-cell>\r\n\r\n        </ng-container>\r\n\r\n        <!-- Checkbox Column -->\r\n        <ng-container matColumnDef=\"select\">\r\n          <mat-header-cell *matHeaderCellDef>\r\n            <mat-checkbox (change)=\"$event ? masterToggle() : null\" [checked]=\"selection.hasValue() && isAllSelected()\" [indeterminate]=\"selection.hasValue() && !isAllSelected()\">\r\n            </mat-checkbox>\r\n          </mat-header-cell>\r\n          <mat-cell *matCellDef=\"let row\">\r\n            <mat-checkbox (click)=\"$event.stopPropagation()\" (change)=\"$event ? selection.toggle(row) : null\" [checked]=\"selection.isSelected(row)\">\r\n            </mat-checkbox>\r\n          </mat-cell>\r\n        </ng-container>\r\n\r\n\r\n        <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n        <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n\r\n      </mat-table>\r\n    </div>\r\n    <ng-template #templateName>\r\n      <mat-spinner></mat-spinner>\r\n    </ng-template>\r\n    <div>\r\n      <button mat-raised-button color=\"primary\" mat-button (click)=\"firstStepCheck(stepper)\">Siguiente</button>\r\n    </div>\r\n\r\n\r\n  </mat-step>\r\n  <mat-step>\r\n    <ng-template matStepLabel>Seleciona parametros de preprocesamiento</ng-template>\r\n    <h2 class=\"example-h2\">Preprocesamiento</h2>\r\n    <form [formGroup]=\"preprocesamientoForm\">\r\n      <div formArrayName=\"itemRows\">\r\n        <div *ngFor=\"let row of itemRows.controls; let i=index\" [formGroupName]=\"i\">\r\n          <h4>{{this.selection.selected[i].nombre}}</h4>\r\n          <span class=\"form-group\">\r\n            <mat-checkbox class=\"example-form-field\" formControlName=\"nulos\">Eliminar filas con valores nulos </mat-checkbox>\r\n            <div *ngIf=\"preprocesamientoForm.controls.itemRows.controls.length > 1\">\r\n              <mat-form-field class=\"example-form-field\">\r\n                <mat-select placeholder=\"Campos union entre bases de datos\" formControlName='join' multiple>\r\n                  <mat-option *ngFor=\"let field of this.selection.selected[i].campos\" value='{{field.nombre}}'>\r\n                    {{field.nombre}}\r\n                  </mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n            </div>\r\n          </span>\r\n        </div>\r\n      </div>\r\n    </form>\r\n    <div>\r\n      <button mat-raised-button color=\"warn\" (click)='backSecondStep()' mat-button matStepperPrevious>Atras</button>\r\n      <button mat-raised-button color=\"primary\" mat-button (click)=\"secondStepCheck(stepper)\">Siguiente</button>\r\n    </div>\r\n  </mat-step>\r\n  <mat-step>\r\n    <ng-template matStepLabel>Parametros de Clustering</ng-template>\r\n    <form [formGroup]=\"algoritmoForm\">\r\n      <h2 class=\"example-h2\">Parametros de Clustering</h2>\r\n      <br>\r\n      <h3 class=\"example-h2\">Algoritmo de Clustering</h3>\r\n      <br>\r\n      <mat-radio-group formControlName=\"algoritmo\">\r\n        <mat-radio-button *ngFor=\"let algoritmoCluster of algoritmosClusters\" [value]=\"algoritmoCluster\">\r\n          {{algoritmoCluster}}\r\n        </mat-radio-button>\r\n      </mat-radio-group>\r\n      <br>\r\n      <h3 class=\"example-h2\">Algoritmo testing</h3>\r\n      <mat-form-field class=\"example-form-field\">\r\n        <mat-select placeholder=\"Algoritmos para testear los clusters\" formControlName=\"algoritmosTest\" multiple>\r\n          <mat-option *ngFor=\"let algoritmoTest of algoritmosTest\" [value]=\"algoritmoTest\">{{algoritmoTest}}</mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n      <h3 class=\"example-h2\">Campos por los que agrupar/generar clusters</h3>\r\n      <div formArrayName=\"claseCluster\">\r\n        <div *ngFor=\"let row of claseCluster.controls; let i=index\" [formGroupName]=\"i\">\r\n          <h4>{{this.selection.selected[i].nombre}}</h4>\r\n          <span class=\"form-group\">\r\n            <mat-form-field class=\"example-form-field\">\r\n              <mat-select placeholder=\"Campos union entre bases de datos\" formControlName='cluster' multiple>\r\n                <mat-option *ngFor=\"let field of numberField(this.selection.selected[i].campos)\" value='{{field.nombre}}'>\r\n                  {{field.nombre}}\r\n                </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </span>\r\n        </div>\r\n      </div>\r\n      <h3 class=\"example-h2\">Nombre de la visualización</h3>\r\n      <br>\r\n      <mat-form-field appearance=\"outline\" class=\"example-form-field\">\r\n        <input matInput formControlName=\"nombre\" placeholder=\"Nombre visualización\">\r\n      </mat-form-field>\r\n      <br>\r\n      <mat-divider></mat-divider>\r\n    </form>\r\n    <br>\r\n    <mat-divider></mat-divider>\r\n\r\n\r\n    <div>\r\n      <br>\r\n      <button mat-raised-button color=\"warn\" mat-button (click)='backThirdStep' matStepperPrevious>Atras</button>\r\n      <button mat-raised-button color=\"primary\" mat-button (click)='finalizar()'>Finalizar</button>\r\n    </div>\r\n  </mat-step>\r\n</mat-vertical-stepper>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/stepper/stepper.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StepperComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_cdk_collections__ = __webpack_require__("../../../cdk/esm5/collections.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dialogContent_dialogContent_component__ = __webpack_require__("../../../../../src/app/components/dialogContent/dialogContent.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_visualization_entity__ = __webpack_require__("../../../../../src/app/components/models/visualization.entity.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_api_database_service__ = __webpack_require__("../../../../../src/app/services/api/database.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_api_viz_service__ = __webpack_require__("../../../../../src/app/services/api/viz.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};









var StepperComponent = (function () {
    function StepperComponent(databaseService, vizService, _dialog, fb, router) {
        this.databaseService = databaseService;
        this.vizService = vizService;
        this._dialog = _dialog;
        this.fb = fb;
        this.router = router;
        this.displayedColumns = ['nombre', 'descripcion', 'campos', 'select'];
        this.selection = new __WEBPACK_IMPORTED_MODULE_3__angular_cdk_collections__["b" /* SelectionModel */](true, []);
        this.visualization = new __WEBPACK_IMPORTED_MODULE_6__models_visualization_entity__["b" /* Visualization */]();
        this.createForm();
    }
    /** Whether the number of selected elements matches the total number of rows. */
    StepperComponent.prototype.isAllSelected = function () {
        var numSelected = this.selection.selected.length;
        var numRows = this.dataSource.data.length;
        return numSelected === numRows;
    };
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    StepperComponent.prototype.masterToggle = function () {
        var _this = this;
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach(function (row) { return _this.selection.select(row); });
    };
    StepperComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var databases;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.databaseService.getDatabases()];
                    case 1:
                        databases = _a.sent();
                        databases.subscribe(function (response) {
                            _this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["z" /* MatTableDataSource */](response.json());
                        });
                        this.algoritmosClusters = this.vizService.algoritmosKmeans();
                        this.algoritmosTest = this.vizService.algoritmosTest();
                        return [2 /*return*/];
                }
            });
        });
    };
    StepperComponent.prototype.createForm = function () {
        this.preprocesamientoForm = this.fb.group({
            itemRows: this.fb.array([])
        });
        this.algoritmoForm = this.fb.group({
            nombre: '',
            algoritmo: '',
            claseCluster: this.fb.array([]),
            algoritmosTest: ['']
        });
    };
    StepperComponent.prototype.initPreproRows = function (name) {
        return this.fb.group({
            database: name,
            nulos: '',
            join: ''
        });
    };
    StepperComponent.prototype.initCluserRows = function (name) {
        return this.fb.group({
            database: name,
            cluster: ''
        });
    };
    Object.defineProperty(StepperComponent.prototype, "itemRows", {
        get: function () {
            return this.preprocesamientoForm.get('itemRows');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StepperComponent.prototype, "claseCluster", {
        get: function () {
            return this.algoritmoForm.get('claseCluster');
        },
        enumerable: true,
        configurable: true
    });
    StepperComponent.prototype.setPreprocess = function (arraySelect) {
        var selectedFGs = new Array();
        for (var index = 0; index < arraySelect.length; index++) {
            selectedFGs.push(this.initPreproRows(arraySelect[index].nombre));
        }
        var selectedFormArray = this.fb.array(selectedFGs);
        this.preprocesamientoForm.setControl('itemRows', selectedFormArray);
    };
    StepperComponent.prototype.clearPreproArray = function () {
        var control = this.preprocesamientoForm.controls['itemRows'];
        control.controls.splice(0);
    };
    StepperComponent.prototype.clearClusterArray = function () {
        var control = this.preprocesamientoForm.controls['claseCluster'];
        control.controls.splice(0);
    };
    StepperComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    StepperComponent.prototype.classField = function (fields) {
        return fields.filter(function (field) { return field.tipo === 'Clase'; });
    };
    StepperComponent.prototype.numberField = function (fields) {
        return fields.filter(function (field) { return field.tipo === 'Numérico'; });
    };
    StepperComponent.prototype.firstStepCheck = function (stepper) {
        if (this.selection.selected.length > 0) {
            this.clearPreproArray();
            this.setPreprocess(this.selection.selected);
            stepper.next();
        }
        else {
            this.openDialog("No has seleccionado ninguna base de datos", "red", "error");
        }
    };
    StepperComponent.prototype.backSecondStep = function () {
        this.clearPreproArray();
    };
    StepperComponent.prototype.backThirdStep = function () {
        this.clearClusterArray();
    };
    StepperComponent.prototype.secondStepCheck = function (stepper) {
        var correctStep = true;
        //Si existe más de un elemento hay que definir elegir elegir al menos una columna por el que se hace join
        if (this.selection.selected.length > 1) {
            this.preprocesamientoForm.get('itemRows').value.forEach(function (element) {
                if (element.join.length <= 0) {
                    correctStep = false;
                }
            });
        }
        if (correctStep) {
            stepper.next();
        }
        else {
            this.openDialog("Se debe de seleccionar un campo en JOIN para todas las bases de datos", "red", "error");
        }
        var selectedFGs = new Array();
        for (var index = 0; index < this.selection.selected.length; index++) {
            selectedFGs.push(this.initCluserRows(this.selection.selected[index].nombre));
        }
        var selectedFormArray = this.fb.array(selectedFGs);
        this.algoritmoForm.setControl('claseCluster', selectedFormArray);
    };
    StepperComponent.prototype.finalizar = function () {
        var viz = new __WEBPACK_IMPORTED_MODULE_6__models_visualization_entity__["b" /* Visualization */]();
        viz.nombre = '';
        viz.url = '';
        viz.img = '';
        viz.databases = new Array();
        this.selection.selected.forEach(function (database) {
            viz.databases.push(database._id);
        });
        viz.options = new Array();
        //Parseamos a opciones el preprocesamiento
        var opcionPrepro = new __WEBPACK_IMPORTED_MODULE_6__models_visualization_entity__["a" /* Opcion */]();
        opcionPrepro.nombre = 'preprocesamiento';
        opcionPrepro.valor = JSON.stringify(this.preprocesamientoForm.value.itemRows);
        viz.options.push(opcionPrepro);
        var clustering = this.algoritmoForm.value;
        if (clustering.nombre) {
            viz.nombre = clustering.nombre;
            if (clustering.algoritmo !== '') {
                //Parseamos algoritmo
                var opcionAlgoritmo = new __WEBPACK_IMPORTED_MODULE_6__models_visualization_entity__["a" /* Opcion */]();
                opcionAlgoritmo.nombre = 'algoritmo';
                opcionAlgoritmo.valor = clustering.algoritmo;
                viz.options.push(opcionAlgoritmo);
                var correctStep_1 = true;
                clustering.claseCluster.forEach(function (element) {
                    if (element.cluster.length <= 0) {
                        correctStep_1 = false;
                    }
                });
                if (correctStep_1) {
                    //Parseo clustering
                    var opcionClusters = new __WEBPACK_IMPORTED_MODULE_6__models_visualization_entity__["a" /* Opcion */]();
                    opcionClusters.nombre = 'clusters';
                    opcionClusters.valor = JSON.stringify(clustering.claseCluster);
                    viz.options.push(opcionClusters);
                    if (clustering.algoritmosTest.length > 0) {
                        //Parseo algoritmos test
                        var opcionTest = new __WEBPACK_IMPORTED_MODULE_6__models_visualization_entity__["a" /* Opcion */]();
                        opcionTest.nombre = 'algoritmosTest';
                        opcionTest.valor = JSON.stringify(clustering.algoritmosTest);
                        viz.options.push(opcionTest);
                        var vizAdded = this.vizService.addViz(viz);
                        this.openDialog("Visualización añadida correctamente", "green", "done");
                        this.router.navigate(['visualizer/home/imagegrid']);
                    }
                    else {
                        this.openDialog("Selecciona al menos un algoritmo con el que testear los clusters", "red", "error");
                    }
                }
                else {
                    this.openDialog("Selecciona al menos un campo por el que agrupar", "red", "error");
                }
            }
            else {
                this.openDialog("Selecciona un algoritmo de procesamiento", "red", "error");
            }
        }
        else {
            this.openDialog("La visualización tiene que tener un nombre", "red", "error");
        }
    };
    StepperComponent.prototype.openDialog = function (message, color, icon) {
        var dialogRef = this._dialog.open(__WEBPACK_IMPORTED_MODULE_4__dialogContent_dialogContent_component__["a" /* DialogContentComponent */], {
            data: { status: message, color: color, icon: icon },
        });
    };
    StepperComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-stepper',
            template: __webpack_require__("../../../../../src/app/components/stepper/stepper.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/stepper/stepper.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__services_api_database_service__["a" /* DatabaseService */], __WEBPACK_IMPORTED_MODULE_8__services_api_viz_service__["a" /* VizService */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], StepperComponent);
    return StepperComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/user-data/user-data.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user-data/user-data.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-card-content>\n\n    <form class=\"example-container\" #userdataForm=\"ngForm\" (ngSubmit)=\"onSubmit(userdataForm)\" accept-charset=\"UTF-8\" role=\"form\">\n      <h2 class=\"example-h2\">Registro de usuario</h2>\n      <mat-form-field>\n        <input matInput class=\"form-control\" name=\"name\" placeholder=\"Nombre\" type=\"text\" #name=\"ngModel\" [(ngModel)]=\"user.name\"\n          minlength=\"3\" required>\n        <mat-icon matSuffix>person</mat-icon>\n        <mat-hint align=\"end\">\n          {{user.name.length}} / min 3\n        </mat-hint>\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput placeholder=\"Email\" type=\"email\" name=\"email\" #email=\"ngModel\" [(ngModel)]=\"user.email\" email required asyncEmailValidator actualEmail=true>\n        <mat-icon matSuffix>mail</mat-icon>\n        <mat-hint *ngIf=\"email.errors?.asyncInvalid\" align=\"end\">\n          <span style=\"color:red\"> El email ya esta registrado </span>\n        </mat-hint>\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput type=\"password\" placeholder=\"Contraseña\" name=\"password\" #password=\"ngModel\" [(ngModel)]=\"user.password\"\n           validateEqual=\"confirmPass\" reverse=\"true\">\n        <mat-icon matSuffix>visibility</mat-icon>\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput placeholder=\"Repita la contraseña\" name=\"confirmPass\" type=\"password\" #confirmPass=\"ngModel\" [(ngModel)]=\"confirmPassword\"\n          validateEqual=\"password\" reverse=\"false\">\n        <mat-icon matSuffix>visibility</mat-icon>\n      </mat-form-field>\n      <button type='submit' class=\"app-button\" mat-raised-button color=\"primary\" [disabled]=\"!userdataForm.form.valid\">Modificar Datos</button>\n    </form>\n\n  </mat-card-content>\n</mat-card>"

/***/ }),

/***/ "../../../../../src/app/components/user-data/user-data.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserDataComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_user_service__ = __webpack_require__("../../../../../src/app/services/api/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_user_entity__ = __webpack_require__("../../../../../src/app/components/models/user.entity.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dialogContent_dialogContent_component__ = __webpack_require__("../../../../../src/app/components/dialogContent/dialogContent.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserDataComponent = (function () {
    function UserDataComponent(_userService, _dialog) {
        this._userService = _userService;
        this._dialog = _dialog;
    }
    UserDataComponent.prototype.ngOnInit = function () {
        var identity = JSON.parse(this._userService.getIdentity());
        this.user = new __WEBPACK_IMPORTED_MODULE_2__models_user_entity__["a" /* User */](identity.name, identity.email, identity.password, identity.role);
        this.user.password = '';
        this.confirmPassword = '';
    };
    UserDataComponent.prototype.onSubmit = function (userdataForm) {
        var _this = this;
        this._userService.update(this.user).subscribe(function (response) {
            if (response.token) {
                _this._userService.setIdentity(_this.user);
                _this._userService.setToken(response.token);
                _this.openDialog("Los datos se han modificado correctamente", "green", "done");
            }
            else {
                _this.openDialog("No se han podido modificar los datos correcamente", "red", "error");
            }
        }, function (error) {
            _this.openDialog("Error al modificar los datos", "red", "error");
            console.log(error);
        });
        this.user.password = '';
        this.confirmPassword = '';
        userdataForm.reset({ name: this.user.name, email: this.user.email, password: this.user.password,
            confirmPass: this.confirmPassword });
    };
    UserDataComponent.prototype.openDialog = function (message, color, icon) {
        var dialogRef = this._dialog.open(__WEBPACK_IMPORTED_MODULE_4__dialogContent_dialogContent_component__["a" /* DialogContentComponent */], {
            data: { status: message, color: color, icon: icon },
        });
    };
    UserDataComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-user-data',
            template: __webpack_require__("../../../../../src/app/components/user-data/user-data.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/user-data/user-data.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_api_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["f" /* MatDialog */]])
    ], UserDataComponent);
    return UserDataComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/viz-view/viz-view.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/viz-view/viz-view.component.html":
/***/ (function(module, exports) {

module.exports = "<div style='height: 100%, width: 100%;'id=\"tableauViz\"></div>\n"

/***/ }),

/***/ "../../../../../src/app/components/viz-view/viz-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VizViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_viz_service__ = __webpack_require__("../../../../../src/app/services/api/viz.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VizViewComponent = (function () {
    function VizViewComponent(vizService, route) {
        this.vizService = vizService;
        this.route = route;
    }
    VizViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.paramMap.get('id');
        this.vizService.getVizById(id).subscribe(function (response) {
            _this.viz = response;
            var placeholderDiv = document.getElementById('tableauViz');
            var url = _this.viz.url;
            var options = {
                hideTabs: true,
                onFirstInteractive: function () {
                    // The viz is now ready and can be safely used.
                }
            };
            _this.tableauViz = new tableau.Viz(placeholderDiv, url, options);
            // Create a viz object and embed it in the container div.
        });
    };
    VizViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-viz-view',
            template: __webpack_require__("../../../../../src/app/components/viz-view/viz-view.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/viz-view/viz-view.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_api_viz_service__["a" /* VizService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], VizViewComponent);
    return VizViewComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/vizqueue-detail/vizqueue-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/vizqueue-detail/vizqueue-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"vizInfo; else templateName\">\n\n\n  <mat-card>\n    <mat-card-content>\n\n      <form class=\"example-container\" #vizqueueForm=\"ngForm\" (ngSubmit)=\"onSubmit(vizqueueForm)\" accept-charset=\"UTF-8\" role=\"form\">\n        <h2 class=\"example-h2\">Editar visualización url o thumbnail</h2>\n        <mat-form-field>\n          <input matInput class=\"form-control\" name=\"nombre\" placeholder=\"Nombre\" type=\"text\" #name=\"ngModel\" [(ngModel)]=\"viz.nombre\"\n            minlength=\"3\" required>\n          <mat-hint align=\"end\">\n            {{viz.nombre.length}} / min 3\n          </mat-hint>\n        </mat-form-field>\n        <mat-form-field>\n          <input matInput type=\"url\" placeholder=\"Url de inscrustación de Tableau\" name=\"url\" #url=\"ngModel\" [(ngModel)]=\"viz.url\">\n          <mat-icon matSuffix>link</mat-icon>\n        </mat-form-field>\n        <mat-form-field>\n          <input matInput type=\"url\" placeholder=\"Url del thumbnail\" name=\"img\" #img=\"ngModel\" [(ngModel)]=\"viz.img\">\n          <mat-icon matSuffix>image</mat-icon>\n        </mat-form-field>\n        <h3 class=\"example-h2\">Información de la Viz</h3>\n        <ul style=\"list-style-type:none\">\n          <li>Algoritmo: {{vizInfo.algoritmo}}</li>\n          <li>Bases de datos:\n            <ul>\n              <li *ngFor=\"let databases of viz.databases\">\n                {{databases.nombre}}\n              </li>\n            </ul>\n          </li>\n          <li> Campos Clustering\n            <ul>\n              <li *ngFor=\"let cluster of vizInfo.clusters\">\n                <pre>{{cluster.database}}: {{cluster.cluster}} </pre>\n              </li>\n            </ul>\n          </li>\n          <li>Algoritmos para testear los clusters:\n            <ul>\n              <li *ngFor=\"let test of vizInfo.algoritmosTest\">\n                {{test}}\n              </li>\n            </ul>\n          </li>\n          <li>Preprocesamiento:\n            <ul style=\"list-style-type:square\">\n              <li *ngFor=\"let preprocesamiento of vizInfo.preprocesamiento\">\n                <pre>{{preprocesamiento | json}}</pre>\n              </li>\n            </ul>\n          </li>\n        </ul>\n        <button type='submit' class=\"app-button\" mat-raised-button color=\"primary\" [disabled]=\"!vizqueueForm.form.valid\">Editar visualización</button>\n      </form>\n    </mat-card-content>\n  </mat-card>\n</div>\n\n\n<ng-template #templateName>\n  <mat-spinner></mat-spinner>\n</ng-template>\n"

/***/ }),

/***/ "../../../../../src/app/components/vizqueue-detail/vizqueue-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VizqueueDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dialogContent_dialogContent_component__ = __webpack_require__("../../../../../src/app/components/dialogContent/dialogContent.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_api_viz_service__ = __webpack_require__("../../../../../src/app/services/api/viz.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_visualization_entity__ = __webpack_require__("../../../../../src/app/components/models/visualization.entity.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var VizqueueDetailComponent = (function () {
    function VizqueueDetailComponent(route, router, vizService, _dialog) {
        this.route = route;
        this.router = router;
        this.vizService = vizService;
        this._dialog = _dialog;
    }
    VizqueueDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.paramMap.get('id');
        this.viz = new __WEBPACK_IMPORTED_MODULE_5__models_visualization_entity__["b" /* Visualization */]();
        this.viz.nombre = '';
        this.viz.url = '';
        this.viz.img = '';
        this.viz.databases = new Array();
        this.viz.options = new Array();
        this.vizInfo = new Object();
        this.vizService.getVizById(id).subscribe(function (response) {
            _this.viz = response;
            _this.viz.options.forEach(function (opcion) {
                try {
                    _this.vizInfo[opcion.nombre] = JSON.parse(opcion.valor);
                }
                catch (error) {
                    _this.vizInfo[opcion.nombre] = opcion.valor;
                }
            });
        });
    };
    VizqueueDetailComponent.prototype.onSubmit = function (vizqueueForm) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var result;
            return __generator(this, function (_a) {
                result = this.vizService.updateVizById(this.viz);
                result.subscribe(function (response) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        this.openDialog("Petición de base de datos añadida correctamente", "green", "done");
                        this.router.navigate(['visualizer/home/adminpanel/vizqueuelist']);
                        return [2 /*return*/];
                    });
                }); }, function (error) {
                    _this.openDialog("Error al modificar los datos", "red", "error");
                    console.log(error);
                });
                return [2 /*return*/];
            });
        });
    };
    VizqueueDetailComponent.prototype.openDialog = function (message, color, icon) {
        var dialogRef = this._dialog.open(__WEBPACK_IMPORTED_MODULE_3__dialogContent_dialogContent_component__["a" /* DialogContentComponent */], {
            data: { status: message, color: color, icon: icon },
        });
    };
    VizqueueDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-vizqueue-detail',
            template: __webpack_require__("../../../../../src/app/components/vizqueue-detail/vizqueue-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/vizqueue-detail/vizqueue-detail.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__services_api_viz_service__["a" /* VizService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatDialog */]])
    ], VizqueueDetailComponent);
    return VizqueueDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/vizqueue-list/vizqueue-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "  .example-form-field {\r\n    width: 100%;\r\n  }\r\n\r\n  .mat-table {\r\n    overflow: auto;\r\n  }\r\n\r\n  mat-cell,\r\n  .mat-header-cell {\r\n    overflow: visible;\r\n  }\r\n\r\n  .centerText {\r\n    color: lightgrey;\r\n    text-align: center;\r\n    margin-top: 10%;\r\n  }\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/vizqueue-list/vizqueue-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"dataSource; else templateName\">\n\n\n  <br>\n  <mat-form-field class=\"example-form-field\">\n    <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filtro\">\n  </mat-form-field>\n\n  <mat-table #table [dataSource]=\"dataSource\">\n\n\n    <ng-container matColumnDef=\"nombre\">\n      <mat-header-cell *matHeaderCellDef> Nombre </mat-header-cell>\n      <mat-cell *matCellDef=\"let viz\"> {{viz.nombre}} </mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"url\">\n      <mat-header-cell *matHeaderCellDef> Url </mat-header-cell>\n      <mat-cell *matCellDef=\"let viz\">\n        <span *ngIf=\"viz.url; else templateUrl\">\n          <mat-icon>done</mat-icon>\n        </span>\n        <ng-template #templateUrl>\n          <mat-icon>clear</mat-icon>\n        </ng-template>\n      </mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"algoritmo\">\n      <mat-header-cell *matHeaderCellDef> Algoritmo de procesamiento </mat-header-cell>\n      <mat-cell *matCellDef=\"let viz\"> {{viz.algoritmo}} </mat-cell>\n    </ng-container>\n\n\n    <ng-container matColumnDef=\"cluster\">\n      <mat-header-cell *matHeaderCellDef> Campos clustering </mat-header-cell>\n\n      <mat-cell *matCellDef=\"let viz\">\n        <ul>\n          <li *ngFor=\"let cluster of viz.clusters\">\n            <pre>{{cluster.database}}: {{cluster.cluster}} </pre>\n          </li>\n        </ul>\n      </mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"databases\">\n      <mat-header-cell *matHeaderCellDef> Bases de datos </mat-header-cell>\n      <mat-cell *matCellDef=\"let viz\">\n        <ul>\n          <li *ngFor=\"let databases of viz.databases\">\n            {{databases.nombre}}\n          </li>\n        </ul>\n      </mat-cell>\n    </ng-container>\n\n    <!-- Checkbox Column -->\n    <ng-container matColumnDef=\"editar\">\n      <mat-header-cell *matHeaderCellDef>\n        Añadir la base de datos\n      </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\">\n        <button (click)=\"editar(row)\" mat-button color=\"primary\">Editar</button>\n        <button mat-icon-button (click)='delete(row)'>\n          <mat-icon aria-label=\"Delete\">delete</mat-icon>\n        </button>\n      </mat-cell>\n    </ng-container>\n\n\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n\n  </mat-table>\n</div>\n\n<ng-template #templateName>\n  <mat-spinner></mat-spinner>\n</ng-template>\n"

/***/ }),

/***/ "../../../../../src/app/components/vizqueue-list/vizqueue-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VizqueueListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_cdk_collections__ = __webpack_require__("../../../cdk/esm5/collections.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_api_viz_service__ = __webpack_require__("../../../../../src/app/services/api/viz.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var VizqueueListComponent = (function () {
    function VizqueueListComponent(vizService, route) {
        this.vizService = vizService;
        this.route = route;
        this.displayedColumns = ['nombre', 'url', 'algoritmo', 'cluster', 'databases', 'editar'];
        this.selection = new __WEBPACK_IMPORTED_MODULE_2__angular_cdk_collections__["b" /* SelectionModel */](true, []);
    }
    VizqueueListComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var visualizations;
            return __generator(this, function (_a) {
                visualizations = this.vizService.getVisualizations();
                this.data = new Array();
                visualizations.subscribe(function (response) {
                    response.forEach(function (element) {
                        element.options.forEach(function (opcion) {
                            try {
                                element[opcion.nombre] = JSON.parse(opcion.valor);
                            }
                            catch (error) {
                                element[opcion.nombre] = opcion.valor;
                            }
                        });
                        _this.data.push(element);
                    });
                    _this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["z" /* MatTableDataSource */](_this.data);
                });
                return [2 /*return*/];
            });
        });
    };
    /** Whether the number of selected elements matches the total number of rows. */
    VizqueueListComponent.prototype.isAllSelected = function () {
        var numSelected = this.selection.selected.length;
        var numRows = this.dataSource.data.length;
        return numSelected === numRows;
    };
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    VizqueueListComponent.prototype.masterToggle = function () {
        var _this = this;
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach(function (row) { return _this.selection.select(row); });
    };
    VizqueueListComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    VizqueueListComponent.prototype.delete = function (viz) {
        return __awaiter(this, void 0, void 0, function () {
            var index, deletedViz;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        index = this.data.findIndex(function (d) { return d === viz; });
                        this.dataSource.data.splice(index, 1);
                        this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["z" /* MatTableDataSource */](this.dataSource.data);
                        return [4 /*yield*/, this.vizService.deleteViz(viz)];
                    case 1:
                        deletedViz = _a.sent();
                        deletedViz.subscribe();
                        return [2 /*return*/];
                }
            });
        });
    };
    VizqueueListComponent.prototype.editar = function (viz) {
        this.route.navigate(['visualizer/home/adminpanel/vizqueuedetail/' + viz._id]);
    };
    VizqueueListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-vizqueue-list',
            template: __webpack_require__("../../../../../src/app/components/vizqueue-list/vizqueue-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/vizqueue-list/vizqueue-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_api_viz_service__["a" /* VizService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], VizqueueListComponent);
    return VizqueueListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/api/database.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatabaseService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_db_config__ = __webpack_require__("../../../../../src/app/services/config/db.config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var DatabaseService = (function () {
    function DatabaseService(_http) {
        this._http = _http;
        this.url = __WEBPACK_IMPORTED_MODULE_3__config_db_config__["a" /* API */].url;
    }
    DatabaseService.prototype.getDatabases = function () {
        return __awaiter(this, void 0, void 0, function () {
            var headers;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
                            'Content-Type': 'application/json',
                            'Authorization': this.getToken()
                        });
                        return [4 /*yield*/, this._http.get(this.url + 'database', { headers: headers })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    DatabaseService.prototype.deleteDatabase = function (database) {
        return __awaiter(this, void 0, void 0, function () {
            var headers;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
                            'Content-Type': 'application/json',
                            'Authorization': this.getToken()
                        });
                        return [4 /*yield*/, this._http.delete(this.url + 'database/' + database._id, { headers: headers })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    DatabaseService.prototype.createDatabase = function (database) {
        return __awaiter(this, void 0, void 0, function () {
            var headers, params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
                            'Content-Type': 'application/json',
                            'Authorization': this.getToken()
                        });
                        params = JSON.stringify(database);
                        return [4 /*yield*/, this._http.post(this.url + 'database', params, { headers: headers })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    DatabaseService.prototype.getQueueDatabases = function () {
        return __awaiter(this, void 0, void 0, function () {
            var headers;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
                            'Content-Type': 'application/json',
                            'Authorization': this.getToken()
                        });
                        return [4 /*yield*/, this._http.get(this.url + 'queueDB', { headers: headers })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    DatabaseService.prototype.getQueueDatabase = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': this.getToken()
        });
        return this._http.get(this.url + 'queueDB/' + id, { headers: headers });
    };
    DatabaseService.prototype.createQueueDB = function (queueDB) {
        return __awaiter(this, void 0, void 0, function () {
            var headers, params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
                            'Content-Type': 'application/json',
                            'Authorization': this.getToken()
                        });
                        params = JSON.stringify(queueDB);
                        return [4 /*yield*/, this._http.post(this.url + 'queueDB', params, { headers: headers })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    DatabaseService.prototype.deleteQueueDB = function (queueDB) {
        return __awaiter(this, void 0, void 0, function () {
            var headers;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
                            'Content-Type': 'application/json',
                            'Authorization': this.getToken()
                        });
                        return [4 /*yield*/, this._http.delete(this.url + 'queueDB/' + queueDB._id, { headers: headers })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    DatabaseService.prototype.getToken = function () {
        return localStorage.getItem('token');
    };
    DatabaseService.prototype.tiposCampos = function () {
        return ['Numérico', 'Clase'];
    };
    DatabaseService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], DatabaseService);
    return DatabaseService;
}());



/***/ }),

/***/ "../../../../../src/app/services/api/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_db_config__ = __webpack_require__("../../../../../src/app/services/config/db.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ts_md5_dist_md5__ = __webpack_require__("../../../../ts-md5/dist/md5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ts_md5_dist_md5___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ts_md5_dist_md5__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserService = (function () {
    function UserService(_http) {
        this._http = _http;
        this.url = __WEBPACK_IMPORTED_MODULE_3__config_db_config__["a" /* API */].url;
    }
    UserService.prototype.register = function (user) {
        var hash = __WEBPACK_IMPORTED_MODULE_4_ts_md5_dist_md5__["Md5"].hashStr(user.password);
        var userNew = Object.assign(Object.create(user), user);
        userNew.password = hash;
        var params = JSON.stringify(userNew);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        return this._http.post(this.url + 'user/register', params, { headers: headers }).map(function (res) { return res.json(); });
    };
    UserService.prototype.checkEmail = function (email) {
        return this._http.get(this.url + 'user/checkemail/' + email);
    };
    UserService.prototype.login = function (user, gettoken) {
        if (gettoken === void 0) { gettoken = null; }
        if (gettoken != null) {
            user.gettoken = gettoken;
        }
        var userLogin = Object.assign(Object.create(user), user);
        userLogin.password = __WEBPACK_IMPORTED_MODULE_4_ts_md5_dist_md5__["Md5"].hashStr(userLogin.password);
        var params = JSON.stringify(userLogin);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        return this._http.post(this.url + 'user/login', params, { headers: headers }).map(function (res) { return res.json(); });
    };
    UserService.prototype.update = function (user) {
        if (!user.password) {
            delete user['password'];
        }
        else {
            var hash = __WEBPACK_IMPORTED_MODULE_4_ts_md5_dist_md5__["Md5"].hashStr(user.password);
            user = Object.assign(Object.create(user), user);
            user.password = hash;
        }
        var params = JSON.stringify(user);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': this.getToken()
        });
        return this._http.put(this.url + 'user/update-user/' + JSON.parse(this.getIdentity()).email, params, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.addVizUser = function (viz) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': this.getToken()
        });
        var identity = this.getIdentity();
        var mail = JSON.parse(localStorage.getItem('identity')).email;
        var params = JSON.stringify(viz);
        return this._http.post(this.url + 'user/viz/' + mail, params, { headers: headers }).map(function (res) { return res.json(); });
    };
    UserService.prototype.getUserViz = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': this.getToken()
        });
        var identity = this.getIdentity();
        var mail = JSON.parse(localStorage.getItem('identity')).email;
        return this._http.get(this.url + 'user/viz/' + mail, { headers: headers }).map(function (res) { return res.json(); });
    };
    UserService.prototype.setIdentity = function (user) {
        if (user) {
            localStorage.setItem('identity', JSON.stringify(user));
        }
    };
    UserService.prototype.setToken = function (token) {
        if (token) {
            localStorage.setItem('token', token);
        }
    };
    UserService.prototype.getIdentity = function () {
        return localStorage.getItem('identity');
    };
    UserService.prototype.getToken = function () {
        return localStorage.getItem('token');
    };
    UserService.prototype.isAdmin = function () {
        return (JSON.parse(localStorage.getItem('identity')).role === 'ADMIN');
    };
    UserService.prototype.logout = function () {
        localStorage.removeItem('identity');
        localStorage.removeItem('token');
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/app/services/api/viz.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VizService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_db_config__ = __webpack_require__("../../../../../src/app/services/config/db.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_service__ = __webpack_require__("../../../../../src/app/services/api/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var VizService = (function () {
    function VizService(_http, userService) {
        this._http = _http;
        this.userService = userService;
        this.url = __WEBPACK_IMPORTED_MODULE_3__config_db_config__["a" /* API */].url;
    }
    VizService.prototype.addViz = function (viz) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var headers, httpParams, equalViz;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
                            'Content-Type': 'application/json',
                            'Authorization': this.getToken()
                        });
                        httpParams = new __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpParams */];
                        viz.databases.forEach(function (database) {
                            httpParams = httpParams.append('database', database);
                        });
                        viz.options.forEach(function (opcion) {
                            httpParams = httpParams.append(opcion.nombre, opcion.valor);
                        });
                        return [4 /*yield*/, this._http.get(this.url + 'viz/opciones?' + httpParams.toString(), { headers: headers })];
                    case 1:
                        equalViz = _a.sent();
                        equalViz.subscribe(function (response) {
                            var responseBody = response.json();
                            var findViz = false;
                            if (responseBody._id) {
                                _this.userService.getUserViz().subscribe(function (vizList) {
                                    vizList.viz.forEach(function (visualization) {
                                        if (visualization._id === responseBody._id) {
                                            findViz = true;
                                        }
                                    });
                                    if (!findViz) {
                                        _this.userService.addVizUser(responseBody).subscribe();
                                    }
                                });
                            }
                            else {
                                var vizString = JSON.stringify(viz);
                                var newViz = _this._http.post(_this.url + 'viz', vizString, { headers: headers });
                                newViz.subscribe(function (responsePost) {
                                    _this.userService.addVizUser(responsePost.json()).subscribe();
                                });
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    VizService.prototype.getVisualizations = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': this.getToken()
        });
        return this._http.get(this.url + 'viz', { headers: headers }).map(function (res) { return res.json(); });
    };
    VizService.prototype.getVizById = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': this.getToken()
        });
        return this._http.get(this.url + 'viz/' + id, { headers: headers }).map(function (res) { return res.json(); });
    };
    VizService.prototype.updateVizById = function (viz) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': this.getToken()
        });
        var params = JSON.stringify(viz);
        return this._http.put(this.url + 'viz/' + viz._id, params, { headers: headers });
    };
    VizService.prototype.deleteViz = function (viz) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': this.getToken()
        });
        return this._http.delete(this.url + 'viz/' + viz._id, { headers: headers });
    };
    VizService.prototype.getToken = function () {
        return localStorage.getItem('token');
    };
    VizService.prototype.algoritmosKmeans = function () {
        return ['Kmeans', 'EM'];
    };
    VizService.prototype.algoritmosTest = function () {
        return ['Random Forest', 'Logistic Regression', 'LibSVM', 'Multilayer Perceptron'];
    };
    VizService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_5__user_service__["a" /* UserService */]])
    ], VizService);
    return VizService;
}());



/***/ }),

/***/ "../../../../../src/app/services/config/db.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return API; });
var API = {
    url: 'api/'
};


/***/ }),

/***/ "../../../../../src/app/services/guards/admin.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_user_service__ = __webpack_require__("../../../../../src/app/services/api/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminGuard = (function () {
    function AdminGuard(_router, _userService) {
        this._router = _router;
        this._userService = _userService;
    }
    AdminGuard.prototype.canActivate = function () {
        if (this._userService.isAdmin()) {
            return true;
        }
        else {
            return false;
        }
    };
    AdminGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__api_user_service__["a" /* UserService */]])
    ], AdminGuard);
    return AdminGuard;
}());



/***/ }),

/***/ "../../../../../src/app/services/guards/loggin.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogginGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_user_service__ = __webpack_require__("../../../../../src/app/services/api/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LogginGuard = (function () {
    function LogginGuard(_router, _userService) {
        this._router = _router;
        this._userService = _userService;
    }
    LogginGuard.prototype.canActivate = function () {
        if (this._userService.getIdentity() != null) {
            return true;
        }
        else {
            this._router.navigate(['/visualizer/login']);
            return false;
        }
    };
    LogginGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__api_user_service__["a" /* UserService */]])
    ], LogginGuard);
    return LogginGuard;
}());



/***/ }),

/***/ "../../../../../src/app/services/guards/protectLoggin.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProtectLogginGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_user_service__ = __webpack_require__("../../../../../src/app/services/api/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProtectLogginGuard = (function () {
    function ProtectLogginGuard(_router, _userService) {
        this._router = _router;
        this._userService = _userService;
    }
    ProtectLogginGuard.prototype.canActivate = function () {
        if (this._userService.getIdentity() != null) {
            this._router.navigate(['/visualizer/home']);
            return false;
        }
        else {
            return true;
        }
    };
    ProtectLogginGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__api_user_service__["a" /* UserService */]])
    ], ProtectLogginGuard);
    return ProtectLogginGuard;
}());



/***/ }),

/***/ "../../../../../src/app/services/validator/emailUniq.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailValidatorDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_user_service__ = __webpack_require__("../../../../../src/app/services/api/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var EmailValidatorDirective = (function () {
    function EmailValidatorDirective(_userService, actualEmail) {
        this._userService = _userService;
        this.actualEmail = actualEmail;
    }
    EmailValidatorDirective_1 = EmailValidatorDirective;
    EmailValidatorDirective.prototype.validate = function (c) {
        var _this = this;
        return new Promise(function (resolve) {
            return _this._userService.checkEmail(c.value).subscribe(function (response) {
                if (response) {
                    if (_this.actualEmail && JSON.parse(_this._userService.getIdentity()).email === c.value) {
                        resolve(null);
                    }
                    else {
                        resolve({ asyncInvalid: true });
                    }
                }
            }, function (error) {
                resolve(null);
            });
        });
    };
    EmailValidatorDirective = EmailValidatorDirective_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[asyncEmailValidator]',
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* NG_ASYNC_VALIDATORS */], useExisting: EmailValidatorDirective_1, multi: true }
            ]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* Attribute */])('actualEmail')),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__api_user_service__["a" /* UserService */], Boolean])
    ], EmailValidatorDirective);
    return EmailValidatorDirective;
    var EmailValidatorDirective_1;
}());



/***/ }),

/***/ "../../../../../src/app/services/validator/equal-validate.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EqualValidator; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var EqualValidator = (function () {
    function EqualValidator(validateEqual, reverse) {
        this.validateEqual = validateEqual;
        this.reverse = reverse;
    }
    EqualValidator_1 = EqualValidator;
    Object.defineProperty(EqualValidator.prototype, "isReverse", {
        get: function () {
            if (!this.reverse)
                return false;
            return this.reverse === 'true' ? true : false;
        },
        enumerable: true,
        configurable: true
    });
    EqualValidator.prototype.validate = function (c) {
        // self value
        var v = c.value;
        // control value
        var e = c.root.get(this.validateEqual);
        // value not equal
        if (e && v !== e.value && !this.isReverse) {
            return {
                validateEqual: false
            };
        }
        // value equal and reverse
        if (e && e.errors && v === e.value && this.isReverse) {
            delete e.errors['validateEqual'];
            if (!Object.keys(e.errors).length)
                e.setErrors(null);
        }
        // value not equal and reverse
        if (e && v !== e.value && this.isReverse) {
            e.setErrors({
                validateEqual: false
            });
        }
        return null;
    };
    EqualValidator = EqualValidator_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[validateEqual]',
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* NG_VALIDATORS */], useExisting: EqualValidator_1, multi: true }
            ]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* Attribute */])('validateEqual')),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* Attribute */])('reverse')),
        __metadata("design:paramtypes", [String, String])
    ], EqualValidator);
    return EqualValidator;
    var EqualValidator_1;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map