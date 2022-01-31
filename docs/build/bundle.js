var app = (function () {
    "use strict";
    function t() {}
    function n(t) {
        return t();
    }
    function e() {
        return Object.create(null);
    }
    function o(t) {
        t.forEach(n);
    }
    function r(t) {
        return "function" == typeof t;
    }
    function c(t, n) {
        return t != t
            ? n == n
            : t !== n || (t && "object" == typeof t) || "function" == typeof t;
    }
    function l(n, e, o) {
        n.$$.on_destroy.push(
            (function (n, ...e) {
                if (null == n) return t;
                const o = n.subscribe(...e);
                return o.unsubscribe ? () => o.unsubscribe() : o;
            })(e, o)
        );
    }
    function s(t, n) {
        t.appendChild(n);
    }
    function u(t, n, e) {
        t.insertBefore(n, e || null);
    }
    function i(t) {
        t.parentNode.removeChild(t);
    }
    function f(t, n) {
        for (let e = 0; e < t.length; e += 1) t[e] && t[e].d(n);
    }
    function a(t) {
        return document.createElement(t);
    }
    function d(t) {
        return document.createTextNode(t);
    }
    function g() {
        return d(" ");
    }
    function h(t, n, e, o) {
        return (
            t.addEventListener(n, e, o), () => t.removeEventListener(n, e, o)
        );
    }
    function p(t, n, e) {
        null == e
            ? t.removeAttribute(n)
            : t.getAttribute(n) !== e && t.setAttribute(n, e);
    }
    function m(t, n, e, o) {
        t.style.setProperty(n, e, o ? "important" : "");
    }
    let $;
    function v(t) {
        $ = t;
    }
    function b(t) {
        (function () {
            if (!$)
                throw new Error(
                    "Function called outside component initialization"
                );
            return $;
        })().$$.on_destroy.push(t);
    }
    const x = [],
        y = [],
        w = [],
        _ = [],
        k = Promise.resolve();
    let E = !1;
    function j(t) {
        w.push(t);
    }
    const C = new Set();
    let z = 0;
    function A() {
        const t = $;
        do {
            for (; z < x.length; ) {
                const t = x[z];
                z++, v(t), I(t.$$);
            }
            for (v(null), x.length = 0, z = 0; y.length; ) y.pop()();
            for (let t = 0; t < w.length; t += 1) {
                const n = w[t];
                C.has(n) || (C.add(n), n());
            }
            w.length = 0;
        } while (x.length);
        for (; _.length; ) _.pop()();
        (E = !1), C.clear(), v(t);
    }
    function I(t) {
        if (null !== t.fragment) {
            t.update(), o(t.before_update);
            const n = t.dirty;
            (t.dirty = [-1]),
                t.fragment && t.fragment.p(t.ctx, n),
                t.after_update.forEach(j);
        }
    }
    const N = new Set();
    let O;
    function B() {
        O = { r: 0, c: [], p: O };
    }
    function S() {
        O.r || o(O.c), (O = O.p);
    }
    function T(t, n) {
        t && t.i && (N.delete(t), t.i(n));
    }
    function K(t, n, e, o) {
        if (t && t.o) {
            if (N.has(t)) return;
            N.add(t),
                O.c.push(() => {
                    N.delete(t), o && (e && t.d(1), o());
                }),
                t.o(n);
        }
    }
    function L(t) {
        t && t.c();
    }
    function P(t, e, c, l) {
        const {
            fragment: s,
            on_mount: u,
            on_destroy: i,
            after_update: f,
        } = t.$$;
        s && s.m(e, c),
            l ||
                j(() => {
                    const e = u.map(n).filter(r);
                    i ? i.push(...e) : o(e), (t.$$.on_mount = []);
                }),
            f.forEach(j);
    }
    function q(t, n) {
        const e = t.$$;
        null !== e.fragment &&
            (o(e.on_destroy),
            e.fragment && e.fragment.d(n),
            (e.on_destroy = e.fragment = null),
            (e.ctx = []));
    }
    function F(t, n) {
        -1 === t.$$.dirty[0] &&
            (x.push(t), E || ((E = !0), k.then(A)), t.$$.dirty.fill(0)),
            (t.$$.dirty[(n / 31) | 0] |= 1 << n % 31);
    }
    function M(n, r, c, l, s, u, f, a = [-1]) {
        const d = $;
        v(n);
        const g = (n.$$ = {
            fragment: null,
            ctx: null,
            props: u,
            update: t,
            not_equal: s,
            bound: e(),
            on_mount: [],
            on_destroy: [],
            on_disconnect: [],
            before_update: [],
            after_update: [],
            context: new Map(r.context || (d ? d.$$.context : [])),
            callbacks: e(),
            dirty: a,
            skip_bound: !1,
            root: r.target || d.$$.root,
        });
        f && f(g.root);
        let h = !1;
        if (
            ((g.ctx = c
                ? c(n, r.props || {}, (t, e, ...o) => {
                      const r = o.length ? o[0] : e;
                      return (
                          g.ctx &&
                              s(g.ctx[t], (g.ctx[t] = r)) &&
                              (!g.skip_bound && g.bound[t] && g.bound[t](r),
                              h && F(n, t)),
                          e
                      );
                  })
                : []),
            g.update(),
            (h = !0),
            o(g.before_update),
            (g.fragment = !!l && l(g.ctx)),
            r.target)
        ) {
            if (r.hydrate) {
                const t = (function (t) {
                    return Array.from(t.childNodes);
                })(r.target);
                g.fragment && g.fragment.l(t), t.forEach(i);
            } else g.fragment && g.fragment.c();
            r.intro && T(n.$$.fragment),
                P(n, r.target, r.anchor, r.customElement),
                A();
        }
        v(d);
    }
    class D {
        $destroy() {
            q(this, 1), (this.$destroy = t);
        }
        $on(t, n) {
            const e = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
            return (
                e.push(n),
                () => {
                    const t = e.indexOf(n);
                    -1 !== t && e.splice(t, 1);
                }
            );
        }
        $set(t) {
            var n;
            this.$$set &&
                ((n = t), 0 !== Object.keys(n).length) &&
                ((this.$$.skip_bound = !0),
                this.$$set(t),
                (this.$$.skip_bound = !1));
        }
    }
    var G = {
        0: { css: "#000000", text: "⬛" },
        1: { css: "#ffffff", text: "⬜" },
        2: { css: "#df2540", text: "🟥" },
        3: { css: "#c3694d", text: "🟫" },
        4: { css: "#f49200", text: "🟧" },
        5: { css: "#fdcd56", text: "🟨" },
        6: { css: "#7ab357", text: "🟩" },
        7: { css: "#53afef", text: "🟦" },
        8: { css: "#ac90d8", text: "🟪" },
    };
    const H = [];
    function J(n, e = t) {
        let o;
        const r = new Set();
        function l(t) {
            if (c(n, t) && ((n = t), o)) {
                const t = !H.length;
                for (const t of r) t[1](), H.push(t, n);
                if (t) {
                    for (let t = 0; t < H.length; t += 2) H[t][0](H[t + 1]);
                    H.length = 0;
                }
            }
        }
        return {
            set: l,
            update: function (t) {
                l(t(n));
            },
            subscribe: function (c, s = t) {
                const u = [c, s];
                return (
                    r.add(u),
                    1 === r.size && (o = e(l) || t),
                    c(n),
                    () => {
                        r.delete(u), 0 === r.size && (o(), (o = null));
                    }
                );
            },
        };
    }
    const Q = J(!1),
        R = J([
            "00000000",
            "00000000",
            "00000000",
            "00000000",
            "00000000",
            "00000000",
            "00000000",
            "00000000",
            "00000000",
            "00000000",
            "00000000",
            "00000000",
            "00000000",
            "00000000",
            "00000000",
        ]),
        U = J(1);
    function V(n) {
        let e, r, c, l;
        return {
            c() {
                (e = a("div")),
                    (r = d(" ")),
                    p(e, "class", "cell svelte-1vs48z8"),
                    m(e, "background-color", G[n[0]].css);
            },
            m(t, o) {
                u(t, e, o),
                    s(e, r),
                    c ||
                        ((l = [
                            h(e, "mouseover", n[5]),
                            h(e, "mousedown", n[6]),
                        ]),
                        (c = !0));
            },
            p(t, [n]) {
                1 & n && m(e, "background-color", G[t[0]].css);
            },
            i: t,
            o: t,
            d(t) {
                t && i(e), (c = !1), o(l);
            },
        };
    }
    function W(t, n, e) {
        let { color: o = 5 } = n,
            { x: r } = n,
            { y: c } = n,
            { onInteract: l = () => {} } = n,
            s = !1;
        function u(t, n) {
            (s || t) && l(r, c, n);
        }
        b(Q.subscribe((t) => (s = t)));
        return (
            (t.$$set = (t) => {
                "color" in t && e(0, (o = t.color)),
                    "x" in t && e(2, (r = t.x)),
                    "y" in t && e(3, (c = t.y)),
                    "onInteract" in t && e(4, (l = t.onInteract));
            }),
            [o, u, r, c, l, (t) => u(!1, t), (t) => u(!0, t)]
        );
    }
    class X extends D {
        constructor(t) {
            super(),
                M(this, t, W, V, c, { color: 0, x: 2, y: 3, onInteract: 4 });
        }
    }
    function Y(t, n, e) {
        const o = t.slice();
        return (o[7] = n[e]), (o[9] = e), o;
    }
    function Z(t, n, e) {
        const o = t.slice();
        return (o[10] = n[e]), (o[12] = e), o;
    }
    function tt(t) {
        let n, e;
        return (
            (n = new X({
                props: { x: t[12], y: t[9], color: t[10], onInteract: t[1] },
            })),
            {
                c() {
                    L(n.$$.fragment);
                },
                m(t, o) {
                    P(n, t, o), (e = !0);
                },
                p(t, e) {
                    const o = {};
                    1 & e && (o.color = t[10]), n.$set(o);
                },
                i(t) {
                    e || (T(n.$$.fragment, t), (e = !0));
                },
                o(t) {
                    K(n.$$.fragment, t), (e = !1);
                },
                d(t) {
                    q(n, t);
                },
            }
        );
    }
    function nt(t) {
        let n,
            e,
            o,
            r = t[7],
            c = [];
        for (let n = 0; n < r.length; n += 1) c[n] = tt(Z(t, r, n));
        const l = (t) =>
            K(c[t], 1, 1, () => {
                c[t] = null;
            });
        return {
            c() {
                n = a("div");
                for (let t = 0; t < c.length; t += 1) c[t].c();
                (e = g()), p(n, "class", "canvas-row svelte-10nvhjs");
            },
            m(t, r) {
                u(t, n, r);
                for (let t = 0; t < c.length; t += 1) c[t].m(n, null);
                s(n, e), (o = !0);
            },
            p(t, o) {
                if (3 & o) {
                    let s;
                    for (r = t[7], s = 0; s < r.length; s += 1) {
                        const l = Z(t, r, s);
                        c[s]
                            ? (c[s].p(l, o), T(c[s], 1))
                            : ((c[s] = tt(l)),
                              c[s].c(),
                              T(c[s], 1),
                              c[s].m(n, e));
                    }
                    for (B(), s = r.length; s < c.length; s += 1) l(s);
                    S();
                }
            },
            i(t) {
                if (!o) {
                    for (let t = 0; t < r.length; t += 1) T(c[t]);
                    o = !0;
                }
            },
            o(t) {
                c = c.filter(Boolean);
                for (let t = 0; t < c.length; t += 1) K(c[t]);
                o = !1;
            },
            d(t) {
                t && i(n), f(c, t);
            },
        };
    }
    function et(t) {
        let n,
            e,
            r,
            c,
            l = t[0],
            s = [];
        for (let n = 0; n < l.length; n += 1) s[n] = nt(Y(t, l, n));
        const d = (t) =>
            K(s[t], 1, 1, () => {
                s[t] = null;
            });
        return {
            c() {
                n = a("div");
                for (let t = 0; t < s.length; t += 1) s[t].c();
                p(n, "class", "canvas-grid svelte-10nvhjs");
            },
            m(o, l) {
                u(o, n, l);
                for (let t = 0; t < s.length; t += 1) s[t].m(n, null);
                (e = !0),
                    r ||
                        ((c = [h(n, "mousedown", t[2]), h(n, "mouseup", t[3])]),
                        (r = !0));
            },
            p(t, [e]) {
                if (3 & e) {
                    let o;
                    for (l = t[0], o = 0; o < l.length; o += 1) {
                        const r = Y(t, l, o);
                        s[o]
                            ? (s[o].p(r, e), T(s[o], 1))
                            : ((s[o] = nt(r)),
                              s[o].c(),
                              T(s[o], 1),
                              s[o].m(n, null));
                    }
                    for (B(), o = l.length; o < s.length; o += 1) d(o);
                    S();
                }
            },
            i(t) {
                if (!e) {
                    for (let t = 0; t < l.length; t += 1) T(s[t]);
                    e = !0;
                }
            },
            o(t) {
                s = s.filter(Boolean);
                for (let t = 0; t < s.length; t += 1) K(s[t]);
                e = !1;
            },
            d(t) {
                t && i(n), f(s, t), (r = !1), o(c);
            },
        };
    }
    function ot(t, n, e) {
        let o = [];
        b(R.subscribe((t) => e(0, (o = t))));
        let r = 1;
        b(U.subscribe((t) => (r = t)));
        return [
            o,
            function (t, n, c) {
                var l, s, u;
                c.shiftKey
                    ? U.set(o[n][t])
                    : (e(
                          0,
                          (o[n] =
                              ((l = o[n]),
                              (u = r),
                              (s = t) > l.length - 1
                                  ? l
                                  : l.substring(0, s) +
                                    u +
                                    l.substring(s + 1))),
                          o
                      ),
                      R.set(o));
            },
            () => Q.set(!0),
            () => Q.set(!1),
        ];
    }
    class rt extends D {
        constructor(t) {
            super(), M(this, t, ot, et, c, {});
        }
    }
    function ct(t, n, e) {
        const o = t.slice();
        return (o[5] = n[e]), (o[7] = e), o;
    }
    function lt(t) {
        let n, e, o;
        function r(...n) {
            return t[1](t[7], ...n);
        }
        return {
            c() {
                (n = a("div")),
                    p(n, "class", "swatch svelte-zjgomw"),
                    m(n, "background-color", G[t[7]].css);
            },
            m(t, c) {
                u(t, n, c), e || ((o = h(n, "click", r)), (e = !0));
            },
            p(n, e) {
                t = n;
            },
            d(t) {
                t && i(n), (e = !1), o();
            },
        };
    }
    function st(n) {
        let e,
            o = { length: 9 },
            r = [];
        for (let t = 0; t < o.length; t += 1) r[t] = lt(ct(n, o, t));
        return {
            c() {
                e = a("div");
                for (let t = 0; t < r.length; t += 1) r[t].c();
                p(e, "class", "palette svelte-zjgomw");
            },
            m(t, n) {
                u(t, e, n);
                for (let t = 0; t < r.length; t += 1) r[t].m(e, null);
            },
            p(t, [n]) {
                if (1 & n) {
                    let c;
                    for (o = { length: 9 }, c = 0; c < o.length; c += 1) {
                        const l = ct(t, o, c);
                        r[c]
                            ? r[c].p(l, n)
                            : ((r[c] = lt(l)), r[c].c(), r[c].m(e, null));
                    }
                    for (; c < r.length; c += 1) r[c].d(1);
                    r.length = o.length;
                }
            },
            i: t,
            o: t,
            d(t) {
                t && i(e), f(r, t);
            },
        };
    }
    function ut(t) {
        function n(t, n) {
            n.shiftKey
                ? (function (t) {
                      R.set([...Array(15)].map((n) => ("" + t).repeat(8)));
                  })(t)
                : U.set(t);
        }
        b(U.subscribe((t) => t));
        return [n, (t, e) => n(t, e)];
    }
    class it extends D {
        constructor(t) {
            super(), M(this, t, ut, st, c, {});
        }
    }
    function ft(t, n, e) {
        const o = t.slice();
        return (o[5] = n[e]), (o[7] = e), o;
    }
    function at(t, n, e) {
        const o = t.slice();
        return (o[8] = n[e]), (o[10] = e), o;
    }
    function dt(t) {
        let n,
            e = G[t[8]].text + "";
        return {
            c() {
                n = d(e);
            },
            m(t, e) {
                u(t, n, e);
            },
            p(t, o) {
                2 & o &&
                    e !== (e = G[t[8]].text + "") &&
                    (function (t, n) {
                        (n = "" + n), t.wholeText !== n && (t.data = n);
                    })(n, e);
            },
            d(t) {
                t && i(n);
            },
        };
    }
    function gt(t) {
        let n,
            e,
            o = t[5],
            r = [];
        for (let n = 0; n < o.length; n += 1) r[n] = dt(at(t, o, n));
        return {
            c() {
                for (let t = 0; t < r.length; t += 1) r[t].c();
                (n = g()), (e = a("br"));
            },
            m(t, o) {
                for (let n = 0; n < r.length; n += 1) r[n].m(t, o);
                u(t, n, o), u(t, e, o);
            },
            p(t, e) {
                if (2 & e) {
                    let c;
                    for (o = t[5], c = 0; c < o.length; c += 1) {
                        const l = at(t, o, c);
                        r[c]
                            ? r[c].p(l, e)
                            : ((r[c] = dt(l)),
                              r[c].c(),
                              r[c].m(n.parentNode, n));
                    }
                    for (; c < r.length; c += 1) r[c].d(1);
                    r.length = o.length;
                }
            },
            d(t) {
                f(r, t), t && i(n), t && i(e);
            },
        };
    }
    function ht(n) {
        let e,
            o,
            r,
            c,
            l,
            d,
            m = n[1],
            $ = [];
        for (let t = 0; t < m.length; t += 1) $[t] = gt(ft(n, m, t));
        return {
            c() {
                (e = a("div")),
                    (o = a("div")),
                    (o.textContent = "Output"),
                    (r = g()),
                    (c = a("div"));
                for (let t = 0; t < $.length; t += 1) $[t].c();
                p(o, "class", "label svelte-13a4chv"),
                    p(c, "class", "wrapper svelte-13a4chv"),
                    p(e, "class", "output");
            },
            m(t, i) {
                u(t, e, i), s(e, o), s(e, r), s(e, c);
                for (let t = 0; t < $.length; t += 1) $[t].m(c, null);
                n[3](c), l || ((d = h(c, "click", n[2])), (l = !0));
            },
            p(t, [n]) {
                if (2 & n) {
                    let e;
                    for (m = t[1], e = 0; e < m.length; e += 1) {
                        const o = ft(t, m, e);
                        $[e]
                            ? $[e].p(o, n)
                            : (($[e] = gt(o)), $[e].c(), $[e].m(c, null));
                    }
                    for (; e < $.length; e += 1) $[e].d(1);
                    $.length = m.length;
                }
            },
            i: t,
            o: t,
            d(t) {
                t && i(e), f($, t), n[3](null), (l = !1), d();
            },
        };
    }
    function pt(t, n, e) {
        let o,
            r = [];
        return (
            b(R.subscribe((t) => e(1, (r = t)))),
            [
                o,
                r,
                function () {
                    navigator &&
                        navigator.clipboard &&
                        navigator.clipboard.writeText(
                            o.textContent.replaceAll(" ", "\n")
                        );
                },
                function (t) {
                    y[t ? "unshift" : "push"](() => {
                        (o = t), e(0, o);
                    });
                },
            ]
        );
    }
    class mt extends D {
        constructor(t) {
            super(), M(this, t, pt, ht, c, {});
        }
    }
    function $t(n) {
        let e, o, r, c;
        return {
            c() {
                (e = a("div")),
                    (o = a("div")),
                    (o.textContent = "Current Color"),
                    (r = g()),
                    (c = a("div")),
                    p(o, "class", "label svelte-gv6m93"),
                    p(c, "class", "swatch current-color svelte-gv6m93"),
                    m(c, "background-color", G[n[0]].css),
                    p(e, "class", "wrapper svelte-gv6m93");
            },
            m(t, n) {
                u(t, e, n), s(e, o), s(e, r), s(e, c);
            },
            p(t, [n]) {
                1 & n && m(c, "background-color", G[t[0]].css);
            },
            i: t,
            o: t,
            d(t) {
                t && i(e);
            },
        };
    }
    function vt(t, n, e) {
        let o;
        return l(t, U, (t) => e(0, (o = t))), [o];
    }
    class bt extends D {
        constructor(t) {
            super(), M(this, t, vt, $t, c, {});
        }
    }
    function xt(n) {
        let e, o, r, c, l, f, d, h, m, $, v, b;
        return (
            (c = new rt({})),
            (d = new it({})),
            (m = new bt({})),
            (v = new mt({})),
            {
                c() {
                    (e = a("main")),
                        (o = a("div")),
                        (r = a("div")),
                        L(c.$$.fragment),
                        (l = g()),
                        (f = a("div")),
                        L(d.$$.fragment),
                        (h = g()),
                        L(m.$$.fragment),
                        ($ = g()),
                        L(v.$$.fragment),
                        p(r, "class", "col left svelte-1el9hg5"),
                        p(f, "class", "col right svelte-1el9hg5"),
                        p(o, "class", "container svelte-1el9hg5"),
                        p(e, "class", "svelte-1el9hg5");
                },
                m(t, n) {
                    u(t, e, n),
                        s(e, o),
                        s(o, r),
                        P(c, r, null),
                        s(o, l),
                        s(o, f),
                        P(d, f, null),
                        s(f, h),
                        P(m, f, null),
                        s(f, $),
                        P(v, f, null),
                        (b = !0);
                },
                p: t,
                i(t) {
                    b ||
                        (T(c.$$.fragment, t),
                        T(d.$$.fragment, t),
                        T(m.$$.fragment, t),
                        T(v.$$.fragment, t),
                        (b = !0));
                },
                o(t) {
                    K(c.$$.fragment, t),
                        K(d.$$.fragment, t),
                        K(m.$$.fragment, t),
                        K(v.$$.fragment, t),
                        (b = !1);
                },
                d(t) {
                    t && i(e), q(c), q(d), q(m), q(v);
                },
            }
        );
    }
    return new (class extends D {
        constructor(t) {
            super(), M(this, t, null, xt, c, {});
        }
    })({ target: document.body, props: {} });
})();
//# sourceMappingURL=bundle.js.map
