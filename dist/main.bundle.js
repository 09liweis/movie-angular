webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav id=\"nav\" role=\"navigation\" aria-label=\"main navigation\">\n    <div class=\"container\">\n        <a id=\"logo\" routerLink=\"/\">Movie Paradise</a>\n        <a class=\"nav__link\" routerLink=\"/movies/now_playing\">Movies</a>\n        <a class=\"nav__link\" routerLink=\"/tvs/airing_today/page/1\">Tv Show</a>\n        <a class=\"nav__link\" routerLink=\"/people/popular\">People</a>\n        <a class=\"nav__link\" routerLink=\"/news\">News</a>\n        <div class=\"navbar-item\" *ngIf=\"sessionId != ''\"><a>{{ username }}</a></div>\n        <div class=\"navbar-item\" *ngIf=\"sessionId != ''\"><a (click)=\"logout()\">Logout</a></div>\n        <div id=\"search\">\n            <input id=\"search__input\" placeholder=\"Search Something\" type=\"text\" (keyup)=\"onKey($event)\" [(ngModel)]=\"search\" />\n            <div id=\"search__results\" *ngIf=\"results\" [@searchAnimation]=\"results.length\">\n                <a class=\"search__result\" *ngFor=\"let result of results\" (click)=\"gotoDetail(result)\">\n                    <figure class=\"search__result-poster\">\n                        <img src=\"https://image.tmdb.org/t/p/w500{{result.poster_path}}\" />\n                        <figcaption>{{result.title ? result.title : result.name}}</figcaption>\n                    </figure>\n                </a>\n            </div>\n        </div>\n    </div>\n</nav>\n\n<!--The whole content below can be removed with the new code.-->\n<!--<div class=\"row\" *ngIf=\"sessionId == ''\">-->\n<!--    <form class=\"col s12\">-->\n<!--        <div class=\"row\">-->\n<!--            <div class=\"input-field col s12\">-->\n<!--                <input id=\"username\" name=\"username\" type=\"text\" class=\"validate\" [(ngModel)]=\"username\">-->\n<!--                <label for=\"username\">Username</label>-->\n<!--            </div>-->\n<!--        </div>-->\n<!--        <div class=\"row\">-->\n<!--            <div class=\"input-field col s12\">-->\n<!--                <input id=\"password\" name=\"password\" type=\"password\" class=\"validate\" [(ngModel)]=\"password\">-->\n<!--                <label for=\"password\">Password</label>-->\n<!--            </div>-->\n<!--        </div>-->\n<!--        <a (click)=\"login()\" class=\"waves-effect waves-light btn\">Login</a>-->\n<!--    </form>-->\n<!--</div>-->\n<main id=\"mainContainer\" class=\"container fluid\">\n  <router-outlet></router-outlet>\n</main>"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = "#nav {\n  position: fixed;\n  width: 100%;\n  top: 0;\n  background-color: rgba(51, 51, 51, 0.95);\n  z-index: 11;\n  padding: 10px 0; }\n\n#logo {\n  display: inline-block;\n  color: #ffffff;\n  margin-right: 10px;\n  font-size: 1.8em; }\n\n.nav__link {\n  display: inline-block;\n  padding: 10px;\n  color: #fcb208;\n  -webkit-transition: color 0.3s;\n  transition: color 0.3s;\n  position: relative; }\n\n.nav__link:before {\n    position: absolute;\n    content: '';\n    width: 0;\n    height: 1px;\n    bottom: 0;\n    left: 0;\n    background-color: #fcb208;\n    -webkit-transition: width 0.4s ease;\n    transition: width 0.4s ease; }\n\n.nav__link:hover:before {\n    width: 100%; }\n\n#mainContainer {\n  margin-top: 125px; }\n\n#search {\n  display: inline-block;\n  position: relative;\n  width: 300px; }\n\n#search__results {\n  position: absolute;\n  top: 55px;\n  left: 0;\n  width: 100%; }\n\n.search__result {\n  display: block;\n  cursor: pointer;\n  padding: 10px;\n  -webkit-transition: all 0.2s ease;\n  transition: all 0.2s ease;\n  color: #ffffff;\n  background-color: #232b31; }\n\n.search__result:hover {\n    color: #fcb208; }\n\n.search__result-poster img {\n  display: inline-block;\n  vertical-align: middle;\n  width: 20%; }\n\n.search__result-poster figcaption {\n  display: inline-block;\n  vertical-align: middle; }\n\n#search__input {\n  width: 100%;\n  padding: 10px; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_session_service__ = __webpack_require__("./src/app/services/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_search_service__ = __webpack_require__("./src/app/services/search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");
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
    function AppComponent(sessionService, searchService, router) {
        this.sessionService = sessionService;
        this.searchService = searchService;
        this.router = router;
        this.title = 'Movies Paradise';
        this.username = 'samliweisen';
        this.password = 'kanamemadoka2017';
        this.sessionId = '';
        this.results = [];
        this.search = '';
    }
    AppComponent.prototype.login = function () {
        var _this = this;
        this.sessionService.getToken(this.username, this.password).then(function (res) { return _this.sessionId = res.session_id; });
    };
    AppComponent.prototype.logout = function () {
        this.sessionId = '';
    };
    AppComponent.prototype.onKey = function (event) {
        var _this = this;
        var search = event.target.value;
        if (search != '') {
            this.results = [];
            this.searchService.getResults(search).then(function (res) {
                _this.results = res.results;
            });
        }
    };
    AppComponent.prototype.gotoDetail = function (result) {
        this.results = [];
        this.search = '';
        if (result.media_type == 'movie') {
            this.router.navigate([result.media_type + '/' + result.id]);
        }
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["l" /* trigger */])('searchAnimation', [
                    Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["k" /* transition */])('* => *', [
                        Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["g" /* query */])(':enter', Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["j" /* style */])({ opacity: 0 }), { optional: true }),
                        Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["g" /* query */])(':enter', Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["i" /* stagger */])('100ms', [
                            Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["e" /* animate */])('0.3s ease-in', Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["f" /* keyframes */])([
                                Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["j" /* style */])({ opacity: 0, transform: 'translateX(-15%)', offset: 0 }),
                                Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["j" /* style */])({ opacity: .5, transform: 'translateX(15px)', offset: 0.3 }),
                                Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["j" /* style */])({ opacity: 1, transform: 'translateX(0)', offset: 1.0 }),
                            ]))
                        ]), { optional: true }),
                        Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["g" /* query */])(':leave', Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["i" /* stagger */])('100ms', [
                            Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["e" /* animate */])('0.3s ease-in', Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["f" /* keyframes */])([
                                Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["j" /* style */])({ opacity: 1, transform: 'translateX(0)', offset: 0 }),
                                Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["j" /* style */])({ opacity: .5, transform: 'translateX(15px)', offset: 0.3 }),
                                Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["j" /* style */])({ opacity: 0, transform: 'translateX(-15%)', offset: 1.0 }),
                            ]))
                        ]), { optional: true })
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_session_service__["a" /* SessionService */],
            __WEBPACK_IMPORTED_MODULE_3__services_search_service__["a" /* SearchService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_movies_movies_component__ = __webpack_require__("./src/app/pages/movies/movies.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_movie_movie_component__ = __webpack_require__("./src/app/pages/movie/movie.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_movie_movie_component__ = __webpack_require__("./src/app/components/movie/movie.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_movie_service__ = __webpack_require__("./src/app/services/movie.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_session_service__ = __webpack_require__("./src/app/services/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_news_service__ = __webpack_require__("./src/app/services/news.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_tv_service__ = __webpack_require__("./src/app/services/tv.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_search_service__ = __webpack_require__("./src/app/services/search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_person_person_component__ = __webpack_require__("./src/app/components/person/person.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_movie_list_movie_list_component__ = __webpack_require__("./src/app/components/movie-list/movie-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_persons_persons_component__ = __webpack_require__("./src/app/pages/persons/persons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_person_service__ = __webpack_require__("./src/app/services/person.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_news_news_component__ = __webpack_require__("./src/app/pages/news/news.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_tvs_tvs_component__ = __webpack_require__("./src/app/pages/tvs/tvs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_home_home_component__ = __webpack_require__("./src/app/pages/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_tv_tv_component__ = __webpack_require__("./src/app/pages/tv/tv.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_utils_service__ = __webpack_require__("./src/app/services/utils.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_person_list_person_list_component__ = __webpack_require__("./src/app/components/person-list/person-list.component.ts");
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__pages_movies_movies_component__["a" /* MoviesComponent */],
                __WEBPACK_IMPORTED_MODULE_8__pages_movie_movie_component__["a" /* MovieComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_movie_movie_component__["a" /* SingleMovieComponent */],
                __WEBPACK_IMPORTED_MODULE_15__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_person_person_component__["a" /* PersonComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_movie_list_movie_list_component__["a" /* MovieListComponent */],
                __WEBPACK_IMPORTED_MODULE_20__pages_news_news_component__["a" /* NewsComponent */],
                __WEBPACK_IMPORTED_MODULE_21__pages_tvs_tvs_component__["a" /* TvsComponent */],
                __WEBPACK_IMPORTED_MODULE_18__pages_persons_persons_component__["a" /* PersonsComponent */],
                __WEBPACK_IMPORTED_MODULE_22__pages_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_23__pages_tv_tv_component__["a" /* TvComponent */],
                __WEBPACK_IMPORTED_MODULE_25__components_person_list_person_list_component__["a" /* PersonListComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot([
                    {
                        path: '',
                        component: __WEBPACK_IMPORTED_MODULE_22__pages_home_home_component__["a" /* HomeComponent */]
                    },
                    {
                        path: 'login',
                        component: __WEBPACK_IMPORTED_MODULE_15__login_login_component__["a" /* LoginComponent */]
                    },
                    {
                        path: 'news',
                        component: __WEBPACK_IMPORTED_MODULE_20__pages_news_news_component__["a" /* NewsComponent */]
                    },
                    {
                        path: 'tvs/:type',
                        component: __WEBPACK_IMPORTED_MODULE_21__pages_tvs_tvs_component__["a" /* TvsComponent */]
                    },
                    {
                        path: 'tvs/:type/page/:page',
                        component: __WEBPACK_IMPORTED_MODULE_21__pages_tvs_tvs_component__["a" /* TvsComponent */]
                    },
                    {
                        path: 'tv/:id',
                        component: __WEBPACK_IMPORTED_MODULE_23__pages_tv_tv_component__["a" /* TvComponent */]
                    },
                    {
                        path: 'movies',
                        component: __WEBPACK_IMPORTED_MODULE_7__pages_movies_movies_component__["a" /* MoviesComponent */]
                    },
                    {
                        path: 'movies/:type',
                        component: __WEBPACK_IMPORTED_MODULE_7__pages_movies_movies_component__["a" /* MoviesComponent */]
                    },
                    {
                        path: 'movies/:type/page/:page',
                        component: __WEBPACK_IMPORTED_MODULE_7__pages_movies_movies_component__["a" /* MoviesComponent */]
                    },
                    {
                        path: 'movie/:id',
                        component: __WEBPACK_IMPORTED_MODULE_8__pages_movie_movie_component__["a" /* MovieComponent */]
                    },
                    {
                        path: 'movie/:id/:section',
                        component: __WEBPACK_IMPORTED_MODULE_8__pages_movie_movie_component__["a" /* MovieComponent */]
                    },
                    {
                        path: 'people/:type',
                        component: __WEBPACK_IMPORTED_MODULE_18__pages_persons_persons_component__["a" /* PersonsComponent */]
                    }
                ]),
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["d" /* Title */],
                __WEBPACK_IMPORTED_MODULE_10__services_movie_service__["a" /* MovieService */],
                __WEBPACK_IMPORTED_MODULE_19__services_person_service__["a" /* PersonService */],
                __WEBPACK_IMPORTED_MODULE_12__services_news_service__["a" /* NewsService */],
                __WEBPACK_IMPORTED_MODULE_13__services_tv_service__["a" /* TvService */],
                __WEBPACK_IMPORTED_MODULE_11__services_session_service__["a" /* SessionService */],
                __WEBPACK_IMPORTED_MODULE_14__services_search_service__["a" /* SearchService */],
                __WEBPACK_IMPORTED_MODULE_24__services_utils_service__["a" /* UtilsService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/movie-list/movie-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"columns is-mobile is-multiline\" [@moviesAnimation]=\"movies.results.length\" *ngIf=\"movies\">\n    <single-movie class=\"movie__container column is-6-mobile is-3-tablet is-2-desktop is-2-widescreen is-2-fullhd\" *ngFor=\"let movie of movies.results\" [movie]=movie [list]=list></single-movie>\n</div>\n<nav class=\"pagination is-centered\" role=\"navigation\" aria-label=\"pagination\" *ngIf=\"totalPages\">\n    <a class=\"pagination-previous\">Previous</a>\n    <a class=\"pagination-next\">Next</a>\n    <ul class=\"pagination-list\">\n        <li *ngFor=\"let page of totalPages\">\n            <a [routerLink]=\"['/',list + 's', type, 'page', (page+1)]\" class=\"pagination-link\" [class.is-current]=\"currentPage == (page+1)\"  aria-current=\"page\">{{page+1}}</a>\n        </li>\n    </ul>\n</nav>"

/***/ }),

