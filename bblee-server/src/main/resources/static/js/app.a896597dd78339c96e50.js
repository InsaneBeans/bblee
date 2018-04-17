webpackJsonp([11], {
    "33ZO": function (t, e, n) {
        "use strict";
        var o = {
            name: "BaseHeader", props: {activeIndex: String, simple: {type: Boolean, default: !1}}, data: function () {
                return {}
            }, computed: {
                user: function () {
                    return {login: 0 != this.$store.state.account.length, avatar: this.$store.state.avatar}
                }
            }, methods: {
                logout: function () {
                    var t = this, e = this;
                    this.$store.dispatch("logout").then(function () {
                        t.$router.push({path: "/"})
                    }).catch(function (t) {
                        "error" !== t && e.$message({message: t, type: "error", showClose: !0})
                    })
                }
            }
        }, a = {
            render: function () {
                var t = this.$createElement, e = this._self._c || t;
                return e("el-header", {staticClass: "me-area"}, [e("el-row", {staticClass: "me-header"}, [e("el-col", {
                    staticClass: "me-header-left",
                    attrs: {span: 4}
                }, [e("router-link", {
                    staticClass: "me-title",
                    attrs: {to: "/"}
                }, [e("img", {attrs: {src: n("dLd/")}})])], 1), this._v(" "), this.simple ? [this._t("default")] : e("el-col", {attrs: {span: 16}}, [e("el-menu", {
                    attrs: {
                        router: !0,
                        "menu-trigger": "click",
                        "active-text-color": "#5FB878",
                        "default-active": this.activeIndex,
                        mode: "horizontal"
                    }
                }, [e("el-menu-item", {attrs: {index: "/"}}, [this._v("首页")]), this._v(" "), e("el-menu-item", {attrs: {index: "/category/all"}}, [this._v("文章分类")]), this._v(" "), e("el-menu-item", {attrs: {index: "/tag/all"}}, [this._v("标签")]), this._v(" "), e("el-menu-item", {attrs: {index: "/log"}}, [this._v("日志")]), this._v(" "), e("el-menu-item", {attrs: {index: "/messageBoard"}}, [this._v("留言板")]), this._v(" "), e("el-col", {
                    attrs: {
                        span: 4,
                        offset: 4
                    }
                }, [e("el-menu-item", {attrs: {index: "/write"}}, [e("i", {staticClass: "el-icon-edit"}), this._v("写文章")])], 1)], 1)], 1), this._v(" "), e("el-col", {attrs: {span: 4}}, [e("el-menu", {
                    attrs: {
                        router: !0,
                        "menu-trigger": "click",
                        mode: "horizontal",
                        "active-text-color": "#5FB878"
                    }
                }, [this.user.login ? [e("el-submenu", {attrs: {index: ""}}, [e("template", {slot: "title"}, [e("img", {
                    staticClass: "me-header-picture",
                    attrs: {src: this.user.avatar}
                })]), this._v(" "), e("el-menu-item", {
                    attrs: {index: ""},
                    on: {click: this.logout}
                }, [e("i", {staticClass: "el-icon-back"}), this._v("退出")])], 2)] : [e("el-menu-item", {attrs: {index: "/login"}}, [e("el-button", {attrs: {type: "text"}}, [this._v("登录")])], 1), this._v(" "), e("el-menu-item", {attrs: {index: "/register"}}, [e("el-button", {attrs: {type: "text"}}, [this._v("注册")])], 1)]], 2)], 1)], 2)], 1)
            }, staticRenderFns: []
        }, r = n("8AGX")(o, a, !1, function (t) {
            n("tlvp")
        }, null, null);
        e.a = r.exports
    }, "7xIN": function (t, e) {
    }, BlYj: function (t, e) {
    }, IcnI: function (t, e, n) {
        "use strict";
        var o = n("rVsN"), a = n.n(o), r = n("9rMa"), i = n("VCXJ"), c = n("Moy7"), s = n("M9A7");
        i.default.use(r.a), e.a = new r.a.Store({
            state: {account: "", name: "", avatar: "", token: Object(c.a)()},
            mutations: {
                SET_TOKEN: function (t, e) {
                    t.token = e
                }, SET_ACCOUNT: function (t, e) {
                    t.account = e
                }, SET_NAME: function (t, e) {
                    t.name = e
                }, SET_AVATAR: function (t, e) {
                    t.avatar = e
                }
            },
            actions: {
                login: function (t, e) {
                    var n = t.commit;
                    return new a.a(function (t, o) {
                        Object(s.b)(e.account, e.password).then(function (e) {
                            n("SET_TOKEN", e.data["Oauth-Token"]), Object(c.c)(e.data["Oauth-Token"]), t()
                        }).catch(function (t) {
                            o(t)
                        })
                    })
                }, getUserInfo: function (t) {
                    var e = t.commit;
                    t.state;
                    return new a.a(function (t, n) {
                        Object(s.a)().then(function (n) {
                            n.data ? (e("SET_ACCOUNT", n.data.account), e("SET_NAME", n.data.name), e("SET_AVATAR", n.data.avatar)) : (e("SET_ACCOUNT", ""), e("SET_NAME", ""), e("SET_AVATAR", ""), Object(c.b)()), t(n)
                        }).catch(function (t) {
                            n(t)
                        })
                    })
                }, logout: function (t) {
                    var e = t.commit;
                    t.state;
                    return new a.a(function (t, n) {
                        Object(s.c)().then(function (n) {
                            e("SET_TOKEN", ""), e("SET_ACCOUNT", ""), e("SET_NAME", ""), e("SET_AVATAR", ""), Object(c.b)(), t()
                        }).catch(function (t) {
                            n(t)
                        })
                    })
                }, fedLogOut: function (t) {
                    var e = t.commit;
                    return new a.a(function (t) {
                        e("SET_TOKEN", ""), e("SET_ACCOUNT", ""), e("SET_NAME", ""), e("SET_AVATAR", ""), Object(c.b)(), t()
                    }).catch(function (t) {
                        reject(t)
                    })
                }, register: function (t, e) {
                    var n = t.commit;
                    return new a.a(function (t, o) {
                        Object(s.d)(e.account, e.nickname, e.password).then(function (e) {
                            n("SET_TOKEN", e.data["Oauth-Token"]), Object(c.c)(e.data["Oauth-Token"]), t()
                        }).catch(function (t) {
                            o(t)
                        })
                    })
                }
            }
        })
    }, M9A7: function (t, e, n) {
        "use strict";
        e.b = function (t, e) {
            var n = {account: t, password: e};
            return Object(o.a)({url: "/login", method: "post", data: n})
        }, e.c = function () {
            return Object(o.a)({url: "/logout", method: "get"})
        }, e.a = function () {
            return Object(o.a)({url: "/users/currentUser", method: "get"})
        }, e.d = function (t, e, n) {
            var a = {account: t, nickname: e, password: n};
            return Object(o.a)({url: "/register", method: "post", data: a})
        };
        var o = n("OOvn")
    }, Moy7: function (t, e, n) {
        "use strict";
        e.a = function () {
            return localStorage.token
        }, e.c = function (t) {
            return localStorage.token = t
        }, e.b = function () {
            return localStorage.removeItem("token")
        }
    }, NHnr: function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        n("fCJj");
        var o = n("h/uP"), a = n.n(o), r = n("VCXJ"), i = {
            name: "GoTop", data: function () {
                return {topShow: !1}
            }, methods: {
                toTop: function () {
                    document.body.scrollTop = 0, document.documentElement.scrollTop = 0, this.topShow = !1
                }, needToTop: function () {
                    var t = document.documentElement.scrollTop || document.body.scrollTop;
                    this.topShow = t > 400
                }
            }, mounted: function () {
                this.$nextTick(function () {
                    window.addEventListener("scroll", this.needToTop)
                })
            }
        }, c = {
            render: function () {
                var t = this.$createElement, e = this._self._c || t;
                return e("transition", [e("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: this.topShow,
                        expression: "topShow"
                    }], staticClass: "me-to-top", on: {click: this.toTop}
                }, [e("i", {staticClass: "el-icon-caret-top"})])])
            }, staticRenderFns: []
        }, s = {
            name: "App", components: {
                GoTop: n("8AGX")(i, c, !1, function (t) {
                    n("BlYj")
                }, null, null).exports
            }
        }, u = {
            render: function () {
                var t = this.$createElement, e = this._self._c || t;
                return e("div", {attrs: {id: "app"}}, [e("router-view"), this._v(" "), e("go-top")], 1)
            }, staticRenderFns: []
        }, l = n("8AGX")(s, u, !1, function (t) {
            n("tsHX")
        }, null, null).exports, h = n("DjdX"), d = n.n(h), f = n("zO6J"), m = {
            render: function () {
                var t = this.$createElement, e = this._self._c || t;
                return e("el-footer", {staticClass: "me-area"}, [e("div", {staticClass: "me-footer"}, [e("p", [this._v("Designed by \n\t\t"), e("strong", [e("router-link", {
                    staticClass: "me-login-design-color",
                    attrs: {to: "/"}
                }, [this._v("ForFun")])], 1)])])])
            }, staticRenderFns: []
        }, p = n("8AGX")({
            name: "BaseFooter", data: function () {
                return {}
            }, methods: {}, mounted: function () {
            }
        }, m, !1, function (t) {
            n("mXUo")
        }, null, null).exports, v = {
            name: "Home", data: function () {
                return {activeIndex: "/", footerShow: !0}
            }, components: {"base-header": n("33ZO").a, "base-footer": p}, beforeRouteEnter: function (t, e, n) {
                n(function (e) {
                    e.activeIndex = t.path
                })
            }, beforeRouteUpdate: function (t, e, n) {
                "/" == t.path ? this.footerShow = !0 : this.footerShow = !1, this.activeIndex = t.path, n()
            }
        }, g = {
            render: function () {
                var t = this.$createElement, e = this._self._c || t;
                return e("div", {attrs: {id: "home"}}, [e("el-container", [e("base-header", {attrs: {activeIndex: this.activeIndex}}), this._v(" "), e("router-view", {staticClass: "me-container"}), this._v(" "), e("base-footer", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: this.footerShow,
                        expression: "footerShow"
                    }]
                })], 1)], 1)
            }, staticRenderFns: []
        }, _ = n("8AGX")(v, g, !1, function (t) {
            n("X/BP")
        }, null, null).exports, T = n("IcnI"), b = n("Moy7");
        r.default.use(f.a);
        var w = new f.a({
            routes: [{
                path: "", name: "Home", component: _, children: [{
                    path: "/", component: function (t) {
                        return Promise.all([n.e(0), n.e(2)]).then(function () {
                            return t(n("mlqX"))
                        }.bind(null, n)).catch(n.oe)
                    }
                }, {
                    path: "/log", component: function (t) {
                        return n.e(9).then(function () {
                            return t(n("joCn"))
                        }.bind(null, n)).catch(n.oe)
                    }
                }, {
                    path: "/messageBoard", component: function (t) {
                        return n.e(6).then(function () {
                            return t(n("ncpC"))
                        }.bind(null, n)).catch(n.oe)
                    }
                }, {
                    path: "/view/:id", component: function (t) {
                        return Promise.all([n.e(0), n.e(1)]).then(function () {
                            return t(n("u66k"))
                        }.bind(null, n)).catch(n.oe)
                    }
                }, {
                    path: "/:type/all", component: function (t) {
                        return Promise.all([n.e(0), n.e(8)]).then(function () {
                            return t(n("4fko"))
                        }.bind(null, n)).catch(n.oe)
                    }
                }, {
                    path: "/:type/:id", component: function (t) {
                        return Promise.all([n.e(0), n.e(4)]).then(function () {
                            return t(n("8wPo"))
                        }.bind(null, n)).catch(n.oe)
                    }
                }]
            }, {
                path: "/login", component: function (t) {
                    return n.e(7).then(function () {
                        return t(n("lmfZ"))
                    }.bind(null, n)).catch(n.oe)
                }
            }, {
                path: "/register", component: function (t) {
                    return n.e(5).then(function () {
                        return t(n("tcoL"))
                    }.bind(null, n)).catch(n.oe)
                }
            }, {
                path: "/write", component: function (t) {
                    return Promise.all([n.e(0), n.e(3)]).then(function () {
                        return t(n("tgdm"))
                    }.bind(null, n)).catch(n.oe)
                }, meta: {requireLogin: !0}
            }], scrollBehavior: function (t, e, n) {
                return {x: 0, y: 0}
            }
        });
        w.beforeEach(function (t, e, n) {
            Object(b.a)() ? "/login" === t.path ? n({path: "/"}) : 0 === T.a.state.account.length ? T.a.dispatch("getUserInfo").then(function (t) {
                n()
            }).catch(function () {
                n({path: "/"})
            }) : n() : t.matched.some(function (t) {
                return t.meta.requireLogin
            }) ? d()({type: "warning", showClose: !0, message: "请先登录哦"}) : n()
        });
        var O = w, E = n("dLdd"), A = n.n(E);
        n("7xIN");
        r.default.config.productionTip = !1, r.default.use(a.a), Object.defineProperty(r.default.prototype, "$_", {value: A.a}), new r.default({
            el: "#app",
            router: O,
            store: T.a,
            template: "<App/>",
            components: {App: l}
        })
    }, OOvn: function (t, e, n) {
        "use strict";
        var o = n("DjdX"), a = n.n(o), r = n("rVsN"), i = n.n(r), c = n("2sCs"), s = n.n(c), u = n("IcnI"),
            l = n("Moy7"), h = s.a.create({baseURL: Object({NODE_ENV: "production"}).BASE_API, timeout: 1e4});
        h.interceptors.request.use(function (t) {
            return u.a.state.token && (t.headers["Oauth-Token"] = Object(l.a)()), t
        }, function (t) {
            i.a.reject(t)
        }), h.interceptors.response.use(function (t) {
            "timeout" == t.headers.session_time_out && u.a.dispatch("fedLogOut");
            var e = t.data;
            return 0 !== e.code ? 90001 === e.code ? i.a.reject("error") : 20001 === e.code ? (console.info("用户未登录"), a()({
                type: "warning",
                showClose: !0,
                message: "未登录或登录超时，请重新登录哦"
            }), i.a.reject("error")) : 70001 === e.code ? (console.info("权限认证错误"), a()({
                type: "warning",
                showClose: !0,
                message: "你没有权限访问哦"
            }), i.a.reject("error")) : i.a.reject(e.msg) : t.data
        }, function (t) {
            return a()({type: "warning", showClose: !0, message: "连接超时"}), i.a.reject("error")
        }), e.a = h
    }, "X/BP": function (t, e) {
    }, "dLd/": function (t, e, n) {
        t.exports = n.p + "img/logo.0e3a2b5.png"
    }, fCJj: function (t, e) {
    }, mXUo: function (t, e) {
    }, tlvp: function (t, e) {
    }, tsHX: function (t, e) {
    }
}, ["NHnr"]);
//# sourceMappingURL=app.a896597dd78339c96e50.js.map