(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [
    { path: '', loadChildren: () => __webpack_require__.e(/*! import() | views-main-view-main-view-module */ "views-main-view-main-view-module").then(__webpack_require__.bind(null, /*! ./views/main-view/main-view.module */ "./src/app/views/main-view/main-view.module.ts")).then(mod => mod.MainViewModule) },
    { path: '**', redirectTo: '' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'Portal';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _store_app_store_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./store/app-store.module */ "./src/app/store/app-store.module.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_8__);









//
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _store_app_store_module__WEBPACK_IMPORTED_MODULE_7__["AppStoreModule"]
        ],
        providers: [primeng_api__WEBPACK_IMPORTED_MODULE_8__["MessageService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/call-center/pbx-agent/services/callspoll.service.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/call-center/pbx-agent/services/callspoll.service.ts ***!
  \********************************************************************************/
/*! exports provided: CallspollService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallspollService", function() { return CallspollService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let CallspollService = class CallspollService {
    constructor(
    // private localstorage: LocalStorageService
    ) {
        this._calls = [];
        // this._loadDeadCalls();
        this.calls = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this._calls);
    }
    addCall(call, alive = true) {
        if (alive) {
            // call.registerEndCallback(this.saveCall());
        }
        this._calls.unshift(call);
        this._emit();
    }
    /*
    public saveCall() {
      return (callData) => {
        const id = callData.id;
        const key = `C_${id}`;
  
        this.localstorage.setItem(key, callData)
          .subscribe((savedCallData: any) => this._updateCallIndex(savedCallData.id));
      };
    }
  */
    /*
    private _loadDeadCalls() {
      this.localstorage
        .getItem('CALLS_INDEX')
        .map(calls => !calls ? [] : calls)
        .switchMap((callIndex: string[]) => {
          // remove everything but first 15
          callIndex.slice(15).map(id => this.localstorage.removeItem(`C_${id}`));
          const newCallIndex = callIndex.slice(0, 15);
          this.localstorage.setItem('CALLS_INDEX', newCallIndex);
          return Observable.merge(
            ...newCallIndex.map(id => this.localstorage.getItem(`C_${id}`))
          );
        }).subscribe((c) => {
          const call = new Call();
          call.hydrate(c);
          this.addCall(call, false);
        });
    }
  */
    /*
      private _updateCallIndex(id) {
        this.localstorage
          .getItem('CALLS_INDEX')
          .subscribe((callIndex: string[]) => {
            if (callIndex === null) {
              callIndex = [id];
            } else {
              callIndex.push(id);
            }
            this.localstorage.setItem('CALLS_INDEX', callIndex);
          });
    
      }
    */
    _emit() {
        this.calls.next(this._calls);
    }
    getCallById(id) {
        return this._calls.filter(c => c.id === id).shift() || false;
    }
};
CallspollService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], CallspollService);



/***/ }),

/***/ "./src/app/components/call-center/pbx-agent/services/configuration.service.ts":
/*!************************************************************************************!*\
  !*** ./src/app/components/call-center/pbx-agent/services/configuration.service.ts ***!
  \************************************************************************************/
/*! exports provided: ConfigurationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurationService", function() { return ConfigurationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var jssip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jssip */ "./node_modules/jssip/lib-es5/JsSIP.js");
/* harmony import */ var jssip__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jssip__WEBPACK_IMPORTED_MODULE_2__);



let ConfigurationService = class ConfigurationService {
    constructor() {
        this.autoconnect = false;
        this.autosave = false;
        this._stuns = [];
        this._azurekeys = [];
    }
    _generateSocket() {
        if (!this.wsuri) {
            throw new Error('host not defined');
        }
        return new jssip__WEBPACK_IMPORTED_MODULE_2__["WebSocketInterface"](this.wsuri);
    }
    getConfiguration() {
        if (!this._isValid) {
            throw new Error('configuration not loaded');
        }
        return {
            sockets: [this._generateSocket()],
            uri: this.sipuri,
            password: this.password,
            autoConnect: false,
            register: true,
            register_expires: 600,
            session_timers: true,
            connection_recovery_min_interval: 2,
            connection_recovery_max_interval: 30,
            registrar_server: '',
            no_answer_timeout: 60,
            use_preloaded_route: false,
            hack_via_tcp: false,
            hack_via_ws: false,
            hack_ip_in_contact: false
        };
    }
    get stuns() {
        return this._stuns.join('\n');
    }
    set stuns(stuns) {
        this._stuns = stuns.split('\n').filter(s => s !== '');
    }
    get azurekeys() {
        return this._azurekeys.join('\n');
    }
    set azurekeys(keys) {
        // Will return a shuffled array with the keys (use 1 each time)
        this._azurekeys = keys.split('\n')
            .filter(s => s !== '');
    }
    getRandomAzureKey() {
        return this._azurekeys.sort(() => Math.random() - 0.5)[0];
    }
    getPcConfig() {
        return { 'iceServers': [{ 'urls': this._stuns }], 'gatheringTimeout': 2000, 'rtcpMuxPolicy': 'negotiate' };
    }
    _isValid() {
        return this.wsuri != null && this.sipuri != null && this.password != null;
    }
};
ConfigurationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], ConfigurationService);



/***/ }),

