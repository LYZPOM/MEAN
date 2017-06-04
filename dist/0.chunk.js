webpackJsonp([0,6],{

/***/ 710:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_http_loader__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_routing_module__ = __webpack_require__(712);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_dashboard_travel_dashboard_travel_component__ = __webpack_require__(716);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_dashboard_wiki_dashboard_wiki_component__ = __webpack_require__(717);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_dashboard_events_dashboard_events_component__ = __webpack_require__(714);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_dashboard_people_dashboard_people_component__ = __webpack_require__(715);
/* harmony export (immutable) */ __webpack_exports__["HttpLoaderFactory"] = HttpLoaderFactory;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









function HttpLoaderFactory(http) {
    return new __WEBPACK_IMPORTED_MODULE_3__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var DashboardModule = (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__dashboard_routing_module__["a" /* DashboardRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["a" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateLoader */],
                        useFactory: HttpLoaderFactory,
                        deps: [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]]
                    }
                })
            ],
            providers: [],
            declarations: [__WEBPACK_IMPORTED_MODULE_5__shared_dashboard_travel_dashboard_travel_component__["a" /* DashboardTravelComponent */], __WEBPACK_IMPORTED_MODULE_6__shared_dashboard_wiki_dashboard_wiki_component__["a" /* DashboardWikiComponent */], __WEBPACK_IMPORTED_MODULE_7__shared_dashboard_events_dashboard_events_component__["a" /* DashboardEventsComponent */], __WEBPACK_IMPORTED_MODULE_8__shared_dashboard_people_dashboard_people_component__["a" /* DashboardPeopleComponent */], __WEBPACK_IMPORTED_MODULE_4__dashboard_routing_module__["b" /* routedComponents */]]
        }), 
        __metadata('design:paramtypes', [])
    ], DashboardModule);
    return DashboardModule;
}());
//# sourceMappingURL=/Users/yuzhuoli/Documents/MEAN/src/dashboard.module.js.map

/***/ }),

/***/ 712:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_component__ = __webpack_require__(713);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return routedComponents; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__dashboard_component__["a" /* DashboardComponent */], data: {} }
];
var DashboardRoutingModule = (function () {
    function DashboardRoutingModule() {
    }
    DashboardRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]],
        }), 
        __metadata('design:paramtypes', [])
    ], DashboardRoutingModule);
    return DashboardRoutingModule;
}());
var routedComponents = [__WEBPACK_IMPORTED_MODULE_2__dashboard_component__["a" /* DashboardComponent */]];
//# sourceMappingURL=/Users/yuzhuoli/Documents/MEAN/src/dashboard-routing.module.js.map

/***/ }),

/***/ 713:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_common_local_storage__ = __webpack_require__(114);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = (function () {
    function DashboardComponent(translate, storage) {
        this.translate = translate;
        this.storage = storage;
        translate.addLangs(['zh-CN', 'en']);
        translate.setDefaultLang('en');
        var broswerLang = translate.getBrowserLang();
        var currentLang = broswerLang.match(/en|zh-CN/) ? broswerLang : 'en';
        console.log(" dashboard " + this.storage.getItem('lang')['lang']);
        translate.use(this.storage.getItem('lang')['lang'] ? this.storage.getItem('lang')['lang'] : currentLang);
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.langUpdated.subscribe(function (lang) {
            console.log("change dashboard " + _this.storage.getItem('lang')['lang']);
            _this.translate.use(_this.storage.getItem('lang')['lang']);
        });
    };
    DashboardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
            selector: 'expats-dashboard',
            template: __webpack_require__(722),
            styles: [__webpack_require__(720)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__core_common_local_storage__["a" /* LocalStorage */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__core_common_local_storage__["a" /* LocalStorage */]) === 'function' && _b) || Object])
    ], DashboardComponent);
    return DashboardComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/yuzhuoli/Documents/MEAN/src/dashboard.component.js.map

/***/ }),

/***/ 714:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardEventsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardEventsComponent = (function () {
    function DashboardEventsComponent() {
    }
    DashboardEventsComponent.prototype.ngOnInit = function () {
    };
    DashboardEventsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
            selector: 'expats-dashboard-events',
            template: __webpack_require__(723)
        }), 
        __metadata('design:paramtypes', [])
    ], DashboardEventsComponent);
    return DashboardEventsComponent;
}());
//# sourceMappingURL=/Users/yuzhuoli/Documents/MEAN/src/dashboard-events.component.js.map

/***/ }),

/***/ 715:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPeopleComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardPeopleComponent = (function () {
    function DashboardPeopleComponent() {
    }
    DashboardPeopleComponent.prototype.ngOnInit = function () {
    };
    DashboardPeopleComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
            selector: 'expats-dashboard-people',
            template: __webpack_require__(724)
        }), 
        __metadata('design:paramtypes', [])
    ], DashboardPeopleComponent);
    return DashboardPeopleComponent;
}());
//# sourceMappingURL=/Users/yuzhuoli/Documents/MEAN/src/dashboard-people.component.js.map

