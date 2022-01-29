let t = function () {
    return function (e) {
        var t = {};

        function r(n) {
            if (t[n]) return t[n].exports;
            var i = t[n] = {
                i: n,
                l: !1,
                exports: {}
            };
            return e[n].call(i.exports, i, i.exports, r), i.l = !0, i.exports
        }
        return r.m = e, r.c = t, r.d = function (e, t, n) {
            r.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: n
            })
        }, r.r = function (e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, r.t = function (e, t) {
            if (1 & t && (e = r(e)), 8 & t) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var n = Object.create(null);
            if (r.r(n), Object.defineProperty(n, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & t && "string" != typeof e)
                for (var i in e) r.d(n, i, function (t) {
                    return e[t]
                }.bind(null, i));
            return n
        }, r.n = function (e) {
            var t = e && e.__esModule ? function () {
                return e.default
            } : function () {
                return e
            };
            return r.d(t, "a", t), t
        }, r.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, r.p = "", r(r.s = 100)
    }([function (e, t, r) {
        var n = r(5),
            i = n.Buffer;

        function o(e, t) {
            for (var r in e) t[r] = e[r]
        }

        function a(e, t, r) {
            return i(e, t, r)
        }
        i.from && i.alloc && i.allocUnsafe && i.allocUnsafeSlow ? e.exports = n : (o(n, t), t.Buffer = a), o(i, a), a.from = function (e, t, r) {
            if ("number" == typeof e) throw new TypeError("Argument must not be a number");
            return i(e, t, r)
        }, a.alloc = function (e, t, r) {
            if ("number" != typeof e) throw new TypeError("Argument must be a number");
            var n = i(e);
            return void 0 !== t ? "string" == typeof r ? n.fill(t, r) : n.fill(t) : n.fill(0), n
        }, a.allocUnsafe = function (e) {
            if ("number" != typeof e) throw new TypeError("Argument must be a number");
            return i(e)
        }, a.allocUnsafeSlow = function (e) {
            if ("number" != typeof e) throw new TypeError("Argument must be a number");
            return n.SlowBuffer(e)
        }
    }, function (e, t) {
        "function" == typeof Object.create ? e.exports = function (e, t) {
            e.super_ = t, e.prototype = Object.create(t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            })
        } : e.exports = function (e, t) {
            e.super_ = t;
            var r = function () {};
            r.prototype = t.prototype, e.prototype = new r, e.prototype.constructor = e
        }
    }, function (e, t) {
        e.exports = function (e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }, e.exports.default = e.exports, e.exports.__esModule = !0
    }, function (e, t) {
        e.exports = function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }, e.exports.default = e.exports, e.exports.__esModule = !0
    }, function (e, t, r) {
        (function (e) {
            ! function (e, t) {
                "use strict";

                function n(e, t) {
                    if (!e) throw new Error(t || "Assertion failed")
                }

                function i(e, t) {
                    e.super_ = t;
                    var r = function () {};
                    r.prototype = t.prototype, e.prototype = new r, e.prototype.constructor = e
                }

                function o(e, t, r) {
                    if (o.isBN(e)) return e;
                    this.negative = 0, this.words = null, this.length = 0, this.red = null, null !== e && ("le" !== t && "be" !== t || (r = t, t = 10), this._init(e || 0, t || 10, r || "be"))
                }
                var a;
                "object" == typeof e ? e.exports = o : t.BN = o, o.BN = o, o.wordSize = 26;
                try {
                    a = "undefined" != typeof window && void 0 !== window.Buffer ? window.Buffer : r(144).Buffer
                } catch (e) {}

                function s(e, t) {
                    var r = e.charCodeAt(t);
                    return r >= 65 && r <= 70 ? r - 55 : r >= 97 && r <= 102 ? r - 87 : r - 48 & 15
                }

                function f(e, t, r) {
                    var n = s(e, r);
                    return r - 1 >= t && (n |= s(e, r - 1) << 4), n
                }

                function c(e, t, r, n) {
                    for (var i = 0, o = Math.min(e.length, r), a = t; a < o; a++) {
                        var s = e.charCodeAt(a) - 48;
                        i *= n, i += s >= 49 ? s - 49 + 10 : s >= 17 ? s - 17 + 10 : s
                    }
                    return i
                }
                o.isBN = function (e) {
                    return e instanceof o || null !== e && "object" == typeof e && e.constructor.wordSize === o.wordSize && Array.isArray(e.words)
                }, o.max = function (e, t) {
                    return e.cmp(t) > 0 ? e : t
                }, o.min = function (e, t) {
                    return e.cmp(t) < 0 ? e : t
                }, o.prototype._init = function (e, t, r) {
                    if ("number" == typeof e) return this._initNumber(e, t, r);
                    if ("object" == typeof e) return this._initArray(e, t, r);
                    "hex" === t && (t = 16), n(t === (0 | t) && t >= 2 && t <= 36);
                    var i = 0;
                    "-" === (e = e.toString().replace(/\s+/g, ""))[0] && (i++, this.negative = 1), i < e.length && (16 === t ? this._parseHex(e, i, r) : (this._parseBase(e, t, i), "le" === r && this._initArray(this.toArray(), t, r)))
                }, o.prototype._initNumber = function (e, t, r) {
                    e < 0 && (this.negative = 1, e = -e), e < 67108864 ? (this.words = [67108863 & e], this.length = 1) : e < 4503599627370496 ? (this.words = [67108863 & e, e / 67108864 & 67108863], this.length = 2) : (n(e < 9007199254740992), this.words = [67108863 & e, e / 67108864 & 67108863, 1], this.length = 3), "le" === r && this._initArray(this.toArray(), t, r)
                }, o.prototype._initArray = function (e, t, r) {
                    if (n("number" == typeof e.length), e.length <= 0) return this.words = [0], this.length = 1, this;
                    this.length = Math.ceil(e.length / 3), this.words = new Array(this.length);
                    for (var i = 0; i < this.length; i++) this.words[i] = 0;
                    var o, a, s = 0;
                    if ("be" === r)
                        for (i = e.length - 1, o = 0; i >= 0; i -= 3) a = e[i] | e[i - 1] << 8 | e[i - 2] << 16, this.words[o] |= a << s & 67108863, this.words[o + 1] = a >>> 26 - s & 67108863, (s += 24) >= 26 && (s -= 26, o++);
                    else if ("le" === r)
                        for (i = 0, o = 0; i < e.length; i += 3) a = e[i] | e[i + 1] << 8 | e[i + 2] << 16, this.words[o] |= a << s & 67108863, this.words[o + 1] = a >>> 26 - s & 67108863, (s += 24) >= 26 && (s -= 26, o++);
                    return this.strip()
                }, o.prototype._parseHex = function (e, t, r) {
                    this.length = Math.ceil((e.length - t) / 6), this.words = new Array(this.length);
                    for (var n = 0; n < this.length; n++) this.words[n] = 0;
                    var i, o = 0,
                        a = 0;
                    if ("be" === r)
                        for (n = e.length - 1; n >= t; n -= 2) i = f(e, t, n) << o, this.words[a] |= 67108863 & i, o >= 18 ? (o -= 18, a += 1, this.words[a] |= i >>> 26) : o += 8;
                    else
                        for (n = (e.length - t) % 2 == 0 ? t + 1 : t; n < e.length; n += 2) i = f(e, t, n) << o, this.words[a] |= 67108863 & i, o >= 18 ? (o -= 18, a += 1, this.words[a] |= i >>> 26) : o += 8;
                    this.strip()
                }, o.prototype._parseBase = function (e, t, r) {
                    this.words = [0], this.length = 1;
                    for (var n = 0, i = 1; i <= 67108863; i *= t) n++;
                    n--, i = i / t | 0;
                    for (var o = e.length - r, a = o % n, s = Math.min(o, o - a) + r, f = 0, u = r; u < s; u += n) f = c(e, u, u + n, t), this.imuln(i), this.words[0] + f < 67108864 ? this.words[0] += f : this._iaddn(f);
                    if (0 !== a) {
                        var h = 1;
                        for (f = c(e, u, e.length, t), u = 0; u < a; u++) h *= t;
                        this.imuln(h), this.words[0] + f < 67108864 ? this.words[0] += f : this._iaddn(f)
                    }
                    this.strip()
                }, o.prototype.copy = function (e) {
                    e.words = new Array(this.length);
                    for (var t = 0; t < this.length; t++) e.words[t] = this.words[t];
                    e.length = this.length, e.negative = this.negative, e.red = this.red
                }, o.prototype.clone = function () {
                    var e = new o(null);
                    return this.copy(e), e
                }, o.prototype._expand = function (e) {
                    for (; this.length < e;) this.words[this.length++] = 0;
                    return this
                }, o.prototype.strip = function () {
                    for (; this.length > 1 && 0 === this.words[this.length - 1];) this.length--;
                    return this._normSign()
                }, o.prototype._normSign = function () {
                    return 1 === this.length && 0 === this.words[0] && (this.negative = 0), this
                }, o.prototype.inspect = function () {
                    return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">"
                };
                var u = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"],
                    h = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
                    d = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];

                function l(e, t, r) {
                    r.negative = t.negative ^ e.negative;
                    var n = e.length + t.length | 0;
                    r.length = n, n = n - 1 | 0;
                    var i = 0 | e.words[0],
                        o = 0 | t.words[0],
                        a = i * o,
                        s = 67108863 & a,
                        f = a / 67108864 | 0;
                    r.words[0] = s;
                    for (var c = 1; c < n; c++) {
                        for (var u = f >>> 26, h = 67108863 & f, d = Math.min(c, t.length - 1), l = Math.max(0, c - e.length + 1); l <= d; l++) {
                            var p = c - l | 0;
                            u += (a = (i = 0 | e.words[p]) * (o = 0 | t.words[l]) + h) / 67108864 | 0, h = 67108863 & a
                        }
                        r.words[c] = 0 | h, f = 0 | u
                    }
                    return 0 !== f ? r.words[c] = 0 | f : r.length--, r.strip()
                }
                o.prototype.toString = function (e, t) {
                    var r;
                    if (e = e || 10, t = 0 | t || 1, 16 === e || "hex" === e) {
                        r = "";
                        for (var i = 0, o = 0, a = 0; a < this.length; a++) {
                            var s = this.words[a],
                                f = (16777215 & (s << i | o)).toString(16);
                            r = 0 !== (o = s >>> 24 - i & 16777215) || a !== this.length - 1 ? u[6 - f.length] + f + r : f + r, (i += 2) >= 26 && (i -= 26, a--)
                        }
                        for (0 !== o && (r = o.toString(16) + r); r.length % t != 0;) r = "0" + r;
                        return 0 !== this.negative && (r = "-" + r), r
                    }
                    if (e === (0 | e) && e >= 2 && e <= 36) {
                        var c = h[e],
                            l = d[e];
                        r = "";
                        var p = this.clone();
                        for (p.negative = 0; !p.isZero();) {
                            var b = p.modn(l).toString(e);
                            r = (p = p.idivn(l)).isZero() ? b + r : u[c - b.length] + b + r
                        }
                        for (this.isZero() && (r = "0" + r); r.length % t != 0;) r = "0" + r;
                        return 0 !== this.negative && (r = "-" + r), r
                    }
                    n(!1, "Base should be between 2 and 36")
                }, o.prototype.toNumber = function () {
                    var e = this.words[0];
                    return 2 === this.length ? e += 67108864 * this.words[1] : 3 === this.length && 1 === this.words[2] ? e += 4503599627370496 + 67108864 * this.words[1] : this.length > 2 && n(!1, "Number can only safely store up to 53 bits"), 0 !== this.negative ? -e : e
                }, o.prototype.toJSON = function () {
                    return this.toString(16)
                }, o.prototype.toBuffer = function (e, t) {
                    return n(void 0 !== a), this.toArrayLike(a, e, t)
                }, o.prototype.toArray = function (e, t) {
                    return this.toArrayLike(Array, e, t)
                }, o.prototype.toArrayLike = function (e, t, r) {
                    var i = this.byteLength(),
                        o = r || Math.max(1, i);
                    n(i <= o, "byte array longer than desired length"), n(o > 0, "Requested array length <= 0"), this.strip();
                    var a, s, f = "le" === t,
                        c = new e(o),
                        u = this.clone();
                    if (f) {
                        for (s = 0; !u.isZero(); s++) a = u.andln(255), u.iushrn(8), c[s] = a;
                        for (; s < o; s++) c[s] = 0
                    } else {
                        for (s = 0; s < o - i; s++) c[s] = 0;
                        for (s = 0; !u.isZero(); s++) a = u.andln(255), u.iushrn(8), c[o - s - 1] = a
                    }
                    return c
                }, Math.clz32 ? o.prototype._countBits = function (e) {
                    return 32 - Math.clz32(e)
                } : o.prototype._countBits = function (e) {
                    var t = e,
                        r = 0;
                    return t >= 4096 && (r += 13, t >>>= 13), t >= 64 && (r += 7, t >>>= 7), t >= 8 && (r += 4, t >>>= 4), t >= 2 && (r += 2, t >>>= 2), r + t
                }, o.prototype._zeroBits = function (e) {
                    if (0 === e) return 26;
                    var t = e,
                        r = 0;
                    return 0 == (8191 & t) && (r += 13, t >>>= 13), 0 == (127 & t) && (r += 7, t >>>= 7), 0 == (15 & t) && (r += 4, t >>>= 4), 0 == (3 & t) && (r += 2, t >>>= 2), 0 == (1 & t) && r++, r
                }, o.prototype.bitLength = function () {
                    var e = this.words[this.length - 1],
                        t = this._countBits(e);
                    return 26 * (this.length - 1) + t
                }, o.prototype.zeroBits = function () {
                    if (this.isZero()) return 0;
                    for (var e = 0, t = 0; t < this.length; t++) {
                        var r = this._zeroBits(this.words[t]);
                        if (e += r, 26 !== r) break
                    }
                    return e
                }, o.prototype.byteLength = function () {
                    return Math.ceil(this.bitLength() / 8)
                }, o.prototype.toTwos = function (e) {
                    return 0 !== this.negative ? this.abs().inotn(e).iaddn(1) : this.clone()
                }, o.prototype.fromTwos = function (e) {
                    return this.testn(e - 1) ? this.notn(e).iaddn(1).ineg() : this.clone()
                }, o.prototype.isNeg = function () {
                    return 0 !== this.negative
                }, o.prototype.neg = function () {
                    return this.clone().ineg()
                }, o.prototype.ineg = function () {
                    return this.isZero() || (this.negative ^= 1), this
                }, o.prototype.iuor = function (e) {
                    for (; this.length < e.length;) this.words[this.length++] = 0;
                    for (var t = 0; t < e.length; t++) this.words[t] = this.words[t] | e.words[t];
                    return this.strip()
                }, o.prototype.ior = function (e) {
                    return n(0 == (this.negative | e.negative)), this.iuor(e)
                }, o.prototype.or = function (e) {
                    return this.length > e.length ? this.clone().ior(e) : e.clone().ior(this)
                }, o.prototype.uor = function (e) {
                    return this.length > e.length ? this.clone().iuor(e) : e.clone().iuor(this)
                }, o.prototype.iuand = function (e) {
                    var t;
                    t = this.length > e.length ? e : this;
                    for (var r = 0; r < t.length; r++) this.words[r] = this.words[r] & e.words[r];
                    return this.length = t.length, this.strip()
                }, o.prototype.iand = function (e) {
                    return n(0 == (this.negative | e.negative)), this.iuand(e)
                }, o.prototype.and = function (e) {
                    return this.length > e.length ? this.clone().iand(e) : e.clone().iand(this)
                }, o.prototype.uand = function (e) {
                    return this.length > e.length ? this.clone().iuand(e) : e.clone().iuand(this)
                }, o.prototype.iuxor = function (e) {
                    var t, r;
                    this.length > e.length ? (t = this, r = e) : (t = e, r = this);
                    for (var n = 0; n < r.length; n++) this.words[n] = t.words[n] ^ r.words[n];
                    if (this !== t)
                        for (; n < t.length; n++) this.words[n] = t.words[n];
                    return this.length = t.length, this.strip()
                }, o.prototype.ixor = function (e) {
                    return n(0 == (this.negative | e.negative)), this.iuxor(e)
                }, o.prototype.xor = function (e) {
                    return this.length > e.length ? this.clone().ixor(e) : e.clone().ixor(this)
                }, o.prototype.uxor = function (e) {
                    return this.length > e.length ? this.clone().iuxor(e) : e.clone().iuxor(this)
                }, o.prototype.inotn = function (e) {
                    n("number" == typeof e && e >= 0);
                    var t = 0 | Math.ceil(e / 26),
                        r = e % 26;
                    this._expand(t), r > 0 && t--;
                    for (var i = 0; i < t; i++) this.words[i] = 67108863 & ~this.words[i];
                    return r > 0 && (this.words[i] = ~this.words[i] & 67108863 >> 26 - r), this.strip()
                }, o.prototype.notn = function (e) {
                    return this.clone().inotn(e)
                }, o.prototype.setn = function (e, t) {
                    n("number" == typeof e && e >= 0);
                    var r = e / 26 | 0,
                        i = e % 26;
                    return this._expand(r + 1), this.words[r] = t ? this.words[r] | 1 << i : this.words[r] & ~(1 << i), this.strip()
                }, o.prototype.iadd = function (e) {
                    var t, r, n;
                    if (0 !== this.negative && 0 === e.negative) return this.negative = 0, t = this.isub(e), this.negative ^= 1, this._normSign();
                    if (0 === this.negative && 0 !== e.negative) return e.negative = 0, t = this.isub(e), e.negative = 1, t._normSign();
                    this.length > e.length ? (r = this, n = e) : (r = e, n = this);
                    for (var i = 0, o = 0; o < n.length; o++) t = (0 | r.words[o]) + (0 | n.words[o]) + i, this.words[o] = 67108863 & t, i = t >>> 26;
                    for (; 0 !== i && o < r.length; o++) t = (0 | r.words[o]) + i, this.words[o] = 67108863 & t, i = t >>> 26;
                    if (this.length = r.length, 0 !== i) this.words[this.length] = i, this.length++;
                    else if (r !== this)
                        for (; o < r.length; o++) this.words[o] = r.words[o];
                    return this
                }, o.prototype.add = function (e) {
                    var t;
                    return 0 !== e.negative && 0 === this.negative ? (e.negative = 0, t = this.sub(e), e.negative ^= 1, t) : 0 === e.negative && 0 !== this.negative ? (this.negative = 0, t = e.sub(this), this.negative = 1, t) : this.length > e.length ? this.clone().iadd(e) : e.clone().iadd(this)
                }, o.prototype.isub = function (e) {
                    if (0 !== e.negative) {
                        e.negative = 0;
                        var t = this.iadd(e);
                        return e.negative = 1, t._normSign()
                    }
                    if (0 !== this.negative) return this.negative = 0, this.iadd(e), this.negative = 1, this._normSign();
                    var r, n, i = this.cmp(e);
                    if (0 === i) return this.negative = 0, this.length = 1, this.words[0] = 0, this;
                    i > 0 ? (r = this, n = e) : (r = e, n = this);
                    for (var o = 0, a = 0; a < n.length; a++) o = (t = (0 | r.words[a]) - (0 | n.words[a]) + o) >> 26, this.words[a] = 67108863 & t;
                    for (; 0 !== o && a < r.length; a++) o = (t = (0 | r.words[a]) + o) >> 26, this.words[a] = 67108863 & t;
                    if (0 === o && a < r.length && r !== this)
                        for (; a < r.length; a++) this.words[a] = r.words[a];
                    return this.length = Math.max(this.length, a), r !== this && (this.negative = 1), this.strip()
                }, o.prototype.sub = function (e) {
                    return this.clone().isub(e)
                };
                var p = function (e, t, r) {
                    var n, i, o, a = e.words,
                        s = t.words,
                        f = r.words,
                        c = 0,
                        u = 0 | a[0],
                        h = 8191 & u,
                        d = u >>> 13,
                        l = 0 | a[1],
                        p = 8191 & l,
                        b = l >>> 13,
                        y = 0 | a[2],
                        v = 8191 & y,
                        g = y >>> 13,
                        m = 0 | a[3],
                        _ = 8191 & m,
                        w = m >>> 13,
                        E = 0 | a[4],
                        S = 8191 & E,
                        A = E >>> 13,
                        I = 0 | a[5],
                        k = 8191 & I,
                        M = I >>> 13,
                        x = 0 | a[6],
                        B = 8191 & x,
                        T = x >>> 13,
                        P = 0 | a[7],
                        L = 8191 & P,
                        R = P >>> 13,
                        C = 0 | a[8],
                        N = 8191 & C,
                        O = C >>> 13,
                        D = 0 | a[9],
                        j = 8191 & D,
                        U = D >>> 13,
                        K = 0 | s[0],
                        q = 8191 & K,
                        z = K >>> 13,
                        H = 0 | s[1],
                        V = 8191 & H,
                        Y = H >>> 13,
                        F = 0 | s[2],
                        G = 8191 & F,
                        W = F >>> 13,
                        X = 0 | s[3],
                        Z = 8191 & X,
                        J = X >>> 13,
                        $ = 0 | s[4],
                        Q = 8191 & $,
                        ee = $ >>> 13,
                        te = 0 | s[5],
                        re = 8191 & te,
                        ne = te >>> 13,
                        ie = 0 | s[6],
                        oe = 8191 & ie,
                        ae = ie >>> 13,
                        se = 0 | s[7],
                        fe = 8191 & se,
                        ce = se >>> 13,
                        ue = 0 | s[8],
                        he = 8191 & ue,
                        de = ue >>> 13,
                        le = 0 | s[9],
                        pe = 8191 & le,
                        be = le >>> 13;
                    r.negative = e.negative ^ t.negative, r.length = 19;
                    var ye = (c + (n = Math.imul(h, q)) | 0) + ((8191 & (i = (i = Math.imul(h, z)) + Math.imul(d, q) | 0)) << 13) | 0;
                    c = ((o = Math.imul(d, z)) + (i >>> 13) | 0) + (ye >>> 26) | 0, ye &= 67108863, n = Math.imul(p, q), i = (i = Math.imul(p, z)) + Math.imul(b, q) | 0, o = Math.imul(b, z);
                    var ve = (c + (n = n + Math.imul(h, V) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, Y) | 0) + Math.imul(d, V) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(d, Y) | 0) + (i >>> 13) | 0) + (ve >>> 26) | 0, ve &= 67108863, n = Math.imul(v, q), i = (i = Math.imul(v, z)) + Math.imul(g, q) | 0, o = Math.imul(g, z), n = n + Math.imul(p, V) | 0, i = (i = i + Math.imul(p, Y) | 0) + Math.imul(b, V) | 0, o = o + Math.imul(b, Y) | 0;
                    var ge = (c + (n = n + Math.imul(h, G) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, W) | 0) + Math.imul(d, G) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(d, W) | 0) + (i >>> 13) | 0) + (ge >>> 26) | 0, ge &= 67108863, n = Math.imul(_, q), i = (i = Math.imul(_, z)) + Math.imul(w, q) | 0, o = Math.imul(w, z), n = n + Math.imul(v, V) | 0, i = (i = i + Math.imul(v, Y) | 0) + Math.imul(g, V) | 0, o = o + Math.imul(g, Y) | 0, n = n + Math.imul(p, G) | 0, i = (i = i + Math.imul(p, W) | 0) + Math.imul(b, G) | 0, o = o + Math.imul(b, W) | 0;
                    var me = (c + (n = n + Math.imul(h, Z) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, J) | 0) + Math.imul(d, Z) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(d, J) | 0) + (i >>> 13) | 0) + (me >>> 26) | 0, me &= 67108863, n = Math.imul(S, q), i = (i = Math.imul(S, z)) + Math.imul(A, q) | 0, o = Math.imul(A, z), n = n + Math.imul(_, V) | 0, i = (i = i + Math.imul(_, Y) | 0) + Math.imul(w, V) | 0, o = o + Math.imul(w, Y) | 0, n = n + Math.imul(v, G) | 0, i = (i = i + Math.imul(v, W) | 0) + Math.imul(g, G) | 0, o = o + Math.imul(g, W) | 0, n = n + Math.imul(p, Z) | 0, i = (i = i + Math.imul(p, J) | 0) + Math.imul(b, Z) | 0, o = o + Math.imul(b, J) | 0;
                    var _e = (c + (n = n + Math.imul(h, Q) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, ee) | 0) + Math.imul(d, Q) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(d, ee) | 0) + (i >>> 13) | 0) + (_e >>> 26) | 0, _e &= 67108863, n = Math.imul(k, q), i = (i = Math.imul(k, z)) + Math.imul(M, q) | 0, o = Math.imul(M, z), n = n + Math.imul(S, V) | 0, i = (i = i + Math.imul(S, Y) | 0) + Math.imul(A, V) | 0, o = o + Math.imul(A, Y) | 0, n = n + Math.imul(_, G) | 0, i = (i = i + Math.imul(_, W) | 0) + Math.imul(w, G) | 0, o = o + Math.imul(w, W) | 0, n = n + Math.imul(v, Z) | 0, i = (i = i + Math.imul(v, J) | 0) + Math.imul(g, Z) | 0, o = o + Math.imul(g, J) | 0, n = n + Math.imul(p, Q) | 0, i = (i = i + Math.imul(p, ee) | 0) + Math.imul(b, Q) | 0, o = o + Math.imul(b, ee) | 0;
                    var we = (c + (n = n + Math.imul(h, re) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, ne) | 0) + Math.imul(d, re) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(d, ne) | 0) + (i >>> 13) | 0) + (we >>> 26) | 0, we &= 67108863, n = Math.imul(B, q), i = (i = Math.imul(B, z)) + Math.imul(T, q) | 0, o = Math.imul(T, z), n = n + Math.imul(k, V) | 0, i = (i = i + Math.imul(k, Y) | 0) + Math.imul(M, V) | 0, o = o + Math.imul(M, Y) | 0, n = n + Math.imul(S, G) | 0, i = (i = i + Math.imul(S, W) | 0) + Math.imul(A, G) | 0, o = o + Math.imul(A, W) | 0, n = n + Math.imul(_, Z) | 0, i = (i = i + Math.imul(_, J) | 0) + Math.imul(w, Z) | 0, o = o + Math.imul(w, J) | 0, n = n + Math.imul(v, Q) | 0, i = (i = i + Math.imul(v, ee) | 0) + Math.imul(g, Q) | 0, o = o + Math.imul(g, ee) | 0, n = n + Math.imul(p, re) | 0, i = (i = i + Math.imul(p, ne) | 0) + Math.imul(b, re) | 0, o = o + Math.imul(b, ne) | 0;
                    var Ee = (c + (n = n + Math.imul(h, oe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, ae) | 0) + Math.imul(d, oe) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(d, ae) | 0) + (i >>> 13) | 0) + (Ee >>> 26) | 0, Ee &= 67108863, n = Math.imul(L, q), i = (i = Math.imul(L, z)) + Math.imul(R, q) | 0, o = Math.imul(R, z), n = n + Math.imul(B, V) | 0, i = (i = i + Math.imul(B, Y) | 0) + Math.imul(T, V) | 0, o = o + Math.imul(T, Y) | 0, n = n + Math.imul(k, G) | 0, i = (i = i + Math.imul(k, W) | 0) + Math.imul(M, G) | 0, o = o + Math.imul(M, W) | 0, n = n + Math.imul(S, Z) | 0, i = (i = i + Math.imul(S, J) | 0) + Math.imul(A, Z) | 0, o = o + Math.imul(A, J) | 0, n = n + Math.imul(_, Q) | 0, i = (i = i + Math.imul(_, ee) | 0) + Math.imul(w, Q) | 0, o = o + Math.imul(w, ee) | 0, n = n + Math.imul(v, re) | 0, i = (i = i + Math.imul(v, ne) | 0) + Math.imul(g, re) | 0, o = o + Math.imul(g, ne) | 0, n = n + Math.imul(p, oe) | 0, i = (i = i + Math.imul(p, ae) | 0) + Math.imul(b, oe) | 0, o = o + Math.imul(b, ae) | 0;
                    var Se = (c + (n = n + Math.imul(h, fe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, ce) | 0) + Math.imul(d, fe) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(d, ce) | 0) + (i >>> 13) | 0) + (Se >>> 26) | 0, Se &= 67108863, n = Math.imul(N, q), i = (i = Math.imul(N, z)) + Math.imul(O, q) | 0, o = Math.imul(O, z), n = n + Math.imul(L, V) | 0, i = (i = i + Math.imul(L, Y) | 0) + Math.imul(R, V) | 0, o = o + Math.imul(R, Y) | 0, n = n + Math.imul(B, G) | 0, i = (i = i + Math.imul(B, W) | 0) + Math.imul(T, G) | 0, o = o + Math.imul(T, W) | 0, n = n + Math.imul(k, Z) | 0, i = (i = i + Math.imul(k, J) | 0) + Math.imul(M, Z) | 0, o = o + Math.imul(M, J) | 0, n = n + Math.imul(S, Q) | 0, i = (i = i + Math.imul(S, ee) | 0) + Math.imul(A, Q) | 0, o = o + Math.imul(A, ee) | 0, n = n + Math.imul(_, re) | 0, i = (i = i + Math.imul(_, ne) | 0) + Math.imul(w, re) | 0, o = o + Math.imul(w, ne) | 0, n = n + Math.imul(v, oe) | 0, i = (i = i + Math.imul(v, ae) | 0) + Math.imul(g, oe) | 0, o = o + Math.imul(g, ae) | 0, n = n + Math.imul(p, fe) | 0, i = (i = i + Math.imul(p, ce) | 0) + Math.imul(b, fe) | 0, o = o + Math.imul(b, ce) | 0;
                    var Ae = (c + (n = n + Math.imul(h, he) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, de) | 0) + Math.imul(d, he) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(d, de) | 0) + (i >>> 13) | 0) + (Ae >>> 26) | 0, Ae &= 67108863, n = Math.imul(j, q), i = (i = Math.imul(j, z)) + Math.imul(U, q) | 0, o = Math.imul(U, z), n = n + Math.imul(N, V) | 0, i = (i = i + Math.imul(N, Y) | 0) + Math.imul(O, V) | 0, o = o + Math.imul(O, Y) | 0, n = n + Math.imul(L, G) | 0, i = (i = i + Math.imul(L, W) | 0) + Math.imul(R, G) | 0, o = o + Math.imul(R, W) | 0, n = n + Math.imul(B, Z) | 0, i = (i = i + Math.imul(B, J) | 0) + Math.imul(T, Z) | 0, o = o + Math.imul(T, J) | 0, n = n + Math.imul(k, Q) | 0, i = (i = i + Math.imul(k, ee) | 0) + Math.imul(M, Q) | 0, o = o + Math.imul(M, ee) | 0, n = n + Math.imul(S, re) | 0, i = (i = i + Math.imul(S, ne) | 0) + Math.imul(A, re) | 0, o = o + Math.imul(A, ne) | 0, n = n + Math.imul(_, oe) | 0, i = (i = i + Math.imul(_, ae) | 0) + Math.imul(w, oe) | 0, o = o + Math.imul(w, ae) | 0, n = n + Math.imul(v, fe) | 0, i = (i = i + Math.imul(v, ce) | 0) + Math.imul(g, fe) | 0, o = o + Math.imul(g, ce) | 0, n = n + Math.imul(p, he) | 0, i = (i = i + Math.imul(p, de) | 0) + Math.imul(b, he) | 0, o = o + Math.imul(b, de) | 0;
                    var Ie = (c + (n = n + Math.imul(h, pe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, be) | 0) + Math.imul(d, pe) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(d, be) | 0) + (i >>> 13) | 0) + (Ie >>> 26) | 0, Ie &= 67108863, n = Math.imul(j, V), i = (i = Math.imul(j, Y)) + Math.imul(U, V) | 0, o = Math.imul(U, Y), n = n + Math.imul(N, G) | 0, i = (i = i + Math.imul(N, W) | 0) + Math.imul(O, G) | 0, o = o + Math.imul(O, W) | 0, n = n + Math.imul(L, Z) | 0, i = (i = i + Math.imul(L, J) | 0) + Math.imul(R, Z) | 0, o = o + Math.imul(R, J) | 0, n = n + Math.imul(B, Q) | 0, i = (i = i + Math.imul(B, ee) | 0) + Math.imul(T, Q) | 0, o = o + Math.imul(T, ee) | 0, n = n + Math.imul(k, re) | 0, i = (i = i + Math.imul(k, ne) | 0) + Math.imul(M, re) | 0, o = o + Math.imul(M, ne) | 0, n = n + Math.imul(S, oe) | 0, i = (i = i + Math.imul(S, ae) | 0) + Math.imul(A, oe) | 0, o = o + Math.imul(A, ae) | 0, n = n + Math.imul(_, fe) | 0, i = (i = i + Math.imul(_, ce) | 0) + Math.imul(w, fe) | 0, o = o + Math.imul(w, ce) | 0, n = n + Math.imul(v, he) | 0, i = (i = i + Math.imul(v, de) | 0) + Math.imul(g, he) | 0, o = o + Math.imul(g, de) | 0;
                    var ke = (c + (n = n + Math.imul(p, pe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(p, be) | 0) + Math.imul(b, pe) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(b, be) | 0) + (i >>> 13) | 0) + (ke >>> 26) | 0, ke &= 67108863, n = Math.imul(j, G), i = (i = Math.imul(j, W)) + Math.imul(U, G) | 0, o = Math.imul(U, W), n = n + Math.imul(N, Z) | 0, i = (i = i + Math.imul(N, J) | 0) + Math.imul(O, Z) | 0, o = o + Math.imul(O, J) | 0, n = n + Math.imul(L, Q) | 0, i = (i = i + Math.imul(L, ee) | 0) + Math.imul(R, Q) | 0, o = o + Math.imul(R, ee) | 0, n = n + Math.imul(B, re) | 0, i = (i = i + Math.imul(B, ne) | 0) + Math.imul(T, re) | 0, o = o + Math.imul(T, ne) | 0, n = n + Math.imul(k, oe) | 0, i = (i = i + Math.imul(k, ae) | 0) + Math.imul(M, oe) | 0, o = o + Math.imul(M, ae) | 0, n = n + Math.imul(S, fe) | 0, i = (i = i + Math.imul(S, ce) | 0) + Math.imul(A, fe) | 0, o = o + Math.imul(A, ce) | 0, n = n + Math.imul(_, he) | 0, i = (i = i + Math.imul(_, de) | 0) + Math.imul(w, he) | 0, o = o + Math.imul(w, de) | 0;
                    var Me = (c + (n = n + Math.imul(v, pe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(v, be) | 0) + Math.imul(g, pe) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(g, be) | 0) + (i >>> 13) | 0) + (Me >>> 26) | 0, Me &= 67108863, n = Math.imul(j, Z), i = (i = Math.imul(j, J)) + Math.imul(U, Z) | 0, o = Math.imul(U, J), n = n + Math.imul(N, Q) | 0, i = (i = i + Math.imul(N, ee) | 0) + Math.imul(O, Q) | 0, o = o + Math.imul(O, ee) | 0, n = n + Math.imul(L, re) | 0, i = (i = i + Math.imul(L, ne) | 0) + Math.imul(R, re) | 0, o = o + Math.imul(R, ne) | 0, n = n + Math.imul(B, oe) | 0, i = (i = i + Math.imul(B, ae) | 0) + Math.imul(T, oe) | 0, o = o + Math.imul(T, ae) | 0, n = n + Math.imul(k, fe) | 0, i = (i = i + Math.imul(k, ce) | 0) + Math.imul(M, fe) | 0, o = o + Math.imul(M, ce) | 0, n = n + Math.imul(S, he) | 0, i = (i = i + Math.imul(S, de) | 0) + Math.imul(A, he) | 0, o = o + Math.imul(A, de) | 0;
                    var xe = (c + (n = n + Math.imul(_, pe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(_, be) | 0) + Math.imul(w, pe) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(w, be) | 0) + (i >>> 13) | 0) + (xe >>> 26) | 0, xe &= 67108863, n = Math.imul(j, Q), i = (i = Math.imul(j, ee)) + Math.imul(U, Q) | 0, o = Math.imul(U, ee), n = n + Math.imul(N, re) | 0, i = (i = i + Math.imul(N, ne) | 0) + Math.imul(O, re) | 0, o = o + Math.imul(O, ne) | 0, n = n + Math.imul(L, oe) | 0, i = (i = i + Math.imul(L, ae) | 0) + Math.imul(R, oe) | 0, o = o + Math.imul(R, ae) | 0, n = n + Math.imul(B, fe) | 0, i = (i = i + Math.imul(B, ce) | 0) + Math.imul(T, fe) | 0, o = o + Math.imul(T, ce) | 0, n = n + Math.imul(k, he) | 0, i = (i = i + Math.imul(k, de) | 0) + Math.imul(M, he) | 0, o = o + Math.imul(M, de) | 0;
                    var Be = (c + (n = n + Math.imul(S, pe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(S, be) | 0) + Math.imul(A, pe) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(A, be) | 0) + (i >>> 13) | 0) + (Be >>> 26) | 0, Be &= 67108863, n = Math.imul(j, re), i = (i = Math.imul(j, ne)) + Math.imul(U, re) | 0, o = Math.imul(U, ne), n = n + Math.imul(N, oe) | 0, i = (i = i + Math.imul(N, ae) | 0) + Math.imul(O, oe) | 0, o = o + Math.imul(O, ae) | 0, n = n + Math.imul(L, fe) | 0, i = (i = i + Math.imul(L, ce) | 0) + Math.imul(R, fe) | 0, o = o + Math.imul(R, ce) | 0, n = n + Math.imul(B, he) | 0, i = (i = i + Math.imul(B, de) | 0) + Math.imul(T, he) | 0, o = o + Math.imul(T, de) | 0;
                    var Te = (c + (n = n + Math.imul(k, pe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(k, be) | 0) + Math.imul(M, pe) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(M, be) | 0) + (i >>> 13) | 0) + (Te >>> 26) | 0, Te &= 67108863, n = Math.imul(j, oe), i = (i = Math.imul(j, ae)) + Math.imul(U, oe) | 0, o = Math.imul(U, ae), n = n + Math.imul(N, fe) | 0, i = (i = i + Math.imul(N, ce) | 0) + Math.imul(O, fe) | 0, o = o + Math.imul(O, ce) | 0, n = n + Math.imul(L, he) | 0, i = (i = i + Math.imul(L, de) | 0) + Math.imul(R, he) | 0, o = o + Math.imul(R, de) | 0;
                    var Pe = (c + (n = n + Math.imul(B, pe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(B, be) | 0) + Math.imul(T, pe) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(T, be) | 0) + (i >>> 13) | 0) + (Pe >>> 26) | 0, Pe &= 67108863, n = Math.imul(j, fe), i = (i = Math.imul(j, ce)) + Math.imul(U, fe) | 0, o = Math.imul(U, ce), n = n + Math.imul(N, he) | 0, i = (i = i + Math.imul(N, de) | 0) + Math.imul(O, he) | 0, o = o + Math.imul(O, de) | 0;
                    var Le = (c + (n = n + Math.imul(L, pe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(L, be) | 0) + Math.imul(R, pe) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(R, be) | 0) + (i >>> 13) | 0) + (Le >>> 26) | 0, Le &= 67108863, n = Math.imul(j, he), i = (i = Math.imul(j, de)) + Math.imul(U, he) | 0, o = Math.imul(U, de);
                    var Re = (c + (n = n + Math.imul(N, pe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(N, be) | 0) + Math.imul(O, pe) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(O, be) | 0) + (i >>> 13) | 0) + (Re >>> 26) | 0, Re &= 67108863;
                    var Ce = (c + (n = Math.imul(j, pe)) | 0) + ((8191 & (i = (i = Math.imul(j, be)) + Math.imul(U, pe) | 0)) << 13) | 0;
                    return c = ((o = Math.imul(U, be)) + (i >>> 13) | 0) + (Ce >>> 26) | 0, Ce &= 67108863, f[0] = ye, f[1] = ve, f[2] = ge, f[3] = me, f[4] = _e, f[5] = we, f[6] = Ee, f[7] = Se, f[8] = Ae, f[9] = Ie, f[10] = ke, f[11] = Me, f[12] = xe, f[13] = Be, f[14] = Te, f[15] = Pe, f[16] = Le, f[17] = Re, f[18] = Ce, 0 !== c && (f[19] = c, r.length++), r
                };

                function b(e, t, r) {
                    return (new y).mulp(e, t, r)
                }

                function y(e, t) {
                    this.x = e, this.y = t
                }
                Math.imul || (p = l), o.prototype.mulTo = function (e, t) {
                    var r = this.length + e.length;
                    return 10 === this.length && 10 === e.length ? p(this, e, t) : r < 63 ? l(this, e, t) : r < 1024 ? function (e, t, r) {
                        r.negative = t.negative ^ e.negative, r.length = e.length + t.length;
                        for (var n = 0, i = 0, o = 0; o < r.length - 1; o++) {
                            var a = i;
                            i = 0;
                            for (var s = 67108863 & n, f = Math.min(o, t.length - 1), c = Math.max(0, o - e.length + 1); c <= f; c++) {
                                var u = o - c,
                                    h = (0 | e.words[u]) * (0 | t.words[c]),
                                    d = 67108863 & h;
                                s = 67108863 & (d = d + s | 0), i += (a = (a = a + (h / 67108864 | 0) | 0) + (d >>> 26) | 0) >>> 26, a &= 67108863
                            }
                            r.words[o] = s, n = a, a = i
                        }
                        return 0 !== n ? r.words[o] = n : r.length--, r.strip()
                    }(this, e, t) : b(this, e, t)
                }, y.prototype.makeRBT = function (e) {
                    for (var t = new Array(e), r = o.prototype._countBits(e) - 1, n = 0; n < e; n++) t[n] = this.revBin(n, r, e);
                    return t
                }, y.prototype.revBin = function (e, t, r) {
                    if (0 === e || e === r - 1) return e;
                    for (var n = 0, i = 0; i < t; i++) n |= (1 & e) << t - i - 1, e >>= 1;
                    return n
                }, y.prototype.permute = function (e, t, r, n, i, o) {
                    for (var a = 0; a < o; a++) n[a] = t[e[a]], i[a] = r[e[a]]
                }, y.prototype.transform = function (e, t, r, n, i, o) {
                    this.permute(o, e, t, r, n, i);
                    for (var a = 1; a < i; a <<= 1)
                        for (var s = a << 1, f = Math.cos(2 * Math.PI / s), c = Math.sin(2 * Math.PI / s), u = 0; u < i; u += s)
                            for (var h = f, d = c, l = 0; l < a; l++) {
                                var p = r[u + l],
                                    b = n[u + l],
                                    y = r[u + l + a],
                                    v = n[u + l + a],
                                    g = h * y - d * v;
                                v = h * v + d * y, y = g, r[u + l] = p + y, n[u + l] = b + v, r[u + l + a] = p - y, n[u + l + a] = b - v, l !== s && (g = f * h - c * d, d = f * d + c * h, h = g)
                            }
                }, y.prototype.guessLen13b = function (e, t) {
                    var r = 1 | Math.max(t, e),
                        n = 1 & r,
                        i = 0;
                    for (r = r / 2 | 0; r; r >>>= 1) i++;
                    return 1 << i + 1 + n
                }, y.prototype.conjugate = function (e, t, r) {
                    if (!(r <= 1))
                        for (var n = 0; n < r / 2; n++) {
                            var i = e[n];
                            e[n] = e[r - n - 1], e[r - n - 1] = i, i = t[n], t[n] = -t[r - n - 1], t[r - n - 1] = -i
                        }
                }, y.prototype.normalize13b = function (e, t) {
                    for (var r = 0, n = 0; n < t / 2; n++) {
                        var i = 8192 * Math.round(e[2 * n + 1] / t) + Math.round(e[2 * n] / t) + r;
                        e[n] = 67108863 & i, r = i < 67108864 ? 0 : i / 67108864 | 0
                    }
                    return e
                }, y.prototype.convert13b = function (e, t, r, i) {
                    for (var o = 0, a = 0; a < t; a++) o += 0 | e[a], r[2 * a] = 8191 & o, o >>>= 13, r[2 * a + 1] = 8191 & o, o >>>= 13;
                    for (a = 2 * t; a < i; ++a) r[a] = 0;
                    n(0 === o), n(0 == (-8192 & o))
                }, y.prototype.stub = function (e) {
                    for (var t = new Array(e), r = 0; r < e; r++) t[r] = 0;
                    return t
                }, y.prototype.mulp = function (e, t, r) {
                    var n = 2 * this.guessLen13b(e.length, t.length),
                        i = this.makeRBT(n),
                        o = this.stub(n),
                        a = new Array(n),
                        s = new Array(n),
                        f = new Array(n),
                        c = new Array(n),
                        u = new Array(n),
                        h = new Array(n),
                        d = r.words;
                    d.length = n, this.convert13b(e.words, e.length, a, n), this.convert13b(t.words, t.length, c, n), this.transform(a, o, s, f, n, i), this.transform(c, o, u, h, n, i);
                    for (var l = 0; l < n; l++) {
                        var p = s[l] * u[l] - f[l] * h[l];
                        f[l] = s[l] * h[l] + f[l] * u[l], s[l] = p
                    }
                    return this.conjugate(s, f, n), this.transform(s, f, d, o, n, i), this.conjugate(d, o, n), this.normalize13b(d, n), r.negative = e.negative ^ t.negative, r.length = e.length + t.length, r.strip()
                }, o.prototype.mul = function (e) {
                    var t = new o(null);
                    return t.words = new Array(this.length + e.length), this.mulTo(e, t)
                }, o.prototype.mulf = function (e) {
                    var t = new o(null);
                    return t.words = new Array(this.length + e.length), b(this, e, t)
                }, o.prototype.imul = function (e) {
                    return this.clone().mulTo(e, this)
                }, o.prototype.imuln = function (e) {
                    n("number" == typeof e), n(e < 67108864);
                    for (var t = 0, r = 0; r < this.length; r++) {
                        var i = (0 | this.words[r]) * e,
                            o = (67108863 & i) + (67108863 & t);
                        t >>= 26, t += i / 67108864 | 0, t += o >>> 26, this.words[r] = 67108863 & o
                    }
                    return 0 !== t && (this.words[r] = t, this.length++), this
                }, o.prototype.muln = function (e) {
                    return this.clone().imuln(e)
                }, o.prototype.sqr = function () {
                    return this.mul(this)
                }, o.prototype.isqr = function () {
                    return this.imul(this.clone())
                }, o.prototype.pow = function (e) {
                    var t = function (e) {
                        for (var t = new Array(e.bitLength()), r = 0; r < t.length; r++) {
                            var n = r / 26 | 0,
                                i = r % 26;
                            t[r] = (e.words[n] & 1 << i) >>> i
                        }
                        return t
                    }(e);
                    if (0 === t.length) return new o(1);
                    for (var r = this, n = 0; n < t.length && 0 === t[n]; n++, r = r.sqr());
                    if (++n < t.length)
                        for (var i = r.sqr(); n < t.length; n++, i = i.sqr()) 0 !== t[n] && (r = r.mul(i));
                    return r
                }, o.prototype.iushln = function (e) {
                    n("number" == typeof e && e >= 0);
                    var t, r = e % 26,
                        i = (e - r) / 26,
                        o = 67108863 >>> 26 - r << 26 - r;
                    if (0 !== r) {
                        var a = 0;
                        for (t = 0; t < this.length; t++) {
                            var s = this.words[t] & o,
                                f = (0 | this.words[t]) - s << r;
                            this.words[t] = f | a, a = s >>> 26 - r
                        }
                        a && (this.words[t] = a, this.length++)
                    }
                    if (0 !== i) {
                        for (t = this.length - 1; t >= 0; t--) this.words[t + i] = this.words[t];
                        for (t = 0; t < i; t++) this.words[t] = 0;
                        this.length += i
                    }
                    return this.strip()
                }, o.prototype.ishln = function (e) {
                    return n(0 === this.negative), this.iushln(e)
                }, o.prototype.iushrn = function (e, t, r) {
                    var i;
                    n("number" == typeof e && e >= 0), i = t ? (t - t % 26) / 26 : 0;
                    var o = e % 26,
                        a = Math.min((e - o) / 26, this.length),
                        s = 67108863 ^ 67108863 >>> o << o,
                        f = r;
                    if (i -= a, i = Math.max(0, i), f) {
                        for (var c = 0; c < a; c++) f.words[c] = this.words[c];
                        f.length = a
                    }
                    if (0 === a);
                    else if (this.length > a)
                        for (this.length -= a, c = 0; c < this.length; c++) this.words[c] = this.words[c + a];
                    else this.words[0] = 0, this.length = 1;
                    var u = 0;
                    for (c = this.length - 1; c >= 0 && (0 !== u || c >= i); c--) {
                        var h = 0 | this.words[c];
                        this.words[c] = u << 26 - o | h >>> o, u = h & s
                    }
                    return f && 0 !== u && (f.words[f.length++] = u), 0 === this.length && (this.words[0] = 0, this.length = 1), this.strip()
                }, o.prototype.ishrn = function (e, t, r) {
                    return n(0 === this.negative), this.iushrn(e, t, r)
                }, o.prototype.shln = function (e) {
                    return this.clone().ishln(e)
                }, o.prototype.ushln = function (e) {
                    return this.clone().iushln(e)
                }, o.prototype.shrn = function (e) {
                    return this.clone().ishrn(e)
                }, o.prototype.ushrn = function (e) {
                    return this.clone().iushrn(e)
                }, o.prototype.testn = function (e) {
                    n("number" == typeof e && e >= 0);
                    var t = e % 26,
                        r = (e - t) / 26,
                        i = 1 << t;
                    return !(this.length <= r) && !!(this.words[r] & i)
                }, o.prototype.imaskn = function (e) {
                    n("number" == typeof e && e >= 0);
                    var t = e % 26,
                        r = (e - t) / 26;
                    if (n(0 === this.negative, "imaskn works only with positive numbers"), this.length <= r) return this;
                    if (0 !== t && r++, this.length = Math.min(r, this.length), 0 !== t) {
                        var i = 67108863 ^ 67108863 >>> t << t;
                        this.words[this.length - 1] &= i
                    }
                    return this.strip()
                }, o.prototype.maskn = function (e) {
                    return this.clone().imaskn(e)
                }, o.prototype.iaddn = function (e) {
                    return n("number" == typeof e), n(e < 67108864), e < 0 ? this.isubn(-e) : 0 !== this.negative ? 1 === this.length && (0 | this.words[0]) < e ? (this.words[0] = e - (0 | this.words[0]), this.negative = 0, this) : (this.negative = 0, this.isubn(e), this.negative = 1, this) : this._iaddn(e)
                }, o.prototype._iaddn = function (e) {
                    this.words[0] += e;
                    for (var t = 0; t < this.length && this.words[t] >= 67108864; t++) this.words[t] -= 67108864, t === this.length - 1 ? this.words[t + 1] = 1 : this.words[t + 1]++;
                    return this.length = Math.max(this.length, t + 1), this
                }, o.prototype.isubn = function (e) {
                    if (n("number" == typeof e), n(e < 67108864), e < 0) return this.iaddn(-e);
                    if (0 !== this.negative) return this.negative = 0, this.iaddn(e), this.negative = 1, this;
                    if (this.words[0] -= e, 1 === this.length && this.words[0] < 0) this.words[0] = -this.words[0], this.negative = 1;
                    else
                        for (var t = 0; t < this.length && this.words[t] < 0; t++) this.words[t] += 67108864, this.words[t + 1] -= 1;
                    return this.strip()
                }, o.prototype.addn = function (e) {
                    return this.clone().iaddn(e)
                }, o.prototype.subn = function (e) {
                    return this.clone().isubn(e)
                }, o.prototype.iabs = function () {
                    return this.negative = 0, this
                }, o.prototype.abs = function () {
                    return this.clone().iabs()
                }, o.prototype._ishlnsubmul = function (e, t, r) {
                    var i, o, a = e.length + r;
                    this._expand(a);
                    var s = 0;
                    for (i = 0; i < e.length; i++) {
                        o = (0 | this.words[i + r]) + s;
                        var f = (0 | e.words[i]) * t;
                        s = ((o -= 67108863 & f) >> 26) - (f / 67108864 | 0), this.words[i + r] = 67108863 & o
                    }
                    for (; i < this.length - r; i++) s = (o = (0 | this.words[i + r]) + s) >> 26, this.words[i + r] = 67108863 & o;
                    if (0 === s) return this.strip();
                    for (n(-1 === s), s = 0, i = 0; i < this.length; i++) s = (o = -(0 | this.words[i]) + s) >> 26, this.words[i] = 67108863 & o;
                    return this.negative = 1, this.strip()
                }, o.prototype._wordDiv = function (e, t) {
                    var r = (this.length, e.length),
                        n = this.clone(),
                        i = e,
                        a = 0 | i.words[i.length - 1];
                    0 !== (r = 26 - this._countBits(a)) && (i = i.ushln(r), n.iushln(r), a = 0 | i.words[i.length - 1]);
                    var s, f = n.length - i.length;
                    if ("mod" !== t) {
                        (s = new o(null)).length = f + 1, s.words = new Array(s.length);
                        for (var c = 0; c < s.length; c++) s.words[c] = 0
                    }
                    var u = n.clone()._ishlnsubmul(i, 1, f);
                    0 === u.negative && (n = u, s && (s.words[f] = 1));
                    for (var h = f - 1; h >= 0; h--) {
                        var d = 67108864 * (0 | n.words[i.length + h]) + (0 | n.words[i.length + h - 1]);
                        for (d = Math.min(d / a | 0, 67108863), n._ishlnsubmul(i, d, h); 0 !== n.negative;) d--, n.negative = 0, n._ishlnsubmul(i, 1, h), n.isZero() || (n.negative ^= 1);
                        s && (s.words[h] = d)
                    }
                    return s && s.strip(), n.strip(), "div" !== t && 0 !== r && n.iushrn(r), {
                        div: s || null,
                        mod: n
                    }
                }, o.prototype.divmod = function (e, t, r) {
                    return n(!e.isZero()), this.isZero() ? {
                        div: new o(0),
                        mod: new o(0)
                    } : 0 !== this.negative && 0 === e.negative ? (s = this.neg().divmod(e, t), "mod" !== t && (i = s.div.neg()), "div" !== t && (a = s.mod.neg(), r && 0 !== a.negative && a.iadd(e)), {
                        div: i,
                        mod: a
                    }) : 0 === this.negative && 0 !== e.negative ? (s = this.divmod(e.neg(), t), "mod" !== t && (i = s.div.neg()), {
                        div: i,
                        mod: s.mod
                    }) : 0 != (this.negative & e.negative) ? (s = this.neg().divmod(e.neg(), t), "div" !== t && (a = s.mod.neg(), r && 0 !== a.negative && a.isub(e)), {
                        div: s.div,
                        mod: a
                    }) : e.length > this.length || this.cmp(e) < 0 ? {
                        div: new o(0),
                        mod: this
                    } : 1 === e.length ? "div" === t ? {
                        div: this.divn(e.words[0]),
                        mod: null
                    } : "mod" === t ? {
                        div: null,
                        mod: new o(this.modn(e.words[0]))
                    } : {
                        div: this.divn(e.words[0]),
                        mod: new o(this.modn(e.words[0]))
                    } : this._wordDiv(e, t);
                    var i, a, s
                }, o.prototype.div = function (e) {
                    return this.divmod(e, "div", !1).div
                }, o.prototype.mod = function (e) {
                    return this.divmod(e, "mod", !1).mod
                }, o.prototype.umod = function (e) {
                    return this.divmod(e, "mod", !0).mod
                }, o.prototype.divRound = function (e) {
                    var t = this.divmod(e);
                    if (t.mod.isZero()) return t.div;
                    var r = 0 !== t.div.negative ? t.mod.isub(e) : t.mod,
                        n = e.ushrn(1),
                        i = e.andln(1),
                        o = r.cmp(n);
                    return o < 0 || 1 === i && 0 === o ? t.div : 0 !== t.div.negative ? t.div.isubn(1) : t.div.iaddn(1)
                }, o.prototype.modn = function (e) {
                    n(e <= 67108863);
                    for (var t = (1 << 26) % e, r = 0, i = this.length - 1; i >= 0; i--) r = (t * r + (0 | this.words[i])) % e;
                    return r
                }, o.prototype.idivn = function (e) {
                    n(e <= 67108863);
                    for (var t = 0, r = this.length - 1; r >= 0; r--) {
                        var i = (0 | this.words[r]) + 67108864 * t;
                        this.words[r] = i / e | 0, t = i % e
                    }
                    return this.strip()
                }, o.prototype.divn = function (e) {
                    return this.clone().idivn(e)
                }, o.prototype.egcd = function (e) {
                    n(0 === e.negative), n(!e.isZero());
                    var t = this,
                        r = e.clone();
                    t = 0 !== t.negative ? t.umod(e) : t.clone();
                    for (var i = new o(1), a = new o(0), s = new o(0), f = new o(1), c = 0; t.isEven() && r.isEven();) t.iushrn(1), r.iushrn(1), ++c;
                    for (var u = r.clone(), h = t.clone(); !t.isZero();) {
                        for (var d = 0, l = 1; 0 == (t.words[0] & l) && d < 26; ++d, l <<= 1);
                        if (d > 0)
                            for (t.iushrn(d); d-- > 0;)(i.isOdd() || a.isOdd()) && (i.iadd(u), a.isub(h)), i.iushrn(1), a.iushrn(1);
                        for (var p = 0, b = 1; 0 == (r.words[0] & b) && p < 26; ++p, b <<= 1);
                        if (p > 0)
                            for (r.iushrn(p); p-- > 0;)(s.isOdd() || f.isOdd()) && (s.iadd(u), f.isub(h)), s.iushrn(1), f.iushrn(1);
                        t.cmp(r) >= 0 ? (t.isub(r), i.isub(s), a.isub(f)) : (r.isub(t), s.isub(i), f.isub(a))
                    }
                    return {
                        a: s,
                        b: f,
                        gcd: r.iushln(c)
                    }
                }, o.prototype._invmp = function (e) {
                    n(0 === e.negative), n(!e.isZero());
                    var t = this,
                        r = e.clone();
                    t = 0 !== t.negative ? t.umod(e) : t.clone();
                    for (var i, a = new o(1), s = new o(0), f = r.clone(); t.cmpn(1) > 0 && r.cmpn(1) > 0;) {
                        for (var c = 0, u = 1; 0 == (t.words[0] & u) && c < 26; ++c, u <<= 1);
                        if (c > 0)
                            for (t.iushrn(c); c-- > 0;) a.isOdd() && a.iadd(f), a.iushrn(1);
                        for (var h = 0, d = 1; 0 == (r.words[0] & d) && h < 26; ++h, d <<= 1);
                        if (h > 0)
                            for (r.iushrn(h); h-- > 0;) s.isOdd() && s.iadd(f), s.iushrn(1);
                        t.cmp(r) >= 0 ? (t.isub(r), a.isub(s)) : (r.isub(t), s.isub(a))
                    }
                    return (i = 0 === t.cmpn(1) ? a : s).cmpn(0) < 0 && i.iadd(e), i
                }, o.prototype.gcd = function (e) {
                    if (this.isZero()) return e.abs();
                    if (e.isZero()) return this.abs();
                    var t = this.clone(),
                        r = e.clone();
                    t.negative = 0, r.negative = 0;
                    for (var n = 0; t.isEven() && r.isEven(); n++) t.iushrn(1), r.iushrn(1);
                    for (;;) {
                        for (; t.isEven();) t.iushrn(1);
                        for (; r.isEven();) r.iushrn(1);
                        var i = t.cmp(r);
                        if (i < 0) {
                            var o = t;
                            t = r, r = o
                        } else if (0 === i || 0 === r.cmpn(1)) break;
                        t.isub(r)
                    }
                    return r.iushln(n)
                }, o.prototype.invm = function (e) {
                    return this.egcd(e).a.umod(e)
                }, o.prototype.isEven = function () {
                    return 0 == (1 & this.words[0])
                }, o.prototype.isOdd = function () {
                    return 1 == (1 & this.words[0])
                }, o.prototype.andln = function (e) {
                    return this.words[0] & e
                }, o.prototype.bincn = function (e) {
                    n("number" == typeof e);
                    var t = e % 26,
                        r = (e - t) / 26,
                        i = 1 << t;
                    if (this.length <= r) return this._expand(r + 1), this.words[r] |= i, this;
                    for (var o = i, a = r; 0 !== o && a < this.length; a++) {
                        var s = 0 | this.words[a];
                        o = (s += o) >>> 26, s &= 67108863, this.words[a] = s
                    }
                    return 0 !== o && (this.words[a] = o, this.length++), this
                }, o.prototype.isZero = function () {
                    return 1 === this.length && 0 === this.words[0]
                }, o.prototype.cmpn = function (e) {
                    var t, r = e < 0;
                    if (0 !== this.negative && !r) return -1;
                    if (0 === this.negative && r) return 1;
                    if (this.strip(), this.length > 1) t = 1;
                    else {
                        r && (e = -e), n(e <= 67108863, "Number is too big");
                        var i = 0 | this.words[0];
                        t = i === e ? 0 : i < e ? -1 : 1
                    }
                    return 0 !== this.negative ? 0 | -t : t
                }, o.prototype.cmp = function (e) {
                    if (0 !== this.negative && 0 === e.negative) return -1;
                    if (0 === this.negative && 0 !== e.negative) return 1;
                    var t = this.ucmp(e);
                    return 0 !== this.negative ? 0 | -t : t
                }, o.prototype.ucmp = function (e) {
                    if (this.length > e.length) return 1;
                    if (this.length < e.length) return -1;
                    for (var t = 0, r = this.length - 1; r >= 0; r--) {
                        var n = 0 | this.words[r],
                            i = 0 | e.words[r];
                        if (n !== i) {
                            n < i ? t = -1 : n > i && (t = 1);
                            break
                        }
                    }
                    return t
                }, o.prototype.gtn = function (e) {
                    return 1 === this.cmpn(e)
                }, o.prototype.gt = function (e) {
                    return 1 === this.cmp(e)
                }, o.prototype.gten = function (e) {
                    return this.cmpn(e) >= 0
                }, o.prototype.gte = function (e) {
                    return this.cmp(e) >= 0
                }, o.prototype.ltn = function (e) {
                    return -1 === this.cmpn(e)
                }, o.prototype.lt = function (e) {
                    return -1 === this.cmp(e)
                }, o.prototype.lten = function (e) {
                    return this.cmpn(e) <= 0
                }, o.prototype.lte = function (e) {
                    return this.cmp(e) <= 0
                }, o.prototype.eqn = function (e) {
                    return 0 === this.cmpn(e)
                }, o.prototype.eq = function (e) {
                    return 0 === this.cmp(e)
                }, o.red = function (e) {
                    return new S(e)
                }, o.prototype.toRed = function (e) {
                    return n(!this.red, "Already a number in reduction context"), n(0 === this.negative, "red works only with positives"), e.convertTo(this)._forceRed(e)
                }, o.prototype.fromRed = function () {
                    return n(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this)
                }, o.prototype._forceRed = function (e) {
                    return this.red = e, this
                }, o.prototype.forceRed = function (e) {
                    return n(!this.red, "Already a number in reduction context"), this._forceRed(e)
                }, o.prototype.redAdd = function (e) {
                    return n(this.red, "redAdd works only with red numbers"), this.red.add(this, e)
                }, o.prototype.redIAdd = function (e) {
                    return n(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, e)
                }, o.prototype.redSub = function (e) {
                    return n(this.red, "redSub works only with red numbers"), this.red.sub(this, e)
                }, o.prototype.redISub = function (e) {
                    return n(this.red, "redISub works only with red numbers"), this.red.isub(this, e)
                }, o.prototype.redShl = function (e) {
                    return n(this.red, "redShl works only with red numbers"), this.red.shl(this, e)
                }, o.prototype.redMul = function (e) {
                    return n(this.red, "redMul works only with red numbers"), this.red._verify2(this, e), this.red.mul(this, e)
                }, o.prototype.redIMul = function (e) {
                    return n(this.red, "redMul works only with red numbers"), this.red._verify2(this, e), this.red.imul(this, e)
                }, o.prototype.redSqr = function () {
                    return n(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this)
                }, o.prototype.redISqr = function () {
                    return n(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this)
                }, o.prototype.redSqrt = function () {
                    return n(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this)
                }, o.prototype.redInvm = function () {
                    return n(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this)
                }, o.prototype.redNeg = function () {
                    return n(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this)
                }, o.prototype.redPow = function (e) {
                    return n(this.red && !e.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, e)
                };
                var v = {
                    k256: null,
                    p224: null,
                    p192: null,
                    p25519: null
                };

                function g(e, t) {
                    this.name = e, this.p = new o(t, 16), this.n = this.p.bitLength(), this.k = new o(1).iushln(this.n).isub(this.p), this.tmp = this._tmp()
                }

                function m() {
                    g.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")
                }

                function _() {
                    g.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")
                }

                function w() {
                    g.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")
                }

                function E() {
                    g.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")
                }

                function S(e) {
                    if ("string" == typeof e) {
                        var t = o._prime(e);
                        this.m = t.p, this.prime = t
                    } else n(e.gtn(1), "modulus must be greater than 1"), this.m = e, this.prime = null
                }

                function A(e) {
                    S.call(this, e), this.shift = this.m.bitLength(), this.shift % 26 != 0 && (this.shift += 26 - this.shift % 26), this.r = new o(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv)
                }
                g.prototype._tmp = function () {
                    var e = new o(null);
                    return e.words = new Array(Math.ceil(this.n / 13)), e
                }, g.prototype.ireduce = function (e) {
                    var t, r = e;
                    do {
                        this.split(r, this.tmp), t = (r = (r = this.imulK(r)).iadd(this.tmp)).bitLength()
                    } while (t > this.n);
                    var n = t < this.n ? -1 : r.ucmp(this.p);
                    return 0 === n ? (r.words[0] = 0, r.length = 1) : n > 0 ? r.isub(this.p) : void 0 !== r.strip ? r.strip() : r._strip(), r
                }, g.prototype.split = function (e, t) {
                    e.iushrn(this.n, 0, t)
                }, g.prototype.imulK = function (e) {
                    return e.imul(this.k)
                }, i(m, g), m.prototype.split = function (e, t) {
                    for (var r = Math.min(e.length, 9), n = 0; n < r; n++) t.words[n] = e.words[n];
                    if (t.length = r, e.length <= 9) return e.words[0] = 0, void(e.length = 1);
                    var i = e.words[9];
                    for (t.words[t.length++] = 4194303 & i, n = 10; n < e.length; n++) {
                        var o = 0 | e.words[n];
                        e.words[n - 10] = (4194303 & o) << 4 | i >>> 22, i = o
                    }
                    i >>>= 22, e.words[n - 10] = i, 0 === i && e.length > 10 ? e.length -= 10 : e.length -= 9
                }, m.prototype.imulK = function (e) {
                    e.words[e.length] = 0, e.words[e.length + 1] = 0, e.length += 2;
                    for (var t = 0, r = 0; r < e.length; r++) {
                        var n = 0 | e.words[r];
                        t += 977 * n, e.words[r] = 67108863 & t, t = 64 * n + (t / 67108864 | 0)
                    }
                    return 0 === e.words[e.length - 1] && (e.length--, 0 === e.words[e.length - 1] && e.length--), e
                }, i(_, g), i(w, g), i(E, g), E.prototype.imulK = function (e) {
                    for (var t = 0, r = 0; r < e.length; r++) {
                        var n = 19 * (0 | e.words[r]) + t,
                            i = 67108863 & n;
                        n >>>= 26, e.words[r] = i, t = n
                    }
                    return 0 !== t && (e.words[e.length++] = t), e
                }, o._prime = function (e) {
                    if (v[e]) return v[e];
                    var t;
                    if ("k256" === e) t = new m;
                    else if ("p224" === e) t = new _;
                    else if ("p192" === e) t = new w;
                    else {
                        if ("p25519" !== e) throw new Error("Unknown prime " + e);
                        t = new E
                    }
                    return v[e] = t, t
                }, S.prototype._verify1 = function (e) {
                    n(0 === e.negative, "red works only with positives"), n(e.red, "red works only with red numbers")
                }, S.prototype._verify2 = function (e, t) {
                    n(0 == (e.negative | t.negative), "red works only with positives"), n(e.red && e.red === t.red, "red works only with red numbers")
                }, S.prototype.imod = function (e) {
                    return this.prime ? this.prime.ireduce(e)._forceRed(this) : e.umod(this.m)._forceRed(this)
                }, S.prototype.neg = function (e) {
                    return e.isZero() ? e.clone() : this.m.sub(e)._forceRed(this)
                }, S.prototype.add = function (e, t) {
                    this._verify2(e, t);
                    var r = e.add(t);
                    return r.cmp(this.m) >= 0 && r.isub(this.m), r._forceRed(this)
                }, S.prototype.iadd = function (e, t) {
                    this._verify2(e, t);
                    var r = e.iadd(t);
                    return r.cmp(this.m) >= 0 && r.isub(this.m), r
                }, S.prototype.sub = function (e, t) {
                    this._verify2(e, t);
                    var r = e.sub(t);
                    return r.cmpn(0) < 0 && r.iadd(this.m), r._forceRed(this)
                }, S.prototype.isub = function (e, t) {
                    this._verify2(e, t);
                    var r = e.isub(t);
                    return r.cmpn(0) < 0 && r.iadd(this.m), r
                }, S.prototype.shl = function (e, t) {
                    return this._verify1(e), this.imod(e.ushln(t))
                }, S.prototype.imul = function (e, t) {
                    return this._verify2(e, t), this.imod(e.imul(t))
                }, S.prototype.mul = function (e, t) {
                    return this._verify2(e, t), this.imod(e.mul(t))
                }, S.prototype.isqr = function (e) {
                    return this.imul(e, e.clone())
                }, S.prototype.sqr = function (e) {
                    return this.mul(e, e)
                }, S.prototype.sqrt = function (e) {
                    if (e.isZero()) return e.clone();
                    var t = this.m.andln(3);
                    if (n(t % 2 == 1), 3 === t) {
                        var r = this.m.add(new o(1)).iushrn(2);
                        return this.pow(e, r)
                    }
                    for (var i = this.m.subn(1), a = 0; !i.isZero() && 0 === i.andln(1);) a++, i.iushrn(1);
                    n(!i.isZero());
                    var s = new o(1).toRed(this),
                        f = s.redNeg(),
                        c = this.m.subn(1).iushrn(1),
                        u = this.m.bitLength();
                    for (u = new o(2 * u * u).toRed(this); 0 !== this.pow(u, c).cmp(f);) u.redIAdd(f);
                    for (var h = this.pow(u, i), d = this.pow(e, i.addn(1).iushrn(1)), l = this.pow(e, i), p = a; 0 !== l.cmp(s);) {
                        for (var b = l, y = 0; 0 !== b.cmp(s); y++) b = b.redSqr();
                        n(y < p);
                        var v = this.pow(h, new o(1).iushln(p - y - 1));
                        d = d.redMul(v), h = v.redSqr(), l = l.redMul(h), p = y
                    }
                    return d
                }, S.prototype.invm = function (e) {
                    var t = e._invmp(this.m);
                    return 0 !== t.negative ? (t.negative = 0, this.imod(t).redNeg()) : this.imod(t)
                }, S.prototype.pow = function (e, t) {
                    if (t.isZero()) return new o(1).toRed(this);
                    if (0 === t.cmpn(1)) return e.clone();
                    var r = new Array(16);
                    r[0] = new o(1).toRed(this), r[1] = e;
                    for (var n = 2; n < r.length; n++) r[n] = this.mul(r[n - 1], e);
                    var i = r[0],
                        a = 0,
                        s = 0,
                        f = t.bitLength() % 26;
                    for (0 === f && (f = 26), n = t.length - 1; n >= 0; n--) {
                        for (var c = t.words[n], u = f - 1; u >= 0; u--) {
                            var h = c >> u & 1;
                            i !== r[0] && (i = this.sqr(i)), 0 !== h || 0 !== a ? (a <<= 1, a |= h, (4 === ++s || 0 === n && 0 === u) && (i = this.mul(i, r[a]), s = 0, a = 0)) : s = 0
                        }
                        f = 26
                    }
                    return i
                }, S.prototype.convertTo = function (e) {
                    var t = e.umod(this.m);
                    return t === e ? t.clone() : t
                }, S.prototype.convertFrom = function (e) {
                    var t = e.clone();
                    return t.red = null, t
                }, o.mont = function (e) {
                    return new A(e)
                }, i(A, S), A.prototype.convertTo = function (e) {
                    return this.imod(e.ushln(this.shift))
                }, A.prototype.convertFrom = function (e) {
                    var t = this.imod(e.mul(this.rinv));
                    return t.red = null, t
                }, A.prototype.imul = function (e, t) {
                    if (e.isZero() || t.isZero()) return e.words[0] = 0, e.length = 1, e;
                    var r = e.imul(t),
                        n = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                        i = r.isub(n).iushrn(this.shift),
                        o = i;
                    return i.cmp(this.m) >= 0 ? o = i.isub(this.m) : i.cmpn(0) < 0 && (o = i.iadd(this.m)), o._forceRed(this)
                }, A.prototype.mul = function (e, t) {
                    if (e.isZero() || t.isZero()) return new o(0)._forceRed(this);
                    var r = e.mul(t),
                        n = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                        i = r.isub(n).iushrn(this.shift),
                        a = i;
                    return i.cmp(this.m) >= 0 ? a = i.isub(this.m) : i.cmpn(0) < 0 && (a = i.iadd(this.m)), a._forceRed(this)
                }, A.prototype.invm = function (e) {
                    return this.imod(e._invmp(this.m).mul(this.r2))._forceRed(this)
                }
            }(e, this)
        }).call(this, r(143)(e))
    }, function (e, t, r) {
        "use strict";
        (function (e) {
            /*!
             * The buffer module from node.js, for the browser.
             *
             * @author   Feross Aboukhadijeh <http://feross.org>
             * @license  MIT
             */
            var n = r(105),
                i = r(106),
                o = r(58);

            function a() {
                return f.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
            }

            function s(e, t) {
                if (a() < t) throw new RangeError("Invalid typed array length");
                return f.TYPED_ARRAY_SUPPORT ? (e = new Uint8Array(t)).__proto__ = f.prototype : (null === e && (e = new f(t)), e.length = t), e
            }

            function f(e, t, r) {
                if (!(f.TYPED_ARRAY_SUPPORT || this instanceof f)) return new f(e, t, r);
                if ("number" == typeof e) {
                    if ("string" == typeof t) throw new Error("If encoding is specified then the first argument must be a string");
                    return h(this, e)
                }
                return c(this, e, t, r)
            }

            function c(e, t, r, n) {
                if ("number" == typeof t) throw new TypeError('"value" argument must not be a number');
                return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer ? function (e, t, r, n) {
                    if (t.byteLength, r < 0 || t.byteLength < r) throw new RangeError("'offset' is out of bounds");
                    if (t.byteLength < r + (n || 0)) throw new RangeError("'length' is out of bounds");
                    t = void 0 === r && void 0 === n ? new Uint8Array(t) : void 0 === n ? new Uint8Array(t, r) : new Uint8Array(t, r, n);
                    f.TYPED_ARRAY_SUPPORT ? (e = t).__proto__ = f.prototype : e = d(e, t);
                    return e
                }(e, t, r, n) : "string" == typeof t ? function (e, t, r) {
                    "string" == typeof r && "" !== r || (r = "utf8");
                    if (!f.isEncoding(r)) throw new TypeError('"encoding" must be a valid string encoding');
                    var n = 0 | p(t, r),
                        i = (e = s(e, n)).write(t, r);
                    i !== n && (e = e.slice(0, i));
                    return e
                }(e, t, r) : function (e, t) {
                    if (f.isBuffer(t)) {
                        var r = 0 | l(t.length);
                        return 0 === (e = s(e, r)).length ? e : (t.copy(e, 0, 0, r), e)
                    }
                    if (t) {
                        if ("undefined" != typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || "length" in t) return "number" != typeof t.length || (n = t.length) != n ? s(e, 0) : d(e, t);
                        if ("Buffer" === t.type && o(t.data)) return d(e, t.data)
                    }
                    var n;
                    throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
                }(e, t)
            }

            function u(e) {
                if ("number" != typeof e) throw new TypeError('"size" argument must be a number');
                if (e < 0) throw new RangeError('"size" argument must not be negative')
            }

            function h(e, t) {
                if (u(t), e = s(e, t < 0 ? 0 : 0 | l(t)), !f.TYPED_ARRAY_SUPPORT)
                    for (var r = 0; r < t; ++r) e[r] = 0;
                return e
            }

            function d(e, t) {
                var r = t.length < 0 ? 0 : 0 | l(t.length);
                e = s(e, r);
                for (var n = 0; n < r; n += 1) e[n] = 255 & t[n];
                return e
            }

            function l(e) {
                if (e >= a()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + a().toString(16) + " bytes");
                return 0 | e
            }

            function p(e, t) {
                if (f.isBuffer(e)) return e.length;
                if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)) return e.byteLength;
                "string" != typeof e && (e = "" + e);
                var r = e.length;
                if (0 === r) return 0;
                for (var n = !1;;) switch (t) {
                    case "ascii":
                    case "latin1":
                    case "binary":
                        return r;
                    case "utf8":
                    case "utf-8":
                    case void 0:
                        return K(e).length;
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return 2 * r;
                    case "hex":
                        return r >>> 1;
                    case "base64":
                        return q(e).length;
                    default:
                        if (n) return K(e).length;
                        t = ("" + t).toLowerCase(), n = !0
                }
            }

            function b(e, t, r) {
                var n = e[t];
                e[t] = e[r], e[r] = n
            }

            function y(e, t, r, n, i) {
                if (0 === e.length) return -1;
                if ("string" == typeof r ? (n = r, r = 0) : r > 2147483647 ? r = 2147483647 : r < -2147483648 && (r = -2147483648), r = +r, isNaN(r) && (r = i ? 0 : e.length - 1), r < 0 && (r = e.length + r), r >= e.length) {
                    if (i) return -1;
                    r = e.length - 1
                } else if (r < 0) {
                    if (!i) return -1;
                    r = 0
                }
                if ("string" == typeof t && (t = f.from(t, n)), f.isBuffer(t)) return 0 === t.length ? -1 : v(e, t, r, n, i);
                if ("number" == typeof t) return t &= 255, f.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? i ? Uint8Array.prototype.indexOf.call(e, t, r) : Uint8Array.prototype.lastIndexOf.call(e, t, r) : v(e, [t], r, n, i);
                throw new TypeError("val must be string, number or Buffer")
            }

            function v(e, t, r, n, i) {
                var o, a = 1,
                    s = e.length,
                    f = t.length;
                if (void 0 !== n && ("ucs2" === (n = String(n).toLowerCase()) || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) {
                    if (e.length < 2 || t.length < 2) return -1;
                    a = 2, s /= 2, f /= 2, r /= 2
                }

                function c(e, t) {
                    return 1 === a ? e[t] : e.readUInt16BE(t * a)
                }
                if (i) {
                    var u = -1;
                    for (o = r; o < s; o++)
                        if (c(e, o) === c(t, -1 === u ? 0 : o - u)) {
                            if (-1 === u && (u = o), o - u + 1 === f) return u * a
                        } else -1 !== u && (o -= o - u), u = -1
                } else
                    for (r + f > s && (r = s - f), o = r; o >= 0; o--) {
                        for (var h = !0, d = 0; d < f; d++)
                            if (c(e, o + d) !== c(t, d)) {
                                h = !1;
                                break
                            } if (h) return o
                    }
                return -1
            }

            function g(e, t, r, n) {
                r = Number(r) || 0;
                var i = e.length - r;
                n ? (n = Number(n)) > i && (n = i) : n = i;
                var o = t.length;
                if (o % 2 != 0) throw new TypeError("Invalid hex string");
                n > o / 2 && (n = o / 2);
                for (var a = 0; a < n; ++a) {
                    var s = parseInt(t.substr(2 * a, 2), 16);
                    if (isNaN(s)) return a;
                    e[r + a] = s
                }
                return a
            }

            function m(e, t, r, n) {
                return z(K(t, e.length - r), e, r, n)
            }

            function _(e, t, r, n) {
                return z(function (e) {
                    for (var t = [], r = 0; r < e.length; ++r) t.push(255 & e.charCodeAt(r));
                    return t
                }(t), e, r, n)
            }

            function w(e, t, r, n) {
                return _(e, t, r, n)
            }

            function E(e, t, r, n) {
                return z(q(t), e, r, n)
            }

            function S(e, t, r, n) {
                return z(function (e, t) {
                    for (var r, n, i, o = [], a = 0; a < e.length && !((t -= 2) < 0); ++a) r = e.charCodeAt(a), n = r >> 8, i = r % 256, o.push(i), o.push(n);
                    return o
                }(t, e.length - r), e, r, n)
            }

            function A(e, t, r) {
                return 0 === t && r === e.length ? n.fromByteArray(e) : n.fromByteArray(e.slice(t, r))
            }

            function I(e, t, r) {
                r = Math.min(e.length, r);
                for (var n = [], i = t; i < r;) {
                    var o, a, s, f, c = e[i],
                        u = null,
                        h = c > 239 ? 4 : c > 223 ? 3 : c > 191 ? 2 : 1;
                    if (i + h <= r) switch (h) {
                        case 1:
                            c < 128 && (u = c);
                            break;
                        case 2:
                            128 == (192 & (o = e[i + 1])) && (f = (31 & c) << 6 | 63 & o) > 127 && (u = f);
                            break;
                        case 3:
                            o = e[i + 1], a = e[i + 2], 128 == (192 & o) && 128 == (192 & a) && (f = (15 & c) << 12 | (63 & o) << 6 | 63 & a) > 2047 && (f < 55296 || f > 57343) && (u = f);
                            break;
                        case 4:
                            o = e[i + 1], a = e[i + 2], s = e[i + 3], 128 == (192 & o) && 128 == (192 & a) && 128 == (192 & s) && (f = (15 & c) << 18 | (63 & o) << 12 | (63 & a) << 6 | 63 & s) > 65535 && f < 1114112 && (u = f)
                    }
                    null === u ? (u = 65533, h = 1) : u > 65535 && (u -= 65536, n.push(u >>> 10 & 1023 | 55296), u = 56320 | 1023 & u), n.push(u), i += h
                }
                return function (e) {
                    var t = e.length;
                    if (t <= k) return String.fromCharCode.apply(String, e);
                    var r = "",
                        n = 0;
                    for (; n < t;) r += String.fromCharCode.apply(String, e.slice(n, n += k));
                    return r
                }(n)
            }
            t.Buffer = f, t.SlowBuffer = function (e) {
                +e != e && (e = 0);
                return f.alloc(+e)
            }, t.INSPECT_MAX_BYTES = 50, f.TYPED_ARRAY_SUPPORT = void 0 !== e.TYPED_ARRAY_SUPPORT ? e.TYPED_ARRAY_SUPPORT : function () {
                try {
                    var e = new Uint8Array(1);
                    return e.__proto__ = {
                        __proto__: Uint8Array.prototype,
                        foo: function () {
                            return 42
                        }
                    }, 42 === e.foo() && "function" == typeof e.subarray && 0 === e.subarray(1, 1).byteLength
                } catch (e) {
                    return !1
                }
            }(), t.kMaxLength = a(), f.poolSize = 8192, f._augment = function (e) {
                return e.__proto__ = f.prototype, e
            }, f.from = function (e, t, r) {
                return c(null, e, t, r)
            }, f.TYPED_ARRAY_SUPPORT && (f.prototype.__proto__ = Uint8Array.prototype, f.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && f[Symbol.species] === f && Object.defineProperty(f, Symbol.species, {
                value: null,
                configurable: !0
            })), f.alloc = function (e, t, r) {
                return function (e, t, r, n) {
                    return u(t), t <= 0 ? s(e, t) : void 0 !== r ? "string" == typeof n ? s(e, t).fill(r, n) : s(e, t).fill(r) : s(e, t)
                }(null, e, t, r)
            }, f.allocUnsafe = function (e) {
                return h(null, e)
            }, f.allocUnsafeSlow = function (e) {
                return h(null, e)
            }, f.isBuffer = function (e) {
                return !(null == e || !e._isBuffer)
            }, f.compare = function (e, t) {
                if (!f.isBuffer(e) || !f.isBuffer(t)) throw new TypeError("Arguments must be Buffers");
                if (e === t) return 0;
                for (var r = e.length, n = t.length, i = 0, o = Math.min(r, n); i < o; ++i)
                    if (e[i] !== t[i]) {
                        r = e[i], n = t[i];
                        break
                    } return r < n ? -1 : n < r ? 1 : 0
            }, f.isEncoding = function (e) {
                switch (String(e).toLowerCase()) {
                    case "hex":
                    case "utf8":
                    case "utf-8":
                    case "ascii":
                    case "latin1":
                    case "binary":
                    case "base64":
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return !0;
                    default:
                        return !1
                }
            }, f.concat = function (e, t) {
                if (!o(e)) throw new TypeError('"list" argument must be an Array of Buffers');
                if (0 === e.length) return f.alloc(0);
                var r;
                if (void 0 === t)
                    for (t = 0, r = 0; r < e.length; ++r) t += e[r].length;
                var n = f.allocUnsafe(t),
                    i = 0;
                for (r = 0; r < e.length; ++r) {
                    var a = e[r];
                    if (!f.isBuffer(a)) throw new TypeError('"list" argument must be an Array of Buffers');
                    a.copy(n, i), i += a.length
                }
                return n
            }, f.byteLength = p, f.prototype._isBuffer = !0, f.prototype.swap16 = function () {
                var e = this.length;
                if (e % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
                for (var t = 0; t < e; t += 2) b(this, t, t + 1);
                return this
            }, f.prototype.swap32 = function () {
                var e = this.length;
                if (e % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
                for (var t = 0; t < e; t += 4) b(this, t, t + 3), b(this, t + 1, t + 2);
                return this
            }, f.prototype.swap64 = function () {
                var e = this.length;
                if (e % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
                for (var t = 0; t < e; t += 8) b(this, t, t + 7), b(this, t + 1, t + 6), b(this, t + 2, t + 5), b(this, t + 3, t + 4);
                return this
            }, f.prototype.toString = function () {
                var e = 0 | this.length;
                return 0 === e ? "" : 0 === arguments.length ? I(this, 0, e) : function (e, t, r) {
                    var n = !1;
                    if ((void 0 === t || t < 0) && (t = 0), t > this.length) return "";
                    if ((void 0 === r || r > this.length) && (r = this.length), r <= 0) return "";
                    if ((r >>>= 0) <= (t >>>= 0)) return "";
                    for (e || (e = "utf8");;) switch (e) {
                        case "hex":
                            return B(this, t, r);
                        case "utf8":
                        case "utf-8":
                            return I(this, t, r);
                        case "ascii":
                            return M(this, t, r);
                        case "latin1":
                        case "binary":
                            return x(this, t, r);
                        case "base64":
                            return A(this, t, r);
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return T(this, t, r);
                        default:
                            if (n) throw new TypeError("Unknown encoding: " + e);
                            e = (e + "").toLowerCase(), n = !0
                    }
                }.apply(this, arguments)
            }, f.prototype.equals = function (e) {
                if (!f.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
                return this === e || 0 === f.compare(this, e)
            }, f.prototype.inspect = function () {
                var e = "",
                    r = t.INSPECT_MAX_BYTES;
                return this.length > 0 && (e = this.toString("hex", 0, r).match(/.{2}/g).join(" "), this.length > r && (e += " ... ")), "<Buffer " + e + ">"
            }, f.prototype.compare = function (e, t, r, n, i) {
                if (!f.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
                if (void 0 === t && (t = 0), void 0 === r && (r = e ? e.length : 0), void 0 === n && (n = 0), void 0 === i && (i = this.length), t < 0 || r > e.length || n < 0 || i > this.length) throw new RangeError("out of range index");
                if (n >= i && t >= r) return 0;
                if (n >= i) return -1;
                if (t >= r) return 1;
                if (t >>>= 0, r >>>= 0, n >>>= 0, i >>>= 0, this === e) return 0;
                for (var o = i - n, a = r - t, s = Math.min(o, a), c = this.slice(n, i), u = e.slice(t, r), h = 0; h < s; ++h)
                    if (c[h] !== u[h]) {
                        o = c[h], a = u[h];
                        break
                    } return o < a ? -1 : a < o ? 1 : 0
            }, f.prototype.includes = function (e, t, r) {
                return -1 !== this.indexOf(e, t, r)
            }, f.prototype.indexOf = function (e, t, r) {
                return y(this, e, t, r, !0)
            }, f.prototype.lastIndexOf = function (e, t, r) {
                return y(this, e, t, r, !1)
            }, f.prototype.write = function (e, t, r, n) {
                if (void 0 === t) n = "utf8", r = this.length, t = 0;
                else if (void 0 === r && "string" == typeof t) n = t, r = this.length, t = 0;
                else {
                    if (!isFinite(t)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                    t |= 0, isFinite(r) ? (r |= 0, void 0 === n && (n = "utf8")) : (n = r, r = void 0)
                }
                var i = this.length - t;
                if ((void 0 === r || r > i) && (r = i), e.length > 0 && (r < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
                n || (n = "utf8");
                for (var o = !1;;) switch (n) {
                    case "hex":
                        return g(this, e, t, r);
                    case "utf8":
                    case "utf-8":
                        return m(this, e, t, r);
                    case "ascii":
                        return _(this, e, t, r);
                    case "latin1":
                    case "binary":
                        return w(this, e, t, r);
                    case "base64":
                        return E(this, e, t, r);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return S(this, e, t, r);
                    default:
                        if (o) throw new TypeError("Unknown encoding: " + n);
                        n = ("" + n).toLowerCase(), o = !0
                }
            }, f.prototype.toJSON = function () {
                return {
                    type: "Buffer",
                    data: Array.prototype.slice.call(this._arr || this, 0)
                }
            };
            var k = 4096;

            function M(e, t, r) {
                var n = "";
                r = Math.min(e.length, r);
                for (var i = t; i < r; ++i) n += String.fromCharCode(127 & e[i]);
                return n
            }

            function x(e, t, r) {
                var n = "";
                r = Math.min(e.length, r);
                for (var i = t; i < r; ++i) n += String.fromCharCode(e[i]);
                return n
            }

            function B(e, t, r) {
                var n = e.length;
                (!t || t < 0) && (t = 0), (!r || r < 0 || r > n) && (r = n);
                for (var i = "", o = t; o < r; ++o) i += U(e[o]);
                return i
            }

            function T(e, t, r) {
                for (var n = e.slice(t, r), i = "", o = 0; o < n.length; o += 2) i += String.fromCharCode(n[o] + 256 * n[o + 1]);
                return i
            }

            function P(e, t, r) {
                if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
                if (e + t > r) throw new RangeError("Trying to access beyond buffer length")
            }

            function L(e, t, r, n, i, o) {
                if (!f.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
                if (t > i || t < o) throw new RangeError('"value" argument is out of bounds');
                if (r + n > e.length) throw new RangeError("Index out of range")
            }

            function R(e, t, r, n) {
                t < 0 && (t = 65535 + t + 1);
                for (var i = 0, o = Math.min(e.length - r, 2); i < o; ++i) e[r + i] = (t & 255 << 8 * (n ? i : 1 - i)) >>> 8 * (n ? i : 1 - i)
            }

            function C(e, t, r, n) {
                t < 0 && (t = 4294967295 + t + 1);
                for (var i = 0, o = Math.min(e.length - r, 4); i < o; ++i) e[r + i] = t >>> 8 * (n ? i : 3 - i) & 255
            }

            function N(e, t, r, n, i, o) {
                if (r + n > e.length) throw new RangeError("Index out of range");
                if (r < 0) throw new RangeError("Index out of range")
            }

            function O(e, t, r, n, o) {
                return o || N(e, 0, r, 4), i.write(e, t, r, n, 23, 4), r + 4
            }

            function D(e, t, r, n, o) {
                return o || N(e, 0, r, 8), i.write(e, t, r, n, 52, 8), r + 8
            }
            f.prototype.slice = function (e, t) {
                var r, n = this.length;
                if (e = ~~e, t = void 0 === t ? n : ~~t, e < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n), t < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n), t < e && (t = e), f.TYPED_ARRAY_SUPPORT)(r = this.subarray(e, t)).__proto__ = f.prototype;
                else {
                    var i = t - e;
                    r = new f(i, void 0);
                    for (var o = 0; o < i; ++o) r[o] = this[o + e]
                }
                return r
            }, f.prototype.readUIntLE = function (e, t, r) {
                e |= 0, t |= 0, r || P(e, t, this.length);
                for (var n = this[e], i = 1, o = 0; ++o < t && (i *= 256);) n += this[e + o] * i;
                return n
            }, f.prototype.readUIntBE = function (e, t, r) {
                e |= 0, t |= 0, r || P(e, t, this.length);
                for (var n = this[e + --t], i = 1; t > 0 && (i *= 256);) n += this[e + --t] * i;
                return n
            }, f.prototype.readUInt8 = function (e, t) {
                return t || P(e, 1, this.length), this[e]
            }, f.prototype.readUInt16LE = function (e, t) {
                return t || P(e, 2, this.length), this[e] | this[e + 1] << 8
            }, f.prototype.readUInt16BE = function (e, t) {
                return t || P(e, 2, this.length), this[e] << 8 | this[e + 1]
            }, f.prototype.readUInt32LE = function (e, t) {
                return t || P(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
            }, f.prototype.readUInt32BE = function (e, t) {
                return t || P(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
            }, f.prototype.readIntLE = function (e, t, r) {
                e |= 0, t |= 0, r || P(e, t, this.length);
                for (var n = this[e], i = 1, o = 0; ++o < t && (i *= 256);) n += this[e + o] * i;
                return n >= (i *= 128) && (n -= Math.pow(2, 8 * t)), n
            }, f.prototype.readIntBE = function (e, t, r) {
                e |= 0, t |= 0, r || P(e, t, this.length);
                for (var n = t, i = 1, o = this[e + --n]; n > 0 && (i *= 256);) o += this[e + --n] * i;
                return o >= (i *= 128) && (o -= Math.pow(2, 8 * t)), o
            }, f.prototype.readInt8 = function (e, t) {
                return t || P(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
            }, f.prototype.readInt16LE = function (e, t) {
                t || P(e, 2, this.length);
                var r = this[e] | this[e + 1] << 8;
                return 32768 & r ? 4294901760 | r : r
            }, f.prototype.readInt16BE = function (e, t) {
                t || P(e, 2, this.length);
                var r = this[e + 1] | this[e] << 8;
                return 32768 & r ? 4294901760 | r : r
            }, f.prototype.readInt32LE = function (e, t) {
                return t || P(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
            }, f.prototype.readInt32BE = function (e, t) {
                return t || P(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
            }, f.prototype.readFloatLE = function (e, t) {
                return t || P(e, 4, this.length), i.read(this, e, !0, 23, 4)
            }, f.prototype.readFloatBE = function (e, t) {
                return t || P(e, 4, this.length), i.read(this, e, !1, 23, 4)
            }, f.prototype.readDoubleLE = function (e, t) {
                return t || P(e, 8, this.length), i.read(this, e, !0, 52, 8)
            }, f.prototype.readDoubleBE = function (e, t) {
                return t || P(e, 8, this.length), i.read(this, e, !1, 52, 8)
            }, f.prototype.writeUIntLE = function (e, t, r, n) {
                (e = +e, t |= 0, r |= 0, n) || L(this, e, t, r, Math.pow(2, 8 * r) - 1, 0);
                var i = 1,
                    o = 0;
                for (this[t] = 255 & e; ++o < r && (i *= 256);) this[t + o] = e / i & 255;
                return t + r
            }, f.prototype.writeUIntBE = function (e, t, r, n) {
                (e = +e, t |= 0, r |= 0, n) || L(this, e, t, r, Math.pow(2, 8 * r) - 1, 0);
                var i = r - 1,
                    o = 1;
                for (this[t + i] = 255 & e; --i >= 0 && (o *= 256);) this[t + i] = e / o & 255;
                return t + r
            }, f.prototype.writeUInt8 = function (e, t, r) {
                return e = +e, t |= 0, r || L(this, e, t, 1, 255, 0), f.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), this[t] = 255 & e, t + 1
            }, f.prototype.writeUInt16LE = function (e, t, r) {
                return e = +e, t |= 0, r || L(this, e, t, 2, 65535, 0), f.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : R(this, e, t, !0), t + 2
            }, f.prototype.writeUInt16BE = function (e, t, r) {
                return e = +e, t |= 0, r || L(this, e, t, 2, 65535, 0), f.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : R(this, e, t, !1), t + 2
            }, f.prototype.writeUInt32LE = function (e, t, r) {
                return e = +e, t |= 0, r || L(this, e, t, 4, 4294967295, 0), f.TYPED_ARRAY_SUPPORT ? (this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e) : C(this, e, t, !0), t + 4
            }, f.prototype.writeUInt32BE = function (e, t, r) {
                return e = +e, t |= 0, r || L(this, e, t, 4, 4294967295, 0), f.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : C(this, e, t, !1), t + 4
            }, f.prototype.writeIntLE = function (e, t, r, n) {
                if (e = +e, t |= 0, !n) {
                    var i = Math.pow(2, 8 * r - 1);
                    L(this, e, t, r, i - 1, -i)
                }
                var o = 0,
                    a = 1,
                    s = 0;
                for (this[t] = 255 & e; ++o < r && (a *= 256);) e < 0 && 0 === s && 0 !== this[t + o - 1] && (s = 1), this[t + o] = (e / a >> 0) - s & 255;
                return t + r
            }, f.prototype.writeIntBE = function (e, t, r, n) {
                if (e = +e, t |= 0, !n) {
                    var i = Math.pow(2, 8 * r - 1);
                    L(this, e, t, r, i - 1, -i)
                }
                var o = r - 1,
                    a = 1,
                    s = 0;
                for (this[t + o] = 255 & e; --o >= 0 && (a *= 256);) e < 0 && 0 === s && 0 !== this[t + o + 1] && (s = 1), this[t + o] = (e / a >> 0) - s & 255;
                return t + r
            }, f.prototype.writeInt8 = function (e, t, r) {
                return e = +e, t |= 0, r || L(this, e, t, 1, 127, -128), f.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1
            }, f.prototype.writeInt16LE = function (e, t, r) {
                return e = +e, t |= 0, r || L(this, e, t, 2, 32767, -32768), f.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : R(this, e, t, !0), t + 2
            }, f.prototype.writeInt16BE = function (e, t, r) {
                return e = +e, t |= 0, r || L(this, e, t, 2, 32767, -32768), f.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : R(this, e, t, !1), t + 2
            }, f.prototype.writeInt32LE = function (e, t, r) {
                return e = +e, t |= 0, r || L(this, e, t, 4, 2147483647, -2147483648), f.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24) : C(this, e, t, !0), t + 4
            }, f.prototype.writeInt32BE = function (e, t, r) {
                return e = +e, t |= 0, r || L(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), f.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : C(this, e, t, !1), t + 4
            }, f.prototype.writeFloatLE = function (e, t, r) {
                return O(this, e, t, !0, r)
            }, f.prototype.writeFloatBE = function (e, t, r) {
                return O(this, e, t, !1, r)
            }, f.prototype.writeDoubleLE = function (e, t, r) {
                return D(this, e, t, !0, r)
            }, f.prototype.writeDoubleBE = function (e, t, r) {
                return D(this, e, t, !1, r)
            }, f.prototype.copy = function (e, t, r, n) {
                if (r || (r = 0), n || 0 === n || (n = this.length), t >= e.length && (t = e.length), t || (t = 0), n > 0 && n < r && (n = r), n === r) return 0;
                if (0 === e.length || 0 === this.length) return 0;
                if (t < 0) throw new RangeError("targetStart out of bounds");
                if (r < 0 || r >= this.length) throw new RangeError("sourceStart out of bounds");
                if (n < 0) throw new RangeError("sourceEnd out of bounds");
                n > this.length && (n = this.length), e.length - t < n - r && (n = e.length - t + r);
                var i, o = n - r;
                if (this === e && r < t && t < n)
                    for (i = o - 1; i >= 0; --i) e[i + t] = this[i + r];
                else if (o < 1e3 || !f.TYPED_ARRAY_SUPPORT)
                    for (i = 0; i < o; ++i) e[i + t] = this[i + r];
                else Uint8Array.prototype.set.call(e, this.subarray(r, r + o), t);
                return o
            }, f.prototype.fill = function (e, t, r, n) {
                if ("string" == typeof e) {
                    if ("string" == typeof t ? (n = t, t = 0, r = this.length) : "string" == typeof r && (n = r, r = this.length), 1 === e.length) {
                        var i = e.charCodeAt(0);
                        i < 256 && (e = i)
                    }
                    if (void 0 !== n && "string" != typeof n) throw new TypeError("encoding must be a string");
                    if ("string" == typeof n && !f.isEncoding(n)) throw new TypeError("Unknown encoding: " + n)
                } else "number" == typeof e && (e &= 255);
                if (t < 0 || this.length < t || this.length < r) throw new RangeError("Out of range index");
                if (r <= t) return this;
                var o;
                if (t >>>= 0, r = void 0 === r ? this.length : r >>> 0, e || (e = 0), "number" == typeof e)
                    for (o = t; o < r; ++o) this[o] = e;
                else {
                    var a = f.isBuffer(e) ? e : K(new f(e, n).toString()),
                        s = a.length;
                    for (o = 0; o < r - t; ++o) this[o + t] = a[o % s]
                }
                return this
            };
            var j = /[^+\/0-9A-Za-z-_]/g;

            function U(e) {
                return e < 16 ? "0" + e.toString(16) : e.toString(16)
            }

            function K(e, t) {
                var r;
                t = t || 1 / 0;
                for (var n = e.length, i = null, o = [], a = 0; a < n; ++a) {
                    if ((r = e.charCodeAt(a)) > 55295 && r < 57344) {
                        if (!i) {
                            if (r > 56319) {
                                (t -= 3) > -1 && o.push(239, 191, 189);
                                continue
                            }
                            if (a + 1 === n) {
                                (t -= 3) > -1 && o.push(239, 191, 189);
                                continue
                            }
                            i = r;
                            continue
                        }
                        if (r < 56320) {
                            (t -= 3) > -1 && o.push(239, 191, 189), i = r;
                            continue
                        }
                        r = 65536 + (i - 55296 << 10 | r - 56320)
                    } else i && (t -= 3) > -1 && o.push(239, 191, 189);
                    if (i = null, r < 128) {
                        if ((t -= 1) < 0) break;
                        o.push(r)
                    } else if (r < 2048) {
                        if ((t -= 2) < 0) break;
                        o.push(r >> 6 | 192, 63 & r | 128)
                    } else if (r < 65536) {
                        if ((t -= 3) < 0) break;
                        o.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128)
                    } else {
                        if (!(r < 1114112)) throw new Error("Invalid code point");
                        if ((t -= 4) < 0) break;
                        o.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128)
                    }
                }
                return o
            }

            function q(e) {
                return n.toByteArray(function (e) {
                    if ((e = function (e) {
                            return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "")
                        }(e).replace(j, "")).length < 2) return "";
                    for (; e.length % 4 != 0;) e += "=";
                    return e
                }(e))
            }

            function z(e, t, r, n) {
                for (var i = 0; i < n && !(i + r >= t.length || i >= e.length); ++i) t[i + r] = e[i];
                return i
            }
        }).call(this, r(7))
    }, function (e, t) {
        function r(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        e.exports = function (e, t, n) {
            return t && r(e.prototype, t), n && r(e, n), e
        }, e.exports.default = e.exports, e.exports.__esModule = !0
    }, function (e, t) {
        var r;
        r = function () {
            return this
        }();
        try {
            r = r || new Function("return this")()
        } catch (e) {
            "object" == typeof window && (r = window)
        }
        e.exports = r
    }, function (e, t, r) {
        "use strict";
        (function (e, n) {
            var i = r(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getCurrentTime = function () {
                return (new Date).getTime()
            }, t.concatTypedArrays = d, t.isGenesisBlock = function (e) {
                return 0 === e
            }, t.hasProperties = function (e, t) {
                if (!(0, c.isObject)(e)) return !1;
                var r = !0;
                return t.forEach(function (t) {
                    (0, c.isArray)(t) ? r = r && t.some(function (t) {
                        return Object.prototype.hasOwnProperty.call(e, t)
                    }): (0, c.isString)(t) && (r = r && Object.prototype.hasOwnProperty.call(e, t))
                }), r
            }, t.createPrivate = function () {
                var e = new WeakMap;
                return function (t) {
                    return e.has(t) || e.set(t, {}), e.get(t)
                }
            }, t.makeTxHash = function (e) {
                var t = l(e);
                return s.sha3_256.update(t).hex()
            }, t.serialize = function (e) {
                var t = l(e);
                return s.sha3_256.update(t).hex()
            }, t.generateHashKey = l, t.arrTraverse = p, t.objTraverse = b, t.escapeString = y, t.sign = function (e, t) {
                var r = f.default.sign(n.from(e, "hex"), t),
                    i = new Uint8Array(1);
                return i[0] = r.recovery, d(r.signature, i)
            };
            var o = i(r(24)),
                a = i(r(193)),
                s = r(98),
                f = i(r(56)),
                c = r(21),
                u = (0, a.default)(["\0"], ["\\0"]),
                h = (0, a.default)(["", ""], ["", ""]);
            "undefined" == typeof window && (n = e.Buffer);

            function d(e, t) {
                var r = new e.constructor(e.length + t.length);
                return r.set(e, 0), r.set(t, e.length), r
            }

            function l(e) {
                var t;
                return t = b(e).substring(1).slice(0, -1), "icx_sendTransaction.".concat(t)
            }

            function p(e) {
                var t = "";
                t += "[";
                for (var r = 0; r < e.length; r += 1) {
                    var n = e[r];
                    switch (!0) {
                        case null === n:
                            t += String.raw(u);
                            break;
                        case "string" == typeof n:
                            t += y(n);
                            break;
                        case Array.isArray(n):
                            t += p(n);
                            break;
                        case "object" === (0, o.default)(n):
                            t += b(n)
                    }
                    t += "."
                }
                return t.endsWith(".") && (t = t.slice(0, -1)), t += "]"
            }

            function b(e) {
                var t = "";
                t += "{";
                var r = Object.keys(e);
                if (r.sort(), r.length > 0) {
                    for (var n = 0; n < r.length; n += 1) {
                        var i = r[n],
                            a = e[i];
                        switch (!0) {
                            case null === a:
                                t += "".concat(i, "."), t += String.raw(u);
                                break;
                            case "string" == typeof a:
                                t += "".concat(i, "."), t += y(a);
                                break;
                            case Array.isArray(a):
                                t += "".concat(i, "."), t += p(a);
                                break;
                            case "object" === (0, o.default)(a):
                                t += "".concat(i, "."), t += b(a)
                        }
                        t += "."
                    }
                    t = t.slice(0, -1), t += "}"
                } else t += "}";
                return t
            }

            function y(e) {
                var t = String.raw(h, e);
                return t = (t = (t = (t = (t = (t = t.split("\\").join("\\\\")).split(".").join("\\.")).split("{").join("\\{")).split("}").join("\\}")).split("[").join("\\[")).split("]").join("\\]")
            }
        }).call(this, r(7), r(5).Buffer)
    }, function (e, t) {
        function r(e, t) {
            if (!e) throw new Error(t || "Assertion failed")
        }
        e.exports = r, r.equal = function (e, t, r) {
            if (e != t) throw new Error(r || "Assertion failed: " + e + " != " + t)
        }
    }, function (e, t, r) {
        "use strict";
        var n = t,
            i = r(4),
            o = r(9),
            a = r(83);
        n.assert = o, n.toArray = a.toArray, n.zero2 = a.zero2, n.toHex = a.toHex, n.encode = a.encode, n.getNAF = function (e, t, r) {
            var n = new Array(Math.max(e.bitLength(), r) + 1);
            n.fill(0);
            for (var i = 1 << t + 1, o = e.clone(), a = 0; a < n.length; a++) {
                var s, f = o.andln(i - 1);
                o.isOdd() ? (s = f > (i >> 1) - 1 ? (i >> 1) - f : f, o.isubn(s)) : s = 0, n[a] = s, o.iushrn(1)
            }
            return n
        }, n.getJSF = function (e, t) {
            var r = [
                [],
                []
            ];
            e = e.clone(), t = t.clone();
            for (var n, i = 0, o = 0; e.cmpn(-i) > 0 || t.cmpn(-o) > 0;) {
                var a, s, f = e.andln(3) + i & 3,
                    c = t.andln(3) + o & 3;
                3 === f && (f = -1), 3 === c && (c = -1), a = 0 == (1 & f) ? 0 : 3 != (n = e.andln(7) + i & 7) && 5 !== n || 2 !== c ? f : -f, r[0].push(a), s = 0 == (1 & c) ? 0 : 3 != (n = t.andln(7) + o & 7) && 5 !== n || 2 !== f ? c : -c, r[1].push(s), 2 * i === a + 1 && (i = 1 - i), 2 * o === s + 1 && (o = 1 - o), e.iushrn(1), t.iushrn(1)
            }
            return r
        }, n.cachedProperty = function (e, t, r) {
            var n = "_" + t;
            e.prototype[t] = function () {
                return void 0 !== this[n] ? this[n] : this[n] = r.call(this)
            }
        }, n.parseBytes = function (e) {
            return "string" == typeof e ? n.toArray(e, "hex") : e
        }, n.intFromLE = function (e) {
            return new i(e, "hex", "le")
        }
    }, function (e, t) {
        var r, n, i = e.exports = {};

        function o() {
            throw new Error("setTimeout has not been defined")
        }

        function a() {
            throw new Error("clearTimeout has not been defined")
        }

        function s(e) {
            if (r === setTimeout) return setTimeout(e, 0);
            if ((r === o || !r) && setTimeout) return r = setTimeout, setTimeout(e, 0);
            try {
                return r(e, 0)
            } catch (t) {
                try {
                    return r.call(null, e, 0)
                } catch (t) {
                    return r.call(this, e, 0)
                }
            }
        }! function () {
            try {
                r = "function" == typeof setTimeout ? setTimeout : o
            } catch (e) {
                r = o
            }
            try {
                n = "function" == typeof clearTimeout ? clearTimeout : a
            } catch (e) {
                n = a
            }
        }();
        var f, c = [],
            u = !1,
            h = -1;

        function d() {
            u && f && (u = !1, f.length ? c = f.concat(c) : h = -1, c.length && l())
        }

        function l() {
            if (!u) {
                var e = s(d);
                u = !0;
                for (var t = c.length; t;) {
                    for (f = c, c = []; ++h < t;) f && f[h].run();
                    h = -1, t = c.length
                }
                f = null, u = !1,
                    function (e) {
                        if (n === clearTimeout) return clearTimeout(e);
                        if ((n === a || !n) && clearTimeout) return n = clearTimeout, clearTimeout(e);
                        try {
                            n(e)
                        } catch (t) {
                            try {
                                return n.call(null, e)
                            } catch (t) {
                                return n.call(this, e)
                            }
                        }
                    }(e)
            }
        }

        function p(e, t) {
            this.fun = e, this.array = t
        }

        function b() {}
        i.nextTick = function (e) {
            var t = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
            c.push(new p(e, t)), 1 !== c.length || u || s(l)
        }, p.prototype.run = function () {
            this.fun.apply(null, this.array)
        }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = b, i.addListener = b, i.once = b, i.off = b, i.removeListener = b, i.removeAllListeners = b, i.emit = b, i.prependListener = b, i.prependOnceListener = b, i.listeners = function (e) {
            return []
        }, i.binding = function (e) {
            throw new Error("process.binding is not supported")
        }, i.cwd = function () {
            return "/"
        }, i.chdir = function (e) {
            throw new Error("process.chdir is not supported")
        }, i.umask = function () {
            return 0
        }
    }, function (e, t, r) {
        "use strict";
        var n = r(9),
            i = r(1);

        function o(e) {
            return (e >>> 24 | e >>> 8 & 65280 | e << 8 & 16711680 | (255 & e) << 24) >>> 0
        }

        function a(e) {
            return 1 === e.length ? "0" + e : e
        }

        function s(e) {
            return 7 === e.length ? "0" + e : 6 === e.length ? "00" + e : 5 === e.length ? "000" + e : 4 === e.length ? "0000" + e : 3 === e.length ? "00000" + e : 2 === e.length ? "000000" + e : 1 === e.length ? "0000000" + e : e
        }
        t.inherits = i, t.toArray = function (e, t) {
            if (Array.isArray(e)) return e.slice();
            if (!e) return [];
            var r = [];
            if ("string" == typeof e)
                if (t) {
                    if ("hex" === t)
                        for ((e = e.replace(/[^a-z0-9]+/gi, "")).length % 2 != 0 && (e = "0" + e), n = 0; n < e.length; n += 2) r.push(parseInt(e[n] + e[n + 1], 16))
                } else
                    for (var n = 0; n < e.length; n++) {
                        var i = e.charCodeAt(n),
                            o = i >> 8,
                            a = 255 & i;
                        o ? r.push(o, a) : r.push(a)
                    } else
                        for (n = 0; n < e.length; n++) r[n] = 0 | e[n];
            return r
        }, t.toHex = function (e) {
            for (var t = "", r = 0; r < e.length; r++) t += a(e[r].toString(16));
            return t
        }, t.htonl = o, t.toHex32 = function (e, t) {
            for (var r = "", n = 0; n < e.length; n++) {
                var i = e[n];
                "little" === t && (i = o(i)), r += s(i.toString(16))
            }
            return r
        }, t.zero2 = a, t.zero8 = s, t.join32 = function (e, t, r, i) {
            var o = r - t;
            n(o % 4 == 0);
            for (var a = new Array(o / 4), s = 0, f = t; s < a.length; s++, f += 4) {
                var c;
                c = "big" === i ? e[f] << 24 | e[f + 1] << 16 | e[f + 2] << 8 | e[f + 3] : e[f + 3] << 24 | e[f + 2] << 16 | e[f + 1] << 8 | e[f], a[s] = c >>> 0
            }
            return a
        }, t.split32 = function (e, t) {
            for (var r = new Array(4 * e.length), n = 0, i = 0; n < e.length; n++, i += 4) {
                var o = e[n];
                "big" === t ? (r[i] = o >>> 24, r[i + 1] = o >>> 16 & 255, r[i + 2] = o >>> 8 & 255, r[i + 3] = 255 & o) : (r[i + 3] = o >>> 24, r[i + 2] = o >>> 16 & 255, r[i + 1] = o >>> 8 & 255, r[i] = 255 & o)
            }
            return r
        }, t.rotr32 = function (e, t) {
            return e >>> t | e << 32 - t
        }, t.rotl32 = function (e, t) {
            return e << t | e >>> 32 - t
        }, t.sum32 = function (e, t) {
            return e + t >>> 0
        }, t.sum32_3 = function (e, t, r) {
            return e + t + r >>> 0
        }, t.sum32_4 = function (e, t, r, n) {
            return e + t + r + n >>> 0
        }, t.sum32_5 = function (e, t, r, n, i) {
            return e + t + r + n + i >>> 0
        }, t.sum64 = function (e, t, r, n) {
            var i = e[t],
                o = n + e[t + 1] >>> 0,
                a = (o < n ? 1 : 0) + r + i;
            e[t] = a >>> 0, e[t + 1] = o
        }, t.sum64_hi = function (e, t, r, n) {
            return (t + n >>> 0 < t ? 1 : 0) + e + r >>> 0
        }, t.sum64_lo = function (e, t, r, n) {
            return t + n >>> 0
        }, t.sum64_4_hi = function (e, t, r, n, i, o, a, s) {
            var f = 0,
                c = t;
            return f += (c = c + n >>> 0) < t ? 1 : 0, f += (c = c + o >>> 0) < o ? 1 : 0, e + r + i + a + (f += (c = c + s >>> 0) < s ? 1 : 0) >>> 0
        }, t.sum64_4_lo = function (e, t, r, n, i, o, a, s) {
            return t + n + o + s >>> 0
        }, t.sum64_5_hi = function (e, t, r, n, i, o, a, s, f, c) {
            var u = 0,
                h = t;
            return u += (h = h + n >>> 0) < t ? 1 : 0, u += (h = h + o >>> 0) < o ? 1 : 0, u += (h = h + s >>> 0) < s ? 1 : 0, e + r + i + a + f + (u += (h = h + c >>> 0) < c ? 1 : 0) >>> 0
        }, t.sum64_5_lo = function (e, t, r, n, i, o, a, s, f, c) {
            return t + n + o + s + c >>> 0
        }, t.rotr64_hi = function (e, t, r) {
            return (t << 32 - r | e >>> r) >>> 0
        }, t.rotr64_lo = function (e, t, r) {
            return (e << 32 - r | t >>> r) >>> 0
        }, t.shr64_hi = function (e, t, r) {
            return e >>> r
        }, t.shr64_lo = function (e, t, r) {
            return (e << 32 - r | t >>> r) >>> 0
        }
    }, function (e, t, r) {
        var n = r(0).Buffer,
            i = r(60).Transform,
            o = r(42).StringDecoder;

        function a(e) {
            i.call(this), this.hashMode = "string" == typeof e, this.hashMode ? this[e] = this._finalOrDigest : this.final = this._finalOrDigest, this._final && (this.__final = this._final, this._final = null), this._decoder = null, this._encoding = null
        }
        r(1)(a, i), a.prototype.update = function (e, t, r) {
            "string" == typeof e && (e = n.from(e, t));
            var i = this._update(e);
            return this.hashMode ? this : (r && (i = this._toString(i, r)), i)
        }, a.prototype.setAutoPadding = function () {}, a.prototype.getAuthTag = function () {
            throw new Error("trying to get auth tag in unsupported state")
        }, a.prototype.setAuthTag = function () {
            throw new Error("trying to set auth tag in unsupported state")
        }, a.prototype.setAAD = function () {
            throw new Error("trying to set aad in unsupported state")
        }, a.prototype._transform = function (e, t, r) {
            var n;
            try {
                this.hashMode ? this._update(e) : this.push(this._update(e))
            } catch (e) {
                n = e
            } finally {
                r(n)
            }
        }, a.prototype._flush = function (e) {
            var t;
            try {
                this.push(this.__final())
            } catch (e) {
                t = e
            }
            e(t)
        }, a.prototype._finalOrDigest = function (e) {
            var t = this.__final() || n.alloc(0);
            return e && (t = this._toString(t, e, !0)), t
        }, a.prototype._toString = function (e, t, r) {
            if (this._decoder || (this._decoder = new o(t), this._encoding = t), this._encoding !== t) throw new Error("can't switch encodings");
            var n = this._decoder.write(e);
            return r && (n += this._decoder.end()), n
        }, e.exports = a
    }, function (e, t, r) {
        "use strict";

        function n(e, t, r) {
            for (var n = 0; n < e.length; n += 1)
                if (e[n](r)) return r;
            return t + r
        }

        function i(e, t) {
            return e(t) ? t.substr(2) : t
        }

        function o(e) {
            return /^(0x)/i.test(e)
        }

        function a(e) {
            return /^(hx)/i.test(e)
        }

        function s(e) {
            return /^(cx)/i.test(e)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.is0xPrefix = o, t.isHxPrefix = a, t.isCxPrefix = s, t.add0xPrefix = function (e) {
            return n([o], "0x", e)
        }, t.addHxPrefix = function (e) {
            return n([a, s], "hx", e)
        }, t.addCxPrefix = function (e) {
            return n([a, s], "cx", e)
        }, t.remove0xPrefix = function (e) {
            return i(o, e)
        }, t.removeHxPrefix = function (e) {
            return i(a, e)
        }, t.removeCxPrefix = function (e) {
            return i(s, e)
        }
    }, function (e, t, r) {
        "use strict";
        var n = r(2);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.fromUtf8 = c, t.toUtf8 = function (e) {
            if (!(0, s.isHex)(e)) {
                var t = new f.DataError("Invalid hex string");
                throw t.toString()
            }
            var r = "",
                n = 0,
                i = e.length;
            "0x" === e.substring(0, 2) && (n = 2);
            for (; n < i; n += 2) {
                var a = parseInt(e.substr(n, 2), 16);
                if (0 === a) break;
                r += String.fromCharCode(a)
            }
            return o.default.decode(r)
        }, t.toNumber = function (e) {
            if ((0, s.isBigNumber)(e)) return e.toNumber();
            return new i.default(e).toNumber()
        }, t.toBigNumber = u, t.toHexNumber = h, t.toHex = function (e) {
            if (!e) return "0x0";
            if ((0, s.isHex)(e)) return e;
            if ((0, s.isString)(e)) return c(e);
            if ((0, s.isInteger)(e)) return h(e);
            if ((0, s.isBigNumber)(e) && e.isInteger()) return h(e);
            throw new f.DataError("Invalid value").toString()
        }, t.toRawTransaction = function (e) {
            var t = e.to,
                r = e.from,
                n = e.stepLimit,
                i = e.nid,
                o = e.version,
                a = e.timestamp,
                s = e.dataType,
                f = e.data,
                c = e.value,
                u = e.nonce,
                d = {
                    to: t,
                    from: r,
                    stepLimit: h(n),
                    nid: h(i),
                    version: h(o),
                    timestamp: h(a)
                };
            c && (d.value = h(c));
            u && (d.nonce = h(u));
            s && (d.dataType = s); - 1 !== ["call", "deploy", "message"].indexOf(s) && f && (d.data = f);
            return d
        };
        var i = n(r(57)),
            o = n(r(194)),
            a = r(14),
            s = r(21),
            f = r(16);

        function c(e) {
            if (!(0, s.isString)(e)) throw new f.DataError("Invalid string").toString();
            for (var t = [], r = "", n = 0; n < e.length; n += 1)
                for (var i = unescape(encodeURIComponent(e[n])), o = 0; o < i.length; o += 1) t.push(i[o].charCodeAt(0));
            for (var c = 0; c < t.length; c += 1) {
                var u = t[c].toString(16);
                1 === u.length && (u = "0".concat(u));
                var h = "%x";
                r += h = h.replace(/%x/g, u)
            }
            return (0, a.add0xPrefix)(r)
        }

        function u(e) {
            return (0, s.isBigNumber)(e) ? e : new i.default(e)
        }

        function h(e) {
            return (0, a.add0xPrefix)(u(e).toString(16))
        }
    }, function (e, t, r) {
        "use strict";
        var n = r(2);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.NetworkError = t.ScoreError = t.RpcError = t.WalletError = t.FormatError = t.DataError = t.Exception = void 0;
        var i = n(r(22)),
            o = n(r(23)),
            a = n(r(3)),
            s = n(r(6)),
            f = {
                0: "DATA ERROR",
                1: "FORMAT ERROR",
                2: "WALLET ERROR",
                3: "RPC ERROR",
                4: "SCORE ERROR",
                5: "NETWORK ERROR"
            },
            c = function () {
                function e(t, r) {
                    (0, a.default)(this, e), this.code = t, this.message = r
                }
                return (0, s.default)(e, [{
                    key: "toString",
                    value: function () {
                        return "[".concat(this.code, "] ").concat(this.message)
                    }
                }]), e
            }();
        t.Exception = c;
        var u = function (e) {
            function t(e) {
                return (0, a.default)(this, t), (0, i.default)(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, f[0], e))
            }
            return (0, o.default)(t, e), t
        }(c);
        t.DataError = u;
        var h = function (e) {
            function t(e) {
                return (0, a.default)(this, t), (0, i.default)(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, f[1], e))
            }
            return (0, o.default)(t, e), t
        }(c);
        t.FormatError = h;
        var d = function (e) {
            function t(e) {
                return (0, a.default)(this, t), (0, i.default)(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, f[2], e))
            }
            return (0, o.default)(t, e), t
        }(c);
        t.WalletError = d;
        var l = function (e) {
            function t(e) {
                return (0, a.default)(this, t), (0, i.default)(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, f[3], e))
            }
            return (0, o.default)(t, e), t
        }(c);
        t.RpcError = l;
        var p = function (e) {
            function t(e) {
                return (0, a.default)(this, t), (0, i.default)(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, f[4], e))
            }
            return (0, o.default)(t, e), t
        }(c);
        t.ScoreError = p;
        var b = function (e) {
            function t(e) {
                return (0, a.default)(this, t), (0, i.default)(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, f[5], e))
            }
            return (0, o.default)(t, e), t
        }(c);
        t.NetworkError = b
    }, function (e, t, r) {
        "use strict";
        var n = r(31),
            i = Object.keys || function (e) {
                var t = [];
                for (var r in e) t.push(r);
                return t
            };
        e.exports = h;
        var o = Object.create(r(25));
        o.inherits = r(1);
        var a = r(61),
            s = r(41);
        o.inherits(h, a);
        for (var f = i(s.prototype), c = 0; c < f.length; c++) {
            var u = f[c];
            h.prototype[u] || (h.prototype[u] = s.prototype[u])
        }

        function h(e) {
            if (!(this instanceof h)) return new h(e);
            a.call(this, e), s.call(this, e), e && !1 === e.readable && (this.readable = !1), e && !1 === e.writable && (this.writable = !1), this.allowHalfOpen = !0, e && !1 === e.allowHalfOpen && (this.allowHalfOpen = !1), this.once("end", d)
        }

        function d() {
            this.allowHalfOpen || this._writableState.ended || n.nextTick(l, this)
        }

        function l(e) {
            e.end()
        }
        Object.defineProperty(h.prototype, "writableHighWaterMark", {
            enumerable: !1,
            get: function () {
                return this._writableState.highWaterMark
            }
        }), Object.defineProperty(h.prototype, "destroyed", {
            get: function () {
                return void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed && this._writableState.destroyed)
            },
            set: function (e) {
                void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed = e, this._writableState.destroyed = e)
            }
        }), h.prototype._destroy = function (e, t) {
            this.push(null), this.end(), n.nextTick(t, e)
        }
    }, function (e, t, r) {
        "use strict";
        (function (t, n) {
            var i = 65536,
                o = 4294967295;
            var a = r(0).Buffer,
                s = t.crypto || t.msCrypto;
            s && s.getRandomValues ? e.exports = function (e, t) {
                if (e > o) throw new RangeError("requested too many random bytes");
                var r = a.allocUnsafe(e);
                if (e > 0)
                    if (e > i)
                        for (var f = 0; f < e; f += i) s.getRandomValues(r.slice(f, f + i));
                    else s.getRandomValues(r);
                if ("function" == typeof t) return n.nextTick(function () {
                    t(null, r)
                });
                return r
            } : e.exports = function () {
                throw new Error("Secure random number generation is not supported by this browser.\nUse Chrome, Firefox or Internet Explorer 11")
            }
        }).call(this, r(7), r(11))
    }, function (e, t, r) {
        "use strict";
        var n = r(1),
            i = r(39),
            o = r(43),
            a = r(44),
            s = r(13);

        function f(e) {
            s.call(this, "digest"), this._hash = e
        }
        n(f, s), f.prototype._update = function (e) {
            this._hash.update(e)
        }, f.prototype._final = function () {
            return this._hash.digest()
        }, e.exports = function (e) {
            return "md5" === (e = e.toLowerCase()) ? new i : "rmd160" === e || "ripemd160" === e ? new o : new f(a(e))
        }
    }, function (e, t, r) {
        var n = r(0).Buffer;

        function i(e, t) {
            this._block = n.alloc(e), this._finalSize = t, this._blockSize = e, this._len = 0
        }
        i.prototype.update = function (e, t) {
            "string" == typeof e && (t = t || "utf8", e = n.from(e, t));
            for (var r = this._block, i = this._blockSize, o = e.length, a = this._len, s = 0; s < o;) {
                for (var f = a % i, c = Math.min(o - s, i - f), u = 0; u < c; u++) r[f + u] = e[s + u];
                s += c, (a += c) % i == 0 && this._update(r)
            }
            return this._len += o, this
        }, i.prototype.digest = function (e) {
            var t = this._len % this._blockSize;
            this._block[t] = 128, this._block.fill(0, t + 1), t >= this._finalSize && (this._update(this._block), this._block.fill(0));
            var r = 8 * this._len;
            if (r <= 4294967295) this._block.writeUInt32BE(r, this._blockSize - 4);
            else {
                var n = (4294967295 & r) >>> 0,
                    i = (r - n) / 4294967296;
                this._block.writeUInt32BE(i, this._blockSize - 8), this._block.writeUInt32BE(n, this._blockSize - 4)
            }
            this._update(this._block);
            var o = this._hash();
            return e ? o.toString(e) : o
        }, i.prototype._update = function () {
            throw new Error("_update must be implemented by subclass")
        }, e.exports = i
    }, function (e, t, r) {
        "use strict";
        var n = r(2);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.isString = function (e) {
            return "string" == typeof e || e instanceof String
        }, t.isByte = function (e) {
            return !!e && void 0 !== e.byteLength
        }, t.isObject = function (e) {
            return "object" === (0, i.default)(e)
        }, t.isArray = function (e) {
            return Array.isArray(e)
        }, t.isBigNumber = function (e) {
            return o.default.isBigNumber(e)
        }, t.isHex = function (e) {
            return /^(0x)[0-9a-f]+$/g.test(e)
        }, t.isFunction = function (e) {
            return "function" == typeof e
        }, t.isInteger = function (e) {
            return Number.isInteger(e)
        };
        var i = n(r(24)),
            o = n(r(57))
    }, function (e, t, r) {
        var n = r(24).default,
            i = r(195);
        e.exports = function (e, t) {
            return !t || "object" !== n(t) && "function" != typeof t ? i(e) : t
        }, e.exports.default = e.exports, e.exports.__esModule = !0
    }, function (e, t, r) {
        var n = r(196);
        e.exports = function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && n(e, t)
        }, e.exports.default = e.exports, e.exports.__esModule = !0
    }, function (e, t) {
        function r(t) {
            "@babel/helpers - typeof";
            return "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? (e.exports = r = function (e) {
                return typeof e
            }, e.exports.default = e.exports, e.exports.__esModule = !0) : (e.exports = r = function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, e.exports.default = e.exports, e.exports.__esModule = !0), r(t)
        }
        e.exports = r, e.exports.default = e.exports, e.exports.__esModule = !0
    }, function (e, t, r) {
        (function (e) {
            function r(e) {
                return Object.prototype.toString.call(e)
            }
            t.isArray = function (e) {
                return Array.isArray ? Array.isArray(e) : "[object Array]" === r(e)
            }, t.isBoolean = function (e) {
                return "boolean" == typeof e
            }, t.isNull = function (e) {
                return null === e
            }, t.isNullOrUndefined = function (e) {
                return null == e
            }, t.isNumber = function (e) {
                return "number" == typeof e
            }, t.isString = function (e) {
                return "string" == typeof e
            }, t.isSymbol = function (e) {
                return "symbol" == typeof e
            }, t.isUndefined = function (e) {
                return void 0 === e
            }, t.isRegExp = function (e) {
                return "[object RegExp]" === r(e)
            }, t.isObject = function (e) {
                return "object" == typeof e && null !== e
            }, t.isDate = function (e) {
                return "[object Date]" === r(e)
            }, t.isError = function (e) {
                return "[object Error]" === r(e) || e instanceof Error
            }, t.isFunction = function (e) {
                return "function" == typeof e
            }, t.isPrimitive = function (e) {
                return null === e || "boolean" == typeof e || "number" == typeof e || "string" == typeof e || "symbol" == typeof e || void 0 === e
            }, t.isBuffer = e.isBuffer
        }).call(this, r(5).Buffer)
    }, function (e, t, r) {
        (function (t) {
            e.exports = function (e, r) {
                for (var n = Math.min(e.length, r.length), i = new t(n), o = 0; o < n; ++o) i[o] = e[o] ^ r[o];
                return i
            }
        }).call(this, r(5).Buffer)
    }, function (e, t, r) {
        "use strict";
        var n = r(12),
            i = r(9);

        function o() {
            this.pending = null, this.pendingTotal = 0, this.blockSize = this.constructor.blockSize, this.outSize = this.constructor.outSize, this.hmacStrength = this.constructor.hmacStrength, this.padLength = this.constructor.padLength / 8, this.endian = "big", this._delta8 = this.blockSize / 8, this._delta32 = this.blockSize / 32
        }
        t.BlockHash = o, o.prototype.update = function (e, t) {
            if (e = n.toArray(e, t), this.pending ? this.pending = this.pending.concat(e) : this.pending = e, this.pendingTotal += e.length, this.pending.length >= this._delta8) {
                var r = (e = this.pending).length % this._delta8;
                this.pending = e.slice(e.length - r, e.length), 0 === this.pending.length && (this.pending = null), e = n.join32(e, 0, e.length - r, this.endian);
                for (var i = 0; i < e.length; i += this._delta32) this._update(e, i, i + this._delta32)
            }
            return this
        }, o.prototype.digest = function (e) {
            return this.update(this._pad()), i(null === this.pending), this._digest(e)
        }, o.prototype._pad = function () {
            var e = this.pendingTotal,
                t = this._delta8,
                r = t - (e + this.padLength) % t,
                n = new Array(r + this.padLength);
            n[0] = 128;
            for (var i = 1; i < r; i++) n[i] = 0;
            if (e <<= 3, "big" === this.endian) {
                for (var o = 8; o < this.padLength; o++) n[i++] = 0;
                n[i++] = 0, n[i++] = 0, n[i++] = 0, n[i++] = 0, n[i++] = e >>> 24 & 255, n[i++] = e >>> 16 & 255, n[i++] = e >>> 8 & 255, n[i++] = 255 & e
            } else
                for (n[i++] = 255 & e, n[i++] = e >>> 8 & 255, n[i++] = e >>> 16 & 255, n[i++] = e >>> 24 & 255, n[i++] = 0, n[i++] = 0, n[i++] = 0, n[i++] = 0, o = 8; o < this.padLength; o++) n[i++] = 0;
            return n
        }
    }, function (e, t, r) {
        "use strict";
        const n = r(1),
            i = r(54).Reporter,
            o = r(52).Buffer;

        function a(e, t) {
            i.call(this, t), o.isBuffer(e) ? (this.base = e, this.offset = 0, this.length = e.length) : this.error("Input not Buffer")
        }

        function s(e, t) {
            if (Array.isArray(e)) this.length = 0, this.value = e.map(function (e) {
                return s.isEncoderBuffer(e) || (e = new s(e, t)), this.length += e.length, e
            }, this);
            else if ("number" == typeof e) {
                if (!(0 <= e && e <= 255)) return t.error("non-byte EncoderBuffer value");
                this.value = e, this.length = 1
            } else if ("string" == typeof e) this.value = e, this.length = o.byteLength(e);
            else {
                if (!o.isBuffer(e)) return t.error("Unsupported type: " + typeof e);
                this.value = e, this.length = e.length
            }
        }
        n(a, i), t.DecoderBuffer = a, a.isDecoderBuffer = function (e) {
            if (e instanceof a) return !0;
            return "object" == typeof e && o.isBuffer(e.base) && "DecoderBuffer" === e.constructor.name && "number" == typeof e.offset && "number" == typeof e.length && "function" == typeof e.save && "function" == typeof e.restore && "function" == typeof e.isEmpty && "function" == typeof e.readUInt8 && "function" == typeof e.skip && "function" == typeof e.raw
        }, a.prototype.save = function () {
            return {
                offset: this.offset,
                reporter: i.prototype.save.call(this)
            }
        }, a.prototype.restore = function (e) {
            const t = new a(this.base);
            return t.offset = e.offset, t.length = this.offset, this.offset = e.offset, i.prototype.restore.call(this, e.reporter), t
        }, a.prototype.isEmpty = function () {
            return this.offset === this.length
        }, a.prototype.readUInt8 = function (e) {
            return this.offset + 1 <= this.length ? this.base.readUInt8(this.offset++, !0) : this.error(e || "DecoderBuffer overrun")
        }, a.prototype.skip = function (e, t) {
            if (!(this.offset + e <= this.length)) return this.error(t || "DecoderBuffer overrun");
            const r = new a(this.base);
            return r._reporterState = this._reporterState, r.offset = this.offset, r.length = this.offset + e, this.offset += e, r
        }, a.prototype.raw = function (e) {
            return this.base.slice(e ? e.offset : this.offset, this.length)
        }, t.EncoderBuffer = s, s.isEncoderBuffer = function (e) {
            if (e instanceof s) return !0;
            return "object" == typeof e && "EncoderBuffer" === e.constructor.name && "number" == typeof e.length && "function" == typeof e.join
        }, s.prototype.join = function (e, t) {
            return e || (e = o.alloc(this.length)), t || (t = 0), 0 === this.length ? e : (Array.isArray(this.value) ? this.value.forEach(function (r) {
                r.join(e, t), t += r.length
            }) : ("number" == typeof this.value ? e[t] = this.value : "string" == typeof this.value ? e.write(this.value, t) : o.isBuffer(this.value) && this.value.copy(e, t), t += this.length), e)
        }
    }, function (e, t, r) {
        "use strict";
        var n = r(2);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.IcxTransactionBuilder = t.IcxTransaction = void 0;
        var i = n(r(6)),
            o = n(r(3)),
            a = r(8),
            s = function e(t, r, n, i, a, s, f, c) {
                (0, o.default)(this, e), this.to = t, this.from = r, this.stepLimit = i, this.nid = a, this.version = f, this.timestamp = c, n && (this.value = n), s && (this.nonce = s)
            };
        t.IcxTransaction = s;
        var f = function () {
            function e() {
                (0, o.default)(this, e), this.private = (0, a.createPrivate)(), this.private(this).to = void 0, this.private(this).from = void 0, this.private(this).value = void 0, this.private(this).stepLimit = void 0, this.private(this).nid = void 0, this.private(this).nonce = void 0, this.private(this).version = void 0, this.private(this).timestamp = void 0
            }
            return (0, i.default)(e, [{
                key: "to",
                value: function (e) {
                    return this.private(this).to = e, this
                }
            }, {
                key: "from",
                value: function (e) {
                    return this.private(this).from = e, this
                }
            }, {
                key: "value",
                value: function (e) {
                    return this.private(this).value = e, this
                }
            }, {
                key: "stepLimit",
                value: function (e) {
                    return this.private(this).stepLimit = e, this
                }
            }, {
                key: "nid",
                value: function (e) {
                    return this.private(this).nid = e, this
                }
            }, {
                key: "nonce",
                value: function (e) {
                    return this.private(this).nonce = e, this
                }
            }, {
                key: "version",
                value: function (e) {
                    return this.private(this).version = e, this
                }
            }, {
                key: "timestamp",
                value: function (e) {
                    return this.private(this).timestamp = e, this
                }
            }, {
                key: "build",
                value: function () {
                    return new s(this.private(this).to, this.private(this).from, this.private(this).value, this.private(this).stepLimit, this.private(this).nid, this.private(this).nonce, this.private(this).version, this.private(this).timestamp)
                }
            }]), e
        }();
        t.IcxTransactionBuilder = f
    }, function (e, t, r) {
        (t = e.exports = r(61)).Stream = t, t.Readable = t, t.Writable = r(41), t.Duplex = r(17), t.Transform = r(64), t.PassThrough = r(115)
    }, function (e, t, r) {
        "use strict";
        (function (t) {
            void 0 === t || !t.version || 0 === t.version.indexOf("v0.") || 0 === t.version.indexOf("v1.") && 0 !== t.version.indexOf("v1.8.") ? e.exports = {
                nextTick: function (e, r, n, i) {
                    if ("function" != typeof e) throw new TypeError('"callback" argument must be a function');
                    var o, a, s = arguments.length;
                    switch (s) {
                        case 0:
                        case 1:
                            return t.nextTick(e);
                        case 2:
                            return t.nextTick(function () {
                                e.call(null, r)
                            });
                        case 3:
                            return t.nextTick(function () {
                                e.call(null, r, n)
                            });
                        case 4:
                            return t.nextTick(function () {
                                e.call(null, r, n, i)
                            });
                        default:
                            for (o = new Array(s - 1), a = 0; a < o.length;) o[a++] = arguments[a];
                            return t.nextTick(function () {
                                e.apply(null, o)
                            })
                    }
                }
            } : e.exports = t
        }).call(this, r(11))
    }, function (e, t, r) {
        var n = r(0).Buffer;

        function i(e) {
            n.isBuffer(e) || (e = n.from(e));
            for (var t = e.length / 4 | 0, r = new Array(t), i = 0; i < t; i++) r[i] = e.readUInt32BE(4 * i);
            return r
        }

        function o(e) {
            for (; 0 < e.length; e++) e[0] = 0
        }

        function a(e, t, r, n, i) {
            for (var o, a, s, f, c = r[0], u = r[1], h = r[2], d = r[3], l = e[0] ^ t[0], p = e[1] ^ t[1], b = e[2] ^ t[2], y = e[3] ^ t[3], v = 4, g = 1; g < i; g++) o = c[l >>> 24] ^ u[p >>> 16 & 255] ^ h[b >>> 8 & 255] ^ d[255 & y] ^ t[v++], a = c[p >>> 24] ^ u[b >>> 16 & 255] ^ h[y >>> 8 & 255] ^ d[255 & l] ^ t[v++], s = c[b >>> 24] ^ u[y >>> 16 & 255] ^ h[l >>> 8 & 255] ^ d[255 & p] ^ t[v++], f = c[y >>> 24] ^ u[l >>> 16 & 255] ^ h[p >>> 8 & 255] ^ d[255 & b] ^ t[v++], l = o, p = a, b = s, y = f;
            return o = (n[l >>> 24] << 24 | n[p >>> 16 & 255] << 16 | n[b >>> 8 & 255] << 8 | n[255 & y]) ^ t[v++], a = (n[p >>> 24] << 24 | n[b >>> 16 & 255] << 16 | n[y >>> 8 & 255] << 8 | n[255 & l]) ^ t[v++], s = (n[b >>> 24] << 24 | n[y >>> 16 & 255] << 16 | n[l >>> 8 & 255] << 8 | n[255 & p]) ^ t[v++], f = (n[y >>> 24] << 24 | n[l >>> 16 & 255] << 16 | n[p >>> 8 & 255] << 8 | n[255 & b]) ^ t[v++], [o >>>= 0, a >>>= 0, s >>>= 0, f >>>= 0]
        }
        var s = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54],
            f = function () {
                for (var e = new Array(256), t = 0; t < 256; t++) e[t] = t < 128 ? t << 1 : t << 1 ^ 283;
                for (var r = [], n = [], i = [
                        [],
                        [],
                        [],
                        []
                    ], o = [
                        [],
                        [],
                        [],
                        []
                    ], a = 0, s = 0, f = 0; f < 256; ++f) {
                    var c = s ^ s << 1 ^ s << 2 ^ s << 3 ^ s << 4;
                    c = c >>> 8 ^ 255 & c ^ 99, r[a] = c, n[c] = a;
                    var u = e[a],
                        h = e[u],
                        d = e[h],
                        l = 257 * e[c] ^ 16843008 * c;
                    i[0][a] = l << 24 | l >>> 8, i[1][a] = l << 16 | l >>> 16, i[2][a] = l << 8 | l >>> 24, i[3][a] = l, l = 16843009 * d ^ 65537 * h ^ 257 * u ^ 16843008 * a, o[0][c] = l << 24 | l >>> 8, o[1][c] = l << 16 | l >>> 16, o[2][c] = l << 8 | l >>> 24, o[3][c] = l, 0 === a ? a = s = 1 : (a = u ^ e[e[e[d ^ u]]], s ^= e[e[s]])
                }
                return {
                    SBOX: r,
                    INV_SBOX: n,
                    SUB_MIX: i,
                    INV_SUB_MIX: o
                }
            }();

        function c(e) {
            this._key = i(e), this._reset()
        }
        c.blockSize = 16, c.keySize = 32, c.prototype.blockSize = c.blockSize, c.prototype.keySize = c.keySize, c.prototype._reset = function () {
            for (var e = this._key, t = e.length, r = t + 6, n = 4 * (r + 1), i = [], o = 0; o < t; o++) i[o] = e[o];
            for (o = t; o < n; o++) {
                var a = i[o - 1];
                o % t == 0 ? (a = a << 8 | a >>> 24, a = f.SBOX[a >>> 24] << 24 | f.SBOX[a >>> 16 & 255] << 16 | f.SBOX[a >>> 8 & 255] << 8 | f.SBOX[255 & a], a ^= s[o / t | 0] << 24) : t > 6 && o % t == 4 && (a = f.SBOX[a >>> 24] << 24 | f.SBOX[a >>> 16 & 255] << 16 | f.SBOX[a >>> 8 & 255] << 8 | f.SBOX[255 & a]), i[o] = i[o - t] ^ a
            }
            for (var c = [], u = 0; u < n; u++) {
                var h = n - u,
                    d = i[h - (u % 4 ? 0 : 4)];
                c[u] = u < 4 || h <= 4 ? d : f.INV_SUB_MIX[0][f.SBOX[d >>> 24]] ^ f.INV_SUB_MIX[1][f.SBOX[d >>> 16 & 255]] ^ f.INV_SUB_MIX[2][f.SBOX[d >>> 8 & 255]] ^ f.INV_SUB_MIX[3][f.SBOX[255 & d]]
            }
            this._nRounds = r, this._keySchedule = i, this._invKeySchedule = c
        }, c.prototype.encryptBlockRaw = function (e) {
            return a(e = i(e), this._keySchedule, f.SUB_MIX, f.SBOX, this._nRounds)
        }, c.prototype.encryptBlock = function (e) {
            var t = this.encryptBlockRaw(e),
                r = n.allocUnsafe(16);
            return r.writeUInt32BE(t[0], 0), r.writeUInt32BE(t[1], 4), r.writeUInt32BE(t[2], 8), r.writeUInt32BE(t[3], 12), r
        }, c.prototype.decryptBlock = function (e) {
            var t = (e = i(e))[1];
            e[1] = e[3], e[3] = t;
            var r = a(e, this._invKeySchedule, f.INV_SUB_MIX, f.INV_SBOX, this._nRounds),
                o = n.allocUnsafe(16);
            return o.writeUInt32BE(r[0], 0), o.writeUInt32BE(r[3], 4), o.writeUInt32BE(r[2], 8), o.writeUInt32BE(r[1], 12), o
        }, c.prototype.scrub = function () {
            o(this._keySchedule), o(this._invKeySchedule), o(this._key)
        }, e.exports.AES = c
    }, function (e, t, r) {
        var n = r(0).Buffer,
            i = r(39);
        e.exports = function (e, t, r, o) {
            if (n.isBuffer(e) || (e = n.from(e, "binary")), t && (n.isBuffer(t) || (t = n.from(t, "binary")), 8 !== t.length)) throw new RangeError("salt should be Buffer with 8 byte length");
            for (var a = r / 8, s = n.alloc(a), f = n.alloc(o || 0), c = n.alloc(0); a > 0 || o > 0;) {
                var u = new i;
                u.update(c), u.update(e), t && u.update(t), c = u.digest();
                var h = 0;
                if (a > 0) {
                    var d = s.length - a;
                    h = Math.min(a, c.length), c.copy(s, d, 0, h), a -= h
                }
                if (h < c.length && o > 0) {
                    var l = f.length - o,
                        p = Math.min(o, c.length - h);
                    c.copy(f, l, h, h + p), o -= p
                }
            }
            return c.fill(0), {
                key: s,
                iv: f
            }
        }
    }, function (e, t, r) {
        "use strict";
        var n = t;
        n.version = r(150).version, n.utils = r(10), n.rand = r(48), n.curve = r(84), n.curves = r(50), n.ec = r(161), n.eddsa = r(165)
    }, function (e, t, r) {
        "use strict";
        var n = r(4),
            i = r(10),
            o = i.getNAF,
            a = i.getJSF,
            s = i.assert;

        function f(e, t) {
            this.type = e, this.p = new n(t.p, 16), this.red = t.prime ? n.red(t.prime) : n.mont(this.p), this.zero = new n(0).toRed(this.red), this.one = new n(1).toRed(this.red), this.two = new n(2).toRed(this.red), this.n = t.n && new n(t.n, 16), this.g = t.g && this.pointFromJSON(t.g, t.gRed), this._wnafT1 = new Array(4), this._wnafT2 = new Array(4), this._wnafT3 = new Array(4), this._wnafT4 = new Array(4), this._bitLength = this.n ? this.n.bitLength() : 0;
            var r = this.n && this.p.div(this.n);
            !r || r.cmpn(100) > 0 ? this.redN = null : (this._maxwellTrick = !0, this.redN = this.n.toRed(this.red))
        }

        function c(e, t) {
            this.curve = e, this.type = t, this.precomputed = null
        }
        e.exports = f, f.prototype.point = function () {
            throw new Error("Not implemented")
        }, f.prototype.validate = function () {
            throw new Error("Not implemented")
        }, f.prototype._fixedNafMul = function (e, t) {
            s(e.precomputed);
            var r = e._getDoubles(),
                n = o(t, 1, this._bitLength),
                i = (1 << r.step + 1) - (r.step % 2 == 0 ? 2 : 1);
            i /= 3;
            var a, f, c = [];
            for (a = 0; a < n.length; a += r.step) {
                f = 0;
                for (var u = a + r.step - 1; u >= a; u--) f = (f << 1) + n[u];
                c.push(f)
            }
            for (var h = this.jpoint(null, null, null), d = this.jpoint(null, null, null), l = i; l > 0; l--) {
                for (a = 0; a < c.length; a++)(f = c[a]) === l ? d = d.mixedAdd(r.points[a]) : f === -l && (d = d.mixedAdd(r.points[a].neg()));
                h = h.add(d)
            }
            return h.toP()
        }, f.prototype._wnafMul = function (e, t) {
            var r = 4,
                n = e._getNAFPoints(r);
            r = n.wnd;
            for (var i = n.points, a = o(t, r, this._bitLength), f = this.jpoint(null, null, null), c = a.length - 1; c >= 0; c--) {
                for (var u = 0; c >= 0 && 0 === a[c]; c--) u++;
                if (c >= 0 && u++, f = f.dblp(u), c < 0) break;
                var h = a[c];
                s(0 !== h), f = "affine" === e.type ? h > 0 ? f.mixedAdd(i[h - 1 >> 1]) : f.mixedAdd(i[-h - 1 >> 1].neg()) : h > 0 ? f.add(i[h - 1 >> 1]) : f.add(i[-h - 1 >> 1].neg())
            }
            return "affine" === e.type ? f.toP() : f
        }, f.prototype._wnafMulAdd = function (e, t, r, n, i) {
            var s, f, c, u = this._wnafT1,
                h = this._wnafT2,
                d = this._wnafT3,
                l = 0;
            for (s = 0; s < n; s++) {
                var p = (c = t[s])._getNAFPoints(e);
                u[s] = p.wnd, h[s] = p.points
            }
            for (s = n - 1; s >= 1; s -= 2) {
                var b = s - 1,
                    y = s;
                if (1 === u[b] && 1 === u[y]) {
                    var v = [t[b], null, null, t[y]];
                    0 === t[b].y.cmp(t[y].y) ? (v[1] = t[b].add(t[y]), v[2] = t[b].toJ().mixedAdd(t[y].neg())) : 0 === t[b].y.cmp(t[y].y.redNeg()) ? (v[1] = t[b].toJ().mixedAdd(t[y]), v[2] = t[b].add(t[y].neg())) : (v[1] = t[b].toJ().mixedAdd(t[y]), v[2] = t[b].toJ().mixedAdd(t[y].neg()));
                    var g = [-3, -1, -5, -7, 0, 7, 5, 1, 3],
                        m = a(r[b], r[y]);
                    for (l = Math.max(m[0].length, l), d[b] = new Array(l), d[y] = new Array(l), f = 0; f < l; f++) {
                        var _ = 0 | m[0][f],
                            w = 0 | m[1][f];
                        d[b][f] = g[3 * (_ + 1) + (w + 1)], d[y][f] = 0, h[b] = v
                    }
                } else d[b] = o(r[b], u[b], this._bitLength), d[y] = o(r[y], u[y], this._bitLength), l = Math.max(d[b].length, l), l = Math.max(d[y].length, l)
            }
            var E = this.jpoint(null, null, null),
                S = this._wnafT4;
            for (s = l; s >= 0; s--) {
                for (var A = 0; s >= 0;) {
                    var I = !0;
                    for (f = 0; f < n; f++) S[f] = 0 | d[f][s], 0 !== S[f] && (I = !1);
                    if (!I) break;
                    A++, s--
                }
                if (s >= 0 && A++, E = E.dblp(A), s < 0) break;
                for (f = 0; f < n; f++) {
                    var k = S[f];
                    0 !== k && (k > 0 ? c = h[f][k - 1 >> 1] : k < 0 && (c = h[f][-k - 1 >> 1].neg()), E = "affine" === c.type ? E.mixedAdd(c) : E.add(c))
                }
            }
            for (s = 0; s < n; s++) h[s] = null;
            return i ? E : E.toP()
        }, f.BasePoint = c, c.prototype.eq = function () {
            throw new Error("Not implemented")
        }, c.prototype.validate = function () {
            return this.curve.validate(this)
        }, f.prototype.decodePoint = function (e, t) {
            e = i.toArray(e, t);
            var r = this.p.byteLength();
            if ((4 === e[0] || 6 === e[0] || 7 === e[0]) && e.length - 1 == 2 * r) return 6 === e[0] ? s(e[e.length - 1] % 2 == 0) : 7 === e[0] && s(e[e.length - 1] % 2 == 1), this.point(e.slice(1, 1 + r), e.slice(1 + r, 1 + 2 * r));
            if ((2 === e[0] || 3 === e[0]) && e.length - 1 === r) return this.pointFromX(e.slice(1, 1 + r), 3 === e[0]);
            throw new Error("Unknown point format")
        }, c.prototype.encodeCompressed = function (e) {
            return this.encode(e, !0)
        }, c.prototype._encode = function (e) {
            var t = this.curve.p.byteLength(),
                r = this.getX().toArray("be", t);
            return e ? [this.getY().isEven() ? 2 : 3].concat(r) : [4].concat(r, this.getY().toArray("be", t))
        }, c.prototype.encode = function (e, t) {
            return i.encode(this._encode(t), e)
        }, c.prototype.precompute = function (e) {
            if (this.precomputed) return this;
            var t = {
                doubles: null,
                naf: null,
                beta: null
            };
            return t.naf = this._getNAFPoints(8), t.doubles = this._getDoubles(4, e), t.beta = this._getBeta(), this.precomputed = t, this
        }, c.prototype._hasDoubles = function (e) {
            if (!this.precomputed) return !1;
            var t = this.precomputed.doubles;
            return !!t && t.points.length >= Math.ceil((e.bitLength() + 1) / t.step)
        }, c.prototype._getDoubles = function (e, t) {
            if (this.precomputed && this.precomputed.doubles) return this.precomputed.doubles;
            for (var r = [this], n = this, i = 0; i < t; i += e) {
                for (var o = 0; o < e; o++) n = n.dbl();
                r.push(n)
            }
            return {
                step: e,
                points: r
            }
        }, c.prototype._getNAFPoints = function (e) {
            if (this.precomputed && this.precomputed.naf) return this.precomputed.naf;
            for (var t = [this], r = (1 << e) - 1, n = 1 === r ? null : this.dbl(), i = 1; i < r; i++) t[i] = t[i - 1].add(n);
            return {
                wnd: e,
                points: t
            }
        }, c.prototype._getBeta = function () {
            return null
        }, c.prototype.dblp = function (e) {
            for (var t = this, r = 0; r < e; r++) t = t.dbl();
            return t
        }
    }, function (e, t, r) {
        var n = r(168),
            i = r(175),
            o = r(176),
            a = r(46),
            s = r(70),
            f = r(0).Buffer;

        function c(e) {
            var t;
            "object" != typeof e || f.isBuffer(e) || (t = e.passphrase, e = e.key), "string" == typeof e && (e = f.from(e));
            var r, c, u = o(e, t),
                h = u.tag,
                d = u.data;
            switch (h) {
                case "CERTIFICATE":
                    c = n.certificate.decode(d, "der").tbsCertificate.subjectPublicKeyInfo;
                case "PUBLIC KEY":
                    switch (c || (c = n.PublicKey.decode(d, "der")), r = c.algorithm.algorithm.join(".")) {
                        case "1.2.840.113549.1.1.1":
                            return n.RSAPublicKey.decode(c.subjectPublicKey.data, "der");
                        case "1.2.840.10045.2.1":
                            return c.subjectPrivateKey = c.subjectPublicKey, {
                                type: "ec",
                                data: c
                            };
                        case "1.2.840.10040.4.1":
                            return c.algorithm.params.pub_key = n.DSAparam.decode(c.subjectPublicKey.data, "der"), {
                                type: "dsa",
                                data: c.algorithm.params
                            };
                        default:
                            throw new Error("unknown key id " + r)
                    }
                    case "ENCRYPTED PRIVATE KEY":
                        d = function (e, t) {
                            var r = e.algorithm.decrypt.kde.kdeparams.salt,
                                n = parseInt(e.algorithm.decrypt.kde.kdeparams.iters.toString(), 10),
                                o = i[e.algorithm.decrypt.cipher.algo.join(".")],
                                c = e.algorithm.decrypt.cipher.iv,
                                u = e.subjectPrivateKey,
                                h = parseInt(o.split("-")[1], 10) / 8,
                                d = s.pbkdf2Sync(t, r, n, h, "sha1"),
                                l = a.createDecipheriv(o, d, c),
                                p = [];
                            return p.push(l.update(u)), p.push(l.final()), f.concat(p)
                        }(d = n.EncryptedPrivateKey.decode(d, "der"), t);
                    case "PRIVATE KEY":
                        switch (r = (c = n.PrivateKey.decode(d, "der")).algorithm.algorithm.join(".")) {
                            case "1.2.840.113549.1.1.1":
                                return n.RSAPrivateKey.decode(c.subjectPrivateKey, "der");
                            case "1.2.840.10045.2.1":
                                return {
                                    curve: c.algorithm.curve, privateKey: n.ECPrivateKey.decode(c.subjectPrivateKey, "der").privateKey
                                };
                            case "1.2.840.10040.4.1":
                                return c.algorithm.params.priv_key = n.DSAparam.decode(c.subjectPrivateKey, "der"), {
                                    type: "dsa",
                                    params: c.algorithm.params
                                };
                            default:
                                throw new Error("unknown key id " + r)
                        }
                        case "RSA PUBLIC KEY":
                            return n.RSAPublicKey.decode(d, "der");
                        case "RSA PRIVATE KEY":
                            return n.RSAPrivateKey.decode(d, "der");
                        case "DSA PRIVATE KEY":
                            return {
                                type: "dsa", params: n.DSAPrivateKey.decode(d, "der")
                            };
                        case "EC PRIVATE KEY":
                            return {
                                curve: (d = n.ECPrivateKey.decode(d, "der")).parameters.value, privateKey: d.privateKey
                            };
                        default:
                            throw new Error("unknown key type " + h)
            }
        }
        e.exports = c, c.signature = n.signature
    }, function (e, t, r) {
        "use strict";
        (function (e, n) {
            var i = r(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.isPrivateKey = function (e) {
                if (!e) return !1;
                if ("string" == typeof e) return /^[0-9a-f]{64}$/g.test(e) && /\S/g.test(e);
                return o.default.privateKeyVerify(n.from(e, "hex"))
            }, t.isPublicKey = function (e) {
                return o.default.publicKeyVerify(n.from(e, "hex"))
            }, t.isEoaAddress = c, t.isScoreAddress = u, t.isAddress = h, t.isBlockHash = function (e) {
                return /^(0x)[0-9a-f]{64}$/g.test(e) && /\S/g.test(e)
            }, t.hasUppercase = d, t.hasBlank = l, t.isBlockNumber = function (e) {
                try {
                    if (d(e) || l(e)) return !1;
                    var t = (0, f.toBigNumber)(e),
                        r = (0, f.toBigNumber)(0),
                        n = (0, f.toBigNumber)(Math.pow(2, 256));
                    return t.isInteger() && t.isGreaterThanOrEqualTo(r) && t.isLessThan(n)
                } catch (e) {
                    return !1
                }
            }, t.isPredefinedBlockValue = function (e) {
                return "latest" === e
            }, t.isTransactionHash = function (e) {
                return /^(0x)[0-9a-f]{64}$/g.test(e) && /\S/g.test(e)
            }, t.isCall = function (e) {
                return (0, s.hasProperties)(e, ["to", "data", "dataType"]) && (0, s.hasProperties)(e.data, ["method"]) && u(e.to) && "call" === e.dataType
            }, t.checkDataInTransaction = p, t.isSignedTransaction = function (e) {
                var t = e.getProperties();
                if (!((0, s.hasProperties)(t, ["to", "from", "stepLimit", "nid", "version", "timestamp", "signature"]) && h(t.to) && h(t.from) && (0, a.isHex)(t.stepLimit) && (0, a.isHex)(t.nid) && (0, a.isHex)(t.version) && (0, a.isHex)(t.timestamp))) return !1;
                if (Object.prototype.hasOwnProperty.call(t, "value") && !(0, a.isHex)(t.value)) return !1;
                if (Object.prototype.hasOwnProperty.call(t, "nonce") && !(0, a.isHex)(t.nonce)) return !1;
                return p(t)
            }, t.isBlock = function (e) {
                return (0, s.hasProperties)(e, ["height", ["block_hash", "blockHash"],
                    ["merkle_tree_root_hash", "merkleTreeRootHash"],
                    ["prev_block_hash", "prevBlockHash"],
                    ["peer_id", "peerId"],
                    ["confirmed_transaction_list", "confirmedTransactionList"], "signature", ["time_stamp", "timestamp", "timeStamp"], "version"
                ])
            }, t.isScoreApi = b, t.isScoreApiList = function (e) {
                if (!(0, a.isArray)(e)) return !1;
                return e.every(function (e) {
                    return b(e)
                })
            }, t.isTransactionResult = function (e) {
                return (0, s.hasProperties)(e, ["status", "to", "txHash", "txIndex", "blockHeight", "blockHash", "cumulativeStepUsed", "stepUsed", "stepPrice"])
            };
            var o = i(r(56)),
                a = r(21),
                s = r(8),
                f = r(15);
            "undefined" == typeof window && (n = e.Buffer);

            function c(e) {
                return /^(hx)[0-9a-f]{40}$/g.test(e) && /\S/g.test(e)
            }

            function u(e) {
                return /^(cx)[0-9a-f]{40}$/g.test(e) && /\S/g.test(e)
            }

            function h(e) {
                return !(!c(e) && !u(e))
            }

            function d(e) {
                return /[A-Z]/g.test(e)
            }

            function l(e) {
                return /\s/g.test(e)
            }

            function p(e) {
                switch (e.dataType) {
                    case "call":
                        return Object.prototype.hasOwnProperty.call(e, "data") && (0, s.hasProperties)(e.data, ["method"]);
                    case "deploy":
                        return Object.prototype.hasOwnProperty.call(e, "data") && (0, s.hasProperties)(e.data, ["contentType", "content"]) && (0, a.isHex)(e.data.content);
                    case "message":
                        return Object.prototype.hasOwnProperty.call(e, "data") && (0, a.isHex)(e.data);
                    case "base":
                        return Object.prototype.hasOwnProperty.call(e, "data") && (0, s.hasProperties)(e.data, ["prep", "result"]);
                    case "deposit":
                        return Object.prototype.hasOwnProperty.call(e, "data") && (0, s.hasProperties)(e.data, ["action"]);
                    default:
                        return !0
                }
            }

            function b(e) {
                return (0, s.hasProperties)(e, ["type", "name"])
            }
        }).call(this, r(7), r(5).Buffer)
    }, function (e, t, r) {
        "use strict";
        var n = r(2);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var i = {
            crypto: n(r(107)).default,
            XMLHttpRequest: XMLHttpRequest
        };
        t.default = i, e.exports = t.default
    }, function (e, t, r) {
        "use strict";
        (function (t) {
            var n = r(1),
                i = r(59),
                o = new Array(16);

            function a() {
                i.call(this, 64), this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878
            }

            function s(e, t) {
                return e << t | e >>> 32 - t
            }

            function f(e, t, r, n, i, o, a) {
                return s(e + (t & r | ~t & n) + i + o | 0, a) + t | 0
            }

            function c(e, t, r, n, i, o, a) {
                return s(e + (t & n | r & ~n) + i + o | 0, a) + t | 0
            }

            function u(e, t, r, n, i, o, a) {
                return s(e + (t ^ r ^ n) + i + o | 0, a) + t | 0
            }

            function h(e, t, r, n, i, o, a) {
                return s(e + (r ^ (t | ~n)) + i + o | 0, a) + t | 0
            }
            n(a, i), a.prototype._update = function () {
                for (var e = o, t = 0; t < 16; ++t) e[t] = this._block.readInt32LE(4 * t);
                var r = this._a,
                    n = this._b,
                    i = this._c,
                    a = this._d;
                n = h(n = h(n = h(n = h(n = u(n = u(n = u(n = u(n = c(n = c(n = c(n = c(n = f(n = f(n = f(n = f(n, i = f(i, a = f(a, r = f(r, n, i, a, e[0], 3614090360, 7), n, i, e[1], 3905402710, 12), r, n, e[2], 606105819, 17), a, r, e[3], 3250441966, 22), i = f(i, a = f(a, r = f(r, n, i, a, e[4], 4118548399, 7), n, i, e[5], 1200080426, 12), r, n, e[6], 2821735955, 17), a, r, e[7], 4249261313, 22), i = f(i, a = f(a, r = f(r, n, i, a, e[8], 1770035416, 7), n, i, e[9], 2336552879, 12), r, n, e[10], 4294925233, 17), a, r, e[11], 2304563134, 22), i = f(i, a = f(a, r = f(r, n, i, a, e[12], 1804603682, 7), n, i, e[13], 4254626195, 12), r, n, e[14], 2792965006, 17), a, r, e[15], 1236535329, 22), i = c(i, a = c(a, r = c(r, n, i, a, e[1], 4129170786, 5), n, i, e[6], 3225465664, 9), r, n, e[11], 643717713, 14), a, r, e[0], 3921069994, 20), i = c(i, a = c(a, r = c(r, n, i, a, e[5], 3593408605, 5), n, i, e[10], 38016083, 9), r, n, e[15], 3634488961, 14), a, r, e[4], 3889429448, 20), i = c(i, a = c(a, r = c(r, n, i, a, e[9], 568446438, 5), n, i, e[14], 3275163606, 9), r, n, e[3], 4107603335, 14), a, r, e[8], 1163531501, 20), i = c(i, a = c(a, r = c(r, n, i, a, e[13], 2850285829, 5), n, i, e[2], 4243563512, 9), r, n, e[7], 1735328473, 14), a, r, e[12], 2368359562, 20), i = u(i, a = u(a, r = u(r, n, i, a, e[5], 4294588738, 4), n, i, e[8], 2272392833, 11), r, n, e[11], 1839030562, 16), a, r, e[14], 4259657740, 23), i = u(i, a = u(a, r = u(r, n, i, a, e[1], 2763975236, 4), n, i, e[4], 1272893353, 11), r, n, e[7], 4139469664, 16), a, r, e[10], 3200236656, 23), i = u(i, a = u(a, r = u(r, n, i, a, e[13], 681279174, 4), n, i, e[0], 3936430074, 11), r, n, e[3], 3572445317, 16), a, r, e[6], 76029189, 23), i = u(i, a = u(a, r = u(r, n, i, a, e[9], 3654602809, 4), n, i, e[12], 3873151461, 11), r, n, e[15], 530742520, 16), a, r, e[2], 3299628645, 23), i = h(i, a = h(a, r = h(r, n, i, a, e[0], 4096336452, 6), n, i, e[7], 1126891415, 10), r, n, e[14], 2878612391, 15), a, r, e[5], 4237533241, 21), i = h(i, a = h(a, r = h(r, n, i, a, e[12], 1700485571, 6), n, i, e[3], 2399980690, 10), r, n, e[10], 4293915773, 15), a, r, e[1], 2240044497, 21), i = h(i, a = h(a, r = h(r, n, i, a, e[8], 1873313359, 6), n, i, e[15], 4264355552, 10), r, n, e[6], 2734768916, 15), a, r, e[13], 1309151649, 21), i = h(i, a = h(a, r = h(r, n, i, a, e[4], 4149444226, 6), n, i, e[11], 3174756917, 10), r, n, e[2], 718787259, 15), a, r, e[9], 3951481745, 21), this._a = this._a + r | 0, this._b = this._b + n | 0, this._c = this._c + i | 0, this._d = this._d + a | 0
            }, a.prototype._digest = function () {
                this._block[this._blockOffset++] = 128, this._blockOffset > 56 && (this._block.fill(0, this._blockOffset, 64), this._update(), this._blockOffset = 0), this._block.fill(0, this._blockOffset, 56), this._block.writeUInt32LE(this._length[0], 56), this._block.writeUInt32LE(this._length[1], 60), this._update();
                var e = new t(16);
                return e.writeInt32LE(this._a, 0), e.writeInt32LE(this._b, 4), e.writeInt32LE(this._c, 8), e.writeInt32LE(this._d, 12), e
            }, e.exports = a
        }).call(this, r(5).Buffer)
    }, function (e, t, r) {
        "use strict";
        var n, i = "object" == typeof Reflect ? Reflect : null,
            o = i && "function" == typeof i.apply ? i.apply : function (e, t, r) {
                return Function.prototype.apply.call(e, t, r)
            };
        n = i && "function" == typeof i.ownKeys ? i.ownKeys : Object.getOwnPropertySymbols ? function (e) {
            return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
        } : function (e) {
            return Object.getOwnPropertyNames(e)
        };
        var a = Number.isNaN || function (e) {
            return e != e
        };

        function s() {
            s.init.call(this)
        }
        e.exports = s, e.exports.once = function (e, t) {
            return new Promise(function (r, n) {
                function i(r) {
                    e.removeListener(t, o), n(r)
                }

                function o() {
                    "function" == typeof e.removeListener && e.removeListener("error", i), r([].slice.call(arguments))
                }
                y(e, t, o, {
                    once: !0
                }), "error" !== t && function (e, t, r) {
                    "function" == typeof e.on && y(e, "error", t, r)
                }(e, i, {
                    once: !0
                })
            })
        }, s.EventEmitter = s, s.prototype._events = void 0, s.prototype._eventsCount = 0, s.prototype._maxListeners = void 0;
        var f = 10;

        function c(e) {
            if ("function" != typeof e) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e)
        }

        function u(e) {
            return void 0 === e._maxListeners ? s.defaultMaxListeners : e._maxListeners
        }

        function h(e, t, r, n) {
            var i, o, a, s;
            if (c(r), void 0 === (o = e._events) ? (o = e._events = Object.create(null), e._eventsCount = 0) : (void 0 !== o.newListener && (e.emit("newListener", t, r.listener ? r.listener : r), o = e._events), a = o[t]), void 0 === a) a = o[t] = r, ++e._eventsCount;
            else if ("function" == typeof a ? a = o[t] = n ? [r, a] : [a, r] : n ? a.unshift(r) : a.push(r), (i = u(e)) > 0 && a.length > i && !a.warned) {
                a.warned = !0;
                var f = new Error("Possible EventEmitter memory leak detected. " + a.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
                f.name = "MaxListenersExceededWarning", f.emitter = e, f.type = t, f.count = a.length, s = f, console && console.warn && console.warn(s)
            }
            return e
        }

        function d(e, t, r) {
            var n = {
                    fired: !1,
                    wrapFn: void 0,
                    target: e,
                    type: t,
                    listener: r
                },
                i = function () {
                    if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, 0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
                }.bind(n);
            return i.listener = r, n.wrapFn = i, i
        }

        function l(e, t, r) {
            var n = e._events;
            if (void 0 === n) return [];
            var i = n[t];
            return void 0 === i ? [] : "function" == typeof i ? r ? [i.listener || i] : [i] : r ? function (e) {
                for (var t = new Array(e.length), r = 0; r < t.length; ++r) t[r] = e[r].listener || e[r];
                return t
            }(i) : b(i, i.length)
        }

        function p(e) {
            var t = this._events;
            if (void 0 !== t) {
                var r = t[e];
                if ("function" == typeof r) return 1;
                if (void 0 !== r) return r.length
            }
            return 0
        }

        function b(e, t) {
            for (var r = new Array(t), n = 0; n < t; ++n) r[n] = e[n];
            return r
        }

        function y(e, t, r, n) {
            if ("function" == typeof e.on) n.once ? e.once(t, r) : e.on(t, r);
            else {
                if ("function" != typeof e.addEventListener) throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e);
                e.addEventListener(t, function i(o) {
                    n.once && e.removeEventListener(t, i), r(o)
                })
            }
        }
        Object.defineProperty(s, "defaultMaxListeners", {
            enumerable: !0,
            get: function () {
                return f
            },
            set: function (e) {
                if ("number" != typeof e || e < 0 || a(e)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
                f = e
            }
        }), s.init = function () {
            void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0
        }, s.prototype.setMaxListeners = function (e) {
            if ("number" != typeof e || e < 0 || a(e)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
            return this._maxListeners = e, this
        }, s.prototype.getMaxListeners = function () {
            return u(this)
        }, s.prototype.emit = function (e) {
            for (var t = [], r = 1; r < arguments.length; r++) t.push(arguments[r]);
            var n = "error" === e,
                i = this._events;
            if (void 0 !== i) n = n && void 0 === i.error;
            else if (!n) return !1;
            if (n) {
                var a;
                if (t.length > 0 && (a = t[0]), a instanceof Error) throw a;
                var s = new Error("Unhandled error." + (a ? " (" + a.message + ")" : ""));
                throw s.context = a, s
            }
            var f = i[e];
            if (void 0 === f) return !1;
            if ("function" == typeof f) o(f, this, t);
            else {
                var c = f.length,
                    u = b(f, c);
                for (r = 0; r < c; ++r) o(u[r], this, t)
            }
            return !0
        }, s.prototype.addListener = function (e, t) {
            return h(this, e, t, !1)
        }, s.prototype.on = s.prototype.addListener, s.prototype.prependListener = function (e, t) {
            return h(this, e, t, !0)
        }, s.prototype.once = function (e, t) {
            return c(t), this.on(e, d(this, e, t)), this
        }, s.prototype.prependOnceListener = function (e, t) {
            return c(t), this.prependListener(e, d(this, e, t)), this
        }, s.prototype.removeListener = function (e, t) {
            var r, n, i, o, a;
            if (c(t), void 0 === (n = this._events)) return this;
            if (void 0 === (r = n[e])) return this;
            if (r === t || r.listener === t) 0 == --this._eventsCount ? this._events = Object.create(null) : (delete n[e], n.removeListener && this.emit("removeListener", e, r.listener || t));
            else if ("function" != typeof r) {
                for (i = -1, o = r.length - 1; o >= 0; o--)
                    if (r[o] === t || r[o].listener === t) {
                        a = r[o].listener, i = o;
                        break
                    } if (i < 0) return this;
                0 === i ? r.shift() : function (e, t) {
                    for (; t + 1 < e.length; t++) e[t] = e[t + 1];
                    e.pop()
                }(r, i), 1 === r.length && (n[e] = r[0]), void 0 !== n.removeListener && this.emit("removeListener", e, a || t)
            }
            return this
        }, s.prototype.off = s.prototype.removeListener, s.prototype.removeAllListeners = function (e) {
            var t, r, n;
            if (void 0 === (r = this._events)) return this;
            if (void 0 === r.removeListener) return 0 === arguments.length ? (this._events = Object.create(null), this._eventsCount = 0) : void 0 !== r[e] && (0 == --this._eventsCount ? this._events = Object.create(null) : delete r[e]), this;
            if (0 === arguments.length) {
                var i, o = Object.keys(r);
                for (n = 0; n < o.length; ++n) "removeListener" !== (i = o[n]) && this.removeAllListeners(i);
                return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this
            }
            if ("function" == typeof (t = r[e])) this.removeListener(e, t);
            else if (void 0 !== t)
                for (n = t.length - 1; n >= 0; n--) this.removeListener(e, t[n]);
            return this
        }, s.prototype.listeners = function (e) {
            return l(this, e, !0)
        }, s.prototype.rawListeners = function (e) {
            return l(this, e, !1)
        }, s.listenerCount = function (e, t) {
            return "function" == typeof e.listenerCount ? e.listenerCount(t) : p.call(e, t)
        }, s.prototype.listenerCount = p, s.prototype.eventNames = function () {
            return this._eventsCount > 0 ? n(this._events) : []
        }
    }, function (e, t, r) {
        "use strict";
        (function (t, n, i) {
            var o = r(31);

            function a(e) {
                var t = this;
                this.next = null, this.entry = null, this.finish = function () {
                    ! function (e, t, r) {
                        var n = e.entry;
                        e.entry = null;
                        for (; n;) {
                            var i = n.callback;
                            t.pendingcb--, i(r), n = n.next
                        }
                        t.corkedRequestsFree ? t.corkedRequestsFree.next = e : t.corkedRequestsFree = e
                    }(t, e)
                }
            }
            e.exports = g;
            var s, f = !t.browser && ["v0.10", "v0.9."].indexOf(t.version.slice(0, 5)) > -1 ? n : o.nextTick;
            g.WritableState = v;
            var c = Object.create(r(25));
            c.inherits = r(1);
            var u = {
                    deprecate: r(114)
                },
                h = r(62),
                d = r(0).Buffer,
                l = i.Uint8Array || function () {};
            var p, b = r(63);

            function y() {}

            function v(e, t) {
                s = s || r(17), e = e || {};
                var n = t instanceof s;
                this.objectMode = !!e.objectMode, n && (this.objectMode = this.objectMode || !!e.writableObjectMode);
                var i = e.highWaterMark,
                    c = e.writableHighWaterMark,
                    u = this.objectMode ? 16 : 16384;
                this.highWaterMark = i || 0 === i ? i : n && (c || 0 === c) ? c : u, this.highWaterMark = Math.floor(this.highWaterMark), this.finalCalled = !1, this.needDrain = !1, this.ending = !1, this.ended = !1, this.finished = !1, this.destroyed = !1;
                var h = !1 === e.decodeStrings;
                this.decodeStrings = !h, this.defaultEncoding = e.defaultEncoding || "utf8", this.length = 0, this.writing = !1, this.corked = 0, this.sync = !0, this.bufferProcessing = !1, this.onwrite = function (e) {
                    ! function (e, t) {
                        var r = e._writableState,
                            n = r.sync,
                            i = r.writecb;
                        if (function (e) {
                                e.writing = !1, e.writecb = null, e.length -= e.writelen, e.writelen = 0
                            }(r), t) ! function (e, t, r, n, i) {
                            --t.pendingcb, r ? (o.nextTick(i, n), o.nextTick(A, e, t), e._writableState.errorEmitted = !0, e.emit("error", n)) : (i(n), e._writableState.errorEmitted = !0, e.emit("error", n), A(e, t))
                        }(e, r, n, t, i);
                        else {
                            var a = E(r);
                            a || r.corked || r.bufferProcessing || !r.bufferedRequest || w(e, r), n ? f(_, e, r, a, i) : _(e, r, a, i)
                        }
                    }(t, e)
                }, this.writecb = null, this.writelen = 0, this.bufferedRequest = null, this.lastBufferedRequest = null, this.pendingcb = 0, this.prefinished = !1, this.errorEmitted = !1, this.bufferedRequestCount = 0, this.corkedRequestsFree = new a(this)
            }

            function g(e) {
                if (s = s || r(17), !(p.call(g, this) || this instanceof s)) return new g(e);
                this._writableState = new v(e, this), this.writable = !0, e && ("function" == typeof e.write && (this._write = e.write), "function" == typeof e.writev && (this._writev = e.writev), "function" == typeof e.destroy && (this._destroy = e.destroy), "function" == typeof e.final && (this._final = e.final)), h.call(this)
            }

            function m(e, t, r, n, i, o, a) {
                t.writelen = n, t.writecb = a, t.writing = !0, t.sync = !0, r ? e._writev(i, t.onwrite) : e._write(i, o, t.onwrite), t.sync = !1
            }

            function _(e, t, r, n) {
                r || function (e, t) {
                    0 === t.length && t.needDrain && (t.needDrain = !1, e.emit("drain"))
                }(e, t), t.pendingcb--, n(), A(e, t)
            }

            function w(e, t) {
                t.bufferProcessing = !0;
                var r = t.bufferedRequest;
                if (e._writev && r && r.next) {
                    var n = t.bufferedRequestCount,
                        i = new Array(n),
                        o = t.corkedRequestsFree;
                    o.entry = r;
                    for (var s = 0, f = !0; r;) i[s] = r, r.isBuf || (f = !1), r = r.next, s += 1;
                    i.allBuffers = f, m(e, t, !0, t.length, i, "", o.finish), t.pendingcb++, t.lastBufferedRequest = null, o.next ? (t.corkedRequestsFree = o.next, o.next = null) : t.corkedRequestsFree = new a(t), t.bufferedRequestCount = 0
                } else {
                    for (; r;) {
                        var c = r.chunk,
                            u = r.encoding,
                            h = r.callback;
                        if (m(e, t, !1, t.objectMode ? 1 : c.length, c, u, h), r = r.next, t.bufferedRequestCount--, t.writing) break
                    }
                    null === r && (t.lastBufferedRequest = null)
                }
                t.bufferedRequest = r, t.bufferProcessing = !1
            }

            function E(e) {
                return e.ending && 0 === e.length && null === e.bufferedRequest && !e.finished && !e.writing
            }

            function S(e, t) {
                e._final(function (r) {
                    t.pendingcb--, r && e.emit("error", r), t.prefinished = !0, e.emit("prefinish"), A(e, t)
                })
            }

            function A(e, t) {
                var r = E(t);
                return r && (! function (e, t) {
                    t.prefinished || t.finalCalled || ("function" == typeof e._final ? (t.pendingcb++, t.finalCalled = !0, o.nextTick(S, e, t)) : (t.prefinished = !0, e.emit("prefinish")))
                }(e, t), 0 === t.pendingcb && (t.finished = !0, e.emit("finish"))), r
            }
            c.inherits(g, h), v.prototype.getBuffer = function () {
                    for (var e = this.bufferedRequest, t = []; e;) t.push(e), e = e.next;
                    return t
                },
                function () {
                    try {
                        Object.defineProperty(v.prototype, "buffer", {
                            get: u.deprecate(function () {
                                return this.getBuffer()
                            }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
                        })
                    } catch (e) {}
                }(), "function" == typeof Symbol && Symbol.hasInstance && "function" == typeof Function.prototype[Symbol.hasInstance] ? (p = Function.prototype[Symbol.hasInstance], Object.defineProperty(g, Symbol.hasInstance, {
                    value: function (e) {
                        return !!p.call(this, e) || this === g && (e && e._writableState instanceof v)
                    }
                })) : p = function (e) {
                    return e instanceof this
                }, g.prototype.pipe = function () {
                    this.emit("error", new Error("Cannot pipe, not readable"))
                }, g.prototype.write = function (e, t, r) {
                    var n, i = this._writableState,
                        a = !1,
                        s = !i.objectMode && (n = e, d.isBuffer(n) || n instanceof l);
                    return s && !d.isBuffer(e) && (e = function (e) {
                        return d.from(e)
                    }(e)), "function" == typeof t && (r = t, t = null), s ? t = "buffer" : t || (t = i.defaultEncoding), "function" != typeof r && (r = y), i.ended ? function (e, t) {
                        var r = new Error("write after end");
                        e.emit("error", r), o.nextTick(t, r)
                    }(this, r) : (s || function (e, t, r, n) {
                        var i = !0,
                            a = !1;
                        return null === r ? a = new TypeError("May not write null values to stream") : "string" == typeof r || void 0 === r || t.objectMode || (a = new TypeError("Invalid non-string/buffer chunk")), a && (e.emit("error", a), o.nextTick(n, a), i = !1), i
                    }(this, i, e, r)) && (i.pendingcb++, a = function (e, t, r, n, i, o) {
                        if (!r) {
                            var a = function (e, t, r) {
                                e.objectMode || !1 === e.decodeStrings || "string" != typeof t || (t = d.from(t, r));
                                return t
                            }(t, n, i);
                            n !== a && (r = !0, i = "buffer", n = a)
                        }
                        var s = t.objectMode ? 1 : n.length;
                        t.length += s;
                        var f = t.length < t.highWaterMark;
                        f || (t.needDrain = !0);
                        if (t.writing || t.corked) {
                            var c = t.lastBufferedRequest;
                            t.lastBufferedRequest = {
                                chunk: n,
                                encoding: i,
                                isBuf: r,
                                callback: o,
                                next: null
                            }, c ? c.next = t.lastBufferedRequest : t.bufferedRequest = t.lastBufferedRequest, t.bufferedRequestCount += 1
                        } else m(e, t, !1, s, n, i, o);
                        return f
                    }(this, i, s, e, t, r)), a
                }, g.prototype.cork = function () {
                    this._writableState.corked++
                }, g.prototype.uncork = function () {
                    var e = this._writableState;
                    e.corked && (e.corked--, e.writing || e.corked || e.finished || e.bufferProcessing || !e.bufferedRequest || w(this, e))
                }, g.prototype.setDefaultEncoding = function (e) {
                    if ("string" == typeof e && (e = e.toLowerCase()), !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((e + "").toLowerCase()) > -1)) throw new TypeError("Unknown encoding: " + e);
                    return this._writableState.defaultEncoding = e, this
                }, Object.defineProperty(g.prototype, "writableHighWaterMark", {
                    enumerable: !1,
                    get: function () {
                        return this._writableState.highWaterMark
                    }
                }), g.prototype._write = function (e, t, r) {
                    r(new Error("_write() is not implemented"))
                }, g.prototype._writev = null, g.prototype.end = function (e, t, r) {
                    var n = this._writableState;
                    "function" == typeof e ? (r = e, e = null, t = null) : "function" == typeof t && (r = t, t = null), null !== e && void 0 !== e && this.write(e, t), n.corked && (n.corked = 1, this.uncork()), n.ending || n.finished || function (e, t, r) {
                        t.ending = !0, A(e, t), r && (t.finished ? o.nextTick(r) : e.once("finish", r));
                        t.ended = !0, e.writable = !1
                    }(this, n, r)
                }, Object.defineProperty(g.prototype, "destroyed", {
                    get: function () {
                        return void 0 !== this._writableState && this._writableState.destroyed
                    },
                    set: function (e) {
                        this._writableState && (this._writableState.destroyed = e)
                    }
                }), g.prototype.destroy = b.destroy, g.prototype._undestroy = b.undestroy, g.prototype._destroy = function (e, t) {
                    this.end(), t(e)
                }
        }).call(this, r(11), r(112).setImmediate, r(7))
    }, function (e, t, r) {
        "use strict";
        var n = r(0).Buffer,
            i = n.isEncoding || function (e) {
                switch ((e = "" + e) && e.toLowerCase()) {
                    case "hex":
                    case "utf8":
                    case "utf-8":
                    case "ascii":
                    case "binary":
                    case "base64":
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                    case "raw":
                        return !0;
                    default:
                        return !1
                }
            };

        function o(e) {
            var t;
            switch (this.encoding = function (e) {
                var t = function (e) {
                    if (!e) return "utf8";
                    for (var t;;) switch (e) {
                        case "utf8":
                        case "utf-8":
                            return "utf8";
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return "utf16le";
                        case "latin1":
                        case "binary":
                            return "latin1";
                        case "base64":
                        case "ascii":
                        case "hex":
                            return e;
                        default:
                            if (t) return;
                            e = ("" + e).toLowerCase(), t = !0
                    }
                }(e);
                if ("string" != typeof t && (n.isEncoding === i || !i(e))) throw new Error("Unknown encoding: " + e);
                return t || e
            }(e), this.encoding) {
                case "utf16le":
                    this.text = f, this.end = c, t = 4;
                    break;
                case "utf8":
                    this.fillLast = s, t = 4;
                    break;
                case "base64":
                    this.text = u, this.end = h, t = 3;
                    break;
                default:
                    return this.write = d, void(this.end = l)
            }
            this.lastNeed = 0, this.lastTotal = 0, this.lastChar = n.allocUnsafe(t)
        }

        function a(e) {
            return e <= 127 ? 0 : e >> 5 == 6 ? 2 : e >> 4 == 14 ? 3 : e >> 3 == 30 ? 4 : e >> 6 == 2 ? -1 : -2
        }

        function s(e) {
            var t = this.lastTotal - this.lastNeed,
                r = function (e, t, r) {
                    if (128 != (192 & t[0])) return e.lastNeed = 0, "�";
                    if (e.lastNeed > 1 && t.length > 1) {
                        if (128 != (192 & t[1])) return e.lastNeed = 1, "�";
                        if (e.lastNeed > 2 && t.length > 2 && 128 != (192 & t[2])) return e.lastNeed = 2, "�"
                    }
                }(this, e);
            return void 0 !== r ? r : this.lastNeed <= e.length ? (e.copy(this.lastChar, t, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal)) : (e.copy(this.lastChar, t, 0, e.length), void(this.lastNeed -= e.length))
        }

        function f(e, t) {
            if ((e.length - t) % 2 == 0) {
                var r = e.toString("utf16le", t);
                if (r) {
                    var n = r.charCodeAt(r.length - 1);
                    if (n >= 55296 && n <= 56319) return this.lastNeed = 2, this.lastTotal = 4, this.lastChar[0] = e[e.length - 2], this.lastChar[1] = e[e.length - 1], r.slice(0, -1)
                }
                return r
            }
            return this.lastNeed = 1, this.lastTotal = 2, this.lastChar[0] = e[e.length - 1], e.toString("utf16le", t, e.length - 1)
        }

        function c(e) {
            var t = e && e.length ? this.write(e) : "";
            if (this.lastNeed) {
                var r = this.lastTotal - this.lastNeed;
                return t + this.lastChar.toString("utf16le", 0, r)
            }
            return t
        }

        function u(e, t) {
            var r = (e.length - t) % 3;
            return 0 === r ? e.toString("base64", t) : (this.lastNeed = 3 - r, this.lastTotal = 3, 1 === r ? this.lastChar[0] = e[e.length - 1] : (this.lastChar[0] = e[e.length - 2], this.lastChar[1] = e[e.length - 1]), e.toString("base64", t, e.length - r))
        }

        function h(e) {
            var t = e && e.length ? this.write(e) : "";
            return this.lastNeed ? t + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : t
        }

        function d(e) {
            return e.toString(this.encoding)
        }

        function l(e) {
            return e && e.length ? this.write(e) : ""
        }
        t.StringDecoder = o, o.prototype.write = function (e) {
            if (0 === e.length) return "";
            var t, r;
            if (this.lastNeed) {
                if (void 0 === (t = this.fillLast(e))) return "";
                r = this.lastNeed, this.lastNeed = 0
            } else r = 0;
            return r < e.length ? t ? t + this.text(e, r) : this.text(e, r) : t || ""
        }, o.prototype.end = function (e) {
            var t = e && e.length ? this.write(e) : "";
            return this.lastNeed ? t + "�" : t
        }, o.prototype.text = function (e, t) {
            var r = function (e, t, r) {
                var n = t.length - 1;
                if (n < r) return 0;
                var i = a(t[n]);
                if (i >= 0) return i > 0 && (e.lastNeed = i - 1), i;
                if (--n < r || -2 === i) return 0;
                if ((i = a(t[n])) >= 0) return i > 0 && (e.lastNeed = i - 2), i;
                if (--n < r || -2 === i) return 0;
                if ((i = a(t[n])) >= 0) return i > 0 && (2 === i ? i = 0 : e.lastNeed = i - 3), i;
                return 0
            }(this, e, t);
            if (!this.lastNeed) return e.toString("utf8", t);
            this.lastTotal = r;
            var n = e.length - (r - this.lastNeed);
            return e.copy(this.lastChar, 0, n), e.toString("utf8", t, n)
        }, o.prototype.fillLast = function (e) {
            if (this.lastNeed <= e.length) return e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
            e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, e.length), this.lastNeed -= e.length
        }
    }, function (e, t, r) {
        "use strict";
        var n = r(5).Buffer,
            i = r(1),
            o = r(59),
            a = new Array(16),
            s = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13],
            f = [5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11],
            c = [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6],
            u = [8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11],
            h = [0, 1518500249, 1859775393, 2400959708, 2840853838],
            d = [1352829926, 1548603684, 1836072691, 2053994217, 0];

        function l() {
            o.call(this, 64), this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878, this._e = 3285377520
        }

        function p(e, t) {
            return e << t | e >>> 32 - t
        }

        function b(e, t, r, n, i, o, a, s) {
            return p(e + (t ^ r ^ n) + o + a | 0, s) + i | 0
        }

        function y(e, t, r, n, i, o, a, s) {
            return p(e + (t & r | ~t & n) + o + a | 0, s) + i | 0
        }

        function v(e, t, r, n, i, o, a, s) {
            return p(e + ((t | ~r) ^ n) + o + a | 0, s) + i | 0
        }

        function g(e, t, r, n, i, o, a, s) {
            return p(e + (t & n | r & ~n) + o + a | 0, s) + i | 0
        }

        function m(e, t, r, n, i, o, a, s) {
            return p(e + (t ^ (r | ~n)) + o + a | 0, s) + i | 0
        }
        i(l, o), l.prototype._update = function () {
            for (var e = a, t = 0; t < 16; ++t) e[t] = this._block.readInt32LE(4 * t);
            for (var r = 0 | this._a, n = 0 | this._b, i = 0 | this._c, o = 0 | this._d, l = 0 | this._e, _ = 0 | this._a, w = 0 | this._b, E = 0 | this._c, S = 0 | this._d, A = 0 | this._e, I = 0; I < 80; I += 1) {
                var k, M;
                I < 16 ? (k = b(r, n, i, o, l, e[s[I]], h[0], c[I]), M = m(_, w, E, S, A, e[f[I]], d[0], u[I])) : I < 32 ? (k = y(r, n, i, o, l, e[s[I]], h[1], c[I]), M = g(_, w, E, S, A, e[f[I]], d[1], u[I])) : I < 48 ? (k = v(r, n, i, o, l, e[s[I]], h[2], c[I]), M = v(_, w, E, S, A, e[f[I]], d[2], u[I])) : I < 64 ? (k = g(r, n, i, o, l, e[s[I]], h[3], c[I]), M = y(_, w, E, S, A, e[f[I]], d[3], u[I])) : (k = m(r, n, i, o, l, e[s[I]], h[4], c[I]), M = b(_, w, E, S, A, e[f[I]], d[4], u[I])), r = l, l = o, o = p(i, 10), i = n, n = k, _ = A, A = S, S = p(E, 10), E = w, w = M
            }
            var x = this._b + i + S | 0;
            this._b = this._c + o + A | 0, this._c = this._d + l + _ | 0, this._d = this._e + r + w | 0, this._e = this._a + n + E | 0, this._a = x
        }, l.prototype._digest = function () {
            this._block[this._blockOffset++] = 128, this._blockOffset > 56 && (this._block.fill(0, this._blockOffset, 64), this._update(), this._blockOffset = 0), this._block.fill(0, this._blockOffset, 56), this._block.writeUInt32LE(this._length[0], 56), this._block.writeUInt32LE(this._length[1], 60), this._update();
            var e = n.alloc ? n.alloc(20) : new n(20);
            return e.writeInt32LE(this._a, 0), e.writeInt32LE(this._b, 4), e.writeInt32LE(this._c, 8), e.writeInt32LE(this._d, 12), e.writeInt32LE(this._e, 16), e
        }, e.exports = l
    }, function (e, t, r) {
        (t = e.exports = function (e) {
            e = e.toLowerCase();
            var r = t[e];
            if (!r) throw new Error(e + " is not supported (we accept pull requests)");
            return new r
        }).sha = r(120), t.sha1 = r(121), t.sha224 = r(122), t.sha256 = r(65), t.sha384 = r(123), t.sha512 = r(66)
    }, function (e, t, r) {
        "use strict";
        var n = r(9);

        function i(e) {
            this.options = e, this.type = this.options.type, this.blockSize = 8, this._init(), this.buffer = new Array(this.blockSize), this.bufferOff = 0
        }
        e.exports = i, i.prototype._init = function () {}, i.prototype.update = function (e) {
            return 0 === e.length ? [] : "decrypt" === this.type ? this._updateDecrypt(e) : this._updateEncrypt(e)
        }, i.prototype._buffer = function (e, t) {
            for (var r = Math.min(this.buffer.length - this.bufferOff, e.length - t), n = 0; n < r; n++) this.buffer[this.bufferOff + n] = e[t + n];
            return this.bufferOff += r, r
        }, i.prototype._flushBuffer = function (e, t) {
            return this._update(this.buffer, 0, e, t), this.bufferOff = 0, this.blockSize
        }, i.prototype._updateEncrypt = function (e) {
            var t = 0,
                r = 0,
                n = (this.bufferOff + e.length) / this.blockSize | 0,
                i = new Array(n * this.blockSize);
            0 !== this.bufferOff && (t += this._buffer(e, t), this.bufferOff === this.buffer.length && (r += this._flushBuffer(i, r)));
            for (var o = e.length - (e.length - t) % this.blockSize; t < o; t += this.blockSize) this._update(e, t, i, r), r += this.blockSize;
            for (; t < e.length; t++, this.bufferOff++) this.buffer[this.bufferOff] = e[t];
            return i
        }, i.prototype._updateDecrypt = function (e) {
            for (var t = 0, r = 0, n = Math.ceil((this.bufferOff + e.length) / this.blockSize) - 1, i = new Array(n * this.blockSize); n > 0; n--) t += this._buffer(e, t), r += this._flushBuffer(i, r);
            return t += this._buffer(e, t), i
        }, i.prototype.final = function (e) {
            var t, r;
            return e && (t = this.update(e)), r = "encrypt" === this.type ? this._finalEncrypt() : this._finalDecrypt(), t ? t.concat(r) : r
        }, i.prototype._pad = function (e, t) {
            if (0 === t) return !1;
            for (; t < e.length;) e[t++] = 0;
            return !0
        }, i.prototype._finalEncrypt = function () {
            if (!this._pad(this.buffer, this.bufferOff)) return [];
            var e = new Array(this.blockSize);
            return this._update(this.buffer, 0, e, 0), e
        }, i.prototype._unpad = function (e) {
            return e
        }, i.prototype._finalDecrypt = function () {
            n.equal(this.bufferOff, this.blockSize, "Not enough data to decrypt");
            var e = new Array(this.blockSize);
            return this._flushBuffer(e, 0), this._unpad(e)
        }
    }, function (e, t, r) {
        var n = r(132),
            i = r(140),
            o = r(78);
        t.createCipher = t.Cipher = n.createCipher, t.createCipheriv = t.Cipheriv = n.createCipheriv, t.createDecipher = t.Decipher = i.createDecipher, t.createDecipheriv = t.Decipheriv = i.createDecipheriv, t.listCiphers = t.getCiphers = function () {
            return Object.keys(o)
        }
    }, function (e, t, r) {
        var n = {
                ECB: r(133),
                CBC: r(134),
                CFB: r(135),
                CFB8: r(136),
                CFB1: r(137),
                OFB: r(138),
                CTR: r(76),
                GCM: r(76)
            },
            i = r(78);
        for (var o in i) i[o].module = n[i[o].mode];
        e.exports = i
    }, function (e, t, r) {
        var n;

        function i(e) {
            this.rand = e
        }
        if (e.exports = function (e) {
                return n || (n = new i(null)), n.generate(e)
            }, e.exports.Rand = i, i.prototype.generate = function (e) {
                return this._rand(e)
            }, i.prototype._rand = function (e) {
                if (this.rand.getBytes) return this.rand.getBytes(e);
                for (var t = new Uint8Array(e), r = 0; r < t.length; r++) t[r] = this.rand.getByte();
                return t
            }, "object" == typeof self) self.crypto && self.crypto.getRandomValues ? i.prototype._rand = function (e) {
            var t = new Uint8Array(e);
            return self.crypto.getRandomValues(t), t
        } : self.msCrypto && self.msCrypto.getRandomValues ? i.prototype._rand = function (e) {
            var t = new Uint8Array(e);
            return self.msCrypto.getRandomValues(t), t
        } : "object" == typeof window && (i.prototype._rand = function () {
            throw new Error("Not implemented yet")
        });
        else try {
            var o = r(145);
            if ("function" != typeof o.randomBytes) throw new Error("Not supported");
            i.prototype._rand = function (e) {
                return o.randomBytes(e)
            }
        } catch (e) {}
    }, function (e, t, r) {
        (function (t) {
            var n = r(4),
                i = r(18);

            function o(e) {
                var t, r = e.modulus.byteLength();
                do {
                    t = new n(i(r))
                } while (t.cmp(e.modulus) >= 0 || !t.umod(e.prime1) || !t.umod(e.prime2));
                return t
            }

            function a(e, r) {
                var i = function (e) {
                        var t = o(e);
                        return {
                            blinder: t.toRed(n.mont(e.modulus)).redPow(new n(e.publicExponent)).fromRed(),
                            unblinder: t.invm(e.modulus)
                        }
                    }(r),
                    a = r.modulus.byteLength(),
                    s = new n(e).mul(i.blinder).umod(r.modulus),
                    f = s.toRed(n.mont(r.prime1)),
                    c = s.toRed(n.mont(r.prime2)),
                    u = r.coefficient,
                    h = r.prime1,
                    d = r.prime2,
                    l = f.redPow(r.exponent1).fromRed(),
                    p = c.redPow(r.exponent2).fromRed(),
                    b = l.isub(p).imul(u).umod(h).imul(d);
                return p.iadd(b).imul(i.unblinder).umod(r.modulus).toArrayLike(t, "be", a)
            }
            a.getr = o, e.exports = a
        }).call(this, r(5).Buffer)
    }, function (e, t, r) {
        "use strict";
        var n, i = t,
            o = r(51),
            a = r(84),
            s = r(10).assert;

        function f(e) {
            "short" === e.type ? this.curve = new a.short(e) : "edwards" === e.type ? this.curve = new a.edwards(e) : this.curve = new a.mont(e), this.g = this.curve.g, this.n = this.curve.n, this.hash = e.hash, s(this.g.validate(), "Invalid curve"), s(this.g.mul(this.n).isInfinity(), "Invalid curve, G*N != O")
        }

        function c(e, t) {
            Object.defineProperty(i, e, {
                configurable: !0,
                enumerable: !0,
                get: function () {
                    var r = new f(t);
                    return Object.defineProperty(i, e, {
                        configurable: !0,
                        enumerable: !0,
                        value: r
                    }), r
                }
            })
        }
        i.PresetCurve = f, c("p192", {
            type: "short",
            prime: "p192",
            p: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
            a: "ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",
            b: "64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",
            n: "ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",
            hash: o.sha256,
            gRed: !1,
            g: ["188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012", "07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811"]
        }), c("p224", {
            type: "short",
            prime: "p224",
            p: "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
            a: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe",
            b: "b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4",
            n: "ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d",
            hash: o.sha256,
            gRed: !1,
            g: ["b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21", "bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34"]
        }), c("p256", {
            type: "short",
            prime: null,
            p: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff",
            a: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc",
            b: "5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b",
            n: "ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551",
            hash: o.sha256,
            gRed: !1,
            g: ["6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296", "4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5"]
        }), c("p384", {
            type: "short",
            prime: null,
            p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff",
            a: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc",
            b: "b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef",
            n: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973",
            hash: o.sha384,
            gRed: !1,
            g: ["aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7", "3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f"]
        }), c("p521", {
            type: "short",
            prime: null,
            p: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff",
            a: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc",
            b: "00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00",
            n: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409",
            hash: o.sha512,
            gRed: !1,
            g: ["000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66", "00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650"]
        }), c("curve25519", {
            type: "mont",
            prime: "p25519",
            p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
            a: "76d06",
            b: "1",
            n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
            hash: o.sha256,
            gRed: !1,
            g: ["9"]
        }), c("ed25519", {
            type: "edwards",
            prime: "p25519",
            p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
            a: "-1",
            c: "1",
            d: "52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3",
            n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
            hash: o.sha256,
            gRed: !1,
            g: ["216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a", "6666666666666666666666666666666666666666666666666666666666666658"]
        });
        try {
            n = r(160)
        } catch (e) {
            n = void 0
        }
        c("secp256k1", {
            type: "short",
            prime: "k256",
            p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
            a: "0",
            b: "7",
            n: "ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",
            h: "1",
            hash: o.sha256,
            beta: "7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",
            lambda: "5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72",
            basis: [{
                a: "3086d221a7d46bcde86c90e49284eb15",
                b: "-e4437ed6010e88286f547fa90abfe4c3"
            }, {
                a: "114ca50f7a8e2f3f657c1108d9d44cfd8",
                b: "3086d221a7d46bcde86c90e49284eb15"
            }],
            gRed: !1,
            g: ["79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798", "483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8", n]
        })
    }, function (e, t, r) {
        var n = t;
        n.utils = r(12), n.common = r(27), n.sha = r(154), n.ripemd = r(158), n.hmac = r(159), n.sha1 = n.sha.sha1, n.sha256 = n.sha.sha256, n.sha224 = n.sha.sha224, n.sha384 = n.sha.sha384, n.sha512 = n.sha.sha512, n.ripemd160 = n.ripemd.ripemd160
    }, function (e, t, r) {
        "use strict";
        (function (t) {
            var n, i = r(5),
                o = i.Buffer,
                a = {};
            for (n in i) i.hasOwnProperty(n) && "SlowBuffer" !== n && "Buffer" !== n && (a[n] = i[n]);
            var s = a.Buffer = {};
            for (n in o) o.hasOwnProperty(n) && "allocUnsafe" !== n && "allocUnsafeSlow" !== n && (s[n] = o[n]);
            if (a.Buffer.prototype = o.prototype, s.from && s.from !== Uint8Array.from || (s.from = function (e, t, r) {
                    if ("number" == typeof e) throw new TypeError('The "value" argument must not be of type number. Received type ' + typeof e);
                    if (e && void 0 === e.length) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e);
                    return o(e, t, r)
                }), s.alloc || (s.alloc = function (e, t, r) {
                    if ("number" != typeof e) throw new TypeError('The "size" argument must be of type number. Received type ' + typeof e);
                    if (e < 0 || e >= 2 * (1 << 30)) throw new RangeError('The value "' + e + '" is invalid for option "size"');
                    var n = o(e);
                    return t && 0 !== t.length ? "string" == typeof r ? n.fill(t, r) : n.fill(t) : n.fill(0), n
                }), !a.kStringMaxLength) try {
                a.kStringMaxLength = t.binding("buffer").kStringMaxLength
            } catch (e) {}
            a.constants || (a.constants = {
                MAX_LENGTH: a.kMaxLength
            }, a.kStringMaxLength && (a.constants.MAX_STRING_LENGTH = a.kStringMaxLength)), e.exports = a
        }).call(this, r(11))
    }, function (e, t, r) {
        "use strict";
        const n = r(54).Reporter,
            i = r(28).EncoderBuffer,
            o = r(28).DecoderBuffer,
            a = r(9),
            s = ["seq", "seqof", "set", "setof", "objid", "bool", "gentime", "utctime", "null_", "enum", "int", "objDesc", "bitstr", "bmpstr", "charstr", "genstr", "graphstr", "ia5str", "iso646str", "numstr", "octstr", "printstr", "t61str", "unistr", "utf8str", "videostr"],
            f = ["key", "obj", "use", "optional", "explicit", "implicit", "def", "choice", "any", "contains"].concat(s);

        function c(e, t, r) {
            const n = {};
            this._baseState = n, n.name = r, n.enc = e, n.parent = t || null, n.children = null, n.tag = null, n.args = null, n.reverseArgs = null, n.choice = null, n.optional = !1, n.any = !1, n.obj = !1, n.use = null, n.useDecoder = null, n.key = null, n.default = null, n.explicit = null, n.implicit = null, n.contains = null, n.parent || (n.children = [], this._wrap())
        }
        e.exports = c;
        const u = ["enc", "parent", "children", "tag", "args", "reverseArgs", "choice", "optional", "any", "obj", "use", "alteredUse", "key", "default", "explicit", "implicit", "contains"];
        c.prototype.clone = function () {
            const e = this._baseState,
                t = {};
            u.forEach(function (r) {
                t[r] = e[r]
            });
            const r = new this.constructor(t.parent);
            return r._baseState = t, r
        }, c.prototype._wrap = function () {
            const e = this._baseState;
            f.forEach(function (t) {
                this[t] = function () {
                    const r = new this.constructor(this);
                    return e.children.push(r), r[t].apply(r, arguments)
                }
            }, this)
        }, c.prototype._init = function (e) {
            const t = this._baseState;
            a(null === t.parent), e.call(this), t.children = t.children.filter(function (e) {
                return e._baseState.parent === this
            }, this), a.equal(t.children.length, 1, "Root node can have only one child")
        }, c.prototype._useArgs = function (e) {
            const t = this._baseState,
                r = e.filter(function (e) {
                    return e instanceof this.constructor
                }, this);
            e = e.filter(function (e) {
                return !(e instanceof this.constructor)
            }, this), 0 !== r.length && (a(null === t.children), t.children = r, r.forEach(function (e) {
                e._baseState.parent = this
            }, this)), 0 !== e.length && (a(null === t.args), t.args = e, t.reverseArgs = e.map(function (e) {
                if ("object" != typeof e || e.constructor !== Object) return e;
                const t = {};
                return Object.keys(e).forEach(function (r) {
                    r == (0 | r) && (r |= 0);
                    const n = e[r];
                    t[n] = r
                }), t
            }))
        }, ["_peekTag", "_decodeTag", "_use", "_decodeStr", "_decodeObjid", "_decodeTime", "_decodeNull", "_decodeInt", "_decodeBool", "_decodeList", "_encodeComposite", "_encodeStr", "_encodeObjid", "_encodeTime", "_encodeNull", "_encodeInt", "_encodeBool"].forEach(function (e) {
            c.prototype[e] = function () {
                const t = this._baseState;
                throw new Error(e + " not implemented for encoding: " + t.enc)
            }
        }), s.forEach(function (e) {
            c.prototype[e] = function () {
                const t = this._baseState,
                    r = Array.prototype.slice.call(arguments);
                return a(null === t.tag), t.tag = e, this._useArgs(r), this
            }
        }), c.prototype.use = function (e) {
            a(e);
            const t = this._baseState;
            return a(null === t.use), t.use = e, this
        }, c.prototype.optional = function () {
            return this._baseState.optional = !0, this
        }, c.prototype.def = function (e) {
            const t = this._baseState;
            return a(null === t.default), t.default = e, t.optional = !0, this
        }, c.prototype.explicit = function (e) {
            const t = this._baseState;
            return a(null === t.explicit && null === t.implicit), t.explicit = e, this
        }, c.prototype.implicit = function (e) {
            const t = this._baseState;
            return a(null === t.explicit && null === t.implicit), t.implicit = e, this
        }, c.prototype.obj = function () {
            const e = this._baseState,
                t = Array.prototype.slice.call(arguments);
            return e.obj = !0, 0 !== t.length && this._useArgs(t), this
        }, c.prototype.key = function (e) {
            const t = this._baseState;
            return a(null === t.key), t.key = e, this
        }, c.prototype.any = function () {
            return this._baseState.any = !0, this
        }, c.prototype.choice = function (e) {
            const t = this._baseState;
            return a(null === t.choice), t.choice = e, this._useArgs(Object.keys(e).map(function (t) {
                return e[t]
            })), this
        }, c.prototype.contains = function (e) {
            const t = this._baseState;
            return a(null === t.use), t.contains = e, this
        }, c.prototype._decode = function (e, t) {
            const r = this._baseState;
            if (null === r.parent) return e.wrapResult(r.children[0]._decode(e, t));
            let n, i = r.default,
                a = !0,
                s = null;
            if (null !== r.key && (s = e.enterKey(r.key)), r.optional) {
                let n = null;
                if (null !== r.explicit ? n = r.explicit : null !== r.implicit ? n = r.implicit : null !== r.tag && (n = r.tag), null !== n || r.any) {
                    if (a = this._peekTag(e, n, r.any), e.isError(a)) return a
                } else {
                    const n = e.save();
                    try {
                        null === r.choice ? this._decodeGeneric(r.tag, e, t) : this._decodeChoice(e, t), a = !0
                    } catch (e) {
                        a = !1
                    }
                    e.restore(n)
                }
            }
            if (r.obj && a && (n = e.enterObject()), a) {
                if (null !== r.explicit) {
                    const t = this._decodeTag(e, r.explicit);
                    if (e.isError(t)) return t;
                    e = t
                }
                const n = e.offset;
                if (null === r.use && null === r.choice) {
                    let t;
                    r.any && (t = e.save());
                    const n = this._decodeTag(e, null !== r.implicit ? r.implicit : r.tag, r.any);
                    if (e.isError(n)) return n;
                    r.any ? i = e.raw(t) : e = n
                }
                if (t && t.track && null !== r.tag && t.track(e.path(), n, e.length, "tagged"), t && t.track && null !== r.tag && t.track(e.path(), e.offset, e.length, "content"), r.any || (i = null === r.choice ? this._decodeGeneric(r.tag, e, t) : this._decodeChoice(e, t)), e.isError(i)) return i;
                if (r.any || null !== r.choice || null === r.children || r.children.forEach(function (r) {
                        r._decode(e, t)
                    }), r.contains && ("octstr" === r.tag || "bitstr" === r.tag)) {
                    const n = new o(i);
                    i = this._getUse(r.contains, e._reporterState.obj)._decode(n, t)
                }
            }
            return r.obj && a && (i = e.leaveObject(n)), null === r.key || null === i && !0 !== a ? null !== s && e.exitKey(s) : e.leaveKey(s, r.key, i), i
        }, c.prototype._decodeGeneric = function (e, t, r) {
            const n = this._baseState;
            return "seq" === e || "set" === e ? null : "seqof" === e || "setof" === e ? this._decodeList(t, e, n.args[0], r) : /str$/.test(e) ? this._decodeStr(t, e, r) : "objid" === e && n.args ? this._decodeObjid(t, n.args[0], n.args[1], r) : "objid" === e ? this._decodeObjid(t, null, null, r) : "gentime" === e || "utctime" === e ? this._decodeTime(t, e, r) : "null_" === e ? this._decodeNull(t, r) : "bool" === e ? this._decodeBool(t, r) : "objDesc" === e ? this._decodeStr(t, e, r) : "int" === e || "enum" === e ? this._decodeInt(t, n.args && n.args[0], r) : null !== n.use ? this._getUse(n.use, t._reporterState.obj)._decode(t, r) : t.error("unknown tag: " + e)
        }, c.prototype._getUse = function (e, t) {
            const r = this._baseState;
            return r.useDecoder = this._use(e, t), a(null === r.useDecoder._baseState.parent), r.useDecoder = r.useDecoder._baseState.children[0], r.implicit !== r.useDecoder._baseState.implicit && (r.useDecoder = r.useDecoder.clone(), r.useDecoder._baseState.implicit = r.implicit), r.useDecoder
        }, c.prototype._decodeChoice = function (e, t) {
            const r = this._baseState;
            let n = null,
                i = !1;
            return Object.keys(r.choice).some(function (o) {
                const a = e.save(),
                    s = r.choice[o];
                try {
                    const r = s._decode(e, t);
                    if (e.isError(r)) return !1;
                    n = {
                        type: o,
                        value: r
                    }, i = !0
                } catch (t) {
                    return e.restore(a), !1
                }
                return !0
            }, this), i ? n : e.error("Choice not matched")
        }, c.prototype._createEncoderBuffer = function (e) {
            return new i(e, this.reporter)
        }, c.prototype._encode = function (e, t, r) {
            const n = this._baseState;
            if (null !== n.default && n.default === e) return;
            const i = this._encodeValue(e, t, r);
            return void 0 === i || this._skipDefault(i, t, r) ? void 0 : i
        }, c.prototype._encodeValue = function (e, t, r) {
            const i = this._baseState;
            if (null === i.parent) return i.children[0]._encode(e, t || new n);
            let o = null;
            if (this.reporter = t, i.optional && void 0 === e) {
                if (null === i.default) return;
                e = i.default
            }
            let a = null,
                s = !1;
            if (i.any) o = this._createEncoderBuffer(e);
            else if (i.choice) o = this._encodeChoice(e, t);
            else if (i.contains) a = this._getUse(i.contains, r)._encode(e, t), s = !0;
            else if (i.children) a = i.children.map(function (r) {
                if ("null_" === r._baseState.tag) return r._encode(null, t, e);
                if (null === r._baseState.key) return t.error("Child should have a key");
                const n = t.enterKey(r._baseState.key);
                if ("object" != typeof e) return t.error("Child expected, but input is not object");
                const i = r._encode(e[r._baseState.key], t, e);
                return t.leaveKey(n), i
            }, this).filter(function (e) {
                return e
            }), a = this._createEncoderBuffer(a);
            else if ("seqof" === i.tag || "setof" === i.tag) {
                if (!i.args || 1 !== i.args.length) return t.error("Too many args for : " + i.tag);
                if (!Array.isArray(e)) return t.error("seqof/setof, but data is not Array");
                const r = this.clone();
                r._baseState.implicit = null, a = this._createEncoderBuffer(e.map(function (r) {
                    const n = this._baseState;
                    return this._getUse(n.args[0], e)._encode(r, t)
                }, r))
            } else null !== i.use ? o = this._getUse(i.use, r)._encode(e, t) : (a = this._encodePrimitive(i.tag, e), s = !0);
            if (!i.any && null === i.choice) {
                const e = null !== i.implicit ? i.implicit : i.tag,
                    r = null === i.implicit ? "universal" : "context";
                null === e ? null === i.use && t.error("Tag could be omitted only for .use()") : null === i.use && (o = this._encodeComposite(e, s, r, a))
            }
            return null !== i.explicit && (o = this._encodeComposite(i.explicit, !1, "context", o)), o
        }, c.prototype._encodeChoice = function (e, t) {
            const r = this._baseState,
                n = r.choice[e.type];
            return n || a(!1, e.type + " not found in " + JSON.stringify(Object.keys(r.choice))), n._encode(e.value, t)
        }, c.prototype._encodePrimitive = function (e, t) {
            const r = this._baseState;
            if (/str$/.test(e)) return this._encodeStr(t, e);
            if ("objid" === e && r.args) return this._encodeObjid(t, r.reverseArgs[0], r.args[1]);
            if ("objid" === e) return this._encodeObjid(t, null, null);
            if ("gentime" === e || "utctime" === e) return this._encodeTime(t, e);
            if ("null_" === e) return this._encodeNull();
            if ("int" === e || "enum" === e) return this._encodeInt(t, r.args && r.reverseArgs[0]);
            if ("bool" === e) return this._encodeBool(t);
            if ("objDesc" === e) return this._encodeStr(t, e);
            throw new Error("Unsupported tag: " + e)
        }, c.prototype._isNumstr = function (e) {
            return /^[0-9 ]*$/.test(e)
        }, c.prototype._isPrintstr = function (e) {
            return /^[A-Za-z0-9 '()+,-./:=?]*$/.test(e)
        }
    }, function (e, t, r) {
        "use strict";
        const n = r(1);

        function i(e) {
            this._reporterState = {
                obj: null,
                path: [],
                options: e || {},
                errors: []
            }
        }

        function o(e, t) {
            this.path = e, this.rethrow(t)
        }
        t.Reporter = i, i.prototype.isError = function (e) {
            return e instanceof o
        }, i.prototype.save = function () {
            const e = this._reporterState;
            return {
                obj: e.obj,
                pathLen: e.path.length
            }
        }, i.prototype.restore = function (e) {
            const t = this._reporterState;
            t.obj = e.obj, t.path = t.path.slice(0, e.pathLen)
        }, i.prototype.enterKey = function (e) {
            return this._reporterState.path.push(e)
        }, i.prototype.exitKey = function (e) {
            const t = this._reporterState;
            t.path = t.path.slice(0, e - 1)
        }, i.prototype.leaveKey = function (e, t, r) {
            const n = this._reporterState;
            this.exitKey(e), null !== n.obj && (n.obj[t] = r)
        }, i.prototype.path = function () {
            return this._reporterState.path.join("/")
        }, i.prototype.enterObject = function () {
            const e = this._reporterState,
                t = e.obj;
            return e.obj = {}, t
        }, i.prototype.leaveObject = function (e) {
            const t = this._reporterState,
                r = t.obj;
            return t.obj = e, r
        }, i.prototype.error = function (e) {
            let t;
            const r = this._reporterState,
                n = e instanceof o;
            if (t = n ? e : new o(r.path.map(function (e) {
                    return "[" + JSON.stringify(e) + "]"
                }).join(""), e.message || e, e.stack), !r.options.partial) throw t;
            return n || r.errors.push(t), t
        }, i.prototype.wrapResult = function (e) {
            const t = this._reporterState;
            return t.options.partial ? {
                result: this.isError(e) ? null : e,
                errors: t.errors
            } : e
        }, n(o, Error), o.prototype.rethrow = function (e) {
            if (this.message = e + " at: " + (this.path || "(shallow)"), Error.captureStackTrace && Error.captureStackTrace(this, o), !this.stack) try {
                throw new Error(this.message)
            } catch (e) {
                this.stack = e.stack
            }
            return this
        }
    }, function (e, t, r) {
        "use strict";

        function n(e) {
            const t = {};
            return Object.keys(e).forEach(function (r) {
                (0 | r) == r && (r |= 0);
                const n = e[r];
                t[n] = r
            }), t
        }
        t.tagClass = {
            0: "universal",
            1: "application",
            2: "context",
            3: "private"
        }, t.tagClassByName = n(t.tagClass), t.tag = {
            0: "end",
            1: "bool",
            2: "int",
            3: "bitstr",
            4: "octstr",
            5: "null_",
            6: "objid",
            7: "objDesc",
            8: "external",
            9: "real",
            10: "enum",
            11: "embed",
            12: "utf8str",
            13: "relativeOid",
            16: "seq",
            17: "set",
            18: "numstr",
            19: "printstr",
            20: "t61str",
            21: "videostr",
            22: "ia5str",
            23: "utctime",
            24: "gentime",
            25: "graphstr",
            26: "iso646str",
            27: "genstr",
            28: "unistr",
            29: "charstr",
            30: "bmpstr"
        }, t.tagByName = n(t.tag)
    }, function (e, t, r) {
        e.exports = r(183)(r(187))
    }, function (e, t, r) {
        var n;
        ! function (i) {
            "use strict";
            var o, a = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,
                s = Math.ceil,
                f = Math.floor,
                c = "[BigNumber Error] ",
                u = c + "Number primitive has more than 15 significant digits: ",
                h = 1e14,
                d = 14,
                l = 9007199254740991,
                p = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13],
                b = 1e7,
                y = 1e9;

            function v(e) {
                var t = 0 | e;
                return e > 0 || e === t ? t : t - 1
            }

            function g(e) {
                for (var t, r, n = 1, i = e.length, o = e[0] + ""; n < i;) {
                    for (t = e[n++] + "", r = d - t.length; r--; t = "0" + t);
                    o += t
                }
                for (i = o.length; 48 === o.charCodeAt(--i););
                return o.slice(0, i + 1 || 1)
            }

            function m(e, t) {
                var r, n, i = e.c,
                    o = t.c,
                    a = e.s,
                    s = t.s,
                    f = e.e,
                    c = t.e;
                if (!a || !s) return null;
                if (r = i && !i[0], n = o && !o[0], r || n) return r ? n ? 0 : -s : a;
                if (a != s) return a;
                if (r = a < 0, n = f == c, !i || !o) return n ? 0 : !i ^ r ? 1 : -1;
                if (!n) return f > c ^ r ? 1 : -1;
                for (s = (f = i.length) < (c = o.length) ? f : c, a = 0; a < s; a++)
                    if (i[a] != o[a]) return i[a] > o[a] ^ r ? 1 : -1;
                return f == c ? 0 : f > c ^ r ? 1 : -1
            }

            function _(e, t, r, n) {
                if (e < t || e > r || e !== (e < 0 ? s(e) : f(e))) throw Error(c + (n || "Argument") + ("number" == typeof e ? e < t || e > r ? " out of range: " : " not an integer: " : " not a primitive number: ") + e)
            }

            function w(e) {
                return "[object Array]" == Object.prototype.toString.call(e)
            }

            function E(e) {
                var t = e.c.length - 1;
                return v(e.e / d) == t && e.c[t] % 2 != 0
            }

            function S(e, t) {
                return (e.length > 1 ? e.charAt(0) + "." + e.slice(1) : e) + (t < 0 ? "e" : "e+") + t
            }

            function A(e, t, r) {
                var n, i;
                if (t < 0) {
                    for (i = r + "."; ++t; i += r);
                    e = i + e
                } else if (++t > (n = e.length)) {
                    for (i = r, t -= n; --t; i += r);
                    e += i
                } else t < n && (e = e.slice(0, t) + "." + e.slice(t));
                return e
            }(o = function e(t) {
                var r, n, i, o, I, k, M, x, B, T = H.prototype = {
                        constructor: H,
                        toString: null,
                        valueOf: null
                    },
                    P = new H(1),
                    L = 20,
                    R = 4,
                    C = -7,
                    N = 21,
                    O = -1e7,
                    D = 1e7,
                    j = !1,
                    U = 1,
                    K = 0,
                    q = {
                        decimalSeparator: ".",
                        groupSeparator: ",",
                        groupSize: 3,
                        secondaryGroupSize: 0,
                        fractionGroupSeparator: " ",
                        fractionGroupSize: 0
                    },
                    z = "0123456789abcdefghijklmnopqrstuvwxyz";

                function H(e, t) {
                    var r, o, s, c, h, p, b, y, v = this;
                    if (!(v instanceof H)) return new H(e, t);
                    if (null == t) {
                        if (e instanceof H) return v.s = e.s, v.e = e.e, void(v.c = (e = e.c) ? e.slice() : e);
                        if ((p = "number" == typeof e) && 0 * e == 0) {
                            if (v.s = 1 / e < 0 ? (e = -e, -1) : 1, e === ~~e) {
                                for (c = 0, h = e; h >= 10; h /= 10, c++);
                                return v.e = c, void(v.c = [e])
                            }
                            y = e + ""
                        } else {
                            if (!a.test(y = e + "")) return i(v, y, p);
                            v.s = 45 == y.charCodeAt(0) ? (y = y.slice(1), -1) : 1
                        }(c = y.indexOf(".")) > -1 && (y = y.replace(".", "")), (h = y.search(/e/i)) > 0 ? (c < 0 && (c = h), c += +y.slice(h + 1), y = y.substring(0, h)) : c < 0 && (c = y.length)
                    } else {
                        if (_(t, 2, z.length, "Base"), y = e + "", 10 == t) return G(v = new H(e instanceof H ? e : y), L + v.e + 1, R);
                        if (p = "number" == typeof e) {
                            if (0 * e != 0) return i(v, y, p, t);
                            if (v.s = 1 / e < 0 ? (y = y.slice(1), -1) : 1, H.DEBUG && y.replace(/^0\.0*|\./, "").length > 15) throw Error(u + e);
                            p = !1
                        } else v.s = 45 === y.charCodeAt(0) ? (y = y.slice(1), -1) : 1;
                        for (r = z.slice(0, t), c = h = 0, b = y.length; h < b; h++)
                            if (r.indexOf(o = y.charAt(h)) < 0) {
                                if ("." == o) {
                                    if (h > c) {
                                        c = b;
                                        continue
                                    }
                                } else if (!s && (y == y.toUpperCase() && (y = y.toLowerCase()) || y == y.toLowerCase() && (y = y.toUpperCase()))) {
                                    s = !0, h = -1, c = 0;
                                    continue
                                }
                                return i(v, e + "", p, t)
                            }(c = (y = n(y, t, 10, v.s)).indexOf(".")) > - 1 ? y = y.replace(".", "") : c = y.length
                    }
                    for (h = 0; 48 === y.charCodeAt(h); h++);
                    for (b = y.length; 48 === y.charCodeAt(--b););
                    if (y = y.slice(h, ++b)) {
                        if (b -= h, p && H.DEBUG && b > 15 && (e > l || e !== f(e))) throw Error(u + v.s * e);
                        if ((c = c - h - 1) > D) v.c = v.e = null;
                        else if (c < O) v.c = [v.e = 0];
                        else {
                            if (v.e = c, v.c = [], h = (c + 1) % d, c < 0 && (h += d), h < b) {
                                for (h && v.c.push(+y.slice(0, h)), b -= d; h < b;) v.c.push(+y.slice(h, h += d));
                                y = y.slice(h), h = d - y.length
                            } else h -= b;
                            for (; h--; y += "0");
                            v.c.push(+y)
                        }
                    } else v.c = [v.e = 0]
                }

                function V(e, t, r, n) {
                    var i, o, a, s, f;
                    if (null == r ? r = R : _(r, 0, 8), !e.c) return e.toString();
                    if (i = e.c[0], a = e.e, null == t) f = g(e.c), f = 1 == n || 2 == n && a <= C ? S(f, a) : A(f, a, "0");
                    else if (o = (e = G(new H(e), t, r)).e, s = (f = g(e.c)).length, 1 == n || 2 == n && (t <= o || o <= C)) {
                        for (; s < t; f += "0", s++);
                        f = S(f, o)
                    } else if (t -= a, f = A(f, o, "0"), o + 1 > s) {
                        if (--t > 0)
                            for (f += "."; t--; f += "0");
                    } else if ((t += o - s) > 0)
                        for (o + 1 == s && (f += "."); t--; f += "0");
                    return e.s < 0 && i ? "-" + f : f
                }

                function Y(e, t) {
                    var r, n, i = 0;
                    for (w(e[0]) && (e = e[0]), r = new H(e[0]); ++i < e.length;) {
                        if (!(n = new H(e[i])).s) {
                            r = n;
                            break
                        }
                        t.call(r, n) && (r = n)
                    }
                    return r
                }

                function F(e, t, r) {
                    for (var n = 1, i = t.length; !t[--i]; t.pop());
                    for (i = t[0]; i >= 10; i /= 10, n++);
                    return (r = n + r * d - 1) > D ? e.c = e.e = null : r < O ? e.c = [e.e = 0] : (e.e = r, e.c = t), e
                }

                function G(e, t, r, n) {
                    var i, o, a, c, u, l, b, y = e.c,
                        v = p;
                    if (y) {
                        e: {
                            for (i = 1, c = y[0]; c >= 10; c /= 10, i++);
                            if ((o = t - i) < 0) o += d,
                            a = t,
                            b = (u = y[l = 0]) / v[i - a - 1] % 10 | 0;
                            else if ((l = s((o + 1) / d)) >= y.length) {
                                if (!n) break e;
                                for (; y.length <= l; y.push(0));
                                u = b = 0, i = 1, a = (o %= d) - d + 1
                            } else {
                                for (u = c = y[l], i = 1; c >= 10; c /= 10, i++);
                                b = (a = (o %= d) - d + i) < 0 ? 0 : u / v[i - a - 1] % 10 | 0
                            }
                            if (n = n || t < 0 || null != y[l + 1] || (a < 0 ? u : u % v[i - a - 1]), n = r < 4 ? (b || n) && (0 == r || r == (e.s < 0 ? 3 : 2)) : b > 5 || 5 == b && (4 == r || n || 6 == r && (o > 0 ? a > 0 ? u / v[i - a] : 0 : y[l - 1]) % 10 & 1 || r == (e.s < 0 ? 8 : 7)), t < 1 || !y[0]) return y.length = 0,
                            n ? (t -= e.e + 1, y[0] = v[(d - t % d) % d], e.e = -t || 0) : y[0] = e.e = 0,
                            e;
                            if (0 == o ? (y.length = l, c = 1, l--) : (y.length = l + 1, c = v[d - o], y[l] = a > 0 ? f(u / v[i - a] % v[a]) * c : 0), n)
                                for (;;) {
                                    if (0 == l) {
                                        for (o = 1, a = y[0]; a >= 10; a /= 10, o++);
                                        for (a = y[0] += c, c = 1; a >= 10; a /= 10, c++);
                                        o != c && (e.e++, y[0] == h && (y[0] = 1));
                                        break
                                    }
                                    if (y[l] += c, y[l] != h) break;
                                    y[l--] = 0, c = 1
                                }
                            for (o = y.length; 0 === y[--o]; y.pop());
                        }
                        e.e > D ? e.c = e.e = null : e.e < O && (e.c = [e.e = 0])
                    }
                    return e
                }
                return H.clone = e, H.ROUND_UP = 0, H.ROUND_DOWN = 1, H.ROUND_CEIL = 2, H.ROUND_FLOOR = 3, H.ROUND_HALF_UP = 4, H.ROUND_HALF_DOWN = 5, H.ROUND_HALF_EVEN = 6, H.ROUND_HALF_CEIL = 7, H.ROUND_HALF_FLOOR = 8, H.EUCLID = 9, H.config = H.set = function (e) {
                    var t, r;
                    if (null != e) {
                        if ("object" != typeof e) throw Error(c + "Object expected: " + e);
                        if (e.hasOwnProperty(t = "DECIMAL_PLACES") && (_(r = e[t], 0, y, t), L = r), e.hasOwnProperty(t = "ROUNDING_MODE") && (_(r = e[t], 0, 8, t), R = r), e.hasOwnProperty(t = "EXPONENTIAL_AT") && (w(r = e[t]) ? (_(r[0], -y, 0, t), _(r[1], 0, y, t), C = r[0], N = r[1]) : (_(r, -y, y, t), C = -(N = r < 0 ? -r : r))), e.hasOwnProperty(t = "RANGE"))
                            if (w(r = e[t])) _(r[0], -y, -1, t), _(r[1], 1, y, t), O = r[0], D = r[1];
                            else {
                                if (_(r, -y, y, t), !r) throw Error(c + t + " cannot be zero: " + r);
                                O = -(D = r < 0 ? -r : r)
                            } if (e.hasOwnProperty(t = "CRYPTO")) {
                            if ((r = e[t]) !== !!r) throw Error(c + t + " not true or false: " + r);
                            if (r) {
                                if ("undefined" == typeof crypto || !crypto || !crypto.getRandomValues && !crypto.randomBytes) throw j = !r, Error(c + "crypto unavailable");
                                j = r
                            } else j = r
                        }
                        if (e.hasOwnProperty(t = "MODULO_MODE") && (_(r = e[t], 0, 9, t), U = r), e.hasOwnProperty(t = "POW_PRECISION") && (_(r = e[t], 0, y, t), K = r), e.hasOwnProperty(t = "FORMAT")) {
                            if ("object" != typeof (r = e[t])) throw Error(c + t + " not an object: " + r);
                            q = r
                        }
                        if (e.hasOwnProperty(t = "ALPHABET")) {
                            if ("string" != typeof (r = e[t]) || /^.$|\.|(.).*\1/.test(r)) throw Error(c + t + " invalid: " + r);
                            z = r
                        }
                    }
                    return {
                        DECIMAL_PLACES: L,
                        ROUNDING_MODE: R,
                        EXPONENTIAL_AT: [C, N],
                        RANGE: [O, D],
                        CRYPTO: j,
                        MODULO_MODE: U,
                        POW_PRECISION: K,
                        FORMAT: q,
                        ALPHABET: z
                    }
                }, H.isBigNumber = function (e) {
                    return e instanceof H || e && !0 === e._isBigNumber || !1
                }, H.maximum = H.max = function () {
                    return Y(arguments, T.lt)
                }, H.minimum = H.min = function () {
                    return Y(arguments, T.gt)
                }, H.random = (o = 9007199254740992 * Math.random() & 2097151 ? function () {
                    return f(9007199254740992 * Math.random())
                } : function () {
                    return 8388608 * (1073741824 * Math.random() | 0) + (8388608 * Math.random() | 0)
                }, function (e) {
                    var t, r, n, i, a, u = 0,
                        h = [],
                        l = new H(P);
                    if (null == e ? e = L : _(e, 0, y), i = s(e / d), j)
                        if (crypto.getRandomValues) {
                            for (t = crypto.getRandomValues(new Uint32Array(i *= 2)); u < i;)(a = 131072 * t[u] + (t[u + 1] >>> 11)) >= 9e15 ? (r = crypto.getRandomValues(new Uint32Array(2)), t[u] = r[0], t[u + 1] = r[1]) : (h.push(a % 1e14), u += 2);
                            u = i / 2
                        } else {
                            if (!crypto.randomBytes) throw j = !1, Error(c + "crypto unavailable");
                            for (t = crypto.randomBytes(i *= 7); u < i;)(a = 281474976710656 * (31 & t[u]) + 1099511627776 * t[u + 1] + 4294967296 * t[u + 2] + 16777216 * t[u + 3] + (t[u + 4] << 16) + (t[u + 5] << 8) + t[u + 6]) >= 9e15 ? crypto.randomBytes(7).copy(t, u) : (h.push(a % 1e14), u += 7);
                            u = i / 7
                        } if (!j)
                        for (; u < i;)(a = o()) < 9e15 && (h[u++] = a % 1e14);
                    for (i = h[--u], e %= d, i && e && (a = p[d - e], h[u] = f(i / a) * a); 0 === h[u]; h.pop(), u--);
                    if (u < 0) h = [n = 0];
                    else {
                        for (n = -1; 0 === h[0]; h.splice(0, 1), n -= d);
                        for (u = 1, a = h[0]; a >= 10; a /= 10, u++);
                        u < d && (n -= d - u)
                    }
                    return l.e = n, l.c = h, l
                }), n = function () {
                    function e(e, t, r, n) {
                        for (var i, o, a = [0], s = 0, f = e.length; s < f;) {
                            for (o = a.length; o--; a[o] *= t);
                            for (a[0] += n.indexOf(e.charAt(s++)), i = 0; i < a.length; i++) a[i] > r - 1 && (null == a[i + 1] && (a[i + 1] = 0), a[i + 1] += a[i] / r | 0, a[i] %= r)
                        }
                        return a.reverse()
                    }
                    return function (t, n, i, o, a) {
                        var s, f, c, u, h, d, l, p, b = t.indexOf("."),
                            y = L,
                            v = R;
                        for (b >= 0 && (u = K, K = 0, t = t.replace(".", ""), d = (p = new H(n)).pow(t.length - b), K = u, p.c = e(A(g(d.c), d.e, "0"), 10, i, "0123456789"), p.e = p.c.length), c = u = (l = e(t, n, i, a ? (s = z, "0123456789") : (s = "0123456789", z))).length; 0 == l[--u]; l.pop());
                        if (!l[0]) return s.charAt(0);
                        if (b < 0 ? --c : (d.c = l, d.e = c, d.s = o, l = (d = r(d, p, y, v, i)).c, h = d.r, c = d.e), b = l[f = c + y + 1], u = i / 2, h = h || f < 0 || null != l[f + 1], h = v < 4 ? (null != b || h) && (0 == v || v == (d.s < 0 ? 3 : 2)) : b > u || b == u && (4 == v || h || 6 == v && 1 & l[f - 1] || v == (d.s < 0 ? 8 : 7)), f < 1 || !l[0]) t = h ? A(s.charAt(1), -y, s.charAt(0)) : s.charAt(0);
                        else {
                            if (l.length = f, h)
                                for (--i; ++l[--f] > i;) l[f] = 0, f || (++c, l = [1].concat(l));
                            for (u = l.length; !l[--u];);
                            for (b = 0, t = ""; b <= u; t += s.charAt(l[b++]));
                            t = A(t, c, s.charAt(0))
                        }
                        return t
                    }
                }(), r = function () {
                    function e(e, t, r) {
                        var n, i, o, a, s = 0,
                            f = e.length,
                            c = t % b,
                            u = t / b | 0;
                        for (e = e.slice(); f--;) s = ((i = c * (o = e[f] % b) + (n = u * o + (a = e[f] / b | 0) * c) % b * b + s) / r | 0) + (n / b | 0) + u * a, e[f] = i % r;
                        return s && (e = [s].concat(e)), e
                    }

                    function t(e, t, r, n) {
                        var i, o;
                        if (r != n) o = r > n ? 1 : -1;
                        else
                            for (i = o = 0; i < r; i++)
                                if (e[i] != t[i]) {
                                    o = e[i] > t[i] ? 1 : -1;
                                    break
                                } return o
                    }

                    function r(e, t, r, n) {
                        for (var i = 0; r--;) e[r] -= i, i = e[r] < t[r] ? 1 : 0, e[r] = i * n + e[r] - t[r];
                        for (; !e[0] && e.length > 1; e.splice(0, 1));
                    }
                    return function (n, i, o, a, s) {
                        var c, u, l, p, b, y, g, m, _, w, E, S, A, I, k, M, x, B = n.s == i.s ? 1 : -1,
                            T = n.c,
                            P = i.c;
                        if (!(T && T[0] && P && P[0])) return new H(n.s && i.s && (T ? !P || T[0] != P[0] : P) ? T && 0 == T[0] || !P ? 0 * B : B / 0 : NaN);
                        for (_ = (m = new H(B)).c = [], B = o + (u = n.e - i.e) + 1, s || (s = h, u = v(n.e / d) - v(i.e / d), B = B / d | 0), l = 0; P[l] == (T[l] || 0); l++);
                        if (P[l] > (T[l] || 0) && u--, B < 0) _.push(1), p = !0;
                        else {
                            for (I = T.length, M = P.length, l = 0, B += 2, (b = f(s / (P[0] + 1))) > 1 && (P = e(P, b, s), T = e(T, b, s), M = P.length, I = T.length), A = M, E = (w = T.slice(0, M)).length; E < M; w[E++] = 0);
                            x = P.slice(), x = [0].concat(x), k = P[0], P[1] >= s / 2 && k++;
                            do {
                                if (b = 0, (c = t(P, w, M, E)) < 0) {
                                    if (S = w[0], M != E && (S = S * s + (w[1] || 0)), (b = f(S / k)) > 1)
                                        for (b >= s && (b = s - 1), g = (y = e(P, b, s)).length, E = w.length; 1 == t(y, w, g, E);) b--, r(y, M < g ? x : P, g, s), g = y.length, c = 1;
                                    else 0 == b && (c = b = 1), g = (y = P.slice()).length;
                                    if (g < E && (y = [0].concat(y)), r(w, y, E, s), E = w.length, -1 == c)
                                        for (; t(P, w, M, E) < 1;) b++, r(w, M < E ? x : P, E, s), E = w.length
                                } else 0 === c && (b++, w = [0]);
                                _[l++] = b, w[0] ? w[E++] = T[A] || 0 : (w = [T[A]], E = 1)
                            } while ((A++ < I || null != w[0]) && B--);
                            p = null != w[0], _[0] || _.splice(0, 1)
                        }
                        if (s == h) {
                            for (l = 1, B = _[0]; B >= 10; B /= 10, l++);
                            G(m, o + (m.e = l + u * d - 1) + 1, a, p)
                        } else m.e = u, m.r = +p;
                        return m
                    }
                }(), I = /^(-?)0([xbo])(?=\w[\w.]*$)/i, k = /^([^.]+)\.$/, M = /^\.([^.]+)$/, x = /^-?(Infinity|NaN)$/, B = /^\s*\+(?=[\w.])|^\s+|\s+$/g, i = function (e, t, r, n) {
                    var i, o = r ? t : t.replace(B, "");
                    if (x.test(o)) e.s = isNaN(o) ? null : o < 0 ? -1 : 1, e.c = e.e = null;
                    else {
                        if (!r && (o = o.replace(I, function (e, t, r) {
                                return i = "x" == (r = r.toLowerCase()) ? 16 : "b" == r ? 2 : 8, n && n != i ? e : t
                            }), n && (i = n, o = o.replace(k, "$1").replace(M, "0.$1")), t != o)) return new H(o, i);
                        if (H.DEBUG) throw Error(c + "Not a" + (n ? " base " + n : "") + " number: " + t);
                        e.c = e.e = e.s = null
                    }
                }, T.absoluteValue = T.abs = function () {
                    var e = new H(this);
                    return e.s < 0 && (e.s = 1), e
                }, T.comparedTo = function (e, t) {
                    return m(this, new H(e, t))
                }, T.decimalPlaces = T.dp = function (e, t) {
                    var r, n, i, o = this;
                    if (null != e) return _(e, 0, y), null == t ? t = R : _(t, 0, 8), G(new H(o), e + o.e + 1, t);
                    if (!(r = o.c)) return null;
                    if (n = ((i = r.length - 1) - v(this.e / d)) * d, i = r[i])
                        for (; i % 10 == 0; i /= 10, n--);
                    return n < 0 && (n = 0), n
                }, T.dividedBy = T.div = function (e, t) {
                    return r(this, new H(e, t), L, R)
                }, T.dividedToIntegerBy = T.idiv = function (e, t) {
                    return r(this, new H(e, t), 0, 1)
                }, T.exponentiatedBy = T.pow = function (e, t) {
                    var r, n, i, o, a, u, h, l = this;
                    if ((e = new H(e)).c && !e.isInteger()) throw Error(c + "Exponent not an integer: " + e);
                    if (null != t && (t = new H(t)), o = e.e > 14, !l.c || !l.c[0] || 1 == l.c[0] && !l.e && 1 == l.c.length || !e.c || !e.c[0]) return h = new H(Math.pow(+l.valueOf(), o ? 2 - E(e) : +e)), t ? h.mod(t) : h;
                    if (a = e.s < 0, t) {
                        if (t.c ? !t.c[0] : !t.s) return new H(NaN);
                        (n = !a && l.isInteger() && t.isInteger()) && (l = l.mod(t))
                    } else {
                        if (e.e > 9 && (l.e > 0 || l.e < -1 || (0 == l.e ? l.c[0] > 1 || o && l.c[1] >= 24e7 : l.c[0] < 8e13 || o && l.c[0] <= 9999975e7))) return i = l.s < 0 && E(e) ? -0 : 0, l.e > -1 && (i = 1 / i), new H(a ? 1 / i : i);
                        K && (i = s(K / d + 2))
                    }
                    for (o ? (r = new H(.5), u = E(e)) : u = e % 2, a && (e.s = 1), h = new H(P);;) {
                        if (u) {
                            if (!(h = h.times(l)).c) break;
                            i ? h.c.length > i && (h.c.length = i) : n && (h = h.mod(t))
                        }
                        if (o) {
                            if (G(e = e.times(r), e.e + 1, 1), !e.c[0]) break;
                            o = e.e > 14, u = E(e)
                        } else {
                            if (!(e = f(e / 2))) break;
                            u = e % 2
                        }
                        l = l.times(l), i ? l.c && l.c.length > i && (l.c.length = i) : n && (l = l.mod(t))
                    }
                    return n ? h : (a && (h = P.div(h)), t ? h.mod(t) : i ? G(h, K, R, void 0) : h)
                }, T.integerValue = function (e) {
                    var t = new H(this);
                    return null == e ? e = R : _(e, 0, 8), G(t, t.e + 1, e)
                }, T.isEqualTo = T.eq = function (e, t) {
                    return 0 === m(this, new H(e, t))
                }, T.isFinite = function () {
                    return !!this.c
                }, T.isGreaterThan = T.gt = function (e, t) {
                    return m(this, new H(e, t)) > 0
                }, T.isGreaterThanOrEqualTo = T.gte = function (e, t) {
                    return 1 === (t = m(this, new H(e, t))) || 0 === t
                }, T.isInteger = function () {
                    return !!this.c && v(this.e / d) > this.c.length - 2
                }, T.isLessThan = T.lt = function (e, t) {
                    return m(this, new H(e, t)) < 0
                }, T.isLessThanOrEqualTo = T.lte = function (e, t) {
                    return -1 === (t = m(this, new H(e, t))) || 0 === t
                }, T.isNaN = function () {
                    return !this.s
                }, T.isNegative = function () {
                    return this.s < 0
                }, T.isPositive = function () {
                    return this.s > 0
                }, T.isZero = function () {
                    return !!this.c && 0 == this.c[0]
                }, T.minus = function (e, t) {
                    var r, n, i, o, a = this,
                        s = a.s;
                    if (t = (e = new H(e, t)).s, !s || !t) return new H(NaN);
                    if (s != t) return e.s = -t, a.plus(e);
                    var f = a.e / d,
                        c = e.e / d,
                        u = a.c,
                        l = e.c;
                    if (!f || !c) {
                        if (!u || !l) return u ? (e.s = -t, e) : new H(l ? a : NaN);
                        if (!u[0] || !l[0]) return l[0] ? (e.s = -t, e) : new H(u[0] ? a : 3 == R ? -0 : 0)
                    }
                    if (f = v(f), c = v(c), u = u.slice(), s = f - c) {
                        for ((o = s < 0) ? (s = -s, i = u) : (c = f, i = l), i.reverse(), t = s; t--; i.push(0));
                        i.reverse()
                    } else
                        for (n = (o = (s = u.length) < (t = l.length)) ? s : t, s = t = 0; t < n; t++)
                            if (u[t] != l[t]) {
                                o = u[t] < l[t];
                                break
                            } if (o && (i = u, u = l, l = i, e.s = -e.s), (t = (n = l.length) - (r = u.length)) > 0)
                        for (; t--; u[r++] = 0);
                    for (t = h - 1; n > s;) {
                        if (u[--n] < l[n]) {
                            for (r = n; r && !u[--r]; u[r] = t);
                            --u[r], u[n] += h
                        }
                        u[n] -= l[n]
                    }
                    for (; 0 == u[0]; u.splice(0, 1), --c);
                    return u[0] ? F(e, u, c) : (e.s = 3 == R ? -1 : 1, e.c = [e.e = 0], e)
                }, T.modulo = T.mod = function (e, t) {
                    var n, i, o = this;
                    return e = new H(e, t), !o.c || !e.s || e.c && !e.c[0] ? new H(NaN) : !e.c || o.c && !o.c[0] ? new H(o) : (9 == U ? (i = e.s, e.s = 1, n = r(o, e, 0, 3), e.s = i, n.s *= i) : n = r(o, e, 0, U), (e = o.minus(n.times(e))).c[0] || 1 != U || (e.s = o.s), e)
                }, T.multipliedBy = T.times = function (e, t) {
                    var r, n, i, o, a, s, f, c, u, l, p, y, g, m, _, w = this,
                        E = w.c,
                        S = (e = new H(e, t)).c;
                    if (!(E && S && E[0] && S[0])) return !w.s || !e.s || E && !E[0] && !S || S && !S[0] && !E ? e.c = e.e = e.s = null : (e.s *= w.s, E && S ? (e.c = [0], e.e = 0) : e.c = e.e = null), e;
                    for (n = v(w.e / d) + v(e.e / d), e.s *= w.s, (f = E.length) < (l = S.length) && (g = E, E = S, S = g, i = f, f = l, l = i), i = f + l, g = []; i--; g.push(0));
                    for (m = h, _ = b, i = l; --i >= 0;) {
                        for (r = 0, p = S[i] % _, y = S[i] / _ | 0, o = i + (a = f); o > i;) r = ((c = p * (c = E[--a] % _) + (s = y * c + (u = E[a] / _ | 0) * p) % _ * _ + g[o] + r) / m | 0) + (s / _ | 0) + y * u, g[o--] = c % m;
                        g[o] = r
                    }
                    return r ? ++n : g.splice(0, 1), F(e, g, n)
                }, T.negated = function () {
                    var e = new H(this);
                    return e.s = -e.s || null, e
                }, T.plus = function (e, t) {
                    var r, n = this,
                        i = n.s;
                    if (t = (e = new H(e, t)).s, !i || !t) return new H(NaN);
                    if (i != t) return e.s = -t, n.minus(e);
                    var o = n.e / d,
                        a = e.e / d,
                        s = n.c,
                        f = e.c;
                    if (!o || !a) {
                        if (!s || !f) return new H(i / 0);
                        if (!s[0] || !f[0]) return f[0] ? e : new H(s[0] ? n : 0 * i)
                    }
                    if (o = v(o), a = v(a), s = s.slice(), i = o - a) {
                        for (i > 0 ? (a = o, r = f) : (i = -i, r = s), r.reverse(); i--; r.push(0));
                        r.reverse()
                    }
                    for ((i = s.length) - (t = f.length) < 0 && (r = f, f = s, s = r, t = i), i = 0; t;) i = (s[--t] = s[t] + f[t] + i) / h | 0, s[t] = h === s[t] ? 0 : s[t] % h;
                    return i && (s = [i].concat(s), ++a), F(e, s, a)
                }, T.precision = T.sd = function (e, t) {
                    var r, n, i, o = this;
                    if (null != e && e !== !!e) return _(e, 1, y), null == t ? t = R : _(t, 0, 8), G(new H(o), e, t);
                    if (!(r = o.c)) return null;
                    if (n = (i = r.length - 1) * d + 1, i = r[i]) {
                        for (; i % 10 == 0; i /= 10, n--);
                        for (i = r[0]; i >= 10; i /= 10, n++);
                    }
                    return e && o.e + 1 > n && (n = o.e + 1), n
                }, T.shiftedBy = function (e) {
                    return _(e, -l, l), this.times("1e" + e)
                }, T.squareRoot = T.sqrt = function () {
                    var e, t, n, i, o, a = this,
                        s = a.c,
                        f = a.s,
                        c = a.e,
                        u = L + 4,
                        h = new H("0.5");
                    if (1 !== f || !s || !s[0]) return new H(!f || f < 0 && (!s || s[0]) ? NaN : s ? a : 1 / 0);
                    if (0 == (f = Math.sqrt(+a)) || f == 1 / 0 ? (((t = g(s)).length + c) % 2 == 0 && (t += "0"), f = Math.sqrt(t), c = v((c + 1) / 2) - (c < 0 || c % 2), n = new H(t = f == 1 / 0 ? "1e" + c : (t = f.toExponential()).slice(0, t.indexOf("e") + 1) + c)) : n = new H(f + ""), n.c[0])
                        for ((f = (c = n.e) + u) < 3 && (f = 0);;)
                            if (o = n, n = h.times(o.plus(r(a, o, u, 1))), g(o.c).slice(0, f) === (t = g(n.c)).slice(0, f)) {
                                if (n.e < c && --f, "9999" != (t = t.slice(f - 3, f + 1)) && (i || "4999" != t)) {
                                    +t && (+t.slice(1) || "5" != t.charAt(0)) || (G(n, n.e + L + 2, 1), e = !n.times(n).eq(a));
                                    break
                                }
                                if (!i && (G(o, o.e + L + 2, 0), o.times(o).eq(a))) {
                                    n = o;
                                    break
                                }
                                u += 4, f += 4, i = 1
                            } return G(n, n.e + L + 1, R, e)
                }, T.toExponential = function (e, t) {
                    return null != e && (_(e, 0, y), e++), V(this, e, t, 1)
                }, T.toFixed = function (e, t) {
                    return null != e && (_(e, 0, y), e = e + this.e + 1), V(this, e, t)
                }, T.toFormat = function (e, t) {
                    var r = this.toFixed(e, t);
                    if (this.c) {
                        var n, i = r.split("."),
                            o = +q.groupSize,
                            a = +q.secondaryGroupSize,
                            s = q.groupSeparator,
                            f = i[0],
                            c = i[1],
                            u = this.s < 0,
                            h = u ? f.slice(1) : f,
                            d = h.length;
                        if (a && (n = o, o = a, a = n, d -= n), o > 0 && d > 0) {
                            for (n = d % o || o, f = h.substr(0, n); n < d; n += o) f += s + h.substr(n, o);
                            a > 0 && (f += s + h.slice(n)), u && (f = "-" + f)
                        }
                        r = c ? f + q.decimalSeparator + ((a = +q.fractionGroupSize) ? c.replace(new RegExp("\\d{" + a + "}\\B", "g"), "$&" + q.fractionGroupSeparator) : c) : f
                    }
                    return r
                }, T.toFraction = function (e) {
                    var t, n, i, o, a, s, f, u, h, l, b, y, v = this,
                        m = v.c;
                    if (null != e && (!(u = new H(e)).isInteger() && (u.c || 1 !== u.s) || u.lt(P))) throw Error(c + "Argument " + (u.isInteger() ? "out of range: " : "not an integer: ") + e);
                    if (!m) return v.toString();
                    for (n = new H(P), l = i = new H(P), o = h = new H(P), y = g(m), s = n.e = y.length - v.e - 1, n.c[0] = p[(f = s % d) < 0 ? d + f : f], e = !e || u.comparedTo(n) > 0 ? s > 0 ? n : l : u, f = D, D = 1 / 0, u = new H(y), h.c[0] = 0; b = r(u, n, 0, 1), 1 != (a = i.plus(b.times(o))).comparedTo(e);) i = o, o = a, l = h.plus(b.times(a = l)), h = a, n = u.minus(b.times(a = n)), u = a;
                    return a = r(e.minus(i), o, 0, 1), h = h.plus(a.times(l)), i = i.plus(a.times(o)), h.s = l.s = v.s, t = r(l, o, s *= 2, R).minus(v).abs().comparedTo(r(h, i, s, R).minus(v).abs()) < 1 ? [l.toString(), o.toString()] : [h.toString(), i.toString()], D = f, t
                }, T.toNumber = function () {
                    return +this
                }, T.toPrecision = function (e, t) {
                    return null != e && _(e, 1, y), V(this, e, t, 2)
                }, T.toString = function (e) {
                    var t, r = this,
                        i = r.s,
                        o = r.e;
                    return null === o ? i ? (t = "Infinity", i < 0 && (t = "-" + t)) : t = "NaN" : (t = g(r.c), null == e ? t = o <= C || o >= N ? S(t, o) : A(t, o, "0") : (_(e, 2, z.length, "Base"), t = n(A(t, o, "0"), 10, e, i, !0)), i < 0 && r.c[0] && (t = "-" + t)), t
                }, T.valueOf = T.toJSON = function () {
                    var e, t = this,
                        r = t.e;
                    return null === r ? t.toString() : (e = g(t.c), e = r <= C || r >= N ? S(e, r) : A(e, r, "0"), t.s < 0 ? "-" + e : e)
                }, T._isBigNumber = !0, null != t && H.set(t), H
            }()).default = o.BigNumber = o, void 0 === (n = function () {
                return o
            }.call(t, r, t, e)) || (e.exports = n)
        }()
    }, function (e, t) {
        var r = {}.toString;
        e.exports = Array.isArray || function (e) {
            return "[object Array]" == r.call(e)
        }
    }, function (e, t, r) {
        "use strict";
        var n = r(0).Buffer,
            i = r(60).Transform;

        function o(e) {
            i.call(this), this._block = n.allocUnsafe(e), this._blockSize = e, this._blockOffset = 0, this._length = [0, 0, 0, 0], this._finalized = !1
        }
        r(1)(o, i), o.prototype._transform = function (e, t, r) {
            var n = null;
            try {
                this.update(e, t)
            } catch (e) {
                n = e
            }
            r(n)
        }, o.prototype._flush = function (e) {
            var t = null;
            try {
                this.push(this.digest())
            } catch (e) {
                t = e
            }
            e(t)
        }, o.prototype.update = function (e, t) {
            if (function (e, t) {
                    if (!n.isBuffer(e) && "string" != typeof e) throw new TypeError(t + " must be a string or a buffer")
                }(e, "Data"), this._finalized) throw new Error("Digest already called");
            n.isBuffer(e) || (e = n.from(e, t));
            for (var r = this._block, i = 0; this._blockOffset + e.length - i >= this._blockSize;) {
                for (var o = this._blockOffset; o < this._blockSize;) r[o++] = e[i++];
                this._update(), this._blockOffset = 0
            }
            for (; i < e.length;) r[this._blockOffset++] = e[i++];
            for (var a = 0, s = 8 * e.length; s > 0; ++a) this._length[a] += s, (s = this._length[a] / 4294967296 | 0) > 0 && (this._length[a] -= 4294967296 * s);
            return this
        }, o.prototype._update = function () {
            throw new Error("_update is not implemented")
        }, o.prototype.digest = function (e) {
            if (this._finalized) throw new Error("Digest already called");
            this._finalized = !0;
            var t = this._digest();
            void 0 !== e && (t = t.toString(e)), this._block.fill(0), this._blockOffset = 0;
            for (var r = 0; r < 4; ++r) this._length[r] = 0;
            return t
        }, o.prototype._digest = function () {
            throw new Error("_digest is not implemented")
        }, e.exports = o
    }, function (e, t, r) {
        e.exports = i;
        var n = r(40).EventEmitter;

        function i() {
            n.call(this)
        }
        r(1)(i, n), i.Readable = r(30), i.Writable = r(116), i.Duplex = r(117), i.Transform = r(118), i.PassThrough = r(119), i.Stream = i, i.prototype.pipe = function (e, t) {
            var r = this;

            function i(t) {
                e.writable && !1 === e.write(t) && r.pause && r.pause()
            }

            function o() {
                r.readable && r.resume && r.resume()
            }
            r.on("data", i), e.on("drain", o), e._isStdio || t && !1 === t.end || (r.on("end", s), r.on("close", f));
            var a = !1;

            function s() {
                a || (a = !0, e.end())
            }

            function f() {
                a || (a = !0, "function" == typeof e.destroy && e.destroy())
            }

            function c(e) {
                if (u(), 0 === n.listenerCount(this, "error")) throw e
            }

            function u() {
                r.removeListener("data", i), e.removeListener("drain", o), r.removeListener("end", s), r.removeListener("close", f), r.removeListener("error", c), e.removeListener("error", c), r.removeListener("end", u), r.removeListener("close", u), e.removeListener("close", u)
            }
            return r.on("error", c), e.on("error", c), r.on("end", u), r.on("close", u), e.on("close", u), e.emit("pipe", r), e
        }
    }, function (e, t, r) {
        "use strict";
        (function (t, n) {
            var i = r(31);
            e.exports = m;
            var o, a = r(58);
            m.ReadableState = g;
            r(40).EventEmitter;
            var s = function (e, t) {
                    return e.listeners(t).length
                },
                f = r(62),
                c = r(0).Buffer,
                u = t.Uint8Array || function () {};
            var h = Object.create(r(25));
            h.inherits = r(1);
            var d = r(109),
                l = void 0;
            l = d && d.debuglog ? d.debuglog("stream") : function () {};
            var p, b = r(110),
                y = r(63);
            h.inherits(m, f);
            var v = ["error", "close", "destroy", "pause", "resume"];

            function g(e, t) {
                o = o || r(17), e = e || {};
                var n = t instanceof o;
                this.objectMode = !!e.objectMode, n && (this.objectMode = this.objectMode || !!e.readableObjectMode);
                var i = e.highWaterMark,
                    a = e.readableHighWaterMark,
                    s = this.objectMode ? 16 : 16384;
                this.highWaterMark = i || 0 === i ? i : n && (a || 0 === a) ? a : s, this.highWaterMark = Math.floor(this.highWaterMark), this.buffer = new b, this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, this.ended = !1, this.endEmitted = !1, this.reading = !1, this.sync = !0, this.needReadable = !1, this.emittedReadable = !1, this.readableListening = !1, this.resumeScheduled = !1, this.destroyed = !1, this.defaultEncoding = e.defaultEncoding || "utf8", this.awaitDrain = 0, this.readingMore = !1, this.decoder = null, this.encoding = null, e.encoding && (p || (p = r(42).StringDecoder), this.decoder = new p(e.encoding), this.encoding = e.encoding)
            }

            function m(e) {
                if (o = o || r(17), !(this instanceof m)) return new m(e);
                this._readableState = new g(e, this), this.readable = !0, e && ("function" == typeof e.read && (this._read = e.read), "function" == typeof e.destroy && (this._destroy = e.destroy)), f.call(this)
            }

            function _(e, t, r, n, i) {
                var o, a = e._readableState;
                null === t ? (a.reading = !1, function (e, t) {
                    if (t.ended) return;
                    if (t.decoder) {
                        var r = t.decoder.end();
                        r && r.length && (t.buffer.push(r), t.length += t.objectMode ? 1 : r.length)
                    }
                    t.ended = !0, A(e)
                }(e, a)) : (i || (o = function (e, t) {
                    var r;
                    n = t, c.isBuffer(n) || n instanceof u || "string" == typeof t || void 0 === t || e.objectMode || (r = new TypeError("Invalid non-string/buffer chunk"));
                    var n;
                    return r
                }(a, t)), o ? e.emit("error", o) : a.objectMode || t && t.length > 0 ? ("string" == typeof t || a.objectMode || Object.getPrototypeOf(t) === c.prototype || (t = function (e) {
                    return c.from(e)
                }(t)), n ? a.endEmitted ? e.emit("error", new Error("stream.unshift() after end event")) : w(e, a, t, !0) : a.ended ? e.emit("error", new Error("stream.push() after EOF")) : (a.reading = !1, a.decoder && !r ? (t = a.decoder.write(t), a.objectMode || 0 !== t.length ? w(e, a, t, !1) : k(e, a)) : w(e, a, t, !1))) : n || (a.reading = !1));
                return function (e) {
                    return !e.ended && (e.needReadable || e.length < e.highWaterMark || 0 === e.length)
                }(a)
            }

            function w(e, t, r, n) {
                t.flowing && 0 === t.length && !t.sync ? (e.emit("data", r), e.read(0)) : (t.length += t.objectMode ? 1 : r.length, n ? t.buffer.unshift(r) : t.buffer.push(r), t.needReadable && A(e)), k(e, t)
            }
            Object.defineProperty(m.prototype, "destroyed", {
                get: function () {
                    return void 0 !== this._readableState && this._readableState.destroyed
                },
                set: function (e) {
                    this._readableState && (this._readableState.destroyed = e)
                }
            }), m.prototype.destroy = y.destroy, m.prototype._undestroy = y.undestroy, m.prototype._destroy = function (e, t) {
                this.push(null), t(e)
            }, m.prototype.push = function (e, t) {
                var r, n = this._readableState;
                return n.objectMode ? r = !0 : "string" == typeof e && ((t = t || n.defaultEncoding) !== n.encoding && (e = c.from(e, t), t = ""), r = !0), _(this, e, t, !1, r)
            }, m.prototype.unshift = function (e) {
                return _(this, e, null, !0, !1)
            }, m.prototype.isPaused = function () {
                return !1 === this._readableState.flowing
            }, m.prototype.setEncoding = function (e) {
                return p || (p = r(42).StringDecoder), this._readableState.decoder = new p(e), this._readableState.encoding = e, this
            };
            var E = 8388608;

            function S(e, t) {
                return e <= 0 || 0 === t.length && t.ended ? 0 : t.objectMode ? 1 : e != e ? t.flowing && t.length ? t.buffer.head.data.length : t.length : (e > t.highWaterMark && (t.highWaterMark = function (e) {
                    return e >= E ? e = E : (e--, e |= e >>> 1, e |= e >>> 2, e |= e >>> 4, e |= e >>> 8, e |= e >>> 16, e++), e
                }(e)), e <= t.length ? e : t.ended ? t.length : (t.needReadable = !0, 0))
            }

            function A(e) {
                var t = e._readableState;
                t.needReadable = !1, t.emittedReadable || (l("emitReadable", t.flowing), t.emittedReadable = !0, t.sync ? i.nextTick(I, e) : I(e))
            }

            function I(e) {
                l("emit readable"), e.emit("readable"), T(e)
            }

            function k(e, t) {
                t.readingMore || (t.readingMore = !0, i.nextTick(M, e, t))
            }

            function M(e, t) {
                for (var r = t.length; !t.reading && !t.flowing && !t.ended && t.length < t.highWaterMark && (l("maybeReadMore read 0"), e.read(0), r !== t.length);) r = t.length;
                t.readingMore = !1
            }

            function x(e) {
                l("readable nexttick read 0"), e.read(0)
            }

            function B(e, t) {
                t.reading || (l("resume read 0"), e.read(0)), t.resumeScheduled = !1, t.awaitDrain = 0, e.emit("resume"), T(e), t.flowing && !t.reading && e.read(0)
            }

            function T(e) {
                var t = e._readableState;
                for (l("flow", t.flowing); t.flowing && null !== e.read(););
            }

            function P(e, t) {
                return 0 === t.length ? null : (t.objectMode ? r = t.buffer.shift() : !e || e >= t.length ? (r = t.decoder ? t.buffer.join("") : 1 === t.buffer.length ? t.buffer.head.data : t.buffer.concat(t.length), t.buffer.clear()) : r = function (e, t, r) {
                    var n;
                    e < t.head.data.length ? (n = t.head.data.slice(0, e), t.head.data = t.head.data.slice(e)) : n = e === t.head.data.length ? t.shift() : r ? function (e, t) {
                        var r = t.head,
                            n = 1,
                            i = r.data;
                        e -= i.length;
                        for (; r = r.next;) {
                            var o = r.data,
                                a = e > o.length ? o.length : e;
                            if (a === o.length ? i += o : i += o.slice(0, e), 0 === (e -= a)) {
                                a === o.length ? (++n, r.next ? t.head = r.next : t.head = t.tail = null) : (t.head = r, r.data = o.slice(a));
                                break
                            }++n
                        }
                        return t.length -= n, i
                    }(e, t) : function (e, t) {
                        var r = c.allocUnsafe(e),
                            n = t.head,
                            i = 1;
                        n.data.copy(r), e -= n.data.length;
                        for (; n = n.next;) {
                            var o = n.data,
                                a = e > o.length ? o.length : e;
                            if (o.copy(r, r.length - e, 0, a), 0 === (e -= a)) {
                                a === o.length ? (++i, n.next ? t.head = n.next : t.head = t.tail = null) : (t.head = n, n.data = o.slice(a));
                                break
                            }++i
                        }
                        return t.length -= i, r
                    }(e, t);
                    return n
                }(e, t.buffer, t.decoder), r);
                var r
            }

            function L(e) {
                var t = e._readableState;
                if (t.length > 0) throw new Error('"endReadable()" called on non-empty stream');
                t.endEmitted || (t.ended = !0, i.nextTick(R, t, e))
            }

            function R(e, t) {
                e.endEmitted || 0 !== e.length || (e.endEmitted = !0, t.readable = !1, t.emit("end"))
            }

            function C(e, t) {
                for (var r = 0, n = e.length; r < n; r++)
                    if (e[r] === t) return r;
                return -1
            }
            m.prototype.read = function (e) {
                l("read", e), e = parseInt(e, 10);
                var t = this._readableState,
                    r = e;
                if (0 !== e && (t.emittedReadable = !1), 0 === e && t.needReadable && (t.length >= t.highWaterMark || t.ended)) return l("read: emitReadable", t.length, t.ended), 0 === t.length && t.ended ? L(this) : A(this), null;
                if (0 === (e = S(e, t)) && t.ended) return 0 === t.length && L(this), null;
                var n, i = t.needReadable;
                return l("need readable", i), (0 === t.length || t.length - e < t.highWaterMark) && l("length less than watermark", i = !0), t.ended || t.reading ? l("reading or ended", i = !1) : i && (l("do read"), t.reading = !0, t.sync = !0, 0 === t.length && (t.needReadable = !0), this._read(t.highWaterMark), t.sync = !1, t.reading || (e = S(r, t))), null === (n = e > 0 ? P(e, t) : null) ? (t.needReadable = !0, e = 0) : t.length -= e, 0 === t.length && (t.ended || (t.needReadable = !0), r !== e && t.ended && L(this)), null !== n && this.emit("data", n), n
            }, m.prototype._read = function (e) {
                this.emit("error", new Error("_read() is not implemented"))
            }, m.prototype.pipe = function (e, t) {
                var r = this,
                    o = this._readableState;
                switch (o.pipesCount) {
                    case 0:
                        o.pipes = e;
                        break;
                    case 1:
                        o.pipes = [o.pipes, e];
                        break;
                    default:
                        o.pipes.push(e)
                }
                o.pipesCount += 1, l("pipe count=%d opts=%j", o.pipesCount, t);
                var f = (!t || !1 !== t.end) && e !== n.stdout && e !== n.stderr ? u : m;

                function c(t, n) {
                    l("onunpipe"), t === r && n && !1 === n.hasUnpiped && (n.hasUnpiped = !0, l("cleanup"), e.removeListener("close", v), e.removeListener("finish", g), e.removeListener("drain", h), e.removeListener("error", y), e.removeListener("unpipe", c), r.removeListener("end", u), r.removeListener("end", m), r.removeListener("data", b), d = !0, !o.awaitDrain || e._writableState && !e._writableState.needDrain || h())
                }

                function u() {
                    l("onend"), e.end()
                }
                o.endEmitted ? i.nextTick(f) : r.once("end", f), e.on("unpipe", c);
                var h = function (e) {
                    return function () {
                        var t = e._readableState;
                        l("pipeOnDrain", t.awaitDrain), t.awaitDrain && t.awaitDrain--, 0 === t.awaitDrain && s(e, "data") && (t.flowing = !0, T(e))
                    }
                }(r);
                e.on("drain", h);
                var d = !1;
                var p = !1;

                function b(t) {
                    l("ondata"), p = !1, !1 !== e.write(t) || p || ((1 === o.pipesCount && o.pipes === e || o.pipesCount > 1 && -1 !== C(o.pipes, e)) && !d && (l("false write response, pause", r._readableState.awaitDrain), r._readableState.awaitDrain++, p = !0), r.pause())
                }

                function y(t) {
                    l("onerror", t), m(), e.removeListener("error", y), 0 === s(e, "error") && e.emit("error", t)
                }

                function v() {
                    e.removeListener("finish", g), m()
                }

                function g() {
                    l("onfinish"), e.removeListener("close", v), m()
                }

                function m() {
                    l("unpipe"), r.unpipe(e)
                }
                return r.on("data", b),
                    function (e, t, r) {
                        if ("function" == typeof e.prependListener) return e.prependListener(t, r);
                        e._events && e._events[t] ? a(e._events[t]) ? e._events[t].unshift(r) : e._events[t] = [r, e._events[t]] : e.on(t, r)
                    }(e, "error", y), e.once("close", v), e.once("finish", g), e.emit("pipe", r), o.flowing || (l("pipe resume"), r.resume()), e
            }, m.prototype.unpipe = function (e) {
                var t = this._readableState,
                    r = {
                        hasUnpiped: !1
                    };
                if (0 === t.pipesCount) return this;
                if (1 === t.pipesCount) return e && e !== t.pipes ? this : (e || (e = t.pipes), t.pipes = null, t.pipesCount = 0, t.flowing = !1, e && e.emit("unpipe", this, r), this);
                if (!e) {
                    var n = t.pipes,
                        i = t.pipesCount;
                    t.pipes = null, t.pipesCount = 0, t.flowing = !1;
                    for (var o = 0; o < i; o++) n[o].emit("unpipe", this, r);
                    return this
                }
                var a = C(t.pipes, e);
                return -1 === a ? this : (t.pipes.splice(a, 1), t.pipesCount -= 1, 1 === t.pipesCount && (t.pipes = t.pipes[0]), e.emit("unpipe", this, r), this)
            }, m.prototype.on = function (e, t) {
                var r = f.prototype.on.call(this, e, t);
                if ("data" === e) !1 !== this._readableState.flowing && this.resume();
                else if ("readable" === e) {
                    var n = this._readableState;
                    n.endEmitted || n.readableListening || (n.readableListening = n.needReadable = !0, n.emittedReadable = !1, n.reading ? n.length && A(this) : i.nextTick(x, this))
                }
                return r
            }, m.prototype.addListener = m.prototype.on, m.prototype.resume = function () {
                var e = this._readableState;
                return e.flowing || (l("resume"), e.flowing = !0, function (e, t) {
                    t.resumeScheduled || (t.resumeScheduled = !0, i.nextTick(B, e, t))
                }(this, e)), this
            }, m.prototype.pause = function () {
                return l("call pause flowing=%j", this._readableState.flowing), !1 !== this._readableState.flowing && (l("pause"), this._readableState.flowing = !1, this.emit("pause")), this
            }, m.prototype.wrap = function (e) {
                var t = this,
                    r = this._readableState,
                    n = !1;
                for (var i in e.on("end", function () {
                        if (l("wrapped end"), r.decoder && !r.ended) {
                            var e = r.decoder.end();
                            e && e.length && t.push(e)
                        }
                        t.push(null)
                    }), e.on("data", function (i) {
                        (l("wrapped data"), r.decoder && (i = r.decoder.write(i)), !r.objectMode || null !== i && void 0 !== i) && ((r.objectMode || i && i.length) && (t.push(i) || (n = !0, e.pause())))
                    }), e) void 0 === this[i] && "function" == typeof e[i] && (this[i] = function (t) {
                    return function () {
                        return e[t].apply(e, arguments)
                    }
                }(i));
                for (var o = 0; o < v.length; o++) e.on(v[o], this.emit.bind(this, v[o]));
                return this._read = function (t) {
                    l("wrapped _read", t), n && (n = !1, e.resume())
                }, this
            }, Object.defineProperty(m.prototype, "readableHighWaterMark", {
                enumerable: !1,
                get: function () {
                    return this._readableState.highWaterMark
                }
            }), m._fromList = P
        }).call(this, r(7), r(11))
    }, function (e, t, r) {
        e.exports = r(40).EventEmitter
    }, function (e, t, r) {
        "use strict";
        var n = r(31);

        function i(e, t) {
            e.emit("error", t)
        }
        e.exports = {
            destroy: function (e, t) {
                var r = this,
                    o = this._readableState && this._readableState.destroyed,
                    a = this._writableState && this._writableState.destroyed;
                return o || a ? (t ? t(e) : !e || this._writableState && this._writableState.errorEmitted || n.nextTick(i, this, e), this) : (this._readableState && (this._readableState.destroyed = !0), this._writableState && (this._writableState.destroyed = !0), this._destroy(e || null, function (e) {
                    !t && e ? (n.nextTick(i, r, e), r._writableState && (r._writableState.errorEmitted = !0)) : t && t(e)
                }), this)
            },
            undestroy: function () {
                this._readableState && (this._readableState.destroyed = !1, this._readableState.reading = !1, this._readableState.ended = !1, this._readableState.endEmitted = !1), this._writableState && (this._writableState.destroyed = !1, this._writableState.ended = !1, this._writableState.ending = !1, this._writableState.finished = !1, this._writableState.errorEmitted = !1)
            }
        }
    }, function (e, t, r) {
        "use strict";
        e.exports = o;
        var n = r(17),
            i = Object.create(r(25));

        function o(e) {
            if (!(this instanceof o)) return new o(e);
            n.call(this, e), this._transformState = {
                afterTransform: function (e, t) {
                    var r = this._transformState;
                    r.transforming = !1;
                    var n = r.writecb;
                    if (!n) return this.emit("error", new Error("write callback called multiple times"));
                    r.writechunk = null, r.writecb = null, null != t && this.push(t), n(e);
                    var i = this._readableState;
                    i.reading = !1, (i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark)
                }.bind(this),
                needTransform: !1,
                transforming: !1,
                writecb: null,
                writechunk: null,
                writeencoding: null
            }, this._readableState.needReadable = !0, this._readableState.sync = !1, e && ("function" == typeof e.transform && (this._transform = e.transform), "function" == typeof e.flush && (this._flush = e.flush)), this.on("prefinish", a)
        }

        function a() {
            var e = this;
            "function" == typeof this._flush ? this._flush(function (t, r) {
                s(e, t, r)
            }) : s(this, null, null)
        }

        function s(e, t, r) {
            if (t) return e.emit("error", t);
            if (null != r && e.push(r), e._writableState.length) throw new Error("Calling transform done when ws.length != 0");
            if (e._transformState.transforming) throw new Error("Calling transform done when still transforming");
            return e.push(null)
        }
        i.inherits = r(1), i.inherits(o, n), o.prototype.push = function (e, t) {
            return this._transformState.needTransform = !1, n.prototype.push.call(this, e, t)
        }, o.prototype._transform = function (e, t, r) {
            throw new Error("_transform() is not implemented")
        }, o.prototype._write = function (e, t, r) {
            var n = this._transformState;
            if (n.writecb = r, n.writechunk = e, n.writeencoding = t, !n.transforming) {
                var i = this._readableState;
                (n.needTransform || i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark)
            }
        }, o.prototype._read = function (e) {
            var t = this._transformState;
            null !== t.writechunk && t.writecb && !t.transforming ? (t.transforming = !0, this._transform(t.writechunk, t.writeencoding, t.afterTransform)) : t.needTransform = !0
        }, o.prototype._destroy = function (e, t) {
            var r = this;
            n.prototype._destroy.call(this, e, function (e) {
                t(e), r.emit("close")
            })
        }
    }, function (e, t, r) {
        var n = r(1),
            i = r(20),
            o = r(0).Buffer,
            a = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298],
            s = new Array(64);

        function f() {
            this.init(), this._w = s, i.call(this, 64, 56)
        }

        function c(e, t, r) {
            return r ^ e & (t ^ r)
        }

        function u(e, t, r) {
            return e & t | r & (e | t)
        }

        function h(e) {
            return (e >>> 2 | e << 30) ^ (e >>> 13 | e << 19) ^ (e >>> 22 | e << 10)
        }

        function d(e) {
            return (e >>> 6 | e << 26) ^ (e >>> 11 | e << 21) ^ (e >>> 25 | e << 7)
        }

        function l(e) {
            return (e >>> 7 | e << 25) ^ (e >>> 18 | e << 14) ^ e >>> 3
        }
        n(f, i), f.prototype.init = function () {
            return this._a = 1779033703, this._b = 3144134277, this._c = 1013904242, this._d = 2773480762, this._e = 1359893119, this._f = 2600822924, this._g = 528734635, this._h = 1541459225, this
        }, f.prototype._update = function (e) {
            for (var t, r = this._w, n = 0 | this._a, i = 0 | this._b, o = 0 | this._c, s = 0 | this._d, f = 0 | this._e, p = 0 | this._f, b = 0 | this._g, y = 0 | this._h, v = 0; v < 16; ++v) r[v] = e.readInt32BE(4 * v);
            for (; v < 64; ++v) r[v] = 0 | (((t = r[v - 2]) >>> 17 | t << 15) ^ (t >>> 19 | t << 13) ^ t >>> 10) + r[v - 7] + l(r[v - 15]) + r[v - 16];
            for (var g = 0; g < 64; ++g) {
                var m = y + d(f) + c(f, p, b) + a[g] + r[g] | 0,
                    _ = h(n) + u(n, i, o) | 0;
                y = b, b = p, p = f, f = s + m | 0, s = o, o = i, i = n, n = m + _ | 0
            }
            this._a = n + this._a | 0, this._b = i + this._b | 0, this._c = o + this._c | 0, this._d = s + this._d | 0, this._e = f + this._e | 0, this._f = p + this._f | 0, this._g = b + this._g | 0, this._h = y + this._h | 0
        }, f.prototype._hash = function () {
            var e = o.allocUnsafe(32);
            return e.writeInt32BE(this._a, 0), e.writeInt32BE(this._b, 4), e.writeInt32BE(this._c, 8), e.writeInt32BE(this._d, 12), e.writeInt32BE(this._e, 16), e.writeInt32BE(this._f, 20), e.writeInt32BE(this._g, 24), e.writeInt32BE(this._h, 28), e
        }, e.exports = f
    }, function (e, t, r) {
        var n = r(1),
            i = r(20),
            o = r(0).Buffer,
            a = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591],
            s = new Array(160);

        function f() {
            this.init(), this._w = s, i.call(this, 128, 112)
        }

        function c(e, t, r) {
            return r ^ e & (t ^ r)
        }

        function u(e, t, r) {
            return e & t | r & (e | t)
        }

        function h(e, t) {
            return (e >>> 28 | t << 4) ^ (t >>> 2 | e << 30) ^ (t >>> 7 | e << 25)
        }

        function d(e, t) {
            return (e >>> 14 | t << 18) ^ (e >>> 18 | t << 14) ^ (t >>> 9 | e << 23)
        }

        function l(e, t) {
            return (e >>> 1 | t << 31) ^ (e >>> 8 | t << 24) ^ e >>> 7
        }

        function p(e, t) {
            return (e >>> 1 | t << 31) ^ (e >>> 8 | t << 24) ^ (e >>> 7 | t << 25)
        }

        function b(e, t) {
            return (e >>> 19 | t << 13) ^ (t >>> 29 | e << 3) ^ e >>> 6
        }

        function y(e, t) {
            return (e >>> 19 | t << 13) ^ (t >>> 29 | e << 3) ^ (e >>> 6 | t << 26)
        }

        function v(e, t) {
            return e >>> 0 < t >>> 0 ? 1 : 0
        }
        n(f, i), f.prototype.init = function () {
            return this._ah = 1779033703, this._bh = 3144134277, this._ch = 1013904242, this._dh = 2773480762, this._eh = 1359893119, this._fh = 2600822924, this._gh = 528734635, this._hh = 1541459225, this._al = 4089235720, this._bl = 2227873595, this._cl = 4271175723, this._dl = 1595750129, this._el = 2917565137, this._fl = 725511199, this._gl = 4215389547, this._hl = 327033209, this
        }, f.prototype._update = function (e) {
            for (var t = this._w, r = 0 | this._ah, n = 0 | this._bh, i = 0 | this._ch, o = 0 | this._dh, s = 0 | this._eh, f = 0 | this._fh, g = 0 | this._gh, m = 0 | this._hh, _ = 0 | this._al, w = 0 | this._bl, E = 0 | this._cl, S = 0 | this._dl, A = 0 | this._el, I = 0 | this._fl, k = 0 | this._gl, M = 0 | this._hl, x = 0; x < 32; x += 2) t[x] = e.readInt32BE(4 * x), t[x + 1] = e.readInt32BE(4 * x + 4);
            for (; x < 160; x += 2) {
                var B = t[x - 30],
                    T = t[x - 30 + 1],
                    P = l(B, T),
                    L = p(T, B),
                    R = b(B = t[x - 4], T = t[x - 4 + 1]),
                    C = y(T, B),
                    N = t[x - 14],
                    O = t[x - 14 + 1],
                    D = t[x - 32],
                    j = t[x - 32 + 1],
                    U = L + O | 0,
                    K = P + N + v(U, L) | 0;
                K = (K = K + R + v(U = U + C | 0, C) | 0) + D + v(U = U + j | 0, j) | 0, t[x] = K, t[x + 1] = U
            }
            for (var q = 0; q < 160; q += 2) {
                K = t[q], U = t[q + 1];
                var z = u(r, n, i),
                    H = u(_, w, E),
                    V = h(r, _),
                    Y = h(_, r),
                    F = d(s, A),
                    G = d(A, s),
                    W = a[q],
                    X = a[q + 1],
                    Z = c(s, f, g),
                    J = c(A, I, k),
                    $ = M + G | 0,
                    Q = m + F + v($, M) | 0;
                Q = (Q = (Q = Q + Z + v($ = $ + J | 0, J) | 0) + W + v($ = $ + X | 0, X) | 0) + K + v($ = $ + U | 0, U) | 0;
                var ee = Y + H | 0,
                    te = V + z + v(ee, Y) | 0;
                m = g, M = k, g = f, k = I, f = s, I = A, s = o + Q + v(A = S + $ | 0, S) | 0, o = i, S = E, i = n, E = w, n = r, w = _, r = Q + te + v(_ = $ + ee | 0, $) | 0
            }
            this._al = this._al + _ | 0, this._bl = this._bl + w | 0, this._cl = this._cl + E | 0, this._dl = this._dl + S | 0, this._el = this._el + A | 0, this._fl = this._fl + I | 0, this._gl = this._gl + k | 0, this._hl = this._hl + M | 0, this._ah = this._ah + r + v(this._al, _) | 0, this._bh = this._bh + n + v(this._bl, w) | 0, this._ch = this._ch + i + v(this._cl, E) | 0, this._dh = this._dh + o + v(this._dl, S) | 0, this._eh = this._eh + s + v(this._el, A) | 0, this._fh = this._fh + f + v(this._fl, I) | 0, this._gh = this._gh + g + v(this._gl, k) | 0, this._hh = this._hh + m + v(this._hl, M) | 0
        }, f.prototype._hash = function () {
            var e = o.allocUnsafe(64);

            function t(t, r, n) {
                e.writeInt32BE(t, n), e.writeInt32BE(r, n + 4)
            }
            return t(this._ah, this._al, 0), t(this._bh, this._bl, 8), t(this._ch, this._cl, 16), t(this._dh, this._dl, 24), t(this._eh, this._el, 32), t(this._fh, this._fl, 40), t(this._gh, this._gl, 48), t(this._hh, this._hl, 56), e
        }, e.exports = f
    }, function (e, t, r) {
        "use strict";
        var n = r(1),
            i = r(124),
            o = r(13),
            a = r(0).Buffer,
            s = r(68),
            f = r(43),
            c = r(44),
            u = a.alloc(128);

        function h(e, t) {
            o.call(this, "digest"), "string" == typeof t && (t = a.from(t));
            var r = "sha512" === e || "sha384" === e ? 128 : 64;
            (this._alg = e, this._key = t, t.length > r) ? t = ("rmd160" === e ? new f : c(e)).update(t).digest(): t.length < r && (t = a.concat([t, u], r));
            for (var n = this._ipad = a.allocUnsafe(r), i = this._opad = a.allocUnsafe(r), s = 0; s < r; s++) n[s] = 54 ^ t[s], i[s] = 92 ^ t[s];
            this._hash = "rmd160" === e ? new f : c(e), this._hash.update(n)
        }
        n(h, o), h.prototype._update = function (e) {
            this._hash.update(e)
        }, h.prototype._final = function () {
            var e = this._hash.digest();
            return ("rmd160" === this._alg ? new f : c(this._alg)).update(this._opad).update(e).digest()
        }, e.exports = function (e, t) {
            return "rmd160" === (e = e.toLowerCase()) || "ripemd160" === e ? new h("rmd160", t) : "md5" === e ? new i(s, t) : new h(e, t)
        }
    }, function (e, t, r) {
        var n = r(39);
        e.exports = function (e) {
            return (new n).update(e).digest()
        }
    }, function (e) {
        e.exports = JSON.parse('{"sha224WithRSAEncryption":{"sign":"rsa","hash":"sha224","id":"302d300d06096086480165030402040500041c"},"RSA-SHA224":{"sign":"ecdsa/rsa","hash":"sha224","id":"302d300d06096086480165030402040500041c"},"sha256WithRSAEncryption":{"sign":"rsa","hash":"sha256","id":"3031300d060960864801650304020105000420"},"RSA-SHA256":{"sign":"ecdsa/rsa","hash":"sha256","id":"3031300d060960864801650304020105000420"},"sha384WithRSAEncryption":{"sign":"rsa","hash":"sha384","id":"3041300d060960864801650304020205000430"},"RSA-SHA384":{"sign":"ecdsa/rsa","hash":"sha384","id":"3041300d060960864801650304020205000430"},"sha512WithRSAEncryption":{"sign":"rsa","hash":"sha512","id":"3051300d060960864801650304020305000440"},"RSA-SHA512":{"sign":"ecdsa/rsa","hash":"sha512","id":"3051300d060960864801650304020305000440"},"RSA-SHA1":{"sign":"rsa","hash":"sha1","id":"3021300906052b0e03021a05000414"},"ecdsa-with-SHA1":{"sign":"ecdsa","hash":"sha1","id":""},"sha256":{"sign":"ecdsa","hash":"sha256","id":""},"sha224":{"sign":"ecdsa","hash":"sha224","id":""},"sha384":{"sign":"ecdsa","hash":"sha384","id":""},"sha512":{"sign":"ecdsa","hash":"sha512","id":""},"DSA-SHA":{"sign":"dsa","hash":"sha1","id":""},"DSA-SHA1":{"sign":"dsa","hash":"sha1","id":""},"DSA":{"sign":"dsa","hash":"sha1","id":""},"DSA-WITH-SHA224":{"sign":"dsa","hash":"sha224","id":""},"DSA-SHA224":{"sign":"dsa","hash":"sha224","id":""},"DSA-WITH-SHA256":{"sign":"dsa","hash":"sha256","id":""},"DSA-SHA256":{"sign":"dsa","hash":"sha256","id":""},"DSA-WITH-SHA384":{"sign":"dsa","hash":"sha384","id":""},"DSA-SHA384":{"sign":"dsa","hash":"sha384","id":""},"DSA-WITH-SHA512":{"sign":"dsa","hash":"sha512","id":""},"DSA-SHA512":{"sign":"dsa","hash":"sha512","id":""},"DSA-RIPEMD160":{"sign":"dsa","hash":"rmd160","id":""},"ripemd160WithRSA":{"sign":"rsa","hash":"rmd160","id":"3021300906052b2403020105000414"},"RSA-RIPEMD160":{"sign":"rsa","hash":"rmd160","id":"3021300906052b2403020105000414"},"md5WithRSAEncryption":{"sign":"rsa","hash":"md5","id":"3020300c06082a864886f70d020505000410"},"RSA-MD5":{"sign":"rsa","hash":"md5","id":"3020300c06082a864886f70d020505000410"}}')
    }, function (e, t, r) {
        t.pbkdf2 = r(126), t.pbkdf2Sync = r(73)
    }, function (e, t, r) {
        (function (t) {
            var r = Math.pow(2, 30) - 1;

            function n(e, r) {
                if ("string" != typeof e && !t.isBuffer(e)) throw new TypeError(r + " must be a buffer or string")
            }
            e.exports = function (e, t, i, o) {
                if (n(e, "Password"), n(t, "Salt"), "number" != typeof i) throw new TypeError("Iterations not a number");
                if (i < 0) throw new TypeError("Bad iterations");
                if ("number" != typeof o) throw new TypeError("Key length not a number");
                if (o < 0 || o > r || o != o) throw new TypeError("Bad key length")
            }
        }).call(this, r(5).Buffer)
    }, function (e, t, r) {
        (function (t) {
            var r;
            t.browser ? r = "utf-8" : r = parseInt(t.version.split(".")[0].slice(1), 10) >= 6 ? "utf-8" : "binary";
            e.exports = r
        }).call(this, r(11))
    }, function (e, t, r) {
        var n = r(68),
            i = r(43),
            o = r(44),
            a = r(71),
            s = r(72),
            f = r(0).Buffer,
            c = f.alloc(128),
            u = {
                md5: 16,
                sha1: 20,
                sha224: 28,
                sha256: 32,
                sha384: 48,
                sha512: 64,
                rmd160: 20,
                ripemd160: 20
            };

        function h(e, t, r) {
            var a = function (e) {
                    return "rmd160" === e || "ripemd160" === e ? i : "md5" === e ? n : function (t) {
                        return o(e).update(t).digest()
                    }
                }(e),
                s = "sha512" === e || "sha384" === e ? 128 : 64;
            t.length > s ? t = a(t) : t.length < s && (t = f.concat([t, c], s));
            for (var h = f.allocUnsafe(s + u[e]), d = f.allocUnsafe(s + u[e]), l = 0; l < s; l++) h[l] = 54 ^ t[l], d[l] = 92 ^ t[l];
            var p = f.allocUnsafe(s + r + 4);
            h.copy(p, 0, 0, s), this.ipad1 = p, this.ipad2 = h, this.opad = d, this.alg = e, this.blocksize = s, this.hash = a, this.size = u[e]
        }
        h.prototype.run = function (e, t) {
            return e.copy(t, this.blocksize), this.hash(t).copy(this.opad, this.blocksize), this.hash(this.opad)
        }, e.exports = function (e, t, r, n, i) {
            a(e, t, r, n), f.isBuffer(e) || (e = f.from(e, s)), f.isBuffer(t) || (t = f.from(t, s));
            var o = new h(i = i || "sha1", e, t.length),
                c = f.allocUnsafe(n),
                d = f.allocUnsafe(t.length + 4);
            t.copy(d, 0, 0, t.length);
            for (var l = 0, p = u[i], b = Math.ceil(n / p), y = 1; y <= b; y++) {
                d.writeUInt32BE(y, t.length);
                for (var v = o.run(d, o.ipad1), g = v, m = 1; m < r; m++) {
                    g = o.run(g, o.ipad2);
                    for (var _ = 0; _ < p; _++) v[_] ^= g[_]
                }
                v.copy(c, l), l += p
            }
            return c
        }
    }, function (e, t, r) {
        "use strict";
        t.readUInt32BE = function (e, t) {
            return (e[0 + t] << 24 | e[1 + t] << 16 | e[2 + t] << 8 | e[3 + t]) >>> 0
        }, t.writeUInt32BE = function (e, t, r) {
            e[0 + r] = t >>> 24, e[1 + r] = t >>> 16 & 255, e[2 + r] = t >>> 8 & 255, e[3 + r] = 255 & t
        }, t.ip = function (e, t, r, n) {
            for (var i = 0, o = 0, a = 6; a >= 0; a -= 2) {
                for (var s = 0; s <= 24; s += 8) i <<= 1, i |= t >>> s + a & 1;
                for (s = 0; s <= 24; s += 8) i <<= 1, i |= e >>> s + a & 1
            }
            for (a = 6; a >= 0; a -= 2) {
                for (s = 1; s <= 25; s += 8) o <<= 1, o |= t >>> s + a & 1;
                for (s = 1; s <= 25; s += 8) o <<= 1, o |= e >>> s + a & 1
            }
            r[n + 0] = i >>> 0, r[n + 1] = o >>> 0
        }, t.rip = function (e, t, r, n) {
            for (var i = 0, o = 0, a = 0; a < 4; a++)
                for (var s = 24; s >= 0; s -= 8) i <<= 1, i |= t >>> s + a & 1, i <<= 1, i |= e >>> s + a & 1;
            for (a = 4; a < 8; a++)
                for (s = 24; s >= 0; s -= 8) o <<= 1, o |= t >>> s + a & 1, o <<= 1, o |= e >>> s + a & 1;
            r[n + 0] = i >>> 0, r[n + 1] = o >>> 0
        }, t.pc1 = function (e, t, r, n) {
            for (var i = 0, o = 0, a = 7; a >= 5; a--) {
                for (var s = 0; s <= 24; s += 8) i <<= 1, i |= t >> s + a & 1;
                for (s = 0; s <= 24; s += 8) i <<= 1, i |= e >> s + a & 1
            }
            for (s = 0; s <= 24; s += 8) i <<= 1, i |= t >> s + a & 1;
            for (a = 1; a <= 3; a++) {
                for (s = 0; s <= 24; s += 8) o <<= 1, o |= t >> s + a & 1;
                for (s = 0; s <= 24; s += 8) o <<= 1, o |= e >> s + a & 1
            }
            for (s = 0; s <= 24; s += 8) o <<= 1, o |= e >> s + a & 1;
            r[n + 0] = i >>> 0, r[n + 1] = o >>> 0
        }, t.r28shl = function (e, t) {
            return e << t & 268435455 | e >>> 28 - t
        };
        var n = [14, 11, 17, 4, 27, 23, 25, 0, 13, 22, 7, 18, 5, 9, 16, 24, 2, 20, 12, 21, 1, 8, 15, 26, 15, 4, 25, 19, 9, 1, 26, 16, 5, 11, 23, 8, 12, 7, 17, 0, 22, 3, 10, 14, 6, 20, 27, 24];
        t.pc2 = function (e, t, r, i) {
            for (var o = 0, a = 0, s = n.length >>> 1, f = 0; f < s; f++) o <<= 1, o |= e >>> n[f] & 1;
            for (f = s; f < n.length; f++) a <<= 1, a |= t >>> n[f] & 1;
            r[i + 0] = o >>> 0, r[i + 1] = a >>> 0
        }, t.expand = function (e, t, r) {
            var n = 0,
                i = 0;
            n = (1 & e) << 5 | e >>> 27;
            for (var o = 23; o >= 15; o -= 4) n <<= 6, n |= e >>> o & 63;
            for (o = 11; o >= 3; o -= 4) i |= e >>> o & 63, i <<= 6;
            i |= (31 & e) << 1 | e >>> 31, t[r + 0] = n >>> 0, t[r + 1] = i >>> 0
        };
        var i = [14, 0, 4, 15, 13, 7, 1, 4, 2, 14, 15, 2, 11, 13, 8, 1, 3, 10, 10, 6, 6, 12, 12, 11, 5, 9, 9, 5, 0, 3, 7, 8, 4, 15, 1, 12, 14, 8, 8, 2, 13, 4, 6, 9, 2, 1, 11, 7, 15, 5, 12, 11, 9, 3, 7, 14, 3, 10, 10, 0, 5, 6, 0, 13, 15, 3, 1, 13, 8, 4, 14, 7, 6, 15, 11, 2, 3, 8, 4, 14, 9, 12, 7, 0, 2, 1, 13, 10, 12, 6, 0, 9, 5, 11, 10, 5, 0, 13, 14, 8, 7, 10, 11, 1, 10, 3, 4, 15, 13, 4, 1, 2, 5, 11, 8, 6, 12, 7, 6, 12, 9, 0, 3, 5, 2, 14, 15, 9, 10, 13, 0, 7, 9, 0, 14, 9, 6, 3, 3, 4, 15, 6, 5, 10, 1, 2, 13, 8, 12, 5, 7, 14, 11, 12, 4, 11, 2, 15, 8, 1, 13, 1, 6, 10, 4, 13, 9, 0, 8, 6, 15, 9, 3, 8, 0, 7, 11, 4, 1, 15, 2, 14, 12, 3, 5, 11, 10, 5, 14, 2, 7, 12, 7, 13, 13, 8, 14, 11, 3, 5, 0, 6, 6, 15, 9, 0, 10, 3, 1, 4, 2, 7, 8, 2, 5, 12, 11, 1, 12, 10, 4, 14, 15, 9, 10, 3, 6, 15, 9, 0, 0, 6, 12, 10, 11, 1, 7, 13, 13, 8, 15, 9, 1, 4, 3, 5, 14, 11, 5, 12, 2, 7, 8, 2, 4, 14, 2, 14, 12, 11, 4, 2, 1, 12, 7, 4, 10, 7, 11, 13, 6, 1, 8, 5, 5, 0, 3, 15, 15, 10, 13, 3, 0, 9, 14, 8, 9, 6, 4, 11, 2, 8, 1, 12, 11, 7, 10, 1, 13, 14, 7, 2, 8, 13, 15, 6, 9, 15, 12, 0, 5, 9, 6, 10, 3, 4, 0, 5, 14, 3, 12, 10, 1, 15, 10, 4, 15, 2, 9, 7, 2, 12, 6, 9, 8, 5, 0, 6, 13, 1, 3, 13, 4, 14, 14, 0, 7, 11, 5, 3, 11, 8, 9, 4, 14, 3, 15, 2, 5, 12, 2, 9, 8, 5, 12, 15, 3, 10, 7, 11, 0, 14, 4, 1, 10, 7, 1, 6, 13, 0, 11, 8, 6, 13, 4, 13, 11, 0, 2, 11, 14, 7, 15, 4, 0, 9, 8, 1, 13, 10, 3, 14, 12, 3, 9, 5, 7, 12, 5, 2, 10, 15, 6, 8, 1, 6, 1, 6, 4, 11, 11, 13, 13, 8, 12, 1, 3, 4, 7, 10, 14, 7, 10, 9, 15, 5, 6, 0, 8, 15, 0, 14, 5, 2, 9, 3, 2, 12, 13, 1, 2, 15, 8, 13, 4, 8, 6, 10, 15, 3, 11, 7, 1, 4, 10, 12, 9, 5, 3, 6, 14, 11, 5, 0, 0, 14, 12, 9, 7, 2, 7, 2, 11, 1, 4, 14, 1, 7, 9, 4, 12, 10, 14, 8, 2, 13, 0, 15, 6, 12, 10, 9, 13, 0, 15, 3, 3, 5, 5, 6, 8, 11];
        t.substitute = function (e, t) {
            for (var r = 0, n = 0; n < 4; n++) {
                r <<= 4, r |= i[64 * n + (e >>> 18 - 6 * n & 63)]
            }
            for (n = 0; n < 4; n++) {
                r <<= 4, r |= i[256 + 64 * n + (t >>> 18 - 6 * n & 63)]
            }
            return r >>> 0
        };
        var o = [16, 25, 12, 11, 3, 20, 4, 15, 31, 17, 9, 6, 27, 14, 1, 22, 30, 24, 8, 18, 0, 5, 29, 23, 13, 19, 2, 26, 10, 21, 28, 7];
        t.permute = function (e) {
            for (var t = 0, r = 0; r < o.length; r++) t <<= 1, t |= e >>> o[r] & 1;
            return t >>> 0
        }, t.padSplit = function (e, t, r) {
            for (var n = e.toString(2); n.length < t;) n = "0" + n;
            for (var i = [], o = 0; o < t; o += r) i.push(n.slice(o, o + r));
            return i.join(" ")
        }
    }, function (e, t, r) {
        "use strict";
        var n = r(9),
            i = r(1),
            o = r(74),
            a = r(45);

        function s(e) {
            a.call(this, e);
            var t = new function () {
                this.tmp = new Array(2), this.keys = null
            };
            this._desState = t, this.deriveKeys(t, e.key)
        }
        i(s, a), e.exports = s, s.create = function (e) {
            return new s(e)
        };
        var f = [1, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1];
        s.prototype.deriveKeys = function (e, t) {
            e.keys = new Array(32), n.equal(t.length, this.blockSize, "Invalid key length");
            var r = o.readUInt32BE(t, 0),
                i = o.readUInt32BE(t, 4);
            o.pc1(r, i, e.tmp, 0), r = e.tmp[0], i = e.tmp[1];
            for (var a = 0; a < e.keys.length; a += 2) {
                var s = f[a >>> 1];
                r = o.r28shl(r, s), i = o.r28shl(i, s), o.pc2(r, i, e.keys, a)
            }
        }, s.prototype._update = function (e, t, r, n) {
            var i = this._desState,
                a = o.readUInt32BE(e, t),
                s = o.readUInt32BE(e, t + 4);
            o.ip(a, s, i.tmp, 0), a = i.tmp[0], s = i.tmp[1], "encrypt" === this.type ? this._encrypt(i, a, s, i.tmp, 0) : this._decrypt(i, a, s, i.tmp, 0), a = i.tmp[0], s = i.tmp[1], o.writeUInt32BE(r, a, n), o.writeUInt32BE(r, s, n + 4)
        }, s.prototype._pad = function (e, t) {
            for (var r = e.length - t, n = t; n < e.length; n++) e[n] = r;
            return !0
        }, s.prototype._unpad = function (e) {
            for (var t = e[e.length - 1], r = e.length - t; r < e.length; r++) n.equal(e[r], t);
            return e.slice(0, e.length - t)
        }, s.prototype._encrypt = function (e, t, r, n, i) {
            for (var a = t, s = r, f = 0; f < e.keys.length; f += 2) {
                var c = e.keys[f],
                    u = e.keys[f + 1];
                o.expand(s, e.tmp, 0), c ^= e.tmp[0], u ^= e.tmp[1];
                var h = o.substitute(c, u),
                    d = s;
                s = (a ^ o.permute(h)) >>> 0, a = d
            }
            o.rip(s, a, n, i)
        }, s.prototype._decrypt = function (e, t, r, n, i) {
            for (var a = r, s = t, f = e.keys.length - 2; f >= 0; f -= 2) {
                var c = e.keys[f],
                    u = e.keys[f + 1];
                o.expand(a, e.tmp, 0), c ^= e.tmp[0], u ^= e.tmp[1];
                var h = o.substitute(c, u),
                    d = a;
                a = (s ^ o.permute(h)) >>> 0, s = d
            }
            o.rip(a, s, n, i)
        }
    }, function (e, t, r) {
        var n = r(26),
            i = r(0).Buffer,
            o = r(77);

        function a(e) {
            var t = e._cipher.encryptBlockRaw(e._prev);
            return o(e._prev), t
        }
        t.encrypt = function (e, t) {
            var r = Math.ceil(t.length / 16),
                o = e._cache.length;
            e._cache = i.concat([e._cache, i.allocUnsafe(16 * r)]);
            for (var s = 0; s < r; s++) {
                var f = a(e),
                    c = o + 16 * s;
                e._cache.writeUInt32BE(f[0], c + 0), e._cache.writeUInt32BE(f[1], c + 4), e._cache.writeUInt32BE(f[2], c + 8), e._cache.writeUInt32BE(f[3], c + 12)
            }
            var u = e._cache.slice(0, t.length);
            return e._cache = e._cache.slice(t.length), n(t, u)
        }
    }, function (e, t) {
        e.exports = function (e) {
            for (var t, r = e.length; r--;) {
                if (255 !== (t = e.readUInt8(r))) {
                    t++, e.writeUInt8(t, r);
                    break
                }
                e.writeUInt8(0, r)
            }
        }
    }, function (e) {
        e.exports = JSON.parse('{"aes-128-ecb":{"cipher":"AES","key":128,"iv":0,"mode":"ECB","type":"block"},"aes-192-ecb":{"cipher":"AES","key":192,"iv":0,"mode":"ECB","type":"block"},"aes-256-ecb":{"cipher":"AES","key":256,"iv":0,"mode":"ECB","type":"block"},"aes-128-cbc":{"cipher":"AES","key":128,"iv":16,"mode":"CBC","type":"block"},"aes-192-cbc":{"cipher":"AES","key":192,"iv":16,"mode":"CBC","type":"block"},"aes-256-cbc":{"cipher":"AES","key":256,"iv":16,"mode":"CBC","type":"block"},"aes128":{"cipher":"AES","key":128,"iv":16,"mode":"CBC","type":"block"},"aes192":{"cipher":"AES","key":192,"iv":16,"mode":"CBC","type":"block"},"aes256":{"cipher":"AES","key":256,"iv":16,"mode":"CBC","type":"block"},"aes-128-cfb":{"cipher":"AES","key":128,"iv":16,"mode":"CFB","type":"stream"},"aes-192-cfb":{"cipher":"AES","key":192,"iv":16,"mode":"CFB","type":"stream"},"aes-256-cfb":{"cipher":"AES","key":256,"iv":16,"mode":"CFB","type":"stream"},"aes-128-cfb8":{"cipher":"AES","key":128,"iv":16,"mode":"CFB8","type":"stream"},"aes-192-cfb8":{"cipher":"AES","key":192,"iv":16,"mode":"CFB8","type":"stream"},"aes-256-cfb8":{"cipher":"AES","key":256,"iv":16,"mode":"CFB8","type":"stream"},"aes-128-cfb1":{"cipher":"AES","key":128,"iv":16,"mode":"CFB1","type":"stream"},"aes-192-cfb1":{"cipher":"AES","key":192,"iv":16,"mode":"CFB1","type":"stream"},"aes-256-cfb1":{"cipher":"AES","key":256,"iv":16,"mode":"CFB1","type":"stream"},"aes-128-ofb":{"cipher":"AES","key":128,"iv":16,"mode":"OFB","type":"stream"},"aes-192-ofb":{"cipher":"AES","key":192,"iv":16,"mode":"OFB","type":"stream"},"aes-256-ofb":{"cipher":"AES","key":256,"iv":16,"mode":"OFB","type":"stream"},"aes-128-ctr":{"cipher":"AES","key":128,"iv":16,"mode":"CTR","type":"stream"},"aes-192-ctr":{"cipher":"AES","key":192,"iv":16,"mode":"CTR","type":"stream"},"aes-256-ctr":{"cipher":"AES","key":256,"iv":16,"mode":"CTR","type":"stream"},"aes-128-gcm":{"cipher":"AES","key":128,"iv":12,"mode":"GCM","type":"auth"},"aes-192-gcm":{"cipher":"AES","key":192,"iv":12,"mode":"GCM","type":"auth"},"aes-256-gcm":{"cipher":"AES","key":256,"iv":12,"mode":"GCM","type":"auth"}}')
    }, function (e, t, r) {
        var n = r(32),
            i = r(0).Buffer,
            o = r(13),
            a = r(1),
            s = r(139),
            f = r(26),
            c = r(77);

        function u(e, t, r, a) {
            o.call(this);
            var f = i.alloc(4, 0);
            this._cipher = new n.AES(t);
            var u = this._cipher.encryptBlock(f);
            this._ghash = new s(u), r = function (e, t, r) {
                if (12 === t.length) return e._finID = i.concat([t, i.from([0, 0, 0, 1])]), i.concat([t, i.from([0, 0, 0, 2])]);
                var n = new s(r),
                    o = t.length,
                    a = o % 16;
                n.update(t), a && (a = 16 - a, n.update(i.alloc(a, 0))), n.update(i.alloc(8, 0));
                var f = 8 * o,
                    u = i.alloc(8);
                u.writeUIntBE(f, 0, 8), n.update(u), e._finID = n.state;
                var h = i.from(e._finID);
                return c(h), h
            }(this, r, u), this._prev = i.from(r), this._cache = i.allocUnsafe(0), this._secCache = i.allocUnsafe(0), this._decrypt = a, this._alen = 0, this._len = 0, this._mode = e, this._authTag = null, this._called = !1
        }
        a(u, o), u.prototype._update = function (e) {
            if (!this._called && this._alen) {
                var t = 16 - this._alen % 16;
                t < 16 && (t = i.alloc(t, 0), this._ghash.update(t))
            }
            this._called = !0;
            var r = this._mode.encrypt(this, e);
            return this._decrypt ? this._ghash.update(e) : this._ghash.update(r), this._len += e.length, r
        }, u.prototype._final = function () {
            if (this._decrypt && !this._authTag) throw new Error("Unsupported state or unable to authenticate data");
            var e = f(this._ghash.final(8 * this._alen, 8 * this._len), this._cipher.encryptBlock(this._finID));
            if (this._decrypt && function (e, t) {
                    var r = 0;
                    e.length !== t.length && r++;
                    for (var n = Math.min(e.length, t.length), i = 0; i < n; ++i) r += e[i] ^ t[i];
                    return r
                }(e, this._authTag)) throw new Error("Unsupported state or unable to authenticate data");
            this._authTag = e, this._cipher.scrub()
        }, u.prototype.getAuthTag = function () {
            if (this._decrypt || !i.isBuffer(this._authTag)) throw new Error("Attempting to get auth tag in unsupported state");
            return this._authTag
        }, u.prototype.setAuthTag = function (e) {
            if (!this._decrypt) throw new Error("Attempting to set auth tag in unsupported state");
            this._authTag = e
        }, u.prototype.setAAD = function (e) {
            if (this._called) throw new Error("Attempting to set AAD in unsupported state");
            this._ghash.update(e), this._alen += e.length
        }, e.exports = u
    }, function (e, t, r) {
        var n = r(32),
            i = r(0).Buffer,
            o = r(13);

        function a(e, t, r, a) {
            o.call(this), this._cipher = new n.AES(t), this._prev = i.from(r), this._cache = i.allocUnsafe(0), this._secCache = i.allocUnsafe(0), this._decrypt = a, this._mode = e
        }
        r(1)(a, o), a.prototype._update = function (e) {
            return this._mode.encrypt(this, e, this._decrypt)
        }, a.prototype._final = function () {
            this._cipher.scrub()
        }, e.exports = a
    }, function (e, t, r) {
        var n = r(18);
        e.exports = g, g.simpleSieve = y, g.fermatTest = v;
        var i = r(4),
            o = new i(24),
            a = new(r(82)),
            s = new i(1),
            f = new i(2),
            c = new i(5),
            u = (new i(16), new i(8), new i(10)),
            h = new i(3),
            d = (new i(7), new i(11)),
            l = new i(4),
            p = (new i(12), null);

        function b() {
            if (null !== p) return p;
            var e = [];
            e[0] = 2;
            for (var t = 1, r = 3; r < 1048576; r += 2) {
                for (var n = Math.ceil(Math.sqrt(r)), i = 0; i < t && e[i] <= n && r % e[i] != 0; i++);
                t !== i && e[i] <= n || (e[t++] = r)
            }
            return p = e, e
        }

        function y(e) {
            for (var t = b(), r = 0; r < t.length; r++)
                if (0 === e.modn(t[r])) return 0 === e.cmpn(t[r]);
            return !0
        }

        function v(e) {
            var t = i.mont(e);
            return 0 === f.toRed(t).redPow(e.subn(1)).fromRed().cmpn(1)
        }

        function g(e, t) {
            if (e < 16) return new i(2 === t || 5 === t ? [140, 123] : [140, 39]);
            var r, p;
            for (t = new i(t);;) {
                for (r = new i(n(Math.ceil(e / 8))); r.bitLength() > e;) r.ishrn(1);
                if (r.isEven() && r.iadd(s), r.testn(1) || r.iadd(f), t.cmp(f)) {
                    if (!t.cmp(c))
                        for (; r.mod(u).cmp(h);) r.iadd(l)
                } else
                    for (; r.mod(o).cmp(d);) r.iadd(l);
                if (y(p = r.shrn(1)) && y(r) && v(p) && v(r) && a.test(p) && a.test(r)) return r
            }
        }
    }, function (e, t, r) {
        var n = r(4),
            i = r(48);

        function o(e) {
            this.rand = e || new i.Rand
        }
        e.exports = o, o.create = function (e) {
            return new o(e)
        }, o.prototype._randbelow = function (e) {
            var t = e.bitLength(),
                r = Math.ceil(t / 8);
            do {
                var i = new n(this.rand.generate(r))
            } while (i.cmp(e) >= 0);
            return i
        }, o.prototype._randrange = function (e, t) {
            var r = t.sub(e);
            return e.add(this._randbelow(r))
        }, o.prototype.test = function (e, t, r) {
            var i = e.bitLength(),
                o = n.mont(e),
                a = new n(1).toRed(o);
            t || (t = Math.max(1, i / 48 | 0));
            for (var s = e.subn(1), f = 0; !s.testn(f); f++);
            for (var c = e.shrn(f), u = s.toRed(o); t > 0; t--) {
                var h = this._randrange(new n(2), s);
                r && r(h);
                var d = h.toRed(o).redPow(c);
                if (0 !== d.cmp(a) && 0 !== d.cmp(u)) {
                    for (var l = 1; l < f; l++) {
                        if (0 === (d = d.redSqr()).cmp(a)) return !1;
                        if (0 === d.cmp(u)) break
                    }
                    if (l === f) return !1
                }
            }
            return !0
        }, o.prototype.getDivisor = function (e, t) {
            var r = e.bitLength(),
                i = n.mont(e),
                o = new n(1).toRed(i);
            t || (t = Math.max(1, r / 48 | 0));
            for (var a = e.subn(1), s = 0; !a.testn(s); s++);
            for (var f = e.shrn(s), c = a.toRed(i); t > 0; t--) {
                var u = this._randrange(new n(2), a),
                    h = e.gcd(u);
                if (0 !== h.cmpn(1)) return h;
                var d = u.toRed(i).redPow(f);
                if (0 !== d.cmp(o) && 0 !== d.cmp(c)) {
                    for (var l = 1; l < s; l++) {
                        if (0 === (d = d.redSqr()).cmp(o)) return d.fromRed().subn(1).gcd(e);
                        if (0 === d.cmp(c)) break
                    }
                    if (l === s) return (d = d.redSqr()).fromRed().subn(1).gcd(e)
                }
            }
            return !1
        }
    }, function (e, t, r) {
        "use strict";
        var n = t;

        function i(e) {
            return 1 === e.length ? "0" + e : e
        }

        function o(e) {
            for (var t = "", r = 0; r < e.length; r++) t += i(e[r].toString(16));
            return t
        }
        n.toArray = function (e, t) {
            if (Array.isArray(e)) return e.slice();
            if (!e) return [];
            var r = [];
            if ("string" != typeof e) {
                for (var n = 0; n < e.length; n++) r[n] = 0 | e[n];
                return r
            }
            if ("hex" === t)
                for ((e = e.replace(/[^a-z0-9]+/gi, "")).length % 2 != 0 && (e = "0" + e), n = 0; n < e.length; n += 2) r.push(parseInt(e[n] + e[n + 1], 16));
            else
                for (n = 0; n < e.length; n++) {
                    var i = e.charCodeAt(n),
                        o = i >> 8,
                        a = 255 & i;
                    o ? r.push(o, a) : r.push(a)
                }
            return r
        }, n.zero2 = i, n.toHex = o, n.encode = function (e, t) {
            return "hex" === t ? o(e) : e
        }
    }, function (e, t, r) {
        "use strict";
        var n = t;
        n.base = r(35), n.short = r(151), n.mont = r(152), n.edwards = r(153)
    }, function (e, t, r) {
        "use strict";
        var n = r(12).rotr32;

        function i(e, t, r) {
            return e & t ^ ~e & r
        }

        function o(e, t, r) {
            return e & t ^ e & r ^ t & r
        }

        function a(e, t, r) {
            return e ^ t ^ r
        }
        t.ft_1 = function (e, t, r, n) {
            return 0 === e ? i(t, r, n) : 1 === e || 3 === e ? a(t, r, n) : 2 === e ? o(t, r, n) : void 0
        }, t.ch32 = i, t.maj32 = o, t.p32 = a, t.s0_256 = function (e) {
            return n(e, 2) ^ n(e, 13) ^ n(e, 22)
        }, t.s1_256 = function (e) {
            return n(e, 6) ^ n(e, 11) ^ n(e, 25)
        }, t.g0_256 = function (e) {
            return n(e, 7) ^ n(e, 18) ^ e >>> 3
        }, t.g1_256 = function (e) {
            return n(e, 17) ^ n(e, 19) ^ e >>> 10
        }
    }, function (e, t, r) {
        "use strict";
        var n = r(12),
            i = r(27),
            o = r(85),
            a = r(9),
            s = n.sum32,
            f = n.sum32_4,
            c = n.sum32_5,
            u = o.ch32,
            h = o.maj32,
            d = o.s0_256,
            l = o.s1_256,
            p = o.g0_256,
            b = o.g1_256,
            y = i.BlockHash,
            v = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298];

        function g() {
            if (!(this instanceof g)) return new g;
            y.call(this), this.h = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225], this.k = v, this.W = new Array(64)
        }
        n.inherits(g, y), e.exports = g, g.blockSize = 512, g.outSize = 256, g.hmacStrength = 192, g.padLength = 64, g.prototype._update = function (e, t) {
            for (var r = this.W, n = 0; n < 16; n++) r[n] = e[t + n];
            for (; n < r.length; n++) r[n] = f(b(r[n - 2]), r[n - 7], p(r[n - 15]), r[n - 16]);
            var i = this.h[0],
                o = this.h[1],
                y = this.h[2],
                v = this.h[3],
                g = this.h[4],
                m = this.h[5],
                _ = this.h[6],
                w = this.h[7];
            for (a(this.k.length === r.length), n = 0; n < r.length; n++) {
                var E = c(w, l(g), u(g, m, _), this.k[n], r[n]),
                    S = s(d(i), h(i, o, y));
                w = _, _ = m, m = g, g = s(v, E), v = y, y = o, o = i, i = s(E, S)
            }
            this.h[0] = s(this.h[0], i), this.h[1] = s(this.h[1], o), this.h[2] = s(this.h[2], y), this.h[3] = s(this.h[3], v), this.h[4] = s(this.h[4], g), this.h[5] = s(this.h[5], m), this.h[6] = s(this.h[6], _), this.h[7] = s(this.h[7], w)
        }, g.prototype._digest = function (e) {
            return "hex" === e ? n.toHex32(this.h, "big") : n.split32(this.h, "big")
        }
    }, function (e, t, r) {
        "use strict";
        var n = r(12),
            i = r(27),
            o = r(9),
            a = n.rotr64_hi,
            s = n.rotr64_lo,
            f = n.shr64_hi,
            c = n.shr64_lo,
            u = n.sum64,
            h = n.sum64_hi,
            d = n.sum64_lo,
            l = n.sum64_4_hi,
            p = n.sum64_4_lo,
            b = n.sum64_5_hi,
            y = n.sum64_5_lo,
            v = i.BlockHash,
            g = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591];

        function m() {
            if (!(this instanceof m)) return new m;
            v.call(this), this.h = [1779033703, 4089235720, 3144134277, 2227873595, 1013904242, 4271175723, 2773480762, 1595750129, 1359893119, 2917565137, 2600822924, 725511199, 528734635, 4215389547, 1541459225, 327033209], this.k = g, this.W = new Array(160)
        }

        function _(e, t, r, n, i) {
            var o = e & r ^ ~e & i;
            return o < 0 && (o += 4294967296), o
        }

        function w(e, t, r, n, i, o) {
            var a = t & n ^ ~t & o;
            return a < 0 && (a += 4294967296), a
        }

        function E(e, t, r, n, i) {
            var o = e & r ^ e & i ^ r & i;
            return o < 0 && (o += 4294967296), o
        }

        function S(e, t, r, n, i, o) {
            var a = t & n ^ t & o ^ n & o;
            return a < 0 && (a += 4294967296), a
        }

        function A(e, t) {
            var r = a(e, t, 28) ^ a(t, e, 2) ^ a(t, e, 7);
            return r < 0 && (r += 4294967296), r
        }

        function I(e, t) {
            var r = s(e, t, 28) ^ s(t, e, 2) ^ s(t, e, 7);
            return r < 0 && (r += 4294967296), r
        }

        function k(e, t) {
            var r = a(e, t, 14) ^ a(e, t, 18) ^ a(t, e, 9);
            return r < 0 && (r += 4294967296), r
        }

        function M(e, t) {
            var r = s(e, t, 14) ^ s(e, t, 18) ^ s(t, e, 9);
            return r < 0 && (r += 4294967296), r
        }

        function x(e, t) {
            var r = a(e, t, 1) ^ a(e, t, 8) ^ f(e, t, 7);
            return r < 0 && (r += 4294967296), r
        }

        function B(e, t) {
            var r = s(e, t, 1) ^ s(e, t, 8) ^ c(e, t, 7);
            return r < 0 && (r += 4294967296), r
        }

        function T(e, t) {
            var r = a(e, t, 19) ^ a(t, e, 29) ^ f(e, t, 6);
            return r < 0 && (r += 4294967296), r
        }

        function P(e, t) {
            var r = s(e, t, 19) ^ s(t, e, 29) ^ c(e, t, 6);
            return r < 0 && (r += 4294967296), r
        }
        n.inherits(m, v), e.exports = m, m.blockSize = 1024, m.outSize = 512, m.hmacStrength = 192, m.padLength = 128, m.prototype._prepareBlock = function (e, t) {
            for (var r = this.W, n = 0; n < 32; n++) r[n] = e[t + n];
            for (; n < r.length; n += 2) {
                var i = T(r[n - 4], r[n - 3]),
                    o = P(r[n - 4], r[n - 3]),
                    a = r[n - 14],
                    s = r[n - 13],
                    f = x(r[n - 30], r[n - 29]),
                    c = B(r[n - 30], r[n - 29]),
                    u = r[n - 32],
                    h = r[n - 31];
                r[n] = l(i, o, a, s, f, c, u, h), r[n + 1] = p(i, o, a, s, f, c, u, h)
            }
        }, m.prototype._update = function (e, t) {
            this._prepareBlock(e, t);
            var r = this.W,
                n = this.h[0],
                i = this.h[1],
                a = this.h[2],
                s = this.h[3],
                f = this.h[4],
                c = this.h[5],
                l = this.h[6],
                p = this.h[7],
                v = this.h[8],
                g = this.h[9],
                m = this.h[10],
                x = this.h[11],
                B = this.h[12],
                T = this.h[13],
                P = this.h[14],
                L = this.h[15];
            o(this.k.length === r.length);
            for (var R = 0; R < r.length; R += 2) {
                var C = P,
                    N = L,
                    O = k(v, g),
                    D = M(v, g),
                    j = _(v, g, m, x, B),
                    U = w(v, g, m, x, B, T),
                    K = this.k[R],
                    q = this.k[R + 1],
                    z = r[R],
                    H = r[R + 1],
                    V = b(C, N, O, D, j, U, K, q, z, H),
                    Y = y(C, N, O, D, j, U, K, q, z, H);
                C = A(n, i), N = I(n, i), O = E(n, i, a, s, f), D = S(n, i, a, s, f, c);
                var F = h(C, N, O, D),
                    G = d(C, N, O, D);
                P = B, L = T, B = m, T = x, m = v, x = g, v = h(l, p, V, Y), g = d(p, p, V, Y), l = f, p = c, f = a, c = s, a = n, s = i, n = h(V, Y, F, G), i = d(V, Y, F, G)
            }
            u(this.h, 0, n, i), u(this.h, 2, a, s), u(this.h, 4, f, c), u(this.h, 6, l, p), u(this.h, 8, v, g), u(this.h, 10, m, x), u(this.h, 12, B, T), u(this.h, 14, P, L)
        }, m.prototype._digest = function (e) {
            return "hex" === e ? n.toHex32(this.h, "big") : n.split32(this.h, "big")
        }
    }, function (e, t, r) {
        "use strict";
        const n = t;
        n.bignum = r(4), n.define = r(169).define, n.base = r(172), n.constants = r(173), n.decoders = r(91), n.encoders = r(89)
    }, function (e, t, r) {
        "use strict";
        const n = t;
        n.der = r(90), n.pem = r(170)
    }, function (e, t, r) {
        "use strict";
        const n = r(1),
            i = r(52).Buffer,
            o = r(53),
            a = r(55);

        function s(e) {
            this.enc = "der", this.name = e.name, this.entity = e, this.tree = new f, this.tree._init(e.body)
        }

        function f(e) {
            o.call(this, "der", e)
        }

        function c(e) {
            return e < 10 ? "0" + e : e
        }
        e.exports = s, s.prototype.encode = function (e, t) {
            return this.tree._encode(e, t).join()
        }, n(f, o), f.prototype._encodeComposite = function (e, t, r, n) {
            const o = function (e, t, r, n) {
                let i;
                "seqof" === e ? e = "seq" : "setof" === e && (e = "set");
                if (a.tagByName.hasOwnProperty(e)) i = a.tagByName[e];
                else {
                    if ("number" != typeof e || (0 | e) !== e) return n.error("Unknown tag: " + e);
                    i = e
                }
                if (i >= 31) return n.error("Multi-octet tag encoding unsupported");
                t || (i |= 32);
                return i |= a.tagClassByName[r || "universal"] << 6
            }(e, t, r, this.reporter);
            if (n.length < 128) {
                const e = i.alloc(2);
                return e[0] = o, e[1] = n.length, this._createEncoderBuffer([e, n])
            }
            let s = 1;
            for (let e = n.length; e >= 256; e >>= 8) s++;
            const f = i.alloc(2 + s);
            f[0] = o, f[1] = 128 | s;
            for (let e = 1 + s, t = n.length; t > 0; e--, t >>= 8) f[e] = 255 & t;
            return this._createEncoderBuffer([f, n])
        }, f.prototype._encodeStr = function (e, t) {
            if ("bitstr" === t) return this._createEncoderBuffer([0 | e.unused, e.data]);
            if ("bmpstr" === t) {
                const t = i.alloc(2 * e.length);
                for (let r = 0; r < e.length; r++) t.writeUInt16BE(e.charCodeAt(r), 2 * r);
                return this._createEncoderBuffer(t)
            }
            return "numstr" === t ? this._isNumstr(e) ? this._createEncoderBuffer(e) : this.reporter.error("Encoding of string type: numstr supports only digits and space") : "printstr" === t ? this._isPrintstr(e) ? this._createEncoderBuffer(e) : this.reporter.error("Encoding of string type: printstr supports only latin upper and lower case letters, digits, space, apostrophe, left and rigth parenthesis, plus sign, comma, hyphen, dot, slash, colon, equal sign, question mark") : /str$/.test(t) ? this._createEncoderBuffer(e) : "objDesc" === t ? this._createEncoderBuffer(e) : this.reporter.error("Encoding of string type: " + t + " unsupported")
        }, f.prototype._encodeObjid = function (e, t, r) {
            if ("string" == typeof e) {
                if (!t) return this.reporter.error("string objid given, but no values map found");
                if (!t.hasOwnProperty(e)) return this.reporter.error("objid not found in values map");
                e = t[e].split(/[\s.]+/g);
                for (let t = 0; t < e.length; t++) e[t] |= 0
            } else if (Array.isArray(e)) {
                e = e.slice();
                for (let t = 0; t < e.length; t++) e[t] |= 0
            }
            if (!Array.isArray(e)) return this.reporter.error("objid() should be either array or string, got: " + JSON.stringify(e));
            if (!r) {
                if (e[1] >= 40) return this.reporter.error("Second objid identifier OOB");
                e.splice(0, 2, 40 * e[0] + e[1])
            }
            let n = 0;
            for (let t = 0; t < e.length; t++) {
                let r = e[t];
                for (n++; r >= 128; r >>= 7) n++
            }
            const o = i.alloc(n);
            let a = o.length - 1;
            for (let t = e.length - 1; t >= 0; t--) {
                let r = e[t];
                for (o[a--] = 127 & r;
                    (r >>= 7) > 0;) o[a--] = 128 | 127 & r
            }
            return this._createEncoderBuffer(o)
        }, f.prototype._encodeTime = function (e, t) {
            let r;
            const n = new Date(e);
            return "gentime" === t ? r = [c(n.getUTCFullYear()), c(n.getUTCMonth() + 1), c(n.getUTCDate()), c(n.getUTCHours()), c(n.getUTCMinutes()), c(n.getUTCSeconds()), "Z"].join("") : "utctime" === t ? r = [c(n.getUTCFullYear() % 100), c(n.getUTCMonth() + 1), c(n.getUTCDate()), c(n.getUTCHours()), c(n.getUTCMinutes()), c(n.getUTCSeconds()), "Z"].join("") : this.reporter.error("Encoding " + t + " time is not supported yet"), this._encodeStr(r, "octstr")
        }, f.prototype._encodeNull = function () {
            return this._createEncoderBuffer("")
        }, f.prototype._encodeInt = function (e, t) {
            if ("string" == typeof e) {
                if (!t) return this.reporter.error("String int or enum given, but no values map");
                if (!t.hasOwnProperty(e)) return this.reporter.error("Values map doesn't contain: " + JSON.stringify(e));
                e = t[e]
            }
            if ("number" != typeof e && !i.isBuffer(e)) {
                const t = e.toArray();
                !e.sign && 128 & t[0] && t.unshift(0), e = i.from(t)
            }
            if (i.isBuffer(e)) {
                let t = e.length;
                0 === e.length && t++;
                const r = i.alloc(t);
                return e.copy(r), 0 === e.length && (r[0] = 0), this._createEncoderBuffer(r)
            }
            if (e < 128) return this._createEncoderBuffer(e);
            if (e < 256) return this._createEncoderBuffer([0, e]);
            let r = 1;
            for (let t = e; t >= 256; t >>= 8) r++;
            const n = new Array(r);
            for (let t = n.length - 1; t >= 0; t--) n[t] = 255 & e, e >>= 8;
            return 128 & n[0] && n.unshift(0), this._createEncoderBuffer(i.from(n))
        }, f.prototype._encodeBool = function (e) {
            return this._createEncoderBuffer(e ? 255 : 0)
        }, f.prototype._use = function (e, t) {
            return "function" == typeof e && (e = e(t)), e._getEncoder("der").tree
        }, f.prototype._skipDefault = function (e, t, r) {
            const n = this._baseState;
            let i;
            if (null === n.default) return !1;
            const o = e.join();
            if (void 0 === n.defaultBuffer && (n.defaultBuffer = this._encodeValue(n.default, t, r).join()), o.length !== n.defaultBuffer.length) return !1;
            for (i = 0; i < o.length; i++)
                if (o[i] !== n.defaultBuffer[i]) return !1;
            return !0
        }
    }, function (e, t, r) {
        "use strict";
        const n = t;
        n.der = r(92), n.pem = r(171)
    }, function (e, t, r) {
        "use strict";
        const n = r(1),
            i = r(4),
            o = r(28).DecoderBuffer,
            a = r(53),
            s = r(55);

        function f(e) {
            this.enc = "der", this.name = e.name, this.entity = e, this.tree = new c, this.tree._init(e.body)
        }

        function c(e) {
            a.call(this, "der", e)
        }

        function u(e, t) {
            let r = e.readUInt8(t);
            if (e.isError(r)) return r;
            const n = s.tagClass[r >> 6],
                i = 0 == (32 & r);
            if (31 == (31 & r)) {
                let n = r;
                for (r = 0; 128 == (128 & n);) {
                    if (n = e.readUInt8(t), e.isError(n)) return n;
                    r <<= 7, r |= 127 & n
                }
            } else r &= 31;
            return {
                cls: n,
                primitive: i,
                tag: r,
                tagStr: s.tag[r]
            }
        }

        function h(e, t, r) {
            let n = e.readUInt8(r);
            if (e.isError(n)) return n;
            if (!t && 128 === n) return null;
            if (0 == (128 & n)) return n;
            const i = 127 & n;
            if (i > 4) return e.error("length octect is too long");
            n = 0;
            for (let t = 0; t < i; t++) {
                n <<= 8;
                const t = e.readUInt8(r);
                if (e.isError(t)) return t;
                n |= t
            }
            return n
        }
        e.exports = f, f.prototype.decode = function (e, t) {
            return o.isDecoderBuffer(e) || (e = new o(e, t)), this.tree._decode(e, t)
        }, n(c, a), c.prototype._peekTag = function (e, t, r) {
            if (e.isEmpty()) return !1;
            const n = e.save(),
                i = u(e, 'Failed to peek tag: "' + t + '"');
            return e.isError(i) ? i : (e.restore(n), i.tag === t || i.tagStr === t || i.tagStr + "of" === t || r)
        }, c.prototype._decodeTag = function (e, t, r) {
            const n = u(e, 'Failed to decode tag of "' + t + '"');
            if (e.isError(n)) return n;
            let i = h(e, n.primitive, 'Failed to get length of "' + t + '"');
            if (e.isError(i)) return i;
            if (!r && n.tag !== t && n.tagStr !== t && n.tagStr + "of" !== t) return e.error('Failed to match tag: "' + t + '"');
            if (n.primitive || null !== i) return e.skip(i, 'Failed to match body of: "' + t + '"');
            const o = e.save(),
                a = this._skipUntilEnd(e, 'Failed to skip indefinite length body: "' + this.tag + '"');
            return e.isError(a) ? a : (i = e.offset - o.offset, e.restore(o), e.skip(i, 'Failed to match body of: "' + t + '"'))
        }, c.prototype._skipUntilEnd = function (e, t) {
            for (;;) {
                const r = u(e, t);
                if (e.isError(r)) return r;
                const n = h(e, r.primitive, t);
                if (e.isError(n)) return n;
                let i;
                if (i = r.primitive || null !== n ? e.skip(n) : this._skipUntilEnd(e, t), e.isError(i)) return i;
                if ("end" === r.tagStr) break
            }
        }, c.prototype._decodeList = function (e, t, r, n) {
            const i = [];
            for (; !e.isEmpty();) {
                const t = this._peekTag(e, "end");
                if (e.isError(t)) return t;
                const o = r.decode(e, "der", n);
                if (e.isError(o) && t) break;
                i.push(o)
            }
            return i
        }, c.prototype._decodeStr = function (e, t) {
            if ("bitstr" === t) {
                const t = e.readUInt8();
                return e.isError(t) ? t : {
                    unused: t,
                    data: e.raw()
                }
            }
            if ("bmpstr" === t) {
                const t = e.raw();
                if (t.length % 2 == 1) return e.error("Decoding of string type: bmpstr length mismatch");
                let r = "";
                for (let e = 0; e < t.length / 2; e++) r += String.fromCharCode(t.readUInt16BE(2 * e));
                return r
            }
            if ("numstr" === t) {
                const t = e.raw().toString("ascii");
                return this._isNumstr(t) ? t : e.error("Decoding of string type: numstr unsupported characters")
            }
            if ("octstr" === t) return e.raw();
            if ("objDesc" === t) return e.raw();
            if ("printstr" === t) {
                const t = e.raw().toString("ascii");
                return this._isPrintstr(t) ? t : e.error("Decoding of string type: printstr unsupported characters")
            }
            return /str$/.test(t) ? e.raw().toString() : e.error("Decoding of string type: " + t + " unsupported")
        }, c.prototype._decodeObjid = function (e, t, r) {
            let n;
            const i = [];
            let o = 0,
                a = 0;
            for (; !e.isEmpty();) o <<= 7, o |= 127 & (a = e.readUInt8()), 0 == (128 & a) && (i.push(o), o = 0);
            128 & a && i.push(o);
            const s = i[0] / 40 | 0,
                f = i[0] % 40;
            if (n = r ? i : [s, f].concat(i.slice(1)), t) {
                let e = t[n.join(" ")];
                void 0 === e && (e = t[n.join(".")]), void 0 !== e && (n = e)
            }
            return n
        }, c.prototype._decodeTime = function (e, t) {
            const r = e.raw().toString();
            let n, i, o, a, s, f;
            if ("gentime" === t) n = 0 | r.slice(0, 4), i = 0 | r.slice(4, 6), o = 0 | r.slice(6, 8), a = 0 | r.slice(8, 10), s = 0 | r.slice(10, 12), f = 0 | r.slice(12, 14);
            else {
                if ("utctime" !== t) return e.error("Decoding " + t + " time is not supported yet");
                n = 0 | r.slice(0, 2), i = 0 | r.slice(2, 4), o = 0 | r.slice(4, 6), a = 0 | r.slice(6, 8), s = 0 | r.slice(8, 10), f = 0 | r.slice(10, 12), n = n < 70 ? 2e3 + n : 1900 + n
            }
            return Date.UTC(n, i - 1, o, a, s, f, 0)
        }, c.prototype._decodeNull = function () {
            return null
        }, c.prototype._decodeBool = function (e) {
            const t = e.readUInt8();
            return e.isError(t) ? t : 0 !== t
        }, c.prototype._decodeInt = function (e, t) {
            const r = e.raw();
            let n = new i(r);
            return t && (n = t[n.toString(10)] || n), n
        }, c.prototype._use = function (e, t) {
            return "function" == typeof e && (e = e(t)), e._getDecoder("der").tree
        }
    }, function (e) {
        e.exports = JSON.parse('{"1.3.132.0.10":"secp256k1","1.3.132.0.33":"p224","1.2.840.10045.3.1.1":"p192","1.2.840.10045.3.1.7":"p256","1.3.132.0.34":"p384","1.3.132.0.35":"p521"}')
    }, function (e, t, r) {
        var n = r(19),
            i = r(0).Buffer;

        function o(e) {
            var t = i.allocUnsafe(4);
            return t.writeUInt32BE(e, 0), t
        }
        e.exports = function (e, t) {
            for (var r, a = i.alloc(0), s = 0; a.length < t;) r = o(s++), a = i.concat([a, n("sha1").update(e).update(r).digest()]);
            return a.slice(0, t)
        }
    }, function (e, t) {
        e.exports = function (e, t) {
            for (var r = e.length, n = -1; ++n < r;) e[n] ^= t[n];
            return e
        }
    }, function (e, t, r) {
        var n = r(4),
            i = r(0).Buffer;
        e.exports = function (e, t) {
            return i.from(e.toRed(n.mont(t.modulus)).redPow(new n(t.publicExponent)).fromRed().toArray())
        }
    }, function (e) {
        e.exports = JSON.parse('{"COMPRESSED_TYPE_INVALID":"compressed should be a boolean","EC_PRIVATE_KEY_TYPE_INVALID":"private key should be a Buffer","EC_PRIVATE_KEY_LENGTH_INVALID":"private key length is invalid","EC_PRIVATE_KEY_RANGE_INVALID":"private key range is invalid","EC_PRIVATE_KEY_TWEAK_ADD_FAIL":"tweak out of range or resulting private key is invalid","EC_PRIVATE_KEY_TWEAK_MUL_FAIL":"tweak out of range","EC_PRIVATE_KEY_EXPORT_DER_FAIL":"couldn\'t export to DER format","EC_PRIVATE_KEY_IMPORT_DER_FAIL":"couldn\'t import from DER format","EC_PUBLIC_KEYS_TYPE_INVALID":"public keys should be an Array","EC_PUBLIC_KEYS_LENGTH_INVALID":"public keys Array should have at least 1 element","EC_PUBLIC_KEY_TYPE_INVALID":"public key should be a Buffer","EC_PUBLIC_KEY_LENGTH_INVALID":"public key length is invalid","EC_PUBLIC_KEY_PARSE_FAIL":"the public key could not be parsed or is invalid","EC_PUBLIC_KEY_CREATE_FAIL":"private was invalid, try again","EC_PUBLIC_KEY_TWEAK_ADD_FAIL":"tweak out of range or resulting public key is invalid","EC_PUBLIC_KEY_TWEAK_MUL_FAIL":"tweak out of range","EC_PUBLIC_KEY_COMBINE_FAIL":"the sum of the public keys is not valid","ECDH_FAIL":"scalar was invalid (zero or overflow)","ECDSA_SIGNATURE_TYPE_INVALID":"signature should be a Buffer","ECDSA_SIGNATURE_LENGTH_INVALID":"signature length is invalid","ECDSA_SIGNATURE_PARSE_FAIL":"couldn\'t parse signature","ECDSA_SIGNATURE_PARSE_DER_FAIL":"couldn\'t parse DER signature","ECDSA_SIGNATURE_SERIALIZE_DER_FAIL":"couldn\'t serialize signature to DER format","ECDSA_SIGN_FAIL":"nonce generation function failed or private key is invalid","ECDSA_RECOVER_FAIL":"couldn\'t recover public key from signature","MSG32_TYPE_INVALID":"message should be a Buffer","MSG32_LENGTH_INVALID":"message length is invalid","OPTIONS_TYPE_INVALID":"options should be an Object","OPTIONS_DATA_TYPE_INVALID":"options.data should be a Buffer","OPTIONS_DATA_LENGTH_INVALID":"options.data length is invalid","OPTIONS_NONCEFN_TYPE_INVALID":"options.noncefn should be a Function","RECOVERY_ID_TYPE_INVALID":"recovery should be a Number","RECOVERY_ID_VALUE_INVALID":"recovery should have value between -1 and 4","TWEAK_TYPE_INVALID":"tweak should be a Buffer","TWEAK_LENGTH_INVALID":"tweak length is invalid"}')
    }, function (e, t, r) {
        (function (n, i) {
            var o;
            /**
             * [js-sha3]{@link https://github.com/emn178/js-sha3}
             *
             * @version 0.8.0
             * @author Chen, Yi-Cyuan [emn178@gmail.com]
             * @copyright Chen, Yi-Cyuan 2015-2018
             * @license MIT
             */
            /**
             * [js-sha3]{@link https://github.com/emn178/js-sha3}
             *
             * @version 0.8.0
             * @author Chen, Yi-Cyuan [emn178@gmail.com]
             * @copyright Chen, Yi-Cyuan 2015-2018
             * @license MIT
             */
            ! function () {
                "use strict";
                var a = "input is invalid type",
                    s = "object" == typeof window,
                    f = s ? window : {};
                f.JS_SHA3_NO_WINDOW && (s = !1);
                var c = !s && "object" == typeof self;
                !f.JS_SHA3_NO_NODE_JS && "object" == typeof n && n.versions && n.versions.node ? f = i : c && (f = self);
                var u = !f.JS_SHA3_NO_COMMON_JS && "object" == typeof e && e.exports,
                    h = r(192),
                    d = !f.JS_SHA3_NO_ARRAY_BUFFER && "undefined" != typeof ArrayBuffer,
                    l = "0123456789abcdef".split(""),
                    p = [4, 1024, 262144, 67108864],
                    b = [0, 8, 16, 24],
                    y = [1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648, 2147516545, 2147483648, 32896, 2147483648, 2147483649, 0, 2147516424, 2147483648],
                    v = [224, 256, 384, 512],
                    g = [128, 256],
                    m = ["hex", "buffer", "arrayBuffer", "array", "digest"],
                    _ = {
                        128: 168,
                        256: 136
                    };
                !f.JS_SHA3_NO_NODE_JS && Array.isArray || (Array.isArray = function (e) {
                    return "[object Array]" === Object.prototype.toString.call(e)
                }), !d || !f.JS_SHA3_NO_ARRAY_BUFFER_IS_VIEW && ArrayBuffer.isView || (ArrayBuffer.isView = function (e) {
                    return "object" == typeof e && e.buffer && e.buffer.constructor === ArrayBuffer
                });
                for (var w = function (e, t, r) {
                        return function (n) {
                            return new O(e, t, e).update(n)[r]()
                        }
                    }, E = function (e, t, r) {
                        return function (n, i) {
                            return new O(e, t, i).update(n)[r]()
                        }
                    }, S = function (e, t, r) {
                        return function (t, n, i, o) {
                            return x["cshake" + e].update(t, n, i, o)[r]()
                        }
                    }, A = function (e, t, r) {
                        return function (t, n, i, o) {
                            return x["kmac" + e].update(t, n, i, o)[r]()
                        }
                    }, I = function (e, t, r, n) {
                        for (var i = 0; i < m.length; ++i) {
                            var o = m[i];
                            e[o] = t(r, n, o)
                        }
                        return e
                    }, k = function (e, t) {
                        var r = w(e, t, "hex");
                        return r.create = function () {
                            return new O(e, t, e)
                        }, r.update = function (e) {
                            return r.create().update(e)
                        }, I(r, w, e, t)
                    }, M = [{
                        name: "keccak",
                        padding: [1, 256, 65536, 16777216],
                        bits: v,
                        createMethod: k
                    }, {
                        name: "sha3",
                        padding: [6, 1536, 393216, 100663296],
                        bits: v,
                        createMethod: k
                    }, {
                        name: "shake",
                        padding: [31, 7936, 2031616, 520093696],
                        bits: g,
                        createMethod: function (e, t) {
                            var r = E(e, t, "hex");
                            return r.create = function (r) {
                                return new O(e, t, r)
                            }, r.update = function (e, t) {
                                return r.create(t).update(e)
                            }, I(r, E, e, t)
                        }
                    }, {
                        name: "cshake",
                        padding: p,
                        bits: g,
                        createMethod: function (e, t) {
                            var r = _[e],
                                n = S(e, 0, "hex");
                            return n.create = function (n, i, o) {
                                return i || o ? new O(e, t, n).bytepad([i, o], r) : x["shake" + e].create(n)
                            }, n.update = function (e, t, r, i) {
                                return n.create(t, r, i).update(e)
                            }, I(n, S, e, t)
                        }
                    }, {
                        name: "kmac",
                        padding: p,
                        bits: g,
                        createMethod: function (e, t) {
                            var r = _[e],
                                n = A(e, 0, "hex");
                            return n.create = function (n, i, o) {
                                return new D(e, t, i).bytepad(["KMAC", o], r).bytepad([n], r)
                            }, n.update = function (e, t, r, i) {
                                return n.create(e, r, i).update(t)
                            }, I(n, A, e, t)
                        }
                    }], x = {}, B = [], T = 0; T < M.length; ++T)
                    for (var P = M[T], L = P.bits, R = 0; R < L.length; ++R) {
                        var C = P.name + "_" + L[R];
                        if (B.push(C), x[C] = P.createMethod(L[R], P.padding), "sha3" !== P.name) {
                            var N = P.name + L[R];
                            B.push(N), x[N] = x[C]
                        }
                    }

                function O(e, t, r) {
                    this.blocks = [], this.s = [], this.padding = t, this.outputBits = r, this.reset = !0, this.finalized = !1, this.block = 0, this.start = 0, this.blockCount = 1600 - (e << 1) >> 5, this.byteCount = this.blockCount << 2, this.outputBlocks = r >> 5, this.extraBytes = (31 & r) >> 3;
                    for (var n = 0; n < 50; ++n) this.s[n] = 0
                }

                function D(e, t, r) {
                    O.call(this, e, t, r)
                }
                O.prototype.update = function (e) {
                    if (this.finalized) throw new Error("finalize already called");
                    var t, r = typeof e;
                    if ("string" !== r) {
                        if ("object" !== r) throw new Error(a);
                        if (null === e) throw new Error(a);
                        if (d && e.constructor === ArrayBuffer) e = new Uint8Array(e);
                        else if (!(Array.isArray(e) || d && ArrayBuffer.isView(e))) throw new Error(a);
                        t = !0
                    }
                    for (var n, i, o = this.blocks, s = this.byteCount, f = e.length, c = this.blockCount, u = 0, h = this.s; u < f;) {
                        if (this.reset)
                            for (this.reset = !1, o[0] = this.block, n = 1; n < c + 1; ++n) o[n] = 0;
                        if (t)
                            for (n = this.start; u < f && n < s; ++u) o[n >> 2] |= e[u] << b[3 & n++];
                        else
                            for (n = this.start; u < f && n < s; ++u)(i = e.charCodeAt(u)) < 128 ? o[n >> 2] |= i << b[3 & n++] : i < 2048 ? (o[n >> 2] |= (192 | i >> 6) << b[3 & n++], o[n >> 2] |= (128 | 63 & i) << b[3 & n++]) : i < 55296 || i >= 57344 ? (o[n >> 2] |= (224 | i >> 12) << b[3 & n++], o[n >> 2] |= (128 | i >> 6 & 63) << b[3 & n++], o[n >> 2] |= (128 | 63 & i) << b[3 & n++]) : (i = 65536 + ((1023 & i) << 10 | 1023 & e.charCodeAt(++u)), o[n >> 2] |= (240 | i >> 18) << b[3 & n++], o[n >> 2] |= (128 | i >> 12 & 63) << b[3 & n++], o[n >> 2] |= (128 | i >> 6 & 63) << b[3 & n++], o[n >> 2] |= (128 | 63 & i) << b[3 & n++]);
                        if (this.lastByteIndex = n, n >= s) {
                            for (this.start = n - s, this.block = o[c], n = 0; n < c; ++n) h[n] ^= o[n];
                            j(h), this.reset = !0
                        } else this.start = n
                    }
                    return this
                }, O.prototype.encode = function (e, t) {
                    var r = 255 & e,
                        n = 1,
                        i = [r];
                    for (r = 255 & (e >>= 8); r > 0;) i.unshift(r), r = 255 & (e >>= 8), ++n;
                    return t ? i.push(n) : i.unshift(n), this.update(i), i.length
                }, O.prototype.encodeString = function (e) {
                    var t, r = typeof e;
                    if ("string" !== r) {
                        if ("object" !== r) throw new Error(a);
                        if (null === e) throw new Error(a);
                        if (d && e.constructor === ArrayBuffer) e = new Uint8Array(e);
                        else if (!(Array.isArray(e) || d && ArrayBuffer.isView(e))) throw new Error(a);
                        t = !0
                    }
                    var n = 0,
                        i = e.length;
                    if (t) n = i;
                    else
                        for (var o = 0; o < e.length; ++o) {
                            var s = e.charCodeAt(o);
                            s < 128 ? n += 1 : s < 2048 ? n += 2 : s < 55296 || s >= 57344 ? n += 3 : (s = 65536 + ((1023 & s) << 10 | 1023 & e.charCodeAt(++o)), n += 4)
                        }
                    return n += this.encode(8 * n), this.update(e), n
                }, O.prototype.bytepad = function (e, t) {
                    for (var r = this.encode(t), n = 0; n < e.length; ++n) r += this.encodeString(e[n]);
                    var i = t - r % t,
                        o = [];
                    return o.length = i, this.update(o), this
                }, O.prototype.finalize = function () {
                    if (!this.finalized) {
                        this.finalized = !0;
                        var e = this.blocks,
                            t = this.lastByteIndex,
                            r = this.blockCount,
                            n = this.s;
                        if (e[t >> 2] |= this.padding[3 & t], this.lastByteIndex === this.byteCount)
                            for (e[0] = e[r], t = 1; t < r + 1; ++t) e[t] = 0;
                        for (e[r - 1] |= 2147483648, t = 0; t < r; ++t) n[t] ^= e[t];
                        j(n)
                    }
                }, O.prototype.toString = O.prototype.hex = function () {
                    this.finalize();
                    for (var e, t = this.blockCount, r = this.s, n = this.outputBlocks, i = this.extraBytes, o = 0, a = 0, s = ""; a < n;) {
                        for (o = 0; o < t && a < n; ++o, ++a) e = r[o], s += l[e >> 4 & 15] + l[15 & e] + l[e >> 12 & 15] + l[e >> 8 & 15] + l[e >> 20 & 15] + l[e >> 16 & 15] + l[e >> 28 & 15] + l[e >> 24 & 15];
                        a % t == 0 && (j(r), o = 0)
                    }
                    return i && (e = r[o], s += l[e >> 4 & 15] + l[15 & e], i > 1 && (s += l[e >> 12 & 15] + l[e >> 8 & 15]), i > 2 && (s += l[e >> 20 & 15] + l[e >> 16 & 15])), s
                }, O.prototype.arrayBuffer = function () {
                    this.finalize();
                    var e, t = this.blockCount,
                        r = this.s,
                        n = this.outputBlocks,
                        i = this.extraBytes,
                        o = 0,
                        a = 0,
                        s = this.outputBits >> 3;
                    e = i ? new ArrayBuffer(n + 1 << 2) : new ArrayBuffer(s);
                    for (var f = new Uint32Array(e); a < n;) {
                        for (o = 0; o < t && a < n; ++o, ++a) f[a] = r[o];
                        a % t == 0 && j(r)
                    }
                    return i && (f[o] = r[o], e = e.slice(0, s)), e
                }, O.prototype.buffer = O.prototype.arrayBuffer, O.prototype.digest = O.prototype.array = function () {
                    this.finalize();
                    for (var e, t, r = this.blockCount, n = this.s, i = this.outputBlocks, o = this.extraBytes, a = 0, s = 0, f = []; s < i;) {
                        for (a = 0; a < r && s < i; ++a, ++s) e = s << 2, t = n[a], f[e] = 255 & t, f[e + 1] = t >> 8 & 255, f[e + 2] = t >> 16 & 255, f[e + 3] = t >> 24 & 255;
                        s % r == 0 && j(n)
                    }
                    return o && (e = s << 2, t = n[a], f[e] = 255 & t, o > 1 && (f[e + 1] = t >> 8 & 255), o > 2 && (f[e + 2] = t >> 16 & 255)), f
                }, D.prototype = new O, D.prototype.finalize = function () {
                    return this.encode(this.outputBits, !0), O.prototype.finalize.call(this)
                };
                var j = function (e) {
                    var t, r, n, i, o, a, s, f, c, u, h, d, l, p, b, v, g, m, _, w, E, S, A, I, k, M, x, B, T, P, L, R, C, N, O, D, j, U, K, q, z, H, V, Y, F, G, W, X, Z, J, $, Q, ee, te, re, ne, ie, oe, ae, se, fe, ce, ue;
                    for (n = 0; n < 48; n += 2) i = e[0] ^ e[10] ^ e[20] ^ e[30] ^ e[40], o = e[1] ^ e[11] ^ e[21] ^ e[31] ^ e[41], a = e[2] ^ e[12] ^ e[22] ^ e[32] ^ e[42], s = e[3] ^ e[13] ^ e[23] ^ e[33] ^ e[43], f = e[4] ^ e[14] ^ e[24] ^ e[34] ^ e[44], c = e[5] ^ e[15] ^ e[25] ^ e[35] ^ e[45], u = e[6] ^ e[16] ^ e[26] ^ e[36] ^ e[46], h = e[7] ^ e[17] ^ e[27] ^ e[37] ^ e[47], t = (d = e[8] ^ e[18] ^ e[28] ^ e[38] ^ e[48]) ^ (a << 1 | s >>> 31), r = (l = e[9] ^ e[19] ^ e[29] ^ e[39] ^ e[49]) ^ (s << 1 | a >>> 31), e[0] ^= t, e[1] ^= r, e[10] ^= t, e[11] ^= r, e[20] ^= t, e[21] ^= r, e[30] ^= t, e[31] ^= r, e[40] ^= t, e[41] ^= r, t = i ^ (f << 1 | c >>> 31), r = o ^ (c << 1 | f >>> 31), e[2] ^= t, e[3] ^= r, e[12] ^= t, e[13] ^= r, e[22] ^= t, e[23] ^= r, e[32] ^= t, e[33] ^= r, e[42] ^= t, e[43] ^= r, t = a ^ (u << 1 | h >>> 31), r = s ^ (h << 1 | u >>> 31), e[4] ^= t, e[5] ^= r, e[14] ^= t, e[15] ^= r, e[24] ^= t, e[25] ^= r, e[34] ^= t, e[35] ^= r, e[44] ^= t, e[45] ^= r, t = f ^ (d << 1 | l >>> 31), r = c ^ (l << 1 | d >>> 31), e[6] ^= t, e[7] ^= r, e[16] ^= t, e[17] ^= r, e[26] ^= t, e[27] ^= r, e[36] ^= t, e[37] ^= r, e[46] ^= t, e[47] ^= r, t = u ^ (i << 1 | o >>> 31), r = h ^ (o << 1 | i >>> 31), e[8] ^= t, e[9] ^= r, e[18] ^= t, e[19] ^= r, e[28] ^= t, e[29] ^= r, e[38] ^= t, e[39] ^= r, e[48] ^= t, e[49] ^= r, p = e[0], b = e[1], G = e[11] << 4 | e[10] >>> 28, W = e[10] << 4 | e[11] >>> 28, B = e[20] << 3 | e[21] >>> 29, T = e[21] << 3 | e[20] >>> 29, se = e[31] << 9 | e[30] >>> 23, fe = e[30] << 9 | e[31] >>> 23, H = e[40] << 18 | e[41] >>> 14, V = e[41] << 18 | e[40] >>> 14, N = e[2] << 1 | e[3] >>> 31, O = e[3] << 1 | e[2] >>> 31, v = e[13] << 12 | e[12] >>> 20, g = e[12] << 12 | e[13] >>> 20, X = e[22] << 10 | e[23] >>> 22, Z = e[23] << 10 | e[22] >>> 22, P = e[33] << 13 | e[32] >>> 19, L = e[32] << 13 | e[33] >>> 19, ce = e[42] << 2 | e[43] >>> 30, ue = e[43] << 2 | e[42] >>> 30, te = e[5] << 30 | e[4] >>> 2, re = e[4] << 30 | e[5] >>> 2, D = e[14] << 6 | e[15] >>> 26, j = e[15] << 6 | e[14] >>> 26, m = e[25] << 11 | e[24] >>> 21, _ = e[24] << 11 | e[25] >>> 21, J = e[34] << 15 | e[35] >>> 17, $ = e[35] << 15 | e[34] >>> 17, R = e[45] << 29 | e[44] >>> 3, C = e[44] << 29 | e[45] >>> 3, I = e[6] << 28 | e[7] >>> 4, k = e[7] << 28 | e[6] >>> 4, ne = e[17] << 23 | e[16] >>> 9, ie = e[16] << 23 | e[17] >>> 9, U = e[26] << 25 | e[27] >>> 7, K = e[27] << 25 | e[26] >>> 7, w = e[36] << 21 | e[37] >>> 11, E = e[37] << 21 | e[36] >>> 11, Q = e[47] << 24 | e[46] >>> 8, ee = e[46] << 24 | e[47] >>> 8, Y = e[8] << 27 | e[9] >>> 5, F = e[9] << 27 | e[8] >>> 5, M = e[18] << 20 | e[19] >>> 12, x = e[19] << 20 | e[18] >>> 12, oe = e[29] << 7 | e[28] >>> 25, ae = e[28] << 7 | e[29] >>> 25, q = e[38] << 8 | e[39] >>> 24, z = e[39] << 8 | e[38] >>> 24, S = e[48] << 14 | e[49] >>> 18, A = e[49] << 14 | e[48] >>> 18, e[0] = p ^ ~v & m, e[1] = b ^ ~g & _, e[10] = I ^ ~M & B, e[11] = k ^ ~x & T, e[20] = N ^ ~D & U, e[21] = O ^ ~j & K, e[30] = Y ^ ~G & X, e[31] = F ^ ~W & Z, e[40] = te ^ ~ne & oe, e[41] = re ^ ~ie & ae, e[2] = v ^ ~m & w, e[3] = g ^ ~_ & E, e[12] = M ^ ~B & P, e[13] = x ^ ~T & L, e[22] = D ^ ~U & q, e[23] = j ^ ~K & z, e[32] = G ^ ~X & J, e[33] = W ^ ~Z & $, e[42] = ne ^ ~oe & se, e[43] = ie ^ ~ae & fe, e[4] = m ^ ~w & S, e[5] = _ ^ ~E & A, e[14] = B ^ ~P & R, e[15] = T ^ ~L & C, e[24] = U ^ ~q & H, e[25] = K ^ ~z & V, e[34] = X ^ ~J & Q, e[35] = Z ^ ~$ & ee, e[44] = oe ^ ~se & ce, e[45] = ae ^ ~fe & ue, e[6] = w ^ ~S & p, e[7] = E ^ ~A & b, e[16] = P ^ ~R & I, e[17] = L ^ ~C & k, e[26] = q ^ ~H & N, e[27] = z ^ ~V & O, e[36] = J ^ ~Q & Y, e[37] = $ ^ ~ee & F, e[46] = se ^ ~ce & te, e[47] = fe ^ ~ue & re, e[8] = S ^ ~p & v, e[9] = A ^ ~b & g, e[18] = R ^ ~I & M, e[19] = C ^ ~k & x, e[28] = H ^ ~N & D, e[29] = V ^ ~O & j, e[38] = Q ^ ~Y & G, e[39] = ee ^ ~F & W, e[48] = ce ^ ~te & ne, e[49] = ue ^ ~re & ie, e[0] ^= y[n], e[1] ^= y[n + 1]
                };
                if (u) e.exports = x;
                else {
                    for (T = 0; T < B.length; ++T) f[B[T]] = x[B[T]];
                    h && (void 0 === (o = function () {
                        return x
                    }.call(t, r, t, e)) || (e.exports = o))
                }
            }()
        }).call(this, r(11), r(7))
    }, function (e, t, r) {
        "use strict";
        var n = r(2);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var i = n(r(3)),
            o = r(14),
            a = r(15),
            s = function (e, t, r) {
                var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : function (e) {
                        return e
                    },
                    i = {};
                t.map(function (e) {
                    var t = r[e];
                    return t && (i[e] = n(t)), !0
                }), Object.assign(e, i)
            };
        t.default = function e(t) {
            (0, i.default)(this, e), s(this, ["timestamp"], t, a.toNumber), s(this, ["value", "fee", "nid", "stepLimit", "nonce"], t, a.toBigNumber), s(this, ["from", "to"], t, o.addHxPrefix), s(this, ["signature", "dataType", "data"], t), this.version = t.version && (0, a.toBigNumber)(t.version).gte(3) ? (0, a.toBigNumber)(t.version) : (0, a.toBigNumber)(2), this.txHash = t.tx_hash ? (0, o.add0xPrefix)(t.tx_hash) : (0, o.add0xPrefix)(t.txHash)
        }, e.exports = t.default
    }, function (e, t, r) {
        "use strict";
        var n = r(2);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var i = n(r(101)).default;
        t.default = i, e.exports = t.default
    }, function (e, t, r) {
        "use strict";
        var n = r(102),
            i = r(2);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var o = i(r(3)),
            a = i(r(6)),
            s = i(r(103)),
            f = i(r(104)),
            c = i(r(197)),
            u = i(r(203)),
            h = n(r(37)),
            d = n(r(204)),
            l = r(16),
            p = n(r(8)),
            b = i(r(209)),
            y = n(r(15)),
            v = i(r(210)),
            g = n(r(14)),
            m = function () {
                function e(t) {
                    (0, o.default)(this, e), this.provider = t
                }
                return (0, a.default)(e, [{
                    key: "getTotalSupply",
                    value: function () {
                        var e = p.getCurrentTime(),
                            t = new s.default(e, "icx_getTotalSupply", null);
                        return this.provider.request(t, y.toBigNumber)
                    }
                }, {
                    key: "getBalance",
                    value: function (e) {
                        if (h.isAddress(e)) {
                            var t = p.getCurrentTime(),
                                r = {
                                    address: e
                                },
                                n = new s.default(t, "icx_getBalance", r);
                            return this.provider.request(n, y.toBigNumber)
                        }
                        throw new l.DataError("[".concat(e, "] is not valid address.")).toString()
                    }
                }, {
                    key: "getBlock",
                    value: function (e) {
                        if (h.isBlockHash(e)) return this.getBlockByHash(e);
                        if (h.isBlockNumber(e)) return this.getBlockByHeight(e);
                        if (h.isPredefinedBlockValue(e)) return this.getLastBlock();
                        throw new l.DataError("[".concat(e, "] is an unrecognized block reference.")).toString()
                    }
                }, {
                    key: "getBlockByHeight",
                    value: function (e) {
                        if (h.isBlockNumber(e)) {
                            var t = p.getCurrentTime(),
                                r = {
                                    height: y.toHex(e)
                                },
                                n = new s.default(t, "icx_getBlockByHeight", r);
                            return this.provider.request(n, d.toBlock)
                        }
                        throw new l.DataError("[".concat(e, "] is an unrecognized block height.")).toString()
                    }
                }, {
                    key: "getBlockByHash",
                    value: function (e) {
                        if (h.isBlockHash(e)) {
                            var t = p.getCurrentTime(),
                                r = {
                                    hash: e
                                },
                                n = new s.default(t, "icx_getBlockByHash", r);
                            return this.provider.request(n, d.toBlock)
                        }
                        throw new l.DataError("[".concat(e, "] is an unrecognized block hash.")).toString()
                    }
                }, {
                    key: "getLastBlock",
                    value: function () {
                        var e = p.getCurrentTime(),
                            t = new s.default(e, "icx_getLastBlock", null);
                        return this.provider.request(t, d.toBlock)
                    }
                }, {
                    key: "getScoreApi",
                    value: function (e) {
                        if (h.isScoreAddress(e)) {
                            var t = p.getCurrentTime(),
                                r = {
                                    address: e
                                },
                                n = new s.default(t, "icx_getScoreApi", r);
                            return this.provider.request(n, d.toScoreApiList)
                        }
                        throw new l.DataError("[".concat(e, "] is not a valid SCORE address.")).toString()
                    }
                }, {
                    key: "getTransaction",
                    value: function (e) {
                        if (h.isTransactionHash(e)) {
                            var t = p.getCurrentTime(),
                                r = {
                                    txHash: e
                                },
                                n = new s.default(t, "icx_getTransactionByHash", r);
                            return this.provider.request(n, d.toTransaction)
                        }
                        throw new l.DataError("[".concat(e, "] is an unrecognized hash value.")).toString()
                    }
                }, {
                    key: "getTransactionResult",
                    value: function (e) {
                        if (h.isTransactionHash(e)) {
                            var t = p.getCurrentTime(),
                                r = {
                                    txHash: e
                                },
                                n = new s.default(t, "icx_getTransactionResult", r);
                            return this.provider.request(n, d.toTransactionResult)
                        }
                        throw new l.DataError("[".concat(e, "] is an unrecognized hash value.")).toString()
                    }
                }, {
                    key: "sendTransaction",
                    value: function (e) {
                        if (h.isSignedTransaction(e)) {
                            var t = p.getCurrentTime(),
                                r = e.getProperties(),
                                n = new s.default(t, "icx_sendTransaction", r);
                            return this.provider.request(n)
                        }
                        throw new l.DataError("Transaction object is invalid.").toString()
                    }
                }, {
                    key: "call",
                    value: function (e) {
                        if (h.isCall(e)) {
                            var t = p.getCurrentTime(),
                                r = e,
                                n = new s.default(t, "icx_call", r);
                            return this.provider.request(n)
                        }
                        throw new l.DataError("Call object is invalid.").toString()
                    }
                }]), e
            }();
        t.default = m, m.IconAmount = b.default, m.IconBuilder = c.default, m.IconConverter = y, m.IconWallet = f.default, m.IconUtil = p, m.SignedTransaction = u.default, m.HttpProvider = v.default, m.IconHexadecimal = g, m.IconValidator = h, e.exports = t.default
    }, function (e, t, r) {
        var n = r(24).default;

        function i() {
            if ("function" != typeof WeakMap) return null;
            var e = new WeakMap;
            return i = function () {
                return e
            }, e
        }
        e.exports = function (e) {
            if (e && e.__esModule) return e;
            if (null === e || "object" !== n(e) && "function" != typeof e) return {
                default: e
            };
            var t = i();
            if (t && t.has(e)) return t.get(e);
            var r = {},
                o = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var a in e)
                if (Object.prototype.hasOwnProperty.call(e, a)) {
                    var s = o ? Object.getOwnPropertyDescriptor(e, a) : null;
                    s && (s.get || s.set) ? Object.defineProperty(r, a, s) : r[a] = e[a]
                } return r.default = e, t && t.set(e, r), r
        }, e.exports.default = e.exports, e.exports.__esModule = !0
    }, function (e, t, r) {
        "use strict";
        var n = r(2);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var i = n(r(3));
        t.default = function e(t, r, n) {
            (0, i.default)(this, e), this.jsonrpc = "2.0", this.id = t, this.method = r, this.params = n
        }, e.exports = t.default
    }, function (e, t, r) {
        "use strict";
        (function (n, i) {
            var o = r(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = o(r(3)),
                s = o(r(6)),
                f = r(38),
                c = o(r(56)),
                u = o(r(188)),
                h = o(r(189)),
                d = r(98),
                l = r(14),
                p = r(8),
                b = r(37),
                y = r(16),
                v = r(21);
            "undefined" == typeof window && (i = n.Buffer);
            var g = function () {
                function e(t, r) {
                    if ((0, a.default)(this, e), t && r) throw new y.WalletError("Both a private and a public key cannot be supplied to the constructor.").toString();
                    if (!t && !r) throw new y.WalletError("A private or a public key must be supplied to the constructor.").toString();
                    if (t && !(0, b.isPrivateKey)(t)) throw new y.WalletError("[".concat(t, "] is not a valid private key.")).toString();
                    if (r && !(0, b.isPublicKey)(r)) throw new y.WalletError("[".concat(r, "] is not a valid public key.")).toString();
                    this._privKey = t, this._pubKey = r
                }
                return (0, s.default)(e, [{
                    key: "store",
                    value: function (e, t) {
                        if (!this._privKey) throw new y.WalletError("This is a public key only wallet.").toString();
                        var r, n = (t = t || {}).salt || f.crypto.randomBytes(32),
                            o = t.iv || f.crypto.randomBytes(16),
                            a = t.kdf || "scrypt",
                            s = {
                                dklen: t.dklen || 32,
                                salt: n.toString("hex")
                            };
                        if ("scrypt" === a) s.n = t.n || 16384, s.r = t.r || 8, s.p = t.p || 1, r = (0, u.default)(i.from(e), n, s.n, s.r, s.p, s.dklen);
                        else {
                            if ("pbkdf2" !== a) throw new y.WalletError("It's an unsupported kdf.").toString();
                            s.c = t.c || 16384, s.prf = "hmac-sha256", r = f.crypto.pbkdf2Sync(i.from(e), n, s.c, s.dklen, "sha256")
                        }
                        var c = f.crypto.createCipheriv(t.cipher || "aes-128-ctr", r.slice(0, 16), o);
                        if (!c) throw new y.WalletError("It's an unsupported cipher.").toString();
                        var l = i.concat([c.update(this.privKey), c.final()]),
                            p = (0, d.keccak256)(i.concat([r.slice(16, 32), i.from(l, "hex")]));
                        return {
                            version: 3,
                            id: (0, h.default)({
                                random: t.uuid || f.crypto.randomBytes(16)
                            }),
                            address: this.getAddress(),
                            crypto: {
                                ciphertext: l.toString("hex"),
                                cipherparams: {
                                    iv: o.toString("hex")
                                },
                                cipher: t.cipher || "aes-128-ctr",
                                kdf: a,
                                kdfparams: s,
                                mac: p.toString("hex")
                            },
                            coinType: "icx"
                        }
                    }
                }, {
                    key: "sign",
                    value: function (e) {
                        var t = (0, p.sign)(e, this.privKey);
                        return i.from(t).toString("base64")
                    }
                }, {
                    key: "getPrivateKey",
                    value: function () {
                        return this.privKey.toString("hex")
                    }
                }, {
                    key: "getPublicKey",
                    value: function () {
                        return this.pubKey.toString("hex")
                    }
                }, {
                    key: "getAddress",
                    value: function () {
                        return this.address
                    }
                }], [{
                    key: "create",
                    value: function () {
                        var t;
                        do {
                            t = f.crypto.randomBytes(32)
                        } while (!c.default.privateKeyVerify(t));
                        return new e(t)
                    }
                }, {
                    key: "loadPrivateKey",
                    value: function (t) {
                        if (!(0, b.isPrivateKey)(t)) throw new y.WalletError("[".concat(t, "] is not a valid private key.")).toString();
                        return new e(i.from(t, "hex"))
                    }
                }, {
                    key: "loadKeystore",
                    value: function (t, r, n) {
                        if (!(0, v.isString)(r)) throw new y.WalletError("Password is invalid.").toString();
                        var o, a, s = (0, v.isObject)(t) ? t : JSON.parse(n ? t.toLowerCase() : t);
                        if (3 !== s.version) throw new y.WalletError("This is not a V3 wallet.").toString();
                        if ("scrypt" === s.crypto.kdf) a = s.crypto.kdfparams, o = (0, u.default)(i.from(r), i.from(a.salt, "hex"), a.n, a.r, a.p, a.dklen);
                        else {
                            if ("pbkdf2" !== s.crypto.kdf) throw new y.WalletError("It's an unsupported key derivation scheme.").toString();
                            if ("hmac-sha256" !== (a = s.crypto.kdfparams).prf) throw new y.WalletError("It's an unsupported parameters to PBKDF2.").toString();
                            o = f.crypto.pbkdf2Sync(i.from(r), i.from(a.salt, "hex"), a.c, a.dklen, "sha256")
                        }
                        var c = i.from(s.crypto.ciphertext, "hex");
                        if ((0, d.keccak256)(i.concat([o.slice(16, 32), c])).toString("hex") !== s.crypto.mac) throw new y.WalletError("Key derivation is failed (possibly wrong passphrase).").toString();
                        var h = f.crypto.createDecipheriv(s.crypto.cipher, o.slice(0, 16), i.from(s.crypto.cipherparams.iv, "hex"));
                        return new e(i.concat([h.update(c), h.final()]))
                    }
                }]), e
            }();
            t.default = g, Object.defineProperty(g.prototype, "privKey", {
                get: function () {
                    if (!this._privKey) throw new y.WalletError("This is a public key only wallet.").toString();
                    return this._privKey
                }
            }), Object.defineProperty(g.prototype, "pubKey", {
                get: function () {
                    return this._pubKey ? this._pubKey : c.default.publicKeyCreate(this.privKey, !1).slice(1)
                }
            }), Object.defineProperty(g.prototype, "address", {
                get: function () {
                    return (0, l.addHxPrefix)((0, d.sha3_256)(this.pubKey).slice(-40))
                }
            }), e.exports = t.default
        }).call(this, r(7), r(5).Buffer)
    }, function (e, t, r) {
        "use strict";
        t.byteLength = function (e) {
            var t = c(e),
                r = t[0],
                n = t[1];
            return 3 * (r + n) / 4 - n
        }, t.toByteArray = function (e) {
            var t, r, n = c(e),
                a = n[0],
                s = n[1],
                f = new o(function (e, t, r) {
                    return 3 * (t + r) / 4 - r
                }(0, a, s)),
                u = 0,
                h = s > 0 ? a - 4 : a;
            for (r = 0; r < h; r += 4) t = i[e.charCodeAt(r)] << 18 | i[e.charCodeAt(r + 1)] << 12 | i[e.charCodeAt(r + 2)] << 6 | i[e.charCodeAt(r + 3)], f[u++] = t >> 16 & 255, f[u++] = t >> 8 & 255, f[u++] = 255 & t;
            2 === s && (t = i[e.charCodeAt(r)] << 2 | i[e.charCodeAt(r + 1)] >> 4, f[u++] = 255 & t);
            1 === s && (t = i[e.charCodeAt(r)] << 10 | i[e.charCodeAt(r + 1)] << 4 | i[e.charCodeAt(r + 2)] >> 2, f[u++] = t >> 8 & 255, f[u++] = 255 & t);
            return f
        }, t.fromByteArray = function (e) {
            for (var t, r = e.length, i = r % 3, o = [], a = 0, s = r - i; a < s; a += 16383) o.push(u(e, a, a + 16383 > s ? s : a + 16383));
            1 === i ? (t = e[r - 1], o.push(n[t >> 2] + n[t << 4 & 63] + "==")) : 2 === i && (t = (e[r - 2] << 8) + e[r - 1], o.push(n[t >> 10] + n[t >> 4 & 63] + n[t << 2 & 63] + "="));
            return o.join("")
        };
        for (var n = [], i = [], o = "undefined" != typeof Uint8Array ? Uint8Array : Array, a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", s = 0, f = a.length; s < f; ++s) n[s] = a[s], i[a.charCodeAt(s)] = s;

        function c(e) {
            var t = e.length;
            if (t % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
            var r = e.indexOf("=");
            return -1 === r && (r = t), [r, r === t ? 0 : 4 - r % 4]
        }

        function u(e, t, r) {
            for (var i, o, a = [], s = t; s < r; s += 3) i = (e[s] << 16 & 16711680) + (e[s + 1] << 8 & 65280) + (255 & e[s + 2]), a.push(n[(o = i) >> 18 & 63] + n[o >> 12 & 63] + n[o >> 6 & 63] + n[63 & o]);
            return a.join("")
        }
        i["-".charCodeAt(0)] = 62, i["_".charCodeAt(0)] = 63
    }, function (e, t) {
        /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
        t.read = function (e, t, r, n, i) {
            var o, a, s = 8 * i - n - 1,
                f = (1 << s) - 1,
                c = f >> 1,
                u = -7,
                h = r ? i - 1 : 0,
                d = r ? -1 : 1,
                l = e[t + h];
            for (h += d, o = l & (1 << -u) - 1, l >>= -u, u += s; u > 0; o = 256 * o + e[t + h], h += d, u -= 8);
            for (a = o & (1 << -u) - 1, o >>= -u, u += n; u > 0; a = 256 * a + e[t + h], h += d, u -= 8);
            if (0 === o) o = 1 - c;
            else {
                if (o === f) return a ? NaN : 1 / 0 * (l ? -1 : 1);
                a += Math.pow(2, n), o -= c
            }
            return (l ? -1 : 1) * a * Math.pow(2, o - n)
        }, t.write = function (e, t, r, n, i, o) {
            var a, s, f, c = 8 * o - i - 1,
                u = (1 << c) - 1,
                h = u >> 1,
                d = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                l = n ? 0 : o - 1,
                p = n ? 1 : -1,
                b = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
            for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (s = isNaN(t) ? 1 : 0, a = u) : (a = Math.floor(Math.log(t) / Math.LN2), t * (f = Math.pow(2, -a)) < 1 && (a--, f *= 2), (t += a + h >= 1 ? d / f : d * Math.pow(2, 1 - h)) * f >= 2 && (a++, f /= 2), a + h >= u ? (s = 0, a = u) : a + h >= 1 ? (s = (t * f - 1) * Math.pow(2, i), a += h) : (s = t * Math.pow(2, h - 1) * Math.pow(2, i), a = 0)); i >= 8; e[r + l] = 255 & s, l += p, s /= 256, i -= 8);
            for (a = a << i | s, c += i; c > 0; e[r + l] = 255 & a, l += p, a /= 256, c -= 8);
            e[r + l - p] |= 128 * b
        }
    }, function (e, t, r) {
        "use strict";
        (function (n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = r(108);
            "undefined" != typeof navigator && "ReactNative" == navigator.product && (i.getRandomValues = function (e) {
                for (var t = 0; t < 20; t++)
                    for (var r = 0; r < e.length; r++) t ? e[r] ^= Math.trunc(256 * Math.random()) : e[r] = Math.trunc(256 * Math.random());
                return e
            }, i.randomBytes = function (e) {
                if (e <= 0 || e > 1024 || parseInt(String(e), 10) !== e) throw new Error("invalid length");
                var t = n.from(new Uint8Array(e));
                return i.getRandomValues(t)
            });
            var o = i;
            t.default = o, e.exports = t.default
        }).call(this, r(5).Buffer)
    }, function (e, t, r) {
        "use strict";
        t.randomBytes = t.rng = t.pseudoRandomBytes = t.prng = r(18), t.createHash = t.Hash = r(19), t.createHmac = t.Hmac = r(67);
        var n = r(125),
            i = Object.keys(n),
            o = ["sha1", "sha224", "sha256", "sha384", "sha512", "md5", "rmd160"].concat(i);
        t.getHashes = function () {
            return o
        };
        var a = r(70);
        t.pbkdf2 = a.pbkdf2, t.pbkdf2Sync = a.pbkdf2Sync;
        var s = r(127);
        t.Cipher = s.Cipher, t.createCipher = s.createCipher, t.Cipheriv = s.Cipheriv, t.createCipheriv = s.createCipheriv, t.Decipher = s.Decipher, t.createDecipher = s.createDecipher, t.Decipheriv = s.Decipheriv, t.createDecipheriv = s.createDecipheriv, t.getCiphers = s.getCiphers, t.listCiphers = s.listCiphers;
        var f = r(142);
        t.DiffieHellmanGroup = f.DiffieHellmanGroup, t.createDiffieHellmanGroup = f.createDiffieHellmanGroup, t.getDiffieHellman = f.getDiffieHellman, t.createDiffieHellman = f.createDiffieHellman, t.DiffieHellman = f.DiffieHellman;
        var c = r(148);
        t.createSign = c.createSign, t.Sign = c.Sign, t.createVerify = c.createVerify, t.Verify = c.Verify, t.createECDH = r(178);
        var u = r(179);
        t.publicEncrypt = u.publicEncrypt, t.privateEncrypt = u.privateEncrypt, t.publicDecrypt = u.publicDecrypt, t.privateDecrypt = u.privateDecrypt;
        var h = r(182);
        t.randomFill = h.randomFill, t.randomFillSync = h.randomFillSync, t.createCredentials = function () {
            throw new Error(["sorry, createCredentials is not implemented yet", "we accept pull requests", "https://github.com/crypto-browserify/crypto-browserify"].join("\n"))
        }, t.constants = {
            DH_CHECK_P_NOT_SAFE_PRIME: 2,
            DH_CHECK_P_NOT_PRIME: 1,
            DH_UNABLE_TO_CHECK_GENERATOR: 4,
            DH_NOT_SUITABLE_GENERATOR: 8,
            NPN_ENABLED: 1,
            ALPN_ENABLED: 1,
            RSA_PKCS1_PADDING: 1,
            RSA_SSLV23_PADDING: 2,
            RSA_NO_PADDING: 3,
            RSA_PKCS1_OAEP_PADDING: 4,
            RSA_X931_PADDING: 5,
            RSA_PKCS1_PSS_PADDING: 6,
            POINT_CONVERSION_COMPRESSED: 2,
            POINT_CONVERSION_UNCOMPRESSED: 4,
            POINT_CONVERSION_HYBRID: 6
        }
    }, function (e, t) {}, function (e, t, r) {
        "use strict";
        var n = r(0).Buffer,
            i = r(111);
        e.exports = function () {
            function e() {
                ! function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.head = null, this.tail = null, this.length = 0
            }
            return e.prototype.push = function (e) {
                var t = {
                    data: e,
                    next: null
                };
                this.length > 0 ? this.tail.next = t : this.head = t, this.tail = t, ++this.length
            }, e.prototype.unshift = function (e) {
                var t = {
                    data: e,
                    next: this.head
                };
                0 === this.length && (this.tail = t), this.head = t, ++this.length
            }, e.prototype.shift = function () {
                if (0 !== this.length) {
                    var e = this.head.data;
                    return 1 === this.length ? this.head = this.tail = null : this.head = this.head.next, --this.length, e
                }
            }, e.prototype.clear = function () {
                this.head = this.tail = null, this.length = 0
            }, e.prototype.join = function (e) {
                if (0 === this.length) return "";
                for (var t = this.head, r = "" + t.data; t = t.next;) r += e + t.data;
                return r
            }, e.prototype.concat = function (e) {
                if (0 === this.length) return n.alloc(0);
                if (1 === this.length) return this.head.data;
                for (var t, r, i, o = n.allocUnsafe(e >>> 0), a = this.head, s = 0; a;) t = a.data, r = o, i = s, t.copy(r, i), s += a.data.length, a = a.next;
                return o
            }, e
        }(), i && i.inspect && i.inspect.custom && (e.exports.prototype[i.inspect.custom] = function () {
            var e = i.inspect({
                length: this.length
            });
            return this.constructor.name + " " + e
        })
    }, function (e, t) {}, function (e, t, r) {
        (function (e) {
            var n = void 0 !== e && e || "undefined" != typeof self && self || window,
                i = Function.prototype.apply;

            function o(e, t) {
                this._id = e, this._clearFn = t
            }
            t.setTimeout = function () {
                return new o(i.call(setTimeout, n, arguments), clearTimeout)
            }, t.setInterval = function () {
                return new o(i.call(setInterval, n, arguments), clearInterval)
            }, t.clearTimeout = t.clearInterval = function (e) {
                e && e.close()
            }, o.prototype.unref = o.prototype.ref = function () {}, o.prototype.close = function () {
                this._clearFn.call(n, this._id)
            }, t.enroll = function (e, t) {
                clearTimeout(e._idleTimeoutId), e._idleTimeout = t
            }, t.unenroll = function (e) {
                clearTimeout(e._idleTimeoutId), e._idleTimeout = -1
            }, t._unrefActive = t.active = function (e) {
                clearTimeout(e._idleTimeoutId);
                var t = e._idleTimeout;
                t >= 0 && (e._idleTimeoutId = setTimeout(function () {
                    e._onTimeout && e._onTimeout()
                }, t))
            }, r(113), t.setImmediate = "undefined" != typeof self && self.setImmediate || void 0 !== e && e.setImmediate || this && this.setImmediate, t.clearImmediate = "undefined" != typeof self && self.clearImmediate || void 0 !== e && e.clearImmediate || this && this.clearImmediate
        }).call(this, r(7))
    }, function (e, t, r) {
        (function (e, t) {
            ! function (e, r) {
                "use strict";
                if (!e.setImmediate) {
                    var n, i, o, a, s, f = 1,
                        c = {},
                        u = !1,
                        h = e.document,
                        d = Object.getPrototypeOf && Object.getPrototypeOf(e);
                    d = d && d.setTimeout ? d : e, "[object process]" === {}.toString.call(e.process) ? n = function (e) {
                        t.nextTick(function () {
                            p(e)
                        })
                    } : ! function () {
                        if (e.postMessage && !e.importScripts) {
                            var t = !0,
                                r = e.onmessage;
                            return e.onmessage = function () {
                                t = !1
                            }, e.postMessage("", "*"), e.onmessage = r, t
                        }
                    }() ? e.MessageChannel ? ((o = new MessageChannel).port1.onmessage = function (e) {
                        p(e.data)
                    }, n = function (e) {
                        o.port2.postMessage(e)
                    }) : h && "onreadystatechange" in h.createElement("script") ? (i = h.documentElement, n = function (e) {
                        var t = h.createElement("script");
                        t.onreadystatechange = function () {
                            p(e), t.onreadystatechange = null, i.removeChild(t), t = null
                        }, i.appendChild(t)
                    }) : n = function (e) {
                        setTimeout(p, 0, e)
                    } : (a = "setImmediate$" + Math.random() + "$", s = function (t) {
                        t.source === e && "string" == typeof t.data && 0 === t.data.indexOf(a) && p(+t.data.slice(a.length))
                    }, e.addEventListener ? e.addEventListener("message", s, !1) : e.attachEvent("onmessage", s), n = function (t) {
                        e.postMessage(a + t, "*")
                    }), d.setImmediate = function (e) {
                        "function" != typeof e && (e = new Function("" + e));
                        for (var t = new Array(arguments.length - 1), r = 0; r < t.length; r++) t[r] = arguments[r + 1];
                        var i = {
                            callback: e,
                            args: t
                        };
                        return c[f] = i, n(f), f++
                    }, d.clearImmediate = l
                }

                function l(e) {
                    delete c[e]
                }

                function p(e) {
                    if (u) setTimeout(p, 0, e);
                    else {
                        var t = c[e];
                        if (t) {
                            u = !0;
                            try {
                                ! function (e) {
                                    var t = e.callback,
                                        n = e.args;
                                    switch (n.length) {
                                        case 0:
                                            t();
                                            break;
                                        case 1:
                                            t(n[0]);
                                            break;
                                        case 2:
                                            t(n[0], n[1]);
                                            break;
                                        case 3:
                                            t(n[0], n[1], n[2]);
                                            break;
                                        default:
                                            t.apply(r, n)
                                    }
                                }(t)
                            } finally {
                                l(e), u = !1
                            }
                        }
                    }
                }
            }("undefined" == typeof self ? void 0 === e ? this : e : self)
        }).call(this, r(7), r(11))
    }, function (e, t, r) {
        (function (t) {
            function r(e) {
                try {
                    if (!t.localStorage) return !1
                } catch (e) {
                    return !1
                }
                var r = t.localStorage[e];
                return null != r && "true" === String(r).toLowerCase()
            }
            e.exports = function (e, t) {
                if (r("noDeprecation")) return e;
                var n = !1;
                return function () {
                    if (!n) {
                        if (r("throwDeprecation")) throw new Error(t);
                        r("traceDeprecation") ? console.trace(t) : console.warn(t), n = !0
                    }
                    return e.apply(this, arguments)
                }
            }
        }).call(this, r(7))
    }, function (e, t, r) {
        "use strict";
        e.exports = o;
        var n = r(64),
            i = Object.create(r(25));

        function o(e) {
            if (!(this instanceof o)) return new o(e);
            n.call(this, e)
        }
        i.inherits = r(1), i.inherits(o, n), o.prototype._transform = function (e, t, r) {
            r(null, e)
        }
    }, function (e, t, r) {
        e.exports = r(41)
    }, function (e, t, r) {
        e.exports = r(17)
    }, function (e, t, r) {
        e.exports = r(30).Transform
    }, function (e, t, r) {
        e.exports = r(30).PassThrough
    }, function (e, t, r) {
        var n = r(1),
            i = r(20),
            o = r(0).Buffer,
            a = [1518500249, 1859775393, -1894007588, -899497514],
            s = new Array(80);

        function f() {
            this.init(), this._w = s, i.call(this, 64, 56)
        }

        function c(e) {
            return e << 30 | e >>> 2
        }

        function u(e, t, r, n) {
            return 0 === e ? t & r | ~t & n : 2 === e ? t & r | t & n | r & n : t ^ r ^ n
        }
        n(f, i), f.prototype.init = function () {
            return this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878, this._e = 3285377520, this
        }, f.prototype._update = function (e) {
            for (var t, r = this._w, n = 0 | this._a, i = 0 | this._b, o = 0 | this._c, s = 0 | this._d, f = 0 | this._e, h = 0; h < 16; ++h) r[h] = e.readInt32BE(4 * h);
            for (; h < 80; ++h) r[h] = r[h - 3] ^ r[h - 8] ^ r[h - 14] ^ r[h - 16];
            for (var d = 0; d < 80; ++d) {
                var l = ~~(d / 20),
                    p = 0 | ((t = n) << 5 | t >>> 27) + u(l, i, o, s) + f + r[d] + a[l];
                f = s, s = o, o = c(i), i = n, n = p
            }
            this._a = n + this._a | 0, this._b = i + this._b | 0, this._c = o + this._c | 0, this._d = s + this._d | 0, this._e = f + this._e | 0
        }, f.prototype._hash = function () {
            var e = o.allocUnsafe(20);
            return e.writeInt32BE(0 | this._a, 0), e.writeInt32BE(0 | this._b, 4), e.writeInt32BE(0 | this._c, 8), e.writeInt32BE(0 | this._d, 12), e.writeInt32BE(0 | this._e, 16), e
        }, e.exports = f
    }, function (e, t, r) {
        var n = r(1),
            i = r(20),
            o = r(0).Buffer,
            a = [1518500249, 1859775393, -1894007588, -899497514],
            s = new Array(80);

        function f() {
            this.init(), this._w = s, i.call(this, 64, 56)
        }

        function c(e) {
            return e << 5 | e >>> 27
        }

        function u(e) {
            return e << 30 | e >>> 2
        }

        function h(e, t, r, n) {
            return 0 === e ? t & r | ~t & n : 2 === e ? t & r | t & n | r & n : t ^ r ^ n
        }
        n(f, i), f.prototype.init = function () {
            return this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878, this._e = 3285377520, this
        }, f.prototype._update = function (e) {
            for (var t, r = this._w, n = 0 | this._a, i = 0 | this._b, o = 0 | this._c, s = 0 | this._d, f = 0 | this._e, d = 0; d < 16; ++d) r[d] = e.readInt32BE(4 * d);
            for (; d < 80; ++d) r[d] = (t = r[d - 3] ^ r[d - 8] ^ r[d - 14] ^ r[d - 16]) << 1 | t >>> 31;
            for (var l = 0; l < 80; ++l) {
                var p = ~~(l / 20),
                    b = c(n) + h(p, i, o, s) + f + r[l] + a[p] | 0;
                f = s, s = o, o = u(i), i = n, n = b
            }
            this._a = n + this._a | 0, this._b = i + this._b | 0, this._c = o + this._c | 0, this._d = s + this._d | 0, this._e = f + this._e | 0
        }, f.prototype._hash = function () {
            var e = o.allocUnsafe(20);
            return e.writeInt32BE(0 | this._a, 0), e.writeInt32BE(0 | this._b, 4), e.writeInt32BE(0 | this._c, 8), e.writeInt32BE(0 | this._d, 12), e.writeInt32BE(0 | this._e, 16), e
        }, e.exports = f
    }, function (e, t, r) {
        var n = r(1),
            i = r(65),
            o = r(20),
            a = r(0).Buffer,
            s = new Array(64);

        function f() {
            this.init(), this._w = s, o.call(this, 64, 56)
        }
        n(f, i), f.prototype.init = function () {
            return this._a = 3238371032, this._b = 914150663, this._c = 812702999, this._d = 4144912697, this._e = 4290775857, this._f = 1750603025, this._g = 1694076839, this._h = 3204075428, this
        }, f.prototype._hash = function () {
            var e = a.allocUnsafe(28);
            return e.writeInt32BE(this._a, 0), e.writeInt32BE(this._b, 4), e.writeInt32BE(this._c, 8), e.writeInt32BE(this._d, 12), e.writeInt32BE(this._e, 16), e.writeInt32BE(this._f, 20), e.writeInt32BE(this._g, 24), e
        }, e.exports = f
    }, function (e, t, r) {
        var n = r(1),
            i = r(66),
            o = r(20),
            a = r(0).Buffer,
            s = new Array(160);

        function f() {
            this.init(), this._w = s, o.call(this, 128, 112)
        }
        n(f, i), f.prototype.init = function () {
            return this._ah = 3418070365, this._bh = 1654270250, this._ch = 2438529370, this._dh = 355462360, this._eh = 1731405415, this._fh = 2394180231, this._gh = 3675008525, this._hh = 1203062813, this._al = 3238371032, this._bl = 914150663, this._cl = 812702999, this._dl = 4144912697, this._el = 4290775857, this._fl = 1750603025, this._gl = 1694076839, this._hl = 3204075428, this
        }, f.prototype._hash = function () {
            var e = a.allocUnsafe(48);

            function t(t, r, n) {
                e.writeInt32BE(t, n), e.writeInt32BE(r, n + 4)
            }
            return t(this._ah, this._al, 0), t(this._bh, this._bl, 8), t(this._ch, this._cl, 16), t(this._dh, this._dl, 24), t(this._eh, this._el, 32), t(this._fh, this._fl, 40), e
        }, e.exports = f
    }, function (e, t, r) {
        "use strict";
        var n = r(1),
            i = r(0).Buffer,
            o = r(13),
            a = i.alloc(128),
            s = 64;

        function f(e, t) {
            o.call(this, "digest"), "string" == typeof t && (t = i.from(t)), this._alg = e, this._key = t, t.length > s ? t = e(t) : t.length < s && (t = i.concat([t, a], s));
            for (var r = this._ipad = i.allocUnsafe(s), n = this._opad = i.allocUnsafe(s), f = 0; f < s; f++) r[f] = 54 ^ t[f], n[f] = 92 ^ t[f];
            this._hash = [r]
        }
        n(f, o), f.prototype._update = function (e) {
            this._hash.push(e)
        }, f.prototype._final = function () {
            var e = this._alg(i.concat(this._hash));
            return this._alg(i.concat([this._opad, e]))
        }, e.exports = f
    }, function (e, t, r) {
        e.exports = r(69)
    }, function (e, t, r) {
        (function (t, n) {
            var i, o = r(71),
                a = r(72),
                s = r(73),
                f = r(0).Buffer,
                c = t.crypto && t.crypto.subtle,
                u = {
                    sha: "SHA-1",
                    "sha-1": "SHA-1",
                    sha1: "SHA-1",
                    sha256: "SHA-256",
                    "sha-256": "SHA-256",
                    sha384: "SHA-384",
                    "sha-384": "SHA-384",
                    "sha-512": "SHA-512",
                    sha512: "SHA-512"
                },
                h = [];

            function d(e, t, r, n, i) {
                return c.importKey("raw", e, {
                    name: "PBKDF2"
                }, !1, ["deriveBits"]).then(function (e) {
                    return c.deriveBits({
                        name: "PBKDF2",
                        salt: t,
                        iterations: r,
                        hash: {
                            name: i
                        }
                    }, e, n << 3)
                }).then(function (e) {
                    return f.from(e)
                })
            }
            e.exports = function (e, r, l, p, b, y) {
                "function" == typeof b && (y = b, b = void 0);
                var v = u[(b = b || "sha1").toLowerCase()];
                if (!v || "function" != typeof t.Promise) return n.nextTick(function () {
                    var t;
                    try {
                        t = s(e, r, l, p, b)
                    } catch (e) {
                        return y(e)
                    }
                    y(null, t)
                });
                if (o(e, r, l, p), "function" != typeof y) throw new Error("No callback provided to pbkdf2");
                f.isBuffer(e) || (e = f.from(e, a)), f.isBuffer(r) || (r = f.from(r, a)),
                    function (e, t) {
                        e.then(function (e) {
                            n.nextTick(function () {
                                t(null, e)
                            })
                        }, function (e) {
                            n.nextTick(function () {
                                t(e)
                            })
                        })
                    }(function (e) {
                        if (t.process && !t.process.browser) return Promise.resolve(!1);
                        if (!c || !c.importKey || !c.deriveBits) return Promise.resolve(!1);
                        if (void 0 !== h[e]) return h[e];
                        var r = d(i = i || f.alloc(8), i, 10, 128, e).then(function () {
                            return !0
                        }).catch(function () {
                            return !1
                        });
                        return h[e] = r, r
                    }(v).then(function (t) {
                        return t ? d(e, r, l, p, v) : s(e, r, l, p, b)
                    }), y)
            }
        }).call(this, r(7), r(11))
    }, function (e, t, r) {
        var n = r(128),
            i = r(46),
            o = r(47),
            a = r(141),
            s = r(33);

        function f(e, t, r) {
            if (e = e.toLowerCase(), o[e]) return i.createCipheriv(e, t, r);
            if (a[e]) return new n({
                key: t,
                iv: r,
                mode: e
            });
            throw new TypeError("invalid suite type")
        }

        function c(e, t, r) {
            if (e = e.toLowerCase(), o[e]) return i.createDecipheriv(e, t, r);
            if (a[e]) return new n({
                key: t,
                iv: r,
                mode: e,
                decrypt: !0
            });
            throw new TypeError("invalid suite type")
        }
        t.createCipher = t.Cipher = function (e, t) {
            var r, n;
            if (e = e.toLowerCase(), o[e]) r = o[e].key, n = o[e].iv;
            else {
                if (!a[e]) throw new TypeError("invalid suite type");
                r = 8 * a[e].key, n = a[e].iv
            }
            var i = s(t, !1, r, n);
            return f(e, i.key, i.iv)
        }, t.createCipheriv = t.Cipheriv = f, t.createDecipher = t.Decipher = function (e, t) {
            var r, n;
            if (e = e.toLowerCase(), o[e]) r = o[e].key, n = o[e].iv;
            else {
                if (!a[e]) throw new TypeError("invalid suite type");
                r = 8 * a[e].key, n = a[e].iv
            }
            var i = s(t, !1, r, n);
            return c(e, i.key, i.iv)
        }, t.createDecipheriv = t.Decipheriv = c, t.listCiphers = t.getCiphers = function () {
            return Object.keys(a).concat(i.getCiphers())
        }
    }, function (e, t, r) {
        var n = r(13),
            i = r(129),
            o = r(1),
            a = r(0).Buffer,
            s = {
                "des-ede3-cbc": i.CBC.instantiate(i.EDE),
                "des-ede3": i.EDE,
                "des-ede-cbc": i.CBC.instantiate(i.EDE),
                "des-ede": i.EDE,
                "des-cbc": i.CBC.instantiate(i.DES),
                "des-ecb": i.DES
            };

        function f(e) {
            n.call(this);
            var t, r = e.mode.toLowerCase(),
                i = s[r];
            t = e.decrypt ? "decrypt" : "encrypt";
            var o = e.key;
            a.isBuffer(o) || (o = a.from(o)), "des-ede" !== r && "des-ede-cbc" !== r || (o = a.concat([o, o.slice(0, 8)]));
            var f = e.iv;
            a.isBuffer(f) || (f = a.from(f)), this._des = i.create({
                key: o,
                iv: f,
                type: t
            })
        }
        s.des = s["des-cbc"], s.des3 = s["des-ede3-cbc"], e.exports = f, o(f, n), f.prototype._update = function (e) {
            return a.from(this._des.update(e))
        }, f.prototype._final = function () {
            return a.from(this._des.final())
        }
    }, function (e, t, r) {
        "use strict";
        t.utils = r(74), t.Cipher = r(45), t.DES = r(75), t.CBC = r(130), t.EDE = r(131)
    }, function (e, t, r) {
        "use strict";
        var n = r(9),
            i = r(1),
            o = {};
        t.instantiate = function (e) {
            function t(t) {
                e.call(this, t), this._cbcInit()
            }
            i(t, e);
            for (var r = Object.keys(o), n = 0; n < r.length; n++) {
                var a = r[n];
                t.prototype[a] = o[a]
            }
            return t.create = function (e) {
                return new t(e)
            }, t
        }, o._cbcInit = function () {
            var e = new function (e) {
                n.equal(e.length, 8, "Invalid IV length"), this.iv = new Array(8);
                for (var t = 0; t < this.iv.length; t++) this.iv[t] = e[t]
            }(this.options.iv);
            this._cbcState = e
        }, o._update = function (e, t, r, n) {
            var i = this._cbcState,
                o = this.constructor.super_.prototype,
                a = i.iv;
            if ("encrypt" === this.type) {
                for (var s = 0; s < this.blockSize; s++) a[s] ^= e[t + s];
                o._update.call(this, a, 0, r, n);
                for (s = 0; s < this.blockSize; s++) a[s] = r[n + s]
            } else {
                o._update.call(this, e, t, r, n);
                for (s = 0; s < this.blockSize; s++) r[n + s] ^= a[s];
                for (s = 0; s < this.blockSize; s++) a[s] = e[t + s]
            }
        }
    }, function (e, t, r) {
        "use strict";
        var n = r(9),
            i = r(1),
            o = r(45),
            a = r(75);

        function s(e) {
            o.call(this, e);
            var t = new function (e, t) {
                n.equal(t.length, 24, "Invalid key length");
                var r = t.slice(0, 8),
                    i = t.slice(8, 16),
                    o = t.slice(16, 24);
                this.ciphers = "encrypt" === e ? [a.create({
                    type: "encrypt",
                    key: r
                }), a.create({
                    type: "decrypt",
                    key: i
                }), a.create({
                    type: "encrypt",
                    key: o
                })] : [a.create({
                    type: "decrypt",
                    key: o
                }), a.create({
                    type: "encrypt",
                    key: i
                }), a.create({
                    type: "decrypt",
                    key: r
                })]
            }(this.type, this.options.key);
            this._edeState = t
        }
        i(s, o), e.exports = s, s.create = function (e) {
            return new s(e)
        }, s.prototype._update = function (e, t, r, n) {
            var i = this._edeState;
            i.ciphers[0]._update(e, t, r, n), i.ciphers[1]._update(r, n, r, n), i.ciphers[2]._update(r, n, r, n)
        }, s.prototype._pad = a.prototype._pad, s.prototype._unpad = a.prototype._unpad
    }, function (e, t, r) {
        var n = r(47),
            i = r(79),
            o = r(0).Buffer,
            a = r(80),
            s = r(13),
            f = r(32),
            c = r(33);

        function u(e, t, r) {
            s.call(this), this._cache = new d, this._cipher = new f.AES(t), this._prev = o.from(r), this._mode = e, this._autopadding = !0
        }
        r(1)(u, s), u.prototype._update = function (e) {
            var t, r;
            this._cache.add(e);
            for (var n = []; t = this._cache.get();) r = this._mode.encrypt(this, t), n.push(r);
            return o.concat(n)
        };
        var h = o.alloc(16, 16);

        function d() {
            this.cache = o.allocUnsafe(0)
        }

        function l(e, t, r) {
            var s = n[e.toLowerCase()];
            if (!s) throw new TypeError("invalid suite type");
            if ("string" == typeof t && (t = o.from(t)), t.length !== s.key / 8) throw new TypeError("invalid key length " + t.length);
            if ("string" == typeof r && (r = o.from(r)), "GCM" !== s.mode && r.length !== s.iv) throw new TypeError("invalid iv length " + r.length);
            return "stream" === s.type ? new a(s.module, t, r) : "auth" === s.type ? new i(s.module, t, r) : new u(s.module, t, r)
        }
        u.prototype._final = function () {
            var e = this._cache.flush();
            if (this._autopadding) return e = this._mode.encrypt(this, e), this._cipher.scrub(), e;
            if (!e.equals(h)) throw this._cipher.scrub(), new Error("data not multiple of block length")
        }, u.prototype.setAutoPadding = function (e) {
            return this._autopadding = !!e, this
        }, d.prototype.add = function (e) {
            this.cache = o.concat([this.cache, e])
        }, d.prototype.get = function () {
            if (this.cache.length > 15) {
                var e = this.cache.slice(0, 16);
                return this.cache = this.cache.slice(16), e
            }
            return null
        }, d.prototype.flush = function () {
            for (var e = 16 - this.cache.length, t = o.allocUnsafe(e), r = -1; ++r < e;) t.writeUInt8(e, r);
            return o.concat([this.cache, t])
        }, t.createCipheriv = l, t.createCipher = function (e, t) {
            var r = n[e.toLowerCase()];
            if (!r) throw new TypeError("invalid suite type");
            var i = c(t, !1, r.key, r.iv);
            return l(e, i.key, i.iv)
        }
    }, function (e, t) {
        t.encrypt = function (e, t) {
            return e._cipher.encryptBlock(t)
        }, t.decrypt = function (e, t) {
            return e._cipher.decryptBlock(t)
        }
    }, function (e, t, r) {
        var n = r(26);
        t.encrypt = function (e, t) {
            var r = n(t, e._prev);
            return e._prev = e._cipher.encryptBlock(r), e._prev
        }, t.decrypt = function (e, t) {
            var r = e._prev;
            e._prev = t;
            var i = e._cipher.decryptBlock(t);
            return n(i, r)
        }
    }, function (e, t, r) {
        var n = r(0).Buffer,
            i = r(26);

        function o(e, t, r) {
            var o = t.length,
                a = i(t, e._cache);
            return e._cache = e._cache.slice(o), e._prev = n.concat([e._prev, r ? t : a]), a
        }
        t.encrypt = function (e, t, r) {
            for (var i, a = n.allocUnsafe(0); t.length;) {
                if (0 === e._cache.length && (e._cache = e._cipher.encryptBlock(e._prev), e._prev = n.allocUnsafe(0)), !(e._cache.length <= t.length)) {
                    a = n.concat([a, o(e, t, r)]);
                    break
                }
                i = e._cache.length, a = n.concat([a, o(e, t.slice(0, i), r)]), t = t.slice(i)
            }
            return a
        }
    }, function (e, t, r) {
        var n = r(0).Buffer;

        function i(e, t, r) {
            var i = e._cipher.encryptBlock(e._prev)[0] ^ t;
            return e._prev = n.concat([e._prev.slice(1), n.from([r ? t : i])]), i
        }
        t.encrypt = function (e, t, r) {
            for (var o = t.length, a = n.allocUnsafe(o), s = -1; ++s < o;) a[s] = i(e, t[s], r);
            return a
        }
    }, function (e, t, r) {
        var n = r(0).Buffer;

        function i(e, t, r) {
            for (var n, i, a, s = -1, f = 0; ++s < 8;) n = e._cipher.encryptBlock(e._prev), i = t & 1 << 7 - s ? 128 : 0, f += (128 & (a = n[0] ^ i)) >> s % 8, e._prev = o(e._prev, r ? i : a);
            return f
        }

        function o(e, t) {
            var r = e.length,
                i = -1,
                o = n.allocUnsafe(e.length);
            for (e = n.concat([e, n.from([t])]); ++i < r;) o[i] = e[i] << 1 | e[i + 1] >> 7;
            return o
        }
        t.encrypt = function (e, t, r) {
            for (var o = t.length, a = n.allocUnsafe(o), s = -1; ++s < o;) a[s] = i(e, t[s], r);
            return a
        }
    }, function (e, t, r) {
        (function (e) {
            var n = r(26);

            function i(e) {
                return e._prev = e._cipher.encryptBlock(e._prev), e._prev
            }
            t.encrypt = function (t, r) {
                for (; t._cache.length < r.length;) t._cache = e.concat([t._cache, i(t)]);
                var o = t._cache.slice(0, r.length);
                return t._cache = t._cache.slice(r.length), n(r, o)
            }
        }).call(this, r(5).Buffer)
    }, function (e, t, r) {
        var n = r(0).Buffer,
            i = n.alloc(16, 0);

        function o(e) {
            var t = n.allocUnsafe(16);
            return t.writeUInt32BE(e[0] >>> 0, 0), t.writeUInt32BE(e[1] >>> 0, 4), t.writeUInt32BE(e[2] >>> 0, 8), t.writeUInt32BE(e[3] >>> 0, 12), t
        }

        function a(e) {
            this.h = e, this.state = n.alloc(16, 0), this.cache = n.allocUnsafe(0)
        }
        a.prototype.ghash = function (e) {
            for (var t = -1; ++t < e.length;) this.state[t] ^= e[t];
            this._multiply()
        }, a.prototype._multiply = function () {
            for (var e, t, r, n = [(e = this.h).readUInt32BE(0), e.readUInt32BE(4), e.readUInt32BE(8), e.readUInt32BE(12)], i = [0, 0, 0, 0], a = -1; ++a < 128;) {
                for (0 != (this.state[~~(a / 8)] & 1 << 7 - a % 8) && (i[0] ^= n[0], i[1] ^= n[1], i[2] ^= n[2], i[3] ^= n[3]), r = 0 != (1 & n[3]), t = 3; t > 0; t--) n[t] = n[t] >>> 1 | (1 & n[t - 1]) << 31;
                n[0] = n[0] >>> 1, r && (n[0] = n[0] ^ 225 << 24)
            }
            this.state = o(i)
        }, a.prototype.update = function (e) {
            var t;
            for (this.cache = n.concat([this.cache, e]); this.cache.length >= 16;) t = this.cache.slice(0, 16), this.cache = this.cache.slice(16), this.ghash(t)
        }, a.prototype.final = function (e, t) {
            return this.cache.length && this.ghash(n.concat([this.cache, i], 16)), this.ghash(o([0, e, 0, t])), this.state
        }, e.exports = a
    }, function (e, t, r) {
        var n = r(79),
            i = r(0).Buffer,
            o = r(47),
            a = r(80),
            s = r(13),
            f = r(32),
            c = r(33);

        function u(e, t, r) {
            s.call(this), this._cache = new h, this._last = void 0, this._cipher = new f.AES(t), this._prev = i.from(r), this._mode = e, this._autopadding = !0
        }

        function h() {
            this.cache = i.allocUnsafe(0)
        }

        function d(e, t, r) {
            var s = o[e.toLowerCase()];
            if (!s) throw new TypeError("invalid suite type");
            if ("string" == typeof r && (r = i.from(r)), "GCM" !== s.mode && r.length !== s.iv) throw new TypeError("invalid iv length " + r.length);
            if ("string" == typeof t && (t = i.from(t)), t.length !== s.key / 8) throw new TypeError("invalid key length " + t.length);
            return "stream" === s.type ? new a(s.module, t, r, !0) : "auth" === s.type ? new n(s.module, t, r, !0) : new u(s.module, t, r)
        }
        r(1)(u, s), u.prototype._update = function (e) {
            var t, r;
            this._cache.add(e);
            for (var n = []; t = this._cache.get(this._autopadding);) r = this._mode.decrypt(this, t), n.push(r);
            return i.concat(n)
        }, u.prototype._final = function () {
            var e = this._cache.flush();
            if (this._autopadding) return function (e) {
                var t = e[15];
                if (t < 1 || t > 16) throw new Error("unable to decrypt data");
                var r = -1;
                for (; ++r < t;)
                    if (e[r + (16 - t)] !== t) throw new Error("unable to decrypt data");
                if (16 === t) return;
                return e.slice(0, 16 - t)
            }(this._mode.decrypt(this, e));
            if (e) throw new Error("data not multiple of block length")
        }, u.prototype.setAutoPadding = function (e) {
            return this._autopadding = !!e, this
        }, h.prototype.add = function (e) {
            this.cache = i.concat([this.cache, e])
        }, h.prototype.get = function (e) {
            var t;
            if (e) {
                if (this.cache.length > 16) return t = this.cache.slice(0, 16), this.cache = this.cache.slice(16), t
            } else if (this.cache.length >= 16) return t = this.cache.slice(0, 16), this.cache = this.cache.slice(16), t;
            return null
        }, h.prototype.flush = function () {
            if (this.cache.length) return this.cache
        }, t.createDecipher = function (e, t) {
            var r = o[e.toLowerCase()];
            if (!r) throw new TypeError("invalid suite type");
            var n = c(t, !1, r.key, r.iv);
            return d(e, n.key, n.iv)
        }, t.createDecipheriv = d
    }, function (e, t) {
        t["des-ecb"] = {
            key: 8,
            iv: 0
        }, t["des-cbc"] = t.des = {
            key: 8,
            iv: 8
        }, t["des-ede3-cbc"] = t.des3 = {
            key: 24,
            iv: 8
        }, t["des-ede3"] = {
            key: 24,
            iv: 0
        }, t["des-ede-cbc"] = {
            key: 16,
            iv: 8
        }, t["des-ede"] = {
            key: 16,
            iv: 0
        }
    }, function (e, t, r) {
        (function (e) {
            var n = r(81),
                i = r(146),
                o = r(147);
            var a = {
                binary: !0,
                hex: !0,
                base64: !0
            };
            t.DiffieHellmanGroup = t.createDiffieHellmanGroup = t.getDiffieHellman = function (t) {
                var r = new e(i[t].prime, "hex"),
                    n = new e(i[t].gen, "hex");
                return new o(r, n)
            }, t.createDiffieHellman = t.DiffieHellman = function t(r, i, s, f) {
                return e.isBuffer(i) || void 0 === a[i] ? t(r, "binary", i, s) : (i = i || "binary", f = f || "binary", s = s || new e([2]), e.isBuffer(s) || (s = new e(s, f)), "number" == typeof r ? new o(n(r, s), s, !0) : (e.isBuffer(r) || (r = new e(r, i)), new o(r, s, !0)))
            }
        }).call(this, r(5).Buffer)
    }, function (e, t) {
        e.exports = function (e) {
            return e.webpackPolyfill || (e.deprecate = function () {}, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
                enumerable: !0,
                get: function () {
                    return e.l
                }
            }), Object.defineProperty(e, "id", {
                enumerable: !0,
                get: function () {
                    return e.i
                }
            }), e.webpackPolyfill = 1), e
        }
    }, function (e, t) {}, function (e, t) {}, function (e) {
        e.exports = JSON.parse('{"modp1":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a63a3620ffffffffffffffff"},"modp2":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece65381ffffffffffffffff"},"modp5":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca237327ffffffffffffffff"},"modp14":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aacaa68ffffffffffffffff"},"modp15":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a93ad2caffffffffffffffff"},"modp16":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c934063199ffffffffffffffff"},"modp17":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c93402849236c3fab4d27c7026c1d4dcb2602646dec9751e763dba37bdf8ff9406ad9e530ee5db382f413001aeb06a53ed9027d831179727b0865a8918da3edbebcf9b14ed44ce6cbaced4bb1bdb7f1447e6cc254b332051512bd7af426fb8f401378cd2bf5983ca01c64b92ecf032ea15d1721d03f482d7ce6e74fef6d55e702f46980c82b5a84031900b1c9e59e7c97fbec7e8f323a97a7e36cc88be0f1d45b7ff585ac54bd407b22b4154aacc8f6d7ebf48e1d814cc5ed20f8037e0a79715eef29be32806a1d58bb7c5da76f550aa3d8a1fbff0eb19ccb1a313d55cda56c9ec2ef29632387fe8d76e3c0468043e8f663f4860ee12bf2d5b0b7474d6e694f91e6dcc4024ffffffffffffffff"},"modp18":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c93402849236c3fab4d27c7026c1d4dcb2602646dec9751e763dba37bdf8ff9406ad9e530ee5db382f413001aeb06a53ed9027d831179727b0865a8918da3edbebcf9b14ed44ce6cbaced4bb1bdb7f1447e6cc254b332051512bd7af426fb8f401378cd2bf5983ca01c64b92ecf032ea15d1721d03f482d7ce6e74fef6d55e702f46980c82b5a84031900b1c9e59e7c97fbec7e8f323a97a7e36cc88be0f1d45b7ff585ac54bd407b22b4154aacc8f6d7ebf48e1d814cc5ed20f8037e0a79715eef29be32806a1d58bb7c5da76f550aa3d8a1fbff0eb19ccb1a313d55cda56c9ec2ef29632387fe8d76e3c0468043e8f663f4860ee12bf2d5b0b7474d6e694f91e6dbe115974a3926f12fee5e438777cb6a932df8cd8bec4d073b931ba3bc832b68d9dd300741fa7bf8afc47ed2576f6936ba424663aab639c5ae4f5683423b4742bf1c978238f16cbe39d652de3fdb8befc848ad922222e04a4037c0713eb57a81a23f0c73473fc646cea306b4bcbc8862f8385ddfa9d4b7fa2c087e879683303ed5bdd3a062b3cf5b3a278a66d2a13f83f44f82ddf310ee074ab6a364597e899a0255dc164f31cc50846851df9ab48195ded7ea1b1d510bd7ee74d73faf36bc31ecfa268359046f4eb879f924009438b481c6cd7889a002ed5ee382bc9190da6fc026e479558e4475677e9aa9e3050e2765694dfc81f56e880b96e7160c980dd98edd3dfffffffffffffffff"}}')
    }, function (e, t, r) {
        (function (t) {
            var n = r(4),
                i = new(r(82)),
                o = new n(24),
                a = new n(11),
                s = new n(10),
                f = new n(3),
                c = new n(7),
                u = r(81),
                h = r(18);

            function d(e, r) {
                return r = r || "utf8", t.isBuffer(e) || (e = new t(e, r)), this._pub = new n(e), this
            }

            function l(e, r) {
                return r = r || "utf8", t.isBuffer(e) || (e = new t(e, r)), this._priv = new n(e), this
            }
            e.exports = b;
            var p = {};

            function b(e, t, r) {
                this.setGenerator(t), this.__prime = new n(e), this._prime = n.mont(this.__prime), this._primeLen = e.length, this._pub = void 0, this._priv = void 0, this._primeCode = void 0, r ? (this.setPublicKey = d, this.setPrivateKey = l) : this._primeCode = 8
            }

            function y(e, r) {
                var n = new t(e.toArray());
                return r ? n.toString(r) : n
            }
            Object.defineProperty(b.prototype, "verifyError", {
                enumerable: !0,
                get: function () {
                    return "number" != typeof this._primeCode && (this._primeCode = function (e, t) {
                        var r = t.toString("hex"),
                            n = [r, e.toString(16)].join("_");
                        if (n in p) return p[n];
                        var h, d = 0;
                        if (e.isEven() || !u.simpleSieve || !u.fermatTest(e) || !i.test(e)) return d += 1, d += "02" === r || "05" === r ? 8 : 4, p[n] = d, d;
                        switch (i.test(e.shrn(1)) || (d += 2), r) {
                            case "02":
                                e.mod(o).cmp(a) && (d += 8);
                                break;
                            case "05":
                                (h = e.mod(s)).cmp(f) && h.cmp(c) && (d += 8);
                                break;
                            default:
                                d += 4
                        }
                        return p[n] = d, d
                    }(this.__prime, this.__gen)), this._primeCode
                }
            }), b.prototype.generateKeys = function () {
                return this._priv || (this._priv = new n(h(this._primeLen))), this._pub = this._gen.toRed(this._prime).redPow(this._priv).fromRed(), this.getPublicKey()
            }, b.prototype.computeSecret = function (e) {
                var r = (e = (e = new n(e)).toRed(this._prime)).redPow(this._priv).fromRed(),
                    i = new t(r.toArray()),
                    o = this.getPrime();
                if (i.length < o.length) {
                    var a = new t(o.length - i.length);
                    a.fill(0), i = t.concat([a, i])
                }
                return i
            }, b.prototype.getPublicKey = function (e) {
                return y(this._pub, e)
            }, b.prototype.getPrivateKey = function (e) {
                return y(this._priv, e)
            }, b.prototype.getPrime = function (e) {
                return y(this.__prime, e)
            }, b.prototype.getGenerator = function (e) {
                return y(this._gen, e)
            }, b.prototype.setGenerator = function (e, r) {
                return r = r || "utf8", t.isBuffer(e) || (e = new t(e, r)), this.__gen = e, this._gen = new n(e), this
            }
        }).call(this, r(5).Buffer)
    }, function (e, t, r) {
        var n = r(0).Buffer,
            i = r(19),
            o = r(30),
            a = r(1),
            s = r(149),
            f = r(177),
            c = r(69);

        function u(e) {
            o.Writable.call(this);
            var t = c[e];
            if (!t) throw new Error("Unknown message digest");
            this._hashType = t.hash, this._hash = i(t.hash), this._tag = t.id, this._signType = t.sign
        }

        function h(e) {
            o.Writable.call(this);
            var t = c[e];
            if (!t) throw new Error("Unknown message digest");
            this._hash = i(t.hash), this._tag = t.id, this._signType = t.sign
        }

        function d(e) {
            return new u(e)
        }

        function l(e) {
            return new h(e)
        }
        Object.keys(c).forEach(function (e) {
            c[e].id = n.from(c[e].id, "hex"), c[e.toLowerCase()] = c[e]
        }), a(u, o.Writable), u.prototype._write = function (e, t, r) {
            this._hash.update(e), r()
        }, u.prototype.update = function (e, t) {
            return "string" == typeof e && (e = n.from(e, t)), this._hash.update(e), this
        }, u.prototype.sign = function (e, t) {
            this.end();
            var r = this._hash.digest(),
                n = s(r, e, this._hashType, this._signType, this._tag);
            return t ? n.toString(t) : n
        }, a(h, o.Writable), h.prototype._write = function (e, t, r) {
            this._hash.update(e), r()
        }, h.prototype.update = function (e, t) {
            return "string" == typeof e && (e = n.from(e, t)), this._hash.update(e), this
        }, h.prototype.verify = function (e, t, r) {
            "string" == typeof t && (t = n.from(t, r)), this.end();
            var i = this._hash.digest();
            return f(t, i, e, this._signType, this._tag)
        }, e.exports = {
            Sign: d,
            Verify: l,
            createSign: d,
            createVerify: l
        }
    }, function (e, t, r) {
        var n = r(0).Buffer,
            i = r(67),
            o = r(49),
            a = r(34).ec,
            s = r(4),
            f = r(36),
            c = r(93);

        function u(e, t, r, o) {
            if ((e = n.from(e.toArray())).length < t.byteLength()) {
                var a = n.alloc(t.byteLength() - e.length);
                e = n.concat([a, e])
            }
            var s = r.length,
                f = function (e, t) {
                    e = (e = h(e, t)).mod(t);
                    var r = n.from(e.toArray());
                    if (r.length < t.byteLength()) {
                        var i = n.alloc(t.byteLength() - r.length);
                        r = n.concat([i, r])
                    }
                    return r
                }(r, t),
                c = n.alloc(s);
            c.fill(1);
            var u = n.alloc(s);
            return u = i(o, u).update(c).update(n.from([0])).update(e).update(f).digest(), c = i(o, u).update(c).digest(), {
                k: u = i(o, u).update(c).update(n.from([1])).update(e).update(f).digest(),
                v: c = i(o, u).update(c).digest()
            }
        }

        function h(e, t) {
            var r = new s(e),
                n = (e.length << 3) - t.bitLength();
            return n > 0 && r.ishrn(n), r
        }

        function d(e, t, r) {
            var o, a;
            do {
                for (o = n.alloc(0); 8 * o.length < e.bitLength();) t.v = i(r, t.k).update(t.v).digest(), o = n.concat([o, t.v]);
                a = h(o, e), t.k = i(r, t.k).update(t.v).update(n.from([0])).digest(), t.v = i(r, t.k).update(t.v).digest()
            } while (-1 !== a.cmp(e));
            return a
        }

        function l(e, t, r, n) {
            return e.toRed(s.mont(r)).redPow(t).fromRed().mod(n)
        }
        e.exports = function (e, t, r, i, p) {
            var b = f(t);
            if (b.curve) {
                if ("ecdsa" !== i && "ecdsa/rsa" !== i) throw new Error("wrong private key type");
                return function (e, t) {
                    var r = c[t.curve.join(".")];
                    if (!r) throw new Error("unknown curve " + t.curve.join("."));
                    var i = new a(r).keyFromPrivate(t.privateKey).sign(e);
                    return n.from(i.toDER())
                }(e, b)
            }
            if ("dsa" === b.type) {
                if ("dsa" !== i) throw new Error("wrong private key type");
                return function (e, t, r) {
                    for (var i, o = t.params.priv_key, a = t.params.p, f = t.params.q, c = t.params.g, p = new s(0), b = h(e, f).mod(f), y = !1, v = u(o, f, e, r); !1 === y;) i = d(f, v, r), p = l(c, i, a, f), 0 === (y = i.invm(f).imul(b.add(o.mul(p))).mod(f)).cmpn(0) && (y = !1, p = new s(0));
                    return function (e, t) {
                        e = e.toArray(), t = t.toArray(), 128 & e[0] && (e = [0].concat(e)), 128 & t[0] && (t = [0].concat(t));
                        var r = [48, e.length + t.length + 4, 2, e.length];
                        return r = r.concat(e, [2, t.length], t), n.from(r)
                    }(p, y)
                }(e, b, r)
            }
            if ("rsa" !== i && "ecdsa/rsa" !== i) throw new Error("wrong private key type");
            e = n.concat([p, e]);
            for (var y = b.modulus.byteLength(), v = [0, 1]; e.length + v.length + 1 < y;) v.push(255);
            v.push(0);
            for (var g = -1; ++g < e.length;) v.push(e[g]);
            return o(v, b)
        }, e.exports.getKey = u, e.exports.makeKey = d
    }, function (e) {
        e.exports = JSON.parse('{"name":"elliptic","version":"6.5.4","description":"EC cryptography","main":"lib/elliptic.js","files":["lib"],"scripts":{"lint":"eslint lib test","lint:fix":"npm run lint -- --fix","unit":"istanbul test _mocha --reporter=spec test/index.js","test":"npm run lint && npm run unit","version":"grunt dist && git add dist/"},"repository":{"type":"git","url":"git@github.com:indutny/elliptic"},"keywords":["EC","Elliptic","curve","Cryptography"],"author":"Fedor Indutny <fedor@indutny.com>","license":"MIT","bugs":{"url":"https://github.com/indutny/elliptic/issues"},"homepage":"https://github.com/indutny/elliptic","devDependencies":{"brfs":"^2.0.2","coveralls":"^3.1.0","eslint":"^7.6.0","grunt":"^1.2.1","grunt-browserify":"^5.3.0","grunt-cli":"^1.3.2","grunt-contrib-connect":"^3.0.0","grunt-contrib-copy":"^1.0.0","grunt-contrib-uglify":"^5.0.0","grunt-mocha-istanbul":"^5.0.2","grunt-saucelabs":"^9.0.1","istanbul":"^0.4.5","mocha":"^8.0.1"},"dependencies":{"bn.js":"^4.11.9","brorand":"^1.1.0","hash.js":"^1.0.0","hmac-drbg":"^1.0.1","inherits":"^2.0.4","minimalistic-assert":"^1.0.1","minimalistic-crypto-utils":"^1.0.1"}}')
    }, function (e, t, r) {
        "use strict";
        var n = r(10),
            i = r(4),
            o = r(1),
            a = r(35),
            s = n.assert;

        function f(e) {
            a.call(this, "short", e), this.a = new i(e.a, 16).toRed(this.red), this.b = new i(e.b, 16).toRed(this.red), this.tinv = this.two.redInvm(), this.zeroA = 0 === this.a.fromRed().cmpn(0), this.threeA = 0 === this.a.fromRed().sub(this.p).cmpn(-3), this.endo = this._getEndomorphism(e), this._endoWnafT1 = new Array(4), this._endoWnafT2 = new Array(4)
        }

        function c(e, t, r, n) {
            a.BasePoint.call(this, e, "affine"), null === t && null === r ? (this.x = null, this.y = null, this.inf = !0) : (this.x = new i(t, 16), this.y = new i(r, 16), n && (this.x.forceRed(this.curve.red), this.y.forceRed(this.curve.red)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.inf = !1)
        }

        function u(e, t, r, n) {
            a.BasePoint.call(this, e, "jacobian"), null === t && null === r && null === n ? (this.x = this.curve.one, this.y = this.curve.one, this.z = new i(0)) : (this.x = new i(t, 16), this.y = new i(r, 16), this.z = new i(n, 16)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)), this.zOne = this.z === this.curve.one
        }
        o(f, a), e.exports = f, f.prototype._getEndomorphism = function (e) {
            if (this.zeroA && this.g && this.n && 1 === this.p.modn(3)) {
                var t, r;
                if (e.beta) t = new i(e.beta, 16).toRed(this.red);
                else {
                    var n = this._getEndoRoots(this.p);
                    t = (t = n[0].cmp(n[1]) < 0 ? n[0] : n[1]).toRed(this.red)
                }
                if (e.lambda) r = new i(e.lambda, 16);
                else {
                    var o = this._getEndoRoots(this.n);
                    0 === this.g.mul(o[0]).x.cmp(this.g.x.redMul(t)) ? r = o[0] : (r = o[1], s(0 === this.g.mul(r).x.cmp(this.g.x.redMul(t))))
                }
                return {
                    beta: t,
                    lambda: r,
                    basis: e.basis ? e.basis.map(function (e) {
                        return {
                            a: new i(e.a, 16),
                            b: new i(e.b, 16)
                        }
                    }) : this._getEndoBasis(r)
                }
            }
        }, f.prototype._getEndoRoots = function (e) {
            var t = e === this.p ? this.red : i.mont(e),
                r = new i(2).toRed(t).redInvm(),
                n = r.redNeg(),
                o = new i(3).toRed(t).redNeg().redSqrt().redMul(r);
            return [n.redAdd(o).fromRed(), n.redSub(o).fromRed()]
        }, f.prototype._getEndoBasis = function (e) {
            for (var t, r, n, o, a, s, f, c, u, h = this.n.ushrn(Math.floor(this.n.bitLength() / 2)), d = e, l = this.n.clone(), p = new i(1), b = new i(0), y = new i(0), v = new i(1), g = 0; 0 !== d.cmpn(0);) {
                var m = l.div(d);
                c = l.sub(m.mul(d)), u = y.sub(m.mul(p));
                var _ = v.sub(m.mul(b));
                if (!n && c.cmp(h) < 0) t = f.neg(), r = p, n = c.neg(), o = u;
                else if (n && 2 == ++g) break;
                f = c, l = d, d = c, y = p, p = u, v = b, b = _
            }
            a = c.neg(), s = u;
            var w = n.sqr().add(o.sqr());
            return a.sqr().add(s.sqr()).cmp(w) >= 0 && (a = t, s = r), n.negative && (n = n.neg(), o = o.neg()), a.negative && (a = a.neg(), s = s.neg()), [{
                a: n,
                b: o
            }, {
                a: a,
                b: s
            }]
        }, f.prototype._endoSplit = function (e) {
            var t = this.endo.basis,
                r = t[0],
                n = t[1],
                i = n.b.mul(e).divRound(this.n),
                o = r.b.neg().mul(e).divRound(this.n),
                a = i.mul(r.a),
                s = o.mul(n.a),
                f = i.mul(r.b),
                c = o.mul(n.b);
            return {
                k1: e.sub(a).sub(s),
                k2: f.add(c).neg()
            }
        }, f.prototype.pointFromX = function (e, t) {
            (e = new i(e, 16)).red || (e = e.toRed(this.red));
            var r = e.redSqr().redMul(e).redIAdd(e.redMul(this.a)).redIAdd(this.b),
                n = r.redSqrt();
            if (0 !== n.redSqr().redSub(r).cmp(this.zero)) throw new Error("invalid point");
            var o = n.fromRed().isOdd();
            return (t && !o || !t && o) && (n = n.redNeg()), this.point(e, n)
        }, f.prototype.validate = function (e) {
            if (e.inf) return !0;
            var t = e.x,
                r = e.y,
                n = this.a.redMul(t),
                i = t.redSqr().redMul(t).redIAdd(n).redIAdd(this.b);
            return 0 === r.redSqr().redISub(i).cmpn(0)
        }, f.prototype._endoWnafMulAdd = function (e, t, r) {
            for (var n = this._endoWnafT1, i = this._endoWnafT2, o = 0; o < e.length; o++) {
                var a = this._endoSplit(t[o]),
                    s = e[o],
                    f = s._getBeta();
                a.k1.negative && (a.k1.ineg(), s = s.neg(!0)), a.k2.negative && (a.k2.ineg(), f = f.neg(!0)), n[2 * o] = s, n[2 * o + 1] = f, i[2 * o] = a.k1, i[2 * o + 1] = a.k2
            }
            for (var c = this._wnafMulAdd(1, n, i, 2 * o, r), u = 0; u < 2 * o; u++) n[u] = null, i[u] = null;
            return c
        }, o(c, a.BasePoint), f.prototype.point = function (e, t, r) {
            return new c(this, e, t, r)
        }, f.prototype.pointFromJSON = function (e, t) {
            return c.fromJSON(this, e, t)
        }, c.prototype._getBeta = function () {
            if (this.curve.endo) {
                var e = this.precomputed;
                if (e && e.beta) return e.beta;
                var t = this.curve.point(this.x.redMul(this.curve.endo.beta), this.y);
                if (e) {
                    var r = this.curve,
                        n = function (e) {
                            return r.point(e.x.redMul(r.endo.beta), e.y)
                        };
                    e.beta = t, t.precomputed = {
                        beta: null,
                        naf: e.naf && {
                            wnd: e.naf.wnd,
                            points: e.naf.points.map(n)
                        },
                        doubles: e.doubles && {
                            step: e.doubles.step,
                            points: e.doubles.points.map(n)
                        }
                    }
                }
                return t
            }
        }, c.prototype.toJSON = function () {
            return this.precomputed ? [this.x, this.y, this.precomputed && {
                doubles: this.precomputed.doubles && {
                    step: this.precomputed.doubles.step,
                    points: this.precomputed.doubles.points.slice(1)
                },
                naf: this.precomputed.naf && {
                    wnd: this.precomputed.naf.wnd,
                    points: this.precomputed.naf.points.slice(1)
                }
            }] : [this.x, this.y]
        }, c.fromJSON = function (e, t, r) {
            "string" == typeof t && (t = JSON.parse(t));
            var n = e.point(t[0], t[1], r);
            if (!t[2]) return n;

            function i(t) {
                return e.point(t[0], t[1], r)
            }
            var o = t[2];
            return n.precomputed = {
                beta: null,
                doubles: o.doubles && {
                    step: o.doubles.step,
                    points: [n].concat(o.doubles.points.map(i))
                },
                naf: o.naf && {
                    wnd: o.naf.wnd,
                    points: [n].concat(o.naf.points.map(i))
                }
            }, n
        }, c.prototype.inspect = function () {
            return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + ">"
        }, c.prototype.isInfinity = function () {
            return this.inf
        }, c.prototype.add = function (e) {
            if (this.inf) return e;
            if (e.inf) return this;
            if (this.eq(e)) return this.dbl();
            if (this.neg().eq(e)) return this.curve.point(null, null);
            if (0 === this.x.cmp(e.x)) return this.curve.point(null, null);
            var t = this.y.redSub(e.y);
            0 !== t.cmpn(0) && (t = t.redMul(this.x.redSub(e.x).redInvm()));
            var r = t.redSqr().redISub(this.x).redISub(e.x),
                n = t.redMul(this.x.redSub(r)).redISub(this.y);
            return this.curve.point(r, n)
        }, c.prototype.dbl = function () {
            if (this.inf) return this;
            var e = this.y.redAdd(this.y);
            if (0 === e.cmpn(0)) return this.curve.point(null, null);
            var t = this.curve.a,
                r = this.x.redSqr(),
                n = e.redInvm(),
                i = r.redAdd(r).redIAdd(r).redIAdd(t).redMul(n),
                o = i.redSqr().redISub(this.x.redAdd(this.x)),
                a = i.redMul(this.x.redSub(o)).redISub(this.y);
            return this.curve.point(o, a)
        }, c.prototype.getX = function () {
            return this.x.fromRed()
        }, c.prototype.getY = function () {
            return this.y.fromRed()
        }, c.prototype.mul = function (e) {
            return e = new i(e, 16), this.isInfinity() ? this : this._hasDoubles(e) ? this.curve._fixedNafMul(this, e) : this.curve.endo ? this.curve._endoWnafMulAdd([this], [e]) : this.curve._wnafMul(this, e)
        }, c.prototype.mulAdd = function (e, t, r) {
            var n = [this, t],
                i = [e, r];
            return this.curve.endo ? this.curve._endoWnafMulAdd(n, i) : this.curve._wnafMulAdd(1, n, i, 2)
        }, c.prototype.jmulAdd = function (e, t, r) {
            var n = [this, t],
                i = [e, r];
            return this.curve.endo ? this.curve._endoWnafMulAdd(n, i, !0) : this.curve._wnafMulAdd(1, n, i, 2, !0)
        }, c.prototype.eq = function (e) {
            return this === e || this.inf === e.inf && (this.inf || 0 === this.x.cmp(e.x) && 0 === this.y.cmp(e.y))
        }, c.prototype.neg = function (e) {
            if (this.inf) return this;
            var t = this.curve.point(this.x, this.y.redNeg());
            if (e && this.precomputed) {
                var r = this.precomputed,
                    n = function (e) {
                        return e.neg()
                    };
                t.precomputed = {
                    naf: r.naf && {
                        wnd: r.naf.wnd,
                        points: r.naf.points.map(n)
                    },
                    doubles: r.doubles && {
                        step: r.doubles.step,
                        points: r.doubles.points.map(n)
                    }
                }
            }
            return t
        }, c.prototype.toJ = function () {
            return this.inf ? this.curve.jpoint(null, null, null) : this.curve.jpoint(this.x, this.y, this.curve.one)
        }, o(u, a.BasePoint), f.prototype.jpoint = function (e, t, r) {
            return new u(this, e, t, r)
        }, u.prototype.toP = function () {
            if (this.isInfinity()) return this.curve.point(null, null);
            var e = this.z.redInvm(),
                t = e.redSqr(),
                r = this.x.redMul(t),
                n = this.y.redMul(t).redMul(e);
            return this.curve.point(r, n)
        }, u.prototype.neg = function () {
            return this.curve.jpoint(this.x, this.y.redNeg(), this.z)
        }, u.prototype.add = function (e) {
            if (this.isInfinity()) return e;
            if (e.isInfinity()) return this;
            var t = e.z.redSqr(),
                r = this.z.redSqr(),
                n = this.x.redMul(t),
                i = e.x.redMul(r),
                o = this.y.redMul(t.redMul(e.z)),
                a = e.y.redMul(r.redMul(this.z)),
                s = n.redSub(i),
                f = o.redSub(a);
            if (0 === s.cmpn(0)) return 0 !== f.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
            var c = s.redSqr(),
                u = c.redMul(s),
                h = n.redMul(c),
                d = f.redSqr().redIAdd(u).redISub(h).redISub(h),
                l = f.redMul(h.redISub(d)).redISub(o.redMul(u)),
                p = this.z.redMul(e.z).redMul(s);
            return this.curve.jpoint(d, l, p)
        }, u.prototype.mixedAdd = function (e) {
            if (this.isInfinity()) return e.toJ();
            if (e.isInfinity()) return this;
            var t = this.z.redSqr(),
                r = this.x,
                n = e.x.redMul(t),
                i = this.y,
                o = e.y.redMul(t).redMul(this.z),
                a = r.redSub(n),
                s = i.redSub(o);
            if (0 === a.cmpn(0)) return 0 !== s.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
            var f = a.redSqr(),
                c = f.redMul(a),
                u = r.redMul(f),
                h = s.redSqr().redIAdd(c).redISub(u).redISub(u),
                d = s.redMul(u.redISub(h)).redISub(i.redMul(c)),
                l = this.z.redMul(a);
            return this.curve.jpoint(h, d, l)
        }, u.prototype.dblp = function (e) {
            if (0 === e) return this;
            if (this.isInfinity()) return this;
            if (!e) return this.dbl();
            var t;
            if (this.curve.zeroA || this.curve.threeA) {
                var r = this;
                for (t = 0; t < e; t++) r = r.dbl();
                return r
            }
            var n = this.curve.a,
                i = this.curve.tinv,
                o = this.x,
                a = this.y,
                s = this.z,
                f = s.redSqr().redSqr(),
                c = a.redAdd(a);
            for (t = 0; t < e; t++) {
                var u = o.redSqr(),
                    h = c.redSqr(),
                    d = h.redSqr(),
                    l = u.redAdd(u).redIAdd(u).redIAdd(n.redMul(f)),
                    p = o.redMul(h),
                    b = l.redSqr().redISub(p.redAdd(p)),
                    y = p.redISub(b),
                    v = l.redMul(y);
                v = v.redIAdd(v).redISub(d);
                var g = c.redMul(s);
                t + 1 < e && (f = f.redMul(d)), o = b, s = g, c = v
            }
            return this.curve.jpoint(o, c.redMul(i), s)
        }, u.prototype.dbl = function () {
            return this.isInfinity() ? this : this.curve.zeroA ? this._zeroDbl() : this.curve.threeA ? this._threeDbl() : this._dbl()
        }, u.prototype._zeroDbl = function () {
            var e, t, r;
            if (this.zOne) {
                var n = this.x.redSqr(),
                    i = this.y.redSqr(),
                    o = i.redSqr(),
                    a = this.x.redAdd(i).redSqr().redISub(n).redISub(o);
                a = a.redIAdd(a);
                var s = n.redAdd(n).redIAdd(n),
                    f = s.redSqr().redISub(a).redISub(a),
                    c = o.redIAdd(o);
                c = (c = c.redIAdd(c)).redIAdd(c), e = f, t = s.redMul(a.redISub(f)).redISub(c), r = this.y.redAdd(this.y)
            } else {
                var u = this.x.redSqr(),
                    h = this.y.redSqr(),
                    d = h.redSqr(),
                    l = this.x.redAdd(h).redSqr().redISub(u).redISub(d);
                l = l.redIAdd(l);
                var p = u.redAdd(u).redIAdd(u),
                    b = p.redSqr(),
                    y = d.redIAdd(d);
                y = (y = y.redIAdd(y)).redIAdd(y), e = b.redISub(l).redISub(l), t = p.redMul(l.redISub(e)).redISub(y), r = (r = this.y.redMul(this.z)).redIAdd(r)
            }
            return this.curve.jpoint(e, t, r)
        }, u.prototype._threeDbl = function () {
            var e, t, r;
            if (this.zOne) {
                var n = this.x.redSqr(),
                    i = this.y.redSqr(),
                    o = i.redSqr(),
                    a = this.x.redAdd(i).redSqr().redISub(n).redISub(o);
                a = a.redIAdd(a);
                var s = n.redAdd(n).redIAdd(n).redIAdd(this.curve.a),
                    f = s.redSqr().redISub(a).redISub(a);
                e = f;
                var c = o.redIAdd(o);
                c = (c = c.redIAdd(c)).redIAdd(c), t = s.redMul(a.redISub(f)).redISub(c), r = this.y.redAdd(this.y)
            } else {
                var u = this.z.redSqr(),
                    h = this.y.redSqr(),
                    d = this.x.redMul(h),
                    l = this.x.redSub(u).redMul(this.x.redAdd(u));
                l = l.redAdd(l).redIAdd(l);
                var p = d.redIAdd(d),
                    b = (p = p.redIAdd(p)).redAdd(p);
                e = l.redSqr().redISub(b), r = this.y.redAdd(this.z).redSqr().redISub(h).redISub(u);
                var y = h.redSqr();
                y = (y = (y = y.redIAdd(y)).redIAdd(y)).redIAdd(y), t = l.redMul(p.redISub(e)).redISub(y)
            }
            return this.curve.jpoint(e, t, r)
        }, u.prototype._dbl = function () {
            var e = this.curve.a,
                t = this.x,
                r = this.y,
                n = this.z,
                i = n.redSqr().redSqr(),
                o = t.redSqr(),
                a = r.redSqr(),
                s = o.redAdd(o).redIAdd(o).redIAdd(e.redMul(i)),
                f = t.redAdd(t),
                c = (f = f.redIAdd(f)).redMul(a),
                u = s.redSqr().redISub(c.redAdd(c)),
                h = c.redISub(u),
                d = a.redSqr();
            d = (d = (d = d.redIAdd(d)).redIAdd(d)).redIAdd(d);
            var l = s.redMul(h).redISub(d),
                p = r.redAdd(r).redMul(n);
            return this.curve.jpoint(u, l, p)
        }, u.prototype.trpl = function () {
            if (!this.curve.zeroA) return this.dbl().add(this);
            var e = this.x.redSqr(),
                t = this.y.redSqr(),
                r = this.z.redSqr(),
                n = t.redSqr(),
                i = e.redAdd(e).redIAdd(e),
                o = i.redSqr(),
                a = this.x.redAdd(t).redSqr().redISub(e).redISub(n),
                s = (a = (a = (a = a.redIAdd(a)).redAdd(a).redIAdd(a)).redISub(o)).redSqr(),
                f = n.redIAdd(n);
            f = (f = (f = f.redIAdd(f)).redIAdd(f)).redIAdd(f);
            var c = i.redIAdd(a).redSqr().redISub(o).redISub(s).redISub(f),
                u = t.redMul(c);
            u = (u = u.redIAdd(u)).redIAdd(u);
            var h = this.x.redMul(s).redISub(u);
            h = (h = h.redIAdd(h)).redIAdd(h);
            var d = this.y.redMul(c.redMul(f.redISub(c)).redISub(a.redMul(s)));
            d = (d = (d = d.redIAdd(d)).redIAdd(d)).redIAdd(d);
            var l = this.z.redAdd(a).redSqr().redISub(r).redISub(s);
            return this.curve.jpoint(h, d, l)
        }, u.prototype.mul = function (e, t) {
            return e = new i(e, t), this.curve._wnafMul(this, e)
        }, u.prototype.eq = function (e) {
            if ("affine" === e.type) return this.eq(e.toJ());
            if (this === e) return !0;
            var t = this.z.redSqr(),
                r = e.z.redSqr();
            if (0 !== this.x.redMul(r).redISub(e.x.redMul(t)).cmpn(0)) return !1;
            var n = t.redMul(this.z),
                i = r.redMul(e.z);
            return 0 === this.y.redMul(i).redISub(e.y.redMul(n)).cmpn(0)
        }, u.prototype.eqXToP = function (e) {
            var t = this.z.redSqr(),
                r = e.toRed(this.curve.red).redMul(t);
            if (0 === this.x.cmp(r)) return !0;
            for (var n = e.clone(), i = this.curve.redN.redMul(t);;) {
                if (n.iadd(this.curve.n), n.cmp(this.curve.p) >= 0) return !1;
                if (r.redIAdd(i), 0 === this.x.cmp(r)) return !0
            }
        }, u.prototype.inspect = function () {
            return this.isInfinity() ? "<EC JPoint Infinity>" : "<EC JPoint x: " + this.x.toString(16, 2) + " y: " + this.y.toString(16, 2) + " z: " + this.z.toString(16, 2) + ">"
        }, u.prototype.isInfinity = function () {
            return 0 === this.z.cmpn(0)
        }
    }, function (e, t, r) {
        "use strict";
        var n = r(4),
            i = r(1),
            o = r(35),
            a = r(10);

        function s(e) {
            o.call(this, "mont", e), this.a = new n(e.a, 16).toRed(this.red), this.b = new n(e.b, 16).toRed(this.red), this.i4 = new n(4).toRed(this.red).redInvm(), this.two = new n(2).toRed(this.red), this.a24 = this.i4.redMul(this.a.redAdd(this.two))
        }

        function f(e, t, r) {
            o.BasePoint.call(this, e, "projective"), null === t && null === r ? (this.x = this.curve.one, this.z = this.curve.zero) : (this.x = new n(t, 16), this.z = new n(r, 16), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)))
        }
        i(s, o), e.exports = s, s.prototype.validate = function (e) {
            var t = e.normalize().x,
                r = t.redSqr(),
                n = r.redMul(t).redAdd(r.redMul(this.a)).redAdd(t);
            return 0 === n.redSqrt().redSqr().cmp(n)
        }, i(f, o.BasePoint), s.prototype.decodePoint = function (e, t) {
            return this.point(a.toArray(e, t), 1)
        }, s.prototype.point = function (e, t) {
            return new f(this, e, t)
        }, s.prototype.pointFromJSON = function (e) {
            return f.fromJSON(this, e)
        }, f.prototype.precompute = function () {}, f.prototype._encode = function () {
            return this.getX().toArray("be", this.curve.p.byteLength())
        }, f.fromJSON = function (e, t) {
            return new f(e, t[0], t[1] || e.one)
        }, f.prototype.inspect = function () {
            return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " z: " + this.z.fromRed().toString(16, 2) + ">"
        }, f.prototype.isInfinity = function () {
            return 0 === this.z.cmpn(0)
        }, f.prototype.dbl = function () {
            var e = this.x.redAdd(this.z).redSqr(),
                t = this.x.redSub(this.z).redSqr(),
                r = e.redSub(t),
                n = e.redMul(t),
                i = r.redMul(t.redAdd(this.curve.a24.redMul(r)));
            return this.curve.point(n, i)
        }, f.prototype.add = function () {
            throw new Error("Not supported on Montgomery curve")
        }, f.prototype.diffAdd = function (e, t) {
            var r = this.x.redAdd(this.z),
                n = this.x.redSub(this.z),
                i = e.x.redAdd(e.z),
                o = e.x.redSub(e.z).redMul(r),
                a = i.redMul(n),
                s = t.z.redMul(o.redAdd(a).redSqr()),
                f = t.x.redMul(o.redISub(a).redSqr());
            return this.curve.point(s, f)
        }, f.prototype.mul = function (e) {
            for (var t = e.clone(), r = this, n = this.curve.point(null, null), i = []; 0 !== t.cmpn(0); t.iushrn(1)) i.push(t.andln(1));
            for (var o = i.length - 1; o >= 0; o--) 0 === i[o] ? (r = r.diffAdd(n, this), n = n.dbl()) : (n = r.diffAdd(n, this), r = r.dbl());
            return n
        }, f.prototype.mulAdd = function () {
            throw new Error("Not supported on Montgomery curve")
        }, f.prototype.jumlAdd = function () {
            throw new Error("Not supported on Montgomery curve")
        }, f.prototype.eq = function (e) {
            return 0 === this.getX().cmp(e.getX())
        }, f.prototype.normalize = function () {
            return this.x = this.x.redMul(this.z.redInvm()), this.z = this.curve.one, this
        }, f.prototype.getX = function () {
            return this.normalize(), this.x.fromRed()
        }
    }, function (e, t, r) {
        "use strict";
        var n = r(10),
            i = r(4),
            o = r(1),
            a = r(35),
            s = n.assert;

        function f(e) {
            this.twisted = 1 != (0 | e.a), this.mOneA = this.twisted && -1 == (0 | e.a), this.extended = this.mOneA, a.call(this, "edwards", e), this.a = new i(e.a, 16).umod(this.red.m), this.a = this.a.toRed(this.red), this.c = new i(e.c, 16).toRed(this.red), this.c2 = this.c.redSqr(), this.d = new i(e.d, 16).toRed(this.red), this.dd = this.d.redAdd(this.d), s(!this.twisted || 0 === this.c.fromRed().cmpn(1)), this.oneC = 1 == (0 | e.c)
        }

        function c(e, t, r, n, o) {
            a.BasePoint.call(this, e, "projective"), null === t && null === r && null === n ? (this.x = this.curve.zero, this.y = this.curve.one, this.z = this.curve.one, this.t = this.curve.zero, this.zOne = !0) : (this.x = new i(t, 16), this.y = new i(r, 16), this.z = n ? new i(n, 16) : this.curve.one, this.t = o && new i(o, 16), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)), this.t && !this.t.red && (this.t = this.t.toRed(this.curve.red)), this.zOne = this.z === this.curve.one, this.curve.extended && !this.t && (this.t = this.x.redMul(this.y), this.zOne || (this.t = this.t.redMul(this.z.redInvm()))))
        }
        o(f, a), e.exports = f, f.prototype._mulA = function (e) {
            return this.mOneA ? e.redNeg() : this.a.redMul(e)
        }, f.prototype._mulC = function (e) {
            return this.oneC ? e : this.c.redMul(e)
        }, f.prototype.jpoint = function (e, t, r, n) {
            return this.point(e, t, r, n)
        }, f.prototype.pointFromX = function (e, t) {
            (e = new i(e, 16)).red || (e = e.toRed(this.red));
            var r = e.redSqr(),
                n = this.c2.redSub(this.a.redMul(r)),
                o = this.one.redSub(this.c2.redMul(this.d).redMul(r)),
                a = n.redMul(o.redInvm()),
                s = a.redSqrt();
            if (0 !== s.redSqr().redSub(a).cmp(this.zero)) throw new Error("invalid point");
            var f = s.fromRed().isOdd();
            return (t && !f || !t && f) && (s = s.redNeg()), this.point(e, s)
        }, f.prototype.pointFromY = function (e, t) {
            (e = new i(e, 16)).red || (e = e.toRed(this.red));
            var r = e.redSqr(),
                n = r.redSub(this.c2),
                o = r.redMul(this.d).redMul(this.c2).redSub(this.a),
                a = n.redMul(o.redInvm());
            if (0 === a.cmp(this.zero)) {
                if (t) throw new Error("invalid point");
                return this.point(this.zero, e)
            }
            var s = a.redSqrt();
            if (0 !== s.redSqr().redSub(a).cmp(this.zero)) throw new Error("invalid point");
            return s.fromRed().isOdd() !== t && (s = s.redNeg()), this.point(s, e)
        }, f.prototype.validate = function (e) {
            if (e.isInfinity()) return !0;
            e.normalize();
            var t = e.x.redSqr(),
                r = e.y.redSqr(),
                n = t.redMul(this.a).redAdd(r),
                i = this.c2.redMul(this.one.redAdd(this.d.redMul(t).redMul(r)));
            return 0 === n.cmp(i)
        }, o(c, a.BasePoint), f.prototype.pointFromJSON = function (e) {
            return c.fromJSON(this, e)
        }, f.prototype.point = function (e, t, r, n) {
            return new c(this, e, t, r, n)
        }, c.fromJSON = function (e, t) {
            return new c(e, t[0], t[1], t[2])
        }, c.prototype.inspect = function () {
            return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + " z: " + this.z.fromRed().toString(16, 2) + ">"
        }, c.prototype.isInfinity = function () {
            return 0 === this.x.cmpn(0) && (0 === this.y.cmp(this.z) || this.zOne && 0 === this.y.cmp(this.curve.c))
        }, c.prototype._extDbl = function () {
            var e = this.x.redSqr(),
                t = this.y.redSqr(),
                r = this.z.redSqr();
            r = r.redIAdd(r);
            var n = this.curve._mulA(e),
                i = this.x.redAdd(this.y).redSqr().redISub(e).redISub(t),
                o = n.redAdd(t),
                a = o.redSub(r),
                s = n.redSub(t),
                f = i.redMul(a),
                c = o.redMul(s),
                u = i.redMul(s),
                h = a.redMul(o);
            return this.curve.point(f, c, h, u)
        }, c.prototype._projDbl = function () {
            var e, t, r, n, i, o, a = this.x.redAdd(this.y).redSqr(),
                s = this.x.redSqr(),
                f = this.y.redSqr();
            if (this.curve.twisted) {
                var c = (n = this.curve._mulA(s)).redAdd(f);
                this.zOne ? (e = a.redSub(s).redSub(f).redMul(c.redSub(this.curve.two)), t = c.redMul(n.redSub(f)), r = c.redSqr().redSub(c).redSub(c)) : (i = this.z.redSqr(), o = c.redSub(i).redISub(i), e = a.redSub(s).redISub(f).redMul(o), t = c.redMul(n.redSub(f)), r = c.redMul(o))
            } else n = s.redAdd(f), i = this.curve._mulC(this.z).redSqr(), o = n.redSub(i).redSub(i), e = this.curve._mulC(a.redISub(n)).redMul(o), t = this.curve._mulC(n).redMul(s.redISub(f)), r = n.redMul(o);
            return this.curve.point(e, t, r)
        }, c.prototype.dbl = function () {
            return this.isInfinity() ? this : this.curve.extended ? this._extDbl() : this._projDbl()
        }, c.prototype._extAdd = function (e) {
            var t = this.y.redSub(this.x).redMul(e.y.redSub(e.x)),
                r = this.y.redAdd(this.x).redMul(e.y.redAdd(e.x)),
                n = this.t.redMul(this.curve.dd).redMul(e.t),
                i = this.z.redMul(e.z.redAdd(e.z)),
                o = r.redSub(t),
                a = i.redSub(n),
                s = i.redAdd(n),
                f = r.redAdd(t),
                c = o.redMul(a),
                u = s.redMul(f),
                h = o.redMul(f),
                d = a.redMul(s);
            return this.curve.point(c, u, d, h)
        }, c.prototype._projAdd = function (e) {
            var t, r, n = this.z.redMul(e.z),
                i = n.redSqr(),
                o = this.x.redMul(e.x),
                a = this.y.redMul(e.y),
                s = this.curve.d.redMul(o).redMul(a),
                f = i.redSub(s),
                c = i.redAdd(s),
                u = this.x.redAdd(this.y).redMul(e.x.redAdd(e.y)).redISub(o).redISub(a),
                h = n.redMul(f).redMul(u);
            return this.curve.twisted ? (t = n.redMul(c).redMul(a.redSub(this.curve._mulA(o))), r = f.redMul(c)) : (t = n.redMul(c).redMul(a.redSub(o)), r = this.curve._mulC(f).redMul(c)), this.curve.point(h, t, r)
        }, c.prototype.add = function (e) {
            return this.isInfinity() ? e : e.isInfinity() ? this : this.curve.extended ? this._extAdd(e) : this._projAdd(e)
        }, c.prototype.mul = function (e) {
            return this._hasDoubles(e) ? this.curve._fixedNafMul(this, e) : this.curve._wnafMul(this, e)
        }, c.prototype.mulAdd = function (e, t, r) {
            return this.curve._wnafMulAdd(1, [this, t], [e, r], 2, !1)
        }, c.prototype.jmulAdd = function (e, t, r) {
            return this.curve._wnafMulAdd(1, [this, t], [e, r], 2, !0)
        }, c.prototype.normalize = function () {
            if (this.zOne) return this;
            var e = this.z.redInvm();
            return this.x = this.x.redMul(e), this.y = this.y.redMul(e), this.t && (this.t = this.t.redMul(e)), this.z = this.curve.one, this.zOne = !0, this
        }, c.prototype.neg = function () {
            return this.curve.point(this.x.redNeg(), this.y, this.z, this.t && this.t.redNeg())
        }, c.prototype.getX = function () {
            return this.normalize(), this.x.fromRed()
        }, c.prototype.getY = function () {
            return this.normalize(), this.y.fromRed()
        }, c.prototype.eq = function (e) {
            return this === e || 0 === this.getX().cmp(e.getX()) && 0 === this.getY().cmp(e.getY())
        }, c.prototype.eqXToP = function (e) {
            var t = e.toRed(this.curve.red).redMul(this.z);
            if (0 === this.x.cmp(t)) return !0;
            for (var r = e.clone(), n = this.curve.redN.redMul(this.z);;) {
                if (r.iadd(this.curve.n), r.cmp(this.curve.p) >= 0) return !1;
                if (t.redIAdd(n), 0 === this.x.cmp(t)) return !0
            }
        }, c.prototype.toP = c.prototype.normalize, c.prototype.mixedAdd = c.prototype.add
    }, function (e, t, r) {
        "use strict";
        t.sha1 = r(155), t.sha224 = r(156), t.sha256 = r(86), t.sha384 = r(157), t.sha512 = r(87)
    }, function (e, t, r) {
        "use strict";
        var n = r(12),
            i = r(27),
            o = r(85),
            a = n.rotl32,
            s = n.sum32,
            f = n.sum32_5,
            c = o.ft_1,
            u = i.BlockHash,
            h = [1518500249, 1859775393, 2400959708, 3395469782];

        function d() {
            if (!(this instanceof d)) return new d;
            u.call(this), this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520], this.W = new Array(80)
        }
        n.inherits(d, u), e.exports = d, d.blockSize = 512, d.outSize = 160, d.hmacStrength = 80, d.padLength = 64, d.prototype._update = function (e, t) {
            for (var r = this.W, n = 0; n < 16; n++) r[n] = e[t + n];
            for (; n < r.length; n++) r[n] = a(r[n - 3] ^ r[n - 8] ^ r[n - 14] ^ r[n - 16], 1);
            var i = this.h[0],
                o = this.h[1],
                u = this.h[2],
                d = this.h[3],
                l = this.h[4];
            for (n = 0; n < r.length; n++) {
                var p = ~~(n / 20),
                    b = f(a(i, 5), c(p, o, u, d), l, r[n], h[p]);
                l = d, d = u, u = a(o, 30), o = i, i = b
            }
            this.h[0] = s(this.h[0], i), this.h[1] = s(this.h[1], o), this.h[2] = s(this.h[2], u), this.h[3] = s(this.h[3], d), this.h[4] = s(this.h[4], l)
        }, d.prototype._digest = function (e) {
            return "hex" === e ? n.toHex32(this.h, "big") : n.split32(this.h, "big")
        }
    }, function (e, t, r) {
        "use strict";
        var n = r(12),
            i = r(86);

        function o() {
            if (!(this instanceof o)) return new o;
            i.call(this), this.h = [3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428]
        }
        n.inherits(o, i), e.exports = o, o.blockSize = 512, o.outSize = 224, o.hmacStrength = 192, o.padLength = 64, o.prototype._digest = function (e) {
            return "hex" === e ? n.toHex32(this.h.slice(0, 7), "big") : n.split32(this.h.slice(0, 7), "big")
        }
    }, function (e, t, r) {
        "use strict";
        var n = r(12),
            i = r(87);

        function o() {
            if (!(this instanceof o)) return new o;
            i.call(this), this.h = [3418070365, 3238371032, 1654270250, 914150663, 2438529370, 812702999, 355462360, 4144912697, 1731405415, 4290775857, 2394180231, 1750603025, 3675008525, 1694076839, 1203062813, 3204075428]
        }
        n.inherits(o, i), e.exports = o, o.blockSize = 1024, o.outSize = 384, o.hmacStrength = 192, o.padLength = 128, o.prototype._digest = function (e) {
            return "hex" === e ? n.toHex32(this.h.slice(0, 12), "big") : n.split32(this.h.slice(0, 12), "big")
        }
    }, function (e, t, r) {
        "use strict";
        var n = r(12),
            i = r(27),
            o = n.rotl32,
            a = n.sum32,
            s = n.sum32_3,
            f = n.sum32_4,
            c = i.BlockHash;

        function u() {
            if (!(this instanceof u)) return new u;
            c.call(this), this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520], this.endian = "little"
        }

        function h(e, t, r, n) {
            return e <= 15 ? t ^ r ^ n : e <= 31 ? t & r | ~t & n : e <= 47 ? (t | ~r) ^ n : e <= 63 ? t & n | r & ~n : t ^ (r | ~n)
        }

        function d(e) {
            return e <= 15 ? 0 : e <= 31 ? 1518500249 : e <= 47 ? 1859775393 : e <= 63 ? 2400959708 : 2840853838
        }

        function l(e) {
            return e <= 15 ? 1352829926 : e <= 31 ? 1548603684 : e <= 47 ? 1836072691 : e <= 63 ? 2053994217 : 0
        }
        n.inherits(u, c), t.ripemd160 = u, u.blockSize = 512, u.outSize = 160, u.hmacStrength = 192, u.padLength = 64, u.prototype._update = function (e, t) {
            for (var r = this.h[0], n = this.h[1], i = this.h[2], c = this.h[3], u = this.h[4], g = r, m = n, _ = i, w = c, E = u, S = 0; S < 80; S++) {
                var A = a(o(f(r, h(S, n, i, c), e[p[S] + t], d(S)), y[S]), u);
                r = u, u = c, c = o(i, 10), i = n, n = A, A = a(o(f(g, h(79 - S, m, _, w), e[b[S] + t], l(S)), v[S]), E), g = E, E = w, w = o(_, 10), _ = m, m = A
            }
            A = s(this.h[1], i, w), this.h[1] = s(this.h[2], c, E), this.h[2] = s(this.h[3], u, g), this.h[3] = s(this.h[4], r, m), this.h[4] = s(this.h[0], n, _), this.h[0] = A
        }, u.prototype._digest = function (e) {
            return "hex" === e ? n.toHex32(this.h, "little") : n.split32(this.h, "little")
        };
        var p = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13],
            b = [5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11],
            y = [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6],
            v = [8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11]
    }, function (e, t, r) {
        "use strict";
        var n = r(12),
            i = r(9);

        function o(e, t, r) {
            if (!(this instanceof o)) return new o(e, t, r);
            this.Hash = e, this.blockSize = e.blockSize / 8, this.outSize = e.outSize / 8, this.inner = null, this.outer = null, this._init(n.toArray(t, r))
        }
        e.exports = o, o.prototype._init = function (e) {
            e.length > this.blockSize && (e = (new this.Hash).update(e).digest()), i(e.length <= this.blockSize);
            for (var t = e.length; t < this.blockSize; t++) e.push(0);
            for (t = 0; t < e.length; t++) e[t] ^= 54;
            for (this.inner = (new this.Hash).update(e), t = 0; t < e.length; t++) e[t] ^= 106;
            this.outer = (new this.Hash).update(e)
        }, o.prototype.update = function (e, t) {
            return this.inner.update(e, t), this
        }, o.prototype.digest = function (e) {
            return this.outer.update(this.inner.digest()), this.outer.digest(e)
        }
    }, function (e, t) {
        e.exports = {
            doubles: {
                step: 4,
                points: [
                    ["e60fce93b59e9ec53011aabc21c23e97b2a31369b87a5ae9c44ee89e2a6dec0a", "f7e3507399e595929db99f34f57937101296891e44d23f0be1f32cce69616821"],
                    ["8282263212c609d9ea2a6e3e172de238d8c39cabd5ac1ca10646e23fd5f51508", "11f8a8098557dfe45e8256e830b60ace62d613ac2f7b17bed31b6eaff6e26caf"],
                    ["175e159f728b865a72f99cc6c6fc846de0b93833fd2222ed73fce5b551e5b739", "d3506e0d9e3c79eba4ef97a51ff71f5eacb5955add24345c6efa6ffee9fed695"],
                    ["363d90d447b00c9c99ceac05b6262ee053441c7e55552ffe526bad8f83ff4640", "4e273adfc732221953b445397f3363145b9a89008199ecb62003c7f3bee9de9"],
                    ["8b4b5f165df3c2be8c6244b5b745638843e4a781a15bcd1b69f79a55dffdf80c", "4aad0a6f68d308b4b3fbd7813ab0da04f9e336546162ee56b3eff0c65fd4fd36"],
                    ["723cbaa6e5db996d6bf771c00bd548c7b700dbffa6c0e77bcb6115925232fcda", "96e867b5595cc498a921137488824d6e2660a0653779494801dc069d9eb39f5f"],
                    ["eebfa4d493bebf98ba5feec812c2d3b50947961237a919839a533eca0e7dd7fa", "5d9a8ca3970ef0f269ee7edaf178089d9ae4cdc3a711f712ddfd4fdae1de8999"],
                    ["100f44da696e71672791d0a09b7bde459f1215a29b3c03bfefd7835b39a48db0", "cdd9e13192a00b772ec8f3300c090666b7ff4a18ff5195ac0fbd5cd62bc65a09"],
                    ["e1031be262c7ed1b1dc9227a4a04c017a77f8d4464f3b3852c8acde6e534fd2d", "9d7061928940405e6bb6a4176597535af292dd419e1ced79a44f18f29456a00d"],
                    ["feea6cae46d55b530ac2839f143bd7ec5cf8b266a41d6af52d5e688d9094696d", "e57c6b6c97dce1bab06e4e12bf3ecd5c981c8957cc41442d3155debf18090088"],
                    ["da67a91d91049cdcb367be4be6ffca3cfeed657d808583de33fa978bc1ec6cb1", "9bacaa35481642bc41f463f7ec9780e5dec7adc508f740a17e9ea8e27a68be1d"],
                    ["53904faa0b334cdda6e000935ef22151ec08d0f7bb11069f57545ccc1a37b7c0", "5bc087d0bc80106d88c9eccac20d3c1c13999981e14434699dcb096b022771c8"],
                    ["8e7bcd0bd35983a7719cca7764ca906779b53a043a9b8bcaeff959f43ad86047", "10b7770b2a3da4b3940310420ca9514579e88e2e47fd68b3ea10047e8460372a"],
                    ["385eed34c1cdff21e6d0818689b81bde71a7f4f18397e6690a841e1599c43862", "283bebc3e8ea23f56701de19e9ebf4576b304eec2086dc8cc0458fe5542e5453"],
                    ["6f9d9b803ecf191637c73a4413dfa180fddf84a5947fbc9c606ed86c3fac3a7", "7c80c68e603059ba69b8e2a30e45c4d47ea4dd2f5c281002d86890603a842160"],
                    ["3322d401243c4e2582a2147c104d6ecbf774d163db0f5e5313b7e0e742d0e6bd", "56e70797e9664ef5bfb019bc4ddaf9b72805f63ea2873af624f3a2e96c28b2a0"],
                    ["85672c7d2de0b7da2bd1770d89665868741b3f9af7643397721d74d28134ab83", "7c481b9b5b43b2eb6374049bfa62c2e5e77f17fcc5298f44c8e3094f790313a6"],
                    ["948bf809b1988a46b06c9f1919413b10f9226c60f668832ffd959af60c82a0a", "53a562856dcb6646dc6b74c5d1c3418c6d4dff08c97cd2bed4cb7f88d8c8e589"],
                    ["6260ce7f461801c34f067ce0f02873a8f1b0e44dfc69752accecd819f38fd8e8", "bc2da82b6fa5b571a7f09049776a1ef7ecd292238051c198c1a84e95b2b4ae17"],
                    ["e5037de0afc1d8d43d8348414bbf4103043ec8f575bfdc432953cc8d2037fa2d", "4571534baa94d3b5f9f98d09fb990bddbd5f5b03ec481f10e0e5dc841d755bda"],
                    ["e06372b0f4a207adf5ea905e8f1771b4e7e8dbd1c6a6c5b725866a0ae4fce725", "7a908974bce18cfe12a27bb2ad5a488cd7484a7787104870b27034f94eee31dd"],
                    ["213c7a715cd5d45358d0bbf9dc0ce02204b10bdde2a3f58540ad6908d0559754", "4b6dad0b5ae462507013ad06245ba190bb4850f5f36a7eeddff2c27534b458f2"],
                    ["4e7c272a7af4b34e8dbb9352a5419a87e2838c70adc62cddf0cc3a3b08fbd53c", "17749c766c9d0b18e16fd09f6def681b530b9614bff7dd33e0b3941817dcaae6"],
                    ["fea74e3dbe778b1b10f238ad61686aa5c76e3db2be43057632427e2840fb27b6", "6e0568db9b0b13297cf674deccb6af93126b596b973f7b77701d3db7f23cb96f"],
                    ["76e64113f677cf0e10a2570d599968d31544e179b760432952c02a4417bdde39", "c90ddf8dee4e95cf577066d70681f0d35e2a33d2b56d2032b4b1752d1901ac01"],
                    ["c738c56b03b2abe1e8281baa743f8f9a8f7cc643df26cbee3ab150242bcbb891", "893fb578951ad2537f718f2eacbfbbbb82314eef7880cfe917e735d9699a84c3"],
                    ["d895626548b65b81e264c7637c972877d1d72e5f3a925014372e9f6588f6c14b", "febfaa38f2bc7eae728ec60818c340eb03428d632bb067e179363ed75d7d991f"],
                    ["b8da94032a957518eb0f6433571e8761ceffc73693e84edd49150a564f676e03", "2804dfa44805a1e4d7c99cc9762808b092cc584d95ff3b511488e4e74efdf6e7"],
                    ["e80fea14441fb33a7d8adab9475d7fab2019effb5156a792f1a11778e3c0df5d", "eed1de7f638e00771e89768ca3ca94472d155e80af322ea9fcb4291b6ac9ec78"],
                    ["a301697bdfcd704313ba48e51d567543f2a182031efd6915ddc07bbcc4e16070", "7370f91cfb67e4f5081809fa25d40f9b1735dbf7c0a11a130c0d1a041e177ea1"],
                    ["90ad85b389d6b936463f9d0512678de208cc330b11307fffab7ac63e3fb04ed4", "e507a3620a38261affdcbd9427222b839aefabe1582894d991d4d48cb6ef150"],
                    ["8f68b9d2f63b5f339239c1ad981f162ee88c5678723ea3351b7b444c9ec4c0da", "662a9f2dba063986de1d90c2b6be215dbbea2cfe95510bfdf23cbf79501fff82"],
                    ["e4f3fb0176af85d65ff99ff9198c36091f48e86503681e3e6686fd5053231e11", "1e63633ad0ef4f1c1661a6d0ea02b7286cc7e74ec951d1c9822c38576feb73bc"],
                    ["8c00fa9b18ebf331eb961537a45a4266c7034f2f0d4e1d0716fb6eae20eae29e", "efa47267fea521a1a9dc343a3736c974c2fadafa81e36c54e7d2a4c66702414b"],
                    ["e7a26ce69dd4829f3e10cec0a9e98ed3143d084f308b92c0997fddfc60cb3e41", "2a758e300fa7984b471b006a1aafbb18d0a6b2c0420e83e20e8a9421cf2cfd51"],
                    ["b6459e0ee3662ec8d23540c223bcbdc571cbcb967d79424f3cf29eb3de6b80ef", "67c876d06f3e06de1dadf16e5661db3c4b3ae6d48e35b2ff30bf0b61a71ba45"],
                    ["d68a80c8280bb840793234aa118f06231d6f1fc67e73c5a5deda0f5b496943e8", "db8ba9fff4b586d00c4b1f9177b0e28b5b0e7b8f7845295a294c84266b133120"],
                    ["324aed7df65c804252dc0270907a30b09612aeb973449cea4095980fc28d3d5d", "648a365774b61f2ff130c0c35aec1f4f19213b0c7e332843967224af96ab7c84"],
                    ["4df9c14919cde61f6d51dfdbe5fee5dceec4143ba8d1ca888e8bd373fd054c96", "35ec51092d8728050974c23a1d85d4b5d506cdc288490192ebac06cad10d5d"],
                    ["9c3919a84a474870faed8a9c1cc66021523489054d7f0308cbfc99c8ac1f98cd", "ddb84f0f4a4ddd57584f044bf260e641905326f76c64c8e6be7e5e03d4fc599d"],
                    ["6057170b1dd12fdf8de05f281d8e06bb91e1493a8b91d4cc5a21382120a959e5", "9a1af0b26a6a4807add9a2daf71df262465152bc3ee24c65e899be932385a2a8"],
                    ["a576df8e23a08411421439a4518da31880cef0fba7d4df12b1a6973eecb94266", "40a6bf20e76640b2c92b97afe58cd82c432e10a7f514d9f3ee8be11ae1b28ec8"],
                    ["7778a78c28dec3e30a05fe9629de8c38bb30d1f5cf9a3a208f763889be58ad71", "34626d9ab5a5b22ff7098e12f2ff580087b38411ff24ac563b513fc1fd9f43ac"],
                    ["928955ee637a84463729fd30e7afd2ed5f96274e5ad7e5cb09eda9c06d903ac", "c25621003d3f42a827b78a13093a95eeac3d26efa8a8d83fc5180e935bcd091f"],
                    ["85d0fef3ec6db109399064f3a0e3b2855645b4a907ad354527aae75163d82751", "1f03648413a38c0be29d496e582cf5663e8751e96877331582c237a24eb1f962"],
                    ["ff2b0dce97eece97c1c9b6041798b85dfdfb6d8882da20308f5404824526087e", "493d13fef524ba188af4c4dc54d07936c7b7ed6fb90e2ceb2c951e01f0c29907"],
                    ["827fbbe4b1e880ea9ed2b2e6301b212b57f1ee148cd6dd28780e5e2cf856e241", "c60f9c923c727b0b71bef2c67d1d12687ff7a63186903166d605b68baec293ec"],
                    ["eaa649f21f51bdbae7be4ae34ce6e5217a58fdce7f47f9aa7f3b58fa2120e2b3", "be3279ed5bbbb03ac69a80f89879aa5a01a6b965f13f7e59d47a5305ba5ad93d"],
                    ["e4a42d43c5cf169d9391df6decf42ee541b6d8f0c9a137401e23632dda34d24f", "4d9f92e716d1c73526fc99ccfb8ad34ce886eedfa8d8e4f13a7f7131deba9414"],
                    ["1ec80fef360cbdd954160fadab352b6b92b53576a88fea4947173b9d4300bf19", "aeefe93756b5340d2f3a4958a7abbf5e0146e77f6295a07b671cdc1cc107cefd"],
                    ["146a778c04670c2f91b00af4680dfa8bce3490717d58ba889ddb5928366642be", "b318e0ec3354028add669827f9d4b2870aaa971d2f7e5ed1d0b297483d83efd0"],
                    ["fa50c0f61d22e5f07e3acebb1aa07b128d0012209a28b9776d76a8793180eef9", "6b84c6922397eba9b72cd2872281a68a5e683293a57a213b38cd8d7d3f4f2811"],
                    ["da1d61d0ca721a11b1a5bf6b7d88e8421a288ab5d5bba5220e53d32b5f067ec2", "8157f55a7c99306c79c0766161c91e2966a73899d279b48a655fba0f1ad836f1"],
                    ["a8e282ff0c9706907215ff98e8fd416615311de0446f1e062a73b0610d064e13", "7f97355b8db81c09abfb7f3c5b2515888b679a3e50dd6bd6cef7c73111f4cc0c"],
                    ["174a53b9c9a285872d39e56e6913cab15d59b1fa512508c022f382de8319497c", "ccc9dc37abfc9c1657b4155f2c47f9e6646b3a1d8cb9854383da13ac079afa73"],
                    ["959396981943785c3d3e57edf5018cdbe039e730e4918b3d884fdff09475b7ba", "2e7e552888c331dd8ba0386a4b9cd6849c653f64c8709385e9b8abf87524f2fd"],
                    ["d2a63a50ae401e56d645a1153b109a8fcca0a43d561fba2dbb51340c9d82b151", "e82d86fb6443fcb7565aee58b2948220a70f750af484ca52d4142174dcf89405"],
                    ["64587e2335471eb890ee7896d7cfdc866bacbdbd3839317b3436f9b45617e073", "d99fcdd5bf6902e2ae96dd6447c299a185b90a39133aeab358299e5e9faf6589"],
                    ["8481bde0e4e4d885b3a546d3e549de042f0aa6cea250e7fd358d6c86dd45e458", "38ee7b8cba5404dd84a25bf39cecb2ca900a79c42b262e556d64b1b59779057e"],
                    ["13464a57a78102aa62b6979ae817f4637ffcfed3c4b1ce30bcd6303f6caf666b", "69be159004614580ef7e433453ccb0ca48f300a81d0942e13f495a907f6ecc27"],
                    ["bc4a9df5b713fe2e9aef430bcc1dc97a0cd9ccede2f28588cada3a0d2d83f366", "d3a81ca6e785c06383937adf4b798caa6e8a9fbfa547b16d758d666581f33c1"],
                    ["8c28a97bf8298bc0d23d8c749452a32e694b65e30a9472a3954ab30fe5324caa", "40a30463a3305193378fedf31f7cc0eb7ae784f0451cb9459e71dc73cbef9482"],
                    ["8ea9666139527a8c1dd94ce4f071fd23c8b350c5a4bb33748c4ba111faccae0", "620efabbc8ee2782e24e7c0cfb95c5d735b783be9cf0f8e955af34a30e62b945"],
                    ["dd3625faef5ba06074669716bbd3788d89bdde815959968092f76cc4eb9a9787", "7a188fa3520e30d461da2501045731ca941461982883395937f68d00c644a573"],
                    ["f710d79d9eb962297e4f6232b40e8f7feb2bc63814614d692c12de752408221e", "ea98e67232d3b3295d3b535532115ccac8612c721851617526ae47a9c77bfc82"]
                ]
            },
            naf: {
                wnd: 7,
                points: [
                    ["f9308a019258c31049344f85f89d5229b531c845836f99b08601f113bce036f9", "388f7b0f632de8140fe337e62a37f3566500a99934c2231b6cb9fd7584b8e672"],
                    ["2f8bde4d1a07209355b4a7250a5c5128e88b84bddc619ab7cba8d569b240efe4", "d8ac222636e5e3d6d4dba9dda6c9c426f788271bab0d6840dca87d3aa6ac62d6"],
                    ["5cbdf0646e5db4eaa398f365f2ea7a0e3d419b7e0330e39ce92bddedcac4f9bc", "6aebca40ba255960a3178d6d861a54dba813d0b813fde7b5a5082628087264da"],
                    ["acd484e2f0c7f65309ad178a9f559abde09796974c57e714c35f110dfc27ccbe", "cc338921b0a7d9fd64380971763b61e9add888a4375f8e0f05cc262ac64f9c37"],
                    ["774ae7f858a9411e5ef4246b70c65aac5649980be5c17891bbec17895da008cb", "d984a032eb6b5e190243dd56d7b7b365372db1e2dff9d6a8301d74c9c953c61b"],
                    ["f28773c2d975288bc7d1d205c3748651b075fbc6610e58cddeeddf8f19405aa8", "ab0902e8d880a89758212eb65cdaf473a1a06da521fa91f29b5cb52db03ed81"],
                    ["d7924d4f7d43ea965a465ae3095ff41131e5946f3c85f79e44adbcf8e27e080e", "581e2872a86c72a683842ec228cc6defea40af2bd896d3a5c504dc9ff6a26b58"],
                    ["defdea4cdb677750a420fee807eacf21eb9898ae79b9768766e4faa04a2d4a34", "4211ab0694635168e997b0ead2a93daeced1f4a04a95c0f6cfb199f69e56eb77"],
                    ["2b4ea0a797a443d293ef5cff444f4979f06acfebd7e86d277475656138385b6c", "85e89bc037945d93b343083b5a1c86131a01f60c50269763b570c854e5c09b7a"],
                    ["352bbf4a4cdd12564f93fa332ce333301d9ad40271f8107181340aef25be59d5", "321eb4075348f534d59c18259dda3e1f4a1b3b2e71b1039c67bd3d8bcf81998c"],
                    ["2fa2104d6b38d11b0230010559879124e42ab8dfeff5ff29dc9cdadd4ecacc3f", "2de1068295dd865b64569335bd5dd80181d70ecfc882648423ba76b532b7d67"],
                    ["9248279b09b4d68dab21a9b066edda83263c3d84e09572e269ca0cd7f5453714", "73016f7bf234aade5d1aa71bdea2b1ff3fc0de2a887912ffe54a32ce97cb3402"],
                    ["daed4f2be3a8bf278e70132fb0beb7522f570e144bf615c07e996d443dee8729", "a69dce4a7d6c98e8d4a1aca87ef8d7003f83c230f3afa726ab40e52290be1c55"],
                    ["c44d12c7065d812e8acf28d7cbb19f9011ecd9e9fdf281b0e6a3b5e87d22e7db", "2119a460ce326cdc76c45926c982fdac0e106e861edf61c5a039063f0e0e6482"],
                    ["6a245bf6dc698504c89a20cfded60853152b695336c28063b61c65cbd269e6b4", "e022cf42c2bd4a708b3f5126f16a24ad8b33ba48d0423b6efd5e6348100d8a82"],
                    ["1697ffa6fd9de627c077e3d2fe541084ce13300b0bec1146f95ae57f0d0bd6a5", "b9c398f186806f5d27561506e4557433a2cf15009e498ae7adee9d63d01b2396"],
                    ["605bdb019981718b986d0f07e834cb0d9deb8360ffb7f61df982345ef27a7479", "2972d2de4f8d20681a78d93ec96fe23c26bfae84fb14db43b01e1e9056b8c49"],
                    ["62d14dab4150bf497402fdc45a215e10dcb01c354959b10cfe31c7e9d87ff33d", "80fc06bd8cc5b01098088a1950eed0db01aa132967ab472235f5642483b25eaf"],
                    ["80c60ad0040f27dade5b4b06c408e56b2c50e9f56b9b8b425e555c2f86308b6f", "1c38303f1cc5c30f26e66bad7fe72f70a65eed4cbe7024eb1aa01f56430bd57a"],
                    ["7a9375ad6167ad54aa74c6348cc54d344cc5dc9487d847049d5eabb0fa03c8fb", "d0e3fa9eca8726909559e0d79269046bdc59ea10c70ce2b02d499ec224dc7f7"],
                    ["d528ecd9b696b54c907a9ed045447a79bb408ec39b68df504bb51f459bc3ffc9", "eecf41253136e5f99966f21881fd656ebc4345405c520dbc063465b521409933"],
                    ["49370a4b5f43412ea25f514e8ecdad05266115e4a7ecb1387231808f8b45963", "758f3f41afd6ed428b3081b0512fd62a54c3f3afbb5b6764b653052a12949c9a"],
                    ["77f230936ee88cbbd73df930d64702ef881d811e0e1498e2f1c13eb1fc345d74", "958ef42a7886b6400a08266e9ba1b37896c95330d97077cbbe8eb3c7671c60d6"],
                    ["f2dac991cc4ce4b9ea44887e5c7c0bce58c80074ab9d4dbaeb28531b7739f530", "e0dedc9b3b2f8dad4da1f32dec2531df9eb5fbeb0598e4fd1a117dba703a3c37"],
                    ["463b3d9f662621fb1b4be8fbbe2520125a216cdfc9dae3debcba4850c690d45b", "5ed430d78c296c3543114306dd8622d7c622e27c970a1de31cb377b01af7307e"],
                    ["f16f804244e46e2a09232d4aff3b59976b98fac14328a2d1a32496b49998f247", "cedabd9b82203f7e13d206fcdf4e33d92a6c53c26e5cce26d6579962c4e31df6"],
                    ["caf754272dc84563b0352b7a14311af55d245315ace27c65369e15f7151d41d1", "cb474660ef35f5f2a41b643fa5e460575f4fa9b7962232a5c32f908318a04476"],
                    ["2600ca4b282cb986f85d0f1709979d8b44a09c07cb86d7c124497bc86f082120", "4119b88753c15bd6a693b03fcddbb45d5ac6be74ab5f0ef44b0be9475a7e4b40"],
                    ["7635ca72d7e8432c338ec53cd12220bc01c48685e24f7dc8c602a7746998e435", "91b649609489d613d1d5e590f78e6d74ecfc061d57048bad9e76f302c5b9c61"],
                    ["754e3239f325570cdbbf4a87deee8a66b7f2b33479d468fbc1a50743bf56cc18", "673fb86e5bda30fb3cd0ed304ea49a023ee33d0197a695d0c5d98093c536683"],
                    ["e3e6bd1071a1e96aff57859c82d570f0330800661d1c952f9fe2694691d9b9e8", "59c9e0bba394e76f40c0aa58379a3cb6a5a2283993e90c4167002af4920e37f5"],
                    ["186b483d056a033826ae73d88f732985c4ccb1f32ba35f4b4cc47fdcf04aa6eb", "3b952d32c67cf77e2e17446e204180ab21fb8090895138b4a4a797f86e80888b"],
                    ["df9d70a6b9876ce544c98561f4be4f725442e6d2b737d9c91a8321724ce0963f", "55eb2dafd84d6ccd5f862b785dc39d4ab157222720ef9da217b8c45cf2ba2417"],
                    ["5edd5cc23c51e87a497ca815d5dce0f8ab52554f849ed8995de64c5f34ce7143", "efae9c8dbc14130661e8cec030c89ad0c13c66c0d17a2905cdc706ab7399a868"],
                    ["290798c2b6476830da12fe02287e9e777aa3fba1c355b17a722d362f84614fba", "e38da76dcd440621988d00bcf79af25d5b29c094db2a23146d003afd41943e7a"],
                    ["af3c423a95d9f5b3054754efa150ac39cd29552fe360257362dfdecef4053b45", "f98a3fd831eb2b749a93b0e6f35cfb40c8cd5aa667a15581bc2feded498fd9c6"],
                    ["766dbb24d134e745cccaa28c99bf274906bb66b26dcf98df8d2fed50d884249a", "744b1152eacbe5e38dcc887980da38b897584a65fa06cedd2c924f97cbac5996"],
                    ["59dbf46f8c94759ba21277c33784f41645f7b44f6c596a58ce92e666191abe3e", "c534ad44175fbc300f4ea6ce648309a042ce739a7919798cd85e216c4a307f6e"],
                    ["f13ada95103c4537305e691e74e9a4a8dd647e711a95e73cb62dc6018cfd87b8", "e13817b44ee14de663bf4bc808341f326949e21a6a75c2570778419bdaf5733d"],
                    ["7754b4fa0e8aced06d4167a2c59cca4cda1869c06ebadfb6488550015a88522c", "30e93e864e669d82224b967c3020b8fa8d1e4e350b6cbcc537a48b57841163a2"],
                    ["948dcadf5990e048aa3874d46abef9d701858f95de8041d2a6828c99e2262519", "e491a42537f6e597d5d28a3224b1bc25df9154efbd2ef1d2cbba2cae5347d57e"],
                    ["7962414450c76c1689c7b48f8202ec37fb224cf5ac0bfa1570328a8a3d7c77ab", "100b610ec4ffb4760d5c1fc133ef6f6b12507a051f04ac5760afa5b29db83437"],
                    ["3514087834964b54b15b160644d915485a16977225b8847bb0dd085137ec47ca", "ef0afbb2056205448e1652c48e8127fc6039e77c15c2378b7e7d15a0de293311"],
                    ["d3cc30ad6b483e4bc79ce2c9dd8bc54993e947eb8df787b442943d3f7b527eaf", "8b378a22d827278d89c5e9be8f9508ae3c2ad46290358630afb34db04eede0a4"],
                    ["1624d84780732860ce1c78fcbfefe08b2b29823db913f6493975ba0ff4847610", "68651cf9b6da903e0914448c6cd9d4ca896878f5282be4c8cc06e2a404078575"],
                    ["733ce80da955a8a26902c95633e62a985192474b5af207da6df7b4fd5fc61cd4", "f5435a2bd2badf7d485a4d8b8db9fcce3e1ef8e0201e4578c54673bc1dc5ea1d"],
                    ["15d9441254945064cf1a1c33bbd3b49f8966c5092171e699ef258dfab81c045c", "d56eb30b69463e7234f5137b73b84177434800bacebfc685fc37bbe9efe4070d"],
                    ["a1d0fcf2ec9de675b612136e5ce70d271c21417c9d2b8aaaac138599d0717940", "edd77f50bcb5a3cab2e90737309667f2641462a54070f3d519212d39c197a629"],
                    ["e22fbe15c0af8ccc5780c0735f84dbe9a790badee8245c06c7ca37331cb36980", "a855babad5cd60c88b430a69f53a1a7a38289154964799be43d06d77d31da06"],
                    ["311091dd9860e8e20ee13473c1155f5f69635e394704eaa74009452246cfa9b3", "66db656f87d1f04fffd1f04788c06830871ec5a64feee685bd80f0b1286d8374"],
                    ["34c1fd04d301be89b31c0442d3e6ac24883928b45a9340781867d4232ec2dbdf", "9414685e97b1b5954bd46f730174136d57f1ceeb487443dc5321857ba73abee"],
                    ["f219ea5d6b54701c1c14de5b557eb42a8d13f3abbcd08affcc2a5e6b049b8d63", "4cb95957e83d40b0f73af4544cccf6b1f4b08d3c07b27fb8d8c2962a400766d1"],
                    ["d7b8740f74a8fbaab1f683db8f45de26543a5490bca627087236912469a0b448", "fa77968128d9c92ee1010f337ad4717eff15db5ed3c049b3411e0315eaa4593b"],
                    ["32d31c222f8f6f0ef86f7c98d3a3335ead5bcd32abdd94289fe4d3091aa824bf", "5f3032f5892156e39ccd3d7915b9e1da2e6dac9e6f26e961118d14b8462e1661"],
                    ["7461f371914ab32671045a155d9831ea8793d77cd59592c4340f86cbc18347b5", "8ec0ba238b96bec0cbdddcae0aa442542eee1ff50c986ea6b39847b3cc092ff6"],
                    ["ee079adb1df1860074356a25aa38206a6d716b2c3e67453d287698bad7b2b2d6", "8dc2412aafe3be5c4c5f37e0ecc5f9f6a446989af04c4e25ebaac479ec1c8c1e"],
                    ["16ec93e447ec83f0467b18302ee620f7e65de331874c9dc72bfd8616ba9da6b5", "5e4631150e62fb40d0e8c2a7ca5804a39d58186a50e497139626778e25b0674d"],
                    ["eaa5f980c245f6f038978290afa70b6bd8855897f98b6aa485b96065d537bd99", "f65f5d3e292c2e0819a528391c994624d784869d7e6ea67fb18041024edc07dc"],
                    ["78c9407544ac132692ee1910a02439958ae04877151342ea96c4b6b35a49f51", "f3e0319169eb9b85d5404795539a5e68fa1fbd583c064d2462b675f194a3ddb4"],
                    ["494f4be219a1a77016dcd838431aea0001cdc8ae7a6fc688726578d9702857a5", "42242a969283a5f339ba7f075e36ba2af925ce30d767ed6e55f4b031880d562c"],
                    ["a598a8030da6d86c6bc7f2f5144ea549d28211ea58faa70ebf4c1e665c1fe9b5", "204b5d6f84822c307e4b4a7140737aec23fc63b65b35f86a10026dbd2d864e6b"],
                    ["c41916365abb2b5d09192f5f2dbeafec208f020f12570a184dbadc3e58595997", "4f14351d0087efa49d245b328984989d5caf9450f34bfc0ed16e96b58fa9913"],
                    ["841d6063a586fa475a724604da03bc5b92a2e0d2e0a36acfe4c73a5514742881", "73867f59c0659e81904f9a1c7543698e62562d6744c169ce7a36de01a8d6154"],
                    ["5e95bb399a6971d376026947f89bde2f282b33810928be4ded112ac4d70e20d5", "39f23f366809085beebfc71181313775a99c9aed7d8ba38b161384c746012865"],
                    ["36e4641a53948fd476c39f8a99fd974e5ec07564b5315d8bf99471bca0ef2f66", "d2424b1b1abe4eb8164227b085c9aa9456ea13493fd563e06fd51cf5694c78fc"],
                    ["336581ea7bfbbb290c191a2f507a41cf5643842170e914faeab27c2c579f726", "ead12168595fe1be99252129b6e56b3391f7ab1410cd1e0ef3dcdcabd2fda224"],
                    ["8ab89816dadfd6b6a1f2634fcf00ec8403781025ed6890c4849742706bd43ede", "6fdcef09f2f6d0a044e654aef624136f503d459c3e89845858a47a9129cdd24e"],
                    ["1e33f1a746c9c5778133344d9299fcaa20b0938e8acff2544bb40284b8c5fb94", "60660257dd11b3aa9c8ed618d24edff2306d320f1d03010e33a7d2057f3b3b6"],
                    ["85b7c1dcb3cec1b7ee7f30ded79dd20a0ed1f4cc18cbcfcfa410361fd8f08f31", "3d98a9cdd026dd43f39048f25a8847f4fcafad1895d7a633c6fed3c35e999511"],
                    ["29df9fbd8d9e46509275f4b125d6d45d7fbe9a3b878a7af872a2800661ac5f51", "b4c4fe99c775a606e2d8862179139ffda61dc861c019e55cd2876eb2a27d84b"],
                    ["a0b1cae06b0a847a3fea6e671aaf8adfdfe58ca2f768105c8082b2e449fce252", "ae434102edde0958ec4b19d917a6a28e6b72da1834aff0e650f049503a296cf2"],
                    ["4e8ceafb9b3e9a136dc7ff67e840295b499dfb3b2133e4ba113f2e4c0e121e5", "cf2174118c8b6d7a4b48f6d534ce5c79422c086a63460502b827ce62a326683c"],
                    ["d24a44e047e19b6f5afb81c7ca2f69080a5076689a010919f42725c2b789a33b", "6fb8d5591b466f8fc63db50f1c0f1c69013f996887b8244d2cdec417afea8fa3"],
                    ["ea01606a7a6c9cdd249fdfcfacb99584001edd28abbab77b5104e98e8e3b35d4", "322af4908c7312b0cfbfe369f7a7b3cdb7d4494bc2823700cfd652188a3ea98d"],
                    ["af8addbf2b661c8a6c6328655eb96651252007d8c5ea31be4ad196de8ce2131f", "6749e67c029b85f52a034eafd096836b2520818680e26ac8f3dfbcdb71749700"],
                    ["e3ae1974566ca06cc516d47e0fb165a674a3dabcfca15e722f0e3450f45889", "2aeabe7e4531510116217f07bf4d07300de97e4874f81f533420a72eeb0bd6a4"],
                    ["591ee355313d99721cf6993ffed1e3e301993ff3ed258802075ea8ced397e246", "b0ea558a113c30bea60fc4775460c7901ff0b053d25ca2bdeee98f1a4be5d196"],
                    ["11396d55fda54c49f19aa97318d8da61fa8584e47b084945077cf03255b52984", "998c74a8cd45ac01289d5833a7beb4744ff536b01b257be4c5767bea93ea57a4"],
                    ["3c5d2a1ba39c5a1790000738c9e0c40b8dcdfd5468754b6405540157e017aa7a", "b2284279995a34e2f9d4de7396fc18b80f9b8b9fdd270f6661f79ca4c81bd257"],
                    ["cc8704b8a60a0defa3a99a7299f2e9c3fbc395afb04ac078425ef8a1793cc030", "bdd46039feed17881d1e0862db347f8cf395b74fc4bcdc4e940b74e3ac1f1b13"],
                    ["c533e4f7ea8555aacd9777ac5cad29b97dd4defccc53ee7ea204119b2889b197", "6f0a256bc5efdf429a2fb6242f1a43a2d9b925bb4a4b3a26bb8e0f45eb596096"],
                    ["c14f8f2ccb27d6f109f6d08d03cc96a69ba8c34eec07bbcf566d48e33da6593", "c359d6923bb398f7fd4473e16fe1c28475b740dd098075e6c0e8649113dc3a38"],
                    ["a6cbc3046bc6a450bac24789fa17115a4c9739ed75f8f21ce441f72e0b90e6ef", "21ae7f4680e889bb130619e2c0f95a360ceb573c70603139862afd617fa9b9f"],
                    ["347d6d9a02c48927ebfb86c1359b1caf130a3c0267d11ce6344b39f99d43cc38", "60ea7f61a353524d1c987f6ecec92f086d565ab687870cb12689ff1e31c74448"],
                    ["da6545d2181db8d983f7dcb375ef5866d47c67b1bf31c8cf855ef7437b72656a", "49b96715ab6878a79e78f07ce5680c5d6673051b4935bd897fea824b77dc208a"],
                    ["c40747cc9d012cb1a13b8148309c6de7ec25d6945d657146b9d5994b8feb1111", "5ca560753be2a12fc6de6caf2cb489565db936156b9514e1bb5e83037e0fa2d4"],
                    ["4e42c8ec82c99798ccf3a610be870e78338c7f713348bd34c8203ef4037f3502", "7571d74ee5e0fb92a7a8b33a07783341a5492144cc54bcc40a94473693606437"],
                    ["3775ab7089bc6af823aba2e1af70b236d251cadb0c86743287522a1b3b0dedea", "be52d107bcfa09d8bcb9736a828cfa7fac8db17bf7a76a2c42ad961409018cf7"],
                    ["cee31cbf7e34ec379d94fb814d3d775ad954595d1314ba8846959e3e82f74e26", "8fd64a14c06b589c26b947ae2bcf6bfa0149ef0be14ed4d80f448a01c43b1c6d"],
                    ["b4f9eaea09b6917619f6ea6a4eb5464efddb58fd45b1ebefcdc1a01d08b47986", "39e5c9925b5a54b07433a4f18c61726f8bb131c012ca542eb24a8ac07200682a"],
                    ["d4263dfc3d2df923a0179a48966d30ce84e2515afc3dccc1b77907792ebcc60e", "62dfaf07a0f78feb30e30d6295853ce189e127760ad6cf7fae164e122a208d54"],
                    ["48457524820fa65a4f8d35eb6930857c0032acc0a4a2de422233eeda897612c4", "25a748ab367979d98733c38a1fa1c2e7dc6cc07db2d60a9ae7a76aaa49bd0f77"],
                    ["dfeeef1881101f2cb11644f3a2afdfc2045e19919152923f367a1767c11cceda", "ecfb7056cf1de042f9420bab396793c0c390bde74b4bbdff16a83ae09a9a7517"],
                    ["6d7ef6b17543f8373c573f44e1f389835d89bcbc6062ced36c82df83b8fae859", "cd450ec335438986dfefa10c57fea9bcc521a0959b2d80bbf74b190dca712d10"],
                    ["e75605d59102a5a2684500d3b991f2e3f3c88b93225547035af25af66e04541f", "f5c54754a8f71ee540b9b48728473e314f729ac5308b06938360990e2bfad125"],
                    ["eb98660f4c4dfaa06a2be453d5020bc99a0c2e60abe388457dd43fefb1ed620c", "6cb9a8876d9cb8520609af3add26cd20a0a7cd8a9411131ce85f44100099223e"],
                    ["13e87b027d8514d35939f2e6892b19922154596941888336dc3563e3b8dba942", "fef5a3c68059a6dec5d624114bf1e91aac2b9da568d6abeb2570d55646b8adf1"],
                    ["ee163026e9fd6fe017c38f06a5be6fc125424b371ce2708e7bf4491691e5764a", "1acb250f255dd61c43d94ccc670d0f58f49ae3fa15b96623e5430da0ad6c62b2"],
                    ["b268f5ef9ad51e4d78de3a750c2dc89b1e626d43505867999932e5db33af3d80", "5f310d4b3c99b9ebb19f77d41c1dee018cf0d34fd4191614003e945a1216e423"],
                    ["ff07f3118a9df035e9fad85eb6c7bfe42b02f01ca99ceea3bf7ffdba93c4750d", "438136d603e858a3a5c440c38eccbaddc1d2942114e2eddd4740d098ced1f0d8"],
                    ["8d8b9855c7c052a34146fd20ffb658bea4b9f69e0d825ebec16e8c3ce2b526a1", "cdb559eedc2d79f926baf44fb84ea4d44bcf50fee51d7ceb30e2e7f463036758"],
                    ["52db0b5384dfbf05bfa9d472d7ae26dfe4b851ceca91b1eba54263180da32b63", "c3b997d050ee5d423ebaf66a6db9f57b3180c902875679de924b69d84a7b375"],
                    ["e62f9490d3d51da6395efd24e80919cc7d0f29c3f3fa48c6fff543becbd43352", "6d89ad7ba4876b0b22c2ca280c682862f342c8591f1daf5170e07bfd9ccafa7d"],
                    ["7f30ea2476b399b4957509c88f77d0191afa2ff5cb7b14fd6d8e7d65aaab1193", "ca5ef7d4b231c94c3b15389a5f6311e9daff7bb67b103e9880ef4bff637acaec"],
                    ["5098ff1e1d9f14fb46a210fada6c903fef0fb7b4a1dd1d9ac60a0361800b7a00", "9731141d81fc8f8084d37c6e7542006b3ee1b40d60dfe5362a5b132fd17ddc0"],
                    ["32b78c7de9ee512a72895be6b9cbefa6e2f3c4ccce445c96b9f2c81e2778ad58", "ee1849f513df71e32efc3896ee28260c73bb80547ae2275ba497237794c8753c"],
                    ["e2cb74fddc8e9fbcd076eef2a7c72b0ce37d50f08269dfc074b581550547a4f7", "d3aa2ed71c9dd2247a62df062736eb0baddea9e36122d2be8641abcb005cc4a4"],
                    ["8438447566d4d7bedadc299496ab357426009a35f235cb141be0d99cd10ae3a8", "c4e1020916980a4da5d01ac5e6ad330734ef0d7906631c4f2390426b2edd791f"],
                    ["4162d488b89402039b584c6fc6c308870587d9c46f660b878ab65c82c711d67e", "67163e903236289f776f22c25fb8a3afc1732f2b84b4e95dbda47ae5a0852649"],
                    ["3fad3fa84caf0f34f0f89bfd2dcf54fc175d767aec3e50684f3ba4a4bf5f683d", "cd1bc7cb6cc407bb2f0ca647c718a730cf71872e7d0d2a53fa20efcdfe61826"],
                    ["674f2600a3007a00568c1a7ce05d0816c1fb84bf1370798f1c69532faeb1a86b", "299d21f9413f33b3edf43b257004580b70db57da0b182259e09eecc69e0d38a5"],
                    ["d32f4da54ade74abb81b815ad1fb3b263d82d6c692714bcff87d29bd5ee9f08f", "f9429e738b8e53b968e99016c059707782e14f4535359d582fc416910b3eea87"],
                    ["30e4e670435385556e593657135845d36fbb6931f72b08cb1ed954f1e3ce3ff6", "462f9bce619898638499350113bbc9b10a878d35da70740dc695a559eb88db7b"],
                    ["be2062003c51cc3004682904330e4dee7f3dcd10b01e580bf1971b04d4cad297", "62188bc49d61e5428573d48a74e1c655b1c61090905682a0d5558ed72dccb9bc"],
                    ["93144423ace3451ed29e0fb9ac2af211cb6e84a601df5993c419859fff5df04a", "7c10dfb164c3425f5c71a3f9d7992038f1065224f72bb9d1d902a6d13037b47c"],
                    ["b015f8044f5fcbdcf21ca26d6c34fb8197829205c7b7d2a7cb66418c157b112c", "ab8c1e086d04e813744a655b2df8d5f83b3cdc6faa3088c1d3aea1454e3a1d5f"],
                    ["d5e9e1da649d97d89e4868117a465a3a4f8a18de57a140d36b3f2af341a21b52", "4cb04437f391ed73111a13cc1d4dd0db1693465c2240480d8955e8592f27447a"],
                    ["d3ae41047dd7ca065dbf8ed77b992439983005cd72e16d6f996a5316d36966bb", "bd1aeb21ad22ebb22a10f0303417c6d964f8cdd7df0aca614b10dc14d125ac46"],
                    ["463e2763d885f958fc66cdd22800f0a487197d0a82e377b49f80af87c897b065", "bfefacdb0e5d0fd7df3a311a94de062b26b80c61fbc97508b79992671ef7ca7f"],
                    ["7985fdfd127c0567c6f53ec1bb63ec3158e597c40bfe747c83cddfc910641917", "603c12daf3d9862ef2b25fe1de289aed24ed291e0ec6708703a5bd567f32ed03"],
                    ["74a1ad6b5f76e39db2dd249410eac7f99e74c59cb83d2d0ed5ff1543da7703e9", "cc6157ef18c9c63cd6193d83631bbea0093e0968942e8c33d5737fd790e0db08"],
                    ["30682a50703375f602d416664ba19b7fc9bab42c72747463a71d0896b22f6da3", "553e04f6b018b4fa6c8f39e7f311d3176290d0e0f19ca73f17714d9977a22ff8"],
                    ["9e2158f0d7c0d5f26c3791efefa79597654e7a2b2464f52b1ee6c1347769ef57", "712fcdd1b9053f09003a3481fa7762e9ffd7c8ef35a38509e2fbf2629008373"],
                    ["176e26989a43c9cfeba4029c202538c28172e566e3c4fce7322857f3be327d66", "ed8cc9d04b29eb877d270b4878dc43c19aefd31f4eee09ee7b47834c1fa4b1c3"],
                    ["75d46efea3771e6e68abb89a13ad747ecf1892393dfc4f1b7004788c50374da8", "9852390a99507679fd0b86fd2b39a868d7efc22151346e1a3ca4726586a6bed8"],
                    ["809a20c67d64900ffb698c4c825f6d5f2310fb0451c869345b7319f645605721", "9e994980d9917e22b76b061927fa04143d096ccc54963e6a5ebfa5f3f8e286c1"],
                    ["1b38903a43f7f114ed4500b4eac7083fdefece1cf29c63528d563446f972c180", "4036edc931a60ae889353f77fd53de4a2708b26b6f5da72ad3394119daf408f9"]
                ]
            }
        }
    }, function (e, t, r) {
        "use strict";
        var n = r(4),
            i = r(162),
            o = r(10),
            a = r(50),
            s = r(48),
            f = o.assert,
            c = r(163),
            u = r(164);

        function h(e) {
            if (!(this instanceof h)) return new h(e);
            "string" == typeof e && (f(Object.prototype.hasOwnProperty.call(a, e), "Unknown curve " + e), e = a[e]), e instanceof a.PresetCurve && (e = {
                curve: e
            }), this.curve = e.curve.curve, this.n = this.curve.n, this.nh = this.n.ushrn(1), this.g = this.curve.g, this.g = e.curve.g, this.g.precompute(e.curve.n.bitLength() + 1), this.hash = e.hash || e.curve.hash
        }
        e.exports = h, h.prototype.keyPair = function (e) {
            return new c(this, e)
        }, h.prototype.keyFromPrivate = function (e, t) {
            return c.fromPrivate(this, e, t)
        }, h.prototype.keyFromPublic = function (e, t) {
            return c.fromPublic(this, e, t)
        }, h.prototype.genKeyPair = function (e) {
            e || (e = {});
            for (var t = new i({
                    hash: this.hash,
                    pers: e.pers,
                    persEnc: e.persEnc || "utf8",
                    entropy: e.entropy || s(this.hash.hmacStrength),
                    entropyEnc: e.entropy && e.entropyEnc || "utf8",
                    nonce: this.n.toArray()
                }), r = this.n.byteLength(), o = this.n.sub(new n(2));;) {
                var a = new n(t.generate(r));
                if (!(a.cmp(o) > 0)) return a.iaddn(1), this.keyFromPrivate(a)
            }
        }, h.prototype._truncateToN = function (e, t) {
            var r = 8 * e.byteLength() - this.n.bitLength();
            return r > 0 && (e = e.ushrn(r)), !t && e.cmp(this.n) >= 0 ? e.sub(this.n) : e
        }, h.prototype.sign = function (e, t, r, o) {
            "object" == typeof r && (o = r, r = null), o || (o = {}), t = this.keyFromPrivate(t, r), e = this._truncateToN(new n(e, 16));
            for (var a = this.n.byteLength(), s = t.getPrivate().toArray("be", a), f = e.toArray("be", a), c = new i({
                    hash: this.hash,
                    entropy: s,
                    nonce: f,
                    pers: o.pers,
                    persEnc: o.persEnc || "utf8"
                }), h = this.n.sub(new n(1)), d = 0;; d++) {
                var l = o.k ? o.k(d) : new n(c.generate(this.n.byteLength()));
                if (!((l = this._truncateToN(l, !0)).cmpn(1) <= 0 || l.cmp(h) >= 0)) {
                    var p = this.g.mul(l);
                    if (!p.isInfinity()) {
                        var b = p.getX(),
                            y = b.umod(this.n);
                        if (0 !== y.cmpn(0)) {
                            var v = l.invm(this.n).mul(y.mul(t.getPrivate()).iadd(e));
                            if (0 !== (v = v.umod(this.n)).cmpn(0)) {
                                var g = (p.getY().isOdd() ? 1 : 0) | (0 !== b.cmp(y) ? 2 : 0);
                                return o.canonical && v.cmp(this.nh) > 0 && (v = this.n.sub(v), g ^= 1), new u({
                                    r: y,
                                    s: v,
                                    recoveryParam: g
                                })
                            }
                        }
                    }
                }
            }
        }, h.prototype.verify = function (e, t, r, i) {
            e = this._truncateToN(new n(e, 16)), r = this.keyFromPublic(r, i);
            var o = (t = new u(t, "hex")).r,
                a = t.s;
            if (o.cmpn(1) < 0 || o.cmp(this.n) >= 0) return !1;
            if (a.cmpn(1) < 0 || a.cmp(this.n) >= 0) return !1;
            var s, f = a.invm(this.n),
                c = f.mul(e).umod(this.n),
                h = f.mul(o).umod(this.n);
            return this.curve._maxwellTrick ? !(s = this.g.jmulAdd(c, r.getPublic(), h)).isInfinity() && s.eqXToP(o) : !(s = this.g.mulAdd(c, r.getPublic(), h)).isInfinity() && 0 === s.getX().umod(this.n).cmp(o)
        }, h.prototype.recoverPubKey = function (e, t, r, i) {
            f((3 & r) === r, "The recovery param is more than two bits"), t = new u(t, i);
            var o = this.n,
                a = new n(e),
                s = t.r,
                c = t.s,
                h = 1 & r,
                d = r >> 1;
            if (s.cmp(this.curve.p.umod(this.curve.n)) >= 0 && d) throw new Error("Unable to find sencond key candinate");
            s = d ? this.curve.pointFromX(s.add(this.curve.n), h) : this.curve.pointFromX(s, h);
            var l = t.r.invm(o),
                p = o.sub(a).mul(l).umod(o),
                b = c.mul(l).umod(o);
            return this.g.mulAdd(p, s, b)
        }, h.prototype.getKeyRecoveryParam = function (e, t, r, n) {
            if (null !== (t = new u(t, n)).recoveryParam) return t.recoveryParam;
            for (var i = 0; i < 4; i++) {
                var o;
                try {
                    o = this.recoverPubKey(e, t, i)
                } catch (e) {
                    continue
                }
                if (o.eq(r)) return i
            }
            throw new Error("Unable to find valid recovery factor")
        }
    }, function (e, t, r) {
        "use strict";
        var n = r(51),
            i = r(83),
            o = r(9);

        function a(e) {
            if (!(this instanceof a)) return new a(e);
            this.hash = e.hash, this.predResist = !!e.predResist, this.outLen = this.hash.outSize, this.minEntropy = e.minEntropy || this.hash.hmacStrength, this._reseed = null, this.reseedInterval = null, this.K = null, this.V = null;
            var t = i.toArray(e.entropy, e.entropyEnc || "hex"),
                r = i.toArray(e.nonce, e.nonceEnc || "hex"),
                n = i.toArray(e.pers, e.persEnc || "hex");
            o(t.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._init(t, r, n)
        }
        e.exports = a, a.prototype._init = function (e, t, r) {
            var n = e.concat(t).concat(r);
            this.K = new Array(this.outLen / 8), this.V = new Array(this.outLen / 8);
            for (var i = 0; i < this.V.length; i++) this.K[i] = 0, this.V[i] = 1;
            this._update(n), this._reseed = 1, this.reseedInterval = 281474976710656
        }, a.prototype._hmac = function () {
            return new n.hmac(this.hash, this.K)
        }, a.prototype._update = function (e) {
            var t = this._hmac().update(this.V).update([0]);
            e && (t = t.update(e)), this.K = t.digest(), this.V = this._hmac().update(this.V).digest(), e && (this.K = this._hmac().update(this.V).update([1]).update(e).digest(), this.V = this._hmac().update(this.V).digest())
        }, a.prototype.reseed = function (e, t, r, n) {
            "string" != typeof t && (n = r, r = t, t = null), e = i.toArray(e, t), r = i.toArray(r, n), o(e.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._update(e.concat(r || [])), this._reseed = 1
        }, a.prototype.generate = function (e, t, r, n) {
            if (this._reseed > this.reseedInterval) throw new Error("Reseed is required");
            "string" != typeof t && (n = r, r = t, t = null), r && (r = i.toArray(r, n || "hex"), this._update(r));
            for (var o = []; o.length < e;) this.V = this._hmac().update(this.V).digest(), o = o.concat(this.V);
            var a = o.slice(0, e);
            return this._update(r), this._reseed++, i.encode(a, t)
        }
    }, function (e, t, r) {
        "use strict";
        var n = r(4),
            i = r(10).assert;

        function o(e, t) {
            this.ec = e, this.priv = null, this.pub = null, t.priv && this._importPrivate(t.priv, t.privEnc), t.pub && this._importPublic(t.pub, t.pubEnc)
        }
        e.exports = o, o.fromPublic = function (e, t, r) {
            return t instanceof o ? t : new o(e, {
                pub: t,
                pubEnc: r
            })
        }, o.fromPrivate = function (e, t, r) {
            return t instanceof o ? t : new o(e, {
                priv: t,
                privEnc: r
            })
        }, o.prototype.validate = function () {
            var e = this.getPublic();
            return e.isInfinity() ? {
                result: !1,
                reason: "Invalid public key"
            } : e.validate() ? e.mul(this.ec.curve.n).isInfinity() ? {
                result: !0,
                reason: null
            } : {
                result: !1,
                reason: "Public key * N != O"
            } : {
                result: !1,
                reason: "Public key is not a point"
            }
        }, o.prototype.getPublic = function (e, t) {
            return "string" == typeof e && (t = e, e = null), this.pub || (this.pub = this.ec.g.mul(this.priv)), t ? this.pub.encode(t, e) : this.pub
        }, o.prototype.getPrivate = function (e) {
            return "hex" === e ? this.priv.toString(16, 2) : this.priv
        }, o.prototype._importPrivate = function (e, t) {
            this.priv = new n(e, t || 16), this.priv = this.priv.umod(this.ec.curve.n)
        }, o.prototype._importPublic = function (e, t) {
            if (e.x || e.y) return "mont" === this.ec.curve.type ? i(e.x, "Need x coordinate") : "short" !== this.ec.curve.type && "edwards" !== this.ec.curve.type || i(e.x && e.y, "Need both x and y coordinate"), void(this.pub = this.ec.curve.point(e.x, e.y));
            this.pub = this.ec.curve.decodePoint(e, t)
        }, o.prototype.derive = function (e) {
            return e.validate() || i(e.validate(), "public point not validated"), e.mul(this.priv).getX()
        }, o.prototype.sign = function (e, t, r) {
            return this.ec.sign(e, this, t, r)
        }, o.prototype.verify = function (e, t) {
            return this.ec.verify(e, t, this)
        }, o.prototype.inspect = function () {
            return "<Key priv: " + (this.priv && this.priv.toString(16, 2)) + " pub: " + (this.pub && this.pub.inspect()) + " >"
        }
    }, function (e, t, r) {
        "use strict";
        var n = r(4),
            i = r(10),
            o = i.assert;

        function a(e, t) {
            if (e instanceof a) return e;
            this._importDER(e, t) || (o(e.r && e.s, "Signature without r or s"), this.r = new n(e.r, 16), this.s = new n(e.s, 16), void 0 === e.recoveryParam ? this.recoveryParam = null : this.recoveryParam = e.recoveryParam)
        }

        function s(e, t) {
            var r = e[t.place++];
            if (!(128 & r)) return r;
            var n = 15 & r;
            if (0 === n || n > 4) return !1;
            for (var i = 0, o = 0, a = t.place; o < n; o++, a++) i <<= 8, i |= e[a], i >>>= 0;
            return !(i <= 127) && (t.place = a, i)
        }

        function f(e) {
            for (var t = 0, r = e.length - 1; !e[t] && !(128 & e[t + 1]) && t < r;) t++;
            return 0 === t ? e : e.slice(t)
        }

        function c(e, t) {
            if (t < 128) e.push(t);
            else {
                var r = 1 + (Math.log(t) / Math.LN2 >>> 3);
                for (e.push(128 | r); --r;) e.push(t >>> (r << 3) & 255);
                e.push(t)
            }
        }
        e.exports = a, a.prototype._importDER = function (e, t) {
            e = i.toArray(e, t);
            var r = new function () {
                this.place = 0
            };
            if (48 !== e[r.place++]) return !1;
            var o = s(e, r);
            if (!1 === o) return !1;
            if (o + r.place !== e.length) return !1;
            if (2 !== e[r.place++]) return !1;
            var a = s(e, r);
            if (!1 === a) return !1;
            var f = e.slice(r.place, a + r.place);
            if (r.place += a, 2 !== e[r.place++]) return !1;
            var c = s(e, r);
            if (!1 === c) return !1;
            if (e.length !== c + r.place) return !1;
            var u = e.slice(r.place, c + r.place);
            if (0 === f[0]) {
                if (!(128 & f[1])) return !1;
                f = f.slice(1)
            }
            if (0 === u[0]) {
                if (!(128 & u[1])) return !1;
                u = u.slice(1)
            }
            return this.r = new n(f), this.s = new n(u), this.recoveryParam = null, !0
        }, a.prototype.toDER = function (e) {
            var t = this.r.toArray(),
                r = this.s.toArray();
            for (128 & t[0] && (t = [0].concat(t)), 128 & r[0] && (r = [0].concat(r)), t = f(t), r = f(r); !(r[0] || 128 & r[1]);) r = r.slice(1);
            var n = [2];
            c(n, t.length), (n = n.concat(t)).push(2), c(n, r.length);
            var o = n.concat(r),
                a = [48];
            return c(a, o.length), a = a.concat(o), i.encode(a, e)
        }
    }, function (e, t, r) {
        "use strict";
        var n = r(51),
            i = r(50),
            o = r(10),
            a = o.assert,
            s = o.parseBytes,
            f = r(166),
            c = r(167);

        function u(e) {
            if (a("ed25519" === e, "only tested with ed25519 so far"), !(this instanceof u)) return new u(e);
            e = i[e].curve, this.curve = e, this.g = e.g, this.g.precompute(e.n.bitLength() + 1), this.pointClass = e.point().constructor, this.encodingLength = Math.ceil(e.n.bitLength() / 8), this.hash = n.sha512
        }
        e.exports = u, u.prototype.sign = function (e, t) {
            e = s(e);
            var r = this.keyFromSecret(t),
                n = this.hashInt(r.messagePrefix(), e),
                i = this.g.mul(n),
                o = this.encodePoint(i),
                a = this.hashInt(o, r.pubBytes(), e).mul(r.priv()),
                f = n.add(a).umod(this.curve.n);
            return this.makeSignature({
                R: i,
                S: f,
                Rencoded: o
            })
        }, u.prototype.verify = function (e, t, r) {
            e = s(e), t = this.makeSignature(t);
            var n = this.keyFromPublic(r),
                i = this.hashInt(t.Rencoded(), n.pubBytes(), e),
                o = this.g.mul(t.S());
            return t.R().add(n.pub().mul(i)).eq(o)
        }, u.prototype.hashInt = function () {
            for (var e = this.hash(), t = 0; t < arguments.length; t++) e.update(arguments[t]);
            return o.intFromLE(e.digest()).umod(this.curve.n)
        }, u.prototype.keyFromPublic = function (e) {
            return f.fromPublic(this, e)
        }, u.prototype.keyFromSecret = function (e) {
            return f.fromSecret(this, e)
        }, u.prototype.makeSignature = function (e) {
            return e instanceof c ? e : new c(this, e)
        }, u.prototype.encodePoint = function (e) {
            var t = e.getY().toArray("le", this.encodingLength);
            return t[this.encodingLength - 1] |= e.getX().isOdd() ? 128 : 0, t
        }, u.prototype.decodePoint = function (e) {
            var t = (e = o.parseBytes(e)).length - 1,
                r = e.slice(0, t).concat(-129 & e[t]),
                n = 0 != (128 & e[t]),
                i = o.intFromLE(r);
            return this.curve.pointFromY(i, n)
        }, u.prototype.encodeInt = function (e) {
            return e.toArray("le", this.encodingLength)
        }, u.prototype.decodeInt = function (e) {
            return o.intFromLE(e)
        }, u.prototype.isPoint = function (e) {
            return e instanceof this.pointClass
        }
    }, function (e, t, r) {
        "use strict";
        var n = r(10),
            i = n.assert,
            o = n.parseBytes,
            a = n.cachedProperty;

        function s(e, t) {
            this.eddsa = e, this._secret = o(t.secret), e.isPoint(t.pub) ? this._pub = t.pub : this._pubBytes = o(t.pub)
        }
        s.fromPublic = function (e, t) {
            return t instanceof s ? t : new s(e, {
                pub: t
            })
        }, s.fromSecret = function (e, t) {
            return t instanceof s ? t : new s(e, {
                secret: t
            })
        }, s.prototype.secret = function () {
            return this._secret
        }, a(s, "pubBytes", function () {
            return this.eddsa.encodePoint(this.pub())
        }), a(s, "pub", function () {
            return this._pubBytes ? this.eddsa.decodePoint(this._pubBytes) : this.eddsa.g.mul(this.priv())
        }), a(s, "privBytes", function () {
            var e = this.eddsa,
                t = this.hash(),
                r = e.encodingLength - 1,
                n = t.slice(0, e.encodingLength);
            return n[0] &= 248, n[r] &= 127, n[r] |= 64, n
        }), a(s, "priv", function () {
            return this.eddsa.decodeInt(this.privBytes())
        }), a(s, "hash", function () {
            return this.eddsa.hash().update(this.secret()).digest()
        }), a(s, "messagePrefix", function () {
            return this.hash().slice(this.eddsa.encodingLength)
        }), s.prototype.sign = function (e) {
            return i(this._secret, "KeyPair can only verify"), this.eddsa.sign(e, this)
        }, s.prototype.verify = function (e, t) {
            return this.eddsa.verify(e, t, this)
        }, s.prototype.getSecret = function (e) {
            return i(this._secret, "KeyPair is public only"), n.encode(this.secret(), e)
        }, s.prototype.getPublic = function (e) {
            return n.encode(this.pubBytes(), e)
        }, e.exports = s
    }, function (e, t, r) {
        "use strict";
        var n = r(4),
            i = r(10),
            o = i.assert,
            a = i.cachedProperty,
            s = i.parseBytes;

        function f(e, t) {
            this.eddsa = e, "object" != typeof t && (t = s(t)), Array.isArray(t) && (t = {
                R: t.slice(0, e.encodingLength),
                S: t.slice(e.encodingLength)
            }), o(t.R && t.S, "Signature without R or S"), e.isPoint(t.R) && (this._R = t.R), t.S instanceof n && (this._S = t.S), this._Rencoded = Array.isArray(t.R) ? t.R : t.Rencoded, this._Sencoded = Array.isArray(t.S) ? t.S : t.Sencoded
        }
        a(f, "S", function () {
            return this.eddsa.decodeInt(this.Sencoded())
        }), a(f, "R", function () {
            return this.eddsa.decodePoint(this.Rencoded())
        }), a(f, "Rencoded", function () {
            return this.eddsa.encodePoint(this.R())
        }), a(f, "Sencoded", function () {
            return this.eddsa.encodeInt(this.S())
        }), f.prototype.toBytes = function () {
            return this.Rencoded().concat(this.Sencoded())
        }, f.prototype.toHex = function () {
            return i.encode(this.toBytes(), "hex").toUpperCase()
        }, e.exports = f
    }, function (e, t, r) {
        "use strict";
        var n = r(88);
        t.certificate = r(174);
        var i = n.define("RSAPrivateKey", function () {
            this.seq().obj(this.key("version").int(), this.key("modulus").int(), this.key("publicExponent").int(), this.key("privateExponent").int(), this.key("prime1").int(), this.key("prime2").int(), this.key("exponent1").int(), this.key("exponent2").int(), this.key("coefficient").int())
        });
        t.RSAPrivateKey = i;
        var o = n.define("RSAPublicKey", function () {
            this.seq().obj(this.key("modulus").int(), this.key("publicExponent").int())
        });
        t.RSAPublicKey = o;
        var a = n.define("SubjectPublicKeyInfo", function () {
            this.seq().obj(this.key("algorithm").use(s), this.key("subjectPublicKey").bitstr())
        });
        t.PublicKey = a;
        var s = n.define("AlgorithmIdentifier", function () {
                this.seq().obj(this.key("algorithm").objid(), this.key("none").null_().optional(), this.key("curve").objid().optional(), this.key("params").seq().obj(this.key("p").int(), this.key("q").int(), this.key("g").int()).optional())
            }),
            f = n.define("PrivateKeyInfo", function () {
                this.seq().obj(this.key("version").int(), this.key("algorithm").use(s), this.key("subjectPrivateKey").octstr())
            });
        t.PrivateKey = f;
        var c = n.define("EncryptedPrivateKeyInfo", function () {
            this.seq().obj(this.key("algorithm").seq().obj(this.key("id").objid(), this.key("decrypt").seq().obj(this.key("kde").seq().obj(this.key("id").objid(), this.key("kdeparams").seq().obj(this.key("salt").octstr(), this.key("iters").int())), this.key("cipher").seq().obj(this.key("algo").objid(), this.key("iv").octstr()))), this.key("subjectPrivateKey").octstr())
        });
        t.EncryptedPrivateKey = c;
        var u = n.define("DSAPrivateKey", function () {
            this.seq().obj(this.key("version").int(), this.key("p").int(), this.key("q").int(), this.key("g").int(), this.key("pub_key").int(), this.key("priv_key").int())
        });
        t.DSAPrivateKey = u, t.DSAparam = n.define("DSAparam", function () {
            this.int()
        });
        var h = n.define("ECPrivateKey", function () {
            this.seq().obj(this.key("version").int(), this.key("privateKey").octstr(), this.key("parameters").optional().explicit(0).use(d), this.key("publicKey").optional().explicit(1).bitstr())
        });
        t.ECPrivateKey = h;
        var d = n.define("ECParameters", function () {
            this.choice({
                namedCurve: this.objid()
            })
        });
        t.signature = n.define("signature", function () {
            this.seq().obj(this.key("r").int(), this.key("s").int())
        })
    }, function (e, t, r) {
        "use strict";
        const n = r(89),
            i = r(91),
            o = r(1);

        function a(e, t) {
            this.name = e, this.body = t, this.decoders = {}, this.encoders = {}
        }
        t.define = function (e, t) {
            return new a(e, t)
        }, a.prototype._createNamed = function (e) {
            const t = this.name;

            function r(e) {
                this._initNamed(e, t)
            }
            return o(r, e), r.prototype._initNamed = function (t, r) {
                e.call(this, t, r)
            }, new r(this)
        }, a.prototype._getDecoder = function (e) {
            return e = e || "der", this.decoders.hasOwnProperty(e) || (this.decoders[e] = this._createNamed(i[e])), this.decoders[e]
        }, a.prototype.decode = function (e, t, r) {
            return this._getDecoder(t).decode(e, r)
        }, a.prototype._getEncoder = function (e) {
            return e = e || "der", this.encoders.hasOwnProperty(e) || (this.encoders[e] = this._createNamed(n[e])), this.encoders[e]
        }, a.prototype.encode = function (e, t, r) {
            return this._getEncoder(t).encode(e, r)
        }
    }, function (e, t, r) {
        "use strict";
        const n = r(1),
            i = r(90);

        function o(e) {
            i.call(this, e), this.enc = "pem"
        }
        n(o, i), e.exports = o, o.prototype.encode = function (e, t) {
            const r = i.prototype.encode.call(this, e).toString("base64"),
                n = ["-----BEGIN " + t.label + "-----"];
            for (let e = 0; e < r.length; e += 64) n.push(r.slice(e, e + 64));
            return n.push("-----END " + t.label + "-----"), n.join("\n")
        }
    }, function (e, t, r) {
        "use strict";
        const n = r(1),
            i = r(52).Buffer,
            o = r(92);

        function a(e) {
            o.call(this, e), this.enc = "pem"
        }
        n(a, o), e.exports = a, a.prototype.decode = function (e, t) {
            const r = e.toString().split(/[\r\n]+/g),
                n = t.label.toUpperCase(),
                a = /^-----(BEGIN|END) ([^-]+)-----$/;
            let s = -1,
                f = -1;
            for (let e = 0; e < r.length; e++) {
                const t = r[e].match(a);
                if (null !== t && t[2] === n) {
                    if (-1 !== s) {
                        if ("END" !== t[1]) break;
                        f = e;
                        break
                    }
                    if ("BEGIN" !== t[1]) break;
                    s = e
                }
            }
            if (-1 === s || -1 === f) throw new Error("PEM section not found for: " + n);
            const c = r.slice(s + 1, f).join("");
            c.replace(/[^a-z0-9+/=]+/gi, "");
            const u = i.from(c, "base64");
            return o.prototype.decode.call(this, u, t)
        }
    }, function (e, t, r) {
        "use strict";
        const n = t;
        n.Reporter = r(54).Reporter, n.DecoderBuffer = r(28).DecoderBuffer, n.EncoderBuffer = r(28).EncoderBuffer, n.Node = r(53)
    }, function (e, t, r) {
        "use strict";
        const n = t;
        n._reverse = function (e) {
            const t = {};
            return Object.keys(e).forEach(function (r) {
                (0 | r) == r && (r |= 0);
                const n = e[r];
                t[n] = r
            }), t
        }, n.der = r(55)
    }, function (e, t, r) {
        "use strict";
        var n = r(88),
            i = n.define("Time", function () {
                this.choice({
                    utcTime: this.utctime(),
                    generalTime: this.gentime()
                })
            }),
            o = n.define("AttributeTypeValue", function () {
                this.seq().obj(this.key("type").objid(), this.key("value").any())
            }),
            a = n.define("AlgorithmIdentifier", function () {
                this.seq().obj(this.key("algorithm").objid(), this.key("parameters").optional(), this.key("curve").objid().optional())
            }),
            s = n.define("SubjectPublicKeyInfo", function () {
                this.seq().obj(this.key("algorithm").use(a), this.key("subjectPublicKey").bitstr())
            }),
            f = n.define("RelativeDistinguishedName", function () {
                this.setof(o)
            }),
            c = n.define("RDNSequence", function () {
                this.seqof(f)
            }),
            u = n.define("Name", function () {
                this.choice({
                    rdnSequence: this.use(c)
                })
            }),
            h = n.define("Validity", function () {
                this.seq().obj(this.key("notBefore").use(i), this.key("notAfter").use(i))
            }),
            d = n.define("Extension", function () {
                this.seq().obj(this.key("extnID").objid(), this.key("critical").bool().def(!1), this.key("extnValue").octstr())
            }),
            l = n.define("TBSCertificate", function () {
                this.seq().obj(this.key("version").explicit(0).int().optional(), this.key("serialNumber").int(), this.key("signature").use(a), this.key("issuer").use(u), this.key("validity").use(h), this.key("subject").use(u), this.key("subjectPublicKeyInfo").use(s), this.key("issuerUniqueID").implicit(1).bitstr().optional(), this.key("subjectUniqueID").implicit(2).bitstr().optional(), this.key("extensions").explicit(3).seqof(d).optional())
            }),
            p = n.define("X509Certificate", function () {
                this.seq().obj(this.key("tbsCertificate").use(l), this.key("signatureAlgorithm").use(a), this.key("signatureValue").bitstr())
            });
        e.exports = p
    }, function (e) {
        e.exports = JSON.parse('{"2.16.840.1.101.3.4.1.1":"aes-128-ecb","2.16.840.1.101.3.4.1.2":"aes-128-cbc","2.16.840.1.101.3.4.1.3":"aes-128-ofb","2.16.840.1.101.3.4.1.4":"aes-128-cfb","2.16.840.1.101.3.4.1.21":"aes-192-ecb","2.16.840.1.101.3.4.1.22":"aes-192-cbc","2.16.840.1.101.3.4.1.23":"aes-192-ofb","2.16.840.1.101.3.4.1.24":"aes-192-cfb","2.16.840.1.101.3.4.1.41":"aes-256-ecb","2.16.840.1.101.3.4.1.42":"aes-256-cbc","2.16.840.1.101.3.4.1.43":"aes-256-ofb","2.16.840.1.101.3.4.1.44":"aes-256-cfb"}')
    }, function (e, t, r) {
        var n = /Proc-Type: 4,ENCRYPTED[\n\r]+DEK-Info: AES-((?:128)|(?:192)|(?:256))-CBC,([0-9A-H]+)[\n\r]+([0-9A-z\n\r+/=]+)[\n\r]+/m,
            i = /^-----BEGIN ((?:.*? KEY)|CERTIFICATE)-----/m,
            o = /^-----BEGIN ((?:.*? KEY)|CERTIFICATE)-----([0-9A-z\n\r+/=]+)-----END \1-----$/m,
            a = r(33),
            s = r(46),
            f = r(0).Buffer;
        e.exports = function (e, t) {
            var r, c = e.toString(),
                u = c.match(n);
            if (u) {
                var h = "aes" + u[1],
                    d = f.from(u[2], "hex"),
                    l = f.from(u[3].replace(/[\r\n]/g, ""), "base64"),
                    p = a(t, d.slice(0, 8), parseInt(u[1], 10)).key,
                    b = [],
                    y = s.createDecipheriv(h, p, d);
                b.push(y.update(l)), b.push(y.final()), r = f.concat(b)
            } else {
                var v = c.match(o);
                r = f.from(v[2].replace(/[\r\n]/g, ""), "base64")
            }
            return {
                tag: c.match(i)[1],
                data: r
            }
        }
    }, function (e, t, r) {
        var n = r(0).Buffer,
            i = r(4),
            o = r(34).ec,
            a = r(36),
            s = r(93);

        function f(e, t) {
            if (e.cmpn(0) <= 0) throw new Error("invalid sig");
            if (e.cmp(t) >= t) throw new Error("invalid sig")
        }
        e.exports = function (e, t, r, c, u) {
            var h = a(r);
            if ("ec" === h.type) {
                if ("ecdsa" !== c && "ecdsa/rsa" !== c) throw new Error("wrong public key type");
                return function (e, t, r) {
                    var n = s[r.data.algorithm.curve.join(".")];
                    if (!n) throw new Error("unknown curve " + r.data.algorithm.curve.join("."));
                    var i = new o(n),
                        a = r.data.subjectPrivateKey.data;
                    return i.verify(t, e, a)
                }(e, t, h)
            }
            if ("dsa" === h.type) {
                if ("dsa" !== c) throw new Error("wrong public key type");
                return function (e, t, r) {
                    var n = r.data.p,
                        o = r.data.q,
                        s = r.data.g,
                        c = r.data.pub_key,
                        u = a.signature.decode(e, "der"),
                        h = u.s,
                        d = u.r;
                    f(h, o), f(d, o);
                    var l = i.mont(n),
                        p = h.invm(o);
                    return 0 === s.toRed(l).redPow(new i(t).mul(p).mod(o)).fromRed().mul(c.toRed(l).redPow(d.mul(p).mod(o)).fromRed()).mod(n).mod(o).cmp(d)
                }(e, t, h)
            }
            if ("rsa" !== c && "ecdsa/rsa" !== c) throw new Error("wrong public key type");
            t = n.concat([u, t]);
            for (var d = h.modulus.byteLength(), l = [1], p = 0; t.length + l.length + 2 < d;) l.push(255), p++;
            l.push(0);
            for (var b = -1; ++b < t.length;) l.push(t[b]);
            l = n.from(l);
            var y = i.mont(h.modulus);
            e = (e = new i(e).toRed(y)).redPow(new i(h.publicExponent)), e = n.from(e.fromRed().toArray());
            var v = p < 8 ? 1 : 0;
            for (d = Math.min(e.length, l.length), e.length !== l.length && (v = 1), b = -1; ++b < d;) v |= e[b] ^ l[b];
            return 0 === v
        }
    }, function (e, t, r) {
        (function (t) {
            var n = r(34),
                i = r(4);
            e.exports = function (e) {
                return new a(e)
            };
            var o = {
                secp256k1: {
                    name: "secp256k1",
                    byteLength: 32
                },
                secp224r1: {
                    name: "p224",
                    byteLength: 28
                },
                prime256v1: {
                    name: "p256",
                    byteLength: 32
                },
                prime192v1: {
                    name: "p192",
                    byteLength: 24
                },
                ed25519: {
                    name: "ed25519",
                    byteLength: 32
                },
                secp384r1: {
                    name: "p384",
                    byteLength: 48
                },
                secp521r1: {
                    name: "p521",
                    byteLength: 66
                }
            };

            function a(e) {
                this.curveType = o[e], this.curveType || (this.curveType = {
                    name: e
                }), this.curve = new n.ec(this.curveType.name), this.keys = void 0
            }

            function s(e, r, n) {
                Array.isArray(e) || (e = e.toArray());
                var i = new t(e);
                if (n && i.length < n) {
                    var o = new t(n - i.length);
                    o.fill(0), i = t.concat([o, i])
                }
                return r ? i.toString(r) : i
            }
            o.p224 = o.secp224r1, o.p256 = o.secp256r1 = o.prime256v1, o.p192 = o.secp192r1 = o.prime192v1, o.p384 = o.secp384r1, o.p521 = o.secp521r1, a.prototype.generateKeys = function (e, t) {
                return this.keys = this.curve.genKeyPair(), this.getPublicKey(e, t)
            }, a.prototype.computeSecret = function (e, r, n) {
                return r = r || "utf8", t.isBuffer(e) || (e = new t(e, r)), s(this.curve.keyFromPublic(e).getPublic().mul(this.keys.getPrivate()).getX(), n, this.curveType.byteLength)
            }, a.prototype.getPublicKey = function (e, t) {
                var r = this.keys.getPublic("compressed" === t, !0);
                return "hybrid" === t && (r[r.length - 1] % 2 ? r[0] = 7 : r[0] = 6), s(r, e)
            }, a.prototype.getPrivateKey = function (e) {
                return s(this.keys.getPrivate(), e)
            }, a.prototype.setPublicKey = function (e, r) {
                return r = r || "utf8", t.isBuffer(e) || (e = new t(e, r)), this.keys._importPublic(e), this
            }, a.prototype.setPrivateKey = function (e, r) {
                r = r || "utf8", t.isBuffer(e) || (e = new t(e, r));
                var n = new i(e);
                return n = n.toString(16), this.keys = this.curve.genKeyPair(), this.keys._importPrivate(n), this
            }
        }).call(this, r(5).Buffer)
    }, function (e, t, r) {
        t.publicEncrypt = r(180), t.privateDecrypt = r(181), t.privateEncrypt = function (e, r) {
            return t.publicEncrypt(e, r, !0)
        }, t.publicDecrypt = function (e, r) {
            return t.privateDecrypt(e, r, !0)
        }
    }, function (e, t, r) {
        var n = r(36),
            i = r(18),
            o = r(19),
            a = r(94),
            s = r(95),
            f = r(4),
            c = r(96),
            u = r(49),
            h = r(0).Buffer;
        e.exports = function (e, t, r) {
            var d;
            d = e.padding ? e.padding : r ? 1 : 4;
            var l, p = n(e);
            if (4 === d) l = function (e, t) {
                var r = e.modulus.byteLength(),
                    n = t.length,
                    c = o("sha1").update(h.alloc(0)).digest(),
                    u = c.length,
                    d = 2 * u;
                if (n > r - d - 2) throw new Error("message too long");
                var l = h.alloc(r - n - d - 2),
                    p = r - u - 1,
                    b = i(u),
                    y = s(h.concat([c, l, h.alloc(1, 1), t], p), a(b, p)),
                    v = s(b, a(y, u));
                return new f(h.concat([h.alloc(1), v, y], r))
            }(p, t);
            else if (1 === d) l = function (e, t, r) {
                var n, o = t.length,
                    a = e.modulus.byteLength();
                if (o > a - 11) throw new Error("message too long");
                n = r ? h.alloc(a - o - 3, 255) : function (e) {
                    var t, r = h.allocUnsafe(e),
                        n = 0,
                        o = i(2 * e),
                        a = 0;
                    for (; n < e;) a === o.length && (o = i(2 * e), a = 0), (t = o[a++]) && (r[n++] = t);
                    return r
                }(a - o - 3);
                return new f(h.concat([h.from([0, r ? 1 : 2]), n, h.alloc(1), t], a))
            }(p, t, r);
            else {
                if (3 !== d) throw new Error("unknown padding");
                if ((l = new f(t)).cmp(p.modulus) >= 0) throw new Error("data too long for modulus")
            }
            return r ? u(l, p) : c(l, p)
        }
    }, function (e, t, r) {
        var n = r(36),
            i = r(94),
            o = r(95),
            a = r(4),
            s = r(49),
            f = r(19),
            c = r(96),
            u = r(0).Buffer;
        e.exports = function (e, t, r) {
            var h;
            h = e.padding ? e.padding : r ? 1 : 4;
            var d, l = n(e),
                p = l.modulus.byteLength();
            if (t.length > p || new a(t).cmp(l.modulus) >= 0) throw new Error("decryption error");
            d = r ? c(new a(t), l) : s(t, l);
            var b = u.alloc(p - d.length);
            if (d = u.concat([b, d], p), 4 === h) return function (e, t) {
                var r = e.modulus.byteLength(),
                    n = f("sha1").update(u.alloc(0)).digest(),
                    a = n.length;
                if (0 !== t[0]) throw new Error("decryption error");
                var s = t.slice(1, a + 1),
                    c = t.slice(a + 1),
                    h = o(s, i(c, a)),
                    d = o(c, i(h, r - a - 1));
                if (function (e, t) {
                        e = u.from(e), t = u.from(t);
                        var r = 0,
                            n = e.length;
                        e.length !== t.length && (r++, n = Math.min(e.length, t.length));
                        var i = -1;
                        for (; ++i < n;) r += e[i] ^ t[i];
                        return r
                    }(n, d.slice(0, a))) throw new Error("decryption error");
                var l = a;
                for (; 0 === d[l];) l++;
                if (1 !== d[l++]) throw new Error("decryption error");
                return d.slice(l)
            }(l, d);
            if (1 === h) return function (e, t, r) {
                var n = t.slice(0, 2),
                    i = 2,
                    o = 0;
                for (; 0 !== t[i++];)
                    if (i >= t.length) {
                        o++;
                        break
                    } var a = t.slice(2, i - 1);
                ("0002" !== n.toString("hex") && !r || "0001" !== n.toString("hex") && r) && o++;
                a.length < 8 && o++;
                if (o) throw new Error("decryption error");
                return t.slice(i)
            }(0, d, r);
            if (3 === h) return d;
            throw new Error("unknown padding")
        }
    }, function (e, t, r) {
        "use strict";
        (function (e, n) {
            function i() {
                throw new Error("secure random number generation not supported by this browser\nuse chrome, FireFox or Internet Explorer 11")
            }
            var o = r(0),
                a = r(18),
                s = o.Buffer,
                f = o.kMaxLength,
                c = e.crypto || e.msCrypto,
                u = Math.pow(2, 32) - 1;

            function h(e, t) {
                if ("number" != typeof e || e != e) throw new TypeError("offset must be a number");
                if (e > u || e < 0) throw new TypeError("offset must be a uint32");
                if (e > f || e > t) throw new RangeError("offset out of range")
            }

            function d(e, t, r) {
                if ("number" != typeof e || e != e) throw new TypeError("size must be a number");
                if (e > u || e < 0) throw new TypeError("size must be a uint32");
                if (e + t > r || e > f) throw new RangeError("buffer too small")
            }

            function l(e, t, r, i) {
                if (n.browser) {
                    var o = e.buffer,
                        s = new Uint8Array(o, t, r);
                    return c.getRandomValues(s), i ? void n.nextTick(function () {
                        i(null, e)
                    }) : e
                }
                if (!i) return a(r).copy(e, t), e;
                a(r, function (r, n) {
                    if (r) return i(r);
                    n.copy(e, t), i(null, e)
                })
            }
            c && c.getRandomValues || !n.browser ? (t.randomFill = function (t, r, n, i) {
                if (!(s.isBuffer(t) || t instanceof e.Uint8Array)) throw new TypeError('"buf" argument must be a Buffer or Uint8Array');
                if ("function" == typeof r) i = r, r = 0, n = t.length;
                else if ("function" == typeof n) i = n, n = t.length - r;
                else if ("function" != typeof i) throw new TypeError('"cb" argument must be a function');
                return h(r, t.length), d(n, r, t.length), l(t, r, n, i)
            }, t.randomFillSync = function (t, r, n) {
                void 0 === r && (r = 0);
                if (!(s.isBuffer(t) || t instanceof e.Uint8Array)) throw new TypeError('"buf" argument must be a Buffer or Uint8Array');
                h(r, t.length), void 0 === n && (n = t.length - r);
                return d(n, r, t.length), l(t, r, n)
            }) : (t.randomFill = i, t.randomFillSync = i)
        }).call(this, r(7), r(11))
    }, function (e, t, r) {
        const n = r(184),
            i = r(185),
            o = r(97);

        function a(e, t) {
            return void 0 === e ? t : (n.isBoolean(e, o.COMPRESSED_TYPE_INVALID), e)
        }
        e.exports = function (e) {
            return {
                privateKeyVerify: t => (n.isBuffer(t, o.EC_PRIVATE_KEY_TYPE_INVALID), 32 === t.length && e.privateKeyVerify(t)),
                privateKeyExport(t, r) {
                    n.isBuffer(t, o.EC_PRIVATE_KEY_TYPE_INVALID), n.isBufferLength(t, 32, o.EC_PRIVATE_KEY_LENGTH_INVALID), r = a(r, !0);
                    const s = e.privateKeyExport(t, r);
                    return i.privateKeyExport(t, s, r)
                },
                privateKeyImport(t) {
                    if (n.isBuffer(t, o.EC_PRIVATE_KEY_TYPE_INVALID), (t = i.privateKeyImport(t)) && 32 === t.length && e.privateKeyVerify(t)) return t;
                    throw new Error(o.EC_PRIVATE_KEY_IMPORT_DER_FAIL)
                },
                privateKeyNegate: t => (n.isBuffer(t, o.EC_PRIVATE_KEY_TYPE_INVALID), n.isBufferLength(t, 32, o.EC_PRIVATE_KEY_LENGTH_INVALID), e.privateKeyNegate(t)),
                privateKeyModInverse: t => (n.isBuffer(t, o.EC_PRIVATE_KEY_TYPE_INVALID), n.isBufferLength(t, 32, o.EC_PRIVATE_KEY_LENGTH_INVALID), e.privateKeyModInverse(t)),
                privateKeyTweakAdd: (t, r) => (n.isBuffer(t, o.EC_PRIVATE_KEY_TYPE_INVALID), n.isBufferLength(t, 32, o.EC_PRIVATE_KEY_LENGTH_INVALID), n.isBuffer(r, o.TWEAK_TYPE_INVALID), n.isBufferLength(r, 32, o.TWEAK_LENGTH_INVALID), e.privateKeyTweakAdd(t, r)),
                privateKeyTweakMul: (t, r) => (n.isBuffer(t, o.EC_PRIVATE_KEY_TYPE_INVALID), n.isBufferLength(t, 32, o.EC_PRIVATE_KEY_LENGTH_INVALID), n.isBuffer(r, o.TWEAK_TYPE_INVALID), n.isBufferLength(r, 32, o.TWEAK_LENGTH_INVALID), e.privateKeyTweakMul(t, r)),
                publicKeyCreate: (t, r) => (n.isBuffer(t, o.EC_PRIVATE_KEY_TYPE_INVALID), n.isBufferLength(t, 32, o.EC_PRIVATE_KEY_LENGTH_INVALID), r = a(r, !0), e.publicKeyCreate(t, r)),
                publicKeyConvert: (t, r) => (n.isBuffer(t, o.EC_PUBLIC_KEY_TYPE_INVALID), n.isBufferLength2(t, 33, 65, o.EC_PUBLIC_KEY_LENGTH_INVALID), r = a(r, !0), e.publicKeyConvert(t, r)),
                publicKeyVerify: t => (n.isBuffer(t, o.EC_PUBLIC_KEY_TYPE_INVALID), e.publicKeyVerify(t)),
                publicKeyTweakAdd: (t, r, i) => (n.isBuffer(t, o.EC_PUBLIC_KEY_TYPE_INVALID), n.isBufferLength2(t, 33, 65, o.EC_PUBLIC_KEY_LENGTH_INVALID), n.isBuffer(r, o.TWEAK_TYPE_INVALID), n.isBufferLength(r, 32, o.TWEAK_LENGTH_INVALID), i = a(i, !0), e.publicKeyTweakAdd(t, r, i)),
                publicKeyTweakMul: (t, r, i) => (n.isBuffer(t, o.EC_PUBLIC_KEY_TYPE_INVALID), n.isBufferLength2(t, 33, 65, o.EC_PUBLIC_KEY_LENGTH_INVALID), n.isBuffer(r, o.TWEAK_TYPE_INVALID), n.isBufferLength(r, 32, o.TWEAK_LENGTH_INVALID), i = a(i, !0), e.publicKeyTweakMul(t, r, i)),
                publicKeyCombine(t, r) {
                    n.isArray(t, o.EC_PUBLIC_KEYS_TYPE_INVALID), n.isLengthGTZero(t, o.EC_PUBLIC_KEYS_LENGTH_INVALID);
                    for (let e = 0; e < t.length; ++e) n.isBuffer(t[e], o.EC_PUBLIC_KEY_TYPE_INVALID), n.isBufferLength2(t[e], 33, 65, o.EC_PUBLIC_KEY_LENGTH_INVALID);
                    return r = a(r, !0), e.publicKeyCombine(t, r)
                },
                signatureNormalize: t => (n.isBuffer(t, o.ECDSA_SIGNATURE_TYPE_INVALID), n.isBufferLength(t, 64, o.ECDSA_SIGNATURE_LENGTH_INVALID), e.signatureNormalize(t)),
                signatureExport(t) {
                    n.isBuffer(t, o.ECDSA_SIGNATURE_TYPE_INVALID), n.isBufferLength(t, 64, o.ECDSA_SIGNATURE_LENGTH_INVALID);
                    const r = e.signatureExport(t);
                    return i.signatureExport(r)
                },
                signatureImport(t) {
                    n.isBuffer(t, o.ECDSA_SIGNATURE_TYPE_INVALID), n.isLengthGTZero(t, o.ECDSA_SIGNATURE_LENGTH_INVALID);
                    const r = i.signatureImport(t);
                    if (r) return e.signatureImport(r);
                    throw new Error(o.ECDSA_SIGNATURE_PARSE_DER_FAIL)
                },
                signatureImportLax(t) {
                    n.isBuffer(t, o.ECDSA_SIGNATURE_TYPE_INVALID), n.isLengthGTZero(t, o.ECDSA_SIGNATURE_LENGTH_INVALID);
                    const r = i.signatureImportLax(t);
                    if (r) return e.signatureImport(r);
                    throw new Error(o.ECDSA_SIGNATURE_PARSE_DER_FAIL)
                },
                sign(t, r, i) {
                    n.isBuffer(t, o.MSG32_TYPE_INVALID), n.isBufferLength(t, 32, o.MSG32_LENGTH_INVALID), n.isBuffer(r, o.EC_PRIVATE_KEY_TYPE_INVALID), n.isBufferLength(r, 32, o.EC_PRIVATE_KEY_LENGTH_INVALID);
                    let a = null,
                        s = null;
                    return void 0 !== i && (n.isObject(i, o.OPTIONS_TYPE_INVALID), void 0 !== i.data && (n.isBuffer(i.data, o.OPTIONS_DATA_TYPE_INVALID), n.isBufferLength(i.data, 32, o.OPTIONS_DATA_LENGTH_INVALID), a = i.data), void 0 !== i.noncefn && (n.isFunction(i.noncefn, o.OPTIONS_NONCEFN_TYPE_INVALID), s = i.noncefn)), e.sign(t, r, s, a)
                },
                verify: (t, r, i) => (n.isBuffer(t, o.MSG32_TYPE_INVALID), n.isBufferLength(t, 32, o.MSG32_LENGTH_INVALID), n.isBuffer(r, o.ECDSA_SIGNATURE_TYPE_INVALID), n.isBufferLength(r, 64, o.ECDSA_SIGNATURE_LENGTH_INVALID), n.isBuffer(i, o.EC_PUBLIC_KEY_TYPE_INVALID), n.isBufferLength2(i, 33, 65, o.EC_PUBLIC_KEY_LENGTH_INVALID), e.verify(t, r, i)),
                recover: (t, r, i, s) => (n.isBuffer(t, o.MSG32_TYPE_INVALID), n.isBufferLength(t, 32, o.MSG32_LENGTH_INVALID), n.isBuffer(r, o.ECDSA_SIGNATURE_TYPE_INVALID), n.isBufferLength(r, 64, o.ECDSA_SIGNATURE_LENGTH_INVALID), n.isNumber(i, o.RECOVERY_ID_TYPE_INVALID), n.isNumberInInterval(i, -1, 4, o.RECOVERY_ID_VALUE_INVALID), s = a(s, !0), e.recover(t, r, i, s)),
                ecdh: (t, r) => (n.isBuffer(t, o.EC_PUBLIC_KEY_TYPE_INVALID), n.isBufferLength2(t, 33, 65, o.EC_PUBLIC_KEY_LENGTH_INVALID), n.isBuffer(r, o.EC_PRIVATE_KEY_TYPE_INVALID), n.isBufferLength(r, 32, o.EC_PRIVATE_KEY_LENGTH_INVALID), e.ecdh(t, r)),
                ecdhUnsafe: (t, r, i) => (n.isBuffer(t, o.EC_PUBLIC_KEY_TYPE_INVALID), n.isBufferLength2(t, 33, 65, o.EC_PUBLIC_KEY_LENGTH_INVALID), n.isBuffer(r, o.EC_PRIVATE_KEY_TYPE_INVALID), n.isBufferLength(r, 32, o.EC_PRIVATE_KEY_LENGTH_INVALID), i = a(i, !0), e.ecdhUnsafe(t, r, i))
            }
        }
    }, function (e, t, r) {
        (function (e, r) {
            const n = Object.prototype.toString;
            "undefined" == typeof window && ({
                Buffer: r
            } = e), t.isArray = function (e, t) {
                if (!Array.isArray(e)) throw TypeError(t)
            }, t.isBoolean = function (e, t) {
                if ("[object Boolean]" !== n.call(e)) throw TypeError(t)
            }, t.isBuffer = function (e, t) {
                if (!r.isBuffer(e)) throw TypeError(t)
            }, t.isFunction = function (e, t) {
                if ("[object Function]" !== n.call(e)) throw TypeError(t)
            }, t.isNumber = function (e, t) {
                if ("[object Number]" !== n.call(e)) throw TypeError(t)
            }, t.isObject = function (e, t) {
                if ("[object Object]" !== n.call(e)) throw TypeError(t)
            }, t.isBufferLength = function (e, t, r) {
                if (e.length !== t) throw RangeError(r)
            }, t.isBufferLength2 = function (e, t, r, n) {
                if (e.length !== t && e.length !== r) throw RangeError(n)
            }, t.isLengthGTZero = function (e, t) {
                if (0 === e.length) throw RangeError(t)
            }, t.isNumberInInterval = function (e, t, r, n) {
                if (e <= t || e >= r) throw RangeError(n)
            }
        }).call(this, r(7), r(5).Buffer)
    }, function (e, t, r) {
        const n = r(0).Buffer,
            i = r(186),
            o = n.from([48, 129, 211, 2, 1, 1, 4, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 160, 129, 133, 48, 129, 130, 2, 1, 1, 48, 44, 6, 7, 42, 134, 72, 206, 61, 1, 1, 2, 33, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 254, 255, 255, 252, 47, 48, 6, 4, 1, 0, 4, 1, 7, 4, 33, 2, 121, 190, 102, 126, 249, 220, 187, 172, 85, 160, 98, 149, 206, 135, 11, 7, 2, 155, 252, 219, 45, 206, 40, 217, 89, 242, 129, 91, 22, 248, 23, 152, 2, 33, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 254, 186, 174, 220, 230, 175, 72, 160, 59, 191, 210, 94, 140, 208, 54, 65, 65, 2, 1, 1, 161, 36, 3, 34, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
            a = n.from([48, 130, 1, 19, 2, 1, 1, 4, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 160, 129, 165, 48, 129, 162, 2, 1, 1, 48, 44, 6, 7, 42, 134, 72, 206, 61, 1, 1, 2, 33, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 254, 255, 255, 252, 47, 48, 6, 4, 1, 0, 4, 1, 7, 4, 65, 4, 121, 190, 102, 126, 249, 220, 187, 172, 85, 160, 98, 149, 206, 135, 11, 7, 2, 155, 252, 219, 45, 206, 40, 217, 89, 242, 129, 91, 22, 248, 23, 152, 72, 58, 218, 119, 38, 163, 196, 101, 93, 164, 251, 252, 14, 17, 8, 168, 253, 23, 180, 72, 166, 133, 84, 25, 156, 71, 208, 143, 251, 16, 212, 184, 2, 33, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 254, 186, 174, 220, 230, 175, 72, 160, 59, 191, 210, 94, 140, 208, 54, 65, 65, 2, 1, 1, 161, 68, 3, 66, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
        t.privateKeyExport = function (e, t, r) {
            const i = n.from(r ? o : a);
            return e.copy(i, r ? 8 : 9), t.copy(i, r ? 181 : 214), i
        }, t.privateKeyImport = function (e) {
            const t = e.length;
            let r = 0;
            if (t < r + 1 || 48 !== e[r]) return;
            if (t < (r += 1) + 1 || !(128 & e[r])) return;
            const n = 127 & e[r];
            if (r += 1, n < 1 || n > 2) return;
            if (t < r + n) return;
            const i = e[r + n - 1] | (n > 1 ? e[r + n - 2] << 8 : 0);
            return t < (r += n) + i || t < r + 3 || 2 !== e[r] || 1 !== e[r + 1] || 1 !== e[r + 2] || t < (r += 3) + 2 || 4 !== e[r] || e[r + 1] > 32 || t < r + 2 + e[r + 1] ? void 0 : e.slice(r + 2, r + 2 + e[r + 1])
        }, t.signatureExport = function (e) {
            const t = n.concat([n.from([0]), e.r]);
            for (var r = 33, o = 0; r > 1 && 0 === t[o] && !(128 & t[o + 1]); --r, ++o);
            const a = n.concat([n.from([0]), e.s]);
            for (var s = 33, f = 0; s > 1 && 0 === a[f] && !(128 & a[f + 1]); --s, ++f);
            return i.encode(t.slice(o), a.slice(f))
        }, t.signatureImport = function (e) {
            const t = n.alloc(32, 0),
                r = n.alloc(32, 0);
            try {
                var o = i.decode(e);
                if (33 === o.r.length && 0 === o.r[0] && (o.r = o.r.slice(1)), o.r.length > 32) throw new Error("R length is too long");
                if (33 === o.s.length && 0 === o.s[0] && (o.s = o.s.slice(1)), o.s.length > 32) throw new Error("S length is too long")
            } catch (e) {
                return
            }
            return o.r.copy(t, 32 - o.r.length), o.s.copy(r, 32 - o.s.length), {
                r: t,
                s: r
            }
        }, t.signatureImportLax = function (e) {
            const t = n.alloc(32, 0),
                r = n.alloc(32, 0),
                i = e.length;
            let o = 0;
            if (48 !== e[o++]) return;
            let a = e[o++];
            if (128 & a && (o += a - 128) > i) return;
            if (2 !== e[o++]) return;
            let s = e[o++];
            if (128 & s) {
                if (o + (a = s - 128) > i) return;
                for (; a > 0 && 0 === e[o]; o += 1, a -= 1);
                for (s = 0; a > 0; o += 1, a -= 1) s = (s << 8) + e[o]
            }
            if (s > i - o) return;
            let f = o;
            if (o += s, 2 !== e[o++]) return;
            let c = e[o++];
            if (128 & c) {
                if (o + (a = c - 128) > i) return;
                for (; a > 0 && 0 === e[o]; o += 1, a -= 1);
                for (c = 0; a > 0; o += 1, a -= 1) c = (c << 8) + e[o]
            }
            if (c > i - o) return;
            let u = o;
            for (o += c; s > 0 && 0 === e[f]; s -= 1, f += 1);
            if (s > 32) return;
            const h = e.slice(f, f + s);
            for (h.copy(t, 32 - h.length); c > 0 && 0 === e[u]; c -= 1, u += 1);
            if (c > 32) return;
            const d = e.slice(u, u + c);
            return d.copy(r, 32 - d.length), {
                r: t,
                s: r
            }
        }
    }, function (e, t, r) {
        var n = r(0).Buffer;
        e.exports = {
            check: function (e) {
                if (e.length < 8) return !1;
                if (e.length > 72) return !1;
                if (48 !== e[0]) return !1;
                if (e[1] !== e.length - 2) return !1;
                if (2 !== e[2]) return !1;
                var t = e[3];
                if (0 === t) return !1;
                if (5 + t >= e.length) return !1;
                if (2 !== e[4 + t]) return !1;
                var r = e[5 + t];
                return !(0 === r || 6 + t + r !== e.length || 128 & e[4] || t > 1 && 0 === e[4] && !(128 & e[5]) || 128 & e[t + 6] || r > 1 && 0 === e[t + 6] && !(128 & e[t + 7]))
            },
            decode: function (e) {
                if (e.length < 8) throw new Error("DER sequence length is too short");
                if (e.length > 72) throw new Error("DER sequence length is too long");
                if (48 !== e[0]) throw new Error("Expected DER sequence");
                if (e[1] !== e.length - 2) throw new Error("DER sequence length is invalid");
                if (2 !== e[2]) throw new Error("Expected DER integer");
                var t = e[3];
                if (0 === t) throw new Error("R length is zero");
                if (5 + t >= e.length) throw new Error("R length is too long");
                if (2 !== e[4 + t]) throw new Error("Expected DER integer (2)");
                var r = e[5 + t];
                if (0 === r) throw new Error("S length is zero");
                if (6 + t + r !== e.length) throw new Error("S length is invalid");
                if (128 & e[4]) throw new Error("R value is negative");
                if (t > 1 && 0 === e[4] && !(128 & e[5])) throw new Error("R value excessively padded");
                if (128 & e[t + 6]) throw new Error("S value is negative");
                if (r > 1 && 0 === e[t + 6] && !(128 & e[t + 7])) throw new Error("S value excessively padded");
                return {
                    r: e.slice(4, 4 + t),
                    s: e.slice(6 + t)
                }
            },
            encode: function (e, t) {
                var r = e.length,
                    i = t.length;
                if (0 === r) throw new Error("R length is zero");
                if (0 === i) throw new Error("S length is zero");
                if (r > 33) throw new Error("R length is too long");
                if (i > 33) throw new Error("S length is too long");
                if (128 & e[0]) throw new Error("R value is negative");
                if (128 & t[0]) throw new Error("S value is negative");
                if (r > 1 && 0 === e[0] && !(128 & e[1])) throw new Error("R value excessively padded");
                if (i > 1 && 0 === t[0] && !(128 & t[1])) throw new Error("S value excessively padded");
                var o = n.allocUnsafe(6 + r + i);
                return o[0] = 48, o[1] = o.length - 2, o[2] = 2, o[3] = e.length, e.copy(o, 4), o[4 + r] = 2, o[5 + r] = t.length, t.copy(o, 6 + r), o
            }
        }
    }, function (e, t, r) {
        const n = r(0).Buffer,
            i = r(19),
            o = r(4),
            a = r(34).ec,
            s = r(97),
            f = new a("secp256k1"),
            c = f.curve;

        function u(e) {
            return 32 === e.length ? function (e) {
                let t = new o(e);
                if (t.cmp(c.p) >= 0) return null;
                let r = (t = t.toRed(c.red)).redSqr().redIMul(t).redIAdd(c.b).redSqrt();
                return f.keyPair({
                    pub: {
                        x: t,
                        y: r
                    }
                })
            }(e) : 64 === e.length ? function (e, t) {
                let r = new o(e),
                    n = new o(t);
                if (r.cmp(c.p) >= 0 || n.cmp(c.p) >= 0) return null;
                r = r.toRed(c.red), n = n.toRed(c.red);
                const i = r.redSqr().redIMul(r);
                return n.redSqr().redISub(i.redIAdd(c.b)).isZero() ? f.keyPair({
                    pub: {
                        x: r,
                        y: n
                    }
                }) : null
            }(e.slice(0, 32), e.slice(32, 64)) : null
        }
        t.privateKeyVerify = function (e) {
            const t = new o(e);
            return t.cmp(c.n) < 0 && !t.isZero()
        }, t.privateKeyExport = function (e, t) {
            const r = new o(e);
            if (r.cmp(c.n) >= 0 || r.isZero()) throw new Error(s.EC_PRIVATE_KEY_EXPORT_DER_FAIL);
            return n.from(f.keyFromPrivate(e).getPublic(t, !0))
        }, t.privateKeyNegate = function (e) {
            const t = new o(e);
            return t.isZero() ? n.alloc(32) : c.n.sub(t).umod(c.n).toArrayLike(n, "be", 32)
        }, t.privateKeyModInverse = function (e) {
            const t = new o(e);
            if (t.cmp(c.n) >= 0 || t.isZero()) throw new Error(s.EC_PRIVATE_KEY_RANGE_INVALID);
            return t.invm(c.n).toArrayLike(n, "be", 32)
        }, t.privateKeyTweakAdd = function (e, t) {
            const r = new o(t);
            if (r.cmp(c.n) >= 0) throw new Error(s.EC_PRIVATE_KEY_TWEAK_ADD_FAIL);
            if (r.iadd(new o(e)), r.cmp(c.n) >= 0 && r.isub(c.n), r.isZero()) throw new Error(s.EC_PRIVATE_KEY_TWEAK_ADD_FAIL);
            return r.toArrayLike(n, "be", 32)
        }, t.privateKeyTweakMul = function (e, t) {
            let r = new o(t);
            if (r.cmp(c.n) >= 0 || r.isZero()) throw new Error(s.EC_PRIVATE_KEY_TWEAK_MUL_FAIL);
            return r.imul(new o(e)), r.cmp(c.n) && (r = r.umod(c.n)), r.toArrayLike(n, "be", 32)
        }, t.publicKeyCreate = function (e, t) {
            const r = new o(e);
            if (r.cmp(c.n) >= 0 || r.isZero()) throw new Error(s.EC_PUBLIC_KEY_CREATE_FAIL);
            return n.from(f.keyFromPrivate(e).getPublic(t, !0))
        }, t.publicKeyConvert = function (e, t) {
            const r = u(e);
            if (null === r) throw new Error(s.EC_PUBLIC_KEY_PARSE_FAIL);
            return n.from(r.getPublic(t, !0))
        }, t.publicKeyVerify = function (e) {
            return null !== u(e)
        }, t.publicKeyTweakAdd = function (e, t, r) {
            const i = u(e);
            if (null === i) throw new Error(s.EC_PUBLIC_KEY_PARSE_FAIL);
            if ((t = new o(t)).cmp(c.n) >= 0) throw new Error(s.EC_PUBLIC_KEY_TWEAK_ADD_FAIL);
            return n.from(c.g.mul(t).add(i.pub).encode(!0, r))
        }, t.publicKeyTweakMul = function (e, t, r) {
            const i = u(e);
            if (null === i) throw new Error(s.EC_PUBLIC_KEY_PARSE_FAIL);
            if ((t = new o(t)).cmp(c.n) >= 0 || t.isZero()) throw new Error(s.EC_PUBLIC_KEY_TWEAK_MUL_FAIL);
            return n.from(i.pub.mul(t).encode(!0, r))
        }, t.publicKeyCombine = function (e, t) {
            const r = new Array(e.length);
            for (let t = 0; t < e.length; ++t)
                if (r[t] = u(e[t]), null === r[t]) throw new Error(s.EC_PUBLIC_KEY_PARSE_FAIL);
            let i = r[0].pub;
            for (let e = 1; e < r.length; ++e) i = i.add(r[e].pub);
            if (i.isInfinity()) throw new Error(s.EC_PUBLIC_KEY_COMBINE_FAIL);
            return n.from(i.encode(!0, t))
        }, t.signatureNormalize = function (e) {
            const t = new o(e.slice(0, 32)),
                r = new o(e.slice(32, 64));
            if (t.cmp(c.n) >= 0 || r.cmp(c.n) >= 0) throw new Error(s.ECDSA_SIGNATURE_PARSE_FAIL);
            const i = n.from(e);
            return 1 === r.cmp(f.nh) && c.n.sub(r).toArrayLike(n, "be", 32).copy(i, 32), i
        }, t.signatureExport = function (e) {
            const t = e.slice(0, 32),
                r = e.slice(32, 64);
            if (new o(t).cmp(c.n) >= 0 || new o(r).cmp(c.n) >= 0) throw new Error(s.ECDSA_SIGNATURE_PARSE_FAIL);
            return {
                r: t,
                s: r
            }
        }, t.signatureImport = function (e) {
            let t = new o(e.r);
            t.cmp(c.n) >= 0 && (t = new o(0));
            let r = new o(e.s);
            return r.cmp(c.n) >= 0 && (r = new o(0)), n.concat([t.toArrayLike(n, "be", 32), r.toArrayLike(n, "be", 32)])
        }, t.sign = function (e, t, r, i) {
            if ("function" == typeof r) {
                const a = r;
                r = function (r) {
                    const f = a(e, t, null, i, r);
                    if (!n.isBuffer(f) || 32 !== f.length) throw new Error(s.ECDSA_SIGN_FAIL);
                    return new o(f)
                }
            }
            const a = new o(t);
            if (a.cmp(c.n) >= 0 || a.isZero()) throw new Error(s.ECDSA_SIGN_FAIL);
            const u = f.sign(e, t, {
                canonical: !0,
                k: r,
                pers: i
            });
            return {
                signature: n.concat([u.r.toArrayLike(n, "be", 32), u.s.toArrayLike(n, "be", 32)]),
                recovery: u.recoveryParam
            }
        }, t.verify = function (e, t, r) {
            const n = {
                    r: t.slice(0, 32),
                    s: t.slice(32, 64)
                },
                i = new o(n.r),
                a = new o(n.s);
            if (i.cmp(c.n) >= 0 || a.cmp(c.n) >= 0) throw new Error(s.ECDSA_SIGNATURE_PARSE_FAIL);
            if (1 === a.cmp(f.nh) || i.isZero() || a.isZero()) return !1;
            const h = u(r);
            if (null === h) throw new Error(s.EC_PUBLIC_KEY_PARSE_FAIL);
            return f.verify(e, n, {
                x: h.pub.x,
                y: h.pub.y
            })
        }, t.recover = function (e, t, r, i) {
            const a = {
                    r: t.slice(0, 32),
                    s: t.slice(32, 64)
                },
                u = new o(a.r),
                h = new o(a.s);
            if (u.cmp(c.n) >= 0 || h.cmp(c.n) >= 0) throw new Error(s.ECDSA_SIGNATURE_PARSE_FAIL);
            try {
                if (u.isZero() || h.isZero()) throw new Error;
                const t = f.recoverPubKey(e, a, r);
                return n.from(t.encode(!0, i))
            } catch (e) {
                throw new Error(s.ECDSA_RECOVER_FAIL)
            }
        }, t.ecdh = function (e, r) {
            const n = t.ecdhUnsafe(e, r, !0);
            return i("sha256").update(n).digest()
        }, t.ecdhUnsafe = function (e, t, r) {
            const i = u(e);
            if (null === i) throw new Error(s.EC_PUBLIC_KEY_PARSE_FAIL);
            const a = new o(t);
            if (a.cmp(c.n) >= 0 || a.isZero()) throw new Error(s.ECDH_FAIL);
            return n.from(i.pub.mul(a).encode(!0, r))
        }
    }, function (e, t, r) {
        "use strict";
        (function (n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = r(38),
                o = 2147483647;

            function a(e, t, r, i, o) {
                if (n.isBuffer(e) && n.isBuffer(r)) e.copy(r, i, t, t + o);
                else
                    for (; o--;) r[i++] = e[t++]
            }
            var s = function (e, t, r, s, f, c, u) {
                if (0 === r || 0 != (r & r - 1)) throw Error("N must be > 0 and a power of 2");
                if (r > o / 128 / s) throw Error("Parameter N is too large");
                if (s > o / 128 / f) throw Error("Parameter r is too large");
                var h, d = new n(256 * s),
                    l = new n(128 * s * r),
                    p = new Int32Array(16),
                    b = new Int32Array(16),
                    y = new n(64),
                    v = i.crypto.pbkdf2Sync(e, t, 1, 128 * f * s, "sha256");
                if (u) {
                    var g = f * r * 2,
                        m = 0;
                    h = function () {
                        ++m % 1e3 == 0 && u({
                            current: m,
                            total: g,
                            percent: m / g * 100
                        })
                    }
                }
                for (var _ = 0; _ < f; _++) w(v, 128 * _ * s, s, r, l, d);
                return i.crypto.pbkdf2Sync(e, v, 1, c, "sha256");

                function w(e, t, r, n, i, o) {
                    var a, s = 128 * r;
                    for (e.copy(o, 0, t, t + s), a = 0; a < n; a++) o.copy(i, a * s, 0, 0 + s), E(o, 0, s, r), h && h();
                    for (a = 0; a < n; a++) {
                        var f = 0 + 64 * (2 * r - 1);
                        I(i, (o.readUInt32LE(f) & n - 1) * s, o, 0, s), E(o, 0, s, r), h && h()
                    }
                    o.copy(e, t, 0, 0 + s)
                }

                function E(e, t, r, n) {
                    var i;
                    for (a(e, t + 64 * (2 * n - 1), y, 0, 64), i = 0; i < 2 * n; i++) I(e, 64 * i, y, 0, 64), A(y), a(y, 0, e, r + 64 * i, 64);
                    for (i = 0; i < n; i++) a(e, r + 2 * i * 64, e, t + 64 * i, 64);
                    for (i = 0; i < n; i++) a(e, r + 64 * (2 * i + 1), e, t + 64 * (i + n), 64)
                }

                function S(e, t) {
                    return e << t | e >>> 32 - t
                }

                function A(e) {
                    var t;
                    for (t = 0; t < 16; t++) p[t] = (255 & e[4 * t + 0]) << 0, p[t] |= (255 & e[4 * t + 1]) << 8, p[t] |= (255 & e[4 * t + 2]) << 16, p[t] |= (255 & e[4 * t + 3]) << 24;
                    for (a(p, 0, b, 0, 16), t = 8; t > 0; t -= 2) b[4] ^= S(b[0] + b[12], 7), b[8] ^= S(b[4] + b[0], 9), b[12] ^= S(b[8] + b[4], 13), b[0] ^= S(b[12] + b[8], 18), b[9] ^= S(b[5] + b[1], 7), b[13] ^= S(b[9] + b[5], 9), b[1] ^= S(b[13] + b[9], 13), b[5] ^= S(b[1] + b[13], 18), b[14] ^= S(b[10] + b[6], 7), b[2] ^= S(b[14] + b[10], 9), b[6] ^= S(b[2] + b[14], 13), b[10] ^= S(b[6] + b[2], 18), b[3] ^= S(b[15] + b[11], 7), b[7] ^= S(b[3] + b[15], 9), b[11] ^= S(b[7] + b[3], 13), b[15] ^= S(b[11] + b[7], 18), b[1] ^= S(b[0] + b[3], 7), b[2] ^= S(b[1] + b[0], 9), b[3] ^= S(b[2] + b[1], 13), b[0] ^= S(b[3] + b[2], 18), b[6] ^= S(b[5] + b[4], 7), b[7] ^= S(b[6] + b[5], 9), b[4] ^= S(b[7] + b[6], 13), b[5] ^= S(b[4] + b[7], 18), b[11] ^= S(b[10] + b[9], 7), b[8] ^= S(b[11] + b[10], 9), b[9] ^= S(b[8] + b[11], 13), b[10] ^= S(b[9] + b[8], 18), b[12] ^= S(b[15] + b[14], 7), b[13] ^= S(b[12] + b[15], 9), b[14] ^= S(b[13] + b[12], 13), b[15] ^= S(b[14] + b[13], 18);
                    for (t = 0; t < 16; ++t) p[t] = b[t] + p[t];
                    for (t = 0; t < 16; t++) {
                        var r = 4 * t;
                        e[r + 0] = p[t] >> 0 & 255, e[r + 1] = p[t] >> 8 & 255, e[r + 2] = p[t] >> 16 & 255, e[r + 3] = p[t] >> 24 & 255
                    }
                }

                function I(e, t, r, n, i) {
                    for (var o = 0; o < i; o++) r[n + o] ^= e[t + o]
                }
            };
            t.default = s, e.exports = t.default
        }).call(this, r(5).Buffer)
    }, function (e, t, r) {
        var n = r(190),
            i = r(191);
        e.exports = function (e, t, r) {
            var o = t && r || 0;
            "string" == typeof e && (t = "binary" === e ? new Array(16) : null, e = null);
            var a = (e = e || {}).random || (e.rng || n)();
            if (a[6] = 15 & a[6] | 64, a[8] = 63 & a[8] | 128, t)
                for (var s = 0; s < 16; ++s) t[o + s] = a[s];
            return t || i(a)
        }
    }, function (e, t) {
        var r = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof window.msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto);
        if (r) {
            var n = new Uint8Array(16);
            e.exports = function () {
                return r(n), n
            }
        } else {
            var i = new Array(16);
            e.exports = function () {
                for (var e, t = 0; t < 16; t++) 0 == (3 & t) && (e = 4294967296 * Math.random()), i[t] = e >>> ((3 & t) << 3) & 255;
                return i
            }
        }
    }, function (e, t) {
        for (var r = [], n = 0; n < 256; ++n) r[n] = (n + 256).toString(16).substr(1);
        e.exports = function (e, t) {
            var n = t || 0,
                i = r;
            return [i[e[n++]], i[e[n++]], i[e[n++]], i[e[n++]], "-", i[e[n++]], i[e[n++]], "-", i[e[n++]], i[e[n++]], "-", i[e[n++]], i[e[n++]], "-", i[e[n++]], i[e[n++]], i[e[n++]], i[e[n++]], i[e[n++]], i[e[n++]]].join("")
        }
    }, function (e, t) {
        (function (t) {
            e.exports = t
        }).call(this, {})
    }, function (e, t) {
        e.exports = function (e, t) {
            return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                raw: {
                    value: Object.freeze(t)
                }
            }))
        }, e.exports.default = e.exports, e.exports.__esModule = !0
    }, function (e, t, r) {
        ! function (e) {
            var t, r, n, i = String.fromCharCode;

            function o(e) {
                for (var t, r, n = [], i = 0, o = e.length; i < o;)(t = e.charCodeAt(i++)) >= 55296 && t <= 56319 && i < o ? 56320 == (64512 & (r = e.charCodeAt(i++))) ? n.push(((1023 & t) << 10) + (1023 & r) + 65536) : (n.push(t), i--) : n.push(t);
                return n
            }

            function a(e) {
                if (e >= 55296 && e <= 57343) throw Error("Lone surrogate U+" + e.toString(16).toUpperCase() + " is not a scalar value")
            }

            function s(e, t) {
                return i(e >> t & 63 | 128)
            }

            function f(e) {
                if (0 == (4294967168 & e)) return i(e);
                var t = "";
                return 0 == (4294965248 & e) ? t = i(e >> 6 & 31 | 192) : 0 == (4294901760 & e) ? (a(e), t = i(e >> 12 & 15 | 224), t += s(e, 6)) : 0 == (4292870144 & e) && (t = i(e >> 18 & 7 | 240), t += s(e, 12), t += s(e, 6)), t += i(63 & e | 128)
            }

            function c() {
                if (n >= r) throw Error("Invalid byte index");
                var e = 255 & t[n];
                if (n++, 128 == (192 & e)) return 63 & e;
                throw Error("Invalid continuation byte")
            }

            function u() {
                var e, i;
                if (n > r) throw Error("Invalid byte index");
                if (n == r) return !1;
                if (e = 255 & t[n], n++, 0 == (128 & e)) return e;
                if (192 == (224 & e)) {
                    if ((i = (31 & e) << 6 | c()) >= 128) return i;
                    throw Error("Invalid continuation byte")
                }
                if (224 == (240 & e)) {
                    if ((i = (15 & e) << 12 | c() << 6 | c()) >= 2048) return a(i), i;
                    throw Error("Invalid continuation byte")
                }
                if (240 == (248 & e) && (i = (7 & e) << 18 | c() << 12 | c() << 6 | c()) >= 65536 && i <= 1114111) return i;
                throw Error("Invalid UTF-8 detected")
            }
            e.version = "3.0.0", e.encode = function (e) {
                for (var t = o(e), r = t.length, n = -1, i = ""; ++n < r;) i += f(t[n]);
                return i
            }, e.decode = function (e) {
                t = o(e), r = t.length, n = 0;
                for (var a, s = []; !1 !== (a = u());) s.push(a);
                return function (e) {
                    for (var t, r = e.length, n = -1, o = ""; ++n < r;)(t = e[n]) > 65535 && (o += i((t -= 65536) >>> 10 & 1023 | 55296), t = 56320 | 1023 & t), o += i(t);
                    return o
                }(s)
            }
        }(t)
    }, function (e, t) {
        e.exports = function (e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }, e.exports.default = e.exports, e.exports.__esModule = !0
    }, function (e, t) {
        function r(t, n) {
            return e.exports = r = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            }, e.exports.default = e.exports, e.exports.__esModule = !0, r(t, n)
        }
        e.exports = r, e.exports.default = e.exports, e.exports.__esModule = !0
    }, function (e, t, r) {
        "use strict";
        var n = r(2);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var i = r(198),
            o = r(29),
            a = r(199),
            s = n(r(200)),
            f = n(r(201)),
            c = n(r(202)),
            u = {
                CallBuilder: i.CallBuilder,
                IcxTransactionBuilder: o.IcxTransactionBuilder,
                CallTransactionBuilder: a.CallTransactionBuilder,
                DeployTransactionBuilder: s.default,
                MessageTransactionBuilder: c.default,
                DepositTransactionBuilder: f.default
            };
        t.default = u, e.exports = t.default
    }, function (e, t, r) {
        "use strict";
        var n = r(2);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.CallBuilder = t.Call = void 0;
        var i = n(r(6)),
            o = n(r(3)),
            a = r(8),
            s = function e(t, r, n) {
                (0, o.default)(this, e), this.to = t, this.dataType = "call", this.data = n, r && (this.from = r)
            };
        t.Call = s;
        var f = function () {
            function e() {
                (0, o.default)(this, e), this.private = (0, a.createPrivate)(), this.private(this).to = void 0, this.private(this).from = void 0, this.private(this).data = {}
            }
            return (0, i.default)(e, [{
                key: "to",
                value: function (e) {
                    return this.private(this).to = e, this
                }
            }, {
                key: "from",
                value: function (e) {
                    return this.private(this).from = e, this
                }
            }, {
                key: "method",
                value: function (e) {
                    return this.private(this).data.method = e, this
                }
            }, {
                key: "params",
                value: function (e) {
                    return e && (this.private(this).data.params = e), this
                }
            }, {
                key: "build",
                value: function () {
                    return new s(this.private(this).to, this.private(this).from, this.private(this).data)
                }
            }]), e
        }();
        t.CallBuilder = f
    }, function (e, t, r) {
        "use strict";
        var n = r(2);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.CallTransactionBuilder = t.CallTransaction = void 0;
        var i = n(r(6)),
            o = n(r(3)),
            a = n(r(22)),
            s = n(r(23)),
            f = r(29),
            c = r(8),
            u = function (e) {
                function t(e, r, n, i, s, f, c, u, h, d) {
                    var l;
                    return (0, o.default)(this, t), (l = (0, a.default)(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, r, n, i, s, f, c, u))).dataType = "call", l.data = {
                        method: h
                    }, d && (l.data.params = d), l
                }
                return (0, s.default)(t, e), t
            }(f.IcxTransaction);
        t.CallTransaction = u;
        var h = function (e) {
            function t(e, r, n, i, s, f, u, h) {
                var d;
                return (0, o.default)(this, t), (d = (0, a.default)(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, r, n, i, s, f, u, h))).private = (0, c.createPrivate)(), d.private(d).method = void 0, d.private(d).params = void 0, d
            }
            return (0, s.default)(t, e), (0, i.default)(t, [{
                key: "method",
                value: function (e) {
                    return this.private(this).method = e, this
                }
            }, {
                key: "params",
                value: function (e) {
                    return this.private(this).params = e, this
                }
            }, {
                key: "build",
                value: function () {
                    return new u(this.private(this).to, this.private(this).from, this.private(this).value, this.private(this).stepLimit, this.private(this).nid, this.private(this).nonce, this.private(this).version, this.private(this).timestamp, this.private(this).method, this.private(this).params)
                }
            }]), t
        }(f.IcxTransactionBuilder);
        t.CallTransactionBuilder = h
    }, function (e, t, r) {
        "use strict";
        var n = r(2);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var i = n(r(6)),
            o = n(r(3)),
            a = n(r(22)),
            s = n(r(23)),
            f = r(29),
            c = r(8),
            u = function (e) {
                function t(e, r, n, i, s, f, c, u, h, d, l) {
                    var p;
                    return (0, o.default)(this, t), (p = (0, a.default)(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, r, n, i, s, f, c, u))).dataType = "deploy", p.data = {
                        contentType: h,
                        content: d,
                        params: l
                    }, p
                }
                return (0, s.default)(t, e), t
            }(f.IcxTransaction),
            h = function (e) {
                function t(e, r, n, i, s, f, u, h) {
                    var d;
                    return (0, o.default)(this, t), (d = (0, a.default)(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, r, n, i, s, f, u, h))).private = (0, c.createPrivate)(), d.private(d).contentType = void 0, d.private(d).content = void 0, d.private(d).params = void 0, d
                }
                return (0, s.default)(t, e), (0, i.default)(t, [{
                    key: "contentType",
                    value: function (e) {
                        return this.private(this).contentType = e, this
                    }
                }, {
                    key: "content",
                    value: function (e) {
                        return this.private(this).content = e, this
                    }
                }, {
                    key: "params",
                    value: function (e) {
                        return this.private(this).params = e, this
                    }
                }, {
                    key: "build",
                    value: function () {
                        return new u(this.private(this).to, this.private(this).from, this.private(this).value, this.private(this).stepLimit, this.private(this).nid, this.private(this).nonce, this.private(this).version, this.private(this).timestamp, this.private(this).contentType, this.private(this).content, this.private(this).params)
                    }
                }]), t
            }(f.IcxTransactionBuilder);
        t.default = h, e.exports = t.default
    }, function (e, t, r) {
        "use strict";
        var n = r(2);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var i = n(r(6)),
            o = n(r(3)),
            a = n(r(22)),
            s = n(r(23)),
            f = r(29),
            c = r(8),
            u = function (e) {
                function t(e, r, n, i, s, f, c, u, h, d) {
                    var l;
                    return (0, o.default)(this, t), (l = (0, a.default)(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, r, n, i, s, f, c, u))).dataType = "deposit", l.data = {
                        action: h
                    }, d && (l.data.id = d), l
                }
                return (0, s.default)(t, e), t
            }(f.IcxTransaction),
            h = function (e) {
                function t(e, r, n, i, s, f, u, h) {
                    var d;
                    return (0, o.default)(this, t), (d = (0, a.default)(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, r, n, i, s, f, u, h))).private = (0, c.createPrivate)(), d.private(d).action = void 0, d.private(d).id = void 0, d
                }
                return (0, s.default)(t, e), (0, i.default)(t, [{
                    key: "action",
                    value: function (e) {
                        return this.private(this).action = e, this
                    }
                }, {
                    key: "id",
                    value: function (e) {
                        return this.private(this).id = e, this
                    }
                }, {
                    key: "build",
                    value: function () {
                        return new u(this.private(this).to, this.private(this).from, this.private(this).value, this.private(this).stepLimit, this.private(this).nid, this.private(this).nonce, this.private(this).version, this.private(this).timestamp, this.private(this).action, this.private(this).id)
                    }
                }]), t
            }(f.IcxTransactionBuilder);
        t.default = h, e.exports = t.default
    }, function (e, t, r) {
        "use strict";
        var n = r(2);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var i = n(r(6)),
            o = n(r(3)),
            a = n(r(22)),
            s = n(r(23)),
            f = r(29),
            c = r(8),
            u = function (e) {
                function t(e, r, n, i, s, f, c, u, h) {
                    var d;
                    return (0, o.default)(this, t), (d = (0, a.default)(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, r, n, i, s, f, c, u))).dataType = "message", h && (d.data = h), d
                }
                return (0, s.default)(t, e), t
            }(f.IcxTransaction),
            h = function (e) {
                function t(e, r, n, i, s, f, u, h) {
                    var d;
                    return (0, o.default)(this, t), (d = (0, a.default)(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, r, n, i, s, f, u, h))).private = (0, c.createPrivate)(), d.private(d).data = void 0, d
                }
                return (0, s.default)(t, e), (0, i.default)(t, [{
                    key: "data",
                    value: function (e) {
                        return this.private(this).data = e, this
                    }
                }, {
                    key: "build",
                    value: function () {
                        return new u(this.private(this).to, this.private(this).from, this.private(this).value, this.private(this).stepLimit, this.private(this).nid, this.private(this).nonce, this.private(this).version, this.private(this).timestamp, this.private(this).data)
                    }
                }]), t
            }(f.IcxTransactionBuilder);
        t.default = h, e.exports = t.default
    }, function (e, t, r) {
        "use strict";
        var n = r(2);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var i = n(r(3)),
            o = n(r(6)),
            a = r(15),
            s = r(8);

        function f(e, t) {
            var r = (0, a.toRawTransaction)(e);
            return t.sign((0, s.serialize)(r))
        }
        var c = function () {
            function e(t, r) {
                (0, i.default)(this, e), this.private = (0, s.createPrivate)(), this.private(this).transaction = t, this.private(this).wallet = r
            }
            return (0, o.default)(e, [{
                key: "getRawTransaction",
                value: function () {
                    return (0, a.toRawTransaction)(this.private(this).transaction)
                }
            }, {
                key: "getSignature",
                value: function () {
                    return f(this.private(this).transaction, this.private(this).wallet)
                }
            }, {
                key: "getProperties",
                value: function () {
                    return e = this.private(this).transaction, t = this.private(this).wallet, (r = (0, a.toRawTransaction)(e)).signature = f(e, t), r;
                    var e, t, r
                }
            }]), e
        }();
        t.default = c, e.exports = t.default
    }, function (e, t, r) {
        "use strict";
        var n = r(2);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.toBlock = h, t.toTransaction = d, t.toTransactionResult = l, t.toScoreApiList = p, t.default = void 0;
        var i = n(r(205)),
            o = n(r(206)),
            a = n(r(207)),
            s = n(r(208)),
            f = r(8),
            c = r(16),
            u = r(37);

        function h(e) {
            if (!(0, f.hasProperties)(e, ["height", "block_hash", "merkle_tree_root_hash", "prev_block_hash", "peer_id", "confirmed_transaction_list", "signature", "time_stamp", "version"])) throw new c.FormatError("Block object is invalid.").toString();
            return new i.default(e)
        }

        function d(e) {
            if (!(0, f.hasProperties)(e, [
                    ["txHash", "tx_hash"], "txIndex", "blockHeight", "blockHash"
                ]) || !(0, u.checkDataInTransaction)(e)) throw new c.FormatError("Transaction object is invalid.").toString();
            return new o.default(e)
        }

        function l(e) {
            if (!(0, f.hasProperties)(e, ["status", "to", "txHash", "txIndex", "blockHeight", "blockHash", "cumulativeStepUsed", "stepUsed", "stepPrice"]) || ! function (e) {
                    return !("0x1" === e.status && !(0, f.hasProperties)(e, ["eventLogs"]) || "0x0" === e.status && !(0, f.hasProperties)(e, ["failure"]))
                }(e)) throw new c.FormatError("Transaction result object is invalid.").toString();
            return new a.default(e)
        }

        function p(e) {
            if (!(0, u.isScoreApiList)(e)) throw new c.FormatError("SCORE API list is invalid.").toString();
            return new s.default(e)
        }
        var b = {
            toBlock: h,
            toTransaction: d,
            toTransactionResult: l,
            toScoreApiList: p
        };
        t.default = b
    }, function (e, t, r) {
        "use strict";
        var n = r(2);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var i = n(r(3)),
            o = n(r(6)),
            a = n(r(99)),
            s = r(14),
            f = r(15),
            c = r(8),
            u = r(16),
            h = r(37);
        var d = function () {
            function e(t) {
                (0, i.default)(this, e), this.height = (0, f.toNumber)(t.height), this.blockHash = (0, s.add0xPrefix)(t.block_hash), this.merkleTreeRootHash = (0, s.add0xPrefix)(t.merkle_tree_root_hash), this.prevBlockHash = (0, s.add0xPrefix)(t.prev_block_hash), this.peerId = (0, s.addHxPrefix)(t.peer_id), this.confirmedTransactionList = (t.confirmed_transaction_list || []).map(function (e) {
                    return (0, c.isGenesisBlock)(t.height) ? e : function (e) {
                        if (!(0, c.hasProperties)(e, [
                                ["txHash", "tx_hash"]
                            ]) || !(0, h.checkDataInTransaction)(e)) throw new u.FormatError("Confirmed transaction object is invalid.").toString();
                        return new a.default(e)
                    }(e)
                }), this.signature = t.signature, this.timeStamp = (0, f.toNumber)(t.time_stamp), this.version = t.version
            }
            return (0, o.default)(e, [{
                key: "getTransactions",
                value: function () {
                    return this.confirmedTransactionList
                }
            }]), e
        }();
        t.default = d, e.exports = t.default
    }, function (e, t, r) {
        "use strict";
        var n = r(2);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var i = n(r(3)),
            o = n(r(22)),
            a = n(r(23)),
            s = n(r(99)),
            f = r(14),
            c = r(15),
            u = function (e) {
                function t(e) {
                    var r;
                    return (0, i.default)(this, t), (r = (0, o.default)(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))).txIndex = (0, c.toNumber)(e.txIndex), r.blockHeight = (0, c.toNumber)(e.blockHeight), r.blockHash = (0, f.add0xPrefix)(e.blockHash), r
                }
                return (0, a.default)(t, e), t
            }(s.default);
        t.default = u, e.exports = t.default
    }, function (e, t, r) {
        "use strict";
        var n = r(2);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var i = n(r(3)),
            o = r(14),
            a = r(15);
        t.default = function e(t) {
            (0, i.default)(this, e), this.status = (0, a.toNumber)(t.status), this.to = (0, o.addHxPrefix)(t.to), this.txHash = (0, o.add0xPrefix)(t.txHash), this.txIndex = (0, a.toNumber)(t.txIndex), this.blockHeight = (0, a.toNumber)(t.blockHeight), this.blockHash = (0, o.add0xPrefix)(t.blockHash), this.cumulativeStepUsed = (0, a.toBigNumber)(t.cumulativeStepUsed), this.stepUsed = (0, a.toBigNumber)(t.stepUsed), this.stepPrice = (0, a.toBigNumber)(t.stepPrice), t.scoreAddress && (this.scoreAddress = (0, o.addCxPrefix)(t.scoreAddress)), t.eventLogs && (this.eventLogs = t.eventLogs), t.logsBloom && (this.logsBloom = t.logsBloom), t.failure && (this.failure = t.failure)
        }, e.exports = t.default
    }, function (e, t, r) {
        "use strict";
        var n = r(2);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var i = n(r(3)),
            o = n(r(6)),
            a = r(21),
            s = r(16),
            f = r(8),
            c = function () {
                function e(t) {
                    var r = this;
                    (0, i.default)(this, e), this.private = (0, f.createPrivate)(), this.private(this).list = t, this.private(this).properties = {}, (0, a.isArray)(t) && t.forEach(function (e) {
                        r.private(r).properties[e.name] = e
                    })
                }
                return (0, o.default)(e, [{
                    key: "getList",
                    value: function () {
                        return this.private(this).list
                    }
                }, {
                    key: "getMethod",
                    value: function (e) {
                        var t = this.private(this).properties[e];
                        if (t) return t;
                        throw new s.ScoreError("The method named '".concat(e, "' does not exist.")).toString()
                    }
                }]), e
            }();
        t.default = c, e.exports = t.default
    }, function (e, t, r) {
        "use strict";
        var n = r(2);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var i = n(r(3)),
            o = n(r(6)),
            a = n(r(57)),
            s = r(15),
            f = r(21),
            c = r(14);

        function u(e) {
            return new a.default(10).exponentiatedBy(e)
        }
        var h = function () {
            function e(t, r) {
                (0, i.default)(this, e), this.value = (0, s.toBigNumber)(t), this.digit = (0, s.toNumber)(r)
            }
            return (0, o.default)(e, [{
                key: "getDigit",
                value: function () {
                    return this.digit
                }
            }, {
                key: "toString",
                value: function () {
                    return this.value.toString()
                }
            }, {
                key: "toLoop",
                value: function () {
                    return this.value.times(u(this.digit))
                }
            }, {
                key: "convertUnit",
                value: function (t) {
                    var r = this.toLoop(this.value);
                    return e.of(r.dividedBy(u(t)), t)
                }
            }], [{
                key: "of",
                value: function (t, r) {
                    return new e((0, s.toBigNumber)(t), r)
                }
            }]), e
        }();
        t.default = h, h.Unit = {
            LOOP: 0,
            GLOOP: 9,
            ICX: 18
        };
        var d = {
            loop: "1",
            gloop: "1000000000",
            icx: "1000000000000000000"
        };

        function l(e) {
            var t = d[(e || "icx").toLowerCase()];
            return t = t || "1000000000000000000", (0, s.toBigNumber)(t)
        }

        function p(e, t) {
            return (0, f.isBigNumber)(e) ? t : (0, f.isHex)(e) ? (0, c.add0xPrefix)(t.toString(16)) : t.toNumber()
        }
        h.toLoop = function (e, t) {
            return p(e, (0, s.toBigNumber)(e).times(l(t)))
        }, h.fromLoop = function (e, t) {
            return p(e, (0, s.toBigNumber)(e).dividedBy(l(t)))
        }, e.exports = t.default
    }, function (e, t, r) {
        "use strict";
        var n = r(2);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var i = n(r(3)),
            o = n(r(6)),
            a = n(r(211)),
            s = n(r(212)),
            f = n(r(213)),
            c = function () {
                function e(t) {
                    (0, i.default)(this, e), this.url = t
                }
                return (0, o.default)(e, [{
                    key: "request",
                    value: function (e, t) {
                        var r = JSON.stringify(e, function (e, t) {
                                if (t) return t
                            }),
                            n = new s.default(this.url, r);
                        return new f.default(a.default.newCall(n), t)
                    }
                }]), e
            }();
        t.default = c, e.exports = t.default
    }, function (e, t, r) {
        "use strict";
        var n = r(2);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var i = n(r(3)),
            o = n(r(6)),
            a = r(16),
            s = r(38).XMLHttpRequest,
            f = function () {
                function e() {
                    (0, i.default)(this, e)
                }
                return (0, o.default)(e, null, [{
                    key: "newCall",
                    value: function (e) {
                        return {
                            execute: function () {
                                return this.sendAsync()
                            },
                            sendAsync: function () {
                                var t = e.url,
                                    r = e.body;
                                return new Promise(function (e, n) {
                                    var i = new s;
                                    i.open("POST", t, !0), i.onload = function () {
                                        200 === i.status ? e(JSON.parse(i.responseText)) : n(JSON.parse(i.responseText))
                                    }, i.onerror = function () {
                                        var e = new a.NetworkError(i.responseText);
                                        n(e.toString())
                                    }, i.send(r)
                                })
                            }
                        }
                    }
                }]), e
            }();
        t.default = f, e.exports = t.default
    }, function (e, t, r) {
        "use strict";
        var n = r(2);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var i = n(r(3));
        t.default = function e(t, r) {
            (0, i.default)(this, e), this.url = t, this.body = r
        }, e.exports = t.default
    }, function (e, t, r) {
        "use strict";
        var n = r(2);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var i = n(r(214)),
            o = n(r(24)),
            a = n(r(216)),
            s = n(r(3)),
            f = n(r(6)),
            c = n(r(217)),
            u = r(16),
            h = function () {
                function e(t, r) {
                    (0, s.default)(this, e), this.httpCall = t, this.converter = r
                }
                return (0, f.default)(e, [{
                    key: "execute",
                    value: function () {
                        return this.callAsync()
                    }
                }, {
                    key: "callAsync",
                    value: function () {
                        var e = (0, a.default)(i.default.mark(function e() {
                            var t;
                            return i.default.wrap(function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, this.httpCall.execute();
                                    case 3:
                                        return t = e.sent, e.abrupt("return", new c.default(t, this.converter).result);
                                    case 7:
                                        if (e.prev = 7, e.t0 = e.catch(0), "object" !== (0, o.default)(e.t0.error)) {
                                            e.next = 14;
                                            break
                                        }
                                        throw new u.RpcError(e.t0.error.message).toString();
                                    case 14:
                                        throw e.t0;
                                    case 15:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, this, [
                                [0, 7]
                            ])
                        }));
                        return function () {
                            return e.apply(this, arguments)
                        }
                    }()
                }]), e
            }();
        t.default = h, e.exports = t.default
    }, function (e, t, r) {
        e.exports = r(215)
    }, function (e, t, r) {
        var n = function (e) {
            "use strict";
            var t, r = Object.prototype,
                n = r.hasOwnProperty,
                i = "function" == typeof Symbol ? Symbol : {},
                o = i.iterator || "@@iterator",
                a = i.asyncIterator || "@@asyncIterator",
                s = i.toStringTag || "@@toStringTag";

            function f(e, t, r) {
                return Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }), e[t]
            }
            try {
                f({}, "")
            } catch (e) {
                f = function (e, t, r) {
                    return e[t] = r
                }
            }

            function c(e, t, r, n) {
                var i = t && t.prototype instanceof y ? t : y,
                    o = Object.create(i.prototype),
                    a = new x(n || []);
                return o._invoke = function (e, t, r) {
                    var n = h;
                    return function (i, o) {
                        if (n === l) throw new Error("Generator is already running");
                        if (n === p) {
                            if ("throw" === i) throw o;
                            return T()
                        }
                        for (r.method = i, r.arg = o;;) {
                            var a = r.delegate;
                            if (a) {
                                var s = I(a, r);
                                if (s) {
                                    if (s === b) continue;
                                    return s
                                }
                            }
                            if ("next" === r.method) r.sent = r._sent = r.arg;
                            else if ("throw" === r.method) {
                                if (n === h) throw n = p, r.arg;
                                r.dispatchException(r.arg)
                            } else "return" === r.method && r.abrupt("return", r.arg);
                            n = l;
                            var f = u(e, t, r);
                            if ("normal" === f.type) {
                                if (n = r.done ? p : d, f.arg === b) continue;
                                return {
                                    value: f.arg,
                                    done: r.done
                                }
                            }
                            "throw" === f.type && (n = p, r.method = "throw", r.arg = f.arg)
                        }
                    }
                }(e, r, a), o
            }

            function u(e, t, r) {
                try {
                    return {
                        type: "normal",
                        arg: e.call(t, r)
                    }
                } catch (e) {
                    return {
                        type: "throw",
                        arg: e
                    }
                }
            }
            e.wrap = c;
            var h = "suspendedStart",
                d = "suspendedYield",
                l = "executing",
                p = "completed",
                b = {};

            function y() {}

            function v() {}

            function g() {}
            var m = {};
            m[o] = function () {
                return this
            };
            var _ = Object.getPrototypeOf,
                w = _ && _(_(B([])));
            w && w !== r && n.call(w, o) && (m = w);
            var E = g.prototype = y.prototype = Object.create(m);

            function S(e) {
                ["next", "throw", "return"].forEach(function (t) {
                    f(e, t, function (e) {
                        return this._invoke(t, e)
                    })
                })
            }

            function A(e, t) {
                var r;
                this._invoke = function (i, o) {
                    function a() {
                        return new t(function (r, a) {
                            ! function r(i, o, a, s) {
                                var f = u(e[i], e, o);
                                if ("throw" !== f.type) {
                                    var c = f.arg,
                                        h = c.value;
                                    return h && "object" == typeof h && n.call(h, "__await") ? t.resolve(h.__await).then(function (e) {
                                        r("next", e, a, s)
                                    }, function (e) {
                                        r("throw", e, a, s)
                                    }) : t.resolve(h).then(function (e) {
                                        c.value = e, a(c)
                                    }, function (e) {
                                        return r("throw", e, a, s)
                                    })
                                }
                                s(f.arg)
                            }(i, o, r, a)
                        })
                    }
                    return r = r ? r.then(a, a) : a()
                }
            }

            function I(e, r) {
                var n = e.iterator[r.method];
                if (n === t) {
                    if (r.delegate = null, "throw" === r.method) {
                        if (e.iterator.return && (r.method = "return", r.arg = t, I(e, r), "throw" === r.method)) return b;
                        r.method = "throw", r.arg = new TypeError("The iterator does not provide a 'throw' method")
                    }
                    return b
                }
                var i = u(n, e.iterator, r.arg);
                if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, b;
                var o = i.arg;
                return o ? o.done ? (r[e.resultName] = o.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, b) : o : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, b)
            }

            function k(e) {
                var t = {
                    tryLoc: e[0]
                };
                1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
            }

            function M(e) {
                var t = e.completion || {};
                t.type = "normal", delete t.arg, e.completion = t
            }

            function x(e) {
                this.tryEntries = [{
                    tryLoc: "root"
                }], e.forEach(k, this), this.reset(!0)
            }

            function B(e) {
                if (e) {
                    var r = e[o];
                    if (r) return r.call(e);
                    if ("function" == typeof e.next) return e;
                    if (!isNaN(e.length)) {
                        var i = -1,
                            a = function r() {
                                for (; ++i < e.length;)
                                    if (n.call(e, i)) return r.value = e[i], r.done = !1, r;
                                return r.value = t, r.done = !0, r
                            };
                        return a.next = a
                    }
                }
                return {
                    next: T
                }
            }

            function T() {
                return {
                    value: t,
                    done: !0
                }
            }
            return v.prototype = E.constructor = g, g.constructor = v, v.displayName = f(g, s, "GeneratorFunction"), e.isGeneratorFunction = function (e) {
                var t = "function" == typeof e && e.constructor;
                return !!t && (t === v || "GeneratorFunction" === (t.displayName || t.name))
            }, e.mark = function (e) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(e, g) : (e.__proto__ = g, f(e, s, "GeneratorFunction")), e.prototype = Object.create(E), e
            }, e.awrap = function (e) {
                return {
                    __await: e
                }
            }, S(A.prototype), A.prototype[a] = function () {
                return this
            }, e.AsyncIterator = A, e.async = function (t, r, n, i, o) {
                void 0 === o && (o = Promise);
                var a = new A(c(t, r, n, i), o);
                return e.isGeneratorFunction(r) ? a : a.next().then(function (e) {
                    return e.done ? e.value : a.next()
                })
            }, S(E), f(E, s, "Generator"), E[o] = function () {
                return this
            }, E.toString = function () {
                return "[object Generator]"
            }, e.keys = function (e) {
                var t = [];
                for (var r in e) t.push(r);
                return t.reverse(),
                    function r() {
                        for (; t.length;) {
                            var n = t.pop();
                            if (n in e) return r.value = n, r.done = !1, r
                        }
                        return r.done = !0, r
                    }
            }, e.values = B, x.prototype = {
                constructor: x,
                reset: function (e) {
                    if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(M), !e)
                        for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t)
                },
                stop: function () {
                    this.done = !0;
                    var e = this.tryEntries[0].completion;
                    if ("throw" === e.type) throw e.arg;
                    return this.rval
                },
                dispatchException: function (e) {
                    if (this.done) throw e;
                    var r = this;

                    function i(n, i) {
                        return s.type = "throw", s.arg = e, r.next = n, i && (r.method = "next", r.arg = t), !!i
                    }
                    for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                        var a = this.tryEntries[o],
                            s = a.completion;
                        if ("root" === a.tryLoc) return i("end");
                        if (a.tryLoc <= this.prev) {
                            var f = n.call(a, "catchLoc"),
                                c = n.call(a, "finallyLoc");
                            if (f && c) {
                                if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
                                if (this.prev < a.finallyLoc) return i(a.finallyLoc)
                            } else if (f) {
                                if (this.prev < a.catchLoc) return i(a.catchLoc, !0)
                            } else {
                                if (!c) throw new Error("try statement without catch or finally");
                                if (this.prev < a.finallyLoc) return i(a.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function (e, t) {
                    for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                        var i = this.tryEntries[r];
                        if (i.tryLoc <= this.prev && n.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
                            var o = i;
                            break
                        }
                    }
                    o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
                    var a = o ? o.completion : {};
                    return a.type = e, a.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, b) : this.complete(a)
                },
                complete: function (e, t) {
                    if ("throw" === e.type) throw e.arg;
                    return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), b
                },
                finish: function (e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var r = this.tryEntries[t];
                        if (r.finallyLoc === e) return this.complete(r.completion, r.afterLoc), M(r), b
                    }
                },
                catch: function (e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var r = this.tryEntries[t];
                        if (r.tryLoc === e) {
                            var n = r.completion;
                            if ("throw" === n.type) {
                                var i = n.arg;
                                M(r)
                            }
                            return i
                        }
                    }
                    throw new Error("illegal catch attempt")
                },
                delegateYield: function (e, r, n) {
                    return this.delegate = {
                        iterator: B(e),
                        resultName: r,
                        nextLoc: n
                    }, "next" === this.method && (this.arg = t), b
                }
            }, e
        }(e.exports);
        try {
            regeneratorRuntime = n
        } catch (e) {
            Function("r", "regeneratorRuntime = r")(n)
        }
    }, function (e, t) {
        function r(e, t, r, n, i, o, a) {
            try {
                var s = e[o](a),
                    f = s.value
            } catch (e) {
                return void r(e)
            }
            s.done ? t(f) : Promise.resolve(f).then(n, i)
        }
        e.exports = function (e) {
            return function () {
                var t = this,
                    n = arguments;
                return new Promise(function (i, o) {
                    var a = e.apply(t, n);

                    function s(e) {
                        r(a, i, o, s, f, "next", e)
                    }

                    function f(e) {
                        r(a, i, o, s, f, "throw", e)
                    }
                    s(void 0)
                })
            }
        }, e.exports.default = e.exports, e.exports.__esModule = !0
    }, function (e, t, r) {
        "use strict";
        var n = r(2);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var i = n(r(3));
        t.default = function e(t, r) {
            (0, i.default)(this, e);
            var n = t.result,
                o = t.error;
            n && (this.result = "function" == typeof r ? r(n) : n), o && (this.error = o)
        }, e.exports = t.default
    }])
};

IconService = t();