/***/ "./src/app/components/call-center/pbx-agent/services/ua.service/call-options.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/components/call-center/pbx-agent/services/ua.service/call-options.ts ***!
  \**************************************************************************************/
/*! exports provided: CallOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallOptions", function() { return CallOptions; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _configuration_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../configuration.service */ "./src/app/components/call-center/pbx-agent/services/configuration.service.ts");


/**
 * TODO: refactor name.
 * SoundEngine would be better...
 */
class CallOptions {
    constructor(config) {
        this.config = config;
        this.hasAudio = true;
        this.hasVideo = false;
        this.micEnabled = true;
        this.speakerEnabled = true;
        this.audioCtx = new AudioContext();
    }
    get() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return {
                'mediaStream': yield this.generateStream(),
                'mediaConstraints': { 'audio': this.hasAudio, 'video': this.hasVideo },
                'pcConfig': this.config.getPcConfig(),
                rtcOfferConstraints: {
                    offerToReceiveAudio: this.hasAudio ? 1 : 0,
                    offerToReceiveVideo: this.hasVideo ? 1 : 0
                }
            };
        });
    }
    getTargetStream() {
        return this.target;
    }
    sendAudioBinary(binary) {
        const len = binary.length;
        const bytes = new Uint8Array(len);
        for (let i = 0; i < len; i++) {
            bytes[i] = binary.charCodeAt(i);
        }
        this.audioCtx.decodeAudioData(bytes.buffer).then(buffer => {
            const source = this.audioCtx.createBufferSource();
            source.buffer = buffer;
            const gainNode = this.audioCtx.createGain();
            gainNode.gain.value = 2;
            source.connect(gainNode);
            gainNode.connect(this.target);
            source.start(0);
        }).catch(e => console.log('ERROR decoding audio!', e));
    }
    sendAudioBlob(blob) {
        const audio0 = new Audio(window.URL.createObjectURL(blob));
        const source = this.audioCtx.createMediaElementSource(audio0);
        source.connect(this.target);
        audio0.loop = false;
        audio0.onended = () => {
            source.disconnect(this.target);
        };
        audio0.play();
    }
    toggleMic() {
        if (this.micEnabled) {
            this.micEnabled = false;
            this.micStream.disconnect(this.target);
        }
        else {
            this.micEnabled = true;
            this.micStream.connect(this.target);
        }
    }
    toggleSpeaker() {
        if (this.speakerEnabled) {
            this.speakerEnabled = false;
            this.outputAudio.volume = 0;
        }
        else {
            this.speakerEnabled = true;
            this.outputAudio.volume = 1;
        }
    }
    outputStream(stream) {
        this.output = stream;
        // typescript doen't know 'createMediaStreamDestination' :(
        this.analyser = this.audioCtx.createAnalyser();
        const target = this.audioCtx.createMediaStreamDestination();
        const source = this.audioCtx.createMediaStreamSource(stream);
        source.connect(this.analyser);
        this.analyser.connect(target);
        this.outputAudio = new Audio();
        this.outputAudio.autoplay = true;
        this.outputAudio.srcObject = stream;
    }
    generateStream() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const mic = yield navigator.mediaDevices.getUserMedia({ audio: this.hasAudio, video: this.hasVideo });
            // typescript doen't know 'createMediaStreamDestination' :(
            this.target = this.audioCtx.createMediaStreamDestination();
            this.micStream = this.audioCtx.createMediaStreamSource(mic);
            this.micStream.connect(this.target);
            this.micEnabled = true;
            return this.target['stream'];
        });
    }
    close() {
        this.audioCtx.close();
    }
}
CallOptions.ctorParameters = () => [
    { type: _configuration_service__WEBPACK_IMPORTED_MODULE_1__["ConfigurationService"] }
];


/***/ }),

/***/ "./src/app/components/call-center/pbx-agent/services/ua.service/session.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/call-center/pbx-agent/services/ua.service/session.ts ***!
  \*********************************************************************************/
/*! exports provided: Session */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Session", function() { return Session; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var jssip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jssip */ "./node_modules/jssip/lib-es5/JsSIP.js");
/* harmony import */ var jssip__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jssip__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _call_options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./call-options */ "./src/app/components/call-center/pbx-agent/services/ua.service/call-options.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




/**
 * Angular wrapper for JSSip.session
 */