/***/ }),

/***/ 716:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardTravelComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardTravelComponent = (function () {
    function DashboardTravelComponent() {
    }
    DashboardTravelComponent.prototype.ngOnInit = function () {
    };
    DashboardTravelComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
            selector: 'expats-dashboard-travel',
            template: __webpack_require__(725)
        }), 
        __metadata('design:paramtypes', [])
    ], DashboardTravelComponent);
    return DashboardTravelComponent;
}());
//# sourceMappingURL=/Users/yuzhuoli/Documents/MEAN/src/dashboard-travel.component.js.map

/***/ }),

/***/ 717:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardWikiComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardWikiComponent = (function () {
    function DashboardWikiComponent() {
    }
    DashboardWikiComponent.prototype.ngOnInit = function () {
    };
    DashboardWikiComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
            selector: 'expats-dashboard-wiki',
            template: __webpack_require__(726)
        }), 
        __metadata('design:paramtypes', [])
    ], DashboardWikiComponent);
    return DashboardWikiComponent;
}());
//# sourceMappingURL=/Users/yuzhuoli/Documents/MEAN/src/dashboard-wiki.component.js.map

/***/ }),

/***/ 720:
/***/ (function(module, exports) {

module.exports = ".mdl-cell--col-3 {\n  width: 25%;\n}\n\n@media (max-width: 839px) and (min-width: 480px){\n  .mdl-cell.mdl-cell--3-col {\n    width: 25%;\n  }\n}\n\n@media (max-width: 479px) and (min-width: 320px) {\n  .mdl-cell.mdl-cell--3-col {\n    width: 10em;\n    margin: 0.5em auto;\n  }\n}\n\n@media (max-width: 319px) {\n  .mdl-cell.mdl-cell--3-col {\n    width: 10em;\n    margin: 0.5em auto;\n  }\n}\n"

/***/ }),

/***/ 722:
/***/ (function(module, exports) {

module.exports = "<div class=\"site-content\">\n   <div class=\"container\">\n      <expats-dashboard-travel></expats-dashboard-travel>\n      <expats-dashboard-wiki></expats-dashboard-wiki>\n      <expats-dashboard-events></expats-dashboard-events>\n      <expats-dashboard-people></expats-dashboard-people>\n   </div>\n</div>\n"

/***/ }),

/***/ 723:
/***/ (function(module, exports) {

module.exports = "<section class=\"section--center mdl-grid site-max-width\">\n   <div class=\"mdl-cell mdl-card mdl-shadow--4dp portfolio-card\">\n      <div class=\"mdl-card__media\">\n         <img class=\"article-image\" src=\"./assets/img/market.jpg\" border=\"0\" alt=\"\">\n      </div>\n      <div class=\"mdl-card__title\">\n         <h2 class=\"mdl-card__title-text\">Fresh Produce Forum China</h2>\n      </div>\n      <div class=\"mdl-card__supporting-text\">\n         Fresh Produce Forum China is a 3 day event being held\n         <br/> from 23rd May to 25th May 2017 at the JW Marriott Hotel Hangzhou in Hangzhou, China. This event showcases products like fruit and vegetable,transport and Logististic,Packaging & Labeling,sourcing, distribution and marketing etc. in the Food & Beverage, Logistics & Transportation industries\n      </div>\n   </div>\n   <div class=\"mdl-cell mdl-card mdl-shadow--4dp portfolio-card\">\n      <div class=\"mdl-card__media\">\n         <img class=\"article-image\" src=\"./assets/img/hotel.jpg\" border=\"0\" alt=\"\">\n      </div>\n      <div class=\"mdl-card__title\">\n         <h2 class=\"mdl-card__title-text\">Conference SCBA International Symposium</h2>\n      </div>\n      <div class=\"mdl-card__supporting-text\">\n         The SCBA International Symposium, organized by the Zhejiang University will take place from 29th June to 3rd July 2017 at the The First World Hotel, Hangzhou in Hangzhou, China. The conference will cover areas like biotech and biopharm, genomic biology, immunity, infection and inflammation.\n      </div>\n   </div>\n   <div class=\"mdl-cell mdl-card mdl-shadow--4dp portfolio-card\">\n      <div class=\"mdl-card__media\">\n         <img class=\"article-image\" src=\"./assets/img/events.jpg\" border=\"0\" alt=\"\">\n      </div>\n      <div class=\"mdl-card__title\">\n         <h2 class=\"mdl-card__title-text\">International Forging Congress</h2>\n      </div>\n      <div class=\"mdl-card__supporting-text\">\n         The International Forging Congress, organized by the Confederation of Chinese Metalforming Industry will take place from 17th September to 22nd September 2017 at the Hangzhou Olympic and International Expo Center in Hangzhou, China. The conference will cover areas like The IFC is an important exchange platform, which not only promote the progress of technology,Please co-build the platform belonging to the forging colleagues from the world.\n      </div>\n   </div>\n</section>\n<section class=\"section--center mdl-grid site-max-width homepage-portfolio\">\n   <a class=\"mdl-button mdl-button--raised mdl-js-button mdl-js-ripple-effect mdl-button--accent\" href=\"portfolio.html\">View More</a>\n</section>\n"

/***/ }),