/***/ "./src/app/components/movie-list/movie-list.component.scss":
/***/ (function(module, exports) {

module.exports = ".movie__container:nth-last-of-type(-n+2) {\n  font-size: 1.5em; }\n"

/***/ }),

/***/ "./src/app/components/movie-list/movie-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovieListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_movies__ = __webpack_require__("./src/app/models/movies.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MovieListComponent = (function () {
    function MovieListComponent() {
    }
    MovieListComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], MovieListComponent.prototype, "type", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], MovieListComponent.prototype, "list", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], MovieListComponent.prototype, "totalPages", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], MovieListComponent.prototype, "currentPage", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__models_movies__["a" /* Movies */])
    ], MovieListComponent.prototype, "movies", void 0);
    MovieListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'movie-list',
            template: __webpack_require__("./src/app/components/movie-list/movie-list.component.html"),
            styles: [__webpack_require__("./src/app/components/movie-list/movie-list.component.scss")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["l" /* trigger */])('moviesAnimation', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* transition */])('* => *', [
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* query */])(':enter', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* style */])({ opacity: 0 }), { optional: true }),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* query */])(':enter', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* stagger */])('200ms', [
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('0.5s ease-in', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* keyframes */])([
                                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* style */])({ opacity: 0, transform: 'translateY(-35%)', offset: 0 }),
                                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* style */])({ opacity: .5, transform: 'translateY(35px)', offset: 0.3 }),
                                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* style */])({ opacity: 1, transform: 'translateY(0)', offset: 1.0 }),
                            ]))
                        ]), { optional: true }),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* query */])(':leave', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* stagger */])('300ms', [
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('1s ease-in', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* keyframes */])([
                                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* style */])({ opacity: 1, transform: 'translateY(0)', offset: 0 }),
                                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* style */])({ opacity: .5, transform: 'translateY(35px)', offset: 0.3 }),
                                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* style */])({ opacity: 0, transform: 'translateY(-35%)', offset: 1.0 }),
                            ]))
                        ]), { optional: true })
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [])
    ], MovieListComponent);
    return MovieListComponent;
}());