class Session {
    constructor(sessionRaw, callOptions) {
        this.status = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('ringing');
        this.inTalkStatus = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.muted = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.dtmf = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.incomingStream = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this._session = sessionRaw;
        this.callOptions = callOptions;
        this.inTalkStatus.next(null);
        this._wireUpEvents();
    }
    resolveCallOptions() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.direction === 'IN') {
                this.answerOptions = yield this.callOptions.get();
            }
        });
    }
    get direction() {
        return this._session._direction === 'incoming' ? 'IN' : 'OUT';
    }
    get id() {
        return this._session.id;
    }
    get target() {
        return this._session.remote_identity.uri.user;
    }
    get usernameTarget() {
        return this._session.remote_identity.display_name || '';
    }
    _wireUpEvents() {
        this._session
            .on('connecting', (e) => this.onConnecting())
            .on('peerconnection', (e) => this.onPeerConection())
            .on('progress', (e) => this.onProgress())
            .on('accepted', (e) => this.onAccepted(e))
            .on('failed', (e) => this.onFailed(e))
            .on('newDTMF', (e) => this.onDTMF(e))
            .on('hold', (e) => this.onHold())
            .on('unhold', (e) => this.onUnhold())
            .on('ended', (e) => this.onEnded())
            .on('update', (e) => this.onUpdate());
        if (this._session.connection) {
            this.onPeerConection();
        }
    }
    onConnecting() {
        if (this._session.connection.getSenders().length > 0) {
            this._localStream = this._session.connection.getSenders()[0];
        }
    }
    onPeerConection() {
        this._session.connection.addEventListener('addstream', (e) => this.onStreamAdded(e));
    }
    onProgress() {
        this.status.next('ringing');
    }
    onAccepted(e) {
        console.log('acepted');
        this.status.next('active');
        this.inTalkStatus.next('talking');
        if (this._session.connection.getSenders().length > 0) {
            this._localStream = this._session.connection.getSenders()[0];
        }
        if (e.originator === 'remote') {
            if (e.response.getHeader('X-Can-Renegotiate') === 'false') {
                this._session.data.remoteCanRenegotiateRTC = false;
            }
            else {
                this._session.data.remoteCanRenegotiateRTC = true;
            }
        }
        // this.date = this.moment(this._session.start_time).format('DD/MM/YYYY HH:mm:ss');
    }
    onStreamAdded(e) {
        this.callOptions.outputStream(e.stream);
    }
    onDTMF(e) {
        this.dtmf.next({
            originator: e.originator,
            code: `${e.dtmf.tone}`,
        });
    }
    onHold() {
        this.inTalkStatus.next('hold');
    }
    onUnhold() {
        this.inTalkStatus.next('talking');
    }
    onFailed(e) {
        this.status.next('done');
        console.log('failed!! wtf????', e);
    }
    onEnded() {
        console.log('eneded???');
        this.muted.complete();
        this.status.next('done');
        this.callOptions.close();
        /*var startTime = this.moment(this.session.start_time);
        var endTime = this.moment(this.session.end_time);
        var duration = this.moment.duration(endTime.diff(startTime));
        this.duration = this.moment.utc(duration.asMilliseconds()).format("mm:ss");*/
        jssip__WEBPACK_IMPORTED_MODULE_1__["Utils"].closeMediaStream(this._localStream);
    }
    onUpdate() {
        console.log('on updated');
        this.status.next('done');
    }
    hangup() {
        this._session.terminate();
    }
    answer() {
        this._session.answer(this.answerOptions);
    }
    hold() {
        this._session.hold();
    }
    unhold() {
        this._session.unhold();
    }
    mute() {
        this.muted.next(true);
        this._session.mute();
    }
    unmute() {
        this.muted.next(false);
        this._session.unmute();
    }
    sendDTMF(d) {
        this._session.sendDTMF(d);
    }
}
Session.ctorParameters = () => [
    { type: undefined },
    { type: _call_options__WEBPACK_IMPORTED_MODULE_2__["CallOptions"] }
];


/***/ }),

/***/ "./src/app/components/call-center/pbx-agent/services/uac.service.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/call-center/pbx-agent/services/uac.service.ts ***!
  \**************************************************************************/
/*! exports provided: UacService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UacService", function() { return UacService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var jssip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jssip */ "./node_modules/jssip/lib-es5/JsSIP.js");
/* harmony import */ var jssip__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jssip__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _configuration_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./configuration.service */ "./src/app/components/call-center/pbx-agent/services/configuration.service.ts");
/* harmony import */ var _ua_service_call_options__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ua.service/call-options */ "./src/app/components/call-center/pbx-agent/services/ua.service/call-options.ts");
/* harmony import */ var _ua_service_session__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ua.service/session */ "./src/app/components/call-center/pbx-agent/services/ua.service/session.ts");







