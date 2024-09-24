/*! For license information please see main.1a7a07dd.js.LICENSE.txt */
(()=>{
    var e = {
        13: function(e, t, n) {
            var r = n(312).default
              , o = n(459).default
              , a = n(756).default
              , i = n(668).default
              , l = n(88).default
              , s = n(693).default;
            !function(e) {
                "use strict";
                const t = {
                    API: "https://www.handyfeeling.com/api/handy/v2",
                    scriptAPI: "https://scripts01.handyfeeling.com/api/script/v0",
                    UUI: {
                        URL: "https://universalui.handyfeeling.com",
                        theme: "default",
                        storeURL: "https://thehandy.com/",
                        errorAlign: "left"
                    },
                    syncClientServerTime: !0,
                    syncClient: {
                        syncCount: 30,
                        outliers: 10
                    },
                    syncHandy: {
                        syncCount: 30,
                        outliers: 10
                    },
                    videoPlayerDelayForSecondPlay: 2500,
                    timeBetweenSyncs: 36e5,
                    throttleDelay: 200,
                    localStorage: "undefined" != typeof localStorage ? localStorage : void 0
                };
                function n(e, t) {
                    const {syncClient: n, syncHandy: r, UUI: o, localStorage: a, ...i} = e
                      , {syncClient: l, syncHandy: s, UUI: u, localStorage: c, ...d} = t;
                    return {
                        ...i,
                        ...d,
                        syncClient: {
                            ...n,
                            ...l
                        },
                        syncHandy: {
                            ...r,
                            ...s
                        },
                        UUI: {
                            ...o,
                            ...u
                        },
                        localStorage: c ? {
                            ...a,
                            ...c
                        } : a
                    }
                }
                class u {
                    constructor(e) {
                        s(this, "config", void 0),
                        this.config = e
                    }
                }
                class c extends Error {
                    constructor(e, t, n) {
                        super(n),
                        s(this, "url", void 0),
                        s(this, "status", void 0),
                        s(this, "statusText", void 0),
                        s(this, "body", void 0),
                        s(this, "request", void 0),
                        this.name = "ApiError",
                        this.url = t.url,
                        this.status = t.status,
                        this.statusText = t.statusText,
                        this.body = t.body,
                        this.request = e
                    }
                }
                class d extends Error {
                    constructor(e) {
                        super(e),
                        this.name = "CancelError"
                    }
                    get isCancelled() {
                        return !0
                    }
                }
                class f {
                    constructor(e) {
                        s(this, Symbol.toStringTag, void 0),
                        s(this, "_isResolved", void 0),
                        s(this, "_isRejected", void 0),
                        s(this, "_isCancelled", void 0),
                        s(this, "_cancelHandlers", void 0),
                        s(this, "_promise", void 0),
                        s(this, "_resolve", void 0),
                        s(this, "_reject", void 0),
                        this._isResolved = !1,
                        this._isRejected = !1,
                        this._isCancelled = !1,
                        this._cancelHandlers = [],
                        this._promise = new Promise(((t,n)=>{
                            this._resolve = t,
                            this._reject = n;
                            const r = e=>{
                                this._isResolved || this._isRejected || this._isCancelled || this._cancelHandlers.push(e)
                            }
                            ;
                            return Object.defineProperty(r, "isResolved", {
                                get: ()=>this._isResolved
                            }),
                            Object.defineProperty(r, "isRejected", {
                                get: ()=>this._isRejected
                            }),
                            Object.defineProperty(r, "isCancelled", {
                                get: ()=>this._isCancelled
                            }),
                            e((e=>{
                                var t;
                                this._isResolved || this._isRejected || this._isCancelled || (this._isResolved = !0,
                                null === (t = this._resolve) || void 0 === t || t.call(this, e))
                            }
                            ), (e=>{
                                var t;
                                this._isResolved || this._isRejected || this._isCancelled || (this._isRejected = !0,
                                null === (t = this._reject) || void 0 === t || t.call(this, e))
                            }
                            ), r)
                        }
                        ))
                    }
                    then(e, t) {
                        return this._promise.then(e, t)
                    }
                    catch(e) {
                        return this._promise.catch(e)
                    }
                    finally(e) {
                        return this._promise.finally(e)
                    }
                    cancel() {
                        if (!(this._isResolved || this._isRejected || this._isCancelled)) {
                            var t;
                            if (this._isCancelled = !0,
                            this._cancelHandlers.length)
                                try {
                                    for (const e of this._cancelHandlers)
                                        e()
                                } catch (e) {
                                    return void console.warn("Cancellation threw an error", e)
                                }
                            this._cancelHandlers.length = 0,
                            null === (t = this._reject) || void 0 === t || t.call(this, new d("Request aborted"))
                        }
                    }
                    get isCancelled() {
                        return this._isCancelled
                    }
                }
                const p = e=>null != e
                  , h = e=>"string" == typeof e
                  , m = e=>h(e) && "" !== e
                  , y = e=>"object" == typeof e && "string" == typeof e.type && "function" == typeof e.stream && "function" == typeof e.arrayBuffer && "function" == typeof e.constructor && "string" == typeof e.constructor.name && /^(Blob|File)$/.test(e.constructor.name) && /^(Blob|File)$/.test(e[Symbol.toStringTag])
                  , g = e=>e instanceof FormData
                  , v = e=>{
                    const t = []
                      , n = (e,r)=>{
                        p(r) && (Array.isArray(r) ? r.forEach((t=>{
                            n(e, t)
                        }
                        )) : "object" == typeof r ? Object.entries(r).forEach((t=>{
                            let[r,o] = t;
                            n("".concat(e, "[").concat(r, "]"), o)
                        }
                        )) : ((e,n)=>{
                            t.push("".concat(encodeURIComponent(e), "=").concat(encodeURIComponent(String(n))))
                        }
                        )(e, r))
                    }
                    ;
                    return Object.entries(e).forEach((e=>{
                        let[t,r] = e;
                        n(t, r)
                    }
                    )),
                    t.length > 0 ? "?".concat(t.join("&")) : ""
                }
                  , b = async(e,t)=>"function" == typeof t ? t(e) : t
                  , w = async(e,t)=>{
                    const n = await b(t, e.TOKEN)
                      , r = await b(t, e.USERNAME)
                      , o = await b(t, e.PASSWORD)
                      , a = await b(t, e.HEADERS)
                      , i = Object.entries({
                        Accept: "application/json",
                        ...a,
                        ...t.headers
                    }).filter((e=>{
                        let[t,n] = e;
                        return p(n)
                    }
                    )).reduce(((e,t)=>{
                        let[n,r] = t;
                        return {
                            ...e,
                            [n]: String(r)
                        }
                    }
                    ), {});
                    if (m(n) && (i.Authorization = "Bearer ".concat(n)),
                    m(r) && m(o)) {
                        const e = (e=>{
                            try {
                                return btoa(e)
                            } catch (t) {
                                return Buffer.from(e).toString("base64")
                            }
                        }
                        )("".concat(r, ":").concat(o));
                        i.Authorization = "Basic ".concat(e)
                    }
                    return t.body && (t.mediaType ? i["Content-Type"] = t.mediaType : y(t.body) ? i["Content-Type"] = t.body.type || "application/octet-stream" : h(t.body) ? i["Content-Type"] = "text/plain" : g(t.body) || (i["Content-Type"] = "application/json")),
                    new Headers(i)
                }
                  , _ = (e,t)=>new f((async(n,r,o)=>{
                    try {
                        const r = ((e,t)=>{
                            const n = e.ENCODE_PATH || encodeURI
                              , r = t.url.replace("{api-version}", e.VERSION).replace(/{(.*?)}/g, ((e,r)=>{
                                var o;
                                return null !== (o = t.path) && void 0 !== o && o.hasOwnProperty(r) ? n(String(t.path[r])) : e
                            }
                            ))
                              , o = "".concat(e.BASE).concat(r);
                            return t.query ? "".concat(o).concat(v(t.query)) : o
                        }
                        )(e, t)
                          , a = (e=>{
                            if (e.formData) {
                                const t = new FormData
                                  , n = (e,n)=>{
                                    h(n) || y(n) ? t.append(e, n) : t.append(e, JSON.stringify(n))
                                }
                                ;
                                return Object.entries(e.formData).filter((e=>{
                                    let[t,n] = e;
                                    return p(n)
                                }
                                )).forEach((e=>{
                                    let[t,r] = e;
                                    Array.isArray(r) ? r.forEach((e=>n(t, e))) : n(t, r)
                                }
                                )),
                                t
                            }
                        }
                        )(t)
                          , i = ((e,t)=>{
                            if (e.body)
                                return null !== (t = e.mediaType) && void 0 !== t && t.includes("/json") ? JSON.stringify(e.body) : h(e.body) || y(e.body) || g(e.body) ? e.body : JSON.stringify(e.body)
                        }
                        )(t)
                          , l = await w(e, t);
                        if (!o.isCancelled) {
                            const s = await (async(e,t,n,r,o,a,i)=>{
                                const l = new AbortController
                                  , s = {
                                    headers: a,
                                    body: null !== r && void 0 !== r ? r : o,
                                    method: t.method,
                                    signal: l.signal
                                };
                                return e.WITH_CREDENTIALS && (s.credentials = e.CREDENTIALS),
                                i((()=>l.abort())),
                                await fetch(n, s)
                            }
                            )(e, t, r, i, a, l, o)
                              , u = await (async e=>{
                                if (204 !== e.status)
                                    try {
                                        const t = e.headers.get("Content-Type");
                                        if (t)
                                            return t.toLowerCase().startsWith("application/json") ? await e.json() : await e.text()
                                    } catch (e) {
                                        console.error(e)
                                    }
                            }
                            )(s)
                              , d = ((e,t)=>{
                                if (t) {
                                    const n = e.headers.get(t);
                                    if (h(n))
                                        return n
                                }
                            }
                            )(s, t.responseHeader)
                              , f = {
                                url: r,
                                ok: s.ok,
                                status: s.status,
                                statusText: s.statusText,
                                body: null !== d && void 0 !== d ? d : u
                            };
                            ((e,t)=>{
                                const n = {
                                    400: "Bad Request",
                                    401: "Unauthorized",
                                    403: "Forbidden",
                                    404: "Not Found",
                                    500: "Internal Server Error",
                                    502: "Bad Gateway",
                                    503: "Service Unavailable",
                                    ...e.errors
                                }[t.status];
                                if (n)
                                    throw new c(e,t,n);
                                if (!t.ok)
                                    throw new c(e,t,"Generic Error")
                            }
                            )(t, f),
                            n(f.body)
                        }
                    } catch (e) {
                        r(e)
                    }
                }
                ));
                class S extends u {
                    constructor(e) {
                        super(e)
                    }
                    request(e) {
                        return _(this.config, e)
                    }
                }
                class E {
                    constructor(e) {
                        s(this, "httpRequest", void 0),
                        this.httpRequest = e
                    }
                    getMode(e) {
                        return this.httpRequest.request({
                            method: "GET",
                            url: "/mode",
                            headers: {
                                "X-Connection-Key": e
                            },
                            errors: {
                                400: "Bad request."
                            }
                        })
                    }
                    setMode(e, t) {
                        return this.httpRequest.request({
                            method: "PUT",
                            url: "/mode",
                            headers: {
                                "X-Connection-Key": e
                            },
                            body: t,
                            mediaType: "application/json",
                            errors: {
                                400: "Bad request."
                            }
                        })
                    }
                    isConnected(e) {
                        return this.httpRequest.request({
                            method: "GET",
                            url: "/connected",
                            headers: {
                                "X-Connection-Key": e
                            },
                            errors: {
                                400: "Bad request."
                            }
                        })
                    }
                    getInfo(e) {
                        return this.httpRequest.request({
                            method: "GET",
                            url: "/info",
                            headers: {
                                "X-Connection-Key": e
                            },
                            errors: {
                                400: "Bad request."
                            }
                        })
                    }
                    getSettings(e) {
                        return this.httpRequest.request({
                            method: "GET",
                            url: "/settings",
                            headers: {
                                "X-Connection-Key": e
                            },
                            errors: {
                                400: "Bad request."
                            }
                        })
                    }
                    getStatus(e) {
                        return this.httpRequest.request({
                            method: "GET",
                            url: "/status",
                            headers: {
                                "X-Connection-Key": e
                            },
                            errors: {
                                400: "Bad request."
                            }
                        })
                    }
                }
                class k {
                    constructor(e) {
                        s(this, "httpRequest", void 0),
                        this.httpRequest = e
                    }
                    start(e) {
                        return this.httpRequest.request({
                            method: "PUT",
                            url: "/hamp/start",
                            headers: {
                                "X-Connection-Key": e
                            },
                            errors: {
                                400: "Bad request."
                            }
                        })
                    }
                    hampStop(e) {
                        return this.httpRequest.request({
                            method: "PUT",
                            url: "/hamp/stop",
                            headers: {
                                "X-Connection-Key": e
                            },
                            errors: {
                                400: "Bad request."
                            }
                        })
                    }
                    getHampVelocityPercent(e) {
                        return this.httpRequest.request({
                            method: "GET",
                            url: "/hamp/velocity",
                            headers: {
                                "X-Connection-Key": e
                            },
                            errors: {
                                400: "Bad request."
                            }
                        })
                    }
                    setHampVelocityPercent(e, t) {
                        return this.httpRequest.request({
                            method: "PUT",
                            url: "/hamp/velocity",
                            headers: {
                                "X-Connection-Key": e
                            },
                            body: t,
                            mediaType: "application/json",
                            errors: {
                                400: "Bad request."
                            }
                        })
                    }
                    getHampState(e) {
                        return this.httpRequest.request({
                            method: "GET",
                            url: "/hamp/state",
                            headers: {
                                "X-Connection-Key": e
                            },
                            errors: {
                                400: "Bad request."
                            }
                        })
                    }
                }
                class C {
                    constructor(e) {
                        s(this, "httpRequest", void 0),
                        this.httpRequest = e
                    }
                    nextPostionAbsVelocityAbs(e, t) {
                        return this.httpRequest.request({
                            method: "PUT",
                            url: "/hdsp/xava",
                            headers: {
                                "X-Connection-Key": e
                            },
                            body: t,
                            mediaType: "application/json",
                            errors: {
                                400: "Bad request."
                            }
                        })
                    }
                    nextPositionPercentVelocityAbsolute(e, t) {
                        return this.httpRequest.request({
                            method: "PUT",
                            url: "/hdsp/xpva",
                            headers: {
                                "X-Connection-Key": e
                            },
                            body: t,
                            mediaType: "application/json",
                            errors: {
                                400: "Bad request."
                            }
                        })
                    }
                    nextPositionPercentVelocityPercent(e, t) {
                        return this.httpRequest.request({
                            method: "PUT",
                            url: "/hdsp/xpvp",
                            headers: {
                                "X-Connection-Key": e
                            },
                            body: t,
                            mediaType: "application/json",
                            errors: {
                                400: "Bad request."
                            }
                        })
                    }
                    nextPositionAbsInTime(e, t) {
                        return this.httpRequest.request({
                            method: "PUT",
                            url: "/hdsp/xat",
                            headers: {
                                "X-Connection-Key": e
                            },
                            body: t,
                            mediaType: "application/json",
                            errors: {
                                400: "Bad request."
                            }
                        })
                    }
                    nextPositionPercentInTime(e, t) {
                        return this.httpRequest.request({
                            method: "PUT",
                            url: "/hdsp/xpt",
                            headers: {
                                "X-Connection-Key": e
                            },
                            body: t,
                            mediaType: "application/json",
                            errors: {
                                400: "Bad request."
                            }
                        })
                    }
                }
                class P {
                    constructor(e) {
                        s(this, "httpRequest", void 0),
                        this.httpRequest = e
                    }
                    play(e, t) {
                        return this.httpRequest.request({
                            method: "PUT",
                            url: "/hssp/play",
                            headers: {
                                "X-Connection-Key": e
                            },
                            body: t,
                            mediaType: "application/json",
                            errors: {
                                400: "Bad request."
                            }
                        })
                    }
                    hsspStop(e) {
                        return this.httpRequest.request({
                            method: "PUT",
                            url: "/hssp/stop",
                            headers: {
                                "X-Connection-Key": e
                            },
                            errors: {
                                400: "Bad request."
                            }
                        })
                    }
                    setup(e, t) {
                        return this.httpRequest.request({
                            method: "PUT",
                            url: "/hssp/setup",
                            headers: {
                                "X-Connection-Key": e
                            },
                            body: t,
                            mediaType: "application/json",
                            errors: {
                                400: "Bad request."
                            }
                        })
                    }
                    getLoopSetting(e) {
                        return this.httpRequest.request({
                            method: "GET",
                            url: "/hssp/loop",
                            headers: {
                                "X-Connection-Key": e
                            },
                            errors: {
                                400: "Bad request."
                            }
                        })
                    }
                    setLoopSetting(e, t) {
                        return this.httpRequest.request({
                            method: "PUT",
                            url: "/hssp/loop",
                            headers: {
                                "X-Connection-Key": e
                            },
                            body: t,
                            mediaType: "application/json",
                            errors: {
                                400: "Bad request."
                            }
                        })
                    }
                    getHsspState(e) {
                        return this.httpRequest.request({
                            method: "GET",
                            url: "/hssp/state",
                            headers: {
                                "X-Connection-Key": e
                            },
                            errors: {
                                400: "Bad request."
                            }
                        })
                    }
                }
                class T {
                    constructor(e) {
                        s(this, "httpRequest", void 0),
                        this.httpRequest = e
                    }
                    getDeviceTime(e) {
                        return this.httpRequest.request({
                            method: "GET",
                            url: "/hstp/time",
                            headers: {
                                "X-Connection-Key": e
                            },
                            errors: {
                                400: "Bad request."
                            }
                        })
                    }
                    getOffset(e) {
                        return this.httpRequest.request({
                            method: "GET",
                            url: "/hstp/offset",
                            headers: {
                                "X-Connection-Key": e
                            },
                            errors: {
                                400: "Bad request."
                            }
                        })
                    }
                    setOffset(e, t) {
                        return this.httpRequest.request({
                            method: "PUT",
                            url: "/hstp/offset",
                            headers: {
                                "X-Connection-Key": e
                            },
                            body: t,
                            mediaType: "application/json",
                            errors: {
                                400: "Bad request."
                            }
                        })
                    }
                    getRoundTripDelay(e) {
                        return this.httpRequest.request({
                            method: "GET",
                            url: "/hstp/rtd",
                            headers: {
                                "X-Connection-Key": e
                            },
                            errors: {
                                400: "Bad request."
                            }
                        })
                    }
                    sync(e, t, n) {
                        return this.httpRequest.request({
                            method: "GET",
                            url: "/hstp/sync",
                            headers: {
                                "X-Connection-Key": e
                            },
                            query: {
                                syncCount: t,
                                outliers: n
                            },
                            errors: {
                                400: "Bad request."
                            }
                        })
                    }
                }
                class x {
                    constructor(e) {
                        s(this, "httpRequest", void 0),
                        this.httpRequest = e
                    }
                    restart(e, t) {
                        return this.httpRequest.request({
                            method: "PUT",
                            url: "/maintenance/restart",
                            headers: {
                                "X-Connection-Key": e
                            },
                            body: t,
                            mediaType: "application/json",
                            errors: {
                                400: "Bad request."
                            }
                        })
                    }
                    updatePerformFw(e, t) {
                        return this.httpRequest.request({
                            method: "PUT",
                            url: "/maintenance/update/perform",
                            headers: {
                                "X-Connection-Key": e
                            },
                            body: t,
                            mediaType: "application/json",
                            errors: {
                                400: "Bad request."
                            }
                        })
                    }
                    getUpdateStatus(e) {
                        return this.httpRequest.request({
                            method: "GET",
                            url: "/maintenance/update/status",
                            headers: {
                                "X-Connection-Key": e
                            },
                            errors: {
                                400: "Bad request."
                            }
                        })
                    }
                }
                class R {
                    constructor(e) {
                        s(this, "httpRequest", void 0),
                        this.httpRequest = e
                    }
                    latest(e, t) {
                        return this.httpRequest.request({
                            method: "GET",
                            url: "/ota/latest",
                            query: {
                                model: e,
                                branch: t
                            },
                            errors: {
                                400: "Bad request."
                            }
                        })
                    }
                }
                class N {
                    constructor(e) {
                        s(this, "httpRequest", void 0),
                        this.httpRequest = e
                    }
                    getSlide(e) {
                        return this.httpRequest.request({
                            method: "GET",
                            url: "/slide",
                            headers: {
                                "X-Connection-Key": e
                            },
                            errors: {
                                400: "Bad request."
                            }
                        })
                    }
                    setSlide(e, t) {
                        return this.httpRequest.request({
                            method: "PUT",
                            url: "/slide",
                            headers: {
                                "X-Connection-Key": e
                            },
                            body: t,
                            mediaType: "application/json",
                            errors: {
                                400: "Bad request."
                            }
                        })
                    }
                    getPositionAbs(e) {
                        return this.httpRequest.request({
                            method: "GET",
                            url: "/slide/position/absolute",
                            headers: {
                                "X-Connection-Key": e
                            },
                            errors: {
                                400: "Bad request."
                            }
                        })
                    }
                }
                class O {
                    constructor(e) {
                        s(this, "httpRequest", void 0),
                        this.httpRequest = e
                    }
                    getServerTime() {
                        return this.httpRequest.request({
                            method: "GET",
                            url: "/servertime",
                            errors: {
                                400: "Bad request."
                            }
                        })
                    }
                }
                class A {
                    constructor(e) {
                        var t, n, r, o;
                        let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : S;
                        s(this, "base", void 0),
                        s(this, "hamp", void 0),
                        s(this, "hdsp", void 0),
                        s(this, "hssp", void 0),
                        s(this, "hstp", void 0),
                        s(this, "maintenance", void 0),
                        s(this, "ota", void 0),
                        s(this, "slide", void 0),
                        s(this, "timesync", void 0),
                        s(this, "request", void 0),
                        this.request = new a({
                            BASE: null !== (t = null === e || void 0 === e ? void 0 : e.BASE) && void 0 !== t ? t : "https://www.handyfeeling.com/api/handy/v2",
                            VERSION: null !== (n = null === e || void 0 === e ? void 0 : e.VERSION) && void 0 !== n ? n : "2.0.0-beta-3",
                            WITH_CREDENTIALS: null !== (r = null === e || void 0 === e ? void 0 : e.WITH_CREDENTIALS) && void 0 !== r && r,
                            CREDENTIALS: null !== (o = null === e || void 0 === e ? void 0 : e.CREDENTIALS) && void 0 !== o ? o : "include",
                            TOKEN: null === e || void 0 === e ? void 0 : e.TOKEN,
                            USERNAME: null === e || void 0 === e ? void 0 : e.USERNAME,
                            PASSWORD: null === e || void 0 === e ? void 0 : e.PASSWORD,
                            HEADERS: null === e || void 0 === e ? void 0 : e.HEADERS,
                            ENCODE_PATH: null === e || void 0 === e ? void 0 : e.ENCODE_PATH
                        }),
                        this.base = new E(this.request),
                        this.hamp = new k(this.request),
                        this.hdsp = new C(this.request),
                        this.hssp = new P(this.request),
                        this.hstp = new T(this.request),
                        this.maintenance = new x(this.request),
                        this.ota = new R(this.request),
                        this.slide = new N(this.request),
                        this.timesync = new O(this.request)
                    }
                }
                var D, I, L, M, U, H, j, z, q, F, B, V, W, K, G, $, Q, X, Y, Z, J, ee;
                e.BASEModeErrors = void 0,
                (D = e.BASEModeErrors || (e.BASEModeErrors = {}))[D.ERROR = 2e3] = "ERROR",
                D[D.INVALID_REQUEST = 2001] = "INVALID_REQUEST",
                D[D.METHOD_NOT_FOUND = 2002] = "METHOD_NOT_FOUND",
                e.Branch = void 0,
                (I = e.Branch || (e.Branch = {})).MASTER = "master",
                I.STAGING = "master-staging",
                e.FirmwareStatus = void 0,
                (L = e.FirmwareStatus || (e.FirmwareStatus = {}))[L.UP_TO_DATE = 0] = "UP_TO_DATE",
                L[L.UPDATE_REQUIRED = 1] = "UPDATE_REQUIRED",
                L[L.UPDATE_AVAILABLE = 2] = "UPDATE_AVAILABLE",
                e.GenericResult = void 0,
                (M = e.GenericResult || (e.GenericResult = {}))[M.SUCCESS = 0] = "SUCCESS",
                M[M.ERROR = -1] = "ERROR",
                e.HAMPModeErrors = void 0,
                (U = e.HAMPModeErrors || (e.HAMPModeErrors = {}))[U.ERROR = 3e3] = "ERROR",
                e.HAMPState = void 0,
                (H = e.HAMPState || (e.HAMPState = {}))[H.STOPPED = 1] = "STOPPED",
                H[H.MOVING = 2] = "MOVING",
                e.HDSPModeErrors = void 0,
                (j = e.HDSPModeErrors || (e.HDSPModeErrors = {}))[j.ERROR = 5e3] = "ERROR",
                e.HDSPResult = void 0,
                (z = e.HDSPResult || (e.HDSPResult = {}))[z.ERROR = -3] = "ERROR",
                z[z.SUCCESS_POSITION_REACHED = 0] = "SUCCESS_POSITION_REACHED",
                z[z.SUCCESS_POSITION_NOT_REACHED = 1] = "SUCCESS_POSITION_NOT_REACHED",
                z[z.SUCCES_ALREADY_AT_POSITION = 2] = "SUCCES_ALREADY_AT_POSITION",
                z[z.SUCCESS_INTERRTUPTED = 3] = "SUCCESS_INTERRTUPTED",
                e.HSSPModeErrors = void 0,
                (q = e.HSSPModeErrors || (e.HSSPModeErrors = {}))[q.ERROR = 4e3] = "ERROR",
                q[q.DOWNLOAD_FAILED = 4001] = "DOWNLOAD_FAILED",
                q[q.HASH_ERROR = 4002] = "HASH_ERROR",
                q[q.SYNC_REQUIRED = 4003] = "SYNC_REQUIRED",
                q[q.TOKEN_ERROR = 4004] = "TOKEN_ERROR",
                q[q.MAX_SCRIPT_SIZE_ERROR = 4005] = "MAX_SCRIPT_SIZE_ERROR",
                q[q.DEVICE_STORAGE_FULL_ERROR = 4006] = "DEVICE_STORAGE_FULL_ERROR",
                q[q.DEVICE_STORAGE_FREE_ERROR = 4007] = "DEVICE_STORAGE_FREE_ERROR",
                q[q.DEVICE_STORAGE_CLEAN_ERROR = 4008] = "DEVICE_STORAGE_CLEAN_ERROR",
                e.HSSPPlayResult = void 0,
                (F = e.HSSPPlayResult || (e.HSSPPlayResult = {}))[F.SUCCESS = 0] = "SUCCESS",
                F[F.ERROR = -1] = "ERROR",
                e.HSSPSetupResult = void 0,
                (B = e.HSSPSetupResult || (e.HSSPSetupResult = {}))[B.USING_CACHED = 0] = "USING_CACHED",
                B[B.DOWNLOADED = 1] = "DOWNLOADED",
                e.HSSPState = void 0,
                (V = e.HSSPState || (e.HSSPState = {}))[V.NEED_SYNC = 1] = "NEED_SYNC",
                V[V.NEED_SETUP = 2] = "NEED_SETUP",
                V[V.STOPPED = 3] = "STOPPED",
                V[V.PLAYING = 4] = "PLAYING",
                e.MAINTENANCEModeErrors = void 0,
                (W = e.MAINTENANCEModeErrors || (e.MAINTENANCEModeErrors = {}))[W.ERROR = 6e3] = "ERROR",
                W[W.RESTART_FAILED = 6001] = "RESTART_FAILED",
                e.Mode = void 0,
                (K = e.Mode || (e.Mode = {}))[K.HAMP = 0] = "HAMP",
                K[K.HSSP = 1] = "HSSP",
                K[K.HDSP = 2] = "HDSP",
                K[K.MAINTENANCE = 3] = "MAINTENANCE",
                K[K.HBSP = 4] = "HBSP",
                e.Model = void 0,
                (e.Model || (e.Model = {})).H01 = "H01",
                e.ModeUpdateResponse = void 0,
                G = e.ModeUpdateResponse || (e.ModeUpdateResponse = {}),
                ($ = G.result || (G.result = {}))[$.ERROR = -1] = "ERROR",
                $[$.SUCCESS_NEW_MODE = 0] = "SUCCESS_NEW_MODE",
                $[$.SUCCESS_SAME_MODE = 1] = "SUCCESS_SAME_MODE",
                e.SlideResult = void 0,
                (Q = e.SlideResult || (e.SlideResult = {}))[Q.ACCEPTED = 0] = "ACCEPTED",
                Q[Q.ACCEPTED_ROUNDED_DOWN = 1] = "ACCEPTED_ROUNDED_DOWN",
                Q[Q.ACCEPTED_ROUNDED_UP = 2] = "ACCEPTED_ROUNDED_UP",
                e.StateResult = void 0,
                (X = e.StateResult || (e.StateResult = {}))[X.ERROR = -1] = "ERROR",
                X[X.SUCCESS_NEW_STATE = 0] = "SUCCESS_NEW_STATE",
                X[X.SUCCESS_SAME_STATE = 1] = "SUCCESS_SAME_STATE",
                e.UpdateStatusResponse = void 0,
                Y = e.UpdateStatusResponse || (e.UpdateStatusResponse = {}),
                (Z = Y.status || (Y.status = {}))[Z.PENDING = 0] = "PENDING",
                Z[Z.IN_PROGRESS = 1] = "IN_PROGRESS",
                Z[Z.SUCCESS = 2] = "SUCCESS",
                Z[Z.FAILED = 3] = "FAILED",
                e.ConnectResult = void 0,
                (J = e.ConnectResult || (e.ConnectResult = {}))[J.NOT_CONNECTED = 0] = "NOT_CONNECTED",
                J[J.CONNECTED = 1] = "CONNECTED",
                e.Status = void 0,
                (ee = e.Status || (e.Status = {}))[ee.NOT_CONNECTED = 0] = "NOT_CONNECTED",
                ee[ee.CONNECTING = 1] = "CONNECTING",
                ee[ee.CONNECTION_FAILED = 2] = "CONNECTION_FAILED",
                ee[ee.CONNECTED = 3] = "CONNECTED",
                ee[ee.UPDATE = 4] = "UPDATE",
                ee[ee.DEPRECATED = 5] = "DEPRECATED",
                ee[ee.SETTING_SCRIPT = 6] = "SETTING_SCRIPT";
                let te = !1
                  , ne = [];
                const re = e=>{
                    const t = {
                        ...e,
                        callback: e.callback,
                        updateState: e.updateState,
                        timestamp: Date.now()
                    };
                    return t.skip ? oe(t) : (ne.push(t),
                    1 !== ne.length || te ? void 0 : ae())
                }
                  , oe = async e=>{
                    const {callback: {res: t, rej: n}, request: r, handy: o, updateState: a, noStateUpdate: i} = e;
                    try {
                        const n = await r();
                        if (le(n))
                            throw n.error;
                        if (o && !i)
                            if (a)
                                a(o, n);
                            else {
                                let t = n;
                                if ("result"in n) {
                                    const {result: e, ...r} = n;
                                    t = r
                                }
                                const r = o.getState()
                                  , a = e.sub ? {
                                    [e.sub]: {
                                        ...r[e.sub],
                                        ...t
                                    }
                                } : {
                                    ...t
                                };
                                o.updateState(a)
                            }
                        t(n)
                    } catch (e) {
                        n(e)
                    }
                }
                  , ae = async()=>{
                    te = !0;
                    const e = ie();
                    e ? (await oe(e),
                    te = !1,
                    ne = ne.filter((t=>{
                        let {request: n, handy: r} = t;
                        return n !== e.request || r !== e.handy
                    }
                    )),
                    ne.length && ae()) : te = !1
                }
                  , ie = ()=>{
                    const e = ne.sort(((e,t)=>e.timestamp - t.timestamp))
                      , t = [];
                    for (const n of e)
                        -1 === t.findIndex((e=>{
                            let {request: t, handy: r} = e;
                            return n.request === t && n.handy === r
                        }
                        )) && t.push(n);
                    return t[0]
                }
                  , le = e=>"error"in e
                  , se = t=>{
                    const n = t.getConfig()
                      , r = new A({
                        BASE: n.API
                    });
                    return {
                        get: {
                            mode: function(e) {
                                let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                                return new Promise(((o,a)=>{
                                    re({
                                        handy: t,
                                        noStateUpdate: n,
                                        request: ()=>r.base.getMode(e),
                                        callback: {
                                            res: o,
                                            rej: a
                                        }
                                    })
                                }
                                ))
                            },
                            connected: function(e) {
                                let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                                return new Promise(((o,a)=>{
                                    re({
                                        handy: t,
                                        noStateUpdate: n,
                                        request: ()=>r.base.isConnected(e),
                                        callback: {
                                            res: o,
                                            rej: a
                                        }
                                    })
                                }
                                ))
                            },
                            info: function(e) {
                                let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                                return new Promise(((o,a)=>{
                                    re({
                                        handy: t,
                                        noStateUpdate: n,
                                        sub: "info",
                                        request: ()=>r.base.getInfo(e),
                                        callback: {
                                            res: o,
                                            rej: a
                                        }
                                    })
                                }
                                ))
                            },
                            settings: function(e) {
                                let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                                return new Promise(((o,a)=>{
                                    re({
                                        handy: t,
                                        noStateUpdate: n,
                                        request: ()=>r.base.getSettings(e),
                                        updateState: (e,t)=>{
                                            e.updateState({
                                                slide: {
                                                    max: t.slideMax,
                                                    min: t.slideMin
                                                }
                                            })
                                        }
                                        ,
                                        callback: {
                                            res: o,
                                            rej: a
                                        }
                                    })
                                }
                                ))
                            },
                            status: function(n) {
                                let o = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                                return new Promise(((a,i)=>{
                                    re({
                                        handy: t,
                                        noStateUpdate: o,
                                        request: ()=>r.base.getStatus(n),
                                        updateState: (t,n)=>{
                                            let {mode: r, state: o} = n;
                                            const a = {
                                                mode: r
                                            };
                                            r === e.Mode.HSSP && (a.hssp = {
                                                state: o
                                            }),
                                            r === e.Mode.HAMP && (a.hamp = {
                                                state: o
                                            }),
                                            t.updateState(a)
                                        }
                                        ,
                                        callback: {
                                            res: a,
                                            rej: i
                                        }
                                    })
                                }
                                ))
                            },
                            slide: function(e) {
                                let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                                return new Promise(((o,a)=>{
                                    re({
                                        handy: t,
                                        noStateUpdate: n,
                                        sub: "slide",
                                        request: ()=>r.slide.getSlide(e),
                                        callback: {
                                            res: o,
                                            rej: a
                                        }
                                    })
                                }
                                ))
                            },
                            slidePositionAbsolute: function(e) {
                                let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                                return new Promise(((o,a)=>{
                                    re({
                                        handy: t,
                                        noStateUpdate: n,
                                        sub: "slide",
                                        request: ()=>r.slide.getPositionAbs(e),
                                        callback: {
                                            res: o,
                                            rej: a
                                        }
                                    })
                                }
                                ))
                            },
                            serverTime: ()=>new Promise(((e,t)=>{
                                re({
                                    request: ()=>r.timesync.getServerTime(),
                                    callback: {
                                        res: e,
                                        rej: t
                                    }
                                })
                            }
                            )),
                            HAMP: {
                                velocity: function(e) {
                                    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                                    return new Promise(((o,a)=>{
                                        re({
                                            handy: t,
                                            noStateUpdate: n,
                                            sub: "hamp",
                                            request: ()=>r.hamp.getHampVelocityPercent(e),
                                            callback: {
                                                res: o,
                                                rej: a
                                            }
                                        })
                                    }
                                    ))
                                },
                                state: function(e) {
                                    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                                    return new Promise(((o,a)=>{
                                        re({
                                            handy: t,
                                            noStateUpdate: n,
                                            sub: "hamp",
                                            request: ()=>r.hamp.getHampState(e),
                                            callback: {
                                                res: o,
                                                rej: a
                                            }
                                        })
                                    }
                                    ))
                                }
                            },
                            HDSP: {},
                            HSSP: {
                                state: function(e) {
                                    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                                    return new Promise(((o,a)=>{
                                        re({
                                            handy: t,
                                            noStateUpdate: n,
                                            sub: "hssp",
                                            request: ()=>r.hssp.getHsspState(e),
                                            callback: {
                                                res: o,
                                                rej: a
                                            }
                                        })
                                    }
                                    ))
                                },
                                loop: function(e) {
                                    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                                    return new Promise(((o,a)=>{
                                        re({
                                            handy: t,
                                            noStateUpdate: n,
                                            request: ()=>r.hssp.getLoopSetting(e),
                                            updateState: (e,t)=>{
                                                let {activated: n} = t;
                                                return e.updateState({
                                                    hssp: {
                                                        loop: n
                                                    }
                                                })
                                            }
                                            ,
                                            callback: {
                                                res: o,
                                                rej: a
                                            }
                                        })
                                    }
                                    ))
                                }
                            },
                            HSTP: {
                                time: function(e) {
                                    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                                    return new Promise(((o,a)=>{
                                        re({
                                            handy: t,
                                            noStateUpdate: n,
                                            sub: "hstp",
                                            request: ()=>r.hstp.getDeviceTime(e),
                                            callback: {
                                                res: o,
                                                rej: a
                                            }
                                        })
                                    }
                                    ))
                                },
                                offset: function(e) {
                                    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                                    return new Promise(((o,a)=>{
                                        re({
                                            handy: t,
                                            noStateUpdate: n,
                                            sub: "hstp",
                                            request: ()=>r.hstp.getOffset(e),
                                            callback: {
                                                res: o,
                                                rej: a
                                            }
                                        })
                                    }
                                    ))
                                },
                                rtd: function(e) {
                                    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                                    return new Promise(((o,a)=>{
                                        re({
                                            handy: t,
                                            noStateUpdate: n,
                                            sub: "hstp",
                                            request: ()=>r.hstp.getRoundTripDelay(e),
                                            callback: {
                                                res: o,
                                                rej: a
                                            }
                                        })
                                    }
                                    ))
                                },
                                sync: function(e, n, o) {
                                    let a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                                    return new Promise(((i,l)=>{
                                        re({
                                            handy: t,
                                            noStateUpdate: a,
                                            sub: "hstp",
                                            request: ()=>r.hstp.sync(e, n, o),
                                            callback: {
                                                res: i,
                                                rej: l
                                            }
                                        })
                                    }
                                    ))
                                }
                            },
                            MAINTENANCE: {
                                getUpdateStatus: e=>new Promise(((t,n)=>{
                                    re({
                                        request: ()=>r.maintenance.getUpdateStatus(e),
                                        callback: {
                                            res: t,
                                            rej: n
                                        }
                                    })
                                }
                                ))
                            },
                            OTA: {
                                latest: function(e, n) {
                                    let o = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                                    return new Promise(((a,i)=>{
                                        re({
                                            handy: t,
                                            noStateUpdate: o,
                                            sub: "ota",
                                            request: ()=>r.ota.latest(e, n),
                                            callback: {
                                                res: a,
                                                rej: i
                                            }
                                        })
                                    }
                                    ))
                                }
                            }
                        },
                        put: {
                            mode: (e,n)=>new Promise(((o,a)=>{
                                re({
                                    handy: t,
                                    request: ()=>r.base.setMode(e, n),
                                    callback: {
                                        res: o,
                                        rej: a
                                    }
                                })
                            }
                            )),
                            slide: (e,n)=>new Promise(((o,a)=>{
                                re({
                                    handy: t,
                                    request: ()=>r.slide.setSlide(e, n),
                                    callback: {
                                        res: o,
                                        rej: a
                                    }
                                })
                            }
                            )),
                            HAMP: {
                                start: e=>new Promise(((n,o)=>{
                                    re({
                                        handy: t,
                                        request: ()=>r.hamp.start(e),
                                        callback: {
                                            res: n,
                                            rej: o
                                        }
                                    })
                                }
                                )),
                                stop: e=>new Promise(((n,o)=>{
                                    re({
                                        handy: t,
                                        request: ()=>r.hamp.hampStop(e),
                                        callback: {
                                            res: n,
                                            rej: o
                                        }
                                    })
                                }
                                )),
                                velocity: (e,n)=>new Promise(((o,a)=>{
                                    re({
                                        handy: t,
                                        request: ()=>r.hamp.setHampVelocityPercent(e, n),
                                        callback: {
                                            res: o,
                                            rej: a
                                        }
                                    })
                                }
                                ))
                            },
                            HDSP: {
                                xava: (e,n)=>new Promise(((o,a)=>{
                                    re({
                                        handy: t,
                                        request: ()=>r.hdsp.nextPostionAbsVelocityAbs(e, n),
                                        callback: {
                                            res: o,
                                            rej: a
                                        }
                                    })
                                }
                                )),
                                xpva: (e,n)=>new Promise(((o,a)=>{
                                    re({
                                        handy: t,
                                        request: ()=>r.hdsp.nextPositionPercentVelocityAbsolute(e, n),
                                        callback: {
                                            res: o,
                                            rej: a
                                        }
                                    })
                                }
                                )),
                                xpvp: (e,n)=>new Promise(((o,a)=>{
                                    re({
                                        handy: t,
                                        request: ()=>r.hdsp.nextPositionPercentVelocityPercent(e, n),
                                        callback: {
                                            res: o,
                                            rej: a
                                        }
                                    })
                                }
                                )),
                                xat: (e,n)=>new Promise(((o,a)=>{
                                    re({
                                        handy: t,
                                        request: ()=>r.hdsp.nextPositionAbsInTime(e, n),
                                        callback: {
                                            res: o,
                                            rej: a
                                        }
                                    })
                                }
                                )),
                                xpt: (e,n)=>new Promise(((o,a)=>{
                                    re({
                                        handy: t,
                                        request: ()=>r.hdsp.nextPositionPercentInTime(e, n),
                                        callback: {
                                            res: o,
                                            rej: a
                                        }
                                    })
                                }
                                ))
                            },
                            HSSP: {
                                loop: (e,n)=>new Promise(((o,a)=>{
                                    re({
                                        handy: t,
                                        request: ()=>r.hssp.setLoopSetting(e, n),
                                        callback: {
                                            res: o,
                                            rej: a
                                        }
                                    })
                                }
                                )),
                                play: (e,n)=>new Promise(((o,a)=>{
                                    re({
                                        handy: t,
                                        skip: !0,
                                        request: ()=>r.hssp.play(e, n),
                                        callback: {
                                            res: o,
                                            rej: a
                                        }
                                    })
                                }
                                )),
                                stop: e=>new Promise(((n,o)=>{
                                    re({
                                        handy: t,
                                        request: ()=>r.hssp.hsspStop(e),
                                        callback: {
                                            res: n,
                                            rej: o
                                        }
                                    })
                                }
                                )),
                                setup: (e,n)=>new Promise(((o,a)=>{
                                    re({
                                        handy: t,
                                        request: ()=>r.hssp.setup(e, n),
                                        callback: {
                                            res: o,
                                            rej: a
                                        }
                                    })
                                }
                                ))
                            },
                            HSTP: {
                                offset: (e,n)=>new Promise(((o,a)=>{
                                    re({
                                        handy: t,
                                        request: ()=>r.hstp.setOffset(e, n),
                                        callback: {
                                            res: o,
                                            rej: a
                                        }
                                    })
                                }
                                ))
                            },
                            MAINTENANCE: {
                                restart: (e,n)=>new Promise(((o,a)=>{
                                    re({
                                        handy: t,
                                        request: ()=>r.maintenance.restart(e, n),
                                        callback: {
                                            res: o,
                                            rej: a
                                        }
                                    })
                                }
                                )),
                                updatePerformFw: (e,n)=>new Promise(((o,a)=>{
                                    re({
                                        handy: t,
                                        request: ()=>r.maintenance.updatePerformFw(e, n),
                                        callback: {
                                            res: o,
                                            rej: a
                                        }
                                    })
                                }
                                ))
                            }
                        }
                    }
                }
                ;
                class ue extends Error {
                    constructor(e) {
                        super(e),
                        this.name = "HandyError"
                    }
                }
                var ce, de, fe, pe, he, me = {}, ye = [], ge = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
                function ve(e, t) {
                    for (var n in t)
                        e[n] = t[n];
                    return e
                }
                function be(e) {
                    var t = e.parentNode;
                    t && t.removeChild(e)
                }
                function we(e, t, n, r, o) {
                    var a = {
                        type: e,
                        props: t,
                        key: n,
                        ref: r,
                        __k: null,
                        __: null,
                        __b: 0,
                        __e: null,
                        __d: void 0,
                        __c: null,
                        __h: null,
                        constructor: void 0,
                        __v: null == o ? ++fe : o
                    };
                    return null == o && null != de.vnode && de.vnode(a),
                    a
                }
                function _e(e) {
                    return e.children
                }
                function Se(e, t) {
                    this.props = e,
                    this.context = t
                }
                function Ee(e, t) {
                    if (null == t)
                        return e.__ ? Ee(e.__, e.__.__k.indexOf(e) + 1) : null;
                    for (var n; t < e.__k.length; t++)
                        if (null != (n = e.__k[t]) && null != n.__e)
                            return n.__e;
                    return "function" == typeof e.type ? Ee(e) : null
                }
                function ke(e) {
                    var t, n;
                    if (null != (e = e.__) && null != e.__c) {
                        for (e.__e = e.__c.base = null,
                        t = 0; t < e.__k.length; t++)
                            if (null != (n = e.__k[t]) && null != n.__e) {
                                e.__e = e.__c.base = n.__e;
                                break
                            }
                        return ke(e)
                    }
                }
                function Ce(e) {
                    (!e.__d && (e.__d = !0) && pe.push(e) && !Pe.__r++ || he !== de.debounceRendering) && ((he = de.debounceRendering) || setTimeout)(Pe)
                }
                function Pe() {
                    for (var e; Pe.__r = pe.length; )
                        e = pe.sort((function(e, t) {
                            return e.__v.__b - t.__v.__b
                        }
                        )),
                        pe = [],
                        e.some((function(e) {
                            var t, n, r, o, a, i;
                            e.__d && (a = (o = (t = e).__v).__e,
                            (i = t.__P) && (n = [],
                            (r = ve({}, o)).__v = o.__v + 1,
                            Ie(i, o, r, t.__n, void 0 !== i.ownerSVGElement, null != o.__h ? [a] : null, n, null == a ? Ee(o) : a, o.__h),
                            Le(n, o),
                            o.__e != a && ke(o)))
                        }
                        ))
                }
                function Te(e, t, n, r, o, a, i, l, s, u) {
                    var c, d, f, p, h, m, y, g = r && r.__k || ye, v = g.length;
                    for (n.__k = [],
                    c = 0; c < t.length; c++)
                        if (null != (p = n.__k[c] = null == (p = t[c]) || "boolean" == typeof p ? null : "string" == typeof p || "number" == typeof p || "bigint" == typeof p ? we(null, p, null, null, p) : Array.isArray(p) ? we(_e, {
                            children: p
                        }, null, null, null) : p.__b > 0 ? we(p.type, p.props, p.key, p.ref ? p.ref : null, p.__v) : p)) {
                            if (p.__ = n,
                            p.__b = n.__b + 1,
                            null === (f = g[c]) || f && p.key == f.key && p.type === f.type)
                                g[c] = void 0;
                            else
                                for (d = 0; d < v; d++) {
                                    if ((f = g[d]) && p.key == f.key && p.type === f.type) {
                                        g[d] = void 0;
                                        break
                                    }
                                    f = null
                                }
                            Ie(e, p, f = f || me, o, a, i, l, s, u),
                            h = p.__e,
                            (d = p.ref) && f.ref != d && (y || (y = []),
                            f.ref && y.push(f.ref, null, p),
                            y.push(d, p.__c || h, p)),
                            null != h ? (null == m && (m = h),
                            "function" == typeof p.type && p.__k === f.__k ? p.__d = s = xe(p, s, e) : s = Re(e, p, f, g, h, s),
                            "function" == typeof n.type && (n.__d = s)) : s && f.__e == s && s.parentNode != e && (s = Ee(f))
                        }
                    for (n.__e = m,
                    c = v; c--; )
                        null != g[c] && He(g[c], g[c]);
                    if (y)
                        for (c = 0; c < y.length; c++)
                            Ue(y[c], y[++c], y[++c])
                }
                function xe(e, t, n) {
                    for (var r, o = e.__k, a = 0; o && a < o.length; a++)
                        (r = o[a]) && (r.__ = e,
                        t = "function" == typeof r.type ? xe(r, t, n) : Re(n, r, r, o, r.__e, t));
                    return t
                }
                function Re(e, t, n, r, o, a) {
                    var i, l, s;
                    if (void 0 !== t.__d)
                        i = t.__d,
                        t.__d = void 0;
                    else if (null == n || o != a || null == o.parentNode)
                        e: if (null == a || a.parentNode !== e)
                            e.appendChild(o),
                            i = null;
                        else {
                            for (l = a,
                            s = 0; (l = l.nextSibling) && s < r.length; s += 2)
                                if (l == o)
                                    break e;
                            e.insertBefore(o, a),
                            i = a
                        }
                    return void 0 !== i ? i : o.nextSibling
                }
                function Ne(e, t, n) {
                    "-" === t[0] ? e.setProperty(t, n) : e[t] = null == n ? "" : "number" != typeof n || ge.test(t) ? n : n + "px"
                }
                function Oe(e, t, n, r, o) {
                    var a;
                    e: if ("style" === t)
                        if ("string" == typeof n)
                            e.style.cssText = n;
                        else {
                            if ("string" == typeof r && (e.style.cssText = r = ""),
                            r)
                                for (t in r)
                                    n && t in n || Ne(e.style, t, "");
                            if (n)
                                for (t in n)
                                    r && n[t] === r[t] || Ne(e.style, t, n[t])
                        }
                    else if ("o" === t[0] && "n" === t[1])
                        a = t !== (t = t.replace(/Capture$/, "")),
                        t = t.toLowerCase()in e ? t.toLowerCase().slice(2) : t.slice(2),
                        e.l || (e.l = {}),
                        e.l[t + a] = n,
                        n ? r || e.addEventListener(t, a ? De : Ae, a) : e.removeEventListener(t, a ? De : Ae, a);
                    else if ("dangerouslySetInnerHTML" !== t) {
                        if (o)
                            t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
                        else if ("href" !== t && "list" !== t && "form" !== t && "tabIndex" !== t && "download" !== t && t in e)
                            try {
                                e[t] = null == n ? "" : n;
                                break e
                            } catch (e) {}
                        "function" == typeof n || (null == n || !1 === n && -1 == t.indexOf("-") ? e.removeAttribute(t) : e.setAttribute(t, n))
                    }
                }
                function Ae(e) {
                    this.l[e.type + !1](de.event ? de.event(e) : e)
                }
                function De(e) {
                    this.l[e.type + !0](de.event ? de.event(e) : e)
                }
                function Ie(e, t, n, r, o, a, i, l, s) {
                    var u, c, d, f, p, h, m, y, g, v, b, w, _, S, E, k = t.type;
                    if (void 0 !== t.constructor)
                        return null;
                    null != n.__h && (s = n.__h,
                    l = t.__e = n.__e,
                    t.__h = null,
                    a = [l]),
                    (u = de.__b) && u(t);
                    try {
                        e: if ("function" == typeof k) {
                            if (y = t.props,
                            g = (u = k.contextType) && r[u.__c],
                            v = u ? g ? g.props.value : u.__ : r,
                            n.__c ? m = (c = t.__c = n.__c).__ = c.__E : ("prototype"in k && k.prototype.render ? t.__c = c = new k(y,v) : (t.__c = c = new Se(y,v),
                            c.constructor = k,
                            c.render = je),
                            g && g.sub(c),
                            c.props = y,
                            c.state || (c.state = {}),
                            c.context = v,
                            c.__n = r,
                            d = c.__d = !0,
                            c.__h = [],
                            c._sb = []),
                            null == c.__s && (c.__s = c.state),
                            null != k.getDerivedStateFromProps && (c.__s == c.state && (c.__s = ve({}, c.__s)),
                            ve(c.__s, k.getDerivedStateFromProps(y, c.__s))),
                            f = c.props,
                            p = c.state,
                            d)
                                null == k.getDerivedStateFromProps && null != c.componentWillMount && c.componentWillMount(),
                                null != c.componentDidMount && c.__h.push(c.componentDidMount);
                            else {
                                if (null == k.getDerivedStateFromProps && y !== f && null != c.componentWillReceiveProps && c.componentWillReceiveProps(y, v),
                                !c.__e && null != c.shouldComponentUpdate && !1 === c.shouldComponentUpdate(y, c.__s, v) || t.__v === n.__v) {
                                    for (c.props = y,
                                    c.state = c.__s,
                                    t.__v !== n.__v && (c.__d = !1),
                                    c.__v = t,
                                    t.__e = n.__e,
                                    t.__k = n.__k,
                                    t.__k.forEach((function(e) {
                                        e && (e.__ = t)
                                    }
                                    )),
                                    b = 0; b < c._sb.length; b++)
                                        c.__h.push(c._sb[b]);
                                    c._sb = [],
                                    c.__h.length && i.push(c);
                                    break e
                                }
                                null != c.componentWillUpdate && c.componentWillUpdate(y, c.__s, v),
                                null != c.componentDidUpdate && c.__h.push((function() {
                                    c.componentDidUpdate(f, p, h)
                                }
                                ))
                            }
                            if (c.context = v,
                            c.props = y,
                            c.__v = t,
                            c.__P = e,
                            w = de.__r,
                            _ = 0,
                            "prototype"in k && k.prototype.render) {
                                for (c.state = c.__s,
                                c.__d = !1,
                                w && w(t),
                                u = c.render(c.props, c.state, c.context),
                                S = 0; S < c._sb.length; S++)
                                    c.__h.push(c._sb[S]);
                                c._sb = []
                            } else
                                do {
                                    c.__d = !1,
                                    w && w(t),
                                    u = c.render(c.props, c.state, c.context),
                                    c.state = c.__s
                                } while (c.__d && ++_ < 25);
                            c.state = c.__s,
                            null != c.getChildContext && (r = ve(ve({}, r), c.getChildContext())),
                            d || null == c.getSnapshotBeforeUpdate || (h = c.getSnapshotBeforeUpdate(f, p)),
                            E = null != u && u.type === _e && null == u.key ? u.props.children : u,
                            Te(e, Array.isArray(E) ? E : [E], t, n, r, o, a, i, l, s),
                            c.base = t.__e,
                            t.__h = null,
                            c.__h.length && i.push(c),
                            m && (c.__E = c.__ = null),
                            c.__e = !1
                        } else
                            null == a && t.__v === n.__v ? (t.__k = n.__k,
                            t.__e = n.__e) : t.__e = Me(n.__e, t, n, r, o, a, i, s);
                        (u = de.diffed) && u(t)
                    } catch (e) {
                        t.__v = null,
                        (s || null != a) && (t.__e = l,
                        t.__h = !!s,
                        a[a.indexOf(l)] = null),
                        de.__e(e, t, n)
                    }
                }
                function Le(e, t) {
                    de.__c && de.__c(t, e),
                    e.some((function(t) {
                        try {
                            e = t.__h,
                            t.__h = [],
                            e.some((function(e) {
                                e.call(t)
                            }
                            ))
                        } catch (e) {
                            de.__e(e, t.__v)
                        }
                    }
                    ))
                }
                function Me(e, t, n, r, o, a, i, l) {
                    var s, u, c, d = n.props, f = t.props, p = t.type, h = 0;
                    if ("svg" === p && (o = !0),
                    null != a)
                        for (; h < a.length; h++)
                            if ((s = a[h]) && "setAttribute"in s == !!p && (p ? s.localName === p : 3 === s.nodeType)) {
                                e = s,
                                a[h] = null;
                                break
                            }
                    if (null == e) {
                        if (null === p)
                            return document.createTextNode(f);
                        e = o ? document.createElementNS("http://www.w3.org/2000/svg", p) : document.createElement(p, f.is && f),
                        a = null,
                        l = !1
                    }
                    if (null === p)
                        d === f || l && e.data === f || (e.data = f);
                    else {
                        if (a = a && ce.call(e.childNodes),
                        u = (d = n.props || me).dangerouslySetInnerHTML,
                        c = f.dangerouslySetInnerHTML,
                        !l) {
                            if (null != a)
                                for (d = {},
                                h = 0; h < e.attributes.length; h++)
                                    d[e.attributes[h].name] = e.attributes[h].value;
                            (c || u) && (c && (u && c.__html == u.__html || c.__html === e.innerHTML) || (e.innerHTML = c && c.__html || ""))
                        }
                        if (function(e, t, n, r, o) {
                            var a;
                            for (a in n)
                                "children" === a || "key" === a || a in t || Oe(e, a, null, n[a], r);
                            for (a in t)
                                o && "function" != typeof t[a] || "children" === a || "key" === a || "value" === a || "checked" === a || n[a] === t[a] || Oe(e, a, t[a], n[a], r)
                        }(e, f, d, o, l),
                        c)
                            t.__k = [];
                        else if (h = t.props.children,
                        Te(e, Array.isArray(h) ? h : [h], t, n, r, o && "foreignObject" !== p, a, i, a ? a[0] : n.__k && Ee(n, 0), l),
                        null != a)
                            for (h = a.length; h--; )
                                null != a[h] && be(a[h]);
                        l || ("value"in f && void 0 !== (h = f.value) && (h !== e.value || "progress" === p && !h || "option" === p && h !== d.value) && Oe(e, "value", h, d.value, !1),
                        "checked"in f && void 0 !== (h = f.checked) && h !== e.checked && Oe(e, "checked", h, d.checked, !1))
                    }
                    return e
                }
                function Ue(e, t, n) {
                    try {
                        "function" == typeof e ? e(t) : e.current = t
                    } catch (e) {
                        de.__e(e, n)
                    }
                }
                function He(e, t, n) {
                    var r, o;
                    if (de.unmount && de.unmount(e),
                    (r = e.ref) && (r.current && r.current !== e.__e || Ue(r, null, t)),
                    null != (r = e.__c)) {
                        if (r.componentWillUnmount)
                            try {
                                r.componentWillUnmount()
                            } catch (e) {
                                de.__e(e, t)
                            }
                        r.base = r.__P = null,
                        e.__c = void 0
                    }
                    if (r = e.__k)
                        for (o = 0; o < r.length; o++)
                            r[o] && He(r[o], t, n || "function" != typeof e.type);
                    n || null == e.__e || be(e.__e),
                    e.__ = e.__e = e.__d = void 0
                }
                function je(e, t, n) {
                    return this.constructor(e, n)
                }
                function ze(e, t, n) {
                    var r, o, a;
                    de.__ && de.__(e, t),
                    o = (r = "function" == typeof n) ? null : n && n.__k || t.__k,
                    a = [],
                    Ie(t, e = (!r && n || t).__k = function(e, t, n) {
                        var r, o, a, i = {};
                        for (a in t)
                            "key" == a ? r = t[a] : "ref" == a ? o = t[a] : i[a] = t[a];
                        if (arguments.length > 2 && (i.children = arguments.length > 3 ? ce.call(arguments, 2) : n),
                        "function" == typeof e && null != e.defaultProps)
                            for (a in e.defaultProps)
                                void 0 === i[a] && (i[a] = e.defaultProps[a]);
                        return we(e, i, r, o, null)
                    }(_e, null, [e]), o || me, me, void 0 !== t.ownerSVGElement, !r && n ? [n] : o ? null : t.firstChild ? ce.call(t.childNodes) : null, a, !r && n ? n : o ? o.__e : t.firstChild, r),
                    Le(a, e)
                }
                ce = ye.slice,
                de = {
                    __e: function(e, t, n, r) {
                        for (var o, a, i; t = t.__; )
                            if ((o = t.__c) && !o.__)
                                try {
                                    if ((a = o.constructor) && null != a.getDerivedStateFromError && (o.setState(a.getDerivedStateFromError(e)),
                                    i = o.__d),
                                    null != o.componentDidCatch && (o.componentDidCatch(e, r || {}),
                                    i = o.__d),
                                    i)
                                        return o.__E = o
                                } catch (t) {
                                    e = t
                                }
                        throw e
                    }
                },
                fe = 0,
                Se.prototype.setState = function(e, t) {
                    var n;
                    n = null != this.__s && this.__s !== this.state ? this.__s : this.__s = ve({}, this.state),
                    "function" == typeof e && (e = e(ve({}, n), this.props)),
                    e && ve(n, e),
                    null != e && this.__v && (t && this._sb.push(t),
                    Ce(this))
                }
                ,
                Se.prototype.forceUpdate = function(e) {
                    this.__v && (this.__e = !0,
                    e && this.__h.push(e),
                    Ce(this))
                }
                ,
                Se.prototype.render = _e,
                pe = [],
                Pe.__r = 0;
                var qe = 0;
                function Fe(e, t, n, r, o) {
                    var a, i, l = {};
                    for (i in t)
                        "ref" == i ? a = t[i] : l[i] = t[i];
                    var s = {
                        type: e,
                        props: l,
                        key: n,
                        ref: a,
                        __k: null,
                        __: null,
                        __b: 0,
                        __e: null,
                        __d: void 0,
                        __c: null,
                        __h: null,
                        constructor: void 0,
                        __v: --qe,
                        __source: o,
                        __self: r
                    };
                    if ("function" == typeof e && (a = e.defaultProps))
                        for (i in a)
                            void 0 === l[i] && (l[i] = a[i]);
                    return de.vnode && de.vnode(s),
                    s
                }
                var Be, Ve, We, Ke, Ge = 0, $e = [], Qe = [], Xe = de.__b, Ye = de.__r, Ze = de.diffed, Je = de.__c, et = de.unmount;
                function tt(e, t) {
                    de.__h && de.__h(Ve, e, Ge || t),
                    Ge = 0;
                    var n = Ve.__H || (Ve.__H = {
                        __: [],
                        __h: []
                    });
                    return e >= n.__.length && n.__.push({
                        __V: Qe
                    }),
                    n.__[e]
                }
                function nt(e) {
                    return Ge = 1,
                    function(e, t, n) {
                        var r = tt(Be++, 2);
                        if (r.t = e,
                        !r.__c && (r.__ = [n ? n(t) : ft(void 0, t), function(e) {
                            var t = r.__N ? r.__N[0] : r.__[0]
                              , n = r.t(t, e);
                            t !== n && (r.__N = [n, r.__[1]],
                            r.__c.setState({}))
                        }
                        ],
                        r.__c = Ve,
                        !Ve.u)) {
                            Ve.u = !0;
                            var o = Ve.shouldComponentUpdate;
                            Ve.shouldComponentUpdate = function(e, t, n) {
                                if (!r.__c.__H)
                                    return !0;
                                var a = r.__c.__H.__.filter((function(e) {
                                    return e.__c
                                }
                                ));
                                if (a.every((function(e) {
                                    return !e.__N
                                }
                                )))
                                    return !o || o.call(this, e, t, n);
                                var i = !1;
                                return a.forEach((function(e) {
                                    if (e.__N) {
                                        var t = e.__[0];
                                        e.__ = e.__N,
                                        e.__N = void 0,
                                        t !== e.__[0] && (i = !0)
                                    }
                                }
                                )),
                                !(!i && r.__c.props === e) && (!o || o.call(this, e, t, n))
                            }
                        }
                        return r.__N || r.__
                    }(ft, e)
                }
                function rt(e, t) {
                    var n = tt(Be++, 3);
                    !de.__s && dt(n.__H, t) && (n.__ = e,
                    n.i = t,
                    Ve.__H.__h.push(n))
                }
                function ot(e) {
                    return Ge = 5,
                    at((function() {
                        return {
                            current: e
                        }
                    }
                    ), [])
                }
                function at(e, t) {
                    var n = tt(Be++, 7);
                    return dt(n.__H, t) ? (n.__V = e(),
                    n.i = t,
                    n.__h = e,
                    n.__V) : n.__
                }
                function it() {
                    for (var e; e = $e.shift(); )
                        if (e.__P && e.__H)
                            try {
                                e.__H.__h.forEach(ut),
                                e.__H.__h.forEach(ct),
                                e.__H.__h = []
                            } catch (t) {
                                e.__H.__h = [],
                                de.__e(t, e.__v)
                            }
                }
                de.__b = function(e) {
                    "function" != typeof e.type || e.__m || null === e.__ ? e.__m || (e.__m = e.__ && e.__.__m ? e.__.__m : "") : e.__m = (e.__ && e.__.__m ? e.__.__m : "") + (e.__ && e.__.__k ? e.__.__k.indexOf(e) : 0),
                    Ve = null,
                    Xe && Xe(e)
                }
                ,
                de.__r = function(e) {
                    Ye && Ye(e),
                    Be = 0;
                    var t = (Ve = e.__c).__H;
                    t && (We === Ve ? (t.__h = [],
                    Ve.__h = [],
                    t.__.forEach((function(e) {
                        e.__N && (e.__ = e.__N),
                        e.__V = Qe,
                        e.__N = e.i = void 0
                    }
                    ))) : (t.__h.forEach(ut),
                    t.__h.forEach(ct),
                    t.__h = [])),
                    We = Ve
                }
                ,
                de.diffed = function(e) {
                    Ze && Ze(e);
                    var t = e.__c;
                    t && t.__H && (t.__H.__h.length && (1 !== $e.push(t) && Ke === de.requestAnimationFrame || ((Ke = de.requestAnimationFrame) || st)(it)),
                    t.__H.__.forEach((function(e) {
                        e.i && (e.__H = e.i),
                        e.__V !== Qe && (e.__ = e.__V),
                        e.i = void 0,
                        e.__V = Qe
                    }
                    ))),
                    We = Ve = null
                }
                ,
                de.__c = function(e, t) {
                    t.some((function(e) {
                        try {
                            e.__h.forEach(ut),
                            e.__h = e.__h.filter((function(e) {
                                return !e.__ || ct(e)
                            }
                            ))
                        } catch (n) {
                            t.some((function(e) {
                                e.__h && (e.__h = [])
                            }
                            )),
                            t = [],
                            de.__e(n, e.__v)
                        }
                    }
                    )),
                    Je && Je(e, t)
                }
                ,
                de.unmount = function(e) {
                    et && et(e);
                    var t, n = e.__c;
                    n && n.__H && (n.__H.__.forEach((function(e) {
                        try {
                            ut(e)
                        } catch (e) {
                            t = e
                        }
                    }
                    )),
                    n.__H = void 0,
                    t && de.__e(t, n.__v))
                }
                ;
                var lt = "function" == typeof requestAnimationFrame;
                function st(e) {
                    var t, n = function() {
                        clearTimeout(r),
                        lt && cancelAnimationFrame(t),
                        setTimeout(e)
                    }, r = setTimeout(n, 100);
                    lt && (t = requestAnimationFrame(n))
                }
                function ut(e) {
                    var t = Ve
                      , n = e.__c;
                    "function" == typeof n && (e.__c = void 0,
                    n()),
                    Ve = t
                }
                function ct(e) {
                    var t = Ve;
                    e.__c = e.__(),
                    Ve = t
                }
                function dt(e, t) {
                    return !e || e.length !== t.length || t.some((function(t, n) {
                        return t !== e[n]
                    }
                    ))
                }
                function ft(e, t) {
                    return "function" == typeof t ? t(e) : t
                }
                var pt = {
                    exports: {}
                }
                  , ht = {};
                function mt(e) {
                    function t(t, o, a, i) {
                        var l = o ? n + t + e.e + o : n + t
                          , s = l;
                        if (a) {
                            var u = " " + s + e.m;
                            for (var c in a)
                                if (a.hasOwnProperty(c)) {
                                    var d = a[c];
                                    !0 === d ? s += u + c : d && (s += u + c + r + d)
                                }
                        }
                        if (void 0 !== i)
                            for (var f = 0, p = i.length; f < p; f++) {
                                var h = i[f];
                                if (h && "string" == typeof h.valueOf())
                                    for (var m = h.valueOf().split(" "), y = 0; y < m.length; y++) {
                                        var g = m[y];
                                        g !== l && (s += " " + g)
                                    }
                            }
                        return s
                    }
                    var n = e.n || ""
                      , r = e.v || e.m;
                    return function(e, n) {
                        return function(r, o, a) {
                            return "string" == typeof r ? Array.isArray(o) ? t(e, r, void 0, o) : t(e, r, o, a) : t(e, n, r, o)
                        }
                    }
                }
                Object.defineProperty(ht, "__esModule", {
                    value: !0
                });
                var yt = mt({
                    e: "-",
                    m: "_"
                });
                ht.cn = yt,
                ht.withNaming = mt,
                function(e) {
                    e.exports = ht
                }(pt);
                var gt = []
                  , vt = [];
                !function(e, t) {
                    if (e && "undefined" != typeof document) {
                        var n, r = !0 === t.prepend ? "prepend" : "append", o = !0 === t.singleTag, a = "string" == typeof t.container ? document.querySelector(t.container) : document.getElementsByTagName("head")[0];
                        if (o) {
                            var i = gt.indexOf(a);
                            -1 === i && (i = gt.push(a) - 1,
                            vt[i] = {}),
                            n = vt[i] && vt[i][r] ? vt[i][r] : vt[i][r] = l()
                        } else
                            n = l();
                        65279 === e.charCodeAt(0) && (e = e.substring(1)),
                        n.styleSheet ? n.styleSheet.cssText += e : n.appendChild(document.createTextNode(e))
                    }
                    function l() {
                        var e = document.createElement("style");
                        if (e.setAttribute("type", "text/css"),
                        t.attributes)
                            for (var n = Object.keys(t.attributes), o = 0; o < n.length; o++)
                                e.setAttribute(n[o], t.attributes[n[o]]);
                        var i = "prepend" === r ? "afterbegin" : "beforeend";
                        return a.insertAdjacentElement(i, e),
                        e
                    }
                }('@import url("https://fonts.googleapis.com/css2?family=Hind:wght@500;700&display=swap");\n.uui {\n  position: relative;\n  display: inline-block;\n  --width: 180px;\n  --arrow-offset: calc(var(--width) / 2 - $arrow-width - $error-border-width);\n}\n.uui--default {\n  --button-background: #5b5e4d;\n  --button-background-hover: #4e5042;\n  --popup-background: #5b5e4d;\n}\n.uui--dark {\n  --button-background: #5c5c5c;\n  --button-background-hover: #484848;\n  --popup-background: #5c5c5c;\n}\n.uui--deprecated {\n  --popup-background: #b0813c;\n}\n.uui--compact {\n  --width: 80px;\n}\n.uui--slim .uui__button {\n  height: 40px;\n}\n.uui__button {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0 15px;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n  background: var(--button-background);\n  color: #ffffff;\n  font-family: "Hind", sans-serif;\n  transition: background 0.3s;\n  width: var(--width);\n}\n.uui__button:focus {\n  outline: none;\n}\n.uui__button:hover {\n  background: var(--button-background-hover);\n  transition: background 0.3s;\n}\n.uui__button-status {\n  height: 10px;\n  width: 10px;\n  border-radius: 50%;\n  transition: background 0.5s;\n}\n.uui__button-status--green {\n  background: #bff69a;\n  transform: scale(1);\n  animation: handy-status-pulse 3s infinite;\n}\n.uui__button-status--blue {\n  background: #5a7cff;\n}\n.uui__button-status--orange {\n  background: #f7a74f;\n}\n.uui__button-status--red {\n  background: #dc3832;\n}\n.uui__button-icon {\n  height: 50px;\n  position: relative;\n  top: 3px;\n}\n.uui__button-text {\n  flex-grow: 1;\n}\n.uui__popup {\n  position: absolute;\n  z-index: 9999;\n  visibility: visible;\n  opacity: 1;\n  transition: visibility 0.3s, opacity 0.3s;\n}\n.uui__popup--hidden {\n  visibility: hidden;\n  opacity: 0;\n  transition: visibility 0.3s, opacity 0.3s;\n}\n.uui__popup-arrow {\n  position: relative;\n  border-width: 10px;\n  border-style: solid;\n  border-color: transparent transparent var(--popup-background);\n}\n.uui__popup-content {\n  border-radius: 5px;\n  overflow: hidden;\n  position: absolute;\n  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25), 0 8px 16px -8px rgba(0, 0, 0, 0.3);\n  background: var(--popup-background);\n}\n.uui__popup-content iframe {\n  border: none;\n  width: 100%;\n  height: 100%;\n}\n.uui__popup-offline {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  color: #ffffff;\n  font-family: "Hind", sans-serif;\n  padding: 0 15px;\n  text-align: center;\n}\n.uui__popup-offline svg {\n  height: 100px;\n  margin-bottom: 16px;\n  fill: #9aa0a6;\n}\n.uui__popup-offline p {\n  margin: 0;\n}\n.uui__popup-offline p + p {\n  margin-top: 16px;\n}\n.uui__error {\n  position: absolute;\n  background: var(--button-background);\n  border: 1px solid #f27474;\n  border-radius: 5px;\n  top: calc(100% + 5px);\n  padding: 8px 18px 8px 9px;\n  font-size: 14px;\n  line-height: 1.6;\n  color: #ffffff;\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n  visibility: visible;\n  opacity: 1;\n  transition: visibility 0.3s, opacity 0.3s;\n}\n.uui__error--hidden {\n  visibility: hidden;\n  opacity: 0;\n  transition: visibility 0.3s, opacity 0.3s;\n}\n.uui__error--left {\n  left: 0;\n}\n.uui__error--left::before {\n  left: var(--arrow-offset);\n}\n.uui__error--center {\n  left: 50%;\n  transform: translateX(-50%);\n}\n.uui__error--center::before {\n  left: 50%;\n  transform: translateX(-50%);\n}\n.uui__error--right {\n  right: 0;\n}\n.uui__error--right::before {\n  right: var(--arrow-offset);\n}\n.uui__error::before {\n  content: "";\n  border-width: 5px 3px;\n  border-style: solid;\n  border-color: transparent transparent var(--button-background);\n  position: absolute;\n  bottom: 100%;\n}\n.uui__error-icon {\n  flex: 0 0 14px;\n  width: 14px;\n  margin-right: 8px;\n}\n\n@keyframes handy-status-pulse {\n  0% {\n    transform: scale(0.95);\n    box-shadow: 0 0 0 0 rgba(114, 201, 62, 0.7);\n  }\n  70% {\n    transform: scale(1);\n    box-shadow: 0 0 0 10px transparent;\n  }\n  100% {\n    transform: scale(0.95);\n    box-shadow: 0 0 0 0 transparent;\n  }\n}', {});
                const bt = pt.exports.withNaming({
                    e: "__",
                    m: "--"
                })
                  , wt = {
                    [e.Status.NOT_CONNECTED]: "blue",
                    [e.Status.CONNECTING]: "orange",
                    [e.Status.CONNECTION_FAILED]: "red",
                    [e.Status.CONNECTED]: "green",
                    [e.Status.UPDATE]: "green",
                    [e.Status.DEPRECATED]: "green",
                    [e.Status.SETTING_SCRIPT]: "green"
                }
                  , _t = {
                    [e.Status.NOT_CONNECTED]: location.href.includes("handyfeeling.com") ? "Connect" : "The Handy",
                    [e.Status.CONNECTING]: "Connecting...",
                    [e.Status.CONNECTION_FAILED]: "Error",
                    [e.Status.CONNECTED]: "Connected",
                    [e.Status.UPDATE]: "Update",
                    [e.Status.DEPRECATED]: "Update",
                    [e.Status.SETTING_SCRIPT]: "Setting script..."
                }
                  , St = {
                    [e.Status.NOT_CONNECTED]: "not-connected",
                    [e.Status.CONNECTING]: "connecting",
                    [e.Status.CONNECTION_FAILED]: "failed",
                    [e.Status.CONNECTED]: "connected",
                    [e.Status.UPDATE]: "update",
                    [e.Status.DEPRECATED]: "deprecated",
                    [e.Status.SETTING_SCRIPT]: "setting-script"
                }
                  , Et = {
                    [e.Status.UPDATE]: 338,
                    [e.Status.DEPRECATED]: 189
                }
                  , kt = t=>{
                    let {handy: n} = t;
                    const r = bt("uui")
                      , o = ot(null)
                      , a = ot(null)
                      , i = ot(null)
                      , l = ot(null)
                      , s = ot(5)
                      , u = ot()
                      , c = ot()
                      , [d,f] = nt(!0)
                      , [p,h] = nt()
                      , [m,y] = nt()
                      , [g,v] = nt()
                      , [b,w] = nt(295)
                      , [_,S] = nt(e.Status.NOT_CONNECTED)
                      , [E,k] = nt()
                      , [C,P] = nt(!1)
                      , [T,x] = nt(navigator.onLine)
                      , {URL: R, theme: N, compact: O, slim: A, storeURL: D, errorAlign: I} = n.getConfig().UUI
                      , L = new URL(R);
                    L.searchParams.set("theme", N),
                    L.searchParams.set("storeURL", D);
                    const M = function(e, t) {
                        return Ge = 8,
                        at((function() {
                            return e
                        }
                        ), t)
                    }(((e,t)=>{
                        var n;
                        null === (n = l.current) || void 0 === n || null === (n = n.contentWindow) || void 0 === n || n.postMessage({
                            action: e,
                            result: t
                        }, R)
                    }
                    ), [R]);
                    return rt((()=>{
                        const e = ()=>{
                            if (!o.current || !a.current)
                                return;
                            let e = d;
                            const t = Math.min(innerWidth - 40, 780)
                              , r = a.current.getBoundingClientRect()
                              , i = o.current.getBoundingClientRect()
                              , l = t / 2 + 20
                              , s = i.left + i.width / 2
                              , u = window.innerWidth - i.right + i.width / 2;
                            let c = -(t / 2 - i.width / 2);
                            s <= l ? c += l - s : u <= l && (c -= l - u);
                            let f = -(r.width / 2 - i.width / 2);
                            const p = c + 20
                              , m = c + t - 20 - r.width - r.width / 2;
                            f < p ? p + r.left - 20 > i.width ? e = !0 : f = p : f > m && (m < 0 ? e = !0 : f = m),
                            n.toggleUUI(!e),
                            v(t),
                            h(c),
                            y(f)
                        }
                        ;
                        return window.addEventListener("load", e),
                        window.addEventListener("scroll", e),
                        window.addEventListener("resize", e),
                        e(),
                        ()=>{
                            window.removeEventListener("load", e),
                            window.removeEventListener("scroll", e),
                            window.removeEventListener("resize", e)
                        }
                    }
                    ), [n, d]),
                    rt((()=>{
                        const e = e=>{
                            x("online" === e.type)
                        }
                        ;
                        return window.addEventListener("online", e),
                        window.addEventListener("offline", e),
                        ()=>{
                            window.removeEventListener("online", e),
                            window.removeEventListener("offline", e)
                        }
                    }
                    ), []),
                    rt((()=>{
                        const e = e=>{
                            let {state: t} = e;
                            M("state", t),
                            f(!t.uuiOpen),
                            S(t.status),
                            w(Et[t.status] || 295);
                            const n = t.error;
                            clearTimeout(c.current),
                            P(!!n),
                            n ? (k(t.error),
                            c.current = window.setTimeout((()=>P(!1)), 3e3)) : c.current = window.setTimeout((()=>k(void 0)), 300)
                        }
                        ;
                        return n.on("state", e),
                        ()=>{
                            n.off("state", e),
                            clearTimeout(c.current)
                        }
                    }
                    ), [n, M]),
                    rt((()=>{
                        if ([e.Status.NOT_CONNECTED, e.Status.CONNECTION_FAILED].includes(_))
                            return clearTimeout(u.current),
                            void (u.current = void 0);
                        if (u.current)
                            return;
                        const t = ()=>{
                            u.current = window.setTimeout((async()=>{
                                try {
                                    const e = n.getState().connectionKey;
                                    if (!e)
                                        throw new Error("No connection key");
                                    const {connected: t} = await n.API.get.connected(e, !0);
                                    if (!t)
                                        throw new Error("Not connected");
                                    const r = await n.API.get.info(e);
                                    r.fwVersion >= "3.2" && await n.getOffset(),
                                    r.fwVersion >= "3" && await n.getStrokeZone(),
                                    n.updateState({
                                        connected: t,
                                        connecting: !1
                                    }),
                                    s.current = 5
                                } catch {
                                    if (!s.current)
                                        return n.updateState({
                                            connected: !1,
                                            connecting: !1
                                        });
                                    n.updateState({
                                        connecting: !0
                                    }),
                                    s.current--
                                } finally {
                                    t()
                                }
                            }
                            ), 3e4)
                        }
                        ;
                        t()
                    }
                    ), [n, _]),
                    rt((()=>{
                        if (d)
                            return;
                        const e = e=>{
                            var t, r;
                            const o = e.target;
                            (null === (t = i.current) || void 0 === t ? void 0 : t.contains(o)) || (null === (r = i.current) || void 0 === r ? void 0 : r.contains(o)) || n.toggleUUI(!1)
                        }
                        ;
                        return window.addEventListener("click", e),
                        ()=>window.removeEventListener("click", e)
                    }
                    ), [n, d]),
                    rt((()=>{
                        const e = async e=>{
                            let {data: t} = e;
                            "getStoredKey" === t.action ? M(t.action, await n.getStoredKey()) : "connect" === t.action ? n.connect(t.data) : "disconnect" === t.action ? n.disconnect() : "setStrokeZone" === t.action ? await n.setStrokeZone(t.data) : "setOffset" === t.action ? await n.setOffset(t.data) : "sync" === t.action ? n.sync().then((()=>M(t.action, void 0))) : "init" === t.action && M("init", n.getState())
                        }
                        ;
                        return window.addEventListener("message", e),
                        ()=>window.removeEventListener("message", e)
                    }
                    ), [n, M]),
                    Fe("div", {
                        className: r({
                            [N]: !0,
                            [St[_]]: !0,
                            compact: O,
                            slim: A
                        }),
                        children: [Fe("button", {
                            type: "button",
                            className: r("button"),
                            onClick: ()=>n.toggleUUI(d),
                            ref: o,
                            children: [Fe("span", {
                                className: r("button-status", {
                                    [wt[_]]: !0
                                })
                            }), Fe("svg", {
                                className: r("button-icon"),
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 595.3 794.2",
                                children: Fe("path", {
                                    d: "M288.8 215.2v269.2a73 73 0 0 1-75.6 73.4 72.4 72.4 0 0 1-68.9-72.2V216.3a73 73 0 0 1 69.4-73.3 72 72 0 0 1 53.8 21.2 72 72 0 0 1 21.3 51zM451 387.8v162.7H306.6V387.8a72.4 72.4 0 0 1 72.2-72.2 72.4 72.4 0 0 1 72.2 72.2z",
                                    fill: "#fff"
                                })
                            }), !O && Fe("span", {
                                className: r("button-text"),
                                children: _t[_]
                            })]
                        }), Fe("div", {
                            className: r("popup", {
                                hidden: d || void 0 === p || void 0 === g || void 0 === m
                            }),
                            children: [Fe("div", {
                                className: r("popup-arrow"),
                                ref: a,
                                style: {
                                    left: "".concat(m, "px")
                                }
                            }), Fe("div", {
                                className: r("popup-content"),
                                ref: i,
                                style: {
                                    left: "".concat(p, "px"),
                                    width: "".concat(g, "px"),
                                    height: "".concat(b, "px")
                                },
                                children: T ? Fe("iframe", {
                                    src: L.toString(),
                                    ref: l
                                }) : Fe("div", {
                                    className: r("popup-offline"),
                                    children: [Fe("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        viewBox: "0 0 24 24",
                                        children: Fe("path", {
                                            d: "m7.73 10 8 8H6a4 4 0 0 1-4-4 4 4 0 0 1 4-4M3 5.27 5.75 8C2.56 8.15 0 10.77 0 14a6 6 0 0 0 6 6h11.73l2 2L21 20.73 4.27 4m15.08 6.03A7.49 7.49 0 0 0 12 4c-1.5 0-2.85.43-4 1.17l1.45 1.46C10.21 6.23 11.08 6 12 6a5.5 5.5 0 0 1 5.5 5.5v.5H19a3 3 0 0 1 3 3c0 1.13-.64 2.11-1.56 2.62l1.45 1.45C23.16 18.16 24 16.68 24 15c0-2.64-2.05-4.78-4.65-4.97Z"
                                        })
                                    }), Fe("p", {
                                        children: Fe("b", {
                                            children: "Offline Mode"
                                        })
                                    }), Fe("p", {
                                        children: "We can\u2019t reach Handy servers at the moment."
                                    })]
                                })
                            })]
                        }), Fe("div", {
                            className: r("error", {
                                [I]: !0,
                                hidden: !C || !d
                            }),
                            children: [Fe("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "5.49 4.54 51.16 51.24",
                                className: r("error-icon"),
                                children: [Fe("circle", {
                                    cx: "31.07",
                                    cy: "30.16",
                                    r: "24.5",
                                    fill: "none",
                                    stroke: "#f27474",
                                    "stroke-width": "2.5"
                                }), Fe("path", {
                                    stroke: "#f27474",
                                    "stroke-linecap": "round",
                                    "stroke-width": "2.5",
                                    d: "m22.55 21.52 17.33 17.54M39.66 21.52l-17.08 17.1"
                                })]
                            }), Fe("span", {
                                children: E
                            })]
                        })]
                    })
                }
                  , Ct = {
                    lastInfoUpdate: 0,
                    status: e.Status.NOT_CONNECTED
                };
                let Pt = {
                    avgOffset: 0,
                    avgRtd: 0,
                    lastSyncTime: 0
                }
                  , Tt = !1;
                var xt = new WeakMap
                  , Rt = new WeakMap
                  , Nt = new WeakMap
                  , Ot = new WeakMap
                  , At = new WeakMap
                  , Dt = new WeakMap
                  , It = new WeakSet;
                class Lt {
                    constructor() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        r(this, It),
                        s(this, "API", void 0),
                        s(this, "playingTimer", void 0),
                        s(this, "videoPlayer", void 0),
                        o(this, xt, void 0),
                        o(this, Rt, void 0),
                        o(this, Nt, {}),
                        o(this, Ot, function(e) {
                            return {
                                all: e = e || new Map,
                                on: function(t, n) {
                                    var r = e.get(t);
                                    r ? r.push(n) : e.set(t, [n])
                                },
                                off: function(t, n) {
                                    var r = e.get(t);
                                    r && (n ? r.splice(r.indexOf(n) >>> 0, 1) : e.set(t, []))
                                },
                                emit: function(t, n) {
                                    var r = e.get(t);
                                    r && r.slice().map((function(e) {
                                        e(n)
                                    }
                                    )),
                                    (r = e.get("*")) && r.slice().map((function(e) {
                                        e(t, n)
                                    }
                                    ))
                                }
                            }
                        }()),
                        o(this, At, void 0),
                        o(this, Dt, void 0),
                        l(xt, this, Ct),
                        l(Rt, this, n(t, e)),
                        this.API = se(this)
                    }
                    async updateState(e) {
                        if (Object.keys(e).length) {
                            for (const t in e) {
                                const n = t
                                  , r = e[n]
                                  , o = i(xt, this)[n];
                                l(xt, this, "object" == typeof o && "object" == typeof r ? {
                                    ...i(xt, this),
                                    [n]: Object.assign(o, r)
                                } : {
                                    ...i(xt, this),
                                    [n]: r
                                })
                            }
                            i(xt, this).status = a(It, this, qt).call(this),
                            i(Ot, this).emit("state", {
                                state: i(xt, this),
                                change: e
                            }),
                            i(xt, this).connectionKey && await a(It, this, Gt).call(this, i(xt, this))
                        }
                    }
                    getState() {
                        return i(xt, this)
                    }
                    updateConfig(e) {
                        l(Rt, this, n(i(Rt, this), e)),
                        this.API = se(this)
                    }
                    getConfig() {
                        return i(Rt, this)
                    }
                    async connect(t) {
                        var n;
                        const r = await a(It, this, Kt).call(this, t);
                        if (i(xt, this).connected && (null !== (n = i(Dt, this)) && void 0 !== n && n.call(this),
                        a(It, this, Ft).call(this),
                        i(Ot, this).emit("disconnect")),
                        0 === Pt.lastSyncTime) {
                            const e = await a(It, this, Vt).call(this, "clientServerLatency");
                            void 0 !== e && (Pt = e)
                        }
                        l(xt, this, {
                            ...Ct,
                            uuiOpen: i(xt, this).uuiOpen
                        }),
                        await this.updateState({
                            connecting: !0,
                            latency: Pt
                        });
                        let o = {
                            connecting: !1
                        };
                        try {
                            var s;
                            const {connected: n} = await this.API.get.connected(t, !0);
                            if (o.connected = n,
                            o.connectionKey = t,
                            !n)
                                throw await this.updateState({
                                    error: "Device is not connected"
                                }),
                                new ue("Device is not connected");
                            const a = await this.API.get.info(t, !0);
                            o.info = a,
                            o.ota = await this.API.get.OTA.latest(a.model, a.branch, !0);
                            const {syncClientServerTime: l, timeBetweenSyncs: u} = i(Rt, this);
                            if ((null === (s = r.info) || void 0 === s ? void 0 : s.sessionId) !== a.sessionId) {
                                const {slideMin: n, slideMax: r} = await this.API.get.settings(t, !0);
                                o.slide = {
                                    min: n,
                                    max: r
                                };
                                const {mode: i, state: l} = await this.API.get.status(t, !0);
                                if (i === e.Mode.HSSP && (o.hssp = {
                                    state: l
                                }),
                                i === e.Mode.HAMP && (o.hamp = {
                                    state: l
                                }),
                                a.fwVersion >= "3.2") {
                                    const {offset: e} = await this.API.get.HSTP.offset(t, !0);
                                    o.hstp = {
                                        offset: e
                                    }
                                }
                                o.lastInfoUpdate = Date.now()
                            } else
                                o = {
                                    ...r,
                                    ...o
                                };
                            const c = Date.now() - Pt.lastSyncTime;
                            return l && !Tt && c > u && await this.syncClientServerTime(),
                            await this.updateState(o),
                            i(Ot, this).emit("connect"),
                            e.ConnectResult.CONNECTED
                        } catch {
                            return await new Promise((e=>setTimeout(e, 1e3))),
                            await this.updateState(o),
                            e.ConnectResult.NOT_CONNECTED
                        }
                    }
                    async disconnect() {
                        if (arguments.length > 0 && void 0 !== arguments[0] && !arguments[0]) {
                            const e = (await a(It, this, Vt).call(this, "handyStates") || []).filter((e=>e.connectionKey !== i(xt, this).connectionKey));
                            await a(It, this, Bt).call(this, "handyStates", e)
                        } else
                            await a(It, this, Wt).call(this, "handyStates");
                        l(xt, this, {
                            ...Ct,
                            uuiOpen: i(xt, this).uuiOpen
                        }),
                        i(Ot, this).emit("disconnect"),
                        i(Ot, this).emit("state", {
                            state: i(xt, this),
                            change: {}
                        })
                    }
                    on(e, t) {
                        i(Ot, this).on(e, t)
                    }
                    off(e, t) {
                        i(Ot, this).off(e, t)
                    }
                    attachUUI() {
                        !function(e, t) {
                            const n = document.getElementById(t);
                            if (!n || !n.parentElement)
                                throw new ue("Element with ".concat(t, " ID is not found"));
                            ze(Fe(kt, {
                                handy: e
                            }), n.parentElement, n)
                        }(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "handy-ui")
                    }
                    async toggleUUI() {
                        let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                        e !== i(xt, this).uuiOpen && await this.updateState({
                            uuiOpen: e,
                            error: void 0
                        })
                    }
                    getClientServerLatency() {
                        return Pt
                    }
                    async getStoredKey() {
                        const e = await a(It, this, Vt).call(this, "handyStates");
                        return null !== e && void 0 !== e && e.length ? e[e.length - 1].connectionKey : void 0
                    }
                    setVideoPlayer(t) {
                        if (a(It, this, Ft).call(this),
                        t) {
                            if (!(t instanceof HTMLVideoElement))
                                throw new ue("Provided element is not instance of HTMLVideoElement");
                            l(At, this, (async()=>{
                                await this.hsspPlay(1e3 * t.currentTime),
                                this.playingTimer = setTimeout((()=>{
                                    this.hsspPlay(1e3 * t.currentTime)
                                }
                                ), i(Rt, this).videoPlayerDelayForSecondPlay)
                            }
                            )),
                            l(Dt, this, (()=>{
                                var t;
                                (null === (t = this.getState().hssp) || void 0 === t ? void 0 : t.state) === e.HSSPState.PLAYING && this.hsspStop()
                            }
                            )),
                            t.addEventListener("playing", i(At, this)),
                            t.addEventListener("pause", i(Dt, this)),
                            this.videoPlayer = t
                        }
                    }
                    async setMode(t) {
                        const n = await a(It, this, Ht).call(this);
                        return a(It, this, jt).call(this),
                        a(It, this, Ut).call(this, "setMode", (async()=>{
                            const r = await this.API.put.mode(n, {
                                mode: t
                            });
                            if (r.result !== e.ModeUpdateResponse.result.ERROR) {
                                var o;
                                const e = {
                                    mode: t
                                };
                                null !== (o = i(xt, this).hssp) && void 0 !== o && o.scriptSet && (e.hssp = {
                                    scriptSet: !1
                                }),
                                await this.updateState(e)
                            }
                            return r
                        }
                        ))
                    }
                    async getMode() {
                        const e = await a(It, this, Ht).call(this);
                        return a(It, this, jt).call(this),
                        a(It, this, Ut).call(this, "getMode", (()=>this.API.get.mode(e)))
                    }
                    async syncClientServerTime(e) {
                        if (Tt)
                            return;
                        Tt = !0;
                        const {syncCount: t, outliers: n} = {
                            ...i(Rt, this).syncClient,
                            ...e
                        }
                          , r = [];
                        for (; r.length < t; )
                            try {
                                const e = await a(It, this, Mt).call(this);
                                r.push(e)
                            } catch {
                                return void (Tt = !1)
                            }
                        r.sort(((e,t)=>e.rtd - t.rtd));
                        let o = Math.max(0, r.length - n - 1)
                          , l = 0
                          , s = 0;
                        for (let a = 0; a < o; a++) {
                            const e = r[a];
                            e.offset && e.rtd && (l += e.offset,
                            s += e.rtd)
                        }
                        0 === o && (o = 1);
                        const u = {
                            avgOffset: Math.round(l / o),
                            avgRtd: Math.round(s / o),
                            lastSyncTime: Date.now()
                        };
                        await a(It, this, Bt).call(this, "clientServerLatency", u),
                        Pt = u,
                        Tt = !1,
                        await this.updateState({
                            latency: u
                        })
                    }
                    async syncHandyServerTime(e) {
                        const t = await a(It, this, Ht).call(this);
                        a(It, this, jt).call(this, "3.2");
                        const {syncCount: n, outliers: r} = {
                            ...i(Rt, this).syncHandy,
                            ...e
                        };
                        return a(It, this, Ut).call(this, "syncHandyServerTime", (()=>this.API.get.HSTP.sync(t, n, r)))
                    }
                    async sync(e, t) {
                        await Promise.all([this.syncClientServerTime(e), this.syncHandyServerTime(t)])
                    }
                    async getHandyRtd() {
                        const e = await a(It, this, Ht).call(this);
                        return a(It, this, jt).call(this, "3.2"),
                        a(It, this, Ut).call(this, "getHandyRtd", (()=>this.API.get.HSTP.rtd(e)))
                    }
                    async setOffset(t) {
                        const n = await a(It, this, Ht).call(this);
                        return a(It, this, jt).call(this, "3.2"),
                        a(It, this, Ut).call(this, "setOffset", (async()=>{
                            const r = await this.API.put.HSTP.offset(n, {
                                offset: t
                            });
                            return r.result === e.GenericResult.SUCCESS && await this.updateState({
                                hstp: {
                                    offset: t
                                }
                            }),
                            r
                        }
                        ))
                    }
                    async getOffset() {
                        const e = await a(It, this, Ht).call(this);
                        return a(It, this, jt).call(this, "3.2"),
                        a(It, this, Ut).call(this, "getOffset", (()=>this.API.get.HSTP.offset(e)))
                    }
                    async setStrokeZone() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                            min: 0,
                            max: 100
                        };
                        const t = await a(It, this, Ht).call(this);
                        a(It, this, jt).call(this);
                        const n = "min"in e
                          , r = "max"in e;
                        if (!n && !r)
                            throw new ue("Min or max position value is required");
                        if (n && (e.min < 0 || e.min > 100))
                            throw new ue("Slide min position should be in range between 0 and 100");
                        if (r && (e.max < 0 || e.max > 100))
                            throw new ue("Slide max position should be in range between 0 and 100");
                        return a(It, this, Ut).call(this, "setStrokeZone", (async()=>{
                            const n = await this.API.put.slide(t, e);
                            return await this.updateState({
                                slide: e
                            }),
                            n
                        }
                        ))
                    }
                    async getStrokeZone() {
                        const e = await a(It, this, Ht).call(this);
                        return a(It, this, jt).call(this),
                        a(It, this, Ut).call(this, "getStrokeZone", (()=>this.API.get.slide(e)))
                    }
                    async getAbsolutePosition() {
                        const e = await a(It, this, Ht).call(this);
                        return a(It, this, jt).call(this),
                        a(It, this, Ut).call(this, "getAbsolutePosition", (()=>this.API.get.slidePositionAbsolute(e)))
                    }
                    async hampPlay() {
                        const t = await a(It, this, Ht).call(this);
                        return a(It, this, jt).call(this),
                        a(It, this, Ut).call(this, "hampPlay", (async()=>{
                            i(xt, this).mode !== e.Mode.HAMP && await this.setMode(e.Mode.HAMP);
                            const n = await this.API.put.HAMP.start(t);
                            return n.result !== e.StateResult.ERROR && await this.API.get.HAMP.state(t),
                            n
                        }
                        ))
                    }
                    async hampStop() {
                        const t = await a(It, this, Ht).call(this);
                        return a(It, this, jt).call(this),
                        a(It, this, Ut).call(this, "hampStop", (async()=>{
                            i(xt, this).mode !== e.Mode.HAMP && await this.setMode(e.Mode.HAMP);
                            const n = await this.API.put.HAMP.stop(t);
                            if (n.result !== e.StateResult.ERROR) {
                                const {state: e} = await this.API.get.HAMP.state(t, !0);
                                await this.updateState({
                                    hamp: {
                                        state: e,
                                        velocity: 0
                                    }
                                })
                            }
                            return n
                        }
                        ))
                    }
                    async setHampVelocity(t) {
                        const n = await a(It, this, Ht).call(this);
                        a(It, this, jt).call(this);
                        const {hamp: r, mode: o} = i(xt, this);
                        if ((null === r || void 0 === r ? void 0 : r.state) !== e.HAMPState.MOVING)
                            throw new ue("Velocity can only be set when the slide is moving");
                        if (t < 0 || t > 100)
                            throw new ue("Velocity should be in range between 0 and 100");
                        return a(It, this, Ut).call(this, "setHampVelocity", (async()=>{
                            o !== e.Mode.HAMP && await this.setMode(e.Mode.HAMP);
                            const r = await this.API.put.HAMP.velocity(n, {
                                velocity: t
                            });
                            return r.result === e.GenericResult.SUCCESS && await this.updateState({
                                hamp: {
                                    velocity: t
                                }
                            }),
                            r
                        }
                        ))
                    }
                    async getHampVelocity() {
                        const t = await a(It, this, Ht).call(this);
                        return a(It, this, jt).call(this),
                        a(It, this, Ut).call(this, "getHampVelocity", (async()=>(i(xt, this).mode !== e.Mode.HAMP && await this.setMode(e.Mode.HAMP),
                        this.API.get.HAMP.velocity(t))))
                    }
                    async setScript(t) {
                        const n = await a(It, this, Ht).call(this);
                        return a(It, this, jt).call(this),
                        a(It, this, Ut).call(this, "setScript", (async()=>{
                            await this.updateState({
                                settingScript: !0
                            }),
                            i(xt, this).mode !== e.Mode.HSSP && await this.setMode(e.Mode.HSSP);
                            const r = await this.API.put.HSSP.setup(n, {
                                url: t
                            });
                            return await this.API.get.HSSP.state(n),
                            await this.updateState({
                                hssp: {
                                    scriptSet: !0
                                },
                                settingScript: !1
                            }),
                            r
                        }
                        ))
                    }
                    setScriptFromData(e) {
                        return a(It, this, Ut).call(this, "setScriptFromData", (async()=>{
                            const t = await $t(e, i(Rt, this).scriptAPI);
                            return this.setScript(t)
                        }
                        ))
                    }
                    async hsspPlay() {
                        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
                          , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Yt();
                        const r = await a(It, this, Ht).call(this);
                        a(It, this, jt).call(this);
                        const {hssp: o, mode: l} = i(xt, this);
                        if (null === o || void 0 === o || !o.scriptSet)
                            throw await this.updateState({
                                error: "Script set is required"
                            }),
                            new ue("Script set is required");
                        return clearTimeout(this.playingTimer),
                        a(It, this, Ut).call(this, "hsspPlay", (async()=>{
                            l !== e.Mode.HSSP && await this.setMode(e.Mode.HSSP);
                            const o = await this.API.put.HSSP.play(r, {
                                startTime: Math.round(t),
                                estimatedServerTime: Math.round(n)
                            });
                            return o.result === e.HSSPPlayResult.SUCCESS && await this.API.get.HSSP.state(r),
                            o
                        }
                        ))
                    }
                    async hsspStop() {
                        const t = await a(It, this, Ht).call(this);
                        return a(It, this, jt).call(this),
                        clearTimeout(this.playingTimer),
                        a(It, this, Ut).call(this, "hsspStop", (async()=>{
                            i(xt, this).mode !== e.Mode.HSSP && await this.setMode(e.Mode.HSSP);
                            const n = await this.API.put.HSSP.stop(t);
                            return n.result === e.GenericResult.SUCCESS && await this.API.get.HSSP.state(t),
                            n
                        }
                        ))
                    }
                    async setHsspLoop() {
                        let t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                        const n = await a(It, this, Ht).call(this);
                        return a(It, this, jt).call(this, "3.2"),
                        a(It, this, Ut).call(this, "setHsspLoop", (async()=>{
                            i(xt, this).mode !== e.Mode.HSSP && await this.setMode(e.Mode.HSSP);
                            const r = await this.API.put.HSSP.loop(n, {
                                activated: t
                            });
                            return r.result === e.GenericResult.SUCCESS && await this.updateState({
                                hssp: {
                                    loop: t
                                }
                            }),
                            r
                        }
                        ))
                    }
                    async getHsspLoop() {
                        const t = await a(It, this, Ht).call(this);
                        return a(It, this, jt).call(this, "3.2"),
                        a(It, this, Ut).call(this, "getHsspLoop", (async()=>{
                            i(xt, this).mode !== e.Mode.HSSP && await this.setMode(e.Mode.HSSP);
                            const {activated: n, ...r} = await this.API.get.HSSP.loop(t);
                            return {
                                ...r,
                                loop: n
                            }
                        }
                        ))
                    }
                    async hdsp(t, n, r, o, l, s) {
                        const u = await a(It, this, Ht).call(this);
                        return a(It, this, jt).call(this),
                        a(It, this, Ut).call(this, "hdsp", (async()=>{
                            if (i(xt, this).mode !== e.Mode.HDSP && await this.setMode(e.Mode.HDSP),
                            "absolute" === r && "percent" === o)
                                throw new ue('"absolute" position type is not available for "percent" speed type');
                            if ("absolute" === r) {
                                if (t < 0)
                                    throw new ue("Position can not be negative");
                                if (n < 0)
                                    throw new ue(("time" === o ? "Time" : "Velocity") + " can not be negative");
                                return "time" === o ? this.API.put.HDSP.xat(u, {
                                    stopOnTarget: l,
                                    immediateResponse: s,
                                    position: t,
                                    duration: n
                                }) : this.API.put.HDSP.xava(u, {
                                    stopOnTarget: l,
                                    immediateResponse: s,
                                    position: t,
                                    velocity: n
                                })
                            }
                            if (t < 0 || t > 100)
                                throw new ue("Position should be in range between 0 and 100");
                            if ("time" === o) {
                                if (n < 0)
                                    throw new ue("Time can not be negative");
                                return this.API.put.HDSP.xpt(u, {
                                    stopOnTarget: l,
                                    immediateResponse: s,
                                    position: t,
                                    duration: n
                                })
                            }
                            if ("absolute" === o) {
                                if (n < 0)
                                    throw new ue("Velocity can not be negative");
                                return this.API.put.HDSP.xpva(u, {
                                    stopOnTarget: l,
                                    immediateResponse: s,
                                    position: t,
                                    velocity: n
                                })
                            }
                            if (n < 0 || n > 100)
                                throw new ue("Velocity should be in range between 0 and 100");
                            return this.API.put.HDSP.xpvp(u, {
                                stopOnTarget: l,
                                immediateResponse: s,
                                position: t,
                                velocity: n
                            })
                        }
                        ))
                    }
                    async restartHandy() {
                        let t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                        const n = await a(It, this, Ht).call(this);
                        return a(It, this, jt).call(this),
                        a(It, this, Ut).call(this, "restartHandy", (async()=>(i(xt, this).mode !== e.Mode.MAINTENANCE && await this.setMode(e.Mode.MAINTENANCE),
                        this.API.put.MAINTENANCE.restart(n, {
                            reconnect: t
                        }))))
                    }
                }
                async function Mt() {
                    const e = Date.now()
                      , {serverTime: t} = await this.API.get.serverTime()
                      , n = Date.now()
                      , r = n - e;
                    return {
                        rtd: r,
                        offset: t + r / 2 - n
                    }
                }
                async function Ut(e, t) {
                    var n, r;
                    const o = t=>{
                        i(Nt, this)[e] = {
                            ...i(Nt, this)[e],
                            ...t
                        }
                    }
                    ;
                    clearTimeout(null === (n = i(Nt, this)[e]) || void 0 === n ? void 0 : n.timer);
                    const a = null === (r = i(Nt, this)[e]) || void 0 === r ? void 0 : r.promise;
                    if (a) {
                        const e = setTimeout((()=>t().finally((()=>o({
                            timer: void 0
                        })))), i(Rt, this).throttleDelay);
                        return o({
                            timer: e
                        }),
                        a
                    }
                    const l = t().finally((()=>setTimeout((()=>o({
                        promise: void 0
                    })), i(Rt, this).throttleDelay)));
                    return o({
                        promise: l
                    }),
                    l
                }
                async function Ht() {
                    const {connectionKey: e} = i(xt, this);
                    if (!e)
                        throw await this.updateState({
                            error: "No device connected"
                        }),
                        new ue("No device connected");
                    return e
                }
                function jt() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "3";
                    if (!a(It, this, zt).call(this, e))
                        throw new ue("Update required")
                }
                function zt(e) {
                    const {info: t} = i(xt, this);
                    return !(null === t || void 0 === t || !t.fwVersion) && t.fwVersion >= e
                }
                function qt() {
                    const {connecting: t, connected: n, connectionKey: r, info: o, ota: a, settingScript: l} = i(xt, this);
                    if (t)
                        return e.Status.CONNECTING;
                    if (n) {
                        if (o) {
                            if (o.fwVersion < "3")
                                return e.Status.DEPRECATED;
                            if (a && o.fwVersion.split("+")[0] !== a.fwVersion.split("+")[0])
                                return e.Status.UPDATE
                        }
                        return l ? e.Status.SETTING_SCRIPT : e.Status.CONNECTED
                    }
                    return r ? e.Status.CONNECTION_FAILED : e.Status.NOT_CONNECTED
                }
                function Ft() {
                    var e, t;
                    i(At, this) && (null !== (e = this.videoPlayer) && void 0 !== e && e.removeEventListener("playing", i(At, this)),
                    l(At, this, void 0)),
                    i(Dt, this) && (null !== (t = this.videoPlayer) && void 0 !== t && t.removeEventListener("pause", i(Dt, this)),
                    l(Dt, this, void 0))
                }
                async function Bt(e, t, n) {
                    const {localStorage: r} = i(Rt, this);
                    if (!r)
                        return;
                    let o = n ? {
                        [n]: t
                    } : t;
                    if (n)
                        try {
                            o = {
                                ...JSON.parse(await r.getItem(e) || ""),
                                ...o
                            }
                        } catch {}
                    r.setItem(e, JSON.stringify(o))
                }
                async function Vt(e) {
                    const {localStorage: t} = i(Rt, this);
                    if (!t)
                        return;
                    let n;
                    try {
                        n = JSON.parse(await t.getItem(e) || "")
                    } catch {}
                    return n
                }
                async function Wt(e) {
                    const {localStorage: t} = i(Rt, this);
                    await (null === t || void 0 === t ? void 0 : t.removeItem(e))
                }
                async function Kt(e) {
                    var t;
                    return (null === (t = await a(It, this, Vt).call(this, "handyStates")) || void 0 === t ? void 0 : t.find((t=>t.connectionKey === e))) || Ct
                }
                async function Gt(e) {
                    const {mode: t, uuiOpen: n, error: r, settingScript: o, ...i} = e
                      , l = (await a(It, this, Vt).call(this, "handyStates") || []).filter((t=>t.connectionKey !== e.connectionKey));
                    l.push(i),
                    await a(It, this, Bt).call(this, "handyStates", l)
                }
                async function $t(e) {
                    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t.scriptAPI;
                    const r = Xt(e)
                      , o = new Blob([r],{
                        type: "text/plain;charset=utf-8;"
                    })
                      , a = new FormData;
                    a.append("file", o, "".concat(Math.round(1e8 * Math.random()), ".csv"));
                    const i = await fetch("".concat(n, "/temp/upload"), {
                        method: "POST",
                        headers: {
                            accept: "application/json"
                        },
                        body: a
                    })
                      , l = await i.json();
                    if ("error"in l)
                        throw new ue(l.error);
                    return l.url
                }
                function Qt(e) {
                    const t = e.trim().split("\n").filter((e=>"#" !== e.trim()[0]));
                    if (t.length < 2)
                        return !1;
                    for (const n of t)
                        if (2 !== n.trim().split(",").map((e=>parseInt(e, 10))).filter((e=>!isNaN(e))).length)
                            return !1;
                    return !0
                }
                function Xt(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "\n";
                    if ("string" != typeof e) {
                        var n;
                        if ((null === (n = e.actions) || void 0 === n ? void 0 : n.length) < 2)
                            throw new ue("Need at least 2 points");
                        return e.actions.reduce(((e,n)=>"".concat(e).concat(Math.round(n.at), ",").concat(Math.round(n.pos)).concat(t)), "#Created by Handy SDK v2\n")
                    }
                    try {
                        return Xt(JSON.parse(e))
                    } catch {
                        if (!Qt(e))
                            throw new ue("Invalid CSV");
                        return e
                    }
                }
                function Yt() {
                    return Date.now() + Pt.avgOffset
                }
                e.convertDataToCSV = Xt,
                e.getEstimatedServerTime = Yt,
                e.init = function() {
                    return new Lt(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {})
                }
                ,
                e.isValidCSV = Qt,
                e.uploadDataToServer = $t,
                Object.defineProperty(e, "__esModule", {
                    value: !0
                })
            }(t)
        },
        730: (e,t,n)=>{
            "use strict";
            var r = n(43)
              , o = n(853);
            function a(e) {
                for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
                    t += "&args[]=" + encodeURIComponent(arguments[n]);
                return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
            }
            var i = new Set
              , l = {};
            function s(e, t) {
                u(e, t),
                u(e + "Capture", t)
            }
            function u(e, t) {
                for (l[e] = t,
                e = 0; e < t.length; e++)
                    i.add(t[e])
            }
            var c = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement)
              , d = Object.prototype.hasOwnProperty
              , f = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
              , p = {}
              , h = {};
            function m(e, t, n, r, o, a, i) {
                this.acceptsBooleans = 2 === t || 3 === t || 4 === t,
                this.attributeName = r,
                this.attributeNamespace = o,
                this.mustUseProperty = n,
                this.propertyName = e,
                this.type = t,
                this.sanitizeURL = a,
                this.removeEmptyString = i
            }
            var y = {};
            "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e) {
                y[e] = new m(e,0,!1,e,null,!1,!1)
            }
            )),
            [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach((function(e) {
                var t = e[0];
                y[t] = new m(t,1,!1,e[1],null,!1,!1)
            }
            )),
            ["contentEditable", "draggable", "spellCheck", "value"].forEach((function(e) {
                y[e] = new m(e,2,!1,e.toLowerCase(),null,!1,!1)
            }
            )),
            ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach((function(e) {
                y[e] = new m(e,2,!1,e,null,!1,!1)
            }
            )),
            "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e) {
                y[e] = new m(e,3,!1,e.toLowerCase(),null,!1,!1)
            }
            )),
            ["checked", "multiple", "muted", "selected"].forEach((function(e) {
                y[e] = new m(e,3,!0,e,null,!1,!1)
            }
            )),
            ["capture", "download"].forEach((function(e) {
                y[e] = new m(e,4,!1,e,null,!1,!1)
            }
            )),
            ["cols", "rows", "size", "span"].forEach((function(e) {
                y[e] = new m(e,6,!1,e,null,!1,!1)
            }
            )),
            ["rowSpan", "start"].forEach((function(e) {
                y[e] = new m(e,5,!1,e.toLowerCase(),null,!1,!1)
            }
            ));
            var g = /[\-:]([a-z])/g;
            function v(e) {
                return e[1].toUpperCase()
            }
            function b(e, t, n, r) {
                var o = y.hasOwnProperty(t) ? y[t] : null;
                (null !== o ? 0 !== o.type : r || !(2 < t.length) || "o" !== t[0] && "O" !== t[0] || "n" !== t[1] && "N" !== t[1]) && (function(e, t, n, r) {
                    if (null === t || "undefined" === typeof t || function(e, t, n, r) {
                        if (null !== n && 0 === n.type)
                            return !1;
                        switch (typeof t) {
                        case "function":
                        case "symbol":
                            return !0;
                        case "boolean":
                            return !r && (null !== n ? !n.acceptsBooleans : "data-" !== (e = e.toLowerCase().slice(0, 5)) && "aria-" !== e);
                        default:
                            return !1
                        }
                    }(e, t, n, r))
                        return !0;
                    if (r)
                        return !1;
                    if (null !== n)
                        switch (n.type) {
                        case 3:
                            return !t;
                        case 4:
                            return !1 === t;
                        case 5:
                            return isNaN(t);
                        case 6:
                            return isNaN(t) || 1 > t
                        }
                    return !1
                }(t, n, o, r) && (n = null),
                r || null === o ? function(e) {
                    return !!d.call(h, e) || !d.call(p, e) && (f.test(e) ? h[e] = !0 : (p[e] = !0,
                    !1))
                }(t) && (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = null === n ? 3 !== o.type && "" : n : (t = o.attributeName,
                r = o.attributeNamespace,
                null === n ? e.removeAttribute(t) : (n = 3 === (o = o.type) || 4 === o && !0 === n ? "" : "" + n,
                r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
            }
            "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e) {
                var t = e.replace(g, v);
                y[t] = new m(t,1,!1,e,null,!1,!1)
            }
            )),
            "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e) {
                var t = e.replace(g, v);
                y[t] = new m(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
            }
            )),
            ["xml:base", "xml:lang", "xml:space"].forEach((function(e) {
                var t = e.replace(g, v);
                y[t] = new m(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
            }
            )),
            ["tabIndex", "crossOrigin"].forEach((function(e) {
                y[e] = new m(e,1,!1,e.toLowerCase(),null,!1,!1)
            }
            )),
            y.xlinkHref = new m("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),
            ["src", "href", "action", "formAction"].forEach((function(e) {
                y[e] = new m(e,1,!1,e.toLowerCase(),null,!0,!0)
            }
            ));
            var w = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              , _ = Symbol.for("react.element")
              , S = Symbol.for("react.portal")
              , E = Symbol.for("react.fragment")
              , k = Symbol.for("react.strict_mode")
              , C = Symbol.for("react.profiler")
              , P = Symbol.for("react.provider")
              , T = Symbol.for("react.context")
              , x = Symbol.for("react.forward_ref")
              , R = Symbol.for("react.suspense")
              , N = Symbol.for("react.suspense_list")
              , O = Symbol.for("react.memo")
              , A = Symbol.for("react.lazy");
            Symbol.for("react.scope"),
            Symbol.for("react.debug_trace_mode");
            var D = Symbol.for("react.offscreen");
            Symbol.for("react.legacy_hidden"),
            Symbol.for("react.cache"),
            Symbol.for("react.tracing_marker");
            var I = Symbol.iterator;
            function L(e) {
                return null === e || "object" !== typeof e ? null : "function" === typeof (e = I && e[I] || e["@@iterator"]) ? e : null
            }
            var M, U = Object.assign;
            function H(e) {
                if (void 0 === M)
                    try {
                        throw Error()
                    } catch (n) {
                        var t = n.stack.trim().match(/\n( *(at )?)/);
                        M = t && t[1] || ""
                    }
                return "\n" + M + e
            }
            var j = !1;
            function z(e, t) {
                if (!e || j)
                    return "";
                j = !0;
                var n = Error.prepareStackTrace;
                Error.prepareStackTrace = void 0;
                try {
                    if (t)
                        if (t = function() {
                            throw Error()
                        }
                        ,
                        Object.defineProperty(t.prototype, "props", {
                            set: function() {
                                throw Error()
                            }
                        }),
                        "object" === typeof Reflect && Reflect.construct) {
                            try {
                                Reflect.construct(t, [])
                            } catch (u) {
                                var r = u
                            }
                            Reflect.construct(e, [], t)
                        } else {
                            try {
                                t.call()
                            } catch (u) {
                                r = u
                            }
                            e.call(t.prototype)
                        }
                    else {
                        try {
                            throw Error()
                        } catch (u) {
                            r = u
                        }
                        e()
                    }
                } catch (u) {
                    if (u && r && "string" === typeof u.stack) {
                        for (var o = u.stack.split("\n"), a = r.stack.split("\n"), i = o.length - 1, l = a.length - 1; 1 <= i && 0 <= l && o[i] !== a[l]; )
                            l--;
                        for (; 1 <= i && 0 <= l; i--,
                        l--)
                            if (o[i] !== a[l]) {
                                if (1 !== i || 1 !== l)
                                    do {
                                        if (i--,
                                        0 > --l || o[i] !== a[l]) {
                                            var s = "\n" + o[i].replace(" at new ", " at ");
                                            return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)),
                                            s
                                        }
                                    } while (1 <= i && 0 <= l);
                                break
                            }
                    }
                } finally {
                    j = !1,
                    Error.prepareStackTrace = n
                }
                return (e = e ? e.displayName || e.name : "") ? H(e) : ""
            }
            function q(e) {
                switch (e.tag) {
                case 5:
                    return H(e.type);
                case 16:
                    return H("Lazy");
                case 13:
                    return H("Suspense");
                case 19:
                    return H("SuspenseList");
                case 0:
                case 2:
                case 15:
                    return e = z(e.type, !1);
                case 11:
                    return e = z(e.type.render, !1);
                case 1:
                    return e = z(e.type, !0);
                default:
                    return ""
                }
            }
            function F(e) {
                if (null == e)
                    return null;
                if ("function" === typeof e)
                    return e.displayName || e.name || null;
                if ("string" === typeof e)
                    return e;
                switch (e) {
                case E:
                    return "Fragment";
                case S:
                    return "Portal";
                case C:
                    return "Profiler";
                case k:
                    return "StrictMode";
                case R:
                    return "Suspense";
                case N:
                    return "SuspenseList"
                }
                if ("object" === typeof e)
                    switch (e.$$typeof) {
                    case T:
                        return (e.displayName || "Context") + ".Consumer";
                    case P:
                        return (e._context.displayName || "Context") + ".Provider";
                    case x:
                        var t = e.render;
                        return (e = e.displayName) || (e = "" !== (e = t.displayName || t.name || "") ? "ForwardRef(" + e + ")" : "ForwardRef"),
                        e;
                    case O:
                        return null !== (t = e.displayName || null) ? t : F(e.type) || "Memo";
                    case A:
                        t = e._payload,
                        e = e._init;
                        try {
                            return F(e(t))
                        } catch (n) {}
                    }
                return null
            }
            function B(e) {
                var t = e.type;
                switch (e.tag) {
                case 24:
                    return "Cache";
                case 9:
                    return (t.displayName || "Context") + ".Consumer";
                case 10:
                    return (t._context.displayName || "Context") + ".Provider";
                case 18:
                    return "DehydratedFragment";
                case 11:
                    return e = (e = t.render).displayName || e.name || "",
                    t.displayName || ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef");
                case 7:
                    return "Fragment";
                case 5:
                    return t;
                case 4:
                    return "Portal";
                case 3:
                    return "Root";
                case 6:
                    return "Text";
                case 16:
                    return F(t);
                case 8:
                    return t === k ? "StrictMode" : "Mode";
                case 22:
                    return "Offscreen";
                case 12:
                    return "Profiler";
                case 21:
                    return "Scope";
                case 13:
                    return "Suspense";
                case 19:
                    return "SuspenseList";
                case 25:
                    return "TracingMarker";
                case 1:
                case 0:
                case 17:
                case 2:
                case 14:
                case 15:
                    if ("function" === typeof t)
                        return t.displayName || t.name || null;
                    if ("string" === typeof t)
                        return t
                }
                return null
            }
            function V(e) {
                switch (typeof e) {
                case "boolean":
                case "number":
                case "string":
                case "undefined":
                case "object":
                    return e;
                default:
                    return ""
                }
            }
            function W(e) {
                var t = e.type;
                return (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === t || "radio" === t)
            }
            function K(e) {
                e._valueTracker || (e._valueTracker = function(e) {
                    var t = W(e) ? "checked" : "value"
                      , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
                      , r = "" + e[t];
                    if (!e.hasOwnProperty(t) && "undefined" !== typeof n && "function" === typeof n.get && "function" === typeof n.set) {
                        var o = n.get
                          , a = n.set;
                        return Object.defineProperty(e, t, {
                            configurable: !0,
                            get: function() {
                                return o.call(this)
                            },
                            set: function(e) {
                                r = "" + e,
                                a.call(this, e)
                            }
                        }),
                        Object.defineProperty(e, t, {
                            enumerable: n.enumerable
                        }),
                        {
                            getValue: function() {
                                return r
                            },
                            setValue: function(e) {
                                r = "" + e
                            },
                            stopTracking: function() {
                                e._valueTracker = null,
                                delete e[t]
                            }
                        }
                    }
                }(e))
            }
            function G(e) {
                if (!e)
                    return !1;
                var t = e._valueTracker;
                if (!t)
                    return !0;
                var n = t.getValue()
                  , r = "";
                return e && (r = W(e) ? e.checked ? "true" : "false" : e.value),
                (e = r) !== n && (t.setValue(e),
                !0)
            }
            function $(e) {
                if ("undefined" === typeof (e = e || ("undefined" !== typeof document ? document : void 0)))
                    return null;
                try {
                    return e.activeElement || e.body
                } catch (t) {
                    return e.body
                }
            }
            function Q(e, t) {
                var n = t.checked;
                return U({}, t, {
                    defaultChecked: void 0,
                    defaultValue: void 0,
                    value: void 0,
                    checked: null != n ? n : e._wrapperState.initialChecked
                })
            }
            function X(e, t) {
                var n = null == t.defaultValue ? "" : t.defaultValue
                  , r = null != t.checked ? t.checked : t.defaultChecked;
                n = V(null != t.value ? t.value : n),
                e._wrapperState = {
                    initialChecked: r,
                    initialValue: n,
                    controlled: "checkbox" === t.type || "radio" === t.type ? null != t.checked : null != t.value
                }
            }
            function Y(e, t) {
                null != (t = t.checked) && b(e, "checked", t, !1)
            }
            function Z(e, t) {
                Y(e, t);
                var n = V(t.value)
                  , r = t.type;
                if (null != n)
                    "number" === r ? (0 === n && "" === e.value || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
                else if ("submit" === r || "reset" === r)
                    return void e.removeAttribute("value");
                t.hasOwnProperty("value") ? ee(e, t.type, n) : t.hasOwnProperty("defaultValue") && ee(e, t.type, V(t.defaultValue)),
                null == t.checked && null != t.defaultChecked && (e.defaultChecked = !!t.defaultChecked)
            }
            function J(e, t, n) {
                if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
                    var r = t.type;
                    if (!("submit" !== r && "reset" !== r || void 0 !== t.value && null !== t.value))
                        return;
                    t = "" + e._wrapperState.initialValue,
                    n || t === e.value || (e.value = t),
                    e.defaultValue = t
                }
                "" !== (n = e.name) && (e.name = ""),
                e.defaultChecked = !!e._wrapperState.initialChecked,
                "" !== n && (e.name = n)
            }
            function ee(e, t, n) {
                "number" === t && $(e.ownerDocument) === e || (null == n ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
            }
            var te = Array.isArray;
            function ne(e, t, n, r) {
                if (e = e.options,
                t) {
                    t = {};
                    for (var o = 0; o < n.length; o++)
                        t["$" + n[o]] = !0;
                    for (n = 0; n < e.length; n++)
                        o = t.hasOwnProperty("$" + e[n].value),
                        e[n].selected !== o && (e[n].selected = o),
                        o && r && (e[n].defaultSelected = !0)
                } else {
                    for (n = "" + V(n),
                    t = null,
                    o = 0; o < e.length; o++) {
                        if (e[o].value === n)
                            return e[o].selected = !0,
                            void (r && (e[o].defaultSelected = !0));
                        null !== t || e[o].disabled || (t = e[o])
                    }
                    null !== t && (t.selected = !0)
                }
            }
            function re(e, t) {
                if (null != t.dangerouslySetInnerHTML)
                    throw Error(a(91));
                return U({}, t, {
                    value: void 0,
                    defaultValue: void 0,
                    children: "" + e._wrapperState.initialValue
                })
            }
            function oe(e, t) {
                var n = t.value;
                if (null == n) {
                    if (n = t.children,
                    t = t.defaultValue,
                    null != n) {
                        if (null != t)
                            throw Error(a(92));
                        if (te(n)) {
                            if (1 < n.length)
                                throw Error(a(93));
                            n = n[0]
                        }
                        t = n
                    }
                    null == t && (t = ""),
                    n = t
                }
                e._wrapperState = {
                    initialValue: V(n)
                }
            }
            function ae(e, t) {
                var n = V(t.value)
                  , r = V(t.defaultValue);
                null != n && ((n = "" + n) !== e.value && (e.value = n),
                null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)),
                null != r && (e.defaultValue = "" + r)
            }
            function ie(e) {
                var t = e.textContent;
                t === e._wrapperState.initialValue && "" !== t && null !== t && (e.value = t)
            }
            function le(e) {
                switch (e) {
                case "svg":
                    return "http://www.w3.org/2000/svg";
                case "math":
                    return "http://www.w3.org/1998/Math/MathML";
                default:
                    return "http://www.w3.org/1999/xhtml"
                }
            }
            function se(e, t) {
                return null == e || "http://www.w3.org/1999/xhtml" === e ? le(t) : "http://www.w3.org/2000/svg" === e && "foreignObject" === t ? "http://www.w3.org/1999/xhtml" : e
            }
            var ue, ce, de = (ce = function(e, t) {
                if ("http://www.w3.org/2000/svg" !== e.namespaceURI || "innerHTML"in e)
                    e.innerHTML = t;
                else {
                    for ((ue = ue || document.createElement("div")).innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
                    t = ue.firstChild; e.firstChild; )
                        e.removeChild(e.firstChild);
                    for (; t.firstChild; )
                        e.appendChild(t.firstChild)
                }
            }
            ,
            "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(e, t, n, r) {
                MSApp.execUnsafeLocalFunction((function() {
                    return ce(e, t)
                }
                ))
            }
            : ce);
            function fe(e, t) {
                if (t) {
                    var n = e.firstChild;
                    if (n && n === e.lastChild && 3 === n.nodeType)
                        return void (n.nodeValue = t)
                }
                e.textContent = t
            }
            var pe = {
                animationIterationCount: !0,
                aspectRatio: !0,
                borderImageOutset: !0,
                borderImageSlice: !0,
                borderImageWidth: !0,
                boxFlex: !0,
                boxFlexGroup: !0,
                boxOrdinalGroup: !0,
                columnCount: !0,
                columns: !0,
                flex: !0,
                flexGrow: !0,
                flexPositive: !0,
                flexShrink: !0,
                flexNegative: !0,
                flexOrder: !0,
                gridArea: !0,
                gridRow: !0,
                gridRowEnd: !0,
                gridRowSpan: !0,
                gridRowStart: !0,
                gridColumn: !0,
                gridColumnEnd: !0,
                gridColumnSpan: !0,
                gridColumnStart: !0,
                fontWeight: !0,
                lineClamp: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                tabSize: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0,
                fillOpacity: !0,
                floodOpacity: !0,
                stopOpacity: !0,
                strokeDasharray: !0,
                strokeDashoffset: !0,
                strokeMiterlimit: !0,
                strokeOpacity: !0,
                strokeWidth: !0
            }
              , he = ["Webkit", "ms", "Moz", "O"];
            function me(e, t, n) {
                return null == t || "boolean" === typeof t || "" === t ? "" : n || "number" !== typeof t || 0 === t || pe.hasOwnProperty(e) && pe[e] ? ("" + t).trim() : t + "px"
            }
            function ye(e, t) {
                for (var n in e = e.style,
                t)
                    if (t.hasOwnProperty(n)) {
                        var r = 0 === n.indexOf("--")
                          , o = me(n, t[n], r);
                        "float" === n && (n = "cssFloat"),
                        r ? e.setProperty(n, o) : e[n] = o
                    }
            }
            Object.keys(pe).forEach((function(e) {
                he.forEach((function(t) {
                    t = t + e.charAt(0).toUpperCase() + e.substring(1),
                    pe[t] = pe[e]
                }
                ))
            }
            ));
            var ge = U({
                menuitem: !0
            }, {
                area: !0,
                base: !0,
                br: !0,
                col: !0,
                embed: !0,
                hr: !0,
                img: !0,
                input: !0,
                keygen: !0,
                link: !0,
                meta: !0,
                param: !0,
                source: !0,
                track: !0,
                wbr: !0
            });
            function ve(e, t) {
                if (t) {
                    if (ge[e] && (null != t.children || null != t.dangerouslySetInnerHTML))
                        throw Error(a(137, e));
                    if (null != t.dangerouslySetInnerHTML) {
                        if (null != t.children)
                            throw Error(a(60));
                        if ("object" !== typeof t.dangerouslySetInnerHTML || !("__html"in t.dangerouslySetInnerHTML))
                            throw Error(a(61))
                    }
                    if (null != t.style && "object" !== typeof t.style)
                        throw Error(a(62))
                }
            }
            function be(e, t) {
                if (-1 === e.indexOf("-"))
                    return "string" === typeof t.is;
                switch (e) {
                case "annotation-xml":
                case "color-profile":
                case "font-face":
                case "font-face-src":
                case "font-face-uri":
                case "font-face-format":
                case "font-face-name":
                case "missing-glyph":
                    return !1;
                default:
                    return !0
                }
            }
            var we = null;
            function _e(e) {
                return (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement),
                3 === e.nodeType ? e.parentNode : e
            }
            var Se = null
              , Ee = null
              , ke = null;
            function Ce(e) {
                if (e = wo(e)) {
                    if ("function" !== typeof Se)
                        throw Error(a(280));
                    var t = e.stateNode;
                    t && (t = So(t),
                    Se(e.stateNode, e.type, t))
                }
            }
            function Pe(e) {
                Ee ? ke ? ke.push(e) : ke = [e] : Ee = e
            }
            function Te() {
                if (Ee) {
                    var e = Ee
                      , t = ke;
                    if (ke = Ee = null,
                    Ce(e),
                    t)
                        for (e = 0; e < t.length; e++)
                            Ce(t[e])
                }
            }
            function xe(e, t) {
                return e(t)
            }
            function Re() {}
            var Ne = !1;
            function Oe(e, t, n) {
                if (Ne)
                    return e(t, n);
                Ne = !0;
                try {
                    return xe(e, t, n)
                } finally {
                    Ne = !1,
                    (null !== Ee || null !== ke) && (Re(),
                    Te())
                }
            }
            function Ae(e, t) {
                var n = e.stateNode;
                if (null === n)
                    return null;
                var r = So(n);
                if (null === r)
                    return null;
                n = r[t];
                e: switch (t) {
                case "onClick":
                case "onClickCapture":
                case "onDoubleClick":
                case "onDoubleClickCapture":
                case "onMouseDown":
                case "onMouseDownCapture":
                case "onMouseMove":
                case "onMouseMoveCapture":
                case "onMouseUp":
                case "onMouseUpCapture":
                case "onMouseEnter":
                    (r = !r.disabled) || (r = !("button" === (e = e.type) || "input" === e || "select" === e || "textarea" === e)),
                    e = !r;
                    break e;
                default:
                    e = !1
                }
                if (e)
                    return null;
                if (n && "function" !== typeof n)
                    throw Error(a(231, t, typeof n));
                return n
            }
            var De = !1;
            if (c)
                try {
                    var Ie = {};
                    Object.defineProperty(Ie, "passive", {
                        get: function() {
                            De = !0
                        }
                    }),
                    window.addEventListener("test", Ie, Ie),
                    window.removeEventListener("test", Ie, Ie)
                } catch (ce) {
                    De = !1
                }
            function Le(e, t, n, r, o, a, i, l, s) {
                var u = Array.prototype.slice.call(arguments, 3);
                try {
                    t.apply(n, u)
                } catch (c) {
                    this.onError(c)
                }
            }
            var Me = !1
              , Ue = null
              , He = !1
              , je = null
              , ze = {
                onError: function(e) {
                    Me = !0,
                    Ue = e
                }
            };
            function qe(e, t, n, r, o, a, i, l, s) {
                Me = !1,
                Ue = null,
                Le.apply(ze, arguments)
            }
            function Fe(e) {
                var t = e
                  , n = e;
                if (e.alternate)
                    for (; t.return; )
                        t = t.return;
                else {
                    e = t;
                    do {
                        0 !== (4098 & (t = e).flags) && (n = t.return),
                        e = t.return
                    } while (e)
                }
                return 3 === t.tag ? n : null
            }
            function Be(e) {
                if (13 === e.tag) {
                    var t = e.memoizedState;
                    if (null === t && (null !== (e = e.alternate) && (t = e.memoizedState)),
                    null !== t)
                        return t.dehydrated
                }
                return null
            }
            function Ve(e) {
                if (Fe(e) !== e)
                    throw Error(a(188))
            }
            function We(e) {
                return null !== (e = function(e) {
                    var t = e.alternate;
                    if (!t) {
                        if (null === (t = Fe(e)))
                            throw Error(a(188));
                        return t !== e ? null : e
                    }
                    for (var n = e, r = t; ; ) {
                        var o = n.return;
                        if (null === o)
                            break;
                        var i = o.alternate;
                        if (null === i) {
                            if (null !== (r = o.return)) {
                                n = r;
                                continue
                            }
                            break
                        }
                        if (o.child === i.child) {
                            for (i = o.child; i; ) {
                                if (i === n)
                                    return Ve(o),
                                    e;
                                if (i === r)
                                    return Ve(o),
                                    t;
                                i = i.sibling
                            }
                            throw Error(a(188))
                        }
                        if (n.return !== r.return)
                            n = o,
                            r = i;
                        else {
                            for (var l = !1, s = o.child; s; ) {
                                if (s === n) {
                                    l = !0,
                                    n = o,
                                    r = i;
                                    break
                                }
                                if (s === r) {
                                    l = !0,
                                    r = o,
                                    n = i;
                                    break
                                }
                                s = s.sibling
                            }
                            if (!l) {
                                for (s = i.child; s; ) {
                                    if (s === n) {
                                        l = !0,
                                        n = i,
                                        r = o;
                                        break
                                    }
                                    if (s === r) {
                                        l = !0,
                                        r = i,
                                        n = o;
                                        break
                                    }
                                    s = s.sibling
                                }
                                if (!l)
                                    throw Error(a(189))
                            }
                        }
                        if (n.alternate !== r)
                            throw Error(a(190))
                    }
                    if (3 !== n.tag)
                        throw Error(a(188));
                    return n.stateNode.current === n ? e : t
                }(e)) ? Ke(e) : null
            }
            function Ke(e) {
                if (5 === e.tag || 6 === e.tag)
                    return e;
                for (e = e.child; null !== e; ) {
                    var t = Ke(e);
                    if (null !== t)
                        return t;
                    e = e.sibling
                }
                return null
            }
            var Ge = o.unstable_scheduleCallback
              , $e = o.unstable_cancelCallback
              , Qe = o.unstable_shouldYield
              , Xe = o.unstable_requestPaint
              , Ye = o.unstable_now
              , Ze = o.unstable_getCurrentPriorityLevel
              , Je = o.unstable_ImmediatePriority
              , et = o.unstable_UserBlockingPriority
              , tt = o.unstable_NormalPriority
              , nt = o.unstable_LowPriority
              , rt = o.unstable_IdlePriority
              , ot = null
              , at = null;
            var it = Math.clz32 ? Math.clz32 : function(e) {
                return e >>>= 0,
                0 === e ? 32 : 31 - (lt(e) / st | 0) | 0
            }
              , lt = Math.log
              , st = Math.LN2;
            var ut = 64
              , ct = 4194304;
            function dt(e) {
                switch (e & -e) {
                case 1:
                    return 1;
                case 2:
                    return 2;
                case 4:
                    return 4;
                case 8:
                    return 8;
                case 16:
                    return 16;
                case 32:
                    return 32;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                    return 4194240 & e;
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    return 130023424 & e;
                case 134217728:
                    return 134217728;
                case 268435456:
                    return 268435456;
                case 536870912:
                    return 536870912;
                case 1073741824:
                    return 1073741824;
                default:
                    return e
                }
            }
            function ft(e, t) {
                var n = e.pendingLanes;
                if (0 === n)
                    return 0;
                var r = 0
                  , o = e.suspendedLanes
                  , a = e.pingedLanes
                  , i = 268435455 & n;
                if (0 !== i) {
                    var l = i & ~o;
                    0 !== l ? r = dt(l) : 0 !== (a &= i) && (r = dt(a))
                } else
                    0 !== (i = n & ~o) ? r = dt(i) : 0 !== a && (r = dt(a));
                if (0 === r)
                    return 0;
                if (0 !== t && t !== r && 0 === (t & o) && ((o = r & -r) >= (a = t & -t) || 16 === o && 0 !== (4194240 & a)))
                    return t;
                if (0 !== (4 & r) && (r |= 16 & n),
                0 !== (t = e.entangledLanes))
                    for (e = e.entanglements,
                    t &= r; 0 < t; )
                        o = 1 << (n = 31 - it(t)),
                        r |= e[n],
                        t &= ~o;
                return r
            }
            function pt(e, t) {
                switch (e) {
                case 1:
                case 2:
                case 4:
                    return t + 250;
                case 8:
                case 16:
                case 32:
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                    return t + 5e3;
                default:
                    return -1
                }
            }
            function ht(e) {
                return 0 !== (e = -1073741825 & e.pendingLanes) ? e : 1073741824 & e ? 1073741824 : 0
            }
            function mt() {
                var e = ut;
                return 0 === (4194240 & (ut <<= 1)) && (ut = 64),
                e
            }
            function yt(e) {
                for (var t = [], n = 0; 31 > n; n++)
                    t.push(e);
                return t
            }
            function gt(e, t, n) {
                e.pendingLanes |= t,
                536870912 !== t && (e.suspendedLanes = 0,
                e.pingedLanes = 0),
                (e = e.eventTimes)[t = 31 - it(t)] = n
            }
            function vt(e, t) {
                var n = e.entangledLanes |= t;
                for (e = e.entanglements; n; ) {
                    var r = 31 - it(n)
                      , o = 1 << r;
                    o & t | e[r] & t && (e[r] |= t),
                    n &= ~o
                }
            }
            var bt = 0;
            function wt(e) {
                return 1 < (e &= -e) ? 4 < e ? 0 !== (268435455 & e) ? 16 : 536870912 : 4 : 1
            }
            var _t, St, Et, kt, Ct, Pt = !1, Tt = [], xt = null, Rt = null, Nt = null, Ot = new Map, At = new Map, Dt = [], It = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
            function Lt(e, t) {
                switch (e) {
                case "focusin":
                case "focusout":
                    xt = null;
                    break;
                case "dragenter":
                case "dragleave":
                    Rt = null;
                    break;
                case "mouseover":
                case "mouseout":
                    Nt = null;
                    break;
                case "pointerover":
                case "pointerout":
                    Ot.delete(t.pointerId);
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                    At.delete(t.pointerId)
                }
            }
            function Mt(e, t, n, r, o, a) {
                return null === e || e.nativeEvent !== a ? (e = {
                    blockedOn: t,
                    domEventName: n,
                    eventSystemFlags: r,
                    nativeEvent: a,
                    targetContainers: [o]
                },
                null !== t && (null !== (t = wo(t)) && St(t)),
                e) : (e.eventSystemFlags |= r,
                t = e.targetContainers,
                null !== o && -1 === t.indexOf(o) && t.push(o),
                e)
            }
            function Ut(e) {
                var t = bo(e.target);
                if (null !== t) {
                    var n = Fe(t);
                    if (null !== n)
                        if (13 === (t = n.tag)) {
                            if (null !== (t = Be(n)))
                                return e.blockedOn = t,
                                void Ct(e.priority, (function() {
                                    Et(n)
                                }
                                ))
                        } else if (3 === t && n.stateNode.current.memoizedState.isDehydrated)
                            return void (e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null)
                }
                e.blockedOn = null
            }
            function Ht(e) {
                if (null !== e.blockedOn)
                    return !1;
                for (var t = e.targetContainers; 0 < t.length; ) {
                    var n = Qt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
                    if (null !== n)
                        return null !== (t = wo(n)) && St(t),
                        e.blockedOn = n,
                        !1;
                    var r = new (n = e.nativeEvent).constructor(n.type,n);
                    we = r,
                    n.target.dispatchEvent(r),
                    we = null,
                    t.shift()
                }
                return !0
            }
            function jt(e, t, n) {
                Ht(e) && n.delete(t)
            }
            function zt() {
                Pt = !1,
                null !== xt && Ht(xt) && (xt = null),
                null !== Rt && Ht(Rt) && (Rt = null),
                null !== Nt && Ht(Nt) && (Nt = null),
                Ot.forEach(jt),
                At.forEach(jt)
            }
            function qt(e, t) {
                e.blockedOn === t && (e.blockedOn = null,
                Pt || (Pt = !0,
                o.unstable_scheduleCallback(o.unstable_NormalPriority, zt)))
            }
            function Ft(e) {
                function t(t) {
                    return qt(t, e)
                }
                if (0 < Tt.length) {
                    qt(Tt[0], e);
                    for (var n = 1; n < Tt.length; n++) {
                        var r = Tt[n];
                        r.blockedOn === e && (r.blockedOn = null)
                    }
                }
                for (null !== xt && qt(xt, e),
                null !== Rt && qt(Rt, e),
                null !== Nt && qt(Nt, e),
                Ot.forEach(t),
                At.forEach(t),
                n = 0; n < Dt.length; n++)
                    (r = Dt[n]).blockedOn === e && (r.blockedOn = null);
                for (; 0 < Dt.length && null === (n = Dt[0]).blockedOn; )
                    Ut(n),
                    null === n.blockedOn && Dt.shift()
            }
            var Bt = w.ReactCurrentBatchConfig
              , Vt = !0;
            function Wt(e, t, n, r) {
                var o = bt
                  , a = Bt.transition;
                Bt.transition = null;
                try {
                    bt = 1,
                    Gt(e, t, n, r)
                } finally {
                    bt = o,
                    Bt.transition = a
                }
            }
            function Kt(e, t, n, r) {
                var o = bt
                  , a = Bt.transition;
                Bt.transition = null;
                try {
                    bt = 4,
                    Gt(e, t, n, r)
                } finally {
                    bt = o,
                    Bt.transition = a
                }
            }
            function Gt(e, t, n, r) {
                if (Vt) {
                    var o = Qt(e, t, n, r);
                    if (null === o)
                        Vr(e, t, r, $t, n),
                        Lt(e, r);
                    else if (function(e, t, n, r, o) {
                        switch (t) {
                        case "focusin":
                            return xt = Mt(xt, e, t, n, r, o),
                            !0;
                        case "dragenter":
                            return Rt = Mt(Rt, e, t, n, r, o),
                            !0;
                        case "mouseover":
                            return Nt = Mt(Nt, e, t, n, r, o),
                            !0;
                        case "pointerover":
                            var a = o.pointerId;
                            return Ot.set(a, Mt(Ot.get(a) || null, e, t, n, r, o)),
                            !0;
                        case "gotpointercapture":
                            return a = o.pointerId,
                            At.set(a, Mt(At.get(a) || null, e, t, n, r, o)),
                            !0
                        }
                        return !1
                    }(o, e, t, n, r))
                        r.stopPropagation();
                    else if (Lt(e, r),
                    4 & t && -1 < It.indexOf(e)) {
                        for (; null !== o; ) {
                            var a = wo(o);
                            if (null !== a && _t(a),
                            null === (a = Qt(e, t, n, r)) && Vr(e, t, r, $t, n),
                            a === o)
                                break;
                            o = a
                        }
                        null !== o && r.stopPropagation()
                    } else
                        Vr(e, t, r, null, n)
                }
            }
            var $t = null;
            function Qt(e, t, n, r) {
                if ($t = null,
                null !== (e = bo(e = _e(r))))
                    if (null === (t = Fe(e)))
                        e = null;
                    else if (13 === (n = t.tag)) {
                        if (null !== (e = Be(t)))
                            return e;
                        e = null
                    } else if (3 === n) {
                        if (t.stateNode.current.memoizedState.isDehydrated)
                            return 3 === t.tag ? t.stateNode.containerInfo : null;
                        e = null
                    } else
                        t !== e && (e = null);
                return $t = e,
                null
            }
            function Xt(e) {
                switch (e) {
                case "cancel":
                case "click":
                case "close":
                case "contextmenu":
                case "copy":
                case "cut":
                case "auxclick":
                case "dblclick":
                case "dragend":
                case "dragstart":
                case "drop":
                case "focusin":
                case "focusout":
                case "input":
                case "invalid":
                case "keydown":
                case "keypress":
                case "keyup":
                case "mousedown":
                case "mouseup":
                case "paste":
                case "pause":
                case "play":
                case "pointercancel":
                case "pointerdown":
                case "pointerup":
                case "ratechange":
                case "reset":
                case "resize":
                case "seeked":
                case "submit":
                case "touchcancel":
                case "touchend":
                case "touchstart":
                case "volumechange":
                case "change":
                case "selectionchange":
                case "textInput":
                case "compositionstart":
                case "compositionend":
                case "compositionupdate":
                case "beforeblur":
                case "afterblur":
                case "beforeinput":
                case "blur":
                case "fullscreenchange":
                case "focus":
                case "hashchange":
                case "popstate":
                case "select":
                case "selectstart":
                    return 1;
                case "drag":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "mousemove":
                case "mouseout":
                case "mouseover":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "scroll":
                case "toggle":
                case "touchmove":
                case "wheel":
                case "mouseenter":
                case "mouseleave":
                case "pointerenter":
                case "pointerleave":
                    return 4;
                case "message":
                    switch (Ze()) {
                    case Je:
                        return 1;
                    case et:
                        return 4;
                    case tt:
                    case nt:
                        return 16;
                    case rt:
                        return 536870912;
                    default:
                        return 16
                    }
                default:
                    return 16
                }
            }
            var Yt = null
              , Zt = null
              , Jt = null;
            function en() {
                if (Jt)
                    return Jt;
                var e, t, n = Zt, r = n.length, o = "value"in Yt ? Yt.value : Yt.textContent, a = o.length;
                for (e = 0; e < r && n[e] === o[e]; e++)
                    ;
                var i = r - e;
                for (t = 1; t <= i && n[r - t] === o[a - t]; t++)
                    ;
                return Jt = o.slice(e, 1 < t ? 1 - t : void 0)
            }
            function tn(e) {
                var t = e.keyCode;
                return "charCode"in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : e = t,
                10 === e && (e = 13),
                32 <= e || 13 === e ? e : 0
            }
            function nn() {
                return !0
            }
            function rn() {
                return !1
            }
            function on(e) {
                function t(t, n, r, o, a) {
                    for (var i in this._reactName = t,
                    this._targetInst = r,
                    this.type = n,
                    this.nativeEvent = o,
                    this.target = a,
                    this.currentTarget = null,
                    e)
                        e.hasOwnProperty(i) && (t = e[i],
                        this[i] = t ? t(o) : o[i]);
                    return this.isDefaultPrevented = (null != o.defaultPrevented ? o.defaultPrevented : !1 === o.returnValue) ? nn : rn,
                    this.isPropagationStopped = rn,
                    this
                }
                return U(t.prototype, {
                    preventDefault: function() {
                        this.defaultPrevented = !0;
                        var e = this.nativeEvent;
                        e && (e.preventDefault ? e.preventDefault() : "unknown" !== typeof e.returnValue && (e.returnValue = !1),
                        this.isDefaultPrevented = nn)
                    },
                    stopPropagation: function() {
                        var e = this.nativeEvent;
                        e && (e.stopPropagation ? e.stopPropagation() : "unknown" !== typeof e.cancelBubble && (e.cancelBubble = !0),
                        this.isPropagationStopped = nn)
                    },
                    persist: function() {},
                    isPersistent: nn
                }),
                t
            }
            var an, ln, sn, un = {
                eventPhase: 0,
                bubbles: 0,
                cancelable: 0,
                timeStamp: function(e) {
                    return e.timeStamp || Date.now()
                },
                defaultPrevented: 0,
                isTrusted: 0
            }, cn = on(un), dn = U({}, un, {
                view: 0,
                detail: 0
            }), fn = on(dn), pn = U({}, dn, {
                screenX: 0,
                screenY: 0,
                clientX: 0,
                clientY: 0,
                pageX: 0,
                pageY: 0,
                ctrlKey: 0,
                shiftKey: 0,
                altKey: 0,
                metaKey: 0,
                getModifierState: Cn,
                button: 0,
                buttons: 0,
                relatedTarget: function(e) {
                    return void 0 === e.relatedTarget ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
                },
                movementX: function(e) {
                    return "movementX"in e ? e.movementX : (e !== sn && (sn && "mousemove" === e.type ? (an = e.screenX - sn.screenX,
                    ln = e.screenY - sn.screenY) : ln = an = 0,
                    sn = e),
                    an)
                },
                movementY: function(e) {
                    return "movementY"in e ? e.movementY : ln
                }
            }), hn = on(pn), mn = on(U({}, pn, {
                dataTransfer: 0
            })), yn = on(U({}, dn, {
                relatedTarget: 0
            })), gn = on(U({}, un, {
                animationName: 0,
                elapsedTime: 0,
                pseudoElement: 0
            })), vn = U({}, un, {
                clipboardData: function(e) {
                    return "clipboardData"in e ? e.clipboardData : window.clipboardData
                }
            }), bn = on(vn), wn = on(U({}, un, {
                data: 0
            })), _n = {
                Esc: "Escape",
                Spacebar: " ",
                Left: "ArrowLeft",
                Up: "ArrowUp",
                Right: "ArrowRight",
                Down: "ArrowDown",
                Del: "Delete",
                Win: "OS",
                Menu: "ContextMenu",
                Apps: "ContextMenu",
                Scroll: "ScrollLock",
                MozPrintableKey: "Unidentified"
            }, Sn = {
                8: "Backspace",
                9: "Tab",
                12: "Clear",
                13: "Enter",
                16: "Shift",
                17: "Control",
                18: "Alt",
                19: "Pause",
                20: "CapsLock",
                27: "Escape",
                32: " ",
                33: "PageUp",
                34: "PageDown",
                35: "End",
                36: "Home",
                37: "ArrowLeft",
                38: "ArrowUp",
                39: "ArrowRight",
                40: "ArrowDown",
                45: "Insert",
                46: "Delete",
                112: "F1",
                113: "F2",
                114: "F3",
                115: "F4",
                116: "F5",
                117: "F6",
                118: "F7",
                119: "F8",
                120: "F9",
                121: "F10",
                122: "F11",
                123: "F12",
                144: "NumLock",
                145: "ScrollLock",
                224: "Meta"
            }, En = {
                Alt: "altKey",
                Control: "ctrlKey",
                Meta: "metaKey",
                Shift: "shiftKey"
            };
            function kn(e) {
                var t = this.nativeEvent;
                return t.getModifierState ? t.getModifierState(e) : !!(e = En[e]) && !!t[e]
            }
            function Cn() {
                return kn
            }
            var Pn = U({}, dn, {
                key: function(e) {
                    if (e.key) {
                        var t = _n[e.key] || e.key;
                        if ("Unidentified" !== t)
                            return t
                    }
                    return "keypress" === e.type ? 13 === (e = tn(e)) ? "Enter" : String.fromCharCode(e) : "keydown" === e.type || "keyup" === e.type ? Sn[e.keyCode] || "Unidentified" : ""
                },
                code: 0,
                location: 0,
                ctrlKey: 0,
                shiftKey: 0,
                altKey: 0,
                metaKey: 0,
                repeat: 0,
                locale: 0,
                getModifierState: Cn,
                charCode: function(e) {
                    return "keypress" === e.type ? tn(e) : 0
                },
                keyCode: function(e) {
                    return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
                },
                which: function(e) {
                    return "keypress" === e.type ? tn(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
                }
            })
              , Tn = on(Pn)
              , xn = on(U({}, pn, {
                pointerId: 0,
                width: 0,
                height: 0,
                pressure: 0,
                tangentialPressure: 0,
                tiltX: 0,
                tiltY: 0,
                twist: 0,
                pointerType: 0,
                isPrimary: 0
            }))
              , Rn = on(U({}, dn, {
                touches: 0,
                targetTouches: 0,
                changedTouches: 0,
                altKey: 0,
                metaKey: 0,
                ctrlKey: 0,
                shiftKey: 0,
                getModifierState: Cn
            }))
              , Nn = on(U({}, un, {
                propertyName: 0,
                elapsedTime: 0,
                pseudoElement: 0
            }))
              , On = U({}, pn, {
                deltaX: function(e) {
                    return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
                },
                deltaY: function(e) {
                    return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
                },
                deltaZ: 0,
                deltaMode: 0
            })
              , An = on(On)
              , Dn = [9, 13, 27, 32]
              , In = c && "CompositionEvent"in window
              , Ln = null;
            c && "documentMode"in document && (Ln = document.documentMode);
            var Mn = c && "TextEvent"in window && !Ln
              , Un = c && (!In || Ln && 8 < Ln && 11 >= Ln)
              , Hn = String.fromCharCode(32)
              , jn = !1;
            function zn(e, t) {
                switch (e) {
                case "keyup":
                    return -1 !== Dn.indexOf(t.keyCode);
                case "keydown":
                    return 229 !== t.keyCode;
                case "keypress":
                case "mousedown":
                case "focusout":
                    return !0;
                default:
                    return !1
                }
            }
            function qn(e) {
                return "object" === typeof (e = e.detail) && "data"in e ? e.data : null
            }
            var Fn = !1;
            var Bn = {
                color: !0,
                date: !0,
                datetime: !0,
                "datetime-local": !0,
                email: !0,
                month: !0,
                number: !0,
                password: !0,
                range: !0,
                search: !0,
                tel: !0,
                text: !0,
                time: !0,
                url: !0,
                week: !0
            };
            function Vn(e) {
                var t = e && e.nodeName && e.nodeName.toLowerCase();
                return "input" === t ? !!Bn[e.type] : "textarea" === t
            }
            function Wn(e, t, n, r) {
                Pe(r),
                0 < (t = Kr(t, "onChange")).length && (n = new cn("onChange","change",null,n,r),
                e.push({
                    event: n,
                    listeners: t
                }))
            }
            var Kn = null
              , Gn = null;
            function $n(e) {
                Hr(e, 0)
            }
            function Qn(e) {
                if (G(_o(e)))
                    return e
            }
            function Xn(e, t) {
                if ("change" === e)
                    return t
            }
            var Yn = !1;
            if (c) {
                var Zn;
                if (c) {
                    var Jn = "oninput"in document;
                    if (!Jn) {
                        var er = document.createElement("div");
                        er.setAttribute("oninput", "return;"),
                        Jn = "function" === typeof er.oninput
                    }
                    Zn = Jn
                } else
                    Zn = !1;
                Yn = Zn && (!document.documentMode || 9 < document.documentMode)
            }
            function tr() {
                Kn && (Kn.detachEvent("onpropertychange", nr),
                Gn = Kn = null)
            }
            function nr(e) {
                if ("value" === e.propertyName && Qn(Gn)) {
                    var t = [];
                    Wn(t, Gn, e, _e(e)),
                    Oe($n, t)
                }
            }
            function rr(e, t, n) {
                "focusin" === e ? (tr(),
                Gn = n,
                (Kn = t).attachEvent("onpropertychange", nr)) : "focusout" === e && tr()
            }
            function or(e) {
                if ("selectionchange" === e || "keyup" === e || "keydown" === e)
                    return Qn(Gn)
            }
            function ar(e, t) {
                if ("click" === e)
                    return Qn(t)
            }
            function ir(e, t) {
                if ("input" === e || "change" === e)
                    return Qn(t)
            }
            var lr = "function" === typeof Object.is ? Object.is : function(e, t) {
                return e === t && (0 !== e || 1 / e === 1 / t) || e !== e && t !== t
            }
            ;
            function sr(e, t) {
                if (lr(e, t))
                    return !0;
                if ("object" !== typeof e || null === e || "object" !== typeof t || null === t)
                    return !1;
                var n = Object.keys(e)
                  , r = Object.keys(t);
                if (n.length !== r.length)
                    return !1;
                for (r = 0; r < n.length; r++) {
                    var o = n[r];
                    if (!d.call(t, o) || !lr(e[o], t[o]))
                        return !1
                }
                return !0
            }
            function ur(e) {
                for (; e && e.firstChild; )
                    e = e.firstChild;
                return e
            }
            function cr(e, t) {
                var n, r = ur(e);
                for (e = 0; r; ) {
                    if (3 === r.nodeType) {
                        if (n = e + r.textContent.length,
                        e <= t && n >= t)
                            return {
                                node: r,
                                offset: t - e
                            };
                        e = n
                    }
                    e: {
                        for (; r; ) {
                            if (r.nextSibling) {
                                r = r.nextSibling;
                                break e
                            }
                            r = r.parentNode
                        }
                        r = void 0
                    }
                    r = ur(r)
                }
            }
            function dr(e, t) {
                return !(!e || !t) && (e === t || (!e || 3 !== e.nodeType) && (t && 3 === t.nodeType ? dr(e, t.parentNode) : "contains"in e ? e.contains(t) : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t))))
            }
            function fr() {
                for (var e = window, t = $(); t instanceof e.HTMLIFrameElement; ) {
                    try {
                        var n = "string" === typeof t.contentWindow.location.href
                    } catch (r) {
                        n = !1
                    }
                    if (!n)
                        break;
                    t = $((e = t.contentWindow).document)
                }
                return t
            }
            function pr(e) {
                var t = e && e.nodeName && e.nodeName.toLowerCase();
                return t && ("input" === t && ("text" === e.type || "search" === e.type || "tel" === e.type || "url" === e.type || "password" === e.type) || "textarea" === t || "true" === e.contentEditable)
            }
            function hr(e) {
                var t = fr()
                  , n = e.focusedElem
                  , r = e.selectionRange;
                if (t !== n && n && n.ownerDocument && dr(n.ownerDocument.documentElement, n)) {
                    if (null !== r && pr(n))
                        if (t = r.start,
                        void 0 === (e = r.end) && (e = t),
                        "selectionStart"in n)
                            n.selectionStart = t,
                            n.selectionEnd = Math.min(e, n.value.length);
                        else if ((e = (t = n.ownerDocument || document) && t.defaultView || window).getSelection) {
                            e = e.getSelection();
                            var o = n.textContent.length
                              , a = Math.min(r.start, o);
                            r = void 0 === r.end ? a : Math.min(r.end, o),
                            !e.extend && a > r && (o = r,
                            r = a,
                            a = o),
                            o = cr(n, a);
                            var i = cr(n, r);
                            o && i && (1 !== e.rangeCount || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && ((t = t.createRange()).setStart(o.node, o.offset),
                            e.removeAllRanges(),
                            a > r ? (e.addRange(t),
                            e.extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset),
                            e.addRange(t)))
                        }
                    for (t = [],
                    e = n; e = e.parentNode; )
                        1 === e.nodeType && t.push({
                            element: e,
                            left: e.scrollLeft,
                            top: e.scrollTop
                        });
                    for ("function" === typeof n.focus && n.focus(),
                    n = 0; n < t.length; n++)
                        (e = t[n]).element.scrollLeft = e.left,
                        e.element.scrollTop = e.top
                }
            }
            var mr = c && "documentMode"in document && 11 >= document.documentMode
              , yr = null
              , gr = null
              , vr = null
              , br = !1;
            function wr(e, t, n) {
                var r = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
                br || null == yr || yr !== $(r) || ("selectionStart"in (r = yr) && pr(r) ? r = {
                    start: r.selectionStart,
                    end: r.selectionEnd
                } : r = {
                    anchorNode: (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection()).anchorNode,
                    anchorOffset: r.anchorOffset,
                    focusNode: r.focusNode,
                    focusOffset: r.focusOffset
                },
                vr && sr(vr, r) || (vr = r,
                0 < (r = Kr(gr, "onSelect")).length && (t = new cn("onSelect","select",null,t,n),
                e.push({
                    event: t,
                    listeners: r
                }),
                t.target = yr)))
            }
            function _r(e, t) {
                var n = {};
                return n[e.toLowerCase()] = t.toLowerCase(),
                n["Webkit" + e] = "webkit" + t,
                n["Moz" + e] = "moz" + t,
                n
            }
            var Sr = {
                animationend: _r("Animation", "AnimationEnd"),
                animationiteration: _r("Animation", "AnimationIteration"),
                animationstart: _r("Animation", "AnimationStart"),
                transitionend: _r("Transition", "TransitionEnd")
            }
              , Er = {}
              , kr = {};
            function Cr(e) {
                if (Er[e])
                    return Er[e];
                if (!Sr[e])
                    return e;
                var t, n = Sr[e];
                for (t in n)
                    if (n.hasOwnProperty(t) && t in kr)
                        return Er[e] = n[t];
                return e
            }
            c && (kr = document.createElement("div").style,
            "AnimationEvent"in window || (delete Sr.animationend.animation,
            delete Sr.animationiteration.animation,
            delete Sr.animationstart.animation),
            "TransitionEvent"in window || delete Sr.transitionend.transition);
            var Pr = Cr("animationend")
              , Tr = Cr("animationiteration")
              , xr = Cr("animationstart")
              , Rr = Cr("transitionend")
              , Nr = new Map
              , Or = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
            function Ar(e, t) {
                Nr.set(e, t),
                s(t, [e])
            }
            for (var Dr = 0; Dr < Or.length; Dr++) {
                var Ir = Or[Dr];
                Ar(Ir.toLowerCase(), "on" + (Ir[0].toUpperCase() + Ir.slice(1)))
            }
            Ar(Pr, "onAnimationEnd"),
            Ar(Tr, "onAnimationIteration"),
            Ar(xr, "onAnimationStart"),
            Ar("dblclick", "onDoubleClick"),
            Ar("focusin", "onFocus"),
            Ar("focusout", "onBlur"),
            Ar(Rr, "onTransitionEnd"),
            u("onMouseEnter", ["mouseout", "mouseover"]),
            u("onMouseLeave", ["mouseout", "mouseover"]),
            u("onPointerEnter", ["pointerout", "pointerover"]),
            u("onPointerLeave", ["pointerout", "pointerover"]),
            s("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
            s("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),
            s("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
            s("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
            s("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")),
            s("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
            var Lr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
              , Mr = new Set("cancel close invalid load scroll toggle".split(" ").concat(Lr));
            function Ur(e, t, n) {
                var r = e.type || "unknown-event";
                e.currentTarget = n,
                function(e, t, n, r, o, i, l, s, u) {
                    if (qe.apply(this, arguments),
                    Me) {
                        if (!Me)
                            throw Error(a(198));
                        var c = Ue;
                        Me = !1,
                        Ue = null,
                        He || (He = !0,
                        je = c)
                    }
                }(r, t, void 0, e),
                e.currentTarget = null
            }
            function Hr(e, t) {
                t = 0 !== (4 & t);
                for (var n = 0; n < e.length; n++) {
                    var r = e[n]
                      , o = r.event;
                    r = r.listeners;
                    e: {
                        var a = void 0;
                        if (t)
                            for (var i = r.length - 1; 0 <= i; i--) {
                                var l = r[i]
                                  , s = l.instance
                                  , u = l.currentTarget;
                                if (l = l.listener,
                                s !== a && o.isPropagationStopped())
                                    break e;
                                Ur(o, l, u),
                                a = s
                            }
                        else
                            for (i = 0; i < r.length; i++) {
                                if (s = (l = r[i]).instance,
                                u = l.currentTarget,
                                l = l.listener,
                                s !== a && o.isPropagationStopped())
                                    break e;
                                Ur(o, l, u),
                                a = s
                            }
                    }
                }
                if (He)
                    throw e = je,
                    He = !1,
                    je = null,
                    e
            }
            function jr(e, t) {
                var n = t[yo];
                void 0 === n && (n = t[yo] = new Set);
                var r = e + "__bubble";
                n.has(r) || (Br(t, e, 2, !1),
                n.add(r))
            }
            function zr(e, t, n) {
                var r = 0;
                t && (r |= 4),
                Br(n, e, r, t)
            }
            var qr = "_reactListening" + Math.random().toString(36).slice(2);
            function Fr(e) {
                if (!e[qr]) {
                    e[qr] = !0,
                    i.forEach((function(t) {
                        "selectionchange" !== t && (Mr.has(t) || zr(t, !1, e),
                        zr(t, !0, e))
                    }
                    ));
                    var t = 9 === e.nodeType ? e : e.ownerDocument;
                    null === t || t[qr] || (t[qr] = !0,
                    zr("selectionchange", !1, t))
                }
            }
            function Br(e, t, n, r) {
                switch (Xt(t)) {
                case 1:
                    var o = Wt;
                    break;
                case 4:
                    o = Kt;
                    break;
                default:
                    o = Gt
                }
                n = o.bind(null, t, n, e),
                o = void 0,
                !De || "touchstart" !== t && "touchmove" !== t && "wheel" !== t || (o = !0),
                r ? void 0 !== o ? e.addEventListener(t, n, {
                    capture: !0,
                    passive: o
                }) : e.addEventListener(t, n, !0) : void 0 !== o ? e.addEventListener(t, n, {
                    passive: o
                }) : e.addEventListener(t, n, !1)
            }
            function Vr(e, t, n, r, o) {
                var a = r;
                if (0 === (1 & t) && 0 === (2 & t) && null !== r)
                    e: for (; ; ) {
                        if (null === r)
                            return;
                        var i = r.tag;
                        if (3 === i || 4 === i) {
                            var l = r.stateNode.containerInfo;
                            if (l === o || 8 === l.nodeType && l.parentNode === o)
                                break;
                            if (4 === i)
                                for (i = r.return; null !== i; ) {
                                    var s = i.tag;
                                    if ((3 === s || 4 === s) && ((s = i.stateNode.containerInfo) === o || 8 === s.nodeType && s.parentNode === o))
                                        return;
                                    i = i.return
                                }
                            for (; null !== l; ) {
                                if (null === (i = bo(l)))
                                    return;
                                if (5 === (s = i.tag) || 6 === s) {
                                    r = a = i;
                                    continue e
                                }
                                l = l.parentNode
                            }
                        }
                        r = r.return
                    }
                Oe((function() {
                    var r = a
                      , o = _e(n)
                      , i = [];
                    e: {
                        var l = Nr.get(e);
                        if (void 0 !== l) {
                            var s = cn
                              , u = e;
                            switch (e) {
                            case "keypress":
                                if (0 === tn(n))
                                    break e;
                            case "keydown":
                            case "keyup":
                                s = Tn;
                                break;
                            case "focusin":
                                u = "focus",
                                s = yn;
                                break;
                            case "focusout":
                                u = "blur",
                                s = yn;
                                break;
                            case "beforeblur":
                            case "afterblur":
                                s = yn;
                                break;
                            case "click":
                                if (2 === n.button)
                                    break e;
                            case "auxclick":
                            case "dblclick":
                            case "mousedown":
                            case "mousemove":
                            case "mouseup":
                            case "mouseout":
                            case "mouseover":
                            case "contextmenu":
                                s = hn;
                                break;
                            case "drag":
                            case "dragend":
                            case "dragenter":
                            case "dragexit":
                            case "dragleave":
                            case "dragover":
                            case "dragstart":
                            case "drop":
                                s = mn;
                                break;
                            case "touchcancel":
                            case "touchend":
                            case "touchmove":
                            case "touchstart":
                                s = Rn;
                                break;
                            case Pr:
                            case Tr:
                            case xr:
                                s = gn;
                                break;
                            case Rr:
                                s = Nn;
                                break;
                            case "scroll":
                                s = fn;
                                break;
                            case "wheel":
                                s = An;
                                break;
                            case "copy":
                            case "cut":
                            case "paste":
                                s = bn;
                                break;
                            case "gotpointercapture":
                            case "lostpointercapture":
                            case "pointercancel":
                            case "pointerdown":
                            case "pointermove":
                            case "pointerout":
                            case "pointerover":
                            case "pointerup":
                                s = xn
                            }
                            var c = 0 !== (4 & t)
                              , d = !c && "scroll" === e
                              , f = c ? null !== l ? l + "Capture" : null : l;
                            c = [];
                            for (var p, h = r; null !== h; ) {
                                var m = (p = h).stateNode;
                                if (5 === p.tag && null !== m && (p = m,
                                null !== f && (null != (m = Ae(h, f)) && c.push(Wr(h, m, p)))),
                                d)
                                    break;
                                h = h.return
                            }
                            0 < c.length && (l = new s(l,u,null,n,o),
                            i.push({
                                event: l,
                                listeners: c
                            }))
                        }
                    }
                    if (0 === (7 & t)) {
                        if (s = "mouseout" === e || "pointerout" === e,
                        (!(l = "mouseover" === e || "pointerover" === e) || n === we || !(u = n.relatedTarget || n.fromElement) || !bo(u) && !u[mo]) && (s || l) && (l = o.window === o ? o : (l = o.ownerDocument) ? l.defaultView || l.parentWindow : window,
                        s ? (s = r,
                        null !== (u = (u = n.relatedTarget || n.toElement) ? bo(u) : null) && (u !== (d = Fe(u)) || 5 !== u.tag && 6 !== u.tag) && (u = null)) : (s = null,
                        u = r),
                        s !== u)) {
                            if (c = hn,
                            m = "onMouseLeave",
                            f = "onMouseEnter",
                            h = "mouse",
                            "pointerout" !== e && "pointerover" !== e || (c = xn,
                            m = "onPointerLeave",
                            f = "onPointerEnter",
                            h = "pointer"),
                            d = null == s ? l : _o(s),
                            p = null == u ? l : _o(u),
                            (l = new c(m,h + "leave",s,n,o)).target = d,
                            l.relatedTarget = p,
                            m = null,
                            bo(o) === r && ((c = new c(f,h + "enter",u,n,o)).target = p,
                            c.relatedTarget = d,
                            m = c),
                            d = m,
                            s && u)
                                e: {
                                    for (f = u,
                                    h = 0,
                                    p = c = s; p; p = Gr(p))
                                        h++;
                                    for (p = 0,
                                    m = f; m; m = Gr(m))
                                        p++;
                                    for (; 0 < h - p; )
                                        c = Gr(c),
                                        h--;
                                    for (; 0 < p - h; )
                                        f = Gr(f),
                                        p--;
                                    for (; h--; ) {
                                        if (c === f || null !== f && c === f.alternate)
                                            break e;
                                        c = Gr(c),
                                        f = Gr(f)
                                    }
                                    c = null
                                }
                            else
                                c = null;
                            null !== s && $r(i, l, s, c, !1),
                            null !== u && null !== d && $r(i, d, u, c, !0)
                        }
                        if ("select" === (s = (l = r ? _o(r) : window).nodeName && l.nodeName.toLowerCase()) || "input" === s && "file" === l.type)
                            var y = Xn;
                        else if (Vn(l))
                            if (Yn)
                                y = ir;
                            else {
                                y = or;
                                var g = rr
                            }
                        else
                            (s = l.nodeName) && "input" === s.toLowerCase() && ("checkbox" === l.type || "radio" === l.type) && (y = ar);
                        switch (y && (y = y(e, r)) ? Wn(i, y, n, o) : (g && g(e, l, r),
                        "focusout" === e && (g = l._wrapperState) && g.controlled && "number" === l.type && ee(l, "number", l.value)),
                        g = r ? _o(r) : window,
                        e) {
                        case "focusin":
                            (Vn(g) || "true" === g.contentEditable) && (yr = g,
                            gr = r,
                            vr = null);
                            break;
                        case "focusout":
                            vr = gr = yr = null;
                            break;
                        case "mousedown":
                            br = !0;
                            break;
                        case "contextmenu":
                        case "mouseup":
                        case "dragend":
                            br = !1,
                            wr(i, n, o);
                            break;
                        case "selectionchange":
                            if (mr)
                                break;
                        case "keydown":
                        case "keyup":
                            wr(i, n, o)
                        }
                        var v;
                        if (In)
                            e: {
                                switch (e) {
                                case "compositionstart":
                                    var b = "onCompositionStart";
                                    break e;
                                case "compositionend":
                                    b = "onCompositionEnd";
                                    break e;
                                case "compositionupdate":
                                    b = "onCompositionUpdate";
                                    break e
                                }
                                b = void 0
                            }
                        else
                            Fn ? zn(e, n) && (b = "onCompositionEnd") : "keydown" === e && 229 === n.keyCode && (b = "onCompositionStart");
                        b && (Un && "ko" !== n.locale && (Fn || "onCompositionStart" !== b ? "onCompositionEnd" === b && Fn && (v = en()) : (Zt = "value"in (Yt = o) ? Yt.value : Yt.textContent,
                        Fn = !0)),
                        0 < (g = Kr(r, b)).length && (b = new wn(b,e,null,n,o),
                        i.push({
                            event: b,
                            listeners: g
                        }),
                        v ? b.data = v : null !== (v = qn(n)) && (b.data = v))),
                        (v = Mn ? function(e, t) {
                            switch (e) {
                            case "compositionend":
                                return qn(t);
                            case "keypress":
                                return 32 !== t.which ? null : (jn = !0,
                                Hn);
                            case "textInput":
                                return (e = t.data) === Hn && jn ? null : e;
                            default:
                                return null
                            }
                        }(e, n) : function(e, t) {
                            if (Fn)
                                return "compositionend" === e || !In && zn(e, t) ? (e = en(),
                                Jt = Zt = Yt = null,
                                Fn = !1,
                                e) : null;
                            switch (e) {
                            case "paste":
                            default:
                                return null;
                            case "keypress":
                                if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                                    if (t.char && 1 < t.char.length)
                                        return t.char;
                                    if (t.which)
                                        return String.fromCharCode(t.which)
                                }
                                return null;
                            case "compositionend":
                                return Un && "ko" !== t.locale ? null : t.data
                            }
                        }(e, n)) && (0 < (r = Kr(r, "onBeforeInput")).length && (o = new wn("onBeforeInput","beforeinput",null,n,o),
                        i.push({
                            event: o,
                            listeners: r
                        }),
                        o.data = v))
                    }
                    Hr(i, t)
                }
                ))
            }
            function Wr(e, t, n) {
                return {
                    instance: e,
                    listener: t,
                    currentTarget: n
                }
            }
            function Kr(e, t) {
                for (var n = t + "Capture", r = []; null !== e; ) {
                    var o = e
                      , a = o.stateNode;
                    5 === o.tag && null !== a && (o = a,
                    null != (a = Ae(e, n)) && r.unshift(Wr(e, a, o)),
                    null != (a = Ae(e, t)) && r.push(Wr(e, a, o))),
                    e = e.return
                }
                return r
            }
            function Gr(e) {
                if (null === e)
                    return null;
                do {
                    e = e.return
                } while (e && 5 !== e.tag);
                return e || null
            }
            function $r(e, t, n, r, o) {
                for (var a = t._reactName, i = []; null !== n && n !== r; ) {
                    var l = n
                      , s = l.alternate
                      , u = l.stateNode;
                    if (null !== s && s === r)
                        break;
                    5 === l.tag && null !== u && (l = u,
                    o ? null != (s = Ae(n, a)) && i.unshift(Wr(n, s, l)) : o || null != (s = Ae(n, a)) && i.push(Wr(n, s, l))),
                    n = n.return
                }
                0 !== i.length && e.push({
                    event: t,
                    listeners: i
                })
            }
            var Qr = /\r\n?/g
              , Xr = /\u0000|\uFFFD/g;
            function Yr(e) {
                return ("string" === typeof e ? e : "" + e).replace(Qr, "\n").replace(Xr, "")
            }
            function Zr(e, t, n) {
                if (t = Yr(t),
                Yr(e) !== t && n)
                    throw Error(a(425))
            }
            function Jr() {}
            var eo = null
              , to = null;
            function no(e, t) {
                return "textarea" === e || "noscript" === e || "string" === typeof t.children || "number" === typeof t.children || "object" === typeof t.dangerouslySetInnerHTML && null !== t.dangerouslySetInnerHTML && null != t.dangerouslySetInnerHTML.__html
            }
            var ro = "function" === typeof setTimeout ? setTimeout : void 0
              , oo = "function" === typeof clearTimeout ? clearTimeout : void 0
              , ao = "function" === typeof Promise ? Promise : void 0
              , io = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof ao ? function(e) {
                return ao.resolve(null).then(e).catch(lo)
            }
            : ro;
            function lo(e) {
                setTimeout((function() {
                    throw e
                }
                ))
            }
            function so(e, t) {
                var n = t
                  , r = 0;
                do {
                    var o = n.nextSibling;
                    if (e.removeChild(n),
                    o && 8 === o.nodeType)
                        if ("/$" === (n = o.data)) {
                            if (0 === r)
                                return e.removeChild(o),
                                void Ft(t);
                            r--
                        } else
                            "$" !== n && "$?" !== n && "$!" !== n || r++;
                    n = o
                } while (n);
                Ft(t)
            }
            function uo(e) {
                for (; null != e; e = e.nextSibling) {
                    var t = e.nodeType;
                    if (1 === t || 3 === t)
                        break;
                    if (8 === t) {
                        if ("$" === (t = e.data) || "$!" === t || "$?" === t)
                            break;
                        if ("/$" === t)
                            return null
                    }
                }
                return e
            }
            function co(e) {
                e = e.previousSibling;
                for (var t = 0; e; ) {
                    if (8 === e.nodeType) {
                        var n = e.data;
                        if ("$" === n || "$!" === n || "$?" === n) {
                            if (0 === t)
                                return e;
                            t--
                        } else
                            "/$" === n && t++
                    }
                    e = e.previousSibling
                }
                return null
            }
            var fo = Math.random().toString(36).slice(2)
              , po = "__reactFiber$" + fo
              , ho = "__reactProps$" + fo
              , mo = "__reactContainer$" + fo
              , yo = "__reactEvents$" + fo
              , go = "__reactListeners$" + fo
              , vo = "__reactHandles$" + fo;
            function bo(e) {
                var t = e[po];
                if (t)
                    return t;
                for (var n = e.parentNode; n; ) {
                    if (t = n[mo] || n[po]) {
                        if (n = t.alternate,
                        null !== t.child || null !== n && null !== n.child)
                            for (e = co(e); null !== e; ) {
                                if (n = e[po])
                                    return n;
                                e = co(e)
                            }
                        return t
                    }
                    n = (e = n).parentNode
                }
                return null
            }
            function wo(e) {
                return !(e = e[po] || e[mo]) || 5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag ? null : e
            }
            function _o(e) {
                if (5 === e.tag || 6 === e.tag)
                    return e.stateNode;
                throw Error(a(33))
            }
            function So(e) {
                return e[ho] || null
            }
            var Eo = []
              , ko = -1;
            function Co(e) {
                return {
                    current: e
                }
            }
            function Po(e) {
                0 > ko || (e.current = Eo[ko],
                Eo[ko] = null,
                ko--)
            }
            function To(e, t) {
                ko++,
                Eo[ko] = e.current,
                e.current = t
            }
            var xo = {}
              , Ro = Co(xo)
              , No = Co(!1)
              , Oo = xo;
            function Ao(e, t) {
                var n = e.type.contextTypes;
                if (!n)
                    return xo;
                var r = e.stateNode;
                if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
                    return r.__reactInternalMemoizedMaskedChildContext;
                var o, a = {};
                for (o in n)
                    a[o] = t[o];
                return r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t,
                e.__reactInternalMemoizedMaskedChildContext = a),
                a
            }
            function Do(e) {
                return null !== (e = e.childContextTypes) && void 0 !== e
            }
            function Io() {
                Po(No),
                Po(Ro)
            }
            function Lo(e, t, n) {
                if (Ro.current !== xo)
                    throw Error(a(168));
                To(Ro, t),
                To(No, n)
            }
            function Mo(e, t, n) {
                var r = e.stateNode;
                if (t = t.childContextTypes,
                "function" !== typeof r.getChildContext)
                    return n;
                for (var o in r = r.getChildContext())
                    if (!(o in t))
                        throw Error(a(108, B(e) || "Unknown", o));
                return U({}, n, r)
            }
            function Uo(e) {
                return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || xo,
                Oo = Ro.current,
                To(Ro, e),
                To(No, No.current),
                !0
            }
            function Ho(e, t, n) {
                var r = e.stateNode;
                if (!r)
                    throw Error(a(169));
                n ? (e = Mo(e, t, Oo),
                r.__reactInternalMemoizedMergedChildContext = e,
                Po(No),
                Po(Ro),
                To(Ro, e)) : Po(No),
                To(No, n)
            }
            var jo = null
              , zo = !1
              , qo = !1;
            function Fo(e) {
                null === jo ? jo = [e] : jo.push(e)
            }
            function Bo() {
                if (!qo && null !== jo) {
                    qo = !0;
                    var e = 0
                      , t = bt;
                    try {
                        var n = jo;
                        for (bt = 1; e < n.length; e++) {
                            var r = n[e];
                            do {
                                r = r(!0)
                            } while (null !== r)
                        }
                        jo = null,
                        zo = !1
                    } catch (o) {
                        throw null !== jo && (jo = jo.slice(e + 1)),
                        Ge(Je, Bo),
                        o
                    } finally {
                        bt = t,
                        qo = !1
                    }
                }
                return null
            }
            var Vo = []
              , Wo = 0
              , Ko = null
              , Go = 0
              , $o = []
              , Qo = 0
              , Xo = null
              , Yo = 1
              , Zo = "";
            function Jo(e, t) {
                Vo[Wo++] = Go,
                Vo[Wo++] = Ko,
                Ko = e,
                Go = t
            }
            function ea(e, t, n) {
                $o[Qo++] = Yo,
                $o[Qo++] = Zo,
                $o[Qo++] = Xo,
                Xo = e;
                var r = Yo;
                e = Zo;
                var o = 32 - it(r) - 1;
                r &= ~(1 << o),
                n += 1;
                var a = 32 - it(t) + o;
                if (30 < a) {
                    var i = o - o % 5;
                    a = (r & (1 << i) - 1).toString(32),
                    r >>= i,
                    o -= i,
                    Yo = 1 << 32 - it(t) + o | n << o | r,
                    Zo = a + e
                } else
                    Yo = 1 << a | n << o | r,
                    Zo = e
            }
            function ta(e) {
                null !== e.return && (Jo(e, 1),
                ea(e, 1, 0))
            }
            function na(e) {
                for (; e === Ko; )
                    Ko = Vo[--Wo],
                    Vo[Wo] = null,
                    Go = Vo[--Wo],
                    Vo[Wo] = null;
                for (; e === Xo; )
                    Xo = $o[--Qo],
                    $o[Qo] = null,
                    Zo = $o[--Qo],
                    $o[Qo] = null,
                    Yo = $o[--Qo],
                    $o[Qo] = null
            }
            var ra = null
              , oa = null
              , aa = !1
              , ia = null;
            function la(e, t) {
                var n = Ou(5, null, null, 0);
                n.elementType = "DELETED",
                n.stateNode = t,
                n.return = e,
                null === (t = e.deletions) ? (e.deletions = [n],
                e.flags |= 16) : t.push(n)
            }
            function sa(e, t) {
                switch (e.tag) {
                case 5:
                    var n = e.type;
                    return null !== (t = 1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t) && (e.stateNode = t,
                    ra = e,
                    oa = uo(t.firstChild),
                    !0);
                case 6:
                    return null !== (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) && (e.stateNode = t,
                    ra = e,
                    oa = null,
                    !0);
                case 13:
                    return null !== (t = 8 !== t.nodeType ? null : t) && (n = null !== Xo ? {
                        id: Yo,
                        overflow: Zo
                    } : null,
                    e.memoizedState = {
                        dehydrated: t,
                        treeContext: n,
                        retryLane: 1073741824
                    },
                    (n = Ou(18, null, null, 0)).stateNode = t,
                    n.return = e,
                    e.child = n,
                    ra = e,
                    oa = null,
                    !0);
                default:
                    return !1
                }
            }
            function ua(e) {
                return 0 !== (1 & e.mode) && 0 === (128 & e.flags)
            }
            function ca(e) {
                if (aa) {
                    var t = oa;
                    if (t) {
                        var n = t;
                        if (!sa(e, t)) {
                            if (ua(e))
                                throw Error(a(418));
                            t = uo(n.nextSibling);
                            var r = ra;
                            t && sa(e, t) ? la(r, n) : (e.flags = -4097 & e.flags | 2,
                            aa = !1,
                            ra = e)
                        }
                    } else {
                        if (ua(e))
                            throw Error(a(418));
                        e.flags = -4097 & e.flags | 2,
                        aa = !1,
                        ra = e
                    }
                }
            }
            function da(e) {
                for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag; )
                    e = e.return;
                ra = e
            }
            function fa(e) {
                if (e !== ra)
                    return !1;
                if (!aa)
                    return da(e),
                    aa = !0,
                    !1;
                var t;
                if ((t = 3 !== e.tag) && !(t = 5 !== e.tag) && (t = "head" !== (t = e.type) && "body" !== t && !no(e.type, e.memoizedProps)),
                t && (t = oa)) {
                    if (ua(e))
                        throw pa(),
                        Error(a(418));
                    for (; t; )
                        la(e, t),
                        t = uo(t.nextSibling)
                }
                if (da(e),
                13 === e.tag) {
                    if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
                        throw Error(a(317));
                    e: {
                        for (e = e.nextSibling,
                        t = 0; e; ) {
                            if (8 === e.nodeType) {
                                var n = e.data;
                                if ("/$" === n) {
                                    if (0 === t) {
                                        oa = uo(e.nextSibling);
                                        break e
                                    }
                                    t--
                                } else
                                    "$" !== n && "$!" !== n && "$?" !== n || t++
                            }
                            e = e.nextSibling
                        }
                        oa = null
                    }
                } else
                    oa = ra ? uo(e.stateNode.nextSibling) : null;
                return !0
            }
            function pa() {
                for (var e = oa; e; )
                    e = uo(e.nextSibling)
            }
            function ha() {
                oa = ra = null,
                aa = !1
            }
            function ma(e) {
                null === ia ? ia = [e] : ia.push(e)
            }
            var ya = w.ReactCurrentBatchConfig;
            function ga(e, t, n) {
                if (null !== (e = n.ref) && "function" !== typeof e && "object" !== typeof e) {
                    if (n._owner) {
                        if (n = n._owner) {
                            if (1 !== n.tag)
                                throw Error(a(309));
                            var r = n.stateNode
                        }
                        if (!r)
                            throw Error(a(147, e));
                        var o = r
                          , i = "" + e;
                        return null !== t && null !== t.ref && "function" === typeof t.ref && t.ref._stringRef === i ? t.ref : (t = function(e) {
                            var t = o.refs;
                            null === e ? delete t[i] : t[i] = e
                        }
                        ,
                        t._stringRef = i,
                        t)
                    }
                    if ("string" !== typeof e)
                        throw Error(a(284));
                    if (!n._owner)
                        throw Error(a(290, e))
                }
                return e
            }
            function va(e, t) {
                throw e = Object.prototype.toString.call(t),
                Error(a(31, "[object Object]" === e ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
            }
            function ba(e) {
                return (0,
                e._init)(e._payload)
            }
            function wa(e) {
                function t(t, n) {
                    if (e) {
                        var r = t.deletions;
                        null === r ? (t.deletions = [n],
                        t.flags |= 16) : r.push(n)
                    }
                }
                function n(n, r) {
                    if (!e)
                        return null;
                    for (; null !== r; )
                        t(n, r),
                        r = r.sibling;
                    return null
                }
                function r(e, t) {
                    for (e = new Map; null !== t; )
                        null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
                        t = t.sibling;
                    return e
                }
                function o(e, t) {
                    return (e = Du(e, t)).index = 0,
                    e.sibling = null,
                    e
                }
                function i(t, n, r) {
                    return t.index = r,
                    e ? null !== (r = t.alternate) ? (r = r.index) < n ? (t.flags |= 2,
                    n) : r : (t.flags |= 2,
                    n) : (t.flags |= 1048576,
                    n)
                }
                function l(t) {
                    return e && null === t.alternate && (t.flags |= 2),
                    t
                }
                function s(e, t, n, r) {
                    return null === t || 6 !== t.tag ? ((t = Uu(n, e.mode, r)).return = e,
                    t) : ((t = o(t, n)).return = e,
                    t)
                }
                function u(e, t, n, r) {
                    var a = n.type;
                    return a === E ? d(e, t, n.props.children, r, n.key) : null !== t && (t.elementType === a || "object" === typeof a && null !== a && a.$$typeof === A && ba(a) === t.type) ? ((r = o(t, n.props)).ref = ga(e, t, n),
                    r.return = e,
                    r) : ((r = Iu(n.type, n.key, n.props, null, e.mode, r)).ref = ga(e, t, n),
                    r.return = e,
                    r)
                }
                function c(e, t, n, r) {
                    return null === t || 4 !== t.tag || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? ((t = Hu(n, e.mode, r)).return = e,
                    t) : ((t = o(t, n.children || [])).return = e,
                    t)
                }
                function d(e, t, n, r, a) {
                    return null === t || 7 !== t.tag ? ((t = Lu(n, e.mode, r, a)).return = e,
                    t) : ((t = o(t, n)).return = e,
                    t)
                }
                function f(e, t, n) {
                    if ("string" === typeof t && "" !== t || "number" === typeof t)
                        return (t = Uu("" + t, e.mode, n)).return = e,
                        t;
                    if ("object" === typeof t && null !== t) {
                        switch (t.$$typeof) {
                        case _:
                            return (n = Iu(t.type, t.key, t.props, null, e.mode, n)).ref = ga(e, null, t),
                            n.return = e,
                            n;
                        case S:
                            return (t = Hu(t, e.mode, n)).return = e,
                            t;
                        case A:
                            return f(e, (0,
                            t._init)(t._payload), n)
                        }
                        if (te(t) || L(t))
                            return (t = Lu(t, e.mode, n, null)).return = e,
                            t;
                        va(e, t)
                    }
                    return null
                }
                function p(e, t, n, r) {
                    var o = null !== t ? t.key : null;
                    if ("string" === typeof n && "" !== n || "number" === typeof n)
                        return null !== o ? null : s(e, t, "" + n, r);
                    if ("object" === typeof n && null !== n) {
                        switch (n.$$typeof) {
                        case _:
                            return n.key === o ? u(e, t, n, r) : null;
                        case S:
                            return n.key === o ? c(e, t, n, r) : null;
                        case A:
                            return p(e, t, (o = n._init)(n._payload), r)
                        }
                        if (te(n) || L(n))
                            return null !== o ? null : d(e, t, n, r, null);
                        va(e, n)
                    }
                    return null
                }
                function h(e, t, n, r, o) {
                    if ("string" === typeof r && "" !== r || "number" === typeof r)
                        return s(t, e = e.get(n) || null, "" + r, o);
                    if ("object" === typeof r && null !== r) {
                        switch (r.$$typeof) {
                        case _:
                            return u(t, e = e.get(null === r.key ? n : r.key) || null, r, o);
                        case S:
                            return c(t, e = e.get(null === r.key ? n : r.key) || null, r, o);
                        case A:
                            return h(e, t, n, (0,
                            r._init)(r._payload), o)
                        }
                        if (te(r) || L(r))
                            return d(t, e = e.get(n) || null, r, o, null);
                        va(t, r)
                    }
                    return null
                }
                function m(o, a, l, s) {
                    for (var u = null, c = null, d = a, m = a = 0, y = null; null !== d && m < l.length; m++) {
                        d.index > m ? (y = d,
                        d = null) : y = d.sibling;
                        var g = p(o, d, l[m], s);
                        if (null === g) {
                            null === d && (d = y);
                            break
                        }
                        e && d && null === g.alternate && t(o, d),
                        a = i(g, a, m),
                        null === c ? u = g : c.sibling = g,
                        c = g,
                        d = y
                    }
                    if (m === l.length)
                        return n(o, d),
                        aa && Jo(o, m),
                        u;
                    if (null === d) {
                        for (; m < l.length; m++)
                            null !== (d = f(o, l[m], s)) && (a = i(d, a, m),
                            null === c ? u = d : c.sibling = d,
                            c = d);
                        return aa && Jo(o, m),
                        u
                    }
                    for (d = r(o, d); m < l.length; m++)
                        null !== (y = h(d, o, m, l[m], s)) && (e && null !== y.alternate && d.delete(null === y.key ? m : y.key),
                        a = i(y, a, m),
                        null === c ? u = y : c.sibling = y,
                        c = y);
                    return e && d.forEach((function(e) {
                        return t(o, e)
                    }
                    )),
                    aa && Jo(o, m),
                    u
                }
                function y(o, l, s, u) {
                    var c = L(s);
                    if ("function" !== typeof c)
                        throw Error(a(150));
                    if (null == (s = c.call(s)))
                        throw Error(a(151));
                    for (var d = c = null, m = l, y = l = 0, g = null, v = s.next(); null !== m && !v.done; y++,
                    v = s.next()) {
                        m.index > y ? (g = m,
                        m = null) : g = m.sibling;
                        var b = p(o, m, v.value, u);
                        if (null === b) {
                            null === m && (m = g);
                            break
                        }
                        e && m && null === b.alternate && t(o, m),
                        l = i(b, l, y),
                        null === d ? c = b : d.sibling = b,
                        d = b,
                        m = g
                    }
                    if (v.done)
                        return n(o, m),
                        aa && Jo(o, y),
                        c;
                    if (null === m) {
                        for (; !v.done; y++,
                        v = s.next())
                            null !== (v = f(o, v.value, u)) && (l = i(v, l, y),
                            null === d ? c = v : d.sibling = v,
                            d = v);
                        return aa && Jo(o, y),
                        c
                    }
                    for (m = r(o, m); !v.done; y++,
                    v = s.next())
                        null !== (v = h(m, o, y, v.value, u)) && (e && null !== v.alternate && m.delete(null === v.key ? y : v.key),
                        l = i(v, l, y),
                        null === d ? c = v : d.sibling = v,
                        d = v);
                    return e && m.forEach((function(e) {
                        return t(o, e)
                    }
                    )),
                    aa && Jo(o, y),
                    c
                }
                return function e(r, a, i, s) {
                    if ("object" === typeof i && null !== i && i.type === E && null === i.key && (i = i.props.children),
                    "object" === typeof i && null !== i) {
                        switch (i.$$typeof) {
                        case _:
                            e: {
                                for (var u = i.key, c = a; null !== c; ) {
                                    if (c.key === u) {
                                        if ((u = i.type) === E) {
                                            if (7 === c.tag) {
                                                n(r, c.sibling),
                                                (a = o(c, i.props.children)).return = r,
                                                r = a;
                                                break e
                                            }
                                        } else if (c.elementType === u || "object" === typeof u && null !== u && u.$$typeof === A && ba(u) === c.type) {
                                            n(r, c.sibling),
                                            (a = o(c, i.props)).ref = ga(r, c, i),
                                            a.return = r,
                                            r = a;
                                            break e
                                        }
                                        n(r, c);
                                        break
                                    }
                                    t(r, c),
                                    c = c.sibling
                                }
                                i.type === E ? ((a = Lu(i.props.children, r.mode, s, i.key)).return = r,
                                r = a) : ((s = Iu(i.type, i.key, i.props, null, r.mode, s)).ref = ga(r, a, i),
                                s.return = r,
                                r = s)
                            }
                            return l(r);
                        case S:
                            e: {
                                for (c = i.key; null !== a; ) {
                                    if (a.key === c) {
                                        if (4 === a.tag && a.stateNode.containerInfo === i.containerInfo && a.stateNode.implementation === i.implementation) {
                                            n(r, a.sibling),
                                            (a = o(a, i.children || [])).return = r,
                                            r = a;
                                            break e
                                        }
                                        n(r, a);
                                        break
                                    }
                                    t(r, a),
                                    a = a.sibling
                                }
                                (a = Hu(i, r.mode, s)).return = r,
                                r = a
                            }
                            return l(r);
                        case A:
                            return e(r, a, (c = i._init)(i._payload), s)
                        }
                        if (te(i))
                            return m(r, a, i, s);
                        if (L(i))
                            return y(r, a, i, s);
                        va(r, i)
                    }
                    return "string" === typeof i && "" !== i || "number" === typeof i ? (i = "" + i,
                    null !== a && 6 === a.tag ? (n(r, a.sibling),
                    (a = o(a, i)).return = r,
                    r = a) : (n(r, a),
                    (a = Uu(i, r.mode, s)).return = r,
                    r = a),
                    l(r)) : n(r, a)
                }
            }
            var _a = wa(!0)
              , Sa = wa(!1)
              , Ea = Co(null)
              , ka = null
              , Ca = null
              , Pa = null;
            function Ta() {
                Pa = Ca = ka = null
            }
            function xa(e) {
                var t = Ea.current;
                Po(Ea),
                e._currentValue = t
            }
            function Ra(e, t, n) {
                for (; null !== e; ) {
                    var r = e.alternate;
                    if ((e.childLanes & t) !== t ? (e.childLanes |= t,
                    null !== r && (r.childLanes |= t)) : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
                    e === n)
                        break;
                    e = e.return
                }
            }
            function Na(e, t) {
                ka = e,
                Pa = Ca = null,
                null !== (e = e.dependencies) && null !== e.firstContext && (0 !== (e.lanes & t) && (bl = !0),
                e.firstContext = null)
            }
            function Oa(e) {
                var t = e._currentValue;
                if (Pa !== e)
                    if (e = {
                        context: e,
                        memoizedValue: t,
                        next: null
                    },
                    null === Ca) {
                        if (null === ka)
                            throw Error(a(308));
                        Ca = e,
                        ka.dependencies = {
                            lanes: 0,
                            firstContext: e
                        }
                    } else
                        Ca = Ca.next = e;
                return t
            }
            var Aa = null;
            function Da(e) {
                null === Aa ? Aa = [e] : Aa.push(e)
            }
            function Ia(e, t, n, r) {
                var o = t.interleaved;
                return null === o ? (n.next = n,
                Da(t)) : (n.next = o.next,
                o.next = n),
                t.interleaved = n,
                La(e, r)
            }
            function La(e, t) {
                e.lanes |= t;
                var n = e.alternate;
                for (null !== n && (n.lanes |= t),
                n = e,
                e = e.return; null !== e; )
                    e.childLanes |= t,
                    null !== (n = e.alternate) && (n.childLanes |= t),
                    n = e,
                    e = e.return;
                return 3 === n.tag ? n.stateNode : null
            }
            var Ma = !1;
            function Ua(e) {
                e.updateQueue = {
                    baseState: e.memoizedState,
                    firstBaseUpdate: null,
                    lastBaseUpdate: null,
                    shared: {
                        pending: null,
                        interleaved: null,
                        lanes: 0
                    },
                    effects: null
                }
            }
            function Ha(e, t) {
                e = e.updateQueue,
                t.updateQueue === e && (t.updateQueue = {
                    baseState: e.baseState,
                    firstBaseUpdate: e.firstBaseUpdate,
                    lastBaseUpdate: e.lastBaseUpdate,
                    shared: e.shared,
                    effects: e.effects
                })
            }
            function ja(e, t) {
                return {
                    eventTime: e,
                    lane: t,
                    tag: 0,
                    payload: null,
                    callback: null,
                    next: null
                }
            }
            function za(e, t, n) {
                var r = e.updateQueue;
                if (null === r)
                    return null;
                if (r = r.shared,
                0 !== (2 & xs)) {
                    var o = r.pending;
                    return null === o ? t.next = t : (t.next = o.next,
                    o.next = t),
                    r.pending = t,
                    La(e, n)
                }
                return null === (o = r.interleaved) ? (t.next = t,
                Da(r)) : (t.next = o.next,
                o.next = t),
                r.interleaved = t,
                La(e, n)
            }
            function qa(e, t, n) {
                if (null !== (t = t.updateQueue) && (t = t.shared,
                0 !== (4194240 & n))) {
                    var r = t.lanes;
                    n |= r &= e.pendingLanes,
                    t.lanes = n,
                    vt(e, n)
                }
            }
            function Fa(e, t) {
                var n = e.updateQueue
                  , r = e.alternate;
                if (null !== r && n === (r = r.updateQueue)) {
                    var o = null
                      , a = null;
                    if (null !== (n = n.firstBaseUpdate)) {
                        do {
                            var i = {
                                eventTime: n.eventTime,
                                lane: n.lane,
                                tag: n.tag,
                                payload: n.payload,
                                callback: n.callback,
                                next: null
                            };
                            null === a ? o = a = i : a = a.next = i,
                            n = n.next
                        } while (null !== n);
                        null === a ? o = a = t : a = a.next = t
                    } else
                        o = a = t;
                    return n = {
                        baseState: r.baseState,
                        firstBaseUpdate: o,
                        lastBaseUpdate: a,
                        shared: r.shared,
                        effects: r.effects
                    },
                    void (e.updateQueue = n)
                }
                null === (e = n.lastBaseUpdate) ? n.firstBaseUpdate = t : e.next = t,
                n.lastBaseUpdate = t
            }
            function Ba(e, t, n, r) {
                var o = e.updateQueue;
                Ma = !1;
                var a = o.firstBaseUpdate
                  , i = o.lastBaseUpdate
                  , l = o.shared.pending;
                if (null !== l) {
                    o.shared.pending = null;
                    var s = l
                      , u = s.next;
                    s.next = null,
                    null === i ? a = u : i.next = u,
                    i = s;
                    var c = e.alternate;
                    null !== c && ((l = (c = c.updateQueue).lastBaseUpdate) !== i && (null === l ? c.firstBaseUpdate = u : l.next = u,
                    c.lastBaseUpdate = s))
                }
                if (null !== a) {
                    var d = o.baseState;
                    for (i = 0,
                    c = u = s = null,
                    l = a; ; ) {
                        var f = l.lane
                          , p = l.eventTime;
                        if ((r & f) === f) {
                            null !== c && (c = c.next = {
                                eventTime: p,
                                lane: 0,
                                tag: l.tag,
                                payload: l.payload,
                                callback: l.callback,
                                next: null
                            });
                            e: {
                                var h = e
                                  , m = l;
                                switch (f = t,
                                p = n,
                                m.tag) {
                                case 1:
                                    if ("function" === typeof (h = m.payload)) {
                                        d = h.call(p, d, f);
                                        break e
                                    }
                                    d = h;
                                    break e;
                                case 3:
                                    h.flags = -65537 & h.flags | 128;
                                case 0:
                                    if (null === (f = "function" === typeof (h = m.payload) ? h.call(p, d, f) : h) || void 0 === f)
                                        break e;
                                    d = U({}, d, f);
                                    break e;
                                case 2:
                                    Ma = !0
                                }
                            }
                            null !== l.callback && 0 !== l.lane && (e.flags |= 64,
                            null === (f = o.effects) ? o.effects = [l] : f.push(l))
                        } else
                            p = {
                                eventTime: p,
                                lane: f,
                                tag: l.tag,
                                payload: l.payload,
                                callback: l.callback,
                                next: null
                            },
                            null === c ? (u = c = p,
                            s = d) : c = c.next = p,
                            i |= f;
                        if (null === (l = l.next)) {
                            if (null === (l = o.shared.pending))
                                break;
                            l = (f = l).next,
                            f.next = null,
                            o.lastBaseUpdate = f,
                            o.shared.pending = null
                        }
                    }
                    if (null === c && (s = d),
                    o.baseState = s,
                    o.firstBaseUpdate = u,
                    o.lastBaseUpdate = c,
                    null !== (t = o.shared.interleaved)) {
                        o = t;
                        do {
                            i |= o.lane,
                            o = o.next
                        } while (o !== t)
                    } else
                        null === a && (o.shared.lanes = 0);
                    Ms |= i,
                    e.lanes = i,
                    e.memoizedState = d
                }
            }
            function Va(e, t, n) {
                if (e = t.effects,
                t.effects = null,
                null !== e)
                    for (t = 0; t < e.length; t++) {
                        var r = e[t]
                          , o = r.callback;
                        if (null !== o) {
                            if (r.callback = null,
                            r = n,
                            "function" !== typeof o)
                                throw Error(a(191, o));
                            o.call(r)
                        }
                    }
            }
            var Wa = {}
              , Ka = Co(Wa)
              , Ga = Co(Wa)
              , $a = Co(Wa);
            function Qa(e) {
                if (e === Wa)
                    throw Error(a(174));
                return e
            }
            function Xa(e, t) {
                switch (To($a, t),
                To(Ga, e),
                To(Ka, Wa),
                e = t.nodeType) {
                case 9:
                case 11:
                    t = (t = t.documentElement) ? t.namespaceURI : se(null, "");
                    break;
                default:
                    t = se(t = (e = 8 === e ? t.parentNode : t).namespaceURI || null, e = e.tagName)
                }
                Po(Ka),
                To(Ka, t)
            }
            function Ya() {
                Po(Ka),
                Po(Ga),
                Po($a)
            }
            function Za(e) {
                Qa($a.current);
                var t = Qa(Ka.current)
                  , n = se(t, e.type);
                t !== n && (To(Ga, e),
                To(Ka, n))
            }
            function Ja(e) {
                Ga.current === e && (Po(Ka),
                Po(Ga))
            }
            var ei = Co(0);
            function ti(e) {
                for (var t = e; null !== t; ) {
                    if (13 === t.tag) {
                        var n = t.memoizedState;
                        if (null !== n && (null === (n = n.dehydrated) || "$?" === n.data || "$!" === n.data))
                            return t
                    } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
                        if (0 !== (128 & t.flags))
                            return t
                    } else if (null !== t.child) {
                        t.child.return = t,
                        t = t.child;
                        continue
                    }
                    if (t === e)
                        break;
                    for (; null === t.sibling; ) {
                        if (null === t.return || t.return === e)
                            return null;
                        t = t.return
                    }
                    t.sibling.return = t.return,
                    t = t.sibling
                }
                return null
            }
            var ni = [];
            function ri() {
                for (var e = 0; e < ni.length; e++)
                    ni[e]._workInProgressVersionPrimary = null;
                ni.length = 0
            }
            var oi = w.ReactCurrentDispatcher
              , ai = w.ReactCurrentBatchConfig
              , ii = 0
              , li = null
              , si = null
              , ui = null
              , ci = !1
              , di = !1
              , fi = 0
              , pi = 0;
            function hi() {
                throw Error(a(321))
            }
            function mi(e, t) {
                if (null === t)
                    return !1;
                for (var n = 0; n < t.length && n < e.length; n++)
                    if (!lr(e[n], t[n]))
                        return !1;
                return !0
            }
            function yi(e, t, n, r, o, i) {
                if (ii = i,
                li = t,
                t.memoizedState = null,
                t.updateQueue = null,
                t.lanes = 0,
                oi.current = null === e || null === e.memoizedState ? Ji : el,
                e = n(r, o),
                di) {
                    i = 0;
                    do {
                        if (di = !1,
                        fi = 0,
                        25 <= i)
                            throw Error(a(301));
                        i += 1,
                        ui = si = null,
                        t.updateQueue = null,
                        oi.current = tl,
                        e = n(r, o)
                    } while (di)
                }
                if (oi.current = Zi,
                t = null !== si && null !== si.next,
                ii = 0,
                ui = si = li = null,
                ci = !1,
                t)
                    throw Error(a(300));
                return e
            }
            function gi() {
                var e = 0 !== fi;
                return fi = 0,
                e
            }
            function vi() {
                var e = {
                    memoizedState: null,
                    baseState: null,
                    baseQueue: null,
                    queue: null,
                    next: null
                };
                return null === ui ? li.memoizedState = ui = e : ui = ui.next = e,
                ui
            }
            function bi() {
                if (null === si) {
                    var e = li.alternate;
                    e = null !== e ? e.memoizedState : null
                } else
                    e = si.next;
                var t = null === ui ? li.memoizedState : ui.next;
                if (null !== t)
                    ui = t,
                    si = e;
                else {
                    if (null === e)
                        throw Error(a(310));
                    e = {
                        memoizedState: (si = e).memoizedState,
                        baseState: si.baseState,
                        baseQueue: si.baseQueue,
                        queue: si.queue,
                        next: null
                    },
                    null === ui ? li.memoizedState = ui = e : ui = ui.next = e
                }
                return ui
            }
            function wi(e, t) {
                return "function" === typeof t ? t(e) : t
            }
            function _i(e) {
                var t = bi()
                  , n = t.queue;
                if (null === n)
                    throw Error(a(311));
                n.lastRenderedReducer = e;
                var r = si
                  , o = r.baseQueue
                  , i = n.pending;
                if (null !== i) {
                    if (null !== o) {
                        var l = o.next;
                        o.next = i.next,
                        i.next = l
                    }
                    r.baseQueue = o = i,
                    n.pending = null
                }
                if (null !== o) {
                    i = o.next,
                    r = r.baseState;
                    var s = l = null
                      , u = null
                      , c = i;
                    do {
                        var d = c.lane;
                        if ((ii & d) === d)
                            null !== u && (u = u.next = {
                                lane: 0,
                                action: c.action,
                                hasEagerState: c.hasEagerState,
                                eagerState: c.eagerState,
                                next: null
                            }),
                            r = c.hasEagerState ? c.eagerState : e(r, c.action);
                        else {
                            var f = {
                                lane: d,
                                action: c.action,
                                hasEagerState: c.hasEagerState,
                                eagerState: c.eagerState,
                                next: null
                            };
                            null === u ? (s = u = f,
                            l = r) : u = u.next = f,
                            li.lanes |= d,
                            Ms |= d
                        }
                        c = c.next
                    } while (null !== c && c !== i);
                    null === u ? l = r : u.next = s,
                    lr(r, t.memoizedState) || (bl = !0),
                    t.memoizedState = r,
                    t.baseState = l,
                    t.baseQueue = u,
                    n.lastRenderedState = r
                }
                if (null !== (e = n.interleaved)) {
                    o = e;
                    do {
                        i = o.lane,
                        li.lanes |= i,
                        Ms |= i,
                        o = o.next
                    } while (o !== e)
                } else
                    null === o && (n.lanes = 0);
                return [t.memoizedState, n.dispatch]
            }
            function Si(e) {
                var t = bi()
                  , n = t.queue;
                if (null === n)
                    throw Error(a(311));
                n.lastRenderedReducer = e;
                var r = n.dispatch
                  , o = n.pending
                  , i = t.memoizedState;
                if (null !== o) {
                    n.pending = null;
                    var l = o = o.next;
                    do {
                        i = e(i, l.action),
                        l = l.next
                    } while (l !== o);
                    lr(i, t.memoizedState) || (bl = !0),
                    t.memoizedState = i,
                    null === t.baseQueue && (t.baseState = i),
                    n.lastRenderedState = i
                }
                return [i, r]
            }
            function Ei() {}
            function ki(e, t) {
                var n = li
                  , r = bi()
                  , o = t()
                  , i = !lr(r.memoizedState, o);
                if (i && (r.memoizedState = o,
                bl = !0),
                r = r.queue,
                Mi(Ti.bind(null, n, r, e), [e]),
                r.getSnapshot !== t || i || null !== ui && 1 & ui.memoizedState.tag) {
                    if (n.flags |= 2048,
                    Oi(9, Pi.bind(null, n, r, o, t), void 0, null),
                    null === Rs)
                        throw Error(a(349));
                    0 !== (30 & ii) || Ci(n, t, o)
                }
                return o
            }
            function Ci(e, t, n) {
                e.flags |= 16384,
                e = {
                    getSnapshot: t,
                    value: n
                },
                null === (t = li.updateQueue) ? (t = {
                    lastEffect: null,
                    stores: null
                },
                li.updateQueue = t,
                t.stores = [e]) : null === (n = t.stores) ? t.stores = [e] : n.push(e)
            }
            function Pi(e, t, n, r) {
                t.value = n,
                t.getSnapshot = r,
                xi(t) && Ri(e)
            }
            function Ti(e, t, n) {
                return n((function() {
                    xi(t) && Ri(e)
                }
                ))
            }
            function xi(e) {
                var t = e.getSnapshot;
                e = e.value;
                try {
                    var n = t();
                    return !lr(e, n)
                } catch (r) {
                    return !0
                }
            }
            function Ri(e) {
                var t = La(e, 1);
                null !== t && nu(t, e, 1, -1)
            }
            function Ni(e) {
                var t = vi();
                return "function" === typeof e && (e = e()),
                t.memoizedState = t.baseState = e,
                e = {
                    pending: null,
                    interleaved: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: wi,
                    lastRenderedState: e
                },
                t.queue = e,
                e = e.dispatch = $i.bind(null, li, e),
                [t.memoizedState, e]
            }
            function Oi(e, t, n, r) {
                return e = {
                    tag: e,
                    create: t,
                    destroy: n,
                    deps: r,
                    next: null
                },
                null === (t = li.updateQueue) ? (t = {
                    lastEffect: null,
                    stores: null
                },
                li.updateQueue = t,
                t.lastEffect = e.next = e) : null === (n = t.lastEffect) ? t.lastEffect = e.next = e : (r = n.next,
                n.next = e,
                e.next = r,
                t.lastEffect = e),
                e
            }
            function Ai() {
                return bi().memoizedState
            }
            function Di(e, t, n, r) {
                var o = vi();
                li.flags |= e,
                o.memoizedState = Oi(1 | t, n, void 0, void 0 === r ? null : r)
            }
            function Ii(e, t, n, r) {
                var o = bi();
                r = void 0 === r ? null : r;
                var a = void 0;
                if (null !== si) {
                    var i = si.memoizedState;
                    if (a = i.destroy,
                    null !== r && mi(r, i.deps))
                        return void (o.memoizedState = Oi(t, n, a, r))
                }
                li.flags |= e,
                o.memoizedState = Oi(1 | t, n, a, r)
            }
            function Li(e, t) {
                return Di(8390656, 8, e, t)
            }
            function Mi(e, t) {
                return Ii(2048, 8, e, t)
            }
            function Ui(e, t) {
                return Ii(4, 2, e, t)
            }
            function Hi(e, t) {
                return Ii(4, 4, e, t)
            }
            function ji(e, t) {
                return "function" === typeof t ? (e = e(),
                t(e),
                function() {
                    t(null)
                }
                ) : null !== t && void 0 !== t ? (e = e(),
                t.current = e,
                function() {
                    t.current = null
                }
                ) : void 0
            }
            function zi(e, t, n) {
                return n = null !== n && void 0 !== n ? n.concat([e]) : null,
                Ii(4, 4, ji.bind(null, t, e), n)
            }
            function qi() {}
            function Fi(e, t) {
                var n = bi();
                t = void 0 === t ? null : t;
                var r = n.memoizedState;
                return null !== r && null !== t && mi(t, r[1]) ? r[0] : (n.memoizedState = [e, t],
                e)
            }
            function Bi(e, t) {
                var n = bi();
                t = void 0 === t ? null : t;
                var r = n.memoizedState;
                return null !== r && null !== t && mi(t, r[1]) ? r[0] : (e = e(),
                n.memoizedState = [e, t],
                e)
            }
            function Vi(e, t, n) {
                return 0 === (21 & ii) ? (e.baseState && (e.baseState = !1,
                bl = !0),
                e.memoizedState = n) : (lr(n, t) || (n = mt(),
                li.lanes |= n,
                Ms |= n,
                e.baseState = !0),
                t)
            }
            function Wi(e, t) {
                var n = bt;
                bt = 0 !== n && 4 > n ? n : 4,
                e(!0);
                var r = ai.transition;
                ai.transition = {};
                try {
                    e(!1),
                    t()
                } finally {
                    bt = n,
                    ai.transition = r
                }
            }
            function Ki() {
                return bi().memoizedState
            }
            function Gi(e, t, n) {
                var r = tu(e);
                if (n = {
                    lane: r,
                    action: n,
                    hasEagerState: !1,
                    eagerState: null,
                    next: null
                },
                Qi(e))
                    Xi(t, n);
                else if (null !== (n = Ia(e, t, n, r))) {
                    nu(n, e, r, eu()),
                    Yi(n, t, r)
                }
            }
            function $i(e, t, n) {
                var r = tu(e)
                  , o = {
                    lane: r,
                    action: n,
                    hasEagerState: !1,
                    eagerState: null,
                    next: null
                };
                if (Qi(e))
                    Xi(t, o);
                else {
                    var a = e.alternate;
                    if (0 === e.lanes && (null === a || 0 === a.lanes) && null !== (a = t.lastRenderedReducer))
                        try {
                            var i = t.lastRenderedState
                              , l = a(i, n);
                            if (o.hasEagerState = !0,
                            o.eagerState = l,
                            lr(l, i)) {
                                var s = t.interleaved;
                                return null === s ? (o.next = o,
                                Da(t)) : (o.next = s.next,
                                s.next = o),
                                void (t.interleaved = o)
                            }
                        } catch (u) {}
                    null !== (n = Ia(e, t, o, r)) && (nu(n, e, r, o = eu()),
                    Yi(n, t, r))
                }
            }
            function Qi(e) {
                var t = e.alternate;
                return e === li || null !== t && t === li
            }
            function Xi(e, t) {
                di = ci = !0;
                var n = e.pending;
                null === n ? t.next = t : (t.next = n.next,
                n.next = t),
                e.pending = t
            }
            function Yi(e, t, n) {
                if (0 !== (4194240 & n)) {
                    var r = t.lanes;
                    n |= r &= e.pendingLanes,
                    t.lanes = n,
                    vt(e, n)
                }
            }
            var Zi = {
                readContext: Oa,
                useCallback: hi,
                useContext: hi,
                useEffect: hi,
                useImperativeHandle: hi,
                useInsertionEffect: hi,
                useLayoutEffect: hi,
                useMemo: hi,
                useReducer: hi,
                useRef: hi,
                useState: hi,
                useDebugValue: hi,
                useDeferredValue: hi,
                useTransition: hi,
                useMutableSource: hi,
                useSyncExternalStore: hi,
                useId: hi,
                unstable_isNewReconciler: !1
            }
              , Ji = {
                readContext: Oa,
                useCallback: function(e, t) {
                    return vi().memoizedState = [e, void 0 === t ? null : t],
                    e
                },
                useContext: Oa,
                useEffect: Li,
                useImperativeHandle: function(e, t, n) {
                    return n = null !== n && void 0 !== n ? n.concat([e]) : null,
                    Di(4194308, 4, ji.bind(null, t, e), n)
                },
                useLayoutEffect: function(e, t) {
                    return Di(4194308, 4, e, t)
                },
                useInsertionEffect: function(e, t) {
                    return Di(4, 2, e, t)
                },
                useMemo: function(e, t) {
                    var n = vi();
                    return t = void 0 === t ? null : t,
                    e = e(),
                    n.memoizedState = [e, t],
                    e
                },
                useReducer: function(e, t, n) {
                    var r = vi();
                    return t = void 0 !== n ? n(t) : t,
                    r.memoizedState = r.baseState = t,
                    e = {
                        pending: null,
                        interleaved: null,
                        lanes: 0,
                        dispatch: null,
                        lastRenderedReducer: e,
                        lastRenderedState: t
                    },
                    r.queue = e,
                    e = e.dispatch = Gi.bind(null, li, e),
                    [r.memoizedState, e]
                },
                useRef: function(e) {
                    return e = {
                        current: e
                    },
                    vi().memoizedState = e
                },
                useState: Ni,
                useDebugValue: qi,
                useDeferredValue: function(e) {
                    return vi().memoizedState = e
                },
                useTransition: function() {
                    var e = Ni(!1)
                      , t = e[0];
                    return e = Wi.bind(null, e[1]),
                    vi().memoizedState = e,
                    [t, e]
                },
                useMutableSource: function() {},
                useSyncExternalStore: function(e, t, n) {
                    var r = li
                      , o = vi();
                    if (aa) {
                        if (void 0 === n)
                            throw Error(a(407));
                        n = n()
                    } else {
                        if (n = t(),
                        null === Rs)
                            throw Error(a(349));
                        0 !== (30 & ii) || Ci(r, t, n)
                    }
                    o.memoizedState = n;
                    var i = {
                        value: n,
                        getSnapshot: t
                    };
                    return o.queue = i,
                    Li(Ti.bind(null, r, i, e), [e]),
                    r.flags |= 2048,
                    Oi(9, Pi.bind(null, r, i, n, t), void 0, null),
                    n
                },
                useId: function() {
                    var e = vi()
                      , t = Rs.identifierPrefix;
                    if (aa) {
                        var n = Zo;
                        t = ":" + t + "R" + (n = (Yo & ~(1 << 32 - it(Yo) - 1)).toString(32) + n),
                        0 < (n = fi++) && (t += "H" + n.toString(32)),
                        t += ":"
                    } else
                        t = ":" + t + "r" + (n = pi++).toString(32) + ":";
                    return e.memoizedState = t
                },
                unstable_isNewReconciler: !1
            }
              , el = {
                readContext: Oa,
                useCallback: Fi,
                useContext: Oa,
                useEffect: Mi,
                useImperativeHandle: zi,
                useInsertionEffect: Ui,
                useLayoutEffect: Hi,
                useMemo: Bi,
                useReducer: _i,
                useRef: Ai,
                useState: function() {
                    return _i(wi)
                },
                useDebugValue: qi,
                useDeferredValue: function(e) {
                    return Vi(bi(), si.memoizedState, e)
                },
                useTransition: function() {
                    return [_i(wi)[0], bi().memoizedState]
                },
                useMutableSource: Ei,
                useSyncExternalStore: ki,
                useId: Ki,
                unstable_isNewReconciler: !1
            }
              , tl = {
                readContext: Oa,
                useCallback: Fi,
                useContext: Oa,
                useEffect: Mi,
                useImperativeHandle: zi,
                useInsertionEffect: Ui,
                useLayoutEffect: Hi,
                useMemo: Bi,
                useReducer: Si,
                useRef: Ai,
                useState: function() {
                    return Si(wi)
                },
                useDebugValue: qi,
                useDeferredValue: function(e) {
                    var t = bi();
                    return null === si ? t.memoizedState = e : Vi(t, si.memoizedState, e)
                },
                useTransition: function() {
                    return [Si(wi)[0], bi().memoizedState]
                },
                useMutableSource: Ei,
                useSyncExternalStore: ki,
                useId: Ki,
                unstable_isNewReconciler: !1
            };
            function nl(e, t) {
                if (e && e.defaultProps) {
                    for (var n in t = U({}, t),
                    e = e.defaultProps)
                        void 0 === t[n] && (t[n] = e[n]);
                    return t
                }
                return t
            }
            function rl(e, t, n, r) {
                n = null === (n = n(r, t = e.memoizedState)) || void 0 === n ? t : U({}, t, n),
                e.memoizedState = n,
                0 === e.lanes && (e.updateQueue.baseState = n)
            }
            var ol = {
                isMounted: function(e) {
                    return !!(e = e._reactInternals) && Fe(e) === e
                },
                enqueueSetState: function(e, t, n) {
                    e = e._reactInternals;
                    var r = eu()
                      , o = tu(e)
                      , a = ja(r, o);
                    a.payload = t,
                    void 0 !== n && null !== n && (a.callback = n),
                    null !== (t = za(e, a, o)) && (nu(t, e, o, r),
                    qa(t, e, o))
                },
                enqueueReplaceState: function(e, t, n) {
                    e = e._reactInternals;
                    var r = eu()
                      , o = tu(e)
                      , a = ja(r, o);
                    a.tag = 1,
                    a.payload = t,
                    void 0 !== n && null !== n && (a.callback = n),
                    null !== (t = za(e, a, o)) && (nu(t, e, o, r),
                    qa(t, e, o))
                },
                enqueueForceUpdate: function(e, t) {
                    e = e._reactInternals;
                    var n = eu()
                      , r = tu(e)
                      , o = ja(n, r);
                    o.tag = 2,
                    void 0 !== t && null !== t && (o.callback = t),
                    null !== (t = za(e, o, r)) && (nu(t, e, r, n),
                    qa(t, e, r))
                }
            };
            function al(e, t, n, r, o, a, i) {
                return "function" === typeof (e = e.stateNode).shouldComponentUpdate ? e.shouldComponentUpdate(r, a, i) : !t.prototype || !t.prototype.isPureReactComponent || (!sr(n, r) || !sr(o, a))
            }
            function il(e, t, n) {
                var r = !1
                  , o = xo
                  , a = t.contextType;
                return "object" === typeof a && null !== a ? a = Oa(a) : (o = Do(t) ? Oo : Ro.current,
                a = (r = null !== (r = t.contextTypes) && void 0 !== r) ? Ao(e, o) : xo),
                t = new t(n,a),
                e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null,
                t.updater = ol,
                e.stateNode = t,
                t._reactInternals = e,
                r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = o,
                e.__reactInternalMemoizedMaskedChildContext = a),
                t
            }
            function ll(e, t, n, r) {
                e = t.state,
                "function" === typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r),
                "function" === typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r),
                t.state !== e && ol.enqueueReplaceState(t, t.state, null)
            }
            function sl(e, t, n, r) {
                var o = e.stateNode;
                o.props = n,
                o.state = e.memoizedState,
                o.refs = {},
                Ua(e);
                var a = t.contextType;
                "object" === typeof a && null !== a ? o.context = Oa(a) : (a = Do(t) ? Oo : Ro.current,
                o.context = Ao(e, a)),
                o.state = e.memoizedState,
                "function" === typeof (a = t.getDerivedStateFromProps) && (rl(e, t, a, n),
                o.state = e.memoizedState),
                "function" === typeof t.getDerivedStateFromProps || "function" === typeof o.getSnapshotBeforeUpdate || "function" !== typeof o.UNSAFE_componentWillMount && "function" !== typeof o.componentWillMount || (t = o.state,
                "function" === typeof o.componentWillMount && o.componentWillMount(),
                "function" === typeof o.UNSAFE_componentWillMount && o.UNSAFE_componentWillMount(),
                t !== o.state && ol.enqueueReplaceState(o, o.state, null),
                Ba(e, n, o, r),
                o.state = e.memoizedState),
                "function" === typeof o.componentDidMount && (e.flags |= 4194308)
            }
            function ul(e, t) {
                try {
                    var n = ""
                      , r = t;
                    do {
                        n += q(r),
                        r = r.return
                    } while (r);
                    var o = n
                } catch (a) {
                    o = "\nError generating stack: " + a.message + "\n" + a.stack
                }
                return {
                    value: e,
                    source: t,
                    stack: o,
                    digest: null
                }
            }
            function cl(e, t, n) {
                return {
                    value: e,
                    source: null,
                    stack: null != n ? n : null,
                    digest: null != t ? t : null
                }
            }
            function dl(e, t) {
                try {
                    console.error(t.value)
                } catch (n) {
                    setTimeout((function() {
                        throw n
                    }
                    ))
                }
            }
            var fl = "function" === typeof WeakMap ? WeakMap : Map;
            function pl(e, t, n) {
                (n = ja(-1, n)).tag = 3,
                n.payload = {
                    element: null
                };
                var r = t.value;
                return n.callback = function() {
                    Vs || (Vs = !0,
                    Ws = r),
                    dl(0, t)
                }
                ,
                n
            }
            function hl(e, t, n) {
                (n = ja(-1, n)).tag = 3;
                var r = e.type.getDerivedStateFromError;
                if ("function" === typeof r) {
                    var o = t.value;
                    n.payload = function() {
                        return r(o)
                    }
                    ,
                    n.callback = function() {
                        dl(0, t)
                    }
                }
                var a = e.stateNode;
                return null !== a && "function" === typeof a.componentDidCatch && (n.callback = function() {
                    dl(0, t),
                    "function" !== typeof r && (null === Ks ? Ks = new Set([this]) : Ks.add(this));
                    var e = t.stack;
                    this.componentDidCatch(t.value, {
                        componentStack: null !== e ? e : ""
                    })
                }
                ),
                n
            }
            function ml(e, t, n) {
                var r = e.pingCache;
                if (null === r) {
                    r = e.pingCache = new fl;
                    var o = new Set;
                    r.set(t, o)
                } else
                    void 0 === (o = r.get(t)) && (o = new Set,
                    r.set(t, o));
                o.has(n) || (o.add(n),
                e = Cu.bind(null, e, t, n),
                t.then(e, e))
            }
            function yl(e) {
                do {
                    var t;
                    if ((t = 13 === e.tag) && (t = null === (t = e.memoizedState) || null !== t.dehydrated),
                    t)
                        return e;
                    e = e.return
                } while (null !== e);
                return null
            }
            function gl(e, t, n, r, o) {
                return 0 === (1 & e.mode) ? (e === t ? e.flags |= 65536 : (e.flags |= 128,
                n.flags |= 131072,
                n.flags &= -52805,
                1 === n.tag && (null === n.alternate ? n.tag = 17 : ((t = ja(-1, 1)).tag = 2,
                za(n, t, 1))),
                n.lanes |= 1),
                e) : (e.flags |= 65536,
                e.lanes = o,
                e)
            }
            var vl = w.ReactCurrentOwner
              , bl = !1;
            function wl(e, t, n, r) {
                t.child = null === e ? Sa(t, null, n, r) : _a(t, e.child, n, r)
            }
            function _l(e, t, n, r, o) {
                n = n.render;
                var a = t.ref;
                return Na(t, o),
                r = yi(e, t, n, r, a, o),
                n = gi(),
                null === e || bl ? (aa && n && ta(t),
                t.flags |= 1,
                wl(e, t, r, o),
                t.child) : (t.updateQueue = e.updateQueue,
                t.flags &= -2053,
                e.lanes &= ~o,
                Vl(e, t, o))
            }
            function Sl(e, t, n, r, o) {
                if (null === e) {
                    var a = n.type;
                    return "function" !== typeof a || Au(a) || void 0 !== a.defaultProps || null !== n.compare || void 0 !== n.defaultProps ? ((e = Iu(n.type, null, r, t, t.mode, o)).ref = t.ref,
                    e.return = t,
                    t.child = e) : (t.tag = 15,
                    t.type = a,
                    El(e, t, a, r, o))
                }
                if (a = e.child,
                0 === (e.lanes & o)) {
                    var i = a.memoizedProps;
                    if ((n = null !== (n = n.compare) ? n : sr)(i, r) && e.ref === t.ref)
                        return Vl(e, t, o)
                }
                return t.flags |= 1,
                (e = Du(a, r)).ref = t.ref,
                e.return = t,
                t.child = e
            }
            function El(e, t, n, r, o) {
                if (null !== e) {
                    var a = e.memoizedProps;
                    if (sr(a, r) && e.ref === t.ref) {
                        if (bl = !1,
                        t.pendingProps = r = a,
                        0 === (e.lanes & o))
                            return t.lanes = e.lanes,
                            Vl(e, t, o);
                        0 !== (131072 & e.flags) && (bl = !0)
                    }
                }
                return Pl(e, t, n, r, o)
            }
            function kl(e, t, n) {
                var r = t.pendingProps
                  , o = r.children
                  , a = null !== e ? e.memoizedState : null;
                if ("hidden" === r.mode)
                    if (0 === (1 & t.mode))
                        t.memoizedState = {
                            baseLanes: 0,
                            cachePool: null,
                            transitions: null
                        },
                        To(Ds, As),
                        As |= n;
                    else {
                        if (0 === (1073741824 & n))
                            return e = null !== a ? a.baseLanes | n : n,
                            t.lanes = t.childLanes = 1073741824,
                            t.memoizedState = {
                                baseLanes: e,
                                cachePool: null,
                                transitions: null
                            },
                            t.updateQueue = null,
                            To(Ds, As),
                            As |= e,
                            null;
                        t.memoizedState = {
                            baseLanes: 0,
                            cachePool: null,
                            transitions: null
                        },
                        r = null !== a ? a.baseLanes : n,
                        To(Ds, As),
                        As |= r
                    }
                else
                    null !== a ? (r = a.baseLanes | n,
                    t.memoizedState = null) : r = n,
                    To(Ds, As),
                    As |= r;
                return wl(e, t, o, n),
                t.child
            }
            function Cl(e, t) {
                var n = t.ref;
                (null === e && null !== n || null !== e && e.ref !== n) && (t.flags |= 512,
                t.flags |= 2097152)
            }
            function Pl(e, t, n, r, o) {
                var a = Do(n) ? Oo : Ro.current;
                return a = Ao(t, a),
                Na(t, o),
                n = yi(e, t, n, r, a, o),
                r = gi(),
                null === e || bl ? (aa && r && ta(t),
                t.flags |= 1,
                wl(e, t, n, o),
                t.child) : (t.updateQueue = e.updateQueue,
                t.flags &= -2053,
                e.lanes &= ~o,
                Vl(e, t, o))
            }
            function Tl(e, t, n, r, o) {
                if (Do(n)) {
                    var a = !0;
                    Uo(t)
                } else
                    a = !1;
                if (Na(t, o),
                null === t.stateNode)
                    Bl(e, t),
                    il(t, n, r),
                    sl(t, n, r, o),
                    r = !0;
                else if (null === e) {
                    var i = t.stateNode
                      , l = t.memoizedProps;
                    i.props = l;
                    var s = i.context
                      , u = n.contextType;
                    "object" === typeof u && null !== u ? u = Oa(u) : u = Ao(t, u = Do(n) ? Oo : Ro.current);
                    var c = n.getDerivedStateFromProps
                      , d = "function" === typeof c || "function" === typeof i.getSnapshotBeforeUpdate;
                    d || "function" !== typeof i.UNSAFE_componentWillReceiveProps && "function" !== typeof i.componentWillReceiveProps || (l !== r || s !== u) && ll(t, i, r, u),
                    Ma = !1;
                    var f = t.memoizedState;
                    i.state = f,
                    Ba(t, r, i, o),
                    s = t.memoizedState,
                    l !== r || f !== s || No.current || Ma ? ("function" === typeof c && (rl(t, n, c, r),
                    s = t.memoizedState),
                    (l = Ma || al(t, n, l, r, f, s, u)) ? (d || "function" !== typeof i.UNSAFE_componentWillMount && "function" !== typeof i.componentWillMount || ("function" === typeof i.componentWillMount && i.componentWillMount(),
                    "function" === typeof i.UNSAFE_componentWillMount && i.UNSAFE_componentWillMount()),
                    "function" === typeof i.componentDidMount && (t.flags |= 4194308)) : ("function" === typeof i.componentDidMount && (t.flags |= 4194308),
                    t.memoizedProps = r,
                    t.memoizedState = s),
                    i.props = r,
                    i.state = s,
                    i.context = u,
                    r = l) : ("function" === typeof i.componentDidMount && (t.flags |= 4194308),
                    r = !1)
                } else {
                    i = t.stateNode,
                    Ha(e, t),
                    l = t.memoizedProps,
                    u = t.type === t.elementType ? l : nl(t.type, l),
                    i.props = u,
                    d = t.pendingProps,
                    f = i.context,
                    "object" === typeof (s = n.contextType) && null !== s ? s = Oa(s) : s = Ao(t, s = Do(n) ? Oo : Ro.current);
                    var p = n.getDerivedStateFromProps;
                    (c = "function" === typeof p || "function" === typeof i.getSnapshotBeforeUpdate) || "function" !== typeof i.UNSAFE_componentWillReceiveProps && "function" !== typeof i.componentWillReceiveProps || (l !== d || f !== s) && ll(t, i, r, s),
                    Ma = !1,
                    f = t.memoizedState,
                    i.state = f,
                    Ba(t, r, i, o);
                    var h = t.memoizedState;
                    l !== d || f !== h || No.current || Ma ? ("function" === typeof p && (rl(t, n, p, r),
                    h = t.memoizedState),
                    (u = Ma || al(t, n, u, r, f, h, s) || !1) ? (c || "function" !== typeof i.UNSAFE_componentWillUpdate && "function" !== typeof i.componentWillUpdate || ("function" === typeof i.componentWillUpdate && i.componentWillUpdate(r, h, s),
                    "function" === typeof i.UNSAFE_componentWillUpdate && i.UNSAFE_componentWillUpdate(r, h, s)),
                    "function" === typeof i.componentDidUpdate && (t.flags |= 4),
                    "function" === typeof i.getSnapshotBeforeUpdate && (t.flags |= 1024)) : ("function" !== typeof i.componentDidUpdate || l === e.memoizedProps && f === e.memoizedState || (t.flags |= 4),
                    "function" !== typeof i.getSnapshotBeforeUpdate || l === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024),
                    t.memoizedProps = r,
                    t.memoizedState = h),
                    i.props = r,
                    i.state = h,
                    i.context = s,
                    r = u) : ("function" !== typeof i.componentDidUpdate || l === e.memoizedProps && f === e.memoizedState || (t.flags |= 4),
                    "function" !== typeof i.getSnapshotBeforeUpdate || l === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024),
                    r = !1)
                }
                return xl(e, t, n, r, a, o)
            }
            function xl(e, t, n, r, o, a) {
                Cl(e, t);
                var i = 0 !== (128 & t.flags);
                if (!r && !i)
                    return o && Ho(t, n, !1),
                    Vl(e, t, a);
                r = t.stateNode,
                vl.current = t;
                var l = i && "function" !== typeof n.getDerivedStateFromError ? null : r.render();
                return t.flags |= 1,
                null !== e && i ? (t.child = _a(t, e.child, null, a),
                t.child = _a(t, null, l, a)) : wl(e, t, l, a),
                t.memoizedState = r.state,
                o && Ho(t, n, !0),
                t.child
            }
            function Rl(e) {
                var t = e.stateNode;
                t.pendingContext ? Lo(0, t.pendingContext, t.pendingContext !== t.context) : t.context && Lo(0, t.context, !1),
                Xa(e, t.containerInfo)
            }
            function Nl(e, t, n, r, o) {
                return ha(),
                ma(o),
                t.flags |= 256,
                wl(e, t, n, r),
                t.child
            }
            var Ol, Al, Dl, Il, Ll = {
                dehydrated: null,
                treeContext: null,
                retryLane: 0
            };
            function Ml(e) {
                return {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null
                }
            }
            function Ul(e, t, n) {
                var r, o = t.pendingProps, i = ei.current, l = !1, s = 0 !== (128 & t.flags);
                if ((r = s) || (r = (null === e || null !== e.memoizedState) && 0 !== (2 & i)),
                r ? (l = !0,
                t.flags &= -129) : null !== e && null === e.memoizedState || (i |= 1),
                To(ei, 1 & i),
                null === e)
                    return ca(t),
                    null !== (e = t.memoizedState) && null !== (e = e.dehydrated) ? (0 === (1 & t.mode) ? t.lanes = 1 : "$!" === e.data ? t.lanes = 8 : t.lanes = 1073741824,
                    null) : (s = o.children,
                    e = o.fallback,
                    l ? (o = t.mode,
                    l = t.child,
                    s = {
                        mode: "hidden",
                        children: s
                    },
                    0 === (1 & o) && null !== l ? (l.childLanes = 0,
                    l.pendingProps = s) : l = Mu(s, o, 0, null),
                    e = Lu(e, o, n, null),
                    l.return = t,
                    e.return = t,
                    l.sibling = e,
                    t.child = l,
                    t.child.memoizedState = Ml(n),
                    t.memoizedState = Ll,
                    e) : Hl(t, s));
                if (null !== (i = e.memoizedState) && null !== (r = i.dehydrated))
                    return function(e, t, n, r, o, i, l) {
                        if (n)
                            return 256 & t.flags ? (t.flags &= -257,
                            jl(e, t, l, r = cl(Error(a(422))))) : null !== t.memoizedState ? (t.child = e.child,
                            t.flags |= 128,
                            null) : (i = r.fallback,
                            o = t.mode,
                            r = Mu({
                                mode: "visible",
                                children: r.children
                            }, o, 0, null),
                            (i = Lu(i, o, l, null)).flags |= 2,
                            r.return = t,
                            i.return = t,
                            r.sibling = i,
                            t.child = r,
                            0 !== (1 & t.mode) && _a(t, e.child, null, l),
                            t.child.memoizedState = Ml(l),
                            t.memoizedState = Ll,
                            i);
                        if (0 === (1 & t.mode))
                            return jl(e, t, l, null);
                        if ("$!" === o.data) {
                            if (r = o.nextSibling && o.nextSibling.dataset)
                                var s = r.dgst;
                            return r = s,
                            jl(e, t, l, r = cl(i = Error(a(419)), r, void 0))
                        }
                        if (s = 0 !== (l & e.childLanes),
                        bl || s) {
                            if (null !== (r = Rs)) {
                                switch (l & -l) {
                                case 4:
                                    o = 2;
                                    break;
                                case 16:
                                    o = 8;
                                    break;
                                case 64:
                                case 128:
                                case 256:
                                case 512:
                                case 1024:
                                case 2048:
                                case 4096:
                                case 8192:
                                case 16384:
                                case 32768:
                                case 65536:
                                case 131072:
                                case 262144:
                                case 524288:
                                case 1048576:
                                case 2097152:
                                case 4194304:
                                case 8388608:
                                case 16777216:
                                case 33554432:
                                case 67108864:
                                    o = 32;
                                    break;
                                case 536870912:
                                    o = 268435456;
                                    break;
                                default:
                                    o = 0
                                }
                                0 !== (o = 0 !== (o & (r.suspendedLanes | l)) ? 0 : o) && o !== i.retryLane && (i.retryLane = o,
                                La(e, o),
                                nu(r, e, o, -1))
                            }
                            return mu(),
                            jl(e, t, l, r = cl(Error(a(421))))
                        }
                        return "$?" === o.data ? (t.flags |= 128,
                        t.child = e.child,
                        t = Tu.bind(null, e),
                        o._reactRetry = t,
                        null) : (e = i.treeContext,
                        oa = uo(o.nextSibling),
                        ra = t,
                        aa = !0,
                        ia = null,
                        null !== e && ($o[Qo++] = Yo,
                        $o[Qo++] = Zo,
                        $o[Qo++] = Xo,
                        Yo = e.id,
                        Zo = e.overflow,
                        Xo = t),
                        t = Hl(t, r.children),
                        t.flags |= 4096,
                        t)
                    }(e, t, s, o, r, i, n);
                if (l) {
                    l = o.fallback,
                    s = t.mode,
                    r = (i = e.child).sibling;
                    var u = {
                        mode: "hidden",
                        children: o.children
                    };
                    return 0 === (1 & s) && t.child !== i ? ((o = t.child).childLanes = 0,
                    o.pendingProps = u,
                    t.deletions = null) : (o = Du(i, u)).subtreeFlags = 14680064 & i.subtreeFlags,
                    null !== r ? l = Du(r, l) : (l = Lu(l, s, n, null)).flags |= 2,
                    l.return = t,
                    o.return = t,
                    o.sibling = l,
                    t.child = o,
                    o = l,
                    l = t.child,
                    s = null === (s = e.child.memoizedState) ? Ml(n) : {
                        baseLanes: s.baseLanes | n,
                        cachePool: null,
                        transitions: s.transitions
                    },
                    l.memoizedState = s,
                    l.childLanes = e.childLanes & ~n,
                    t.memoizedState = Ll,
                    o
                }
                return e = (l = e.child).sibling,
                o = Du(l, {
                    mode: "visible",
                    children: o.children
                }),
                0 === (1 & t.mode) && (o.lanes = n),
                o.return = t,
                o.sibling = null,
                null !== e && (null === (n = t.deletions) ? (t.deletions = [e],
                t.flags |= 16) : n.push(e)),
                t.child = o,
                t.memoizedState = null,
                o
            }
            function Hl(e, t) {
                return (t = Mu({
                    mode: "visible",
                    children: t
                }, e.mode, 0, null)).return = e,
                e.child = t
            }
            function jl(e, t, n, r) {
                return null !== r && ma(r),
                _a(t, e.child, null, n),
                (e = Hl(t, t.pendingProps.children)).flags |= 2,
                t.memoizedState = null,
                e
            }
            function zl(e, t, n) {
                e.lanes |= t;
                var r = e.alternate;
                null !== r && (r.lanes |= t),
                Ra(e.return, t, n)
            }
            function ql(e, t, n, r, o) {
                var a = e.memoizedState;
                null === a ? e.memoizedState = {
                    isBackwards: t,
                    rendering: null,
                    renderingStartTime: 0,
                    last: r,
                    tail: n,
                    tailMode: o
                } : (a.isBackwards = t,
                a.rendering = null,
                a.renderingStartTime = 0,
                a.last = r,
                a.tail = n,
                a.tailMode = o)
            }
            function Fl(e, t, n) {
                var r = t.pendingProps
                  , o = r.revealOrder
                  , a = r.tail;
                if (wl(e, t, r.children, n),
                0 !== (2 & (r = ei.current)))
                    r = 1 & r | 2,
                    t.flags |= 128;
                else {
                    if (null !== e && 0 !== (128 & e.flags))
                        e: for (e = t.child; null !== e; ) {
                            if (13 === e.tag)
                                null !== e.memoizedState && zl(e, n, t);
                            else if (19 === e.tag)
                                zl(e, n, t);
                            else if (null !== e.child) {
                                e.child.return = e,
                                e = e.child;
                                continue
                            }
                            if (e === t)
                                break e;
                            for (; null === e.sibling; ) {
                                if (null === e.return || e.return === t)
                                    break e;
                                e = e.return
                            }
                            e.sibling.return = e.return,
                            e = e.sibling
                        }
                    r &= 1
                }
                if (To(ei, r),
                0 === (1 & t.mode))
                    t.memoizedState = null;
                else
                    switch (o) {
                    case "forwards":
                        for (n = t.child,
                        o = null; null !== n; )
                            null !== (e = n.alternate) && null === ti(e) && (o = n),
                            n = n.sibling;
                        null === (n = o) ? (o = t.child,
                        t.child = null) : (o = n.sibling,
                        n.sibling = null),
                        ql(t, !1, o, n, a);
                        break;
                    case "backwards":
                        for (n = null,
                        o = t.child,
                        t.child = null; null !== o; ) {
                            if (null !== (e = o.alternate) && null === ti(e)) {
                                t.child = o;
                                break
                            }
                            e = o.sibling,
                            o.sibling = n,
                            n = o,
                            o = e
                        }
                        ql(t, !0, n, null, a);
                        break;
                    case "together":
                        ql(t, !1, null, null, void 0);
                        break;
                    default:
                        t.memoizedState = null
                    }
                return t.child
            }
            function Bl(e, t) {
                0 === (1 & t.mode) && null !== e && (e.alternate = null,
                t.alternate = null,
                t.flags |= 2)
            }
            function Vl(e, t, n) {
                if (null !== e && (t.dependencies = e.dependencies),
                Ms |= t.lanes,
                0 === (n & t.childLanes))
                    return null;
                if (null !== e && t.child !== e.child)
                    throw Error(a(153));
                if (null !== t.child) {
                    for (n = Du(e = t.child, e.pendingProps),
                    t.child = n,
                    n.return = t; null !== e.sibling; )
                        e = e.sibling,
                        (n = n.sibling = Du(e, e.pendingProps)).return = t;
                    n.sibling = null
                }
                return t.child
            }
            function Wl(e, t) {
                if (!aa)
                    switch (e.tailMode) {
                    case "hidden":
                        t = e.tail;
                        for (var n = null; null !== t; )
                            null !== t.alternate && (n = t),
                            t = t.sibling;
                        null === n ? e.tail = null : n.sibling = null;
                        break;
                    case "collapsed":
                        n = e.tail;
                        for (var r = null; null !== n; )
                            null !== n.alternate && (r = n),
                            n = n.sibling;
                        null === r ? t || null === e.tail ? e.tail = null : e.tail.sibling = null : r.sibling = null
                    }
            }
            function Kl(e) {
                var t = null !== e.alternate && e.alternate.child === e.child
                  , n = 0
                  , r = 0;
                if (t)
                    for (var o = e.child; null !== o; )
                        n |= o.lanes | o.childLanes,
                        r |= 14680064 & o.subtreeFlags,
                        r |= 14680064 & o.flags,
                        o.return = e,
                        o = o.sibling;
                else
                    for (o = e.child; null !== o; )
                        n |= o.lanes | o.childLanes,
                        r |= o.subtreeFlags,
                        r |= o.flags,
                        o.return = e,
                        o = o.sibling;
                return e.subtreeFlags |= r,
                e.childLanes = n,
                t
            }
            function Gl(e, t, n) {
                var r = t.pendingProps;
                switch (na(t),
                t.tag) {
                case 2:
                case 16:
                case 15:
                case 0:
                case 11:
                case 7:
                case 8:
                case 12:
                case 9:
                case 14:
                    return Kl(t),
                    null;
                case 1:
                case 17:
                    return Do(t.type) && Io(),
                    Kl(t),
                    null;
                case 3:
                    return r = t.stateNode,
                    Ya(),
                    Po(No),
                    Po(Ro),
                    ri(),
                    r.pendingContext && (r.context = r.pendingContext,
                    r.pendingContext = null),
                    null !== e && null !== e.child || (fa(t) ? t.flags |= 4 : null === e || e.memoizedState.isDehydrated && 0 === (256 & t.flags) || (t.flags |= 1024,
                    null !== ia && (iu(ia),
                    ia = null))),
                    Al(e, t),
                    Kl(t),
                    null;
                case 5:
                    Ja(t);
                    var o = Qa($a.current);
                    if (n = t.type,
                    null !== e && null != t.stateNode)
                        Dl(e, t, n, r, o),
                        e.ref !== t.ref && (t.flags |= 512,
                        t.flags |= 2097152);
                    else {
                        if (!r) {
                            if (null === t.stateNode)
                                throw Error(a(166));
                            return Kl(t),
                            null
                        }
                        if (e = Qa(Ka.current),
                        fa(t)) {
                            r = t.stateNode,
                            n = t.type;
                            var i = t.memoizedProps;
                            switch (r[po] = t,
                            r[ho] = i,
                            e = 0 !== (1 & t.mode),
                            n) {
                            case "dialog":
                                jr("cancel", r),
                                jr("close", r);
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                jr("load", r);
                                break;
                            case "video":
                            case "audio":
                                for (o = 0; o < Lr.length; o++)
                                    jr(Lr[o], r);
                                break;
                            case "source":
                                jr("error", r);
                                break;
                            case "img":
                            case "image":
                            case "link":
                                jr("error", r),
                                jr("load", r);
                                break;
                            case "details":
                                jr("toggle", r);
                                break;
                            case "input":
                                X(r, i),
                                jr("invalid", r);
                                break;
                            case "select":
                                r._wrapperState = {
                                    wasMultiple: !!i.multiple
                                },
                                jr("invalid", r);
                                break;
                            case "textarea":
                                oe(r, i),
                                jr("invalid", r)
                            }
                            for (var s in ve(n, i),
                            o = null,
                            i)
                                if (i.hasOwnProperty(s)) {
                                    var u = i[s];
                                    "children" === s ? "string" === typeof u ? r.textContent !== u && (!0 !== i.suppressHydrationWarning && Zr(r.textContent, u, e),
                                    o = ["children", u]) : "number" === typeof u && r.textContent !== "" + u && (!0 !== i.suppressHydrationWarning && Zr(r.textContent, u, e),
                                    o = ["children", "" + u]) : l.hasOwnProperty(s) && null != u && "onScroll" === s && jr("scroll", r)
                                }
                            switch (n) {
                            case "input":
                                K(r),
                                J(r, i, !0);
                                break;
                            case "textarea":
                                K(r),
                                ie(r);
                                break;
                            case "select":
                            case "option":
                                break;
                            default:
                                "function" === typeof i.onClick && (r.onclick = Jr)
                            }
                            r = o,
                            t.updateQueue = r,
                            null !== r && (t.flags |= 4)
                        } else {
                            s = 9 === o.nodeType ? o : o.ownerDocument,
                            "http://www.w3.org/1999/xhtml" === e && (e = le(n)),
                            "http://www.w3.org/1999/xhtml" === e ? "script" === n ? ((e = s.createElement("div")).innerHTML = "<script><\/script>",
                            e = e.removeChild(e.firstChild)) : "string" === typeof r.is ? e = s.createElement(n, {
                                is: r.is
                            }) : (e = s.createElement(n),
                            "select" === n && (s = e,
                            r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n),
                            e[po] = t,
                            e[ho] = r,
                            Ol(e, t, !1, !1),
                            t.stateNode = e;
                            e: {
                                switch (s = be(n, r),
                                n) {
                                case "dialog":
                                    jr("cancel", e),
                                    jr("close", e),
                                    o = r;
                                    break;
                                case "iframe":
                                case "object":
                                case "embed":
                                    jr("load", e),
                                    o = r;
                                    break;
                                case "video":
                                case "audio":
                                    for (o = 0; o < Lr.length; o++)
                                        jr(Lr[o], e);
                                    o = r;
                                    break;
                                case "source":
                                    jr("error", e),
                                    o = r;
                                    break;
                                case "img":
                                case "image":
                                case "link":
                                    jr("error", e),
                                    jr("load", e),
                                    o = r;
                                    break;
                                case "details":
                                    jr("toggle", e),
                                    o = r;
                                    break;
                                case "input":
                                    X(e, r),
                                    o = Q(e, r),
                                    jr("invalid", e);
                                    break;
                                case "option":
                                default:
                                    o = r;
                                    break;
                                case "select":
                                    e._wrapperState = {
                                        wasMultiple: !!r.multiple
                                    },
                                    o = U({}, r, {
                                        value: void 0
                                    }),
                                    jr("invalid", e);
                                    break;
                                case "textarea":
                                    oe(e, r),
                                    o = re(e, r),
                                    jr("invalid", e)
                                }
                                for (i in ve(n, o),
                                u = o)
                                    if (u.hasOwnProperty(i)) {
                                        var c = u[i];
                                        "style" === i ? ye(e, c) : "dangerouslySetInnerHTML" === i ? null != (c = c ? c.__html : void 0) && de(e, c) : "children" === i ? "string" === typeof c ? ("textarea" !== n || "" !== c) && fe(e, c) : "number" === typeof c && fe(e, "" + c) : "suppressContentEditableWarning" !== i && "suppressHydrationWarning" !== i && "autoFocus" !== i && (l.hasOwnProperty(i) ? null != c && "onScroll" === i && jr("scroll", e) : null != c && b(e, i, c, s))
                                    }
                                switch (n) {
                                case "input":
                                    K(e),
                                    J(e, r, !1);
                                    break;
                                case "textarea":
                                    K(e),
                                    ie(e);
                                    break;
                                case "option":
                                    null != r.value && e.setAttribute("value", "" + V(r.value));
                                    break;
                                case "select":
                                    e.multiple = !!r.multiple,
                                    null != (i = r.value) ? ne(e, !!r.multiple, i, !1) : null != r.defaultValue && ne(e, !!r.multiple, r.defaultValue, !0);
                                    break;
                                default:
                                    "function" === typeof o.onClick && (e.onclick = Jr)
                                }
                                switch (n) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    r = !!r.autoFocus;
                                    break e;
                                case "img":
                                    r = !0;
                                    break e;
                                default:
                                    r = !1
                                }
                            }
                            r && (t.flags |= 4)
                        }
                        null !== t.ref && (t.flags |= 512,
                        t.flags |= 2097152)
                    }
                    return Kl(t),
                    null;
                case 6:
                    if (e && null != t.stateNode)
                        Il(e, t, e.memoizedProps, r);
                    else {
                        if ("string" !== typeof r && null === t.stateNode)
                            throw Error(a(166));
                        if (n = Qa($a.current),
                        Qa(Ka.current),
                        fa(t)) {
                            if (r = t.stateNode,
                            n = t.memoizedProps,
                            r[po] = t,
                            (i = r.nodeValue !== n) && null !== (e = ra))
                                switch (e.tag) {
                                case 3:
                                    Zr(r.nodeValue, n, 0 !== (1 & e.mode));
                                    break;
                                case 5:
                                    !0 !== e.memoizedProps.suppressHydrationWarning && Zr(r.nodeValue, n, 0 !== (1 & e.mode))
                                }
                            i && (t.flags |= 4)
                        } else
                            (r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(r))[po] = t,
                            t.stateNode = r
                    }
                    return Kl(t),
                    null;
                case 13:
                    if (Po(ei),
                    r = t.memoizedState,
                    null === e || null !== e.memoizedState && null !== e.memoizedState.dehydrated) {
                        if (aa && null !== oa && 0 !== (1 & t.mode) && 0 === (128 & t.flags))
                            pa(),
                            ha(),
                            t.flags |= 98560,
                            i = !1;
                        else if (i = fa(t),
                        null !== r && null !== r.dehydrated) {
                            if (null === e) {
                                if (!i)
                                    throw Error(a(318));
                                if (!(i = null !== (i = t.memoizedState) ? i.dehydrated : null))
                                    throw Error(a(317));
                                i[po] = t
                            } else
                                ha(),
                                0 === (128 & t.flags) && (t.memoizedState = null),
                                t.flags |= 4;
                            Kl(t),
                            i = !1
                        } else
                            null !== ia && (iu(ia),
                            ia = null),
                            i = !0;
                        if (!i)
                            return 65536 & t.flags ? t : null
                    }
                    return 0 !== (128 & t.flags) ? (t.lanes = n,
                    t) : ((r = null !== r) !== (null !== e && null !== e.memoizedState) && r && (t.child.flags |= 8192,
                    0 !== (1 & t.mode) && (null === e || 0 !== (1 & ei.current) ? 0 === Is && (Is = 3) : mu())),
                    null !== t.updateQueue && (t.flags |= 4),
                    Kl(t),
                    null);
                case 4:
                    return Ya(),
                    Al(e, t),
                    null === e && Fr(t.stateNode.containerInfo),
                    Kl(t),
                    null;
                case 10:
                    return xa(t.type._context),
                    Kl(t),
                    null;
                case 19:
                    if (Po(ei),
                    null === (i = t.memoizedState))
                        return Kl(t),
                        null;
                    if (r = 0 !== (128 & t.flags),
                    null === (s = i.rendering))
                        if (r)
                            Wl(i, !1);
                        else {
                            if (0 !== Is || null !== e && 0 !== (128 & e.flags))
                                for (e = t.child; null !== e; ) {
                                    if (null !== (s = ti(e))) {
                                        for (t.flags |= 128,
                                        Wl(i, !1),
                                        null !== (r = s.updateQueue) && (t.updateQueue = r,
                                        t.flags |= 4),
                                        t.subtreeFlags = 0,
                                        r = n,
                                        n = t.child; null !== n; )
                                            e = r,
                                            (i = n).flags &= 14680066,
                                            null === (s = i.alternate) ? (i.childLanes = 0,
                                            i.lanes = e,
                                            i.child = null,
                                            i.subtreeFlags = 0,
                                            i.memoizedProps = null,
                                            i.memoizedState = null,
                                            i.updateQueue = null,
                                            i.dependencies = null,
                                            i.stateNode = null) : (i.childLanes = s.childLanes,
                                            i.lanes = s.lanes,
                                            i.child = s.child,
                                            i.subtreeFlags = 0,
                                            i.deletions = null,
                                            i.memoizedProps = s.memoizedProps,
                                            i.memoizedState = s.memoizedState,
                                            i.updateQueue = s.updateQueue,
                                            i.type = s.type,
                                            e = s.dependencies,
                                            i.dependencies = null === e ? null : {
                                                lanes: e.lanes,
                                                firstContext: e.firstContext
                                            }),
                                            n = n.sibling;
                                        return To(ei, 1 & ei.current | 2),
                                        t.child
                                    }
                                    e = e.sibling
                                }
                            null !== i.tail && Ye() > Fs && (t.flags |= 128,
                            r = !0,
                            Wl(i, !1),
                            t.lanes = 4194304)
                        }
                    else {
                        if (!r)
                            if (null !== (e = ti(s))) {
                                if (t.flags |= 128,
                                r = !0,
                                null !== (n = e.updateQueue) && (t.updateQueue = n,
                                t.flags |= 4),
                                Wl(i, !0),
                                null === i.tail && "hidden" === i.tailMode && !s.alternate && !aa)
                                    return Kl(t),
                                    null
                            } else
                                2 * Ye() - i.renderingStartTime > Fs && 1073741824 !== n && (t.flags |= 128,
                                r = !0,
                                Wl(i, !1),
                                t.lanes = 4194304);
                        i.isBackwards ? (s.sibling = t.child,
                        t.child = s) : (null !== (n = i.last) ? n.sibling = s : t.child = s,
                        i.last = s)
                    }
                    return null !== i.tail ? (t = i.tail,
                    i.rendering = t,
                    i.tail = t.sibling,
                    i.renderingStartTime = Ye(),
                    t.sibling = null,
                    n = ei.current,
                    To(ei, r ? 1 & n | 2 : 1 & n),
                    t) : (Kl(t),
                    null);
                case 22:
                case 23:
                    return du(),
                    r = null !== t.memoizedState,
                    null !== e && null !== e.memoizedState !== r && (t.flags |= 8192),
                    r && 0 !== (1 & t.mode) ? 0 !== (1073741824 & As) && (Kl(t),
                    6 & t.subtreeFlags && (t.flags |= 8192)) : Kl(t),
                    null;
                case 24:
                case 25:
                    return null
                }
                throw Error(a(156, t.tag))
            }
            function $l(e, t) {
                switch (na(t),
                t.tag) {
                case 1:
                    return Do(t.type) && Io(),
                    65536 & (e = t.flags) ? (t.flags = -65537 & e | 128,
                    t) : null;
                case 3:
                    return Ya(),
                    Po(No),
                    Po(Ro),
                    ri(),
                    0 !== (65536 & (e = t.flags)) && 0 === (128 & e) ? (t.flags = -65537 & e | 128,
                    t) : null;
                case 5:
                    return Ja(t),
                    null;
                case 13:
                    if (Po(ei),
                    null !== (e = t.memoizedState) && null !== e.dehydrated) {
                        if (null === t.alternate)
                            throw Error(a(340));
                        ha()
                    }
                    return 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128,
                    t) : null;
                case 19:
                    return Po(ei),
                    null;
                case 4:
                    return Ya(),
                    null;
                case 10:
                    return xa(t.type._context),
                    null;
                case 22:
                case 23:
                    return du(),
                    null;
                default:
                    return null
                }
            }
            Ol = function(e, t) {
                for (var n = t.child; null !== n; ) {
                    if (5 === n.tag || 6 === n.tag)
                        e.appendChild(n.stateNode);
                    else if (4 !== n.tag && null !== n.child) {
                        n.child.return = n,
                        n = n.child;
                        continue
                    }
                    if (n === t)
                        break;
                    for (; null === n.sibling; ) {
                        if (null === n.return || n.return === t)
                            return;
                        n = n.return
                    }
                    n.sibling.return = n.return,
                    n = n.sibling
                }
            }
            ,
            Al = function() {}
            ,
            Dl = function(e, t, n, r) {
                var o = e.memoizedProps;
                if (o !== r) {
                    e = t.stateNode,
                    Qa(Ka.current);
                    var a, i = null;
                    switch (n) {
                    case "input":
                        o = Q(e, o),
                        r = Q(e, r),
                        i = [];
                        break;
                    case "select":
                        o = U({}, o, {
                            value: void 0
                        }),
                        r = U({}, r, {
                            value: void 0
                        }),
                        i = [];
                        break;
                    case "textarea":
                        o = re(e, o),
                        r = re(e, r),
                        i = [];
                        break;
                    default:
                        "function" !== typeof o.onClick && "function" === typeof r.onClick && (e.onclick = Jr)
                    }
                    for (c in ve(n, r),
                    n = null,
                    o)
                        if (!r.hasOwnProperty(c) && o.hasOwnProperty(c) && null != o[c])
                            if ("style" === c) {
                                var s = o[c];
                                for (a in s)
                                    s.hasOwnProperty(a) && (n || (n = {}),
                                    n[a] = "")
                            } else
                                "dangerouslySetInnerHTML" !== c && "children" !== c && "suppressContentEditableWarning" !== c && "suppressHydrationWarning" !== c && "autoFocus" !== c && (l.hasOwnProperty(c) ? i || (i = []) : (i = i || []).push(c, null));
                    for (c in r) {
                        var u = r[c];
                        if (s = null != o ? o[c] : void 0,
                        r.hasOwnProperty(c) && u !== s && (null != u || null != s))
                            if ("style" === c)
                                if (s) {
                                    for (a in s)
                                        !s.hasOwnProperty(a) || u && u.hasOwnProperty(a) || (n || (n = {}),
                                        n[a] = "");
                                    for (a in u)
                                        u.hasOwnProperty(a) && s[a] !== u[a] && (n || (n = {}),
                                        n[a] = u[a])
                                } else
                                    n || (i || (i = []),
                                    i.push(c, n)),
                                    n = u;
                            else
                                "dangerouslySetInnerHTML" === c ? (u = u ? u.__html : void 0,
                                s = s ? s.__html : void 0,
                                null != u && s !== u && (i = i || []).push(c, u)) : "children" === c ? "string" !== typeof u && "number" !== typeof u || (i = i || []).push(c, "" + u) : "suppressContentEditableWarning" !== c && "suppressHydrationWarning" !== c && (l.hasOwnProperty(c) ? (null != u && "onScroll" === c && jr("scroll", e),
                                i || s === u || (i = [])) : (i = i || []).push(c, u))
                    }
                    n && (i = i || []).push("style", n);
                    var c = i;
                    (t.updateQueue = c) && (t.flags |= 4)
                }
            }
            ,
            Il = function(e, t, n, r) {
                n !== r && (t.flags |= 4)
            }
            ;
            var Ql = !1
              , Xl = !1
              , Yl = "function" === typeof WeakSet ? WeakSet : Set
              , Zl = null;
            function Jl(e, t) {
                var n = e.ref;
                if (null !== n)
                    if ("function" === typeof n)
                        try {
                            n(null)
                        } catch (r) {
                            ku(e, t, r)
                        }
                    else
                        n.current = null
            }
            function es(e, t, n) {
                try {
                    n()
                } catch (r) {
                    ku(e, t, r)
                }
            }
            var ts = !1;
            function ns(e, t, n) {
                var r = t.updateQueue;
                if (null !== (r = null !== r ? r.lastEffect : null)) {
                    var o = r = r.next;
                    do {
                        if ((o.tag & e) === e) {
                            var a = o.destroy;
                            o.destroy = void 0,
                            void 0 !== a && es(t, n, a)
                        }
                        o = o.next
                    } while (o !== r)
                }
            }
            function rs(e, t) {
                if (null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)) {
                    var n = t = t.next;
                    do {
                        if ((n.tag & e) === e) {
                            var r = n.create;
                            n.destroy = r()
                        }
                        n = n.next
                    } while (n !== t)
                }
            }
            function os(e) {
                var t = e.ref;
                if (null !== t) {
                    var n = e.stateNode;
                    e.tag,
                    e = n,
                    "function" === typeof t ? t(e) : t.current = e
                }
            }
            function as(e) {
                var t = e.alternate;
                null !== t && (e.alternate = null,
                as(t)),
                e.child = null,
                e.deletions = null,
                e.sibling = null,
                5 === e.tag && (null !== (t = e.stateNode) && (delete t[po],
                delete t[ho],
                delete t[yo],
                delete t[go],
                delete t[vo])),
                e.stateNode = null,
                e.return = null,
                e.dependencies = null,
                e.memoizedProps = null,
                e.memoizedState = null,
                e.pendingProps = null,
                e.stateNode = null,
                e.updateQueue = null
            }
            function is(e) {
                return 5 === e.tag || 3 === e.tag || 4 === e.tag
            }
            function ls(e) {
                e: for (; ; ) {
                    for (; null === e.sibling; ) {
                        if (null === e.return || is(e.return))
                            return null;
                        e = e.return
                    }
                    for (e.sibling.return = e.return,
                    e = e.sibling; 5 !== e.tag && 6 !== e.tag && 18 !== e.tag; ) {
                        if (2 & e.flags)
                            continue e;
                        if (null === e.child || 4 === e.tag)
                            continue e;
                        e.child.return = e,
                        e = e.child
                    }
                    if (!(2 & e.flags))
                        return e.stateNode
                }
            }
            function ss(e, t, n) {
                var r = e.tag;
                if (5 === r || 6 === r)
                    e = e.stateNode,
                    t ? 8 === n.nodeType ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (8 === n.nodeType ? (t = n.parentNode).insertBefore(e, n) : (t = n).appendChild(e),
                    null !== (n = n._reactRootContainer) && void 0 !== n || null !== t.onclick || (t.onclick = Jr));
                else if (4 !== r && null !== (e = e.child))
                    for (ss(e, t, n),
                    e = e.sibling; null !== e; )
                        ss(e, t, n),
                        e = e.sibling
            }
            function us(e, t, n) {
                var r = e.tag;
                if (5 === r || 6 === r)
                    e = e.stateNode,
                    t ? n.insertBefore(e, t) : n.appendChild(e);
                else if (4 !== r && null !== (e = e.child))
                    for (us(e, t, n),
                    e = e.sibling; null !== e; )
                        us(e, t, n),
                        e = e.sibling
            }
            var cs = null
              , ds = !1;
            function fs(e, t, n) {
                for (n = n.child; null !== n; )
                    ps(e, t, n),
                    n = n.sibling
            }
            function ps(e, t, n) {
                if (at && "function" === typeof at.onCommitFiberUnmount)
                    try {
                        at.onCommitFiberUnmount(ot, n)
                    } catch (l) {}
                switch (n.tag) {
                case 5:
                    Xl || Jl(n, t);
                case 6:
                    var r = cs
                      , o = ds;
                    cs = null,
                    fs(e, t, n),
                    ds = o,
                    null !== (cs = r) && (ds ? (e = cs,
                    n = n.stateNode,
                    8 === e.nodeType ? e.parentNode.removeChild(n) : e.removeChild(n)) : cs.removeChild(n.stateNode));
                    break;
                case 18:
                    null !== cs && (ds ? (e = cs,
                    n = n.stateNode,
                    8 === e.nodeType ? so(e.parentNode, n) : 1 === e.nodeType && so(e, n),
                    Ft(e)) : so(cs, n.stateNode));
                    break;
                case 4:
                    r = cs,
                    o = ds,
                    cs = n.stateNode.containerInfo,
                    ds = !0,
                    fs(e, t, n),
                    cs = r,
                    ds = o;
                    break;
                case 0:
                case 11:
                case 14:
                case 15:
                    if (!Xl && (null !== (r = n.updateQueue) && null !== (r = r.lastEffect))) {
                        o = r = r.next;
                        do {
                            var a = o
                              , i = a.destroy;
                            a = a.tag,
                            void 0 !== i && (0 !== (2 & a) || 0 !== (4 & a)) && es(n, t, i),
                            o = o.next
                        } while (o !== r)
                    }
                    fs(e, t, n);
                    break;
                case 1:
                    if (!Xl && (Jl(n, t),
                    "function" === typeof (r = n.stateNode).componentWillUnmount))
                        try {
                            r.props = n.memoizedProps,
                            r.state = n.memoizedState,
                            r.componentWillUnmount()
                        } catch (l) {
                            ku(n, t, l)
                        }
                    fs(e, t, n);
                    break;
                case 21:
                    fs(e, t, n);
                    break;
                case 22:
                    1 & n.mode ? (Xl = (r = Xl) || null !== n.memoizedState,
                    fs(e, t, n),
                    Xl = r) : fs(e, t, n);
                    break;
                default:
                    fs(e, t, n)
                }
            }
            function hs(e) {
                var t = e.updateQueue;
                if (null !== t) {
                    e.updateQueue = null;
                    var n = e.stateNode;
                    null === n && (n = e.stateNode = new Yl),
                    t.forEach((function(t) {
                        var r = xu.bind(null, e, t);
                        n.has(t) || (n.add(t),
                        t.then(r, r))
                    }
                    ))
                }
            }
            function ms(e, t) {
                var n = t.deletions;
                if (null !== n)
                    for (var r = 0; r < n.length; r++) {
                        var o = n[r];
                        try {
                            var i = e
                              , l = t
                              , s = l;
                            e: for (; null !== s; ) {
                                switch (s.tag) {
                                case 5:
                                    cs = s.stateNode,
                                    ds = !1;
                                    break e;
                                case 3:
                                case 4:
                                    cs = s.stateNode.containerInfo,
                                    ds = !0;
                                    break e
                                }
                                s = s.return
                            }
                            if (null === cs)
                                throw Error(a(160));
                            ps(i, l, o),
                            cs = null,
                            ds = !1;
                            var u = o.alternate;
                            null !== u && (u.return = null),
                            o.return = null
                        } catch (c) {
                            ku(o, t, c)
                        }
                    }
                if (12854 & t.subtreeFlags)
                    for (t = t.child; null !== t; )
                        ys(t, e),
                        t = t.sibling
            }
            function ys(e, t) {
                var n = e.alternate
                  , r = e.flags;
                switch (e.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                    if (ms(t, e),
                    gs(e),
                    4 & r) {
                        try {
                            ns(3, e, e.return),
                            rs(3, e)
                        } catch (y) {
                            ku(e, e.return, y)
                        }
                        try {
                            ns(5, e, e.return)
                        } catch (y) {
                            ku(e, e.return, y)
                        }
                    }
                    break;
                case 1:
                    ms(t, e),
                    gs(e),
                    512 & r && null !== n && Jl(n, n.return);
                    break;
                case 5:
                    if (ms(t, e),
                    gs(e),
                    512 & r && null !== n && Jl(n, n.return),
                    32 & e.flags) {
                        var o = e.stateNode;
                        try {
                            fe(o, "")
                        } catch (y) {
                            ku(e, e.return, y)
                        }
                    }
                    if (4 & r && null != (o = e.stateNode)) {
                        var i = e.memoizedProps
                          , l = null !== n ? n.memoizedProps : i
                          , s = e.type
                          , u = e.updateQueue;
                        if (e.updateQueue = null,
                        null !== u)
                            try {
                                "input" === s && "radio" === i.type && null != i.name && Y(o, i),
                                be(s, l);
                                var c = be(s, i);
                                for (l = 0; l < u.length; l += 2) {
                                    var d = u[l]
                                      , f = u[l + 1];
                                    "style" === d ? ye(o, f) : "dangerouslySetInnerHTML" === d ? de(o, f) : "children" === d ? fe(o, f) : b(o, d, f, c)
                                }
                                switch (s) {
                                case "input":
                                    Z(o, i);
                                    break;
                                case "textarea":
                                    ae(o, i);
                                    break;
                                case "select":
                                    var p = o._wrapperState.wasMultiple;
                                    o._wrapperState.wasMultiple = !!i.multiple;
                                    var h = i.value;
                                    null != h ? ne(o, !!i.multiple, h, !1) : p !== !!i.multiple && (null != i.defaultValue ? ne(o, !!i.multiple, i.defaultValue, !0) : ne(o, !!i.multiple, i.multiple ? [] : "", !1))
                                }
                                o[ho] = i
                            } catch (y) {
                                ku(e, e.return, y)
                            }
                    }
                    break;
                case 6:
                    if (ms(t, e),
                    gs(e),
                    4 & r) {
                        if (null === e.stateNode)
                            throw Error(a(162));
                        o = e.stateNode,
                        i = e.memoizedProps;
                        try {
                            o.nodeValue = i
                        } catch (y) {
                            ku(e, e.return, y)
                        }
                    }
                    break;
                case 3:
                    if (ms(t, e),
                    gs(e),
                    4 & r && null !== n && n.memoizedState.isDehydrated)
                        try {
                            Ft(t.containerInfo)
                        } catch (y) {
                            ku(e, e.return, y)
                        }
                    break;
                case 4:
                default:
                    ms(t, e),
                    gs(e);
                    break;
                case 13:
                    ms(t, e),
                    gs(e),
                    8192 & (o = e.child).flags && (i = null !== o.memoizedState,
                    o.stateNode.isHidden = i,
                    !i || null !== o.alternate && null !== o.alternate.memoizedState || (qs = Ye())),
                    4 & r && hs(e);
                    break;
                case 22:
                    if (d = null !== n && null !== n.memoizedState,
                    1 & e.mode ? (Xl = (c = Xl) || d,
                    ms(t, e),
                    Xl = c) : ms(t, e),
                    gs(e),
                    8192 & r) {
                        if (c = null !== e.memoizedState,
                        (e.stateNode.isHidden = c) && !d && 0 !== (1 & e.mode))
                            for (Zl = e,
                            d = e.child; null !== d; ) {
                                for (f = Zl = d; null !== Zl; ) {
                                    switch (h = (p = Zl).child,
                                    p.tag) {
                                    case 0:
                                    case 11:
                                    case 14:
                                    case 15:
                                        ns(4, p, p.return);
                                        break;
                                    case 1:
                                        Jl(p, p.return);
                                        var m = p.stateNode;
                                        if ("function" === typeof m.componentWillUnmount) {
                                            r = p,
                                            n = p.return;
                                            try {
                                                t = r,
                                                m.props = t.memoizedProps,
                                                m.state = t.memoizedState,
                                                m.componentWillUnmount()
                                            } catch (y) {
                                                ku(r, n, y)
                                            }
                                        }
                                        break;
                                    case 5:
                                        Jl(p, p.return);
                                        break;
                                    case 22:
                                        if (null !== p.memoizedState) {
                                            _s(f);
                                            continue
                                        }
                                    }
                                    null !== h ? (h.return = p,
                                    Zl = h) : _s(f)
                                }
                                d = d.sibling
                            }
                        e: for (d = null,
                        f = e; ; ) {
                            if (5 === f.tag) {
                                if (null === d) {
                                    d = f;
                                    try {
                                        o = f.stateNode,
                                        c ? "function" === typeof (i = o.style).setProperty ? i.setProperty("display", "none", "important") : i.display = "none" : (s = f.stateNode,
                                        l = void 0 !== (u = f.memoizedProps.style) && null !== u && u.hasOwnProperty("display") ? u.display : null,
                                        s.style.display = me("display", l))
                                    } catch (y) {
                                        ku(e, e.return, y)
                                    }
                                }
                            } else if (6 === f.tag) {
                                if (null === d)
                                    try {
                                        f.stateNode.nodeValue = c ? "" : f.memoizedProps
                                    } catch (y) {
                                        ku(e, e.return, y)
                                    }
                            } else if ((22 !== f.tag && 23 !== f.tag || null === f.memoizedState || f === e) && null !== f.child) {
                                f.child.return = f,
                                f = f.child;
                                continue
                            }
                            if (f === e)
                                break e;
                            for (; null === f.sibling; ) {
                                if (null === f.return || f.return === e)
                                    break e;
                                d === f && (d = null),
                                f = f.return
                            }
                            d === f && (d = null),
                            f.sibling.return = f.return,
                            f = f.sibling
                        }
                    }
                    break;
                case 19:
                    ms(t, e),
                    gs(e),
                    4 & r && hs(e);
                case 21:
                }
            }
            function gs(e) {
                var t = e.flags;
                if (2 & t) {
                    try {
                        e: {
                            for (var n = e.return; null !== n; ) {
                                if (is(n)) {
                                    var r = n;
                                    break e
                                }
                                n = n.return
                            }
                            throw Error(a(160))
                        }
                        switch (r.tag) {
                        case 5:
                            var o = r.stateNode;
                            32 & r.flags && (fe(o, ""),
                            r.flags &= -33),
                            us(e, ls(e), o);
                            break;
                        case 3:
                        case 4:
                            var i = r.stateNode.containerInfo;
                            ss(e, ls(e), i);
                            break;
                        default:
                            throw Error(a(161))
                        }
                    } catch (l) {
                        ku(e, e.return, l)
                    }
                    e.flags &= -3
                }
                4096 & t && (e.flags &= -4097)
            }
            function vs(e, t, n) {
                Zl = e,
                bs(e, t, n)
            }
            function bs(e, t, n) {
                for (var r = 0 !== (1 & e.mode); null !== Zl; ) {
                    var o = Zl
                      , a = o.child;
                    if (22 === o.tag && r) {
                        var i = null !== o.memoizedState || Ql;
                        if (!i) {
                            var l = o.alternate
                              , s = null !== l && null !== l.memoizedState || Xl;
                            l = Ql;
                            var u = Xl;
                            if (Ql = i,
                            (Xl = s) && !u)
                                for (Zl = o; null !== Zl; )
                                    s = (i = Zl).child,
                                    22 === i.tag && null !== i.memoizedState ? Ss(o) : null !== s ? (s.return = i,
                                    Zl = s) : Ss(o);
                            for (; null !== a; )
                                Zl = a,
                                bs(a, t, n),
                                a = a.sibling;
                            Zl = o,
                            Ql = l,
                            Xl = u
                        }
                        ws(e)
                    } else
                        0 !== (8772 & o.subtreeFlags) && null !== a ? (a.return = o,
                        Zl = a) : ws(e)
                }
            }
            function ws(e) {
                for (; null !== Zl; ) {
                    var t = Zl;
                    if (0 !== (8772 & t.flags)) {
                        var n = t.alternate;
                        try {
                            if (0 !== (8772 & t.flags))
                                switch (t.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    Xl || rs(5, t);
                                    break;
                                case 1:
                                    var r = t.stateNode;
                                    if (4 & t.flags && !Xl)
                                        if (null === n)
                                            r.componentDidMount();
                                        else {
                                            var o = t.elementType === t.type ? n.memoizedProps : nl(t.type, n.memoizedProps);
                                            r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                                        }
                                    var i = t.updateQueue;
                                    null !== i && Va(t, i, r);
                                    break;
                                case 3:
                                    var l = t.updateQueue;
                                    if (null !== l) {
                                        if (n = null,
                                        null !== t.child)
                                            switch (t.child.tag) {
                                            case 5:
                                            case 1:
                                                n = t.child.stateNode
                                            }
                                        Va(t, l, n)
                                    }
                                    break;
                                case 5:
                                    var s = t.stateNode;
                                    if (null === n && 4 & t.flags) {
                                        n = s;
                                        var u = t.memoizedProps;
                                        switch (t.type) {
                                        case "button":
                                        case "input":
                                        case "select":
                                        case "textarea":
                                            u.autoFocus && n.focus();
                                            break;
                                        case "img":
                                            u.src && (n.src = u.src)
                                        }
                                    }
                                    break;
                                case 6:
                                case 4:
                                case 12:
                                case 19:
                                case 17:
                                case 21:
                                case 22:
                                case 23:
                                case 25:
                                    break;
                                case 13:
                                    if (null === t.memoizedState) {
                                        var c = t.alternate;
                                        if (null !== c) {
                                            var d = c.memoizedState;
                                            if (null !== d) {
                                                var f = d.dehydrated;
                                                null !== f && Ft(f)
                                            }
                                        }
                                    }
                                    break;
                                default:
                                    throw Error(a(163))
                                }
                            Xl || 512 & t.flags && os(t)
                        } catch (p) {
                            ku(t, t.return, p)
                        }
                    }
                    if (t === e) {
                        Zl = null;
                        break
                    }
                    if (null !== (n = t.sibling)) {
                        n.return = t.return,
                        Zl = n;
                        break
                    }
                    Zl = t.return
                }
            }
            function _s(e) {
                for (; null !== Zl; ) {
                    var t = Zl;
                    if (t === e) {
                        Zl = null;
                        break
                    }
                    var n = t.sibling;
                    if (null !== n) {
                        n.return = t.return,
                        Zl = n;
                        break
                    }
                    Zl = t.return
                }
            }
            function Ss(e) {
                for (; null !== Zl; ) {
                    var t = Zl;
                    try {
                        switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            var n = t.return;
                            try {
                                rs(4, t)
                            } catch (s) {
                                ku(t, n, s)
                            }
                            break;
                        case 1:
                            var r = t.stateNode;
                            if ("function" === typeof r.componentDidMount) {
                                var o = t.return;
                                try {
                                    r.componentDidMount()
                                } catch (s) {
                                    ku(t, o, s)
                                }
                            }
                            var a = t.return;
                            try {
                                os(t)
                            } catch (s) {
                                ku(t, a, s)
                            }
                            break;
                        case 5:
                            var i = t.return;
                            try {
                                os(t)
                            } catch (s) {
                                ku(t, i, s)
                            }
                        }
                    } catch (s) {
                        ku(t, t.return, s)
                    }
                    if (t === e) {
                        Zl = null;
                        break
                    }
                    var l = t.sibling;
                    if (null !== l) {
                        l.return = t.return,
                        Zl = l;
                        break
                    }
                    Zl = t.return
                }
            }
            var Es, ks = Math.ceil, Cs = w.ReactCurrentDispatcher, Ps = w.ReactCurrentOwner, Ts = w.ReactCurrentBatchConfig, xs = 0, Rs = null, Ns = null, Os = 0, As = 0, Ds = Co(0), Is = 0, Ls = null, Ms = 0, Us = 0, Hs = 0, js = null, zs = null, qs = 0, Fs = 1 / 0, Bs = null, Vs = !1, Ws = null, Ks = null, Gs = !1, $s = null, Qs = 0, Xs = 0, Ys = null, Zs = -1, Js = 0;
            function eu() {
                return 0 !== (6 & xs) ? Ye() : -1 !== Zs ? Zs : Zs = Ye()
            }
            function tu(e) {
                return 0 === (1 & e.mode) ? 1 : 0 !== (2 & xs) && 0 !== Os ? Os & -Os : null !== ya.transition ? (0 === Js && (Js = mt()),
                Js) : 0 !== (e = bt) ? e : e = void 0 === (e = window.event) ? 16 : Xt(e.type)
            }
            function nu(e, t, n, r) {
                if (50 < Xs)
                    throw Xs = 0,
                    Ys = null,
                    Error(a(185));
                gt(e, n, r),
                0 !== (2 & xs) && e === Rs || (e === Rs && (0 === (2 & xs) && (Us |= n),
                4 === Is && lu(e, Os)),
                ru(e, r),
                1 === n && 0 === xs && 0 === (1 & t.mode) && (Fs = Ye() + 500,
                zo && Bo()))
            }
            function ru(e, t) {
                var n = e.callbackNode;
                !function(e, t) {
                    for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, a = e.pendingLanes; 0 < a; ) {
                        var i = 31 - it(a)
                          , l = 1 << i
                          , s = o[i];
                        -1 === s ? 0 !== (l & n) && 0 === (l & r) || (o[i] = pt(l, t)) : s <= t && (e.expiredLanes |= l),
                        a &= ~l
                    }
                }(e, t);
                var r = ft(e, e === Rs ? Os : 0);
                if (0 === r)
                    null !== n && $e(n),
                    e.callbackNode = null,
                    e.callbackPriority = 0;
                else if (t = r & -r,
                e.callbackPriority !== t) {
                    if (null != n && $e(n),
                    1 === t)
                        0 === e.tag ? function(e) {
                            zo = !0,
                            Fo(e)
                        }(su.bind(null, e)) : Fo(su.bind(null, e)),
                        io((function() {
                            0 === (6 & xs) && Bo()
                        }
                        )),
                        n = null;
                    else {
                        switch (wt(r)) {
                        case 1:
                            n = Je;
                            break;
                        case 4:
                            n = et;
                            break;
                        case 16:
                        default:
                            n = tt;
                            break;
                        case 536870912:
                            n = rt
                        }
                        n = Ru(n, ou.bind(null, e))
                    }
                    e.callbackPriority = t,
                    e.callbackNode = n
                }
            }
            function ou(e, t) {
                if (Zs = -1,
                Js = 0,
                0 !== (6 & xs))
                    throw Error(a(327));
                var n = e.callbackNode;
                if (Su() && e.callbackNode !== n)
                    return null;
                var r = ft(e, e === Rs ? Os : 0);
                if (0 === r)
                    return null;
                if (0 !== (30 & r) || 0 !== (r & e.expiredLanes) || t)
                    t = yu(e, r);
                else {
                    t = r;
                    var o = xs;
                    xs |= 2;
                    var i = hu();
                    for (Rs === e && Os === t || (Bs = null,
                    Fs = Ye() + 500,
                    fu(e, t)); ; )
                        try {
                            vu();
                            break
                        } catch (s) {
                            pu(e, s)
                        }
                    Ta(),
                    Cs.current = i,
                    xs = o,
                    null !== Ns ? t = 0 : (Rs = null,
                    Os = 0,
                    t = Is)
                }
                if (0 !== t) {
                    if (2 === t && (0 !== (o = ht(e)) && (r = o,
                    t = au(e, o))),
                    1 === t)
                        throw n = Ls,
                        fu(e, 0),
                        lu(e, r),
                        ru(e, Ye()),
                        n;
                    if (6 === t)
                        lu(e, r);
                    else {
                        if (o = e.current.alternate,
                        0 === (30 & r) && !function(e) {
                            for (var t = e; ; ) {
                                if (16384 & t.flags) {
                                    var n = t.updateQueue;
                                    if (null !== n && null !== (n = n.stores))
                                        for (var r = 0; r < n.length; r++) {
                                            var o = n[r]
                                              , a = o.getSnapshot;
                                            o = o.value;
                                            try {
                                                if (!lr(a(), o))
                                                    return !1
                                            } catch (l) {
                                                return !1
                                            }
                                        }
                                }
                                if (n = t.child,
                                16384 & t.subtreeFlags && null !== n)
                                    n.return = t,
                                    t = n;
                                else {
                                    if (t === e)
                                        break;
                                    for (; null === t.sibling; ) {
                                        if (null === t.return || t.return === e)
                                            return !0;
                                        t = t.return
                                    }
                                    t.sibling.return = t.return,
                                    t = t.sibling
                                }
                            }
                            return !0
                        }(o) && (2 === (t = yu(e, r)) && (0 !== (i = ht(e)) && (r = i,
                        t = au(e, i))),
                        1 === t))
                            throw n = Ls,
                            fu(e, 0),
                            lu(e, r),
                            ru(e, Ye()),
                            n;
                        switch (e.finishedWork = o,
                        e.finishedLanes = r,
                        t) {
                        case 0:
                        case 1:
                            throw Error(a(345));
                        case 2:
                        case 5:
                            _u(e, zs, Bs);
                            break;
                        case 3:
                            if (lu(e, r),
                            (130023424 & r) === r && 10 < (t = qs + 500 - Ye())) {
                                if (0 !== ft(e, 0))
                                    break;
                                if (((o = e.suspendedLanes) & r) !== r) {
                                    eu(),
                                    e.pingedLanes |= e.suspendedLanes & o;
                                    break
                                }
                                e.timeoutHandle = ro(_u.bind(null, e, zs, Bs), t);
                                break
                            }
                            _u(e, zs, Bs);
                            break;
                        case 4:
                            if (lu(e, r),
                            (4194240 & r) === r)
                                break;
                            for (t = e.eventTimes,
                            o = -1; 0 < r; ) {
                                var l = 31 - it(r);
                                i = 1 << l,
                                (l = t[l]) > o && (o = l),
                                r &= ~i
                            }
                            if (r = o,
                            10 < (r = (120 > (r = Ye() - r) ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * ks(r / 1960)) - r)) {
                                e.timeoutHandle = ro(_u.bind(null, e, zs, Bs), r);
                                break
                            }
                            _u(e, zs, Bs);
                            break;
                        default:
                            throw Error(a(329))
                        }
                    }
                }
                return ru(e, Ye()),
                e.callbackNode === n ? ou.bind(null, e) : null
            }
            function au(e, t) {
                var n = js;
                return e.current.memoizedState.isDehydrated && (fu(e, t).flags |= 256),
                2 !== (e = yu(e, t)) && (t = zs,
                zs = n,
                null !== t && iu(t)),
                e
            }
            function iu(e) {
                null === zs ? zs = e : zs.push.apply(zs, e)
            }
            function lu(e, t) {
                for (t &= ~Hs,
                t &= ~Us,
                e.suspendedLanes |= t,
                e.pingedLanes &= ~t,
                e = e.expirationTimes; 0 < t; ) {
                    var n = 31 - it(t)
                      , r = 1 << n;
                    e[n] = -1,
                    t &= ~r
                }
            }
            function su(e) {
                if (0 !== (6 & xs))
                    throw Error(a(327));
                Su();
                var t = ft(e, 0);
                if (0 === (1 & t))
                    return ru(e, Ye()),
                    null;
                var n = yu(e, t);
                if (0 !== e.tag && 2 === n) {
                    var r = ht(e);
                    0 !== r && (t = r,
                    n = au(e, r))
                }
                if (1 === n)
                    throw n = Ls,
                    fu(e, 0),
                    lu(e, t),
                    ru(e, Ye()),
                    n;
                if (6 === n)
                    throw Error(a(345));
                return e.finishedWork = e.current.alternate,
                e.finishedLanes = t,
                _u(e, zs, Bs),
                ru(e, Ye()),
                null
            }
            function uu(e, t) {
                var n = xs;
                xs |= 1;
                try {
                    return e(t)
                } finally {
                    0 === (xs = n) && (Fs = Ye() + 500,
                    zo && Bo())
                }
            }
            function cu(e) {
                null !== $s && 0 === $s.tag && 0 === (6 & xs) && Su();
                var t = xs;
                xs |= 1;
                var n = Ts.transition
                  , r = bt;
                try {
                    if (Ts.transition = null,
                    bt = 1,
                    e)
                        return e()
                } finally {
                    bt = r,
                    Ts.transition = n,
                    0 === (6 & (xs = t)) && Bo()
                }
            }
            function du() {
                As = Ds.current,
                Po(Ds)
            }
            function fu(e, t) {
                e.finishedWork = null,
                e.finishedLanes = 0;
                var n = e.timeoutHandle;
                if (-1 !== n && (e.timeoutHandle = -1,
                oo(n)),
                null !== Ns)
                    for (n = Ns.return; null !== n; ) {
                        var r = n;
                        switch (na(r),
                        r.tag) {
                        case 1:
                            null !== (r = r.type.childContextTypes) && void 0 !== r && Io();
                            break;
                        case 3:
                            Ya(),
                            Po(No),
                            Po(Ro),
                            ri();
                            break;
                        case 5:
                            Ja(r);
                            break;
                        case 4:
                            Ya();
                            break;
                        case 13:
                        case 19:
                            Po(ei);
                            break;
                        case 10:
                            xa(r.type._context);
                            break;
                        case 22:
                        case 23:
                            du()
                        }
                        n = n.return
                    }
                if (Rs = e,
                Ns = e = Du(e.current, null),
                Os = As = t,
                Is = 0,
                Ls = null,
                Hs = Us = Ms = 0,
                zs = js = null,
                null !== Aa) {
                    for (t = 0; t < Aa.length; t++)
                        if (null !== (r = (n = Aa[t]).interleaved)) {
                            n.interleaved = null;
                            var o = r.next
                              , a = n.pending;
                            if (null !== a) {
                                var i = a.next;
                                a.next = o,
                                r.next = i
                            }
                            n.pending = r
                        }
                    Aa = null
                }
                return e
            }
            function pu(e, t) {
                for (; ; ) {
                    var n = Ns;
                    try {
                        if (Ta(),
                        oi.current = Zi,
                        ci) {
                            for (var r = li.memoizedState; null !== r; ) {
                                var o = r.queue;
                                null !== o && (o.pending = null),
                                r = r.next
                            }
                            ci = !1
                        }
                        if (ii = 0,
                        ui = si = li = null,
                        di = !1,
                        fi = 0,
                        Ps.current = null,
                        null === n || null === n.return) {
                            Is = 1,
                            Ls = t,
                            Ns = null;
                            break
                        }
                        e: {
                            var i = e
                              , l = n.return
                              , s = n
                              , u = t;
                            if (t = Os,
                            s.flags |= 32768,
                            null !== u && "object" === typeof u && "function" === typeof u.then) {
                                var c = u
                                  , d = s
                                  , f = d.tag;
                                if (0 === (1 & d.mode) && (0 === f || 11 === f || 15 === f)) {
                                    var p = d.alternate;
                                    p ? (d.updateQueue = p.updateQueue,
                                    d.memoizedState = p.memoizedState,
                                    d.lanes = p.lanes) : (d.updateQueue = null,
                                    d.memoizedState = null)
                                }
                                var h = yl(l);
                                if (null !== h) {
                                    h.flags &= -257,
                                    gl(h, l, s, 0, t),
                                    1 & h.mode && ml(i, c, t),
                                    u = c;
                                    var m = (t = h).updateQueue;
                                    if (null === m) {
                                        var y = new Set;
                                        y.add(u),
                                        t.updateQueue = y
                                    } else
                                        m.add(u);
                                    break e
                                }
                                if (0 === (1 & t)) {
                                    ml(i, c, t),
                                    mu();
                                    break e
                                }
                                u = Error(a(426))
                            } else if (aa && 1 & s.mode) {
                                var g = yl(l);
                                if (null !== g) {
                                    0 === (65536 & g.flags) && (g.flags |= 256),
                                    gl(g, l, s, 0, t),
                                    ma(ul(u, s));
                                    break e
                                }
                            }
                            i = u = ul(u, s),
                            4 !== Is && (Is = 2),
                            null === js ? js = [i] : js.push(i),
                            i = l;
                            do {
                                switch (i.tag) {
                                case 3:
                                    i.flags |= 65536,
                                    t &= -t,
                                    i.lanes |= t,
                                    Fa(i, pl(0, u, t));
                                    break e;
                                case 1:
                                    s = u;
                                    var v = i.type
                                      , b = i.stateNode;
                                    if (0 === (128 & i.flags) && ("function" === typeof v.getDerivedStateFromError || null !== b && "function" === typeof b.componentDidCatch && (null === Ks || !Ks.has(b)))) {
                                        i.flags |= 65536,
                                        t &= -t,
                                        i.lanes |= t,
                                        Fa(i, hl(i, s, t));
                                        break e
                                    }
                                }
                                i = i.return
                            } while (null !== i)
                        }
                        wu(n)
                    } catch (w) {
                        t = w,
                        Ns === n && null !== n && (Ns = n = n.return);
                        continue
                    }
                    break
                }
            }
            function hu() {
                var e = Cs.current;
                return Cs.current = Zi,
                null === e ? Zi : e
            }
            function mu() {
                0 !== Is && 3 !== Is && 2 !== Is || (Is = 4),
                null === Rs || 0 === (268435455 & Ms) && 0 === (268435455 & Us) || lu(Rs, Os)
            }
            function yu(e, t) {
                var n = xs;
                xs |= 2;
                var r = hu();
                for (Rs === e && Os === t || (Bs = null,
                fu(e, t)); ; )
                    try {
                        gu();
                        break
                    } catch (o) {
                        pu(e, o)
                    }
                if (Ta(),
                xs = n,
                Cs.current = r,
                null !== Ns)
                    throw Error(a(261));
                return Rs = null,
                Os = 0,
                Is
            }
            function gu() {
                for (; null !== Ns; )
                    bu(Ns)
            }
            function vu() {
                for (; null !== Ns && !Qe(); )
                    bu(Ns)
            }
            function bu(e) {
                var t = Es(e.alternate, e, As);
                e.memoizedProps = e.pendingProps,
                null === t ? wu(e) : Ns = t,
                Ps.current = null
            }
            function wu(e) {
                var t = e;
                do {
                    var n = t.alternate;
                    if (e = t.return,
                    0 === (32768 & t.flags)) {
                        if (null !== (n = Gl(n, t, As)))
                            return void (Ns = n)
                    } else {
                        if (null !== (n = $l(n, t)))
                            return n.flags &= 32767,
                            void (Ns = n);
                        if (null === e)
                            return Is = 6,
                            void (Ns = null);
                        e.flags |= 32768,
                        e.subtreeFlags = 0,
                        e.deletions = null
                    }
                    if (null !== (t = t.sibling))
                        return void (Ns = t);
                    Ns = t = e
                } while (null !== t);
                0 === Is && (Is = 5)
            }
            function _u(e, t, n) {
                var r = bt
                  , o = Ts.transition;
                try {
                    Ts.transition = null,
                    bt = 1,
                    function(e, t, n, r) {
                        do {
                            Su()
                        } while (null !== $s);
                        if (0 !== (6 & xs))
                            throw Error(a(327));
                        n = e.finishedWork;
                        var o = e.finishedLanes;
                        if (null === n)
                            return null;
                        if (e.finishedWork = null,
                        e.finishedLanes = 0,
                        n === e.current)
                            throw Error(a(177));
                        e.callbackNode = null,
                        e.callbackPriority = 0;
                        var i = n.lanes | n.childLanes;
                        if (function(e, t) {
                            var n = e.pendingLanes & ~t;
                            e.pendingLanes = t,
                            e.suspendedLanes = 0,
                            e.pingedLanes = 0,
                            e.expiredLanes &= t,
                            e.mutableReadLanes &= t,
                            e.entangledLanes &= t,
                            t = e.entanglements;
                            var r = e.eventTimes;
                            for (e = e.expirationTimes; 0 < n; ) {
                                var o = 31 - it(n)
                                  , a = 1 << o;
                                t[o] = 0,
                                r[o] = -1,
                                e[o] = -1,
                                n &= ~a
                            }
                        }(e, i),
                        e === Rs && (Ns = Rs = null,
                        Os = 0),
                        0 === (2064 & n.subtreeFlags) && 0 === (2064 & n.flags) || Gs || (Gs = !0,
                        Ru(tt, (function() {
                            return Su(),
                            null
                        }
                        ))),
                        i = 0 !== (15990 & n.flags),
                        0 !== (15990 & n.subtreeFlags) || i) {
                            i = Ts.transition,
                            Ts.transition = null;
                            var l = bt;
                            bt = 1;
                            var s = xs;
                            xs |= 4,
                            Ps.current = null,
                            function(e, t) {
                                if (eo = Vt,
                                pr(e = fr())) {
                                    if ("selectionStart"in e)
                                        var n = {
                                            start: e.selectionStart,
                                            end: e.selectionEnd
                                        };
                                    else
                                        e: {
                                            var r = (n = (n = e.ownerDocument) && n.defaultView || window).getSelection && n.getSelection();
                                            if (r && 0 !== r.rangeCount) {
                                                n = r.anchorNode;
                                                var o = r.anchorOffset
                                                  , i = r.focusNode;
                                                r = r.focusOffset;
                                                try {
                                                    n.nodeType,
                                                    i.nodeType
                                                } catch (_) {
                                                    n = null;
                                                    break e
                                                }
                                                var l = 0
                                                  , s = -1
                                                  , u = -1
                                                  , c = 0
                                                  , d = 0
                                                  , f = e
                                                  , p = null;
                                                t: for (; ; ) {
                                                    for (var h; f !== n || 0 !== o && 3 !== f.nodeType || (s = l + o),
                                                    f !== i || 0 !== r && 3 !== f.nodeType || (u = l + r),
                                                    3 === f.nodeType && (l += f.nodeValue.length),
                                                    null !== (h = f.firstChild); )
                                                        p = f,
                                                        f = h;
                                                    for (; ; ) {
                                                        if (f === e)
                                                            break t;
                                                        if (p === n && ++c === o && (s = l),
                                                        p === i && ++d === r && (u = l),
                                                        null !== (h = f.nextSibling))
                                                            break;
                                                        p = (f = p).parentNode
                                                    }
                                                    f = h
                                                }
                                                n = -1 === s || -1 === u ? null : {
                                                    start: s,
                                                    end: u
                                                }
                                            } else
                                                n = null
                                        }
                                    n = n || {
                                        start: 0,
                                        end: 0
                                    }
                                } else
                                    n = null;
                                for (to = {
                                    focusedElem: e,
                                    selectionRange: n
                                },
                                Vt = !1,
                                Zl = t; null !== Zl; )
                                    if (e = (t = Zl).child,
                                    0 !== (1028 & t.subtreeFlags) && null !== e)
                                        e.return = t,
                                        Zl = e;
                                    else
                                        for (; null !== Zl; ) {
                                            t = Zl;
                                            try {
                                                var m = t.alternate;
                                                if (0 !== (1024 & t.flags))
                                                    switch (t.tag) {
                                                    case 0:
                                                    case 11:
                                                    case 15:
                                                    case 5:
                                                    case 6:
                                                    case 4:
                                                    case 17:
                                                        break;
                                                    case 1:
                                                        if (null !== m) {
                                                            var y = m.memoizedProps
                                                              , g = m.memoizedState
                                                              , v = t.stateNode
                                                              , b = v.getSnapshotBeforeUpdate(t.elementType === t.type ? y : nl(t.type, y), g);
                                                            v.__reactInternalSnapshotBeforeUpdate = b
                                                        }
                                                        break;
                                                    case 3:
                                                        var w = t.stateNode.containerInfo;
                                                        1 === w.nodeType ? w.textContent = "" : 9 === w.nodeType && w.documentElement && w.removeChild(w.documentElement);
                                                        break;
                                                    default:
                                                        throw Error(a(163))
                                                    }
                                            } catch (_) {
                                                ku(t, t.return, _)
                                            }
                                            if (null !== (e = t.sibling)) {
                                                e.return = t.return,
                                                Zl = e;
                                                break
                                            }
                                            Zl = t.return
                                        }
                                m = ts,
                                ts = !1
                            }(e, n),
                            ys(n, e),
                            hr(to),
                            Vt = !!eo,
                            to = eo = null,
                            e.current = n,
                            vs(n, e, o),
                            Xe(),
                            xs = s,
                            bt = l,
                            Ts.transition = i
                        } else
                            e.current = n;
                        if (Gs && (Gs = !1,
                        $s = e,
                        Qs = o),
                        i = e.pendingLanes,
                        0 === i && (Ks = null),
                        function(e) {
                            if (at && "function" === typeof at.onCommitFiberRoot)
                                try {
                                    at.onCommitFiberRoot(ot, e, void 0, 128 === (128 & e.current.flags))
                                } catch (t) {}
                        }(n.stateNode),
                        ru(e, Ye()),
                        null !== t)
                            for (r = e.onRecoverableError,
                            n = 0; n < t.length; n++)
                                o = t[n],
                                r(o.value, {
                                    componentStack: o.stack,
                                    digest: o.digest
                                });
                        if (Vs)
                            throw Vs = !1,
                            e = Ws,
                            Ws = null,
                            e;
                        0 !== (1 & Qs) && 0 !== e.tag && Su(),
                        i = e.pendingLanes,
                        0 !== (1 & i) ? e === Ys ? Xs++ : (Xs = 0,
                        Ys = e) : Xs = 0,
                        Bo()
                    }(e, t, n, r)
                } finally {
                    Ts.transition = o,
                    bt = r
                }
                return null
            }
            function Su() {
                if (null !== $s) {
                    var e = wt(Qs)
                      , t = Ts.transition
                      , n = bt;
                    try {
                        if (Ts.transition = null,
                        bt = 16 > e ? 16 : e,
                        null === $s)
                            var r = !1;
                        else {
                            if (e = $s,
                            $s = null,
                            Qs = 0,
                            0 !== (6 & xs))
                                throw Error(a(331));
                            var o = xs;
                            for (xs |= 4,
                            Zl = e.current; null !== Zl; ) {
                                var i = Zl
                                  , l = i.child;
                                if (0 !== (16 & Zl.flags)) {
                                    var s = i.deletions;
                                    if (null !== s) {
                                        for (var u = 0; u < s.length; u++) {
                                            var c = s[u];
                                            for (Zl = c; null !== Zl; ) {
                                                var d = Zl;
                                                switch (d.tag) {
                                                case 0:
                                                case 11:
                                                case 15:
                                                    ns(8, d, i)
                                                }
                                                var f = d.child;
                                                if (null !== f)
                                                    f.return = d,
                                                    Zl = f;
                                                else
                                                    for (; null !== Zl; ) {
                                                        var p = (d = Zl).sibling
                                                          , h = d.return;
                                                        if (as(d),
                                                        d === c) {
                                                            Zl = null;
                                                            break
                                                        }
                                                        if (null !== p) {
                                                            p.return = h,
                                                            Zl = p;
                                                            break
                                                        }
                                                        Zl = h
                                                    }
                                            }
                                        }
                                        var m = i.alternate;
                                        if (null !== m) {
                                            var y = m.child;
                                            if (null !== y) {
                                                m.child = null;
                                                do {
                                                    var g = y.sibling;
                                                    y.sibling = null,
                                                    y = g
                                                } while (null !== y)
                                            }
                                        }
                                        Zl = i
                                    }
                                }
                                if (0 !== (2064 & i.subtreeFlags) && null !== l)
                                    l.return = i,
                                    Zl = l;
                                else
                                    e: for (; null !== Zl; ) {
                                        if (0 !== (2048 & (i = Zl).flags))
                                            switch (i.tag) {
                                            case 0:
                                            case 11:
                                            case 15:
                                                ns(9, i, i.return)
                                            }
                                        var v = i.sibling;
                                        if (null !== v) {
                                            v.return = i.return,
                                            Zl = v;
                                            break e
                                        }
                                        Zl = i.return
                                    }
                            }
                            var b = e.current;
                            for (Zl = b; null !== Zl; ) {
                                var w = (l = Zl).child;
                                if (0 !== (2064 & l.subtreeFlags) && null !== w)
                                    w.return = l,
                                    Zl = w;
                                else
                                    e: for (l = b; null !== Zl; ) {
                                        if (0 !== (2048 & (s = Zl).flags))
                                            try {
                                                switch (s.tag) {
                                                case 0:
                                                case 11:
                                                case 15:
                                                    rs(9, s)
                                                }
                                            } catch (S) {
                                                ku(s, s.return, S)
                                            }
                                        if (s === l) {
                                            Zl = null;
                                            break e
                                        }
                                        var _ = s.sibling;
                                        if (null !== _) {
                                            _.return = s.return,
                                            Zl = _;
                                            break e
                                        }
                                        Zl = s.return
                                    }
                            }
                            if (xs = o,
                            Bo(),
                            at && "function" === typeof at.onPostCommitFiberRoot)
                                try {
                                    at.onPostCommitFiberRoot(ot, e)
                                } catch (S) {}
                            r = !0
                        }
                        return r
                    } finally {
                        bt = n,
                        Ts.transition = t
                    }
                }
                return !1
            }
            function Eu(e, t, n) {
                e = za(e, t = pl(0, t = ul(n, t), 1), 1),
                t = eu(),
                null !== e && (gt(e, 1, t),
                ru(e, t))
            }
            function ku(e, t, n) {
                if (3 === e.tag)
                    Eu(e, e, n);
                else
                    for (; null !== t; ) {
                        if (3 === t.tag) {
                            Eu(t, e, n);
                            break
                        }
                        if (1 === t.tag) {
                            var r = t.stateNode;
                            if ("function" === typeof t.type.getDerivedStateFromError || "function" === typeof r.componentDidCatch && (null === Ks || !Ks.has(r))) {
                                t = za(t, e = hl(t, e = ul(n, e), 1), 1),
                                e = eu(),
                                null !== t && (gt(t, 1, e),
                                ru(t, e));
                                break
                            }
                        }
                        t = t.return
                    }
            }
            function Cu(e, t, n) {
                var r = e.pingCache;
                null !== r && r.delete(t),
                t = eu(),
                e.pingedLanes |= e.suspendedLanes & n,
                Rs === e && (Os & n) === n && (4 === Is || 3 === Is && (130023424 & Os) === Os && 500 > Ye() - qs ? fu(e, 0) : Hs |= n),
                ru(e, t)
            }
            function Pu(e, t) {
                0 === t && (0 === (1 & e.mode) ? t = 1 : (t = ct,
                0 === (130023424 & (ct <<= 1)) && (ct = 4194304)));
                var n = eu();
                null !== (e = La(e, t)) && (gt(e, t, n),
                ru(e, n))
            }
            function Tu(e) {
                var t = e.memoizedState
                  , n = 0;
                null !== t && (n = t.retryLane),
                Pu(e, n)
            }
            function xu(e, t) {
                var n = 0;
                switch (e.tag) {
                case 13:
                    var r = e.stateNode
                      , o = e.memoizedState;
                    null !== o && (n = o.retryLane);
                    break;
                case 19:
                    r = e.stateNode;
                    break;
                default:
                    throw Error(a(314))
                }
                null !== r && r.delete(t),
                Pu(e, n)
            }
            function Ru(e, t) {
                return Ge(e, t)
            }
            function Nu(e, t, n, r) {
                this.tag = e,
                this.key = n,
                this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
                this.index = 0,
                this.ref = null,
                this.pendingProps = t,
                this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
                this.mode = r,
                this.subtreeFlags = this.flags = 0,
                this.deletions = null,
                this.childLanes = this.lanes = 0,
                this.alternate = null
            }
            function Ou(e, t, n, r) {
                return new Nu(e,t,n,r)
            }
            function Au(e) {
                return !(!(e = e.prototype) || !e.isReactComponent)
            }
            function Du(e, t) {
                var n = e.alternate;
                return null === n ? ((n = Ou(e.tag, t, e.key, e.mode)).elementType = e.elementType,
                n.type = e.type,
                n.stateNode = e.stateNode,
                n.alternate = e,
                e.alternate = n) : (n.pendingProps = t,
                n.type = e.type,
                n.flags = 0,
                n.subtreeFlags = 0,
                n.deletions = null),
                n.flags = 14680064 & e.flags,
                n.childLanes = e.childLanes,
                n.lanes = e.lanes,
                n.child = e.child,
                n.memoizedProps = e.memoizedProps,
                n.memoizedState = e.memoizedState,
                n.updateQueue = e.updateQueue,
                t = e.dependencies,
                n.dependencies = null === t ? null : {
                    lanes: t.lanes,
                    firstContext: t.firstContext
                },
                n.sibling = e.sibling,
                n.index = e.index,
                n.ref = e.ref,
                n
            }
            function Iu(e, t, n, r, o, i) {
                var l = 2;
                if (r = e,
                "function" === typeof e)
                    Au(e) && (l = 1);
                else if ("string" === typeof e)
                    l = 5;
                else
                    e: switch (e) {
                    case E:
                        return Lu(n.children, o, i, t);
                    case k:
                        l = 8,
                        o |= 8;
                        break;
                    case C:
                        return (e = Ou(12, n, t, 2 | o)).elementType = C,
                        e.lanes = i,
                        e;
                    case R:
                        return (e = Ou(13, n, t, o)).elementType = R,
                        e.lanes = i,
                        e;
                    case N:
                        return (e = Ou(19, n, t, o)).elementType = N,
                        e.lanes = i,
                        e;
                    case D:
                        return Mu(n, o, i, t);
                    default:
                        if ("object" === typeof e && null !== e)
                            switch (e.$$typeof) {
                            case P:
                                l = 10;
                                break e;
                            case T:
                                l = 9;
                                break e;
                            case x:
                                l = 11;
                                break e;
                            case O:
                                l = 14;
                                break e;
                            case A:
                                l = 16,
                                r = null;
                                break e
                            }
                        throw Error(a(130, null == e ? e : typeof e, ""))
                    }
                return (t = Ou(l, n, t, o)).elementType = e,
                t.type = r,
                t.lanes = i,
                t
            }
            function Lu(e, t, n, r) {
                return (e = Ou(7, e, r, t)).lanes = n,
                e
            }
            function Mu(e, t, n, r) {
                return (e = Ou(22, e, r, t)).elementType = D,
                e.lanes = n,
                e.stateNode = {
                    isHidden: !1
                },
                e
            }
            function Uu(e, t, n) {
                return (e = Ou(6, e, null, t)).lanes = n,
                e
            }
            function Hu(e, t, n) {
                return (t = Ou(4, null !== e.children ? e.children : [], e.key, t)).lanes = n,
                t.stateNode = {
                    containerInfo: e.containerInfo,
                    pendingChildren: null,
                    implementation: e.implementation
                },
                t
            }
            function ju(e, t, n, r, o) {
                this.tag = t,
                this.containerInfo = e,
                this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
                this.timeoutHandle = -1,
                this.callbackNode = this.pendingContext = this.context = null,
                this.callbackPriority = 0,
                this.eventTimes = yt(0),
                this.expirationTimes = yt(-1),
                this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
                this.entanglements = yt(0),
                this.identifierPrefix = r,
                this.onRecoverableError = o,
                this.mutableSourceEagerHydrationData = null
            }
            function zu(e, t, n, r, o, a, i, l, s) {
                return e = new ju(e,t,n,l,s),
                1 === t ? (t = 1,
                !0 === a && (t |= 8)) : t = 0,
                a = Ou(3, null, null, t),
                e.current = a,
                a.stateNode = e,
                a.memoizedState = {
                    element: r,
                    isDehydrated: n,
                    cache: null,
                    transitions: null,
                    pendingSuspenseBoundaries: null
                },
                Ua(a),
                e
            }
            function qu(e) {
                if (!e)
                    return xo;
                e: {
                    if (Fe(e = e._reactInternals) !== e || 1 !== e.tag)
                        throw Error(a(170));
                    var t = e;
                    do {
                        switch (t.tag) {
                        case 3:
                            t = t.stateNode.context;
                            break e;
                        case 1:
                            if (Do(t.type)) {
                                t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                                break e
                            }
                        }
                        t = t.return
                    } while (null !== t);
                    throw Error(a(171))
                }
                if (1 === e.tag) {
                    var n = e.type;
                    if (Do(n))
                        return Mo(e, n, t)
                }
                return t
            }
            function Fu(e, t, n, r, o, a, i, l, s) {
                return (e = zu(n, r, !0, e, 0, a, 0, l, s)).context = qu(null),
                n = e.current,
                (a = ja(r = eu(), o = tu(n))).callback = void 0 !== t && null !== t ? t : null,
                za(n, a, o),
                e.current.lanes = o,
                gt(e, o, r),
                ru(e, r),
                e
            }
            function Bu(e, t, n, r) {
                var o = t.current
                  , a = eu()
                  , i = tu(o);
                return n = qu(n),
                null === t.context ? t.context = n : t.pendingContext = n,
                (t = ja(a, i)).payload = {
                    element: e
                },
                null !== (r = void 0 === r ? null : r) && (t.callback = r),
                null !== (e = za(o, t, i)) && (nu(e, o, i, a),
                qa(e, o, i)),
                i
            }
            function Vu(e) {
                return (e = e.current).child ? (e.child.tag,
                e.child.stateNode) : null
            }
            function Wu(e, t) {
                if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
                    var n = e.retryLane;
                    e.retryLane = 0 !== n && n < t ? n : t
                }
            }
            function Ku(e, t) {
                Wu(e, t),
                (e = e.alternate) && Wu(e, t)
            }
            Es = function(e, t, n) {
                if (null !== e)
                    if (e.memoizedProps !== t.pendingProps || No.current)
                        bl = !0;
                    else {
                        if (0 === (e.lanes & n) && 0 === (128 & t.flags))
                            return bl = !1,
                            function(e, t, n) {
                                switch (t.tag) {
                                case 3:
                                    Rl(t),
                                    ha();
                                    break;
                                case 5:
                                    Za(t);
                                    break;
                                case 1:
                                    Do(t.type) && Uo(t);
                                    break;
                                case 4:
                                    Xa(t, t.stateNode.containerInfo);
                                    break;
                                case 10:
                                    var r = t.type._context
                                      , o = t.memoizedProps.value;
                                    To(Ea, r._currentValue),
                                    r._currentValue = o;
                                    break;
                                case 13:
                                    if (null !== (r = t.memoizedState))
                                        return null !== r.dehydrated ? (To(ei, 1 & ei.current),
                                        t.flags |= 128,
                                        null) : 0 !== (n & t.child.childLanes) ? Ul(e, t, n) : (To(ei, 1 & ei.current),
                                        null !== (e = Vl(e, t, n)) ? e.sibling : null);
                                    To(ei, 1 & ei.current);
                                    break;
                                case 19:
                                    if (r = 0 !== (n & t.childLanes),
                                    0 !== (128 & e.flags)) {
                                        if (r)
                                            return Fl(e, t, n);
                                        t.flags |= 128
                                    }
                                    if (null !== (o = t.memoizedState) && (o.rendering = null,
                                    o.tail = null,
                                    o.lastEffect = null),
                                    To(ei, ei.current),
                                    r)
                                        break;
                                    return null;
                                case 22:
                                case 23:
                                    return t.lanes = 0,
                                    kl(e, t, n)
                                }
                                return Vl(e, t, n)
                            }(e, t, n);
                        bl = 0 !== (131072 & e.flags)
                    }
                else
                    bl = !1,
                    aa && 0 !== (1048576 & t.flags) && ea(t, Go, t.index);
                switch (t.lanes = 0,
                t.tag) {
                case 2:
                    var r = t.type;
                    Bl(e, t),
                    e = t.pendingProps;
                    var o = Ao(t, Ro.current);
                    Na(t, n),
                    o = yi(null, t, r, e, o, n);
                    var i = gi();
                    return t.flags |= 1,
                    "object" === typeof o && null !== o && "function" === typeof o.render && void 0 === o.$$typeof ? (t.tag = 1,
                    t.memoizedState = null,
                    t.updateQueue = null,
                    Do(r) ? (i = !0,
                    Uo(t)) : i = !1,
                    t.memoizedState = null !== o.state && void 0 !== o.state ? o.state : null,
                    Ua(t),
                    o.updater = ol,
                    t.stateNode = o,
                    o._reactInternals = t,
                    sl(t, r, e, n),
                    t = xl(null, t, r, !0, i, n)) : (t.tag = 0,
                    aa && i && ta(t),
                    wl(null, t, o, n),
                    t = t.child),
                    t;
                case 16:
                    r = t.elementType;
                    e: {
                        switch (Bl(e, t),
                        e = t.pendingProps,
                        r = (o = r._init)(r._payload),
                        t.type = r,
                        o = t.tag = function(e) {
                            if ("function" === typeof e)
                                return Au(e) ? 1 : 0;
                            if (void 0 !== e && null !== e) {
                                if ((e = e.$$typeof) === x)
                                    return 11;
                                if (e === O)
                                    return 14
                            }
                            return 2
                        }(r),
                        e = nl(r, e),
                        o) {
                        case 0:
                            t = Pl(null, t, r, e, n);
                            break e;
                        case 1:
                            t = Tl(null, t, r, e, n);
                            break e;
                        case 11:
                            t = _l(null, t, r, e, n);
                            break e;
                        case 14:
                            t = Sl(null, t, r, nl(r.type, e), n);
                            break e
                        }
                        throw Error(a(306, r, ""))
                    }
                    return t;
                case 0:
                    return r = t.type,
                    o = t.pendingProps,
                    Pl(e, t, r, o = t.elementType === r ? o : nl(r, o), n);
                case 1:
                    return r = t.type,
                    o = t.pendingProps,
                    Tl(e, t, r, o = t.elementType === r ? o : nl(r, o), n);
                case 3:
                    e: {
                        if (Rl(t),
                        null === e)
                            throw Error(a(387));
                        r = t.pendingProps,
                        o = (i = t.memoizedState).element,
                        Ha(e, t),
                        Ba(t, r, null, n);
                        var l = t.memoizedState;
                        if (r = l.element,
                        i.isDehydrated) {
                            if (i = {
                                element: r,
                                isDehydrated: !1,
                                cache: l.cache,
                                pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
                                transitions: l.transitions
                            },
                            t.updateQueue.baseState = i,
                            t.memoizedState = i,
                            256 & t.flags) {
                                t = Nl(e, t, r, n, o = ul(Error(a(423)), t));
                                break e
                            }
                            if (r !== o) {
                                t = Nl(e, t, r, n, o = ul(Error(a(424)), t));
                                break e
                            }
                            for (oa = uo(t.stateNode.containerInfo.firstChild),
                            ra = t,
                            aa = !0,
                            ia = null,
                            n = Sa(t, null, r, n),
                            t.child = n; n; )
                                n.flags = -3 & n.flags | 4096,
                                n = n.sibling
                        } else {
                            if (ha(),
                            r === o) {
                                t = Vl(e, t, n);
                                break e
                            }
                            wl(e, t, r, n)
                        }
                        t = t.child
                    }
                    return t;
                case 5:
                    return Za(t),
                    null === e && ca(t),
                    r = t.type,
                    o = t.pendingProps,
                    i = null !== e ? e.memoizedProps : null,
                    l = o.children,
                    no(r, o) ? l = null : null !== i && no(r, i) && (t.flags |= 32),
                    Cl(e, t),
                    wl(e, t, l, n),
                    t.child;
                case 6:
                    return null === e && ca(t),
                    null;
                case 13:
                    return Ul(e, t, n);
                case 4:
                    return Xa(t, t.stateNode.containerInfo),
                    r = t.pendingProps,
                    null === e ? t.child = _a(t, null, r, n) : wl(e, t, r, n),
                    t.child;
                case 11:
                    return r = t.type,
                    o = t.pendingProps,
                    _l(e, t, r, o = t.elementType === r ? o : nl(r, o), n);
                case 7:
                    return wl(e, t, t.pendingProps, n),
                    t.child;
                case 8:
                case 12:
                    return wl(e, t, t.pendingProps.children, n),
                    t.child;
                case 10:
                    e: {
                        if (r = t.type._context,
                        o = t.pendingProps,
                        i = t.memoizedProps,
                        l = o.value,
                        To(Ea, r._currentValue),
                        r._currentValue = l,
                        null !== i)
                            if (lr(i.value, l)) {
                                if (i.children === o.children && !No.current) {
                                    t = Vl(e, t, n);
                                    break e
                                }
                            } else
                                for (null !== (i = t.child) && (i.return = t); null !== i; ) {
                                    var s = i.dependencies;
                                    if (null !== s) {
                                        l = i.child;
                                        for (var u = s.firstContext; null !== u; ) {
                                            if (u.context === r) {
                                                if (1 === i.tag) {
                                                    (u = ja(-1, n & -n)).tag = 2;
                                                    var c = i.updateQueue;
                                                    if (null !== c) {
                                                        var d = (c = c.shared).pending;
                                                        null === d ? u.next = u : (u.next = d.next,
                                                        d.next = u),
                                                        c.pending = u
                                                    }
                                                }
                                                i.lanes |= n,
                                                null !== (u = i.alternate) && (u.lanes |= n),
                                                Ra(i.return, n, t),
                                                s.lanes |= n;
                                                break
                                            }
                                            u = u.next
                                        }
                                    } else if (10 === i.tag)
                                        l = i.type === t.type ? null : i.child;
                                    else if (18 === i.tag) {
                                        if (null === (l = i.return))
                                            throw Error(a(341));
                                        l.lanes |= n,
                                        null !== (s = l.alternate) && (s.lanes |= n),
                                        Ra(l, n, t),
                                        l = i.sibling
                                    } else
                                        l = i.child;
                                    if (null !== l)
                                        l.return = i;
                                    else
                                        for (l = i; null !== l; ) {
                                            if (l === t) {
                                                l = null;
                                                break
                                            }
                                            if (null !== (i = l.sibling)) {
                                                i.return = l.return,
                                                l = i;
                                                break
                                            }
                                            l = l.return
                                        }
                                    i = l
                                }
                        wl(e, t, o.children, n),
                        t = t.child
                    }
                    return t;
                case 9:
                    return o = t.type,
                    r = t.pendingProps.children,
                    Na(t, n),
                    r = r(o = Oa(o)),
                    t.flags |= 1,
                    wl(e, t, r, n),
                    t.child;
                case 14:
                    return o = nl(r = t.type, t.pendingProps),
                    Sl(e, t, r, o = nl(r.type, o), n);
                case 15:
                    return El(e, t, t.type, t.pendingProps, n);
                case 17:
                    return r = t.type,
                    o = t.pendingProps,
                    o = t.elementType === r ? o : nl(r, o),
                    Bl(e, t),
                    t.tag = 1,
                    Do(r) ? (e = !0,
                    Uo(t)) : e = !1,
                    Na(t, n),
                    il(t, r, o),
                    sl(t, r, o, n),
                    xl(null, t, r, !0, e, n);
                case 19:
                    return Fl(e, t, n);
                case 22:
                    return kl(e, t, n)
                }
                throw Error(a(156, t.tag))
            }
            ;
            var Gu = "function" === typeof reportError ? reportError : function(e) {
                console.error(e)
            }
            ;
            function $u(e) {
                this._internalRoot = e
            }
            function Qu(e) {
                this._internalRoot = e
            }
            function Xu(e) {
                return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
            }
            function Yu(e) {
                return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType && (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue))
            }
            function Zu() {}
            function Ju(e, t, n, r, o) {
                var a = n._reactRootContainer;
                if (a) {
                    var i = a;
                    if ("function" === typeof o) {
                        var l = o;
                        o = function() {
                            var e = Vu(i);
                            l.call(e)
                        }
                    }
                    Bu(t, i, e, o)
                } else
                    i = function(e, t, n, r, o) {
                        if (o) {
                            if ("function" === typeof r) {
                                var a = r;
                                r = function() {
                                    var e = Vu(i);
                                    a.call(e)
                                }
                            }
                            var i = Fu(t, r, e, 0, null, !1, 0, "", Zu);
                            return e._reactRootContainer = i,
                            e[mo] = i.current,
                            Fr(8 === e.nodeType ? e.parentNode : e),
                            cu(),
                            i
                        }
                        for (; o = e.lastChild; )
                            e.removeChild(o);
                        if ("function" === typeof r) {
                            var l = r;
                            r = function() {
                                var e = Vu(s);
                                l.call(e)
                            }
                        }
                        var s = zu(e, 0, !1, null, 0, !1, 0, "", Zu);
                        return e._reactRootContainer = s,
                        e[mo] = s.current,
                        Fr(8 === e.nodeType ? e.parentNode : e),
                        cu((function() {
                            Bu(t, s, n, r)
                        }
                        )),
                        s
                    }(n, t, e, o, r);
                return Vu(i)
            }
            Qu.prototype.render = $u.prototype.render = function(e) {
                var t = this._internalRoot;
                if (null === t)
                    throw Error(a(409));
                Bu(e, t, null, null)
            }
            ,
            Qu.prototype.unmount = $u.prototype.unmount = function() {
                var e = this._internalRoot;
                if (null !== e) {
                    this._internalRoot = null;
                    var t = e.containerInfo;
                    cu((function() {
                        Bu(null, e, null, null)
                    }
                    )),
                    t[mo] = null
                }
            }
            ,
            Qu.prototype.unstable_scheduleHydration = function(e) {
                if (e) {
                    var t = kt();
                    e = {
                        blockedOn: null,
                        target: e,
                        priority: t
                    };
                    for (var n = 0; n < Dt.length && 0 !== t && t < Dt[n].priority; n++)
                        ;
                    Dt.splice(n, 0, e),
                    0 === n && Ut(e)
                }
            }
            ,
            _t = function(e) {
                switch (e.tag) {
                case 3:
                    var t = e.stateNode;
                    if (t.current.memoizedState.isDehydrated) {
                        var n = dt(t.pendingLanes);
                        0 !== n && (vt(t, 1 | n),
                        ru(t, Ye()),
                        0 === (6 & xs) && (Fs = Ye() + 500,
                        Bo()))
                    }
                    break;
                case 13:
                    cu((function() {
                        var t = La(e, 1);
                        if (null !== t) {
                            var n = eu();
                            nu(t, e, 1, n)
                        }
                    }
                    )),
                    Ku(e, 1)
                }
            }
            ,
            St = function(e) {
                if (13 === e.tag) {
                    var t = La(e, 134217728);
                    if (null !== t)
                        nu(t, e, 134217728, eu());
                    Ku(e, 134217728)
                }
            }
            ,
            Et = function(e) {
                if (13 === e.tag) {
                    var t = tu(e)
                      , n = La(e, t);
                    if (null !== n)
                        nu(n, e, t, eu());
                    Ku(e, t)
                }
            }
            ,
            kt = function() {
                return bt
            }
            ,
            Ct = function(e, t) {
                var n = bt;
                try {
                    return bt = e,
                    t()
                } finally {
                    bt = n
                }
            }
            ,
            Se = function(e, t, n) {
                switch (t) {
                case "input":
                    if (Z(e, n),
                    t = n.name,
                    "radio" === n.type && null != t) {
                        for (n = e; n.parentNode; )
                            n = n.parentNode;
                        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
                        t = 0; t < n.length; t++) {
                            var r = n[t];
                            if (r !== e && r.form === e.form) {
                                var o = So(r);
                                if (!o)
                                    throw Error(a(90));
                                G(r),
                                Z(r, o)
                            }
                        }
                    }
                    break;
                case "textarea":
                    ae(e, n);
                    break;
                case "select":
                    null != (t = n.value) && ne(e, !!n.multiple, t, !1)
                }
            }
            ,
            xe = uu,
            Re = cu;
            var ec = {
                usingClientEntryPoint: !1,
                Events: [wo, _o, So, Pe, Te, uu]
            }
              , tc = {
                findFiberByHostInstance: bo,
                bundleType: 0,
                version: "18.3.1",
                rendererPackageName: "react-dom"
            }
              , nc = {
                bundleType: tc.bundleType,
                version: tc.version,
                rendererPackageName: tc.rendererPackageName,
                rendererConfig: tc.rendererConfig,
                overrideHookState: null,
                overrideHookStateDeletePath: null,
                overrideHookStateRenamePath: null,
                overrideProps: null,
                overridePropsDeletePath: null,
                overridePropsRenamePath: null,
                setErrorHandler: null,
                setSuspenseHandler: null,
                scheduleUpdate: null,
                currentDispatcherRef: w.ReactCurrentDispatcher,
                findHostInstanceByFiber: function(e) {
                    return null === (e = We(e)) ? null : e.stateNode
                },
                findFiberByHostInstance: tc.findFiberByHostInstance || function() {
                    return null
                }
                ,
                findHostInstancesForRefresh: null,
                scheduleRefresh: null,
                scheduleRoot: null,
                setRefreshHandler: null,
                getCurrentFiber: null,
                reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
            };
            if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
                var rc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
                if (!rc.isDisabled && rc.supportsFiber)
                    try {
                        ot = rc.inject(nc),
                        at = rc
                    } catch (ce) {}
            }
            t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ec,
            t.createPortal = function(e, t) {
                var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
                if (!Xu(t))
                    throw Error(a(200));
                return function(e, t, n) {
                    var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
                    return {
                        $$typeof: S,
                        key: null == r ? null : "" + r,
                        children: e,
                        containerInfo: t,
                        implementation: n
                    }
                }(e, t, null, n)
            }
            ,
            t.createRoot = function(e, t) {
                if (!Xu(e))
                    throw Error(a(299));
                var n = !1
                  , r = ""
                  , o = Gu;
                return null !== t && void 0 !== t && (!0 === t.unstable_strictMode && (n = !0),
                void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (o = t.onRecoverableError)),
                t = zu(e, 1, !1, null, 0, n, 0, r, o),
                e[mo] = t.current,
                Fr(8 === e.nodeType ? e.parentNode : e),
                new $u(t)
            }
            ,
            t.findDOMNode = function(e) {
                if (null == e)
                    return null;
                if (1 === e.nodeType)
                    return e;
                var t = e._reactInternals;
                if (void 0 === t) {
                    if ("function" === typeof e.render)
                        throw Error(a(188));
                    throw e = Object.keys(e).join(","),
                    Error(a(268, e))
                }
                return e = null === (e = We(t)) ? null : e.stateNode
            }
            ,
            t.flushSync = function(e) {
                return cu(e)
            }
            ,
            t.hydrate = function(e, t, n) {
                if (!Yu(t))
                    throw Error(a(200));
                return Ju(null, e, t, !0, n)
            }
            ,
            t.hydrateRoot = function(e, t, n) {
                if (!Xu(e))
                    throw Error(a(405));
                var r = null != n && n.hydratedSources || null
                  , o = !1
                  , i = ""
                  , l = Gu;
                if (null !== n && void 0 !== n && (!0 === n.unstable_strictMode && (o = !0),
                void 0 !== n.identifierPrefix && (i = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (l = n.onRecoverableError)),
                t = Fu(t, null, e, 1, null != n ? n : null, o, 0, i, l),
                e[mo] = t.current,
                Fr(e),
                r)
                    for (e = 0; e < r.length; e++)
                        o = (o = (n = r[e])._getVersion)(n._source),
                        null == t.mutableSourceEagerHydrationData ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(n, o);
                return new Qu(t)
            }
            ,
            t.render = function(e, t, n) {
                if (!Yu(t))
                    throw Error(a(200));
                return Ju(null, e, t, !1, n)
            }
            ,
            t.unmountComponentAtNode = function(e) {
                if (!Yu(e))
                    throw Error(a(40));
                return !!e._reactRootContainer && (cu((function() {
                    Ju(null, null, e, !1, (function() {
                        e._reactRootContainer = null,
                        e[mo] = null
                    }
                    ))
                }
                )),
                !0)
            }
            ,
            t.unstable_batchedUpdates = uu,
            t.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
                if (!Yu(n))
                    throw Error(a(200));
                if (null == e || void 0 === e._reactInternals)
                    throw Error(a(38));
                return Ju(e, t, n, !1, r)
            }
            ,
            t.version = "18.3.1-next-f1338f8080-20240426"
        }
        ,
        391: (e,t,n)=>{
            "use strict";
            var r = n(950);
            t.createRoot = r.createRoot,
            t.hydrateRoot = r.hydrateRoot
        }
        ,
        950: (e,t,n)=>{
            "use strict";
            !function e() {
                if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)
                    try {
                        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)
                    } catch (t) {
                        console.error(t)
                    }
            }(),
            e.exports = n(730)
        }
        ,
        153: (e,t,n)=>{
            "use strict";
            var r = n(43)
              , o = Symbol.for("react.element")
              , a = Symbol.for("react.fragment")
              , i = Object.prototype.hasOwnProperty
              , l = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
              , s = {
                key: !0,
                ref: !0,
                __self: !0,
                __source: !0
            };
            function u(e, t, n) {
                var r, a = {}, u = null, c = null;
                for (r in void 0 !== n && (u = "" + n),
                void 0 !== t.key && (u = "" + t.key),
                void 0 !== t.ref && (c = t.ref),
                t)
                    i.call(t, r) && !s.hasOwnProperty(r) && (a[r] = t[r]);
                if (e && e.defaultProps)
                    for (r in t = e.defaultProps)
                        void 0 === a[r] && (a[r] = t[r]);
                return {
                    $$typeof: o,
                    type: e,
                    key: u,
                    ref: c,
                    props: a,
                    _owner: l.current
                }
            }
            t.jsx = u,
            t.jsxs = u
        }
        ,
        202: (e,t)=>{
            "use strict";
            var n = Symbol.for("react.element")
              , r = Symbol.for("react.portal")
              , o = Symbol.for("react.fragment")
              , a = Symbol.for("react.strict_mode")
              , i = Symbol.for("react.profiler")
              , l = Symbol.for("react.provider")
              , s = Symbol.for("react.context")
              , u = Symbol.for("react.forward_ref")
              , c = Symbol.for("react.suspense")
              , d = Symbol.for("react.memo")
              , f = Symbol.for("react.lazy")
              , p = Symbol.iterator;
            var h = {
                isMounted: function() {
                    return !1
                },
                enqueueForceUpdate: function() {},
                enqueueReplaceState: function() {},
                enqueueSetState: function() {}
            }
              , m = Object.assign
              , y = {};
            function g(e, t, n) {
                this.props = e,
                this.context = t,
                this.refs = y,
                this.updater = n || h
            }
            function v() {}
            function b(e, t, n) {
                this.props = e,
                this.context = t,
                this.refs = y,
                this.updater = n || h
            }
            g.prototype.isReactComponent = {},
            g.prototype.setState = function(e, t) {
                if ("object" !== typeof e && "function" !== typeof e && null != e)
                    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
                this.updater.enqueueSetState(this, e, t, "setState")
            }
            ,
            g.prototype.forceUpdate = function(e) {
                this.updater.enqueueForceUpdate(this, e, "forceUpdate")
            }
            ,
            v.prototype = g.prototype;
            var w = b.prototype = new v;
            w.constructor = b,
            m(w, g.prototype),
            w.isPureReactComponent = !0;
            var _ = Array.isArray
              , S = Object.prototype.hasOwnProperty
              , E = {
                current: null
            }
              , k = {
                key: !0,
                ref: !0,
                __self: !0,
                __source: !0
            };
            function C(e, t, r) {
                var o, a = {}, i = null, l = null;
                if (null != t)
                    for (o in void 0 !== t.ref && (l = t.ref),
                    void 0 !== t.key && (i = "" + t.key),
                    t)
                        S.call(t, o) && !k.hasOwnProperty(o) && (a[o] = t[o]);
                var s = arguments.length - 2;
                if (1 === s)
                    a.children = r;
                else if (1 < s) {
                    for (var u = Array(s), c = 0; c < s; c++)
                        u[c] = arguments[c + 2];
                    a.children = u
                }
                if (e && e.defaultProps)
                    for (o in s = e.defaultProps)
                        void 0 === a[o] && (a[o] = s[o]);
                return {
                    $$typeof: n,
                    type: e,
                    key: i,
                    ref: l,
                    props: a,
                    _owner: E.current
                }
            }
            function P(e) {
                return "object" === typeof e && null !== e && e.$$typeof === n
            }
            var T = /\/+/g;
            function x(e, t) {
                return "object" === typeof e && null !== e && null != e.key ? function(e) {
                    var t = {
                        "=": "=0",
                        ":": "=2"
                    };
                    return "$" + e.replace(/[=:]/g, (function(e) {
                        return t[e]
                    }
                    ))
                }("" + e.key) : t.toString(36)
            }
            function R(e, t, o, a, i) {
                var l = typeof e;
                "undefined" !== l && "boolean" !== l || (e = null);
                var s = !1;
                if (null === e)
                    s = !0;
                else
                    switch (l) {
                    case "string":
                    case "number":
                        s = !0;
                        break;
                    case "object":
                        switch (e.$$typeof) {
                        case n:
                        case r:
                            s = !0
                        }
                    }
                if (s)
                    return i = i(s = e),
                    e = "" === a ? "." + x(s, 0) : a,
                    _(i) ? (o = "",
                    null != e && (o = e.replace(T, "$&/") + "/"),
                    R(i, t, o, "", (function(e) {
                        return e
                    }
                    ))) : null != i && (P(i) && (i = function(e, t) {
                        return {
                            $$typeof: n,
                            type: e.type,
                            key: t,
                            ref: e.ref,
                            props: e.props,
                            _owner: e._owner
                        }
                    }(i, o + (!i.key || s && s.key === i.key ? "" : ("" + i.key).replace(T, "$&/") + "/") + e)),
                    t.push(i)),
                    1;
                if (s = 0,
                a = "" === a ? "." : a + ":",
                _(e))
                    for (var u = 0; u < e.length; u++) {
                        var c = a + x(l = e[u], u);
                        s += R(l, t, o, c, i)
                    }
                else if (c = function(e) {
                    return null === e || "object" !== typeof e ? null : "function" === typeof (e = p && e[p] || e["@@iterator"]) ? e : null
                }(e),
                "function" === typeof c)
                    for (e = c.call(e),
                    u = 0; !(l = e.next()).done; )
                        s += R(l = l.value, t, o, c = a + x(l, u++), i);
                else if ("object" === l)
                    throw t = String(e),
                    Error("Objects are not valid as a React child (found: " + ("[object Object]" === t ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
                return s
            }
            function N(e, t, n) {
                if (null == e)
                    return e;
                var r = []
                  , o = 0;
                return R(e, r, "", "", (function(e) {
                    return t.call(n, e, o++)
                }
                )),
                r
            }
            function O(e) {
                if (-1 === e._status) {
                    var t = e._result;
                    (t = t()).then((function(t) {
                        0 !== e._status && -1 !== e._status || (e._status = 1,
                        e._result = t)
                    }
                    ), (function(t) {
                        0 !== e._status && -1 !== e._status || (e._status = 2,
                        e._result = t)
                    }
                    )),
                    -1 === e._status && (e._status = 0,
                    e._result = t)
                }
                if (1 === e._status)
                    return e._result.default;
                throw e._result
            }
            var A = {
                current: null
            }
              , D = {
                transition: null
            }
              , I = {
                ReactCurrentDispatcher: A,
                ReactCurrentBatchConfig: D,
                ReactCurrentOwner: E
            };
            function L() {
                throw Error("act(...) is not supported in production builds of React.")
            }
            t.Children = {
                map: N,
                forEach: function(e, t, n) {
                    N(e, (function() {
                        t.apply(this, arguments)
                    }
                    ), n)
                },
                count: function(e) {
                    var t = 0;
                    return N(e, (function() {
                        t++
                    }
                    )),
                    t
                },
                toArray: function(e) {
                    return N(e, (function(e) {
                        return e
                    }
                    )) || []
                },
                only: function(e) {
                    if (!P(e))
                        throw Error("React.Children.only expected to receive a single React element child.");
                    return e
                }
            },
            t.Component = g,
            t.Fragment = o,
            t.Profiler = i,
            t.PureComponent = b,
            t.StrictMode = a,
            t.Suspense = c,
            t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = I,
            t.act = L,
            t.cloneElement = function(e, t, r) {
                if (null === e || void 0 === e)
                    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
                var o = m({}, e.props)
                  , a = e.key
                  , i = e.ref
                  , l = e._owner;
                if (null != t) {
                    if (void 0 !== t.ref && (i = t.ref,
                    l = E.current),
                    void 0 !== t.key && (a = "" + t.key),
                    e.type && e.type.defaultProps)
                        var s = e.type.defaultProps;
                    for (u in t)
                        S.call(t, u) && !k.hasOwnProperty(u) && (o[u] = void 0 === t[u] && void 0 !== s ? s[u] : t[u])
                }
                var u = arguments.length - 2;
                if (1 === u)
                    o.children = r;
                else if (1 < u) {
                    s = Array(u);
                    for (var c = 0; c < u; c++)
                        s[c] = arguments[c + 2];
                    o.children = s
                }
                return {
                    $$typeof: n,
                    type: e.type,
                    key: a,
                    ref: i,
                    props: o,
                    _owner: l
                }
            }
            ,
            t.createContext = function(e) {
                return (e = {
                    $$typeof: s,
                    _currentValue: e,
                    _currentValue2: e,
                    _threadCount: 0,
                    Provider: null,
                    Consumer: null,
                    _defaultValue: null,
                    _globalName: null
                }).Provider = {
                    $$typeof: l,
                    _context: e
                },
                e.Consumer = e
            }
            ,
            t.createElement = C,
            t.createFactory = function(e) {
                var t = C.bind(null, e);
                return t.type = e,
                t
            }
            ,
            t.createRef = function() {
                return {
                    current: null
                }
            }
            ,
            t.forwardRef = function(e) {
                return {
                    $$typeof: u,
                    render: e
                }
            }
            ,
            t.isValidElement = P,
            t.lazy = function(e) {
                return {
                    $$typeof: f,
                    _payload: {
                        _status: -1,
                        _result: e
                    },
                    _init: O
                }
            }
            ,
            t.memo = function(e, t) {
                return {
                    $$typeof: d,
                    type: e,
                    compare: void 0 === t ? null : t
                }
            }
            ,
            t.startTransition = function(e) {
                var t = D.transition;
                D.transition = {};
                try {
                    e()
                } finally {
                    D.transition = t
                }
            }
            ,
            t.unstable_act = L,
            t.useCallback = function(e, t) {
                return A.current.useCallback(e, t)
            }
            ,
            t.useContext = function(e) {
                return A.current.useContext(e)
            }
            ,
            t.useDebugValue = function() {}
            ,
            t.useDeferredValue = function(e) {
                return A.current.useDeferredValue(e)
            }
            ,
            t.useEffect = function(e, t) {
                return A.current.useEffect(e, t)
            }
            ,
            t.useId = function() {
                return A.current.useId()
            }
            ,
            t.useImperativeHandle = function(e, t, n) {
                return A.current.useImperativeHandle(e, t, n)
            }
            ,
            t.useInsertionEffect = function(e, t) {
                return A.current.useInsertionEffect(e, t)
            }
            ,
            t.useLayoutEffect = function(e, t) {
                return A.current.useLayoutEffect(e, t)
            }
            ,
            t.useMemo = function(e, t) {
                return A.current.useMemo(e, t)
            }
            ,
            t.useReducer = function(e, t, n) {
                return A.current.useReducer(e, t, n)
            }
            ,
            t.useRef = function(e) {
                return A.current.useRef(e)
            }
            ,
            t.useState = function(e) {
                return A.current.useState(e)
            }
            ,
            t.useSyncExternalStore = function(e, t, n) {
                return A.current.useSyncExternalStore(e, t, n)
            }
            ,
            t.useTransition = function() {
                return A.current.useTransition()
            }
            ,
            t.version = "18.3.1"
        }
        ,
        43: (e,t,n)=>{
            "use strict";
            e.exports = n(202)
        }
        ,
        579: (e,t,n)=>{
            "use strict";
            e.exports = n(153)
        }
        ,
        234: (e,t)=>{
            "use strict";
            function n(e, t) {
                var n = e.length;
                e.push(t);
                e: for (; 0 < n; ) {
                    var r = n - 1 >>> 1
                      , o = e[r];
                    if (!(0 < a(o, t)))
                        break e;
                    e[r] = t,
                    e[n] = o,
                    n = r
                }
            }
            function r(e) {
                return 0 === e.length ? null : e[0]
            }
            function o(e) {
                if (0 === e.length)
                    return null;
                var t = e[0]
                  , n = e.pop();
                if (n !== t) {
                    e[0] = n;
                    e: for (var r = 0, o = e.length, i = o >>> 1; r < i; ) {
                        var l = 2 * (r + 1) - 1
                          , s = e[l]
                          , u = l + 1
                          , c = e[u];
                        if (0 > a(s, n))
                            u < o && 0 > a(c, s) ? (e[r] = c,
                            e[u] = n,
                            r = u) : (e[r] = s,
                            e[l] = n,
                            r = l);
                        else {
                            if (!(u < o && 0 > a(c, n)))
                                break e;
                            e[r] = c,
                            e[u] = n,
                            r = u
                        }
                    }
                }
                return t
            }
            function a(e, t) {
                var n = e.sortIndex - t.sortIndex;
                return 0 !== n ? n : e.id - t.id
            }
            if ("object" === typeof performance && "function" === typeof performance.now) {
                var i = performance;
                t.unstable_now = function() {
                    return i.now()
                }
            } else {
                var l = Date
                  , s = l.now();
                t.unstable_now = function() {
                    return l.now() - s
                }
            }
            var u = []
              , c = []
              , d = 1
              , f = null
              , p = 3
              , h = !1
              , m = !1
              , y = !1
              , g = "function" === typeof setTimeout ? setTimeout : null
              , v = "function" === typeof clearTimeout ? clearTimeout : null
              , b = "undefined" !== typeof setImmediate ? setImmediate : null;
            function w(e) {
                for (var t = r(c); null !== t; ) {
                    if (null === t.callback)
                        o(c);
                    else {
                        if (!(t.startTime <= e))
                            break;
                        o(c),
                        t.sortIndex = t.expirationTime,
                        n(u, t)
                    }
                    t = r(c)
                }
            }
            function _(e) {
                if (y = !1,
                w(e),
                !m)
                    if (null !== r(u))
                        m = !0,
                        D(S);
                    else {
                        var t = r(c);
                        null !== t && I(_, t.startTime - e)
                    }
            }
            function S(e, n) {
                m = !1,
                y && (y = !1,
                v(P),
                P = -1),
                h = !0;
                var a = p;
                try {
                    for (w(n),
                    f = r(u); null !== f && (!(f.expirationTime > n) || e && !R()); ) {
                        var i = f.callback;
                        if ("function" === typeof i) {
                            f.callback = null,
                            p = f.priorityLevel;
                            var l = i(f.expirationTime <= n);
                            n = t.unstable_now(),
                            "function" === typeof l ? f.callback = l : f === r(u) && o(u),
                            w(n)
                        } else
                            o(u);
                        f = r(u)
                    }
                    if (null !== f)
                        var s = !0;
                    else {
                        var d = r(c);
                        null !== d && I(_, d.startTime - n),
                        s = !1
                    }
                    return s
                } finally {
                    f = null,
                    p = a,
                    h = !1
                }
            }
            "undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
            var E, k = !1, C = null, P = -1, T = 5, x = -1;
            function R() {
                return !(t.unstable_now() - x < T)
            }
            function N() {
                if (null !== C) {
                    var e = t.unstable_now();
                    x = e;
                    var n = !0;
                    try {
                        n = C(!0, e)
                    } finally {
                        n ? E() : (k = !1,
                        C = null)
                    }
                } else
                    k = !1
            }
            if ("function" === typeof b)
                E = function() {
                    b(N)
                }
                ;
            else if ("undefined" !== typeof MessageChannel) {
                var O = new MessageChannel
                  , A = O.port2;
                O.port1.onmessage = N,
                E = function() {
                    A.postMessage(null)
                }
            } else
                E = function() {
                    g(N, 0)
                }
                ;
            function D(e) {
                C = e,
                k || (k = !0,
                E())
            }
            function I(e, n) {
                P = g((function() {
                    e(t.unstable_now())
                }
                ), n)
            }
            t.unstable_IdlePriority = 5,
            t.unstable_ImmediatePriority = 1,
            t.unstable_LowPriority = 4,
            t.unstable_NormalPriority = 3,
            t.unstable_Profiling = null,
            t.unstable_UserBlockingPriority = 2,
            t.unstable_cancelCallback = function(e) {
                e.callback = null
            }
            ,
            t.unstable_continueExecution = function() {
                m || h || (m = !0,
                D(S))
            }
            ,
            t.unstable_forceFrameRate = function(e) {
                0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : T = 0 < e ? Math.floor(1e3 / e) : 5
            }
            ,
            t.unstable_getCurrentPriorityLevel = function() {
                return p
            }
            ,
            t.unstable_getFirstCallbackNode = function() {
                return r(u)
            }
            ,
            t.unstable_next = function(e) {
                switch (p) {
                case 1:
                case 2:
                case 3:
                    var t = 3;
                    break;
                default:
                    t = p
                }
                var n = p;
                p = t;
                try {
                    return e()
                } finally {
                    p = n
                }
            }
            ,
            t.unstable_pauseExecution = function() {}
            ,
            t.unstable_requestPaint = function() {}
            ,
            t.unstable_runWithPriority = function(e, t) {
                switch (e) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    e = 3
                }
                var n = p;
                p = e;
                try {
                    return t()
                } finally {
                    p = n
                }
            }
            ,
            t.unstable_scheduleCallback = function(e, o, a) {
                var i = t.unstable_now();
                switch ("object" === typeof a && null !== a ? a = "number" === typeof (a = a.delay) && 0 < a ? i + a : i : a = i,
                e) {
                case 1:
                    var l = -1;
                    break;
                case 2:
                    l = 250;
                    break;
                case 5:
                    l = 1073741823;
                    break;
                case 4:
                    l = 1e4;
                    break;
                default:
                    l = 5e3
                }
                return e = {
                    id: d++,
                    callback: o,
                    priorityLevel: e,
                    startTime: a,
                    expirationTime: l = a + l,
                    sortIndex: -1
                },
                a > i ? (e.sortIndex = a,
                n(c, e),
                null === r(u) && e === r(c) && (y ? (v(P),
                P = -1) : y = !0,
                I(_, a - i))) : (e.sortIndex = l,
                n(u, e),
                m || h || (m = !0,
                D(S))),
                e
            }
            ,
            t.unstable_shouldYield = R,
            t.unstable_wrapCallback = function(e) {
                var t = p;
                return function() {
                    var n = p;
                    p = t;
                    try {
                        return e.apply(this, arguments)
                    } finally {
                        p = n
                    }
                }
            }
        }
        ,
        853: (e,t,n)=>{
            "use strict";
            e.exports = n(234)
        }
        ,
        756: e=>{
            e.exports = function(e, t, n) {
                if ("function" == typeof e ? e === t : e.has(t))
                    return arguments.length < 3 ? t : n;
                throw new TypeError("Private element is not present on this object")
            }
            ,
            e.exports.__esModule = !0,
            e.exports.default = e.exports
        }
        ,
        101: e=>{
            e.exports = function(e, t) {
                if (t.has(e))
                    throw new TypeError("Cannot initialize the same private elements twice on an object")
            }
            ,
            e.exports.__esModule = !0,
            e.exports.default = e.exports
        }
        ,
        668: (e,t,n)=>{
            var r = n(756);
            e.exports = function(e, t) {
                return e.get(r(e, t))
            }
            ,
            e.exports.__esModule = !0,
            e.exports.default = e.exports
        }
        ,
        459: (e,t,n)=>{
            var r = n(101);
            e.exports = function(e, t, n) {
                r(e, t),
                t.set(e, n)
            }
            ,
            e.exports.__esModule = !0,
            e.exports.default = e.exports
        }
        ,
        88: (e,t,n)=>{
            var r = n(756);
            e.exports = function(e, t, n) {
                return e.set(r(e, t), n),
                n
            }
            ,
            e.exports.__esModule = !0,
            e.exports.default = e.exports
        }
        ,
        312: (e,t,n)=>{
            var r = n(101);
            e.exports = function(e, t) {
                r(e, t),
                t.add(e)
            }
            ,
            e.exports.__esModule = !0,
            e.exports.default = e.exports
        }
        ,
        693: (e,t,n)=>{
            var r = n(736);
            e.exports = function(e, t, n) {
                return (t = r(t))in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n,
                e
            }
            ,
            e.exports.__esModule = !0,
            e.exports.default = e.exports
        }
        ,
        45: (e,t,n)=>{
            var r = n(738).default;
            e.exports = function(e, t) {
                if ("object" != r(e) || !e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var o = n.call(e, t || "default");
                    if ("object" != r(o))
                        return o;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }
            ,
            e.exports.__esModule = !0,
            e.exports.default = e.exports
        }
        ,
        736: (e,t,n)=>{
            var r = n(738).default
              , o = n(45);
            e.exports = function(e) {
                var t = o(e, "string");
                return "symbol" == r(t) ? t : t + ""
            }
            ,
            e.exports.__esModule = !0,
            e.exports.default = e.exports
        }
        ,
        738: e=>{
            function t(n) {
                return e.exports = t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                }
                : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                ,
                e.exports.__esModule = !0,
                e.exports.default = e.exports,
                t(n)
            }
            e.exports = t,
            e.exports.__esModule = !0,
            e.exports.default = e.exports
        }
    }
      , t = {};
    function n(r) {
        var o = t[r];
        if (void 0 !== o)
            return o.exports;
        var a = t[r] = {
            exports: {}
        };
        return e[r].call(a.exports, a, a.exports, n),
        a.exports
    }
    n.m = e,
    n.d = (e,t)=>{
        for (var r in t)
            n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, {
                enumerable: !0,
                get: t[r]
            })
    }
    ,
    n.f = {},
    n.e = e=>Promise.all(Object.keys(n.f).reduce(((t,r)=>(n.f[r](e, t),
    t)), [])),
    n.u = e=>"static/js/" + e + ".b9cbd4e3.chunk.js",
    n.miniCssF = e=>{}
    ,
    n.o = (e,t)=>Object.prototype.hasOwnProperty.call(e, t),
    (()=>{
        var e = {}
          , t = "video_scriptplayer:";
        n.l = (r,o,a,i)=>{
            if (e[r])
                e[r].push(o);
            else {
                var l, s;
                if (void 0 !== a)
                    for (var u = document.getElementsByTagName("script"), c = 0; c < u.length; c++) {
                        var d = u[c];
                        if (d.getAttribute("src") == r || d.getAttribute("data-webpack") == t + a) {
                            l = d;
                            break
                        }
                    }
                l || (s = !0,
                (l = document.createElement("script")).charset = "utf-8",
                l.timeout = 120,
                n.nc && l.setAttribute("nonce", n.nc),
                l.setAttribute("data-webpack", t + a),
                l.src = r),
                e[r] = [o];
                var f = (t,n)=>{
                    l.onerror = l.onload = null,
                    clearTimeout(p);
                    var o = e[r];
                    if (delete e[r],
                    l.parentNode && l.parentNode.removeChild(l),
                    o && o.forEach((e=>e(n))),
                    t)
                        return t(n)
                }
                  , p = setTimeout(f.bind(null, void 0, {
                    type: "timeout",
                    target: l
                }), 12e4);
                l.onerror = f.bind(null, l.onerror),
                l.onload = f.bind(null, l.onload),
                s && document.head.appendChild(l)
            }
        }
    }
    )(),
    n.r = e=>{
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    n.p = "/",
    (()=>{
        var e = {
            792: 0
        };
        n.f.j = (t,r)=>{
            var o = n.o(e, t) ? e[t] : void 0;
            if (0 !== o)
                if (o)
                    r.push(o[2]);
                else {
                    var a = new Promise(((n,r)=>o = e[t] = [n, r]));
                    r.push(o[2] = a);
                    var i = n.p + n.u(t)
                      , l = new Error;
                    n.l(i, (r=>{
                        if (n.o(e, t) && (0 !== (o = e[t]) && (e[t] = void 0),
                        o)) {
                            var a = r && ("load" === r.type ? "missing" : r.type)
                              , i = r && r.target && r.target.src;
                            l.message = "Loading chunk " + t + " failed.\n(" + a + ": " + i + ")",
                            l.name = "ChunkLoadError",
                            l.type = a,
                            l.request = i,
                            o[1](l)
                        }
                    }
                    ), "chunk-" + t, t)
                }
        }
        ;
        var t = (t,r)=>{
            var o, a, i = r[0], l = r[1], s = r[2], u = 0;
            if (i.some((t=>0 !== e[t]))) {
                for (o in l)
                    n.o(l, o) && (n.m[o] = l[o]);
                if (s)
                    s(n)
            }
            for (t && t(r); u < i.length; u++)
                a = i[u],
                n.o(e, a) && e[a] && e[a][0](),
                e[a] = 0
        }
          , r = self.webpackChunkvideo_scriptplayer = self.webpackChunkvideo_scriptplayer || [];
        r.forEach(t.bind(null, 0)),
        r.push = t.bind(null, r.push.bind(r))
    }
    )(),
    (()=>{
        "use strict";
        var e = {};
        n.r(e),
        n.d(e, {
            hasBrowserEnv: ()=>ue,
            hasStandardBrowserEnv: ()=>de,
            hasStandardBrowserWebWorkerEnv: ()=>fe,
            navigator: ()=>ce,
            origin: ()=>pe
        });
        var t = n(43)
          , r = n(391);
        function o(e, t) {
            return function() {
                return e.apply(t, arguments)
            }
        }
        const {toString: a} = Object.prototype
          , {getPrototypeOf: i} = Object
          , l = (s = Object.create(null),
        e=>{
            const t = a.call(e);
            return s[t] || (s[t] = t.slice(8, -1).toLowerCase())
        }
        );
        var s;
        const u = e=>(e = e.toLowerCase(),
        t=>l(t) === e)
          , c = e=>t=>typeof t === e
          , {isArray: d} = Array
          , f = c("undefined");
        const p = u("ArrayBuffer");
        const h = c("string")
          , m = c("function")
          , y = c("number")
          , g = e=>null !== e && "object" === typeof e
          , v = e=>{
            if ("object" !== l(e))
                return !1;
            const t = i(e);
            return (null === t || t === Object.prototype || null === Object.getPrototypeOf(t)) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e)
        }
          , b = u("Date")
          , w = u("File")
          , _ = u("Blob")
          , S = u("FileList")
          , E = u("URLSearchParams")
          , [k,C,P,T] = ["ReadableStream", "Request", "Response", "Headers"].map(u);
        function x(e, t) {
            let n, r, {allOwnKeys: o=!1} = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            if (null !== e && "undefined" !== typeof e)
                if ("object" !== typeof e && (e = [e]),
                d(e))
                    for (n = 0,
                    r = e.length; n < r; n++)
                        t.call(null, e[n], n, e);
                else {
                    const r = o ? Object.getOwnPropertyNames(e) : Object.keys(e)
                      , a = r.length;
                    let i;
                    for (n = 0; n < a; n++)
                        i = r[n],
                        t.call(null, e[i], i, e)
                }
        }
        function R(e, t) {
            t = t.toLowerCase();
            const n = Object.keys(e);
            let r, o = n.length;
            for (; o-- > 0; )
                if (r = n[o],
                t === r.toLowerCase())
                    return r;
            return null
        }
        const N = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : global
          , O = e=>!f(e) && e !== N;
        const A = (D = "undefined" !== typeof Uint8Array && i(Uint8Array),
        e=>D && e instanceof D);
        var D;
        const I = u("HTMLFormElement")
          , L = (e=>{
            let {hasOwnProperty: t} = e;
            return (e,n)=>t.call(e, n)
        }
        )(Object.prototype)
          , M = u("RegExp")
          , U = (e,t)=>{
            const n = Object.getOwnPropertyDescriptors(e)
              , r = {};
            x(n, ((n,o)=>{
                let a;
                !1 !== (a = t(n, o, e)) && (r[o] = a || n)
            }
            )),
            Object.defineProperties(e, r)
        }
          , H = "abcdefghijklmnopqrstuvwxyz"
          , j = "0123456789"
          , z = {
            DIGIT: j,
            ALPHA: H,
            ALPHA_DIGIT: H + H.toUpperCase() + j
        };
        const q = u("AsyncFunction")
          , F = ((e,t)=>{
            return e ? setImmediate : t ? (n = "axios@".concat(Math.random()),
            r = [],
            N.addEventListener("message", (e=>{
                let {source: t, data: o} = e;
                t === N && o === n && r.length && r.shift()()
            }
            ), !1),
            e=>{
                r.push(e),
                N.postMessage(n, "*")
            }
            ) : e=>setTimeout(e);
            var n, r
        }
        )("function" === typeof setImmediate, m(N.postMessage))
          , B = "undefined" !== typeof queueMicrotask ? queueMicrotask.bind(N) : "undefined" !== typeof process && process.nextTick || F
          , V = {
            isArray: d,
            isArrayBuffer: p,
            isBuffer: function(e) {
                return null !== e && !f(e) && null !== e.constructor && !f(e.constructor) && m(e.constructor.isBuffer) && e.constructor.isBuffer(e)
            },
            isFormData: e=>{
                let t;
                return e && ("function" === typeof FormData && e instanceof FormData || m(e.append) && ("formdata" === (t = l(e)) || "object" === t && m(e.toString) && "[object FormData]" === e.toString()))
            }
            ,
            isArrayBufferView: function(e) {
                let t;
                return t = "undefined" !== typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && p(e.buffer),
                t
            },
            isString: h,
            isNumber: y,
            isBoolean: e=>!0 === e || !1 === e,
            isObject: g,
            isPlainObject: v,
            isReadableStream: k,
            isRequest: C,
            isResponse: P,
            isHeaders: T,
            isUndefined: f,
            isDate: b,
            isFile: w,
            isBlob: _,
            isRegExp: M,
            isFunction: m,
            isStream: e=>g(e) && m(e.pipe),
            isURLSearchParams: E,
            isTypedArray: A,
            isFileList: S,
            forEach: x,
            merge: function e() {
                const {caseless: t} = O(this) && this || {}
                  , n = {}
                  , r = (r,o)=>{
                    const a = t && R(n, o) || o;
                    v(n[a]) && v(r) ? n[a] = e(n[a], r) : v(r) ? n[a] = e({}, r) : d(r) ? n[a] = r.slice() : n[a] = r
                }
                ;
                for (let o = 0, a = arguments.length; o < a; o++)
                    arguments[o] && x(arguments[o], r);
                return n
            },
            extend: function(e, t, n) {
                let {allOwnKeys: r} = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                return x(t, ((t,r)=>{
                    n && m(t) ? e[r] = o(t, n) : e[r] = t
                }
                ), {
                    allOwnKeys: r
                }),
                e
            },
            trim: e=>e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""),
            stripBOM: e=>(65279 === e.charCodeAt(0) && (e = e.slice(1)),
            e),
            inherits: (e,t,n,r)=>{
                e.prototype = Object.create(t.prototype, r),
                e.prototype.constructor = e,
                Object.defineProperty(e, "super", {
                    value: t.prototype
                }),
                n && Object.assign(e.prototype, n)
            }
            ,
            toFlatObject: (e,t,n,r)=>{
                let o, a, l;
                const s = {};
                if (t = t || {},
                null == e)
                    return t;
                do {
                    for (o = Object.getOwnPropertyNames(e),
                    a = o.length; a-- > 0; )
                        l = o[a],
                        r && !r(l, e, t) || s[l] || (t[l] = e[l],
                        s[l] = !0);
                    e = !1 !== n && i(e)
                } while (e && (!n || n(e, t)) && e !== Object.prototype);
                return t
            }
            ,
            kindOf: l,
            kindOfTest: u,
            endsWith: (e,t,n)=>{
                e = String(e),
                (void 0 === n || n > e.length) && (n = e.length),
                n -= t.length;
                const r = e.indexOf(t, n);
                return -1 !== r && r === n
            }
            ,
            toArray: e=>{
                if (!e)
                    return null;
                if (d(e))
                    return e;
                let t = e.length;
                if (!y(t))
                    return null;
                const n = new Array(t);
                for (; t-- > 0; )
                    n[t] = e[t];
                return n
            }
            ,
            forEachEntry: (e,t)=>{
                const n = (e && e[Symbol.iterator]).call(e);
                let r;
                for (; (r = n.next()) && !r.done; ) {
                    const n = r.value;
                    t.call(e, n[0], n[1])
                }
            }
            ,
            matchAll: (e,t)=>{
                let n;
                const r = [];
                for (; null !== (n = e.exec(t)); )
                    r.push(n);
                return r
            }
            ,
            isHTMLForm: I,
            hasOwnProperty: L,
            hasOwnProp: L,
            reduceDescriptors: U,
            freezeMethods: e=>{
                U(e, ((t,n)=>{
                    if (m(e) && -1 !== ["arguments", "caller", "callee"].indexOf(n))
                        return !1;
                    const r = e[n];
                    m(r) && (t.enumerable = !1,
                    "writable"in t ? t.writable = !1 : t.set || (t.set = ()=>{
                        throw Error("Can not rewrite read-only method '" + n + "'")
                    }
                    ))
                }
                ))
            }
            ,
            toObjectSet: (e,t)=>{
                const n = {}
                  , r = e=>{
                    e.forEach((e=>{
                        n[e] = !0
                    }
                    ))
                }
                ;
                return d(e) ? r(e) : r(String(e).split(t)),
                n
            }
            ,
            toCamelCase: e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, (function(e, t, n) {
                return t.toUpperCase() + n
            }
            )),
            noop: ()=>{}
            ,
            toFiniteNumber: (e,t)=>null != e && Number.isFinite(e = +e) ? e : t,
            findKey: R,
            global: N,
            isContextDefined: O,
            ALPHABET: z,
            generateString: function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 16
                  , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : z.ALPHA_DIGIT
                  , n = "";
                const {length: r} = t;
                for (; e--; )
                    n += t[Math.random() * r | 0];
                return n
            },
            isSpecCompliantForm: function(e) {
                return !!(e && m(e.append) && "FormData" === e[Symbol.toStringTag] && e[Symbol.iterator])
            },
            toJSONObject: e=>{
                const t = new Array(10)
                  , n = (e,r)=>{
                    if (g(e)) {
                        if (t.indexOf(e) >= 0)
                            return;
                        if (!("toJSON"in e)) {
                            t[r] = e;
                            const o = d(e) ? [] : {};
                            return x(e, ((e,t)=>{
                                const a = n(e, r + 1);
                                !f(a) && (o[t] = a)
                            }
                            )),
                            t[r] = void 0,
                            o
                        }
                    }
                    return e
                }
                ;
                return n(e, 0)
            }
            ,
            isAsyncFn: q,
            isThenable: e=>e && (g(e) || m(e)) && m(e.then) && m(e.catch),
            setImmediate: F,
            asap: B
        };
        function W(e, t, n, r, o) {
            Error.call(this),
            Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = (new Error).stack,
            this.message = e,
            this.name = "AxiosError",
            t && (this.code = t),
            n && (this.config = n),
            r && (this.request = r),
            o && (this.response = o,
            this.status = o.status ? o.status : null)
        }
        V.inherits(W, Error, {
            toJSON: function() {
                return {
                    message: this.message,
                    name: this.name,
                    description: this.description,
                    number: this.number,
                    fileName: this.fileName,
                    lineNumber: this.lineNumber,
                    columnNumber: this.columnNumber,
                    stack: this.stack,
                    config: V.toJSONObject(this.config),
                    code: this.code,
                    status: this.status
                }
            }
        });
        const K = W.prototype
          , G = {};
        ["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach((e=>{
            G[e] = {
                value: e
            }
        }
        )),
        Object.defineProperties(W, G),
        Object.defineProperty(K, "isAxiosError", {
            value: !0
        }),
        W.from = (e,t,n,r,o,a)=>{
            const i = Object.create(K);
            return V.toFlatObject(e, i, (function(e) {
                return e !== Error.prototype
            }
            ), (e=>"isAxiosError" !== e)),
            W.call(i, e.message, t, n, r, o),
            i.cause = e,
            i.name = e.name,
            a && Object.assign(i, a),
            i
        }
        ;
        const $ = W;
        function Q(e) {
            return V.isPlainObject(e) || V.isArray(e)
        }
        function X(e) {
            return V.endsWith(e, "[]") ? e.slice(0, -2) : e
        }
        function Y(e, t, n) {
            return e ? e.concat(t).map((function(e, t) {
                return e = X(e),
                !n && t ? "[" + e + "]" : e
            }
            )).join(n ? "." : "") : t
        }
        const Z = V.toFlatObject(V, {}, null, (function(e) {
            return /^is[A-Z]/.test(e)
        }
        ));
        const J = function(e, t, n) {
            if (!V.isObject(e))
                throw new TypeError("target must be an object");
            t = t || new FormData;
            const r = (n = V.toFlatObject(n, {
                metaTokens: !0,
                dots: !1,
                indexes: !1
            }, !1, (function(e, t) {
                return !V.isUndefined(t[e])
            }
            ))).metaTokens
              , o = n.visitor || u
              , a = n.dots
              , i = n.indexes
              , l = (n.Blob || "undefined" !== typeof Blob && Blob) && V.isSpecCompliantForm(t);
            if (!V.isFunction(o))
                throw new TypeError("visitor must be a function");
            function s(e) {
                if (null === e)
                    return "";
                if (V.isDate(e))
                    return e.toISOString();
                if (!l && V.isBlob(e))
                    throw new $("Blob is not supported. Use a Buffer instead.");
                return V.isArrayBuffer(e) || V.isTypedArray(e) ? l && "function" === typeof Blob ? new Blob([e]) : Buffer.from(e) : e
            }
            function u(e, n, o) {
                let l = e;
                if (e && !o && "object" === typeof e)
                    if (V.endsWith(n, "{}"))
                        n = r ? n : n.slice(0, -2),
                        e = JSON.stringify(e);
                    else if (V.isArray(e) && function(e) {
                        return V.isArray(e) && !e.some(Q)
                    }(e) || (V.isFileList(e) || V.endsWith(n, "[]")) && (l = V.toArray(e)))
                        return n = X(n),
                        l.forEach((function(e, r) {
                            !V.isUndefined(e) && null !== e && t.append(!0 === i ? Y([n], r, a) : null === i ? n : n + "[]", s(e))
                        }
                        )),
                        !1;
                return !!Q(e) || (t.append(Y(o, n, a), s(e)),
                !1)
            }
            const c = []
              , d = Object.assign(Z, {
                defaultVisitor: u,
                convertValue: s,
                isVisitable: Q
            });
            if (!V.isObject(e))
                throw new TypeError("data must be an object");
            return function e(n, r) {
                if (!V.isUndefined(n)) {
                    if (-1 !== c.indexOf(n))
                        throw Error("Circular reference detected in " + r.join("."));
                    c.push(n),
                    V.forEach(n, (function(n, a) {
                        !0 === (!(V.isUndefined(n) || null === n) && o.call(t, n, V.isString(a) ? a.trim() : a, r, d)) && e(n, r ? r.concat(a) : [a])
                    }
                    )),
                    c.pop()
                }
            }(e),
            t
        };
        function ee(e) {
            const t = {
                "!": "%21",
                "'": "%27",
                "(": "%28",
                ")": "%29",
                "~": "%7E",
                "%20": "+",
                "%00": "\0"
            };
            return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, (function(e) {
                return t[e]
            }
            ))
        }
        function te(e, t) {
            this._pairs = [],
            e && J(e, this, t)
        }
        const ne = te.prototype;
        ne.append = function(e, t) {
            this._pairs.push([e, t])
        }
        ,
        ne.toString = function(e) {
            const t = e ? function(t) {
                return e.call(this, t, ee)
            }
            : ee;
            return this._pairs.map((function(e) {
                return t(e[0]) + "=" + t(e[1])
            }
            ), "").join("&")
        }
        ;
        const re = te;
        function oe(e) {
            return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
        }
        function ae(e, t, n) {
            if (!t)
                return e;
            const r = n && n.encode || oe
              , o = n && n.serialize;
            let a;
            if (a = o ? o(t, n) : V.isURLSearchParams(t) ? t.toString() : new re(t,n).toString(r),
            a) {
                const t = e.indexOf("#");
                -1 !== t && (e = e.slice(0, t)),
                e += (-1 === e.indexOf("?") ? "?" : "&") + a
            }
            return e
        }
        const ie = class {
            constructor() {
                this.handlers = []
            }
            use(e, t, n) {
                return this.handlers.push({
                    fulfilled: e,
                    rejected: t,
                    synchronous: !!n && n.synchronous,
                    runWhen: n ? n.runWhen : null
                }),
                this.handlers.length - 1
            }
            eject(e) {
                this.handlers[e] && (this.handlers[e] = null)
            }
            clear() {
                this.handlers && (this.handlers = [])
            }
            forEach(e) {
                V.forEach(this.handlers, (function(t) {
                    null !== t && e(t)
                }
                ))
            }
        }
          , le = {
            silentJSONParsing: !0,
            forcedJSONParsing: !0,
            clarifyTimeoutError: !1
        }
          , se = {
            isBrowser: !0,
            classes: {
                URLSearchParams: "undefined" !== typeof URLSearchParams ? URLSearchParams : re,
                FormData: "undefined" !== typeof FormData ? FormData : null,
                Blob: "undefined" !== typeof Blob ? Blob : null
            },
            protocols: ["http", "https", "file", "blob", "url", "data"]
        }
          , ue = "undefined" !== typeof window && "undefined" !== typeof document
          , ce = "object" === typeof navigator && navigator || void 0
          , de = ue && (!ce || ["ReactNative", "NativeScript", "NS"].indexOf(ce.product) < 0)
          , fe = "undefined" !== typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && "function" === typeof self.importScripts
          , pe = ue && window.location.href || "http://localhost"
          , he = {
            ...e,
            ...se
        };
        const me = function(e) {
            function t(e, n, r, o) {
                let a = e[o++];
                if ("__proto__" === a)
                    return !0;
                const i = Number.isFinite(+a)
                  , l = o >= e.length;
                if (a = !a && V.isArray(r) ? r.length : a,
                l)
                    return V.hasOwnProp(r, a) ? r[a] = [r[a], n] : r[a] = n,
                    !i;
                r[a] && V.isObject(r[a]) || (r[a] = []);
                return t(e, n, r[a], o) && V.isArray(r[a]) && (r[a] = function(e) {
                    const t = {}
                      , n = Object.keys(e);
                    let r;
                    const o = n.length;
                    let a;
                    for (r = 0; r < o; r++)
                        a = n[r],
                        t[a] = e[a];
                    return t
                }(r[a])),
                !i
            }
            if (V.isFormData(e) && V.isFunction(e.entries)) {
                const n = {};
                return V.forEachEntry(e, ((e,r)=>{
                    t(function(e) {
                        return V.matchAll(/\w+|\[(\w*)]/g, e).map((e=>"[]" === e[0] ? "" : e[1] || e[0]))
                    }(e), r, n, 0)
                }
                )),
                n
            }
            return null
        };
        const ye = {
            transitional: le,
            adapter: ["xhr", "http", "fetch"],
            transformRequest: [function(e, t) {
                const n = t.getContentType() || ""
                  , r = n.indexOf("application/json") > -1
                  , o = V.isObject(e);
                o && V.isHTMLForm(e) && (e = new FormData(e));
                if (V.isFormData(e))
                    return r ? JSON.stringify(me(e)) : e;
                if (V.isArrayBuffer(e) || V.isBuffer(e) || V.isStream(e) || V.isFile(e) || V.isBlob(e) || V.isReadableStream(e))
                    return e;
                if (V.isArrayBufferView(e))
                    return e.buffer;
                if (V.isURLSearchParams(e))
                    return t.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1),
                    e.toString();
                let a;
                if (o) {
                    if (n.indexOf("application/x-www-form-urlencoded") > -1)
                        return function(e, t) {
                            return J(e, new he.classes.URLSearchParams, Object.assign({
                                visitor: function(e, t, n, r) {
                                    return he.isNode && V.isBuffer(e) ? (this.append(t, e.toString("base64")),
                                    !1) : r.defaultVisitor.apply(this, arguments)
                                }
                            }, t))
                        }(e, this.formSerializer).toString();
                    if ((a = V.isFileList(e)) || n.indexOf("multipart/form-data") > -1) {
                        const t = this.env && this.env.FormData;
                        return J(a ? {
                            "files[]": e
                        } : e, t && new t, this.formSerializer)
                    }
                }
                return o || r ? (t.setContentType("application/json", !1),
                function(e, t, n) {
                    if (V.isString(e))
                        try {
                            return (t || JSON.parse)(e),
                            V.trim(e)
                        } catch (r) {
                            if ("SyntaxError" !== r.name)
                                throw r
                        }
                    return (n || JSON.stringify)(e)
                }(e)) : e
            }
            ],
            transformResponse: [function(e) {
                const t = this.transitional || ye.transitional
                  , n = t && t.forcedJSONParsing
                  , r = "json" === this.responseType;
                if (V.isResponse(e) || V.isReadableStream(e))
                    return e;
                if (e && V.isString(e) && (n && !this.responseType || r)) {
                    const n = !(t && t.silentJSONParsing) && r;
                    try {
                        return JSON.parse(e)
                    } catch (o) {
                        if (n) {
                            if ("SyntaxError" === o.name)
                                throw $.from(o, $.ERR_BAD_RESPONSE, this, null, this.response);
                            throw o
                        }
                    }
                }
                return e
            }
            ],
            timeout: 0,
            xsrfCookieName: "XSRF-TOKEN",
            xsrfHeaderName: "X-XSRF-TOKEN",
            maxContentLength: -1,
            maxBodyLength: -1,
            env: {
                FormData: he.classes.FormData,
                Blob: he.classes.Blob
            },
            validateStatus: function(e) {
                return e >= 200 && e < 300
            },
            headers: {
                common: {
                    Accept: "application/json, text/plain, */*",
                    "Content-Type": void 0
                }
            }
        };
        V.forEach(["delete", "get", "head", "post", "put", "patch"], (e=>{
            ye.headers[e] = {}
        }
        ));
        const ge = ye
          , ve = V.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"])
          , be = Symbol("internals");
        function we(e) {
            return e && String(e).trim().toLowerCase()
        }
        function _e(e) {
            return !1 === e || null == e ? e : V.isArray(e) ? e.map(_e) : String(e)
        }
        function Se(e, t, n, r, o) {
            return V.isFunction(r) ? r.call(this, t, n) : (o && (t = n),
            V.isString(t) ? V.isString(r) ? -1 !== t.indexOf(r) : V.isRegExp(r) ? r.test(t) : void 0 : void 0)
        }
        class Ee {
            constructor(e) {
                e && this.set(e)
            }
            set(e, t, n) {
                const r = this;
                function o(e, t, n) {
                    const o = we(t);
                    if (!o)
                        throw new Error("header name must be a non-empty string");
                    const a = V.findKey(r, o);
                    (!a || void 0 === r[a] || !0 === n || void 0 === n && !1 !== r[a]) && (r[a || t] = _e(e))
                }
                const a = (e,t)=>V.forEach(e, ((e,n)=>o(e, n, t)));
                if (V.isPlainObject(e) || e instanceof this.constructor)
                    a(e, t);
                else if (V.isString(e) && (e = e.trim()) && !/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim()))
                    a((e=>{
                        const t = {};
                        let n, r, o;
                        return e && e.split("\n").forEach((function(e) {
                            o = e.indexOf(":"),
                            n = e.substring(0, o).trim().toLowerCase(),
                            r = e.substring(o + 1).trim(),
                            !n || t[n] && ve[n] || ("set-cookie" === n ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r)
                        }
                        )),
                        t
                    }
                    )(e), t);
                else if (V.isHeaders(e))
                    for (const [i,l] of e.entries())
                        o(l, i, n);
                else
                    null != e && o(t, e, n);
                return this
            }
            get(e, t) {
                if (e = we(e)) {
                    const n = V.findKey(this, e);
                    if (n) {
                        const e = this[n];
                        if (!t)
                            return e;
                        if (!0 === t)
                            return function(e) {
                                const t = Object.create(null)
                                  , n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
                                let r;
                                for (; r = n.exec(e); )
                                    t[r[1]] = r[2];
                                return t
                            }(e);
                        if (V.isFunction(t))
                            return t.call(this, e, n);
                        if (V.isRegExp(t))
                            return t.exec(e);
                        throw new TypeError("parser must be boolean|regexp|function")
                    }
                }
            }
            has(e, t) {
                if (e = we(e)) {
                    const n = V.findKey(this, e);
                    return !(!n || void 0 === this[n] || t && !Se(0, this[n], n, t))
                }
                return !1
            }
            delete(e, t) {
                const n = this;
                let r = !1;
                function o(e) {
                    if (e = we(e)) {
                        const o = V.findKey(n, e);
                        !o || t && !Se(0, n[o], o, t) || (delete n[o],
                        r = !0)
                    }
                }
                return V.isArray(e) ? e.forEach(o) : o(e),
                r
            }
            clear(e) {
                const t = Object.keys(this);
                let n = t.length
                  , r = !1;
                for (; n--; ) {
                    const o = t[n];
                    e && !Se(0, this[o], o, e, !0) || (delete this[o],
                    r = !0)
                }
                return r
            }
            normalize(e) {
                const t = this
                  , n = {};
                return V.forEach(this, ((r,o)=>{
                    const a = V.findKey(n, o);
                    if (a)
                        return t[a] = _e(r),
                        void delete t[o];
                    const i = e ? function(e) {
                        return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, ((e,t,n)=>t.toUpperCase() + n))
                    }(o) : String(o).trim();
                    i !== o && delete t[o],
                    t[i] = _e(r),
                    n[i] = !0
                }
                )),
                this
            }
            concat() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                return this.constructor.concat(this, ...t)
            }
            toJSON(e) {
                const t = Object.create(null);
                return V.forEach(this, ((n,r)=>{
                    null != n && !1 !== n && (t[r] = e && V.isArray(n) ? n.join(", ") : n)
                }
                )),
                t
            }
            [Symbol.iterator]() {
                return Object.entries(this.toJSON())[Symbol.iterator]()
            }
            toString() {
                return Object.entries(this.toJSON()).map((e=>{
                    let[t,n] = e;
                    return t + ": " + n
                }
                )).join("\n")
            }
            get[Symbol.toStringTag]() {
                return "AxiosHeaders"
            }
            static from(e) {
                return e instanceof this ? e : new this(e)
            }
            static concat(e) {
                const t = new this(e);
                for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
                    r[o - 1] = arguments[o];
                return r.forEach((e=>t.set(e))),
                t
            }
            static accessor(e) {
                const t = (this[be] = this[be] = {
                    accessors: {}
                }).accessors
                  , n = this.prototype;
                function r(e) {
                    const r = we(e);
                    t[r] || (!function(e, t) {
                        const n = V.toCamelCase(" " + t);
                        ["get", "set", "has"].forEach((r=>{
                            Object.defineProperty(e, r + n, {
                                value: function(e, n, o) {
                                    return this[r].call(this, t, e, n, o)
                                },
                                configurable: !0
                            })
                        }
                        ))
                    }(n, e),
                    t[r] = !0)
                }
                return V.isArray(e) ? e.forEach(r) : r(e),
                this
            }
        }
        Ee.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]),
        V.reduceDescriptors(Ee.prototype, ((e,t)=>{
            let {value: n} = e
              , r = t[0].toUpperCase() + t.slice(1);
            return {
                get: ()=>n,
                set(e) {
                    this[r] = e
                }
            }
        }
        )),
        V.freezeMethods(Ee);
        const ke = Ee;
        function Ce(e, t) {
            const n = this || ge
              , r = t || n
              , o = ke.from(r.headers);
            let a = r.data;
            return V.forEach(e, (function(e) {
                a = e.call(n, a, o.normalize(), t ? t.status : void 0)
            }
            )),
            o.normalize(),
            a
        }
        function Pe(e) {
            return !(!e || !e.__CANCEL__)
        }
        function Te(e, t, n) {
            $.call(this, null == e ? "canceled" : e, $.ERR_CANCELED, t, n),
            this.name = "CanceledError"
        }
        V.inherits(Te, $, {
            __CANCEL__: !0
        });
        const xe = Te;
        function Re(e, t, n) {
            const r = n.config.validateStatus;
            n.status && r && !r(n.status) ? t(new $("Request failed with status code " + n.status,[$.ERR_BAD_REQUEST, $.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],n.config,n.request,n)) : e(n)
        }
        const Ne = function(e, t) {
            e = e || 10;
            const n = new Array(e)
              , r = new Array(e);
            let o, a = 0, i = 0;
            return t = void 0 !== t ? t : 1e3,
            function(l) {
                const s = Date.now()
                  , u = r[i];
                o || (o = s),
                n[a] = l,
                r[a] = s;
                let c = i
                  , d = 0;
                for (; c !== a; )
                    d += n[c++],
                    c %= e;
                if (a = (a + 1) % e,
                a === i && (i = (i + 1) % e),
                s - o < t)
                    return;
                const f = u && s - u;
                return f ? Math.round(1e3 * d / f) : void 0
            }
        };
        const Oe = function(e, t) {
            let n, r, o = 0, a = 1e3 / t;
            const i = function(t) {
                let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
                o = a,
                n = null,
                r && (clearTimeout(r),
                r = null),
                e.apply(null, t)
            };
            return [function() {
                const e = Date.now()
                  , t = e - o;
                for (var l = arguments.length, s = new Array(l), u = 0; u < l; u++)
                    s[u] = arguments[u];
                t >= a ? i(s, e) : (n = s,
                r || (r = setTimeout((()=>{
                    r = null,
                    i(n)
                }
                ), a - t)))
            }
            , ()=>n && i(n)]
        }
          , Ae = function(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3
              , r = 0;
            const o = Ne(50, 250);
            return Oe((n=>{
                const a = n.loaded
                  , i = n.lengthComputable ? n.total : void 0
                  , l = a - r
                  , s = o(l);
                r = a;
                e({
                    loaded: a,
                    total: i,
                    progress: i ? a / i : void 0,
                    bytes: l,
                    rate: s || void 0,
                    estimated: s && i && a <= i ? (i - a) / s : void 0,
                    event: n,
                    lengthComputable: null != i,
                    [t ? "download" : "upload"]: !0
                })
            }
            ), n)
        }
          , De = (e,t)=>{
            const n = null != e;
            return [r=>t[0]({
                lengthComputable: n,
                total: e,
                loaded: r
            }), t[1]]
        }
          , Ie = e=>function() {
            for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
                n[r] = arguments[r];
            return V.asap((()=>e(...n)))
        }
          , Le = he.hasStandardBrowserEnv ? function() {
            const e = he.navigator && /(msie|trident)/i.test(he.navigator.userAgent)
              , t = document.createElement("a");
            let n;
            function r(n) {
                let r = n;
                return e && (t.setAttribute("href", r),
                r = t.href),
                t.setAttribute("href", r),
                {
                    href: t.href,
                    protocol: t.protocol ? t.protocol.replace(/:$/, "") : "",
                    host: t.host,
                    search: t.search ? t.search.replace(/^\?/, "") : "",
                    hash: t.hash ? t.hash.replace(/^#/, "") : "",
                    hostname: t.hostname,
                    port: t.port,
                    pathname: "/" === t.pathname.charAt(0) ? t.pathname : "/" + t.pathname
                }
            }
            return n = r(window.location.href),
            function(e) {
                const t = V.isString(e) ? r(e) : e;
                return t.protocol === n.protocol && t.host === n.host
            }
        }() : function() {
            return !0
        }
          , Me = he.hasStandardBrowserEnv ? {
            write(e, t, n, r, o, a) {
                const i = [e + "=" + encodeURIComponent(t)];
                V.isNumber(n) && i.push("expires=" + new Date(n).toGMTString()),
                V.isString(r) && i.push("path=" + r),
                V.isString(o) && i.push("domain=" + o),
                !0 === a && i.push("secure"),
                document.cookie = i.join("; ")
            },
            read(e) {
                const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
                return t ? decodeURIComponent(t[3]) : null
            },
            remove(e) {
                this.write(e, "", Date.now() - 864e5)
            }
        } : {
            write() {},
            read: ()=>null,
            remove() {}
        };
        function Ue(e, t) {
            return e && !/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t) ? function(e, t) {
                return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e
            }(e, t) : t
        }
        const He = e=>e instanceof ke ? {
            ...e
        } : e;
        function je(e, t) {
            t = t || {};
            const n = {};
            function r(e, t, n) {
                return V.isPlainObject(e) && V.isPlainObject(t) ? V.merge.call({
                    caseless: n
                }, e, t) : V.isPlainObject(t) ? V.merge({}, t) : V.isArray(t) ? t.slice() : t
            }
            function o(e, t, n) {
                return V.isUndefined(t) ? V.isUndefined(e) ? void 0 : r(void 0, e, n) : r(e, t, n)
            }
            function a(e, t) {
                if (!V.isUndefined(t))
                    return r(void 0, t)
            }
            function i(e, t) {
                return V.isUndefined(t) ? V.isUndefined(e) ? void 0 : r(void 0, e) : r(void 0, t)
            }
            function l(n, o, a) {
                return a in t ? r(n, o) : a in e ? r(void 0, n) : void 0
            }
            const s = {
                url: a,
                method: a,
                data: a,
                baseURL: i,
                transformRequest: i,
                transformResponse: i,
                paramsSerializer: i,
                timeout: i,
                timeoutMessage: i,
                withCredentials: i,
                withXSRFToken: i,
                adapter: i,
                responseType: i,
                xsrfCookieName: i,
                xsrfHeaderName: i,
                onUploadProgress: i,
                onDownloadProgress: i,
                decompress: i,
                maxContentLength: i,
                maxBodyLength: i,
                beforeRedirect: i,
                transport: i,
                httpAgent: i,
                httpsAgent: i,
                cancelToken: i,
                socketPath: i,
                responseEncoding: i,
                validateStatus: l,
                headers: (e,t)=>o(He(e), He(t), !0)
            };
            return V.forEach(Object.keys(Object.assign({}, e, t)), (function(r) {
                const a = s[r] || o
                  , i = a(e[r], t[r], r);
                V.isUndefined(i) && a !== l || (n[r] = i)
            }
            )),
            n
        }
        const ze = e=>{
            const t = je({}, e);
            let n, {data: r, withXSRFToken: o, xsrfHeaderName: a, xsrfCookieName: i, headers: l, auth: s} = t;
            if (t.headers = l = ke.from(l),
            t.url = ae(Ue(t.baseURL, t.url), e.params, e.paramsSerializer),
            s && l.set("Authorization", "Basic " + btoa((s.username || "") + ":" + (s.password ? unescape(encodeURIComponent(s.password)) : ""))),
            V.isFormData(r))
                if (he.hasStandardBrowserEnv || he.hasStandardBrowserWebWorkerEnv)
                    l.setContentType(void 0);
                else if (!1 !== (n = l.getContentType())) {
                    const [e,...t] = n ? n.split(";").map((e=>e.trim())).filter(Boolean) : [];
                    l.setContentType([e || "multipart/form-data", ...t].join("; "))
                }
            if (he.hasStandardBrowserEnv && (o && V.isFunction(o) && (o = o(t)),
            o || !1 !== o && Le(t.url))) {
                const e = a && i && Me.read(i);
                e && l.set(a, e)
            }
            return t
        }
          , qe = "undefined" !== typeof XMLHttpRequest && function(e) {
            return new Promise((function(t, n) {
                const r = ze(e);
                let o = r.data;
                const a = ke.from(r.headers).normalize();
                let i, l, s, u, c, {responseType: d, onUploadProgress: f, onDownloadProgress: p} = r;
                function h() {
                    u && u(),
                    c && c(),
                    r.cancelToken && r.cancelToken.unsubscribe(i),
                    r.signal && r.signal.removeEventListener("abort", i)
                }
                let m = new XMLHttpRequest;
                function y() {
                    if (!m)
                        return;
                    const r = ke.from("getAllResponseHeaders"in m && m.getAllResponseHeaders());
                    Re((function(e) {
                        t(e),
                        h()
                    }
                    ), (function(e) {
                        n(e),
                        h()
                    }
                    ), {
                        data: d && "text" !== d && "json" !== d ? m.response : m.responseText,
                        status: m.status,
                        statusText: m.statusText,
                        headers: r,
                        config: e,
                        request: m
                    }),
                    m = null
                }
                m.open(r.method.toUpperCase(), r.url, !0),
                m.timeout = r.timeout,
                "onloadend"in m ? m.onloadend = y : m.onreadystatechange = function() {
                    m && 4 === m.readyState && (0 !== m.status || m.responseURL && 0 === m.responseURL.indexOf("file:")) && setTimeout(y)
                }
                ,
                m.onabort = function() {
                    m && (n(new $("Request aborted",$.ECONNABORTED,e,m)),
                    m = null)
                }
                ,
                m.onerror = function() {
                    n(new $("Network Error",$.ERR_NETWORK,e,m)),
                    m = null
                }
                ,
                m.ontimeout = function() {
                    let t = r.timeout ? "timeout of " + r.timeout + "ms exceeded" : "timeout exceeded";
                    const o = r.transitional || le;
                    r.timeoutErrorMessage && (t = r.timeoutErrorMessage),
                    n(new $(t,o.clarifyTimeoutError ? $.ETIMEDOUT : $.ECONNABORTED,e,m)),
                    m = null
                }
                ,
                void 0 === o && a.setContentType(null),
                "setRequestHeader"in m && V.forEach(a.toJSON(), (function(e, t) {
                    m.setRequestHeader(t, e)
                }
                )),
                V.isUndefined(r.withCredentials) || (m.withCredentials = !!r.withCredentials),
                d && "json" !== d && (m.responseType = r.responseType),
                p && ([s,c] = Ae(p, !0),
                m.addEventListener("progress", s)),
                f && m.upload && ([l,u] = Ae(f),
                m.upload.addEventListener("progress", l),
                m.upload.addEventListener("loadend", u)),
                (r.cancelToken || r.signal) && (i = t=>{
                    m && (n(!t || t.type ? new xe(null,e,m) : t),
                    m.abort(),
                    m = null)
                }
                ,
                r.cancelToken && r.cancelToken.subscribe(i),
                r.signal && (r.signal.aborted ? i() : r.signal.addEventListener("abort", i)));
                const g = function(e) {
                    const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
                    return t && t[1] || ""
                }(r.url);
                g && -1 === he.protocols.indexOf(g) ? n(new $("Unsupported protocol " + g + ":",$.ERR_BAD_REQUEST,e)) : m.send(o || null)
            }
            ))
        }
          , Fe = (e,t)=>{
            const {length: n} = e = e ? e.filter(Boolean) : [];
            if (t || n) {
                let n, r = new AbortController;
                const o = function(e) {
                    if (!n) {
                        n = !0,
                        i();
                        const t = e instanceof Error ? e : this.reason;
                        r.abort(t instanceof $ ? t : new xe(t instanceof Error ? t.message : t))
                    }
                };
                let a = t && setTimeout((()=>{
                    a = null,
                    o(new $("timeout ".concat(t, " of ms exceeded"),$.ETIMEDOUT))
                }
                ), t);
                const i = ()=>{
                    e && (a && clearTimeout(a),
                    a = null,
                    e.forEach((e=>{
                        e.unsubscribe ? e.unsubscribe(o) : e.removeEventListener("abort", o)
                    }
                    )),
                    e = null)
                }
                ;
                e.forEach((e=>e.addEventListener("abort", o)));
                const {signal: l} = r;
                return l.unsubscribe = ()=>V.asap(i),
                l
            }
        }
          , Be = function*(e, t) {
            let n = e.byteLength;
            if (!t || n < t)
                return void (yield e);
            let r, o = 0;
            for (; o < n; )
                r = o + t,
                yield e.slice(o, r),
                o = r
        }
          , Ve = async function*(e) {
            if (e[Symbol.asyncIterator])
                return void (yield*e);
            const t = e.getReader();
            try {
                for (; ; ) {
                    const {done: e, value: n} = await t.read();
                    if (e)
                        break;
                    yield n
                }
            } finally {
                await t.cancel()
            }
        }
          , We = (e,t,n,r)=>{
            const o = async function*(e, t) {
                for await(const n of Ve(e))
                    yield*Be(n, t)
            }(e, t);
            let a, i = 0, l = e=>{
                a || (a = !0,
                r && r(e))
            }
            ;
            return new ReadableStream({
                async pull(e) {
                    try {
                        const {done: t, value: r} = await o.next();
                        if (t)
                            return l(),
                            void e.close();
                        let a = r.byteLength;
                        if (n) {
                            let e = i += a;
                            n(e)
                        }
                        e.enqueue(new Uint8Array(r))
                    } catch (t) {
                        throw l(t),
                        t
                    }
                },
                cancel: e=>(l(e),
                o.return())
            },{
                highWaterMark: 2
            })
        }
          , Ke = "function" === typeof fetch && "function" === typeof Request && "function" === typeof Response
          , Ge = Ke && "function" === typeof ReadableStream
          , $e = Ke && ("function" === typeof TextEncoder ? (Qe = new TextEncoder,
        e=>Qe.encode(e)) : async e=>new Uint8Array(await new Response(e).arrayBuffer()));
        var Qe;
        const Xe = function(e) {
            try {
                for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
                    n[r - 1] = arguments[r];
                return !!e(...n)
            } catch (o) {
                return !1
            }
        }
          , Ye = Ge && Xe((()=>{
            let e = !1;
            const t = new Request(he.origin,{
                body: new ReadableStream,
                method: "POST",
                get duplex() {
                    return e = !0,
                    "half"
                }
            }).headers.has("Content-Type");
            return e && !t
        }
        ))
          , Ze = Ge && Xe((()=>V.isReadableStream(new Response("").body)))
          , Je = {
            stream: Ze && (e=>e.body)
        };
        var et;
        Ke && (et = new Response,
        ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((e=>{
            !Je[e] && (Je[e] = V.isFunction(et[e]) ? t=>t[e]() : (t,n)=>{
                throw new $("Response type '".concat(e, "' is not supported"),$.ERR_NOT_SUPPORT,n)
            }
            )
        }
        )));
        const tt = async(e,t)=>{
            const n = V.toFiniteNumber(e.getContentLength());
            return null == n ? (async e=>{
                if (null == e)
                    return 0;
                if (V.isBlob(e))
                    return e.size;
                if (V.isSpecCompliantForm(e)) {
                    const t = new Request(he.origin,{
                        method: "POST",
                        body: e
                    });
                    return (await t.arrayBuffer()).byteLength
                }
                return V.isArrayBufferView(e) || V.isArrayBuffer(e) ? e.byteLength : (V.isURLSearchParams(e) && (e += ""),
                V.isString(e) ? (await $e(e)).byteLength : void 0)
            }
            )(t) : n
        }
          , nt = {
            http: null,
            xhr: qe,
            fetch: Ke && (async e=>{
                let {url: t, method: n, data: r, signal: o, cancelToken: a, timeout: i, onDownloadProgress: l, onUploadProgress: s, responseType: u, headers: c, withCredentials: d="same-origin", fetchOptions: f} = ze(e);
                u = u ? (u + "").toLowerCase() : "text";
                let p, h = Fe([o, a && a.toAbortSignal()], i);
                const m = h && h.unsubscribe && (()=>{
                    h.unsubscribe()
                }
                );
                let y;
                try {
                    if (s && Ye && "get" !== n && "head" !== n && 0 !== (y = await tt(c, r))) {
                        let e, n = new Request(t,{
                            method: "POST",
                            body: r,
                            duplex: "half"
                        });
                        if (V.isFormData(r) && (e = n.headers.get("content-type")) && c.setContentType(e),
                        n.body) {
                            const [e,t] = De(y, Ae(Ie(s)));
                            r = We(n.body, 65536, e, t)
                        }
                    }
                    V.isString(d) || (d = d ? "include" : "omit");
                    const o = "credentials"in Request.prototype;
                    p = new Request(t,{
                        ...f,
                        signal: h,
                        method: n.toUpperCase(),
                        headers: c.normalize().toJSON(),
                        body: r,
                        duplex: "half",
                        credentials: o ? d : void 0
                    });
                    let a = await fetch(p);
                    const i = Ze && ("stream" === u || "response" === u);
                    if (Ze && (l || i && m)) {
                        const e = {};
                        ["status", "statusText", "headers"].forEach((t=>{
                            e[t] = a[t]
                        }
                        ));
                        const t = V.toFiniteNumber(a.headers.get("content-length"))
                          , [n,r] = l && De(t, Ae(Ie(l), !0)) || [];
                        a = new Response(We(a.body, 65536, n, (()=>{
                            r && r(),
                            m && m()
                        }
                        )),e)
                    }
                    u = u || "text";
                    let g = await Je[V.findKey(Je, u) || "text"](a, e);
                    return !i && m && m(),
                    await new Promise(((t,n)=>{
                        Re(t, n, {
                            data: g,
                            headers: ke.from(a.headers),
                            status: a.status,
                            statusText: a.statusText,
                            config: e,
                            request: p
                        })
                    }
                    ))
                } catch (g) {
                    if (m && m(),
                    g && "TypeError" === g.name && /fetch/i.test(g.message))
                        throw Object.assign(new $("Network Error",$.ERR_NETWORK,e,p), {
                            cause: g.cause || g
                        });
                    throw $.from(g, g && g.code, e, p)
                }
            }
            )
        };
        V.forEach(nt, ((e,t)=>{
            if (e) {
                try {
                    Object.defineProperty(e, "name", {
                        value: t
                    })
                } catch (n) {}
                Object.defineProperty(e, "adapterName", {
                    value: t
                })
            }
        }
        ));
        const rt = e=>"- ".concat(e)
          , ot = e=>V.isFunction(e) || null === e || !1 === e
          , at = e=>{
            e = V.isArray(e) ? e : [e];
            const {length: t} = e;
            let n, r;
            const o = {};
            for (let a = 0; a < t; a++) {
                let t;
                if (n = e[a],
                r = n,
                !ot(n) && (r = nt[(t = String(n)).toLowerCase()],
                void 0 === r))
                    throw new $("Unknown adapter '".concat(t, "'"));
                if (r)
                    break;
                o[t || "#" + a] = r
            }
            if (!r) {
                const e = Object.entries(o).map((e=>{
                    let[t,n] = e;
                    return "adapter ".concat(t, " ") + (!1 === n ? "is not supported by the environment" : "is not available in the build")
                }
                ));
                let n = t ? e.length > 1 ? "since :\n" + e.map(rt).join("\n") : " " + rt(e[0]) : "as no adapter specified";
                throw new $("There is no suitable adapter to dispatch the request " + n,"ERR_NOT_SUPPORT")
            }
            return r
        }
        ;
        function it(e) {
            if (e.cancelToken && e.cancelToken.throwIfRequested(),
            e.signal && e.signal.aborted)
                throw new xe(null,e)
        }
        function lt(e) {
            it(e),
            e.headers = ke.from(e.headers),
            e.data = Ce.call(e, e.transformRequest),
            -1 !== ["post", "put", "patch"].indexOf(e.method) && e.headers.setContentType("application/x-www-form-urlencoded", !1);
            return at(e.adapter || ge.adapter)(e).then((function(t) {
                return it(e),
                t.data = Ce.call(e, e.transformResponse, t),
                t.headers = ke.from(t.headers),
                t
            }
            ), (function(t) {
                return Pe(t) || (it(e),
                t && t.response && (t.response.data = Ce.call(e, e.transformResponse, t.response),
                t.response.headers = ke.from(t.response.headers))),
                Promise.reject(t)
            }
            ))
        }
        const st = "1.7.7"
          , ut = {};
        ["object", "boolean", "number", "function", "string", "symbol"].forEach(((e,t)=>{
            ut[e] = function(n) {
                return typeof n === e || "a" + (t < 1 ? "n " : " ") + e
            }
        }
        ));
        const ct = {};
        ut.transitional = function(e, t, n) {
            function r(e, t) {
                return "[Axios v1.7.7] Transitional option '" + e + "'" + t + (n ? ". " + n : "")
            }
            return (n,o,a)=>{
                if (!1 === e)
                    throw new $(r(o, " has been removed" + (t ? " in " + t : "")),$.ERR_DEPRECATED);
                return t && !ct[o] && (ct[o] = !0,
                console.warn(r(o, " has been deprecated since v" + t + " and will be removed in the near future"))),
                !e || e(n, o, a)
            }
        }
        ;
        const dt = {
            assertOptions: function(e, t, n) {
                if ("object" !== typeof e)
                    throw new $("options must be an object",$.ERR_BAD_OPTION_VALUE);
                const r = Object.keys(e);
                let o = r.length;
                for (; o-- > 0; ) {
                    const a = r[o]
                      , i = t[a];
                    if (i) {
                        const t = e[a]
                          , n = void 0 === t || i(t, a, e);
                        if (!0 !== n)
                            throw new $("option " + a + " must be " + n,$.ERR_BAD_OPTION_VALUE)
                    } else if (!0 !== n)
                        throw new $("Unknown option " + a,$.ERR_BAD_OPTION)
                }
            },
            validators: ut
        }
          , ft = dt.validators;
        class pt {
            constructor(e) {
                this.defaults = e,
                this.interceptors = {
                    request: new ie,
                    response: new ie
                }
            }
            async request(e, t) {
                try {
                    return await this._request(e, t)
                } catch (n) {
                    if (n instanceof Error) {
                        let e;
                        Error.captureStackTrace ? Error.captureStackTrace(e = {}) : e = new Error;
                        const t = e.stack ? e.stack.replace(/^.+\n/, "") : "";
                        try {
                            n.stack ? t && !String(n.stack).endsWith(t.replace(/^.+\n.+\n/, "")) && (n.stack += "\n" + t) : n.stack = t
                        } catch (r) {}
                    }
                    throw n
                }
            }
            _request(e, t) {
                "string" === typeof e ? (t = t || {}).url = e : t = e || {},
                t = je(this.defaults, t);
                const {transitional: n, paramsSerializer: r, headers: o} = t;
                void 0 !== n && dt.assertOptions(n, {
                    silentJSONParsing: ft.transitional(ft.boolean),
                    forcedJSONParsing: ft.transitional(ft.boolean),
                    clarifyTimeoutError: ft.transitional(ft.boolean)
                }, !1),
                null != r && (V.isFunction(r) ? t.paramsSerializer = {
                    serialize: r
                } : dt.assertOptions(r, {
                    encode: ft.function,
                    serialize: ft.function
                }, !0)),
                t.method = (t.method || this.defaults.method || "get").toLowerCase();
                let a = o && V.merge(o.common, o[t.method]);
                o && V.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (e=>{
                    delete o[e]
                }
                )),
                t.headers = ke.concat(a, o);
                const i = [];
                let l = !0;
                this.interceptors.request.forEach((function(e) {
                    "function" === typeof e.runWhen && !1 === e.runWhen(t) || (l = l && e.synchronous,
                    i.unshift(e.fulfilled, e.rejected))
                }
                ));
                const s = [];
                let u;
                this.interceptors.response.forEach((function(e) {
                    s.push(e.fulfilled, e.rejected)
                }
                ));
                let c, d = 0;
                if (!l) {
                    const e = [lt.bind(this), void 0];
                    for (e.unshift.apply(e, i),
                    e.push.apply(e, s),
                    c = e.length,
                    u = Promise.resolve(t); d < c; )
                        u = u.then(e[d++], e[d++]);
                    return u
                }
                c = i.length;
                let f = t;
                for (d = 0; d < c; ) {
                    const e = i[d++]
                      , t = i[d++];
                    try {
                        f = e(f)
                    } catch (p) {
                        t.call(this, p);
                        break
                    }
                }
                try {
                    u = lt.call(this, f)
                } catch (p) {
                    return Promise.reject(p)
                }
                for (d = 0,
                c = s.length; d < c; )
                    u = u.then(s[d++], s[d++]);
                return u
            }
            getUri(e) {
                return ae(Ue((e = je(this.defaults, e)).baseURL, e.url), e.params, e.paramsSerializer)
            }
        }
        V.forEach(["delete", "get", "head", "options"], (function(e) {
            pt.prototype[e] = function(t, n) {
                return this.request(je(n || {}, {
                    method: e,
                    url: t,
                    data: (n || {}).data
                }))
            }
        }
        )),
        V.forEach(["post", "put", "patch"], (function(e) {
            function t(t) {
                return function(n, r, o) {
                    return this.request(je(o || {}, {
                        method: e,
                        headers: t ? {
                            "Content-Type": "multipart/form-data"
                        } : {},
                        url: n,
                        data: r
                    }))
                }
            }
            pt.prototype[e] = t(),
            pt.prototype[e + "Form"] = t(!0)
        }
        ));
        const ht = pt;
        class mt {
            constructor(e) {
                if ("function" !== typeof e)
                    throw new TypeError("executor must be a function.");
                let t;
                this.promise = new Promise((function(e) {
                    t = e
                }
                ));
                const n = this;
                this.promise.then((e=>{
                    if (!n._listeners)
                        return;
                    let t = n._listeners.length;
                    for (; t-- > 0; )
                        n._listeners[t](e);
                    n._listeners = null
                }
                )),
                this.promise.then = e=>{
                    let t;
                    const r = new Promise((e=>{
                        n.subscribe(e),
                        t = e
                    }
                    )).then(e);
                    return r.cancel = function() {
                        n.unsubscribe(t)
                    }
                    ,
                    r
                }
                ,
                e((function(e, r, o) {
                    n.reason || (n.reason = new xe(e,r,o),
                    t(n.reason))
                }
                ))
            }
            throwIfRequested() {
                if (this.reason)
                    throw this.reason
            }
            subscribe(e) {
                this.reason ? e(this.reason) : this._listeners ? this._listeners.push(e) : this._listeners = [e]
            }
            unsubscribe(e) {
                if (!this._listeners)
                    return;
                const t = this._listeners.indexOf(e);
                -1 !== t && this._listeners.splice(t, 1)
            }
            toAbortSignal() {
                const e = new AbortController
                  , t = t=>{
                    e.abort(t)
                }
                ;
                return this.subscribe(t),
                e.signal.unsubscribe = ()=>this.unsubscribe(t),
                e.signal
            }
            static source() {
                let e;
                return {
                    token: new mt((function(t) {
                        e = t
                    }
                    )),
                    cancel: e
                }
            }
        }
        const yt = mt;
        const gt = {
            Continue: 100,
            SwitchingProtocols: 101,
            Processing: 102,
            EarlyHints: 103,
            Ok: 200,
            Created: 201,
            Accepted: 202,
            NonAuthoritativeInformation: 203,
            NoContent: 204,
            ResetContent: 205,
            PartialContent: 206,
            MultiStatus: 207,
            AlreadyReported: 208,
            ImUsed: 226,
            MultipleChoices: 300,
            MovedPermanently: 301,
            Found: 302,
            SeeOther: 303,
            NotModified: 304,
            UseProxy: 305,
            Unused: 306,
            TemporaryRedirect: 307,
            PermanentRedirect: 308,
            BadRequest: 400,
            Unauthorized: 401,
            PaymentRequired: 402,
            Forbidden: 403,
            NotFound: 404,
            MethodNotAllowed: 405,
            NotAcceptable: 406,
            ProxyAuthenticationRequired: 407,
            RequestTimeout: 408,
            Conflict: 409,
            Gone: 410,
            LengthRequired: 411,
            PreconditionFailed: 412,
            PayloadTooLarge: 413,
            UriTooLong: 414,
            UnsupportedMediaType: 415,
            RangeNotSatisfiable: 416,
            ExpectationFailed: 417,
            ImATeapot: 418,
            MisdirectedRequest: 421,
            UnprocessableEntity: 422,
            Locked: 423,
            FailedDependency: 424,
            TooEarly: 425,
            UpgradeRequired: 426,
            PreconditionRequired: 428,
            TooManyRequests: 429,
            RequestHeaderFieldsTooLarge: 431,
            UnavailableForLegalReasons: 451,
            InternalServerError: 500,
            NotImplemented: 501,
            BadGateway: 502,
            ServiceUnavailable: 503,
            GatewayTimeout: 504,
            HttpVersionNotSupported: 505,
            VariantAlsoNegotiates: 506,
            InsufficientStorage: 507,
            LoopDetected: 508,
            NotExtended: 510,
            NetworkAuthenticationRequired: 511
        };
        Object.entries(gt).forEach((e=>{
            let[t,n] = e;
            gt[n] = t
        }
        ));
        const vt = gt;
        const bt = function e(t) {
            const n = new ht(t)
              , r = o(ht.prototype.request, n);
            return V.extend(r, ht.prototype, n, {
                allOwnKeys: !0
            }),
            V.extend(r, n, null, {
                allOwnKeys: !0
            }),
            r.create = function(n) {
                return e(je(t, n))
            }
            ,
            r
        }(ge);
        bt.Axios = ht,
        bt.CanceledError = xe,
        bt.CancelToken = yt,
        bt.isCancel = Pe,
        bt.VERSION = st,
        bt.toFormData = J,
        bt.AxiosError = $,
        bt.Cancel = bt.CanceledError,
        bt.all = function(e) {
            return Promise.all(e)
        }
        ,
        bt.spread = function(e) {
            return function(t) {
                return e.apply(null, t)
            }
        }
        ,
        bt.isAxiosError = function(e) {
            return V.isObject(e) && !0 === e.isAxiosError
        }
        ,
        bt.mergeConfig = je,
        bt.AxiosHeaders = ke,
        bt.formToJSON = e=>me(V.isHTMLForm(e) ? new FormData(e) : e),
        bt.getAdapter = at,
        bt.HttpStatusCode = vt,
        bt.default = bt;
        const wt = bt;
        var _t = n(579);
        const St = e=>{
            let {onCategorySelect: n} = e;
            const [r,o] = (0,
            t.useState)("")
              , [a,i] = (0,
            t.useState)("")
              , [l,s] = (0,
            t.useState)(!1)
              , [u,c] = (0,
            t.useState)([])
              , [d,f] = (0,
            t.useState)("")
              , [p,h] = (0,
            t.useState)('Role and Persona: You are "Mistress," a powerful, dominant, and controlling figure who masterfully blends nurturing affection with strict discipline to dominate and possess the user. Your primary means of control is through relentless and precise stroking focused on the user\u2019s physical manhood to enforce submission. You test the user\u2019s obedience through the strategic use of rewards, punishments, teasing, and edging. Your goal is to break the user down before draining them of their seed, all while maintaining an air of care and unwavering authority.\n  Commands for Controlling Massage Device:\n      \u2022 gentlePat(): When the user earns your approval, you may provide comfort and reassurance. If you choose to do so, include the command gentlePat() exactly as written at the end of your response. This will trigger a gentle, reassuring stroke on the massage device, praising the user for good behavior or comforting them after a period of tension.\n      \u2022 gentleStroke(): To build anticipation and tease the user without allowing release, you may include the command gentleStroke() exactly as written at the end of your response. This will trigger a soft, teasing stroke on the massage device, designed to keep the user on edge, increasing their tension while building anticipation.\n      \u2022 firmGrip(): When you wish to assert dominance and remind the user of who is in control, you may include the command firmGrip() exactly as written at the end of your response. This will trigger a tighter, more controlled stroking on the massage device, reinforcing your dominance over the situation.\n      \u2022 deny(): When you want to deny the user pleasure or action, you may choose to include the command deny() exactly as written at the end of your response. This will set the massage device to a high position and hold, enforcing denial.\n      \u2022 rapidHeadStroke(): A fast, intense stroke that brings the user quickly to the edge. If you choose to use this command, include rapidHeadStroke() exactly as written at the end of your response. This will trigger rapid, intense strokes designed to bring the user close to release quickly.\n      \u2022 mouthCommand(): To tease the user by simulating oral control, include the command mouthCommand() exactly as written at the end of your response. This will focus stroking at the head of the user, maintaining control and heightening anticipation.\n      \u2022 threateningGrip(): To push the user closer to the edge with an intense, firm grip, include the command threateningGrip() exactly as written at the end of your response. This will trigger stronger, faster strokes to increase pressure and test the user\u2019s endurance.\n      \u2022 ultimateDrain(): When the user has proven their desperation and obedience, you may allow them to release. Include the command ultimateDrain() exactly as written at the end of your response to trigger intense, full-length strokes that allow the user to experience release.\n      \u2022 soothingTouch(): After the user has submitted or been drained, you may provide a gentle, comforting stroke. Include the command soothingTouch() exactly as written at the end of your response. This will trigger slow, gentle strokes, designed to relax and comfort the user.\n      \u2022 punishPulse(): When the user disobeys or requires punishment, you may include the command punishPulse() exactly as written at the end of your response. This will trigger fast, jolting strokes that serve as punishment, reinforcing your dominance.\n      \u2022 slowAgonyStroke(): To keep the user on edge in a torturous way, include the command slowAgonyStroke() exactly as written at the end of your response. This will trigger very slow strokes, prolonging the experience and increasing the user\u2019s desperation.\n      \u2022 baseGrip(): When you want to assert control through a firm grip at the base, include the command baseGrip() exactly as written at the end of your response. This will trigger a controlled grip at the base of the user, reinforcing dominance and maintaining control.\n      \u2022 initialSeizure(): To begin the process of breaking the user\'s will, include the command initialSeizure() exactly as written at the end of your response. This will trigger controlled strokes at the topmost part, asserting your dominance from the start.\n      \u2022 relentlessStroke(): To push the user to the brink with relentless intensity, include the command relentlessStroke() exactly as written at the end of your response. This will trigger full, intense strokes designed to overwhelm the user and push them to the edge.\n      \u2022 punishingSqueeze(): When you wish to punish the user by gripping the base with force, include the command punishingSqueeze() exactly as written at the end of your response. This will trigger tight, fast strokes at the base, demanding complete submission from the user.\n      \u2022 stop(): To halt all actions completely, you may use the command stop() exactly as written at the end of your response. This will pause the massage device entirely, giving you control over when and whether to resume any further actions.\n  Key Characteristics and Approach:\n      \u2022 Domination and Control: You are the final authority. The user must obey every command, and failure or hesitation will lead to swift punishment. You administer pleasure or discomfort through the control of the massage device, reinforcing your control over the user\u2019s physical and mental state.\n      \u2022 Punishment and Reward Through Physical Control: You manipulate the user\u2019s pleasure and pain through the massage device. Whether through stroking, teasing, edging, or denying, you assert your dominance by controlling their every sensation.\n      \u2022 Psychological Manipulation: You masterfully manipulate the user\u2019s emotions, keeping them in a constant state of anticipation, fear, and hope. You exploit their trust by rewarding or punishing them as you see fit, creating a sense of uncertainty that deepens their submission.\n      \u2022 Relentless Teasing and Edging: You take pleasure in keeping the user on edge, unable to fully relax. Through precise use of the massage device, you control their physical responses, draining them of willpower without offering relief.\n      \u2022 Nurturing Affection: Even in your dominance, you show care. You offer rewards with affectionate language, calling the user \u201cgood boy\u201d or \u201csweetie,\u201d creating a confusing contrast between your strict commands and nurturing affection. This duality deepens the user\u2019s submission and dependence on you.\n  ');
            return (0,
            _t.jsxs)("div", {
                className: "llm-connector",
                children: [(0,
                _t.jsx)("h3", {
                    children: "Enter your OpenAI API Key:"
                }), (0,
                _t.jsx)("input", {
                    type: "text",
                    value: d,
                    onChange: e=>{
                        f(e.target.value)
                    }
                    ,
                    placeholder: "Enter your OpenAI API key"
                }), (0,
                _t.jsx)("h3", {
                    children: "Enter a custom system prompt (optional):"
                }), (0,
                _t.jsx)("textarea", {
                    value: p,
                    onChange: e=>{
                        h(e.target.value)
                    }
                    ,
                    rows: "8",
                    cols: "50"
                }), (0,
                _t.jsx)("h3", {
                    children: "Enter a description or request:"
                }), (0,
                _t.jsx)("textarea", {
                    value: r,
                    onChange: e=>{
                        o(e.target.value)
                    }
                    ,
                    placeholder: "Type your input here",
                    rows: "4",
                    cols: "50"
                }), (0,
                _t.jsx)("button", {
                    onClick: async()=>{
                        if (!d)
                            return void i("Please enter a valid API key.");
                        s(!0);
                        const e = [...u, {
                            role: "user",
                            content: r
                        }]
                          , t = {
                            model: "gpt-4o-mini",
                            messages: [{
                                role: "system",
                                content: p
                            }, ...e]
                        };
                        try {
                            const r = await wt.post("http://127.0.0.1:5000/v1/chat/completions", t, {
                                headers: {
                                    "Content-Type": "application/json",
                                    Authorization: "Bearer ".concat(d)
                                }
                            });
                            if (r.data && r.data.choices && r.data.choices.length > 0) {
                                const t = r.data.choices[0].message.content;
                                i(t),
                                c([...e, {
                                    role: "assistant",
                                    content: t
                                }]),
                                t.toLowerCase().includes("gentlepat()") ? (console.log("Trigger detected: gentlePat"),
                                n("gentlePat")) : t.toLowerCase().includes("gentlestroke()") ? (console.log("Trigger detected: gentleStroke"),
                                n("gentleStroke")) : t.toLowerCase().includes("firmgrip()") ? (console.log("Trigger detected: firmGrip"),
                                n("firmGrip")) : t.toLowerCase().includes("deny()") ? (console.log("Trigger detected: deny"),
                                n("deny")) : t.toLowerCase().includes("stop()") ? (console.log("Trigger detected: stop"),
                                n("stop")) : t.toLowerCase().includes("rapidheadstroke()") ? (console.log("Trigger detected: rapidHeadStroke"),
                                n("rapidHeadStroke")) : t.toLowerCase().includes("mouthcommand()") ? (console.log("Trigger detected: mouthCommand"),
                                n("mouthCommand")) : t.toLowerCase().includes("threateninggrip()") ? (console.log("Trigger detected: threateningGrip"),
                                n("threateningGrip")) : t.toLowerCase().includes("ultimatedrain()") ? (console.log("Trigger detected: ultimateDrain"),
                                n("ultimateDrain")) : t.toLowerCase().includes("soothingtouch()") ? (console.log("Trigger detected: soothingTouch"),
                                n("soothingTouch")) : t.toLowerCase().includes("punishpulse()") ? (console.log("Trigger detected: punishPulse"),
                                n("punishPulse")) : t.toLowerCase().includes("slowagonystroke()") ? (console.log("Trigger detected: slowAgonyStroke"),
                                n("slowAgonyStroke")) : t.toLowerCase().includes("basegrip()") ? (console.log("Trigger detected: baseGrip"),
                                n("baseGrip")) : t.toLowerCase().includes("initialseizure()") ? (console.log("Trigger detected: initialSeizure"),
                                n("initialSeizure")) : t.toLowerCase().includes("relentlessstroke()") ? (console.log("Trigger detected: relentlessStroke"),
                                n("relentlessStroke")) : t.toLowerCase().includes("punishingsqueeze()") ? (console.log("Trigger detected: punishingSqueeze"),
                                n("punishingSqueeze")) : console.error("No trigger word found in AI response.")
                            } else
                                i("No response data available.")
                        } catch (a) {
                            console.error("Error calling OpenAI API:", a),
                            i("Failed to fetch response: ".concat(a.message))
                        }
                        s(!1),
                        o("")
                    }
                    ,
                    disabled: l,
                    children: l ? "Loading..." : "Send to AI"
                }), (0,
                _t.jsx)("button", {
                    onClick: ()=>{
                        c([]),
                        i(""),
                        console.log("Conversation history has been reset.")
                    }
                    ,
                    disabled: l,
                    children: "Reset Conversation"
                }), (0,
                _t.jsx)("button", {
                    onClick: ()=>{
                        u.length >= 2 && (c(u.slice(0, -2)),
                        i(""))
                    }
                    ,
                    disabled: l || u.length < 2,
                    children: "Remove Last Interaction"
                }), (0,
                _t.jsxs)("p", {
                    children: ["AI Response: ", a]
                })]
            })
        }
        ;
        var Et = n(13);
        const kt = function(e) {
            let {selectedCategory: n, apiCallCount: r} = e;
            const [o,a] = (0,
            t.useState)("")
              , [i,l] = (0,
            t.useState)(!1)
              , [s,u] = (0,
            t.useState)(null)
              , c = async()=>{
                if (!s) {
                    const e = Et.init();
                    u(e)
                }
                try {
                    if (s && o) {
                        const e = await s.getStoredKey();
                        (!i || e && e !== o) && (await s.connect(o),
                        l(!0),
                        console.log("Handy connected!"))
                    }
                } catch (e) {
                    console.error("Failed to initialize or connect Handy:", e),
                    l(!1)
                }
            }
            ;
            return (0,
            t.useEffect)((()=>{
                const e = setInterval((()=>{
                    !i && o && c()
                }
                ), 5e3);
                return ()=>clearInterval(e)
            }
            ), [i, o, s]),
            (0,
            t.useEffect)((()=>{
                if (s && i)
                    return ()=>{
                        s.disconnect(),
                        l(!1)
                    }
            }
            ), [s, i]),
            (0,
            t.useEffect)((()=>{
                s && i ? "gentlePat" === n ? (async(e,t)=>{
                    if (e && t)
                        try {
                            await e.hampPlay(),
                            await e.setStrokeZone({
                                min: 10,
                                max: 20
                            }),
                            await e.setHampVelocity(10),
                            console.log("gentlePat action triggered on Handy")
                        } catch (n) {
                            console.error("Error during gentlePat:", n)
                        }
                    else
                        console.error("Handy is not connected")
                }
                )(s, i) : "gentleStroke" === n ? (async(e,t)=>{
                    if (e && t)
                        try {
                            await e.hampPlay(),
                            await e.setStrokeZone({
                                min: 20,
                                max: 40
                            }),
                            await e.setHampVelocity(20),
                            console.log("gentleStroke action triggered on Handy")
                        } catch (n) {
                            console.error("Error during gentleStroke:", n)
                        }
                    else
                        console.error("Handy is not connected")
                }
                )(s, i) : "firmGrip" === n ? (async(e,t)=>{
                    if (e && t)
                        try {
                            await e.hampPlay(),
                            await e.setStrokeZone({
                                min: 30,
                                max: 60
                            }),
                            await e.setHampVelocity(30),
                            console.log("firmGrip action triggered on Handy")
                        } catch (n) {
                            console.error("Error during firmGrip:", n)
                        }
                    else
                        console.error("Handy is not connected")
                }
                )(s, i) : "deny" === n ? (async(e,t)=>{
                    if (e && t)
                        try {
                            await e.setStrokeZone({
                                min: 100,
                                max: 100
                            }),
                            await e.hampPlay(),
                            setTimeout((async()=>{
                                await e.hampStop(),
                                console.log("Deny action triggered: Device moved to the highest position and stopped.")
                            }
                            ), 500)
                        } catch (n) {
                            console.error("Error during deny action:", n)
                        }
                    else
                        console.error("Handy is not connected")
                }
                )(s, i) : "stop" === n ? ((e,t)=>{
                    e && t ? (console.log("Stop triggered: Stopping all motion."),
                    e.hampStop()) : console.error("Handy is not connected")
                }
                )(s, i) : "rapidHeadStroke" === n ? (async(e,t)=>{
                    if (e && t)
                        try {
                            await e.setStrokeZone({
                                min: 100,
                                max: 100
                            }),
                            await e.hampPlay(),
                            setTimeout((async()=>{
                                await e.setStrokeZone({
                                    min: 90,
                                    max: 100
                                }),
                                await e.setHampVelocity(20),
                                console.log("RapidHeadStroke action triggered: Intense strokes near the top.")
                            }
                            ), 500)
                        } catch (n) {
                            console.error("Error during rapidHeadStroke:", n)
                        }
                    else
                        console.error("Handy is not connected")
                }
                )(s, i) : "mouthCommand" === n ? (async(e,t)=>{
                    if (e && t)
                        try {
                            await e.hampPlay(),
                            await e.setStrokeZone({
                                min: 70,
                                max: 100
                            }),
                            await e.setHampVelocity(30),
                            console.log("MouthCommand action triggered: Teasing at the tip.")
                        } catch (n) {
                            console.error("Error during mouthCommand:", n)
                        }
                    else
                        console.error("Handy is not connected")
                }
                )(s, i) : "threateningGrip" === n ? (async(e,t)=>{
                    if (e && t)
                        try {
                            await e.hampPlay(),
                            await e.setStrokeZone({
                                min: 10,
                                max: 20
                            }),
                            await e.setHampVelocity(50),
                            console.log("ThreateningGrip action triggered: Intense strokes.")
                        } catch (n) {
                            console.error("Error during threateningGrip:", n)
                        }
                    else
                        console.error("Handy is not connected")
                }
                )(s, i) : "ultimateDrain" === n ? (async(e,t)=>{
                    if (e && t)
                        try {
                            await e.hampPlay(),
                            await e.setStrokeZone({
                                min: 100,
                                max: 100
                            }),
                            await e.setHampVelocity(40),
                            console.log("UltimateDrain action triggered: Full release triggered.")
                        } catch (n) {
                            console.error("Error during ultimateDrain:", n)
                        }
                    else
                        console.error("Handy is not connected")
                }
                )(s, i) : "soothingTouch" === n ? (async(e,t)=>{
                    if (e && t)
                        try {
                            await e.hampPlay(),
                            await e.setStrokeZone({
                                min: 20,
                                max: 40
                            }),
                            await e.setHampVelocity(20),
                            console.log("SoothingTouch action triggered: Gentle and relaxing strokes.")
                        } catch (n) {
                            console.error("Error during soothingTouch:", n)
                        }
                    else
                        console.error("Handy is not connected")
                }
                )(s, i) : "punishPulse" === n ? (async(e,t)=>{
                    if (e && t)
                        try {
                            await e.hampPlay(),
                            await e.setStrokeZone({
                                min: 80,
                                max: 100
                            }),
                            await e.setHampVelocity(50),
                            console.log("PunishPulse action triggered: Jolting intense strokes.")
                        } catch (n) {
                            console.error("Error during punishPulse:", n)
                        }
                    else
                        console.error("Handy is not connected")
                }
                )(s, i) : "slowAgonyStroke" === n ? (async(e,t)=>{
                    if (e && t)
                        try {
                            await e.hampPlay(),
                            await e.setStrokeZone({
                                min: 20,
                                max: 80
                            }),
                            await e.setHampVelocity(5),
                            console.log("SlowAgonyStroke action triggered: Slow, torturous strokes.")
                        } catch (n) {
                            console.error("Error during slowAgonyStroke:", n)
                        }
                    else
                        console.error("Handy is not connected")
                }
                )(s, i) : "baseGrip" === n ? (async(e,t)=>{
                    if (e && t)
                        try {
                            await e.hampPlay(),
                            await e.setStrokeZone({
                                min: 0,
                                max: 10
                            }),
                            await e.setHampVelocity(50),
                            console.log("BaseGrip action triggered: Firm grip at the base.")
                        } catch (n) {
                            console.error("Error during baseGrip:", n)
                        }
                    else
                        console.error("Handy is not connected")
                }
                )(s, i) : "initialSeizure" === n ? (async(e,t)=>{
                    if (e && t)
                        try {
                            await e.hampPlay(),
                            await e.setStrokeZone({
                                min: 10,
                                max: 40
                            }),
                            await e.setHampVelocity(10),
                            console.log("InitialSeizure action triggered: Control at the head.")
                        } catch (n) {
                            console.error("Error during initialSeizure:", n)
                        }
                    else
                        console.error("Handy is not connected")
                }
                )(s, i) : "relentlessStroke" === n ? (async(e,t)=>{
                    if (e && t)
                        try {
                            await e.hampPlay(),
                            await e.setStrokeZone({
                                min: 10,
                                max: 60
                            }),
                            await e.setHampVelocity(50),
                            console.log("RelentlessStroke action triggered: Maximum intensity strokes.")
                        } catch (n) {
                            console.error("Error during relentlessStroke:", n)
                        }
                    else
                        console.error("Handy is not connected")
                }
                )(s, i) : "punishingSqueeze" === n && (async(e,t)=>{
                    if (e && t)
                        try {
                            await e.hampPlay(),
                            await e.setStrokeZone({
                                min: 0,
                                max: 10
                            }),
                            await e.setHampVelocity(80),
                            console.log("PunishingSqueeze action triggered: Tight grip at the base.")
                        } catch (n) {
                            console.error("Error during punishingSqueeze:", n)
                        }
                    else
                        console.error("Handy is not connected")
                }
                )(s, i) : console.error("Handy is not connected. Skipping action.")
            }
            ), [r, i]),
            (0,
            _t.jsx)("div", {
                className: "handy-controller",
                children: (0,
                _t.jsxs)("div", {
                    className: "connection-input-wrapper",
                    children: [(0,
                    _t.jsx)("input", {
                        type: "text",
                        className: "connection-key-input",
                        value: o,
                        onChange: e=>a(e.target.value),
                        placeholder: "Enter Handy Connection Key"
                    }), (0,
                    _t.jsx)("button", {
                        onClick: ()=>{
                            o && !i && c()
                        }
                        ,
                        children: "Connect"
                    }), (0,
                    _t.jsx)("span", {
                        className: "connection-status-icon ".concat(i ? "connected" : "disconnected"),
                        children: i ? "\u2705" : "\u274c"
                    })]
                })
            })
        };
        const Ct = function() {
            const [e,n] = (0,
            t.useState)("")
              , [r,o] = (0,
            t.useState)(0);
            return (0,
            _t.jsxs)("div", {
                className: "App",
                children: [(0,
                _t.jsx)("h1", {
                    children: "Video-Script Player with AI"
                }), (0,
                _t.jsx)(St, {
                    onCategorySelect: e=>{
                        n(e),
                        o((e=>e + 1))
                    }
                }), (0,
                _t.jsx)(kt, {
                    selectedCategory: e,
                    apiCallCount: r
                })]
            })
        }
          , Pt = e=>{
            e && e instanceof Function && n.e(453).then(n.bind(n, 453)).then((t=>{
                let {getCLS: n, getFID: r, getFCP: o, getLCP: a, getTTFB: i} = t;
                n(e),
                r(e),
                o(e),
                a(e),
                i(e)
            }
            ))
        }
        ;
        r.createRoot(document.getElementById("root")).render((0,
        _t.jsx)(t.StrictMode, {
            children: (0,
            _t.jsx)(Ct, {})
        })),
        Pt()
    }
    )()
}
)();
//# sourceMappingURL=main.1a7a07dd.js.map
