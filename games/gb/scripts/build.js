(function(e, t) {
    function H(e) {
        var t = e.length,
            n = w.type(e);
        return w.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }

    function j(e) {
        var t = B[e] = {};
        return w.each(e.match(S) || [], function(e, n) {
            t[n] = !0
        }), t
    }

    function q(e, n, r, i) {
        if (w.acceptData(e)) {
            var s, o, u = w.expando,
                a = e.nodeType,
                f = a ? w.cache : e,
                l = a ? e[u] : e[u] && u;
            if (l && f[l] && (i || f[l].data) || r !== t || "string" != typeof n) return l || (l = a ? e[u] = c.pop() || w.guid++ : u), f[l] || (f[l] = a ? {} : {
                toJSON: w.noop
            }), ("object" == typeof n || "function" == typeof n) && (i ? f[l] = w.extend(f[l], n) : f[l].data = w.extend(f[l].data, n)), o = f[l], i || (o.data || (o.data = {}), o = o.data), r !== t && (o[w.camelCase(n)] = r), "string" == typeof n ? (s = o[n], null == s && (s = o[w.camelCase(n)])) : s = o, s
        }
    }

    function R(e, t, n) {
        if (w.acceptData(e)) {
            var r, i, s = e.nodeType,
                o = s ? w.cache : e,
                u = s ? e[w.expando] : w.expando;
            if (o[u]) {
                if (t && (r = n ? o[u] : o[u].data)) {
                    w.isArray(t) ? t = t.concat(w.map(t, w.camelCase)) : t in r ? t = [t] : (t = w.camelCase(t), t = t in r ? [t] : t.split(" ")), i = t.length;
                    while (i--) delete r[t[i]];
                    if (n ? !z(r) : !w.isEmptyObject(r)) return
                }(n || (delete o[u].data, z(o[u]))) && (s ? w.cleanData([e], !0) : w.support.deleteExpando || o != o.window ? delete o[u] : o[u] = null)
            }
        }
    }

    function U(e, n, r) {
        if (r === t && 1 === e.nodeType) {
            var i = "data-" + n.replace(I, "-$1").toLowerCase();
            if (r = e.getAttribute(i), "string" == typeof r) {
                try {
                    r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null : +r + "" === r ? +r : F.test(r) ? w.parseJSON(r) : r
                } catch (s) {}
                w.data(e, n, r)
            } else r = t
        }
        return r
    }

    function z(e) {
        var t;
        for (t in e)
            if (("data" !== t || !w.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0
    }

    function it() {
        return !0
    }

    function st() {
        return !1
    }

    function ot() {
        try {
            return o.activeElement
        } catch (e) {}
    }

    function ct(e, t) {
        do e = e[t]; while (e && 1 !== e.nodeType);
        return e
    }

    function ht(e, t, n) {
        if (w.isFunction(t)) return w.grep(e, function(e, r) {
            return !!t.call(e, r, e) !== n
        });
        if (t.nodeType) return w.grep(e, function(e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (ut.test(t)) return w.filter(t, e, n);
            t = w.filter(t, e)
        }
        return w.grep(e, function(e) {
            return w.inArray(e, t) >= 0 !== n
        })
    }

    function pt(e) {
        var t = dt.split("|"),
            n = e.createDocumentFragment();
        if (n.createElement)
            while (t.length) n.createElement(t.pop());
        return n
    }

    function Mt(e, t) {
        return w.nodeName(e, "table") && w.nodeName(1 === t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function _t(e) {
        return e.type = (null !== w.find.attr(e, "type")) + "/" + e.type, e
    }

    function Dt(e) {
        var t = Ct.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function Pt(e, t) {
        var n, r = 0;
        for (; null != (n = e[r]); r++) w._data(n, "globalEval", !t || w._data(t[r], "globalEval"))
    }

    function Ht(e, t) {
        if (1 === t.nodeType && w.hasData(e)) {
            var n, r, i, s = w._data(e),
                o = w._data(t, s),
                u = s.events;
            if (u) {
                delete o.handle, o.events = {};
                for (n in u)
                    for (r = 0, i = u[n].length; i > r; r++) w.event.add(t, n, u[n][r])
            }
            o.data && (o.data = w.extend({}, o.data))
        }
    }

    function Bt(e, t) {
        var n, r, i;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !w.support.noCloneEvent && t[w.expando]) {
                i = w._data(t);
                for (r in i.events) w.removeEvent(t, r, i.handle);
                t.removeAttribute(w.expando)
            }
            "script" === n && t.text !== e.text ? (_t(t).text = e.text, Dt(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), w.support.html5Clone && e.innerHTML && !w.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && xt.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }
    }

    function jt(e, n) {
        var r, s, o = 0,
            u = typeof e.getElementsByTagName !== i ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== i ? e.querySelectorAll(n || "*") : t;
        if (!u)
            for (u = [], r = e.childNodes || e; null != (s = r[o]); o++)!n || w.nodeName(s, n) ? u.push(s) : w.merge(u, jt(s, n));
        return n === t || n && w.nodeName(e, n) ? w.merge([e], u) : u
    }

    function Ft(e) {
        xt.test(e.type) && (e.defaultChecked = e.checked)
    }

    function tn(e, t) {
        if (t in e) return t;
        var n = t.charAt(0).toUpperCase() + t.slice(1),
            r = t,
            i = en.length;
        while (i--)
            if (t = en[i] + n, t in e) return t;
        return r
    }

    function nn(e, t) {
        return e = t || e, "none" === w.css(e, "display") || !w.contains(e.ownerDocument, e)
    }

    function rn(e, t) {
        var n, r, i, s = [],
            o = 0,
            u = e.length;
        for (; u > o; o++) r = e[o], r.style && (s[o] = w._data(r, "olddisplay"), n = r.style.display, t ? (s[o] || "none" !== n || (r.style.display = ""), "" === r.style.display && nn(r) && (s[o] = w._data(r, "olddisplay", an(r.nodeName)))) : s[o] || (i = nn(r), (n && "none" !== n || !i) && w._data(r, "olddisplay", i ? n : w.css(r, "display"))));
        for (o = 0; u > o; o++) r = e[o], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? s[o] || "" : "none"));
        return e
    }

    function sn(e, t, n) {
        var r = $t.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }

    function on(e, t, n, r, i) {
        var s = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0,
            o = 0;
        for (; 4 > s; s += 2) "margin" === n && (o += w.css(e, n + Zt[s], !0, i)), r ? ("content" === n && (o -= w.css(e, "padding" + Zt[s], !0, i)), "margin" !== n && (o -= w.css(e, "border" + Zt[s] + "Width", !0, i))) : (o += w.css(e, "padding" + Zt[s], !0, i), "padding" !== n && (o += w.css(e, "border" + Zt[s] + "Width", !0, i)));
        return o
    }

    function un(e, t, n) {
        var r = !0,
            i = "width" === t ? e.offsetWidth : e.offsetHeight,
            s = qt(e),
            o = w.support.boxSizing && "border-box" === w.css(e, "boxSizing", !1, s);
        if (0 >= i || null == i) {
            if (i = Rt(e, t, s), (0 > i || null == i) && (i = e.style[t]), Jt.test(i)) return i;
            r = o && (w.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + on(e, t, n || (o ? "border" : "content"), r, s) + "px"
    }

    function an(e) {
        var t = o,
            n = Qt[e];
        return n || (n = fn(e, t), "none" !== n && n || (It = (It || w("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (It[0].contentWindow || It[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = fn(e, t), It.detach()), Qt[e] = n), n
    }

    function fn(e, t) {
        var n = w(t.createElement(e)).appendTo(t.body),
            r = w.css(n[0], "display");
        return n.remove(), r
    }

    function vn(e, t, n, r) {
        var i;
        if (w.isArray(t)) w.each(t, function(t, i) {
            n || cn.test(e) ? r(e, i) : vn(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
        });
        else if (n || "object" !== w.type(t)) r(e, t);
        else
            for (i in t) vn(e + "[" + i + "]", t[i], n, r)
    }

    function _n(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0,
                s = t.toLowerCase().match(S) || [];
            if (w.isFunction(n))
                while (r = s[i++]) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function Dn(e, n, r, i) {
        function u(a) {
            var f;
            return s[a] = !0, w.each(e[a] || [], function(e, a) {
                var l = a(n, r, i);
                return "string" != typeof l || o || s[l] ? o ? !(f = l) : t : (n.dataTypes.unshift(l), u(l), !1)
            }), f
        }
        var s = {},
            o = e === An;
        return u(n.dataTypes[0]) || !s["*"] && u("*")
    }

    function Pn(e, n) {
        var r, i, s = w.ajaxSettings.flatOptions || {};
        for (i in n) n[i] !== t && ((s[i] ? e : r || (r = {}))[i] = n[i]);
        return r && w.extend(!0, e, r), e
    }

    function Hn(e, n, r) {
        var i, s, o, u, a = e.contents,
            f = e.dataTypes;
        while ("*" === f[0]) f.shift(), s === t && (s = e.mimeType || n.getResponseHeader("Content-Type"));
        if (s)
            for (u in a)
                if (a[u] && a[u].test(s)) {
                    f.unshift(u);
                    break
                }
        if (f[0] in r) o = f[0];
        else {
            for (u in r) {
                if (!f[0] || e.converters[u + " " + f[0]]) {
                    o = u;
                    break
                }
                i || (i = u)
            }
            o = o || i
        }
        return o ? (o !== f[0] && f.unshift(o), r[o]) : t
    }

    function Bn(e, t, n, r) {
        var i, s, o, u, a, f = {},
            l = e.dataTypes.slice();
        if (l[1])
            for (o in e.converters) f[o.toLowerCase()] = e.converters[o];
        s = l.shift();
        while (s)
            if (e.responseFields[s] && (n[e.responseFields[s]] = t), !a && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), a = s, s = l.shift())
                if ("*" === s) s = a;
                else if ("*" !== a && a !== s) {
            if (o = f[a + " " + s] || f["* " + s], !o)
                for (i in f)
                    if (u = i.split(" "), u[1] === s && (o = f[a + " " + u[0]] || f["* " + u[0]])) {
                        o === !0 ? o = f[i] : f[i] !== !0 && (s = u[0], l.unshift(u[1]));
                        break
                    }
            if (o !== !0)
                if (o && e["throws"]) t = o(t);
                else try {
                    t = o(t)
                } catch (c) {
                    return {
                        state: "parsererror",
                        error: o ? c : "No conversion from " + a + " to " + s
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }

    function zn() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    }

    function Wn() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }

    function Yn() {
        return setTimeout(function() {
            Xn = t
        }), Xn = w.now()
    }

    function Zn(e, t, n) {
        var r, i = (Gn[t] || []).concat(Gn["*"]),
            s = 0,
            o = i.length;
        for (; o > s; s++)
            if (r = i[s].call(n, t, e)) return r
    }

    function er(e, t, n) {
        var r, i, s = 0,
            o = Qn.length,
            u = w.Deferred().always(function() {
                delete a.elem
            }),
            a = function() {
                if (i) return !1;
                var t = Xn || Yn(),
                    n = Math.max(0, f.startTime + f.duration - t),
                    r = n / f.duration || 0,
                    s = 1 - r,
                    o = 0,
                    a = f.tweens.length;
                for (; a > o; o++) f.tweens[o].run(s);
                return u.notifyWith(e, [f, s, n]), 1 > s && a ? n : (u.resolveWith(e, [f]), !1)
            },
            f = u.promise({
                elem: e,
                props: w.extend({}, t),
                opts: w.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: Xn || Yn(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var r = w.Tween(e, f.opts, t, n, f.opts.specialEasing[t] || f.opts.easing);
                    return f.tweens.push(r), r
                },
                stop: function(t) {
                    var n = 0,
                        r = t ? f.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; r > n; n++) f.tweens[n].run(1);
                    return t ? u.resolveWith(e, [f, t]) : u.rejectWith(e, [f, t]), this
                }
            }),
            l = f.props;
        for (tr(l, f.opts.specialEasing); o > s; s++)
            if (r = Qn[s].call(f, e, l, f.opts)) return r;
        return w.map(l, Zn, f), w.isFunction(f.opts.start) && f.opts.start.call(e, f), w.fx.timer(w.extend(a, {
            elem: e,
            anim: f,
            queue: f.opts.queue
        })), f.progress(f.opts.progress).done(f.opts.done, f.opts.complete).fail(f.opts.fail).always(f.opts.always)
    }

    function tr(e, t) {
        var n, r, i, s, o;
        for (n in e)
            if (r = w.camelCase(n), i = t[r], s = e[n], w.isArray(s) && (i = s[1], s = e[n] = s[0]), n !== r && (e[r] = s, delete e[n]), o = w.cssHooks[r], o && "expand" in o) {
                s = o.expand(s), delete e[r];
                for (n in s) n in e || (e[n] = s[n], t[n] = i)
            } else t[r] = i
    }

    function nr(e, t, n) {
        var r, i, s, o, u, a, f = this,
            l = {},
            c = e.style,
            h = e.nodeType && nn(e),
            p = w._data(e, "fxshow");
        n.queue || (u = w._queueHooks(e, "fx"), null == u.unqueued && (u.unqueued = 0, a = u.empty.fire, u.empty.fire = function() {
            u.unqueued || a()
        }), u.unqueued++, f.always(function() {
            f.always(function() {
                u.unqueued--, w.queue(e, "fx").length || u.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [c.overflow, c.overflowX, c.overflowY], "inline" === w.css(e, "display") && "none" === w.css(e, "float") && (w.support.inlineBlockNeedsLayout && "inline" !== an(e.nodeName) ? c.zoom = 1 : c.display = "inline-block")), n.overflow && (c.overflow = "hidden", w.support.shrinkWrapBlocks || f.always(function() {
            c.overflow = n.overflow[0], c.overflowX = n.overflow[1], c.overflowY = n.overflow[2]
        }));
        for (r in t)
            if (i = t[r], $n.exec(i)) {
                if (delete t[r], s = s || "toggle" === i, i === (h ? "hide" : "show")) continue;
                l[r] = p && p[r] || w.style(e, r)
            }
        if (!w.isEmptyObject(l)) {
            p ? "hidden" in p && (h = p.hidden) : p = w._data(e, "fxshow", {}), s && (p.hidden = !h), h ? w(e).show() : f.done(function() {
                w(e).hide()
            }), f.done(function() {
                var t;
                w._removeData(e, "fxshow");
                for (t in l) w.style(e, t, l[t])
            });
            for (r in l) o = Zn(h ? p[r] : 0, r, f), r in p || (p[r] = o.start, h && (o.end = o.start, o.start = "width" === r || "height" === r ? 1 : 0))
        }
    }

    function rr(e, t, n, r, i) {
        return new rr.prototype.init(e, t, n, r, i)
    }

    function ir(e, t) {
        var n, r = {
                height: e
            },
            i = 0;
        for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = Zt[i], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    function sr(e) {
        return w.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
    }
    var n, r, i = typeof t,
        s = e.location,
        o = e.document,
        u = o.documentElement,
        a = e.jQuery,
        f = e.$,
        l = {},
        c = [],
        h = "1.10.2",
        p = c.concat,
        d = c.push,
        v = c.slice,
        m = c.indexOf,
        g = l.toString,
        y = l.hasOwnProperty,
        b = h.trim,
        w = function(e, t) {
            return new w.fn.init(e, t, r)
        },
        E = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        S = /\S+/g,
        x = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        T = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        N = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        C = /^[\],:{}\s]*$/,
        k = /(?:^|:|,)(?:\s*\[)+/g,
        L = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        A = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
        O = /^-ms-/,
        M = /-([\da-z])/gi,
        _ = function(e, t) {
            return t.toUpperCase()
        },
        D = function(e) {
            (o.addEventListener || "load" === e.type || "complete" === o.readyState) && (P(), w.ready())
        },
        P = function() {
            o.addEventListener ? (o.removeEventListener("DOMContentLoaded", D, !1), e.removeEventListener("load", D, !1)) : (o.detachEvent("onreadystatechange", D), e.detachEvent("onload", D))
        };
    w.fn = w.prototype = {
            jquery: h,
            constructor: w,
            init: function(e, n, r) {
                var i, s;
                if (!e) return this;
                if ("string" == typeof e) {
                    if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : T.exec(e), !i || !i[1] && n) return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e);
                    if (i[1]) {
                        if (n = n instanceof w ? n[0] : n, w.merge(this, w.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : o, !0)), N.test(i[1]) && w.isPlainObject(n))
                            for (i in n) w.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]);
                        return this
                    }
                    if (s = o.getElementById(i[2]), s && s.parentNode) {
                        if (s.id !== i[2]) return r.find(e);
                        this.length = 1, this[0] = s
                    }
                    return this.context = o, this.selector = e, this
                }
                return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : w.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), w.makeArray(e, this))
            },
            selector: "",
            length: 0,
            toArray: function() {
                return v.call(this)
            },
            get: function(e) {
                return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
            },
            pushStack: function(e) {
                var t = w.merge(this.constructor(), e);
                return t.prevObject = this, t.context = this.context, t
            },
            each: function(e, t) {
                return w.each(this, e, t)
            },
            ready: function(e) {
                return w.ready.promise().done(e), this
            },
            slice: function() {
                return this.pushStack(v.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(e) {
                var t = this.length,
                    n = +e + (0 > e ? t : 0);
                return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
            },
            map: function(e) {
                return this.pushStack(w.map(this, function(t, n) {
                    return e.call(t, n, t)
                }))
            },
            end: function() {
                return this.prevObject || this.constructor(null)
            },
            push: d,
            sort: [].sort,
            splice: [].splice
        }, w.fn.init.prototype = w.fn, w.extend = w.fn.extend = function() {
            var e, n, r, i, s, o, u = arguments[0] || {},
                a = 1,
                f = arguments.length,
                l = !1;
            for ("boolean" == typeof u && (l = u, u = arguments[1] || {}, a = 2), "object" == typeof u || w.isFunction(u) || (u = {}), f === a && (u = this, --a); f > a; a++)
                if (null != (s = arguments[a]))
                    for (i in s) e = u[i], r = s[i], u !== r && (l && r && (w.isPlainObject(r) || (n = w.isArray(r))) ? (n ? (n = !1, o = e && w.isArray(e) ? e : []) : o = e && w.isPlainObject(e) ? e : {}, u[i] = w.extend(l, o, r)) : r !== t && (u[i] = r));
            return u
        }, w.extend({
            expando: "jQuery" + (h + Math.random()).replace(/\D/g, ""),
            noConflict: function(t) {
                return e.$ === w && (e.$ = f), t && e.jQuery === w && (e.jQuery = a), w
            },
            isReady: !1,
            readyWait: 1,
            holdReady: function(e) {
                e ? w.readyWait++ : w.ready(!0)
            },
            ready: function(e) {
                if (e === !0 ? !--w.readyWait : !w.isReady) {
                    if (!o.body) return setTimeout(w.ready);
                    w.isReady = !0, e !== !0 && --w.readyWait > 0 || (n.resolveWith(o, [w]), w.fn.trigger && w(o).trigger("ready").off("ready"))
                }
            },
            isFunction: function(e) {
                return "function" === w.type(e)
            },
            isArray: Array.isArray || function(e) {
                return "array" === w.type(e)
            },
            isWindow: function(e) {
                return null != e && e == e.window
            },
            isNumeric: function(e) {
                return !isNaN(parseFloat(e)) && isFinite(e)
            },
            type: function(e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? l[g.call(e)] || "object" : typeof e
            },
            isPlainObject: function(e) {
                var n;
                if (!e || "object" !== w.type(e) || e.nodeType || w.isWindow(e)) return !1;
                try {
                    if (e.constructor && !y.call(e, "constructor") && !y.call(e.constructor.prototype, "isPrototypeOf")) return !1
                } catch (r) {
                    return !1
                }
                if (w.support.ownLast)
                    for (n in e) return y.call(e, n);
                for (n in e);
                return n === t || y.call(e, n)
            },
            isEmptyObject: function(e) {
                var t;
                for (t in e) return !1;
                return !0
            },
            error: function(e) {
                throw Error(e)
            },
            parseHTML: function(e, t, n) {
                if (!e || "string" != typeof e) return null;
                "boolean" == typeof t && (n = t, t = !1), t = t || o;
                var r = N.exec(e),
                    i = !n && [];
                return r ? [t.createElement(r[1])] : (r = w.buildFragment([e], t, i), i && w(i).remove(), w.merge([], r.childNodes))
            },
            parseJSON: function(n) {
                return e.JSON && e.JSON.parse ? e.JSON.parse(n) : null === n ? n : "string" == typeof n && (n = w.trim(n), n && C.test(n.replace(L, "@").replace(A, "]").replace(k, ""))) ? Function("return " + n)() : (w.error("Invalid JSON: " + n), t)
            },
            parseXML: function(n) {
                var r, i;
                if (!n || "string" != typeof n) return null;
                try {
                    e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n))
                } catch (s) {
                    r = t
                }
                return r && r.documentElement && !r.getElementsByTagName("parsererror").length || w.error("Invalid XML: " + n), r
            },
            noop: function() {},
            globalEval: function(t) {
                t && w.trim(t) && (e.execScript || function(t) {
                    e.eval.call(e, t)
                })(t)
            },
            camelCase: function(e) {
                return e.replace(O, "ms-").replace(M, _)
            },
            nodeName: function(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            },
            each: function(e, t, n) {
                var r, i = 0,
                    s = e.length,
                    o = H(e);
                if (n) {
                    if (o) {
                        for (; s > i; i++)
                            if (r = t.apply(e[i], n), r === !1) break
                    } else
                        for (i in e)
                            if (r = t.apply(e[i], n), r === !1) break
                } else if (o) {
                    for (; s > i; i++)
                        if (r = t.call(e[i], i, e[i]), r === !1) break
                } else
                    for (i in e)
                        if (r = t.call(e[i], i, e[i]), r === !1) break; return e
            },
            trim: b && !b.call("﻿ ") ? function(e) {
                return null == e ? "" : b.call(e)
            } : function(e) {
                return null == e ? "" : (e + "").replace(x, "")
            },
            makeArray: function(e, t) {
                var n = t || [];
                return null != e && (H(Object(e)) ? w.merge(n, "string" == typeof e ? [e] : e) : d.call(n, e)), n
            },
            inArray: function(e, t, n) {
                var r;
                if (t) {
                    if (m) return m.call(t, e, n);
                    for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++)
                        if (n in t && t[n] === e) return n
                }
                return -1
            },
            merge: function(e, n) {
                var r = n.length,
                    i = e.length,
                    s = 0;
                if ("number" == typeof r)
                    for (; r > s; s++) e[i++] = n[s];
                else
                    while (n[s] !== t) e[i++] = n[s++];
                return e.length = i, e
            },
            grep: function(e, t, n) {
                var r, i = [],
                    s = 0,
                    o = e.length;
                for (n = !!n; o > s; s++) r = !!t(e[s], s), n !== r && i.push(e[s]);
                return i
            },
            map: function(e, t, n) {
                var r, i = 0,
                    s = e.length,
                    o = H(e),
                    u = [];
                if (o)
                    for (; s > i; i++) r = t(e[i], i, n), null != r && (u[u.length] = r);
                else
                    for (i in e) r = t(e[i], i, n), null != r && (u[u.length] = r);
                return p.apply([], u)
            },
            guid: 1,
            proxy: function(e, n) {
                var r, i, s;
                return "string" == typeof n && (s = e[n], n = e, e = s), w.isFunction(e) ? (r = v.call(arguments, 2), i = function() {
                    return e.apply(n || this, r.concat(v.call(arguments)))
                }, i.guid = e.guid = e.guid || w.guid++, i) : t
            },
            access: function(e, n, r, i, s, o, u) {
                var a = 0,
                    f = e.length,
                    l = null == r;
                if ("object" === w.type(r)) {
                    s = !0;
                    for (a in r) w.access(e, n, a, r[a], !0, o, u)
                } else if (i !== t && (s = !0, w.isFunction(i) || (u = !0), l && (u ? (n.call(e, i), n = null) : (l = n, n = function(e, t, n) {
                    return l.call(w(e), n)
                })), n))
                    for (; f > a; a++) n(e[a], r, u ? i : i.call(e[a], a, n(e[a], r)));
                return s ? e : l ? n.call(e) : f ? n(e[0], r) : o
            },
            now: function() {
                return (new Date).getTime()
            },
            swap: function(e, t, n, r) {
                var i, s, o = {};
                for (s in t) o[s] = e.style[s], e.style[s] = t[s];
                i = n.apply(e, r || []);
                for (s in t) e.style[s] = o[s];
                return i
            }
        }), w.ready.promise = function(t) {
            if (!n)
                if (n = w.Deferred(), "complete" === o.readyState) setTimeout(w.ready);
                else if (o.addEventListener) o.addEventListener("DOMContentLoaded", D, !1), e.addEventListener("load", D, !1);
            else {
                o.attachEvent("onreadystatechange", D), e.attachEvent("onload", D);
                var r = !1;
                try {
                    r = null == e.frameElement && o.documentElement
                } catch (i) {}
                r && r.doScroll && function s() {
                    if (!w.isReady) {
                        try {
                            r.doScroll("left")
                        } catch (e) {
                            return setTimeout(s, 50)
                        }
                        P(), w.ready()
                    }
                }()
            }
            return n.promise(t)
        }, w.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
            l["[object " + t + "]"] = t.toLowerCase()
        }), r = w(o),
        function(e, t) {
            function ot(e, t, n, i) {
                var s, o, u, a, f, l, p, m, g, w;
                if ((t ? t.ownerDocument || t : E) !== h && c(t), t = t || h, n = n || [], !e || "string" != typeof e) return n;
                if (1 !== (a = t.nodeType) && 9 !== a) return [];
                if (d && !i) {
                    if (s = Z.exec(e))
                        if (u = s[1]) {
                            if (9 === a) {
                                if (o = t.getElementById(u), !o || !o.parentNode) return n;
                                if (o.id === u) return n.push(o), n
                            } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(u)) && y(t, o) && o.id === u) return n.push(o), n
                        } else {
                            if (s[2]) return H.apply(n, t.getElementsByTagName(e)), n;
                            if ((u = s[3]) && r.getElementsByClassName && t.getElementsByClassName) return H.apply(n, t.getElementsByClassName(u)), n
                        }
                    if (r.qsa && (!v || !v.test(e))) {
                        if (m = p = b, g = t, w = 9 === a && e, 1 === a && "object" !== t.nodeName.toLowerCase()) {
                            l = mt(e), (p = t.getAttribute("id")) ? m = p.replace(nt, "\\$&") : t.setAttribute("id", m), m = "[id='" + m + "'] ", f = l.length;
                            while (f--) l[f] = m + gt(l[f]);
                            g = $.test(e) && t.parentNode || t, w = l.join(",")
                        }
                        if (w) try {
                            return H.apply(n, g.querySelectorAll(w)), n
                        } catch (S) {} finally {
                            p || t.removeAttribute("id")
                        }
                    }
                }
                return Nt(e.replace(W, "$1"), t, n, i)
            }

            function ut() {
                function t(n, r) {
                    return e.push(n += " ") > s.cacheLength && delete t[e.shift()], t[n] = r
                }
                var e = [];
                return t
            }

            function at(e) {
                return e[b] = !0, e
            }

            function ft(e) {
                var t = h.createElement("div");
                try {
                    return !!e(t)
                } catch (n) {
                    return !1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t), t = null
                }
            }

            function lt(e, t) {
                var n = e.split("|"),
                    r = e.length;
                while (r--) s.attrHandle[n[r]] = t
            }

            function ct(e, t) {
                var n = t && e,
                    r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || O) - (~e.sourceIndex || O);
                if (r) return r;
                if (n)
                    while (n = n.nextSibling)
                        if (n === t) return -1;
                return e ? 1 : -1
            }

            function ht(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return "input" === n && t.type === e
                }
            }

            function pt(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && t.type === e
                }
            }

            function dt(e) {
                return at(function(t) {
                    return t = +t, at(function(n, r) {
                        var i, s = e([], n.length, t),
                            o = s.length;
                        while (o--) n[i = s[o]] && (n[i] = !(r[i] = n[i]))
                    })
                })
            }

            function vt() {}

            function mt(e, t) {
                var n, r, i, o, u, a, f, l = N[e + " "];
                if (l) return t ? 0 : l.slice(0);
                u = e, a = [], f = s.preFilter;
                while (u) {
                    (!n || (r = X.exec(u))) && (r && (u = u.slice(r[0].length) || u), a.push(i = [])), n = !1, (r = V.exec(u)) && (n = r.shift(), i.push({
                        value: n,
                        type: r[0].replace(W, " ")
                    }), u = u.slice(n.length));
                    for (o in s.filter)!(r = G[o].exec(u)) || f[o] && !(r = f[o](r)) || (n = r.shift(), i.push({
                        value: n,
                        type: o,
                        matches: r
                    }), u = u.slice(n.length));
                    if (!n) break
                }
                return t ? u.length : u ? ot.error(e) : N(e, a).slice(0)
            }

            function gt(e) {
                var t = 0,
                    n = e.length,
                    r = "";
                for (; n > t; t++) r += e[t].value;
                return r
            }

            function yt(e, t, n) {
                var r = t.dir,
                    s = n && "parentNode" === r,
                    o = x++;
                return t.first ? function(t, n, i) {
                    while (t = t[r])
                        if (1 === t.nodeType || s) return e(t, n, i)
                } : function(t, n, u) {
                    var a, f, l, c = S + " " + o;
                    if (u) {
                        while (t = t[r])
                            if ((1 === t.nodeType || s) && e(t, n, u)) return !0
                    } else
                        while (t = t[r])
                            if (1 === t.nodeType || s)
                                if (l = t[b] || (t[b] = {}), (f = l[r]) && f[0] === c) {
                                    if ((a = f[1]) === !0 || a === i) return a === !0
                                } else if (f = l[r] = [c], f[1] = e(t, n, u) || i, f[1] === !0) return !0
                }
            }

            function bt(e) {
                return e.length > 1 ? function(t, n, r) {
                    var i = e.length;
                    while (i--)
                        if (!e[i](t, n, r)) return !1;
                    return !0
                } : e[0]
            }

            function wt(e, t, n, r, i) {
                var s, o = [],
                    u = 0,
                    a = e.length,
                    f = null != t;
                for (; a > u; u++)(s = e[u]) && (!n || n(s, r, i)) && (o.push(s), f && t.push(u));
                return o
            }

            function Et(e, t, n, r, i, s) {
                return r && !r[b] && (r = Et(r)), i && !i[b] && (i = Et(i, s)), at(function(s, o, u, a) {
                    var f, l, c, h = [],
                        p = [],
                        d = o.length,
                        v = s || Tt(t || "*", u.nodeType ? [u] : u, []),
                        m = !e || !s && t ? v : wt(v, h, e, u, a),
                        g = n ? i || (s ? e : d || r) ? [] : o : m;
                    if (n && n(m, g, u, a), r) {
                        f = wt(g, p), r(f, [], u, a), l = f.length;
                        while (l--)(c = f[l]) && (g[p[l]] = !(m[p[l]] = c))
                    }
                    if (s) {
                        if (i || e) {
                            if (i) {
                                f = [], l = g.length;
                                while (l--)(c = g[l]) && f.push(m[l] = c);
                                i(null, g = [], f, a)
                            }
                            l = g.length;
                            while (l--)(c = g[l]) && (f = i ? j.call(s, c) : h[l]) > -1 && (s[f] = !(o[f] = c))
                        }
                    } else g = wt(g === o ? g.splice(d, g.length) : g), i ? i(null, o, g, a) : H.apply(o, g)
                })
            }

            function St(e) {
                var t, n, r, i = e.length,
                    o = s.relative[e[0].type],
                    u = o || s.relative[" "],
                    a = o ? 1 : 0,
                    l = yt(function(e) {
                        return e === t
                    }, u, !0),
                    c = yt(function(e) {
                        return j.call(t, e) > -1
                    }, u, !0),
                    h = [
                        function(e, n, r) {
                            return !o && (r || n !== f) || ((t = n).nodeType ? l(e, n, r) : c(e, n, r))
                        }
                    ];
                for (; i > a; a++)
                    if (n = s.relative[e[a].type]) h = [yt(bt(h), n)];
                    else {
                        if (n = s.filter[e[a].type].apply(null, e[a].matches), n[b]) {
                            for (r = ++a; i > r; r++)
                                if (s.relative[e[r].type]) break;
                            return Et(a > 1 && bt(h), a > 1 && gt(e.slice(0, a - 1).concat({
                                value: " " === e[a - 2].type ? "*" : ""
                            })).replace(W, "$1"), n, r > a && St(e.slice(a, r)), i > r && St(e = e.slice(r)), i > r && gt(e))
                        }
                        h.push(n)
                    }
                return bt(h)
            }

            function xt(e, t) {
                var n = 0,
                    r = t.length > 0,
                    o = e.length > 0,
                    u = function(u, a, l, c, p) {
                        var d, v, m, g = [],
                            y = 0,
                            b = "0",
                            w = u && [],
                            E = null != p,
                            x = f,
                            T = u || o && s.find.TAG("*", p && a.parentNode || a),
                            N = S += null == x ? 1 : Math.random() || .1;
                        for (E && (f = a !== h && a, i = n); null != (d = T[b]); b++) {
                            if (o && d) {
                                v = 0;
                                while (m = e[v++])
                                    if (m(d, a, l)) {
                                        c.push(d);
                                        break
                                    }
                                E && (S = N, i = ++n)
                            }
                            r && ((d = !m && d) && y--, u && w.push(d))
                        }
                        if (y += b, r && b !== y) {
                            v = 0;
                            while (m = t[v++]) m(w, g, a, l);
                            if (u) {
                                if (y > 0)
                                    while (b--) w[b] || g[b] || (g[b] = D.call(c));
                                g = wt(g)
                            }
                            H.apply(c, g), E && !u && g.length > 0 && y + t.length > 1 && ot.uniqueSort(c)
                        }
                        return E && (S = N, f = x), w
                    };
                return r ? at(u) : u
            }

            function Tt(e, t, n) {
                var r = 0,
                    i = t.length;
                for (; i > r; r++) ot(e, t[r], n);
                return n
            }

            function Nt(e, t, n, i) {
                var o, u, f, l, c, h = mt(e);
                if (!i && 1 === h.length) {
                    if (u = h[0] = h[0].slice(0), u.length > 2 && "ID" === (f = u[0]).type && r.getById && 9 === t.nodeType && d && s.relative[u[1].type]) {
                        if (t = (s.find.ID(f.matches[0].replace(rt, it), t) || [])[0], !t) return n;
                        e = e.slice(u.shift().value.length)
                    }
                    o = G.needsContext.test(e) ? 0 : u.length;
                    while (o--) {
                        if (f = u[o], s.relative[l = f.type]) break;
                        if ((c = s.find[l]) && (i = c(f.matches[0].replace(rt, it), $.test(u[0].type) && t.parentNode || t))) {
                            if (u.splice(o, 1), e = i.length && gt(u), !e) return H.apply(n, i), n;
                            break
                        }
                    }
                }
                return a(e, h)(i, t, !d, n, $.test(e)), n
            }
            var n, r, i, s, o, u, a, f, l, c, h, p, d, v, m, g, y, b = "sizzle" + -(new Date),
                E = e.document,
                S = 0,
                x = 0,
                T = ut(),
                N = ut(),
                C = ut(),
                k = !1,
                L = function(e, t) {
                    return e === t ? (k = !0, 0) : 0
                },
                A = typeof t,
                O = 1 << 31,
                M = {}.hasOwnProperty,
                _ = [],
                D = _.pop,
                P = _.push,
                H = _.push,
                B = _.slice,
                j = _.indexOf || function(e) {
                    var t = 0,
                        n = this.length;
                    for (; n > t; t++)
                        if (this[t] === e) return t;
                    return -1
                },
                F = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                I = "[\\x20\\t\\r\\n\\f]",
                q = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                R = q.replace("w", "w#"),
                U = "\\[" + I + "*(" + q + ")" + I + "*(?:([*^$|!~]?=)" + I + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + R + ")|)|)" + I + "*\\]",
                z = ":(" + q + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + U.replace(3, 8) + ")*)|.*)\\)|)",
                W = RegExp("^" + I + "+|((?:^|[^\\\\])(?:\\\\.)*)" + I + "+$", "g"),
                X = RegExp("^" + I + "*," + I + "*"),
                V = RegExp("^" + I + "*([>+~]|" + I + ")" + I + "*"),
                $ = RegExp(I + "*[+~]"),
                J = RegExp("=" + I + "*([^\\]'\"]*)" + I + "*\\]", "g"),
                K = RegExp(z),
                Q = RegExp("^" + R + "$"),
                G = {
                    ID: RegExp("^#(" + q + ")"),
                    CLASS: RegExp("^\\.(" + q + ")"),
                    TAG: RegExp("^(" + q.replace("w", "w*") + ")"),
                    ATTR: RegExp("^" + U),
                    PSEUDO: RegExp("^" + z),
                    CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + I + "*(even|odd|(([+-]|)(\\d*)n|)" + I + "*(?:([+-]|)" + I + "*(\\d+)|))" + I + "*\\)|)", "i"),
                    bool: RegExp("^(?:" + F + ")$", "i"),
                    needsContext: RegExp("^" + I + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + I + "*((?:-\\d)?\\d*)" + I + "*\\)|)(?=[^-]|$)", "i")
                },
                Y = /^[^{]+\{\s*\[native \w/,
                Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                et = /^(?:input|select|textarea|button)$/i,
                tt = /^h\d$/i,
                nt = /'|\\/g,
                rt = RegExp("\\\\([\\da-f]{1,6}" + I + "?|(" + I + ")|.)", "ig"),
                it = function(e, t, n) {
                    var r = "0x" + t - 65536;
                    return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(55296 | r >> 10, 56320 | 1023 & r)
                };
            try {
                H.apply(_ = B.call(E.childNodes), E.childNodes), _[E.childNodes.length].nodeType
            } catch (st) {
                H = {
                    apply: _.length ? function(e, t) {
                        P.apply(e, B.call(t))
                    } : function(e, t) {
                        var n = e.length,
                            r = 0;
                        while (e[n++] = t[r++]);
                        e.length = n - 1
                    }
                }
            }
            u = ot.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return t ? "HTML" !== t.nodeName : !1
            }, r = ot.support = {}, c = ot.setDocument = function(e) {
                var n = e ? e.ownerDocument || e : E,
                    i = n.defaultView;
                return n !== h && 9 === n.nodeType && n.documentElement ? (h = n, p = n.documentElement, d = !u(n), i && i.attachEvent && i !== i.top && i.attachEvent("onbeforeunload", function() {
                    c()
                }), r.attributes = ft(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), r.getElementsByTagName = ft(function(e) {
                    return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length
                }), r.getElementsByClassName = ft(function(e) {
                    return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
                }), r.getById = ft(function(e) {
                    return p.appendChild(e).id = b, !n.getElementsByName || !n.getElementsByName(b).length
                }), r.getById ? (s.find.ID = function(e, t) {
                    if (typeof t.getElementById !== A && d) {
                        var n = t.getElementById(e);
                        return n && n.parentNode ? [n] : []
                    }
                }, s.filter.ID = function(e) {
                    var t = e.replace(rt, it);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }) : (delete s.find.ID, s.filter.ID = function(e) {
                    var t = e.replace(rt, it);
                    return function(e) {
                        var n = typeof e.getAttributeNode !== A && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }), s.find.TAG = r.getElementsByTagName ? function(e, n) {
                    return typeof n.getElementsByTagName !== A ? n.getElementsByTagName(e) : t
                } : function(e, t) {
                    var n, r = [],
                        i = 0,
                        s = t.getElementsByTagName(e);
                    if ("*" === e) {
                        while (n = s[i++]) 1 === n.nodeType && r.push(n);
                        return r
                    }
                    return s
                }, s.find.CLASS = r.getElementsByClassName && function(e, n) {
                    return typeof n.getElementsByClassName !== A && d ? n.getElementsByClassName(e) : t
                }, m = [], v = [], (r.qsa = Y.test(n.querySelectorAll)) && (ft(function(e) {
                    e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || v.push("\\[" + I + "*(?:value|" + F + ")"), e.querySelectorAll(":checked").length || v.push(":checked")
                }), ft(function(e) {
                    var t = n.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("t", ""), e.querySelectorAll("[t^='']").length && v.push("[*^$]=" + I + "*(?:''|\"\")"), e.querySelectorAll(":enabled").length || v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:")
                })), (r.matchesSelector = Y.test(g = p.webkitMatchesSelector || p.mozMatchesSelector || p.oMatchesSelector || p.msMatchesSelector)) && ft(function(e) {
                    r.disconnectedMatch = g.call(e, "div"), g.call(e, "[s!='']:x"), m.push("!=", z)
                }), v = v.length && RegExp(v.join("|")), m = m.length && RegExp(m.join("|")), y = Y.test(p.contains) || p.compareDocumentPosition ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        r = t && t.parentNode;
                    return e === r || !!r && 1 === r.nodeType && !!(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r))
                } : function(e, t) {
                    if (t)
                        while (t = t.parentNode)
                            if (t === e) return !0;
                    return !1
                }, L = p.compareDocumentPosition ? function(e, t) {
                    if (e === t) return k = !0, 0;
                    var i = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t);
                    return i ? 1 & i || !r.sortDetached && t.compareDocumentPosition(e) === i ? e === n || y(E, e) ? -1 : t === n || y(E, t) ? 1 : l ? j.call(l, e) - j.call(l, t) : 0 : 4 & i ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
                } : function(e, t) {
                    var r, i = 0,
                        s = e.parentNode,
                        o = t.parentNode,
                        u = [e],
                        a = [t];
                    if (e === t) return k = !0, 0;
                    if (!s || !o) return e === n ? -1 : t === n ? 1 : s ? -1 : o ? 1 : l ? j.call(l, e) - j.call(l, t) : 0;
                    if (s === o) return ct(e, t);
                    r = e;
                    while (r = r.parentNode) u.unshift(r);
                    r = t;
                    while (r = r.parentNode) a.unshift(r);
                    while (u[i] === a[i]) i++;
                    return i ? ct(u[i], a[i]) : u[i] === E ? -1 : a[i] === E ? 1 : 0
                }, n) : h
            }, ot.matches = function(e, t) {
                return ot(e, null, null, t)
            }, ot.matchesSelector = function(e, t) {
                if ((e.ownerDocument || e) !== h && c(e), t = t.replace(J, "='$1']"), !(!r.matchesSelector || !d || m && m.test(t) || v && v.test(t))) try {
                    var n = g.call(e, t);
                    if (n || r.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                } catch (i) {}
                return ot(t, h, null, [e]).length > 0
            }, ot.contains = function(e, t) {
                return (e.ownerDocument || e) !== h && c(e), y(e, t)
            }, ot.attr = function(e, n) {
                (e.ownerDocument || e) !== h && c(e);
                var i = s.attrHandle[n.toLowerCase()],
                    o = i && M.call(s.attrHandle, n.toLowerCase()) ? i(e, n, !d) : t;
                return o === t ? r.attributes || !d ? e.getAttribute(n) : (o = e.getAttributeNode(n)) && o.specified ? o.value : null : o
            }, ot.error = function(e) {
                throw Error("Syntax error, unrecognized expression: " + e)
            }, ot.uniqueSort = function(e) {
                var t, n = [],
                    i = 0,
                    s = 0;
                if (k = !r.detectDuplicates, l = !r.sortStable && e.slice(0), e.sort(L), k) {
                    while (t = e[s++]) t === e[s] && (i = n.push(s));
                    while (i--) e.splice(n[i], 1)
                }
                return e
            }, o = ot.getText = function(e) {
                var t, n = "",
                    r = 0,
                    i = e.nodeType;
                if (i) {
                    if (1 === i || 9 === i || 11 === i) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
                    } else if (3 === i || 4 === i) return e.nodeValue
                } else
                    for (; t = e[r]; r++) n += o(t);
                return n
            }, s = ot.selectors = {
                cacheLength: 50,
                createPseudo: at,
                match: G,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(rt, it), e[3] = (e[4] || e[5] || "").replace(rt, it), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || ot.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ot.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var n, r = !e[5] && e[2];
                        return G.CHILD.test(e[0]) ? null : (e[3] && e[4] !== t ? e[2] = e[4] : r && K.test(r) && (n = mt(r, !0)) && (n = r.indexOf(")", r.length - n) - r.length) && (e[0] = e[0].slice(0, n), e[2] = r.slice(0, n)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(rt, it).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = T[e + " "];
                        return t || (t = RegExp("(^|" + I + ")" + e + "(" + I + "|$)")) && T(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== A && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(e, t, n) {
                        return function(r) {
                            var i = ot.attr(r, e);
                            return null == i ? "!=" === t : t ? (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i + " ").indexOf(n) > -1 : "|=" === t ? i === n || i.slice(0, n.length + 1) === n + "-" : !1) : !0
                        }
                    },
                    CHILD: function(e, t, n, r, i) {
                        var s = "nth" !== e.slice(0, 3),
                            o = "last" !== e.slice(-4),
                            u = "of-type" === t;
                        return 1 === r && 0 === i ? function(e) {
                            return !!e.parentNode
                        } : function(t, n, a) {
                            var f, l, c, h, p, d, v = s !== o ? "nextSibling" : "previousSibling",
                                m = t.parentNode,
                                g = u && t.nodeName.toLowerCase(),
                                y = !a && !u;
                            if (m) {
                                if (s) {
                                    while (v) {
                                        c = t;
                                        while (c = c[v])
                                            if (u ? c.nodeName.toLowerCase() === g : 1 === c.nodeType) return !1;
                                        d = v = "only" === e && !d && "nextSibling"
                                    }
                                    return !0
                                }
                                if (d = [o ? m.firstChild : m.lastChild], o && y) {
                                    l = m[b] || (m[b] = {}), f = l[e] || [], p = f[0] === S && f[1], h = f[0] === S && f[2], c = p && m.childNodes[p];
                                    while (c = ++p && c && c[v] || (h = p = 0) || d.pop())
                                        if (1 === c.nodeType && ++h && c === t) {
                                            l[e] = [S, p, h];
                                            break
                                        }
                                } else if (y && (f = (t[b] || (t[b] = {}))[e]) && f[0] === S) h = f[1];
                                else
                                    while (c = ++p && c && c[v] || (h = p = 0) || d.pop())
                                        if ((u ? c.nodeName.toLowerCase() === g : 1 === c.nodeType) && ++h && (y && ((c[b] || (c[b] = {}))[e] = [S, h]), c === t)) break; return h -= i, h === r || 0 === h % r && h / r >= 0
                            }
                        }
                    },
                    PSEUDO: function(e, t) {
                        var n, r = s.pseudos[e] || s.setFilters[e.toLowerCase()] || ot.error("unsupported pseudo: " + e);
                        return r[b] ? r(t) : r.length > 1 ? (n = [e, e, "", t], s.setFilters.hasOwnProperty(e.toLowerCase()) ? at(function(e, n) {
                            var i, s = r(e, t),
                                o = s.length;
                            while (o--) i = j.call(e, s[o]), e[i] = !(n[i] = s[o])
                        }) : function(e) {
                            return r(e, 0, n)
                        }) : r
                    }
                },
                pseudos: {
                    not: at(function(e) {
                        var t = [],
                            n = [],
                            r = a(e.replace(W, "$1"));
                        return r[b] ? at(function(e, t, n, i) {
                            var s, o = r(e, null, i, []),
                                u = e.length;
                            while (u--)(s = o[u]) && (e[u] = !(t[u] = s))
                        }) : function(e, i, s) {
                            return t[0] = e, r(t, null, s, n), !n.pop()
                        }
                    }),
                    has: at(function(e) {
                        return function(t) {
                            return ot(e, t).length > 0
                        }
                    }),
                    contains: at(function(e) {
                        return function(t) {
                            return (t.textContent || t.innerText || o(t)).indexOf(e) > -1
                        }
                    }),
                    lang: at(function(e) {
                        return Q.test(e || "") || ot.error("unsupported lang: " + e), e = e.replace(rt, it).toLowerCase(),
                            function(t) {
                                var n;
                                do
                                    if (n = d ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
                                while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    }),
                    target: function(t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    },
                    root: function(e) {
                        return e === p
                    },
                    focus: function(e) {
                        return e === h.activeElement && (!h.hasFocus || h.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: function(e) {
                        return e.disabled === !1
                    },
                    disabled: function(e) {
                        return e.disabled === !0
                    },
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !s.pseudos.empty(e)
                    },
                    header: function(e) {
                        return tt.test(e.nodeName)
                    },
                    input: function(e) {
                        return et.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
                    },
                    first: dt(function() {
                        return [0]
                    }),
                    last: dt(function(e, t) {
                        return [t - 1]
                    }),
                    eq: dt(function(e, t, n) {
                        return [0 > n ? n + t : n]
                    }),
                    even: dt(function(e, t) {
                        var n = 0;
                        for (; t > n; n += 2) e.push(n);
                        return e
                    }),
                    odd: dt(function(e, t) {
                        var n = 1;
                        for (; t > n; n += 2) e.push(n);
                        return e
                    }),
                    lt: dt(function(e, t, n) {
                        var r = 0 > n ? n + t : n;
                        for (; --r >= 0;) e.push(r);
                        return e
                    }),
                    gt: dt(function(e, t, n) {
                        var r = 0 > n ? n + t : n;
                        for (; t > ++r;) e.push(r);
                        return e
                    })
                }
            }, s.pseudos.nth = s.pseudos.eq;
            for (n in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) s.pseudos[n] = ht(n);
            for (n in {
                submit: !0,
                reset: !0
            }) s.pseudos[n] = pt(n);
            vt.prototype = s.filters = s.pseudos, s.setFilters = new vt, a = ot.compile = function(e, t) {
                var n, r = [],
                    i = [],
                    s = C[e + " "];
                if (!s) {
                    t || (t = mt(e)), n = t.length;
                    while (n--) s = St(t[n]), s[b] ? r.push(s) : i.push(s);
                    s = C(e, xt(i, r))
                }
                return s
            }, r.sortStable = b.split("").sort(L).join("") === b, r.detectDuplicates = k, c(), r.sortDetached = ft(function(e) {
                return 1 & e.compareDocumentPosition(h.createElement("div"))
            }), ft(function(e) {
                return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
            }) || lt("type|href|height|width", function(e, n, r) {
                return r ? t : e.getAttribute(n, "type" === n.toLowerCase() ? 1 : 2)
            }), r.attributes && ft(function(e) {
                return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
            }) || lt("value", function(e, n, r) {
                return r || "input" !== e.nodeName.toLowerCase() ? t : e.defaultValue
            }), ft(function(e) {
                return null == e.getAttribute("disabled")
            }) || lt(F, function(e, n, r) {
                var i;
                return r ? t : (i = e.getAttributeNode(n)) && i.specified ? i.value : e[n] === !0 ? n.toLowerCase() : null
            }), w.find = ot, w.expr = ot.selectors, w.expr[":"] = w.expr.pseudos, w.unique = ot.uniqueSort, w.text = ot.getText, w.isXMLDoc = ot.isXML, w.contains = ot.contains
        }(e);
    var B = {};
    w.Callbacks = function(e) {
        e = "string" == typeof e ? B[e] || j(e) : w.extend({}, e);
        var n, r, i, s, o, u, a = [],
            f = !e.once && [],
            l = function(t) {
                for (r = e.memory && t, i = !0, o = u || 0, u = 0, s = a.length, n = !0; a && s > o; o++)
                    if (a[o].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                        r = !1;
                        break
                    }
                n = !1, a && (f ? f.length && l(f.shift()) : r ? a = [] : c.disable())
            },
            c = {
                add: function() {
                    if (a) {
                        var t = a.length;
                        (function i(t) {
                            w.each(t, function(t, n) {
                                var r = w.type(n);
                                "function" === r ? e.unique && c.has(n) || a.push(n) : n && n.length && "string" !== r && i(n)
                            })
                        })(arguments), n ? s = a.length : r && (u = t, l(r))
                    }
                    return this
                },
                remove: function() {
                    return a && w.each(arguments, function(e, t) {
                        var r;
                        while ((r = w.inArray(t, a, r)) > -1) a.splice(r, 1), n && (s >= r && s--, o >= r && o--)
                    }), this
                },
                has: function(e) {
                    return e ? w.inArray(e, a) > -1 : !!a && !!a.length
                },
                empty: function() {
                    return a = [], s = 0, this
                },
                disable: function() {
                    return a = f = r = t, this
                },
                disabled: function() {
                    return !a
                },
                lock: function() {
                    return f = t, r || c.disable(), this
                },
                locked: function() {
                    return !f
                },
                fireWith: function(e, t) {
                    return !a || i && !f || (t = t || [], t = [e, t.slice ? t.slice() : t], n ? f.push(t) : l(t)), this
                },
                fire: function() {
                    return c.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!i
                }
            };
        return c
    }, w.extend({
        Deferred: function(e) {
            var t = [
                    ["resolve", "done", w.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", w.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", w.Callbacks("memory")]
                ],
                n = "pending",
                r = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return i.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var e = arguments;
                        return w.Deferred(function(n) {
                            w.each(t, function(t, s) {
                                var o = s[0],
                                    u = w.isFunction(e[t]) && e[t];
                                i[s[1]](function() {
                                    var e = u && u.apply(this, arguments);
                                    e && w.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o + "With"](this === r ? n.promise() : this, u ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? w.extend(e, r) : r
                    }
                },
                i = {};
            return r.pipe = r.then, w.each(t, function(e, s) {
                var o = s[2],
                    u = s[3];
                r[s[1]] = o.add, u && o.add(function() {
                    n = u
                }, t[1 ^ e][2].disable, t[2][2].lock), i[s[0]] = function() {
                    return i[s[0] + "With"](this === i ? r : this, arguments), this
                }, i[s[0] + "With"] = o.fireWith
            }), r.promise(i), e && e.call(i, i), i
        },
        when: function(e) {
            var t = 0,
                n = v.call(arguments),
                r = n.length,
                i = 1 !== r || e && w.isFunction(e.promise) ? r : 0,
                s = 1 === i ? e : w.Deferred(),
                o = function(e, t, n) {
                    return function(r) {
                        t[e] = this, n[e] = arguments.length > 1 ? v.call(arguments) : r, n === u ? s.notifyWith(t, n) : --i || s.resolveWith(t, n)
                    }
                },
                u, a, f;
            if (r > 1)
                for (u = Array(r), a = Array(r), f = Array(r); r > t; t++) n[t] && w.isFunction(n[t].promise) ? n[t].promise().done(o(t, f, n)).fail(s.reject).progress(o(t, a, u)) : --i;
            return i || s.resolveWith(f, n), s.promise()
        }
    }), w.support = function(t) {
        var n, r, s, u, a, f, l, c, h, p = o.createElement("div");
        if (p.setAttribute("className", "t"), p.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = p.getElementsByTagName("*") || [], r = p.getElementsByTagName("a")[0], !r || !r.style || !n.length) return t;
        u = o.createElement("select"), f = u.appendChild(o.createElement("option")), s = p.getElementsByTagName("input")[0], r.style.cssText = "top:1px;float:left;opacity:.5", t.getSetAttribute = "t" !== p.className, t.leadingWhitespace = 3 === p.firstChild.nodeType, t.tbody = !p.getElementsByTagName("tbody").length, t.htmlSerialize = !!p.getElementsByTagName("link").length, t.style = /top/.test(r.getAttribute("style")), t.hrefNormalized = "/a" === r.getAttribute("href"), t.opacity = /^0.5/.test(r.style.opacity), t.cssFloat = !!r.style.cssFloat, t.checkOn = !!s.value, t.optSelected = f.selected, t.enctype = !!o.createElement("form").enctype, t.html5Clone = "<:nav></:nav>" !== o.createElement("nav").cloneNode(!0).outerHTML, t.inlineBlockNeedsLayout = !1, t.shrinkWrapBlocks = !1, t.pixelPosition = !1, t.deleteExpando = !0, t.noCloneEvent = !0, t.reliableMarginRight = !0, t.boxSizingReliable = !0, s.checked = !0, t.noCloneChecked = s.cloneNode(!0).checked, u.disabled = !0, t.optDisabled = !f.disabled;
        try {
            delete p.test
        } catch (d) {
            t.deleteExpando = !1
        }
        s = o.createElement("input"), s.setAttribute("value", ""), t.input = "" === s.getAttribute("value"), s.value = "t", s.setAttribute("type", "radio"), t.radioValue = "t" === s.value, s.setAttribute("checked", "t"), s.setAttribute("name", "t"), a = o.createDocumentFragment(), a.appendChild(s), t.appendChecked = s.checked, t.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, p.attachEvent && (p.attachEvent("onclick", function() {
            t.noCloneEvent = !1
        }), p.cloneNode(!0).click());
        for (h in {
            submit: !0,
            change: !0,
            focusin: !0
        }) p.setAttribute(l = "on" + h, "t"), t[h + "Bubbles"] = l in e || p.attributes[l].expando === !1;
        p.style.backgroundClip = "content-box", p.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = "content-box" === p.style.backgroundClip;
        for (h in w(t)) break;
        return t.ownLast = "0" !== h, w(function() {
            var n, r, s, u = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
                a = o.getElementsByTagName("body")[0];
            a && (n = o.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", a.appendChild(n).appendChild(p), p.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", s = p.getElementsByTagName("td"), s[0].style.cssText = "padding:0;margin:0;border:0;display:none", c = 0 === s[0].offsetHeight, s[0].style.display = "", s[1].style.display = "none", t.reliableHiddenOffsets = c && 0 === s[0].offsetHeight, p.innerHTML = "", p.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", w.swap(a, null != a.style.zoom ? {
                zoom: 1
            } : {}, function() {
                t.boxSizing = 4 === p.offsetWidth
            }), e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(p, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(p, null) || {
                width: "4px"
            }).width, r = p.appendChild(o.createElement("div")), r.style.cssText = p.style.cssText = u, r.style.marginRight = r.style.width = "0", p.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), typeof p.style.zoom !== i && (p.innerHTML = "", p.style.cssText = u + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === p.offsetWidth, p.style.display = "block", p.innerHTML = "<div></div>", p.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== p.offsetWidth, t.inlineBlockNeedsLayout && (a.style.zoom = 1)), a.removeChild(n), n = p = s = r = null)
        }), n = u = a = f = r = s = null, t
    }({});
    var F = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
        I = /([A-Z])/g;
    w.extend({
        cache: {},
        noData: {
            applet: !0,
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(e) {
            return e = e.nodeType ? w.cache[e[w.expando]] : e[w.expando], !!e && !z(e)
        },
        data: function(e, t, n) {
            return q(e, t, n)
        },
        removeData: function(e, t) {
            return R(e, t)
        },
        _data: function(e, t, n) {
            return q(e, t, n, !0)
        },
        _removeData: function(e, t) {
            return R(e, t, !0)
        },
        acceptData: function(e) {
            if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) return !1;
            var t = e.nodeName && w.noData[e.nodeName.toLowerCase()];
            return !t || t !== !0 && e.getAttribute("classid") === t
        }
    }), w.fn.extend({
        data: function(e, n) {
            var r, i, s = null,
                o = 0,
                u = this[0];
            if (e === t) {
                if (this.length && (s = w.data(u), 1 === u.nodeType && !w._data(u, "parsedAttrs"))) {
                    for (r = u.attributes; r.length > o; o++) i = r[o].name, 0 === i.indexOf("data-") && (i = w.camelCase(i.slice(5)), U(u, i, s[i]));
                    w._data(u, "parsedAttrs", !0)
                }
                return s
            }
            return "object" == typeof e ? this.each(function() {
                w.data(this, e)
            }) : arguments.length > 1 ? this.each(function() {
                w.data(this, e, n)
            }) : u ? U(u, e, w.data(u, e)) : null
        },
        removeData: function(e) {
            return this.each(function() {
                w.removeData(this, e)
            })
        }
    }), w.extend({
        queue: function(e, n, r) {
            var i;
            return e ? (n = (n || "fx") + "queue", i = w._data(e, n), r && (!i || w.isArray(r) ? i = w._data(e, n, w.makeArray(r)) : i.push(r)), i || []) : t
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = w.queue(e, t),
                r = n.length,
                i = n.shift(),
                s = w._queueHooks(e, t),
                o = function() {
                    w.dequeue(e, t)
                };
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete s.stop, i.call(e, o, s)), !r && s && s.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return w._data(e, n) || w._data(e, n, {
                empty: w.Callbacks("once memory").add(function() {
                    w._removeData(e, t + "queue"), w._removeData(e, n)
                })
            })
        }
    }), w.fn.extend({
        queue: function(e, n) {
            var r = 2;
            return "string" != typeof e && (n = e, e = "fx", r--), r > arguments.length ? w.queue(this[0], e) : n === t ? this : this.each(function() {
                var t = w.queue(this, e, n);
                w._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && w.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                w.dequeue(this, e)
            })
        },
        delay: function(e, t) {
            return e = w.fx ? w.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                var r = setTimeout(t, e);
                n.stop = function() {
                    clearTimeout(r)
                }
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, n) {
            var r, i = 1,
                s = w.Deferred(),
                o = this,
                u = this.length,
                a = function() {
                    --i || s.resolveWith(o, [o])
                };
            "string" != typeof e && (n = e, e = t), e = e || "fx";
            while (u--) r = w._data(o[u], e + "queueHooks"), r && r.empty && (i++, r.empty.add(a));
            return a(), s.promise(n)
        }
    });
    var W, X, V = /[\t\r\n\f]/g,
        $ = /\r/g,
        J = /^(?:input|select|textarea|button|object)$/i,
        K = /^(?:a|area)$/i,
        Q = /^(?:checked|selected)$/i,
        G = w.support.getSetAttribute,
        Y = w.support.input;
    w.fn.extend({
        attr: function(e, t) {
            return w.access(this, w.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                w.removeAttr(this, e)
            })
        },
        prop: function(e, t) {
            return w.access(this, w.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return e = w.propFix[e] || e, this.each(function() {
                try {
                    this[e] = t, delete this[e]
                } catch (n) {}
            })
        },
        addClass: function(e) {
            var t, n, r, i, s, o = 0,
                u = this.length,
                a = "string" == typeof e && e;
            if (w.isFunction(e)) return this.each(function(t) {
                w(this).addClass(e.call(this, t, this.className))
            });
            if (a)
                for (t = (e || "").match(S) || []; u > o; o++)
                    if (n = this[o], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(V, " ") : " ")) {
                        s = 0;
                        while (i = t[s++]) 0 > r.indexOf(" " + i + " ") && (r += i + " ");
                        n.className = w.trim(r)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, r, i, s, o = 0,
                u = this.length,
                a = 0 === arguments.length || "string" == typeof e && e;
            if (w.isFunction(e)) return this.each(function(t) {
                w(this).removeClass(e.call(this, t, this.className))
            });
            if (a)
                for (t = (e || "").match(S) || []; u > o; o++)
                    if (n = this[o], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(V, " ") : "")) {
                        s = 0;
                        while (i = t[s++])
                            while (r.indexOf(" " + i + " ") >= 0) r = r.replace(" " + i + " ", " ");
                        n.className = e ? w.trim(r) : ""
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : w.isFunction(e) ? this.each(function(n) {
                w(this).toggleClass(e.call(this, n, this.className, t), t)
            }) : this.each(function() {
                if ("string" === n) {
                    var t, r = 0,
                        s = w(this),
                        o = e.match(S) || [];
                    while (t = o[r++]) s.hasClass(t) ? s.removeClass(t) : s.addClass(t)
                } else(n === i || "boolean" === n) && (this.className && w._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : w._data(this, "__className__") || "")
            })
        },
        hasClass: function(e) {
            var t = " " + e + " ",
                n = 0,
                r = this.length;
            for (; r > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(V, " ").indexOf(t) >= 0) return !0;
            return !1
        },
        val: function(e) {
            var n, r, i, s = this[0];
            if (arguments.length) return i = w.isFunction(e), this.each(function(n) {
                var s;
                1 === this.nodeType && (s = i ? e.call(this, n, w(this).val()) : e, null == s ? s = "" : "number" == typeof s ? s += "" : w.isArray(s) && (s = w.map(s, function(e) {
                    return null == e ? "" : e + ""
                })), r = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()], r && "set" in r && r.set(this, s, "value") !== t || (this.value = s))
            });
            if (s) return r = w.valHooks[s.type] || w.valHooks[s.nodeName.toLowerCase()], r && "get" in r && (n = r.get(s, "value")) !== t ? n : (n = s.value, "string" == typeof n ? n.replace($, "") : null == n ? "" : n)
        }
    }), w.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = w.find.attr(e, "value");
                    return null != t ? t : e.text
                }
            },
            select: {
                get: function(e) {
                    var t, n, r = e.options,
                        i = e.selectedIndex,
                        s = "select-one" === e.type || 0 > i,
                        o = s ? null : [],
                        u = s ? i + 1 : r.length,
                        a = 0 > i ? u : s ? i : 0;
                    for (; u > a; a++)
                        if (n = r[a], !(!n.selected && a !== i || (w.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && w.nodeName(n.parentNode, "optgroup"))) {
                            if (t = w(n).val(), s) return t;
                            o.push(t)
                        }
                    return o
                },
                set: function(e, t) {
                    var n, r, i = e.options,
                        s = w.makeArray(t),
                        o = i.length;
                    while (o--) r = i[o], (r.selected = w.inArray(w(r).val(), s) >= 0) && (n = !0);
                    return n || (e.selectedIndex = -1), s
                }
            }
        },
        attr: function(e, n, r) {
            var s, o, u = e.nodeType;
            if (e && 3 !== u && 8 !== u && 2 !== u) return typeof e.getAttribute === i ? w.prop(e, n, r) : (1 === u && w.isXMLDoc(e) || (n = n.toLowerCase(), s = w.attrHooks[n] || (w.expr.match.bool.test(n) ? X : W)), r === t ? s && "get" in s && null !== (o = s.get(e, n)) ? o : (o = w.find.attr(e, n), null == o ? t : o) : null !== r ? s && "set" in s && (o = s.set(e, r, n)) !== t ? o : (e.setAttribute(n, r + ""), r) : (w.removeAttr(e, n), t))
        },
        removeAttr: function(e, t) {
            var n, r, i = 0,
                s = t && t.match(S);
            if (s && 1 === e.nodeType)
                while (n = s[i++]) r = w.propFix[n] || n, w.expr.match.bool.test(n) ? Y && G || !Q.test(n) ? e[r] = !1 : e[w.camelCase("default-" + n)] = e[r] = !1 : w.attr(e, n, ""), e.removeAttribute(G ? n : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!w.support.radioValue && "radio" === t && w.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(e, n, r) {
            var i, s, o, u = e.nodeType;
            if (e && 3 !== u && 8 !== u && 2 !== u) return o = 1 !== u || !w.isXMLDoc(e), o && (n = w.propFix[n] || n, s = w.propHooks[n]), r !== t ? s && "set" in s && (i = s.set(e, r, n)) !== t ? i : e[n] = r : s && "get" in s && null !== (i = s.get(e, n)) ? i : e[n]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = w.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : J.test(e.nodeName) || K.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }
    }), X = {
        set: function(e, t, n) {
            return t === !1 ? w.removeAttr(e, n) : Y && G || !Q.test(n) ? e.setAttribute(!G && w.propFix[n] || n, n) : e[w.camelCase("default-" + n)] = e[n] = !0, n
        }
    }, w.each(w.expr.match.bool.source.match(/\w+/g), function(e, n) {
        var r = w.expr.attrHandle[n] || w.find.attr;
        w.expr.attrHandle[n] = Y && G || !Q.test(n) ? function(e, n, i) {
            var s = w.expr.attrHandle[n],
                o = i ? t : (w.expr.attrHandle[n] = t) != r(e, n, i) ? n.toLowerCase() : null;
            return w.expr.attrHandle[n] = s, o
        } : function(e, n, r) {
            return r ? t : e[w.camelCase("default-" + n)] ? n.toLowerCase() : null
        }
    }), Y && G || (w.attrHooks.value = {
        set: function(e, n, r) {
            return w.nodeName(e, "input") ? (e.defaultValue = n, t) : W && W.set(e, n, r)
        }
    }), G || (W = {
        set: function(e, n, r) {
            var i = e.getAttributeNode(r);
            return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(r)), i.value = n += "", "value" === r || n === e.getAttribute(r) ? n : t
        }
    }, w.expr.attrHandle.id = w.expr.attrHandle.name = w.expr.attrHandle.coords = function(e, n, r) {
        var i;
        return r ? t : (i = e.getAttributeNode(n)) && "" !== i.value ? i.value : null
    }, w.valHooks.button = {
        get: function(e, n) {
            var r = e.getAttributeNode(n);
            return r && r.specified ? r.value : t
        },
        set: W.set
    }, w.attrHooks.contenteditable = {
        set: function(e, t, n) {
            W.set(e, "" === t ? !1 : t, n)
        }
    }, w.each(["width", "height"], function(e, n) {
        w.attrHooks[n] = {
            set: function(e, r) {
                return "" === r ? (e.setAttribute(n, "auto"), r) : t
            }
        }
    })), w.support.hrefNormalized || w.each(["href", "src"], function(e, t) {
        w.propHooks[t] = {
            get: function(e) {
                return e.getAttribute(t, 4)
            }
        }
    }), w.support.style || (w.attrHooks.style = {
        get: function(e) {
            return e.style.cssText || t
        },
        set: function(e, t) {
            return e.style.cssText = t + ""
        }
    }), w.support.optSelected || (w.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    }), w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        w.propFix[this.toLowerCase()] = this
    }), w.support.enctype || (w.propFix.enctype = "encoding"), w.each(["radio", "checkbox"], function() {
        w.valHooks[this] = {
            set: function(e, n) {
                return w.isArray(n) ? e.checked = w.inArray(w(e).val(), n) >= 0 : t
            }
        }, w.support.checkOn || (w.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var Z = /^(?:input|select|textarea)$/i,
        et = /^key/,
        tt = /^(?:mouse|contextmenu)|click/,
        nt = /^(?:focusinfocus|focusoutblur)$/,
        rt = /^([^.]*)(?:\.(.+)|)$/;
    w.event = {
        global: {},
        add: function(e, n, r, s, o) {
            var u, a, f, l, c, h, p, d, v, m, g, y = w._data(e);
            if (y) {
                r.handler && (l = r, r = l.handler, o = l.selector), r.guid || (r.guid = w.guid++), (a = y.events) || (a = y.events = {}), (h = y.handle) || (h = y.handle = function(e) {
                    return typeof w === i || e && w.event.triggered === e.type ? t : w.event.dispatch.apply(h.elem, arguments)
                }, h.elem = e), n = (n || "").match(S) || [""], f = n.length;
                while (f--) u = rt.exec(n[f]) || [], v = g = u[1], m = (u[2] || "").split(".").sort(), v && (c = w.event.special[v] || {}, v = (o ? c.delegateType : c.bindType) || v, c = w.event.special[v] || {}, p = w.extend({
                    type: v,
                    origType: g,
                    data: s,
                    handler: r,
                    guid: r.guid,
                    selector: o,
                    needsContext: o && w.expr.match.needsContext.test(o),
                    namespace: m.join(".")
                }, l), (d = a[v]) || (d = a[v] = [], d.delegateCount = 0, c.setup && c.setup.call(e, s, m, h) !== !1 || (e.addEventListener ? e.addEventListener(v, h, !1) : e.attachEvent && e.attachEvent("on" + v, h))), c.add && (c.add.call(e, p), p.handler.guid || (p.handler.guid = r.guid)), o ? d.splice(d.delegateCount++, 0, p) : d.push(p), w.event.global[v] = !0);
                e = null
            }
        },
        remove: function(e, t, n, r, i) {
            var s, o, u, a, f, l, c, h, p, d, v, m = w.hasData(e) && w._data(e);
            if (m && (l = m.events)) {
                t = (t || "").match(S) || [""], f = t.length;
                while (f--)
                    if (u = rt.exec(t[f]) || [], p = v = u[1], d = (u[2] || "").split(".").sort(), p) {
                        c = w.event.special[p] || {}, p = (r ? c.delegateType : c.bindType) || p, h = l[p] || [], u = u[2] && RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = s = h.length;
                        while (s--) o = h[s], !i && v !== o.origType || n && n.guid !== o.guid || u && !u.test(o.namespace) || r && r !== o.selector && ("**" !== r || !o.selector) || (h.splice(s, 1), o.selector && h.delegateCount--, c.remove && c.remove.call(e, o));
                        a && !h.length && (c.teardown && c.teardown.call(e, d, m.handle) !== !1 || w.removeEvent(e, p, m.handle), delete l[p])
                    } else
                        for (p in l) w.event.remove(e, p + t[f], n, r, !0);
                w.isEmptyObject(l) && (delete m.handle, w._removeData(e, "events"))
            }
        },
        trigger: function(n, r, i, s) {
            var u, a, f, l, c, h, p, d = [i || o],
                v = y.call(n, "type") ? n.type : n,
                m = y.call(n, "namespace") ? n.namespace.split(".") : [];
            if (f = h = i = i || o, 3 !== i.nodeType && 8 !== i.nodeType && !nt.test(v + w.event.triggered) && (v.indexOf(".") >= 0 && (m = v.split("."), v = m.shift(), m.sort()), a = 0 > v.indexOf(":") && "on" + v, n = n[w.expando] ? n : new w.Event(v, "object" == typeof n && n), n.isTrigger = s ? 2 : 3, n.namespace = m.join("."), n.namespace_re = n.namespace ? RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = i), r = null == r ? [n] : w.makeArray(r, [n]), c = w.event.special[v] || {}, s || !c.trigger || c.trigger.apply(i, r) !== !1)) {
                if (!s && !c.noBubble && !w.isWindow(i)) {
                    for (l = c.delegateType || v, nt.test(l + v) || (f = f.parentNode); f; f = f.parentNode) d.push(f), h = f;
                    h === (i.ownerDocument || o) && d.push(h.defaultView || h.parentWindow || e)
                }
                p = 0;
                while ((f = d[p++]) && !n.isPropagationStopped()) n.type = p > 1 ? l : c.bindType || v, u = (w._data(f, "events") || {})[n.type] && w._data(f, "handle"), u && u.apply(f, r), u = a && f[a], u && w.acceptData(f) && u.apply && u.apply(f, r) === !1 && n.preventDefault();
                if (n.type = v, !s && !n.isDefaultPrevented() && (!c._default || c._default.apply(d.pop(), r) === !1) && w.acceptData(i) && a && i[v] && !w.isWindow(i)) {
                    h = i[a], h && (i[a] = null), w.event.triggered = v;
                    try {
                        i[v]()
                    } catch (g) {}
                    w.event.triggered = t, h && (i[a] = h)
                }
                return n.result
            }
        },
        dispatch: function(e) {
            e = w.event.fix(e);
            var n, r, i, s, o, u = [],
                a = v.call(arguments),
                f = (w._data(this, "events") || {})[e.type] || [],
                l = w.event.special[e.type] || {};
            if (a[0] = e, e.delegateTarget = this, !l.preDispatch || l.preDispatch.call(this, e) !== !1) {
                u = w.event.handlers.call(this, e, f), n = 0;
                while ((s = u[n++]) && !e.isPropagationStopped()) {
                    e.currentTarget = s.elem, o = 0;
                    while ((i = s.handlers[o++]) && !e.isImmediatePropagationStopped())(!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, r = ((w.event.special[i.origType] || {}).handle || i.handler).apply(s.elem, a), r !== t && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()))
                }
                return l.postDispatch && l.postDispatch.call(this, e), e.result
            }
        },
        handlers: function(e, n) {
            var r, i, s, o, u = [],
                a = n.delegateCount,
                f = e.target;
            if (a && f.nodeType && (!e.button || "click" !== e.type))
                for (; f != this; f = f.parentNode || this)
                    if (1 === f.nodeType && (f.disabled !== !0 || "click" !== e.type)) {
                        for (s = [], o = 0; a > o; o++) i = n[o], r = i.selector + " ", s[r] === t && (s[r] = i.needsContext ? w(r, this).index(f) >= 0 : w.find(r, this, null, [f]).length), s[r] && s.push(i);
                        s.length && u.push({
                            elem: f,
                            handlers: s
                        })
                    }
            return n.length > a && u.push({
                elem: this,
                handlers: n.slice(a)
            }), u
        },
        fix: function(e) {
            if (e[w.expando]) return e;
            var t, n, r, i = e.type,
                s = e,
                u = this.fixHooks[i];
            u || (this.fixHooks[i] = u = tt.test(i) ? this.mouseHooks : et.test(i) ? this.keyHooks : {}), r = u.props ? this.props.concat(u.props) : this.props, e = new w.Event(s), t = r.length;
            while (t--) n = r[t], e[n] = s[n];
            return e.target || (e.target = s.srcElement || o), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, u.filter ? u.filter(e, s) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, n) {
                var r, i, s, u = n.button,
                    a = n.fromElement;
                return null == e.pageX && null != n.clientX && (i = e.target.ownerDocument || o, s = i.documentElement, r = i.body, e.pageX = n.clientX + (s && s.scrollLeft || r && r.scrollLeft || 0) - (s && s.clientLeft || r && r.clientLeft || 0), e.pageY = n.clientY + (s && s.scrollTop || r && r.scrollTop || 0) - (s && s.clientTop || r && r.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? n.toElement : a), e.which || u === t || (e.which = 1 & u ? 1 : 2 & u ? 3 : 4 & u ? 2 : 0), e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== ot() && this.focus) try {
                        return this.focus(), !1
                    } catch (e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === ot() && this.blur ? (this.blur(), !1) : t
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return w.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : t
                },
                _default: function(e) {
                    return w.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    e.result !== t && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n, r) {
            var i = w.extend(new w.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? w.event.trigger(i, null, t) : w.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
        }
    }, w.removeEvent = o.removeEventListener ? function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    } : function(e, t, n) {
        var r = "on" + t;
        e.detachEvent && (typeof e[r] === i && (e[r] = null), e.detachEvent(r, n))
    }, w.Event = function(e, n) {
        return this instanceof w.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? it : st) : this.type = e, n && w.extend(this, n), this.timeStamp = e && e.timeStamp || w.now(), this[w.expando] = !0, t) : new w.Event(e, n)
    }, w.Event.prototype = {
        isDefaultPrevented: st,
        isPropagationStopped: st,
        isImmediatePropagationStopped: st,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = it, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = it, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = it, this.stopPropagation()
        }
    }, w.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(e, t) {
        w.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this,
                    i = e.relatedTarget,
                    s = e.handleObj;
                return (!i || i !== r && !w.contains(r, i)) && (e.type = s.origType, n = s.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), w.support.submitBubbles || (w.event.special.submit = {
        setup: function() {
            return w.nodeName(this, "form") ? !1 : (w.event.add(this, "click._submit keypress._submit", function(e) {
                var n = e.target,
                    r = w.nodeName(n, "input") || w.nodeName(n, "button") ? n.form : t;
                r && !w._data(r, "submitBubbles") && (w.event.add(r, "submit._submit", function(e) {
                    e._submit_bubble = !0
                }), w._data(r, "submitBubbles", !0))
            }), t)
        },
        postDispatch: function(e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && w.event.simulate("submit", this.parentNode, e, !0))
        },
        teardown: function() {
            return w.nodeName(this, "form") ? !1 : (w.event.remove(this, "._submit"), t)
        }
    }), w.support.changeBubbles || (w.event.special.change = {
        setup: function() {
            return Z.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (w.event.add(this, "propertychange._change", function(e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
            }), w.event.add(this, "click._change", function(e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1), w.event.simulate("change", this, e, !0)
            })), !1) : (w.event.add(this, "beforeactivate._change", function(e) {
                var t = e.target;
                Z.test(t.nodeName) && !w._data(t, "changeBubbles") && (w.event.add(t, "change._change", function(e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || w.event.simulate("change", this.parentNode, e, !0)
                }), w._data(t, "changeBubbles", !0))
            }), t)
        },
        handle: function(e) {
            var n = e.target;
            return this !== n || e.isSimulated || e.isTrigger || "radio" !== n.type && "checkbox" !== n.type ? e.handleObj.handler.apply(this, arguments) : t
        },
        teardown: function() {
            return w.event.remove(this, "._change"), !Z.test(this.nodeName)
        }
    }), w.support.focusinBubbles || w.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = 0,
            r = function(e) {
                w.event.simulate(t, e.target, w.event.fix(e), !0)
            };
        w.event.special[t] = {
            setup: function() {
                0 === n++ && o.addEventListener(e, r, !0)
            },
            teardown: function() {
                0 === --n && o.removeEventListener(e, r, !0)
            }
        }
    }), w.fn.extend({
        on: function(e, n, r, i, s) {
            var o, u;
            if ("object" == typeof e) {
                "string" != typeof n && (r = r || n, n = t);
                for (o in e) this.on(o, n, r, e[o], s);
                return this
            }
            if (null == r && null == i ? (i = n, r = n = t) : null == i && ("string" == typeof n ? (i = r, r = t) : (i = r, r = n, n = t)), i === !1) i = st;
            else if (!i) return this;
            return 1 === s && (u = i, i = function(e) {
                return w().off(e), u.apply(this, arguments)
            }, i.guid = u.guid || (u.guid = w.guid++)), this.each(function() {
                w.event.add(this, e, i, r, n)
            })
        },
        one: function(e, t, n, r) {
            return this.on(e, t, n, r, 1)
        },
        off: function(e, n, r) {
            var i, s;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, w(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof e) {
                for (s in e) this.off(s, n, e[s]);
                return this
            }
            return (n === !1 || "function" == typeof n) && (r = n, n = t), r === !1 && (r = st), this.each(function() {
                w.event.remove(this, e, r, n)
            })
        },
        trigger: function(e, t) {
            return this.each(function() {
                w.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, n) {
            var r = this[0];
            return r ? w.event.trigger(e, n, r, !0) : t
        }
    });
    var ut = /^.[^:#\[\.,]*$/,
        at = /^(?:parents|prev(?:Until|All))/,
        ft = w.expr.match.needsContext,
        lt = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    w.fn.extend({
        find: function(e) {
            var t, n = [],
                r = this,
                i = r.length;
            if ("string" != typeof e) return this.pushStack(w(e).filter(function() {
                for (t = 0; i > t; t++)
                    if (w.contains(r[t], this)) return !0
            }));
            for (t = 0; i > t; t++) w.find(e, r[t], n);
            return n = this.pushStack(i > 1 ? w.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
        },
        has: function(e) {
            var t, n = w(e, this),
                r = n.length;
            return this.filter(function() {
                for (t = 0; r > t; t++)
                    if (w.contains(this, n[t])) return !0
            })
        },
        not: function(e) {
            return this.pushStack(ht(this, e || [], !0))
        },
        filter: function(e) {
            return this.pushStack(ht(this, e || [], !1))
        },
        is: function(e) {
            return !!ht(this, "string" == typeof e && ft.test(e) ? w(e) : e || [], !1).length
        },
        closest: function(e, t) {
            var n, r = 0,
                i = this.length,
                s = [],
                o = ft.test(e) || "string" != typeof e ? w(e, t || this.context) : 0;
            for (; i > r; r++)
                for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (11 > n.nodeType && (o ? o.index(n) > -1 : 1 === n.nodeType && w.find.matchesSelector(n, e))) {
                        n = s.push(n);
                        break
                    }
            return this.pushStack(s.length > 1 ? w.unique(s) : s)
        },
        index: function(e) {
            return e ? "string" == typeof e ? w.inArray(this[0], w(e)) : w.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            var n = "string" == typeof e ? w(e, t) : w.makeArray(e && e.nodeType ? [e] : e),
                r = w.merge(this.get(), n);
            return this.pushStack(w.unique(r))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), w.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return w.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return w.dir(e, "parentNode", n)
        },
        next: function(e) {
            return ct(e, "nextSibling")
        },
        prev: function(e) {
            return ct(e, "previousSibling")
        },
        nextAll: function(e) {
            return w.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return w.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return w.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return w.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return w.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return w.sibling(e.firstChild)
        },
        contents: function(e) {
            return w.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : w.merge([], e.childNodes)
        }
    }, function(e, t) {
        w.fn[e] = function(n, r) {
            var i = w.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = w.filter(r, i)), this.length > 1 && (lt[e] || (i = w.unique(i)), at.test(e) && (i = i.reverse())), this.pushStack(i)
        }
    }), w.extend({
        filter: function(e, t, n) {
            var r = t[0];
            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? w.find.matchesSelector(r, e) ? [r] : [] : w.find.matches(e, w.grep(t, function(e) {
                return 1 === e.nodeType
            }))
        },
        dir: function(e, n, r) {
            var i = [],
                s = e[n];
            while (s && 9 !== s.nodeType && (r === t || 1 !== s.nodeType || !w(s).is(r))) 1 === s.nodeType && i.push(s), s = s[n];
            return i
        },
        sibling: function(e, t) {
            var n = [];
            for (; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    });
    var dt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        vt = / jQuery\d+="(?:null|\d+)"/g,
        mt = RegExp("<(?:" + dt + ")[\\s/>]", "i"),
        gt = /^\s+/,
        yt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        bt = /<([\w:]+)/,
        wt = /<tbody/i,
        Et = /<|&#?\w+;/,
        St = /<(?:script|style|link)/i,
        xt = /^(?:checkbox|radio)$/i,
        Tt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Nt = /^$|\/(?:java|ecma)script/i,
        Ct = /^true\/(.*)/,
        kt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Lt = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: w.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        At = pt(o),
        Ot = At.appendChild(o.createElement("div"));
    Lt.optgroup = Lt.option, Lt.tbody = Lt.tfoot = Lt.colgroup = Lt.caption = Lt.thead, Lt.th = Lt.td, w.fn.extend({
        text: function(e) {
            return w.access(this, function(e) {
                return e === t ? w.text(this) : this.empty().append((this[0] && this[0].ownerDocument || o).createTextNode(e))
            }, null, e, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Mt(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Mt(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function(e, t) {
            var n, r = e ? w.filter(e, this) : this,
                i = 0;
            for (; null != (n = r[i]); i++) t || 1 !== n.nodeType || w.cleanData(jt(n)), n.parentNode && (t && w.contains(n.ownerDocument, n) && Pt(jt(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            var e, t = 0;
            for (; null != (e = this[t]); t++) {
                1 === e.nodeType && w.cleanData(jt(e, !1));
                while (e.firstChild) e.removeChild(e.firstChild);
                e.options && w.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function(e, t) {
            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
                return w.clone(this, e, t)
            })
        },
        html: function(e) {
            return w.access(this, function(e) {
                var n = this[0] || {},
                    r = 0,
                    i = this.length;
                if (e === t) return 1 === n.nodeType ? n.innerHTML.replace(vt, "") : t;
                if (!("string" != typeof e || St.test(e) || !w.support.htmlSerialize && mt.test(e) || !w.support.leadingWhitespace && gt.test(e) || Lt[(bt.exec(e) || ["", ""])[1].toLowerCase()])) {
                    e = e.replace(yt, "<$1></$2>");
                    try {
                        for (; i > r; r++) n = this[r] || {}, 1 === n.nodeType && (w.cleanData(jt(n, !1)), n.innerHTML = e);
                        n = 0
                    } catch (s) {}
                }
                n && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = w.map(this, function(e) {
                    return [e.nextSibling, e.parentNode]
                }),
                t = 0;
            return this.domManip(arguments, function(n) {
                var r = e[t++],
                    i = e[t++];
                i && (r && r.parentNode !== i && (r = this.nextSibling), w(this).remove(), i.insertBefore(n, r))
            }, !0), t ? this : this.remove()
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(e, t, n) {
            e = p.apply([], e);
            var r, i, s, o, u, a, f = 0,
                l = this.length,
                c = this,
                h = l - 1,
                d = e[0],
                v = w.isFunction(d);
            if (v || !(1 >= l || "string" != typeof d || w.support.checkClone) && Tt.test(d)) return this.each(function(r) {
                var i = c.eq(r);
                v && (e[0] = d.call(this, r, i.html())), i.domManip(e, t, n)
            });
            if (l && (a = w.buildFragment(e, this[0].ownerDocument, !1, !n && this), r = a.firstChild, 1 === a.childNodes.length && (a = r), r)) {
                for (o = w.map(jt(a, "script"), _t), s = o.length; l > f; f++) i = a, f !== h && (i = w.clone(i, !0, !0), s && w.merge(o, jt(i, "script"))), t.call(this[f], i, f);
                if (s)
                    for (u = o[o.length - 1].ownerDocument, w.map(o, Dt), f = 0; s > f; f++) i = o[f], Nt.test(i.type || "") && !w._data(i, "globalEval") && w.contains(u, i) && (i.src ? w._evalUrl(i.src) : w.globalEval((i.text || i.textContent || i.innerHTML || "").replace(kt, "")));
                a = r = null
            }
            return this
        }
    }), w.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        w.fn[e] = function(e) {
            var n, r = 0,
                i = [],
                s = w(e),
                o = s.length - 1;
            for (; o >= r; r++) n = r === o ? this : this.clone(!0), w(s[r])[t](n), d.apply(i, n.get());
            return this.pushStack(i)
        }
    }), w.extend({
        clone: function(e, t, n) {
            var r, i, s, o, u, a = w.contains(e.ownerDocument, e);
            if (w.support.html5Clone || w.isXMLDoc(e) || !mt.test("<" + e.nodeName + ">") ? s = e.cloneNode(!0) : (Ot.innerHTML = e.outerHTML, Ot.removeChild(s = Ot.firstChild)), !(w.support.noCloneEvent && w.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || w.isXMLDoc(e)))
                for (r = jt(s), u = jt(e), o = 0; null != (i = u[o]); ++o) r[o] && Bt(i, r[o]);
            if (t)
                if (n)
                    for (u = u || jt(e), r = r || jt(s), o = 0; null != (i = u[o]); o++) Ht(i, r[o]);
                else Ht(e, s);
            return r = jt(s, "script"), r.length > 0 && Pt(r, !a && jt(e, "script")), r = u = i = null, s
        },
        buildFragment: function(e, t, n, r) {
            var i, s, o, u, a, f, l, c = e.length,
                h = pt(t),
                p = [],
                d = 0;
            for (; c > d; d++)
                if (s = e[d], s || 0 === s)
                    if ("object" === w.type(s)) w.merge(p, s.nodeType ? [s] : s);
                    else if (Et.test(s)) {
                u = u || h.appendChild(t.createElement("div")), a = (bt.exec(s) || ["", ""])[1].toLowerCase(), l = Lt[a] || Lt._default, u.innerHTML = l[1] + s.replace(yt, "<$1></$2>") + l[2], i = l[0];
                while (i--) u = u.lastChild;
                if (!w.support.leadingWhitespace && gt.test(s) && p.push(t.createTextNode(gt.exec(s)[0])), !w.support.tbody) {
                    s = "table" !== a || wt.test(s) ? "<table>" !== l[1] || wt.test(s) ? 0 : u : u.firstChild, i = s && s.childNodes.length;
                    while (i--) w.nodeName(f = s.childNodes[i], "tbody") && !f.childNodes.length && s.removeChild(f)
                }
                w.merge(p, u.childNodes), u.textContent = "";
                while (u.firstChild) u.removeChild(u.firstChild);
                u = h.lastChild
            } else p.push(t.createTextNode(s));
            u && h.removeChild(u), w.support.appendChecked || w.grep(jt(p, "input"), Ft), d = 0;
            while (s = p[d++])
                if ((!r || -1 === w.inArray(s, r)) && (o = w.contains(s.ownerDocument, s), u = jt(h.appendChild(s), "script"), o && Pt(u), n)) {
                    i = 0;
                    while (s = u[i++]) Nt.test(s.type || "") && n.push(s)
                }
            return u = null, h
        },
        cleanData: function(e, t) {
            var n, r, s, o, u = 0,
                a = w.expando,
                f = w.cache,
                l = w.support.deleteExpando,
                h = w.event.special;
            for (; null != (n = e[u]); u++)
                if ((t || w.acceptData(n)) && (s = n[a], o = s && f[s])) {
                    if (o.events)
                        for (r in o.events) h[r] ? w.event.remove(n, r) : w.removeEvent(n, r, o.handle);
                    f[s] && (delete f[s], l ? delete n[a] : typeof n.removeAttribute !== i ? n.removeAttribute(a) : n[a] = null, c.push(s))
                }
        },
        _evalUrl: function(e) {
            return w.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
            })
        }
    }), w.fn.extend({
        wrapAll: function(e) {
            if (w.isFunction(e)) return this.each(function(t) {
                w(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = w(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    var e = this;
                    while (e.firstChild && 1 === e.firstChild.nodeType) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            return w.isFunction(e) ? this.each(function(t) {
                w(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = w(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = w.isFunction(e);
            return this.each(function(n) {
                w(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                w.nodeName(this, "body") || w(this).replaceWith(this.childNodes)
            }).end()
        }
    });
    var It, qt, Rt, Ut = /alpha\([^)]*\)/i,
        zt = /opacity\s*=\s*([^)]*)/,
        Wt = /^(top|right|bottom|left)$/,
        Xt = /^(none|table(?!-c[ea]).+)/,
        Vt = /^margin/,
        $t = RegExp("^(" + E + ")(.*)$", "i"),
        Jt = RegExp("^(" + E + ")(?!px)[a-z%]+$", "i"),
        Kt = RegExp("^([+-])=(" + E + ")", "i"),
        Qt = {
            BODY: "block"
        },
        Gt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Yt = {
            letterSpacing: 0,
            fontWeight: 400
        },
        Zt = ["Top", "Right", "Bottom", "Left"],
        en = ["Webkit", "O", "Moz", "ms"];
    w.fn.extend({
        css: function(e, n) {
            return w.access(this, function(e, n, r) {
                var i, s, o = {},
                    u = 0;
                if (w.isArray(n)) {
                    for (s = qt(e), i = n.length; i > u; u++) o[n[u]] = w.css(e, n[u], !1, s);
                    return o
                }
                return r !== t ? w.style(e, n, r) : w.css(e, n)
            }, e, n, arguments.length > 1)
        },
        show: function() {
            return rn(this, !0)
        },
        hide: function() {
            return rn(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                nn(this) ? w(this).show() : w(this).hide()
            })
        }
    }), w.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Rt(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": w.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, n, r, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var s, o, u, a = w.camelCase(n),
                    f = e.style;
                if (n = w.cssProps[a] || (w.cssProps[a] = tn(f, a)), u = w.cssHooks[n] || w.cssHooks[a], r === t) return u && "get" in u && (s = u.get(e, !1, i)) !== t ? s : f[n];
                if (o = typeof r, "string" === o && (s = Kt.exec(r)) && (r = (s[1] + 1) * s[2] + parseFloat(w.css(e, n)), o = "number"), !(null == r || "number" === o && isNaN(r) || ("number" !== o || w.cssNumber[a] || (r += "px"), w.support.clearCloneStyle || "" !== r || 0 !== n.indexOf("background") || (f[n] = "inherit"), u && "set" in u && (r = u.set(e, r, i)) === t))) try {
                    f[n] = r
                } catch (l) {}
            }
        },
        css: function(e, n, r, i) {
            var s, o, u, a = w.camelCase(n);
            return n = w.cssProps[a] || (w.cssProps[a] = tn(e.style, a)), u = w.cssHooks[n] || w.cssHooks[a], u && "get" in u && (o = u.get(e, !0, r)), o === t && (o = Rt(e, n, i)), "normal" === o && n in Yt && (o = Yt[n]), "" === r || r ? (s = parseFloat(o), r === !0 || w.isNumeric(s) ? s || 0 : o) : o
        }
    }), e.getComputedStyle ? (qt = function(t) {
        return e.getComputedStyle(t, null)
    }, Rt = function(e, n, r) {
        var i, s, o, u = r || qt(e),
            a = u ? u.getPropertyValue(n) || u[n] : t,
            f = e.style;
        return u && ("" !== a || w.contains(e.ownerDocument, e) || (a = w.style(e, n)), Jt.test(a) && Vt.test(n) && (i = f.width, s = f.minWidth, o = f.maxWidth, f.minWidth = f.maxWidth = f.width = a, a = u.width, f.width = i, f.minWidth = s, f.maxWidth = o)), a
    }) : o.documentElement.currentStyle && (qt = function(e) {
        return e.currentStyle
    }, Rt = function(e, n, r) {
        var i, s, o, u = r || qt(e),
            a = u ? u[n] : t,
            f = e.style;
        return null == a && f && f[n] && (a = f[n]), Jt.test(a) && !Wt.test(n) && (i = f.left, s = e.runtimeStyle, o = s && s.left, o && (s.left = e.currentStyle.left), f.left = "fontSize" === n ? "1em" : a, a = f.pixelLeft + "px", f.left = i, o && (s.left = o)), "" === a ? "auto" : a
    }), w.each(["height", "width"], function(e, n) {
        w.cssHooks[n] = {
            get: function(e, r, i) {
                return r ? 0 === e.offsetWidth && Xt.test(w.css(e, "display")) ? w.swap(e, Gt, function() {
                    return un(e, n, i)
                }) : un(e, n, i) : t
            },
            set: function(e, t, r) {
                var i = r && qt(e);
                return sn(e, t, r ? on(e, n, r, w.support.boxSizing && "border-box" === w.css(e, "boxSizing", !1, i), i) : 0)
            }
        }
    }), w.support.opacity || (w.cssHooks.opacity = {
        get: function(e, t) {
            return zt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function(e, t) {
            var n = e.style,
                r = e.currentStyle,
                i = w.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                s = r && r.filter || n.filter || "";
            n.zoom = 1, (t >= 1 || "" === t) && "" === w.trim(s.replace(Ut, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = Ut.test(s) ? s.replace(Ut, i) : s + " " + i)
        }
    }), w(function() {
        w.support.reliableMarginRight || (w.cssHooks.marginRight = {
            get: function(e, n) {
                return n ? w.swap(e, {
                    display: "inline-block"
                }, Rt, [e, "marginRight"]) : t
            }
        }), !w.support.pixelPosition && w.fn.position && w.each(["top", "left"], function(e, n) {
            w.cssHooks[n] = {
                get: function(e, r) {
                    return r ? (r = Rt(e, n), Jt.test(r) ? w(e).position()[n] + "px" : r) : t
                }
            }
        })
    }), w.expr && w.expr.filters && (w.expr.filters.hidden = function(e) {
        return 0 >= e.offsetWidth && 0 >= e.offsetHeight || !w.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || w.css(e, "display"))
    }, w.expr.filters.visible = function(e) {
        return !w.expr.filters.hidden(e)
    }), w.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        w.cssHooks[e + t] = {
            expand: function(n) {
                var r = 0,
                    i = {},
                    s = "string" == typeof n ? n.split(" ") : [n];
                for (; 4 > r; r++) i[e + Zt[r] + t] = s[r] || s[r - 2] || s[0];
                return i
            }
        }, Vt.test(e) || (w.cssHooks[e + t].set = sn)
    });
    var ln = /%20/g,
        cn = /\[\]$/,
        hn = /\r?\n/g,
        pn = /^(?:submit|button|image|reset|file)$/i,
        dn = /^(?:input|select|textarea|keygen)/i;
    w.fn.extend({
        serialize: function() {
            return w.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = w.prop(this, "elements");
                return e ? w.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !w(this).is(":disabled") && dn.test(this.nodeName) && !pn.test(e) && (this.checked || !xt.test(e))
            }).map(function(e, t) {
                var n = w(this).val();
                return null == n ? null : w.isArray(n) ? w.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(hn, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(hn, "\r\n")
                }
            }).get()
        }
    }), w.param = function(e, n) {
        var r, i = [],
            s = function(e, t) {
                t = w.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (n === t && (n = w.ajaxSettings && w.ajaxSettings.traditional), w.isArray(e) || e.jquery && !w.isPlainObject(e)) w.each(e, function() {
            s(this.name, this.value)
        });
        else
            for (r in e) vn(r, e[r], n, s);
        return i.join("&").replace(ln, "+")
    }, w.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        w.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), w.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var mn, gn, yn = w.now(),
        bn = /\?/,
        wn = /#.*$/,
        En = /([?&])_=[^&]*/,
        Sn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        xn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Tn = /^(?:GET|HEAD)$/,
        Nn = /^\/\//,
        Cn = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        kn = w.fn.load,
        Ln = {},
        An = {},
        On = "*/".concat("*");
    try {
        gn = s.href
    } catch (Mn) {
        gn = o.createElement("a"), gn.href = "", gn = gn.href
    }
    mn = Cn.exec(gn.toLowerCase()) || [], w.fn.load = function(e, n, r) {
        if ("string" != typeof e && kn) return kn.apply(this, arguments);
        var i, s, o, u = this,
            a = e.indexOf(" ");
        return a >= 0 && (i = e.slice(a, e.length), e = e.slice(0, a)), w.isFunction(n) ? (r = n, n = t) : n && "object" == typeof n && (o = "POST"), u.length > 0 && w.ajax({
            url: e,
            type: o,
            dataType: "html",
            data: n
        }).done(function(e) {
            s = arguments, u.html(i ? w("<div>").append(w.parseHTML(e)).find(i) : e)
        }).complete(r && function(e, t) {
            u.each(r, s || [e.responseText, t, e])
        }), this
    }, w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        w.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), w.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: gn,
            type: "GET",
            isLocal: xn.test(mn[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": On,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": w.parseJSON,
                "text xml": w.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Pn(Pn(e, w.ajaxSettings), t) : Pn(w.ajaxSettings, e)
        },
        ajaxPrefilter: _n(Ln),
        ajaxTransport: _n(An),
        ajax: function(e, n) {
            function N(e, n, r, i) {
                var l, g, y, E, S, T = n;
                2 !== b && (b = 2, u && clearTimeout(u), f = t, o = i || "", x.readyState = e > 0 ? 4 : 0, l = e >= 200 && 300 > e || 304 === e, r && (E = Hn(c, x, r)), E = Bn(c, E, x, l), l ? (c.ifModified && (S = x.getResponseHeader("Last-Modified"), S && (w.lastModified[s] = S), S = x.getResponseHeader("etag"), S && (w.etag[s] = S)), 204 === e || "HEAD" === c.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = E.state, g = E.data, y = E.error, l = !y)) : (y = T, (e || !T) && (T = "error", 0 > e && (e = 0))), x.status = e, x.statusText = (n || T) + "", l ? d.resolveWith(h, [g, T, x]) : d.rejectWith(h, [x, T, y]), x.statusCode(m), m = t, a && p.trigger(l ? "ajaxSuccess" : "ajaxError", [x, c, l ? g : y]), v.fireWith(h, [x, T]), a && (p.trigger("ajaxComplete", [x, c]), --w.active || w.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (n = e, e = t), n = n || {};
            var r, i, s, o, u, a, f, l, c = w.ajaxSetup({}, n),
                h = c.context || c,
                p = c.context && (h.nodeType || h.jquery) ? w(h) : w.event,
                d = w.Deferred(),
                v = w.Callbacks("once memory"),
                m = c.statusCode || {},
                g = {},
                y = {},
                b = 0,
                E = "canceled",
                x = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === b) {
                            if (!l) {
                                l = {};
                                while (t = Sn.exec(o)) l[t[1].toLowerCase()] = t[2]
                            }
                            t = l[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === b ? o : null
                    },
                    setRequestHeader: function(e, t) {
                        var n = e.toLowerCase();
                        return b || (e = y[n] = y[n] || e, g[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return b || (c.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (2 > b)
                                for (t in e) m[t] = [m[t], e[t]];
                            else x.always(e[x.status]);
                        return this
                    },
                    abort: function(e) {
                        var t = e || E;
                        return f && f.abort(t), N(0, t), this
                    }
                };
            if (d.promise(x).complete = v.add, x.success = x.done, x.error = x.fail, c.url = ((e || c.url || gn) + "").replace(wn, "").replace(Nn, mn[1] + "//"), c.type = n.method || n.type || c.method || c.type, c.dataTypes = w.trim(c.dataType || "*").toLowerCase().match(S) || [""], null == c.crossDomain && (r = Cn.exec(c.url.toLowerCase()), c.crossDomain = !(!r || r[1] === mn[1] && r[2] === mn[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (mn[3] || ("http:" === mn[1] ? "80" : "443")))), c.data && c.processData && "string" != typeof c.data && (c.data = w.param(c.data, c.traditional)), Dn(Ln, c, n, x), 2 === b) return x;
            a = c.global, a && 0 === w.active++ && w.event.trigger("ajaxStart"), c.type = c.type.toUpperCase(), c.hasContent = !Tn.test(c.type), s = c.url, c.hasContent || (c.data && (s = c.url += (bn.test(s) ? "&" : "?") + c.data, delete c.data), c.cache === !1 && (c.url = En.test(s) ? s.replace(En, "$1_=" + yn++) : s + (bn.test(s) ? "&" : "?") + "_=" + yn++)), c.ifModified && (w.lastModified[s] && x.setRequestHeader("If-Modified-Since", w.lastModified[s]), w.etag[s] && x.setRequestHeader("If-None-Match", w.etag[s])), (c.data && c.hasContent && c.contentType !== !1 || n.contentType) && x.setRequestHeader("Content-Type", c.contentType), x.setRequestHeader("Accept", c.dataTypes[0] && c.accepts[c.dataTypes[0]] ? c.accepts[c.dataTypes[0]] + ("*" !== c.dataTypes[0] ? ", " + On + "; q=0.01" : "") : c.accepts["*"]);
            for (i in c.headers) x.setRequestHeader(i, c.headers[i]);
            if (!c.beforeSend || c.beforeSend.call(h, x, c) !== !1 && 2 !== b) {
                E = "abort";
                for (i in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) x[i](c[i]);
                if (f = Dn(An, c, n, x)) {
                    x.readyState = 1, a && p.trigger("ajaxSend", [x, c]), c.async && c.timeout > 0 && (u = setTimeout(function() {
                        x.abort("timeout")
                    }, c.timeout));
                    try {
                        b = 1, f.send(g, N)
                    } catch (T) {
                        if (!(2 > b)) throw T;
                        N(-1, T)
                    }
                } else N(-1, "No Transport");
                return x
            }
            return x.abort()
        },
        getJSON: function(e, t, n) {
            return w.get(e, t, n, "json")
        },
        getScript: function(e, n) {
            return w.get(e, t, n, "script")
        }
    }), w.each(["get", "post"], function(e, n) {
        w[n] = function(e, r, i, s) {
            return w.isFunction(r) && (s = s || i, i = r, r = t), w.ajax({
                url: e,
                type: n,
                dataType: s,
                data: r,
                success: i
            })
        }
    }), w.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return w.globalEval(e), e
            }
        }
    }), w.ajaxPrefilter("script", function(e) {
        e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), w.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var n, r = o.head || w("head")[0] || o.documentElement;
            return {
                send: function(t, i) {
                    n = o.createElement("script"), n.async = !0, e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function(e, t) {
                        (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || i(200, "success"))
                    }, r.insertBefore(n, r.firstChild)
                },
                abort: function() {
                    n && n.onload(t, !0)
                }
            }
        }
    });
    var jn = [],
        Fn = /(=)\?(?=&|$)|\?\?/;
    w.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = jn.pop() || w.expando + "_" + yn++;
            return this[e] = !0, e
        }
    }), w.ajaxPrefilter("json jsonp", function(n, r, i) {
        var s, o, u, a = n.jsonp !== !1 && (Fn.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Fn.test(n.data) && "data");
        return a || "jsonp" === n.dataTypes[0] ? (s = n.jsonpCallback = w.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, a ? n[a] = n[a].replace(Fn, "$1" + s) : n.jsonp !== !1 && (n.url += (bn.test(n.url) ? "&" : "?") + n.jsonp + "=" + s), n.converters["script json"] = function() {
            return u || w.error(s + " was not called"), u[0]
        }, n.dataTypes[0] = "json", o = e[s], e[s] = function() {
            u = arguments
        }, i.always(function() {
            e[s] = o, n[s] && (n.jsonpCallback = r.jsonpCallback, jn.push(s)), u && w.isFunction(o) && o(u[0]), u = o = t
        }), "script") : t
    });
    var In, qn, Rn = 0,
        Un = e.ActiveXObject && function() {
            var e;
            for (e in In) In[e](t, !0)
        };
    w.ajaxSettings.xhr = e.ActiveXObject ? function() {
        return !this.isLocal && zn() || Wn()
    } : zn, qn = w.ajaxSettings.xhr(), w.support.cors = !!qn && "withCredentials" in qn, qn = w.support.ajax = !!qn, qn && w.ajaxTransport(function(n) {
        if (!n.crossDomain || w.support.cors) {
            var r;
            return {
                send: function(i, s) {
                    var o, u, a = n.xhr();
                    if (n.username ? a.open(n.type, n.url, n.async, n.username, n.password) : a.open(n.type, n.url, n.async), n.xhrFields)
                        for (u in n.xhrFields) a[u] = n.xhrFields[u];
                    n.mimeType && a.overrideMimeType && a.overrideMimeType(n.mimeType), n.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (u in i) a.setRequestHeader(u, i[u])
                    } catch (f) {}
                    a.send(n.hasContent && n.data || null), r = function(e, i) {
                        var u, f, l, c;
                        try {
                            if (r && (i || 4 === a.readyState))
                                if (r = t, o && (a.onreadystatechange = w.noop, Un && delete In[o]), i) 4 !== a.readyState && a.abort();
                                else {
                                    c = {}, u = a.status, f = a.getAllResponseHeaders(), "string" == typeof a.responseText && (c.text = a.responseText);
                                    try {
                                        l = a.statusText
                                    } catch (h) {
                                        l = ""
                                    }
                                    u || !n.isLocal || n.crossDomain ? 1223 === u && (u = 204) : u = c.text ? 200 : 404
                                }
                        } catch (p) {
                            i || s(-1, p)
                        }
                        c && s(u, l, c, f)
                    }, n.async ? 4 === a.readyState ? setTimeout(r) : (o = ++Rn, Un && (In || (In = {}, w(e).unload(Un)), In[o] = r), a.onreadystatechange = r) : r()
                },
                abort: function() {
                    r && r(t, !0)
                }
            }
        }
    });
    var Xn, Vn, $n = /^(?:toggle|show|hide)$/,
        Jn = RegExp("^(?:([+-])=|)(" + E + ")([a-z%]*)$", "i"),
        Kn = /queueHooks$/,
        Qn = [nr],
        Gn = {
            "*": [
                function(e, t) {
                    var n = this.createTween(e, t),
                        r = n.cur(),
                        i = Jn.exec(t),
                        s = i && i[3] || (w.cssNumber[e] ? "" : "px"),
                        o = (w.cssNumber[e] || "px" !== s && +r) && Jn.exec(w.css(n.elem, e)),
                        u = 1,
                        a = 20;
                    if (o && o[3] !== s) {
                        s = s || o[3], i = i || [], o = +r || 1;
                        do u = u || ".5", o /= u, w.style(n.elem, e, o + s); while (u !== (u = n.cur() / r) && 1 !== u && --a)
                    }
                    return i && (o = n.start = +o || +r || 0, n.unit = s, n.end = i[1] ? o + (i[1] + 1) * i[2] : +i[2]), n
                }
            ]
        };
    w.Animation = w.extend(er, {
        tweener: function(e, t) {
            w.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
            var n, r = 0,
                i = e.length;
            for (; i > r; r++) n = e[r], Gn[n] = Gn[n] || [], Gn[n].unshift(t)
        },
        prefilter: function(e, t) {
            t ? Qn.unshift(e) : Qn.push(e)
        }
    }), w.Tween = rr, rr.prototype = {
        constructor: rr,
        init: function(e, t, n, r, i, s) {
            this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = s || (w.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = rr.propHooks[this.prop];
            return e && e.get ? e.get(this) : rr.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = rr.propHooks[this.prop];
            return this.pos = t = this.options.duration ? w.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : rr.propHooks._default.set(this), this
        }
    }, rr.prototype.init.prototype = rr.prototype, rr.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = w.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
            },
            set: function(e) {
                w.fx.step[e.prop] ? w.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[w.cssProps[e.prop]] || w.cssHooks[e.prop]) ? w.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, rr.propHooks.scrollTop = rr.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, w.each(["toggle", "show", "hide"], function(e, t) {
        var n = w.fn[t];
        w.fn[t] = function(e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ir(t, !0), e, r, i)
        }
    }), w.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(nn).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(e, t, n, r) {
            var i = w.isEmptyObject(e),
                s = w.speed(t, n, r),
                o = function() {
                    var t = er(this, w.extend({}, e), s);
                    (i || w._data(this, "finish")) && t.stop(!0)
                };
            return o.finish = o, i || s.queue === !1 ? this.each(o) : this.queue(s.queue, o)
        },
        stop: function(e, n, r) {
            var i = function(e) {
                var t = e.stop;
                delete e.stop, t(r)
            };
            return "string" != typeof e && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                var t = !0,
                    n = null != e && e + "queueHooks",
                    s = w.timers,
                    o = w._data(this);
                if (n) o[n] && o[n].stop && i(o[n]);
                else
                    for (n in o) o[n] && o[n].stop && Kn.test(n) && i(o[n]);
                for (n = s.length; n--;) s[n].elem !== this || null != e && s[n].queue !== e || (s[n].anim.stop(r), t = !1, s.splice(n, 1));
                (t || !r) && w.dequeue(this, e)
            })
        },
        finish: function(e) {
            return e !== !1 && (e = e || "fx"), this.each(function() {
                var t, n = w._data(this),
                    r = n[e + "queue"],
                    i = n[e + "queueHooks"],
                    s = w.timers,
                    o = r ? r.length : 0;
                for (n.finish = !0, w.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = s.length; t--;) s[t].elem === this && s[t].queue === e && (s[t].anim.stop(!0), s.splice(t, 1));
                for (t = 0; o > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            })
        }
    }), w.each({
        slideDown: ir("show"),
        slideUp: ir("hide"),
        slideToggle: ir("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        w.fn[e] = function(e, n, r) {
            return this.animate(t, e, n, r)
        }
    }), w.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? w.extend({}, e) : {
            complete: n || !n && t || w.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !w.isFunction(t) && t
        };
        return r.duration = w.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in w.fx.speeds ? w.fx.speeds[r.duration] : w.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function() {
            w.isFunction(r.old) && r.old.call(this), r.queue && w.dequeue(this, r.queue)
        }, r
    }, w.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, w.timers = [], w.fx = rr.prototype.init, w.fx.tick = function() {
        var e, n = w.timers,
            r = 0;
        for (Xn = w.now(); n.length > r; r++) e = n[r], e() || n[r] !== e || n.splice(r--, 1);
        n.length || w.fx.stop(), Xn = t
    }, w.fx.timer = function(e) {
        e() && w.timers.push(e) && w.fx.start()
    }, w.fx.interval = 13, w.fx.start = function() {
        Vn || (Vn = setInterval(w.fx.tick, w.fx.interval))
    }, w.fx.stop = function() {
        clearInterval(Vn), Vn = null
    }, w.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, w.fx.step = {}, w.expr && w.expr.filters && (w.expr.filters.animated = function(e) {
        return w.grep(w.timers, function(t) {
            return e === t.elem
        }).length
    }), w.fn.offset = function(e) {
        if (arguments.length) return e === t ? this : this.each(function(t) {
            w.offset.setOffset(this, e, t)
        });
        var n, r, s = {
                top: 0,
                left: 0
            },
            o = this[0],
            u = o && o.ownerDocument;
        if (u) return n = u.documentElement, w.contains(n, o) ? (typeof o.getBoundingClientRect !== i && (s = o.getBoundingClientRect()), r = sr(u), {
            top: s.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0),
            left: s.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
        }) : s
    }, w.offset = {
        setOffset: function(e, t, n) {
            var r = w.css(e, "position");
            "static" === r && (e.style.position = "relative");
            var i = w(e),
                s = i.offset(),
                o = w.css(e, "top"),
                u = w.css(e, "left"),
                a = ("absolute" === r || "fixed" === r) && w.inArray("auto", [o, u]) > -1,
                f = {},
                l = {},
                c, h;
            a ? (l = i.position(), c = l.top, h = l.left) : (c = parseFloat(o) || 0, h = parseFloat(u) || 0), w.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (f.top = t.top - s.top + c), null != t.left && (f.left = t.left - s.left + h), "using" in t ? t.using.call(e, f) : i.css(f)
        }
    }, w.fn.extend({
        position: function() {
            if (this[0]) {
                var e, t, n = {
                        top: 0,
                        left: 0
                    },
                    r = this[0];
                return "fixed" === w.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), w.nodeName(e[0], "html") || (n = e.offset()), n.top += w.css(e[0], "borderTopWidth", !0), n.left += w.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - n.top - w.css(r, "marginTop", !0),
                    left: t.left - n.left - w.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var e = this.offsetParent || u;
                while (e && !w.nodeName(e, "html") && "static" === w.css(e, "position")) e = e.offsetParent;
                return e || u
            })
        }
    }), w.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, n) {
        var r = /Y/.test(n);
        w.fn[e] = function(i) {
            return w.access(this, function(e, i, s) {
                var o = sr(e);
                return s === t ? o ? n in o ? o[n] : o.document.documentElement[i] : e[i] : (o ? o.scrollTo(r ? w(o).scrollLeft() : s, r ? s : w(o).scrollTop()) : e[i] = s, t)
            }, e, i, arguments.length, null)
        }
    }), w.each({
        Height: "height",
        Width: "width"
    }, function(e, n) {
        w.each({
            padding: "inner" + e,
            content: n,
            "": "outer" + e
        }, function(r, i) {
            w.fn[i] = function(i, s) {
                var o = arguments.length && (r || "boolean" != typeof i),
                    u = r || (i === !0 || s === !0 ? "margin" : "border");
                return w.access(this, function(n, r, i) {
                    var s;
                    return w.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (s = n.documentElement, Math.max(n.body["scroll" + e], s["scroll" + e], n.body["offset" + e], s["offset" + e], s["client" + e])) : i === t ? w.css(n, r, u) : w.style(n, r, i, u)
                }, n, o ? i : t, o, null)
            }
        })
    }), w.fn.size = function() {
        return this.length
    }, w.fn.andSelf = w.fn.addBack, "object" == typeof module && module && "object" == typeof module.exports ? module.exports = w : (e.jQuery = e.$ = w, "function" == typeof define && define.amd && define("jquery", [], function() {
        return w
    }))
})(window), this.createjs = this.createjs || {},
    function() {
        "use strict";
        var e = function(e, t, n) {
                this.initialize(e, t, n)
            },
            t = e.prototype;
        t.type = null, t.target = null, t.currentTarget = null, t.eventPhase = 0, t.bubbles = !1, t.cancelable = !1, t.timeStamp = 0, t.defaultPrevented = !1, t.propagationStopped = !1, t.immediatePropagationStopped = !1, t.removed = !1, t.initialize = function(e, t, n) {
            this.type = e, this.bubbles = t, this.cancelable = n, this.timeStamp = (new Date).getTime()
        }, t.preventDefault = function() {
            this.defaultPrevented = !0
        }, t.stopPropagation = function() {
            this.propagationStopped = !0
        }, t.stopImmediatePropagation = function() {
            this.immediatePropagationStopped = this.propagationStopped = !0
        }, t.remove = function() {
            this.removed = !0
        }, t.clone = function() {
            return new e(this.type, this.bubbles, this.cancelable)
        }, t.toString = function() {
            return "[Event (type=" + this.type + ")]"
        }, createjs.Event = e
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";
        var e = function() {},
            t = e.prototype;
        e.initialize = function(e) {
            e.addEventListener = t.addEventListener, e.on = t.on, e.removeEventListener = e.off = t.removeEventListener, e.removeAllEventListeners = t.removeAllEventListeners, e.hasEventListener = t.hasEventListener, e.dispatchEvent = t.dispatchEvent, e._dispatchEvent = t._dispatchEvent
        }, t._listeners = null, t._captureListeners = null, t.initialize = function() {}, t.addEventListener = function(e, t, n) {
            var r;
            r = n ? this._captureListeners = this._captureListeners || {} : this._listeners = this._listeners || {};
            var i = r[e];
            return i && this.removeEventListener(e, t, n), i = r[e], i ? i.push(t) : r[e] = [t], t
        }, t.on = function(e, t, n, r, i, s) {
            return t.handleEvent && (n = n || t, t = t.handleEvent), n = n || this, this.addEventListener(e, function(e) {
                t.call(n, e, i), r && e.remove()
            }, s)
        }, t.removeEventListener = function(e, t, n) {
            var r = n ? this._captureListeners : this._listeners;
            if (r) {
                var i = r[e];
                if (i)
                    for (var s = 0, o = i.length; o > s; s++)
                        if (i[s] == t) {
                            1 == o ? delete r[e] : i.splice(s, 1);
                            break
                        }
            }
        }, t.off = t.removeEventListener, t.removeAllEventListeners = function(e) {
            e ? (this._listeners && delete this._listeners[e], this._captureListeners && delete this._captureListeners[e]) : this._listeners = this._captureListeners = null
        }, t.dispatchEvent = function(e, t) {
            if ("string" == typeof e) {
                var n = this._listeners;
                if (!n || !n[e]) return !1;
                e = new createjs.Event(e)
            }
            if (e.target = t || this, e.bubbles && this.parent) {
                for (var r = this, i = [r]; r.parent;) i.push(r = r.parent);
                var s, o = i.length;
                for (s = o - 1; s >= 0 && !e.propagationStopped; s--) i[s]._dispatchEvent(e, 1 + (0 == s));
                for (s = 1; o > s && !e.propagationStopped; s++) i[s]._dispatchEvent(e, 3)
            } else this._dispatchEvent(e, 2);
            return e.defaultPrevented
        }, t.hasEventListener = function(e) {
            var t = this._listeners,
                n = this._captureListeners;
            return !!(t && t[e] || n && n[e])
        }, t.toString = function() {
            return "[EventDispatcher]"
        }, t._dispatchEvent = function(e, t) {
            var n, r = 1 == t ? this._captureListeners : this._listeners;
            if (e && r) {
                var i = r[e.type];
                if (!i || !(n = i.length)) return;
                e.currentTarget = this, e.eventPhase = t, e.removed = !1, i = i.slice();
                for (var s = 0; n > s && !e.immediatePropagationStopped; s++) {
                    var o = i[s];
                    o.handleEvent ? o.handleEvent(e) : o(e), e.removed && (this.off(e.type, o, 1 == t), e.removed = !1)
                }
            }
        }, createjs.EventDispatcher = e
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";
        createjs.indexOf = function(e, t) {
            for (var n = 0, r = e.length; r > n; n++)
                if (t === e[n]) return n;
            return -1
        }
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";
        var e = function() {
            throw "UID cannot be instantiated"
        };
        e._nextID = 0, e.get = function() {
            return e._nextID++
        }, createjs.UID = e
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";
        var e = function() {
            throw "Ticker cannot be instantiated."
        };
        e.RAF_SYNCHED = "synched", e.RAF = "raf", e.TIMEOUT = "timeout", e.useRAF = !1, e.timingMode = null, e.maxDelta = 0, e.removeEventListener = null, e.removeAllEventListeners = null, e.dispatchEvent = null, e.hasEventListener = null, e._listeners = null, createjs.EventDispatcher.initialize(e), e._addEventListener = e.addEventListener, e.addEventListener = function() {
                !e._inited && e.init(), e._addEventListener.apply(e, arguments)
            }, e._paused = !1, e._inited = !1, e._startTime = 0, e._pausedTime = 0, e._ticks = 0, e._pausedTicks = 0, e._interval = 50, e._lastTime = 0, e._times = null, e._tickTimes = null, e._timerId = null, e._raf = !0, e.init = function() {
                e._inited || (e._inited = !0, e._times = [], e._tickTimes = [], e._startTime = e._getTime(), e._times.push(e._lastTime = 0), e.setInterval(e._interval))
            }, e.reset = function() {
                if (e._raf) {
                    var t = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame;
                    t && t(e._timerId)
                } else clearTimeout(e._timerId);
                e.removeAllEventListeners("tick")
            }, e.setInterval = function(t) {
                e._interval = t, e._inited && e._setupTick()
            }, e.getInterval = function() {
                return e._interval
            }, e.setFPS = function(t) {
                e.setInterval(1e3 / t)
            }, e.getFPS = function() {
                return 1e3 / e._interval
            }, e.getMeasuredTickTime = function(t) {
                var n = 0,
                    r = e._tickTimes;
                if (r.length < 1) return -1;
                t = Math.min(r.length, t || 0 | e.getFPS());
                for (var i = 0; t > i; i++) n += r[i];
                return r / t
            }, e.getMeasuredFPS = function(t) {
                var n = e._times;
                return n.length < 2 ? -1 : (t = Math.min(n.length - 1, t || 0 | e.getFPS()), 1e3 / ((n[0] - n[t]) / t))
            }, e.setPaused = function(t) {
                e._paused = t
            }, e.getPaused = function() {
                return e._paused
            }, e.getTime = function(t) {
                return e._getTime() - e._startTime - (t ? e._pausedTime : 0)
            }, e.getEventTime = function(t) {
                return (e._lastTime || e._startTime) - (t ? e._pausedTime : 0)
            }, e.getTicks = function(t) {
                return e._ticks - (t ? e._pausedTicks : 0)
            }, e._handleSynch = function() {
                var t = e._getTime() - e._startTime;
                e._timerId = null, e._setupTick(), t - e._lastTime >= .97 * (e._interval - 1) && e._tick()
            }, e._handleRAF =
            function() {
                e._timerId = null, e._setupTick(), e._tick()
            }, e._handleTimeout = function() {
                e._timerId = null, e._setupTick(), e._tick()
            }, e._setupTick = function() {
                if (null == e._timerId) {
                    var t = e.timingMode || e.useRAF && e.RAF_SYNCHED;
                    if (t == e.RAF_SYNCHED || t == e.RAF) {
                        var n = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame;
                        if (n) return e._timerId = n(t == e.RAF ? e._handleRAF : e._handleSynch), e._raf = !0, void 0
                    }
                    e._raf = !1, e._timerId = setTimeout(e._handleTimeout, e._interval)
                }
            }, e._tick = function() {
                var t = e._getTime() - e._startTime,
                    n = t - e._lastTime,
                    r = e._paused;
                if (e._ticks++, r && (e._pausedTicks++, e._pausedTime += n), e._lastTime = t, e.hasEventListener("tick")) {
                    var i = new createjs.Event("tick"),
                        s = e.maxDelta;
                    i.delta = s && n > s ? s : n, i.paused = r, i.time = t, i.runTime = t - e._pausedTime, e.dispatchEvent(i)
                }
                for (e._tickTimes.unshift(e._getTime() - t); e._tickTimes.length > 100;) e._tickTimes.pop();
                for (e._times.unshift(t); e._times.length > 100;) e._times.pop()
            };
        var t = window.performance && (performance.now || performance.mozNow || performance.msNow || performance.oNow || performance.webkitNow);
        e._getTime = function() {
            return t && t.call(performance) || (new Date).getTime()
        }, createjs.Ticker = e
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";
        var e = function(e, t, n, r, i, s, o, u, a, f) {
                this.initialize(e, t, n, r, i, s, o, u, a, f)
            },
            t = e.prototype = new createjs.Event;
        t.stageX = 0, t.stageY = 0, t.rawX = 0, t.rawY = 0, t.nativeEvent = null, t.pointerID = 0, t.primary = !1, t.addEventListener = null, t.removeEventListener = null, t.removeAllEventListeners = null, t.dispatchEvent = null, t.hasEventListener = null, t._listeners = null, createjs.EventDispatcher.initialize(t), t.Event_initialize = t.initialize, t.initialize = function(e, t, n, r, i, s, o, u, a, f) {
            this.Event_initialize(e, t, n), this.stageX = r, this.stageY = i, this.nativeEvent = s, this.pointerID = o, this.primary = u, this.rawX = null == a ? r : a, this.rawY = null == f ? i : f
        }, t.clone = function() {
            return new e(this.type, this.bubbles, this.cancelable, this.stageX, this.stageY, this.target, this.nativeEvent, this.pointerID, this.primary, this.rawX, this.rawY)
        }, t.toString = function() {
            return "[MouseEvent (type=" + this.type + " stageX=" + this.stageX + " stageY=" + this.stageY + ")]"
        }, createjs.MouseEvent = e
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";
        var e = function(e, t, n, r, i, s) {
                this.initialize(e, t, n, r, i, s)
            },
            t = e.prototype;
        e.identity = null, e.DEG_TO_RAD = Math.PI / 180, t.a = 1, t.b = 0, t.c = 0, t.d = 1, t.tx = 0, t.ty = 0, t.alpha = 1, t.shadow = null, t.compositeOperation = null, t.initialize = function(e, t, n, r, i, s) {
            return this.a = null == e ? 1 : e, this.b = t || 0, this.c = n || 0, this.d = null == r ? 1 : r, this.tx = i || 0, this.ty = s || 0, this
        }, t.prepend = function(e, t, n, r, i, s) {
            var o = this.tx;
            if (1 != e || 0 != t || 0 != n || 1 != r) {
                var u = this.a,
                    a = this.c;
                this.a = u * e + this.b * n, this.b = u * t + this.b * r, this.c = a * e + this.d * n, this.d = a * t + this.d * r
            }
            return this.tx = o * e + this.ty * n + i, this.ty = o * t + this.ty * r + s, this
        }, t.append = function(e, t, n, r, i, s) {
            var o = this.a,
                u = this.b,
                a = this.c,
                f = this.d;
            return this.a = e * o + t * a, this.b = e * u + t * f, this.c = n * o + r * a, this.d = n * u + r * f, this.tx = i * o + s * a + this.tx, this.ty = i * u + s * f + this.ty, this
        }, t.prependMatrix = function(e) {
            return this.prepend(e.a, e.b, e.c, e.d, e.tx, e.ty), this.prependProperties(e.alpha, e.shadow, e.compositeOperation), this
        }, t.appendMatrix = function(e) {
            return this.append(e.a, e.b, e.c, e.d, e.tx, e.ty), this.appendProperties(e.alpha, e.shadow, e.compositeOperation), this
        }, t.prependTransform = function(t, n, r, i, s, o, u, f, l) {
            if (s % 360) var c = s * e.DEG_TO_RAD,
                h = Math.cos(c),
                p = Math.sin(c);
            else h = 1, p = 0;
            return (f || l) && (this.tx -= f, this.ty -= l), o || u ? (o *= e.DEG_TO_RAD, u *= e.DEG_TO_RAD, this.prepend(h * r, p * r, -p * i, h * i, 0, 0), this.prepend(Math.cos(u), Math.sin(u), -Math.sin(o), Math.cos(o), t, n)) : this.prepend(h * r, p * r, -p * i, h * i, t, n), this
        }, t.appendTransform = function(t, n, r, i, s, o, u, f, l) {
            if (s % 360) var c = s * e.DEG_TO_RAD,
                h = Math.cos(c),
                p = Math.sin(c);
            else h = 1, p = 0;
            return o || u ? (o *= e.DEG_TO_RAD, u *= e.DEG_TO_RAD, this.append(Math.cos(u), Math.sin(u), -Math.sin(o), Math.cos(o), t, n), this.append(h * r, p * r, -p * i, h * i, 0, 0)) : this.append(h * r, p * r, -p * i, h * i, t, n), (f || l) && (this.tx -= f * this.a + l * this.c, this.ty -= f * this.b + l * this.d), this
        }, t.rotate = function(e) {
            var t = Math.cos(e),
                n = Math.sin(e),
                r = this.a,
                i = this.c,
                s = this.tx;
            return this.a = r * t - this.b * n, this.b = r * n + this.b * t, this.c = i * t - this.d * n, this.d = i * n + this.d * t, this.tx = s * t - this.ty * n, this.ty = s * n + this.ty * t, this
        }, t.skew = function(t, n) {
            return t *= e.DEG_TO_RAD, n *= e.DEG_TO_RAD, this.append(Math.cos(n), Math.sin(n), -Math.sin(t), Math.cos(t), 0, 0), this
        }, t.scale = function(e, t) {
            return this.a *= e, this.d *= t, this.c *= e, this.b *= t, this.tx *= e, this.ty *= t, this
        }, t.translate = function(e, t) {
            return this.tx += e, this.ty += t, this
        }, t.identity = function() {
            return this.alpha = this.a = this.d = 1, this.b = this.c = this.tx = this.ty = 0, this.shadow = this.compositeOperation = null, this
        }, t.invert = function() {
            var e = this.a,
                t = this.b,
                n = this.c,
                r = this.d,
                i = this.tx,
                s = e * r - t * n;
            return this.a = r / s, this.b = -t / s, this.c = -n / s, this.d = e / s, this.tx = (n * this.ty - r * i) / s, this.ty = -(e * this.ty - t * i) / s, this
        }, t.isIdentity = function() {
            return 0 == this.tx && 0 == this.ty && 1 == this.a && 0 == this.b && 0 == this.c && 1 == this.d
        }, t.transformPoint = function(e, t, n) {
            return n = n || {}, n.x = e * this.a + t * this.c + this.tx, n.y = e * this.b + t * this.d + this.ty, n
        }, t.decompose = function(t) {
            null == t && (t = {}), t.x = this.tx, t.y = this.ty, t.scaleX = Math.sqrt(this.a * this.a + this.b * this.b), t.scaleY = Math.sqrt(this.c * this.c + this.d * this.d);
            var n = Math.atan2(-this.c, this.d),
                r = Math.atan2(this.b, this.a);
            return n == r ? (t.rotation = r / e.DEG_TO_RAD, this.a < 0 && this.d >= 0 && (t.rotation += t.rotation <= 0 ? 180 : -180), t.skewX = t.skewY = 0) : (t.skewX = n / e.DEG_TO_RAD, t.skewY = r / e.DEG_TO_RAD), t
        }, t.reinitialize = function(e, t, n, r, i, s, o, u, a) {
            return this.initialize(e, t, n, r, i, s), this.alpha = null == o ? 1 : o, this.shadow = u, this.compositeOperation = a, this
        }, t.copy = function(e) {
            return this.reinitialize(e.a, e.b, e.c, e.d, e.tx, e.ty, e.alpha, e.shadow, e.compositeOperation)
        }, t.appendProperties = function(e, t, n) {
            return this.alpha *= e, this.shadow = t || this.shadow, this.compositeOperation = n || this.compositeOperation, this
        }, t.prependProperties = function(e, t, n) {
            return this.alpha *= e, this.shadow = this.shadow || t, this.compositeOperation = this.compositeOperation || n, this
        }, t.clone = function() {
            return (new e).copy(this)
        }, t.toString = function() {
            return "[Matrix2D (a=" + this.a + " b=" + this.b + " c=" + this.c + " d=" + this.d + " tx=" + this.tx + " ty=" + this.ty + ")]"
        }, e.identity = new e, createjs.Matrix2D = e
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";
        var e = function(e, t) {
                this.initialize(e, t)
            },
            t = e.prototype;
        t.x = 0, t.y = 0, t.initialize = function(e, t) {
            return this.x = null == e ? 0 : e, this.y = null == t ? 0 : t, this
        }, t.copy = function(e) {
            return this.initialize(e.x, e.y)
        }, t.clone = function() {
            return new e(this.x, this.y)
        }, t.toString = function() {
            return "[Point (x=" + this.x + " y=" + this.y + ")]"
        }, createjs.Point = e
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";
        var e = function(e, t, n, r) {
                this.initialize(e, t, n, r)
            },
            t = e.prototype;
        t.x = 0, t.y = 0, t.width = 0, t.height = 0, t.initialize = function(e, t, n, r) {
            return this.x = e || 0, this.y = t || 0, this.width = n || 0, this.height = r || 0, this
        }, t.copy = function(e) {
            return this.initialize(e.x, e.y, e.width, e.height)
        }, t.clone = function() {
            return new e(this.x, this.y, this.width, this.height)
        }, t.toString = function() {
            return "[Rectangle (x=" + this.x + " y=" + this.y + " width=" + this.width + " height=" + this.height + ")]"
        }, createjs.Rectangle = e
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";
        var e = function(e, t, n, r, i, s, o) {
                this.initialize(e, t, n, r, i, s, o)
            },
            t = e.prototype;
        t.target = null, t.overLabel = null, t.outLabel = null, t.downLabel = null, t.play = !1, t._isPressed = !1, t._isOver = !1, t.initialize = function(e, t, n, r, i, s, o) {
            e.addEventListener && (this.target = e, e.cursor = "pointer", this.overLabel = null == n ? "over" : n, this.outLabel = null == t ? "out" : t, this.downLabel = null == r ? "down" : r, this.play = i, this.setEnabled(!0), this.handleEvent({}), s && (o && (s.actionsEnabled = !1, s.gotoAndStop && s.gotoAndStop(o)), e.hitArea = s))
        }, t.setEnabled = function(e) {
            var t = this.target;
            e ? (t.addEventListener("rollover", this), t.addEventListener("rollout", this), t.addEventListener("mousedown", this), t.addEventListener("pressup", this)) : (t.removeEventListener("rollover", this), t.removeEventListener("rollout", this), t.removeEventListener("mousedown", this), t.removeEventListener("pressup", this))
        }, t.toString = function() {
            return "[ButtonHelper]"
        }, t.handleEvent = function(e) {
            var t, n = this.target,
                r = e.type;
            "mousedown" == r ? (this._isPressed = !0, t = this.downLabel) : "pressup" == r ? (this._isPressed = !1, t = this._isOver ? this.overLabel : this.outLabel) : "rollover" == r ? (this._isOver = !0, t = this._isPressed ? this.downLabel : this.overLabel) : (this._isOver = !1, t = this._isPressed ? this.overLabel : this.outLabel), this.play ? n.gotoAndPlay && n.gotoAndPlay(t) : n.gotoAndStop && n.gotoAndStop(t)
        }, createjs.ButtonHelper = e
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";
        var e = function(e, t, n, r) {
                this.initialize(e, t, n, r)
            },
            t = e.prototype;
        e.identity = null, t.color = null, t.offsetX = 0, t.offsetY = 0, t.blur = 0, t.initialize = function(e, t, n, r) {
            this.color = e, this.offsetX = t, this.offsetY = n, this.blur = r
        }, t.toString = function() {
            return "[Shadow]"
        }, t.clone = function() {
            return new e(this.color, this.offsetX, this.offsetY, this.blur)
        }, e.identity = new e("transparent", 0, 0, 0), createjs.Shadow = e
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";
        var e = function(e) {
                this.initialize(e)
            },
            t = e.prototype = new createjs.EventDispatcher;
        t.complete = !0, t.framerate = 0, t._animations = null, t._frames = null, t._images = null, t._data = null, t._loadCount = 0, t._frameHeight = 0, t._frameWidth = 0, t._numFrames = 0, t._regX = 0, t._regY = 0, t.initialize = function(e) {
            var t, n, r, i;
            if (null != e) {
                if (this.framerate = e.framerate || 0, e.images && (n = e.images.length) > 0)
                    for (i = this._images = [], t = 0; n > t; t++) {
                        var s = e.images[t];
                        if ("string" == typeof s) {
                            var o = s;
                            s = new Image, s.src = o
                        }
                        i.push(s), s.getContext || s.complete || (this._loadCount++, this.complete = !1, function(e) {
                            s.onload = function() {
                                e._handleImageLoad()
                            }
                        }(this))
                    }
                if (null != e.frames)
                    if (e.frames instanceof Array)
                        for (this._frames = [], i = e.frames, t = 0, n = i.length; n > t; t++) {
                            var u = i[t];
                            this._frames.push({
                                image: this._images[u[4] ? u[4] : 0],
                                rect: new createjs.Rectangle(u[0], u[1], u[2], u[3]),
                                regX: u[5] || 0,
                                regY: u[6] || 0
                            })
                        } else r = e.frames, this._frameWidth = r.width, this._frameHeight = r.height, this._regX = r.regX || 0, this._regY = r.regY || 0, this._numFrames = r.count, 0 == this._loadCount && this._calculateFrames();
                if (this._animations = [], null != (r = e.animations)) {
                    this._data = {};
                    var a;
                    for (a in r) {
                        var f = {
                                name: a
                            },
                            l = r[a];
                        if ("number" == typeof l) i = f.frames = [l];
                        else if (l instanceof Array)
                            if (1 == l.length) f.frames = [l[0]];
                            else
                                for (f.speed = l[3], f.next = l[2], i = f.frames = [], t = l[0]; t <= l[1]; t++) i.push(t);
                        else {
                            f.speed = l.speed, f.next = l.next;
                            var c = l.frames;
                            i = f.frames = "number" == typeof c ? [c] : c.slice(0)
                        }(f.next === !0 || void 0 === f.next) && (f.next = a), (f.next === !1 || i.length < 2 && f.next == a) && (f.next = null), f.speed || (f.speed = 1), this._animations.push(a), this._data[a] = f
                    }
                }
            }
        }, t.getNumFrames = function(e) {
            if (null == e) return this._frames ? this._frames.length : this._numFrames;
            var t = this._data[e];
            return null == t ? 0 : t.frames.length
        }, t.getAnimations = function() {
            return this._animations.slice(0)
        }, t.getAnimation = function(e) {
            return this._data[e]
        }, t.getFrame = function(e) {
            var t;
            return this._frames && (t = this._frames[e]) ? t : null
        }, t.getFrameBounds = function(e, t) {
            var n = this.getFrame(e);
            return n ? (t || new createjs.Rectangle).initialize(-n.regX, -n.regY, n.rect.width, n.rect.height) : null
        }, t.toString = function() {
            return "[SpriteSheet]"
        }, t.clone = function() {
            var t = new e;
            return t.complete = this.complete, t._animations = this._animations, t._frames = this._frames, t._images = this._images, t._data = this._data, t._frameHeight = this._frameHeight, t._frameWidth = this._frameWidth, t._numFrames = this._numFrames, t._loadCount = this._loadCount, t
        }, t._handleImageLoad = function() {
            0 == --this._loadCount && (this._calculateFrames(), this.complete = !0, this.dispatchEvent("complete"))
        }, t._calculateFrames = function() {
            if (!this._frames && 0 != this._frameWidth) {
                this._frames = [];
                for (var e = 0, t = this._frameWidth, n = this._frameHeight, r = 0, i = this._images; r < i.length; r++) {
                    for (var s = i[r], o = 0 | (s.width + 1) / t, u = 0 | (s.height + 1) / n, a = this._numFrames > 0 ? Math.min(this._numFrames - e, o * u) : o * u, f = 0; a > f; f++) this._frames.push({
                        image: s,
                        rect: new createjs.Rectangle(f % o * t, (0 | f / o) * n, t, n),
                        regX: this._regX,
                        regY: this._regY
                    });
                    e += a
                }
                this._numFrames = e
            }
        }, createjs.SpriteSheet = e
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function e(e, t, n) {
            this.f = e, this.params = t, this.path = null == n ? !0 : n
        }
        e.prototype.exec = function(e) {
            this.f.apply(e, this.params)
        };
        var t = function() {
                this.initialize()
            },
            n = t.prototype;
        t.getRGB = function(e, t, n, r) {
            return null != e && null == n && (r = t, n = 255 & e, t = 255 & e >> 8, e = 255 & e >> 16), null == r ? "rgb(" + e + "," + t + "," + n + ")" : "rgba(" + e + "," + t + "," + n + "," + r + ")"
        }, t.getHSL = function(e, t, n, r) {
            return null == r ? "hsl(" + e % 360 + "," + t + "%," + n + "%)" : "hsla(" + e % 360 + "," + t + "%," + n + "%," + r + ")"
        }, t.Command = e, t.BASE_64 = {
            A: 0,
            B: 1,
            C: 2,
            D: 3,
            E: 4,
            F: 5,
            G: 6,
            H: 7,
            I: 8,
            J: 9,
            K: 10,
            L: 11,
            M: 12,
            N: 13,
            O: 14,
            P: 15,
            Q: 16,
            R: 17,
            S: 18,
            T: 19,
            U: 20,
            V: 21,
            W: 22,
            X: 23,
            Y: 24,
            Z: 25,
            a: 26,
            b: 27,
            c: 28,
            d: 29,
            e: 30,
            f: 31,
            g: 32,
            h: 33,
            i: 34,
            j: 35,
            k: 36,
            l: 37,
            m: 38,
            n: 39,
            o: 40,
            p: 41,
            q: 42,
            r: 43,
            s: 44,
            t: 45,
            u: 46,
            v: 47,
            w: 48,
            x: 49,
            y: 50,
            z: 51,
            0: 52,
            1: 53,
            2: 54,
            3: 55,
            4: 56,
            5: 57,
            6: 58,
            7: 59,
            8: 60,
            9: 61,
            "+": 62,
            "/": 63
        }, t.STROKE_CAPS_MAP = ["butt", "round", "square"], t.STROKE_JOINTS_MAP = ["miter", "round", "bevel"];
        var r = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas");
        if (r.getContext) {
            var i = t._ctx = r.getContext("2d");
            t.beginCmd = new e(i.beginPath, [], !1), t.fillCmd = new e(i.fill, [], !1), t.strokeCmd = new e(i.stroke, [], !1), r.width = r.height = 1
        }
        n._strokeInstructions = null, n._strokeStyleInstructions = null, n._strokeIgnoreScale = !1, n._fillInstructions = null, n._fillMatrix = null, n._instructions = null, n._oldInstructions = null, n._activeInstructions = null, n._active = !1, n._dirty = !1, n.initialize = function() {
            this.clear(), this._ctx = t._ctx
        }, n.isEmpty = function() {
            return !(this._instructions.length || this._oldInstructions.length || this._activeInstructions.length)
        }, n.draw = function(e) {
            this._dirty && this._updateInstructions();
            for (var t = this._instructions, n = 0, r = t.length; r > n; n++) t[n].exec(e)
        }, n.drawAsPath = function(e) {
            this._dirty && this._updateInstructions();
            for (var t, n = this._instructions, r = 0, i = n.length; i > r; r++)((t = n[r]).path || 0 == r) && t.exec(e)
        }, n.moveTo = function(t, n) {
            return this._activeInstructions.push(new e(this._ctx.moveTo, [t, n])), this
        }, n.lineTo = function(t, n) {
            return this._dirty = this._active = !0, this._activeInstructions.push(new e(this._ctx.lineTo, [t, n])), this
        }, n.arcTo = function(t, n, r, i, s) {
            return this._dirty = this._active = !0, this._activeInstructions.push(new e(this._ctx.arcTo, [t, n, r, i, s])), this
        }, n.arc = function(t, n, r, i, s, o) {
            return this._dirty = this._active = !0, null == o && (o = !1), this._activeInstructions.push(new e(this._ctx.arc, [t, n, r, i, s, o])), this
        }, n.quadraticCurveTo = function(t, n, r, i) {
            return this._dirty = this._active = !0, this._activeInstructions.push(new e(this._ctx.quadraticCurveTo, [t, n, r, i])), this
        }, n.bezierCurveTo = function(t, n, r, i, s, o) {
            return this._dirty = this._active = !0, this._activeInstructions.push(new e(this._ctx.bezierCurveTo, [t, n, r, i, s, o])), this
        }, n.rect = function(t, n, r, i) {
            return this._dirty = this._active = !0, this._activeInstructions.push(new e(this._ctx.rect, [t, n, r, i])), this
        }, n.closePath = function() {
            return this._active && (this._dirty = !0, this._activeInstructions.push(new e(this._ctx.closePath, []))), this
        }, n.clear = function() {
            return this._instructions = [], this._oldInstructions = [], this._activeInstructions = [], this._strokeStyleInstructions = this._strokeInstructions = this._fillInstructions = this._fillMatrix = null, this._active = this._dirty = this._strokeIgnoreScale = !1, this
        }, n.beginFill = function(t) {
            return this._active && this._newPath(), this._fillInstructions = t ? [new e(this._setProp, ["fillStyle", t], !1)] : null, this._fillMatrix = null, this
        }, n.beginLinearGradientFill = function(t, n, r, i, s, o) {
            this._active && this._newPath();
            for (var u = this._ctx.createLinearGradient(r, i, s, o), f = 0, l = t.length; l > f; f++) u.addColorStop(n[f], t[f]);
            return this._fillInstructions = [new e(this._setProp, ["fillStyle", u], !1)], this._fillMatrix = null, this
        }, n.beginRadialGradientFill = function(t, n, r, i, s, o, u, f) {
            this._active && this._newPath();
            for (var l = this._ctx.createRadialGradient(r, i, s, o, u, f), c = 0, h = t.length; h > c; c++) l.addColorStop(n[c], t[c]);
            return this._fillInstructions = [new e(this._setProp, ["fillStyle", l], !1)], this._fillMatrix = null, this
        }, n.beginBitmapFill = function(t, n, r) {
            this._active && this._newPath(), n = n || "";
            var i = this._ctx.createPattern(t, n);
            return this._fillInstructions = [new e(this._setProp, ["fillStyle", i], !1)], this._fillMatrix = r ? [r.a, r.b, r.c, r.d, r.tx, r.ty] : null, this
        }, n.endFill = function() {
            return this.beginFill()
        }, n.setStrokeStyle = function(n, r, i, s, o) {
            return this._active && this._newPath(), this._strokeStyleInstructions = [new e(this._setProp, ["lineWidth", null == n ? "1" : n], !1), new e(this._setProp, ["lineCap", null == r ? "butt" : isNaN(r) ? r : t.STROKE_CAPS_MAP[r]], !1), new e(this._setProp, ["lineJoin", null == i ? "miter" : isNaN(i) ? i : t.STROKE_JOINTS_MAP[i]], !1), new e(this._setProp, ["miterLimit", null == s ? "10" : s], !1)], this._strokeIgnoreScale = o, this
        }, n.beginStroke = function(t) {
            return this._active && this._newPath(), this._strokeInstructions = t ? [new e(this._setProp, ["strokeStyle", t], !1)] : null, this
        }, n.beginLinearGradientStroke = function(t, n, r, i, s, o) {
            this._active && this._newPath();
            for (var u = this._ctx.createLinearGradient(r, i, s, o), f = 0, l = t.length; l > f; f++) u.addColorStop(n[f], t[f]);
            return this._strokeInstructions = [new e(this._setProp, ["strokeStyle", u], !1)], this
        }, n.beginRadialGradientStroke = function(t, n, r, i, s, o, u, f) {
            this._active && this._newPath();
            for (var l = this._ctx.createRadialGradient(r, i, s, o, u, f), c = 0, h = t.length; h > c; c++) l.addColorStop(n[c], t[c]);
            return this._strokeInstructions = [new e(this._setProp, ["strokeStyle", l], !1)], this
        }, n.beginBitmapStroke = function(t, n) {
            this._active && this._newPath(), n = n || "";
            var r = this._ctx.createPattern(t, n);
            return this._strokeInstructions = [new e(this._setProp, ["strokeStyle", r], !1)], this
        }, n.endStroke = function() {
            return this.beginStroke(), this
        }, n.curveTo = n.quadraticCurveTo, n.drawRect = n.rect, n.drawRoundRect = function(e, t, n, r, i) {
            return this.drawRoundRectComplex(e, t, n, r, i, i, i, i), this
        }, n.drawRoundRectComplex = function(t, n, r, i, s, o, u, f) {
            var l = (i > r ? r : i) / 2,
                c = 0,
                h = 0,
                p = 0,
                d = 0;
            0 > s && (s *= c = -1), s > l && (s = l), 0 > o && (o *= h = -1), o > l && (o = l), 0 > u && (u *= p = -1), u > l && (u = l), 0 > f && (f *= d = -1), f > l && (f = l), this._dirty = this._active = !0;
            var v = this._ctx.arcTo,
                m = this._ctx.lineTo;
            return this._activeInstructions.push(new e(this._ctx.moveTo, [t + r - o, n]), new e(v, [t + r + o * h, n - o * h, t + r, n + o, o]), new e(m, [t + r, n + i - u]), new e(v, [t + r + u * p, n + i + u * p, t + r - u, n + i, u]), new e(m, [t + f, n + i]), new e(v, [t - f * d, n + i + f * d, t, n + i - f, f]), new e(m, [t, n + s]), new e(v, [t - s * c, n - s * c, t + s, n, s]), new e(this._ctx.closePath)), this
        }, n.drawCircle = function(e, t, n) {
            return this.arc(e, t, n, 0, 2 * Math.PI), this
        }, n.drawEllipse = function(t, n, r, i) {
            this._dirty = this._active = !0;
            var s = .5522848,
                o = r / 2 * s,
                u = i / 2 * s,
                f = t + r,
                l = n + i,
                c = t + r / 2,
                h = n + i / 2;
            return this._activeInstructions.push(new e(this._ctx.moveTo, [t, h]), new e(this._ctx.bezierCurveTo, [t, h - u, c - o, n, c, n]), new e(this._ctx.bezierCurveTo, [c + o, n, f, h - u, f, h]), new e(this._ctx.bezierCurveTo, [f, h + u, c + o, l, c, l]), new e(this._ctx.bezierCurveTo, [c - o, l, t, h + u, t, h])), this
        }, n.inject = function(t, n) {
            return this._dirty = this._active = !0, this._activeInstructions.push(new e(t, [n])), this
        }, n.drawPolyStar = function(t, n, r, i, s, o) {
            this._dirty = this._active = !0, null == s && (s = 0), s = 1 - s, null == o ? o = 0 : o /= 180 / Math.PI;
            var u = Math.PI / i;
            this._activeInstructions.push(new e(this._ctx.moveTo, [t + Math.cos(o) * r, n + Math.sin(o) * r]));
            for (var f = 0; i > f; f++) o += u, 1 != s && this._activeInstructions.push(new e(this._ctx.lineTo, [t + Math.cos(o) * r * s, n + Math.sin(o) * r * s])), o += u, this._activeInstructions.push(new e(this._ctx.lineTo, [t + Math.cos(o) * r, n + Math.sin(o) * r]));
            return this
        }, n.decodePath = function(e) {
            for (var n = [this.moveTo, this.lineTo, this.quadraticCurveTo, this.bezierCurveTo, this.closePath], r = [2, 2, 4, 6, 0], i = 0, s = e.length, o = [], u = 0, a = 0, f = t.BASE_64; s > i;) {
                var l = e.charAt(i),
                    c = f[l],
                    h = c >> 3,
                    p = n[h];
                if (!p || 3 & c) throw "bad path data (@" + i + "): " + l;
                var d = r[h];
                h || (u = a = 0), o.length = 0, i++;
                for (var v = (1 & c >> 2) + 2, m = 0; d > m; m++) {
                    var g = f[e.charAt(i)],
                        y = g >> 5 ? -1 : 1;
                    g = (31 & g) << 6 | f[e.charAt(i + 1)], 3 == v && (g = g << 6 | f[e.charAt(i + 2)]), g = y * g / 10, m % 2 ? u = g += u : a = g += a, o[m] = g, i += v
                }
                p.apply(this, o)
            }
            return this
        }, n.clone = function() {
            var e = new t;
            return e._instructions = this._instructions.slice(), e._activeInstructions = this._activeInstructions.slice(), e._oldInstructions = this._oldInstructions.slice(), this._fillInstructions && (e._fillInstructions = this._fillInstructions.slice()), this._strokeInstructions && (e._strokeInstructions = this._strokeInstructions.slice()), this._strokeStyleInstructions && (e._strokeStyleInstructions = this._strokeStyleInstructions.slice()), e._active = this._active, e._dirty = this._dirty, e._fillMatrix = this._fillMatrix, e._strokeIgnoreScale = this._strokeIgnoreScale, e
        }, n.toString = function() {
            return "[Graphics]"
        }, n.mt = n.moveTo, n.lt = n.lineTo, n.at = n.arcTo, n.bt = n.bezierCurveTo, n.qt = n.quadraticCurveTo, n.a = n.arc, n.r = n.rect, n.cp = n.closePath, n.c = n.clear, n.f = n.beginFill, n.lf = n.beginLinearGradientFill, n.rf = n.beginRadialGradientFill, n.bf = n.beginBitmapFill, n.ef = n.endFill, n.ss = n.setStrokeStyle, n.s = n.beginStroke, n.ls = n.beginLinearGradientStroke, n.rs = n.beginRadialGradientStroke, n.bs = n.beginBitmapStroke, n.es = n.endStroke, n.dr = n.drawRect, n.rr = n.drawRoundRect, n.rc = n.drawRoundRectComplex, n.dc = n.drawCircle, n.de = n.drawEllipse, n.dp = n.drawPolyStar, n.p = n.decodePath, n._updateInstructions = function() {
            this._instructions = this._oldInstructions.slice(), this._instructions.push(t.beginCmd), this._appendInstructions(this._fillInstructions), this._appendInstructions(this._strokeInstructions), this._appendInstructions(this._strokeInstructions && this._strokeStyleInstructions), this._appendInstructions(this._activeInstructions), this._fillInstructions && this._appendDraw(t.fillCmd, this._fillMatrix), this._strokeInstructions && this._appendDraw(t.strokeCmd, this._strokeIgnoreScale && [1, 0, 0, 1, 0, 0])
        }, n._appendInstructions = function(e) {
            e && this._instructions.push.apply(this._instructions, e)
        }, n._appendDraw = function(t, n) {
            n ? this._instructions.push(new e(this._ctx.save, [], !1), new e(this._ctx.transform, n, !1), t, new e(this._ctx.restore, [], !1)) : this._instructions.push(t)
        }, n._newPath = function() {
            this._dirty && this._updateInstructions(), this._oldInstructions = this._instructions, this._activeInstructions = [], this._active = this._dirty = !1
        }, n._setProp = function(e, t) {
            this[e] = t
        }, createjs.Graphics = t
    }(), this.createjs = this.createjs || {},
    function() {
        var e = function() {
                this.initialize()
            },
            t = e.prototype = new createjs.EventDispatcher;
        e.suppressCrossDomainErrors = !1;
        var n = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas");
        n.getContext && (e._hitTestCanvas = n, e._hitTestContext = n.getContext("2d"), n.width = n.height = 1), e._nextCacheID = 1, t.alpha = 1, t.cacheCanvas = null, t.id = -1, t.mouseEnabled = !0, t.name = null, t.parent = null, t.regX = 0, t.regY = 0, t.rotation = 0, t.scaleX = 1, t.scaleY = 1, t.skewX = 0, t.skewY = 0, t.shadow = null, t.visible = !0, t.x = 0, t.y = 0, t.compositeOperation = null, t.snapToPixel = !1, t.filters = null, t.cacheID = 0, t.mask = null, t.hitArea = null, t.cursor = null, t._cacheOffsetX = 0, t._cacheOffsetY = 0, t._cacheScale = 1, t._cacheDataURLID = 0, t._cacheDataURL = null, t._matrix = null, t._rectangle = null, t._bounds = null, t.initialize = function() {
            this.id = createjs.UID.get(), this._matrix = new createjs.Matrix2D, this._rectangle = new createjs.Rectangle
        }, t.isVisible = function() {
            return !!(this.visible && this.alpha > 0 && 0 != this.scaleX && 0 != this.scaleY)
        }, t.draw = function(e, t) {
            var n = this.cacheCanvas;
            if (t || !n) return !1;
            var r, i = this._cacheScale,
                s = this._cacheOffsetX,
                o = this._cacheOffsetY;
            return (r = this._applyFilterBounds(s, o, 0, 0)) && (s = r.x, o = r.y), e.drawImage(n, s, o, n.width / i, n.height / i), !0
        }, t.updateContext = function(e) {
            var t, n = this.mask,
                r = this;
            n && n.graphics && !n.graphics.isEmpty() && (t = n.getMatrix(n._matrix), e.transform(t.a, t.b, t.c, t.d, t.tx, t.ty), n.graphics.drawAsPath(e), e.clip(), t.invert(), e.transform(t.a, t.b, t.c, t.d, t.tx, t.ty)), t = r._matrix.identity().appendTransform(r.x, r.y, r.scaleX, r.scaleY, r.rotation, r.skewX, r.skewY, r.regX, r.regY), createjs.Stage._snapToPixelEnabled && r.snapToPixel ? e.transform(t.a, t.b, t.c, t.d, 0 | t.tx + .5, 0 | t.ty + .5) : e.transform(t.a, t.b, t.c, t.d, t.tx, t.ty), e.globalAlpha *= r.alpha, r.compositeOperation && (e.globalCompositeOperation = r.compositeOperation), r.shadow && this._applyShadow(e, r.shadow)
        }, t.cache = function(e, t, n, r, i) {
            i = i || 1, this.cacheCanvas || (this.cacheCanvas = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas")), this._cacheWidth = n, this._cacheHeight = r, this._cacheOffsetX = e, this._cacheOffsetY = t, this._cacheScale = i, this.updateCache()
        }, t.updateCache = function(t) {
            var n, r = this.cacheCanvas,
                i = this._cacheScale,
                s = this._cacheOffsetX * i,
                o = this._cacheOffsetY * i,
                u = this._cacheWidth,
                f = this._cacheHeight;
            if (!r) throw "cache() must be called before updateCache()";
            var l = r.getContext("2d");
            (n = this._applyFilterBounds(s, o, u, f)) && (s = n.x, o = n.y, u = n.width, f = n.height), u = Math.ceil(u * i), f = Math.ceil(f * i), u != r.width || f != r.height ? (r.width = u, r.height = f) : t || l.clearRect(0, 0, u + 1, f + 1), l.save(), l.globalCompositeOperation = t, l.setTransform(i, 0, 0, i, -s, -o), this.draw(l, !0), this._applyFilters(), l.restore(), this.cacheID = e._nextCacheID++
        }, t.uncache = function() {
            this._cacheDataURL = this.cacheCanvas = null, this.cacheID = this._cacheOffsetX = this._cacheOffsetY = 0, this._cacheScale = 1
        }, t.getCacheDataURL = function() {
            return this.cacheCanvas ? (this.cacheID != this._cacheDataURLID && (this._cacheDataURL = this.cacheCanvas.toDataURL()), this._cacheDataURL) : null
        }, t.getStage = function() {
            for (var e = this; e.parent;) e = e.parent;
            return e instanceof createjs.Stage ? e : null
        }, t.localToGlobal = function(e, t) {
            var n = this.getConcatenatedMatrix(this._matrix);
            return null == n ? null : (n.append(1, 0, 0, 1, e, t), new createjs.Point(n.tx, n.ty))
        }, t.globalToLocal = function(e, t) {
            var n = this.getConcatenatedMatrix(this._matrix);
            return null == n ? null : (n.invert(), n.append(1, 0, 0, 1, e, t), new createjs.Point(n.tx, n.ty))
        }, t.localToLocal = function(e, t, n) {
            var r = this.localToGlobal(e, t);
            return n.globalToLocal(r.x, r.y)
        }, t.setTransform = function(e, t, n, r, i, s, o, u, a) {
            return this.x = e || 0, this.y = t || 0, this.scaleX = null == n ? 1 : n, this.scaleY = null == r ? 1 : r, this.rotation = i || 0, this.skewX = s || 0, this.skewY = o || 0, this.regX = u || 0, this.regY = a || 0, this
        }, t.getMatrix = function(e) {
            var t = this;
            return (e ? e.identity() : new createjs.Matrix2D).appendTransform(t.x, t.y, t.scaleX, t.scaleY, t.rotation, t.skewX, t.skewY, t.regX, t.regY).appendProperties(t.alpha, t.shadow, t.compositeOperation)
        }, t.getConcatenatedMatrix = function(e) {
            e ? e.identity() : e = new createjs.Matrix2D;
            for (var t = this; null != t;) e.prependTransform(t.x, t.y, t.scaleX, t.scaleY, t.rotation, t.skewX, t.skewY, t.regX, t.regY).prependProperties(t.alpha, t.shadow, t.compositeOperation), t = t.parent;
            return e
        }, t.hitTest = function(t, n) {
            var r = e._hitTestContext;
            r.setTransform(1, 0, 0, 1, -t, -n), this.draw(r);
            var i = this._testHit(r);
            return r.setTransform(1, 0, 0, 1, 0, 0), r.clearRect(0, 0, 2, 2), i
        }, t.set = function(e) {
            for (var t in e) this[t] = e[t];
            return this
        }, t.getBounds = function() {
            if (this._bounds) return this._rectangle.copy(this._bounds);
            var e = this.cacheCanvas;
            if (e) {
                var t = this._cacheScale;
                return this._rectangle.initialize(this._cacheOffsetX, this._cacheOffsetY, e.width / t, e.height / t)
            }
            return null
        }, t.getTransformedBounds = function() {
            return this._getBounds()
        }, t.setBounds = function(e, t, n, r) {
            null == e && (this._bounds = e), this._bounds = (this._bounds || new createjs.Rectangle).initialize(e, t, n, r)
        }, t.clone = function() {
            var t = new e;
            return this.cloneProps(t), t
        }, t.toString = function() {
            return "[DisplayObject (name=" + this.name + ")]"
        }, t.cloneProps = function(e) {
            e.alpha = this.alpha, e.name = this.name, e.regX = this.regX, e.regY = this.regY, e.rotation = this.rotation, e.scaleX = this.scaleX, e.scaleY = this.scaleY, e.shadow = this.shadow, e.skewX = this.skewX, e.skewY = this.skewY, e.visible = this.visible, e.x = this.x, e.y = this.y, e._bounds = this._bounds, e.mouseEnabled = this.mouseEnabled, e.compositeOperation = this.compositeOperation
        }, t._applyShadow = function(e, t) {
            t = t || Shadow.identity, e.shadowColor = t.color, e.shadowOffsetX = t.offsetX, e.shadowOffsetY = t.offsetY, e.shadowBlur = t.blur
        }, t._tick = function(e) {
            var t = this._listeners;
            if (t && t.tick) {
                var n = new createjs.Event("tick");
                n.params = e, this._dispatchEvent(n, this, 2)
            }
        }, t._testHit = function(t) {
            try {
                var n = t.getImageData(0, 0, 1, 1).data[3] > 1
            } catch (r) {
                if (!e.suppressCrossDomainErrors) throw "An error has occurred. This is most likely due to security restrictions on reading canvas pixel data with local or cross-domain images."
            }
            return n
        }, t._applyFilters = function() {
            if (this.filters && 0 != this.filters.length && this.cacheCanvas)
                for (var e = this.filters.length, t = this.cacheCanvas.getContext("2d"), n = this.cacheCanvas.width, r = this.cacheCanvas.height, i = 0; e > i; i++) this.filters[i].applyFilter(t, 0, 0, n, r)
        }, t._applyFilterBounds = function(e, t, n, r) {
            var i, s, o = this.filters;
            if (o && (s = o.length)) {
                for (var u = 0; s > u; u++) {
                    var a = this.filters[u],
                        f = a.getBounds && a.getBounds();
                    f && (i || (i = this._rectangle.initialize(e, t, n, r)), i.x += f.x, i.y += f.y, i.width += f.width, i.height += f.height)
                }
                return i
            }
        }, t._getBounds = function(e, t) {
            return this._transformBounds(this.getBounds(), e, t)
        }, t._transformBounds = function(e, t, n) {
            if (!e) return e;
            var r = e.x,
                i = e.y,
                s = e.width,
                o = e.height,
                u = n ? this._matrix.identity() : this.getMatrix(this._matrix);
            (r || i) && u.appendTransform(0, 0, 1, 1, 0, 0, 0, -r, -i), t && u.prependMatrix(t);
            var a = s * u.a,
                f = s * u.b,
                l = o * u.c,
                c = o * u.d,
                h = u.tx,
                p = u.ty,
                d = h,
                v = h,
                m = p,
                g = p;
            return (r = a + h) < d ? d = r : r > v && (v = r), (r = a + l + h) < d ? d = r : r > v && (v = r), (r = l + h) < d ? d = r : r > v && (v = r), (i = f + p) < m ? m = i : i > g && (g = i), (i = f + c + p) < m ? m = i : i > g && (g = i), (i = c + p) < m ? m = i : i > g && (g = i), e.initialize(d, m, v - d, g - m)
        }, createjs.DisplayObject = e
    }(), this.createjs = this.createjs || {},
    function() {
        var e = function() {
                this.initialize()
            },
            t = e.prototype = new createjs.DisplayObject;
        t.children = null, t.mouseChildren = !0, t.DisplayObject_initialize = t.initialize, t.initialize = function() {
            this.DisplayObject_initialize(), this.children = []
        }, t.isVisible = function() {
            var e = this.cacheCanvas || this.children.length;
            return !!(this.visible && this.alpha > 0 && 0 != this.scaleX && 0 != this.scaleY && e)
        }, t.DisplayObject_draw = t.draw, t.draw = function(e, t) {
            if (this.DisplayObject_draw(e, t)) return !0;
            for (var n = this.children.slice(0), r = 0, i = n.length; i > r; r++) {
                var s = n[r];
                s.isVisible() && (e.save(), s.updateContext(e), s.draw(e), e.restore())
            }
            return !0
        }, t.addChild = function(e) {
            if (null == e) return e;
            var t = arguments.length;
            if (t > 1) {
                for (var n = 0; t > n; n++) this.addChild(arguments[n]);
                return arguments[t - 1]
            }
            return e.parent && e.parent.removeChild(e), e.parent = this, this.children.push(e), e
        }, t.addChildAt = function(e, t) {
            var n = arguments.length,
                r = arguments[n - 1];
            if (0 > r || r > this.children.length) return arguments[n - 2];
            if (n > 2) {
                for (var i = 0; n - 1 > i; i++) this.addChildAt(arguments[i], r + i);
                return arguments[n - 2]
            }
            return e.parent && e.parent.removeChild(e), e.parent = this, this.children.splice(t, 0, e), e
        }, t.removeChild = function(e) {
            var t = arguments.length;
            if (t > 1) {
                for (var n = !0, r = 0; t > r; r++) n = n && this.removeChild(arguments[r]);
                return n
            }
            return this.removeChildAt(createjs.indexOf(this.children, e))
        }, t.removeChildAt = function(e) {
            var t = arguments.length;
            if (t > 1) {
                for (var n = [], r = 0; t > r; r++) n[r] = arguments[r];
                n.sort(function(e, t) {
                    return t - e
                });
                for (var i = !0, r = 0; t > r; r++) i = i && this.removeChildAt(n[r]);
                return i
            }
            if (0 > e || e > this.children.length - 1) return !1;
            var s = this.children[e];
            return s && (s.parent = null), this.children.splice(e, 1), !0
        }, t.removeAllChildren = function() {
            for (var e = this.children; e.length;) e.pop().parent = null
        }, t.getChildAt = function(e) {
            return this.children[e]
        }, t.getChildByName = function(e) {
            for (var t = this.children, n = 0, r = t.length; r > n; n++)
                if (t[n].name == e) return t[n];
            return null
        }, t.sortChildren = function(e) {
            this.children.sort(e)
        }, t.getChildIndex = function(e) {
            return createjs.indexOf(this.children, e)
        }, t.getNumChildren = function() {
            return this.children.length
        }, t.swapChildrenAt = function(e, t) {
            var n = this.children,
                r = n[e],
                i = n[t];
            r && i && (n[e] = i, n[t] = r)
        }, t.swapChildren = function(e, t) {
            for (var n, r, i = this.children, s = 0, o = i.length; o > s && (i[s] == e && (n = s), i[s] == t && (r = s), null == n || null == r); s++);
            s != o && (i[n] = t, i[r] = e)
        }, t.setChildIndex = function(e, t) {
            var n = this.children,
                r = n.length;
            if (!(e.parent != this || 0 > t || t >= r)) {
                for (var i = 0; r > i && n[i] != e; i++);
                i != r && i != t && (n.splice(i, 1), n.splice(t, 0, e))
            }
        }, t.contains = function(e) {
            for (; e;) {
                if (e == this) return !0;
                e = e.parent
            }
            return !1
        }, t.hitTest = function(e, t) {
            return null != this.getObjectUnderPoint(e, t)
        }, t.getObjectsUnderPoint = function(e, t) {
            var n = [],
                r = this.localToGlobal(e, t);
            return this._getObjectsUnderPoint(r.x, r.y, n), n
        }, t.getObjectUnderPoint = function(e, t) {
            var n = this.localToGlobal(e, t);
            return this._getObjectsUnderPoint(n.x, n.y)
        }, t.DisplayObject_getBounds = t.getBounds, t.getBounds = function() {
            return this._getBounds(null, !0)
        }, t.getTransformedBounds = function() {
            return this._getBounds()
        }, t.clone = function(t) {
            var n = new e;
            if (this.cloneProps(n), t)
                for (var r = n.children = [], i = 0, s = this.children.length; s > i; i++) {
                    var o = this.children[i].clone(t);
                    o.parent = n, r.push(o)
                }
            return n
        }, t.toString = function() {
            return "[Container (name=" + this.name + ")]"
        }, t.DisplayObject__tick = t._tick, t._tick = function(e) {
            for (var t = this.children.length - 1; t >= 0; t--) {
                var n = this.children[t];
                n._tick && n._tick(e)
            }
            this.DisplayObject__tick(e)
        }, t._getObjectsUnderPoint = function(t, n, r, i) {
            for (var s = createjs.DisplayObject._hitTestContext, o = this._matrix, u = this.children.length, f = u - 1; f >= 0; f--) {
                var l = this.children[f],
                    c = i && l.hitArea;
                if (l.visible && (c || l.isVisible()) && (!i || l.mouseEnabled))
                    if (!c && l instanceof e) {
                        var h = l._getObjectsUnderPoint(t, n, r, i);
                        if (!r && h) return h
                    } else {
                        if (l.getConcatenatedMatrix(o), c && (o.appendTransform(c.x, c.y, c.scaleX, c.scaleY, c.rotation, c.skewX, c.skewY, c.regX, c.regY), o.alpha = c.alpha), s.globalAlpha = o.alpha, s.setTransform(o.a, o.b, o.c,
                            o.d, o.tx - t, o.ty - n), (c || l).draw(s), !this._testHit(s)) continue;
                        if (s.setTransform(1, 0, 0, 1, 0, 0), s.clearRect(0, 0, 2, 2), !r) return i && !this.mouseChildren ? this : l;
                        r.push(l)
                    }
            }
            return null
        }, t._getBounds = function(e, t) {
            var n = this.DisplayObject_getBounds();
            if (n) return this._transformBounds(n, e, t);
            var r, i, s, o, u = t ? this._matrix.identity() : this.getMatrix(this._matrix);
            e && u.prependMatrix(e);
            for (var a = this.children.length, f = 0; a > f; f++) {
                var l = this.children[f];
                if (l.visible && (n = l._getBounds(u))) {
                    var c = n.x,
                        h = n.y,
                        p = c + n.width,
                        d = h + n.height;
                    (r > c || null == r) && (r = c), (p > i || null == i) && (i = p), (s > h || null == s) && (s = h), (d > o || null == o) && (o = d)
                }
            }
            return null == i ? null : this._rectangle.initialize(r, s, i - r, o - s)
        }, createjs.Container = e
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";
        var e = function(e) {
                this.initialize(e)
            },
            t = e.prototype = new createjs.Container;
        e._snapToPixelEnabled = !1, t.autoClear = !0, t.canvas = null, t.mouseX = 0, t.mouseY = 0, t.snapToPixelEnabled = !1, t.mouseInBounds = !1, t.tickOnUpdate = !0, t.mouseMoveOutside = !1, t.nextStage = null, t._pointerData = null, t._pointerCount = 0, t._primaryPointerID = null, t._mouseOverIntervalID = null, t.Container_initialize = t.initialize, t.initialize = function(e) {
            this.Container_initialize(), this.canvas = "string" == typeof e ? document.getElementById(e) : e, this._pointerData = {}, this.enableDOMEvents(!0)
        }, t.update = function() {
            if (this.canvas) {
                this.tickOnUpdate && (this.dispatchEvent("tickstart"), this._tick(arguments.length ? arguments : null), this.dispatchEvent("tickend")), this.dispatchEvent("drawstart"), e._snapToPixelEnabled = this.snapToPixelEnabled, this.autoClear && this.clear();
                var t = this.canvas.getContext("2d");
                t.save(), this.updateContext(t), this.draw(t, !1), t.restore(), this.dispatchEvent("drawend")
            }
        }, t.handleEvent = function(e) {
            "tick" == e.type && this.update(e)
        }, t.clear = function() {
            if (this.canvas) {
                var e = this.canvas.getContext("2d");
                e.setTransform(1, 0, 0, 1, 0, 0), e.clearRect(0, 0, this.canvas.width + 1, this.canvas.height + 1)
            }
        }, t.toDataURL = function(e, t) {
            t || (t = "image/png");
            var n, r = this.canvas.getContext("2d"),
                i = this.canvas.width,
                s = this.canvas.height;
            if (e) {
                n = r.getImageData(0, 0, i, s);
                var o = r.globalCompositeOperation;
                r.globalCompositeOperation = "destination-over", r.fillStyle = e, r.fillRect(0, 0, i, s)
            }
            var u = this.canvas.toDataURL(t);
            return e && (r.clearRect(0, 0, i + 1, s + 1), r.putImageData(n, 0, 0), r.globalCompositeOperation = o), u
        }, t.enableMouseOver = function(e) {
            if (this._mouseOverIntervalID && (clearInterval(this._mouseOverIntervalID), this._mouseOverIntervalID = null, 0 == e && this._testMouseOver(!0)), null == e) e = 20;
            else if (0 >= e) return;
            var t = this;
            this._mouseOverIntervalID = setInterval(function() {
                t._testMouseOver()
            }, 1e3 / Math.min(50, e))
        }, t.enableDOMEvents = function(e) {
            null == e && (e = !0);
            var t, n, r = this._eventListeners;
            if (!e && r) {
                for (t in r) n = r[t], n.t.removeEventListener(t, n.f, !1);
                this._eventListeners = null
            } else if (e && !r && this.canvas) {
                var i = window.addEventListener ? window : document,
                    s = this;
                r = this._eventListeners = {}, r.mouseup = {
                    t: i,
                    f: function(e) {
                        s._handleMouseUp(e)
                    }
                }, r.mousemove = {
                    t: i,
                    f: function(e) {
                        s._handleMouseMove(e)
                    }
                }, r.dblclick = {
                    t: i,
                    f: function(e) {
                        s._handleDoubleClick(e)
                    }
                }, r.mousedown = {
                    t: this.canvas,
                    f: function(e) {
                        s._handleMouseDown(e)
                    }
                };
                for (t in r) n = r[t], n.t.addEventListener(t, n.f, !1)
            }
        }, t.clone = function() {
            var t = new e(null);
            return this.cloneProps(t), t
        }, t.toString = function() {
            return "[Stage (name=" + this.name + ")]"
        }, t._getElementRect = function(e) {
            var t;
            try {
                t = e.getBoundingClientRect()
            } catch (n) {
                t = {
                    top: e.offsetTop,
                    left: e.offsetLeft,
                    width: e.offsetWidth,
                    height: e.offsetHeight
                }
            }
            var r = (window.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || document.body.clientLeft || 0),
                i = (window.pageYOffset || document.scrollTop || 0) - (document.clientTop || document.body.clientTop || 0),
                s = window.getComputedStyle ? getComputedStyle(e) : e.currentStyle,
                o = parseInt(s.paddingLeft) + parseInt(s.borderLeftWidth),
                u = parseInt(s.paddingTop) + parseInt(s.borderTopWidth),
                a = parseInt(s.paddingRight) + parseInt(s.borderRightWidth),
                f = parseInt(s.paddingBottom) + parseInt(s.borderBottomWidth);
            return {
                left: t.left + r + o,
                right: t.right + r - a,
                top: t.top + i + u,
                bottom: t.bottom + i - f
            }
        }, t._getPointerData = function(e) {
            var t = this._pointerData[e];
            return t || (t = this._pointerData[e] = {
                x: 0,
                y: 0
            }, null == this._primaryPointerID && (this._primaryPointerID = e)), t
        }, t._handleMouseMove = function(e) {
            e || (e = window.event), this._handlePointerMove(-1, e, e.pageX, e.pageY)
        }, t._handlePointerMove = function(e, t, n, r) {
            if (this.canvas) {
                var i = this._getPointerData(e),
                    s = i.inBounds;
                if (this._updatePointerPosition(e, t, n, r), s || i.inBounds || this.mouseMoveOutside) {
                    -1 == e && i.inBounds == !s && this._dispatchMouseEvent(this, s ? "mouseleave" : "mouseenter", !1, e, i, t), this._dispatchMouseEvent(this, "stagemousemove", !1, e, i, t), this._dispatchMouseEvent(i.target, "pressmove", !0, e, i, t);
                    var o = i.event;
                    o && o.hasEventListener("mousemove") && o.dispatchEvent(new createjs.MouseEvent("mousemove", !1, !1, i.x, i.y, t, e, e == this._primaryPointerID, i.rawX, i.rawY), oTarget), this.nextStage && this.nextStage._handlePointerMove(e, t, n, r)
                }
            }
        }, t._updatePointerPosition = function(e, t, n, r) {
            var i = this._getElementRect(this.canvas);
            n -= i.left, r -= i.top;
            var s = this.canvas.width,
                o = this.canvas.height;
            n /= (i.right - i.left) / s, r /= (i.bottom - i.top) / o;
            var u = this._getPointerData(e);
            (u.inBounds = n >= 0 && r >= 0 && s - 1 >= n && o - 1 >= r) ? (u.x = n, u.y = r) : this.mouseMoveOutside && (u.x = 0 > n ? 0 : n > s - 1 ? s - 1 : n, u.y = 0 > r ? 0 : r > o - 1 ? o - 1 : r), u.posEvtObj = t, u.rawX = n, u.rawY = r, e == this._primaryPointerID && (this.mouseX = u.x, this.mouseY = u.y, this.mouseInBounds = u.inBounds)
        }, t._handleMouseUp = function(e) {
            this._handlePointerUp(-1, e, !1)
        }, t._handlePointerUp = function(e, t, n) {
            var r = this._getPointerData(e);
            this._dispatchMouseEvent(this, "stagemouseup", !1, e, r, t);
            var i = r.target;
            i && (this._getObjectsUnderPoint(r.x, r.y, null, !0) == i && this._dispatchMouseEvent(i, "click", !0, e, r, t), this._dispatchMouseEvent(i, "pressup", !0, e, r, t));
            var s = r.event;
            s && s.hasEventListener("mouseup") && s.dispatchEvent(new createjs.MouseEvent("mouseup", !1, !1, r.x, r.y, t, e, e == this._primaryPointerID, r.rawX, r.rawY), i), n ? (e == this._primaryPointerID && (this._primaryPointerID = null), delete this._pointerData[e]) : r.event = r.target = null, this.nextStage && this.nextStage._handlePointerUp(e, t, n)
        }, t._handleMouseDown = function(e) {
            this._handlePointerDown(-1, e)
        }, t._handlePointerDown = function(e, t, n, r) {
            null != r && this._updatePointerPosition(e, t, n, r);
            var i = this._getPointerData(e);
            this._dispatchMouseEvent(this, "stagemousedown", !1, e, i, t), i.target = this._getObjectsUnderPoint(i.x, i.y, null, !0), this._dispatchMouseEvent(i.target, "mousedown", !0, e, i, t), this.nextStage && this.nextStage._handlePointerDown(e, t, n, r)
        }, t._testMouseOver = function(e) {
            if (-1 == this._primaryPointerID && (e || this.mouseX != this._mouseOverX || this.mouseY != this._mouseOverY || !this.mouseInBounds)) {
                var t, n, r, i, s = this._getPointerData(-1),
                    o = s.posEvtObj,
                    u = -1,
                    a = "";
                (e || this.mouseInBounds && o && o.target == this.canvas) && (t = this._getObjectsUnderPoint(this.mouseX, this.mouseY, null, !0), this._mouseOverX = this.mouseX, this._mouseOverY = this.mouseY);
                var f = this._mouseOverTarget || [],
                    l = f[f.length - 1],
                    c = this._mouseOverTarget = [];
                for (n = t; n;) c.unshift(n), null != n.cursor && (a = n.cursor), n = n.parent;
                for (this.canvas.style.cursor = a, r = 0, i = c.length; i > r && c[r] == f[r]; r++) u = r;
                for (l != t && this._dispatchMouseEvent(l, "mouseout", !0, -1, s, o), r = f.length - 1; r > u; r--) this._dispatchMouseEvent(f[r], "rollout", !1, -1, s, o);
                for (r = c.length - 1; r > u; r--) this._dispatchMouseEvent(c[r], "rollover", !1, -1, s, o);
                l != t && this._dispatchMouseEvent(t, "mouseover", !0, -1, s, o)
            }
        }, t._handleDoubleClick = function(e) {
            var t = this._getPointerData(-1),
                n = this._getObjectsUnderPoint(t.x, t.y, null, !0);
            this._dispatchMouseEvent(n, "dblclick", !0, -1, t, e), this.nextStage && this.nextStage._handleDoubleClick(e)
        }, t._dispatchMouseEvent = function(e, t, n, r, i, s) {
            if (e && (n || e.hasEventListener(t))) {
                var o = new createjs.MouseEvent(t, n, !1, i.x, i.y, s, r, r == this._primaryPointerID, i.rawX, i.rawY);
                e.dispatchEvent(o)
            }
        }, createjs.Stage = e
    }(), this.createjs = this.createjs || {},
    function() {
        var e = function(e) {
                this.initialize(e)
            },
            t = e.prototype = new createjs.DisplayObject;
        t.image = null, t.snapToPixel = !0, t.sourceRect = null, t.DisplayObject_initialize = t.initialize, t.initialize = function(e) {
            this.DisplayObject_initialize(), "string" == typeof e ? (this.image = new Image, this.image.src = e) : this.image = e
        }, t.isVisible = function() {
            var e = this.cacheCanvas || this.image && (this.image.complete || this.image.getContext || this.image.readyState >= 2);
            return !!(this.visible && this.alpha > 0 && 0 != this.scaleX && 0 != this.scaleY && e)
        }, t.DisplayObject_draw = t.draw, t.draw = function(e, t) {
            if (this.DisplayObject_draw(e, t)) return !0;
            var n = this.sourceRect;
            return n ? e.drawImage(this.image, n.x, n.y, n.width, n.height, 0, 0, n.width, n.height) : e.drawImage(this.image, 0, 0), !0
        }, t.DisplayObject_getBounds = t.getBounds, t.getBounds = function() {
            var e = this.DisplayObject_getBounds();
            if (e) return e;
            var t = this.sourceRect || this.image,
                n = this.image && (this.image.complete || this.image.getContext || this.image.readyState >= 2);
            return n ? this._rectangle.initialize(0, 0, t.width, t.height) : null
        }, t.clone = function() {
            var t = new e(this.image);
            return this.sourceRect && (t.sourceRect = this.sourceRect.clone()), this.cloneProps(t), t
        }, t.toString = function() {
            return "[Bitmap (name=" + this.name + ")]"
        }, createjs.Bitmap = e
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";
        var e = function(e, t) {
                this.initialize(e, t)
            },
            t = e.prototype = new createjs.DisplayObject;
        t.currentFrame = 0, t.currentAnimation = null, t.paused = !0, t.spriteSheet = null, t.snapToPixel = !0, t.offset = 0, t.currentAnimationFrame = 0, t.framerate = 0, t._advanceCount = 0, t._animation = null, t._currentFrame = null, t.DisplayObject_initialize = t.initialize, t.initialize = function(e, t) {
            this.DisplayObject_initialize(), this.spriteSheet = e, t && this.gotoAndPlay(t)
        }, t.isVisible = function() {
            var e = this.cacheCanvas || this.spriteSheet.complete;
            return !!(this.visible && this.alpha > 0 && 0 != this.scaleX && 0 != this.scaleY && e)
        }, t.DisplayObject_draw = t.draw, t.draw = function(e, t) {
            if (this.DisplayObject_draw(e, t)) return !0;
            this._normalizeFrame();
            var n = this.spriteSheet.getFrame(0 | this._currentFrame);
            if (!n) return !1;
            var r = n.rect;
            return e.drawImage(n.image, r.x, r.y, r.width, r.height, -n.regX, -n.regY, r.width, r.height), !0
        }, t.play = function() {
            this.paused = !1
        }, t.stop = function() {
            this.paused = !0
        }, t.gotoAndPlay = function(e) {
            this.paused = !1, this._goto(e)
        }, t.gotoAndStop = function(e) {
            this.paused = !0, this._goto(e)
        }, t.advance = function(e) {
            var t = this._animation && this._animation.speed || 1,
                n = this.framerate || this.spriteSheet.framerate,
                r = n && null != e ? e / (1e3 / n) : 1;
            this._animation ? this.currentAnimationFrame += r * t : this._currentFrame += r * t, this._normalizeFrame()
        }, t.DisplayObject_getBounds = t.getBounds, t.getBounds = function() {
            return this.DisplayObject_getBounds() || this.spriteSheet.getFrameBounds(this.currentFrame, this._rectangle)
        }, t.clone = function() {
            var t = new e(this.spriteSheet);
            return this.cloneProps(t), t
        }, t.toString = function() {
            return "[Sprite (name=" + this.name + ")]"
        }, t.DisplayObject__tick = t._tick, t._tick = function(e) {
            this.paused || this.advance(e && e[0] && e[0].delta), this.DisplayObject__tick(e)
        }, t._normalizeFrame = function() {
            var e, t = this._animation,
                n = this.paused,
                r = this._currentFrame,
                i = this.currentAnimationFrame;
            if (t)
                if (e = t.frames.length, (0 | i) >= e) {
                    var s = t.next;
                    if (!this._dispatchAnimationEnd(t, r, n, s, e - 1)) {
                        if (s) return this._goto(s, i - e);
                        this.paused = !0, i = this.currentAnimationFrame = t.frames.length - 1, this._currentFrame = t.frames[i]
                    }
                } else this._currentFrame = t.frames[0 | i];
            else if (e = this.spriteSheet.getNumFrames(), r >= e && !this._dispatchAnimationEnd(t, r, n, e - 1) && (this._currentFrame -= e) >= e) return this._normalizeFrame();
            this.currentFrame = 0 | this._currentFrame
        }, t._dispatchAnimationEnd = function(e, t, n, r, i) {
            var s = e ? e.name : null;
            if (this.hasEventListener("animationend")) {
                var o = new createjs.Event("animationend");
                o.name = s, o.next = r, this.dispatchEvent(o)
            }
            return !n && this.paused && (this.currentAnimationFrame = i), this.paused != n || this._animation != e || this._currentFrame != t
        }, t.DisplayObject_cloneProps = t.cloneProps, t.cloneProps = function(e) {
            this.DisplayObject_cloneProps(e), e.currentFrame = this.currentFrame, e._currentFrame = this._currentFrame, e.currentAnimation = this.currentAnimation, e.paused = this.paused, e._animation = this._animation, e.currentAnimationFrame = this.currentAnimationFrame, e.framerate = this.framerate
        }, t._goto = function(e, t) {
            if (isNaN(e)) {
                var n = this.spriteSheet.getAnimation(e);
                n && (this.currentAnimationFrame = t || 0, this._animation = n, this.currentAnimation = e, this._normalizeFrame())
            } else this.currentAnimationFrame = 0, this.currentAnimation = this._animation = null, this._currentFrame = e, this._normalizeFrame()
        }, createjs.Sprite = e
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";
        var e = "BitmapAnimation is deprecated in favour of Sprite. See VERSIONS file for info on changes.";
        if (!createjs.Sprite) throw e;
        (createjs.BitmapAnimation = function(t) {
            console.log(e), this.initialize(t)
        }).prototype = new createjs.Sprite
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";
        var e = function(e) {
                this.initialize(e)
            },
            t = e.prototype = new createjs.DisplayObject;
        t.graphics = null, t.DisplayObject_initialize = t.initialize, t.initialize = function(e) {
            this.DisplayObject_initialize(), this.graphics = e ? e : new createjs.Graphics
        }, t.isVisible = function() {
            var e = this.cacheCanvas || this.graphics && !this.graphics.isEmpty();
            return !!(this.visible && this.alpha > 0 && 0 != this.scaleX && 0 != this.scaleY && e)
        }, t.DisplayObject_draw = t.draw, t.draw = function(e, t) {
            return this.DisplayObject_draw(e, t) ? !0 : (this.graphics.draw(e), !0)
        }, t.clone = function(t) {
            var n = new e(t && this.graphics ? this.graphics.clone() : this.graphics);
            return this.cloneProps(n), n
        }, t.toString = function() {
            return "[Shape (name=" + this.name + ")]"
        }, createjs.Shape = e
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";
        var e = function(e, t, n) {
                this.initialize(e, t, n)
            },
            t = e.prototype = new createjs.DisplayObject,
            n = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas");
        n.getContext && (e._workingContext = n.getContext("2d"), n.width = n.height = 1), e.H_OFFSETS = {
            start: 0,
            left: 0,
            center: -0.5,
            end: -1,
            right: -1
        }, e.V_OFFSETS = {
            top: 0,
            hanging: -0.01,
            middle: -0.4,
            alphabetic: -0.8,
            ideographic: -0.85,
            bottom: -1
        }, t.text = "", t.font = null, t.color = null, t.textAlign = "left", t.textBaseline = "top", t.maxWidth = null, t.outline = 0, t.lineHeight = 0, t.lineWidth = null, t.DisplayObject_initialize = t.initialize, t.initialize = function(e, t, n) {
            this.DisplayObject_initialize(), this.text = e, this.font = t, this.color = n
        }, t.isVisible = function() {
            var e = this.cacheCanvas || null != this.text && "" !== this.text;
            return !!(this.visible && this.alpha > 0 && 0 != this.scaleX && 0 != this.scaleY && e)
        }, t.DisplayObject_draw = t.draw, t.draw = function(e, t) {
            if (this.DisplayObject_draw(e, t)) return !0;
            var n = this.color || "#000";
            return this.outline ? (e.strokeStyle = n, e.lineWidth = 1 * this.outline) : e.fillStyle = n, this._drawText(this._prepContext(e)), !0
        }, t.getMeasuredWidth = function() {
            return this._prepContext(e._workingContext).measureText(this.text).width
        }, t.getMeasuredLineHeight = function() {
            return 1.2 * this._prepContext(e._workingContext).measureText("M").width
        }, t.getMeasuredHeight = function() {
            return this._drawText(null, {}).height
        }, t.DisplayObject_getBounds = t.getBounds, t.getBounds = function() {
            var t = this.DisplayObject_getBounds();
            if (t) return t;
            if (null == this.text || "" == this.text) return null;
            var n = this._drawText(null, {}),
                r = this.maxWidth && this.maxWidth < n.width ? this.maxWidth : n.width,
                i = r * e.H_OFFSETS[this.textAlign || "left"],
                s = this.lineHeight || this.getMeasuredLineHeight(),
                o = s * e.V_OFFSETS[this.textBaseline || "top"];
            return this._rectangle.initialize(i, o, r, n.height)
        }, t.clone = function() {
            var t = new e(this.text, this.font, this.color);
            return this.cloneProps(t), t
        }, t.toString = function() {
            return "[Text (text=" + (this.text.length > 20 ? this.text.substr(0, 17) + "..." : this.text) + ")]"
        }, t.DisplayObject_cloneProps = t.cloneProps, t.cloneProps = function(e) {
            this.DisplayObject_cloneProps(e), e.textAlign = this.textAlign, e.textBaseline = this.textBaseline, e.maxWidth = this.maxWidth, e.outline = this.outline, e.lineHeight = this.lineHeight, e.lineWidth = this.lineWidth
        }, t._prepContext = function(e) {
            return e.font = this.font, e.textAlign = this.textAlign || "left", e.textBaseline = this.textBaseline || "top", e
        }, t._drawText = function(t, n) {
            var r = !!t;
            r || (t = this._prepContext(e._workingContext));
            for (var i = this.lineHeight || this.getMeasuredLineHeight(), s = 0, o = 0, u = String(this.text).split(/(?:\r\n|\r|\n)/), f = 0, l = u.length; l > f; f++) {
                var c = u[f],
                    h = null;
                if (null != this.lineWidth && (h = t.measureText(c).width) > this.lineWidth) {
                    var p = c.split(/(\s)/);
                    c = p[0], h = t.measureText(c).width;
                    for (var d = 1, v = p.length; v > d; d += 2) {
                        var m = t.measureText(p[d] + p[d + 1]).width;
                        h + m > this.lineWidth ? (r && this._drawTextLine(t, c, o * i), h > s && (s = h), c = p[d + 1], h = t.measureText(c).width, o++) : (c += p[d] + p[d + 1], h += m)
                    }
                }
                r && this._drawTextLine(t, c, o * i), n && null == h && (h = t.measureText(c).width), h > s && (s = h), o++
            }
            return n && (n.count = o, n.width = s, n.height = o * i), n
        }, t._drawTextLine = function(e, t, n) {
            this.outline ? e.strokeText(t, 0, n, this.maxWidth || 65535) : e.fillText(t, 0, n, this.maxWidth || 65535)
        }, createjs.Text = e
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function e(e, t) {
            this.initialize(e, t)
        }
        var t = e.prototype = new createjs.DisplayObject;
        t.text = "", t.spriteSheet = null, t.lineHeight = 0, t.letterSpacing = 0, t.spaceWidth = 0, t.DisplayObject_initialize = t.initialize, t.initialize = function(e, t) {
            this.DisplayObject_initialize(), this.text = e, this.spriteSheet = t
        }, t.DisplayObject_draw = t.draw, t.draw = function(e, t) {
            return this.DisplayObject_draw(e, t) ? !0 : (this._drawText(e), void 0)
        }, t.isVisible = function() {
            var e = this.cacheCanvas || this.spriteSheet && this.spriteSheet.complete && this.text;
            return !!(this.visible && this.alpha > 0 && 0 != this.scaleX && 0 != this.scaleY && e)
        }, t.getBounds = function() {
            var e = this._rectangle;
            return this._drawText(null, e), e.width ? e : null
        }, t._getFrame = function(e, t) {
            var n, r = t.getAnimation(e);
            return r || (e != (n = e.toUpperCase()) || e != (n = e.toLowerCase()) || (n = null), n && (r = t.getAnimation(n))), r && t.getFrame(r.frames[0])
        }, t._getLineHeight = function(e) {
            var t = this._getFrame("1", e) || this._getFrame("T", e) || this._getFrame("L", e) || e.getFrame(0);
            return t ? t.rect.height : 1
        }, t._getSpaceWidth = function(e) {
            var t = this._getFrame("1", e) || this._getFrame("l", e) || this._getFrame("e", e) || this._getFrame("a", e) || e.getFrame(0);
            return t ? t.rect.width : 1
        }, t._drawText = function(e, t) {
            var n, r, i, s = 0,
                o = 0,
                u = this.spaceWidth,
                a = this.lineHeight,
                f = this.spriteSheet,
                l = !!this._getFrame(" ", f);
            l || 0 != u || (u = this._getSpaceWidth(f)), 0 == a && (a = this._getLineHeight(f));
            for (var c = 0, h = 0, p = this.text.length; p > h; h++) {
                var d = this.text.charAt(h);
                if (l || " " != d)
                    if ("\n" != d && "\r" != d) {
                        var v = this._getFrame(d, f);
                        if (v) {
                            var m = v.rect;
                            i = v.regX, n = m.width, e && e.drawImage(v.image, m.x, m.y, n, r = m.height, s - i, o - v.regY, n, r), s += n + this.letterSpacing
                        }
                    } else "\r" == d && "\n" == this.text.charAt(h + 1) && h++, s - i > c && (c = s - i), s = 0, o += a;
                else s += u
            }
            s - i > c && (c = s - i), t && (t.width = c - this.letterSpacing, t.height = o + a)
        }, createjs.BitmapText = e
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";
        var e = function() {
                throw "SpriteSheetUtils cannot be instantiated"
            },
            t = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas");
        t.getContext && (e._workingCanvas = t, e._workingContext = t.getContext("2d"), t.width = t.height = 1), e.addFlippedFrames = function(t, n, r, i) {
            if (n || r || i) {
                var s = 0;
                n && e._flip(t, ++s, !0, !1), r && e._flip(t, ++s, !1, !0), i && e._flip(t, ++s, !0, !0)
            }
        }, e.extractFrame = function(t, n) {
            isNaN(n) && (n = t.getAnimation(n).frames[0]);
            var r = t.getFrame(n);
            if (!r) return null;
            var i = r.rect,
                s = e._workingCanvas;
            s.width = i.width, s.height = i.height, e._workingContext.drawImage(r.image, i.x, i.y, i.width, i.height, 0, 0, i.width, i.height);
            var o = new Image;
            return o.src = s.toDataURL("image/png"), o
        }, e.mergeAlpha = function(e, t, n) {
            n || (n = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas")), n.width = Math.max(t.width, e.width), n.height = Math.max(t.height, e.height);
            var r = n.getContext("2d");
            return r.save(), r.drawImage(e, 0, 0), r.globalCompositeOperation = "destination-in", r.drawImage(t, 0, 0), r.restore(), n
        }, e._flip = function(t, n, r, i) {
            for (var s = t._images, o = e._workingCanvas, u = e._workingContext, f = s.length / n, l = 0; f > l; l++) {
                var c = s[l];
                c.__tmp = l, u.setTransform(1, 0, 0, 1, 0, 0), u.clearRect(0, 0, o.width + 1, o.height + 1), o.width = c.width, o.height = c.height, u.setTransform(r ? -1 : 1, 0, 0, i ? -1 : 1, r ? c.width : 0, i ? c.height : 0), u.drawImage(c, 0, 0);
                var h = new Image;
                h.src = o.toDataURL("image/png"), h.width = c.width, h.height = c.height, s.push(h)
            }
            var p = t._frames,
                d = p.length / n;
            for (l = 0; d > l; l++) {
                c = p[l];
                var v = c.rect.clone();
                h = s[c.image.__tmp + f * n];
                var m = {
                    image: h,
                    rect: v,
                    regX: c.regX,
                    regY: c.regY
                };
                r && (v.x = h.width - v.x - v.width, m.regX = v.width - c.regX), i && (v.y = h.height - v.y - v.height, m.regY = v.height - c.regY), p.push(m)
            }
            var g = "_" + (r ? "h" : "") + (i ? "v" : ""),
                y = t._animations,
                b = t._data,
                w = y.length / n;
            for (l = 0; w > l; l++) {
                var E = y[l];
                c = b[E];
                var S = {
                    name: E + g,
                    frequency: c.frequency,
                    next: c.next,
                    frames: []
                };
                c.next && (S.next += g), p = c.frames;
                for (var x = 0, T = p.length; T > x; x++) S.frames.push(p[x] + d * n);
                b[S.name] = S, y.push(S.name)
            }
        }, createjs.SpriteSheetUtils = e
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";
        var e = function() {
                this.initialize()
            },
            t = e.prototype = new createjs.EventDispatcher;
        e.ERR_DIMENSIONS = "frame dimensions exceed max spritesheet dimensions", e.ERR_RUNNING = "a build is already running", t.maxWidth = 2048, t.maxHeight = 2048, t.spriteSheet = null, t.scale = 1, t.padding = 1, t.timeSlice = .3, t.progress = -1, t._frames = null, t._animations = null, t._data = null, t._nextFrameIndex = 0, t._index = 0, t._timerID = null, t._scale = 1, t.initialize = function() {
            this._frames = [], this._animations = {}
        }, t.addFrame = function(t, n, r, i, s, o) {
            if (this._data) throw e.ERR_RUNNING;
            var u = n || t.bounds || t.nominalBounds;
            return !u && t.getBounds && (u = t.getBounds()), u ? (r = r || 1, this._frames.push({
                source: t,
                sourceRect: u,
                scale: r,
                funct: i,
                params: s,
                scope: o,
                index: this._frames.length,
                height: u.height * r
            }) - 1) : null
        }, t.addAnimation = function(t, n, r, i) {
            if (this._data) throw e.ERR_RUNNING;
            this._animations[t] = {
                frames: n,
                next: r,
                frequency: i
            }
        }, t.addMovieClip = function(t, n, r) {
            if (this._data) throw e.ERR_RUNNING;
            var i = t.frameBounds,
                s = n || t.bounds || t.nominalBounds;
            if (!s && t.getBounds && (s = t.getBounds()), !s && !i) return null;
            for (var o = this._frames.length, u = t.timeline.duration, f = 0; u > f; f++) {
                var l = i && i[f] ? i[f] : s;
                this.addFrame(t, l, r, function(e) {
                    var t = this.actionsEnabled;
                    this.actionsEnabled = !1, this.gotoAndStop(e), this.actionsEnabled = t
                }, [f], t)
            }
            var c = t.timeline._labels,
                h = [];
            for (var p in c) h.push({
                index: c[p],
                label: p
            });
            if (h.length) {
                h.sort(function(e, t) {
                    return e.index - t.index
                });
                for (var f = 0, d = h.length; d > f; f++) {
                    for (var v = h[f].label, m = o + h[f].index, g = o + (f == d - 1 ? u : h[f + 1].index), y = [], b = m; g > b; b++) y.push(b);
                    this.addAnimation(v, y, !0)
                }
            }
        }, t.build = function() {
            if (this._data) throw e.ERR_RUNNING;
            for (this._startBuild(); this._drawNext(););
            return this._endBuild(), this.spriteSheet
        }, t.buildAsync = function(t) {
            if (this._data) throw e.ERR_RUNNING;
            this.timeSlice = t, this._startBuild();
            var n = this;
            this._timerID = setTimeout(function() {
                n._run()
            }, 50 - 50 * Math.max(.01, Math.min(.99, this.timeSlice || .3)))
        }, t.stopAsync = function() {
            clearTimeout(this._timerID), this._data = null
        }, t.clone = function() {
            throw "SpriteSheetBuilder cannot be cloned."
        }, t.toString = function() {
            return "[SpriteSheetBuilder]"
        }, t._startBuild = function() {
            var t = this.padding || 0;
            this.progress = 0, this.spriteSheet = null, this._index = 0, this._scale = this.scale;
            var n = [];
            this._data = {
                images: [],
                frames: n,
                animations: this._animations
            };
            var r = this._frames.slice();
            if (r.sort(function(e, t) {
                return e.height <= t.height ? -1 : 1
            }), r[r.length - 1].height + 2 * t > this.maxHeight) throw e.ERR_DIMENSIONS;
            for (var i = 0, s = 0, o = 0; r.length;) {
                var u = this._fillRow(r, i, o, n, t);
                if (u.w > s && (s = u.w), i += u.h, !u.h || !r.length) {
                    var f = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas");
                    f.width = this._getSize(s, this.maxWidth), f.height = this._getSize(i, this.maxHeight), this._data.images[o] = f, u.h || (s = i = 0, o++)
                }
            }
        }, t._getSize = function(e, t) {
            for (var n = 4; Math.pow(2, ++n) < e;);
            return Math.min(t, Math.pow(2, n))
        }, t._fillRow = function(t, n, r, i, s) {
            var o = this.maxWidth,
                u = this.maxHeight;
            n += s;
            for (var f = u - n, l = s, c = 0, h = t.length - 1; h >= 0; h--) {
                var p = t[h],
                    d = this._scale * p.scale,
                    v = p.sourceRect,
                    m = p.source,
                    g = Math.floor(d * v.x - s),
                    y = Math.floor(d * v.y - s),
                    b = Math.ceil(d * v.height + 2 * s),
                    w = Math.ceil(d * v.width + 2 * s);
                if (w > o) throw e.ERR_DIMENSIONS;
                b > f || l + w > o || (p.img = r, p.rect = new createjs.Rectangle(l, n, w, b), c = c || b, t.splice(h, 1), i[p.index] = [l, n, w, b, r, Math.round(-g + d * m.regX - s), Math.round(-y + d * m.regY - s)], l += w)
            }
            return {
                w: l,
                h: c
            }
        }, t._endBuild = function() {
            this.spriteSheet = new createjs.SpriteSheet(this._data), this._data = null, this.progress = 1, this.dispatchEvent("complete")
        }, t._run = function() {
            for (var e = 50 * Math.max(.01, Math.min(.99, this.timeSlice || .3)), t = (new Date).getTime() + e, n = !1; t > (new Date).getTime();)
                if (!this._drawNext()) {
                    n = !0;
                    break
                }
            if (n) this._endBuild();
            else {
                var r = this;
                this._timerID = setTimeout(function() {
                    r._run()
                }, 50 - e)
            }
            var i = this.progress = this._index / this._frames.length;
            if (this.hasEventListener("progress")) {
                var s = new createjs.Event("progress");
                s.progress = i, this.dispatchEvent(s)
            }
        }, t._drawNext = function() {
            var e = this._frames[this._index],
                t = e.scale * this._scale,
                n = e.rect,
                r = e.sourceRect,
                i = this._data.images[e.img],
                s = i.getContext("2d");
            return e.funct && e.funct.apply(e.scope, e.params), s.save(), s.beginPath(), s.rect(n.x, n.y, n.width, n.height), s.clip(), s.translate(Math.ceil(n.x - r.x * t), Math.ceil(n.y - r.y * t)), s.scale(t, t), e.source.draw(s), s.restore(), ++this._index < this._frames.length
        }, createjs.SpriteSheetBuilder = e
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";
        var e = function(e) {
                this.initialize(e)
            },
            t = e.prototype = new createjs.DisplayObject;
        t.htmlElement = null, t._oldMtx = null, t._visible = !1, t.DisplayObject_initialize = t.initialize, t.initialize = function(e) {
            "string" == typeof e && (e = document.getElementById(e)), this.DisplayObject_initialize(), this.mouseEnabled = !1, this.htmlElement = e;
            var t = e.style;
            t.position = "absolute", t.transformOrigin = t.WebkitTransformOrigin = t.msTransformOrigin = t.MozTransformOrigin = t.OTransformOrigin = "0% 0%"
        }, t.isVisible = function() {
            return null != this.htmlElement
        }, t.draw = function() {
            return this.visible && (this._visible = !0), !0
        }, t.cache = function() {}, t.uncache = function() {}, t.updateCache = function() {}, t.hitTest = function() {}, t.localToGlobal = function() {}, t.globalToLocal = function() {}, t.localToLocal = function() {}, t.clone = function() {
            throw "DOMElement cannot be cloned."
        }, t.toString = function() {
            return "[DOMElement (name=" + this.name + ")]"
        }, t.DisplayObject__tick = t._tick, t._tick = function(e) {
            var t = this.getStage();
            this._visible = !1, t && t.on("drawend", this._handleDrawEnd, this, !0), this.DisplayObject__tick(e)
        }, t._handleDrawEnd = function() {
            var e = this.htmlElement;
            if (e) {
                var t = e.style,
                    n = this._visible ? "visible" : "hidden";
                if (n != t.visibility && (t.visibility = n), this._visible) {
                    var r = this.getConcatenatedMatrix(this._matrix),
                        i = this._oldMtx,
                        s = 1e4;
                    if (i && i.alpha == r.alpha || (t.opacity = "" + (0 | r.alpha * s) / s, i && (i.alpha = r.alpha)), !i || i.tx != r.tx || i.ty != r.ty || i.a != r.a || i.b != r.b || i.c != r.c || i.d != r.d) {
                        var o = "matrix(" + (0 | r.a * s) / s + "," + (0 | r.b * s) / s + "," + (0 | r.c * s) / s + "," + (0 | r.d * s) / s + "," + (0 | r.tx + .5);
                        t.transform = t.WebkitTransform = t.OTransform = t.msTransform = o + "," + (0 | r.ty + .5) + ")", t.MozTransform = o + "px," + (0 | r.ty + .5) + "px)", this._oldMtx = i ? i.copy(r) : r.clone()
                    }
                }
            }
        }, createjs.DOMElement = e
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";
        var e = function() {
                this.initialize()
            },
            t = e.prototype;
        t.initialize = function() {}, t.getBounds = function() {
            return null
        }, t.applyFilter = function() {}, t.toString = function() {
            return "[Filter]"
        }, t.clone = function() {
            return new e
        }, createjs.Filter = e
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";
        var e = function(e, t, n) {
                this.initialize(e, t, n)
            },
            t = e.prototype = new createjs.Filter;
        t.initialize = function(e, t, n) {
            (isNaN(e) || 0 > e) && (e = 0), this.blurX = 0 | e, (isNaN(t) || 0 > t) && (t = 0), this.blurY = 0 | t, (isNaN(n) || 1 > n) && (n = 1), this.quality = 0 | n
        }, t.blurX = 0, t.blurY = 0, t.quality = 1, t.mul_table = [1, 171, 205, 293, 57, 373, 79, 137, 241, 27, 391, 357, 41, 19, 283, 265, 497, 469, 443, 421, 25, 191, 365, 349, 335, 161, 155, 149, 9, 278, 269, 261, 505, 245, 475, 231, 449, 437, 213, 415, 405, 395, 193, 377, 369, 361, 353, 345, 169, 331, 325, 319, 313, 307, 301, 37, 145, 285, 281, 69, 271, 267, 263, 259, 509, 501, 493, 243, 479, 118, 465, 459, 113, 446, 55, 435, 429, 423, 209, 413, 51, 403, 199, 393, 97, 3, 379, 375, 371, 367, 363, 359, 355, 351, 347, 43, 85, 337, 333, 165, 327, 323, 5, 317, 157, 311, 77, 305, 303, 75, 297, 294, 73, 289, 287, 71, 141, 279, 277, 275, 68, 135, 67, 133, 33, 262, 260, 129, 511, 507, 503, 499, 495, 491, 61, 121, 481, 477, 237, 235, 467, 232, 115, 457, 227, 451, 7, 445, 221, 439, 218, 433, 215, 427, 425, 211, 419, 417, 207, 411, 409, 203, 202, 401, 399, 396, 197, 49, 389, 387, 385, 383, 95, 189, 47, 187, 93, 185, 23, 183, 91, 181, 45, 179, 89, 177, 11, 175, 87, 173, 345, 343, 341, 339, 337, 21, 167, 83, 331, 329, 327, 163, 81, 323, 321, 319, 159, 79, 315, 313, 39, 155, 309, 307, 153, 305, 303, 151, 75, 299, 149, 37, 295, 147, 73, 291, 145, 289, 287, 143, 285, 71, 141, 281, 35, 279, 139, 69, 275, 137, 273, 17, 271, 135, 269, 267, 133, 265, 33, 263, 131, 261, 130, 259, 129, 257, 1], t.shg_table = [0, 9, 10, 11, 9, 12, 10, 11, 12, 9, 13, 13, 10, 9, 13, 13, 14, 14, 14, 14, 10, 13, 14, 14, 14, 13, 13, 13, 9, 14, 14, 14, 15, 14, 15, 14, 15, 15, 14, 15, 15, 15, 14, 15, 15, 15, 15, 15, 14, 15, 15, 15, 15, 15, 15, 12, 14, 15, 15, 13, 15, 15, 15, 15, 16, 16, 16, 15, 16, 14, 16, 16, 14, 16, 13, 16, 16, 16, 15, 16, 13, 16, 15, 16, 14, 9, 16, 16, 16, 16, 16, 16, 16, 16, 16, 13, 14, 16, 16, 15, 16, 16, 10, 16, 15, 16, 14, 16, 16, 14, 16, 16, 14, 16, 16, 14, 15, 16, 16, 16, 14, 15, 14, 15, 13, 16, 16, 15, 17, 17, 17, 17, 17, 17, 14, 15, 17, 17, 16, 16, 17, 16, 15, 17, 16, 17, 11, 17, 16, 17, 16, 17, 16, 17, 17, 16, 17, 17, 16, 17, 17, 16, 16, 17, 17, 17, 16, 14, 17, 17, 17, 17, 15, 16, 14, 16, 15, 16, 13, 16, 15, 16, 14, 16, 15, 16, 12, 16, 15, 16, 17, 17, 17, 17, 17, 13, 16, 15, 17, 17, 17, 16, 15, 17, 17, 17, 16, 15, 17, 17, 14, 16, 17, 17, 16, 17, 17, 16, 15, 17, 16, 14, 17, 16, 15, 17, 16, 17, 17, 16, 17, 15, 16, 17, 14, 17, 16, 15, 17, 16, 17, 13, 17, 16, 17, 17, 16, 17, 14, 17, 16, 17, 16, 17, 16, 17, 9], t.getBounds = function() {
            var e = .5 * Math.pow(this.quality, .6);
            return new createjs.Rectangle(-this.blurX * e, -this.blurY * e, 2 * this.blurX * e, 2 * this.blurY * e)
        }, t.applyFilter = function(e, t, n, r, i, s, o, u) {
            s = s || e, null == o && (o = t), null == u && (u = n);
            try {
                var a = e.getImageData(t, n, r, i)
            } catch (f) {
                return !1
            }
            var l = this.blurX / 2;
            if (isNaN(l) || 0 > l) return !1;
            l |= 0;
            var c = this.blurY / 2;
            if (isNaN(c) || 0 > c) return !1;
            if (c |= 0, 0 == l && 0 == c) return !1;
            var h = this.quality;
            (isNaN(h) || 1 > h) && (h = 1), h |= 0, h > 3 && (h = 3), 1 > h && (h = 1);
            var t, n, p, d, v, m, g, y, b, w, E, S, x, T, N, C = a.data,
                k = l + l + 1,
                L = c + c + 1,
                A = r - 1,
                O = i - 1,
                M = l + 1,
                _ = c + 1,
                D = {
                    r: 0,
                    b: 0,
                    g: 0,
                    a: 0,
                    next: null
                },
                P = D;
            for (p = 1; k > p; p++) P = P.next = {
                r: 0,
                b: 0,
                g: 0,
                a: 0,
                next: null
            };
            P.next = D;
            var H = {
                    r: 0,
                    b: 0,
                    g: 0,
                    a: 0,
                    next: null
                },
                B = H;
            for (p = 1; L > p; p++) B = B.next = {
                r: 0,
                b: 0,
                g: 0,
                a: 0,
                next: null
            };
            B.next = H;
            for (var j = null; h-- > 0;) {
                g = m = 0;
                var F = this.mul_table[l],
                    I = this.shg_table[l];
                for (n = i; --n > -1;) {
                    for (y = M * (S = C[m]), b = M * (x = C[m + 1]), w = M * (T = C[m + 2]), E = M * (N = C[m + 3]), P = D, p = M; --p > -1;) P.r = S, P.g = x, P.b = T, P.a = N, P = P.next;
                    for (p = 1; M > p; p++) d = m + ((p > A ? A : p) << 2), y += P.r = C[d], b += P.g = C[d + 1], w += P.b = C[d + 2], E += P.a = C[d + 3], P = P.next;
                    for (j = D, t = 0; r > t; t++) C[m++] = y * F >>> I, C[m++] = b * F >>> I, C[m++] = w * F >>> I, C[m++] = E * F >>> I, d = g + ((d = t + l + 1) < A ? d : A) << 2, y -= j.r - (j.r = C[d]), b -= j.g - (j.g = C[d + 1]), w -= j.b - (j.b = C[d + 2]), E -= j.a - (j.a = C[d + 3]), j = j.next;
                    g += r
                }
                for (F = this.mul_table[c], I = this.shg_table[c], t = 0; r > t; t++) {
                    for (m = t << 2, y = _ * (S = C[m]), b = _ * (x = C[m + 1]), w = _ * (T = C[m + 2]), E = _ * (N = C[m + 3]), B = H, p = 0; _ > p; p++) B.r = S, B.g = x, B.b = T, B.a = N, B = B.next;
                    for (v = r, p = 1; c >= p; p++) m = v + t << 2, y += B.r = C[m], b += B.g = C[m + 1], w += B.b = C[m + 2], E += B.a = C[m + 3], B = B.next, O > p && (v += r);
                    if (m = t, j = H, h > 0)
                        for (n = 0; i > n; n++) d = m << 2, C[d + 3] = N = E * F >>> I, N > 0 ? (C[d] = y * F >>> I, C[d + 1] = b * F >>> I, C[d + 2] = w * F >>> I) : C[d] = C[d + 1] = C[d + 2] = 0, d = t + ((d = n + _) < O ? d : O) * r << 2, y -= j.r - (j.r = C[d]), b -= j.g - (j.g = C[d + 1]), w -= j.b - (j.b = C[d + 2]), E -= j.a - (j.a = C[d + 3]), j = j.next, m += r;
                    else
                        for (n = 0; i > n; n++) d = m << 2, C[d + 3] = N = E * F >>> I, N > 0 ? (N = 255 / N, C[d] = (y * F >>> I) * N, C[d + 1] = (b * F >>> I) * N, C[d + 2] = (w * F >>> I) * N) : C[d] = C[d + 1] = C[d + 2] = 0, d = t + ((d = n + _) < O ? d : O) * r << 2, y -= j.r - (j.r = C[d]), b -= j.g - (j.g = C[d + 1]), w -= j.b - (j.b = C[d + 2]), E -= j.a - (j.a = C[d + 3]), j = j.next, m += r
                }
            }
            return s.putImageData(a, o, u), !0
        }, t.clone = function() {
            return new e(this.blurX, this.blurY, this.quality)
        }, t.toString = function() {
            return "[BlurFilter]"
        }, createjs.BlurFilter = e
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";
        var e = function(e) {
                this.initialize(e)
            },
            t = e.prototype = new createjs.Filter;
        t.initialize = function(e) {
            this.alphaMap = e
        }, t.alphaMap = null, t._alphaMap = null, t._mapData = null, t.applyFilter = function(e, t, n, r, i, s, o, u) {
            if (!this.alphaMap) return !0;
            if (!this._prepAlphaMap()) return !1;
            s = s || e, null == o && (o = t), null == u && (u = n);
            try {
                var a = e.getImageData(t, n, r, i)
            } catch (f) {
                return !1
            }
            for (var l = a.data, c = this._mapData, h = l.length, p = 0; h > p; p += 4) l[p + 3] = c[p] || 0;
            return a.data = l, s.putImageData(a, o, u), !0
        }, t.clone = function() {
            return new e(this.alphaMap)
        }, t.toString = function() {
            return "[AlphaMapFilter]"
        }, t._prepAlphaMap = function() {
            if (!this.alphaMap) return !1;
            if (this.alphaMap == this._alphaMap && this._mapData) return !0;
            this._mapData = null;
            var e, t = this._alphaMap = this.alphaMap,
                n = t;
            t instanceof HTMLCanvasElement ? e = n.getContext("2d") : (n = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas"), n.width = t.width, n.height = t.height, e = n.getContext("2d"), e.drawImage(t, 0, 0));
            try {
                var r = e.getImageData(0, 0, t.width, t.height)
            } catch (i) {
                return !1
            }
            return this._mapData = r.data, !0
        }, createjs.AlphaMapFilter = e
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";
        var e = function(e) {
                this.initialize(e)
            },
            t = e.prototype = new createjs.Filter;
        t.initialize = function(e) {
            this.mask = e
        }, t.mask = null, t.applyFilter = function(e, t, n, r, i, s, o, u) {
            return this.mask ? (s = s || e, null == o && (o = t), null == u && (u = n), s.save(), s.globalCompositeOperation = "destination-in", s.drawImage(this.mask, o, u), s.restore(), !0) : !0
        }, t.clone = function() {
            return new e(this.mask)
        }, t.toString = function() {
            return "[AlphaMaskFilter]"
        }, createjs.AlphaMaskFilter = e
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";
        var e = function(e, t, n, r, i, s, o, u) {
                this.initialize(e, t, n, r, i, s, o, u)
            },
            t = e.prototype = new createjs.Filter;
        t.
        redMultiplier = 1, t.greenMultiplier = 1, t.blueMultiplier = 1, t.alphaMultiplier = 1, t.redOffset = 0, t.greenOffset = 0, t.blueOffset = 0, t.alphaOffset = 0, t.initialize = function(e, t, n, r, i, s, o, u) {
            this.redMultiplier = null != e ? e : 1, this.greenMultiplier = null != t ? t : 1, this.blueMultiplier = null != n ? n : 1, this.alphaMultiplier = null != r ? r : 1, this.redOffset = i || 0, this.greenOffset = s || 0, this.blueOffset = o || 0, this.alphaOffset = u || 0
        }, t.applyFilter = function(e, t, n, r, i, s, o, u) {
            s = s || e, null == o && (o = t), null == u && (u = n);
            try {
                var a = e.getImageData(t, n, r, i)
            } catch (f) {
                return !1
            }
            for (var l = a.data, c = l.length, h = 0; c > h; h += 4) l[h] = l[h] * this.redMultiplier + this.redOffset, l[h + 1] = l[h + 1] * this.greenMultiplier + this.greenOffset, l[h + 2] = l[h + 2] * this.blueMultiplier + this.blueOffset, l[h + 3] = l[h + 3] * this.alphaMultiplier + this.alphaOffset;
            return s.putImageData(a, o, u), !0
        }, t.toString = function() {
            return "[ColorFilter]"
        }, t.clone = function() {
            return new e(this.redMultiplier, this.greenMultiplier, this.blueMultiplier, this.alphaMultiplier, this.redOffset, this.greenOffset, this.blueOffset, this.alphaOffset)
        }, createjs.ColorFilter = e
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";
        var e = function(e, t, n, r) {
                this.initialize(e, t, n, r)
            },
            t = e.prototype = [];
        e.DELTA_INDEX = [0, .01, .02, .04, .05, .06, .07, .08, .1, .11, .12, .14, .15, .16, .17, .18, .2, .21, .22, .24, .25, .27, .28, .3, .32, .34, .36, .38, .4, .42, .44, .46, .48, .5, .53, .56, .59, .62, .65, .68, .71, .74, .77, .8, .83, .86, .89, .92, .95, .98, 1, 1.06, 1.12, 1.18, 1.24, 1.3, 1.36, 1.42, 1.48, 1.54, 1.6, 1.66, 1.72, 1.78, 1.84, 1.9, 1.96, 2, 2.12, 2.25, 2.37, 2.5, 2.62, 2.75, 2.87, 3, 3.2, 3.4, 3.6, 3.8, 4, 4.3, 4.7, 4.9, 5, 5.5, 6, 6.5, 6.8, 7, 7.3, 7.5, 7.8, 8, 8.4, 8.7, 9, 9.4, 9.6, 9.8, 10], e.IDENTITY_MATRIX = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1], e.LENGTH = e.IDENTITY_MATRIX.length, t.initialize = function(e, t, n, r) {
            return this.reset(), this.adjustColor(e, t, n, r), this
        }, t.reset = function() {
            return this.copyMatrix(e.IDENTITY_MATRIX)
        }, t.adjustColor = function(e, t, n, r) {
            return this.adjustHue(r), this.adjustContrast(t), this.adjustBrightness(e), this.adjustSaturation(n)
        }, t.adjustBrightness = function(e) {
            return 0 == e || isNaN(e) ? this : (e = this._cleanValue(e, 255), this._multiplyMatrix([1, 0, 0, 0, e, 0, 1, 0, 0, e, 0, 0, 1, 0, e, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1]), this)
        }, t.adjustContrast = function(t) {
            if (0 == t || isNaN(t)) return this;
            t = this._cleanValue(t, 100);
            var n;
            return 0 > t ? n = 127 + 127 * (t / 100) : (n = t % 1, n = 0 == n ? e.DELTA_INDEX[t] : e.DELTA_INDEX[t << 0] * (1 - n) + e.DELTA_INDEX[(t << 0) + 1] * n, n = 127 * n + 127), this._multiplyMatrix([n / 127, 0, 0, 0, .5 * (127 - n), 0, n / 127, 0, 0, .5 * (127 - n), 0, 0, n / 127, 0, .5 * (127 - n), 0, 0, 0, 1, 0, 0, 0, 0, 0, 1]), this
        }, t.adjustSaturation = function(e) {
            if (0 == e || isNaN(e)) return this;
            e = this._cleanValue(e, 100);
            var t = 1 + (e > 0 ? 3 * e / 100 : e / 100),
                n = .3086,
                r = .6094,
                i = .082;
            return this._multiplyMatrix([n * (1 - t) + t, r * (1 - t), i * (1 - t), 0, 0, n * (1 - t), r * (1 - t) + t, i * (1 - t), 0, 0, n * (1 - t), r * (1 - t), i * (1 - t) + t, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1]), this
        }, t.adjustHue = function(e) {
            if (0 == e || isNaN(e)) return this;
            e = this._cleanValue(e, 180) / 180 * Math.PI;
            var t = Math.cos(e),
                n = Math.sin(e),
                r = .213,
                i = .715,
                s = .072;
            return this._multiplyMatrix([r + t * (1 - r) + n * -r, i + t * -i + n * -i, s + t * -s + n * (1 - s), 0, 0, r + t * -r + .143 * n, i + t * (1 - i) + .14 * n, s + t * -s + n * -0.283, 0, 0, r + t * -r + n * -(1 - r), i + t * -i + n * i, s + t * (1 - s) + n * s, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1]), this
        }, t.concat = function(t) {
            return t = this._fixMatrix(t), t.length != e.LENGTH ? this : (this._multiplyMatrix(t), this)
        }, t.clone = function() {
            return new e(this)
        }, t.toArray = function() {
            return this.slice(0, e.LENGTH)
        }, t.copyMatrix = function(t) {
            for (var n = e.LENGTH, r = 0; n > r; r++) this[r] = t[r];
            return this
        }, t._multiplyMatrix = function(e) {
            for (var t = [], n = 0; 5 > n; n++) {
                for (var r = 0; 5 > r; r++) t[r] = this[r + 5 * n];
                for (var r = 0; 5 > r; r++) {
                    for (var i = 0, s = 0; 5 > s; s++) i += e[r + 5 * s] * t[s];
                    this[r + 5 * n] = i
                }
            }
        }, t._cleanValue = function(e, t) {
            return Math.min(t, Math.max(-t, e))
        }, t._fixMatrix = function(t) {
            return t instanceof e && (t = t.slice(0)), t.length < e.LENGTH ? t = t.slice(0, t.length).concat(e.IDENTITY_MATRIX.slice(t.length, e.LENGTH)) : t.length > e.LENGTH && (t = t.slice(0, e.LENGTH)), t
        }, createjs.ColorMatrix = e
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";
        var e = function(e) {
                this.initialize(e)
            },
            t = e.prototype = new createjs.Filter;
        t.matrix = null, t.initialize = function(e) {
            this.matrix = e
        }, t.applyFilter = function(e, t, n, r, i, s, o, u) {
            s = s || e, null == o && (o = t), null == u && (u = n);
            try {
                var a = e.getImageData(t, n, r, i)
            } catch (f) {
                return !1
            }
            for (var l, c, h, p, d = a.data, v = d.length, m = this.matrix, g = m[0], y = m[1], b = m[2], w = m[3], E = m[4], S = m[5], x = m[6], T = m[7], N = m[8], C = m[9], k = m[10], L = m[11], A = m[12], O = m[13], M = m[14], _ = m[15], D = m[16], P = m[17], H = m[18], B = m[19], j = 0; v > j; j += 4) l = d[j], c = d[j + 1], h = d[j + 2], p = d[j + 3], d[j] = l * g + c * y + h * b + p * w + E, d[j + 1] = l * S + c * x + h * T + p * N + C, d[j + 2] = l * k + c * L + h * A + p * O + M, d[j + 3] = l * _ + c * D + h * P + p * H + B;
            return s.putImageData(a, o, u), !0
        }, t.toString = function() {
            return "[ColorMatrixFilter]"
        }, t.clone = function() {
            return new e(this.matrix)
        }, createjs.ColorMatrixFilter = e
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";
        var e = function() {
            throw "Touch cannot be instantiated"
        };
        e.isSupported = function() {
            return "ontouchstart" in window || window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints > 0
        }, e.enable = function(t, n, r) {
            return t && t.canvas && e.isSupported() ? (t.__touch = {
                pointers: {},
                multitouch: !n,
                preventDefault: !r,
                count: 0
            }, "ontouchstart" in window ? e._IOS_enable(t) : window.navigator.msPointerEnabled && e._IE_enable(t), !0) : !1
        }, e.disable = function(t) {
            t && ("ontouchstart" in window ? e._IOS_disable(t) : window.navigator.msPointerEnabled && e._IE_disable(t))
        }, e._IOS_enable = function(t) {
            var n = t.canvas,
                r = t.__touch.f = function(n) {
                    e._IOS_handleEvent(t, n)
                };
            n.addEventListener("touchstart", r, !1), n.addEventListener("touchmove", r, !1), n.addEventListener("touchend", r, !1), n.addEventListener("touchcancel", r, !1)
        }, e._IOS_disable = function(e) {
            var t = e.canvas;
            if (t) {
                var n = e.__touch.f;
                t.removeEventListener("touchstart", n, !1), t.removeEventListener("touchmove", n, !1), t.removeEventListener("touchend", n, !1), t.removeEventListener("touchcancel", n, !1)
            }
        }, e._IOS_handleEvent = function(e, t) {
            if (e) {
                e.__touch.preventDefault && t.preventDefault && t.preventDefault();
                for (var n = t.changedTouches, r = t.type, i = 0, s = n.length; s > i; i++) {
                    var o = n[i],
                        u = o.identifier;
                    o.target == e.canvas && ("touchstart" == r ? this._handleStart(e, u, t, o.pageX, o.pageY) : "touchmove" == r ? this._handleMove(e, u, t, o.pageX, o.pageY) : ("touchend" == r || "touchcancel" == r) && this._handleEnd(e, u, t))
                }
            }
        }, e._IE_enable = function(t) {
            var n = t.canvas,
                r = t.__touch.f = function(n) {
                    e._IE_handleEvent(t, n)
                };
            n.addEventListener("MSPointerDown", r, !1), window.addEventListener("MSPointerMove", r, !1), window.addEventListener("MSPointerUp", r, !1), window.addEventListener("MSPointerCancel", r, !1), t.__touch.preventDefault && (n.style.msTouchAction = "none"), t.__touch.activeIDs = {}
        }, e._IE_disable = function(e) {
            var t = e.__touch.f;
            window.removeEventListener("MSPointerMove", t, !1), window.removeEventListener("MSPointerUp", t, !1), window.removeEventListener("MSPointerCancel", t, !1), e.canvas && e.canvas.removeEventListener("MSPointerDown", t, !1)
        }, e._IE_handleEvent = function(e, t) {
            if (e) {
                e.__touch.preventDefault && t.preventDefault && t.preventDefault();
                var n = t.type,
                    r = t.pointerId,
                    i = e.__touch.activeIDs;
                if ("MSPointerDown" == n) {
                    if (t.srcElement != e.canvas) return;
                    i[r] = !0, this._handleStart(e, r, t, t.pageX, t.pageY)
                } else i[r] && ("MSPointerMove" == n ? this._handleMove(e, r, t, t.pageX, t.pageY) : ("MSPointerUp" == n || "MSPointerCancel" == n) && (delete i[r], this._handleEnd(e, r, t)))
            }
        }, e._handleStart = function(e, t, n, r, i) {
            var s = e.__touch;
            if (s.multitouch || !s.count) {
                var o = s.pointers;
                o[t] || (o[t] = !0, s.count++, e._handlePointerDown(t, n, r, i))
            }
        }, e._handleMove = function(e, t, n, r, i) {
            e.__touch.pointers[t] && e._handlePointerMove(t, n, r, i)
        }, e._handleEnd = function(e, t, n) {
            var r = e.__touch,
                i = r.pointers;
            i[t] && (r.count--, e._handlePointerUp(t, n, !0), delete i[t])
        }, createjs.Touch = e
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";
        var e = createjs.EaselJS = createjs.EaselJS || {};
        e.version = "NEXT", e.buildDate = "Tue, 01 Oct 2013 16:03:38 GMT"
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";
        var e = createjs.PreloadJS = createjs.PreloadJS || {};
        e.version = "NEXT", e.buildDate = "Tue, 01 Oct 2013 16:03:38 GMT"
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";
        createjs.proxy = function(e, t) {
            var n = Array.prototype.slice.call(arguments, 2);
            return function() {
                return e.apply(t, Array.prototype.slice.call(arguments, 0).concat(n))
            }
        }
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";
        var e = function() {
            this.init()
        };
        e.prototype = {};
        var t = e.prototype,
            n = e;
        n.FILE_PATTERN = /^(?:(\w+:)\/{2}(\w+(?:\.\w+)*\/?))?([/.]*?(?:[^?]+)?\/)?((?:[^/?]+)\.(\w+))(?:\?(\S+)?)?$/, t.loaded = !1, t.canceled = !1, t.progress = 0, t._item = null, t._basePath = null, t.addEventListener = null, t.removeEventListener = null, t.removeAllEventListeners = null, t.dispatchEvent = null, t.hasEventListener = null, t._listeners = null, createjs.EventDispatcher.initialize(t), t.getItem = function() {
            return this._item
        }, t.init = function() {}, t.load = function() {}, t.close = function() {}, t._sendLoadStart = function() {
            this._isCanceled() || this.dispatchEvent("loadstart")
        }, t._sendProgress = function(e) {
            if (!this._isCanceled()) {
                var t = null;
                "number" == typeof e ? (this.progress = e, t = new createjs.Event("progress"), t.loaded = this.progress, t.total = 1) : (t = e, this.progress = e.loaded / e.total, (isNaN(this.progress) || 1 / 0 == this.progress) && (this.progress = 0)), t.progress = this.progress, this.hasEventListener("progress") && this.dispatchEvent(t)
            }
        }, t._sendComplete = function() {
            this._isCanceled() || this.dispatchEvent("complete")
        }, t._sendError = function(e) {
            !this._isCanceled() && this.hasEventListener("error") && (null == e && (e = new createjs.Event("error")), this.dispatchEvent(e))
        }, t._isCanceled = function() {
            return null == window.createjs || this.canceled ? !0 : !1
        }, t._parseURI = function(e) {
            return e ? e.match(n.FILE_PATTERN) : null
        }, t._formatQueryString = function(e, t) {
            if (null == e) throw new Error("You must specify data.");
            var n = [];
            for (var r in e) n.push(r + "=" + escape(e[r]));
            return t && (n = n.concat(t)), n.join("&")
        }, t.buildPath = function(e, t, n) {
            if (null != t) {
                var r = this._parseURI(e);
                (null == r || null == r[1] || "" == r[1]) && (e = t + e)
            }
            if (null == n) return e;
            var i = [],
                s = e.indexOf("?");
            if (-1 != s) {
                var o = e.slice(s + 1);
                i = i.concat(o.split("&"))
            }
            return -1 != s ? e.slice(0, s) + "?" + this._formatQueryString(n, i) : e + "?" + this._formatQueryString(n, i)
        }, t.toString = function() {
            return "[PreloadJS AbstractLoader]"
        }, createjs.AbstractLoader = e
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";
        var e = function(e, t) {
                this.init(e, t)
            },
            t = e.prototype = new createjs.AbstractLoader,
            n = e;
        n.LOAD_TIMEOUT = 8e3, n.BINARY = "binary", n.CSS = "css", n.IMAGE = "image", n.JAVASCRIPT = "javascript", n.JSON = "json", n.JSONP = "jsonp", n.SOUND = "sound", n.SVG = "svg", n.TEXT = "text", n.XML = "xml", n.POST = "POST", n.GET = "GET", t.useXHR = !0, t.stopOnError = !1, t.maintainScriptOrder = !0, t.next = null, t._typeCallbacks = null, t._extensionCallbacks = null, t._loadStartWasDispatched = !1, t._maxConnections = 1, t._currentlyLoadingScript = null, t._currentLoads = null, t._loadQueue = null, t._loadQueueBackup = null, t._loadItemsById = null, t._loadItemsBySrc = null, t._loadedResults = null, t._loadedRawResults = null, t._numItems = 0, t._numItemsLoaded = 0, t._scriptOrder = null, t._loadedScripts = null, t.init = function(e, t) {
            this._numItems = this._numItemsLoaded = 0, this._paused = !1, this._loadStartWasDispatched = !1, this._currentLoads = [], this._loadQueue = [], this._loadQueueBackup = [], this._scriptOrder = [], this._loadedScripts = [], this._loadItemsById = {}, this._loadItemsBySrc = {}, this._loadedResults = {}, this._loadedRawResults = {}, this._typeCallbacks = {}, this._extensionCallbacks = {}, this._basePath = t, this.setUseXHR(e)
        }, t.setUseXHR = function(e) {
            return this.useXHR = 0 != e && null != window.XMLHttpRequest, this.useXHR
        }, t.removeAll = function() {
            this.remove()
        }, t.remove = function(e) {
            var t = null;
            if (!e || e instanceof Array) {
                if (e) t = e;
                else if (arguments.length > 0) return
            } else t = [e];
            var n = !1;
            if (t) {
                for (; t.length;) {
                    var r = t.pop(),
                        i = this.getResult(r);
                    for (s = this._loadQueue.length - 1; s >= 0; s--)
                        if (o = this._loadQueue[s].getItem(), o.id == r || o.src == r) {
                            this._loadQueue.splice(s, 1)[0].cancel();
                            break
                        }
                    for (s = this._loadQueueBackup.length - 1; s >= 0; s--)
                        if (o = this._loadQueueBackup[s].getItem(), o.id == r || o.src == r) {
                            this._loadQueueBackup.splice(s, 1)[0].cancel();
                            break
                        }
                    if (i) delete this._loadItemsById[i.id], delete this._loadItemsBySrc[i.src], this._disposeItem(i);
                    else
                        for (var s = this._currentLoads.length - 1; s >= 0; s--) {
                            var o = this._currentLoads[s].getItem();
                            if (o.id == r || o.src == r) {
                                this._currentLoads.splice(s, 1)[0].cancel(), n = !0;
                                break
                            }
                        }
                }
                n && this._loadNext()
            } else {
                this.close();
                for (var u in this._loadItemsById) this._disposeItem(this._loadItemsById[u]);
                this.init(this.useXHR)
            }
        }, t.reset = function() {
            this.close();
            for (var e in this._loadItemsById) this._disposeItem(this._loadItemsById[e]);
            var t = [];
            for (i = 0, l = this._loadQueueBackup.length; l > i; i++) t.push(this._loadQueueBackup[i].getItem());
            this.loadManifest(t, !1)
        }, n.isBinary = function(e) {
            switch (e) {
                case createjs.LoadQueue.IMAGE:
                case createjs.LoadQueue.BINARY:
                    return !0;
                default:
                    return !1
            }
        }, t.installPlugin = function(e) {
            if (null != e && null != e.getPreloadHandlers) {
                var t = e.getPreloadHandlers();
                if (null != t.types)
                    for (var n = 0, r = t.types.length; r > n; n++) this._typeCallbacks[t.types[n]] = t.callback;
                if (null != t.extensions)
                    for (n = 0, r = t.extensions.length; r > n; n++) this._extensionCallbacks[t.extensions[n]] = t.callback
            }
        }, t.setMaxConnections = function(e) {
            this._maxConnections = e, !this._paused && this._loadQueue.length > 0 && this._loadNext()
        }, t.loadFile = function(e, t, n) {
            if (null == e) {
                var r = new createjs.Event("error");
                return r.text = "PRELOAD_NO_FILE", this._sendError(r), void 0
            }
            this._addItem(e, n), t !== !1 ? this.setPaused(!1) : this.setPaused(!0)
        }, t.loadManifest = function(e, t, n) {
            var r = null;
            if (e instanceof Array) {
                if (0 == e.length) {
                    var i = new createjs.Event("error");
                    return i.text = "PRELOAD_MANIFEST_EMPTY", this._sendError(i), void 0
                }
                r = e
            } else {
                if (null == e) {
                    var i = new createjs.Event("error");
                    return i.text = "PRELOAD_MANIFEST_NULL", this._sendError(i), void 0
                }
                r = [e]
            }
            for (var s = 0, o = r.length; o > s; s++) this._addItem(r[s], n);
            t !== !1 ? this.setPaused(!1) : this.setPaused(!0)
        }, t.load = function() {
            this.setPaused(!1)
        }, t.getItem = function(e) {
            return this._loadItemsById[e] || this._loadItemsBySrc[e]
        }, t.getResult = function(e, t) {
            var n = this._loadItemsById[e] || this._loadItemsBySrc[e];
            if (null == n) return null;
            var r = n.id;
            return t && this._loadedRawResults[r] ? this._loadedRawResults[r] : this._loadedResults[r]
        }, t.setPaused = function(e) {
            this._paused = e, this._paused || this._loadNext()
        }, t.close = function() {
            for (; this._currentLoads.length;) this._currentLoads.pop().cancel();
            this._scriptOrder.length = 0, this._loadedScripts.length = 0, this.loadStartWasDispatched = !1
        }, t._addItem = function(e, t) {
            var n = this._createLoadItem(e);
            if (null != n) {
                var r = this._createLoader(n, t);
                null != r && (this._loadQueue.push(r), this._loadQueueBackup.push(r), this._numItems++, this._updateProgress(), this.maintainScriptOrder && n.type == createjs.LoadQueue.JAVASCRIPT && r instanceof createjs.XHRLoader && (this._scriptOrder.push(n), this._loadedScripts.push(null)))
            }
        }, t._createLoadItem = function(e) {
            var t = null;
            switch (typeof e) {
                case "string":
                    t = {
                        src: e
                    };
                    break;
                case "object":
                    t = window.HTMLAudioElement && e instanceof HTMLAudioElement ? {
                        tag: e,
                        src: t.tag.src,
                        type: createjs.LoadQueue.SOUND
                    } : e;
                    break;
                default:
                    return null
            }
            var n = this._parseURI(t.src);
            if (null != n && (t.ext = n[5]), null == t.type && (t.type = this._getTypeByExtension(t.ext)), t.type == createjs.LoadQueue.JSON && null != t.callback && (t.type = createjs.LoadQueue.JSONP), t.type == createjs.LoadQueue.JSONP && null == t.callback) throw new Error("callback is required for loading JSONP requests.");
            null == t.tag && (t.tag = this._createTag(t.type)), (null == t.id || "" == t.id) && (t.id = t.src);
            var r = this._typeCallbacks[t.type] || this._extensionCallbacks[t.ext];
            if (r) {
                var i = r(t.src, t.type, t.id, t.data);
                if (i === !1) return null;
                i === !0 || (null != i.src && (t.src = i.src), null != i.id && (t.id = i.id), null != i.tag && i.tag.load instanceof Function && (t.tag = i.tag), null != i.completeHandler && (t.completeHandler = i.completeHandler)), i.type && (t.type = i.type), n = this._parseURI(t.src), null != n && null != n[5] && (t.ext = n[5].toLowerCase())
            }
            return this._loadItemsById[t.id] = t, this._loadItemsBySrc[t.src] = t, t
        }, t._createLoader = function(e, t) {
            var n = this.useXHR;
            switch (e.type) {
                case createjs.LoadQueue.JSON:
                case createjs.LoadQueue.XML:
                case createjs.LoadQueue.TEXT:
                    n = !0;
                    break;
                case createjs.LoadQueue.SOUND:
                case createjs.LoadQueue.JSONP:
                    n = !1;
                    break;
                case null:
                    return null
            }
            return null == t && (t = this._basePath), n ? new createjs.XHRLoader(e, t) : new createjs.TagLoader(e, t)
        }, t._loadNext = function() {
            if (!this._paused) {
                this._loadStartWasDispatched || (this._sendLoadStart(), this._loadStartWasDispatched = !0), this._numItems == this._numItemsLoaded ? (this.loaded = !0, this._sendComplete(), this.next && this.next.load && this.next.load()) : this.loaded = !1;
                for (var e = 0; e < this._loadQueue.length && !(this._currentLoads.length >= this._maxConnections); e++) {
                    var t = this._loadQueue[e];
                    if (this.maintainScriptOrder && t instanceof createjs.TagLoader && t.getItem().type == createjs.LoadQueue.JAVASCRIPT) {
                        if (this._currentlyLoadingScript) continue;
                        this._currentlyLoadingScript = !0
                    }
                    this._loadQueue.splice(e, 1), e--, this._loadItem(t)
                }
            }
        }, t._loadItem = function(e) {
            e.addEventListener("progress", createjs.proxy(this._handleProgress, this)), e.addEventListener("complete", createjs.proxy(this._handleFileComplete, this)), e.addEventListener("error", createjs.proxy(this._handleFileError, this)), this._currentLoads.push(e), this._sendFileStart(e.getItem()), e.load()
        }, t._handleFileError = function(e) {
            var t = e.target;
            this._numItemsLoaded++, this._updateProgress();
            var e = new createjs.Event("error");
            e.text = "FILE_LOAD_ERROR", e.item = t.getItem(), this._sendError(e), this.stopOnError || (this._removeLoadItem(t), this._loadNext())
        }, t._handleFileComplete = function(e) {
            var t = e.target,
                n = t.getItem();
            if (this._loadedResults[n.id] = t.getResult(), t instanceof createjs.XHRLoader && (this._loadedRawResults[n.id] = t.getResult(!0)), this._removeLoadItem(t), this.maintainScriptOrder && n.type == createjs.LoadQueue.JAVASCRIPT) {
                if (!(t instanceof createjs.TagLoader)) return this._loadedScripts[createjs.indexOf(this._scriptOrder, n)] = n, this._checkScriptLoadOrder(t), void 0;
                this._currentlyLoadingScript = !1
            }
            this._processFinishedLoad(n, t)
        }, t._processFinishedLoad = function(e, t) {
            this._numItemsLoaded++, this._updateProgress(), this._sendFileComplete(e, t), this._loadNext()
        }, t._checkScriptLoadOrder = function() {
            for (var e = this._loadedScripts.length, t = 0; e > t; t++) {
                var n = this._loadedScripts[t];
                if (null === n) break;
                n !== !0 && (this._processFinishedLoad(n), this._loadedScripts[t] = !0, t--, e--)
            }
        }, t._removeLoadItem = function(e) {
            for (var t = this._currentLoads.length, n = 0; t > n; n++)
                if (this._currentLoads[n] == e) {
                    this._currentLoads.splice(n, 1);
                    break
                }
        }, t._handleProgress = function(e) {
            var t = e.target;
            this._sendFileProgress(t.getItem(), t.progress), this._updateProgress()
        }, t._updateProgress = function() {
            var e = this._numItemsLoaded / this._numItems,
                t = this._numItems - this._numItemsLoaded;
            if (t > 0) {
                for (var n = 0, r = 0, i = this._currentLoads.length; i > r; r++) n += this._currentLoads[r].progress;
                e += n / t * (t / this._numItems)
            }
            this._sendProgress(e)
        }, t._disposeItem = function(e) {
            delete this._loadedResults[e.id], delete this._loadedRawResults[e.id], delete this._loadItemsById[e.id], delete this._loadItemsBySrc[e.src]
        }, t._createTag = function(e) {
            var t = null;
            switch (e) {
                case createjs.LoadQueue.IMAGE:
                    return document.createElement("img");
                case createjs.LoadQueue.SOUND:
                    return t = document.createElement("audio"), t.autoplay = !1, t;
                case createjs.LoadQueue.JSONP:
                case createjs.LoadQueue.JAVASCRIPT:
                    return t = document.createElement("script"), t.type = "text/javascript", t;
                case createjs.LoadQueue.CSS:
                    return t = this.useXHR ? document.createElement("style") : document.createElement("link"), t.rel = "stylesheet", t.type = "text/css", t;
                case createjs.LoadQueue.SVG:
                    return this.useXHR ? t = document.createElement("svg") : (t = document.createElement("object"), t.type = "image/svg+xml"), t
            }
            return null
        }, t._getTypeByExtension = function(e) {
            if (null == e) return createjs.LoadQueue.TEXT;
            switch (e.toLowerCase()) {
                case "jpeg":
                case "jpg":
                case "gif":
                case "png":
                case "webp":
                case "bmp":
                    return createjs.LoadQueue.IMAGE;
                case "ogg":
                case "mp3":
                case "wav":
                    return createjs.LoadQueue.SOUND;
                case "json":
                    return createjs.LoadQueue.JSON;
                case "xml":
                    return createjs.LoadQueue.XML;
                case "css":
                    return createjs.LoadQueue.CSS;
                case "js":
                    return createjs.LoadQueue.JAVASCRIPT;
                case "svg":
                    return createjs.LoadQueue.SVG;
                default:
                    return createjs.LoadQueue.TEXT
            }
        }, t._sendFileProgress = function(e, t) {
            if (this._isCanceled()) return this._cleanUp(), void 0;
            if (this.hasEventListener("fileprogress")) {
                var n = new createjs.Event("fileprogress");
                n.progress = t, n.loaded = t, n.total = 1, n.item = e, this.dispatchEvent(n)
            }
        }, t._sendFileComplete = function(e, t) {
            if (!this._isCanceled()) {
                var n = new createjs.Event("fileload");
                n.loader = t, n.item = e, n.result = this._loadedResults[e.id], n.rawResult = this._loadedRawResults[e.id], e.completeHandler && e.completeHandler(n), this.hasEventListener("fileload") && this.dispatchEvent(n)
            }
        }, t._sendFileStart = function(e) {
            var t = new createjs.Event("filestart");
            t.item = e, this.hasEventListener("filestart") && this.dispatchEvent(t)
        }, t.toString = function() {
            return "[PreloadJS LoadQueue]"
        }, createjs.LoadQueue = e;
        var r = function() {};
        r.init = function() {
            var e = navigator.userAgent;
            r.isFirefox = e.indexOf("Firefox") > -1, r.isOpera = null != window.opera, r.isChrome = e.indexOf("Chrome") > -1, r.isIOS = e.indexOf("iPod") > -1 || e.indexOf("iPhone") > -1 || e.indexOf("iPad") > -1
        }, r.init(), createjs.LoadQueue.BrowserDetect = r
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";
        var e = function(e, t) {
                this.init(e, t)
            },
            t = e.prototype = new createjs.AbstractLoader;
        t._loadTimeout = null, t._tagCompleteProxy = null, t._isAudio = !1, t._tag = null, t._jsonResult = null, t.init = function(e, t) {
            this._item = e, this._basePath = t, this._tag = e.tag, this._isAudio = window.HTMLAudioElement && e.tag instanceof HTMLAudioElement, this._tagCompleteProxy = createjs.proxy(this._handleLoad, this)
        }, t.getResult = function() {
            return this._item.type == createjs.LoadQueue.JSONP ? this._jsonResult : this._tag
        }, t.cancel = function() {
            this.canceled = !0, this._clean(), this.getItem()
        }, t.load = function() {
            var e = this._item,
                t = this._tag;
            clearTimeout(this._loadTimeout), this._loadTimeout = setTimeout(createjs.proxy(this._handleTimeout, this), createjs.LoadQueue.LOAD_TIMEOUT), this._isAudio && (t.src = null, t.preload = "auto"), t.onerror = createjs.proxy(this._handleError, this), this._isAudio ? (t.onstalled = createjs.proxy(this._handleStalled, this), t.addEventListener("canplaythrough", this._tagCompleteProxy, !1)) : (t.onload = createjs.proxy(this._handleLoad, this), t.onreadystatechange = createjs.proxy(this._handleReadyStateChange, this));
            var n = this.buildPath(e.src, this._basePath, e.values);
            switch (e.type) {
                case createjs.LoadQueue.CSS:
                    t.href = n;
                    break;
                case createjs.LoadQueue.SVG:
                    t.data = n;
                    break;
                default:
                    t.src = n
            }
            if (e.type == createjs.LoadQueue.JSONP) {
                if (null == e.callback) throw new Error("callback is required for loading JSONP requests.");
                if (null != window[e.callback]) throw new Error('JSONP callback "' + e.callback + '" already exists on window. You need to specify a different callback. Or re-name the current one.');
                window[e.callback] = createjs.proxy(this._handleJSONPLoad, this)
            }(e.type == createjs.LoadQueue.SVG || e.type == createjs.LoadQueue.JSONP || e.type == createjs.LoadQueue.JSON || e.type == createjs.LoadQueue.JAVASCRIPT || e.type == createjs.LoadQueue.CSS) && (this._startTagVisibility = t.style.visibility, t.style.visibility = "hidden", (document.body || document.getElementsByTagName("body")[0]).appendChild(t)), null != t.load && t.load()
        }, t._handleJSONPLoad = function(e) {
            this._jsonResult = e
        }, t._handleTimeout = function() {
            this._clean();
            var e = new createjs.Event("error");
            e.text = "PRELOAD_TIMEOUT", this._sendError(e)
        }, t._handleStalled = function() {}, t._handleError = function() {
            this._clean();
            var e = new createjs.Event("error");
            this._sendError(e)
        }, t._handleReadyStateChange = function() {
            clearTimeout(this._loadTimeout);
            var e = this.getItem().tag;
            ("loaded" == e.readyState || "complete" == e.readyState) && this._handleLoad()
        }, t._handleLoad = function() {
            if (!this._isCanceled()) {
                var e = this.getItem(),
                    t = e.tag;
                if (!(this.loaded || this.isAudio && 4 !== t.readyState)) {
                    switch (this.loaded = !0, e.type) {
                        case createjs.LoadQueue.SVG:
                        case createjs.LoadQueue.JSONP:
                            t.style.visibility = this._startTagVisibility, (document.body || document.getElementsByTagName("body")[0]).removeChild(t)
                    }
                    this._clean(), this._sendComplete()
                }
            }
        }, t._clean = function() {
            clearTimeout(this._loadTimeout);
            var e = this.getItem().tag;
            e.onload = null, e.removeEventListener && e.removeEventListener("canplaythrough", this._tagCompleteProxy, !1), e.onstalled = null, e.onprogress = null, e.onerror = null, e.parentNode && e.parentNode.removeChild(e);
            var t = this.getItem();
            t.type == createjs.LoadQueue.JSONP && (window[t.callback] = null)
        }, t.toString = function() {
            return "[PreloadJS TagLoader]"
        }, createjs.TagLoader = e
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";
        var e = function(e, t) {
                this.init(e, t)
            },
            t = e.prototype = new createjs.AbstractLoader;
        t._request = null, t._loadTimeout = null, t._xhrLevel = 1, t._response = null, t._rawResponse = null, t.init = function(e, t) {
            this._item = e, this._basePath = t, !this._createXHR(e)
        }, t.getResult = function(e) {
            return e && this._rawResponse ? this._rawResponse : this._response
        }, t.cancel = function() {
            this.canceled = !0, this._clean(), this._request.abort()
        }, t.load = function() {
            if (null == this._request) return this._handleError(), void 0;
            this._request.onloadstart = createjs.proxy(this._handleLoadStart, this), this._request.onprogress = createjs.proxy(this._handleProgress, this), this._request.onabort = createjs.proxy(this._handleAbort, this), this._request.onerror = createjs.proxy(this._handleError, this), this._request.ontimeout = createjs.proxy(this._handleTimeout, this), 1 == this._xhrLevel && (this._loadTimeout = setTimeout(createjs.proxy(this._handleTimeout, this), createjs.LoadQueue.LOAD_TIMEOUT)), this._request.onload = createjs.proxy(this._handleLoad, this), this._request.onreadystatechange = createjs.proxy(this._handleReadyStateChange, this);
            try {
                this._item.values && this._item.method != createjs.LoadQueue.GET ? this._item.method == createjs.LoadQueue.POST && this._request.send(this._formatQueryString(this._item.values)) : this._request.send()
            } catch (e) {
                var t = new createjs.Event("error");
                t.error = e, this._sendError(t)
            }
        }, t.getAllResponseHeaders = function() {
            return this._request.getAllResponseHeaders instanceof Function ? this._request.getAllResponseHeaders() : null
        }, t.getResponseHeader = function(e) {
            return this._request.getResponseHeader instanceof Function ? this._request.getResponseHeader(e) : null
        }, t._handleProgress = function(e) {
            if (e && !(e.loaded > 0 && 0 == e.total)) {
                var t = new createjs.Event("progress");
                t.loaded = e.loaded, t.total = e.total, this._sendProgress(t)
            }
        }, t._handleLoadStart = function() {
            clearTimeout(this._loadTimeout), this._sendLoadStart()
        }, t._handleAbort = function(e) {
            this._clean();
            var e = new createjs.Event("error");
            e.text = "XHR_ABORTED", this._sendError(e)
        }, t._handleError = function() {
            this._clean();
            var e = new createjs.Event("error");
            this._sendError(e)
        }, t._handleReadyStateChange = function() {
            4 == this._request.readyState && this._handleLoad()
        }, t._handleLoad = function() {
            if (!this.loaded) {
                if (this.loaded = !0, !this._checkError()) return this._handleError(), void 0;
                this._response = this._getResponse(), this._clean();
                var e = this._generateTag();
                e && this._sendComplete()
            }
        }, t._handleTimeout = function(e) {
            this._clean();
            var t = new createjs.Event("error");
            t.text = "PRELOAD_TIMEOUT", this._sendError(e)
        }, t._checkError = function() {
            var e = parseInt(this._request.status);
            switch (e) {
                case 404:
                case 0:
                    return !1
            }
            return !0
        }, t._getResponse = function() {
            if (null != this._response) return this._response;
            if (null != this._request.response) return this._request.response;
            try {
                if (null != this._request.responseText) return this._request.responseText
            } catch (e) {}
            try {
                if (null != this._request.responseXML) return this._request.responseXML
            } catch (e) {}
            return null
        }, t._createXHR = function(e) {
            var t = document.createElement("a");
            t.href = this.buildPath(e.src, this._basePath);
            var n = document.createElement("a");
            n.href = location.href;
            var r = "" != t.hostname && (t.port != n.port || t.protocol != n.protocol || t.hostname != n.hostname),
                i = null;
            if (r && window.XDomainRequest) i = new XDomainRequest;
            else if (window.XMLHttpRequest) i = new XMLHttpRequest;
            else try {
                i = new ActiveXObject("Msxml2.XMLHTTP.6.0")
            } catch (s) {
                try {
                    i = new ActiveXObject("Msxml2.XMLHTTP.3.0")
                } catch (s) {
                    try {
                        i = new ActiveXObject("Msxml2.XMLHTTP")
                    } catch (s) {
                        return !1
                    }
                }
            }
            e.type == createjs.LoadQueue.TEXT && i.overrideMimeType && i.overrideMimeType("text/plain; charset=x-user-defined"), this._xhrLevel = "string" == typeof i.responseType ? 2 : 1;
            var o = null;
            return o = e.method == createjs.LoadQueue.GET ? this.buildPath(e.src, this._basePath, e.values) : this.buildPath(e.src, this._basePath), i.open(e.method || createjs.LoadQueue.GET, o, !0), r && i instanceof XMLHttpRequest && 1 == this._xhrLevel && i.setRequestHeader("Origin", location.origin), e.values && e.method == createjs.LoadQueue.POST && i.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), createjs.LoadQueue.isBinary(e.type) && (i.responseType = "arraybuffer"), this._request = i, !0
        }, t._clean = function() {
            clearTimeout(this._loadTimeout);
            var e = this._request;
            e.onloadstart = null, e.onprogress = null, e.onabort = null, e.onerror = null, e.onload = null, e.ontimeout = null, e.onloadend = null, e.onreadystatechange = null
        }, t._generateTag = function() {
            var e = this._item.type,
                t = this._item.tag;
            switch (e) {
                case createjs.LoadQueue.IMAGE:
                    return t.onload = createjs.proxy(this._handleTagReady, this), t.src = this.buildPath(this._item.src, this._basePath, this._item.values), this._rawResponse = this._response, this._response = t, !1;
                case createjs.LoadQueue.JAVASCRIPT:
                    return t = document.createElement("script"), t.text = this._response, this._rawResponse = this._response, this._response = t, !0;
                case createjs.LoadQueue.CSS:
                    var n = document.getElementsByTagName("head")[0];
                    if (n.appendChild(t), t.styleSheet) t.styleSheet.cssText = this._response;
                    else {
                        var r = document.createTextNode(this._response);
                        t.appendChild(r)
                    }
                    return this._rawResponse = this._response, this._response = t, !0;
                case createjs.LoadQueue.XML:
                    var i = this._parseXML(this._response, "text/xml");
                    return this._response = i, !0;
                case createjs.LoadQueue.SVG:
                    var i = this._parseXML(this._response, "image/svg+xml");
                    return this._rawResponse = this._response, null != i.documentElement ? (t.appendChild(i.documentElement), this._response = t) : this._response = i, !0;
                case createjs.LoadQueue.JSON:
                    var s = {};
                    try {
                        s = JSON.parse(this._response)
                    } catch (o) {
                        s = o
                    }
                    return this._rawResponse = this._response, this._response = s, !0
            }
            return !0
        }, t._parseXML = function(e, t) {
            var n = null;
            if (window.DOMParser) {
                var r = new DOMParser;
                n = r.parseFromString(e, t)
            } else n = new ActiveXObject("Microsoft.XMLDOM"), n.async = !1, n.loadXML(e);
            return n
        }, t._handleTagReady = function() {
            this._sendComplete()
        }, t.toString = function() {
            return "[PreloadJS XHRLoader]"
        }, createjs.XHRLoader = e
    }(), "object" != typeof JSON && (JSON = {}),
    function() {
        "use strict";

        function f(e) {
            return 10 > e ? "0" + e : e
        }

        function quote(e) {
            return escapable.lastIndex = 0, escapable.test(e) ? '"' + e.replace(escapable, function(e) {
                var t = meta[e];
                return "string" == typeof t ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
            }) + '"' : '"' + e + '"'
        }

        function str(e, t) {
            var n, r, i, s, o, u = gap,
                a = t[e];
            switch (a && "object" == typeof a && "function" == typeof a.toJSON && (a = a.toJSON(e)), "function" == typeof rep && (a = rep.call(t, e, a)), typeof a) {
                case "string":
                    return quote(a);
                case "number":
                    return isFinite(a) ? String(a) : "null";
                case "boolean":
                case "null":
                    return String(a);
                case "object":
                    if (!a) return "null";
                    if (gap += indent, o = [], "[object Array]" === Object.prototype.toString.apply(a)) {
                        for (s = a.length, n = 0; s > n; n += 1) o[n] = str(n, a) || "null";
                        return i = 0 === o.length ? "[]" : gap ? "[\n" + gap + o.join(",\n" + gap) + "\n" + u + "]" : "[" + o.join(",") + "]", gap = u, i
                    }
                    if (rep && "object" == typeof rep)
                        for (s = rep.length, n = 0; s > n; n += 1) "string" == typeof rep[n] && (r = rep[n], i = str(r, a), i && o.push(quote(r) + (gap ? ": " : ":") + i));
                    else
                        for (r in a) Object.prototype.hasOwnProperty.call(a, r) && (i = str(r, a), i && o.push(quote(r) + (gap ? ": " : ":") + i));
                    return i = 0 === o.length ? "{}" : gap ? "{\n" + gap + o.join(",\n" + gap) + "\n" + u + "}" : "{" + o.join(",") + "}", gap = u, i
            }
        }
        "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function() {
            return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
        }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function() {
            return this.valueOf()
        });
        var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            gap, indent, meta = {
                "\b": "\\b",
                " ": "\\t",
                "\n": "\\n",
                "\f": "\\f",
                "\r": "\\r",
                '"': '\\"',
                "\\": "\\\\"
            },
            rep;
        "function" != typeof JSON.stringify && (JSON.stringify = function(e, t, n) {
            var r;
            if (gap = "", indent = "", "number" == typeof n)
                for (r = 0; n > r; r += 1) indent += " ";
            else "string" == typeof n && (indent = n); if (rep = t, !t || "function" == typeof t || "object" == typeof t && "number" == typeof t.length) return str("", {
                "": e
            });
            throw new Error("JSON.stringify")
        }), "function" != typeof JSON.parse && (JSON.parse = function(text, reviver) {
            function walk(e, t) {
                var n, r, i = e[t];
                if (i && "object" == typeof i)
                    for (n in i) Object.prototype.hasOwnProperty.call(i, n) && (r = walk(i, n), void 0 !== r ? i[n] = r : delete i[n]);
                return reviver.call(e, t, i)
            }
            var j;
            if (text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function(e) {
                return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
            })), /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return j = eval("(" + text + ")"), "function" == typeof reviver ? walk({
                "": j
            }, "") : j;
            throw new SyntaxError("JSON.parse")
        })
    }(), this.createjs = this.createjs || {},
    function() {
        var e = createjs.SoundJS = createjs.SoundJS || {};
        e.version = "NEXT", e.buildDate = "Tue, 01 Oct 2013 16:03:38 GMT"
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function e() {
            throw "Sound cannot be instantiated"
        }

        function t(e, t) {
            this.init(e, t)
        }

        function n() {
            this.isDefault = !0, this.addEventListener = this.removeEventListener = this.removeAllEventListener = this.dispatchEvent = this.hasEventListener = this._listeners = this.interrupt = this.playFailed = this.pause = this.resume = this.play = this.beginPlaying = this.cleanUp = this.stop = this.setMasterVolume = this.setVolume = this.mute = this.setMute = this.getMute = this.setPan = this.getPosition = this.setPosition = function() {
                return !1
            }, this.getVolume = this.getPan = this.getDuration = function() {
                return 0
            }, this.playState = e.PLAY_FAILED, this.toString = function() {
                return "[Sound Default Sound Instance]"
            }
        }

        function r() {}
        var i = e;
        i.DELIMITER = "|", i.AUDIO_TIMEOUT = 8e3, i.INTERRUPT_ANY = "any", i.INTERRUPT_EARLY = "early", i.INTERRUPT_LATE = "late", i.INTERRUPT_NONE = "none", i.PLAY_INITED = "playInited", i.PLAY_SUCCEEDED = "playSucceeded", i.PLAY_INTERRUPTED = "playInterrupted", i.PLAY_FINISHED = "playFinished", i.PLAY_FAILED = "playFailed", i.SUPPORTED_EXTENSIONS = ["mp3", "ogg", "mpeg", "wav", "m4a", "mp4", "aiff", "wma", "mid"], i.EXTENSION_MAP = {
            m4a: "mp4"
        }, i.FILE_PATTERN = /^(?:(\w+:)\/{2}(\w+(?:\.\w+)*\/?))?([/.]*?(?:[^?]+)?\/)?((?:[^/?]+)\.(\w+))(?:\?(\S+)?)?$/, i.defaultInterruptBehavior = i.INTERRUPT_NONE, i.lastId = 0, i.activePlugin = null, i.pluginsRegistered = !1, i.masterVolume = 1, i.masterMute = !1, i.instances = [], i.idHash = {}, i.preloadHash = {}, i.defaultSoundInstance = null, i.addEventListener = null, i.removeEventListener = null, i.removeAllEventListeners = null, i.dispatchEvent = null, i.hasEventListener = null, i._listeners = null, createjs.EventDispatcher.initialize(i), i.sendFileLoadEvent = function(e) {
            if (i.preloadHash[e])
                for (var t = 0, n = i.preloadHash[e].length; n > t; t++) {
                    var r = i.preloadHash[e][t];
                    if (i.preloadHash[e][t] = !0, i.hasEventListener("fileload")) {
                        var s = new createjs.Event("fileload");
                        s.src = r.src, s.id = r.id, s.data = r.data, i.dispatchEvent(s)
                    }
                }
        }, i.getPreloadHandlers = function() {
            return {
                callback: createjs.proxy(i.initLoad, i),
                types: ["sound"],
                extensions: i.SUPPORTED_EXTENSIONS
            }
        }, i.registerPlugin = function(e) {
            return i.pluginsRegistered = !0, null == e ? !1 : e.isSupported() ? (i.activePlugin = new e, !0) : !1
        }, i.registerPlugins = function(e) {
            for (var t = 0, n = e.length; n > t; t++) {
                var r = e[t];
                if (i.registerPlugin(r)) return !0
            }
            return !1
        }, i.initializeDefaultPlugins = function() {
            return null != i.activePlugin ? !0 : i.pluginsRegistered ? !1 : i.registerPlugins([createjs.WebAudioPlugin, createjs.HTMLAudioPlugin]) ? !0 : !1
        }, i.isReady = function() {
            return null != i.activePlugin
        }, i.getCapabilities = function() {
            return null == i.activePlugin ? null : i.activePlugin.capabilities
        }, i.getCapability = function(e) {
            return null == i.activePlugin ? null : i.activePlugin.capabilities[e]
        }, i.initLoad = function(e, t, n, r, s) {
            var o = i.registerSound(e, n, r, !1, s);
            return null == o ? !1 : o
        }, i.registerSound = function(e, n, r, s, o) {
            if (!i.initializeDefaultPlugins()) return !1;
            e instanceof Object && (o = n, n = e.id, r = e.data, e = e.src);
            var u = i.parsePath(e, "sound", n, r);
            if (null == u) return !1;
            null != n && (i.idHash[n] = u.src);
            var a = null;
            null != r && (isNaN(r.channels) ? isNaN(r) || (a = parseInt(r)) : a = parseInt(r.channels));
            var f = i.activePlugin.register(u.src, a);
            if (null != f && (null != f.numChannels && (a = f.numChannels), t.create(u.src, a), null != r && isNaN(r) ? r.channels = u.data.channels = a || t.maxPerChannel() : r = u.data = a || t.maxPerChannel(), null != f.tag ? u.tag = f.tag : f.src && (u.src = f.src), null != f.completeHandler && (u.completeHandler = f.completeHandler), f.type && (u.type = f.type)), 0 != s)
                if (i.preloadHash[u.src] || (i.preloadHash[u.src] = []), i.preloadHash[u.src].push({
                    src: e,
                    id: n,
                    data: r
                }), 1 == i.preloadHash[u.src].length) null == o && (o = ""), i.activePlugin.preload(u.src, f, o);
                else if (1 == i.preloadHash[u.src][0]) return !0;
            return u
        }, i.registerManifest = function(e, t) {
            for (var n = [], r = 0, i = e.length; i > r; r++) n[r] = createjs.Sound.registerSound(e[r].src, e[r].id, e[r].data, e[r].preload, t);
            return n
        }, i.removeSound = function(e) {
            if (null == i.activePlugin) return !1;
            e instanceof Object && (e = e.src), e = i.getSrcById(e);
            var n = i.parsePath(e);
            if (null == n) return !1;
            e = n.src;
            for (var r in i.idHash) i.idHash[r] == e && delete i.idHash[r];
            return t.removeSrc(e), delete i.preloadHash[e], i.activePlugin.removeSound(e), !0
        }, i.removeManifest = function(e) {
            for (var t = [], n = 0, r = e.length; r > n; n++) t[n] = createjs.Sound.removeSound(e[n].src);
            return t
        }, i.removeAllSounds = function() {
            i.idHash = {}, i.preloadHash = {}, t.removeAll(), i.activePlugin.removeAllSounds()
        }, i.loadComplete = function(e) {
            var t = i.parsePath(e, "sound");
            return e = t ? i.getSrcById(t.src) : i.getSrcById(e), 1 == i.preloadHash[e][0]
        }, i.parsePath = function(e, t, n, r) {
            "string" != typeof e && (e = e.toString());
            for (var s = e.split(i.DELIMITER), o = {
                type: t || "sound",
                id: n,
                data: r
            }, u = i.getCapabilities(), a = 0, f = s.length; f > a; a++) {
                var l = s[a],
                    c = l.match(i.FILE_PATTERN);
                if (null == c) return !1;
                var h = c[4],
                    p = c[5];
                if (u[p] && createjs.indexOf(i.SUPPORTED_EXTENSIONS, p) > -1) return o.name = h, o.src = l, o.extension = p, o
            }
            return null
        }, i.play = function(e, t, n, r, s, o, u) {
            var a = i.createInstance(e),
                f = i.playInstance(a, t, n, r, s, o, u);
            return f || a.playFailed(), a
        }, i.createInstance = function(n) {
            if (!i.initializeDefaultPlugins()) return i.defaultSoundInstance;
            n = i.getSrcById(n);
            var r = i.parsePath(n, "sound"),
                s = null;
            return null != r && null != r.src ? (t.create(r.src), s = i.activePlugin.create(r.src)) : s = e.defaultSoundInstance, s.uniqueId = i.lastId++, s
        }, i.setVolume = function(e) {
            if (null == Number(e)) return !1;
            if (e = Math.max(0, Math.min(1, e)), i.masterVolume = e, !this.activePlugin || !this.activePlugin.setVolume || !this.activePlugin.setVolume(e))
                for (var t = this.instances, n = 0, r = t.length; r > n; n++) t[n].setMasterVolume(e)
        }, i.getVolume = function() {
            return i.masterVolume
        }, i.setMute = function(e) {
            if (null == e || void 0 == e) return !1;
            if (this.masterMute = e, !this.activePlugin || !this.activePlugin.setMute || !this.activePlugin.setMute(e))
                for (var t = this.instances, n = 0, r = t.length; r > n; n++) t[n].setMasterMute(e);
            return !0
        }, i.getMute = function() {
            return this.masterMute
        }, i.stop = function() {
            for (var e = this.instances, t = e.length; t--;) e[t].stop()
        }, i.playInstance = function(e, t, n, r, s, o, u) {
            if (t instanceof Object && (n = t.delay, r = t.offset, s = t.loop, o = t.volume, u = t.pan), t = t || i.defaultInterruptBehavior, null == n && (n = 0), null == r && (r = e.getPosition()), null == s && (s = 0), null == o && (o = e.volume), null == u && (u = e.pan), 0 == n) {
                var a = i.beginPlaying(e, t, r, s, o, u);
                if (!a) return !1
            } else {
                var f = setTimeout(function() {
                    i.beginPlaying(e, t, r, s, o, u)
                }, n);
                e.delayTimeoutId = f
            }
            return this.instances.push(e), !0
        }, i.beginPlaying = function(e, n, r, i, s, o) {
            if (!t.add(e, n)) return !1;
            var u = e.beginPlaying(r, i, s, o);
            if (!u) {
                var a = createjs.indexOf(this.instances, e);
                return a > -1 && this.instances.splice(a, 1), !1
            }
            return !0
        }, i.getSrcById = function(e) {
            return null == i.idHash || null == i.idHash[e] ? e : i.idHash[e]
        }, i.playFinished = function(e) {
            t.remove(e);
            var n = createjs.indexOf(this.instances, e);
            n > -1 && this.instances.splice(n, 1)
        }, createjs.Sound = e, t.channels = {}, t.create = function(e, n) {
            var r = t.get(e);
            return null == r ? (t.channels[e] = new t(e, n), !0) : !1
        }, t.removeSrc = function(e) {
            var n = t.get(e);
            return null == n ? !1 : (n.removeAll(), delete t.channels[e], !0)
        }, t.removeAll = function() {
            for (var e in t.channels) t.channels[e].removeAll();
            t.channels = {}
        }, t.add = function(e, n) {
            var r = t.get(e.src);
            return null == r ? !1 : r.add(e, n)
        }, t.remove = function(e) {
            var n = t.get(e.src);
            return null == n ? !1 : (n.remove(e), !0)
        }, t.maxPerChannel = function() {
            return s.maxDefault
        }, t.get = function(e) {
            return t.channels[e]
        };
        var s = t.prototype;
        s.src = null, s.max = null, s.maxDefault = 100, s.length = 0, s.init = function(e, t) {
            this.src = e, this.max = t || this.maxDefault, -1 == this.max && this.max == this.maxDefault, this.instances = []
        }, s.get = function(e) {
            return this.instances[e]
        }, s.add = function(e, t) {
            return this.getSlot(t, e) ? (this.instances.push(e), this.length++, !0) : !1
        }, s.remove = function(e) {
            var t = createjs.indexOf(this.instances, e);
            return -1 == t ? !1 : (this.instances.splice(t, 1), this.length--, !0)
        }, s.removeAll = function() {
            for (var e = this.length - 1; e >= 0; e--) this.instances[e].stop()
        }, s.getSlot = function(t) {
            for (var n, r, i = 0, s = this.max; s > i; i++) {
                if (n = this.get(i), null == n) return !0;
                (t != e.INTERRUPT_NONE || n.playState == e.PLAY_FINISHED) && (0 != i ? n.playState == e.PLAY_FINISHED || n.playState == e.PLAY_INTERRUPTED || n.playState == e.PLAY_FAILED ? r = n : (t == e.INTERRUPT_EARLY && n.getPosition() < r.getPosition() || t == e.INTERRUPT_LATE && n.getPosition() > r.getPosition()) && (r = n) : r = n)
            }
            return null != r ? (r.interrupt(), this.remove(r), !0) : !1
        }, s.toString = function() {
            return "[Sound SoundChannel]"
        }, e.defaultSoundInstance = new n, null == createjs.proxy && (createjs.proxy = function() {
            throw "Proxy has been moved to an external file, and must be included separately."
        }), r.init = function() {
            var e = window.navigator.userAgent;
            r.isFirefox = e.indexOf("Firefox") > -1, r.isOpera = null != window.opera, r.isChrome = e.indexOf("Chrome") > -1, r.isIOS = e.indexOf("iPod") > -1 || e.indexOf("iPhone") > -1 || e.indexOf("iPad") > -1, r.isAndroid = e.indexOf("Android") > -1, r.isBlackberry = e.indexOf("Blackberry") > -1
        }, r.init(), createjs.Sound.BrowserDetect = r
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function e() {
            this.init()
        }
        var t = e;
        t.capabilities = null, t.isSupported = function() {
            var e = createjs.Sound.BrowserDetect.isIOS || createjs.Sound.BrowserDetect.isAndroid || createjs.Sound.BrowserDetect.isBlackberry;
            return "file:" != location.protocol || e || this.isFileXHRSupported() ? (t.generateCapabilities(), null == t.context ? !1 : !0) : !1
        }, t.isFileXHRSupported = function() {
            var e = !0,
                t = new XMLHttpRequest;
            try {
                t.open("GET", "fail.fail", !1)
            } catch (n) {
                return e = !1
            }
            t.onerror = function() {
                e = !1
            }, t.onload = function() {
                e = 404 == this.status || 200 == this.status || 0 == this.status && "" != this.response
            };
            try {
                t.send()
            } catch (n) {
                e = !1
            }
            return e
        }, t.generateCapabilities = function() {
            if (null == t.capabilities) {
                var e = document.createElement("audio");
                if (null == e.canPlayType) return null;
                if (window.webkitAudioContext) t.context = new webkitAudioContext;
                else {
                    if (!window.AudioContext) return null;
                    t.context = new AudioContext
                }
                t.compatibilitySetUp(), t.playEmptySound(), t.capabilities = {
                    panning: !0,
                    volume: !0,
                    tracks: -1
                };
                for (var n = createjs.Sound.SUPPORTED_EXTENSIONS, r = createjs.Sound.EXTENSION_MAP, i = 0, s = n.length; s > i; i++) {
                    var o = n[i],
                        u = r[o] || o;
                    t.capabilities[o] = "no" != e.canPlayType("audio/" + o) && "" != e.canPlayType("audio/" + o) || "no" != e.canPlayType("audio/" + u) && "" != e.canPlayType("audio/" + u)
                }
                t.context.destination.numberOfChannels < 2 && (t.capabilities.panning = !1), t.dynamicsCompressorNode = t.context.createDynamicsCompressor(), t.dynamicsCompressorNode.connect(t.context.destination), t.gainNode = t.context.createGain(), t.gainNode.connect(t.dynamicsCompressorNode)
            }
        }, t.compatibilitySetUp = function() {
            if (!t.context.createGain) {
                t.context.createGain = t.context.createGainNode;
                var e = t.context.createBufferSource();
                e.__proto__.start = e.__proto__.noteGrainOn, e.__proto__.stop = e.__proto__.noteOff, this.panningModel = 0
            }
        }, t.playEmptySound = function() {
            var e = this.context.createBuffer(1, 1, 22050),
                t = this.context.createBufferSource();
            t.buffer = e, t.connect(this.context.destination), t.start(0, 0, 0)
        };
        var n = e.prototype;
        n.capabilities = null, n.volume = 1, n.context = null, n.panningModel = "equalpower", n.dynamicsCompressorNode = null, n.gainNode = null, n.arrayBuffers = null, n.init = function() {
            this.capabilities = t.capabilities, this.arrayBuffers = {}, this.context = t.context, this.gainNode = t.gainNode, this.dynamicsCompressorNode = t.dynamicsCompressorNode
        }, n.register = function(e) {
            this.arrayBuffers[e] = !0;
            var t = new createjs.WebAudioPlugin.Loader(e, this);
            return {
                tag: t
            }
        }, n.isPreloadStarted = function(e) {
            return null != this.arrayBuffers[e]
        }, n.isPreloadComplete = function(e) {
            return null != this.arrayBuffers[e] && 1 != this.arrayBuffers[e]
        }, n.removeFromPreload = function(e) {
            delete this.arrayBuffers[e]
        }, n.removeSound = function(e) {
            delete this.arrayBuffers[e]
        }, n.removeAllSounds = function() {
            this.arrayBuffers = {}
        }, n.addPreloadResults = function(e, t) {
            this.arrayBuffers[e] = t
        }, n.handlePreloadComplete = function() {
            createjs.Sound.sendFileLoadEvent(this.src)
        }, n.preload = function(e, t, n) {
            this.arrayBuffers[e] = !0;
            var r = new createjs.WebAudioPlugin.Loader(e, this);
            r.onload = this.handlePreloadComplete, null != n && (r.src = n + r.src), r.load()
        }, n.create = function(e) {
            return this.isPreloadStarted(e) || this.preload(e), new createjs.WebAudioPlugin.SoundInstance(e, this)
        }, n.setVolume = function(e) {
            return this.volume = e, this.updateVolume(), !0
        }, n.updateVolume = function() {
            var e = createjs.Sound.masterMute ? 0 : this.volume;
            e != this.gainNode.gain.value && (this.gainNode.gain.value = e)
        }, n.getVolume = function() {
            return this.volume
        }, n.setMute = function() {
            return this.updateVolume(), !0
        }, n.toString = function() {
            return "[WebAudioPlugin]"
        }, createjs.WebAudioPlugin = e
    }(),
    function() {
        "use strict";

        function e(e, t) {
            this.init(e, t)
        }
        var t = e.prototype;
        t.src = null, t.uniqueId = -1, t.playState = null, t.owner = null, t.offset = 0, t.delay = 0, t._volume = 1, Object.defineProperty(t, "volume", {
            get: function() {
                return this._volume
            },
            set: function(e) {
                return null == Number(e) ? !1 : (e = Math.max(0, Math.min(1, e)), this._volume = e, this.updateVolume(), void 0)
            }
        }), t._pan = 0, Object.defineProperty(t, "pan", {
            get: function() {
                return this._pan
            },
            set: function(e) {
                return this.owner.capabilities.panning && null != Number(e) ? (e = Math.max(-1, Math.min(1, e)), this._pan = e, this.panNode.setPosition(e, 0, -0.5), void 0) : !1
            }
        }), t.duration = 0, t.remainingLoops = 0, t.delayTimeoutId = null, t.soundCompleteTimeout = null, t.panNode = null, t.gainNode = null, t.sourceNode = null, t.sourceNodeNext = null, t.muted = !1, t.paused = !1, t.startTime = 0, t.addEventListener = null, t.removeEventListener = null, t.removeAllEventListeners = null, t.dispatchEvent = null, t.hasEventListener = null, t._listeners = null, t.endedHandler = null, t.readyHandler = null, t.stalledHandler = null, t.sendEvent = function(e) {
            var t = new createjs.Event(e);
            this.dispatchEvent(t)
        }, t.init = function(e, t) {
            this.owner = t, this.src = e, this.panNode = this.owner.context.createPanner(), this.panNode.panningModel = this.owner.panningModel, this.gainNode = this.owner.context.createGain(), this.gainNode.connect(this.panNode), this.owner.isPreloadComplete(this.src) && (this.duration = 1e3 * this.owner.arrayBuffers[this.src].duration), this.endedHandler = createjs.proxy(this.handleSoundComplete, this), this.readyHandler = createjs.proxy(this.handleSoundReady, this), this.stalledHandler = createjs.proxy(this.handleSoundStalled, this)
        }, t.cleanUp = function() {
            this.sourceNode && this.sourceNode.playbackState != this.sourceNode.UNSCHEDULED_STATE && (this.sourceNode = this.cleanUpAudioNode(this.sourceNode), this.sourceNodeNext = this.cleanUpAudioNode(this.sourceNodeNext)), 0 != this.panNode.numberOfOutputs && this.panNode.disconnect(0), clearTimeout(this.delayTimeoutId), clearTimeout(this.soundCompleteTimeout), this.startTime = 0, null != window.createjs && createjs.Sound.playFinished(this)
        }, t.cleanUpAudioNode = function(e) {
            return e && (e.stop(0), e.disconnect(this.gainNode), e = null), e
        }, t.interrupt = function() {
            this.playState = createjs.Sound.PLAY_INTERRUPTED, this.cleanUp(), this.paused = !1, this.sendEvent("interrupted")
        }, t.handleSoundStalled = function() {
            this.sendEvent("failed")
        }, t.handleSoundReady = function() {
            if (null != window.createjs) {
                if (1e3 * this.offset > this.getDuration()) return this.playFailed(), void 0;
                this.offset < 0 && (this.offset = 0), this.playState = createjs.Sound.PLAY_SUCCEEDED, this.paused = !1, this.panNode.connect(this.owner.gainNode);
                var e = this.owner.arrayBuffers[this.src].duration;
                this.sourceNode = this.createAndPlayAudioNode(this.owner.context.currentTime - e, this.offset), this.duration = 1e3 * e, this.startTime = this.sourceNode.startTime - this.offset, this.soundCompleteTimeout = setTimeout(this.endedHandler, 1e3 * (e - this.offset)), 0 != this.remainingLoops && (this.sourceNodeNext = this.createAndPlayAudioNode(this.startTime, 0))
            }
        }, t.createAndPlayAudioNode = function(e, t) {
            var n = this.owner.context.createBufferSource();
            return n.buffer = this.owner.arrayBuffers[this.src], n.connect(this.gainNode), this.owner.context.currentTime, n.startTime = e + n.buffer.duration, n.start(n.startTime, t, n.buffer.duration - t), n
        }, t.play = function(e, t, n, r, i, s) {
            this.cleanUp(), createjs.Sound.playInstance(this, e, t, n, r, i, s)
        }, t.beginPlaying = function(e, t, n, r) {
            return null != window.createjs && this.src ? (this.offset = e / 1e3, this.remainingLoops = t, this.volume = n, this.pan = r, this.owner.isPreloadComplete(this.src) ? (this.handleSoundReady(null), this.sendEvent("succeeded"), 1) : (this.playFailed(), void 0)) : void 0
        }, t.pause = function() {
            return this.paused || this.playState != createjs.Sound.PLAY_SUCCEEDED ? !1 : (this.paused = !0, this.offset = this.owner.context.currentTime - this.startTime, this.cleanUpAudioNode(this.sourceNode), this.cleanUpAudioNode(this.sourceNodeNext), 0 != this.panNode.numberOfOutputs && this.panNode.disconnect(), clearTimeout(this.delayTimeoutId), clearTimeout(this.soundCompleteTimeout), !0)
        }, t.resume = function() {
            return this.paused ? (this.handleSoundReady(null), !0) : !1
        }, t.stop = function() {
            return this.playState = createjs.Sound.PLAY_FINISHED, this.cleanUp(), this.offset = 0, !0
        }, t.setVolume = function(e) {
            return this.volume = e, !0
        }, t.updateVolume = function() {
            var e = this.muted ? 0 : this._volume;
            return e != this.gainNode.gain.value ? (this.gainNode.gain.value = e, !0) : !1
        }, t.getVolume = function() {
            return this.volume
        }, t.setMute = function(e) {
            return null == e || void 0 == e ? !1 : (this.muted = e, this.updateVolume(), !0)
        }, t.getMute = function() {
            return this.muted
        }, t.setPan = function(e) {
            return this.pan = e, this.pan != e ? !1 : void 0
        }, t.getPan = function() {
            return this.pan
        }, t.getPosition = function() {
            if (this.paused || null == this.sourceNode) var e = this.offset;
            else var e = this.owner.context.currentTime - this.startTime;
            return 1e3 * e
        }, t.setPosition = function(e) {
            return this.offset = e / 1e3, this.sourceNode && this.sourceNode.playbackState != this.sourceNode.UNSCHEDULED_STATE && (this.cleanUpAudioNode(this.sourceNode), this.cleanUpAudioNode(this.sourceNodeNext), clearTimeout(this.soundCompleteTimeout)), this.paused || this.playState != createjs.Sound.PLAY_SUCCEEDED || this.handleSoundReady(null), !0
        }, t.getDuration = function() {
            return this.duration
        }, t.handleSoundComplete = function() {
            return this.offset = 0, 0 != this.remainingLoops ? (this.remainingLoops--, this.sourceNodeNext ? (this.cleanUpAudioNode(this.sourceNode), this.sourceNode = this.sourceNodeNext, this.startTime = this.sourceNode.startTime, this.sourceNodeNext = this.createAndPlayAudioNode(this.startTime, 0), this.soundCompleteTimeout = setTimeout(this.endedHandler, this.duration)) : this.handleSoundReady(null), this.sendEvent("loop"), void 0) : (null != window.createjs && (this.playState = createjs.Sound.PLAY_FINISHED, this.cleanUp(), this.sendEvent("complete")), void 0)
        }, t.playFailed = function() {
            null != window.createjs && (this.playState = createjs.Sound.PLAY_FAILED, this.cleanUp(), this.sendEvent("failed"))
        }, t.toString = function() {
            return "[WebAudioPlugin SoundInstance]"
        }, createjs.EventDispatcher.initialize(e.prototype), createjs.WebAudioPlugin.SoundInstance = e
    }(),
    function() {
        "use strict";

        function e(e, t) {
            this.init(e, t)
        }
        var t = e.prototype;
        t.request = null, t.owner = null, t.progress = -1, t.src = null, t.originalSrc = null, t.result = null, t.onload = null, t.onprogress = null, t.onError = null, t.init = function(e, t) {
            this.src = e, this.originalSrc = e, this.owner = t
        }, t.load = function(e) {
            null != e && (this.src = e), this.request = new XMLHttpRequest, this.request.open("GET", this.src, !0), this.request.responseType = "arraybuffer", this.request.onload = createjs.proxy(this.handleLoad, this), this.request.onError = createjs.proxy(this.handleError, this), this.request.onprogress = createjs.proxy(this.handleProgress, this), this.request.send()
        }, t.handleProgress = function(e, t) {
            this.progress = e / t, null != this.onprogress && this.onprogress({
                loaded: e,
                total: t,
                progress: this.progress
            })
        }, t.handleLoad = function() {
            this.owner.context.decodeAudioData(this.request.response, createjs.proxy(this.handleAudioDecoded, this), createjs.proxy(this.handleError, this))
        }, t.handleAudioDecoded = function(e) {
            this.progress = 1, this.result = e, this.src = this.originalSrc, this.owner.addPreloadResults(this.src, this.result), this.onload && this.onload()
        }, t.handleError = function(e) {
            this.owner.removeSound(this.src), this.onerror && this.onerror(e)
        }, t.toString = function() {
            return "[WebAudioPlugin Loader]"
        }, createjs.WebAudioPlugin.Loader = e
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function e() {
            this.init()
        }
        var t = e;
        t.MAX_INSTANCES = 30, t.capabilities = null, t.AUDIO_READY = "canplaythrough", t.AUDIO_ENDED = "ended", t.AUDIO_SEEKED = "seeked", t.AUDIO_ERROR = "error", t.AUDIO_STALLED = "stalled", t.enableIOS = !1, t.isSupported = function() {
            if (createjs.Sound.BrowserDetect.isIOS && !t.enableIOS) return !1;
            t.generateCapabilities();
            var e = t.tag;
            return null == e || null == t.capabilities ? !1 : !0
        }, t.generateCapabilities = function() {
            if (null == t.capabilities) {
                var e = t.tag = document.createElement("audio");
                if (null == e.canPlayType) return null;
                t.capabilities = {
                    panning: !0,
                    volume: !0,
                    tracks: -1
                };
                for (var n = createjs.Sound.SUPPORTED_EXTENSIONS, r = createjs.Sound.EXTENSION_MAP, i = 0, s = n.length; s > i; i++) {
                    var o = n[i],
                        u = r[o] || o;
                    t.capabilities[o] = "no" != e.canPlayType("audio/" + o) && "" != e.canPlayType("audio/" + o) || "no" != e.canPlayType("audio/" + u) && "" != e.canPlayType("audio/" + u)
                }
            }
        };
        var n = e.prototype;
        n.capabilities = null, n.audioSources = null, n.defaultNumChannels = 2, n.loadedHandler = null, n.init = function() {
            this.capabilities = t.capabilities, this.audioSources = {}
        }, n.register = function(e, t) {
            this.audioSources[e] = !0;
            for (var n = createjs.HTMLAudioPlugin.TagPool.get(e), r = null, i = t || this.defaultNumChannels, s = 0; i > s; s++) r = this.createTag(e), n.add(r);
            if (r.id = e, this.loadedHandler = createjs.proxy(this.handleTagLoad, this), r.addEventListener && r.addEventListener("canplaythrough", this.loadedHandler), null == r.onreadystatechange) r.onreadystatechange = this.loadedHandler;
            else {
                var o = r.onreadystatechange;
                r.onreadystatechange = function() {
                    o(), this.loadedHandler()
                }
            }
            return {
                tag: r,
                numChannels: i
            }
        }, n.handleTagLoad = function(e) {
            e.target.removeEventListener && e.target.removeEventListener("canplaythrough", this.loadedHandler), e.target.onreadystatechange = null, e.target.src != e.target.id && createjs.HTMLAudioPlugin.TagPool.checkSrc(e.target.id)
        }, n.createTag = function(e) {
            var t = document.createElement("audio");
            return t.autoplay = !1, t.preload = "none", t.src = e, t
        }, n.removeSound = function(e) {
            delete this.audioSources[e], createjs.HTMLAudioPlugin.TagPool.remove(e)
        }, n.removeAllSounds = function() {
            this.audioSources = {}, createjs.HTMLAudioPlugin.TagPool.removeAll()
        }, n.create = function(e) {
            if (!this.isPreloadStarted(e)) {
                var t = createjs.HTMLAudioPlugin.TagPool.get(e),
                    n = this.createTag(e);
                n.id = e, t.add(n), this.preload(e, {
                    tag: n
                })
            }
            return new createjs.HTMLAudioPlugin.SoundInstance(e, this)
        }, n.isPreloadStarted = function(e) {
            return null != this.audioSources[e]
        }, n.preload = function(e, t, n) {
            this.audioSources[e] = !0, null != n && (t.tag.src = n + e), new createjs.HTMLAudioPlugin.Loader(e, t.tag)
        }, n.toString = function() {
            return "[HTMLAudioPlugin]"
        }, createjs.HTMLAudioPlugin = e
    }(),
    function() {
        "use strict";

        function e(e, t) {
            this.init(e, t)
        }
        var t = e.prototype;
        t.src = null, t.uniqueId = -1, t.playState = null, t.owner = null, t.loaded = !1, t.offset = 0, t.delay = 0, t._volume = 1, Object.defineProperty(t, "volume", {
            get: function() {
                return this._volume
            },
            set: function(e) {
                null != Number(e) && (e = Math.max(0, Math.min(1, e)), this._volume = e, this.updateVolume())
            }
        }), t.pan = 0, t.duration = 0, t.remainingLoops = 0, t.delayTimeoutId = null, t.tag = null, t.muted = !1, t.paused = !1, t.addEventListener = null, t.removeEventListener = null, t.removeAllEventListeners = null, t.dispatchEvent = null, t.hasEventListener = null, t._listeners = null, t.endedHandler = null, t.readyHandler = null, t.stalledHandler = null, t.loopHandler = null, t.init = function(e, t) {
            this.src = e, this.owner = t, this.endedHandler = createjs.proxy(this.handleSoundComplete, this), this.readyHandler = createjs.proxy(this.handleSoundReady, this), this.stalledHandler = createjs.proxy(this.handleSoundStalled, this), this.loopHandler = createjs.proxy(this.handleSoundLoop, this)
        }, t.sendEvent = function(e) {
            var t = new createjs.Event(e);
            this.dispatchEvent(t)
        }, t.cleanUp = function() {
            var e = this.tag;
            if (null != e) {
                e.pause(), e.removeEventListener(createjs.HTMLAudioPlugin.AUDIO_ENDED, this.endedHandler, !1), e.removeEventListener(createjs.HTMLAudioPlugin.AUDIO_READY, this.readyHandler, !1), e.removeEventListener(createjs.HTMLAudioPlugin.AUDIO_SEEKED, this.loopHandler, !1);
                try {
                    e.currentTime = 0
                } catch (t) {}
                createjs.HTMLAudioPlugin.TagPool.setInstance(this.src, e), this.tag = null
            }
            clearTimeout(this.delayTimeoutId), null != window.createjs && createjs.Sound.playFinished(this)
        }, t.interrupt = function() {
            null != this.tag && (this.playState = createjs.Sound.PLAY_INTERRUPTED, this.cleanUp(), this.paused = !1, this.sendEvent("interrupted"))
        }, t.play = function(e, t, n, r, i, s) {
            this.cleanUp(), createjs.Sound.playInstance(this, e, t, n, r, i, s)
        }, t.beginPlaying = function(e, t, n, r) {
            if (null == window.createjs) return -1;
            var i = this.tag = createjs.HTMLAudioPlugin.TagPool.getInstance(this.src);
            return null == i ? (this.playFailed(), -1) : (i.addEventListener(createjs.HTMLAudioPlugin.AUDIO_ENDED, this.endedHandler, !1), this.offset = e, this.volume = n, this.pan = r, this.updateVolume(), this.remainingLoops = t, 4 !== i.readyState ? (i.addEventListener(createjs.HTMLAudioPlugin.AUDIO_READY, this.readyHandler, !1), i.addEventListener(createjs.HTMLAudioPlugin.AUDIO_STALLED, this.stalledHandler, !1), i.preload = "auto", i.load()) : this.handleSoundReady(null), this.sendEvent("succeeded"), 1)
        }, t.handleSoundStalled = function() {
            this.cleanUp(), this.sendEvent("failed")
        }, t.handleSoundReady = function() {
            if (null != window.createjs) {
                if (this.duration = 1e3 * this.tag.duration, this.playState = createjs.Sound.PLAY_SUCCEEDED, this.paused = !1, this.tag.removeEventListener(createjs.HTMLAudioPlugin.AUDIO_READY, this.readyHandler, !1), this.offset >= this.getDuration()) return this.playFailed(), void 0;
                this.offset > 0 && (this.tag.currentTime = .001 * this.offset), -1 == this.remainingLoops && (this.tag.loop = !0), 0 != this.remainingLoops && (this.tag.addEventListener(createjs.HTMLAudioPlugin.AUDIO_SEEKED, this.loopHandler, !1), this.tag.loop = !0), this.tag.play()
            }
        }, t.pause = function() {
            return this.paused || this.playState != createjs.Sound.PLAY_SUCCEEDED || null == this.tag ? !1 : (this.paused = !0, this.tag.pause(), clearTimeout(this.delayTimeoutId), !0)
        }, t.resume = function() {
            return this.paused && null != this.tag ? (this.paused = !1, this.tag.play(), !0) : !1
        }, t.stop = function() {
            return this.offset = 0, this.pause(), this.playState = createjs.Sound.PLAY_FINISHED, this.cleanUp(), !0
        }, t.setMasterVolume = function() {
            return this.updateVolume(), !0
        }, t.setVolume = function(e) {
            return this.volume = e, !0
        }, t.updateVolume = function() {
            if (null != this.tag) {
                var e = this.muted || createjs.Sound.masterMute ? 0 : this._volume * createjs.Sound.masterVolume;
                return e != this.tag.volume && (this.tag.volume = e), !0
            }
            return !1
        }, t.getVolume = function() {
            return this.volume
        }, t.setMasterMute = function() {
            return this.updateVolume(), !0
        }, t.setMute = function(e) {
            return null == e || void 0 == e ? !1 : (this.muted = e, this.updateVolume(), !0)
        }, t.getMute = function() {
            return this.muted
        }, t.setPan = function() {
            return !1
        }, t.getPan = function() {
            return 0
        }, t.getPosition = function() {
            return null == this.tag ? this.offset : 1e3 * this.tag.currentTime
        }, t.setPosition = function(e) {
            if (null == this.tag) this.offset = e;
            else {
                this.tag.removeEventListener(createjs.HTMLAudioPlugin.AUDIO_SEEKED, this.loopHandler, !1);
                try {
                    this.tag.currentTime = .001 * e
                } catch (t) {
                    return !1
                }
                this.tag.addEventListener(createjs.HTMLAudioPlugin.AUDIO_SEEKED, this.loopHandler, !1)
            }
            return !0
        }, t.getDuration = function() {
            return this.duration
        }, t.handleSoundComplete = function() {
            this.offset = 0, null != window.createjs && (this.playState = createjs.Sound.PLAY_FINISHED, this.cleanUp(), this.sendEvent("complete"))
        }, t.handleSoundLoop = function() {
            this.offset = 0, this.remainingLoops--, 0 == this.remainingLoops && (this.tag.loop = !1, this.tag.removeEventListener(createjs.HTMLAudioPlugin.AUDIO_SEEKED, this.loopHandler, !1)), this.sendEvent("loop")
        }, t.playFailed = function() {
            null != window.createjs && (this.playState = createjs.Sound.PLAY_FAILED, this.cleanUp(), this.sendEvent("failed"))
        }, t.toString = function() {
            return "[HTMLAudioPlugin SoundInstance]"
        }, createjs.EventDispatcher.initialize(e.prototype), createjs.HTMLAudioPlugin.SoundInstance = e
    }(),
    function() {
        "use strict";

        function e(e, t) {
            this.init(e, t)
        }
        var t = e.prototype;
        t.src = null, t.tag = null, t.preloadTimer = null, t.loadedHandler = null, t.init = function(e, t) {
            if (this.src = e, this.tag = t, this.preloadTimer = setInterval(createjs.proxy(this.preloadTick, this), 200), this.loadedHandler = createjs.proxy(this.sendLoadedEvent, this), this.tag.addEventListener && this.tag.addEventListener("canplaythrough", this.loadedHandler), null == this.tag.onreadystatechange) this.tag.onreadystatechange = createjs.proxy(this.sendLoadedEvent, this);
            else {
                var n = this.tag.onreadystatechange;
                this.tag.onreadystatechange = function() {
                    n(), this.tag.onreadystatechange = createjs.proxy(this.sendLoadedEvent, this)
                }
            }
            this.tag.preload = "auto", this.tag.load()
        }, t.preloadTick = function() {
            var e = this.tag.buffered,
                t = this.tag.duration;
            e.length > 0 && e.end(0) >= t - 1 && this.handleTagLoaded()
        }, t.handleTagLoaded = function() {
            clearInterval(this.preloadTimer)
        }, t.sendLoadedEvent = function() {
            this.tag.removeEventListener && this.tag.removeEventListener("canplaythrough", this.loadedHandler), this.tag.onreadystatechange = null, createjs.Sound.sendFileLoadEvent(this.src)
        }, t.toString = function() {
            return "[HTMLAudioPlugin Loader]"
        }, createjs.HTMLAudioPlugin.Loader = e
    }(),
    function() {
        "use strict";

        function e(e) {
            this.init(e)
        }
        var t = e;
        t.tags = {}, t.get = function(n) {
            var r = t.tags[n];
            return null == r && (r = t.tags[n] = new e(n)), r
        }, t.remove = function(e) {
            var n = t.tags[e];
            return null == n ? !1 : (n.removeAll(), delete t.tags[e], !0)
        }, t.removeAll = function() {
            for (var e in t.tags) t.tags[e].removeAll();
            t.tags = {}
        }, t.getInstance = function(e) {
            var n = t.tags[e];
            return null == n ? null : n.get()
        }, t.setInstance = function(e, n) {
            var r = t.tags[e];
            return null == r ? null : r.set(n)
        }, t.checkSrc = function(e) {
            var n = t.tags[e];
            return null == n ? null : (n.checkSrcChange(), void 0)
        };
        var n = e.prototype;
        n.src = null, n.length = 0, n.available = 0, n.tags = null, n.init = function(e) {
            this.src = e, this.tags = []
        }, n.add = function(e) {
            this.tags.push(e), this.length++, this.available++
        }, n.removeAll = function() {
            for (; this.length--;) delete this.tags[this.length];
            this.src = null, this.tags.length = 0
        }, n.get = function() {
            if (0 == this.tags.length) return null;
            this.available = this.tags.length;
            var e = this.tags.pop();
            return null == e.parentNode && document.body.appendChild(e), e
        }, n.set = function(e) {
            var t = createjs.indexOf(this.tags, e); - 1 == t && this.tags.push(e), this.available = this.tags.length
        }, n.checkSrcChange = function() {
            for (var e = this.tags.length - 1, t = this.tags[e].src; e--;) this.tags[e].src = t
        }, n.toString = function() {
            return "[HTMLAudioPlugin TagPool]"
        }, createjs.HTMLAudioPlugin.TagPool = e
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";
        var e = function(e, t, n) {
                this.initialize(e, t, n)
            },
            t = e.prototype = new createjs.EventDispatcher;
        e.NONE = 0, e.LOOP = 1, e.REVERSE = 2, e.IGNORE = {}, e._tweens = [], e._plugins = {}, e.get = function(t, n, r, i) {
            return i && e.removeTweens(t), new e(t, n, r)
        }, e.tick = function(t, n) {
            for (var r = e._tweens.slice(), i = r.length - 1; i >= 0; i--) {
                var s = r[i];
                n && !s.ignoreGlobalPause || s._paused || s.tick(s._useTicks ? 1 : t)
            }
        }, e.handleEvent = function(e) {
            "tick" == e.type && this.tick(e.delta, e.paused)
        }, e.removeTweens = function(t) {
            if (t.tweenjs_count) {
                for (var n = e._tweens, r = n.length - 1; r >= 0; r--) n[r]._target == t && (n[r]._paused = !0, n.splice(r, 1));
                t.tweenjs_count = 0
            }
        }, e.removeAllTweens = function() {
            for (var t = e._tweens, n = 0, r = t.length; r > n; n++) {
                var i = t[n];
                i.paused = !0, i.target.tweenjs_count = 0
            }
            t.length = 0
        }, e.hasActiveTweens = function(t) {
            return t ? t.tweenjs_count : e._tweens && !!e._tweens.length
        }, e.installPlugin = function(t, n) {
            var r = t.priority;
            null == r && (t.priority = r = 0);
            for (var i = 0, s = n.length, o = e._plugins; s > i; i++) {
                var u = n[i];
                if (o[u]) {
                    for (var f = o[u], l = 0, c = f.length; c > l && !(r < f[l].priority); l++);
                    o[u].splice(l, 0, t)
                } else o[u] = [t]
            }
        }, e._register = function(t, n) {
            var r = t._target,
                i = e._tweens;
            if (n) r && (r.tweenjs_count = r.tweenjs_count ? r.tweenjs_count + 1 : 1), i.push(t), !e._inited && createjs.Ticker && (createjs.Ticker.addEventListener("tick", e), e._inited = !0);
            else {
                r && r.tweenjs_count--;
                for (var s = i.length; s--;)
                    if (i[s] == t) return i.splice(s, 1), void 0
            }
        }, t.ignoreGlobalPause = !1, t.loop = !1, t.duration = 0, t.pluginData = null, t.target = null, t.position = null, t.passive = !1, t._paused = !1, t._curQueueProps = null, t._initQueueProps = null, t._steps = null, t._actions = null, t._prevPosition = 0, t._stepPosition = 0, t._prevPos = -1, t._target = null, t._useTicks = !1, t._inited = !1, t.initialize = function(t, n, r) {
            this.target = this._target = t, n && (this._useTicks = n.useTicks, this.ignoreGlobalPause = n.ignoreGlobalPause, this.loop = n.loop, n.onChange && this.addEventListener("change", n.onChange), n.override && e.removeTweens(t)), this.pluginData = r || {}, this._curQueueProps = {}, this._initQueueProps = {}, this._steps = [], this._actions = [], n && n.paused ? this._paused = !0 : e._register(this, !0), n && null != n.position && this.setPosition(n.position, e.NONE)
        }, t.wait = function(e, t) {
            if (null == e || 0 >= e) return this;
            var n = this._cloneProps(this._curQueueProps);
            return this._addStep({
                d: e,
                p0: n,
                e: this._linearEase,
                p1: n,
                v: t
            })
        }, t.to = function(e, t, n) {
            return (isNaN(t) || 0 > t) && (t = 0), this._addStep({
                d: t || 0,
                p0: this._cloneProps(this._curQueueProps),
                e: n,
                p1: this._cloneProps(this._appendQueueProps(e))
            })
        }, t.call = function(e, t, n) {
            return this._addAction({
                f: e,
                p: t ? t : [this],
                o: n ? n : this._target
            })
        }, t.set = function(e, t) {
            return this._addAction({
                f: this._set,
                o: this,
                p: [e, t ? t : this._target]
            })
        }, t.play = function(e) {
            return e || (e = this), this.call(e.setPaused, [!1], e)
        }, t.pause = function(e) {
            return e || (e = this), this.call(e.setPaused, [!0], e)
        }, t.setPosition = function(e, t) {
            0 > e && (e = 0), null == t && (t = 1);
            var n = e,
                r = !1;
            if (n >= this.duration && (this.loop ? n %= this.duration : (n = this.duration, r = !0)), n == this._prevPos) return r;
            var i = this._prevPos;
            if (this.position = this._prevPos = n, this._prevPosition = e, this._target)
                if (r) this._updateTargetProps(null, 1);
                else if (this._steps.length > 0) {
                for (var s = 0, o = this._steps.length; o > s && !(this._steps[s].t > n); s++);
                var u = this._steps[s - 1];
                this._updateTargetProps(u, (this._stepPosition = n - u.t) / u.d)
            }
            return 0 != t && this._actions.length > 0 && (this._useTicks ? this._runActions(n, n) : 1 == t && i > n ? (i != this.duration && this._runActions(i, this.duration), this._runActions(0, n, !0)) : this._runActions(i, n)), r && this.setPaused(!0), this.dispatchEvent("change"), r
        }, t.tick = function(e) {
            this._paused || this.setPosition(this._prevPosition + e)
        }, t.setPaused = function(t) {
            return this._paused = !!t, e._register(this, !t), this
        }, t.w = t.wait, t.t = t.to, t.c = t.call, t.s = t.set, t.toString = function() {
            return "[Tween]"
        }, t.clone = function() {
            throw "Tween can not be cloned."
        }, t._updateTargetProps = function(t, n) {
            var r, i, s, o, u, f;
            if (t || 1 != n) {
                if (this.passive = !!t.v, this.passive) return;
                t.e && (n = t.e(n, 0, 1, 1)), r = t.p0, i = t.p1
            } else this.passive = !1, r = i = this._curQueueProps;
            for (var l in this._initQueueProps) {
                null == (o = r[l]) && (r[l] = o = this._initQueueProps[l]), null == (u = i[l]) && (i[l] = u = o), s = o == u || 0 == n || 1 == n || "number" != typeof o ? 1 == n ? u : o : o + (u - o) * n;
                var c = !1;
                if (f = e._plugins[l])
                    for (var h = 0, p = f.length; p > h; h++) {
                        var d = f[h].tween(this, l, s, r, i, n, !!t && r == i, !t);
                        d == e.IGNORE ? c = !0 : s = d
                    }
                c || (this._target[l] = s)
            }
        }, t._runActions = function(e, t, n) {
            var r = e,
                i = t,
                s = -1,
                o = this._actions.length,
                u = 1;
            for (e > t && (r = t, i = e, s = o, o = u = -1);
                (s += u) != o;) {
                var a = this._actions[s],
                    f = a.t;
                (f == i || f > r && i > f || n && f == e) && a.f.apply(a.o, a.p)
            }
        }, t._appendQueueProps = function(t) {
            var n, r, i, s, o;
            for (var u in t)
                if (void 0 === this._initQueueProps[u]) {
                    if (r = this._target[u], n = e._plugins[u])
                        for (i = 0, s = n.length; s > i; i++) r = n[i].init(this, u, r);
                    this._initQueueProps[u] = this._curQueueProps[u] = void 0 === r ? null : r
                } else r = this._curQueueProps[u];
            for (var u in t) {
                if (r = this._curQueueProps[u], n = e._plugins[u])
                    for (o = o || {}, i = 0, s = n.length; s > i; i++) n[i].step && n[i].step(this, u, r, t[u], o);
                this._curQueueProps[u] = t[u]
            }
            return o && this._appendQueueProps(o), this._curQueueProps
        }, t._cloneProps = function(e) {
            var t = {};
            for (var n in e) t[n] = e[n];
            return t
        }, t._addStep = function(e) {
            return e.d > 0 && (this._steps.push(e), e.t = this.duration, this.duration += e.d), this
        }, t._addAction = function(e) {
            return e.t = this.duration, this._actions.push(e), this
        }, t._set = function(e, t) {
            for (var n in e) t[n] = e[n]
        }, createjs.Tween = e
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";
        var e = function(e, t, n) {
                this.initialize(e, t, n)
            },
            t = e.prototype = new createjs.EventDispatcher;
        t.ignoreGlobalPause = !1, t.duration = 0, t.loop = !1, t.position = null, t._paused = !1, t._tweens = null, t._labels = null, t._labelList = null, t._prevPosition = 0, t._prevPos = -1, t._useTicks = !1, t.initialize = function(e, t, n) {
            this._tweens = [], n && (this._useTicks = n.useTicks, this.loop = n.loop, this.ignoreGlobalPause = n.ignoreGlobalPause, n.onChange && this.addEventListener("change", n.onChange)), e && this.addTween.apply(this, e), this.setLabels(t), n && n.paused ? this._paused = !0 : createjs.Tween._register(this, !0), n && null != n.position && this.setPosition(n.position, createjs.Tween.NONE)
        }, t.addTween = function(e) {
            var t = arguments.length;
            if (t > 1) {
                for (var n = 0; t > n; n++) this.addTween(arguments[n]);
                return arguments[0]
            }
            return 0 == t ? null : (this.removeTween(e), this._tweens.push(e), e.setPaused(!0), e._paused = !1, e._useTicks = this._useTicks, e.duration > this.duration && (this.duration = e.duration), this._prevPos >= 0 && e.setPosition(this._prevPos, createjs.Tween.NONE), e)
        }, t.removeTween = function(e) {
            var t = arguments.length;
            if (t > 1) {
                for (var n = !0, r = 0; t > r; r++) n = n && this.removeTween(arguments[r]);
                return n
            }
            if (0 == t) return !1;
            for (var i = this._tweens, r = i.length; r--;)
                if (i[r] == e) return i.splice(r, 1), e.duration >= this.duration && this.updateDuration(), !0;
            return !1
        }, t.addLabel = function(e, t) {
            this._labels[e] = t;
            var n = this._labelList;
            if (n) {
                for (var r = 0, i = n.length; i > r && !(t < n[r].position); r++);
                n.splice(r, 0, {
                    label: e,
                    position: t
                })
            }
        }, t.setLabels = function(e) {
            this._labels = e ? e : {}
        }, t.getLabels = function() {
            var e = this._labelList;
            if (!e) {
                e = this._labelList = [];
                var t = this._labels;
                for (var n in t) e.push({
                    label: n,
                    position: t[n]
                });
                e.sort(function(e, t) {
                    return e.position - t.position
                })
            }
            return e
        }, t.getCurrentLabel = function() {
            var e = this.getLabels(),
                t = this.position,
                n = e.length;
            if (n) {
                for (var r = 0; n > r && !(t < e[r].position); r++);
                return 0 == r ? null : e[r - 1].label
            }
            return null
        }, t.gotoAndPlay = function(e) {
            this.setPaused(!1), this._goto(e)
        }, t.gotoAndStop = function(e) {
            this.setPaused(!0), this._goto(e)
        }, t.setPosition = function(e, t) {
            0 > e && (e = 0);
            var n = this.loop ? e % this.duration : e,
                r = !this.loop && e >= this.duration;
            if (n == this._prevPos) return r;
            this._prevPosition = e, this.position = this._prevPos = n;
            for (var i = 0, s = this._tweens.length; s > i; i++)
                if (this._tweens[i].setPosition(n, t), n != this._prevPos) return !1;
            return r && this.setPaused(!0), this.dispatchEvent("change"), r
        }, t.setPaused = function(e) {
            this._paused = !!e, createjs.Tween._register(this, !e)
        }, t.updateDuration = function() {
            this.duration = 0;
            for (var e = 0, t = this._tweens.length; t > e; e++) {
                var n = this._tweens[e];
                n.duration > this.duration && (this.duration = n.duration)
            }
        }, t.tick = function(e) {
            this.setPosition(this._prevPosition + e)
        }, t.resolve = function(e) {
            var t = parseFloat(e);
            return isNaN(t) && (t = this._labels[e]), t
        }, t.toString = function() {
            return "[Timeline]"
        }, t.clone = function() {
            throw "Timeline can not be cloned."
        }, t._goto = function(e) {
            var t = this.resolve(e);
            null != t && this.setPosition(t)
        }, createjs.Timeline = e
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";
        var e = function() {
            throw "Ease cannot be instantiated."
        };
        e.linear = function(e) {
            return e
        }, e.none = e.linear, e.get = function(e) {
            return -1 > e && (e = -1), e > 1 && (e = 1),
                function(t) {
                    return 0 == e ? t : 0 > e ? t * (t * -e + 1 + e) : t * ((2 - t) * e + (1 - e))
                }
        }, e.getPowIn = function(e) {
            return function(t) {
                return Math.pow(t, e)
            }
        }, e.getPowOut = function(e) {
            return function(t) {
                return 1 - Math.pow(1 - t, e)
            }
        }, e.getPowInOut = function(e) {
            return function(t) {
                return (t *= 2) < 1 ? .5 * Math.pow(t, e) : 1 - .5 * Math.abs(Math.pow(2 - t, e))
            }
        }, e.quadIn = e.getPowIn(2), e.quadOut = e.getPowOut(2), e.quadInOut = e.getPowInOut(2), e.cubicIn = e.getPowIn(3), e.cubicOut = e.getPowOut(3), e.cubicInOut = e.getPowInOut(3), e.quartIn = e.getPowIn(4), e.quartOut = e.getPowOut(4), e.quartInOut = e.getPowInOut(4), e.quintIn = e.getPowIn(5), e.quintOut = e.getPowOut(5), e.quintInOut = e.getPowInOut(5), e.sineIn = function(e) {
            return 1 - Math.cos(e * Math.PI / 2)
        }, e.sineOut = function(e) {
            return Math.sin(e * Math.PI / 2)
        }, e.sineInOut = function(e) {
            return -0.5 * (Math.cos(Math.PI * e) - 1)
        }, e.getBackIn = function(e) {
            return function(t) {
                return t * t * ((e + 1) * t - e)
            }
        }, e.backIn = e.getBackIn(1.7), e.getBackOut = function(e) {
            return function(t) {
                return --t * t * ((e + 1) * t + e) + 1
            }
        }, e.backOut = e.getBackOut(1.7), e.getBackInOut = function(e) {
            return e *= 1.525,
                function(t) {
                    return (t *= 2) < 1 ? .5 * t * t * ((e + 1) * t - e) : .5 * ((t -= 2) * t * ((e + 1) * t + e) + 2)
                }
        }, e.backInOut = e.getBackInOut(1.7), e.circIn = function(e) {
            return -(Math.sqrt(1 - e * e) - 1)
        }, e.circOut = function(e) {
            return Math.sqrt(1 - --e * e)
        }, e.circInOut = function(e) {
            return (e *= 2) < 1 ? -0.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
        }, e.bounceIn = function(t) {
            return 1 - e.bounceOut(1 - t)
        }, e.bounceOut = function(e) {
            return 1 / 2.75 > e ? 7.5625 * e * e : 2 / 2.75 > e ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : 2.5 / 2.75 > e ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
        }, e.bounceInOut = function(t) {
            return .5 > t ? .5 * e.bounceIn(2 * t) : .5 * e.bounceOut(2 * t - 1) + .5
        }, e.getElasticIn = function(e, t) {
            var n = 2 * Math.PI;
            return function(r) {
                if (0 == r || 1 == r) return r;
                var i = t / n * Math.asin(1 / e);
                return -(e * Math.pow(2, 10 * (r -= 1)) * Math.sin((r - i) * n / t))
            }
        }, e.elasticIn = e.getElasticIn(1, .3), e.getElasticOut = function(e, t) {
            var n = 2 * Math.PI;
            return function(r) {
                if (0 == r || 1 == r) return r;
                var i = t / n * Math.asin(1 / e);
                return e * Math.pow(2, -10 * r) * Math.sin((r - i) * n / t) + 1
            }
        }, e.elasticOut = e.getElasticOut(1, .3), e.getElasticInOut = function(e, t) {
            var n = 2 * Math.PI;
            return function(r) {
                var i = t / n * Math.asin(1 / e);
                return (r *= 2) < 1 ? -0.5 * e * Math.pow(2, 10 * (r -= 1)) * Math.sin((r - i) * n / t) : .5 * e * Math.pow(2, -10 * (r -= 1)) * Math.sin((r - i) * n / t) + 1
            }
        }, e.elasticInOut = e.getElasticInOut(1, .3 * 1.5), createjs.Ease = e
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";
        var e = function() {
            throw "MotionGuidePlugin cannot be instantiated."
        };
        e.priority = 0, e._rotOffS, e._rotOffE, e._rotNormS, e._rotNormE, e.install = function() {
            return createjs.Tween.installPlugin(e, ["guide", "x", "y", "rotation"]), createjs.Tween.IGNORE
        }, e.init = function(e, t, n) {
            var r = e.target;
            return r.hasOwnProperty("x") || (r.x = 0), r.hasOwnProperty("y") || (r.y = 0), r.hasOwnProperty("rotation") || (r.rotation = 0), "rotation" == t && (e.__needsRot = !0), "guide" == t ? null : n
        }, e.step = function(t, n, r, i, s) {
            if ("rotation" == n && (t.__rotGlobalS = r, t.__rotGlobalE = i, e.testRotData(t, s)), "guide" != n) return i;
            var o, u = i;
            u.hasOwnProperty("path") || (u.path = []);
            var f = u.path;
            if (u.hasOwnProperty("end") || (u.end = 1), u.hasOwnProperty("start") || (u.start = r && r.hasOwnProperty("end") && r.path === f ? r.end : 0), u.hasOwnProperty("_segments") && u._length) return i;
            var l = f.length,
                c = 10;
            if (l >= 6 && 0 == (l - 2) % 4) {
                u._segments = [], u._length = 0;
                for (var h = 2; l > h; h += 4) {
                    for (var p, d, v = f[h - 2], m = f[h - 1], g = f[h + 0], y = f[h + 1], b = f[h + 2], w = f[h + 3], E = v, S = m, x = 0, T = [], N = 1; c >= N; N++) {
                        var C = N / c,
                            k = 1 - C;
                        p = k * k * v + 2 * k * C * g + C * C * b, d = k * k * m + 2 * k * C * y + C * C * w, x += T[T.push(Math.sqrt((o = p - E) * o + (o = d - S) * o)) - 1], E = p, S = d
                    }
                    u._segments.push(x), u._segments.push(T), u._length += x
                }
                o = u.orient, u.orient = !0;
                var L = {};
                return e.calc(u, u.start, L), t.__rotPathS = Number(L.rotation.toFixed(5)), e.calc(u, u.end, L), t.__rotPathE = Number(L.rotation.toFixed(5)), u.orient = !1, e.calc(u, u.end, s), u.orient = o, u.orient ? (t.__guideData = u, e.testRotData(t, s), i) : i
            }
            throw "invalid 'path' data, please see documentation for valid paths"
        }, e.testRotData = function(e, t) {
            if (void 0 === e.__rotGlobalS || void 0 === e.__rotGlobalE) {
                if (e.__needsRot) return;
                e.__rotGlobalS = e.__rotGlobalE = void 0 !== e._curQueueProps.rotation ? e._curQueueProps.rotation : t.rotation = e.target.rotation || 0
            }
            if (void 0 !== e.__guideData) {
                var n = e.__guideData,
                    r = e.__rotGlobalE - e.__rotGlobalS,
                    i = e.__rotPathE - e.__rotPathS,
                    s = r - i;
                if ("auto" == n.orient) s > 180 ? s -= 360 : -180 > s && (s += 360);
                else if ("cw" == n.orient) {
                    for (; 0 > s;) s += 360;
                    0 == s && r > 0 && 180 != r && (s += 360)
                } else if ("ccw" == n.orient) {
                    for (s = r - (i > 180 ? 360 - i : i); s > 0;) s -= 360;
                    0 == s && 0 > r && -180 != r && (s -= 360)
                }
                n.rotDelta = s, n.rotOffS = e.__rotGlobalS - e.__rotPathS, e.__rotGlobalS = e.__rotGlobalE = e.__guideData = e.__needsRot = void 0
            }
        }, e.tween = function(t, n, r, i, s, o, u) {
            var f = s.guide;
            if (void 0 == f || f === i.guide) return r;
            if (f.lastRatio != o) {
                var l = (f.end - f.start) * (u ? f.end : o) + f.start;
                switch (e.calc(f, l, t.target), f.orient) {
                    case "cw":
                    case "ccw":
                    case "auto":
                        t.target.rotation += f.rotOffS + f.rotDelta * o;
                        break;
                    case "fixed":
                    default:
                        t.target.rotation += f.rotOffS
                }
                f.lastRatio = o
            }
            return "rotation" != n || f.orient && "false" != f.orient ? t.target[n] : r
        }, e.calc = function(t, n, r) {
            void 0 == t._segments && e.validate(t), void 0 == r && (r = {
                x: 0,
                y: 0,
                rotation: 0
            });
            for (var i = t._segments, s = t.path, o = t._length * n, u = i.length - 2, f = 0; o > i[f] && u > f;) o -= i[f], f += 2;
            var l = i[f + 1],
                c = 0;
            for (u = l.length - 1; o > l[c] && u > c;) o -= l[c], c++;
            var h = c / ++u + o / (u * l[c]);
            f = 2 * f + 2;
            var p = 1 - h;
            return r.x = p * p * s[f - 2] + 2 * p * h * s[f + 0] + h * h * s[f + 2], r.y = p * p * s[f - 1] + 2 * p * h * s[f + 1] + h * h * s[f + 3], t.orient && (r.rotation = 57.2957795 * Math.atan2((s[f + 1] - s[f - 1]) * p + (s[f + 3] - s[f + 1]) * h, (s[f + 0] - s[f - 2]) * p + (s[f + 2] - s[f + 0]) * h)), r
        }, createjs.MotionGuidePlugin = e
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";
        var e = createjs.TweenJS = createjs.TweenJS || {};
        e.version = "NEXT", e.buildDate = "Tue, 01 Oct 2013 16:03:38 GMT"
    }(),
    function() {
        function e(n) {
            if (!(this instanceof e)) return new e(n);
            this.map = t({}, n), this.rules = "", this.elem = null
        }

        function t() {
            var e = {},
                t, n, r;
            for (t = 0; t < arguments.length; t += 1) {
                n = arguments[t];
                for (r in n) n.hasOwnProperty(r) && (e[r] = n[r])
            }
            return e
        }

        function n(e) {
            return [].join.call(e, "")
        }

        function r() {
            var e = document.createElement("style"),
                t = document.getElementsByTagName("head")[0];
            return t && t.appendChild(e), e
        }

        function i(e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e = e.replace(new RegExp("@" + n, "gi"), t[n]));
            return e
        }

        function s(e, t) {
            e && e.tagName.toLowerCase() === "style" && (e.styleSheet ? e.styleSheet.cssText = t : e.innerHTML = t)
        }

        function o(e, t, n) {
            s(e, i(t, n))
        }
        e.prototype = {
            define: function(e) {
                return this.map = t(this.map, e), this
            },
            add: function() {
                var e = n(arguments);
                return e && (this.rules += e), this
            },
            load: function() {
                return this.elem || (this.elem = r()), arguments.length && this.add.apply(this, arguments), o(this.elem, this.rules, this.map), this
            },
            clear: function() {
                return s(this.elem, ""), this.rules = "", this.map = {}, this
            },
            remove: function() {
                var e = this.elem;
                return e && e.parentNode && (this.clear(), this.elem = null, e.parentNode.removeChild(e)), this
            }
        }, window.Style = e
    }(),
    function() {
        var e = 0,
            t = ["ms", "moz", "webkit", "o"];
        for (var n = 0; n < t.length && !window.requestAnimationFrame; ++n) window.requestAnimationFrame = window[t[n] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[t[n] + "CancelAnimationFrame"] || window[t[n] + "CancelRequestAnimationFrame"];
        window.requestAnimationFrame || (window.requestAnimationFrame = function(t, n) {
            var r = (new Date).getTime(),
                i = Math.max(0, 16 - (r - e)),
                s = window.setTimeout(function() {
                    t(r + i)
                }, i);
            return e = r + i, s
        }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(e) {
            clearTimeout(e)
        })
    }();
var InfoObject = function(e, t) {
    var n = {};
    return e == "t1" && (n.img = "1.png"), e == "t2" && (n.img = "2.png"), e == "t3" && (n.img = "3.png"), e == "t4" && (n.img = "4.png"), e == "t5" && (n.img = "5.png"), e == "t6" && (n.img = "6.png"), e == "t7" && (n.img = "7.png"), e == "t8" && (n.img = "8.png"), e == "t9" && (n.img = "9.png"), e == "t10" && (n.img = "10.png"), t >= 1e3 ? (n.title = "调情大神&nbsp;", n.text = "你是神一样的存在，</br> 拆开岡本，冲刺吧！", n) : (t >= 800 && t <= 990 && (n.title = "调情大师", n.text = "其实海上生明月是一首湿..."), t >= 510 && t <= 800 && (n.title = "调情情圣", n.text = "赌圣诗圣都不及你这位情圣!"), t >= 310 && t <= 500 && (n.title = "调情教授", n.text = "岡本0.03最适合来自星星的你。"), t >= 110 && t <= 300 && (n.title = "调情专家", n.text = "就算是高手，用岡本才不失手哦~"), t <= 100 && (n.title = "调情菜鸟", n.text = "常备岡本，你可以飞得更高！"), window.oldObj = n, n)
};
(function() {
    function e(e) {
        return Math.floor(e * Math.random())
    }

    function t(e) {
        return parseInt(e, 10)
    }

    function n() {
        return {
            w: $(window).width(),
            h: $(window).height()
        }
    }

    function u(e) {
        return $(e).find(".target").data("tname") || ""
    }
    var r = function() {
            var t = '<div class="c"></div>',
                n = function() {
                    return '<div data-tname="t<tnum>" class="c target r<rnum> t<tnum>"><div class="placeholder"></div></div>'
                },
                r = [t + t + t + n(), t + t + n() + t, t + n() + t + t, n() + t + t + t, t + t + t + t],
                i = r.length,
                s = 1,
                o = [],
                u = 1;
            return {
                reset: function() {
                    u = 1
                },
                pending: function() {
                    var t = 1 + e(10);
                    while (t == o[s] || t == o[s - 1] || t == o[s - 2] || t == o[s - 3]) t = 1 + e(10);
                    return o[s++] = t, u > 10 && (u = 1), $('<div class="row">').html(r[e(i - 1)].replace(/<tnum>/g, t).replace(/<rnum>/g, u++))
                },
                zero: function() {
                    return $('<div class="row zero">').html(r[i - 1])
                },
                start: function() {
                    return this.pending().addClass("start tapping")
                }
            }
        }(),
        i = document.body,
        s = typeof i.style.webkitTransform != "undefined" ? "webkitTransform" : typeof i.style.msTransform != "undefined" ? "msTransform" : "transform",
        o = s.replace(/ransform/g, "ransitionDuration");
    createjs.Sound.registerSound({
        src: "mp3/end.mp3",
        id: "end"
    }), createjs.Sound.registerSound({
        src: "mp3/tap.mp3",
        id: "tap"
    });
    var a = function() {
        var e = [],
            t = $(".tiles"),
            n = t.get(0),
            i;
        return delete n.style[o], {
            init: function() {
                e = [], i = null, t.empty().get(0).style[s] = "", [].push.apply(e, arguments), this.each(function(e) {
                    t.append(e)
                })
            },
            each: function(t) {
                for (var n = 0; n < e.length; ++n) t(e[n], n)
            },
            hasTapping: function() {
                for (var t = 0; t < e.length; ++t)
                    if (e[t].hasClass("tapping")) return !0;
                return !1
            },
            length: function() {
                return e.length
            },
            eq: function(t) {
                return e[t]
            },
            append: function(n) {
                var s = r.pending().css("top", n);
                t.append(s), e.push(s);
                var o = e.shift();
                o.hasClass("tapping") ? (t.prepend(i), window.isGray = !0, Game.pause(), window.thisTarget = u(o), window.lastFail = o) : (i = o, o.remove(), o = null)
            }
        }
    }();
    window.Mode = {}, Mode.onstreet = function() {
        function S(e) {
            return e < 6e4 ? (e / 1e3).toFixed(3) + '"' : Math.floor(e / 6e4) + ":" + (e % 6e4 / 1e3).toFixed(3) + '"'
        }

        function x(e) {
            return e < 10 ? "00" + e * 10 : e < 100 ? "0" + e * 10 : e * 10
        }
        var e = Style(),
            t = n(),
            i, o, u = 1,
            f = 3,
            l = 0,
            c = 0,
            h = 0,
            p = Math.ceil(t.w / 4) + 1,
            d = Math.ceil(t.h / 4) + 2,
            v = $(".tiles"),
            m = $(".score"),
            g = $(".time-counter").html("0000"),
            y = v.get(0),
            b = +(new Date),
            w = +(new Date),
            E = window.onresize = function() {
                t = n(), p = Math.ceil(t.w / 4) + 1, d = Math.ceil(t.h / 4) + 2, e.clear().define({
                    cwidth: p + "px",
                    cheight: d + "px"
                }).define({
                    triple: d * 2 + "px",
                    minus: -d / 2 + "px"
                }).load(".c { width: @cwidth; height: @cheight }", ".placeholder {width: 100%; height: @triple; top: @minus }"), a.each(function(e, n) {
                    e.css("top", t.h - (n + 1) * d + n + "px")
                })
            },
            T = function() {
                g.html(x(h)), i = requestAnimationFrame(T), l >= u * (d - 1) && (a.append(-(u + 2) * d + u + "px"), u++), h >= 10 && (f = 4), h >= 20 && (f = 5), h >= 45 && (f = 6), h >= 70 && (f = 7), h >= 95 && (f = 8), h >= 120 && (f = 9), h >= 140 && (f = 10), h >= 160 && (f = 11), h >= 180 && (f = 12), y.style[s] = "translate3D(0, " + l + "px, 0)", l += f
            };
        return {
            ready: function() {
                this.score(0), this.resetScore(), u = 1, f = 4, l = 0, c = 0, h = 0, r.reset(), g.html("0000"), a.init(r.zero(), r.start(), r.pending(), r.pending(), r.pending(), r.pending()), E()
            },
            speed: function(e) {
                return f = e
            },
            run: function() {
                b = +(new Date), i && cancelAnimationFrame(i), i = requestAnimationFrame(T)
            },
            resetScore: function() {
                h = 0, this.score(0)
            },
            score: function(e) {
                if (e == undefined) return h;
                h += e, e && (h == 50, createjs.Sound.play("tap"))
            },
            pause: function(e) {
                cancelAnimationFrame(i);
                var t = this;
                createjs.Sound.play("end"), setTimeout(function() {
                    t.over(e)
                }, 800)
            },
            maxScore: function(e) {
                var t = localStorage.getItem("tile-score-max") || 0;
                return this.score() > t ? (window.isMaxScore = !0, localStorage.setItem("tile-score-max", t = this.score())) : window.isMaxScore = !1, t
            },
            over: function(e) {
                $over = $("#over"), setTimeout(function() {
                    $over.addClass("show"), window.bindOverEvent()
                });
                var t = InfoObject(window.thisTarget, h * 10);
                $("#time-counter").html("0000"), $("#score-new").html("得分: " + this.score() * 10), $(".info-title").html(t.title), $(".info-text").html(t.text), $(".info-img").attr("src", "images/trans/" + t.img);
                var n = localStorage.getItem("tile-score-max");
                n === null && (n = 0), parseInt(n) < this.score() && localStorage.setItem("tile-score-max", n = this.score()), $("#score-max").html("最佳:" + +n * 10)
            }
        }
    }()
})(),
function() {
    var e = $("#game"),
        t = $("#home"),
        n;
    window.Game = {
        home: function() {
            e.css("zIndex", 1), t.css("zIndex", 2)
        },
        over: function() {},
        status: !0,
        ready: function(r) {
            this.status = !0, r && (n = Mode[r]), n.ready(), e.css("zIndex", 2), t.css("zIndex", 1)
        },
        run: function() {
            this.status = !0, n.run()
        },
        pause: function() {
            this.status = !1, n.pause()
        },
        over: function() {
            n.over()
        },
        score: function(e) {
            n.score(e)
        },
        stepBack: function() {
            n.stepBack()
        }
    }
}(),
function() {
    $(".btn-game-ready").on("click", function(e) {
        var t = $(this).data("type");
        Game.ready(t), $(".tiles").hide().get(0).offsetHeight, $(".tiles").show(), ga && ga("send", "event", "Click", "进入")
    }), $(".tiles").on("touchstart", ".placeholder", function() {
        if (!Game.status) return !1;
        var e = $(this).parent(),
            t = e.parent();
        t.removeClass("tapping").next().addClass("tapping"), t.hasClass("start") && (setTimeout(function() {
            $(".tiles").hide().get(0).offsetHeight, $(".tiles").show()
        }, 20), Game.run()), Game.score(1), e.addClass("fired")
    }), window.bindOverEvent = function() {}, $("#gohome").on("click", function(e) {
        e.preventDefault(), $("#over").removeClass("show"), Game.home(), ga && ga("send", "event", "Click", "返回")
    }), $("#restart").on("click", function(e) {
        e.preventDefault(), $("#over").removeClass("show"), Game.ready(), ga && ga("send", "event", "Click", "重来")
    });
    var e = window.navigator.msPointerEnabled ? "MSPointerDown" : "touchmove";
    $(document).bind(e, function(e) {
        e && e.preventDefault ? e.preventDefault() : window.event.returnValue = !1
    }), $("#open-share").on("click", function(e) {
        e.preventDefault(), $(".share-bg").show().css("z-index", "111"), ga && ga("send", "event", "Click", "分享")
    }), $(".share-bg").on("click", function(e) {
        e.preventDefault(), $(this).hide().css("z-index", "-1")
    })
}();