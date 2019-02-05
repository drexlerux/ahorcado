(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/components/app-root/app.component.css":
/*!*******************************************************!*\
  !*** ./src/app/components/app-root/app.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/app-root/app.component.html":
/*!********************************************************!*\
  !*** ./src/app/components/app-root/app.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/components/app-root/app.component.ts":
/*!******************************************************!*\
  !*** ./src/app/components/app-root/app.component.ts ***!
  \******************************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'ahorcado';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/components/app-root/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/components/app-root/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/components/app-root/app.module.ts":
/*!***************************************************!*\
  !*** ./src/app/components/app-root/app.module.ts ***!
  \***************************************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _toverux_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @toverux/ngx-sweetalert2 */ "./node_modules/@toverux/ngx-sweetalert2/esm5/toverux-ngx-sweetalert2.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/components/app-root/app.component.ts");
/* harmony import */ var _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sign-in/sign-in.component */ "./src/app/components/sign-in/sign-in.component.ts");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../router */ "./src/app/router.ts");
/* harmony import */ var _game_game_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../game/game.component */ "./src/app/components/game/game.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_6__["SignInComponent"],
                _game_game_component__WEBPACK_IMPORTED_MODULE_8__["GameComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
                _toverux_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_3__["SweetAlert2Module"].forRoot(),
                _router__WEBPACK_IMPORTED_MODULE_7__["appRouting"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/game/game.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/game/game.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/game/game.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/game/game.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <br>\n      <h1>Hola {{name}}, bienvenido al juego del ahorcado</h1>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-xs-12 col-lg-4\">\n      <div class=\"human\">\n        <div class=\"part part-0\" *ngIf=\"partsHuman[0]\">\n          <img src=\"assets/ahorcado/0.png\" alt=\"\">\n        </div>\n        <div class=\"part part-1\" *ngIf=\"partsHuman[1]\">\n            <img src=\"assets/ahorcado/1.png\" alt=\"\">\n        </div>\n        <div class=\"part part-2\" *ngIf=\"partsHuman[2]\">\n            <img src=\"assets/ahorcado/2.png\" alt=\"\">\n        </div>\n        <div class=\"part part-3\" *ngIf=\"partsHuman[3]\">\n            <img src=\"assets/ahorcado/3.png\" alt=\"\">\n        </div>\n        <div class=\"part part-4\" *ngIf=\"partsHuman[4]\">\n            <img src=\"assets/ahorcado/4.png\" alt=\"\">\n        </div>\n        <div class=\"part part-5\" *ngIf=\"partsHuman[5]\">\n            <img src=\"assets/ahorcado/5.png\" alt=\"\">\n        </div>\n        <div class=\"part part-6\" *ngIf=\"partsHuman[6]\">\n            <img src=\"assets/ahorcado/6.png\" alt=\"\">\n        </div>\n        <div class=\"part part-7\" *ngIf=\"partsHuman[7]\">\n            <img src=\"assets/ahorcado/7.png\" alt=\"\">\n        </div>\n      </div>\n    </div>\n    <div class=\"col-xs-12 col-lg-8\">\n      <div class=\"row justify-content-center\">\n        <div>\n          <div class=\"timer\">{{time}}</div>\n          <ul class=\"letters\">\n            <li *ngFor=\"let letter of wordsNoFill\">\n                <strong>{{ letter }}</strong>\n            </li>\n          </ul>\n          <br><br>\n          <form class=\"tryLetter\" [formGroup]=\"tryLetterGroup\" (ngSubmit)=\"tryLetter()\">\n              <div class=\"form-group\">\n                  <input type=\"text\" class=\"form-control\" autocomplete=\"off\" formControlName=\"letter\" id=\"iLetter\">\n              </div>\n              <button class=\"btn btn-success\" type=\"submit\">Enviar</button>\n              <button class=\"btn btn-danger\" (click)=\"resetGame()\">Reiniciar el juego</button>\n              <button class=\"btn btn-info\" (click)=\"logout()\">Salir</button>\n          </form>\n\n          <div class=\"a-letters\">\n            <span>LETRAS ERRONEAS</span>\n            <ul>\n                <li *ngFor=\"let aLetter of lettersAlreadySaid\">\n                    <strong>{{ aLetter }}</strong>\n                </li>\n            </ul>\n          </div>\n          <br>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/game/game.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/game/game.component.ts ***!
  \***************************************************/
/*! exports provided: GameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameComponent", function() { return GameComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_words__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data/words */ "./src/app/data/words.ts");
/* harmony import */ var _data_timer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data/timer */ "./src/app/data/timer.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GameComponent = /** @class */ (function () {
    function GameComponent(router) {
        this.router = router;
        this.name = '';
        this.partsHuman = [];
        this.wordsNoFill = [];
        this.lettersAlreadySaid = [];
        this.mySplitedWord = [];
        this.tryLetterGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            letter: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
        });
        this.nAttempts = 0;
        this.nOk = 0;
        this.time = '';
    }
    GameComponent.prototype.ngOnInit = function () {
        this.name = localStorage.getItem('name');
        this.setGame();
    };
    GameComponent.prototype.setGame = function () {
        var _this = this;
        this.mySplitedWord = Object(_data_words__WEBPACK_IMPORTED_MODULE_2__["splitedWord"])();
        for (var i = 0; i < 8; i++) {
            this.partsHuman.push(false);
        }
        for (var i = 0; i < this.mySplitedWord.length; i++) {
            this.wordsNoFill.push("_");
        }
        Object(_data_timer__WEBPACK_IMPORTED_MODULE_3__["timerLess"])(5, function (text) {
            _this.time = text;
        }, function () {
            if (_this.nAttempts < 8) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default()({ allowOutsideClick: false, type: 'error', title: 'Oopss', html: "\n        <h1>Se acabo el tiempo, Perdiste</h1>\n        <p>La palabra era " + _this.mySplitedWord.join("") + "</p>\n      " }).then(function (result) {
                    if (result.value) {
                        _this.resetGame();
                    }
                });
            }
        });
    };
    GameComponent.prototype.tryLetter = function () {
        var _this = this;
        var iLetter = this.tryLetterGroup.value.letter.toUpperCase();
        this.tryLetterGroup.reset();
        var existLetter = this.mySplitedWord.includes(iLetter);
        if (existLetter) {
            this.mySplitedWord.forEach(function (item, index) {
                if (item == iLetter) {
                    _this.wordsNoFill[index] = iLetter;
                    _this.nOk += 1;
                }
            });
        }
        else {
            this.partsHuman[this.nAttempts] = true;
            this.lettersAlreadySaid.push(iLetter);
            this.nAttempts += 1;
        }
        if (this.nAttempts == 8) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default()({ allowOutsideClick: false, type: 'error', title: 'Oopss', html: "\n      <h1>Ahorcado, Perdiste</h1>\n      <p>La palabra era " + this.mySplitedWord.join("") + "</p>\n    " }).then(function (result) {
                if (result.value) {
                    _this.resetGame();
                }
            });
            this.wordsNoFill = this.mySplitedWord;
        }
        if (this.nOk == this.mySplitedWord.length) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default()({ allowOutsideClick: false, type: 'success', title: 'Bien!!', html: "\n        <h1>Ganaste</h1>\n        <p>La palabra era " + this.mySplitedWord.join("") + "</p>\n      " }).then(function (result) {
                if (result.value) {
                    _this.resetGame();
                }
            });
        }
    };
    GameComponent.prototype.resetGame = function () {
        this.partsHuman = [];
        this.wordsNoFill = [];
        this.lettersAlreadySaid = [];
        this.nAttempts = 0;
        this.nOk = 0;
        Object(_data_timer__WEBPACK_IMPORTED_MODULE_3__["clearTimer"])();
        this.setGame();
    };
    GameComponent.prototype.logout = function () {
        localStorage.removeItem('name');
        localStorage.removeItem('email');
        this.router.navigate(['']);
    };
    GameComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-game',
            template: __webpack_require__(/*! ./game.component.html */ "./src/app/components/game/game.component.html"),
            styles: [__webpack_require__(/*! ./game.component.css */ "./src/app/components/game/game.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], GameComponent);
    return GameComponent;
}());