let UacService = class UacService {
    constructor(config, ngZone) {
        this.config = config;
        this.ngZone = ngZone;
        this.cacheOptions = [];
        this.notifier = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.status = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this._generateStatus('disconnected'));
    }
    connect() {
        this.ua = new jssip__WEBPACK_IMPORTED_MODULE_3__["UA"](this.config.getConfiguration());
        this.ngZone.runOutsideAngular(() => {
            this.ua.start();
        });
        this.status.next({ connected: false, status: 'connecting' });
        this._wireStatusSubject();
        this._wireMessageSubject();
    }
    disconnect() {
        this.ua.unregister({ all: true });
        this.ua.stop();
    }
    _wireStatusSubject() {
        [
            'connected',
            'disconnected',
            'registered',
            'unregistered'
        ].map(event => {
            this.ua.on(event, e => 
            // console.log(event)
            this.ngZone.run(() => this.status.next(this._generateStatus(event))));
        });
    }
    _wireMessageSubject() {
        [
            'connected',
            'connecting',
            'disconnected',
            'registered',
            'unregistered',
            'registrationFailed',
            'registrationExpiring',
            'newRTCSession',
            'newMessage'
        ].map(event => {
            this.ua.on(event, e => this.ngZone.run(() => this.notifier.next(this._parseEvent(event, e))));
        });
    }
    _generateStatus(status) {
        return {
            connected: (status === 'connected' || status === 'registered'),
            status
        };
    }
    _parseEvent(name, event) {
        let payload;
        switch (name) {
            case 'connecting': {
                payload = this._hydratePayload(event, ['socket', 'attemps']);
                break;
            }
            case 'connected': {
                payload = this._hydratePayload(event, ['socket']);
                break;
            }
            case 'disconnected': {
                payload = this._hydratePayload(event, ['socket', 'error', 'code', 'reason']);
                break;
            }
            case 'registered': {
                payload = this._hydratePayload(event, ['response']);
                break;
            }
            case 'unregistered': {
                payload = this._hydratePayload(event, ['response', 'cause']);
                break;
            }
            case 'registrationFailed': {
                payload = this._hydratePayload(event, ['response', 'cause']);
                break;
            }
            case 'registrationExpiring': {
                payload = this._hydratePayload(event, ['msg']);
                break;
            }
            case 'newRTCSession': {
                payload = this._hydratePayload(event, ['originator', 'request']);
                let callOptions;
                if (payload.originator === 'local') {
                    callOptions = this.cacheOptions.shift();
                }
                else {
                    callOptions = new _ua_service_call_options__WEBPACK_IMPORTED_MODULE_5__["CallOptions"](this.config);
                }
                payload.session = new _ua_service_session__WEBPACK_IMPORTED_MODULE_6__["Session"](event.session, callOptions);
                payload.session.resolveCallOptions();
                break;
            }
            case 'newMessage': {
                payload = this._hydratePayload(event, ['originator', 'session', 'request']);
                break;
            }
            default: {
                throw new Error('unsuported event');
            }
        }
        return {
            event: name,
            data: payload
        };
    }
    _hydratePayload(event, fields) {
        return fields.reduce((ret, field) => {
            if (!event) {
                return ret;
            }
            ret[field] = event[field] || null;
            return ret;
        }, {});
    }
};
UacService.ctorParameters = () => [
    { type: _configuration_service__WEBPACK_IMPORTED_MODULE_4__["ConfigurationService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
UacService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], UacService);



/***/ }),

/***/ "./src/app/services/authentication.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/authentication.service.ts ***!
  \****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _global_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./global-config.service */ "./src/app/services/global-config.service.ts");






let AuthenticationService = class AuthenticationService {
    constructor(http, globalConfigService) {
        this.http = http;
        this.globalConfigService = globalConfigService;
    }
    login1(username, password) {
        if ((username === 'vasya' || username === 'qq') && password === '1') {
            localStorage.setItem('currentUser', username);
        }
        return username;
    }
    login(username, password) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].backEndAPI + '/login', {
            login: username,
            password: password
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(n => {
            this.globalConfigService.setMenuItems(n.acl);
            this.globalConfigService.setLoginData(n);
            return n;
        }));
    }
    logout() {
        localStorage.removeItem('currentUser');
    }
};
AuthenticationService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _global_config_service__WEBPACK_IMPORTED_MODULE_5__["GlobalConfigService"] }
];
AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthenticationService);



/***/ }),

/***/ "./src/app/services/global-config.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/global-config.service.ts ***!
  \***************************************************/
/*! exports provided: GlobalConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalConfigService", function() { return GlobalConfigService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




let GlobalConfigService = class GlobalConfigService {
    constructor() {
        this.menuItems$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.loginData$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({
            sid: '',
            auth: false,
            name: 'test',
            acl: [],
            access_token: '',
            user_id: null,
        });
    }
    setLoginData(loginData) {
        this.loginData$.next(loginData);
    }
    getLoginData() {
        if (this.loginData$.getValue() === null) {
        }
        return this.loginData$.asObservable();
    }
    setMenuItems(acl) {
        this.menuItems$.next(this.aclToMenu(acl));
    }
    getMenuItems() {
        if (this.menuItems$.getValue().length === 0) {
        }
        return this.menuItems$;
    }
    aclToMenu(acl) {
        const res = [];
        acl.forEach((item) => {
            let it = this.getMenuItem(res, item.id);
            Object.assign(it, {
                label: item.name
            });
        });
        return res;
    }
    getMenuItem(menuItems, id) {
        const itemPaths = id.split('.');
        let itemsArrRef = menuItems;
        let res = {};
        itemPaths.forEach((path, i, paths) => {
            let itemRef;
            for (const mItem of itemsArrRef) {
                if (mItem.id === path) {
                    itemRef = mItem;
                    itemsArrRef = mItem.items;
                    break;
                }
            }
            if (!itemRef) {
                itemRef = {
                    id: path,
                    items: [],
                    icon: _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].menuItemsIcon[path] !== undefined ? _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].menuItemsIcon[path].icon : '',
                    routerLink: ['/' + path]
                };
                itemsArrRef.push(itemRef);
                itemsArrRef = itemRef.items;
            }
            res = itemRef;
        });
        return res;
    }
};
GlobalConfigService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], GlobalConfigService);



/***/ }),

/***/ "./src/app/store/app-config/app-config.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/store/app-config/app-config.module.ts ***!
  \*******************************************************/
/*! exports provided: AppConfigModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppConfigModule", function() { return AppConfigModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ */ "./src/app/store/app-config/index.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");







let AppConfigModule = class AppConfigModule {
};
AppConfigModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["EffectsModule"].forRoot(___WEBPACK_IMPORTED_MODULE_4__["appEffects"]),
            _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forRoot(___WEBPACK_IMPORTED_MODULE_4__["reducers"], { metaReducers: ___WEBPACK_IMPORTED_MODULE_4__["metaReducers"] })
        ],
        declarations: [],
        providers: [___WEBPACK_IMPORTED_MODULE_4__["appConfigServices"]]
    })
], AppConfigModule);



