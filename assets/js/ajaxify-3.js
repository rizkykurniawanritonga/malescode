String.prototype.iO = function(t) {
        return this.toString().indexOf(t) + 1
    },
    function(t) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], t) : jQuery && !jQuery.fn.hoverIntent && t(jQuery)
    }(function(t) {
        "use strict";
        var e, n, r = {
                interval: 100,
                sensitivity: 6,
                timeout: 0
            },
            i = 0,
            o = function(t) {
                e = t.pageX, n = t.pageY
            },
            s = function(t, r, i, a) {
                if (Math.sqrt((i.pX - e) * (i.pX - e) + (i.pY - n) * (i.pY - n)) < a.sensitivity) return r.off(i.event, o), delete i.timeoutId, i.isActive = !0, t.pageX = e, t.pageY = n, delete i.pX, delete i.pY, a.over.apply(r[0], [t]);
                i.pX = e, i.pY = n, i.timeoutId = setTimeout(function() {
                    s(t, r, i, a)
                }, a.interval)
            };
        t.fn.hoverIntent = function(e, n, a) {
            var l = i++,
                c = t.extend({}, r);
            t.isPlainObject(e) ? (c = t.extend(c, e), t.isFunction(c.out) || (c.out = c.over)) : c = t.isFunction(n) ? t.extend(c, {
                over: e,
                out: n,
                selector: a
            }) : t.extend(c, {
                over: e,
                out: e,
                selector: n
            });
            var f = function(e) {
                var n = t.extend({}, e),
                    r = t(this),
                    i = r.data("hoverIntent");
                i || r.data("hoverIntent", i = {});
                var a = i[l];
                a || (i[l] = a = {
                    id: l
                }), a.timeoutId && (a.timeoutId = clearTimeout(a.timeoutId));
                var f = a.event = "mousemove.hoverIntent.hoverIntent" + l;
                if ("mouseenter" === e.type) {
                    if (a.isActive) return;
                    a.pX = n.pageX, a.pY = n.pageY, r.off(f, o).on(f, o), a.timeoutId = setTimeout(function() {
                        s(n, r, a, c)
                    }, c.interval)
                } else {
                    if (!a.isActive) return;
                    r.off(f, o), a.timeoutId = setTimeout(function() {
                        ! function(t, e, n, r) {
                            var i = e.data("hoverIntent");
                            i && delete i[n.id], r.apply(e[0], [t])
                        }(n, r, a, c.out)
                    }, c.timeout)
                }
            };
            return this.on({
                "mouseenter.hoverIntent": f,
                "mouseleave.hoverIntent": f
            }, c.selector)
        }
    });
var lvl = 0,
    pass = 0,
    currentURL = "",
    rootUrl = getRootUrl(),
    api = window.history && window.history.pushState && window.history.replaceState,
    docType = /<\!DOCTYPE[^>]*>/i,
    tagso = /<(html|head|link)([\s\>])/gi,
    tagsod = /<(body)([\s\>])/gi,
    tagsc = /<\/(html|head|body|link)\>/gi,
    div12 = '<div class="ajy-$1"$2',
    divid12 = '<div id="ajy-$1"$2',
    linki = '<link rel="stylesheet" type="text/css" href="*" />',
    scri = '<script src="*"><\/script>',
    linkr = 'link[href*="!"]',
    scrr = 'script[src*="!"]',
    inlineclass = "ajy-inline";

function getRootUrl() {
    var t = window.location.protocol + "//" + (window.location.hostname || window.location.host);
    return window.location.port && (t += ":" + window.location.port), t += "/"
}

function _trigger(t, e) {
    e = e || jQuery.rq("e"), jQuery(window).trigger("pronto." + t, e)
}

function _internal(t) {
    return !!t && ("object" == typeof t && (t = t.href), "" === t || (t.substring(0, rootUrl.length) === rootUrl || !t.iO(":")))
}

function _copyAttributes(t, e, n) {
    n && [...t.attributes].forEach(e => t.removeAttribute(e.name)), [...e[0].attributes].forEach(e => t.setAttribute(e.nodeName, e.nodeValue))
}