/***/ 724:
/***/ (function(module, exports) {

module.exports = "<div class=\"homepage-footer\">\n   <section class=\"mdl-grid site-max-width\">\n      <div class=\"mdl-cell mdl-card mdl-cell--8-col mdl-cell--4-col-tablet  mdl-shadow--4dp portfolio-card\">\n         <div class=\"mdl-card__title\">\n            <h2 class=\"mdl-card__title-text\">Testimonials</h2>\n         </div>\n         <ul class=\"demo-list-three mdl-list\">\n            <li class=\"mdl-list__item mdl-list__item--three-line\">\n               <span class=\"mdl-list__item-primary-content\">\n               <i class=\"material-icons mdl-list__item-avatar\">person</i>\n               <span>Amazing people, always ready to help!</span>\n               <span class=\"mdl-list__item-text-body\">\n               Bryan Cranston, CEO, Amazing.com\n               </span>\n               </span>\n            </li>\n            <li class=\"mdl-list__item mdl-list__item--three-line\">\n               <span class=\"mdl-list__item-primary-content\">\n               <i class=\"material-icons  mdl-list__item-avatar\">person</i>\n               <span>Awesome work, they can do almost anything..</span>\n               <span class=\"mdl-list__item-text-body\">\n               Aaron Paul, Marketing Lead, Awesome.com\n               </span>\n               </span>\n            </li>\n         </ul>\n      </div>\n      <div class=\"demo-card-event mdl-cell mdl-card mdl-shadow--4dp event-card portfolio-card\">\n         <div class=\"mdl-card__title mdl-card--expand\">\n            <h4>\n               Featured event:<br>\n               Community Meetup\n               May 24, 2018<br>\n               7-11pm\n            </h4>\n         </div>\n      </div>\n   </section>\n</div>\n"

/***/ }),

/***/ 725:
/***/ (function(module, exports) {

module.exports = "<div class=\"mdl-grid site-max-width\">\n   <div class=\"mdl-cell mdl-cell--12-col mdl-card mdl-shadow--4dp welcome-card portfolio-card\">\n      <div class=\"mdl-card__title\">\n      </div>\n      <div class=\"mdl-card__supporting-text\">\n         {{ 'WELCOME' | translate }} {{ 'CITY_NAME' | translate }} !!! <br/>\n         <br/> *** Area: 16,596 square kilometers (6,408 square miles)\n         <br/> *** Population: 6,663,100\n         <br/> *** Time Zone: GMT+8\n         <br/> *** Voltage: 220 V, 50Hz alternating current\n         <br/> *** Administrative Division: 8 districts (Xihu, Gongshu, Shangcheng, Xiacheng, Jianggan, Binjiang, Xiaoshan and Yuhang);\n         <br/>     3 cities (Jiande, Fuyang and Lin'an); 2 counties (Tonglu and Chun'an)\n      </div>\n      <div class=\"mdl-card__actions mdl-card--border\">\n         <a class=\"mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect mdl-button--accent\" href=\" https://templateflip.com/templates/material-portfolio/\" target=\"_blank\">\n         More Info >>>\n         </a>\n      </div>\n   </div>\n</div>\n"

/***/ }),

/***/ 726:
/***/ (function(module, exports) {

module.exports = "<section class=\"section--center mdl-grid site-max-width\">\n   <header class=\"section__play-btn mdl-cell mdl-cell--3-col-desktop mdl-cell--2-col-tablet mdl-cell--4-col-phone mdl-color--teal-100 mdl-color-text--white  mdl-shadow--4dp\">\n      <div anguvideo ng-model=\"youTubeURL\"></div>\n   </header>\n   <div class=\"mdl-card mdl-cell mdl-cell--9-col-desktop mdl-cell--6-col-tablet mdl-cell--4-col-phone  mdl-shadow--4dp\">\n      <div class=\"mdl-card__title\">\n         <h2 class=\"mdl-card__title-text\">Introduction</h2>\n      </div>\n      <div class=\"mdl-card__supporting-text\">\n         Hangzhou ([xǎŋʈʂóu] ( listen)), formerly romanized as Hangchow, is the capital and most populous city of Zhejiang Province in east China.[2] It sits at the head of Hangzhou Bay, which separates Shanghai and Ningbo. Hangzhou grew to prominence as the southern terminus of the Grand Canal and has been one of the most renowned and prosperous cities in China for much of the last millennium, due in part to its beautiful natural scenery. The city's West Lake is its best-known attraction.\n      </div>\n      <div class=\"mdl-card__actions  mdl-card--border\">\n         <a href=\"#\" class=\"mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect mdl-button--accent\">Watch Intro</a>\n      </div>\n   </div>\n</section>\n"

/***/ })

});
//# sourceMappingURL=0.bundle.map