/***/ }),

/***/ "./src/app/components/sign-in/sign-in.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/sign-in/sign-in.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/sign-in/sign-in.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/sign-in/sign-in.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row justify-content-center align-items-center\">\n    <div class=\"col-xs-12 col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-header text-white bg-primary\">\n          Juego del ahorcado\n        </div>\n        <div class=\"card-body\">\n          <h4 class=\"card-title\">Dinos quien eres</h4>\n          <form  [formGroup]=\"signInForm\" (ngSubmit)=\"signIn()\">\n            <div class=\"form-group\">\n              <label for=\"name\">Nombre</label>\n              <input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Escribe tu nombre\" required formControlName=\"name\">\n            </div>\n            <div class=\"form-group\">\n              <label for=\"email\">E-Mail</label>\n              <input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"Escribe tu E-Mail\" required formControlName=\"email\">\n            </div>\n            <p *ngIf=\"incompleteData\">\n              <ngb-alert [dismissible]=\"true\" type=\"danger\">\n                Datos incompletos\n              </ngb-alert>\n            </p>\n            <button type=\"submit\" class=\"btn btn-primary\">Empezar</button>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<style>\n  .container > .row{\n    height: 100vh;\n  }\n</style>"

/***/ }),

/***/ "./src/app/components/sign-in/sign-in.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/sign-in/sign-in.component.ts ***!
  \*********************************************************/