/***/ }),

/***/ "./src/app/components/movie/movie.component.html":
/***/ (function(module, exports) {

module.exports = "<a class=\"movie\" [routerLink]=\"['/', list, movie.id]\">\n    <figure class=\"movie__poster\">\n        <img class=\"movie__image\" [src]=getMoviePoster(movie.poster_path) alt=\"{{ movie.title }}\" />\n        <figcaption class=\"movie_title\">{{movie.title ? movie.title : movie.name}}</figcaption>\n    </figure>\n    <span class=\"movie__rating\">{{movie.vote_average}}</span>\n</a>"

/***/ }),

/***/ "./src/app/components/movie/movie.component.scss":
/***/ (function(module, exports) {

module.exports = ".movie {\n  border-radius: 5px;\n  position: relative;\n  display: block;\n  -webkit-transition: all 0.4s ease;\n  transition: all 0.4s ease; }\n\n.movie__image {\n  -webkit-transform: scale(1);\n          transform: scale(1);\n  -webkit-transition: -webkit-transform 0.4s ease;\n  transition: -webkit-transform 0.4s ease;\n  transition: transform 0.4s ease;\n  transition: transform 0.4s ease, -webkit-transform 0.4s ease;\n  border-radius: 5px; }\n\n.movie__image:hover {\n    -webkit-transform: rotate3d(1, 2, 1, 15deg);\n            transform: rotate3d(1, 2, 1, 15deg); }\n\n.movie__rating {\n  border-radius: 5px;\n  padding: 5px;\n  background-color: #ffb207;\n  color: #ffffff;\n  position: absolute;\n  top: 12px;\n  left: 12px; }\n\n.movie_title {\n  color: #cac1c1;\n  font-size: 1rem; }\n"

/***/ }),

/***/ "./src/app/components/movie/movie.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SingleMovieComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_movie__ = __webpack_require__("./src/app/models/movie.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_utils_service__ = __webpack_require__("./src/app/services/utils.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SingleMovieComponent = (function () {
    function SingleMovieComponent(utilsService) {
        this.utilsService = utilsService;
    }
    SingleMovieComponent.prototype.ngOnInit = function () {
    };
    SingleMovieComponent.prototype.getMoviePoster = function (path) {
        return this.utilsService.getImagePath(path);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_movie__["a" /* Movie */])
    ], SingleMovieComponent.prototype, "movie", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], SingleMovieComponent.prototype, "list", void 0);
    SingleMovieComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'single-movie',
            template: __webpack_require__("./src/app/components/movie/movie.component.html"),
            styles: [__webpack_require__("./src/app/components/movie/movie.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_utils_service__["a" /* UtilsService */]])
    ], SingleMovieComponent);
    return SingleMovieComponent;
}());



/***/ }),

/***/ "./src/app/components/person-list/person-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"columns is-mobile is-multiline\" *ngIf=\"persons\" [@personsAnimation]=\"persons.results.length\">\n  <person class=\"column is-6-mobile is-3-tablet is-2-desktop is-2-widescreen is-2-fullhd\" *ngFor=\"let person of persons.results\" [person]=person></person>\n</div>\n"

/***/ }),

/***/ "./src/app/components/person-list/person-list.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/person-list/person-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_person_persons__ = __webpack_require__("./src/app/models/person/persons.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PersonListComponent = (function () {
    function PersonListComponent() {
    }
    PersonListComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__models_person_persons__["a" /* Persons */])
    ], PersonListComponent.prototype, "persons", void 0);
    PersonListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'person-list',
            template: __webpack_require__("./src/app/components/person-list/person-list.component.html"),
            styles: [__webpack_require__("./src/app/components/person-list/person-list.component.scss")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["l" /* trigger */])('personsAnimation', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* transition */])('* => *', [
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* query */])(':enter', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* style */])({ opacity: 0 }), { optional: true }),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* query */])(':enter', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* stagger */])('200ms', [
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('0.3s ease', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* keyframes */])([
                                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* style */])({ opacity: 0, transform: 'translateX(20%)', offset: 0 }),
                                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* style */])({ opacity: 0.5, transform: 'translateX(-20px)', offset: 0.5 }),
                                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* style */])({ opacity: 1, transform: 'translateX(0)', offset: 1 }),
                            ]))
                        ]), { optional: true })
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [])
    ], PersonListComponent);
    return PersonListComponent;
}());



