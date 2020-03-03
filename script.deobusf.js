(function(Pb, ac) {
    function m(a, b) {
        function c() {}
        c.prototype = a;
        var d = new c,
            e;
        for (e in b) d[e] = b[e];
        b.toString !== Object.prototype.toString && (d.toString = b.toString);
        return d
    }

    function u(a, b) {
        if (null == b) return null;
        null == b.i6 && (b.i6 = ic++);
        var c;
        null == a.p_ ? a.p_ = {} : c = a.p_[b.i6];
        null == c && (c = function() {
            return c.method.apply(c.scope, arguments)
        }, c.scope = a, c.method = b, a.p_[b.i6] = c);
        return c
    }
    var g = {},
        pa = function() {
            return E.o2(this, "")
        },
        n = function() {};
    g.ApplicationMain = n;
    n.be = !0;
    n._H = function() {
        null != n.embeds && 0 !=
            n.embeds || n.preload()
    };
    n.preload = function() {
        for (var a = n.fp = n.cl = 0, b = n.jO; a < b.length;) {
            var c = b[a];
            ++a;
            n.cl += c
        }
        n.kp = 0;
        n.qS = new Y;
        n.a4 = new Y;
        n.total = 0;
        l.get_iv().ck = wa.ci(null);
        l.get_ew().set_bw(60);
        l.get_iv().fU(n.pi = new db);
        n.pi.hy();
        n.dr("img/overlay.png");
        n.dr("img/buffs.png");
        n.dr("img/color.png");
        n.dr("img/items.png");
        n.dr("img/nitems.png");
        n.dr("img/shadow.png");
        n.dr("img/visual.png");
        a = 0;
        for (b = eb.an(); a < b.length;) c = b[a], ++a, J.iH(c, "NME_:bitmap_") && (c = Ua.d7(J.replace(c.substring(12), "_", ".")),
            null != c && (n.total++, Ua.am(c, [0, 0, !0, 16777215, n.aV])));
        if (0 != n.total) {
            n.pL = [];
            for (a = n.qS.keys(); a.qu();) b = a.$6(), n.pL.push(b);
            n.e0 = [];
            for (a = n.a4.keys(); a.qu();) b = a.$6(), n.e0.push(b);
            for (a = 0; 8 > a;) a++, n.bs()
        } else n.aL()
    };
    n.bs = function() {
        if (0 != n.pL.length) {
            var a = n.pL.shift(),
                b = n.qS.get(a);
            b.qE.addEventListener("complete", n.qB);
            b.load(new fb(a))
        } else 0 != n.e0.length && (a = n.e0.shift(), b = n.a4.get(a), b.addEventListener("complete", n.qB), b.load(new fb(a)))
    };
    n.dr = function(a) {
        var b = new Va;
        n.qS.set(a, b);
        n.total++
    };
    n.aL = function() {
        n.pi.addEventListener("complete", n.p1);
        n.pi._k()
    };
    n.aV = function(a) {
        n.kp++;
        (null == a ? null : E.$B(a)).preload = a;
        n.kp == n.total && n.aL()
    };
    n.qB = function(a) {
        n.kp++;
        n.fp += n.jO[w.indexOf(n.oi, a.eu.url, 0)];
        n.pi.nu(n.fp, n.cl);
        n.kp == n.total ? n.aL() : n.bs()
    };
    n.p1 = function(a) {
        n.pi.removeEventListener("complete", n.p1);
        l.get_iv().removeChild(n.pi);
        n.pi = null;
        null == I._H ? (a = new gb, E.jp(a, T) && l.get_iv().fU(a)) : I._H()
    };
    var hb = function() {};
    g["openfl.events.IEventDispatcher"] = hb;
    hb.be = !0;
    hb.prototype = {
        ik: hb
    };
    var ba = function() {
        this._s = new Y
    };
    g["openfl.events.EventDispatcher"] = ba;
    ba.be = !0;
    ba.kR = [hb];
    ba.prototype = {
        addEventListener: function(a, b, c, d, e) {
            this._s.d5(a) ? c = this._s.get(a) : (d = c = [], this._s.set(a, d));
            c.push(b)
        },
        removeEventListener: function(a, b, c) {
            if (this._s.d5(a)) {
                c = this._s.get(a);
                for (var d = 0; d < c.length;) {
                    var e = c[d];
                    ++d;
                    if (xa.kS(e, b)) {
                        w.remove(c, e);
                        break
                    }
                }
                0 == c.length && this._s.remove(a)
            }
        },
        dispatchEvent: function(a) {
            null == a.get_target() && a.set_target(this);
            a.set_currentTarget(this);
            var b = a.type;
            if (this._s.d5(b))
                for (var b =
                        this._s.get(b), c = 0; c < b.length;) {
                    var d = b[c];
                    d(a);
                    b[c] == d && c++
                }
            return !0
        },
        ik: ba
    };
    var ya = function() {
        this._s = new Y;
        this.j4 = new Na
    };
    g["openfl.events.EventWrapper"] = ya;
    ya.be = !0;
    ya.pc = ba;
    ya.prototype = m(ba.prototype, {
        addEventListener: function(a, b, c, d, e) {
            null == e && (e = !1);
            null == d && (d = 0);
            null == c && (c = !1);
            var f = this;
            ba.prototype.addEventListener.call(this, a, b, c, d, e);
            d = function(a) {
                a.get_target() == f.i1 && a.set_target(f);
                a.set_currentTarget(f);
                b(a)
            };
            null == this.j4.eX.hm[b.i6] && this.j4.set(b, d);
            this.i1.addEventListener(a,
                d, c)
        },
        removeEventListener: function(a, b, c) {
            null == c && (c = !1);
            ba.prototype.removeEventListener.call(this, a, b, c);
            null != this.j4.eX.hm[b.i6] && (this.i1.removeEventListener(a, this.j4.eX[b.i6], c), this.j4.remove(b))
        },
        ik: ya
    });
    var T = function() {
        this.pC = this.x = this.y = 0;
        this.ah = this.fL = 1;
        this.visible = !0;
        ya.call(this);
        this.l = new Y;
        null == this.i1 && (this.i1 = l.ns("div"));
        this.i1.node = this;
        this.transform = new Eb(this)
    };
    g["openfl.display.DisplayObject"] = T;
    T.be = !0;
    T.pc = ya;
    T.prototype = m(ya.prototype, {
        ii: function(a) {
            this.dispatchEvent(a)
        },
        fm: function() {
            var a = this.i1.style,
                b;
            1 != this._u && (this._u = !0, l.kW(a, "transform-origin", "0% 0%", 31));
            b = "";
            if (0 != this.x || 0 != this.y) b += "translate(" + this.x + "px, " + this.y + "px) ";
            if (1 != this.ah || 1 != this.fL) b += "scale(" + this.ah + ", " + this.fL + ") ";
            0 != this.pC && (b += "rotate(" + this.pC + "deg) ");
            if (null != this.transform) {
                var c = this.transform.get_matrix();
                null == c || c.eh() || (b += "matrix(" + c.a + ", " + c.b + ", " + c.c + ", " + c.d + ", " + c.nG + ", " + c.lS + ") ")
            }
            a.setProperty("transform", b, null);
            a.setProperty("-o-transform", b, null);
            a.setProperty("-ms-transform",
                b, null);
            a.setProperty("-moz-transform", b, null);
            a.setProperty("-webkit-transform", b, null)
        },
        set_x: function(a) {
            this.x != a && (this.x = a, this.fm());
            return a
        },
        set_y: function(a) {
            this.y != a && (this.y = a, this.fm());
            return a
        },
        set_ah: function(a) {
            this.ah != a && (this.ah = a, this.fm());
            return a
        },
        get_width: function() {
            return this.pI || 0
        },
        get_height: function() {
            return this.ln || 0
        },
        get_ew: function() {
            return this.iO
        },
        set_ew: function(a) {
            if (this.iO != a) {
                var b = null != this.iO != (null != a);
                this.iO = a;
                b && this.dispatchEvent(new M(null != a ? "addedToStage" :
                    "removedFromStage"))
            }
            return a
        },
        ac: function(a) {
            this.transform.get_matrix().eh() || a.concat(this.transform.get_matrix());
            0 != this.pC && a.rotate(this.pC * Math.PI / 180);
            1 == this.ah && 1 == this.fL || a.scale(this.ah, this.fL);
            0 == this.x && 0 == this.y || a.translate(this.x, this.y)
        },
        a3: function(a) {
            null == a && (a = new X);
            for (var b = this; null != b;) b.ac(a), b = b.parent;
            return a
        },
        gQ: function(a, b) {
            null == b && (b = new P);
            var c = T.iq,
                d = a.x,
                e = a.y;
            null == c && (c = T.iq = new X);
            c.mU();
            c = this.a3(c);
            c.gp();
            b.x = d * c.a + e * c.c + c.nG;
            b.y = d * c.b + e * c.d + c.lS;
            return b
        },
        get_oO: function() {
            return (T.$o = this.gQ(l.get_iv().get_ew().pP, T.$o)).x
        },
        get_ob: function() {
            return (T.$o = this.gQ(l.get_iv().get_ew().pP, T.$o)).y
        },
        jF: function(a, b, c, d) {
            return (!d || this.visible) && 0 <= a && 0 <= b && a <= this.get_width() && b <= this.get_height()
        },
        addEventListener: function(a, b, c, d, e) {
            null == e && (e = !1);
            null == d && (d = 0);
            null == c && (c = !1);
            ya.prototype.addEventListener.call(this, a, b, c, d, e)
        },
        kv: function(a, b, c, d) {
            if (!this.visible) return !1;
            var e, f, h = a.length,
                t;
            a.push(this);
            f = 0 < d.length ? d.pop() : new X;
            for (t = c.length; t <=
                h;) e = a[t], f.mU(), e.ac(f), f.gp(), e = 0 < d.length ? d.pop() : new X, 0 < t ? e.copy(c[t - 1]) : e.mU(), e.concat(f), c.push(e), t++;
            f.copy(c[h]);
            c = b.e5 * f.a + b.q8 * f.c + f.nG;
            h = b.e5 * f.b + b.q8 * f.d + f.lS;
            d.push(f);
            a.pop();
            return this.jF(c, h, !0, !0) ? (null == b.pA && (b.$S = c, b._W = h, b.pA = this), this.dispatchEvent(b), !0) : !1
        },
        dispatchEvent: function(a) {
            var b = ya.prototype.dispatchEvent.call(this, a);
            if (b && a.bubbles) switch (a.type) {
                case "mouseMove":
                case "mouseOver":
                case "mouseOut":
                case "mouseClick":
                case "mouseDown":
                case "mouseUp":
                case "rightClick":
                case "rightMouseDown":
                case "rightMouseUp":
                case "middleClick":
                case "middleMouseDown":
                case "middleMouseUp":
                case "mouseWheel":
                case "touchMove":
                case "touchBegin":
                case "touchEnd":
                    var c =
                        this.parent;
                    null != c && c.dispatchEvent(a)
            }
            return b
        },
        ik: T
    });
    var ca = function() {
        T.call(this);
        this.U = !1;
        this.tabIndex = 0;
        this._ = this.j = !0
    };
    g["openfl.display.InteractiveObject"] = ca;
    ca.be = !0;
    ca.pc = T;
    ca.prototype = m(T.prototype, {
        qH: function() {
            this.i1.focus()
        },
        ik: ca
    });
    var U = function() {
        ca.call(this);
        this.children = [];
        this.jn = !0
    };
    g["openfl.display.DisplayObjectContainer"] = U;
    U.be = !0;
    U.pc = ca;
    U.prototype = m(ca.prototype, {
        fU: function(a) {
            null != a.parent && a.parent.removeChild(a);
            a.parent = this;
            a.set_ew(this.get_ew());
            this.children.push(a);
            this.i1.appendChild(a.i1);
            var b = new M("added");
            a.dispatchEvent(b);
            this.dispatchEvent(b);
            return a
        },
        removeChild: function(a) {
            if (a.parent == this) {
                a.parent = null;
                a.set_ew(null);
                w.remove(this.children, a);
                this.i1.removeChild(a.i1);
                var b = new M("removed");
                a.dispatchEvent(b);
                this.dispatchEvent(b)
            }
            return a
        },
        ii: function(a) {
            this.dispatchEvent(a);
            for (var b = 0, c = this.children; b < c.length;) {
                var d = c[b];
                ++b;
                d.ii(a)
            }
        },
        kv: function(a, b, c, d) {
            if (!this.visible) return !1;
            var e = !1;
            if (this.jn) {
                var f = this.children.length;
                if (0 < f) {
                    for (a.push(this); 0 <=
                        --f;)
                        if (this.children[f].kv(a, b, c, d)) {
                            e = !0;
                            break
                        } a.pop()
                }
            }
            for (; c.length > a.length;) d.push(c.pop());
            for (e = e || ca.prototype.kv.call(this, a, b, c, d); c.length > a.length;) d.push(c.pop());
            return e
        },
        jF: function(a, b, c, d) {
            if (!d || this.visible) {
                var e = this.children.length,
                    f, h;
                if (0 < e) {
                    for (f = X.ci(); 0 <= --e;)
                        if (f.mU(), h = this.children[e], h.ac(f), f.gp(), h.jF(a * f.a + b * f.c + f.nG, a * f.b + b * f.d + f.lS, c, d)) return !0;
                    X.lH.push(f)
                }
            }
            return !1
        },
        set_ew: function(a) {
            ca.prototype.set_ew.call(this, a);
            for (var b = 0, c = this.children; b < c.length;) {
                var d =
                    c[b];
                ++b;
                d.set_ew(a)
            }
            return a
        },
        ik: U
    });
    var ua = function() {};
    g["openfl.display.IBitmapDrawable"] = ua;
    ua.be = !0;
    ua.prototype = {
        ik: ua
    };
    var V = function() {
        U.call(this)
    };
    g["openfl.display.Sprite"] = V;
    V.be = !0;
    V.kR = [ua];
    V.pc = U;
    V.prototype = m(U.prototype, {
        get_h8: function() {
            if (null == this.gD) {
                var a = new Wa,
                    b = a.i1;
                a.set_i7(this);
                0 == this.children.length ? this.i1.appendChild(b) : this.i1.insertBefore(b, this.children[0].i1);
                this.gD = a
            }
            return this.gD
        },
        set_ew: function(a) {
            var b = null == this.get_ew() && null != a;
            a = U.prototype.set_ew.call(this,
                a);
            b && null != this.gD && this.gD.p9();
            return a
        },
        lV: function(a, b, c, d, e, f, h) {
            this.get_h8().lV(a, b, c, d, e, f, h)
        },
        jF: function(a, b, c, d) {
            if (U.prototype.jF.call(this, a, b, c, d)) return !0;
            if (!d || this.visible)
                if (d = this.gD, null != d) return d.jF(a, b, c);
            return !1
        },
        ik: V
    });
    var I = function() {
        this._T = 0;
        this.lh = this.n3 = !1;
        this.nE = 1;
        this.o8 = !1;
        I.oe = this;
        U.call(this);
        this.oI = new P;
        this.cv = new ka;
        this.fe = new X;
        this.l8 = new Oa;
        this.fA = new Fa;
        this.gB = this.fA.h8;
        this.addEventListener("addedToStage", u(this, this.$G))
    };
    g.Main = I;
    I.be = !0;
    I._H = function() {
        l.get_iv().get_ew().align = "TOP_LEFT";
        l.get_iv().get_ew().$d = "NO_SCALE";
        l.get_iv().fU(new I)
    };
    I.pc = V;
    I.prototype = m(V.prototype, {
        oY: function() {
            return window.document.querySelector(".wrapper").scrollWidth
        },
        $x: function() {
            return window.document.querySelector(".wrapper").scrollHeight
        },
        $: function(a) {
            this.q3 || this.nd();
            a = this.oY();
            var b = this.$x();
            if (this.screen.i1.width != a || this.screen.i1.height != b) null != this.screen && (this.screen.af(), this.a5.af()), this.display.set_ds(this.screen = new L(a,
                b, !0, 0)), this.hI(), this.cX()
        },
        hI: function() {
            var a = F.nh("img/overlay.png"),
                b = C["int"](Math.max(this.screen.i1.height / 2, 200)),
                c = b / a.i1.width;
            this.a5 = new L(b, b, !0, 0);
            this.fe.mU();
            this.fe.scale(c, c);
            this.a5._Z(a, this.fe, null, null, null, !0);
            this.fe.mU()
        },
        mh: function() {
            var a, b;
            b = [-20, -9, -21, -3, -11, -19, -10, -4, -73, -12, -9, -21, -23, -4, -15, -9, -10, -73, -16, -6, -19, -18];
            var c = 0;
            for (a = ""; 22 > c;) a += da(b[c++] + 120);
            b = window;
            for (var c = a.split("/"), d = 0; null != (a = c[d++]);) b = b[a];
            a = b;
            b = "";
            for (c = 0; 10 > c;) d = c++, d = w.qg("2%#{aj*mk%",
                d), b += da(d & -16 | (d & 15) + 2 * c + 6 & 15);
            d = a.indexOf(b);
            if (0 > d) {
                b = [-56, -67, -67, 7, -13, -6, -6, -3, 5, -17, -12, 2, -13, 0, -6, -9, -12, -13, -68, -9, 2, -15, -10, -68, -9, -3, -67];
                c = 0;
                for (d = ""; 27 > c;) d += da(b[c++] + 114);
                d = a.indexOf(d)
            }
            if (0 > d) {
                b = [-49, -60, -60, -8, 4, 2, 2, 4, 3, -7, -10, 9, -10, 8, 9, 4, 7, -10, -4, -6, -61, -4, 4, 4, -4, 1, -6, -10, 5, -2, 8, -61, -8, 4, 2, -60, -2, 9, -8, -3, -2, 4, -60];
                c = 0;
                for (d = ""; 43 > c;) d += da(b[c++] + 107);
                d = a.indexOf(d)
            }
            a = 8 > d ? [16744576, 16772736, 11206528, 8449791, 8432383, 13402367, 16744686] : [3];
            for (b = 0; b < a.length;) {
                c = a[b];
                ++b;
                for (var d = [], e = 0, f = this.font.nj[1]; e < f.length;) {
                    var h = f[e];
                    ++e;
                    h = h.bp();
                    h.lX(h.dq.bp(), new Oa(0, 0, 0, 1, c >> 16 & 255, c >> 8 & 255, c & 255));
                    d.push(h)
                }
                this.font.nj.push(d)
            }
        },
        gy: function(a, b, c, d) {
            var e, f, h = new ka,
                t = new L(b >> 1, c),
                qa = new P;
            h.gv(0, 0, b >> 1, c);
            t.fillRect(h, 0);
            h.gv(0, 0, 1, c);
            qa.gv(0, 0);
            e = -1;
            for (f = b >> 1; ++e < f;) h.x = e << 1, qa.x = e, t.mE(a, h, qa, null, null, !0);
            h.gv(0, 0, b >> 1, c >> 1);
            d.fillRect(h, 0);
            h.gv(0, 0, b >> 1, 1);
            qa.gv(0, 0);
            e = -1;
            for (f = c >> 1; ++e < f;) qa.y = e, h.y = e << 1, d.mE(t, h, qa, null, null, !0);
            return d
        },
        nd: function() {
            if (!this.q3 &&
                function(a) {
                    a = window.document.location.href;
                    var c = a.indexOf("://yal.cc");
                    0 > c && (c = a.indexOf("://yellowafterlife.itch.io"));
                    0 > c && (c = a.indexOf("://v6p9d9t4.ssl.hwcdn.net"));
                    return 0 <= c && 8 > c
                }(this)) {
                this.q3 = !0;
                this.aK = F.nh("img/items.png");
                this.ka = new L(this.aK.i1.width >> 1, this.aK.i1.height >> 1, !0, 0);
                this.gy(this.aK, this.aK.i1.width, this.aK.i1.height, this.ka);
                this.oc = F.nh("img/nitems.png");
                this.gE = new L(this.oc.i1.width >> 1, this.oc.i1.height >> 1, !0, 0);
                this.gy(this.oc, this.oc.i1.width, this.oc.i1.height, this.gE);
                this.iU = F.nh("img/visual.png");
                this.m0 = F.nh("img/buffs.png");
                x.nd();
                N.dE();
                this.font = new la(24, 24, 17, 1, [
                    ["img/shadow.png"],
                    ["img/color.png"]
                ], [7, 220, 23, 1, 15, 0, 4, 0, 32, 250, 40, 5, 5, -2, 21, 7, 33, 201, 21, 7, 20, -1, -1, 5, 34, 15, 101, 12, 9, -2, -1, 6, 35, 190, 61, 13, 16, -1, 3, 10, 36, 26, 0, 16, 23, -2, -1, 11, 37, 35, 45, 16, 19, -1, 0, 14, 38, 225, 21, 18, 19, -2, 2, 12, 39, 28, 101, 8, 9, -2, -1, 3, 40, 13, 0, 12, 24, -1, -1, 6, 41, 0, 0, 12, 24, -3, -1, 7, 42, 211, 78, 12, 11, -1, 1, 10, 43, 185, 79, 12, 12, -1, 5, 11, 44, 58, 100, 8, 8, -2, 13, 5, 45, 112, 98, 12, 7, 0, 7, 12, 46, 125, 98, 7, 7, -1, 12,
                    5, 47, 113, 45, 13, 19, -2, 0, 8, 48, 176, 62, 13, 16, -2, 3, 10, 49, 245, 60, 8, 15, -1, 3, 5, 50, 90, 65, 15, 17, -2, 2, 10, 51, 122, 65, 14, 17, -2, 2, 10, 52, 79, 24, 14, 20, -2, -1, 10, 53, 94, 24, 14, 20, -2, 1, 9, 54, 68, 45, 15, 19, -2, 1, 11, 55, 47, 65, 13, 18, -3, 1, 8, 56, 32, 66, 14, 18, -2, 1, 9, 57, 152, 22, 12, 20, -1, 1, 9, 58, 153, 81, 7, 14, -1, 5, 5, 59, 218, 61, 8, 16, -2, 5, 5, 60, 161, 80, 11, 13, 0, 4, 12, 61, 198, 78, 12, 11, 0, 6, 12, 62, 173, 80, 11, 13, 0, 4, 12, 63, 124, 23, 13, 20, -2, -1, 9, 64, 160, 63, 15, 16, -2, 3, 12, 65, 0, 46, 17, 19, -2, 0, 11, 66, 127, 44, 18, 18, -2, 1, 14, 67, 216, 42, 16, 18, -2, 1, 12, 68, 106, 65, 15, 17,
                    -1, 2, 12, 69, 18, 46, 16, 19, -2, 0, 12, 70, 84, 45, 14, 19, -1, 0, 11, 71, 203, 0, 18, 20, -2, -1, 14, 72, 240, 0, 14, 20, -1, -1, 12, 73, 61, 65, 8, 18, -1, 1, 5, 74, 222, 0, 17, 20, -2, -1, 11, 75, 120, 0, 16, 22, -1, -1, 12, 76, 233, 41, 16, 18, -2, 1, 11, 77, 70, 65, 19, 17, -1, 2, 16, 78, 164, 43, 17, 18, -1, 1, 14, 79, 52, 45, 15, 19, -2, 0, 11, 80, 199, 42, 16, 18, -3, 1, 10, 81, 43, 0, 16, 23, -2, 1, 13, 82, 165, 0, 18, 20, -2, 1, 12, 83, 0, 25, 16, 20, -2, 0, 11, 84, 182, 42, 16, 18, -2, 1, 10, 85, 16, 66, 15, 18, -1, 1, 12, 86, 0, 66, 15, 18, -2, 1, 11, 87, 184, 0, 18, 20, -2, 0, 15, 88, 17, 25, 16, 20, -2, 0, 11, 89, 34, 24, 14, 20, -2, 0, 9, 90, 146, 44,
                    17, 18, -2, 1, 11, 91, 98, 0, 10, 23, -1, -1, 7, 92, 99, 45, 13, 19, -2, 0, 9, 93, 109, 0, 10, 23, -2, -1, 7, 94, 37, 101, 11, 8, -2, 0, 6, 95, 67, 100, 27, 7, -2, 18, 20, 96, 49, 101, 8, 8, -2, 0, 5, 97, 57, 84, 12, 15, -2, 4, 8, 98, 64, 24, 14, 20, -2, -1, 10, 99, 140, 81, 12, 14, -2, 5, 8, 100, 49, 24, 14, 20, -2, -1, 10, 101, 15, 85, 13, 15, -2, 4, 8, 102, 178, 21, 12, 20, -2, -1, 6, 103, 137, 0, 13, 22, -2, 4, 9, 104, 138, 23, 13, 20, -2, -1, 10, 105, 151, 63, 8, 17, -2, 2, 4, 106, 60, 0, 13, 23, -5, 1, 5, 107, 137, 63, 13, 17, -2, 2, 8, 108, 191, 21, 9, 20, -2, -1, 4, 109, 227, 61, 17, 15, -2, 4, 14, 110, 99, 83, 13, 14, -2, 5, 10, 111, 29, 85, 13, 15, -2, 4,
                    9, 112, 151, 0, 13, 21, -2, 4, 9, 113, 109, 24, 14, 20, -2, 5, 10, 114, 127, 83, 12, 14, -2, 5, 8, 115, 43, 85, 13, 15, -2, 4, 8, 116, 244, 21, 10, 18, -2, 1, 5, 117, 85, 83, 13, 14, -2, 5, 10, 118, 113, 83, 13, 14, -2, 5, 8, 119, 70, 83, 14, 14, -2, 5, 10, 120, 204, 61, 13, 16, -2, 4, 8, 121, 165, 21, 12, 20, -2, 5, 7, 122, 0, 85, 14, 15, -2, 4, 9, 123, 86, 0, 11, 23, -1, -1, 7, 124, 217, 21, 7, 20, 0, 0, 7, 125, 74, 0, 11, 23, -2, -1, 7, 126, 0, 101, 14, 9, -2, 5, 10, 166, 209, 21, 7, 20, 0, 0, 7, 172, 235, 77, 13, 10, -2, 7, 9, 8226, 224, 78, 10, 11, -1, 4, 7, 8230, 95, 98, 16, 7, -2, 12, 13
                ], [97, 84, -1, 90, 42, -1, 89, 113, -1, 89, 97, -1, 84, 122, -1, 84,
                    121, -1, 84, 120, -1, 84, 119, -1, 84, 118, -1, 84, 117, -1, 84, 115, -1, 84, 114, -1, 84, 113, -1, 84, 112, -1, 84, 111, -1, 84, 110, -1, 84, 101, -1, 84, 99, -1, 84, 97, -1, 80, 8230, -1, 80, 46, -1, 80, 45, -1, 80, 44, -1, 76, 42, -1, 74, 39, 1, 74, 34, 1, 47, 97, -1, 45, 90, -1, 40, 106, 3
                ]);
                var a = this.font.qL.eX[95];
                a.py -= 16;
                a.y -= 4;
                a.s -= 12;
                this.font.mv = 63;
                this.mh();
                this.screen = new L(this.oY(), this.$x(), !0, 0);
                this.hI();
                this.fU(this.display = new Pa(this.screen));
                this.d0 = new O;
                this._w = new Ga;
                this._w.name = "Player";
                this.d0.add(new ga);
                this.addEventListener("enterFrame",
                    u(this, this.dB));
                this.addEventListener("rightMouseDown", u(this, this.jS));
                this.addEventListener("rightMouseUp", u(this, this.Z));
                this.addEventListener("middleMouseDown", u(this, this.bo));
                this.addEventListener("middleMouseUp", u(this, this.kV));
                this.addEventListener("mouseDown", u(this, this.eS));
                this.addEventListener("mouseUp", u(this, this.ek));
                this.addEventListener("mouseMove", u(this, this.qv));
                this.addEventListener("mouseWheel", u(this, this.n_));
                window.addEventListener("contextmenu", function(a) {
                    a.pageX < window.innerWidth -
                        168 && a.pageY < window.innerHeight - 98 && a.preventDefault()
                });
                this.time = l.fR() / 1E3;
                this.jP(this.aK, 0, 0, 1, 1, -1, -1, 1)
            }
        },
        cX: function() {
            this.clear(this.screen);
            var a, b;
            b = this.nE;
            this.o8 ? (a = 1 - b * b, b = -4 - 4 * Math.cos(40 * b) * b) : (a = 1 - b * b, b = -4 - 4 * Math.cos(40 * b));
            this._Z(this.a5, this.screen.i1.width - (this.a5.i1.width * a | 0), this.screen.i1.height - (this.a5.i1.height + b | 0));
            this.d0.dK(0, 0)
        },
        dB: function(a) {
            a = l.fR() / 1E3;
            this._a = a - this.time;
            this.time = a;
            this.lh && (this.nE = Math.max(this.nE - this._a / 3.7, 0));
            null != this.mp && (this.d0.aY(this.eO,
                this.qQ) == this.mp ? (this.p3 = (l.fR() - this.nJ) / 1E3, this.mp.eK(this.p3)) : (this.mp.lI(), this.mp = null));
            this.d0.update(this._a);
            this.cX();
            this.d0.mq()
        },
        qv: function(a) {
            a = this.eO = C["int"](this.get_oO());
            var b = this.qQ = C["int"](this.get_ob());
            this.d0.pK(a, b);
            this.jM = this.d0.aY(a, b)
        },
        n_: function(a) {
            null != this.jM && this.jM.pl(0 < a._a ? 1 : 0 > a._a ? -1 : 0)
        },
        ge: function(a) {
            if (!(this.n3 || l.fR() < this._T)) {
                this.n3 = !0;
                a = this.eO = C["int"](this.get_oO());
                var b = this.qQ = C["int"](this.get_ob());
                this.mp = this.d0.aY(a, b);
                this.nJ = l.fR()
            }
        },
        eS: function(a) {
            this.au = a.shiftKey;
            this._i = a.ctrlKey;
            this.ge(a)
        },
        jS: function(a) {
            this.au = !a.shiftKey;
            this._i = a.ctrlKey;
            this.ge(a)
        },
        bo: function(a) {
            this.au = a.shiftKey;
            this._i = !a.ctrlKey;
            this.ge(a)
        },
        dm: function(a) {
            this.n3 && (this.n3 = !1, null != this.mp && (this.mp.lI(), this.mp = null), a = this.d0.aY(C["int"](this.get_oO()), C["int"](this.get_ob())), null != a && a.click())
        },
        ek: function(a) {
            this.au = a.shiftKey;
            this._i = a.ctrlKey;
            this.dm(a)
        },
        Z: function(a) {
            this.au = !a.shiftKey;
            this._i = a.ctrlKey;
            this.dm(a)
        },
        kV: function(a) {
            this.au =
                a.shiftKey;
            this._i = !a.ctrlKey;
            this.dm(a)
        },
        en: function(a, b) {
            return a > b ? a : b
        },
        i_: function(a, b, c) {
            this.oI.x = b;
            this.oI.y = c;
            this.cv.x = this.cv.y = 0;
            this.cv.width = a.i1.width;
            this.cv.height = a.i1.height;
            this.screen.mE(a, this.cv, this.oI, null, null, !0)
        },
        _Z: function(a, b, c, d) {
            null == d && (d = 1);
            this.fe.nG = b;
            this.fe.lS = c;
            this.l8.bm = d;
            this.screen._Z(a, this.fe, 1 > d ? this.l8 : null)
        },
        jP: function(a, b, c, d, e, f, h, t) {
            null == t && (t = 1);
            var qa = this.screen.context,
                g = qa.globalAlpha;
            qa.globalAlpha *= t;
            qa.drawImage(a.i1, b, c, d, e, f, h, d, e);
            qa.globalAlpha =
                g
        },
        clear: function(a, b) {
            null == b && (b = 0);
            if (255 == b >>> 24) {
                var c = this.gB;
                c.clear();
                c._f(b & 16777215);
                c.oy(0, 0, a.i1.width, a.i1.height);
                c.aS();
                a._Z(this.fA)
            } else this.cv.x = this.cv.y = 0, this.cv.width = a.i1.width, this.cv.height = a.i1.height, a.fillRect(this.cv, 0)
        },
        rect: function(a, b, c, d, e) {
            this.cv.x = a;
            this.cv.y = b;
            this.cv.width = c;
            this.cv.height = d;
            this.screen.fillRect(this.cv, e | -16777216)
        },
        pr: function(a, b, c, d, e, f) {
            null == f && (f = 1);
            this.gB.clear();
            this.gB._f(e, f);
            this.gB.oy(a, b, c, d);
            this.gB.aS();
            this.screen._Z(this.fA)
        },
        $G: function(a) {
            this.removeEventListener("addedToStage", u(this, this.$G));
            this.get_ew().addEventListener("resize", u(this, this.$));
            this.nd()
        },
        ik: I
    });
    var gb = function() {
        I.call(this)
    };
    g.DocumentClass = gb;
    gb.be = !0;
    gb.pc = I;
    gb.prototype = m(I.prototype, {
        get_ew: function() {
            return l.get_iv().get_ew()
        },
        ik: gb
    });
    var ib = function() {};
    g["openfl.AssetLibrary"] = ib;
    ib.be = !0;
    ib.prototype = {
        d5: function(a, b) {
            return !1
        },
        nh: function(a) {
            return null
        },
        ik: ib
    };
    var jb = function() {
        this.type = new Y;
        this.fD = new Y;
        this.add("img/overlay.png",
            v.IMAGE);
        this.add("img/buffs.png", v.IMAGE);
        this.add("img/color.png", v.IMAGE);
        this.add("img/items.png", v.IMAGE);
        this.add("img/nitems.png", v.IMAGE);
        this.add("img/shadow.png", v.IMAGE);
        this.add("img/visual.png", v.IMAGE)
    };
    g.DefaultAssetLibrary = jb;
    jb.be = !0;
    jb.pc = ib;
    jb.prototype = m(ib.prototype, {
        add: function(a, b, c) {
            this.type.set(a, b);
            this.fD.set(a, null != c ? c : a)
        },
        d5: function(a, b) {
            var c = this.type.get(a);
            if (null != c) {
                if (c == b || null == b) return !0;
                switch (b[1]) {
                    case 5:
                        return c == v.MUSIC;
                    case 4:
                        return c == v.SOUND;
                    case 0:
                        return !0
                }
            }
            return !1
        },
        nh: function(a) {
            a = this.fD.get(a);
            return n.qS.get(a).qE.content.ds
        },
        ik: jb
    });
    var w = function() {};
    g.HxOverrides = w;
    w.be = !0;
    w.qg = function(a, b) {
        var c = a.charCodeAt(b);
        return c != c ? void 0 : c
    };
    w.substr = function(a, b, c) {
        if (null != b && 0 != b && null != c && 0 > c) return "";
        null == c && (c = a.length);
        0 > b ? (b = a.length + b, 0 > b && (b = 0)) : 0 > c && (c = a.length + c - b);
        return a.substr(b, c)
    };
    w.indexOf = function(a, b, c) {
        var d = a.length;
        0 > c && (c += d, 0 > c && (c = 0));
        for (; c < d;) {
            if (a[c] === b) return c;
            c++
        }
        return -1
    };
    w.remove = function(a, b) {
        var c = w.indexOf(a, b, 0);
        if (-1 ==
            c) return !1;
        a.splice(c, 1);
        return !0
    };
    w.d$ = function(a) {
        return {
            c_: 0,
            ga: a,
            qu: function() {
                return this.c_ < this.ga.length
            },
            $6: function() {
                return this.ga[this.c_++]
            }
        }
    };
    Math.be = !0;
    var db = function() {
        U.call(this);
        var a = this.c$(),
            b = 0;
        70 > .299 * (a >> 16 & 255) + .587 * (a >> 8 & 255) + .114 * (a & 255) && (b = 16777215);
        var a = this.dX() / 2 - 3.5,
            c = this._2() - 60;
        this.outline = new V;
        this.outline.get_h8()._f(b, .07);
        this.outline.get_h8().oy(0, 0, c, 7);
        this.outline.set_x(30);
        this.outline.set_y(a);
        this.fU(this.outline);
        this.c6 = new V;
        this.c6.get_h8()._f(b,
            .35);
        this.c6.get_h8().oy(0, 0, c - 4, 3);
        this.c6.set_x(32);
        this.c6.set_y(a + 2);
        this.c6.set_ah(0);
        this.fU(this.c6)
    };
    g.NMEPreloader = db;
    db.be = !0;
    db.pc = V;
    db.prototype = m(V.prototype, {
        c$: function() {
            return 4214896
        },
        dX: function() {
            return l.get_iv().get_ew().get_ce()
        },
        _2: function() {
            return l.get_iv().get_ew().get_n9()
        },
        hy: function() {},
        _k: function() {
            this.dispatchEvent(new M("complete"))
        },
        nu: function(a, b) {
            var c = a / b;
            1 < c && (c = 1);
            this.c6.set_ah(c)
        },
        ik: db
    });
    var xa = function() {};
    g.Reflect = xa;
    xa.be = !0;
    xa.ih = function(a, b) {
        try {
            return a[b]
        } catch (c) {
            return c instanceof
            G && (c = c.gY), null
        }
    };
    xa.mM = function(a) {
        return "function" == typeof a && !(a.be || a.qV)
    };
    xa.kS = function(a, b) {
        return a == b ? !0 : xa.mM(a) && xa.mM(b) ? a.scope == b.scope && a.method == b.method && null != a.method : !1
    };
    var C = function() {};
    g.Std = C;
    C.be = !0;
    C.string = function(a) {
        return E.o2(a, "")
    };
    C["int"] = function(a) {
        return a | 0
    };
    C.parseInt = function(a) {
        var b = parseInt(a, 10);
        0 != b || 120 != w.qg(a, 1) && 88 != w.qg(a, 1) || (b = parseInt(a));
        return isNaN(b) ? null : b
    };
    var J = function() {};
    g.StringTools = J;
    J.be = !0;
    J.ex = function(a, b) {
        a = a.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
        return b ? a.split('"').join("&quot;").split("'").join("&#039;") : a
    };
    J.iH = function(a, b) {
        return a.length >= b.length && w.substr(a, 0, b.length) == b
    };
    J.kg = function(a, b) {
        var c = b.length,
            d = a.length;
        return d >= c && w.substr(a, d - c, c) == b
    };
    J.jg = function(a, b) {
        var c = w.qg(a, b);
        return 8 < c && 14 > c || 32 == c
    };
    J.aN = function(a) {
        for (var b = a.length, c = 0; c < b && J.jg(a, c);) c++;
        return 0 < c ? w.substr(a, c, b - c) : a
    };
    J.eV = function(a) {
        for (var b = a.length, c = 0; c < b && J.jg(a, b - c - 1);) c++;
        return 0 < c ? w.substr(a, 0, b - c) : a
    };
    J.trim = function(a) {
        return J.aN(J.eV(a))
    };
    J.replace = function(a, b, c) {
        return a.split(b).join(c)
    };
    J.cf = function(a, b) {
        var c = "";
        do c = "0123456789ABCDEF".charAt(a & 15) + c, a >>>= 4; while (0 < a);
        if (null != b)
            for (; c.length < b;) c = "0" + c;
        return c
    };
    var Ua = function() {};
    g.Type = Ua;
    Ua.be = !0;
    Ua.d7 = function(a) {
        a = g[a];
        return null != a && a.be ? a : null
    };
    Ua.D = function(a) {
        a = g[a];
        return null != a && a.qV ? a : null
    };
    Ua.am = function(a, b) {
        switch (b.length) {
            case 0:
                return new a;
            case 1:
                return new a(b[0]);
            case 2:
                return new a(b[0], b[1]);
            case 3:
                return new a(b[0], b[1], b[2]);
            case 4:
                return new a(b[0],
                    b[1], b[2], b[3]);
            case 5:
                return new a(b[0], b[1], b[2], b[3], b[4]);
            case 6:
                return new a(b[0], b[1], b[2], b[3], b[4], b[5]);
            case 7:
                return new a(b[0], b[1], b[2], b[3], b[4], b[5], b[6]);
            case 8:
                return new a(b[0], b[1], b[2], b[3], b[4], b[5], b[6], b[7]);
            default:
                throw new G("Too many arguments");
        }
    };
    var za = function() {
        this.x = this.y = 0;
        this.cj = I.oe
    };
    g["dom.Node"] = za;
    za.be = !0;
    za.prototype = {
        update: function(a) {},
        dK: function(a, b) {},
        aY: function(a, b) {
            return null
        },
        click: function() {},
        eK: function(a) {},
        lI: function() {},
        pK: function(a, b) {},
        pl: function(a) {},
        mq: function() {},
        ik: za
    };
    var O = function() {
        za.call(this);
        this.d0 = [];
        this.lk = [];
        this.ql = []
    };
    g["dom.Container"] = O;
    O.be = !0;
    O.pc = za;
    O.prototype = m(za.prototype, {
        add: function(a) {
            this.lk.push(a)
        },
        remove: function(a) {
            this.ql.push(a)
        },
        mq: function() {
            var a, b, c, d;
            b = this.lk.length;
            c = this.ql.length;
            for (a = b; 0 <= --a;)
                for (d = this.lk[a], b = c; 0 <= --b;) this.ql[b] == d && (w.remove(this.ql, this.ql[b]), w.remove(this.lk, d));
            b = this.ql.length;
            for (a = 0; a < b;) w.remove(this.d0, this.ql[a]), a++;
            for (; 0 <= --b;) this.ql.pop();
            b =
                this.lk.length;
            for (a = 0; a < b;) this.d0.push(this.lk[a]), a++;
            for (; 0 <= --b;) this.lk.pop();
            b = this.d0.length;
            for (a = 0; a < b;) this.d0[a].mq(), a++
        },
        aY: function(a, b) {
            for (var c = this.d0.length, d; 0 <= --c;)
                if (null != (d = this.d0[c].aY(a - this.x, b - this.y))) return d;
            return null
        },
        update: function(a) {
            for (var b = -1, c = this.d0.length; ++b < c;) this.d0[b].update(a)
        },
        dK: function(a, b) {
            for (var c = -1, d = this.d0.length; ++c < d;) this.d0[c].dK(this.x + a, this.y + b)
        },
        pK: function(a, b) {
            for (var c = -1, d = this.d0.length; ++c < d;) this.d0[c].pK(a - this.x, b - this.y)
        },
        ik: O
    });
    var Z = function(a, b) {
        this.qm = -1;
        O.call(this);
        this.fixed = b;
        this.qM = a;
        this.label = new Q;
        this.label.set_m2(this.label.set_fh(2));
        this.label.x = 37;
        this.label.y = 50;
        b && this.set_q7(new N);
        this.add(this.label)
    };
    g["app.BuffNode"] = Z;
    Z.be = !0;
    Z.pc = O;
    Z.prototype = m(O.prototype, {
        clear: function() {
            this.set_id(this.set_time(0))
        },
        copy: function(a) {
            this.set_id(a.get_id());
            this.set_time(a.get_time())
        },
        dj: function(a) {
            var b;
            b = this.get_id();
            this.set_id(a.get_id());
            a.set_id(b);
            b = this.get_time();
            this.set_time(a.get_time());
            a.set_time(b)
        },
        aY: function(a, b) {
            return a >= this.x && b >= this.y && a < this.x + 36 && b < this.y + 36 ? this : null
        },
        click: function() {
            var a = Z.q1;
            null != a ? (Z.q1 = null, a.gT(this)) : 0 != this.get_id() && (Z.q1 = this);
            K.q7 = this
        },
        gT: function(a) {
            var b = K.cC;
            this != a && (this.fixed || a.fixed ? this.fixed && !a.fixed ? 0 != a.get_id() ? (this != b ? (b.copy(a), a.copy(this)) : b.dj(a), b.click()) : a.copy(this) : !this.fixed && a.fixed && this.clear() : 0 != a.get_id() ? (b.copy(a), a.copy(this), b.click(), this.clear()) : a.dj(this))
        },
        gf: function(a, b, c) {
            var d = this.get_id();
            if (0 > d || d >= N.p4) d = 0;
            this.cj.jP(this.cj.m0, 40 * (d & 31), 40 * (d >> 5), 40, 40, a - 2, b - 2, c)
        },
        dK: function(a, b) {
            var c = this.get_id(),
                d;
            d = Z.q1 == this ? .6 : 0 != c ? 1 : .6;
            10 <= this.qM && 77 > this.cj._w.version && (d *= .5);
            this.get_id() > Z.hv && (d *= .7);
            this.gf(a + this.x, b + this.y, d);
            this.qm != this.get_time() && (this.qm = this.get_time(), this.label.set_text(this.q7.getTime()));
            0 < c && !this.fixed && O.prototype.dK.call(this, a, b)
        },
        set_q7: function(a) {
            this.q7 != a && (this.q7 = a, this.label.set_text(a.getTime()));
            return a
        },
        get_id: function() {
            return this.q7.id
        },
        set_id: function(a) {
            return this.q7.id = a
        },
        get_time: function() {
            return this.q7.time | 0
        },
        set_time: function(a) {
            this.q7.time != a && (this.q7.time = a, this.label.set_text(this.q7.getTime()));
            return a
        },
        ik: Z
    });
    var Qb = function() {};
    g["app.Libraries"] = Qb;
    Qb.be = !0;
    Qb.ip = function() {
        var a = function(a, b, c) {
                null == c && (c = 0);
                return new Xa(c, a, b)
            },
            b = function(a, b, c) {
                null == c && (c = 0);
                0 == c && (0 != b[0] ? c = b[0] : 0 != b[10] && (c = b[10]));
                return new Qa(c, a, b)
            },
            c = function(c, d, e) {
                for (var g = [], A = 0, ea = x.list; A < ea.length;) {
                    var q = ea[A];
                    ++A;
                    e(q) && g.push(q.id)
                }
                e =
                    g.length;
                c = 42 == w.qg(c, c.length - 1) ? c.substring(0, c.length - 1) : c + (" (" + e + ")");
                if (40 >= e) return b(c, g, d);
                if (480 >= e) {
                    for (var A = [], q = null, k = 0; k < e;) {
                        var r = k++;
                        0 == r % 40 && (q = [], ea = b("Page " + ((r / 40 | 0) + 1), q, g[r]), A.push(ea));
                        q.push(g[r])
                    }
                    return a(c, A, d)
                }
                if (4800 >= e) {
                    for (var A = [], ea = null, y, r = null, q = 0; q < e;) y = q++, k = g[y], 0 == y % 40 && (y = y / 40 | 0, 0 == y % 10 && (ea = [], r = a("Pages " + (y + 1) + "+", ea, k), A.push(r)), r = [], y = b("Page " + (y + 1), r, k), ea.push(y)), r.push(k);
                    return a(c, A, d)
                }
                throw new G("Too many items (" + e + ")");
            },
            d, e;
        d = a("", []);
        d.d0.push(a("Materials", [a("Pre-Hardmode", [b("Copper & Tin", [12, -15, -13, 89, 0, 699, -27, -25, 687, 0, 20, -14, -17, 80, 0, 703, -26, -29, 688, 0, 145, -18, -16, 76, 0, 717, -30, -28, 689, 0, 146, 106, 15, 0, 0, 720, 710, 707, 0, 0], 20), b("Iron & Lead", [11, 6, 1, 90, 0, 700, -33, -31, 690, 0, 22, 4, 7, 81, 0, 704, -32, -35, 691, 0, 0, 99, 10, 77, 0, 0, -36, -34, 692, 0, 0, 1140, 35, 954, 0, 0, 1139, 716, 0, 0], 22), b("Silver & Tungsten", [14, -9, -7, 91, 0, 701, -39, -37, 693, 0, 21, -8, -11, 82, 0, 705, -38, -41, 694, 0, 143, -12, -10, 78, 0, 718, -42, -40, 695, 0, 144, 107, 16, 0, 0, 721, 711, 708, 0, 0], 21),
            b("Gold & Platinum", [13, -3, -1, 92, 264, 702, -45, -43, 696, 715, 19, -2, -5, 83, 349, 706, -44, -47, 697, 714, 141, -6, -4, 79, 105, 719, -48, -46, 698, 713, 142, 108, 17, 955, 0, 722, 712, 709, 0, 0], 19), b("Demonite & Crimtane", [56, 46, 103, 102, 956, 880, 795, 798, 792, 0, 57, 0, 104, 101, 957, 1257, 801, 797, 793, 0, 86, 44, 45, 100, 958, 1329, 796, 799, 794, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 57), b("Meteor & Molten", [116, 203, 199, 123, 0, 174, 121, 122, 231, 0, 117, 200, 204, 124, 0, 175, 119, 217, 232, 0, 75, 197, 198, 125, 0, 214, 120, 0, 233, 0, 234, 127, 201, 202, 0, 265, 219, 0, 0, 221], 117), b("Jungle & Bone",
                [331, 190, 0, 228, 0, 154, 1166, 1320, 151, 811, 209, 0, 0, 229, 0, 0, 0, 0, 152, 808, 210, 191, 0, 230, 0, 766, 0, 932, 153, 827, 1310, 0, 185, 0, 0, 768, 0, 347, 959, 820], 331)
        ], 20), a("Hardmode", [b("Cobalt & Palladium", [364, 483, 776, 373, 371, 1104, 1185, 1188, 1207, 1206, 381, 537, 385, 372, 960, 1184, 1186, 1189, 1205, 0, 415, 435, 991, 374, 961, 1589, 1187, 1222, 1208, 0, 420, 0, 383, 375, 962, 1590, 0, 1190, 1209, 0], 381), b("Mythril & Orichalcum", [365, 484, 777, 378, 376, 1105, 1192, 1195, 1211, 1212, 382, 390, 386, 377, 0, 1191, 1193, 1196, 1210, 0, 416, 436, 992, 379, 0, 0, 1194, 1223, 1213,
            0, 421, 525, 384, 380, 0, 0, 1220, 1197, 1214, 0
        ], 382), b("Adamantite & Titanium", [366, 482, 778, 401, 400, 1106, 1199, 1202, 1216, 1217, 391, 406, 388, 402, 0, 1198, 1200, 1203, 1215, 0, 604, 481, 993, 403, 0, 1593, 1201, 1224, 1218, 0, 605, 524, 387, 404, 0, 1594, 1221, 1204, 1219, 0], 391), b("Hallowed & Chlorophyte", [0, 368, 990, 553, 558, 947, 1227, 1230, 1002, 1003, 1225, 550, 579, 559, 0, 1006, 1228, 1231, 1001, 0, 0, 578, 367, 551, 0, 1235, 1229, 1233, 1004, 1234, 0, 0, 0, 552, 0, 1179, 1226, 1232, 1005, 1262], 1125), b("Shroomite & Ectoplasm", [183, 2176, 1547, 1546, 0, 1508, 1506, 1543,
            1503, 2189, 1552, 0, 1548, 1549, 0, 3261, 1507, 1544, 1504, 0, 2791, 0, 0, 1550, 0, 0, 0, 1545, 1505, 0, 2794, 0, 0, 1866, 0, 0, 0, 0, 823, 0
        ], 1152), b("Frost, Turtle & Beetle", [724, 725, 496, 684, 1253, 0, 1316, 0, 2199, 0, 1306, 670, 1572, 685, 0, 0, 1317, 0, 2200, 2201, 676, 0, 1264, 686, 2161, 0, 1318, 0, 2202, 2280, 0, 0, 726, 822, 1519, 0, 1328, 0, 2218, 0], 2218), b("Luminite & Martian", [3460, 3567, 0, 0, 2860, 2855, 2820, 2813, 2861, 2822, 3467, 3568, 0, 0, 0, 2809, 2818, 2825, 2815, 2812, 3461, 0, 0, 0, 0, 2823, 2819, 2814, 2826, 2824, 3472, 0, 0, 0, 0, 2810, 2817, 2816, 2821, 2811], 3467), b("Solar & Vortex",
            [3458, 2786, 2784, 2763, 3473, 3456, 2776, 2774, 2757, 3475, 3573, 2782, 2783, 2764, 3543, 3574, 2772, 2773, 2758, 3540, 3526, 2785, 3522, 2765, 0, 3528, 2775, 3523, 2759, 0, 0, 0, 0, 3468, 0, 0, 0, 0, 3469, 0], 3458), b("Nebula & Stardust", [3457, 2781, 2779, 2760, 3476, 3459, 3466, 3464, 3381, 3474, 3575, 2777, 2778, 2761, 3542, 3576, 3462, 3463, 3382, 3531, 3527, 2780, 3524, 2762, 0, 3529, 3465, 3525, 3383, 0, 0, 0, 0, 3470, 0, 0, 0, 0, 3471, 0], 3457)], 3467), a("Themes", [b("Ice", [883, 594, 0, 0, 0, 0, 2040, 2059, 664, 593, 884, 595, 0, 0, 0, 2594, 2049, 2100, 2044, 2288, 2198, 0, 0, 0, 0, 2635, 2086,
            681, 2252, 2248, 0, 0, 0, 0, 0, 2076, 2031, 0, 2247, 2068
        ], 883), b("Skyware", [824, 751, 0, 0, 0, 0, 2042, 2063, 825, 2628, 765, 752, 0, 0, 0, 2606, 2053, 2102, 837, 826, 0, 0, 0, 0, 0, 2410, 2090, 838, 2631, 830, 0, 0, 0, 0, 0, 2080, 2029, 2394, 2384, 2070], 824), b("Lihzahrd", [1101, 1152, 1148, 0, 0, 0, 2041, 2062, 1102, 0, 0, 1153, 1149, 0, 0, 2595, 2052, 2101, 1137, 1143, 2195, 1154, 1147, 0, 0, 2416, 2089, 1142, 1144, 1145, 0, 0, 1146, 0, 0, 2079, 2030, 2396, 2385, 2069], 1101), b("Glass", [170, 2194, 0, 2243, 0, 0, 2037, 2065, 392, 1702, 1271, 1272, 0, 2244, 0, 2239, 2048, 2097, 1709, 1703, 1268, 1267, 0, 0,
            0, 2414, 2085, 2748, 2632, 1713, 1270, 1269, 0, 0, 0, 2075, 2025, 2639, 2254, 1719
        ], 170), b("Golden", [141, 0, 0, 0, 0, 1705, 2147, 2143, 142, 0, 0, 0, 0, 0, 0, 2238, 2155, 2151, 1710, 1704, 0, 0, 0, 0, 0, 2405, 2133, 2336, 0, 1716, 0, 0, 0, 0, 0, 2663, 2137, 2389, 2379, 1720], 1705), b("Steampunk", [0, 0, 839, 0, 0, 0, 2036, 2655, 0, 0, 0, 0, 840, 0, 0, 2241, 2649, 2096, 1712, 1708, 0, 0, 841, 0, 0, 2412, 2130, 2250, 2253, 1718, 2203, 0, 0, 0, 0, 2125, 2024, 2638, 2256, 1722], 1712), b("Dynasty", [2260, 0, 0, 0, 2235, 0, 2224, 2227, 2263, 2264, 0, 0, 0, 0, 2261, 2237, 2226, 2236, 2265, 2228, 0, 0, 0, 0, 2262, 0, 2225, 2230,
            2229, 2259, 0, 0, 0, 0, 2234, 2232, 0, 2233, 0, 2231
        ], 2224), b("Obsidian", [192, 0, 0, 0, 0, 1462, 2642, 2657, 330, 1457, 0, 0, 0, 0, 0, 2600, 2651, 2667, 1458, 1459, 0, 0, 0, 0, 0, 2406, 2644, 2618, 1461, 1460, 0, 0, 0, 0, 0, 2662, 1463, 2390, 2380, 1473], 192), b("Blue dungeon", [134, 0, 0, 0, 0, 1408, 0, 2652, 135, 1384, 0, 0, 0, 0, 0, 0, 1405, 2664, 1411, 1396, 0, 0, 0, 0, 0, 2402, 2645, 2614, 1398, 1397, 0, 0, 0, 0, 0, 2658, 1414, 2386, 2376, 1470], 134), b("Green dungeon", [137, 0, 0, 0, 0, 1409, 0, 2653, 138, 1386, 0, 0, 0, 0, 0, 0, 1406, 2665, 1412, 1399, 0, 0, 0, 0, 0, 2403, 2646, 2612, 1401, 1400, 0, 0, 0, 0, 0, 2659,
            1415, 2387, 2377, 1471
        ], 137), b("Pink dungeon", [139, 0, 0, 0, 0, 1410, 0, 2654, 140, 1385, 0, 0, 0, 0, 0, 0, 1407, 2666, 1413, 1402, 0, 0, 0, 0, 0, 2404, 2647, 2613, 1404, 1403, 0, 0, 0, 0, 0, 2660, 1416, 2388, 2378, 1472], 139)], 1125), a("Wood", [b("Forest wood", [9, 24, 727, 0, 0, 335, 136, 108, 93, 94, 1447, 196, 728, 0, 0, 359, 105, 349, 25, 34, 0, 39, 729, 0, 0, 2397, 341, 48, 36, 32, 0, 0, 0, 0, 0, 336, 354, 334, 333, 224], 9), b("Jungle wood", [620, 656, 733, 0, 0, 0, 2038, 2060, 623, 632, 2211, 657, 734, 0, 0, 2597, 2050, 2098, 651, 629, 0, 658, 735, 0, 0, 2399, 2087, 626, 636, 639, 0, 0, 0, 0, 0, 2077, 2026, 648,
            642, 645
        ], 620), b("Pearlwood", [621, 659, 736, 0, 0, 0, 2039, 2061, 624, 633, 2212, 660, 737, 0, 0, 2602, 2051, 2099, 652, 630, 0, 661, 738, 0, 0, 2400, 2088, 627, 637, 640, 0, 0, 0, 0, 0, 2027, 2078, 649, 643, 646], 621), b("Ebonwood", [619, 653, 730, 0, 0, 0, 2033, 2056, 622, 631, 2210, 654, 731, 0, 0, 2593, 2046, 2093, 650, 628, 0, 655, 732, 0, 0, 2398, 2083, 914, 635, 638, 0, 0, 0, 0, 0, 2073, 2021, 647, 641, 644], 619), b("Shadewood", [911, 921, 924, 0, 0, 0, 2146, 2142, 927, 913, 2213, 922, 925, 0, 0, 2604, 2154, 2150, 912, 915, 0, 923, 926, 0, 0, 2401, 2132, 914, 916, 917, 0, 0, 0, 0, 0, 2127, 2136, 918, 919, 920],
            911), b("Living wood", [832, 0, 0, 0, 0, 0, 2145, 2141, 1723, 2629, 2196, 0, 0, 0, 0, 2596, 2153, 2149, 819, 806, 0, 0, 0, 0, 0, 2636, 2131, 831, 2633, 829, 0, 0, 0, 0, 0, 2126, 2135, 0, 2245, 2139], 832), b("Spooky wood", [1729, 0, 1832, 0, 0, 0, 2043, 2064, 1730, 1818, 0, 0, 1833, 0, 0, 2605, 2650, 2103, 1815, 1814, 0, 0, 1834, 0, 0, 2409, 2091, 2620, 1817, 1816, 0, 0, 0, 0, 0, 2081, 2028, 2393, 2383, 2071], 1729), b("Boreal wood", [2503, 2745, 2509, 0, 0, 0, 2564, 2558, 2505, 2566, 2507, 2746, 2510, 0, 0, 2560, 2556, 2555, 2561, 2557, 0, 2747, 2511, 0, 0, 858, 2563, 2559, 673, 677, 0, 0, 0, 0, 0, 2554, 2552, 2562,
            2565, 2553
        ], 2503), b("Palm wood", [2504, 2517, 2512, 0, 0, 2521, 2530, 2525, 2506, 2518, 2508, 2516, 2513, 0, 0, 2601, 2523, 2522, 2528, 2524, 0, 2515, 2514, 0, 0, 2527, 2533, 2526, 2534, 2532, 0, 0, 0, 0, 0, 2519, 2536, 2529, 2531, 2520], 2504)], 9), a("Organic", [b("Cactus", [276, 881, 894, 0, 0, 0, 2032, 2055, 750, 2744, 750, 882, 895, 0, 0, 2592, 2045, 2092, 816, 807, 0, 0, 896, 0, 0, 2408, 2082, 2616, 812, 2743, 0, 0, 0, 0, 0, 2072, 2020, 2392, 2382, 2066], 276), b("Pumpkin", [1725, 0, 1731, 0, 0, 0, 2641, 2656, 1726, 1796, 1828, 0, 1732, 0, 0, 2603, 2054, 2668, 1793, 1792, 1787, 0, 1733, 0, 0, 2415, 2643,
            2619, 1795, 1794, 0, 0, 0, 0, 0, 2661, 2670, 2637, 2671, 2669
        ], 1725), b("Mushroom", [183, 0, 0, 0, 0, 2539, 2546, 2543, 764, 2549, 194, 0, 0, 0, 0, 2599, 2542, 2541, 818, 810, 0, 0, 0, 0, 0, 2413, 2547, 2544, 814, 2550, 0, 0, 0, 0, 0, 2537, 2540, 2545, 2548, 2538], 183), b("Bone", [766, 1320, 151, 0, 0, 0, 2148, 2144, 768, 634, 154, 1166, 152, 0, 1376, 2591, 347, 2152, 820, 808, 932, 0, 153, 0, 1377, 2407, 2134, 2615, 827, 811, 2192, 0, 959, 0, 0, 2128, 2138, 2391, 2381, 2140], 766), b("Honey", [1125, 0, 0, 0, 0, 0, 2035, 2058, 0, 2630, 1127, 0, 0, 2257, 0, 2240, 2648, 2095, 1711, 1707, 1128, 0, 0, 0, 0, 2411, 2129, 2249,
            1717, 2251, 2204, 0, 0, 0, 0, 2124, 2023, 2395, 2255, 1721
        ], 1125), b("Slime", [762, 0, 0, 0, 0, 0, 2579, 2573, 769, 2581, 767, 0, 0, 0, 0, 2575, 2571, 2570, 2576, 2572, 0, 0, 0, 0, 0, 2582, 2578, 2574, 815, 2583, 0, 0, 0, 0, 0, 2567, 2569, 2577, 2580, 2568], 762), b("Flesh", [763, 0, 0, 0, 0, 0, 2034, 2057, 770, 0, 0, 0, 0, 0, 0, 2598, 2047, 2094, 817, 809, 2193, 0, 0, 0, 0, 2634, 2084, 2617, 828, 813, 0, 0, 0, 0, 0, 2074, 2022, 2640, 2246, 2067], 763)], 276)], 21));
        d.d0.push(a("Tiles", [b("Natural", [3, 2, 0, 747, 276, 0, 1725, 767, 762, 1591, 26, 30, 745, 746, 750, 764, 1726, 0, 769, 1592, 621, 9, 620, 619, 911, 1729,
            832, 1727, 765, 751, 624, 93, 623, 622, 927, 1730, 1723, 1728, 825, 752
        ], 2), b("Bricks", [129, 131, 883, 607, 412, 609, 662, 0, 0, 413, 130, 132, 884, 608, 417, 610, 663, 0, 0, 418, 145, 143, 141, 717, 718, 719, 415, 416, 0, 577, 146, 144, 142, 720, 721, 722, 420, 421, 0, 606], 131), b("Red & Blue dungeons", [0, 0, 1384, 135, 134, 0, 0, 1385, 140, 139, 0, 0, 1378, 1411, 1396, 0, 0, 1380, 1413, 1402, 0, 0, 1379, 1398, 1397, 0, 0, 1381, 1404, 1403, 0, 1414, 1470, 1408, 1405, 0, 1416, 1472, 1410, 1407], 139), b("Green & gothic dungeons", [0, 0, 1386, 138, 137, 0, 0, 0, 0, 0, 0, 0, 1382, 1412, 1399, 0, 0, 0, 0, 1509,
            0, 0, 1383, 1401, 1400, 0, 0, 0, 1511, 1510, 0, 1415, 1471, 1409, 1406, 0, 1512, 0, 0, 0
        ], 137), b("Underworld", [0, 0, 214, 0, 0, 0, 0, 1457, 330, 192, 0, 0, 0, 0, 0, 0, 0, 0, 1458, 1459, 0, 0, 0, 0, 0, 0, 0, 0, 1461, 1460, 0, 0, 0, 0, 0, 0, 1463, 1473, 1462, 0], 192), b("Hive & Lihzahrd", [0, 0, 1124, 1127, 1125, 0, 1148, 1146, 1102, 1101, 0, 0, 1126, 1711, 1707, 0, 1149, 1147, 1137, 1143, 0, 0, 1129, 0, 1717, 0, 1151, 0, 1145, 1144, 0, 0, 1721, 0, 0, 0, 1152, 1153, 1154, 1142], 1125)], 2));
        d.d0.push(a("Decorative", [b("Bookcases", [354, 1414, 1415, 1416, 1463, 1512, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027,
            2028, 2029, 2030, 2031, 2135, 2136, 2137, 2138, 2233, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
        ], 354), b("Chairs", [34, 628, 629, 630, 806, 807, 808, 809, 810, 826, 915, 1143, 1396, 1399, 1402, 1459, 1509, 1703, 1704, 1707, 1708, 1792, 1814, 1925, 2228, 2288, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 34), b("Tables", [32, 638, 639, 640, 827, 828, 829, 830, 917, 1144, 1397, 1400, 1403, 1460, 1510, 1713, 1714, 1716, 1717, 1718, 1794, 1816, 1926, 2248, 2259, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 32), b("Beds", [224, 644, 645, 646, 920, 1470, 1471, 1472, 1473, 1719, 1720, 1721, 1722, 2066, 2067, 2068, 2069, 2070,
            2071, 2139, 2140, 2231, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
        ], 224), b("Candles", [105, 148, 713, 1405, 1406, 1407, 2045, 2046, 2047, 2048, 2049, 2050, 2051, 2052, 2053, 2054, 2153, 2154, 2155, 2227, 2236, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 105), b("Chandeliers", [106, 107, 108, 710, 711, 712, 2055, 2056, 2057, 2058, 2059, 2060, 2061, 2062, 2063, 2064, 2065, 2141, 2142, 2143, 2144, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 108), b("Lamps", [341, 1394, 2082, 2083, 2084, 2085, 2086, 2087, 2088, 2089, 2090, 2091, 2129, 2130, 2131, 2132, 2133, 2134, 2225, 342, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
        ], 341), b("Torches", [8, 428, 1245, 432, 429, 427, 430, 431, 0, 0, 342, 0, 1333, 0, 523, 974, 433, 2274, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 8), b("Lanterns", [136, 344, 347, 1390, 1391, 1392, 1393, 1808, 1859, 2032, 2033, 2034, 2035, 2036, 2037, 2038, 2039, 2040, 2041, 2042, 2043, 2145, 2146, 2147, 2148, 2224, 2226, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 136), b("Paintings 1", [1372, 1373, 1374, 1375, 1419, 1420, 1421, 1422, 1423, 1424, 1425, 1426, 1427, 1428, 1433, 1434, 1435, 1436, 1437, 1438, 1439, 1440, 1441, 1442, 1443, 1476, 1477, 1478, 1479, 1480,
            1481, 1482, 1483, 1484, 1485, 1486, 1487, 1488, 1489, 1490
        ], 1427), b("Paintings 2", [1491, 1492, 1493, 1494, 1495, 1496, 1497, 1498, 1499, 1500, 1501, 1502, 1538, 1539, 1540, 1541, 1542, 1573, 1574, 1575, 1576, 1577, 1846, 1847, 1848, 1849, 1850, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 1496)], 354));
        d.d0.push(b("Pets", [669, 753, 994, 1169, 1170, 1171, 1172, 1180, 1181, 1182, 1242, 1311, 1312, 1798, 1799, 1810, 1837, 1927, 1959, 2338, 2364, 2420, 603, 2587, 3060, 0, 0, 0, 0, 0, 115, 3062, 1183, 425, 3043, 3577, 0, 0, 0, 0], 603));
        d.d0.push(c("Mounts*", 2430, function(a) {
            a = a.c7;
            return 0 <= a.indexOf("summons") &&
                (0 <= a.indexOf("rideable") || 0 <= a.indexOf("mount"))
        }));
        d.d0.push(e = c("Potions (regeneration)*", 499, function(a) {
            a = a.jR;
            return J.kg(a, "potion") && (0 <= a.indexOf("regeneration") || 0 <= a.indexOf("healing") || 0 <= a.indexOf("mana") || 0 <= a.indexOf("restoration"))
        }));
        d.d0.push(c("Potions (effects)*", 296, function(a) {
            var b = a.jR;
            a = a.id;
            return 678 != a && J.kg(b, "potion") && 0 > w.indexOf(e.d0, a, 0)
        }));
        d.d0.push(b("Events", [560, 1307, 557, 0, 0, 0, 0, 0, 0, 2767, 1133, 70, 556, 0, 0, 0, 0, 1844, 0, 1315, 0, 43, 544, 0, 0, 0, 0, 1958, 0, 602, 0, 1331, 267, 0,
            0, 0, 0, 3601, 0, 361
        ], 43));
        d.d0.push(b("Quest fish", [2475, 2476, 2450, 2477, 2478, 2451, 2479, 2480, 2452, 2453, 2481, 2454, 2482, 2483, 2455, 2456, 2457, 2458, 2459, 2460, 2484, 2472, 2461, 2462, 2463, 2485, 2464, 2465, 2486, 2466, 2467, 2468, 2487, 2469, 2488, 2470, 2471, 2473, 2474, 0], 2487));
        d.d0.push(a("Categories", [a("Weapons", [c("Melee damage", -8, function(a) {
                return 0 <= a.kl.indexOf("d")
            }), c("Ranged damage", -12, function(a) {
                return 0 <= a.kl.indexOf("r")
            }), c("Magic damage", 113, function(a) {
                return 0 <= a.kl.indexOf("m")
            }), c("Summon damage", 1309,
                function(a) {
                    return 0 <= a.kl.indexOf("s")
                })], 204), a("Equipable", [c("Armor", 81, function(a) {
                    a = a.kl;
                    return !(0 <= a.indexOf("v")) && (0 <= a.indexOf("4") || 0 <= a.indexOf("5") || 0 <= a.indexOf("6"))
                }), c("Accessories", 158, function(a) {
                    a = a.kl;
                    return 0 <= a.indexOf("a") && !(0 <= a.indexOf("v"))
                }), c("Vanity", 239, function(a) {
                    return 0 <= a.kl.indexOf("v")
                }), c("Head slot", 92, function(a) {
                    return 0 <= a.kl.indexOf("4")
                }), c("Body slot", 83, function(a) {
                    return 0 <= a.kl.indexOf("5")
                }), c("Leg slot", 79, function(a) {
                    return 0 <= a.kl.indexOf("6")
                }),
                c("Dyes", 1009, function(a) {
                    return J.kg(a.name, "Dye")
                }), c("Wings", 823, function(a) {
                    return 0 <= a.c7.indexOf("allows flight")
                })
            ], 90), a("Tools", [c("Pickaxes", -13, function(a) {
                return 0 <= a.pF.indexOf("tp=")
            }), c("Axes", -16, function(a) {
                return 0 <= a.pF.indexOf("tx=")
            }), c("Hammers", -17, function(a) {
                return 0 <= a.pF.indexOf("th=")
            }), c("Fishing poles", 2295, function(a) {
                return 0 <= a.pF.indexOf("tf=")
            })], 1), c("Placeable", 2, function(a) {
                return 0 <= a.kl.indexOf("t")
            }), c("Walls", 30, function(a) {
                return 0 <= a.kl.indexOf("w")
            })],
            531));
        d.d0.push(function() {
            var c = [],
                d = a("Items by ID", c, 149),
                e, g, A;
            c.push(a("(< 0)", [], -13));
            for (g = 1; g < I.fv;) c.push(a(g + "-" + (g + 399), [], g)), g += 400;
            for (g = 1; g < I.fv;) {
                e = [];
                for (A = -1; 40 > ++A;) g + A < I.fv && e.push(g + A);
                c[1 + (g / 400 | 0)].d0.push(b("" + g + "-" + (g + 39), e, g));
                g += 40
            }
            for (g = 1; g < -I.fb;) {
                e = [];
                for (A = -1; 40 > ++A;) g + A < -I.fb && e.push(-(g + A));
                c[0].d0.push(b("" + g + "-" + (g + 39), e, -g));
                g += 40
            }
            return d
        }());
        return d
    };
    var H = function(a, b, c) {
        null == b && (b = !1);
        this.color = -1;
        this.index = a;
        this.fixed = b;
        this.l4 = null != c ? c : "#" + a;
        O.call(this);
        this.gK = -1;
        this.oX = new Q;
        this.oX.x = 38;
        this.oX.y = 42;
        this.oX.set_m2(2);
        this.oX.set_fh(2);
        this.oX.set_text("0");
        this.add(this.oX)
    };
    g["app.SlotNode"] = H;
    H.be = !0;
    H.pc = O;
    H.prototype = m(O.prototype, {
        aY: function(a, b) {
            var c = null;
            a -= this.x;
            b -= this.y;
            null == c && 0 <= a && 0 <= b && 40 > a && 40 > b && (c = this);
            return c
        },
        lI: function() {
            var a = H.q1;
            null != a ? (H.q1 = null, a.gT(this)) : x.dN(this.qM.item) || (this.cj._i ? this.set_count(this.qM.item.iL) : this.cj.au && 1 < this.get_count() ? (a = R.nV, a.copy(this), a.set_count(this.get_count() >> 1), this.set_count(this.get_count() -
                a.get_count()), H.q1 = a) : H.q1 = this);
            R.set_item(this)
        },
        eK: function(a) {
            this.fixed && this.set_count(.17 > a ? this.get_count() : .27 > a ? 1 : 1.07 > a ? Math.floor((a - .27) / .08) + 1 : 2.07 > a ? Math.floor((a - 1.07) / .04) + 10 : 3.57 > a ? Math.floor((a - 2.07) / .02) + 25 : function(b) {
                b = Math.floor((a - 3.57) / .01) + 100;
                return 999 > b ? b : 999
            }(this))
        },
        pl: function(a) {
            var b = this.get_count(),
                b = b + a;
            1 > b && (b = 1);
            this.set_count(b)
        },
        c4: function(a, b, c) {
            var d = this.qM.item;
            null == d || 0 == d.id && "" == d.name || this.cj.jP(d.oT, d.eJ, d.dA, 40, 40, a, b, c)
        },
        dK: function(a, b) {
            H.iv ==
                this && this.cj.rect(a + this.x + 1, b + this.y + 1, 38, 38, this.fixed ? 14467228 : 10272988);
            if (!this.fixed) {
                var c = this.qM.item;
                if (null != c) {
                    var d = ha.get_aX().eH;
                    0 > w.indexOf(d, c.id, 0) || this.cj.pr(a + this.x + 1, b + this.y + 1, 38, 38, 13693183, .8 + .2 * Math.sin(5 * this.cj.time))
                }
            }
            var c = !0,
                e;
            this.fixed || (d = this.cj._w.version, e = this.index, 118 <= e && 138 > e || 158 <= e && 178 > e ? c = 58 <= d : 13 <= e && 18 > e || 23 <= e && 28 > e ? c = 81 <= d : 8 <= e && 10 > e || 18 <= e && 20 > e || 28 <= e && 30 > e ? c = 145 <= d && this.cj._w.n$ : 88 <= e && 93 > e || 93 <= e && 98 > e ? c = 145 <= d : 178 <= e && 218 > e && (c = 184 <= d));
            d =
                this.fixed ? 10518624 : -1 != this.color ? this.color : 6324384;
            this.cj.pr(a + this.x + 2, b + this.y + 2, 36, 36, d, c ? 1 : .5);
            c = this == H.q1 ? .7 : 1;
            null != this.qM.item && this.qM.item.id > H.hv && (c *= .5);
            this.c4(this.x + a, this.y + b, c);
            !x.$s(this.qM.item) || this.fixed && 1 >= this.get_count() || (d = this.get_count(), this.gK != d && this.oX.set_text(x.count(this.gK = d)), O.prototype.dK.call(this, a, b))
        },
        set_id: function(a) {
            this.qM.item != a && (this.qM.item = a, H.iv == this && R.get_aX().q5(a));
            return a
        },
        get_count: function() {
            return this.qM.count
        },
        set_count: function(a) {
            this.qM.count !=
                a && (this.qM.count = a, H.iv == this && R.get_aX().oX.set_value(a));
            return a
        },
        get_prefix: function() {
            return this.qM.prefix
        },
        set_prefix: function(a) {
            this.qM.prefix != a && (this.qM.prefix = a, H.iv == this && R.get_aX().set_prefix(a));
            return a
        },
        clear: function() {
            this.set_id(x.qo(0));
            this.set_count(this.set_prefix(0))
        },
        copy: function(a) {
            this.set_id(a.qM.item);
            this.set_count(a.get_count());
            this.set_prefix(a.get_prefix())
        },
        dj: function(a) {
            var b;
            b = this.qM.item;
            this.set_id(a.qM.item);
            a.set_id(b);
            b = this.get_count();
            this.set_count(a.get_count());
            a.set_count(b);
            b = this.get_prefix();
            this.set_prefix(a.get_prefix());
            a.set_prefix(b)
        },
        gT: function(a) {
            var b = R.nV;
            this != a && (this.fixed || a.fixed ? this.fixed && !a.fixed ? x.dN(a.qM.item) ? a.copy(this) : a.qM.item == this.qM.item && a.get_prefix() == this.get_prefix() ? (a.set_count(a.get_count() + this.get_count()), this.clear()) : (this != b ? (b.copy(a), a.copy(this)) : b.dj(a), b.lI()) : !this.fixed && a.fixed && this.clear() : x.dN(a.qM.item) ? a.dj(this) : (a.qM.item == this.qM.item && a.get_prefix() == this.get_prefix() ? a.set_count(a.get_count() +
                this.get_count()) : (b.copy(a), a.copy(this), b.lI()), this.clear()))
        },
        set_qM: function(a) {
            this.qM != a && (this.qM = a);
            return a
        },
        ik: H
    });
    var z = function() {
        this.style = 1;
        this.title = "???";
        O.call(this)
    };
    g["app.TabBase"] = z;
    z.be = !0;
    z.pc = O;
    z.prototype = m(O.prototype, {
        start: function() {},
        end: function() {},
        da: function(a) {},
        es: function(a, b, c, d, e, f) {
            null == f && (f = 0);
            null == e && (e = 0);
            null == d && (d = 1);
            var h = new Q;
            h.x = a;
            h.y = b;
            h.set_m2(e);
            h.set_fh(f);
            h.set_style(d);
            h.set_text(c);
            this.add(h);
            return h
        },
        r_: function(a, b, c, d, e) {
            null == d &&
                (d = 1);
            var f = new W;
            f.x = a;
            f.y = b;
            f.set_style(d);
            f.set_text(c);
            f.ox = e;
            this.add(f);
            return f
        },
        kb: function(a, b, c, d, e) {
            null == d && (d = 1);
            var f = new kb;
            f.x = a;
            f.y = b;
            f.set_style(d);
            f.set_format(c);
            f.ef = e;
            this.add(f);
            return f
        },
        p7: function(a, b, c, d, e) {
            null == d && (d = 1);
            null == c && (c = "$");
            var f = new Ya;
            f.x = a;
            f.y = b;
            f.set_format(c);
            f.set_style(d);
            f.pM = e;
            this.add(f);
            return f
        },
        oS: function(a, b, c, d, e) {
            null == d && (d = 1);
            null == c && (c = "$");
            var f = new Ha;
            f.x = a;
            f.y = b;
            f.set_format(c);
            f.set_style(d);
            f.pM = e;
            this.add(f);
            return f
        },
        ev: function(a,
            b, c, d) {
            null == c && (c = 1);
            var e = new lb;
            e.x = a;
            e.y = b;
            e.set_format("#$");
            e.set_style(c);
            e.pM = d;
            this.add(e);
            return e
        },
        ik: z
    });
    var Ia = function() {
        z.call(this);
        this.aM = []
    };
    g["app.TabBuffs"] = Ia;
    Ia.be = !0;
    Ia.pc = z;
    Ia.prototype = m(z.prototype, {
        a_: function(a, b, c, d) {
            null == d && (d = !1);
            c = new Z(c, d);
            c.x = a;
            c.y = b;
            this.aM.push(c);
            this.add(c);
            return c
        },
        da: function(a) {
            var b;
            for (b = -1; ++b < this.aM.length;) 0 <= this.aM[b].qM && this.aM[b].set_q7(a.aM[b])
        },
        ik: Ia
    });
    var R = function() {
        var a = this;
        z.call(this);
        R.bS = this;
        var b, c = this.cj.font.size,
            d;
        R.nV = new H(-1, !0, "temp");
        R.nV.set_qM(new ma);
        this.kH = this.es(0, 0, "Name: ", 4);
        this.j9 = this.es(this.kH.width, this.kH.y, "", 1);
        this.eL = this.es(0, c, "Index: ", 4);
        this.o3 = this.p7(this.eL.width, c);
        this.o3.pM = function(a) {
            H.iv.set_id(x.qo(a))
        };
        this.ib = this.es(0, c, "Code: ", 4);
        this._8 = this.oS(this.ib.width, c, '"$"', 1);
        this._8.pM = function(a) {
            H.iv.set_id(x.fi(a))
        };
        this.cj.o8 ? (this.remove(this.eL), this.remove(this.o3)) : (this.remove(this.ib), this.remove(this._8));
        this.iF = this.es(0, 2 * c, "Count: ", 4);
        this.oX = this.p7(this.iF.width,
            2 * c);
        this.oX.pM = function(a) {
            H.iv.set_count(a)
        };
        this.dU = this.es(0, 3 * c, "Prefix: ", 4);
        this.os = this.p7(this.dU.width, 3 * c);
        this.os.pM = function(b) {
            a.set_prefix(b)
        };
        this.os.ef = function(b) {
            a.$v.x = a.os.x + a.os.width
        };
        this.$v = this.r_(this.os.x + this.os.width, 3 * c, "?");
        this.ba = this.es(20, 4 * c, "");
        this.dI = [
            [{
                name: "Best",
                d0: [60, 59, 82, 83, 81]
            }, {
                name: "Damage",
                d0: [20, 57, 59, 5, 81, 25, 82, 35, 83]
            }, {
                name: "Critical",
                d0: [61, 60, 59, 44, 46, 3, 81, 16, 82, 83]
            }],
            [{
                name: "Accessory",
                d0: [62, 63, 67, 69, 70, 73, 74, 77, 78, 66]
            }, {
                name: "Accessory+",
                d0: [64, 65, 68, 71, 72, 75, 76, 79, 80]
            }, {
                name: "Universal+",
                d0: [36, 37, 38, 53, 54, 55, 57, 59, 61]
            }, {
                name: "Common+",
                d0: [42, 43, 44, 45, 46, 51]
            }, {
                name: "Melee+",
                d0: [1, 2, 3, 4, 5, 6, 12, 14, 15, 81]
            }, {
                name: "Ranged+",
                d0: [16, 17, 18, 19, 20, 21, 25, 58, 82]
            }, {
                name: "Magic+",
                d0: [26, 27, 28, 32, 33, 34, 35, 82, 83]
            }],
            [{
                name: "Universal-",
                d0: [39, 40, 41, 56]
            }, {
                name: "Common-",
                d0: [47, 48, 49, 50]
            }, {
                name: "Melee-",
                d0: [7, 8, 9, 10, 11, 13]
            }, {
                name: "Ranged-",
                d0: [22, 23, 24]
            }, {
                name: "Magic-",
                d0: [29, 30, 31]
            }]
        ];
        this.qG = this.dI[0];
        this.kJ = [];
        d = 10;
        for (b = -1; 3 > ++b;) this.kJ.push(this.r_(d,
            5 * c, 1 > b ? "Library" : 2 > b ? "Positive" : "Negative", 1 > b ? 6 : 2 > b ? 4 : 2, this.fV(b))), d += this.kJ[b].width + 8;
        this.lY = [];
        this.b4 = [];
        this.mn = 0;
        this.kJ[0].click();
        R.set_item(R.nV)
    };
    g["app.TabEdit"] = R;
    R.be = !0;
    R.get_aX = function() {
        null == R.bS && new R;
        return R.bS
    };
    R.set_item = function(a) {
        if (H.iv != a) {
            H.iv = a;
            var b = R.get_aX();
            b.q5(a.qM.item);
            b.oX.set_value(a.get_count());
            b.os.set_value(a.get_prefix());
            b._E(a.get_prefix());
            b.mG(b.mn)
        }
        return a
    };
    R.pc = z;
    R.prototype = m(z.prototype, {
        update: function(a) {
            z.prototype.update.call(this, a);
            a = -1;
            var b = this.lY.length,
                c = "";
            if (this.$v.qv) a = H.iv.get_prefix(), a = x.qG.eX[a], c = null != a ? a.text : "";
            else
                for (; ++a < b;)
                    if (this.lY[a].qv) {
                        0 > a || a >= this.qG[this.mn].d0.length ? c = "" : (a = x.qG.eX[this.qG[this.mn].d0[a]], c = null != a ? a.text : "");
                        break
                    } this.ba.set_text(c)
        },
        fV: function(a) {
            var b = this;
            return function(c) {
                b.qG = b.dI[a];
                b.mn = 0;
                for (c = -1; ++c < b.qG.length;) b.b4.length <= c && b.b4.push(b.r_(0, b.cj.font.lineHeight * (6 + c), "", 1, b.eB(c))), b.b4[c].set_text(b.qG[c].name);
                for (; c < b.b4.length;) b.b4[c++].set_text("");
                b.mG(0)
            }
        },
        _E: function(a) {
            a = x.qG.eX[a];
            null != a ? (this.$v.set_text(' "' + a.name + '"'), a = a.ir, this.$v.set_style(-1 > a ? 8 : 0 > a ? 6 : 1 > a ? 3 : 2 > a ? 4 : 5)) : (this.$v.set_text('"?"'), this.$v.set_style(1))
        },
        q5: function(a) {
            null == a || 0 == a.id && "" == a.name ? (this.o3.set_value(0), this.j9.set_text(""), this._8.set_value("")) : (this.o3.set_value(a.id), this.j9.set_text(a.name), this._8.set_value(a.code));
            return a
        },
        set_prefix: function(a) {
            H.iv.get_prefix() != a && (H.iv.set_prefix(a), this.os.set_value(a), this._E(a), this.mG(this.mn));
            return a
        },
        eI: function(a) {
            var b =
                this;
            return function(c) {
                c = b.qG[b.mn].d0;
                a < c.length && b.set_prefix(c[a])
            }
        },
        eB: function(a) {
            var b = this;
            return function(c) {
                b.mG(a)
            }
        },
        mG: function(a) {
            var b, c = this.qG[a].d0,
                d;
            this.mn = a;
            b = -1;
            for (d = this.b4.length; ++b < d;) this.b4[b].set_style(b == a ? 3 : 1);
            b = -1;
            for (d = c.length; ++b < d;) null == this.lY[b] && (this.lY[b] = this.r_(100, (b + 6) * this.cj.font.lineHeight, "", 1, this.eI(b))), this.lY[b].set_text(x.qG.eX[c[b]].name), this.lY[b].set_style(null != H.iv && H.iv.get_prefix() == c[b] ? 3 : 1);
            for (d = this.lY.length; b < d;) this.lY[b++].set_text("")
        },
        ik: R
    });
    var K = function() {
        K.aX = this;
        var a;
        z.call(this);
        this.title = "Buffs";
        this._h = new Q;
        this._h.x = 16;
        this._h.y = -8;
        this._h.set_style(4);
        this.aq = new Q;
        this.aq.x = this._h.x;
        this.aq.y = this._h.y + this._h.font.lineHeight;
        this.add(this.iv = new Ia);
        this.iv.x = this.iv.y = 2;
        for (a = -1; 22 > ++a;) this.iv.a_(a % 11 * 36, 42 * (a / 11 | 0), a);
        this.iv.da(this.cj._w);
        this.add(this.lA = new mb);
        this.lA.x = 400;
        this.add(this.nt = new nb);
        this.nt.y = 96;
        K.cC = new Z(-1, !0);
        K.q7 = this.iv.aM[0];
        this.fs = this.es(4, 216, "Current buffs: ", 8);
        this.cM = this.r_(function(a) {
            a =
                a.fs;
            return a.x + a.width
        }(this), this.fs.y, "Save", 1, u(this, this.$L));
        this._S = this.r_(function(a) {
            a = a.cM;
            return a.x + a.width
        }(this) + 8, this.fs.y, "Load", 3, u(this, this.p8));
        this.p = this.r_(function(a) {
            a = a._S;
            return a.x + a.width
        }(this) + 8, this.fs.y, "Append", 4, u(this, this._Q));
        null == K.ae && (K.ae = new Ja, K.pQ = [new Aa("Terrasavr buff files (*.tsb)", "*.tsb"), new Aa("All files (*.*)", "*.*")], K.ae.addEventListener("select", function(a) {
            K.ae.load()
        }), K.ae.addEventListener("complete", function(a) {
            K.du(a.get_target().data)
        }))
    };
    g["app.TabEffects"] = K;
    K.be = !0;
    K.pc = z;
    K.prototype = m(z.prototype, {
        $L: function(a) {
            a = new ra;
            var b = this.cj._w.aM,
                c, d = -1,
                e = b.length;
            a.ku("/terrasavr/b");
            for (a.$T(I.VERSION); ++d < e;) c = b[d], 0 != c.id && (a.lE(c.id), a.lE(c.time | 0));
            ga.aX.kT.save(a, "buffs.tsb")
        },
        cJ: function(a) {
            for (var b = 0, c = this.cj._w.aM; b < c.length;) {
                var d = c[b];
                ++b;
                d.reset()
            }
            this._z(a)
        },
        p8: function(a) {
            K.du = u(this, this.cJ);
            K.ae.ep(K.pQ)
        },
        _z: function(a) {
            var b, c, d, e, f = this.iv.aM,
                h = f.length;
            a.position = 0;
            if (12 > a.length || "/terrasavr/b" != a.jt(12)) ga.aX.print("Specified file isn't a Terrasavr buff file.",
                3);
            else
                for (a.bN(), c = b = -1; ++b < h && 4 <= a.length - a.position;) try {
                    if (d = a.bN(), e = a.bN(), 0 != d) {
                        for (; ++c < h && 0 != f[c].get_id(););
                        if (c >= h) break;
                        f[c].set_id(d);
                        f[c].set_time(e)
                    }
                } catch (t) {
                    t instanceof G && (t = t.gY);
                    break
                }
        },
        _Q: function(a) {
            K.du = u(this, this._z);
            K.ae.ep(K.pQ)
        },
        da: function(a) {
            this.iv.da(a);
            this.lA.da(a);
            this.nt.da(a)
        },
        dK: function(a, b) {
            z.prototype.dK.call(this, a, b);
            null != Z.q1 && Z.q1.gf(this.cj.eO, this.cj.qQ + 4, .6);
            if (null != this.cj.jM && E.jp(this.cj.jM, Z)) {
                var c = this.cj.jM,
                    d = c.get_id(),
                    e = c.get_time();
                if (0 !=
                    d) {
                    var f;
                    f = N.gZ(d) + (" (#" + d + ")");
                    d = N.gA(d);
                    c.fixed || (d += "\n" + e + "s duration");
                    c.get_id() > Z.hv && (d += "\n(incompatible)");
                    this._h.set_text(f);
                    this.aq.set_text(d);
                    this.cj.pr(this.cj.eO + 14, this.cj.qQ - 10, this.cj.en(this._h.width, this.aq.width) + 5, (0 < f.length ? this.aq.height : 0) + (0 < d.length ? this._h.height : 0) + 3, 0, .6);
                    this._h.dK(this.cj.eO, this.cj.qQ);
                    this.aq.dK(this.cj.eO, this.cj.qQ)
                }
            }
        },
        ik: K
    });
    var mb = function() {
        this.cr = K.aX;
        z.call(this);
        this.kH = this.es(0, 0, "Name: ", 4);
        this.j9 = this.es(function(a) {
            a = a.kH;
            return a.x +
                a.width
        }(this), 0, "");
        this.eL = this.es(0, function(a) {
            a = a.kH;
            return a.y + a.height
        }(this), "Index: ", 4);
        this.o3 = this.p7(function(a) {
            a = a.eL;
            return a.x + a.width
        }(this), this.eL.y, "$", 1, function(a) {
            K.q7.set_id(a)
        });
        this.og = this.es(0, function(a) {
            a = a.eL;
            return a.y + a.height
        }(this), "Duration: ", 4);
        this.om = this.p7(function(a) {
            a = a.og;
            return a.x + a.width
        }(this), this.og.y, "$s", 1, function(a) {
            K.q7.set_time(a)
        });
        var a, b = null;
        this.$e = [];
        a = this.og;
        this.no = a.y + a.height;
        this.hP("Utility", 7, [1, 4, 8, 9, 10, 11, 12, 15, 18, 19, 27, 34,
            57, 3, 63, 101, 102
        ]);
        this.hP("Offensive", 3, [7, 13, 86, 16, 25, 17, 71, 73, 74, 75, 76, 77, 78, 79, 93, 98, 99, 100]);
        this.hP("Defensive", 4, [5, 14, 26, 43, 48, 58, 59, 62, 87, 89, 95, 96, 97]);
        this.hP("Special", 5, [3, 6, 26, 28, 29, 60, 64, 49, 83, 90]);
        this.hP("Pets", 6, b = [40, 41, 42, 45, 50, 51, 52, 53, 54, 55, 56, 61, 65, 66, 81, 82, 84, 85, 91, 92]);
        this.kh = new Ba;
        for (a = b.length; 0 <= --a;) this.kh.eX[b[a]] = !0;
        this.hP("Negative", 2, [21, 20, 22, 23, 24, 30, 31, 32, 33, 35, 36, 37, 38, 44, 46, 47, 67, 68, 69, 70, 72, 80, 86, 88, 94, 103]);
        for (a = 0; ++a < N.p4;) 1 == a % 33 && (b = [], this.hP("Index (" +
            a + "-" + (a + 32) + ")", 1, b)), b.push(a)
    };
    g["app.BuffSide"] = mb;
    mb.be = !0;
    mb.pc = z;
    mb.prototype = m(z.prototype, {
        hP: function(a, b, c) {
            var d = this;
            a = this.r_(8, this.no, a, b, function(a) {
                a = d.cr.nt.aM;
                var b, h = a.length,
                    t = c.length;
                for (b = -1; ++b < h;) a[b].set_id(b < t ? c[b] : 0), a[b].set_time(d.kh.eX.hasOwnProperty(c[b]) ? 18E3 : 60)
            });
            this.no = a.y + a.height
        },
        dK: function(a, b) {
            var c = K.q7.get_id();
            this.j9.set_text(N.gZ(c));
            this.o3.set_value(c);
            this.om.set_value(K.q7.get_time());
            z.prototype.dK.call(this, a, b)
        },
        da: function(a) {},
        ik: mb
    });
    var nb =
        function() {
            var a;
            Ia.call(this);
            for (a = -1; 33 > ++a;) this.a_(a % 11 * 36, 42 * (a / 11 | 0), -1, !0)
        };
    g["app.BuffLib"] = nb;
    nb.be = !0;
    nb.pc = Ia;
    nb.prototype = m(Ia.prototype, {
        ik: nb
    });
    var na = function() {
        z.call(this);
        this.items = []
    };
    g["app.TabItems"] = na;
    na.be = !0;
    na.pc = z;
    na.prototype = m(z.prototype, {
        hH: function(a, b, c) {
            a = new H(a);
            a.x = b;
            a.y = c;
            this.add(a);
            this.items.push(a);
            return a
        },
        da: function(a) {
            for (var b = -1, c = this.items.length, d; ++b < c;) d = this.items[b], d.set_qM(a.items[d.index])
        },
        dK: function(a, b) {
            z.prototype.dK.call(this, a, b)
        },
        ik: na
    });
    var p = function(a, b, c) {
        na.call(this);
        null == p._h && function(a) {
            var b = !0;
            try {
                var c, h = window.document,
                    h = h[function(a) {
                        a = [3, 6, -6, -8, 11, 0, 6, 5];
                        for (var b = 0, c = ""; 8 > b;) c += da(a[b++] + 105);
                        return c
                    }(a)];
                c = h = h[function(a) {
                    a = "";
                    for (var b = 0, c; 4 > b;) c = b++, c = w.qg("iybi", c), a += da(c & -16 | (c & 15) + 10 * b + 5 & 15);
                    return a
                }(a)];
                var t, g;
                a = [-51, -62, -62, 12, -12, -1, -63, -10, -10, -62];
                for (var h = 0, A = ""; 10 > h;) A += da(a[h++] + 109);
                t = A;
                g = c.indexOf(t);
                if (0 > g) {
                    a = "";
                    for (var h = 0, ea; 27 > h;) {
                        var q = h++;
                        ea = w.qg("5 &vhekdrbmqh{knaf%fwlg#d`&", q);
                        a += da(ea & -16 | (ea & 15) + 10 * h + 11 & 15)
                    }
                    t = a;
                    g = c.indexOf(t)
                }
                if (0 > g) {
                    ea = "";
                    for (var q = 0, k; 43 > q;) {
                        var r = q++;
                        k = w.qg(";  d`nn`oebubtu`sbhf/h``hmfbqjt/d`n judij` ", r);
                        ea += da(k & -16 | (k & 15) + 16 * q + 15 & 15)
                    }
                    t = ea;
                    g = c.indexOf(t);
                    Pb.log(t + " : " + g)
                }
                b = 0 <= g && 8 > g
            } catch (y) {
                y instanceof G && (y = y.gY)
            }
            return b
        }(this) && (p._h = new Q, p._h.set_text("Item"), p._h.x = 16, p._h.y = -8, p._h.set_style(4), p.aq = new Q, p.aq.y = p._h.y + p._h.height, p.aq.x = p._h.x);
        this.title = c;
        for (c = -1; ++c < b;) this.hH(a + c, c % 10 * 40, 40 * (c / 10 | 0));
        null == p.l0 && p.cs();
        this.add(p.l0);
        for (c = -1; ++c < p.bE.length;) this.add(p.bE[c]);
        this.add(this.lq = new O);
        this.lq.y = 40 * Math.ceil(b / 10);
        this.lq.add(ia.get_aX());
        this._y()
    };
    g["app.TabInventory"] = p;
    p.be = !0;
    p.ks = function(a) {
        null != p.cQ && p.l0.remove(p.cQ);
        p.cQ = p.ca[a];
        for (var b = -1; ++b < p.bE.length;) p.bE[b].set_style(b == a ? 4 : 1);
        p.l0.add(p.cQ)
    };
    p.j5 = function(a) {
        return function(b) {
            p.ks(a)
        }
    };
    p.cs = function() {
        var a, b, c, d;
        p.l0 = new O;
        p.l0.x = 420;
        p.l0.y = 28;
        p.ca = [R.get_aX(), ha.get_aX()];
        p.bE = [];
        d = ["Edit", "Library"];
        b = d.length;
        a = -1;
        for (c = 410; ++a < b;) {
            var e =
                new W;
            e.x = c;
            e.y = 0;
            e.set_text(d[a]);
            e.set_text(d[a]);
            e.ox = p.j5(a);
            c += e.width + 8;
            p.bE.push(e)
        }
        p.bE[0].click()
    };
    p.pc = na;
    p.prototype = m(na.prototype, {
        _y: function() {
            if ("Search" != this.title) {
                var a, b = this.es(0, this.lq.y + 160, "", 8),
                    c = new Ra(this.title),
                    d = new S(this.title, !1),
                    e = new S(this.title, !0),
                    f = new ob;
                for (a = 0; a < this.items.length;) c.hH(this.items[a].index), d.hH(this.items[a].index), e.hH(this.items[a].index), f.hH(this.items[a].index), a++;
                c.y = d.y = e.y = f.y = b.y;
                d.x = b.x + b.width;
                this.add(d);
                c.x = d.x + d.width + 8;
                this.add(c);
                e.x = c.x + c.width + 8;
                this.add(e);
                f.x = e.x + e.width + 8;
                this.add(f);
                a = new pb;
                a.y = b.y;
                a.x = 400;
                this.add(a)
            }
        },
        dK: function(a, b) {
            na.prototype.dK.call(this, a, b);
            null != H.q1 && H.q1.c4(this.cj.eO, this.cj.qQ - 4, .5);
            if (null == this.cj.mp && null != this.cj.jM && E.jp(this.cj.jM, H)) {
                var c = this.cj.jM.qM,
                    d = c.item;
                if (null != d && (0 != d.id || "" != d.name)) {
                    var e = d.name;
                    if (0 != c.prefix) {
                        var f = x.qG.eX[c.prefix];
                        null != f && (e = f.name + " " + e)
                    }
                    e = this.cj.o8 ? e + (" (" + d.code + ")") : e + (" (#" + d.id + ")");
                    d = d.text;
                    c.item.id > H.hv && (d += "\n(incompatible)");
                    p._h.set_text(e);
                    p.aq.set_text(d);
                    this.cj.pr(this.cj.eO + 14, this.cj.qQ - 10, this.cj.en(p._h.width, p.aq.width) + 5, (0 < e.length ? p._h.height : 0) + (0 < d.length ? p.aq.height : 0) + 3, 0, .6);
                    p._h.dK(this.cj.eO, this.cj.qQ);
                    p.aq.dK(this.cj.eO, this.cj.qQ)
                }
            }
        },
        ik: p
    });
    var qb = function() {
        var a;
        p.call(this, 0, 0, "Equips");
        this.es(40, 100, "Item", 1, 2, 1);
        this.es(40, 140, "Social", 1, 2, 1);
        this.es(40, 180, "Dye", 1, 2, 1);
        this.es(40, 84, "Armor:", 1, 0, 2);
        this.es(160, 84, "Accessories:", 1, 0, 2);
        this.es(80, 36, "Coins", 1, 1, 0);
        this.es(320, 36, "Ammo", 1, 1, 0);
        for (a = -1; 9 > ++a;) this.hH(a,
            40 + 40 * a, 80);
        for (a = -1; 9 > ++a;) this.hH(10 + a, 40 + 40 * a, 120).color = 6332544;
        for (a = -1; 9 > ++a;) this.hH(20 + a, 40 + 40 * a, 160).color = 11104400;
        for (a = -1; 4 > ++a;) this.hH(80 + a, 40 * a, 0);
        for (a = -1; 4 > ++a;) this.hH(84 + a, 240 + 40 * a, 0)
    };
    g["app.TabEquips"] = qb;
    qb.be = !0;
    qb.pc = p;
    qb.prototype = m(p.prototype, {
        _y: function() {
            var a, b = null,
                c = null,
                d;
            this.lq.y = 200;
            d = this.lq.y + 160;
            var e = function(a, d) {
                for (; 0 < d--;) b.hH(a), c.hH(a++)
            };
            a = this.es(0, d, "", 4);
            b = new Ra(this.title, "equips");
            c = new S(this.title, !1, "equips");
            e(0, 3);
            e(3, 5);
            e(84, 4);
            b.y = c.y = d;
            c.x = a.x + a.width;
            b.x = c.x + c.width + 8;
            this.add(b);
            this.add(c);
            a = this.es(b.x + b.width + 20, d, "", 8);
            b = new Ra("Visual", "vanity");
            c = new S("Visual", !1, "vanity");
            e(10, 8);
            e(20, 8);
            b.y = c.y = d;
            c.x = a.x + a.width;
            b.x = c.x + c.width + 8;
            this.add(b);
            this.add(c)
        },
        ik: qb
    });
    var ha = function() {
        this.eH = [];
        z.call(this);
        var a;
        this.nt = Qb.ip();
        this.iL = [this.nt];
        this.hO = new Xa(0, "Search", []);
        this.l5 = [];
        this.ps = this.es(0, 0, "Search: ");
        this.cS = new Ha;
        this.cS.x = this.ps.width;
        this.cS.set_style(3);
        this.cS.set_format('"$"');
        this.add(this.cS);
        this.cS.ef = this.cS.pM = u(this, this.search);
        this.aO = [];
        this.qF = [];
        for (a = -1; 20 > ++a;) this.aO.push(this.r_(0, (a + 1) * this.cj.font.lineHeight, ".", 1, this.nH(a))), this.qF.push(0);
        this.qX(-1)
    };
    g["app.TabLibrary"] = ha;
    ha.be = !0;
    ha.get_aX = function() {
        null == ha.bS && (ha.bS = new ha);
        return ha.bS
    };
    ha.pc = z;
    ha.prototype = m(z.prototype, {
        search: function(a) {
            var b = this,
                c = function(a, c) {
                    var d;
                    null == b.hO.d0[a] ? (d = 0 < b.l5.length ? b.l5.pop() : new Qa(0, "", []), b.hO.d0.push(d)) : d = b.hO.d0[a];
                    d.name = c;
                    return d
                },
                d;
            for (d = this.eH.length; 0 < d;) this.eH.pop(),
                d--;
            var e = 0;
            if (0 < a.length) {
                var f = null;
                a.split(",");
                var e = x.list,
                    h, t;
                d = 0;
                for (var g = a.split(","); d < g.length;)
                    if (t = g[d], ++d, t = J.trim(t).toLowerCase(), !(2 > t.length))
                        if (h = w.qg(t, 0), 35 == h) {
                            t = t.substring(1);
                            var A = t.indexOf("-"),
                                k;
                            if (-1 != A) {
                                if (k = C.parseInt(t.substring(0, A)), null != k && (h = k, k = C.parseInt(t.substring(A + 1)), null != k))
                                    for (t = h; t <= k;) this.eH.push(t), t++
                            } else k = C.parseInt(t), null != k && this.eH.push(k)
                        } else {
                            46 == h && (t = t.substring(1));
                            k = t.split(" ");
                            for (t = k.length; 0 <= --t;) 0 == k[t].length && k.splice(t, 1);
                            var q;
                            if (46 == h)
                                for (h = 0; h < e.length;) {
                                    A = e[h];
                                    q = A.c7;
                                    for (t = k.length; 0 <= --t && !(0 > q.indexOf(k[t])););
                                    0 > t && b.eH.push(A.id);
                                    h++
                                } else
                                    for (h = 0; h < e.length;) {
                                        A = e[h];
                                        q = A.jR;
                                        for (t = k.length; 0 <= --t && !(0 > q.indexOf(k[t])););
                                        0 > t && b.eH.push(A.id);
                                        h++
                                    }
                        } d = this.eH.length;
                for (t = 0; t < this.eH.length;) 0 == t % 40 && (h = t / 40 | 0, f = t < d - 40 ? c(h, t + 1 + "-" + (t + 40)) : c(h, t + 1 + "-" + d)), f.d0[t % 40] = this.eH[t], t++;
                e = d;
                0 == d && (null == this.hO.d0[0] ? (f = 0 < this.l5.length ? this.l5.pop() : new Qa(0, "", []), this.hO.d0.push(f)) : f = this.hO.d0[0], f.name = "No results", f.d0[0] =
                    0, d++);
                for (; 0 != d % 40;) f.d0[d++ % 40] = 0;
                for (c = this.hO.d0.length - (d / 40 | 0); 0 <= --c;) this.l5.push(this.hO.d0.pop());
                this.nt != this.hO && (this.iL.push(this.nt), this.nt = this.hO);
                this.hO.name = "Search (" + e + ")";
                this.qX(1, this)
            } else this.hO.name = "Search", this.nt == this.hO && (this.nt = this.iL.pop(), this.qX(-1, this));
            c = ga.aX;
            c.mk == c.nA && (c.ps[0].set_text("" + e + ' search results for "'), c.ps[1].set_text(a), a = c.ps[0], c.ps[1].x = a.x + a.width, a = c.ps[1], c.ps[2].x = a.x + a.width);
            return e
        },
        c4: function(a, b, c) {
            0 != c && (0 < c && c < I.fv ? this.cj.jP(this.cj.ka,
                20 * (c & 31), 20 * (c >> 5), 20, 20, a, b, 1) : 0 > c && c > I.fb ? (c = -c, this.cj.jP(this.cj.gE, 20 * (c & 31), 20 * (c >> 5), 20, 20, a, b, 1)) : this.cj.pr(a + 3, b + 3, 14, 14, 4933764, 1))
        },
        nH: function(a) {
            var b = this;
            return function(c) {
                b.qX(a, null, b.cj.au)
            }
        },
        qX: function(a, b, c) {
            var d, e;
            d = a;
            1 < this.iL.length && --d;
            if (0 > d) 1 < this.iL.length && (this.nt = this.iL.pop());
            else if (d < this.nt.d0.length) switch (d = this.nt.d0[d], d.type) {
                case 1:
                    this.iL.push(this.nt);
                    this.nt = d;
                    break;
                case 2:
                    this.selected = d;
                    ia.get_aX().load(this.selected.d0);
                    d = -1;
                    for (e = this.aO.length; ++d <
                        e;) this.aO[d].set_style(a == d ? 4 : 1);
                    if (c && (a = ga.aX.mk, E.jp(a, na)))
                        for (c = ia.get_aX(), d = a.items.length, d > c.items.length && (d = c.items.length), e = 0; e < d;) {
                            var f = e++;
                            a.items[f].set_id(c.items[f].qM.item);
                            a.items[f].set_count(c.items[f].get_count());
                            a.items[f].set_prefix(c.items[f].get_prefix())
                        }
                    if (null == b) return
            } else if (null == b) return;
            b = 0;
            1 < this.iL.length && (this.qF[b] = 0, this.aO[b++].set_text("../" + this.nt.name));
            d = -1;
            for (e = this.nt.d0.length; ++d < e && !(this.qF[b] = this.nt.d0[d].oT, this.aO[b].set_style(this.nt.d0[d] ==
                    this.selected ? 4 : 1), this.aO[b++].set_text("  " + this.nt.d0[d].name), b >= this.aO.length););
            for (; b < this.aO.length;) this.qF[b] = 0, this.aO[b].set_style(1), this.aO[b++].set_text("")
        },
        dK: function(a, b) {
            var c, d = this.aO.length;
            for (c = -1; ++c < d;) this.c4(a + this.aO[c].x - 8, b + this.aO[c].y, this.qF[c]);
            z.prototype.dK.call(this, a, b)
        },
        ik: ha
    });
    var Sa = function() {};
    g["app.Shelf"] = Sa;
    Sa.be = !0;
    Sa.prototype = {
        ik: Sa
    };
    var Xa = function(a, b, c) {
        this.oT = a;
        this.type = 1;
        this.name = b;
        this.d0 = c
    };
    g["app.ShDir"] = Xa;
    Xa.be = !0;
    Xa.pc = Sa;
    Xa.prototype =
        m(Sa.prototype, {
            ik: Xa
        });
    var Qa = function(a, b, c) {
        this.oT = a;
        this.type = 2;
        this.name = b;
        this.d0 = c
    };
    g["app.ShItems"] = Qa;
    Qa.be = !0;
    Qa.pc = Sa;
    Qa.prototype = m(Sa.prototype, {
        ik: Qa
    });
    var Ka = function() {
        this.pY = 0;
        var a = this;
        z.call(this);
        this.title = "Character";
        var b, c, d, e;
        this.kn = [];
        this.kn[0] = new aa(40, 56, [new P(80, 0)]);
        this.kn[1] = new aa(40, 56, [new P(0, 0)]);
        this.kn[2] = new aa(40, 56, [new P(40, 0)]);
        this.kn[3] = new aa(40, 56, [new P(480, 0), new P(120, 0)]);
        this.kn[4] = new aa(40, 56, [new P(320, 0), new P(160, 0)]);
        this.kn[5] = new aa(40,
            56, [new P(360, 0), new P(200, 0)]);
        this.kn[6] = new aa(40, 56, [new P(400, 0), new P(240, 0)]);
        this.kn[7] = new aa(40, 56, [new P(440, 0), new P(280, 0)]);
        e = [];
        for (b = -1; 134 > ++b;) e.push(new P(40 * (b & 15), 56 + 40 * (b >> 4)));
        this.kn[8] = new aa(40, 40, e);
        this.lM = [];
        this.lM[0] = this.es(0, 0, "Format: ", 7);
        this.mg = this.p7(function(a) {
            a = a.lM[0];
            return a.x + a.width
        }(this), 0, "$", 1, function(b) {
            a.cj._w.version = b;
            var c = -1,
                d, e = a.cA.length;
            for (d = 0; d < e;) b >= a.r$[d] && (c = d), d++;
            for (d = 0; d < e;) a.cA[d].set_style(c == d ? 4 : 1), d++
        });
        this.lM[1] = this.es(function(a) {
            a =
                a.mg;
            return a.x + a.width
        }(this), 0, " ( ");
        e = "1.0.9|39 1.2.0|69 1.2.1|73 1.2.2|77 1.2.3|93 1.2.4|101 1.3.0|145 1.3.1|168 1.3.3|175 1.3.4|184 1.3.5|190 *|200".split(" ");
        c = e.length;
        this.r$ = [];
        this.j3 = [];
        for (b = 0; b < c;) d = e[b].indexOf("|"), this.r$[b] = C.parseInt(w.substr(e[b], d + 1, null)), this.j3[b] = w.substr(e[b], 0, d), b++;
        this.cA = [];
        e = this.lM[1];
        d = e.x + e.width;
        for (b = 0; b < c - 1;) this.cA[b] = this.r_(d, 0, this.j3[b] + " ", 1, this.np(this.r$[b])), d += this.cA[b].width, b++;
        this.lM[2] = this.es(d, 0, ")", 1);
        this.mg.ef = function(b) {
            var c;
            b = a.mg;
            a.lM[1].x = b.x + b.width;
            b = a.lM[1];
            c = b.x + b.width;
            for (b = -1; ++b < a.cA.length;) a.cA[b].x = c, c += a.cA[b].width;
            a.lM[2].x = c
        };
        this.mT = this.es(0, 0, "Format: ", 7);
        this.l$ = this.p7(function(a) {
            a = a.mT;
            return a.x + a.width
        }(this), this.mT.y);
        this.l$.pM = function(b) {
            a.cj._w.cz = b
        };
        this.l$.ef = function(b) {
            b = a.l$;
            a.i8.x = b.x + b.width
        };
        this.i8 = this.oS(function(a) {
            a = a.l$;
            return a.x + a.width
        }(this), this.l$.y, "'$");
        this.i8.pM = function(b) {
            a.cj._w.lt = b
        };
        if (this.cj.o8) {
            this.remove(this.mg);
            e = 0;
            for (d = this.lM; e < d.length;) c = d[e],
                ++e, this.remove(c);
            e = 0;
            for (d = this.cA; e < d.length;) c = d[e], ++e, this.remove(c)
        } else this.remove(this.mT), this.remove(this.l$), this.remove(this.i8);
        this.md = this.es(0, function(a) {
            a = a.lM[2];
            return a.y + a.height
        }(this), "Health: ", 4);
        this.cn = this.es(0, this.md.y, "/", 1);
        (this.eo = this.p7(0, this.md.y)).pM = function(b) {
            a.cj._w.$3 = b
        };
        (this.aw = this.p7(this.md.x + this.md.width, this.md.y)).ef = function(b) {
            a.cn.x = a.aw.x + a.aw.width;
            a.eo.x = a.cn.x + a.cn.width
        };
        this.aw.pM = function(b) {
            a.cj._w.dt = b
        };
        this._M = this.es(0, this.md.y +
            this.md.height, "Mana: ", 5);
        this.aG = this.es(0, this._M.y, "/");
        (this.mP = this.p7(0, this._M.y)).pM = function(b) {
            a.cj._w.dY = b
        };
        (this.jx = this.p7(this._M.x + this._M.width, this._M.y)).ef = function(b) {
            a.aG.x = a.jx.x + a.jx.width;
            a.mP.x = a.aG.x + a.aG.width
        };
        this.jx.pM = function(b) {
            a.cj._w.hi = b
        };
        e = this._M.y + this._M.height;
        this.cO = this.es(0, e, "Mode: ", 3);
        d = this.cO.x + this.cO.width;
        this._d = [];
        this._d[0] = this.r_(d, e, "Softcore", 1, function(b) {
            if (0 != a.cj._w.difficulty) {
                for (b = a.cj._w.difficulty = 0; 3 > b;) a._d[b].set_style(0 == b ?
                    4 : 1), b++;
                a.nz.set_text("")
            }
        });
        d = function(a) {
            a = a._d[0];
            return a.x + a.width
        }(this) + 8;
        this._d[1] = this.r_(d, e, "Mediumcore", 1, function(b) {
            if (1 != a.cj._w.difficulty) {
                a.cj._w.difficulty = 1;
                for (b = 0; 3 > b;) a._d[b].set_style(1 == b ? 4 : 1), b++;
                a.nz.set_text("")
            }
        });
        d = function(a) {
            a = a._d[1];
            return a.x + a.width
        }(this) + 8;
        this._d[2] = this.r_(d, e, "Hardcore", 1, function(b) {
            2 != a.cj._w.difficulty && (a.nz.set_text("Confirm"), a.pY = a.cj.time + 7)
        });
        d = function(a) {
            a = a._d[2];
            return a.x + a.width
        }(this) + 8;
        this.nz = this.r_(d, e, "", 2, function(b) {
            if (2 !=
                a.cj._w.difficulty) {
                a.cj._w.difficulty = 2;
                for (b = 0; 3 > b;) a._d[b].set_style(2 == b ? 4 : 1), b++;
                a.nz.set_text("")
            }
        });
        this.cb = this.es(0, this.cO.y + this.cO.height + 8, "Hair style: ", 1);
        this.iE = this.r_(function(a) {
            a = a.cb;
            return a.x + a.width
        }(this), this.cb.y, "<", 4, function(b) {
            b = (a.cj._w.me - 1) % 134;
            0 > b && (b += 134);
            a.kn[8].set_style(a.cj._w.me = a.ow.set_value(b))
        });
        this.ow = this.p7(function(a) {
            a = a.iE;
            return a.x + a.width
        }(this) + 20, this.cb.y);
        this.ow.set_m2(1);
        this.ow.pM = function(b) {
            a.kn[8].set_style(a.cj._w.me = b)
        };
        this.ow.ef =
            function(b) {
                a.kn[8].set_style(C.parseInt(b))
            };
        this.C = this.r_(function(a) {
            a = a.iE;
            return a.x + a.width
        }(this) + 40, this.cb.y, ">", 4, function(b) {
            b = (a.cj._w.me + 1) % 134;
            0 > b && (b += 134);
            a.kn[8].set_style(a.cj._w.me = a.ow.set_value(b))
        });
        e = ["Male", "Female"];
        c = function(b) {
            return function(c) {
                a.cj._w.bf = a.cj._w.bf & 3 | b << 2;
                for (c = 0; 2 > c;) a.qp[c].set_style(b == c ? 4 : 1), c++;
                c = 0;
                for (var d = Ka.cK; c < d.length;) {
                    var e = d[c];
                    ++c;
                    a.kn[e].set_style(1 - b)
                }
            }
        };
        this.pG = this.es(0, function(a) {
            a = a.cb;
            return a.y + a.height
        }(this), "Gender: ");
        this.qp = [];
        d = this.pG;
        d = d.x + d.width;
        for (b = 0; 2 > b;) this.qp[b] = this.r_(d, this.pG.y, e[b], 1, c(b)), d = function(a) {
            a = a.qp[b];
            return a.x + a.width
        }(this) + 8, b++;
        e = ["1", "2", "3", "4", "5"];
        c = function(b) {
            return function(c) {
                a.cj._w.bf = a.cj._w.bf & -4 | b;
                for (c = 0; c < a.pj.length;) a.pj[c].set_style(b == c ? 4 : 1), c++
            }
        };
        this.$w = this.es(0, function(a) {
            a = a.pG;
            return a.y + a.height
        }(this), "Cloth Style: ");
        this.pj = [];
        d = this.$w;
        d = d.x + d.width;
        for (b = 0; b < e.length;) this.pj[b] = this.r_(d, this.$w.y, e[b], 1, c(b)), d = function(a) {
                a = a.pj[b];
                return a.x + a.width
            }(this) +
            4, b++;
        e = this.$w;
        d = e.y + e.height;
        this._5 = [];
        this.m3 = [];
        e = "Hair Skin Eyes Shirt Undershirt Pants Shoes".split(" ");
        for (b = -1; 7 > ++b;) this._5[b] = this.es(0, d, e[b] + ": "), this.m3[b] = this.ev(this._5[b].width, d), d += this._5[b].height;
        this.m3[0].pM = function(b) {
            a.kn[8].set_color(a.cj._w.ay = b)
        };
        this.m3[1].pM = function(b) {
            a.kn[3].set_color(a.kn[1].set_color(a.cj._w.bd = b))
        };
        this.m3[2].pM = function(b) {
            a.kn[2].set_color(a.cj._w.pm = b)
        };
        this.m3[3].pM = function(b) {
            a.kn[4].set_color(a.cj._w.lv = b)
        };
        this.m3[4].pM = function(b) {
            a.kn[5].set_color(a.cj._w.nT =
                b)
        };
        this.m3[5].pM = function(b) {
            a.kn[6].set_color(a.cj._w.oZ = b)
        };
        this.m3[6].pM = function(b) {
            a.kn[7].set_color(a.cj._w.eQ = b)
        };
        this.jr = this.es(240, this.cO.y + this.cO.height + 8, "Fishing quests complete: ", 5);
        this.et = this.p7(function(a) {
            a = a.jr;
            return a.x + a.width
        }(this), this.jr.y, "$", 1, function(b) {
            a.cj._w.o_ = b
        });
        this.nM = this.kb(240, function(a) {
            a = a.jr;
            return a.y + a.height
        }(this), "Extra accessory (for expert mode)", 4, function(b) {
            a.cj._w.n$ = b
        })
    };
    g["app.TabMain"] = Ka;
    Ka.be = !0;
    Ka.pc = z;
    Ka.prototype = m(z.prototype, {
        dK: function(a,
            b) {
            "" != this.nz.text && this.cj.time > this.pY && this.nz.set_text("");
            var c = a + 180,
                d = b + 100;
            this.cj.i_(this.kn[6], c, d);
            this.cj.i_(this.kn[7], c, d);
            this.cj.i_(this.kn[4], c, d);
            this.cj.i_(this.kn[5], c, d);
            this.cj.i_(this.kn[3], c, d);
            this.cj.i_(this.kn[1], c, d);
            this.cj.i_(this.kn[2], c, d);
            this.cj.i_(this.kn[0], c, d);
            this.cj.i_(this.kn[8], c, d);
            z.prototype.dK.call(this, a, b)
        },
        np: function(a) {
            var b = this;
            return function(c) {
                b.mg.get_value() != a && (b.mg.get_value(), b.mg.set_value(a), b.mg.pM(a))
            }
        },
        da: function(a) {
            var b, c;
            this.mg.set_value(a.version);
            this.mg.pM(a.version);
            this.l$.set_value(a.cz);
            this.i8.set_value(a.lt);
            this.aw.set_value(a.dt);
            this.eo.set_value(a.$3);
            this.jx.set_value(a.hi);
            this.mP.set_value(a.dY);
            b = a.difficulty;
            for (c = 0; 3 > c;) this._d[c].set_style(b == c ? 4 : 1), c++;
            b = 0 != (a.bf & 4) ? 1 : 0;
            for (c = 0; c < this.qp.length;) this.qp[c].set_style(c == b ? 4 : 1), c++;
            b = a.bf & 3;
            for (c = 0; c < this.pj.length;) this.pj[c].set_style(c == b ? 4 : 1), c++;
            b = 0;
            for (c = Ka.cK; b < c.length;) {
                var d = c[b];
                ++b;
                this.kn[d].set_style(4 <= a.bf ? 0 : 1)
            }
            this.m3[0].set_value(b = a.ay);
            this.kn[8].set_color(b);
            this.m3[1].set_value(b = a.bd);
            this.kn[3].set_color(this.kn[1].set_color(b));
            this.m3[2].set_value(b = a.pm);
            this.kn[2].set_color(b);
            this.m3[3].set_value(b = a.lv);
            this.kn[4].set_color(b);
            this.m3[4].set_value(b = a.nT);
            this.kn[5].set_color(b);
            this.m3[5].set_value(b = a.oZ);
            this.kn[6].set_color(b);
            this.m3[6].set_value(b = a.eQ);
            this.kn[7].set_color(b);
            this.ow.set_value(a.me);
            this.kn[8].set_style(a.me);
            this.et.set_value(a.o_);
            this.nM.set_value(a.n$);
            3 > a.difficulty && this._d[a.difficulty].click()
        },
        ik: Ka
    });
    var L = function(a,
        b, c, d) {
        null == c && (c = !0);
        this.eT = 1;
        this._0 = c;
        this.l3 = 0;
        this.dq = new ka(0, 0, a, b);
        this.i1 = Rb.createCanvasElement();
        this.i1.width = a;
        this.i1.height = b;
        this.context = this.i1.getContext("2d");
        L.qK(this.context, !0);
        this.k = this.context.createImageData(1, 1);
        null == d && (d = -1);
        c || (d |= -16777216);
        0 != (d & -16777216) && this.fillRect(this.dq, d)
    };
    g["openfl.display.BitmapData"] = L;
    L.be = !0;
    L.kR = [ua];
    L.qK = function(a, b) {
        a.imageSmoothingEnabled = a.oImageSmoothingEnabled = a.msImageSmoothingEnabled = a.webkitImageSmoothingEnabled = a.mozImageSmoothingEnabled =
            b
    };
    L.nO = function(a) {
        return "rgba(" + (a >> 16 & 255) + "," + (a >> 8 & 255) + "," + (a & 255) + "," + ((a >> 24 & 255) / 255).toFixed(4) + ")"
    };
    L.prototype = {
        fillRect: function(a, b) {
            null == a || 0 >= a.width || 0 >= a.height || (a.equals(this.dq) && this._0 && 0 == (b & -16777216) ? this.i1.width = this.i1.width : (this._0 ? -16777216 != (b & -16777216) && this.context.clearRect(a.x, a.y, a.width, a.height) : b |= -16777216, 0 != (b & -16777216) && (this.context.fillStyle = L.nO(b), this.context.fillRect(a.x, a.y, a.width, a.height)), this.eT |= 5))
        },
        bp: function() {
            this.br();
            var a = new L(this.i1.width,
                this.i1.height, this._0, 0);
            a.context.drawImage(this.i1, 0, 0);
            a.eT |= 5;
            return a
        },
        af: function() {
            this.i1.width = this.i1.height = 1;
            this.h_ = null;
            this.eT = 5
        },
        gd: function() {
            this.br();
            0 != (this.eT & 4) && (this.l3++, this.eT &= -5);
            return this.i1
        },
        lV: function(a, b, c, d, e, f, h) {
            b.save();
            null != h && b.imageSmoothingEnabled != h && L.qK(b, h);
            null != c && (1 == c.a && 0 == c.b && 0 == c.c && 1 == c.d ? b.translate(c.nG, c.lS) : b.setTransform(c.a, c.b, c.c, c.d, c.nG, c.lS));
            b.drawImage(this.gd(), 0, 0);
            b.restore()
        },
        mE: function(a, b, c, d, e, f) {
            null == f && (f = !1);
            this.br();
            if (null != d) throw new G("alphaBitmapData is not supported yet.");
            a = a.gd();
            var h, t;
            d = this.i1.width;
            e = this.i1.height;
            if (!(null == a || 0 >= (h = a.width) || 0 >= (t = a.height))) {
                var g = ~~c.x;
                c = ~~c.y;
                var A, k, q;
                null != b ? (A = b.x, k = b.y, q = b.width, b = b.height, 0 > A && (q += A, A = 0), 0 > k && (b += k, k = 0), A + q > h && (q = h - A), k + b > t && (b = t - k)) : (A = k = 0, q = h, b = t);
                0 > g && (q += g, A -= g, g = 0);
                0 > c && (b += c, k -= c, c = 0);
                g + q > d && (q = d - g);
                c + b > e && (b = e - c);
                0 >= q || 0 >= b || (this._0 && !f && this.context.clearRect(g, c, q, b), this.context.drawImage(a, A, k, q, b, g, c, q, b), this.eT |= 5)
            }
        },
        _Z: function(a,
            b, c, d, e, f) {
            this.br();
            var h = 0;
            this.context.save();
            null != c && (h = c.bm, c.bm = 1, this.context.globalAlpha *= h);
            null != e && (this.context.beginPath(), this.context.rect(e.x, e.y, e.width, e.height), this.context.clip(), this.context.beginPath());
            null != f && L.qK(this.context, f);
            a.lV(this.gd(), this.context, b, c, d, e, null);
            this.context.restore();
            null != c && (c.bm = h);
            this.eT |= 5
        },
        mJ: function() {
            this.m8()
        },
        c1: function() {
            this.br()
        },
        lX: function(a, b) {
            var c = ~~a.x,
                d = ~~a.y,
                e = ~~a.width,
                f = ~~a.height,
                h = this.i1.width,
                t = this.i1.height,
                g = this.context.globalCompositeOperation,
                k = this.context.globalAlpha;
            0 > c && (e += c, c = 0);
            0 > d && (f += d, d = 0);
            c + e > h && (e = h - c);
            d + f > t && (f = t - d);
            if (!(0 >= e || 0 >= f)) {
                if (b.bh()) this.br(), this.context.globalCompositeOperation = "copy", this.context.globalAlpha *= b.bm, this.context.drawImage(this.i1, c, d, e, f, c, d, e, f), this.eT |= 5;
                else if (b.oz()) h = this.context.fillStyle, 0 != b.bm ? (this.context.globalCompositeOperation = "source-in", this.context.fillStyle = "rgb(" + ~~b.ix + "," + ~~b.fJ + "," + ~~b.$l + ")", this.context.fillRect(c, d, e, f), this.context.globalCompositeOperation = "copy", this.context.globalAlpha =
                    b.bm, this.context.drawImage(this.i1, c, d, e, f, c, d, e, f)) : (this.context.globalCompositeOperation = "copy", this.context.fillStyle = "rgba(" + ~~b.ix + "," + ~~b.fJ + "," + ~~b.$l + "," + ~~b.$P + ")", this.context.fillRect(c, d, e, f)), this.context.fillStyle = h;
                else {
                    var n = 2 != (this.eT & 3);
                    this.mJ();
                    var q = this.h_.data,
                        l = h * t * 4,
                        r, y = b.lx,
                        m = b.f0,
                        p = b.kK,
                        x = b.bm,
                        w = b.ix,
                        u = b.fJ,
                        v = b.$l,
                        z = b.$P;
                    if (0 == c && 0 == d && e == h && f == t)
                        for (; 0 <= (l -= 4);) 0 < (r = q[l + 3]) && (0 > (r = r * x + z) ? q[l + 3] = 0 : q[l + 3] = 255 < r ? 255 : ~~r), 0 > (r = q[l + 2] * p + v) ? q[l + 2] = 0 : q[l + 2] = 255 < r ? 255 : ~~r, 0 >
                            (r = q[l + 1] * m + u) ? q[l + 1] = 0 : q[l + 1] = 255 < r ? 255 : ~~r, 0 > (r = q[l] * y + w) ? q[l] = 0 : q[l] = 255 < r ? 255 : ~~r;
                    else
                        for (t = d - 1, d += f; ++t < d;)
                            for (l = h * t + c - 1 << 2, f = l + 4 * e;
                                (l += 4) < f;) 0 < (r = q[l + 3]) && (0 > (r = r * x + z) ? q[l + 3] = 0 : q[l + 3] = 255 < r ? 255 : ~~r), 0 > (r = q[l + 2] * p + v) ? q[l + 2] = 0 : q[l + 2] = 255 < r ? 255 : ~~r, 0 > (r = q[l + 1] * m + u) ? q[l + 1] = 0 : q[l + 1] = 255 < r ? 255 : ~~r, 0 > (r = q[l] * y + w) ? q[l] = 0 : q[l] = 255 < r ? 255 : ~~r;
                    this.eT |= 6;
                    n && this.c1()
                }
                this.context.globalCompositeOperation = g;
                this.context.globalAlpha = k
            }
        },
        ee: function(a, b) {
            var c = a.fS,
                d = a.image.width,
                e = a.image.height;
            c.width =
                d;
            c.height = e;
            c.getContext("2d").drawImage(a.image, 0, 0, d, e);
            a.ds.width = d;
            a.ds.height = e;
            a.ds.dq = new ka(0, 0, d, e);
            null != a.a$ && (c = new M("complete"), c.set_target(a.a$), a.a$.dispatchEvent(c))
        },
        jC: function(a, b) {
            var c = this,
                d = window.document.createElement("img");
            if (null != b) {
                var e = {
                    image: d,
                    fS: this.i1,
                    a$: b,
                    ds: this
                };
                d.addEventListener("load", function(a, b) {
                    return function(c) {
                        a(b, c)
                    }
                }(u(this, this.ee), e), !1);
                d.addEventListener("error", function(a) {
                    d.complete || c.ee(e, a)
                }, !1)
            }
            d.src = a
        },
        br: function() {
            2 == (this.eT & 3) &&
                (this.context.putImageData(this.h_, 0, 0), this.eT &= -4)
        },
        m8: function() {
            1 == (this.eT & 3) && (this.h_ = this.context.getImageData(0, 0, this.i1.width, this.i1.height), this.eT &= -4)
        },
        ik: L
    };
    var P = function(a, b) {
        this.x = null != a ? a : 0;
        this.y = null != b ? b : 0
    };
    g["openfl.geom.Point"] = P;
    P.be = !0;
    P.prototype = {
        gv: function(a, b) {
            this.x = a;
            this.y = b
        },
        ik: P
    };
    var aa = function(a, b, c) {
        this.style = 0;
        this.color = 16777215;
        L.call(this, a, b, !0, 0);
        this.source = I.oe.iU;
        this.cv = new ka(0, 0, a, b);
        this.kt = [];
        this.hr = new Oa;
        for (var d = 0; d < c.length;) {
            var e = c[d];
            ++d;
            this.kt.push(new ka(e.x, e.y, a, b))
        }
        this.update()
    };
    g["app.BitPart"] = aa;
    aa.be = !0;
    aa.pc = L;
    aa.prototype = m(L.prototype, {
        set_color: function(a) {
            this.color != a && (this.color = a, this.hr.lx = (a >> 16 & 255) / 255, this.hr.f0 = (a >> 8 & 255) / 255, this.hr.kK = (a & 255) / 255, this.update());
            return a
        },
        set_style: function(a) {
            this.style != a && (this.style = a, this.update());
            return a
        },
        update: function() {
            var a = this.style;
            if (0 > a || a >= this.kt.length) a = 0;
            this.mE(this.source, this.kt[a], aa.cV, null, null, !1);
            this.lX(this.cv, this.hr)
        },
        ik: aa
    });
    var rb =
        function() {
            p.call(this, 0, 0, "Misc");
            for (var a = ["Pet", "Light pet", "Minecart", "Mount", "Hook"], b = 0; 5 > b;) {
                var c = b++;
                this.hH(93 + c, 40, 40 * c).color = 11104400;
                this.hH(88 + c, 80, 40 * c);
                this.es(120, 40 * c + 20, a[c], 1, 0, 1)
            }
        };
    g["app.TabMiscEquips"] = rb;
    rb.be = !0;
    rb.pc = p;
    rb.prototype = m(p.prototype, {
        _y: function() {
            this.lq.y = 200
        },
        ik: rb
    });
    var sb = function() {
        z.call(this);
        this.title = "Worlds";
        this._C = [];
        this.ag = this.r_(0, 0, "[+]", 4, u(this, this.eY))
    };
    g["app.TabServers"] = sb;
    sb.be = !0;
    sb.pc = z;
    sb.prototype = m(z.prototype, {
        da: function(a) {
            for (var b =
                    0, c = this._C; b < c.length;) {
                var d = c[b];
                ++b;
                d.af()
            }
            this._C = [];
            b = -1;
            for (c = a._C.length; ++b < c;) d = new tb(this, a._C[b]), this._C.push(d);
            this.ap()
        },
        eY: function(a) {
            a = new ub;
            var b = new tb(this, a);
            this._C.push(b);
            this.cj._w._C.push(a);
            this.ap()
        },
        ap: function() {
            for (var a = -1, b = this._C.length, c = 0; ++a < b;) this._C[a].km(c), c += this._C[a].pE.height;
            this.ag.y = c
        },
        ik: sb
    });
    var tb = function(a, b) {
        var c = this,
            d;
        this.cr = a;
        this.mz = b;
        this.pE = a.r_(0, 0, "[x] ", 2);
        this.pE.ox = function(b) {
            c.af();
            w.remove(a._C, c);
            w.remove(a.cj._w._C, c.mz);
            a.ap()
        };
        a.add(this.j9 = new Ha);
        this.j9.set_format('"$"');
        this.j9.set_value(b.name);
        this.j9.ef = u(this, this._x);
        this.j9.pM = function(a) {
            b.name
        };
        a.add(this.hM = new Ya);
        this.hM.set_style(3);
        this.hM.nn = u(this, this.oM);
        this.hM.set_value(b.k_);
        this.hM.ef = u(this, this._x);
        this.hM.pM = function(a) {
            b.k_ = a
        };
        this.f9 = [];
        for (d = -1; 4 > ++d;) a.add(this.f9[d] = new Q);
        this.f9[0].set_text(" [");
        this.f9[1].set_text("] (");
        this.f9[2].set_text(", ");
        this.f9[3].set_text(")");
        this.$0 = a.p7(0, 0, "$", 1, function(a) {
            c.mz.fH = a
        });
        this.$0.set_value(this.mz.fH);
        this.$0.ef = u(this, this._x);
        this.$0.pM = function(a) {
            c.mz.fH = a
        };
        this.iQ = a.p7(0, 0, "$", 1, function(a) {
            c.mz.fH = a
        });
        this.iQ.set_value(this.mz.nS);
        this.iQ.ef = u(this, this._x);
        this.iQ.pM = function(a) {
            c.mz.nS = a
        };
        this._x(null)
    };
    g["app._TabServers.ServerNode"] = tb;
    tb.be = !0;
    tb.prototype = {
        km: function(a) {
            var b;
            this.hM.y = this.pE.y = this.j9.y = this.$0.y = this.iQ.y = a;
            for (b = -1; 4 > ++b;) this.f9[b].y = a
        },
        af: function() {
            var a;
            this.cr.remove(this.pE);
            this.cr.remove(this.j9);
            this.cr.remove(this.hM);
            for (a = -1; 4 > ++a;) this.cr.remove(this.f9[a]);
            this.cr.remove(this.$0);
            this.cr.remove(this.iQ)
        },
        oM: function(a) {
            return 0 <= a && -1 >= a
        },
        _x: function(a) {
            a = this.pE;
            this.j9.x = a.x + a.width;
            a = this.j9;
            this.f9[0].x = a.x + a.width;
            a = this.f9[0];
            this.hM.x = a.x + a.width;
            a = this.hM;
            this.f9[1].x = a.x + a.width;
            a = this.f9[1];
            this.$0.x = a.x + a.width;
            a = this.$0;
            this.f9[2].x = a.x + a.width;
            a = this.f9[2];
            this.iQ.x = a.x + a.width;
            a = this.iQ;
            this.f9[3].x = a.x + a.width
        },
        ik: tb
    };
    var ia = function() {
        na.call(this);
        var a;
        for (a = -1; 40 > ++a;) {
            var b = new H(-1, !0);
            b.x = a % 10 * 40;
            b.y = 40 * (a / 10 | 0);
            b.set_qM(new ma);
            this.add(b);
            this.items.push(b)
        }
    };
    g["app.TabShelf"] = ia;
    ia.be = !0;
    ia.get_aX = function() {
        null == ia.bS && (ia.bS = new ia);
        return ia.bS
    };
    ia.pc = na;
    ia.prototype = m(na.prototype, {
        da: function(a) {},
        load: function(a) {
            var b, c = a.length,
                d = this.items.length,
                e = x.qo(0);
            for (b = -1; ++b < d;) this.items[b].set_id(b < c ? x.qo(a[b]) : e), this.items[b].set_count(1)
        },
        ik: ia
    });
    var wb = function() {
        this.links = [];
        this.mw = 0;
        this.m$ = null;
        var a = this;
        z.call(this);
        var b, c;
        b = this.es(0, 0, 'Click "Load player" to load a PLR file.', 4);
        b = this.es(0, b.y + b.height,
            "These are most commonly found in:");
        b = this.es(0, b.y + b.height, "Windows", 4);
        b = this.es(b.x + b.width, b.y, ': "My Documents/My Games/Terraria/Players"');
        b = this.es(0, b.y + b.height, "Mac", 4);
        b = this.es(b.x + b.width, b.y, ': "~/Library/Application Support/Terraria/Players" (user home)');
        b = this.es(0, b.y + b.height, "Linux", 4);
        b = this.es(b.x + b.width, b.y, ': "~/.local/share/Terraria/Players" (or "$XDG_DATA_HOME/Terraria/Players")');
        b = this.es(0, b.y + b.height + 10, "Terrasavr is made by ");
        this.links.push(c = function(b, c, f, h,
            t) {
            h = new vb(h);
            h.x = b;
            h.y = c;
            h.set_style(t);
            h.set_text(f);
            a.add(h);
            return h
        }(b.x + b.width, b.y, "YellowAfterlife", "https://yal.cc", 3));
        b = this.es(c.x + c.width, b.y, "!");
        b = this.es(0, b.y + b.height + 10, "Last updated on ");
        b = this.es(b.x + b.width, b.y, "Oct 22, 2019", 4);
        b = this.es(b.x + b.width, b.y, " (for Terraria ");
        b = this.es(b.x + b.width, b.y, "1.3.5.3", 4);
        b = this.es(b.x + b.width, b.y, "):");
        b = this.es(0, b.y + b.height, "Updated the documentation to reflect changes to mobile/console support.", 3)
    };
    g["app.TabStart"] = wb;
    wb.be = !0;
    wb.pc = z;
    wb.prototype = m(z.prototype, {
        update: function(a) {
            z.prototype.update.call(this, a);
            null != this.m$ && (this.mw += a / 1.7, this.m$.y = C["int"](this.A + 3 * Math.sin(this.mw * Math.PI * 2)))
        },
        end: function() {
            z.prototype.end.call(this);
            for (var a = 0, b = this.links; a < b.length;) {
                var c = b[a];
                ++a;
                c.set_enabled(!1)
            }
        },
        ik: wb
    });
    var Q = function() {
        this.oU = this.qz = this.width = this.height = 0;
        this.jH = 2;
        this.style = 1;
        this.m2 = this.fh = 0;
        this.text = "";
        za.call(this);
        this.font = this.cj.font;
        this.g1 = new L(32, 32, !0, 0);
        this.info = new xb
    };
    g["dom.Label"] =
        Q;
    Q.be = !0;
    Q.pc = za;
    Q.prototype = m(za.prototype, {
        bg: function() {
            this.font.iI(this.text, this.x, this.y, this.m2, this.fh, this.info);
            this.oU = this.info.x - this.info.left;
            this.qz = this.info.y - this.info.top;
            this.width = this.info.width;
            this.height = this.info.height;
            var a = this.width + 2 * this.jH,
                b = this.height * this.jH * 2;
            a > this.g1.i1.width || b > this.g1.i1.height ? (a = C["int"](Math.max(this.g1.i1.width, 32 * Math.ceil(a / 32))), b = C["int"](Math.max(this.g1.i1.height, 32 * Math.ceil(b / 32))), this.g1.af(), this.g1 = new L(a, b, !0, 0)) : this.cj.clear(this.g1);
            for (b = -1; 2 > ++b;) this.font._Z(this.g1, this.text, this.oU + this.jH, this.qz + this.jH, this.m2, this.fh, b * this.style)
        },
        aY: function(a, b) {
            var c = a - (this.x - this.oU),
                d = b - (this.y - this.qz);
            return 0 <= c && 0 <= d && c < this.width && d < this.height ? this : null
        },
        dK: function(a, b) {
            this.cj.i_(this.g1, a + this.x - this.oU - this.jH, b + this.y - this.qz - this.jH)
        },
        set_text: function(a) {
            this.text != a && (this.text = a, this.bg());
            return a
        },
        set_m2: function(a) {
            this.m2 != a && (this.m2 = a, "" != this.text && this.bg());
            return a
        },
        set_fh: function(a) {
            this.fh != a && (this.fh =
                a, "" != this.text && this.bg());
            return a
        },
        set_style: function(a) {
            this.style != a && (this.style = a, "" != this.text && this.bg());
            return a
        },
        ik: Q
    });
    var W = function() {
        this.ox = null;
        Q.call(this)
    };
    g["dom.Button"] = W;
    W.be = !0;
    W.pc = Q;
    W.prototype = m(Q.prototype, {
        pK: function(a, b) {
            this.qv = this.aY(a, b) == this
        },
        dK: function(a, b) {
            this.cj._Z(this.g1, a + this.x - this.oU - this.jH, b + this.y - this.qz - this.jH, this.qv ? .7 : 1)
        },
        click: function() {
            null != this.ox && this.ox(this)
        },
        ik: W
    });
    var vb = function(a) {
        this.enabled = !0;
        W.call(this);
        this.e8 = new Za(a,
            "_blank");
        this.e8.i1.style.zIndex = "100";
        this.oC = new $a(10, 10, 0);
        this.e8.fU(this.oC)
    };
    g["app.TabStartLink"] = vb;
    vb.be = !0;
    vb.pc = W;
    vb.prototype = m(W.prototype, {
        set_enabled: function(a) {
            this.enabled != a && ((this.enabled = a) || null == this.e8.parent || this.e8.parent.removeChild(this.e8));
            return a
        },
        dK: function(a, b) {
            W.prototype.dK.call(this, a, b);
            this.enabled && null == this.e8.parent && I.oe.fU(this.e8);
            this.e8.set_x(a + this.x - this.oU);
            this.e8.set_y(b + this.y - this.qz);
            this.oC.set_width(this.width);
            this.oC.set_height(this.height)
        },
        ik: vb
    });
    var ga = function() {
        this.lJ = 0;
        var a = this;
        ga.aX = this;
        O.call(this);
        this.x = this.y = 8;
        this.pQ = [new Aa("Terraria player files (*.plr)", "*.plr"), new Aa("All files (*.*)", "*.*")];
        this.ae = new Ja;
        this.ae.addEventListener("select", function(b) {
            a.ae.load()
        });
        this.ae.addEventListener("complete", u(this, this.p8));
        this.kT = new Ja;
        this._S = new W;
        this._S.set_style(3);
        this._S.set_text("Load player");
        this._S.ox = function(b) {
            b = l.fR();
            a.lJ < b && (a.lJ = b + 500, a.ae.ep(a.pQ))
        };
        this.add(this._S);
        this.cM = new W;
        this.cM.set_style(4);
        this.cM.set_text("Save player");
        this.cM.x = this._S.x + this._S.width + 8;
        this.cM.ox = u(this, this.$L);
        this.add(this.cM);
        this.j9 = new Ha;
        this.j9.set_format("[$]");
        this.j9.set_value("Someone");
        this.j9.x = this.cM.x + this.cM.width + 8;
        this.add(this.j9);
        this.ma();
        this._D()
    };
    g["app.TopPane"] = ga;
    ga.be = !0;
    ga.pc = O;
    ga.prototype = m(O.prototype, {
        ma: function() {
            var a = this;
            this.av = new O;
            this.av.x = 8;
            this.av.y = 52;
            this.add(this.av);
            this.kO = new z;
            this.kO.add(this.nU = new Q);
            this.nU.set_style(4);
            this.nA = new p(0, 0, "Search");
            this.ps = [this.nA.es(8, 0, "", 1), this.nA.es(8, 0, "", 3), this.nA.es(8, 0, '":', 1)];
            var b = this.ps[2].height;
            this.nA.y = b;
            for (var c = 0, d = this.ps; c < d.length;) {
                var e = d[c];
                ++c;
                e.y = -b
            }
            this.nA.es(8, this.nA.lq.y + 160, this.nU.text, 4);
            b = new p(30, 50, "Inventory");
            for (c = 0; 10 > c;) d = c++, b.items[d].color = 6525881;
            this.$H = [new Ka, new qb, new rb, b, new p(98, 40, "Bank"), new p(138, 40, "Safe"), new p(178, 40, "Forge"), new sb, new K];
            b = 4;
            this.q6 = [];
            c = 0;
            for (d = this.$H; c < d.length;) {
                e = d[c];
                ++c;
                var f = new W;
                this.q6.push(f);
                f.x = b;
                f.y = 24;
                f.set_style(e.style);
                f.set_text(e.title);
                f.ox = function(b, c) {
                    return function(d) {
                        d = 0;
                        for (var e = a.q6; d < e.length;) {
                            var f = e[d];
                            ++d;
                            f.set_style(f == c ? 5 : 1)
                        }
                        a.mk != b && (a.mk.end(), a.av.remove(a.mk), a.av.add(a.mk = b), a.mk.start())
                    }
                }(e, f);
                b += f.width + 8;
                this.add(f)
            }
            c = new yb("Help", "http://yal.cc/r/terrasavr/doc");
            c.x = b;
            c.y = 24;
            this.add(c);
            this.dg = new wb;
            this.av.add(this.mk = this.dg);
            c = document.location.href;
            if (0 <= (b = c.indexOf("?")))
                for (c = w.substr(c, b + 1, null), f = c.split("&"), b = f.length; 0 <= --b;)
                    if (d = f[b], c = d.indexOf("="), 0 <= c) switch (e = w.substr(d,
                        c + 1, null), d = w.substr(d, 0, c), d) {
                        case "q":
                            e = unescape(e), e = J.replace(e, "+", " "), this.dz(e)
                    }
        },
        dK: function(a, b) {
            var c = Ga._n(this.cj._w.version);
            Z.hv = c.q7;
            H.hv = c.item;
            O.prototype.dK.call(this, a, b)
        },
        he: function(a) {
            for (var b = -1, c = this.q6.length; ++b < c;) this.q6[b].set_style(a == b ? 4 : 1)
        },
        dz: function(a) {
            p.bE[1].click();
            ha.get_aX().cS.set_value(a);
            this.mk != this.nA && (this.he(-1), null != this.mk && this.av.remove(this.mk), this.av.add(this.mk = this.nA));
            ha.get_aX().search(a)
        },
        print: function(a, b) {
            this.nU.set_text("");
            this.nU.set_style(b);
            this.nU.set_text(a);
            this.mk != this.kO && (this.he(-1), null != this.mk && this.av.remove(this.mk), this.av.add(this.mk = this.kO))
        },
        _D: function() {
            var a = this.cj._w;
            this.j9.set_value(a.name);
            for (var b = 0, c = this.$H; b < c.length;) {
                var d = c[b];
                ++b;
                d.da(a)
            }
        },
        rg: function(a) {
            if (0 != a.length % 16) this.print("That doesn't look like a valid character file.\nEither that or it's damaged.", 2);
            else if (0 == a.length) this.print("The file is empty. Perhaps it was corrupt before.\nYou can try re-creating the character manually.", 2);
            else if (800 >
                a.length) this.print("The file is too small to be a valid character file.\nPerhaps a part is missing.", 2);
            else try {
                var b = new Ga,
                    c = B.j8(a);
                b.load(c);
                this.mk != this.kO && this.mk != this.nA && this.mk != this.dg || this.q6[0].click();
                this.cj._w = b;
                this.cj.lh = !0
            } catch (d) {
                d instanceof G && (d = d.gY), this.print("Failed to load profile. The error was\n" + C.string(d) + "\nWas it a valid character file?", 2)
            }
        },
        p8: function(a) {
            this.hD = this.ae.get_name();
            a = a.get_target().data;
            this.rg(a);
            this._D();
            this.cj._T = l.fR() + 500
        },
        $L: function(a) {
            a =
                this.cj._w;
            a.name = this.j9.get_value();
            var b;
            a.save(b = new ra);
            b = B.kE(b);
            this.kT.save(b, null != this.hD ? this.hD : "" + a.name + ".plr")
        },
        ik: ga
    });
    var ja = function() {
        W.call(this);
        this.items = []
    };
    g["app.io.IoButton"] = ja;
    ja.be = !0;
    ja.pc = W;
    ja.prototype = m(W.prototype, {
        hH: function(a) {
            this.items.push(a)
        },
        ik: ja
    });
    var S = function(a, b, c) {
        null == c && (c = "items");
        ja.call(this);
        this.name = a;
        this.append = b;
        this.set_style(b ? 1 : 3);
        this.set_text((b ? "Add " : "Load ") + c);
        this.ox = u(this, this.p8);
        null == S.ae && (S.ae = new Ja, S.pQ = [new Aa("Terrasavr item files (*.tsr)",
            "*.tsr"), new Aa("All files (*.*)", "*.*")], S.ae.addEventListener("select", function(a) {
            S.ae.load()
        }), S.ae.addEventListener("complete", function(a) {
            a = a.get_target().data;
            S.o7.fY(a)
        }))
    };
    g["app.io.IoLoad"] = S;
    S.be = !0;
    S.pc = ja;
    S.prototype = m(ja.prototype, {
        p8: function(a) {
            S.o7 = this;
            S.ae.ep(S.pQ)
        },
        fY: function(a) {
            var b, c, d, e, f, h, t, g = this.cj._w.items;
            a.position = 0;
            if (12 > a.length || "/terrasavr/i" != a.jt(12)) ga.aX.print("Specified file isn't a Terrasavr item file.", 3);
            else {
                a.bN();
                b = this.items.length;
                if (!this.append)
                    for (c = -1; ++c < b;) g[this.items[c]].clear();
                for (d = c = -1; ++c < b && 4 <= a.length - a.position;) try {
                    f = a.bN();
                    var k = null;
                    0 != f ? (2147483647 == f && (k = a.d3()), h = a.bN(), t = a.data.getUint8(a.position++)) : h = t = 0;
                    e = -1;
                    if (this.append) {
                        if (0 == f) continue;
                        for (; ++d < b && null != g[e = this.items[d]].item;);
                        if (d >= b) break
                    } else if (++d < b) e = this.items[d];
                    else break;
                    var l = g[e],
                        q;
                    q = null != k ? x.fi(k) : x.qo(f);
                    l.item = q;
                    l.count = l.qn ? h : null != q ? 1 : 0;
                    l.prefix = t
                } catch (n) {
                    n instanceof G && (n = n.gY);
                    break
                }
            }
        },
        ik: S
    });
    var pb = function() {
        S.call(this, "Lib", !1);
        this.set_style(5);
        this.set_text("Load library");
        this.set_m2(2)
    };
    g["app.io.IoLib"] = pb;
    pb.be = !0;
    pb.pc = S;
    pb.prototype = m(S.prototype, {
        fY: function(a) {
            S.prototype.fY.call(this, a);
            var b = ia.get_aX();
            a.position = 0;
            if (12 > a.length || "/terrasavr/i" != a.jt(12)) ga.aX.print("Specified file isn't a Terrasavr item file.", 3);
            else {
                a.bN();
                var b = b.items,
                    c, d = b.length;
                for (c = -1; ++c < d;) {
                    var e, f, h, t = null;
                    if (4 <= a.length - a.position) try {
                        e = a.bN(), 0 != e ? (2147483647 == e && (t = a.d3()), f = a.bN(), h = a.data.getUint8(a.position++)) : f = h = 0
                    } catch (g) {
                        g instanceof
                        G && (g = g.gY), e = f = h = 0
                    } else e = f = h = 0;
                    var k = b[c];
                    k.set_id(null != t ? x.fi(t) : x.qo(e));
                    k.set_count(f);
                    k.set_prefix(h)
                }
            }
        },
        ik: pb
    });
    var Ra = function(a, b) {
        null == b && (b = "items");
        ja.call(this);
        this.set_text("Save " + b);
        this.set_style(4);
        this.name = a;
        this.ox = u(this, this.$L)
    };
    g["app.io.IoSave"] = Ra;
    Ra.be = !0;
    Ra.pc = ja;
    Ra.prototype = m(ja.prototype, {
        $L: function(a) {
            a = new ra;
            var b = this.cj._w.items,
                c = -1,
                d = this.items.length;
            a.ku("/terrasavr/i");
            for (a.$T(I.VERSION); ++c < d;) {
                var e = b[this.items[c]],
                    f = e.item;
                if (null != f) {
                    if (0 == f.id)
                        if ("" !=
                            f.code) a.lE(2147483647), a.dw(f.code);
                        else {
                            a.lE(0);
                            continue
                        }
                    else a.lE(f.id);
                    a.lE(e.count);
                    a.nl(e.prefix)
                } else a.lE(0)
            }
            ga.aX.kT.save(a, "" + this.name + ".tsr")
        },
        ik: Ra
    });
    var ob = function() {
        ja.call(this);
        this.set_text("Sort");
        this.set_style(8);
        this.ox = u(this, this._1)
    };
    g["app.io.IoSort"] = ob;
    ob.be = !0;
    ob.pc = ja;
    ob.prototype = m(ja.prototype, {
        _1: function(a) {
            a = [];
            var b;
            x.qo(0);
            for (b = 0; b < this.items.length;) {
                var c = this.cj._w.items[this.items[b]];
                a.push({
                    item: c.item,
                    count: c.count,
                    prefix: c.prefix,
                    pf: c.ig
                });
                b++
            }
            a.sort(function(a,
                b) {
                var c;
                c = null != a.item ? a.item.name : "";
                var d;
                d = null != b.item ? b.item.name : "";
                return "" == c ? "" != d ? 1 : 0 : "" == d ? -1 : Sb._c(c, d)
            });
            for (b = 0; b < this.items.length;) {
                var c = this.cj._w.items[this.items[b]],
                    d = a[b];
                c.item = d.item;
                c.count = d.count;
                c.prefix = d.prefix;
                c.ig = d.pf;
                b++
            }
        },
        ik: ob
    });
    var kb = function() {
        this.h3 = !1;
        this.iS = !0;
        this.format = "";
        this.value = !1;
        Q.call(this);
        this.set_text("[ ]")
    };
    g["dom.Checkbox"] = kb;
    kb.be = !0;
    kb.pc = Q;
    kb.prototype = m(Q.prototype, {
        pS: function() {
            this.set_text("[" + (this.value ? "x" : " ") + "] " + this.format)
        },
        pK: function(a, b) {
            this.h3 = this.aY(a, b) == this
        },
        dK: function(a, b) {
            this.cj._Z(this.g1, a + this.x - this.oU - this.jH, b + this.y - this.qz - this.jH, this.iS ? this.h3 ? .7 : 1 : .3)
        },
        click: function() {
            this.set_value(!this.value)
        },
        set_value: function(a) {
            this.value != a && (this.value = a, null != this.ef && this.ef(a), this.pS());
            return a
        },
        set_format: function(a) {
            this.format != a && (this.format = a, this.pS());
            return a
        },
        ik: kb
    });
    var D = function() {
        this.aa = this.h3 = !1;
        this.l9 = "";
        this.format = "$";
        Q.call(this)
    };
    g["dom.VoidField"] = D;
    D.be = !0;
    D.dE = function() {
        D.ih =
            new ab;
        D.ih.set_x(D.ih.set_y(-9001));
        D.ih.get_bL().color = 16777215;
        D.ih.set_height(20);
        D.ih.set_multiline(!1);
        D.ih.set_type("INPUT");
        l.get_iv().fU(D.ih)
    };
    D.pc = Q;
    D.prototype = m(Q.prototype, {
        update: function(a) {
            this.aa && this.set_l9(D.ih.get_text())
        },
        pK: function(a, b) {
            this.h3 = this.aY(a, b) == this
        },
        pS: function() {
            null != this.ef && this.ef(this.l9)
        },
        finish: function() {},
        dK: function(a, b) {
            var c = this,
                d, e = 0;
            d = 0;
            this.aa && (d = this.format.indexOf("$"), e = D.ih.get_gS() + d, d = D.ih.get_iY() + d, e != d && this.font.select(this.text,
                e, d, a + this.x, b + this.y, this.m2, this.fh,
                function(a, b, d) {
                    c.cj.pr(a, d, b - a, c.font.lineHeight, 4247807, .5)
                }));
            this.cj._Z(this.g1, a + this.x - this.oU - this.jH, b + this.y - this.qz - this.jH, this.h3 ? .7 : 1);
            this.aa && .7 < this.cj.time % 1.4 && this.font.select(this.text, d, d, a + this.x, b + this.y, this.m2, this.fh, function(a, b, d) {
                c.cj.rect(b, d, 1, c.font.lineHeight, 16777215)
            })
        },
        h7: function(a) {
            D.ih.removeEventListener("blur", u(this, this.h7));
            D.ih.removeEventListener("keydown", u(this, this.op));
            this.finish();
            this.aa = !1
        },
        op: function(a) {
            13 ==
                a.keyCode && this.h7(null)
        },
        click: function() {
            this.aa || (this.aa = !0, null == D.ih && D.dE(), D.ih.addEventListener("keydown", u(this, this.op)), D.ih.addEventListener("blur", u(this, this.h7)), D.ih.set_text(this.l9), D.ih.cI(0, this.l9.length), l.get_iv().get_ew().set_focus(D.ih))
        },
        set_format: function(a) {
            this.format != a && (this.format = a, this.set_text(J.replace(this.format, "$", this.l9)), this.pS());
            return a
        },
        set_l9: function(a) {
            this.l9 != a && (this.l9 = a, this.set_text(J.replace(this.format, "$", this.l9)), this.pS());
            return a
        },
        ik: D
    });
    var Ca = function() {
        D.call(this);
        this.pb = -1;
        this.set_value(0)
    };
    g["dom.HexField"] = Ca;
    Ca.be = !0;
    Ca.pc = D;
    Ca.prototype = m(D.prototype, {
        get_value: function() {
            return this.pb
        },
        set_value: function(a) {
            this.pb != a && (this.pb = a, this.set_l9(J.cf(this.pb, 6)));
            return a
        },
        finish: function() {
            var a = C.parseInt("0x" + this.l9);
            null == a || null != this.nn && !this.nn(a) || (this.pb = a);
            this.set_l9(J.cf(this.pb, 6));
            null != this.pM && this.pM(this.pb)
        },
        ik: Ca
    });
    var lb = function() {
        Ca.call(this)
    };
    g["dom.ColorField"] = lb;
    lb.be = !0;
    lb.pc = Ca;
    lb.prototype =
        m(Ca.prototype, {
            aY: function(a, b) {
                return Ca.prototype.aY.call(this, a - 20, b)
            },
            dK: function(a, b) {
                this.cj.rect(a + this.x + 2, b + this.y + 2, 16, 16, 3355443);
                this.cj.rect(a + this.x + 2, b + this.y + 2, 16, 16, this.get_value());
                Ca.prototype.dK.call(this, a + 20, b)
            },
            ik: lb
        });
    var Ya = function() {
        D.call(this);
        this.pb = -1;
        this.set_value(0)
    };
    g["dom.IntField"] = Ya;
    Ya.be = !0;
    Ya.pc = D;
    Ya.prototype = m(D.prototype, {
        get_value: function() {
            return this.pb
        },
        set_value: function(a) {
            this.pb != a && (this.pb = a, this.set_l9("" + this.pb));
            return a
        },
        finish: function() {
            var a =
                C.parseInt(this.l9);
            null == a || null != this.nn && !this.nn(a) || (this.pb = a);
            this.set_l9("" + this.pb);
            null != this.pM && this.pM(this.pb)
        },
        ik: Ya
    });
    var yb = function(a, b) {
        this.enabled = !0;
        W.call(this);
        this.e8 = new Za(b, "_blank");
        this.e8.i1.style.zIndex = "100";
        this.set_text(a);
        this.oC = new $a(this.width, this.height, 0);
        this.e8.fU(this.oC)
    };
    g["dom.Link"] = yb;
    yb.be = !0;
    yb.pc = W;
    yb.prototype = m(W.prototype, {
        dK: function(a, b) {
            W.prototype.dK.call(this, a, b);
            this.enabled && null == this.e8.parent && I.oe.fU(this.e8);
            this.e8.set_x(a + this.x -
                this.oU);
            this.e8.set_y(b + this.y - this.qz);
            this.oC.set_width(this.width);
            this.oC.set_height(this.height)
        },
        ik: yb
    });
    var Ha = function() {
        D.call(this)
    };
    g["dom.StringField"] = Ha;
    Ha.be = !0;
    Ha.pc = D;
    Ha.prototype = m(D.prototype, {
        finish: function() {
            null != this.pM && this.pM(this.l9)
        },
        get_value: function() {
            return this.l9
        },
        set_value: function(a) {
            return this.set_l9(a)
        },
        ik: Ha
    });
    var Fb = function() {};
    g["haxe.IMap"] = Fb;
    Fb.be = !0;
    var Gb = function(a, b) {
        this.high = a;
        this.low = b
    };
    g["haxe._Int64.___Int64"] = Gb;
    Gb.be = !0;
    Gb.prototype = {
        ik: Gb
    };
    var eb = function() {};
    g["haxe.Resource"] = eb;
    eb.be = !0;
    eb.an = function() {
        for (var a = [], b = 0, c = eb.content; b < c.length;) {
            var d = c[b];
            ++b;
            a.push(d.name)
        }
        return a
    };
    var Ba = function() {
        this.eX = {}
    };
    g["haxe.ds.IntMap"] = Ba;
    Ba.be = !0;
    Ba.kR = [Fb];
    Ba.prototype = {
        ik: Ba
    };
    var Na = function() {
        this.eX = {};
        this.eX.hm = {}
    };
    g["haxe.ds.ObjectMap"] = Na;
    Na.be = !0;
    Na.kR = [Fb];
    Na.prototype = {
        set: function(a, b) {
            var c = a.i6 || (a.i6 = ++Na.count);
            this.eX[c] = b;
            this.eX.hm[c] = a
        },
        remove: function(a) {
            a = a.i6;
            if (null == this.eX.hm[a]) return !1;
            delete this.eX[a];
            delete this.eX.hm[a];
            return !0
        },
        ik: Na
    };
    var Y = function() {
        this.eX = {}
    };
    g["haxe.ds.StringMap"] = Y;
    Y.be = !0;
    Y.kR = [Fb];
    Y.prototype = {
        set: function(a, b) {
            null != Tb[a] ? this._U(a, b) : this.eX[a] = b
        },
        get: function(a) {
            return null != Tb[a] ? this.mL(a) : this.eX[a]
        },
        d5: function(a) {
            return null != Tb[a] ? this.a6(a) : this.eX.hasOwnProperty(a)
        },
        _U: function(a, b) {
            null == this.n8 && (this.n8 = {});
            this.n8["$" + a] = b
        },
        mL: function(a) {
            return null == this.n8 ? null : this.n8["$" + a]
        },
        a6: function(a) {
            return null == this.n8 ? !1 : this.n8.hasOwnProperty("$" + a)
        },
        remove: function(a) {
            if (null !=
                Tb[a]) {
                a = "$" + a;
                if (null == this.n8 || !this.n8.hasOwnProperty(a)) return !1;
                delete this.n8[a]
            } else {
                if (!this.eX.hasOwnProperty(a)) return !1;
                delete this.eX[a]
            }
            return !0
        },
        keys: function() {
            var a = this.nY();
            return w.d$(a)
        },
        nY: function() {
            var a = [],
                b;
            for (b in this.eX) this.eX.hasOwnProperty(b) && a.push(b);
            if (null != this.n8)
                for (b in this.n8) 36 == b.charCodeAt(0) && a.push(b.substr(1));
            return a
        },
        ik: Y
    };
    var Ub = function() {};
    g["haxe.io.Eof"] = Ub;
    Ub.be = !0;
    Ub.prototype = {
        toString: function() {
            return "Eof"
        },
        ik: Ub
    };
    var fa = g["haxe.io.Error"] = {
        qV: !0,
        dO: ["Blocked", "Overflow", "OutsideBounds", "Custom"]
    };
    fa.eU = ["Blocked", 0];
    fa.eU.toString = pa;
    fa.eU.nF = fa;
    fa.ic = ["Overflow", 1];
    fa.ic.toString = pa;
    fa.ic.nF = fa;
    fa.hE = ["OutsideBounds", 2];
    fa.hE.toString = pa;
    fa.hE.nF = fa;
    fa.Y = function(a) {
        a = ["Custom", 3, a];
        a.nF = fa;
        a.toString = pa;
        return a
    };
    var sa = function() {};
    g["haxe.io.FPHelper"] = sa;
    sa.be = !0;
    sa.cG = function(a) {
        var b = a >>> 23 & 255,
            c = a & 8388607;
        return 0 == c && 0 == b ? 0 : (1 - (a >>> 31 << 1)) * (1 + Math.pow(2, -23) * c) * Math.pow(2, b - 127)
    };
    sa.$V = function(a) {
        if (0 == a) return 0;
        var b;
        b = 0 > a ? -a : a;
        var c = Math.floor(Math.log(b) / .6931471805599453); - 127 > c ? c = -127 : 128 < c && (c = 128);
        return (0 > a ? -2147483648 : 0) | c + 127 << 23 | Math.round(8388608 * (b / Math.pow(2, c) - 1)) & 8388607
    };
    sa.fl = function(a, b) {
        var c = (b >> 20 & 2047) - 1023,
            d = 4294967296 * (b & 1048575) + 2147483648 * (a >>> 31) + (a & 2147483647);
        return 0 == d && -1023 == c ? 0 : (1 - (b >>> 31 << 1)) * (1 + Math.pow(2, -52) * d) * Math.pow(2, c)
    };
    sa.cp = function(a) {
        var b = sa.hj;
        if (0 == a) b.low = 0, b.high = 0;
        else {
            var c;
            c = 0 > a ? -a : a;
            var d = Math.floor(Math.log(c) / .6931471805599453);
            c = Math.round(4503599627370496 *
                (c / Math.pow(2, d) - 1));
            b.low = c | 0;
            b.high = (0 > a ? -2147483648 : 0) | d + 1023 << 20 | c / 4294967296 | 0
        }
        return b
    };
    var G = function(a) {
        Error.call(this);
        this.gY = a;
        Object.prototype.hasOwnProperty.call(a, "name") ? this.name = xa.ih(a, "name") : this.name = "Error";
        Object.prototype.hasOwnProperty.call(a, "message") ? this.message = xa.ih(a, "message") : this.message = C.string(a);
        Error.la && Error.la(this, G)
    };
    g["js._Boot.HaxeError"] = G;
    G.be = !0;
    G.pc = Error;
    G.prototype = m(Error.prototype, {
        ik: G
    });
    var E = function() {};
    g["js.Boot"] = E;
    E.be = !0;
    E.$B = function(a) {
        if (a instanceof Array && null == a.nF) return Array;
        var b = a.ik;
        if (null != b) return b;
        a = E.cW(a);
        return null != a ? E.l6(a) : null
    };
    E.o2 = function(a, b) {
        if (null == a) return "null";
        if (5 <= b.length) return "<...>";
        var c = typeof a;
        "function" == c && (a.be || a.qV) && (c = "object");
        switch (c) {
            case "object":
                if (a instanceof Array) {
                    if (a.nF) {
                        if (2 == a.length) return a[0];
                        c = a[0] + "(";
                        b += "\t";
                        for (var d = 2, e = a.length; d < e;) var f = d++,
                            c = 2 != f ? c + ("," + E.o2(a[f], b)) : c + E.o2(a[f], b);
                        return c + ")"
                    }
                    c = a.length;
                    d = "[";
                    b += "\t";
                    for (e = 0; e < c;) f = e++, d += (0 < f ? "," : "") + E.o2(a[f], b);
                    return d +
                        "]"
                }
                try {
                    d = a.toString
                } catch (h) {
                    return h instanceof G && (h = h.gY), "???"
                }
                if (null != d && d != Object.toString && "function" == typeof d && (c = a.toString(), "[object Object]" != c)) return c;
                c = null;
                d = "{\n";
                b += "\t";
                e = null != a.hasOwnProperty;
                for (c in a) e && !a.hasOwnProperty(c) || "prototype" == c || "__class__" == c || "__super__" == c || "__interfaces__" == c || "__properties__" == c || (2 != d.length && (d += ", \n"), d += b + c + " : " + E.o2(a[c], b));
                b = b.substring(1);
                return d + ("\n" + b + "}");
            case "function":
                return "<function>";
            case "string":
                return a;
            default:
                return String(a)
        }
    };
    E.jj = function(a, b) {
        if (null == a) return !1;
        if (a == b) return !0;
        var c = a.kR;
        if (null != c)
            for (var d = 0, e = c.length; d < e;) {
                var f = d++,
                    f = c[f];
                if (f == b || E.jj(f, b)) return !0
            }
        return E.jj(a.pc, b)
    };
    E.jp = function(a, b) {
        if (null == b) return !1;
        switch (b) {
            case jc:
                return (a | 0) === a;
            case cc:
                return "number" == typeof a;
            case dc:
                return "boolean" == typeof a;
            case String:
                return "string" == typeof a;
            case Array:
                return a instanceof Array && null == a.nF;
            case kc:
                return !0;
            default:
                if (null != a)
                    if ("function" == typeof b) {
                        if (a instanceof b || E.jj(E.$B(a), b)) return !0
                    } else {
                        if ("object" ==
                            typeof b && E.k5(b) && a instanceof b) return !0
                    }
                else return !1;
                return b == lc && null != a.be || b == mc && null != a.qV ? !0 : a.nF == b
        }
    };
    E.cW = function(a) {
        a = E.dJ.call(a).slice(8, -1);
        return "Object" == a || "Function" == a || "Math" == a || "JSON" == a ? null : a
    };
    E.k5 = function(a) {
        return null != E.cW(a)
    };
    E.l6 = function(a) {
        return Function("return typeof " + a + ' != "undefined" ? ' + a + " : null")()
    };
    var ta = function(a) {
        if (a instanceof Array && null == a.nF) this.a = a, this.byteLength = a.length;
        else {
            this.a = [];
            for (var b = 0; b < a;) {
                var c = b++;
                this.a[c] = 0
            }
            this.byteLength =
                a
        }
    };
    g["js.html.compat.ArrayBuffer"] = ta;
    ta.be = !0;
    ta.bF = function(a, b) {
        var c = new Vb(this, a, null == b ? null : b - a),
            d = new bc(c.byteLength);
        (new Vb(d)).set(c);
        return d
    };
    ta.prototype = {
        slice: function(a, b) {
            return new ta(this.a.slice(a, b))
        },
        ik: ta
    };
    var Hb = function(a, b, c) {
        this.kP = a;
        this.offset = null == b ? 0 : b;
        this.length = null == c ? a.byteLength - this.offset : c;
        if (0 > this.offset || 0 > this.length || this.offset + this.length > a.byteLength) throw new G(fa.hE);
    };
    g["js.html.compat.DataView"] = Hb;
    Hb.be = !0;
    Hb.prototype = {
        getInt8: function(a) {
            a =
                this.kP.a[this.offset + a];
            return 128 <= a ? a - 256 : a
        },
        getUint8: function(a) {
            return this.kP.a[this.offset + a]
        },
        getInt16: function(a, b) {
            var c = this.getUint16(a, b);
            return 32768 <= c ? c - 65536 : c
        },
        getUint16: function(a, b) {
            return b ? this.kP.a[this.offset + a] | this.kP.a[this.offset + a + 1] << 8 : this.kP.a[this.offset + a] << 8 | this.kP.a[this.offset + a + 1]
        },
        getInt32: function(a, b) {
            var c = this.offset + a,
                d = this.kP.a[c++],
                e = this.kP.a[c++],
                f = this.kP.a[c++],
                c = this.kP.a[c++];
            return b ? d | e << 8 | f << 16 | c << 24 : c | f << 8 | e << 16 | d << 24
        },
        getUint32: function(a,
            b) {
            var c = this.getInt32(a, b);
            return 0 > c ? c + 4294967296 : c
        },
        getFloat32: function(a, b) {
            return sa.cG(this.getInt32(a, b))
        },
        getFloat64: function(a, b) {
            var c = this.getInt32(a, b),
                d = this.getInt32(a + 4, b);
            return sa.fl(b ? c : d, b ? d : c)
        },
        setInt8: function(a, b) {
            this.kP.a[a + this.offset] = 0 > b ? b + 128 & 255 : b & 255
        },
        setUint8: function(a, b) {
            this.kP.a[a + this.offset] = b & 255
        },
        setInt16: function(a, b, c) {
            this.setUint16(a, 0 > b ? b + 65536 : b, c)
        },
        setUint16: function(a, b, c) {
            a += this.offset;
            c ? (this.kP.a[a] = b & 255, this.kP.a[a++] = b >> 8 & 255) : (this.kP.a[a++] =
                b >> 8 & 255, this.kP.a[a] = b & 255)
        },
        setInt32: function(a, b, c) {
            this.setUint32(a, b, c)
        },
        setUint32: function(a, b, c) {
            a += this.offset;
            c ? (this.kP.a[a++] = b & 255, this.kP.a[a++] = b >> 8 & 255, this.kP.a[a++] = b >> 16 & 255, this.kP.a[a++] = b >>> 24) : (this.kP.a[a++] = b >>> 24, this.kP.a[a++] = b >> 16 & 255, this.kP.a[a++] = b >> 8 & 255, this.kP.a[a++] = b & 255)
        },
        setFloat32: function(a, b, c) {
            this.setUint32(a, sa.$V(b), c)
        },
        setFloat64: function(a, b, c) {
            b = sa.cp(b);
            c ? (this.setUint32(a, b.low), this.setUint32(a, b.high)) : (this.setUint32(a, b.high), this.setUint32(a,
                b.low))
        },
        ik: Hb
    };
    var Da = function() {};
    g["js.html.compat.Uint8Array"] = Da;
    Da.be = !0;
    Da.nk = function(a, b, c) {
        if ("number" == typeof a) {
            c = [];
            for (b = 0; b < a;) {
                var d = b++;
                c[d] = 0
            }
            c.byteLength = c.length;
            c.byteOffset = 0;
            c.buffer = new ta(c)
        } else if (E.jp(a, ta)) null == b && (b = 0), null == c && (c = a.byteLength - b), c = 0 == b ? a.a : a.a.slice(b, b + c), c.byteLength = c.length, c.byteOffset = b, c.buffer = a;
        else if (a instanceof Array && null == a.nF) c = a.slice(), c.byteLength = c.length, c.byteOffset = 0, c.buffer = new ta(c);
        else throw new G("TODO " + C.string(a));
        c.subarray =
            Da.dp;
        c.set = Da.ar;
        return c
    };
    Da.ar = function(a, b) {
        if (E.jp(a.buffer, ta)) {
            if (a.byteLength + b > this.byteLength) throw new G("set() outside of range");
            for (var c = 0, d = a.byteLength; c < d;) {
                var e = c++;
                this[e + b] = a[e]
            }
        } else if (a instanceof Array && null == a.nF) {
            if (a.length + b > this.byteLength) throw new G("set() outside of range");
            c = 0;
            for (d = a.length; c < d;) e = c++, this[e + b] = a[e]
        } else throw new G("TODO");
    };
    Da.dp = function(a, b) {
        var c = Da.nk(this.slice(a, b));
        c.byteOffset = a;
        return c
    };
    var Ib = function() {
        this.$m = !0;
        this.ds = new Y;
        this.font =
            new Y;
        this.I = new Y
    };
    g["openfl.AssetCache"] = Ib;
    Ib.be = !0;
    Ib.prototype = {
        get_enabled: function() {
            return this.$m
        },
        ik: Ib
    };
    var F = function() {};
    g["openfl.Assets"] = F;
    F.be = !0;
    F.nh = function(a, b) {
        null == b && (b = !0);
        F.initialize();
        var c = null,
            d, e;
        if (b && (d = F.g1).get_enabled() && d.ds.d5(a) && F.kG(e = F.g1.ds.get(a))) return e;
        var f = a.indexOf(":");
        e = a.substring(0, f);
        f = a.substring(f + 1);
        e = F.lL(e);
        null != e ? e.d5(f, v.IMAGE) ? (c = e.nh(f), b ? d.get_enabled() && d.ds.set(a, c) : c = c.bp()) : null : null;
        return c
    };
    F.lL = function(a) {
        return F.co.get(null ==
            a || "" == a ? "default" : a)
    };
    F.initialize = function() {
        F.iR || (F.jf("default", new jb), F.iR = !0)
    };
    F.kG = function(a) {
        return !0
    };
    F.jf = function(a, b) {
        F.co.d5(a) && F.n1(a);
        F.co.set(a, b)
    };
    F.n1 = function(a) {
        F.initialize();
        for (var b = F.g1.ds.keys(); b.qu();) {
            var c = b.$6();
            c.substring(0, c.indexOf(":")) == a && F.g1.ds.remove(c)
        }
        F.co.remove(a)
    };
    var v = g["openfl.AssetType"] = {
        qV: !0,
        dO: "BINARY FONT IMAGE MOVIE_CLIP MUSIC SOUND TEMPLATE TEXT".split(" ")
    };
    v.BINARY = ["BINARY", 0];
    v.BINARY.toString = pa;
    v.BINARY.nF = v;
    v.FONT = ["FONT", 1];
    v.FONT.toString =
        pa;
    v.FONT.nF = v;
    v.IMAGE = ["IMAGE", 2];
    v.IMAGE.toString = pa;
    v.IMAGE.nF = v;
    v.MOVIE_CLIP = ["MOVIE_CLIP", 3];
    v.MOVIE_CLIP.toString = pa;
    v.MOVIE_CLIP.nF = v;
    v.MUSIC = ["MUSIC", 4];
    v.MUSIC.toString = pa;
    v.MUSIC.nF = v;
    v.SOUND = ["SOUND", 5];
    v.SOUND.toString = pa;
    v.SOUND.nF = v;
    v.TEMPLATE = ["TEMPLATE", 6];
    v.TEMPLATE.toString = pa;
    v.TEMPLATE.nF = v;
    v.TEXT = ["TEXT", 7];
    v.TEXT.toString = pa;
    v.TEXT.nF = v;
    var zb = function() {
        this.iK = null;
        this.il = !1;
        this.bw = null;
        U.call(this);
        var a = this.i1.style,
            b = window;
        a.position = "absolute";
        a.overflow = "hidden";
        a.left =
            a.top = "0";
        a.width = a.height = "100%";
        this.pP = new P;
        b.addEventListener("click", u(this, this._7));
        b.addEventListener("mousedown", u(this, this._7));
        b.addEventListener("mouseup", u(this, this._7));
        b.addEventListener("mousemove", u(this, this._7));
        b.addEventListener("mousewheel", u(this, this.n_));
        b.addEventListener("DOMMouseScroll", u(this, this.n_));
        b.addEventListener("touchmove", this._4(0));
        b.addEventListener("touchstart", this._4(1));
        b.addEventListener("touchend", this._4(2));
        b.addEventListener("touchcancel", this._4(2));
        this.iN = [];
        this.j1 = [];
        this.hT = [];
        this.qP = [];
        this.$W = [];
        for (a = -1; 3 > ++a;) this.qP[a] = !1, this.$W[a] = this.pq(a)
    };
    g["openfl.display.Stage"] = zb;
    zb.be = !0;
    zb.pc = U;
    zb.prototype = m(U.prototype, {
        eG: function(a) {
            var b = this.jM,
                c;
            a.e5 = this.pP.x;
            a.q8 = this.pP.y;
            this.kv(this.iN, a, this.j1, this.hT);
            this.jM = c = a.pA;
            b != c && (null != b && b.dispatchEvent(this.hb(a, "mouseOut")), null != c && c.dispatchEvent(this.hb(a, "mouseOver")))
        },
        pp: function(a, b, c) {
            a.e5 = b;
            a.q8 = c;
            this.kv(this.iN, a, this.j1, this.hT)
        },
        pq: function(a) {
            var b = this;
            return function() {
                b.qP[a] = !1
            }
        },
        hb: function(a, b) {
            var c = new va(b, a.bubbles, a.cancelable, a.$S, a._W, a.pA, a.ctrlKey, a.altKey, a.shiftKey, a.oj, a._a);
            c.e5 = a.e5;
            c.q8 = a.q8;
            return c
        },
        lf: function(a, b) {
            return new va(b, !0, !1, null, null, null, a.ctrlKey, a.altKey, a.shiftKey)
        },
        ey: function(a, b, c) {
            b = new Ab(c, !0, !1, b.identifier, !1, null, null, b.radiusX, b.radiusY, b.force, null, a.ctrlKey, a.altKey, a.shiftKey);
            b.bK = a;
            return b
        },
        eP: function(a, b, c) {
            var d = this.pP,
                d = d.x == b && d.y == c;
            if (0 <= a && d && this.qP[a]) return !0;
            d || this.pP.gv(b, c);
            0 <= a && !this.qP[a] && (this.qP[a] = !0, window.setTimeout(this.$W[a], 0));
            1 == a ? this.aC ? this.eG(this.hb(this.n0, "mouseUp")) : this.aC = !0 : 2 == a && (this.aC ? this.aC = !1 : this.eG(new va("mouseDown")));
            return !1
        },
        _4: function(a) {
            var b = this;
            return function(c) {
                b.p6(c, a)
            }
        },
        p6: function(a, b) {
            var c = a.targetTouches,
                d = c.length,
                e = a.changedTouches,
                f = e.length,
                c = 0 < d ? c[0] : 0 < f ? e[0] : null,
                h;
            a.preventDefault();
            this.il = !0;
            null != c && (0 == b || 1 == b && d == f || 2 == b && 0 == d && 0 < f) && !this.eP(b, c.pageX, c.pageY) && (this.n0 = new va(1 == b ? "mouseDown" : 2 == b ? "mouseUp" : "mouseMove"), this.n0.bK =
                a, this.eG(this.n0), 2 == b && (d = new va("mouseClick"), d.bK = a, this.eG(d)));
            if (0 < f) {
                switch (b) {
                    case 1:
                        c = "touchBegin";
                        break;
                    case 2:
                        c = "touchEnd";
                        break;
                    default:
                        c = "touchMove"
                }
                for (d = -1; ++d < f;) h = e[d], this.pp(this.ey(a, h, c), h.pageX, h.pageY)
            }
        },
        n_: function(a) {
            var b = this.lf(a, "mouseWheel"),
                c = a.wheelDelta,
                c = null != c ? 40 < Math.abs(c) ? Math.round(c / 40) : 0 > c ? -1 : 0 < c ? 1 : 0 : -a.detail;
            b._a = c;
            this.pP.gv(a.pageX, a.pageY);
            this.eG(b)
        },
        _7: function(a) {
            var b = null,
                c = -1,
                d;
            if ("mousemove" == a.type) b = "mouseMove", c = 0;
            else switch (d = a.button, a.type) {
                case "click":
                    0 ==
                        d ? b = "mouseClick" : 1 == d ? b = "rightClick" : 2 == d && (b = "middleClick");
                    break;
                case "mousedown":
                    0 == d ? b = "mouseDown" : 1 == d ? b = "middleMouseDown" : 2 == d && (b = "rightMouseDown");
                    c = 1;
                    break;
                case "mouseup":
                    0 == d ? b = "mouseUp" : 1 == d ? b = "middleMouseUp" : 2 == d && (b = "rightMouseUp");
                    c = 2;
                    break;
                default:
                    return
            }
            this.eP(c, a.pageX, a.pageY) || (this.n0 = new va(b), this.n0.bK = a, this.eG(this.n0))
        },
        jF: function(a, b, c, d) {
            return !d || this.visible
        },
        addEventListener: function(a, b, c, d, e) {
            null == e && (e = !1);
            null == d && (d = 0);
            null == c && (c = !1);
            var f = this.i1;
            this.i1 = window;
            U.prototype.addEventListener.call(this, a, b, c, d, e);
            this.i1 = f
        },
        removeEventListener: function(a, b, c) {
            null == c && (c = !1);
            var d = this.i1;
            this.i1 = window;
            U.prototype.removeEventListener.call(this, a, b, c);
            this.i1 = d
        },
        set_focus: function(a) {
            null != a ? a.qH() : this.i1.blur();
            return a
        },
        get_n9: function() {
            return window.innerWidth
        },
        get_ce: function() {
            return window.innerHeight
        },
        get_ew: function() {
            return this
        },
        set_bw: function(a) {
            this.bw != a && (null != this.iK && (0 >= this.bw ? window.ie(this.iK) : window.clearInterval(this.iK)), 0 >= (this.bw =
                a) ? this.iK = window.ec(u(this, this.iw)) : this.iK = window.setInterval(u(this, this.iw), C["int"](Math.max(0, 1E3 / a))));
            return a
        },
        iw: function() {
            l.fR();
            for (var a = -1; ++a < l.jI;) l.hc[a](), l.hc[a] = null;
            l.jI = 0;
            this.ii(new M("enterFrame"));
            0 >= this.bw && (this.iK = window.ec(u(this, this.iw)))
        },
        ik: zb
    });
    var Eb = function(a) {
        if (null == a) throw new G("Cannot create Transform with no DisplayObject.");
        this.P = a;
        this.ez = new X;
        this.$_ = new X;
        this.set_lX(new Oa)
    };
    g["openfl.geom.Transform"] = Eb;
    Eb.be = !0;
    Eb.prototype = {
        set_lX: function(a) {
            return this.lX =
                a
        },
        get_matrix: function() {
            return this.ez.bp()
        },
        ik: Eb
    };
    var X = function(a, b, c, d, e, f) {
        this.a = null == a ? 1 : a;
        this.b = null == b ? 0 : b;
        this.c = null == c ? 0 : c;
        this.d = null == d ? 1 : d;
        this.nG = null == e ? 0 : e;
        this.lS = null == f ? 0 : f
    };
    g["openfl.geom.Matrix"] = X;
    X.be = !0;
    X.ci = function() {
        var a = X.lH;
        return 0 < a.length ? a.pop() : new X
    };
    X.prototype = {
        bp: function() {
            return new X(this.a, this.b, this.c, this.d, this.nG, this.lS)
        },
        mU: function() {
            this.a = this.d = 1;
            this.b = this.c = this.nG = this.lS = 0
        },
        eh: function() {
            return 1 == this.a && 1 == this.d && 0 == this.nG && 0 == this.lS &&
                0 == this.b && 0 == this.c
        },
        copy: function(a) {
            this.a = a.a;
            this.b = a.b;
            this.c = a.c;
            this.d = a.d;
            this.nG = a.nG;
            this.lS = a.lS
        },
        gp: function() {
            var a, b = this.a * this.d - this.b * this.c;
            0 == b ? (this.a = this.b = this.c = this.d = 0, this.nG = -this.nG, this.lS = -this.lS) : (b = 1 / b, a = this.d * b, this.d = this.a * b, this.a = a, this.b *= -b, this.c *= -b, a = -this.a * this.nG - this.c * this.lS, this.lS = -this.b * this.nG - this.d * this.lS, this.nG = a)
        },
        translate: function(a, b) {
            this.nG += a;
            this.lS += b
        },
        rotate: function(a) {
            var b = Math.cos(a);
            a = Math.sin(a);
            var c;
            c = this.a * b - this.b *
                a;
            this.b = this.a * a + this.b * b;
            this.a = c;
            c = this.c * b - this.d * a;
            this.d = this.c * a + this.d * b;
            this.c = c;
            c = this.nG * b - this.lS * a;
            this.lS = this.nG * a + this.lS * b;
            this.nG = c
        },
        scale: function(a, b) {
            this.a *= a;
            this.b *= b;
            this.c *= a;
            this.d *= b;
            this.nG *= a;
            this.lS *= b
        },
        concat: function(a) {
            var b;
            b = this.a * a.a + this.b * a.c;
            this.b = this.a * a.b + this.b * a.d;
            this.a = b;
            b = this.c * a.a + this.d * a.c;
            this.d = this.c * a.b + this.d * a.d;
            this.c = b;
            b = this.nG * a.a + this.lS * a.c + a.nG;
            this.lS = this.nG * a.b + this.lS * a.d + a.lS;
            this.nG = b
        },
        ik: X
    };
    var Oa = function(a, b, c, d, e, f, h, g) {
        this.lx =
            null != a ? a : 1;
        this.f0 = null != b ? b : 1;
        this.kK = null != c ? c : 1;
        this.bm = null != d ? d : 1;
        this.ix = null != e ? e : 0;
        this.fJ = null != f ? f : 0;
        this.$l = null != h ? h : 0;
        this.$P = null != g ? g : 0
    };
    g["openfl.geom.ColorTransform"] = Oa;
    Oa.be = !0;
    Oa.prototype = {
        oz: function() {
            return 0 == this.lx && 0 == this.f0 && 0 == this.kK && (0 == this.bm || 0 == this.$P)
        },
        bh: function() {
            return 1 == this.lx && 1 == this.f0 && 1 == this.kK && 0 == this.ix && 0 == this.fJ && 0 == this.$l && 0 == this.$P
        },
        ik: Oa
    };
    var l = function() {};
    g["openfl.Lib"] = l;
    l.be = !0;
    l.g$ = function() {
        l.hc = [];
        l.jI = 0;
        var a = window,
            b = "equestAnimationFrame";
        l.fR();
        a.ec = a["r" + b] || a["webkitR" + b] || a["mozR" + b] || a["oR" + b] || a["msR" + b] || function(b) {
            return a.setTimeout(b, C["int"](700 / l.get_ew().bw))
        };
        b = "ancelAnimationFrame";
        a.ie = a["c" + b] || a["webkitC" + b] || a["mozC" + b] || a["oC" + b] || a["msC" + b] || function(b) {
            a.clearTimeout(b)
        }
    };
    l.fR = function() {
        return C["int"](new Date - l.kj)
    };
    l.ns = function(a) {
        var b = document.createElement(a),
            c = b.style;
        c.position = "absolute";
        switch (a) {
            case "canvas":
                c.setProperty("-webkit-touch-callout", "none", null);
                l.kW(c, "user-select", "none", 47);
                break;
            case "input":
            case "textarea":
                c.outline = "none"
        }
        return b
    };
    l.lC = function() {
        if (null == l.mc) {
            var a = l.ns("div");
            l.get_ew().i1.appendChild(a);
            a.style.visibility = "hidden";
            a.appendChild(l.mc = l.ns("div"))
        }
        return l.mc
    };
    l.get_iv = function() {
        null == l.$7 && l.get_ew().fU(l.$7 = new Bb);
        return l.$7
    };
    l.get_ew = function() {
        null == l.iX && document.body.appendChild((l.iX = new zb).i1);
        return l.iX
    };
    l.dQ = function(a) {
        l.hc[l.jI++] = a
    };
    l.lK = function(a) {
        return "rgba(" + (a >> 16 & 255) + "," + (a >> 8 & 255) + "," + (a & 255) + "," + ((a >> 24 & 255) / 255).toFixed(4) +
            ")"
    };
    l.bO = function(a, b) {
        return "rgba(" + (a >> 16 & 255) + "," + (a >> 8 & 255) + "," + (a & 255) + "," + b.toFixed(4) + ")"
    };
    l.kW = function(a, b, c, d) {
        d || (d = 31);
        d & 1 && a.setProperty(b, c, null);
        d & 2 && a.setProperty("-webkit-" + b, c, null);
        d & 4 && a.setProperty("-moz-" + b, c, null);
        d & 8 && a.setProperty("-ms-" + b, c, null);
        d & 16 && a.setProperty("-o-" + b, c, null);
        d & 32 && a.setProperty("-khtml-" + b, c, null)
    };
    var Rb = function() {};
    g["openfl.bitfive.NodeTools"] = Rb;
    Rb.be = !0;
    Rb.createCanvasElement = function() {
        var a;
        a = window.document.createElement("canvas");
        var b =
            a.style;
        b.position = "absolute";
        b.setProperty("-webkit-touch-callout", "none", null);
        Wb.oa(b, "user-select", "none", 63);
        return a
    };
    var Wb = function() {};
    g["openfl.bitfive.StyleTools"] = Wb;
    Wb.be = !0;
    Wb.oa = function(a, b, c, d) {
        null == d && (d = 31);
        d & 1 && a.setProperty("" + b, c, null);
        d & 2 && a.setProperty("-webkit-" + b, c, null);
        d & 4 && a.setProperty("-moz-" + b, c, null);
        d & 8 && a.setProperty("-ms-" + b, c, null);
        d & 16 && a.setProperty("-o-" + b, c, null);
        d & 32 && a.setProperty("-khtml-" + b, c, null)
    };
    var Za = function(a, b) {
        this.i1 = l.ns("a");
        U.call(this);
        this.set_href(a);
        this.set_target(b)
    };
    g["openfl.display.Anchor"] = Za;
    Za.be = !0;
    Za.pc = V;
    Za.prototype = m(V.prototype, {
        set_href: function(a) {
            this.href != a && (this.i1.href = this.href = a);
            return a
        },
        set_target: function(a) {
            this.target != a && (this.i1.target = this.target = a);
            return a
        },
        ik: Za
    });
    var Pa = function(a, b, c) {
        T.call(this);
        this.set_ds(a)
    };
    g["openfl.display.Bitmap"] = Pa;
    Pa.be = !0;
    Pa.kR = [ua];
    Pa.pc = T;
    Pa.prototype = m(T.prototype, {
        set_ds: function(a) {
            null != this.ds && this.i1.removeChild(this.ds.i1);
            null != a && this.i1.appendChild(a.gd());
            return this.ds = a
        },
        get_width: function() {
            return null != this.pI ? this.pI : null != this.ds ? this.ds.i1.width : 0
        },
        get_height: function() {
            return null != this.ln ? this.ln : null != this.ds ? this.ds.i1.height : 0
        },
        lV: function(a, b, c, d, e, f, h) {
            this.ds.lV(a, b, c, d, e, f, h)
        },
        jF: function(a, b, c, d) {
            return (!d || this.visible) && null != this.ds && 0 <= a && 0 <= b && a < this.ds.i1.width && b < this.ds.i1.height
        },
        ik: Pa
    });
    var Xb = function() {};
    g["openfl.display.IGraphics"] = Xb;
    Xb.be = !0;
    Xb.kR = [ua];
    var Wa = function() {
        this.hl = !1;
        this.j2 = !0;
        this.i1 = l.ns("canvas");
        this.context = this.i1.getContext("2d", null);
        this.context.save();
        this.e$ = new ka;
        this.on();
        this.bU = [];
        this.g_ = [];
        this.$z = [];
        this.lineWidth = this.i2 = this.e2 = this.a7 = 0
    };
    g["openfl.display.Graphics"] = Wa;
    Wa.be = !0;
    Wa.kR = [Xb, ua];
    Wa.prototype = {
        oh: function() {
            var a = this.i1,
                b = this.i1.style,
                c = this.context,
                d = this.e$,
                e = ~~(d.x - 2),
                f = ~~(d.y - 2),
                h = Math.ceil(d.width + 4),
                g = Math.ceil(d.height + 4);
            this.j2 = !0;
            this.hl = !1;
            if (0 >= d.width || 0 >= d.height) a.width = a.height = 1, b.top = b.left = "0";
            else {
                if (this.offsetX != e || this.offsetY != f) b.left =
                    (this.offsetX = e) + "px", b.top = (this.offsetY = f) + "px";
                h != a.width || g != a.height ? (a.width = h, a.height = g) : c.clearRect(0, 0, h, g);
                c.save();
                c.translate(-e, -f);
                this.dK(a, c);
                c.restore()
            }
        },
        hC: function() {
            this.hl && this.oh()
        },
        p2: function() {
            l.dQ(u(this, this.hC));
            this.hl = !0
        },
        set_i7: function(a) {
            this.i7 != a && (this.i7 = a, this.j2 || this.p2());
            return a
        },
        on: function() {
            this.e$.$q();
            this.p9()
        },
        hQ: function(a, b, c, d) {
            var e;
            a < (e = this.e$.x) && (e -= a, this.e$.x -= e, this.e$.width += e);
            b < (e = this.e$.y) && (e -= b, this.e$.y -= e, this.e$.height += e);
            c > (e = this.e$.get_right()) && (this.e$.width += c - e);
            d > (e = this.e$.get_bottom()) && (this.e$.height += d - e);
            this.p9()
        },
        p9: function() {
            this.j2 && (this.j2 = !1, this.hl || null == this.i7 || null == this.i7.get_ew() || this.p2())
        },
        clear: function() {
            for (var a = 0; a < this.a7;) this.$z[a++] = null;
            this.lineWidth = this.i2 = this.e2 = this.a7 = 0;
            this.on();
            this.p9()
        },
        _f: function(a, b) {
            this.bU[this.i2++] = 2;
            var c = l.bO(null != a ? a : 0, null != b ? b : 1);
            this.$z[this.a7++] = c
        },
        aS: function() {
            this.bU[this.i2++] = 9;
            this.p9()
        },
        oy: function(a, b, c, d) {
            this.bU[this.i2++] =
                13;
            var e = this.g_,
                f = this.e2;
            e[f++] = a;
            e[f++] = b;
            e[f++] = c;
            e[f++] = d;
            this.e2 = f;
            e = this.lineWidth / 2;
            this.hQ(a - e, b - e, a + c + e, b + d + e)
        },
        e1: function(a, b, c) {
            this.bU[this.i2++] = 14;
            var d = this.g_,
                e = this.e2;
            d[e++] = a;
            d[e++] = b;
            d[e++] = c;
            this.e2 = e;
            c += this.lineWidth / 2;
            this.hQ(a - c, b - c, a + c, b + c)
        },
        lV: function(a, b, c, d, e, f, h) {
            b.save();
            null != c && b.transform(c.a, c.b, c.c, c.d, c.nG, c.lS);
            this.dK(a, b);
            b.restore()
        },
        jF: function(a, b, c) {
            if (this.e$.contains(a, b)) {
                if (c) {
                    this.j2 || this.oh();
                    try {
                        return 0 != this.context.getImageData(a - this.offsetX,
                            b - this.offsetY, 1, 1).data[3]
                    } catch (d) {
                        d instanceof G && (d = d.gY)
                    }
                }
                return !0
            }
            return !1
        },
        jq: function(a, b, c, d, e) {
            c & 1 && (b.closePath(), c & 4 ? (b.save(), b.transform(d.a, d.b, d.c, d.d, d.nG, d.lS), b.fillStyle = b.createPattern(e, c & 8 ? "repeat" : "no-repeat"), b.fill(), b.restore()) : b.fill());
            c & 2 && b.stroke();
            b.beginPath();
            return c
        },
        dK: function(a, b) {
            var c = 0,
                d = this.oR,
                e, f, h, g = 0,
                k = null,
                A = this.bU,
                l = -1,
                q = A.length - 1,
                n = this.$z,
                r = -1,
                y = this.g_,
                m = -1;
            null == d && (this.oR = d = new X);
            for (b.save(); l < q;) switch (f = A[++l]) {
                case 1:
                    0 < g && (c = this.jq(a,
                        b, c, d, k));
                    b.lineWidth = h = y[++m];
                    0 < h ? (c |= 2, b.strokeStyle = n[++r], 2 == (f = A[++l]) ? b.lineCap = "butt" : b.lineCap = 1 == f ? "square" : "round", 2 == (f = A[++l]) ? b.lineJoin = "bevel" : b.lineJoin = 1 == f ? "miter" : "round") : (c &= -3, b.strokeStyle = null);
                    break;
                case 2:
                case 3:
                case 4:
                    0 < g && (c = this.jq(a, b, c, d, k));
                    c |= 1;
                    3 == f ? (k = n[++r].gd(), f = A[++l], 0 != A[++l] ? (c = 0 != f ? c | 8 : c & -9, d.a = y[++m], d.b = y[++m], d.c = y[++m], d.d = y[++m], d.nG = y[++m], d.lS = y[++m], c |= 4) : (b.fillStyle = b.createPattern(k, 0 != f ? "repeat" : "no-repeat"), c &= -5)) : (b.fillStyle = n[++r], c &= -5);
                    g = 0;
                    break;
                case 9:
                    0 < g && (c = this.jq(a, b, c, d, k), g = 0);
                    c &= -2;
                    break;
                case 10:
                    b.moveTo(y[++m], y[++m]);
                    g++;
                    break;
                case 11:
                    b.lineTo(y[++m], y[++m]);
                    g++;
                    break;
                case 12:
                    b.quadraticCurveTo(y[++m], y[++m], y[++m], y[++m]);
                    g++;
                    break;
                case 13:
                    b.rect(y[++m], y[++m], y[++m], y[++m]);
                    g++;
                    break;
                case 14:
                    f = y[++m];
                    h = y[++m];
                    var p = y[++m];
                    0 > p && (p = -p);
                    b.moveTo(f + p, h);
                    0 != p && b.arc(f, h, p, 0, 2 * Math.PI, !0);
                    g++;
                    break;
                case 17:
                    f = y[++m];
                    h = y[++m];
                    var x = y[++m],
                        w = y[++m],
                        p = f + x / 2,
                        u = h + w / 2,
                        v = f + x,
                        z = h + w,
                        x = .275892 * x,
                        w = .275892 * w;
                    b.moveTo(p, h);
                    b.bezierCurveTo(p +
                        x, h, v, u - w, v, u);
                    b.bezierCurveTo(v, u + w, p + x, z, p, z);
                    b.bezierCurveTo(p - x, z, f, u + w, f, u);
                    b.bezierCurveTo(f, u - w, p - x, h, p, h);
                    g++;
                    break;
                case 15:
                    f = y[++m];
                    h = y[++m];
                    p = y[++m];
                    u = y[++m];
                    v = y[++m];
                    z = y[++m];
                    null == z ? (b.moveTo(f + v, h + u), b.arcTo(f + p - v, h + u - v, f + p, h + u - v, v), b.arcTo(f + p, h + v, f + p - v, h, v), b.arcTo(f + v, h, f, h + v, v), b.arcTo(f + v, h + u - v, f + v, h + u, v)) : (b.moveTo(f + v, h + u), b.lineTo(f + p - v, h + u), b.quadraticCurveTo(f + p, h + u, f + p, h + u - z), b.lineTo(f + p, h + z), b.quadraticCurveTo(f + p, h, f + p - v, h), b.lineTo(f + v, h), b.quadraticCurveTo(f, h, f, h + z),
                        b.lineTo(f, h + u - z), b.quadraticCurveTo(f, h + u, f + v, h + u));
                    g++;
                    break;
                case 16:
                    f = n[++r].gd();
                    w = A[++l];
                    h = 0 != (w & 1);
                    var p = 0 != (w & 2),
                        u = 0 != (w & 8),
                        v = 0 != (w & 16),
                        z = A[++l],
                        B, C, D, H, E, F;
                    b.save();
                    for (b.globalCompositeOperation = 0 != (w & 65536) ? "lighter" : "source-over"; 0 <= --z;) w = y[++m], x = y[++m], B = y[++m], C = y[++m], D = y[++m], H = y[++m], E = y[++m], F = y[++m], b.save(), v ? b.transform(y[++m], y[++m], y[++m], y[++m], w, x) : (b.translate(w, x), h && b.scale(e = y[++m], e), p && b.rotate(y[++m])), u && (b.globalAlpha = y[++m]), b.drawImage(f, D, H, E, F, -B, -C, E, F), b.restore();
                    b.restore();
                    break;
                default:
                    throw new G(4E3 + f);
            }
            0 < g && this.jq(a, b, c, d, k);
            b.restore()
        },
        ik: Wa
    };
    var Jb = function() {};
    g["openfl.display.ILoader"] = Jb;
    Jb.be = !0;
    Jb.prototype = {
        ik: Jb
    };
    var Va = function() {
        U.call(this);
        this.qE = wa.ci(this)
    };
    g["openfl.display.Loader"] = Va;
    Va.be = !0;
    Va.kR = [Jb];
    Va.pc = V;
    Va.prototype = m(V.prototype, {
        load: function(a, b) {
            var c = a.url.split(".");
            0 < c.length && c[c.length - 1].toLowerCase();
            var c = a.url,
                d = c.lastIndexOf(".");
            if (0 > d) throw new G('Extension must be specified, got "' + c + '"');
            var e = !0,
                d = c.substring(d +
                    1);
            switch (d) {
                case "swf":
                    d = "application/x-shockwave-flash";
                    break;
                case "png":
                    d = "image/png";
                    break;
                case "gif":
                    d = "image/gif";
                    break;
                case "jpg":
                case "jpeg":
                    e = !1;
                    d = "image/jpeg";
                    break;
                default:
                    throw new G('Unrecognized extension "' + d + '" in "' + c + '"');
            }
            this.qE.url = c;
            this.qE.$5 = d;
            this.gj = new L(0, 0, e);
            try {
                this.qE.addEventListener("complete", u(this, this.i0), !1), this.gj.jC(a.url, this.qE), this.content = new Pa(this.gj), this.qE.content = this.content, this.fU(this.content)
            } catch (f) {
                f instanceof G && (f = f.gY);
                Pb.log("Error " +
                    C.string(f));
                c = new bb("ioError");
                c.set_currentTarget(this);
                this.qE.dispatchEvent(c);
                return
            }
            null == this.oK && (this.oK = new Fa, this.fU(this.oK))
        },
        i0: function(a) {
            a.set_currentTarget(this);
            this.qE.removeEventListener("complete", u(this, this.i0))
        },
        ik: Va
    });
    var wa = function() {
        this._s = new Y;
        this.fp = this.kI = 0;
        this.$k = !0;
        this.$h = {}
    };
    g["openfl.display.LoaderInfo"] = wa;
    wa.be = !0;
    wa.ci = function(a) {
        var b = new wa;
        null != a ? b.$a = a : b.url = "";
        return b
    };
    wa.pc = ba;
    wa.prototype = m(ba.prototype, {
        ik: wa
    });
    var Bb = function() {
        U.call(this);
        this.enabled = !0;
        this.V = this.F = 0;
        this.ck = wa.ci()
    };
    g["openfl.display.MovieClip"] = Bb;
    Bb.be = !0;
    Bb.pc = V;
    Bb.prototype = m(V.prototype, {
        ik: Bb
    });
    var $a = function(a, b, c, d) {
        null == d && (d = 0);
        null == c && (c = 0);
        null == b && (b = 0);
        null == a && (a = 0);
        U.call(this);
        this.set_width(a);
        this.set_height(b);
        this.set_color(c);
        this.set_c3(d)
    };
    g["openfl.display.RoundRect"] = $a;
    $a.be = !0;
    $a.pc = V;
    $a.prototype = m(V.prototype, {
        get_width: function() {
            return this.pI
        },
        get_height: function() {
            return this.ln
        },
        set_width: function(a) {
            this.pI != a && (this.pI = a,
                this.i1.style.width = a + "px");
            return a
        },
        set_height: function(a) {
            this.ln != a && (this.ln = a, this.i1.style.height = a + "px");
            return a
        },
        set_color: function(a) {
            this.bV != a && (this.bV = a, this.i1.style.backgroundColor = l.lK(a));
            return a
        },
        set_c3: function(a) {
            this.fQ != a && (this.fQ = a, this.i1.style.borderRadius = 0 < a ? a + "px" : "");
            return a
        },
        jF: function(a, b, c, d) {
            return V.prototype.jF.call(this, a, b, c, d) ? !0 : (!d || this.visible) && 0 <= a && 0 <= b && a < this.pI && b < this.ln
        },
        ik: $a
    });
    var Fa = function() {
        (this.h8 = new Wa).set_i7(this);
        this.i1 = this.h8.i1;
        T.call(this)
    };
    g["openfl.display.Shape"] = Fa;
    Fa.be = !0;
    Fa.kR = [ua];
    Fa.pc = T;
    Fa.prototype = m(T.prototype, {
        lV: function(a, b, c, d, e, f, h) {
            this.h8.lV(a, b, c, d, e, f, h)
        },
        set_ew: function(a) {
            var b = null == this.get_ew() && null != a;
            a = T.prototype.set_ew.call(this, a);
            b && this.h8.p9();
            return a
        },
        jF: function(a, b, c, d) {
            return (!d || this.visible) && this.h8.jF(a, b, c)
        },
        ik: Fa
    });
    var M = function(a, b, c) {
        null == c && (c = !1);
        null == b && (b = !1);
        this.type = a;
        this.bubbles = b;
        this.cancelable = c
    };
    g["openfl.events.Event"] = M;
    M.be = !0;
    M.prototype = {
        get_target: function() {
            return this.eu ||
                this.target
        },
        set_target: function(a) {
            return this.eu = a
        },
        set_currentTarget: function(a) {
            return this.g = a
        },
        ik: M
    };
    var bb = function(a, b, c, d) {
        null == d && (d = "");
        null == c && (c = !1);
        null == b && (b = !1);
        M.call(this, a, b, c);
        this.text = d
    };
    g["openfl.events.IOErrorEvent"] = bb;
    bb.be = !0;
    bb.pc = M;
    bb.prototype = m(M.prototype, {
        ik: bb
    });
    var Kb = function() {};
    g["openfl.events.KeyboardEvent"] = Kb;
    Kb.be = !0;
    Kb.pc = M;
    Kb.prototype = m(M.prototype, {
        ik: Kb
    });
    var La = function(a, b, c) {
        M.call(this, a, b, c)
    };
    g["openfl.events.UIEvent"] = La;
    La.be = !0;
    La.pc = M;
    La.prototype =
        m(M.prototype, {
            ik: La
        });
    var va = function(a, b, c, d, e, f, h, g, k, l, m) {
        M.call(this, a, null != b ? b : !0, null != c ? c : !1);
        this.ctrlKey = null != h ? h : !1;
        this.altKey = null != g ? g : !1;
        this.shiftKey = null != k ? k : !1;
        this.pA = f;
        this.oj = null != l ? l : !1;
        this._a = null != m ? m : 0
    };
    g["openfl.events.MouseEvent"] = va;
    va.be = !0;
    va.pc = La;
    va.prototype = m(La.prototype, {
        ik: va
    });
    var Ab = function(a, b, c, d, e, f, h, g, k, l, m, q, p, r) {
        M.call(this, a, b, c);
        this.altKey = p;
        this.shiftKey = r;
        this.ctrlKey = q;
        this.H = d;
        this.R = g;
        this.$f = k;
        this.$g = l
    };
    g["openfl.events.TouchEvent"] = Ab;
    Ab.be = !0;
    Ab.pc = La;
    Ab.prototype = m(La.prototype, {
        ik: Ab
    });
    var ec = function() {};
    g["openfl.filters.BitmapFilter"] = ec;
    ec.be = !0;
    var ka = function(a, b, c, d) {
        null == d && (d = 0);
        null == c && (c = 0);
        null == b && (b = 0);
        null == a && (a = 0);
        this.x = a;
        this.y = b;
        this.width = c;
        this.height = d
    };
    g["openfl.geom.Rectangle"] = ka;
    ka.be = !0;
    ka.prototype = {
        bp: function() {
            return new ka(this.x, this.y, this.width, this.height)
        },
        equals: function(a) {
            return this.x == a.x && this.y == a.y && this.width == a.width && this.height == a.height
        },
        gv: function(a, b, c, d) {
            this.x = a;
            this.y =
                b;
            this.width = c;
            this.height = d
        },
        $q: function() {
            this.width -= 2147483647 - this.x;
            this.x = 2147483647;
            this.width = -2147483648 - this.x; - 2147483648;
            this.height -= 2147483647 - this.y;
            this.y = 2147483647;
            this.height = -2147483648 - this.y; - 2147483648
        },
        get_right: function() {
            return this.x + this.width
        },
        get_bottom: function() {
            return this.y + this.height
        },
        contains: function(a, b) {
            return 0 <= (a -= this.x) && 0 <= (b -= this.y) && a < this.width && b < this.height
        },
        ik: ka
    };
    var Lb = function() {};
    g["openfl.media.Sound"] = Lb;
    Lb.be = !0;
    Lb.pc = ba;
    Lb.prototype = m(ba.prototype, {
        ik: Lb
    });
    var Aa = function(a, b, c) {
        this.description = a;
        this._$ = b;
        this.X = c
    };
    g["openfl.net.FileFilter"] = Aa;
    Aa.be = !0;
    Aa.prototype = {
        ik: Aa
    };
    var Ja = function() {
        this._s = new Y
    };
    g["openfl.net.FileReference"] = Ja;
    Ja.be = !0;
    Ja.pc = ba;
    Ja.prototype = m(ba.prototype, {
        ep: function(a) {
            var b = l.lC(),
                c, d = this.al,
                e, f, h, g, k;
            null == d ? (this.aF = c = document.createElement("input"), this.al = d = document.createElement("form"), this.al.appendChild(c), c.type = "file", c.onchange = u(this, this._t)) : (c = this.aF, d.reset());
            e = "";
            if (null != a) {
                f = -1;
                for (h =
                    a.length; ++f < h;) "" != e && (e += ";"), e += a[f]._$;
                a = e.split(";");
                e = "";
                f = -1;
                for (h = a.length; ++f < h;) - 1 != (g = a[f].lastIndexOf(".")) && ".*" != (k = w.substr(a[f], g, null)) && ("" != e && (e += ","), e += k)
            }
            c.accept = e;
            b.appendChild(d);
            c.click();
            b.removeChild(d);
            return !0
        },
        save: function(a, b) {
            null == b && (b = "");
            var c = this._K,
                d = l.lC(),
                e;
            null == c && (this._K = c = document.createElement("a"));
            try {
                e = new Blob([a.aR], {
                    type: "application/octet-stream"
                });
                if (null != window.saveAs) try {
                    window.q = e;
                    window.saveAs(e, b);
                    return
                } catch (h) {
                    h instanceof G && (h = h.gY)
                }
                var f =
                    window.navigator;
                if (null != f.msSaveBlob) {
                    f.msSaveBlob(e, b);
                    return
                }
                c.href = URL.createObjectURL(e)
            } catch (h) {
                h instanceof G && (h = h.gY), c.href = "data:application/octet-stream;base64," + a.m_()
            }
            c.target = "_blank";
            c.download = b;
            c.setAttribute("download", b);
            d.appendChild(c);
            c.click();
            d.removeChild(c)
        },
        load: function() {
            var a = this;
            if (null != this.file) try {
                var b = new FileReader;
                b.readAsArrayBuffer(this.file);
                this.data = null;
                this.dispatchEvent(new M("open"));
                b.onload = function(c) {
                    a.data = ra.bY(b.result);
                    a.dispatchEvent(new M("complete"))
                };
                b.onerror = function(b) {
                    a.dispatchEvent(new bb("ioError", !1, !1, "Failed to load the file."))
                }
            } catch (c) {
                throw c instanceof G && (c = c.gY), new G("Failed to dispatch FileReader.");
            }
        },
        _t: function(a) {
            this.file = this.aF.files[0];
            null != this.file && this.dispatchEvent(new M("select"))
        },
        get_name: function() {
            return this.file.name
        },
        ik: Ja
    });
    var Mb = function() {};
    g["openfl.net.IURLLoader"] = Mb;
    Mb.be = !0;
    Mb.kR = [hb];
    Mb.prototype = {
        ik: Mb
    };
    var fb = function(a) {
        null != a && (this.url = a);
        this.M = [];
        this.method = "GET";
        this.$5 = null
    };
    g["openfl.net.URLRequest"] =
        fb;
    fb.be = !0;
    fb.prototype = {
        ik: fb
    };
    var fc = function() {};
    g["openfl.net.URLRequestHeader"] = fc;
    fc.be = !0;
    var gc = function() {};
    g["openfl.text.Font"] = gc;
    gc.be = !0;
    var ab = function() {
        this.jy = !1;
        this.ao = "";
        this.ld = -1;
        this.multiline = this.wordWrap = !1;
        this.qc = 0;
        this.border = !1;
        ca.call(this);
        var a = this.i1.style;
        a.whiteSpace = "nowrap";
        a.overflow = "hidden";
        a.padding = "1.5px";
        this.b1 = new Ta("Times New Roman", 12, 0, !1, !1, !1, "", "", "LEFT", 0, 0, 0, 0);
        this.ln = this.pI = 100;
        this.fK(3);
        this.p0()
    };
    g["openfl.text.TextField"] = ab;
    ab.be = !0;
    ab.kR = [ua];
    ab.pc = ca;
    ab.prototype = m(ca.prototype, {
        get_bL: function() {
            return this.b1.bp()
        },
        $9: function(a) {
            var b = this.i1,
                c = this.get_text();
            (this.jy = a) ? (a = l.ns(this.multiline ? "textarea" : "input"), a.value = c, a.maxLength = 0 < this.qc ? this.qc : 2147483647, c = a.style, c.border = "0", c.padding = "0", c.background = "transparent", b.appendChild(this.jW = a)) : (b.removeChild(this.jW), this.jW = null)
        },
        p0: function() {
            this.cZ = !0;
            var a = this.b1,
                b;
            b = (this.jy ? this.jW : this.i1).style;
            this.ou = b.font = a.get_fontStyle();
            b.lineHeight = "1.25";
            b.textAlign = a.align;
            b.fontWeight = a.qD ? "bold" : "";
            b.fontStyle = a.jc ? "italic" : "";
            b.textDecoration = a.mm ? "underline" : "";
            b.color = l.bO(a.color, 1)
        },
        cL: function(a) {
            this.ao = a;
            this.jy ? this.jW.value = a : null == this.i1.innerText ? this.i1.innerHTML = J.replace(J.ex(a), "\n", "<br>") : this.i1.innerText = a;
            this.eC()
        },
        fK: function(a) {
            var b = this.i1.style,
                c = this.jy,
                d;
            d = c ? this.jW.style : null;
            for (var e = 1; 4 > e;) {
                if (0 != (a & e)) {
                    var f;
                    f = 1 == e ? this.pI : this.ln;
                    1 == e && 0 <= this.ld && !this.wordWrap && (f = null);
                    null != f ? (this.border && --f, f -= 3, f += "px") :
                        f = "";
                    1 == e ? (b.width = f, c && (d.width = f)) : (b.height = f, c && (d.height = f))
                }
                e <<= 1
            }
        },
        get_text: function() {
            return this.jy ? this.jW.value : this.ao
        },
        set_text: function(a) {
            this.get_text() != a && this.cL(a);
            this.cZ || this.p0();
            return a
        },
        cI: function(a, b) {
            this.jy && this.jW.setSelectionRange(a, b)
        },
        lV: function(a, b, c, d, e, f, h) {
            b.save();
            b.fillStyle = this.i1.style.color;
            b.font = this.ou;
            b.textBaseline = "top";
            b.textAlign = this.b1.align;
            b.fillText(this.get_text(), 0, 0);
            b.restore()
        },
        get_width: function() {
            return 0 > this.ld ? this.pI : this.get_qW()
        },
        get_height: function() {
            return 0 > this.ld ? this.ln : this.get_iV()
        },
        set_height: function(a) {
            this.ln != a && (this.ln = a, this.fK(2));
            return a
        },
        rh: function() {
            var a = l.lC();
            a.setAttribute("style", this.i1.getAttribute("style"));
            var b = a.style;
            this.wordWrap || (b.width = "");
            b.height = "";
            b.paddingTop = "";
            b.paddingBottom = "";
            b.borderTop = "";
            b.borderBottom = "";
            a.innerHTML = this.i1.innerHTML;
            return a
        },
        lb: function(a) {
            a.setAttribute("style", "");
            a.innerHTML = ""
        },
        get_qW: function() {
            if (null == this.get_ew()) {
                var a = this.rh(),
                    b = a.clientWidth;
                this.lb(a);
                return b
            }
            return this.i1.clientWidth
        },
        get_iV: function() {
            if (null == this.get_ew()) {
                var a = this.rh(),
                    b = a.clientHeight;
                this.lb(a);
                return b
            }
            return this.i1.clientHeight
        },
        eC: function() {
            var a = this.ld,
                b = this.i1.style;
            0 <= a && !this.jy ? (b.left = 0 < a ? (this.pI - this.get_qW()) * a / 2 + "px" : "", this.wordWrap || (b.width = ""), b.height = "") : (b.left = "", this.fK(3))
        },
        set_type: function(a) {
            var b = "INPUT" == a;
            b != this.jy && this.$9(b);
            return a
        },
        set_multiline: function(a) {
            this.multiline != a && (this.multiline = a, this.jy && this.$9(!0));
            return a
        },
        qH: function() {
            (this.jy ? this.jW : this.i1).focus()
        },
        get_gS: function() {
            return this.jy ? this.jW.selectionStart : 0
        },
        get_iY: function() {
            return this.jy ? this.jW.selectionEnd : 0
        },
        jF: function(a, b, c, d) {
            return (!d || this.visible) && 0 <= a && 0 <= b && a < this.get_width() && b < this.get_height()
        },
        addEventListener: function(a, b, c, d, e) {
            null == e && (e = !1);
            null == d && (d = 0);
            null == c && (c = !1);
            var f = this.i1;
            this.jy && (this.i1 = this.jW);
            ca.prototype.addEventListener.call(this, a, b, c, d, e);
            this.jy && (this.i1 = f)
        },
        removeEventListener: function(a, b, c) {
            null ==
                c && (c = !1);
            var d = this.i1;
            this.jy && (this.i1 = this.jW);
            ca.prototype.removeEventListener.call(this, a, b, c);
            this.jy && (this.i1 = d)
        },
        ik: ab
    });
    var Ta = function(a, b, c, d, e, f, h, g, k, l, m, q, p) {
        this.font = a;
        this.size = b;
        this.color = c;
        this.qD = d;
        this.jc = e;
        this.mm = f;
        this.url = h;
        this.target = g;
        this.align = k;
        this.je = l;
        this.$p = m;
        this.qN = q;
        this.gL = p;
        this.d2 = []
    };
    g["openfl.text.TextFormat"] = Ta;
    Ta.be = !0;
    Ta.k7 = function(a) {
        switch (a) {
            case "_sans":
                return "sans-serif";
            case "_serif":
                return "serif";
            case "_typewriter":
                return "monospace";
            default:
                return null ==
                    a ? "sans-serif" : a
        }
    };
    Ta.prototype = {
        bp: function() {
            var a = new Ta(this.font, this.size, this.color, this.qD, this.jc, this.mm, this.url, this.target, this.align, this.je, this.$p, this.qN, this.gL);
            a.$R = this.$R;
            a.mi = this.mi;
            a.qN = this.qN;
            a.ht = this.ht;
            a.letterSpacing = this.letterSpacing;
            a.d2 = this.d2.slice(0);
            return a
        },
        get_fontStyle: function() {
            return (this.qD ? "bold " : "") + (this.jc ? "italic " : "") + this.size + "px " + Ta.k7(this.font)
        },
        ik: Ta
    };
    var ra = function() {
        this.mH = !1;
        this.length = 0;
        this.bQ(this.q$ = this.position = 0)
    };
    g["openfl.utils.ByteArray"] =
        ra;
    ra.be = !0;
    ra.bY = function(a) {
        var b = new ra;
        b.set_length(b.q$ = a.byteLength);
        b.data = new hc(a);
        b.aR = new Vb(a);
        return b
    };
    ra.prototype = {
        cD: function(a) {
            for (var b = 0, c = -1, d = a.length, e; ++c < d;) e = a.charCodeAt(c), b = 127 >= e ? b + 1 : 2047 >= e ? b + 2 : 65535 >= e ? b + 3 : b + 4;
            return b
        },
        bQ: function(a) {
            var b = this.aR,
                c = new Vb(a);
            null != b && (b.length <= a ? c.set(b) : c.set(b.subarray(0, a)));
            this.aR = c;
            this.data = new hc(c.buffer)
        },
        clear: function() {
            this.set_length(this.position = 0)
        },
        cE: function() {
            return this.data.getUint8(this.position++)
        },
        bN: function() {
            var a =
                this.data.getInt32(this.position, this.mH);
            this.position += 4;
            return a
        },
        jw: function() {
            var a = this.data.getUint32(this.position, this.mH);
            this.position += 4;
            return a
        },
        kN: function() {
            var a = this.data.getUint16(this.position, this.mH);
            this.position += 2;
            return a
        },
        d3: function() {
            return this.jt(this.kN())
        },
        jt: function(a) {
            var b = "";
            for (a = this.position + a; this.position < a;) {
                var c = this.data.getUint8(this.position++);
                if (128 > c) {
                    if (0 == c) break;
                    b += String.fromCharCode(c)
                } else if (224 > c) b += String.fromCharCode((c & 63) << 6 | this.data.getUint8(this.position++) &
                    127);
                else if (240 > c) var d = this.data.getUint8(this.position++),
                    b = b + String.fromCharCode((c & 31) << 12 | (d & 127) << 6 | this.data.getUint8(this.position++) & 127);
                else var d = this.data.getUint8(this.position++),
                    e = this.data.getUint8(this.position++),
                    b = b + String.fromCharCode((c & 15) << 18 | (d & 127) << 12 | e << 6 & 127 | this.data.getUint8(this.position++) & 127)
            }
            return b
        },
        m_: function() {
            for (var a = this.length, b = -1, c = this.data, d = "", e, f, h; ++b < a;) e = c.getUint8(b), f = ++b < a ? c.getUint8(b) : 0, h = ++b < a ? c.getUint8(b) : 0, d += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(e >>
                2) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt((e & 3) << 4 | f >> 4) + (b - 1 < a ? "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt((f & 15) << 2 | h >> 6) : "=") + (b < a ? "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(h & 63) : "=");
            return d
        },
        nl: function(a) {
            var b = this.position + 1;
            this.length < b && this.set_length(b);
            this.data.setInt8(this.position, a);
            this.position += 1
        },
        lE: function(a) {
            var b = this.position + 4;
            this.length < b && this.set_length(b);
            this.data.setInt32(this.position,
                a, this.mH);
            this.position += 4
        },
        $T: function(a) {
            var b = this.position + 4;
            this.length < b && this.set_length(b);
            this.data.setUint32(this.position, a, this.mH);
            this.position += 4
        },
        my: function(a) {
            var b = this.position + 2;
            this.length < b && this.set_length(b);
            this.data.setUint16(this.position, a, this.mH);
            this.position += 2
        },
        dw: function(a) {
            this.my(this.cD(a));
            this.ku(a)
        },
        ku: function(a) {
            for (var b = -1, c = a.length, d; ++b < c;) d = a.charCodeAt(b), 127 >= d ? this.nl(d) : (2047 >= d ? this.nl(192 | d >> 6) : (65535 >= d ? this.nl(224 | d >> 12) : (this.nl(240 | d >> 18),
                this.nl(128 | d >> 12 & 63)), this.nl(128 | d >> 6 & 63)), this.nl(128 | d & 63))
        },
        set_length: function(a) {
            this.q$ < a ? this.bQ(this.q$ = C["int"](Math.max(a, 2 * this.q$))) : this.q$ > a && this.bQ(this.q$ = a);
            return this.length = a
        },
        ik: ra
    };
    var k = function() {};
    g["org.ascrypt.AES"] = k;
    k.be = !0;
    k.kE = function(a, b, c, d) {
        null == c && (c = "ecb");
        k._q(a, b);
        a = a.slice();
        b = b.slice();
        k.nd();
        k.eb(a);
        switch (c.toLowerCase()) {
            case "ecb":
                return Nb.qC(a, b, 16, k.iu);
            case "cbc":
                return Cb.kE(a, b, 16, k.iu, d.slice());
            case "ctr":
                return Ma.kE(a, b, 16, k.iu, d.slice());
            case "none":
                return k.iu(a, b);
            default:
                throw new G(k.qU);
        }
    };
    k.j8 = function(a, b, c, d) {
        null == c && (c = "ecb");
        k._q(a, b);
        a = a.slice();
        b = b.slice();
        k.nd();
        k.eb(a);
        switch (c.toLowerCase()) {
            case "ecb":
                return Nb.qC(a, b, 16, k.id);
            case "cbc":
                return Cb.j8(a, b, 16, k.id, d.slice());
            case "ctr":
                return Ma.j8(a, b, 16, k.iu, d.slice());
            case "none":
                return k.id(a, b);
            default:
                throw new G(k.qU);
        }
    };
    k.nd = function() {
        k.mX = [];
        k.jU = [];
        k.pv = [];
        for (var a = 0; 256 > a;) {
            var b = a++;
            k.jU[k.j0[b]] = b
        }
        for (a = 0; 16 > a;) b = a++, k.mX[k._6[b]] = b;
        for (a = 0; 128 > a;) b =
            a++, k.pv[b] = b << 1, k.pv[128 + b] = b << 1 ^ 27
    };
    k.ki = function(a, b) {
        for (var c = 0; 16 > c;) {
            var d = c++;
            a[d] = b[a[d]]
        }
    };
    k.e6 = function(a, b) {
        for (var c = 0; 16 > c;) {
            var d = c++;
            a[d] ^= b[d]
        }
    };
    k.pJ = function(a, b) {
        for (var c = a.slice(), d = 0; 16 > d;) {
            var e = d++;
            a[e] = c[b[e]]
        }
    };
    k.eb = function(a) {
        var b = a.length,
            c = 0,
            d = 1;
        switch (b) {
            case 16:
                c = 176;
                break;
            case 24:
                c = 208;
                break;
            case 32:
                c = 240
        }
        for (var e = b; e < c;) {
            var f = a.slice(e - 4, e);
            0 == e % b ? (f = [k.j0[f[1]] ^ d, k.j0[f[2]], k.j0[f[3]], k.j0[f[0]]], 256 <= (d <<= 1) && (d ^= 283)) : 24 < b && 16 == e % b && (f = [k.j0[f[0]], k.j0[f[1]],
                k.j0[f[2]], k.j0[f[3]]
            ]);
            for (var h = 0; 4 > h;) a[e + h] = a[e + h - b] ^ f[h], h++;
            e += 4
        }
    };
    k.iu = function(a, b) {
        var c = b.slice(),
            d = 16,
            e = a.length;
        for (k.e6(c, a.slice(0, 16)); d < e - 16;) k.ki(c, k.j0), k.pJ(c, k._6), k.aP(c), k.e6(c, a.slice(d, d + 16)), d += 16;
        k.ki(c, k.j0);
        k.pJ(c, k._6);
        k.e6(c, a.slice(d, d + 16));
        return c
    };
    k.id = function(a, b) {
        var c = b.slice(),
            d = a.length,
            e = d - 32;
        k.e6(c, a.slice(d - 16, d));
        k.pJ(c, k.mX);
        for (k.ki(c, k.jU); 16 <= e;) k.e6(c, a.slice(e, e + 16)), k.gx(c), k.pJ(c, k.mX), k.ki(c, k.jU), e -= 16;
        k.e6(c, a.slice(0, 16));
        return c
    };
    k.aP = function(a) {
        for (var b =
                0; 16 > b;) {
            var c = a[b],
                d = a[b + 1],
                e = a[b + 2],
                f = a[b + 3],
                h = c ^ d ^ e ^ f;
            a[b] = a[b] ^ h ^ k.pv[c ^ d];
            a[b + 1] = a[b + 1] ^ h ^ k.pv[d ^ e];
            a[b + 2] = a[b + 2] ^ h ^ k.pv[e ^ f];
            a[b + 3] = a[b + 3] ^ h ^ k.pv[f ^ c];
            b += 4
        }
    };
    k.gx = function(a) {
        for (var b = 0; 16 > b;) {
            var c = a[b],
                d = a[b + 1],
                e = a[b + 2],
                f = a[b + 3],
                h = c ^ d ^ e ^ f,
                g = k.pv[h],
                l = k.pv[k.pv[g ^ c ^ e]] ^ h,
                h = k.pv[k.pv[g ^ d ^ f]] ^ h;
            a[b] = a[b] ^ l ^ k.pv[c ^ d];
            a[b + 1] = a[b + 1] ^ h ^ k.pv[d ^ e];
            a[b + 2] = a[b + 2] ^ l ^ k.pv[e ^ f];
            a[b + 3] = a[b + 3] ^ h ^ k.pv[f ^ c];
            b += 4
        }
    };
    k._q = function(a, b) {
        var c = a.length;
        if (16 != c && 24 != c && 32 != c) throw new G(k.bH);
        if (0 != b.length % 16) throw new G(k.hN);
    };
    var Cb = function() {};
    g["org.ascrypt.utilities.CBC"] = Cb;
    Cb.be = !0;
    Cb.kE = function(a, b, c, d, e) {
        for (var f = [], h = b.length, g = 0; g < h;) {
            for (var k = 0; k < c;) {
                var l = k++;
                b[g + l] ^= e[l]
            }
            f = f.concat(d(a, b.slice(g, g + c)));
            e = f.slice(g, g + c);
            g += c
        }
        return f
    };
    Cb.j8 = function(a, b, c, d, e) {
        for (var f = b.length, h, g = [], k = 0; k < f;) {
            h = b.slice(k, k + c);
            for (var g = g.concat(d(a, h)), l = 0; l < c;) {
                var m = l++;
                g[k + m] ^= e[m]
            }
            e = h.slice(0, c);
            k += c
        }
        return g
    };
    var Ma = function() {};
    g["org.ascrypt.utilities.CTR"] = Ma;
    Ma.be = !0;
    Ma.kE = function(a, b, c, d, e) {
        return Ma.qC(a,
            b, c, d, e)
    };
    Ma.j8 = function(a, b, c, d, e) {
        return Ma.qC(a, b, c, d, e)
    };
    Ma.qC = function(a, b, c, d, e) {
        var f = b.length,
            h;
        e = e.slice();
        for (var g = 0; g < f;) {
            h = d(a, e);
            for (var k = 0; k < c;) {
                var l = k++;
                b[g + l] ^= h[l]
            }
            for (h = c - 1; 0 <= h && (--h, e[h]++, 0 == e[h]););
            g += c
        }
        return b
    };
    var Nb = function() {};
    g["org.ascrypt.utilities.ECB"] = Nb;
    Nb.be = !0;
    Nb.qC = function(a, b, c, d) {
        for (var e = [], f = b.length, h = 0; h < f;) e = e.concat(d(a, b.slice(h, h + c))), h += c;
        return e
    };
    var N = function() {
        this.reset()
    };
    g["terra.Buff"] = N;
    N.be = !0;
    N.dE = function() {
        N.lw = Db.gZ;
        N.dG = Db._I;
        N.p4 =
            N.lw.length;
        I.w = N.p4
    };
    N.gZ = function(a) {
        return 0 <= a && a < N.p4 ? N.lw[a] : "?"
    };
    N.gA = function(a) {
        return 0 <= a && a < N.p4 ? N.dG[a] : "?"
    };
    N.prototype = {
        set: function(a, b) {
            this.id = a;
            this.time = b
        },
        reset: function() {
            this.time = this.id = 0
        },
        getTime: function() {
            return 0 > this.time ? "?s" : 999 < this.time ? "*" : (this.time | 0) + "s"
        },
        ik: N
    };
    var x = function() {
        this.eJ = this.dA = 0;
        this.text = "";
        this.iL = 0;
        this.code = "";
        this.id = 0;
        this.name = ""
    };
    g["terra.Item"] = x;
    x.be = !0;
    x.qo = function(a) {
        var b = x.b$.eX[a];
        null == b && (b = new x, b.name = "Unknown", b.id = a, b.oT =
            x.iJ, x.b$.eX[a] = b);
        return b
    };
    x.fi = function(a) {
        var b = x.at.get(a);
        null == b && (b = new x, b.name = a, b.code = a, b.oT = x.iJ, x.at.set(a, b));
        return b
    };
    x.dN = function(a) {
        return null == a || 0 == a.id && "" == a.name
    };
    x.$s = function(a) {
        return null != a && (0 != a.id || "" != a.name)
    };
    x.nd = function() {
        x.iJ = new L(40, 40, !0, 0);
        var a = new Fa,
            b = a.h8;
        b._f(10088055);
        b.e1(20, 20, 11.7);
        x.iJ._Z(a);
        Yb.pW();
        x.qG = cb.nd();
        a = 0;
        for (b = x.list; a < b.length;) {
            var c = b[a];
            ++a;
            c.jR = c.name.toLowerCase();
            c.c7 = c.text.toLowerCase()
        }
    };
    x.count = function(a) {
        return 999 < a ? "+?" :
            0 > a ? "-?" : "" + a
    };
    x.prototype = {
        i4: function(a, b, c) {
            this.oT = a;
            this.eJ = b;
            this.dA = c
        },
        $u: function(a) {
            this.pF = a;
            var b = a.indexOf("|");
            this.kl = 0 <= b ? a.substring(0, b) : a;
            a = Zb.pW(a);
            this.iL = a.iL;
            this.text = a.text
        },
        ik: x
    };
    var Zb = function() {};
    g["terra.ItemMetaReader"] = Zb;
    Zb.be = !0;
    Zb.pW = function(a, b) {
        var c = {
                text: "",
                iL: 0
            },
            d = a.split("|"),
            e = "",
            f = d.shift();
        0 <= f.indexOf("t") && (e += "Can be placed (tile)\n");
        0 <= f.indexOf("w") && (e += "Can be placed (wall)\n");
        0 <= f.indexOf("4") && (e += "Equipable (head slot)\n");
        0 <= f.indexOf("5") &&
            (e += "Equipable (body slot)\n");
        0 <= f.indexOf("6") && (e += "Equipable (leg slot)\n");
        0 <= f.indexOf("a") && (e += "Equipable (accessory)\n");
        0 <= f.indexOf("1") && (c.iL = 1);
        0 <= f.indexOf("H") && (c.iL = 99);
        0 <= f.indexOf("K") && (c.iL = 999);
        for (var h = null, g = null, k = 4, l = 0, m = 0; m < d.length;) {
            var q = d[m];
            ++m;
            var p = q.indexOf("="),
                r = w.substr(q, p + 1, null);
            switch (w.substr(q, 0, p)) {
                case "d":
                    e += "" + r + " ";
                    0 <= f.indexOf("d") && (e += "melee ");
                    0 <= f.indexOf("r") && (e += "ranged ");
                    0 <= f.indexOf("m") && (e += "magic ");
                    0 <= f.indexOf("s") && (e += "summon ");
                    e += "damage";
                    if (0 <= a.indexOf("|t="))
                        for (q = 0; q < d.length;)
                            if (p = d[q], ++q, J.iH(p, "t=")) {
                                q = C.parseInt(p.substring(2));
                                r = C.parseInt(r);
                                null != q && 0 < q && (e += " (~" + Math.round(60 * r / q) + " DPS)");
                                break
                            } e += "\n";
                    0 > f.indexOf("s") && (e += k + "% critical strike chance\n");
                    break;
                case "s":
                    c.iL = C.parseInt(r);
                    break;
                case "z":
                    l = C.parseInt(r);
                    break;
                case "c":
                    k += C.parseInt(r);
                    break;
                case "D":
                    e += "" + r + " defense\n";
                    break;
                case "tp":
                    e += "" + r + "% pickaxe power\n";
                    break;
                case "tx":
                    e += "" + 5 * C.parseInt(r) + "% axe power\n";
                    break;
                case "th":
                    e += "" +
                        r + "% hammer power\n";
                    break;
                case "tr":
                    e += ("-" != r.charAt(0) ? "+" + r : "" + r) + " range\n";
                    break;
                case "tf":
                    e += "" + r + "% fishing power\n";
                    break;
                case "hl":
                    e += "Restores " + r + " life\n";
                    break;
                case "hm":
                    e += "Restores " + r + " mana\n";
                    break;
                case "t":
                    e += "Use time " + r + " (";
                    r = C.parseInt(r);
                    0 < r && (e += (6E3 / r | 0) / 100 + "/s, ");
                    e = 8 >= r ? e + "insanely fast" : 20 >= r ? e + "very fast" : 25 >= r ? e + "fast" : 30 >= r ? e + "average" : 35 >= r ? e + "slow" : 45 >= r ? e + "very slow" : 55 >= r ? e + "extremely slow" : e + "snail";
                    e += ")\n";
                    break;
                case "k":
                    q = parseFloat(r);
                    e += "Knockback " + r;
                    e += " (";
                    e = 0 >= q ? e + "none" : 1.5 >= q ? e + "extremely weak" : 3 >= q ? e + "very weak" : 4 >= q ? e + "weak" : 6 >= q ? e + "average" : 7 >= q ? e + "strong" : 9 >= q ? e + "very strong" : 11 >= q ? e + "extremely strong" : e + "insane";
                    e += ")";
                    e += "\n";
                    break;
                case "m":
                    e += "Uses " + r + " mana\n";
                    break;
                case "1":
                    h = r;
                    break;
                case "2":
                    g = r
            }
        }
        0 <= f.indexOf("c") && (e += "Consumable\n");
        0 <= f.indexOf("v") && (e += "Vanity item\n");
        0 <= f.indexOf("b") && (e += "Ammo\n");
        0 <= f.indexOf("x") && (e += "Material\n");
        null != h && (e += h + "\n");
        null != g && (e += g + "\n");
        1 < c.iL && b && (e += "Max stack " + c.iL + "\n");
        b && 0 <
            l && (d = "", l = l / 5 | 0, 0 < l && (0 != l % 100 && (d = "[$c]" + l % 100 + " " + d), l = l / 100 | 0, 0 < l && (0 != l % 100 && (d = "[$s]" + l % 100 + " " + d), l = l / 100 | 0, 0 < l && (0 != l % 100 && (d = "[$g]" + l % 100 + " " + d), l = l / 100 | 0, 0 < l && (d = "[$p]" + l + " " + d)))), e += "Worth " + w.substr(d, 0, d.length - 1) + "\n");
        "\n" == e.charAt(e.length - 1) && (e = w.substr(e, 0, e.length - 1));
        c.text = e;
        return c
    };
    var Yb = function() {};
    g["terra.ItemParser"] = Yb;
    Yb.be = !0;
    Yb.pW = function() {
        for (var a = oa.c0, b = oa.count, c = I.oe, d = c.aK, c = c.oc, e = 0; e < b;) {
            var f = new x,
                h = oa.gZ[e],
                g = a++;
            0 != g && "" == h && (h = "Unknown");
            var k;
            k = 0 != g ? "Vanilla:" + h : "";
            f.id = g;
            f.name = h;
            f.code = k;
            f.$u(oa.l4[e]);
            0 > g ? (h = -g, f.i4(c, 40 * (h & 31), 40 * (h >> 5))) : f.i4(d, 40 * (g & 31), 40 * (g >> 5));
            x.b$.eX[g] = f;
            x.at.set(k, f);
            x.list.push(f);
            e++
        }
        I.fb = oa.c0 - 1;
        I.fv = oa.hv + 1
    };
    var cb = function() {};
    g["terra.ItemPrefix"] = cb;
    cb.be = !0;
    cb.nd = function() {
        for (var a = "None|0| Large|1|Z+12 Massive|1|Z+18 Dangerous|1|D+6|C+2|Z+5 Savage|2|D+9|Z+10|K+10 Sharp|1|D+16 Pointy|1|D+9 Tiny|-1|Z-18 Terrible|-2|D-16|Z-13|K-15 Small|-1|Z-10 Dull|-1|D-16 Unhappy|-2|S-8|Z-10|K-10 Bulky|1|D-6|S-17|Z+10|K+10 Shameful|-2|D-9|Z+10|K-20 Heavy|0|S-8|K+15 Light|0|S+17|K-10 Sighted|1|D+9|C+3 Rapid|2|S+17 Hasty|2|S+8 Intimidating|2|K+15 Deadly|2|D+9|S+3|C+2|K+5 Staunch|2|D+9|K+15 Awful|-2|D-16|K-10 Lethargic|-2|S-16|K-10 Awkward|-2|S-8|K-20 Powerful|1|D+16|S-8|C+1 Mystic|2|D+10|M-14 Adept|1|M-14 Masterful|2|D+15|M-14|K+5 Inept|-1|M+7 Ignorant|-2|D-10|M+21 Deranged|-1|D-10|K-10 Intense|-1|D+10|M+15 Taboo|1|S+10|M+10|K+10 Celestial|1|D+10|S-10|M-10|K+10 Furious|1|D+15|M+20|K+15 Keen|1|C+3 Superior|2|D+11|C+3|K+10 Forceful|1|K+15 Broken|-2|D-31|K-20 Damaged|-1|D-14 Shoddy|-2|D-9|K-15 Quick|1|S+8 Deadly|2|D+9|S+8 Agile|1|S+8|C+3 Nimble|1|S+4 Murderous|2|D+6|S+4|C+3 Slow|-1|S-17 Sluggish|-2|S-21 Lazy|-1|S-8 Annoying|-2|D-19|S-17 Nasty|1|D+6|S+8|C+2|K-10 Manic|1|D-10|S+10|M-10 Hurtful|1|D+9 Strong|1|K+15 Unpleasant|2|D+6|K+15 Weak|-1|K-20 Ruthless|1|D+19|K-10 Frenzying|0|D-16|S+17 Godly|2|D+16|C+5|K+15 Demonic|2|D+16|C+5 Zealous|1|C+5 Hard|2|d+1 Guarding|2|d+2 Armored|2|d+3 Warding|null|d+4 Arcane|null|m+20 Precise|null|C+2 Lucky|null|C+4 Jagged|null|D+1 Spiked|null|D+2 Angry|null|D+3 Menacing|null|D+4 Brisk|null|s+1 Fleeting|null|s+2 Hasty|null|s+3 Quick|null|s+4 Wild|null|Q+1 Rash|null|Q+2 Intrepid|null|Q+3 Violent|null|Q+4 Legendary|null|D+16|S+8|C+5|K+15|Z+10 Unreal|null|D+16|S+8|C+5|K+15 Mythical|null|D+15|S+14|C+5|M-20|K+15".split(" "),
                b = new Ba, c = 0, d = a.length; c < d;) {
            var e = c++,
                f = a[e].split("|"),
                h = new cb;
            h.name = f.shift();
            h.ir = C.parseInt(f.shift());
            for (var g = null, k = 0; k < f.length;) {
                var l = f[k];
                ++k;
                var g = null != g ? g + ", " : "",
                    m = w.substr(l, 1, null);
                switch (l.charAt(0)) {
                    case "D":
                        g += "" + m + "% Dmg";
                        break;
                    case "d":
                        g += "" + m + " Def";
                        break;
                    case "M":
                        g += "" + m + "% MCost";
                        break;
                    case "m":
                        g += "" + m + " Mana";
                        break;
                    case "C":
                        g += "" + m + "% Crit";
                        break;
                    case "K":
                        g += "" + m + "% Knock";
                        break;
                    case "S":
                        g += "" + m + "% Sp";
                        break;
                    case "Q":
                        g += "" + m + "% MlSp";
                        break;
                    case "s":
                        g += "" + m + "% RunSp";
                        break;
                    case "Z":
                        g += "" + m + "% Size";
                        break;
                    default:
                        g += m
                }
            }
            h.text = g;
            b.eX[e] = h
        }
        return b
    };
    cb.prototype = {
        ik: cb
    };
    var Ga = function() {
        this.o6 = null;
        this.dW = 0;
        this.fZ = [];
        this.$r = [0, 0, 0, 0];
        this.b6 = this.aZ = this.c9 = this.mu = this.qA = this.nD = 0;
        this.n$ = this.pD = !1;
        this.o_ = this.hideVisual = this.mY = 0;
        this.h1 = !1;
        this.eQ = 10512700;
        this.oZ = 16770735;
        this.nT = 10532055;
        this.lv = 11511180;
        this.pm = 6904395;
        this.bd = 16743770;
        this.ed = 0;
        this.ay = 14113335;
        this.me = 0;
        this.hi = this.dY = 20;
        this.dt = this.$3 = 100;
        this.bf = 1;
        this.difficulty = 0;
        this.bP = "f2a63086-cfb5-41c8-bae4-712777bbf934";
        this.name = "Player";
        this.lt = "a";
        this.cz = 14;
        this.version = 190;
        this.items = [];
        for (var a = 0; 30 > a;) this.items[a++] = new ma;
        for (; 88 > a;) this.items[a] = new ma, this.items[a].qn = !0, this.items[a]._v = !0, a++;
        for (; 98 > a;) this.items[a++] = new ma;
        for (; 218 > a;) this.items[a] = new ma, this.items[a].qn = !0, a++;
        for (a = -1; 218 > ++a;) this.items[a].count = 0;
        this.aM = [];
        for (a = -1; 22 > ++a;) this.aM[a] = new N;
        this._C = [];
        this.na = [];
        for (a = 0; 13 > a;) this.na[a] = !1, a++;
        for (a = 0; 10 > a;) this.fZ.push(0), a++
    };
    g["terra.Player"] = Ga;
    Ga.be = !0;
    Ga._n = function(a) {
        var b;
        200 < a ? (a = 16384, b = 1024) : 190 <= a ? (a = 3929, b = 205) : 184 <= a ? (a = 3883, b = 205) : 175 <= a ? (a = 3796, b = 190) : 168 <= a ? (a = 3729, b = 190) : 145 <= a ? (a = 3601, b = 190) : 98 <= a ? (a = 2748, b = 139) : 93 <= a ? (a = 2288, b = 103) : 77 <= a ? (a = 1965, b = 93) : 70 <= a ? (a = 1725, b = 80) : 69 <= a ? (a = 1614, b = 80) : (a = 603, b = 40);
        return {
            item: a,
            q7: b
        }
    };
    Ga.prototype = {
        gd: function(a, b) {
            a.mH = !0;
            "littleEndian";
            var c;
            if (b) {
                var d = c = this.version;
                a.lE(d)
            } else this.version = c = a.bN();
            var e = 1E3 == c;
            e && (c = 145);
            d = Ga._n(e ? 168 : c);
            ma.hv = d.item;
            var f, h;
            if (145 <= c)
                if (b) a.$T(1869374834), a.$T(56846695), a.$T(this.aZ),
                    a.$T(this.c9), a.$T(this.mu), e && B.jv(a, this.bP);
                else {
                    f = a.jw();
                    h = a.jw();
                    if (1869374834 != f || 56846695 != h) throw new G("That doesn't seem to be a valid profile.");
                    this.aZ = a.jw();
                    this.c9 = a.jw();
                    this.mu = a.jw();
                    e && (this.bP = B.n7(a))
                } b ? B.jv(a, this.name) : this.name = B.n7(a);
            b ? a.nl(this.difficulty) : this.difficulty = a.data.getUint8(a.position++);
            145 <= c && (b ? (a.$T(this.qA), a.$T(this.nD)) : (this.qA = a.jw(), this.nD = a.jw()));
            b ? a.lE(this.me) : this.me = a.bN();
            82 <= c && (b ? a.nl(this.ed) : this.ed = a.data.getUint8(a.position++));
            83 <=
                c && (b ? (a.nl(this.hideVisual & 255), 145 <= c && a.nl(this.hideVisual >> 8 & 255)) : (this.hideVisual = a.data.getUint8(a.position++), 145 <= c && (this.hideVisual |= a.data.getUint8(a.position++) << 8)));
            145 <= c && (b ? a.nl(this.mY) : this.mY = a.data.getUint8(a.position++));
            145 <= c ? b ? a.nl(this.bf) : this.bf = a.data.getUint8(a.position++) : b ? a.nl(4 > this.bf ? 1 : 0) : 0 != a.data.getUint8(a.position++) ? this.bf = 0 : this.bf = 4;
            b ? a.lE(this.dt) : this.dt = a.bN();
            b ? a.lE(this.$3) : this.$3 = a.bN();
            b ? a.lE(this.hi) : this.hi = a.bN();
            b ? a.lE(this.dY) : this.dY = a.bN();
            145 <= c && (b ? a.nl(this.n$ ? 1 : 0) : this.n$ = 0 != a.data.getUint8(a.position++), 184 <= c && (b ? a.nl(this.pD ? 1 : 0) : this.pD = 0 != a.data.getUint8(a.position++)), b ? a.lE(this.b6) : this.b6 = a.bN());
            b ? B.iA(a, this.ay) : this.ay = a.data.getUint8(a.position++) << 16 | a.data.getUint8(a.position++) << 8 | a.data.getUint8(a.position++);
            b ? B.iA(a, this.bd) : this.bd = a.data.getUint8(a.position++) << 16 | a.data.getUint8(a.position++) << 8 | a.data.getUint8(a.position++);
            b ? B.iA(a, this.pm) : this.pm = a.data.getUint8(a.position++) << 16 | a.data.getUint8(a.position++) <<
                8 | a.data.getUint8(a.position++);
            b ? B.iA(a, this.lv) : this.lv = a.data.getUint8(a.position++) << 16 | a.data.getUint8(a.position++) << 8 | a.data.getUint8(a.position++);
            b ? B.iA(a, this.nT) : this.nT = a.data.getUint8(a.position++) << 16 | a.data.getUint8(a.position++) << 8 | a.data.getUint8(a.position++);
            b ? B.iA(a, this.oZ) : this.oZ = a.data.getUint8(a.position++) << 16 | a.data.getUint8(a.position++) << 8 | a.data.getUint8(a.position++);
            b ? B.iA(a, this.eQ) : this.eQ = a.data.getUint8(a.position++) << 16 | a.data.getUint8(a.position++) << 8 | a.data.getUint8(a.position++);
            if (145 <= c) {
                for (f = 0; 10 > f;) this.items[f].gd(a, c, b), f++;
                for (f = 0; 10 > f;) this.items[10 + f].gd(a, c, b), f++;
                for (f = 0; 10 > f;) this.items[20 + f].gd(a, c, b), f++
            } else if (81 <= c) {
                for (f = 0; 8 > f;) this.items[f].gd(a, c, b), f++;
                for (f = 0; 8 > f;) this.items[10 + f].gd(a, c, b), f++;
                for (f = 0; 8 > f;) this.items[20 + f].gd(a, c, b), f++
            } else {
                for (f = 0; 8 > f;) this.items[f].gd(a, c, b), f++;
                for (f = 0; 3 > f;) this.items[10 + f].gd(a, c, b), f++;
                if (39 < c)
                    for (f = 0; 3 > f;) this.items[20 + f].gd(a, c, b), f++
            }
            d = 58 <= c ? 58 : 48;
            for (f = 0; f < d;) this.items[30 + f].gd(a, c, b), f++;
            if (145 <= c)
                for (f =
                    0; 5 > f;) this.items[88 + f].gd(a, c, b), this.items[93 + f].gd(a, c, b), f++;
            d = 58 <= c ? 40 : 20;
            if (168 <= c || e) {
                for (f = 0; f < d;) this.items[98 + f].gd(a, c, b), f++;
                for (f = 0; f < d;) this.items[138 + f].gd(a, c, b), f++
            } else
                for (f = 0; f < d;) this.items[98 + f].gd(a, c, b), this.items[138 + f].gd(a, c, b), f++;
            if (184 <= c)
                for (f = 0; 40 > f;) this.items[178 + f].gd(a, c, b), f++;
            d = 77 <= c ? 22 : 10;
            for (f = 0; f < d;) b ? (a.lE(this.aM[f].id), a.lE(this.aM[f].time | 0)) : (h = a.bN(), this.aM[f].set(h, a.bN())), f++;
            if (b) {
                d = this._C.length;
                for (f = 0; f < d;) {
                    e = this._C[f];
                    if (0 != e.fH || 0 != e.nS ||
                        0 != e.k_) a.lE(e.fH), a.lE(e.nS), a.lE(e.k_), B.jv(a, e.name);
                    f++
                }
                a.lE(-1)
            } else
                for (f = 0; 200 > f;) {
                    h = a.bN();
                    if (-1 == h) break;
                    e = new ub;
                    e.fH = h;
                    e.nS = a.bN();
                    e.k_ = a.bN();
                    e.name = B.n7(a);
                    0 == e.fH && 0 == e.nS && 0 == e.k_ || this._C.push(e);
                    f++
                }
            b ? a.nl(this.h1 ? 1 : 0) : this.h1 = 0 != a.data.getUint8(a.position++);
            if (145 <= c)
                for (d = 13, f = 0; f < d;) b ? a.nl(this.na[f] ? 1 : 0) : this.na[f] = 0 != a.data.getUint8(a.position++), f++;
            98 <= c && (b ? a.lE(this.o_) : this.o_ = a.bN());
            e = a.length;
            if (!b) {
                h = a.position;
                a.position = e - 1;
                d = a.data.getUint8(a.position++);
                if (0 < d &&
                    16 > d) {
                    a.position = e - d;
                    for (f = 0; f < d && a.data.getUint8(a.position++) == d;) f++;
                    f >= d && (e -= d)
                }
                a.position = h
            }
            if (168 <= c) {
                d = 4;
                for (f = 0; f < d;) b ? a.lE(this.$r[f]) : this.$r[f] = a.bN(), f++;
                d = 10;
                for (f = 0; f < d;) b ? a.lE(this.fZ[f]) : this.fZ[f] = a.bN(), f++
            }
            184 <= c && (b ? a.lE(this.dW) : this.dW = a.bN());
            if (b) {
                if (null != this.o6)
                    for (this.o6.position = 0, d = this.o6.length; 0 <= --d;) c = this.o6.cE(), a.nl(c)
            } else if (d = e - a.position, Pb.log(d), 0 < d)
                for (this.o6 = new ra; 0 <= --d;) this.o6.nl(a.data.getUint8(a.position++));
            else this.o6 = null;
            if (b)
                for (f = d = 16 -
                    (a.length & 15); 0 <= --d;) a.nl(f)
        },
        load: function(a) {
            this.gd(a, !1)
        },
        save: function(a) {
            this.gd(a, !0)
        },
        ik: Ga
    };
    var ub = function() {
        this.name = "";
        this.fH = this.nS = this.k_ = 0
    };
    g["terra.ServerEntry"] = ub;
    ub.be = !0;
    ub.prototype = {
        ik: ub
    };
    var ma = function() {
        this._v = this.ig = !1;
        this.prefix = 0;
        this.count = 1;
        this.item = null
    };
    g["terra.Slot"] = ma;
    ma.be = !0;
    ma.prototype = {
        clear: function() {
            this.item = null;
            this.count = this.prefix = 0
        },
        gd: function(a, b, c) {
            var d;
            d = c ? null != this.item ? this.item.id : 0 : a.bN();
            d > ma.hv && (d = 0);
            c ? a.lE(d) : this.item = x.qo(d);
            c ? this.qn && a.lE(this.count) : this.count = this.qn ? a.bN() : 1;
            c ? a.nl(this.prefix) : this.prefix = a.data.getUint8(a.position++);
            145 <= b && this._v && (c ? a.nl(this.ig ? 1 : 0) : this.ig = 0 != a.data.getUint8(a.position++))
        },
        ik: ma
    };
    var Db = function() {};
    g["terra.data.TdBuff"] = Db;
    Db.be = !0;
    var oa = function() {};
    g["terra.data.TdItem"] = oa;
    oa.be = !0;
    var la = function(a, b, c, d, e, f, h) {
        this.mv = 0;
        var g = 1 < d,
            k, l;
        this.size = a;
        this._g = c;
        this.c2 = d;
        this.lineHeight = b;
        this.nj = [];
        b = e.length;
        for (a = -1; ++a < b;)
            for (l = e[a], this.nj[a] = k = [], c = -1; ++c < d;) k.push(F.nh(l[c]));
        this.qL = new Ba;
        d = g ? 9 : 8;
        a = 0;
        for (b = f.length; a < b;) e = new Ob(f[a + 1], f[a + 2], f[a + 3], f[a + 4], f[a + 5], f[a + 6], f[a + 7], g ? f[a + 8] : 0), this.qL.eX[f[a]] = e, a += d;
        a = 0;
        for (b = h.length; a < b;) f = this.qL.eX[h[a]], null != f && (null == f.jL && (f.jL = new Ba), f.jL.eX[h[a + 1]] = h[a + 2]), a += 3
    };
    g["utils.BMFont"] = la;
    la.be = !0;
    la.prototype = {
        iI: function(a, b, c, d, e, f) {
            null == e && (e = 0);
            null == d && (d = 0);
            null == f && (f = new xb);
            f.text = a;
            a += "\n";
            f.x = b;
            f.m2 = d;
            f.y = c;
            f.fh = e;
            var h = -1,
                g = 0,
                k = a.length,
                l, m, q, p = this.qL,
                r = null,
                n, u = this.lineHeight,
                v = this.mv;
            for (f.width =
                f.height = m = q = 0; ++h < k;)
                if (10 == (l = a.charCodeAt(h))) f.sizes[g++] = m, m > f.width && (f.width = m), m = 0, q += u, r = null;
                else {
                    var w;
                    !(w = null != (n = p.eX[l])) && (w = 0 < v) && (n = l = v, w = null != (n = p.eX[n]));
                    w && (null != r && r.eX.hasOwnProperty(l) && (m += r.eX[l]), m += n.s, r = n.jL)
                } f.height = q;
            f.left = b - (f.width * d >> 1);
            f.top = c - (f.height * e >> 1);
            f.right = f.left + f.width;
            f.bottom = f.top + f.height;
            return f
        },
        _Z: function(a, b, c, d, e, f, g, k) {
            null == g && (g = 0);
            null == f && (f = 0);
            null == e && (e = 0);
            null == k && (k = la.dL = this.iI(b, c, d, e, f, la.dL));
            var l = -1,
                m = 0,
                p = b.length,
                q, n,
                r = this.qL,
                v = null,
                u = this.lineHeight,
                w = this.nj[g],
                x = this.mv,
                z = la.cv,
                B = la.fe;
            g = c - (k.sizes[0] * e >> 1);
            for (d -= k.height * f >> 1; ++l < p;) 10 == (q = b.charCodeAt(l)) ? (g = c - (k.sizes[++m] * e >> 1), d += u, v = null) : (!(n = null != (f = r.eX[q])) && (n = 0 < x) && (f = q = x, n = null != (f = r.eX[f])), n && (null != v && v.eX.hasOwnProperty(q) && (g += v.eX[q]), z.width = f.py, z.height = f.eX, q = g + f.x, n = d + f.y, z.x = q, B.nG = q - f.dR, z.y = n, B.lS = n - f.n6, a._Z(w[f.kx], B, null, null, z, !1), g += f.s))
        },
        select: function(a, b, c, d, e, f, g, k, l) {
            null == g && (g = 0);
            null == f && (f = 0);
            null == l && (l = la.dL =
                this.iI(a, d, e, f, g, la.dL));
            var m, p = 0,
                q = a.length,
                n, r = this.qL,
                v = this.lineHeight,
                u, w = this.mv;
            b > c && (m = b, b = c, c = m);
            0 > b && (b = 0);
            c > q && (c = q);
            u = n = d - (l.sizes[0] * f >> 1);
            e -= l.height * g >> 1;
            if (0 == c) k(u, n, e);
            else
                for (m = -1; ++m < q;)
                    if (10 == (g = a.charCodeAt(m))) k(u, n, e), u = n = d - (l.sizes[++p] * f >> 1), e += v;
                    else {
                        var x;
                        !(x = null != (g = r.eX[g])) && (x = 0 < w) && (x = null != (g = r.eX[w]));
                        if (x && (m == b && (u = n), n += g.s, m + 1 == c)) {
                            k(b == c ? n : u, n, e);
                            break
                        }
                    }
        },
        ik: la
    };
    var Ob = function(a, b, c, d, e, f, g, k) {
        this.dR = a;
        this.n6 = b;
        this.py = c;
        this.eX = d;
        this.x = e;
        this.y = f;
        this.s =
            g;
        this.kx = k;
        this.jL = null
    };
    g["utils.BMGlyph"] = Ob;
    Ob.be = !0;
    Ob.prototype = {
        ik: Ob
    };
    var xb = function() {
        this.sizes = []
    };
    g["utils.BMInfo"] = xb;
    xb.be = !0;
    xb.prototype = {
        ik: xb
    };
    var B = function() {};
    g["utils.ByteArrayTools"] = B;
    B.be = !0;
    B.n7 = function(a) {
        var b = a.data.getUint8(a.position++);
        return 0 != b ? a.jt(b) : ""
    };
    B.cD = function(a) {
        for (var b = 0, c = -1, d = a.length, e; ++c < d;) e = a.charCodeAt(c), b = 127 >= e ? b + 1 : 2047 >= e ? b + 2 : 65535 >= e ? b + 3 : b + 4;
        return b
    };
    B.jv = function(a, b) {
        a.nl(B.cD(b));
        a.ku(b)
    };
    B.iA = function(a, b) {
        a.nl(b >> 16 & 255);
        a.nl(b >>
            8 & 255);
        a.nl(b & 255)
    };
    B.mO = function() {
        (function(a) {
            var b = !0;
            try {
                var c, d = window.document,
                    d = d[function(a) {
                        a = [3, 6, -6, -8, 11, 0, 6, 5];
                        for (var b = 0, c = ""; 8 > b;) c += da(a[b++] + 105);
                        return c
                    }(a)];
                c = d = d[function(a) {
                    a = "";
                    for (var b = 0, c; 4 > b;) c = b++, c = w.qg("iybi", c), a += da(c & -16 | (c & 15) + 10 * b + 5 & 15);
                    return a
                }(a)];
                var e, f;
                a = [-51, -62, -62, 12, -12, -1, -63, -10, -10, -62];
                for (var d = 0, g = ""; 10 > d;) g += da(a[d++] + 109);
                e = g;
                f = c.indexOf(e);
                if (0 > f) {
                    a = "";
                    for (var d = 0, k; 27 > d;) {
                        var l = d++;
                        k = w.qg("5 &vhekdrbmqh{knaf%fwlg#d`&", l);
                        a += da(k & -16 | (k & 15) +
                            10 * d + 11 & 15)
                    }
                    e = a;
                    f = c.indexOf(e)
                }
                if (0 > f) {
                    k = "";
                    for (var l = 0, m; 43 > l;) {
                        var n = l++;
                        m = w.qg(";  d`nn`oebubtu`sbhf/h``hmfbqjt/d`n judij` ", n);
                        k += da(m & -16 | (m & 15) + 16 * l + 15 & 15)
                    }
                    e = k;
                    f = c.indexOf(e);
                    Pb.log(e + " : " + f)
                }
                b = 0 <= f && 8 > f
            } catch (q) {
                q instanceof G && (q = q.gY)
            }
            return b
        })(this) ? B.oF = Ea.gk("h3y_gUyZ"): B.oF = []
    };
    B.kE = function(a) {
        null == B.oF && B.mO();
        B.$F = Ea.hw(a, B.$F);
        Ea.$n(k.kE(B.oF, B.$F, "cbc", B.oF), a);
        return a
    };
    B.j8 = function(a) {
        null == B.oF && B.mO();
        B.$F = Ea.hw(a, B.$F);
        Ea.$n(k.j8(B.oF, B.$F, "cbc", B.oF), a);
        return a
    };
    var Ea =
        function() {};
    g["utils.Convert"] = Ea;
    Ea.be = !0;
    Ea.gk = function(a, b) {
        null == b ? b = [] : b.splice(0, b.length);
        for (var c = -1, d = a.length, e; ++c < d;) e = w.qg(a, c), b.push(e & 255), b.push(e >> 8 & 255);
        return b
    };
    Ea.hw = function(a, b) {
        null == b ? b = [] : b.splice(0, b.length);
        var c = a.position,
            d = a.length;
        for (a.position = 0; 0 < d--;) b.push(a.data.getUint8(a.position++));
        a.position = c;
        return b
    };
    Ea.$n = function(a, b) {
        null == b ? b = new ra : b.clear();
        for (var c = -1, d = a.length; ++c < d;) b.nl(a[c]);
        b.position = 0;
        return b
    };
    var $b = function() {};
    g["utils.Mix"] = $b;
    $b.be = !0;
    $b.kw = function() {
        for (var a = [5, 17, 14, 12, -2, 7, 0, 17, -2, 14, 3, 4], b = "", c = 0, d; null != (d = a[c++]);) b = 0 > d ? b + (10 + -d).toString(36).toUpperCase() : b + (10 + d).toString(36).toLowerCase();
        da = E.$B("")[b]
    };
    var Sb = function() {};
    g["wiki.WikiTools"] = Sb;
    Sb.be = !0;
    Sb._c = function(a, b) {
        var c = a.length,
            d = b.length,
            e;
        e = c < d ? c : d;
        for (var f = 0; f < e;) {
            var g = a.charCodeAt(f),
                k = b.charCodeAt(f);
            if (g != k) return g < k ? -1 : 1;
            f++
        }
        return c != d ? c < d ? -1 : 1 : 0
    };
    var ic = 0;
    Array.prototype.indexOf && (w.indexOf = function(a, b, c) {
        return Array.prototype.indexOf.call(a,
            b, c)
    });
    g.Math = Math;
    String.prototype.ik = g.String = String;
    String.be = !0;
    g.Array = Array;
    Array.be = !0;
    Date.prototype.ik = g.Date = Date;
    Date.be = ["Date"];
    var jc = g._l = {
            be: ["Int"]
        },
        kc = g.im = {
            be: ["Dynamic"]
        },
        cc = g.l1 = Number;
    cc.be = ["Float"];
    var dc = g.mW = Boolean;
    dc.qV = ["Bool"];
    var lc = g.qa = {
            be: ["Class"]
        },
        mc = {};
    eb.content = [];
    var Tb = {},
        bc = ac.ArrayBuffer || ta;
    null == bc.prototype.slice && (bc.prototype.slice = ta.bF);
    var hc = ac.DataView || Hb,
        Vb = ac.Uint8Array || Da.nk;
    l.g$();
    (function() {
        var a = Event.prototype,
            b = M.prototype;
        a.bp = b.bp;
        a.oo = b.oo;
        a.get_target = b.get_target;
        a.set_target = b.set_target;
        a.get_currentTarget = b.get_currentTarget;
        a.set_currentTarget = b.set_currentTarget
    })();
    var da;
    $b.kw();
    n.oi = "img/overlay.png img/buffs.png img/color.png img/items.png img/nitems.png img/shadow.png img/visual.png".split(" ");
    n.jO = [5647, 70730, 13723, 1219610, 12147, 31811, 21898];
    I.VERSION = 40;
    I.fb = -49;
    Z.hv = 16384;
    H.hv = 16384;
    Ka.cK = [3, 4, 5, 6, 7];
    aa.cV = new P(0, 0);
    Na.count = 0;
    sa.hj = new Gb(0, 0);
    E.dJ = {}.toString;
    Da.BYTES_PER_ELEMENT = 1;
    F.g1 = new Ib;
    F.co = new Y;
    F.iR = !1;
    X.lH = [];
    l.kj = Date.now() + 0;
    k.bH = "Invalid key size. Key size needs to be either 128, 192 or 256 bits.\n";
    k.qU = "Invalid mode of operation. Supported modes are ECB, CBC, CTR or NONE.\n";
    k.hN = "Invalid block size. Block size is fixed at 128 bits.\n";
    k._6 = [0, 5, 10, 15, 4, 9, 14, 3, 8, 13, 2, 7, 12, 1, 6, 11];
    k.j0 = [99, 124, 119, 123, 242, 107, 111, 197, 48, 1, 103, 43, 254, 215, 171, 118, 202, 130, 201, 125, 250, 89, 71, 240, 173, 212, 162, 175, 156, 164, 114, 192, 183, 253, 147, 38, 54, 63, 247, 204, 52, 165, 229, 241, 113, 216, 49, 21, 4, 199, 35, 195, 24, 150,
        5, 154, 7, 18, 128, 226, 235, 39, 178, 117, 9, 131, 44, 26, 27, 110, 90, 160, 82, 59, 214, 179, 41, 227, 47, 132, 83, 209, 0, 237, 32, 252, 177, 91, 106, 203, 190, 57, 74, 76, 88, 207, 208, 239, 170, 251, 67, 77, 51, 133, 69, 249, 2, 127, 80, 60, 159, 168, 81, 163, 64, 143, 146, 157, 56, 245, 188, 182, 218, 33, 16, 255, 243, 210, 205, 12, 19, 236, 95, 151, 68, 23, 196, 167, 126, 61, 100, 93, 25, 115, 96, 129, 79, 220, 34, 42, 144, 136, 70, 238, 184, 20, 222, 94, 11, 219, 224, 50, 58, 10, 73, 6, 36, 92, 194, 211, 172, 98, 145, 149, 228, 121, 231, 200, 55, 109, 141, 213, 78, 169, 108, 86, 244, 234, 101, 122, 174, 8, 186, 120, 37, 46, 28,
        166, 180, 198, 232, 221, 116, 31, 75, 189, 139, 138, 112, 62, 181, 102, 72, 3, 246, 14, 97, 53, 87, 185, 134, 193, 29, 158, 225, 248, 152, 17, 105, 217, 142, 148, 155, 30, 135, 233, 206, 85, 40, 223, 140, 161, 137, 13, 191, 230, 66, 104, 65, 153, 45, 15, 176, 84, 187, 22
    ];
    x.b$ = new Ba;
    x.at = new Y;
    x.list = [];
    ma.hv = 16384;
    Db.gZ = ";Obsidian Skin;Regeneration;Swiftness;Gills;Ironskin;Mana Regeneration;Magic Power;Featherfall;Spelunker;Invisibility;Shine;Night Owl;Battle;Thorns;Water Walking;Archery;Hunter;Gravitation;Shadow Orb;Poisoned;Potion Sickness;Darkness;Cursed;On Fire!;Tipsy;Well Fed;Fairy;Werewolf;Clairvoyance;Bleeding;Confused;Slow;Weak;Merfolk;Silenced;Broken Armor;Horrified;The Tongue;Cursed Inferno;Pet Bunny;Baby Penguin;Pet Turtle;Paladins Shield;Frostburn;Baby Eater;Chilled;Frozen;Honey;Pygmies;Baby Skeletron Head;Baby Hornet;Tiki Spirit;Pet Lizard;Pet Parrot;Baby Truffle;Pet Sapling;Wisp;Rapid Healing;Shadow Dodge;Leaf Crystal;Baby Dinosaur;Ice Barrier;Panic!;Baby Slime;Eyeball Spring;Baby Snowman;Burning;Suffocation;Ichor;Venom;Weapon Imbue: Venom;Midas;Weapon Imbue: Cursed Flames;Weapon Imbue: Fire;Weapon Imbue: Gold;Weapon Imbue: Ichor;Weapon Imbue: Nanites;Weapon Imbue: Confetti;Weapon Imbue: Poison;Blackout;Pet Spider;Squashling;Ravens;Black Cat;Cursed Sapling;Water Candle;Cozy Fire;Chaos State;Heart Lamp;Rudolph;Puppy;Baby Grinch;Ammo Box;Mana Sickness;Beetle Endurance;Beetle Endurance;Beetle Endurance;Beetle Might;Beetle Might;Beetle Might;Fairy;Fairy;Wet;Mining;Heartreach;Calm;Builder;Titan;Flipper;Summoning;Dangersense;Ammo Reservation;Lifeforce;Endurance;Rage;Inferno;Wrath;Minecart;Lovestruck;Stinky;Fishing;Sonar;Crate;Warmth;Hornet;Imp;Zephyr Fish;Bunny Mount;Pigron Mount;Slime Mount;Turtle Mount;Bee Mount;Spider;Twins;Pirate;Mini Minotaur;Slime;Minecart;Sharknado;UFO;UFO Mount;Drill Mount;Scutlix Mount;Electrified;Moon Bite;Happy!;Banner;Feral Bite;Webbed;Bewitched;Life Drain;Magic Lantern;Shadowflame;Baby Face Monster;Crimson Heart;Stoned;Peace Candle;Star in a Bottle;Sharpened;Dazed;Deadly Sphere;;Obstructed;Distorted;Dryads Blessing;Minecart;Minecart;;Penetrated;Solar Blaze;Solar Blaze;Solar Blaze;Life Nebula;Life Nebula;Life Nebula;Mana Nebula;Mana Nebula;Mana Nebula;Damage Nebula;Damage Nebula;Damage Nebula;Stardust Cell;Celled;Minecart;Minecart;Dryads Bane;Stardust Guardian;Stardust Dragon;Daybroken;Suspicious Looking Eye".split(";");
    Db._I = ";Immune to lava;Provides life regeneration;25% increased movement speed;Breathe water instead of air;Increase defense by 8;Increased mana regeneration;20% increased magic damage;Press UP or DOWN to control speed of descent;Shows the location of treasure and ore;Grants invisibility;Emitting light;Increased night vision;Increased enemy spawn rate;Attackers also take damage;Press DOWN to enter water;20% increased arrow damage and speed;Shows the location of enemies;Press UP to reverse gravity;A magical orb that provides light;Slowly losing life;Cannot consume anymore healing items;Decreased light vision;Cannot use any items;Slowly losing life;Increased melee abilities, lowered defense;Minor improvements to all stats;A fairy is following you;Physical abilities are increased;Magic powers are increased;Cannot regenerate life;Movement is reversed;Movement speed is reduced;Physical abilities are decreased;Can breathe and move easily underwater;Cannot use items that require mana;Defense is cut in half;You have seen something nasty, there is no escape.;You are being sucked into the mouth;Losing life;I think it wants your carrot;I think it wants your fish;Happy turtle time!;25% of damage taken will be redirected to another player;Its either really hot or really cold. Either way it REALLY hurts;A baby Eater of Souls is following you;Your movement speed has been reduced;You cant move!;Life regeneration is increased;The pygmies will fight for you;Dont even ask...;It thinks you are its mother;A friendly spirit is following you;Chillin like a reptilian;Polly wants the cracker;Isnt this just soooo cute?;A little sapling is following you;A wisp is following you;Life regeneration is greatly increased;You will dodge the next attack;Shoots crystal leaves at nearby enemies;A baby dinosaur is following you;Damage taken is reduced by 25%;Movement speed is increased;The baby slime will fight for you;An eyeball spring is following you;A baby snowman is following you;Losing life and slowed movement;Losing life;Reduced defense;Losing life;Melee attacks inflict venom on your targets;Drop more money on death;Melee attacks inflict enemies with cursed flames;Melee attacks set enemies on fire;Melee attacks make enemies drop more gold;Melee attacks decrease enemies defense;Melee attacks confuse enemies;Melee attacks cause confetti to appear;Melee attacks poison enemies;Light vision severely reduced;A spider is following you;A squashling is following you;The ravens will attack your enemies;A black kitty is following you;A cursed sapling is following you;Increased monster spawn rate;Life regen is slightly increased;Using the Rod of Discord will take life;Life regen is increased;Riding the red nosed reindeer;A puppy is following you;A baby grinch is following you;20% chance to not consume ammo;Magic damage reduced by ;Damage taken reduced by 15%;Damage taken reduced by 30%;Damage taken reduced by 45%;Melee damage and speed increase by 10%;Melee damage and speed increase by 20%;Melee damage and speed increase by 30%;A fairy is following you;A fairy is following you;You are dripping water;25% increased mining speed;Increased heart pickup range;Reduced enemy aggression;Increased placement speed and range;Increased knockback;Move like normal in water;Increased max number of minions;You can see nearby hazards;20% chance to not consume ammo;20% increased max life;10% reduced damage;10% increased critical chance;Nearby enemies are ignited;10% increased damage;Riding in a minecart;You are in love!;You smell terrible;Increased fishing level;You can see whats biting your hook;Greater chance of fishing up a crate;Reduced damage from cold sources;The hornet will fight for you;The imp will fight for you;It likes swimming around you;You are craving carrots;Now you see me....;BOOOIIINNNG!;Slow if by land, zoom if by sea;BzzzBzzBZZZZBzzz;The spider will fight for you;The twins will fight for you;The pirate will fight for you;How do you defeat a mini Minotaur?;You are slimy and sticky;Riding in a minecart;The sharknado will fight for you;The UFO will fight for you;Its a good thing you had a MAC;Riding in a flying drill;Pew Pew;You cannot move;You are unable to absorb healing effects;Movement speed increased and monster spawns reduced;Increased damage and defense from the following:;Increased damage, Decreased life regen, Causes status effects;You are stuck;Increased max number of minions;Increased life regeneration;An enchanted lantern is lighting your way;Losing life;A baby face monster is following you;A magical heart that provides light;You are completely petrified!;Decreased monster spawn rate;Increased mana regeneration;Melee weapons have armor penetration;Movement is greatly slowed;The Deadly Sphere will fight for you;;You cant see!;Gravity around you is distorted;The power of nature protects you;Riding in a minecart;Riding in a minecart;;Bleeding Out;Damage taken reduced by 30%, repel enemies when taking damage;Damage taken reduced by 30%, repel enemies when taking damage;Damage taken reduced by 30%, repel enemies when taking damage;Increased life regeneration;Increased life regeneration;Increased life regeneration;Increased mana regeneration;Increased mana regeneration;Increased mana regeneration;15% increased damage;30% increased damage;45% increased damage;The stardust cell will fight for you;being eaten by cells;Riding in a minecart;Riding in a minecart;The power of nature compells you;The stardust guardian will protect you;The stardust dragon will protect you;Incenerated by solar rays;A suspicious looking eye that provides light".split(";");
    oa.c0 = 0;
    oa.hv = 3929;
    oa.count = 3930;
    oa.gZ = ";Iron Pickaxe;Dirt Block;Stone Block;Iron Broadsword;Mushroom;Iron Shortsword;Iron Hammer;Torch;Wood;Iron Axe;Iron Ore;Copper Ore;Gold Ore;Silver Ore;Copper Watch;Silver Watch;Gold Watch;Depth Meter;Gold Bar;Copper Bar;Silver Bar;Iron Bar;Gel;Wooden Sword;Wooden Door;Stone Wall;Acorn;Lesser Healing Potion;Life Crystal;Dirt Wall;Bottle;Wooden Table;Furnace;Wooden Chair;Iron Anvil;Work Bench;Goggles;Lens;Wooden Bow;Wooden Arrow;Flaming Arrow;Shuriken;Suspicious Looking Eye;Demon Bow;War Axe of the Night;Lights Bane;Unholy Arrow;Chest;Band of Regeneration;Magic Mirror;Jesters Arrow;Angel Statue;Cloud in a Bottle;Hermes Boots;Enchanted Boomerang;Demonite Ore;Demonite Bar;Heart;Corrupt Seeds;Vile Mushroom;Ebonstone Block;Grass Seeds;Sunflower;Vilethorn;Starfury;Purification Powder;Vile Powder;Rotten Chunk;Worm Tooth;Worm Food;Copper Coin;Silver Coin;Gold Coin;Platinum Coin;Fallen Star;Copper Greaves;Iron Greaves;Silver Greaves;Gold Greaves;Copper Chainmail;Iron Chainmail;Silver Chainmail;Gold Chainmail;Grappling Hook;Chain;Shadow Scale;Piggy Bank;Mining Helmet;Copper Helmet;Iron Helmet;Silver Helmet;Gold Helmet;Wood Wall;Wood Platform;Flintlock Pistol;Musket;Musket Ball;Minishark;Iron Bow;Shadow Greaves;Shadow Scalemail;Shadow Helmet;Nightmare Pickaxe;The Breaker;Candle;Copper Chandelier;Silver Chandelier;Gold Chandelier;Mana Crystal;Lesser Mana Potion;Band of Starpower;Flower of Fire;Magic Missile;Dirt Rod;Shadow Orb;Meteorite;Meteorite Bar;Hook;Flamarang;Molten Fury;Fiery Greatsword;Molten Pickaxe;Meteor Helmet;Meteor Suit;Meteor Leggings;Bottled Water;Space Gun;Rocket Boots;Gray Brick;Gray Brick Wall;Red Brick;Red Brick Wall;Clay Block;Blue Brick;Blue Brick Wall;Chain Lantern;Green Brick;Green Brick Wall;Pink Brick;Pink Brick Wall;Gold Brick;Gold Brick Wall;Silver Brick;Silver Brick Wall;Copper Brick;Copper Brick Wall;Spike;Water Candle;Book;Cobweb;Necro Helmet;Necro Breastplate;Necro Greaves;Bone;Muramasa;Cobalt Shield;Aqua Scepter;Lucky Horseshoe;Shiny Red Balloon;Harpoon;Spiky Ball;Ball O Hurt;Blue Moon;Handgun;Water Bolt;Bomb;Dynamite;Grenade;Sand Block;Glass;Sign;Ash Block;Obsidian;Hellstone;Hellstone Bar;Mud Block;Sapphire;Ruby;Emerald;Topaz;Amethyst;Diamond;Glowing Mushroom;Star;Ivy Whip;Breathing Reed;Flipper;Healing Potion;Mana Potion;Blade of Grass;Thorn Chakram;Obsidian Brick;Obsidian Skull;Mushroom Grass Seeds;Jungle Grass Seeds;Wooden Hammer;Star Cannon;Blue Phaseblade;Red Phaseblade;Green Phaseblade;Purple Phaseblade;White Phaseblade;Yellow Phaseblade;Meteor Hamaxe;Empty Bucket;Water Bucket;Lava Bucket;Jungle Rose;Stinger;Vine;Feral Claws;Anklet of the Wind;Staff of Regrowth;Hellstone Brick;Whoopie Cushion;Shackle;Molten Hamaxe;Flamelash;Phoenix Blaster;Sunfury;Hellforge;Clay Pot;Natures Gift;Bed;Silk;Lesser Restoration Potion;Restoration Potion;Jungle Hat;Jungle Shirt;Jungle Pants;Molten Helmet;Molten Breastplate;Molten Greaves;Meteor Shot;Sticky Bomb;Black Lens;Sunglasses;Wizard Hat;Top Hat;Tuxedo Shirt;Tuxedo Pants;Summer Hat;Bunny Hood;Plumbers Hat;Plumbers Shirt;Plumbers Pants;Heros Hat;Heros Shirt;Heros Pants;Fish Bowl;Archaeologists Hat;Archaeologists Jacket;Archaeologists Pants;Black Thread;Green Thread;Ninja Hood;Ninja Shirt;Ninja Pants;Leather;Red Hat;Goldfish;Robe;Robot Hat;Gold Crown;Hellfire Arrow;Sandgun;Guide Voodoo Doll;Diving Helmet;Familiar Shirt;Familiar Pants;Familiar Wig;Demon Scythe;Nights Edge;Dark Lance;Coral;Cactus;Trident;Silver Bullet;Throwing Knife;Spear;Blowpipe;Glowstick;Seed;Wooden Boomerang;Aglet;Sticky Glowstick;Poisoned Knife;Obsidian Skin Potion;Regeneration Potion;Swiftness Potion;Gills Potion;Ironskin Potion;Mana Regeneration Potion;Magic Power Potion;Featherfall Potion;Spelunker Potion;Invisibility Potion;Shine Potion;Night Owl Potion;Battle Potion;Thorns Potion;Water Walking Potion;Archery Potion;Hunter Potion;Gravitation Potion;Gold Chest;Daybloom Seeds;Moonglow Seeds;Blinkroot Seeds;Deathweed Seeds;Waterleaf Seeds;Fireblossom Seeds;Daybloom;Moonglow;Blinkroot;Deathweed;Waterleaf;Fireblossom;Shark Fin;Feather;Tombstone;Mime Mask;Antlion Mandible;Illegal Gun Parts;The Doctors Shirt;The Doctors Pants;Golden Key;Shadow Chest;Shadow Key;Obsidian Brick Wall;Jungle Spores;Loom;Piano;Dresser;Bench;Bathtub;Red Banner;Green Banner;Blue Banner;Yellow Banner;Lamp Post;Tiki Torch;Barrel;Chinese Lantern;Cooking Pot;Safe;Skull Lantern;Trash Can;Candelabra;Pink Vase;Mug;Keg;Ale;Bookcase;Throne;Bowl;Bowl of Soup;Toilet;Grandfather Clock;Armor Statue;Goblin Battle Standard;Tattered Cloth;Sawmill;Cobalt Ore;Mythril Ore;Adamantite Ore;Pwnhammer;Excalibur;Hallowed Seeds;Ebonsand Block;Cobalt Hat;Cobalt Helmet;Cobalt Mask;Cobalt Breastplate;Cobalt Leggings;Mythril Hood;Mythril Helmet;Mythril Hat;Mythril Chainmail;Mythril Greaves;Cobalt Bar;Mythril Bar;Cobalt Chainsaw;Mythril Chainsaw;Cobalt Drill;Mythril Drill;Adamantite Chainsaw;Adamantite Drill;Dao of Pow;Mythril Halberd;Adamantite Bar;Glass Wall;Compass;Diving Gear;GPS;Obsidian Horseshoe;Obsidian Shield;Tinkerers Workshop;Cloud in a Balloon;Adamantite Headgear;Adamantite Helmet;Adamantite Mask;Adamantite Breastplate;Adamantite Leggings;Spectre Boots;Adamantite Glaive;Toolbelt;Pearlsand Block;Pearlstone Block;Mining Shirt;Mining Pants;Pearlstone Brick;Iridescent Brick;Mudstone Brick;Cobalt Brick;Mythril Brick;Pearlstone Brick Wall;Iridescent Brick Wall;Mudstone Brick Wall;Cobalt Brick Wall;Mythril Brick Wall;Holy Water;Unholy Water;Silt Block;Fairy Bell;Breaker Blade;Blue Torch;Red Torch;Green Torch;Purple Torch;White Torch;Yellow Torch;Demon Torch;Clockwork Assault Rifle;Cobalt Repeater;Mythril Repeater;Dual Hook;Star Statue;Sword Statue;Slime Statue;Goblin Statue;Shield Statue;Bat Statue;Fish Statue;Bunny Statue;Skeleton Statue;Reaper Statue;Woman Statue;Imp Statue;Gargoyle Statue;Gloom Statue;Hornet Statue;Bomb Statue;Crab Statue;Hammer Statue;Potion Statue;Spear Statue;Cross Statue;Jellyfish Statue;Bow Statue;Boomerang Statue;Boot Statue;Chest Statue;Bird Statue;Axe Statue;Corrupt Statue;Tree Statue;Anvil Statue;Pickaxe Statue;Mushroom Statue;Eyeball Statue;Pillar Statue;Heart Statue;Pot Statue;Sunflower Statue;King Statue;Queen Statue;Piranha Statue;Planked Wall;Wooden Beam;Adamantite Repeater;Adamantite Sword;Cobalt Sword;Mythril Sword;Moon Charm;Ruler;Crystal Ball;Disco Ball;Sorcerer Emblem;Warrior Emblem;Ranger Emblem;Demon Wings;Angel Wings;Magical Harp;Rainbow Rod;Ice Rod;Neptunes Shell;Mannequin;Greater Healing Potion;Greater Mana Potion;Pixie Dust;Crystal Shard;Clown Hat;Clown Shirt;Clown Pants;Flamethrower;Bell;Harp;Red Wrench;Wire Cutter;Active Stone Block;Inactive Stone Block;Lever;Laser Rifle;Crystal Bullet;Holy Arrow;Magic Dagger;Crystal Storm;Cursed Flames;Soul of Light;Soul of Night;Cursed Flame;Cursed Torch;Adamantite Forge;Mythril Anvil;Unicorn Horn;Dark Shard;Light Shard;Red Pressure Plate;Wire;Spell Tome;Star Cloak;Megashark;Shotgun;Philosophers Stone;Titan Glove;Cobalt Naginata;Switch;Dart Trap;Boulder;Green Pressure Plate;Gray Pressure Plate;Brown Pressure Plate;Mechanical Eye;Cursed Arrow;Cursed Bullet;Soul of Fright;Soul of Might;Soul of Sight;Gungnir;Hallowed Plate Mail;Hallowed Greaves;Hallowed Helmet;Cross Necklace;Mana Flower;Mechanical Worm;Mechanical Skull;Hallowed Headgear;Hallowed Mask;Slime Crown;Light Disc;Music Box (Overworld Day);Music Box (Eerie);Music Box (Night);Music Box (Title);Music Box (Underground);Music Box (Boss 1);Music Box (Jungle);Music Box (Corruption);Music Box (Underground Corruption);Music Box (The Hallow);Music Box (Boss 2);Music Box (Underground Hallow);Music Box (Boss 3);Soul of Flight;Music Box;Demonite Brick;Hallowed Repeater;Drax;Explosives;Inlet Pump;Outlet Pump;1 Second Timer;3 Second Timer;5 Second Timer;Candy Cane Block;Candy Cane Wall;Santa Hat;Santa Shirt;Santa Pants;Green Candy Cane Block;Green Candy Cane Wall;Snow Block;Snow Brick;Snow Brick Wall;Blue Light;Red Light;Green Light;Blue Present;Green Present;Yellow Present;Snow Globe;Carrot;Adamantite Beam;Adamantite Beam Wall;Demonite Brick Wall;Sandstone Brick;Sandstone Brick Wall;Ebonstone Brick;Ebonstone Brick Wall;Red Stucco;Yellow Stucco;Green Stucco;Gray Stucco;Red Stucco Wall;Yellow Stucco Wall;Green Stucco Wall;Gray Stucco Wall;Ebonwood;Rich Mahogany;Pearlwood;Ebonwood Wall;Rich Mahogany Wall;Pearlwood Wall;Ebonwood Chest;Rich Mahogany Chest;Pearlwood Chest;Ebonwood Chair;Rich Mahogany Chair;Pearlwood Chair;Ebonwood Platform;Rich Mahogany Platform;Pearlwood Platform;Bone Platform;Ebonwood Work Bench;Rich Mahogany Work Bench;Pearlwood Work Bench;Ebonwood Table;Rich Mahogany Table;Pearlwood Table;Ebonwood Piano;Rich Mahogany Piano;Pearlwood Piano;Ebonwood Bed;Rich Mahogany Bed;Pearlwood Bed;Ebonwood Dresser;Rich Mahogany Dresser;Pearlwood Dresser;Ebonwood Door;Rich Mahogany Door;Pearlwood Door;Ebonwood Sword;Ebonwood Hammer;Ebonwood Bow;Rich Mahogany Sword;Rich Mahogany Hammer;Rich Mahogany Bow;Pearlwood Sword;Pearlwood Hammer;Pearlwood Bow;Rainbow Brick;Rainbow Brick Wall;Ice Block;Reds Wings;Reds Helmet;Reds Breastplate;Reds Leggings;Fish;Ice Boomerang;Keybrand;Cutlass;Boreal Wood Work Bench;True Excalibur;True Nights Edge;Frostbrand;Boreal Wood Table;Red Potion;Tactical Shotgun;Ivy Chest;Ice Chest;Marrow;Unholy Trident;Frost Helmet;Frost Breastplate;Frost Leggings;Tin Helmet;Tin Chainmail;Tin Greaves;Lead Helmet;Lead Chainmail;Lead Greaves;Tungsten Helmet;Tungsten Chainmail;Tungsten Greaves;Platinum Helmet;Platinum Chainmail;Platinum Greaves;Tin Ore;Lead Ore;Tungsten Ore;Platinum Ore;Tin Bar;Lead Bar;Tungsten Bar;Platinum Bar;Tin Watch;Tungsten Watch;Platinum Watch;Tin Chandelier;Tungsten Chandelier;Platinum Chandelier;Platinum Candle;Platinum Candelabra;Platinum Crown;Lead Anvil;Tin Brick;Tungsten Brick;Platinum Brick;Tin Brick Wall;Tungsten Brick Wall;Platinum Brick Wall;Beam Sword;Ice Blade;Ice Bow;Frost Staff;Wood Helmet;Wood Breastplate;Wood Greaves;Ebonwood Helmet;Ebonwood Breastplate;Ebonwood Greaves;Rich Mahogany Helmet;Rich Mahogany Breastplate;Rich Mahogany Greaves;Pearlwood Helmet;Pearlwood Breastplate;Pearlwood Greaves;Amethyst Staff;Topaz Staff;Sapphire Staff;Emerald Staff;Ruby Staff;Diamond Staff;Grass Wall;Jungle Wall;Flower Wall;Jetpack;Butterfly Wings;Cactus Wall;Cloud;Cloud Wall;Seaweed;Rune Hat;Rune Robe;Mushroom Spear;Terra Blade;Grenade Launcher;Rocket Launcher;Proximity Mine Launcher;Fairy Wings;Slime Block;Flesh Block;Mushroom Wall;Rain Cloud;Bone Block;Frozen Slime Block;Bone Block Wall;Slime Block Wall;Flesh Block Wall;Rocket I;Rocket II;Rocket III;Rocket IV;Asphalt Block;Cobalt Pickaxe;Mythril Pickaxe;Adamantite Pickaxe;Clentaminator;Green Solution;Blue Solution;Purple Solution;Dark Blue Solution;Red Solution;Harpy Wings;Bone Wings;Hammush;Nettle Burst;Ankh Banner;Snake Banner;Omega Banner;Crimson Helmet;Crimson Scalemail;Crimson Greaves;Blood Butcherer;Tendon Bow;Flesh Grinder;Deathbringer Pickaxe;Blood Lust Cluster;The Undertaker;The Meatball;The Rotted Fork;Eskimo Hood;Eskimo Coat;Eskimo Pants;Living Wood Chair;Cactus Chair;Bone Chair;Flesh Chair;Mushroom Chair;Bone Work Bench;Cactus Work Bench;Flesh Work Bench;Mushroom Work Bench;Slime Work Bench;Cactus Door;Flesh Door;Mushroom Door;Living Wood Door;Bone Door;Flame Wings;Frozen Wings;Spectre Wings;Sunplate Block;Disc Wall;Skyware Chair;Bone Table;Flesh Table;Living Wood Table;Skyware Table;Living Wood Chest;Living Wood Wand;Purple Ice Block;Pink Ice Block;Red Ice Block;Crimstone Block;Skyware Door;Skyware Chest;Steampunk Hat;Steampunk Shirt;Steampunk Pants;Bee Hat;Bee Shirt;Bee Pants;World Banner;Sun Banner;Gravity Banner;Pharaohs Mask;Actuator;Blue Wrench;Green Wrench;Blue Pressure Plate;Yellow Pressure Plate;Discount Card;Lucky Coin;Unicorn on a Stick;Sandstorm in a Bottle;Boreal Wood Sofa;Beach Ball;Charm of Myths;Moon Shell;Star Veil;Water Walking Boots;Tiara;Princess Dress;Pharaohs Robe;Green Cap;Mushroom Cap;Tam O Shanter;Mummy Mask;Mummy Shirt;Mummy Pants;Cowboy Hat;Cowboy Jacket;Cowboy Pants;Pirate Hat;Pirate Shirt;Pirate Pants;Viking Helmet;Crimtane Ore;Cactus Sword;Cactus Pickaxe;Ice Brick;Ice Brick Wall;Adhesive Bandage;Armor Polish;Bezoar;Blindfold;Fast Clock;Megaphone;Nazar;Vitamins;Trifold Map;Cactus Helmet;Cactus Breastplate;Cactus Leggings;Power Glove;Lightning Boots;Sun Stone;Moon Stone;Armor Bracing;Medicated Bandage;The Plan;Countercurse Mantra;Coin Gun;Lava Charm;Obsidian Water Walking Boots;Lava Waders;Pure Water Fountain;Desert Water Fountain;Shadewood;Shadewood Door;Shadewood Platform;Shadewood Chest;Shadewood Chair;Shadewood Work Bench;Shadewood Table;Shadewood Dresser;Shadewood Piano;Shadewood Bed;Shadewood Sword;Shadewood Hammer;Shadewood Bow;Shadewood Helmet;Shadewood Breastplate;Shadewood Greaves;Shadewood Wall;Cannon;Cannonball;Flare Gun;Flare;Bone Wand;Leaf Wand;Flying Carpet;Avenger Emblem;Mechanical Glove;Land Mine;Paladins Shield;Web Slinger;Jungle Water Fountain;Icy Water Fountain;Corrupt Water Fountain;Crimson Water Fountain;Hallowed Water Fountain;Blood Water Fountain;Umbrella;Chlorophyte Ore;Steampunk Wings;Snowball;Ice Skates;Snowball Launcher;Web Covered Chest;Climbing Claws;Ancient Iron Helmet;Ancient Gold Helmet;Ancient Shadow Helmet;Ancient Shadow Scalemail;Ancient Shadow Greaves;Ancient Necro Helmet;Ancient Cobalt Helmet;Ancient Cobalt Breastplate;Ancient Cobalt Leggings;Black Belt;Boomstick;Rope;Campfire;Marshmallow;Marshmallow on a Stick;Cooked Marshmallow;Red Rocket;Green Rocket;Blue Rocket;Yellow Rocket;Ice Torch;Shoe Spikes;Tiger Climbing Gear;Tabi;Pink Eskimo Hood;Pink Eskimo Coat;Pink Eskimo Pants;Pink Thread;Mana Regeneration Band;Sandstorm in a Balloon;Master Ninja Gear;Rope Coil;Blowgun;Blizzard in a Bottle;Frostburn Arrow;Enchanted Sword;Pickaxe Axe;Cobalt Waraxe;Mythril Waraxe;Adamantite Waraxe;Eaters Bone;Blend-O-Matic;Meat Grinder;Extractinator;Solidifier;Amber;Confetti Gun;Chlorophyte Mask;Chlorophyte Helmet;Chlorophyte Headgear;Chlorophyte Plate Mail;Chlorophyte Greaves;Chlorophyte Bar;Red Dye;Orange Dye;Yellow Dye;Lime Dye;Green Dye;Teal Dye;Cyan Dye;Sky Blue Dye;Blue Dye;Purple Dye;Violet Dye;Pink Dye;Red and Black Dye;Orange and Black Dye;Yellow and Black Dye;Lime and Black Dye;Green and Black Dye;Teal and Black Dye;Cyan and Black Dye;Sky Blue and Black Dye;Blue and Black Dye;Purple and Black Dye;Violet and Black Dye;Pink and Black Dye;Flame Dye;Flame and Black Dye;Green Flame Dye;Green Flame and Black Dye;Blue Flame Dye;Blue Flame and Black Dye;Silver Dye;Bright Red Dye;Bright Orange Dye;Bright Yellow Dye;Bright Lime Dye;Bright Green Dye;Bright Teal Dye;Bright Cyan Dye;Bright Sky Blue Dye;Bright Blue Dye;Bright Purple Dye;Bright Violet Dye;Bright Pink Dye;Black Dye;Red and Silver Dye;Orange and Silver Dye;Yellow and Silver Dye;Lime and Silver Dye;Green and Silver Dye;Teal and Silver Dye;Cyan and Silver Dye;Sky Blue and Silver Dye;Blue and Silver Dye;Purple and Silver Dye;Violet and Silver Dye;Pink and Silver Dye;Intense Flame Dye;Intense Green Flame Dye;Intense Blue Flame Dye;Rainbow Dye;Intense Rainbow Dye;Yellow Gradient Dye;Cyan Gradient Dye;Violet Gradient Dye;Paintbrush;Paint Roller;Red Paint;Orange Paint;Yellow Paint;Lime Paint;Green Paint;Teal Paint;Cyan Paint;Sky Blue Paint;Blue Paint;Purple Paint;Violet Paint;Pink Paint;Deep Red Paint;Deep Orange Paint;Deep Yellow Paint;Deep Lime Paint;Deep Green Paint;Deep Teal Paint;Deep Cyan Paint;Deep Sky Blue Paint;Deep Blue Paint;Deep Purple Paint;Deep Violet Paint;Deep Pink Paint;Black Paint;White Paint;Gray Paint;Paint Scraper;Lihzahrd Brick;Lihzahrd Brick Wall;Slush Block;Palladium Ore;Orichalcum Ore;Titanium Ore;Teal Mushroom;Green Mushroom;Sky Blue Flower;Yellow Marigold;Blue Berries;Lime Kelp;Pink Prickly Pear;Orange Bloodroot;Red Husk;Cyan Husk;Violet Husk;Purple Mucos;Black Ink;Dye Vat;Bee Gun;Possessed Hatchet;Bee Keeper;Hive;Honey Block;Hive Wall;Crispy Honey Block;Honey Bucket;Hive Wand;Beenade;Gravity Globe;Honey Comb;Abeemination;Bottled Honey;Rain Hat;Rain Coat;Lihzahrd Door;Dungeon Door;Lead Door;Iron Door;Temple Key;Lihzahrd Chest;Lihzahrd Chair;Lihzahrd Table;Lihzahrd Work Bench;Super Dart Trap;Flame Trap;Spiky Ball Trap;Spear Trap;Wooden Spike;Lihzahrd Pressure Plate;Lihzahrd Statue;Lihzahrd Watcher Statue;Lihzahrd Guardian Statue;Wasp Gun;Piranha Gun;Pygmy Staff;Pygmy Necklace;Tiki Mask;Tiki Shirt;Tiki Pants;Leaf Wings;Blizzard in a Balloon;Bundle of Balloons;Bat Wings;Bone Sword;Hercules Beetle;Smoke Bomb;Bone Key;Nectar;Tiki Totem;Lizard Egg;Grave Marker;Cross Grave Marker;Headstone;Gravestone;Obelisk;Leaf Blower;Chlorophyte Bullet;Parrot Cracker;Strange Glowing Mushroom;Seedling;Wisp in a Bottle;Palladium Bar;Palladium Sword;Palladium Pike;Palladium Repeater;Palladium Pickaxe;Palladium Drill;Palladium Chainsaw;Orichalcum Bar;Orichalcum Sword;Orichalcum Halberd;Orichalcum Repeater;Orichalcum Pickaxe;Orichalcum Drill;Orichalcum Chainsaw;Titanium Bar;Titanium Sword;Titanium Trident;Titanium Repeater;Titanium Pickaxe;Titanium Drill;Titanium Chainsaw;Palladium Mask;Palladium Helmet;Palladium Headgear;Palladium Breastplate;Palladium Leggings;Orichalcum Mask;Orichalcum Helmet;Orichalcum Headgear;Orichalcum Breastplate;Orichalcum Leggings;Titanium Mask;Titanium Helmet;Titanium Headgear;Titanium Breastplate;Titanium Leggings;Orichalcum Anvil;Titanium Forge;Palladium Waraxe;Orichalcum Waraxe;Titanium Waraxe;Hallowed Bar;Chlorophyte Claymore;Chlorophyte Saber;Chlorophyte Partisan;Chlorophyte Shotbow;Chlorophyte Pickaxe;Chlorophyte Drill;Chlorophyte Chainsaw;Chlorophyte Greataxe;Chlorophyte Warhammer;Chlorophyte Arrow;Amethyst Hook;Topaz Hook;Sapphire Hook;Emerald Hook;Ruby Hook;Diamond Hook;Amber Mosquito;Umbrella Hat;Nimbus Rod;Orange Torch;Crimsand Block;Bee Cloak;Eye of the Golem;Honey Balloon;Blue Horseshoe Balloon;White Horseshoe Balloon;Yellow Horseshoe Balloon;Frozen Turtle Shell;Sniper Rifle;Venus Magnum;Crimson Rod;Crimtane Bar;Stynger;Flower Pow;Rainbow Gun;Stynger Bolt;Chlorophyte Jackhammer;Teleporter;Flower of Frost;Uzi;Magnet Sphere;Purple Stained Glass;Yellow Stained Glass;Blue Stained Glass;Green Stained Glass;Red Stained Glass;Multicolored Stained Glass;Skeletron Hand;Skull;Balla Hat;Gangsta Hat;Sailor Hat;Eye Patch;Sailor Shirt;Sailor Pants;Skeletron Mask;Amethyst Robe;Topaz Robe;Sapphire Robe;Emerald Robe;Ruby Robe;Diamond Robe;White Tuxedo Shirt;White Tuxedo Pants;Panic Necklace;Life Fruit;Lihzahrd Altar;Lihzahrd Power Cell;Picksaw;Heat Ray;Staff of Earth;Golem Fist;Water Chest;Binoculars;Rifle Scope;Destroyer Emblem;High Velocity Bullet;Jellyfish Necklace;Zombie Arm;The Axe;Ice Sickle;Clothier Voodoo Doll;Poison Staff;Slime Staff;Poison Dart;Eye Spring;Toy Sled;Book of Skulls;KO Cannon;Pirate Map;Turtle Helmet;Turtle Scale Mail;Turtle Leggings;Snowball Cannon;Bone Pickaxe;Magic Quiver;Magma Stone;Obsidian Rose;Bananarang;Chain Knife;Rod of Discord;Death Sickle;Turtle Shell;Tissue Sample;Vertebrae;Bloody Spine;Ichor;Ichor Torch;Ichor Arrow;Ichor Bullet;Golden Shower;Bunny Cannon;Explosive Bunny;Vial of Venom;Flask of Venom;Venom Arrow;Venom Bullet;Fire Gauntlet;Cog;Confetti;Nanites;Explosive Powder;Gold Dust;Party Bullet;Nano Bullet;Exploding Bullet;Golden Bullet;Flask of Cursed Flames;Flask of Fire;Flask of Gold;Flask of Ichor;Flask of Nanites;Flask of Party;Flask of Poison;Eye of Cthulhu Trophy;Eater of Worlds Trophy;Brain of Cthulhu Trophy;Skeletron Trophy;Queen Bee Trophy;Wall of Flesh Trophy;Destroyer Trophy;Skeletron Prime Trophy;Retinazer Trophy;Spazmatism Trophy;Plantera Trophy;Golem Trophy;Blood Moon Rising;The Hanged Man;Glory of the Fire;Bone Warp;Wall Skeleton;Hanging Skeleton;Blue Slab Wall;Blue Tiled Wall;Pink Slab Wall;Pink Tiled Wall;Green Slab Wall;Green Tiled Wall;Blue Brick Platform;Pink Brick Platform;Green Brick Platform;Metal Shelf;Brass Shelf;Wood Shelf;Brass Lantern;Caged Lantern;Carriage Lantern;Alchemy Lantern;Diabolist Lamp;Oil Rag Sconse;Blue Dungeon Chair;Blue Dungeon Table;Blue Dungeon Work Bench;Green Dungeon Chair;Green Dungeon Table;Green Dungeon Work Bench;Pink Dungeon Chair;Pink Dungeon Table;Pink Dungeon Work Bench;Blue Dungeon Candle;Green Dungeon Candle;Pink Dungeon Candle;Blue Dungeon Vase;Green Dungeon Vase;Pink Dungeon Vase;Blue Dungeon Door;Green Dungeon Door;Pink Dungeon Door;Blue Dungeon Bookcase;Green Dungeon Bookcase;Pink Dungeon Bookcase;Catacomb;Dungeon Shelf;Skellington J Skellingsworth;The Cursed Man;The Eye Sees the End;Something Evil is Watching You;The Twins Have Awoken;The Screamer;Goblins Playing Poker;Dryadisque;Sunflowers;Terrarian Gothic;Beanie;Imbuing Station;Star in a Bottle;Empty Bullet;Impact;Powered by Birds;The Destroyer;The Persistency of Eyes;Unicorn Crossing the Hallows;Great Wave;Starry Night;Guide Picasso;The Guardians Gaze;Father of Someone;Nurse Lisa;Shadowbeam Staff;Inferno Fork;Spectre Staff;Wooden Fence;Lead Fence;Bubble Machine;Bubble Wand;Marching Bones Banner;Necromantic Sign;Rusted Company Standard;Ragged Brotherhood Sigil;Molten Legion Flag;Diabolic Sigil;Obsidian Platform;Obsidian Door;Obsidian Chair;Obsidian Table;Obsidian Work Bench;Obsidian Vase;Obsidian Bookcase;Hellbound Banner;Hell Hammer Banner;Helltower Banner;Lost Hopes of Man Banner;Obsidian Watcher Banner;Lava Erupts Banner;Blue Dungeon Bed;Green Dungeon Bed;Pink Dungeon Bed;Obsidian Bed;Waldo;Darkness;Dark Soul Reaper;Land;Trapped Ghost;Demons Eye;Finding Gold;First Encounter;Good Morning;Underground Reward;Through the Window;Place Above the Clouds;Do Not Step on the Grass;Cold Waters in the White Land;Lightless Chasms;The Land of Deceiving Looks;Daylight;Secret of the Sands;Deadland Comes Alive;Evil Presence;Sky Guardian;American Explosive;Discover;Hand Earth;Old Miner;Skelehead;Facing the Cerebral Mastermind;Lake of Fire;Trio Super Heroes;Spectre Hood;Spectre Robe;Spectre Pants;Spectre Pickaxe;Spectre Hamaxe;Ectoplasm;Gothic Chair;Gothic Table;Gothic Work Bench;Gothic Bookcase;Paladins Hammer;SWAT Helmet;Bee Wings;Giant Harpy Feather;Bone Feather;Fire Feather;Ice Feather;Broken Bat Wing;Tattered Bee Wing;Large Amethyst;Large Topaz;Large Sapphire;Large Emerald;Large Ruby;Large Diamond;Jungle Chest;Corruption Chest;Crimson Chest;Hallowed Chest;Frozen Chest;Jungle Key;Corruption Key;Crimson Key;Hallowed Key;Frozen Key;Imp Face;Ominous Presence;Shining Moon;Living Gore;Flowing Magma;Spectre Paintbrush;Spectre Paint Roller;Spectre Paint Scraper;Shroomite Headgear;Shroomite Mask;Shroomite Helmet;Shroomite Breastplate;Shroomite Leggings;Autohammer;Shroomite Bar;S.D.M.G.;Cenxs Tiara;Cenxs Breastplate;Cenxs Leggings;Crownos Mask;Crownos Breastplate;Crownos Leggings;Wills Helmet;Wills Breastplate;Wills Leggings;Jims Helmet;Jims Breastplate;Jims Leggings;Aarons Helmet;Aarons Breastplate;Aarons Leggings;Vampire Knives;Broken Hero Sword;Scourge of the Corruptor;Staff of the Frost Hydra;The Creation of the Guide;The Merchant;Crowno Devours His Lunch;Rare Enchantment;Glorious Night;Sweetheart Necklace;Flurry Boots;D-Towns Helmet;D-Towns Breastplate;D-Towns Leggings;D-Towns Wings;Wills Wings;Crownos Wings;Cenxs Wings;Cenxs Dress;Cenxs Dress Pants;Palladium Column;Palladium Column Wall;Bubblegum Block;Bubblegum Block Wall;Titanstone Block;Titanstone Block Wall;Magic Cuffs;Music Box (Snow);Music Box (Space);Music Box (Crimson);Music Box (Boss 4);Music Box (Alt Overworld Day);Music Box (Rain);Music Box (Ice);Music Box (Desert);Music Box (Ocean);Music Box (Dungeon);Music Box (Plantera);Music Box (Boss 5);Music Box (Temple);Music Box (Eclipse);Music Box (Mushrooms);Butterfly Dust;Ankh Charm;Ankh Shield;Blue Flare;Angler Fish Banner;Angry Nimbus Banner;Anomura Fungus Banner;Antlion Banner;Arapaima Banner;Armored Skeleton Banner;Cave Bat Banner;Bird Banner;Black Recluse Banner;Blood Feeder Banner;Blood Jelly Banner;Blood Crawler Banner;Bone Serpent Banner;Bunny Banner;Chaos Elemental Banner;Mimic Banner;Clown Banner;Corrupt Bunny Banner;Corrupt Goldfish Banner;Crab Banner;Crimera Banner;Crimson Axe Banner;Cursed Hammer Banner;Demon Banner;Demon Eye Banner;Derpling Banner;Eater of Souls Banner;Enchanted Sword Banner;Zombie Eskimo Banner;Face Monster Banner;Floaty Gross Banner;Flying Fish Banner;Flying Snake Banner;Frankenstein Banner;Fungi Bulb Banner;Fungo Fish Banner;Gastropod Banner;Goblin Thief Banner;Goblin Sorcerer Banner;Goblin Peon Banner;Goblin Scout Banner;Goblin Warrior Banner;Goldfish Banner;Harpy Banner;Hellbat Banner;Herpling Banner;Hornet Banner;Ice Elemental Banner;Icy Merman Banner;Fire Imp Banner;Blue Jellyfish Banner;Jungle Creeper Banner;Lihzahrd Banner;Man Eater Banner;Meteor Head Banner;Moth Banner;Mummy Banner;Mushi Ladybug Banner;Parrot Banner;Pigron Banner;Piranha Banner;Pirate Deckhand Banner;Pixie Banner;Raincoat Zombie Banner;Reaper Banner;Shark Banner;Skeleton Banner;Dark Caster Banner;Blue Slime Banner;Snow Flinx Banner;Wall Creeper Banner;Spore Zombie Banner;Swamp Thing Banner;Giant Tortoise Banner;Toxic Sludge Banner;Umbrella Slime Banner;Unicorn Banner;Vampire Banner;Vulture Banner;Nymph Banner;Werewolf Banner;Wolf Banner;World Feeder Banner;Worm Banner;Wraith Banner;Wyvern Banner;Zombie Banner;Glass Platform;Glass Chair;Golden Chair;Golden Toilet;Bar Stool;Honey Chair;Steampunk Chair;Glass Door;Golden Door;Honey Door;Steampunk Door;Glass Table;Banquet Table;Bar;Golden Table;Honey Table;Steampunk Table;Glass Bed;Golden Bed;Honey Bed;Steampunk Bed;Living Wood Wall;Fart in a Jar;Pumpkin;Pumpkin Wall;Hay;Hay Wall;Spooky Wood;Spooky Wood Wall;Pumpkin Helmet;Pumpkin Breastplate;Pumpkin Leggings;Candy Apple;Soul Cake;Nurse Hat;Nurse Shirt;Nurse Pants;Wizards Hat;Guy Fawkes Mask;Dye Trader Robe;Steampunk Goggles;Cyborg Helmet;Cyborg Shirt;Cyborg Pants;Creeper Mask;Creeper Shirt;Creeper Pants;Cat Mask;Cat Shirt;Cat Pants;Ghost Mask;Ghost Shirt;Pumpkin Mask;Pumpkin Shirt;Pumpkin Pants;Robot Mask;Robot Shirt;Robot Pants;Unicorn Mask;Unicorn Shirt;Unicorn Pants;Vampire Mask;Vampire Shirt;Vampire Pants;Witch Hat;Leprechaun Hat;Leprechaun Shirt;Leprechaun Pants;Pixie Shirt;Pixie Pants;Princess Hat;Princess Dress;Goodie Bag;Witch Dress;Witch Boots;Bride of Frankenstein Mask;Bride of Frankenstein Dress;Karate Tortoise Mask;Karate Tortoise Shirt;Karate Tortoise Pants;Candy Corn Rifle;Candy Corn;Jack O Lantern Launcher;Explosive Jack O Lantern;Sickle;Pumpkin Pie;Scarecrow Hat;Scarecrow Shirt;Scarecrow Pants;Cauldron;Pumpkin Chair;Pumpkin Door;Pumpkin Table;Pumpkin Work Bench;Pumpkin Platform;Tattered Fairy Wings;Spider Egg;Magical Pumpkin Seed;Bat Hook;Bat Scepter;Raven Staff;Jungle Key;Corruption Key;Crimson Key;Hallowed Key;Frozen Key;Hanging Jack O Lantern;Rotten Egg;Unlucky Yarn;Black Fairy Dust;Jackelier;Jack O Lantern;Spooky Chair;Spooky Door;Spooky Table;Spooky Work Bench;Spooky Platform;Reaper Hood;Reaper Robe;Fox Mask;Fox Shirt;Fox Pants;Cat Ears;Bloody Machete;The Horsemans Blade;Bladed Glove;Pumpkin Seed;Spooky Hook;Spooky Wings;Spooky Twig;Spooky Helmet;Spooky Breastplate;Spooky Leggings;Stake Launcher;Stake;Cursed Sapling;Space Creature Mask;Space Creature Shirt;Space Creature Pants;Wolf Mask;Wolf Shirt;Wolf Pants;Pumpkin Moon Medallion;Necromantic Scroll;Jacking Skeletron;Bitter Harvest;Blood Moon Countess;Hallows Eve;Morbid Curiosity;Treasure Hunter Shirt;Treasure Hunter Pants;Dryad Coverings;Dryad Loincloth;Mourning Wood Trophy;Pumpking Trophy;Jack O Lantern Mask;Sniper Scope;Heart Lantern;Jellyfish Diving Gear;Arctic Diving Gear;Frostspark Boots;Fart in a Balloon;Papyrus Scarab;Celestial Stone;Hoverboard;Candy Cane;Sugar Plum;Present;Red Ryder;Festive Wings;Pine Tree Block;Christmas Tree;Star Topper 1;Star Topper 2;Star Topper 3;Bow Topper;White Garland;White and Red Garland;Red Garland;Red and Green Garland;Green Garland;Green and White Garland;Multicolored Bulb;Red Bulb;Yellow Bulb;Green Bulb;Red and Green Bulb;Yellow and Green Bulb;Red and Yellow Bulb;White Bulb;White and Red Bulb;White and Yellow Bulb;White and Green Bulb;Multicolored Lights;Red Lights;Green Lights;Blue Lights;Yellow Lights;Red and Yellow Lights;Red and Green Lights;Yellow and Green Lights;Blue and Green Lights;Red and Blue Lights;Blue and Yellow Lights;Giant Bow;Reindeer Antlers;Holly;Candy Cane Sword;Elf Melter;Christmas Pudding;Eggnog;Star Anise;Reindeer Bells;Candy Cane Hook;Christmas Hook;Candy Cane Pickaxe;Fruitcake Chakram;Sugar Cookie;Gingerbread Cookie;Hand Warmer;Coal;Toolbox;Pine Door;Pine Chair;Pine Table;Dog Whistle;Christmas Tree Sword;Chain Gun;Razorpine;Blizzard Staff;Mrs. Claus Hat;Mrs. Claus Shirt;Mrs. Claus Heels;Parka Hood;Parka Coat;Parka Pants;Snow Hat;Ugly Sweater;Tree Mask;Tree Shirt;Tree Trunks;Elf Hat;Elf Shirt;Elf Pants;Snowman Cannon;North Pole;Christmas Tree Wallpaper;Ornament Wallpaper;Candy Cane Wallpaper;Festive Wallpaper;Stars Wallpaper;Squiggles Wallpaper;Snowflake Wallpaper;Krampus Horn Wallpaper;Bluegreen Wallpaper;Grinch Finger Wallpaper;Naughty Present;Baby Grinchs Mischief Whistle;Ice Queen Trophy;Santa-NK1 Trophy;Everscream Trophy;Music Box (Pumpkin Moon);Music Box (Alt Underground);Music Box (Frost Moon);Brown Paint;Shadow Paint;Negative Paint;Team Dye;Amethyst Gemspark Block;Topaz Gemspark Block;Sapphire Gemspark Block;Emerald Gemspark Block;Ruby Gemspark Block;Diamond Gemspark Block;Amber Gemspark Block;Life Hair Dye;Mana Hair Dye;Depth Hair Dye;Money Hair Dye;Time Hair Dye;Team Hair Dye;Biome Hair Dye;Party Hair Dye;Rainbow Hair Dye;Speed Hair Dye;Angel Halo;Fez;Womannequin;Hair Dye Remover;Bug Net;Firefly;Firefly in a Bottle;Monarch Butterfly;Purple Emperor Butterfly;Red Admiral Butterfly;Ulysses Butterfly;Sulphur Butterfly;Tree Nymph Butterfly;Zebra Swallowtail Butterfly;Julia Butterfly;Worm;Mouse;Lightning Bug;Lightning Bug in a Bottle;Snail;Glowing Snail;Fancy Gray Wallpaper;Ice Floe Wallpaper;Music Wallpaper;Purple Rain Wallpaper;Rainbow Wallpaper;Sparkle Stone Wallpaper;Starlit Heaven Wallpaper;Bird;Blue Jay;Cardinal;Squirrel;Bunny;Cactus Bookcase;Ebonwood Bookcase;Flesh Bookcase;Honey Bookcase;Steampunk Bookcase;Glass Bookcase;Rich Mahogany Bookcase;Pearlwood Bookcase;Spooky Bookcase;Skyware Bookcase;Lihzahrd Bookcase;Frozen Bookcase;Cactus Lantern;Ebonwood Lantern;Flesh Lantern;Honey Lantern;Steampunk Lantern;Glass Lantern;Rich Mahogany Lantern;Pearlwood Lantern;Frozen Lantern;Lihzahrd Lantern;Skyware Lantern;Spooky Lantern;Frozen Door;Cactus Candle;Ebonwood Candle;Flesh Candle;Glass Candle;Frozen Candle;Rich Mahogany Candle;Pearlwood Candle;Lihzahrd Candle;Skyware Candle;Pumpkin Candle;Cactus Chandelier;Ebonwood Chandelier;Flesh Chandelier;Honey Chandelier;Frozen Chandelier;Rich Mahogany Chandelier;Pearlwood Chandelier;Lihzahrd Chandelier;Skyware Chandelier;Spooky Chandelier;Glass Chandelier;Cactus Bed;Flesh Bed;Frozen Bed;Lihzahrd Bed;Skyware Bed;Spooky Bed;Cactus Bathtub;Ebonwood Bathtub;Flesh Bathtub;Glass Bathtub;Frozen Bathtub;Rich Mahogany Bathtub;Pearlwood Bathtub;Lihzahrd Bathtub;Skyware Bathtub;Spooky Bathtub;Cactus Lamp;Ebonwood Lamp;Flesh Lamp;Glass Lamp;Frozen Lamp;Rich Mahogany Lamp;Pearlwood Lamp;Lihzahrd Lamp;Skyware Lamp;Spooky Lamp;Cactus Candelabra;Ebonwood Candelabra;Flesh Candelabra;Honey Candelabra;Steampunk Candelabra;Glass Candelabra;Rich Mahogany Candelabra;Pearlwood Candelabra;Frozen Candelabra;Lihzahrd Candelabra;Skyware Candelabra;Spooky Candelabra;Brain of Cthulhu Mask;Wall of Flesh Mask;Twin Mask;Skeletron Prime Mask;Queen Bee Mask;Plantera Mask;Golem Mask;Eater of Worlds Mask;Eye of Cthulhu Mask;Destroyer Mask;Blacksmith Rack;Carpentry Rack;Helmet Rack;Spear Rack;Sword Rack;Stone Slab;Sandstone Slab;Frog;Mallard Duck;Duck;Honey Bathtub;Steampunk Bathtub;Living Wood Bathtub;Shadewood Bathtub;Bone Bathtub;Honey Lamp;Steampunk Lamp;Living Wood Lamp;Shadewood Lamp;Golden Lamp;Bone Lamp;Living Wood Bookcase;Shadewood Bookcase;Golden Bookcase;Bone Bookcase;Living Wood Bed;Bone Bed;Living Wood Chandelier;Shadewood Chandelier;Golden Chandelier;Bone Chandelier;Living Wood Lantern;Shadewood Lantern;Golden Lantern;Bone Lantern;Living Wood Candelabra;Shadewood Candelabra;Golden Candelabra;Bone Candelabra;Living Wood Candle;Shadewood Candle;Golden Candle;Black Scorpion;Scorpion;Bubble Wallpaper;Copper Pipe Wallpaper;Ducky Wallpaper;Frost Core;Bunny Cage;Squirrel Cage;Mallard Duck Cage;Duck Cage;Bird Cage;Blue Jay Cage;Cardinal Cage;Waterfall Wall;Lavafall Wall;Crimson Seeds;Heavy Work Bench;Copper Plating;Snail Cage;Glowing Snail Cage;Shroomite Digging Claw;Ammo Box;Monarch Butterfly Jar;Purple Emperor Butterfly Jar;Red Admiral Butterfly Jar;Ulysses Butterfly Jar;Sulphur Butterfly Jar;Tree Nymph Butterfly Jar;Zebra Swallowtail Butterfly Jar;Julia Butterfly Jar;Scorpion Cage;Black Scorpion Cage;Venom Staff;Spectre Mask;Frog Cage;Mouse Cage;Bone Welder;Flesh Cloning Vat;Glass Kiln;Lihzahrd Furnace;Living Loom;Sky Mill;Ice Machine;Beetle Helmet;Beetle Scale Mail;Beetle Shell;Beetle Leggings;Steampunk Boiler;Honey Dispenser;Penguin;Penguin Cage;Worm Cage;Terrarium;Super Mana Potion;Ebonwood Fence;Rich Mahogany Fence;Pearlwood Fence;Shadewood Fence;Brick Layer;Extendo Grip;Paint Sprayer;Portable Cement Mixer;Beetle Husk;Celestial Magnet;Celestial Emblem;Celestial Cuffs;Peddlers Hat;Pulse Bow;Large Dynasty Lantern;Dynasty Lamp;Dynasty Lantern;Large Dynasty Candle;Dynasty Chair;Dynasty Work Bench;Dynasty Chest;Dynasty Bed;Dynasty Bathtub;Dynasty Bookcase;Dynasty Cup;Dynasty Bowl;Dynasty Candle;Dynasty Clock;Golden Clock;Glass Clock;Honey Clock;Steampunk Clock;Fancy Dishes;Glass Bowl;Wine Glass;Living Wood Piano;Flesh Piano;Frozen Piano;Frozen Table;Honey Chest;Steampunk Chest;Honey Work Bench;Frozen Work Bench;Steampunk Work Bench;Glass Piano;Honey Piano;Steampunk Piano;Honey Cup;Chalice;Dynasty Table;Dynasty Wood;Red Dynasty Shingles;Blue Dynasty Shingles;White Dynasty Wall;Blue Dynasty Wall;Dynasty Door;Sake;Pad Thai;Pho;Revolver;Gatligator;Arcane Rune Wall;Water Gun;Katana;Ultrabright Torch;Magic Hat;Diamond Ring;Gi;Kimono;Gypsy Robe;Beetle Wings;Tiger Skin;Leopard Skin;Zebra Skin;Crimson Cloak;Mysterious Cape;Red Cape;Winter Cape;Frozen Chair;Wood Fishing Pole;Bass;Reinforced Fishing Pole;Fiberglass Fishing Pole;Fisher of Souls;Golden Fishing Rod;Mechanics Rod;Sitting Ducks Fishing Pole;Trout;Salmon;Atlantic Cod;Tuna;Red Snapper;Neon Tetra;Armored Cavefish;Damselfish;Crimson Tigerfish;Frost Minnow;Princess Fish;Golden Carp;Specular Fish;Prismite;Variegated Lardfish;Flarefin Koi;Double Cod;Honeyfin;Obsidifish;Shrimp;Chaos Fish;Ebonkoi;Hemopiranha;Rockfish;Stinkfish;Mining Potion;Heartreach Potion;Calming Potion;Builder Potion;Titan Potion;Flipper Potion;Summoning Potion;Dangersense Potion;Purple Clubberfish;Obsidian Swordfish;Swordfish;Iron Fence;Wooden Crate;Iron Crate;Golden Crate;Old Shoe;Seaweed;Tin Can;Minecart Track;Reaver Shark;Sawtooth Shark;Minecart;Ammo Reservation Potion;Lifeforce Potion;Endurance Potion;Rage Potion;Inferno Potion;Wrath Potion;Recall Potion;Teleportation Potion;Love Potion;Stink Potion;Fishing Potion;Sonar Potion;Crate Potion;Shiverthorn Seeds;Shiverthorn;Warmth Potion;Fish Hook;Bee Headgear;Bee Breastplate;Bee Greaves;Hornet Staff;Imp Staff;Queen Spider Staff;Angler Hat;Angler Vest;Angler Pants;Spider Mask;Spider Breastplate;Spider Greaves;High Test Fishing Line;Angler Earring;Tackle Box;Blue Dungeon Piano;Green Dungeon Piano;Pink Dungeon Piano;Golden Piano;Obsidian Piano;Bone Piano;Cactus Piano;Spooky Piano;Skyware Piano;Lihzahrd Piano;Blue Dungeon Dresser;Green Dungeon Dresser;Pink Dungeon Dresser;Golden Dresser;Obsidian Dresser;Bone Dresser;Cactus Dresser;Spooky Dresser;Skyware Dresser;Honey Dresser;Lihzahrd Dresser;Sofa;Ebonwood Sofa;Rich Mahogany Sofa;Pearlwood Sofa;Shadewood Sofa;Blue Dungeon Sofa;Green Dungeon Sofa;Pink Dungeon Sofa;Golden Sofa;Obsidian Sofa;Bone Sofa;Cactus Sofa;Spooky Sofa;Skyware Sofa;Honey Sofa;Steampunk Sofa;Mushroom Sofa;Glass Sofa;Pumpkin Sofa;Lihzahrd Sofa;Seashell Hairpin;Mermaid Adornment;Mermaid Tail;Zephyr Fish;Fleshcatcher;Hotline Fishing Hook;Frog Leg;Anchor;Cooked Fish;Cooked Shrimp;Sashimi;Fuzzy Carrot;Scaly Truffle;Slimy Saddle;Bee Wax;Copper Plating Wall;Stone Slab Wall;Sail;Coralstone Block;Blue Jellyfish;Green Jellyfish;Pink Jellyfish;Blue Jellyfish Jar;Green Jellyfish Jar;Pink Jellyfish Jar;Life Preserver;Ships Wheel;Compass Rose;Wall Anchor;Goldfish Trophy;Bunnyfish Trophy;Swordfish Trophy;Sharkteeth Trophy;Batfish;Bumblebee Tuna;Catfish;Cloudfish;Cursedfish;Dirtfish;Dynamite Fish;Eater of Plankton;Fallen Starfish;The Fish of Cthulhu;Fishotron;Harpyfish;Hungerfish;Ichorfish;Jewelfish;Mirage Fish;Mutant Flinxfin;Pengfish;Pixiefish;Spiderfish;Tundra Trout;Unicorn Fish;Guide Voodoo Fish;Wyverntail;Zombie Fish;Amanitia Fungifin;Angelfish;Bloody Manowar;Bonefish;Bunnyfish;Capn Tunabeard;Clownfish;Demonic Hellfish;Derpfish;Fishron;Infected Scabbardfish;Mudfish;Slimefish;Tropical Barracuda;King Slime Trophy;Ship in a Bottle;Hardy Saddle;Pressure Plate Track;King Slime Mask;Fin Wings;Treasure Map;Seaweed Planter;Pillagin Me Pixels;Fish Costume Mask;Fish Costume Shirt;Fish Costume Finskirt;Ginger Beard;Honeyed Goggles;Boreal Wood;Palm Wood;Boreal Wood Wall;Palm Wood Wall;Boreal Wood Fence;Palm Wood Fence;Boreal Wood Helmet;Boreal Wood Breastplate;Boreal Wood Greaves;Palm Wood Helmet;Palm Wood Breastplate;Palm Wood Greaves;Palm Wood Bow;Palm Wood Hammer;Palm Wood Sword;Palm Wood Platform;Palm Wood Bathtub;Palm Wood Bed;Palm Wood Bench;Palm Wood Candelabra;Palm Wood Candle;Palm Wood Chair;Palm Wood Chandelier;Palm Wood Chest;Palm Wood Sofa;Palm Wood Door;Palm Wood Dresser;Palm Wood Lantern;Palm Wood Piano;Palm Wood Table;Palm Wood Lamp;Palm Wood Work Bench;Optic Staff;Palm Wood Bookcase;Mushroom Bathtub;Mushroom Bed;Mushroom Bench;Mushroom Bookcase;Mushroom Candelabra;Mushroom Candle;Mushroom Chandelier;Mushroom Chest;Mushroom Dresser;Mushroom Lantern;Mushroom Lamp;Mushroom Piano;Mushroom Platform;Mushroom Table;Spider Staff;Boreal Wood Bathtub;Boreal Wood Bed;Boreal Wood Bookcase;Boreal Wood Candelabra;Boreal Wood Candle;Boreal Wood Chair;Boreal Wood Chandelier;Boreal Wood Chest;Boreal Wood Clock;Boreal Wood Door;Boreal Wood Dresser;Boreal Wood Lamp;Boreal Wood Lantern;Boreal Wood Piano;Boreal Wood Platform;Slime Bathtub;Slime Bed;Slime Bookcase;Slime Candelabra;Slime Candle;Slime Chair;Slime Chandelier;Slime Chest;Slime Clock;Slime Door;Slime Dresser;Slime Lamp;Slime Lantern;Slime Piano;Slime Platform;Slime Sofa;Slime Table;Pirate Staff;Slime Hook;Sticky Grenade;Tartar Sauce;Duke Fishron Mask;Duke Fishron Trophy;Molotov Cocktail;Bone Clock;Cactus Clock;Ebonwood Clock;Frozen Clock;Lihzahrd Clock;Living Wood Clock;Rich Mahogany Clock;Flesh Clock;Mushroom Clock;Obsidian Clock;Palm Wood Clock;Pearlwood Clock;Pumpkin Clock;Shadewood Clock;Spooky Clock;Skyware Clock;Spider Fang;Falcon Blade;Fishron Wings;Slime Gun;Flairon;Green Dungeon Chest;Pink Dungeon Chest;Blue Dungeon Chest;Bone Chest;Cactus Chest;Flesh Chest;Obsidian Chest;Pumpkin Chest;Spooky Chest;Tempest Staff;Razorblade Typhoon;Bubble Gun;Tsunami;Seashell;Starfish;Steampunk Platform;Skyware Platform;Living Wood Platform;Honey Platform;Skyware Work Bench;Glass Work Bench;Living Wood Work Bench;Flesh Sofa;Frozen Sofa;Living Wood Sofa;Pumpkin Dresser;Steampunk Dresser;Glass Dresser;Flesh Dresser;Pumpkin Lantern;Obsidian Lantern;Pumpkin Lamp;Obsidian Lamp;Blue Dungeon Lamp;Green Dungeon Lamp;Pink Dungeon Lamp;Honey Candle;Steampunk Candle;Spooky Candle;Obsidian Candle;Blue Dungeon Chandelier;Green Dungeon Chandelier;Pink Dungeon Chandelier;Steampunk Chandelier;Pumpkin Chandelier;Obsidian Chandelier;Blue Dungeon Bathtub;Green Dungeon Bathtub;Pink Dungeon Bathtub;Pumpkin Bathtub;Obsidian Bathtub;Golden Bathtub;Blue Dungeon Candelabra;Green Dungeon Candelabra;Pink Dungeon Candelabra;Obsidian Candelabra;Pumpkin Candelabra;Pumpkin Bed;Pumpkin Bookcase;Pumpkin Piano;Shark Statue;Truffle Worm;Apprentice Bait;Journeyman Bait;Master Bait;Amber Gemspark Wall;Offline Amber Gemspark Wall;Amethyst Gemspark Wall;Offline Amethyst Gemspark Wall;Diamond Gemspark Wall;Offline Diamond Gemspark Wall;Emerald Gemspark Wall;Offline Emerald Gemspark Wall;Ruby Gemspark Wall;Offline Ruby Gemspark Wall;Sapphire Gemspark Wall;Offline Sapphire Gemspark Wall;Topaz Gemspark Wall;Offline Topaz Gemspark Wall;Tin Plating Wall;Tin Plating;Waterfall Block;Lavafall Block;Confetti Block;Confetti Wall;Midnight Confetti Block;Midnight Confetti Wall;Weapon Rack;Fireworks Box;Living Fire Block;0 Statue;1 Statue;2 Statue;3 Statue;4 Statue;5 Statue;6 Statue;7 Statue;8 Statue;9 Statue;A Statue;B Statue;C Statue;D Statue;E Statue;F Statue;G Statue;H Statue;I Statue;J Statue;K Statue;L Statue;M Statue;N Statue;O Statue;P Statue;Q Statue;R Statue;S Statue;T Statue;U Statue;V Statue;W Statue;X Statue;Y Statue;Z Statue;Firework Fountain;Booster Track;Grasshopper;Grasshopper Cage;Music Box (Underground Crimson);Cactus Table;Cactus Platform;Boreal Wood Sword;Boreal Wood Hammer;Boreal Wood Bow;Glass Chest;Xeno Staff;Meteor Staff;Living Cursed Fire Block;Living Demon Fire Block;Living Frost Fire Block;Living Ichor Block;Living Ultrabright Fire Block;Gender Change Potion;Vortex Helmet;Vortex Breastplate;Vortex Leggings;Nebula Helmet;Nebula Breastplate;Nebula Leggings;Solar Flare Helmet;Solar Flare Breastplate;Solar Flare Leggings;Solar Tablet Fragment;Solar Tablet;Drill Containment Unit;Cosmic Car Key;Mothron Wings;Brain Scrambler;;;;;Vortex Pickaxe;;;;;Nebula Pickaxe;;;;;Solar Flare Pickaxe;Honeyfall Block;Honeyfall Wall;Chlorophyte Brick Wall;Crimtane Brick Wall;Shroomite Plating Wall;Chlorophyte Brick;Crimtane Brick;Shroomite Plating;Laser Machinegun;Electrosphere Launcher;Xenopopper;Laser Drill;Mechanical Ruler;Anti-Gravity Hook;Moon Mask;Sun Mask;Martian Costume Mask;Martian Costume Shirt;Martian Costume Pants;Martian Uniform Helmet;Martian Uniform Torso;Martian Uniform Pants;Martian Astro Clock;Martian Bathtub;Martian Bed;Martian Hover Chair;Martian Chandelier;Martian Chest;Martian Door;Martian Dresser;Martian Holobookcase;Martian Hover Candle;Martian Lamppost;Martian Lantern;Martian Piano;Martian Platform;Martian Sofa;Martian Table;Martian Table Lamp;Martian Work Bench;Wooden Sink;Ebonwood Sink;Rich Mahogany Sink;Pearlwood Sink;Bone Sink;Flesh Sink;Living Wood Sink;Skyware Sink;Shadewood Sink;Lihzahrd Sink;Blue Dungeon Sink;Green Dungeon Sink;Pink Dungeon Sink;Obsidian Sink;Metal Sink;Glass Sink;Golden Sink;Honey Sink;Steampunk Sink;Pumpkin Sink;Spooky Sink;Frozen Sink;Dynasty Sink;Palm Wood Sink;Mushroom Sink;Boreal Wood Sink;Slime Sink;Cactus Sink;Martian Sink;Solar Cultist Hood;Lunar Cultist Hood;Solar Cultist Robe;Lunar Cultist Robe;Martian Conduit Plating;Martian Conduit Wall;HiTek Sunglasses;Martian Hair Dye;Martian Dye;Castle Marsberg;Martia Lisa;The Truth Is Up There;Smoke Block;Living Flame Dye;Living Rainbow Dye;Shadow Dye;Negative Dye;Living Ocean Dye;Brown Dye;Brown and Black Dye;Bright Brown Dye;Brown and Silver Dye;Wisp Dye;Pixie Dye;Influx Waver;;Charged Blaster Cannon;Chlorophyte Dye;Unicorn Wisp Dye;Infernal Wisp Dye;Vicious Powder;Vicious Mushroom;The Bees Knees;Gold Bird;Gold Bunny;Gold Butterfly;Gold Frog;Gold Grasshopper;Gold Mouse;Gold Worm;Sticky Dynamite;Angry Trapper Banner;Armored Viking Banner;Black Slime Banner;Blue Armored Bones Banner;Blue Cultist Archer Banner;Blue Cultist Caster Banner;Blue Cultist Fighter Banner;Bone Lee Banner;Clinger Banner;Cochineal Beetle Banner;Corrupt Penguin Banner;Corrupt Slime Banner;Corruptor Banner;Crimslime Banner;Cursed Skull Banner;Cyan Beetle Banner;Devourer Banner;Diabolist Banner;Doctor Bones Banner;Dungeon Slime Banner;Dungeon Spirit Banner;Elf Archer Banner;Elf Copter Banner;Eyezor Banner;Flocko Banner;Ghost Banner;Giant Bat Banner;Giant Cursed Skull Banner;Giant Flying Fox Banner;Gingerbread Man Banner;Goblin Archer Banner;Green Slime Banner;Headless Horseman Banner;Hell Armored Bones Banner;Hellhound Banner;Hoppin Jack Banner;Ice Bat Banner;Ice Golem Banner;Ice Slime Banner;Ichor Sticker Banner;Illuminant Bat Banner;Illuminant Slime Banner;Jungle Bat Banner;Jungle Slime Banner;Krampus Banner;Lac Beetle Banner;Lava Bat Banner;Lava Slime Banner;Martian Brainscrambler Banner;Martian Drone Banner;Martian Engineer Banner;Martian Gigazapper Banner;Martian Gray Grunt Banner;Martian Officer Banner;Martian Ray Gunner Banner;Martian Scutlix Gunner Banner;Martian Tesla Turret Banner;Mister Stabby Banner;Mother Slime Banner;Necromancer Banner;Nutcracker Banner;Paladin Banner;Penguin Banner;Pinky Banner;Poltergeist Banner;Possessed Armor Banner;Present Mimic Banner;Purple Slime Banner;Ragged Caster Banner;Rainbow Slime Banner;Raven Banner;Red Slime Banner;Rune Wizard Banner;Rusty Armored Bones Banner;Scarecrow Banner;Scutlix Banner;Skeleton Archer Banner;Skeleton Commando Banner;Skeleton Sniper Banner;Slimer Banner;Snatcher Banner;Snow Balla Banner;Snowman Gangsta Banner;Spiked Ice Slime Banner;Spiked Jungle Slime Banner;Splinterling Banner;Squid Banner;Tactical Skeleton Banner;The Groom Banner;Tim Banner;Undead Miner Banner;Undead Viking Banner;White Cultist Archer Banner;White Cultist Caster Banner;White Cultist Fighter Banner;Yellow Slime Banner;Yeti Banner;Zombie Elf Banner;Sparky;Vine Rope;Wormhole Potion;Summoner Emblem;Bewitching Table;Alchemy Table;Strange Brew;Spelunker Glowstick;Bone Arrow;Bone Torch;Vine Rope Coil;Life Drain;Dart Pistol;Dart Rifle;Crystal Dart;Cursed Dart;Ichor Dart;Chain Guillotines;Fetid Baghnakhs;Clinger Staff;Putrid Scent;Flesh Knuckles;Flower Boots;Seedler;Hellwing Bow;Tendon Hook;Thorn Hook;Illuminant Hook;Worm Hook;Skiphss Blood;Purple Ooze Dye;Reflective Silver Dye;Reflective Gold Dye;Blue Acid Dye;Daedalus Stormbow;Flying Knife;Bottomless Water Bucket;Super Absorbant Sponge;Gold Ring;Coin Ring;Greedy Ring;Fish Finder;Weather Radio;Hades Dye;Twilight Dye;Acid Dye;Glowing Mushroom Dye;Phase Dye;Magic Lantern;Music Box (Lunar Boss);Rainbow Torch;Cursed Campfire;Demon Campfire;Frozen Campfire;Ichor Campfire;Rainbow Campfire;Crystal Vile Shard;Shadowflame Bow;Shadowflame Hex Doll;Shadowflame Knife;Acorns;Cold Snap;Cursed Saint;Snowfellas;The Season;Bone Rattle;Architect Gizmo Pack;Crimson Heart;Meowmere;Enchanted Sundial;Star Wrath;Smooth Marble Block;Hellstone Brick Wall;Guide to Plant Fiber Cordage;Wand of Sparking;Gold Bird Cage;Gold Bunny Cage;Gold Butterfly Jar;Gold Frog Cage;Gold Grasshopper Cage;Gold Mouse Cage;Gold Worm Cage;Silk Rope;Web Rope;Silk Rope Coil;Web Rope Coil;Marble Block;Marble Wall;Smooth Marble Wall;Radar;Golden Lock Box;Granite Block;Smooth Granite Block;Granite Wall;Smooth Granite Wall;Royal Gel;Key of Night;Key of Light;Herb Bag;Javelin;Tally Counter;Sextant;Shield of Cthulhu;Butchers Chainsaw;Stopwatch;Meteorite Brick;Meteorite Brick Wall;Metal Detector;Endless Quiver;Endless Musket Pouch;Toxic Flask;Psycho Knife;Nail Gun;Nail;Night Vision Helmet;Celestial Shell;Pink Gel;Bouncy Glowstick;Pink Slime Block;Pink Torch;Bouncy Bomb;Bouncy Grenade;Peace Candle;Lifeform Analyzer;DPS Meter;Fishermans Pocket Guide;Goblin Tech;R.E.K. 3000;PDA;Cell Phone;Granite Chest;Meteorite Clock;Marble Clock;Granite Clock;Meteorite Door;Marble Door;Granite Door;Meteorite Dresser;Marble Dresser;Granite Dresser;Meteorite Lamp;Marble Lamp;Granite Lamp;Meteorite Lantern;Marble Lantern;Granite Lantern;Meteorite Piano;Marble Piano;Granite Piano;Meteorite Platform;Marble Platform;Granite Platform;Meteorite Sink;Marble Sink;Granite Sink;Meteorite Sofa;Marble Sofa;Granite Sofa;Meteorite Table;Marble Table;Granite Table;Meteorite Work Bench;Marble Work Bench;Granite Work Bench;Meteorite Bathtub;Marble Bathtub;Granite Bathtub;Meteorite Bed;Marble Bed;Granite Bed;Meteorite Bookcase;Marble Bookcase;Granite Bookcase;Meteorite Candelabra;Marble Candelabra;Granite Candelabra;Meteorite Candle;Marble Candle;Granite Candle;Meteorite Chair;Marble Chair;Granite Chair;Meteorite Chandelier;Marble Chandelier;Granite Chandelier;Meteorite Chest;Marble Chest;Magic Water Dropper;Golden Bug Net;Magic Lava Dropper;Magic Honey Dropper;Empty Dropper;Gladiator Helmet;Gladiator Breastplate;Gladiator Leggings;Reflective Dye;Enchanted Nightcrawler;Grubby;Sluggy;Buggy;Grub Soup;Bomb Fish;Frost Daggerfish;Sharpening Station;Ice Mirror;Sailfish Boots;Tsunami in a Bottle;Target Dummy;Corrupt Crate;Crimson Crate;Dungeon Crate;Sky Crate;Hallowed Crate;Jungle Crate;Crystal Serpent;Toxikarp;Bladetongue;Shark Tooth Necklace;Money Trough;Bubble;Daybloom Planter Box;Moonglow Planter Box;Deathweed Planter Box;Deathweed Planter Box;Blinkroot Planter Box;Waterleaf Planter Box;Shiverthorn Planter Box;Fireblossom Planter Box;Brain of Confusion;Worm Scarf;Balloon Pufferfish;Lazures Valkyrie Circlet;Lazures Valkyrie Cloak;Lazures Barrier Platform;Golden Cross Grave Marker;Golden Tombstone;Golden Grave Marker;Golden Gravestone;Golden Headstone;Crystal Block;Music Box (Martian Madness);Music Box (Pirate Invasion);Music Box (Hell);Crystal Block Wall;Trap Door;Tall Gate;Sharkron Balloon;Tax Collectors Hat;Tax Collectors Suit;Tax Collectors Pants;Bone Glove;Clothiers Jacket;Clothiers Pants;Dye Traders Turban;Deadly Sphere Staff;Green Horseshoe Balloon;Amber Horseshoe Balloon;Pink Horseshoe Balloon;Lava Lamp;Enchanted Nightcrawler Cage;Buggy Cage;Grubby Cage;Sluggy Cage;Slap Hand;Twilight Hair Dye;Blessed Apple;Spectre Bar;Code 1;Buccaneer Bandana;Buccaneer Tunic;Buccaneer Pantaloons;Obsidian Outlaw Hat;Obsidian Longcoat;Obsidian Pants;Medusa Head;Item Frame;Sandstone Block;Hardened Sand Block;;Hardened Ebonsand Block;Hardened Crimsand Block;Ebonsandstone Block;Crimsandstone Block;Wooden Yoyo;Malaise;Artery;Amazon;Cascade;Chik;Code 2;Rally;Yelets;Reds Throw;Valkyrie Yoyo;Amarok;Hel-Fire;Kraken;The Eye of Cthulhu;Red String;Orange String;Yellow String;Lime String;Green String;Teal String;Cyan String;Sky Blue String;Blue String;Purple String;Violet String;Pink String;Brown String;White String;Rainbow String;Black String;Black Counterweight;Blue Counterweight;Green Counterweight;Purple Counterweight;Red Counterweight;Yellow Counterweight;Format:C;Gradient;Valor;Treasure Bag (King Slime);Treasure Bag (Eye of Cthulhu);Treasure Bag (Eater of Worlds Head);Treasure Bag (Brain of Cthulhu);Treasure Bag (Queen Bee);Treasure Bag (Skeletron Head);Treasure Bag (Wall of Flesh);Treasure Bag (The Destroyer Head);Treasure Bag (The Twins);Treasure Bag (Skeletron Prime);Treasure Bag (Plantera);Treasure Bag (Golem);Treasure Bag (Duke Fishron);Treasure Bag (Lunatic Cultist);Treasure Bag (Moon Lord);Hive Pack;Yoyo Glove;Demon Heart;Spore Sac;Shiny Stone;Hardened Pearlsand Block;Pearlsandstone Block;;;;;;;;Desert Fossil;Desert Fossil Wall;Exotic Scimitar;Paintball Gun;Classy Cane;Stylish Scissors;Mechanical Cart;Mechanical Wheel Piece;Mechanical Wagon Piece;Mechanical Battery Piece;Ancient Cultist Trophy;Martian Saucer Trophy;Flying Dutchman Trophy;Living Mahogany Wand;Rich Mahogany Leaf Wand;Fallen Tuxedo Shirt;Fallen Tuxedo Pants;Fireplace;Chimney;Yoyo Bag;Shrimpy Truffle;Arkhalis;Confetti Cannon;Music Box (The Towers);Music Box (Goblin Invasion);Ancient Cultist Mask;Moon Lord Mask;Fossil Helmet;Fossil Plate;Fossil Greaves;Amber Staff;Bone Javelin;Bone Throwing Knife;Sturdy Fossil;Stardust Helmet;Stardust Plate;Stardust Leggings;Portal Gun;Strange Plant;Strange Plant;Strange Plant;Strange Plant;Terrarian;Goblin Summoner Banner;Salamander Banner;Giant Shelly Banner;Crawdad Banner;Fritz Banner;Creature From The Deep Banner;Dr. Man Fly Banner;Mothron Banner;Severed Hand Banner;The Possessed Banner;Butcher Banner;Psycho Banner;Deadly Sphere Banner;Nailhead Banner;Poisonous Spore Banner;Medusa Banner;Hoplite Banner;Granite Elemental Banner;Granite Golem Banner;Blood Zombie Banner;Drippler Banner;Tomb Crawler Banner;Dune Splicer Banner;Antlion Swarmer Banner;Antlion Charger Banner;Ghoul Banner;Lamia Banner;Desert Spirit Banner;Basilisk Banner;Sand Poacher Banner;Stargazer Banner;Milkyway Weaver Banner;Flow Invader Banner;Twinkle Popper Banner;Small Star Cell Banner;Star Cell Banner;Corite Banner;Sroller Banner;Crawltipede Banner;Drakomire Rider Banner;Drakomire Banner;Selenian Banner;Predictor Banner;Brain Suckler Banner;Nebula Floater Banner;Evolution Beast Banner;Alien Larva Banner;Alien Queen Banner;Alien Hornet Banner;Vortexian Banner;Storm Diver Banner;Pirate Captain Banner;Pirate Deadeye Banner;Pirate Corsair Banner;Pirate Crossbower Banner;Martian Walker Banner;Red Devil Banner;Pink Jellyfish Banner;Green Jellyfish Banner;Dark Mummy Banner;Light Mummy Banner;Angry Bones Banner;Ice Tortoise Banner;Damage Booster;Life Booster;Mana Booster;Vortex Fragment;Nebula Fragment;Solar Fragment;Stardust Fragment;Luminite;Luminite Brick;Stardust Axe;Stardust Saw;Stardust Drill;Stardust Hammer;Stardust Pickaxe;Luminite Bar;Solar Wings;Vortex Booster;Nebula Mantle;Stardust Wings;Luminite Brick Wall;Solar Eruption;Stardust Cell Staff;Vortex Beater;Nebula Arcanum;Blood Water;Wedding Veil;Wedding Dress;Platinum Bow;Platinum Hammer;Platinum Axe;Platinum Shortsword;Platinum Broadsword;Platinum Pickaxe;Tungsten Bow;Tungsten Hammer;Tungsten Axe;Tungsten Shortsword;Tungsten Broadsword;Tungsten Pickaxe;Lead Bow;Lead Hammer;Lead Axe;Lead Shortsword;Lead Broadsword;Lead Pickaxe;Tin Bow;Tin Hammer;Tin Axe;Tin Shortsword;Tin Broadsword;Tin Pickaxe;Copper Bow;Copper Hammer;Copper Axe;Copper Shortsword;Copper Broadsword;Copper Pickaxe;Silver Bow;Silver Hammer;Silver Axe;Silver Shortsword;Silver Broadsword;Silver Pickaxe;Gold Bow;Gold Hammer;Gold Axe;Gold Shortsword;Gold Broadsword;Gold Pickaxe;Solar Flare Hamaxe;Vortex Hamaxe;Nebula Hamaxe;Stardust Hamaxe;Solar Dye;Nebula Dye;Vortex Dye;Stardust Dye;Void Dye;Stardust Dragon Staff;Bacon;Shifting Sands Dye;Mirage Dye;Shifting Pearlsands Dye;Vortex Monolith;Nebula Monolith;Stardust Monolith;Solar Monolith;Phantasm;Last Prism;Nebula Blaze;Daybreak;Super Healing Potion;Detonator;Celebration;Bouncy Dynamite;Happy Grenade;Ancient Manipulator;Flame and Silver Dye;Green Flame and Silver Dye;Blue Flame and Silver Dye;Reflective Copper Dye;Reflective Obsidian Dye;Reflective Metal Dye;Midnight Rainbow Dye;Black and White Dye;Bright Silver Dye;Silver and Black Dye;Red Acid Dye;Gel Dye;Pink Gel Dye;Red Squirrel;Gold Squirrel;Red Squirrel Cage;Gold Squirrel Cage;Luminite Bullet;Luminite Arrow;Lunar Portal Staff;Lunar Flare;Rainbow Crystal Staff;Lunar Hook;Solar Fragment Block;Vortex Fragment Block;Nebula Fragment Block;Stardust Fragment Block;Suspicious Looking Tentacle;Yoraiz0rs Uniform;Yoraiz0rs Skirt;Yoraiz0rs Spell;Yoraiz0rs Scowl;Jims Wings;Yoraiz0rs Recolored Goggles;Living Leaf Wall;Skiphss Mask;Skiphss Skin;Skiphss Bear Butt;Skiphss Paws;Lokis Helmet;Lokis Breastplate;Lokis Greaves;Lokis Wings;Sand Slime Banner;Sea Snail Banner;Moon Lord Trophy;Not a Kid, nor a Squid;Burning Hades Dye;Grim Dye;Lokis Dye;Shadowflame Hades Dye;Celestial Sigil;Logic Gate Lamp (Off);Logic Gate (AND);Logic Gate (OR);Logic Gate (NAND);Logic Gate (NOR);Logic Gate (XOR);Logic Gate (XNOR);Conveyor Belt (Clockwise);Conveyor Belt (Counter Clockwise);The Grand Design;Yellow Wrench;Logic Sensor (Day);Logic Sensor (Night);Logic Sensor (Player Above);Junction Box;Announcement Box;Logic Gate Lamp (On);Mechanical Lens;Actuation Rod;Red Team Block;Red Team Platform;Static Hook;Presserator;Multicolor Wrench;Pink Weighted Pressure Plate;Engineering Helmet;Companion Cube;Wire Bulb;Orange Weighted Pressure Plate;Purple Weighted Pressure Plate;Cyan Weighted Pressure Plate;Green Team Block;Blue Team Block;Yellow Team Block;Pink Team Block;White Team Block;Green Team Platform;Blue Team Platform;Yellow Team Platform;Pink Team Platform;White Team Platform;Large Amber;Ruby Gem Lock;Sapphire Gem Lock;Emerald Gem Lock;Topaz Gem Lock;Amethyst Gem Lock;Diamond Gem Lock;Amber Gem Lock;Squirrel Statue;Butterfly Statue;Worm Statue;Firefly Statue;Scorpion Statue;Snail Statue;Grasshopper Statue;Mouse Statue;Duck Statue;Penguin Statue;Frog Statue;Buggy Statue;Logic Gate Lamp (Faulty);Portal Gun Station;Trapped Chest;Trapped Gold Chest;Trapped Shadow Chest;Trapped Ebonwood Chest;Trapped Rich Mahogany Chest;Trapped Pearlwood Chest;Trapped Ivy Chest;Trapped Ice Chest;Trapped Living Wood Chest;Trapped Skyware Chest;Trapped Shadewood Chest;Trapped Web Covered Chest;Trapped Lihzahrd Chest;Trapped Water Chest;Trapped Jungle Chest;Trapped Corruption Chest;Trapped Crimson Chest;Trapped Hallowed Chest;Trapped Frozen Chest;Trapped Dynasty Chest;Trapped Honey Chest;Trapped Steampunk Chest;Trapped Palm Wood Chest;Trapped Mushroom Chest;Trapped Boreal Wood Chest;Trapped Slime Chest;Trapped Green Dungeon Chest;Trapped Pink Dungeon Chest;Trapped Blue Dungeon Chest;Trapped Bone Chest;Trapped Cactus Chest;Trapped Flesh Chest;Trapped Obsidian Chest;Trapped Pumpkin Chest;Trapped Spooky Chest;Trapped Glass Chest;Trapped Martian Chest;Trapped Meteorite Chest;Trapped Granite Chest;Trapped Marble Chest;ItemName.Fake_newchest1;ItemName.Fake_newchest2;Teal Pressure Pad;Wall Creeper Statue;Unicorn Statue;Drippler Statue;Wraith Statue;Bone Skeleton Statue;Undead Viking Statue;Medusa Statue;Harpy Statue;Pigron Statue;Hoplite Statue;Granite Golem Statue;Armed Zombie Statue;Blood Zombie Statue;Angler Tackle Bag;Geyser;Ultra Bright Campfire;Bone Campfire;Pixel Box;Liquid Sensor (Water);Liquid Sensor (Lava);Liquid Sensor (Honey);Liquid Sensor (Any);Bundled Party Balloons;Balloon Animal;Party Hat;Silly Sunflower Petals;Silly Sunflower Tops;Silly Sunflower Bottoms;Silly Pink Balloon;Silly Purple Balloon;Silly Green Balloon;Blue Streamer;Green Streamer;Pink Streamer;Silly Balloon Machine;Silly Tied Balloon (Pink);Silly Tied Balloon (Purple);Silly Tied Balloon (Green);Pigronata;Party Center;Silly Tied Bundle of Balloons;Party Present;;Cog Wall;Sandfall Wall;Snowfall Wall;Sandfall;Snowfall;Snow Cloud;Pedguins Hood;Pedguins Jacket;Pedguins Trousers;Silly Pink Balloon Wall;Silly Purple Balloon Wall;Silly Green Balloon Wall;0x33s Aviators;Blue Phasesaber;Red Phasesaber;Green Phasesaber;Purple Phasesaber;White Phasesaber;Yellow Phasesaber;Djinns Curse;Ancient Horn;Mandible Blade;Ancient Headdress;Ancient Garments;Ancient Slacks;Forbidden Mask;Forbidden Robes;Forbidden Treads;Spirit Flame;Sand Elemental Banner;Pocket Mirror;Magic Sand Dropper;Forbidden Fragment;Lamia Tail;Lamia Wraps;Lamia Mask;Sky Fracture;Onyx Blaster;Sand Shark Banner;Bone Biter Banner;Flesh Reaver Banner;Crystal Thresher Banner;Angry Tumbler Banner;Ancient Cloth;Desert Spirit Lamp;Music Box (Sandstorm);Apprentices Hat;Apprentices Robe;Apprentices Trousers;Squires Great Helm;Squires Plating;Squires Greaves;Huntresss Wig;Huntresss Jerkin;Huntresss Pants;Monks Bushy Brow Bald Cap;Monks Shirt;Monks Pants;Apprentices Scarf;Squires Shield;Huntresss Buckler;Monks Belt;Defenders Forge;War Table;War Table Banner;Eternia Crystal Stand;Defender Medal;Flameburst Rod;Flameburst Cane;Flameburst Staff;Ale Tosser;Etherian Mana;Brand of the Inferno;Ballista Rod;Ballista Cane;Ballista Staff;Flying Dragon;Eternia Crystal;Lightning Aura Rod;Lightning Aura Cane;Lightning Aura Staff;Explosive Trap Rod;Explosive Trap Cane;Explosive Trap Staff;Sleepy Octopod;Ghastly Glaive;Etherian Goblin Bomber Banner;Etherian Goblin Banner;Old Ones Skeleton Banner;Drakin Banner;Kobold Glider Banner;Kobold Banner;Wither Beast Banner;Etherian Wyvern Banner;Etherian Javelin Thrower Banner;Etherian Lightning Bug Banner;;;;;;Tome of Infinite Wisdom;ItemName.BoringBow;Phantom Phoenix;Gato Egg;Creeper Egg;Dragon Egg;Sky Dragons Fury;Aerial Bane;Treasure Bag;;;Betsy Mask;Dark Mage Mask;Ogre Mask;Betsy Trophy;Dark Mage Trophy;Ogre Trophy;Music Box (Old Ones Army);Betsys Wrath;Valhalla Knights Helm;Valhalla Knights Breastplate;Valhalla Knights Greaves;Dark Artists Hat;Dark Artists Robes;Dark Artists Leggings;Red Riding Hood;Red Riding Dress;Red Riding Leggings;Shinobi Infiltrators Helmet;Shinobi Infiltrators Torso;Shinobi Infiltrators Pants;Betsys Wings;Crystal Chest;Golden Chest;Trapped Crystal Chest;Trapped Golden Chest;Crystal Door;Crystal Chair;Crystal Candle;Crystal Lantern;Crystal Lamp;Crystal Candelabra;Crystal Chandelier;Crystal Bathtub;Crystal Sink;Crystal Bed;Crystal Clock;Sunplate Clock;Blue Dungeon Clock;Green Dungeon Clock;Pink Dungeon Clock;Crystal Platform;Golden Platform;Dynasty Platform;Lihzahrd Platform;Flesh Platform;Frozen Platform;Crystal Work Bench;Golden Work Bench;Crystal Dresser;Dynasty Dresser;Frozen Dresser;Living Wood Dresser;Crystal Piano;Dynasty Piano;Crystal Bookcase;Crystal Sofa;Dynasty Sofa;Crystal Table;Arkhaliss Hood;Arkhaliss Bodice;Arkhaliss Tights;Arkhaliss Lightwings;Leinfors Hair Protector;Leinfors Excessive Style;Leinfors Fancypants;Leinfors Prehensile Cloak;Leinfors Luxury Shampoo".split(";");
    oa.l4 = "1;d1|d=5|t=20|k=2|tp=40|z=2000;txK;txK;d1|d=10|t=21|k=5|z=1800;cxH|hl=15|t=17|z=1250;d1|d=8|t=12|k=4|z=1400;d1|d=7|t=30|k=5.5|th=40|z=1600;txH|1=Provides light|z=50;txK;d1|d=5|t=27|k=4.5|tx=9|z=1600;txK|z=500;txK|z=250;txK|z=2000;txK|z=1000;ax1|1=Tells the time|z=1000;ax1|1=Tells the time|z=5000;ax1|1=Tells the time|z=10000;ax1|1=Displays depth|z=12500;txH|z=6000;txH|z=750;txH|z=3000;txH|z=1500;bxK|1=Both tasty and flammable|z=5;d1|d=7|t=25|k=4|z=100;tH|z=200;wxK;tH|z=10;cx|s=30|hl=50|t=17|z=300;cxH|r=2|t=30|1=Permanently increases maximum life by 20|z=75000;wxK;txK|z=20;tH|z=300;tH|1=Used for smelting ore|z=300;tH|z=150;tH|1=Used to craft items from metal bars|z=5000;tH|1=Used for basic crafting|z=150;41|D=1|z=1000;xH|z=500;r1|d=4|t=30|z=100;rbxK|d=5|k=2|z=5;rbK|d=7|k=2|z=10;cK|d=10|t=15|z=15;c|s=20|t=45|1=Summons the Eye of Cthulhu;r1|d=14|t=25|k=1|z=18000;d1|d=20|t=30|k=6|tx=15|z=13500;dx1|d=17|t=20|k=5|z=13500;rbK|d=12|k=3|z=40;txH|z=500;ax1|1=Slowly regenerates life|z=50000;x1|t=90|1=Gaze in the mirror to return home|z=50000;rbK|d=10|k=4|z=100;tH|z=300;ax1|1=Allows the holder to double jump|z=50000;ax1|1=The wearer can run super fast|z=50000;dx1|d=13|t=15|k=8|z=50000;txK|1=Pulsing with dark energy|z=4000;txH|1=Pulsing with dark energy|z=16000;1;txH|z=500;xH|z=50;txK;tH|z=20;tH|z=200;m1|d=10|t=28|k=1|m=10|1=Summons a vile thorn|z=10000;d1|r=2|d=22|t=20|k=5|1=Causes stars to rain from the sky|2=Forged with the fury of heaven|z=50000;cH|t=15|1=Cleanses the evil|z=75;cxH|t=15|1=Banishes the Hallow|z=100;xH|1=Looks tasty!|z=10;xH|z=100;c|s=20|t=45|1=Summons the Eater of Worlds;rb|s=100|d=25|z=5;rb|s=100|d=50|z=500;rb|s=100|d=100|z=50000;rbK|d=200|z=5000000;bxH|1=Disappears after the sunrise|z=2500;61|D=1|z=750;61|D=2|z=3000;61|D=3|z=7500;61|D=4|z=15000;51|D=2|z=1000;51|D=3|z=4000;51|D=4|z=10000;51|D=5|z=20000;1|k=7|1=Get over here!|z=20000;txK|tr=3|1=Can be climbed on|z=200;xH|z=500;tH|z=10000;41|D=1|1=Provides light when worn|z=40000;41|D=1|z=1250;41|D=2|z=5000;41|D=3|z=12500;41|D=4|z=25000;wxK;txK;r1|d=10|t=16|z=50000;r1|c=7|d=31|t=36|k=5.25|z=100000;rbxK|d=7|k=2|z=7;rx1|r=2|d=6|t=8|1=33% chance to not consume ammo|2=Half shark, half gun, completely awesome.|z=350000;r1|d=8|t=28|z=1400;61|D=6|1=7% increased melee speed|z=22500;51|D=7|1=7% increased melee speed|z=30000;41|D=6|1=7% increased melee speed|z=37500;d1|d=9|t=20|k=3|tp=65|1=Able to mine Hellstone|z=18000;d1|d=24|t=45|k=6|th=55|z=15000;txH;tH|z=3000;tH|z=12000;tH|z=24000;cH|r=2|t=30|1=Permanently increases maximum mana by 20;cx|s=50|hm=50|t=17|z=100;ax1|1=Increases maximum mana by 20|z=50000;m1|r=3|d=48|t=20|k=5.5|m=15|1=Throws balls of fire|z=10000;mx1|r=2|d=27|t=17|k=7.5|m=10|1=Casts a controllable missile|z=10000;1|t=20|k=5|1=Magically moves dirt|z=50000;1|t=20|1=Creates a magical shadow orb|z=10000;txK|z=1000;txH|1=Warm to the touch|z=7000;xH|1=Sometimes dropped by Skeletons and Piranha|z=1000;d1|r=3|d=32|t=15|k=8|z=100000;r1|r=3|d=31|t=22|k=2|1=Lights wooden arrows ablaze|z=27000;dx1|r=3|d=36|t=34|k=6.5|1=Its made out of fire!|z=27000;d1|r=3|d=12|t=23|k=2|tp=100|z=27000;41|D=5|1=7% increased magic damage|z=45000;51|D=6|1=7% increased magic damage|z=30000;61|D=5|1=7% increased magic damage|z=30000;cxK|hl=20|t=17|z=20;m1|d=19|t=17|k=0.75|m=7|z=20000;ax1|r=3|1=Allows flight|z=50000;txK;wxK;txK;wxK;txK;txK;wK;tK;txK;wK;txK;wK;txK;wxK;txK;wxK;txK;wxK;tK;tH|1=Holding this may attract unwanted attention;txH|1=It contains strange symbols|z=375;txK;41|r=2|D=5|1=5% increased ranged damage.|z=45000;51|r=2|D=6|1=5% increased ranged damage.|z=30000;61|r=2|D=5|1=5% increased ranged damage.|z=30000;bxK|d=20|k=2.3|z=50;dx1|r=2|d=19|t=18|k=2.5|z=27000;ax1|r=2|D=1|1=Grants immunity to knockback|z=27000;m1|r=2|d=16|t=16|k=5|m=6|1=Sprays out a shower of water|z=27000;ax1|1=Negates fall damage|z=27000;ax1|1=Increases jump height|z=27000;r1|r=2|d=25|t=30|k=6|z=27000;cK|d=15|t=15|k=1|z=80;d1|d=15|t=45|k=6.5|z=27000;d1|r=2|d=23|t=45|k=7|z=27000;rx1|r=2|d=17|t=12|k=3|z=50000;m1|r=2|d=19|t=17|k=5|m=10|1=Casts a slow moving bolt of water|z=50000;cxH|t=25|1=A small explosion that will destroy some tiles|z=300;cx|s=30|t=40|1=A large explosion that will destroy most tiles|z=2000;cxH|d=60|t=45|k=8|1=A small explosion that will not destroy tiles|z=75;bxK;txK;txK;txK;txK;txK|r=2;txH|r=2|1=Hot to the touch|z=20000;txK;txK|z=5625;txK|z=11250;txK|z=7500;txK|z=3750;txK|z=1875;txK|z=15000;txK|z=50;1;1|r=3|k=7|z=20000;1|1=Increases breath time and allows breathing in water|z=10000;ax1|1=Grants the ability to swim|z=10000;c|s=30|hl=100|t=17|z=1000;cx|s=75|hm=100|t=17|z=250;dx1|r=3|d=28|t=30|k=3|1=Has a chance to poison enemies|z=27000;d1|r=3|d=25|t=15|k=8|z=50000;txK;ax1|r=2|D=1|1=Grants immunity to fire blocks|z=27000;tH|z=150;txH|z=150;d1|d=2|t=37|k=5.5|th=25|z=50;r1|r=2|d=55|t=12|1=Shoots fallen stars|z=500000;dx1|d=21|t=25|k=3|z=27000;dx1|d=21|t=25|k=3|z=27000;dx1|d=21|t=25|k=3|z=27000;dx1|d=21|t=25|k=3|z=27000;dx1|d=21|t=25|k=3|z=27000;dx1|d=21|t=25|k=3|z=27000;d1|d=20|t=30|k=7|tx=20|th=60|z=15000;4H|D=1;xH|t=15;H|t=15;4v1|1=Its pretty, oh so pretty|z=100;xH|z=200;xH|z=1000;ax1|r=3|1=12% increased melee speed|z=50000;ax1|r=3|1=10% increased movement speed|z=50000;dt1|r=3|d=7|k=3|1=Creates grass and moss on dirt and stone|2=Increases alchemy plant collection when used to gather|z=2000;txK;x1|r=2|t=30|1=May annoy others|z=100;ax1|D=1|z=1500;d1|r=3|d=20|t=27|k=7|tx=30|th=70|z=15000;m1|r=3|d=40|t=20|k=6.5|m=12|1=Summons a controllable ball of fire|z=10000;r1|r=3|d=24|t=11|k=2|z=50000;d1|r=3|c=7|d=35|t=45|k=7.75|z=27000;txH|z=3000;tH|1=Grows plants|z=100;ax1|r=3|1=6% reduced mana usage|z=27000;tH|z=2000;xK|z=1000;c|s=20|hl=80|hm=80|t=17|z=1500;c|s=20|hl=80|hm=80|t=17|1=Reduced potion cooldown|z=1500;41|r=3|D=5|1=Increases maximum mana by 40|2=4% increased magic critical strike chance|z=45000;51|r=3|D=6|1=Increases maximum mana by 20|2=4% increased magic critical strike chance|z=30000;61|r=3|D=6|1=Increases maximum mana by 20|2=4% increased magic critical strike chance|z=30000;41|r=3|D=8|z=45000;51|r=3|D=9|z=30000;61|r=3|D=8|z=30000;rbK|d=9|k=1|z=8;c|s=50|t=25|1=Tossing may be difficult.|z=500;xH|z=5000;4v1|r=2|1=Makes you look cool!|z=10000;41|r=2|D=2|1=15% increased magic damage|z=10000;4v1|z=10000;5v1|z=5000;6v1|z=5000;4v1|z=10000;4v1|z=20000;4v1|z=10000;5v1|z=250000;6v1|z=250000;4v1|z=10000;5v1|z=5000;6v1|z=5000;4vtH|z=10000;4v1|z=10000;5v1|z=5000;6v1|z=5000;xH|z=10000;xH|z=2000;41|D=2|1=15% increased throwing velocity|z=10000;51|D=4|1=15% increased throwing damage|z=5000;61|D=3|1=10% increased throwing critical strike chance|z=5000;xH|z=50;4v1|1=It smells funny...|z=1000;cxK|t=15|1=Its smiling, might be a good snack|z=3750;5vx1|z=2000;4v1|z=10000;4vx1|z=10000;rbK|r=2|d=13|k=8|z=100;r1|r=2|d=30|t=16|k=5|1=This is a good idea!|z=10000;a1|1=You are a terrible person.|z=1000;4x1|r=2|D=2|1=Greatly extends underwater breathing|z=1000;v1|z=10000;v1|z=10000;v1|z=10000;m1|r=3|d=35|t=20|k=5|m=14|1=Casts a demon scythe|z=10000;dx1|r=3|d=42|t=27|k=4.5|z=54000;d1|r=3|d=29|t=22|k=5|z=27000;txK|z=400;txK|z=10;d1|d=11|t=31|k=5|z=10000;rbK|d=9|k=3|z=15;cxK|d=12|t=15|k=2|z=50;d1|d=8|t=31|k=6.5|z=1000;r1|d=9|t=45|k=3.5|1=Allows the collection of seeds for ammo|z=10000;cxH|t=15|1=Works when wet|z=10;rbK|d=3|1=For use with Blowpipe;d1|d=8|t=16|k=5|z=5000;ax1|1=5% increased movement speed|z=5000;cH|t=15|z=20;cK|c=4|d=14|t=15|k=2.4|z=60;c|s=30|t=17|1=Provides immunity to lava|z=1000;c|s=30|t=17|1=Provides life regeneration|z=1000;c|s=30|t=17|1=25% increased movement speed|z=1000;c|s=30|t=17|1=Breathe water instead of air|z=1000;c|s=30|t=17|1=Increase defense by 8|z=1000;c|s=30|t=17|1=Increased mana regeneration|z=1000;c|s=30|t=17|1=20% increased magic damage|z=1000;c|s=30|t=17|1=Slows falling speed|z=1000;c|s=30|t=17|1=Shows the location of treasure and ore|z=1000;c|s=30|t=17|1=Grants invisibility|z=1000;c|s=30|t=17|1=Emits an aura of light|z=1000;c|s=30|t=17|1=Increases night vision|z=1000;c|s=30|t=17|1=Increases enemy spawn rate|z=1000;c|s=30|t=17|1=Attackers also take damage|z=1000;c|s=30|t=17|1=Allows the ability to walk on water|z=1000;c|s=30|t=17|1=20% increased arrow speed and damage|z=1000;c|s=30|t=17|1=Shows the location of enemies|z=1000;c|s=30|t=17|1=Allows the control of gravity|z=1000;txH|z=5000;tH|z=80;tH|z=80;tH|z=80;tH|z=80;tH|z=80;tH|z=80;xH|z=100;xH|z=100;xH|z=100;xH|z=100;xH|z=100;xH|z=100;xH|z=200;xH|z=50;tH;41|z=20000;xH|z=50;xH|1=Banned in most places|z=200000;5v1|z=200000;6v1|z=200000;H|1=Opens one Gold or Dungeon Chest;txH|z=5000;1|1=Opens all Shadow Chests|z=75000;wxK;xH|z=100;tH|1=Used for crafting cloth|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=500;tH|z=500;tH|z=500;tH|z=500;tH|z=500;tH|z=500;tH|z=500;tH|z=500;tH|z=500;tH|z=200000;tH|z=500;tH|z=1000;tH|z=1500;tH|z=70;txH|z=20;tH|1=Used for brewing ale|z=600;bxH|z=100;tH|z=300;tH|z=300;txH|z=20;c|s=30|t=17|1=Minor improvements to all stats|z=1000;tH|z=150;tH|z=300;tH|z=300;c|s=20|t=45|1=Summons a Goblin Army;xH|z=30;tH|1=Used for advanced wood crafting|z=300;txK|r=3|z=3500;txK|r=3|z=5500;txK|r=3|z=7500;d1|r=4|d=26|t=27|k=7.5|th=80|1=Strong enough to destroy Demon Altars|z=39000;dx1|r=5|d=57|t=25|k=4.5|z=230000;txH|r=3|z=2000;bxK;41|r=4|D=2|1=Increases maximum mana by 40|2=9% increased magic critical strike chance|z=75000;41|r=4|D=11|1=7% increased movement speed|2=12% increased melee speed|z=75000;41|r=4|D=4|1=10% increased ranged damage|2=6% increased ranged critical strike chance|z=75000;51|r=4|D=8|1=3% increased critical strike chance|z=60000;61|r=4|D=7|1=10% increased movement speed|z=45000;41|r=4|D=3|1=Increases maximum mana by 60|2=15% increased magic damage|z=112500;41|r=4|D=16|1=5% increased melee critical strike chance|2=10% increased melee damage|z=112500;41|r=4|D=6|1=12% increased ranged damage|2=7% increased ranged critical strike chance|z=112500;51|r=4|D=12|1=5% increased damage|z=90000;61|r=4|D=9|1=3% increased critical strike chance|z=67500;txH|r=3|z=10500;txH|r=3|z=22000;d1|r=4|d=23|t=25|k=2.75|tx=14|z=54000;d1|r=4|d=29|t=25|k=3|tx=17|z=81000;d1|r=4|d=10|t=25|tp=110|1=Can mine Mythril and Orichalcum|z=54000;d1|r=4|d=15|t=25|tp=150|1=Can mine Adamantite and Titanium|z=81000;d1|r=4|d=33|t=25|k=4.5|tx=20|z=108000;d1|r=4|d=20|t=25|tp=180|z=108000;d1|r=5|d=63|t=45|k=7|1=Has a chance to confuse|2=Find your inner pieces|z=144000;d1|r=4|d=35|t=26|k=5|z=67500;txH|r=3|z=37500;wxK;ax1|1=Displays horizontal position|z=12500;ax1|r=4|1=Grants the ability to swim|2=Greatly extends underwater breathing|z=100000;ax1|r=3|1=Shows position|2=Tells the time|z=150000;a1|r=4|1=Negates fall damage|2=Grants immunity to fire blocks|z=100000;ax1|r=4|D=2|1=Grants immunity to knockback|2=Grants immunity to fire blocks|z=100000;tH|1=Allows the combining of some accessories|z=100000;ax1|r=4|1=Allows the holder to double jump|2=Increases jump height|z=150000;41|r=4|D=4|1=Increases maximum mana by 80|2=11% increased magic damage and critical strike chance|z=150000;41|r=4|D=22|1=7% increased melee critical strike chance|2=14% increased melee damage|z=150000;41|r=4|D=8|1=14% increased ranged damage|2=8% increased ranged critical strike chance|z=150000;51|r=4|D=16|1=6% increased damage|z=120000;61|r=4|D=12|1=4% increased critical strike chance|2=5% increased movement speed|z=90000;ax1|r=4|1=Allows flight|2=The wearer can run super fast|z=100000;d1|r=4|d=38|t=25|k=6|z=90000;a1|r=3|1=Increases block placement range|z=100000;bxK;txK;51|D=1|z=5000;61|D=1|z=5000;txK;txK;txK;txK;txK;wxK;wxK;wxK;wxK;wxK;cK|r=3|d=20|t=15|k=3|1=Spreads the Hallow to some blocks|z=200;cK|r=3|d=20|t=15|k=3|1=Spreads the corruption to some blocks|z=200;txK;1|r=5|t=20|1=Summons a magical fairy|z=250000;d1|r=4|d=39|t=30|k=8|z=150000;tH|z=200;tH|z=200;tH|z=200;tH|z=200;tH|z=500;tH|z=200;txH|z=300;r1|r=4|d=19|t=12|1=Three round burst|2=Only the first shot consumes ammo|z=150000;r1|r=4|d=32|t=25|k=1.5|z=60000;r1|r=4|d=36|t=23|k=2|z=90000;1|r=4|k=7|z=200000;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;wK;tK;r1|r=4|d=40|t=20|k=2.5|z=120000;d1|r=4|d=50|t=27|k=6|z=138000;d1|r=4|d=39|t=23|k=3.85|z=69000;d1|r=4|d=44|t=26|k=6|z=103500;ax1|r=4|1=Turns the holder into a werewolf at night|z=150000;ax1|1=Creates measurement lines on screen for block placement|z=10000;tK|r=3|z=100000;tK|z=10000;ax1|r=4|1=15% increased magic damage|z=100000;ax1|r=4|1=15% increased melee damage|z=100000;ax1|r=4|1=15% increased ranged damage|z=100000;a1|r=5|1=Allows flight and slow fall|z=400000;a1|r=5|1=Allows flight and slow fall|z=400000;m1|r=5|d=32|t=12|m=4|z=200000;m1|r=5|d=74|t=18|k=6|m=18|1=Casts a controllable rainbow|z=200000;m1|r=4|d=28|t=9|k=2|m=6|1=Summons a block of ice|z=500000;ax1|r=5|1=Transforms the holder into merfolk when entering water|z=150000;tK;cx|s=30|r=3|hl=150|t=17|z=5000;cx|s=75|r=3|hm=200|t=17|z=500;xH|z=500;txK|z=8000;4v1|r=2|z=20000;5v1|r=2|z=10000;6v1|r=2|z=10000;r1|r=5|d=27|t=30|k=0.3|1=Uses gel for ammo|z=500000;x1|r=3|t=12|z=10000;x1|r=3|t=12|z=10000;x1|t=15|tr=20|1=Places red wire|z=20000;x1|t=15|tr=20|1=Removes wire|z=20000;tK|z=1000;tK|z=1000;tK|z=3000;m1|r=4|d=29|t=12|k=2.5|m=8|z=150000;rbK|r=3|d=9|k=1|1=Creates several crystal shards on impact|z=30;rbK|r=3|d=13|k=2|1=Summons falling stars on impact|z=80;m1|r=4|d=40|t=8|k=3.75|m=6|1=A magical returning dagger|z=250000;m1|r=4|d=25|t=7|k=5|m=4|1=Summons rapid fire crystal shards|z=500000;m1|r=4|d=36|t=20|k=6.5|m=12|1=Summons unholy fire balls|z=500000;xK|r=3|1=The essence of light creatures|z=1000;xK|r=3|1=The essence of dark creatures|z=1000;xH|r=3|1=Not even water can put the flame out|z=4000;txH|1=Can be placed in water|z=300;tH|r=3|1=Used to smelt adamantite and titanium ore|z=50000;tH|r=3|1=Used to craft items from mythril, orichalcum, adamantite, and titanium bars|z=25000;xH|1=Sharp and magical!|z=15000;xH|r=2|1=Sometimes carried by creatures in corrupt deserts|z=4500;xH|r=2|1=Sometimes carried by creatures in light deserts|z=4500;txK|1=Activates when stepped on|z=5000;xK|z=500;xH|1=Can be enchanted|z=50000;ax1|r=4|1=Causes stars to fall when injured|z=100000;r1|r=5|d=25|t=7|k=1|1=50% chance to not consume ammo|2=Minisharks older brother|z=300000;rx1|r=4|d=24|t=45|k=6.5|1=Fires a spread of bullets|z=250000;ax1|r=4|1=Reduces the cooldown of healing potions|z=100000;ax1|r=4|1=Increases melee knockback|z=100000;d1|r=4|d=29|t=28|k=4|z=45000;tK|z=2000;tK|z=10000;tK;txK|1=Activates when stepped on|z=5000;txK|1=Activates when a player steps on it|z=5000;txK|1=Activates when a player steps on it|z=5000;c|s=20|r=3|t=45|1=Summons The Twins;rbK|r=3|d=17|k=3|z=80;rbK|r=3|d=12|k=4|z=30;xK|r=5|1=The essence of pure terror|z=40000;xK|r=5|1=The essence of the destroyer|z=40000;xK|r=5|1=The essence of omniscient watchers|z=40000;d1|r=5|d=42|t=22|k=6.4|z=230000;51|r=5|D=15|1=7% increased critical strike chance|z=200000;61|r=5|D=11|1=7% increased damage|2=8% increased movement speed|z=150000;41|r=5|D=9|1=15% increased ranged damage|2=8% increased ranged critical strike chance|z=250000;ax1|r=4|1=Increases length of invincibility after taking damage|z=1500;a1|r=4|1=8% reduced mana usage|2=Automatically use mana potions when needed|z=50000;c|s=20|r=3|t=45|1=Summons Destroyer;c|s=20|r=3|t=45|1=Summons Skeletron Prime;41|r=5|D=5|1=Increases maximum mana by 100|2=12% increased magic damage and critical strike chance|z=250000;41|r=5|D=24|1=10% increased melee damage and critical strike chance|2=10% increased melee haste|z=250000;c|s=20|t=45|1=Summons King Slime;d|s=5|r=5|d=57|t=15|k=8|1=Stacks up to 5|z=500000;atx1|r=4|z=100000;atx1|r=4|z=100000;atx1|r=4|z=100000;at1|r=4|z=100000;atx1|r=4|z=100000;atx1|r=4|z=100000;atx1|r=4|z=100000;atx1|r=4|z=100000;atx1|r=4|z=100000;atx1|r=4|z=100000;atx1|r=4|z=100000;atx1|r=4|z=100000;atx1|r=4|z=100000;xK|r=3|1=The essence of powerful flying creatures|z=1000;a1|r=3|1=Has a chance to record songs|z=100000;txK;r1|r=4|d=43|t=19|k=2.5|z=200000;d1|r=4|d=35|t=25|k=4.75|tp=200|tx=22|1=Not to be confused with a picksaw|z=220000;tK|1=Explodes when activated;tK|1=Sends water to outlet pumps;tK|1=Receives water from inlet pumps;tH|1=Activates every second|z=50;tH|1=Activates every 3 seconds|z=50;tH|1=Activates every 5 seconds|z=50;txK;wxK;4v1|z=150000;5v1|z=150000;6v1|z=150000;txK;wxK;txK;txK;wxK;tK|z=500;tK|z=500;tK|z=500;1|1=Right Click to open;1|1=Right Click to open;1|1=Right Click to open;c1|r=2|t=45|1=Summons the Frost Legion;1|r=3|t=20|1=Summons a pet bunny;txK;wxK;wxK;txK;wxK;txK;wxK;txK;txK;txK;txK;wxK;wxK;wxK;wxK;txK;txK;txK;wxK;wxK;wxK;txH|z=500;txH|z=500;txH|z=500;tH;tH;tH;txK;txK;txK;txK;tH|z=150;tH|z=150;tH|z=150;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=2000;tH|z=2000;tH|z=2000;tH|z=300;tH|z=300;tH|z=300;tH|z=200;tH|z=200;tH|z=200;d1|d=10|t=21|k=5|z=100;d1|d=7|t=30|k=5.5|th=40|z=50;r1|d=8|t=28|z=100;d1|d=8|t=23|k=5|z=100;d1|d=4|t=33|k=5.5|th=35|z=50;r1|d=6|t=29|z=100;d1|d=11|t=21|k=5|z=100;d1|d=9|t=29|k=5.5|th=45|z=50;r1|d=9|t=27|z=100;txK;wxK;txK;a1|r=9|1=Great for impersonating devs!|z=400000;4v1|r=9|1=Great for impersonating devs!;5v1|r=9|1=Great for impersonating devs!;6v1|r=9|1=Great for impersonating devs!;1|r=3|t=20|1=Summons a baby penguin|z=100000;d1|c=2|d=16|t=15|k=8.5|z=50000;d1|r=8|c=13|d=70|t=20|k=6.5|z=138000;d1|r=4|d=49|t=18|k=4|z=180000;tH|z=150;dx1|r=8|d=66|t=16|k=4.5|z=500000;dx1|r=8|d=90|t=26|k=4.75|z=500000;d1|r=5|d=49|t=23|k=4.5|1=Shoots an icy bolt|z=250000;tH|z=300;c|s=30|r=9|t=17|1=Only for those who are worthy;r1|r=8|d=29|t=34|k=7|z=700000;txH|z=5000;txH|z=5000;r1|r=5|c=5|d=40|t=19|k=4.7|z=27000;m1|r=6|d=73|t=22|k=6.5|m=25|1=Summons the Devils trident|z=500000;41|r=5|D=10|1=16% increased melee and ranged damage|z=250000;51|r=5|D=20|1=11% increased melee and ranged critical strike chance|z=200000;61|r=5|D=13|1=8% increased movement speed|2=7% increased melee attack speed|z=150000;41|D=2|z=1875;51|D=2|z=250;61|D=1|z=1125;41|D=3|z=7500;51|D=3|z=6000;61|D=2|z=4500;41|D=4|z=7500;51|D=5|z=6000;61|D=3|z=4500;41|D=5|z=7500;51|D=6|z=6000;61|D=5|z=4500;txK|z=375;txK|z=750;txK|z=1500;txK|z=3000;txH|z=1125;txH|z=2250;txH|z=4500;txH|z=9000;ax1|1=Tells the time|z=1500;ax1|1=Tells the time|z=7500;ax1|1=Tells the time|z=15000;tH|z=4500;tH|z=18000;tH|z=36000;txH;tH;4vx1|z=15000;tH|1=Used to craft items from metal bars|z=7500;txK;txK;txK;wxK;wxK;wxK;d1|r=4|d=52|t=15|k=6.5|1=Shoots a beam of light|z=500000;d1|c=2|d=17|t=20|k=4.75|1=Shoots an icy bolt|z=20000;r1|r=5|d=46|t=21|k=4.5|1=Shoots frost arrows|z=175000;m1|r=5|d=46|t=20|k=5|m=14|1=Shoots a stream of frost|z=500000;41|D=1;51|D=1;61;41|D=1;51|D=2;61|D=1;41|D=1;51|D=1;61|D=1;41|D=2;51|D=3;61|D=2;m1|d=14|t=40|k=3.25|m=3|z=2000;m1|d=15|t=38|k=3.5|m=4|z=3000;m1|d=17|t=34|k=4|m=5|z=10000;m1|d=19|t=32|k=4.25|m=6|z=15000;m1|d=21|t=28|k=4.75|m=7|z=20000;m1|r=2|d=23|t=26|k=5.5|m=8|z=30000;wK|z=10;wK|z=10;wK|z=10;a1|r=5|1=Allows flight and slow fall|2=Hold UP to rocket faster|z=400000;a1|r=5|1=Allows flight and slow fall|z=400000;wxK;txK;wxK;1|r=3|t=20|1=Summons a pet turtle|z=100000;4v1|r=5|z=50000;5v1|r=5|z=50000;d1|r=7|d=60|t=40|k=6.2|z=700000;d1|r=8|d=95|t=16|k=6.5|z=1000000;r1|r=8|d=60|t=30|k=4|z=100000;r1|r=8|d=50|t=30|k=4|z=100000;r1|r=8|d=80|t=40|k=4|z=350000;a1|r=5|1=Allows flight and slow fall|z=400000;txK;txK;wxK;tK;tK;tK;wxK;wxK;wxK;rbK|d=40|k=4|1=Small blast radius. Will not destroy tiles|z=50;rbK|d=40|k=4|1=Small blast radius. Will destroy tiles|z=250;rbK|d=65|k=6|1=Large blast radius. Will not destroy tiles|z=100;rbK|r=2|d=65|k=6|1=Large blast radius. Will destroy tiles|z=500;tK|1=Increases running speed;d1|r=4|d=10|t=25|k=5|tp=110|1=Can mine Mythril and Orichalcum|z=54000;d1|r=4|d=15|t=25|k=5|tp=150|1=Can mine Adamantite and Titanium|z=81000;d1|r=4|d=20|t=25|k=5|tp=180|z=108000;1|r=5|t=30|k=0.3|1=Creates and destroys biomes when sprayed|2=Uses colored solution|z=2000000;bK|r=3|1=Used by the Clentaminator|2=Spreads the Purity|z=2500;bK|r=3|1=Used by the Clentaminator|2=Spreads the Hallow|z=2500;bK|r=3|1=Used by the Clentaminator|2=Spreads the Corruption|z=2500;bK|r=3|1=Used by the Clentaminator|2=Spreads Glowing Mushrooms|z=2500;bK|r=3|1=Used by the Clentaminator|2=Spreads the Crimson|z=2500;a1|r=5|1=Allows flight and slow fall|z=400000;a1|r=5|1=Allows flight and slow fall|z=400000;d1|r=7|d=26|t=27|k=7.5|th=85|1=Strong enough to destroy Demon Altars|z=400000;m1|r=7|d=28|t=25|k=1|m=10|1=Summons a thorn spear|z=200000;tH|z=5000;tH|z=5000;tH|z=5000;41|D=6|1=2% increased damage|z=50000;51|D=7|1=2% increased damage|z=40000;61|D=6|1=2% increased damage|z=30000;dx1|d=22|t=25|k=5|z=13500;r1|d=19|t=30|k=1|z=18000;d1|d=23|t=40|k=6|th=55|z=15000;d1|d=12|t=22|k=3.5|tp=70|1=Able to mine Hellstone|z=18000;d1|d=22|t=32|k=6|tx=15|z=13500;r1|d=15|t=23|k=1|z=50000;d1|d=16|t=45|k=6.5|z=27000;d1|d=14|t=31|k=5|z=10000;4x1|D=1|z=50000;5x1|D=2|z=40000;6x1|D=1|z=30000;tH;tH;tH;tH;tH;tH|z=150;tH|z=150;tH|z=150;tH|z=150;tH|z=150;tH|z=200;tH|z=200;tH|z=200;tH|z=200;tH|z=200;a1|r=5|1=Allows flight and slow fall|z=400000;a1|r=5|1=Allows flight and slow fall|z=400000;a1|r=8|1=Allows flight and slow fall|z=400000;txK;wxK;tH;tH|z=300;tH|z=300;tH|z=300;tH|z=300;txH|z=5000;t1|1=Places living wood;tK;tK;tK;txK;tH|z=200;txH|z=5000;4v1|r=2|z=15000;5v1|r=2|z=15000;6v1|r=2|z=15000;4v1;5v1;6v1;tH|z=5000;tH|z=5000;tH|z=5000;4v1;xK|t=15|1=Enables solid blocks to be toggled on and off|z=1000;x1|t=15|tr=20|1=Places blue wire|z=20000;x1|t=15|tr=20|1=Places green wire|z=20000;txK|1=Activates when a player steps on it|z=5000;txK|1=Activates when anything but a player steps on it|z=5000;ax1|r=5|1=Shops have lower prices|z=50000;ax1|r=5|1=Hitting enemies will sometimes drop extra coins|z=50000;v1|r=2|1=Having a wonderful time!|z=500;ax1|r=2|1=Allows the holder to do an improved double jump|z=50000;tH|z=300;c1|t=20|z=20;a1|r=6|1=Provides life regeneration and reduces the cooldown of healing potions|z=500000;ax1|r=6|1=Turns the holder into a werewolf at night and a merfolk when entering water|z=500000;a1|r=6|1=Causes stars to fall and increases length of invincibility after taking damage|z=500000;ax1|r=4|1=Provides the ability to walk on water|z=200000;4v1|z=250000;5v1|z=100000;5v1;4v1;4v1|z=20000;4v1|z=25000;4v1;5v1;6v1;4v1|z=50000;5v1|z=50000;6v1|z=50000;4v1|z=50000;5v1|z=50000;6v1|z=50000;41|D=4|z=25000;txK|z=4500;d1|d=9|t=25|k=5|z=1800;d1|d=5|t=23|k=2|tp=35|z=2000;txK;wxK;ax1|r=4|1=Immunity to Bleeding|z=100000;ax1|r=4|1=Immunity to Broken Armor|z=100000;ax1|r=4|1=Immunity to Poison|z=100000;ax1|r=4|1=Immunity to Darkness|z=100000;ax1|r=4|1=Immunity to Slow|z=100000;ax1|r=4|1=Immunity to Silence|z=100000;ax1|r=2|1=Immunity to Curse|z=100000;ax1|r=4|1=Immunity to Weakness|z=100000;ax1|r=4|1=Immunity to Confusion|z=100000;41|D=1;51|D=2;61|D=1;ax1|r=5|1=Increases melee knockback|2=12% increased melee speed|z=300000;ax1|r=5|1=Allows flight|2=The wearer can run incredibly fast|z=300000;ax1|r=7|1=Increases all stats if worn during the day|z=300000;ax1|r=5|1=Increases all stats if worn during the night|z=300000;ax1|r=5|1=Immunity to Weakness and Broken Armor|z=100000;ax1|r=5|1=Immunity to Poison and Bleeding|z=100000;ax1|r=5|1=Immunity to Slow and Confusion|z=100000;ax1|r=5|1=Immunity to Silence and Curse|z=100000;r1|r=6|t=8|k=2|1=Uses coins for ammo|2=Higher valued coins do more damage|z=300000;ax1|r=3|1=Provides 7 seconds of immunity to lava|z=300000;ax1|r=4|1=Provides the ability to walk on water|2=Grants immunity to fire blocks|z=500000;a1|r=7|1=Provides the ability to walk on water and lava|2=Grants immunity to fire blocks and 7 seconds of immunity to lava|z=500000;tK|z=40000;tK|z=40000;txK;tH|z=200;txK;txH|z=500;tH;tH|z=150;tH|z=300;tH|z=300;tH|z=300;tH|z=2000;d1|d=10|t=21|k=5|z=100;d1|d=7|t=30|k=5.5|th=40|z=50;r1|d=8|t=28|z=100;41|D=1;51|D=2;61|D=1;wxK;tK|r=3|z=250000;cK|d=300|t=20|1=For use with cannon|z=1500;1|d=2|t=18|z=50000;rbK|d=1|k=1.5|z=7;t1|1=Places bone;t1|1=Places leaves;a1|r=2|1=Allows the owner to float for a few seconds|z=50000;ax1|r=5|1=12% increased damage|z=300000;ax1|r=6|1=Increases melee knockback|2=12% increased damage and melee speed|z=300000;tK|1=Explodes when stepped on|z=50000;a1|r=8|D=6|1=Absorbs 25% of damage done to players on your team|2=Only active above 25% life|z=300000;1|r=2|k=7|z=20000;tK|z=40000;tK|z=40000;tK|z=40000;tK|z=40000;tK|z=40000;tK|z=40000;1|1=You will fall slower while holding this|z=10000;txK|r=7|1=Reacts to the light|z=3000;a1|r=8|1=Allows flight and slowfall|z=1000000;bK|d=8|k=5.75;ax1|1=Provides extra mobility on ice|2=Ice will not break when you fall on it|z=50000;tH|r=2|1=Rapidly launches snowballs|z=50000;txH|z=500;ax1|1=Allows the ability to slide down walls|2=Improved ability if combined with Shoe Spikes|z=50000;41|D=2|z=5000;41|D=4|z=25000;41|D=6|1=7% increased melee speed|z=37500;51|D=7|1=7% increased melee speed|z=30000;61|D=6|1=7% increased melee speed|z=22500;41|r=2|D=5|1=5% increased ranged damage.|z=45000;41|r=3|D=5|1=Increases maximum mana by 40|2=4% increased magic critical strike chance|z=45000;51|r=3|D=6|1=Increases maximum mana by 20|2=4% increased magic critical strike chance|z=30000;61|r=3|D=6|1=Increases maximum mana by 20|2=4% increased magic critical strike chance|z=30000;ax1|r=7|1=Gives a chance to dodge attacks|z=50000;r1|r=2|d=14|t=40|k=5.75|1=Fires a spread of bullets|z=100000;txK|tr=3|1=Can be climbed on|z=10;tK|1=Life regen is increased when near a campfire;xH|1=Put it on a stick and roast over a campfire|z=100;1|1=Roast it over a campfire!|z=200;c|s=30|t=17|1=Minor improvements to all stats|z=1000;tH|z=1500;tH|z=1500;tH|z=1500;tH|z=1500;txH|z=60;ax1|1=Allows the ability to slide down walls|2=Improved ability if combined with Climbing Claws|z=50000;ax1|r=2|1=Allows the ability to climb walls|z=50000;ax1|r=7|1=Allows the ability to dash|2=Double tap a direction|z=50000;41|D=1|z=50000;51|D=2|z=40000;61|D=1|z=30000;xH|z=10000;ax1|1=Increases maximum mana by 20|2=Increases mana regeneration rate|z=50000;ax1|r=4|1=Allows the holder to double jump|2=Increases jump height|z=150000;a1|r=8|1=Allows the ability to climb walls and dash|2=Gives a chance to dodge attacks|z=500000;cK|t=20|1=Throw to create a climbable line of rope|z=100;r1|r=3|d=27|t=35|k=4|1=Allows the collection of seeds for ammo|z=50000;ax1|1=Allows the holder to double jump|z=50000;rbK|d=9|k=2.2|z=15;d1|r=2|d=24|t=18|k=5.25|1=Shoots an enchanted sword beam|z=20000;d1|r=4|d=35|t=25|k=4.75|tp=200|tx=22|1=Not to be confused with a hamdrill|z=220000;d1|r=4|d=33|t=35|k=5|tx=14|z=54000;d1|r=4|d=39|t=35|k=6|tx=17|z=81000;d1|r=4|d=43|t=35|k=7|tx=20|z=108000;1|r=3|t=20|1=Summons a Baby Eater of Souls;tH|1=Used to craft objects|z=100000;tH|1=Used to craft objects|z=100000;tH|1=Turns silt/slush/fossils into something more useful|2=To use: Place silt/slush/fossils in the extractinator|z=100000;tH|1=Used to craft objects|z=100000;txK|z=15000;rcK|t=15|1=Shoots confetti everywhere!|z=100;41|r=7|D=25|1=16% increased melee damage|2=6% increased melee critical strike chance|z=300000;41|r=7|D=13|1=16% increased ranged damage|2=20% chance to not consume ammo|z=300000;41|r=7|D=7|1=Increases maximum mana by 80 and reduces mana usage by 17%|2=16% increased magic damage|z=300000;51|r=7|D=18|1=5% increased damage|2=7% increased critical strike chance|z=240000;61|r=7|D=13|1=8% increased critical strike chance|2=5% increased movement speed|z=180000;txH|r=7|1=Reacts to the light|z=45000;xH|z=10000;xH|z=10000;xH|z=10000;xH|z=10000;xH|z=10000;xH|z=10000;xH|z=10000;xH|z=10000;xH|z=10000;xH|z=10000;xH|z=10000;xH|z=10000;H|z=10000;H|z=10000;H|z=10000;H|z=10000;H|z=10000;H|z=10000;H|z=10000;H|z=10000;H|z=10000;H|z=10000;H|z=10000;H|z=10000;xH|z=10000;H|z=10000;xH|z=10000;H|z=10000;xH|z=10000;H|z=10000;xH|z=10000;H|z=10000;H|z=10000;H|z=10000;H|z=10000;H|z=10000;H|z=10000;H|z=10000;H|z=10000;H|z=10000;H|z=10000;H|z=10000;H|z=10000;xH|z=10000;H|z=10000;H|z=10000;H|z=10000;H|z=10000;H|z=10000;H|z=10000;H|z=10000;H|z=10000;H|z=10000;H|z=10000;H|z=10000;H|z=10000;H|z=10000;H|z=10000;H|z=10000;xH|z=10000;H|z=10000;xH|z=10000;xH|z=10000;xH|z=10000;1|t=15|1=Used with paint to color blocks|z=10000;1|t=15|1=Used with paint to color walls|z=10000;xK|z=25;xK|z=25;xK|z=25;xK|z=25;xK|z=25;xK|z=25;xK|z=25;xK|z=25;xK|z=25;xK|z=25;xK|z=25;xK|z=25;K|z=25;K|z=25;K|z=25;K|z=25;K|z=25;K|z=25;K|z=25;K|z=25;K|z=25;K|z=25;K|z=25;K|z=25;K|z=25;K|z=25;K|z=25;1|t=15|1=Used to remove paint|z=10000;txK;wxK;tK;txK|r=3|z=4500;txK|r=3|z=6500;txK|r=3|z=8500;txH|1=Used to make Teal Dye|z=10000;txH|1=Used to make Green Dye|z=10000;txH|1=Used to make Sky Blue Dye|z=10000;txH|1=Used to make Yellow Dye|z=10000;txH|1=Used to make Blue Dye|z=10000;txH|1=Used to make Lime Dye|z=10000;xH|1=Used to make Pink Dye|z=10000;txH|1=Used to make Orange Dye|z=10000;xH|1=Used to make Red Dye|z=10000;xH|1=Used to make Cyan Dye|z=10000;xH|1=Used to make Violet Dye|z=10000;xH|1=Used to make Purple Dye|z=10000;xH|1=Used to make Black Dye|z=10000;tH|1=Used to Craft Dyes|z=50000;m1|r=2|d=9|t=12|m=5|1=Shoots bees that will chase your enemy|z=150000;d1|r=7|d=80|t=14|k=5|1=Chases after your enemy|z=500000;d1|r=3|d=26|t=20|k=5.3|1=Summons killer bees after striking your foe|2=Small chance to cause confusion|z=27000;xK;txK;wxK;txK;H|t=15;t1|1=Places Hives;cK|d=14|t=15|k=1|1=Explodes into a swarm of bees|z=200;a1|r=8|1=Allows the holder to reverse gravity|2=Press UP to change gravity|z=50000;ax1|r=2|1=Releases bees when damaged|z=100000;c|s=20|t=45|1=Summons the Queen Bee;cx|s=30|hl=80|t=17|z=40;41|D=1|z=1000;51|D=2|z=1000;tH|z=200;tH|z=200;tH|z=200;tH|z=200;H|r=7|1=Opens the jungle temple door;txH|z=500;tH;tH|z=300;tH|1=Used for basic crafting|z=150;tK|z=10000;tK|z=10000;tK|z=10000;tK|z=10000;tK;txK|1=Activates when a player steps on it|z=5000;tH|z=300;tH|z=300;tH|z=300;m1|r=8|d=21|t=11|m=6|z=500000;r1|r=8|d=38|t=30|k=1|1=Latches on to enemies for continuous damage|z=275000;s1|r=7|d=34|t=28|k=3|m=10|1=Summons a Pygmy to fight for you|z=100000;a1|r=7|1=Increases your max number of minions|z=400000;41|r=7|D=6|1=Increases your max number of minions|2=Increases minion damage by 10%|z=500000;51|r=7|D=17|1=Increases your max number of minions|2=Increases minion damage by 10%|z=500000;61|r=7|D=12|1=Increases your max number of minions|2=Increases minion damage by 10%|z=500000;a1|r=5|1=Allows flight and slow fall|z=1000000;ax1|r=4|1=Allows the holder to double jump|2=Increases jump height|z=150000;a1|r=8|1=Allows the holder to quadruple jump|2=Increases jump height|z=150000;a1|r=5|1=Allows flight and slow fall|z=400000;d1|r=3|d=16|t=22|k=4.5|z=9000;ax1|r=7|1=Increases the damage of your minions by 15%|2=Increases the knockback of your minions|z=400000;cK|t=15|z=20;1|r=3|t=20|1=Summons a Baby Skeletron Head|z=250000;1|r=3|t=20|1=Summons a Baby Hornet|z=150000;1|r=3|t=20|1=Summons a Tiki Spirit|z=2000000;1|r=3|t=20|1=Summons a Pet Lizard|z=100000;tH;tH;tH;tH;tH;m1|r=7|d=48|t=7|k=4|m=4|1=Rapidly shoots razor sharp leaves|z=300000;rbK|r=7|d=10|k=4.5|1=Chases after your enemy|z=50;1|r=3|t=20|1=Summons a Pet Parrot|z=3750000;1|r=3|t=20|1=Summons a Baby Truffle|z=450000;1|r=3|t=20|1=Summons a Pet Sapling|z=100000;1|r=8|t=20|1=Summons a Wisp to provide light|z=275000;txH|r=3|z=13500;d1|r=4|d=41|t=25|k=4.75|z=92000;d1|r=4|d=32|t=27|k=4.5|z=60000;r1|r=4|d=34|t=24|k=1.75|z=80000;d1|r=4|d=12|t=25|k=5|tp=130|1=Can mine Mythril and Orichalcum|z=72000;d1|r=4|d=12|t=25|tp=130|1=Can mine Mythril and Orichalcum|z=72000;d1|r=4|d=26|t=25|k=2.9|tx=15|z=72000;txH|r=3|z=22000;d1|r=4|d=47|t=26|k=6|z=126500;d1|r=4|d=36|t=25|k=5.5|z=82500;r1|r=4|d=38|t=22|k=2|z=110000;d1|r=4|d=17|t=25|k=5|tp=165|1=Can mine Adamantite and Titanium|z=99000;d1|r=4|d=17|t=25|tp=165|1=Can mine Adamantite and Titanium|z=99000;d1|r=4|d=31|t=25|k=3.75|tx=18|z=99000;txH|r=3|z=37500;d1|r=4|d=52|t=26|k=6|z=161000;d1|r=4|d=40|t=23|k=6.2|z=105000;r1|r=4|d=41|t=19|k=2.5|z=140000;d1|r=4|d=27|t=25|k=5|tp=190|z=126000;d1|r=4|d=27|t=25|tp=190|z=126000;d1|r=4|d=34|t=25|k=4.6|tx=21|z=126000;41|r=4|D=14|1=8% increased melee damage|2=12% increased melee speed|z=75000;41|r=4|D=5|1=9% increased ranged damage|2=9% increased ranged critical strike chance|z=75000;41|r=4|D=3|1=7% increased magic damage and critical strike chance|2=Increases maximum mana by 60|z=75000;51|r=4|D=10|1=3% increased damage|2=2% increased critical strike chance|z=60000;61|r=4|D=8|1=2% increased damage|2=1% increased critical strike chance|z=45000;41|r=4|D=19|1=7% increased melee damage|2=7% increased movement and melee speed|z=112500;41|r=4|D=7|1=15% increased ranged critical strike chance|2=8% increased movement speed|z=112500;41|r=4|D=4|1=18% increased magic critical strike chance|2=Increases maximum mana by 80|z=112500;51|r=4|D=13|1=6% increased critical strike chance|z=90000;61|r=4|D=10|1=11% increased movement speed|z=67500;41|r=4|D=23|1=8% increased melee damage and critical strike chance|2=8% increased melee speed|z=150000;41|r=4|D=8|1=16% increased ranged damage|2=7% increased ranged critical strike chance|z=150000;41|r=4|D=4|1=16% increased magic damage and 7% increased magic critical strike chance|2=Increases maximum mana by 100|z=150000;51|r=4|D=15|1=4% increased damage|2=3% increased critical strike chance|z=120000;61|r=4|D=11|1=3% increased damage and critical strike chance|2=6% increased movement speed|z=90000;tH|r=3|1=Used to craft items from mythril, orichalcum, adamantite, and titanium bars|z=25000;tH|r=3|1=Used to smelt adamantite and titanium ore|z=50000;d1|r=4|d=36|t=35|k=5.5|tx=15|z=72000;d1|r=4|d=41|t=35|k=6.5|tx=18|z=99000;d1|r=4|d=44|t=35|k=7.5|tx=21|z=108000;txH|r=4|z=20000;d1|r=7|d=75|t=26|k=6|1=Shoots a powerful orb|z=276000;d1|r=7|d=48|t=16|k=4|1=Shoots a spore cloud|z=276000;d1|r=7|d=49|t=23|k=6.2|1=Shoots a spore cloud|z=180000;r1|r=7|d=34|t=19|k=2.75|z=240000;d1|r=7|d=40|t=25|k=5|tp=200|tr=1|z=216000;d1|r=7|d=35|t=25|k=1|tp=200|tr=1|z=216000;d1|r=7|d=50|t=25|k=4.6|tx=23|tr=1|z=216000;d1|r=7|d=70|t=30|k=7|tx=23|tr=1|z=216000;d1|r=7|d=80|t=35|k=8|th=90|tr=1|z=216000;rbK|r=7|d=16|k=3.5|1=Bounces back after hitting a wall|z=100;1|k=7|z=20000;1|k=7|z=20000;1|k=7|z=20000;1|k=7|z=20000;1|k=7|z=20000;1|k=7|z=20000;1|r=3|t=20|1=Summons a Baby Dinosaur|z=375000;4v1;m1|r=6|d=36|t=22|m=10|1=Summons a cloud to rain down on your foes|z=175000;tH|z=60;bxK;a1|r=4|1=Causes stars to fall and releases bees when injured|z=150000;ax1|r=7|1=10% increased critical strike chance|z=100000;ax1|r=2|1=Increases jump height|2=Releases bees when damaged|z=54000;a1|r=4|1=Allows the holder to double jump|2=Increases jump height and negates fall damage|z=45000;a1|r=4|1=Allows the holder to double jump|2=Increases jump height and negates fall damage|z=45000;a1|r=4|1=Allows the holder to double jump|2=Increases jump height and negates fall damage|z=45000;a1|r=5|1=Puts a shell around the owner when below 50% life that reduces damage|z=225000;r1|r=8|c=25|d=185|t=36|k=8|1=Shoots a powerful, high velocity bullet|2=Right Click to zoom out|z=100000;r1|r=7|d=38|t=8|k=5.5|1=Shoots a powerful, high velocity bullet|z=250000;m1|d=12|t=24|m=10|1=Summons a cloud to rain blood on your foes|z=10000;txH|z=20000;r1|r=7|d=45|t=22|k=5|1=Shoots an explosive bolt|z=350000;d1|r=7|d=65|t=40|k=7.5|1=Shoots razor sharp flower petals at nearby enemies|z=300000;m1|r=8|d=45|t=40|k=2.5|m=20|1=Shoots a rainbow that does continuous damage|z=350000;rbK|r=5|d=17|k=1|1=Explodes into deadly shrapnel|z=75;d1|r=7|d=45|t=25|k=5.2|th=90|tr=1|z=216000;tH|z=25000;m1|r=6|d=55|t=20|k=6.5|m=17|1=Shoots a ball of frost|z=10000;r1|r=7|d=30|t=9|k=3.5|1=Shoots a powerful, high velocity bullet|z=50000;m1|r=8|d=48|t=20|k=6|m=14|z=500000;wK|z=2500;wK|z=2500;wK|z=2500;wK|z=2500;wK|z=2500;wK|z=2500;1|r=2|z=45000;4v1;4v1|z=10000;4v1|z=10000;4v1;4v1;5v1;6v1;4v1;51|1=Increases maximum mana by 20|2=Reduces mana usage by 5%|z=25000;51|D=1|1=Increases maximum mana by 40|2=Reduces mana usage by 7%|z=50000;51|D=1|1=Increases maximum mana by 40|2=Reduces mana usage by 9%|z=75000;51|D=2|1=Increases maximum mana by 60|2=Reduces mana usage by 11%|z=100000;51|D=2|1=Increases maximum mana by 60|2=Reduces mana usage by 13%|z=125000;51|r=2|D=3|1=Increases maximum mana by 80|2=Reduces mana usage by 15%|z=150000;5v1|z=250000;6v1|z=250000;ax1|1=Increases movement speed after being struck|z=50000;cH|r=7|t=30|1=Permanently increases maximum life by 5|z=100000;tH|z=300;cH|1=Used at the Lihzahrd Altar|z=50000;d1|r=7|d=34|t=16|k=5.5|tp=210|tx=25|tr=1|1=Capable of mining Lihzahrd Bricks|z=216000;m1|r=7|d=55|t=16|k=3|m=8|1=Shoots a piercing ray of heat|2=Oolaa!!|z=350000;m1|r=7|d=73|t=40|k=7.5|m=15|1=Summons a powerful boulder|z=500000;d1|r=7|d=76|t=24|k=12|1=Punches with the force of a golem|z=250000;txH|z=500;1|r=4|1=Increases view range when held|z=150000;ax1|r=4|1=Increases view range for guns|2=Right Click to zoom out|z=150000;ax1|r=7|1=10% increased damage|2=8% increased critical strike chance|z=300000;rbK|r=3|d=10|k=4|z=40;ax1|r=2|1=Provides light under water|z=50000;d1|d=12|t=23|k=4.25|z=2000;d1|r=8|d=72|t=23|k=7.25|tx=35|th=100|tr=1|z=500000;d1|r=5|d=42|t=25|k=5.5|1=Shoots an icy sickle|z=250000;a1|1=You are a terrible person|z=1000;mx1|r=6|d=48|t=36|k=5.6|m=22|1=Shoots a poison fang that pierces multiple enemies|z=200000;s1|r=4|d=8|t=28|k=2|m=10|1=Summons a baby slime to fight for you|z=100000;rbK|r=2|d=10|k=2|1=Inflicts poison on enemies;1|r=6|t=20|1=Summons an eyeball spring|z=150000;1|r=6|t=20|1=Summons a baby snowman|z=125000;m1|r=2|d=29|t=26|k=3.5|m=18|1=Shoots a skull|z=50000;d1|r=4|d=40|t=28|k=6.5|1=Shoots a boxing glove|z=27000;c1|t=45|1=Summons a pirate invasion;4x1|r=8|D=21|1=6% increased melee damage|2=Enemies are more likely to target you|z=300000;5x1|r=8|D=27|1=8% increased melee damage and critical strike chance|2=Enemies are more likely to target you|z=240000;6x1|r=8|D=17|1=4% increased melee critical strike chance|2=Enemies are more likely to target you|z=180000;r1|d=10|t=19|k=1|z=100000;d1|d=8|t=19|k=3|tp=50|z=15000;a1|r=4|1=Increases damage by 10% and greatly increases arrow speed|2=20% chance to not consume arrows|z=250000;ax1|r=3|1=Inflicts fire damage on attack|z=100000;a1|r=3|1=Reduces damage from touching lava|z=100000;d|s=10|r=5|d=55|t=14|k=6.5|z=75000;d1|r=2|d=11|t=20|k=3.5|z=1000;1|r=7|t=20|1=Teleports you to the position of the mouse|z=500000;d1|r=6|d=57|t=25|k=7|1=Shoots a deathly sickle|z=250000;xH|r=7|z=5000;xH|z=750;xH|z=12;c|s=20|t=45|1=Summons the Brain of Cthulhu;xH|r=3|1=The blood of gods|z=4500;txH|1=Can be placed in water|z=330;rbK|r=3|d=16|k=3|1=Decreases targets defense|z=80;rbK|r=3|d=13|k=4|1=Decreases targets defense|z=30;m1|r=4|d=21|t=18|k=4|m=7|1=Sprays a shower of ichor|2=Decreases targets defense|z=500000;tK|z=500000;cK|d=350|t=20|1=For use with bunny cannon|z=3500;xH|1=Extremely toxic|z=1000;c|s=30|r=4|t=17|1=Melee attacks inflict Venom on enemies|z=2500;rbK|r=3|d=17|k=4.2|1=Inflicts target with Venom|z=90;rbK|r=3|d=14|k=4.1|1=Inflicts target with Venom|z=40;a1|r=7|1=Increases melee knockback and inflicts fire damage on attack|2=10% increased melee damage and speed|z=300000;txK|z=700;cxH|t=20|z=100;xH|z=1000;xH|z=1200;xH|z=1700;rbK|r=3|d=10|k=5|1=Explodes into confetti on impact|z=40;rbK|r=3|d=10|k=3.6|1=Causes confusion|z=40;rbK|r=3|d=10|k=6.6|1=Explodes on impact|z=40;rbK|r=3|d=10|k=3.6|1=Enemies killed will drop more money|z=40;c|s=30|r=4|t=17|1=Melee attacks inflict enemies with cursed flames|z=2500;c|s=30|r=4|t=17|1=Melee attacks set enemies on fire|z=2500;c|s=30|r=4|t=17|1=Melee attacks make enemies drop more gold|z=2500;c|s=30|r=4|t=17|1=Melee attacks decrease enemies defense|z=2500;c|s=30|r=4|t=17|1=Melee attacks confuse enemies|z=2500;c|s=30|r=4|t=17|1=Melee attacks cause confetti to appear|z=2500;c|s=30|r=4|t=17|1=Melee attacks poison enemies|z=2500;tH|z=50000;tH|z=50000;tH|z=50000;tH|z=50000;tH|z=50000;tH|z=50000;tH|z=50000;tH|z=50000;tH|z=50000;tH|z=50000;tH|z=50000;tH|z=50000;tH|1=W. Garner|z=5000;tH|1=W. Garner|z=5000;tH|1=W. Garner|z=5000;tH|1=W. Garner|z=5000;tH;tH;wK;wK;wK;wK;wK;wK;tK;tK;tK;tK;tK;tK;tK;tK;tK;tK;tK;tK;tH;tH|z=300;tH|z=150;tH;tH|z=300;tH|z=150;tH;tH|z=300;tH|z=150;tH;tH;tH;tH|z=300;tH|z=300;tH|z=300;tH|z=200;tH|z=200;tH|z=200;tH|z=300;tH|z=300;tH|z=300;tH;tK;tH|1=W. Garner|z=5000;tH|1=W. Garner|z=5000;tH|1=W. Garner|z=5000;tH|1=R. Moosdijk|z=5000;tH|1=R. Moosdijk|z=5000;tH|1=V. Costa Moura|z=5000;tH|1=W. Garner|z=5000;tH|1=W. Garner|z=5000;tH|1=W. Garner|z=5000;tH|1=W. Garner|z=5000;4v1|z=10000;tH|r=2|1=Used to craft weapon imbuement flasks|z=70000;tK;xK|1=Used to craft various types of ammo|z=3;tH|1=K. Wright|z=5000;tH|1=C. J. Ness|z=5000;tH|1=R. Moosdijk|z=5000;tH|1=V. Costa Moura|z=5000;tH|1=V. Costa Moura|z=5000;tH|1=V. Costa Moura|z=5000;tH|1=V. Costa Moura|z=5000;tH|1=V. Costa Moura|z=5000;tH|1=A. G. Kolf|z=5000;tH|1=V. Costa Moura|z=5000;tH|1=W. Garner|z=5000;m1|r=8|d=53|t=16|k=3.25|m=7|1=Creates a shadow beam that bounces off walls|z=300000;m1|r=8|d=65|t=30|k=8|m=18|1=Launches a ball of fire that explodes into a raging inferno|z=300000;m1|r=8|d=72|t=24|k=6|m=11|1=Summons a lost soul to chase your foes|z=300000;wxK;wxK;tH|1=Blows bubbles|z=40000;1|t=25|1=Blows bubbles|z=50000;tH|z=1000;tH|z=1000;tH|z=1000;tH|z=1000;tH|z=1000;tH|z=1000;txK;tH|z=200;tH;tH|z=300;tH|z=150;tH|z=300;tH|z=300;tH|z=1000;tH|z=1000;tH|z=1000;tH|z=1000;tH|z=1000;tH|z=1000;tH|z=2000;tH|z=2000;tH|z=2000;tH|z=2000;tH|z=5000;tH|z=5000;tH|1=J. T. Myhre|z=5000;tH|1=J. T. Myhre|z=5000;tH|1=J. T. Myhre|z=5000;tH|1=J. T. Myhre|z=5000;tH|1=J. T. Myhre|z=5000;tH|1=V. Costa Moura|z=10000;tH|1=V. Costa Moura|z=10000;tH|1=V. Costa Moura|z=10000;tH|1=V. Costa Moura|z=10000;tH|1=V. Costa Moura|z=10000;tH|1=V. Costa Moura|z=10000;tH|1=V. Costa Moura|z=10000;tH|1=V. Costa Moura|z=10000;tH|1=V. Costa Moura|z=10000;tH|1=V. Costa Moura|z=10000;tH|1=V. Costa Moura|z=10000;tH|1=V. Costa Moura|z=10000;tH|1=V. Costa Moura|z=10000;tH|1=V. Costa Moura|z=10000;tH|1=A. G. Kolf|z=5000;tH|1=J. T. Myhre|z=5000;tH|1=J. T. Myhre|z=5000;tH|1=J. T. Myhre|z=5000;tH|1=J. T. Myhre|z=5000;tH|1=A. G. Kolf|z=5000;tH|1=W. Garner|z=5000;tH|1=C. Burczyk|z=5000;41|r=8|D=6|1=40% decreased magic damage|z=375000;51|r=8|D=14|1=7% increased magic damage and critical strike chance|z=300000;61|r=8|D=10|1=8% increased magic damage|2=8% increased movement speed|z=225000;d1|r=8|d=32|t=24|k=5.25|tp=200|tr=3|z=216000;d1|r=8|d=60|t=28|k=7|tx=30|th=90|tr=3|z=216000;xH|r=8|z=25000;tH;tH|z=300;tH|z=150;tH|z=300;d1|r=8|d=90|t=15|k=9|1=A powerful returning hammer|z=500000;4v1|z=50000;a1|r=5|1=Allows flight and slow fall|z=400000;xH|r=5|z=125000;xH|r=5|z=125000;xH|r=5|z=125000;xH|r=5|z=125000;xH|r=5|z=125000;xH|r=5|z=125000;1|1=For Capture the Gem. It drops when you die;1|1=For Capture the Gem. It drops when you die;1|1=For Capture the Gem. It drops when you die;1|1=For Capture the Gem. It drops when you die;1|1=For Capture the Gem. It drops when you die;1|1=For Capture the Gem. It drops when you die;txH|z=2500;txH|z=2500;txH|z=2500;txH|z=2500;txH|z=2500;H|r=8|1=Unlocks a Jungle Chest in the dungeon;H|r=8|1=Unlocks a Corruption Chest in the dungeon;H|r=8|1=Unlocks a Crimson Chest in the dungeon;H|r=8|1=Unlocks a Hallowed Chest in the dungeon;H|r=8|1=Unlocks a Frozen Chest in the dungeon;tH|1=J. T. Myhre|z=5000;tH|1=A. Craig|z=5000;tH|1=A. Craig|z=5000;tH|1=A. Craig|z=5000;tH|1=A. Craig|z=5000;1|t=15|tr=3|1=Used with paint to color blocks|z=10000;1|t=15|tr=3|1=Used with paint to color walls|z=10000;1|t=15|tr=3|1=Used to remove paint|z=10000;41|r=8|D=11|1=15% increased arrow damage|2=5% increased ranged critical strike chance|z=375000;41|r=8|D=11|1=15% increased bullet damage|2=5% increased ranged critical strike chance|z=375000;41|r=8|D=11|1=15% increased rocket damage|2=5% increased ranged critical strike chance|z=375000;51|r=8|D=24|1=13% increased ranged critical strike chance|2=20% chance to not consume ammo|z=300000;61|r=8|D=16|1=7% increased ranged critical strike chance|2=12% increased movement speed|z=225000;tH|1=Converts Chlorophyte Bars into Shroomite Bars|z=1000000;txH|r=7|z=50000;r1|r=10|c=10|d=77|t=5|k=2.5|1=50% chance to not consume ammo|2=It came from the edge of space|z=750000;4v1|r=9|1=Great for impersonating devs!;5v1|r=9|1=Great for impersonating devs!;6v1|r=9|1=Great for impersonating devs!;4v1|r=9|1=Great for impersonating devs!;5v1|r=9|1=Great for impersonating devs!;6v1|r=9|1=Great for impersonating devs!;4v1|r=9|1=Great for impersonating devs!;5v1|r=9|1=Great for impersonating devs!;6v1|r=9|1=Great for impersonating devs!;4v1|r=9|1=Great for impersonating devs!;5v1|r=9|1=Great for impersonating devs!;6v1|r=9|1=Great for impersonating devs!;4v1|r=9|1=Great for impersonating devs!;5v1|r=9|1=Great for impersonating devs!;6v1|r=9|1=Great for impersonating devs!;d1|r=8|d=29|t=16|k=2.75|1=Rapidly throw life stealing daggers|z=1000000;xH|r=8|z=100000;d1|r=8|d=64|t=20|k=5|1=A powerful javelin that unleashes tiny eaters|z=1000000;s1|r=8|d=100|t=30|k=7.5|m=20|1=Summons a powerful frost hydra to spit ice at your enemies|z=1000000;tH|1=W. Garner|z=5000;tH|1=W. Garner|z=5000;tH|1=W. Garner|z=5000;tH|1=D. Phelps|z=5000;tH|1=M. J. Duncan|z=5000;a1|r=3|1=Releases bees and increases movement speed when damaged|z=100000;ax1|1=The wearer can run super fast|z=50000;4v1|r=9|1=Great for impersonating devs!;5v1|r=9|1=Great for impersonating devs!;6v1|r=9|1=Great for impersonating devs!;a1|r=9|1=Great for impersonating devs!|z=400000;a1|r=9|1=Great for impersonating devs!|z=400000;a1|r=9|1=Great for impersonating devs!|z=400000;a1|r=9|1=Great for impersonating devs!|z=400000;5v1|r=9|1=Great for impersonating devs!;6v1|r=9|1=Great for impersonating devs!;txK;wxK;txK;wxK;txK;wxK;ax1|r=2|1=Increases maximum mana by 20|2=Restores mana when damaged|z=100000;at1|r=4|z=100000;at1|r=4|z=100000;at1|r=4|z=100000;at1|r=4|z=100000;at1|r=4|z=100000;at1|r=4|z=100000;at1|r=4|z=100000;at1|r=4|z=100000;at1|r=4|z=100000;at1|r=4|z=100000;at1|r=4|z=100000;at1|r=4|z=100000;at1|r=4|z=100000;at1|r=4|z=100000;at1|r=4|z=100000;xH|r=5|z=125000;ax1|r=6|1=Grants immunity to most debuffs|z=150000;a1|r=7|D=4|1=Grants immunity to knockback and fire blocks|2=Grants immunity to most debuffs|z=250000;rbK|d=1|k=1.5|z=7;tH|1=Nearby players get a bonus against: Angler Fish|z=1000;tH|1=Nearby players get a bonus against: Angry Nimbus|z=1000;tH|1=Nearby players get a bonus against: Anomura Fungus|z=1000;tH|1=Nearby players get a bonus against: Antlion|z=1000;tH|1=Nearby players get a bonus against: Arapaima|z=1000;tH|1=Nearby players get a bonus against: Armored Skeleton|z=1000;tH|1=Nearby players get a bonus against: Cave Bat|z=1000;tH|1=Nearby players get a bonus against: Bird|z=1000;tH|1=Nearby players get a bonus against: Black Recluse|z=1000;tH|1=Nearby players get a bonus against: Blood Feeder|z=1000;tH|1=Nearby players get a bonus against: Blood Jelly|z=1000;tH|1=Nearby players get a bonus against: Blood Crawler|z=1000;tH|1=Nearby players get a bonus against: Bone Serpent|z=1000;tH|1=Nearby players get a bonus against: Bunny|z=1000;tH|1=Nearby players get a bonus against: Chaos Elemental|z=1000;tH|1=Nearby players get a bonus against: Mimic|z=1000;tH|1=Nearby players get a bonus against: Clown|z=1000;tH|1=Nearby players get a bonus against: Corrupt Bunny|z=1000;tH|1=Nearby players get a bonus against: Corrupt Goldfish|z=1000;tH|1=Nearby players get a bonus against: Crab|z=1000;tH|1=Nearby players get a bonus against: Crimera|z=1000;tH|1=Nearby players get a bonus against: Crimson Axe|z=1000;tH|1=Nearby players get a bonus against: Cursed Hammer|z=1000;tH|1=Nearby players get a bonus against: Demon|z=1000;tH|1=Nearby players get a bonus against: Demon Eye|z=1000;tH|1=Nearby players get a bonus against: Derpling|z=1000;tH|1=Nearby players get a bonus against: Eater of Souls|z=1000;tH|1=Nearby players get a bonus against: Enchanted Sword|z=1000;tH|1=Nearby players get a bonus against: Zombie Eskimo|z=1000;tH|1=Nearby players get a bonus against: Face Monster|z=1000;tH|1=Nearby players get a bonus against: Floaty Gross|z=1000;tH|1=Nearby players get a bonus against: Flying Fish|z=1000;tH|1=Nearby players get a bonus against: Flying Snake|z=1000;tH|1=Nearby players get a bonus against: Frankenstein|z=1000;tH|1=Nearby players get a bonus against: Fungi Bulb|z=1000;tH|1=Nearby players get a bonus against: Fungo Fish|z=1000;tH|1=Nearby players get a bonus against: Gastropod|z=1000;tH|1=Nearby players get a bonus against: Goblin Thief|z=1000;tH|1=Nearby players get a bonus against: Goblin Sorcerer|z=1000;tH|1=Nearby players get a bonus against: Goblin Peon|z=1000;tH|1=Nearby players get a bonus against: Goblin Scout|z=1000;tH|1=Nearby players get a bonus against: Goblin Warrior|z=1000;tH|1=Nearby players get a bonus against: Goldfish|z=1000;tH|1=Nearby players get a bonus against: Harpy|z=1000;tH|1=Nearby players get a bonus against: Hellbat|z=1000;tH|1=Nearby players get a bonus against: Herpling|z=1000;tH|1=Nearby players get a bonus against: Hornet|z=1000;tH|1=Nearby players get a bonus against: Ice Elemental|z=1000;tH|1=Nearby players get a bonus against: Icy Merman|z=1000;tH|1=Nearby players get a bonus against: Fire Imp|z=1000;tH|1=Nearby players get a bonus against: Blue Jellyfish|z=1000;tH|1=Nearby players get a bonus against: Jungle Creeper|z=1000;tH|1=Nearby players get a bonus against: Lihzahrd|z=1000;tH|1=Nearby players get a bonus against: Man Eater|z=1000;tH|1=Nearby players get a bonus against: Meteor Head|z=1000;tH|1=Nearby players get a bonus against: Moth|z=1000;tH|1=Nearby players get a bonus against: Mummy|z=1000;tH|1=Nearby players get a bonus against: Mushi Ladybug|z=1000;tH|1=Nearby players get a bonus against: Parrot|z=1000;tH|1=Nearby players get a bonus against: Pigron|z=1000;tH|1=Nearby players get a bonus against: Piranha|z=1000;tH|1=Nearby players get a bonus against: Pirate Deckhand|z=1000;tH|1=Nearby players get a bonus against: Pixie|z=1000;tH|1=Nearby players get a bonus against: Raincoat Zombie|z=1000;tH|1=Nearby players get a bonus against: Reaper|z=1000;tH|1=Nearby players get a bonus against: Shark|z=1000;tH|1=Nearby players get a bonus against: Skeleton|z=1000;tH|1=Nearby players get a bonus against: Dark Caster|z=1000;tH|1=Nearby players get a bonus against: Blue Slime|z=1000;tH|1=Nearby players get a bonus against: Snow Flinx|z=1000;tH|1=Nearby players get a bonus against: Wall Creeper|z=1000;tH|1=Nearby players get a bonus against: Spore Zombie|z=1000;tH|1=Nearby players get a bonus against: Swamp Thing|z=1000;tH|1=Nearby players get a bonus against: Giant Tortoise|z=1000;tH|1=Nearby players get a bonus against: Toxic Sludge|z=1000;tH|1=Nearby players get a bonus against: Umbrella Slime|z=1000;tH|1=Nearby players get a bonus against: Unicorn|z=1000;tH|1=Nearby players get a bonus against: Vampire|z=1000;tH|1=Nearby players get a bonus against: Vulture|z=1000;tH|1=Nearby players get a bonus against: Nymph|z=1000;tH|1=Nearby players get a bonus against: Werewolf|z=1000;tH|1=Nearby players get a bonus against: Wolf|z=1000;tH|1=Nearby players get a bonus against: World Feeder|z=1000;tH|1=Nearby players get a bonus against: Giant Worm|z=1000;tH|1=Nearby players get a bonus against: Wraith|z=1000;tH|1=Nearby players get a bonus against: Wyvern|z=1000;tH|1=Nearby players get a bonus against: Zombie|z=1000;txK;tH;tH|z=100000;tH|z=100000;tH;tH;tH;tH|z=200;tH|z=100000;tH|z=200;tH|z=200;tH|z=300;tH|z=300;tH|z=300;tH|z=100000;tH|z=300;tH|z=300;tH|z=2000;tH|z=100000;tH|z=2000;tH|z=2000;wxK;ax1|r=2|1=Allows the holder to double jump|z=75000;txK|z=125;wxK;txK;wxK;txK;wxK;41|D=2;51|D=3;61|D=2;1;1;4v1|z=30000;5v1|z=30000;6v1|z=30000;4v1|z=30000;4v1|z=30000;5v1|z=30000;4v1|z=30000;4v1|z=30000;5v1|z=30000;6v1|z=30000;4v1|z=30000;5v1|z=30000;6v1|z=30000;4v1|z=30000;5v1|z=30000;6v1|z=30000;4v1|z=30000;5v1|z=30000;4v1|z=30000;5v1|z=30000;6v1|z=30000;4v1|z=30000;5v1|z=30000;6v1|z=30000;4v1|z=30000;5v1|z=30000;6v1|z=30000;4v1|z=30000;5v1|z=30000;6v1|z=30000;4v1|z=30000;4v1|1=To me it look like a leprechaun to me|z=30000;5v1|1=I just wanna know where the gold at!|z=30000;6v1|1=I want the gold. I want the gold. I want the gold. Gimme the gold!|z=30000;5v1|z=30000;6v1|z=30000;4v1|z=30000;5v1|z=30000;H|r=3|1=Right Click to open|z=50000;5v1|z=30000;6v1|z=30000;4v1|z=30000;5v1|z=30000;4v1|z=30000;5v1|z=30000;6v1|z=30000;r1|r=8|c=6|d=44|t=9|k=2|1=33% chance to not consume ammo|z=750000;rbK|d=9|k=1.5|z=5;r1|r=8|c=6|d=65|t=30|k=5|z=750000;rbK|d=30|k=3|z=15;d1|d=9|t=24|k=2.25|1=Allows the collection of hay from grass|z=6000;c|s=30|t=17|1=Minor improvements to all stats|z=1000;4v1|z=30000;5v1|z=30000;6v1|z=30000;tH|z=15000;tH;tH|z=200;tH|z=300;tH|z=150;txK;a1|r=7|1=Allows flight and slow fall|z=400000;1|r=3|t=20|1=Summons a pet spider|z=100000;1|r=3|t=20|1=Summons a pet squashling|z=100000;1|r=3|k=7|z=100000;m1|r=8|d=45|t=12|k=3|m=3|1=Summons bats to attack your enemies|z=500000;s1|r=8|d=37|t=28|k=3|m=10|1=Summons a raven to fight for you|z=100000;H|r=8|1=Unlocks a Jungle Chest in the dungeon;H|r=8|1=Unlocks a Corruption Chest in the dungeon;H|r=8|1=Unlocks a Crimson Chest in the dungeon;H|r=8|1=Unlocks a Hallowed Chest in the dungeon;H|r=8|1=Unlocks a Frozen Chest in the dungeon;tK;cK|d=13|t=19|k=6.5|1=Best used for pranking townsfolk;1|r=3|t=20|1=Summons a black kitty|z=100000;xH|r=5|z=125000;tH;tH;tH;tH|z=200;tH|z=300;tH|z=150;txK;4v1|z=30000;5v1|z=30000;4v1|z=30000;5v1|z=30000;6v1|z=30000;4v1|z=30000;d1|r=2|d=15|t=15|k=5|z=50000;d1|r=8|d=75|t=26|k=7.5|1=Summons Pumpkin heads to attack your enemies|z=500000;d1|r=2|d=12|t=8|k=4|z=50000;tH|z=250;1|r=7|k=7|z=200000;a1|r=7|1=Allows flight and slow fall|z=400000;xH|r=5|z=125000;41|r=8|D=8|1=Increases your max number of minions|2=Increases minion damage by 11%|z=50000;51|r=8|D=10|1=Increases your max number of minions|2=Increases minion damage by 11%|z=50000;61|r=8|D=9|1=Increases your max number of minions|2=Increases minion damage by 11%|z=50000;r1|r=8|c=10|d=75|t=26|k=6.5|z=750000;rbK|d=25|k=4.5|z=15;1|r=3|t=20|1=Summons a cursed sapling to follow you|z=100000;4v1|z=30000;5v1|z=30000;6v1|z=30000;4v1|z=30000;5v1|z=30000;6v1|z=30000;c|s=20|r=8|t=45|1=Summons the Pumpkin Moon;ax1|r=8|1=Increases your max number of minions|2=Increases minion damage by 10%|z=200000;tH|1=V. Costa Moura|z=5000;tH|1=J. Hayes|z=5000;tH|1=J. Hayes|z=5000;tH|1=J. Hayes|z=5000;tH|1=J. Hayes|z=5000;5v1|z=30000;6v1|z=30000;5v1|z=30000;6v1|z=30000;tH|z=50000;tH|z=50000;4v1|r=3|z=250000;a1|r=7|1=Increases view range for guns (Right Click to zoom out)|2=10% increased ranged damage and critical strike chance|z=300000;tK;ax1|r=5|1=Grants the ability to swim and greatly extends underwater breathing|2=Provides light under water|z=150000;a1|r=6|1=Grants the ability to swim and greatly extends underwater breathing|2=Provides light under water and extra mobility on ice|z=250000;a1|r=7|1=Allows flight, super fast running, and extra mobility on ice|2=7% increased movement speed|z=350000;ax1|r=4|1=Allows the holder to double jump|2=Increases jump height|z=150000;a1|r=8|1=Increases your max number of minions|2=Increases the damage and knockback of your minions|z=250000;ax1|r=7|1=Minor increase to damage, melee speed, critical strike chance,|2=life regeneration, defense, pick speed, and minion knockback|z=400000;a1|r=5|1=Allows flight and slow fall|2=Hold DOWN and JUMP to hover|z=400000;1;1;tK|1=Right Click to open;r1|d=20|t=38|k=3.75|1=Dont shoot your eye out!|z=100000;a1|r=5|1=Allows flight and slow fall|z=400000;txK;tK|z=2500;cK|t=15|1=Placeable on a christmas tree|z=500;cK|t=15|1=Placeable on a christmas tree|z=500;cK|t=15|1=Placeable on a christmas tree|z=500;cK|t=15|1=Placeable on a christmas tree|z=500;cK|t=15|1=Placeable on a christmas tree|z=500;cK|t=15|1=Placeable on a christmas tree|z=500;cK|t=15|1=Placeable on a christmas tree|z=500;cK|t=15|1=Placeable on a christmas tree|z=500;cK|t=15|1=Placeable on a christmas tree|z=500;cK|t=15|1=Placeable on a christmas tree|z=500;cK|t=15|1=Placeable on a christmas tree|z=500;cK|t=15|1=Placeable on a christmas tree|z=500;cK|t=15|1=Placeable on a christmas tree|z=500;cK|t=15|1=Placeable on a christmas tree|z=500;cK|t=15|1=Placeable on a christmas tree|z=500;cK|t=15|1=Placeable on a christmas tree|z=500;cK|t=15|1=Placeable on a christmas tree|z=500;cK|t=15|1=Placeable on a christmas tree|z=500;cK|t=15|1=Placeable on a christmas tree|z=500;cK|t=15|1=Placeable on a christmas tree|z=500;cK|t=15|1=Placeable on a christmas tree|z=500;cK|t=15|1=Placeable on a christmas tree|z=500;cK|t=15|1=Placeable on a christmas tree|z=500;cK|t=15|1=Placeable on a christmas tree|z=500;cK|t=15|1=Placeable on a christmas tree|z=500;cK|t=15|1=Placeable on a christmas tree|z=500;cK|t=15|1=Placeable on a christmas tree|z=500;cK|t=15|1=Placeable on a christmas tree|z=500;cK|t=15|1=Placeable on a christmas tree|z=500;cK|t=15|1=Placeable on a christmas tree|z=500;cK|t=15|1=Placeable on a christmas tree|z=500;cK|t=15|1=Placeable on a christmas tree|z=500;4v1|z=10000;4v1|z=10000;tH|z=5000;d1|d=16|t=27|k=5.3|z=13500;r1|r=8|d=40|t=30|k=0.425|1=Uses gel for ammo|z=500000;c|s=30|t=17|1=Minor improvements to all stats|z=1000;c|s=30|hl=80|t=17|z=40;cK|d=14|t=15|z=25;1|r=8|t=20|1=Summons a rideable reindeer|z=250000;1|r=7|k=7|z=200000;1|r=7|k=7|z=200000;d1|d=7|t=20|k=2.5|tp=55|1=Can mine Meteorite|z=10000;d1|d=14|t=15|k=8|z=50000;c|s=30|t=17|1=Minor improvements to all stats|z=1000;c|s=30|t=17|1=Minor improvements to all stats|z=1000;a1|r=2|1=Provides immunity to chill and freezing effects|z=50000;1|1=Youve been naughty this year;a1|r=2|1=Increases item placement and tool range by 1|z=50000;tH|z=200;tH;tH|z=300;1|r=3|t=20|1=Summons a Puppy;d1|r=8|d=86|t=23|k=7|1=Shoots Christmas ornaments|z=500000;r1|r=8|d=31|t=4|k=1.75|1=50% chance to not consume ammo|z=250000;m1|r=8|d=48|t=8|k=3.25|m=5|1=Shoots razor sharp pine needles|z=250000;m1|r=8|d=58|k=4.5|m=9|1=Showers an area with icicles|z=250000;4v1|z=30000;5v1|z=30000;6v1|z=30000;4v1|z=30000;5v1|z=30000;6v1|z=30000;4v1|z=30000;5v1|z=30000;4v1|z=30000;5v1|z=30000;6v1|z=30000;4v1|z=30000;5v1|z=30000;6v1|z=30000;r1|r=8|d=67|t=15|k=4|1=Launches homing missiles|z=1000000;d1|r=7|d=73|t=25|k=6.7|1=Shoots an icy spear that rains snowflakes|z=180000;wK|z=100;wK|z=100;wK|z=100;wK|z=100;wK|z=100;wK|z=100;wK|z=100;wK|z=100;wK|z=100;wK|z=100;c|s=20|r=8|t=45|1=Summons the Frost Moon;1|r=3|t=20|1=Summons a Baby Grinch;tH|z=50000;tH|z=50000;tH|z=50000;at1|r=4|z=100000;at1|r=4|z=100000;at1|r=4|z=100000;K|z=25;K|z=50;K|z=75;H|z=10000;txK;txK;txK;txK;txK;txK;txK;cH|r=2|t=17|z=50000;cH|r=2|t=17|z=50000;cH|r=2|t=17|z=50000;cH|r=2|t=17|z=100000;cH|r=2|t=17|z=50000;cH|r=2|t=17|z=50000;cH|r=2|t=17|z=50000;cH|r=2|t=17|z=75000;cH|r=2|t=17|z=150000;cH|r=2|t=17|z=50000;av1|r=5|z=400000;4v1|1=Fezzes are cool|z=35000;tK;cH|r=2|t=17|z=20000;1|t=25|z=2500;cxK|t=15|z=1500;tK;cxK|t=15|z=2500;cxK|r=2|t=15|z=37500;cxK|r=2|t=15|z=20000;cxK|t=15|z=10000;cxK|t=15|z=5000;cxK|r=3|t=15|z=50000;cxK|t=15|z=7500;cxK|t=15|z=15000;cxK|t=15|z=2500;cxK|t=15|z=10000;cxK|r=2|t=15|z=2500;tK;cxK|t=15|z=10000;cxK|t=15|z=25000;wK|z=100;wK|z=100;wK|z=100;wK|z=100;wK|z=100;wK|z=100;wK|z=100;cxK|t=15|z=2500;cxK|t=15|z=3750;cxK|t=15|z=3750;cxK|t=15|z=2500;cxK|t=15|z=2500;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tK;tK;tK;tK;tK;tK;tK;tK;tK;tK;tK;tK;tH|z=200;tH;tH;tH;tH;tH;tH;tH;tH;tH;tH;tH|z=3000;tH|z=3000;tH|z=3000;tH|z=3000;tH|z=3000;tH|z=3000;tH|z=3000;tH|z=3000;tH|z=3000;tH|z=3000;tH|z=3000;tH|z=2000;tH|z=2000;tH|z=2000;tH|z=2000;tH|z=2000;tH|z=2000;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=500;tH|z=500;tH|z=500;tH|z=500;tH|z=500;tH|z=500;tH|z=500;tH|z=500;tH|z=500;tH|z=500;tH|z=1500;tH|z=1500;tH|z=1500;tH|z=1500;tH|z=1500;tH|z=1500;tH|z=1500;tH|z=1500;tH|z=1500;tH|z=1500;tH|z=1500;tH|z=1500;4v1;4v1;4v1;4v1;4v1;4v1;4v1;4v1;4v1;4v1;tH|z=2500;tH|z=2500;tH|z=2500;tH|z=2500;tH|z=2500;txK;tK;cxK|t=15|z=7500;cxK|t=15|z=3750;cxK|t=15|z=3750;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=500;tH|z=500;tH|z=500;tH|z=500;tH|z=100000;tH|z=500;tH|z=300;tH|z=300;tH|z=100000;tH|z=300;tH|z=2000;tH|z=2000;tH|z=3000;tH|z=3000;tH|z=100000;tH|z=3000;tK;tK;tK|z=100000;tK;tH|z=1500;tH|z=1500;tH|z=100000;tH|z=1500;tH;tH;tH|z=100000;cxK|t=15|z=7500;cxK|t=15|z=7500;wK|z=100;wK|z=100;wK|z=100;xK|r=5|z=50000;tH;tH;tH;tH;tH;tH;tH;wxK;wxK;txH|z=500;tH|1=Used for advanced crafting|z=500;txK;tH;tH;d1|r=8|d=45|t=12|k=6|tp=200|tx=25|z=50000;tK|r=6|1=Reduces ammo usage by 20%|z=150000;tH;tH;tH;tH;tH;tH;tH;tH;tH;tH;m1|r=7|d=63|t=30|k=7|m=25|1=Shoots a venom fang that pierces multiple enemies|z=350000;41|r=8|D=18|1=Increases maximum mana by 60 and reduces mana usage by 13%|2=5% increased magic damage and critical strike chance|z=375000;tH;tH;tH|1=Used for special crafting|z=100000;tH|1=Used for special crafting|z=100000;tH|1=Used for special crafting|z=100000;tH|1=Used for special crafting|z=100000;tH|1=Used for special crafting|z=100000;tH|1=Used for special crafting|z=100000;tH|1=Used for special crafting|z=100000;41|r=8|D=23|1=6% increased melee damage|2=Enemies are more likely to target you|z=300000;51|r=8|D=20|1=8% increased melee damage and critical strike chance|2=6% increased movement and melee speed|z=240000;51|r=8|D=32|1=5% increased melee damage and critical strike chance|2=Enemies are more likely to target you|z=240000;61|r=8|D=18|1=6% increased movement and melee speed|2=Enemies are more likely to target you|z=180000;tH|1=Used for special crafting|z=100000;tH|1=Used for special crafting|z=100000;cxK|t=15|z=6250;tH;tH;xH;cH|r=4|hm=300|t=17|z=1500;wxK;wxK;wxK;wxK;ax1|r=3|1=Increases tile placement speed|z=100000;ax1|r=3|1=Increases tile reach|z=100000;ax1|r=3|1=Automatically paints placed objects|z=100000;ax1|r=3|1=Increases wall placement speed|z=100000;xH|r=8|z=25000;ax1|r=4|1=Increases pickup range for mana stars|z=150000;a1|r=5|1=Increases pickup range for mana stars|2=15% increased magic damage|z=160000;a1|r=5|1=Increases pickup range for mana stars|2=Restores mana when damaged|z=160000;4v1|z=12500;r1|r=8|c=7|d=65|t=22|k=3|1=Shoots a charged arrow|z=450000;tH|z=3000;tH|z=500;tK;tH|z=1500;tH;tH|z=150;txH|z=2500;tH|z=2000;tH|z=300;tH|z=300;tH|z=20;tH|z=20;tH;tH|z=300;tH|z=100000;tH|z=300;tH|z=300;tH|z=300;tH|z=2000;tH|z=20;tH|z=20;tH|z=300;tH|z=300;tH|z=300;tH|z=300;txH|z=2500;txH|z=2500;tH|z=150;tH|z=150;tH|z=150;tH|z=300;tH|z=300;tH|z=300;tH|z=20;tH|z=5000;tH|z=300;txK|z=50;tK|z=50;tK|z=50;wxK;wxK;tH|z=200;c|s=30|t=17|z=500;c|s=30|t=17|1=Minor improvements to all stats|z=2000;c|s=30|t=17|1=Minor improvements to all stats|z=3000;r1|r=2|c=5|d=20|t=22|k=4|z=100000;r1|r=4|d=21|t=7|k=1.5|1=50% chance to not consume ammo|2=Highly inaccurate|z=350000;wK|z=250;1|t=20|1=Squirts a harmless stream of water|z=15000;d1|c=15|d=16|t=22|k=3.5|z=40000;txH|z=300;41|r=2|D=2|1=7% increased magic damage and critical strike chance|z=30000;av1|r=8|z=2000000;51|D=4|1=5% increased damage and critical strike chance|2=10% increased melee and movement speed|z=20000;5v1|z=10000;51|D=2|1=6% increased magic damage and critical strike chance|2=Reduces mana usage by 10%|z=35000;a1|r=7|1=Allows flight and slow fall|z=400000;tH|z=10000;tH|z=10000;tH|z=10000;av1|r=5|z=50000;av1|r=5|z=50000;av1|r=5|z=50000;av1|r=5|z=50000;tH;1|t=8|tf=5;xK|z=2500;1|t=8|tf=15;1|r=2|t=8|tf=27|z=50000;1|t=8|tf=20;1|r=3|t=8|tf=50|z=1000000;1|r=2|t=8|tf=30|z=200000;1|r=2|t=8|tf=40|z=350000;xK|z=2500;xK|z=3750;xK|z=3750;xK|z=3750;xK|z=3750;K|1=Its colorful scales could sell well.|z=7500;xK|z=7500;xK|z=15000;xK|z=3750;xK|z=7500;xK|r=2|z=12500;K|r=4|1=Quite shiny.  This will probably sell well.|z=500000;xK|z=3750;xK|r=3|z=50000;xK|z=7500;xK|r=2|z=25000;xK|z=7500;c|s=30|hl=120|t=17|z=7500;xK|r=2|z=7500;xK|z=7500;xK|r=4|z=150000;xK|z=7500;xK|z=7500;d1|r=3|d=24|t=24|k=6|th=70|z=75000;xK|z=12500;c|s=30|t=17|1=Increases mining speed by 25%|z=1000;c|s=30|t=17|1=Increases pickup range for life hearts|z=1000;c|s=30|t=17|1=Reduces enemy aggression|z=1000;c|s=30|t=17|1=Increases placement speed and range|z=1000;c|s=30|t=17|1=Increases knockback|z=1000;c|s=30|t=17|1=Lets you move swiftly in liquids|z=1000;c|s=30|t=17|1=Increases your max number of minions|z=1000;c|s=30|t=17|1=Allows you to see nearby danger sources|z=1000;d1|d=24|t=35|k=7|z=50000;d1|r=7|c=20|d=70|t=20|k=6.5|z=50000;d1|r=2|d=19|t=20|k=4.25|z=25000;wxK;tH|1=Right Click to open|z=5000;tH|r=2|1=Right Click to open|z=25000;tH|r=3|1=Right Click to open|z=100000;H;H;H;txK|tr=5|1=Hammer end piece to change bumper style|2=Hammer intersections to change direction;d1|r=3|d=16|t=22|k=3|tp=100|z=75000;d1|r=3|d=13|t=25|k=2.25|tx=14|z=75000;1|1=Lets ride the rails|z=1000;c|s=30|t=17|1=20% chance to not consume ammo|z=1000;c|s=30|t=17|1=Increases max life by 20%|z=1000;c|s=30|t=17|1=Reduces damage taken by 10%|z=1000;c|s=30|t=17|1=Increases critical chance by 10%|z=1000;c|s=30|t=17|1=Ignites nearby enemies|z=1000;c|s=30|t=17|1=Increases damage by 10%|z=1000;c|s=30|t=17|1=Teleports you home|z=1000;c|s=30|t=17|1=Teleports you to a random location|z=1000;cH|t=15|1=Throw this to make someone fall in love|z=200;cH|t=15|1=Throw this to make someone smell terrible|z=200;c|s=30|t=17|1=Increases fishing skill|z=1000;c|s=30|t=17|1=Detects hooked fish|z=1000;c|s=30|t=17|1=Increases chance to get a crate|z=1000;tH|z=80;xH|z=100;c|s=30|t=17|1=Reduces damage from cold sources|z=1000;1|r=3|z=20000;41|r=3|D=4|1=Increases minion damage by 4%|2=Increases your max number of minions|z=45000;51|r=3|D=5|1=Increases minion damage by 4%|2=Increases your max number of minions|z=30000;61|r=3|D=4|1=Increases minion damage by 5%|z=30000;s1|r=3|d=9|t=22|k=2|m=10|1=Summons a hornet to fight for you|z=10000;s1|r=3|d=21|t=36|k=2|m=10|1=Summons an imp to fight for you|z=10000;s1|r=4|d=26|t=30|k=7.5|m=10|1=Summons a spider queen to spit eggs at your enemies|z=250000;41|D=1|1=Increases fishing level|z=50000;51|D=2|1=Increases fishing level|z=50000;61|D=1|1=Increases fishing level|z=50000;41|r=4|D=5|1=Increases your max number of minions|2=Increases minion damage by 6%|z=37500;51|r=4|D=8|1=Increases your max number of minions|2=Increases minion damage by 6%|z=37500;61|r=4|D=7|1=Increases your max number of minions|2=Increases minion damage by 6%|z=37500;ax1|1=Fishing line will never break|z=50000;ax1|1=Increases fishing skill|z=50000;ax1|1=Decreases chance of bait consumption|z=50000;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=100000;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;4v1|z=50000;5v1|z=50000;6v1|z=50000;1|r=3|t=20|1=Summons a pet Zephyr Fish|z=150000;1|t=8|tf=22;1|r=3|t=8|tf=45|z=500000;a1|1=Increases jump speed and allows auto-jump|2=Increases fall resistance|z=50000;d1|r=3|d=30|t=30|k=5|z=50000;c|s=30|t=17|1=Minor improvements to all stats|z=2500;c|s=30|t=17|1=Minor improvements to all stats|z=2500;c|s=30|t=17|1=Minor improvements to all stats|z=2500;1|r=8|t=20|1=Summons a rideable Bunny mount|z=250000;1|r=8|t=20|1=Summons a rideable Pigron mount|z=250000;1|r=8|t=20|1=Summons a rideable Slime mount|z=250000;xH|z=100;wxK;wxK;wK|z=50;tK|z=50;cxK|t=15|z=175000;cxK|t=15|z=175000;cxK|t=15|z=175000;tH;tH;tH;tH|z=25000;tH|z=25000;tH|z=25000;tH|z=25000;tH|z=25000;tH|z=25000;tH|z=25000;tH|z=25000;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;tH|z=50000;tH|z=150000;1|r=8|t=20|1=Summons a rideable Turtle mount|z=250000;tH|tr=2|1=Not for use on slopes|z=5000;4v1;a1|r=4|1=Allows flight and slow fall|z=500000;tH|z=50000;tH|z=50000;tH|1=J. Hayes|z=25000;4v1|z=50000;5v1|z=50000;6v1|z=50000;av1|r=5|z=400000;1|r=8|t=20|1=Summons a rideable Bee mount|z=250000;txK;txK;wxK;wxK;wxK;wxK;41|D=1;51|D=1;61|D=1;41|D=1;51|D=1;61|D=1;r1|d=6|t=29|z=100;d1|d=4|t=33|k=5.5|th=35|z=50;d1|d=8|t=23|k=5|z=100;txK;tH|z=300;tH|z=2000;tH|z=300;tH|z=1500;tH;tH;tH|z=3000;txH|z=500;tH|z=300;tH|z=200;tH|z=300;tK;tH|z=300;tH|z=300;tH|z=500;tH|z=150;s1|r=5|d=30|t=36|k=2|m=10|1=Summons twins to fight for you|z=100000;tH|z=300;tH|z=300;tH|z=2000;tH|z=300;tH|z=300;tH|z=1500;tH;tH|z=3000;txH|z=500;tH|z=300;tK;tH|z=500;tH|z=300;txK;tH|z=300;s1|r=4|d=26|t=36|k=3|m=10|1=Summons spiders to fight for you|z=50000;tH|z=300;tH|z=2000;tH|z=300;tH|z=1500;tH;tH;tH|z=3000;txH|z=500;tH|z=300;tH|z=200;tH|z=300;tH|z=500;tK;tH|z=300;txK;tH|z=300;tH|z=2000;tH|z=300;tH|z=1500;tH;tH;tH|z=3000;txH|z=500;tH|z=300;tH|z=200;tH|z=300;tH|z=500;tK;tH|z=300;txK;tH|z=300;tH|z=300;s1|r=5|d=40|t=36|k=6|m=10|1=Summons pirates to fight for you|z=50000;1|r=3|z=20000;cH|d=60|t=45|k=8|1=A small explosion that will not destroy tiles|2=Tossing may be difficult.|z=75;1|r=3|t=20|1=Summons a mini minotaur|z=100000;4v1;tH|z=50000;cH|d=23|t=40|k=7|1=A small explosion that puts enemies on fire|2=Lights nearby area on fire for a while|z=500;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;xH|r=4|z=2500;d1|r=4|d=30|t=15|k=6|z=10000;a1|r=8|1=Allows flight and slow fall|2=Allows quick travel in water|z=100000;1|t=12|1=Squirts a harmless stream of slime|z=15000;d1|r=8|d=66|t=20|k=4.5|1=Spews homing bubbles|z=250000;txH|z=500;txH|z=500;txH|z=500;txH|z=500;txH|z=500;txH|z=500;txH|z=500;txH|z=500;txH|z=500;s1|r=8|d=50|t=36|k=2|m=10|1=Summons sharknados to fight for you|z=250000;m1|r=8|d=60|t=40|k=5|m=16|1=Casts fast moving razorwheels|z=250000;m1|r=8|d=70|t=9|k=3|m=4|1=Rapidly shoots forceful bubbles|z=250000;r1|r=8|d=60|t=24|k=2|1=Shoots 5 arrows at a time|z=250000;tH;tH;txK;txK;txK;txK;tH|z=150;tH|z=150;tH|z=150;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tK;tK;tH|z=500;tH|z=500;tH|z=500;tH|z=500;tH|z=500;tH;tH;tH;tH;tH|z=3000;tH|z=3000;tH|z=3000;tH|z=3000;tH|z=3000;tH|z=3000;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=100000;tH|z=1500;tH|z=1500;tH|z=1500;tH|z=1500;tH|z=1500;tH|z=2000;tH|z=300;tH|z=300;tH|z=300;cK|r=3|t=15|z=500000;cK|z=500;cK|r=2|z=1500;cK|r=3|z=5000;wxK;wxK;wxK;wxK;wxK;wxK;wxK;wxK;wxK;wxK;wxK;wxK;wxK;wxK;wxK;txK;txK;txK;txK;wxK;txK;wxK;tH|1=Right Click to place item on weapon rack|z=250;tH|z=50000;txK;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=30000;tH|tr=2|1=Hammer to change direction|z=5000;cxK|t=15|z=1250;tH;at1|r=4|z=100000;tH|z=300;txK;d1|d=8|t=23|k=5|z=100;d1|d=4|t=33|k=5.5|th=35|z=50;r1|d=6|t=29|z=100;txH|z=500;s1|r=8|d=36|t=36|k=2|m=10|1=Summons a UFO to fight for you|z=500000;m1|r=5|d=50|k=4.5|m=13|1=Showers meteors|z=100000;tK;tK;tK;tK;tK;c|s=30|t=17|z=1000;41|r=10|D=14|1=16% increased ranged damage|2=7% increased ranged critical strike chance;51|r=10|D=28|1=12% increased ranged damage and critical strike chance|2=25% chance not to consume ammo;61|r=10|D=20|1=8% increased ranged damage and critical strike chance|2=10% increased movement speed;41|r=10|D=14|1=Increases maximum mana by 60 and reduces mana usage by 15% |2=7% increased magic damage and critical strike chance;51|r=10|D=18|1=9% increased magic damage and critical strike chance;61|r=10|D=14|1=10% increased magic damage|2=10% increased movement speed;41|r=10|D=24|1=17% increased melee critical strike chance|2=Enemies are more likely to target you;51|r=10|D=34|1=22% increased melee damage|2=Enemies are more likely to target you;61|r=10|D=20|1=15% increased movement and melee speed|2=Enemies are more likely to target you;xH|r=8;c|s=20|r=8|t=45|1=Summons the Eclipse;1|r=8|t=20|1=Summons a rideable Drill mount|z=250000;1|r=8|t=20|1=Summons a rideable UFO mount|z=250000;a1|r=8|1=Allows flight and slow fall|z=400000;1|r=8|t=20|1=Summons a rideable Scutlix mount|z=250000;d1|r=10|d=100|t=25|k=6|tx=27|tr=8|z=250000;d1|r=10|d=80|t=25|k=4|tx=27|tr=8|z=250000;d1|r=10|d=50|t=25|tp=225|tr=8|z=250000;d1|r=10|d=110|t=30|k=7|th=100|tr=8|z=250000;d1|r=10|d=80|t=12|k=5.5|tp=225|tr=4|z=250000;d1|r=10|d=100|t=25|k=6|tx=27|tr=8|z=250000;d1|r=10|d=80|t=25|k=4|tx=27|tr=8|z=250000;d1|r=10|d=50|t=25|tp=225|tr=8|z=250000;d1|r=10|d=110|t=30|k=7|th=100|tr=8|z=250000;d1|r=10|d=80|t=12|k=5.5|tp=225|tr=4|z=250000;d1|r=10|d=100|t=25|k=6|tx=27|tr=8|z=250000;d1|r=10|d=80|t=25|k=4|tx=27|tr=8|z=250000;d1|r=10|d=50|t=25|tp=225|tr=8|z=250000;d1|r=10|d=110|t=30|k=7|th=100|tr=8|z=250000;d1|r=10|d=80|t=12|k=5.5|tp=225|tr=4|z=250000;txK;wxK;wxK;wxK;wxK;txK;txK;txK;m1|r=8|d=60|t=20|k=2|m=6|z=500000;r1|r=8|d=40|t=12|k=2|z=500000;r1|r=8|d=45|t=21|k=3|z=500000;d1|r=8|d=35|t=25|k=4.75|tp=230|tx=30|tr=10|z=500000;a1|1=Creates measurement lines on screen for block placement|z=10000;1|r=7|k=7|z=50000;4v1;4v1;4v1|z=50000;5v1|z=50000;6v1|z=50000;4v1|z=50000;5v1|z=50000;6v1|z=50000;tH|z=300;tH|z=300;tH|z=2000;tH;tH|z=3000;txH|z=500;tH|z=200;tH|z=300;tH|z=300;tH;tH|z=500;tK;tH|z=300;txK;tH|z=300;tH|z=300;tH|z=1500;tH|z=150;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;4v1|z=100000;4v1|z=100000;5v1|z=100000;5v1|z=100000;txK;wxK;4v1|r=3|z=50000;cH|r=3|t=17|z=300000;H|r=3|z=75000;tH|1=J. Hayes|z=20000;tH|1=J. Hayes|z=20000;tH|1=J. Hayes|z=20000;tK|z=100;H|r=3|z=75000;H|r=3|z=75000;H|r=2|z=37500;H|r=2|z=37500;H|r=3|z=75000;xH|z=10000;H|z=10000;H|z=10000;H|z=10000;H|r=3|z=75000;H|r=3|z=75000;d1|r=8|d=110|t=20|k=4.5|z=500000;1;m1|r=8|d=50|t=20|k=2|m=14|z=500000;H|r=3|z=75000;H|r=3|z=75000;H|r=3|z=75000;cxH|t=15|1=Banishes the Hallow|z=100;xH|z=50;r1|r=3|d=26|t=23|k=3|1=Wooden arrows turn into a column of bees|z=27000;cxK|r=2|t=15|z=500000;cxK|r=2|t=15|z=500000;cxK|r=3|t=15|z=500000;cxK|r=2|t=15|z=500000;cxK|r=3|t=15|z=500000;cxK|r=2|t=15|z=500000;cxK|r=3|t=15|z=500000;c|s=30|t=40|1=Tossing may be difficult.|z=2000;tH|1=Nearby players get a bonus against: Angry Trapper|z=1000;tH|1=Nearby players get a bonus against: Armored Viking|z=1000;tH|1=Nearby players get a bonus against: Black Slime|z=1000;tH|1=Nearby players get a bonus against: Blue Armored Bones|z=1000;tH|1=Nearby players get a bonus against: Blue Cultist Archer|z=1000;tH|1=Nearby players get a bonus against: NPCName.None|z=1000;tH|1=Nearby players get a bonus against: NPCName.None|z=1000;tH|1=Nearby players get a bonus against: Bone Lee|z=1000;tH|1=Nearby players get a bonus against: Clinger|z=1000;tH|1=Nearby players get a bonus against: Cochineal Beetle|z=1000;tH|1=Nearby players get a bonus against: Corrupt Penguin|z=1000;tH|1=Nearby players get a bonus against: Corrupt Slime|z=1000;tH|1=Nearby players get a bonus against: Corruptor|z=1000;tH|1=Nearby players get a bonus against: Crimslime|z=1000;tH|1=Nearby players get a bonus against: Cursed Skull|z=1000;tH|1=Nearby players get a bonus against: Cyan Beetle|z=1000;tH|1=Nearby players get a bonus against: Devourer|z=1000;tH|1=Nearby players get a bonus against: Diabolist|z=1000;tH|1=Nearby players get a bonus against: Doctor Bones|z=1000;tH|1=Nearby players get a bonus against: Dungeon Slime|z=1000;tH|1=Nearby players get a bonus against: Dungeon Spirit|z=1000;tH|1=Nearby players get a bonus against: Elf Archer|z=1000;tH|1=Nearby players get a bonus against: Elf Copter|z=1000;tH|1=Nearby players get a bonus against: Eyezor|z=1000;tH|1=Nearby players get a bonus against: Flocko|z=1000;tH|1=Nearby players get a bonus against: Ghost|z=1000;tH|1=Nearby players get a bonus against: Giant Bat|z=1000;tH|1=Nearby players get a bonus against: Giant Cursed Skull|z=1000;tH|1=Nearby players get a bonus against: Giant Flying Fox|z=1000;tH|1=Nearby players get a bonus against: Gingerbread Man|z=1000;tH|1=Nearby players get a bonus against: Goblin Archer|z=1000;tH|1=Nearby players get a bonus against: Green Slime|z=1000;tH|1=Nearby players get a bonus against: Headless Horseman|z=1000;tH|1=Nearby players get a bonus against: Hell Armored Bones|z=1000;tH|1=Nearby players get a bonus against: Hellhound|z=1000;tH|1=Nearby players get a bonus against: Hoppin Jack|z=1000;tH|1=Nearby players get a bonus against: Ice Bat|z=1000;tH|1=Nearby players get a bonus against: Ice Golem|z=1000;tH|1=Nearby players get a bonus against: Ice Slime|z=1000;tH|1=Nearby players get a bonus against: Ichor Sticker|z=1000;tH|1=Nearby players get a bonus against: Illuminant Bat|z=1000;tH|1=Nearby players get a bonus against: Illuminant Slime|z=1000;tH|1=Nearby players get a bonus against: Jungle Bat|z=1000;tH|1=Nearby players get a bonus against: Jungle Slime|z=1000;tH|1=Nearby players get a bonus against: Krampus|z=1000;tH|1=Nearby players get a bonus against: Lac Beetle|z=1000;tH|1=Nearby players get a bonus against: Lava Bat|z=1000;tH|1=Nearby players get a bonus against: Lava Slime|z=1000;tH|1=Nearby players get a bonus against: Brain Scrambler|z=1000;tH|1=Nearby players get a bonus against: Martian Drone|z=1000;tH|1=Nearby players get a bonus against: Martian Engineer|z=1000;tH|1=Nearby players get a bonus against: Gigazapper|z=1000;tH|1=Nearby players get a bonus against: Gray Grunt|z=1000;tH|1=Nearby players get a bonus against: Martian Officer|z=1000;tH|1=Nearby players get a bonus against: Ray Gunner|z=1000;tH|1=Nearby players get a bonus against: Scutlix Gunner|z=1000;tH|1=Nearby players get a bonus against: Tesla Turret|z=1000;tH|1=Nearby players get a bonus against: Mister Stabby|z=1000;tH|1=Nearby players get a bonus against: Mother Slime|z=1000;tH|1=Nearby players get a bonus against: Necromancer|z=1000;tH|1=Nearby players get a bonus against: Nutcracker|z=1000;tH|1=Nearby players get a bonus against: Paladin|z=1000;tH|1=Nearby players get a bonus against: Penguin|z=1000;tH|1=Nearby players get a bonus against: Pinky|z=1000;tH|1=Nearby players get a bonus against: Poltergeist|z=1000;tH|1=Nearby players get a bonus against: Possessed Armor|z=1000;tH|1=Nearby players get a bonus against: Present Mimic|z=1000;tH|1=Nearby players get a bonus against: Purple Slime|z=1000;tH|1=Nearby players get a bonus against: Ragged Caster|z=1000;tH|1=Nearby players get a bonus against: Rainbow Slime|z=1000;tH|1=Nearby players get a bonus against: Raven|z=1000;tH|1=Nearby players get a bonus against: Red Slime|z=1000;tH|1=Nearby players get a bonus against: Rune Wizard|z=1000;tH|1=Nearby players get a bonus against: Rusty Armored Bones|z=1000;tH|1=Nearby players get a bonus against: Scarecrow|z=1000;tH|1=Nearby players get a bonus against: Scutlix|z=1000;tH|1=Nearby players get a bonus against: Skeleton Archer|z=1000;tH|1=Nearby players get a bonus against: Skeleton Commando|z=1000;tH|1=Nearby players get a bonus against: Skeleton Sniper|z=1000;tH|1=Nearby players get a bonus against: Slimer|z=1000;tH|1=Nearby players get a bonus against: Snatcher|z=1000;tH|1=Nearby players get a bonus against: Snow Balla|z=1000;tH|1=Nearby players get a bonus against: Snowman Gangsta|z=1000;tH|1=Nearby players get a bonus against: Spiked Ice Slime|z=1000;tH|1=Nearby players get a bonus against: Spiked Jungle Slime|z=1000;tH|1=Nearby players get a bonus against: Splinterling|z=1000;tH|1=Nearby players get a bonus against: Squid|z=1000;tH|1=Nearby players get a bonus against: Tactical Skeleton|z=1000;tH|1=Nearby players get a bonus against: The Groom|z=1000;tH|1=Nearby players get a bonus against: Tim|z=1000;tH|1=Nearby players get a bonus against: Undead Miner|z=1000;tH|1=Nearby players get a bonus against: Undead Viking|z=1000;tH|1=Nearby players get a bonus against: White Cultist Archer|z=1000;tH|1=Nearby players get a bonus against: NPCName.None|z=1000;tH|1=Nearby players get a bonus against: NPCName.None|z=1000;tH|1=Nearby players get a bonus against: Yellow Slime|z=1000;tH|1=Nearby players get a bonus against: Yeti|z=1000;tH|1=Nearby players get a bonus against: Zombie Elf|z=1000;tH|1=V. Costa Moura|2=In loving memory|z=5000;txK|tr=3;c|s=30|1=Teleports you to a party member|2=Click their head on the fullscreen map|z=1000;ax1|r=4|1=15% increased summon damage|z=100000;tK|1=Right Click to have more minions|z=100000;tK|1=33% chance to not consume potion crafting ingredients|z=100000;c|s=30|hl=80|hm=400|t=17|1=It looks and smells terrible|z=500;cH|t=15|1=Exposes nearby treasure|z=150;rbK|d=6|k=2.5|z=15;txH|1=Emits a deathly glow|z=100;cK|t=20|1=Throw to create a climbable line of vine rope;m1|r=5|d=30|t=12|k=2.5|m=10|1=Drains life from enemies|z=400000;r1|r=5|d=28|t=22|k=3.5|z=250000;r1|r=5|d=52|t=38|k=5.5|z=250000;rbK|r=3|d=15|k=3.5;rbK|r=3|d=9|k=2.2;rbK|r=3|d=10|k=2.5;d1|r=5|d=43|t=14|k=3.25|z=1000;d1|r=5|d=70|t=7|k=6|z=400000;m1|r=5|d=43|t=24|k=8|m=40|1=Summons a wall of cursed flames|z=400000;a1|r=6|1=Enemies are less likely to target you|2=5% increased damage and critical strike chance|z=400000;a1|r=5|D=7|1=Enemies are more likely to target you|z=400000;a1|r=7|1=Flowers grow on the grass you walk on|z=400000;d1|r=5|d=50|t=23|k=6|z=500000;r1|r=3|d=20|t=14|k=5|1=Wooden arrows turn into flaming bats|z=200000;1|r=6|z=400000;1|r=6|z=400000;1|r=6|z=400000;1|r=6|z=400000;H|r=9|1=Great for impersonating devs!|z=150000;H|r=2|z=37500;H|r=2|z=37500;H|r=2|z=37500;H|r=2|z=37500;r1|r=6|d=43|t=19|k=2.25|1=Shoots arrows from the sky|z=400000;d1|r=6|d=40|t=15|k=4.5|1=Throws a controllable flying knife|z=400000;1|r=7|t=12|tr=2|1=Contains an endless amount of water|z=500000;1|r=7|t=12|tr=2|1=Capable of soaking up an endless amount of water|z=500000;ax1|r=5|1=Increases coin pickup range|z=50000;ax1|r=5|1=Increases coin pickup range|2=Hitting enemies will sometimes drop extra coins|z=100000;a1|r=6|1=Increases coin pickup range and shops have lower prices|2=Hitting enemies will sometimes drop extra coins|z=150000;ax1|r=3|1=Displays weather, moon phase, and fishing information|z=150000;ax1|1=Displays the weather|z=50000;H|r=3|z=75000;H|r=3|z=75000;H|r=2|z=37500;H|r=2|z=37500;H|r=3|z=75000;1|r=3|t=20|1=Summons a magic lantern that exposes nearby treasure|z=100000;at1|r=4|z=100000;txH|z=500;tK|1=Life regen is increased when near a campfire;tK|1=Life regen is increased when near a campfire;tK|1=Life regen is increased when near a campfire;tK|1=Life regen is increased when near a campfire;tK|1=Life regen is increased when near a campfire;m1|r=5|d=19|t=33|k=3|m=13|1=Summons a massive crystal spike|z=400000;r1|r=5|c=3|d=47|t=20|k=4.5|1=Shoots Shadowflame Arrows|z=100000;m1|r=5|c=3|d=40|t=21|k=3.75|m=6|1=Summons Shadowflame tentacles to strike your foe|z=100000;d1|r=5|c=3|d=38|t=12|k=5.75|1=Inflicts Shadowflame on hit|z=100000;tH|1=J. Hayes|z=5000;tH|1=J. Hayes|z=5000;tH|1=J. Hayes|z=5000;tH|1=J. Hayes|z=5000;tH|1=J. Hayes|z=5000;1|r=3|t=20|1=Summons a Baby Face Monster|z=375000;a1|r=5|1=Increases tile and wall placement speed and reach|2=Automatically paints placed objects|z=200000;1|t=20|1=Summons a heart to provide light|z=10000;d1|r=10|d=200|t=16|k=6.5|z=1000000;tH|r=7|1=Allows time to fast forward one day per week|z=150000;d1|r=9|d=110|t=16|k=6.5|z=1000000;txK;wxK;a1|1=Allows the collection of Vine Rope from vines|z=50000;m1|d=8|t=28|m=2|1=Shoots a small spark|z=5000;tH|r=2|z=500000;tH|r=2|z=500000;tH|r=2|z=500000;tH|r=2|z=500000;tH|r=2|z=500000;tH|r=2|z=500000;tH|r=2|z=500000;txK|tr=3|z=10;txK|tr=3|z=10;cK|t=20|z=100;cK|t=20|z=100;txK;wxK;wxK;ax1|1=Detects enemies around you|z=50000;H|r=2|1=Right Click to open|2=Requires a Golden Key|z=20000;txK;txK;wxK;wxK;a1|r=2|1=Slimes become friendly|z=100000;H|1=Charged with the essence of many souls;H|1=Charged with the essence of many souls;H|1=Right Click to open|z=5000;cK|d=17|t=24|k=4.75;ax1|1=Displays how many monsters have been killed|z=50000;ax1|1=Displays the phase of the moon|z=50000;da1|d=30|D=2|k=9|1=Allows the player to dash into the enemy|2=Double tap a direction|z=15000;d1|r=8|d=120|t=25|k=8|tx=30|1=Sparks emit from struck enemies|z=200000;ax1|1=Displays how fast the player is moving|z=50000;txK;wxK;ax1|1=Displays the most valuable ore around you|z=50000;rb1|r=2|d=5|k=2|z=100000;rb1|r=2|d=7|k=2|z=100000;m1|r=8|d=46|t=28|k=4|m=30|z=100000;d1|r=8|d=70|t=20|k=3.5|1=Allows you to go into stealth mode|z=250000;r1|r=8|d=85|t=15|z=500000;rbK|r=8|d=30|k=3|z=100;41|r=3|D=2|1=Improves vision|z=100000;a1|r=8|1=Turns the holder into a werewolf at night and a merfolk when entering water|2=Minor increases to all stats|z=700000;xK|1=Bouncy and sweet!|z=15;cH|t=15|1=Works when wet|z=10;tK|1=Very bouncy;txH|z=80;cH|t=25|1=A small explosion that will destroy some tiles|2=Very bouncy|z=400;cH|d=65|t=40|k=8|1=A small explosion that will not destroy tiles|2=Very bouncy|z=100;tH|1=Makes surrounding creatures less hostile;ax1|1=Displays the name of rare creatures around you|z=50000;ax1|1=Displays your damage per second|z=50000;ax1|1=Displays fishing information|z=50000;ax1|r=3|1=Displays movement speed, damage per second, and valuable ore|z=150000;ax1|r=3|1=Displays number of monsters, kill count, and rare creatures|z=150000;ax1|r=5|1=Displays everything|z=250000;1|r=7|t=90|1=Displays everything|2=Allows you to return home at will|z=400000;txH|z=500;tH|z=300;tH|z=300;tH|z=300;tH|z=200;tH|z=200;tH|z=200;tH|z=300;tH|z=300;tH|z=300;tH|z=500;tH|z=500;tH|z=500;tK;tK;tK;tH|z=300;tH|z=300;tH|z=300;txK;txK;txK;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=150;tH|z=150;tH|z=150;tH|z=300;tH|z=300;tH|z=300;tH|z=2000;tH|z=2000;tH|z=2000;tH|z=300;tH|z=300;tH|z=300;tH|z=1500;tH|z=1500;tH|z=1500;tH;tH;tH;tH;tH;tH;tH|z=3000;tH|z=3000;tH|z=3000;txH|z=500;txH|z=500;txK|z=500;1|r=4|t=18|z=250000;txK|z=500;txK|z=500;xK|z=100;41|D=2|z=20000;51|D=3|z=16000;61|D=2|z=12000;H|r=2|z=37500;cxK|r=2|t=15|z=10000;cxK|t=15|z=1250;cxK|t=15|z=2500;cxK|r=2|t=15|z=5000;c|s=30|t=17|1=Minor improvements to all stats|z=1000;cH|t=25|1=A small explosion that will destroy some tiles|z=1000;cK|d=17|t=13|k=3.5|z=80;tK|1=Increases armor penetration for melee weapons|z=100000;x1|t=90|1=Gaze in the mirror to return home|z=50000;ax1|1=The wearer can run super fast|z=50000;ax1|1=Allows the holder to double jump|z=50000;tH|z=500;tH|r=2|1=Right Click to open|z=50000;tH|r=2|1=Right Click to open|z=50000;tH|r=2|1=Right Click to open|z=50000;tH|r=2|1=Right Click to open|z=50000;tH|r=2|1=Right Click to open|z=50000;tH|r=2|1=Right Click to open|z=50000;m1|r=5|d=40|t=29|k=4.4|m=9|1=Shoots an explosive crystal charge|z=200000;r1|r=5|d=43|t=14|k=3|1=Spits toxic bubbles|z=200000;d1|r=5|d=55|t=28|k=5.75|1=Spits an Ichor stream on contact|z=200000;a1|1=Increases armor penetration by 5|z=50000;1|r=3|t=28|1=Summons a flying piggy bank to store your items|z=100000;tK|z=200;tK|z=100;tK|z=100;tK|z=100;tK|z=100;tK|z=100;tK|z=100;tK|z=100;tK|z=100;a1|1=May confuse nearby enemies after being struck|z=50000;a1|1=Reduces damage taken by 17%|z=50000;ax1|1=Increases jump height|z=27000;4v1|r=9|1=Great for impersonating devs!|2=Become the wind, ride the lightning.;5v1|r=9|1=Great for impersonating devs!|2=Bejeweled and elegant for soaring through the thundering skies;a1|r=9|1=Great for impersonating devs!|2=The Valkyrie Satellite Barrier Platform is totally safe. Most of the time.|z=400000;tH;tH;tH;tH;tH;txK;at1|r=4|z=100000;at1|r=4|z=100000;at1|r=4|z=100000;wxK;tK;tK;ax1|1=Increases jump height|2=Allows the holder to double jump|z=27000;4v1|z=30000;5v1|z=30000;6v1|z=30000;1|r=2|d=11|t=17|k=1.8|1=33% chance to not consume bone|z=50000;5v1|z=30000;6v1|z=30000;4v1|z=30000;s1|r=8|d=50|t=36|k=2|m=10|z=250000;a1|r=4|1=Allows the holder to double jump|2=Increases jump height and negates fall damage|z=45000;a1|r=4|1=Releases bees when damaged|2=Increases jump height and negates fall damage|z=45000;a1|r=4|1=Allows the holder to double jump|2=Increases jump height and negates fall damage|z=45000;tH|z=20000;tH;tH;tH;tH;d1|r=4|c=15|d=35|t=21|k=20|z=250000;cH|r=3|t=17|z=300000;1|r=8|t=20|1=Summons a rideable unicorn mount|z=250000;txH|r=7|z=50000;d1|r=2|d=21|t=25|k=3.25|z=50000;4v1|z=30000;5v1|z=30000;6v1|z=30000;41|D=4|z=4500;51|D=5|z=4500;61|D=4|z=4500;m1|r=4|d=45|t=20|k=2|m=10|z=50000;tH;tK;tK;wK;tK;tK;tK;tK;dx1|d=9|t=25|k=2.5|z=500;d1|d=16|t=25|k=4.5|z=50000;d1|d=17|t=25|k=4|z=50000;d1|r=3|d=20|t=25|k=3.75|z=65000;d1|r=3|d=27|t=25|k=4.3|z=90000;d1|r=4|d=39|t=25|k=3.15|z=200000;d1|r=5|d=47|t=25|k=3.8|z=250000;d1|d=14|t=25|k=3.5|z=25000;d1|r=7|d=60|t=25|k=3.1|z=250000;d1|r=9|d=70|t=25|k=4.5|1=Great for impersonating devs!|z=200000;d1|r=9|d=70|t=25|k=4.5|1=Great for impersonating devs!|z=200000;d1|r=4|d=43|t=25|k=2.8|z=200000;d1|r=4|d=41|t=25|k=4.5|z=200000;d1|r=8|d=90|t=25|k=4.3|z=550000;d1|r=8|d=115|t=25|k=3.5|z=550000;a1|1=Increases yoyo range|z=1500;a1|1=Increases yoyo range|z=1500;a1|1=Increases yoyo range|z=1500;a1|1=Increases yoyo range|z=1500;a1|1=Increases yoyo range|z=1500;a1|1=Increases yoyo range|z=1500;a1|1=Increases yoyo range|z=1500;a1|1=Increases yoyo range|z=1500;a1|1=Increases yoyo range|z=1500;a1|1=Increases yoyo range|z=1500;a1|1=Increases yoyo range|z=1500;a1|1=Increases yoyo range|z=1500;a1|1=Increases yoyo range|z=1500;ax1|1=Increases yoyo range|z=1500;a1|1=Increases yoyo range|z=1500;a1|1=Increases yoyo range|z=1500;ax1|r=2|1=Throws a counterweight after hitting an enemy with a yoyo|z=50000;ax1|r=2|1=Throws a counterweight after hitting an enemy with a yoyo|z=50000;ax1|r=2|1=Throws a counterweight after hitting an enemy with a yoyo|z=50000;ax1|r=2|1=Throws a counterweight after hitting an enemy with a yoyo|z=50000;ax1|r=2|1=Throws a counterweight after hitting an enemy with a yoyo|z=50000;ax1|r=2|1=Throws a counterweight after hitting an enemy with a yoyo|z=50000;d1|r=3|d=29|t=25|k=3.25|z=200000;d1|r=3|d=34|t=25|k=3.8|z=200000;d1|r=3|d=22|t=25|k=3.85|z=75000;cK|1=Right Click to open;cK|1=Right Click to open;cK|r=2|1=Right Click to open;cK|r=2|1=Right Click to open;cK|r=3|1=Right Click to open;cK|r=3|1=Right Click to open;cK|r=4|1=Right Click to open;cK|r=5|1=Right Click to open;cK|r=5|1=Right Click to open;cK|r=5|1=Right Click to open;cK|r=6|1=Right Click to open;cK|r=7|1=Right Click to open;cK|r=7|1=Right Click to open;cK|r=8|1=Right Click to open;cK|r=8|1=Right Click to open;a1|r=3|1=Increases the strength of friendly bees|z=100000;ax1|r=4|1=Allows the use of two yoyos at once|z=500000;cH|r=4|t=30|1=Permanently increases the number of accessory slots|z=100000;a1|r=8|1=Summons spores over time that will damage enemies|z=200000;a1|r=8|1=Greatly increases life regen when not moving|z=250000;tK;tK;wK;wK;wK;wK;wK;wK;wK;tK;wK;d1|r=2|d=20|t=18|k=4.25|z=25000;r1|r=2|c=7|d=12|t=24|k=1.25|z=25000;d1|r=2|d=16|t=15|k=3.5|z=25000;d1|r=2|d=14|t=12|k=5|z=25000;1|r=6|z=150000;xH|r=5|z=25000;xH|r=5|z=25000;xH|r=5|z=25000;tH|z=50000;tH|z=50000;tH|z=50000;t1|1=Places living rich mahogany;t1|1=Places rich mahogany leaves;5v1|z=250000;6v1|z=250000;tH;tH;a1|r=4|1=Gives the user master yoyo skills|z=150000;1|r=8|t=20|1=Attracts a legendary creature which flourishes in water & combat|z=250000;d1|r=2|d=20|t=25|k=4|1=I didnt get this off of a Schmoo|z=40000;tK|r=3|z=250000;at1|r=4|z=100000;at1|r=4|z=100000;4v1;4v1;41|D=3|1=20% increased throwing velocity|z=15000;51|D=6|1=20% increased throwing damage|z=25000;61|D=4|1=15% increased throwing critical strike chance|z=20000;m1|d=20|t=28|k=4.75|m=7|z=20000;cK|d=29|t=25|k=5|z=50;cK|d=14|t=14|k=1.5|z=50;txK;41|r=10|D=10|1=Increases your max number of minions|2=Increases minion damage by 22%;51|r=10|D=16|1=Increases your max number of minions|2=Increases minion damage by 22%;61|r=10|D=12|1=Increases your max number of minions|2=Increases minion damage by 22%;1|r=8|t=20|k=2|z=500000;tH|1=Can be traded for rare dyes|z=10000;tH|1=Can be traded for rare dyes|z=10000;tH|1=Can be traded for rare dyes|z=10000;tH|1=Can be traded for rare dyes|z=10000;d1|r=10|c=10|d=190|t=25|k=6.5|z=500000;tH|1=Nearby players get a bonus against: Goblin Summoner|z=1000;tH|1=Nearby players get a bonus against: Salamander|z=1000;tH|1=Nearby players get a bonus against: Giant Shelly|z=1000;tH|1=Nearby players get a bonus against: Crawdad|z=1000;tH|1=Nearby players get a bonus against: Fritz|z=1000;tH|1=Nearby players get a bonus against: Creature from the Deep|z=1000;tH|1=Nearby players get a bonus against: Dr. Man Fly|z=1000;tH|1=Nearby players get a bonus against: Mothron|z=1000;tH|1=Nearby players get a bonus against: NPCName.None|z=1000;tH|1=Nearby players get a bonus against: The Possessed|z=1000;tH|1=Nearby players get a bonus against: Butcher|z=1000;tH|1=Nearby players get a bonus against: Psycho|z=1000;tH|1=Nearby players get a bonus against: Deadly Sphere|z=1000;tH|1=Nearby players get a bonus against: Nailhead|z=1000;tH|1=Nearby players get a bonus against: NPCName.None|z=1000;tH|1=Nearby players get a bonus against: Medusa|z=1000;tH|1=Nearby players get a bonus against: Hoplite|z=1000;tH|1=Nearby players get a bonus against: Granite Elemental|z=1000;tH|1=Nearby players get a bonus against: Granite Golem|z=1000;tH|1=Nearby players get a bonus against: Blood Zombie|z=1000;tH|1=Nearby players get a bonus against: Drippler|z=1000;tH|1=Nearby players get a bonus against: Tomb Crawler|z=1000;tH|1=Nearby players get a bonus against: Dune Splicer|z=1000;tH|1=Nearby players get a bonus against: Antlion Swarmer|z=1000;tH|1=Nearby players get a bonus against: Antlion Charger|z=1000;tH|1=Nearby players get a bonus against: Ghoul|z=1000;tH|1=Nearby players get a bonus against: Lamia|z=1000;tH|1=Nearby players get a bonus against: Desert Spirit|z=1000;tH|1=Nearby players get a bonus against: Basilisk|z=1000;tH|1=Nearby players get a bonus against: Sand Poacher|z=1000;tH|1=Nearby players get a bonus against: Stargazer|z=1000;tH|1=Nearby players get a bonus against: Milkyway Weaver|z=1000;tH|1=Nearby players get a bonus against: Flow Invader|z=1000;tH|1=Nearby players get a bonus against: Twinkle Popper|z=1000;tH|1=Nearby players get a bonus against: NPCName.None|z=1000;tH|1=Nearby players get a bonus against: Star Cell|z=1000;tH|1=Nearby players get a bonus against: Corite|z=1000;tH|1=Nearby players get a bonus against: Sroller|z=1000;tH|1=Nearby players get a bonus against: Crawltipede|z=1000;tH|1=Nearby players get a bonus against: Drakomire Rider|z=1000;tH|1=Nearby players get a bonus against: Drakomire|z=1000;tH|1=Nearby players get a bonus against: Selenian|z=1000;tH|1=Nearby players get a bonus against: Predictor|z=1000;tH|1=Nearby players get a bonus against: Brain Suckler|z=1000;tH|1=Nearby players get a bonus against: Nebula Floater|z=1000;tH|1=Nearby players get a bonus against: Evolution Beast|z=1000;tH|1=Nearby players get a bonus against: Alien Larva|z=1000;tH|1=Nearby players get a bonus against: Alien Queen|z=1000;tH|1=Nearby players get a bonus against: Alien Hornet|z=1000;tH|1=Nearby players get a bonus against: Vortexian|z=1000;tH|1=Nearby players get a bonus against: Storm Diver|z=1000;tH|1=Nearby players get a bonus against: Pirate Captain|z=1000;tH|1=Nearby players get a bonus against: Pirate Deadeye|z=1000;tH|1=Nearby players get a bonus against: Pirate Corsair|z=1000;tH|1=Nearby players get a bonus against: Pirate Crossbower|z=1000;tH|1=Nearby players get a bonus against: Martian Walker|z=1000;tH|1=Nearby players get a bonus against: Red Devil|z=1000;tH|1=Nearby players get a bonus against: Pink Jellyfish|z=1000;tH|1=Nearby players get a bonus against: Green Jellyfish|z=1000;tH|1=Nearby players get a bonus against: Dark Mummy|z=1000;tH|1=Nearby players get a bonus against: Light Mummy|z=1000;tH|1=Nearby players get a bonus against: Angry Bones|z=1000;tH|1=Nearby players get a bonus against: Ice Tortoise|z=1000;1;1;1;xK|r=9|1=Swirling energies emanate from this fragment|z=10000;xK|r=9|1=The power of a galaxy resides within this fragment|z=10000;xK|r=9|1=The fury of the universe lies within this fragment|z=10000;xK|r=9|1=Entrancing particles revolve around this fragment|z=10000;txK|r=10|1=A pebble of the heavens|z=15000;txK;d1|r=10|d=100|t=25|k=6|tx=27|tr=4|z=250000;d1|r=10|d=80|t=25|k=4|tx=27|tr=4|z=250000;d1|r=10|d=50|t=25|tp=225|tr=4|z=250000;d1|r=10|d=110|t=30|k=7|th=100|tr=4|z=250000;d1|r=10|d=80|t=12|k=5.5|tp=225|tr=4|z=250000;txK|r=10|1=It vibrates with luminous celestial energy|z=60000;a1|r=10|1=Allows flight and slow fall|z=100000;a1|r=10|1=Allows flight and slow fall|z=100000;a1|r=10|1=Allows flight and slow fall|z=100000;a1|r=10|1=Allows flight and slow fall|z=100000;wxK;d1|r=10|d=105|t=20|k=2|1=Strike with the fury of the sun|z=500000;s1|r=10|d=60|t=36|k=2|m=10|1=Summons a stardust cell to fight for you|2=Cultivate the most beautiful cellular infection|z=500000;r1|r=10|d=50|t=20|k=2|1=66% chance to not consume ammo|2=The catastrophic mixture of pew pew and boom boom.|z=500000;m1|r=10|d=70|t=30|k=5|m=30|1=Conjure masses of astral energy to chase down your foes|z=500000;cK|r=3|d=20|t=15|k=3|1=Spreads the crimson to some blocks|z=200;4v1|1=Wuv... twue wuv...|z=5000;5v1|1=Mawwiage...|z=5000;r1|d=13|t=25|z=10500;d1|d=10|t=27|k=5.5|th=59|z=12000;d1|d=8|t=25|k=4.5|tx=12|z=12000;d1|d=13|k=4|z=10500;d1|d=15|t=19|k=5|z=13500;d1|d=7|t=19|k=2|tp=59|1=Can mine Meteorite|z=15000;r1|d=10|t=26|z=5250;d1|d=9|t=28|k=5.5|th=50|z=6000;d1|d=7|t=26|k=4.5|tx=11|z=4000;d1|d=10|t=11|k=4|z=5250;d1|d=12|t=20|k=5|z=6750;d1|d=6|t=21|k=2|tp=50|1=Can mine Meteorite|z=7500;r1|d=9|t=27|z=2100;d1|d=8|t=29|k=5.5|th=43|z=2400;d1|d=6|t=28|k=4.5|tx=10|z=2400;d1|d=9|t=12|k=4|z=2100;d1|d=11|t=21|k=5|z=2700;d1|d=6|t=19|k=2|tp=43|z=3000;r1|d=7|t=28|z=525;d1|d=6|t=31|k=5.5|th=38|z=600;d1|d=4|t=28|k=4.5|tx=8|z=600;d1|d=7|t=12|k=4|z=525;d1|d=9|t=22|k=5|z=675;d1|d=5|t=21|k=2|tp=35|z=750;r1|d=6|t=29|z=350;d1|d=4|t=33|k=5.5|th=35|z=400;d1|d=3|t=30|k=4.5|tx=7|z=400;d1|d=5|t=13|k=4|z=350;d1|d=8|t=23|k=5|z=450;d1|d=4|t=23|k=2|tp=35|z=500;r1|d=9|t=27|z=3500;d1|d=9|t=29|k=5.5|th=45|z=4000;d1|d=6|t=26|k=4.5|tx=10|z=4000;d1|d=9|t=12|k=4|z=3500;d1|d=11|t=21|k=5|z=4500;d1|d=6|t=19|k=2|tp=45|z=5000;r1|d=11|t=26|z=7000;d1|d=9|t=28|k=5.5|th=55|z=8000;d1|d=7|t=26|k=4.5|tx=11|z=8000;d1|d=11|t=11|k=4|z=7000;d1|d=13|t=20|k=5|z=9000;d1|d=6|t=20|k=2|tp=55|1=Can mine Meteorite|z=10000;d1|r=10|d=60|t=28|k=7|tx=30|th=100|tr=4|z=250000;d1|r=10|d=60|t=28|k=7|tx=30|th=100|tr=4|z=250000;d1|r=10|d=60|t=28|k=7|tx=30|th=100|tr=4|z=250000;d1|r=10|d=60|t=28|k=7|tx=30|th=100|tr=4|z=250000;H|r=4|z=125000;H|r=4|z=125000;H|r=4|z=125000;H|r=4|z=125000;H|r=4|z=125000;s1|r=10|d=40|t=36|k=2|m=10|1=Summons a stardust dragon to fight for you|2=Who needs a horde of minions when you have a giant dragon?|z=500000;c|s=30|t=17|1=Minor improvements to all stats|2=Bacon? Bacon.|z=1000;xH|r=3|z=75000;H|r=2|z=37500;H|r=3|z=75000;tK|r=9|1=Wield a small amount of power from the Vortex Tower|z=1000000;tK|r=9|1=Wield a small amount of power from the Nebula Tower|z=1000000;tK|r=9|1=Wield a small amount of power from the Stardust Tower|z=1000000;tK|r=9|1=Wield a small amount of power from the Solar Tower|z=1000000;r1|r=10|d=50|t=12|k=2|1=66% chance to not consume ammo|z=500000;m1|r=10|d=100|m=12|1=Fire a lifeform disintegration rainbow|z=500000;m1|r=10|d=130|t=15|m=18|1=From Orions belt to the palm of your hand|z=500000;d1|r=10|d=150|t=16|k=5|1=Rend your foes asunder with a spear of light!|z=500000;c|s=30|r=7|hl=200|t=17|z=1500;tK|1=Guts... and Gory!;r1|r=10|c=10|d=65|t=30|k=4|z=500000;c|s=30|t=40|1=This will prove to be terrible idea|z=2000;cH|r=2|d=30|t=20|k=6|1=A small explosion that will not destroy tiles|z=250;tH|r=10|1=Used to craft items from Lunar Fragments and Luminite;H|z=10000;H|z=10000;H|z=10000;H|r=2|z=37500;H|r=2|z=37500;H|r=2|z=37500;H|r=3|z=75000;H|z=10000;H|z=10000;H|z=10000;H|r=2|z=10000;xH|r=3|z=75000;H|r=3|z=75000;cxK|t=15|z=2500;cxK|r=2|t=15|z=500000;tH;tH|r=2|z=500000;rbK|r=9|d=20|k=3|1=Line em up and knock em down...|z=10;rbK|r=9|d=15|k=3.5|1=Shooting them down at the speed of sound!|z=10;s1|r=10|d=50|t=30|k=7.5|m=10|1=Summons a lunar portal to shoot lasers at your enemies|z=500000;m1|r=10|d=100|k=4.5|m=13|1=Rains down lunar flares|z=500000;s1|r=10|d=150|t=30|k=7.5|m=10|1=Summons a radiant crystal that banishes your enemies|2=The colors, Duke, the colors!|z=500000;1|r=10|1=You want the moon? Just grapple it and pull it down!|z=500000;tK;tK;tK;tK;1|r=10|t=20|1=Calls upon a suspicious looking eye to provide light|2=I know what youre thinking....|z=500000;5v1|r=9|1=Great for impersonating devs!;6v1|r=9|1=Great for impersonating devs!;a1|r=9|1=Great for impersonating devs!|2=Whatever this accessory does to you is not a bug!|z=400000;av1|r=9|1=Great for impersonating devs!|2=If you see this you should probably run away...;a1|r=9|1=Great for impersonating devs!|z=400000;4v1|r=9|1=Great for impersonating devs!;wxK;4v1|r=9|1=Great for impersonating devs!;5v1|r=9|1=Great for impersonating devs!;6v1|r=9|1=Great for impersonating devs!;a1|r=9|1=Great for impersonating devs!|z=400000;4v1|r=9|1=Great for impersonating devs!|2=Disorder came from order, fear came from courage, weakness came from strength;5v1|r=9|1=Great for impersonating devs!|2=Know thy self, know thy enemy. A thousand battles, a thousand victories\u2026;6v1|r=9|1=Great for impersonating devs!|2=Wheels of justice grind slow but grind fine.;a1|r=9|1=Great for impersonating devs!|2=Let your plans be dark and impenetrable as night, and when you move, fall like a thunderbolt.|z=400000;tH|1=Nearby players get a bonus against: Sand Slime|z=1000;tH|1=Nearby players get a bonus against: Sea Snail|z=1000;tH|z=50000;tH|1=V. Costa Moura|z=30000;H|r=3|z=75000;H|r=3|z=75000;H|r=9|1=Great for impersonating devs!|z=150000;H|r=3|z=75000;c|s=20|r=10|t=45|1=Summons the Impending Doom;tK|1=Place this on logic gates to add checks|z=1000;tK|1=Activates when all lamps are on, Deactivates otherwise|z=20000;tK|1=Judges logic gate lamps above it|2=Activates when any lamp is on, Deactivates otherwise|z=20000;tK|1=Activates when not all lamps are on, Deactivates otherwise|z=20000;tK|1=Judges logic gate lamps above it|2=Activates when no lamp is on, Deactivates otherwise|z=20000;tK|1=Judges logic gate lamps above it|2=Activates when only one lamp is on, Deactivates otherwise|z=20000;tK|1=Judges logic gate lamps above it|2=Activates when the total on lamps is not one, Deactivates otherwise|z=20000;tK|z=500;tK|z=500;1|r=2|1=Allows ultimate control over wires!|2=Right Click while holding to edit wire settings|z=150000;x1|t=15|tr=20|1=Places yellow wire|z=20000;tK|1=Activates once day starts;tK|1=Activates once night starts;tK|1=Activates whenever players are over it, deactivates otherwise;tK|1=Separates wire paths|2=Its also hammerable!|z=200;tK;tK|1=Place this on logic gates to add checks|z=1000;ax1|r=3|1=Grants improved wire vision|z=10000;1|t=15|tr=20|1=Activates Actuators|z=20000;tK|z=100;tK|z=100;1|r=10|z=500000;a1|r=3|1=Automatically places actuators on placed objects|z=100000;x1|t=15|tr=20|1=Right Click while holding to edit wire settings|z=100000;tK|1=Activates when a player steps on or off it;4v1|z=10000;1|t=20|1=Susceptible to lava!|z=5000000;tK|r=2|1=Lights up bulbs for each wire color|z=50000;tK|1=Activates when a player steps on or off it;tK|1=Activates when a player steps on or off it;tK|1=Activates when a player steps on or off it;tK|z=100;tK|z=100;tK|z=100;tK|z=100;tK|z=100;tK|z=100;tK|z=100;tK|z=100;tK|z=100;tK|z=100;1|1=For Capture the Gem. It drops when you die;tH|1=Right Click to place or remove Large Rubies|z=500;tH|1=Right Click to place or remove Large Sapphires|z=500;tH|1=Right Click to place or remove Large Emeralds|z=500;tH|1=Right Click to place or remove Large Topazes|z=500;tH|1=Right Click to place or remove Large Amethysts|z=500;tH|1=Right Click to place or remove Large Diamonds|z=500;tH|1=Right Click to place or remove Large Ambers|z=500;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tK|1=Place this on logic gate lamps to randomize the activation|z=20000;tK|r=3|z=100000;tH|z=500;tH|z=500;tH|z=500;tH|z=500;tH|z=500;tH|z=500;tH|z=500;tH|z=500;tH|z=500;tH|z=500;tH|z=500;tH|z=500;tH|z=500;tH|z=500;tH|z=500;tH|z=500;tH|z=500;tH|z=500;tH|z=500;tH|z=500;tH|z=500;tH|z=500;tH|z=500;tH|z=500;tH|z=500;tH|z=500;tH|z=500;tH|z=500;tH|z=500;tH|z=500;tH|z=500;tH|z=500;tH|z=500;tH|z=500;tH|z=500;tH|z=500;tH|z=500;tH|z=500;tH|z=500;tH|z=500;tH|z=500;tH|z=500;tK|1=Activates when a projectile touches it|z=20000;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;a1|r=3|1=Fishing line will never break, Decreases chance of bait consumption, Increases fishing skill|z=150000;tK|z=10000;tK|1=Life regen is increased when near a campfire;tK|1=Life regen is increased when near a campfire;tK|1=Separates wire paths|2=Lights off from horizontal signals|z=200;tK|1=Activates whenever occupied by water, deactivates otherwise;tK|1=Activates whenever occupied by lava, deactivates otherwise;tK|1=Activates whenever occupied by honey, deactivates otherwise;tK|1=Activates whenever occupied by liquid, deactivates otherwise;av1|z=20000;av1|z=20000;4v1|z=10000;4v1|z=30000;5v1|z=30000;6v1|z=30000;txK|1=Smells like bubblegum and happiness|z=100;txK|1=Smells like lavender and enthusiasm|z=100;txK|1=Smells like mint and glee|z=100;tK|tr=3|1=Oddly durable enough to climb!|z=50;tK|tr=3|1=Oddly durable enough to climb!|z=50;tK|tr=3|1=Oddly durable enough to climb!|z=50;tH|1=It never stops celebrating!|z=50000;txH|z=1000;txH|z=1000;txH|z=1000;tH|1=Beat the shindig out of it!|2=May contain a suprise!|z=10000;tH|r=9|1=Balloons shall rain from the sky|z=200000;tH|1=Tied down for everyones pleasure|z=2000;tH|1=Wonder whats inside?|z=2000;c|s=30|t=17|1=Stuff your face. Stuff someone elses face. Whatever.|z=1000;wxK|1=Productivity up 200%;wxK|1=Falling sand you can safely watch;wxK|1=A lot cooler than a snow globe;txK|1=Falling sand you can safely watch|z=5;txK|1=A lot cooler than a snow globe;tK|1=It gets pretty cold up there;4v1|r=9|1=Become the Pedguin|2=Great for impersonating streamers!|z=15000;5v1|r=9|1=Become the Pedguin|2=Great for impersonating streamers!|z=15000;6v1|r=9|1=Become the Pedguin|2=Great for impersonating streamers!|z=15000;wxK|1=Smells like bubblegum and happiness;wxK|1=Smells like lavender and enthusiasm;wxK|1=Smells like mint and glee;4v1|r=9|1=Enables your inner wingman|2=Great for impersonating streamers!|z=50000;d1|r=4|d=41|t=25|k=3|z=27000;d1|r=4|d=41|t=25|k=3|z=27000;d1|r=4|d=41|t=25|k=3|z=27000;d1|r=4|d=41|t=25|k=3|z=27000;d1|r=4|d=41|t=25|k=3|z=27000;d1|r=4|d=41|t=25|k=3|z=27000;6v1|r=4|1=Grants slow fall in exchange for your feet|z=50000;1|r=8|t=20|1=Summons a rideable basilisk mount|z=250000;d1|r=2|d=14|t=18|k=4.5|z=5000;4v1|r=3|z=25000;5v1|r=3|z=25000;6v1|r=3|z=25000;41|r=5|D=6|1=15% increased magic and minion damage|z=250000;51|r=5|D=12|1=Increases maximum mana by 80|z=200000;61|r=5|D=8|1=Increases your max number of minions|z=150000;m1|r=4|d=85|t=30|k=5|m=18|z=50000;tH|1=Nearby players get a bonus against: Sand Elemental|z=1000;a1|r=3|1=Immunity to petrification|z=100000;tK|z=500;xK|r=5|z=50000;6v1|r=3|z=25000;5v1|r=3|z=25000;4v1|r=3|z=25000;m1|r=4|c=20|d=38|t=12|k=6|m=14|z=300000;r1|r=4|d=28|t=45|k=6.5|z=250000;tH|1=Nearby players get a bonus against: Sand Shark|z=1000;tH|1=Nearby players get a bonus against: Bone Biter|z=1000;tH|1=Nearby players get a bonus against: Flesh Reaver|z=1000;tH|1=Nearby players get a bonus against: Crystal Thresher|z=1000;tH|1=Nearby players get a bonus against: Angry Tumbler|z=1000;xK|z=500;txH|r=3|z=25000;at1|r=4|z=100000;41|r=8|D=7|1=Increases your max number of sentries and reduces mana costs by 10%|z=150000;51|r=8|D=15|1=20% increased minion damage and 10% increased magic damage|z=150000;61|r=8|D=10|1=10% increased minion damage and 20% increased movement speed|z=150000;41|r=8|D=12|1=Increases your max number of sentries and increases your life regeneration|z=150000;51|r=8|D=27|1=15% increased minion and melee damage|z=150000;61|r=8|D=17|1=15% increased minion damage, 20% increased melee critical strike chance and movement speed|z=150000;41|r=8|D=7|1=Increases your max number of sentries and increases ranged critical strike chance by 10%|z=150000;51|r=8|D=17|1=20% increased minion and ranged damage|z=150000;61|r=8|D=12|1=10% increased minion damage and 20% increased movement speed|z=150000;41|r=8|D=8|1=Increases your max number of sentries and increases melee attack speed by 20%|z=150000;51|r=8|D=22|1=20% increased minion and melee damage|z=150000;61|r=8|D=16|1=10% increased minion damage,|2=10% increased critical strike chance and 20% increased movement speed|z=150000;a1|r=5|1=Increase your max number of sentries|2=Increases minion damage by 10%|z=150000;a1|r=5|1=Increase your max number of sentries|2=Increases minion damage by 10%|z=150000;a1|r=5|1=Increase your max number of sentries|2=Increases minion damage by 10%|z=150000;a1|r=5|1=Increase your max number of sentries|2=Increases minion damage by 10%|z=150000;tH|r=3|z=100000;tK|z=100000;tK|z=100000;tK|r=3|1=Holds the Eternia Crystal|z=10000;K|r=3|1=Currency for trading with the Tavernkeep;s1|r=3|d=17|t=30|k=3|m=5|1=An average speed tower that shoots exploding fireballs|2=Use 10 Etherian Mana to summon more than one|z=50000;s1|r=5|d=42|t=30|k=3|m=10|1=An average speed tower that shoots exploding fireballs|2=Use 10 Etherian Mana to summon more than one|z=250000;s1|r=8|d=88|t=30|k=3|m=15|1=An average speed tower that shoots exploding fireballs|2=Use 10 Etherian Mana to summon more than one|z=750000;1|d=20|t=40|k=7|z=500;K|1=Often used to manifest ones will as a physical form of defense;d1|r=5|d=44|t=25|k=6.5|1=Right Click to guard with a shield|z=50000;s1|r=3|d=27|t=30|k=4.5|m=5|1=A slow but high damage tower that shoots piercing bolts|2=Use 10 Etherian Mana to summon more than one|z=50000;s1|r=5|d=67|t=30|k=4.5|m=10|1=A slow but high damage tower that shoots piercing bolts|2=Use 10 Etherian Mana to summon more than one|z=250000;s1|r=8|d=140|t=30|k=4.5|m=15|1=A slow but high damage tower that shoots piercing bolts|2=Use 10 Etherian Mana to summon more than one|z=750000;d1|r=8|d=90|t=25|k=5.5|1=Unleashes the hearts energy forward|z=250000;cH|r=3|1=Place in the Eternia Crystal Stand to summon Etherias portals|z=2500;s1|r=3|d=4|t=30|m=5|1=An aura that repeatedly zaps enemies that go inside|2=Use 10 Etherian Mana to summon more than one|z=50000;s1|r=5|d=11|t=30|m=10|1=An aura that repeatedly zaps enemies that go inside|2=Use 10 Etherian Mana to summon more than one|z=250000;s1|r=8|d=34|t=30|m=15|1=An aura that repeatedly zaps enemies that go inside|2=Use 10 Etherian Mana to summon more than one|z=750000;s1|r=3|d=24|t=30|m=5|1=A trap that explodes when enemies come near|2=Use 10 Etherian Mana to summon more than one|z=50000;s1|r=5|d=59|t=30|m=10|1=A trap that explodes when enemies come near|2=Use 10 Etherian Mana to summon more than one|z=250000;s1|r=8|d=126|t=30|m=15|1=A trap that explodes when enemies come near|2=Use 10 Etherian Mana to summon more than one|z=750000;d1|r=5|d=40|t=30|k=7|1=Charges power as it is swung to smash enemies|z=50000;d1|r=5|d=45|t=27|k=7|1=Summons ghosts as it hits enemies|z=50000;tH|z=1000;tH|z=1000;tH|z=1000;tH|z=1000;tH|z=1000;tH|z=1000;tH|z=1000;tH|z=1000;tH|z=1000;tH|z=1000;1;1;1;1;1;m1|r=5|d=24|t=30|k=9|m=20|1=Gotta wonder who stuck a tome of infinite wisdom on a stick...|2=Right Click to cast a powerful tornado|z=50000;1;r1|r=5|d=24|t=20|k=2|1=Harnesses the power of undying flames|z=50000;1|r=3|t=20|1=Summons a pet gato|z=100000;1|r=3|t=20|1=Summons a pet flickerwick to provide light|z=100000;1|r=3|t=20|1=Summons a pet dragon|z=100000;d1|r=8|d=70|t=30|k=5|1=Right Click while holding for an alternate attack!|z=250000;r1|r=8|c=3|d=55|t=30|k=4.5|1=Shoots splitting arrows, deals more damage to airborne enemies|z=250000;cK|r=8|1=Right Click to open;cK|r=5|1=Right Click to open;cK|r=3|1=Right Click to open;4v1;4v1;4v1;tH|z=50000;tH|z=50000;tH|z=50000;at1|r=4|z=100000;m1|r=8|d=65|t=20|k=7|m=14|1=Splashes defense reducing miasma!|z=250000;41|r=8|D=14|1=Increases your max number of sentries and grants you 10% minion damage|z=150000;51|r=8|D=30|1=30% increased minion damage and massively increased life regeneration|z=150000;61|r=8|D=20|1=20% increased minion damage, critical strike chance and 30% movement speed|z=150000;41|r=8|D=7|1=Increases your max number of sentries|2=10% increased minion & magic damage|z=150000;51|r=8|D=21|1=30% increased minion damage and 15% increased magic damage|z=150000;61|r=8|D=14|1=20% increased minion damage and 25% increased magic critical strike chance|z=150000;41|r=8|D=8|1=Increases your max number of sentries|2=10% increased minion damage and ranged critical strike chance|z=150000;51|r=8|D=24|1=25% increased minion & ranged damage|z=150000;61|r=8|D=16|1=25% increased minion damage and 20% increased movement speed|z=150000;41|r=8|D=10|1=Increases your max number of sentries and increases 20% melee & minion damage|z=150000;51|r=8|D=26|1=20% increased minion damage and melee speed|z=150000;61|r=8|D=18|1=20% increased minion damage, movement speed and melee critical strike chance|z=150000;a1|r=8|z=250000;txH|z=500;txH|z=500;tH|z=500;tH|z=500;tH|z=200;tH;tH;tK;tH|z=500;tH|z=1500;tH|z=3000;tH|z=300;tH|z=300;tH|z=2000;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;txK;tK;txK;txK;txK;txK;tH|z=150;tH|z=150;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;tH|z=300;4v1|r=9|1=Great for impersonating devs!|2=I didnt get this from the Grid;5v1|r=9|1=Great for impersonating devs!|2=I didnt get this from the Grid;6v1|r=9|1=Great for impersonating devs!|2=I didnt get this from the Grid;a1|r=9|1=Great for impersonating devs!|2=I didnt get this from the Grid|z=400000;4v1|r=9|1=Great for impersonating devs!|2=To keep those luscious locks as gorgeous as ever;5v1|r=9|1=Great for impersonating devs!|2=Bringing sexy back;6v1|r=9|1=Great for impersonating devs!|2=Shia suprise! Didnt expect that from pants, did you?;a1|r=9|1=Great for impersonating devs!|2=Its full on! What does it mean?!|z=400000;av1|r=9|1=Great for impersonating devs!|2=For best results, use with pasta-based diet".split(";");
    la.cv = new ka;
    la.fe = new X;
    n._H()
})("undefined" != typeof console ? console : {
    log: function() {}
}, "undefined" != typeof window ? window : "undefined" != typeof gq ? gq : "undefined" != typeof self ? self : this);