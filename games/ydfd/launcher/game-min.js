var egret; (function(b) {
    var c = function() {
        function b() {
            this._hashCode = b.hashCount++
        }
        Object.defineProperty(b.prototype, "hashCode", {
            get: function() {
                return this._hashCode
            },
            enumerable: !0,
            configurable: !0
        });
        b.hashCount = 1;
        return b
    } ();
    b.HashObject = c;
    c.prototype.__class__ = "egret.HashObject"
})(egret || (egret = {}));
var __extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(b) {
        function a(e) {
            "undefined" === typeof e && (e = 300);
            b.call(this);
            this.objectPool = [];
            this._length = 0;
            1 > e && (e = 1);
            this.autoDisposeTime = e;
            this.frameCount = 0
        }
        __extends(a, b);
        a.prototype._checkFrame = function() {
            this.frameCount--;
            0 >= this.frameCount && this.dispose()
        };
        Object.defineProperty(a.prototype, "length", {
            get: function() {
                return this._length
            },
            enumerable: !0,
            configurable: !0
        });
        a.prototype.push = function(e) {
            var h = this.objectPool; - 1 == h.indexOf(e) && (h.push(e), this._length++, 0 == this.frameCount && (this.frameCount = this.autoDisposeTime, a._callBackList.push(this)))
        };
        a.prototype.pop = function() {
            if (0 == this._length) return null;
            this._length--;
            return this.objectPool.pop()
        };
        a.prototype.dispose = function() {
            0 < this._length && (this.objectPool = [], this._length = 0);
            this.frameCount = 0;
            var e = a._callBackList,
            h = e.indexOf(this); - 1 != h && e.splice(h, 1)
        };
        a._callBackList = [];
        return a
    } (b.HashObject);
    b.Recycler = c;
    c.prototype.__class__ = "egret.Recycler"
})(egret || (egret = {})); (function(b) {
    b.__START_TIME;
    b.getTimer = function() {
        return Date.now() - b.__START_TIME
    }
})(egret || (egret = {})); (function(b) {
    b.__callLaterFunctionList = [];
    b.__callLaterThisList = [];
    b.__callLaterArgsList = [];
    b.callLater = function(c, d) {
        for (var a = [], e = 0; e < arguments.length - 2; e++) a[e] = arguments[e + 2];
        b.__callLaterFunctionList.push(c);
        b.__callLaterThisList.push(d);
        b.__callLaterArgsList.push(a)
    }
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(d) {
        function a(e, a, b) {
            "undefined" === typeof a && (a = !1);
            "undefined" === typeof b && (b = !1);
            d.call(this);
            this._eventPhase = 2;
            this._isPropagationImmediateStopped = this._isPropagationStopped = this._isDefaultPrevented = !1;
            this.isNew = !0;
            this._type = e;
            this._bubbles = a;
            this._cancelable = b
        }
        __extends(a, d);
        Object.defineProperty(a.prototype, "type", {
            get: function() {
                return this._type
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(a.prototype, "bubbles", {
            get: function() {
                return this._bubbles
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(a.prototype, "cancelable", {
            get: function() {
                return this._cancelable
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(a.prototype, "eventPhase", {
            get: function() {
                return this._eventPhase
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(a.prototype, "currentTarget", {
            get: function() {
                return this._currentTarget
            },
            enumerable: !0,
            configurable: !0
        });
        a.prototype._setCurrentTarget = function(e) {
            this._currentTarget = e
        };
        Object.defineProperty(a.prototype, "target", {
            get: function() {
                return this._target
            },
            enumerable: !0,
            configurable: !0
        });
        a.prototype.isDefaultPrevented = function() {
            return this._isDefaultPrevented
        };
        a.prototype.preventDefault = function() {
            this._cancelable && (this._isDefaultPrevented = !0)
        };
        a.prototype.stopPropagation = function() {
            this._bubbles && (this._isPropagationStopped = !0)
        };
        a.prototype.stopImmediatePropagation = function() {
            this._bubbles && (this._isPropagationImmediateStopped = !0)
        };
        a.prototype._reset = function() {
            this.isNew ? this.isNew = !1 : (this._isPropagationImmediateStopped = this._isPropagationStopped = this._isDefaultPrevented = !1, this._currentTarget = this._target = null, this._eventPhase = 2)
        };
        a._dispatchByTarget = function(e, a, r, d, c, g) {
            "undefined" === typeof c && (c = !1);
            "undefined" === typeof g && (g = !1);
            var l = e.eventRecycler;
            l || (l = e.eventRecycler = new b.Recycler);
            var m = l.pop();
            m ? m._type = r: m = new e(r);
            m._bubbles = c;
            m._cancelable = g;
            if (d) for (var n in d) m[n] = d[n],
            null !== m[n] && (d[n] = null);
            e = a.dispatchEvent(m);
            l.push(m);
            return e
        };
        a._getPropertyData = function(e) {
            var a = e._props;
            a || (a = e._props = {});
            return a
        };
        a.dispatchEvent = function(e, h, b, d) {
            "undefined" === typeof b && (b = !1);
            var c = a._getPropertyData(a);
            d && (c.data = d);
            a._dispatchByTarget(a, e, h, c, b)
        };
        a.ADDED_TO_STAGE = "addedToStage";
        a.REMOVED_FROM_STAGE = "removedFromStage";
        a.ADDED = "added";
        a.REMOVED = "removed";
        a.COMPLETE = "complete";
        a.ENTER_FRAME = "enterFrame";
        a.RENDER = "render";
        a.FINISH_RENDER = "finishRender";
        a.FINISH_UPDATE_TRANSFORM = "finishUpdateTransform";
        a.LEAVE_STAGE = "leaveStage";
        a.RESIZE = "resize";
        a.CHANGE = "change";
        return a
    } (b.HashObject);
    b.Event = c;
    c.prototype.__class__ = "egret.Event"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(d) {
        function a(e, a, b) {
            "undefined" === typeof a && (a = !1);
            "undefined" === typeof b && (b = !1);
            d.call(this, e, a, b)
        }
        __extends(a, d);
        a.dispatchIOErrorEvent = function(e) {
            b.Event._dispatchByTarget(a, e, a.IO_ERROR)
        };
        a.IO_ERROR = "ioError";
        return a
    } (b.Event);
    b.IOErrorEvent = c;
    c.prototype.__class__ = "egret.IOErrorEvent"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(d) {
        function a(e, a, b, c, f, g, l, m, n, p) {
            "undefined" === typeof a && (a = !0);
            "undefined" === typeof b && (b = !0);
            "undefined" === typeof c && (c = 0);
            "undefined" === typeof f && (f = 0);
            "undefined" === typeof g && (g = 0);
            "undefined" === typeof l && (l = !1);
            "undefined" === typeof m && (m = !1);
            "undefined" === typeof p && (p = !1);
            d.call(this, e, a, b);
            this._localY = this._localX = this._stageY = this._stageX = 0;
            this.touchPointID = c;
            this._stageX = f;
            this._stageY = g;
            this.ctrlKey = l;
            this.altKey = m;
            this.touchDown = p
        }
        __extends(a, d);
        Object.defineProperty(a.prototype, "stageX", {
            get: function() {
                return this._stageX
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(a.prototype, "stageY", {
            get: function() {
                return this._stageY
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(a.prototype, "localX", {
            get: function() {
                return this._localX
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(a.prototype, "localY", {
            get: function() {
                return this._localY
            },
            enumerable: !0,
            configurable: !0
        });
        a.prototype._setCurrentTarget = function(e) {
            d.prototype._setCurrentTarget.call(this, e);
            e instanceof b.DisplayObject && (e = e.globalToLocal(this._stageX, this._stageY, b.Point.identity), this._localX = e.x, this._localY = e.y)
        };
        a.dispatchTouchEvent = function(e, h, r, d, c, g, l, m, n) {
            "undefined" === typeof r && (r = 0);
            "undefined" === typeof d && (d = 0);
            "undefined" === typeof c && (c = 0);
            "undefined" === typeof g && (g = !1);
            "undefined" === typeof l && (l = !1);
            "undefined" === typeof m && (m = !1);
            "undefined" === typeof n && (n = !1);
            var p = b.Event._getPropertyData(a);
            p.touchPointID = r;
            p._stageX = d;
            p._stageY = c;
            p.ctrlKey = g;
            p.altKey = l;
            p.shiftKey = m;
            p.touchDown = n;
            b.Event._dispatchByTarget(a, e, h, p, !0, !0)
        };
        a.TOUCH_TAP = "touchTap";
        a.TOUCH_MOVE = "touchMove";
        a.TOUCH_BEGIN = "touchBegin";
        a.TOUCH_END = "touchEnd";
        a.TOUCH_RELEASE_OUTSIDE = "touchReleaseOutside";
        a.TOUCH_ROLL_OUT = "touchRollOut";
        a.TOUCH_ROLL_OVER = "touchRollOver";
        a.TOUCH_OUT = "touchOut";
        a.TOUCH_OVER = "touchOver";
        return a
    } (b.Event);
    b.TouchEvent = c;
    c.prototype.__class__ = "egret.TouchEvent"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(d) {
        function a(e, a, b) {
            "undefined" === typeof a && (a = !1);
            "undefined" === typeof b && (b = !1);
            d.call(this, e, a, b)
        }
        __extends(a, d);
        a.dispatchTimerEvent = function(e, h) {
            b.Event._dispatchByTarget(a, e, h)
        };
        a.TIMER = "timer";
        a.TIMER_COMPLETE = "timerComplete";
        return a
    } (b.Event);
    b.TimerEvent = c;
    c.prototype.__class__ = "egret.TimerEvent"
})(egret || (egret = {})); (function(b) {
    var c = function() {
        function b() {}
        b.CAPTURING_PHASE = 1;
        b.AT_TARGET = 2;
        b.BUBBLING_PHASE = 3;
        return b
    } ();
    b.EventPhase = c;
    c.prototype.__class__ = "egret.EventPhase"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(d) {
        function a(e) {
            "undefined" === typeof e && (e = null);
            d.call(this);
            this._eventTarget = e ? e: this
        }
        __extends(a, d);
        a.prototype.addEventListener = function(e, a, r, d, c) {
            "undefined" === typeof d && (d = !1);
            "undefined" === typeof c && (c = 0);
            "undefined" === typeof d && (d = !1);
            "undefined" === typeof c && (c = 0);
            a || b.Logger.fatal("addEventListener\u4fa6\u542c\u51fd\u6570\u4e0d\u80fd\u4e3a\u7a7a");
            d ? (this._captureEventsMap || (this._captureEventsMap = {}), d = this._captureEventsMap) : (this._eventsMap || (this._eventsMap = {}), d = this._eventsMap);
            var g = d[e];
            g || (g = d[e] = []);
            this._insertEventBin(g, a, r, c)
        };
        a.prototype._insertEventBin = function(e, a, b, d) {
            for (var c = -1,
            g = e.length,
            l = 0; l < g; l++) {
                var m = e[l];
                if (m.listener === a && m.thisObject === b) return ! 1; - 1 == c && m.priority < d && (c = l)
            }
            a = {
                listener: a,
                thisObject: b,
                priority: d
            }; - 1 != c ? e.splice(c, 0, a) : e.push(a);
            return ! 0
        };
        a.prototype.removeEventListener = function(e, a, b, d) {
            "undefined" === typeof d && (d = !1);
            if (d = d ? this._captureEventsMap: this._eventsMap) {
                var c = d[e];
                c && (this._removeEventBin(c, a, b), 0 == c.length && delete d[e])
            }
        };
        a.prototype._removeEventBin = function(e, a, b) {
            for (var d = e.length,
            c = 0; c < d; c++) {
                var g = e[c];
                if (g.listener === a && g.thisObject === b) return e.splice(c, 1),
                !0
            }
            return ! 1
        };
        a.prototype.hasEventListener = function(e) {
            return this._eventsMap && this._eventsMap[e] || this._captureEventsMap && this._captureEventsMap[e]
        };
        a.prototype.willTrigger = function(e) {
            return this.hasEventListener(e)
        };
        a.prototype.dispatchEvent = function(e) {
            e._reset();
            e._target = this._eventTarget;
            e._setCurrentTarget(this._eventTarget);
            return this._notifyListener(e)
        };
        a.prototype._notifyListener = function(e) {
            var a = 1 == e._eventPhase ? this._captureEventsMap: this._eventsMap;
            if (!a) return ! 0;
            a = a[e.type];
            if (!a) return ! 0;
            for (var a = a.concat(), b = a.length, d = 0; d < b; d++) {
                var c = a[d];
                c.listener.call(c.thisObject, e);
                if (e._isPropagationImmediateStopped) break
            }
            return ! e.isDefaultPrevented()
        };
        a.prototype.dispatchEventWith = function(e, a, d) {
            "undefined" === typeof a && (a = !1);
            b.Event.dispatchEvent(this, e, a, d)
        };
        return a
    } (b.HashObject);
    b.EventDispatcher = c;
    c.prototype.__class__ = "egret.EventDispatcher"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(d) {
        function a() {
            d.call(this);
            this.reuseEvent = new b.Event("")
        }
        __extends(a, d);
        a.prototype.run = function() {
            b.Ticker.getInstance().run();
            b.Ticker.getInstance().register(this.renderLoop, this, Number.NEGATIVE_INFINITY);
            b.Ticker.getInstance().register(this.broadcastEnterFrame, this, Number.POSITIVE_INFINITY);
            this.touchContext.run()
        };
        a.prototype.renderLoop = function(e) {
            e = this.rendererContext;
            e.clearScreen();
            if (0 < b.__callLaterFunctionList.length) {
                var a = b.__callLaterFunctionList;
                b.__callLaterFunctionList = [];
                var d = b.__callLaterThisList;
                b.__callLaterThisList = [];
                var c = b.__callLaterArgsList;
                b.__callLaterArgsList = []
            }
            this.dispatchEventWith(b.Event.RENDER);
            b.Stage._invalidateRenderFlag && (this.broadcastRender(), b.Stage._invalidateRenderFlag = !1);
            a && this.doCallLaterList(a, d, c);
            this.stage._updateTransform();
            this.dispatchEventWith(b.Event.FINISH_UPDATE_TRANSFORM);
            this.stage._draw(e);
            this.dispatchEventWith(b.Event.FINISH_RENDER)
        };
        a.prototype.broadcastEnterFrame = function(e) {
            e = this.reuseEvent;
            e._type = b.Event.ENTER_FRAME;
            this.dispatchEvent(e);
            for (var a = b.DisplayObject._enterFrameCallBackList.concat(), d = a.length, c = 0; c < d; c++) {
                var f = a[c];
                e._target = f.display;
                e._setCurrentTarget(f.display);
                f.listener.call(f.thisObject, e)
            }
            a = b.Recycler._callBackList;
            for (c = a.length - 1; 0 <= c; c--) a[c]._checkFrame()
        };
        a.prototype.broadcastRender = function() {
            var e = this.reuseEvent;
            e._type = b.Event.RENDER;
            for (var a = b.DisplayObject._renderCallBackList.concat(), d = a.length, c = 0; c < d; c++) {
                var f = a[c];
                e._target = f.display;
                e._setCurrentTarget(f.display);
                f.listener.call(f.thisObject, e)
            }
        };
        a.prototype.doCallLaterList = function(e, a, b) {
            for (var d = e.length,
            c = 0; c < d; c++) {
                var g = e[c];
                null != g && g.apply(a[c], b[c])
            }
        };
        a.DEVICE_PC = "web";
        a.DEVICE_MOBILE = "native";
        return a
    } (b.EventDispatcher);
    b.MainContext = c;
    c.prototype.__class__ = "egret.MainContext"
})(egret || (egret = {}));
var testDeviceType = function() {
    if (!this.navigator) return ! 0;
    var b = navigator.userAgent.toLowerCase();
    return - 1 != b.indexOf("mobile") || -1 != b.indexOf("android")
};
egret.MainContext.instance = new egret.MainContext;
egret.MainContext.deviceType = testDeviceType() ? egret.MainContext.DEVICE_MOBILE: egret.MainContext.DEVICE_PC; (function(b) {
    var c = function() {
        function d() {
            this._tick = this._preDrawCount = this._updateTransformPerformanceCost = this._renderPerformanceCost = this._logicPerformanceCost = this._lastTime = 0;
            this._maxDeltaTime = 500;
            this._totalDeltaTime = 0
        }
        d.getInstance = function() {
            null == d.instance && (d.instance = new d);
            return d.instance
        };
        d.prototype.run = function() {
            b.Ticker.getInstance().register(this.update, this);
            null == this._txt && (this._txt = new b.TextField, this._txt.size = 28, b.MainContext.instance.stage.addChild(this._txt));
            var a = b.MainContext.instance;
            a.addEventListener(b.Event.ENTER_FRAME, this.onEnterFrame, this);
            a.addEventListener(b.Event.RENDER, this.onStartRender, this);
            a.addEventListener(b.Event.FINISH_RENDER, this.onFinishRender, this);
            a.addEventListener(b.Event.FINISH_UPDATE_TRANSFORM, this.onFinishUpdateTransform, this)
        };
        d.prototype.onEnterFrame = function(a) {
            this._lastTime = b.getTimer()
        };
        d.prototype.onStartRender = function(a) {
            a = b.getTimer();
            this._logicPerformanceCost = a - this._lastTime;
            this._lastTime = a
        };
        d.prototype.onFinishUpdateTransform = function(a) {
            a = b.getTimer();
            this._updateTransformPerformanceCost = a - this._lastTime;
            this._lastTime = a
        };
        d.prototype.onFinishRender = function(a) {
            a = b.getTimer();
            this._renderPerformanceCost = a - this._lastTime;
            this._lastTime = a
        };
        d.prototype.update = function(a) {
            this._tick++;
            this._totalDeltaTime += a;
            if (this._totalDeltaTime >= this._maxDeltaTime) {
                a = (this._preDrawCount - 1).toString();
                var e = Math.ceil(this._logicPerformanceCost).toString() + "," + Math.ceil(this._updateTransformPerformanceCost).toString() + "," + Math.ceil(this._renderPerformanceCost).toString() + "," + Math.ceil(b.MainContext.instance.rendererContext.renderCost).toString();
                this._txt.text = "draw:" + a + "\ncost:" + e + "\nFPS:" + Math.floor(1E3 * this._tick / this._totalDeltaTime).toString();
                this._tick = this._totalDeltaTime = 0
            }
            this._preDrawCount = 0
        };
        d.prototype.onDrawImage = function() {
            this._preDrawCount++
        };
        return d
    } ();
    b.Profiler = c;
    c.prototype.__class__ = "egret.Profiler"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(d) {
        function a() {
            d.apply(this, arguments);
            this._timeScale = 1;
            this._paused = !1;
            this.callBackList = []
        }
        __extends(a, d);
        a.prototype.run = function() {
            b.__START_TIME = (new Date).getTime();
            b.MainContext.instance.deviceContext.executeMainLoop(this.update, this)
        };
        a.prototype.update = function(e) {
            var a = this.callBackList.concat(),
            b = a.length;
            e *= this._timeScale;
            e *= this._timeScale;
            for (var d = 0; d < b; d++) {
                var c = a[d];
                c.listener.call(c.thisObject, e)
            }
        };
        a.prototype.register = function(e, a, b) {
            "undefined" === typeof b && (b = 0);
            this._insertEventBin(this.callBackList, e, a, b)
        };
        a.prototype.unregister = function(e, a) {
            this._removeEventBin(this.callBackList, e, a)
        };
        a.prototype.setTimeout = function(e, a, d) {
            for (var c = [], f = 0; f < arguments.length - 3; f++) c[f] = arguments[f + 3];
            b.Logger.warning("Ticker#setTimeout\u65b9\u6cd5\u5373\u5c06\u5e9f\u5f03,\u8bf7\u4f7f\u7528egret.setTimeout");
            b.setTimeout.apply(null, [e, a, d].concat(c))
        };
        a.prototype.setTimeScale = function(e) {
            this._timeScale = e
        };
        a.prototype.getTimeScale = function() {
            return this._timeScale
        };
        a.prototype.pause = function() {
            this._paused = !0
        };
        a.prototype.resume = function() {
            this._paused = !1
        };
        a.getInstance = function() {
            null == a.instance && (a.instance = new a);
            return a.instance
        };
        return a
    } (b.EventDispatcher);
    b.Ticker = c;
    c.prototype.__class__ = "egret.Ticker"
})(egret || (egret = {})); (function(b) {
    var c = function() {
        function b() {}
        b.LEFT = "left";
        b.RIGHT = "right";
        b.CENTER = "center";
        b.JUSTIFY = "justify";
        b.CONTENT_JUSTIFY = "contentJustify";
        return b
    } ();
    b.HorizontalAlign = c;
    c.prototype.__class__ = "egret.HorizontalAlign"
})(egret || (egret = {})); (function(b) {
    var c = function() {
        function b() {}
        b.TOP = "top";
        b.BOTTOM = "bottom";
        b.MIDDLE = "middle";
        b.JUSTIFY = "justify";
        b.CONTENT_JUSTIFY = "contentJustify";
        return b
    } ();
    b.VerticalAlign = c;
    c.prototype.__class__ = "egret.VerticalAlign"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(d) {
        function a(e, a) {
            "undefined" === typeof a && (a = 0);
            d.call(this);
            this._currentCount = 0;
            this.delay = e;
            this.repeatCount = a
        }
        __extends(a, d);
        a.prototype.currentCount = function() {
            return this._currentCount
        };
        Object.defineProperty(a.prototype, "running", {
            get: function() {
                return this._running
            },
            enumerable: !0,
            configurable: !0
        });
        a.prototype.reset = function() {
            this.stop();
            this._currentCount = 0
        };
        a.prototype.start = function() {
            this._running || (this.lastTime = b.getTimer(), 0 != this._currentCount && (this._currentCount = 0), b.Ticker.getInstance().register(this.onEnterFrame, this), this._running = !0)
        };
        a.prototype.stop = function() {
            this._running && (b.Ticker.getInstance().unregister(this.onEnterFrame, this), this._running = !1)
        };
        a.prototype.onEnterFrame = function(e) {
            e = b.getTimer();
            e - this.lastTime > this.delay && (this.lastTime = e, this._currentCount++, b.TimerEvent.dispatchTimerEvent(this, b.TimerEvent.TIMER), 0 < this.repeatCount && this._currentCount >= this.repeatCount && (this.stop(), b.TimerEvent.dispatchTimerEvent(this, b.TimerEvent.TIMER_COMPLETE)))
        };
        return a
    } (b.EventDispatcher);
    b.Timer = c;
    c.prototype.__class__ = "egret.Timer"
})(egret || (egret = {})); (function(b) {
    b.getQualifiedClassName = function(b) {
        b = b.prototype ? b.prototype: b.__proto__;
        if (b.hasOwnProperty("__class__")) return b.__class__;
        var d = b.constructor.toString(),
        a = d.indexOf("("),
        d = d.substring(9, a);
        return b.__class__ = d
    }
})(egret || (egret = {})); (function(b) {
    var c = {};
    b.getDefinitionByName = function(b) {
        if (!b) return null;
        var a = c[b];
        if (a) return a;
        for (var e = b.split("."), h = e.length, a = __global, r = 0; r < h; r++) if (a = a[e[r]], !a) return null;
        return c[b] = a
    }
})(egret || (egret = {}));
var __global = __global || this; (function(b) {
    function c(e) {
        for (var a in d) {
            var b = d[a];
            b.delay -= e;
            0 >= b.delay && (b.listener.apply(b.thisObject, b.params), delete d[a])
        }
    }
    var d = {},
    a = 0;
    b.setTimeout = function(e, h, r) {
        for (var k = [], f = 0; f < arguments.length - 3; f++) k[f] = arguments[f + 3];
        k = {
            listener: e,
            thisObject: h,
            delay: r,
            params: k
        };
        0 == a && b.Ticker.getInstance().register(c, null);
        a++;
        d[a] = k;
        return a
    };
    b.clearTimeout = function(e) {
        delete d[e]
    }
})(egret || (egret = {})); (function(b) {
    b.hasDefinition = function(c) {
        return b.getDefinitionByName(c) ? !0 : !1
    }
})(egret || (egret = {})); (function(b) {
    b.toColorString = function(b) {
        if (isNaN(b) || 0 > b) b = 0;
        16777215 < b && (b = 16777215);
        for (b = b.toString(16).toUpperCase(); 6 > b.length;) b = "0" + b;
        return "#" + b
    }
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(d) {
        function a(e, a, b, c, f, g) {
            "undefined" === typeof e && (e = 1);
            "undefined" === typeof a && (a = 0);
            "undefined" === typeof b && (b = 0);
            "undefined" === typeof c && (c = 1);
            "undefined" === typeof f && (f = 0);
            "undefined" === typeof g && (g = 0);
            d.call(this);
            this.a = e;
            this.b = a;
            this.c = b;
            this.d = c;
            this.tx = f;
            this.ty = g
        }
        __extends(a, d);
        a.prototype.prepend = function(e, a, b, d, c, g) {
            var l = this.tx;
            if (1 != e || 0 != a || 0 != b || 1 != d) {
                var m = this.a,
                n = this.c;
                this.a = m * e + this.b * b;
                this.b = m * a + this.b * d;
                this.c = n * e + this.d * b;
                this.d = n * a + this.d * d
            }
            this.tx = l * e + this.ty * b + c;
            this.ty = l * a + this.ty * d + g;
            return this
        };
        a.prototype.append = function(e, a, b, d, c, g) {
            var l = this.a,
            m = this.b,
            n = this.c,
            p = this.d;
            this.a = e * l + a * n;
            this.b = e * m + a * p;
            this.c = b * l + d * n;
            this.d = b * m + d * p;
            this.tx = c * l + g * n + this.tx;
            this.ty = c * m + g * p + this.ty;
            return this
        };
        a.prototype.prependMatrix = function(e) {
            this.prepend(e.a, e.b, e.c, e.d, e.tx, e.ty);
            return this
        };
        a.prototype.appendMatrix = function(e) {
            this.append(e.a, e.b, e.c, e.d, e.tx, e.ty);
            return this
        };
        a.prototype.prependTransform = function(e, h, b, d, c, g, l, m, n) {
            if (c % 360) {
                var p = c * a.DEG_TO_RAD;
                c = Math.cos(p);
                p = Math.sin(p)
            } else c = 1,
            p = 0;
            if (m || n) this.tx -= m,
            this.ty -= n;
            g || l ? (g *= a.DEG_TO_RAD, l *= a.DEG_TO_RAD, this.prepend(c * b, p * b, -p * d, c * d, 0, 0), this.prepend(Math.cos(l), Math.sin(l), -Math.sin(g), Math.cos(g), e, h)) : this.prepend(c * b, p * b, -p * d, c * d, e, h);
            return this
        };
        a.prototype.appendTransform = function(e, h, b, d, c, g, l, m, n) {
            if (c % 360) {
                var p = c * a.DEG_TO_RAD;
                c = Math.cos(p);
                p = Math.sin(p)
            } else c = 1,
            p = 0;
            g || l ? (g *= a.DEG_TO_RAD, l *= a.DEG_TO_RAD, this.append(Math.cos(l), Math.sin(l), -Math.sin(g), Math.cos(g), e, h), this.append(c * b, p * b, -p * d, c * d, 0, 0)) : this.append(c * b, p * b, -p * d, c * d, e, h);
            if (m || n) this.tx -= m * this.a + n * this.c,
            this.ty -= m * this.b + n * this.d;
            return this
        };
        a.prototype.rotate = function(e) {
            var a = Math.cos(e);
            e = Math.sin(e);
            var b = this.a,
            d = this.c,
            c = this.tx;
            this.a = b * a - this.b * e;
            this.b = b * e + this.b * a;
            this.c = d * a - this.d * e;
            this.d = d * e + this.d * a;
            this.tx = c * a - this.ty * e;
            this.ty = c * e + this.ty * a;
            return this
        };
        a.prototype.skew = function(e, h) {
            e *= a.DEG_TO_RAD;
            h *= a.DEG_TO_RAD;
            this.append(Math.cos(h), Math.sin(h), -Math.sin(e), Math.cos(e), 0, 0);
            return this
        };
        a.prototype.scale = function(e, a) {
            this.a *= e;
            this.d *= a;
            this.c *= e;
            this.b *= a;
            this.tx *= e;
            this.ty *= a;
            return this
        };
        a.prototype.translate = function(e, a) {
            this.tx += e;
            this.ty += a;
            return this
        };
        a.prototype.identity = function() {
            this.a = this.d = 1;
            this.b = this.c = this.tx = this.ty = 0;
            return this
        };
        a.prototype.invert = function() {
            var e = this.a,
            a = this.b,
            b = this.c,
            d = this.d,
            c = this.tx,
            g = e * d - a * b;
            this.a = d / g;
            this.b = -a / g;
            this.c = -b / g;
            this.d = e / g;
            this.tx = (b * this.ty - d * c) / g;
            this.ty = -(e * this.ty - a * c) / g;
            return this
        };
        a.transformCoords = function(e, a, d) {
            var c = b.Point.identity;
            c.x = e.a * a + e.c * d + e.tx;
            c.y = e.d * d + e.b * a + e.ty;
            return c
        };
        a.prototype.toArray = function(e) {
            this.array || (this.array = new Float32Array(9));
            e ? (this.array[0] = this.a, this.array[1] = this.b, this.array[2] = 0, this.array[3] = this.c, this.array[4] = this.d, this.array[5] = 0, this.array[6] = this.tx, this.array[7] = this.ty) : (this.array[0] = this.a, this.array[1] = this.b, this.array[2] = this.tx, this.array[3] = this.c, this.array[4] = this.d, this.array[5] = this.ty, this.array[6] = 0, this.array[7] = 0);
            this.array[8] = 1;
            return this.array
        };
        a.identity = new a;
        a.DEG_TO_RAD = Math.PI / 180;
        return a
    } (b.HashObject);
    b.Matrix = c;
    c.prototype.__class__ = "egret.Matrix"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(b) {
        function a(e, a) {
            "undefined" === typeof e && (e = 0);
            "undefined" === typeof a && (a = 0);
            b.call(this);
            this.x = e;
            this.y = a
        }
        __extends(a, b);
        a.prototype.clone = function() {
            return new a(this.x, this.y)
        };
        a.prototype.equals = function(e) {
            return this.x == e.x && this.y == e.y
        };
        a.distance = function(e, a) {
            return Math.sqrt((e.x - a.x) * (e.x - a.x) + (e.y - a.y) * (e.y - a.y))
        };
        a.identity = new a(0, 0);
        return a
    } (b.HashObject);
    b.Point = c;
    c.prototype.__class__ = "egret.Point"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(b) {
        function a(e, a, c, k) {
            "undefined" === typeof e && (e = 0);
            "undefined" === typeof a && (a = 0);
            "undefined" === typeof c && (c = 0);
            "undefined" === typeof k && (k = 0);
            b.call(this);
            this.x = e;
            this.y = a;
            this.width = c;
            this.height = k
        }
        __extends(a, b);
        Object.defineProperty(a.prototype, "right", {
            get: function() {
                return this.x + this.width
            },
            set: function(e) {
                this.width = e - this.x
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(a.prototype, "bottom", {
            get: function() {
                return this.y + this.height
            },
            set: function(e) {
                this.height = e - this.y
            },
            enumerable: !0,
            configurable: !0
        });
        a.prototype.initialize = function(e, a, b, d) {
            this.x = e;
            this.y = a;
            this.width = b;
            this.height = d;
            return this
        };
        a.prototype.contains = function(e, a) {
            return this.x <= e && this.x + this.width >= e && this.y <= a && this.y + this.height >= a
        };
        a.prototype.intersects = function(e) {
            return this.contains(e.x, e.y) || this.contains(e.x, e.bottom) || this.contains(e.right, e.y) || this.contains(e.right, e.bottom) ? !0 : !1
        };
        a.prototype.clone = function() {
            return new a(this.x, this.y, this.width, this.height)
        };
        a.prototype.containsPoint = function(e) {
            return this.x < e.x && this.x + this.width > e.x && this.y < e.y && this.y + this.height > e.y ? !0 : !1
        };
        a.identity = new a(0, 0, 0, 0);
        return a
    } (b.HashObject);
    b.Rectangle = c;
    c.prototype.__class__ = "egret.Rectangle"
})(egret || (egret = {})); (function(b) {
    var c = function() {
        function d() {}
        d.fatal = function(a, e) {
            "undefined" === typeof e && (e = null);
            b.Logger.traceToConsole("Fatal", a, e);
            throw Error(b.Logger.getTraceCode("Fatal", a, e));
        };
        d.info = function(a, e) {
            "undefined" === typeof e && (e = null);
            b.Logger.traceToConsole("Info", a, e)
        };
        d.warning = function(a, e) {
            "undefined" === typeof e && (e = null);
            b.Logger.traceToConsole("Warning", a, e)
        };
        d.traceToConsole = function(a, e, h) {
            console.log(b.Logger.getTraceCode(a, e, h))
        };
        d.getTraceCode = function(a, e, h) {
            return "[" + a + "]" + e + ":" + (null == h ? "": h)
        };
        return d
    } ();
    b.Logger = c;
    c.prototype.__class__ = "egret.Logger"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(d) {
        function a() {
            d.call(this);
            this._isSupportDOMParser = this._xmlDict = this._parser = null;
            this._xmlDict = {};
            window.DOMParser ? (this._isSupportDOMParser = !0, this._parser = new DOMParser) : this._isSupportDOMParser = !1
        }
        __extends(a, d);
        a.getInstance = function() {
            a._instance || (a._instance = new a);
            return a._instance
        };
        a.prototype.parserXML = function(e) {
            for (var a = 0;
            "\n" == e.charAt(a) || "\t" == e.charAt(a) || "\r" == e.charAt(a) || " " == e.charAt(a);) a++;
            0 != a && (e = e.substring(a, e.length));
            this._isSupportDOMParser ? a = this._parser.parseFromString(e, "text/xml") : (a = new ActiveXObject("Microsoft.XMLDOM"), a.async = "false", a.loadXML(e));
            null == a && b.Logger.info("xml not found!");
            return a
        };
        a._instance = null;
        return a
    } (b.HashObject);
    b.SAXParser = c;
    c.prototype.__class__ = "egret.SAXParser"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(e) {
        function h() {
            e.call(this);
            this._designHeight = this._designWidth = 0;
            this._scaleY = this._scaleX = 1;
            var a = document.getElementById(h.canvas_name),
            b = a.height;
            this._designWidth = a.width;
            this._designHeight = b
        }
        __extends(h, e);
        h.getInstance = function() {
            null == h.instance && (a.initialize(), h.instance = new h);
            return h.instance
        };
        h.prototype.setDesignSize = function(e, a, h) {
            this._designWidth = e;
            this._designHeight = a;
            h && (b.Logger.warning("\u8be5\u65b9\u6cd5\u76ee\u524d\u4e0d\u5e94\u4f20\u5165 resolutionPolicy \u53c2\u6570\uff0c\u8bf7\u5728 docs/1.0_Final_ReleaseNote\u4e2d\u67e5\u770b\u5982\u4f55\u5347\u7ea7"), this._setResolutionPolicy(h))
        };
        h.prototype._setResolutionPolicy = function(e) {
            this._resolutionPolicy = e;
            e.init(this);
            e._apply(this, this._designWidth, this._designHeight)
        };
        h.prototype.getScaleX = function() {
            return this._scaleX
        };
        h.prototype.getScaleY = function() {
            return this._scaleY
        };
        h.canvas_name = "gameCanvas";
        h.canvas_div_name = "gameDiv";
        return h
    } (b.HashObject);
    b.StageDelegate = c;
    c.prototype.__class__ = "egret.StageDelegate";
    var d = function() {
        function e(a, h) {
            this.setContainerStrategy(a);
            this.setContentStrategy(h)
        }
        e.prototype.init = function(e) {
            this._containerStrategy.init(e);
            this._contentStrategy.init(e)
        };
        e.prototype._apply = function(e, a, h) {
            this._containerStrategy._apply(e, a, h);
            this._contentStrategy._apply(e, a, h)
        };
        e.prototype.setContainerStrategy = function(e) {
            e instanceof a && (this._containerStrategy = e)
        };
        e.prototype.setContentStrategy = function(e) {
            e instanceof h && (this._contentStrategy = e)
        };
        return e
    } ();
    b.ResolutionPolicy = d;
    d.prototype.__class__ = "egret.ResolutionPolicy";
    var a = function() {
        function a() {}
        a.initialize = function() {
            a.EQUAL_TO_FRAME = new e
        };
        a.prototype.init = function(e) {};
        a.prototype._apply = function(e, a, h) {};
        a.prototype._setupContainer = function() {
            var e = document.body,
            a;
            e && (a = e.style) && (a.paddingTop = a.paddingTop || "0px", a.paddingRight = a.paddingRight || "0px", a.paddingBottom = a.paddingBottom || "0px", a.paddingLeft = a.paddingLeft || "0px", a.borderTop = a.borderTop || "0px", a.borderRight = a.borderRight || "0px", a.borderBottom = a.borderBottom || "0px", a.borderLeft = a.borderLeft || "0px", a.marginTop = a.marginTop || "0px", a.marginRight = a.marginRight || "0px", a.marginBottom = a.marginBottom || "0px", a.marginLeft = a.marginLeft || "0px")
        };
        return a
    } ();
    b.ContainerStrategy = a;
    a.prototype.__class__ = "egret.ContainerStrategy";
    var e = function(e) {
        function a() {
            e.apply(this, arguments)
        }
        __extends(a, e);
        a.prototype._apply = function(e) {
            this._setupContainer()
        };
        return a
    } (a);
    b.EqualToFrame = e;
    e.prototype.__class__ = "egret.EqualToFrame";
    var h = function() {
        function e() {}
        e.prototype.init = function(e) {};
        e.prototype._apply = function(e, a, h) {};
        return e
    } ();
    b.ContentStrategy = h;
    h.prototype.__class__ = "egret.ContentStrategy";
    d = function(e) {
        function a(h) {
            "undefined" === typeof h && (h = 0);
            e.call(this);
            this.minWidth = h
        }
        __extends(a, e);
        a.prototype._apply = function(e, a, h) {
            a = document.getElementById(c.canvas_name);
            var b = document.getElementById(c.canvas_div_name),
            d = document.documentElement.clientWidth,
            r = document.documentElement.clientHeight,
            k = r / h,
            q = d / k,
            s = 1;
            0 != this.minWidth && (s = Math.min(1, q / this.minWidth));
            a.width = q / s;
            a.height = h;
            a.style.width = d + "px";
            a.style.height = r * s + "px";
            b.style.width = d + "px";
            b.style.height = r * s + "px";
            e._scaleX = k * s;
            e._scaleY = k * s
        };
        return a
    } (h);
    b.FixedHeight = d;
    d.prototype.__class__ = "egret.FixedHeight";
    d = function(e) {
        function a(h) {
            "undefined" === typeof h && (h = 0);
            e.call(this);
            this.minHeight = h
        }
        __extends(a, e);
        a.prototype._apply = function(e, a, h) {
            h = document.getElementById(c.canvas_name);
            var b = document.getElementById(c.canvas_div_name),
            d = document.documentElement.clientWidth,
            r = document.documentElement.clientHeight,
            k = d / a,
            q = r / k,
            s = 1;
            0 != this.minHeight && (s = Math.min(1, q / this.minHeight));
            h.width = a;
            h.height = q / s;
            h.style.width = d * s + "px";
            h.style.height = r + "px";
            b.style.width = d * s + "px";
            b.style.height = r + "px";
            e._scaleX = k * s;
            e._scaleY = k * s
        };
        return a
    } (h);
    b.FixedWidth = d;
    d.prototype.__class__ = "egret.FixedWidth";
    d = function(e) {
        function a(h, b) {
            e.call(this);
            this.width = h;
            this.height = b
        }
        __extends(a, e);
        a.prototype._apply = function(e, a, h) {
            h = document.getElementById(c.canvas_name);
            var b = document.getElementById(c.canvas_div_name),
            d = this.width,
            r = this.height,
            k = d / a;
            h.width = a;
            h.height = r / k;
            h.style.width = d + "px";
            h.style.height = r + "px";
            b.style.width = d + "px";
            b.style.height = r + "px";
            e._scaleX = k;
            e._scaleY = k
        };
        return a
    } (h);
    b.FixedSize = d;
    d.prototype.__class__ = "egret.FixedSize";
    d = function(e) {
        function a() {
            e.call(this)
        }
        __extends(a, e);
        a.prototype._apply = function(e, a, h) {
            a = document.getElementById(c.canvas_name);
            a.style.width = a.width + "px";
            a.style.height = a.height + "px";
            e._scaleX = 1;
            e._scaleY = 1
        };
        return a
    } (h);
    b.NoScale = d;
    d.prototype.__class__ = "egret.NoScale"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(d) {
        function a() {
            d.call(this);
            this._originalData = {};
            this._drawAreaList = []
        }
        __extends(a, d);
        a.getInstance = function() {
            null == a.instance && (a.instance = new a);
            return a.instance
        };
        a.prototype.addDrawArea = function(e) {
            this._drawAreaList.push(e)
        };
        a.prototype.clearDrawArea = function() {
            this._drawAreaList = []
        };
        a.prototype.drawImage = function(e, a, d, c, f, g, l, m, n, p) {
            l = l || 0;
            m = m || 0;
            var t = a._texture_to_render;
            if (null != t && 0 != g && 0 != f && 0 != n && 0 != p) if (a._worldBounds) {
                var q = this._originalData;
                q.sourceX = d;
                q.sourceY = c;
                q.sourceWidth = f;
                q.sourceHeight = g;
                q.destX = l;
                q.destY = m;
                q.destWidth = n;
                q.destHeight = p;
                for (var s = this.getDrawAreaList(), u = 0; u < s.length; u++) {
                    var v = s[u];
                    if (!this.ignoreRender(a, v, q.destX, q.destY)) {
                        if (0 != this._drawAreaList.length) if (0 != a._worldTransform.b || 0 != a._worldTransform.c) {
                            if (a._worldBounds.x + q.destX < v.x || a._worldBounds.y + q.destY < v.y || a._worldBounds.x + a._worldBounds.width + q.destX > v.x + v.width || a._worldBounds.y + a._worldBounds.height + q.destY > v.y + v.height) {
                                b.Logger.fatal("\u8bf7\u4e0d\u8981\u8ba9\u5e26\u6709\u65cb\u8f6c\u548c\u659c\u5207\u7684\u663e\u793a\u5bf9\u8c61\u8de8\u8fc7\u91cd\u7ed8\u533a\u57df");
                                break
                            }
                        } else {
                            var x = a._worldTransform.a,
                            y = a._worldTransform.d,
                            w;
                            a._worldBounds.x + q.destX < v.x && (w = (v.x - a._worldBounds.x) / x - q.destX, d += w / (n / f), f -= w / (n / f), n -= w, l += w);
                            a._worldBounds.y + q.destY < v.y && (w = (v.y - a._worldBounds.y) / y - q.destY, c += w / (p / g), g -= w / (p / g), p -= w, m += w);
                            a._worldBounds.x + a._worldBounds.width + q.destX > v.x + v.width && (w = (a._worldBounds.x + a._worldBounds.width - v.x - v.width) / x + q.destX, f -= w / (n / f), n -= w);
                            a._worldBounds.y + a._worldBounds.height + q.destY > v.y + v.height && (w = (a._worldBounds.y + a._worldBounds.height - v.y - v.height) / y + q.destY, g -= w / (p / g), p -= w)
                        }
                        e.drawImage(t, d, c, f, g, l, m, n, p)
                    }
                }
            } else e.drawImage(t, d, c, f, g, l, m, n, p)
        };
        a.prototype.ignoreRender = function(e, a, b, d) {
            var c = e._worldBounds;
            b *= e._worldTransform.a;
            d *= e._worldTransform.d;
            return c.x + c.width + b <= a.x || c.x + b >= a.x + a.width || c.y + c.height + d <= a.y || c.y + d >= a.y + a.height ? !0 : !1
        };
        a.prototype.getDrawAreaList = function() {
            var e;
            0 == this._drawAreaList.length ? (this._defaultDrawAreaList || (this._defaultDrawAreaList = [new b.Rectangle(0, 0, b.MainContext.instance.stage.stageWidth, b.MainContext.instance.stage.stageHeight)]), e = this._defaultDrawAreaList) : e = this._drawAreaList;
            return e
        };
        return a
    } (b.HashObject);
    b.RenderFilter = c;
    c.prototype.__class__ = "egret.RenderFilter"
})(egret || (egret = {})); (function(b) {
    var c = function() {
        function d() {}
        d.mapClass = function(a, e, h) {
            "undefined" === typeof h && (h = "");
            a = this.getKey(a) + "#" + h;
            this.mapClassDic[a] = e
        };
        d.getKey = function(a) {
            return "string" == typeof a ? a: b.getQualifiedClassName(a)
        };
        d.mapValue = function(a, e, h) {
            "undefined" === typeof h && (h = "");
            a = this.getKey(a) + "#" + h;
            this.mapValueDic[a] = e
        };
        d.hasMapRule = function(a, e) {
            "undefined" === typeof e && (e = "");
            var h = this.getKey(a) + "#" + e;
            return this.mapValueDic[h] || this.mapClassDic[h] ? !0 : !1
        };
        d.getInstance = function(a, e) {
            "undefined" === typeof e && (e = "");
            var h = this.getKey(a) + "#" + e;
            if (this.mapValueDic[h]) return this.mapValueDic[h];
            var b = this.mapClassDic[h];
            if (b) return b = new b,
            this.mapValueDic[h] = b,
            delete this.mapClassDic[h],
            b;
            throw Error("\u8c03\u7528\u4e86\u672a\u914d\u7f6e\u7684\u6ce8\u5165\u89c4\u5219:" + h + "\u3002 \u8bf7\u5148\u5728\u9879\u76ee\u521d\u59cb\u5316\u91cc\u914d\u7f6e\u6307\u5b9a\u7684\u6ce8\u5165\u89c4\u5219\uff0c\u518d\u8c03\u7528\u5bf9\u5e94\u5355\u4f8b\u3002");
        };
        d.mapClassDic = {};
        d.mapValueDic = {};
        return d
    } ();
    b.Injector = c;
    c.prototype.__class__ = "egret.Injector"
})(egret || (egret = {})); (function(b) {
    var c = function() {
        function b() {}
        b.NORMAL = "normal";
        b.ADD = "add";
        b.LAYER = "layer";
        return b
    } ();
    b.BlendMode = c;
    c.prototype.__class__ = "egret.BlendMode"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(d) {
        function a() {
            d.call(this);
            this._sizeDirty = this._normalDirty = !0;
            this._parent = null;
            this._cacheAsBitmap = !1;
            this._y = this._x = 0;
            this._scaleY = this._scaleX = 1;
            this._anchorY = this._anchorX = this._anchorOffsetY = this._anchorOffsetX = 0;
            this._visible = !0;
            this._rotation = 0;
            this._alpha = 1;
            this._skewY = this._skewX = 0;
            this._hasHeightSet = this._hasWidthSet = !1;
            this.worldAlpha = 1;
            this._rectH = this._rectW = 0;
            this._worldTransform = new b.Matrix;
            this._cacheBounds = new b.Rectangle(0, 0, 0, 0)
        }
        __extends(a, d);
        a.prototype._setDirty = function() {
            this._normalDirty = !0
        };
        a.prototype.getDirty = function() {
            return this._normalDirty || this._sizeDirty
        };
        a.prototype._setParentSizeDirty = function() { ! this.parent || this.parent._hasWidthSet || this.parent._hasHeightSet || this.parent._setSizeDirty()
        };
        a.prototype._setSizeDirty = function() {
            this._sizeDirty || (this._sizeDirty = !0, this._setDirty(), this._setParentSizeDirty())
        };
        a.prototype._clearDirty = function() {
            this._normalDirty = !1
        };
        a.prototype._clearSizeDirty = function() {
            this._sizeDirty = !1
        };
        Object.defineProperty(a.prototype, "parent", {
            get: function() {
                return this._parent
            },
            enumerable: !0,
            configurable: !0
        });
        a.prototype._parentChanged = function(e) {
            this._parent = e
        };
        Object.defineProperty(a.prototype, "x", {
            get: function() {
                return this._x
            },
            set: function(e) {
                b.NumberUtils.isNumber(e) && (this._x = e, this._setDirty(), this._setParentSizeDirty())
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(a.prototype, "y", {
            get: function() {
                return this._y
            },
            set: function(e) {
                b.NumberUtils.isNumber(e) && (this._y = e, this._setDirty(), this._setParentSizeDirty())
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(a.prototype, "scaleX", {
            get: function() {
                return this._scaleX
            },
            set: function(e) {
                b.NumberUtils.isNumber(e) && (this._scaleX = e, this._setDirty(), this._setParentSizeDirty())
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(a.prototype, "scaleY", {
            get: function() {
                return this._scaleY
            },
            set: function(e) {
                b.NumberUtils.isNumber(e) && (this._scaleY = e, this._setDirty(), this._setParentSizeDirty())
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(a.prototype, "anchorOffsetX", {
            get: function() {
                return this._anchorOffsetX
            },
            set: function(e) {
                b.NumberUtils.isNumber(e) && (this._anchorOffsetX = e, this._setDirty(), this._setParentSizeDirty())
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(a.prototype, "anchorOffsetY", {
            get: function() {
                return this._anchorOffsetY
            },
            set: function(e) {
                b.NumberUtils.isNumber(e) && (this._anchorOffsetY = e, this._setDirty(), this._setParentSizeDirty())
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(a.prototype, "anchorX", {
            get: function() {
                return this._anchorX
            },
            set: function(e) {
                b.NumberUtils.isNumber(e) && (this._anchorX = e, this._setDirty(), this._setParentSizeDirty())
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(a.prototype, "anchorY", {
            get: function() {
                return this._anchorY
            },
            set: function(e) {
                b.NumberUtils.isNumber(e) && (this._anchorY = e, this._setDirty(), this._setParentSizeDirty())
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(a.prototype, "visible", {
            get: function() {
                return this._visible
            },
            set: function(e) {
                this._visible = e;
                this._setSizeDirty()
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(a.prototype, "rotation", {
            get: function() {
                return this._rotation
            },
            set: function(e) {
                b.NumberUtils.isNumber(e) && (this._rotation = e, this._setSizeDirty())
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(a.prototype, "alpha", {
            get: function() {
                return this._alpha
            },
            set: function(e) {
                b.NumberUtils.isNumber(e) && (this._alpha = e, this._setDirty())
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(a.prototype, "skewX", {
            get: function() {
                return this._skewX
            },
            set: function(e) {
                b.NumberUtils.isNumber(e) && (this._skewX = e, this._setSizeDirty())
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(a.prototype, "skewY", {
            get: function() {
                return this._skewY
            },
            set: function(e) {
                b.NumberUtils.isNumber(e) && (this._skewY = e, this._setSizeDirty())
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(a.prototype, "touchEnabled", {
            get: function() {
                return this._touchEnabled
            },
            set: function(e) {
                this._touchEnabled = e
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(a.prototype, "scrollRect", {
            get: function() {
                return this._scrollRect
            },
            set: function(e) {
                this._scrollRect = e;
                this._setSizeDirty()
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(a.prototype, "measuredWidth", {
            get: function() {
                return this._measureBounds().width
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(a.prototype, "measuredHeight", {
            get: function() {
                return this._measureBounds().height
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(a.prototype, "explicitWidth", {
            get: function() {
                return this._explicitWidth
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(a.prototype, "explicitHeight", {
            get: function() {
                return this._explicitHeight
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(a.prototype, "width", {
            get: function() {
                return this._getSize(b.Rectangle.identity).width
            },
            set: function(e) {
                this._setWidth(e)
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(a.prototype, "height", {
            get: function() {
                return this._getSize(b.Rectangle.identity).height
            },
            set: function(e) {
                this._setHeight(e)
            },
            enumerable: !0,
            configurable: !0
        });
        a.prototype._setWidth = function(e) {
            this._setSizeDirty();
            this._explicitWidth = e;
            this._hasWidthSet = b.NumberUtils.isNumber(e)
        };
        a.prototype._setHeight = function(e) {
            this._setSizeDirty();
            this._explicitHeight = e;
            this._hasHeightSet = b.NumberUtils.isNumber(e)
        };
        a.prototype._draw = function(e) {
            if (this.visible && !this.drawCacheTexture(e)) {
                e.setAlpha(this.worldAlpha, this.blendMode);
                e.setTransform(this._worldTransform);
                var a = this.mask || this._scrollRect;
                a && e.pushMask(a);
                this._render(e);
                a && e.popMask()
            }
            this.destroyCacheBounds()
        };
        a.prototype.drawCacheTexture = function(e) {
            if (this._cacheAsBitmap) {
                var a = this._texture_to_render,
                d = a._offsetX,
                c = a._offsetY,
                f = a._textureWidth,
                a = a._textureHeight;
                this._updateTransform();
                e.setAlpha(this.worldAlpha, this.blendMode);
                e.setTransform(this._worldTransform);
                var g = b.MainContext.instance.rendererContext.texture_scale_factor;
                b.RenderFilter.getInstance().drawImage(e, this, 0, 0, f * g, a * g, d, c, f, a);
                return ! 0
            }
            return ! 1
        };
        a.prototype._updateTransform = function() {
            this._worldTransform.identity().appendMatrix(this._parent._worldTransform);
            var e = this._getOffsetPoint();
            this._worldTransform.appendTransform(this._x, this._y, this._scaleX, this._scaleY, this._rotation, this._skewX, this._skewY, e.x, e.y);
            this._scrollRect && this._worldTransform.append(1, 0, 0, 1, -this._scrollRect.x, -this._scrollRect.y);
            this.worldAlpha = this._parent.worldAlpha * this._alpha
        };
        a.prototype._render = function(e) {};
        a.prototype.getBounds = function(e) {
            var a = this._measureBounds(),
            d = this._hasWidthSet ? this._explicitWidth: a.width,
            c = this._hasHeightSet ? this._explicitHeight: a.height,
            f = a.x,
            a = a.y,
            g,
            l;
            0 != this._anchorX || 0 != this._anchorY ? (g = d * this._anchorX, l = c * this._anchorY) : (g = this._anchorOffsetX, l = this._anchorOffsetY);
            this._cacheBounds.initialize(f - g, a - l, d, c);
            d = this._cacheBounds;
            e || (e = new b.Rectangle);
            return e.initialize(d.x, d.y, d.width, d.height)
        };
        a.prototype.destroyCacheBounds = function() {
            this._cacheBounds.x = 0;
            this._cacheBounds.y = 0;
            this._cacheBounds.width = 0;
            this._cacheBounds.height = 0
        };
        a.prototype._getConcatenatedMatrix = function() {
            for (var e = a.identityMatrixForGetConcatenated.identity(), h = this; null != h;) {
                if (0 != h._anchorX || 0 != h._anchorY) {
                    var d = h._getSize(b.Rectangle.identity);
                    e.prependTransform(h._x, h._y, h._scaleX, h._scaleY, h._rotation, h._skewX, h._skewY, d.width * h._anchorX, d.height * h._anchorY)
                } else e.prependTransform(h._x, h._y, h._scaleX, h._scaleY, h._rotation, h._skewX, h._skewY, h._anchorOffsetX, h._anchorOffsetY);
                h = h._parent
            }
            return e
        };
        a.prototype.localToGlobal = function(e, a, d) {
            "undefined" === typeof e && (e = 0);
            "undefined" === typeof a && (a = 0);
            var c = this._getConcatenatedMatrix();
            c.append(1, 0, 0, 1, e, a);
            d || (d = new b.Point);
            d.x = c.tx;
            d.y = c.ty;
            return d
        };
        a.prototype.globalToLocal = function(e, a, d) {
            "undefined" === typeof e && (e = 0);
            "undefined" === typeof a && (a = 0);
            var c = this._getConcatenatedMatrix();
            c.invert();
            c.append(1, 0, 0, 1, e, a);
            d || (d = new b.Point);
            d.x = c.tx;
            d.y = c.ty;
            return d
        };
        a.prototype.hitTest = function(e, a, d) {
            "undefined" === typeof d && (d = !1);
            if (!this.visible || !d && !this._touchEnabled) return null;
            d = this._getSize(b.Rectangle.identity);
            return 0 <= e && e < d.width && 0 <= a && a < d.height ? this.mask || this._scrollRect ? this._scrollRect && e < this._scrollRect.width && a < this._scrollRect.height || this.mask && this.mask.x <= e && e < this.mask.x + this.mask.width && this.mask.y <= a && a < this.mask.y + this.mask.height ? this: null: this: null
        };
        a.prototype.hitTestPoint = function(e, a, d) {
            e = this.globalToLocal(e, a);
            return d ? (this._hitTestPointTexture || (this._hitTestPointTexture = new b.RenderTexture), d = this._hitTestPointTexture, d.drawToTexture(this), 0 != d.getPixel32(e.x - this._hitTestPointTexture._offsetX, e.y - this._hitTestPointTexture._offsetY)[3] ? !0 : !1) : !!this.hitTest(e.x, e.y, !0)
        };
        a.prototype._getMatrix = function() {
            var a = b.Matrix.identity.identity(),
            h = this._getOffsetPoint();
            a.appendTransform(this._x, this._y, this._scaleX, this._scaleY, this._rotation, this._skewX, this._skewY, h.x, h.y);
            return a
        };
        a.prototype._getSize = function(a) {
            return this._hasHeightSet && this._hasWidthSet ? a.initialize(0, 0, this._explicitWidth, this._explicitHeight) : this._measureSize(b.Rectangle.identity)
        };
        a.prototype._measureSize = function(a) {
            this._sizeDirty ? (a = this._measureBounds(), this._rectW = a.width, this._rectH = a.height, this._clearSizeDirty()) : (a.width = this._rectW, a.height = this._rectH);
            return a
        };
        a.prototype._measureBounds = function() {
            return b.Rectangle.identity.initialize(0, 0, 0, 0)
        };
        a.prototype._getOffsetPoint = function() {
            var a = this._anchorOffsetX,
            h = this._anchorOffsetY;
            if (0 != this._anchorX || 0 != this._anchorY) h = this._getSize(b.Rectangle.identity),
            a = this._anchorX * h.width,
            h = this._anchorY * h.height;
            var d = b.Point.identity;
            d.x = a;
            d.y = h;
            return d
        };
        a.prototype._onAddToStage = function() {
            this._stage = b.MainContext.instance.stage;
            b.DisplayObjectContainer.__EVENT__ADD_TO_STAGE_LIST.push(this)
        };
        a.prototype._onRemoveFromStage = function() {
            this._stage = null;
            b.DisplayObjectContainer.__EVENT__REMOVE_FROM_STAGE_LIST.push(this)
        };
        Object.defineProperty(a.prototype, "stage", {
            get: function() {
                return this._stage
            },
            enumerable: !0,
            configurable: !0
        });
        a.prototype.addEventListener = function(e, h, c, k, f) {
            "undefined" === typeof k && (k = !1);
            "undefined" === typeof f && (f = 0);
            d.prototype.addEventListener.call(this, e, h, c, k, f); ((k = e == b.Event.ENTER_FRAME) || e == b.Event.RENDER) && this._insertEventBin(k ? a._enterFrameCallBackList: a._renderCallBackList, h, c, f)
        };
        a.prototype.removeEventListener = function(e, h, c, k) {
            "undefined" === typeof k && (k = !1);
            d.prototype.removeEventListener.call(this, e, h, c, k); ((k = e == b.Event.ENTER_FRAME) || e == b.Event.RENDER) && this._removeEventBin(k ? a._enterFrameCallBackList: a._renderCallBackList, h, c)
        };
        a.prototype.dispatchEvent = function(a) {
            if (!a._bubbles) return d.prototype.dispatchEvent.call(this, a);
            for (var b = [], c = this; c;) b.unshift(c),
            c = c.parent;
            for (var k = b.length,
            c = k - 1,
            k = k - 2; 0 <= k; k--) b.push(b[k]);
            a._reset();
            this._dispatchPropagationEvent(a, b, c);
            return ! a.isDefaultPrevented()
        };
        a.prototype._dispatchPropagationEvent = function(a, b, d) {
            for (var c = b.length,
            f = 0; f < c; f++) {
                var g = b[f];
                a._setCurrentTarget(g);
                a._target = this;
                a._eventPhase = f < d ? 1 : f == d ? 2 : 3;
                g._notifyListener(a);
                if (a._isPropagationStopped || a._isPropagationImmediateStopped) break
            }
        };
        a.prototype.willTrigger = function(a) {
            for (var b = this; b;) {
                if (b.hasEventListener(a)) return ! 0;
                b = b._parent
            }
            return ! 1
        };
        Object.defineProperty(a.prototype, "cacheAsBitmap", {
            get: function() {
                return this._cacheAsBitmap
            },
            set: function(a) { (this._cacheAsBitmap = a) ? (this.renderTexture || (this.renderTexture = new b.RenderTexture), this.renderTexture.drawToTexture(this), this._texture_to_render = this.renderTexture) : this._texture_to_render = null
            },
            enumerable: !0,
            configurable: !0
        });
        a.getTransformBounds = function(a, b) {
            var d, c, f = a.width,
            g = a.height,
            l = f * b.a,
            f = f * b.b,
            m = g * b.c,
            g = g * b.d,
            n = b.tx,
            p = b.ty,
            t = n,
            q = n,
            s = p,
            u = p; (d = l + n) < t ? t = d: d > q && (q = d); (d = l + m + n) < t ? t = d: d > q && (q = d); (d = m + n) < t ? t = d: d > q && (q = d); (c = f + p) < s ? s = c: c > u && (u = c); (c = f + g + p) < s ? s = c: c > u && (u = c); (c = g + p) < s ? s = c: c > u && (u = c);
            return a.initialize(t, s, q - t, u - s)
        };
        a.identityMatrixForGetConcatenated = new b.Matrix;
        a._enterFrameCallBackList = [];
        a._renderCallBackList = [];
        return a
    } (b.EventDispatcher);
    b.DisplayObject = c;
    c.prototype.__class__ = "egret.DisplayObject"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(d) {
        function a() {
            d.call(this);
            this._touchChildren = !0;
            this._children = []
        }
        __extends(a, d);
        Object.defineProperty(a.prototype, "touchChildren", {
            get: function() {
                return this._touchChildren
            },
            set: function(a) {
                this._touchChildren = a
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(a.prototype, "numChildren", {
            get: function() {
                return this._children.length
            },
            enumerable: !0,
            configurable: !0
        });
        a.prototype.setChildIndex = function(a, b) {
            this.doSetChildIndex(a, b)
        };
        a.prototype.doSetChildIndex = function(a, h) {
            var d = this._children.indexOf(a);
            0 > d && b.Logger.fatal("child\u4e0d\u5728\u5f53\u524d\u5bb9\u5668\u5185");
            this._children.splice(d, 1);
            0 > h || this._children.length <= h ? this._children.push(a) : this._children.splice(h, 0, a)
        };
        a.prototype.addChild = function(a) {
            var b = this.numChildren;
            a._parent == this && b--;
            return this._doAddChild(a, b)
        };
        a.prototype.addChildAt = function(a, b) {
            return this._doAddChild(a, b)
        };
        a.prototype._doAddChild = function(e, h, d) {
            "undefined" === typeof d && (d = !0);
            if (e == this) return e;
            if (0 > h || h > this._children.length) return b.Logger.fatal("\u63d0\u4f9b\u7684\u7d22\u5f15\u8d85\u51fa\u8303\u56f4"),
            e;
            var c = e.parent;
            if (c == this) return this.doSetChildIndex(e, h),
            e;
            c && c.removeChild(e);
            this._children.splice(h, 0, e);
            e._parentChanged(this);
            d && e.dispatchEventWith(b.Event.ADDED, !0);
            if (this._stage) for (e._onAddToStage(), h = a.__EVENT__ADD_TO_STAGE_LIST; 0 < h.length;) h.shift().dispatchEventWith(b.Event.ADDED_TO_STAGE);
            e._setDirty();
            this._setSizeDirty();
            return e
        };
        a.prototype.removeChild = function(a) {
            a = this._children.indexOf(a);
            if (0 <= a) return this._doRemoveChild(a);
            b.Logger.fatal("child\u672a\u88abaddChild\u5230\u8be5parent");
            return null
        };
        a.prototype.removeChildAt = function(a) {
            if (0 <= a && a < this._children.length) return this._doRemoveChild(a);
            b.Logger.fatal("\u63d0\u4f9b\u7684\u7d22\u5f15\u8d85\u51fa\u8303\u56f4");
            return null
        };
        a.prototype._doRemoveChild = function(e, h) {
            "undefined" === typeof h && (h = !0);
            var d = this._children,
            c = d[e];
            h && c.dispatchEventWith(b.Event.REMOVED, !0);
            if (this._stage) {
                c._onRemoveFromStage();
                for (var f = a.__EVENT__REMOVE_FROM_STAGE_LIST; 0 < f.length;) f.shift().dispatchEventWith(b.Event.REMOVED_FROM_STAGE)
            }
            c._parentChanged(null);
            d.splice(e, 1);
            this._setSizeDirty();
            return c
        };
        a.prototype.getChildAt = function(a) {
            if (0 <= a && a < this._children.length) return this._children[a];
            b.Logger.fatal("\u63d0\u4f9b\u7684\u7d22\u5f15\u8d85\u51fa\u8303\u56f4");
            return null
        };
        a.prototype.contains = function(a) {
            for (; a;) {
                if (a == this) return ! 0;
                a = a._parent
            }
            return ! 1
        };
        a.prototype.swapChildrenAt = function(a, h) {
            0 <= a && a < this._children.length && 0 <= h && h < this._children.length ? this._swapChildrenAt(a, h) : b.Logger.fatal("\u63d0\u4f9b\u7684\u7d22\u5f15\u8d85\u51fa\u8303\u56f4")
        };
        a.prototype.swapChildren = function(a, h) {
            var d = this._children.indexOf(a),
            c = this._children.indexOf(h); - 1 == d || -1 == c ? b.Logger.fatal("child\u672a\u88abaddChild\u5230\u8be5parent") : this._swapChildrenAt(d, c)
        };
        a.prototype._swapChildrenAt = function(a, b) {
            if (a != b) {
                var d = this._children,
                c = d[a];
                d[a] = d[b];
                d[b] = c
            }
        };
        a.prototype.getChildIndex = function(a) {
            return this._children.indexOf(a)
        };
        a.prototype.removeChildren = function() {
            for (var a = this._children.length - 1; 0 <= a; a--) this._doRemoveChild(a)
        };
        a.prototype._updateTransform = function() {
            if (this.visible) {
                d.prototype._updateTransform.call(this);
                for (var a = 0,
                b = this._children.length; a < b; a++) this._children[a]._updateTransform()
            }
        };
        a.prototype._render = function(a) {
            for (var b = 0,
            d = this._children.length; b < d; b++) this._children[b]._draw(a)
        };
        a.prototype._measureBounds = function() {
            for (var a = 0,
            h = 0,
            d = 0,
            c = 0,
            f = this._children.length,
            g = 0; g < f; g++) {
                var l = this._children[g],
                m;
                if (l.visible && (m = b.DisplayObject.getTransformBounds(l._getSize(b.Rectangle.identity), l._getMatrix()))) {
                    var l = m.x,
                    n = m.y,
                    p = m.width + m.x,
                    t = m.height + m.y;
                    if (l < a || 0 == g) a = l;
                    if (p > h || 0 == g) h = p;
                    if (n < d || 0 == g) d = n;
                    if (t > c || 0 == g) c = t
                }
            }
            return b.Rectangle.identity.initialize(a, d, h - a, c - d)
        };
        a.prototype.hitTest = function(a, h, c) {
            "undefined" === typeof c && (c = !1);
            var k;
            if (!this.visible) return null;
            if (this._scrollRect) {
                if (0 > a || 0 > h || a > this._scrollRect.width || h > this._scrollRect.height) return null
            } else if (this.mask && (this.mask.x > a || a > this.mask.x + this.mask.width || this.mask.y > h || h > this.mask.y + this.mask.height)) return null;
            for (var f = this._children,
            g = this._touchChildren,
            l = f.length - 1; 0 <= l; l--) {
                var m = f[l],
                n = m,
                p = n._getOffsetPoint(),
                t = n._x,
                q = n._y;
                this._scrollRect && (t -= this._scrollRect.x, q -= this._scrollRect.y);
                n = b.Matrix.identity.identity().prependTransform(t, q, n._scaleX, n._scaleY, n._rotation, 0, 0, p.x, p.y);
                n.invert();
                n = b.Matrix.transformCoords(n, a, h);
                if (m = m.hitTest(n.x, n.y, !0)) {
                    if (m._touchEnabled && g) return m;
                    if (this._touchEnabled) return this;
                    null == k && (k = m)
                }
            }
            return k ? k: d.prototype.hitTest.call(this, a, h, c)
        };
        a.prototype._onAddToStage = function() {
            d.prototype._onAddToStage.call(this);
            for (var a = this.numChildren,
            b = 0; b < a; b++) this._children[b]._onAddToStage()
        };
        a.prototype._onRemoveFromStage = function() {
            d.prototype._onRemoveFromStage.call(this);
            for (var a = this.numChildren,
            b = 0; b < a; b++) this._children[b]._onRemoveFromStage()
        };
        a.prototype.getChildByName = function(a) {
            for (var b = this._children,
            d = this.numChildren,
            c, f = 0; f < d; f++) if (c = b[f], c.name == a) return c;
            return null
        };
        a.__EVENT__ADD_TO_STAGE_LIST = [];
        a.__EVENT__REMOVE_FROM_STAGE_LIST = [];
        return a
    } (b.DisplayObject);
    b.DisplayObjectContainer = c;
    c.prototype.__class__ = "egret.DisplayObjectContainer"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(d) {
        function a(a, b) {
            "undefined" === typeof a && (a = 480);
            "undefined" === typeof b && (b = 800);
            d.call(this);
            this.touchEnabled = !0;
            this._stage = this;
            this._stageWidth = a;
            this._stageHeight = b
        }
        __extends(a, d);
        a.prototype.invalidate = function() {
            a._invalidateRenderFlag = !0
        };
        Object.defineProperty(a.prototype, "scaleMode", {
            get: function() {
                return this._scaleMode
            },
            set: function(a) {
                if (this._scaleMode != a) {
                    this._scaleMode = a;
                    var h = {};
                    h[b.StageScaleMode.NO_SCALE] = new b.NoScale;
                    h[b.StageScaleMode.SHOW_ALL] = new b.FixedWidth;
                    a = h[a];
                    if (!a) throw Error("\u4f7f\u7528\u4e86\u5c1a\u672a\u5b9e\u73b0\u7684ScaleMode");
                    h = new b.EqualToFrame;
                    a = new b.ResolutionPolicy(h, a);
                    b.StageDelegate.getInstance()._setResolutionPolicy(a);
                    a = document.getElementById(b.StageDelegate.canvas_name);
                    this._stageWidth = a.width;
                    this._stageHeight = a.height;
                    this.dispatchEventWith(b.Event.RESIZE)
                }
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(a.prototype, "stageWidth", {
            get: function() {
                return this._stageWidth
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(a.prototype, "stageHeight", {
            get: function() {
                return this._stageHeight
            },
            enumerable: !0,
            configurable: !0
        });
        a.prototype.hitTest = function(a, h) {
            if (!this.touchEnabled) return null;
            var d;
            if (!this.visible) return this;
            for (var c = this._children,
            f = c.length - 1; 0 <= f; f--) {
                var g = d = c[f],
                l = g._getOffsetPoint(),
                g = b.Matrix.identity.identity().prependTransform(g.x, g.y, g.scaleX, g.scaleY, g.rotation, 0, 0, l.x, l.y);
                g.invert();
                g = b.Matrix.transformCoords(g, a, h);
                if ((d = d.hitTest(g.x, g.y, !0)) && d.touchEnabled) return d
            }
            return this
        };
        a.prototype.getBounds = function(a) {
            a || (a = new b.Rectangle);
            return a.initialize(0, 0, this._stageWidth, this._stageHeight)
        };
        a.prototype._updateTransform = function() {
            for (var a = 0,
            b = this._children.length; a < b; a++) this._children[a]._updateTransform()
        };
        a._invalidateRenderFlag = !1;
        return a
    } (b.DisplayObjectContainer);
    b.Stage = c;
    c.prototype.__class__ = "egret.Stage"
})(egret || (egret = {})); (function(b) {
    var c = function() {
        function b() {}
        b.NO_SCALE = "noScale";
        b.SHOW_ALL = "showAll";
        return b
    } ();
    b.StageScaleMode = c;
    c.prototype.__class__ = "egret.StageScaleMode"
})(egret || (egret = {})); (function(b) {
    var c = function() {
        function b() {}
        b.REPEAT = "repeat";
        b.SCALE = "scale";
        return b
    } ();
    b.BitmapFillMode = c;
    c.prototype.__class__ = "egret.BitmapFillMode"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(d) {
        function a(a) {
            d.call(this);
            this.debug = !1;
            this.debugColor = 16711680;
            this.fillMode = "scale";
            a && (this._texture = a, this._setSizeDirty())
        }
        __extends(a, d);
        Object.defineProperty(a.prototype, "texture", {
            get: function() {
                return this._texture
            },
            set: function(a) {
                a != this._texture && (this._setSizeDirty(), this._texture = a)
            },
            enumerable: !0,
            configurable: !0
        });
        a.prototype._render = function(e) {
            var b = this._texture;
            b ? (this._texture_to_render = b, a._drawBitmap(e, this._hasWidthSet ? this._explicitWidth: b._textureWidth, this._hasHeightSet ? this._explicitHeight: b._textureHeight, this)) : this._texture_to_render = null
        };
        a._drawBitmap = function(e, h, d, c) {
            var f = c._texture_to_render;
            if (f) {
                var g = f._textureWidth,
                l = f._textureHeight;
                if ("scale" == c.fillMode) {
                    var m = c.scale9Grid || f.scale9Grid;
                    if (m && g - m.width < h && l - m.height < d) a.drawScale9GridImage(e, c, m, h, d);
                    else {
                        var m = f._offsetX,
                        n = f._offsetY,
                        p = f._bitmapWidth || g,
                        t = f._bitmapHeight || l;
                        h /= g;
                        m = Math.round(m * h);
                        h = Math.round(p * h);
                        d /= l;
                        n = Math.round(n * d);
                        d = Math.round(t * d);
                        b.RenderFilter.getInstance().drawImage(e, c, f._bitmapX, f._bitmapY, p, t, m, n, h, d)
                    }
                } else a.drawRepeatImage(e, c, h, d)
            }
        };
        a.drawRepeatImage = function(a, h, d, c) {
            var f = h._texture_to_render;
            if (f) for (var g = f._textureWidth,
            l = f._textureHeight,
            m = f._bitmapX,
            n = f._bitmapY,
            p = f._bitmapWidth || g,
            t = f._bitmapHeight || l,
            q = f._offsetX,
            f = f._offsetY,
            s = b.RenderFilter.getInstance(); q < d; q += g) for (var u = f; u < c; u += l) {
                var v = Math.min(p, d - q),
                x = Math.min(t, c - u);
                s.drawImage(a, h, m, n, p, t, q, u, v, x)
            }
        };
        a.drawScale9GridImage = function(a, h, d, c, f) {
            var g = h._texture_to_render;
            if (g && d) {
                var l = b.RenderFilter.getInstance(),
                m = g._textureWidth,
                n = g._textureHeight,
                p = g._bitmapX,
                t = g._bitmapY,
                q = g._bitmapWidth || m,
                s = g._bitmapHeight || n,
                u = g._offsetX,
                g = g._offsetY;
                d = b.Rectangle.identity.initialize(d.x - Math.round(u), d.y - Math.round(u), d.width, d.height);
                u = Math.round(u);
                g = Math.round(g);
                c -= m - q;
                f -= n - s;
                d.y == d.bottom && (d.bottom < s ? d.bottom++:d.y--);
                d.x == d.right && (d.right < q ? d.right++:d.x--);
                var m = p + d.x,
                n = p + d.right,
                v = q - d.right,
                x = t + d.y,
                y = t + d.bottom,
                w = s - d.bottom,
                z = u + d.x,
                A = g + d.y,
                s = f - (s - d.bottom),
                q = c - (q - d.right);
                l.drawImage(a, h, p, t, d.x, d.y, u, g, d.x, d.y);
                l.drawImage(a, h, m, t, d.width, d.y, z, g, q - d.x, d.y);
                l.drawImage(a, h, n, t, v, d.y, u + q, g, c - q, d.y);
                l.drawImage(a, h, p, x, d.x, d.height, u, A, d.x, s - d.y);
                l.drawImage(a, h, m, x, d.width, d.height, z, A, q - d.x, s - d.y);
                l.drawImage(a, h, n, x, v, d.height, u + q, A, c - q, s - d.y);
                l.drawImage(a, h, p, y, d.x, w, u, g + s, d.x, f - s);
                l.drawImage(a, h, m, y, d.width, w, z, g + s, q - d.x, f - s);
                l.drawImage(a, h, n, y, v, w, u + q, g + s, c - q, f - s)
            }
        };
        a.prototype._measureBounds = function() {
            var a = this._texture;
            return a ? b.Rectangle.identity.initialize(a._offsetX, a._offsetY, a._textureWidth, a._textureHeight) : d.prototype._measureBounds.call(this)
        };
        a.debug = !1;
        return a
    } (b.DisplayObject);
    b.Bitmap = c;
    c.prototype.__class__ = "egret.Bitmap"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(d) {
        function a() {
            d.call(this);
            this._text = "";
            this._textChanged = !1;
            this._bitmapPool = []
        }
        __extends(a, d);
        Object.defineProperty(a.prototype, "text", {
            get: function() {
                return this._text
            },
            set: function(a) {
                this._textChanged = !0;
                this._text = a
            },
            enumerable: !0,
            configurable: !0
        });
        a.prototype._updateTransform = function() {
            this.visible && (this._textChanged && this._renderText(), d.prototype._updateTransform.call(this))
        };
        a.prototype._renderText = function(a) {
            var d = a = 0;
            this._textChanged && this.removeChildren();
            for (var c = 0,
            k = this.text.length; c < k; c++) {
                var f = this.text.charAt(c),
                g = this.spriteSheet.getTexture(f);
                if (null == g) console.log("\u5f53\u524d\u6ca1\u6709\u4f4d\u56fe\u6587\u5b57\uff1a" + f);
                else {
                    var f = g._offsetX,
                    l = g._offsetY,
                    m = g._textureWidth;
                    if (this._textChanged) {
                        var n = this._bitmapPool[c];
                        n || (n = new b.Bitmap, this._bitmapPool.push(n));
                        n.texture = g;
                        this.addChild(n);
                        n.x = a
                    }
                    a += m + f;
                    l + g._textureHeight > d && (d = l + g._textureHeight)
                }
            }
            this._textChanged = !1;
            return b.Rectangle.identity.initialize(0, 0, a, d)
        };
        a.prototype._measureBounds = function() {
            return this._renderText(!0)
        };
        return a
    } (b.DisplayObjectContainer);
    b.BitmapText = c;
    c.prototype.__class__ = "egret.BitmapText"
})(egret || (egret = {})); (function(b) {
    var c = function() {
        function b() {
            this.commandQueue = []
        }
        b.prototype.beginFill = function(a, e) {};
        b.prototype._setStyle = function(a) {};
        b.prototype.drawRect = function(a, e, b, d) {};
        b.prototype.drawCircle = function(a, e, b) {};
        b.prototype.lineStyle = function(a, e, b, d, c, f, g, l) {};
        b.prototype.lineTo = function(a, e) {};
        b.prototype.curveTo = function(a, e, b, d) {};
        b.prototype.moveTo = function(a, e) {};
        b.prototype.clear = function() {};
        b.prototype.endFill = function() {};
        b.prototype._draw = function(a) {};
        return b
    } ();
    b.Graphics = c;
    c.prototype.__class__ = "egret.Graphics"; (function() {
        return function(b, a, e) {
            this.method = b;
            this.thisObject = a;
            this.args = e
        }
    })().prototype.__class__ = "Command"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(d) {
        function a() {
            d.call(this)
        }
        __extends(a, d);
        Object.defineProperty(a.prototype, "graphics", {
            get: function() {
                this._graphics || (this._graphics = new b.Graphics);
                return this._graphics
            },
            enumerable: !0,
            configurable: !0
        });
        a.prototype._render = function(a) {
            this._graphics && this._graphics._draw(a)
        };
        return a
    } (b.DisplayObject);
    b.Shape = c;
    c.prototype.__class__ = "egret.Shape"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(d) {
        function a() {
            d.call(this)
        }
        __extends(a, d);
        Object.defineProperty(a.prototype, "graphics", {
            get: function() {
                this._graphics || (this._graphics = new b.Graphics);
                return this._graphics
            },
            enumerable: !0,
            configurable: !0
        });
        a.prototype._render = function(a) {
            this._graphics && this._graphics._draw(a);
            d.prototype._render.call(this, a)
        };
        return a
    } (b.DisplayObjectContainer);
    b.Sprite = c;
    c.prototype.__class__ = "egret.Sprite"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(d) {
        function a() {
            d.call(this);
            this._fontFamily = "Arial";
            this._size = 30;
            this._textColorString = "#FFFFFF";
            this._textColor = 16777215;
            this._strokeColorString = "#000000";
            this._stroke = this._strokeColor = 0;
            this._textAlign = "left";
            this._verticalAlign = "top";
            this._numLines = this._lineSpacing = 0;
            this.measuredWidths = []
        }
        __extends(a, d);
        Object.defineProperty(a.prototype, "text", {
            get: function() {
                return this._text
            },
            set: function(a) {
                this._text != a && (this._setTextDirty(), this._text = a)
            },
            enumerable: !0,
            configurable: !0
        });
        a.prototype._setTextDirty = function() {
            this._setSizeDirty()
        };
        Object.defineProperty(a.prototype, "fontFamily", {
            get: function() {
                return this._fontFamily
            },
            set: function(a) {
                this._fontFamily != a && (this._setTextDirty(), this._fontFamily = a)
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(a.prototype, "size", {
            get: function() {
                return this._size
            },
            set: function(a) {
                this._size != a && (this._setTextDirty(), this._size = a)
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(a.prototype, "italic", {
            get: function() {
                return this._italic
            },
            set: function(a) {
                this._italic != a && (this._setTextDirty(), this._italic = a)
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(a.prototype, "bold", {
            get: function() {
                return this._bold
            },
            set: function(a) {
                this._bold != a && (this._setTextDirty(), this._bold = a)
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(a.prototype, "textColor", {
            get: function() {
                return this._textColor
            },
            set: function(a) {
                this._textColor != a && (this._setTextDirty(), this._textColor = a, this._textColorString = b.toColorString(a))
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(a.prototype, "strokeColor", {
            get: function() {
                return this._strokeColor
            },
            set: function(a) {
                this._strokeColor != a && (this._setTextDirty(), this._strokeColor = a, this._strokeColorString = b.toColorString(a))
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(a.prototype, "stroke", {
            get: function() {
                return this._stroke
            },
            set: function(a) {
                this._stroke != a && (this._setTextDirty(), this._stroke = a)
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(a.prototype, "textAlign", {
            get: function() {
                return this._textAlign
            },
            set: function(a) {
                this._textAlign != a && (this._setTextDirty(), this._textAlign = a)
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(a.prototype, "verticalAlign", {
            get: function() {
                return this._verticalAlign
            },
            set: function(a) {
                this._verticalAlign != a && (this._setTextDirty(), this._verticalAlign = a)
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(a.prototype, "lineSpacing", {
            get: function() {
                return this._lineSpacing
            },
            set: function(a) {
                this._lineSpacing != a && (this._setTextDirty(), this._lineSpacing = a)
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(a.prototype, "numLines", {
            get: function() {
                return this._numLines
            },
            enumerable: !0,
            configurable: !0
        });
        a.prototype._render = function(a) {
            this.drawText(a, !1);
            this._clearDirty()
        };
        a.prototype._measureBounds = function() {
            return this.drawText(b.MainContext.instance.rendererContext, !0)
        };
        a.prototype.drawText = function(a, d) {
            var c = this.getTextLines(a);
            if (!c) return b.Rectangle.identity.initialize(0, 0, 0, 0);
            var k = c.length,
            f = 0.5 * this._size,
            g = this._size + this._lineSpacing,
            l = k * g - this._lineSpacing;
            this._textHeight = l;
            var m = this._hasHeightSet ? this._explicitHeight: Number.POSITIVE_INFINITY;
            if (this._hasHeightSet && l < m) {
                var n = 0;
                this._verticalAlign == b.VerticalAlign.MIDDLE ? n = 0.5 : this._verticalAlign == b.VerticalAlign.BOTTOM && (n = 1);
                f += n * (m - l)
            }
            var n = f = Math.round(f),
            p = 0;
            this._textAlign == b.HorizontalAlign.CENTER ? p = 0.5 : this._textAlign == b.HorizontalAlign.RIGHT && (p = 1);
            var t = this.measuredWidths,
            q;
            q = this._hasWidthSet ? this._explicitWidth: this._textWidth;
            for (var s = Number.POSITIVE_INFINITY,
            u = 0; u < k; u++) {
                var v = c[u],
                x = Math.round((q - t[u]) * p);
                x < s && (s = x); ! d && f < m && a.drawText(this, v, x, f, q);
                f += g
            }
            return b.Rectangle.identity.initialize(s, n, q, l)
        };
        a.prototype.getTextLines = function(a) {
            var b = this.text ? this.text.toString() : "";
            if (!b) return null;
            var d = this.measuredWidths;
            d.length = 0;
            a.setupFont(this);
            var b = b.split(/(?:\r\n|\r|\n)/),
            c = b.length,
            f = 0;
            if (this._hasWidthSet) for (var g = this._explicitWidth,
            l = 0; l < c; l++) {
                var m = b[l],
                n = a.measureText(m);
                if (n > g) {
                    for (var p = "",
                    t = 0,
                    q = m.length,
                    s = 0; s < q; s++) {
                        var u = m.charAt(s),
                        n = a.measureText(u);
                        t + n > g && (0 == t ? (b.splice(l, 0, u), d[l] = n, f < n && (f = n), n = 0, u = "") : (b.splice(l, 0, p), d[l] = t, f < t && (f = t), p = "", t = 0), l++, c++);
                        t += n;
                        p += u
                    }
                    b[l] = p;
                    d[l] = t
                } else d[l] = n,
                f < n && (f = n)
            } else for (l = 0; l < c; l++) m = b[l],
            n = a.measureText(m),
            d[l] = n,
            f < n && (f = n);
            this._textWidth = f;
            return b
        };
        return a
    } (b.DisplayObject);
    b.TextField = c;
    c.prototype.__class__ = "egret.TextField"
})(egret || (egret = {})); (function(b) {
    var c = function() {
        function b() {}
        b.DYNAMIC = "dynamic";
        b.INPUT = "input";
        return b
    } ();
    b.TextFieldType = c;
    c.prototype.__class__ = "egret.TextFieldType"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(d) {
        function a(a) {
            d.call(this);
            var b = a.bitmapData;
            this.bitmapData = b;
            this._textureMap = {};
            this._sourceWidth = b.width;
            this._sourceHeight = b.height;
            this._bitmapX = a._bitmapX - a._offsetX;
            this._bitmapY = a._bitmapY - a._offsetY
        }
        __extends(a, d);
        a.prototype.getTexture = function(a) {
            return this._textureMap[a]
        };
        a.prototype.createTexture = function(a, d, c, k, f, g, l, m, n) {
            "undefined" === typeof g && (g = 0);
            "undefined" === typeof l && (l = 0);
            "undefined" === typeof m && (m = g + k);
            "undefined" === typeof n && (n = l + f);
            var p = new b.Texture;
            p._bitmapData = this.bitmapData;
            p._bitmapX = this._bitmapX + d;
            p._bitmapY = this._bitmapY + c;
            p._bitmapWidth = k;
            p._bitmapHeight = f;
            p._offsetX = g;
            p._offsetY = l;
            p._textureWidth = m;
            p._textureHeight = n;
            p._sourceWidth = this._sourceWidth;
            p._sourceHeight = this._sourceHeight;
            return this._textureMap[a] = p
        };
        return a
    } (b.HashObject);
    b.SpriteSheet = c;
    c.prototype.__class__ = "egret.SpriteSheet"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(d) {
        function a() {
            d.apply(this, arguments);
            this._placeholderText = "";
            this._edFontSize = 14;
            this._textColor = 16711680;
            this._placeholderFontSize = 14;
            this._placeholderColor = 16776960;
            this._preY = this._preX = 0
        }
        __extends(a, d);
        a.prototype._onAddToStage = function() {
            d.prototype._onAddToStage.call(this);
            var a = this.localToGlobal(),
            h = new b.StageText;
            h._open(a.x, a.y, this._explicitWidth, this._explicitHeight);
            this.addEventListener(b.TouchEvent.TOUCH_BEGIN, this.onMouseDownHandler, this);
            this.stageText = h
        };
        a.prototype.setText = function(a) {
            this.stageText._setText(a)
        };
        a.prototype.getText = function() {
            return this.stageText._getText()
        };
        a.prototype.setTextType = function(a) {
            this.stageText._setTextType(a)
        };
        a.prototype.getTextType = function() {
            return this.stageText._getTextType()
        };
        a.prototype.onMouseDownHandler = function(a) {};
        a.prototype._onRemoveFromStage = function() {
            this.stageText._remove()
        };
        a.prototype._measureBounds = function() {
            return b.Rectangle.identity
        };
        a.prototype.hitTest = function(a, b, d) {
            return null
        };
        return a
    } (b.DisplayObject);
    b.TextInput = c;
    c.prototype.__class__ = "egret.TextInput";
    c = function() {
        function b() {}
        b.prototype.editBoxEditingDidBegin = function(a) {};
        b.prototype.editBoxEditingDidEnd = function(a) {};
        b.prototype.editBoxTextChanged = function(a, e) {};
        b.prototype.editBoxReturn = function(a) {};
        return b
    } ();
    b.TextInputDegelete = c;
    c.prototype.__class__ = "egret.TextInputDegelete"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(b) {
        function a(a, h) {
            b.call(this, a);
            this.charList = this.parseConfig(h)
        }
        __extends(a, b);
        a.prototype.getTexture = function(a) {
            var b = this._textureMap[a];
            if (!b) {
                b = this.charList[a];
                if (!b) return null;
                b = this.createTexture(a, b.x, b.y, b.width, b.height, b.offsetX, b.offsetY);
                this._textureMap[a] = b
            }
            return b
        };
        a.prototype.parseConfig = function(a) {
            a = a.split("\r\n").join("\n");
            a = a.split("\n");
            for (var b = this.getConfigByKey(a[3], "count"), d = {},
            c = 4; c < 4 + b; c++) {
                var f = a[c],
                g = String.fromCharCode(this.getConfigByKey(f, "id")),
                l = {};
                d[g] = l;
                l.x = this.getConfigByKey(f, "x");
                l.y = this.getConfigByKey(f, "y");
                l.width = this.getConfigByKey(f, "width");
                l.height = this.getConfigByKey(f, "height");
                l.offsetX = this.getConfigByKey(f, "xoffset");
                l.offsetY = this.getConfigByKey(f, "yoffset")
            }
            return d
        };
        a.prototype.getConfigByKey = function(a, b) {
            for (var d = a.split(" "), c = 0, f = d.length; c < f; c++) {
                var g = d[c];
                if (b == g.substring(0, b.length)) return d = g.substring(b.length + 1),
                parseInt(d)
            }
            return 0
        };
        return a
    } (b.SpriteSheet);
    b.BitmapTextSpriteSheet = c;
    c.prototype.__class__ = "egret.BitmapTextSpriteSheet"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(a) {
        function e(e, c) {
            a.call(this);
            this.frameRate = 60;
            e instanceof d ? (b.Logger.warning("MovieClip#constructor\u63a5\u53e3\u53c2\u6570\u5df2\u7ecf\u53d8\u66f4\uff0c\u8bf7\u5c3d\u5feb\u8c03\u6574\u7528\u6cd5\u4e3a new MovieClip(data,texture)"), this.delegate = e) : this.delegate = new d(e, c);
            this.delegate.setMovieClip(this)
        }
        __extends(e, a);
        e.prototype.gotoAndPlay = function(a) {
            this.delegate.gotoAndPlay(a)
        };
        e.prototype.gotoAndStop = function(a) {
            this.delegate.gotoAndStop(a)
        };
        e.prototype.stop = function() {
            this.delegate.stop()
        };
        e.prototype.dispose = function() {
            this.delegate.dispose()
        };
        e.prototype.release = function() {
            b.Logger.warning("MovieClip#release\u65b9\u6cd5\u5373\u5c06\u5e9f\u5f03");
            this.dispose()
        };
        e.prototype.getCurrentFrameIndex = function() {
            b.Logger.warning("MovieClip#getCurrentFrameIndex\u65b9\u6cd5\u5373\u5c06\u5e9f\u5f03");
            return this.delegate._currentFrameIndex
        };
        e.prototype.getTotalFrame = function() {
            b.Logger.warning("MovieClip#getTotalFrame\u65b9\u6cd5\u5373\u5c06\u5e9f\u5f03");
            return this.delegate._totalFrame
        };
        e.prototype.setInterval = function(a) {
            b.Logger.warning("MovieClip#setInterval\u65b9\u6cd5\u5373\u5c06\u5e9f\u5f03,\u8bf7\u4f7f\u7528MovieClip#frameRate\u4ee3\u66ff");
            this.frameRate = 60 / a
        };
        e.prototype.getIsPlaying = function() {
            b.Logger.warning("MovieClip#getIsPlaying\u65b9\u6cd5\u5373\u5c06\u5e9f\u5f03");
            return this.delegate.isPlaying
        };
        return e
    } (b.DisplayObjectContainer);
    b.MovieClip = c;
    c.prototype.__class__ = "egret.MovieClip";
    var d = function() {
        function a(a, d) {
            this.data = a;
            this._currentFrameIndex = this._passTime = this._totalFrame = 0;
            this._isPlaying = !1;
            this._frameData = a;
            this._spriteSheet = new b.SpriteSheet(d)
        }
        a.prototype.setMovieClip = function(a) {
            this.movieClip = a;
            this.bitmap = new b.Bitmap;
            this.movieClip.addChild(this.bitmap)
        };
        a.prototype.gotoAndPlay = function(a) {
            this.checkHasFrame(a);
            this._isPlaying = !0;
            this._currentFrameIndex = 0;
            this._currentFrameName = a;
            this._totalFrame = this._frameData.frames[a].totalFrame;
            this.playNextFrame();
            this._passTime = 0;
            b.Ticker.getInstance().register(this.update, this)
        };
        a.prototype.gotoAndStop = function(a) {
            this.checkHasFrame(a);
            this.stop();
            this._currentFrameIndex = this._passTime = 0;
            this._currentFrameName = a;
            this._totalFrame = this._frameData.frames[a].totalFrame;
            this.playNextFrame()
        };
        a.prototype.stop = function() {
            this._isPlaying = !1;
            b.Ticker.getInstance().unregister(this.update, this)
        };
        a.prototype.dispose = function() {};
        a.prototype.checkHasFrame = function(a) {
            void 0 == this._frameData.frames[a] && b.Logger.fatal("MovieClip\u6ca1\u6709\u5bf9\u5e94\u7684frame\uff1a", a)
        };
        a.prototype.update = function(a) {
            for (var b = 1E3 / this.movieClip.frameRate,
            b = Math.floor((this._passTime % b + a) / b); 1 <= b;) 1 == b ? this.playNextFrame() : this.playNextFrame(!1),
            b--;
            this._passTime += a
        };
        a.prototype.playNextFrame = function(a) {
            "undefined" === typeof a && (a = !0);
            var b = this._frameData.frames[this._currentFrameName].childrenFrame[this._currentFrameIndex];
            if (a) {
                a = this.getTexture(b.res);
                var d = this.bitmap;
                d.x = b.x;
                d.y = b.y;
                d.texture = a
            }
            null != b.action && this.movieClip.dispatchEventWith(b.action);
            this._currentFrameIndex++;
            this._currentFrameIndex == this._totalFrame && (this._currentFrameIndex = 0)
        };
        a.prototype.getTexture = function(a) {
            var b = this._frameData.res[a],
            d = this._spriteSheet.getTexture(a);
            d || (d = this._spriteSheet.createTexture(a, b.x, b.y, b.w, b.h));
            return d
        };
        return a
    } ();
    b.DefaultMovieClipDelegate = d;
    d.prototype.__class__ = "egret.DefaultMovieClipDelegate"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(d) {
        function a() {
            d.call(this)
        }
        __extends(a, d);
        a.prototype._getText = function() {
            return this.inputElement.value
        };
        a.prototype._setText = function(a) {
            this.inputElement.value = a
        };
        a.prototype._setTextType = function(a) {
            this.inputElement.type = a
        };
        a.prototype._getTextType = function() {
            return this.inputElement.type
        };
        a.prototype._open = function(a, d, c, k) {
            "undefined" === typeof c && (c = 160);
            "undefined" === typeof k && (k = 21);
            var f = b.StageDelegate.getInstance().getScaleX(),
            g = b.StageDelegate.getInstance().getScaleY(),
            l = document.createElement("input");
            l.type = "text";
            l.style.fontSize = "20px";
            l.style.color = "#FFFFFF";
            l.style.borderStyle = "none";
            l.style.background = "none";
            l.style.width = c * f + "px";
            l.style.height = k * g + "px";
            l.style.outline = "medium";
            var m = b.Browser.getInstance().$new("div");
            m.style.position = "absolute";
            m.position.x = a * f;
            m.style.width = c * f + "px";
            m.style.height = k * g + "px";
            m.position.y = d * g;
            m.transforms();
            m.appendChild(l);
            a = b.Browser.getInstance().$("#StageDelegateDiv");
            a || (c = document.getElementById(b.StageDelegate.canvas_div_name), k = c.clientHeight, c = c.clientWidth, a = b.Browser.getInstance().$new("div"), a.id = "StageDelegateDiv", a.style.position = "absolute", a.style.width = c + "px", a.style.maxHeight = k + "px", a.style.margin = "0px", document.getElementById(b.StageDelegate.canvas_div_name).appendChild(a), a.position.y = -k, a.transforms());
            a.appendChild(m);
            this.div = m;
            this.inputElement = l
        };
        a.prototype._remove = function() {
            var a = this.div;
            a && a.parentNode && a.parentNode.removeChild(a)
        };
        return a
    } (b.HashObject);
    b.StageText = c;
    c.prototype.__class__ = "egret.StageText"
})(egret || (egret = {})); (function(b) {
    var c = function() {
        function b() {}
        b.GET = "GET";
        b.POST = "POST";
        return b
    } ();
    b.URLRequestMethod = c;
    c.prototype.__class__ = "egret.URLRequestMethod"
})(egret || (egret = {})); (function(b) {
    var c = function() {
        function b() {}
        b.BINARY = "binary";
        b.TEXT = "text";
        b.VARIABLES = "variables";
        b.TEXTURE = "texture";
        b.SOUND = "sound";
        return b
    } ();
    b.URLLoaderDataFormat = c;
    c.prototype.__class__ = "egret.URLLoaderDataFormat"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(b) {
        function a(a) {
            "undefined" === typeof a && (a = null);
            b.call(this);
            null !== a && this.decode(a)
        }
        __extends(a, b);
        a.prototype.decode = function(a) {
            this.variables || (this.variables = {});
            a = a.split("+").join(" ");
            for (var b, d = /[?&]?([^=]+)=([^&]*)/g; b = d.exec(a);) this.variables[decodeURIComponent(b[1])] = decodeURIComponent(b[2])
        };
        a.prototype.toString = function() {
            if (!this.variables) return "";
            var a = this.variables,
            b = "",
            d = !0,
            c;
            for (c in a) d ? d = !1 : b += "&",
            b += c + "=" + a[c];
            return b
        };
        return a
    } (b.HashObject);
    b.URLVariables = c;
    c.prototype.__class__ = "egret.URLVariables"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(d) {
        function a(a) {
            "undefined" === typeof a && (a = null);
            d.call(this);
            this.method = b.URLRequestMethod.GET;
            this.url = a
        }
        __extends(a, d);
        return a
    } (b.HashObject);
    b.URLRequest = c;
    c.prototype.__class__ = "egret.URLRequest"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(d) {
        function a(a) {
            "undefined" === typeof a && (a = null);
            d.call(this);
            this.dataFormat = b.URLLoaderDataFormat.TEXT;
            a && this.load(a)
        }
        __extends(a, d);
        a.prototype.load = function(a) {
            this._request = a;
            this.data = null;
            b.MainContext.instance.netContext.proceed(this)
        };
        return a
    } (b.EventDispatcher);
    b.URLLoader = c;
    c.prototype.__class__ = "egret.URLLoader"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(d) {
        function a() {
            d.call(this);
            this._textureHeight = this._textureWidth = this._offsetY = this._offsetX = this._bitmapHeight = this._bitmapWidth = this._bitmapY = this._bitmapX = 0
        }
        __extends(a, d);
        Object.defineProperty(a.prototype, "textureWidth", {
            get: function() {
                return this._textureWidth
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(a.prototype, "textureHeight", {
            get: function() {
                return this._textureHeight
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(a.prototype, "bitmapData", {
            get: function() {
                return this._bitmapData
            },
            enumerable: !0,
            configurable: !0
        });
        a.prototype._setBitmapData = function(a) {
            var d = b.MainContext.instance.rendererContext.texture_scale_factor;
            this._bitmapData = a;
            this._sourceWidth = a.width;
            this._sourceHeight = a.height;
            this._textureWidth = this._sourceWidth * d;
            this._textureHeight = this._sourceHeight * d;
            this._bitmapWidth = this._textureWidth;
            this._bitmapHeight = this._textureHeight;
            this._offsetX = this._offsetY = this._bitmapX = this._bitmapY = 0
        };
        a.prototype.getPixel32 = function(a, b) {
            return this._bitmapData.getContext("2d").getImageData(a, b, 1, 1).data
        };
        return a
    } (b.HashObject);
    b.Texture = c;
    c.prototype.__class__ = "egret.Texture"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(d) {
        function a() {
            d.call(this);
            this._bitmapData = document.createElement("canvas");
            this.renderContext = b.RendererContext.createRendererContext(this._bitmapData)
        }
        __extends(a, d);
        a.prototype.drawToTexture = function(a) {
            var d = this._bitmapData,
            c = a.getBounds(b.Rectangle.identity);
            d.width = c.width;
            d.height = c.height;
            a._worldTransform.identity();
            a.worldAlpha = 1;
            if (a instanceof b.DisplayObjectContainer) {
                this._offsetX = c.x;
                this._offsetY = c.y;
                a._worldTransform.append(1, 0, 0, 1, -c.x, -c.y);
                for (var d = a._children,
                c = 0,
                k = d.length; c < k; c++) d[c]._updateTransform()
            }
            d = b.RenderFilter.getInstance();
            c = d._drawAreaList.concat();
            d._drawAreaList.length = 0;
            this.renderContext.clearScreen();
            this.webGLTexture = null; (k = a.mask || a._scrollRect) && this.renderContext.pushMask(k);
            a._render(this.renderContext);
            k && this.renderContext.popMask();
            d._drawAreaList = c;
            this._textureWidth = this._bitmapData.width;
            this._textureHeight = this._bitmapData.height;
            this._sourceWidth = this._textureWidth;
            this._sourceHeight = this._textureHeight
        };
        return a
    } (b.Texture);
    b.RenderTexture = c;
    c.prototype.__class__ = "egret.RenderTexture"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(d) {
        function a() {
            d.call(this);
            this.renderCost = 0;
            this.texture_scale_factor = 1
        }
        __extends(a, d);
        a.prototype.clearScreen = function() {};
        a.prototype.clearRect = function(a, b, d, c) {};
        a.prototype.drawImage = function(a, d, c, k, f, g, l, m, n) {
            b.Profiler.getInstance().onDrawImage()
        };
        a.prototype.setTransform = function(a) {};
        a.prototype.setAlpha = function(a, b) {};
        a.prototype.setupFont = function(a) {};
        a.prototype.measureText = function(a) {
            return 0
        };
        a.prototype.drawText = function(a, d, c, k, f) {
            b.Profiler.getInstance().onDrawImage()
        };
        a.prototype.strokeRect = function(a, b, d, c, f) {};
        a.prototype.pushMask = function(a) {};
        a.prototype.popMask = function() {};
        a.createRendererContext = function(a) {
            return null
        };
        return a
    } (b.HashObject);
    b.RendererContext = c;
    c.prototype.__class__ = "egret.RendererContext"
})(egret || (egret = {})); (function(b) {
    var c = function() {
        function b() {}
        b.MOUSE = "mouse";
        b.TOUCH = "touch";
        b.mode = "touch";
        return b
    } ();
    b.InteractionMode = c;
    c.prototype.__class__ = "egret.InteractionMode"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(d) {
        function a() {
            d.call(this);
            this._currentTouchTarget = {};
            this.maxTouches = 2;
            this.touchDownTarget = {};
            this.lastTouchY = this.lastTouchX = -1
        }
        __extends(a, d);
        a.prototype.run = function() {};
        a.prototype.getTouchData = function(a, b, d) {
            var c = this._currentTouchTarget[a];
            null == c && (c = {},
            this._currentTouchTarget[a] = c);
            c.stageX = b;
            c.stageY = d;
            c.identifier = a;
            return c
        };
        a.prototype.dispatchEvent = function(a, d) {
            b.TouchEvent.dispatchTouchEvent(d.target, a, d.identifier, d.stageX, d.stageY, !1, !1, !1, !0 == this.touchDownTarget[d.identifier])
        };
        a.prototype.onTouchBegan = function(a, d, c) {
            var k = b.MainContext.instance.stage.hitTest(a, d);
            k && (a = this.getTouchData(c, a, d), this.touchDownTarget[c] = !0, a.target = k, a.beginTarget = k, this.dispatchEvent(b.TouchEvent.TOUCH_BEGIN, a))
        };
        a.prototype.onTouchMove = function(a, d, c) {
            if (a != this.lastTouchX || d != this.lastTouchY) {
                this.lastTouchX = a;
                this.lastTouchY = d;
                var k = b.MainContext.instance.stage.hitTest(a, d);
                k && (a = this.getTouchData(c, a, d), a.target = k, this.dispatchEvent(b.TouchEvent.TOUCH_MOVE, a))
            }
        };
        a.prototype.onTouchEnd = function(a, d, c) {
            var k = b.MainContext.instance.stage.hitTest(a, d);
            k && (a = this.getTouchData(c, a, d), delete this.touchDownTarget[c], c = a.beginTarget, a.target = k, this.dispatchEvent(b.TouchEvent.TOUCH_END, a), c == k ? this.dispatchEvent(b.TouchEvent.TOUCH_TAP, a) : a.beginTarget && (a.target = a.beginTarget, this.dispatchEvent(b.TouchEvent.TOUCH_RELEASE_OUTSIDE, a)), delete this._currentTouchTarget[a.identifier])
        };
        return a
    } (b.HashObject);
    b.TouchContext = c;
    c.prototype.__class__ = "egret.TouchContext"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(b) {
        function a() {
            b.call(this)
        }
        __extends(a, b);
        a.prototype.proceed = function(a) {};
        return a
    } (b.HashObject);
    b.NetContext = c;
    c.prototype.__class__ = "egret.NetContext"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(b) {
        function a() {
            b.call(this);
            this.frameRate = 60
        }
        __extends(a, b);
        a.prototype.executeMainLoop = function(a, b) {};
        return a
    } (b.HashObject);
    b.DeviceContext = c;
    c.prototype.__class__ = "egret.DeviceContext"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(d) {
        function a() {
            d.call(this);
            this.translate = this.isHD ?
            function(a) {
                return "translate3d(" + a.x + "px, " + (a.y - b.MainContext.instance.stage.stageHeight) + "px, 0) "
            }: function(a) {
                return "translate(" + a.x + "px, " + a.y + "px) "
            };
            this.rotate = this.isHD ?
            function(a) {
                return "rotateZ(" + a + "deg) "
            }: function(a) {
                return "rotate(" + a + "deg) "
            };
            this.ua = navigator.userAgent.toLowerCase();
            var a = this.ua.match(/micromessenger|qqbrowser|mqqbrowser|ucbrowser|360browser|baidubrowser|maxthon|ie|opera|firefox/) || this.ua.match(/chrome|safari/);
            a && 0 < a.length && (a = a[0], "micromessenger" == a && (this.type = "wechat"), this.type = a);
            this.type = "unknow";
            switch (this.type) {
            case "firefox":
                this.pfx = "Moz";
                this.isHD = !0;
                break;
            case "chrome":
            case "safari":
                this.pfx = "webkit";
                this.isHD = !0;
                break;
            case "opera":
                this.pfx = "O";
                this.isHD = !1;
                break;
            case "ie":
                this.pfx = "ms";
                this.isHD = !1;
                break;
            default:
                this.pfx = "webkit",
                this.isHD = !0
            }
            this.trans = this.pfx + "Transform"
        }
        __extends(a, d);
        a.getInstance = function() {
            null == a.instance && (a.instance = new a);
            return a.instance
        };
        Object.defineProperty(a.prototype, "isMobile", {
            get: function() {
                b.Logger.warning("Browser.isMobile\u63a5\u53e3\u53c2\u6570\u5df2\u7ecf\u53d8\u66f4\uff0c\u8bf7\u5c3d\u5feb\u8c03\u6574\u7528\u6cd5\u4e3a egret.MainContext.deviceType == egret.MainContext.DEVICE_MOBILE ");
                return b.MainContext.deviceType == b.MainContext.DEVICE_MOBILE
            },
            enumerable: !0,
            configurable: !0
        });
        a.prototype.$new = function(a) {
            return this.$(document.createElement(a))
        };
        a.prototype.$ = function(e) {
            var d = document;
            if (e = e instanceof HTMLElement ? e: d.querySelector(e)) e.find = e.find || this.$,
            e.hasClass = e.hasClass ||
            function(a) {
                return this.className.match(new RegExp("(\\s|^)" + a + "(\\s|$)"))
            },
            e.addClass = e.addClass ||
            function(a) {
                this.hasClass(a) || (this.className && (this.className += " "), this.className += a);
                return this
            },
            e.removeClass = e.removeClass ||
            function(a) {
                this.hasClass(a) && (this.className = this.className.replace(a, ""));
                return this
            },
            e.remove = e.remove ||
            function() {},
            e.appendTo = e.appendTo ||
            function(a) {
                a.appendChild(this);
                return this
            },
            e.prependTo = e.prependTo ||
            function(a) {
                a.childNodes[0] ? a.insertBefore(this, a.childNodes[0]) : a.appendChild(this);
                return this
            },
            e.transforms = e.transforms ||
            function() {
                this.style[a.getInstance().trans] = a.getInstance().translate(this.position) + a.getInstance().rotate(this.rotation) + a.getInstance().scale(this.scale) + a.getInstance().skew(this.skew);
                return this
            },
            e.position = e.position || {
                x: 0,
                y: 0
            },
            e.rotation = e.rotation || 0,
            e.scale = e.scale || {
                x: 1,
                y: 1
            },
            e.skew = e.skew || {
                x: 0,
                y: 0
            },
            e.translates = function(a, e) {
                this.position.x = a;
                this.position.y = e - b.MainContext.instance.stage.stageHeight;
                this.transforms();
                return this
            },
            e.rotate = function(a) {
                this.rotation = a;
                this.transforms();
                return this
            },
            e.resize = function(a, e) {
                this.scale.x = a;
                this.scale.y = e;
                this.transforms();
                return this
            },
            e.setSkew = function(a, e) {
                this.skew.x = a;
                this.skew.y = e;
                this.transforms();
                return this
            };
            return e
        };
        a.prototype.scale = function(a) {
            return "scale(" + a.x + ", " + a.y + ") "
        };
        a.prototype.skew = function(a) {
            return "skewX(" + -a.x + "deg) skewY(" + a.y + "deg)"
        };
        return a
    } (b.HashObject);
    b.Browser = c;
    c.prototype.__class__ = "egret.Browser"
})(egret || (egret = {})); (function(b) {
    var c = function() {
        function d() {}
        d.parse = function(a) {
            a = b.SAXParser.getInstance().parserXML(a);
            if (!a || !a.childNodes) return null;
            for (var e = a.childNodes.length,
            c = !1,
            r = 0; r < e; r++) {
                var k = a.childNodes[r];
                if (1 == k.nodeType) {
                    c = !0;
                    break
                }
            }
            return c ? d.parseNode(k) : null
        };
        d.parseNode = function(a) {
            if (!a || 1 != a.nodeType) return null;
            var e = {};
            e.localName = a.localName;
            e.name = a.nodeName;
            a.namespaceURI && (e.namespace = a.namespaceURI);
            a.prefix && (e.prefix = a.prefix);
            for (var b = a.attributes,
            c = b.length,
            k = 0; k < c; k++) {
                var f = b[k],
                g = f.name;
                0 != g.indexOf("xmlns:") && (e["$" + g] = f.value)
            }
            b = a.childNodes;
            c = b.length;
            for (k = 0; k < c; k++) if (f = d.parseNode(b[k])) e.children || (e.children = []),
            f.parent = e,
            e.children.push(f); ! e.children && (a = a.textContent.trim()) && (e.text = a);
            return e
        };
        d.findChildren = function(a, b, c) {
            c ? c.length = 0 : c = [];
            d.findByPath(a, b, c);
            return c
        };
        d.findByPath = function(a, b, c) {
            var r = b.indexOf("."),
            k; - 1 == r ? (k = b, r = !0) : (k = b.substring(0, r), b = b.substring(r + 1), r = !1);
            if (a = a.children) for (var f = a.length,
            g = 0; g < f; g++) {
                var l = a[g];
                l.localName == k && (r ? c.push(l) : d.findByPath(l, b, c))
            }
        };
        d.getAttributes = function(a, b) {
            b ? b.length = 0 : b = [];
            for (var d in a)"$" == d.charAt(0) && b.push(d.substring(1));
            return b
        };
        return d
    } ();
    b.XML = c;
    c.prototype.__class__ = "egret.XML"
})(egret || (egret = {})); (function(b) {
    var c = function() {
        function a() {}
        a.LITTLE_ENDIAN = "LITTLE_ENDIAN";
        a.BIG_ENDIAN = "BIG_ENDIAN";
        return a
    } ();
    b.Endian = c;
    c.prototype.__class__ = "egret.Endian";
    var d = function() {
        function a() {
            this.length = this.position = 0;
            this._mode = "";
            this.maxlength = 0;
            this._endian = c.LITTLE_ENDIAN;
            this.isLittleEndian = !1;
            this._mode = "Typed array";
            this.maxlength = 4;
            this.arraybytes = new ArrayBuffer(this.maxlength);
            this.unalignedarraybytestemp = new ArrayBuffer(16);
            this.endian = a.DEFAULT_ENDIAN
        }
        Object.defineProperty(a.prototype, "endian", {
            get: function() {
                return this._endian
            },
            set: function(a) {
                this._endian = a;
                this.isLittleEndian = a == c.LITTLE_ENDIAN
            },
            enumerable: !0,
            configurable: !0
        });
        a.prototype.ensureWriteableSpace = function(a) {
            this.ensureSpace(a + this.position)
        };
        a.prototype.setArrayBuffer = function(a) {
            this.ensureSpace(a.byteLength);
            this.length = a.byteLength;
            a = new Int8Array(a); (new Int8Array(this.arraybytes, 0, this.length)).set(a);
            this.position = 0
        };
        Object.defineProperty(a.prototype, "bytesAvailable", {
            get: function() {
                return this.length - this.position
            },
            enumerable: !0,
            configurable: !0
        });
        a.prototype.ensureSpace = function(a) {
            if (a > this.maxlength) {
                a = a + 255 & -256;
                var b = new ArrayBuffer(a),
                d = new Uint8Array(this.arraybytes, 0, this.length); (new Uint8Array(b, 0, this.length)).set(d);
                this.arraybytes = b;
                this.maxlength = a
            }
        };
        a.prototype.writeByte = function(a) {
            this.ensureWriteableSpace(1); (new Int8Array(this.arraybytes))[this.position++] = ~~a;
            this.position > this.length && (this.length = this.position)
        };
        a.prototype.readByte = function() {
            if (this.position >= this.length) throw "ByteArray out of bounds read. Positon=" + this.position + ", Length=" + this.length;
            return (new Int8Array(this.arraybytes))[this.position++]
        };
        a.prototype.readBytes = function(a, b, d) {
            "undefined" === typeof b && (b = 0);
            "undefined" === typeof d && (d = 0);
            null == d && (d = a.length);
            a.ensureWriteableSpace(b + d);
            var c = new Int8Array(a.arraybytes),
            f = new Int8Array(this.arraybytes);
            c.set(f.subarray(this.position, this.position + d), b);
            this.position += d;
            d + b > a.length && (a.length += d + b - a.length)
        };
        a.prototype.writeUnsignedByte = function(a) {
            this.ensureWriteableSpace(1); (new Uint8Array(this.arraybytes))[this.position++] = ~~a & 255;
            this.position > this.length && (this.length = this.position)
        };
        a.prototype.readUnsignedByte = function() {
            if (this.position >= this.length) throw "ByteArray out of bounds read. Positon=" + this.position + ", Length=" + this.length;
            return (new Uint8Array(this.arraybytes))[this.position++]
        };
        a.prototype.writeUnsignedShort = function(a) {
            this.ensureWriteableSpace(2);
            if (0 == (this.position & 1)) {
                var b = new Uint16Array(this.arraybytes);
                b[this.position >> 1] = ~~a & 65535
            } else b = new Uint16Array(this.unalignedarraybytestemp, 0, 1),
            b[0] = ~~a & 65535,
            a = new Uint8Array(this.arraybytes, this.position, 2),
            b = new Uint8Array(this.unalignedarraybytestemp, 0, 2),
            a.set(b);
            this.position += 2;
            this.position > this.length && (this.length = this.position)
        };
        a.prototype.readUTFBytes = function(a) {
            var b = "";
            a = this.position + a;
            for (var d = new DataView(this.arraybytes); this.position < a;) {
                var c = d.getUint8(this.position++);
                if (128 > c) {
                    if (0 == c) break;
                    b += String.fromCharCode(c)
                } else if (224 > c) b += String.fromCharCode((c & 63) << 6 | d.getUint8(this.position++) & 127);
                else if (240 > c) var f = d.getUint8(this.position++),
                b = b + String.fromCharCode((c & 31) << 12 | (f & 127) << 6 | d.getUint8(this.position++) & 127);
                else var f = d.getUint8(this.position++),
                g = d.getUint8(this.position++),
                b = b + String.fromCharCode((c & 15) << 18 | (f & 127) << 12 | g << 6 & 127 | d.getUint8(this.position++) & 127)
            }
            return b
        };
        a.prototype.readInt = function() {
            var a = (new DataView(this.arraybytes)).getInt32(this.position, this.isLittleEndian);
            this.position += 4;
            return a
        };
        a.prototype.readShort = function() {
            var a = (new DataView(this.arraybytes)).getInt16(this.position, this.isLittleEndian);
            this.position += 2;
            return a
        };
        a.prototype.readDouble = function() {
            var a = (new DataView(this.arraybytes)).getFloat64(this.position, this.isLittleEndian);
            this.position += 8;
            return a
        };
        a.prototype.readUnsignedShort = function() {
            if (this.position > this.length + 2) throw "ByteArray out of bounds read. Position=" + this.position + ", Length=" + this.length;
            if (0 == (this.position & 1)) {
                var a = new Uint16Array(this.arraybytes),
                b = this.position >> 1;
                this.position += 2;
                return a[b]
            }
            a = new Uint16Array(this.unalignedarraybytestemp, 0, 1);
            b = new Uint8Array(this.arraybytes, this.position, 2); (new Uint8Array(this.unalignedarraybytestemp, 0, 2)).set(b);
            this.position += 2;
            return a[0]
        };
        a.prototype.writeUnsignedInt = function(a) {
            this.ensureWriteableSpace(4);
            if (0 == (this.position & 3)) {
                var b = new Uint32Array(this.arraybytes);
                b[this.position >> 2] = ~~a & 4294967295
            } else b = new Uint32Array(this.unalignedarraybytestemp, 0, 1),
            b[0] = ~~a & 4294967295,
            a = new Uint8Array(this.arraybytes, this.position, 4),
            b = new Uint8Array(this.unalignedarraybytestemp, 0, 4),
            a.set(b);
            this.position += 4;
            this.position > this.length && (this.length = this.position)
        };
        a.prototype.readUnsignedInt = function() {
            if (this.position > this.length + 4) throw "ByteArray out of bounds read. Position=" + this.position + ", Length=" + this.length;
            if (0 == (this.position & 3)) {
                var a = new Uint32Array(this.arraybytes),
                b = this.position >> 2;
                this.position += 4;
                return a[b]
            }
            a = new Uint32Array(this.unalignedarraybytestemp, 0, 1);
            b = new Uint8Array(this.arraybytes, this.position, 4); (new Uint8Array(this.unalignedarraybytestemp, 0, 4)).set(b);
            this.position += 4;
            return a[0]
        };
        a.prototype.writeFloat = function(a) {
            this.ensureWriteableSpace(4);
            if (0 == (this.position & 3)) {
                var b = new Float32Array(this.arraybytes);
                b[this.position >> 2] = a
            } else b = new Float32Array(this.unalignedarraybytestemp, 0, 1),
            b[0] = a,
            a = new Uint8Array(this.arraybytes, this.position, 4),
            b = new Uint8Array(this.unalignedarraybytestemp, 0, 4),
            a.set(b);
            this.position += 4;
            this.position > this.length && (this.length = this.position)
        };
        a.prototype.readFloat = function() {
            if (this.position > this.length + 4) throw "ByteArray out of bounds read. Positon=" + this.position + ", Length=" + this.length;
            if (0 == (this.position & 3)) {
                var a = new Float32Array(this.arraybytes),
                b = this.position >> 2;
                this.position += 4;
                return a[b]
            }
            a = new Float32Array(this.unalignedarraybytestemp, 0, 1);
            b = new Uint8Array(this.arraybytes, this.position, 4); (new Uint8Array(this.unalignedarraybytestemp, 0, 4)).set(b);
            this.position += 4;
            return a[0]
        };
        a.DEFAULT_ENDIAN = c.BIG_ENDIAN;
        return a
    } ();
    b.ByteArray = d;
    d.prototype.__class__ = "egret.ByteArray"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(d) {
        function a(a, b, c) {
            d.call(this);
            this._target = null;
            this.loop = this.ignoreGlobalPause = this._useTicks = !1;
            this._actions = this._steps = this.pluginData = null;
            this.paused = !1;
            this.duration = 0;
            this._prevPos = -1;
            this.position = null;
            this._stepPosition = this._prevPosition = 0;
            this.passive = !1;
            this.initialize(a, b, c)
        }
        __extends(a, d);
        a.get = function(b, d, c, k) {
            "undefined" === typeof d && (d = null);
            "undefined" === typeof c && (c = null);
            "undefined" === typeof k && (k = !1);
            k && a.removeTweens(b);
            return new a(b, d, c)
        };
        a.removeTweens = function(b) {
            if (b.tween_count) {
                for (var d = a._tweens,
                c = d.length - 1; 0 <= c; c--) d[c]._target == b && (d[c].paused = !0, d.splice(c, 1));
                b.tween_count = 0
            }
        };
        a.tick = function(b, d) {
            "undefined" === typeof d && (d = !1);
            for (var c = a._tweens.concat(), k = c.length - 1; 0 <= k; k--) {
                var f = c[k];
                d && !f.ignoreGlobalPause || f.paused || f.tick(f._useTicks ? 1 : b)
            }
        };
        a._register = function(e, d) {
            var c = e._target,
            k = a._tweens;
            if (d) c && (c.tween_count = c.tween_count ? c.tween_count + 1 : 1),
            k.push(e),
            a._inited || (b.Ticker.getInstance().register(a.tick, null), a._inited = !0);
            else for (c && c.tween_count--, c = k.length; c--;) if (k[c] == e) {
                k.splice(c, 1);
                break
            }
        };
        a.removeAllTweens = function() {
            for (var b = a._tweens,
            d = 0,
            c = b.length; d < c; d++) {
                var k = b[d];
                k.paused = !0;
                k._target.tweenjs_count = 0
            }
            b.length = 0
        };
        a.prototype.initialize = function(b, d, c) {
            this._target = b;
            d && (this._useTicks = d.useTicks, this.ignoreGlobalPause = d.ignoreGlobalPause, this.loop = d.loop, d.onChange && this.addEventListener("change", d.onChange, d.onChangeObj), d.override && a.removeTweens(b));
            this.pluginData = c || {};
            this._curQueueProps = {};
            this._initQueueProps = {};
            this._steps = [];
            this._actions = [];
            d && d.paused ? this.paused = !0 : a._register(this, !0);
            d && null != d.position && this.setPosition(d.position, a.NONE)
        };
        a.prototype.setPosition = function(a, b) {
            "undefined" === typeof b && (b = 1);
            0 > a && (a = 0);
            var d = a,
            c = !1;
            d >= this.duration && (this.loop ? d %= this.duration: (d = this.duration, c = !0));
            if (d == this._prevPos) return c;
            var f = this._prevPos;
            this.position = this._prevPos = d;
            this._prevPosition = a;
            if (this._target) if (c) this._updateTargetProps(null, 1);
            else if (0 < this._steps.length) {
                for (var g = 0,
                l = this._steps.length; g < l && !(this._steps[g].t > d); g++);
                g = this._steps[g - 1];
                this._updateTargetProps(g, (this._stepPosition = d - g.t) / g.d)
            }
            0 != b && 0 < this._actions.length && (this._useTicks ? this._runActions(d, d) : 1 == b && d < f ? (f != this.duration && this._runActions(f, this.duration), this._runActions(0, d, !0)) : this._runActions(f, d));
            c && this.setPaused(!0);
            this.dispatchEventWith("change");
            return c
        };
        a.prototype._runActions = function(a, b, d) {
            "undefined" === typeof d && (d = !1);
            var c = a,
            f = b,
            g = -1,
            l = this._actions.length,
            m = 1;
            a > b && (c = b, f = a, g = l, l = m = -1);
            for (; (g += m) != l;) {
                b = this._actions[g];
                var n = b.t; (n == f || n > c && n < f || d && n == a) && b.f.apply(b.o, b.p)
            }
        };
        a.prototype._updateTargetProps = function(b, d) {
            var c, k, f, g;
            if (b || 1 != d) {
                if (this.passive = !!b.v) return;
                b.e && (d = b.e(d, 0, 1, 1));
                c = b.p0;
                k = b.p1
            } else this.passive = !1,
            c = k = this._curQueueProps;
            for (var l in this._initQueueProps) {
                null == (f = c[l]) && (c[l] = f = this._initQueueProps[l]);
                null == (g = k[l]) && (k[l] = g = f);
                f = f == g || 0 == d || 1 == d || "number" != typeof f ? 1 == d ? g: f: f + (g - f) * d;
                var m = !1;
                if (g = a._plugins[l]) for (var n = 0,
                p = g.length; n < p; n++) {
                    var t = g[n].tween(this, l, f, c, k, d, !!b && c == k, !b);
                    t == a.IGNORE ? m = !0 : f = t
                }
                m || (this._target[l] = f)
            }
        };
        a.prototype.setPaused = function(b) {
            this.paused = b;
            a._register(this, !b);
            return this
        };
        a.prototype._cloneProps = function(a) {
            var b = {},
            d;
            for (d in a) b[d] = a[d];
            return b
        };
        a.prototype._addStep = function(a) {
            0 < a.d && (this._steps.push(a), a.t = this.duration, this.duration += a.d);
            return this
        };
        a.prototype._appendQueueProps = function(b) {
            var d, c, k, f, g, l;
            for (l in b) if (void 0 === this._initQueueProps[l]) {
                c = this._target[l];
                if (d = a._plugins[l]) for (k = 0, f = d.length; k < f; k++) c = d[k].init(this, l, c);
                this._initQueueProps[l] = this._curQueueProps[l] = void 0 === c ? null: c
            }
            for (l in b) {
                c = this._curQueueProps[l];
                if (d = a._plugins[l]) for (g = g || {},
                k = 0, f = d.length; k < f; k++) d[k].step && d[k].step(this, l, c, b[l], g);
                this._curQueueProps[l] = b[l]
            }
            g && this._appendQueueProps(g);
            return this._curQueueProps
        };
        a.prototype._addAction = function(a) {
            a.t = this.duration;
            this._actions.push(a);
            return this
        };
        a.prototype._set = function(a, b) {
            for (var d in a) b[d] = a[d]
        };
        a.prototype.wait = function(a, b) {
            if (null == a || 0 >= a) return this;
            var d = this._cloneProps(this._curQueueProps);
            return this._addStep({
                d: a,
                p0: d,
                p1: d,
                v: b
            })
        };
        a.prototype.to = function(a, b, d) {
            "undefined" === typeof d && (d = void 0);
            if (isNaN(b) || 0 > b) b = 0;
            return this._addStep({
                d: b || 0,
                p0: this._cloneProps(this._curQueueProps),
                e: d,
                p1: this._cloneProps(this._appendQueueProps(a))
            })
        };
        a.prototype.call = function(a, b, d) {
            "undefined" === typeof b && (b = void 0);
            "undefined" === typeof d && (d = void 0);
            return this._addAction({
                f: a,
                p: d ? d: [],
                o: b ? b: this._target
            })
        };
        a.prototype.set = function(a, b) {
            "undefined" === typeof b && (b = null);
            return this._addAction({
                f: this._set,
                o: this,
                p: [a, b ? b: this._target]
            })
        };
        a.prototype.play = function(a) {
            a || (a = this);
            return this.call(a.setPaused, a, [!1])
        };
        a.prototype.pause = function(a) {
            a || (a = this);
            return this.call(a.setPaused, a, [!0])
        };
        a.prototype.tick = function(a) {
            this.paused || this.setPosition(this._prevPosition + a)
        };
        a.NONE = 0;
        a.LOOP = 1;
        a.REVERSE = 2;
        a._tweens = [];
        a.IGNORE = {};
        a._plugins = {};
        a._inited = !1;
        return a
    } (b.EventDispatcher);
    b.Tween = c;
    c.prototype.__class__ = "egret.Tween"
})(egret || (egret = {})); (function(b) {
    var c = function() {
        function d() {
            b.Logger.fatal("Ease\u4e0d\u80fd\u88ab\u5b9e\u4f8b\u5316")
        }
        d.get = function(a) { - 1 > a && (a = -1);
            1 < a && (a = 1);
            return function(b) {
                return 0 == a ? b: 0 > a ? b * (b * -a + 1 + a) : b * ((2 - b) * a + (1 - a))
            }
        };
        d.getPowIn = function(a) {
            return function(b) {
                return Math.pow(b, a)
            }
        };
        d.getPowOut = function(a) {
            return function(b) {
                return 1 - Math.pow(1 - b, a)
            }
        };
        d.getPowInOut = function(a) {
            return function(b) {
                return 1 > (b *= 2) ? 0.5 * Math.pow(b, a) : 1 - 0.5 * Math.abs(Math.pow(2 - b, a))
            }
        };
        d.sineIn = function(a) {
            return 1 - Math.cos(a * Math.PI / 2)
        };
        d.sineOut = function(a) {
            return Math.sin(a * Math.PI / 2)
        };
        d.sineInOut = function(a) {
            return - 0.5 * (Math.cos(Math.PI * a) - 1)
        };
        d.getBackIn = function(a) {
            return function(b) {
                return b * b * ((a + 1) * b - a)
            }
        };
        d.getBackOut = function(a) {
            return function(b) {
                b -= 1;
                return b * b * ((a + 1) * b + a) + 1
            }
        };
        d.getBackInOut = function(a) {
            a *= 1.525;
            return function(b) {
                return 1 > (b *= 2) ? 0.5 * b * b * ((a + 1) * b - a) : 0.5 * ((b -= 2) * b * ((a + 1) * b + a) + 2)
            }
        };
        d.circIn = function(a) {
            return - (Math.sqrt(1 - a * a) - 1)
        };
        d.circOut = function(a) {
            return Math.sqrt(1 - a * a)
        };
        d.circInOut = function(a) {
            return 1 > (a *= 2) ? -0.5 * (Math.sqrt(1 - a * a) - 1) : 0.5 * (Math.sqrt(1 - (a -= 2) * a) + 1)
        };
        d.bounceIn = function(a) {
            return 1 - d.bounceOut(1 - a)
        };
        d.bounceOut = function(a) {
            return a < 1 / 2.75 ? 7.5625 * a * a: a < 2 / 2.75 ? 7.5625 * (a -= 1.5 / 2.75) * a + 0.75 : a < 2.5 / 2.75 ? 7.5625 * (a -= 2.25 / 2.75) * a + 0.9375 : 7.5625 * (a -= 2.625 / 2.75) * a + 0.984375
        };
        d.bounceInOut = function(a) {
            return 0.5 > a ? 0.5 * d.bounceIn(2 * a) : 0.5 * d.bounceOut(2 * a - 1) + 0.5
        };
        d.getElasticIn = function(a, b) {
            var d = 2 * Math.PI;
            return function(c) {
                if (0 == c || 1 == c) return c;
                var k = b / d * Math.asin(1 / a);
                return - (a * Math.pow(2, 10 * (c -= 1)) * Math.sin((c - k) * d / b))
            }
        };
        d.getElasticOut = function(a, b) {
            var d = 2 * Math.PI;
            return function(c) {
                if (0 == c || 1 == c) return c;
                var k = b / d * Math.asin(1 / a);
                return a * Math.pow(2, -10 * c) * Math.sin((c - k) * d / b) + 1
            }
        };
        d.getElasticInOut = function(a, b) {
            var d = 2 * Math.PI;
            return function(c) {
                var k = b / d * Math.asin(1 / a);
                return 1 > (c *= 2) ? -0.5 * a * Math.pow(2, 10 * (c -= 1)) * Math.sin((c - k) * d / b) : a * Math.pow(2, -10 * (c -= 1)) * Math.sin((c - k) * d / b) * 0.5 + 1
            }
        };
        d.quadIn = d.getPowIn(2);
        d.quadOut = d.getPowOut(2);
        d.quadInOut = d.getPowInOut(2);
        d.cubicIn = d.getPowIn(3);
        d.cubicOut = d.getPowOut(3);
        d.cubicInOut = d.getPowInOut(3);
        d.quartIn = d.getPowIn(4);
        d.quartOut = d.getPowOut(4);
        d.quartInOut = d.getPowInOut(4);
        d.quintIn = d.getPowIn(5);
        d.quintOut = d.getPowOut(5);
        d.quintInOut = d.getPowInOut(5);
        d.backIn = d.getBackIn(1.7);
        d.backOut = d.getBackOut(1.7);
        d.backInOut = d.getBackInOut(1.7);
        d.elasticIn = d.getElasticIn(1, 0.3);
        d.elasticOut = d.getElasticOut(1, 0.3);
        d.elasticInOut = d.getElasticInOut(1, 0.3 * 1.5);
        return d
    } ();
    b.Ease = c;
    c.prototype.__class__ = "egret.Ease"
})(egret || (egret = {})); (function(b) {
    var c = function() {
        function b() {}
        b.prototype.play = function(a) {
            "undefined" === typeof a && (a = !1);
            var b = this.audio;
            b && (isNaN(b.duration) || (b.currentTime = 0), b.loop = a, b.play())
        };
        b.prototype.pause = function() {
            var a = this.audio;
            a && a.pause()
        };
        b.prototype.load = function() {
            var a = this.audio;
            a && a.load()
        };
        b.prototype.addEventListener = function(a, b) {
            this.audio && this.audio.addEventListener(a, b, !1)
        };
        b.prototype.removeEventListener = function(a, b) {
            this.audio && this.audio.removeEventListener(a, b, !1)
        };
        b.prototype.setVolume = function(a) {
            var b = this.audio;
            b && (b.volume = a)
        };
        b.prototype.getVolume = function() {
            return this.audio ? this.audio.volume: 0
        };
        return b
    } ();
    b.Sound = c;
    c.prototype.__class__ = "egret.Sound"
})(egret || (egret = {})); (function(b) {
    var c = function() {
        function b() {}
        b.isNumber = function(a) {
            return "number" === typeof a && !isNaN(a)
        };
        return b
    } ();
    b.NumberUtils = c;
    c.prototype.__class__ = "egret.NumberUtils"
})(egret || (egret = {}));
var __extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
},
RES; (function(b) {
    var c = function(b) {
        function a(a, c, r) {
            "undefined" === typeof c && (c = !1);
            "undefined" === typeof r && (r = !1);
            b.call(this, a, c, r);
            this.itemsTotal = this.itemsLoaded = 0
        }
        __extends(a, b);
        a.dispatchResourceEvent = function(b, d, c, k, f, g) {
            "undefined" === typeof c && (c = "");
            "undefined" === typeof k && (k = null);
            "undefined" === typeof f && (f = 0);
            "undefined" === typeof g && (g = 0);
            var l = egret.Event._getPropertyData(a);
            l.groupName = c;
            l.resItem = k;
            l.itemsLoaded = f;
            l.itemsTotal = g;
            egret.Event._dispatchByTarget(a, b, d, l)
        };
        a.ITEM_LOAD_ERROR = "itemLoadError";
        a.CONFIG_COMPLETE = "configComplete";
        a.GROUP_PROGRESS = "groupProgress";
        a.GROUP_COMPLETE = "groupComplete";
        return a
    } (egret.Event);
    b.ResourceEvent = c;
    c.prototype.__class__ = "RES.ResourceEvent"
})(RES || (RES = {})); (function(b) {
    var c = function() {
        function b(a, d, c) {
            this._loaded = !1;
            this.name = a;
            this.url = d;
            this.type = c
        }
        Object.defineProperty(b.prototype, "loaded", {
            get: function() {
                return this.data ? this.data.loaded: this._loaded
            },
            set: function(a) {
                this.data && (this.data.loaded = a);
                this._loaded = a
            },
            enumerable: !0,
            configurable: !0
        });
        b.prototype.toString = function() {
            return '[ResourceItem name="' + this.name + '" url="' + this.url + '" type="' + this.type + '"]'
        };
        b.TYPE_XML = "xml";
        b.TYPE_IMAGE = "image";
        b.TYPE_BIN = "bin";
        b.TYPE_TEXT = "text";
        b.TYPE_JSON = "json";
        b.TYPE_SHEET = "sheet";
        b.TYPE_FONT = "font";
        b.TYPE_SOUND = "sound";
        return b
    } ();
    b.ResourceItem = c;
    c.prototype.__class__ = "RES.ResourceItem"
})(RES || (RES = {})); (function(b) {
    var c = function() {
        function d() {
            this.keyMap = {};
            this.groupDic = {}
        }
        d.prototype.getGroupByName = function(a) {
            var b = [];
            if (!this.groupDic[a]) return b;
            a = this.groupDic[a];
            for (var d = a.length,
            c = 0; c < d; c++) b.push(this.parseResourceItem(a[c]));
            return b
        };
        d.prototype.getRawGroupByName = function(a) {
            return this.groupDic[a] ? this.groupDic[a] : []
        };
        d.prototype.createGroup = function(a, b, d) {
            "undefined" === typeof d && (d = !1);
            if (!d && this.groupDic[a] || !b || 0 == b.length) return ! 1;
            d = this.groupDic;
            for (var c = [], k = b.length, f = 0; f < k; f++) {
                var g = b[f],
                l = d[g];
                if (l) for (var g = l.length,
                m = 0; m < g; m++) {
                    var n = l[m]; - 1 == c.indexOf(n) && c.push(n)
                } else(n = this.keyMap[g]) && -1 == c.indexOf(n) && c.push(n)
            }
            if (0 == c.length) return ! 1;
            this.groupDic[a] = c;
            return ! 0
        };
        d.prototype.parseConfig = function(a, b) {
            if (a) {
                var d = a.resources;
                if (d) for (var c = d.length,
                k = 0; k < c; k++) {
                    var f = d[k],
                    g = f.url;
                    g && -1 == g.indexOf("://") && (f.url = b + g);
                    this.addItemToKeyMap(f)
                }
                if (d = a.groups) for (c = d.length, k = 0; k < c; k++) {
                    for (var g = d[k], l = [], m = g.keys.split(","), n = m.length, p = 0; p < n; p++) f = m[p].trim(),
                    (f = this.keyMap[f]) && -1 == l.indexOf(f) && l.push(f);
                    this.groupDic[g.name] = l
                }
            }
        };
        d.prototype.addItemToKeyMap = function(a) {
            this.keyMap[a.name] || (this.keyMap[a.name] = a);
            if (a.hasOwnProperty("subkeys")) {
                var b = a.subkeys.split(",");
                a.subkeys = b;
                for (var d = b.length,
                c = 0; c < d; c++) {
                    var k = b[c];
                    null == this.keyMap[k] && (this.keyMap[k] = a)
                }
            }
        };
        d.prototype.getName = function(a) {
            return (a = this.keyMap[a]) ? a.name: ""
        };
        d.prototype.getType = function(a) {
            return (a = this.keyMap[a]) ? a.type: ""
        };
        d.prototype.getRawResourceItem = function(a) {
            return this.keyMap[a]
        };
        d.prototype.getResourceItem = function(a) {
            return (a = this.keyMap[a]) ? this.parseResourceItem(a) : null
        };
        d.prototype.parseResourceItem = function(a) {
            var d = new b.ResourceItem(a.name, a.url, a.type);
            d.data = a;
            return d
        };
        return d
    } ();
    b.ResourceConfig = c;
    c.prototype.__class__ = "RES.ResourceConfig"
})(RES || (RES = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(d) {
        function a() {
            d.call(this);
            this.thread = 2;
            this.loadingCount = 0;
            this.groupTotalDic = {};
            this.numLoadedDic = {};
            this.itemListDic = {};
            this.priorityQueue = {};
            this.lazyLoadList = [];
            this.analyzerDic = {};
            this.queueIndex = 0
        }
        __extends(a, d);
        a.prototype.isGroupInLoading = function(a) {
            return void 0 !== this.itemListDic[a]
        };
        a.prototype.loadGroup = function(a, d, c) {
            "undefined" === typeof c && (c = 0);
            if (!this.itemListDic[d] && d) if (a && 0 != a.length) {
                this.priorityQueue[c] ? this.priorityQueue[c].push(d) : this.priorityQueue[c] = [d];
                this.itemListDic[d] = a;
                c = a.length;
                for (var k = 0; k < c; k++) a[k].groupName = d;
                this.groupTotalDic[d] = a.length;
                this.numLoadedDic[d] = 0;
                this.next()
            } else a = new b.ResourceEvent(b.ResourceEvent.GROUP_COMPLETE),
            a.groupName = d,
            this.dispatchEvent(a)
        };
        a.prototype.loadItem = function(a) {
            this.lazyLoadList.push(a);
            a.groupName = "";
            this.next()
        };
        a.prototype.next = function() {
            for (; this.loadingCount < this.thread;) {
                var a = this.getOneResourceItem();
                if (!a) break;
                this.loadingCount++;
                if (a.loaded) this.onItemComplete(a);
                else {
                    var d = this.analyzerDic[a.type];
                    d || (d = this.analyzerDic[a.type] = egret.Injector.getInstance(b.AnalyzerBase, a.type));
                    d.loadFile(a, this.onItemComplete, this)
                }
            }
        };
        a.prototype.getOneResourceItem = function() {
            var a = Number.NEGATIVE_INFINITY,
            b;
            for (b in this.priorityQueue) a = Math.max(a, b);
            a = this.priorityQueue[a];
            if (!a || 0 == a.length) return 0 == this.lazyLoadList.length ? null: this.lazyLoadList.pop();
            b = a.length;
            for (var d, c = 0; c < b; c++) {
                this.queueIndex >= b && (this.queueIndex = 0);
                d = this.itemListDic[a[this.queueIndex]];
                if (0 < d.length) break;
                this.queueIndex++
            }
            return 0 == d.length ? null: d.shift()
        };
        a.prototype.onItemComplete = function(a) {
            this.loadingCount--;
            var d = a.groupName;
            a.loaded || b.ResourceEvent.dispatchResourceEvent(this.resInstance, b.ResourceEvent.ITEM_LOAD_ERROR, d, a);
            if (d) {
                this.numLoadedDic[d]++;
                var c = this.numLoadedDic[d],
                k = this.groupTotalDic[d];
                b.ResourceEvent.dispatchResourceEvent(this.resInstance, b.ResourceEvent.GROUP_PROGRESS, d, a, c, k);
                c == k && (this.removeGroupName(d), delete this.groupTotalDic[d], delete this.numLoadedDic[d], delete this.itemListDic[d], b.ResourceEvent.dispatchResourceEvent(this, b.ResourceEvent.GROUP_COMPLETE, d))
            } else this.callBack.call(this.resInstance, a);
            this.next()
        };
        a.prototype.removeGroupName = function(a) {
            for (var b in this.priorityQueue) {
                for (var d = this.priorityQueue[b], c = d.length, f = 0, g = !1, c = d.length, l = 0; l < c; l++) {
                    if (d[l] == a) {
                        d.splice(f, 1);
                        g = !0;
                        break
                    }
                    f++
                }
                if (g) {
                    0 == d.length && delete this.priorityQueue[b];
                    break
                }
            }
        };
        return a
    } (egret.EventDispatcher);
    b.ResourceLoader = c;
    c.prototype.__class__ = "RES.ResourceLoader"
})(RES || (RES = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(b) {
        function a() {
            b.call(this)
        }
        __extends(a, b);
        a.prototype.loadFile = function(a, b, d) {};
        a.prototype.getRes = function(a) {};
        a.prototype.destroyRes = function(a) {
            return ! 1
        };
        a.getStringPrefix = function(a) {
            if (!a) return "";
            var b = a.indexOf(".");
            return - 1 != b ? a.substring(0, b) : ""
        };
        a.getStringTail = function(a) {
            if (!a) return "";
            var b = a.indexOf(".");
            return - 1 != b ? a.substring(b + 1) : ""
        };
        return a
    } (egret.HashObject);
    b.AnalyzerBase = c;
    c.prototype.__class__ = "RES.AnalyzerBase"
})(RES || (RES = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(b) {
        function a() {
            b.call(this);
            this.fileDic = {};
            this.resItemDic = [];
            this._dataFormat = egret.URLLoaderDataFormat.BINARY;
            this.recycler = new egret.Recycler
        }
        __extends(a, b);
        a.prototype.loadFile = function(a, b, d) {
            if (this.fileDic[a.name]) b.call(d, a);
            else {
                var c = this.getLoader();
                this.resItemDic[c.hashCode] = {
                    item: a,
                    func: b,
                    thisObject: d
                };
                c.load(new egret.URLRequest(a.url))
            }
        };
        a.prototype.getLoader = function() {
            var a = this.recycler.pop();
            a || (a = new egret.URLLoader, a.addEventListener(egret.Event.COMPLETE, this.onLoadFinish, this), a.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onLoadFinish, this));
            a.dataFormat = this._dataFormat;
            return a
        };
        a.prototype.onLoadFinish = function(a) {
            var b = a.target,
            d = this.resItemDic[b.hashCode];
            delete this.resItemDic[b.hashCode];
            this.recycler.push(b);
            var c = d.item,
            f = d.func;
            c.loaded = a.type == egret.Event.COMPLETE;
            c.loaded && this.analyzeData(c, b.data);
            f.call(d.thisObject, c)
        };
        a.prototype.analyzeData = function(a, b) {
            var d = a.name; ! this.fileDic[d] && b && (this.fileDic[d] = b)
        };
        a.prototype.getRes = function(a) {
            return this.fileDic[a]
        };
        a.prototype.hasRes = function(a) {
            return null != this.getRes(a)
        };
        a.prototype.destroyRes = function(a) {
            return this.fileDic[a] ? (delete this.fileDic[a], !0) : !1
        };
        return a
    } (b.AnalyzerBase);
    b.BinAnalyzer = c;
    c.prototype.__class__ = "RES.BinAnalyzer"
})(RES || (RES = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(b) {
        function a() {
            b.call(this);
            this._dataFormat = egret.URLLoaderDataFormat.TEXTURE
        }
        __extends(a, b);
        a.prototype.analyzeData = function(a, b) {
            var d = a.name; ! this.fileDic[d] && b && (this.fileDic[d] = b, (d = a.data) && d.scale9grid && (d = d.scale9grid.split(","), b.scale9Grid = new egret.Rectangle(parseInt(d[0]), parseInt(d[1]), parseInt(d[2]), parseInt(d[3]))))
        };
        return a
    } (b.BinAnalyzer);
    b.ImageAnalyzer = c;
    c.prototype.__class__ = "RES.ImageAnalyzer"
})(RES || (RES = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(b) {
        function a() {
            b.call(this);
            this._dataFormat = egret.URLLoaderDataFormat.TEXT
        }
        __extends(a, b);
        a.prototype.analyzeData = function(a, b) {
            var d = a.name;
            if (!this.fileDic[d] && b) try {
                this.fileDic[d] = JSON.parse(b)
            } catch(c) {
                egret.Logger.warning("JSON\u6587\u4ef6\u683c\u5f0f\u4e0d\u6b63\u786e: " + a.url)
            }
        };
        return a
    } (b.BinAnalyzer);
    b.JsonAnalyzer = c;
    c.prototype.__class__ = "RES.JsonAnalyzer"
})(RES || (RES = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(b) {
        function a() {
            b.call(this);
            this._dataFormat = egret.URLLoaderDataFormat.TEXT
        }
        __extends(a, b);
        return a
    } (b.BinAnalyzer);
    b.TextAnalyzer = c;
    c.prototype.__class__ = "RES.TextAnalyzer"
})(RES || (RES = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(d) {
        function a() {
            d.call(this);
            this.sheetMap = {};
            this.textureMap = {};
            this._dataFormat = egret.URLLoaderDataFormat.TEXT
        }
        __extends(a, d);
        a.prototype.getRes = function(a) {
            var d = this.fileDic[a];
            d || (d = this.textureMap[a]); ! d && (d = b.AnalyzerBase.getStringPrefix(a), d = this.fileDic[d]) && (a = b.AnalyzerBase.getStringTail(a), d = d.getTexture(a));
            return d
        };
        a.prototype.onLoadFinish = function(a) {
            var b = a.target,
            d = this.resItemDic[b.hashCode];
            delete this.resItemDic[b.hashCode];
            this.recycler.push(b);
            var c = d.item,
            f = d.func;
            c.loaded = a.type == egret.Event.COMPLETE;
            c.loaded && this.analyzeData(c, b.data);
            "string" == typeof b.data ? (this._dataFormat = egret.URLLoaderDataFormat.TEXTURE, this.loadFile(c, f, d.thisObject), this._dataFormat = egret.URLLoaderDataFormat.TEXT) : f.call(d.thisObject, c)
        };
        a.prototype.analyzeData = function(a, b) {
            var d = a.name;
            if (!this.fileDic[d] && b) {
                var c;
                if ("string" == typeof b) {
                    try {
                        c = JSON.parse(b)
                    } catch(f) {
                        egret.Logger.warning("JSON\u6587\u4ef6\u683c\u5f0f\u4e0d\u6b63\u786e: " + a.url)
                    }
                    c && (this.sheetMap[d] = c, a.loaded = !1, a.url = this.getRelativePath(a.url, c.file))
                } else c = this.sheetMap[d],
                delete this.sheetMap[d],
                b && (c = this.parseSpriteSheet(b, c), this.fileDic[d] = c)
            }
        };
        a.prototype.getRelativePath = function(a, b) {
            a = a.split("\\").join("/");
            var d = a.lastIndexOf("/");
            return a = -1 != d ? a.substring(0, d + 1) + b: b
        };
        a.prototype.parseSpriteSheet = function(a, b) {
            var d = b.frames;
            if (!d) return null;
            var c = new egret.SpriteSheet(a),
            f = this.textureMap,
            g;
            for (g in d) {
                var l = d[g];
                a = c.createTexture(g, l.x, l.y, l.w, l.h, l.offX, l.offY, l.sourceW, l.sourceH);
                null == f[g] && (f[g] = a)
            }
            return c
        };
        return a
    } (b.BinAnalyzer);
    b.SheetAnalyzer = c;
    c.prototype.__class__ = "RES.SheetAnalyzer"
})(RES || (RES = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(b) {
        function a() {
            b.call(this)
        }
        __extends(a, b);
        a.prototype.analyzeData = function(a, b) {
            var d = a.name;
            if (!this.fileDic[d] && b) {
                var c;
                "string" == typeof b ? (c = b, this.sheetMap[d] = c, a.loaded = !1, a.url = this.getTexturePath(a.url, c)) : (c = this.sheetMap[d], delete this.sheetMap[d], b && (c = new egret.BitmapTextSpriteSheet(b, c), this.fileDic[d] = c))
            }
        };
        a.prototype.getTexturePath = function(a, b) {
            var d = "",
            c = b.split("\n")[2],
            f = c.indexOf('file="'); - 1 != f && (c = c.substring(f + 6), f = c.indexOf('"'), d = c.substring(0, f));
            a = a.split("\\").join("/");
            f = a.lastIndexOf("/");
            return a = -1 != f ? a.substring(0, f + 1) + d: d
        };
        return a
    } (b.SheetAnalyzer);
    b.FontAnalyzer = c;
    c.prototype.__class__ = "RES.FontAnalyzer"
})(RES || (RES = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(b) {
        function a() {
            b.call(this);
            this._dataFormat = egret.URLLoaderDataFormat.SOUND
        }
        __extends(a, b);
        return a
    } (b.BinAnalyzer);
    b.SoundAnalyzer = c;
    c.prototype.__class__ = "RES.SoundAnalyzer"
})(RES || (RES = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(b) {
        function a() {
            b.call(this);
            this._dataFormat = egret.URLLoaderDataFormat.TEXT
        }
        __extends(a, b);
        a.prototype.analyzeData = function(a, b) {
            var d = a.name;
            if (!this.fileDic[d] && b) try {
                var c = egret.XML.parse(b);
                this.fileDic[d] = c
            } catch(f) {}
        };
        return a
    } (b.BinAnalyzer);
    b.XMLAnalyzer = c;
    c.prototype.__class__ = "RES.XMLAnalyzer"
})(RES || (RES = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    b.loadConfig = function(a, b, c) {
        "undefined" === typeof b && (b = "");
        "undefined" === typeof c && (c = "json");
        d.loadConfig(a, b, c)
    };
    b.loadGroup = function(a, b) {
        "undefined" === typeof b && (b = 0);
        d.loadGroup(a, b)
    };
    b.isGroupLoaded = function(a) {
        return d.isGroupLoaded(a)
    };
    b.getGroupByName = function(a) {
        return d.getGroupByName(a)
    };
    b.createGroup = function(a, b, c) {
        "undefined" === typeof c && (c = !1);
        return d.createGroup(a, b, c)
    };
    b.hasRes = function(a) {
        return d.hasRes(a)
    };
    b.getRes = function(a) {
        return d.getRes(a)
    };
    b.getResAsync = function(a, b, c) {
        d.getResAsync(a, b, c)
    };
    b.getResByUrl = function(a, b, c, r) {
        "undefined" === typeof r && (r = "");
        d.getResByUrl(a, b, c, r)
    };
    b.destroyRes = function(a) {
        return d.destroyRes(a)
    };
    b.setMaxLoadingThread = function(a) {
        d.setMaxLoadingThread(a)
    };
    b.addEventListener = function(a, b, c, r, k) {
        "undefined" === typeof r && (r = !1);
        "undefined" === typeof k && (k = 0);
        d.addEventListener(a, b, c, r, k)
    };
    b.removeEventListener = function(a, b, c, r) {
        "undefined" === typeof r && (r = !1);
        d.removeEventListener(a, b, c, r)
    };
    var c = function(a) {
        function d() {
            a.call(this);
            this.analyzerDic = {};
            this.configItemList = [];
            this.configComplete = this.callLaterFlag = !1;
            this.loadedGroups = [];
            this.groupNameList = [];
            this.asyncDic = {};
            this.init()
        }
        __extends(d, a);
        d.prototype.getAnalyzerByType = function(a) {
            var d = this.analyzerDic[a];
            d || (d = this.analyzerDic[a] = egret.Injector.getInstance(b.AnalyzerBase, a));
            return d
        };
        d.prototype.init = function() {
            egret.Injector.hasMapRule(b.AnalyzerBase, b.ResourceItem.TYPE_BIN) || egret.Injector.mapClass(b.AnalyzerBase, b.BinAnalyzer, b.ResourceItem.TYPE_BIN);
            egret.Injector.hasMapRule(b.AnalyzerBase, b.ResourceItem.TYPE_IMAGE) || egret.Injector.mapClass(b.AnalyzerBase, b.ImageAnalyzer, b.ResourceItem.TYPE_IMAGE);
            egret.Injector.hasMapRule(b.AnalyzerBase, b.ResourceItem.TYPE_TEXT) || egret.Injector.mapClass(b.AnalyzerBase, b.TextAnalyzer, b.ResourceItem.TYPE_TEXT);
            egret.Injector.hasMapRule(b.AnalyzerBase, b.ResourceItem.TYPE_JSON) || egret.Injector.mapClass(b.AnalyzerBase, b.JsonAnalyzer, b.ResourceItem.TYPE_JSON);
            egret.Injector.hasMapRule(b.AnalyzerBase, b.ResourceItem.TYPE_SHEET) || egret.Injector.mapClass(b.AnalyzerBase, b.SheetAnalyzer, b.ResourceItem.TYPE_SHEET);
            egret.Injector.hasMapRule(b.AnalyzerBase, b.ResourceItem.TYPE_FONT) || egret.Injector.mapClass(b.AnalyzerBase, b.FontAnalyzer, b.ResourceItem.TYPE_FONT);
            egret.Injector.hasMapRule(b.AnalyzerBase, b.ResourceItem.TYPE_SOUND) || egret.Injector.mapClass(b.AnalyzerBase, b.SoundAnalyzer, b.ResourceItem.TYPE_SOUND);
            egret.Injector.hasMapRule(b.AnalyzerBase, b.ResourceItem.TYPE_XML) || egret.Injector.mapClass(b.AnalyzerBase, b.XMLAnalyzer, b.ResourceItem.TYPE_XML);
            this.resConfig = new b.ResourceConfig;
            this.resLoader = new b.ResourceLoader;
            this.resLoader.callBack = this.onResourceItemComp;
            this.resLoader.resInstance = this;
            this.resLoader.addEventListener(b.ResourceEvent.GROUP_COMPLETE, this.onGroupComp, this)
        };
        d.prototype.loadConfig = function(a, b, d) {
            "undefined" === typeof d && (d = "json");
            this.configItemList.push({
                url: a,
                resourceRoot: b,
                type: d
            });
            this.callLaterFlag || (egret.callLater(this.startLoadConfig, this), this.callLaterFlag = !0)
        };
        d.prototype.startLoadConfig = function() {
            this.callLaterFlag = !1;
            var a = this.configItemList;
            this.configItemList = [];
            this.loadingConfigList = a;
            for (var c = a.length,
            k = [], f = 0; f < c; f++) {
                var g = a[f],
                g = new b.ResourceItem(g.url, g.url, g.type);
                k.push(g)
            }
            this.resLoader.loadGroup(k, d.GROUP_CONFIG, Number.MAX_VALUE)
        };
        d.prototype.isGroupLoaded = function(a) {
            return - 1 != this.loadedGroups.indexOf(a)
        };
        d.prototype.getGroupByName = function(a) {
            return this.resConfig.getGroupByName(a)
        };
        d.prototype.loadGroup = function(a, b) {
            "undefined" === typeof b && (b = 0);
            if ( - 1 == this.loadedGroups.indexOf(a) && !this.resLoader.isGroupInLoading(a)) if (this.configComplete) {
                var d = this.resConfig.getGroupByName(a);
                this.resLoader.loadGroup(d, a, b)
            } else this.groupNameList.push({
                name: a,
                priority: b
            })
        };
        d.prototype.createGroup = function(a, b, d) {
            "undefined" === typeof d && (d = !1);
            if (d) {
                var c = this.loadedGroups.indexOf(a); - 1 != c && this.loadedGroups.splice(c, 1)
            }
            return this.resConfig.createGroup(a, b, d)
        };
        d.prototype.onGroupComp = function(a) {
            if (a.groupName == d.GROUP_CONFIG) {
                a = this.loadingConfigList.length;
                for (var c = 0; c < a; c++) {
                    var k = this.loadingConfigList[c],
                    f = this.getAnalyzerByType(k.type),
                    g = f.getRes(k.url);
                    f.destroyRes(k.url);
                    this.resConfig.parseConfig(g, k.resourceRoot)
                }
                this.configComplete = !0;
                this.loadingConfigList = null;
                b.ResourceEvent.dispatchResourceEvent(this, b.ResourceEvent.CONFIG_COMPLETE);
                k = this.groupNameList;
                a = k.length;
                for (c = 0; c < a; c++) f = k[c],
                this.loadGroup(f.name, f.priority);
                this.groupNameList = []
            } else this.loadedGroups.push(a.groupName),
            this.dispatchEvent(a)
        };
        d.prototype.hasRes = function(a) {
            var d = this.resConfig.getType(a);
            return "" == d && (a = b.AnalyzerBase.getStringPrefix(a), d = this.resConfig.getType(a), "" == d) ? !1 : !0
        };
        d.prototype.getRes = function(a) {
            var d = this.resConfig.getType(a);
            return "" == d && (d = b.AnalyzerBase.getStringPrefix(a), d = this.resConfig.getType(d), "" == d) ? null: this.getAnalyzerByType(d).getRes(a)
        };
        d.prototype.getResAsync = function(a, d, c) {
            var e = this.resConfig.getType(a),
            g = this.resConfig.getName(a);
            if ("" == e && (g = b.AnalyzerBase.getStringPrefix(a), e = this.resConfig.getType(g), "" == e)) {
                d.call(c, null);
                return
            } (e = this.getAnalyzerByType(e).getRes(a)) ? d.call(c, e) : (a = {
                key: a,
                compFunc: d,
                thisObject: c
            },
            this.asyncDic[g] ? this.asyncDic[g].push(a) : (this.asyncDic[g] = [a], g = this.resConfig.getResourceItem(g), this.resLoader.loadItem(g)))
        };
        d.prototype.getResByUrl = function(a, d, c, e) {
            "undefined" === typeof e && (e = "");
            if (a) {
                e || (e = this.getTypeByUrl(a));
                var g = this.getAnalyzerByType(e).getRes(a);
                g ? d.call(c, g) : (d = {
                    key: a,
                    compFunc: d,
                    thisObject: c
                },
                this.asyncDic[a] ? this.asyncDic[a].push(d) : (this.asyncDic[a] = [d], a = new b.ResourceItem(a, a, e), this.resLoader.loadItem(a)))
            } else d.call(c, null)
        };
        d.prototype.getTypeByUrl = function(a) { (a = a.substr(a.lastIndexOf(".") + 1)) && (a = a.toLowerCase());
            switch (a) {
            case b.ResourceItem.TYPE_XML:
            case b.ResourceItem.TYPE_JSON:
            case b.ResourceItem.TYPE_SHEET:
                break;
            case "png":
            case "jpg":
            case "gif":
                a = b.ResourceItem.TYPE_IMAGE;
                break;
            case "fnt":
                a = b.ResourceItem.TYPE_FONT;
                break;
            case "txt":
                a = b.ResourceItem.TYPE_TEXT;
                break;
            case "mp3":
            case "ogg":
            case "mpeg":
            case "wav":
            case "m4a":
            case "mp4":
            case "aiff":
            case "wma":
            case "mid":
                a = b.ResourceItem.TYPE_SOUND;
                break;
            default:
                a = b.ResourceItem.TYPE_BIN
            }
            return a
        };
        d.prototype.onResourceItemComp = function(a) {
            var b = this.asyncDic[a.name];
            delete this.asyncDic[a.name];
            a = this.getAnalyzerByType(a.type);
            for (var d = b.length,
            c = 0; c < d; c++) {
                var e = b[c],
                l = a.getRes(e.key);
                e.compFunc.call(e.thisObject, l)
            }
        };
        d.prototype.destroyRes = function(a) {
            var b = this.resConfig.getRawGroupByName(a);
            if (b) {
                var d = this.loadedGroups.indexOf(a); - 1 != d && this.loadedGroups.splice(d, 1);
                a = b.length;
                for (var c = 0; c < a; c++) {
                    d = b[c];
                    d.loaded = !1;
                    var e = this.getAnalyzerByType(d.type);
                    e.destroyRes(d.name)
                }
                return ! 0
            }
            b = this.resConfig.getType(a);
            if ("" == b) return ! 1;
            d = this.resConfig.getRawResourceItem(a);
            d.loaded = !1;
            e = this.getAnalyzerByType(b);
            return e.destroyRes(a)
        };
        d.prototype.setMaxLoadingThread = function(a) {
            1 > a && (a = 1);
            this.resLoader.thread = a
        };
        d.GROUP_CONFIG = "RES__CONFIG";
        return d
    } (egret.EventDispatcher);
    c.prototype.__class__ = "Resource";
    var d = new c
})(RES || (RES = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(d) {
        function a(b) {
            "undefined" === typeof b && (b = 60);
            d.call(this);
            this.frameRate = b;
            this._time = 0;
            60 == b && (a.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame, a.cancelAnimationFrame = window.cancelAnimationFrame || window.msCancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.oCancelAnimationFrame || window.cancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.webkitCancelRequestAnimationFrame);
            a.requestAnimationFrame || (a.requestAnimationFrame = function(a) {
                return window.setTimeout(a, 1E3 / b)
            });
            a.cancelAnimationFrame || (a.cancelAnimationFrame = function(a) {
                return window.clearTimeout(a)
            });
            a.instance = this;
            this.registerListener()
        }
        __extends(a, d);
        a.prototype.enterFrame = function() {
            var d = a.instance,
            c = a._thisObject,
            r = a._callback,
            k = b.getTimer();
            r.call(c, k - d._time);
            d._time = k;
            d._requestAnimationId = a.requestAnimationFrame.call(window, a.prototype.enterFrame)
        };
        a.prototype.executeMainLoop = function(b, d) {
            a._callback = b;
            a._thisObject = d;
            this.enterFrame()
        };
        a.prototype.reset = function() {
            var d = a.instance;
            d._requestAnimationId && (d._time = b.getTimer(), a.cancelAnimationFrame.call(window, d._requestAnimationId), d.enterFrame())
        };
        a.prototype.registerListener = function() {
            var b = function() {
                a.instance.reset()
            },
            d = function() {
                document[c] || b()
            };
            window.onfocus = b;
            window.onblur = function() {};
            var c, k;
            "undefined" !== typeof document.hidden ? (c = "hidden", k = "visibilitychange") : "undefined" !== typeof document.mozHidden ? (c = "mozHidden", k = "mozvisibilitychange") : "undefined" !== typeof document.msHidden ? (c = "msHidden", k = "msvisibilitychange") : "undefined" !== typeof document.webkitHidden && (c = "webkitHidden", k = "webkitvisibilitychange");
            "onpageshow" in window && "onpagehide" in window && window.addEventListener("pageshow", b, !1);
            c && k && document.addEventListener(k, d, !1)
        };
        return a
    } (b.DeviceContext);
    b.HTML5DeviceContext = c;
    c.prototype.__class__ = "egret.HTML5DeviceContext"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(d) {
        function a(a) {
            this.canvas = a;
            this.canvasContext = a.getContext("2d");
            var b = this.canvasContext.setTransform,
            c = this;
            this.canvasContext.setTransform = function(a, d, e, l, m, n) {
                c._matrixA = a;
                c._matrixB = d;
                c._matrixC = e;
                c._matrixD = l;
                c._matrixTx = m;
                c._matrixTy = n;
                b.call(c.canvasContext, a, d, e, l, m, n)
            };
            this._matrixA = 1;
            this._matrixC = this._matrixB = 0;
            this._matrixD = 1;
            this._transformTy = this._transformTx = this._matrixTy = this._matrixTx = 0;
            d.call(this)
        }
        __extends(a, d);
        a.prototype.clearScreen = function() {
            this.setTransform(b.Matrix.identity.identity());
            for (var a = b.RenderFilter.getInstance().getDrawAreaList(), d = 0, c = a.length; d < c; d++) {
                var k = a[d];
                this.clearRect(k.x + this._transformTx, k.y + this._transformTy, k.width, k.height)
            }
            this.renderCost = 0
        };
        a.prototype.clearRect = function(a, b, d, c) {
            this.canvasContext.clearRect(a, b, d, c)
        };
        a.prototype.drawImage = function(a, c, r, k, f, g, l, m, n) {
            c /= b.MainContext.instance.rendererContext.texture_scale_factor;
            r /= b.MainContext.instance.rendererContext.texture_scale_factor;
            k /= b.MainContext.instance.rendererContext.texture_scale_factor;
            f /= b.MainContext.instance.rendererContext.texture_scale_factor;
            a = a._bitmapData;
            g += this._transformTx;
            l += this._transformTy;
            var p = b.getTimer();
            this.canvasContext.drawImage(a, c, r, k, f, g, l, m, n);
            d.prototype.drawImage.call(this, a, c, r, k, f, g, l, m, n);
            this.renderCost += b.getTimer() - p
        };
        a.prototype.setTransform = function(a) {
            1 == a.a && 0 == a.b && 0 == a.c && 1 == a.d && 1 == this._matrixA && 0 == this._matrixB && 0 == this._matrixC && 1 == this._matrixD ? (this._transformTx = a.tx - this._matrixTx, this._transformTy = a.ty - this._matrixTy) : (this._transformTx = this._transformTy = 0, this._matrixA == a.a && this._matrixB == a.b && this._matrixC == a.c && this._matrixD == a.d && this._matrixTx == a.tx && this._matrixTy == a.ty || this.canvasContext.setTransform(a.a, a.b, a.c, a.d, a.tx, a.ty))
        };
        a.prototype.setAlpha = function(a, d) {
            a != this.canvasContext.globalAlpha && (this.canvasContext.globalAlpha = a);
            d ? (this.blendValue = d, this.canvasContext.globalCompositeOperation = d) : this.blendValue != b.BlendMode.NORMAL && (this.blendValue = b.BlendMode.NORMAL, this.canvasContext.globalCompositeOperation = b.BlendMode.NORMAL)
        };
        a.prototype.setupFont = function(a) {
            var b = this.canvasContext,
            d = a.italic ? "italic ": "normal ",
            d = d + (a.bold ? "bold ": "normal "),
            d = d + (a.size + "px " + a.fontFamily);
            b.font = d;
            b.textAlign = "left";
            b.textBaseline = "middle"
        };
        a.prototype.measureText = function(a) {
            return this.canvasContext.measureText(a).width
        };
        a.prototype.drawText = function(a, b, c, k, f) {
            var g = a._strokeColorString,
            l = a.stroke,
            m = this.canvasContext;
            m.fillStyle = a._textColorString;
            m.strokeStyle = g;
            l && (m.lineWidth = 2 * l, m.strokeText(b, c + this._transformTx, k + this._transformTy, f || 65535));
            m.fillText(b, c + this._transformTx, k + this._transformTy, f || 65535);
            d.prototype.drawText.call(this, a, b, c, k, f)
        };
        a.prototype.strokeRect = function(a, b, d, c, f) {
            this.canvasContext.strokeStyle = f;
            this.canvasContext.strokeRect(a, b, d, c)
        };
        a.prototype.pushMask = function(a) {
            this.canvasContext.save();
            this.canvasContext.beginPath();
            this.canvasContext.rect(a.x + this._transformTx, a.y + this._transformTy, a.width, a.height);
            this.canvasContext.clip();
            this.canvasContext.closePath()
        };
        a.prototype.popMask = function() {
            this.canvasContext.restore();
            this.canvasContext.setTransform(1, 0, 0, 1, 0, 0)
        };
        return a
    } (b.RendererContext);
    b.HTML5CanvasRenderer = c;
    c.prototype.__class__ = "egret.HTML5CanvasRenderer"
})(egret || (egret = {}));
var egret_h5_graphics; (function(b) {
    b.beginFill = function(b, a) {
        "undefined" === typeof a && (a = 1);
        var e = "rgba(" + (b >> 16) + "," + ((b & 65280) >> 8) + "," + (b & 255) + "," + a + ")";
        this.fillStyleColor = e;
        this.commandQueue.push(new c(this._setStyle, this, [e]))
    };
    b.drawRect = function(b, a, e, h) {
        this.commandQueue.push(new c(function(a, b, d, c) {
            var e = this.renderContext;
            this.canvasContext.beginPath();
            this.canvasContext.rect(e._transformTx + a, e._transformTy + b, d, c);
            this.canvasContext.closePath()
        },
        this, [b, a, e, h]));
        this._fill()
    };
    b.drawCircle = function(b, a, e) {
        this.commandQueue.push(new c(function(a, b, d) {
            var c = this.renderContext;
            this.canvasContext.beginPath();
            this.canvasContext.arc(c._transformTx + a, c._transformTy + b, d, 0, 2 * Math.PI);
            this.canvasContext.closePath()
        },
        this, [b, a, e]));
        this._fill()
    };
    b.lineStyle = function(b, a, e, h, r, k, f, g) {
        "undefined" === typeof b && (b = NaN);
        "undefined" === typeof a && (a = 0);
        "undefined" === typeof e && (e = 1);
        "undefined" === typeof h && (h = !1);
        "undefined" === typeof r && (r = "normal");
        "undefined" === typeof k && (k = null);
        "undefined" === typeof f && (f = null);
        "undefined" === typeof g && (g = 3);
        this.strokeStyleColor && (this.createEndLineCommand(), this.commandQueue.push(this.endLineCommand));
        this.strokeStyleColor = a = "rgba(" + (a >> 16) + "," + ((a & 65280) >> 8) + "," + (a & 255) + "," + e + ")";
        this.commandQueue.push(new c(function(a, b) {
            this.canvasContext.lineWidth = a;
            this.canvasContext.strokeStyle = b;
            this.canvasContext.beginPath()
        },
        this, [b, a]));
        "undefined" === typeof this.lineX && (this.lineY = this.lineX = 0);
        this.moveTo(this.lineX, this.lineY)
    };
    b.lineTo = function(b, a) {
        this.commandQueue.push(new c(function(a, b) {
            var d = this.renderContext;
            this.canvasContext.lineTo(d._transformTx + a, d._transformTy + b)
        },
        this, [b, a]));
        this.lineX = b;
        this.lineY = a
    };
    b.curveTo = function(b, a, e, h) {
        this.commandQueue.push(new c(function(a, b, d, c) {
            var e = this.renderContext;
            this.canvasContext.quadraticCurveTo(e._transformTx + a, e._transformTy + b, d, c)
        },
        this, [b, a, e, h]));
        this.lineX = e;
        this.lineY = h
    };
    b.moveTo = function(b, a) {
        this.commandQueue.push(new c(function(a, b) {
            var d = this.renderContext;
            this.canvasContext.moveTo(d._transformTx + a, d._transformTy + b)
        },
        this, [b, a]))
    };
    b.clear = function() {
        this.lineY = this.lineX = this.commandQueue.length = 0;
        this.fillStyleColor = this.strokeStyleColor = null
    };
    b.createEndFillCommand = function() {
        this.endFillCommand || (this.endFillCommand = new c(function() {
            this.canvasContext.fill();
            this.canvasContext.closePath()
        },
        this, null))
    };
    b.endFill = function() {
        null != this.fillStyleColor && this._fill();
        this.fillStyleColor = null
    };
    b._fill = function() {
        this.fillStyleColor && (this.createEndFillCommand(), this.commandQueue.push(this.endFillCommand))
    };
    b.createEndLineCommand = function() {
        this.endLineCommand || (this.endLineCommand = new c(function() {
            this.canvasContext.stroke();
            this.canvasContext.closePath()
        },
        this, null))
    };
    b._draw = function(b) {
        this.renderContext = b;
        b = this.canvasContext = this.renderContext.canvasContext;
        b.save();
        var a = this.commandQueue.length;
        this.strokeStyleColor && 0 < a && this.commandQueue[a - 1] != this.endLineCommand && (this.createEndLineCommand(), this.commandQueue.push(this.endLineCommand), a = this.commandQueue.length);
        for (var c = 0; c < a; c++) {
            var h = this.commandQueue[c];
            h.method.apply(h.thisObject, h.args)
        }
        b.restore()
    };
    var c = function() {
        return function(b, a, c) {
            this.method = b;
            this.thisObject = a;
            this.args = c
        }
    } ();
    c.prototype.__class__ = "Command";
    b._setStyle = function(b) {
        this.canvasContext.fillStyle = b;
        this.canvasContext.beginPath()
    };
    b.init = function() {
        for (var d in b) egret.Graphics.prototype[d] = b[d];
        egret.RendererContext.createRendererContext = function(a) {
            return new egret.HTML5CanvasRenderer(a)
        }
    }
})(egret_h5_graphics || (egret_h5_graphics = {}));
egret_h5_graphics.init();
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(d) {
        function a(a) {
            d.call(this);
            this.size = 2E3;
            this.vertSize = 6;
            this.contextLost = !1;
            this.glContextId = 0;
            this.currentBlendMode = "";
            this.currentBaseTexture = null;
            this.currentBatchSize = 0;
            this.maskList = [];
            this.maskDataFreeList = [];
            this.canvasContext = document.createElement("canvas").getContext("2d");
            console.log("\u4f7f\u7528WebGL\u6a21\u5f0f");
            this.canvas = a;
            a.addEventListener("webglcontextlost", this.handleContextLost.bind(this), !1);
            a.addEventListener("webglcontextrestored", this.handleContextRestored.bind(this), !1);
            this.projectionX = a.width / 2;
            this.projectionY = -a.height / 2;
            a = 6 * this.size;
            this.vertices = new Float32Array(4 * this.size * this.vertSize);
            this.indices = new Uint16Array(a);
            for (var c = 0,
            r = 0; c < a; c += 6, r += 4) this.indices[c + 0] = r + 0,
            this.indices[c + 1] = r + 1,
            this.indices[c + 2] = r + 2,
            this.indices[c + 3] = r + 0,
            this.indices[c + 4] = r + 2,
            this.indices[c + 5] = r + 3;
            this.initWebGL();
            this.shaderManager = new b.WebGLShaderManager(this.gl);
            this.worldTransform = new b.Matrix;
            this.initBlendMode();
            b.MainContext.instance.addEventListener(b.Event.FINISH_RENDER, this._draw, this);
            b.TextField.prototype._draw = function(a) {
                this.getDirty() && (this.cacheAsBitmap = !0);
                b.DisplayObject.prototype._draw.call(this, a)
            }
        }
        __extends(a, d);
        a.prototype.handleContextLost = function() {
            this.contextLost = !0
        };
        a.prototype.handleContextRestored = function() {
            this.initWebGL();
            this.shaderManager.setContext(this.gl);
            this.contextLost = !1
        };
        a.prototype.initWebGL = function() {
            for (var a = {
                stencil: !0
            },
            b, d = ["experimental-webgl", "webgl"], c = 0; c < d.length; c++) {
                try {
                    b = this.canvas.getContext(d[c], a)
                } catch(f) {}
                if (b) break
            }
            if (!b) throw Error("\u5f53\u524d\u6d4f\u89c8\u5668\u4e0d\u652f\u6301webgl");
            this.setContext(b)
        };
        a.prototype.setContext = function(a) {
            this.gl = a;
            a.id = this.glContextId++;
            this.vertexBuffer = a.createBuffer();
            this.indexBuffer = a.createBuffer();
            a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
            a.bufferData(a.ELEMENT_ARRAY_BUFFER, this.indices, a.STATIC_DRAW);
            a.bindBuffer(a.ARRAY_BUFFER, this.vertexBuffer);
            a.bufferData(a.ARRAY_BUFFER, this.vertices, a.DYNAMIC_DRAW);
            a.disable(a.DEPTH_TEST);
            a.disable(a.CULL_FACE);
            a.enable(a.BLEND);
            a.colorMask(!0, !0, !0, !0)
        };
        a.prototype.initBlendMode = function() {
            a.blendModesWebGL[b.BlendMode.NORMAL] = [this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA];
            a.blendModesWebGL[b.BlendMode.ADD] = [this.gl.SRC_ALPHA, this.gl.DST_ALPHA]
        };
        a.prototype.start = function() {
            if (!this.contextLost) {
                var a = this.gl;
                a.activeTexture(a.TEXTURE0);
                a.bindBuffer(a.ARRAY_BUFFER, this.vertexBuffer);
                a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
                var b = this.shaderManager.defaultShader;
                a.uniform2f(b.projectionVector, this.projectionX, this.projectionY);
                var d = 4 * this.vertSize;
                a.vertexAttribPointer(b.aVertexPosition, 2, a.FLOAT, !1, d, 0);
                a.vertexAttribPointer(b.aTextureCoord, 2, a.FLOAT, !1, d, 8);
                a.vertexAttribPointer(b.colorAttribute, 2, a.FLOAT, !1, d, 16)
            }
        };
        a.prototype.clearScreen = function() {
            var a = this.gl;
            a.colorMask(!0, !0, !0, !0);
            for (var d = b.RenderFilter.getInstance().getDrawAreaList(), c = 0, k = d.length; c < k; c++) {
                var f = d[c];
                a.viewport(f.x, f.y, f.width, f.height);
                a.bindFramebuffer(a.FRAMEBUFFER, null);
                a.clearColor(0, 0, 0, 0);
                a.clear(a.COLOR_BUFFER_BIT)
            }
            this.renderCost = 0
        };
        a.prototype.setBlendMode = function(d) {
            d || (d = b.BlendMode.NORMAL);
            if (this.currentBlendMode != d) {
                var c = a.blendModesWebGL[d];
                c && (this.gl.blendFunc(c[0], c[1]), this.currentBlendMode = d)
            }
        };
        a.prototype.drawImage = function(a, d, c, k, f, g, l, m, n) {
            if (!this.contextLost) {
                var p = b.MainContext.instance.rendererContext.texture_scale_factor;
                d /= p;
                c /= p;
                k /= p;
                f /= p;
                this.createWebGLTexture(a);
                if (a.webGLTexture !== this.currentBaseTexture || this.currentBatchSize >= this.size) this._draw(),
                this.currentBaseTexture = a.webGLTexture;
                var t = this.worldTransform,
                q = t.a,
                s = t.b,
                u = t.c,
                v = t.d,
                x = t.tx,
                y = t.ty;
                0 == g && 0 == l || t.append(1, 0, 0, 1, g, l);
                1 == k / m && 1 == f / n || t.append(m / k, 0, 0, n / f, 0, 0);
                g = t.a;
                l = t.b;
                m = t.c;
                n = t.d;
                var p = t.tx,
                w = t.ty;
                t.a = q;
                t.b = s;
                t.c = u;
                t.d = v;
                t.tx = x;
                t.ty = y;
                q = a._sourceWidth;
                s = a._sourceHeight;
                a = k;
                t = f;
                d /= q;
                c /= s;
                k /= q;
                f /= s;
                q = this.vertices;
                s = 4 * this.currentBatchSize * this.vertSize;
                u = this.worldAlpha;
                q[s++] = p;
                q[s++] = w;
                q[s++] = d;
                q[s++] = c;
                q[s++] = u;
                q[s++] = 16777215;
                q[s++] = g * a + p;
                q[s++] = l * a + w;
                q[s++] = k + d;
                q[s++] = c;
                q[s++] = u;
                q[s++] = 16777215;
                q[s++] = g * a + m * t + p;
                q[s++] = n * t + l * a + w;
                q[s++] = k + d;
                q[s++] = f + c;
                q[s++] = u;
                q[s++] = 16777215;
                q[s++] = m * t + p;
                q[s++] = n * t + w;
                q[s++] = d;
                q[s++] = f + c;
                q[s++] = u;
                q[s++] = 16777215;
                this.currentBatchSize++
            }
        };
        a.prototype._draw = function() {
            if (0 != this.currentBatchSize && !this.contextLost) {
                var a = b.getTimer();
                this.start();
                var d = this.gl;
                d.bindTexture(d.TEXTURE_2D, this.currentBaseTexture);
                var c = this.vertices.subarray(0, 4 * this.currentBatchSize * this.vertSize);
                d.bufferSubData(d.ARRAY_BUFFER, 0, c);
                d.drawElements(d.TRIANGLES, 6 * this.currentBatchSize, d.UNSIGNED_SHORT, 0);
                this.currentBatchSize = 0;
                this.renderCost += b.getTimer() - a;
                b.Profiler.getInstance().onDrawImage()
            }
        };
        a.prototype.setTransform = function(a) {
            var b = this.worldTransform;
            b.a = a.a;
            b.b = a.b;
            b.c = a.c;
            b.d = a.d;
            b.tx = a.tx;
            b.ty = a.ty
        };
        a.prototype.setAlpha = function(a, b) {
            this.worldAlpha = a;
            b && this.setBlendMode(b)
        };
        a.prototype.createWebGLTexture = function(a) {
            if (!a.webGLTexture) {
                var b = this.gl;
                a.webGLTexture = b.createTexture();
                b.bindTexture(b.TEXTURE_2D, a.webGLTexture);
                b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0);
                b.texImage2D(b.TEXTURE_2D, 0, b.RGBA, b.RGBA, b.UNSIGNED_BYTE, a._bitmapData);
                b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MAG_FILTER, b.LINEAR);
                b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MIN_FILTER, b.LINEAR);
                b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_S, b.CLAMP_TO_EDGE);
                b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_T, b.CLAMP_TO_EDGE);
                b.bindTexture(b.TEXTURE_2D, null)
            }
        };
        a.prototype.pushMask = function(a) {
            this._draw();
            var b = this.gl;
            0 == this.maskList.length && (b.enable(b.STENCIL_TEST), b.stencilFunc(b.ALWAYS, 1, 1));
            var d = this.maskDataFreeList.pop();
            d ? (d.x = a.x, d.y = a.y, d.w = a.width, d.h = a.height) : d = {
                x: a.x,
                y: a.y,
                w: a.width,
                h: a.height
            };
            this.maskList.push(d);
            b.colorMask(!1, !1, !1, !1);
            b.stencilOp(b.KEEP, b.KEEP, b.INCR);
            this.renderGraphics(d);
            b.colorMask(!0, !0, !0, !0);
            b.stencilFunc(b.NOTEQUAL, 0, this.maskList.length);
            b.stencilOp(b.KEEP, b.KEEP, b.KEEP)
        };
        a.prototype.popMask = function() {
            this._draw();
            var a = this.gl,
            b = this.maskList.pop();
            b && (a.colorMask(!1, !1, !1, !1), a.stencilOp(a.KEEP, a.KEEP, a.DECR), this.renderGraphics(b), a.colorMask(!0, !0, !0, !0), a.stencilFunc(a.NOTEQUAL, 0, this.maskList.length), a.stencilOp(a.KEEP, a.KEEP, a.KEEP), this.maskDataFreeList.push(b));
            0 == this.maskList.length && a.disable(a.STENCIL_TEST)
        };
        a.prototype.setupFont = function(a) {
            var b = this.canvasContext,
            d = a.italic ? "italic ": "normal ",
            d = d + (a.bold ? "bold ": "normal "),
            d = d + (a.size + "px " + a.fontFamily);
            b.font = d;
            b.textAlign = "left";
            b.textBaseline = "middle"
        };
        a.prototype.measureText = function(a) {
            return this.canvasContext.measureText(a).width
        };
        a.prototype.renderGraphics = function(a) {
            var b = this.gl,
            d = this.shaderManager.primitiveShader;
            this.graphicsPoints ? (this.graphicsPoints.length = 0, this.graphicsIndices.length = 0) : (this.graphicsPoints = [], this.graphicsIndices = [], this.graphicsBuffer = b.createBuffer(), this.graphicsIndexBuffer = b.createBuffer());
            this.updateGraphics(a);
            this.shaderManager.activateShader(d);
            b.blendFunc(b.ONE, b.ONE_MINUS_SRC_ALPHA);
            b.uniformMatrix3fv(d.translationMatrix, !1, this.worldTransform.toArray(!0));
            b.uniform2f(d.projectionVector, this.projectionX, -this.projectionY);
            b.uniform2f(d.offsetVector, 0, 0);
            b.uniform3fv(d.tintColor, [1, 1, 1]);
            b.uniform1f(d.alpha, this.worldAlpha);
            b.bindBuffer(b.ARRAY_BUFFER, this.graphicsBuffer);
            b.vertexAttribPointer(d.aVertexPosition, 2, b.FLOAT, !1, 24, 0);
            b.vertexAttribPointer(d.colorAttribute, 4, b.FLOAT, !1, 24, 8);
            b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, this.graphicsIndexBuffer);
            b.drawElements(b.TRIANGLE_STRIP, this.graphicsIndices.length, b.UNSIGNED_SHORT, 0);
            this.shaderManager.activateShader(this.shaderManager.defaultShader)
        };
        a.prototype.updateGraphics = function(a) {
            var b = this.gl;
            this.buildRectangle(a);
            b.bindBuffer(b.ARRAY_BUFFER, this.graphicsBuffer);
            b.bufferData(b.ARRAY_BUFFER, new Float32Array(this.graphicsPoints), b.STATIC_DRAW);
            b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, this.graphicsIndexBuffer);
            b.bufferData(b.ELEMENT_ARRAY_BUFFER, new Uint16Array(this.graphicsIndices), b.STATIC_DRAW)
        };
        a.prototype.buildRectangle = function(a) {
            var b = a.x,
            d = a.y,
            c = a.w;
            a = a.h;
            var f = this.graphicsPoints,
            g = this.graphicsIndices,
            l = f.length / 6;
            f.push(b, d);
            f.push(0, 0, 0, 1);
            f.push(b + c, d);
            f.push(0, 0, 0, 1);
            f.push(b, d + a);
            f.push(0, 0, 0, 1);
            f.push(b + c, d + a);
            f.push(0, 0, 0, 1);
            g.push(l, l, l + 1, l + 2, l + 3, l + 3)
        };
        a.blendModesWebGL = {};
        return a
    } (b.RendererContext);
    b.WebGLRenderer = c;
    c.prototype.__class__ = "egret.WebGLRenderer"
})(egret || (egret = {})); (function(b) {
    var c = function() {
        function b() {}
        b.compileProgram = function(a, c, h) {
            h = b.compileFragmentShader(a, h);
            c = b.compileVertexShader(a, c);
            var r = a.createProgram();
            a.attachShader(r, c);
            a.attachShader(r, h);
            a.linkProgram(r);
            a.getProgramParameter(r, a.LINK_STATUS) || console.log("\u65e0\u6cd5\u521d\u59cb\u5316\u7740\u8272\u5668");
            return r
        };
        b.compileFragmentShader = function(a, c) {
            return b._compileShader(a, c, a.FRAGMENT_SHADER)
        };
        b.compileVertexShader = function(a, c) {
            return b._compileShader(a, c, a.VERTEX_SHADER)
        };
        b._compileShader = function(a, b, d) {
            d = a.createShader(d);
            a.shaderSource(d, b);
            a.compileShader(d);
            return a.getShaderParameter(d, a.COMPILE_STATUS) ? d: (console.log(a.getShaderInfoLog(d)), null)
        };
        b.checkCanUseWebGL = function() {
            if (void 0 == b.canUseWebGL) try {
                var a = document.createElement("canvas");
                b.canUseWebGL = !!window.WebGLRenderingContext && !(!a.getContext("webgl") && !a.getContext("experimental-webgl"))
            } catch(c) {
                b.canUseWebGL = !1
            }
            return b.canUseWebGL
        };
        return b
    } ();
    b.WebGLUtils = c;
    c.prototype.__class__ = "egret.WebGLUtils"
})(egret || (egret = {})); (function(b) {
    var c = function() {
        function b(a) {
            this.maxAttibs = 10;
            this.attribState = [];
            this.tempAttribState = [];
            for (var d = 0; d < this.maxAttibs; d++) this.attribState[d] = !1;
            this.setContext(a)
        }
        b.prototype.setContext = function(b) {
            this.gl = b;
            this.primitiveShader = new a(b);
            this.defaultShader = new d(b);
            this.activateShader(this.defaultShader)
        };
        b.prototype.activateShader = function(a) {
            this.gl.useProgram(a.program);
            this.setAttribs(a.attributes)
        };
        b.prototype.setAttribs = function(a) {
            var b, d;
            d = this.tempAttribState.length;
            for (b = 0; b < d; b++) this.tempAttribState[b] = !1;
            d = a.length;
            for (b = 0; b < d; b++) this.tempAttribState[a[b]] = !0;
            a = this.gl;
            d = this.attribState.length;
            for (b = 0; b < d; b++) this.attribState[b] !== this.tempAttribState[b] && (this.attribState[b] = this.tempAttribState[b], this.tempAttribState[b] ? a.enableVertexAttribArray(b) : a.disableVertexAttribArray(b))
        };
        return b
    } ();
    b.WebGLShaderManager = c;
    c.prototype.__class__ = "egret.WebGLShaderManager";
    var d = function() {
        function a(b) {
            this.defaultVertexSrc = "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec2 aColor;\nuniform vec2 projectionVector;\nuniform vec2 offsetVector;\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nconst vec2 center = vec2(-1.0, 1.0);\nvoid main(void) {\n   gl_Position = vec4( ((aVertexPosition + offsetVector) / projectionVector) + center , 0.0, 1.0);\n   vTextureCoord = aTextureCoord;\n   vec3 color = mod(vec3(aColor.y/65536.0, aColor.y/256.0, aColor.y), 256.0) / 256.0;\n   vColor = vec4(color * aColor.x, aColor.x);\n}";
            this.program = null;
            this.fragmentSrc = "precision lowp float;\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nuniform sampler2D uSampler;\nvoid main(void) {\n   gl_FragColor = texture2D(uSampler, vTextureCoord) * vColor ;\n}";
            this.gl = b;
            this.init()
        }
        a.prototype.init = function() {
            var a = this.gl,
            d = b.WebGLUtils.compileProgram(a, this.defaultVertexSrc, this.fragmentSrc);
            a.useProgram(d);
            this.uSampler = a.getUniformLocation(d, "uSampler");
            this.projectionVector = a.getUniformLocation(d, "projectionVector");
            this.offsetVector = a.getUniformLocation(d, "offsetVector");
            this.dimensions = a.getUniformLocation(d, "dimensions");
            this.aVertexPosition = a.getAttribLocation(d, "aVertexPosition");
            this.aTextureCoord = a.getAttribLocation(d, "aTextureCoord");
            this.colorAttribute = a.getAttribLocation(d, "aColor"); - 1 === this.colorAttribute && (this.colorAttribute = 2);
            this.attributes = [this.aVertexPosition, this.aTextureCoord, this.colorAttribute];
            this.program = d
        };
        return a
    } ();
    b.EgretShader = d;
    d.prototype.__class__ = "egret.EgretShader";
    var a = function() {
        function a(b) {
            this.alpha = this.translationMatrix = this.attributes = this.colorAttribute = this.aVertexPosition = this.tintColor = this.offsetVector = this.projectionVector = this.program = null;
            this.fragmentSrc = "precision mediump float;\nvarying vec4 vColor;\nvoid main(void) {\n   gl_FragColor = vColor;\n}";
            this.vertexSrc = "attribute vec2 aVertexPosition;\nattribute vec4 aColor;\nuniform mat3 translationMatrix;\nuniform vec2 projectionVector;\nuniform vec2 offsetVector;\nuniform float alpha;\nuniform vec3 tint;\nvarying vec4 vColor;\nvoid main(void) {\n   vec3 v = translationMatrix * vec3(aVertexPosition , 1.0);\n   v -= offsetVector.xyx;\n   gl_Position = vec4( v.x / projectionVector.x -1.0, v.y / -projectionVector.y + 1.0 , 0.0, 1.0);\n   vColor = aColor * vec4(tint * alpha, alpha);\n}";
            this.gl = b;
            this.init()
        }
        a.prototype.init = function() {
            var a = this.gl,
            d = b.WebGLUtils.compileProgram(a, this.vertexSrc, this.fragmentSrc);
            a.useProgram(d);
            this.projectionVector = a.getUniformLocation(d, "projectionVector");
            this.offsetVector = a.getUniformLocation(d, "offsetVector");
            this.tintColor = a.getUniformLocation(d, "tint");
            this.aVertexPosition = a.getAttribLocation(d, "aVertexPosition");
            this.colorAttribute = a.getAttribLocation(d, "aColor");
            this.attributes = [this.aVertexPosition, this.colorAttribute];
            this.translationMatrix = a.getUniformLocation(d, "translationMatrix");
            this.alpha = a.getUniformLocation(d, "alpha");
            this.program = d
        };
        return a
    } ();
    b.PrimitiveShader = a;
    a.prototype.__class__ = "egret.PrimitiveShader"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(d) {
        function a() {
            d.call(this)
        }
        __extends(a, d);
        a.prototype.proceed = function(a) {
            function d(c) {
                b.IOErrorEvent.dispatchIOErrorEvent(a)
            }
            function c(d) {
                switch (a.dataFormat) {
                case b.URLLoaderDataFormat.TEXT:
                    a.data = f.responseText;
                    break;
                case b.URLLoaderDataFormat.VARIABLES:
                    a.data = new b.URLVariables(f.responseText);
                    break;
                case b.URLLoaderDataFormat.BINARY:
                    a.data = f.response;
                    break;
                default:
                    a.data = f.responseText
                }
                b.callLater(b.Event.dispatchEvent, b.Event, a, b.Event.COMPLETE)
            }
            if (a.dataFormat == b.URLLoaderDataFormat.TEXTURE) this.loadTexture(a);
            else if (a.dataFormat == b.URLLoaderDataFormat.SOUND) this.loadSound(a);
            else {
                var k = a._request,
                f = this.getXHR();
                f.onerror = d;
                f.onload = c;
                f.open(k.method, k.url, !0);
                this.setResponseType(f, a.dataFormat);
                k.method != b.URLRequestMethod.GET && k.data ? k.data instanceof b.URLVariables ? (f.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), f.send(k.data.toString())) : (f.setRequestHeader("Content-Type", "multipart/form-data"), f.send(k.data)) : f.send()
            }
        };
        a.prototype.loadSound = function(a) {
            function d(f) {
                window.clearTimeout(k.__timeoutId);
                k.removeEventListener("canplaythrough", d, !1);
                k.removeEventListener("error", c, !1);
                f = new b.Sound;
                f.audio = k;
                a.data = f;
                b.callLater(b.Event.dispatchEvent, b.Event, a, b.Event.COMPLETE)
            }
            function c(f) {
                window.clearTimeout(k.__timeoutId);
                k.removeEventListener("canplaythrough", d, !1);
                k.removeEventListener("error", c, !1);
                b.IOErrorEvent.dispatchIOErrorEvent(a)
            }
            var k = new Audio(a._request.url);
            k.__timeoutId = window.setTimeout(d, 100);
            k.addEventListener("canplaythrough", d, !1);
            k.addEventListener("error", c, !1);
            k.load()
        };
        a.prototype.getXHR = function() {
            return window.XMLHttpRequest ? new window.XMLHttpRequest: new ActiveXObject("MSXML2.XMLHTTP")
        };
        a.prototype.setResponseType = function(a, d) {
            switch (d) {
            case b.URLLoaderDataFormat.TEXT:
            case b.URLLoaderDataFormat.VARIABLES:
                a.responseType = b.URLLoaderDataFormat.TEXT;
                break;
            case b.URLLoaderDataFormat.BINARY:
                a.responseType = "arraybuffer";
                break;
            default:
                a.responseType = d
            }
        };
        a.prototype.loadTexture = function(a) {
            var d = a._request,
            c = new Image;
            c.crossOrigin = "Anonymous";
            c.onload = function(d) {
                c.onerror = null;
                c.onload = null;
                d = new b.Texture;
                d._setBitmapData(c);
                a.data = d;
                b.callLater(b.Event.dispatchEvent, b.Event, a, b.Event.COMPLETE)
            };
            c.onerror = function(d) {
                c.onerror = null;
                c.onload = null;
                b.IOErrorEvent.dispatchIOErrorEvent(a)
            };
            c.src = d.url
        };
        return a
    } (b.NetContext);
    b.HTML5NetContext = c;
    c.prototype.__class__ = "egret.HTML5NetContext"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}; (function(b) {
    var c = function(d) {
        function a(a) {
            d.call(this);
            this.canvas = a;
            this._isTouchDown = !1
        }
        __extends(a, d);
        a.prototype.run = function() {
            var a = this;
            window.navigator.msPointerEnabled ? (this.canvas.addEventListener("MSPointerDown",
            function(b) {
                a._onTouchBegin(b);
                b.stopPropagation();
                b.preventDefault()
            },
            !1), this.canvas.addEventListener("MSPointerMove",
            function(b) {
                a._onTouchMove(b);
                b.stopPropagation();
                b.preventDefault()
            },
            !1), this.canvas.addEventListener("MSPointerUp",
            function(b) {
                a._onTouchEnd(b);
                b.stopPropagation();
                b.preventDefault()
            },
            !1)) : b.MainContext.deviceType == b.MainContext.DEVICE_MOBILE ? this.addTouchListener() : b.MainContext.deviceType == b.MainContext.DEVICE_PC && (this.addTouchListener(), this.addMouseListener());
            window.addEventListener("mousedown",
            function(b) {
                a.inOutOfCanvas(b) ? a.dispatchLeaveStageEvent() : a._isTouchDown = !0
            });
            window.addEventListener("mouseup",
            function(b) {
                a._isTouchDown && a.inOutOfCanvas(b) && a.dispatchLeaveStageEvent();
                a._isTouchDown = !1
            })
        };
        a.prototype.addMouseListener = function() {
            var a = this;
            this.canvas.addEventListener("mousedown",
            function(b) {
                a._onTouchBegin(b)
            });
            this.canvas.addEventListener("mousemove",
            function(b) {
                a._onTouchMove(b)
            });
            this.canvas.addEventListener("mouseup",
            function(b) {
                a._onTouchEnd(b)
            })
        };
        a.prototype.addTouchListener = function() {
            var a = this;
            this.canvas.addEventListener("touchstart",
            function(b) {
                for (var d = b.changedTouches.length,
                c = 0; c < d && c < a.maxTouches; c++) a._onTouchBegin(b.changedTouches[c]);
                b.stopPropagation();
                b.preventDefault()
            },
            !1);
            this.canvas.addEventListener("touchmove",
            function(b) {
                for (var d = b.changedTouches.length,
                c = 0; c < d && c < a.maxTouches; c++) a._onTouchMove(b.changedTouches[c]);
                b.stopPropagation();
                b.preventDefault()
            },
            !1);
            this.canvas.addEventListener("touchend",
            function(b) {
                for (var d = b.changedTouches.length,
                c = 0; c < d && c < a.maxTouches; c++) a._onTouchEnd(b.changedTouches[c]);
                b.stopPropagation();
                b.preventDefault()
            },
            !1);
            this.canvas.addEventListener("touchcancel",
            function(b) {
                for (var d = b.changedTouches.length,
                c = 0; c < d && c < a.maxTouches; c++) a._onTouchEnd(b.changedTouches[c]);
                b.stopPropagation();
                b.preventDefault()
            },
            !1)
        };
        a.prototype.inOutOfCanvas = function(a) {
            a = this.getLocation(this.canvas, a);
            return 0 > a.x || 0 > a.y || a.x > this.canvas.width || a.y > this.canvas.height ? !0 : !1
        };
        a.prototype.dispatchLeaveStageEvent = function() {
            b.MainContext.instance.stage.dispatchEventWith(b.Event.LEAVE_STAGE)
        };
        a.prototype._onTouchBegin = function(a) {
            var b = this.getLocation(this.canvas, a),
            d = -1;
            a.hasOwnProperty("identifier") && (d = a.identifier);
            this.onTouchBegan(b.x, b.y, d)
        };
        a.prototype._onTouchMove = function(a) {
            var b = this.getLocation(this.canvas, a),
            d = -1;
            a.hasOwnProperty("identifier") && (d = a.identifier);
            this.onTouchMove(b.x, b.y, d)
        };
        a.prototype._onTouchEnd = function(a) {
            var b = this.getLocation(this.canvas, a),
            d = -1;
            a.hasOwnProperty("identifier") && (d = a.identifier);
            this.onTouchEnd(b.x, b.y, d)
        };
        a.prototype.getLocation = function(a, d) {
            var c = document.documentElement,
            k = window,
            f, g;
            "function" === typeof a.getBoundingClientRect ? (g = a.getBoundingClientRect(), f = g.left, g = g.top) : g = f = 0;
            f += k.pageXOffset - c.clientLeft;
            g += k.pageYOffset - c.clientTop;
            null != d.pageX ? (c = d.pageX, k = d.pageY) : (f -= document.body.scrollLeft, g -= document.body.scrollTop, c = d.clientX, k = d.clientY);
            var l = b.Point.identity;
            l.x = (c - f) / b.StageDelegate.getInstance().getScaleX();
            l.y = (k - g) / b.StageDelegate.getInstance().getScaleY();
            return l
        };
        return a
    } (b.TouchContext);
    b.HTML5TouchContext = c;
    c.prototype.__class__ = "egret.HTML5TouchContext"
})(egret || (egret = {}));
var __extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
},
BaseView = function(b) {
    function c() {
        b.call(this);
        this.frontContainer = new egret.DisplayObjectContainer;
        this.backContainer = new egret.DisplayObjectContainer
    }
    __extends(c, b);
    c.prototype.render = function(b) {};
    return c
} (egret.DisplayObjectContainer);
BaseView.prototype.__class__ = "BaseView";
var GameConfig = function() {
    function b() {}
    b.STAGE_WIDTH = 800;
    b.STAGE_HEIGHT = 430;
    b.BACKGROUND_WIDTH = 283;
    b.FB_WIDTH = 282;
    b.GAME_PRE = 430 / 600;
    return b
} ();
GameConfig.prototype.__class__ = "GameConfig";
var __extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
},
GameEvent = function(b) {
    function c(d, a, c) {
        "undefined" === typeof a && (a = !1);
        "undefined" === typeof c && (c = !1);
        b.call(this, d, a, c)
    }
    __extends(c, b);
    c.HIT = "hit";
    c.CREATE_KNIFE = "create_knife";
    c.START_GAME = "start_game";
    c.STOP_GAME = "stop_game";
    return c
} (egret.Event);
GameEvent.prototype.__class__ = "GameEvent";
var __extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
},
Knife = function(b) {
    function c(d) {
        "undefined" === typeof d && (d = "knife");
        b.call(this);
        this.anchorY = this.anchorX = 0.5;
        this._type = d;
        d = new egret.Bitmap;
        var a = RES.getRes("game");
        d.texture = a.getTexture(this._type);
        d.scaleY = d.scaleX = GameConfig.GAME_PRE;
        this.addChild(d);
        var a = GameConfig.STAGE_WIDTH >> 1,
        e = Math.random() * a + a;
        GameApp.GAME_ROLE_X > GameConfig.STAGE_WIDTH >> 1 ? (this._dic = -KnifePage.X_RATE, d = Math.random() * a + a, a = d - e) : (this._dic = KnifePage.X_RATE, d = Math.random() * a, a = Math.random() * a + e);
        this.startPt = new egret.Point(d, GameConfig.STAGE_HEIGHT);
        this.endPt = new egret.Point(a, GameConfig.STAGE_HEIGHT);
        this._hight = c.MIN_Y + Math.random() * c.MIN_Y;
        this.init();
        this.x = this.startPt.x;
        this.y = this.startPt.y;
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.onRemoveToStage, this)
    }
    __extends(c, b);
    c.prototype.onAddToStage = function(b) {
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this)
    };
    c.prototype.onRemoveToStage = function(b) {
        this.visible = !1
    };
    c.prototype.init = function() {
        this.x = this.startPt.x;
        this.y = this.startPt.y;
        this.initParabola()
    };
    c.prototype.render = function() {
        this.rotation += 0.8 * GameApp.TIEM_DT;
        this.x += this._dic * GameApp.TIEM_DT;
        this.y = this.getY(this.x)
    };
    c.prototype.initParabola = function() {
        this.vertexPt = new egret.Point(this.startPt.x + (this.endPt.x - this.startPt.x) / 2, this.endPt.y - this._hight);
        var b = this.startPt.x,
        a = this.endPt.x,
        c = this.vertexPt.x,
        h = this.startPt.y,
        r = this.endPt.y;
        this.b = ((h - this.vertexPt.y) * (b * b - a * a) - (h - r) * (b * b - c * c)) / ((b - c) * (b * b - a * a) - (b - a) * (b * b - c * c));
        this.a = (h - r - this.b * (b - a)) / (b * b - a * a);
        this.c = h - this.a * b * b - this.b * b
    };
    c.prototype.getY = function(b) {
        return this.a * b * b + this.b * b + this.c
    };
    c.prototype.knifeComplete = function() {};
    c.prototype.knife2Complete = function() {};
    c.MIN_Y = 280;
    return c
} (egret.DisplayObjectContainer);
Knife.prototype.__class__ = "Knife";
var __extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
},
Role = function(b) {
    function c() {
        b.call(this);
        this.anchorX = 0.5;
        this._current = -1;
        this.createRole();
        this.playAction(c.STAND_ACTION)
    }
    __extends(c, b);
    c.prototype.createRole = function() {
        this.createStandAction();
        this.createRunAction();
        this.createKillAction()
    };
    c.prototype.createStandAction = function() {
        this._standActionMc = new egret.Bitmap;
        var b = RES.getRes("game");
        this._standActionMc.texture = b.getTexture("role1")
    };
    c.prototype.createRunAction = function() {
        var b = RES.getRes("role_run_json"),
        a = RES.getRes("role_run_image");
        this._runActionMc = new egret.MovieClip(b, a);
        this._runActionMc.gotoAndPlay("run")
    };
    c.prototype.createKillAction = function() {
        var b = RES.getRes("role_kill_movie_json"),
        a = RES.getRes("role_kill_movie_image");
        this._killActionMc = new egret.MovieClip(b, a);
        this._killActionMc.frameRate = 40;
        this._killActionMc.gotoAndPlay("role_kill_movie")
    };
    c.prototype.playAction = function(b, a) {
        "undefined" === typeof a && (a = null);
        if (this._current != b) {
            for (this._current = b; 0 < this.numChildren;) this.removeChildAt(0);
            b == c.STAND_ACTION ? a ? (this._standActionMc.alpha = 0, this.addChild(this._standActionMc), egret.Tween.get(this._standActionMc, {
                loop: !1
            }).to({
                alpha: 1
            },
            1E3)) : this.addChild(this._standActionMc) : b == c.RUN_ACTION ? this.addChild(this._runActionMc) : b == c.KILL_ACTION && (this.addChild(this._killActionMc), this._killActionMc.visible = !0, this._killActionMc.gotoAndPlay("role_kill_movie"), this._killActionMc.addEventListener("role_kill_play_over", this.onRoleKillMoviePlayOverHandler, this))
        }
    };
    c.prototype.onRoleKillMoviePlayOverHandler = function(b) {
        this._killActionMc.removeEventListener("role_kill_play_over", this.onRoleKillMoviePlayOverHandler, this);
        egret.Logger.warning("role_kill_play_over");
        this._killActionMc.visible = !1;
        this._killActionMc.stop()
    };
    c.STAND_ACTION = 1;
    c.RUN_ACTION = 2;
    c.KILL_ACTION = 3;
    c.isDead = !1;
    return c
} (egret.DisplayObjectContainer);
Role.prototype.__class__ = "Role";
var __extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
},
Star = function(b) {
    function c(d) {
        b.call(this);
        this.frameRate = 10;
        this._source = d;
        d = new egret.Bitmap;
        d.texture = RES.getRes("game." + this._source);
        this.addChild(d);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this)
    }
    __extends(c, b);
    c.prototype.onAddToStage = function(b) {
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        b = Math.round(2E3 * Math.random()) + 1E3;
        egret.Tween.get(this, {
            loop: !0
        }).to({
            alpha: 0
        },
        b).to({
            alpha: 1
        },
        b)
    };
    return c
} (egret.DisplayObjectContainer);
Star.prototype.__class__ = "Star";
var __extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
},
KnifePage = function(b) {
    function c() {
        b.call(this);
        this._isDead = !1;
        this.knifeList = [];
        this.hitTestSprite = new egret.Shape;
        this.addChild(this.hitTestSprite);
        this.timer = new egret.Timer(3E4, 0);
        this.timer.addEventListener(egret.TimerEvent.TIMER, this.timerFunc, this);
        this.timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.timerComFunc, this);
        this.timer.start()
    }
    __extends(c, b);
    c.prototype.timerFunc = function() {
        0.2 > c.X_RATE && (c.X_RATE += 0.012)
    };
    c.prototype.timerComFunc = function() {};
    c.prototype.createKnife = function() {
        if (!Role.isDead) if (this.knifeList.length >= c.MAX_KNIFE) egret.setTimeout(this.createKnife, this, 1500);
        else {
            var b = new Knife,
            b = 0 == GameApp.GAME_SCORE % 10 && 0 < GameApp.GAME_SCORE ? new Knife("knife2") : new Knife("knife");
            this.addChild(b);
            this.knifeList.push(b);
            b = new GameEvent(GameEvent.CREATE_KNIFE);
            this.dispatchEvent(b);
            Role.isDead || egret.setTimeout(this.createKnife, this, 1500)
        }
    };
    c.prototype.render = function(b) {
        var a;
        if (0 < this.knifeList.length) for (var c = this.knifeList.length - 1; 0 <= c; c--) {
            a = this.knifeList[c];
            a.render();
            if (a.y > GameConfig.STAGE_HEIGHT || a.x > GameConfig.STAGE_WIDTH) {
                this.removeChild(a);
                var h = this.knifeList.indexOf(a);
                this.knifeList.splice(h, 1)
            }
            if (!Role.isDead && b.contains(a.x, a.y)) {
                this.dispatchEvent(new GameEvent(GameEvent.HIT));
                this.knifeList.splice(0, this.knifeList.length);
                DisplayTool.removeAllChildren(this);
                break
            }
        } else Role.isDead || this.createKnife()
    };
    c.MAX_KNIFE = 4;
    c.X_RATE = 0.08;
    return c
} (egret.DisplayObjectContainer);
KnifePage.prototype.__class__ = "KnifePage";
var __extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
},
LoadingUI = function(b) {
    function c() {
        b.call(this);
        this.createView()
    }
    __extends(c, b);
    c.prototype.createView = function() {
        this.textField = new egret.TextField;
        this.addChild(this.textField);
        this.textField.y = 300;
        this.textField.width = 480;
        this.textField.height = 100;
        this.textField.textAlign = "center"
    };
    c.prototype.setProgress = function(b, a) {
        this.textField.text = "\u6e38\u620f\u52a0\u8f7d\u4e2d..." + b + "/" + a
    };
    return c
} (egret.Sprite);
LoadingUI.prototype.__class__ = "LoadingUI";
var __extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
},
MiddleView = function(b) {
    function c() {
        b.call(this);
        this.init()
    }
    __extends(c, b);
    c.prototype.init = function() {
        this.createContainer(this.frontContainer);
        this.createContainer(this.backContainer);
        this.addChild(this.frontContainer);
        this.addChild(this.backContainer);
        this.backContainer.x = this.frontContainer.width
    };
    c.prototype.createContainer = function(b) {
        for (var a = RES.getRes("game"), c = 0; 4 > c; c++) {
            var h = c + 1,
            r = new egret.Bitmap;
            r.texture = a.getTexture("mb" + h);
            r.scaleY = 0.8;
            r.x = c * GameConfig.FB_WIDTH;
            b.addChild(r)
        }
    };
    c.prototype.render = function(d) {
        b.prototype.render.call(this, d);
        d = d == Direction.LEFT ? -1 : 1;
        this.frontContainer.x += d * c.RATE * GameApp.TIEM_DT;
        this.backContainer.x += d * c.RATE * GameApp.TIEM_DT;
        this.frontContainer.x < -this.frontContainer.width && (this.frontContainer.x = parseInt((this.backContainer.x + this.backContainer.width).toString()));
        this.backContainer.x < -this.backContainer.width && (this.backContainer.x = parseInt((this.frontContainer.x + this.frontContainer.width).toString()));
        this.frontContainer.x > GameConfig.STAGE_WIDTH && (this.frontContainer.x = parseInt((this.backContainer.x - this.backContainer.width).toString()));
        this.backContainer.x > GameConfig.STAGE_WIDTH && (this.backContainer.x = parseInt((this.frontContainer.x - this.frontContainer.width).toString()))
    };
    c.RATE = 0.08;
    return c
} (BaseView);
MiddleView.prototype.__class__ = "MiddleView";
var __extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
},
MoonPage = function(b) {
    function c() {
        b.call(this);
        var d = new egret.Bitmap,
        a = RES.getRes("game").getTexture("moon");
        d.texture = a;
        d.scaleY = d.scaleX = GameConfig.GAME_PRE;
        this.addChild(d);
        d.x = GameConfig.STAGE_WIDTH - d.width;
        d.y = 30
    }
    __extends(c, b);
    return c
} (egret.DisplayObjectContainer);
MoonPage.prototype.__class__ = "MoonPage";
var __extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
},
NearbyView = function(b) {
    function c() {
        b.call(this);
        this.init()
    }
    __extends(c, b);
    c.prototype.init = function() {
        this.createContainer(this.frontContainer);
        this.createContainer(this.backContainer);
        this.addChild(this.frontContainer);
        this.addChild(this.backContainer);
        this.backContainer.x = this.frontContainer.width
    };
    c.prototype.createContainer = function(b) {
        for (var a = RES.getRes("game"), c = 0; 4 > c; c++) {
            var h = c + 1,
            r = new egret.Bitmap;
            r.texture = a.getTexture("fb" + h);
            r.x = c * GameConfig.FB_WIDTH;
            b.addChild(r)
        }
    };
    c.prototype.render = function(d) {
        b.prototype.render.call(this, d);
        d = d == Direction.LEFT ? -1 : 1;
        this.frontContainer.x += d * c.RATE * GameApp.TIEM_DT;
        this.backContainer.x += d * c.RATE * GameApp.TIEM_DT;
        this.frontContainer.x < -this.frontContainer.width && (this.frontContainer.x = parseInt((this.backContainer.x + this.backContainer.width).toString()));
        this.backContainer.x < -this.backContainer.width && (this.backContainer.x = parseInt((this.frontContainer.x + this.frontContainer.width).toString()));
        this.frontContainer.x > GameConfig.STAGE_WIDTH && (this.frontContainer.x = parseInt((this.backContainer.x - this.backContainer.width).toString()));
        this.backContainer.x > GameConfig.STAGE_WIDTH && (this.backContainer.x = parseInt((this.frontContainer.x - this.frontContainer.width).toString()))
    };
    c.RATE = 0.2;
    return c
} (BaseView);
NearbyView.prototype.__class__ = "NearbyView";
var __extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
},
PushButton = function(b) {
    function c(d, a, c) {
        "undefined" === typeof c && (c = null);
        b.call(this);
        this._target = c;
        this._touchEndCallback = d;
        this._releaseCallback = a;
        this.touchEnabled = !0;
        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBeginHandler, this);
        this.addEventListener(egret.TouchEvent.TOUCH_OUT, this.onTouchEndHandler, this);
        this.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onTouchEndHandler, this);
        this.addEventListener(egret.TouchEvent.TOUCH_ROLL_OUT, this.onTouchEndHandler, this);
        this.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEndHandler, this)
    }
    __extends(c, b);
    c.prototype.onTouchBeginHandler = function(b) {
        this._oldScaleX = this.scaleX;
        this._oldScaleY = this.scaleY;
        this.scaleY = this.scaleX = 0.9;
        null != this._touchEndCallback && "function" == typeof this._touchEndCallback && this._touchEndCallback()
    };
    c.prototype.onTouchEndHandler = function(b) {
        this.scaleX = this._oldScaleX;
        this.scaleY = this._oldScaleY;
        null != this._releaseCallback && "function" == typeof this._releaseCallback && (this._target ? this._releaseCallback(this._target) : this._releaseCallback())
    };
    c.prototype.setSkin = function(b) {
        null != this._skin && this.removeChild(this._skin);
        this._skin = b;
        this.addChild(this._skin);
        this._skin.x = -this._skin.width >> 1;
        this._skin.y = -this._skin.height >> 1
    };
    return c
} (egret.DisplayObjectContainer);
PushButton.prototype.__class__ = "PushButton";
var __extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
},
ScoreInfo = function(b) {
    function c() {
        b.call(this);
        this._color = 16777215;
        this._width = 100;
        this._fam = "\u65b9\u6b63\u8212\u4f53";
        this.bestScore = this.alpha = 0;
        var d = new egret.TextField;
        d.textColor = this._color;
        d.fontFamily = this._fam;
        d.bold = !0;
        d.size = 25;
        d.text = "\u5f97\u5206";
        d.width = this._width;
        d.textAlign = egret.HorizontalAlign.CENTER;
        d.verticalAlign = egret.VerticalAlign.MIDDLE;
        this.addChild(d);
        this.score_tf = new egret.TextField;
        this.score_tf.textColor = this._color;
        this.score_tf.fontFamily = this._fam;
        this.score_tf.bold = !0;
        this.score_tf.size = 45;
        this.score_tf.text = "0";
        this.score_tf.width = this._width;
        this.score_tf.textAlign = egret.HorizontalAlign.CENTER;
        this.score_tf.verticalAlign = egret.VerticalAlign.MIDDLE;
        this.addChild(this.score_tf);
        this.score_tf.y = d.y + d.height;
        var a = new egret.TextField;
        a.textColor = this._color;
        a.fontFamily = this._fam;
        a.bold = !0;
        a.size = 20;
        a.textAlign = egret.HorizontalAlign.CENTER;
        a.verticalAlign = egret.VerticalAlign.MIDDLE;
        a.text = "\u6700\u4f73";
        a.width = this._width;
        a.y = this.score_tf.y + this.score_tf.height + 5;
        this.addChild(a);
        this.score_best = new egret.TextField;
        this.score_best.textColor = this._color;
        this.score_best.fontFamily = this._fam;
        this.score_best.bold = !0;
        this.score_best.size = 25;
        this.score_best.text = "0";
        this.score_best.width = this._width;
        this.score_best.textAlign = egret.HorizontalAlign.CENTER;
        this.score_best.verticalAlign = egret.VerticalAlign.MIDDLE;
        this.addChild(this.score_best);
        this.score_best.y = a.y + a.height;
        this.x = (GameConfig.STAGE_WIDTH - this.width) / 2;
        this.bitmap = new egret.Bitmap;
        a = RES.getRes("game").getTexture("NEW");
        this.bitmap.texture = a;
        this.addChild(this.bitmap);
        this.bitmap.x = d.width + d.x;
        this.bitmap.y = 5;
        this.bitmap.visible = !1
    }
    __extends(c, b);
    c.prototype.showScore = function(b, a) {
        this.bestScore < b ? (this.bestScore = b, this.bitmap.visible = !0) : this.bitmap.visible = !1;
        this.score_tf.text = 10 > b ? "0" + b: "" + b; - 1 == a && (a = this.bestScore);
        this.score_best.text = 10 > a ? "0" + a: "" + a
    };
    c.prototype.show = function() {
        this.parent.setChildIndex(this, this.parent.numChildren - 1);
        this.alpha = 0;
        this.visible = !0;
        egret.Tween.get(this).to({
            alpha: 1
        },
        500);
        this.y = this.stage.stageHeight < this.stage.stageWidth ? this.stage.stageHeight - this.height - 10 : GameConfig.STAGE_HEIGHT - this.height - 10
    };
    c.prototype.hide = function() {
        this.alpha = 0;
        this.visible = !1
    };
    return c
} (egret.DisplayObjectContainer);
ScoreInfo.prototype.__class__ = "ScoreInfo";
var __extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
},
StarPage = function(b) {
    function c() {
        b.call(this);
        this._point = [];
        this._num = 0;
        this._point.push(new egret.Point(36, 140));
        this._point.push(new egret.Point(123, 70));
        this._point.push(new egret.Point(169, 10));
        this._point.push(new egret.Point(213, 39));
        this._point.push(new egret.Point(305, 35));
        this._point.push(new egret.Point(331, 183));
        this._point.push(new egret.Point(395, 27));
        this._point.push(new egret.Point(477, 4));
        this._point.push(new egret.Point(509, 84));
        this._point.push(new egret.Point(635, 0));
        this._point.push(new egret.Point(640, 200));
        this._point.push(new egret.Point(754, 35));
        this._point.push(new egret.Point(758, 119));
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this)
    }
    __extends(c, b);
    c.prototype.onAddToStage = function(b) {
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        for (b = 0; b < this._point.length; b++) {
            var a;
            a = 3 == b || 9 == b ? new Star("bStar") : new Star("sStar");
            this.addChild(a);
            a.x = this._point[b].x;
            a.y = this._point[b].y
        }
    };
    return c
} (egret.DisplayObjectContainer);
StarPage.prototype.__class__ = "StarPage";
var __extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
},
UIPage = function(b) {
    function c(d, a, c, h) {
        b.call(this);
        this.leftClickCallback = d;
        this.rightClickCallback = c;
        d = new egret.Bitmap;
        c = RES.getRes("game");
        d.texture = c.getTexture("leftBtn");
        this.leftBtn = new PushButton(this.leftClickCallback, a);
        this.leftBtn.setSkin(d);
        this.leftBtn.name = "leftbtn";
        d = new egret.Bitmap;
        d.texture = c.getTexture("rightBtn");
        this.rightBtn = new PushButton(this.rightClickCallback, h);
        this.rightBtn.setSkin(d);
        this.rightBtn.name = "rightbtn";
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this)
    }
    __extends(c, b);
    c.prototype.onAddToStage = function(b) {
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        this.addChild(this.leftBtn);
        this.addChild(this.rightBtn);
        this.leftBtn.x = this.leftBtn.width >> 1;
        this.leftBtn.y = 230;
        this.rightBtn.x = GameConfig.STAGE_WIDTH - this.rightBtn.width / 2;
        this.rightBtn.y = 230;
        b = new egret.Bitmap;
        b.texture = RES.getRes("game.knife");
        this.addChild(b);
        b.x = 10;
        b.y = 60;
        b.rotation = -45;
        this.score_tf = new egret.TextField;
        this.score_tf.textColor = 16777215;
        this.score_tf.fontFamily = "\u9ed1\u4f53";
        this.score_tf.bold = !0;
        this.score_tf.size = 25;
        this.score_tf.text = "0";
        this.addChild(this.score_tf);
        this.score_tf.x = 60;
        this.score_tf.y = 50;
        this._sound = new egret.DisplayObjectContainer;
        this.sound_bit0 = new egret.Bitmap;
        this.sound_bit0.texture = RES.getRes("game.voice0");
        this.sound_bit1 = new egret.Bitmap;
        this.sound_bit1.texture = RES.getRes("game.voice1");
        this._sound.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchHandle, this);
        this._sound.touchEnabled = !0;
        this._sound.name = "voice";
        GameApp.VOICE && this._sound.addChild(this.sound_bit0);
        this._sound.x = GameConfig.STAGE_WIDTH - this._sound.width - 20;
        this._sound.y = 10
    };
    c.prototype.addKnife = function() {
        this.score_tf.text = "" + GameApp.GAME_SCORE
    };
    c.prototype.resetKnife = function() {
        this.score_tf.text = "" + GameApp.GAME_SCORE
    };
    c.prototype.onTouchHandle = function(b) {
        GameApp.VOICE = !GameApp.VOICE;
        0 < this._sound.numChildren && this._sound.removeChildAt(0);
        GameApp.VOICE ? this._sound.addChild(this.sound_bit0) : this._sound.addChild(this.sound_bit1)
    };
    c.prototype.showBtn = function(b) {
        this.leftBtn.visible = b;
        this.rightBtn.visible = b
    };
    return c
} (egret.DisplayObjectContainer);
UIPage.prototype.__class__ = "UIPage";
var __extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
},
CameraEffect = function(b) {
    function c(c) {
        b.call(this);
        this._target = c
    }
    __extends(c, b);
    c.prototype.playScaleUpEffect = function(b) {
        this._target.anchorX = b;
        this._target.anchorY = 0.5;
        this._target.x += this._target.width * b;
        this._target.y += this._target.height >> 1;
        this.currScale = 2 * GameApp._scale;
        egret.Tween.get(this._target, {
            loop: !1
        }).to({
            scaleX: this.currScale,
            scaleY: this.currScale
        },
        500).call(this.onGameOver, this, [this._target])
    };
    c.prototype.onGameOver = function(b) {
        H5Interface.submitScore(gamename, GameApp.GAME_SCORE);
        this.dispatchEvent(new GameEvent(GameEvent.STOP_GAME))
    };
    c.prototype.playScaleBelowEffect = function() {
        this.currScale > GameApp._scale ? (this.currScale = GameApp._scale, egret.Tween.get(this._target, {
            loop: !1
        }).to({
            scaleX: this.currScale,
            scaleY: this.currScale
        },
        500, egret.Ease.backIn).call(this.hideAllEffect, this, [this._target])) : this.hideAllEffect(this._target)
    };
    c.prototype.hideAllEffect = function(b) {
        "undefined" === typeof b && (b = null);
        b.anchorX = 0;
        b.anchorY = 0;
        b.x = 0;
        b.y = 0;
        this.dispatchEvent(new GameEvent(GameEvent.START_GAME))
    };
    c.prototype.getCurrentScale = function() {
        return this.currScale
    };
    return c
} (egret.EventDispatcher);
CameraEffect.prototype.__class__ = "CameraEffect";
var Direction = function() {
    function b() {}
    b.NO = 0;
    b.LEFT = 1;
    b.RIGHT = 2;
    return b
} ();
Direction.prototype.__class__ = "Direction";
var __extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
},
FarView = function(b) {
    function c() {
        b.call(this);
        this.init()
    }
    __extends(c, b);
    c.prototype.init = function() {
        this.createContainer(this.frontContainer);
        this.createContainer(this.backContainer);
        this.addChild(this.frontContainer);
        this.addChild(this.backContainer);
        this.backContainer.x = this.frontContainer.width
    };
    c.prototype.createContainer = function(b) {
        for (var a = RES.getRes("game"), c = 0; 4 > c; c++) {
            var h = c + 1,
            r = new egret.Bitmap;
            r.texture = a.getTexture("bg" + h);
            r.scaleY = 0.6;
            r.x = c * GameConfig.FB_WIDTH;
            b.addChild(r)
        }
    };
    c.prototype.render = function(d) {
        b.prototype.render.call(this, d);
        d = d == Direction.LEFT ? -1 : 1;
        this.frontContainer.x += d * c.RATE * GameApp.TIEM_DT;
        this.backContainer.x += d * c.RATE * GameApp.TIEM_DT;
        this.frontContainer.x < -this.frontContainer.width && (this.frontContainer.x = parseInt((this.backContainer.x + this.backContainer.width).toString()));
        this.backContainer.x < -this.backContainer.width && (this.backContainer.x = parseInt((this.frontContainer.x + this.frontContainer.width).toString()));
        this.frontContainer.x > GameConfig.STAGE_WIDTH && (this.frontContainer.x = parseInt((this.backContainer.x - this.backContainer.width).toString()));
        this.backContainer.x > GameConfig.STAGE_WIDTH && (this.backContainer.x = parseInt((this.frontContainer.x - this.frontContainer.width).toString()))
    };
    c.RATE = 0.03;
    return c
} (BaseView);
FarView.prototype.__class__ = "FarView";
var __extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
},
GameApp = function(b) {
    function c() {
        b.call(this);
        this.isStart = !1;
        this._touch = 0;
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this)
    }
    __extends(c, b);
    c.prototype.onAddToStage = function(b) {
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        this.loadingView = new LoadingUI;
        this.stage.addChild(this.loadingView);
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.loadConfig("resource/resource.json", "resource/")
    };
    c.prototype.onConfigComplete = function(b) {
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        RES.loadGroup("preload")
    };
    c.prototype.onResourceLoadComplete = function(b) {
        "preload" == b.groupName && (console.log("\u8d44\u6e90\u52a0\u8f7d\u7ed3\u675f"), this.stage.removeChild(this.loadingView), RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this), RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this), this.createGameScene())
    };
    c.prototype.onResourceProgress = function(b) {
        "preload" == b.groupName && this.loadingView.setProgress(b.itemsLoaded, b.itemsTotal)
    };
    c.prototype.createGameScene = function() {
        this.Container = new egret.DisplayObjectContainer;
        this.addChild(this.Container);
        this.cameraEffect = new CameraEffect(this.Container);
        this.farView = new FarView;
        this.Container.addChild(this.farView);
        this.middleView = new MiddleView;
        this.middleView.y = 270;
        this.nearbyView = new NearbyView;
        this.nearbyView.y = this.middleView.y - this.nearbyView.height;
        this.Container.addChild(this.nearbyView);
        this.Container.addChild(this.middleView);
        this.role = new Role;
        this.Container.addChild(this.role);
        this.role.x = GameConfig.STAGE_WIDTH >> 1;
        this.role.y = this.middleView.y - this.role.height + 2;
        var b = new StarPage;
        this.Container.addChild(b);
        c.moonPage = new MoonPage;
        this.Container.addChild(c.moonPage);
        this.knifePage = new KnifePage;
        this.Container.addChild(this.knifePage);
        this.uiPage = new UIPage(this.onLeftClickHandler, this.onReleaseHandler, this.onRightClickHandler, this.onReleaseHandler);
        this.addChild(this.uiPage);
        this._scoreInfo = new ScoreInfo;
        this.addChild(this._scoreInfo);
        this._handle = new HandlePage(this.onStartGameHandler);
        this.addChild(this._handle);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onDownHandler, this);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_END, this.onReleaseHandler, this);
        this.knifePage.addEventListener(GameEvent.HIT, this.onHit, this);
        this.knifePage.addEventListener(GameEvent.CREATE_KNIFE, this.onCreateKnife, this);
        this.cameraEffect.addEventListener(GameEvent.START_GAME, this.onGameStart, this);
        this.cameraEffect.addEventListener(GameEvent.STOP_GAME, this.onGameStop, this);
        this.uiPage.touchChildren = !1;
        this.uiPage.showBtn(!1);
        this._handle.onInitShow();
        this._scoreInfo.hide();
        this._tip = new egret.TextField;
        this.addChild(this._tip);
        this._tip.width = this.stage.stageWidth;
        this._tip.textColor = 10066329;
        this._tip.fontFamily = "\u9ed1\u4f53";
        this._tip.bold = !0;
        this._tip.size = 35;
        this._tip.textAlign = egret.HorizontalAlign.CENTER;
        this._tip.y = this.middleView.y + 70;
        this._tip.text = "\u6a2a\u5c4f\u4f53\u9a8c\u66f4\u4f73"
    };
    c.prototype.onDownHandler = function(b) {
        "undefined" === typeof b && (b = null);
        "voice" != b.target.name && "startbtn" != b.target.name && this.isStart && (c.DIRECT = b.stageX > GameConfig.STAGE_WIDTH >> 1 ? Direction.RIGHT: Direction.LEFT, this._touch += 1)
    };
    c.prototype.onReleaseHandler = function(b) {
        "undefined" === typeof b && (b = null);
        if (b && (0 < this._touch && (this._touch -= 1), 0 < this._touch)) return;
        c.DIRECT = Direction.NO
    };
    c.prototype.onEnterFrameHandler = function(b) {
        this.isStart && (b = (new Date).getTime(), c.TIEM_DT = b - this._istime, this._istime = b, b = new egret.Rectangle(this.role.x - this.role.width / 2, this.role.y, this.role.width, this.role.height), c.GAME_ROLE_X = this.role.x, this.knifePage.render(b), Role.isDead || (c.DIRECT == Direction.LEFT ? (this.role.scaleX = -1, this.role.playAction(Role.RUN_ACTION), this.role.x > c.LEFT_X ? this.role.x -= c.ROLE_RATE * c.TIEM_DT: (this.farView.render(Direction.RIGHT), this.middleView.render(Direction.RIGHT), this.nearbyView.render(Direction.RIGHT))) : c.DIRECT == Direction.RIGHT ? (this.role.scaleX = 1, this.role.playAction(Role.RUN_ACTION), this.role.x < c.RIGHT_X ? this.role.x += c.ROLE_RATE * c.TIEM_DT: (this.farView.render(Direction.LEFT), this.middleView.render(Direction.LEFT), this.nearbyView.render(Direction.LEFT))) : Role.isDead || this.role.playAction(Role.STAND_ACTION)))
    };
    c.prototype.onHit = function(b) {
        this.isStart = !1;
        egret.Logger.warning("\u78b0\u649e\u5230\u4e86\uff01");
        Role.isDead = !0;
        b = new egret.Point;
        b = (this.Container.globalToLocal(GameConfig.STAGE_WIDTH >> 1, GameConfig.STAGE_HEIGHT >> 1, b).x - this.farView.x) / this.Container.width;
        this.cameraEffect.playScaleUpEffect(b);
        this.role.playAction(Role.KILL_ACTION)
    };
    c.prototype.onCreateKnife = function(b) {
        c.GAME_SCORE += 1;
        this.uiPage.addKnife()
    };
    c.prototype.onGameStart = function(b) {
        this._tip && this._tip.parent && this._tip.parent.removeChild(this._tip);
        Role.isDead = !1;
        this.uiPage.touchChildren = !0;
        c.GAME_SCORE = 0;
        this.uiPage.resetKnife();
        this.isStart = !0;
        this.uiPage.showBtn(!0);
        this.role.playAction(Role.STAND_ACTION, 0 < c.GAME_SCORE);
        this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrameHandler, this);
        this._istime = (new Date).getTime();
        KnifePage.X_RATE = 0.08
    };
    c.prototype.onGameStop = function(b) {
        this.removeEventListener(egret.Event.ENTER_FRAME, this.onEnterFrameHandler, this);
        this._scoreInfo.showScore(c.GAME_SCORE, -1);
        this._scoreInfo.show();
        this.uiPage.touchChildren = !1;
        this.uiPage.showBtn(!1);
        this._handle.onShow()
    };
    c.prototype.onLeftClickHandler = function() {
        c.DIRECT = Direction.LEFT
    };
    c.prototype.onRightClickHandler = function() {
        c.DIRECT = Direction.RIGHT
    };
    c.prototype.onStartGameHandler = function(b) {
        b._scoreInfo.hide();
        b._handle.onHide();
        b.cameraEffect.playScaleBelowEffect()
    };
    c.VOICE = !0;
    c._scale = 1;
    c.GAME_SCORE = 0;
    c.GAME_ROLE_X = 0;
    c.TIEM_DT = 0;
    c.DIRECT = 0;
    c.ROLE_RATE = 0.3;
    c.LEFT_X = 100;
    c.RIGHT_X = 700;
    return c
} (egret.DisplayObjectContainer);
GameApp.prototype.__class__ = "GameApp";
var __extends = this.__extends ||
function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
},
HandlePage = function(b) {
    function c(c) {
        b.call(this);
        this._touchEndCallback = c;
        this.init();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this)
    }
    __extends(c, b);
    c.prototype.onAddToStage = function(b) {
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        this.initStartButton();
        this.y = this.parent.y - this.height
    };
    c.prototype.init = function() {
        this.initLogo()
    };
    c.prototype.initStartButton = function() {
        var b = RES.getRes("game"),
        a = new egret.Bitmap;
        a.texture = b.getTexture("start");
        a.scaleY = a.scaleX = 0.8;
        this.startBtn = new PushButton(null, this._touchEndCallback, this.parent);
        this.startBtn.setSkin(a);
        this.addChild(this.startBtn);
        this.startBtn.name = "startbtn";
        this.startBtn.x = (GameConfig.STAGE_WIDTH >> 1) + 25;
        this.startBtn.y = this.height + 30
    };
    c.prototype.initLogo = function() {
        var b = new egret.Bitmap,
        a = RES.getRes("game");
        b.texture = a.getTexture("LOGOC");
        this.addChild(b);
        b.anchorX = 0.5;
        b.scaleY = b.scaleX = 0.8;
        b.x = GameConfig.STAGE_WIDTH >> 1
    };
    c.prototype.onShow = function() {
        this.parent.setChildIndex(this, this.parent.numChildren - 1);
        this.visible = !0;
        egret.Tween.get(this).to({
            y: 50
        },
        1E3, egret.Ease.bounceOut)
    };
    c.prototype.onHide = function() {
        egret.Tween.get(this).to({
            y: -this.height - 50
        },
        200).call(this.startGame)
    };
    c.prototype.startGame = function() {
        this.visible = !1
    };
    c.prototype.onInitShow = function() {
        this.parent.setChildIndex(this, this.parent.numChildren - 1);
        this.visible = !0;
        egret.Tween.get(this).to({
            y: 20
        },
        1E3, egret.Ease.bounceOut)
    };
    return c
} (egret.DisplayObjectContainer);
HandlePage.prototype.__class__ = "HandlePage";
var DisplayTool = function() {
    function b() {}
    b.removeAllChildren = function(b) {
        for (; b.numChildren;) b.removeChildAt(0)
    };
    return b
} ();
DisplayTool.prototype.__class__ = "DisplayTool";