/***/ }),

/***/ "./src/app/store/app-config/auth/auth.actions.ts":
/*!*******************************************************!*\
  !*** ./src/app/store/app-config/auth/auth.actions.ts ***!
  \*******************************************************/
/*! exports provided: AuthActionTypes, LogIn, LogInSuccess, LogInFailure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthActionTypes", function() { return AuthActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogIn", function() { return LogIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogInSuccess", function() { return LogInSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogInFailure", function() { return LogInFailure; });
var AuthActionTypes;
(function (AuthActionTypes) {
    AuthActionTypes["LOGIN"] = "[Auth] Login request";
    AuthActionTypes["LOGIN_SUCCESS"] = "[Auth] Login success";
    AuthActionTypes["LOGIN_FAILURE"] = "[Auth] Login Failure";
})(AuthActionTypes || (AuthActionTypes = {}));
class LogIn {
    constructor(payload) {
        this.payload = payload;
        this.type = AuthActionTypes.LOGIN;
    }
}
LogIn.ctorParameters = () => [
    { type: undefined }
];
class LogInSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = AuthActionTypes.LOGIN_SUCCESS;
    }
}
LogInSuccess.ctorParameters = () => [
    { type: undefined }
];
class LogInFailure {
    constructor(payload) {
        this.payload = payload;
        this.type = AuthActionTypes.LOGIN_FAILURE;
    }
}
LogInFailure.ctorParameters = () => [
    { type: undefined }
];


/***/ }),

/***/ "./src/app/store/app-config/auth/auth.effects.ts":
/*!*******************************************************!*\
  !*** ./src/app/store/app-config/auth/auth.effects.ts ***!
  \*******************************************************/
/*! exports provided: AuthEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthEffects", function() { return AuthEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
/* harmony import */ var _auth_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.actions */ "./src/app/store/app-config/auth/auth.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_7__);








let AuthEffects = class AuthEffects {
    constructor(actions$, authHttpService, messageService) {
        this.actions$ = actions$;
        this.authHttpService = authHttpService;
        this.messageService = messageService;
        this.logIn$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_auth_actions__WEBPACK_IMPORTED_MODULE_3__["AuthActionTypes"].LOGIN), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((action) => action.payload), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])((payload) => this.authHttpService
            .login(payload.login, payload.password)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((userData) => new _auth_actions__WEBPACK_IMPORTED_MODULE_3__["LogInSuccess"](userData)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(new _auth_actions__WEBPACK_IMPORTED_MODULE_3__["LogInFailure"](error))))));
        this.logInSuccess$ = this.actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_auth_actions__WEBPACK_IMPORTED_MODULE_3__["AuthActionTypes"].LOGIN_SUCCESS), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(userData => this.messageService
            .add({ severity: 'success', summary: 'Service Message', detail: 'Юзер залогинился' })));
        this.logInFailure$ = this.actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_auth_actions__WEBPACK_IMPORTED_MODULE_3__["AuthActionTypes"].LOGIN_FAILURE), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(error => console.log(error)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((error) => this.messageService
            .add({ severity: 'error', summary: 'Service Message', detail: error.payload.statusText })));
    }
};
AuthEffects.ctorParameters = () => [
    { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] },
    { type: primeng_api__WEBPACK_IMPORTED_MODULE_7__["MessageService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
], AuthEffects.prototype, "logIn$", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])({ dispatch: false })
], AuthEffects.prototype, "logInSuccess$", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])({ dispatch: false })
], AuthEffects.prototype, "logInFailure$", void 0);
AuthEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AuthEffects);



/***/ }),

/***/ "./src/app/store/app-config/auth/auth.reducer.ts":
/*!*******************************************************!*\
  !*** ./src/app/store/app-config/auth/auth.reducer.ts ***!
  \*******************************************************/
/*! exports provided: reducer, getIsAuth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsAuth", function() { return getIsAuth; });
/* harmony import */ var _auth_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.actions */ "./src/app/store/app-config/auth/auth.actions.ts");
/* harmony import */ var _auth_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.state */ "./src/app/store/app-config/auth/auth.state.ts");


function reducer(state = _auth_state__WEBPACK_IMPORTED_MODULE_1__["initialState"], action) {
    switch (action.type) {
        case _auth_actions__WEBPACK_IMPORTED_MODULE_0__["AuthActionTypes"].LOGIN_SUCCESS:
            return Object.assign({}, state, { userData: action.payload, isAuthenticated: action.payload.auth });
        case _auth_actions__WEBPACK_IMPORTED_MODULE_0__["AuthActionTypes"].LOGIN_FAILURE:
            return Object.assign({}, state, { errorText: action.payload.statusText });
        default:
            return state;
    }
}
const getIsAuth = (state) => state.isAuthenticated;


/***/ }),

/***/ "./src/app/store/app-config/auth/auth.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/store/app-config/auth/auth.service.ts ***!
  \*******************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _auth_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.reducer */ "./src/app/store/app-config/auth/auth.reducer.ts");