/***/ }),

/***/ "./src/app/components/person/person.component.css":
/***/ (function(module, exports) {

module.exports = ".cast {\n    -webkit-transition: -webkit-transform 0.3s ease;\n    transition: -webkit-transform 0.3s ease;\n    transition: transform 0.3s ease;\n    transition: transform 0.3s ease, -webkit-transform 0.3s ease;\n}\n.cast:hover {\n    -webkit-transform: translateY(10px);\n            transform: translateY(10px);\n}\n.cast__image img {\n    border-radius: 5px;\n    display: block;\n    width: 100%;\n}\n.cast__info {\n    background-color: #ffffff;\n    padding: 10px;\n    border-bottom-left-radius: 5px;\n    border-bottom-right-radius: 5px;\n}\n.cast__name {\n    font-weight: bold;\n    display: block;\n}"

/***/ }),

/***/ "./src/app/components/person/person.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"cast\">\n    <figure class=\"cast__image\">\n        <img [src]=getCastImage(person.profile_path) alt=\"{{person.name}}\">\n        <figcaption class=\"cast__info\">\n            <span class=\"cast__name\">{{ person.name }}</span>\n            <span *ngIf=\"person.character\">{{ person.character }}</span>\n            <span *ngIf=\"person.job\">{{person.job}}</span>\n        </figcaption>\n    </figure>\n</div>\n"

/***/ }),

/***/ "./src/app/components/person/person.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_cast__ = __webpack_require__("./src/app/models/cast.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_utils_service__ = __webpack_require__("./src/app/services/utils.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PersonComponent = (function () {
    function PersonComponent(utilsService) {
        this.utilsService = utilsService;
    }
    PersonComponent.prototype.ngOnInit = function () {
    };
    PersonComponent.prototype.getCastImage = function (path) {
        return this.utilsService.getImagePath(path);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_cast__["a" /* Cast */])
    ], PersonComponent.prototype, "person", void 0);
    PersonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'person',
            template: __webpack_require__("./src/app/components/person/person.component.html"),
            styles: [__webpack_require__("./src/app/components/person/person.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_utils_service__["a" /* UtilsService */]])
    ], PersonComponent);
    return PersonComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <form class=\"col s12\">\n        <div class=\"row\">\n            <div class=\"input-field col s12\">\n                <input id=\"username\" type=\"text\" class=\"validate\">\n                <label for=\"username\">Username</label>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"input-field col s12\">\n                <input id=\"password\" type=\"password\" class=\"validate\">\n                <label for=\"password\">Password</label>\n            </div>\n        </div>\n        <a class=\"waves-effect waves-light btn\">Login</a>\n    </form>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
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
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/models/cast.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Cast; });
var Cast = (function () {
    function Cast() {
    }
    return Cast;
}());



/***/ }),

/***/ "./src/app/models/movie.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Movie; });
var Movie = (function () {
    function Movie() {
    }
    return Movie;
}());



/***/ }),

/***/ "./src/app/models/movies.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Movies; });
var Movies = (function () {
    function Movies() {
    }
    return Movies;
}());



/***/ }),

/***/ "./src/app/models/person/persons.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Persons; });
var Persons = (function () {
    function Persons() {
    }
    return Persons;
}());



/***/ }),

