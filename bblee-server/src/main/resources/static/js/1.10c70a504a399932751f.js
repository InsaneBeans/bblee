webpackJsonp([1], {
    "/a/u": function (e, t) {
        t.f = Object.getOwnPropertySymbols
    }, "1GTc": function (e, t, n) {
        var r = n("MITN");
        r(r.S + r.F, "Object", {assign: n("nBsG")})
    }, EdC7: function (e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAC4klEQVRoQ+2a8VEVQQzGv68CtQKlArQCpQK1ArECsAK1ArECpQK1AqECoQKgArWCOB+z59y7t3e3ye4KzpAZ/mJvL78km01yj+gkZvYIwEMAVyQvO70GbLVxUvgAwDMAjzP7CuIrgGOSZ63eWw2QFH8LYN+h1GcA71t4pgrAzF4A+ATgvkP5YekvAG9ICiYsYQAzk8WlfK28roEIASTLf6nVfPR8GMINYGYKl4tg2MwxK5yeRM5EBEAx+6qh9YetlJ08ieD6ORdAyjiyfi/Z8XrBC3AI4EMv7VNWOvLs7wXQRfTc8wLn2lOSugiLxQug8FGJ0E1IunRyLTYz66Z52vgOYMnCZqZ8fa+nF3p74ATA044A5yRzlezsK71nQClOJXMv+UhSqbpYvACyzo/i3f0LX5JUqi4WF4B2NbNeYeQOH+kTAdBF873YROUL90jKOC5xAyQvtD4LoUIu5IHBPGbWqqxwlw9jF4U8MIKoLa2PARyS1P0SkiqAFE5Ke++cF9xvPUPSVXnmCKsBEoS6NIGoIdEsaE6uAMhrRzVWbxZCOS1T06P7Ynyjag505m1WSmKqiQeSF1wlBsnTEgXX1oQAkpXV2ChkXLVLRiHlfmW0bxEPuQCS4poFubqmNSuO/i8YjViKZ6lFAGmUovGhq9ByKD5dquyk0eNqel0FSFbXEKs2VLw8OvgqLxYhFgHMTEqr7onMPr0K59ZLeUHMTrNnAVLYSPl/bfkpyKInlgCkfK/D6vXOCcm94pu44eTZq+jS+uwAOOsBM+s+/wmQXZLcmT63BXBLrT/oveWFHECrOj9g5NVHdFvrq9Bf2QBImefn6jY3u+DB+G6YAvTqd1sib/TOU4De4/MWIBvnYAqgzko1z20W1UjS81ruAG7AVYseUIpq+fm0B9/G+PF/uwe2BmBzpYRaRWWk3R4mDOx5niYZWz9LWOsH9D1Mf0NVqtK6d2+gdnJoKdViapox29T8ASR6AEDL9MXKAAAAAElFTkSuQmCC"
    }, F60K: function (e, t) {
    }, FaEH: function (e, t) {
    }, "K0/C": function (e, t) {
        t.f = {}.propertyIsEnumerable
    }, NbYg: function (module, exports, __webpack_require__) {
        !function (e, t) {
            module.exports = t()
        }(0, function () {
            return function (e) {
                function t(r) {
                    if (n[r])return n[r].exports;
                    var o = n[r] = {i: r, l: !1, exports: {}};
                    return e[r].call(o.exports, o, o.exports, t), o.l = !0, o.exports
                }

                var n = {};
                return t.m = e, t.c = n, t.i = function (e) {
                    return e
                }, t.d = function (e, n, r) {
                    t.o(e, n) || Object.defineProperty(e, n, {configurable: !1, enumerable: !0, get: r})
                }, t.n = function (e) {
                    var n = e && e.__esModule ? function () {
                        return e.default
                    } : function () {
                        return e
                    };
                    return t.d(n, "a", n), n
                }, t.o = function (e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t)
                }, t.p = "", t(t.s = 60)
            }([function (e, t, n) {
                "use strict";
                function r(e, t) {
                    return s.call(e, t)
                }

                function o(e) {
                    return !(e >= 55296 && e <= 57343 || e >= 64976 && e <= 65007 || 65535 == (65535 & e) || 65534 == (65535 & e) || e >= 0 && e <= 8 || 11 === e || e >= 14 && e <= 31 || e >= 127 && e <= 159 || e > 1114111)
                }

                function i(e) {
                    if (e > 65535) {
                        var t = 55296 + ((e -= 65536) >> 10), n = 56320 + (1023 & e);
                        return String.fromCharCode(t, n)
                    }
                    return String.fromCharCode(e)
                }

                function a(e) {
                    return h[e]
                }

                var s = Object.prototype.hasOwnProperty, l = /\\([!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~])/g,
                    c = new RegExp(l.source + "|" + /&([a-z#][a-z0-9]{1,31});/gi.source, "gi"),
                    u = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))/i, p = n(46), _ = /[&<>"]/, d = /[&<>"]/g,
                    h = {"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;"}, f = /[.?*+^$[\]\\(){}|-]/g, m = n(33);
                t.lib = {}, t.lib.mdurl = n(50), t.lib.ucmicro = n(179), t.assign = function (e) {
                    return Array.prototype.slice.call(arguments, 1).forEach(function (t) {
                        if (t) {
                            if ("object" != typeof t)throw new TypeError(t + "must be object");
                            Object.keys(t).forEach(function (n) {
                                e[n] = t[n]
                            })
                        }
                    }), e
                }, t.isString = function (e) {
                    return "[object String]" === function (e) {
                            return Object.prototype.toString.call(e)
                        }(e)
                }, t.has = r, t.unescapeMd = function (e) {
                    return e.indexOf("\\") < 0 ? e : e.replace(l, "$1")
                }, t.unescapeAll = function (e) {
                    return e.indexOf("\\") < 0 && e.indexOf("&") < 0 ? e : e.replace(c, function (e, t, n) {
                        return t || function (e, t) {
                                var n = 0;
                                return r(p, t) ? p[t] : 35 === t.charCodeAt(0) && u.test(t) && (n = "x" === t[1].toLowerCase() ? parseInt(t.slice(2), 16) : parseInt(t.slice(1), 10), o(n)) ? i(n) : e
                            }(e, n)
                    })
                }, t.isValidEntityCode = o, t.fromCodePoint = i, t.escapeHtml = function (e) {
                    return _.test(e) ? e.replace(d, a) : e
                }, t.arrayReplaceAt = function (e, t, n) {
                    return [].concat(e.slice(0, t), n, e.slice(t + 1))
                }, t.isSpace = function (e) {
                    switch (e) {
                        case 9:
                        case 32:
                            return !0
                    }
                    return !1
                }, t.isWhiteSpace = function (e) {
                    if (e >= 8192 && e <= 8202)return !0;
                    switch (e) {
                        case 9:
                        case 10:
                        case 11:
                        case 12:
                        case 13:
                        case 32:
                        case 160:
                        case 5760:
                        case 8239:
                        case 8287:
                        case 12288:
                            return !0
                    }
                    return !1
                }, t.isMdAsciiPunct = function (e) {
                    switch (e) {
                        case 33:
                        case 34:
                        case 35:
                        case 36:
                        case 37:
                        case 38:
                        case 39:
                        case 40:
                        case 41:
                        case 42:
                        case 43:
                        case 44:
                        case 45:
                        case 46:
                        case 47:
                        case 58:
                        case 59:
                        case 60:
                        case 61:
                        case 62:
                        case 63:
                        case 64:
                        case 91:
                        case 92:
                        case 93:
                        case 94:
                        case 95:
                        case 96:
                        case 123:
                        case 124:
                        case 125:
                        case 126:
                            return !0;
                        default:
                            return !1
                    }
                }, t.isPunctChar = function (e) {
                    return m.test(e)
                }, t.escapeRE = function (e) {
                    return e.replace(f, "\\$&")
                }, t.normalizeReference = function (e) {
                    return e.trim().replace(/\s+/g, " ").toUpperCase()
                }
            }, function (e, t) {
                var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
                "number" == typeof __g && (__g = n)
            }, function (e, t) {
                var n = {}.hasOwnProperty;
                e.exports = function (e, t) {
                    return n.call(e, t)
                }
            }, function (e, t, n) {
                e.exports = !n(10)(function () {
                    return 7 != Object.defineProperty({}, "a", {
                            get: function () {
                                return 7
                            }
                        }).a
                })
            }, function (e, t, n) {
                var r = n(5), o = n(11);
                e.exports = n(3) ? function (e, t, n) {
                    return r.f(e, t, o(1, n))
                } : function (e, t, n) {
                    return e[t] = n, e
                }
            }, function (e, t, n) {
                var r = n(9), o = n(39), i = n(28), a = Object.defineProperty;
                t.f = n(3) ? Object.defineProperty : function (e, t, n) {
                    if (r(e), t = i(t, !0), r(n), o)try {
                        return a(e, t, n)
                    } catch (e) {
                    }
                    if ("get" in n || "set" in n)throw TypeError("Accessors not supported!");
                    return "value" in n && (e[t] = n.value), e
                }
            }, function (e, t, n) {
                var r = n(79), o = n(18);
                e.exports = function (e) {
                    return r(o(e))
                }
            }, function (e, t, n) {
                var r = n(26)("wks"), o = n(12), i = n(1).Symbol, a = "function" == typeof i;
                (e.exports = function (e) {
                    return r[e] || (r[e] = a && i[e] || (a ? i : o)("Symbol." + e))
                }).store = r
            }, function (e, t) {
                e.exports = function (e) {
                    return "object" == typeof e ? null !== e : "function" == typeof e
                }
            }, function (e, t, n) {
                var r = n(8);
                e.exports = function (e) {
                    if (!r(e))throw TypeError(e + " is not an object!");
                    return e
                }
            }, function (e, t) {
                e.exports = function (e) {
                    try {
                        return !!e()
                    } catch (e) {
                        return !0
                    }
                }
            }, function (e, t) {
                e.exports = function (e, t) {
                    return {enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e), value: t}
                }
            }, function (e, t) {
                var n = 0, r = Math.random();
                e.exports = function (e) {
                    return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + r).toString(36))
                }
            }, function (e, t) {
                function n(e, t) {
                    var n = e[1] || "", r = e[3];
                    if (!r)return n;
                    if (t && "function" == typeof btoa) {
                        var o = function (e) {
                            return "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(e)))) + " */"
                        }(r);
                        return [n].concat(r.sources.map(function (e) {
                            return "/*# sourceURL=" + r.sourceRoot + e + " */"
                        })).concat([o]).join("\n")
                    }
                    return [n].join("\n")
                }

                e.exports = function (e) {
                    var t = [];
                    return t.toString = function () {
                        return this.map(function (t) {
                            var r = n(t, e);
                            return t[2] ? "@media " + t[2] + "{" + r + "}" : r
                        }).join("")
                    }, t.i = function (e, n) {
                        "string" == typeof e && (e = [[null, e, ""]]);
                        for (var r = {}, o = 0; o < this.length; o++) {
                            var i = this[o][0];
                            "number" == typeof i && (r[i] = !0)
                        }
                        for (o = 0; o < e.length; o++) {
                            var a = e[o];
                            "number" == typeof a[0] && r[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = "(" + a[2] + ") and (" + n + ")"), t.push(a))
                        }
                    }, t
                }
            }, function (e, t) {
                e.exports = function (e, t, n, r, o) {
                    var i, a = e = e || {}, s = typeof e.default;
                    "object" !== s && "function" !== s || (i = e, a = e.default);
                    var l = "function" == typeof a ? a.options : a;
                    t && (l.render = t.render, l.staticRenderFns = t.staticRenderFns), r && (l._scopeId = r);
                    var c;
                    if (o ? (c = function (e) {
                            (e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__), n && n.call(this, e), e && e._registeredComponents && e._registeredComponents.add(o)
                        }, l._ssrRegister = c) : n && (c = n), c) {
                        var u = l.functional, p = u ? l.render : l.beforeCreate;
                        u ? l.render = function (e, t) {
                            return c.call(t), p(e, t)
                        } : l.beforeCreate = p ? [].concat(p, c) : [c]
                    }
                    return {esModule: i, exports: a, options: l}
                }
            }, function (e, t, n) {
                function r(e) {
                    for (var t = 0; t < e.length; t++) {
                        var n = e[t], r = c[n.id];
                        if (r) {
                            r.refs++;
                            for (var o = 0; o < r.parts.length; o++)r.parts[o](n.parts[o]);
                            for (; o < n.parts.length; o++)r.parts.push(i(n.parts[o]));
                            r.parts.length > n.parts.length && (r.parts.length = n.parts.length)
                        } else {
                            var a = [];
                            for (o = 0; o < n.parts.length; o++)a.push(i(n.parts[o]));
                            c[n.id] = {id: n.id, refs: 1, parts: a}
                        }
                    }
                }

                function o() {
                    var e = document.createElement("style");
                    return e.type = "text/css", u.appendChild(e), e
                }

                function i(e) {
                    var t, n, r = document.querySelector('style[data-vue-ssr-id~="' + e.id + '"]');
                    if (r) {
                        if (d)return h;
                        r.parentNode.removeChild(r)
                    }
                    if (f) {
                        var i = _++;
                        r = p || (p = o()), t = a.bind(null, r, i, !1), n = a.bind(null, r, i, !0)
                    } else r = o(), t = function (e, t) {
                        var n = t.css, r = t.media, o = t.sourceMap;
                        if (r && e.setAttribute("media", r), o && (n += "\n/*# sourceURL=" + o.sources[0] + " */", n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */"), e.styleSheet) e.styleSheet.cssText = n; else {
                            for (; e.firstChild;)e.removeChild(e.firstChild);
                            e.appendChild(document.createTextNode(n))
                        }
                    }.bind(null, r), n = function () {
                        r.parentNode.removeChild(r)
                    };
                    return t(e), function (r) {
                        if (r) {
                            if (r.css === e.css && r.media === e.media && r.sourceMap === e.sourceMap)return;
                            t(e = r)
                        } else n()
                    }
                }

                function a(e, t, n, r) {
                    var o = n ? "" : r.css;
                    if (e.styleSheet) e.styleSheet.cssText = m(t, o); else {
                        var i = document.createTextNode(o), a = e.childNodes;
                        a[t] && e.removeChild(a[t]), a.length ? e.insertBefore(i, a[t]) : e.appendChild(i)
                    }
                }

                var s = "undefined" != typeof document;
                if ("undefined" != typeof DEBUG && DEBUG && !s)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");
                var l = n(191), c = {}, u = s && (document.head || document.getElementsByTagName("head")[0]), p = null,
                    _ = 0, d = !1, h = function () {
                    }, f = "undefined" != typeof navigator && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());
                e.exports = function (e, t, n) {
                    d = n;
                    var o = l(e, t);
                    return r(o), function (t) {
                        for (var n = [], i = 0; i < o.length; i++) {
                            var a = o[i];
                            (s = c[a.id]).refs--, n.push(s)
                        }
                        t ? (o = l(e, t), r(o)) : o = [];
                        for (i = 0; i < n.length; i++) {
                            var s;
                            if (0 === (s = n[i]).refs) {
                                for (var u = 0; u < s.parts.length; u++)s.parts[u]();
                                delete c[s.id]
                            }
                        }
                    }
                };
                var m = function () {
                    var e = [];
                    return function (t, n) {
                        return e[t] = n, e.filter(Boolean).join("\n")
                    }
                }()
            }, function (e, t, n) {
                "use strict";
                n.d(t, "g", function () {
                    return r
                }), n.d(t, "h", function () {
                    return o
                }), n.d(t, "e", function () {
                    return i
                }), n.d(t, "f", function () {
                    return a
                }), n.d(t, "b", function () {
                    return s
                }), t.d = function (e, t) {
                    "function" != typeof t && (t = function () {
                    });
                    var n = document.querySelectorAll("script[src='" + e + "']");
                    if (n.length > 0)return n[0].addEventListener("load", function () {
                        t()
                    }), void t();
                    var r = document.createElement("script"), o = document.getElementsByTagName("head")[0];
                    r.type = "text/javascript", r.charset = "UTF-8", r.src = e, r.addEventListener ? r.addEventListener("load", function () {
                        t()
                    }, !1) : r.attachEvent && r.attachEvent("onreadystatechange", function () {
                            "loaded" === window.event.srcElement.readyState && t()
                        }), o.appendChild(r)
                }, t.c = function (e, t) {
                    if ("function" != typeof t && (t = function () {
                        }), document.querySelectorAll("link[href='" + e + "']").length > 0) t(); else {
                        var n = document.createElement("link"), r = document.getElementsByTagName("head")[0];
                        n.rel = "stylesheet", n.href = e, n.addEventListener ? n.addEventListener("load", function () {
                            t()
                        }, !1) : n.attachEvent && n.attachEvent("onreadystatechange", function () {
                                "loaded" === window.event.srcElement.readyState && t()
                            }), r.appendChild(n)
                    }
                }, n.d(t, "a", function () {
                    return l
                });
                var r = function (e, t, n) {
                    var r = t.prefix, o = t.subfix, i = t.str;
                    if (e.focus(), document.selection); else if ("number" == typeof e.selectionStart && "number" == typeof e.selectionEnd) {
                        var a = e.selectionStart, s = e.selectionEnd, l = e.value;
                        a === s ? (e.value = l.substring(0, a) + r + i + o + l.substring(s, l.length), e.selectionStart = a + r.length, e.selectionEnd = a + (i.length + r.length)) : l.substring(a - r.length, a) === r && l.substring(s, s + o.length) === o ? (e.value = l.substring(0, a - r.length) + l.substring(a, s) + l.substring(s + o.length, l.length), e.selectionStart = a - r.length, e.selectionEnd = s - r.length) : (e.value = l.substring(0, a) + r + l.substring(a, s) + o + l.substring(s, l.length), e.selectionStart = a + r.length, e.selectionEnd = a + (s - a + r.length))
                    } else alert("else");
                    n.d_value = e.value, e.focus()
                }, o = function (e) {
                    var t = e.getTextareaDom();
                    if (document.selection); else if ("number" == typeof t.selectionStart && "number" == typeof t.selectionEnd) {
                        var n = t.selectionStart, r = t.selectionEnd, o = t.value;
                        t.value = o.substring(0, n) + "    " + o.substring(r, o.length), t.selectionStart = t.selectionEnd = n + 4
                    } else alert("else");
                    e.d_value = t.value, t.focus()
                }, i = function (e, t) {
                    var n = void 0;
                    (n = e.$refs.navigationContent).innerHTML = e.d_render;
                    var r = n.children;
                    if (r.length)for (var o = 0; o < r.length; o++)!function (t, n, r) {
                        /^H[1-6]{1}$/.exec(t.tagName) ? t.onclick = function () {
                            var t = e.$refs.vShowContent, r = e.$refs.vNoteEdit;
                            e.s_subfield ? e.s_preview_switch && (r.scrollTop = t.children[n].offsetTop * (r.scrollHeight - r.offsetHeight) / (t.scrollHeight - t.offsetHeight)) : e.s_preview_switch && (t.scrollTop = t.children[n].offsetTop)
                        } : t.style.display = "none"
                    }(r[o], o)
                }, a = function (e, t) {
                    var n = e.srcElement ? e.srcElement : e.target, r = n.scrollTop / (n.scrollHeight - n.offsetHeight);
                    t.edit_scroll_height >= 0 && n.scrollHeight !== t.edit_scroll_height && n.scrollHeight - n.offsetHeight - n.scrollTop <= 30 && (t.$refs.vNoteEdit.scrollTop = n.scrollHeight - n.offsetHeight, r = 1), t.edit_scroll_height = n.scrollHeight, t.$refs.vShowContent.scrollHeight > t.$refs.vShowContent.offsetHeight && (t.$refs.vShowContent.scrollTop = (t.$refs.vShowContent.scrollHeight - t.$refs.vShowContent.offsetHeight) * r)
                }, s = function (e) {
                    e.$el.addEventListener("fullscreenchange", function (t) {
                        e.$toolbar_right_read_change_status()
                    }, !1), e.$el.addEventListener("mozfullscreenchange", function (t) {
                        e.$toolbar_right_read_change_status()
                    }, !1), e.$el.addEventListener("webkitfullscreenchange", function (t) {
                        e.$toolbar_right_read_change_status()
                    }, !1), e.$el.addEventListener("msfullscreenchange", function (t) {
                        e.$toolbar_right_read_change_status()
                    }, !1)
                }, l = function (e) {
                    document.querySelector(".v-show-content").onclick = document.querySelector(".v-note-read-content").onclick = function (t) {
                        var n = (t = t || window.event).srcElement ? t.srcElement : t.target;
                        "IMG" === n.tagName && (e.d_preview_imgsrc = n.src)
                    }
                }
            }, function (e, t) {
                var n = e.exports = {version: "2.5.3"};
                "number" == typeof __e && (__e = n)
            }, function (e, t) {
                e.exports = function (e) {
                    if (void 0 == e)throw TypeError("Can't call method on  " + e);
                    return e
                }
            }, function (e, t) {
                e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
            }, function (e, t) {
                e.exports = {}
            }, function (e, t) {
                e.exports = !0
            }, function (e, t, n) {
                var r = n(44), o = n(19);
                e.exports = Object.keys || function (e) {
                        return r(e, o)
                    }
            }, function (e, t) {
                t.f = {}.propertyIsEnumerable
            }, function (e, t, n) {
                var r = n(5).f, o = n(2), i = n(7)("toStringTag");
                e.exports = function (e, t, n) {
                    e && !o(e = n ? e : e.prototype, i) && r(e, i, {configurable: !0, value: t})
                }
            }, function (e, t, n) {
                var r = n(26)("keys"), o = n(12);
                e.exports = function (e) {
                    return r[e] || (r[e] = o(e))
                }
            }, function (e, t, n) {
                var r = n(1), o = r["__core-js_shared__"] || (r["__core-js_shared__"] = {});
                e.exports = function (e) {
                    return o[e] || (o[e] = {})
                }
            }, function (e, t) {
                var n = Math.ceil, r = Math.floor;
                e.exports = function (e) {
                    return isNaN(e = +e) ? 0 : (e > 0 ? r : n)(e)
                }
            }, function (e, t, n) {
                var r = n(8);
                e.exports = function (e, t) {
                    if (!r(e))return e;
                    var n, o;
                    if (t && "function" == typeof(n = e.toString) && !r(o = n.call(e)))return o;
                    if ("function" == typeof(n = e.valueOf) && !r(o = n.call(e)))return o;
                    if (!t && "function" == typeof(n = e.toString) && !r(o = n.call(e)))return o;
                    throw TypeError("Can't convert object to primitive value")
                }
            }, function (e, t, n) {
                var r = n(1), o = n(17), i = n(21), a = n(30), s = n(5).f;
                e.exports = function (e) {
                    var t = o.Symbol || (o.Symbol = i ? {} : r.Symbol || {});
                    "_" == e.charAt(0) || e in t || s(t, e, {value: a.f(e)})
                }
            }, function (e, t, n) {
                t.f = n(7)
            }, function (e, t, n) {
                "use strict";
                function r() {
                    this.__rules__ = [], this.__cache__ = null
                }

                r.prototype.__find__ = function (e) {
                    for (var t = 0; t < this.__rules__.length; t++)if (this.__rules__[t].name === e)return t;
                    return -1
                }, r.prototype.__compile__ = function () {
                    var e = this, t = [""];
                    e.__rules__.forEach(function (e) {
                        e.enabled && e.alt.forEach(function (e) {
                            t.indexOf(e) < 0 && t.push(e)
                        })
                    }), e.__cache__ = {}, t.forEach(function (t) {
                        e.__cache__[t] = [], e.__rules__.forEach(function (n) {
                            n.enabled && (t && n.alt.indexOf(t) < 0 || e.__cache__[t].push(n.fn))
                        })
                    })
                }, r.prototype.at = function (e, t, n) {
                    var r = this.__find__(e), o = n || {};
                    if (-1 === r)throw new Error("Parser rule not found: " + e);
                    this.__rules__[r].fn = t, this.__rules__[r].alt = o.alt || [], this.__cache__ = null
                }, r.prototype.before = function (e, t, n, r) {
                    var o = this.__find__(e), i = r || {};
                    if (-1 === o)throw new Error("Parser rule not found: " + e);
                    this.__rules__.splice(o, 0, {name: t, enabled: !0, fn: n, alt: i.alt || []}), this.__cache__ = null
                }, r.prototype.after = function (e, t, n, r) {
                    var o = this.__find__(e), i = r || {};
                    if (-1 === o)throw new Error("Parser rule not found: " + e);
                    this.__rules__.splice(o + 1, 0, {
                        name: t,
                        enabled: !0,
                        fn: n,
                        alt: i.alt || []
                    }), this.__cache__ = null
                }, r.prototype.push = function (e, t, n) {
                    var r = n || {};
                    this.__rules__.push({name: e, enabled: !0, fn: t, alt: r.alt || []}), this.__cache__ = null
                }, r.prototype.enable = function (e, t) {
                    Array.isArray(e) || (e = [e]);
                    var n = [];
                    return e.forEach(function (e) {
                        var r = this.__find__(e);
                        if (r < 0) {
                            if (t)return;
                            throw new Error("Rules manager: invalid rule name " + e)
                        }
                        this.__rules__[r].enabled = !0, n.push(e)
                    }, this), this.__cache__ = null, n
                }, r.prototype.enableOnly = function (e, t) {
                    Array.isArray(e) || (e = [e]), this.__rules__.forEach(function (e) {
                        e.enabled = !1
                    }), this.enable(e, t)
                }, r.prototype.disable = function (e, t) {
                    Array.isArray(e) || (e = [e]);
                    var n = [];
                    return e.forEach(function (e) {
                        var r = this.__find__(e);
                        if (r < 0) {
                            if (t)return;
                            throw new Error("Rules manager: invalid rule name " + e)
                        }
                        this.__rules__[r].enabled = !1, n.push(e)
                    }, this), this.__cache__ = null, n
                }, r.prototype.getRules = function (e) {
                    return null === this.__cache__ && this.__compile__(), this.__cache__[e] || []
                }, e.exports = r
            }, function (e, t, n) {
                "use strict";
                function r(e, t, n) {
                    this.type = e, this.tag = t, this.attrs = null, this.map = null, this.nesting = n, this.level = 0, this.children = null, this.content = "", this.markup = "", this.info = "", this.meta = null, this.block = !1, this.hidden = !1
                }

                r.prototype.attrIndex = function (e) {
                    var t, n, r;
                    if (!this.attrs)return -1;
                    for (n = 0, r = (t = this.attrs).length; n < r; n++)if (t[n][0] === e)return n;
                    return -1
                }, r.prototype.attrPush = function (e) {
                    this.attrs ? this.attrs.push(e) : this.attrs = [e]
                }, r.prototype.attrSet = function (e, t) {
                    var n = this.attrIndex(e), r = [e, t];
                    n < 0 ? this.attrPush(r) : this.attrs[n] = r
                }, r.prototype.attrGet = function (e) {
                    var t = this.attrIndex(e), n = null;
                    return t >= 0 && (n = this.attrs[t][1]), n
                }, r.prototype.attrJoin = function (e, t) {
                    var n = this.attrIndex(e);
                    n < 0 ? this.attrPush([e, t]) : this.attrs[n][1] = this.attrs[n][1] + " " + t
                }, e.exports = r
            }, function (e, t) {
                e.exports = /[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E44\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC9\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD807[\uDC41-\uDC45\uDC70\uDC71]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/
            }, function (e, t, n) {
                "use strict";
                t.a = {
                    "1c": "1c",
                    abnf: "abnf",
                    accesslog: "accesslog",
                    actionscript: "actionscript",
                    as: "actionscript",
                    ada: "ada",
                    apache: "apache",
                    apacheconf: "apache",
                    applescript: "applescript",
                    osascript: "applescript",
                    arduino: "arduino",
                    armasm: "armasm",
                    arm: "armasm",
                    asciidoc: "asciidoc",
                    adoc: "asciidoc",
                    aspectj: "aspectj",
                    autohotkey: "autohotkey",
                    ahk: "autohotkey",
                    autoit: "autoit",
                    avrasm: "avrasm",
                    awk: "awk",
                    axapta: "axapta",
                    bash: "bash",
                    sh: "bash",
                    zsh: "bash",
                    basic: "basic",
                    bnf: "bnf",
                    brainfuck: "brainfuck",
                    bf: "brainfuck",
                    cal: "cal",
                    capnproto: "capnproto",
                    capnp: "capnproto",
                    ceylon: "ceylon",
                    clean: "clean",
                    icl: "clean",
                    dcl: "clean",
                    "clojure-repl": "clojure-repl",
                    clojure: "clojure",
                    clj: "clojure",
                    cmake: "cmake",
                    "cmake.in": "cmake",
                    coffeescript: "coffeescript",
                    coffee: "coffeescript",
                    cson: "coffeescript",
                    iced: "coffeescript",
                    coq: "coq",
                    cos: "cos",
                    cls: "cos",
                    cpp: "cpp",
                    c: "cpp",
                    cc: "cpp",
                    h: "cpp",
                    "c++": "cpp",
                    "h++": "cpp",
                    hpp: "cpp",
                    crmsh: "crmsh",
                    crm: "crmsh",
                    pcmk: "crmsh",
                    crystal: "crystal",
                    cr: "crystal",
                    cs: "cs",
                    csharp: "cs",
                    csp: "csp",
                    css: "css",
                    d: "d",
                    dart: "dart",
                    delphi: "delphi",
                    dpr: "delphi",
                    dfm: "delphi",
                    pas: "delphi",
                    pascal: "delphi",
                    freepascal: "delphi",
                    lazarus: "delphi",
                    lpr: "delphi",
                    lfm: "delphi",
                    diff: "diff",
                    patch: "diff",
                    django: "django",
                    jinja: "django",
                    dns: "dns",
                    bind: "dns",
                    zone: "dns",
                    dockerfile: "dockerfile",
                    docker: "dockerfile",
                    dos: "dos",
                    bat: "dos",
                    cmd: "dos",
                    dsconfig: "dsconfig",
                    dts: "dts",
                    dust: "dust",
                    dst: "dust",
                    ebnf: "ebnf",
                    elixir: "elixir",
                    elm: "elm",
                    erb: "erb",
                    "erlang-repl": "erlang-repl",
                    erlang: "erlang",
                    erl: "erlang",
                    excel: "excel",
                    xlsx: "excel",
                    xls: "excel",
                    fix: "fix",
                    flix: "flix",
                    fortran: "fortran",
                    f90: "fortran",
                    f95: "fortran",
                    fsharp: "fsharp",
                    fs: "fsharp",
                    gams: "gams",
                    gms: "gams",
                    gauss: "gauss",
                    gss: "gauss",
                    gcode: "gcode",
                    nc: "gcode",
                    gherkin: "gherkin",
                    feature: "gherkin",
                    glsl: "glsl",
                    go: "go",
                    golang: "go",
                    golo: "golo",
                    gradle: "gradle",
                    groovy: "groovy",
                    haml: "haml",
                    handlebars: "handlebars",
                    hbs: "handlebars",
                    "html.hbs": "handlebars",
                    "html.handlebars": "handlebars",
                    haskell: "haskell",
                    hs: "haskell",
                    haxe: "haxe",
                    hx: "haxe",
                    hsp: "hsp",
                    htmlbars: "htmlbars",
                    http: "http",
                    https: "http",
                    hy: "hy",
                    hylang: "hy",
                    inform7: "inform7",
                    i7: "inform7",
                    ini: "ini",
                    toml: "ini",
                    irpf90: "irpf90",
                    java: "java",
                    jsp: "java",
                    javascript: "javascript",
                    js: "javascript",
                    jsx: "javascript",
                    "jboss-cli": "jboss-cli",
                    "wildfly-cli": "jboss-cli",
                    json: "json",
                    "julia-repl": "julia-repl",
                    julia: "julia",
                    kotlin: "kotlin",
                    lasso: "lasso",
                    ls: "livescript",
                    lassoscript: "lasso",
                    ldif: "ldif",
                    leaf: "leaf",
                    less: "less",
                    lisp: "lisp",
                    livecodeserver: "livecodeserver",
                    livescript: "livescript",
                    llvm: "llvm",
                    lsl: "lsl",
                    lua: "lua",
                    makefile: "makefile",
                    mk: "makefile",
                    mak: "makefile",
                    markdown: "markdown",
                    md: "markdown",
                    mkdown: "markdown",
                    mkd: "markdown",
                    mathematica: "mathematica",
                    mma: "mathematica",
                    matlab: "matlab",
                    maxima: "maxima",
                    mel: "mel",
                    mercury: "mercury",
                    m: "mercury",
                    moo: "mercury",
                    mipsasm: "mipsasm",
                    mips: "mipsasm",
                    mizar: "mizar",
                    mojolicious: "mojolicious",
                    monkey: "monkey",
                    moonscript: "moonscript",
                    moon: "moonscript",
                    n1ql: "n1ql",
                    nginx: "nginx",
                    nginxconf: "nginx",
                    nimrod: "nimrod",
                    nim: "nimrod",
                    nix: "nix",
                    nixos: "nix",
                    nsis: "nsis",
                    objectivec: "objectivec",
                    mm: "objectivec",
                    objc: "objectivec",
                    "obj-c": "objectivec",
                    ocaml: "ocaml",
                    ml: "sml",
                    openscad: "openscad",
                    scad: "openscad",
                    oxygene: "oxygene",
                    parser3: "parser3",
                    perl: "perl",
                    pl: "perl",
                    pm: "perl",
                    pf: "pf",
                    "pf.conf": "pf",
                    php: "php",
                    php3: "php",
                    php4: "php",
                    php5: "php",
                    php6: "php",
                    pony: "pony",
                    powershell: "powershell",
                    ps: "powershell",
                    processing: "processing",
                    profile: "profile",
                    prolog: "prolog",
                    protobuf: "protobuf",
                    puppet: "puppet",
                    pp: "puppet",
                    purebasic: "purebasic",
                    pb: "purebasic",
                    pbi: "purebasic",
                    python: "python",
                    py: "python",
                    gyp: "python",
                    q: "q",
                    k: "q",
                    kdb: "q",
                    qml: "qml",
                    qt: "qml",
                    r: "r",
                    rib: "rib",
                    roboconf: "roboconf",
                    graph: "roboconf",
                    instances: "roboconf",
                    routeros: "routeros",
                    mikrotik: "routeros",
                    rsl: "rsl",
                    ruby: "ruby",
                    rb: "ruby",
                    gemspec: "ruby",
                    podspec: "ruby",
                    thor: "ruby",
                    irb: "ruby",
                    ruleslanguage: "ruleslanguage",
                    rust: "rust",
                    rs: "rust",
                    scala: "scala",
                    scheme: "scheme",
                    scilab: "scilab",
                    sci: "scilab",
                    scss: "scss",
                    shell: "shell",
                    console: "shell",
                    smali: "smali",
                    smalltalk: "smalltalk",
                    st: "smalltalk",
                    sml: "sml",
                    sqf: "sqf",
                    sql: "sql",
                    stan: "stan",
                    stata: "stata",
                    do: "stata",
                    ado: "stata",
                    step21: "step21",
                    p21: "step21",
                    step: "step21",
                    stp: "step21",
                    stylus: "stylus",
                    styl: "stylus",
                    subunit: "subunit",
                    swift: "swift",
                    taggerscript: "taggerscript",
                    tap: "tap",
                    tcl: "tcl",
                    tk: "tcl",
                    tex: "tex",
                    thrift: "thrift",
                    tp: "tp",
                    twig: "twig",
                    craftcms: "twig",
                    typescript: "typescript",
                    ts: "typescript",
                    vala: "vala",
                    vbnet: "vbnet",
                    vb: "vbnet",
                    "vbscript-html": "vbscript-html",
                    vbscript: "vbscript",
                    vbs: "vbscript",
                    verilog: "verilog",
                    v: "verilog",
                    sv: "verilog",
                    svh: "verilog",
                    vhdl: "vhdl",
                    vim: "vim",
                    x86asm: "x86asm",
                    xl: "xl",
                    tao: "xl",
                    xml: "xml",
                    html: "xml",
                    xhtml: "xml",
                    rss: "xml",
                    atom: "xml",
                    xjb: "xml",
                    xsd: "xml",
                    xsl: "xml",
                    plist: "xml",
                    xquery: "xquery",
                    xpath: "xquery",
                    xq: "xquery",
                    yaml: "yaml",
                    yml: "yaml",
                    YAML: "yaml",
                    zephir: "zephir",
                    zep: "zephir"
                }
            }, function (e, t, n) {
                "use strict";
                function r(e) {
                    return e && e.__esModule ? e : {default: e}
                }

                t.__esModule = !0;
                var o = r(n(70)), i = r(n(69)),
                    a = "function" == typeof i.default && "symbol" == typeof o.default ? function (e) {
                        return typeof e
                    } : function (e) {
                        return e && "function" == typeof i.default && e.constructor === i.default && e !== i.default.prototype ? "symbol" : typeof e
                    };
                t.default = "function" == typeof i.default && "symbol" === a(o.default) ? function (e) {
                    return void 0 === e ? "undefined" : a(e)
                } : function (e) {
                    return e && "function" == typeof i.default && e.constructor === i.default && e !== i.default.prototype ? "symbol" : void 0 === e ? "undefined" : a(e)
                }
            }, function (e, t) {
                var n = {}.toString;
                e.exports = function (e) {
                    return n.call(e).slice(8, -1)
                }
            }, function (e, t, n) {
                var r = n(8), o = n(1).document, i = r(o) && r(o.createElement);
                e.exports = function (e) {
                    return i ? o.createElement(e) : {}
                }
            }, function (e, t, n) {
                var r = n(1), o = n(17), i = n(76), a = n(4), s = function (e, t, n) {
                    var l, c, u, p = e & s.F, _ = e & s.G, d = e & s.S, h = e & s.P, f = e & s.B, m = e & s.W,
                        g = _ ? o : o[t] || (o[t] = {}), b = g.prototype, v = _ ? r : d ? r[t] : (r[t] || {}).prototype;
                    _ && (n = t);
                    for (l in n)(c = !p && v && void 0 !== v[l]) && l in g || (u = c ? v[l] : n[l], g[l] = _ && "function" != typeof v[l] ? n[l] : f && c ? i(u, r) : m && v[l] == u ? function (e) {
                        var t = function (t, n, r) {
                            if (this instanceof e) {
                                switch (arguments.length) {
                                    case 0:
                                        return new e;
                                    case 1:
                                        return new e(t);
                                    case 2:
                                        return new e(t, n)
                                }
                                return new e(t, n, r)
                            }
                            return e.apply(this, arguments)
                        };
                        return t.prototype = e.prototype, t
                    }(u) : h && "function" == typeof u ? i(Function.call, u) : u, h && ((g.virtual || (g.virtual = {}))[l] = u, e & s.R && b && !b[l] && a(b, l, u)))
                };
                s.F = 1, s.G = 2, s.S = 4, s.P = 8, s.B = 16, s.W = 32, s.U = 64, s.R = 128, e.exports = s
            }, function (e, t, n) {
                e.exports = !n(3) && !n(10)(function () {
                        return 7 != Object.defineProperty(n(37)("div"), "a", {
                                get: function () {
                                    return 7
                                }
                            }).a
                    })
            }, function (e, t, n) {
                "use strict";
                var r = n(21), o = n(38), i = n(45), a = n(4), s = n(2), l = n(20), c = n(81), u = n(24), p = n(87),
                    _ = n(7)("iterator"), d = !([].keys && "next" in [].keys()), h = function () {
                        return this
                    };
                e.exports = function (e, t, n, f, m, g, b) {
                    c(n, t, f);
                    var v, k, w, y = function (e) {
                            if (!d && e in E)return E[e];
                            switch (e) {
                                case"keys":
                                case"values":
                                    return function () {
                                        return new n(this, e)
                                    }
                            }
                            return function () {
                                return new n(this, e)
                            }
                        }, x = t + " Iterator", C = "values" == m, A = !1, E = e.prototype,
                        D = E[_] || E["@@iterator"] || m && E[m], S = !d && D || y(m),
                        q = m ? C ? y("entries") : S : void 0, T = "Array" == t ? E.entries || D : D;
                    if (T && (w = p(T.call(new e))) !== Object.prototype && w.next && (u(w, x, !0), r || s(w, _) || a(w, _, h)), C && D && "values" !== D.name && (A = !0, S = function () {
                            return D.call(this)
                        }), r && !b || !d && !A && E[_] || a(E, _, S), l[t] = S, l[x] = h, m)if (v = {
                            values: C ? S : y("values"),
                            keys: g ? S : y("keys"),
                            entries: q
                        }, b)for (k in v)k in E || i(E, k, v[k]); else o(o.P + o.F * (d || A), t, v);
                    return v
                }
            }, function (e, t, n) {
                var r = n(9), o = n(84), i = n(19), a = n(25)("IE_PROTO"), s = function () {
                }, l = function () {
                    var e, t = n(37)("iframe"), r = i.length;
                    for (t.style.display = "none", n(78).appendChild(t), t.src = "javascript:", (e = t.contentWindow.document).open(), e.write("<script>document.F=Object<\/script>"), e.close(), l = e.F; r--;)delete l.prototype[i[r]];
                    return l()
                };
                e.exports = Object.create || function (e, t) {
                        var n;
                        return null !== e ? (s.prototype = r(e), n = new s, s.prototype = null, n[a] = e) : n = l(), void 0 === t ? n : o(n, t)
                    }
            }, function (e, t, n) {
                var r = n(44), o = n(19).concat("length", "prototype");
                t.f = Object.getOwnPropertyNames || function (e) {
                        return r(e, o)
                    }
            }, function (e, t) {
                t.f = Object.getOwnPropertySymbols
            }, function (e, t, n) {
                var r = n(2), o = n(6), i = n(75)(!1), a = n(25)("IE_PROTO");
                e.exports = function (e, t) {
                    var n, s = o(e), l = 0, c = [];
                    for (n in s)n != a && r(s, n) && c.push(n);
                    for (; t.length > l;)r(s, n = t[l++]) && (~i(c, n) || c.push(n));
                    return c
                }
            }, function (e, t, n) {
                e.exports = n(4)
            }, function (e, t, n) {
                "use strict";
                e.exports = n(103)
            }, function (e, t, n) {
                "use strict";
                var r = "<[A-Za-z][A-Za-z0-9\\-]*(?:\\s+[a-zA-Z_:][a-zA-Z0-9:._-]*(?:\\s*=\\s*(?:[^\"'=<>`\\x00-\\x20]+|'[^']*'|\"[^\"]*\"))?)*\\s*\\/?>",
                    o = "<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>",
                    i = new RegExp("^(?:" + r + "|" + o + "|\x3c!----\x3e|\x3c!--(?:-?[^>-])(?:-?[^-])*--\x3e|<[?].*?[?]>|<![A-Z]+\\s+[^>]*>|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>)"),
                    a = new RegExp("^(?:" + r + "|" + o + ")");
                e.exports.HTML_TAG_RE = i, e.exports.HTML_OPEN_CLOSE_TAG_RE = a
            }, function (e, t, n) {
                "use strict";
                e.exports.tokenize = function (e, t) {
                    var n, r, o, i = e.pos, a = e.src.charCodeAt(i);
                    if (t)return !1;
                    if (95 !== a && 42 !== a)return !1;
                    for (r = e.scanDelims(e.pos, 42 === a), n = 0; n < r.length; n++)o = e.push("text", "", 0), o.content = String.fromCharCode(a), e.delimiters.push({
                        marker: a,
                        length: r.length,
                        jump: n,
                        token: e.tokens.length - 1,
                        level: e.level,
                        end: -1,
                        open: r.can_open,
                        close: r.can_close
                    });
                    return e.pos += r.length, !0
                }, e.exports.postProcess = function (e) {
                    var t, n, r, o, i, a, s = e.delimiters;
                    for (t = e.delimiters.length - 1; t >= 0; t--)95 !== (n = s[t]).marker && 42 !== n.marker || -1 !== n.end && (r = s[n.end], a = t > 0 && s[t - 1].end === n.end + 1 && s[t - 1].token === n.token - 1 && s[n.end + 1].token === r.token + 1 && s[t - 1].marker === n.marker, i = String.fromCharCode(n.marker), o = e.tokens[n.token], o.type = a ? "strong_open" : "em_open", o.tag = a ? "strong" : "em", o.nesting = 1, o.markup = a ? i + i : i, o.content = "", o = e.tokens[r.token], o.type = a ? "strong_close" : "em_close", o.tag = a ? "strong" : "em", o.nesting = -1, o.markup = a ? i + i : i, o.content = "", a && (e.tokens[s[t - 1].token].content = "", e.tokens[s[n.end + 1].token].content = "", t--))
                }
            }, function (e, t, n) {
                "use strict";
                e.exports.tokenize = function (e, t) {
                    var n, r, o, i, a, s = e.pos, l = e.src.charCodeAt(s);
                    if (t)return !1;
                    if (126 !== l)return !1;
                    if (r = e.scanDelims(e.pos, !0), i = r.length, a = String.fromCharCode(l), i < 2)return !1;
                    for (i % 2 && (o = e.push("text", "", 0), o.content = a, i--), n = 0; n < i; n += 2)o = e.push("text", "", 0), o.content = a + a, e.delimiters.push({
                        marker: l,
                        jump: n,
                        token: e.tokens.length - 1,
                        level: e.level,
                        end: -1,
                        open: r.can_open,
                        close: r.can_close
                    });
                    return e.pos += r.length, !0
                }, e.exports.postProcess = function (e) {
                    var t, n, r, o, i, a = [], s = e.delimiters, l = e.delimiters.length;
                    for (t = 0; t < l; t++)126 === (r = s[t]).marker && -1 !== r.end && (o = s[r.end], i = e.tokens[r.token], i.type = "s_open", i.tag = "s", i.nesting = 1, i.markup = "~~", i.content = "", i = e.tokens[o.token], i.type = "s_close", i.tag = "s", i.nesting = -1, i.markup = "~~", i.content = "", "text" === e.tokens[o.token - 1].type && "~" === e.tokens[o.token - 1].content && a.push(o.token - 1));
                    for (; a.length;) {
                        for (n = (t = a.pop()) + 1; n < e.tokens.length && "s_close" === e.tokens[n].type;)n++;
                        t !== --n && (i = e.tokens[n], e.tokens[n] = e.tokens[t], e.tokens[t] = i)
                    }
                }
            }, function (e, t, n) {
                "use strict";
                e.exports.encode = n(171), e.exports.decode = n(170), e.exports.format = n(172), e.exports.parse = n(173)
            }, function (e, t) {
                e.exports = /[\0-\x1F\x7F-\x9F]/
            }, function (e, t) {
                e.exports = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/
            }, function (e, t) {
                e.exports = /[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/
            }, function (e, t, n) {
                var r = !1, o = n(14)(n(59), n(186), function (e) {
                    r || (n(189), n(190))
                }, "data-v-7a63e4b3", null);
                o.options.__file = "/home/chc/code/hwork/mavonEditor/src/mavon-editor.vue", o.esModule && Object.keys(o.esModule).some(function (e) {
                    return "default" !== e && "__" !== e.substr(0, 2)
                }) && console.error("named exports are not supported in *.vue files."), o.options.functional && console.error("[vue-loader] mavon-editor.vue: functional components are not supported with templates, they should use render functions."), e.exports = o.exports
            }, function (e, t, n) {
                "use strict";
                var r = n(180), o = {
                    autoTextarea: r, install: function (e) {
                        e.component("auto-textarea", r)
                    }
                };
                e.exports = o
            }, function (e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {value: !0}), t.default = {
                    data: function () {
                        var e = this;
                        return {
                            temp_value: e.value, s_autofocus: function () {
                                if (e.autofocus)return "autofocus"
                            }()
                        }
                    },
                    created: function () {
                    },
                    props: {
                        autofocus: {type: Boolean, default: !1},
                        value: {type: String, default: ""},
                        placeholder: {type: String, default: ""},
                        border: {type: Boolean, default: !1},
                        resize: {type: Boolean, default: !1},
                        onchange: {type: Function, default: null},
                        fontSize: {type: String, default: "14px"},
                        lineHeight: {type: String, default: "18px"}
                    },
                    methods: {
                        change: function (e) {
                            this.onchange && this.onchange(this.temp_value, e)
                        }
                    },
                    watch: {
                        value: function (e, t) {
                            this.temp_value = e
                        }, temp_value: function (e, t) {
                            this.$emit("input", e)
                        }
                    }
                }
            }, function (e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {value: !0}), t.default = {
                    name: "s-md-toolbar-left",
                    props: {
                        editable: {type: Boolean, default: !0},
                        toolbars: {type: Object, required: !0},
                        d_words: {type: Object, required: !0},
                        image_filter: {type: Function, default: null}
                    },
                    data: function () {
                        return {
                            img_file: [["./0", null]],
                            s_img_dropdown_open: !1,
                            s_img_link_open: !1,
                            trigger: null,
                            num: 0,
                            link_text: "",
                            link_addr: "",
                            link_type: "link"
                        }
                    },
                    methods: {
                        $imgLinkAdd: function () {
                            this.$emit("toolbar_left_addlink", this.link_type, this.link_text, this.link_addr), this.s_img_link_open = !1
                        }, $toggle_imgLinkAdd: function (e) {
                            var t = this;
                            this.link_type = e, this.link_text = this.link_addr = "", this.s_img_link_open = !0, this.$nextTick(function () {
                                t.$refs.linkTextInput.focus()
                            }), this.s_img_dropdown_open = !1
                        }, $imgFileListClick: function (e) {
                            this.$emit("imgTouch", this.img_file[e])
                        }, $imgFileAdd: function (e) {
                            this.img_file[0][0] = "./" + this.num, this.img_file[0][1] = e, this.img_file.unshift(["./" + (this.num + 1), null]), this.num = this.num + 1, this.$emit("imgAdd", this.img_file[1][0], e)
                        }, $imgFilesAdd: function (e) {
                            for (var t = "function" == typeof this.image_filter, n = 0; n < e.length; n++)t && !0 === this.image_filter(e[n]) ? this.$imgFileAdd(e[n]) : !t && e[n].type.match(/^image\//i) && this.$imgFileAdd(e[n])
                        }, $imgAdd: function (e) {
                            this.$imgFilesAdd(e.target.files)
                        }, $imgDel: function (e) {
                            this.$emit("imgDel", this.img_file[e]), this.img_file.splice(e, 1), this.s_img_dropdown_open = !1
                        }, $imgDelByFilename: function (e) {
                            for (var t = 0; this.img_file.length > t;) {
                                if (this.img_file[t][0] == e)return this.$imgDel(t), !0;
                                t += 1
                            }
                            return !1
                        }, $imgAddByFilename: function (e, t) {
                            for (var n = 0; n < this.img_file.length; n++)if (this.img_file[n][0] == e)return !1;
                            return this.img_file[0][0] = e, this.img_file[0][1] = t, this.img_file.unshift(["./" + this.num, null]), this.$emit("imgAdd", this.img_file[1][0], t, !1), !0
                        }, $imgAddByUrl: function (e, t) {
                            for (var n = 0; n < this.img_file.length; n++)if (this.img_file[n][0] == e)return !1;
                            return this.img_file[0][0] = e, this.img_file[0][1] = t, this.img_file.unshift(["./" + this.num, null]), !0
                        }, $imgUpdateByFilename: function (e, t) {
                            for (var n = 0; n < this.img_file.length; n++)if (this.img_file[n][0] == e)return this.img_file[n][1] = t, this.$emit("imgAdd", e, t, !1), !0;
                            return !1
                        }, $click_toggle_image_dropdown: function () {
                            this.s_img_dropdown_open = !this.s_img_dropdown_open
                        }, $clicks: function (e) {
                            this.$emit("toolbar_left_click", e)
                        }, handleClose: function (e) {
                            this.s_img_dropdown_open = !1
                        }
                    }
                }
            }, function (e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {value: !0}), t.default = {
                    name: "s-md-toolbar-right",
                    props: {
                        s_subfield: {type: Boolean, required: !0},
                        toolbars: {type: Object, required: !0},
                        s_preview_switch: {type: Boolean, required: !0},
                        s_fullScreen: {type: Boolean, required: !0},
                        s_html_code: {type: Boolean, required: !0},
                        s_navigation: {type: Boolean, required: !0},
                        d_words: {type: Object, required: !0}
                    },
                    methods: {
                        $clicks: function (e) {
                            this.$emit("toolbar_right_click", e)
                        }
                    }
                }
            }, function (module, __webpack_exports__, __webpack_require__) {
                "use strict";
                Object.defineProperty(__webpack_exports__, "__esModule", {value: !0});
                var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__ = __webpack_require__(35),
                    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__),
                    __WEBPACK_IMPORTED_MODULE_1_auto_textarea__ = __webpack_require__(55),
                    __WEBPACK_IMPORTED_MODULE_1_auto_textarea___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_auto_textarea__),
                    __WEBPACK_IMPORTED_MODULE_2__lib_core_keydown_listen_js__ = __webpack_require__(64),
                    __WEBPACK_IMPORTED_MODULE_3__lib_core_hljs_lang_hljs_css_js__ = __webpack_require__(63),
                    __WEBPACK_IMPORTED_MODULE_4__lib_core_hljs_lang_hljs_js__ = __webpack_require__(34),
                    __WEBPACK_IMPORTED_MODULE_5__lib_core_extra_function_js__ = __webpack_require__(16),
                    __WEBPACK_IMPORTED_MODULE_6__lib_util_js__ = __webpack_require__(68),
                    __WEBPACK_IMPORTED_MODULE_7__lib_toolbar_left_click_js__ = __webpack_require__(66),
                    __WEBPACK_IMPORTED_MODULE_8__lib_toolbar_right_click_js__ = __webpack_require__(67),
                    __WEBPACK_IMPORTED_MODULE_9__lib_config_js__ = __webpack_require__(61),
                    __WEBPACK_IMPORTED_MODULE_10__lib_core_highlight_js__ = __webpack_require__(62),
                    __WEBPACK_IMPORTED_MODULE_11__lib_mixins_markdown_js__ = __webpack_require__(65),
                    __WEBPACK_IMPORTED_MODULE_12__lib_font_css_fontello_css__ = __webpack_require__(105),
                    __WEBPACK_IMPORTED_MODULE_12__lib_font_css_fontello_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__lib_font_css_fontello_css__),
                    __WEBPACK_IMPORTED_MODULE_13__lib_css_md_css__ = __webpack_require__(104),
                    __WEBPACK_IMPORTED_MODULE_13__lib_css_md_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__lib_css_md_css__),
                    s_md_toolbar_left = __webpack_require__(181), s_md_toolbar_right = __webpack_require__(182);
                __webpack_exports__.default = {
                    mixins: [__WEBPACK_IMPORTED_MODULE_11__lib_mixins_markdown_js__.a],
                    props: {
                        scrollStyle: {type: Boolean, default: !0},
                        help: {type: String, default: null},
                        value: {type: String, default: ""},
                        language: {type: String, default: "cn"},
                        subfield: {type: Boolean, default: !0},
                        default_open: {type: String, default: null},
                        editable: {type: Boolean, default: !0},
                        toolbarsFlag: {type: Boolean, default: !0},
                        toolbars: {
                            type: Object, default: function () {
                                return __WEBPACK_IMPORTED_MODULE_9__lib_config_js__.a.toolbars
                            }
                        },
                        code_style: {
                            type: String, default: function () {
                                return "github"
                            }
                        },
                        placeholder: {type: String, default: null},
                        ishljs: {type: Boolean, default: !0},
                        external_link: {type: [Object, Boolean], default: !0},
                        image_filter: {type: Function, default: null}
                    },
                    data: function () {
                        var e = this;
                        return {
                            s_subfield: e.subfield,
                            s_autofocus: !0,
                            s_navigation: !1,
                            s_scrollStyle: e.scrollStyle,
                            d_value: "",
                            d_render: "",
                            s_preview_switch: function () {
                                var t = e.default_open;
                                return t || (t = e.subfield ? "preview" : "edit"), "preview" === t
                            }(),
                            s_fullScreen: !1,
                            s_help: !1,
                            s_html_code: !1,
                            d_help: null,
                            d_words: null,
                            edit_scroll_height: -1,
                            s_readmodel: !1,
                            s_table_enter: !1,
                            d_history: function () {
                                var t = [];
                                return t.push(e.value), t
                            }(),
                            d_history_index: 0,
                            currentTimeout: "",
                            d_image_file: [],
                            d_preview_imgsrc: null,
                            s_external_link: {
                                markdown_css: function () {
                                    return "https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/2.9.0/github-markdown.min.css"
                                }, hljs_js: function () {
                                    return "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/highlight.min.js"
                                }, hljs_lang: function (e) {
                                    return "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/languages/" + e + ".min.js"
                                }, hljs_css: function (e) {
                                    return __WEBPACK_IMPORTED_MODULE_3__lib_core_hljs_lang_hljs_css_js__.a[e] ? "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/" + e + ".min.css" : ""
                                }, katex_js: function () {
                                    return "https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.8.3/katex.min.js"
                                }, katex_css: function () {
                                    return "https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.8.3/katex.min.css"
                                }
                            },
                            p_external_link: {}
                        }
                    },
                    created: function () {
                        var e = this;
                        this.initExternalFuc(), this.initLanguage(), this.$nextTick(function () {
                            e.editableTextarea(), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__lib_core_extra_function_js__.a)(e)
                        })
                    },
                    mounted: function () {
                        var e = this;
                        this.$el.addEventListener("paste", function (t) {
                            e.$paste(t)
                        }), this.$el.addEventListener("drop", function (t) {
                            e.$drag(t)
                        }), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lib_core_keydown_listen_js__.a)(this), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__lib_core_extra_function_js__.b)(this), this.d_value = this.value, document.body.appendChild(this.$refs.help), e.loadExternalLink("markdown_css", "css"), e.loadExternalLink("katex_css", "css"), e.loadExternalLink("katex_js", "js", function () {
                            e.initLanguage(), e.iRender()
                        }), e.loadExternalLink("hljs_js", "js", function () {
                            e.initLanguage(), e.iRender()
                        }), e.codeStyleChange(e.code_style, !0)
                    },
                    beforeDestroy: function () {
                        document.body.removeChild(this.$refs.help)
                    },
                    methods: {
                        loadExternalLink: function (e, t, n) {
                            if ("function" == typeof this.p_external_link[e]) {
                                var r = {
                                    css: __WEBPACK_IMPORTED_MODULE_5__lib_core_extra_function_js__.c,
                                    js: __WEBPACK_IMPORTED_MODULE_5__lib_core_extra_function_js__.d
                                };
                                r.hasOwnProperty(t) && r[t](this.p_external_link[e](), n)
                            } else 0 != this.p_external_link[e] && console.error("external_link." + e, "is not a function, if you want to disabled this error log, set external_link." + e, "to function or false")
                        }, initExternalFuc: function () {
                            for (var e = ["markdown_css", "hljs_js", "hljs_css", "hljs_lang", "katex_js", "katex_css"], t = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default()(this.external_link), n = "object" === t, r = "boolean" === t, o = 0; o < e.length; o++)r && !this.external_link || n && !1 === this.external_link[e[o]] ? this.p_external_link[e[o]] = !1 : n && "function" == typeof this.external_link[e[o]] ? this.p_external_link[e[o]] = this.external_link[e[o]] : this.p_external_link[e[o]] = this.s_external_link[e[o]]
                        }, textAreaFocus: function () {
                            this.$refs.vNoteTextarea.$refs.vTextarea.focus()
                        }, $drag: function (e) {
                            var t = e.dataTransfer;
                            if (t) {
                                var n = t.files;
                                n.length > 0 && (e.preventDefault(), this.$refs.toolbar_left.$imgFilesAdd(n))
                            }
                        }, $paste: function (e) {
                            var t = e.clipboardData;
                            if (t) {
                                var n = t.items;
                                if (!n)return;
                                for (var r = t.types || [], o = null, i = 0; i < r.length; i++)if ("Files" === r[i]) {
                                    o = n[i];
                                    break
                                }
                                if (o && "file" === o.kind) {
                                    var a = o.getAsFile();
                                    this.$refs.toolbar_left.$imgFilesAdd([a])
                                }
                            }
                        }, $imgTouch: function (e) {
                            this.insertText(this.getTextareaDom(), {
                                prefix: "\n![" + e[1]._name + "](" + e[0] + ")",
                                subfix: "",
                                str: ""
                            })
                        }, $imgDel: function (e) {
                            this.s_markdown.image_del(e[0]);
                            var t = new RegExp("\\!\\[" + e[1]._name + "\\]\\(\\" + e[0] + "\\)", "g");
                            this.d_value = this.d_value.replace(t, ""), this.iRender(), this.$emit("imgDel", e[0])
                        }, $imgAdd: function (e, t, n) {
                            void 0 === n && (n = !0);
                            var r = this;
                            if (null == this.__rFilter && (this.__rFilter = /^image\//i), this.__oFReader = new FileReader, this.__oFReader.onload = function (o) {
                                    r.s_markdown.image_add(e, o.target.result), t.miniurl = o.target.result, !0 === n && (t._name = t.name.replace(/[\[\]\(\)\+\{\}&\|\\\*^%$#@\-]/g, ""), r.insertText(r.getTextareaDom(), {
                                        prefix: "\n![" + t._name + "](" + e + ")",
                                        subfix: "",
                                        str: ""
                                    }), r.$nextTick(function () {
                                        r.$emit("imgAdd", e, t)
                                    }))
                                }, t) {
                                var o = t;
                                this.__rFilter.test(o.type) && this.__oFReader.readAsDataURL(o)
                            }
                        }, $imgUpdateByUrl: function (e, t) {
                            var n = this;
                            this.s_markdown.image_add(e, t), this.$nextTick(function () {
                                n.d_render = this.s_markdown.render(this.d_value)
                            })
                        }, $imgAddByUrl: function (e, t) {
                            return !!this.$refs.toolbar_left.$imgAddByUrl(e, t) && (this.$imgUpdateByUrl(e, t), !0)
                        }, $img2Url: function $img2Url(filename, url) {
                            filename = filename.replace(/(\.|\\|\+|\*|\?|\^|\$|\[|\]|\{|\}|\(|\)|\||\/)/g, "\\$1");
                            var reg_str = "/(!\\[[^\\[]*?\\](?=\\())\\(\\s*(" + filename + ")\\s*\\)/g",
                                reg = eval(reg_str);
                            this.d_value = this.d_value.replace(reg, "$1(" + url + ")")
                        }, $imglst2Url: function (e) {
                            if (e instanceof Array)for (var t = 0; t < e.length; t++)this.$img2Url(e[t][0], e[t][1])
                        }, toolbar_left_click: function (e) {
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__lib_toolbar_left_click_js__.a)(e, this)
                        }, toolbar_left_addlink: function (e, t, n) {
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__lib_toolbar_left_click_js__.b)(e, t, n, this)
                        }, toolbar_right_click: function (e) {
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__lib_toolbar_right_click_js__.a)(e, this)
                        }, getNavigation: function (e, t) {
                            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__lib_core_extra_function_js__.e)(e, t)
                        }, change: function (e, t) {
                            this.$emit("change", e, t)
                        }, fullscreen: function (e, t) {
                            this.$emit("fullscreen", e, t)
                        }, readmodel: function (e, t) {
                            this.$emit("readmodel", e, t)
                        }, previewtoggle: function (e, t) {
                            this.$emit("previewtoggle", e, t)
                        }, subfieldtoggle: function (e, t) {
                            this.$emit("subfieldtoggle", e, t)
                        }, htmlcode: function (e, t) {
                            this.$emit("htmlcode", e, t)
                        }, helptoggle: function (e, t) {
                            this.$emit("helptoggle", e, t)
                        }, save: function (e, t) {
                            this.$emit("save", e, t)
                        }, navigationtoggle: function (e, t) {
                            this.$emit("navigationtoggle", e, t)
                        }, $toolbar_right_read_change_status: function () {
                            this.s_readmodel = !this.s_readmodel, this.readmodel && this.readmodel(this.s_readmodel, this.d_value), this.s_readmodel && this.toolbars.navigation && this.getNavigation(this, !0)
                        }, $v_edit_scroll: function (e) {
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__lib_core_extra_function_js__.f)(e, this)
                        }, getTextareaDom: function () {
                            return this.$refs.vNoteTextarea.$refs.vTextarea
                        }, insertText: function (e, t) {
                            var n = t.prefix, r = t.subfix, o = t.str;
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__lib_core_extra_function_js__.g)(e, {
                                prefix: n,
                                subfix: r,
                                str: o
                            }, this)
                        }, insertTab: function () {
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__lib_core_extra_function_js__.h)(this)
                        }, saveHistory: function () {
                            this.d_history.splice(this.d_history_index + 1, this.d_history.length), this.d_history.push(this.d_value), this.d_history_index = this.d_history.length - 1
                        }, initLanguage: function () {
                            var e = __WEBPACK_IMPORTED_MODULE_9__lib_config_js__.a.langList.indexOf(this.language) >= 0 ? this.language : this.language.default,
                                t = this;
                            t.$render(__WEBPACK_IMPORTED_MODULE_9__lib_config_js__.a["help_" + e], function (e) {
                                t.d_help = e
                            }), this.d_words = __WEBPACK_IMPORTED_MODULE_9__lib_config_js__.a["words_" + e]
                        }, editableTextarea: function () {
                            var e = this.$refs.vNoteTextarea.$refs.vTextarea;
                            this.editable ? e.removeAttribute("disabled") : e.setAttribute("disabled", "disabled")
                        }, codeStyleChange: function (e, t) {
                            if (t = t || !1, "function" == typeof this.p_external_link.hljs_css) {
                                var n = this.p_external_link.hljs_css(e);
                                0 === n.length && t && (console.warn("hljs color scheme", e, "do not exist, loading default github"), n = this.p_external_link.hljs_css("github")), n.length > 0 ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__lib_core_extra_function_js__.c)(n) : console.warn("hljs color scheme", e, "do not exist, hljs color scheme will not change")
                            } else 0 != this.p_external_link.hljs_css && console.error("external_link.hljs_css is not a function, if you want to disabled this error log, set external_link.hljs_css to function or false")
                        }, iRender: function () {
                            var e = this;
                            e.$render(e.d_value, function (t) {
                                e.d_render = t, e.change && e.change(e.d_value, e.d_render), e.s_navigation && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__lib_core_extra_function_js__.e)(e, !1), e.$emit("input", e.d_value), e.d_value !== e.d_history[e.d_history_index] && (window.clearTimeout(e.currentTimeout), e.currentTimeout = setTimeout(function () {
                                    e.saveHistory()
                                }, 500))
                            })
                        }
                    },
                    watch: {
                        d_value: function (e, t) {
                            this.iRender(e)
                        }, value: function (e, t) {
                            e !== this.d_value && (this.d_value = e)
                        }, subfield: function (e, t) {
                            this.s_subfield = e
                        }, d_history_index: function () {
                            this.d_history_index > 20 && (this.d_history.shift(), this.d_history_index = this.d_history_index - 1), this.d_value = this.d_history[this.d_history_index]
                        }, language: function (e) {
                            this.initLanguage()
                        }, editable: function () {
                            this.editableTextarea()
                        }, default_open: function (e) {
                            var t = e;
                            return t || (t = this.subfield ? "preview" : "edit"), this.s_preview_switch = "preview" === t
                        }, code_style: function (e) {
                            this.codeStyleChange(e)
                        }
                    },
                    components: {
                        "v-autoTextarea": __WEBPACK_IMPORTED_MODULE_1_auto_textarea__.autoTextarea,
                        "s-md-toolbar-left": s_md_toolbar_left,
                        "s-md-toolbar-right": s_md_toolbar_right
                    }
                }
            }, function (e, t, n) {
                "use strict";
                var r = n(54), o = {
                    markdownIt: r.mixins[0].data().s_markdown, mavonEditor: r, install: function (e) {
                        e.component("mavon-editor", r)
                    }
                };
                e.exports = o
            }, function (e, t, n) {
                "use strict";
                n.d(t, "a", function () {
                    return f
                });
                var r = n(175), o = n.n(r), i = n(176), a = n.n(i), s = n(177), l = n.n(s), c = n(194), u = n.n(c),
                    p = n(195), _ = n.n(p), d = n(196), h = n.n(d), f = {
                        help_cn: o.a,
                        help_en: a.a,
                        help_fr: l.a,
                        words_cn: u.a,
                        words_en: _.a,
                        words_fr: h.a,
                        langList: ["en", "cn", "fr"],
                        toolbars: {
                            bold: !0,
                            italic: !0,
                            header: !0,
                            underline: !0,
                            strikethrough: !0,
                            mark: !0,
                            superscript: !0,
                            subscript: !0,
                            quote: !0,
                            ol: !0,
                            ul: !0,
                            link: !0,
                            imagelink: !0,
                            code: !0,
                            table: !0,
                            undo: !0,
                            redo: !0,
                            trash: !0,
                            save: !0,
                            alignleft: !0,
                            aligncenter: !0,
                            alignright: !0,
                            navigation: !0,
                            subfield: !0,
                            fullscreen: !0,
                            readmodel: !0,
                            htmlcode: !0,
                            help: !0,
                            preview: !0
                        }
                    }
            }, function (e, t, n) {
                "use strict";
                n(16)
            }, function (e, t, n) {
                "use strict";
                t.a = {
                    agate: 1,
                    androidstudio: 1,
                    "arduino-light": 1,
                    arta: 1,
                    ascetic: 1,
                    "atelier-cave-dark": 1,
                    "atelier-cave-light": 1,
                    "atelier-dune-dark": 1,
                    "atelier-dune-light": 1,
                    "atelier-estuary-dark": 1,
                    "atelier-estuary-light": 1,
                    "atelier-forest-dark": 1,
                    "atelier-forest-light": 1,
                    "atelier-heath-dark": 1,
                    "atelier-heath-light": 1,
                    "atelier-lakeside-dark": 1,
                    "atelier-lakeside-light": 1,
                    "atelier-plateau-dark": 1,
                    "atelier-plateau-light": 1,
                    "atelier-savanna-dark": 1,
                    "atelier-savanna-light": 1,
                    "atelier-seaside-dark": 1,
                    "atelier-seaside-light": 1,
                    "atelier-sulphurpool-dark": 1,
                    "atelier-sulphurpool-light": 1,
                    "atom-one-dark": 1,
                    "atom-one-light": 1,
                    "brown-paper": 1,
                    "codepen-embed": 1,
                    "color-brewer": 1,
                    darcula: 1,
                    dark: 1,
                    darkula: 1,
                    default: 1,
                    docco: 1,
                    dracula: 1,
                    far: 1,
                    foundation: 1,
                    "github-gist": 1,
                    github: 1,
                    googlecode: 1,
                    grayscale: 1,
                    "gruvbox-dark": 1,
                    "gruvbox-light": 1,
                    hopscotch: 1,
                    hybrid: 1,
                    idea: 1,
                    "ir-black": 1,
                    "kimbie.dark": 1,
                    "kimbie.light": 1,
                    magula: 1,
                    "mono-blue": 1,
                    "monokai-sublime": 1,
                    monokai: 1,
                    obsidian: 1,
                    ocean: 1,
                    "paraiso-dark": 1,
                    "paraiso-light": 1,
                    pojoaque: 1,
                    purebasic: 1,
                    qtcreator_dark: 1,
                    qtcreator_light: 1,
                    railscasts: 1,
                    rainbow: 1,
                    routeros: 1,
                    "school-book": 1,
                    "solarized-dark": 1,
                    "solarized-light": 1,
                    sunburst: 1,
                    "tomorrow-night-blue": 1,
                    "tomorrow-night-bright": 1,
                    "tomorrow-night-eighties": 1,
                    "tomorrow-night": 1,
                    tomorrow: 1,
                    vs: 1,
                    vs2015: 1,
                    xcode: 1,
                    xt256: 1,
                    zenburn: 1
                }
            }, function (e, t, n) {
                "use strict";
                n.d(t, "a", function () {
                    return A
                });
                var r = 118, o = 120, i = 121, a = 122, s = 123, l = 66, c = 73, u = 72, p = 85, _ = 68, d = 77, h = 81,
                    f = 79, m = 76, g = 83, b = 90, v = 89, k = 76, w = 84, y = 8, x = 9, C = 13, A = function (e) {
                        e.$el.addEventListener("keydown", function (t) {
                            if (t.ctrlKey || t.metaKey || t.altKey || t.shiftKey)if (!t.ctrlKey && !t.metaKey || t.altKey || t.shiftKey) {
                                if ((t.ctrlKey || t.metaKey) && t.altKey && !t.shiftKey)switch (t.keyCode) {
                                    case g:
                                        t.preventDefault(), e.toolbar_left_click("superscript");
                                        break;
                                    case p:
                                        t.preventDefault(), e.toolbar_left_click("ul");
                                        break;
                                    case k:
                                        t.preventDefault(), e.toolbar_left_click("imagelink");
                                        break;
                                    case m:
                                        t.preventDefault(), e.toolbar_left_click("code");
                                        break;
                                    case w:
                                        t.preventDefault(), e.toolbar_left_click("table")
                                } else if ((t.ctrlKey || t.metaKey) && t.shiftKey && !t.altKey)switch (t.keyCode) {
                                    case g:
                                        t.preventDefault(), e.toolbar_left_click("subscript")
                                }
                            } else switch (t.keyCode) {
                                case l:
                                    t.preventDefault(), e.toolbar_left_click("bold");
                                    break;
                                case c:
                                    t.preventDefault(), e.toolbar_left_click("italic");
                                    break;
                                case u:
                                    t.preventDefault(), e.toolbar_left_click("header");
                                    break;
                                case p:
                                    t.preventDefault(), e.toolbar_left_click("underline");
                                    break;
                                case _:
                                    t.preventDefault(), e.toolbar_left_click("strikethrough");
                                    break;
                                case d:
                                    t.preventDefault(), e.toolbar_left_click("mark");
                                    break;
                                case h:
                                    t.preventDefault(), e.toolbar_left_click("quote");
                                    break;
                                case f:
                                    t.preventDefault(), e.toolbar_left_click("ol");
                                    break;
                                case m:
                                    t.preventDefault(), e.toolbar_left_click("link");
                                    break;
                                case g:
                                    t.preventDefault(), e.toolbar_left_click("save");
                                    break;
                                case b:
                                    t.preventDefault(), e.toolbar_left_click("undo");
                                    break;
                                case v:
                                    t.preventDefault(), e.toolbar_left_click("redo");
                                    break;
                                case y:
                                    t.preventDefault(), e.toolbar_left_click("trash")
                            } else switch (t.keyCode) {
                                case r:
                                    e.toolbars.navigation && (t.preventDefault(), e.toolbar_right_click("navigation"));
                                    break;
                                case o:
                                    e.toolbars.preview && (t.preventDefault(), e.toolbar_right_click("preview"));
                                    break;
                                case i:
                                    e.toolbars.fullscreen && (t.preventDefault(), e.toolbar_right_click("fullscreen"));
                                    break;
                                case a:
                                    e.toolbars.readmodel && (t.preventDefault(), e.toolbar_right_click("read"));
                                    break;
                                case s:
                                    e.toolbars.subfield && (t.preventDefault(), e.toolbar_right_click("subfield"));
                                    break;
                                case x:
                                    e.$refs.toolbar_left.s_img_link_open || (t.preventDefault(), e.insertTab());
                                    break;
                                case C:
                                    console.log("enter"), e.$refs.toolbar_left.s_img_link_open && (t.preventDefault(), e.$refs.toolbar_left.$imgLinkAdd())
                            }
                        })
                    }
            }, function (e, t, n) {
                "use strict";
                var r = n(34), o = n(16), i = n(125)({
                        html: !0,
                        xhtmlOut: !0,
                        breaks: !0,
                        langPrefix: "lang-",
                        linkify: !1,
                        typographer: !0,
                        quotes: "“”‘’"
                    }), a = n(111), s = n(123), l = n(124), c = n(110), u = n(108), p = n(117), _ = n(120), d = n(122),
                    h = n(109), f = i.renderer.rules.link_open || function (e, t, n, r, o) {
                            return o.renderToken(e, t, n)
                        };
                i.renderer.rules.link_open = function (e, t, n, r, o) {
                    var i = e[t].attrIndex("target");
                    return i < 0 ? e[t].attrPush(["target", "_blank"]) : e[t].attrs[i][1] = "_blank", f(e, t, n, r, o)
                };
                var m = n(118), g = n(121), b = n(119), v = {}, k = [], w = {
                    hljs: "auto", highlighted: !0, langCheck: function (e) {
                        e && r.a[e] && !v[e] && (v[e] = 1, k.push(e))
                    }
                };
                i.use(m, w).use(a).use(l).use(s).use(h).use(h, "hljs-left").use(h, "hljs-center").use(h, "hljs-right").use(c).use(u).use(p).use(_).use(d).use(h).use(b).use(g), t.a = {
                    data: function () {
                        return {s_markdown: i}
                    }, mounted: function () {
                        w.highlighted = this.ishljs
                    }, methods: {
                        $render: function (e, t) {
                            v = {}, k = [];
                            var n = i.render(e);
                            this.ishljs && k.length > 0 && this.$_render(e, t, n), t(n)
                        }, $_render: function (e, t, r) {
                            for (var a = 0, s = 0; s < k.length; s++) {
                                var l = this.p_external_link.hljs_lang(k[s]);
                                n.i(o.d)(l, function () {
                                    (a += 1) === k.length && (r = i.render(e), t(r))
                                })
                            }
                        }
                    }, watch: {
                        ishljs: function (e) {
                            w.highlighted = e
                        }
                    }
                }
            }, function (e, t, n) {
                "use strict";
                function r(e) {
                    if (e.d_history_index > 0 && e.d_history_index--, e.s_preview_switch) {
                        var t = e.getTextareaDom().selectionStart, n = e.d_value.length;
                        e.$nextTick(function () {
                            t -= n - e.d_value.length, e.getTextareaDom().selectionStart = t, e.getTextareaDom().selectionEnd = t
                        })
                    }
                }

                function o(e) {
                    e.d_history_index < e.d_history.length - 1 && e.d_history_index++
                }

                function i(e) {
                    e.d_value = ""
                }

                function a(e) {
                    e.save(e.d_value, e.d_render)
                }

                n.d(t, "b", function () {
                    return s
                }), n.d(t, "a", function () {
                    return l
                });
                var s = function (e, t, n, r) {
                    var o = {prefix: "link" === e ? "[" + t + "](" : "![" + t + "](", subfix: ")", str: n};
                    r.insertText(r.getTextareaDom(), o)
                }, l = function (e, t) {
                    var n = {
                        bold: {prefix: "**", subfix: "**", str: t.d_words.tl_bold},
                        italic: {prefix: "*", subfix: "*", str: t.d_words.tl_italic},
                        header: {prefix: "# ", subfix: " #", str: t.d_words.tl_header},
                        underline: {prefix: "++", subfix: "++", str: t.d_words.tl_underline},
                        strikethrough: {prefix: "~~", subfix: "~~", str: t.d_words.tl_strikethrough},
                        mark: {prefix: "==", subfix: "==", str: t.d_words.tl_mark},
                        superscript: {prefix: "^", subfix: "^", str: t.d_words.tl_superscript},
                        subscript: {prefix: "~", subfix: "~", str: t.d_words.tl_subscript},
                        quote: {prefix: "> ", subfix: "", str: t.d_words.tl_quote},
                        ol: {prefix: "1. ", subfix: "", str: t.d_words.tl_ol},
                        ul: {prefix: "- ", subfix: "", str: t.d_words.tl_ul},
                        link: {prefix: "[](", subfix: ")", str: t.d_words.tl_link},
                        imagelink: {prefix: "![](", subfix: ")", str: t.d_words.tl_image},
                        code: {prefix: "```", subfix: "\n\n```\n", str: "language"},
                        table: {
                            prefix: "",
                            subfix: "",
                            str: "|column1|column2|column3|\n|-|-|-|\n|content1|content2|content3|\n"
                        },
                        aligncenter: {
                            prefix: "::: hljs-center\n\n",
                            subfix: "\n\n:::\n",
                            str: t.d_words.tl_aligncenter
                        },
                        alignright: {prefix: "::: hljs-right\n\n", subfix: "\n\n:::\n", str: t.d_words.tl_alignright},
                        alignleft: {prefix: "::: hljs-left\n\n", subfix: "\n\n:::\n", str: t.d_words.tl_alignleft}
                    };
                    n.hasOwnProperty(e) && t.insertText(t.getTextareaDom(), n[e]);
                    var s = {undo: r, redo: o, trash: i, save: a};
                    s.hasOwnProperty(e) && s[e](t)
                }
            }, function (e, t, n) {
                "use strict";
                function r(e) {
                    e.s_html_code = !e.s_html_code, e.htmlcode && e.htmlcode(e.s_html_code, e.d_value)
                }

                function o(e) {
                    e.s_help = !e.s_help, e.helptoggle && e.helptoggle(e.s_help, e.d_value)
                }

                function i(e) {
                    var t = e.$refs.vReadModel;
                    t.requestFullscreen ? t.requestFullscreen() : t.mozRequestFullScreen ? t.mozRequestFullScreen() : t.webkitRequestFullscreen ? t.webkitRequestFullscreen() : t.msRequestFullscreen && t.msRequestFullscreen()
                }

                function a(e) {
                    e.s_preview_switch = !e.s_preview_switch, e.previewtoggle && e.previewtoggle(e.s_preview_switch, e.d_value)
                }

                function s(e) {
                    e.s_fullScreen = !e.s_fullScreen, e.fullscreen && e.fullscreen(e.s_fullScreen, e.d_value)
                }

                function l(e) {
                    e.s_subfield = !e.s_subfield, e.s_preview_switch = e.s_subfield, e.previewtoggle && e.previewtoggle(e.s_preview_switch, e.d_value), e.subfieldtoggle && e.subfieldtoggle(e.s_subfield, e.d_value)
                }

                function c(e) {
                    e.s_navigation = !e.s_navigation, e.s_navigation && (e.s_preview_switch = !0), e.navigationtoggle && e.navigationtoggle(e.s_navigation, e.d_value), e.s_navigation && e.getNavigation(e, !1)
                }

                n.d(t, "a", function () {
                    return u
                });
                var u = function (e, t) {
                    var n = {help: o, html: r, read: i, preview: a, fullscreen: s, navigation: c, subfield: l};
                    n.hasOwnProperty(e) && n[e](t)
                }
            }, function (e, t, n) {
                "use strict";
                var r = n(35);
                n.n(r)
            }, function (e, t, n) {
                e.exports = {default: n(71), __esModule: !0}
            }, function (e, t, n) {
                e.exports = {default: n(72), __esModule: !0}
            }, function (e, t, n) {
                n(95), n(93), n(96), n(97), e.exports = n(17).Symbol
            }, function (e, t, n) {
                n(94), n(98), e.exports = n(30).f("iterator")
            }, function (e, t) {
                e.exports = function (e) {
                    if ("function" != typeof e)throw TypeError(e + " is not a function!");
                    return e
                }
            }, function (e, t) {
                e.exports = function () {
                }
            }, function (e, t, n) {
                var r = n(6), o = n(90), i = n(89);
                e.exports = function (e) {
                    return function (t, n, a) {
                        var s, l = r(t), c = o(l.length), u = i(a, c);
                        if (e && n != n) {
                            for (; c > u;)if ((s = l[u++]) != s)return !0
                        } else for (; c > u; u++)if ((e || u in l) && l[u] === n)return e || u || 0;
                        return !e && -1
                    }
                }
            }, function (e, t, n) {
                var r = n(73);
                e.exports = function (e, t, n) {
                    if (r(e), void 0 === t)return e;
                    switch (n) {
                        case 1:
                            return function (n) {
                                return e.call(t, n)
                            };
                        case 2:
                            return function (n, r) {
                                return e.call(t, n, r)
                            };
                        case 3:
                            return function (n, r, o) {
                                return e.call(t, n, r, o)
                            }
                    }
                    return function () {
                        return e.apply(t, arguments)
                    }
                }
            }, function (e, t, n) {
                var r = n(22), o = n(43), i = n(23);
                e.exports = function (e) {
                    var t = r(e), n = o.f;
                    if (n)for (var a, s = n(e), l = i.f, c = 0; s.length > c;)l.call(e, a = s[c++]) && t.push(a);
                    return t
                }
            }, function (e, t, n) {
                var r = n(1).document;
                e.exports = r && r.documentElement
            }, function (e, t, n) {
                var r = n(36);
                e.exports = Object("z").propertyIsEnumerable(0) ? Object : function (e) {
                    return "String" == r(e) ? e.split("") : Object(e)
                }
            }, function (e, t, n) {
                var r = n(36);
                e.exports = Array.isArray || function (e) {
                        return "Array" == r(e)
                    }
            }, function (e, t, n) {
                "use strict";
                var r = n(41), o = n(11), i = n(24), a = {};
                n(4)(a, n(7)("iterator"), function () {
                    return this
                }), e.exports = function (e, t, n) {
                    e.prototype = r(a, {next: o(1, n)}), i(e, t + " Iterator")
                }
            }, function (e, t) {
                e.exports = function (e, t) {
                    return {value: t, done: !!e}
                }
            }, function (e, t, n) {
                var r = n(12)("meta"), o = n(8), i = n(2), a = n(5).f, s = 0, l = Object.isExtensible || function () {
                        return !0
                    }, c = !n(10)(function () {
                    return l(Object.preventExtensions({}))
                }), u = function (e) {
                    a(e, r, {value: {i: "O" + ++s, w: {}}})
                }, p = e.exports = {
                    KEY: r, NEED: !1, fastKey: function (e, t) {
                        if (!o(e))return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
                        if (!i(e, r)) {
                            if (!l(e))return "F";
                            if (!t)return "E";
                            u(e)
                        }
                        return e[r].i
                    }, getWeak: function (e, t) {
                        if (!i(e, r)) {
                            if (!l(e))return !0;
                            if (!t)return !1;
                            u(e)
                        }
                        return e[r].w
                    }, onFreeze: function (e) {
                        return c && p.NEED && l(e) && !i(e, r) && u(e), e
                    }
                }
            }, function (e, t, n) {
                var r = n(5), o = n(9), i = n(22);
                e.exports = n(3) ? Object.defineProperties : function (e, t) {
                    o(e);
                    for (var n, a = i(t), s = a.length, l = 0; s > l;)r.f(e, n = a[l++], t[n]);
                    return e
                }
            }, function (e, t, n) {
                var r = n(23), o = n(11), i = n(6), a = n(28), s = n(2), l = n(39), c = Object.getOwnPropertyDescriptor;
                t.f = n(3) ? c : function (e, t) {
                    if (e = i(e), t = a(t, !0), l)try {
                        return c(e, t)
                    } catch (e) {
                    }
                    if (s(e, t))return o(!r.f.call(e, t), e[t])
                }
            }, function (e, t, n) {
                var r = n(6), o = n(42).f, i = {}.toString,
                    a = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
                e.exports.f = function (e) {
                    return a && "[object Window]" == i.call(e) ? function (e) {
                        try {
                            return o(e)
                        } catch (e) {
                            return a.slice()
                        }
                    }(e) : o(r(e))
                }
            }, function (e, t, n) {
                var r = n(2), o = n(91), i = n(25)("IE_PROTO"), a = Object.prototype;
                e.exports = Object.getPrototypeOf || function (e) {
                        return e = o(e), r(e, i) ? e[i] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? a : null
                    }
            }, function (e, t, n) {
                var r = n(27), o = n(18);
                e.exports = function (e) {
                    return function (t, n) {
                        var i, a, s = String(o(t)), l = r(n), c = s.length;
                        return l < 0 || l >= c ? e ? "" : void 0 : (i = s.charCodeAt(l)) < 55296 || i > 56319 || l + 1 === c || (a = s.charCodeAt(l + 1)) < 56320 || a > 57343 ? e ? s.charAt(l) : i : e ? s.slice(l, l + 2) : a - 56320 + (i - 55296 << 10) + 65536
                    }
                }
            }, function (e, t, n) {
                var r = n(27), o = Math.max, i = Math.min;
                e.exports = function (e, t) {
                    return (e = r(e)) < 0 ? o(e + t, 0) : i(e, t)
                }
            }, function (e, t, n) {
                var r = n(27), o = Math.min;
                e.exports = function (e) {
                    return e > 0 ? o(r(e), 9007199254740991) : 0
                }
            }, function (e, t, n) {
                var r = n(18);
                e.exports = function (e) {
                    return Object(r(e))
                }
            }, function (e, t, n) {
                "use strict";
                var r = n(74), o = n(82), i = n(20), a = n(6);
                e.exports = n(40)(Array, "Array", function (e, t) {
                    this._t = a(e), this._i = 0, this._k = t
                }, function () {
                    var e = this._t, t = this._k, n = this._i++;
                    return !e || n >= e.length ? (this._t = void 0, o(1)) : o(0, "keys" == t ? n : "values" == t ? e[n] : [n, e[n]])
                }, "values"), i.Arguments = i.Array, r("keys"), r("values"), r("entries")
            }, function (e, t) {
            }, function (e, t, n) {
                "use strict";
                var r = n(88)(!0);
                n(40)(String, "String", function (e) {
                    this._t = String(e), this._i = 0
                }, function () {
                    var e, t = this._t, n = this._i;
                    return n >= t.length ? {value: void 0, done: !0} : (e = r(t, n), this._i += e.length, {
                        value: e,
                        done: !1
                    })
                })
            }, function (e, t, n) {
                "use strict";
                var r = n(1), o = n(2), i = n(3), a = n(38), s = n(45), l = n(83).KEY, c = n(10), u = n(26), p = n(24),
                    _ = n(12), d = n(7), h = n(30), f = n(29), m = n(77), g = n(80), b = n(9), v = n(8), k = n(6),
                    w = n(28), y = n(11), x = n(41), C = n(86), A = n(85), E = n(5), D = n(22), S = A.f, q = E.f,
                    T = C.f, j = r.Symbol, L = r.JSON, M = L && L.stringify, O = d("_hidden"), F = d("toPrimitive"),
                    z = {}.propertyIsEnumerable, $ = u("symbol-registry"), P = u("symbols"), I = u("op-symbols"),
                    R = Object.prototype, B = "function" == typeof j, N = r.QObject,
                    U = !N || !N.prototype || !N.prototype.findChild, H = i && c(function () {
                        return 7 != x(q({}, "a", {
                                get: function () {
                                    return q(this, "a", {value: 7}).a
                                }
                            })).a
                    }) ? function (e, t, n) {
                        var r = S(R, t);
                        r && delete R[t], q(e, t, n), r && e !== R && q(R, t, r)
                    } : q, K = function (e) {
                        var t = P[e] = x(j.prototype);
                        return t._k = e, t
                    }, W = B && "symbol" == typeof j.iterator ? function (e) {
                        return "symbol" == typeof e
                    } : function (e) {
                        return e instanceof j
                    }, V = function (e, t, n) {
                        return e === R && V(I, t, n), b(e), t = w(t, !0), b(n), o(P, t) ? (n.enumerable ? (o(e, O) && e[O][t] && (e[O][t] = !1), n = x(n, {enumerable: y(0, !1)})) : (o(e, O) || q(e, O, y(1, {})), e[O][t] = !0), H(e, t, n)) : q(e, t, n)
                    }, G = function (e, t) {
                        b(e);
                        for (var n, r = m(t = k(t)), o = 0, i = r.length; i > o;)V(e, n = r[o++], t[n]);
                        return e
                    }, Z = function (e) {
                        var t = z.call(this, e = w(e, !0));
                        return !(this === R && o(P, e) && !o(I, e)) && (!(t || !o(this, e) || !o(P, e) || o(this, O) && this[O][e]) || t)
                    }, Y = function (e, t) {
                        if (e = k(e), t = w(t, !0), e !== R || !o(P, t) || o(I, t)) {
                            var n = S(e, t);
                            return !n || !o(P, t) || o(e, O) && e[O][t] || (n.enumerable = !0), n
                        }
                    }, Q = function (e) {
                        for (var t, n = T(k(e)), r = [], i = 0; n.length > i;)o(P, t = n[i++]) || t == O || t == l || r.push(t);
                        return r
                    }, X = function (e) {
                        for (var t, n = e === R, r = T(n ? I : k(e)), i = [], a = 0; r.length > a;)!o(P, t = r[a++]) || n && !o(R, t) || i.push(P[t]);
                        return i
                    };
                B || (j = function () {
                    if (this instanceof j)throw TypeError("Symbol is not a constructor!");
                    var e = _(arguments.length > 0 ? arguments[0] : void 0), t = function (n) {
                        this === R && t.call(I, n), o(this, O) && o(this[O], e) && (this[O][e] = !1), H(this, e, y(1, n))
                    };
                    return i && U && H(R, e, {configurable: !0, set: t}), K(e)
                }, s(j.prototype, "toString", function () {
                    return this._k
                }), A.f = Y, E.f = V, n(42).f = C.f = Q, n(23).f = Z, n(43).f = X, i && !n(21) && s(R, "propertyIsEnumerable", Z, !0), h.f = function (e) {
                    return K(d(e))
                }), a(a.G + a.W + a.F * !B, {Symbol: j});
                for (var J = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), ee = 0; J.length > ee;)d(J[ee++]);
                for (var te = D(d.store), ne = 0; te.length > ne;)f(te[ne++]);
                a(a.S + a.F * !B, "Symbol", {
                    for: function (e) {
                        return o($, e += "") ? $[e] : $[e] = j(e)
                    }, keyFor: function (e) {
                        if (!W(e))throw TypeError(e + " is not a symbol!");
                        for (var t in $)if ($[t] === e)return t
                    }, useSetter: function () {
                        U = !0
                    }, useSimple: function () {
                        U = !1
                    }
                }), a(a.S + a.F * !B, "Object", {
                    create: function (e, t) {
                        return void 0 === t ? x(e) : G(x(e), t)
                    },
                    defineProperty: V,
                    defineProperties: G,
                    getOwnPropertyDescriptor: Y,
                    getOwnPropertyNames: Q,
                    getOwnPropertySymbols: X
                }), L && a(a.S + a.F * (!B || c(function () {
                        var e = j();
                        return "[null]" != M([e]) || "{}" != M({a: e}) || "{}" != M(Object(e))
                    })), "JSON", {
                    stringify: function (e) {
                        for (var t, n, r = [e], o = 1; arguments.length > o;)r.push(arguments[o++]);
                        if (n = t = r[1], (v(t) || void 0 !== e) && !W(e))return g(t) || (t = function (e, t) {
                            if ("function" == typeof n && (t = n.call(this, e, t)), !W(t))return t
                        }), r[1] = t, M.apply(L, r)
                    }
                }), j.prototype[F] || n(4)(j.prototype, F, j.prototype.valueOf), p(j, "Symbol"), p(Math, "Math", !0), p(r.JSON, "JSON", !0)
            }, function (e, t, n) {
                n(29)("asyncIterator")
            }, function (e, t, n) {
                n(29)("observable")
            }, function (e, t, n) {
                n(92);
                for (var r = n(1), o = n(4), i = n(20), a = n(7)("toStringTag"), s = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), l = 0; l < s.length; l++) {
                    var c = s[l], u = r[c], p = u && u.prototype;
                    p && !p[a] && o(p, a, c), i[c] = i.Array
                }
            }, function (e, t, n) {
                (e.exports = n(13)(void 0)).push([e.i, '\n.auto-textarea-wrapper {\n  position: relative;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  line-height: normal;\n}\n.auto-textarea-wrapper .auto-textarea-block {\n  display: block;\n  white-space: pre-wrap;\n  word-wrap: break-word !important;\n  visibility: hidden;\n  overflow: hidden;\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-size: 100%;\n}\n.auto-textarea-wrapper .auto-textarea-input {\n  font-family: Menlo, "Ubuntu Mono", Consolas, "Courier New", "Microsoft Yahei", "Hiragino Sans GB", "WenQuanYi Micro Hei", sans-serif;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  margin: 0;\n  padding: 0;\n  overflow-y: hidden;\n  color: #2c3e50;\n}\n.auto-textarea-wrapper .auto-textarea-input.no-border {\n  outline: 0 none;\n  border: none !important;\n}\n.auto-textarea-wrapper .auto-textarea-input.no-resize {\n  resize: none;\n}\n', ""])
            }, function (e, t, n) {
                (e.exports = n(13)(void 0)).push([e.i, "\n.op-icon.fa.fa-mavon-picture-o.dropdown[data-v-194160b6] {\n  position: relative;\n}\n.op-icon.fa.fa-mavon-picture-o.dropdown .popup-dropdown[data-v-194160b6] {\n  position: absolute;\n  display: block;\n  background: #fff;\n  top: 34px;\n  left: -20px;\n  width: 120px;\n  z-index: 1600;\n  box-shadow: 0 0px 4px rgba(0,0,0,0.157), 0 0px 4px rgba(0,0,0,0.227);\n}\n.op-icon.fa.fa-mavon-picture-o.dropdown .dropdown-item[data-v-194160b6] {\n  height: 40px;\n  line-height: 40px;\n  transition: all 0.2s linear 0s;\n  position: relative;\n}\n.op-icon.fa.fa-mavon-picture-o.dropdown .dropdown-item[data-v-194160b6]:hover {\n  background: #eaeaea;\n}\n.op-icon.fa.fa-mavon-picture-o.dropdown .dropdown-item input[data-v-194160b6] {\n  position: absolute;\n  font-size: 100px;\n  right: 0;\n  top: 0;\n  opacity: 0;\n  cursor: pointer;\n}\n.op-icon.fa.fa-mavon-picture-o.dropdown .dropdown-images[data-v-194160b6] {\n  box-sizing: border-box;\n}\n.op-icon.fa.fa-mavon-picture-o.dropdown .dropdown-images button[data-v-194160b6] {\n  position: absolute;\n  right: 5px;\n}\n.op-icon.fa.fa-mavon-picture-o.dropdown .dropdown-images button[data-v-194160b6]:hover {\n  color: #db2828;\n}\n.op-icon.fa.fa-mavon-picture-o.dropdown .dropdown-images span[data-v-194160b6] {\n  display: inline-block;\n  width: 90px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.op-icon.fa.fa-mavon-picture-o.dropdown .dropdown-images:hover .image-show[data-v-194160b6] {\n  display: block !important;\n}\n.op-icon.fa.fa-mavon-picture-o.dropdown .dropdown-images .image-show[data-v-194160b6] {\n  display: none;\n  position: absolute;\n  left: -122px;\n  top: 0;\n  transition: all 0.3s linear 0s;\n  width: 120px;\n  height: 90px;\n  border: 1px solid #eeece8;\n}\n.add-image-link-wrapper[data-v-194160b6] {\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background: rgba(0,0,0,0.7);\n  z-index: 1600;\n  transition: all 0.1s linear 0s;\n}\n.add-image-link-wrapper.fade-enter-active[data-v-194160b6],\n.add-image-link-wrapper.fade-leave-active[data-v-194160b6] {\n  opacity: 1;\n}\n.add-image-link-wrapper.fade-enter[data-v-194160b6],\n.add-image-link-wrapper.fade-leave-active[data-v-194160b6] {\n  opacity: 0;\n}\n.add-image-link-wrapper .add-image-link[data-v-194160b6] {\n  position: fixed;\n  box-sizing: border-box;\n  text-align: center;\n  width: 24%;\n  left: 38%;\n  height: auto;\n  padding: 40px;\n  top: 25%;\n  transition: all 0.1s linear 0s;\n  z-index: 3;\n  background: #fff;\n  border-radius: 2px;\n  box-shadow: 0 0px 5px rgba(255,255,255,0.157), 0 0px 5px rgba(255,255,255,0.227);\n}\n@media only screen and (max-width: 1500px) {\n.add-image-link-wrapper .add-image-link[data-v-194160b6] {\n    width: 34%;\n    left: 33%;\n}\n}\n@media only screen and (max-width: 1000px) {\n.add-image-link-wrapper .add-image-link[data-v-194160b6] {\n    width: 50%;\n    left: 25%;\n}\n}\n@media only screen and (max-width: 600px) {\n.add-image-link-wrapper .add-image-link[data-v-194160b6] {\n    width: 80%;\n    left: 10%;\n}\n}\n.add-image-link-wrapper .add-image-link i[data-v-194160b6] {\n  font-size: 24px;\n  position: absolute;\n  right: 8px;\n  top: 6px;\n  color: rgba(0,0,0,0.7);\n  cursor: pointer;\n}\n.add-image-link-wrapper .add-image-link .title[data-v-194160b6] {\n  font-size: 20px;\n  margin-bottom: 30px;\n  margin-top: 10px;\n  font-weight: 500 !important;\n}\n.add-image-link-wrapper .add-image-link .input-wrapper[data-v-194160b6] {\n  margin-top: 10px;\n  width: 80%;\n  border: 1px solid #eeece8;\n  text-align: left;\n  margin-left: 10%;\n  height: 35px;\n}\n.add-image-link-wrapper .add-image-link .input-wrapper input[data-v-194160b6] {\n  height: 32px;\n  line-height: 32px;\n  font-size: 15px;\n  width: 90%;\n  margin-left: 8px;\n  border: none;\n  outline: none;\n}\n.add-image-link-wrapper .add-image-link .op-btn[data-v-194160b6] {\n  width: 100px;\n  height: 35px;\n  display: inline-block;\n  margin-top: 30px;\n  cursor: pointer;\n  text-align: center;\n  line-height: 35px;\n  opacity: 0.9;\n  border-radius: 2px;\n  letter-spacing: 1px;\n  font-size: 15px;\n}\n.add-image-link-wrapper .add-image-link .op-btn.sure[data-v-194160b6] {\n  background: #2185d0;\n  color: #fff;\n  margin-left: 5%;\n}\n.add-image-link-wrapper .add-image-link .op-btn.sure[data-v-194160b6]:hover {\n  opacity: 1;\n}\n.add-image-link-wrapper .add-image-link .op-btn.cancel[data-v-194160b6] {\n  border: 1px solid #bcbcbc;\n  color: #bcbcbc;\n}\n.add-image-link-wrapper .add-image-link .op-btn.cancel[data-v-194160b6]:hover {\n  color: #000;\n}\n", ""])
            }, function (e, t, n) {
                (e.exports = n(13)(void 0)).push([e.i, "\ntextarea:disabled {\n  background-color: #fff;\n}\n.v-note-wrapper {\n  position: relative;\n  min-width: 300px;\n  min-height: 300px;\n  display: flex;\n  flex-direction: column;\n  transition: all 0.3s linear 0s;\n  background: #fff;\n  z-index: 1500;\n  text-align: left;\n}\n.v-note-wrapper.fullscreen {\n  position: fixed;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  height: auto;\n  z-index: 1501;\n}\n.v-note-wrapper .v-note-op {\n  width: 100%;\n  display: flex;\n  white-space: pre-line;\n  flex: none;\n  min-height: 40px;\n  box-shadow: 0 0px 4px rgba(0,0,0,0.157), 0 0px 4px rgba(0,0,0,0.227);\n  background: #fff;\n  z-index: 1;\n}\n.v-note-wrapper .v-note-op .left,\n.v-note-wrapper .v-note-op .right {\n  flex: 1;\n  min-height: 40px;\n  box-sizing: border-box;\n}\n.v-note-wrapper .v-note-op .left .op-icon-divider,\n.v-note-wrapper .v-note-op .right .op-icon-divider {\n  height: 40px;\n  border-left: 1px solid #e5e5e5;\n  margin: 0 6px 0 4px;\n}\n.v-note-wrapper .v-note-op .left .op-icon,\n.v-note-wrapper .v-note-op .right .op-icon {\n  display: inline-block;\n  cursor: pointer;\n  height: 28px;\n  width: 28px;\n  margin: 6px 0 5px 0px;\n  font-size: 15px;\n  padding: 4.5px 6px 5px 3.5px;\n  color: #757575;\n  border-radius: 5px;\n  text-align: center;\n  background: none;\n  border: none;\n  outline: none;\n  line-height: 1;\n}\n.v-note-wrapper .v-note-op .left .op-icon.selected,\n.v-note-wrapper .v-note-op .right .op-icon.selected {\n  color: rgba(0,0,0,0.8);\n  background: #eaeaea;\n}\n.v-note-wrapper .v-note-op .left .op-icon:hover,\n.v-note-wrapper .v-note-op .right .op-icon:hover {\n  color: rgba(0,0,0,0.8);\n  background: #e5e5e5;\n}\n.v-note-wrapper .v-note-op .right {\n  text-align: right;\n  padding-right: 6px;\n  max-width: 30%;\n}\n.v-note-wrapper .v-note-op .left {\n  text-align: left;\n  padding-left: 6px;\n}\n.v-note-wrapper .v-note-panel {\n  position: relative;\n  box-shadow: 0 0px 3px rgba(0,0,0,0.157), 0 0px 3px rgba(0,0,0,0.227);\n  display: flex;\n  flex: 1;\n  width: 100%;\n  box-sizing: border-box;\n  overflow: hidden;\n}\n.v-note-wrapper .v-note-panel .v-note-edit.divarea-wrapper {\n  flex: 0 0 50%;\n  width: 50%;\n  padding: 0;\n  overflow-y: scroll;\n  overflow-x: hidden;\n  box-sizing: border-box;\n  transition: all 0.2s linear 0s;\n  cursor: text;\n}\n.v-note-wrapper .v-note-panel .v-note-edit.divarea-wrapper.scroll-style::-webkit-scrollbar {\n  width: 6px;\n  background-color: #e5e5e5;\n}\n.v-note-wrapper .v-note-panel .v-note-edit.divarea-wrapper.scroll-style::-webkit-scrollbar-thumb {\n  background-color: #b7b7b7;\n  border-radius: 3px;\n}\n.v-note-wrapper .v-note-panel .v-note-edit.divarea-wrapper.scroll-style::-webkit-scrollbar-thumb:hover {\n  background-color: #a1a1a1;\n}\n.v-note-wrapper .v-note-panel .v-note-edit.divarea-wrapper.scroll-style::-webkit-scrollbar-thumb:active {\n  background-color: #a1a1a1;\n}\n.v-note-wrapper .v-note-panel .v-note-edit.divarea-wrapper.scroll-style::-webkit-scrollbar-track {\n  -webkit-box-shadow: 0 0 0px #808080 inset;\n}\n.v-note-wrapper .v-note-panel .v-note-edit.divarea-wrapper.single-edit {\n  width: 100%;\n  flex: 0 0 100%;\n  overflow-y: auto;\n}\n.v-note-wrapper .v-note-panel .v-note-edit.divarea-wrapper.single-show {\n  width: 0;\n  flex: 0 0 0;\n  display: none;\n}\n.v-note-wrapper .v-note-panel .v-note-edit.divarea-wrapper .content-div {\n  width: 100%;\n  padding: 20px 25px;\n  box-sizing: border-box;\n  outline: 0 none;\n  border: none !important;\n  color: #2c3e50;\n  font-size: 16px;\n}\n.v-note-wrapper .v-note-panel .v-note-edit.divarea-wrapper .content-input-wrapper {\n  width: 100%;\n  height: auto;\n  padding: 8px 25px 15px 25px;\n}\n.v-note-wrapper .v-note-panel .v-note-show {\n  flex: 0 0 50%;\n  width: 50%;\n  overflow-y: auto;\n  padding: 0 0;\n  transition: all 0.2s linear 0s;\n}\n.v-note-wrapper .v-note-panel .v-note-show.single-show {\n  flex: 0 0 100%;\n  width: 100%;\n}\n.v-note-wrapper .v-note-panel .v-note-show .v-show-content,\n.v-note-wrapper .v-note-panel .v-note-show .v-show-content-html {\n  width: 100%;\n  height: 100%;\n  padding: 8px 25px 15px 25px;\n  overflow-y: auto;\n  box-sizing: border-box;\n  overflow-x: hidden;\n  background: #fbfbfb;\n}\n.v-note-wrapper .v-note-panel .v-note-show .v-show-content.scroll-style::-webkit-scrollbar,\n.v-note-wrapper .v-note-panel .v-note-show .v-show-content-html.scroll-style::-webkit-scrollbar {\n  width: 6px;\n  background-color: #e5e5e5;\n}\n.v-note-wrapper .v-note-panel .v-note-show .v-show-content.scroll-style::-webkit-scrollbar-thumb,\n.v-note-wrapper .v-note-panel .v-note-show .v-show-content-html.scroll-style::-webkit-scrollbar-thumb {\n  background-color: #b7b7b7;\n  border-radius: 3px;\n}\n.v-note-wrapper .v-note-panel .v-note-show .v-show-content.scroll-style::-webkit-scrollbar-thumb:hover,\n.v-note-wrapper .v-note-panel .v-note-show .v-show-content-html.scroll-style::-webkit-scrollbar-thumb:hover {\n  background-color: #a1a1a1;\n}\n.v-note-wrapper .v-note-panel .v-note-show .v-show-content.scroll-style::-webkit-scrollbar-thumb:active,\n.v-note-wrapper .v-note-panel .v-note-show .v-show-content-html.scroll-style::-webkit-scrollbar-thumb:active {\n  background-color: #a1a1a1;\n}\n.v-note-wrapper .v-note-panel .v-note-show .v-show-content.scroll-style::-webkit-scrollbar-track,\n.v-note-wrapper .v-note-panel .v-note-show .v-show-content-html.scroll-style::-webkit-scrollbar-track {\n  -webkit-box-shadow: 0 0 0px #808080 inset;\n}\n.v-note-wrapper .v-note-panel .v-note-navigation-wrapper {\n  position: absolute;\n  width: 250px;\n  right: 0;\n  top: 0px;\n  bottom: 0;\n  display: flex;\n  flex-direction: column;\n  background: rgba(255,255,255,0.98);\n  box-shadow: 0 0px 4px rgba(0,0,0,0.157), 0 0px 4px rgba(0,0,0,0.227);\n  transition: all 0.1s linear 0s;\n}\n@media only screen and (max-width: 768px) {\n.v-note-wrapper .v-note-panel .v-note-navigation-wrapper {\n    width: 50%;\n}\n}\n.v-note-wrapper .v-note-panel .v-note-navigation-wrapper.slideTop-enter-active,\n.v-note-wrapper .v-note-panel .v-note-navigation-wrapper.slideTop-leave-active {\n  bottom: 0;\n}\n.v-note-wrapper .v-note-panel .v-note-navigation-wrapper.slideTop-enter,\n.v-note-wrapper .v-note-panel .v-note-navigation-wrapper.slideTop-leave-active {\n  bottom: 100%;\n}\n.v-note-wrapper .v-note-panel .v-note-navigation-wrapper .v-note-navigation-title {\n  height: 50px;\n  width: 100%;\n  border-bottom: 1px solid #eeece8;\n  flex: none;\n  line-height: 50px;\n  font-size: 18px;\n  font-weight: 500;\n  box-sizing: border-box;\n  padding: 0 12px;\n  box-shadow: 0 0px 1px rgba(0,0,0,0.157), 0 0px 1px rgba(0,0,0,0.227);\n}\n.v-note-wrapper .v-note-panel .v-note-navigation-wrapper .v-note-navigation-title .v-note-navigation-close {\n  float: right;\n  color: #757575;\n  font-size: 20px;\n  cursor: pointer;\n}\n.v-note-wrapper .v-note-panel .v-note-navigation-wrapper .v-note-navigation-title .v-note-navigation-close:hover {\n  color: #696969;\n}\n.v-note-wrapper .v-note-panel .v-note-navigation-wrapper .v-note-navigation-content {\n  overflow-y: auto;\n  flex: 1;\n  padding: 8px 0;\n}\n.v-note-wrapper .v-note-panel .v-note-navigation-wrapper .v-note-navigation-content.scroll-style::-webkit-scrollbar {\n  width: 6px;\n  background-color: #e5e5e5;\n}\n.v-note-wrapper .v-note-panel .v-note-navigation-wrapper .v-note-navigation-content.scroll-style::-webkit-scrollbar-thumb {\n  background-color: #b7b7b7;\n  border-radius: 3px;\n}\n.v-note-wrapper .v-note-panel .v-note-navigation-wrapper .v-note-navigation-content.scroll-style::-webkit-scrollbar-thumb:hover {\n  background-color: #a1a1a1;\n}\n.v-note-wrapper .v-note-panel .v-note-navigation-wrapper .v-note-navigation-content.scroll-style::-webkit-scrollbar-thumb:active {\n  background-color: #a1a1a1;\n}\n.v-note-wrapper .v-note-panel .v-note-navigation-wrapper .v-note-navigation-content.scroll-style::-webkit-scrollbar-track {\n  -webkit-box-shadow: 0 0 0px #808080 inset;\n}\n.v-note-wrapper .v-note-panel .v-note-navigation-wrapper .v-note-navigation-content h1,\n.v-note-wrapper .v-note-panel .v-note-navigation-wrapper .v-note-navigation-content h2,\n.v-note-wrapper .v-note-panel .v-note-navigation-wrapper .v-note-navigation-content h3,\n.v-note-wrapper .v-note-panel .v-note-navigation-wrapper .v-note-navigation-content h4,\n.v-note-wrapper .v-note-panel .v-note-navigation-wrapper .v-note-navigation-content h5,\n.v-note-wrapper .v-note-panel .v-note-navigation-wrapper .v-note-navigation-content h6 {\n  margin: 2px 0;\n  font-weight: 500;\n  font-size: 17px;\n  color: #2185d0;\n  cursor: pointer;\n  line-height: normal;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  padding: 0 12px;\n  border-bottom: none;\n}\n.v-note-wrapper .v-note-panel .v-note-navigation-wrapper .v-note-navigation-content h1:hover,\n.v-note-wrapper .v-note-panel .v-note-navigation-wrapper .v-note-navigation-content h2:hover,\n.v-note-wrapper .v-note-panel .v-note-navigation-wrapper .v-note-navigation-content h3:hover,\n.v-note-wrapper .v-note-panel .v-note-navigation-wrapper .v-note-navigation-content h4:hover,\n.v-note-wrapper .v-note-panel .v-note-navigation-wrapper .v-note-navigation-content h5:hover,\n.v-note-wrapper .v-note-panel .v-note-navigation-wrapper .v-note-navigation-content h6:hover {\n  color: #483d8b;\n  text-decoration-line: underline;\n}\n.v-note-wrapper .v-note-panel .v-note-navigation-wrapper .v-note-navigation-content h2 {\n  padding-left: 27px;\n  font-size: 17px;\n}\n.v-note-wrapper .v-note-panel .v-note-navigation-wrapper .v-note-navigation-content h3 {\n  padding-left: 42px;\n  font-size: 17px;\n}\n.v-note-wrapper .v-note-panel .v-note-navigation-wrapper .v-note-navigation-content h4 {\n  padding-left: 58px;\n  font-size: 15px;\n}\n.v-note-wrapper .v-note-panel .v-note-navigation-wrapper .v-note-navigation-content h5 {\n  padding-left: 72px;\n  font-size: 15px;\n}\n.v-note-wrapper .v-note-panel .v-note-navigation-wrapper .v-note-navigation-content h6 {\n  padding-left: 87px;\n  font-size: 15px;\n}\n.v-note-wrapper .v-note-read-model {\n  position: relative;\n  display: none;\n  width: 100%;\n  height: 100%;\n  background: #fbfbfb;\n  padding: 30px 8% 50px 8%;\n  overflow-y: auto;\n  box-sizing: border-box;\n}\n.v-note-wrapper .v-note-read-model.scroll-style::-webkit-scrollbar {\n  width: 6px;\n  background-color: #e5e5e5;\n}\n.v-note-wrapper .v-note-read-model.scroll-style::-webkit-scrollbar-thumb {\n  background-color: #b7b7b7;\n  border-radius: 3px;\n}\n.v-note-wrapper .v-note-read-model.scroll-style::-webkit-scrollbar-thumb:hover {\n  background-color: #a1a1a1;\n}\n.v-note-wrapper .v-note-read-model.scroll-style::-webkit-scrollbar-thumb:active {\n  background-color: #a1a1a1;\n}\n.v-note-wrapper .v-note-read-model.scroll-style::-webkit-scrollbar-track {\n  -webkit-box-shadow: 0 0 0px #808080 inset;\n}\n.v-note-wrapper .v-note-read-model.show {\n  display: block;\n}\n.v-note-help-wrapper {\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background: rgba(0,0,0,0.7);\n  z-index: 1600;\n  transition: all 0.1s linear 0s;\n}\n.v-note-help-wrapper.fade-enter-active,\n.v-note-help-wrapper.fade-leave-active {\n  opacity: 1;\n}\n.v-note-help-wrapper.fade-enter,\n.v-note-help-wrapper.fade-leave-active {\n  opacity: 0;\n}\n.v-note-help-wrapper .v-note-help-content {\n  position: relative;\n  width: 60%;\n  max-width: 800px;\n  margin: 30px auto;\n  height: 90%;\n  min-width: 320px;\n  transition: all 0.1s linear 0s;\n  z-index: 3;\n  box-shadow: 0 0px 5px rgba(0,0,0,0.157), 0 0px 5px rgba(0,0,0,0.227);\n}\n.v-note-help-wrapper .v-note-help-content i {\n  font-size: 28px;\n  position: absolute;\n  right: 15px;\n  top: 8px;\n  color: rgba(0,0,0,0.7);\n  cursor: pointer;\n}\n.v-note-help-wrapper .v-note-help-content i:hover {\n  color: #000;\n}\n.v-note-help-wrapper .v-note-help-content .v-note-help-show {\n  width: 100%;\n  height: 100%;\n  font-size: 18px;\n  background: #fbfbfb;\n  overflow-y: auto;\n  padding: 2% 6%;\n}\n.v-note-help-wrapper .v-note-help-content .v-note-help-show.scroll-style::-webkit-scrollbar {\n  width: 6px;\n  background-color: #e5e5e5;\n}\n.v-note-help-wrapper .v-note-help-content .v-note-help-show.scroll-style::-webkit-scrollbar-thumb {\n  background-color: #b7b7b7;\n  border-radius: 3px;\n}\n.v-note-help-wrapper .v-note-help-content .v-note-help-show.scroll-style::-webkit-scrollbar-thumb:hover {\n  background-color: #a1a1a1;\n}\n.v-note-help-wrapper .v-note-help-content .v-note-help-show.scroll-style::-webkit-scrollbar-thumb:active {\n  background-color: #a1a1a1;\n}\n.v-note-help-wrapper .v-note-help-content .v-note-help-show.scroll-style::-webkit-scrollbar-track {\n  -webkit-box-shadow: 0 0 0px #808080 inset;\n}\n.v-note-img-wrapper {\n  position: fixed;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background: rgba(0,0,0,0.7);\n  z-index: 1600;\n  transition: all 0.1s linear 0s;\n}\n.v-note-img-wrapper.fade-enter-active,\n.v-note-img-wrapper.fade-leave-active {\n  opacity: 1;\n}\n.v-note-img-wrapper.fade-enter,\n.v-note-img-wrapper.fade-leave-active {\n  opacity: 0;\n}\n.v-note-img-wrapper img {\n  flex: 0 0 auto;\n  z-index: 3;\n}\n.v-note-img-wrapper i {\n  font-size: 28px;\n  position: absolute;\n  right: 15px;\n  top: 8px;\n  color: rgba(255,255,255,0.7);\n  cursor: pointer;\n}\n.v-note-img-wrapper i:hover {\n  color: #fff;\n}\n", ""])
            }, function (e, t, n) {
                (e.exports = n(13)(void 0)).push([e.i, "\n.auto-textarea-wrapper[data-v-7a63e4b3] {\n    height: 100%;\n}\n", ""])
            }, function (e, t) {
                e.exports = {
                    Aacute: "Á",
                    aacute: "á",
                    Abreve: "Ă",
                    abreve: "ă",
                    ac: "∾",
                    acd: "∿",
                    acE: "∾̳",
                    Acirc: "Â",
                    acirc: "â",
                    acute: "´",
                    Acy: "А",
                    acy: "а",
                    AElig: "Æ",
                    aelig: "æ",
                    af: "⁡",
                    Afr: "𝔄",
                    afr: "𝔞",
                    Agrave: "À",
                    agrave: "à",
                    alefsym: "ℵ",
                    aleph: "ℵ",
                    Alpha: "Α",
                    alpha: "α",
                    Amacr: "Ā",
                    amacr: "ā",
                    amalg: "⨿",
                    amp: "&",
                    AMP: "&",
                    andand: "⩕",
                    And: "⩓",
                    and: "∧",
                    andd: "⩜",
                    andslope: "⩘",
                    andv: "⩚",
                    ang: "∠",
                    ange: "⦤",
                    angle: "∠",
                    angmsdaa: "⦨",
                    angmsdab: "⦩",
                    angmsdac: "⦪",
                    angmsdad: "⦫",
                    angmsdae: "⦬",
                    angmsdaf: "⦭",
                    angmsdag: "⦮",
                    angmsdah: "⦯",
                    angmsd: "∡",
                    angrt: "∟",
                    angrtvb: "⊾",
                    angrtvbd: "⦝",
                    angsph: "∢",
                    angst: "Å",
                    angzarr: "⍼",
                    Aogon: "Ą",
                    aogon: "ą",
                    Aopf: "𝔸",
                    aopf: "𝕒",
                    apacir: "⩯",
                    ap: "≈",
                    apE: "⩰",
                    ape: "≊",
                    apid: "≋",
                    apos: "'",
                    ApplyFunction: "⁡",
                    approx: "≈",
                    approxeq: "≊",
                    Aring: "Å",
                    aring: "å",
                    Ascr: "𝒜",
                    ascr: "𝒶",
                    Assign: "≔",
                    ast: "*",
                    asymp: "≈",
                    asympeq: "≍",
                    Atilde: "Ã",
                    atilde: "ã",
                    Auml: "Ä",
                    auml: "ä",
                    awconint: "∳",
                    awint: "⨑",
                    backcong: "≌",
                    backepsilon: "϶",
                    backprime: "‵",
                    backsim: "∽",
                    backsimeq: "⋍",
                    Backslash: "∖",
                    Barv: "⫧",
                    barvee: "⊽",
                    barwed: "⌅",
                    Barwed: "⌆",
                    barwedge: "⌅",
                    bbrk: "⎵",
                    bbrktbrk: "⎶",
                    bcong: "≌",
                    Bcy: "Б",
                    bcy: "б",
                    bdquo: "„",
                    becaus: "∵",
                    because: "∵",
                    Because: "∵",
                    bemptyv: "⦰",
                    bepsi: "϶",
                    bernou: "ℬ",
                    Bernoullis: "ℬ",
                    Beta: "Β",
                    beta: "β",
                    beth: "ℶ",
                    between: "≬",
                    Bfr: "𝔅",
                    bfr: "𝔟",
                    bigcap: "⋂",
                    bigcirc: "◯",
                    bigcup: "⋃",
                    bigodot: "⨀",
                    bigoplus: "⨁",
                    bigotimes: "⨂",
                    bigsqcup: "⨆",
                    bigstar: "★",
                    bigtriangledown: "▽",
                    bigtriangleup: "△",
                    biguplus: "⨄",
                    bigvee: "⋁",
                    bigwedge: "⋀",
                    bkarow: "⤍",
                    blacklozenge: "⧫",
                    blacksquare: "▪",
                    blacktriangle: "▴",
                    blacktriangledown: "▾",
                    blacktriangleleft: "◂",
                    blacktriangleright: "▸",
                    blank: "␣",
                    blk12: "▒",
                    blk14: "░",
                    blk34: "▓",
                    block: "█",
                    bne: "=⃥",
                    bnequiv: "≡⃥",
                    bNot: "⫭",
                    bnot: "⌐",
                    Bopf: "𝔹",
                    bopf: "𝕓",
                    bot: "⊥",
                    bottom: "⊥",
                    bowtie: "⋈",
                    boxbox: "⧉",
                    boxdl: "┐",
                    boxdL: "╕",
                    boxDl: "╖",
                    boxDL: "╗",
                    boxdr: "┌",
                    boxdR: "╒",
                    boxDr: "╓",
                    boxDR: "╔",
                    boxh: "─",
                    boxH: "═",
                    boxhd: "┬",
                    boxHd: "╤",
                    boxhD: "╥",
                    boxHD: "╦",
                    boxhu: "┴",
                    boxHu: "╧",
                    boxhU: "╨",
                    boxHU: "╩",
                    boxminus: "⊟",
                    boxplus: "⊞",
                    boxtimes: "⊠",
                    boxul: "┘",
                    boxuL: "╛",
                    boxUl: "╜",
                    boxUL: "╝",
                    boxur: "└",
                    boxuR: "╘",
                    boxUr: "╙",
                    boxUR: "╚",
                    boxv: "│",
                    boxV: "║",
                    boxvh: "┼",
                    boxvH: "╪",
                    boxVh: "╫",
                    boxVH: "╬",
                    boxvl: "┤",
                    boxvL: "╡",
                    boxVl: "╢",
                    boxVL: "╣",
                    boxvr: "├",
                    boxvR: "╞",
                    boxVr: "╟",
                    boxVR: "╠",
                    bprime: "‵",
                    breve: "˘",
                    Breve: "˘",
                    brvbar: "¦",
                    bscr: "𝒷",
                    Bscr: "ℬ",
                    bsemi: "⁏",
                    bsim: "∽",
                    bsime: "⋍",
                    bsolb: "⧅",
                    bsol: "\\",
                    bsolhsub: "⟈",
                    bull: "•",
                    bullet: "•",
                    bump: "≎",
                    bumpE: "⪮",
                    bumpe: "≏",
                    Bumpeq: "≎",
                    bumpeq: "≏",
                    Cacute: "Ć",
                    cacute: "ć",
                    capand: "⩄",
                    capbrcup: "⩉",
                    capcap: "⩋",
                    cap: "∩",
                    Cap: "⋒",
                    capcup: "⩇",
                    capdot: "⩀",
                    CapitalDifferentialD: "ⅅ",
                    caps: "∩︀",
                    caret: "⁁",
                    caron: "ˇ",
                    Cayleys: "ℭ",
                    ccaps: "⩍",
                    Ccaron: "Č",
                    ccaron: "č",
                    Ccedil: "Ç",
                    ccedil: "ç",
                    Ccirc: "Ĉ",
                    ccirc: "ĉ",
                    Cconint: "∰",
                    ccups: "⩌",
                    ccupssm: "⩐",
                    Cdot: "Ċ",
                    cdot: "ċ",
                    cedil: "¸",
                    Cedilla: "¸",
                    cemptyv: "⦲",
                    cent: "¢",
                    centerdot: "·",
                    CenterDot: "·",
                    cfr: "𝔠",
                    Cfr: "ℭ",
                    CHcy: "Ч",
                    chcy: "ч",
                    check: "✓",
                    checkmark: "✓",
                    Chi: "Χ",
                    chi: "χ",
                    circ: "ˆ",
                    circeq: "≗",
                    circlearrowleft: "↺",
                    circlearrowright: "↻",
                    circledast: "⊛",
                    circledcirc: "⊚",
                    circleddash: "⊝",
                    CircleDot: "⊙",
                    circledR: "®",
                    circledS: "Ⓢ",
                    CircleMinus: "⊖",
                    CirclePlus: "⊕",
                    CircleTimes: "⊗",
                    cir: "○",
                    cirE: "⧃",
                    cire: "≗",
                    cirfnint: "⨐",
                    cirmid: "⫯",
                    cirscir: "⧂",
                    ClockwiseContourIntegral: "∲",
                    CloseCurlyDoubleQuote: "”",
                    CloseCurlyQuote: "’",
                    clubs: "♣",
                    clubsuit: "♣",
                    colon: ":",
                    Colon: "∷",
                    Colone: "⩴",
                    colone: "≔",
                    coloneq: "≔",
                    comma: ",",
                    commat: "@",
                    comp: "∁",
                    compfn: "∘",
                    complement: "∁",
                    complexes: "ℂ",
                    cong: "≅",
                    congdot: "⩭",
                    Congruent: "≡",
                    conint: "∮",
                    Conint: "∯",
                    ContourIntegral: "∮",
                    copf: "𝕔",
                    Copf: "ℂ",
                    coprod: "∐",
                    Coproduct: "∐",
                    copy: "©",
                    COPY: "©",
                    copysr: "℗",
                    CounterClockwiseContourIntegral: "∳",
                    crarr: "↵",
                    cross: "✗",
                    Cross: "⨯",
                    Cscr: "𝒞",
                    cscr: "𝒸",
                    csub: "⫏",
                    csube: "⫑",
                    csup: "⫐",
                    csupe: "⫒",
                    ctdot: "⋯",
                    cudarrl: "⤸",
                    cudarrr: "⤵",
                    cuepr: "⋞",
                    cuesc: "⋟",
                    cularr: "↶",
                    cularrp: "⤽",
                    cupbrcap: "⩈",
                    cupcap: "⩆",
                    CupCap: "≍",
                    cup: "∪",
                    Cup: "⋓",
                    cupcup: "⩊",
                    cupdot: "⊍",
                    cupor: "⩅",
                    cups: "∪︀",
                    curarr: "↷",
                    curarrm: "⤼",
                    curlyeqprec: "⋞",
                    curlyeqsucc: "⋟",
                    curlyvee: "⋎",
                    curlywedge: "⋏",
                    curren: "¤",
                    curvearrowleft: "↶",
                    curvearrowright: "↷",
                    cuvee: "⋎",
                    cuwed: "⋏",
                    cwconint: "∲",
                    cwint: "∱",
                    cylcty: "⌭",
                    dagger: "†",
                    Dagger: "‡",
                    daleth: "ℸ",
                    darr: "↓",
                    Darr: "↡",
                    dArr: "⇓",
                    dash: "‐",
                    Dashv: "⫤",
                    dashv: "⊣",
                    dbkarow: "⤏",
                    dblac: "˝",
                    Dcaron: "Ď",
                    dcaron: "ď",
                    Dcy: "Д",
                    dcy: "д",
                    ddagger: "‡",
                    ddarr: "⇊",
                    DD: "ⅅ",
                    dd: "ⅆ",
                    DDotrahd: "⤑",
                    ddotseq: "⩷",
                    deg: "°",
                    Del: "∇",
                    Delta: "Δ",
                    delta: "δ",
                    demptyv: "⦱",
                    dfisht: "⥿",
                    Dfr: "𝔇",
                    dfr: "𝔡",
                    dHar: "⥥",
                    dharl: "⇃",
                    dharr: "⇂",
                    DiacriticalAcute: "´",
                    DiacriticalDot: "˙",
                    DiacriticalDoubleAcute: "˝",
                    DiacriticalGrave: "`",
                    DiacriticalTilde: "˜",
                    diam: "⋄",
                    diamond: "⋄",
                    Diamond: "⋄",
                    diamondsuit: "♦",
                    diams: "♦",
                    die: "¨",
                    DifferentialD: "ⅆ",
                    digamma: "ϝ",
                    disin: "⋲",
                    div: "÷",
                    divide: "÷",
                    divideontimes: "⋇",
                    divonx: "⋇",
                    DJcy: "Ђ",
                    djcy: "ђ",
                    dlcorn: "⌞",
                    dlcrop: "⌍",
                    dollar: "$",
                    Dopf: "𝔻",
                    dopf: "𝕕",
                    Dot: "¨",
                    dot: "˙",
                    DotDot: "⃜",
                    doteq: "≐",
                    doteqdot: "≑",
                    DotEqual: "≐",
                    dotminus: "∸",
                    dotplus: "∔",
                    dotsquare: "⊡",
                    doublebarwedge: "⌆",
                    DoubleContourIntegral: "∯",
                    DoubleDot: "¨",
                    DoubleDownArrow: "⇓",
                    DoubleLeftArrow: "⇐",
                    DoubleLeftRightArrow: "⇔",
                    DoubleLeftTee: "⫤",
                    DoubleLongLeftArrow: "⟸",
                    DoubleLongLeftRightArrow: "⟺",
                    DoubleLongRightArrow: "⟹",
                    DoubleRightArrow: "⇒",
                    DoubleRightTee: "⊨",
                    DoubleUpArrow: "⇑",
                    DoubleUpDownArrow: "⇕",
                    DoubleVerticalBar: "∥",
                    DownArrowBar: "⤓",
                    downarrow: "↓",
                    DownArrow: "↓",
                    Downarrow: "⇓",
                    DownArrowUpArrow: "⇵",
                    DownBreve: "̑",
                    downdownarrows: "⇊",
                    downharpoonleft: "⇃",
                    downharpoonright: "⇂",
                    DownLeftRightVector: "⥐",
                    DownLeftTeeVector: "⥞",
                    DownLeftVectorBar: "⥖",
                    DownLeftVector: "↽",
                    DownRightTeeVector: "⥟",
                    DownRightVectorBar: "⥗",
                    DownRightVector: "⇁",
                    DownTeeArrow: "↧",
                    DownTee: "⊤",
                    drbkarow: "⤐",
                    drcorn: "⌟",
                    drcrop: "⌌",
                    Dscr: "𝒟",
                    dscr: "𝒹",
                    DScy: "Ѕ",
                    dscy: "ѕ",
                    dsol: "⧶",
                    Dstrok: "Đ",
                    dstrok: "đ",
                    dtdot: "⋱",
                    dtri: "▿",
                    dtrif: "▾",
                    duarr: "⇵",
                    duhar: "⥯",
                    dwangle: "⦦",
                    DZcy: "Џ",
                    dzcy: "џ",
                    dzigrarr: "⟿",
                    Eacute: "É",
                    eacute: "é",
                    easter: "⩮",
                    Ecaron: "Ě",
                    ecaron: "ě",
                    Ecirc: "Ê",
                    ecirc: "ê",
                    ecir: "≖",
                    ecolon: "≕",
                    Ecy: "Э",
                    ecy: "э",
                    eDDot: "⩷",
                    Edot: "Ė",
                    edot: "ė",
                    eDot: "≑",
                    ee: "ⅇ",
                    efDot: "≒",
                    Efr: "𝔈",
                    efr: "𝔢",
                    eg: "⪚",
                    Egrave: "È",
                    egrave: "è",
                    egs: "⪖",
                    egsdot: "⪘",
                    el: "⪙",
                    Element: "∈",
                    elinters: "⏧",
                    ell: "ℓ",
                    els: "⪕",
                    elsdot: "⪗",
                    Emacr: "Ē",
                    emacr: "ē",
                    empty: "∅",
                    emptyset: "∅",
                    EmptySmallSquare: "◻",
                    emptyv: "∅",
                    EmptyVerySmallSquare: "▫",
                    emsp13: " ",
                    emsp14: " ",
                    emsp: " ",
                    ENG: "Ŋ",
                    eng: "ŋ",
                    ensp: " ",
                    Eogon: "Ę",
                    eogon: "ę",
                    Eopf: "𝔼",
                    eopf: "𝕖",
                    epar: "⋕",
                    eparsl: "⧣",
                    eplus: "⩱",
                    epsi: "ε",
                    Epsilon: "Ε",
                    epsilon: "ε",
                    epsiv: "ϵ",
                    eqcirc: "≖",
                    eqcolon: "≕",
                    eqsim: "≂",
                    eqslantgtr: "⪖",
                    eqslantless: "⪕",
                    Equal: "⩵",
                    equals: "=",
                    EqualTilde: "≂",
                    equest: "≟",
                    Equilibrium: "⇌",
                    equiv: "≡",
                    equivDD: "⩸",
                    eqvparsl: "⧥",
                    erarr: "⥱",
                    erDot: "≓",
                    escr: "ℯ",
                    Escr: "ℰ",
                    esdot: "≐",
                    Esim: "⩳",
                    esim: "≂",
                    Eta: "Η",
                    eta: "η",
                    ETH: "Ð",
                    eth: "ð",
                    Euml: "Ë",
                    euml: "ë",
                    euro: "€",
                    excl: "!",
                    exist: "∃",
                    Exists: "∃",
                    expectation: "ℰ",
                    exponentiale: "ⅇ",
                    ExponentialE: "ⅇ",
                    fallingdotseq: "≒",
                    Fcy: "Ф",
                    fcy: "ф",
                    female: "♀",
                    ffilig: "ﬃ",
                    fflig: "ﬀ",
                    ffllig: "ﬄ",
                    Ffr: "𝔉",
                    ffr: "𝔣",
                    filig: "ﬁ",
                    FilledSmallSquare: "◼",
                    FilledVerySmallSquare: "▪",
                    fjlig: "fj",
                    flat: "♭",
                    fllig: "ﬂ",
                    fltns: "▱",
                    fnof: "ƒ",
                    Fopf: "𝔽",
                    fopf: "𝕗",
                    forall: "∀",
                    ForAll: "∀",
                    fork: "⋔",
                    forkv: "⫙",
                    Fouriertrf: "ℱ",
                    fpartint: "⨍",
                    frac12: "½",
                    frac13: "⅓",
                    frac14: "¼",
                    frac15: "⅕",
                    frac16: "⅙",
                    frac18: "⅛",
                    frac23: "⅔",
                    frac25: "⅖",
                    frac34: "¾",
                    frac35: "⅗",
                    frac38: "⅜",
                    frac45: "⅘",
                    frac56: "⅚",
                    frac58: "⅝",
                    frac78: "⅞",
                    frasl: "⁄",
                    frown: "⌢",
                    fscr: "𝒻",
                    Fscr: "ℱ",
                    gacute: "ǵ",
                    Gamma: "Γ",
                    gamma: "γ",
                    Gammad: "Ϝ",
                    gammad: "ϝ",
                    gap: "⪆",
                    Gbreve: "Ğ",
                    gbreve: "ğ",
                    Gcedil: "Ģ",
                    Gcirc: "Ĝ",
                    gcirc: "ĝ",
                    Gcy: "Г",
                    gcy: "г",
                    Gdot: "Ġ",
                    gdot: "ġ",
                    ge: "≥",
                    gE: "≧",
                    gEl: "⪌",
                    gel: "⋛",
                    geq: "≥",
                    geqq: "≧",
                    geqslant: "⩾",
                    gescc: "⪩",
                    ges: "⩾",
                    gesdot: "⪀",
                    gesdoto: "⪂",
                    gesdotol: "⪄",
                    gesl: "⋛︀",
                    gesles: "⪔",
                    Gfr: "𝔊",
                    gfr: "𝔤",
                    gg: "≫",
                    Gg: "⋙",
                    ggg: "⋙",
                    gimel: "ℷ",
                    GJcy: "Ѓ",
                    gjcy: "ѓ",
                    gla: "⪥",
                    gl: "≷",
                    glE: "⪒",
                    glj: "⪤",
                    gnap: "⪊",
                    gnapprox: "⪊",
                    gne: "⪈",
                    gnE: "≩",
                    gneq: "⪈",
                    gneqq: "≩",
                    gnsim: "⋧",
                    Gopf: "𝔾",
                    gopf: "𝕘",
                    grave: "`",
                    GreaterEqual: "≥",
                    GreaterEqualLess: "⋛",
                    GreaterFullEqual: "≧",
                    GreaterGreater: "⪢",
                    GreaterLess: "≷",
                    GreaterSlantEqual: "⩾",
                    GreaterTilde: "≳",
                    Gscr: "𝒢",
                    gscr: "ℊ",
                    gsim: "≳",
                    gsime: "⪎",
                    gsiml: "⪐",
                    gtcc: "⪧",
                    gtcir: "⩺",
                    gt: ">",
                    GT: ">",
                    Gt: "≫",
                    gtdot: "⋗",
                    gtlPar: "⦕",
                    gtquest: "⩼",
                    gtrapprox: "⪆",
                    gtrarr: "⥸",
                    gtrdot: "⋗",
                    gtreqless: "⋛",
                    gtreqqless: "⪌",
                    gtrless: "≷",
                    gtrsim: "≳",
                    gvertneqq: "≩︀",
                    gvnE: "≩︀",
                    Hacek: "ˇ",
                    hairsp: " ",
                    half: "½",
                    hamilt: "ℋ",
                    HARDcy: "Ъ",
                    hardcy: "ъ",
                    harrcir: "⥈",
                    harr: "↔",
                    hArr: "⇔",
                    harrw: "↭",
                    Hat: "^",
                    hbar: "ℏ",
                    Hcirc: "Ĥ",
                    hcirc: "ĥ",
                    hearts: "♥",
                    heartsuit: "♥",
                    hellip: "…",
                    hercon: "⊹",
                    hfr: "𝔥",
                    Hfr: "ℌ",
                    HilbertSpace: "ℋ",
                    hksearow: "⤥",
                    hkswarow: "⤦",
                    hoarr: "⇿",
                    homtht: "∻",
                    hookleftarrow: "↩",
                    hookrightarrow: "↪",
                    hopf: "𝕙",
                    Hopf: "ℍ",
                    horbar: "―",
                    HorizontalLine: "─",
                    hscr: "𝒽",
                    Hscr: "ℋ",
                    hslash: "ℏ",
                    Hstrok: "Ħ",
                    hstrok: "ħ",
                    HumpDownHump: "≎",
                    HumpEqual: "≏",
                    hybull: "⁃",
                    hyphen: "‐",
                    Iacute: "Í",
                    iacute: "í",
                    ic: "⁣",
                    Icirc: "Î",
                    icirc: "î",
                    Icy: "И",
                    icy: "и",
                    Idot: "İ",
                    IEcy: "Е",
                    iecy: "е",
                    iexcl: "¡",
                    iff: "⇔",
                    ifr: "𝔦",
                    Ifr: "ℑ",
                    Igrave: "Ì",
                    igrave: "ì",
                    ii: "ⅈ",
                    iiiint: "⨌",
                    iiint: "∭",
                    iinfin: "⧜",
                    iiota: "℩",
                    IJlig: "Ĳ",
                    ijlig: "ĳ",
                    Imacr: "Ī",
                    imacr: "ī",
                    image: "ℑ",
                    ImaginaryI: "ⅈ",
                    imagline: "ℐ",
                    imagpart: "ℑ",
                    imath: "ı",
                    Im: "ℑ",
                    imof: "⊷",
                    imped: "Ƶ",
                    Implies: "⇒",
                    incare: "℅",
                    in: "∈",
                    infin: "∞",
                    infintie: "⧝",
                    inodot: "ı",
                    intcal: "⊺",
                    int: "∫",
                    Int: "∬",
                    integers: "ℤ",
                    Integral: "∫",
                    intercal: "⊺",
                    Intersection: "⋂",
                    intlarhk: "⨗",
                    intprod: "⨼",
                    InvisibleComma: "⁣",
                    InvisibleTimes: "⁢",
                    IOcy: "Ё",
                    iocy: "ё",
                    Iogon: "Į",
                    iogon: "į",
                    Iopf: "𝕀",
                    iopf: "𝕚",
                    Iota: "Ι",
                    iota: "ι",
                    iprod: "⨼",
                    iquest: "¿",
                    iscr: "𝒾",
                    Iscr: "ℐ",
                    isin: "∈",
                    isindot: "⋵",
                    isinE: "⋹",
                    isins: "⋴",
                    isinsv: "⋳",
                    isinv: "∈",
                    it: "⁢",
                    Itilde: "Ĩ",
                    itilde: "ĩ",
                    Iukcy: "І",
                    iukcy: "і",
                    Iuml: "Ï",
                    iuml: "ï",
                    Jcirc: "Ĵ",
                    jcirc: "ĵ",
                    Jcy: "Й",
                    jcy: "й",
                    Jfr: "𝔍",
                    jfr: "𝔧",
                    jmath: "ȷ",
                    Jopf: "𝕁",
                    jopf: "𝕛",
                    Jscr: "𝒥",
                    jscr: "𝒿",
                    Jsercy: "Ј",
                    jsercy: "ј",
                    Jukcy: "Є",
                    jukcy: "є",
                    Kappa: "Κ",
                    kappa: "κ",
                    kappav: "ϰ",
                    Kcedil: "Ķ",
                    kcedil: "ķ",
                    Kcy: "К",
                    kcy: "к",
                    Kfr: "𝔎",
                    kfr: "𝔨",
                    kgreen: "ĸ",
                    KHcy: "Х",
                    khcy: "х",
                    KJcy: "Ќ",
                    kjcy: "ќ",
                    Kopf: "𝕂",
                    kopf: "𝕜",
                    Kscr: "𝒦",
                    kscr: "𝓀",
                    lAarr: "⇚",
                    Lacute: "Ĺ",
                    lacute: "ĺ",
                    laemptyv: "⦴",
                    lagran: "ℒ",
                    Lambda: "Λ",
                    lambda: "λ",
                    lang: "⟨",
                    Lang: "⟪",
                    langd: "⦑",
                    langle: "⟨",
                    lap: "⪅",
                    Laplacetrf: "ℒ",
                    laquo: "«",
                    larrb: "⇤",
                    larrbfs: "⤟",
                    larr: "←",
                    Larr: "↞",
                    lArr: "⇐",
                    larrfs: "⤝",
                    larrhk: "↩",
                    larrlp: "↫",
                    larrpl: "⤹",
                    larrsim: "⥳",
                    larrtl: "↢",
                    latail: "⤙",
                    lAtail: "⤛",
                    lat: "⪫",
                    late: "⪭",
                    lates: "⪭︀",
                    lbarr: "⤌",
                    lBarr: "⤎",
                    lbbrk: "❲",
                    lbrace: "{",
                    lbrack: "[",
                    lbrke: "⦋",
                    lbrksld: "⦏",
                    lbrkslu: "⦍",
                    Lcaron: "Ľ",
                    lcaron: "ľ",
                    Lcedil: "Ļ",
                    lcedil: "ļ",
                    lceil: "⌈",
                    lcub: "{",
                    Lcy: "Л",
                    lcy: "л",
                    ldca: "⤶",
                    ldquo: "“",
                    ldquor: "„",
                    ldrdhar: "⥧",
                    ldrushar: "⥋",
                    ldsh: "↲",
                    le: "≤",
                    lE: "≦",
                    LeftAngleBracket: "⟨",
                    LeftArrowBar: "⇤",
                    leftarrow: "←",
                    LeftArrow: "←",
                    Leftarrow: "⇐",
                    LeftArrowRightArrow: "⇆",
                    leftarrowtail: "↢",
                    LeftCeiling: "⌈",
                    LeftDoubleBracket: "⟦",
                    LeftDownTeeVector: "⥡",
                    LeftDownVectorBar: "⥙",
                    LeftDownVector: "⇃",
                    LeftFloor: "⌊",
                    leftharpoondown: "↽",
                    leftharpoonup: "↼",
                    leftleftarrows: "⇇",
                    leftrightarrow: "↔",
                    LeftRightArrow: "↔",
                    Leftrightarrow: "⇔",
                    leftrightarrows: "⇆",
                    leftrightharpoons: "⇋",
                    leftrightsquigarrow: "↭",
                    LeftRightVector: "⥎",
                    LeftTeeArrow: "↤",
                    LeftTee: "⊣",
                    LeftTeeVector: "⥚",
                    leftthreetimes: "⋋",
                    LeftTriangleBar: "⧏",
                    LeftTriangle: "⊲",
                    LeftTriangleEqual: "⊴",
                    LeftUpDownVector: "⥑",
                    LeftUpTeeVector: "⥠",
                    LeftUpVectorBar: "⥘",
                    LeftUpVector: "↿",
                    LeftVectorBar: "⥒",
                    LeftVector: "↼",
                    lEg: "⪋",
                    leg: "⋚",
                    leq: "≤",
                    leqq: "≦",
                    leqslant: "⩽",
                    lescc: "⪨",
                    les: "⩽",
                    lesdot: "⩿",
                    lesdoto: "⪁",
                    lesdotor: "⪃",
                    lesg: "⋚︀",
                    lesges: "⪓",
                    lessapprox: "⪅",
                    lessdot: "⋖",
                    lesseqgtr: "⋚",
                    lesseqqgtr: "⪋",
                    LessEqualGreater: "⋚",
                    LessFullEqual: "≦",
                    LessGreater: "≶",
                    lessgtr: "≶",
                    LessLess: "⪡",
                    lesssim: "≲",
                    LessSlantEqual: "⩽",
                    LessTilde: "≲",
                    lfisht: "⥼",
                    lfloor: "⌊",
                    Lfr: "𝔏",
                    lfr: "𝔩",
                    lg: "≶",
                    lgE: "⪑",
                    lHar: "⥢",
                    lhard: "↽",
                    lharu: "↼",
                    lharul: "⥪",
                    lhblk: "▄",
                    LJcy: "Љ",
                    ljcy: "љ",
                    llarr: "⇇",
                    ll: "≪",
                    Ll: "⋘",
                    llcorner: "⌞",
                    Lleftarrow: "⇚",
                    llhard: "⥫",
                    lltri: "◺",
                    Lmidot: "Ŀ",
                    lmidot: "ŀ",
                    lmoustache: "⎰",
                    lmoust: "⎰",
                    lnap: "⪉",
                    lnapprox: "⪉",
                    lne: "⪇",
                    lnE: "≨",
                    lneq: "⪇",
                    lneqq: "≨",
                    lnsim: "⋦",
                    loang: "⟬",
                    loarr: "⇽",
                    lobrk: "⟦",
                    longleftarrow: "⟵",
                    LongLeftArrow: "⟵",
                    Longleftarrow: "⟸",
                    longleftrightarrow: "⟷",
                    LongLeftRightArrow: "⟷",
                    Longleftrightarrow: "⟺",
                    longmapsto: "⟼",
                    longrightarrow: "⟶",
                    LongRightArrow: "⟶",
                    Longrightarrow: "⟹",
                    looparrowleft: "↫",
                    looparrowright: "↬",
                    lopar: "⦅",
                    Lopf: "𝕃",
                    lopf: "𝕝",
                    loplus: "⨭",
                    lotimes: "⨴",
                    lowast: "∗",
                    lowbar: "_",
                    LowerLeftArrow: "↙",
                    LowerRightArrow: "↘",
                    loz: "◊",
                    lozenge: "◊",
                    lozf: "⧫",
                    lpar: "(",
                    lparlt: "⦓",
                    lrarr: "⇆",
                    lrcorner: "⌟",
                    lrhar: "⇋",
                    lrhard: "⥭",
                    lrm: "‎",
                    lrtri: "⊿",
                    lsaquo: "‹",
                    lscr: "𝓁",
                    Lscr: "ℒ",
                    lsh: "↰",
                    Lsh: "↰",
                    lsim: "≲",
                    lsime: "⪍",
                    lsimg: "⪏",
                    lsqb: "[",
                    lsquo: "‘",
                    lsquor: "‚",
                    Lstrok: "Ł",
                    lstrok: "ł",
                    ltcc: "⪦",
                    ltcir: "⩹",
                    lt: "<",
                    LT: "<",
                    Lt: "≪",
                    ltdot: "⋖",
                    lthree: "⋋",
                    ltimes: "⋉",
                    ltlarr: "⥶",
                    ltquest: "⩻",
                    ltri: "◃",
                    ltrie: "⊴",
                    ltrif: "◂",
                    ltrPar: "⦖",
                    lurdshar: "⥊",
                    luruhar: "⥦",
                    lvertneqq: "≨︀",
                    lvnE: "≨︀",
                    macr: "¯",
                    male: "♂",
                    malt: "✠",
                    maltese: "✠",
                    Map: "⤅",
                    map: "↦",
                    mapsto: "↦",
                    mapstodown: "↧",
                    mapstoleft: "↤",
                    mapstoup: "↥",
                    marker: "▮",
                    mcomma: "⨩",
                    Mcy: "М",
                    mcy: "м",
                    mdash: "—",
                    mDDot: "∺",
                    measuredangle: "∡",
                    MediumSpace: " ",
                    Mellintrf: "ℳ",
                    Mfr: "𝔐",
                    mfr: "𝔪",
                    mho: "℧",
                    micro: "µ",
                    midast: "*",
                    midcir: "⫰",
                    mid: "∣",
                    middot: "·",
                    minusb: "⊟",
                    minus: "−",
                    minusd: "∸",
                    minusdu: "⨪",
                    MinusPlus: "∓",
                    mlcp: "⫛",
                    mldr: "…",
                    mnplus: "∓",
                    models: "⊧",
                    Mopf: "𝕄",
                    mopf: "𝕞",
                    mp: "∓",
                    mscr: "𝓂",
                    Mscr: "ℳ",
                    mstpos: "∾",
                    Mu: "Μ",
                    mu: "μ",
                    multimap: "⊸",
                    mumap: "⊸",
                    nabla: "∇",
                    Nacute: "Ń",
                    nacute: "ń",
                    nang: "∠⃒",
                    nap: "≉",
                    napE: "⩰̸",
                    napid: "≋̸",
                    napos: "ŉ",
                    napprox: "≉",
                    natural: "♮",
                    naturals: "ℕ",
                    natur: "♮",
                    nbsp: " ",
                    nbump: "≎̸",
                    nbumpe: "≏̸",
                    ncap: "⩃",
                    Ncaron: "Ň",
                    ncaron: "ň",
                    Ncedil: "Ņ",
                    ncedil: "ņ",
                    ncong: "≇",
                    ncongdot: "⩭̸",
                    ncup: "⩂",
                    Ncy: "Н",
                    ncy: "н",
                    ndash: "–",
                    nearhk: "⤤",
                    nearr: "↗",
                    neArr: "⇗",
                    nearrow: "↗",
                    ne: "≠",
                    nedot: "≐̸",
                    NegativeMediumSpace: "​",
                    NegativeThickSpace: "​",
                    NegativeThinSpace: "​",
                    NegativeVeryThinSpace: "​",
                    nequiv: "≢",
                    nesear: "⤨",
                    nesim: "≂̸",
                    NestedGreaterGreater: "≫",
                    NestedLessLess: "≪",
                    NewLine: "\n",
                    nexist: "∄",
                    nexists: "∄",
                    Nfr: "𝔑",
                    nfr: "𝔫",
                    ngE: "≧̸",
                    nge: "≱",
                    ngeq: "≱",
                    ngeqq: "≧̸",
                    ngeqslant: "⩾̸",
                    nges: "⩾̸",
                    nGg: "⋙̸",
                    ngsim: "≵",
                    nGt: "≫⃒",
                    ngt: "≯",
                    ngtr: "≯",
                    nGtv: "≫̸",
                    nharr: "↮",
                    nhArr: "⇎",
                    nhpar: "⫲",
                    ni: "∋",
                    nis: "⋼",
                    nisd: "⋺",
                    niv: "∋",
                    NJcy: "Њ",
                    njcy: "њ",
                    nlarr: "↚",
                    nlArr: "⇍",
                    nldr: "‥",
                    nlE: "≦̸",
                    nle: "≰",
                    nleftarrow: "↚",
                    nLeftarrow: "⇍",
                    nleftrightarrow: "↮",
                    nLeftrightarrow: "⇎",
                    nleq: "≰",
                    nleqq: "≦̸",
                    nleqslant: "⩽̸",
                    nles: "⩽̸",
                    nless: "≮",
                    nLl: "⋘̸",
                    nlsim: "≴",
                    nLt: "≪⃒",
                    nlt: "≮",
                    nltri: "⋪",
                    nltrie: "⋬",
                    nLtv: "≪̸",
                    nmid: "∤",
                    NoBreak: "⁠",
                    NonBreakingSpace: " ",
                    nopf: "𝕟",
                    Nopf: "ℕ",
                    Not: "⫬",
                    not: "¬",
                    NotCongruent: "≢",
                    NotCupCap: "≭",
                    NotDoubleVerticalBar: "∦",
                    NotElement: "∉",
                    NotEqual: "≠",
                    NotEqualTilde: "≂̸",
                    NotExists: "∄",
                    NotGreater: "≯",
                    NotGreaterEqual: "≱",
                    NotGreaterFullEqual: "≧̸",
                    NotGreaterGreater: "≫̸",
                    NotGreaterLess: "≹",
                    NotGreaterSlantEqual: "⩾̸",
                    NotGreaterTilde: "≵",
                    NotHumpDownHump: "≎̸",
                    NotHumpEqual: "≏̸",
                    notin: "∉",
                    notindot: "⋵̸",
                    notinE: "⋹̸",
                    notinva: "∉",
                    notinvb: "⋷",
                    notinvc: "⋶",
                    NotLeftTriangleBar: "⧏̸",
                    NotLeftTriangle: "⋪",
                    NotLeftTriangleEqual: "⋬",
                    NotLess: "≮",
                    NotLessEqual: "≰",
                    NotLessGreater: "≸",
                    NotLessLess: "≪̸",
                    NotLessSlantEqual: "⩽̸",
                    NotLessTilde: "≴",
                    NotNestedGreaterGreater: "⪢̸",
                    NotNestedLessLess: "⪡̸",
                    notni: "∌",
                    notniva: "∌",
                    notnivb: "⋾",
                    notnivc: "⋽",
                    NotPrecedes: "⊀",
                    NotPrecedesEqual: "⪯̸",
                    NotPrecedesSlantEqual: "⋠",
                    NotReverseElement: "∌",
                    NotRightTriangleBar: "⧐̸",
                    NotRightTriangle: "⋫",
                    NotRightTriangleEqual: "⋭",
                    NotSquareSubset: "⊏̸",
                    NotSquareSubsetEqual: "⋢",
                    NotSquareSuperset: "⊐̸",
                    NotSquareSupersetEqual: "⋣",
                    NotSubset: "⊂⃒",
                    NotSubsetEqual: "⊈",
                    NotSucceeds: "⊁",
                    NotSucceedsEqual: "⪰̸",
                    NotSucceedsSlantEqual: "⋡",
                    NotSucceedsTilde: "≿̸",
                    NotSuperset: "⊃⃒",
                    NotSupersetEqual: "⊉",
                    NotTilde: "≁",
                    NotTildeEqual: "≄",
                    NotTildeFullEqual: "≇",
                    NotTildeTilde: "≉",
                    NotVerticalBar: "∤",
                    nparallel: "∦",
                    npar: "∦",
                    nparsl: "⫽⃥",
                    npart: "∂̸",
                    npolint: "⨔",
                    npr: "⊀",
                    nprcue: "⋠",
                    nprec: "⊀",
                    npreceq: "⪯̸",
                    npre: "⪯̸",
                    nrarrc: "⤳̸",
                    nrarr: "↛",
                    nrArr: "⇏",
                    nrarrw: "↝̸",
                    nrightarrow: "↛",
                    nRightarrow: "⇏",
                    nrtri: "⋫",
                    nrtrie: "⋭",
                    nsc: "⊁",
                    nsccue: "⋡",
                    nsce: "⪰̸",
                    Nscr: "𝒩",
                    nscr: "𝓃",
                    nshortmid: "∤",
                    nshortparallel: "∦",
                    nsim: "≁",
                    nsime: "≄",
                    nsimeq: "≄",
                    nsmid: "∤",
                    nspar: "∦",
                    nsqsube: "⋢",
                    nsqsupe: "⋣",
                    nsub: "⊄",
                    nsubE: "⫅̸",
                    nsube: "⊈",
                    nsubset: "⊂⃒",
                    nsubseteq: "⊈",
                    nsubseteqq: "⫅̸",
                    nsucc: "⊁",
                    nsucceq: "⪰̸",
                    nsup: "⊅",
                    nsupE: "⫆̸",
                    nsupe: "⊉",
                    nsupset: "⊃⃒",
                    nsupseteq: "⊉",
                    nsupseteqq: "⫆̸",
                    ntgl: "≹",
                    Ntilde: "Ñ",
                    ntilde: "ñ",
                    ntlg: "≸",
                    ntriangleleft: "⋪",
                    ntrianglelefteq: "⋬",
                    ntriangleright: "⋫",
                    ntrianglerighteq: "⋭",
                    Nu: "Ν",
                    nu: "ν",
                    num: "#",
                    numero: "№",
                    numsp: " ",
                    nvap: "≍⃒",
                    nvdash: "⊬",
                    nvDash: "⊭",
                    nVdash: "⊮",
                    nVDash: "⊯",
                    nvge: "≥⃒",
                    nvgt: ">⃒",
                    nvHarr: "⤄",
                    nvinfin: "⧞",
                    nvlArr: "⤂",
                    nvle: "≤⃒",
                    nvlt: "<⃒",
                    nvltrie: "⊴⃒",
                    nvrArr: "⤃",
                    nvrtrie: "⊵⃒",
                    nvsim: "∼⃒",
                    nwarhk: "⤣",
                    nwarr: "↖",
                    nwArr: "⇖",
                    nwarrow: "↖",
                    nwnear: "⤧",
                    Oacute: "Ó",
                    oacute: "ó",
                    oast: "⊛",
                    Ocirc: "Ô",
                    ocirc: "ô",
                    ocir: "⊚",
                    Ocy: "О",
                    ocy: "о",
                    odash: "⊝",
                    Odblac: "Ő",
                    odblac: "ő",
                    odiv: "⨸",
                    odot: "⊙",
                    odsold: "⦼",
                    OElig: "Œ",
                    oelig: "œ",
                    ofcir: "⦿",
                    Ofr: "𝔒",
                    ofr: "𝔬",
                    ogon: "˛",
                    Ograve: "Ò",
                    ograve: "ò",
                    ogt: "⧁",
                    ohbar: "⦵",
                    ohm: "Ω",
                    oint: "∮",
                    olarr: "↺",
                    olcir: "⦾",
                    olcross: "⦻",
                    oline: "‾",
                    olt: "⧀",
                    Omacr: "Ō",
                    omacr: "ō",
                    Omega: "Ω",
                    omega: "ω",
                    Omicron: "Ο",
                    omicron: "ο",
                    omid: "⦶",
                    ominus: "⊖",
                    Oopf: "𝕆",
                    oopf: "𝕠",
                    opar: "⦷",
                    OpenCurlyDoubleQuote: "“",
                    OpenCurlyQuote: "‘",
                    operp: "⦹",
                    oplus: "⊕",
                    orarr: "↻",
                    Or: "⩔",
                    or: "∨",
                    ord: "⩝",
                    order: "ℴ",
                    orderof: "ℴ",
                    ordf: "ª",
                    ordm: "º",
                    origof: "⊶",
                    oror: "⩖",
                    orslope: "⩗",
                    orv: "⩛",
                    oS: "Ⓢ",
                    Oscr: "𝒪",
                    oscr: "ℴ",
                    Oslash: "Ø",
                    oslash: "ø",
                    osol: "⊘",
                    Otilde: "Õ",
                    otilde: "õ",
                    otimesas: "⨶",
                    Otimes: "⨷",
                    otimes: "⊗",
                    Ouml: "Ö",
                    ouml: "ö",
                    ovbar: "⌽",
                    OverBar: "‾",
                    OverBrace: "⏞",
                    OverBracket: "⎴",
                    OverParenthesis: "⏜",
                    para: "¶",
                    parallel: "∥",
                    par: "∥",
                    parsim: "⫳",
                    parsl: "⫽",
                    part: "∂",
                    PartialD: "∂",
                    Pcy: "П",
                    pcy: "п",
                    percnt: "%",
                    period: ".",
                    permil: "‰",
                    perp: "⊥",
                    pertenk: "‱",
                    Pfr: "𝔓",
                    pfr: "𝔭",
                    Phi: "Φ",
                    phi: "φ",
                    phiv: "ϕ",
                    phmmat: "ℳ",
                    phone: "☎",
                    Pi: "Π",
                    pi: "π",
                    pitchfork: "⋔",
                    piv: "ϖ",
                    planck: "ℏ",
                    planckh: "ℎ",
                    plankv: "ℏ",
                    plusacir: "⨣",
                    plusb: "⊞",
                    pluscir: "⨢",
                    plus: "+",
                    plusdo: "∔",
                    plusdu: "⨥",
                    pluse: "⩲",
                    PlusMinus: "±",
                    plusmn: "±",
                    plussim: "⨦",
                    plustwo: "⨧",
                    pm: "±",
                    Poincareplane: "ℌ",
                    pointint: "⨕",
                    popf: "𝕡",
                    Popf: "ℙ",
                    pound: "£",
                    prap: "⪷",
                    Pr: "⪻",
                    pr: "≺",
                    prcue: "≼",
                    precapprox: "⪷",
                    prec: "≺",
                    preccurlyeq: "≼",
                    Precedes: "≺",
                    PrecedesEqual: "⪯",
                    PrecedesSlantEqual: "≼",
                    PrecedesTilde: "≾",
                    preceq: "⪯",
                    precnapprox: "⪹",
                    precneqq: "⪵",
                    precnsim: "⋨",
                    pre: "⪯",
                    prE: "⪳",
                    precsim: "≾",
                    prime: "′",
                    Prime: "″",
                    primes: "ℙ",
                    prnap: "⪹",
                    prnE: "⪵",
                    prnsim: "⋨",
                    prod: "∏",
                    Product: "∏",
                    profalar: "⌮",
                    profline: "⌒",
                    profsurf: "⌓",
                    prop: "∝",
                    Proportional: "∝",
                    Proportion: "∷",
                    propto: "∝",
                    prsim: "≾",
                    prurel: "⊰",
                    Pscr: "𝒫",
                    pscr: "𝓅",
                    Psi: "Ψ",
                    psi: "ψ",
                    puncsp: " ",
                    Qfr: "𝔔",
                    qfr: "𝔮",
                    qint: "⨌",
                    qopf: "𝕢",
                    Qopf: "ℚ",
                    qprime: "⁗",
                    Qscr: "𝒬",
                    qscr: "𝓆",
                    quaternions: "ℍ",
                    quatint: "⨖",
                    quest: "?",
                    questeq: "≟",
                    quot: '"',
                    QUOT: '"',
                    rAarr: "⇛",
                    race: "∽̱",
                    Racute: "Ŕ",
                    racute: "ŕ",
                    radic: "√",
                    raemptyv: "⦳",
                    rang: "⟩",
                    Rang: "⟫",
                    rangd: "⦒",
                    range: "⦥",
                    rangle: "⟩",
                    raquo: "»",
                    rarrap: "⥵",
                    rarrb: "⇥",
                    rarrbfs: "⤠",
                    rarrc: "⤳",
                    rarr: "→",
                    Rarr: "↠",
                    rArr: "⇒",
                    rarrfs: "⤞",
                    rarrhk: "↪",
                    rarrlp: "↬",
                    rarrpl: "⥅",
                    rarrsim: "⥴",
                    Rarrtl: "⤖",
                    rarrtl: "↣",
                    rarrw: "↝",
                    ratail: "⤚",
                    rAtail: "⤜",
                    ratio: "∶",
                    rationals: "ℚ",
                    rbarr: "⤍",
                    rBarr: "⤏",
                    RBarr: "⤐",
                    rbbrk: "❳",
                    rbrace: "}",
                    rbrack: "]",
                    rbrke: "⦌",
                    rbrksld: "⦎",
                    rbrkslu: "⦐",
                    Rcaron: "Ř",
                    rcaron: "ř",
                    Rcedil: "Ŗ",
                    rcedil: "ŗ",
                    rceil: "⌉",
                    rcub: "}",
                    Rcy: "Р",
                    rcy: "р",
                    rdca: "⤷",
                    rdldhar: "⥩",
                    rdquo: "”",
                    rdquor: "”",
                    rdsh: "↳",
                    real: "ℜ",
                    realine: "ℛ",
                    realpart: "ℜ",
                    reals: "ℝ",
                    Re: "ℜ",
                    rect: "▭",
                    reg: "®",
                    REG: "®",
                    ReverseElement: "∋",
                    ReverseEquilibrium: "⇋",
                    ReverseUpEquilibrium: "⥯",
                    rfisht: "⥽",
                    rfloor: "⌋",
                    rfr: "𝔯",
                    Rfr: "ℜ",
                    rHar: "⥤",
                    rhard: "⇁",
                    rharu: "⇀",
                    rharul: "⥬",
                    Rho: "Ρ",
                    rho: "ρ",
                    rhov: "ϱ",
                    RightAngleBracket: "⟩",
                    RightArrowBar: "⇥",
                    rightarrow: "→",
                    RightArrow: "→",
                    Rightarrow: "⇒",
                    RightArrowLeftArrow: "⇄",
                    rightarrowtail: "↣",
                    RightCeiling: "⌉",
                    RightDoubleBracket: "⟧",
                    RightDownTeeVector: "⥝",
                    RightDownVectorBar: "⥕",
                    RightDownVector: "⇂",
                    RightFloor: "⌋",
                    rightharpoondown: "⇁",
                    rightharpoonup: "⇀",
                    rightleftarrows: "⇄",
                    rightleftharpoons: "⇌",
                    rightrightarrows: "⇉",
                    rightsquigarrow: "↝",
                    RightTeeArrow: "↦",
                    RightTee: "⊢",
                    RightTeeVector: "⥛",
                    rightthreetimes: "⋌",
                    RightTriangleBar: "⧐",
                    RightTriangle: "⊳",
                    RightTriangleEqual: "⊵",
                    RightUpDownVector: "⥏",
                    RightUpTeeVector: "⥜",
                    RightUpVectorBar: "⥔",
                    RightUpVector: "↾",
                    RightVectorBar: "⥓",
                    RightVector: "⇀",
                    ring: "˚",
                    risingdotseq: "≓",
                    rlarr: "⇄",
                    rlhar: "⇌",
                    rlm: "‏",
                    rmoustache: "⎱",
                    rmoust: "⎱",
                    rnmid: "⫮",
                    roang: "⟭",
                    roarr: "⇾",
                    robrk: "⟧",
                    ropar: "⦆",
                    ropf: "𝕣",
                    Ropf: "ℝ",
                    roplus: "⨮",
                    rotimes: "⨵",
                    RoundImplies: "⥰",
                    rpar: ")",
                    rpargt: "⦔",
                    rppolint: "⨒",
                    rrarr: "⇉",
                    Rrightarrow: "⇛",
                    rsaquo: "›",
                    rscr: "𝓇",
                    Rscr: "ℛ",
                    rsh: "↱",
                    Rsh: "↱",
                    rsqb: "]",
                    rsquo: "’",
                    rsquor: "’",
                    rthree: "⋌",
                    rtimes: "⋊",
                    rtri: "▹",
                    rtrie: "⊵",
                    rtrif: "▸",
                    rtriltri: "⧎",
                    RuleDelayed: "⧴",
                    ruluhar: "⥨",
                    rx: "℞",
                    Sacute: "Ś",
                    sacute: "ś",
                    sbquo: "‚",
                    scap: "⪸",
                    Scaron: "Š",
                    scaron: "š",
                    Sc: "⪼",
                    sc: "≻",
                    sccue: "≽",
                    sce: "⪰",
                    scE: "⪴",
                    Scedil: "Ş",
                    scedil: "ş",
                    Scirc: "Ŝ",
                    scirc: "ŝ",
                    scnap: "⪺",
                    scnE: "⪶",
                    scnsim: "⋩",
                    scpolint: "⨓",
                    scsim: "≿",
                    Scy: "С",
                    scy: "с",
                    sdotb: "⊡",
                    sdot: "⋅",
                    sdote: "⩦",
                    searhk: "⤥",
                    searr: "↘",
                    seArr: "⇘",
                    searrow: "↘",
                    sect: "§",
                    semi: ";",
                    seswar: "⤩",
                    setminus: "∖",
                    setmn: "∖",
                    sext: "✶",
                    Sfr: "𝔖",
                    sfr: "𝔰",
                    sfrown: "⌢",
                    sharp: "♯",
                    SHCHcy: "Щ",
                    shchcy: "щ",
                    SHcy: "Ш",
                    shcy: "ш",
                    ShortDownArrow: "↓",
                    ShortLeftArrow: "←",
                    shortmid: "∣",
                    shortparallel: "∥",
                    ShortRightArrow: "→",
                    ShortUpArrow: "↑",
                    shy: "­",
                    Sigma: "Σ",
                    sigma: "σ",
                    sigmaf: "ς",
                    sigmav: "ς",
                    sim: "∼",
                    simdot: "⩪",
                    sime: "≃",
                    simeq: "≃",
                    simg: "⪞",
                    simgE: "⪠",
                    siml: "⪝",
                    simlE: "⪟",
                    simne: "≆",
                    simplus: "⨤",
                    simrarr: "⥲",
                    slarr: "←",
                    SmallCircle: "∘",
                    smallsetminus: "∖",
                    smashp: "⨳",
                    smeparsl: "⧤",
                    smid: "∣",
                    smile: "⌣",
                    smt: "⪪",
                    smte: "⪬",
                    smtes: "⪬︀",
                    SOFTcy: "Ь",
                    softcy: "ь",
                    solbar: "⌿",
                    solb: "⧄",
                    sol: "/",
                    Sopf: "𝕊",
                    sopf: "𝕤",
                    spades: "♠",
                    spadesuit: "♠",
                    spar: "∥",
                    sqcap: "⊓",
                    sqcaps: "⊓︀",
                    sqcup: "⊔",
                    sqcups: "⊔︀",
                    Sqrt: "√",
                    sqsub: "⊏",
                    sqsube: "⊑",
                    sqsubset: "⊏",
                    sqsubseteq: "⊑",
                    sqsup: "⊐",
                    sqsupe: "⊒",
                    sqsupset: "⊐",
                    sqsupseteq: "⊒",
                    square: "□",
                    Square: "□",
                    SquareIntersection: "⊓",
                    SquareSubset: "⊏",
                    SquareSubsetEqual: "⊑",
                    SquareSuperset: "⊐",
                    SquareSupersetEqual: "⊒",
                    SquareUnion: "⊔",
                    squarf: "▪",
                    squ: "□",
                    squf: "▪",
                    srarr: "→",
                    Sscr: "𝒮",
                    sscr: "𝓈",
                    ssetmn: "∖",
                    ssmile: "⌣",
                    sstarf: "⋆",
                    Star: "⋆",
                    star: "☆",
                    starf: "★",
                    straightepsilon: "ϵ",
                    straightphi: "ϕ",
                    strns: "¯",
                    sub: "⊂",
                    Sub: "⋐",
                    subdot: "⪽",
                    subE: "⫅",
                    sube: "⊆",
                    subedot: "⫃",
                    submult: "⫁",
                    subnE: "⫋",
                    subne: "⊊",
                    subplus: "⪿",
                    subrarr: "⥹",
                    subset: "⊂",
                    Subset: "⋐",
                    subseteq: "⊆",
                    subseteqq: "⫅",
                    SubsetEqual: "⊆",
                    subsetneq: "⊊",
                    subsetneqq: "⫋",
                    subsim: "⫇",
                    subsub: "⫕",
                    subsup: "⫓",
                    succapprox: "⪸",
                    succ: "≻",
                    succcurlyeq: "≽",
                    Succeeds: "≻",
                    SucceedsEqual: "⪰",
                    SucceedsSlantEqual: "≽",
                    SucceedsTilde: "≿",
                    succeq: "⪰",
                    succnapprox: "⪺",
                    succneqq: "⪶",
                    succnsim: "⋩",
                    succsim: "≿",
                    SuchThat: "∋",
                    sum: "∑",
                    Sum: "∑",
                    sung: "♪",
                    sup1: "¹",
                    sup2: "²",
                    sup3: "³",
                    sup: "⊃",
                    Sup: "⋑",
                    supdot: "⪾",
                    supdsub: "⫘",
                    supE: "⫆",
                    supe: "⊇",
                    supedot: "⫄",
                    Superset: "⊃",
                    SupersetEqual: "⊇",
                    suphsol: "⟉",
                    suphsub: "⫗",
                    suplarr: "⥻",
                    supmult: "⫂",
                    supnE: "⫌",
                    supne: "⊋",
                    supplus: "⫀",
                    supset: "⊃",
                    Supset: "⋑",
                    supseteq: "⊇",
                    supseteqq: "⫆",
                    supsetneq: "⊋",
                    supsetneqq: "⫌",
                    supsim: "⫈",
                    supsub: "⫔",
                    supsup: "⫖",
                    swarhk: "⤦",
                    swarr: "↙",
                    swArr: "⇙",
                    swarrow: "↙",
                    swnwar: "⤪",
                    szlig: "ß",
                    Tab: "\t",
                    target: "⌖",
                    Tau: "Τ",
                    tau: "τ",
                    tbrk: "⎴",
                    Tcaron: "Ť",
                    tcaron: "ť",
                    Tcedil: "Ţ",
                    tcedil: "ţ",
                    Tcy: "Т",
                    tcy: "т",
                    tdot: "⃛",
                    telrec: "⌕",
                    Tfr: "𝔗",
                    tfr: "𝔱",
                    there4: "∴",
                    therefore: "∴",
                    Therefore: "∴",
                    Theta: "Θ",
                    theta: "θ",
                    thetasym: "ϑ",
                    thetav: "ϑ",
                    thickapprox: "≈",
                    thicksim: "∼",
                    ThickSpace: "  ",
                    ThinSpace: " ",
                    thinsp: " ",
                    thkap: "≈",
                    thksim: "∼",
                    THORN: "Þ",
                    thorn: "þ",
                    tilde: "˜",
                    Tilde: "∼",
                    TildeEqual: "≃",
                    TildeFullEqual: "≅",
                    TildeTilde: "≈",
                    timesbar: "⨱",
                    timesb: "⊠",
                    times: "×",
                    timesd: "⨰",
                    tint: "∭",
                    toea: "⤨",
                    topbot: "⌶",
                    topcir: "⫱",
                    top: "⊤",
                    Topf: "𝕋",
                    topf: "𝕥",
                    topfork: "⫚",
                    tosa: "⤩",
                    tprime: "‴",
                    trade: "™",
                    TRADE: "™",
                    triangle: "▵",
                    triangledown: "▿",
                    triangleleft: "◃",
                    trianglelefteq: "⊴",
                    triangleq: "≜",
                    triangleright: "▹",
                    trianglerighteq: "⊵",
                    tridot: "◬",
                    trie: "≜",
                    triminus: "⨺",
                    TripleDot: "⃛",
                    triplus: "⨹",
                    trisb: "⧍",
                    tritime: "⨻",
                    trpezium: "⏢",
                    Tscr: "𝒯",
                    tscr: "𝓉",
                    TScy: "Ц",
                    tscy: "ц",
                    TSHcy: "Ћ",
                    tshcy: "ћ",
                    Tstrok: "Ŧ",
                    tstrok: "ŧ",
                    twixt: "≬",
                    twoheadleftarrow: "↞",
                    twoheadrightarrow: "↠",
                    Uacute: "Ú",
                    uacute: "ú",
                    uarr: "↑",
                    Uarr: "↟",
                    uArr: "⇑",
                    Uarrocir: "⥉",
                    Ubrcy: "Ў",
                    ubrcy: "ў",
                    Ubreve: "Ŭ",
                    ubreve: "ŭ",
                    Ucirc: "Û",
                    ucirc: "û",
                    Ucy: "У",
                    ucy: "у",
                    udarr: "⇅",
                    Udblac: "Ű",
                    udblac: "ű",
                    udhar: "⥮",
                    ufisht: "⥾",
                    Ufr: "𝔘",
                    ufr: "𝔲",
                    Ugrave: "Ù",
                    ugrave: "ù",
                    uHar: "⥣",
                    uharl: "↿",
                    uharr: "↾",
                    uhblk: "▀",
                    ulcorn: "⌜",
                    ulcorner: "⌜",
                    ulcrop: "⌏",
                    ultri: "◸",
                    Umacr: "Ū",
                    umacr: "ū",
                    uml: "¨",
                    UnderBar: "_",
                    UnderBrace: "⏟",
                    UnderBracket: "⎵",
                    UnderParenthesis: "⏝",
                    Union: "⋃",
                    UnionPlus: "⊎",
                    Uogon: "Ų",
                    uogon: "ų",
                    Uopf: "𝕌",
                    uopf: "𝕦",
                    UpArrowBar: "⤒",
                    uparrow: "↑",
                    UpArrow: "↑",
                    Uparrow: "⇑",
                    UpArrowDownArrow: "⇅",
                    updownarrow: "↕",
                    UpDownArrow: "↕",
                    Updownarrow: "⇕",
                    UpEquilibrium: "⥮",
                    upharpoonleft: "↿",
                    upharpoonright: "↾",
                    uplus: "⊎",
                    UpperLeftArrow: "↖",
                    UpperRightArrow: "↗",
                    upsi: "υ",
                    Upsi: "ϒ",
                    upsih: "ϒ",
                    Upsilon: "Υ",
                    upsilon: "υ",
                    UpTeeArrow: "↥",
                    UpTee: "⊥",
                    upuparrows: "⇈",
                    urcorn: "⌝",
                    urcorner: "⌝",
                    urcrop: "⌎",
                    Uring: "Ů",
                    uring: "ů",
                    urtri: "◹",
                    Uscr: "𝒰",
                    uscr: "𝓊",
                    utdot: "⋰",
                    Utilde: "Ũ",
                    utilde: "ũ",
                    utri: "▵",
                    utrif: "▴",
                    uuarr: "⇈",
                    Uuml: "Ü",
                    uuml: "ü",
                    uwangle: "⦧",
                    vangrt: "⦜",
                    varepsilon: "ϵ",
                    varkappa: "ϰ",
                    varnothing: "∅",
                    varphi: "ϕ",
                    varpi: "ϖ",
                    varpropto: "∝",
                    varr: "↕",
                    vArr: "⇕",
                    varrho: "ϱ",
                    varsigma: "ς",
                    varsubsetneq: "⊊︀",
                    varsubsetneqq: "⫋︀",
                    varsupsetneq: "⊋︀",
                    varsupsetneqq: "⫌︀",
                    vartheta: "ϑ",
                    vartriangleleft: "⊲",
                    vartriangleright: "⊳",
                    vBar: "⫨",
                    Vbar: "⫫",
                    vBarv: "⫩",
                    Vcy: "В",
                    vcy: "в",
                    vdash: "⊢",
                    vDash: "⊨",
                    Vdash: "⊩",
                    VDash: "⊫",
                    Vdashl: "⫦",
                    veebar: "⊻",
                    vee: "∨",
                    Vee: "⋁",
                    veeeq: "≚",
                    vellip: "⋮",
                    verbar: "|",
                    Verbar: "‖",
                    vert: "|",
                    Vert: "‖",
                    VerticalBar: "∣",
                    VerticalLine: "|",
                    VerticalSeparator: "❘",
                    VerticalTilde: "≀",
                    VeryThinSpace: " ",
                    Vfr: "𝔙",
                    vfr: "𝔳",
                    vltri: "⊲",
                    vnsub: "⊂⃒",
                    vnsup: "⊃⃒",
                    Vopf: "𝕍",
                    vopf: "𝕧",
                    vprop: "∝",
                    vrtri: "⊳",
                    Vscr: "𝒱",
                    vscr: "𝓋",
                    vsubnE: "⫋︀",
                    vsubne: "⊊︀",
                    vsupnE: "⫌︀",
                    vsupne: "⊋︀",
                    Vvdash: "⊪",
                    vzigzag: "⦚",
                    Wcirc: "Ŵ",
                    wcirc: "ŵ",
                    wedbar: "⩟",
                    wedge: "∧",
                    Wedge: "⋀",
                    wedgeq: "≙",
                    weierp: "℘",
                    Wfr: "𝔚",
                    wfr: "𝔴",
                    Wopf: "𝕎",
                    wopf: "𝕨",
                    wp: "℘",
                    wr: "≀",
                    wreath: "≀",
                    Wscr: "𝒲",
                    wscr: "𝓌",
                    xcap: "⋂",
                    xcirc: "◯",
                    xcup: "⋃",
                    xdtri: "▽",
                    Xfr: "𝔛",
                    xfr: "𝔵",
                    xharr: "⟷",
                    xhArr: "⟺",
                    Xi: "Ξ",
                    xi: "ξ",
                    xlarr: "⟵",
                    xlArr: "⟸",
                    xmap: "⟼",
                    xnis: "⋻",
                    xodot: "⨀",
                    Xopf: "𝕏",
                    xopf: "𝕩",
                    xoplus: "⨁",
                    xotime: "⨂",
                    xrarr: "⟶",
                    xrArr: "⟹",
                    Xscr: "𝒳",
                    xscr: "𝓍",
                    xsqcup: "⨆",
                    xuplus: "⨄",
                    xutri: "△",
                    xvee: "⋁",
                    xwedge: "⋀",
                    Yacute: "Ý",
                    yacute: "ý",
                    YAcy: "Я",
                    yacy: "я",
                    Ycirc: "Ŷ",
                    ycirc: "ŷ",
                    Ycy: "Ы",
                    ycy: "ы",
                    yen: "¥",
                    Yfr: "𝔜",
                    yfr: "𝔶",
                    YIcy: "Ї",
                    yicy: "ї",
                    Yopf: "𝕐",
                    yopf: "𝕪",
                    Yscr: "𝒴",
                    yscr: "𝓎",
                    YUcy: "Ю",
                    yucy: "ю",
                    yuml: "ÿ",
                    Yuml: "Ÿ",
                    Zacute: "Ź",
                    zacute: "ź",
                    Zcaron: "Ž",
                    zcaron: "ž",
                    Zcy: "З",
                    zcy: "з",
                    Zdot: "Ż",
                    zdot: "ż",
                    zeetrf: "ℨ",
                    ZeroWidthSpace: "​",
                    Zeta: "Ζ",
                    zeta: "ζ",
                    zfr: "𝔷",
                    Zfr: "ℨ",
                    ZHcy: "Ж",
                    zhcy: "ж",
                    zigrarr: "⇝",
                    zopf: "𝕫",
                    Zopf: "ℤ",
                    Zscr: "𝒵",
                    zscr: "𝓏",
                    zwj: "‍",
                    zwnj: "‌"
                }
            }, function (e, t) {
            }, function (e, t) {
            }, function (e, t, n) {
                "use strict";
                function r(e) {
                    return Array.prototype.slice.call(arguments, 1).forEach(function (t) {
                        t && Object.keys(t).forEach(function (n) {
                            e[n] = t[n]
                        })
                    }), e
                }

                function o(e) {
                    return Object.prototype.toString.call(e)
                }

                function i(e) {
                    return "[object Function]" === o(e)
                }

                function a(e) {
                    return e.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&")
                }

                function s(e) {
                    function t(e) {
                        return e.replace("%TLDS%", s.src_tlds)
                    }

                    function r(e, t) {
                        throw new Error('(LinkifyIt) Invalid schema "' + e + '": ' + t)
                    }

                    var s = e.re = n(107)(e.__opts__), l = e.__tlds__.slice();
                    e.onCompile(), e.__tlds_replaced__ || l.push(_), l.push(s.src_xn), s.src_tlds = l.join("|"), s.email_fuzzy = RegExp(t(s.tpl_email_fuzzy), "i"), s.link_fuzzy = RegExp(t(s.tpl_link_fuzzy), "i"), s.link_no_ip_fuzzy = RegExp(t(s.tpl_link_no_ip_fuzzy), "i"), s.host_fuzzy_test = RegExp(t(s.tpl_host_fuzzy_test), "i");
                    var c = [];
                    e.__compiled__ = {}, Object.keys(e.__schemas__).forEach(function (t) {
                        var n = e.__schemas__[t];
                        if (null !== n) {
                            var a = {validate: null, link: null};
                            return e.__compiled__[t] = a, function (e) {
                                return "[object Object]" === o(e)
                            }(n) ? (function (e) {
                                return "[object RegExp]" === o(e)
                            }(n.validate) ? a.validate = function (e) {
                                return function (t, n) {
                                    var r = t.slice(n);
                                    return e.test(r) ? r.match(e)[0].length : 0
                                }
                            }(n.validate) : i(n.validate) ? a.validate = n.validate : r(t, n), void(i(n.normalize) ? a.normalize = n.normalize : n.normalize ? r(t, n) : a.normalize = function (e, t) {
                                t.normalize(e)
                            })) : function (e) {
                                return "[object String]" === o(e)
                            }(n) ? void c.push(t) : void r(t, n)
                        }
                    }), c.forEach(function (t) {
                        e.__compiled__[e.__schemas__[t]] && (e.__compiled__[t].validate = e.__compiled__[e.__schemas__[t]].validate, e.__compiled__[t].normalize = e.__compiled__[e.__schemas__[t]].normalize)
                    }), e.__compiled__[""] = {
                        validate: null, normalize: function (e, t) {
                            t.normalize(e)
                        }
                    };
                    var u = Object.keys(e.__compiled__).filter(function (t) {
                        return t.length > 0 && e.__compiled__[t]
                    }).map(a).join("|");
                    e.re.schema_test = RegExp("(^|(?!_)(?:[><｜]|" + s.src_ZPCc + "))(" + u + ")", "i"), e.re.schema_search = RegExp("(^|(?!_)(?:[><｜]|" + s.src_ZPCc + "))(" + u + ")", "ig"), e.re.pretest = RegExp("(" + e.re.schema_test.source + ")|(" + e.re.host_fuzzy_test.source + ")|@", "i"), function (e) {
                        e.__index__ = -1, e.__text_cache__ = ""
                    }(e)
                }

                function l(e, t) {
                    var n = new function (e, t) {
                        var n = e.__index__, r = e.__last_index__, o = e.__text_cache__.slice(n, r);
                        this.schema = e.__schema__.toLowerCase(), this.index = n + t, this.lastIndex = r + t, this.raw = o, this.text = o, this.url = o
                    }(e, t);
                    return e.__compiled__[n.schema].normalize(n, e), n
                }

                function c(e, t) {
                    if (!(this instanceof c))return new c(e, t);
                    t || function (e) {
                        return Object.keys(e || {}).reduce(function (e, t) {
                            return e || u.hasOwnProperty(t)
                        }, !1)
                    }(e) && (t = e, e = {}), this.__opts__ = r({}, u, t), this.__index__ = -1, this.__last_index__ = -1, this.__schema__ = "", this.__text_cache__ = "", this.__schemas__ = r({}, p, e), this.__compiled__ = {}, this.__tlds__ = d, this.__tlds_replaced__ = !1, this.re = {}, s(this)
                }

                var u = {fuzzyLink: !0, fuzzyEmail: !0, fuzzyIP: !1}, p = {
                        "http:": {
                            validate: function (e, t, n) {
                                var r = e.slice(t);
                                return n.re.http || (n.re.http = new RegExp("^\\/\\/" + n.re.src_auth + n.re.src_host_port_strict + n.re.src_path, "i")), n.re.http.test(r) ? r.match(n.re.http)[0].length : 0
                            }
                        }, "https:": "http:", "ftp:": "http:", "//": {
                            validate: function (e, t, n) {
                                var r = e.slice(t);
                                return n.re.no_http || (n.re.no_http = new RegExp("^" + n.re.src_auth + "(?:localhost|(?:(?:" + n.re.src_domain + ")\\.)+" + n.re.src_domain_root + ")" + n.re.src_port + n.re.src_host_terminator + n.re.src_path, "i")), n.re.no_http.test(r) ? t >= 3 && ":" === e[t - 3] ? 0 : t >= 3 && "/" === e[t - 3] ? 0 : r.match(n.re.no_http)[0].length : 0
                            }
                        }, "mailto:": {
                            validate: function (e, t, n) {
                                var r = e.slice(t);
                                return n.re.mailto || (n.re.mailto = new RegExp("^" + n.re.src_email_name + "@" + n.re.src_host_strict, "i")), n.re.mailto.test(r) ? r.match(n.re.mailto)[0].length : 0
                            }
                        }
                    },
                    _ = "a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]",
                    d = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");
                c.prototype.add = function (e, t) {
                    return this.__schemas__[e] = t, s(this), this
                }, c.prototype.set = function (e) {
                    return this.__opts__ = r(this.__opts__, e), this
                }, c.prototype.test = function (e) {
                    if (this.__text_cache__ = e, this.__index__ = -1, !e.length)return !1;
                    var t, n, r, o, i, a, s, l;
                    if (this.re.schema_test.test(e))for (s = this.re.schema_search, s.lastIndex = 0; null !== (t = s.exec(e));)if (o = this.testSchemaAt(e, t[2], s.lastIndex)) {
                        this.__schema__ = t[2], this.__index__ = t.index + t[1].length, this.__last_index__ = t.index + t[0].length + o;
                        break
                    }
                    return this.__opts__.fuzzyLink && this.__compiled__["http:"] && (l = e.search(this.re.host_fuzzy_test)) >= 0 && (this.__index__ < 0 || l < this.__index__) && null !== (n = e.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) && (i = n.index + n[1].length, (this.__index__ < 0 || i < this.__index__) && (this.__schema__ = "", this.__index__ = i, this.__last_index__ = n.index + n[0].length)), this.__opts__.fuzzyEmail && this.__compiled__["mailto:"] && e.indexOf("@") >= 0 && null !== (r = e.match(this.re.email_fuzzy)) && (i = r.index + r[1].length, a = r.index + r[0].length, (this.__index__ < 0 || i < this.__index__ || i === this.__index__ && a > this.__last_index__) && (this.__schema__ = "mailto:", this.__index__ = i, this.__last_index__ = a)), this.__index__ >= 0
                }, c.prototype.pretest = function (e) {
                    return this.re.pretest.test(e)
                }, c.prototype.testSchemaAt = function (e, t, n) {
                    return this.__compiled__[t.toLowerCase()] ? this.__compiled__[t.toLowerCase()].validate(e, n, this) : 0
                }, c.prototype.match = function (e) {
                    var t = 0, n = [];
                    this.__index__ >= 0 && this.__text_cache__ === e && (n.push(l(this, t)), t = this.__last_index__);
                    for (var r = t ? e.slice(t) : e; this.test(r);)n.push(l(this, t)), r = r.slice(this.__last_index__), t += this.__last_index__;
                    return n.length ? n : null
                }, c.prototype.tlds = function (e, t) {
                    return e = Array.isArray(e) ? e : [e], t ? (this.__tlds__ = this.__tlds__.concat(e).sort().filter(function (e, t, n) {
                        return e !== n[t - 1]
                    }).reverse(), s(this), this) : (this.__tlds__ = e.slice(), this.__tlds_replaced__ = !0, s(this), this)
                }, c.prototype.normalize = function (e) {
                    e.schema || (e.url = "http://" + e.url), "mailto:" !== e.schema || /^mailto:/i.test(e.url) || (e.url = "mailto:" + e.url)
                }, c.prototype.onCompile = function () {
                }, e.exports = c
            }, function (e, t, n) {
                "use strict";
                e.exports = function (e) {
                    var t = {};
                    return t.src_Any = n(53).source, t.src_Cc = n(51).source, t.src_Z = n(52).source, t.src_P = n(33).source, t.src_ZPCc = [t.src_Z, t.src_P, t.src_Cc].join("|"), t.src_ZCc = [t.src_Z, t.src_Cc].join("|"), t.src_pseudo_letter = "(?:(?![><｜]|" + t.src_ZPCc + ")" + t.src_Any + ")", t.src_ip4 = "(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)", t.src_auth = "(?:(?:(?!" + t.src_ZCc + "|[@/\\[\\]()]).)+@)?", t.src_port = "(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?", t.src_host_terminator = "(?=$|[><｜]|" + t.src_ZPCc + ")(?!-|_|:\\d|\\.-|\\.(?!$|" + t.src_ZPCc + "))", t.src_path = "(?:[/?#](?:(?!" + t.src_ZCc + "|[><｜]|[()[\\]{}.,\"'?!\\-]).|\\[(?:(?!" + t.src_ZCc + "|\\]).)*\\]|\\((?:(?!" + t.src_ZCc + "|[)]).)*\\)|\\{(?:(?!" + t.src_ZCc + '|[}]).)*\\}|\\"(?:(?!' + t.src_ZCc + '|["]).)+\\"|\\\'(?:(?!' + t.src_ZCc + "|[']).)+\\'|\\'(?=" + t.src_pseudo_letter + "|[-]).|\\.{2,3}[a-zA-Z0-9%/]|\\.(?!" + t.src_ZCc + "|[.]).|" + (e && e["---"] ? "\\-(?!--(?:[^-]|$))(?:-*)|" : "\\-+|") + "\\,(?!" + t.src_ZCc + ").|\\!(?!" + t.src_ZCc + "|[!]).|\\?(?!" + t.src_ZCc + "|[?]).)+|\\/)?", t.src_email_name = '[\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]+', t.src_xn = "xn--[a-z0-9\\-]{1,59}", t.src_domain_root = "(?:" + t.src_xn + "|" + t.src_pseudo_letter + "{1,63})", t.src_domain = "(?:" + t.src_xn + "|(?:" + t.src_pseudo_letter + ")|(?:" + t.src_pseudo_letter + "(?:-(?!-)|" + t.src_pseudo_letter + "){0,61}" + t.src_pseudo_letter + "))", t.src_host = "(?:(?:(?:(?:" + t.src_domain + ")\\.)*" + t.src_domain + "))", t.tpl_host_fuzzy = "(?:" + t.src_ip4 + "|(?:(?:(?:" + t.src_domain + ")\\.)+(?:%TLDS%)))", t.tpl_host_no_ip_fuzzy = "(?:(?:(?:" + t.src_domain + ")\\.)+(?:%TLDS%))", t.src_host_strict = t.src_host + t.src_host_terminator, t.tpl_host_fuzzy_strict = t.tpl_host_fuzzy + t.src_host_terminator, t.src_host_port_strict = t.src_host + t.src_port + t.src_host_terminator, t.tpl_host_port_fuzzy_strict = t.tpl_host_fuzzy + t.src_port + t.src_host_terminator, t.tpl_host_port_no_ip_fuzzy_strict = t.tpl_host_no_ip_fuzzy + t.src_port + t.src_host_terminator, t.tpl_host_fuzzy_test = "localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:" + t.src_ZPCc + "|>|$))", t.tpl_email_fuzzy = "(^|[><｜]|\\(|" + t.src_ZCc + ")(" + t.src_email_name + "@" + t.tpl_host_fuzzy_strict + ")", t.tpl_link_fuzzy = "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + t.src_ZPCc + "))((?![$+<=>^`|｜])" + t.tpl_host_port_fuzzy_strict + t.src_path + ")", t.tpl_link_no_ip_fuzzy = "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + t.src_ZPCc + "))((?![$+<=>^`|｜])" + t.tpl_host_port_no_ip_fuzzy_strict + t.src_path + ")", t
                }
            }, function (e, t, n) {
                "use strict";
                e.exports = function (e) {
                    var t = e.utils.escapeRE, n = e.utils.arrayReplaceAt, r = " \r\n$+<=>^`|~",
                        o = e.utils.lib.ucmicro.P.source, i = e.utils.lib.ucmicro.Z.source;
                    e.block.ruler.before("reference", "abbr_def", function (e, t, n, r) {
                        var o, i, a, s, l, c = e.bMarks[t] + e.tShift[t], u = e.eMarks[t];
                        if (c + 2 >= u)return !1;
                        if (42 !== e.src.charCodeAt(c++))return !1;
                        if (91 !== e.src.charCodeAt(c++))return !1;
                        for (s = c; c < u; c++) {
                            if (91 === (a = e.src.charCodeAt(c)))return !1;
                            if (93 === a) {
                                l = c;
                                break
                            }
                            92 === a && c++
                        }
                        return !(l < 0 || 58 !== e.src.charCodeAt(l + 1) || !r && (o = e.src.slice(s, l).replace(/\\(.)/g, "$1"), i = e.src.slice(l + 2, u).trim(), 0 === o.length || 0 === i.length || (e.env.abbreviations || (e.env.abbreviations = {}), void 0 === e.env.abbreviations[":" + o] && (e.env.abbreviations[":" + o] = i), e.line = t + 1, 0)))
                    }, {alt: ["paragraph", "reference"]}), e.core.ruler.after("linkify", "abbr_replace", function (e) {
                        var a, s, l, c, u, p, _, d, h, f, m, g, b, v = e.tokens;
                        if (e.env.abbreviations)for (g = new RegExp("(?:" + Object.keys(e.env.abbreviations).map(function (e) {
                                return e.substr(1)
                            }).sort(function (e, t) {
                                return t.length - e.length
                            }).map(t).join("|") + ")"), m = "(^|" + o + "|" + i + "|[" + r.split("").map(t).join("") + "])(" + Object.keys(e.env.abbreviations).map(function (e) {
                                return e.substr(1)
                            }).sort(function (e, t) {
                                return t.length - e.length
                            }).map(t).join("|") + ")($|" + o + "|" + i + "|[" + r.split("").map(t).join("") + "])", h = new RegExp(m, "g"), s = 0, l = v.length; s < l; s++)if ("inline" === v[s].type)for (c = v[s].children, a = c.length - 1; a >= 0; a--)if ("text" === (b = c[a]).type && (d = 0, p = b.content, h.lastIndex = 0, _ = [], g.test(p))) {
                            for (; f = h.exec(p);)(f.index > 0 || f[1].length > 0) && (u = new e.Token("text", "", 0), u.content = p.slice(d, f.index + f[1].length), _.push(u)), u = new e.Token("abbr_open", "abbr", 1), u.attrs = [["title", e.env.abbreviations[":" + f[2]]]], _.push(u), u = new e.Token("text", "", 0), u.content = f[2], _.push(u), u = new e.Token("abbr_close", "abbr", -1), _.push(u), h.lastIndex -= f[3].length, d = h.lastIndex;
                            _.length && (d < p.length && (u = new e.Token("text", "", 0), u.content = p.slice(d), _.push(u)), v[s].children = c = n(c, a, _))
                        }
                    })
                }
            }, function (e, t, n) {
                "use strict";
                e.exports = function (e, t, n) {
                    var r = 3, o = (n = n || {}).marker || ":", i = o.charCodeAt(0), a = o.length,
                        s = n.validate || function (e) {
                                return e.trim().split(" ", 2)[0] === t
                            }, l = n.render || function (e, n, r, o, i) {
                                return 1 === e[n].nesting && e[n].attrPush(["class", t]), i.renderToken(e, n, r, o, i)
                            };
                    e.block.ruler.before("fence", "container_" + t, function (e, n, l, c) {
                        var u, p, _, d, h, f, m, g, b = !1, v = e.bMarks[n] + e.tShift[n], k = e.eMarks[n];
                        if (i !== e.src.charCodeAt(v))return !1;
                        for (u = v + 1; u <= k && o[(u - v) % a] === e.src[u]; u++);
                        if ((_ = Math.floor((u - v) / a)) < r)return !1;
                        if (u -= (u - v) % a, d = e.src.slice(v, u), h = e.src.slice(u, k), !s(h))return !1;
                        if (c)return !0;
                        for (p = n; !(++p >= l || (v = e.bMarks[p] + e.tShift[p], k = e.eMarks[p], v < k && e.sCount[p] < e.blkIndent));)if (i === e.src.charCodeAt(v) && !(e.sCount[p] - e.blkIndent >= 4)) {
                            for (u = v + 1; u <= k && o[(u - v) % a] === e.src[u]; u++);
                            if (!(Math.floor((u - v) / a) < _ || (u -= (u - v) % a, (u = e.skipSpaces(u)) < k))) {
                                b = !0;
                                break
                            }
                        }
                        return m = e.parentType, g = e.lineMax, e.parentType = "container", e.lineMax = p, f = e.push("container_" + t + "_open", "div", 1), f.markup = d, f.block = !0, f.info = h, f.map = [n, p], e.md.block.tokenize(e, n + 1, p), f = e.push("container_" + t + "_close", "div", -1), f.markup = e.src.slice(v, u), f.block = !0, e.parentType = m, e.lineMax = g, e.line = p + (b ? 1 : 0), !0
                    }, {alt: ["paragraph", "reference", "blockquote", "list"]}), e.renderer.rules["container_" + t + "_open"] = l, e.renderer.rules["container_" + t + "_close"] = l
                }
            }, function (e, t, n) {
                "use strict";
                e.exports = function (e) {
                    function t(e, t) {
                        var n, r, o = e.bMarks[t] + e.tShift[t], i = e.eMarks[t];
                        return o >= i ? -1 : 126 !== (r = e.src.charCodeAt(o++)) && 58 !== r ? -1 : (n = e.skipSpaces(o), o === n ? -1 : n >= i ? -1 : o)
                    }

                    var n = e.utils.isSpace;
                    e.block.ruler.before("paragraph", "deflist", function (e, r, o, i) {
                        var a, s, l, c, u, p, _, d, h, f, m, g, b, v, k, w, y, x, C, A;
                        if (i)return !(e.ddIndent < 0) && t(e, r) >= 0;
                        if ((h = r + 1) >= o)return !1;
                        if (e.isEmpty(h) && ++h >= o)return !1;
                        if (e.sCount[h] < e.blkIndent)return !1;
                        if ((s = t(e, h)) < 0)return !1;
                        _ = e.tokens.length, C = !0, (A = e.push("dl_open", "dl", 1)).map = p = [r, 0], c = r, l = h;
                        e:for (; ;) {
                            for (x = !1, (A = e.push("dt_open", "dt", 1)).map = [c, c], (A = e.push("inline", "", 0)).map = [c, c], A.content = e.getLines(c, c + 1, e.blkIndent, !1).trim(), A.children = [], A = e.push("dt_close", "dt", -1); ;) {
                                for ((A = e.push("dd_open", "dd", 1)).map = u = [h, 0], y = s, d = e.eMarks[l], f = e.sCount[l] + s - (e.bMarks[l] + e.tShift[l]); y < d && (a = e.src.charCodeAt(y), n(a));)9 === a ? f += 4 - f % 4 : f++, y++;
                                if (s = y, w = e.tight, m = e.ddIndent, g = e.blkIndent, k = e.tShift[l], v = e.sCount[l], b = e.parentType, e.blkIndent = e.ddIndent = e.sCount[l] + 2, e.tShift[l] = s - e.bMarks[l], e.sCount[l] = f, e.tight = !0, e.parentType = "deflist", e.md.block.tokenize(e, l, o, !0), e.tight && !x || (C = !1), x = e.line - l > 1 && e.isEmpty(e.line - 1), e.tShift[l] = k, e.sCount[l] = v, e.tight = w, e.parentType = b, e.blkIndent = g, e.ddIndent = m, A = e.push("dd_close", "dd", -1), u[1] = h = e.line, h >= o)break e;
                                if (e.sCount[h] < e.blkIndent)break e;
                                if ((s = t(e, h)) < 0)break;
                                l = h
                            }
                            if (h >= o)break;
                            if (c = h, e.isEmpty(c))break;
                            if (e.sCount[c] < e.blkIndent)break;
                            if ((l = c + 1) >= o)break;
                            if (e.isEmpty(l) && l++, l >= o)break;
                            if (e.sCount[l] < e.blkIndent)break;
                            if ((s = t(e, l)) < 0)break
                        }
                        return A = e.push("dl_close", "dl", -1), p[1] = h, e.line = h, C && function (e, t) {
                            var n, r, o = e.level + 2;
                            for (n = t + 2, r = e.tokens.length - 2; n < r; n++)e.tokens[n].level === o && "paragraph_open" === e.tokens[n].type && (e.tokens[n + 2].hidden = !0, e.tokens[n].hidden = !0, n += 2)
                        }(e, _), !0
                    }, {alt: ["paragraph", "reference"]})
                }
            }, function (e, t, n) {
                "use strict";
                var r = n(112), o = n(113), i = n(115), a = n(116), s = n(114);
                e.exports = function (e, t) {
                    var n = {defs: r, shortcuts: o, enabled: []}, l = s(e.utils.assign({}, n, t || {}));
                    e.renderer.rules.emoji = i, e.core.ruler.push("emoji", a(e, l.defs, l.shortcuts, l.scanRE, l.replaceRE))
                }
            }, function (e, t) {
                e.exports = {
                    100: "💯",
                    1234: "🔢",
                    grinning: "😀",
                    smiley: "😃",
                    smile: "😄",
                    grin: "😁",
                    laughing: "😆",
                    satisfied: "😆",
                    sweat_smile: "😅",
                    joy: "😂",
                    rofl: "🤣",
                    relaxed: "☺️",
                    blush: "😊",
                    innocent: "😇",
                    slightly_smiling_face: "🙂",
                    upside_down_face: "🙃",
                    wink: "😉",
                    relieved: "😌",
                    heart_eyes: "😍",
                    kissing_heart: "😘",
                    kissing: "😗",
                    kissing_smiling_eyes: "😙",
                    kissing_closed_eyes: "😚",
                    yum: "😋",
                    stuck_out_tongue_winking_eye: "😜",
                    stuck_out_tongue_closed_eyes: "😝",
                    stuck_out_tongue: "😛",
                    money_mouth_face: "🤑",
                    hugs: "🤗",
                    nerd_face: "🤓",
                    sunglasses: "😎",
                    clown_face: "🤡",
                    cowboy_hat_face: "🤠",
                    smirk: "😏",
                    unamused: "😒",
                    disappointed: "😞",
                    pensive: "😔",
                    worried: "😟",
                    confused: "😕",
                    slightly_frowning_face: "🙁",
                    frowning_face: "☹️",
                    persevere: "😣",
                    confounded: "😖",
                    tired_face: "😫",
                    weary: "😩",
                    triumph: "😤",
                    angry: "😠",
                    rage: "😡",
                    pout: "😡",
                    no_mouth: "😶",
                    neutral_face: "😐",
                    expressionless: "😑",
                    hushed: "😯",
                    frowning: "😦",
                    anguished: "😧",
                    open_mouth: "😮",
                    astonished: "😲",
                    dizzy_face: "😵",
                    flushed: "😳",
                    scream: "😱",
                    fearful: "😨",
                    cold_sweat: "😰",
                    cry: "😢",
                    disappointed_relieved: "😥",
                    drooling_face: "🤤",
                    sob: "😭",
                    sweat: "😓",
                    sleepy: "😪",
                    sleeping: "😴",
                    roll_eyes: "🙄",
                    thinking: "🤔",
                    lying_face: "🤥",
                    grimacing: "😬",
                    zipper_mouth_face: "🤐",
                    nauseated_face: "🤢",
                    sneezing_face: "🤧",
                    mask: "😷",
                    face_with_thermometer: "🤒",
                    face_with_head_bandage: "🤕",
                    smiling_imp: "😈",
                    imp: "👿",
                    japanese_ogre: "👹",
                    japanese_goblin: "👺",
                    hankey: "💩",
                    poop: "💩",
                    shit: "💩",
                    ghost: "👻",
                    skull: "💀",
                    skull_and_crossbones: "☠️",
                    alien: "👽",
                    space_invader: "👾",
                    robot: "🤖",
                    jack_o_lantern: "🎃",
                    smiley_cat: "😺",
                    smile_cat: "😸",
                    joy_cat: "😹",
                    heart_eyes_cat: "😻",
                    smirk_cat: "😼",
                    kissing_cat: "😽",
                    scream_cat: "🙀",
                    crying_cat_face: "😿",
                    pouting_cat: "😾",
                    open_hands: "👐",
                    raised_hands: "🙌",
                    clap: "👏",
                    pray: "🙏",
                    handshake: "🤝",
                    "+1": "👍",
                    thumbsup: "👍",
                    "-1": "👎",
                    thumbsdown: "👎",
                    fist_oncoming: "👊",
                    facepunch: "👊",
                    punch: "👊",
                    fist_raised: "✊",
                    fist: "✊",
                    fist_left: "🤛",
                    fist_right: "🤜",
                    crossed_fingers: "🤞",
                    v: "✌️",
                    metal: "🤘",
                    ok_hand: "👌",
                    point_left: "👈",
                    point_right: "👉",
                    point_up_2: "👆",
                    point_down: "👇",
                    point_up: "☝️",
                    hand: "✋",
                    raised_hand: "✋",
                    raised_back_of_hand: "🤚",
                    raised_hand_with_fingers_splayed: "🖐",
                    vulcan_salute: "🖖",
                    wave: "👋",
                    call_me_hand: "🤙",
                    muscle: "💪",
                    middle_finger: "🖕",
                    fu: "🖕",
                    writing_hand: "✍️",
                    selfie: "🤳",
                    nail_care: "💅",
                    ring: "💍",
                    lipstick: "💄",
                    kiss: "💋",
                    lips: "👄",
                    tongue: "👅",
                    ear: "👂",
                    nose: "👃",
                    footprints: "👣",
                    eye: "👁",
                    eyes: "👀",
                    speaking_head: "🗣",
                    bust_in_silhouette: "👤",
                    busts_in_silhouette: "👥",
                    baby: "👶",
                    boy: "👦",
                    girl: "👧",
                    man: "👨",
                    woman: "👩",
                    blonde_woman: "👱‍♀",
                    blonde_man: "👱",
                    person_with_blond_hair: "👱",
                    older_man: "👴",
                    older_woman: "👵",
                    man_with_gua_pi_mao: "👲",
                    woman_with_turban: "👳‍♀",
                    man_with_turban: "👳",
                    policewoman: "👮‍♀",
                    policeman: "👮",
                    cop: "👮",
                    construction_worker_woman: "👷‍♀",
                    construction_worker_man: "👷",
                    construction_worker: "👷",
                    guardswoman: "💂‍♀",
                    guardsman: "💂",
                    female_detective: "🕵️‍♀️",
                    male_detective: "🕵",
                    detective: "🕵",
                    woman_health_worker: "👩‍⚕",
                    man_health_worker: "👨‍⚕",
                    woman_farmer: "👩‍🌾",
                    man_farmer: "👨‍🌾",
                    woman_cook: "👩‍🍳",
                    man_cook: "👨‍🍳",
                    woman_student: "👩‍🎓",
                    man_student: "👨‍🎓",
                    woman_singer: "👩‍🎤",
                    man_singer: "👨‍🎤",
                    woman_teacher: "👩‍🏫",
                    man_teacher: "👨‍🏫",
                    woman_factory_worker: "👩‍🏭",
                    man_factory_worker: "👨‍🏭",
                    woman_technologist: "👩‍💻",
                    man_technologist: "👨‍💻",
                    woman_office_worker: "👩‍💼",
                    man_office_worker: "👨‍💼",
                    woman_mechanic: "👩‍🔧",
                    man_mechanic: "👨‍🔧",
                    woman_scientist: "👩‍🔬",
                    man_scientist: "👨‍🔬",
                    woman_artist: "👩‍🎨",
                    man_artist: "👨‍🎨",
                    woman_firefighter: "👩‍🚒",
                    man_firefighter: "👨‍🚒",
                    woman_pilot: "👩‍✈",
                    man_pilot: "👨‍✈",
                    woman_astronaut: "👩‍🚀",
                    man_astronaut: "👨‍🚀",
                    woman_judge: "👩‍⚖",
                    man_judge: "👨‍⚖",
                    mrs_claus: "🤶",
                    santa: "🎅",
                    princess: "👸",
                    prince: "🤴",
                    bride_with_veil: "👰",
                    man_in_tuxedo: "🤵",
                    angel: "👼",
                    pregnant_woman: "🤰",
                    bowing_woman: "🙇‍♀",
                    bowing_man: "🙇",
                    bow: "🙇",
                    tipping_hand_woman: "💁",
                    information_desk_person: "💁",
                    sassy_woman: "💁",
                    tipping_hand_man: "💁‍♂",
                    sassy_man: "💁‍♂",
                    no_good_woman: "🙅",
                    no_good: "🙅",
                    ng_woman: "🙅",
                    no_good_man: "🙅‍♂",
                    ng_man: "🙅‍♂",
                    ok_woman: "🙆",
                    ok_man: "🙆‍♂",
                    raising_hand_woman: "🙋",
                    raising_hand: "🙋",
                    raising_hand_man: "🙋‍♂",
                    woman_facepalming: "🤦‍♀",
                    man_facepalming: "🤦‍♂",
                    woman_shrugging: "🤷‍♀",
                    man_shrugging: "🤷‍♂",
                    pouting_woman: "🙎",
                    person_with_pouting_face: "🙎",
                    pouting_man: "🙎‍♂",
                    frowning_woman: "🙍",
                    person_frowning: "🙍",
                    frowning_man: "🙍‍♂",
                    haircut_woman: "💇",
                    haircut: "💇",
                    haircut_man: "💇‍♂",
                    massage_woman: "💆",
                    massage: "💆",
                    massage_man: "💆‍♂",
                    business_suit_levitating: "🕴",
                    dancer: "💃",
                    man_dancing: "🕺",
                    dancing_women: "👯",
                    dancers: "👯",
                    dancing_men: "👯‍♂",
                    walking_woman: "🚶‍♀",
                    walking_man: "🚶",
                    walking: "🚶",
                    running_woman: "🏃‍♀",
                    running_man: "🏃",
                    runner: "🏃",
                    running: "🏃",
                    couple: "👫",
                    two_women_holding_hands: "👭",
                    two_men_holding_hands: "👬",
                    couple_with_heart_woman_man: "💑",
                    couple_with_heart: "💑",
                    couple_with_heart_woman_woman: "👩‍❤️‍👩",
                    couple_with_heart_man_man: "👨‍❤️‍👨",
                    couplekiss_man_woman: "💏",
                    couplekiss_woman_woman: "👩‍❤️‍💋‍👩",
                    couplekiss_man_man: "👨‍❤️‍💋‍👨",
                    family_man_woman_boy: "👪",
                    family: "👪",
                    family_man_woman_girl: "👨‍👩‍👧",
                    family_man_woman_girl_boy: "👨‍👩‍👧‍👦",
                    family_man_woman_boy_boy: "👨‍👩‍👦‍👦",
                    family_man_woman_girl_girl: "👨‍👩‍👧‍👧",
                    family_woman_woman_boy: "👩‍👩‍👦",
                    family_woman_woman_girl: "👩‍👩‍👧",
                    family_woman_woman_girl_boy: "👩‍👩‍👧‍👦",
                    family_woman_woman_boy_boy: "👩‍👩‍👦‍👦",
                    family_woman_woman_girl_girl: "👩‍👩‍👧‍👧",
                    family_man_man_boy: "👨‍👨‍👦",
                    family_man_man_girl: "👨‍👨‍👧",
                    family_man_man_girl_boy: "👨‍👨‍👧‍👦",
                    family_man_man_boy_boy: "👨‍👨‍👦‍👦",
                    family_man_man_girl_girl: "👨‍👨‍👧‍👧",
                    family_woman_boy: "👩‍👦",
                    family_woman_girl: "👩‍👧",
                    family_woman_girl_boy: "👩‍👧‍👦",
                    family_woman_boy_boy: "👩‍👦‍👦",
                    family_woman_girl_girl: "👩‍👧‍👧",
                    family_man_boy: "👨‍👦",
                    family_man_girl: "👨‍👧",
                    family_man_girl_boy: "👨‍👧‍👦",
                    family_man_boy_boy: "👨‍👦‍👦",
                    family_man_girl_girl: "👨‍👧‍👧",
                    womans_clothes: "👚",
                    shirt: "👕",
                    tshirt: "👕",
                    jeans: "👖",
                    necktie: "👔",
                    dress: "👗",
                    bikini: "👙",
                    kimono: "👘",
                    high_heel: "👠",
                    sandal: "👡",
                    boot: "👢",
                    mans_shoe: "👞",
                    shoe: "👞",
                    athletic_shoe: "👟",
                    womans_hat: "👒",
                    tophat: "🎩",
                    mortar_board: "🎓",
                    crown: "👑",
                    rescue_worker_helmet: "⛑",
                    school_satchel: "🎒",
                    pouch: "👝",
                    purse: "👛",
                    handbag: "👜",
                    briefcase: "💼",
                    eyeglasses: "👓",
                    dark_sunglasses: "🕶",
                    closed_umbrella: "🌂",
                    open_umbrella: "☂️",
                    dog: "🐶",
                    cat: "🐱",
                    mouse: "🐭",
                    hamster: "🐹",
                    rabbit: "🐰",
                    fox_face: "🦊",
                    bear: "🐻",
                    panda_face: "🐼",
                    koala: "🐨",
                    tiger: "🐯",
                    lion: "🦁",
                    cow: "🐮",
                    pig: "🐷",
                    pig_nose: "🐽",
                    frog: "🐸",
                    monkey_face: "🐵",
                    see_no_evil: "🙈",
                    hear_no_evil: "🙉",
                    speak_no_evil: "🙊",
                    monkey: "🐒",
                    chicken: "🐔",
                    penguin: "🐧",
                    bird: "🐦",
                    baby_chick: "🐤",
                    hatching_chick: "🐣",
                    hatched_chick: "🐥",
                    duck: "🦆",
                    eagle: "🦅",
                    owl: "🦉",
                    bat: "🦇",
                    wolf: "🐺",
                    boar: "🐗",
                    horse: "🐴",
                    unicorn: "🦄",
                    bee: "🐝",
                    honeybee: "🐝",
                    bug: "🐛",
                    butterfly: "🦋",
                    snail: "🐌",
                    shell: "🐚",
                    beetle: "🐞",
                    ant: "🐜",
                    spider: "🕷",
                    spider_web: "🕸",
                    turtle: "🐢",
                    snake: "🐍",
                    lizard: "🦎",
                    scorpion: "🦂",
                    crab: "🦀",
                    squid: "🦑",
                    octopus: "🐙",
                    shrimp: "🦐",
                    tropical_fish: "🐠",
                    fish: "🐟",
                    blowfish: "🐡",
                    dolphin: "🐬",
                    flipper: "🐬",
                    shark: "🦈",
                    whale: "🐳",
                    whale2: "🐋",
                    crocodile: "🐊",
                    leopard: "🐆",
                    tiger2: "🐅",
                    water_buffalo: "🐃",
                    ox: "🐂",
                    cow2: "🐄",
                    deer: "🦌",
                    dromedary_camel: "🐪",
                    camel: "🐫",
                    elephant: "🐘",
                    rhinoceros: "🦏",
                    gorilla: "🦍",
                    racehorse: "🐎",
                    pig2: "🐖",
                    goat: "🐐",
                    ram: "🐏",
                    sheep: "🐑",
                    dog2: "🐕",
                    poodle: "🐩",
                    cat2: "🐈",
                    rooster: "🐓",
                    turkey: "🦃",
                    dove: "🕊",
                    rabbit2: "🐇",
                    mouse2: "🐁",
                    rat: "🐀",
                    chipmunk: "🐿",
                    feet: "🐾",
                    paw_prints: "🐾",
                    dragon: "🐉",
                    dragon_face: "🐲",
                    cactus: "🌵",
                    christmas_tree: "🎄",
                    evergreen_tree: "🌲",
                    deciduous_tree: "🌳",
                    palm_tree: "🌴",
                    seedling: "🌱",
                    herb: "🌿",
                    shamrock: "☘️",
                    four_leaf_clover: "🍀",
                    bamboo: "🎍",
                    tanabata_tree: "🎋",
                    leaves: "🍃",
                    fallen_leaf: "🍂",
                    maple_leaf: "🍁",
                    mushroom: "🍄",
                    ear_of_rice: "🌾",
                    bouquet: "💐",
                    tulip: "🌷",
                    rose: "🌹",
                    wilted_flower: "🥀",
                    sunflower: "🌻",
                    blossom: "🌼",
                    cherry_blossom: "🌸",
                    hibiscus: "🌺",
                    earth_americas: "🌎",
                    earth_africa: "🌍",
                    earth_asia: "🌏",
                    full_moon: "🌕",
                    waning_gibbous_moon: "🌖",
                    last_quarter_moon: "🌗",
                    waning_crescent_moon: "🌘",
                    new_moon: "🌑",
                    waxing_crescent_moon: "🌒",
                    first_quarter_moon: "🌓",
                    moon: "🌔",
                    waxing_gibbous_moon: "🌔",
                    new_moon_with_face: "🌚",
                    full_moon_with_face: "🌝",
                    sun_with_face: "🌞",
                    first_quarter_moon_with_face: "🌛",
                    last_quarter_moon_with_face: "🌜",
                    crescent_moon: "🌙",
                    dizzy: "💫",
                    star: "⭐️",
                    star2: "🌟",
                    sparkles: "✨",
                    zap: "⚡️",
                    fire: "🔥",
                    boom: "💥",
                    collision: "💥",
                    comet: "☄",
                    sunny: "☀️",
                    sun_behind_small_cloud: "🌤",
                    partly_sunny: "⛅️",
                    sun_behind_large_cloud: "🌥",
                    sun_behind_rain_cloud: "🌦",
                    rainbow: "🌈",
                    cloud: "☁️",
                    cloud_with_rain: "🌧",
                    cloud_with_lightning_and_rain: "⛈",
                    cloud_with_lightning: "🌩",
                    cloud_with_snow: "🌨",
                    snowman_with_snow: "☃️",
                    snowman: "⛄️",
                    snowflake: "❄️",
                    wind_face: "🌬",
                    dash: "💨",
                    tornado: "🌪",
                    fog: "🌫",
                    ocean: "🌊",
                    droplet: "💧",
                    sweat_drops: "💦",
                    umbrella: "☔️",
                    green_apple: "🍏",
                    apple: "🍎",
                    pear: "🍐",
                    tangerine: "🍊",
                    orange: "🍊",
                    mandarin: "🍊",
                    lemon: "🍋",
                    banana: "🍌",
                    watermelon: "🍉",
                    grapes: "🍇",
                    strawberry: "🍓",
                    melon: "🍈",
                    cherries: "🍒",
                    peach: "🍑",
                    pineapple: "🍍",
                    kiwi_fruit: "🥝",
                    avocado: "🥑",
                    tomato: "🍅",
                    eggplant: "🍆",
                    cucumber: "🥒",
                    carrot: "🥕",
                    corn: "🌽",
                    hot_pepper: "🌶",
                    potato: "🥔",
                    sweet_potato: "🍠",
                    chestnut: "🌰",
                    peanuts: "🥜",
                    honey_pot: "🍯",
                    croissant: "🥐",
                    bread: "🍞",
                    baguette_bread: "🥖",
                    cheese: "🧀",
                    egg: "🥚",
                    fried_egg: "🍳",
                    bacon: "🥓",
                    pancakes: "🥞",
                    fried_shrimp: "🍤",
                    poultry_leg: "🍗",
                    meat_on_bone: "🍖",
                    pizza: "🍕",
                    hotdog: "🌭",
                    hamburger: "🍔",
                    fries: "🍟",
                    stuffed_flatbread: "🥙",
                    taco: "🌮",
                    burrito: "🌯",
                    green_salad: "🥗",
                    shallow_pan_of_food: "🥘",
                    spaghetti: "🍝",
                    ramen: "🍜",
                    stew: "🍲",
                    fish_cake: "🍥",
                    sushi: "🍣",
                    bento: "🍱",
                    curry: "🍛",
                    rice: "🍚",
                    rice_ball: "🍙",
                    rice_cracker: "🍘",
                    oden: "🍢",
                    dango: "🍡",
                    shaved_ice: "🍧",
                    ice_cream: "🍨",
                    icecream: "🍦",
                    cake: "🍰",
                    birthday: "🎂",
                    custard: "🍮",
                    lollipop: "🍭",
                    candy: "🍬",
                    chocolate_bar: "🍫",
                    popcorn: "🍿",
                    doughnut: "🍩",
                    cookie: "🍪",
                    milk_glass: "🥛",
                    baby_bottle: "🍼",
                    coffee: "☕️",
                    tea: "🍵",
                    sake: "🍶",
                    beer: "🍺",
                    beers: "🍻",
                    clinking_glasses: "🥂",
                    wine_glass: "🍷",
                    tumbler_glass: "🥃",
                    cocktail: "🍸",
                    tropical_drink: "🍹",
                    champagne: "🍾",
                    spoon: "🥄",
                    fork_and_knife: "🍴",
                    plate_with_cutlery: "🍽",
                    soccer: "⚽️",
                    basketball: "🏀",
                    football: "🏈",
                    baseball: "⚾️",
                    tennis: "🎾",
                    volleyball: "🏐",
                    rugby_football: "🏉",
                    "8ball": "🎱",
                    ping_pong: "🏓",
                    badminton: "🏸",
                    goal_net: "🥅",
                    ice_hockey: "🏒",
                    field_hockey: "🏑",
                    cricket: "🏏",
                    golf: "⛳️",
                    bow_and_arrow: "🏹",
                    fishing_pole_and_fish: "🎣",
                    boxing_glove: "🥊",
                    martial_arts_uniform: "🥋",
                    ice_skate: "⛸",
                    ski: "🎿",
                    skier: "⛷",
                    snowboarder: "🏂",
                    weight_lifting_woman: "🏋️‍♀️",
                    weight_lifting_man: "🏋",
                    person_fencing: "🤺",
                    women_wrestling: "🤼‍♀",
                    men_wrestling: "🤼‍♂",
                    woman_cartwheeling: "🤸‍♀",
                    man_cartwheeling: "🤸‍♂",
                    basketball_woman: "⛹️‍♀️",
                    basketball_man: "⛹",
                    woman_playing_handball: "🤾‍♀",
                    man_playing_handball: "🤾‍♂",
                    golfing_woman: "🏌️‍♀️",
                    golfing_man: "🏌",
                    surfing_woman: "🏄‍♀",
                    surfing_man: "🏄",
                    surfer: "🏄",
                    swimming_woman: "🏊‍♀",
                    swimming_man: "🏊",
                    swimmer: "🏊",
                    woman_playing_water_polo: "🤽‍♀",
                    man_playing_water_polo: "🤽‍♂",
                    rowing_woman: "🚣‍♀",
                    rowing_man: "🚣",
                    rowboat: "🚣",
                    horse_racing: "🏇",
                    biking_woman: "🚴‍♀",
                    biking_man: "🚴",
                    bicyclist: "🚴",
                    mountain_biking_woman: "🚵‍♀",
                    mountain_biking_man: "🚵",
                    mountain_bicyclist: "🚵",
                    running_shirt_with_sash: "🎽",
                    medal_sports: "🏅",
                    medal_military: "🎖",
                    "1st_place_medal": "🥇",
                    "2nd_place_medal": "🥈",
                    "3rd_place_medal": "🥉",
                    trophy: "🏆",
                    rosette: "🏵",
                    reminder_ribbon: "🎗",
                    ticket: "🎫",
                    tickets: "🎟",
                    circus_tent: "🎪",
                    woman_juggling: "🤹‍♀",
                    man_juggling: "🤹‍♂",
                    performing_arts: "🎭",
                    art: "🎨",
                    clapper: "🎬",
                    microphone: "🎤",
                    headphones: "🎧",
                    musical_score: "🎼",
                    musical_keyboard: "🎹",
                    drum: "🥁",
                    saxophone: "🎷",
                    trumpet: "🎺",
                    guitar: "🎸",
                    violin: "🎻",
                    game_die: "🎲",
                    dart: "🎯",
                    bowling: "🎳",
                    video_game: "🎮",
                    slot_machine: "🎰",
                    car: "🚗",
                    red_car: "🚗",
                    taxi: "🚕",
                    blue_car: "🚙",
                    bus: "🚌",
                    trolleybus: "🚎",
                    racing_car: "🏎",
                    police_car: "🚓",
                    ambulance: "🚑",
                    fire_engine: "🚒",
                    minibus: "🚐",
                    truck: "🚚",
                    articulated_lorry: "🚛",
                    tractor: "🚜",
                    kick_scooter: "🛴",
                    bike: "🚲",
                    motor_scooter: "🛵",
                    motorcycle: "🏍",
                    rotating_light: "🚨",
                    oncoming_police_car: "🚔",
                    oncoming_bus: "🚍",
                    oncoming_automobile: "🚘",
                    oncoming_taxi: "🚖",
                    aerial_tramway: "🚡",
                    mountain_cableway: "🚠",
                    suspension_railway: "🚟",
                    railway_car: "🚃",
                    train: "🚋",
                    mountain_railway: "🚞",
                    monorail: "🚝",
                    bullettrain_side: "🚄",
                    bullettrain_front: "🚅",
                    light_rail: "🚈",
                    steam_locomotive: "🚂",
                    train2: "🚆",
                    metro: "🚇",
                    tram: "🚊",
                    station: "🚉",
                    helicopter: "🚁",
                    small_airplane: "🛩",
                    airplane: "✈️",
                    flight_departure: "🛫",
                    flight_arrival: "🛬",
                    rocket: "🚀",
                    artificial_satellite: "🛰",
                    seat: "💺",
                    canoe: "🛶",
                    boat: "⛵️",
                    sailboat: "⛵️",
                    motor_boat: "🛥",
                    speedboat: "🚤",
                    passenger_ship: "🛳",
                    ferry: "⛴",
                    ship: "🚢",
                    anchor: "⚓️",
                    construction: "🚧",
                    fuelpump: "⛽️",
                    busstop: "🚏",
                    vertical_traffic_light: "🚦",
                    traffic_light: "🚥",
                    world_map: "🗺",
                    moyai: "🗿",
                    statue_of_liberty: "🗽",
                    fountain: "⛲️",
                    tokyo_tower: "🗼",
                    european_castle: "🏰",
                    japanese_castle: "🏯",
                    stadium: "🏟",
                    ferris_wheel: "🎡",
                    roller_coaster: "🎢",
                    carousel_horse: "🎠",
                    parasol_on_ground: "⛱",
                    beach_umbrella: "🏖",
                    desert_island: "🏝",
                    mountain: "⛰",
                    mountain_snow: "🏔",
                    mount_fuji: "🗻",
                    volcano: "🌋",
                    desert: "🏜",
                    camping: "🏕",
                    tent: "⛺️",
                    railway_track: "🛤",
                    motorway: "🛣",
                    building_construction: "🏗",
                    factory: "🏭",
                    house: "🏠",
                    house_with_garden: "🏡",
                    houses: "🏘",
                    derelict_house: "🏚",
                    office: "🏢",
                    department_store: "🏬",
                    post_office: "🏣",
                    european_post_office: "🏤",
                    hospital: "🏥",
                    bank: "🏦",
                    hotel: "🏨",
                    convenience_store: "🏪",
                    school: "🏫",
                    love_hotel: "🏩",
                    wedding: "💒",
                    classical_building: "🏛",
                    church: "⛪️",
                    mosque: "🕌",
                    synagogue: "🕍",
                    kaaba: "🕋",
                    shinto_shrine: "⛩",
                    japan: "🗾",
                    rice_scene: "🎑",
                    national_park: "🏞",
                    sunrise: "🌅",
                    sunrise_over_mountains: "🌄",
                    stars: "🌠",
                    sparkler: "🎇",
                    fireworks: "🎆",
                    city_sunrise: "🌇",
                    city_sunset: "🌆",
                    cityscape: "🏙",
                    night_with_stars: "🌃",
                    milky_way: "🌌",
                    bridge_at_night: "🌉",
                    foggy: "🌁",
                    watch: "⌚️",
                    iphone: "📱",
                    calling: "📲",
                    computer: "💻",
                    keyboard: "⌨️",
                    desktop_computer: "🖥",
                    printer: "🖨",
                    computer_mouse: "🖱",
                    trackball: "🖲",
                    joystick: "🕹",
                    clamp: "🗜",
                    minidisc: "💽",
                    floppy_disk: "💾",
                    cd: "💿",
                    dvd: "📀",
                    vhs: "📼",
                    camera: "📷",
                    camera_flash: "📸",
                    video_camera: "📹",
                    movie_camera: "🎥",
                    film_projector: "📽",
                    film_strip: "🎞",
                    telephone_receiver: "📞",
                    phone: "☎️",
                    telephone: "☎️",
                    pager: "📟",
                    fax: "📠",
                    tv: "📺",
                    radio: "📻",
                    studio_microphone: "🎙",
                    level_slider: "🎚",
                    control_knobs: "🎛",
                    stopwatch: "⏱",
                    timer_clock: "⏲",
                    alarm_clock: "⏰",
                    mantelpiece_clock: "🕰",
                    hourglass: "⌛️",
                    hourglass_flowing_sand: "⏳",
                    satellite: "📡",
                    battery: "🔋",
                    electric_plug: "🔌",
                    bulb: "💡",
                    flashlight: "🔦",
                    candle: "🕯",
                    wastebasket: "🗑",
                    oil_drum: "🛢",
                    money_with_wings: "💸",
                    dollar: "💵",
                    yen: "💴",
                    euro: "💶",
                    pound: "💷",
                    moneybag: "💰",
                    credit_card: "💳",
                    gem: "💎",
                    balance_scale: "⚖️",
                    wrench: "🔧",
                    hammer: "🔨",
                    hammer_and_pick: "⚒",
                    hammer_and_wrench: "🛠",
                    pick: "⛏",
                    nut_and_bolt: "🔩",
                    gear: "⚙️",
                    chains: "⛓",
                    gun: "🔫",
                    bomb: "💣",
                    hocho: "🔪",
                    knife: "🔪",
                    dagger: "🗡",
                    crossed_swords: "⚔️",
                    shield: "🛡",
                    smoking: "🚬",
                    coffin: "⚰️",
                    funeral_urn: "⚱️",
                    amphora: "🏺",
                    crystal_ball: "🔮",
                    prayer_beads: "📿",
                    barber: "💈",
                    alembic: "⚗️",
                    telescope: "🔭",
                    microscope: "🔬",
                    hole: "🕳",
                    pill: "💊",
                    syringe: "💉",
                    thermometer: "🌡",
                    toilet: "🚽",
                    potable_water: "🚰",
                    shower: "🚿",
                    bathtub: "🛁",
                    bath: "🛀",
                    bellhop_bell: "🛎",
                    key: "🔑",
                    old_key: "🗝",
                    door: "🚪",
                    couch_and_lamp: "🛋",
                    bed: "🛏",
                    sleeping_bed: "🛌",
                    framed_picture: "🖼",
                    shopping: "🛍",
                    shopping_cart: "🛒",
                    gift: "🎁",
                    balloon: "🎈",
                    flags: "🎏",
                    ribbon: "🎀",
                    confetti_ball: "🎊",
                    tada: "🎉",
                    dolls: "🎎",
                    izakaya_lantern: "🏮",
                    lantern: "🏮",
                    wind_chime: "🎐",
                    email: "✉️",
                    envelope: "✉️",
                    envelope_with_arrow: "📩",
                    incoming_envelope: "📨",
                    "e-mail": "📧",
                    love_letter: "💌",
                    inbox_tray: "📥",
                    outbox_tray: "📤",
                    package: "📦",
                    label: "🏷",
                    mailbox_closed: "📪",
                    mailbox: "📫",
                    mailbox_with_mail: "📬",
                    mailbox_with_no_mail: "📭",
                    postbox: "📮",
                    postal_horn: "📯",
                    scroll: "📜",
                    page_with_curl: "📃",
                    page_facing_up: "📄",
                    bookmark_tabs: "📑",
                    bar_chart: "📊",
                    chart_with_upwards_trend: "📈",
                    chart_with_downwards_trend: "📉",
                    spiral_notepad: "🗒",
                    spiral_calendar: "🗓",
                    calendar: "📆",
                    date: "📅",
                    card_index: "📇",
                    card_file_box: "🗃",
                    ballot_box: "🗳",
                    file_cabinet: "🗄",
                    clipboard: "📋",
                    file_folder: "📁",
                    open_file_folder: "📂",
                    card_index_dividers: "🗂",
                    newspaper_roll: "🗞",
                    newspaper: "📰",
                    notebook: "📓",
                    notebook_with_decorative_cover: "📔",
                    ledger: "📒",
                    closed_book: "📕",
                    green_book: "📗",
                    blue_book: "📘",
                    orange_book: "📙",
                    books: "📚",
                    book: "📖",
                    open_book: "📖",
                    bookmark: "🔖",
                    link: "🔗",
                    paperclip: "📎",
                    paperclips: "🖇",
                    triangular_ruler: "📐",
                    straight_ruler: "📏",
                    pushpin: "📌",
                    round_pushpin: "📍",
                    scissors: "✂️",
                    pen: "🖊",
                    fountain_pen: "🖋",
                    black_nib: "✒️",
                    paintbrush: "🖌",
                    crayon: "🖍",
                    memo: "📝",
                    pencil: "📝",
                    pencil2: "✏️",
                    mag: "🔍",
                    mag_right: "🔎",
                    lock_with_ink_pen: "🔏",
                    closed_lock_with_key: "🔐",
                    lock: "🔒",
                    unlock: "🔓",
                    heart: "❤️",
                    yellow_heart: "💛",
                    green_heart: "💚",
                    blue_heart: "💙",
                    purple_heart: "💜",
                    black_heart: "🖤",
                    broken_heart: "💔",
                    heavy_heart_exclamation: "❣️",
                    two_hearts: "💕",
                    revolving_hearts: "💞",
                    heartbeat: "💓",
                    heartpulse: "💗",
                    sparkling_heart: "💖",
                    cupid: "💘",
                    gift_heart: "💝",
                    heart_decoration: "💟",
                    peace_symbol: "☮️",
                    latin_cross: "✝️",
                    star_and_crescent: "☪️",
                    om: "🕉",
                    wheel_of_dharma: "☸️",
                    star_of_david: "✡️",
                    six_pointed_star: "🔯",
                    menorah: "🕎",
                    yin_yang: "☯️",
                    orthodox_cross: "☦️",
                    place_of_worship: "🛐",
                    ophiuchus: "⛎",
                    aries: "♈️",
                    taurus: "♉️",
                    gemini: "♊️",
                    cancer: "♋️",
                    leo: "♌️",
                    virgo: "♍️",
                    libra: "♎️",
                    scorpius: "♏️",
                    sagittarius: "♐️",
                    capricorn: "♑️",
                    aquarius: "♒️",
                    pisces: "♓️",
                    id: "🆔",
                    atom_symbol: "⚛️",
                    accept: "🉑",
                    radioactive: "☢️",
                    biohazard: "☣️",
                    mobile_phone_off: "📴",
                    vibration_mode: "📳",
                    eight_pointed_black_star: "✴️",
                    vs: "🆚",
                    white_flower: "💮",
                    ideograph_advantage: "🉐",
                    secret: "㊙️",
                    congratulations: "㊗️",
                    u6e80: "🈵",
                    a: "🅰️",
                    b: "🅱️",
                    ab: "🆎",
                    cl: "🆑",
                    o2: "🅾️",
                    sos: "🆘",
                    x: "❌",
                    o: "⭕️",
                    stop_sign: "🛑",
                    no_entry: "⛔️",
                    name_badge: "📛",
                    no_entry_sign: "🚫",
                    anger: "💢",
                    hotsprings: "♨️",
                    no_pedestrians: "🚷",
                    do_not_litter: "🚯",
                    no_bicycles: "🚳",
                    "non-potable_water": "🚱",
                    underage: "🔞",
                    no_mobile_phones: "📵",
                    no_smoking: "🚭",
                    exclamation: "❗️",
                    heavy_exclamation_mark: "❗️",
                    grey_exclamation: "❕",
                    question: "❓",
                    grey_question: "❔",
                    bangbang: "‼️",
                    interrobang: "⁉️",
                    low_brightness: "🔅",
                    high_brightness: "🔆",
                    part_alternation_mark: "〽️",
                    warning: "⚠️",
                    children_crossing: "🚸",
                    trident: "🔱",
                    fleur_de_lis: "⚜️",
                    beginner: "🔰",
                    recycle: "♻️",
                    white_check_mark: "✅",
                    chart: "💹",
                    sparkle: "❇️",
                    eight_spoked_asterisk: "✳️",
                    negative_squared_cross_mark: "❎",
                    globe_with_meridians: "🌐",
                    diamond_shape_with_a_dot_inside: "💠",
                    m: "Ⓜ️",
                    cyclone: "🌀",
                    zzz: "💤",
                    atm: "🏧",
                    wc: "🚾",
                    wheelchair: "♿️",
                    parking: "🅿️",
                    sa: "🈂️",
                    passport_control: "🛂",
                    customs: "🛃",
                    baggage_claim: "🛄",
                    left_luggage: "🛅",
                    mens: "🚹",
                    womens: "🚺",
                    baby_symbol: "🚼",
                    restroom: "🚻",
                    put_litter_in_its_place: "🚮",
                    cinema: "🎦",
                    signal_strength: "📶",
                    koko: "🈁",
                    symbols: "🔣",
                    information_source: "ℹ️",
                    abc: "🔤",
                    abcd: "🔡",
                    capital_abcd: "🔠",
                    ng: "🆖",
                    ok: "🆗",
                    up: "🆙",
                    cool: "🆒",
                    new: "🆕",
                    free: "🆓",
                    zero: "0️⃣",
                    one: "1️⃣",
                    two: "2️⃣",
                    three: "3️⃣",
                    four: "4️⃣",
                    five: "5️⃣",
                    six: "6️⃣",
                    seven: "7️⃣",
                    eight: "8️⃣",
                    nine: "9️⃣",
                    keycap_ten: "🔟",
                    hash: "#️⃣",
                    asterisk: "*️⃣",
                    arrow_forward: "▶️",
                    pause_button: "⏸",
                    play_or_pause_button: "⏯",
                    stop_button: "⏹",
                    record_button: "⏺",
                    next_track_button: "⏭",
                    previous_track_button: "⏮",
                    fast_forward: "⏩",
                    rewind: "⏪",
                    arrow_double_up: "⏫",
                    arrow_double_down: "⏬",
                    arrow_backward: "◀️",
                    arrow_up_small: "🔼",
                    arrow_down_small: "🔽",
                    arrow_right: "➡️",
                    arrow_left: "⬅️",
                    arrow_up: "⬆️",
                    arrow_down: "⬇️",
                    arrow_upper_right: "↗️",
                    arrow_lower_right: "↘️",
                    arrow_lower_left: "↙️",
                    arrow_upper_left: "↖️",
                    arrow_up_down: "↕️",
                    left_right_arrow: "↔️",
                    arrow_right_hook: "↪️",
                    leftwards_arrow_with_hook: "↩️",
                    arrow_heading_up: "⤴️",
                    arrow_heading_down: "⤵️",
                    twisted_rightwards_arrows: "🔀",
                    repeat: "🔁",
                    repeat_one: "🔂",
                    arrows_counterclockwise: "🔄",
                    arrows_clockwise: "🔃",
                    musical_note: "🎵",
                    notes: "🎶",
                    heavy_plus_sign: "➕",
                    heavy_minus_sign: "➖",
                    heavy_division_sign: "➗",
                    heavy_multiplication_x: "✖️",
                    heavy_dollar_sign: "💲",
                    currency_exchange: "💱",
                    tm: "™️",
                    copyright: "©️",
                    registered: "®️",
                    wavy_dash: "〰️",
                    curly_loop: "➰",
                    loop: "➿",
                    end: "🔚",
                    back: "🔙",
                    on: "🔛",
                    top: "🔝",
                    soon: "🔜",
                    heavy_check_mark: "✔️",
                    ballot_box_with_check: "☑️",
                    radio_button: "🔘",
                    white_circle: "⚪️",
                    black_circle: "⚫️",
                    red_circle: "🔴",
                    large_blue_circle: "🔵",
                    small_red_triangle: "🔺",
                    small_red_triangle_down: "🔻",
                    small_orange_diamond: "🔸",
                    small_blue_diamond: "🔹",
                    large_orange_diamond: "🔶",
                    large_blue_diamond: "🔷",
                    white_square_button: "🔳",
                    black_square_button: "🔲",
                    black_small_square: "▪️",
                    white_small_square: "▫️",
                    black_medium_small_square: "◾️",
                    white_medium_small_square: "◽️",
                    black_medium_square: "◼️",
                    white_medium_square: "◻️",
                    black_large_square: "⬛️",
                    white_large_square: "⬜️",
                    speaker: "🔈",
                    mute: "🔇",
                    sound: "🔉",
                    loud_sound: "🔊",
                    bell: "🔔",
                    no_bell: "🔕",
                    mega: "📣",
                    loudspeaker: "📢",
                    eye_speech_bubble: "👁‍🗨",
                    speech_balloon: "💬",
                    thought_balloon: "💭",
                    right_anger_bubble: "🗯",
                    spades: "♠️",
                    clubs: "♣️",
                    hearts: "♥️",
                    diamonds: "♦️",
                    black_joker: "🃏",
                    flower_playing_cards: "🎴",
                    mahjong: "🀄️",
                    clock1: "🕐",
                    clock2: "🕑",
                    clock3: "🕒",
                    clock4: "🕓",
                    clock5: "🕔",
                    clock6: "🕕",
                    clock7: "🕖",
                    clock8: "🕗",
                    clock9: "🕘",
                    clock10: "🕙",
                    clock11: "🕚",
                    clock12: "🕛",
                    clock130: "🕜",
                    clock230: "🕝",
                    clock330: "🕞",
                    clock430: "🕟",
                    clock530: "🕠",
                    clock630: "🕡",
                    clock730: "🕢",
                    clock830: "🕣",
                    clock930: "🕤",
                    clock1030: "🕥",
                    clock1130: "🕦",
                    clock1230: "🕧",
                    white_flag: "🏳️",
                    black_flag: "🏴",
                    checkered_flag: "🏁",
                    triangular_flag_on_post: "🚩",
                    rainbow_flag: "🏳️‍🌈",
                    afghanistan: "🇦🇫",
                    aland_islands: "🇦🇽",
                    albania: "🇦🇱",
                    algeria: "🇩🇿",
                    american_samoa: "🇦🇸",
                    andorra: "🇦🇩",
                    angola: "🇦🇴",
                    anguilla: "🇦🇮",
                    antarctica: "🇦🇶",
                    antigua_barbuda: "🇦🇬",
                    argentina: "🇦🇷",
                    armenia: "🇦🇲",
                    aruba: "🇦🇼",
                    australia: "🇦🇺",
                    austria: "🇦🇹",
                    azerbaijan: "🇦🇿",
                    bahamas: "🇧🇸",
                    bahrain: "🇧🇭",
                    bangladesh: "🇧🇩",
                    barbados: "🇧🇧",
                    belarus: "🇧🇾",
                    belgium: "🇧🇪",
                    belize: "🇧🇿",
                    benin: "🇧🇯",
                    bermuda: "🇧🇲",
                    bhutan: "🇧🇹",
                    bolivia: "🇧🇴",
                    caribbean_netherlands: "🇧🇶",
                    bosnia_herzegovina: "🇧🇦",
                    botswana: "🇧🇼",
                    brazil: "🇧🇷",
                    british_indian_ocean_territory: "🇮🇴",
                    british_virgin_islands: "🇻🇬",
                    brunei: "🇧🇳",
                    bulgaria: "🇧🇬",
                    burkina_faso: "🇧🇫",
                    burundi: "🇧🇮",
                    cape_verde: "🇨🇻",
                    cambodia: "🇰🇭",
                    cameroon: "🇨🇲",
                    canada: "🇨🇦",
                    canary_islands: "🇮🇨",
                    cayman_islands: "🇰🇾",
                    central_african_republic: "🇨🇫",
                    chad: "🇹🇩",
                    chile: "🇨🇱",
                    cn: "🇨🇳",
                    christmas_island: "🇨🇽",
                    cocos_islands: "🇨🇨",
                    colombia: "🇨🇴",
                    comoros: "🇰🇲",
                    congo_brazzaville: "🇨🇬",
                    congo_kinshasa: "🇨🇩",
                    cook_islands: "🇨🇰",
                    costa_rica: "🇨🇷",
                    cote_divoire: "🇨🇮",
                    croatia: "🇭🇷",
                    cuba: "🇨🇺",
                    curacao: "🇨🇼",
                    cyprus: "🇨🇾",
                    czech_republic: "🇨🇿",
                    denmark: "🇩🇰",
                    djibouti: "🇩🇯",
                    dominica: "🇩🇲",
                    dominican_republic: "🇩🇴",
                    ecuador: "🇪🇨",
                    egypt: "🇪🇬",
                    el_salvador: "🇸🇻",
                    equatorial_guinea: "🇬🇶",
                    eritrea: "🇪🇷",
                    estonia: "🇪🇪",
                    ethiopia: "🇪🇹",
                    eu: "🇪🇺",
                    european_union: "🇪🇺",
                    falkland_islands: "🇫🇰",
                    faroe_islands: "🇫🇴",
                    fiji: "🇫🇯",
                    finland: "🇫🇮",
                    fr: "🇫🇷",
                    french_guiana: "🇬🇫",
                    french_polynesia: "🇵🇫",
                    french_southern_territories: "🇹🇫",
                    gabon: "🇬🇦",
                    gambia: "🇬🇲",
                    georgia: "🇬🇪",
                    de: "🇩🇪",
                    ghana: "🇬🇭",
                    gibraltar: "🇬🇮",
                    greece: "🇬🇷",
                    greenland: "🇬🇱",
                    grenada: "🇬🇩",
                    guadeloupe: "🇬🇵",
                    guam: "🇬🇺",
                    guatemala: "🇬🇹",
                    guernsey: "🇬🇬",
                    guinea: "🇬🇳",
                    guinea_bissau: "🇬🇼",
                    guyana: "🇬🇾",
                    haiti: "🇭🇹",
                    honduras: "🇭🇳",
                    hong_kong: "🇭🇰",
                    hungary: "🇭🇺",
                    iceland: "🇮🇸",
                    india: "🇮🇳",
                    indonesia: "🇮🇩",
                    iran: "🇮🇷",
                    iraq: "🇮🇶",
                    ireland: "🇮🇪",
                    isle_of_man: "🇮🇲",
                    israel: "🇮🇱",
                    it: "🇮🇹",
                    jamaica: "🇯🇲",
                    jp: "🇯🇵",
                    crossed_flags: "🎌",
                    jersey: "🇯🇪",
                    jordan: "🇯🇴",
                    kazakhstan: "🇰🇿",
                    kenya: "🇰🇪",
                    kiribati: "🇰🇮",
                    kosovo: "🇽🇰",
                    kuwait: "🇰🇼",
                    kyrgyzstan: "🇰🇬",
                    laos: "🇱🇦",
                    latvia: "🇱🇻",
                    lebanon: "🇱🇧",
                    lesotho: "🇱🇸",
                    liberia: "🇱🇷",
                    libya: "🇱🇾",
                    liechtenstein: "🇱🇮",
                    lithuania: "🇱🇹",
                    luxembourg: "🇱🇺",
                    macau: "🇲🇴",
                    macedonia: "🇲🇰",
                    madagascar: "🇲🇬",
                    malawi: "🇲🇼",
                    malaysia: "🇲🇾",
                    maldives: "🇲🇻",
                    mali: "🇲🇱",
                    malta: "🇲🇹",
                    marshall_islands: "🇲🇭",
                    martinique: "🇲🇶",
                    mauritania: "🇲🇷",
                    mauritius: "🇲🇺",
                    mayotte: "🇾🇹",
                    mexico: "🇲🇽",
                    micronesia: "🇫🇲",
                    moldova: "🇲🇩",
                    monaco: "🇲🇨",
                    mongolia: "🇲🇳",
                    montenegro: "🇲🇪",
                    montserrat: "🇲🇸",
                    morocco: "🇲🇦",
                    mozambique: "🇲🇿",
                    myanmar: "🇲🇲",
                    namibia: "🇳🇦",
                    nauru: "🇳🇷",
                    nepal: "🇳🇵",
                    netherlands: "🇳🇱",
                    new_caledonia: "🇳🇨",
                    new_zealand: "🇳🇿",
                    nicaragua: "🇳🇮",
                    niger: "🇳🇪",
                    nigeria: "🇳🇬",
                    niue: "🇳🇺",
                    norfolk_island: "🇳🇫",
                    northern_mariana_islands: "🇲🇵",
                    north_korea: "🇰🇵",
                    norway: "🇳🇴",
                    oman: "🇴🇲",
                    pakistan: "🇵🇰",
                    palau: "🇵🇼",
                    palestinian_territories: "🇵🇸",
                    panama: "🇵🇦",
                    papua_new_guinea: "🇵🇬",
                    paraguay: "🇵🇾",
                    peru: "🇵🇪",
                    philippines: "🇵🇭",
                    pitcairn_islands: "🇵🇳",
                    poland: "🇵🇱",
                    portugal: "🇵🇹",
                    puerto_rico: "🇵🇷",
                    qatar: "🇶🇦",
                    reunion: "🇷🇪",
                    romania: "🇷🇴",
                    ru: "🇷🇺",
                    rwanda: "🇷🇼",
                    st_barthelemy: "🇧🇱",
                    st_helena: "🇸🇭",
                    st_kitts_nevis: "🇰🇳",
                    st_lucia: "🇱🇨",
                    st_pierre_miquelon: "🇵🇲",
                    st_vincent_grenadines: "🇻🇨",
                    samoa: "🇼🇸",
                    san_marino: "🇸🇲",
                    sao_tome_principe: "🇸🇹",
                    saudi_arabia: "🇸🇦",
                    senegal: "🇸🇳",
                    serbia: "🇷🇸",
                    seychelles: "🇸🇨",
                    sierra_leone: "🇸🇱",
                    singapore: "🇸🇬",
                    sint_maarten: "🇸🇽",
                    slovakia: "🇸🇰",
                    slovenia: "🇸🇮",
                    solomon_islands: "🇸🇧",
                    somalia: "🇸🇴",
                    south_africa: "🇿🇦",
                    south_georgia_south_sandwich_islands: "🇬🇸",
                    kr: "🇰🇷",
                    south_sudan: "🇸🇸",
                    es: "🇪🇸",
                    sri_lanka: "🇱🇰",
                    sudan: "🇸🇩",
                    suriname: "🇸🇷",
                    swaziland: "🇸🇿",
                    sweden: "🇸🇪",
                    switzerland: "🇨🇭",
                    syria: "🇸🇾",
                    taiwan: "🇹🇼",
                    tajikistan: "🇹🇯",
                    tanzania: "🇹🇿",
                    thailand: "🇹🇭",
                    timor_leste: "🇹🇱",
                    togo: "🇹🇬",
                    tokelau: "🇹🇰",
                    tonga: "🇹🇴",
                    trinidad_tobago: "🇹🇹",
                    tunisia: "🇹🇳",
                    tr: "🇹🇷",
                    turkmenistan: "🇹🇲",
                    turks_caicos_islands: "🇹🇨",
                    tuvalu: "🇹🇻",
                    uganda: "🇺🇬",
                    ukraine: "🇺🇦",
                    united_arab_emirates: "🇦🇪",
                    gb: "🇬🇧",
                    uk: "🇬🇧",
                    us: "🇺🇸",
                    us_virgin_islands: "🇻🇮",
                    uruguay: "🇺🇾",
                    uzbekistan: "🇺🇿",
                    vanuatu: "🇻🇺",
                    vatican_city: "🇻🇦",
                    venezuela: "🇻🇪",
                    vietnam: "🇻🇳",
                    wallis_futuna: "🇼🇫",
                    western_sahara: "🇪🇭",
                    yemen: "🇾🇪",
                    zambia: "🇿🇲",
                    zimbabwe: "🇿🇼"
                }
            }, function (e, t, n) {
                "use strict";
                e.exports = {
                    angry: [">:(", ">:-("],
                    blush: [':")', ':-")'],
                    broken_heart: ["</3", "<\\3"],
                    confused: [":/", ":-/"],
                    cry: [":'(", ":'-(", ":,(", ":,-("],
                    frowning: [":(", ":-("],
                    heart: ["<3"],
                    imp: ["]:(", "]:-("],
                    innocent: ["o:)", "O:)", "o:-)", "O:-)", "0:)", "0:-)"],
                    joy: [":')", ":'-)", ":,)", ":,-)", ":'D", ":'-D", ":,D", ":,-D"],
                    kissing: [":*", ":-*"],
                    laughing: ["x-)", "X-)"],
                    neutral_face: [":|", ":-|"],
                    open_mouth: [":o", ":-o", ":O", ":-O"],
                    rage: [":@", ":-@"],
                    smile: [":D", ":-D"],
                    smiley: [":)", ":-)"],
                    smiling_imp: ["]:)", "]:-)"],
                    sob: [":,'(", ":,'-(", ";(", ";-("],
                    stuck_out_tongue: [":P", ":-P"],
                    sunglasses: ["8-)", "B-)"],
                    sweat: [",:(", ",:-("],
                    sweat_smile: [",:)", ",:-)"],
                    unamused: [":s", ":-S", ":z", ":-Z", ":$", ":-$"],
                    wink: [";)", ";-)"]
                }
            }, function (e, t, n) {
                "use strict";
                e.exports = function (e) {
                    var t, n = e.defs;
                    e.enabled.length && (n = Object.keys(n).reduce(function (t, r) {
                        return e.enabled.indexOf(r) >= 0 && (t[r] = n[r]), t
                    }, {})), t = Object.keys(e.shortcuts).reduce(function (t, r) {
                        return n[r] ? Array.isArray(e.shortcuts[r]) ? (e.shortcuts[r].forEach(function (e) {
                            t[e] = r
                        }), t) : (t[e.shortcuts[r]] = r, t) : t
                    }, {});
                    var r = Object.keys(n).map(function (e) {
                        return ":" + e + ":"
                    }).concat(Object.keys(t)).sort().reverse().map(function (e) {
                        return function (e) {
                            return e.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&")
                        }(e)
                    }).join("|"), o = RegExp(r), i = RegExp(r, "g");
                    return {defs: n, shortcuts: t, scanRE: o, replaceRE: i}
                }
            }, function (e, t, n) {
                "use strict";
                e.exports = function (e, t) {
                    return e[t].content
                }
            }, function (e, t, n) {
                "use strict";
                e.exports = function (e, t, n, r, o) {
                    function i(e, r, i) {
                        var a, s = 0, c = [];
                        return e.replace(o, function (r, o, u) {
                            var p;
                            if (n.hasOwnProperty(r)) {
                                if (p = n[r], o > 0 && !l.test(u[o - 1]))return;
                                if (o + r.length < u.length && !l.test(u[o + r.length]))return
                            } else p = r.slice(1, -1);
                            o > s && (a = new i("text", "", 0), a.content = e.slice(s, o), c.push(a)), (a = new i("emoji", "", 0)).markup = p, a.content = t[p], c.push(a), s = o + r.length
                        }), s < e.length && (a = new i("text", "", 0), a.content = e.slice(s), c.push(a)), c
                    }

                    var a = e.utils.arrayReplaceAt, s = e.utils.lib.ucmicro,
                        l = new RegExp([s.Z.source, s.P.source, s.Cc.source].join("|"));
                    return function (e) {
                        var t, n, o, s, l, c = e.tokens, u = 0;
                        for (n = 0, o = c.length; n < o; n++)if ("inline" === c[n].type)for (s = c[n].children, t = s.length - 1; t >= 0; t--)"link_open" !== (l = s[t]).type && "link_close" !== l.type || "auto" === l.info && (u -= l.nesting), "text" === l.type && 0 === u && r.test(l.content) && (c[n].children = s = a(s, t, i(l.content, l.level, e.Token)))
                    }
                }
            }, function (e, t, n) {
                "use strict";
                function r(e, t, n, r) {
                    var o = Number(e[t].meta.id + 1).toString(), i = "";
                    return "string" == typeof r.docId && (i = "-" + r.docId + "-"), i + o
                }

                function o(e, t) {
                    var n = Number(e[t].meta.id + 1).toString();
                    return e[t].meta.subId > 0 && (n += ":" + e[t].meta.subId), "[" + n + "]"
                }

                function i(e, t, n, r, o) {
                    var i = o.rules.footnote_anchor_name(e, t, n, r, o), a = o.rules.footnote_caption(e, t, n, r, o),
                        s = i;
                    return e[t].meta.subId > 0 && (s += ":" + e[t].meta.subId), '<sup class="footnote-ref"><a href="#fn' + i + '" id="fnref' + s + '">' + a + "</a></sup>"
                }

                function a(e, t, n) {
                    return (n.xhtmlOut ? '<hr class="footnotes-sep" />\n' : '<hr class="footnotes-sep">\n') + '<section class="footnotes">\n<ol class="footnotes-list">\n'
                }

                function s() {
                    return "</ol>\n</section>\n"
                }

                function l(e, t, n, r, o) {
                    var i = o.rules.footnote_anchor_name(e, t, n, r, o);
                    return e[t].meta.subId > 0 && (i += ":" + e[t].meta.subId), '<li id="fn' + i + '" class="footnote-item">'
                }

                function c() {
                    return "</li>\n"
                }

                function u(e, t, n, r, o) {
                    var i = o.rules.footnote_anchor_name(e, t, n, r, o);
                    return e[t].meta.subId > 0 && (i += ":" + e[t].meta.subId), ' <a href="#fnref' + i + '" class="footnote-backref">↩︎</a>'
                }

                e.exports = function (e) {
                    var t = e.helpers.parseLinkLabel, n = e.utils.isSpace;
                    e.renderer.rules.footnote_ref = i, e.renderer.rules.footnote_block_open = a, e.renderer.rules.footnote_block_close = s, e.renderer.rules.footnote_open = l, e.renderer.rules.footnote_close = c, e.renderer.rules.footnote_anchor = u, e.renderer.rules.footnote_caption = o, e.renderer.rules.footnote_anchor_name = r, e.block.ruler.before("reference", "footnote_def", function (e, t, r, o) {
                        var i, a, s, l, c, u, p, _, d, h, f, m = e.bMarks[t] + e.tShift[t], g = e.eMarks[t];
                        if (m + 4 > g)return !1;
                        if (91 !== e.src.charCodeAt(m))return !1;
                        if (94 !== e.src.charCodeAt(m + 1))return !1;
                        for (c = m + 2; c < g; c++) {
                            if (32 === e.src.charCodeAt(c))return !1;
                            if (93 === e.src.charCodeAt(c))break
                        }
                        if (c === m + 2)return !1;
                        if (c + 1 >= g || 58 !== e.src.charCodeAt(++c))return !1;
                        if (o)return !0;
                        for (c++, e.env.footnotes || (e.env.footnotes = {}), e.env.footnotes.refs || (e.env.footnotes.refs = {}), u = e.src.slice(m + 2, c - 2), e.env.footnotes.refs[":" + u] = -1, (p = new e.Token("footnote_reference_open", "", 1)).meta = {label: u}, p.level = e.level++, e.tokens.push(p), i = e.bMarks[t], a = e.tShift[t], s = e.sCount[t], l = e.parentType, f = c, _ = d = e.sCount[t] + c - (e.bMarks[t] + e.tShift[t]); c < g && (h = e.src.charCodeAt(c), n(h));)9 === h ? d += 4 - d % 4 : d++, c++;
                        return e.tShift[t] = c - f, e.sCount[t] = d - _, e.bMarks[t] = f, e.blkIndent += 4, e.parentType = "footnote", e.sCount[t] < e.blkIndent && (e.sCount[t] += e.blkIndent), e.md.block.tokenize(e, t, r, !0), e.parentType = l, e.blkIndent -= 4, e.tShift[t] = a, e.sCount[t] = s, e.bMarks[t] = i, p = new e.Token("footnote_reference_close", "", -1), p.level = --e.level, e.tokens.push(p), !0
                    }, {alt: ["paragraph", "reference"]}), e.inline.ruler.after("image", "footnote_inline", function (e, n) {
                        var r, o, i, a, s, l = e.posMax, c = e.pos;
                        return !(c + 2 >= l || 94 !== e.src.charCodeAt(c) || 91 !== e.src.charCodeAt(c + 1) || (r = c + 2, (o = t(e, c + 1)) < 0 || (n || (e.env.footnotes || (e.env.footnotes = {}), e.env.footnotes.list || (e.env.footnotes.list = []), i = e.env.footnotes.list.length, e.md.inline.parse(e.src.slice(r, o), e.md, e.env, s = []), a = e.push("footnote_ref", "", 0), a.meta = {id: i}, e.env.footnotes.list[i] = {tokens: s}), e.pos = o + 1, e.posMax = l, 0)))
                    }), e.inline.ruler.after("footnote_inline", "footnote_ref", function (e, t) {
                        var n, r, o, i, a, s = e.posMax, l = e.pos;
                        if (l + 3 > s)return !1;
                        if (!e.env.footnotes || !e.env.footnotes.refs)return !1;
                        if (91 !== e.src.charCodeAt(l))return !1;
                        if (94 !== e.src.charCodeAt(l + 1))return !1;
                        for (r = l + 2; r < s; r++) {
                            if (32 === e.src.charCodeAt(r))return !1;
                            if (10 === e.src.charCodeAt(r))return !1;
                            if (93 === e.src.charCodeAt(r))break
                        }
                        return !(r === l + 2 || r >= s || (r++, n = e.src.slice(l + 2, r - 1), void 0 === e.env.footnotes.refs[":" + n] || (t || (e.env.footnotes.list || (e.env.footnotes.list = []), e.env.footnotes.refs[":" + n] < 0 ? (o = e.env.footnotes.list.length, e.env.footnotes.list[o] = {
                            label: n,
                            count: 0
                        }, e.env.footnotes.refs[":" + n] = o) : o = e.env.footnotes.refs[":" + n], i = e.env.footnotes.list[o].count, e.env.footnotes.list[o].count++, a = e.push("footnote_ref", "", 0), a.meta = {
                            id: o,
                            subId: i,
                            label: n
                        }), e.pos = r, e.posMax = s, 0)))
                    }), e.core.ruler.after("inline", "footnote_tail", function (e) {
                        var t, n, r, o, i, a, s, l, c, u, p = !1, _ = {};
                        if (e.env.footnotes && (e.tokens = e.tokens.filter(function (e) {
                                return "footnote_reference_open" === e.type ? (p = !0, c = [], u = e.meta.label, !1) : "footnote_reference_close" === e.type ? (p = !1, _[":" + u] = c, !1) : (p && c.push(e), !p)
                            }), e.env.footnotes.list)) {
                            for (a = e.env.footnotes.list, s = new e.Token("footnote_block_open", "", 1), e.tokens.push(s), t = 0, n = a.length; t < n; t++) {
                                for ((s = new e.Token("footnote_open", "", 1)).meta = {
                                    id: t,
                                    label: a[t].label
                                }, e.tokens.push(s), a[t].tokens ? (l = [], s = new e.Token("paragraph_open", "p", 1), s.block = !0, l.push(s), s = new e.Token("inline", "", 0), s.children = a[t].tokens, s.content = "", l.push(s), s = new e.Token("paragraph_close", "p", -1), s.block = !0, l.push(s)) : a[t].label && (l = _[":" + a[t].label]), e.tokens = e.tokens.concat(l), i = "paragraph_close" === e.tokens[e.tokens.length - 1].type ? e.tokens.pop() : null, o = a[t].count > 0 ? a[t].count : 1, r = 0; r < o; r++)s = new e.Token("footnote_anchor", "", 0), s.meta = {
                                    id: t,
                                    subId: r,
                                    label: a[t].label
                                }, e.tokens.push(s);
                                i && e.tokens.push(i), s = new e.Token("footnote_close", "", -1), e.tokens.push(s)
                            }
                            s = new e.Token("footnote_block_close", "", -1), e.tokens.push(s)
                        }
                    })
                }
            }, function (e, t) {
                e.exports = function (e, t) {
                    void 0 === (t = t || {}).highlighted && (t.highlighted = !0), void 0 === t.hljs && (t.hljs = "auto"), "function" != typeof t.langCheck && (t.langCheck = function () {
                    }), e.options.highlight = function (n, r) {
                        var o = t.hljs;
                        if ("auto" === t.hljs && (o = window.hljs), t.highlighted && r && o) {
                            if (o.getLanguage(r))return '<pre><div class="hljs"><code class="' + e.options.langPrefix + r + '">' + o.highlight(r, n, !0).value + "</code></div></pre>";
                            "function" == typeof t.langCheck && t.langCheck(r)
                        }
                        return '<pre><code class="' + e.options.langPrefix + r + '">' + e.utils.escapeHtml(n) + "</code></pre>"
                    }
                }
            }, function (e, t) {
                e.exports = function (e, t) {
                    e.image_add = function (t, n) {
                        e.__image instanceof Object || (e.__image = {}), e.__image[t] = n
                    }, e.image_del = function (t) {
                        e.__image instanceof Object || (e.__image = {}), delete e.__image[t]
                    };
                    var n = e.renderer.rules.image;
                    e.renderer.rules.image = function (t, r, o, i, a) {
                        var s = t[r].attrs;
                        if (e.__image instanceof Object)for (var l = 0; l < s.length; l++)if ("src" == s[l][0] && e.__image.hasOwnProperty(t[r].attrs[l][1])) {
                            s.push(["rel", s[l][1]]), s[l][1] = e.__image[t[r].attrs[l][1]];
                            break
                        }
                        return n(t, r, o, i, a)
                    }
                }
            }, function (e, t, n) {
                "use strict";
                e.exports = function (e) {
                    e.inline.ruler.before("emphasis", "ins", function (e, t) {
                        var n, r, o, i, a, s = e.pos, l = e.src.charCodeAt(s);
                        if (t)return !1;
                        if (43 !== l)return !1;
                        if (r = e.scanDelims(e.pos, !0), i = r.length, a = String.fromCharCode(l), i < 2)return !1;
                        for (i % 2 && (o = e.push("text", "", 0), o.content = a, i--), n = 0; n < i; n += 2)o = e.push("text", "", 0), o.content = a + a, e.delimiters.push({
                            marker: l,
                            jump: n,
                            token: e.tokens.length - 1,
                            level: e.level,
                            end: -1,
                            open: r.can_open,
                            close: r.can_close
                        });
                        return e.pos += r.length, !0
                    }), e.inline.ruler2.before("emphasis", "ins", function (e) {
                        var t, n, r, o, i, a = [], s = e.delimiters, l = e.delimiters.length;
                        for (t = 0; t < l; t++)43 === (r = s[t]).marker && -1 !== r.end && (o = s[r.end], i = e.tokens[r.token], i.type = "ins_open", i.tag = "ins", i.nesting = 1, i.markup = "++", i.content = "", i = e.tokens[o.token], i.type = "ins_close", i.tag = "ins", i.nesting = -1, i.markup = "++", i.content = "", "text" === e.tokens[o.token - 1].type && "+" === e.tokens[o.token - 1].content && a.push(o.token - 1));
                        for (; a.length;) {
                            for (n = (t = a.pop()) + 1; n < e.tokens.length && "ins_close" === e.tokens[n].type;)n++;
                            t !== --n && (i = e.tokens[n], e.tokens[n] = e.tokens[t], e.tokens[t] = i)
                        }
                    })
                }
            }, function (e, t, n) {
                "use strict";
                function r(e, t) {
                    var n, r, o = e.posMax, i = !0, a = !0;
                    return n = t > 0 ? e.src.charCodeAt(t - 1) : -1, r = t + 1 <= o ? e.src.charCodeAt(t + 1) : -1, (32 === n || 9 === n || r >= 48 && r <= 57) && (a = !1), 32 !== r && 9 !== r || (i = !1), {
                        can_open: i,
                        can_close: a
                    }
                }

                function o(e, t) {
                    if (!a && window.katex && (a = window.katex), !a)return !1;
                    var n, o, i, s;
                    if ("$" !== e.src[e.pos])return !1;
                    if (!r(e, e.pos).can_open)return t || (e.pending += "$"), e.pos += 1, !0;
                    for (o = n = e.pos + 1; -1 !== (o = e.src.indexOf("$", o));) {
                        for (s = o - 1; "\\" === e.src[s];)s -= 1;
                        if ((o - s) % 2 == 1)break;
                        o += 1
                    }
                    return -1 === o ? (t || (e.pending += "$"), e.pos = n, !0) : o - n == 0 ? (t || (e.pending += "$$"), e.pos = n + 1, !0) : r(e, o).can_close ? (t || (i = e.push("math_inline", "math", 0), i.markup = "$", i.content = e.src.slice(n, o)), e.pos = o + 1, !0) : (t || (e.pending += "$"), e.pos = n, !0)
                }

                function i(e, t, n, r) {
                    if (!a && window.katex && (a = window.katex), !a)return !1;
                    var o, i, s, l, c, u = !1, p = e.bMarks[t] + e.tShift[t], _ = e.eMarks[t];
                    if (p + 2 > _)return !1;
                    if ("$$" !== e.src.slice(p, p + 2))return !1;
                    if (p += 2, o = e.src.slice(p, _), r)return !0;
                    for ("$$" === o.trim().slice(-2) && (o = o.trim().slice(0, -2), u = !0), s = t; !(u || ++s >= n || (p = e.bMarks[s] + e.tShift[s], _ = e.eMarks[s], p < _ && e.tShift[s] < e.blkIndent));)"$$" === e.src.slice(p, _).trim().slice(-2) && (l = e.src.slice(0, _).lastIndexOf("$$"), i = e.src.slice(p, l), u = !0);
                    return e.line = s + 1, c = e.push("math_block", "math", 0), c.block = !0, c.content = (o && o.trim() ? o + "\n" : "") + e.getLines(t + 1, s, e.tShift[t], !0) + (i && i.trim() ? i : ""), c.map = [t, e.line], c.markup = "$$", !0
                }

                var a = null;
                e.exports = function (e, t) {
                    t = t || {};
                    e.inline.ruler.after("escape", "math_inline", o), e.block.ruler.after("blockquote", "math_block", i, {alt: ["paragraph", "reference", "blockquote", "list"]}), e.renderer.rules.math_inline = function (e, n) {
                        return function (e) {
                            !a && window.katex && (a = window.katex), t.displayMode = !1;
                            try {
                                return a.renderToString(e, t)
                            } catch (n) {
                                return t.throwOnError && console.log(n), e
                            }
                        }(e[n].content)
                    }, e.renderer.rules.math_block = function (e, n) {
                        return function (e) {
                                !a && window.katex && (a = window.katex), t.displayMode = !0;
                                try {
                                    return "<p>" + a.renderToString(e, t) + "</p>"
                                } catch (n) {
                                    return t.throwOnError && console.log(n), e
                                }
                            }(e[n].content) + "\n"
                    }
                }
            }, function (e, t, n) {
                "use strict";
                e.exports = function (e) {
                    e.inline.ruler.before("emphasis", "mark", function (e, t) {
                        var n, r, o, i, a, s = e.pos, l = e.src.charCodeAt(s);
                        if (t)return !1;
                        if (61 !== l)return !1;
                        if (r = e.scanDelims(e.pos, !0), i = r.length, a = String.fromCharCode(l), i < 2)return !1;
                        for (i % 2 && (o = e.push("text", "", 0), o.content = a, i--), n = 0; n < i; n += 2)o = e.push("text", "", 0), o.content = a + a, e.delimiters.push({
                            marker: l,
                            jump: n,
                            token: e.tokens.length - 1,
                            level: e.level,
                            end: -1,
                            open: r.can_open,
                            close: r.can_close
                        });
                        return e.pos += r.length, !0
                    }), e.inline.ruler2.before("emphasis", "mark", function (e) {
                        var t, n, r, o, i, a = [], s = e.delimiters, l = e.delimiters.length;
                        for (t = 0; t < l; t++)61 === (r = s[t]).marker && -1 !== r.end && (o = s[r.end], i = e.tokens[r.token], i.type = "mark_open", i.tag = "mark", i.nesting = 1, i.markup = "==", i.content = "", i = e.tokens[o.token], i.type = "mark_close", i.tag = "mark", i.nesting = -1, i.markup = "==", i.content = "", "text" === e.tokens[o.token - 1].type && "=" === e.tokens[o.token - 1].content && a.push(o.token - 1));
                        for (; a.length;) {
                            for (n = (t = a.pop()) + 1; n < e.tokens.length && "mark_close" === e.tokens[n].type;)n++;
                            t !== --n && (i = e.tokens[n], e.tokens[n] = e.tokens[t], e.tokens[t] = i)
                        }
                    })
                }
            }, function (e, t, n) {
                "use strict";
                function r(e, t) {
                    var n, r, i, a = e.posMax, s = e.pos;
                    if (126 !== e.src.charCodeAt(s))return !1;
                    if (t)return !1;
                    if (s + 2 >= a)return !1;
                    for (e.pos = s + 1; e.pos < a;) {
                        if (126 === e.src.charCodeAt(e.pos)) {
                            n = !0;
                            break
                        }
                        e.md.inline.skipToken(e)
                    }
                    return n && s + 1 !== e.pos ? (r = e.src.slice(s + 1, e.pos)).match(/(^|[^\\])(\\\\)*\s/) ? (e.pos = s, !1) : (e.posMax = e.pos, e.pos = s + 1, i = e.push("sub_open", "sub", 1), i.markup = "~", i = e.push("text", "", 0), i.content = r.replace(o, "$1"), i = e.push("sub_close", "sub", -1), i.markup = "~", e.pos = e.posMax + 1, e.posMax = a, !0) : (e.pos = s, !1)
                }

                var o = /\\([ \\!"#$%&'()*+,.\/:;<=>?@[\]^_`{|}~-])/g;
                e.exports = function (e) {
                    e.inline.ruler.after("emphasis", "sub", r)
                }
            }, function (e, t, n) {
                "use strict";
                function r(e, t) {
                    var n, r, i, a = e.posMax, s = e.pos;
                    if (94 !== e.src.charCodeAt(s))return !1;
                    if (t)return !1;
                    if (s + 2 >= a)return !1;
                    for (e.pos = s + 1; e.pos < a;) {
                        if (94 === e.src.charCodeAt(e.pos)) {
                            n = !0;
                            break
                        }
                        e.md.inline.skipToken(e)
                    }
                    return n && s + 1 !== e.pos ? (r = e.src.slice(s + 1, e.pos)).match(/(^|[^\\])(\\\\)*\s/) ? (e.pos = s, !1) : (e.posMax = e.pos, e.pos = s + 1, i = e.push("sup_open", "sup", 1), i.markup = "^", i = e.push("text", "", 0), i.content = r.replace(o, "$1"), i = e.push("sup_close", "sup", -1), i.markup = "^", e.pos = e.posMax + 1, e.posMax = a, !0) : (e.pos = s, !1)
                }

                var o = /\\([ \\!"#$%&'()*+,.\/:;<=>?@[\]^_`{|}~-])/g;
                e.exports = function (e) {
                    e.inline.ruler.after("emphasis", "sup", r)
                }
            }, function (e, t, n) {
                "use strict";
                e.exports = n(131)
            }, function (e, t, n) {
                "use strict";
                e.exports = ["address", "article", "aside", "base", "basefont", "blockquote", "body", "caption", "center", "col", "colgroup", "dd", "details", "dialog", "dir", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hr", "html", "iframe", "legend", "li", "link", "main", "menu", "menuitem", "meta", "nav", "noframes", "ol", "optgroup", "option", "p", "param", "section", "source", "summary", "table", "tbody", "td", "tfoot", "th", "thead", "title", "tr", "track", "ul"]
            }, function (e, t, n) {
                "use strict";
                t.parseLinkLabel = n(129), t.parseLinkDestination = n(128), t.parseLinkTitle = n(130)
            }, function (e, t, n) {
                "use strict";
                var r = n(0).isSpace, o = n(0).unescapeAll;
                e.exports = function (e, t, n) {
                    var i, a, s = t, l = {ok: !1, pos: 0, lines: 0, str: ""};
                    if (60 === e.charCodeAt(t)) {
                        for (t++; t < n;) {
                            if (10 === (i = e.charCodeAt(t)) || r(i))return l;
                            if (62 === i)return l.pos = t + 1, l.str = o(e.slice(s + 1, t)), l.ok = !0, l;
                            92 === i && t + 1 < n ? t += 2 : t++
                        }
                        return l
                    }
                    for (a = 0; t < n && 32 !== (i = e.charCodeAt(t)) && !(i < 32 || 127 === i);)if (92 === i && t + 1 < n) t += 2; else {
                        if (40 === i && a++, 41 === i) {
                            if (0 === a)break;
                            a--
                        }
                        t++
                    }
                    return s === t ? l : 0 !== a ? l : (l.str = o(e.slice(s, t)), l.lines = 0, l.pos = t, l.ok = !0, l)
                }
            }, function (e, t, n) {
                "use strict";
                e.exports = function (e, t, n) {
                    var r, o, i, a, s = -1, l = e.posMax, c = e.pos;
                    for (e.pos = t + 1, r = 1; e.pos < l;) {
                        if (93 === (i = e.src.charCodeAt(e.pos)) && 0 == --r) {
                            o = !0;
                            break
                        }
                        if (a = e.pos, e.md.inline.skipToken(e), 91 === i)if (a === e.pos - 1) r++; else if (n)return e.pos = c, -1
                    }
                    return o && (s = e.pos), e.pos = c, s
                }
            }, function (e, t, n) {
                "use strict";
                var r = n(0).unescapeAll;
                e.exports = function (e, t, n) {
                    var o, i, a = 0, s = t, l = {ok: !1, pos: 0, lines: 0, str: ""};
                    if (t >= n)return l;
                    if (34 !== (i = e.charCodeAt(t)) && 39 !== i && 40 !== i)return l;
                    for (t++, 40 === i && (i = 41); t < n;) {
                        if ((o = e.charCodeAt(t)) === i)return l.pos = t + 1, l.lines = a, l.str = r(e.slice(s + 1, t)), l.ok = !0, l;
                        10 === o ? a++ : 92 === o && t + 1 < n && (t++, 10 === e.charCodeAt(t) && a++), t++
                    }
                    return l
                }
            }, function (e, t, n) {
                "use strict";
                function r(e) {
                    var t = e.trim().toLowerCase();
                    return !g.test(t) || !!b.test(t)
                }

                function o(e) {
                    var t = h.parse(e, !0);
                    if (t.hostname && (!t.protocol || v.indexOf(t.protocol) >= 0))try {
                        t.hostname = f.toASCII(t.hostname)
                    } catch (e) {
                    }
                    return h.encode(h.format(t))
                }

                function i(e) {
                    var t = h.parse(e, !0);
                    if (t.hostname && (!t.protocol || v.indexOf(t.protocol) >= 0))try {
                        t.hostname = f.toUnicode(t.hostname)
                    } catch (e) {
                    }
                    return h.decode(h.format(t))
                }

                function a(e, t) {
                    if (!(this instanceof a))return new a(e, t);
                    t || s.isString(e) || (t = e || {}, e = "default"), this.inline = new _, this.block = new p, this.core = new u, this.renderer = new c, this.linkify = new d, this.validateLink = r, this.normalizeLink = o, this.normalizeLinkText = i, this.utils = s, this.helpers = s.assign({}, l), this.options = {}, this.configure(e), t && this.set(t)
                }

                var s = n(0), l = n(127), c = n(138), u = n(133), p = n(132), _ = n(134), d = n(106), h = n(50),
                    f = n(174), m = {default: n(136), zero: n(137), commonmark: n(135)},
                    g = /^(vbscript|javascript|file|data):/, b = /^data:image\/(gif|png|jpeg|webp);/,
                    v = ["http:", "https:", "mailto:"];
                a.prototype.set = function (e) {
                    return s.assign(this.options, e), this
                }, a.prototype.configure = function (e) {
                    var t, n = this;
                    if (s.isString(e) && (t = e, !(e = m[t])))throw new Error('Wrong `markdown-it` preset "' + t + '", check name');
                    if (!e)throw new Error("Wrong `markdown-it` preset, can't be empty");
                    return e.options && n.set(e.options), e.components && Object.keys(e.components).forEach(function (t) {
                        e.components[t].rules && n[t].ruler.enableOnly(e.components[t].rules), e.components[t].rules2 && n[t].ruler2.enableOnly(e.components[t].rules2)
                    }), this
                }, a.prototype.enable = function (e, t) {
                    var n = [];
                    Array.isArray(e) || (e = [e]), ["core", "block", "inline"].forEach(function (t) {
                        n = n.concat(this[t].ruler.enable(e, !0))
                    }, this), n = n.concat(this.inline.ruler2.enable(e, !0));
                    var r = e.filter(function (e) {
                        return n.indexOf(e) < 0
                    });
                    if (r.length && !t)throw new Error("MarkdownIt. Failed to enable unknown rule(s): " + r);
                    return this
                }, a.prototype.disable = function (e, t) {
                    var n = [];
                    Array.isArray(e) || (e = [e]), ["core", "block", "inline"].forEach(function (t) {
                        n = n.concat(this[t].ruler.disable(e, !0))
                    }, this), n = n.concat(this.inline.ruler2.disable(e, !0));
                    var r = e.filter(function (e) {
                        return n.indexOf(e) < 0
                    });
                    if (r.length && !t)throw new Error("MarkdownIt. Failed to disable unknown rule(s): " + r);
                    return this
                }, a.prototype.use = function (e) {
                    var t = [this].concat(Array.prototype.slice.call(arguments, 1));
                    return e.apply(e, t), this
                }, a.prototype.parse = function (e, t) {
                    if ("string" != typeof e)throw new Error("Input data should be a String");
                    var n = new this.core.State(e, this, t);
                    return this.core.process(n), n.tokens
                }, a.prototype.render = function (e, t) {
                    return t = t || {}, this.renderer.render(this.parse(e, t), this.options, t)
                }, a.prototype.parseInline = function (e, t) {
                    var n = new this.core.State(e, this, t);
                    return n.inlineMode = !0, this.core.process(n), n.tokens
                }, a.prototype.renderInline = function (e, t) {
                    return t = t || {}, this.renderer.render(this.parseInline(e, t), this.options, t)
                }, e.exports = a
            }, function (e, t, n) {
                "use strict";
                function r() {
                    this.ruler = new o;
                    for (var e = 0; e < i.length; e++)this.ruler.push(i[e][0], i[e][1], {alt: (i[e][2] || []).slice()})
                }

                var o = n(31),
                    i = [["table", n(150), ["paragraph", "reference"]], ["code", n(140)], ["fence", n(141), ["paragraph", "reference", "blockquote", "list"]], ["blockquote", n(139), ["paragraph", "reference", "blockquote", "list"]], ["hr", n(143), ["paragraph", "reference", "blockquote", "list"]], ["list", n(146), ["paragraph", "reference", "blockquote"]], ["reference", n(148)], ["heading", n(142), ["paragraph", "reference", "blockquote"]], ["lheading", n(145)], ["html_block", n(144), ["paragraph", "reference", "blockquote"]], ["paragraph", n(147)]];
                r.prototype.tokenize = function (e, t, n) {
                    for (var r, o = this.ruler.getRules(""), i = o.length, a = t, s = !1, l = e.md.options.maxNesting; a < n && (e.line = a = e.skipEmptyLines(a), !(a >= n)) && !(e.sCount[a] < e.blkIndent);) {
                        if (e.level >= l) {
                            e.line = n;
                            break
                        }
                        for (r = 0; r < i && !o[r](e, a, n, !1); r++);
                        e.tight = !s, e.isEmpty(e.line - 1) && (s = !0), (a = e.line) < n && e.isEmpty(a) && (s = !0, a++, e.line = a)
                    }
                }, r.prototype.parse = function (e, t, n, r) {
                    var o;
                    e && (o = new this.State(e, t, n, r), this.tokenize(o, o.line, o.lineMax))
                }, r.prototype.State = n(149), e.exports = r
            }, function (e, t, n) {
                "use strict";
                function r() {
                    this.ruler = new o;
                    for (var e = 0; e < i.length; e++)this.ruler.push(i[e][0], i[e][1])
                }

                var o = n(31),
                    i = [["normalize", n(154)], ["block", n(151)], ["inline", n(152)], ["linkify", n(153)], ["replacements", n(155)], ["smartquotes", n(156)]];
                r.prototype.process = function (e) {
                    var t, n, r;
                    for (t = 0, n = (r = this.ruler.getRules("")).length; t < n; t++)r[t](e)
                }, r.prototype.State = n(157), e.exports = r
            }, function (e, t, n) {
                "use strict";
                function r() {
                    var e;
                    for (this.ruler = new o, e = 0; e < i.length; e++)this.ruler.push(i[e][0], i[e][1]);
                    for (this.ruler2 = new o, e = 0; e < a.length; e++)this.ruler2.push(a[e][0], a[e][1])
                }

                var o = n(31),
                    i = [["text", n(168)], ["newline", n(166)], ["escape", n(162)], ["backticks", n(159)], ["strikethrough", n(49).tokenize], ["emphasis", n(48).tokenize], ["link", n(165)], ["image", n(164)], ["autolink", n(158)], ["html_inline", n(163)], ["entity", n(161)]],
                    a = [["balance_pairs", n(160)], ["strikethrough", n(49).postProcess], ["emphasis", n(48).postProcess], ["text_collapse", n(169)]];
                r.prototype.skipToken = function (e) {
                    var t, n, r = e.pos, o = this.ruler.getRules(""), i = o.length, a = e.md.options.maxNesting,
                        s = e.cache;
                    if (void 0 === s[r]) {
                        if (e.level < a)for (n = 0; n < i && (e.level++, t = o[n](e, !0), e.level--, !t); n++); else e.pos = e.posMax;
                        t || e.pos++, s[r] = e.pos
                    } else e.pos = s[r]
                }, r.prototype.tokenize = function (e) {
                    for (var t, n, r = this.ruler.getRules(""), o = r.length, i = e.posMax, a = e.md.options.maxNesting; e.pos < i;) {
                        if (e.level < a)for (n = 0; n < o && !(t = r[n](e, !1)); n++);
                        if (t) {
                            if (e.pos >= i)break
                        } else e.pending += e.src[e.pos++]
                    }
                    e.pending && e.pushPending()
                }, r.prototype.parse = function (e, t, n, r) {
                    var o, i, a, s = new this.State(e, t, n, r);
                    for (this.tokenize(s), a = (i = this.ruler2.getRules("")).length, o = 0; o < a; o++)i[o](s)
                }, r.prototype.State = n(167), e.exports = r
            }, function (e, t, n) {
                "use strict";
                e.exports = {
                    options: {
                        html: !0,
                        xhtmlOut: !0,
                        breaks: !1,
                        langPrefix: "language-",
                        linkify: !1,
                        typographer: !1,
                        quotes: "“”‘’",
                        highlight: null,
                        maxNesting: 20
                    },
                    components: {
                        core: {rules: ["normalize", "block", "inline"]},
                        block: {rules: ["blockquote", "code", "fence", "heading", "hr", "html_block", "lheading", "list", "reference", "paragraph"]},
                        inline: {
                            rules: ["autolink", "backticks", "emphasis", "entity", "escape", "html_inline", "image", "link", "newline", "text"],
                            rules2: ["balance_pairs", "emphasis", "text_collapse"]
                        }
                    }
                }
            }, function (e, t, n) {
                "use strict";
                e.exports = {
                    options: {
                        html: !1,
                        xhtmlOut: !1,
                        breaks: !1,
                        langPrefix: "language-",
                        linkify: !1,
                        typographer: !1,
                        quotes: "“”‘’",
                        highlight: null,
                        maxNesting: 100
                    }, components: {core: {}, block: {}, inline: {}}
                }
            }, function (e, t, n) {
                "use strict";
                e.exports = {
                    options: {
                        html: !1,
                        xhtmlOut: !1,
                        breaks: !1,
                        langPrefix: "language-",
                        linkify: !1,
                        typographer: !1,
                        quotes: "“”‘’",
                        highlight: null,
                        maxNesting: 20
                    },
                    components: {
                        core: {rules: ["normalize", "block", "inline"]},
                        block: {rules: ["paragraph"]},
                        inline: {rules: ["text"], rules2: ["balance_pairs", "text_collapse"]}
                    }
                }
            }, function (e, t, n) {
                "use strict";
                function r() {
                    this.rules = o({}, s)
                }

                var o = n(0).assign, i = n(0).unescapeAll, a = n(0).escapeHtml, s = {};
                s.code_inline = function (e, t, n, r, o) {
                    var i = e[t];
                    return "<code" + o.renderAttrs(i) + ">" + a(e[t].content) + "</code>"
                }, s.code_block = function (e, t, n, r, o) {
                    var i = e[t];
                    return "<pre" + o.renderAttrs(i) + "><code>" + a(e[t].content) + "</code></pre>\n"
                }, s.fence = function (e, t, n, r, o) {
                    var s, l, c, u, p = e[t], _ = p.info ? i(p.info).trim() : "", d = "";
                    return _ && (d = _.split(/\s+/g)[0]), 0 === (s = n.highlight ? n.highlight(p.content, d) || a(p.content) : a(p.content)).indexOf("<pre") ? s + "\n" : _ ? (l = p.attrIndex("class"), c = p.attrs ? p.attrs.slice() : [], l < 0 ? c.push(["class", n.langPrefix + d]) : c[l][1] += " " + n.langPrefix + d, u = {attrs: c}, "<pre><code" + o.renderAttrs(u) + ">" + s + "</code></pre>\n") : "<pre><code" + o.renderAttrs(p) + ">" + s + "</code></pre>\n"
                }, s.image = function (e, t, n, r, o) {
                    var i = e[t];
                    return i.attrs[i.attrIndex("alt")][1] = o.renderInlineAsText(i.children, n, r), o.renderToken(e, t, n)
                }, s.hardbreak = function (e, t, n) {
                    return n.xhtmlOut ? "<br />\n" : "<br>\n"
                }, s.softbreak = function (e, t, n) {
                    return n.breaks ? n.xhtmlOut ? "<br />\n" : "<br>\n" : "\n"
                }, s.text = function (e, t) {
                    return a(e[t].content)
                }, s.html_block = function (e, t) {
                    return e[t].content
                }, s.html_inline = function (e, t) {
                    return e[t].content
                }, r.prototype.renderAttrs = function (e) {
                    var t, n, r;
                    if (!e.attrs)return "";
                    for (r = "", t = 0, n = e.attrs.length; t < n; t++)r += " " + a(e.attrs[t][0]) + '="' + a(e.attrs[t][1]) + '"';
                    return r
                }, r.prototype.renderToken = function (e, t, n) {
                    var r, o = "", i = !1, a = e[t];
                    return a.hidden ? "" : (a.block && -1 !== a.nesting && t && e[t - 1].hidden && (o += "\n"), o += (-1 === a.nesting ? "</" : "<") + a.tag, o += this.renderAttrs(a), 0 === a.nesting && n.xhtmlOut && (o += " /"), a.block && (i = !0, 1 === a.nesting && t + 1 < e.length && ("inline" === (r = e[t + 1]).type || r.hidden ? i = !1 : -1 === r.nesting && r.tag === a.tag && (i = !1))), o += i ? ">\n" : ">")
                }, r.prototype.renderInline = function (e, t, n) {
                    for (var r, o = "", i = this.rules, a = 0, s = e.length; a < s; a++)r = e[a].type, void 0 !== i[r] ? o += i[r](e, a, t, n, this) : o += this.renderToken(e, a, t);
                    return o
                }, r.prototype.renderInlineAsText = function (e, t, n) {
                    for (var r = "", o = 0, i = e.length; o < i; o++)"text" === e[o].type ? r += e[o].content : "image" === e[o].type && (r += this.renderInlineAsText(e[o].children, t, n));
                    return r
                }, r.prototype.render = function (e, t, n) {
                    var r, o, i, a = "", s = this.rules;
                    for (r = 0, o = e.length; r < o; r++)"inline" === (i = e[r].type) ? a += this.renderInline(e[r].children, t, n) : void 0 !== s[i] ? a += s[e[r].type](e, r, t, n, this) : a += this.renderToken(e, r, t, n);
                    return a
                }, e.exports = r
            }, function (e, t, n) {
                "use strict";
                var r = n(0).isSpace;
                e.exports = function (e, t, n, o) {
                    var i, a, s, l, c, u, p, _, d, h, f, m, g, b, v, k, w, y, x, C, A = e.lineMax,
                        E = e.bMarks[t] + e.tShift[t], D = e.eMarks[t];
                    if (e.sCount[t] - e.blkIndent >= 4)return !1;
                    if (62 !== e.src.charCodeAt(E++))return !1;
                    if (o)return !0;
                    for (l = d = e.sCount[t] + E - (e.bMarks[t] + e.tShift[t]), 32 === e.src.charCodeAt(E) ? (E++, l++, d++, i = !1, k = !0) : 9 === e.src.charCodeAt(E) ? (k = !0, (e.bsCount[t] + d) % 4 == 3 ? (E++, l++, d++, i = !1) : i = !0) : k = !1, h = [e.bMarks[t]], e.bMarks[t] = E; E < D && (a = e.src.charCodeAt(E), r(a));)9 === a ? d += 4 - (d + e.bsCount[t] + (i ? 1 : 0)) % 4 : d++, E++;
                    for (f = [e.bsCount[t]], e.bsCount[t] = e.sCount[t] + 1 + (k ? 1 : 0), u = E >= D, b = [e.sCount[t]], e.sCount[t] = d - l, v = [e.tShift[t]], e.tShift[t] = E - e.bMarks[t], y = e.md.block.ruler.getRules("blockquote"), g = e.parentType, e.parentType = "blockquote", C = !1, _ = t + 1; _ < n && (e.sCount[_] < e.blkIndent && (C = !0), E = e.bMarks[_] + e.tShift[_], D = e.eMarks[_], !(E >= D)); _++)if (62 !== e.src.charCodeAt(E++) || C) {
                        if (u)break;
                        for (w = !1, s = 0, c = y.length; s < c; s++)if (y[s](e, _, n, !0)) {
                            w = !0;
                            break
                        }
                        if (w) {
                            e.lineMax = _, 0 !== e.blkIndent && (h.push(e.bMarks[_]), f.push(e.bsCount[_]), v.push(e.tShift[_]), b.push(e.sCount[_]), e.sCount[_] -= e.blkIndent);
                            break
                        }
                        h.push(e.bMarks[_]), f.push(e.bsCount[_]), v.push(e.tShift[_]), b.push(e.sCount[_]), e.sCount[_] = -1
                    } else {
                        for (l = d = e.sCount[_] + E - (e.bMarks[_] + e.tShift[_]), 32 === e.src.charCodeAt(E) ? (E++, l++, d++, i = !1, k = !0) : 9 === e.src.charCodeAt(E) ? (k = !0, (e.bsCount[_] + d) % 4 == 3 ? (E++, l++, d++, i = !1) : i = !0) : k = !1, h.push(e.bMarks[_]), e.bMarks[_] = E; E < D && (a = e.src.charCodeAt(E), r(a));)9 === a ? d += 4 - (d + e.bsCount[_] + (i ? 1 : 0)) % 4 : d++, E++;
                        u = E >= D, f.push(e.bsCount[_]), e.bsCount[_] = e.sCount[_] + 1 + (k ? 1 : 0), b.push(e.sCount[_]), e.sCount[_] = d - l, v.push(e.tShift[_]), e.tShift[_] = E - e.bMarks[_]
                    }
                    for (m = e.blkIndent, e.blkIndent = 0, (x = e.push("blockquote_open", "blockquote", 1)).markup = ">", x.map = p = [t, 0], e.md.block.tokenize(e, t, _), (x = e.push("blockquote_close", "blockquote", -1)).markup = ">", e.lineMax = A, e.parentType = g, p[1] = e.line, s = 0; s < v.length; s++)e.bMarks[s + t] = h[s], e.tShift[s + t] = v[s], e.sCount[s + t] = b[s], e.bsCount[s + t] = f[s];
                    return e.blkIndent = m, !0
                }
            }, function (e, t, n) {
                "use strict";
                e.exports = function (e, t, n) {
                    var r, o, i;
                    if (e.sCount[t] - e.blkIndent < 4)return !1;
                    for (o = r = t + 1; r < n;)if (e.isEmpty(r)) r++; else {
                        if (!(e.sCount[r] - e.blkIndent >= 4))break;
                        o = ++r
                    }
                    return e.line = o, i = e.push("code_block", "code", 0), i.content = e.getLines(t, o, 4 + e.blkIndent, !0), i.map = [t, e.line], !0
                }
            }, function (e, t, n) {
                "use strict";
                e.exports = function (e, t, n, r) {
                    var o, i, a, s, l, c, u, p = !1, _ = e.bMarks[t] + e.tShift[t], d = e.eMarks[t];
                    if (e.sCount[t] - e.blkIndent >= 4)return !1;
                    if (_ + 3 > d)return !1;
                    if (126 !== (o = e.src.charCodeAt(_)) && 96 !== o)return !1;
                    if (l = _, _ = e.skipChars(_, o), (i = _ - l) < 3)return !1;
                    if (u = e.src.slice(l, _), (a = e.src.slice(_, d)).indexOf(String.fromCharCode(o)) >= 0)return !1;
                    if (r)return !0;
                    for (s = t; !(++s >= n || (_ = l = e.bMarks[s] + e.tShift[s], d = e.eMarks[s], _ < d && e.sCount[s] < e.blkIndent));)if (e.src.charCodeAt(_) === o && !(e.sCount[s] - e.blkIndent >= 4 || (_ = e.skipChars(_, o)) - l < i || (_ = e.skipSpaces(_)) < d)) {
                        p = !0;
                        break
                    }
                    return i = e.sCount[t], e.line = s + (p ? 1 : 0), c = e.push("fence", "code", 0), c.info = a, c.content = e.getLines(t + 1, s, i, !0), c.markup = u, c.map = [t, e.line], !0
                }
            }, function (e, t, n) {
                "use strict";
                var r = n(0).isSpace;
                e.exports = function (e, t, n, o) {
                    var i, a, s, l, c = e.bMarks[t] + e.tShift[t], u = e.eMarks[t];
                    if (e.sCount[t] - e.blkIndent >= 4)return !1;
                    if (35 !== (i = e.src.charCodeAt(c)) || c >= u)return !1;
                    for (a = 1, i = e.src.charCodeAt(++c); 35 === i && c < u && a <= 6;)a++, i = e.src.charCodeAt(++c);
                    return !(a > 6 || c < u && !r(i) || !o && (u = e.skipSpacesBack(u, c), (s = e.skipCharsBack(u, 35, c)) > c && r(e.src.charCodeAt(s - 1)) && (u = s), e.line = t + 1, l = e.push("heading_open", "h" + String(a), 1), l.markup = "########".slice(0, a), l.map = [t, e.line], l = e.push("inline", "", 0), l.content = e.src.slice(c, u).trim(), l.map = [t, e.line], l.children = [], l = e.push("heading_close", "h" + String(a), -1), l.markup = "########".slice(0, a), 0))
                }
            }, function (e, t, n) {
                "use strict";
                var r = n(0).isSpace;
                e.exports = function (e, t, n, o) {
                    var i, a, s, l, c = e.bMarks[t] + e.tShift[t], u = e.eMarks[t];
                    if (e.sCount[t] - e.blkIndent >= 4)return !1;
                    if (42 !== (i = e.src.charCodeAt(c++)) && 45 !== i && 95 !== i)return !1;
                    for (a = 1; c < u;) {
                        if ((s = e.src.charCodeAt(c++)) !== i && !r(s))return !1;
                        s === i && a++
                    }
                    return !(a < 3 || !o && (e.line = t + 1, l = e.push("hr", "hr", 0), l.map = [t, e.line], l.markup = Array(a + 1).join(String.fromCharCode(i)), 0))
                }
            }, function (e, t, n) {
                "use strict";
                var r = n(126), o = n(47).HTML_OPEN_CLOSE_TAG_RE,
                    i = [[/^<(script|pre|style)(?=(\s|>|$))/i, /<\/(script|pre|style)>/i, !0], [/^<!--/, /-->/, !0], [/^<\?/, /\?>/, !0], [/^<![A-Z]/, />/, !0], [/^<!\[CDATA\[/, /\]\]>/, !0], [new RegExp("^</?(" + r.join("|") + ")(?=(\\s|/?>|$))", "i"), /^$/, !0], [new RegExp(o.source + "\\s*$"), /^$/, !1]];
                e.exports = function (e, t, n, r) {
                    var o, a, s, l, c = e.bMarks[t] + e.tShift[t], u = e.eMarks[t];
                    if (e.sCount[t] - e.blkIndent >= 4)return !1;
                    if (!e.md.options.html)return !1;
                    if (60 !== e.src.charCodeAt(c))return !1;
                    for (l = e.src.slice(c, u), o = 0; o < i.length && !i[o][0].test(l); o++);
                    if (o === i.length)return !1;
                    if (r)return i[o][2];
                    if (a = t + 1, !i[o][1].test(l))for (; a < n && !(e.sCount[a] < e.blkIndent); a++)if (c = e.bMarks[a] + e.tShift[a], u = e.eMarks[a], l = e.src.slice(c, u), i[o][1].test(l)) {
                        0 !== l.length && a++;
                        break
                    }
                    return e.line = a, s = e.push("html_block", "", 0), s.map = [t, a], s.content = e.getLines(t, a, e.blkIndent, !0), !0
                }
            }, function (e, t, n) {
                "use strict";
                e.exports = function (e, t, n) {
                    var r, o, i, a, s, l, c, u, p, _, d = t + 1, h = e.md.block.ruler.getRules("paragraph");
                    if (e.sCount[t] - e.blkIndent >= 4)return !1;
                    for (_ = e.parentType, e.parentType = "paragraph"; d < n && !e.isEmpty(d); d++)if (!(e.sCount[d] - e.blkIndent > 3)) {
                        if (e.sCount[d] >= e.blkIndent && (l = e.bMarks[d] + e.tShift[d], c = e.eMarks[d], l < c && (45 === (p = e.src.charCodeAt(l)) || 61 === p) && (l = e.skipChars(l, p), (l = e.skipSpaces(l)) >= c))) {
                            u = 61 === p ? 1 : 2;
                            break
                        }
                        if (!(e.sCount[d] < 0)) {
                            for (o = !1, i = 0, a = h.length; i < a; i++)if (h[i](e, d, n, !0)) {
                                o = !0;
                                break
                            }
                            if (o)break
                        }
                    }
                    return !!u && (r = e.getLines(t, d, e.blkIndent, !1).trim(), e.line = d + 1, s = e.push("heading_open", "h" + String(u), 1), s.markup = String.fromCharCode(p), s.map = [t, e.line], s = e.push("inline", "", 0), s.content = r, s.map = [t, e.line - 1], s.children = [], s = e.push("heading_close", "h" + String(u), -1), s.markup = String.fromCharCode(p), e.parentType = _, !0)
                }
            }, function (e, t, n) {
                "use strict";
                function r(e, t) {
                    var n, r, o, a;
                    return r = e.bMarks[t] + e.tShift[t], o = e.eMarks[t], 42 !== (n = e.src.charCodeAt(r++)) && 45 !== n && 43 !== n ? -1 : r < o && (a = e.src.charCodeAt(r), !i(a)) ? -1 : r
                }

                function o(e, t) {
                    var n, r = e.bMarks[t] + e.tShift[t], o = r, a = e.eMarks[t];
                    if (o + 1 >= a)return -1;
                    if ((n = e.src.charCodeAt(o++)) < 48 || n > 57)return -1;
                    for (; ;) {
                        if (o >= a)return -1;
                        if (!((n = e.src.charCodeAt(o++)) >= 48 && n <= 57)) {
                            if (41 === n || 46 === n)break;
                            return -1
                        }
                        if (o - r >= 10)return -1
                    }
                    return o < a && (n = e.src.charCodeAt(o), !i(n)) ? -1 : o
                }

                var i = n(0).isSpace;
                e.exports = function (e, t, n, i) {
                    var a, s, l, c, u, p, _, d, h, f, m, g, b, v, k, w, y, x, C, A, E, D, S, q, T, j, L, M, O = !1,
                        F = !0;
                    if (e.sCount[t] - e.blkIndent >= 4)return !1;
                    if (i && "paragraph" === e.parentType && e.tShift[t] >= e.blkIndent && (O = !0), (S = o(e, t)) >= 0) {
                        if (_ = !0, T = e.bMarks[t] + e.tShift[t], b = Number(e.src.substr(T, S - T - 1)), O && 1 !== b)return !1
                    } else {
                        if (!((S = r(e, t)) >= 0))return !1;
                        _ = !1
                    }
                    if (O && e.skipSpaces(S) >= e.eMarks[t])return !1;
                    if (g = e.src.charCodeAt(S - 1), i)return !0;
                    for (m = e.tokens.length, _ ? (M = e.push("ordered_list_open", "ol", 1), 1 !== b && (M.attrs = [["start", b]])) : M = e.push("bullet_list_open", "ul", 1), M.map = f = [t, 0], M.markup = String.fromCharCode(g), k = t, q = !1, L = e.md.block.ruler.getRules("list"), C = e.parentType, e.parentType = "list"; k < n;) {
                        for (D = S, v = e.eMarks[k], p = w = e.sCount[k] + S - (e.bMarks[t] + e.tShift[t]); D < v;) {
                            if (9 === (a = e.src.charCodeAt(D))) w += 4 - (w + e.bsCount[k]) % 4; else {
                                if (32 !== a)break;
                                w++
                            }
                            D++
                        }
                        if (s = D, (u = s >= v ? 1 : w - p) > 4 && (u = 1), c = p + u, M = e.push("list_item_open", "li", 1), M.markup = String.fromCharCode(g), M.map = d = [t, 0], y = e.blkIndent, E = e.tight, A = e.tShift[t], x = e.sCount[t], e.blkIndent = c, e.tight = !0, e.tShift[t] = s - e.bMarks[t], e.sCount[t] = w, s >= v && e.isEmpty(t + 1) ? e.line = Math.min(e.line + 2, n) : e.md.block.tokenize(e, t, n, !0), e.tight && !q || (F = !1), q = e.line - t > 1 && e.isEmpty(e.line - 1), e.blkIndent = y, e.tShift[t] = A, e.sCount[t] = x, e.tight = E, M = e.push("list_item_close", "li", -1), M.markup = String.fromCharCode(g), k = t = e.line, d[1] = k, s = e.bMarks[t], k >= n)break;
                        if (e.sCount[k] < e.blkIndent)break;
                        for (j = !1, l = 0, h = L.length; l < h; l++)if (L[l](e, k, n, !0)) {
                            j = !0;
                            break
                        }
                        if (j)break;
                        if (_) {
                            if ((S = o(e, k)) < 0)break
                        } else if ((S = r(e, k)) < 0)break;
                        if (g !== e.src.charCodeAt(S - 1))break
                    }
                    return M = _ ? e.push("ordered_list_close", "ol", -1) : e.push("bullet_list_close", "ul", -1), M.markup = String.fromCharCode(g), f[1] = k, e.line = k, e.parentType = C, F && function (e, t) {
                        var n, r, o = e.level + 2;
                        for (n = t + 2, r = e.tokens.length - 2; n < r; n++)e.tokens[n].level === o && "paragraph_open" === e.tokens[n].type && (e.tokens[n + 2].hidden = !0, e.tokens[n].hidden = !0, n += 2)
                    }(e, m), !0
                }
            }, function (e, t, n) {
                "use strict";
                e.exports = function (e, t) {
                    var n, r, o, i, a, s, l = t + 1, c = e.md.block.ruler.getRules("paragraph"), u = e.lineMax;
                    for (s = e.parentType, e.parentType = "paragraph"; l < u && !e.isEmpty(l); l++)if (!(e.sCount[l] - e.blkIndent > 3 || e.sCount[l] < 0)) {
                        for (r = !1, o = 0, i = c.length; o < i; o++)if (c[o](e, l, u, !0)) {
                            r = !0;
                            break
                        }
                        if (r)break
                    }
                    return n = e.getLines(t, l, e.blkIndent, !1).trim(), e.line = l, a = e.push("paragraph_open", "p", 1), a.map = [t, e.line], a = e.push("inline", "", 0), a.content = n, a.map = [t, e.line], a.children = [], a = e.push("paragraph_close", "p", -1), e.parentType = s, !0
                }
            }, function (e, t, n) {
                "use strict";
                var r = n(0).normalizeReference, o = n(0).isSpace;
                e.exports = function (e, t, n, i) {
                    var a, s, l, c, u, p, _, d, h, f, m, g, b, v, k, w, y = 0, x = e.bMarks[t] + e.tShift[t],
                        C = e.eMarks[t], A = t + 1;
                    if (e.sCount[t] - e.blkIndent >= 4)return !1;
                    if (91 !== e.src.charCodeAt(x))return !1;
                    for (; ++x < C;)if (93 === e.src.charCodeAt(x) && 92 !== e.src.charCodeAt(x - 1)) {
                        if (x + 1 === C)return !1;
                        if (58 !== e.src.charCodeAt(x + 1))return !1;
                        break
                    }
                    for (c = e.lineMax, k = e.md.block.ruler.getRules("reference"), f = e.parentType, e.parentType = "reference"; A < c && !e.isEmpty(A); A++)if (!(e.sCount[A] - e.blkIndent > 3 || e.sCount[A] < 0)) {
                        for (v = !1, p = 0, _ = k.length; p < _; p++)if (k[p](e, A, c, !0)) {
                            v = !0;
                            break
                        }
                        if (v)break
                    }
                    for (C = (b = e.getLines(t, A, e.blkIndent, !1).trim()).length, x = 1; x < C; x++) {
                        if (91 === (a = b.charCodeAt(x)))return !1;
                        if (93 === a) {
                            h = x;
                            break
                        }
                        10 === a ? y++ : 92 === a && ++x < C && 10 === b.charCodeAt(x) && y++
                    }
                    if (h < 0 || 58 !== b.charCodeAt(h + 1))return !1;
                    for (x = h + 2; x < C; x++)if (10 === (a = b.charCodeAt(x))) y++; else if (!o(a))break;
                    if (!(m = e.md.helpers.parseLinkDestination(b, x, C)).ok)return !1;
                    if (u = e.md.normalizeLink(m.str), !e.md.validateLink(u))return !1;
                    for (s = x = m.pos, l = y += m.lines, g = x; x < C; x++)if (10 === (a = b.charCodeAt(x))) y++; else if (!o(a))break;
                    for (m = e.md.helpers.parseLinkTitle(b, x, C), x < C && g !== x && m.ok ? (w = m.str, x = m.pos, y += m.lines) : (w = "", x = s, y = l); x < C && (a = b.charCodeAt(x), o(a));)x++;
                    if (x < C && 10 !== b.charCodeAt(x) && w)for (w = "", x = s, y = l; x < C && (a = b.charCodeAt(x), o(a));)x++;
                    return !(x < C && 10 !== b.charCodeAt(x) || !(d = r(b.slice(1, h))) || !i && (void 0 === e.env.references && (e.env.references = {}), void 0 === e.env.references[d] && (e.env.references[d] = {
                        title: w,
                        href: u
                    }), e.parentType = f, e.line = t + y + 1, 0))
                }
            }, function (e, t, n) {
                "use strict";
                function r(e, t, n, r) {
                    var o, a, s, l, c, u, p, _;
                    for (this.src = e, this.md = t, this.env = n, this.tokens = r, this.bMarks = [], this.eMarks = [], this.tShift = [], this.sCount = [], this.bsCount = [], this.blkIndent = 0, this.line = 0, this.lineMax = 0, this.tight = !1, this.ddIndent = -1, this.parentType = "root", this.level = 0, this.result = "", _ = !1, s = l = u = p = 0, c = (a = this.src).length; l < c; l++) {
                        if (o = a.charCodeAt(l), !_) {
                            if (i(o)) {
                                u++, 9 === o ? p += 4 - p % 4 : p++;
                                continue
                            }
                            _ = !0
                        }
                        10 !== o && l !== c - 1 || (10 !== o && l++, this.bMarks.push(s), this.eMarks.push(l), this.tShift.push(u), this.sCount.push(p), this.bsCount.push(0), _ = !1, u = 0, p = 0, s = l + 1)
                    }
                    this.bMarks.push(a.length), this.eMarks.push(a.length), this.tShift.push(0), this.sCount.push(0), this.bsCount.push(0), this.lineMax = this.bMarks.length - 1
                }

                var o = n(32), i = n(0).isSpace;
                r.prototype.push = function (e, t, n) {
                    var r = new o(e, t, n);
                    return r.block = !0, n < 0 && this.level--, r.level = this.level, n > 0 && this.level++, this.tokens.push(r), r
                }, r.prototype.isEmpty = function (e) {
                    return this.bMarks[e] + this.tShift[e] >= this.eMarks[e]
                }, r.prototype.skipEmptyLines = function (e) {
                    for (var t = this.lineMax; e < t && !(this.bMarks[e] + this.tShift[e] < this.eMarks[e]); e++);
                    return e
                }, r.prototype.skipSpaces = function (e) {
                    for (var t, n = this.src.length; e < n && (t = this.src.charCodeAt(e), i(t)); e++);
                    return e
                }, r.prototype.skipSpacesBack = function (e, t) {
                    if (e <= t)return e;
                    for (; e > t;)if (!i(this.src.charCodeAt(--e)))return e + 1;
                    return e
                }, r.prototype.skipChars = function (e, t) {
                    for (var n = this.src.length; e < n && this.src.charCodeAt(e) === t; e++);
                    return e
                }, r.prototype.skipCharsBack = function (e, t, n) {
                    if (e <= n)return e;
                    for (; e > n;)if (t !== this.src.charCodeAt(--e))return e + 1;
                    return e
                }, r.prototype.getLines = function (e, t, n, r) {
                    var o, a, s, l, c, u, p, _ = e;
                    if (e >= t)return "";
                    for (u = new Array(t - e), o = 0; _ < t; _++, o++) {
                        for (a = 0, p = l = this.bMarks[_], c = _ + 1 < t || r ? this.eMarks[_] + 1 : this.eMarks[_]; l < c && a < n;) {
                            if (s = this.src.charCodeAt(l), i(s)) 9 === s ? a += 4 - (a + this.bsCount[_]) % 4 : a++; else {
                                if (!(l - p < this.tShift[_]))break;
                                a++
                            }
                            l++
                        }
                        u[o] = a > n ? new Array(a - n + 1).join(" ") + this.src.slice(l, c) : this.src.slice(l, c)
                    }
                    return u.join("")
                }, r.prototype.Token = o, e.exports = r
            }, function (e, t, n) {
                "use strict";
                function r(e, t) {
                    var n = e.bMarks[t] + e.blkIndent, r = e.eMarks[t];
                    return e.src.substr(n, r - n)
                }

                function o(e) {
                    var t, n = [], r = 0, o = e.length, i = 0, a = 0, s = !1, l = 0;
                    for (t = e.charCodeAt(r); r < o;)96 === t ? s ? (s = !1, l = r) : i % 2 == 0 && (s = !0, l = r) : 124 !== t || i % 2 != 0 || s || (n.push(e.substring(a, r)), a = r + 1), 92 === t ? i++ : i = 0, ++r === o && s && (s = !1, r = l + 1), t = e.charCodeAt(r);
                    return n.push(e.substring(a)), n
                }

                var i = n(0).isSpace;
                e.exports = function (e, t, n, a) {
                    var s, l, c, u, p, _, d, h, f, m, g, b;
                    if (t + 2 > n)return !1;
                    if (p = t + 1, e.sCount[p] < e.blkIndent)return !1;
                    if (e.sCount[p] - e.blkIndent >= 4)return !1;
                    if ((c = e.bMarks[p] + e.tShift[p]) >= e.eMarks[p])return !1;
                    if (124 !== (s = e.src.charCodeAt(c++)) && 45 !== s && 58 !== s)return !1;
                    for (; c < e.eMarks[p];) {
                        if (124 !== (s = e.src.charCodeAt(c)) && 45 !== s && 58 !== s && !i(s))return !1;
                        c++
                    }
                    for (_ = (l = r(e, t + 1)).split("|"), f = [], u = 0; u < _.length; u++) {
                        if (!(m = _[u].trim())) {
                            if (0 === u || u === _.length - 1)continue;
                            return !1
                        }
                        if (!/^:?-+:?$/.test(m))return !1;
                        58 === m.charCodeAt(m.length - 1) ? f.push(58 === m.charCodeAt(0) ? "center" : "right") : 58 === m.charCodeAt(0) ? f.push("left") : f.push("")
                    }
                    if (-1 === (l = r(e, t).trim()).indexOf("|"))return !1;
                    if (e.sCount[t] - e.blkIndent >= 4)return !1;
                    if (_ = o(l.replace(/^\||\|$/g, "")), (d = _.length) > f.length)return !1;
                    if (a)return !0;
                    for ((h = e.push("table_open", "table", 1)).map = g = [t, 0], (h = e.push("thead_open", "thead", 1)).map = [t, t + 1], (h = e.push("tr_open", "tr", 1)).map = [t, t + 1], u = 0; u < _.length; u++)h = e.push("th_open", "th", 1), h.map = [t, t + 1], f[u] && (h.attrs = [["style", "text-align:" + f[u]]]), h = e.push("inline", "", 0), h.content = _[u].trim(), h.map = [t, t + 1], h.children = [], h = e.push("th_close", "th", -1);
                    for (h = e.push("tr_close", "tr", -1), h = e.push("thead_close", "thead", -1), (h = e.push("tbody_open", "tbody", 1)).map = b = [t + 2, 0], p = t + 2; p < n && !(e.sCount[p] < e.blkIndent) && -1 !== (l = r(e, p).trim()).indexOf("|") && !(e.sCount[p] - e.blkIndent >= 4); p++) {
                        for (_ = o(l.replace(/^\||\|$/g, "")), h = e.push("tr_open", "tr", 1), u = 0; u < d; u++)h = e.push("td_open", "td", 1), f[u] && (h.attrs = [["style", "text-align:" + f[u]]]), h = e.push("inline", "", 0), h.content = _[u] ? _[u].trim() : "", h.children = [], h = e.push("td_close", "td", -1);
                        h = e.push("tr_close", "tr", -1)
                    }
                    return h = e.push("tbody_close", "tbody", -1), h = e.push("table_close", "table", -1), g[1] = b[1] = p, e.line = p, !0
                }
            }, function (e, t, n) {
                "use strict";
                e.exports = function (e) {
                    var t;
                    e.inlineMode ? (t = new e.Token("inline", "", 0), t.content = e.src, t.map = [0, 1], t.children = [], e.tokens.push(t)) : e.md.block.parse(e.src, e.md, e.env, e.tokens)
                }
            }, function (e, t, n) {
                "use strict";
                e.exports = function (e) {
                    var t, n, r, o = e.tokens;
                    for (n = 0, r = o.length; n < r; n++)"inline" === (t = o[n]).type && e.md.inline.parse(t.content, e.md, e.env, t.children)
                }
            }, function (e, t, n) {
                "use strict";
                function r(e) {
                    return /^<a[>\s]/i.test(e)
                }

                function o(e) {
                    return /^<\/a\s*>/i.test(e)
                }

                var i = n(0).arrayReplaceAt;
                e.exports = function (e) {
                    var t, n, a, s, l, c, u, p, _, d, h, f, m, g, b, v, k, w = e.tokens;
                    if (e.md.options.linkify)for (n = 0, a = w.length; n < a; n++)if ("inline" === w[n].type && e.md.linkify.pretest(w[n].content))for (s = w[n].children, m = 0, t = s.length - 1; t >= 0; t--)if ("link_close" !== (c = s[t]).type) {
                        if ("html_inline" === c.type && (r(c.content) && m > 0 && m--, o(c.content) && m++), !(m > 0) && "text" === c.type && e.md.linkify.test(c.content)) {
                            for (_ = c.content, k = e.md.linkify.match(_), u = [], f = c.level, h = 0, p = 0; p < k.length; p++)g = k[p].url, b = e.md.normalizeLink(g), e.md.validateLink(b) && (v = k[p].text, v = k[p].schema ? "mailto:" !== k[p].schema || /^mailto:/i.test(v) ? e.md.normalizeLinkText(v) : e.md.normalizeLinkText("mailto:" + v).replace(/^mailto:/, "") : e.md.normalizeLinkText("http://" + v).replace(/^http:\/\//, ""), (d = k[p].index) > h && (l = new e.Token("text", "", 0), l.content = _.slice(h, d), l.level = f, u.push(l)), l = new e.Token("link_open", "a", 1), l.attrs = [["href", b]], l.level = f++, l.markup = "linkify", l.info = "auto", u.push(l), l = new e.Token("text", "", 0), l.content = v, l.level = f, u.push(l), l = new e.Token("link_close", "a", -1), l.level = --f, l.markup = "linkify", l.info = "auto", u.push(l), h = k[p].lastIndex);
                            h < _.length && (l = new e.Token("text", "", 0), l.content = _.slice(h), l.level = f, u.push(l)), w[n].children = s = i(s, t, u)
                        }
                    } else for (t--; s[t].level !== c.level && "link_open" !== s[t].type;)t--
                }
            }, function (e, t, n) {
                "use strict";
                var r = /\r[\n\u0085]?|[\u2424\u2028\u0085]/g, o = /\u0000/g;
                e.exports = function (e) {
                    var t;
                    t = (t = e.src.replace(r, "\n")).replace(o, "�"), e.src = t
                }
            }, function (e, t, n) {
                "use strict";
                function r(e, t) {
                    return c[t.toLowerCase()]
                }

                function o(e) {
                    var t, n, o = 0;
                    for (t = e.length - 1; t >= 0; t--)"text" !== (n = e[t]).type || o || (n.content = n.content.replace(l, r)), "link_open" === n.type && "auto" === n.info && o--, "link_close" === n.type && "auto" === n.info && o++
                }

                function i(e) {
                    var t, n, r = 0;
                    for (t = e.length - 1; t >= 0; t--)"text" !== (n = e[t]).type || r || a.test(n.content) && (n.content = n.content.replace(/\+-/g, "±").replace(/\.{2,}/g, "…").replace(/([?!])…/g, "$1..").replace(/([?!]){4,}/g, "$1$1$1").replace(/,{2,}/g, ",").replace(/(^|[^-])---([^-]|$)/gm, "$1—$2").replace(/(^|\s)--(\s|$)/gm, "$1–$2").replace(/(^|[^-\s])--([^-\s]|$)/gm, "$1–$2")), "link_open" === n.type && "auto" === n.info && r--, "link_close" === n.type && "auto" === n.info && r++
                }

                var a = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/, s = /\((c|tm|r|p)\)/i, l = /\((c|tm|r|p)\)/gi,
                    c = {c: "©", r: "®", p: "§", tm: "™"};
                e.exports = function (e) {
                    var t;
                    if (e.md.options.typographer)for (t = e.tokens.length - 1; t >= 0; t--)"inline" === e.tokens[t].type && (s.test(e.tokens[t].content) && o(e.tokens[t].children), a.test(e.tokens[t].content) && i(e.tokens[t].children))
                }
            }, function (e, t, n) {
                "use strict";
                function r(e, t, n) {
                    return e.substr(0, t) + n + e.substr(t + 1)
                }

                function o(e, t) {
                    var n, o, l, p, _, d, h, f, m, g, b, v, k, w, y, x, C, A, E, D, S;
                    for (E = [], n = 0; n < e.length; n++) {
                        for (o = e[n], h = e[n].level, C = E.length - 1; C >= 0 && !(E[C].level <= h); C--);
                        if (E.length = C + 1, "text" === o.type) {
                            _ = 0, d = (l = o.content).length;
                            e:for (; _ < d && (c.lastIndex = _, p = c.exec(l));) {
                                if (y = x = !0, _ = p.index + 1, A = "'" === p[0], m = 32, p.index - 1 >= 0) m = l.charCodeAt(p.index - 1); else for (C = n - 1; C >= 0; C--)if ("text" === e[C].type) {
                                    m = e[C].content.charCodeAt(e[C].content.length - 1);
                                    break
                                }
                                if (g = 32, _ < d) g = l.charCodeAt(_); else for (C = n + 1; C < e.length; C++)if ("text" === e[C].type) {
                                    g = e[C].content.charCodeAt(0);
                                    break
                                }
                                if (b = s(m) || a(String.fromCharCode(m)), v = s(g) || a(String.fromCharCode(g)), k = i(m), (w = i(g)) ? y = !1 : v && (k || b || (y = !1)), k ? x = !1 : b && (w || v || (x = !1)), 34 === g && '"' === p[0] && m >= 48 && m <= 57 && (x = y = !1), y && x && (y = !1, x = v), y || x) {
                                    if (x)for (C = E.length - 1; C >= 0 && (f = E[C], !(E[C].level < h)); C--)if (f.single === A && E[C].level === h) {
                                        f = E[C], A ? (D = t.md.options.quotes[2], S = t.md.options.quotes[3]) : (D = t.md.options.quotes[0], S = t.md.options.quotes[1]), o.content = r(o.content, p.index, S), e[f.token].content = r(e[f.token].content, f.pos, D), _ += S.length - 1, f.token === n && (_ += D.length - 1), d = (l = o.content).length, E.length = C;
                                        continue e
                                    }
                                    y ? E.push({
                                        token: n,
                                        pos: p.index,
                                        single: A,
                                        level: h
                                    }) : x && A && (o.content = r(o.content, p.index, u))
                                } else A && (o.content = r(o.content, p.index, u))
                            }
                        }
                    }
                }

                var i = n(0).isWhiteSpace, a = n(0).isPunctChar, s = n(0).isMdAsciiPunct, l = /['"]/, c = /['"]/g,
                    u = "’";
                e.exports = function (e) {
                    var t;
                    if (e.md.options.typographer)for (t = e.tokens.length - 1; t >= 0; t--)"inline" === e.tokens[t].type && l.test(e.tokens[t].content) && o(e.tokens[t].children, e)
                }
            }, function (e, t, n) {
                "use strict";
                function r(e, t, n) {
                    this.src = e, this.env = n, this.tokens = [], this.inlineMode = !1, this.md = t
                }

                var o = n(32);
                r.prototype.Token = o, e.exports = r
            }, function (e, t, n) {
                "use strict";
                var r = /^<([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)>/,
                    o = /^<([a-zA-Z][a-zA-Z0-9+.\-]{1,31}):([^<>\x00-\x20]*)>/;
                e.exports = function (e, t) {
                    var n, i, a, s, l, c, u = e.pos;
                    return 60 === e.src.charCodeAt(u) && !((n = e.src.slice(u)).indexOf(">") < 0 || (o.test(n) ? (i = n.match(o), s = i[0].slice(1, -1), l = e.md.normalizeLink(s), !e.md.validateLink(l) || (t || (c = e.push("link_open", "a", 1), c.attrs = [["href", l]], c.markup = "autolink", c.info = "auto", c = e.push("text", "", 0), c.content = e.md.normalizeLinkText(s), c = e.push("link_close", "a", -1), c.markup = "autolink", c.info = "auto"), e.pos += i[0].length, 0)) : !r.test(n) || (a = n.match(r), s = a[0].slice(1, -1), l = e.md.normalizeLink("mailto:" + s), !e.md.validateLink(l) || (t || (c = e.push("link_open", "a", 1), c.attrs = [["href", l]], c.markup = "autolink", c.info = "auto", c = e.push("text", "", 0), c.content = e.md.normalizeLinkText(s), c = e.push("link_close", "a", -1), c.markup = "autolink", c.info = "auto"), e.pos += a[0].length, 0))))
                }
            }, function (e, t, n) {
                "use strict";
                e.exports = function (e, t) {
                    var n, r, o, i, a, s, l = e.pos;
                    if (96 !== e.src.charCodeAt(l))return !1;
                    for (n = l, l++, r = e.posMax; l < r && 96 === e.src.charCodeAt(l);)l++;
                    for (o = e.src.slice(n, l), i = a = l; -1 !== (i = e.src.indexOf("`", a));) {
                        for (a = i + 1; a < r && 96 === e.src.charCodeAt(a);)a++;
                        if (a - i === o.length)return t || (s = e.push("code_inline", "code", 0), s.markup = o, s.content = e.src.slice(l, i).replace(/[ \n]+/g, " ").trim()), e.pos = a, !0
                    }
                    return t || (e.pending += o), e.pos += o.length, !0
                }
            }, function (e, t, n) {
                "use strict";
                e.exports = function (e) {
                    var t, n, r, o, i = e.delimiters, a = e.delimiters.length;
                    for (t = 0; t < a; t++)if ((r = i[t]).close)for (n = t - r.jump - 1; n >= 0;) {
                        if ((o = i[n]).open && o.marker === r.marker && o.end < 0 && o.level === r.level) {
                            if (!((o.close || r.open) && void 0 !== o.length && void 0 !== r.length && (o.length + r.length) % 3 == 0)) {
                                r.jump = t - n, r.open = !1, o.end = t, o.jump = 0;
                                break
                            }
                        }
                        n -= o.jump + 1
                    }
                }
            }, function (e, t, n) {
                "use strict";
                var r = n(46), o = n(0).has, i = n(0).isValidEntityCode, a = n(0).fromCodePoint,
                    s = /^&#((?:x[a-f0-9]{1,8}|[0-9]{1,8}));/i, l = /^&([a-z][a-z0-9]{1,31});/i;
                e.exports = function (e, t) {
                    var n, c, u = e.pos, p = e.posMax;
                    if (38 !== e.src.charCodeAt(u))return !1;
                    if (u + 1 < p)if (35 === e.src.charCodeAt(u + 1)) {
                        if (c = e.src.slice(u).match(s))return t || (n = "x" === c[1][0].toLowerCase() ? parseInt(c[1].slice(1), 16) : parseInt(c[1], 10), e.pending += a(i(n) ? n : 65533)), e.pos += c[0].length, !0
                    } else if ((c = e.src.slice(u).match(l)) && o(r, c[1]))return t || (e.pending += r[c[1]]), e.pos += c[0].length, !0;
                    return t || (e.pending += "&"), e.pos++, !0
                }
            }, function (e, t, n) {
                "use strict";
                for (var r = n(0).isSpace, o = [], i = 0; i < 256; i++)o.push(0);
                "\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function (e) {
                    o[e.charCodeAt(0)] = 1
                }), e.exports = function (e, t) {
                    var n, i = e.pos, a = e.posMax;
                    if (92 !== e.src.charCodeAt(i))return !1;
                    if (++i < a) {
                        if ((n = e.src.charCodeAt(i)) < 256 && 0 !== o[n])return t || (e.pending += e.src[i]), e.pos += 2, !0;
                        if (10 === n) {
                            for (t || e.push("hardbreak", "br", 0), i++; i < a && (n = e.src.charCodeAt(i), r(n));)i++;
                            return e.pos = i, !0
                        }
                    }
                    return t || (e.pending += "\\"), e.pos++, !0
                }
            }, function (e, t, n) {
                "use strict";
                var r = n(47).HTML_TAG_RE;
                e.exports = function (e, t) {
                    var n, o, i, a, s = e.pos;
                    return !(!e.md.options.html || (i = e.posMax, 60 !== e.src.charCodeAt(s) || s + 2 >= i || 33 !== (n = e.src.charCodeAt(s + 1)) && 63 !== n && 47 !== n && !function (e) {
                        var t = 32 | e;
                        return t >= 97 && t <= 122
                    }(n) || !(o = e.src.slice(s).match(r)) || (t || (a = e.push("html_inline", "", 0), a.content = e.src.slice(s, s + o[0].length)), e.pos += o[0].length, 0)))
                }
            }, function (e, t, n) {
                "use strict";
                var r = n(0).normalizeReference, o = n(0).isSpace;
                e.exports = function (e, t) {
                    var n, i, a, s, l, c, u, p, _, d, h, f, m, g = "", b = e.pos, v = e.posMax;
                    if (33 !== e.src.charCodeAt(e.pos))return !1;
                    if (91 !== e.src.charCodeAt(e.pos + 1))return !1;
                    if (c = e.pos + 2, (l = e.md.helpers.parseLinkLabel(e, e.pos + 1, !1)) < 0)return !1;
                    if ((u = l + 1) < v && 40 === e.src.charCodeAt(u)) {
                        for (u++; u < v && (i = e.src.charCodeAt(u), o(i) || 10 === i); u++);
                        if (u >= v)return !1;
                        for (m = u, (_ = e.md.helpers.parseLinkDestination(e.src, u, e.posMax)).ok && (g = e.md.normalizeLink(_.str), e.md.validateLink(g) ? u = _.pos : g = ""), m = u; u < v && (i = e.src.charCodeAt(u), o(i) || 10 === i); u++);
                        if (_ = e.md.helpers.parseLinkTitle(e.src, u, e.posMax), u < v && m !== u && _.ok)for (d = _.str, u = _.pos; u < v && (i = e.src.charCodeAt(u), o(i) || 10 === i); u++); else d = "";
                        if (u >= v || 41 !== e.src.charCodeAt(u))return e.pos = b, !1;
                        u++
                    } else {
                        if (void 0 === e.env.references)return !1;
                        if (u < v && 91 === e.src.charCodeAt(u) ? (m = u + 1, (u = e.md.helpers.parseLinkLabel(e, u)) >= 0 ? s = e.src.slice(m, u++) : u = l + 1) : u = l + 1, s || (s = e.src.slice(c, l)), !(p = e.env.references[r(s)]))return e.pos = b, !1;
                        g = p.href, d = p.title
                    }
                    return t || (a = e.src.slice(c, l), e.md.inline.parse(a, e.md, e.env, f = []), h = e.push("image", "img", 0), h.attrs = n = [["src", g], ["alt", ""]], h.children = f, h.content = a, d && n.push(["title", d])), e.pos = u, e.posMax = v, !0
                }
            }, function (e, t, n) {
                "use strict";
                var r = n(0).normalizeReference, o = n(0).isSpace;
                e.exports = function (e, t) {
                    var n, i, a, s, l, c, u, p, _, d, h = "", f = e.pos, m = e.posMax, g = e.pos, b = !0;
                    if (91 !== e.src.charCodeAt(e.pos))return !1;
                    if (l = e.pos + 1, (s = e.md.helpers.parseLinkLabel(e, e.pos, !0)) < 0)return !1;
                    if ((c = s + 1) < m && 40 === e.src.charCodeAt(c)) {
                        for (b = !1, c++; c < m && (i = e.src.charCodeAt(c), o(i) || 10 === i); c++);
                        if (c >= m)return !1;
                        for (g = c, (u = e.md.helpers.parseLinkDestination(e.src, c, e.posMax)).ok && (h = e.md.normalizeLink(u.str), e.md.validateLink(h) ? c = u.pos : h = ""), g = c; c < m && (i = e.src.charCodeAt(c), o(i) || 10 === i); c++);
                        if (u = e.md.helpers.parseLinkTitle(e.src, c, e.posMax), c < m && g !== c && u.ok)for (_ = u.str, c = u.pos; c < m && (i = e.src.charCodeAt(c), o(i) || 10 === i); c++); else _ = "";
                        (c >= m || 41 !== e.src.charCodeAt(c)) && (b = !0), c++
                    }
                    if (b) {
                        if (void 0 === e.env.references)return !1;
                        if (c < m && 91 === e.src.charCodeAt(c) ? (g = c + 1, (c = e.md.helpers.parseLinkLabel(e, c)) >= 0 ? a = e.src.slice(g, c++) : c = s + 1) : c = s + 1, a || (a = e.src.slice(l, s)), !(p = e.env.references[r(a)]))return e.pos = f, !1;
                        h = p.href, _ = p.title
                    }
                    return t || (e.pos = l, e.posMax = s, d = e.push("link_open", "a", 1), d.attrs = n = [["href", h]], _ && n.push(["title", _]), e.md.inline.tokenize(e), d = e.push("link_close", "a", -1)), e.pos = c, e.posMax = m, !0
                }
            }, function (e, t, n) {
                "use strict";
                var r = n(0).isSpace;
                e.exports = function (e, t) {
                    var n, o, i = e.pos;
                    if (10 !== e.src.charCodeAt(i))return !1;
                    for (n = e.pending.length - 1, o = e.posMax, t || (n >= 0 && 32 === e.pending.charCodeAt(n) ? n >= 1 && 32 === e.pending.charCodeAt(n - 1) ? (e.pending = e.pending.replace(/ +$/, ""), e.push("hardbreak", "br", 0)) : (e.pending = e.pending.slice(0, -1), e.push("softbreak", "br", 0)) : e.push("softbreak", "br", 0)), i++; i < o && r(e.src.charCodeAt(i));)i++;
                    return e.pos = i, !0
                }
            }, function (e, t, n) {
                "use strict";
                function r(e, t, n, r) {
                    this.src = e, this.env = n, this.md = t, this.tokens = r, this.pos = 0, this.posMax = this.src.length, this.level = 0, this.pending = "", this.pendingLevel = 0, this.cache = {}, this.delimiters = []
                }

                var o = n(32), i = n(0).isWhiteSpace, a = n(0).isPunctChar, s = n(0).isMdAsciiPunct;
                r.prototype.pushPending = function () {
                    var e = new o("text", "", 0);
                    return e.content = this.pending, e.level = this.pendingLevel, this.tokens.push(e), this.pending = "", e
                }, r.prototype.push = function (e, t, n) {
                    this.pending && this.pushPending();
                    var r = new o(e, t, n);
                    return n < 0 && this.level--, r.level = this.level, n > 0 && this.level++, this.pendingLevel = this.level, this.tokens.push(r), r
                }, r.prototype.scanDelims = function (e, t) {
                    var n, r, o, l, c, u, p, _, d, h = e, f = !0, m = !0, g = this.posMax, b = this.src.charCodeAt(e);
                    for (n = e > 0 ? this.src.charCodeAt(e - 1) : 32; h < g && this.src.charCodeAt(h) === b;)h++;
                    return o = h - e, r = h < g ? this.src.charCodeAt(h) : 32, p = s(n) || a(String.fromCharCode(n)), d = s(r) || a(String.fromCharCode(r)), u = i(n), (_ = i(r)) ? f = !1 : d && (u || p || (f = !1)), u ? m = !1 : p && (_ || d || (m = !1)), t ? (l = f, c = m) : (l = f && (!m || p), c = m && (!f || d)), {
                        can_open: l,
                        can_close: c,
                        length: o
                    }
                }, r.prototype.Token = o, e.exports = r
            }, function (e, t, n) {
                "use strict";
                function r(e) {
                    switch (e) {
                        case 10:
                        case 33:
                        case 35:
                        case 36:
                        case 37:
                        case 38:
                        case 42:
                        case 43:
                        case 45:
                        case 58:
                        case 60:
                        case 61:
                        case 62:
                        case 64:
                        case 91:
                        case 92:
                        case 93:
                        case 94:
                        case 95:
                        case 96:
                        case 123:
                        case 125:
                        case 126:
                            return !0;
                        default:
                            return !1
                    }
                }

                e.exports = function (e, t) {
                    for (var n = e.pos; n < e.posMax && !r(e.src.charCodeAt(n));)n++;
                    return n !== e.pos && (t || (e.pending += e.src.slice(e.pos, n)), e.pos = n, !0)
                }
            }, function (e, t, n) {
                "use strict";
                e.exports = function (e) {
                    var t, n, r = 0, o = e.tokens, i = e.tokens.length;
                    for (t = n = 0; t < i; t++)r += o[t].nesting, o[t].level = r, "text" === o[t].type && t + 1 < i && "text" === o[t + 1].type ? o[t + 1].content = o[t].content + o[t + 1].content : (t !== n && (o[n] = o[t]), n++);
                    t !== n && (o.length = n)
                }
            }, function (e, t, n) {
                "use strict";
                function r(e, t) {
                    var n;
                    return "string" != typeof t && (t = r.defaultChars), n = function (e) {
                        var t, n, r = o[e];
                        if (r)return r;
                        for (r = o[e] = [], t = 0; t < 128; t++)n = String.fromCharCode(t), r.push(n);
                        for (t = 0; t < e.length; t++)n = e.charCodeAt(t), r[n] = "%" + ("0" + n.toString(16).toUpperCase()).slice(-2);
                        return r
                    }(t), e.replace(/(%[a-f0-9]{2})+/gi, function (e) {
                        var t, r, o, i, a, s, l, c = "";
                        for (t = 0, r = e.length; t < r; t += 3)(o = parseInt(e.slice(t + 1, t + 3), 16)) < 128 ? c += n[o] : 192 == (224 & o) && t + 3 < r && 128 == (192 & (i = parseInt(e.slice(t + 4, t + 6), 16))) ? (l = o << 6 & 1984 | 63 & i, c += l < 128 ? "��" : String.fromCharCode(l), t += 3) : 224 == (240 & o) && t + 6 < r && (i = parseInt(e.slice(t + 4, t + 6), 16), a = parseInt(e.slice(t + 7, t + 9), 16), 128 == (192 & i) && 128 == (192 & a)) ? (l = o << 12 & 61440 | i << 6 & 4032 | 63 & a, c += l < 2048 || l >= 55296 && l <= 57343 ? "���" : String.fromCharCode(l), t += 6) : 240 == (248 & o) && t + 9 < r && (i = parseInt(e.slice(t + 4, t + 6), 16), a = parseInt(e.slice(t + 7, t + 9), 16), s = parseInt(e.slice(t + 10, t + 12), 16), 128 == (192 & i) && 128 == (192 & a) && 128 == (192 & s)) ? ((l = o << 18 & 1835008 | i << 12 & 258048 | a << 6 & 4032 | 63 & s) < 65536 || l > 1114111 ? c += "����" : (l -= 65536, c += String.fromCharCode(55296 + (l >> 10), 56320 + (1023 & l))), t += 9) : c += "�";
                        return c
                    })
                }

                var o = {};
                r.defaultChars = ";/?:@&=+$,#", r.componentChars = "", e.exports = r
            }, function (e, t, n) {
                "use strict";
                function r(e, t, n) {
                    var i, a, s, l, c, u = "";
                    for ("string" != typeof t && (n = t, t = r.defaultChars), void 0 === n && (n = !0), c = function (e) {
                        var t, n, r = o[e];
                        if (r)return r;
                        for (r = o[e] = [], t = 0; t < 128; t++)n = String.fromCharCode(t), /^[0-9a-z]$/i.test(n) ? r.push(n) : r.push("%" + ("0" + t.toString(16).toUpperCase()).slice(-2));
                        for (t = 0; t < e.length; t++)r[e.charCodeAt(t)] = e[t];
                        return r
                    }(t), i = 0, a = e.length; i < a; i++)if (s = e.charCodeAt(i), n && 37 === s && i + 2 < a && /^[0-9a-f]{2}$/i.test(e.slice(i + 1, i + 3))) u += e.slice(i, i + 3), i += 2; else if (s < 128) u += c[s]; else if (s >= 55296 && s <= 57343) {
                        if (s >= 55296 && s <= 56319 && i + 1 < a && (l = e.charCodeAt(i + 1)) >= 56320 && l <= 57343) {
                            u += encodeURIComponent(e[i] + e[i + 1]), i++;
                            continue
                        }
                        u += "%EF%BF%BD"
                    } else u += encodeURIComponent(e[i]);
                    return u
                }

                var o = {};
                r.defaultChars = ";/?:@&=+$,-_.!~*'()#", r.componentChars = "-_.!~*'()", e.exports = r
            }, function (e, t, n) {
                "use strict";
                e.exports = function (e) {
                    var t = "";
                    return t += e.protocol || "", t += e.slashes ? "//" : "", t += e.auth ? e.auth + "@" : "", e.hostname && -1 !== e.hostname.indexOf(":") ? t += "[" + e.hostname + "]" : t += e.hostname || "", t += e.port ? ":" + e.port : "", t += e.pathname || "", t += e.search || "", t += e.hash || ""
                }
            }, function (e, t, n) {
                "use strict";
                function r() {
                    this.protocol = null, this.slashes = null, this.auth = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.pathname = null
                }

                var o = /^([a-z0-9.+-]+:)/i, i = /:[0-9]*$/, a = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
                    s = ["{", "}", "|", "\\", "^", "`"].concat(["<", ">", '"', "`", " ", "\r", "\n", "\t"]),
                    l = ["'"].concat(s), c = ["%", "/", "?", ";", "#"].concat(l), u = ["/", "?", "#"],
                    p = /^[+a-z0-9A-Z_-]{0,63}$/, _ = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
                    d = {javascript: !0, "javascript:": !0}, h = {
                        http: !0,
                        https: !0,
                        ftp: !0,
                        gopher: !0,
                        file: !0,
                        "http:": !0,
                        "https:": !0,
                        "ftp:": !0,
                        "gopher:": !0,
                        "file:": !0
                    };
                r.prototype.parse = function (e, t) {
                    var n, r, i, s, l, f = e;
                    if (f = f.trim(), !t && 1 === e.split("#").length) {
                        var m = a.exec(f);
                        if (m)return this.pathname = m[1], m[2] && (this.search = m[2]), this
                    }
                    var g = o.exec(f);
                    if (g && (g = g[0], i = g.toLowerCase(), this.protocol = g, f = f.substr(g.length)), (t || g || f.match(/^\/\/[^@\/]+@[^@\/]+/)) && (!(l = "//" === f.substr(0, 2)) || g && d[g] || (f = f.substr(2), this.slashes = !0)), !d[g] && (l || g && !h[g])) {
                        var b = -1;
                        for (n = 0; n < u.length; n++)-1 !== (s = f.indexOf(u[n])) && (-1 === b || s < b) && (b = s);
                        var v, k;
                        for (-1 !== (k = -1 === b ? f.lastIndexOf("@") : f.lastIndexOf("@", b)) && (v = f.slice(0, k), f = f.slice(k + 1), this.auth = v), b = -1, n = 0; n < c.length; n++)-1 !== (s = f.indexOf(c[n])) && (-1 === b || s < b) && (b = s);
                        -1 === b && (b = f.length), ":" === f[b - 1] && b--;
                        var w = f.slice(0, b);
                        f = f.slice(b), this.parseHost(w), this.hostname = this.hostname || "";
                        var y = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
                        if (!y) {
                            var x = this.hostname.split(/\./);
                            for (n = 0, r = x.length; n < r; n++) {
                                var C = x[n];
                                if (C && !C.match(p)) {
                                    for (var A = "", E = 0, D = C.length; E < D; E++)C.charCodeAt(E) > 127 ? A += "x" : A += C[E];
                                    if (!A.match(p)) {
                                        var S = x.slice(0, n), q = x.slice(n + 1), T = C.match(_);
                                        T && (S.push(T[1]), q.unshift(T[2])), q.length && (f = q.join(".") + f), this.hostname = S.join(".");
                                        break
                                    }
                                }
                            }
                        }
                        this.hostname.length > 255 && (this.hostname = ""), y && (this.hostname = this.hostname.substr(1, this.hostname.length - 2))
                    }
                    var j = f.indexOf("#");
                    -1 !== j && (this.hash = f.substr(j), f = f.slice(0, j));
                    var L = f.indexOf("?");
                    return -1 !== L && (this.search = f.substr(L), f = f.slice(0, L)), f && (this.pathname = f), h[i] && this.hostname && !this.pathname && (this.pathname = ""), this
                }, r.prototype.parseHost = function (e) {
                    var t = i.exec(e);
                    t && (":" !== (t = t[0]) && (this.port = t.substr(1)), e = e.substr(0, e.length - t.length)), e && (this.hostname = e)
                }, e.exports = function (e, t) {
                    if (e && e instanceof r)return e;
                    var n = new r;
                    return n.parse(e, t), n
                }
            }, function (e, t, n) {
                (function (e, r) {
                    var o;
                    !function (r) {
                        function i(e) {
                            throw new RangeError(S[e])
                        }

                        function a(e, t) {
                            for (var n = e.length, r = []; n--;)r[n] = t(e[n]);
                            return r
                        }

                        function s(e, t) {
                            var n = e.split("@"), r = "";
                            return n.length > 1 && (r = n[0] + "@", e = n[1]), e = e.replace(D, "."), r + a(e.split("."), t).join(".")
                        }

                        function l(e) {
                            for (var t, n, r = [], o = 0, i = e.length; o < i;)(t = e.charCodeAt(o++)) >= 55296 && t <= 56319 && o < i ? 56320 == (64512 & (n = e.charCodeAt(o++))) ? r.push(((1023 & t) << 10) + (1023 & n) + 65536) : (r.push(t), o--) : r.push(t);
                            return r
                        }

                        function c(e) {
                            return a(e, function (e) {
                                var t = "";
                                return e > 65535 && (e -= 65536, t += j(e >>> 10 & 1023 | 55296), e = 56320 | 1023 & e), t += j(e)
                            }).join("")
                        }

                        function u(e) {
                            return e - 48 < 10 ? e - 22 : e - 65 < 26 ? e - 65 : e - 97 < 26 ? e - 97 : g
                        }

                        function p(e, t) {
                            return e + 22 + 75 * (e < 26) - ((0 != t) << 5)
                        }

                        function _(e, t, n) {
                            var r = 0;
                            for (e = n ? T(e / w) : e >> 1, e += T(e / t); e > q * v >> 1; r += g)e = T(e / q);
                            return T(r + (q + 1) * e / (e + k))
                        }

                        function d(e) {
                            var t, n, r, o, a, s, l, p, d, h, f = [], k = e.length, w = 0, A = x, E = y;
                            for ((n = e.lastIndexOf(C)) < 0 && (n = 0), r = 0; r < n; ++r)e.charCodeAt(r) >= 128 && i("not-basic"), f.push(e.charCodeAt(r));
                            for (o = n > 0 ? n + 1 : 0; o < k;) {
                                for (a = w, s = 1, l = g; o >= k && i("invalid-input"), ((p = u(e.charCodeAt(o++))) >= g || p > T((m - w) / s)) && i("overflow"), w += p * s, d = l <= E ? b : l >= E + v ? v : l - E, !(p < d); l += g)h = g - d, s > T(m / h) && i("overflow"), s *= h;
                                E = _(w - a, t = f.length + 1, 0 == a), T(w / t) > m - A && i("overflow"), A += T(w / t), w %= t, f.splice(w++, 0, A)
                            }
                            return c(f)
                        }

                        function h(e) {
                            var t, n, r, o, a, s, c, u, d, h, f, k, w, A, E, D = [];
                            for (k = (e = l(e)).length, t = x, n = 0, a = y, s = 0; s < k; ++s)(f = e[s]) < 128 && D.push(j(f));
                            for (r = o = D.length, o && D.push(C); r < k;) {
                                for (c = m, s = 0; s < k; ++s)(f = e[s]) >= t && f < c && (c = f);
                                for (c - t > T((m - n) / (w = r + 1)) && i("overflow"), n += (c - t) * w, t = c, s = 0; s < k; ++s)if ((f = e[s]) < t && ++n > m && i("overflow"), f == t) {
                                    for (u = n, d = g; h = d <= a ? b : d >= a + v ? v : d - a, !(u < h); d += g)E = u - h, A = g - h, D.push(j(p(h + E % A, 0))), u = T(E / A);
                                    D.push(j(p(u, 0))), a = _(n, w, r == o), n = 0, ++r
                                }
                                ++n, ++t
                            }
                            return D.join("")
                        }

                        "object" == typeof t && t && t.nodeType, "object" == typeof e && e && e.nodeType;
                        var f, m = 2147483647, g = 36, b = 1, v = 26, k = 38, w = 700, y = 72, x = 128, C = "-",
                            A = /^xn--/, E = /[^\x20-\x7E]/, D = /[\x2E\u3002\uFF0E\uFF61]/g, S = {
                                overflow: "Overflow: input needs wider integers to process",
                                "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                                "invalid-input": "Invalid input"
                            }, q = g - b, T = Math.floor, j = String.fromCharCode;
                        f = {
                            version: "1.4.1",
                            ucs2: {decode: l, encode: c},
                            decode: d,
                            encode: h,
                            toASCII: function (e) {
                                return s(e, function (e) {
                                    return E.test(e) ? "xn--" + h(e) : e
                                })
                            },
                            toUnicode: function (e) {
                                return s(e, function (e) {
                                    return A.test(e) ? d(e.slice(4).toLowerCase()) : e
                                })
                            }
                        }, void 0 !== (o = function () {
                            return f
                        }.call(t, n, t, e)) && (e.exports = o)
                    }()
                }).call(t, n(193)(e), n(192))
            }, function (e, t) {
                e.exports = 'Markdown 语法简介\n=============\n> [语法详解](http://commonmark.org/help/)\n\n## **粗体**\n```\n**粗体**\n__粗体__\n```\n## *斜体*\n```\n*斜体*\n_斜体_\n```\n## 标题\n```\n# 一级标题 #\n一级标题\n====\n## 二级标题 ##\n二级标题\n----\n### 三级标题 ###\n#### 四级标题 ####\n##### 五级标题 #####\n###### 六级标题 ######\n```\n## 分割线\n```\n***\n---\n```\n****\n## ^上^角~下~标\n```\n上角标 x^2^\n下角标 H~2~0\n```\n## ++下划线++ ~~中划线~~\n```\n++下划线++\n~~中划线~~\n```\n## ==标记==\n```\n==标记==\n```\n## 段落引用\n```\n> 一级\n>> 二级\n>>> 三级\n...\n```\n\n## 列表\n```\n有序列表\n1.\n2.\n3.\n...\n无序列表\n-\n-\n...\n```\n## 链接\n```\n[链接](www.baidu.com)\n![图片描述](http://www.image.com)\n```\n## 代码段落\n\\``` type\n\n代码段落\n\n\\```\n\n\\` 代码块 \\`\n\n```c++\nint main()\n{\n    printf("hello world!");\n}\n```\n`code`\n## 表格(table)\n```\n| 标题1 | 标题2 | 标题3 |\n| :--  | :--: | ----: |\n| 左对齐 | 居中 | 右对齐 |\n| ---------------------- | ------------- | ----------------- |\n```\n| 标题1 | 标题2 | 标题3 |\n| :--  | :--: | ----: |\n| 左对齐 | 居中 | 右对齐 |\n| ---------------------- | ------------- | ----------------- |\n## 脚注(footnote)\n```\nhello[^hello]\n```\n\n见底部脚注[^hello]\n\n[^hello]: 一个注脚\n\n## 表情(emoji)\n[参考网站: https://www.webpagefx.com/tools/emoji-cheat-sheet/](https://www.webpagefx.com/tools/emoji-cheat-sheet/)\n```\n:laughing:\n:blush:\n:smiley:\n:)\n...\n```\n:laughing::blush::smiley::)\n\n## $\\KaTeX$公式\n\n我们可以渲染公式例如：$x_i + y_i = z_i$和$\\sum_{i=1}^n a_i=0$\n我们也可以单行渲染\n$$\\sum_{i=1}^n a_i=0$$\n具体可参照[katex文档](http://www.intmath.com/cg5/katex-mathjax-comparison.php)和[katex支持的函数](https://github.com/Khan/KaTeX/wiki/Function-Support-in-KaTeX)以及[latex文档](https://math.meta.stackexchange.com/questions/5020/mathjax-basic-tutorial-and-quick-reference)\n\n## 布局\n\n::: hljs-left\n`::: hljs-left`\n`居左`\n`:::`\n:::\n\n::: hljs-center\n`::: hljs-center`\n`居中`\n`:::`\n:::\n\n::: hljs-right\n`::: hljs-right`\n`居右`\n`:::`\n:::\n\n## 定义\n\n术语一\n\n:   定义一\n\n包含有*行内标记*的术语二\n\n:   定义二\n\n        {一些定义二的文字或代码}\n\n    定义二的第三段\n\n```\n术语一\n\n:   定义一\n\n包含有*行内标记*的术语二\n\n:   定义二\n\n        {一些定义二的文字或代码}\n\n    定义二的第三段\n\n```\n\n## abbr\n*[HTML]: Hyper Text Markup Language\n*[W3C]:  World Wide Web Consortium\nHTML 规范由 W3C 维护\n```\n*[HTML]: Hyper Text Markup Language\n*[W3C]:  World Wide Web Consortium\nHTML 规范由 W3C 维护\n```\n'
            }, function (e, t) {
                e.exports = 'Markdown Guide\n===\n> Detailed: [http://commonmark.org/help/](http://commonmark.org/help/)\n\n## **Bold**\n```\n**bold**\n__bold__\n```\n## *Italic*\n```\n*italic*\n_italic_\n```\n## Header\n```\n# h1 #\nh1\n====\n## h2 ##\nh2\n----\n### h3 ###\n#### h4 ####\n##### h5 #####\n###### h6 ######\n```\n## Dividing line\n```\n***\n---\n```\n****\n## ^Super^script & ~Sub~script\n```\nsuper x^2^\nsub H~2~0\n```\n## ++Underline++ & ~~Strikethrough~~\n```\n++underline++\n~~strikethrough~~\n```\n## ==Mark==\n```\n==mark==\n```\n## Quote\n\n```\n> quote 1\n>> quote 2\n>>> quote 3\n...\n```\n\n## List\n```\nol\n1.\n2.\n3.\n...\n\nul\n-\n-\n...\n```\n## Link\n```\nText Link\n[Text](www.baidu.com)\n\nImage Link\n![Text](http://www.image.com)\n```\n## Code\n\\``` type\n\ncode block\n\n\\```\n\n\\` code \\`\n\n```c++\nint main()\n{\n    printf("hello world!");\n}\n```\n`code`\n\n## Table\n```\n| th1 | th2 | th3 |\n| :--  | :--: | ----: |\n| left | center | right |\n```\n| th1 | th2 | th3 |\n| :--  | :--: | ----: |\n| left | center | right |\n| ---------------------- | ------------- | ----------------- |\n## Footnote\n```\nhello[^hello]\n```\n\nLook at the bottom[^hello]\n\n[^hello]: footnote\n\n## Emojis\nDetailed: [https://www.webpagefx.com/tools/emoji-cheat-sheet/](https://www.webpagefx.com/tools/emoji-cheat-sheet/)\n```\n:laughing:\n:blush:\n:smiley:\n:)\n...\n```\n:laughing::blush::smiley::)\n\n## $\\KaTeX$ Mathematics\n\nWe can render formulas for example：$x_i + y_i = z_i$ and $\\sum_{i=1}^n a_i=0$\nWe can also single-line rendering\n$$\\sum_{i=1}^n a_i=0$$\nDetailed: [katex](http://www.intmath.com/cg5/katex-mathjax-comparison.php)和[katex function](https://github.com/Khan/KaTeX/wiki/Function-Support-in-KaTeX)以及[latex](https://math.meta.stackexchange.com/questions/5020/mathjax-basic-tutorial-and-quick-reference)\n\n## Layout\n\n::: hljs-left\n`::: hljs-left`\n`left`\n`:::`\n:::\n\n::: hljs-center\n`::: hljs-center`\n`center`\n`:::`\n:::\n\n::: hljs-right\n`::: hljs-right`\n`right`\n`:::`\n:::\n\n## deflist\n\nTerm 1\n\n:   Definition 1\n\nTerm 2 with *inline markup*\n\n:   Definition 2\n\n        { some code, part of Definition 2 }\n\n    Third paragraph of definition 2.\n\n```\nTerm 1\n\n:   Definition 1\n\nTerm 2 with *inline markup*\n\n:   Definition 2\n\n        { some code, part of Definition 2 }\n\n    Third paragraph of definition 2.\n\n```\n\n## abbr\n*[HTML]: Hyper Text Markup Language\n*[W3C]:  World Wide Web Consortium\nThe HTML specification\nis maintained by the W3C.\n```\n*[HTML]: Hyper Text Markup Language\n*[W3C]:  World Wide Web Consortium\nThe HTML specification\nis maintained by the W3C.\n```\n'
            }, function (e, t) {
                e.exports = 'Guide Markdown\n==============\n> Détail : [http://commonmark.org/help/](http://commonmark.org/help/)\n\n## **Bold**\n```\n**bold**\n__bold__\n```\n## *Italic*\n```\n*italic*\n_italic_\n```\n## Header\n```\n# h1 #\nh1\n====\n## h2 ##\nh2\n----\n### h3 ###\n#### h4 ####\n##### h5 #####\n###### h6 ######\n```\n## Dividing line\n```\n***\n---\n```\n****\n## ^Super^script & ~Sub~script\n```\nsuper x^2^\nsub H~2~0\n```\n## ++Underline++ & ~~Strikethrough~~\n```\n++underline++\n~~strikethrough~~\n```\n## ==Mark==\n```\n==mark==\n```\n## Quote\n\n```\n> quote 1\n>> quote 2\n>>> quote 3\n...\n```\n\n## List\n```\nol\n1.\n2.\n3.\n...\n\nul\n-\n-\n...\n```\n## Link\n```\nText Link\n[Text](www.baidu.com)\n\nImage Link\n![Text](http://www.image.com)\n```\n## Code\n\\``` type\n\ncode block\n\n\\```\n\n\\` code \\`\n\n```c++\nint main()\n{\n    printf("hello world!");\n}\n```\n`code`\n\n## Table\n```\n| th1 | th2 | th3 |\n| :--  | :--: | ----: |\n| left | center | right |\n```\n| th1 | th2 | th3 |\n| :--  | :--: | ----: |\n| left | center | right |\n| ---------------------- | ------------- | ----------------- |\n## Footnote\n```\nhello[^hello]\n```\n\nLook at the bottom[^hello]\n\n[^hello]: footnote\n\n## Emojis\nDetailed: [https://www.webpagefx.com/tools/emoji-cheat-sheet/](https://www.webpagefx.com/tools/emoji-cheat-sheet/)\n```\n:laughing:\n:blush:\n:smiley:\n:)\n...\n```\n:laughing::blush::smiley::)\n\n## $\\KaTeX$ Mathematics\n\nWe can render formulas for example：$x_i + y_i = z_i$ and $\\sum_{i=1}^n a_i=0$\nWe can also single-line rendering\n$$\\sum_{i=1}^n a_i=0$$\nDetailed: [katex](http://www.intmath.com/cg5/katex-mathjax-comparison.php)和[katex function](https://github.com/Khan/KaTeX/wiki/Function-Support-in-KaTeX)以及[latex](https://math.meta.stackexchange.com/questions/5020/mathjax-basic-tutorial-and-quick-reference)\n\n## Layout\n\n::: hljs-left\n`::: hljs-left`\n`left`\n`:::`\n:::\n\n::: hljs-center\n`::: hljs-center`\n`center`\n`:::`\n:::\n\n::: hljs-right\n`::: hljs-right`\n`right`\n`:::`\n:::\n\n## deflist\n\nTerm 1\n\n:   Definition 1\n\nTerm 2 with *inline markup*\n\n:   Definition 2\n\n        { some code, part of Definition 2 }\n\n    Third paragraph of definition 2.\n\n```\nTerm 1\n\n:   Definition 1\n\nTerm 2 with *inline markup*\n\n:   Definition 2\n\n        { some code, part of Definition 2 }\n\n    Third paragraph of definition 2.\n\n```\n\n## abbr\n*[HTML]: Hyper Text Markup Language\n*[W3C]:  World Wide Web Consortium\nThe HTML specification\nis maintained by the W3C.\n```\n*[HTML]: Hyper Text Markup Language\n*[W3C]:  World Wide Web Consortium\nThe HTML specification\nis maintained by the W3C.\n```\n'
            }, function (e, t) {
                e.exports = /[\xAD\u0600-\u0605\u061C\u06DD\u070F\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804\uDCBD|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/
            }, function (e, t, n) {
                "use strict";
                t.Any = n(53), t.Cc = n(51), t.Cf = n(178), t.P = n(33), t.Z = n(52)
            }, function (e, t, n) {
                var r = !1, o = n(14)(n(56), n(183), function (e) {
                    r || n(187)
                }, null, null);
                o.options.__file = "/home/chc/code/hwork/mavonEditor/node_modules/_auto-textarea@1.3.8@auto-textarea/auto-textarea.vue", o.esModule && Object.keys(o.esModule).some(function (e) {
                    return "default" !== e && "__" !== e.substr(0, 2)
                }) && console.error("named exports are not supported in *.vue files."), o.options.functional && console.error("[vue-loader] auto-textarea.vue: functional components are not supported with templates, they should use render functions."), e.exports = o.exports
            }, function (e, t, n) {
                var r = !1, o = n(14)(n(57), n(184), function (e) {
                    r || n(188)
                }, "data-v-194160b6", null);
                o.options.__file = "/home/chc/code/hwork/mavonEditor/src/components/s-md-toolbar-left.vue", o.esModule && Object.keys(o.esModule).some(function (e) {
                    return "default" !== e && "__" !== e.substr(0, 2)
                }) && console.error("named exports are not supported in *.vue files."), o.options.functional && console.error("[vue-loader] s-md-toolbar-left.vue: functional components are not supported with templates, they should use render functions."), e.exports = o.exports
            }, function (e, t, n) {
                var r = n(14)(n(58), n(185), null, null, null);
                r.options.__file = "/home/chc/code/hwork/mavonEditor/src/components/s-md-toolbar-right.vue", r.esModule && Object.keys(r.esModule).some(function (e) {
                    return "default" !== e && "__" !== e.substr(0, 2)
                }) && console.error("named exports are not supported in *.vue files."), r.options.functional && console.error("[vue-loader] s-md-toolbar-right.vue: functional components are not supported with templates, they should use render functions."), e.exports = r.exports
            }, function (e, t, n) {
                e.exports = {
                    render: function () {
                        var e = this, t = e.$createElement, n = e._self._c || t;
                        return n("div", {
                            staticClass: "auto-textarea-wrapper",
                            style: {fontSize: e.fontSize, lineHeight: e.lineHeight}
                        }, [n("pre", {
                            staticClass: "auto-textarea-block",
                            style: {fontSize: e.fontSize, lineHeight: e.lineHeight}
                        }, [n("br"), e._v(e._s(e.temp_value) + " ")]), e._v(" "), n("textarea", {
                            directives: [{
                                name: "model",
                                rawName: "v-model",
                                value: e.temp_value,
                                expression: "temp_value"
                            }],
                            ref: "vTextarea",
                            staticClass: "auto-textarea-input",
                            class: {"no-border": !e.border, "no-resize": !e.resize},
                            style: {fontSize: e.fontSize, lineHeight: e.lineHeight},
                            attrs: {autofocus: e.s_autofocus, spellcheck: "false", placeholder: e.placeholder},
                            domProps: {value: e.temp_value},
                            on: {
                                keyup: e.change, input: function (t) {
                                    t.target.composing || (e.temp_value = t.target.value)
                                }
                            }
                        })])
                    }, staticRenderFns: []
                }, e.exports.render._withStripped = !0
            }, function (e, t, n) {
                e.exports = {
                    render: function () {
                        var e = this, t = e.$createElement, n = e._self._c || t;
                        return n("div", {staticClass: "left"}, [e.toolbars.bold ? n("button", {
                            staticClass: "op-icon fa fa-mavon-bold",
                            attrs: {
                                disabled: !e.editable,
                                type: "button",
                                "aria-hidden": "true",
                                title: e.d_words.tl_bold + " (ctrl+b)"
                            },
                            on: {
                                click: function (t) {
                                    e.$clicks("bold")
                                }
                            }
                        }) : e._e(), e._v(" "), e.toolbars.italic ? n("button", {
                            staticClass: "op-icon fa fa-mavon-italic",
                            attrs: {
                                disabled: !e.editable,
                                type: "button",
                                "aria-hidden": "true",
                                title: e.d_words.tl_italic + " (ctrl+i)"
                            },
                            on: {
                                click: function (t) {
                                    e.$clicks("italic")
                                }
                            }
                        }) : e._e(), e._v(" "), e.toolbars.header ? n("button", {
                            staticClass: "op-icon fa fa-mavon-header",
                            attrs: {
                                disabled: !e.editable,
                                type: "button",
                                "aria-hidden": "true",
                                title: e.d_words.tl_header + " (ctrl+h)"
                            },
                            on: {
                                click: function (t) {
                                    e.$clicks("header")
                                }
                            }
                        }) : e._e(), e._v(" "), e.toolbars.header || e.toolbars.italic || e.toolbars.bold ? n("span", {staticClass: "op-icon-divider"}) : e._e(), e._v(" "), e.toolbars.underline ? n("button", {
                            staticClass: "op-icon fa fa-mavon-underline",
                            attrs: {
                                disabled: !e.editable,
                                type: "button",
                                title: e.d_words.tl_underline + " (ctrl+u)",
                                "aria-hidden": "true"
                            },
                            on: {
                                click: function (t) {
                                    e.$clicks("underline")
                                }
                            }
                        }) : e._e(), e._v(" "), e.toolbars.strikethrough ? n("button", {
                            staticClass: "op-icon fa fa-mavon-strikethrough",
                            attrs: {
                                disabled: !e.editable,
                                type: "button",
                                title: e.d_words.tl_strikethrough + " (ctrl+d)",
                                "aria-hidden": "true"
                            },
                            on: {
                                click: function (t) {
                                    e.$clicks("strikethrough")
                                }
                            }
                        }) : e._e(), e._v(" "), e.toolbars.mark ? n("button", {
                            staticClass: "op-icon fa fa-mavon-thumb-tack",
                            attrs: {
                                disabled: !e.editable,
                                type: "button",
                                title: e.d_words.tl_mark + " (ctrl+m)",
                                "aria-hidden": "true"
                            },
                            on: {
                                click: function (t) {
                                    e.$clicks("mark")
                                }
                            }
                        }) : e._e(), e._v(" "), e.toolbars.superscript ? n("button", {
                            staticClass: "op-icon fa fa-mavon-superscript",
                            attrs: {
                                disabled: !e.editable,
                                type: "button",
                                "aria-hidden": "true",
                                title: e.d_words.tl_superscript + " (ctrl+alt+s)"
                            },
                            on: {
                                click: function (t) {
                                    e.$clicks("superscript")
                                }
                            }
                        }) : e._e(), e._v(" "), e.toolbars.subscript ? n("button", {
                            staticClass: "op-icon fa fa-mavon-subscript",
                            attrs: {
                                disabled: !e.editable,
                                type: "button",
                                "aria-hidden": "true",
                                title: e.d_words.tl_subscript + " (ctrl+shift+s)"
                            },
                            on: {
                                click: function (t) {
                                    e.$clicks("subscript")
                                }
                            }
                        }) : e._e(), e._v(" "), e.toolbars.alignleft ? n("button", {
                            staticClass: "op-icon fa fa-mavon-align-left",
                            attrs: {
                                disabled: !e.editable,
                                type: "button",
                                "aria-hidden": "true",
                                title: e.d_words.tl_alignleft + " (ctrl+l)"
                            },
                            on: {
                                click: function (t) {
                                    e.$clicks("alignleft")
                                }
                            }
                        }) : e._e(), e._v(" "), e.toolbars.aligncenter ? n("button", {
                            staticClass: "op-icon fa fa-mavon-align-center",
                            attrs: {
                                disabled: !e.editable,
                                type: "button",
                                "aria-hidden": "true",
                                title: e.d_words.tl_aligncenter + " (ctrl+e)"
                            },
                            on: {
                                click: function (t) {
                                    e.$clicks("aligncenter")
                                }
                            }
                        }) : e._e(), e._v(" "), e.toolbars.alignright ? n("button", {
                            staticClass: "op-icon fa fa-mavon-align-right",
                            attrs: {
                                disabled: !e.editable,
                                type: "button",
                                "aria-hidden": "true",
                                title: e.d_words.tl_alignright + " (ctrl+r)"
                            },
                            on: {
                                click: function (t) {
                                    e.$clicks("alignright")
                                }
                            }
                        }) : e._e(), e._v(" "), e.toolbars.superscript || e.toolbars.subscript || e.toolbars.underline || e.toolbars.strikethrough || e.toolbars.mark ? n("span", {staticClass: "op-icon-divider"}) : e._e(), e._v(" "), e.toolbars.quote ? n("button", {
                            staticClass: "op-icon fa fa-mavon-quote-left",
                            attrs: {
                                disabled: !e.editable,
                                type: "button",
                                "aria-hidden": "true",
                                title: e.d_words.tl_quote + " (ctrl+q)"
                            },
                            on: {
                                click: function (t) {
                                    e.$clicks("quote")
                                }
                            }
                        }) : e._e(), e._v(" "), e.toolbars.ol ? n("button", {
                            staticClass: "op-icon fa fa-mavon-list-ol",
                            attrs: {
                                disabled: !e.editable,
                                type: "button",
                                "aria-hidden": "true",
                                title: e.d_words.tl_ol + " (ctrl+o)"
                            },
                            on: {
                                click: function (t) {
                                    e.$clicks("ol")
                                }
                            }
                        }) : e._e(), e._v(" "), e.toolbars.ul ? n("button", {
                            staticClass: "op-icon fa fa-mavon-list-ul",
                            attrs: {
                                disabled: !e.editable,
                                type: "button",
                                "aria-hidden": "true",
                                title: e.d_words.tl_ul + " (ctrl+alt+u)"
                            },
                            on: {
                                click: function (t) {
                                    e.$clicks("ul")
                                }
                            }
                        }) : e._e(), e._v(" "), e.toolbars.ul || e.toolbars.ol || e.toolbars.quote ? n("span", {staticClass: "op-icon-divider"}) : e._e(), e._v(" "), e.toolbars.link ? n("button", {
                            staticClass: "op-icon fa fa-mavon-link",
                            attrs: {
                                disabled: !e.editable,
                                type: "button",
                                "aria-hidden": "true",
                                title: e.d_words.tl_link + " (ctrl+l)"
                            },
                            on: {
                                click: function (t) {
                                    t.stopPropagation(), e.$toggle_imgLinkAdd("link")
                                }
                            }
                        }) : e._e(), e._v(" "), e.toolbars.imagelink ? n("div", {
                            staticClass: "op-icon fa fa-mavon-picture-o dropdown",
                            class: {selected: e.s_img_dropdown_open},
                            attrs: {disabled: !e.editable, type: "button", "aria-hidden": "true"},
                            on: {
                                click: function (t) {
                                    t.stopPropagation(), e.$click_toggle_image_dropdown()
                                }
                            }
                        }, [n("div", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: e.s_img_dropdown_open,
                                expression: "s_img_dropdown_open"
                            }], staticClass: "op-image popup-dropdown"
                        }, [n("div", {
                            staticClass: "dropdown-item", attrs: {title: "ctrl+alt+l"}, on: {
                                click: function (t) {
                                    t.stopPropagation(), e.$toggle_imgLinkAdd("imagelink")
                                }
                            }
                        }, [n("span", [e._v(e._s(e.d_words.tl_image))])]), e._v(" "), n("div", {
                            staticClass: "dropdown-item",
                            staticStyle: {overflow: "hidden"}
                        }, [n("input", {
                            key: e.img_file[0][0],
                            attrs: {
                                type: "file",
                                accept: "image/gif,image/jpeg,image/jpg,image/png,image/svg",
                                multiple: "multiple"
                            },
                            on: {
                                change: function (t) {
                                    e.$imgAdd(t)
                                }
                            }
                        }), e._v(e._s(e.d_words.tl_upload) + "\n            ")]), e._v(" "), e._l(e.img_file, function (t, r) {
                            return r > 0 ? n("div", {
                                staticClass: "dropdown-item dropdown-images", on: {
                                    click: function (t) {
                                        t.stopPropagation(), e.$imgFileListClick(r)
                                    }
                                }
                            }, [n("span", [e._v(e._s(t[0]))]), e._v(" "), n("button", {
                                staticClass: "op-icon fa fa-mavon-trash-o",
                                attrs: {
                                    slot: "right",
                                    type: "button",
                                    "aria-hidden": "true",
                                    title: e.d_words.tl_upload_remove
                                },
                                on: {
                                    click: function (t) {
                                        t.stopPropagation(), e.$imgDel(r)
                                    }
                                },
                                slot: "right"
                            }), e._v(" "), n("img", {
                                staticClass: "image-show",
                                attrs: {src: t[1].miniurl, alt: "none"}
                            })]) : e._e()
                        })], 2)]) : e._e(), e._v(" "), e.toolbars.code ? n("button", {
                            staticClass: "op-icon fa fa-mavon-code",
                            attrs: {
                                disabled: !e.editable,
                                type: "button",
                                "aria-hidden": "true",
                                title: e.d_words.tl_code + " (ctrl+alt+c)"
                            },
                            on: {
                                click: function (t) {
                                    e.$clicks("code")
                                }
                            }
                        }) : e._e(), e._v(" "), e.toolbars.table ? n("button", {
                            staticClass: "op-icon fa fa-mavon-table",
                            attrs: {
                                disabled: !e.editable,
                                type: "button",
                                "aria-hidden": "true",
                                title: e.d_words.tl_table + " (ctrl+alt+t)"
                            },
                            on: {
                                click: function (t) {
                                    e.$clicks("table")
                                }
                            }
                        }) : e._e(), e._v(" "), e.toolbars.link || e.toolbars.imagelink || e.toolbars.code || e.toolbars.table ? n("span", {staticClass: "op-icon-divider"}) : e._e(), e._v(" "), e.toolbars.undo ? n("button", {
                            staticClass: "op-icon fa fa-mavon-undo",
                            attrs: {type: "button", "aria-hidden": "true", title: e.d_words.tl_undo + " (ctrl+z)"},
                            on: {
                                click: function (t) {
                                    e.$clicks("undo")
                                }
                            }
                        }) : e._e(), e._v(" "), e.toolbars.redo ? n("button", {
                            staticClass: "op-icon fa fa-mavon-repeat",
                            attrs: {type: "button", "aria-hidden": "true", title: e.d_words.tl_redo + " (ctrl+y)"},
                            on: {
                                click: function (t) {
                                    e.$clicks("redo")
                                }
                            }
                        }) : e._e(), e._v(" "), e.toolbars.trash ? n("button", {
                            staticClass: "op-icon fa fa-mavon-trash-o",
                            attrs: {
                                type: "button",
                                "aria-hidden": "true",
                                title: e.d_words.tl_trash + " (ctrl+breakspace)"
                            },
                            on: {
                                click: function (t) {
                                    e.$clicks("trash")
                                }
                            }
                        }) : e._e(), e._v(" "), e.toolbars.save ? n("button", {
                            staticClass: "op-icon fa fa-mavon-floppy-o",
                            attrs: {type: "button", "aria-hidden": "true", title: e.d_words.tl_save + " (ctrl+s)"},
                            on: {
                                click: function (t) {
                                    e.$clicks("save")
                                }
                            }
                        }) : e._e(), e._v(" "), n("transition", {attrs: {name: "fade"}}, [e.s_img_link_open ? n("div", {staticClass: "add-image-link-wrapper"}, [n("div", {staticClass: "add-image-link"}, [n("i", {
                            staticClass: "fa fa-mavon-times",
                            attrs: {"aria-hidden": "true"},
                            on: {
                                click: function (t) {
                                    t.stopPropagation(), t.preventDefault(), e.s_img_link_open = !1
                                }
                            }
                        }), e._v(" "), n("h3", {staticClass: "title"}, [e._v(e._s(e.d_words.tl_popup_link_title))]), e._v(" "), n("div", {staticClass: "link-text input-wrapper"}, [n("input", {
                            directives: [{
                                name: "model",
                                rawName: "v-model",
                                value: e.link_text,
                                expression: "link_text"
                            }],
                            ref: "linkTextInput",
                            attrs: {type: "text", placeholder: e.d_words.tl_popup_link_text},
                            domProps: {value: e.link_text},
                            on: {
                                input: function (t) {
                                    t.target.composing || (e.link_text = t.target.value)
                                }
                            }
                        })]), e._v(" "), n("div", {staticClass: "link-addr input-wrapper"}, [n("input", {
                            directives: [{
                                name: "model",
                                rawName: "v-model",
                                value: e.link_addr,
                                expression: "link_addr"
                            }],
                            attrs: {type: "text", placeholder: e.d_words.tl_popup_link_addr},
                            domProps: {value: e.link_addr},
                            on: {
                                input: function (t) {
                                    t.target.composing || (e.link_addr = t.target.value)
                                }
                            }
                        })]), e._v(" "), n("div", {
                            staticClass: "op-btn cancel", on: {
                                click: function (t) {
                                    t.stopPropagation(), e.s_img_link_open = !1
                                }
                            }
                        }, [e._v(e._s(e.d_words.tl_popup_link_cancel))]), e._v(" "), n("div", {
                            staticClass: "op-btn sure",
                            on: {
                                click: function (t) {
                                    t.stopPropagation(), e.$imgLinkAdd()
                                }
                            }
                        }, [e._v(e._s(e.d_words.tl_popup_link_sure))])])]) : e._e()])], 1)
                    }, staticRenderFns: []
                }, e.exports.render._withStripped = !0
            }, function (e, t, n) {
                e.exports = {
                    render: function () {
                        var e = this, t = e.$createElement, n = e._self._c || t;
                        return n("div", {staticClass: "right"}, [e.toolbars.navigation ? n("button", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: !e.s_navigation,
                                expression: "!s_navigation"
                            }],
                            staticClass: "op-icon fa fa-mavon-bars",
                            attrs: {type: "button", "aria-hidden": "true", title: e.d_words.tl_navigation_on + " (F8)"},
                            on: {
                                click: function (t) {
                                    e.$clicks("navigation")
                                }
                            }
                        }) : e._e(), e._v(" "), e.toolbars.navigation ? n("button", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: e.s_navigation,
                                expression: "s_navigation"
                            }],
                            staticClass: "op-icon fa fa-mavon-bars selected",
                            attrs: {
                                type: "button",
                                "aria-hidden": "true",
                                title: e.d_words.tl_navigation_off + " (F8)"
                            },
                            on: {
                                click: function (t) {
                                    e.$clicks("navigation")
                                }
                            }
                        }) : e._e(), e._v(" "), e.toolbars.preview ? n("button", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: e.s_preview_switch,
                                expression: "s_preview_switch"
                            }],
                            staticClass: "op-icon fa fa-mavon-eye-slash selected",
                            attrs: {type: "button", "aria-hidden": "true", title: e.d_words.tl_edit + " (F9)"},
                            on: {
                                click: function (t) {
                                    e.$clicks("preview")
                                }
                            }
                        }) : e._e(), e._v(" "), e.toolbars.preview ? n("button", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: !e.s_preview_switch,
                                expression: "!s_preview_switch"
                            }],
                            staticClass: "op-icon fa fa-mavon-eye",
                            attrs: {type: "button", "aria-hidden": "true", title: e.d_words.tl_preview + " (F9)"},
                            on: {
                                click: function (t) {
                                    e.$clicks("preview")
                                }
                            }
                        }) : e._e(), e._v(" "), e.toolbars.fullscreen ? n("button", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: !e.s_fullScreen,
                                expression: "!s_fullScreen"
                            }],
                            staticClass: "op-icon fa fa-mavon-arrows-alt",
                            attrs: {
                                type: "button",
                                title: e.d_words.tl_fullscreen_on + " (F10)",
                                "aria-hidden": "true"
                            },
                            on: {
                                click: function (t) {
                                    e.$clicks("fullscreen")
                                }
                            }
                        }) : e._e(), e._v(" "), e.toolbars.fullscreen ? n("button", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: e.s_fullScreen,
                                expression: "s_fullScreen"
                            }],
                            staticClass: "op-icon fa fa-mavon-compress selected",
                            attrs: {
                                type: "button",
                                title: e.d_words.tl_fullscreen_off + " (F10)",
                                "aria-hidden": "true"
                            },
                            on: {
                                click: function (t) {
                                    e.$clicks("fullscreen")
                                }
                            }
                        }) : e._e(), e._v(" "), e.toolbars.readmodel ? n("button", {
                            staticClass: "op-icon fa fa-mavon-window-maximize",
                            attrs: {type: "button", "aria-hidden": "true", title: e.d_words.tl_read + " (F11)"},
                            on: {
                                click: function (t) {
                                    e.$clicks("read")
                                }
                            }
                        }) : e._e(), e._v(" "), e.toolbars.subfield ? n("button", {
                            staticClass: "op-icon fa fa-mavon-columns",
                            class: {selected: e.s_subfield},
                            attrs: {
                                type: "button",
                                "aria-hidden": "true",
                                title: (e.s_subfield ? e.d_words.tl_single_column : e.d_words.tl_double_column) + " (F12)"
                            },
                            on: {
                                click: function (t) {
                                    e.$clicks("subfield")
                                }
                            }
                        }) : e._e(), e._v(" "), e.toolbars.help && e.toolbars.htmlcode && e.toolbars.readmodel && e.toolbars.fullscreen && e.toolbars.subfield && e.toolbars.navigation ? n("span", {staticClass: "op-icon-divider"}) : e._e(), e._v(" "), e.toolbars.htmlcode ? n("button", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: !e.s_html_code,
                                expression: "!s_html_code"
                            }],
                            staticClass: "op-icon fa fa-mavon-code",
                            attrs: {type: "button", title: e.d_words.tl_html_on, "aria-hidden": "true"},
                            on: {
                                click: function (t) {
                                    e.$clicks("html")
                                }
                            }
                        }) : e._e(), e._v(" "), e.toolbars.htmlcode ? n("button", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: e.s_html_code,
                                expression: "s_html_code"
                            }],
                            staticClass: "op-icon fa fa-mavon-code selected",
                            attrs: {type: "button", title: e.d_words.tl_html_off, "aria-hidden": "true"},
                            on: {
                                click: function (t) {
                                    e.$clicks("html")
                                }
                            }
                        }) : e._e(), e._v(" "), e.toolbars.help ? n("button", {
                            staticClass: "op-icon fa fa-mavon-question-circle",
                            staticStyle: {"font-size": "17px", padding: "5px 6px 5px 3px"},
                            attrs: {type: "button", title: e.d_words.tl_help, "aria-hidden": "true"},
                            on: {
                                click: function (t) {
                                    e.$clicks("help")
                                }
                            }
                        }) : e._e()])
                    }, staticRenderFns: []
                }, e.exports.render._withStripped = !0
            }, function (e, t, n) {
                e.exports = {
                    render: function () {
                        var e = this, t = e.$createElement, n = e._self._c || t;
                        return n("div", {
                            staticClass: "v-note-wrapper markdown-body",
                            class: [{fullscreen: e.s_fullScreen}]
                        }, [n("div", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: e.toolbarsFlag,
                                expression: "toolbarsFlag"
                            }], staticClass: "v-note-op"
                        }, [n("s-md-toolbar-left", {
                            ref: "toolbar_left",
                            attrs: {
                                editable: e.editable,
                                d_words: e.d_words,
                                toolbars: e.toolbars,
                                image_filter: e.image_filter
                            },
                            on: {
                                toolbar_left_click: e.toolbar_left_click,
                                toolbar_left_addlink: e.toolbar_left_addlink,
                                imgAdd: e.$imgAdd,
                                imgDel: e.$imgDel,
                                imgTouch: e.$imgTouch
                            }
                        }), e._v(" "), n("s-md-toolbar-right", {
                            ref: "toolbar_right",
                            attrs: {
                                d_words: e.d_words,
                                toolbars: e.toolbars,
                                s_subfield: e.s_subfield,
                                s_preview_switch: e.s_preview_switch,
                                s_fullScreen: e.s_fullScreen,
                                s_html_code: e.s_html_code,
                                s_navigation: e.s_navigation
                            },
                            on: {toolbar_right_click: e.toolbar_right_click}
                        })], 1), e._v(" "), n("div", {staticClass: "v-note-panel"}, [n("div", {
                            ref: "vNoteEdit",
                            staticClass: "v-note-edit divarea-wrapper",
                            class: {
                                "scroll-style": e.s_scrollStyle,
                                "single-edit": !e.s_preview_switch && !e.s_html_code,
                                "single-show": !e.s_subfield && e.s_preview_switch || !e.s_subfield && e.s_html_code
                            },
                            on: {scroll: e.$v_edit_scroll, click: e.textAreaFocus}
                        }, [n("div", {staticClass: "content-input-wrapper"}, [n("v-autoTextarea", {
                            ref: "vNoteTextarea",
                            staticClass: "content-input",
                            attrs: {
                                placeholder: e.placeholder ? e.placeholder : e.d_words.start_editor,
                                fontSize: "15px",
                                lineHeight: "1.5"
                            },
                            model: {
                                value: e.d_value, callback: function (t) {
                                    e.d_value = t
                                }, expression: "d_value"
                            }
                        })], 1)]), e._v(" "), n("div", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: e.s_preview_switch || e.s_html_code,
                                expression: "s_preview_switch || s_html_code"
                            }],
                            staticClass: "v-note-show",
                            class: {"single-show": !e.s_subfield && e.s_preview_switch || !e.s_subfield && e.s_html_code}
                        }, [n("div", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: !e.s_html_code,
                                expression: "!s_html_code"
                            }],
                            ref: "vShowContent",
                            staticClass: "v-show-content",
                            class: {"scroll-style": e.s_scrollStyle},
                            domProps: {innerHTML: e._s(e.d_render)}
                        }), e._v(" "), n("div", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: e.s_html_code,
                                expression: "s_html_code"
                            }], staticClass: "v-show-content-html", class: {"scroll-style": e.s_scrollStyle}
                        }, [e._v("\n                " + e._s(e.d_render) + "\n            ")])]), e._v(" "), n("transition", {attrs: {name: "slideTop"}}, [n("div", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: e.s_navigation,
                                expression: "s_navigation"
                            }], staticClass: "v-note-navigation-wrapper"
                        }, [n("div", {staticClass: "v-note-navigation-title"}, [e._v("\n                    " + e._s(e.d_words.navigation_title)), n("i", {
                            staticClass: "fa fa-mavon-times v-note-navigation-close",
                            attrs: {"aria-hidden": "true"},
                            on: {
                                click: function (t) {
                                    e.toolbar_right_click("navigation")
                                }
                            }
                        })]), e._v(" "), n("div", {
                            ref: "navigationContent",
                            staticClass: "v-note-navigation-content scroll-style"
                        })])])], 1), e._v(" "), n("transition", {attrs: {name: "fade"}}, [n("div", {ref: "help"}, [e.s_help ? n("div", {
                            staticClass: "v-note-help-wrapper",
                            on: {
                                click: function (t) {
                                    e.toolbar_right_click("help")
                                }
                            }
                        }, [n("div", {
                            staticClass: "v-note-help-content markdown-body", on: {
                                click: function (e) {
                                    e.stopPropagation()
                                }
                            }
                        }, [n("i", {
                            staticClass: "fa fa-mavon-times", attrs: {"aria-hidden": "true"}, on: {
                                click: function (t) {
                                    t.stopPropagation(), t.preventDefault(), e.toolbar_right_click("help")
                                }
                            }
                        }), e._v(" "), n("div", {
                            staticClass: "scroll-style v-note-help-show",
                            domProps: {innerHTML: e._s(e.d_help)}
                        })])]) : e._e()])]), e._v(" "), n("transition", {attrs: {name: "fade"}}, [e.d_preview_imgsrc ? n("div", {
                            staticClass: "v-note-img-wrapper",
                            on: {
                                click: function (t) {
                                    e.d_preview_imgsrc = null
                                }
                            }
                        }, [n("i", {
                            staticClass: "fa fa-mavon-times", attrs: {"aria-hidden": "true"}, on: {
                                click: function (t) {
                                    t.stopPropagation(), t.preventDefault(), e.d_preview_imgsrc = null
                                }
                            }
                        }), e._v(" "), n("img", {
                            attrs: {src: e.d_preview_imgsrc, alt: "none"}, on: {
                                click: function (e) {
                                    e.stopPropagation()
                                }
                            }
                        })]) : e._e()]), e._v(" "), n("div", {
                            ref: "vReadModel",
                            staticClass: "v-note-read-model scroll-style",
                            class: {show: e.s_readmodel}
                        }, [n("div", {
                            staticClass: "v-note-read-content",
                            domProps: {innerHTML: e._s(e.d_render)}
                        })])], 1)
                    }, staticRenderFns: []
                }, e.exports.render._withStripped = !0
            }, function (e, t, n) {
                var r = n(99);
                "string" == typeof r && (r = [[e.i, r, ""]]), r.locals && (e.exports = r.locals), n(15)("37051204", r, !1)
            }, function (e, t, n) {
                var r = n(100);
                "string" == typeof r && (r = [[e.i, r, ""]]), r.locals && (e.exports = r.locals), n(15)("125d9b08", r, !1)
            }, function (e, t, n) {
                var r = n(101);
                "string" == typeof r && (r = [[e.i, r, ""]]), r.locals && (e.exports = r.locals), n(15)("3e01f1a3", r, !1)
            }, function (e, t, n) {
                var r = n(102);
                "string" == typeof r && (r = [[e.i, r, ""]]), r.locals && (e.exports = r.locals), n(15)("3fdeafd3", r, !1)
            }, function (e, t) {
                e.exports = function (e, t) {
                    for (var n = [], r = {}, o = 0; o < t.length; o++) {
                        var i = t[o], a = i[0], s = {id: e + ":" + o, css: i[1], media: i[2], sourceMap: i[3]};
                        r[a] ? r[a].parts.push(s) : n.push(r[a] = {id: a, parts: [s]})
                    }
                    return n
                }
            }, function (e, t) {
                var n;
                n = function () {
                    return this
                }();
                try {
                    n = n || Function("return this")() || (0, eval)("this")
                } catch (e) {
                    "object" == typeof window && (n = window)
                }
                e.exports = n
            }, function (e, t) {
                e.exports = function (e) {
                    return e.webpackPolyfill || (e.deprecate = function () {
                    }, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
                        enumerable: !0,
                        get: function () {
                            return e.l
                        }
                    }), Object.defineProperty(e, "id", {
                        enumerable: !0, get: function () {
                            return e.i
                        }
                    }), e.webpackPolyfill = 1), e
                }
            }, function (e, t) {
                e.exports = {
                    start_editor: "开始编辑...",
                    navigation_title: "导航目录",
                    tl_bold: "粗体",
                    tl_italic: "斜体",
                    tl_header: "标题",
                    tl_underline: "下划线",
                    tl_strikethrough: "中划线",
                    tl_mark: "标记",
                    tl_superscript: "上角标",
                    tl_subscript: "下角标",
                    tl_quote: "段落引用",
                    tl_ol: "有序列表",
                    tl_ul: "无序列表",
                    tl_link: "链接",
                    tl_image: "添加链接",
                    tl_code: "代码块",
                    tl_table: "表格",
                    tl_undo: "上一步",
                    tl_redo: "下一步",
                    tl_trash: "清空",
                    tl_save: "保存",
                    tl_navigation_on: "开启标题导航",
                    tl_navigation_off: "关闭标题导航",
                    tl_preview: "预览",
                    tl_aligncenter: "居中",
                    tl_alignleft: "居左",
                    tl_alignright: "居右",
                    tl_edit: "编辑",
                    tl_single_column: "单栏",
                    tl_double_column: "双栏",
                    tl_fullscreen_on: "全屏编辑",
                    tl_fullscreen_off: "退出全屏",
                    tl_read: "沉浸式阅读",
                    tl_html_on: "查看html文本",
                    tl_html_off: "返回markdown文本",
                    tl_help: "markdown语法帮助",
                    tl_upload: "上传图片",
                    tl_upload_remove: "删除",
                    tl_popup_link_title: "添加链接",
                    tl_popup_link_text: "链接文本",
                    tl_popup_link_addr: "链接地址",
                    tl_popup_link_sure: "确定",
                    tl_popup_link_cancel: "取消"
                }
            }, function (e, t) {
                e.exports = {
                    start_editor: "Begin editing...",
                    navigation_title: "Navigation",
                    tl_bold: "Bold",
                    tl_italic: "Italic",
                    tl_header: "Header",
                    tl_underline: "Underline",
                    tl_strikethrough: "Strikethrough",
                    tl_mark: "Mark",
                    tl_superscript: "Superscript",
                    tl_subscript: "Subscript",
                    tl_quote: "Quote",
                    tl_ol: "Ol",
                    tl_ul: "Ul",
                    tl_link: "Link",
                    tl_image: "Image Link",
                    tl_code: "Code",
                    tl_table: "Table",
                    tl_undo: "Undo",
                    tl_redo: "Redo",
                    tl_trash: "Trash",
                    tl_save: "Save",
                    tl_navigation_on: "Navigation ON",
                    tl_navigation_off: "Navigation OFF",
                    tl_preview: "Preview",
                    tl_aligncenter: "Center text",
                    tl_alignleft: "Clamp text to the left",
                    tl_alignright: "Clamp text to the right",
                    tl_edit: "Edit",
                    tl_single_column: "Single Column",
                    tl_double_column: "Double Columns",
                    tl_fullscreen_on: "FullScreen ON",
                    tl_fullscreen_off: "FullScreen OFF",
                    tl_read: "Read Model",
                    tl_html_on: "HTML ON",
                    tl_html_off: "HTML OFF",
                    tl_help: "Markdown Guide",
                    tl_upload: "Upload Images",
                    tl_upload_remove: "Remove",
                    tl_popup_link_title: "Add Link",
                    tl_popup_link_text: "Link text",
                    tl_popup_link_addr: "Link address",
                    tl_popup_link_sure: "Sure",
                    tl_popup_link_cancel: "Cancel"
                }
            }, function (e, t) {
                e.exports = {
                    start_editor: "Début d'édition...",
                    navigation_title: "Navigation",
                    tl_bold: "Gras",
                    tl_italic: "Italique",
                    tl_header: "Entête",
                    tl_underline: "Souligné",
                    tl_strikethrough: "Barré",
                    tl_mark: "Mark",
                    tl_superscript: "Exposant",
                    tl_subscript: "Sous-exposant",
                    tl_quote: "Quote",
                    tl_ol: "Liste ",
                    tl_ul: "Puce",
                    tl_link: "Lien",
                    tl_image: "Image Lien",
                    tl_code: "Code",
                    tl_table: "Table",
                    tl_undo: "Annuler",
                    tl_redo: "Refaire",
                    tl_trash: "Supprimer",
                    tl_save: "Sauver",
                    tl_navigation_on: "Activer la navigation",
                    tl_navigation_off: "Désactiver le navigation",
                    tl_preview: "Previsualisé",
                    tl_aligncenter: "Center le texte",
                    tl_alignleft: "Férer le texte à gauche",
                    tl_alignright: "Férer le texte à droite",
                    tl_edit: "Editer",
                    tl_single_column: "Seule Colonne",
                    tl_double_column: "Colonnes Doubles",
                    tl_fullscreen_on: "Activer le mode plein écran",
                    tl_fullscreen_off: "Désactiver le mode plein écran",
                    tl_read: "Lire le modèle",
                    tl_html_on: "Activer le mode HTML",
                    tl_html_off: "Désactiver le mode HTML",
                    tl_help: "Guide Markdown",
                    tl_upload: "Télécharger les images",
                    tl_upload_remove: "Supprimer",
                    tl_popup_link_title: "Ajouter un lien",
                    tl_popup_link_text: "Texte du lien",
                    tl_popup_link_addr: "Adresse de lien",
                    tl_popup_link_sure: "sûr",
                    tl_popup_link_cancel: "Annuler"
                }
            }])
        })
    }, YwFF: function (e, t, n) {
        n("1GTc"), e.exports = n("UusJ").Object.assign
    }, aA9S: function (e, t, n) {
        e.exports = {default: n("YwFF"), __esModule: !0}
    }, nBsG: function (e, t, n) {
        "use strict";
        var r = n("OtAM"), o = n("/a/u"), i = n("K0/C"), a = n("NUpW"), s = n("esCQ"), l = Object.assign;
        e.exports = !l || n("xVzf")(function () {
            var e = {}, t = {}, n = Symbol(), r = "abcdefghijklmnopqrst";
            return e[n] = 7, r.split("").forEach(function (e) {
                t[e] = e
            }), 7 != l({}, e)[n] || Object.keys(l({}, t)).join("") != r
        }) ? function (e, t) {
            for (var n = a(e), l = arguments.length, c = 1, u = o.f, p = i.f; l > c;)for (var _, d = s(arguments[c++]), h = u ? r(d).concat(u(d)) : r(d), f = h.length, m = 0; f > m;)p.call(d, _ = h[m++]) && (n[_] = d[_]);
            return n
        } : l
    }, u66k: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = n("aA9S"), o = n.n(r), i = n("xVlr"), a = n("viA7"), s = n("OOvn"), l = n("EdC7"), c = n.n(l), u = {
            name: "BlogView", created: function () {
                this.getArticle()
            }, watch: {$route: "getArticle"}, data: function () {
                return {
                    article: {
                        id: "",
                        title: "",
                        commentCounts: 0,
                        viewCounts: 0,
                        summary: "",
                        author: {},
                        tags: [],
                        createDate: "",
                        editor: {value: "", toolbarsFlag: !1, subfield: !1, default_open: "preview"}
                    }, comments: [], comment: {article: {}, content: ""}
                }
            }, computed: {
                avatar: function () {
                    var e = this.$store.state.avatar;
                    return e.length > 0 ? e : c.a
                }
            }, methods: {
                getArticle: function () {
                    var e = this;
                    Object(a.g)(e.$route.params.id).then(function (t) {
                        o()(e.article, t.data), e.article.editor.value = t.data.body.content, e.getCommentsByArticle()
                    }).catch(function (t) {
                        "error" !== t && e.$message({type: "error", message: "文章加载失败", showClose: !0})
                    })
                }, publishComment: function () {
                    var e = this;
                    e.comment.article.id = e.article.id, function (e) {
                        return Object(s.a)({url: "/comments/create/change", method: "post", data: e})
                    }(e.comment).then(function (t) {
                        e.$message({
                            type: "success",
                            message: "评论成功",
                            showClose: !0
                        }), e.comments.unshift(t.data), e.comment.content = ""
                    }).catch(function (t) {
                        "error" !== t && e.$message({type: "error", message: "评论失败", showClose: !0})
                    })
                }, getCommentsByArticle: function () {
                    var e = this;
                    (function (e) {
                        return Object(s.a)({url: "/comments/article/" + e, method: "get"})
                    })(e.article.id).then(function (t) {
                        e.comments = t.data
                    }).catch(function (t) {
                        "error" !== t && e.$message({type: "error", message: "评论加载失败", showClose: !0})
                    })
                }
            }, components: {"markdown-editor": i.a}, beforeRouteEnter: function (e, t, n) {
                window.document.body.style.backgroundColor = "#fff", n()
            }, beforeRouteLeave: function (e, t, n) {
                window.document.body.style.backgroundColor = "#f5f5f5", n()
            }
        }, p = {
            render: function () {
                var e = this, t = e.$createElement, n = e._self._c || t;
                return n("div", {staticClass: "me-view-body"}, [n("el-container", {staticClass: "me-view-container"}, [n("el-main", [n("div", {staticClass: "me-view-card"}, [n("h1", {staticClass: "me-view-title"}, [e._v(e._s(e.article.title))]), e._v(" "), n("div", {staticClass: "me-view-author"}, [n("a", {}, [n("img", {
                    staticClass: "me-view-picture",
                    attrs: {src: e.article.author.avatar}
                })]), e._v(" "), n("div", {staticClass: "me-view-info"}, [n("span", [e._v(e._s(e.article.author.nickname))]), e._v(" "), n("div", {staticClass: "me-view-meta"}, [n("span", [e._v(e._s(e.article.createDate))]), e._v(" "), n("span", [e._v("阅读   " + e._s(e.article.viewCounts))]), e._v(" "), n("span", [e._v("评论   " + e._s(e.article.commentCounts))])])])]), e._v(" "), n("div", {staticClass: "me-view-content"}, [n("markdown-editor", {attrs: {editor: e.article.editor}})], 1), e._v(" "), n("div", {staticClass: "me-view-end"}, [n("el-alert", {
                    attrs: {
                        title: "文章End...",
                        type: "success",
                        center: "",
                        closable: !1
                    }
                })], 1), e._v(" "), n("div", {staticClass: "me-view-tag"}, e._l(e.article.tags, function (t) {
                    return n("el-tag", {
                        key: t.id,
                        staticClass: "me-view-tag-item",
                        attrs: {type: "success"}
                    }, [e._v(e._s(t.tagname))])
                })), e._v(" "), n("div", {staticClass: "me-view-comment"}, [n("div", {staticClass: "me-view-comment-write"}, [n("el-row", {attrs: {gutter: 20}}, [n("el-col", {attrs: {span: 2}}, [n("a", {}, [n("img", {
                    staticClass: "me-view-picture",
                    attrs: {src: e.avatar}
                })])]), e._v(" "), n("el-col", {attrs: {span: 22}}, [n("el-input", {
                    staticClass: "me-view-comment-text",
                    attrs: {type: "textarea", autosize: {minRows: 2}, placeholder: "你的评论...", resize: "none"},
                    model: {
                        value: e.comment.content, callback: function (t) {
                            e.$set(e.comment, "content", t)
                        }, expression: "comment.content"
                    }
                })], 1)], 1), e._v(" "), n("el-row", {attrs: {gutter: 20}}, [n("el-col", {
                    attrs: {
                        span: 2,
                        offset: 22
                    }
                }, [n("el-button", {
                    attrs: {type: "text"}, on: {
                        click: function (t) {
                            e.publishComment()
                        }
                    }
                }, [e._v("评论")])], 1)], 1)], 1), e._v(" "), n("div", {staticClass: "me-view-comment-title"}, [n("span", [e._v(e._s(e.comments.length) + " 条评论")])]), e._v(" "), e._l(e.comments, function (t, r) {
                    return n("div", {
                        key: t.id,
                        staticClass: "me-view-comment-item"
                    }, [n("div", {staticClass: "me-view-comment-author"}, [n("a", {}, [n("img", {
                        staticClass: "me-view-picture",
                        attrs: {src: t.author.avatar}
                    })]), e._v(" "), n("div", {staticClass: "me-view-info"}, [n("span", {staticClass: "me-view-nickname"}, [e._v(e._s(t.author.nickname))]), e._v(" "), n("div", {staticClass: "me-view-meta"}, [n("span", [e._v(e._s(e.comments.length - r) + "楼")]), e._v(" "), n("span", [e._v(e._s(t.createDate))])])])]), e._v(" "), n("div", [n("p", {staticClass: "me-view-comment-content"}, [e._v(e._s(t.content))])])])
                })], 2)])])], 1)], 1)
            }, staticRenderFns: []
        }, _ = n("8AGX")(u, p, !1, function (e) {
            n("F60K")
        }, null, null);
        t.default = _.exports
    }, x4z7: function (e, t) {
    }, xVlr: function (e, t, n) {
        "use strict";
        var r = n("NbYg"), o = (n("FaEH"), n("OOvn")), i = {
            name: "MarkdownEditor", props: {editor: Object}, data: function () {
                return {}
            }, mounted: function () {
                this.$set(this.editor, "ref", this.$refs.md)
            }, methods: {
                imgAdd: function (e, t) {
                    var n = this, r = new FormData;
                    r.append("image", t), function (e) {
                        return Object(o.a)({
                            headers: {"Content-Type": "multipart/form-data"},
                            url: "/upload",
                            method: "post",
                            data: e
                        })
                    }(r).then(function (t) {
                        0 == t.code ? n.$refs.md.$img2Url(e, t.data.url) : n.$message({
                            message: t.msg,
                            type: "error",
                            showClose: !0
                        })
                    }).catch(function (e) {
                        n.$message({message: e, type: "error", showClose: !0})
                    })
                }
            }, components: {mavonEditor: r.mavonEditor}
        }, a = {
            render: function () {
                var e = this, t = e.$createElement;
                return (e._self._c || t)("mavon-editor", e._b({
                    ref: "md",
                    staticClass: "me-editor",
                    on: {imgAdd: e.imgAdd},
                    model: {
                        value: e.editor.value, callback: function (t) {
                            e.$set(e.editor, "value", t)
                        }, expression: "editor.value"
                    }
                }, "mavon-editor", e.editor, !1))
            }, staticRenderFns: []
        }, s = n("8AGX")(i, a, !1, function (e) {
            n("x4z7")
        }, "data-v-a7ad1f30", null);
        t.a = s.exports
    }
});
//# sourceMappingURL=1.10c70a504a399932751f.js.map