/*! For license information please see chartjs.js.LICENSE.txt */ ! function (t, e) {
    if ("object" == typeof exports && "object" == typeof module) module.exports = e();
    else if ("function" == typeof define && define.amd) define([], e);
    else {
        var i = e();
        for (var s in i)("object" == typeof exports ? exports : t)[s] = i[s]
    }
}(self, (function () {
    return function () {
        "use strict";
        var t = {
                d: function (e, i) {
                    for (var s in i) t.o(i, s) && !t.o(e, s) && Object.defineProperty(e, s, {
                        enumerable: !0,
                        get: i[s]
                    })
                },
                o: function (t, e) {
                    return Object.prototype.hasOwnProperty.call(t, e)
                },
                r: function (t) {
                    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                        value: "Module"
                    }), Object.defineProperty(t, "__esModule", {
                        value: !0
                    })
                }
            },
            e = {};

        function i() {}
        t.r(e), t.d(e, {
            Chart: function () {
                return Ko
            }
        });
        const s = function () {
            let t = 0;
            return function () {
                return t++
            }
        }();

        function n(t) {
            return null == t
        }

        function o(t) {
            if (Array.isArray && Array.isArray(t)) return !0;
            const e = Object.prototype.toString.call(t);
            return "[object" === e.slice(0, 7) && "Array]" === e.slice(-6)
        }

        function a(t) {
            return null !== t && "[object Object]" === Object.prototype.toString.call(t)
        }
        const r = t => ("number" == typeof t || t instanceof Number) && isFinite(+t);

        function l(t, e) {
            return r(t) ? t : e
        }

        function h(t, e) {
            return void 0 === t ? e : t
        }
        const c = (t, e) => "string" == typeof t && t.endsWith("%") ? parseFloat(t) / 100 * e : +t;

        function d(t, e, i) {
            if (t && "function" == typeof t.call) return t.apply(i, e)
        }

        function u(t, e, i, s) {
            let n, r, l;
            if (o(t))
                if (r = t.length, s)
                    for (n = r - 1; n >= 0; n--) e.call(i, t[n], n);
                else
                    for (n = 0; n < r; n++) e.call(i, t[n], n);
            else if (a(t))
                for (l = Object.keys(t), r = l.length, n = 0; n < r; n++) e.call(i, t[l[n]], l[n])
        }

        function f(t, e) {
            let i, s, n, o;
            if (!t || !e || t.length !== e.length) return !1;
            for (i = 0, s = t.length; i < s; ++i)
                if (n = t[i], o = e[i], n.datasetIndex !== o.datasetIndex || n.index !== o.index) return !1;
            return !0
        }

        function g(t) {
            if (o(t)) return t.map(g);
            if (a(t)) {
                const e = Object.create(null),
                    i = Object.keys(t),
                    s = i.length;
                let n = 0;
                for (; n < s; ++n) e[i[n]] = g(t[i[n]]);
                return e
            }
            return t
        }

        function p(t) {
            return -1 === ["__proto__", "prototype", "constructor"].indexOf(t)
        }

        function m(t, e, i, s) {
            if (!p(t)) return;
            const n = e[t],
                o = i[t];
            a(n) && a(o) ? b(n, o, s) : e[t] = g(o)
        }

        function b(t, e, i) {
            const s = o(e) ? e : [e],
                n = s.length;
            if (!a(t)) return t;
            const r = (i = i || {}).merger || m;
            for (let o = 0; o < n; ++o) {
                if (!a(e = s[o])) continue;
                const n = Object.keys(e);
                for (let s = 0, o = n.length; s < o; ++s) r(n[s], t, e, i)
            }
            return t
        }

        function x(t, e) {
            return b(t, e, {
                merger: _
            })
        }

        function _(t, e, i) {
            if (!p(t)) return;
            const s = e[t],
                n = i[t];
            a(s) && a(n) ? x(s, n) : Object.prototype.hasOwnProperty.call(e, t) || (e[t] = g(n))
        }
        const y = {
            "": t => t,
            x: t => t.x,
            y: t => t.y
        };

        function v(t, e) {
            const i = y[e] || (y[e] = function (t) {
                const e = function (t) {
                    const e = t.split("."),
                        i = [];
                    let s = "";
                    for (const t of e) s += t, s.endsWith("\\") ? s = s.slice(0, -1) + "." : (i.push(s), s = "");
                    return i
                }(t);
                return t => {
                    for (const i of e) {
                        if ("" === i) break;
                        t = t && t[i]
                    }
                    return t
                }
            }(e));
            return i(t)
        }

        function M(t) {
            return t.charAt(0).toUpperCase() + t.slice(1)
        }
        const w = t => void 0 !== t,
            k = t => "function" == typeof t,
            S = (t, e) => {
                if (t.size !== e.size) return !1;
                for (const i of t)
                    if (!e.has(i)) return !1;
                return !0
            },
            P = Math.PI,
            D = 2 * P,
            O = D + P,
            C = Number.POSITIVE_INFINITY,
            A = P / 180,
            T = P / 2,
            L = P / 4,
            E = 2 * P / 3,
            R = Math.log10,
            I = Math.sign;

        function z(t) {
            const e = Math.round(t);
            t = V(t, e, t / 1e3) ? e : t;
            const i = Math.pow(10, Math.floor(R(t))),
                s = t / i;
            return (s <= 1 ? 1 : s <= 2 ? 2 : s <= 5 ? 5 : 10) * i
        }

        function F(t) {
            return !isNaN(parseFloat(t)) && isFinite(t)
        }

        function V(t, e, i) {
            return Math.abs(t - e) < i
        }

        function B(t, e, i) {
            let s, n, o;
            for (s = 0, n = t.length; s < n; s++) o = t[s][i], isNaN(o) || (e.min = Math.min(e.min, o), e.max = Math.max(e.max, o))
        }

        function W(t) {
            return t * (P / 180)
        }

        function N(t) {
            return t * (180 / P)
        }

        function j(t) {
            if (!r(t)) return;
            let e = 1,
                i = 0;
            for (; Math.round(t * e) / e !== t;) e *= 10, i++;
            return i
        }

        function H(t, e) {
            const i = e.x - t.x,
                s = e.y - t.y,
                n = Math.sqrt(i * i + s * s);
            let o = Math.atan2(s, i);
            return o < -.5 * P && (o += D), {
                angle: o,
                distance: n
            }
        }

        function $(t, e) {
            return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2))
        }

        function Y(t, e) {
            return (t - e + O) % D - P
        }

        function U(t) {
            return (t % D + D) % D
        }

        function X(t, e, i, s) {
            const n = U(t),
                o = U(e),
                a = U(i),
                r = U(o - n),
                l = U(a - n),
                h = U(n - o),
                c = U(n - a);
            return n === o || n === a || s && o === a || r > l && h < c
        }

        function q(t, e, i) {
            return Math.max(e, Math.min(i, t))
        }

        function K(t, e, i, s = 1e-6) {
            return t >= Math.min(e, i) - s && t <= Math.max(e, i) + s
        }

        function G(t, e, i) {
            i = i || (i => t[i] < e);
            let s, n = t.length - 1,
                o = 0;
            for (; n - o > 1;) s = o + n >> 1, i(s) ? o = s : n = s;
            return {
                lo: o,
                hi: n
            }
        }
        const Z = (t, e, i, s) => G(t, i, s ? s => t[s][e] <= i : s => t[s][e] < i),
            J = (t, e, i) => G(t, i, (s => t[s][e] >= i)),
            Q = ["push", "pop", "shift", "splice", "unshift"];

        function tt(t, e) {
            const i = t._chartjs;
            if (!i) return;
            const s = i.listeners,
                n = s.indexOf(e); - 1 !== n && s.splice(n, 1), s.length > 0 || (Q.forEach((e => {
                delete t[e]
            })), delete t._chartjs)
        }

        function et(t) {
            const e = new Set;
            let i, s;
            for (i = 0, s = t.length; i < s; ++i) e.add(t[i]);
            return e.size === s ? t : Array.from(e)
        }
        const it = "undefined" == typeof window ? function (t) {
            return t()
        } : window.requestAnimationFrame;

        function st(t, e, i) {
            const s = i || (t => Array.prototype.slice.call(t));
            let n = !1,
                o = [];
            return function (...i) {
                o = s(i), n || (n = !0, it.call(window, (() => {
                    n = !1, t.apply(e, o)
                })))
            }
        }
        const nt = t => "start" === t ? "left" : "end" === t ? "right" : "center",
            ot = (t, e, i) => "start" === t ? e : "end" === t ? i : (e + i) / 2;

        function at(t, e, i) {
            const s = e.length;
            let n = 0,
                o = s;
            if (t._sorted) {
                const {
                    iScale: a,
                    _parsed: r
                } = t, l = a.axis, {
                    min: h,
                    max: c,
                    minDefined: d,
                    maxDefined: u
                } = a.getUserBounds();
                d && (n = q(Math.min(Z(r, a.axis, h).lo, i ? s : Z(e, l, a.getPixelForValue(h)).lo), 0, s - 1)), o = u ? q(Math.max(Z(r, a.axis, c, !0).hi + 1, i ? 0 : Z(e, l, a.getPixelForValue(c), !0).hi + 1), n, s) - n : s - n
            }
            return {
                start: n,
                count: o
            }
        }

        function rt(t) {
            const {
                xScale: e,
                yScale: i,
                _scaleRanges: s
            } = t, n = {
                xmin: e.min,
                xmax: e.max,
                ymin: i.min,
                ymax: i.max
            };
            if (!s) return t._scaleRanges = n, !0;
            const o = s.xmin !== e.min || s.xmax !== e.max || s.ymin !== i.min || s.ymax !== i.max;
            return Object.assign(s, n), o
        }
        const lt = t => 0 === t || 1 === t,
            ht = (t, e, i) => -Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * D / i),
            ct = (t, e, i) => Math.pow(2, -10 * t) * Math.sin((t - e) * D / i) + 1,
            dt = {
                linear: t => t,
                easeInQuad: t => t * t,
                easeOutQuad: t => -t * (t - 2),
                easeInOutQuad: t => (t /= .5) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1),
                easeInCubic: t => t * t * t,
                easeOutCubic: t => (t -= 1) * t * t + 1,
                easeInOutCubic: t => (t /= .5) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2),
                easeInQuart: t => t * t * t * t,
                easeOutQuart: t => -((t -= 1) * t * t * t - 1),
                easeInOutQuart: t => (t /= .5) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2),
                easeInQuint: t => t * t * t * t * t,
                easeOutQuint: t => (t -= 1) * t * t * t * t + 1,
                easeInOutQuint: t => (t /= .5) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2),
                easeInSine: t => 1 - Math.cos(t * T),
                easeOutSine: t => Math.sin(t * T),
                easeInOutSine: t => -.5 * (Math.cos(P * t) - 1),
                easeInExpo: t => 0 === t ? 0 : Math.pow(2, 10 * (t - 1)),
                easeOutExpo: t => 1 === t ? 1 : 1 - Math.pow(2, -10 * t),
                easeInOutExpo: t => lt(t) ? t : t < .5 ? .5 * Math.pow(2, 10 * (2 * t - 1)) : .5 * (2 - Math.pow(2, -10 * (2 * t - 1))),
                easeInCirc: t => t >= 1 ? t : -(Math.sqrt(1 - t * t) - 1),
                easeOutCirc: t => Math.sqrt(1 - (t -= 1) * t),
                easeInOutCirc: t => (t /= .5) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1),
                easeInElastic: t => lt(t) ? t : ht(t, .075, .3),
                easeOutElastic: t => lt(t) ? t : ct(t, .075, .3),
                easeInOutElastic(t) {
                    const e = .1125;
                    return lt(t) ? t : t < .5 ? .5 * ht(2 * t, e, .45) : .5 + .5 * ct(2 * t - 1, e, .45)
                },
                easeInBack(t) {
                    const e = 1.70158;
                    return t * t * ((e + 1) * t - e)
                },
                easeOutBack(t) {
                    const e = 1.70158;
                    return (t -= 1) * t * ((e + 1) * t + e) + 1
                },
                easeInOutBack(t) {
                    let e = 1.70158;
                    return (t /= .5) < 1 ? t * t * ((1 + (e *= 1.525)) * t - e) * .5 : .5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2)
                },
                easeInBounce: t => 1 - dt.easeOutBounce(1 - t),
                easeOutBounce(t) {
                    const e = 7.5625,
                        i = 2.75;
                    return t < 1 / i ? e * t * t : t < 2 / i ? e * (t -= 1.5 / i) * t + .75 : t < 2.5 / i ? e * (t -= 2.25 / i) * t + .9375 : e * (t -= 2.625 / i) * t + .984375
                },
                easeInOutBounce: t => t < .5 ? .5 * dt.easeInBounce(2 * t) : .5 * dt.easeOutBounce(2 * t - 1) + .5
            };

        function ut(t) {
            return t + .5 | 0
        }
        const ft = (t, e, i) => Math.max(Math.min(t, i), e);

        function gt(t) {
            return ft(ut(2.55 * t), 0, 255)
        }

        function pt(t) {
            return ft(ut(255 * t), 0, 255)
        }

        function mt(t) {
            return ft(ut(t / 2.55) / 100, 0, 1)
        }

        function bt(t) {
            return ft(ut(100 * t), 0, 100)
        }
        const xt = {
                0: 0,
                1: 1,
                2: 2,
                3: 3,
                4: 4,
                5: 5,
                6: 6,
                7: 7,
                8: 8,
                9: 9,
                A: 10,
                B: 11,
                C: 12,
                D: 13,
                E: 14,
                F: 15,
                a: 10,
                b: 11,
                c: 12,
                d: 13,
                e: 14,
                f: 15
            },
            _t = [..."0123456789ABCDEF"],
            yt = t => _t[15 & t],
            vt = t => _t[(240 & t) >> 4] + _t[15 & t],
            Mt = t => (240 & t) >> 4 == (15 & t);
        const wt = /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;

        function kt(t, e, i) {
            const s = e * Math.min(i, 1 - i),
                n = (e, n = (e + t / 30) % 12) => i - s * Math.max(Math.min(n - 3, 9 - n, 1), -1);
            return [n(0), n(8), n(4)]
        }

        function St(t, e, i) {
            const s = (s, n = (s + t / 60) % 6) => i - i * e * Math.max(Math.min(n, 4 - n, 1), 0);
            return [s(5), s(3), s(1)]
        }

        function Pt(t, e, i) {
            const s = kt(t, 1, .5);
            let n;
            for (e + i > 1 && (n = 1 / (e + i), e *= n, i *= n), n = 0; n < 3; n++) s[n] *= 1 - e - i, s[n] += e;
            return s
        }

        function Dt(t) {
            const e = t.r / 255,
                i = t.g / 255,
                s = t.b / 255,
                n = Math.max(e, i, s),
                o = Math.min(e, i, s),
                a = (n + o) / 2;
            let r, l, h;
            return n !== o && (h = n - o, l = a > .5 ? h / (2 - n - o) : h / (n + o), r = function (t, e, i, s, n) {
                return t === n ? (e - i) / s + (e < i ? 6 : 0) : e === n ? (i - t) / s + 2 : (t - e) / s + 4
            }(e, i, s, h, n), r = 60 * r + .5), [0 | r, l || 0, a]
        }

        function Ot(t, e, i, s) {
            return (Array.isArray(e) ? t(e[0], e[1], e[2]) : t(e, i, s)).map(pt)
        }

        function Ct(t, e, i) {
            return Ot(kt, t, e, i)
        }

        function At(t) {
            return (t % 360 + 360) % 360
        }
        const Tt = {
                x: "dark",
                Z: "light",
                Y: "re",
                X: "blu",
                W: "gr",
                V: "medium",
                U: "slate",
                A: "ee",
                T: "ol",
                S: "or",
                B: "ra",
                C: "lateg",
                D: "ights",
                R: "in",
                Q: "turquois",
                E: "hi",
                P: "ro",
                O: "al",
                N: "le",
                M: "de",
                L: "yello",
                F: "en",
                K: "ch",
                G: "arks",
                H: "ea",
                I: "ightg",
                J: "wh"
            },
            Lt = {
                OiceXe: "f0f8ff",
                antiquewEte: "faebd7",
                aqua: "ffff",
                aquamarRe: "7fffd4",
                azuY: "f0ffff",
                beige: "f5f5dc",
                bisque: "ffe4c4",
                black: "0",
                blanKedOmond: "ffebcd",
                Xe: "ff",
                XeviTet: "8a2be2",
                bPwn: "a52a2a",
                burlywood: "deb887",
                caMtXe: "5f9ea0",
                KartYuse: "7fff00",
                KocTate: "d2691e",
                cSO: "ff7f50",
                cSnflowerXe: "6495ed",
                cSnsilk: "fff8dc",
                crimson: "dc143c",
                cyan: "ffff",
                xXe: "8b",
                xcyan: "8b8b",
                xgTMnPd: "b8860b",
                xWay: "a9a9a9",
                xgYF: "6400",
                xgYy: "a9a9a9",
                xkhaki: "bdb76b",
                xmagFta: "8b008b",
                xTivegYF: "556b2f",
                xSange: "ff8c00",
                xScEd: "9932cc",
                xYd: "8b0000",
                xsOmon: "e9967a",
                xsHgYF: "8fbc8f",
                xUXe: "483d8b",
                xUWay: "2f4f4f",
                xUgYy: "2f4f4f",
                xQe: "ced1",
                xviTet: "9400d3",
                dAppRk: "ff1493",
                dApskyXe: "bfff",
                dimWay: "696969",
                dimgYy: "696969",
                dodgerXe: "1e90ff",
                fiYbrick: "b22222",
                flSOwEte: "fffaf0",
                foYstWAn: "228b22",
                fuKsia: "ff00ff",
                gaRsbSo: "dcdcdc",
                ghostwEte: "f8f8ff",
                gTd: "ffd700",
                gTMnPd: "daa520",
                Way: "808080",
                gYF: "8000",
                gYFLw: "adff2f",
                gYy: "808080",
                honeyMw: "f0fff0",
                hotpRk: "ff69b4",
                RdianYd: "cd5c5c",
                Rdigo: "4b0082",
                ivSy: "fffff0",
                khaki: "f0e68c",
                lavFMr: "e6e6fa",
                lavFMrXsh: "fff0f5",
                lawngYF: "7cfc00",
                NmoncEffon: "fffacd",
                ZXe: "add8e6",
                ZcSO: "f08080",
                Zcyan: "e0ffff",
                ZgTMnPdLw: "fafad2",
                ZWay: "d3d3d3",
                ZgYF: "90ee90",
                ZgYy: "d3d3d3",
                ZpRk: "ffb6c1",
                ZsOmon: "ffa07a",
                ZsHgYF: "20b2aa",
                ZskyXe: "87cefa",
                ZUWay: "778899",
                ZUgYy: "778899",
                ZstAlXe: "b0c4de",
                ZLw: "ffffe0",
                lime: "ff00",
                limegYF: "32cd32",
                lRF: "faf0e6",
                magFta: "ff00ff",
                maPon: "800000",
                VaquamarRe: "66cdaa",
                VXe: "cd",
                VScEd: "ba55d3",
                VpurpN: "9370db",
                VsHgYF: "3cb371",
                VUXe: "7b68ee",
                VsprRggYF: "fa9a",
                VQe: "48d1cc",
                VviTetYd: "c71585",
                midnightXe: "191970",
                mRtcYam: "f5fffa",
                mistyPse: "ffe4e1",
                moccasR: "ffe4b5",
                navajowEte: "ffdead",
                navy: "80",
                Tdlace: "fdf5e6",
                Tive: "808000",
                TivedBb: "6b8e23",
                Sange: "ffa500",
                SangeYd: "ff4500",
                ScEd: "da70d6",
                pOegTMnPd: "eee8aa",
                pOegYF: "98fb98",
                pOeQe: "afeeee",
                pOeviTetYd: "db7093",
                papayawEp: "ffefd5",
                pHKpuff: "ffdab9",
                peru: "cd853f",
                pRk: "ffc0cb",
                plum: "dda0dd",
                powMrXe: "b0e0e6",
                purpN: "800080",
                YbeccapurpN: "663399",
                Yd: "ff0000",
                Psybrown: "bc8f8f",
                PyOXe: "4169e1",
                saddNbPwn: "8b4513",
                sOmon: "fa8072",
                sandybPwn: "f4a460",
                sHgYF: "2e8b57",
                sHshell: "fff5ee",
                siFna: "a0522d",
                silver: "c0c0c0",
                skyXe: "87ceeb",
                UXe: "6a5acd",
                UWay: "708090",
                UgYy: "708090",
                snow: "fffafa",
                sprRggYF: "ff7f",
                stAlXe: "4682b4",
                tan: "d2b48c",
                teO: "8080",
                tEstN: "d8bfd8",
                tomato: "ff6347",
                Qe: "40e0d0",
                viTet: "ee82ee",
                JHt: "f5deb3",
                wEte: "ffffff",
                wEtesmoke: "f5f5f5",
                Lw: "ffff00",
                LwgYF: "9acd32"
            };
        let Et;
        const Rt = /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/,
            It = t => t <= .0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - .055,
            zt = t => t <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4);

        function Ft(t, e, i) {
            if (t) {
                let s = Dt(t);
                s[e] = Math.max(0, Math.min(s[e] + s[e] * i, 0 === e ? 360 : 1)), s = Ct(s), t.r = s[0], t.g = s[1], t.b = s[2]
            }
        }

        function Vt(t, e) {
            return t ? Object.assign(e || {}, t) : t
        }

        function Bt(t) {
            var e = {
                r: 0,
                g: 0,
                b: 0,
                a: 255
            };
            return Array.isArray(t) ? t.length >= 3 && (e = {
                r: t[0],
                g: t[1],
                b: t[2],
                a: 255
            }, t.length > 3 && (e.a = pt(t[3]))) : (e = Vt(t, {
                r: 0,
                g: 0,
                b: 0,
                a: 1
            })).a = pt(e.a), e
        }

        function Wt(t) {
            return "r" === t.charAt(0) ? function (t) {
                const e = Rt.exec(t);
                let i, s, n, o = 255;
                if (e) {
                    if (e[7] !== i) {
                        const t = +e[7];
                        o = e[8] ? gt(t) : ft(255 * t, 0, 255)
                    }
                    return i = +e[1], s = +e[3], n = +e[5], i = 255 & (e[2] ? gt(i) : ft(i, 0, 255)), s = 255 & (e[4] ? gt(s) : ft(s, 0, 255)), n = 255 & (e[6] ? gt(n) : ft(n, 0, 255)), {
                        r: i,
                        g: s,
                        b: n,
                        a: o
                    }
                }
            }(t) : function (t) {
                const e = wt.exec(t);
                let i, s = 255;
                if (!e) return;
                e[5] !== i && (s = e[6] ? gt(+e[5]) : pt(+e[5]));
                const n = At(+e[2]),
                    o = +e[3] / 100,
                    a = +e[4] / 100;
                return i = "hwb" === e[1] ? function (t, e, i) {
                    return Ot(Pt, t, e, i)
                }(n, o, a) : "hsv" === e[1] ? function (t, e, i) {
                    return Ot(St, t, e, i)
                }(n, o, a) : Ct(n, o, a), {
                    r: i[0],
                    g: i[1],
                    b: i[2],
                    a: s
                }
            }(t)
        }
        class Nt {
            constructor(t) {
                if (t instanceof Nt) return t;
                const e = typeof t;
                let i;
                var s, n, o;
                "object" === e ? i = Bt(t) : "string" === e && (o = (s = t).length, "#" === s[0] && (4 === o || 5 === o ? n = {
                    r: 255 & 17 * xt[s[1]],
                    g: 255 & 17 * xt[s[2]],
                    b: 255 & 17 * xt[s[3]],
                    a: 5 === o ? 17 * xt[s[4]] : 255
                } : 7 !== o && 9 !== o || (n = {
                    r: xt[s[1]] << 4 | xt[s[2]],
                    g: xt[s[3]] << 4 | xt[s[4]],
                    b: xt[s[5]] << 4 | xt[s[6]],
                    a: 9 === o ? xt[s[7]] << 4 | xt[s[8]] : 255
                })), i = n || function (t) {
                    Et || (Et = function () {
                        const t = {},
                            e = Object.keys(Lt),
                            i = Object.keys(Tt);
                        let s, n, o, a, r;
                        for (s = 0; s < e.length; s++) {
                            for (a = r = e[s], n = 0; n < i.length; n++) o = i[n], r = r.replace(o, Tt[o]);
                            o = parseInt(Lt[a], 16), t[r] = [o >> 16 & 255, o >> 8 & 255, 255 & o]
                        }
                        return t
                    }(), Et.transparent = [0, 0, 0, 0]);
                    const e = Et[t.toLowerCase()];
                    return e && {
                        r: e[0],
                        g: e[1],
                        b: e[2],
                        a: 4 === e.length ? e[3] : 255
                    }
                }(t) || Wt(t)), this._rgb = i, this._valid = !!i
            }
            get valid() {
                return this._valid
            }
            get rgb() {
                var t = Vt(this._rgb);
                return t && (t.a = mt(t.a)), t
            }
            set rgb(t) {
                this._rgb = Bt(t)
            }
            rgbString() {
                return this._valid ? (t = this._rgb) && (t.a < 255 ? `rgba(${t.r}, ${t.g}, ${t.b}, ${mt(t.a)})` : `rgb(${t.r}, ${t.g}, ${t.b})`) : void 0;
                var t
            }
            hexString() {
                return this._valid ? (t = this._rgb, e = (t => Mt(t.r) && Mt(t.g) && Mt(t.b) && Mt(t.a))(t) ? yt : vt, t ? "#" + e(t.r) + e(t.g) + e(t.b) + ((t, e) => t < 255 ? e(t) : "")(t.a, e) : void 0) : void 0;
                var t, e
            }
            hslString() {
                return this._valid ? function (t) {
                    if (!t) return;
                    const e = Dt(t),
                        i = e[0],
                        s = bt(e[1]),
                        n = bt(e[2]);
                    return t.a < 255 ? `hsla(${i}, ${s}%, ${n}%, ${mt(t.a)})` : `hsl(${i}, ${s}%, ${n}%)`
                }(this._rgb) : void 0
            }
            mix(t, e) {
                if (t) {
                    const i = this.rgb,
                        s = t.rgb;
                    let n;
                    const o = e === n ? .5 : e,
                        a = 2 * o - 1,
                        r = i.a - s.a,
                        l = ((a * r == -1 ? a : (a + r) / (1 + a * r)) + 1) / 2;
                    n = 1 - l, i.r = 255 & l * i.r + n * s.r + .5, i.g = 255 & l * i.g + n * s.g + .5, i.b = 255 & l * i.b + n * s.b + .5, i.a = o * i.a + (1 - o) * s.a, this.rgb = i
                }
                return this
            }
            interpolate(t, e) {
                return t && (this._rgb = function (t, e, i) {
                    const s = zt(mt(t.r)),
                        n = zt(mt(t.g)),
                        o = zt(mt(t.b));
                    return {
                        r: pt(It(s + i * (zt(mt(e.r)) - s))),
                        g: pt(It(n + i * (zt(mt(e.g)) - n))),
                        b: pt(It(o + i * (zt(mt(e.b)) - o))),
                        a: t.a + i * (e.a - t.a)
                    }
                }(this._rgb, t._rgb, e)), this
            }
            clone() {
                return new Nt(this.rgb)
            }
            alpha(t) {
                return this._rgb.a = pt(t), this
            }
            clearer(t) {
                return this._rgb.a *= 1 - t, this
            }
            greyscale() {
                const t = this._rgb,
                    e = ut(.3 * t.r + .59 * t.g + .11 * t.b);
                return t.r = t.g = t.b = e, this
            }
            opaquer(t) {
                return this._rgb.a *= 1 + t, this
            }
            negate() {
                const t = this._rgb;
                return t.r = 255 - t.r, t.g = 255 - t.g, t.b = 255 - t.b, this
            }
            lighten(t) {
                return Ft(this._rgb, 2, t), this
            }
            darken(t) {
                return Ft(this._rgb, 2, -t), this
            }
            saturate(t) {
                return Ft(this._rgb, 1, t), this
            }
            desaturate(t) {
                return Ft(this._rgb, 1, -t), this
            }
            rotate(t) {
                return function (t, e) {
                    var i = Dt(t);
                    i[0] = At(i[0] + e), i = Ct(i), t.r = i[0], t.g = i[1], t.b = i[2]
                }(this._rgb, t), this
            }
        }

        function jt(t) {
            return new Nt(t)
        }

        function Ht(t) {
            if (t && "object" == typeof t) {
                const e = t.toString();
                return "[object CanvasPattern]" === e || "[object CanvasGradient]" === e
            }
            return !1
        }

        function $t(t) {
            return Ht(t) ? t : jt(t)
        }

        function Yt(t) {
            return Ht(t) ? t : jt(t).saturate(.5).darken(.1).hexString()
        }
        const Ut = Object.create(null),
            Xt = Object.create(null);

        function qt(t, e) {
            if (!e) return t;
            const i = e.split(".");
            for (let e = 0, s = i.length; e < s; ++e) {
                const s = i[e];
                t = t[s] || (t[s] = Object.create(null))
            }
            return t
        }

        function Kt(t, e, i) {
            return "string" == typeof e ? b(qt(t, e), i) : b(qt(t, ""), e)
        }
        var Gt = new class {
            constructor(t) {
                this.animation = void 0, this.backgroundColor = "rgba(0,0,0,0.1)", this.borderColor = "rgba(0,0,0,0.1)", this.color = "#666", this.datasets = {}, this.devicePixelRatio = t => t.chart.platform.getDevicePixelRatio(), this.elements = {}, this.events = ["mousemove", "mouseout", "click", "touchstart", "touchmove"], this.font = {
                    family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                    size: 12,
                    style: "normal",
                    lineHeight: 1.2,
                    weight: null
                }, this.hover = {}, this.hoverBackgroundColor = (t, e) => Yt(e.backgroundColor), this.hoverBorderColor = (t, e) => Yt(e.borderColor), this.hoverColor = (t, e) => Yt(e.color), this.indexAxis = "x", this.interaction = {
                    mode: "nearest",
                    intersect: !0,
                    includeInvisible: !1
                }, this.maintainAspectRatio = !0, this.onHover = null, this.onClick = null, this.parsing = !0, this.plugins = {}, this.responsive = !0, this.scale = void 0, this.scales = {}, this.showLine = !0, this.drawActiveElementsOnTop = !0, this.describe(t)
            }
            set(t, e) {
                return Kt(this, t, e)
            }
            get(t) {
                return qt(this, t)
            }
            describe(t, e) {
                return Kt(Xt, t, e)
            }
            override(t, e) {
                return Kt(Ut, t, e)
            }
            route(t, e, i, s) {
                const n = qt(this, t),
                    o = qt(this, i),
                    r = "_" + e;
                Object.defineProperties(n, {
                    [r]: {
                        value: n[e],
                        writable: !0
                    },
                    [e]: {
                        enumerable: !0,
                        get() {
                            const t = this[r],
                                e = o[s];
                            return a(t) ? Object.assign({}, e, t) : h(t, e)
                        },
                        set(t) {
                            this[r] = t
                        }
                    }
                })
            }
        }({
            _scriptable: t => !t.startsWith("on"),
            _indexable: t => "events" !== t,
            hover: {
                _fallback: "interaction"
            },
            interaction: {
                _scriptable: !1,
                _indexable: !1
            }
        });

        function Zt(t, e, i, s, n) {
            let o = e[n];
            return o || (o = e[n] = t.measureText(n).width, i.push(n)), o > s && (s = o), s
        }

        function Jt(t, e, i, s) {
            let n = (s = s || {}).data = s.data || {},
                a = s.garbageCollect = s.garbageCollect || [];
            s.font !== e && (n = s.data = {}, a = s.garbageCollect = [], s.font = e), t.save(), t.font = e;
            let r = 0;
            const l = i.length;
            let h, c, d, u, f;
            for (h = 0; h < l; h++)
                if (u = i[h], null != u && !0 !== o(u)) r = Zt(t, n, a, r, u);
                else if (o(u))
                for (c = 0, d = u.length; c < d; c++) f = u[c], null == f || o(f) || (r = Zt(t, n, a, r, f));
            t.restore();
            const g = a.length / 2;
            if (g > i.length) {
                for (h = 0; h < g; h++) delete n[a[h]];
                a.splice(0, g)
            }
            return r
        }

        function Qt(t, e, i) {
            const s = t.currentDevicePixelRatio,
                n = 0 !== i ? Math.max(i / 2, .5) : 0;
            return Math.round((e - n) * s) / s + n
        }

        function te(t, e) {
            (e = e || t.getContext("2d")).save(), e.resetTransform(), e.clearRect(0, 0, t.width, t.height), e.restore()
        }

        function ee(t, e, i, s) {
            ie(t, e, i, s, null)
        }

        function ie(t, e, i, s, n) {
            let o, a, r, l, h, c;
            const d = e.pointStyle,
                u = e.rotation,
                f = e.radius;
            let g = (u || 0) * A;
            if (d && "object" == typeof d && (o = d.toString(), "[object HTMLImageElement]" === o || "[object HTMLCanvasElement]" === o)) return t.save(), t.translate(i, s), t.rotate(g), t.drawImage(d, -d.width / 2, -d.height / 2, d.width, d.height), void t.restore();
            if (!(isNaN(f) || f <= 0)) {
                switch (t.beginPath(), d) {
                    default:
                        n ? t.ellipse(i, s, n / 2, f, 0, 0, D) : t.arc(i, s, f, 0, D), t.closePath();
                        break;
                    case "triangle":
                        t.moveTo(i + Math.sin(g) * f, s - Math.cos(g) * f), g += E, t.lineTo(i + Math.sin(g) * f, s - Math.cos(g) * f), g += E, t.lineTo(i + Math.sin(g) * f, s - Math.cos(g) * f), t.closePath();
                        break;
                    case "rectRounded":
                        h = .516 * f, l = f - h, a = Math.cos(g + L) * l, r = Math.sin(g + L) * l, t.arc(i - a, s - r, h, g - P, g - T), t.arc(i + r, s - a, h, g - T, g), t.arc(i + a, s + r, h, g, g + T), t.arc(i - r, s + a, h, g + T, g + P), t.closePath();
                        break;
                    case "rect":
                        if (!u) {
                            l = Math.SQRT1_2 * f, c = n ? n / 2 : l, t.rect(i - c, s - l, 2 * c, 2 * l);
                            break
                        }
                        g += L;
                    case "rectRot":
                        a = Math.cos(g) * f, r = Math.sin(g) * f, t.moveTo(i - a, s - r), t.lineTo(i + r, s - a), t.lineTo(i + a, s + r), t.lineTo(i - r, s + a), t.closePath();
                        break;
                    case "crossRot":
                        g += L;
                    case "cross":
                        a = Math.cos(g) * f, r = Math.sin(g) * f, t.moveTo(i - a, s - r), t.lineTo(i + a, s + r), t.moveTo(i + r, s - a), t.lineTo(i - r, s + a);
                        break;
                    case "star":
                        a = Math.cos(g) * f, r = Math.sin(g) * f, t.moveTo(i - a, s - r), t.lineTo(i + a, s + r), t.moveTo(i + r, s - a), t.lineTo(i - r, s + a), g += L, a = Math.cos(g) * f, r = Math.sin(g) * f, t.moveTo(i - a, s - r), t.lineTo(i + a, s + r), t.moveTo(i + r, s - a), t.lineTo(i - r, s + a);
                        break;
                    case "line":
                        a = n ? n / 2 : Math.cos(g) * f, r = Math.sin(g) * f, t.moveTo(i - a, s - r), t.lineTo(i + a, s + r);
                        break;
                    case "dash":
                        t.moveTo(i, s), t.lineTo(i + Math.cos(g) * f, s + Math.sin(g) * f)
                }
                t.fill(), e.borderWidth > 0 && t.stroke()
            }
        }

        function se(t, e, i) {
            return i = i || .5, !e || t && t.x > e.left - i && t.x < e.right + i && t.y > e.top - i && t.y < e.bottom + i
        }

        function ne(t, e) {
            t.save(), t.beginPath(), t.rect(e.left, e.top, e.right - e.left, e.bottom - e.top), t.clip()
        }

        function oe(t) {
            t.restore()
        }

        function ae(t, e, i, s, n) {
            if (!e) return t.lineTo(i.x, i.y);
            if ("middle" === n) {
                const s = (e.x + i.x) / 2;
                t.lineTo(s, e.y), t.lineTo(s, i.y)
            } else "after" === n != !!s ? t.lineTo(e.x, i.y) : t.lineTo(i.x, e.y);
            t.lineTo(i.x, i.y)
        }

        function re(t, e, i, s) {
            if (!e) return t.lineTo(i.x, i.y);
            t.bezierCurveTo(s ? e.cp1x : e.cp2x, s ? e.cp1y : e.cp2y, s ? i.cp2x : i.cp1x, s ? i.cp2y : i.cp1y, i.x, i.y)
        }

        function le(t, e, i, s, a, r = {}) {
            const l = o(e) ? e : [e],
                h = r.strokeWidth > 0 && "" !== r.strokeColor;
            let c, d;
            for (t.save(), t.font = a.string, function (t, e) {
                    e.translation && t.translate(e.translation[0], e.translation[1]), n(e.rotation) || t.rotate(e.rotation), e.color && (t.fillStyle = e.color), e.textAlign && (t.textAlign = e.textAlign), e.textBaseline && (t.textBaseline = e.textBaseline)
                }(t, r), c = 0; c < l.length; ++c) d = l[c], h && (r.strokeColor && (t.strokeStyle = r.strokeColor), n(r.strokeWidth) || (t.lineWidth = r.strokeWidth), t.strokeText(d, i, s, r.maxWidth)), t.fillText(d, i, s, r.maxWidth), he(t, i, s, d, r), s += a.lineHeight;
            t.restore()
        }

        function he(t, e, i, s, n) {
            if (n.strikethrough || n.underline) {
                const o = t.measureText(s),
                    a = e - o.actualBoundingBoxLeft,
                    r = e + o.actualBoundingBoxRight,
                    l = i - o.actualBoundingBoxAscent,
                    h = i + o.actualBoundingBoxDescent,
                    c = n.strikethrough ? (l + h) / 2 : h;
                t.strokeStyle = t.fillStyle, t.beginPath(), t.lineWidth = n.decorationWidth || 2, t.moveTo(a, c), t.lineTo(r, c), t.stroke()
            }
        }

        function ce(t, e) {
            const {
                x: i,
                y: s,
                w: n,
                h: o,
                radius: a
            } = e;
            t.arc(i + a.topLeft, s + a.topLeft, a.topLeft, -T, P, !0), t.lineTo(i, s + o - a.bottomLeft), t.arc(i + a.bottomLeft, s + o - a.bottomLeft, a.bottomLeft, P, T, !0), t.lineTo(i + n - a.bottomRight, s + o), t.arc(i + n - a.bottomRight, s + o - a.bottomRight, a.bottomRight, T, 0, !0), t.lineTo(i + n, s + a.topRight), t.arc(i + n - a.topRight, s + a.topRight, a.topRight, 0, -T, !0), t.lineTo(i + a.topLeft, s)
        }
        const de = new RegExp(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/),
            ue = new RegExp(/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/);

        function fe(t, e) {
            const i = ("" + t).match(de);
            if (!i || "normal" === i[1]) return 1.2 * e;
            switch (t = +i[2], i[3]) {
                case "px":
                    return t;
                case "%":
                    t /= 100
            }
            return e * t
        }

        function ge(t, e) {
            const i = {},
                s = a(e),
                n = s ? Object.keys(e) : e,
                o = a(t) ? s ? i => h(t[i], t[e[i]]) : e => t[e] : () => t;
            for (const t of n) i[t] = +o(t) || 0;
            return i
        }

        function pe(t) {
            return ge(t, {
                top: "y",
                right: "x",
                bottom: "y",
                left: "x"
            })
        }

        function me(t) {
            return ge(t, ["topLeft", "topRight", "bottomLeft", "bottomRight"])
        }

        function be(t) {
            const e = pe(t);
            return e.width = e.left + e.right, e.height = e.top + e.bottom, e
        }

        function xe(t, e) {
            t = t || {}, e = e || Gt.font;
            let i = h(t.size, e.size);
            "string" == typeof i && (i = parseInt(i, 10));
            let s = h(t.style, e.style);
            s && !("" + s).match(ue) && (console.warn('Invalid font style specified: "' + s + '"'), s = "");
            const o = {
                family: h(t.family, e.family),
                lineHeight: fe(h(t.lineHeight, e.lineHeight), i),
                size: i,
                style: s,
                weight: h(t.weight, e.weight),
                string: ""
            };
            return o.string = function (t) {
                return !t || n(t.size) || n(t.family) ? null : (t.style ? t.style + " " : "") + (t.weight ? t.weight + " " : "") + t.size + "px " + t.family
            }(o), o
        }

        function _e(t, e, i, s) {
            let n, a, r, l = !0;
            for (n = 0, a = t.length; n < a; ++n)
                if (r = t[n], void 0 !== r && (void 0 !== e && "function" == typeof r && (r = r(e), l = !1), void 0 !== i && o(r) && (r = r[i % r.length], l = !1), void 0 !== r)) return s && !l && (s.cacheable = !1), r
        }

        function ye(t, e) {
            return Object.assign(Object.create(t), e)
        }

        function ve(t, e = [""], i = t, s, n = (() => t[0])) {
            w(s) || (s = Le("_fallback", t));
            const o = {
                [Symbol.toStringTag]: "Object",
                _cacheable: !0,
                _scopes: t,
                _rootScopes: i,
                _fallback: s,
                _getTarget: n,
                override: n => ve([n, ...t], e, i, s)
            };
            return new Proxy(o, {
                deleteProperty(e, i) {
                    return delete e[i], delete e._keys, delete t[0][i], !0
                },
                get(i, s) {
                    return Pe(i, s, (() => function (t, e, i, s) {
                        let n;
                        for (const o of e)
                            if (n = Le(ke(o, t), i), w(n)) return Se(t, n) ? Ae(i, s, t, n) : n
                    }(s, e, t, i)))
                },
                getOwnPropertyDescriptor(t, e) {
                    return Reflect.getOwnPropertyDescriptor(t._scopes[0], e)
                },
                getPrototypeOf() {
                    return Reflect.getPrototypeOf(t[0])
                },
                has(t, e) {
                    return Ee(t).includes(e)
                },
                ownKeys(t) {
                    return Ee(t)
                },
                set(t, e, i) {
                    const s = t._storage || (t._storage = n());
                    return t[e] = s[e] = i, delete t._keys, !0
                }
            })
        }

        function Me(t, e, i, s) {
            const n = {
                _cacheable: !1,
                _proxy: t,
                _context: e,
                _subProxy: i,
                _stack: new Set,
                _descriptors: we(t, s),
                setContext: e => Me(t, e, i, s),
                override: n => Me(t.override(n), e, i, s)
            };
            return new Proxy(n, {
                deleteProperty(e, i) {
                    return delete e[i], delete t[i], !0
                },
                get(t, e, i) {
                    return Pe(t, e, (() => function (t, e, i) {
                        const {
                            _proxy: s,
                            _context: n,
                            _subProxy: r,
                            _descriptors: l
                        } = t;
                        let h = s[e];
                        return k(h) && l.isScriptable(e) && (h = function (t, e, i, s) {
                            const {
                                _proxy: n,
                                _context: o,
                                _subProxy: a,
                                _stack: r
                            } = i;
                            if (r.has(t)) throw new Error("Recursion detected: " + Array.from(r).join("->") + "->" + t);
                            return r.add(t), e = e(o, a || s), r.delete(t), Se(t, e) && (e = Ae(n._scopes, n, t, e)), e
                        }(e, h, t, i)), o(h) && h.length && (h = function (t, e, i, s) {
                            const {
                                _proxy: n,
                                _context: o,
                                _subProxy: r,
                                _descriptors: l
                            } = i;
                            if (w(o.index) && s(t)) e = e[o.index % e.length];
                            else if (a(e[0])) {
                                const i = e,
                                    s = n._scopes.filter((t => t !== i));
                                e = [];
                                for (const a of i) {
                                    const i = Ae(s, n, t, a);
                                    e.push(Me(i, o, r && r[t], l))
                                }
                            }
                            return e
                        }(e, h, t, l.isIndexable)), Se(e, h) && (h = Me(h, n, r && r[e], l)), h
                    }(t, e, i)))
                },
                getOwnPropertyDescriptor(e, i) {
                    return e._descriptors.allKeys ? Reflect.has(t, i) ? {
                        enumerable: !0,
                        configurable: !0
                    } : void 0 : Reflect.getOwnPropertyDescriptor(t, i)
                },
                getPrototypeOf() {
                    return Reflect.getPrototypeOf(t)
                },
                has(e, i) {
                    return Reflect.has(t, i)
                },
                ownKeys() {
                    return Reflect.ownKeys(t)
                },
                set(e, i, s) {
                    return t[i] = s, delete e[i], !0
                }
            })
        }

        function we(t, e = {
            scriptable: !0,
            indexable: !0
        }) {
            const {
                _scriptable: i = e.scriptable,
                _indexable: s = e.indexable,
                _allKeys: n = e.allKeys
            } = t;
            return {
                allKeys: n,
                scriptable: i,
                indexable: s,
                isScriptable: k(i) ? i : () => i,
                isIndexable: k(s) ? s : () => s
            }
        }
        const ke = (t, e) => t ? t + M(e) : e,
            Se = (t, e) => a(e) && "adapters" !== t && (null === Object.getPrototypeOf(e) || e.constructor === Object);

        function Pe(t, e, i) {
            if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
            const s = i();
            return t[e] = s, s
        }

        function De(t, e, i) {
            return k(t) ? t(e, i) : t
        }
        const Oe = (t, e) => !0 === t ? e : "string" == typeof t ? v(e, t) : void 0;

        function Ce(t, e, i, s, n) {
            for (const o of e) {
                const e = Oe(i, o);
                if (e) {
                    t.add(e);
                    const o = De(e._fallback, i, n);
                    if (w(o) && o !== i && o !== s) return o
                } else if (!1 === e && w(s) && i !== s) return null
            }
            return !1
        }

        function Ae(t, e, i, s) {
            const n = e._rootScopes,
                r = De(e._fallback, i, s),
                l = [...t, ...n],
                h = new Set;
            h.add(s);
            let c = Te(h, l, i, r || i, s);
            return null !== c && (!w(r) || r === i || (c = Te(h, l, r, c, s), null !== c)) && ve(Array.from(h), [""], n, r, (() => function (t, e, i) {
                const s = t._getTarget();
                e in s || (s[e] = {});
                const n = s[e];
                return o(n) && a(i) ? i : n
            }(e, i, s)))
        }

        function Te(t, e, i, s, n) {
            for (; i;) i = Ce(t, e, i, s, n);
            return i
        }

        function Le(t, e) {
            for (const i of e) {
                if (!i) continue;
                const e = i[t];
                if (w(e)) return e
            }
        }

        function Ee(t) {
            let e = t._keys;
            return e || (e = t._keys = function (t) {
                const e = new Set;
                for (const i of t)
                    for (const t of Object.keys(i).filter((t => !t.startsWith("_")))) e.add(t);
                return Array.from(e)
            }(t._scopes)), e
        }

        function Re(t, e, i, s) {
            const {
                iScale: n
            } = t, {
                key: o = "r"
            } = this._parsing, a = new Array(s);
            let r, l, h, c;
            for (r = 0, l = s; r < l; ++r) h = r + i, c = e[h], a[r] = {
                r: n.parse(v(c, o), h)
            };
            return a
        }
        const Ie = Number.EPSILON || 1e-14,
            ze = (t, e) => e < t.length && !t[e].skip && t[e],
            Fe = t => "x" === t ? "y" : "x";

        function Ve(t, e, i, s) {
            const n = t.skip ? e : t,
                o = e,
                a = i.skip ? e : i,
                r = $(o, n),
                l = $(a, o);
            let h = r / (r + l),
                c = l / (r + l);
            h = isNaN(h) ? 0 : h, c = isNaN(c) ? 0 : c;
            const d = s * h,
                u = s * c;
            return {
                previous: {
                    x: o.x - d * (a.x - n.x),
                    y: o.y - d * (a.y - n.y)
                },
                next: {
                    x: o.x + u * (a.x - n.x),
                    y: o.y + u * (a.y - n.y)
                }
            }
        }

        function Be(t, e, i) {
            return Math.max(Math.min(t, i), e)
        }

        function We(t, e, i, s, n) {
            let o, a, r, l;
            if (e.spanGaps && (t = t.filter((t => !t.skip))), "monotone" === e.cubicInterpolationMode) ! function (t, e = "x") {
                const i = Fe(e),
                    s = t.length,
                    n = Array(s).fill(0),
                    o = Array(s);
                let a, r, l, h = ze(t, 0);
                for (a = 0; a < s; ++a)
                    if (r = l, l = h, h = ze(t, a + 1), l) {
                        if (h) {
                            const t = h[e] - l[e];
                            n[a] = 0 !== t ? (h[i] - l[i]) / t : 0
                        }
                        o[a] = r ? h ? I(n[a - 1]) !== I(n[a]) ? 0 : (n[a - 1] + n[a]) / 2 : n[a - 1] : n[a]
                    }!
                function (t, e, i) {
                    const s = t.length;
                    let n, o, a, r, l, h = ze(t, 0);
                    for (let c = 0; c < s - 1; ++c) l = h, h = ze(t, c + 1), l && h && (V(e[c], 0, Ie) ? i[c] = i[c + 1] = 0 : (n = i[c] / e[c], o = i[c + 1] / e[c], r = Math.pow(n, 2) + Math.pow(o, 2), r <= 9 || (a = 3 / Math.sqrt(r), i[c] = n * a * e[c], i[c + 1] = o * a * e[c])))
                }(t, n, o),
                function (t, e, i = "x") {
                    const s = Fe(i),
                        n = t.length;
                    let o, a, r, l = ze(t, 0);
                    for (let h = 0; h < n; ++h) {
                        if (a = r, r = l, l = ze(t, h + 1), !r) continue;
                        const n = r[i],
                            c = r[s];
                        a && (o = (n - a[i]) / 3, r[`cp1${i}`] = n - o, r[`cp1${s}`] = c - o * e[h]), l && (o = (l[i] - n) / 3, r[`cp2${i}`] = n + o, r[`cp2${s}`] = c + o * e[h])
                    }
                }(t, o, e)
            }(t, n);
            else {
                let i = s ? t[t.length - 1] : t[0];
                for (o = 0, a = t.length; o < a; ++o) r = t[o], l = Ve(i, r, t[Math.min(o + 1, a - (s ? 0 : 1)) % a], e.tension), r.cp1x = l.previous.x, r.cp1y = l.previous.y, r.cp2x = l.next.x, r.cp2y = l.next.y, i = r
            }
            e.capBezierPoints && function (t, e) {
                let i, s, n, o, a, r = se(t[0], e);
                for (i = 0, s = t.length; i < s; ++i) a = o, o = r, r = i < s - 1 && se(t[i + 1], e), o && (n = t[i], a && (n.cp1x = Be(n.cp1x, e.left, e.right), n.cp1y = Be(n.cp1y, e.top, e.bottom)), r && (n.cp2x = Be(n.cp2x, e.left, e.right), n.cp2y = Be(n.cp2y, e.top, e.bottom)))
            }(t, i)
        }

        function Ne() {
            return "undefined" != typeof window && "undefined" != typeof document
        }

        function je(t) {
            let e = t.parentNode;
            return e && "[object ShadowRoot]" === e.toString() && (e = e.host), e
        }

        function He(t, e, i) {
            let s;
            return "string" == typeof t ? (s = parseInt(t, 10), -1 !== t.indexOf("%") && (s = s / 100 * e.parentNode[i])) : s = t, s
        }
        const $e = t => window.getComputedStyle(t, null),
            Ye = ["top", "right", "bottom", "left"];

        function Ue(t, e, i) {
            const s = {};
            i = i ? "-" + i : "";
            for (let n = 0; n < 4; n++) {
                const o = Ye[n];
                s[o] = parseFloat(t[e + "-" + o + i]) || 0
            }
            return s.width = s.left + s.right, s.height = s.top + s.bottom, s
        }

        function Xe(t, e) {
            if ("native" in t) return t;
            const {
                canvas: i,
                currentDevicePixelRatio: s
            } = e, n = $e(i), o = "border-box" === n.boxSizing, a = Ue(n, "padding"), r = Ue(n, "border", "width"), {
                x: l,
                y: h,
                box: c
            } = function (t, e) {
                const i = t.touches,
                    s = i && i.length ? i[0] : t,
                    {
                        offsetX: n,
                        offsetY: o
                    } = s;
                let a, r, l = !1;
                if (((t, e, i) => (t > 0 || e > 0) && (!i || !i.shadowRoot))(n, o, t.target)) a = n, r = o;
                else {
                    const t = e.getBoundingClientRect();
                    a = s.clientX - t.left, r = s.clientY - t.top, l = !0
                }
                return {
                    x: a,
                    y: r,
                    box: l
                }
            }(t, i), d = a.left + (c && r.left), u = a.top + (c && r.top);
            let {
                width: f,
                height: g
            } = e;
            return o && (f -= a.width + r.width, g -= a.height + r.height), {
                x: Math.round((l - d) / f * i.width / s),
                y: Math.round((h - u) / g * i.height / s)
            }
        }
        const qe = t => Math.round(10 * t) / 10;

        function Ke(t, e, i) {
            const s = e || 1,
                n = Math.floor(t.height * s),
                o = Math.floor(t.width * s);
            t.height = n / s, t.width = o / s;
            const a = t.canvas;
            return a.style && (i || !a.style.height && !a.style.width) && (a.style.height = `${t.height}px`, a.style.width = `${t.width}px`), (t.currentDevicePixelRatio !== s || a.height !== n || a.width !== o) && (t.currentDevicePixelRatio = s, a.height = n, a.width = o, t.ctx.setTransform(s, 0, 0, s, 0, 0), !0)
        }
        const Ge = function () {
            let t = !1;
            try {
                const e = {
                    get passive() {
                        return t = !0, !1
                    }
                };
                window.addEventListener("test", null, e), window.removeEventListener("test", null, e)
            } catch (t) {}
            return t
        }();

        function Ze(t, e) {
            const i = function (t, e) {
                    return $e(t).getPropertyValue(e)
                }(t, e),
                s = i && i.match(/^(\d+)(\.\d+)?px$/);
            return s ? +s[1] : void 0
        }

        function Je(t, e, i, s) {
            return {
                x: t.x + i * (e.x - t.x),
                y: t.y + i * (e.y - t.y)
            }
        }

        function Qe(t, e, i, s) {
            return {
                x: t.x + i * (e.x - t.x),
                y: "middle" === s ? i < .5 ? t.y : e.y : "after" === s ? i < 1 ? t.y : e.y : i > 0 ? e.y : t.y
            }
        }

        function ti(t, e, i, s) {
            const n = {
                    x: t.cp2x,
                    y: t.cp2y
                },
                o = {
                    x: e.cp1x,
                    y: e.cp1y
                },
                a = Je(t, n, i),
                r = Je(n, o, i),
                l = Je(o, e, i),
                h = Je(a, r, i),
                c = Je(r, l, i);
            return Je(h, c, i)
        }
        const ei = new Map;

        function ii(t, e, i) {
            return function (t, e) {
                e = e || {};
                const i = t + JSON.stringify(e);
                let s = ei.get(i);
                return s || (s = new Intl.NumberFormat(t, e), ei.set(i, s)), s
            }(e, i).format(t)
        }

        function si(t, e, i) {
            return t ? function (t, e) {
                return {
                    x(i) {
                        return t + t + e - i
                    },
                    setWidth(t) {
                        e = t
                    },
                    textAlign(t) {
                        return "center" === t ? t : "right" === t ? "left" : "right"
                    },
                    xPlus(t, e) {
                        return t - e
                    },
                    leftForLtr(t, e) {
                        return t - e
                    }
                }
            }(e, i) : {
                x(t) {
                    return t
                },
                setWidth(t) {},
                textAlign(t) {
                    return t
                },
                xPlus(t, e) {
                    return t + e
                },
                leftForLtr(t, e) {
                    return t
                }
            }
        }

        function ni(t, e) {
            let i, s;
            "ltr" !== e && "rtl" !== e || (i = t.canvas.style, s = [i.getPropertyValue("direction"), i.getPropertyPriority("direction")], i.setProperty("direction", e, "important"), t.prevTextDirection = s)
        }

        function oi(t, e) {
            void 0 !== e && (delete t.prevTextDirection, t.canvas.style.setProperty("direction", e[0], e[1]))
        }

        function ai(t) {
            return "angle" === t ? {
                between: X,
                compare: Y,
                normalize: U
            } : {
                between: K,
                compare: (t, e) => t - e,
                normalize: t => t
            }
        }

        function ri({
            start: t,
            end: e,
            count: i,
            loop: s,
            style: n
        }) {
            return {
                start: t % i,
                end: e % i,
                loop: s && (e - t + 1) % i == 0,
                style: n
            }
        }

        function li(t, e, i) {
            if (!i) return [t];
            const {
                property: s,
                start: n,
                end: o
            } = i, a = e.length, {
                compare: r,
                between: l,
                normalize: h
            } = ai(s), {
                start: c,
                end: d,
                loop: u,
                style: f
            } = function (t, e, i) {
                const {
                    property: s,
                    start: n,
                    end: o
                } = i, {
                    between: a,
                    normalize: r
                } = ai(s), l = e.length;
                let h, c, {
                    start: d,
                    end: u,
                    loop: f
                } = t;
                if (f) {
                    for (d += l, u += l, h = 0, c = l; h < c && a(r(e[d % l][s]), n, o); ++h) d--, u--;
                    d %= l, u %= l
                }
                return u < d && (u += l), {
                    start: d,
                    end: u,
                    loop: f,
                    style: t.style
                }
            }(t, e, i), g = [];
            let p, m, b, x = !1,
                _ = null;
            for (let t = c, i = c; t <= d; ++t) m = e[t % a], m.skip || (p = h(m[s]), p !== b && (x = l(p, n, o), null === _ && (x || l(n, b, p) && 0 !== r(n, b)) && (_ = 0 === r(p, n) ? t : i), null !== _ && (!x || 0 === r(o, p) || l(o, b, p)) && (g.push(ri({
                start: _,
                end: t,
                loop: u,
                count: a,
                style: f
            })), _ = null), i = t, b = p));
            return null !== _ && g.push(ri({
                start: _,
                end: d,
                loop: u,
                count: a,
                style: f
            })), g
        }

        function hi(t, e) {
            const i = [],
                s = t.segments;
            for (let n = 0; n < s.length; n++) {
                const o = li(s[n], t.points, e);
                o.length && i.push(...o)
            }
            return i
        }

        function ci(t) {
            return {
                backgroundColor: t.backgroundColor,
                borderCapStyle: t.borderCapStyle,
                borderDash: t.borderDash,
                borderDashOffset: t.borderDashOffset,
                borderJoinStyle: t.borderJoinStyle,
                borderWidth: t.borderWidth,
                borderColor: t.borderColor
            }
        }

        function di(t, e) {
            return e && JSON.stringify(t) !== JSON.stringify(e)
        }
        var ui = new class {
            constructor() {
                this._request = null, this._charts = new Map, this._running = !1, this._lastDate = void 0
            }
            _notify(t, e, i, s) {
                const n = e.listeners[s],
                    o = e.duration;
                n.forEach((s => s({
                    chart: t,
                    initial: e.initial,
                    numSteps: o,
                    currentStep: Math.min(i - e.start, o)
                })))
            }
            _refresh() {
                this._request || (this._running = !0, this._request = it.call(window, (() => {
                    this._update(), this._request = null, this._running && this._refresh()
                })))
            }
            _update(t = Date.now()) {
                let e = 0;
                this._charts.forEach(((i, s) => {
                    if (!i.running || !i.items.length) return;
                    const n = i.items;
                    let o, a = n.length - 1,
                        r = !1;
                    for (; a >= 0; --a) o = n[a], o._active ? (o._total > i.duration && (i.duration = o._total), o.tick(t), r = !0) : (n[a] = n[n.length - 1], n.pop());
                    r && (s.draw(), this._notify(s, i, t, "progress")), n.length || (i.running = !1, this._notify(s, i, t, "complete"), i.initial = !1), e += n.length
                })), this._lastDate = t, 0 === e && (this._running = !1)
            }
            _getAnims(t) {
                const e = this._charts;
                let i = e.get(t);
                return i || (i = {
                    running: !1,
                    initial: !0,
                    items: [],
                    listeners: {
                        complete: [],
                        progress: []
                    }
                }, e.set(t, i)), i
            }
            listen(t, e, i) {
                this._getAnims(t).listeners[e].push(i)
            }
            add(t, e) {
                e && e.length && this._getAnims(t).items.push(...e)
            }
            has(t) {
                return this._getAnims(t).items.length > 0
            }
            start(t) {
                const e = this._charts.get(t);
                e && (e.running = !0, e.start = Date.now(), e.duration = e.items.reduce(((t, e) => Math.max(t, e._duration)), 0), this._refresh())
            }
            running(t) {
                if (!this._running) return !1;
                const e = this._charts.get(t);
                return !!(e && e.running && e.items.length)
            }
            stop(t) {
                const e = this._charts.get(t);
                if (!e || !e.items.length) return;
                const i = e.items;
                let s = i.length - 1;
                for (; s >= 0; --s) i[s].cancel();
                e.items = [], this._notify(t, e, Date.now(), "complete")
            }
            remove(t) {
                return this._charts.delete(t)
            }
        };
        const fi = "transparent",
            gi = {
                boolean(t, e, i) {
                    return i > .5 ? e : t
                },
                color(t, e, i) {
                    const s = $t(t || fi),
                        n = s.valid && $t(e || fi);
                    return n && n.valid ? n.mix(s, i).hexString() : e
                },
                number(t, e, i) {
                    return t + (e - t) * i
                }
            };
        class pi {
            constructor(t, e, i, s) {
                const n = e[i];
                s = _e([t.to, s, n, t.from]);
                const o = _e([t.from, n, s]);
                this._active = !0, this._fn = t.fn || gi[t.type || typeof o], this._easing = dt[t.easing] || dt.linear, this._start = Math.floor(Date.now() + (t.delay || 0)), this._duration = this._total = Math.floor(t.duration), this._loop = !!t.loop, this._target = e, this._prop = i, this._from = o, this._to = s, this._promises = void 0
            }
            active() {
                return this._active
            }
            update(t, e, i) {
                if (this._active) {
                    this._notify(!1);
                    const s = this._target[this._prop],
                        n = i - this._start,
                        o = this._duration - n;
                    this._start = i, this._duration = Math.floor(Math.max(o, t.duration)), this._total += n, this._loop = !!t.loop, this._to = _e([t.to, e, s, t.from]), this._from = _e([t.from, s, e])
                }
            }
            cancel() {
                this._active && (this.tick(Date.now()), this._active = !1, this._notify(!1))
            }
            tick(t) {
                const e = t - this._start,
                    i = this._duration,
                    s = this._prop,
                    n = this._from,
                    o = this._loop,
                    a = this._to;
                let r;
                if (this._active = n !== a && (o || e < i), !this._active) return this._target[s] = a, void this._notify(!0);
                e < 0 ? this._target[s] = n : (r = e / i % 2, r = o && r > 1 ? 2 - r : r, r = this._easing(Math.min(1, Math.max(0, r))), this._target[s] = this._fn(n, a, r))
            }
            wait() {
                const t = this._promises || (this._promises = []);
                return new Promise(((e, i) => {
                    t.push({
                        res: e,
                        rej: i
                    })
                }))
            }
            _notify(t) {
                const e = t ? "res" : "rej",
                    i = this._promises || [];
                for (let t = 0; t < i.length; t++) i[t][e]()
            }
        }
        Gt.set("animation", {
            delay: void 0,
            duration: 1e3,
            easing: "easeOutQuart",
            fn: void 0,
            from: void 0,
            loop: void 0,
            to: void 0,
            type: void 0
        });
        const mi = Object.keys(Gt.animation);
        Gt.describe("animation", {
            _fallback: !1,
            _indexable: !1,
            _scriptable: t => "onProgress" !== t && "onComplete" !== t && "fn" !== t
        }), Gt.set("animations", {
            colors: {
                type: "color",
                properties: ["color", "borderColor", "backgroundColor"]
            },
            numbers: {
                type: "number",
                properties: ["x", "y", "borderWidth", "radius", "tension"]
            }
        }), Gt.describe("animations", {
            _fallback: "animation"
        }), Gt.set("transitions", {
            active: {
                animation: {
                    duration: 400
                }
            },
            resize: {
                animation: {
                    duration: 0
                }
            },
            show: {
                animations: {
                    colors: {
                        from: "transparent"
                    },
                    visible: {
                        type: "boolean",
                        duration: 0
                    }
                }
            },
            hide: {
                animations: {
                    colors: {
                        to: "transparent"
                    },
                    visible: {
                        type: "boolean",
                        easing: "linear",
                        fn: t => 0 | t
                    }
                }
            }
        });
        class bi {
            constructor(t, e) {
                this._chart = t, this._properties = new Map, this.configure(e)
            }
            configure(t) {
                if (!a(t)) return;
                const e = this._properties;
                Object.getOwnPropertyNames(t).forEach((i => {
                    const s = t[i];
                    if (!a(s)) return;
                    const n = {};
                    for (const t of mi) n[t] = s[t];
                    (o(s.properties) && s.properties || [i]).forEach((t => {
                        t !== i && e.has(t) || e.set(t, n)
                    }))
                }))
            }
            _animateOptions(t, e) {
                const i = e.options,
                    s = function (t, e) {
                        if (!e) return;
                        let i = t.options;
                        if (i) return i.$shared && (t.options = i = Object.assign({}, i, {
                            $shared: !1,
                            $animations: {}
                        })), i;
                        t.options = e
                    }(t, i);
                if (!s) return [];
                const n = this._createAnimations(s, i);
                return i.$shared && function (t, e) {
                    const i = [],
                        s = Object.keys(e);
                    for (let e = 0; e < s.length; e++) {
                        const n = t[s[e]];
                        n && n.active() && i.push(n.wait())
                    }
                    return Promise.all(i)
                }(t.options.$animations, i).then((() => {
                    t.options = i
                }), (() => {})), n
            }
            _createAnimations(t, e) {
                const i = this._properties,
                    s = [],
                    n = t.$animations || (t.$animations = {}),
                    o = Object.keys(e),
                    a = Date.now();
                let r;
                for (r = o.length - 1; r >= 0; --r) {
                    const l = o[r];
                    if ("$" === l.charAt(0)) continue;
                    if ("options" === l) {
                        s.push(...this._animateOptions(t, e));
                        continue
                    }
                    const h = e[l];
                    let c = n[l];
                    const d = i.get(l);
                    if (c) {
                        if (d && c.active()) {
                            c.update(d, h, a);
                            continue
                        }
                        c.cancel()
                    }
                    d && d.duration ? (n[l] = c = new pi(d, t, l, h), s.push(c)) : t[l] = h
                }
                return s
            }
            update(t, e) {
                if (0 === this._properties.size) return void Object.assign(t, e);
                const i = this._createAnimations(t, e);
                return i.length ? (ui.add(this._chart, i), !0) : void 0
            }
        }

        function xi(t, e) {
            const i = t && t.options || {},
                s = i.reverse,
                n = void 0 === i.min ? e : 0,
                o = void 0 === i.max ? e : 0;
            return {
                start: s ? o : n,
                end: s ? n : o
            }
        }

        function _i(t, e) {
            const i = [],
                s = t._getSortedDatasetMetas(e);
            let n, o;
            for (n = 0, o = s.length; n < o; ++n) i.push(s[n].index);
            return i
        }

        function yi(t, e, i, s = {}) {
            const n = t.keys,
                o = "single" === s.mode;
            let a, l, h, c;
            if (null !== e) {
                for (a = 0, l = n.length; a < l; ++a) {
                    if (h = +n[a], h === i) {
                        if (s.all) continue;
                        break
                    }
                    c = t.values[h], r(c) && (o || 0 === e || I(e) === I(c)) && (e += c)
                }
                return e
            }
        }

        function vi(t, e) {
            const i = t && t.options.stacked;
            return i || void 0 === i && void 0 !== e.stack
        }

        function Mi(t, e, i) {
            const s = t[e] || (t[e] = {});
            return s[i] || (s[i] = {})
        }

        function wi(t, e, i, s) {
            for (const n of e.getMatchingVisibleMetas(s).reverse()) {
                const e = t[n.index];
                if (i && e > 0 || !i && e < 0) return n.index
            }
            return null
        }

        function ki(t, e) {
            const {
                chart: i,
                _cachedMeta: s
            } = t, n = i._stacks || (i._stacks = {}), {
                iScale: o,
                vScale: a,
                index: r
            } = s, l = o.axis, h = a.axis, c = function (t, e, i) {
                return `${t.id}.${e.id}.${i.stack||i.type}`
            }(o, a, s), d = e.length;
            let u;
            for (let t = 0; t < d; ++t) {
                const i = e[t],
                    {
                        [l]: o,
                        [h]: d
                    } = i;
                u = (i._stacks || (i._stacks = {}))[h] = Mi(n, c, o), u[r] = d, u._top = wi(u, a, !0, s.type), u._bottom = wi(u, a, !1, s.type)
            }
        }

        function Si(t, e) {
            const i = t.scales;
            return Object.keys(i).filter((t => i[t].axis === e)).shift()
        }

        function Pi(t, e) {
            const i = t.controller.index,
                s = t.vScale && t.vScale.axis;
            if (s) {
                e = e || t._parsed;
                for (const t of e) {
                    const e = t._stacks;
                    if (!e || void 0 === e[s] || void 0 === e[s][i]) return;
                    delete e[s][i]
                }
            }
        }
        const Di = t => "reset" === t || "none" === t,
            Oi = (t, e) => e ? t : Object.assign({}, t);
        class Ci {
            constructor(t, e) {
                this.chart = t, this._ctx = t.ctx, this.index = e, this._cachedDataOpts = {}, this._cachedMeta = this.getMeta(), this._type = this._cachedMeta.type, this.options = void 0, this._parsing = !1, this._data = void 0, this._objectData = void 0, this._sharedOptions = void 0, this._drawStart = void 0, this._drawCount = void 0, this.enableOptionSharing = !1, this.supportsDecimation = !1, this.$context = void 0, this._syncList = [], this.initialize()
            }
            initialize() {
                const t = this._cachedMeta;
                this.configure(), this.linkScales(), t._stacked = vi(t.vScale, t), this.addElements()
            }
            updateIndex(t) {
                this.index !== t && Pi(this._cachedMeta), this.index = t
            }
            linkScales() {
                const t = this.chart,
                    e = this._cachedMeta,
                    i = this.getDataset(),
                    s = (t, e, i, s) => "x" === t ? e : "r" === t ? s : i,
                    n = e.xAxisID = h(i.xAxisID, Si(t, "x")),
                    o = e.yAxisID = h(i.yAxisID, Si(t, "y")),
                    a = e.rAxisID = h(i.rAxisID, Si(t, "r")),
                    r = e.indexAxis,
                    l = e.iAxisID = s(r, n, o, a),
                    c = e.vAxisID = s(r, o, n, a);
                e.xScale = this.getScaleForId(n), e.yScale = this.getScaleForId(o), e.rScale = this.getScaleForId(a), e.iScale = this.getScaleForId(l), e.vScale = this.getScaleForId(c)
            }
            getDataset() {
                return this.chart.data.datasets[this.index]
            }
            getMeta() {
                return this.chart.getDatasetMeta(this.index)
            }
            getScaleForId(t) {
                return this.chart.scales[t]
            }
            _getOtherScale(t) {
                const e = this._cachedMeta;
                return t === e.iScale ? e.vScale : e.iScale
            }
            reset() {
                this._update("reset")
            }
            _destroy() {
                const t = this._cachedMeta;
                this._data && tt(this._data, this), t._stacked && Pi(t)
            }
            _dataCheck() {
                const t = this.getDataset(),
                    e = t.data || (t.data = []),
                    i = this._data;
                if (a(e)) this._data = function (t) {
                    const e = Object.keys(t),
                        i = new Array(e.length);
                    let s, n, o;
                    for (s = 0, n = e.length; s < n; ++s) o = e[s], i[s] = {
                        x: o,
                        y: t[o]
                    };
                    return i
                }(e);
                else if (i !== e) {
                    if (i) {
                        tt(i, this);
                        const t = this._cachedMeta;
                        Pi(t), t._parsed = []
                    }
                    e && Object.isExtensible(e) && (this, (s = e)._chartjs ? s._chartjs.listeners.push(this) : (Object.defineProperty(s, "_chartjs", {
                        configurable: !0,
                        enumerable: !1,
                        value: {
                            listeners: [this]
                        }
                    }), Q.forEach((t => {
                        const e = "_onData" + M(t),
                            i = s[t];
                        Object.defineProperty(s, t, {
                            configurable: !0,
                            enumerable: !1,
                            value(...t) {
                                const n = i.apply(this, t);
                                return s._chartjs.listeners.forEach((i => {
                                    "function" == typeof i[e] && i[e](...t)
                                })), n
                            }
                        })
                    })))), this._syncList = [], this._data = e
                }
                var s
            }
            addElements() {
                const t = this._cachedMeta;
                this._dataCheck(), this.datasetElementType && (t.dataset = new this.datasetElementType)
            }
            buildOrUpdateElements(t) {
                const e = this._cachedMeta,
                    i = this.getDataset();
                let s = !1;
                this._dataCheck();
                const n = e._stacked;
                e._stacked = vi(e.vScale, e), e.stack !== i.stack && (s = !0, Pi(e), e.stack = i.stack), this._resyncElements(t), (s || n !== e._stacked) && ki(this, e._parsed)
            }
            configure() {
                const t = this.chart.config,
                    e = t.datasetScopeKeys(this._type),
                    i = t.getOptionScopes(this.getDataset(), e, !0);
                this.options = t.createResolver(i, this.getContext()), this._parsing = this.options.parsing, this._cachedDataOpts = {}
            }
            parse(t, e) {
                const {
                    _cachedMeta: i,
                    _data: s
                } = this, {
                    iScale: n,
                    _stacked: r
                } = i, l = n.axis;
                let h, c, d, u = 0 === t && e === s.length || i._sorted,
                    f = t > 0 && i._parsed[t - 1];
                if (!1 === this._parsing) i._parsed = s, i._sorted = !0, d = s;
                else {
                    d = o(s[t]) ? this.parseArrayData(i, s, t, e) : a(s[t]) ? this.parseObjectData(i, s, t, e) : this.parsePrimitiveData(i, s, t, e);
                    const n = () => null === c[l] || f && c[l] < f[l];
                    for (h = 0; h < e; ++h) i._parsed[h + t] = c = d[h], u && (n() && (u = !1), f = c);
                    i._sorted = u
                }
                r && ki(this, d)
            }
            parsePrimitiveData(t, e, i, s) {
                const {
                    iScale: n,
                    vScale: o
                } = t, a = n.axis, r = o.axis, l = n.getLabels(), h = n === o, c = new Array(s);
                let d, u, f;
                for (d = 0, u = s; d < u; ++d) f = d + i, c[d] = {
                    [a]: h || n.parse(l[f], f),
                    [r]: o.parse(e[f], f)
                };
                return c
            }
            parseArrayData(t, e, i, s) {
                const {
                    xScale: n,
                    yScale: o
                } = t, a = new Array(s);
                let r, l, h, c;
                for (r = 0, l = s; r < l; ++r) h = r + i, c = e[h], a[r] = {
                    x: n.parse(c[0], h),
                    y: o.parse(c[1], h)
                };
                return a
            }
            parseObjectData(t, e, i, s) {
                const {
                    xScale: n,
                    yScale: o
                } = t, {
                    xAxisKey: a = "x",
                    yAxisKey: r = "y"
                } = this._parsing, l = new Array(s);
                let h, c, d, u;
                for (h = 0, c = s; h < c; ++h) d = h + i, u = e[d], l[h] = {
                    x: n.parse(v(u, a), d),
                    y: o.parse(v(u, r), d)
                };
                return l
            }
            getParsed(t) {
                return this._cachedMeta._parsed[t]
            }
            getDataElement(t) {
                return this._cachedMeta.data[t]
            }
            applyStack(t, e, i) {
                const s = this.chart,
                    n = this._cachedMeta,
                    o = e[t.axis];
                return yi({
                    keys: _i(s, !0),
                    values: e._stacks[t.axis]
                }, o, n.index, {
                    mode: i
                })
            }
            updateRangeFromParsed(t, e, i, s) {
                const n = i[e.axis];
                let o = null === n ? NaN : n;
                const a = s && i._stacks[e.axis];
                s && a && (s.values = a, o = yi(s, n, this._cachedMeta.index)), t.min = Math.min(t.min, o), t.max = Math.max(t.max, o)
            }
            getMinMax(t, e) {
                const i = this._cachedMeta,
                    s = i._parsed,
                    n = i._sorted && t === i.iScale,
                    o = s.length,
                    a = this._getOtherScale(t),
                    l = ((t, e, i) => t && !e.hidden && e._stacked && {
                        keys: _i(i, !0),
                        values: null
                    })(e, i, this.chart),
                    h = {
                        min: Number.POSITIVE_INFINITY,
                        max: Number.NEGATIVE_INFINITY
                    },
                    {
                        min: c,
                        max: d
                    } = function (t) {
                        const {
                            min: e,
                            max: i,
                            minDefined: s,
                            maxDefined: n
                        } = t.getUserBounds();
                        return {
                            min: s ? e : Number.NEGATIVE_INFINITY,
                            max: n ? i : Number.POSITIVE_INFINITY
                        }
                    }(a);
                let u, f;

                function g() {
                    f = s[u];
                    const e = f[a.axis];
                    return !r(f[t.axis]) || c > e || d < e
                }
                for (u = 0; u < o && (g() || (this.updateRangeFromParsed(h, t, f, l), !n)); ++u);
                if (n)
                    for (u = o - 1; u >= 0; --u)
                        if (!g()) {
                            this.updateRangeFromParsed(h, t, f, l);
                            break
                        } return h
            }
            getAllParsedValues(t) {
                const e = this._cachedMeta._parsed,
                    i = [];
                let s, n, o;
                for (s = 0, n = e.length; s < n; ++s) o = e[s][t.axis], r(o) && i.push(o);
                return i
            }
            getMaxOverflow() {
                return !1
            }
            getLabelAndValue(t) {
                const e = this._cachedMeta,
                    i = e.iScale,
                    s = e.vScale,
                    n = this.getParsed(t);
                return {
                    label: i ? "" + i.getLabelForValue(n[i.axis]) : "",
                    value: s ? "" + s.getLabelForValue(n[s.axis]) : ""
                }
            }
            _update(t) {
                const e = this._cachedMeta;
                this.update(t || "default"), e._clip = function (t) {
                    let e, i, s, n;
                    return a(t) ? (e = t.top, i = t.right, s = t.bottom, n = t.left) : e = i = s = n = t, {
                        top: e,
                        right: i,
                        bottom: s,
                        left: n,
                        disabled: !1 === t
                    }
                }(h(this.options.clip, function (t, e, i) {
                    if (!1 === i) return !1;
                    const s = xi(t, i),
                        n = xi(e, i);
                    return {
                        top: n.end,
                        right: s.end,
                        bottom: n.start,
                        left: s.start
                    }
                }(e.xScale, e.yScale, this.getMaxOverflow())))
            }
            update(t) {}
            draw() {
                const t = this._ctx,
                    e = this.chart,
                    i = this._cachedMeta,
                    s = i.data || [],
                    n = e.chartArea,
                    o = [],
                    a = this._drawStart || 0,
                    r = this._drawCount || s.length - a,
                    l = this.options.drawActiveElementsOnTop;
                let h;
                for (i.dataset && i.dataset.draw(t, n, a, r), h = a; h < a + r; ++h) {
                    const e = s[h];
                    e.hidden || (e.active && l ? o.push(e) : e.draw(t, n))
                }
                for (h = 0; h < o.length; ++h) o[h].draw(t, n)
            }
            getStyle(t, e) {
                const i = e ? "active" : "default";
                return void 0 === t && this._cachedMeta.dataset ? this.resolveDatasetElementOptions(i) : this.resolveDataElementOptions(t || 0, i)
            }
            getContext(t, e, i) {
                const s = this.getDataset();
                let n;
                if (t >= 0 && t < this._cachedMeta.data.length) {
                    const e = this._cachedMeta.data[t];
                    n = e.$context || (e.$context = function (t, e, i) {
                        return ye(t, {
                            active: !1,
                            dataIndex: e,
                            parsed: void 0,
                            raw: void 0,
                            element: i,
                            index: e,
                            mode: "default",
                            type: "data"
                        })
                    }(this.getContext(), t, e)), n.parsed = this.getParsed(t), n.raw = s.data[t], n.index = n.dataIndex = t
                } else n = this.$context || (this.$context = function (t, e) {
                    return ye(t, {
                        active: !1,
                        dataset: void 0,
                        datasetIndex: e,
                        index: e,
                        mode: "default",
                        type: "dataset"
                    })
                }(this.chart.getContext(), this.index)), n.dataset = s, n.index = n.datasetIndex = this.index;
                return n.active = !!e, n.mode = i, n
            }
            resolveDatasetElementOptions(t) {
                return this._resolveElementOptions(this.datasetElementType.id, t)
            }
            resolveDataElementOptions(t, e) {
                return this._resolveElementOptions(this.dataElementType.id, e, t)
            }
            _resolveElementOptions(t, e = "default", i) {
                const s = "active" === e,
                    n = this._cachedDataOpts,
                    o = t + "-" + e,
                    a = n[o],
                    r = this.enableOptionSharing && w(i);
                if (a) return Oi(a, r);
                const l = this.chart.config,
                    h = l.datasetElementScopeKeys(this._type, t),
                    c = s ? [`${t}Hover`, "hover", t, ""] : [t, ""],
                    d = l.getOptionScopes(this.getDataset(), h),
                    u = Object.keys(Gt.elements[t]),
                    f = l.resolveNamedOptions(d, u, (() => this.getContext(i, s)), c);
                return f.$shared && (f.$shared = r, n[o] = Object.freeze(Oi(f, r))), f
            }
            _resolveAnimations(t, e, i) {
                const s = this.chart,
                    n = this._cachedDataOpts,
                    o = `animation-${e}`,
                    a = n[o];
                if (a) return a;
                let r;
                if (!1 !== s.options.animation) {
                    const s = this.chart.config,
                        n = s.datasetAnimationScopeKeys(this._type, e),
                        o = s.getOptionScopes(this.getDataset(), n);
                    r = s.createResolver(o, this.getContext(t, i, e))
                }
                const l = new bi(s, r && r.animations);
                return r && r._cacheable && (n[o] = Object.freeze(l)), l
            }
            getSharedOptions(t) {
                if (t.$shared) return this._sharedOptions || (this._sharedOptions = Object.assign({}, t))
            }
            includeOptions(t, e) {
                return !e || Di(t) || this.chart._animationsDisabled
            }
            _getSharedOptions(t, e) {
                const i = this.resolveDataElementOptions(t, e),
                    s = this._sharedOptions,
                    n = this.getSharedOptions(i),
                    o = this.includeOptions(e, n) || n !== s;
                return this.updateSharedOptions(n, e, i), {
                    sharedOptions: n,
                    includeOptions: o
                }
            }
            updateElement(t, e, i, s) {
                Di(s) ? Object.assign(t, i) : this._resolveAnimations(e, s).update(t, i)
            }
            updateSharedOptions(t, e, i) {
                t && !Di(e) && this._resolveAnimations(void 0, e).update(t, i)
            }
            _setStyle(t, e, i, s) {
                t.active = s;
                const n = this.getStyle(e, s);
                this._resolveAnimations(e, i, s).update(t, {
                    options: !s && this.getSharedOptions(n) || n
                })
            }
            removeHoverStyle(t, e, i) {
                this._setStyle(t, i, "active", !1)
            }
            setHoverStyle(t, e, i) {
                this._setStyle(t, i, "active", !0)
            }
            _removeDatasetHoverStyle() {
                const t = this._cachedMeta.dataset;
                t && this._setStyle(t, void 0, "active", !1)
            }
            _setDatasetHoverStyle() {
                const t = this._cachedMeta.dataset;
                t && this._setStyle(t, void 0, "active", !0)
            }
            _resyncElements(t) {
                const e = this._data,
                    i = this._cachedMeta.data;
                for (const [t, e, i] of this._syncList) this[t](e, i);
                this._syncList = [];
                const s = i.length,
                    n = e.length,
                    o = Math.min(n, s);
                o && this.parse(0, o), n > s ? this._insertElements(s, n - s, t) : n < s && this._removeElements(n, s - n)
            }
            _insertElements(t, e, i = !0) {
                const s = this._cachedMeta,
                    n = s.data,
                    o = t + e;
                let a;
                const r = t => {
                    for (t.length += e, a = t.length - 1; a >= o; a--) t[a] = t[a - e]
                };
                for (r(n), a = t; a < o; ++a) n[a] = new this.dataElementType;
                this._parsing && r(s._parsed), this.parse(t, e), i && this.updateElements(n, t, e, "reset")
            }
            updateElements(t, e, i, s) {}
            _removeElements(t, e) {
                const i = this._cachedMeta;
                if (this._parsing) {
                    const s = i._parsed.splice(t, e);
                    i._stacked && Pi(i, s)
                }
                i.data.splice(t, e)
            }
            _sync(t) {
                if (this._parsing) this._syncList.push(t);
                else {
                    const [e, i, s] = t;
                    this[e](i, s)
                }
                this.chart._dataChanges.push([this.index, ...t])
            }
            _onDataPush() {
                const t = arguments.length;
                this._sync(["_insertElements", this.getDataset().data.length - t, t])
            }
            _onDataPop() {
                this._sync(["_removeElements", this._cachedMeta.data.length - 1, 1])
            }
            _onDataShift() {
                this._sync(["_removeElements", 0, 1])
            }
            _onDataSplice(t, e) {
                e && this._sync(["_removeElements", t, e]);
                const i = arguments.length - 2;
                i && this._sync(["_insertElements", t, i])
            }
            _onDataUnshift() {
                this._sync(["_insertElements", 0, arguments.length])
            }
        }

        function Ai(t) {
            const e = t.iScale,
                i = function (t, e) {
                    if (!t._cache.$bar) {
                        const i = t.getMatchingVisibleMetas(e);
                        let s = [];
                        for (let e = 0, n = i.length; e < n; e++) s = s.concat(i[e].controller.getAllParsedValues(t));
                        t._cache.$bar = et(s.sort(((t, e) => t - e)))
                    }
                    return t._cache.$bar
                }(e, t.type);
            let s, n, o, a, r = e._length;
            const l = () => {
                32767 !== o && -32768 !== o && (w(a) && (r = Math.min(r, Math.abs(o - a) || r)), a = o)
            };
            for (s = 0, n = i.length; s < n; ++s) o = e.getPixelForValue(i[s]), l();
            for (a = void 0, s = 0, n = e.ticks.length; s < n; ++s) o = e.getPixelForTick(s), l();
            return r
        }

        function Ti(t, e, i, s) {
            return o(t) ? function (t, e, i, s) {
                const n = i.parse(t[0], s),
                    o = i.parse(t[1], s),
                    a = Math.min(n, o),
                    r = Math.max(n, o);
                let l = a,
                    h = r;
                Math.abs(a) > Math.abs(r) && (l = r, h = a), e[i.axis] = h, e._custom = {
                    barStart: l,
                    barEnd: h,
                    start: n,
                    end: o,
                    min: a,
                    max: r
                }
            }(t, e, i, s) : e[i.axis] = i.parse(t, s), e
        }

        function Li(t, e, i, s) {
            const n = t.iScale,
                o = t.vScale,
                a = n.getLabels(),
                r = n === o,
                l = [];
            let h, c, d, u;
            for (h = i, c = i + s; h < c; ++h) u = e[h], d = {}, d[n.axis] = r || n.parse(a[h], h), l.push(Ti(u, d, o, h));
            return l
        }

        function Ei(t) {
            return t && void 0 !== t.barStart && void 0 !== t.barEnd
        }

        function Ri(t, e, i, s) {
            let n = e.borderSkipped;
            const o = {};
            if (!n) return void(t.borderSkipped = o);
            if (!0 === n) return void(t.borderSkipped = {
                top: !0,
                right: !0,
                bottom: !0,
                left: !0
            });
            const {
                start: a,
                end: r,
                reverse: l,
                top: h,
                bottom: c
            } = function (t) {
                let e, i, s, n, o;
                return t.horizontal ? (e = t.base > t.x, i = "left", s = "right") : (e = t.base < t.y, i = "bottom", s = "top"), e ? (n = "end", o = "start") : (n = "start", o = "end"), {
                    start: i,
                    end: s,
                    reverse: e,
                    top: n,
                    bottom: o
                }
            }(t);
            "middle" === n && i && (t.enableBorderRadius = !0, (i._top || 0) === s ? n = h : (i._bottom || 0) === s ? n = c : (o[Ii(c, a, r, l)] = !0, n = h)), o[Ii(n, a, r, l)] = !0, t.borderSkipped = o
        }

        function Ii(t, e, i, s) {
            var n, o, a;
            return s ? (a = i, t = zi(t = (n = t) === (o = e) ? a : n === a ? o : n, i, e)) : t = zi(t, e, i), t
        }

        function zi(t, e, i) {
            return "start" === t ? e : "end" === t ? i : t
        }

        function Fi(t, {
            inflateAmount: e
        }, i) {
            t.inflateAmount = "auto" === e ? 1 === i ? .33 : 0 : e
        }
        Ci.defaults = {}, Ci.prototype.datasetElementType = null, Ci.prototype.dataElementType = null;
        class Vi extends Ci {
            parsePrimitiveData(t, e, i, s) {
                return Li(t, e, i, s)
            }
            parseArrayData(t, e, i, s) {
                return Li(t, e, i, s)
            }
            parseObjectData(t, e, i, s) {
                const {
                    iScale: n,
                    vScale: o
                } = t, {
                    xAxisKey: a = "x",
                    yAxisKey: r = "y"
                } = this._parsing, l = "x" === n.axis ? a : r, h = "x" === o.axis ? a : r, c = [];
                let d, u, f, g;
                for (d = i, u = i + s; d < u; ++d) g = e[d], f = {}, f[n.axis] = n.parse(v(g, l), d), c.push(Ti(v(g, h), f, o, d));
                return c
            }
            updateRangeFromParsed(t, e, i, s) {
                super.updateRangeFromParsed(t, e, i, s);
                const n = i._custom;
                n && e === this._cachedMeta.vScale && (t.min = Math.min(t.min, n.min), t.max = Math.max(t.max, n.max))
            }
            getMaxOverflow() {
                return 0
            }
            getLabelAndValue(t) {
                const e = this._cachedMeta,
                    {
                        iScale: i,
                        vScale: s
                    } = e,
                    n = this.getParsed(t),
                    o = n._custom,
                    a = Ei(o) ? "[" + o.start + ", " + o.end + "]" : "" + s.getLabelForValue(n[s.axis]);
                return {
                    label: "" + i.getLabelForValue(n[i.axis]),
                    value: a
                }
            }
            initialize() {
                this.enableOptionSharing = !0, super.initialize(), this._cachedMeta.stack = this.getDataset().stack
            }
            update(t) {
                const e = this._cachedMeta;
                this.updateElements(e.data, 0, e.data.length, t)
            }
            updateElements(t, e, i, s) {
                const o = "reset" === s,
                    {
                        index: a,
                        _cachedMeta: {
                            vScale: r
                        }
                    } = this,
                    l = r.getBasePixel(),
                    h = r.isHorizontal(),
                    c = this._getRuler(),
                    {
                        sharedOptions: d,
                        includeOptions: u
                    } = this._getSharedOptions(e, s);
                for (let f = e; f < e + i; f++) {
                    const e = this.getParsed(f),
                        i = o || n(e[r.axis]) ? {
                            base: l,
                            head: l
                        } : this._calculateBarValuePixels(f),
                        g = this._calculateBarIndexPixels(f, c),
                        p = (e._stacks || {})[r.axis],
                        m = {
                            horizontal: h,
                            base: i.base,
                            enableBorderRadius: !p || Ei(e._custom) || a === p._top || a === p._bottom,
                            x: h ? i.head : g.center,
                            y: h ? g.center : i.head,
                            height: h ? g.size : Math.abs(i.size),
                            width: h ? Math.abs(i.size) : g.size
                        };
                    u && (m.options = d || this.resolveDataElementOptions(f, t[f].active ? "active" : s));
                    const b = m.options || t[f].options;
                    Ri(m, b, p, a), Fi(m, b, c.ratio), this.updateElement(t[f], f, m, s)
                }
            }
            _getStacks(t, e) {
                const {
                    iScale: i
                } = this._cachedMeta, s = i.getMatchingVisibleMetas(this._type).filter((t => t.controller.options.grouped)), o = i.options.stacked, a = [], r = t => {
                    const i = t.controller.getParsed(e),
                        s = i && i[t.vScale.axis];
                    if (n(s) || isNaN(s)) return !0
                };
                for (const i of s)
                    if ((void 0 === e || !r(i)) && ((!1 === o || -1 === a.indexOf(i.stack) || void 0 === o && void 0 === i.stack) && a.push(i.stack), i.index === t)) break;
                return a.length || a.push(void 0), a
            }
            _getStackCount(t) {
                return this._getStacks(void 0, t).length
            }
            _getStackIndex(t, e, i) {
                const s = this._getStacks(t, i),
                    n = void 0 !== e ? s.indexOf(e) : -1;
                return -1 === n ? s.length - 1 : n
            }
            _getRuler() {
                const t = this.options,
                    e = this._cachedMeta,
                    i = e.iScale,
                    s = [];
                let n, o;
                for (n = 0, o = e.data.length; n < o; ++n) s.push(i.getPixelForValue(this.getParsed(n)[i.axis], n));
                const a = t.barThickness;
                return {
                    min: a || Ai(e),
                    pixels: s,
                    start: i._startPixel,
                    end: i._endPixel,
                    stackCount: this._getStackCount(),
                    scale: i,
                    grouped: t.grouped,
                    ratio: a ? 1 : t.categoryPercentage * t.barPercentage
                }
            }
            _calculateBarValuePixels(t) {
                const {
                    _cachedMeta: {
                        vScale: e,
                        _stacked: i
                    },
                    options: {
                        base: s,
                        minBarLength: o
                    }
                } = this, a = s || 0, r = this.getParsed(t), l = r._custom, h = Ei(l);
                let c, d, u = r[e.axis],
                    f = 0,
                    g = i ? this.applyStack(e, r, i) : u;
                g !== u && (f = g - u, g = u), h && (u = l.barStart, g = l.barEnd - l.barStart, 0 !== u && I(u) !== I(l.barEnd) && (f = 0), f += u);
                const p = n(s) || h ? f : s;
                let m = e.getPixelForValue(p);
                if (c = this.chart.getDataVisibility(t) ? e.getPixelForValue(f + g) : m, d = c - m, Math.abs(d) < o) {
                    d = function (t, e, i) {
                        return 0 !== t ? I(t) : (e.isHorizontal() ? 1 : -1) * (e.min >= i ? 1 : -1)
                    }(d, e, a) * o, u === a && (m -= d / 2);
                    const t = e.getPixelForDecimal(0),
                        i = e.getPixelForDecimal(1),
                        s = Math.min(t, i),
                        n = Math.max(t, i);
                    m = Math.max(Math.min(m, n), s), c = m + d
                }
                if (m === e.getPixelForValue(a)) {
                    const t = I(d) * e.getLineWidthForValue(a) / 2;
                    m += t, d -= t
                }
                return {
                    size: d,
                    base: m,
                    head: c,
                    center: c + d / 2
                }
            }
            _calculateBarIndexPixels(t, e) {
                const i = e.scale,
                    s = this.options,
                    o = s.skipNull,
                    a = h(s.maxBarThickness, 1 / 0);
                let r, l;
                if (e.grouped) {
                    const i = o ? this._getStackCount(t) : e.stackCount,
                        h = "flex" === s.barThickness ? function (t, e, i, s) {
                            const n = e.pixels,
                                o = n[t];
                            let a = t > 0 ? n[t - 1] : null,
                                r = t < n.length - 1 ? n[t + 1] : null;
                            const l = i.categoryPercentage;
                            null === a && (a = o - (null === r ? e.end - e.start : r - o)), null === r && (r = o + o - a);
                            const h = o - (o - Math.min(a, r)) / 2 * l;
                            return {
                                chunk: Math.abs(r - a) / 2 * l / s,
                                ratio: i.barPercentage,
                                start: h
                            }
                        }(t, e, s, i) : function (t, e, i, s) {
                            const o = i.barThickness;
                            let a, r;
                            return n(o) ? (a = e.min * i.categoryPercentage, r = i.barPercentage) : (a = o * s, r = 1), {
                                chunk: a / s,
                                ratio: r,
                                start: e.pixels[t] - a / 2
                            }
                        }(t, e, s, i),
                        c = this._getStackIndex(this.index, this._cachedMeta.stack, o ? t : void 0);
                    r = h.start + h.chunk * c + h.chunk / 2, l = Math.min(a, h.chunk * h.ratio)
                } else r = i.getPixelForValue(this.getParsed(t)[i.axis], t), l = Math.min(a, e.min * e.ratio);
                return {
                    base: r - l / 2,
                    head: r + l / 2,
                    center: r,
                    size: l
                }
            }
            draw() {
                const t = this._cachedMeta,
                    e = t.vScale,
                    i = t.data,
                    s = i.length;
                let n = 0;
                for (; n < s; ++n) null !== this.getParsed(n)[e.axis] && i[n].draw(this._ctx)
            }
        }
        Vi.id = "bar", Vi.defaults = {
            datasetElementType: !1,
            dataElementType: "bar",
            categoryPercentage: .8,
            barPercentage: .9,
            grouped: !0,
            animations: {
                numbers: {
                    type: "number",
                    properties: ["x", "y", "base", "width", "height"]
                }
            }
        }, Vi.overrides = {
            scales: {
                _index_: {
                    type: "category",
                    offset: !0,
                    grid: {
                        offset: !0
                    }
                },
                _value_: {
                    type: "linear",
                    beginAtZero: !0
                }
            }
        };
        class Bi extends Ci {
            initialize() {
                this.enableOptionSharing = !0, super.initialize()
            }
            parsePrimitiveData(t, e, i, s) {
                const n = super.parsePrimitiveData(t, e, i, s);
                for (let t = 0; t < n.length; t++) n[t]._custom = this.resolveDataElementOptions(t + i).radius;
                return n
            }
            parseArrayData(t, e, i, s) {
                const n = super.parseArrayData(t, e, i, s);
                for (let t = 0; t < n.length; t++) {
                    const s = e[i + t];
                    n[t]._custom = h(s[2], this.resolveDataElementOptions(t + i).radius)
                }
                return n
            }
            parseObjectData(t, e, i, s) {
                const n = super.parseObjectData(t, e, i, s);
                for (let t = 0; t < n.length; t++) {
                    const s = e[i + t];
                    n[t]._custom = h(s && s.r && +s.r, this.resolveDataElementOptions(t + i).radius)
                }
                return n
            }
            getMaxOverflow() {
                const t = this._cachedMeta.data;
                let e = 0;
                for (let i = t.length - 1; i >= 0; --i) e = Math.max(e, t[i].size(this.resolveDataElementOptions(i)) / 2);
                return e > 0 && e
            }
            getLabelAndValue(t) {
                const e = this._cachedMeta,
                    {
                        xScale: i,
                        yScale: s
                    } = e,
                    n = this.getParsed(t),
                    o = i.getLabelForValue(n.x),
                    a = s.getLabelForValue(n.y),
                    r = n._custom;
                return {
                    label: e.label,
                    value: "(" + o + ", " + a + (r ? ", " + r : "") + ")"
                }
            }
            update(t) {
                const e = this._cachedMeta.data;
                this.updateElements(e, 0, e.length, t)
            }
            updateElements(t, e, i, s) {
                const n = "reset" === s,
                    {
                        iScale: o,
                        vScale: a
                    } = this._cachedMeta,
                    {
                        sharedOptions: r,
                        includeOptions: l
                    } = this._getSharedOptions(e, s),
                    h = o.axis,
                    c = a.axis;
                for (let d = e; d < e + i; d++) {
                    const e = t[d],
                        i = !n && this.getParsed(d),
                        u = {},
                        f = u[h] = n ? o.getPixelForDecimal(.5) : o.getPixelForValue(i[h]),
                        g = u[c] = n ? a.getBasePixel() : a.getPixelForValue(i[c]);
                    u.skip = isNaN(f) || isNaN(g), l && (u.options = r || this.resolveDataElementOptions(d, e.active ? "active" : s), n && (u.options.radius = 0)), this.updateElement(e, d, u, s)
                }
            }
            resolveDataElementOptions(t, e) {
                const i = this.getParsed(t);
                let s = super.resolveDataElementOptions(t, e);
                s.$shared && (s = Object.assign({}, s, {
                    $shared: !1
                }));
                const n = s.radius;
                return "active" !== e && (s.radius = 0), s.radius += h(i && i._custom, n), s
            }
        }
        Bi.id = "bubble", Bi.defaults = {
            datasetElementType: !1,
            dataElementType: "point",
            animations: {
                numbers: {
                    type: "number",
                    properties: ["x", "y", "borderWidth", "radius"]
                }
            }
        }, Bi.overrides = {
            scales: {
                x: {
                    type: "linear"
                },
                y: {
                    type: "linear"
                }
            },
            plugins: {
                tooltip: {
                    callbacks: {
                        title() {
                            return ""
                        }
                    }
                }
            }
        };
        class Wi extends Ci {
            constructor(t, e) {
                super(t, e), this.enableOptionSharing = !0, this.innerRadius = void 0, this.outerRadius = void 0, this.offsetX = void 0, this.offsetY = void 0
            }
            linkScales() {}
            parse(t, e) {
                const i = this.getDataset().data,
                    s = this._cachedMeta;
                if (!1 === this._parsing) s._parsed = i;
                else {
                    let n, o, r = t => +i[t];
                    if (a(i[t])) {
                        const {
                            key: t = "value"
                        } = this._parsing;
                        r = e => +v(i[e], t)
                    }
                    for (n = t, o = t + e; n < o; ++n) s._parsed[n] = r(n)
                }
            }
            _getRotation() {
                return W(this.options.rotation - 90)
            }
            _getCircumference() {
                return W(this.options.circumference)
            }
            _getRotationExtents() {
                let t = D,
                    e = -D;
                for (let i = 0; i < this.chart.data.datasets.length; ++i)
                    if (this.chart.isDatasetVisible(i)) {
                        const s = this.chart.getDatasetMeta(i).controller,
                            n = s._getRotation(),
                            o = s._getCircumference();
                        t = Math.min(t, n), e = Math.max(e, n + o)
                    } return {
                    rotation: t,
                    circumference: e - t
                }
            }
            update(t) {
                const e = this.chart,
                    {
                        chartArea: i
                    } = e,
                    s = this._cachedMeta,
                    n = s.data,
                    o = this.getMaxBorderWidth() + this.getMaxOffset(n) + this.options.spacing,
                    a = Math.max((Math.min(i.width, i.height) - o) / 2, 0),
                    r = Math.min((h = a, "string" == typeof (l = this.options.cutout) && l.endsWith("%") ? parseFloat(l) / 100 : l / h), 1);
                var l, h;
                const d = this._getRingWeight(this.index),
                    {
                        circumference: u,
                        rotation: f
                    } = this._getRotationExtents(),
                    {
                        ratioX: g,
                        ratioY: p,
                        offsetX: m,
                        offsetY: b
                    } = function (t, e, i) {
                        let s = 1,
                            n = 1,
                            o = 0,
                            a = 0;
                        if (e < D) {
                            const r = t,
                                l = r + e,
                                h = Math.cos(r),
                                c = Math.sin(r),
                                d = Math.cos(l),
                                u = Math.sin(l),
                                f = (t, e, s) => X(t, r, l, !0) ? 1 : Math.max(e, e * i, s, s * i),
                                g = (t, e, s) => X(t, r, l, !0) ? -1 : Math.min(e, e * i, s, s * i),
                                p = f(0, h, d),
                                m = f(T, c, u),
                                b = g(P, h, d),
                                x = g(P + T, c, u);
                            s = (p - b) / 2, n = (m - x) / 2, o = -(p + b) / 2, a = -(m + x) / 2
                        }
                        return {
                            ratioX: s,
                            ratioY: n,
                            offsetX: o,
                            offsetY: a
                        }
                    }(f, u, r),
                    x = (i.width - o) / g,
                    _ = (i.height - o) / p,
                    y = Math.max(Math.min(x, _) / 2, 0),
                    v = c(this.options.radius, y),
                    M = (v - Math.max(v * r, 0)) / this._getVisibleDatasetWeightTotal();
                this.offsetX = m * v, this.offsetY = b * v, s.total = this.calculateTotal(), this.outerRadius = v - M * this._getRingWeightOffset(this.index), this.innerRadius = Math.max(this.outerRadius - M * d, 0), this.updateElements(n, 0, n.length, t)
            }
            _circumference(t, e) {
                const i = this.options,
                    s = this._cachedMeta,
                    n = this._getCircumference();
                return e && i.animation.animateRotate || !this.chart.getDataVisibility(t) || null === s._parsed[t] || s.data[t].hidden ? 0 : this.calculateCircumference(s._parsed[t] * n / D)
            }
            updateElements(t, e, i, s) {
                const n = "reset" === s,
                    o = this.chart,
                    a = o.chartArea,
                    r = o.options.animation,
                    l = (a.left + a.right) / 2,
                    h = (a.top + a.bottom) / 2,
                    c = n && r.animateScale,
                    d = c ? 0 : this.innerRadius,
                    u = c ? 0 : this.outerRadius,
                    {
                        sharedOptions: f,
                        includeOptions: g
                    } = this._getSharedOptions(e, s);
                let p, m = this._getRotation();
                for (p = 0; p < e; ++p) m += this._circumference(p, n);
                for (p = e; p < e + i; ++p) {
                    const e = this._circumference(p, n),
                        i = t[p],
                        o = {
                            x: l + this.offsetX,
                            y: h + this.offsetY,
                            startAngle: m,
                            endAngle: m + e,
                            circumference: e,
                            outerRadius: u,
                            innerRadius: d
                        };
                    g && (o.options = f || this.resolveDataElementOptions(p, i.active ? "active" : s)), m += e, this.updateElement(i, p, o, s)
                }
            }
            calculateTotal() {
                const t = this._cachedMeta,
                    e = t.data;
                let i, s = 0;
                for (i = 0; i < e.length; i++) {
                    const n = t._parsed[i];
                    null === n || isNaN(n) || !this.chart.getDataVisibility(i) || e[i].hidden || (s += Math.abs(n))
                }
                return s
            }
            calculateCircumference(t) {
                const e = this._cachedMeta.total;
                return e > 0 && !isNaN(t) ? D * (Math.abs(t) / e) : 0
            }
            getLabelAndValue(t) {
                const e = this._cachedMeta,
                    i = this.chart,
                    s = i.data.labels || [],
                    n = ii(e._parsed[t], i.options.locale);
                return {
                    label: s[t] || "",
                    value: n
                }
            }
            getMaxBorderWidth(t) {
                let e = 0;
                const i = this.chart;
                let s, n, o, a, r;
                if (!t)
                    for (s = 0, n = i.data.datasets.length; s < n; ++s)
                        if (i.isDatasetVisible(s)) {
                            o = i.getDatasetMeta(s), t = o.data, a = o.controller;
                            break
                        } if (!t) return 0;
                for (s = 0, n = t.length; s < n; ++s) r = a.resolveDataElementOptions(s), "inner" !== r.borderAlign && (e = Math.max(e, r.borderWidth || 0, r.hoverBorderWidth || 0));
                return e
            }
            getMaxOffset(t) {
                let e = 0;
                for (let i = 0, s = t.length; i < s; ++i) {
                    const t = this.resolveDataElementOptions(i);
                    e = Math.max(e, t.offset || 0, t.hoverOffset || 0)
                }
                return e
            }
            _getRingWeightOffset(t) {
                let e = 0;
                for (let i = 0; i < t; ++i) this.chart.isDatasetVisible(i) && (e += this._getRingWeight(i));
                return e
            }
            _getRingWeight(t) {
                return Math.max(h(this.chart.data.datasets[t].weight, 1), 0)
            }
            _getVisibleDatasetWeightTotal() {
                return this._getRingWeightOffset(this.chart.data.datasets.length) || 1
            }
        }
        Wi.id = "doughnut", Wi.defaults = {
            datasetElementType: !1,
            dataElementType: "arc",
            animation: {
                animateRotate: !0,
                animateScale: !1
            },
            animations: {
                numbers: {
                    type: "number",
                    properties: ["circumference", "endAngle", "innerRadius", "outerRadius", "startAngle", "x", "y", "offset", "borderWidth", "spacing"]
                }
            },
            cutout: "50%",
            rotation: 0,
            circumference: 360,
            radius: "100%",
            spacing: 0,
            indexAxis: "r"
        }, Wi.descriptors = {
            _scriptable: t => "spacing" !== t,
            _indexable: t => "spacing" !== t
        }, Wi.overrides = {
            aspectRatio: 1,
            plugins: {
                legend: {
                    labels: {
                        generateLabels(t) {
                            const e = t.data;
                            if (e.labels.length && e.datasets.length) {
                                const {
                                    labels: {
                                        pointStyle: i
                                    }
                                } = t.legend.options;
                                return e.labels.map(((e, s) => {
                                    const n = t.getDatasetMeta(0).controller.getStyle(s);
                                    return {
                                        text: e,
                                        fillStyle: n.backgroundColor,
                                        strokeStyle: n.borderColor,
                                        lineWidth: n.borderWidth,
                                        pointStyle: i,
                                        hidden: !t.getDataVisibility(s),
                                        index: s
                                    }
                                }))
                            }
                            return []
                        }
                    },
                    onClick(t, e, i) {
                        i.chart.toggleDataVisibility(e.index), i.chart.update()
                    }
                },
                tooltip: {
                    callbacks: {
                        title() {
                            return ""
                        },
                        label(t) {
                            let e = t.label;
                            const i = ": " + t.formattedValue;
                            return o(e) ? (e = e.slice(), e[0] += i) : e += i, e
                        }
                    }
                }
            }
        };
        class Ni extends Ci {
            initialize() {
                this.enableOptionSharing = !0, this.supportsDecimation = !0, super.initialize()
            }
            update(t) {
                const e = this._cachedMeta,
                    {
                        dataset: i,
                        data: s = [],
                        _dataset: n
                    } = e,
                    o = this.chart._animationsDisabled;
                let {
                    start: a,
                    count: r
                } = at(e, s, o);
                this._drawStart = a, this._drawCount = r, rt(e) && (a = 0, r = s.length), i._chart = this.chart, i._datasetIndex = this.index, i._decimated = !!n._decimated, i.points = s;
                const l = this.resolveDatasetElementOptions(t);
                this.options.showLine || (l.borderWidth = 0), l.segment = this.options.segment, this.updateElement(i, void 0, {
                    animated: !o,
                    options: l
                }, t), this.updateElements(s, a, r, t)
            }
            updateElements(t, e, i, s) {
                const o = "reset" === s,
                    {
                        iScale: a,
                        vScale: r,
                        _stacked: l,
                        _dataset: h
                    } = this._cachedMeta,
                    {
                        sharedOptions: c,
                        includeOptions: d
                    } = this._getSharedOptions(e, s),
                    u = a.axis,
                    f = r.axis,
                    {
                        spanGaps: g,
                        segment: p
                    } = this.options,
                    m = F(g) ? g : Number.POSITIVE_INFINITY,
                    b = this.chart._animationsDisabled || o || "none" === s;
                let x = e > 0 && this.getParsed(e - 1);
                for (let g = e; g < e + i; ++g) {
                    const e = t[g],
                        i = this.getParsed(g),
                        _ = b ? e : {},
                        y = n(i[f]),
                        v = _[u] = a.getPixelForValue(i[u], g),
                        M = _[f] = o || y ? r.getBasePixel() : r.getPixelForValue(l ? this.applyStack(r, i, l) : i[f], g);
                    _.skip = isNaN(v) || isNaN(M) || y, _.stop = g > 0 && Math.abs(i[u] - x[u]) > m, p && (_.parsed = i, _.raw = h.data[g]), d && (_.options = c || this.resolveDataElementOptions(g, e.active ? "active" : s)), b || this.updateElement(e, g, _, s), x = i
                }
            }
            getMaxOverflow() {
                const t = this._cachedMeta,
                    e = t.dataset,
                    i = e.options && e.options.borderWidth || 0,
                    s = t.data || [];
                if (!s.length) return i;
                const n = s[0].size(this.resolveDataElementOptions(0)),
                    o = s[s.length - 1].size(this.resolveDataElementOptions(s.length - 1));
                return Math.max(i, n, o) / 2
            }
            draw() {
                const t = this._cachedMeta;
                t.dataset.updateControlPoints(this.chart.chartArea, t.iScale.axis), super.draw()
            }
        }
        Ni.id = "line", Ni.defaults = {
            datasetElementType: "line",
            dataElementType: "point",
            showLine: !0,
            spanGaps: !1
        }, Ni.overrides = {
            scales: {
                _index_: {
                    type: "category"
                },
                _value_: {
                    type: "linear"
                }
            }
        };
        class ji extends Ci {
            constructor(t, e) {
                super(t, e), this.innerRadius = void 0, this.outerRadius = void 0
            }
            getLabelAndValue(t) {
                const e = this._cachedMeta,
                    i = this.chart,
                    s = i.data.labels || [],
                    n = ii(e._parsed[t].r, i.options.locale);
                return {
                    label: s[t] || "",
                    value: n
                }
            }
            parseObjectData(t, e, i, s) {
                return Re.bind(this)(t, e, i, s)
            }
            update(t) {
                const e = this._cachedMeta.data;
                this._updateRadius(), this.updateElements(e, 0, e.length, t)
            }
            getMinMax() {
                const t = this._cachedMeta,
                    e = {
                        min: Number.POSITIVE_INFINITY,
                        max: Number.NEGATIVE_INFINITY
                    };
                return t.data.forEach(((t, i) => {
                    const s = this.getParsed(i).r;
                    !isNaN(s) && this.chart.getDataVisibility(i) && (s < e.min && (e.min = s), s > e.max && (e.max = s))
                })), e
            }
            _updateRadius() {
                const t = this.chart,
                    e = t.chartArea,
                    i = t.options,
                    s = Math.min(e.right - e.left, e.bottom - e.top),
                    n = Math.max(s / 2, 0),
                    o = (n - Math.max(i.cutoutPercentage ? n / 100 * i.cutoutPercentage : 1, 0)) / t.getVisibleDatasetCount();
                this.outerRadius = n - o * this.index, this.innerRadius = this.outerRadius - o
            }
            updateElements(t, e, i, s) {
                const n = "reset" === s,
                    o = this.chart,
                    a = o.options.animation,
                    r = this._cachedMeta.rScale,
                    l = r.xCenter,
                    h = r.yCenter,
                    c = r.getIndexAngle(0) - .5 * P;
                let d, u = c;
                const f = 360 / this.countVisibleElements();
                for (d = 0; d < e; ++d) u += this._computeAngle(d, s, f);
                for (d = e; d < e + i; d++) {
                    const e = t[d];
                    let i = u,
                        g = u + this._computeAngle(d, s, f),
                        p = o.getDataVisibility(d) ? r.getDistanceFromCenterForValue(this.getParsed(d).r) : 0;
                    u = g, n && (a.animateScale && (p = 0), a.animateRotate && (i = g = c));
                    const m = {
                        x: l,
                        y: h,
                        innerRadius: 0,
                        outerRadius: p,
                        startAngle: i,
                        endAngle: g,
                        options: this.resolveDataElementOptions(d, e.active ? "active" : s)
                    };
                    this.updateElement(e, d, m, s)
                }
            }
            countVisibleElements() {
                const t = this._cachedMeta;
                let e = 0;
                return t.data.forEach(((t, i) => {
                    !isNaN(this.getParsed(i).r) && this.chart.getDataVisibility(i) && e++
                })), e
            }
            _computeAngle(t, e, i) {
                return this.chart.getDataVisibility(t) ? W(this.resolveDataElementOptions(t, e).angle || i) : 0
            }
        }
        ji.id = "polarArea", ji.defaults = {
            dataElementType: "arc",
            animation: {
                animateRotate: !0,
                animateScale: !0
            },
            animations: {
                numbers: {
                    type: "number",
                    properties: ["x", "y", "startAngle", "endAngle", "innerRadius", "outerRadius"]
                }
            },
            indexAxis: "r",
            startAngle: 0
        }, ji.overrides = {
            aspectRatio: 1,
            plugins: {
                legend: {
                    labels: {
                        generateLabels(t) {
                            const e = t.data;
                            if (e.labels.length && e.datasets.length) {
                                const {
                                    labels: {
                                        pointStyle: i
                                    }
                                } = t.legend.options;
                                return e.labels.map(((e, s) => {
                                    const n = t.getDatasetMeta(0).controller.getStyle(s);
                                    return {
                                        text: e,
                                        fillStyle: n.backgroundColor,
                                        strokeStyle: n.borderColor,
                                        lineWidth: n.borderWidth,
                                        pointStyle: i,
                                        hidden: !t.getDataVisibility(s),
                                        index: s
                                    }
                                }))
                            }
                            return []
                        }
                    },
                    onClick(t, e, i) {
                        i.chart.toggleDataVisibility(e.index), i.chart.update()
                    }
                },
                tooltip: {
                    callbacks: {
                        title() {
                            return ""
                        },
                        label(t) {
                            return t.chart.data.labels[t.dataIndex] + ": " + t.formattedValue
                        }
                    }
                }
            },
            scales: {
                r: {
                    type: "radialLinear",
                    angleLines: {
                        display: !1
                    },
                    beginAtZero: !0,
                    grid: {
                        circular: !0
                    },
                    pointLabels: {
                        display: !1
                    },
                    startAngle: 0
                }
            }
        };
        class Hi extends Wi {}
        Hi.id = "pie", Hi.defaults = {
            cutout: 0,
            rotation: 0,
            circumference: 360,
            radius: "100%"
        };
        class $i extends Ci {
            getLabelAndValue(t) {
                const e = this._cachedMeta.vScale,
                    i = this.getParsed(t);
                return {
                    label: e.getLabels()[t],
                    value: "" + e.getLabelForValue(i[e.axis])
                }
            }
            parseObjectData(t, e, i, s) {
                return Re.bind(this)(t, e, i, s)
            }
            update(t) {
                const e = this._cachedMeta,
                    i = e.dataset,
                    s = e.data || [],
                    n = e.iScale.getLabels();
                if (i.points = s, "resize" !== t) {
                    const e = this.resolveDatasetElementOptions(t);
                    this.options.showLine || (e.borderWidth = 0);
                    const o = {
                        _loop: !0,
                        _fullLoop: n.length === s.length,
                        options: e
                    };
                    this.updateElement(i, void 0, o, t)
                }
                this.updateElements(s, 0, s.length, t)
            }
            updateElements(t, e, i, s) {
                const n = this._cachedMeta.rScale,
                    o = "reset" === s;
                for (let a = e; a < e + i; a++) {
                    const e = t[a],
                        i = this.resolveDataElementOptions(a, e.active ? "active" : s),
                        r = n.getPointPositionForValue(a, this.getParsed(a).r),
                        l = o ? n.xCenter : r.x,
                        h = o ? n.yCenter : r.y,
                        c = {
                            x: l,
                            y: h,
                            angle: r.angle,
                            skip: isNaN(l) || isNaN(h),
                            options: i
                        };
                    this.updateElement(e, a, c, s)
                }
            }
        }
        $i.id = "radar", $i.defaults = {
            datasetElementType: "line",
            dataElementType: "point",
            indexAxis: "r",
            showLine: !0,
            elements: {
                line: {
                    fill: "start"
                }
            }
        }, $i.overrides = {
            aspectRatio: 1,
            scales: {
                r: {
                    type: "radialLinear"
                }
            }
        };
        class Yi {
            constructor() {
                this.x = void 0, this.y = void 0, this.active = !1, this.options = void 0, this.$animations = void 0
            }
            tooltipPosition(t) {
                const {
                    x: e,
                    y: i
                } = this.getProps(["x", "y"], t);
                return {
                    x: e,
                    y: i
                }
            }
            hasValue() {
                return F(this.x) && F(this.y)
            }
            getProps(t, e) {
                const i = this.$animations;
                if (!e || !i) return this;
                const s = {};
                return t.forEach((t => {
                    s[t] = i[t] && i[t].active() ? i[t]._to : this[t]
                })), s
            }
        }
        Yi.defaults = {}, Yi.defaultRoutes = void 0;
        const Ui = {
            values(t) {
                return o(t) ? t : "" + t
            },
            numeric(t, e, i) {
                if (0 === t) return "0";
                const s = this.chart.options.locale;
                let n, o = t;
                if (i.length > 1) {
                    const e = Math.max(Math.abs(i[0].value), Math.abs(i[i.length - 1].value));
                    (e < 1e-4 || e > 1e15) && (n = "scientific"), o = function (t, e) {
                        let i = e.length > 3 ? e[2].value - e[1].value : e[1].value - e[0].value;
                        return Math.abs(i) >= 1 && t !== Math.floor(t) && (i = t - Math.floor(t)), i
                    }(t, i)
                }
                const a = R(Math.abs(o)),
                    r = Math.max(Math.min(-1 * Math.floor(a), 20), 0),
                    l = {
                        notation: n,
                        minimumFractionDigits: r,
                        maximumFractionDigits: r
                    };
                return Object.assign(l, this.options.ticks.format), ii(t, s, l)
            },
            logarithmic(t, e, i) {
                if (0 === t) return "0";
                const s = t / Math.pow(10, Math.floor(R(t)));
                return 1 === s || 2 === s || 5 === s ? Ui.numeric.call(this, t, e, i) : ""
            }
        };
        var Xi = {
            formatters: Ui
        };

        function qi(t, e, i, s, n) {
            const o = h(s, 0),
                a = Math.min(h(n, t.length), t.length);
            let r, l, c, d = 0;
            for (i = Math.ceil(i), n && (r = n - s, i = r / Math.floor(r / i)), c = o; c < 0;) d++, c = Math.round(o + d * i);
            for (l = Math.max(o, 0); l < a; l++) l === c && (e.push(t[l]), d++, c = Math.round(o + d * i))
        }
        Gt.set("scale", {
            display: !0,
            offset: !1,
            reverse: !1,
            beginAtZero: !1,
            bounds: "ticks",
            grace: 0,
            grid: {
                display: !0,
                lineWidth: 1,
                drawBorder: !0,
                drawOnChartArea: !0,
                drawTicks: !0,
                tickLength: 8,
                tickWidth: (t, e) => e.lineWidth,
                tickColor: (t, e) => e.color,
                offset: !1,
                borderDash: [],
                borderDashOffset: 0,
                borderWidth: 1
            },
            title: {
                display: !1,
                text: "",
                padding: {
                    top: 4,
                    bottom: 4
                }
            },
            ticks: {
                minRotation: 0,
                maxRotation: 50,
                mirror: !1,
                textStrokeWidth: 0,
                textStrokeColor: "",
                padding: 3,
                display: !0,
                autoSkip: !0,
                autoSkipPadding: 3,
                labelOffset: 0,
                callback: Xi.formatters.values,
                minor: {},
                major: {},
                align: "center",
                crossAlign: "near",
                showLabelBackdrop: !1,
                backdropColor: "rgba(255, 255, 255, 0.75)",
                backdropPadding: 2
            }
        }), Gt.route("scale.ticks", "color", "", "color"), Gt.route("scale.grid", "color", "", "borderColor"), Gt.route("scale.grid", "borderColor", "", "borderColor"), Gt.route("scale.title", "color", "", "color"), Gt.describe("scale", {
            _fallback: !1,
            _scriptable: t => !t.startsWith("before") && !t.startsWith("after") && "callback" !== t && "parser" !== t,
            _indexable: t => "borderDash" !== t && "tickBorderDash" !== t
        }), Gt.describe("scales", {
            _fallback: "scale"
        }), Gt.describe("scale.ticks", {
            _scriptable: t => "backdropPadding" !== t && "callback" !== t,
            _indexable: t => "backdropPadding" !== t
        });
        const Ki = (t, e, i) => "top" === e || "left" === e ? t[e] + i : t[e] - i;

        function Gi(t, e) {
            const i = [],
                s = t.length / e,
                n = t.length;
            let o = 0;
            for (; o < n; o += s) i.push(t[Math.floor(o)]);
            return i
        }

        function Zi(t, e, i) {
            const s = t.ticks.length,
                n = Math.min(e, s - 1),
                o = t._startPixel,
                a = t._endPixel,
                r = 1e-6;
            let l, h = t.getPixelForTick(n);
            if (!(i && (l = 1 === s ? Math.max(h - o, a - h) : 0 === e ? (t.getPixelForTick(1) - h) / 2 : (h - t.getPixelForTick(n - 1)) / 2, h += n < e ? l : -l, h < o - r || h > a + r))) return h
        }

        function Ji(t) {
            return t.drawTicks ? t.tickLength : 0
        }

        function Qi(t, e) {
            if (!t.display) return 0;
            const i = xe(t.font, e),
                s = be(t.padding);
            return (o(t.text) ? t.text.length : 1) * i.lineHeight + s.height
        }

        function ts(t, e, i) {
            let s = nt(t);
            return (i && "right" !== e || !i && "right" === e) && (s = (t => "left" === t ? "right" : "right" === t ? "left" : t)(s)), s
        }
        class es extends Yi {
            constructor(t) {
                super(), this.id = t.id, this.type = t.type, this.options = void 0, this.ctx = t.ctx, this.chart = t.chart, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.width = void 0, this.height = void 0, this._margins = {
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0
                }, this.maxWidth = void 0, this.maxHeight = void 0, this.paddingTop = void 0, this.paddingBottom = void 0, this.paddingLeft = void 0, this.paddingRight = void 0, this.axis = void 0, this.labelRotation = void 0, this.min = void 0, this.max = void 0, this._range = void 0, this.ticks = [], this._gridLineItems = null, this._labelItems = null, this._labelSizes = null, this._length = 0, this._maxLength = 0, this._longestTextCache = {}, this._startPixel = void 0, this._endPixel = void 0, this._reversePixels = !1, this._userMax = void 0, this._userMin = void 0, this._suggestedMax = void 0, this._suggestedMin = void 0, this._ticksLength = 0, this._borderValue = 0, this._cache = {}, this._dataLimitsCached = !1, this.$context = void 0
            }
            init(t) {
                this.options = t.setContext(this.getContext()), this.axis = t.axis, this._userMin = this.parse(t.min), this._userMax = this.parse(t.max), this._suggestedMin = this.parse(t.suggestedMin), this._suggestedMax = this.parse(t.suggestedMax)
            }
            parse(t, e) {
                return t
            }
            getUserBounds() {
                let {
                    _userMin: t,
                    _userMax: e,
                    _suggestedMin: i,
                    _suggestedMax: s
                } = this;
                return t = l(t, Number.POSITIVE_INFINITY), e = l(e, Number.NEGATIVE_INFINITY), i = l(i, Number.POSITIVE_INFINITY), s = l(s, Number.NEGATIVE_INFINITY), {
                    min: l(t, i),
                    max: l(e, s),
                    minDefined: r(t),
                    maxDefined: r(e)
                }
            }
            getMinMax(t) {
                let e, {
                    min: i,
                    max: s,
                    minDefined: n,
                    maxDefined: o
                } = this.getUserBounds();
                if (n && o) return {
                    min: i,
                    max: s
                };
                const a = this.getMatchingVisibleMetas();
                for (let r = 0, l = a.length; r < l; ++r) e = a[r].controller.getMinMax(this, t), n || (i = Math.min(i, e.min)), o || (s = Math.max(s, e.max));
                return i = o && i > s ? s : i, s = n && i > s ? i : s, {
                    min: l(i, l(s, i)),
                    max: l(s, l(i, s))
                }
            }
            getPadding() {
                return {
                    left: this.paddingLeft || 0,
                    top: this.paddingTop || 0,
                    right: this.paddingRight || 0,
                    bottom: this.paddingBottom || 0
                }
            }
            getTicks() {
                return this.ticks
            }
            getLabels() {
                const t = this.chart.data;
                return this.options.labels || (this.isHorizontal() ? t.xLabels : t.yLabels) || t.labels || []
            }
            beforeLayout() {
                this._cache = {}, this._dataLimitsCached = !1
            }
            beforeUpdate() {
                d(this.options.beforeUpdate, [this])
            }
            update(t, e, i) {
                const {
                    beginAtZero: s,
                    grace: o,
                    ticks: a
                } = this.options, r = a.sampleSize;
                this.beforeUpdate(), this.maxWidth = t, this.maxHeight = e, this._margins = i = Object.assign({
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0
                }, i), this.ticks = null, this._labelSizes = null, this._gridLineItems = null, this._labelItems = null, this.beforeSetDimensions(), this.setDimensions(), this.afterSetDimensions(), this._maxLength = this.isHorizontal() ? this.width + i.left + i.right : this.height + i.top + i.bottom, this._dataLimitsCached || (this.beforeDataLimits(), this.determineDataLimits(), this.afterDataLimits(), this._range = function (t, e, i) {
                    const {
                        min: s,
                        max: n
                    } = t, o = c(e, (n - s) / 2), a = (t, e) => i && 0 === t ? 0 : t + e;
                    return {
                        min: a(s, -Math.abs(o)),
                        max: a(n, o)
                    }
                }(this, o, s), this._dataLimitsCached = !0), this.beforeBuildTicks(), this.ticks = this.buildTicks() || [], this.afterBuildTicks();
                const l = r < this.ticks.length;
                this._convertTicksToLabels(l ? Gi(this.ticks, r) : this.ticks), this.configure(), this.beforeCalculateLabelRotation(), this.calculateLabelRotation(), this.afterCalculateLabelRotation(), a.display && (a.autoSkip || "auto" === a.source) && (this.ticks = function (t, e) {
                    const i = t.options.ticks,
                        s = i.maxTicksLimit || function (t) {
                            const e = t.options.offset,
                                i = t._tickSize(),
                                s = t._length / i + (e ? 0 : 1),
                                n = t._maxLength / i;
                            return Math.floor(Math.min(s, n))
                        }(t),
                        o = i.major.enabled ? function (t) {
                            const e = [];
                            let i, s;
                            for (i = 0, s = t.length; i < s; i++) t[i].major && e.push(i);
                            return e
                        }(e) : [],
                        a = o.length,
                        r = o[0],
                        l = o[a - 1],
                        h = [];
                    if (a > s) return function (t, e, i, s) {
                        let n, o = 0,
                            a = i[0];
                        for (s = Math.ceil(s), n = 0; n < t.length; n++) n === a && (e.push(t[n]), o++, a = i[o * s])
                    }(e, h, o, a / s), h;
                    const c = function (t, e, i) {
                        const s = function (t) {
                                const e = t.length;
                                let i, s;
                                if (e < 2) return !1;
                                for (s = t[0], i = 1; i < e; ++i)
                                    if (t[i] - t[i - 1] !== s) return !1;
                                return s
                            }(t),
                            n = e.length / i;
                        if (!s) return Math.max(n, 1);
                        const o = function (t) {
                            const e = [],
                                i = Math.sqrt(t);
                            let s;
                            for (s = 1; s < i; s++) t % s == 0 && (e.push(s), e.push(t / s));
                            return i === (0 | i) && e.push(i), e.sort(((t, e) => t - e)).pop(), e
                        }(s);
                        for (let t = 0, e = o.length - 1; t < e; t++) {
                            const e = o[t];
                            if (e > n) return e
                        }
                        return Math.max(n, 1)
                    }(o, e, s);
                    if (a > 0) {
                        let t, i;
                        const s = a > 1 ? Math.round((l - r) / (a - 1)) : null;
                        for (qi(e, h, c, n(s) ? 0 : r - s, r), t = 0, i = a - 1; t < i; t++) qi(e, h, c, o[t], o[t + 1]);
                        return qi(e, h, c, l, n(s) ? e.length : l + s), h
                    }
                    return qi(e, h, c), h
                }(this, this.ticks), this._labelSizes = null, this.afterAutoSkip()), l && this._convertTicksToLabels(this.ticks), this.beforeFit(), this.fit(), this.afterFit(), this.afterUpdate()
            }
            configure() {
                let t, e, i = this.options.reverse;
                this.isHorizontal() ? (t = this.left, e = this.right) : (t = this.top, e = this.bottom, i = !i), this._startPixel = t, this._endPixel = e, this._reversePixels = i, this._length = e - t, this._alignToPixels = this.options.alignToPixels
            }
            afterUpdate() {
                d(this.options.afterUpdate, [this])
            }
            beforeSetDimensions() {
                d(this.options.beforeSetDimensions, [this])
            }
            setDimensions() {
                this.isHorizontal() ? (this.width = this.maxWidth, this.left = 0, this.right = this.width) : (this.height = this.maxHeight, this.top = 0, this.bottom = this.height), this.paddingLeft = 0, this.paddingTop = 0, this.paddingRight = 0, this.paddingBottom = 0
            }
            afterSetDimensions() {
                d(this.options.afterSetDimensions, [this])
            }
            _callHooks(t) {
                this.chart.notifyPlugins(t, this.getContext()), d(this.options[t], [this])
            }
            beforeDataLimits() {
                this._callHooks("beforeDataLimits")
            }
            determineDataLimits() {}
            afterDataLimits() {
                this._callHooks("afterDataLimits")
            }
            beforeBuildTicks() {
                this._callHooks("beforeBuildTicks")
            }
            buildTicks() {
                return []
            }
            afterBuildTicks() {
                this._callHooks("afterBuildTicks")
            }
            beforeTickToLabelConversion() {
                d(this.options.beforeTickToLabelConversion, [this])
            }
            generateTickLabels(t) {
                const e = this.options.ticks;
                let i, s, n;
                for (i = 0, s = t.length; i < s; i++) n = t[i], n.label = d(e.callback, [n.value, i, t], this)
            }
            afterTickToLabelConversion() {
                d(this.options.afterTickToLabelConversion, [this])
            }
            beforeCalculateLabelRotation() {
                d(this.options.beforeCalculateLabelRotation, [this])
            }
            calculateLabelRotation() {
                const t = this.options,
                    e = t.ticks,
                    i = this.ticks.length,
                    s = e.minRotation || 0,
                    n = e.maxRotation;
                let o, a, r, l = s;
                if (!this._isVisible() || !e.display || s >= n || i <= 1 || !this.isHorizontal()) return void(this.labelRotation = s);
                const h = this._getLabelSizes(),
                    c = h.widest.width,
                    d = h.highest.height,
                    u = q(this.chart.width - c, 0, this.maxWidth);
                o = t.offset ? this.maxWidth / i : u / (i - 1), c + 6 > o && (o = u / (i - (t.offset ? .5 : 1)), a = this.maxHeight - Ji(t.grid) - e.padding - Qi(t.title, this.chart.options.font), r = Math.sqrt(c * c + d * d), l = N(Math.min(Math.asin(q((h.highest.height + 6) / o, -1, 1)), Math.asin(q(a / r, -1, 1)) - Math.asin(q(d / r, -1, 1)))), l = Math.max(s, Math.min(n, l))), this.labelRotation = l
            }
            afterCalculateLabelRotation() {
                d(this.options.afterCalculateLabelRotation, [this])
            }
            afterAutoSkip() {}
            beforeFit() {
                d(this.options.beforeFit, [this])
            }
            fit() {
                const t = {
                        width: 0,
                        height: 0
                    },
                    {
                        chart: e,
                        options: {
                            ticks: i,
                            title: s,
                            grid: n
                        }
                    } = this,
                    o = this._isVisible(),
                    a = this.isHorizontal();
                if (o) {
                    const o = Qi(s, e.options.font);
                    if (a ? (t.width = this.maxWidth, t.height = Ji(n) + o) : (t.height = this.maxHeight, t.width = Ji(n) + o), i.display && this.ticks.length) {
                        const {
                            first: e,
                            last: s,
                            widest: n,
                            highest: o
                        } = this._getLabelSizes(), r = 2 * i.padding, l = W(this.labelRotation), h = Math.cos(l), c = Math.sin(l);
                        if (a) {
                            const e = i.mirror ? 0 : c * n.width + h * o.height;
                            t.height = Math.min(this.maxHeight, t.height + e + r)
                        } else {
                            const e = i.mirror ? 0 : h * n.width + c * o.height;
                            t.width = Math.min(this.maxWidth, t.width + e + r)
                        }
                        this._calculatePadding(e, s, c, h)
                    }
                }
                this._handleMargins(), a ? (this.width = this._length = e.width - this._margins.left - this._margins.right, this.height = t.height) : (this.width = t.width, this.height = this._length = e.height - this._margins.top - this._margins.bottom)
            }
            _calculatePadding(t, e, i, s) {
                const {
                    ticks: {
                        align: n,
                        padding: o
                    },
                    position: a
                } = this.options, r = 0 !== this.labelRotation, l = "top" !== a && "x" === this.axis;
                if (this.isHorizontal()) {
                    const a = this.getPixelForTick(0) - this.left,
                        h = this.right - this.getPixelForTick(this.ticks.length - 1);
                    let c = 0,
                        d = 0;
                    r ? l ? (c = s * t.width, d = i * e.height) : (c = i * t.height, d = s * e.width) : "start" === n ? d = e.width : "end" === n ? c = t.width : "inner" !== n && (c = t.width / 2, d = e.width / 2), this.paddingLeft = Math.max((c - a + o) * this.width / (this.width - a), 0), this.paddingRight = Math.max((d - h + o) * this.width / (this.width - h), 0)
                } else {
                    let i = e.height / 2,
                        s = t.height / 2;
                    "start" === n ? (i = 0, s = t.height) : "end" === n && (i = e.height, s = 0), this.paddingTop = i + o, this.paddingBottom = s + o
                }
            }
            _handleMargins() {
                this._margins && (this._margins.left = Math.max(this.paddingLeft, this._margins.left), this._margins.top = Math.max(this.paddingTop, this._margins.top), this._margins.right = Math.max(this.paddingRight, this._margins.right), this._margins.bottom = Math.max(this.paddingBottom, this._margins.bottom))
            }
            afterFit() {
                d(this.options.afterFit, [this])
            }
            isHorizontal() {
                const {
                    axis: t,
                    position: e
                } = this.options;
                return "top" === e || "bottom" === e || "x" === t
            }
            isFullSize() {
                return this.options.fullSize
            }
            _convertTicksToLabels(t) {
                let e, i;
                for (this.beforeTickToLabelConversion(), this.generateTickLabels(t), e = 0, i = t.length; e < i; e++) n(t[e].label) && (t.splice(e, 1), i--, e--);
                this.afterTickToLabelConversion()
            }
            _getLabelSizes() {
                let t = this._labelSizes;
                if (!t) {
                    const e = this.options.ticks.sampleSize;
                    let i = this.ticks;
                    e < i.length && (i = Gi(i, e)), this._labelSizes = t = this._computeLabelSizes(i, i.length)
                }
                return t
            }
            _computeLabelSizes(t, e) {
                const {
                    ctx: i,
                    _longestTextCache: s
                } = this, a = [], r = [];
                let l, h, c, d, f, g, p, m, b, x, _, y = 0,
                    v = 0;
                for (l = 0; l < e; ++l) {
                    if (d = t[l].label, f = this._resolveTickFontOptions(l), i.font = g = f.string, p = s[g] = s[g] || {
                            data: {},
                            gc: []
                        }, m = f.lineHeight, b = x = 0, n(d) || o(d)) {
                        if (o(d))
                            for (h = 0, c = d.length; h < c; ++h) _ = d[h], n(_) || o(_) || (b = Zt(i, p.data, p.gc, b, _), x += m)
                    } else b = Zt(i, p.data, p.gc, b, d), x = m;
                    a.push(b), r.push(x), y = Math.max(b, y), v = Math.max(x, v)
                }! function (t, e) {
                    u(t, (t => {
                        const i = t.gc,
                            s = i.length / 2;
                        let n;
                        if (s > e) {
                            for (n = 0; n < s; ++n) delete t.data[i[n]];
                            i.splice(0, s)
                        }
                    }))
                }(s, e);
                const M = a.indexOf(y),
                    w = r.indexOf(v),
                    k = t => ({
                        width: a[t] || 0,
                        height: r[t] || 0
                    });
                return {
                    first: k(0),
                    last: k(e - 1),
                    widest: k(M),
                    highest: k(w),
                    widths: a,
                    heights: r
                }
            }
            getLabelForValue(t) {
                return t
            }
            getPixelForValue(t, e) {
                return NaN
            }
            getValueForPixel(t) {}
            getPixelForTick(t) {
                const e = this.ticks;
                return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t].value)
            }
            getPixelForDecimal(t) {
                this._reversePixels && (t = 1 - t);
                const e = this._startPixel + t * this._length;
                return q(this._alignToPixels ? Qt(this.chart, e, 0) : e, -32768, 32767)
            }
            getDecimalForPixel(t) {
                const e = (t - this._startPixel) / this._length;
                return this._reversePixels ? 1 - e : e
            }
            getBasePixel() {
                return this.getPixelForValue(this.getBaseValue())
            }
            getBaseValue() {
                const {
                    min: t,
                    max: e
                } = this;
                return t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0
            }
            getContext(t) {
                const e = this.ticks || [];
                if (t >= 0 && t < e.length) {
                    const i = e[t];
                    return i.$context || (i.$context = function (t, e, i) {
                        return ye(t, {
                            tick: i,
                            index: e,
                            type: "tick"
                        })
                    }(this.getContext(), t, i))
                }
                return this.$context || (this.$context = ye(this.chart.getContext(), {
                    scale: this,
                    type: "scale"
                }))
            }
            _tickSize() {
                const t = this.options.ticks,
                    e = W(this.labelRotation),
                    i = Math.abs(Math.cos(e)),
                    s = Math.abs(Math.sin(e)),
                    n = this._getLabelSizes(),
                    o = t.autoSkipPadding || 0,
                    a = n ? n.widest.width + o : 0,
                    r = n ? n.highest.height + o : 0;
                return this.isHorizontal() ? r * i > a * s ? a / i : r / s : r * s < a * i ? r / i : a / s
            }
            _isVisible() {
                const t = this.options.display;
                return "auto" !== t ? !!t : this.getMatchingVisibleMetas().length > 0
            }
            _computeGridLineItems(t) {
                const e = this.axis,
                    i = this.chart,
                    s = this.options,
                    {
                        grid: n,
                        position: o
                    } = s,
                    r = n.offset,
                    l = this.isHorizontal(),
                    c = this.ticks.length + (r ? 1 : 0),
                    d = Ji(n),
                    u = [],
                    f = n.setContext(this.getContext()),
                    g = f.drawBorder ? f.borderWidth : 0,
                    p = g / 2,
                    m = function (t) {
                        return Qt(i, t, g)
                    };
                let b, x, _, y, v, M, w, k, S, P, D, O;
                if ("top" === o) b = m(this.bottom), M = this.bottom - d, k = b - p, P = m(t.top) + p, O = t.bottom;
                else if ("bottom" === o) b = m(this.top), P = t.top, O = m(t.bottom) - p, M = b + p, k = this.top + d;
                else if ("left" === o) b = m(this.right), v = this.right - d, w = b - p, S = m(t.left) + p, D = t.right;
                else if ("right" === o) b = m(this.left), S = t.left, D = m(t.right) - p, v = b + p, w = this.left + d;
                else if ("x" === e) {
                    if ("center" === o) b = m((t.top + t.bottom) / 2 + .5);
                    else if (a(o)) {
                        const t = Object.keys(o)[0],
                            e = o[t];
                        b = m(this.chart.scales[t].getPixelForValue(e))
                    }
                    P = t.top, O = t.bottom, M = b + p, k = M + d
                } else if ("y" === e) {
                    if ("center" === o) b = m((t.left + t.right) / 2);
                    else if (a(o)) {
                        const t = Object.keys(o)[0],
                            e = o[t];
                        b = m(this.chart.scales[t].getPixelForValue(e))
                    }
                    v = b - p, w = v - d, S = t.left, D = t.right
                }
                const C = h(s.ticks.maxTicksLimit, c),
                    A = Math.max(1, Math.ceil(c / C));
                for (x = 0; x < c; x += A) {
                    const t = n.setContext(this.getContext(x)),
                        e = t.lineWidth,
                        s = t.color,
                        o = t.borderDash || [],
                        a = t.borderDashOffset,
                        h = t.tickWidth,
                        c = t.tickColor,
                        d = t.tickBorderDash || [],
                        f = t.tickBorderDashOffset;
                    _ = Zi(this, x, r), void 0 !== _ && (y = Qt(i, _, e), l ? v = w = S = D = y : M = k = P = O = y, u.push({
                        tx1: v,
                        ty1: M,
                        tx2: w,
                        ty2: k,
                        x1: S,
                        y1: P,
                        x2: D,
                        y2: O,
                        width: e,
                        color: s,
                        borderDash: o,
                        borderDashOffset: a,
                        tickWidth: h,
                        tickColor: c,
                        tickBorderDash: d,
                        tickBorderDashOffset: f
                    }))
                }
                return this._ticksLength = c, this._borderValue = b, u
            }
            _computeLabelItems(t) {
                const e = this.axis,
                    i = this.options,
                    {
                        position: s,
                        ticks: n
                    } = i,
                    r = this.isHorizontal(),
                    l = this.ticks,
                    {
                        align: h,
                        crossAlign: c,
                        padding: d,
                        mirror: u
                    } = n,
                    f = Ji(i.grid),
                    g = f + d,
                    p = u ? -d : g,
                    m = -W(this.labelRotation),
                    b = [];
                let x, _, y, v, M, w, k, S, P, D, O, C, A = "middle";
                if ("top" === s) w = this.bottom - p, k = this._getXAxisLabelAlignment();
                else if ("bottom" === s) w = this.top + p, k = this._getXAxisLabelAlignment();
                else if ("left" === s) {
                    const t = this._getYAxisLabelAlignment(f);
                    k = t.textAlign, M = t.x
                } else if ("right" === s) {
                    const t = this._getYAxisLabelAlignment(f);
                    k = t.textAlign, M = t.x
                } else if ("x" === e) {
                    if ("center" === s) w = (t.top + t.bottom) / 2 + g;
                    else if (a(s)) {
                        const t = Object.keys(s)[0],
                            e = s[t];
                        w = this.chart.scales[t].getPixelForValue(e) + g
                    }
                    k = this._getXAxisLabelAlignment()
                } else if ("y" === e) {
                    if ("center" === s) M = (t.left + t.right) / 2 - g;
                    else if (a(s)) {
                        const t = Object.keys(s)[0],
                            e = s[t];
                        M = this.chart.scales[t].getPixelForValue(e)
                    }
                    k = this._getYAxisLabelAlignment(f).textAlign
                }
                "y" === e && ("start" === h ? A = "top" : "end" === h && (A = "bottom"));
                const T = this._getLabelSizes();
                for (x = 0, _ = l.length; x < _; ++x) {
                    y = l[x], v = y.label;
                    const t = n.setContext(this.getContext(x));
                    S = this.getPixelForTick(x) + n.labelOffset, P = this._resolveTickFontOptions(x), D = P.lineHeight, O = o(v) ? v.length : 1;
                    const e = O / 2,
                        i = t.color,
                        a = t.textStrokeColor,
                        h = t.textStrokeWidth;
                    let d, f = k;
                    if (r ? (M = S, "inner" === k && (f = x === _ - 1 ? this.options.reverse ? "left" : "right" : 0 === x ? this.options.reverse ? "right" : "left" : "center"), C = "top" === s ? "near" === c || 0 !== m ? -O * D + D / 2 : "center" === c ? -T.highest.height / 2 - e * D + D : -T.highest.height + D / 2 : "near" === c || 0 !== m ? D / 2 : "center" === c ? T.highest.height / 2 - e * D : T.highest.height - O * D, u && (C *= -1)) : (w = S, C = (1 - O) * D / 2), t.showLabelBackdrop) {
                        const e = be(t.backdropPadding),
                            i = T.heights[x],
                            s = T.widths[x];
                        let n = w + C - e.top,
                            o = M - e.left;
                        switch (A) {
                            case "middle":
                                n -= i / 2;
                                break;
                            case "bottom":
                                n -= i
                        }
                        switch (k) {
                            case "center":
                                o -= s / 2;
                                break;
                            case "right":
                                o -= s
                        }
                        d = {
                            left: o,
                            top: n,
                            width: s + e.width,
                            height: i + e.height,
                            color: t.backdropColor
                        }
                    }
                    b.push({
                        rotation: m,
                        label: v,
                        font: P,
                        color: i,
                        strokeColor: a,
                        strokeWidth: h,
                        textOffset: C,
                        textAlign: f,
                        textBaseline: A,
                        translation: [M, w],
                        backdrop: d
                    })
                }
                return b
            }
            _getXAxisLabelAlignment() {
                const {
                    position: t,
                    ticks: e
                } = this.options;
                if (-W(this.labelRotation)) return "top" === t ? "left" : "right";
                let i = "center";
                return "start" === e.align ? i = "left" : "end" === e.align ? i = "right" : "inner" === e.align && (i = "inner"), i
            }
            _getYAxisLabelAlignment(t) {
                const {
                    position: e,
                    ticks: {
                        crossAlign: i,
                        mirror: s,
                        padding: n
                    }
                } = this.options, o = t + n, a = this._getLabelSizes().widest.width;
                let r, l;
                return "left" === e ? s ? (l = this.right + n, "near" === i ? r = "left" : "center" === i ? (r = "center", l += a / 2) : (r = "right", l += a)) : (l = this.right - o, "near" === i ? r = "right" : "center" === i ? (r = "center", l -= a / 2) : (r = "left", l = this.left)) : "right" === e ? s ? (l = this.left + n, "near" === i ? r = "right" : "center" === i ? (r = "center", l -= a / 2) : (r = "left", l -= a)) : (l = this.left + o, "near" === i ? r = "left" : "center" === i ? (r = "center", l += a / 2) : (r = "right", l = this.right)) : r = "right", {
                    textAlign: r,
                    x: l
                }
            }
            _computeLabelArea() {
                if (this.options.ticks.mirror) return;
                const t = this.chart,
                    e = this.options.position;
                return "left" === e || "right" === e ? {
                    top: 0,
                    left: this.left,
                    bottom: t.height,
                    right: this.right
                } : "top" === e || "bottom" === e ? {
                    top: this.top,
                    left: 0,
                    bottom: this.bottom,
                    right: t.width
                } : void 0
            }
            drawBackground() {
                const {
                    ctx: t,
                    options: {
                        backgroundColor: e
                    },
                    left: i,
                    top: s,
                    width: n,
                    height: o
                } = this;
                e && (t.save(), t.fillStyle = e, t.fillRect(i, s, n, o), t.restore())
            }
            getLineWidthForValue(t) {
                const e = this.options.grid;
                if (!this._isVisible() || !e.display) return 0;
                const i = this.ticks.findIndex((e => e.value === t));
                return i >= 0 ? e.setContext(this.getContext(i)).lineWidth : 0
            }
            drawGrid(t) {
                const e = this.options.grid,
                    i = this.ctx,
                    s = this._gridLineItems || (this._gridLineItems = this._computeGridLineItems(t));
                let n, o;
                const a = (t, e, s) => {
                    s.width && s.color && (i.save(), i.lineWidth = s.width, i.strokeStyle = s.color, i.setLineDash(s.borderDash || []), i.lineDashOffset = s.borderDashOffset, i.beginPath(), i.moveTo(t.x, t.y), i.lineTo(e.x, e.y), i.stroke(), i.restore())
                };
                if (e.display)
                    for (n = 0, o = s.length; n < o; ++n) {
                        const t = s[n];
                        e.drawOnChartArea && a({
                            x: t.x1,
                            y: t.y1
                        }, {
                            x: t.x2,
                            y: t.y2
                        }, t), e.drawTicks && a({
                            x: t.tx1,
                            y: t.ty1
                        }, {
                            x: t.tx2,
                            y: t.ty2
                        }, {
                            color: t.tickColor,
                            width: t.tickWidth,
                            borderDash: t.tickBorderDash,
                            borderDashOffset: t.tickBorderDashOffset
                        })
                    }
            }
            drawBorder() {
                const {
                    chart: t,
                    ctx: e,
                    options: {
                        grid: i
                    }
                } = this, s = i.setContext(this.getContext()), n = i.drawBorder ? s.borderWidth : 0;
                if (!n) return;
                const o = i.setContext(this.getContext(0)).lineWidth,
                    a = this._borderValue;
                let r, l, h, c;
                this.isHorizontal() ? (r = Qt(t, this.left, n) - n / 2, l = Qt(t, this.right, o) + o / 2, h = c = a) : (h = Qt(t, this.top, n) - n / 2, c = Qt(t, this.bottom, o) + o / 2, r = l = a), e.save(), e.lineWidth = s.borderWidth, e.strokeStyle = s.borderColor, e.beginPath(), e.moveTo(r, h), e.lineTo(l, c), e.stroke(), e.restore()
            }
            drawLabels(t) {
                if (!this.options.ticks.display) return;
                const e = this.ctx,
                    i = this._computeLabelArea();
                i && ne(e, i);
                const s = this._labelItems || (this._labelItems = this._computeLabelItems(t));
                let n, o;
                for (n = 0, o = s.length; n < o; ++n) {
                    const t = s[n],
                        i = t.font,
                        o = t.label;
                    t.backdrop && (e.fillStyle = t.backdrop.color, e.fillRect(t.backdrop.left, t.backdrop.top, t.backdrop.width, t.backdrop.height)), le(e, o, 0, t.textOffset, i, t)
                }
                i && oe(e)
            }
            drawTitle() {
                const {
                    ctx: t,
                    options: {
                        position: e,
                        title: i,
                        reverse: s
                    }
                } = this;
                if (!i.display) return;
                const n = xe(i.font),
                    r = be(i.padding),
                    l = i.align;
                let h = n.lineHeight / 2;
                "bottom" === e || "center" === e || a(e) ? (h += r.bottom, o(i.text) && (h += n.lineHeight * (i.text.length - 1))) : h += r.top;
                const {
                    titleX: c,
                    titleY: d,
                    maxWidth: u,
                    rotation: f
                } = function (t, e, i, s) {
                    const {
                        top: n,
                        left: o,
                        bottom: r,
                        right: l,
                        chart: h
                    } = t, {
                        chartArea: c,
                        scales: d
                    } = h;
                    let u, f, g, p = 0;
                    const m = r - n,
                        b = l - o;
                    if (t.isHorizontal()) {
                        if (f = ot(s, o, l), a(i)) {
                            const t = Object.keys(i)[0],
                                s = i[t];
                            g = d[t].getPixelForValue(s) + m - e
                        } else g = "center" === i ? (c.bottom + c.top) / 2 + m - e : Ki(t, i, e);
                        u = l - o
                    } else {
                        if (a(i)) {
                            const t = Object.keys(i)[0],
                                s = i[t];
                            f = d[t].getPixelForValue(s) - b + e
                        } else f = "center" === i ? (c.left + c.right) / 2 - b + e : Ki(t, i, e);
                        g = ot(s, r, n), p = "left" === i ? -T : T
                    }
                    return {
                        titleX: f,
                        titleY: g,
                        maxWidth: u,
                        rotation: p
                    }
                }(this, h, e, l);
                le(t, i.text, 0, 0, n, {
                    color: i.color,
                    maxWidth: u,
                    rotation: f,
                    textAlign: ts(l, e, s),
                    textBaseline: "middle",
                    translation: [c, d]
                })
            }
            draw(t) {
                this._isVisible() && (this.drawBackground(), this.drawGrid(t), this.drawBorder(), this.drawTitle(), this.drawLabels(t))
            }
            _layers() {
                const t = this.options,
                    e = t.ticks && t.ticks.z || 0,
                    i = h(t.grid && t.grid.z, -1);
                return this._isVisible() && this.draw === es.prototype.draw ? [{
                    z: i,
                    draw: t => {
                        this.drawBackground(), this.drawGrid(t), this.drawTitle()
                    }
                }, {
                    z: i + 1,
                    draw: () => {
                        this.drawBorder()
                    }
                }, {
                    z: e,
                    draw: t => {
                        this.drawLabels(t)
                    }
                }] : [{
                    z: e,
                    draw: t => {
                        this.draw(t)
                    }
                }]
            }
            getMatchingVisibleMetas(t) {
                const e = this.chart.getSortedVisibleDatasetMetas(),
                    i = this.axis + "AxisID",
                    s = [];
                let n, o;
                for (n = 0, o = e.length; n < o; ++n) {
                    const o = e[n];
                    o[i] !== this.id || t && o.type !== t || s.push(o)
                }
                return s
            }
            _resolveTickFontOptions(t) {
                return xe(this.options.ticks.setContext(this.getContext(t)).font)
            }
            _maxDigits() {
                const t = this._resolveTickFontOptions(0).lineHeight;
                return (this.isHorizontal() ? this.width : this.height) / t
            }
        }
        class is {
            constructor(t, e, i) {
                this.type = t, this.scope = e, this.override = i, this.items = Object.create(null)
            }
            isForType(t) {
                return Object.prototype.isPrototypeOf.call(this.type.prototype, t.prototype)
            }
            register(t) {
                const e = Object.getPrototypeOf(t);
                let i;
                (function (t) {
                    return "id" in t && "defaults" in t
                })(e) && (i = this.register(e));
                const s = this.items,
                    n = t.id,
                    o = this.scope + "." + n;
                if (!n) throw new Error("class does not have id: " + t);
                return n in s || (s[n] = t, function (t, e, i) {
                    const s = b(Object.create(null), [i ? Gt.get(i) : {}, Gt.get(e), t.defaults]);
                    Gt.set(e, s), t.defaultRoutes && function (t, e) {
                        Object.keys(e).forEach((i => {
                            const s = i.split("."),
                                n = s.pop(),
                                o = [t].concat(s).join("."),
                                a = e[i].split("."),
                                r = a.pop(),
                                l = a.join(".");
                            Gt.route(o, n, l, r)
                        }))
                    }(e, t.defaultRoutes), t.descriptors && Gt.describe(e, t.descriptors)
                }(t, o, i), this.override && Gt.override(t.id, t.overrides)), o
            }
            get(t) {
                return this.items[t]
            }
            unregister(t) {
                const e = this.items,
                    i = t.id,
                    s = this.scope;
                i in e && delete e[i], s && i in Gt[s] && (delete Gt[s][i], this.override && delete Ut[i])
            }
        }
        var ss = new class {
            constructor() {
                this.controllers = new is(Ci, "datasets", !0), this.elements = new is(Yi, "elements"), this.plugins = new is(Object, "plugins"), this.scales = new is(es, "scales"), this._typedRegistries = [this.controllers, this.scales, this.elements]
            }
            add(...t) {
                this._each("register", t)
            }
            remove(...t) {
                this._each("unregister", t)
            }
            addControllers(...t) {
                this._each("register", t, this.controllers)
            }
            addElements(...t) {
                this._each("register", t, this.elements)
            }
            addPlugins(...t) {
                this._each("register", t, this.plugins)
            }
            addScales(...t) {
                this._each("register", t, this.scales)
            }
            getController(t) {
                return this._get(t, this.controllers, "controller")
            }
            getElement(t) {
                return this._get(t, this.elements, "element")
            }
            getPlugin(t) {
                return this._get(t, this.plugins, "plugin")
            }
            getScale(t) {
                return this._get(t, this.scales, "scale")
            }
            removeControllers(...t) {
                this._each("unregister", t, this.controllers)
            }
            removeElements(...t) {
                this._each("unregister", t, this.elements)
            }
            removePlugins(...t) {
                this._each("unregister", t, this.plugins)
            }
            removeScales(...t) {
                this._each("unregister", t, this.scales)
            }
            _each(t, e, i) {
                [...e].forEach((e => {
                    const s = i || this._getRegistryForType(e);
                    i || s.isForType(e) || s === this.plugins && e.id ? this._exec(t, s, e) : u(e, (e => {
                        const s = i || this._getRegistryForType(e);
                        this._exec(t, s, e)
                    }))
                }))
            }
            _exec(t, e, i) {
                const s = M(t);
                d(i["before" + s], [], i), e[t](i), d(i["after" + s], [], i)
            }
            _getRegistryForType(t) {
                for (let e = 0; e < this._typedRegistries.length; e++) {
                    const i = this._typedRegistries[e];
                    if (i.isForType(t)) return i
                }
                return this.plugins
            }
            _get(t, e, i) {
                const s = e.get(t);
                if (void 0 === s) throw new Error('"' + t + '" is not a registered ' + i + ".");
                return s
            }
        };
        class ns extends Ci {
            update(t) {
                const e = this._cachedMeta,
                    {
                        data: i = []
                    } = e,
                    s = this.chart._animationsDisabled;
                let {
                    start: n,
                    count: o
                } = at(e, i, s);
                if (this._drawStart = n, this._drawCount = o, rt(e) && (n = 0, o = i.length), this.options.showLine) {
                    const {
                        dataset: n,
                        _dataset: o
                    } = e;
                    n._chart = this.chart, n._datasetIndex = this.index, n._decimated = !!o._decimated, n.points = i;
                    const a = this.resolveDatasetElementOptions(t);
                    a.segment = this.options.segment, this.updateElement(n, void 0, {
                        animated: !s,
                        options: a
                    }, t)
                }
                this.updateElements(i, n, o, t)
            }
            addElements() {
                const {
                    showLine: t
                } = this.options;
                !this.datasetElementType && t && (this.datasetElementType = ss.getElement("line")), super.addElements()
            }
            updateElements(t, e, i, s) {
                const o = "reset" === s,
                    {
                        iScale: a,
                        vScale: r,
                        _stacked: l,
                        _dataset: h
                    } = this._cachedMeta,
                    c = this.resolveDataElementOptions(e, s),
                    d = this.getSharedOptions(c),
                    u = this.includeOptions(s, d),
                    f = a.axis,
                    g = r.axis,
                    {
                        spanGaps: p,
                        segment: m
                    } = this.options,
                    b = F(p) ? p : Number.POSITIVE_INFINITY,
                    x = this.chart._animationsDisabled || o || "none" === s;
                let _ = e > 0 && this.getParsed(e - 1);
                for (let c = e; c < e + i; ++c) {
                    const e = t[c],
                        i = this.getParsed(c),
                        p = x ? e : {},
                        y = n(i[g]),
                        v = p[f] = a.getPixelForValue(i[f], c),
                        M = p[g] = o || y ? r.getBasePixel() : r.getPixelForValue(l ? this.applyStack(r, i, l) : i[g], c);
                    p.skip = isNaN(v) || isNaN(M) || y, p.stop = c > 0 && Math.abs(i[f] - _[f]) > b, m && (p.parsed = i, p.raw = h.data[c]), u && (p.options = d || this.resolveDataElementOptions(c, e.active ? "active" : s)), x || this.updateElement(e, c, p, s), _ = i
                }
                this.updateSharedOptions(d, s, c)
            }
            getMaxOverflow() {
                const t = this._cachedMeta,
                    e = t.data || [];
                if (!this.options.showLine) {
                    let t = 0;
                    for (let i = e.length - 1; i >= 0; --i) t = Math.max(t, e[i].size(this.resolveDataElementOptions(i)) / 2);
                    return t > 0 && t
                }
                const i = t.dataset,
                    s = i.options && i.options.borderWidth || 0;
                if (!e.length) return s;
                const n = e[0].size(this.resolveDataElementOptions(0)),
                    o = e[e.length - 1].size(this.resolveDataElementOptions(e.length - 1));
                return Math.max(s, n, o) / 2
            }
        }
        ns.id = "scatter", ns.defaults = {
            datasetElementType: !1,
            dataElementType: "point",
            showLine: !1,
            fill: !1
        }, ns.overrides = {
            interaction: {
                mode: "point"
            },
            plugins: {
                tooltip: {
                    callbacks: {
                        title() {
                            return ""
                        },
                        label(t) {
                            return "(" + t.label + ", " + t.formattedValue + ")"
                        }
                    }
                }
            },
            scales: {
                x: {
                    type: "linear"
                },
                y: {
                    type: "linear"
                }
            }
        };
        var os = Object.freeze({
            __proto__: null,
            BarController: Vi,
            BubbleController: Bi,
            DoughnutController: Wi,
            LineController: Ni,
            PolarAreaController: ji,
            PieController: Hi,
            RadarController: $i,
            ScatterController: ns
        });

        function as() {
            throw new Error("This method is not implemented: Check that a complete date adapter is provided.")
        }
        class rs {
            constructor(t) {
                this.options = t || {}
            }
            init(t) {}
            formats() {
                return as()
            }
            parse(t, e) {
                return as()
            }
            format(t, e) {
                return as()
            }
            add(t, e, i) {
                return as()
            }
            diff(t, e, i) {
                return as()
            }
            startOf(t, e, i) {
                return as()
            }
            endOf(t, e) {
                return as()
            }
        }
        rs.override = function (t) {
            Object.assign(rs.prototype, t)
        };
        var ls = {
            _date: rs
        };

        function hs(t, e, i, s) {
            const {
                controller: n,
                data: o,
                _sorted: a
            } = t, r = n._cachedMeta.iScale;
            if (r && e === r.axis && "r" !== e && a && o.length) {
                const t = r._reversePixels ? J : Z;
                if (!s) return t(o, e, i);
                if (n._sharedOptions) {
                    const s = o[0],
                        n = "function" == typeof s.getRange && s.getRange(e);
                    if (n) {
                        const s = t(o, e, i - n),
                            a = t(o, e, i + n);
                        return {
                            lo: s.lo,
                            hi: a.hi
                        }
                    }
                }
            }
            return {
                lo: 0,
                hi: o.length - 1
            }
        }

        function cs(t, e, i, s, n) {
            const o = t.getSortedVisibleDatasetMetas(),
                a = i[e];
            for (let t = 0, i = o.length; t < i; ++t) {
                const {
                    index: i,
                    data: r
                } = o[t], {
                    lo: l,
                    hi: h
                } = hs(o[t], e, a, n);
                for (let t = l; t <= h; ++t) {
                    const e = r[t];
                    e.skip || s(e, i, t)
                }
            }
        }

        function ds(t, e, i, s, n) {
            const o = [];
            return n || t.isPointInArea(e) ? (cs(t, i, e, (function (i, a, r) {
                (n || se(i, t.chartArea, 0)) && i.inRange(e.x, e.y, s) && o.push({
                    element: i,
                    datasetIndex: a,
                    index: r
                })
            }), !0), o) : o
        }

        function us(t, e, i, s, n, o) {
            return o || t.isPointInArea(e) ? "r" !== i || s ? function (t, e, i, s, n, o) {
                let a = [];
                const r = function (t) {
                    const e = -1 !== t.indexOf("x"),
                        i = -1 !== t.indexOf("y");
                    return function (t, s) {
                        const n = e ? Math.abs(t.x - s.x) : 0,
                            o = i ? Math.abs(t.y - s.y) : 0;
                        return Math.sqrt(Math.pow(n, 2) + Math.pow(o, 2))
                    }
                }(i);
                let l = Number.POSITIVE_INFINITY;
                return cs(t, i, e, (function (i, h, c) {
                    const d = i.inRange(e.x, e.y, n);
                    if (s && !d) return;
                    const u = i.getCenterPoint(n);
                    if (!o && !t.isPointInArea(u) && !d) return;
                    const f = r(e, u);
                    f < l ? (a = [{
                        element: i,
                        datasetIndex: h,
                        index: c
                    }], l = f) : f === l && a.push({
                        element: i,
                        datasetIndex: h,
                        index: c
                    })
                })), a
            }(t, e, i, s, n, o) : function (t, e, i, s) {
                let n = [];
                return cs(t, i, e, (function (t, i, o) {
                    const {
                        startAngle: a,
                        endAngle: r
                    } = t.getProps(["startAngle", "endAngle"], s), {
                        angle: l
                    } = H(t, {
                        x: e.x,
                        y: e.y
                    });
                    X(l, a, r) && n.push({
                        element: t,
                        datasetIndex: i,
                        index: o
                    })
                })), n
            }(t, e, i, n) : []
        }

        function fs(t, e, i, s, n) {
            const o = [],
                a = "x" === i ? "inXRange" : "inYRange";
            let r = !1;
            return cs(t, i, e, ((t, s, l) => {
                t[a](e[i], n) && (o.push({
                    element: t,
                    datasetIndex: s,
                    index: l
                }), r = r || t.inRange(e.x, e.y, n))
            })), s && !r ? [] : o
        }
        var gs = {
            evaluateInteractionItems: cs,
            modes: {
                index(t, e, i, s) {
                    const n = Xe(e, t),
                        o = i.axis || "x",
                        a = i.includeInvisible || !1,
                        r = i.intersect ? ds(t, n, o, s, a) : us(t, n, o, !1, s, a),
                        l = [];
                    return r.length ? (t.getSortedVisibleDatasetMetas().forEach((t => {
                        const e = r[0].index,
                            i = t.data[e];
                        i && !i.skip && l.push({
                            element: i,
                            datasetIndex: t.index,
                            index: e
                        })
                    })), l) : []
                },
                dataset(t, e, i, s) {
                    const n = Xe(e, t),
                        o = i.axis || "xy",
                        a = i.includeInvisible || !1;
                    let r = i.intersect ? ds(t, n, o, s, a) : us(t, n, o, !1, s, a);
                    if (r.length > 0) {
                        const e = r[0].datasetIndex,
                            i = t.getDatasetMeta(e).data;
                        r = [];
                        for (let t = 0; t < i.length; ++t) r.push({
                            element: i[t],
                            datasetIndex: e,
                            index: t
                        })
                    }
                    return r
                },
                point(t, e, i, s) {
                    return ds(t, Xe(e, t), i.axis || "xy", s, i.includeInvisible || !1)
                },
                nearest(t, e, i, s) {
                    const n = Xe(e, t),
                        o = i.axis || "xy",
                        a = i.includeInvisible || !1;
                    return us(t, n, o, i.intersect, s, a)
                },
                x(t, e, i, s) {
                    return fs(t, Xe(e, t), "x", i.intersect, s)
                },
                y(t, e, i, s) {
                    return fs(t, Xe(e, t), "y", i.intersect, s)
                }
            }
        };
        const ps = ["left", "top", "right", "bottom"];

        function ms(t, e) {
            return t.filter((t => t.pos === e))
        }

        function bs(t, e) {
            return t.filter((t => -1 === ps.indexOf(t.pos) && t.box.axis === e))
        }

        function xs(t, e) {
            return t.sort(((t, i) => {
                const s = e ? i : t,
                    n = e ? t : i;
                return s.weight === n.weight ? s.index - n.index : s.weight - n.weight
            }))
        }

        function _s(t, e, i, s) {
            return Math.max(t[i], e[i]) + Math.max(t[s], e[s])
        }

        function ys(t, e) {
            t.top = Math.max(t.top, e.top), t.left = Math.max(t.left, e.left), t.bottom = Math.max(t.bottom, e.bottom), t.right = Math.max(t.right, e.right)
        }

        function vs(t, e, i, s) {
            const {
                pos: n,
                box: o
            } = i, r = t.maxPadding;
            if (!a(n)) {
                i.size && (t[n] -= i.size);
                const e = s[i.stack] || {
                    size: 0,
                    count: 1
                };
                e.size = Math.max(e.size, i.horizontal ? o.height : o.width), i.size = e.size / e.count, t[n] += i.size
            }
            o.getPadding && ys(r, o.getPadding());
            const l = Math.max(0, e.outerWidth - _s(r, t, "left", "right")),
                h = Math.max(0, e.outerHeight - _s(r, t, "top", "bottom")),
                c = l !== t.w,
                d = h !== t.h;
            return t.w = l, t.h = h, i.horizontal ? {
                same: c,
                other: d
            } : {
                same: d,
                other: c
            }
        }

        function Ms(t, e) {
            const i = e.maxPadding;
            return function (t) {
                const s = {
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0
                };
                return t.forEach((t => {
                    s[t] = Math.max(e[t], i[t])
                })), s
            }(t ? ["left", "right"] : ["top", "bottom"])
        }

        function ws(t, e, i, s) {
            const n = [];
            let o, a, r, l, h, c;
            for (o = 0, a = t.length, h = 0; o < a; ++o) {
                r = t[o], l = r.box, l.update(r.width || e.w, r.height || e.h, Ms(r.horizontal, e));
                const {
                    same: a,
                    other: d
                } = vs(e, i, r, s);
                h |= a && n.length, c = c || d, l.fullSize || n.push(r)
            }
            return h && ws(n, e, i, s) || c
        }

        function ks(t, e, i, s, n) {
            t.top = i, t.left = e, t.right = e + s, t.bottom = i + n, t.width = s, t.height = n
        }

        function Ss(t, e, i, s) {
            const n = i.padding;
            let {
                x: o,
                y: a
            } = e;
            for (const r of t) {
                const t = r.box,
                    l = s[r.stack] || {
                        count: 1,
                        placed: 0,
                        weight: 1
                    },
                    h = r.stackWeight / l.weight || 1;
                if (r.horizontal) {
                    const s = e.w * h,
                        o = l.size || t.height;
                    w(l.start) && (a = l.start), t.fullSize ? ks(t, n.left, a, i.outerWidth - n.right - n.left, o) : ks(t, e.left + l.placed, a, s, o), l.start = a, l.placed += s, a = t.bottom
                } else {
                    const s = e.h * h,
                        a = l.size || t.width;
                    w(l.start) && (o = l.start), t.fullSize ? ks(t, o, n.top, a, i.outerHeight - n.bottom - n.top) : ks(t, o, e.top + l.placed, a, s), l.start = o, l.placed += s, o = t.right
                }
            }
            e.x = o, e.y = a
        }
        Gt.set("layout", {
            autoPadding: !0,
            padding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            }
        });
        var Ps = {
            addBox(t, e) {
                t.boxes || (t.boxes = []), e.fullSize = e.fullSize || !1, e.position = e.position || "top", e.weight = e.weight || 0, e._layers = e._layers || function () {
                    return [{
                        z: 0,
                        draw(t) {
                            e.draw(t)
                        }
                    }]
                }, t.boxes.push(e)
            },
            removeBox(t, e) {
                const i = t.boxes ? t.boxes.indexOf(e) : -1; - 1 !== i && t.boxes.splice(i, 1)
            },
            configure(t, e, i) {
                e.fullSize = i.fullSize, e.position = i.position, e.weight = i.weight
            },
            update(t, e, i, s) {
                if (!t) return;
                const n = be(t.options.layout.padding),
                    o = Math.max(e - n.width, 0),
                    a = Math.max(i - n.height, 0),
                    r = function (t) {
                        const e = function (t) {
                                const e = [];
                                let i, s, n, o, a, r;
                                for (i = 0, s = (t || []).length; i < s; ++i) n = t[i], ({
                                    position: o,
                                    options: {
                                        stack: a,
                                        stackWeight: r = 1
                                    }
                                } = n), e.push({
                                    index: i,
                                    box: n,
                                    pos: o,
                                    horizontal: n.isHorizontal(),
                                    weight: n.weight,
                                    stack: a && o + a,
                                    stackWeight: r
                                });
                                return e
                            }(t),
                            i = xs(e.filter((t => t.box.fullSize)), !0),
                            s = xs(ms(e, "left"), !0),
                            n = xs(ms(e, "right")),
                            o = xs(ms(e, "top"), !0),
                            a = xs(ms(e, "bottom")),
                            r = bs(e, "x"),
                            l = bs(e, "y");
                        return {
                            fullSize: i,
                            leftAndTop: s.concat(o),
                            rightAndBottom: n.concat(l).concat(a).concat(r),
                            chartArea: ms(e, "chartArea"),
                            vertical: s.concat(n).concat(l),
                            horizontal: o.concat(a).concat(r)
                        }
                    }(t.boxes),
                    l = r.vertical,
                    h = r.horizontal;
                u(t.boxes, (t => {
                    "function" == typeof t.beforeLayout && t.beforeLayout()
                }));
                const c = l.reduce(((t, e) => e.box.options && !1 === e.box.options.display ? t : t + 1), 0) || 1,
                    d = Object.freeze({
                        outerWidth: e,
                        outerHeight: i,
                        padding: n,
                        availableWidth: o,
                        availableHeight: a,
                        vBoxMaxWidth: o / 2 / c,
                        hBoxMaxHeight: a / 2
                    }),
                    f = Object.assign({}, n);
                ys(f, be(s));
                const g = Object.assign({
                        maxPadding: f,
                        w: o,
                        h: a,
                        x: n.left,
                        y: n.top
                    }, n),
                    p = function (t, e) {
                        const i = function (t) {
                                const e = {};
                                for (const i of t) {
                                    const {
                                        stack: t,
                                        pos: s,
                                        stackWeight: n
                                    } = i;
                                    if (!t || !ps.includes(s)) continue;
                                    const o = e[t] || (e[t] = {
                                        count: 0,
                                        placed: 0,
                                        weight: 0,
                                        size: 0
                                    });
                                    o.count++, o.weight += n
                                }
                                return e
                            }(t),
                            {
                                vBoxMaxWidth: s,
                                hBoxMaxHeight: n
                            } = e;
                        let o, a, r;
                        for (o = 0, a = t.length; o < a; ++o) {
                            r = t[o];
                            const {
                                fullSize: a
                            } = r.box, l = i[r.stack], h = l && r.stackWeight / l.weight;
                            r.horizontal ? (r.width = h ? h * s : a && e.availableWidth, r.height = n) : (r.width = s, r.height = h ? h * n : a && e.availableHeight)
                        }
                        return i
                    }(l.concat(h), d);
                ws(r.fullSize, g, d, p), ws(l, g, d, p), ws(h, g, d, p) && ws(l, g, d, p),
                    function (t) {
                        const e = t.maxPadding;

                        function i(i) {
                            const s = Math.max(e[i] - t[i], 0);
                            return t[i] += s, s
                        }
                        t.y += i("top"), t.x += i("left"), i("right"), i("bottom")
                    }(g), Ss(r.leftAndTop, g, d, p), g.x += g.w, g.y += g.h, Ss(r.rightAndBottom, g, d, p), t.chartArea = {
                        left: g.left,
                        top: g.top,
                        right: g.left + g.w,
                        bottom: g.top + g.h,
                        height: g.h,
                        width: g.w
                    }, u(r.chartArea, (e => {
                        const i = e.box;
                        Object.assign(i, t.chartArea), i.update(g.w, g.h, {
                            left: 0,
                            top: 0,
                            right: 0,
                            bottom: 0
                        })
                    }))
            }
        };
        class Ds {
            acquireContext(t, e) {}
            releaseContext(t) {
                return !1
            }
            addEventListener(t, e, i) {}
            removeEventListener(t, e, i) {}
            getDevicePixelRatio() {
                return 1
            }
            getMaximumSize(t, e, i, s) {
                return e = Math.max(0, e || t.width), i = i || t.height, {
                    width: e,
                    height: Math.max(0, s ? Math.floor(e / s) : i)
                }
            }
            isAttached(t) {
                return !0
            }
            updateConfig(t) {}
        }
        class Os extends Ds {
            acquireContext(t) {
                return t && t.getContext && t.getContext("2d") || null
            }
            updateConfig(t) {
                t.options.animation = !1
            }
        }
        const Cs = "$chartjs",
            As = {
                touchstart: "mousedown",
                touchmove: "mousemove",
                touchend: "mouseup",
                pointerenter: "mouseenter",
                pointerdown: "mousedown",
                pointermove: "mousemove",
                pointerup: "mouseup",
                pointerleave: "mouseout",
                pointerout: "mouseout"
            },
            Ts = t => null === t || "" === t,
            Ls = !!Ge && {
                passive: !0
            };

        function Es(t, e, i) {
            t.canvas.removeEventListener(e, i, Ls)
        }

        function Rs(t, e) {
            for (const i of t)
                if (i === e || i.contains(e)) return !0
        }

        function Is(t, e, i) {
            const s = t.canvas,
                n = new MutationObserver((t => {
                    let e = !1;
                    for (const i of t) e = e || Rs(i.addedNodes, s), e = e && !Rs(i.removedNodes, s);
                    e && i()
                }));
            return n.observe(document, {
                childList: !0,
                subtree: !0
            }), n
        }

        function zs(t, e, i) {
            const s = t.canvas,
                n = new MutationObserver((t => {
                    let e = !1;
                    for (const i of t) e = e || Rs(i.removedNodes, s), e = e && !Rs(i.addedNodes, s);
                    e && i()
                }));
            return n.observe(document, {
                childList: !0,
                subtree: !0
            }), n
        }
        const Fs = new Map;
        let Vs = 0;

        function Bs() {
            const t = window.devicePixelRatio;
            t !== Vs && (Vs = t, Fs.forEach(((e, i) => {
                i.currentDevicePixelRatio !== t && e()
            })))
        }

        function Ws(t, e, i) {
            const s = t.canvas,
                n = s && je(s);
            if (!n) return;
            const o = st(((t, e) => {
                    const s = n.clientWidth;
                    i(t, e), s < n.clientWidth && i()
                }), window),
                a = new ResizeObserver((t => {
                    const e = t[0],
                        i = e.contentRect.width,
                        s = e.contentRect.height;
                    0 === i && 0 === s || o(i, s)
                }));
            return a.observe(n),
                function (t, e) {
                    Fs.size || window.addEventListener("resize", Bs), Fs.set(t, e)
                }(t, o), a
        }

        function Ns(t, e, i) {
            i && i.disconnect(), "resize" === e && function (t) {
                Fs.delete(t), Fs.size || window.removeEventListener("resize", Bs)
            }(t)
        }

        function js(t, e, i) {
            const s = t.canvas,
                n = st((e => {
                    null !== t.ctx && i(function (t, e) {
                        const i = As[t.type] || t.type,
                            {
                                x: s,
                                y: n
                            } = Xe(t, e);
                        return {
                            type: i,
                            chart: e,
                            native: t,
                            x: void 0 !== s ? s : null,
                            y: void 0 !== n ? n : null
                        }
                    }(e, t))
                }), t, (t => {
                    const e = t[0];
                    return [e, e.offsetX, e.offsetY]
                }));
            return function (t, e, i) {
                t.addEventListener(e, i, Ls)
            }(s, e, n), n
        }
        class Hs extends Ds {
            acquireContext(t, e) {
                const i = t && t.getContext && t.getContext("2d");
                return i && i.canvas === t ? (function (t, e) {
                    const i = t.style,
                        s = t.getAttribute("height"),
                        n = t.getAttribute("width");
                    if (t[Cs] = {
                            initial: {
                                height: s,
                                width: n,
                                style: {
                                    display: i.display,
                                    height: i.height,
                                    width: i.width
                                }
                            }
                        }, i.display = i.display || "block", i.boxSizing = i.boxSizing || "border-box", Ts(n)) {
                        const e = Ze(t, "width");
                        void 0 !== e && (t.width = e)
                    }
                    if (Ts(s))
                        if ("" === t.style.height) t.height = t.width / (e || 2);
                        else {
                            const e = Ze(t, "height");
                            void 0 !== e && (t.height = e)
                        }
                }(t, e), i) : null
            }
            releaseContext(t) {
                const e = t.canvas;
                if (!e[Cs]) return !1;
                const i = e[Cs].initial;
                ["height", "width"].forEach((t => {
                    const s = i[t];
                    n(s) ? e.removeAttribute(t) : e.setAttribute(t, s)
                }));
                const s = i.style || {};
                return Object.keys(s).forEach((t => {
                    e.style[t] = s[t]
                })), e.width = e.width, delete e[Cs], !0
            }
            addEventListener(t, e, i) {
                this.removeEventListener(t, e);
                const s = t.$proxies || (t.$proxies = {}),
                    n = {
                        attach: Is,
                        detach: zs,
                        resize: Ws
                    } [e] || js;
                s[e] = n(t, e, i)
            }
            removeEventListener(t, e) {
                const i = t.$proxies || (t.$proxies = {}),
                    s = i[e];
                s && (({
                    attach: Ns,
                    detach: Ns,
                    resize: Ns
                } [e] || Es)(t, e, s), i[e] = void 0)
            }
            getDevicePixelRatio() {
                return window.devicePixelRatio
            }
            getMaximumSize(t, e, i, s) {
                return function (t, e, i, s) {
                    const n = $e(t),
                        o = Ue(n, "margin"),
                        a = He(n.maxWidth, t, "clientWidth") || C,
                        r = He(n.maxHeight, t, "clientHeight") || C,
                        l = function (t, e, i) {
                            let s, n;
                            if (void 0 === e || void 0 === i) {
                                const o = je(t);
                                if (o) {
                                    const t = o.getBoundingClientRect(),
                                        a = $e(o),
                                        r = Ue(a, "border", "width"),
                                        l = Ue(a, "padding");
                                    e = t.width - l.width - r.width, i = t.height - l.height - r.height, s = He(a.maxWidth, o, "clientWidth"), n = He(a.maxHeight, o, "clientHeight")
                                } else e = t.clientWidth, i = t.clientHeight
                            }
                            return {
                                width: e,
                                height: i,
                                maxWidth: s || C,
                                maxHeight: n || C
                            }
                        }(t, e, i);
                    let {
                        width: h,
                        height: c
                    } = l;
                    if ("content-box" === n.boxSizing) {
                        const t = Ue(n, "border", "width"),
                            e = Ue(n, "padding");
                        h -= e.width + t.width, c -= e.height + t.height
                    }
                    return h = Math.max(0, h - o.width), c = Math.max(0, s ? Math.floor(h / s) : c - o.height), h = qe(Math.min(h, a, l.maxWidth)), c = qe(Math.min(c, r, l.maxHeight)), h && !c && (c = qe(h / 2)), {
                        width: h,
                        height: c
                    }
                }(t, e, i, s)
            }
            isAttached(t) {
                const e = je(t);
                return !(!e || !e.isConnected)
            }
        }
        class $s {
            constructor() {
                this._init = []
            }
            notify(t, e, i, s) {
                "beforeInit" === e && (this._init = this._createDescriptors(t, !0), this._notify(this._init, t, "install"));
                const n = s ? this._descriptors(t).filter(s) : this._descriptors(t),
                    o = this._notify(n, t, e, i);
                return "afterDestroy" === e && (this._notify(n, t, "stop"), this._notify(this._init, t, "uninstall")), o
            }
            _notify(t, e, i, s) {
                s = s || {};
                for (const n of t) {
                    const t = n.plugin;
                    if (!1 === d(t[i], [e, s, n.options], t) && s.cancelable) return !1
                }
                return !0
            }
            invalidate() {
                n(this._cache) || (this._oldCache = this._cache, this._cache = void 0)
            }
            _descriptors(t) {
                if (this._cache) return this._cache;
                const e = this._cache = this._createDescriptors(t);
                return this._notifyStateChanges(t), e
            }
            _createDescriptors(t, e) {
                const i = t && t.config,
                    s = h(i.options && i.options.plugins, {}),
                    n = function (t) {
                        const e = {},
                            i = [],
                            s = Object.keys(ss.plugins.items);
                        for (let t = 0; t < s.length; t++) i.push(ss.getPlugin(s[t]));
                        const n = t.plugins || [];
                        for (let t = 0; t < n.length; t++) {
                            const s = n[t]; - 1 === i.indexOf(s) && (i.push(s), e[s.id] = !0)
                        }
                        return {
                            plugins: i,
                            localIds: e
                        }
                    }(i);
                return !1 !== s || e ? function (t, {
                    plugins: e,
                    localIds: i
                }, s, n) {
                    const o = [],
                        a = t.getContext();
                    for (const r of e) {
                        const e = r.id,
                            l = Ys(s[e], n);
                        null !== l && o.push({
                            plugin: r,
                            options: Us(t.config, {
                                plugin: r,
                                local: i[e]
                            }, l, a)
                        })
                    }
                    return o
                }(t, n, s, e) : []
            }
            _notifyStateChanges(t) {
                const e = this._oldCache || [],
                    i = this._cache,
                    s = (t, e) => t.filter((t => !e.some((e => t.plugin.id === e.plugin.id))));
                this._notify(s(e, i), t, "stop"), this._notify(s(i, e), t, "start")
            }
        }

        function Ys(t, e) {
            return e || !1 !== t ? !0 === t ? {} : t : null
        }

        function Us(t, {
            plugin: e,
            local: i
        }, s, n) {
            const o = t.pluginScopeKeys(e),
                a = t.getOptionScopes(s, o);
            return i && e.defaults && a.push(e.defaults), t.createResolver(a, n, [""], {
                scriptable: !1,
                indexable: !1,
                allKeys: !0
            })
        }

        function Xs(t, e) {
            const i = Gt.datasets[t] || {};
            return ((e.datasets || {})[t] || {}).indexAxis || e.indexAxis || i.indexAxis || "x"
        }

        function qs(t, e) {
            return "x" === t || "y" === t ? t : e.axis || ("top" === (i = e.position) || "bottom" === i ? "x" : "left" === i || "right" === i ? "y" : void 0) || t.charAt(0).toLowerCase();
            var i
        }

        function Ks(t) {
            const e = t.options || (t.options = {});
            e.plugins = h(e.plugins, {}), e.scales = function (t, e) {
                const i = Ut[t.type] || {
                        scales: {}
                    },
                    s = e.scales || {},
                    n = Xs(t.type, e),
                    o = Object.create(null),
                    r = Object.create(null);
                return Object.keys(s).forEach((t => {
                    const e = s[t];
                    if (!a(e)) return console.error(`Invalid scale configuration for scale: ${t}`);
                    if (e._proxy) return console.warn(`Ignoring resolver passed as options for scale: ${t}`);
                    const l = qs(t, e),
                        h = function (t, e) {
                            return t === e ? "_index_" : "_value_"
                        }(l, n),
                        c = i.scales || {};
                    o[l] = o[l] || t, r[t] = x(Object.create(null), [{
                        axis: l
                    }, e, c[l], c[h]])
                })), t.data.datasets.forEach((i => {
                    const n = i.type || t.type,
                        a = i.indexAxis || Xs(n, e),
                        l = (Ut[n] || {}).scales || {};
                    Object.keys(l).forEach((t => {
                        const e = function (t, e) {
                                let i = t;
                                return "_index_" === t ? i = e : "_value_" === t && (i = "x" === e ? "y" : "x"), i
                            }(t, a),
                            n = i[e + "AxisID"] || o[e] || e;
                        r[n] = r[n] || Object.create(null), x(r[n], [{
                            axis: e
                        }, s[n], l[t]])
                    }))
                })), Object.keys(r).forEach((t => {
                    const e = r[t];
                    x(e, [Gt.scales[e.type], Gt.scale])
                })), r
            }(t, e)
        }

        function Gs(t) {
            return (t = t || {}).datasets = t.datasets || [], t.labels = t.labels || [], t
        }
        const Zs = new Map,
            Js = new Set;

        function Qs(t, e) {
            let i = Zs.get(t);
            return i || (i = e(), Zs.set(t, i), Js.add(i)), i
        }
        const tn = (t, e, i) => {
            const s = v(e, i);
            void 0 !== s && t.add(s)
        };
        class en {
            constructor(t) {
                this._config = function (t) {
                    return (t = t || {}).data = Gs(t.data), Ks(t), t
                }(t), this._scopeCache = new Map, this._resolverCache = new Map
            }
            get platform() {
                return this._config.platform
            }
            get type() {
                return this._config.type
            }
            set type(t) {
                this._config.type = t
            }
            get data() {
                return this._config.data
            }
            set data(t) {
                this._config.data = Gs(t)
            }
            get options() {
                return this._config.options
            }
            set options(t) {
                this._config.options = t
            }
            get plugins() {
                return this._config.plugins
            }
            update() {
                const t = this._config;
                this.clearCache(), Ks(t)
            }
            clearCache() {
                this._scopeCache.clear(), this._resolverCache.clear()
            }
            datasetScopeKeys(t) {
                return Qs(t, (() => [
                    [`datasets.${t}`, ""]
                ]))
            }
            datasetAnimationScopeKeys(t, e) {
                return Qs(`${t}.transition.${e}`, (() => [
                    [`datasets.${t}.transitions.${e}`, `transitions.${e}`],
                    [`datasets.${t}`, ""]
                ]))
            }
            datasetElementScopeKeys(t, e) {
                return Qs(`${t}-${e}`, (() => [
                    [`datasets.${t}.elements.${e}`, `datasets.${t}`, `elements.${e}`, ""]
                ]))
            }
            pluginScopeKeys(t) {
                const e = t.id;
                return Qs(`${this.type}-plugin-${e}`, (() => [
                    [`plugins.${e}`, ...t.additionalOptionScopes || []]
                ]))
            }
            _cachedScopes(t, e) {
                const i = this._scopeCache;
                let s = i.get(t);
                return s && !e || (s = new Map, i.set(t, s)), s
            }
            getOptionScopes(t, e, i) {
                const {
                    options: s,
                    type: n
                } = this, o = this._cachedScopes(t, i), a = o.get(e);
                if (a) return a;
                const r = new Set;
                e.forEach((e => {
                    t && (r.add(t), e.forEach((e => tn(r, t, e)))), e.forEach((t => tn(r, s, t))), e.forEach((t => tn(r, Ut[n] || {}, t))), e.forEach((t => tn(r, Gt, t))), e.forEach((t => tn(r, Xt, t)))
                }));
                const l = Array.from(r);
                return 0 === l.length && l.push(Object.create(null)), Js.has(e) && o.set(e, l), l
            }
            chartOptionScopes() {
                const {
                    options: t,
                    type: e
                } = this;
                return [t, Ut[e] || {}, Gt.datasets[e] || {}, {
                    type: e
                }, Gt, Xt]
            }
            resolveNamedOptions(t, e, i, s = [""]) {
                const n = {
                        $shared: !0
                    },
                    {
                        resolver: a,
                        subPrefixes: r
                    } = sn(this._resolverCache, t, s);
                let l = a;
                (function (t, e) {
                    const {
                        isScriptable: i,
                        isIndexable: s
                    } = we(t);
                    for (const n of e) {
                        const e = i(n),
                            a = s(n),
                            r = (a || e) && t[n];
                        if (e && (k(r) || nn(r)) || a && o(r)) return !0
                    }
                    return !1
                })(a, e) && (n.$shared = !1, l = Me(a, i = k(i) ? i() : i, this.createResolver(t, i, r)));
                for (const t of e) n[t] = l[t];
                return n
            }
            createResolver(t, e, i = [""], s) {
                const {
                    resolver: n
                } = sn(this._resolverCache, t, i);
                return a(e) ? Me(n, e, void 0, s) : n
            }
        }

        function sn(t, e, i) {
            let s = t.get(e);
            s || (s = new Map, t.set(e, s));
            const n = i.join();
            let o = s.get(n);
            return o || (o = {
                resolver: ve(e, i),
                subPrefixes: i.filter((t => !t.toLowerCase().includes("hover")))
            }, s.set(n, o)), o
        }
        const nn = t => a(t) && Object.getOwnPropertyNames(t).reduce(((e, i) => e || k(t[i])), !1),
            on = ["top", "bottom", "left", "right", "chartArea"];

        function an(t, e) {
            return "top" === t || "bottom" === t || -1 === on.indexOf(t) && "x" === e
        }

        function rn(t, e) {
            return function (i, s) {
                return i[t] === s[t] ? i[e] - s[e] : i[t] - s[t]
            }
        }

        function ln(t) {
            const e = t.chart,
                i = e.options.animation;
            e.notifyPlugins("afterRender"), d(i && i.onComplete, [t], e)
        }

        function hn(t) {
            const e = t.chart,
                i = e.options.animation;
            d(i && i.onProgress, [t], e)
        }

        function cn(t) {
            return Ne() && "string" == typeof t ? t = document.getElementById(t) : t && t.length && (t = t[0]), t && t.canvas && (t = t.canvas), t
        }
        const dn = {},
            un = t => {
                const e = cn(t);
                return Object.values(dn).filter((t => t.canvas === e)).pop()
            };

        function fn(t, e, i) {
            const s = Object.keys(t);
            for (const n of s) {
                const s = +n;
                if (s >= e) {
                    const o = t[n];
                    delete t[n], (i > 0 || s > e) && (t[s + i] = o)
                }
            }
        }
        class gn {
            constructor(t, e) {
                const i = this.config = new en(e),
                    n = cn(t),
                    o = un(n);
                if (o) throw new Error("Canvas is already in use. Chart with ID '" + o.id + "' must be destroyed before the canvas with ID '" + o.canvas.id + "' can be reused.");
                const a = i.createResolver(i.chartOptionScopes(), this.getContext());
                this.platform = new(i.platform || function (t) {
                    return !Ne() || "undefined" != typeof OffscreenCanvas && t instanceof OffscreenCanvas ? Os : Hs
                }(n)), this.platform.updateConfig(i);
                const r = this.platform.acquireContext(n, a.aspectRatio),
                    l = r && r.canvas,
                    h = l && l.height,
                    c = l && l.width;
                this.id = s(), this.ctx = r, this.canvas = l, this.width = c, this.height = h, this._options = a, this._aspectRatio = this.aspectRatio, this._layers = [], this._metasets = [], this._stacks = void 0, this.boxes = [], this.currentDevicePixelRatio = void 0, this.chartArea = void 0, this._active = [], this._lastEvent = void 0, this._listeners = {}, this._responsiveListeners = void 0, this._sortedMetasets = [], this.scales = {}, this._plugins = new $s, this.$proxies = {}, this._hiddenIndices = {}, this.attached = !1, this._animationsDisabled = void 0, this.$context = void 0, this._doResize = function (t, e) {
                    let i;
                    return function (...s) {
                        return e ? (clearTimeout(i), i = setTimeout(t, e, s)) : t.apply(this, s), e
                    }
                }((t => this.update(t)), a.resizeDelay || 0), this._dataChanges = [], dn[this.id] = this, r && l ? (ui.listen(this, "complete", ln), ui.listen(this, "progress", hn), this._initialize(), this.attached && this.update()) : console.error("Failed to create chart: can't acquire context from the given item")
            }
            get aspectRatio() {
                const {
                    options: {
                        aspectRatio: t,
                        maintainAspectRatio: e
                    },
                    width: i,
                    height: s,
                    _aspectRatio: o
                } = this;
                return n(t) ? e && o ? o : s ? i / s : null : t
            }
            get data() {
                return this.config.data
            }
            set data(t) {
                this.config.data = t
            }
            get options() {
                return this._options
            }
            set options(t) {
                this.config.options = t
            }
            _initialize() {
                return this.notifyPlugins("beforeInit"), this.options.responsive ? this.resize() : Ke(this, this.options.devicePixelRatio), this.bindEvents(), this.notifyPlugins("afterInit"), this
            }
            clear() {
                return te(this.canvas, this.ctx), this
            }
            stop() {
                return ui.stop(this), this
            }
            resize(t, e) {
                ui.running(this) ? this._resizeBeforeDraw = {
                    width: t,
                    height: e
                } : this._resize(t, e)
            }
            _resize(t, e) {
                const i = this.options,
                    s = this.canvas,
                    n = i.maintainAspectRatio && this.aspectRatio,
                    o = this.platform.getMaximumSize(s, t, e, n),
                    a = i.devicePixelRatio || this.platform.getDevicePixelRatio(),
                    r = this.width ? "resize" : "attach";
                this.width = o.width, this.height = o.height, this._aspectRatio = this.aspectRatio, Ke(this, a, !0) && (this.notifyPlugins("resize", {
                    size: o
                }), d(i.onResize, [this, o], this), this.attached && this._doResize(r) && this.render())
            }
            ensureScalesHaveIDs() {
                u(this.options.scales || {}, ((t, e) => {
                    t.id = e
                }))
            }
            buildOrUpdateScales() {
                const t = this.options,
                    e = t.scales,
                    i = this.scales,
                    s = Object.keys(i).reduce(((t, e) => (t[e] = !1, t)), {});
                let n = [];
                e && (n = n.concat(Object.keys(e).map((t => {
                    const i = e[t],
                        s = qs(t, i),
                        n = "r" === s,
                        o = "x" === s;
                    return {
                        options: i,
                        dposition: n ? "chartArea" : o ? "bottom" : "left",
                        dtype: n ? "radialLinear" : o ? "category" : "linear"
                    }
                })))), u(n, (e => {
                    const n = e.options,
                        o = n.id,
                        a = qs(o, n),
                        r = h(n.type, e.dtype);
                    void 0 !== n.position && an(n.position, a) === an(e.dposition) || (n.position = e.dposition), s[o] = !0;
                    let l = null;
                    o in i && i[o].type === r ? l = i[o] : (l = new(ss.getScale(r))({
                        id: o,
                        type: r,
                        ctx: this.ctx,
                        chart: this
                    }), i[l.id] = l), l.init(n, t)
                })), u(s, ((t, e) => {
                    t || delete i[e]
                })), u(i, (t => {
                    Ps.configure(this, t, t.options), Ps.addBox(this, t)
                }))
            }
            _updateMetasets() {
                const t = this._metasets,
                    e = this.data.datasets.length,
                    i = t.length;
                if (t.sort(((t, e) => t.index - e.index)), i > e) {
                    for (let t = e; t < i; ++t) this._destroyDatasetMeta(t);
                    t.splice(e, i - e)
                }
                this._sortedMetasets = t.slice(0).sort(rn("order", "index"))
            }
            _removeUnreferencedMetasets() {
                const {
                    _metasets: t,
                    data: {
                        datasets: e
                    }
                } = this;
                t.length > e.length && delete this._stacks, t.forEach(((t, i) => {
                    0 === e.filter((e => e === t._dataset)).length && this._destroyDatasetMeta(i)
                }))
            }
            buildOrUpdateControllers() {
                const t = [],
                    e = this.data.datasets;
                let i, s;
                for (this._removeUnreferencedMetasets(), i = 0, s = e.length; i < s; i++) {
                    const s = e[i];
                    let n = this.getDatasetMeta(i);
                    const o = s.type || this.config.type;
                    if (n.type && n.type !== o && (this._destroyDatasetMeta(i), n = this.getDatasetMeta(i)), n.type = o, n.indexAxis = s.indexAxis || Xs(o, this.options), n.order = s.order || 0, n.index = i, n.label = "" + s.label, n.visible = this.isDatasetVisible(i), n.controller) n.controller.updateIndex(i), n.controller.linkScales();
                    else {
                        const e = ss.getController(o),
                            {
                                datasetElementType: s,
                                dataElementType: a
                            } = Gt.datasets[o];
                        Object.assign(e.prototype, {
                            dataElementType: ss.getElement(a),
                            datasetElementType: s && ss.getElement(s)
                        }), n.controller = new e(this, i), t.push(n.controller)
                    }
                }
                return this._updateMetasets(), t
            }
            _resetElements() {
                u(this.data.datasets, ((t, e) => {
                    this.getDatasetMeta(e).controller.reset()
                }), this)
            }
            reset() {
                this._resetElements(), this.notifyPlugins("reset")
            }
            update(t) {
                const e = this.config;
                e.update();
                const i = this._options = e.createResolver(e.chartOptionScopes(), this.getContext()),
                    s = this._animationsDisabled = !i.animation;
                if (this._updateScales(), this._checkEventBindings(), this._updateHiddenIndices(), this._plugins.invalidate(), !1 === this.notifyPlugins("beforeUpdate", {
                        mode: t,
                        cancelable: !0
                    })) return;
                const n = this.buildOrUpdateControllers();
                this.notifyPlugins("beforeElementsUpdate");
                let o = 0;
                for (let t = 0, e = this.data.datasets.length; t < e; t++) {
                    const {
                        controller: e
                    } = this.getDatasetMeta(t), i = !s && -1 === n.indexOf(e);
                    e.buildOrUpdateElements(i), o = Math.max(+e.getMaxOverflow(), o)
                }
                o = this._minPadding = i.layout.autoPadding ? o : 0, this._updateLayout(o), s || u(n, (t => {
                    t.reset()
                })), this._updateDatasets(t), this.notifyPlugins("afterUpdate", {
                    mode: t
                }), this._layers.sort(rn("z", "_idx"));
                const {
                    _active: a,
                    _lastEvent: r
                } = this;
                r ? this._eventHandler(r, !0) : a.length && this._updateHoverStyles(a, a, !0), this.render()
            }
            _updateScales() {
                u(this.scales, (t => {
                    Ps.removeBox(this, t)
                })), this.ensureScalesHaveIDs(), this.buildOrUpdateScales()
            }
            _checkEventBindings() {
                const t = this.options,
                    e = new Set(Object.keys(this._listeners)),
                    i = new Set(t.events);
                S(e, i) && !!this._responsiveListeners === t.responsive || (this.unbindEvents(), this.bindEvents())
            }
            _updateHiddenIndices() {
                const {
                    _hiddenIndices: t
                } = this, e = this._getUniformDataChanges() || [];
                for (const {
                        method: i,
                        start: s,
                        count: n
                    } of e) fn(t, s, "_removeElements" === i ? -n : n)
            }
            _getUniformDataChanges() {
                const t = this._dataChanges;
                if (!t || !t.length) return;
                this._dataChanges = [];
                const e = this.data.datasets.length,
                    i = e => new Set(t.filter((t => t[0] === e)).map(((t, e) => e + "," + t.splice(1).join(",")))),
                    s = i(0);
                for (let t = 1; t < e; t++)
                    if (!S(s, i(t))) return;
                return Array.from(s).map((t => t.split(","))).map((t => ({
                    method: t[1],
                    start: +t[2],
                    count: +t[3]
                })))
            }
            _updateLayout(t) {
                if (!1 === this.notifyPlugins("beforeLayout", {
                        cancelable: !0
                    })) return;
                Ps.update(this, this.width, this.height, t);
                const e = this.chartArea,
                    i = e.width <= 0 || e.height <= 0;
                this._layers = [], u(this.boxes, (t => {
                    i && "chartArea" === t.position || (t.configure && t.configure(), this._layers.push(...t._layers()))
                }), this), this._layers.forEach(((t, e) => {
                    t._idx = e
                })), this.notifyPlugins("afterLayout")
            }
            _updateDatasets(t) {
                if (!1 !== this.notifyPlugins("beforeDatasetsUpdate", {
                        mode: t,
                        cancelable: !0
                    })) {
                    for (let t = 0, e = this.data.datasets.length; t < e; ++t) this.getDatasetMeta(t).controller.configure();
                    for (let e = 0, i = this.data.datasets.length; e < i; ++e) this._updateDataset(e, k(t) ? t({
                        datasetIndex: e
                    }) : t);
                    this.notifyPlugins("afterDatasetsUpdate", {
                        mode: t
                    })
                }
            }
            _updateDataset(t, e) {
                const i = this.getDatasetMeta(t),
                    s = {
                        meta: i,
                        index: t,
                        mode: e,
                        cancelable: !0
                    };
                !1 !== this.notifyPlugins("beforeDatasetUpdate", s) && (i.controller._update(e), s.cancelable = !1, this.notifyPlugins("afterDatasetUpdate", s))
            }
            render() {
                !1 !== this.notifyPlugins("beforeRender", {
                    cancelable: !0
                }) && (ui.has(this) ? this.attached && !ui.running(this) && ui.start(this) : (this.draw(), ln({
                    chart: this
                })))
            }
            draw() {
                let t;
                if (this._resizeBeforeDraw) {
                    const {
                        width: t,
                        height: e
                    } = this._resizeBeforeDraw;
                    this._resize(t, e), this._resizeBeforeDraw = null
                }
                if (this.clear(), this.width <= 0 || this.height <= 0) return;
                if (!1 === this.notifyPlugins("beforeDraw", {
                        cancelable: !0
                    })) return;
                const e = this._layers;
                for (t = 0; t < e.length && e[t].z <= 0; ++t) e[t].draw(this.chartArea);
                for (this._drawDatasets(); t < e.length; ++t) e[t].draw(this.chartArea);
                this.notifyPlugins("afterDraw")
            }
            _getSortedDatasetMetas(t) {
                const e = this._sortedMetasets,
                    i = [];
                let s, n;
                for (s = 0, n = e.length; s < n; ++s) {
                    const n = e[s];
                    t && !n.visible || i.push(n)
                }
                return i
            }
            getSortedVisibleDatasetMetas() {
                return this._getSortedDatasetMetas(!0)
            }
            _drawDatasets() {
                if (!1 === this.notifyPlugins("beforeDatasetsDraw", {
                        cancelable: !0
                    })) return;
                const t = this.getSortedVisibleDatasetMetas();
                for (let e = t.length - 1; e >= 0; --e) this._drawDataset(t[e]);
                this.notifyPlugins("afterDatasetsDraw")
            }
            _drawDataset(t) {
                const e = this.ctx,
                    i = t._clip,
                    s = !i.disabled,
                    n = this.chartArea,
                    o = {
                        meta: t,
                        index: t.index,
                        cancelable: !0
                    };
                !1 !== this.notifyPlugins("beforeDatasetDraw", o) && (s && ne(e, {
                    left: !1 === i.left ? 0 : n.left - i.left,
                    right: !1 === i.right ? this.width : n.right + i.right,
                    top: !1 === i.top ? 0 : n.top - i.top,
                    bottom: !1 === i.bottom ? this.height : n.bottom + i.bottom
                }), t.controller.draw(), s && oe(e), o.cancelable = !1, this.notifyPlugins("afterDatasetDraw", o))
            }
            isPointInArea(t) {
                return se(t, this.chartArea, this._minPadding)
            }
            getElementsAtEventForMode(t, e, i, s) {
                const n = gs.modes[e];
                return "function" == typeof n ? n(this, t, i, s) : []
            }
            getDatasetMeta(t) {
                const e = this.data.datasets[t],
                    i = this._metasets;
                let s = i.filter((t => t && t._dataset === e)).pop();
                return s || (s = {
                    type: null,
                    data: [],
                    dataset: null,
                    controller: null,
                    hidden: null,
                    xAxisID: null,
                    yAxisID: null,
                    order: e && e.order || 0,
                    index: t,
                    _dataset: e,
                    _parsed: [],
                    _sorted: !1
                }, i.push(s)), s
            }
            getContext() {
                return this.$context || (this.$context = ye(null, {
                    chart: this,
                    type: "chart"
                }))
            }
            getVisibleDatasetCount() {
                return this.getSortedVisibleDatasetMetas().length
            }
            isDatasetVisible(t) {
                const e = this.data.datasets[t];
                if (!e) return !1;
                const i = this.getDatasetMeta(t);
                return "boolean" == typeof i.hidden ? !i.hidden : !e.hidden
            }
            setDatasetVisibility(t, e) {
                this.getDatasetMeta(t).hidden = !e
            }
            toggleDataVisibility(t) {
                this._hiddenIndices[t] = !this._hiddenIndices[t]
            }
            getDataVisibility(t) {
                return !this._hiddenIndices[t]
            }
            _updateVisibility(t, e, i) {
                const s = i ? "show" : "hide",
                    n = this.getDatasetMeta(t),
                    o = n.controller._resolveAnimations(void 0, s);
                w(e) ? (n.data[e].hidden = !i, this.update()) : (this.setDatasetVisibility(t, i), o.update(n, {
                    visible: i
                }), this.update((e => e.datasetIndex === t ? s : void 0)))
            }
            hide(t, e) {
                this._updateVisibility(t, e, !1)
            }
            show(t, e) {
                this._updateVisibility(t, e, !0)
            }
            _destroyDatasetMeta(t) {
                const e = this._metasets[t];
                e && e.controller && e.controller._destroy(), delete this._metasets[t]
            }
            _stop() {
                let t, e;
                for (this.stop(), ui.remove(this), t = 0, e = this.data.datasets.length; t < e; ++t) this._destroyDatasetMeta(t)
            }
            destroy() {
                this.notifyPlugins("beforeDestroy");
                const {
                    canvas: t,
                    ctx: e
                } = this;
                this._stop(), this.config.clearCache(), t && (this.unbindEvents(), te(t, e), this.platform.releaseContext(e), this.canvas = null, this.ctx = null), this.notifyPlugins("destroy"), delete dn[this.id], this.notifyPlugins("afterDestroy")
            }
            toBase64Image(...t) {
                return this.canvas.toDataURL(...t)
            }
            bindEvents() {
                this.bindUserEvents(), this.options.responsive ? this.bindResponsiveEvents() : this.attached = !0
            }
            bindUserEvents() {
                const t = this._listeners,
                    e = this.platform,
                    i = (i, s) => {
                        e.addEventListener(this, i, s), t[i] = s
                    },
                    s = (t, e, i) => {
                        t.offsetX = e, t.offsetY = i, this._eventHandler(t)
                    };
                u(this.options.events, (t => i(t, s)))
            }
            bindResponsiveEvents() {
                this._responsiveListeners || (this._responsiveListeners = {});
                const t = this._responsiveListeners,
                    e = this.platform,
                    i = (i, s) => {
                        e.addEventListener(this, i, s), t[i] = s
                    },
                    s = (i, s) => {
                        t[i] && (e.removeEventListener(this, i, s), delete t[i])
                    },
                    n = (t, e) => {
                        this.canvas && this.resize(t, e)
                    };
                let o;
                const a = () => {
                    s("attach", a), this.attached = !0, this.resize(), i("resize", n), i("detach", o)
                };
                o = () => {
                    this.attached = !1, s("resize", n), this._stop(), this._resize(0, 0), i("attach", a)
                }, e.isAttached(this.canvas) ? a() : o()
            }
            unbindEvents() {
                u(this._listeners, ((t, e) => {
                    this.platform.removeEventListener(this, e, t)
                })), this._listeners = {}, u(this._responsiveListeners, ((t, e) => {
                    this.platform.removeEventListener(this, e, t)
                })), this._responsiveListeners = void 0
            }
            updateHoverStyle(t, e, i) {
                const s = i ? "set" : "remove";
                let n, o, a, r;
                for ("dataset" === e && (n = this.getDatasetMeta(t[0].datasetIndex), n.controller["_" + s + "DatasetHoverStyle"]()), a = 0, r = t.length; a < r; ++a) {
                    o = t[a];
                    const e = o && this.getDatasetMeta(o.datasetIndex).controller;
                    e && e[s + "HoverStyle"](o.element, o.datasetIndex, o.index)
                }
            }
            getActiveElements() {
                return this._active || []
            }
            setActiveElements(t) {
                const e = this._active || [],
                    i = t.map((({
                        datasetIndex: t,
                        index: e
                    }) => {
                        const i = this.getDatasetMeta(t);
                        if (!i) throw new Error("No dataset found at index " + t);
                        return {
                            datasetIndex: t,
                            element: i.data[e],
                            index: e
                        }
                    }));
                !f(i, e) && (this._active = i, this._lastEvent = null, this._updateHoverStyles(i, e))
            }
            notifyPlugins(t, e, i) {
                return this._plugins.notify(this, t, e, i)
            }
            _updateHoverStyles(t, e, i) {
                const s = this.options.hover,
                    n = (t, e) => t.filter((t => !e.some((e => t.datasetIndex === e.datasetIndex && t.index === e.index)))),
                    o = n(e, t),
                    a = i ? t : n(t, e);
                o.length && this.updateHoverStyle(o, s.mode, !1), a.length && s.mode && this.updateHoverStyle(a, s.mode, !0)
            }
            _eventHandler(t, e) {
                const i = {
                        event: t,
                        replay: e,
                        cancelable: !0,
                        inChartArea: this.isPointInArea(t)
                    },
                    s = e => (e.options.events || this.options.events).includes(t.native.type);
                if (!1 === this.notifyPlugins("beforeEvent", i, s)) return;
                const n = this._handleEvent(t, e, i.inChartArea);
                return i.cancelable = !1, this.notifyPlugins("afterEvent", i, s), (n || i.changed) && this.render(), this
            }
            _handleEvent(t, e, i) {
                const {
                    _active: s = [],
                    options: n
                } = this, o = e, a = this._getActiveElements(t, s, i, o), r = function (t) {
                    return "mouseup" === t.type || "click" === t.type || "contextmenu" === t.type
                }(t), l = function (t, e, i, s) {
                    return i && "mouseout" !== t.type ? s ? e : t : null
                }(t, this._lastEvent, i, r);
                i && (this._lastEvent = null, d(n.onHover, [t, a, this], this), r && d(n.onClick, [t, a, this], this));
                const h = !f(a, s);
                return (h || e) && (this._active = a, this._updateHoverStyles(a, s, e)), this._lastEvent = l, h
            }
            _getActiveElements(t, e, i, s) {
                if ("mouseout" === t.type) return [];
                if (!i) return e;
                const n = this.options.hover;
                return this.getElementsAtEventForMode(t, n.mode, n, s)
            }
        }
        const pn = () => u(gn.instances, (t => t._plugins.invalidate())),
            mn = !0;

        function bn(t, e, i) {
            const {
                startAngle: s,
                pixelMargin: n,
                x: o,
                y: a,
                outerRadius: r,
                innerRadius: l
            } = e;
            let h = n / r;
            t.beginPath(), t.arc(o, a, r, s - h, i + h), l > n ? (h = n / l, t.arc(o, a, l, i + h, s - h, !0)) : t.arc(o, a, n, i + T, s - T), t.closePath(), t.clip()
        }

        function xn(t, e, i, s) {
            return {
                x: i + t * Math.cos(e),
                y: s + t * Math.sin(e)
            }
        }

        function _n(t, e, i, s, n, o) {
            const {
                x: a,
                y: r,
                startAngle: l,
                pixelMargin: h,
                innerRadius: c
            } = e, d = Math.max(e.outerRadius + s + i - h, 0), u = c > 0 ? c + s + i + h : 0;
            let f = 0;
            const g = n - l;
            if (s) {
                const t = ((c > 0 ? c - s : 0) + (d > 0 ? d - s : 0)) / 2;
                f = (g - (0 !== t ? g * t / (t + s) : g)) / 2
            }
            const p = (g - Math.max(.001, g * d - i / P) / d) / 2,
                m = l + p + f,
                b = n - p - f,
                {
                    outerStart: x,
                    outerEnd: _,
                    innerStart: y,
                    innerEnd: v
                } = function (t, e, i, s) {
                    const n = ge(t.options.borderRadius, ["outerStart", "outerEnd", "innerStart", "innerEnd"]),
                        o = (i - e) / 2,
                        a = Math.min(o, s * e / 2),
                        r = t => {
                            const e = (i - Math.min(o, t)) * s / 2;
                            return q(t, 0, Math.min(o, e))
                        };
                    return {
                        outerStart: r(n.outerStart),
                        outerEnd: r(n.outerEnd),
                        innerStart: q(n.innerStart, 0, a),
                        innerEnd: q(n.innerEnd, 0, a)
                    }
                }(e, u, d, b - m),
                M = d - x,
                w = d - _,
                k = m + x / M,
                S = b - _ / w,
                D = u + y,
                O = u + v,
                C = m + y / D,
                A = b - v / O;
            if (t.beginPath(), o) {
                if (t.arc(a, r, d, k, S), _ > 0) {
                    const e = xn(w, S, a, r);
                    t.arc(e.x, e.y, _, S, b + T)
                }
                const e = xn(O, b, a, r);
                if (t.lineTo(e.x, e.y), v > 0) {
                    const e = xn(O, A, a, r);
                    t.arc(e.x, e.y, v, b + T, A + Math.PI)
                }
                if (t.arc(a, r, u, b - v / u, m + y / u, !0), y > 0) {
                    const e = xn(D, C, a, r);
                    t.arc(e.x, e.y, y, C + Math.PI, m - T)
                }
                const i = xn(M, m, a, r);
                if (t.lineTo(i.x, i.y), x > 0) {
                    const e = xn(M, k, a, r);
                    t.arc(e.x, e.y, x, m - T, k)
                }
            } else {
                t.moveTo(a, r);
                const e = Math.cos(k) * d + a,
                    i = Math.sin(k) * d + r;
                t.lineTo(e, i);
                const s = Math.cos(S) * d + a,
                    n = Math.sin(S) * d + r;
                t.lineTo(s, n)
            }
            t.closePath()
        }
        Object.defineProperties(gn, {
            defaults: {
                enumerable: mn,
                value: Gt
            },
            instances: {
                enumerable: mn,
                value: dn
            },
            overrides: {
                enumerable: mn,
                value: Ut
            },
            registry: {
                enumerable: mn,
                value: ss
            },
            version: {
                enumerable: mn,
                value: "3.9.1"
            },
            getChart: {
                enumerable: mn,
                value: un
            },
            register: {
                enumerable: mn,
                value: (...t) => {
                    ss.add(...t), pn()
                }
            },
            unregister: {
                enumerable: mn,
                value: (...t) => {
                    ss.remove(...t), pn()
                }
            }
        });
        class yn extends Yi {
            constructor(t) {
                super(), this.options = void 0, this.circumference = void 0, this.startAngle = void 0, this.endAngle = void 0, this.innerRadius = void 0, this.outerRadius = void 0, this.pixelMargin = 0, this.fullCircles = 0, t && Object.assign(this, t)
            }
            inRange(t, e, i) {
                const s = this.getProps(["x", "y"], i),
                    {
                        angle: n,
                        distance: o
                    } = H(s, {
                        x: t,
                        y: e
                    }),
                    {
                        startAngle: a,
                        endAngle: r,
                        innerRadius: l,
                        outerRadius: c,
                        circumference: d
                    } = this.getProps(["startAngle", "endAngle", "innerRadius", "outerRadius", "circumference"], i),
                    u = this.options.spacing / 2,
                    f = h(d, r - a) >= D || X(n, a, r),
                    g = K(o, l + u, c + u);
                return f && g
            }
            getCenterPoint(t) {
                const {
                    x: e,
                    y: i,
                    startAngle: s,
                    endAngle: n,
                    innerRadius: o,
                    outerRadius: a
                } = this.getProps(["x", "y", "startAngle", "endAngle", "innerRadius", "outerRadius", "circumference"], t), {
                    offset: r,
                    spacing: l
                } = this.options, h = (s + n) / 2, c = (o + a + l + r) / 2;
                return {
                    x: e + Math.cos(h) * c,
                    y: i + Math.sin(h) * c
                }
            }
            tooltipPosition(t) {
                return this.getCenterPoint(t)
            }
            draw(t) {
                const {
                    options: e,
                    circumference: i
                } = this, s = (e.offset || 0) / 2, n = (e.spacing || 0) / 2, o = e.circular;
                if (this.pixelMargin = "inner" === e.borderAlign ? .33 : 0, this.fullCircles = i > D ? Math.floor(i / D) : 0, 0 === i || this.innerRadius < 0 || this.outerRadius < 0) return;
                t.save();
                let a = 0;
                if (s) {
                    a = s / 2;
                    const e = (this.startAngle + this.endAngle) / 2;
                    t.translate(Math.cos(e) * a, Math.sin(e) * a), this.circumference >= P && (a = s)
                }
                t.fillStyle = e.backgroundColor, t.strokeStyle = e.borderColor;
                const r = function (t, e, i, s, n) {
                    const {
                        fullCircles: o,
                        startAngle: a,
                        circumference: r
                    } = e;
                    let l = e.endAngle;
                    if (o) {
                        _n(t, e, i, s, a + D, n);
                        for (let e = 0; e < o; ++e) t.fill();
                        isNaN(r) || (l = a + r % D, r % D == 0 && (l += D))
                    }
                    return _n(t, e, i, s, l, n), t.fill(), l
                }(t, this, a, n, o);
                (function (t, e, i, s, n, o) {
                    const {
                        options: a
                    } = e, {
                        borderWidth: r,
                        borderJoinStyle: l
                    } = a, h = "inner" === a.borderAlign;
                    r && (h ? (t.lineWidth = 2 * r, t.lineJoin = l || "round") : (t.lineWidth = r, t.lineJoin = l || "bevel"), e.fullCircles && function (t, e, i) {
                        const {
                            x: s,
                            y: n,
                            startAngle: o,
                            pixelMargin: a,
                            fullCircles: r
                        } = e, l = Math.max(e.outerRadius - a, 0), h = e.innerRadius + a;
                        let c;
                        for (i && bn(t, e, o + D), t.beginPath(), t.arc(s, n, h, o + D, o, !0), c = 0; c < r; ++c) t.stroke();
                        for (t.beginPath(), t.arc(s, n, l, o, o + D), c = 0; c < r; ++c) t.stroke()
                    }(t, e, h), h && bn(t, e, n), _n(t, e, i, s, n, o), t.stroke())
                })(t, this, a, n, r, o), t.restore()
            }
        }

        function vn(t, e, i = e) {
            t.lineCap = h(i.borderCapStyle, e.borderCapStyle), t.setLineDash(h(i.borderDash, e.borderDash)), t.lineDashOffset = h(i.borderDashOffset, e.borderDashOffset), t.lineJoin = h(i.borderJoinStyle, e.borderJoinStyle), t.lineWidth = h(i.borderWidth, e.borderWidth), t.strokeStyle = h(i.borderColor, e.borderColor)
        }

        function Mn(t, e, i) {
            t.lineTo(i.x, i.y)
        }

        function wn(t, e, i = {}) {
            const s = t.length,
                {
                    start: n = 0,
                    end: o = s - 1
                } = i,
                {
                    start: a,
                    end: r
                } = e,
                l = Math.max(n, a),
                h = Math.min(o, r),
                c = n < a && o < a || n > r && o > r;
            return {
                count: s,
                start: l,
                loop: e.loop,
                ilen: h < l && !c ? s + h - l : h - l
            }
        }

        function kn(t, e, i, s) {
            const {
                points: n,
                options: o
            } = e, {
                count: a,
                start: r,
                loop: l,
                ilen: h
            } = wn(n, i, s), c = function (t) {
                return t.stepped ? ae : t.tension || "monotone" === t.cubicInterpolationMode ? re : Mn
            }(o);
            let d, u, f, {
                move: g = !0,
                reverse: p
            } = s || {};
            for (d = 0; d <= h; ++d) u = n[(r + (p ? h - d : d)) % a], u.skip || (g ? (t.moveTo(u.x, u.y), g = !1) : c(t, f, u, p, o.stepped), f = u);
            return l && (u = n[(r + (p ? h : 0)) % a], c(t, f, u, p, o.stepped)), !!l
        }

        function Sn(t, e, i, s) {
            const n = e.points,
                {
                    count: o,
                    start: a,
                    ilen: r
                } = wn(n, i, s),
                {
                    move: l = !0,
                    reverse: h
                } = s || {};
            let c, d, u, f, g, p, m = 0,
                b = 0;
            const x = t => (a + (h ? r - t : t)) % o,
                _ = () => {
                    f !== g && (t.lineTo(m, g), t.lineTo(m, f), t.lineTo(m, p))
                };
            for (l && (d = n[x(0)], t.moveTo(d.x, d.y)), c = 0; c <= r; ++c) {
                if (d = n[x(c)], d.skip) continue;
                const e = d.x,
                    i = d.y,
                    s = 0 | e;
                s === u ? (i < f ? f = i : i > g && (g = i), m = (b * m + e) / ++b) : (_(), t.lineTo(e, i), u = s, b = 0, f = g = i), p = i
            }
            _()
        }

        function Pn(t) {
            const e = t.options,
                i = e.borderDash && e.borderDash.length;
            return t._decimated || t._loop || e.tension || "monotone" === e.cubicInterpolationMode || e.stepped || i ? kn : Sn
        }
        yn.id = "arc", yn.defaults = {
            borderAlign: "center",
            borderColor: "#fff",
            borderJoinStyle: void 0,
            borderRadius: 0,
            borderWidth: 2,
            offset: 0,
            spacing: 0,
            angle: void 0,
            circular: !0
        }, yn.defaultRoutes = {
            backgroundColor: "backgroundColor"
        };
        const Dn = "function" == typeof Path2D;
        class On extends Yi {
            constructor(t) {
                super(), this.animated = !0, this.options = void 0, this._chart = void 0, this._loop = void 0, this._fullLoop = void 0, this._path = void 0, this._points = void 0, this._segments = void 0, this._decimated = !1, this._pointsUpdated = !1, this._datasetIndex = void 0, t && Object.assign(this, t)
            }
            updateControlPoints(t, e) {
                const i = this.options;
                if ((i.tension || "monotone" === i.cubicInterpolationMode) && !i.stepped && !this._pointsUpdated) {
                    const s = i.spanGaps ? this._loop : this._fullLoop;
                    We(this._points, i, t, s, e), this._pointsUpdated = !0
                }
            }
            set points(t) {
                this._points = t, delete this._segments, delete this._path, this._pointsUpdated = !1
            }
            get points() {
                return this._points
            }
            get segments() {
                return this._segments || (this._segments = function (t, e) {
                    const i = t.points,
                        s = t.options.spanGaps,
                        n = i.length;
                    if (!n) return [];
                    const o = !!t._loop,
                        {
                            start: a,
                            end: r
                        } = function (t, e, i, s) {
                            let n = 0,
                                o = e - 1;
                            if (i && !s)
                                for (; n < e && !t[n].skip;) n++;
                            for (; n < e && t[n].skip;) n++;
                            for (n %= e, i && (o += n); o > n && t[o % e].skip;) o--;
                            return o %= e, {
                                start: n,
                                end: o
                            }
                        }(i, n, o, s);
                    return function (t, e, i, s) {
                        return s && s.setContext && i ? function (t, e, i, s) {
                            const n = t._chart.getContext(),
                                o = ci(t.options),
                                {
                                    _datasetIndex: a,
                                    options: {
                                        spanGaps: r
                                    }
                                } = t,
                                l = i.length,
                                h = [];
                            let c = o,
                                d = e[0].start,
                                u = d;

                            function f(t, e, s, n) {
                                const o = r ? -1 : 1;
                                if (t !== e) {
                                    for (t += l; i[t % l].skip;) t -= o;
                                    for (; i[e % l].skip;) e += o;
                                    t % l != e % l && (h.push({
                                        start: t % l,
                                        end: e % l,
                                        loop: s,
                                        style: n
                                    }), c = n, d = e % l)
                                }
                            }
                            for (const t of e) {
                                d = r ? d : t.start;
                                let e, o = i[d % l];
                                for (u = d + 1; u <= t.end; u++) {
                                    const r = i[u % l];
                                    e = ci(s.setContext(ye(n, {
                                        type: "segment",
                                        p0: o,
                                        p1: r,
                                        p0DataIndex: (u - 1) % l,
                                        p1DataIndex: u % l,
                                        datasetIndex: a
                                    }))), di(e, c) && f(d, u - 1, t.loop, c), o = r, c = e
                                }
                                d < u - 1 && f(d, u - 1, t.loop, c)
                            }
                            return h
                        }(t, e, i, s) : e
                    }(t, !0 === s ? [{
                        start: a,
                        end: r,
                        loop: o
                    }] : function (t, e, i, s) {
                        const n = t.length,
                            o = [];
                        let a, r = e,
                            l = t[e];
                        for (a = e + 1; a <= i; ++a) {
                            const i = t[a % n];
                            i.skip || i.stop ? l.skip || (s = !1, o.push({
                                start: e % n,
                                end: (a - 1) % n,
                                loop: s
                            }), e = r = i.stop ? a : null) : (r = a, l.skip && (e = a)), l = i
                        }
                        return null !== r && o.push({
                            start: e % n,
                            end: r % n,
                            loop: s
                        }), o
                    }(i, a, r < a ? r + n : r, !!t._fullLoop && 0 === a && r === n - 1), i, e)
                }(this, this.options.segment))
            }
            first() {
                const t = this.segments,
                    e = this.points;
                return t.length && e[t[0].start]
            }
            last() {
                const t = this.segments,
                    e = this.points,
                    i = t.length;
                return i && e[t[i - 1].end]
            }
            interpolate(t, e) {
                const i = this.options,
                    s = t[e],
                    n = this.points,
                    o = hi(this, {
                        property: e,
                        start: s,
                        end: s
                    });
                if (!o.length) return;
                const a = [],
                    r = function (t) {
                        return t.stepped ? Qe : t.tension || "monotone" === t.cubicInterpolationMode ? ti : Je
                    }(i);
                let l, h;
                for (l = 0, h = o.length; l < h; ++l) {
                    const {
                        start: h,
                        end: c
                    } = o[l], d = n[h], u = n[c];
                    if (d === u) {
                        a.push(d);
                        continue
                    }
                    const f = r(d, u, Math.abs((s - d[e]) / (u[e] - d[e])), i.stepped);
                    f[e] = t[e], a.push(f)
                }
                return 1 === a.length ? a[0] : a
            }
            pathSegment(t, e, i) {
                return Pn(this)(t, this, e, i)
            }
            path(t, e, i) {
                const s = this.segments,
                    n = Pn(this);
                let o = this._loop;
                e = e || 0, i = i || this.points.length - e;
                for (const a of s) o &= n(t, this, a, {
                    start: e,
                    end: e + i - 1
                });
                return !!o
            }
            draw(t, e, i, s) {
                const n = this.options || {};
                (this.points || []).length && n.borderWidth && (t.save(), function (t, e, i, s) {
                    Dn && !e.options.segment ? function (t, e, i, s) {
                        let n = e._path;
                        n || (n = e._path = new Path2D, e.path(n, i, s) && n.closePath()), vn(t, e.options), t.stroke(n)
                    }(t, e, i, s) : function (t, e, i, s) {
                        const {
                            segments: n,
                            options: o
                        } = e, a = Pn(e);
                        for (const r of n) vn(t, o, r.style), t.beginPath(), a(t, e, r, {
                            start: i,
                            end: i + s - 1
                        }) && t.closePath(), t.stroke()
                    }(t, e, i, s)
                }(t, this, i, s), t.restore()), this.animated && (this._pointsUpdated = !1, this._path = void 0)
            }
        }

        function Cn(t, e, i, s) {
            const n = t.options,
                {
                    [i]: o
                } = t.getProps([i], s);
            return Math.abs(e - o) < n.radius + n.hitRadius
        }
        On.id = "line", On.defaults = {
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0,
            borderJoinStyle: "miter",
            borderWidth: 3,
            capBezierPoints: !0,
            cubicInterpolationMode: "default",
            fill: !1,
            spanGaps: !1,
            stepped: !1,
            tension: 0
        }, On.defaultRoutes = {
            backgroundColor: "backgroundColor",
            borderColor: "borderColor"
        }, On.descriptors = {
            _scriptable: !0,
            _indexable: t => "borderDash" !== t && "fill" !== t
        };
        class An extends Yi {
            constructor(t) {
                super(), this.options = void 0, this.parsed = void 0, this.skip = void 0, this.stop = void 0, t && Object.assign(this, t)
            }
            inRange(t, e, i) {
                const s = this.options,
                    {
                        x: n,
                        y: o
                    } = this.getProps(["x", "y"], i);
                return Math.pow(t - n, 2) + Math.pow(e - o, 2) < Math.pow(s.hitRadius + s.radius, 2)
            }
            inXRange(t, e) {
                return Cn(this, t, "x", e)
            }
            inYRange(t, e) {
                return Cn(this, t, "y", e)
            }
            getCenterPoint(t) {
                const {
                    x: e,
                    y: i
                } = this.getProps(["x", "y"], t);
                return {
                    x: e,
                    y: i
                }
            }
            size(t) {
                let e = (t = t || this.options || {}).radius || 0;
                return e = Math.max(e, e && t.hoverRadius || 0), 2 * (e + (e && t.borderWidth || 0))
            }
            draw(t, e) {
                const i = this.options;
                this.skip || i.radius < .1 || !se(this, e, this.size(i) / 2) || (t.strokeStyle = i.borderColor, t.lineWidth = i.borderWidth, t.fillStyle = i.backgroundColor, ee(t, i, this.x, this.y))
            }
            getRange() {
                const t = this.options || {};
                return t.radius + t.hitRadius
            }
        }

        function Tn(t, e) {
            const {
                x: i,
                y: s,
                base: n,
                width: o,
                height: a
            } = t.getProps(["x", "y", "base", "width", "height"], e);
            let r, l, h, c, d;
            return t.horizontal ? (d = a / 2, r = Math.min(i, n), l = Math.max(i, n), h = s - d, c = s + d) : (d = o / 2, r = i - d, l = i + d, h = Math.min(s, n), c = Math.max(s, n)), {
                left: r,
                top: h,
                right: l,
                bottom: c
            }
        }

        function Ln(t, e, i, s) {
            return t ? 0 : q(e, i, s)
        }

        function En(t, e, i, s) {
            const n = null === e,
                o = null === i,
                a = t && !(n && o) && Tn(t, s);
            return a && (n || K(e, a.left, a.right)) && (o || K(i, a.top, a.bottom))
        }

        function Rn(t, e) {
            t.rect(e.x, e.y, e.w, e.h)
        }

        function In(t, e, i = {}) {
            const s = t.x !== i.x ? -e : 0,
                n = t.y !== i.y ? -e : 0,
                o = (t.x + t.w !== i.x + i.w ? e : 0) - s,
                a = (t.y + t.h !== i.y + i.h ? e : 0) - n;
            return {
                x: t.x + s,
                y: t.y + n,
                w: t.w + o,
                h: t.h + a,
                radius: t.radius
            }
        }
        An.id = "point", An.defaults = {
            borderWidth: 1,
            hitRadius: 1,
            hoverBorderWidth: 1,
            hoverRadius: 4,
            pointStyle: "circle",
            radius: 3,
            rotation: 0
        }, An.defaultRoutes = {
            backgroundColor: "backgroundColor",
            borderColor: "borderColor"
        };
        class zn extends Yi {
            constructor(t) {
                super(), this.options = void 0, this.horizontal = void 0, this.base = void 0, this.width = void 0, this.height = void 0, this.inflateAmount = void 0, t && Object.assign(this, t)
            }
            draw(t) {
                const {
                    inflateAmount: e,
                    options: {
                        borderColor: i,
                        backgroundColor: s
                    }
                } = this, {
                    inner: n,
                    outer: o
                } = function (t) {
                    const e = Tn(t),
                        i = e.right - e.left,
                        s = e.bottom - e.top,
                        n = function (t, e, i) {
                            const s = t.options.borderWidth,
                                n = t.borderSkipped,
                                o = pe(s);
                            return {
                                t: Ln(n.top, o.top, 0, i),
                                r: Ln(n.right, o.right, 0, e),
                                b: Ln(n.bottom, o.bottom, 0, i),
                                l: Ln(n.left, o.left, 0, e)
                            }
                        }(t, i / 2, s / 2),
                        o = function (t, e, i) {
                            const {
                                enableBorderRadius: s
                            } = t.getProps(["enableBorderRadius"]), n = t.options.borderRadius, o = me(n), r = Math.min(e, i), l = t.borderSkipped, h = s || a(n);
                            return {
                                topLeft: Ln(!h || l.top || l.left, o.topLeft, 0, r),
                                topRight: Ln(!h || l.top || l.right, o.topRight, 0, r),
                                bottomLeft: Ln(!h || l.bottom || l.left, o.bottomLeft, 0, r),
                                bottomRight: Ln(!h || l.bottom || l.right, o.bottomRight, 0, r)
                            }
                        }(t, i / 2, s / 2);
                    return {
                        outer: {
                            x: e.left,
                            y: e.top,
                            w: i,
                            h: s,
                            radius: o
                        },
                        inner: {
                            x: e.left + n.l,
                            y: e.top + n.t,
                            w: i - n.l - n.r,
                            h: s - n.t - n.b,
                            radius: {
                                topLeft: Math.max(0, o.topLeft - Math.max(n.t, n.l)),
                                topRight: Math.max(0, o.topRight - Math.max(n.t, n.r)),
                                bottomLeft: Math.max(0, o.bottomLeft - Math.max(n.b, n.l)),
                                bottomRight: Math.max(0, o.bottomRight - Math.max(n.b, n.r))
                            }
                        }
                    }
                }(this), r = (l = o.radius).topLeft || l.topRight || l.bottomLeft || l.bottomRight ? ce : Rn;
                var l;
                t.save(), o.w === n.w && o.h === n.h || (t.beginPath(), r(t, In(o, e, n)), t.clip(), r(t, In(n, -e, o)), t.fillStyle = i, t.fill("evenodd")), t.beginPath(), r(t, In(n, e)), t.fillStyle = s, t.fill(), t.restore()
            }
            inRange(t, e, i) {
                return En(this, t, e, i)
            }
            inXRange(t, e) {
                return En(this, t, null, e)
            }
            inYRange(t, e) {
                return En(this, null, t, e)
            }
            getCenterPoint(t) {
                const {
                    x: e,
                    y: i,
                    base: s,
                    horizontal: n
                } = this.getProps(["x", "y", "base", "horizontal"], t);
                return {
                    x: n ? (e + s) / 2 : e,
                    y: n ? i : (i + s) / 2
                }
            }
            getRange(t) {
                return "x" === t ? this.width / 2 : this.height / 2
            }
        }
        zn.id = "bar", zn.defaults = {
            borderSkipped: "start",
            borderWidth: 0,
            borderRadius: 0,
            inflateAmount: "auto",
            pointStyle: void 0
        }, zn.defaultRoutes = {
            backgroundColor: "backgroundColor",
            borderColor: "borderColor"
        };
        var Fn = Object.freeze({
            __proto__: null,
            ArcElement: yn,
            LineElement: On,
            PointElement: An,
            BarElement: zn
        });

        function Vn(t) {
            if (t._decimated) {
                const e = t._data;
                delete t._decimated, delete t._data, Object.defineProperty(t, "data", {
                    value: e
                })
            }
        }

        function Bn(t) {
            t.data.datasets.forEach((t => {
                Vn(t)
            }))
        }
        var Wn = {
            id: "decimation",
            defaults: {
                algorithm: "min-max",
                enabled: !1
            },
            beforeElementsUpdate: (t, e, i) => {
                if (!i.enabled) return void Bn(t);
                const s = t.width;
                t.data.datasets.forEach(((e, o) => {
                    const {
                        _data: a,
                        indexAxis: r
                    } = e, l = t.getDatasetMeta(o), h = a || e.data;
                    if ("y" === _e([r, t.options.indexAxis])) return;
                    if (!l.controller.supportsDecimation) return;
                    const c = t.scales[l.xAxisID];
                    if ("linear" !== c.type && "time" !== c.type) return;
                    if (t.options.parsing) return;
                    let d, {
                        start: u,
                        count: f
                    } = function (t, e) {
                        const i = e.length;
                        let s, n = 0;
                        const {
                            iScale: o
                        } = t, {
                            min: a,
                            max: r,
                            minDefined: l,
                            maxDefined: h
                        } = o.getUserBounds();
                        return l && (n = q(Z(e, o.axis, a).lo, 0, i - 1)), s = h ? q(Z(e, o.axis, r).hi + 1, n, i) - n : i - n, {
                            start: n,
                            count: s
                        }
                    }(l, h);
                    if (f <= (i.threshold || 4 * s)) Vn(e);
                    else {
                        switch (n(a) && (e._data = h, delete e.data, Object.defineProperty(e, "data", {
                            configurable: !0,
                            enumerable: !0,
                            get: function () {
                                return this._decimated
                            },
                            set: function (t) {
                                this._data = t
                            }
                        })), i.algorithm) {
                            case "lttb":
                                d = function (t, e, i, s, n) {
                                    const o = n.samples || s;
                                    if (o >= i) return t.slice(e, e + i);
                                    const a = [],
                                        r = (i - 2) / (o - 2);
                                    let l = 0;
                                    const h = e + i - 1;
                                    let c, d, u, f, g, p = e;
                                    for (a[l++] = t[p], c = 0; c < o - 2; c++) {
                                        let s, n = 0,
                                            o = 0;
                                        const h = Math.floor((c + 1) * r) + 1 + e,
                                            m = Math.min(Math.floor((c + 2) * r) + 1, i) + e,
                                            b = m - h;
                                        for (s = h; s < m; s++) n += t[s].x, o += t[s].y;
                                        n /= b, o /= b;
                                        const x = Math.floor(c * r) + 1 + e,
                                            _ = Math.min(Math.floor((c + 1) * r) + 1, i) + e,
                                            {
                                                x: y,
                                                y: v
                                            } = t[p];
                                        for (u = f = -1, s = x; s < _; s++) f = .5 * Math.abs((y - n) * (t[s].y - v) - (y - t[s].x) * (o - v)), f > u && (u = f, d = t[s], g = s);
                                        a[l++] = d, p = g
                                    }
                                    return a[l++] = t[h], a
                                }(h, u, f, s, i);
                                break;
                            case "min-max":
                                d = function (t, e, i, s) {
                                    let o, a, r, l, h, c, d, u, f, g, p = 0,
                                        m = 0;
                                    const b = [],
                                        x = e + i - 1,
                                        _ = t[e].x,
                                        y = t[x].x - _;
                                    for (o = e; o < e + i; ++o) {
                                        a = t[o], r = (a.x - _) / y * s, l = a.y;
                                        const e = 0 | r;
                                        if (e === h) l < f ? (f = l, c = o) : l > g && (g = l, d = o), p = (m * p + a.x) / ++m;
                                        else {
                                            const i = o - 1;
                                            if (!n(c) && !n(d)) {
                                                const e = Math.min(c, d),
                                                    s = Math.max(c, d);
                                                e !== u && e !== i && b.push({
                                                    ...t[e],
                                                    x: p
                                                }), s !== u && s !== i && b.push({
                                                    ...t[s],
                                                    x: p
                                                })
                                            }
                                            o > 0 && i !== u && b.push(t[i]), b.push(a), h = e, m = 0, f = g = l, c = d = u = o
                                        }
                                    }
                                    return b
                                }(h, u, f, s);
                                break;
                            default:
                                throw new Error(`Unsupported decimation algorithm '${i.algorithm}'`)
                        }
                        e._decimated = d
                    }
                }))
            },
            destroy(t) {
                Bn(t)
            }
        };

        function Nn(t, e, i, s) {
            if (s) return;
            let n = e[t],
                o = i[t];
            return "angle" === t && (n = U(n), o = U(o)), {
                property: t,
                start: n,
                end: o
            }
        }

        function jn(t, e, i) {
            for (; e > t; e--) {
                const t = i[e];
                if (!isNaN(t.x) && !isNaN(t.y)) break
            }
            return e
        }

        function Hn(t, e, i, s) {
            return t && e ? s(t[i], e[i]) : t ? t[i] : e ? e[i] : 0
        }

        function $n(t, e) {
            let i = [],
                s = !1;
            return o(t) ? (s = !0, i = t) : i = function (t, e) {
                const {
                    x: i = null,
                    y: s = null
                } = t || {}, n = e.points, o = [];
                return e.segments.forEach((({
                    start: t,
                    end: e
                }) => {
                    e = jn(t, e, n);
                    const a = n[t],
                        r = n[e];
                    null !== s ? (o.push({
                        x: a.x,
                        y: s
                    }), o.push({
                        x: r.x,
                        y: s
                    })) : null !== i && (o.push({
                        x: i,
                        y: a.y
                    }), o.push({
                        x: i,
                        y: r.y
                    }))
                })), o
            }(t, e), i.length ? new On({
                points: i,
                options: {
                    tension: 0
                },
                _loop: s,
                _fullLoop: s
            }) : null
        }

        function Yn(t) {
            return t && !1 !== t.fill
        }

        function Un(t, e, i) {
            let s = t[e].fill;
            const n = [e];
            let o;
            if (!i) return s;
            for (; !1 !== s && -1 === n.indexOf(s);) {
                if (!r(s)) return s;
                if (o = t[s], !o) return !1;
                if (o.visible) return s;
                n.push(s), s = o.fill
            }
            return !1
        }

        function Xn(t, e, i) {
            const s = function (t) {
                const e = t.options,
                    i = e.fill;
                let s = h(i && i.target, i);
                return void 0 === s && (s = !!e.backgroundColor), !1 !== s && null !== s && (!0 === s ? "origin" : s)
            }(t);
            if (a(s)) return !isNaN(s.value) && s;
            let n = parseFloat(s);
            return r(n) && Math.floor(n) === n ? function (t, e, i, s) {
                return "-" !== t && "+" !== t || (i = e + i), !(i === e || i < 0 || i >= s) && i
            }(s[0], e, n, i) : ["origin", "start", "end", "stack", "shape"].indexOf(s) >= 0 && s
        }

        function qn(t, e, i) {
            const s = [];
            for (let n = 0; n < i.length; n++) {
                const o = i[n],
                    {
                        first: a,
                        last: r,
                        point: l
                    } = Kn(o, e, "x");
                if (!(!l || a && r))
                    if (a) s.unshift(l);
                    else if (t.push(l), !r) break
            }
            t.push(...s)
        }

        function Kn(t, e, i) {
            const s = t.interpolate(e, i);
            if (!s) return {};
            const n = s[i],
                o = t.segments,
                a = t.points;
            let r = !1,
                l = !1;
            for (let t = 0; t < o.length; t++) {
                const e = o[t],
                    s = a[e.start][i],
                    h = a[e.end][i];
                if (K(n, s, h)) {
                    r = n === s, l = n === h;
                    break
                }
            }
            return {
                first: r,
                last: l,
                point: s
            }
        }
        class Gn {
            constructor(t) {
                this.x = t.x, this.y = t.y, this.radius = t.radius
            }
            pathSegment(t, e, i) {
                const {
                    x: s,
                    y: n,
                    radius: o
                } = this;
                return e = e || {
                    start: 0,
                    end: D
                }, t.arc(s, n, o, e.end, e.start, !0), !i.bounds
            }
            interpolate(t) {
                const {
                    x: e,
                    y: i,
                    radius: s
                } = this, n = t.angle;
                return {
                    x: e + Math.cos(n) * s,
                    y: i + Math.sin(n) * s,
                    angle: n
                }
            }
        }

        function Zn(t, e, i) {
            const s = function (t) {
                    const {
                        chart: e,
                        fill: i,
                        line: s
                    } = t;
                    if (r(i)) return function (t, e) {
                        const i = t.getDatasetMeta(e);
                        return i && t.isDatasetVisible(e) ? i.dataset : null
                    }(e, i);
                    if ("stack" === i) return function (t) {
                        const {
                            scale: e,
                            index: i,
                            line: s
                        } = t, n = [], o = s.segments, a = s.points, r = function (t, e) {
                            const i = [],
                                s = t.getMatchingVisibleMetas("line");
                            for (let t = 0; t < s.length; t++) {
                                const n = s[t];
                                if (n.index === e) break;
                                n.hidden || i.unshift(n.dataset)
                            }
                            return i
                        }(e, i);
                        r.push($n({
                            x: null,
                            y: e.bottom
                        }, s));
                        for (let t = 0; t < o.length; t++) {
                            const e = o[t];
                            for (let t = e.start; t <= e.end; t++) qn(n, a[t], r)
                        }
                        return new On({
                            points: n,
                            options: {}
                        })
                    }(t);
                    if ("shape" === i) return !0;
                    const n = function (t) {
                        return (t.scale || {}).getPointPositionForValue ? function (t) {
                            const {
                                scale: e,
                                fill: i
                            } = t, s = e.options, n = e.getLabels().length, o = s.reverse ? e.max : e.min, r = function (t, e, i) {
                                let s;
                                return s = "start" === t ? i : "end" === t ? e.options.reverse ? e.min : e.max : a(t) ? t.value : e.getBaseValue(), s
                            }(i, e, o), l = [];
                            if (s.grid.circular) {
                                const t = e.getPointPositionForValue(0, o);
                                return new Gn({
                                    x: t.x,
                                    y: t.y,
                                    radius: e.getDistanceFromCenterForValue(r)
                                })
                            }
                            for (let t = 0; t < n; ++t) l.push(e.getPointPositionForValue(t, r));
                            return l
                        }(t) : function (t) {
                            const {
                                scale: e = {},
                                fill: i
                            } = t, s = function (t, e) {
                                let i = null;
                                return "start" === t ? i = e.bottom : "end" === t ? i = e.top : a(t) ? i = e.getPixelForValue(t.value) : e.getBasePixel && (i = e.getBasePixel()), i
                            }(i, e);
                            if (r(s)) {
                                const t = e.isHorizontal();
                                return {
                                    x: t ? s : null,
                                    y: t ? null : s
                                }
                            }
                            return null
                        }(t)
                    }(t);
                    return n instanceof Gn ? n : $n(n, s)
                }(e),
                {
                    line: n,
                    scale: o,
                    axis: l
                } = e,
                h = n.options,
                c = h.fill,
                d = h.backgroundColor,
                {
                    above: u = d,
                    below: f = d
                } = c || {};
            s && n.points.length && (ne(t, i), function (t, e) {
                const {
                    line: i,
                    target: s,
                    above: n,
                    below: o,
                    area: a,
                    scale: r
                } = e, l = i._loop ? "angle" : e.axis;
                t.save(), "x" === l && o !== n && (Jn(t, s, a.top), Qn(t, {
                    line: i,
                    target: s,
                    color: n,
                    scale: r,
                    property: l
                }), t.restore(), t.save(), Jn(t, s, a.bottom)), Qn(t, {
                    line: i,
                    target: s,
                    color: o,
                    scale: r,
                    property: l
                }), t.restore()
            }(t, {
                line: n,
                target: s,
                above: u,
                below: f,
                area: i,
                scale: o,
                axis: l
            }), oe(t))
        }

        function Jn(t, e, i) {
            const {
                segments: s,
                points: n
            } = e;
            let o = !0,
                a = !1;
            t.beginPath();
            for (const r of s) {
                const {
                    start: s,
                    end: l
                } = r, h = n[s], c = n[jn(s, l, n)];
                o ? (t.moveTo(h.x, h.y), o = !1) : (t.lineTo(h.x, i), t.lineTo(h.x, h.y)), a = !!e.pathSegment(t, r, {
                    move: a
                }), a ? t.closePath() : t.lineTo(c.x, i)
            }
            t.lineTo(e.first().x, i), t.closePath(), t.clip()
        }

        function Qn(t, e) {
            const {
                line: i,
                target: s,
                property: n,
                color: o,
                scale: a
            } = e, r = function (t, e, i) {
                const s = t.segments,
                    n = t.points,
                    o = e.points,
                    a = [];
                for (const t of s) {
                    let {
                        start: s,
                        end: r
                    } = t;
                    r = jn(s, r, n);
                    const l = Nn(i, n[s], n[r], t.loop);
                    if (!e.segments) {
                        a.push({
                            source: t,
                            target: l,
                            start: n[s],
                            end: n[r]
                        });
                        continue
                    }
                    const h = hi(e, l);
                    for (const e of h) {
                        const s = Nn(i, o[e.start], o[e.end], e.loop),
                            r = li(t, n, s);
                        for (const t of r) a.push({
                            source: t,
                            target: e,
                            start: {
                                [i]: Hn(l, s, "start", Math.max)
                            },
                            end: {
                                [i]: Hn(l, s, "end", Math.min)
                            }
                        })
                    }
                }
                return a
            }(i, s, n);
            for (const {
                    source: e,
                    target: l,
                    start: h,
                    end: c
                } of r) {
                const {
                    style: {
                        backgroundColor: r = o
                    } = {}
                } = e, d = !0 !== s;
                t.save(), t.fillStyle = r, to(t, a, d && Nn(n, h, c)), t.beginPath();
                const u = !!i.pathSegment(t, e);
                let f;
                if (d) {
                    u ? t.closePath() : eo(t, s, c, n);
                    const e = !!s.pathSegment(t, l, {
                        move: u,
                        reverse: !0
                    });
                    f = u && e, f || eo(t, s, h, n)
                }
                t.closePath(), t.fill(f ? "evenodd" : "nonzero"), t.restore()
            }
        }

        function to(t, e, i) {
            const {
                top: s,
                bottom: n
            } = e.chart.chartArea, {
                property: o,
                start: a,
                end: r
            } = i || {};
            "x" === o && (t.beginPath(), t.rect(a, s, r - a, n - s), t.clip())
        }

        function eo(t, e, i, s) {
            const n = e.interpolate(i, s);
            n && t.lineTo(n.x, n.y)
        }
        var io = {
            id: "filler",
            afterDatasetsUpdate(t, e, i) {
                const s = (t.data.datasets || []).length,
                    n = [];
                let o, a, r, l;
                for (a = 0; a < s; ++a) o = t.getDatasetMeta(a), r = o.dataset, l = null, r && r.options && r instanceof On && (l = {
                    visible: t.isDatasetVisible(a),
                    index: a,
                    fill: Xn(r, a, s),
                    chart: t,
                    axis: o.controller.options.indexAxis,
                    scale: o.vScale,
                    line: r
                }), o.$filler = l, n.push(l);
                for (a = 0; a < s; ++a) l = n[a], l && !1 !== l.fill && (l.fill = Un(n, a, i.propagate))
            },
            beforeDraw(t, e, i) {
                const s = "beforeDraw" === i.drawTime,
                    n = t.getSortedVisibleDatasetMetas(),
                    o = t.chartArea;
                for (let e = n.length - 1; e >= 0; --e) {
                    const i = n[e].$filler;
                    i && (i.line.updateControlPoints(o, i.axis), s && i.fill && Zn(t.ctx, i, o))
                }
            },
            beforeDatasetsDraw(t, e, i) {
                if ("beforeDatasetsDraw" !== i.drawTime) return;
                const s = t.getSortedVisibleDatasetMetas();
                for (let e = s.length - 1; e >= 0; --e) {
                    const i = s[e].$filler;
                    Yn(i) && Zn(t.ctx, i, t.chartArea)
                }
            },
            beforeDatasetDraw(t, e, i) {
                const s = e.meta.$filler;
                Yn(s) && "beforeDatasetDraw" === i.drawTime && Zn(t.ctx, s, t.chartArea)
            },
            defaults: {
                propagate: !0,
                drawTime: "beforeDatasetDraw"
            }
        };
        const so = (t, e) => {
            let {
                boxHeight: i = e,
                boxWidth: s = e
            } = t;
            return t.usePointStyle && (i = Math.min(i, e), s = t.pointStyleWidth || Math.min(s, e)), {
                boxWidth: s,
                boxHeight: i,
                itemHeight: Math.max(e, i)
            }
        };
        class no extends Yi {
            constructor(t) {
                super(), this._added = !1, this.legendHitBoxes = [], this._hoveredItem = null, this.doughnutMode = !1, this.chart = t.chart, this.options = t.options, this.ctx = t.ctx, this.legendItems = void 0, this.columnSizes = void 0, this.lineWidths = void 0, this.maxHeight = void 0, this.maxWidth = void 0, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.height = void 0, this.width = void 0, this._margins = void 0, this.position = void 0, this.weight = void 0, this.fullSize = void 0
            }
            update(t, e, i) {
                this.maxWidth = t, this.maxHeight = e, this._margins = i, this.setDimensions(), this.buildLabels(), this.fit()
            }
            setDimensions() {
                this.isHorizontal() ? (this.width = this.maxWidth, this.left = this._margins.left, this.right = this.width) : (this.height = this.maxHeight, this.top = this._margins.top, this.bottom = this.height)
            }
            buildLabels() {
                const t = this.options.labels || {};
                let e = d(t.generateLabels, [this.chart], this) || [];
                t.filter && (e = e.filter((e => t.filter(e, this.chart.data)))), t.sort && (e = e.sort(((e, i) => t.sort(e, i, this.chart.data)))), this.options.reverse && e.reverse(), this.legendItems = e
            }
            fit() {
                const {
                    options: t,
                    ctx: e
                } = this;
                if (!t.display) return void(this.width = this.height = 0);
                const i = t.labels,
                    s = xe(i.font),
                    n = s.size,
                    o = this._computeTitleHeight(),
                    {
                        boxWidth: a,
                        itemHeight: r
                    } = so(i, n);
                let l, h;
                e.font = s.string, this.isHorizontal() ? (l = this.maxWidth, h = this._fitRows(o, n, a, r) + 10) : (h = this.maxHeight, l = this._fitCols(o, n, a, r) + 10), this.width = Math.min(l, t.maxWidth || this.maxWidth), this.height = Math.min(h, t.maxHeight || this.maxHeight)
            }
            _fitRows(t, e, i, s) {
                const {
                    ctx: n,
                    maxWidth: o,
                    options: {
                        labels: {
                            padding: a
                        }
                    }
                } = this, r = this.legendHitBoxes = [], l = this.lineWidths = [0], h = s + a;
                let c = t;
                n.textAlign = "left", n.textBaseline = "middle";
                let d = -1,
                    u = -h;
                return this.legendItems.forEach(((t, f) => {
                    const g = i + e / 2 + n.measureText(t.text).width;
                    (0 === f || l[l.length - 1] + g + 2 * a > o) && (c += h, l[l.length - (f > 0 ? 0 : 1)] = 0, u += h, d++), r[f] = {
                        left: 0,
                        top: u,
                        row: d,
                        width: g,
                        height: s
                    }, l[l.length - 1] += g + a
                })), c
            }
            _fitCols(t, e, i, s) {
                const {
                    ctx: n,
                    maxHeight: o,
                    options: {
                        labels: {
                            padding: a
                        }
                    }
                } = this, r = this.legendHitBoxes = [], l = this.columnSizes = [], h = o - t;
                let c = a,
                    d = 0,
                    u = 0,
                    f = 0,
                    g = 0;
                return this.legendItems.forEach(((t, o) => {
                    const p = i + e / 2 + n.measureText(t.text).width;
                    o > 0 && u + s + 2 * a > h && (c += d + a, l.push({
                        width: d,
                        height: u
                    }), f += d + a, g++, d = u = 0), r[o] = {
                        left: f,
                        top: u,
                        col: g,
                        width: p,
                        height: s
                    }, d = Math.max(d, p), u += s + a
                })), c += d, l.push({
                    width: d,
                    height: u
                }), c
            }
            adjustHitBoxes() {
                if (!this.options.display) return;
                const t = this._computeTitleHeight(),
                    {
                        legendHitBoxes: e,
                        options: {
                            align: i,
                            labels: {
                                padding: s
                            },
                            rtl: n
                        }
                    } = this,
                    o = si(n, this.left, this.width);
                if (this.isHorizontal()) {
                    let n = 0,
                        a = ot(i, this.left + s, this.right - this.lineWidths[n]);
                    for (const r of e) n !== r.row && (n = r.row, a = ot(i, this.left + s, this.right - this.lineWidths[n])), r.top += this.top + t + s, r.left = o.leftForLtr(o.x(a), r.width), a += r.width + s
                } else {
                    let n = 0,
                        a = ot(i, this.top + t + s, this.bottom - this.columnSizes[n].height);
                    for (const r of e) r.col !== n && (n = r.col, a = ot(i, this.top + t + s, this.bottom - this.columnSizes[n].height)), r.top = a, r.left += this.left + s, r.left = o.leftForLtr(o.x(r.left), r.width), a += r.height + s
                }
            }
            isHorizontal() {
                return "top" === this.options.position || "bottom" === this.options.position
            }
            draw() {
                if (this.options.display) {
                    const t = this.ctx;
                    ne(t, this), this._draw(), oe(t)
                }
            }
            _draw() {
                const {
                    options: t,
                    columnSizes: e,
                    lineWidths: i,
                    ctx: s
                } = this, {
                    align: n,
                    labels: o
                } = t, a = Gt.color, r = si(t.rtl, this.left, this.width), l = xe(o.font), {
                    color: c,
                    padding: d
                } = o, u = l.size, f = u / 2;
                let g;
                this.drawTitle(), s.textAlign = r.textAlign("left"), s.textBaseline = "middle", s.lineWidth = .5, s.font = l.string;
                const {
                    boxWidth: p,
                    boxHeight: m,
                    itemHeight: b
                } = so(o, u), x = this.isHorizontal(), _ = this._computeTitleHeight();
                g = x ? {
                    x: ot(n, this.left + d, this.right - i[0]),
                    y: this.top + d + _,
                    line: 0
                } : {
                    x: this.left + d,
                    y: ot(n, this.top + _ + d, this.bottom - e[0].height),
                    line: 0
                }, ni(this.ctx, t.textDirection);
                const y = b + d;
                this.legendItems.forEach(((v, M) => {
                    s.strokeStyle = v.fontColor || c, s.fillStyle = v.fontColor || c;
                    const w = s.measureText(v.text).width,
                        k = r.textAlign(v.textAlign || (v.textAlign = o.textAlign)),
                        S = p + f + w;
                    let P = g.x,
                        D = g.y;
                    r.setWidth(this.width), x ? M > 0 && P + S + d > this.right && (D = g.y += y, g.line++, P = g.x = ot(n, this.left + d, this.right - i[g.line])) : M > 0 && D + y > this.bottom && (P = g.x = P + e[g.line].width + d, g.line++, D = g.y = ot(n, this.top + _ + d, this.bottom - e[g.line].height)),
                        function (t, e, i) {
                            if (isNaN(p) || p <= 0 || isNaN(m) || m < 0) return;
                            s.save();
                            const n = h(i.lineWidth, 1);
                            if (s.fillStyle = h(i.fillStyle, a), s.lineCap = h(i.lineCap, "butt"), s.lineDashOffset = h(i.lineDashOffset, 0), s.lineJoin = h(i.lineJoin, "miter"), s.lineWidth = n, s.strokeStyle = h(i.strokeStyle, a), s.setLineDash(h(i.lineDash, [])), o.usePointStyle) {
                                const a = {
                                        radius: m * Math.SQRT2 / 2,
                                        pointStyle: i.pointStyle,
                                        rotation: i.rotation,
                                        borderWidth: n
                                    },
                                    l = r.xPlus(t, p / 2);
                                ie(s, a, l, e + f, o.pointStyleWidth && p)
                            } else {
                                const o = e + Math.max((u - m) / 2, 0),
                                    a = r.leftForLtr(t, p),
                                    l = me(i.borderRadius);
                                s.beginPath(), Object.values(l).some((t => 0 !== t)) ? ce(s, {
                                    x: a,
                                    y: o,
                                    w: p,
                                    h: m,
                                    radius: l
                                }) : s.rect(a, o, p, m), s.fill(), 0 !== n && s.stroke()
                            }
                            s.restore()
                        }(r.x(P), D, v), P = ((t, e, i, s) => t === (s ? "left" : "right") ? i : "center" === t ? (e + i) / 2 : e)(k, P + p + f, x ? P + S : this.right, t.rtl),
                        function (t, e, i) {
                            le(s, i.text, t, e + b / 2, l, {
                                strikethrough: i.hidden,
                                textAlign: r.textAlign(i.textAlign)
                            })
                        }(r.x(P), D, v), x ? g.x += S + d : g.y += y
                })), oi(this.ctx, t.textDirection)
            }
            drawTitle() {
                const t = this.options,
                    e = t.title,
                    i = xe(e.font),
                    s = be(e.padding);
                if (!e.display) return;
                const n = si(t.rtl, this.left, this.width),
                    o = this.ctx,
                    a = e.position,
                    r = i.size / 2,
                    l = s.top + r;
                let h, c = this.left,
                    d = this.width;
                if (this.isHorizontal()) d = Math.max(...this.lineWidths), h = this.top + l, c = ot(t.align, c, this.right - d);
                else {
                    const e = this.columnSizes.reduce(((t, e) => Math.max(t, e.height)), 0);
                    h = l + ot(t.align, this.top, this.bottom - e - t.labels.padding - this._computeTitleHeight())
                }
                const u = ot(a, c, c + d);
                o.textAlign = n.textAlign(nt(a)), o.textBaseline = "middle", o.strokeStyle = e.color, o.fillStyle = e.color, o.font = i.string, le(o, e.text, u, h, i)
            }
            _computeTitleHeight() {
                const t = this.options.title,
                    e = xe(t.font),
                    i = be(t.padding);
                return t.display ? e.lineHeight + i.height : 0
            }
            _getLegendItemAt(t, e) {
                let i, s, n;
                if (K(t, this.left, this.right) && K(e, this.top, this.bottom))
                    for (n = this.legendHitBoxes, i = 0; i < n.length; ++i)
                        if (s = n[i], K(t, s.left, s.left + s.width) && K(e, s.top, s.top + s.height)) return this.legendItems[i];
                return null
            }
            handleEvent(t) {
                const e = this.options;
                if (! function (t, e) {
                        return !("mousemove" !== t && "mouseout" !== t || !e.onHover && !e.onLeave) || !(!e.onClick || "click" !== t && "mouseup" !== t)
                    }(t.type, e)) return;
                const i = this._getLegendItemAt(t.x, t.y);
                if ("mousemove" === t.type || "mouseout" === t.type) {
                    const o = this._hoveredItem,
                        a = (n = i, null !== (s = o) && null !== n && s.datasetIndex === n.datasetIndex && s.index === n.index);
                    o && !a && d(e.onLeave, [t, o, this], this), this._hoveredItem = i, i && !a && d(e.onHover, [t, i, this], this)
                } else i && d(e.onClick, [t, i, this], this);
                var s, n
            }
        }
        var oo = {
            id: "legend",
            _element: no,
            start(t, e, i) {
                const s = t.legend = new no({
                    ctx: t.ctx,
                    options: i,
                    chart: t
                });
                Ps.configure(t, s, i), Ps.addBox(t, s)
            },
            stop(t) {
                Ps.removeBox(t, t.legend), delete t.legend
            },
            beforeUpdate(t, e, i) {
                const s = t.legend;
                Ps.configure(t, s, i), s.options = i
            },
            afterUpdate(t) {
                const e = t.legend;
                e.buildLabels(), e.adjustHitBoxes()
            },
            afterEvent(t, e) {
                e.replay || t.legend.handleEvent(e.event)
            },
            defaults: {
                display: !0,
                position: "top",
                align: "center",
                fullSize: !0,
                reverse: !1,
                weight: 1e3,
                onClick(t, e, i) {
                    const s = e.datasetIndex,
                        n = i.chart;
                    n.isDatasetVisible(s) ? (n.hide(s), e.hidden = !0) : (n.show(s), e.hidden = !1)
                },
                onHover: null,
                onLeave: null,
                labels: {
                    color: t => t.chart.options.color,
                    boxWidth: 40,
                    padding: 10,
                    generateLabels(t) {
                        const e = t.data.datasets,
                            {
                                labels: {
                                    usePointStyle: i,
                                    pointStyle: s,
                                    textAlign: n,
                                    color: o
                                }
                            } = t.legend.options;
                        return t._getSortedDatasetMetas().map((t => {
                            const a = t.controller.getStyle(i ? 0 : void 0),
                                r = be(a.borderWidth);
                            return {
                                text: e[t.index].label,
                                fillStyle: a.backgroundColor,
                                fontColor: o,
                                hidden: !t.visible,
                                lineCap: a.borderCapStyle,
                                lineDash: a.borderDash,
                                lineDashOffset: a.borderDashOffset,
                                lineJoin: a.borderJoinStyle,
                                lineWidth: (r.width + r.height) / 4,
                                strokeStyle: a.borderColor,
                                pointStyle: s || a.pointStyle,
                                rotation: a.rotation,
                                textAlign: n || a.textAlign,
                                borderRadius: 0,
                                datasetIndex: t.index
                            }
                        }), this)
                    }
                },
                title: {
                    color: t => t.chart.options.color,
                    display: !1,
                    position: "center",
                    text: ""
                }
            },
            descriptors: {
                _scriptable: t => !t.startsWith("on"),
                labels: {
                    _scriptable: t => !["generateLabels", "filter", "sort"].includes(t)
                }
            }
        };
        class ao extends Yi {
            constructor(t) {
                super(), this.chart = t.chart, this.options = t.options, this.ctx = t.ctx, this._padding = void 0, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.width = void 0, this.height = void 0, this.position = void 0, this.weight = void 0, this.fullSize = void 0
            }
            update(t, e) {
                const i = this.options;
                if (this.left = 0, this.top = 0, !i.display) return void(this.width = this.height = this.right = this.bottom = 0);
                this.width = this.right = t, this.height = this.bottom = e;
                const s = o(i.text) ? i.text.length : 1;
                this._padding = be(i.padding);
                const n = s * xe(i.font).lineHeight + this._padding.height;
                this.isHorizontal() ? this.height = n : this.width = n
            }
            isHorizontal() {
                const t = this.options.position;
                return "top" === t || "bottom" === t
            }
            _drawArgs(t) {
                const {
                    top: e,
                    left: i,
                    bottom: s,
                    right: n,
                    options: o
                } = this, a = o.align;
                let r, l, h, c = 0;
                return this.isHorizontal() ? (l = ot(a, i, n), h = e + t, r = n - i) : ("left" === o.position ? (l = i + t, h = ot(a, s, e), c = -.5 * P) : (l = n - t, h = ot(a, e, s), c = .5 * P), r = s - e), {
                    titleX: l,
                    titleY: h,
                    maxWidth: r,
                    rotation: c
                }
            }
            draw() {
                const t = this.ctx,
                    e = this.options;
                if (!e.display) return;
                const i = xe(e.font),
                    s = i.lineHeight / 2 + this._padding.top,
                    {
                        titleX: n,
                        titleY: o,
                        maxWidth: a,
                        rotation: r
                    } = this._drawArgs(s);
                le(t, e.text, 0, 0, i, {
                    color: e.color,
                    maxWidth: a,
                    rotation: r,
                    textAlign: nt(e.align),
                    textBaseline: "middle",
                    translation: [n, o]
                })
            }
        }
        var ro = {
            id: "title",
            _element: ao,
            start(t, e, i) {
                ! function (t, e) {
                    const i = new ao({
                        ctx: t.ctx,
                        options: e,
                        chart: t
                    });
                    Ps.configure(t, i, e), Ps.addBox(t, i), t.titleBlock = i
                }(t, i)
            },
            stop(t) {
                const e = t.titleBlock;
                Ps.removeBox(t, e), delete t.titleBlock
            },
            beforeUpdate(t, e, i) {
                const s = t.titleBlock;
                Ps.configure(t, s, i), s.options = i
            },
            defaults: {
                align: "center",
                display: !1,
                font: {
                    weight: "bold"
                },
                fullSize: !0,
                padding: 10,
                position: "top",
                text: "",
                weight: 2e3
            },
            defaultRoutes: {
                color: "color"
            },
            descriptors: {
                _scriptable: !0,
                _indexable: !1
            }
        };
        const lo = new WeakMap;
        var ho = {
            id: "subtitle",
            start(t, e, i) {
                const s = new ao({
                    ctx: t.ctx,
                    options: i,
                    chart: t
                });
                Ps.configure(t, s, i), Ps.addBox(t, s), lo.set(t, s)
            },
            stop(t) {
                Ps.removeBox(t, lo.get(t)), lo.delete(t)
            },
            beforeUpdate(t, e, i) {
                const s = lo.get(t);
                Ps.configure(t, s, i), s.options = i
            },
            defaults: {
                align: "center",
                display: !1,
                font: {
                    weight: "normal"
                },
                fullSize: !0,
                padding: 0,
                position: "top",
                text: "",
                weight: 1500
            },
            defaultRoutes: {
                color: "color"
            },
            descriptors: {
                _scriptable: !0,
                _indexable: !1
            }
        };
        const co = {
            average(t) {
                if (!t.length) return !1;
                let e, i, s = 0,
                    n = 0,
                    o = 0;
                for (e = 0, i = t.length; e < i; ++e) {
                    const i = t[e].element;
                    if (i && i.hasValue()) {
                        const t = i.tooltipPosition();
                        s += t.x, n += t.y, ++o
                    }
                }
                return {
                    x: s / o,
                    y: n / o
                }
            },
            nearest(t, e) {
                if (!t.length) return !1;
                let i, s, n, o = e.x,
                    a = e.y,
                    r = Number.POSITIVE_INFINITY;
                for (i = 0, s = t.length; i < s; ++i) {
                    const s = t[i].element;
                    if (s && s.hasValue()) {
                        const t = $(e, s.getCenterPoint());
                        t < r && (r = t, n = s)
                    }
                }
                if (n) {
                    const t = n.tooltipPosition();
                    o = t.x, a = t.y
                }
                return {
                    x: o,
                    y: a
                }
            }
        };

        function uo(t, e) {
            return e && (o(e) ? Array.prototype.push.apply(t, e) : t.push(e)), t
        }

        function fo(t) {
            return ("string" == typeof t || t instanceof String) && t.indexOf("\n") > -1 ? t.split("\n") : t
        }

        function go(t, e) {
            const {
                element: i,
                datasetIndex: s,
                index: n
            } = e, o = t.getDatasetMeta(s).controller, {
                label: a,
                value: r
            } = o.getLabelAndValue(n);
            return {
                chart: t,
                label: a,
                parsed: o.getParsed(n),
                raw: t.data.datasets[s].data[n],
                formattedValue: r,
                dataset: o.getDataset(),
                dataIndex: n,
                datasetIndex: s,
                element: i
            }
        }

        function po(t, e) {
            const i = t.chart.ctx,
                {
                    body: s,
                    footer: n,
                    title: o
                } = t,
                {
                    boxWidth: a,
                    boxHeight: r
                } = e,
                l = xe(e.bodyFont),
                h = xe(e.titleFont),
                c = xe(e.footerFont),
                d = o.length,
                f = n.length,
                g = s.length,
                p = be(e.padding);
            let m = p.height,
                b = 0,
                x = s.reduce(((t, e) => t + e.before.length + e.lines.length + e.after.length), 0);
            x += t.beforeBody.length + t.afterBody.length, d && (m += d * h.lineHeight + (d - 1) * e.titleSpacing + e.titleMarginBottom), x && (m += g * (e.displayColors ? Math.max(r, l.lineHeight) : l.lineHeight) + (x - g) * l.lineHeight + (x - 1) * e.bodySpacing), f && (m += e.footerMarginTop + f * c.lineHeight + (f - 1) * e.footerSpacing);
            let _ = 0;
            const y = function (t) {
                b = Math.max(b, i.measureText(t).width + _)
            };
            return i.save(), i.font = h.string, u(t.title, y), i.font = l.string, u(t.beforeBody.concat(t.afterBody), y), _ = e.displayColors ? a + 2 + e.boxPadding : 0, u(s, (t => {
                u(t.before, y), u(t.lines, y), u(t.after, y)
            })), _ = 0, i.font = c.string, u(t.footer, y), i.restore(), b += p.width, {
                width: b,
                height: m
            }
        }

        function mo(t, e, i, s) {
            const {
                x: n,
                width: o
            } = i, {
                width: a,
                chartArea: {
                    left: r,
                    right: l
                }
            } = t;
            let h = "center";
            return "center" === s ? h = n <= (r + l) / 2 ? "left" : "right" : n <= o / 2 ? h = "left" : n >= a - o / 2 && (h = "right"),
                function (t, e, i, s) {
                    const {
                        x: n,
                        width: o
                    } = s, a = i.caretSize + i.caretPadding;
                    return "left" === t && n + o + a > e.width || "right" === t && n - o - a < 0 || void 0
                }(h, t, e, i) && (h = "center"), h
        }

        function bo(t, e, i) {
            const s = i.yAlign || e.yAlign || function (t, e) {
                const {
                    y: i,
                    height: s
                } = e;
                return i < s / 2 ? "top" : i > t.height - s / 2 ? "bottom" : "center"
            }(t, i);
            return {
                xAlign: i.xAlign || e.xAlign || mo(t, e, i, s),
                yAlign: s
            }
        }

        function xo(t, e, i, s) {
            const {
                caretSize: n,
                caretPadding: o,
                cornerRadius: a
            } = t, {
                xAlign: r,
                yAlign: l
            } = i, h = n + o, {
                topLeft: c,
                topRight: d,
                bottomLeft: u,
                bottomRight: f
            } = me(a);
            let g = function (t, e) {
                let {
                    x: i,
                    width: s
                } = t;
                return "right" === e ? i -= s : "center" === e && (i -= s / 2), i
            }(e, r);
            const p = function (t, e, i) {
                let {
                    y: s,
                    height: n
                } = t;
                return "top" === e ? s += i : s -= "bottom" === e ? n + i : n / 2, s
            }(e, l, h);
            return "center" === l ? "left" === r ? g += h : "right" === r && (g -= h) : "left" === r ? g -= Math.max(c, u) + n : "right" === r && (g += Math.max(d, f) + n), {
                x: q(g, 0, s.width - e.width),
                y: q(p, 0, s.height - e.height)
            }
        }

        function _o(t, e, i) {
            const s = be(i.padding);
            return "center" === e ? t.x + t.width / 2 : "right" === e ? t.x + t.width - s.right : t.x + s.left
        }

        function yo(t) {
            return uo([], fo(t))
        }

        function vo(t, e) {
            const i = e && e.dataset && e.dataset.tooltip && e.dataset.tooltip.callbacks;
            return i ? t.override(i) : t
        }
        class Mo extends Yi {
            constructor(t) {
                super(), this.opacity = 0, this._active = [], this._eventPosition = void 0, this._size = void 0, this._cachedAnimations = void 0, this._tooltipItems = [], this.$animations = void 0, this.$context = void 0, this.chart = t.chart || t._chart, this._chart = this.chart, this.options = t.options, this.dataPoints = void 0, this.title = void 0, this.beforeBody = void 0, this.body = void 0, this.afterBody = void 0, this.footer = void 0, this.xAlign = void 0, this.yAlign = void 0, this.x = void 0, this.y = void 0, this.height = void 0, this.width = void 0, this.caretX = void 0, this.caretY = void 0, this.labelColors = void 0, this.labelPointStyles = void 0, this.labelTextColors = void 0
            }
            initialize(t) {
                this.options = t, this._cachedAnimations = void 0, this.$context = void 0
            }
            _resolveAnimations() {
                const t = this._cachedAnimations;
                if (t) return t;
                const e = this.chart,
                    i = this.options.setContext(this.getContext()),
                    s = i.enabled && e.options.animation && i.animations,
                    n = new bi(this.chart, s);
                return s._cacheable && (this._cachedAnimations = Object.freeze(n)), n
            }
            getContext() {
                return this.$context || (this.$context = (this, ye(this.chart.getContext(), {
                    tooltip: this,
                    tooltipItems: this._tooltipItems,
                    type: "tooltip"
                })))
            }
            getTitle(t, e) {
                const {
                    callbacks: i
                } = e, s = i.beforeTitle.apply(this, [t]), n = i.title.apply(this, [t]), o = i.afterTitle.apply(this, [t]);
                let a = [];
                return a = uo(a, fo(s)), a = uo(a, fo(n)), a = uo(a, fo(o)), a
            }
            getBeforeBody(t, e) {
                return yo(e.callbacks.beforeBody.apply(this, [t]))
            }
            getBody(t, e) {
                const {
                    callbacks: i
                } = e, s = [];
                return u(t, (t => {
                    const e = {
                            before: [],
                            lines: [],
                            after: []
                        },
                        n = vo(i, t);
                    uo(e.before, fo(n.beforeLabel.call(this, t))), uo(e.lines, n.label.call(this, t)), uo(e.after, fo(n.afterLabel.call(this, t))), s.push(e)
                })), s
            }
            getAfterBody(t, e) {
                return yo(e.callbacks.afterBody.apply(this, [t]))
            }
            getFooter(t, e) {
                const {
                    callbacks: i
                } = e, s = i.beforeFooter.apply(this, [t]), n = i.footer.apply(this, [t]), o = i.afterFooter.apply(this, [t]);
                let a = [];
                return a = uo(a, fo(s)), a = uo(a, fo(n)), a = uo(a, fo(o)), a
            }
            _createItems(t) {
                const e = this._active,
                    i = this.chart.data,
                    s = [],
                    n = [],
                    o = [];
                let a, r, l = [];
                for (a = 0, r = e.length; a < r; ++a) l.push(go(this.chart, e[a]));
                return t.filter && (l = l.filter(((e, s, n) => t.filter(e, s, n, i)))), t.itemSort && (l = l.sort(((e, s) => t.itemSort(e, s, i)))), u(l, (e => {
                    const i = vo(t.callbacks, e);
                    s.push(i.labelColor.call(this, e)), n.push(i.labelPointStyle.call(this, e)), o.push(i.labelTextColor.call(this, e))
                })), this.labelColors = s, this.labelPointStyles = n, this.labelTextColors = o, this.dataPoints = l, l
            }
            update(t, e) {
                const i = this.options.setContext(this.getContext()),
                    s = this._active;
                let n, o = [];
                if (s.length) {
                    const t = co[i.position].call(this, s, this._eventPosition);
                    o = this._createItems(i), this.title = this.getTitle(o, i), this.beforeBody = this.getBeforeBody(o, i), this.body = this.getBody(o, i), this.afterBody = this.getAfterBody(o, i), this.footer = this.getFooter(o, i);
                    const e = this._size = po(this, i),
                        a = Object.assign({}, t, e),
                        r = bo(this.chart, i, a),
                        l = xo(i, a, r, this.chart);
                    this.xAlign = r.xAlign, this.yAlign = r.yAlign, n = {
                        opacity: 1,
                        x: l.x,
                        y: l.y,
                        width: e.width,
                        height: e.height,
                        caretX: t.x,
                        caretY: t.y
                    }
                } else 0 !== this.opacity && (n = {
                    opacity: 0
                });
                this._tooltipItems = o, this.$context = void 0, n && this._resolveAnimations().update(this, n), t && i.external && i.external.call(this, {
                    chart: this.chart,
                    tooltip: this,
                    replay: e
                })
            }
            drawCaret(t, e, i, s) {
                const n = this.getCaretPosition(t, i, s);
                e.lineTo(n.x1, n.y1), e.lineTo(n.x2, n.y2), e.lineTo(n.x3, n.y3)
            }
            getCaretPosition(t, e, i) {
                const {
                    xAlign: s,
                    yAlign: n
                } = this, {
                    caretSize: o,
                    cornerRadius: a
                } = i, {
                    topLeft: r,
                    topRight: l,
                    bottomLeft: h,
                    bottomRight: c
                } = me(a), {
                    x: d,
                    y: u
                } = t, {
                    width: f,
                    height: g
                } = e;
                let p, m, b, x, _, y;
                return "center" === n ? (_ = u + g / 2, "left" === s ? (p = d, m = p - o, x = _ + o, y = _ - o) : (p = d + f, m = p + o, x = _ - o, y = _ + o), b = p) : (m = "left" === s ? d + Math.max(r, h) + o : "right" === s ? d + f - Math.max(l, c) - o : this.caretX, "top" === n ? (x = u, _ = x - o, p = m - o, b = m + o) : (x = u + g, _ = x + o, p = m + o, b = m - o), y = x), {
                    x1: p,
                    x2: m,
                    x3: b,
                    y1: x,
                    y2: _,
                    y3: y
                }
            }
            drawTitle(t, e, i) {
                const s = this.title,
                    n = s.length;
                let o, a, r;
                if (n) {
                    const l = si(i.rtl, this.x, this.width);
                    for (t.x = _o(this, i.titleAlign, i), e.textAlign = l.textAlign(i.titleAlign), e.textBaseline = "middle", o = xe(i.titleFont), a = i.titleSpacing, e.fillStyle = i.titleColor, e.font = o.string, r = 0; r < n; ++r) e.fillText(s[r], l.x(t.x), t.y + o.lineHeight / 2), t.y += o.lineHeight + a, r + 1 === n && (t.y += i.titleMarginBottom - a)
                }
            }
            _drawColorBox(t, e, i, s, n) {
                const o = this.labelColors[i],
                    r = this.labelPointStyles[i],
                    {
                        boxHeight: l,
                        boxWidth: h,
                        boxPadding: c
                    } = n,
                    d = xe(n.bodyFont),
                    u = _o(this, "left", n),
                    f = s.x(u),
                    g = l < d.lineHeight ? (d.lineHeight - l) / 2 : 0,
                    p = e.y + g;
                if (n.usePointStyle) {
                    const e = {
                            radius: Math.min(h, l) / 2,
                            pointStyle: r.pointStyle,
                            rotation: r.rotation,
                            borderWidth: 1
                        },
                        i = s.leftForLtr(f, h) + h / 2,
                        a = p + l / 2;
                    t.strokeStyle = n.multiKeyBackground, t.fillStyle = n.multiKeyBackground, ee(t, e, i, a), t.strokeStyle = o.borderColor, t.fillStyle = o.backgroundColor, ee(t, e, i, a)
                } else {
                    t.lineWidth = a(o.borderWidth) ? Math.max(...Object.values(o.borderWidth)) : o.borderWidth || 1, t.strokeStyle = o.borderColor, t.setLineDash(o.borderDash || []), t.lineDashOffset = o.borderDashOffset || 0;
                    const e = s.leftForLtr(f, h - c),
                        i = s.leftForLtr(s.xPlus(f, 1), h - c - 2),
                        r = me(o.borderRadius);
                    Object.values(r).some((t => 0 !== t)) ? (t.beginPath(), t.fillStyle = n.multiKeyBackground, ce(t, {
                        x: e,
                        y: p,
                        w: h,
                        h: l,
                        radius: r
                    }), t.fill(), t.stroke(), t.fillStyle = o.backgroundColor, t.beginPath(), ce(t, {
                        x: i,
                        y: p + 1,
                        w: h - 2,
                        h: l - 2,
                        radius: r
                    }), t.fill()) : (t.fillStyle = n.multiKeyBackground, t.fillRect(e, p, h, l), t.strokeRect(e, p, h, l), t.fillStyle = o.backgroundColor, t.fillRect(i, p + 1, h - 2, l - 2))
                }
                t.fillStyle = this.labelTextColors[i]
            }
            drawBody(t, e, i) {
                const {
                    body: s
                } = this, {
                    bodySpacing: n,
                    bodyAlign: o,
                    displayColors: a,
                    boxHeight: r,
                    boxWidth: l,
                    boxPadding: h
                } = i, c = xe(i.bodyFont);
                let d = c.lineHeight,
                    f = 0;
                const g = si(i.rtl, this.x, this.width),
                    p = function (i) {
                        e.fillText(i, g.x(t.x + f), t.y + d / 2), t.y += d + n
                    },
                    m = g.textAlign(o);
                let b, x, _, y, v, M, w;
                for (e.textAlign = o, e.textBaseline = "middle", e.font = c.string, t.x = _o(this, m, i), e.fillStyle = i.bodyColor, u(this.beforeBody, p), f = a && "right" !== m ? "center" === o ? l / 2 + h : l + 2 + h : 0, y = 0, M = s.length; y < M; ++y) {
                    for (b = s[y], x = this.labelTextColors[y], e.fillStyle = x, u(b.before, p), _ = b.lines, a && _.length && (this._drawColorBox(e, t, y, g, i), d = Math.max(c.lineHeight, r)), v = 0, w = _.length; v < w; ++v) p(_[v]), d = c.lineHeight;
                    u(b.after, p)
                }
                f = 0, d = c.lineHeight, u(this.afterBody, p), t.y -= n
            }
            drawFooter(t, e, i) {
                const s = this.footer,
                    n = s.length;
                let o, a;
                if (n) {
                    const r = si(i.rtl, this.x, this.width);
                    for (t.x = _o(this, i.footerAlign, i), t.y += i.footerMarginTop, e.textAlign = r.textAlign(i.footerAlign), e.textBaseline = "middle", o = xe(i.footerFont), e.fillStyle = i.footerColor, e.font = o.string, a = 0; a < n; ++a) e.fillText(s[a], r.x(t.x), t.y + o.lineHeight / 2), t.y += o.lineHeight + i.footerSpacing
                }
            }
            drawBackground(t, e, i, s) {
                const {
                    xAlign: n,
                    yAlign: o
                } = this, {
                    x: a,
                    y: r
                } = t, {
                    width: l,
                    height: h
                } = i, {
                    topLeft: c,
                    topRight: d,
                    bottomLeft: u,
                    bottomRight: f
                } = me(s.cornerRadius);
                e.fillStyle = s.backgroundColor, e.strokeStyle = s.borderColor, e.lineWidth = s.borderWidth, e.beginPath(), e.moveTo(a + c, r), "top" === o && this.drawCaret(t, e, i, s), e.lineTo(a + l - d, r), e.quadraticCurveTo(a + l, r, a + l, r + d), "center" === o && "right" === n && this.drawCaret(t, e, i, s), e.lineTo(a + l, r + h - f), e.quadraticCurveTo(a + l, r + h, a + l - f, r + h), "bottom" === o && this.drawCaret(t, e, i, s), e.lineTo(a + u, r + h), e.quadraticCurveTo(a, r + h, a, r + h - u), "center" === o && "left" === n && this.drawCaret(t, e, i, s), e.lineTo(a, r + c), e.quadraticCurveTo(a, r, a + c, r), e.closePath(), e.fill(), s.borderWidth > 0 && e.stroke()
            }
            _updateAnimationTarget(t) {
                const e = this.chart,
                    i = this.$animations,
                    s = i && i.x,
                    n = i && i.y;
                if (s || n) {
                    const i = co[t.position].call(this, this._active, this._eventPosition);
                    if (!i) return;
                    const o = this._size = po(this, t),
                        a = Object.assign({}, i, this._size),
                        r = bo(e, t, a),
                        l = xo(t, a, r, e);
                    s._to === l.x && n._to === l.y || (this.xAlign = r.xAlign, this.yAlign = r.yAlign, this.width = o.width, this.height = o.height, this.caretX = i.x, this.caretY = i.y, this._resolveAnimations().update(this, l))
                }
            }
            _willRender() {
                return !!this.opacity
            }
            draw(t) {
                const e = this.options.setContext(this.getContext());
                let i = this.opacity;
                if (!i) return;
                this._updateAnimationTarget(e);
                const s = {
                        width: this.width,
                        height: this.height
                    },
                    n = {
                        x: this.x,
                        y: this.y
                    };
                i = Math.abs(i) < .001 ? 0 : i;
                const o = be(e.padding),
                    a = this.title.length || this.beforeBody.length || this.body.length || this.afterBody.length || this.footer.length;
                e.enabled && a && (t.save(), t.globalAlpha = i, this.drawBackground(n, t, s, e), ni(t, e.textDirection), n.y += o.top, this.drawTitle(n, t, e), this.drawBody(n, t, e), this.drawFooter(n, t, e), oi(t, e.textDirection), t.restore())
            }
            getActiveElements() {
                return this._active || []
            }
            setActiveElements(t, e) {
                const i = this._active,
                    s = t.map((({
                        datasetIndex: t,
                        index: e
                    }) => {
                        const i = this.chart.getDatasetMeta(t);
                        if (!i) throw new Error("Cannot find a dataset at index " + t);
                        return {
                            datasetIndex: t,
                            element: i.data[e],
                            index: e
                        }
                    })),
                    n = !f(i, s),
                    o = this._positionChanged(s, e);
                (n || o) && (this._active = s, this._eventPosition = e, this._ignoreReplayEvents = !0, this.update(!0))
            }
            handleEvent(t, e, i = !0) {
                if (e && this._ignoreReplayEvents) return !1;
                this._ignoreReplayEvents = !1;
                const s = this.options,
                    n = this._active || [],
                    o = this._getActiveElements(t, n, e, i),
                    a = this._positionChanged(o, t),
                    r = e || !f(o, n) || a;
                return r && (this._active = o, (s.enabled || s.external) && (this._eventPosition = {
                    x: t.x,
                    y: t.y
                }, this.update(!0, e))), r
            }
            _getActiveElements(t, e, i, s) {
                const n = this.options;
                if ("mouseout" === t.type) return [];
                if (!s) return e;
                const o = this.chart.getElementsAtEventForMode(t, n.mode, n, i);
                return n.reverse && o.reverse(), o
            }
            _positionChanged(t, e) {
                const {
                    caretX: i,
                    caretY: s,
                    options: n
                } = this, o = co[n.position].call(this, t, e);
                return !1 !== o && (i !== o.x || s !== o.y)
            }
        }
        Mo.positioners = co;
        var wo = {
                id: "tooltip",
                _element: Mo,
                positioners: co,
                afterInit(t, e, i) {
                    i && (t.tooltip = new Mo({
                        chart: t,
                        options: i
                    }))
                },
                beforeUpdate(t, e, i) {
                    t.tooltip && t.tooltip.initialize(i)
                },
                reset(t, e, i) {
                    t.tooltip && t.tooltip.initialize(i)
                },
                afterDraw(t) {
                    const e = t.tooltip;
                    if (e && e._willRender()) {
                        const i = {
                            tooltip: e
                        };
                        if (!1 === t.notifyPlugins("beforeTooltipDraw", i)) return;
                        e.draw(t.ctx), t.notifyPlugins("afterTooltipDraw", i)
                    }
                },
                afterEvent(t, e) {
                    if (t.tooltip) {
                        const i = e.replay;
                        t.tooltip.handleEvent(e.event, i, e.inChartArea) && (e.changed = !0)
                    }
                },
                defaults: {
                    enabled: !0,
                    external: null,
                    position: "average",
                    backgroundColor: "rgba(0,0,0,0.8)",
                    titleColor: "#fff",
                    titleFont: {
                        weight: "bold"
                    },
                    titleSpacing: 2,
                    titleMarginBottom: 6,
                    titleAlign: "left",
                    bodyColor: "#fff",
                    bodySpacing: 2,
                    bodyFont: {},
                    bodyAlign: "left",
                    footerColor: "#fff",
                    footerSpacing: 2,
                    footerMarginTop: 6,
                    footerFont: {
                        weight: "bold"
                    },
                    footerAlign: "left",
                    padding: 6,
                    caretPadding: 2,
                    caretSize: 5,
                    cornerRadius: 6,
                    boxHeight: (t, e) => e.bodyFont.size,
                    boxWidth: (t, e) => e.bodyFont.size,
                    multiKeyBackground: "#fff",
                    displayColors: !0,
                    boxPadding: 0,
                    borderColor: "rgba(0,0,0,0)",
                    borderWidth: 0,
                    animation: {
                        duration: 400,
                        easing: "easeOutQuart"
                    },
                    animations: {
                        numbers: {
                            type: "number",
                            properties: ["x", "y", "width", "height", "caretX", "caretY"]
                        },
                        opacity: {
                            easing: "linear",
                            duration: 200
                        }
                    },
                    callbacks: {
                        beforeTitle: i,
                        title(t) {
                            if (t.length > 0) {
                                const e = t[0],
                                    i = e.chart.data.labels,
                                    s = i ? i.length : 0;
                                if (this && this.options && "dataset" === this.options.mode) return e.dataset.label || "";
                                if (e.label) return e.label;
                                if (s > 0 && e.dataIndex < s) return i[e.dataIndex]
                            }
                            return ""
                        },
                        afterTitle: i,
                        beforeBody: i,
                        beforeLabel: i,
                        label(t) {
                            if (this && this.options && "dataset" === this.options.mode) return t.label + ": " + t.formattedValue || t.formattedValue;
                            let e = t.dataset.label || "";
                            e && (e += ": ");
                            const i = t.formattedValue;
                            return n(i) || (e += i), e
                        },
                        labelColor(t) {
                            const e = t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);
                            return {
                                borderColor: e.borderColor,
                                backgroundColor: e.backgroundColor,
                                borderWidth: e.borderWidth,
                                borderDash: e.borderDash,
                                borderDashOffset: e.borderDashOffset,
                                borderRadius: 0
                            }
                        },
                        labelTextColor() {
                            return this.options.bodyColor
                        },
                        labelPointStyle(t) {
                            const e = t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);
                            return {
                                pointStyle: e.pointStyle,
                                rotation: e.rotation
                            }
                        },
                        afterLabel: i,
                        afterBody: i,
                        beforeFooter: i,
                        footer: i,
                        afterFooter: i
                    }
                },
                defaultRoutes: {
                    bodyFont: "font",
                    footerFont: "font",
                    titleFont: "font"
                },
                descriptors: {
                    _scriptable: t => "filter" !== t && "itemSort" !== t && "external" !== t,
                    _indexable: !1,
                    callbacks: {
                        _scriptable: !1,
                        _indexable: !1
                    },
                    animation: {
                        _fallback: !1
                    },
                    animations: {
                        _fallback: "animation"
                    }
                },
                additionalOptionScopes: ["interaction"]
            },
            ko = Object.freeze({
                __proto__: null,
                Decimation: Wn,
                Filler: io,
                Legend: oo,
                SubTitle: ho,
                Title: ro,
                Tooltip: wo
            });
        class So extends es {
            constructor(t) {
                super(t), this._startValue = void 0, this._valueRange = 0, this._addedLabels = []
            }
            init(t) {
                const e = this._addedLabels;
                if (e.length) {
                    const t = this.getLabels();
                    for (const {
                            index: i,
                            label: s
                        } of e) t[i] === s && t.splice(i, 1);
                    this._addedLabels = []
                }
                super.init(t)
            }
            parse(t, e) {
                if (n(t)) return null;
                const i = this.getLabels();
                return ((t, e) => null === t ? null : q(Math.round(t), 0, e))(e = isFinite(e) && i[e] === t ? e : function (t, e, i, s) {
                    const n = t.indexOf(e);
                    return -1 === n ? ((t, e, i, s) => ("string" == typeof e ? (i = t.push(e) - 1, s.unshift({
                        index: i,
                        label: e
                    })) : isNaN(e) && (i = null), i))(t, e, i, s) : n !== t.lastIndexOf(e) ? i : n
                }(i, t, h(e, t), this._addedLabels), i.length - 1)
            }
            determineDataLimits() {
                const {
                    minDefined: t,
                    maxDefined: e
                } = this.getUserBounds();
                let {
                    min: i,
                    max: s
                } = this.getMinMax(!0);
                "ticks" === this.options.bounds && (t || (i = 0), e || (s = this.getLabels().length - 1)), this.min = i, this.max = s
            }
            buildTicks() {
                const t = this.min,
                    e = this.max,
                    i = this.options.offset,
                    s = [];
                let n = this.getLabels();
                n = 0 === t && e === n.length - 1 ? n : n.slice(t, e + 1), this._valueRange = Math.max(n.length - (i ? 0 : 1), 1), this._startValue = this.min - (i ? .5 : 0);
                for (let i = t; i <= e; i++) s.push({
                    value: i
                });
                return s
            }
            getLabelForValue(t) {
                const e = this.getLabels();
                return t >= 0 && t < e.length ? e[t] : t
            }
            configure() {
                super.configure(), this.isHorizontal() || (this._reversePixels = !this._reversePixels)
            }
            getPixelForValue(t) {
                return "number" != typeof t && (t = this.parse(t)), null === t ? NaN : this.getPixelForDecimal((t - this._startValue) / this._valueRange)
            }
            getPixelForTick(t) {
                const e = this.ticks;
                return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t].value)
            }
            getValueForPixel(t) {
                return Math.round(this._startValue + this.getDecimalForPixel(t) * this._valueRange)
            }
            getBasePixel() {
                return this.bottom
            }
        }

        function Po(t, e, {
            horizontal: i,
            minRotation: s
        }) {
            const n = W(s),
                o = (i ? Math.sin(n) : Math.cos(n)) || .001,
                a = .75 * e * ("" + t).length;
            return Math.min(e / o, a)
        }
        So.id = "category", So.defaults = {
            ticks: {
                callback: So.prototype.getLabelForValue
            }
        };
        class Do extends es {
            constructor(t) {
                super(t), this.start = void 0, this.end = void 0, this._startValue = void 0, this._endValue = void 0, this._valueRange = 0
            }
            parse(t, e) {
                return n(t) || ("number" == typeof t || t instanceof Number) && !isFinite(+t) ? null : +t
            }
            handleTickRangeOptions() {
                const {
                    beginAtZero: t
                } = this.options, {
                    minDefined: e,
                    maxDefined: i
                } = this.getUserBounds();
                let {
                    min: s,
                    max: n
                } = this;
                const o = t => s = e ? s : t,
                    a = t => n = i ? n : t;
                if (t) {
                    const t = I(s),
                        e = I(n);
                    t < 0 && e < 0 ? a(0) : t > 0 && e > 0 && o(0)
                }
                if (s === n) {
                    let e = 1;
                    (n >= Number.MAX_SAFE_INTEGER || s <= Number.MIN_SAFE_INTEGER) && (e = Math.abs(.05 * n)), a(n + e), t || o(s - e)
                }
                this.min = s, this.max = n
            }
            getTickLimit() {
                const t = this.options.ticks;
                let e, {
                    maxTicksLimit: i,
                    stepSize: s
                } = t;
                return s ? (e = Math.ceil(this.max / s) - Math.floor(this.min / s) + 1, e > 1e3 && (console.warn(`scales.${this.id}.ticks.stepSize: ${s} would result generating up to ${e} ticks. Limiting to 1000.`), e = 1e3)) : (e = this.computeTickLimit(), i = i || 11), i && (e = Math.min(i, e)), e
            }
            computeTickLimit() {
                return Number.POSITIVE_INFINITY
            }
            buildTicks() {
                const t = this.options,
                    e = t.ticks;
                let i = this.getTickLimit();
                i = Math.max(2, i);
                const s = function (t, e) {
                    const i = [],
                        {
                            bounds: s,
                            step: o,
                            min: a,
                            max: r,
                            precision: l,
                            count: h,
                            maxTicks: c,
                            maxDigits: d,
                            includeBounds: u
                        } = t,
                        f = o || 1,
                        g = c - 1,
                        {
                            min: p,
                            max: m
                        } = e,
                        b = !n(a),
                        x = !n(r),
                        _ = !n(h),
                        y = (m - p) / (d + 1);
                    let v, M, w, k, S = z((m - p) / g / f) * f;
                    if (S < 1e-14 && !b && !x) return [{
                        value: p
                    }, {
                        value: m
                    }];
                    k = Math.ceil(m / S) - Math.floor(p / S), k > g && (S = z(k * S / g / f) * f), n(l) || (v = Math.pow(10, l), S = Math.ceil(S * v) / v), "ticks" === s ? (M = Math.floor(p / S) * S, w = Math.ceil(m / S) * S) : (M = p, w = m), b && x && o && function (t, e) {
                        const i = Math.round(t);
                        return i - e <= t && i + e >= t
                    }((r - a) / o, S / 1e3) ? (k = Math.round(Math.min((r - a) / S, c)), S = (r - a) / k, M = a, w = r) : _ ? (M = b ? a : M, w = x ? r : w, k = h - 1, S = (w - M) / k) : (k = (w - M) / S, k = V(k, Math.round(k), S / 1e3) ? Math.round(k) : Math.ceil(k));
                    const P = Math.max(j(S), j(M));
                    v = Math.pow(10, n(l) ? P : l), M = Math.round(M * v) / v, w = Math.round(w * v) / v;
                    let D = 0;
                    for (b && (u && M !== a ? (i.push({
                            value: a
                        }), M < a && D++, V(Math.round((M + D * S) * v) / v, a, Po(a, y, t)) && D++) : M < a && D++); D < k; ++D) i.push({
                        value: Math.round((M + D * S) * v) / v
                    });
                    return x && u && w !== r ? i.length && V(i[i.length - 1].value, r, Po(r, y, t)) ? i[i.length - 1].value = r : i.push({
                        value: r
                    }) : x && w !== r || i.push({
                        value: w
                    }), i
                }({
                    maxTicks: i,
                    bounds: t.bounds,
                    min: t.min,
                    max: t.max,
                    precision: e.precision,
                    step: e.stepSize,
                    count: e.count,
                    maxDigits: this._maxDigits(),
                    horizontal: this.isHorizontal(),
                    minRotation: e.minRotation || 0,
                    includeBounds: !1 !== e.includeBounds
                }, this._range || this);
                return "ticks" === t.bounds && B(s, this, "value"), t.reverse ? (s.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max), s
            }
            configure() {
                const t = this.ticks;
                let e = this.min,
                    i = this.max;
                if (super.configure(), this.options.offset && t.length) {
                    const s = (i - e) / Math.max(t.length - 1, 1) / 2;
                    e -= s, i += s
                }
                this._startValue = e, this._endValue = i, this._valueRange = i - e
            }
            getLabelForValue(t) {
                return ii(t, this.chart.options.locale, this.options.ticks.format)
            }
        }
        class Oo extends Do {
            determineDataLimits() {
                const {
                    min: t,
                    max: e
                } = this.getMinMax(!0);
                this.min = r(t) ? t : 0, this.max = r(e) ? e : 1, this.handleTickRangeOptions()
            }
            computeTickLimit() {
                const t = this.isHorizontal(),
                    e = t ? this.width : this.height,
                    i = W(this.options.ticks.minRotation),
                    s = (t ? Math.sin(i) : Math.cos(i)) || .001,
                    n = this._resolveTickFontOptions(0);
                return Math.ceil(e / Math.min(40, n.lineHeight / s))
            }
            getPixelForValue(t) {
                return null === t ? NaN : this.getPixelForDecimal((t - this._startValue) / this._valueRange)
            }
            getValueForPixel(t) {
                return this._startValue + this.getDecimalForPixel(t) * this._valueRange
            }
        }

        function Co(t) {
            return 1 == t / Math.pow(10, Math.floor(R(t)))
        }
        Oo.id = "linear", Oo.defaults = {
            ticks: {
                callback: Xi.formatters.numeric
            }
        };
        class Ao extends es {
            constructor(t) {
                super(t), this.start = void 0, this.end = void 0, this._startValue = void 0, this._valueRange = 0
            }
            parse(t, e) {
                const i = Do.prototype.parse.apply(this, [t, e]);
                if (0 !== i) return r(i) && i > 0 ? i : null;
                this._zero = !0
            }
            determineDataLimits() {
                const {
                    min: t,
                    max: e
                } = this.getMinMax(!0);
                this.min = r(t) ? Math.max(0, t) : null, this.max = r(e) ? Math.max(0, e) : null, this.options.beginAtZero && (this._zero = !0), this.handleTickRangeOptions()
            }
            handleTickRangeOptions() {
                const {
                    minDefined: t,
                    maxDefined: e
                } = this.getUserBounds();
                let i = this.min,
                    s = this.max;
                const n = e => i = t ? i : e,
                    o = t => s = e ? s : t,
                    a = (t, e) => Math.pow(10, Math.floor(R(t)) + e);
                i === s && (i <= 0 ? (n(1), o(10)) : (n(a(i, -1)), o(a(s, 1)))), i <= 0 && n(a(s, -1)), s <= 0 && o(a(i, 1)), this._zero && this.min !== this._suggestedMin && i === a(this.min, 0) && n(a(i, -1)), this.min = i, this.max = s
            }
            buildTicks() {
                const t = this.options,
                    e = function (t, e) {
                        const i = Math.floor(R(e.max)),
                            s = Math.ceil(e.max / Math.pow(10, i)),
                            n = [];
                        let o = l(t.min, Math.pow(10, Math.floor(R(e.min)))),
                            a = Math.floor(R(o)),
                            r = Math.floor(o / Math.pow(10, a)),
                            h = a < 0 ? Math.pow(10, Math.abs(a)) : 1;
                        do {
                            n.push({
                                value: o,
                                major: Co(o)
                            }), ++r, 10 === r && (r = 1, ++a, h = a >= 0 ? 1 : h), o = Math.round(r * Math.pow(10, a) * h) / h
                        } while (a < i || a === i && r < s);
                        const c = l(t.max, o);
                        return n.push({
                            value: c,
                            major: Co(o)
                        }), n
                    }({
                        min: this._userMin,
                        max: this._userMax
                    }, this);
                return "ticks" === t.bounds && B(e, this, "value"), t.reverse ? (e.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max), e
            }
            getLabelForValue(t) {
                return void 0 === t ? "0" : ii(t, this.chart.options.locale, this.options.ticks.format)
            }
            configure() {
                const t = this.min;
                super.configure(), this._startValue = R(t), this._valueRange = R(this.max) - R(t)
            }
            getPixelForValue(t) {
                return void 0 !== t && 0 !== t || (t = this.min), null === t || isNaN(t) ? NaN : this.getPixelForDecimal(t === this.min ? 0 : (R(t) - this._startValue) / this._valueRange)
            }
            getValueForPixel(t) {
                const e = this.getDecimalForPixel(t);
                return Math.pow(10, this._startValue + e * this._valueRange)
            }
        }

        function To(t) {
            const e = t.ticks;
            if (e.display && t.display) {
                const t = be(e.backdropPadding);
                return h(e.font && e.font.size, Gt.font.size) + t.height
            }
            return 0
        }

        function Lo(t, e, i, s, n) {
            return t === s || t === n ? {
                start: e - i / 2,
                end: e + i / 2
            } : t < s || t > n ? {
                start: e - i,
                end: e
            } : {
                start: e,
                end: e + i
            }
        }

        function Eo(t, e, i, s, n) {
            const o = Math.abs(Math.sin(i)),
                a = Math.abs(Math.cos(i));
            let r = 0,
                l = 0;
            s.start < e.l ? (r = (e.l - s.start) / o, t.l = Math.min(t.l, e.l - r)) : s.end > e.r && (r = (s.end - e.r) / o, t.r = Math.max(t.r, e.r + r)), n.start < e.t ? (l = (e.t - n.start) / a, t.t = Math.min(t.t, e.t - l)) : n.end > e.b && (l = (n.end - e.b) / a, t.b = Math.max(t.b, e.b + l))
        }

        function Ro(t) {
            return 0 === t || 180 === t ? "center" : t < 180 ? "left" : "right"
        }

        function Io(t, e, i) {
            return 90 === i || 270 === i ? t -= e / 2 : (i > 270 || i < 90) && (t -= e), t
        }

        function zo(t, e, i, s) {
            const {
                ctx: n
            } = t;
            if (i) n.arc(t.xCenter, t.yCenter, e, 0, D);
            else {
                let i = t.getPointPosition(0, e);
                n.moveTo(i.x, i.y);
                for (let o = 1; o < s; o++) i = t.getPointPosition(o, e), n.lineTo(i.x, i.y)
            }
        }
        Ao.id = "logarithmic", Ao.defaults = {
            ticks: {
                callback: Xi.formatters.logarithmic,
                major: {
                    enabled: !0
                }
            }
        };
        class Fo extends Do {
            constructor(t) {
                super(t), this.xCenter = void 0, this.yCenter = void 0, this.drawingArea = void 0, this._pointLabels = [], this._pointLabelItems = []
            }
            setDimensions() {
                const t = this._padding = be(To(this.options) / 2),
                    e = this.width = this.maxWidth - t.width,
                    i = this.height = this.maxHeight - t.height;
                this.xCenter = Math.floor(this.left + e / 2 + t.left), this.yCenter = Math.floor(this.top + i / 2 + t.top), this.drawingArea = Math.floor(Math.min(e, i) / 2)
            }
            determineDataLimits() {
                const {
                    min: t,
                    max: e
                } = this.getMinMax(!1);
                this.min = r(t) && !isNaN(t) ? t : 0, this.max = r(e) && !isNaN(e) ? e : 0, this.handleTickRangeOptions()
            }
            computeTickLimit() {
                return Math.ceil(this.drawingArea / To(this.options))
            }
            generateTickLabels(t) {
                Do.prototype.generateTickLabels.call(this, t), this._pointLabels = this.getLabels().map(((t, e) => {
                    const i = d(this.options.pointLabels.callback, [t, e], this);
                    return i || 0 === i ? i : ""
                })).filter(((t, e) => this.chart.getDataVisibility(e)))
            }
            fit() {
                const t = this.options;
                t.display && t.pointLabels.display ? function (t) {
                    const e = {
                            l: t.left + t._padding.left,
                            r: t.right - t._padding.right,
                            t: t.top + t._padding.top,
                            b: t.bottom - t._padding.bottom
                        },
                        i = Object.assign({}, e),
                        s = [],
                        n = [],
                        a = t._pointLabels.length,
                        r = t.options.pointLabels,
                        l = r.centerPointLabels ? P / a : 0;
                    for (let u = 0; u < a; u++) {
                        const a = r.setContext(t.getPointLabelContext(u));
                        n[u] = a.padding;
                        const f = t.getPointPosition(u, t.drawingArea + n[u], l),
                            g = xe(a.font),
                            p = (h = t.ctx, c = g, d = o(d = t._pointLabels[u]) ? d : [d], {
                                w: Jt(h, c.string, d),
                                h: d.length * c.lineHeight
                            });
                        s[u] = p;
                        const m = U(t.getIndexAngle(u) + l),
                            b = Math.round(N(m));
                        Eo(i, e, m, Lo(b, f.x, p.w, 0, 180), Lo(b, f.y, p.h, 90, 270))
                    }
                    var h, c, d;
                    t.setCenterPoint(e.l - i.l, i.r - e.r, e.t - i.t, i.b - e.b), t._pointLabelItems = function (t, e, i) {
                        const s = [],
                            n = t._pointLabels.length,
                            o = t.options,
                            a = To(o) / 2,
                            r = t.drawingArea,
                            l = o.pointLabels.centerPointLabels ? P / n : 0;
                        for (let o = 0; o < n; o++) {
                            const n = t.getPointPosition(o, r + a + i[o], l),
                                u = Math.round(N(U(n.angle + T))),
                                f = e[o],
                                g = Io(n.y, f.h, u),
                                p = Ro(u),
                                m = (h = n.x, c = f.w, "right" === (d = p) ? h -= c : "center" === d && (h -= c / 2), h);
                            s.push({
                                x: n.x,
                                y: g,
                                textAlign: p,
                                left: m,
                                top: g,
                                right: m + f.w,
                                bottom: g + f.h
                            })
                        }
                        var h, c, d;
                        return s
                    }(t, s, n)
                }(this) : this.setCenterPoint(0, 0, 0, 0)
            }
            setCenterPoint(t, e, i, s) {
                this.xCenter += Math.floor((t - e) / 2), this.yCenter += Math.floor((i - s) / 2), this.drawingArea -= Math.min(this.drawingArea / 2, Math.max(t, e, i, s))
            }
            getIndexAngle(t) {
                return U(t * (D / (this._pointLabels.length || 1)) + W(this.options.startAngle || 0))
            }
            getDistanceFromCenterForValue(t) {
                if (n(t)) return NaN;
                const e = this.drawingArea / (this.max - this.min);
                return this.options.reverse ? (this.max - t) * e : (t - this.min) * e
            }
            getValueForDistanceFromCenter(t) {
                if (n(t)) return NaN;
                const e = t / (this.drawingArea / (this.max - this.min));
                return this.options.reverse ? this.max - e : this.min + e
            }
            getPointLabelContext(t) {
                const e = this._pointLabels || [];
                if (t >= 0 && t < e.length) {
                    const i = e[t];
                    return function (t, e, i) {
                        return ye(t, {
                            label: i,
                            index: e,
                            type: "pointLabel"
                        })
                    }(this.getContext(), t, i)
                }
            }
            getPointPosition(t, e, i = 0) {
                const s = this.getIndexAngle(t) - T + i;
                return {
                    x: Math.cos(s) * e + this.xCenter,
                    y: Math.sin(s) * e + this.yCenter,
                    angle: s
                }
            }
            getPointPositionForValue(t, e) {
                return this.getPointPosition(t, this.getDistanceFromCenterForValue(e))
            }
            getBasePosition(t) {
                return this.getPointPositionForValue(t || 0, this.getBaseValue())
            }
            getPointLabelPosition(t) {
                const {
                    left: e,
                    top: i,
                    right: s,
                    bottom: n
                } = this._pointLabelItems[t];
                return {
                    left: e,
                    top: i,
                    right: s,
                    bottom: n
                }
            }
            drawBackground() {
                const {
                    backgroundColor: t,
                    grid: {
                        circular: e
                    }
                } = this.options;
                if (t) {
                    const i = this.ctx;
                    i.save(), i.beginPath(), zo(this, this.getDistanceFromCenterForValue(this._endValue), e, this._pointLabels.length), i.closePath(), i.fillStyle = t, i.fill(), i.restore()
                }
            }
            drawGrid() {
                const t = this.ctx,
                    e = this.options,
                    {
                        angleLines: i,
                        grid: s
                    } = e,
                    o = this._pointLabels.length;
                let a, r, l;
                if (e.pointLabels.display && function (t, e) {
                        const {
                            ctx: i,
                            options: {
                                pointLabels: s
                            }
                        } = t;
                        for (let o = e - 1; o >= 0; o--) {
                            const e = s.setContext(t.getPointLabelContext(o)),
                                a = xe(e.font),
                                {
                                    x: r,
                                    y: l,
                                    textAlign: h,
                                    left: c,
                                    top: d,
                                    right: u,
                                    bottom: f
                                } = t._pointLabelItems[o],
                                {
                                    backdropColor: g
                                } = e;
                            if (!n(g)) {
                                const t = me(e.borderRadius),
                                    s = be(e.backdropPadding);
                                i.fillStyle = g;
                                const n = c - s.left,
                                    o = d - s.top,
                                    a = u - c + s.width,
                                    r = f - d + s.height;
                                Object.values(t).some((t => 0 !== t)) ? (i.beginPath(), ce(i, {
                                    x: n,
                                    y: o,
                                    w: a,
                                    h: r,
                                    radius: t
                                }), i.fill()) : i.fillRect(n, o, a, r)
                            }
                            le(i, t._pointLabels[o], r, l + a.lineHeight / 2, a, {
                                color: e.color,
                                textAlign: h,
                                textBaseline: "middle"
                            })
                        }
                    }(this, o), s.display && this.ticks.forEach(((t, e) => {
                        0 !== e && (r = this.getDistanceFromCenterForValue(t.value), function (t, e, i, s) {
                            const n = t.ctx,
                                o = e.circular,
                                {
                                    color: a,
                                    lineWidth: r
                                } = e;
                            !o && !s || !a || !r || i < 0 || (n.save(), n.strokeStyle = a, n.lineWidth = r, n.setLineDash(e.borderDash), n.lineDashOffset = e.borderDashOffset, n.beginPath(), zo(t, i, o, s), n.closePath(), n.stroke(), n.restore())
                        }(this, s.setContext(this.getContext(e - 1)), r, o))
                    })), i.display) {
                    for (t.save(), a = o - 1; a >= 0; a--) {
                        const s = i.setContext(this.getPointLabelContext(a)),
                            {
                                color: n,
                                lineWidth: o
                            } = s;
                        o && n && (t.lineWidth = o, t.strokeStyle = n, t.setLineDash(s.borderDash), t.lineDashOffset = s.borderDashOffset, r = this.getDistanceFromCenterForValue(e.ticks.reverse ? this.min : this.max), l = this.getPointPosition(a, r), t.beginPath(), t.moveTo(this.xCenter, this.yCenter), t.lineTo(l.x, l.y), t.stroke())
                    }
                    t.restore()
                }
            }
            drawBorder() {}
            drawLabels() {
                const t = this.ctx,
                    e = this.options,
                    i = e.ticks;
                if (!i.display) return;
                const s = this.getIndexAngle(0);
                let n, o;
                t.save(), t.translate(this.xCenter, this.yCenter), t.rotate(s), t.textAlign = "center", t.textBaseline = "middle", this.ticks.forEach(((s, a) => {
                    if (0 === a && !e.reverse) return;
                    const r = i.setContext(this.getContext(a)),
                        l = xe(r.font);
                    if (n = this.getDistanceFromCenterForValue(this.ticks[a].value), r.showLabelBackdrop) {
                        t.font = l.string, o = t.measureText(s.label).width, t.fillStyle = r.backdropColor;
                        const e = be(r.backdropPadding);
                        t.fillRect(-o / 2 - e.left, -n - l.size / 2 - e.top, o + e.width, l.size + e.height)
                    }
                    le(t, s.label, 0, -n, l, {
                        color: r.color
                    })
                })), t.restore()
            }
            drawTitle() {}
        }
        Fo.id = "radialLinear", Fo.defaults = {
            display: !0,
            animate: !0,
            position: "chartArea",
            angleLines: {
                display: !0,
                lineWidth: 1,
                borderDash: [],
                borderDashOffset: 0
            },
            grid: {
                circular: !1
            },
            startAngle: 0,
            ticks: {
                showLabelBackdrop: !0,
                callback: Xi.formatters.numeric
            },
            pointLabels: {
                backdropColor: void 0,
                backdropPadding: 2,
                display: !0,
                font: {
                    size: 10
                },
                callback(t) {
                    return t
                },
                padding: 5,
                centerPointLabels: !1
            }
        }, Fo.defaultRoutes = {
            "angleLines.color": "borderColor",
            "pointLabels.color": "color",
            "ticks.color": "color"
        }, Fo.descriptors = {
            angleLines: {
                _fallback: "grid"
            }
        };
        const Vo = {
                millisecond: {
                    common: !0,
                    size: 1,
                    steps: 1e3
                },
                second: {
                    common: !0,
                    size: 1e3,
                    steps: 60
                },
                minute: {
                    common: !0,
                    size: 6e4,
                    steps: 60
                },
                hour: {
                    common: !0,
                    size: 36e5,
                    steps: 24
                },
                day: {
                    common: !0,
                    size: 864e5,
                    steps: 30
                },
                week: {
                    common: !1,
                    size: 6048e5,
                    steps: 4
                },
                month: {
                    common: !0,
                    size: 2628e6,
                    steps: 12
                },
                quarter: {
                    common: !1,
                    size: 7884e6,
                    steps: 4
                },
                year: {
                    common: !0,
                    size: 3154e7
                }
            },
            Bo = Object.keys(Vo);

        function Wo(t, e) {
            return t - e
        }

        function No(t, e) {
            if (n(e)) return null;
            const i = t._adapter,
                {
                    parser: s,
                    round: o,
                    isoWeekday: a
                } = t._parseOpts;
            let l = e;
            return "function" == typeof s && (l = s(l)), r(l) || (l = "string" == typeof s ? i.parse(l, s) : i.parse(l)), null === l ? null : (o && (l = "week" !== o || !F(a) && !0 !== a ? i.startOf(l, o) : i.startOf(l, "isoWeek", a)), +l)
        }

        function jo(t, e, i, s) {
            const n = Bo.length;
            for (let o = Bo.indexOf(t); o < n - 1; ++o) {
                const t = Vo[Bo[o]],
                    n = t.steps ? t.steps : Number.MAX_SAFE_INTEGER;
                if (t.common && Math.ceil((i - e) / (n * t.size)) <= s) return Bo[o]
            }
            return Bo[n - 1]
        }

        function Ho(t, e, i) {
            if (i) {
                if (i.length) {
                    const {
                        lo: s,
                        hi: n
                    } = G(i, e);
                    t[i[s] >= e ? i[s] : i[n]] = !0
                }
            } else t[e] = !0
        }

        function $o(t, e, i) {
            const s = [],
                n = {},
                o = e.length;
            let a, r;
            for (a = 0; a < o; ++a) r = e[a], n[r] = a, s.push({
                value: r,
                major: !1
            });
            return 0 !== o && i ? function (t, e, i, s) {
                const n = t._adapter,
                    o = +n.startOf(e[0].value, s),
                    a = e[e.length - 1].value;
                let r, l;
                for (r = o; r <= a; r = +n.add(r, 1, s)) l = i[r], l >= 0 && (e[l].major = !0);
                return e
            }(t, s, n, i) : s
        }
        class Yo extends es {
            constructor(t) {
                super(t), this._cache = {
                    data: [],
                    labels: [],
                    all: []
                }, this._unit = "day", this._majorUnit = void 0, this._offsets = {}, this._normalized = !1, this._parseOpts = void 0
            }
            init(t, e) {
                const i = t.time || (t.time = {}),
                    s = this._adapter = new ls._date(t.adapters.date);
                s.init(e), x(i.displayFormats, s.formats()), this._parseOpts = {
                    parser: i.parser,
                    round: i.round,
                    isoWeekday: i.isoWeekday
                }, super.init(t), this._normalized = e.normalized
            }
            parse(t, e) {
                return void 0 === t ? null : No(this, t)
            }
            beforeLayout() {
                super.beforeLayout(), this._cache = {
                    data: [],
                    labels: [],
                    all: []
                }
            }
            determineDataLimits() {
                const t = this.options,
                    e = this._adapter,
                    i = t.time.unit || "day";
                let {
                    min: s,
                    max: n,
                    minDefined: o,
                    maxDefined: a
                } = this.getUserBounds();

                function l(t) {
                    o || isNaN(t.min) || (s = Math.min(s, t.min)), a || isNaN(t.max) || (n = Math.max(n, t.max))
                }
                o && a || (l(this._getLabelBounds()), "ticks" === t.bounds && "labels" === t.ticks.source || l(this.getMinMax(!1))), s = r(s) && !isNaN(s) ? s : +e.startOf(Date.now(), i), n = r(n) && !isNaN(n) ? n : +e.endOf(Date.now(), i) + 1, this.min = Math.min(s, n - 1), this.max = Math.max(s + 1, n)
            }
            _getLabelBounds() {
                const t = this.getLabelTimestamps();
                let e = Number.POSITIVE_INFINITY,
                    i = Number.NEGATIVE_INFINITY;
                return t.length && (e = t[0], i = t[t.length - 1]), {
                    min: e,
                    max: i
                }
            }
            buildTicks() {
                const t = this.options,
                    e = t.time,
                    i = t.ticks,
                    s = "labels" === i.source ? this.getLabelTimestamps() : this._generate();
                "ticks" === t.bounds && s.length && (this.min = this._userMin || s[0], this.max = this._userMax || s[s.length - 1]);
                const n = this.min,
                    o = function (t, e, i) {
                        let s = 0,
                            n = t.length;
                        for (; s < n && t[s] < e;) s++;
                        for (; n > s && t[n - 1] > i;) n--;
                        return s > 0 || n < t.length ? t.slice(s, n) : t
                    }(s, n, this.max);
                return this._unit = e.unit || (i.autoSkip ? jo(e.minUnit, this.min, this.max, this._getLabelCapacity(n)) : function (t, e, i, s, n) {
                    for (let o = Bo.length - 1; o >= Bo.indexOf(i); o--) {
                        const i = Bo[o];
                        if (Vo[i].common && t._adapter.diff(n, s, i) >= e - 1) return i
                    }
                    return Bo[i ? Bo.indexOf(i) : 0]
                }(this, o.length, e.minUnit, this.min, this.max)), this._majorUnit = i.major.enabled && "year" !== this._unit ? function (t) {
                    for (let e = Bo.indexOf(t) + 1, i = Bo.length; e < i; ++e)
                        if (Vo[Bo[e]].common) return Bo[e]
                }(this._unit) : void 0, this.initOffsets(s), t.reverse && o.reverse(), $o(this, o, this._majorUnit)
            }
            afterAutoSkip() {
                this.options.offsetAfterAutoskip && this.initOffsets(this.ticks.map((t => +t.value)))
            }
            initOffsets(t) {
                let e, i, s = 0,
                    n = 0;
                this.options.offset && t.length && (e = this.getDecimalForValue(t[0]), s = 1 === t.length ? 1 - e : (this.getDecimalForValue(t[1]) - e) / 2, i = this.getDecimalForValue(t[t.length - 1]), n = 1 === t.length ? i : (i - this.getDecimalForValue(t[t.length - 2])) / 2);
                const o = t.length < 3 ? .5 : .25;
                s = q(s, 0, o), n = q(n, 0, o), this._offsets = {
                    start: s,
                    end: n,
                    factor: 1 / (s + 1 + n)
                }
            }
            _generate() {
                const t = this._adapter,
                    e = this.min,
                    i = this.max,
                    s = this.options,
                    n = s.time,
                    o = n.unit || jo(n.minUnit, e, i, this._getLabelCapacity(e)),
                    a = h(n.stepSize, 1),
                    r = "week" === o && n.isoWeekday,
                    l = F(r) || !0 === r,
                    c = {};
                let d, u, f = e;
                if (l && (f = +t.startOf(f, "isoWeek", r)), f = +t.startOf(f, l ? "day" : o), t.diff(i, e, o) > 1e5 * a) throw new Error(e + " and " + i + " are too far apart with stepSize of " + a + " " + o);
                const g = "data" === s.ticks.source && this.getDataTimestamps();
                for (d = f, u = 0; d < i; d = +t.add(d, a, o), u++) Ho(c, d, g);
                return d !== i && "ticks" !== s.bounds && 1 !== u || Ho(c, d, g), Object.keys(c).sort(((t, e) => t - e)).map((t => +t))
            }
            getLabelForValue(t) {
                const e = this._adapter,
                    i = this.options.time;
                return i.tooltipFormat ? e.format(t, i.tooltipFormat) : e.format(t, i.displayFormats.datetime)
            }
            _tickFormatFunction(t, e, i, s) {
                const n = this.options,
                    o = n.time.displayFormats,
                    a = this._unit,
                    r = this._majorUnit,
                    l = a && o[a],
                    h = r && o[r],
                    c = i[e],
                    u = r && h && c && c.major,
                    f = this._adapter.format(t, s || (u ? h : l)),
                    g = n.ticks.callback;
                return g ? d(g, [f, e, i], this) : f
            }
            generateTickLabels(t) {
                let e, i, s;
                for (e = 0, i = t.length; e < i; ++e) s = t[e], s.label = this._tickFormatFunction(s.value, e, t)
            }
            getDecimalForValue(t) {
                return null === t ? NaN : (t - this.min) / (this.max - this.min)
            }
            getPixelForValue(t) {
                const e = this._offsets,
                    i = this.getDecimalForValue(t);
                return this.getPixelForDecimal((e.start + i) * e.factor)
            }
            getValueForPixel(t) {
                const e = this._offsets,
                    i = this.getDecimalForPixel(t) / e.factor - e.end;
                return this.min + i * (this.max - this.min)
            }
            _getLabelSize(t) {
                const e = this.options.ticks,
                    i = this.ctx.measureText(t).width,
                    s = W(this.isHorizontal() ? e.maxRotation : e.minRotation),
                    n = Math.cos(s),
                    o = Math.sin(s),
                    a = this._resolveTickFontOptions(0).size;
                return {
                    w: i * n + a * o,
                    h: i * o + a * n
                }
            }
            _getLabelCapacity(t) {
                const e = this.options.time,
                    i = e.displayFormats,
                    s = i[e.unit] || i.millisecond,
                    n = this._tickFormatFunction(t, 0, $o(this, [t], this._majorUnit), s),
                    o = this._getLabelSize(n),
                    a = Math.floor(this.isHorizontal() ? this.width / o.w : this.height / o.h) - 1;
                return a > 0 ? a : 1
            }
            getDataTimestamps() {
                let t, e, i = this._cache.data || [];
                if (i.length) return i;
                const s = this.getMatchingVisibleMetas();
                if (this._normalized && s.length) return this._cache.data = s[0].controller.getAllParsedValues(this);
                for (t = 0, e = s.length; t < e; ++t) i = i.concat(s[t].controller.getAllParsedValues(this));
                return this._cache.data = this.normalize(i)
            }
            getLabelTimestamps() {
                const t = this._cache.labels || [];
                let e, i;
                if (t.length) return t;
                const s = this.getLabels();
                for (e = 0, i = s.length; e < i; ++e) t.push(No(this, s[e]));
                return this._cache.labels = this._normalized ? t : this.normalize(t)
            }
            normalize(t) {
                return et(t.sort(Wo))
            }
        }

        function Uo(t, e, i) {
            let s, n, o, a, r = 0,
                l = t.length - 1;
            i ? (e >= t[r].pos && e <= t[l].pos && ({
                lo: r,
                hi: l
            } = Z(t, "pos", e)), ({
                pos: s,
                time: o
            } = t[r]), ({
                pos: n,
                time: a
            } = t[l])) : (e >= t[r].time && e <= t[l].time && ({
                lo: r,
                hi: l
            } = Z(t, "time", e)), ({
                time: s,
                pos: o
            } = t[r]), ({
                time: n,
                pos: a
            } = t[l]));
            const h = n - s;
            return h ? o + (a - o) * (e - s) / h : o
        }
        Yo.id = "time", Yo.defaults = {
            bounds: "data",
            adapters: {},
            time: {
                parser: !1,
                unit: !1,
                round: !1,
                isoWeekday: !1,
                minUnit: "millisecond",
                displayFormats: {}
            },
            ticks: {
                source: "auto",
                major: {
                    enabled: !1
                }
            }
        };
        class Xo extends Yo {
            constructor(t) {
                super(t), this._table = [], this._minPos = void 0, this._tableRange = void 0
            }
            initOffsets() {
                const t = this._getTimestampsForTable(),
                    e = this._table = this.buildLookupTable(t);
                this._minPos = Uo(e, this.min), this._tableRange = Uo(e, this.max) - this._minPos, super.initOffsets(t)
            }
            buildLookupTable(t) {
                const {
                    min: e,
                    max: i
                } = this, s = [], n = [];
                let o, a, r, l, h;
                for (o = 0, a = t.length; o < a; ++o) l = t[o], l >= e && l <= i && s.push(l);
                if (s.length < 2) return [{
                    time: e,
                    pos: 0
                }, {
                    time: i,
                    pos: 1
                }];
                for (o = 0, a = s.length; o < a; ++o) h = s[o + 1], r = s[o - 1], l = s[o], Math.round((h + r) / 2) !== l && n.push({
                    time: l,
                    pos: o / (a - 1)
                });
                return n
            }
            _getTimestampsForTable() {
                let t = this._cache.all || [];
                if (t.length) return t;
                const e = this.getDataTimestamps(),
                    i = this.getLabelTimestamps();
                return t = e.length && i.length ? this.normalize(e.concat(i)) : e.length ? e : i, t = this._cache.all = t, t
            }
            getDecimalForValue(t) {
                return (Uo(this._table, t) - this._minPos) / this._tableRange
            }
            getValueForPixel(t) {
                const e = this._offsets,
                    i = this.getDecimalForPixel(t) / e.factor - e.end;
                return Uo(this._table, i * this._tableRange + this._minPos, !0)
            }
        }
        Xo.id = "timeseries", Xo.defaults = Yo.defaults;
        const qo = [os, Fn, ko, Object.freeze({
            __proto__: null,
            CategoryScale: So,
            LinearScale: Oo,
            LogarithmicScale: Ao,
            RadialLinearScale: Fo,
            TimeScale: Yo,
            TimeSeriesScale: Xo
        })];
        gn.register(...qo);
        var Ko = gn;
        return e
    }()
}));