/***/ "./src/app/pages/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"home__movies\">\n    <h2 class=\"title\">Movies</h2>\n    <movie-list [movies]=movies [type]=type [list]=\"'movie'\" [totalPages]=totalPages [currentPage]=currentPage></movie-list>\n</section>\n\n<section class=\"home__tvs\">\n    <h2 class=\"title\">Tvs</h2>\n    <movie-list [movies]=tvs [type]=type [list]=\"'tv'\" [totalPages]=totalPages [currentPage]=currentPage></movie-list>\n</section>"

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_movie_service__ = __webpack_require__("./src/app/services/movie.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_tv_service__ = __webpack_require__("./src/app/services/tv.service.ts");
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
    function HomeComponent(movieService, tvService) {
        this.movieService = movieService;
        this.tvService = tvService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.movieService.getMovies('now_playing', 1).then(function (movies) {
            var list = movies.results.slice(0, 6);
            movies.results = list;
            _this.movies = movies;
        });
        this.tvService.getTvs('airing_today', 1).then(function (tvs) {
            var list = tvs.results.slice(0, 6);
            tvs.results = list;
            _this.tvs = tvs;
        });
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/pages/home/home.component.html"),
            styles: [__webpack_require__("./src/app/pages/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_movie_service__["a" /* MovieService */],
            __WEBPACK_IMPORTED_MODULE_2__services_tv_service__["a" /* TvService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/pages/movie/movie.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"movie__tabs tab\" *ngIf=\"movie\">\n    <a class=\"tab__link\" (click)=\"changeSection('home')\" [routerLink]=\"['/movie', movie.id]\">Home</a>\n    <a class=\"tab__link\" (click)=\"changeSection('reviews')\" [routerLink]=\"['/movie', movie.id, 'reviews']\">Reviews</a>\n    <a class=\"tab__link\" (click)=\"changeSection('videos')\" [routerLink]=\"['/movie', movie.id, 'videos']\">Videos</a>\n    <a class=\"tab__link\" (click)=\"changeSection('images')\" [routerLink]=\"['/movie', movie.id, 'images']\">Images</a>\n    <a class=\"tab__link\" (click)=\"changeSection('casts')\" [routerLink]=\"['/movie', movie.id, 'casts']\">Casts</a>\n</div>\n<div id=\"movie\" *ngIf=\"movie\">\n    <div class=\"movie__backdrop\" [style.background-image]=\"'url(https://image.tmdb.org/t/p/w1400_and_h450_bestv2/' + movie.backdrop_path + ')'\"></div>\n    <div id=\"movie__header\" *ngIf=\"section == 'home'\">\n        <div class=\"movie__info columns\">\n            <figure class=\"column is-4\">\n                <img src=\"https://image.tmdb.org/t/p/w500{{movie.poster_path}}\" />\n            </figure>\n            <div class=\"column is-8\">\n                <h1>{{movie.title}}</h1>\n                <div class=\"movie__date\">{{movie.release_date}}</div>\n                <div class=\"movie__rating\">{{movie.vote_average}}</div>\n                <p>{{movie.tagline}}</p>\n                <p>{{ movie.overview }}</p>\n                <div class=\"genres\">\n                    <span class=\"label\">Genres: </span>\n                    <span *ngFor=\"let genre of movie.genres\" class=\"genre\">{{genre.name}}</span>\n                </div>\n                <div class=\"columns\">\n                    <div class=\"column\">\n                        <div class=\"data\">\n                            <h6 class=\"label\">Status:</h6>\n                            <p>{{movie.status}}</p>\n                        </div>\n                        <div class=\"data\">\n                            <h6 class=\"label\">Release Information:</h6>\n                            <p>{{movie.release_date}}</p>\n                        </div>\n                        <div class=\"data\">\n                            <h6 class=\"label\">Original Language:</h6>\n                            <p>{{movie.original_language}}</p>\n                        </div>\n                    </div>\n                    <div class=\"column\">\n                        <div class=\"data\">\n                            <h6 class=\"label\">Runtime:</h6>\n                            <p>{{movie.runtime}}</p>\n                        </div>\n                        <div class=\"data\">\n                            <h6 class=\"label\">Revenue:</h6>\n                            <p>{{movie.revenue | currency}}</p>\n                        </div>\n                        <div class=\"data\">\n                            <h6 class=\"label\">Homepage:</h6>\n                            <p><a href=\"{{movie.homepage}}\" target=\"_blank\">{{movie.homepage}}</a></p>\n                        </div>\n                        <div class=\"data\">\n                            <h6 class=\"label\">Production Companies:</h6>\n                            <p *ngFor=\"let company of movie.production_companies\">{{company.name}}</p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!--<div class=\"\" *ngIf=\"movieVideo\">-->\n    <!--    <div id=\"videos\" *ngIf=\"movieVideo.results.length != 0\">-->\n    <!--        <iframe id=\"ytplayer\" type=\"text/html\" width=\"100%\" height=\"315\"-->\n    <!--            [src]=\"getYoutubeEmbed(movieVideo.results[0].key)\"-->\n    <!--            frameborder=\"0\">-->\n    <!--        </iframe>-->\n    <!--    </div>-->\n    <!--</div>-->\n    <div class=\"movie__home\" *ngIf=\"section == 'home'\">\n        <div id=\"casts\" *ngIf=\"movieCredits\">\n            <div class=\"columns\">\n                <h5 class=\"column\">Feature Casts</h5>\n                <a class=\"column\" [routerLink]=\"['/movie', movie.id, 'casts']\">View full casts</a>\n            </div>\n            <div class=\"columns\">\n                <person class=\"column is-6-mobile is-3-tablet is-2-desktop is-2-widescreen is-2-fullhd\" *ngFor=\"let cast of movieCredits.cast.slice(0, 6)\" [person]=cast></person>\n            </div>\n        </div>\n        <div id=\"crews\" *ngIf=\"movieCredits\">\n            <div class=\"columns\">\n                <h5 class=\"column\">Feature Crews</h5>\n                <a class=\"column\" [routerLink]=\"['/movie', movie.id, 'casts']\">View full crews</a>\n            </div>\n            <div class=\"columns\">\n                <person class=\"column is-6-mobile is-3-tablet is-2-desktop is-2-widescreen is-2-fullhd\" *ngFor=\"let cast of movieCredits.crew.slice(0, 6)\" [person]=cast></person>\n            </div>\n        </div>\n        <div id=\"similar-movies\" *ngIf=\"similarMovies\">\n            <div class=\"columns\">\n                <h5 class=\"column\">Similar Movies</h5>\n                <a class=\"column\" [routerLink]=\"['/movie', movie.id, 'similar']\">View All Similar Movies</a>\n            </div>\n            <movie-list type=\"movie\" list=\"movie\" [movies]=(similarMovies)></movie-list>\n        </div>\n    </div>\n    <div class=\"container\" *ngIf=\"section == 'reviews'\">\n        <div id=\"reviews\" *ngIf=\"movieReviews\">\n            <h3>Reviews</h3>\n            <div class=\"row card\" *ngFor=\"let review of movieReviews.results\">\n                <div class=\"col s2\">\n                    <p>{{ review.author }}</p>\n                </div>\n                <div class=\"col s10\">\n                    <p>{{ review.content }}</p>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"container\" *ngIf=\"section == 'casts'\">\n        <div class=\"columns is-multiline\" *ngIf=\"movieCredits\">\n            <person class=\"column is-6-mobile is-3-tablet is-2-desktop is-2-widescreen is-2-fullhd\" *ngFor=\"let cast of movieCredits.cast\" [person]=cast></person>\n            <person class=\"column is-6-mobile is-3-tablet is-2-desktop is-2-widescreen is-2-fullhd\" *ngFor=\"let cast of movieCredits.crew\" [person]=cast></person>\n        </div>\n    </div>\n    <div class=\"container\" *ngIf=\"section == 'images'\">\n        <div id=\"images\" *ngIf=\"movieImages\">\n            <div class=\"columns is-mobile is-multiline\">\n                <div class=\"column is-6-mobile is-3-tablet is-2-desktop is-2-widescreen is-2-fullhd\" *ngFor=\"let poster of movieImages.posters; let i = index\">\n                    <img src=\"https://image.tmdb.org/t/p/w500{{poster.file_path}}\" (click)=\"previewImage(poster, i)\" />\n                </div>\n            </div>\n            <div class=\"columns is-mobile is-multiline\">\n                <div class=\"column is-6-mobile is-3-tablet is-2-desktop is-2-widescreen is-2-fullhd\" *ngFor=\"let backdrop of movieImages.backdrops\">\n                    <img src=\"https://image.tmdb.org/t/p/w500{{backdrop.file_path}}\" />\n                </div>\n            </div>\n        </div>\n        <section *ngIf=\"modalOpen\" class=\"movie__imagesModal {{modalOpen ? 'open' : ''}}\" (click)=\"closeModal()\">\n            <img class=\"movie__currentImage\" src=\"https://image.tmdb.org/t/p/w500{{movieImages.posters[currentImage].file_path}}\" />\n        </section>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/movie/movie.component.scss":
/***/ (function(module, exports) {

module.exports = "#movie {\n  position: relative; }\n\n.movie__backdrop {\n  background-attachment: fixed;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: 50% 50%;\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  -webkit-filter: blur(5px);\n  -moz-filter: blur(5px);\n  -o-filter: blur(5px);\n  -ms-filter: blur(5px);\n  filter: blur(5px); }\n\n.movie__home,\n.movie__tabs {\n  position: relative;\n  z-index: 1; }\n\n#movie__header {\n  color: #ffffff;\n  position: relative; }\n\n.movie__info {\n  padding: 5%; }\n\n.label {\n  color: #fcb208; }\n\n.genre {\n  display: inline-block;\n  background: #ffffff;\n  color: #000000;\n  padding: 5px;\n  border-radius: 5px;\n  margin: 0 5px 5px 0;\n  font-size: 11px; }\n\n.movie__imagesModal {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background-color: rgba(0, 0, 0, 0.8);\n  -webkit-transition: all 0.3 ease;\n  transition: all 0.3 ease;\n  -webkit-transform: scale(0);\n          transform: scale(0);\n  z-index: 12; }\n\n.movie__imagesModal.open {\n  -webkit-transform: scale(1);\n          transform: scale(1); }\n\n.movie__currentImage {\n  margin: auto; }\n"

/***/ }),

/***/ "./src/app/pages/movie/movie.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovieComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_movie_service__ = __webpack_require__("./src/app/services/movie.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//Import the switchMap operator to use later with the route parameters Observable.


var MovieComponent = (function () {
    function MovieComponent(movieService, route, location, titleService, sanitizier) {
        this.movieService = movieService;
        this.route = route;
        this.location = location;
        this.titleService = titleService;
        this.sanitizier = sanitizier;
        this.modalOpen = false;
        this.currentImage = 0;
    }
    MovieComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (typeof this.route.snapshot.params['section'] != 'undefined') {
            this.section = this.route.snapshot.params['section'];
        }
        else {
            this.section = 'home';
        }
        this.route.params.subscribe(function (params) {
            //scroll page to top
            window.scrollTo(0, 0);
            _this.movieService.getMovieDetail(+params['id'])
                .then(function (movie) {
                _this.movie = movie;
                _this.titleService.setTitle(movie.title);
            });
            _this.movieService.getMovieImages(+params['id'])
                .then(function (movieImages) { return _this.movieImages = movieImages; });
            _this.movieService.getMovieCredits(+params['id'])
                .then(function (movieCredits) { return _this.movieCredits = movieCredits; });
            _this.movieService.getMovieVideos(+params['id'])
                .then(function (movieVideo) { return _this.movieVideo = movieVideo; });
            _this.movieService.getMovieReviews(+params['id'])
                .then(function (movieReviews) {
                _this.movieReviews = movieReviews;
            });
            _this.movieService.getSimilarMovies(+params['id'])
                .then(function (similarMovies) {
                _this.similarMovies = similarMovies;
            });
        });
    };
    MovieComponent.prototype.changeSection = function (section) {
        this.section = section;
    };
    MovieComponent.prototype.getYoutubeEmbed = function (key) {
        return this.sanitizier.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + key + '?autoplay=0');
    };
    MovieComponent.prototype.previewImage = function (image, index) {
        console.log(index);
        this.currentImage = index;
        this.modalOpen = true;
    };
    MovieComponent.prototype.closeModal = function () {
        this.modalOpen = false;
    };
    MovieComponent.prototype.handleKeyboardEvent = function (event) {
        if (event.key == 'ArrowRight') {
            if (this.currentImage == this.movieImages.posters.length - 1) {
                this.currentImage = 0;
            }
            else {
                this.currentImage += 1;
            }
        }
        if (event.key == 'ArrowLeft') {
            if (this.currentImage == 0) {
                this.currentImage = this.movieImages.posters.length - 1;
            }
            else {
                this.currentImage -= 1;
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('document:keyup', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], MovieComponent.prototype, "handleKeyboardEvent", null);
    MovieComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'movie',
            template: __webpack_require__("./src/app/pages/movie/movie.component.html"),
            styles: [__webpack_require__("./src/app/pages/movie/movie.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__services_movie_service__["a" /* MovieService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["d" /* Title */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */]])
    ], MovieComponent);
    return MovieComponent;
}());



/***/ }),

/***/ "./src/app/pages/movies/movies.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/movies/movies.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"tab\">\n    <a class=\"tab__link\" [class.is-active]=\"selectedLink == link\" *ngFor=\"let link of links\" (click)=\"gotoLink(link)\">{{formatTitle(link)}}</a>\n</div>\n\n<movie-list [movies]=movies [type]=type [list]=list [totalPages]=totalPages [currentPage]=currentPage></movie-list>\n"

/***/ }),

/***/ "./src/app/pages/movies/movies.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MoviesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_movie_service__ = __webpack_require__("./src/app/services/movie.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_utils_service__ = __webpack_require__("./src/app/services/utils.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MoviesComponent = (function () {
    function MoviesComponent(titleService, movieService, route, router, utilsService) {
        this.titleService = titleService;
        this.movieService = movieService;
        this.route = route;
        this.router = router;
        this.utilsService = utilsService;
    }
    MoviesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.list = 'movie';
        this.links = [
            'now_playing',
            'popular',
            'top_rated',
            'upcoming'
        ];
        this.route.params
            .switchMap(function (params) { return _this.movieService.getMovies(params['type'], params['page']); })
            .subscribe(function (movies) {
            _this.type = _this.route.snapshot.params['type'];
            _this.selectedLink = _this.route.snapshot.params['type'];
            _this.movies = movies;
            _this.currentPage = movies.page;
            _this.totalPages = Array(movies.total_pages).fill(1).map(function (x, i) { return i; });
            // set Page title
            var title = _this.utilsService.formatTitle(_this.route.snapshot.params['type']);
            _this.titleService.setTitle('Movies - ' + title);
        });
    };
    MoviesComponent.prototype.gotoLink = function (link) {
        this.selectedLink = link;
        this.movies.results = [];
        this.router.navigate(['movies/' + link]);
    };
    MoviesComponent.prototype.onSelect = function (movie) {
        this.selectedMovie = movie;
    };
    MoviesComponent.prototype.formatTitle = function (title) {
        return this.utilsService.formatTitle(title);
    };
    MoviesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'movies',
            template: __webpack_require__("./src/app/pages/movies/movies.component.html"),
            styles: [__webpack_require__("./src/app/pages/movies/movies.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["d" /* Title */],
            __WEBPACK_IMPORTED_MODULE_3__services_movie_service__["a" /* MovieService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__services_utils_service__["a" /* UtilsService */]])
    ], MoviesComponent);
    return MoviesComponent;
}());