/* harmony import */ var _auth_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth.actions */ "./src/app/store/app-config/auth/auth.actions.ts");






/*const getAppState = createFeatureSelector<IAppState>('appConfig');
const getAuthState = createSelector(
  getAppState,
  (state: IAppState) => {
    console.log(state.auth);
    return state.auth;
  }
);*/
const getAuthState = (state) => state.auth;
const isAuth = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(getAuthState, _auth_reducer__WEBPACK_IMPORTED_MODULE_4__["getIsAuth"]);
let AuthService = class AuthService {
    constructor(store) {
        this.store = store;
    }
    get isAuth$() {
        return this.store.select(isAuth).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])());
    }
    logIn(p) {
        this.store.dispatch(new _auth_actions__WEBPACK_IMPORTED_MODULE_5__["LogIn"](p));
    }
};
AuthService.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AuthService);



/***/ }),

/***/ "./src/app/store/app-config/auth/auth.state.ts":
/*!*****************************************************!*\
  !*** ./src/app/store/app-config/auth/auth.state.ts ***!
  \*****************************************************/
/*! exports provided: initialState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
const initialState = {
    isAuthenticated: false,
    userData: null
};


/***/ }),

/***/ "./src/app/store/app-config/index.ts":
/*!*******************************************!*\
  !*** ./src/app/store/app-config/index.ts ***!
  \*******************************************/
/*! exports provided: reducers, metaReducers, appConfigServices, appEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metaReducers", function() { return metaReducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appConfigServices", function() { return appConfigServices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appEffects", function() { return appEffects; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _auth_auth_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth/auth.reducer */ "./src/app/store/app-config/auth/auth.reducer.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/store/app-config/auth/auth.service.ts");
/* harmony import */ var _auth_auth_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/auth.effects */ "./src/app/store/app-config/auth/auth.effects.ts");
/* harmony import */ var _uac_uac_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./uac/uac.reducer */ "./src/app/store/app-config/uac/uac.reducer.ts");
/* harmony import */ var _uac_uac_store_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./uac/uac-store.service */ "./src/app/store/app-config/uac/uac-store.service.ts");
/* harmony import */ var _uac_uac_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./uac/uac.effects */ "./src/app/store/app-config/uac/uac.effects.ts");







const reducers = {
    auth: _auth_auth_reducer__WEBPACK_IMPORTED_MODULE_1__["reducer"],
    uac: _uac_uac_reducer__WEBPACK_IMPORTED_MODULE_4__["reducer"]
};
const metaReducers = !_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].production ? [] : [];
const appConfigServices = [_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _uac_uac_store_service__WEBPACK_IMPORTED_MODULE_5__["UacStoreService"]];
const appEffects = [_auth_auth_effects__WEBPACK_IMPORTED_MODULE_3__["AuthEffects"], _uac_uac_effects__WEBPACK_IMPORTED_MODULE_6__["UacEffects"]];


/***/ }),

/***/ "./src/app/store/app-config/uac/uac-store.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/store/app-config/uac/uac-store.service.ts ***!
  \***********************************************************/
/*! exports provided: UacStoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UacStoreService", function() { return UacStoreService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _uac_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./uac.reducer */ "./src/app/store/app-config/uac/uac.reducer.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _uac_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./uac.actions */ "./src/app/store/app-config/uac/uac.actions.ts");
/* harmony import */ var src_app_components_call_center_pbx_agent_services_callspoll_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/call-center/pbx-agent/services/callspoll.service */ "./src/app/components/call-center/pbx-agent/services/callspoll.service.ts");







/*const getAppState = createFeatureSelector<IAppState>('appConfig');
const getUacState = createSelector(
  getAppState,
  (state: IAppState) => state.uac
);*/
const getUacState = (state) => state.uac;
const isConnected = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getUacState, _uac_reducer__WEBPACK_IMPORTED_MODULE_2__["getIsConnected"]);
const config = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getUacState, (state) => ({
    sipuri: state.config.uri,
    wsuri: state.wsuri,
    password: state.config.password
}));
let UacStoreService = class UacStoreService {
    constructor(store, callSpool) {
        this.store = store;
        this.callSpool = callSpool;
        //this.callSpool.calls.subscribe(n=>console.log(n))
    }
    get isConnected$() {
        return this.store.select(isConnected).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])());
    }
    get config$() {
        return this.store.select(config);
    }
    set config(c) {
        this.store.dispatch(new _uac_actions__WEBPACK_IMPORTED_MODULE_5__["SetConfig"](c));
    }
    connect() {
        //this.store.dispatch(new LogIn(p));
        this.store.dispatch(new _uac_actions__WEBPACK_IMPORTED_MODULE_5__["Connect"]());
    }
};
UacStoreService.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] },
    { type: src_app_components_call_center_pbx_agent_services_callspoll_service__WEBPACK_IMPORTED_MODULE_6__["CallspollService"] }
];
UacStoreService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])()
], UacStoreService);



/***/ }),

/***/ "./src/app/store/app-config/uac/uac.actions.ts":
/*!*****************************************************!*\
  !*** ./src/app/store/app-config/uac/uac.actions.ts ***!
  \*****************************************************/