function Hints(t) {
    var e = "string" == typeof t && t.length > 0 && t.split(", ");
    this.find = (t => !(!t || !e) && e.some(e => t.iO(e)))
}! function(t) {
    let e = function(e) {
        let n = t.extend({
            verbosity: 0
        }, e).verbosity;
        this.a = function(t, e, r, i) {
            if (e >= 0 && (n = e), n && t && lvl <= n && console && 1 == r) return console.groupCollapsed(t), console.table(i), console.groupCollapsed("Trace"), console.trace(), console.groupEnd(), void console.groupEnd();
            n && t && lvl <= n && console && console.log(t)
        }
    };
    t.log = function(n, r, i, o, s) {
        return t.log.o || (t.log.o = new e(s)), t.log.o.a(n, r, i, o)
    }
}(jQuery),
function(t) {
    let e = function() {
        let e = !1;
        this.a = function(n) {
            return n ? "string" == typeof n ? ("f" === n ? (t.pages("f"), t.log("Cache flushed")) : e = t.pages(t.memory(n)), e) : "object" == typeof n ? e = n : void 0 : e
        }
    };
    t.cache1 = function(n) {
        return t.cache1.o || (t.cache1.o = new e), t.cache1.o.a(n)
    }
}(jQuery),
function(t) {
    let e = function(e) {
        let n = t.extend({
                memoryoff: !1,
                hints: 0
            }, e),
            r = n.memoryoff,
            i = n.hints;
        this.a = function(t) {
            return i || (i = new Hints(r)), !(!t || !0 === r) && (!1 === r ? t : !i.find(t) && t)
        }
    };
    t.memory = function(n, r) {
        return t.memory.o || (t.memory.o = new e(r)), t.memory.o.a(n)
    }
}(jQuery),
function(t) {
    let e = function() {
        let t = [],
            e = -1;
        this.a = function(r) {
            if ("string" == typeof r)
                if ("f" === r) t = [];
                else if (-1 !== (e = n(r))) return t[e][1];
            if ("object" == typeof r && (-1 === (e = n(r)) ? t.push(r) : t[e] = r), "boolean" == typeof r) return !1
        };
        let n = e => t.findIndex(t => t[0] == e)
    };
    t.pages = function(n) {
        return t.pages.o || (t.pages.o = new e), t.pages.o.a(n)
    }
}(jQuery),
function(t) {
    let e = function() {
        let e = 0,
            n = 0,
            r = 0,
            i = "",
            o = 0;
        this.a = function(o, l, c) {
            if (!o) return t.cache1();
            if (o.iO("/")) {
                if (n = l, r == o) return;
                return a(o)
            }
            if ("+" === o) return r = l, n = c, a(l, !0);
            if ("a" !== o) {
                if ("s" === o) return (e ? e.readyState : 4) + i;
                if ("-" === o) return s(l);
                if ("x" === o) return e;
                if (t.cache1()) return "body" === o ? t.cache1().find("#ajy-" + o) : "script" === o ? t.cache1().find(o) : t.cache1().find("title" === o ? "title:first" : ".ajy-" + o)
            } else e && 4 !== e.readyState && e.abort()
        };
        let s = e => (pass++, c(e), t("body > script").remove("." + inlineclass), t.scripts(!0), t.scripts("s"), t.scripts("c")),
            a = (e, i) => (e.iO("#") && (e = e.split("#")[0]), t.rq("is") || !t.cache1(e) ? u(e, i) : (r = 0, n ? n() : void 0)),
            l = (e, n) => {
                if (void 0 !== n[0]) {
                    var r = n.clone();
                    r.find("script").remove(), _copyAttributes(e[0], r, !0), e.html(r.html())
                } else {
                    t.log("Inserting placeholder for ID: " + e.attr("id"));
                    var i = e.prop("tagName").toLowerCase();
                    e = e.replaceWith("<" + i + " id='" + e.attr("id") + "'></" + i + ">")
                }
            },
            c = e => t.cache1() && !f(e) && e.each(function() {
                l(t(this), t.cache1().find("#" + t(this).attr("id")))
            }),
            f = e => "body" == e.prop("tagName").toLowerCase() && (l(t("body"), t.cache1().find("#ajy-body")), 1),
            u = (o, s) => {
                var a = t.rq("is");
                i = s ? "p" : "c", e = t.ajax({
                    url: o,
                    type: a ? "POST" : "GET",
                    data: a ? t.rq("d") : null,
                    success: i => {
                        if (i && p(e) || s || (location.href = o), t.cache1(t(d(i))), t.pages([o, t.cache1()]), r = 0, n) return n()
                    },
                    error: (i, s, a) => {
                        if ("abort" !== s) try {
                            if (e = i, _trigger("error", a), t.log("Response text : " + e.responseText), t.cache1(t(d(e.responseText))), t.pages([o, t.cache1()]), n) return n(a)
                        } catch (t) {} else r = 0
                    },
                    async: !0
                })
            },
            p = t => (o = t.getResponseHeader("Content-Type")) && (o.iO("html") || o.iO("form-")),
            d = e => t.parseHTML(t.trim(h(e)), null, !0),
            h = t => String(t).replace(docType, "").replace(tagso, div12).replace(tagsod, divid12).replace(tagsc, "</div>")
    };
    t.getPage = function(n, r, i) {
        return t.getPage.o || (t.getPage.o = new e), t.getPage.o.a(n, r, i)
    }
}(jQuery),
function(t) {
    let e = function(e) {
        let n = t.extend({
                pluginon: !0,
                deltas: !0,
                verbosity: 0
            }, e),
            r = n.pluginon,
            i = n.deltas,
            o = n.verbosity;
        this.a = function(e, r) {
            var o = r;
            if (o && "string" == typeof o) return t().pronto(o);
            t(function() {
                s(n) && (e.pronto("i", n), i && t.scripts("1"))
            })
        };
        let s = e => api && r ? (t.log("Ajaxify loaded...", o, e), t.scripts("i", e), t.cache1(0, e), t.memory(0, e), !0) : (t.log("Gracefully exiting..."), !1)
    };
    t.fn.ajaxify = function(n) {
        let r = t(this);
        return t.fn.ajaxify.o || (t.fn.ajaxify.o = new e(n)), t.fn.ajaxify.o.a(r, n)
    }
}(jQuery),
function($) {
    let Scripts = function(options) {
        let $s = !1,
            inlhints = 0,
            skphints = 0,
            txt = 0,
            settings = $.extend({
                canonical: !1,
                inline: !0,
                inlinehints: !1,
                inlineskip: "adsbygoogle",
                inlineappend: !0,
                style: !0,
                offsetadd: 0
            }, options),
            canonical = settings.canonical,
            inline = settings.inline,
            inlinehints = settings.inlinehints,
            inlineskip = settings.inlineskip,
            inlineappend = settings.inlineappend,
            style = settings.style,
            offsetadd = settings.offsetadd;
        this.a = function(t) {
            return "i" === t ? ($s || ($s = $()), inlhints || (inlhints = new Hints(inlinehints)), skphints || (skphints = new Hints(inlineskip)), !0) : "s" === t ? _allstyle($s.y) : "1" === t ? ($.detScripts($s), _addScripts($s, settings)) : "c" === t ? !(!canonical || !$s.can) && $s.can.attr("href") : "d" === t ? $.detScripts($s) : t instanceof jQuery ? _onetxt(t) : void($.scripts("d") || _addScripts($s, settings))
        };
        let _allstyle = t => !style || !t || ($("head").find("style").remove(), t.each(function() {
                var t = $(this).text();
                _addstyle(t)
            })),
            _onetxt = t => !(txt = t.text()).iO(").ajaxify(") && (inline && !skphints.find(txt) || t.hasClass("ajaxy") || inlhints.find(txt)) && _addtxt(t),
            _addtxt = $s => {
                if (txt && txt.length) {
                    if (inlineappend || $s.prop("type") && !$s.prop("type").iO("text/javascript")) try {
                        return _apptxt($s)
                    } catch (t) {}
                    try {
                        $.globalEval(txt)
                    } catch (e1) {
                        try {
                            eval(txt)
                        } catch (t) {
                            $.log("Error in inline script : " + txt + "\nError code : " + t)
                        }
                    }
                }
            },
            _apptxt = t => t.clone().addClass(inlineclass).appendTo("body"),
            _addstyle = t => $("head").append("<style>" + t + "</style>"),
            _addScripts = (t, e) => (t.c.addAll("href", e), t.j.addAll("src", e))
    };
    $.scripts = function(t, e) {
        return $.scripts.o || ($.scripts.o = new Scripts(e)), $.scripts.o.a(t)
    }
}(jQuery),
function(t) {
    let e = function() {
        let e = 0,
            n = 0,
            r = 0;
        this.a = function(o) {
            if (!(e = pass ? fn("head") : t("head"))) return !0;
            n = e.find(pass ? ".ajy-link" : "link"), r = pass ? fn("script") : t("script"), o.c = i(n, "stylesheet"), o.y = e.find("style"), o.can = i(n, "canonical"), o.j = r
        };
        let i = (e, n) => t(e).filter(function() {
            return t(this).attr("rel").iO(n)
        })
    };
    t.detScripts = function(n) {
        return t.detScripts.o || (t.detScripts.o = new e), t.detScripts.o.a(n)
    }
}(jQuery),
function(t) {
    let e = function(e) {
        let n = [],
            r = [],
            i = [],
            o = 0,
            s = 0,
            a = 0,
            l = t.extend({
                deltas: !0,
                asyncdef: !1,
                alwayshints: !1
            }, e),
            c = l.deltas,
            f = l.asyncdef,
            u = l.alwayshints;
        this.a = function(e, l) {
            if (a || (a = new Hints(u)), e.length) {
                if ("n" === c) return !0;
                if (o = l, !1 === c) return p(e);
                n = "href" == o ? r : i, pass ? e.each(function() {
                    var e = t(this);
                    if (s = e.attr(o), h(e)) return g(), void y(e);
                    s ? n.some(t => t == s) || (n.push(s), y(e)) : "href" != o && t.scripts(e)
                }) : d(e)
            }
        };
        let p = e => e.each(function() {
                y(t(this))
            }),
            d = e => e.each(function() {
                (s = t(this).attr(o)) && n.push(s)
            }),
            h = t => "always" == t.attr("data-class") || a.find(s),
            y = e => {
                if (s = e.attr(o), "href" == o) return t(linki.replace("*", s)).appendTo("head");
                if (!s) return t.scripts(e);
                var n = document.createElement("script");
                n.async = f, _copyAttributes(n, e), document.head.appendChild(n)
            },
            g = () => t(("href" == o ? linkr : scrr).replace("!", s)).remove()
    };
    t.fn.addAll = function(n, r) {
        let i = t(this);
        return t.fn.addAll.o || (t.fn.addAll.o = new e(r)), t.fn.addAll.o.a(i, n)
    }
}(jQuery),
function(t) {
    let e = function() {
        let t = 0,
            e = 0,
            n = 0,
            r = 0,
            i = 0,
            o = 0,
            s = !1;
        this.a = function(l, c) {
            if ("=" === l) return c ? o === currentURL || o === s : o === currentURL;
            if ("!" === l) return s = o;
            if ("?" === l) {
                let t = fn("s");
                return t.iO("4") || c || fn("a"), "1c" !== t || !c
            }
            if ("v" === l) {
                if (!c) return !1;
                if (a(c), !_internal(o)) return !1;
                l = "i"
            }
            return "i" === l ? (t = !1, e = null, n = !0, r = !1, o) : "h" === l ? (c && ("string" == typeof c && (i = 0), o = c.href ? c.href : c), o) : "e" === l ? (c && a(c), i || o) : "p" === l ? (void 0 !== c && (n = c), n) : "is" === l ? (void 0 !== c && (t = c), t) : "d" === l ? (c && (e = c), e) : "C" === l ? (void 0 !== c && (r = c), r) : "c" === l ? !r || r === c || c.iO("#") || c.iO("?") ? c : r : void 0
        };
        let a = t => o = "string" != typeof(i = t) ? i.currentTarget.href || i.currentTarget.action || i.originalEvent.state.url : i
    };
    t.rq = function(n, r) {
        return t.rq.o || (t.rq.o = new e), t.rq.o.a(n, r)
    }
}(jQuery),
function(t) {
    let e = function(e) {
        let n = 0,
            r = 0,
            i = t.extend({
                forms: "form:not(.no-ajaxy)"
            }, e).forms;
        this.a = function(e, a) {
            i && e && ("d" === e && (r = a), "a" === e && r.find(i).filter(function() {
                let e = t(this).attr("action");
                return _internal(e && e.length > 0 ? e : currentURL)
            }).submit(e => {
                if (!(n = t(e.target)).is("form") && 0 === (n = n.filter("input[type=submit]").parents("form:first")).length) return !0;
                a = o();
                var r = "get",
                    i = n.attr("method");
                i.length > 0 && "post" == i.toLowerCase() && (r = "post");
                var l, c = n.attr("action");
                return l = c && c.length > 0 ? c : currentURL, t.rq("v", e), "get" == r ? l = s(l, a) : (t.rq("is", !0), t.rq("d", a)), _trigger("submit", l), t().pronto({
                    href: l
                }), !1
            }))
        };
        let o = () => {
                let e = n.serialize(),
                    r = t("input[name][type=submit]", n);
                return r.length ? (r = `${r.attr("name")}=${r.val()}`, e.length ? `${e}&${r}` : r) : e
            },
            s = (t, e) => (t.iO("?") && (t = t.substring(0, t.iO("?"))), `${t}?${e}`)
    };
    t.frms = function(n, r, i) {
        return t.frms.o || (t.frms.o = new e(i)), t.frms.o.a(n, r)
    }
}(jQuery),
function(t) {
    let e = function() {
        let e = [],
            n = -1;
        this.a = function(i) {
            if ("string" == typeof i) return i = i.iO("?") ? i.split("?")[0] : i, -1 === (n = r(i)) ? 0 : e[n][1];
            var o = currentURL,
                s = o.iO("?") ? o.split("?")[0] : o,
                a = s.iO("#") ? s.split("#")[0] : s,
                l = [a, t(window).scrollTop()]; - 1 === (n = r(a)) ? e.push(l) : e[n] = l
        };
        let r = t => e.findIndex(e => e[0] == t)
    };
    t.offsets = function(n) {
        return t.offsets.o || (t.offsets.o = new e), t.offsets.o.a(n)
    }
}(jQuery),
function(t) {
    let e = function(e) {
        let n = t.extend({
            scrolltop: "s"
        }, e).scrolltop;
        let ofst = t.extend({
            offsetadd: 0
        }, e).offsetadd;
        this.a = function(e) {
            if (e) {
                var i = e;
                if ("+" !== e && "!" !== e || (e = currentURL), "+" !== i && e.iO("#") && e.iO("#") < e.length - 1) {
                    var o = t("#" + e.split("#")[1]);
                    if (!o.length) return;
                    r(o.offset().top - ofst);
                    o.addClass("activeHash")
                } else {
                    if ("s" === n) return "+" === i && t.offsets(), void("!" === i && r(t.offsets(e)));
                    "+" !== i && n && r(0)
                }
            }
        };
        let r = e => t(window).scrollTop(e)
    };
    t.scrolly = function(n, r) {
        return t.scrolly.o || (t.scrolly.o = new e(r)), t.scrolly.o.a(n)
    }
}(jQuery),
function(t) {
    let e = function() {
        this.a = function(t, e) {
            t && (e && (currentURL = e), "=" === t ? history.replaceState({
                url: currentURL
            }, "state-" + currentURL, currentURL) : currentURL !== window.location.href && history.pushState({
                url: currentURL
            }, "state-" + currentURL, currentURL))
        }
    };
    t.hApi = function(n, r) {
        return t.hApi.o || (t.hApi.o = new e), t.hApi.o.a(n, r)
    }
}(jQuery),
function(t) {
    let e = function(e) {
        let n = 0,
            r = 0,
            i = 0,
            o = 0,
            s = t.extend({
                selector: "a:not(.no-ajaxy)",
                prefetchoff: !1,
                refresh: !1,
                previewoff: !0,
                cb: 0,
                bodyClasses: !1,
                requestDelay: 0,
                passCount: !1
            }, e),
            a = s.selector,
            l = s.prefetchoff,
            c = s.refresh,
            f = s.previewoff,
            u = s.cb,
            p = s.bodyClasses,
            d = s.requestDelay,
            h = s.passCount;
        this.a = function(e, r) {
            if (r) {
                if ("i" === r) {
                    var a = s;
                    return e.length || (e = t("body")), n = e, i || (i = new Hints(l)), o || (o = new Hints(f)), t.frms(0, 0, a), t.slides && t.slides(0, a), t.scrolly(0, a), y(), e
                }
                if ("object" == typeof r) return t.rq("h", r), void w();
                r.iO("/") && (t.rq("h", r), w(!0))
            }
        };
        let y = () => {
                t.hApi("=", window.location.href), t(window).on("popstate", j), !0 !== l && (t(document).hoverIntent(g, () => {}, a), t(document).on("touchstart", a, g));
                var e = t("body");
                e.on("click.pronto", a, m), t.frms("d", e), t.frms("a"), t.frms("d", n), t.slides && t.slides("i")
            },
            g = e => {
                if (!0 !== l && t.rq("?", !0)) {
                    var n = t.rq("v", e);
                    t.rq("=", !0) || !n || i.find(n) || fn("+", n, () => {
                        if (!0 === f) return !1;
                        v() || !1 !== f && o.find(n) || m(e, !0)
                    })
                }
            },
            v = () => {
                var e = !1;
                return n.each(function() {
                    t(t.rq("e")).parents("#" + t(this).attr("id")).length > 0 && (e = !0)
                }), e
            },
            m = (e, n) => {
                if (t.rq("?")) {
                    var r = t.rq("v", e);
                    if (r && !$()) {
                        if ("#" === r.substr(-1)) return !0;
                        if (_()) return t.hApi("=", r), !0;
                        t.scrolly("+"), (t => (t.preventDefault(), t.stopPropagation(), t.stopImmediatePropagation()))(e), t.rq("=") && t.hApi("="), !c && t.rq("=") || w(n)
                    }
                }
            },
            w = e => {
                t.rq("!"), e && t.rq("p", !1), _trigger("request"), fn(t.rq("h"), e => {
                    e && (t.log("Error in _request : " + e), _trigger("error", e)), x()
                })
            },
            x = () => {
                _trigger("beforeload"), d ? (r && clearTimeout(r), r = setTimeout(b, d)) : b()
            },
            j = e => {
                t.rq("i"), t.rq("e", e), t.rq("p", !1), t.scrolly("+");
                var n = e.originalEvent.state,
                    r = n ? n.url : 0;
                r && r !== currentURL && (_trigger("request"), fn(r, x))
            },
            b = () => {
                if (_trigger("load"), p) {
                    var e = fn("body").attr("class");
                    t("body").attr("class", e || null)
                }
                var r = t.rq("h");
                r = t.rq("c", r);
                t.hApi(t.rq("p") ? "+" : "=", r), fn("title") && t("title").html(fn("title").html()), t.rq("C", fn("-", n)), t.frms("a"), t.scrolly("!"), q(r), _trigger("render"), h && t("#" + h).html("Pass: " + pass), u && u()
            },
            q = t => {
                t = "/" + t.replace(rootUrl, ""), void 0 !== window.ga ? window.ga("send", "pageview", t) : void 0 !== window._gaq && window._gaq.push(["_trackPageview", t])
            },
            $ = () => {
                var e = t.rq("h"),
                    n = t.rq("e");
                return n.which > 1 || n.metaKey || n.ctrlKey || n.shiftKey || n.altKey || "_blank" === n.currentTarget.target || e.iO("wp-login") || e.iO("wp-admin")
            },
            _ = () => {
                var e = t.rq("e");
                return e.hash && e.href.replace(e.hash, "") === window.location.href.replace(location.hash, "") || e.href === window.location.href + "#"
            }
    };
    t.fn.pronto = function(n, r) {
        let i = t(this);
        return t.fn.pronto.o || (t.fn.pronto.o = new e(r)), t.fn.pronto.o.a(i, n)
    }
}(jQuery);
var fn = jQuery.getPage;