/***/ }),

/***/ "./src/app/pages/news/news.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"columns is-multiline\" *ngIf=\"news\" [@newsAnimation]=\"news.length\">\n    <a class=\"column is-12-mobile is-4-tablet is-3-desktop is-3-widescreen is-3-fullhd\" *ngFor=\"let item of news\" href=\"{{item.link}}\" target=\"_blank\">\n        <div class=\"news\">\n            <figure class=\"news__image\">\n                <img class=\"news__toc\" src=\"{{item.featured_image.source}}\" alt=\"{{item.title}}\">\n            </figure>\n            <figcaption class=\"news__content\">\n                <p [innerHTML]=item.title></p>\n            </figcaption>\n        </div>\n    </a>\n</div>"

/***/ }),

/***/ "./src/app/pages/news/news.component.scss":
/***/ (function(module, exports) {

module.exports = ".news {\n  color: #fcb208;\n  -webkit-transition: border 0.3s ease;\n  transition: border 0.3s ease;\n  border: 1px solid transparent; }\n  .news:hover {\n    color: #fcb208;\n    border: 1px solid #fcb208; }\n  .news:hover .news__toc {\n      -webkit-transform: scale(1.1);\n              transform: scale(1.1); }\n  .news__image {\n  overflow: hidden; }\n  .news__toc {\n  -webkit-transition: -webkit-transform 0.2s ease-in-out;\n  transition: -webkit-transform 0.2s ease-in-out;\n  transition: transform 0.2s ease-in-out;\n  transition: transform 0.2s ease-in-out, -webkit-transform 0.2s ease-in-out; }\n  .news__content {\n  padding: 20px; }\n"

/***/ }),