/*! exports provided: UacActionTypes, Connect, ConnectStart, ConnectSuccess, ConnectFailure, SetConfig, Call */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UacActionTypes", function() { return UacActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Connect", function() { return Connect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectStart", function() { return ConnectStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectSuccess", function() { return ConnectSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectFailure", function() { return ConnectFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetConfig", function() { return SetConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Call", function() { return Call; });
var UacActionTypes;
(function (UacActionTypes) {
    UacActionTypes["CONNECT"] = "[UAC] Connect request";
    UacActionTypes["CONNECT_START"] = "[UAC] Connect start";
    UacActionTypes["CONNECT_SUCCESS"] = "[UAC] Connect success";
    UacActionTypes["CONNECT_FAILURE"] = "[UAC] Connect Failure";
    UacActionTypes["SET_CONFIG"] = "[UAC] Set config";
    UacActionTypes["CALL"] = "[UAC] Call originate";
})(UacActionTypes || (UacActionTypes = {}));
class Connect {
    constructor() {
        this.type = UacActionTypes.CONNECT;
        //constructor(public payload: IUacAuthRequest) { }
    }
}
class ConnectStart {
    constructor() {
        this.type = UacActionTypes.CONNECT_START;
        //constructor(public payload: IUacAuthRequest) { }
    }
}
class ConnectSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = UacActionTypes.CONNECT_SUCCESS;
    }
}
ConnectSuccess.ctorParameters = () => [
    { type: Boolean }
];
class ConnectFailure {
    constructor(payload) {
        this.payload = payload;
        this.type = UacActionTypes.CONNECT_FAILURE;
    }
}
ConnectFailure.ctorParameters = () => [
    { type: undefined }
];
class SetConfig {
    constructor(payload) {
        this.payload = payload;
        this.type = UacActionTypes.SET_CONFIG;
    }
}
SetConfig.ctorParameters = () => [
    { type: undefined }
];
class Call {
    constructor(payload) {
        this.payload = payload;
        this.type = UacActionTypes.CALL;
    }
}
Call.ctorParameters = () => [
    { type: undefined }
];


/***/ }),

/***/ "./src/app/store/app-config/uac/uac.effects.ts":
/*!*****************************************************!*\
  !*** ./src/app/store/app-config/uac/uac.effects.ts ***!
  \*****************************************************/
/*! exports provided: UacEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UacEffects", function() { return UacEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_components_call_center_pbx_agent_services_callspoll_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/call-center/pbx-agent/services/callspoll.service */ "./src/app/components/call-center/pbx-agent/services/callspoll.service.ts");
/* harmony import */ var _uac_store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./uac-store.service */ "./src/app/store/app-config/uac/uac-store.service.ts");
/* harmony import */ var _components_call_center_pbx_agent_services_uac_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../components/call-center/pbx-agent/services/uac.service */ "./src/app/components/call-center/pbx-agent/services/uac.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _uac_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./uac.actions */ "./src/app/store/app-config/uac/uac.actions.ts");
/* harmony import */ var rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/internal/observable/of */ "./node_modules/rxjs/internal/observable/of.js");
/* harmony import */ var rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var src_app_components_call_center_pbx_agent_services_configuration_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/components/call-center/pbx-agent/services/configuration.service */ "./src/app/components/call-center/pbx-agent/services/configuration.service.ts");










let UacEffects = class UacEffects {
    constructor(actions$, uacService, config, uacStoreService, callspollService) {
        this.actions$ = actions$;
        this.uacService = uacService;
        this.config = config;
        this.uacStoreService = uacStoreService;
        this.callspollService = callspollService;
        this.init$ = this.uacService.status.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["skip"])(1)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeWhile"])((v, i) => i + 1 <= 3 && !v.connected, true), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeLast"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])((v, i) => {
            if (v.connected) {
                return new _uac_actions__WEBPACK_IMPORTED_MODULE_7__["ConnectSuccess"](v.connected);
            }
            else {
                this.uacService.disconnect();
                return new _uac_actions__WEBPACK_IMPORTED_MODULE_7__["ConnectFailure"]('Connect failure');
            }
        }));
        this.init1$ = this.uacService.notifier.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])((v) => {
            //      console.log(v);
        }));
        this.callsPool$ = this.callspollService.calls.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["skipWhile"])(n => !n.length), 
        //tap(n => console.log(n)),
        //tap(n => console.log(n)),
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(calls => calls[0].status.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(n => new _uac_actions__WEBPACK_IMPORTED_MODULE_7__["Call"](n.type)))));
        this.connect$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["ofType"])(_uac_actions__WEBPACK_IMPORTED_MODULE_7__["UacActionTypes"].CONNECT), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["withLatestFrom"])(this.uacStoreService.config$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(([action, configAuth]) => {
            //console.log(storeState);
            const us = this.uacService;
            const config = this.config;
            Object.assign(config, Object.assign({}, configAuth));
            us.connect();
            // return new ConnectSuccess(true);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(() => new _uac_actions__WEBPACK_IMPORTED_MODULE_7__["ConnectStart"]()), 
        /*switchMap(
            () =>
                this.uacService.status.pipe(
                    skip(1)
                ).pipe(
                    takeWhile((v, i) => i + 1 <= 3 && !v.connected, true),
                    takeLast(1),
                    map((v, i) => {
                        //console.log(v.status + ' - ' + i + ' - ' + v.connected);
                        //this.uacService.disconnect();
                        //return v;
                        if (v.connected) {
                            return new ConnectSuccess(v.connected);
                        } else {
                            this.uacService.disconnect();
                            return new ConnectFailure('Connect failure');
                        }
                    }),
                )
        ),*/
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(error => {
            return Object(rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_8__["of"])(new _uac_actions__WEBPACK_IMPORTED_MODULE_7__["ConnectFailure"](error.message || 'error'));
        }));
    }
};
UacEffects.ctorParameters = () => [
    { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["Actions"] },
    { type: _components_call_center_pbx_agent_services_uac_service__WEBPACK_IMPORTED_MODULE_3__["UacService"] },
    { type: src_app_components_call_center_pbx_agent_services_configuration_service__WEBPACK_IMPORTED_MODULE_9__["ConfigurationService"] },
    { type: _uac_store_service__WEBPACK_IMPORTED_MODULE_2__["UacStoreService"] },
    { type: src_app_components_call_center_pbx_agent_services_callspoll_service__WEBPACK_IMPORTED_MODULE_1__["CallspollService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["Effect"])()
], UacEffects.prototype, "init$", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["Effect"])({ dispatch: false })
], UacEffects.prototype, "init1$", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["Effect"])()
], UacEffects.prototype, "callsPool$", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["Effect"])()
], UacEffects.prototype, "connect$", void 0);
UacEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])()
], UacEffects);