/*! exports provided: SignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function() { return SignInComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignInComponent = /** @class */ (function () {
    function SignInComponent(router) {
        this.router = router;
        this.signInForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
        });
        this.incompleteData = false;
    }
    SignInComponent.prototype.ngOnInit = function () {
    };
    SignInComponent.prototype.signIn = function () {
        var _a = this.signInForm.value, name = _a.name, email = _a.email;
        if (name.trim().length == 0 && email.trim().length == 0) {
            this.incompleteData = true;
        }
        else {
            this.incompleteData = false;
            localStorage.setItem('name', name);
            localStorage.setItem('email', email);
            this.router.navigate(['/game']);
        }
    };
    SignInComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sign-in',
            template: __webpack_require__(/*! ./sign-in.component.html */ "./src/app/components/sign-in/sign-in.component.html"),
            styles: [__webpack_require__(/*! ./sign-in.component.css */ "./src/app/components/sign-in/sign-in.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SignInComponent);
    return SignInComponent;
}());



/***/ }),

/***/ "./src/app/data/timer.ts":
/*!*******************************!*\
  !*** ./src/app/data/timer.ts ***!
  \*******************************/
/*! exports provided: timerLess, clearTimer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timerLess", function() { return timerLess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearTimer", function() { return clearTimer; });
var inter, t;
var timerLess = function (m, callbackDisplay, callbackFinish) {
    t = (m * 60000);
    inter = setInterval(function () {
        var minutes = Math.floor(t / 60000);
        var seconds = ((t % 60000) / 1000).toFixed(0);
        var display = (minutes < 10 ? '0' + minutes : minutes) + ":" + (seconds < 10 ? '0' + seconds : seconds);
        callbackDisplay(display);
        if (t == 0) {
            clearTimer();
            callbackFinish();
        }
        t -= 1000;
    }, 1000, "JavaScript");
};
var clearTimer = function () {
    clearInterval(inter);
};


/***/ }),

/***/ "./src/app/data/words.ts":
/*!*******************************!*\
  !*** ./src/app/data/words.ts ***!
  \*******************************/
/*! exports provided: wordsCount, selectedWord, splitedWord */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wordsCount", function() { return wordsCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectedWord", function() { return selectedWord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "splitedWord", function() { return splitedWord; });
var words = [
    'CARRO',
    'DELFIN',
    'XILOFONO',
    'GALAXIA',
    'AMERICA',
    'FUTBOL',
    'CATORCE'
];
var wordsCount = words.length;
var selectedWord = function () {
    var min = 0;
    var max = wordsCount - 1;
    var random = Math.floor(Math.random() * (max - min + 1)) + min;
    return words[random];
};
var splitedWord = function () { return selectedWord().split(""); };


/***/ }),

/***/ "./src/app/router.ts":
/*!***************************!*\
  !*** ./src/app/router.ts ***!
  \***************************/
/*! exports provided: appRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRouting", function() { return appRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/sign-in/sign-in.component */ "./src/app/components/sign-in/sign-in.component.ts");
/* harmony import */ var _components_game_game_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/game/game.component */ "./src/app/components/game/game.component.ts");



var appRoutes = [
    { path: '', component: _components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_1__["SignInComponent"] },
    { path: 'game', component: _components_game_game_component__WEBPACK_IMPORTED_MODULE_2__["GameComponent"] }
    //{ path: '**', component: PageNotFoundComponent }
];
var appRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes, { enableTracing: true });


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_components_app_root_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/components/app-root/app.module */ "./src/app/components/app-root/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_components_app_root_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/carlos/www/ahorcado/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map