/***/ "./src/app/pages/news/news.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_news_service__ = __webpack_require__("./src/app/services/news.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewsComponent = (function () {
    function NewsComponent(newsService, titleService) {
        this.newsService = newsService;
        this.titleService = titleService;
    }
    NewsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.newsService.getNewsFromRottentomatoes()
            .then(function (news) {
            _this.news = news;
            _this.titleService.setTitle('Movie Paradise - News');
        });
    };
    NewsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'news',
            template: __webpack_require__("./src/app/pages/news/news.component.html"),
            styles: [__webpack_require__("./src/app/pages/news/news.component.scss")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["l" /* trigger */])('newsAnimation', [
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["k" /* transition */])('* => *', [
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["g" /* query */])(':enter', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* style */])({ opacity: 0 }), { optional: true }),
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["g" /* query */])(':enter', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* stagger */])('200ms', [
                            Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])('0.3s ease', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["f" /* keyframes */])([
                                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* style */])({ opacity: 0, transform: 'translateX(-20%)', offset: 0 }),
                                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* style */])({ opacity: 0.5, transform: 'translateX(20px)', offset: 0.5 }),
                                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* style */])({ opacity: 1, transform: 'translateX(0)', offset: 1 }),
                            ]))
                        ]), { optional: true })
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_news_service__["a" /* NewsService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["d" /* Title */]])
    ], NewsComponent);
    return NewsComponent;
}());



/***/ }),

/***/ "./src/app/pages/persons/persons.component.html":
/***/ (function(module, exports) {

module.exports = "<person-list [persons]=persons></person-list>"

/***/ }),

/***/ "./src/app/pages/persons/persons.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/persons/persons.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_person_service__ = __webpack_require__("./src/app/services/person.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PersonsComponent = (function () {
    function PersonsComponent(titleService, personService, route) {
        this.titleService = titleService;
        this.personService = personService;
        this.route = route;
    }
    PersonsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.links = [
            'popular'
        ];
        this.selectedLink = 'popular';
        this.route.params
            .switchMap(function (params) { return _this.personService.getPopular(params['type']); })
            .subscribe(function (persons) {
            _this.persons = persons;
        });
    };
    PersonsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'app-persons',
            template: __webpack_require__("./src/app/pages/persons/persons.component.html"),
            styles: [__webpack_require__("./src/app/pages/persons/persons.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["d" /* Title */],
            __WEBPACK_IMPORTED_MODULE_3__services_person_service__["a" /* PersonService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], PersonsComponent);
    return PersonsComponent;
}());



/***/ }),

/***/ "./src/app/pages/tv/tv.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/tv/tv.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  tv works!\n</p>\n"

/***/ }),

/***/ "./src/app/pages/tv/tv.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TvComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TvComponent = (function () {
    function TvComponent() {
    }
    TvComponent.prototype.ngOnInit = function () {
    };
    TvComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'tv',
            template: __webpack_require__("./src/app/pages/tv/tv.component.html"),
            styles: [__webpack_require__("./src/app/pages/tv/tv.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TvComponent);
    return TvComponent;
}());



/***/ }),

/***/ "./src/app/pages/tvs/tvs.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/tvs/tvs.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"tab\">\n    <a class=\"tab__link\" [class.is-active]=\"selectedLink == link\" *ngFor=\"let link of links\" [routerLink]=\"['/tvs', link]\" (click)=\"gotoLink(link)\">{{formatTitle(link)}}</a>\n</div>\n\n<movie-list [movies]=tvs [type]=type [list]=list [totalPages]=totalPages [currentPage]=currentPage></movie-list>"

/***/ }),

/***/ "./src/app/pages/tvs/tvs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TvsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_tv_service__ = __webpack_require__("./src/app/services/tv.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_utils_service__ = __webpack_require__("./src/app/services/utils.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TvsComponent = (function () {
    function TvsComponent(titleService, tvService, route, router, utilsService) {
        this.titleService = titleService;
        this.tvService = tvService;
        this.route = route;
        this.router = router;
        this.utilsService = utilsService;
    }
    TvsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.list = 'tv';
        this.links = [
            'airing_today',
            'on_the_air',
            'popular',
            'top_rated'
        ];
        this.selectedLink = 'airing_today';
        this.route.params
            .switchMap(function (params) { return _this.tvService.getTvs(params['type'], params['page']); })
            .subscribe(function (tvs) {
            _this.type = _this.route.snapshot.params['type'];
            _this.selectedLink = _this.route.snapshot.params['type'];
            _this.tvs = tvs;
            _this.currentPage = tvs.page;
            _this.totalPages = Array(tvs.total_pages).fill(1).map(function (x, i) { return i; });
            // set Page title
            var title = _this.utilsService.formatTitle(_this.route.snapshot.params['type']);
            _this.titleService.setTitle('TVs - ' + title);
        });
    };
    TvsComponent.prototype.gotoLink = function (link) {
        this.selectedLink = link;
        this.tvs.results = [];
        this.router.navigate(['tvs/' + link]);
    };
    TvsComponent.prototype.formatTitle = function (title) {
        return this.utilsService.formatTitle(title);
    };
    TvsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'tvs',
            template: __webpack_require__("./src/app/pages/tvs/tvs.component.html"),
            styles: [__webpack_require__("./src/app/pages/tvs/tvs.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["d" /* Title */],
            __WEBPACK_IMPORTED_MODULE_3__services_tv_service__["a" /* TvService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__services_utils_service__["a" /* UtilsService */]])
    ], TvsComponent);
    return TvsComponent;
}());