/***/ }),

/***/ "./src/app/store/app-config/uac/uac.reducer.ts":
/*!*****************************************************!*\
  !*** ./src/app/store/app-config/uac/uac.reducer.ts ***!
  \*****************************************************/
/*! exports provided: reducer, getIsConnected */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsConnected", function() { return getIsConnected; });
/* harmony import */ var _uac_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uac.state */ "./src/app/store/app-config/uac/uac.state.ts");
/* harmony import */ var _uac_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uac.actions */ "./src/app/store/app-config/uac/uac.actions.ts");


function reducer(state = _uac_state__WEBPACK_IMPORTED_MODULE_0__["initialState"], action) {
    switch (action.type) {
        case _uac_actions__WEBPACK_IMPORTED_MODULE_1__["UacActionTypes"].CONNECT_START:
            return Object.assign({}, state, { connecting: true });
        case _uac_actions__WEBPACK_IMPORTED_MODULE_1__["UacActionTypes"].CONNECT_SUCCESS:
            return Object.assign({}, state, { connecting: false, connected: action.payload });
        case _uac_actions__WEBPACK_IMPORTED_MODULE_1__["UacActionTypes"].CONNECT_FAILURE:
            return Object.assign({}, state, { connecting: false, connected: false, errorText: action.payload });
        case _uac_actions__WEBPACK_IMPORTED_MODULE_1__["UacActionTypes"].SET_CONFIG:
            return Object.assign({}, state, { config: Object.assign({}, state.config, { uri: action.payload.sipuri, password: action.payload.password }), wsuri: action.payload.wsuri });
        case _uac_actions__WEBPACK_IMPORTED_MODULE_1__["UacActionTypes"].CALL:
            return Object.assign({}, state, { callState: action.payload });
        default:
            return state;
    }
}
const getIsConnected = (state) => state.connected;


/***/ }),

/***/ "./src/app/store/app-config/uac/uac.state.ts":
/*!***************************************************!*\
  !*** ./src/app/store/app-config/uac/uac.state.ts ***!
  \***************************************************/
/*! exports provided: configInitialState, initialState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configInitialState", function() { return configInitialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
const configInitialState = {
    sockets: null,
    uri: '',
    password: '',
    autoConnect: false,
    register: true,
    register_expires: 600,
    session_timers: true,
    connection_recovery_min_interval: 2,
    connection_recovery_max_interval: 30,
    registrar_server: '',
    no_answer_timeout: 60,
    use_preloaded_route: false,
    hack_via_tcp: false,
    hack_via_ws: false,
    hack_ip_in_contact: false
};
const initialState = {
    connected: false,
    connecting: false,
    callInProgress: false,
    callState: null,
    dialStatus: null,
    config: configInitialState,
    wsuri: '',
    errorText: ''
};


/***/ }),

/***/ "./src/app/store/app-store.module.ts":
/*!*******************************************!*\
  !*** ./src/app/store/app-store.module.ts ***!
  \*******************************************/
/*! exports provided: AppStoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppStoreModule", function() { return AppStoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _app_config_app_config_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-config/app-config.module */ "./src/app/store/app-config/app-config.module.ts");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/fesm2015/store-devtools.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");






let AppStoreModule = class AppStoreModule {
};
AppStoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _app_config_app_config_module__WEBPACK_IMPORTED_MODULE_3__["AppConfigModule"],
            _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production ? [] : _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_4__["StoreDevtoolsModule"].instrument()
        ],
        declarations: []
    })
], AppStoreModule);



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
const environment = {
    production: false,
    ws: 'ws://localhost:6759',
    backEndAPI: 'http://localhost:3000/api',
    menuItemsIcon: {
        requests: {
            icon: 'pi pi-fw pi-comments'
        },
        statistics: {
            icon: 'pi pi-chart-bar'
        },
        calendar: {
            icon: 'pi pi-calendar-times'
        },
        cashbox: {
            icon: 'cash-ico'
        }
    }
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\WorkEnv\Proj\Portal\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map