/***/ }),

/***/ "./src/app/services/movie.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovieService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MovieService = (function () {
    function MovieService(http) {
        this.http = http;
        this.baseUrl = 'https://api.themoviedb.org/3/movie/';
        this.apiKey = '?api_key=8109b23cc9abaf02cf3c699ec62ccc19';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
    }
    MovieService.prototype.getMovies = function (type, page) {
        var moviesUrl = this.baseUrl + type + this.apiKey + '&page=' + page;
        var movies = this.http.get(moviesUrl)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
        return movies;
    };
    MovieService.prototype.getMovieDetail = function (id) {
        var movieDetail = this.baseUrl + id + this.apiKey;
        var movie = this.http.get(movieDetail)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
        return movie;
    };
    MovieService.prototype.getMovieImages = function (id) {
        var movieCredits = this.baseUrl + id + '/images' + this.apiKey;
        return this.http.get(movieCredits)
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    MovieService.prototype.getMovieCredits = function (id) {
        var movieCredits = this.baseUrl + id + '/credits' + this.apiKey;
        return this.http.get(movieCredits)
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    MovieService.prototype.getMovieVideos = function (id) {
        var movieVideo = this.baseUrl + id + '/videos' + this.apiKey;
        return this.http.get(movieVideo)
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    MovieService.prototype.getMovieReviews = function (id) {
        var movieReviews = this.baseUrl + id + '/reviews' + this.apiKey;
        return this.http.get(movieReviews)
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    MovieService.prototype.getSimilarMovies = function (id) {
        var similarMovies = this.baseUrl + id + '/similar' + this.apiKey;
        return this.http.get(similarMovies)
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    MovieService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    MovieService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], MovieService);
    return MovieService;
}());



/***/ }),

/***/ "./src/app/services/news.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewsService = (function () {
    function NewsService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
    }
    NewsService.prototype.getNewsFromRottentomatoes = function () {
        var url = 'https://editorial.rottentomatoes.com/wp-json/articles/';
        var news = this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
        return news;
    };
    NewsService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    NewsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], NewsService);
    return NewsService;
}());



/***/ }),

/***/ "./src/app/services/person.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PersonService = (function () {
    function PersonService(http) {
        this.http = http;
        this.baseUrl = 'https://api.themoviedb.org/3/person/';
        this.apiKey = '?api_key=8109b23cc9abaf02cf3c699ec62ccc19';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
    }
    PersonService.prototype.getPopular = function (type) {
        var personsUrl = this.baseUrl + type + this.apiKey + '&page=1';
        var persons = this.http.get(personsUrl)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
        return persons;
    };
    PersonService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    PersonService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], PersonService);
    return PersonService;
}());



/***/ }),

/***/ "./src/app/services/search.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchService = (function () {
    function SearchService(http) {
        this.http = http;
        this.baseUrl = 'https://api.themoviedb.org/3/search/multi';
        this.apiKey = '?api_key=8109b23cc9abaf02cf3c699ec62ccc19';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
    }
    SearchService.prototype.getResults = function (search) {
        var searchUrl = this.baseUrl + this.apiKey + '&query=' + search;
        var results = this.http.get(searchUrl).toPromise().then(function (res) { return res.json(); }).catch(this.handleError);
        return results;
    };
    SearchService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    SearchService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], SearchService);
    return SearchService;
}());



/***/ }),

/***/ "./src/app/services/session.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SessionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SessionService = (function () {
    function SessionService(http) {
        this.http = http;
        this.baseUrl = 'https://api.themoviedb.org/3/authentication/';
        this.apiKey = '?api_key=8109b23cc9abaf02cf3c699ec62ccc19';
    }
    SessionService.prototype.getToken = function (username, password) {
        var _this = this;
        var newTokenUrl = this.baseUrl + 'token/new' + this.apiKey;
        var newToken = this.http.get(newTokenUrl)
            .toPromise()
            .then(function (response) { return _this.validateLogin(username, password, response.json()); })
            .catch(this.handleError);
        return newToken;
    };
    SessionService.prototype.validateLogin = function (username, password, token) {
        var _this = this;
        var data = '&username=' + username + '&password=' + password + '&request_token=' + token.request_token;
        var validateUrl = this.baseUrl + 'token/validate_with_login' + this.apiKey + data;
        var validateToken = this.http.get(validateUrl)
            .toPromise()
            .then(function (response) { return _this.getSession(response.json().request_token); })
            .catch(this.handleError);
        return validateToken;
    };
    SessionService.prototype.getSession = function (request_token) {
        var sessionUrl = this.baseUrl + 'session/new' + this.apiKey + '&request_token=' + request_token;
        var session = this.http.get(sessionUrl)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
        return session;
    };
    SessionService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    SessionService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], SessionService);
    return SessionService;
}());



/***/ }),

/***/ "./src/app/services/tv.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TvService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TvService = (function () {
    function TvService(http) {
        this.http = http;
        this.baseUrl = 'https://api.themoviedb.org/3/tv/';
        this.apiKey = '?api_key=8109b23cc9abaf02cf3c699ec62ccc19';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
    }
    TvService.prototype.getTvs = function (type, page) {
        var url = this.baseUrl + type + this.apiKey + '&page=' + page;
        var tvs = this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
        return tvs;
    };
    TvService.prototype.getDetail = function (id) {
        var url = this.baseUrl + id + this.apiKey;
        var tv = this.http.get(url).toPromise().then(function (res) { return res.json(); }).catch(this.handleError);
        return tv;
    };
    TvService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    TvService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], TvService);
    return TvService;
}());



/***/ }),

/***/ "./src/app/services/utils.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtilsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UtilsService = (function () {
    function UtilsService() {
    }
    //need to find out string vs String
    UtilsService.prototype.formatTitle = function (title) {
        //formate 'now_playing' to 'Noew Playing'
        return title.split('_').map(function (word) {
            return word.charAt(0).toUpperCase() + word.slice(1);
        }).join(' ');
    };
    UtilsService.prototype.getImagePath = function (file) {
        if (file) {
            return 'https://image.tmdb.org/t/p/w500' + file;
        }
        else {
            return 'https://netbranding.co.nz/wp-content/uploads/2014/04/avatar-2.png';
        }
    };
    UtilsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], UtilsService);
    return UtilsService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map