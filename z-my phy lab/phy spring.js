(/*Copyright_2020_Erik_Neumann_All_Rights_Reserved_www.myphysicslab.com*/
function() {
    /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
    'use strict';
    var aa = this || self;
    function ba() {}
    function ca(a) {
        var b = typeof a;
        b = "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null";
        return "array" == b || "object" == b && "number" == typeof a.length
    }
    function p(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    }
    function da(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.tb = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.Zb = function(d, e, f) {
            for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++)
                g[h - 2] = arguments[h];
            return b.prototype[e].apply(d, g)
        }
    }
    ;const ea = Array.prototype.indexOf ? function(a, b) {
        return Array.prototype.indexOf.call(a, b, void 0)
    }
    : function(a, b) {
        if ("string" === typeof a)
            return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++)
            if (c in a && a[c] === b)
                return c;
        return -1
    }
      , fa = Array.prototype.forEach ? function(a, b) {
        Array.prototype.forEach.call(a, b, void 0)
    }
    : function(a, b) {
        for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
            e in d && b.call(void 0, d[e], e, a)
    }
    ;
    function ha(a, b) {
        for (var c = "string" === typeof a ? a.split("") : a, d = a.length - 1; 0 <= d; --d)
            d in c && b.call(void 0, c[d], d, a)
    }
    const ia = Array.prototype.filter ? function(a, b, c) {
        return Array.prototype.filter.call(a, b, c)
    }
    : function(a, b, c) {
        for (var d = a.length, e = [], f = 0, g = "string" === typeof a ? a.split("") : a, h = 0; h < d; h++)
            if (h in g) {
                var l = g[h];
                b.call(c, l, h, a) && (e[f++] = l)
            }
        return e
    }
      , ja = Array.prototype.reduce ? function(a, b, c) {
        return Array.prototype.reduce.call(a, b, c)
    }
    : function(a, b, c) {
        var d = c;
        fa(a, function(e, f) {
            d = b.call(void 0, d, e, f, a)
        });
        return d
    }
    ;
    function ka(a, b) {
        var c = 0;
        fa(a, function(d, e, f) {
            b.call(void 0, d, e, f) && ++c
        });
        return c
    }
    function la(a, b) {
        b = ma(a, b);
        return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
    }
    function ma(a, b) {
        for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a))
                return e;
        return -1
    }
    function na(a, b) {
        b = ea(a, b);
        var c;
        (c = 0 <= b) && Array.prototype.splice.call(a, b, 1);
        return c
    }
    function oa(a, b, c) {
        var d = 0;
        ha(a, function(e, f) {
            b.call(c, e, f, a) && 1 == Array.prototype.splice.call(a, f, 1).length && d++
        })
    }
    function pa(a) {
        return Array.prototype.concat.apply([], arguments)
    }
    function qa(a, b, c, d) {
        Array.prototype.splice.apply(a, ra(arguments, 1))
    }
    function ra(a, b, c) {
        return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
    }
    function sa(a, b) {
        a.sort(b || ta)
    }
    function ua(a, b) {
        for (var c = Array(a.length), d = 0; d < a.length; d++)
            c[d] = {
                index: d,
                value: a[d]
            };
        var e = b || ta;
        sa(c, function(f, g) {
            return e(f.value, g.value) || f.index - g.index
        });
        for (d = 0; d < a.length; d++)
            a[d] = c[d].value
    }
    function ta(a, b) {
        return a > b ? 1 : a < b ? -1 : 0
    }
    function va(a) {
        for (var b = [], c = 0; c < a; c++)
            b[c] = -1;
        return b
    }
    ;function q(a) {
        const b = document.createElement("img");
        b.src = a;
        b.width = 30;
        b.height = 30;
        return b
    }
    function r(a, b) {
        a = a[b];
        if ("string" !== typeof a)
            throw "unknown elementId: " + b;
        b = document.getElementById(a);
        if (!p(b))
            throw "not found: element with id=" + a;
        return b
    }
    function wa(a, b) {
        a = a[b];
        if ("string" !== typeof a)
            throw "unknown elementId: " + b;
        return document.getElementById(a)
    }
    function xa(a) {
        var b, c;
        "number" !== typeof b && (b = 2);
        "string" !== typeof c && (c = "  ");
        const d = String(a);
        let e = ""
          , f = 0;
        const g = d.length;
        var h = !1;
        const l = [];
        var k = "";
        a: for (let n = 0; n < g; n++) {
            var m = d.charAt(n);
            if (h)
                if (" " == m)
                    continue;
                else
                    h = !1;
            if ("{" == m || "[" == m) {
                f++;
                if (f <= b) {
                    e += m + "\n";
                    for (h = 0; h < f; h++)
                        e += c;
                    h = !0
                } else
                    e += m;
                l.push(k);
                k = "{" == m ? "}" : "]"
            } else if (m == k) {
                if (f <= b)
                    for (f--,
                    e += "\n",
                    k = 0; k < f; k++)
                        e += c;
                else
                    f--;
                e += m;
                k = l.pop();
                if (0 > f)
                    throw "unbalanced " + k + " at " + n + " in " + a;
            } else {
                if ('"' == m || "'" == m) {
                    const w = m
                      , C = n;
                    for (e += m; ++n < g; )
                        if (m = d.charAt(n),
                        e += m,
                        m == w)
                            continue a;
                    throw "unbalanced quote at " + C + " in " + a;
                }
                if (("," == m || ";" == m) && f <= b) {
                    e += m + "\n";
                    for (m = 0; m < f; m++)
                        e += c;
                    h = !0
                } else
                    e += m
            }
        }
        return e = e.replace(/^\s+\n/gm, "")
    }
    function ya() {
        window.onerror = function(a, b, c) {
            3 > za++ && alert(a + "\n" + b + ":" + c)
        }
    }
    function Aa(a) {
        if (void 0 !== a)
            Ba = a;
        else
            throw "images directory not found";
    }
    function u() {
        return Ca && !Da ? .001 * performance.now() : .001 * Date.now()
    }
    function Ea(a) {
        if (!isFinite(a))
            throw "not a finite number " + a;
        return a
    }
    function Fa(a) {
        if (isNaN(a))
            throw "not a number " + a;
        return a
    }
    function v(a) {
        return a.toUpperCase().replace(/[ -]/g, "_")
    }
    function Ga(a) {
        if (!a.match(/^[A-Z_][A-Z_0-9]*$/))
            throw "not a valid name: " + a;
        return a
    }
    function x(a, b, c) {
        c = c || 1E-14;
        if (isNaN(a) || isNaN(b))
            throw "argument is NaN";
        if (0 >= c)
            throw "epsilon must be positive " + c;
        var d = d || 1;
        if (0 >= d)
            throw "magnitude must be positive " + d;
        const e = Math.max(Math.abs(a), Math.abs(b));
        return Math.abs(a - b) > (e > d ? e : d) * c
    }
    function Ha(a) {
        const b = a.length;
        for (let c = 0; c < b; c++)
            a[c] = 0
    }
    var Ba = "."
      , Ia = Math.pow(2, 53)
      , Da = !1
      , Ca = p(performance) && "function" === typeof performance.now
      , Ja = Number.NaN
      , Ka = Number.NEGATIVE_INFINITY
      , za = 0
      , La = Number.POSITIVE_INFINITY;
    class y {
        constructor(a, b, c) {
            this.h = Ga(v(b));
            this.i = a;
            this.g = c
        }
        toString() {
            return this.H()
        }
        H() {
            const a = this.g;
            "object" === typeof a && null !== a && void 0 !== a.H && a.H();
            return ""
        }
        F() {
            return this.h
        }
        P() {
            return this.i
        }
        J() {
            return this.g
        }
        L(a) {
            return this.h == v(a)
        }
    }
    ;function Ma(a, b) {
        if ("boolean" !== typeof b)
            throw "non-boolean value: " + b;
        b !== a.J() && a.A(b)
    }
    class z {
        constructor(a, b, c, d, e) {
            this.B = a;
            this.g = Ga(v(b));
            this.v = c;
            this.u = d;
            this.A = e;
            this.h = !1;
            this.s = [];
            this.C = []
        }
        toString() {
            return ""
        }
        H() {
            return ""
        }
        m() {
            return this.J().toString()
        }
        l() {
            return Array.from(this.s)
        }
        F(a) {
            return a ? this.v : this.g
        }
        P() {
            return this.B
        }
        J() {
            return this.u()
        }
        i() {
            return this.C.map(a=>a.toString())
        }
        fa() {
            return this.h
        }
        L(a) {
            return this.g == v(a)
        }
        j(a) {
            this.h = a
        }
        o(a) {
            Ma(this, "true" == a || "TRUE" == a)
        }
    }
    ;function Na(a, b, c) {
        if (c.length !== b.length)
            throw "choices and values not same length";
        a.A = b;
        a.h = c;
        b = new y(a.u,"CHOICES_MODIFIED",a);
        A(a.u, b)
    }
    function Oa(a, b) {
        if ("number" !== typeof b)
            throw "not a number: " + b;
        if (b < a.v || b > a.g)
            throw "out of range. " + b + " is not between " + a.v + " and " + a.g;
        if (0 < a.h.length && !a.h.includes(b))
            throw b + " is not an allowed value among: [" + a.h.join(",") + "]";
        b !== a.J() && a.I(b)
    }
    function Pa(a, b) {
        if (b > a.J() || b > a.g)
            throw "out of range: " + b + " value=" + a.J() + " upper=" + a.g;
        a.v = b;
        return a
    }
    function Qa(a, b) {
        a.s = b;
        return a
    }
    class B {
        constructor(a, b, c, d, e) {
            this.u = a;
            this.C = Ga(v(b));
            this.G = c;
            this.D = d;
            this.I = e;
            this.B = !1;
            this.s = 3;
            this.v = 0;
            this.g = La;
            this.A = [];
            this.h = []
        }
        toString() {
            return ""
        }
        H() {
            return ""
        }
        m() {
            return this.J().toString()
        }
        l() {
            return Array.from(this.A)
        }
        F(a) {
            return a ? this.G : this.C
        }
        P() {
            return this.u
        }
        J() {
            return this.D()
        }
        i() {
            return this.h.map(a=>a.toString())
        }
        fa() {
            return this.B
        }
        L(a) {
            return this.C == v(a)
        }
        j(a) {
            this.B = a
        }
        o(a) {
            const b = Number(a);
            if (isNaN(b))
                throw "not a number: " + a;
            Oa(this, b)
        }
    }
    ;class Ra {
        constructor(a, b, c, d, e, f, g) {
            this.D = a;
            this.u = Ga(v(b));
            this.B = c;
            this.A = d;
            this.C = e;
            this.s = !1;
            this.v = La;
            this.g = [];
            this.h = [];
            if (null != f)
                if (null != g) {
                    this.g = f;
                    if (g.length !== f.length)
                        throw "different lengths choices:" + f + " values:" + g;
                    this.h = g
                } else
                    throw "values is not defined";
        }
        toString() {
            return ""
        }
        H() {
            return ""
        }
        m() {
            return this.J()
        }
        l() {
            return Array.from(this.g)
        }
        F(a) {
            return a ? this.B : this.u
        }
        P() {
            return this.D
        }
        J() {
            return this.A()
        }
        i() {
            return Array.from(this.h)
        }
        fa() {
            return this.s
        }
        L(a) {
            return this.u == v(a)
        }
        j(a) {
            this.s = a
        }
        o(a) {
            if ("string" !== typeof a)
                throw "non-string value: " + a;
            if (a.length > this.v)
                throw "string too long: " + a + " maxLength=" + this.v;
            if (0 < this.h.length && !this.h.includes(a))
                throw '"' + a + '" is not an allowed value among: [' + this.h.join(",") + "]";
            a !== this.J() && this.C(a)
        }
    }
    ;function A(a, b) {
        a.Y = !0;
        try {
            a.U.forEach(c=>c.i(b))
        } finally {
            a.Y = !1,
            Sa(a)
        }
    }
    function Sa(a) {
        if (!a.Y) {
            for (let b = 0, c = a.V.length; b < c; b++) {
                const d = a.V[b];
                d.action ? a.U.includes(d.Va) || a.U.push(d.Va) : na(a.U, d.Va)
            }
            a.V = []
        }
    }
    function Ta(a, b) {
        a.V.push({
            action: !0,
            Va: b
        });
        Sa(a)
    }
    function Ua(a, b) {
        b = v(b);
        return la(a.Z, c=>c.F() == b)
    }
    function D(a, b) {
        const c = Ua(a, b);
        if (null == c)
            throw "unknown Parameter " + b;
        A(a, c)
    }
    function Va(a) {
        var b = E.ta;
        a = Ua(a, b);
        if (a instanceof z)
            return a;
        throw "ParameterBoolean not found " + b;
    }
    function G(a, b) {
        a = Ua(a, b);
        if (a instanceof B)
            return a;
        throw "ParameterNumber not found " + b;
    }
    function Wa(a, b) {
        a = Ua(a, b);
        if (a instanceof Ra)
            return a;
        throw "ParameterString not found " + b;
    }
    class H {
        constructor(a) {
            if (!a)
                throw "no name";
            this.Aa = Ga(v(a));
            this.U = [];
            this.Z = [];
            this.Y = !1;
            this.V = []
        }
        toString() {
            return ""
        }
        H() {
            return ""
        }
        h(a) {
            const b = a.F()
              , c = Ua(this, b);
            if (null != c)
                throw "parameter " + b + " already exists: " + c;
            this.Z.push(a)
        }
        F() {
            return this.Aa
        }
        S(a) {
            const b = Ua(this, a);
            if (null != b)
                return b;
            throw "Parameter not found " + a;
        }
        getParameters() {
            return Array.from(this.Z)
        }
    }
    ;function Xa(a) {
        return a instanceof I ? a : new I(a.g(),a.h(),a.o())
    }
    function Ya(a, b) {
        const c = a.i - b.g()
          , d = a.j - b.h();
        a = a.l - b.o();
        return Math.sqrt(c * c + d * d + a * a)
    }
    function Za(a) {
        isNaN(a.m) && (a.m = 0 === a.l ? a.i * a.i + a.j * a.j : a.i * a.i + a.j * a.j + a.l * a.l);
        return a.m
    }
    function $a(a, b) {
        return new I(a.i - b.g(),a.j - b.h(),a.l - b.o())
    }
    class I {
        constructor(a, b, c) {
            c = "number" === typeof c ? c : 0;
            this.i = Fa(a);
            this.j = Fa(b);
            this.l = Fa(c);
            this.m = this.s = Ja
        }
        toString() {
            return ""
        }
        add(a) {
            return new I(this.i + a.g(),this.j + a.h(),this.l + a.o())
        }
        v(a) {
            return null === a ? !1 : a.g() === this.i && a.h() === this.j && a.o() === this.l
        }
        g() {
            return this.i
        }
        h() {
            return this.j
        }
        o() {
            return this.l
        }
        length() {
            isNaN(this.s) && (this.s = Math.sqrt(Za(this)));
            return this.s
        }
        A(a, b) {
            return x(this.i, a.g(), b) || x(this.j, a.h(), b) || x(this.l, a.o(), b) ? !1 : !0
        }
    }
    new I(1,0);
    new I(0,1);
    var ab = new I(0,0);
    new I(0,-1);
    new I(-1,0);
    function bb(a, b) {
        return b.g() >= a.s && b.g() <= a.h && b.h() >= a.g && b.h() <= a.u
    }
    function cb(a) {
        return (a.s + a.h) / 2
    }
    function db(a) {
        return (a.g + a.u) / 2
    }
    function eb(a) {
        return new I(cb(a),db(a))
    }
    function fb(a, b, c) {
        if (bb(a, b) || bb(a, c))
            return !0;
        const d = b.g();
        b = b.h();
        const e = c.g();
        c = c.h();
        let f = a.s;
        if (d < f && e < f)
            return !1;
        f = a.h;
        if (d > f && e > f)
            return !1;
        f = a.g;
        if (b < f && c < f)
            return !1;
        f = a.u;
        return b > f && c > f ? !1 : !0
    }
    class K {
        constructor(a, b, c, d) {
            this.s = Fa(a);
            this.h = Fa(c);
            this.g = Fa(b);
            this.u = Fa(d);
            if (a > c)
                throw "DoubleRect: left > right " + a + " > " + c;
            if (b > d)
                throw "DoubleRect: bottom > top " + b + " > " + d;
        }
        toString() {
            return ""
        }
        v(a) {
            return a === this ? !0 : a instanceof K ? a.o() == this.s && a.h == this.h && a.g == this.g && a.l() == this.u : !1
        }
        j() {
            return this.u - this.g
        }
        o() {
            return this.s
        }
        l() {
            return this.u
        }
        i() {
            return this.h - this.s
        }
        m() {
            return 1E-16 > this.i() || 1E-16 > this.j()
        }
        A(a, b) {
            return x(this.s, a.o(), b) || x(this.g, a.g, b) || x(this.h, a.h, b) || x(this.u, a.l(), b) ? !1 : !0
        }
        scale(a, b) {
            b = void 0 === b ? a : b;
            const c = cb(this)
              , d = db(this)
              , e = this.i()
              , f = this.j();
            return new K(c - a * e / 2,d - b * f / 2,c + a * e / 2,d + b * f / 2)
        }
        translate(a, b) {
            "number" !== typeof a && (b = a.h(),
            a = a.g());
            if ("number" !== typeof a || "number" !== typeof b)
                throw "";
            return new K(this.s + a,this.g + b,this.h + a,this.u + b)
        }
    }
    var gb = new K(0,0,0,0);
    function hb(a, b) {
        if (1E5 > a.h)
            return b;
        a = b + 1E5 * (a.j - (b < a.g ? 0 : 1));
        if (a >= Ia)
            throw "exceeded max int";
        return a
    }
    function ib(a) {
        return 0 == a.h ? -1 : 0 == a.g ? hb(a, a.h - 1) : hb(a, a.g - 1)
    }
    function jb(a, b) {
        return 1E5 > a.h ? b : b - 1E5 * (a.j - (b % 1E5 < a.g ? 0 : 1))
    }
    function kb(a) {
        const b = ib(a);
        return -1 == b ? null : a.i[jb(a, b)]
    }
    class lb {
        constructor() {
            this.g = this.j = this.h = 0;
            this.l = -1;
            this.i = Array(1E5)
        }
        toString() {
            return ""
        }
        J(a) {
            return this.i[jb(this, a)]
        }
        reset() {
            this.j = this.g = this.h = 0;
            this.l = -1
        }
        store(a) {
            this.l = this.g;
            this.i[this.g] = a;
            this.g++;
            1E5 > this.h && this.h++;
            1E5 <= this.g && (this.j++,
            this.g = 0);
            return hb(this, this.l)
        }
    }
    function mb(a) {
        if (0 == a.h.h)
            throw "no data";
        return a.g
    }
    function nb(a) {
        return a.i || a.g < ib(a.h)
    }
    function ob(a) {
        if (0 === a.h.h)
            throw "no data";
        if (a.i)
            a.i = !1;
        else {
            if (a.g + 1 > ib(a.h))
                throw "cannot iterate past end of list";
            a.g++;
            a.j = jb(a.h, a.g)
        }
        return a.h.i[a.j]
    }
    class pb {
        constructor(a, b) {
            this.i = 0 < a.h;
            this.h = a;
            if (void 0 === b || 0 > b)
                b = 1E5 > a.h ? 0 : hb(a, a.g);
            if (0 < a.h && (b < (1E5 > a.h ? 0 : hb(a, a.g)) || b > ib(a)))
                throw "out of range startIndex=" + b;
            this.g = b;
            this.j = jb(a, b)
        }
        J() {
            if (0 == this.h.h)
                throw "no data";
            return this.h.i[this.j]
        }
    }
    ;var qb = a=>{
        const b = ["dots", "lines"];
        for (let c = 0, d = b.length; c < d; c++)
            if (a == b[c])
                return b[c];
        throw "not found " + a;
    }
      , rb = {
        yb: "Dots",
        LINES: "Lines"
    };
    class sb {
        constructor(a, b, c, d) {
            if (isNaN(a) || isNaN(b))
                throw "NaN in GraphPoint";
            this.x = a;
            this.y = b;
            this.i = c;
            this.j = d
        }
        toString() {
            return ""
        }
        v(a) {
            return this.x == a.x && this.y == a.y && this.i == a.i && this.j == a.j
        }
        g() {
            return this.x
        }
        h() {
            return this.y
        }
        o() {
            return 0
        }
    }
    ;class tb {
        constructor(a, b, c, d) {
            this.j = a;
            this.i = b;
            this.g = c;
            this.h = d
        }
        toString() {
            return ""
        }
    }
    ;class ub {
        constructor(a, b, c) {
            this.A = a;
            this.u = Ga(v(b));
            this.v = c;
            this.h = 0;
            this.s = !1;
            this.g = 0
        }
        toString() {
            return ""
        }
        H() {
            return ""
        }
        m() {
            return this.h.toString()
        }
        l() {
            return []
        }
        F(a) {
            return a ? this.v : this.u
        }
        P() {
            return this.A
        }
        J() {
            return this.h
        }
        i() {
            return []
        }
        fa() {
            return this.s
        }
        L(a) {
            return this.u == v(a)
        }
        j(a) {
            this.s = a
        }
        o(a) {
            const b = Number(a);
            if (isNaN(b))
                throw "not a number: " + a + " (ConcreteVariable.setFromString)";
            this.h != b && (this.h = b,
            this.g++)
        }
    }
    ;function vb(a, b) {
        if (0 > b || b >= a.g.length)
            throw "bad variable index=" + b + "; numVars=" + a.g.length;
    }
    function wb(a) {
        return a.g.map(b=>b.fa() ? NaN : b.J())
    }
    function xb(a, b) {
        let c;
        if ("number" === typeof b)
            c = b;
        else if ("string" === typeof b) {
            if (b = v(b),
            c = ma(a.g, d=>d.F() == b),
            0 > c)
                throw "unknown variable name " + b;
        } else
            throw "";
        vb(a, c);
        return a.g[c]
    }
    function yb(a, b, c, d) {
        vb(a, b);
        a = a.g[b];
        if ("DELETED" != a.F()) {
            if (isNaN(c) && !a.fa())
                throw "cannot set variable " + a.F() + " to NaN";
            d ? a.h = c : a.h != c && (a.h = c,
            a.g++)
        }
    }
    function zb(a, b, c) {
        const d = a.g.length
          , e = b.length;
        if (e > d)
            throw "setValues bad length n=" + e + " > N=" + d;
        for (let f = 0; f < d; f++)
            f < e && yb(a, f, b[f], c)
    }
    class Ab extends H {
        constructor(a, b, c) {
            super(void 0 !== c ? c : "VARIABLES");
            this.i = -1;
            if (a.length != b.length)
                throw "varNames and localNames are different lengths";
            for (let e = 0, f = a.length; e < f; e++) {
                c = a[e];
                if ("string" !== typeof c)
                    throw "variable name " + c + " is not a string i=" + e;
                c = Ga(v(c));
                a[e] = c;
                "TIME" == c && (this.i = e)
            }
            a: {
                c = a.length;
                if (1 < c) {
                    const e = Array(c);
                    for (var d = 0; d < c; d++)
                        e[d] = a[d];
                    sa(e);
                    d = e[0];
                    for (let f = 1; f < c; f++) {
                        if (d == e[f]) {
                            c = !1;
                            break a
                        }
                        d = e[f]
                    }
                }
                c = !0
            }
            if (!c)
                throw "duplicate variable names";
            this.g = [];
            for (let e = 0, f = a.length; e < f; e++)
                this.g.push(new ub(this,a[e],b[e]))
        }
        toString() {
            return ""
        }
        H() {
            return ""
        }
        h() {
            throw "addParameter not allowed on VarsList";
        }
        S(a) {
            a = v(a);
            const b = la(this.g, c=>c.F() == a);
            if (null != b)
                return b;
            throw "Parameter not found " + a;
        }
        getParameters() {
            return Array.from(this.g)
        }
        J(a) {
            vb(this, a);
            return this.g[a].J()
        }
        j(a) {
            if (0 == arguments.length)
                for (let b = 0, c = this.g.length; b < c; b++)
                    this.g[b].g++;
            else
                for (let b = 0, c = arguments.length; b < c; b++) {
                    const d = arguments[b];
                    vb(this, d);
                    this.g[d].g++
                }
        }
        indexOf(a) {
            a = v(a);
            return ma(this.g, b=>b.F() == a)
        }
        l(a) {
            for (let b = 0, c = arguments.length; b < c; b++) {
                const d = arguments[b];
                vb(this, d);
                this.g[d].j(!0)
            }
        }
    }
    var Bb = {
        gb: "time"
    };
    function Cb(a) {
        return a instanceof Db ? !0 : !1
    }
    function Eb(a, b) {
        if (-1 > b || b > a.l.g.length - 1)
            throw "setYVariable bad index " + b;
        b != a.u && (a.u = b,
        a.reset(),
        D(a, L.ba))
    }
    function Fb(a, b) {
        if (-1 > b || b > a.l.g.length - 1)
            throw "setXVariable bad index " + b;
        b != a.j && (a.j = b,
        a.reset(),
        D(a, L.ca))
    }
    function Gb(a) {
        const b = [Hb.NONE]
          , c = [-1];
        for (let d = 0, e = a.l.g.length; d < e; d++)
            b.push(xb(a.l, d).F(!0)),
            c.push(d);
        Na(a.G, b, c);
        Na(a.D, b, c)
    }
    function Ib(a) {
        a.C.push(new tb(ib(a.m) + 1,a.A,a.v,a.B));
        a.s = !0
    }
    function Jb(a, b) {
        b = qb(b);
        a.A != b && (a.A = b,
        Ib(a),
        a.s = !0,
        D(a, L.na))
    }
    function Kb(a, b) {
        a = a.C;
        if (0 == a.length)
            throw "graph styles list is empty";
        let c = a[0];
        for (let d = 1, e = a.length; d < e; d++) {
            const f = a[d];
            if (f.j > b)
                break;
            c = f
        }
        return c
    }
    class Db extends H {
        constructor(a, b) {
            super(a);
            this.l = b;
            Ta(b, this);
            this.u = this.j = -1;
            this.G = Pa(new B(this,L.ba,Hb.ba,()=>this.u,c=>Eb(this, c)), -1);
            this.h(this.G);
            this.D = Pa(new B(this,L.ca,Hb.ca,()=>this.j,c=>Fb(this, c)), -1);
            this.h(this.D);
            Gb(this);
            this.m = new lb;
            this.s = !0;
            this.v = "lime";
            this.A = "lines";
            this.B = 1;
            this.C = [];
            Ib(this);
            this.I = function(c) {
                return c
            }
            ;
            this.K = function(c) {
                return c
            }
            ;
            this.h(new B(this,L.LINE_WIDTH,Hb.LINE_WIDTH,()=>this.B,c=>{
                x(c, this.B) && (this.B = c,
                Ib(this),
                this.s = !0,
                D(this, L.LINE_WIDTH))
            }
            ));
            this.h(new Ra(this,L.na,Hb.na,()=>this.A,c=>Jb(this, qb(c)),[rb.yb, rb.LINES],["dots", "lines"]));
            this.h(new Ra(this,L.pa,Hb.pa,()=>this.v,c=>this.setColor(c)))
        }
        toString() {
            return ""
        }
        H() {
            return ""
        }
        g() {
            return this.l
        }
        o() {
            if (-1 < this.j && -1 < this.u) {
                var a = xb(this.l, this.j)
                  , b = xb(this.l, this.u);
                const c = a.J()
                  , d = b.J();
                a = new sb(this.I(c),this.K(d),a.g,b.g);
                b = kb(this.m);
                null != b && b.v(a) || (this.m.store(a),
                this.s = !0)
            }
        }
        i(a) {
            a.P() == this.l && a.L("VARS_MODIFIED") && Gb(this)
        }
        reset() {
            this.m.reset();
            this.C = [];
            Ib(this);
            this.s = !0;
            this.o();
            A(this, new y(this,"RESET"))
        }
        setColor(a) {
            this.v != a && (this.v = a,
            Ib(this),
            this.s = !0,
            D(this, L.pa))
        }
    }
    var L = {
        na: "draw mode",
        pa: "graph color",
        Vb: "graph draw mode",
        Wb: "graph points",
        LINE_WIDTH: "draw width",
        ca: "X variable",
        ba: "Y variable",
        Za: "clear graph",
        NONE: "-none-"
    }
      , Hb = L;
    function Lb(a, b) {
        b.transform(a.h, a.g, a.i, a.j, a.l, a.o)
    }
    function Mb(a, b) {
        return new Nb(a.h * b.h + a.i * b.g,a.g * b.h + a.j * b.g,a.h * b.i + a.i * b.j,a.g * b.i + a.j * b.j,a.h * b.l + a.i * b.o + a.l,a.g * b.l + a.j * b.o + a.o)
    }
    function Ob(a, b, c, d) {
        a = a.transform(b, c);
        d.lineTo(a.g(), a.h())
    }
    function Pb(a, b) {
        const c = Math.cos(b);
        b = Math.sin(b);
        return new Nb(c * a.h + b * a.i,c * a.g + b * a.j,-b * a.h + c * a.i,-b * a.g + c * a.j,a.l,a.o)
    }
    function Qb(a, b) {
        b.setTransform(a.h, a.g, a.i, a.j, a.l, a.o)
    }
    class Nb {
        constructor(a, b, c, d, e, f) {
            this.h = a;
            this.g = b;
            this.i = c;
            this.j = d;
            this.l = e;
            this.o = f
        }
        toString() {
            return ""
        }
        scale(a, b) {
            return new Nb(this.h * a,this.g * a,this.i * b,this.j * b,this.l,this.o)
        }
        transform(a, b) {
            "number" !== typeof a && (b = a.h(),
            a = a.g());
            if ("number" !== typeof a || "number" !== typeof b)
                throw "need a Vector or two numbers";
            return new I(this.h * a + this.i * b + this.l,this.g * a + this.j * b + this.o)
        }
        translate(a, b) {
            "number" !== typeof a && (b = a.h(),
            a = a.g());
            if ("number" !== typeof a || "number" !== typeof b)
                throw "need a Vector or two numbers";
            return new Nb(this.h,this.g,this.i,this.j,this.l + this.h * a + this.i * b,this.o + this.g * a + this.j * b)
        }
    }
    var Rb = new Nb(1,0,0,1,0,0);
    var Sb = a=>{
        const b = ["LEFT", "MIDDLE", "RIGHT", "FULL", "VALUE"];
        for (let c = 0, d = b.length; c < d; c++)
            if (a === b[c])
                return b[c];
        throw "invalid HorizAlign value:  " + a;
    }
      , Tb = {
        Cb: "left",
        Ka: "middle",
        Kb: "right",
        Ha: "full",
        Ra: "value"
    };
    class Ub {
        constructor(a, b) {
            if ("number" !== typeof a || "number" !== typeof b)
                throw "";
            if (0 > a || 0 > b)
                throw "";
            this.g = a;
            this.h = b
        }
        toString() {
            return ""
        }
        v(a) {
            return this.g == a.g && this.h == a.h
        }
        j() {
            return this.h
        }
        o() {
            return 0
        }
        l() {
            return 0
        }
        i() {
            return this.g
        }
        m() {
            return 1E-14 > this.g || 1E-14 > this.h
        }
        A(a, b) {
            return x(0, 0, b) || x(0, 0, b) || x(this.g, a.g, b) || x(this.h, a.h, b) ? !1 : !0
        }
    }
    var Vb = new Ub(0,0);
    var Wb = a=>{
        const b = ["TOP", "MIDDLE", "BOTTOM", "FULL", "VALUE"];
        for (let c = 0, d = b.length; c < d; c++)
            if (a === b[c])
                return b[c];
        throw "invalid VerticalAlign value: " + a;
    }
      , Xb = {
        Pb: "top",
        Ka: "middle",
        xb: "bottom",
        Ha: "full",
        Ra: "value"
    };
    function Yb(a, b, c, d, e) {
        c = Sb(c || "MIDDLE");
        d = Wb(d || "MIDDLE");
        e = e || 1;
        if (1E-15 > e || !isFinite(e))
            throw "bad aspectRatio " + e;
        const f = b.o()
          , g = b.g
          , h = b.h - f
          , l = b.l() - g;
        if (1E-15 > h || 1E-15 > l)
            throw "simRect cannot be empty " + b;
        b = a.l();
        const k = a.o()
          , m = a.i();
        a = a.j();
        var n = 0;
        let w = 0
          , C = 0
          , t = 0;
        "FULL" == c && (C = m / h,
        n = 0);
        "FULL" == d && (t = a / l,
        w = 0);
        if ("FULL" != c || "FULL" != d)
            if ("FULL" == c ? (t = C * e,
            n = !0) : "FULL" == d ? (C = t / e,
            n = !1) : (C = m / h,
            t = C * e,
            n = !0,
            a < Math.floor(.5 + t * l) && (t = a / l,
            C = t / e,
            n = !1)),
            n)
                switch (n = 0,
                c = Math.floor(.5 + l * t),
                d) {
                case "BOTTOM":
                    w = 0;
                    break;
                case "MIDDLE":
                    w = (a - c) / 2;
                    break;
                case "TOP":
                    w = a - c;
                    break;
                default:
                    throw "unsupported alignment " + d;
                }
            else
                switch (w = 0,
                d = Math.floor(.5 + h * C),
                c) {
                case "LEFT":
                    n = 0;
                    break;
                case "MIDDLE":
                    n = (m - d) / 2;
                    break;
                case "RIGHT":
                    n = m - d;
                    break;
                default:
                    throw "unsupported alignment " + c;
                }
        return new Zb(k,b + a,f - n / C,g - w / t,C,t)
    }
    function $b(a, b) {
        return a.o + (b - a.j) / a.h
    }
    function ac(a, b) {
        return a.l + (a.i - b) / a.g
    }
    function bc(a, b) {
        let c;
        "number" === typeof b ? c = void 0 : (c = b.h(),
        b = b.g());
        if ("number" !== typeof b || "number" !== typeof c)
            throw "";
        return new I($b(a, b),ac(a, c))
    }
    function cc(a, b) {
        return new K($b(a, b.o()),ac(a, b.l() + b.j()),$b(a, b.o() + b.i()),ac(a, b.l()))
    }
    function M(a, b) {
        return a.j + (b - a.o) * a.h
    }
    function N(a, b) {
        return a.i - (b - a.l) * a.g
    }
    function dc(a, b) {
        return new I(M(a, b.g()),N(a, b.h()))
    }
    class Zb {
        constructor(a, b, c, d, e, f) {
            this.j = Ea(a);
            this.i = Ea(b);
            this.o = Ea(c);
            this.l = Ea(d);
            this.h = Ea(e);
            this.g = Ea(f);
            a = Rb;
            a = a.translate(this.j, this.i);
            a = a.scale(this.h, -this.g);
            this.m = a = a.translate(-this.o, -this.l)
        }
        toString() {
            return ""
        }
    }
    ;var ec = {
        aliceblue: "#f0f8ff",
        antiquewhite: "#faebd7",
        aqua: "#00ffff",
        aquamarine: "#7fffd4",
        azure: "#f0ffff",
        beige: "#f5f5dc",
        bisque: "#ffe4c4",
        black: "#000000",
        blanchedalmond: "#ffebcd",
        blue: "#0000ff",
        blueviolet: "#8a2be2",
        brown: "#a52a2a",
        burlywood: "#deb887",
        cadetblue: "#5f9ea0",
        chartreuse: "#7fff00",
        chocolate: "#d2691e",
        coral: "#ff7f50",
        cornflowerblue: "#6495ed",
        cornsilk: "#fff8dc",
        crimson: "#dc143c",
        cyan: "#00ffff",
        darkblue: "#00008b",
        darkcyan: "#008b8b",
        darkgoldenrod: "#b8860b",
        darkgray: "#a9a9a9",
        darkgreen: "#006400",
        darkgrey: "#a9a9a9",
        darkkhaki: "#bdb76b",
        darkmagenta: "#8b008b",
        darkolivegreen: "#556b2f",
        darkorange: "#ff8c00",
        darkorchid: "#9932cc",
        darkred: "#8b0000",
        darksalmon: "#e9967a",
        darkseagreen: "#8fbc8f",
        darkslateblue: "#483d8b",
        darkslategray: "#2f4f4f",
        darkslategrey: "#2f4f4f",
        darkturquoise: "#00ced1",
        darkviolet: "#9400d3",
        deeppink: "#ff1493",
        deepskyblue: "#00bfff",
        dimgray: "#696969",
        dimgrey: "#696969",
        dodgerblue: "#1e90ff",
        firebrick: "#b22222",
        floralwhite: "#fffaf0",
        forestgreen: "#228b22",
        fuchsia: "#ff00ff",
        gainsboro: "#dcdcdc",
        ghostwhite: "#f8f8ff",
        gold: "#ffd700",
        goldenrod: "#daa520",
        gray: "#808080",
        green: "#008000",
        greenyellow: "#adff2f",
        grey: "#808080",
        honeydew: "#f0fff0",
        hotpink: "#ff69b4",
        indianred: "#cd5c5c",
        indigo: "#4b0082",
        ivory: "#fffff0",
        khaki: "#f0e68c",
        lavender: "#e6e6fa",
        lavenderblush: "#fff0f5",
        lawngreen: "#7cfc00",
        lemonchiffon: "#fffacd",
        lightblue: "#add8e6",
        lightcoral: "#f08080",
        lightcyan: "#e0ffff",
        lightgoldenrodyellow: "#fafad2",
        lightgray: "#d3d3d3",
        lightgreen: "#90ee90",
        lightgrey: "#d3d3d3",
        lightpink: "#ffb6c1",
        lightsalmon: "#ffa07a",
        lightseagreen: "#20b2aa",
        lightskyblue: "#87cefa",
        lightslategray: "#778899",
        lightslategrey: "#778899",
        lightsteelblue: "#b0c4de",
        lightyellow: "#ffffe0",
        lime: "#00ff00",
        limegreen: "#32cd32",
        linen: "#faf0e6",
        magenta: "#ff00ff",
        maroon: "#800000",
        mediumaquamarine: "#66cdaa",
        mediumblue: "#0000cd",
        mediumorchid: "#ba55d3",
        mediumpurple: "#9370db",
        mediumseagreen: "#3cb371",
        mediumslateblue: "#7b68ee",
        mediumspringgreen: "#00fa9a",
        mediumturquoise: "#48d1cc",
        mediumvioletred: "#c71585",
        midnightblue: "#191970",
        mintcream: "#f5fffa",
        mistyrose: "#ffe4e1",
        moccasin: "#ffe4b5",
        navajowhite: "#ffdead",
        navy: "#000080",
        oldlace: "#fdf5e6",
        olive: "#808000",
        olivedrab: "#6b8e23",
        orange: "#ffa500",
        orangered: "#ff4500",
        orchid: "#da70d6",
        palegoldenrod: "#eee8aa",
        palegreen: "#98fb98",
        paleturquoise: "#afeeee",
        palevioletred: "#db7093",
        papayawhip: "#ffefd5",
        peachpuff: "#ffdab9",
        peru: "#cd853f",
        pink: "#ffc0cb",
        plum: "#dda0dd",
        powderblue: "#b0e0e6",
        purple: "#800080",
        red: "#ff0000",
        rosybrown: "#bc8f8f",
        royalblue: "#4169e1",
        saddlebrown: "#8b4513",
        salmon: "#fa8072",
        sandybrown: "#f4a460",
        seagreen: "#2e8b57",
        seashell: "#fff5ee",
        sienna: "#a0522d",
        silver: "#c0c0c0",
        skyblue: "#87ceeb",
        slateblue: "#6a5acd",
        slategray: "#708090",
        slategrey: "#708090",
        snow: "#fffafa",
        springgreen: "#00ff7f",
        steelblue: "#4682b4",
        tan: "#d2b48c",
        teal: "#008080",
        thistle: "#d8bfd8",
        tomato: "#ff6347",
        turquoise: "#40e0d0",
        violet: "#ee82ee",
        wheat: "#f5deb3",
        white: "#ffffff",
        whitesmoke: "#f5f5f5",
        yellow: "#ffff00",
        yellowgreen: "#9acd32"
    };
    function fc(a) {
        var b = {};
        a = String(a);
        var c = "#" == a.charAt(0) ? a : "#" + a;
        if (gc.test(c))
            return b.Ua = hc(c),
            b.type = "hex",
            b;
        a: {
            var d = a.match(ic);
            if (d) {
                c = Number(d[1]);
                var e = Number(d[2]);
                d = Number(d[3]);
                if (0 <= c && 255 >= c && 0 <= e && 255 >= e && 0 <= d && 255 >= d) {
                    c = [c, e, d];
                    break a
                }
            }
            c = []
        }
        if (c.length) {
            a = c[0];
            e = c[1];
            c = c[2];
            a = Number(a);
            e = Number(e);
            c = Number(c);
            if (a != (a & 255) || e != (e & 255) || c != (c & 255))
                throw Error('"(' + a + "," + e + "," + c + '") is not a valid RGB color');
            c |= a << 16 | e << 8;
            a = 16 > a ? "#" + (16777216 | c).toString(16).substr(1) : "#" + c.toString(16);
            b.Ua = a;
            b.type = "rgb";
            return b
        }
        if (ec && (c = ec[a.toLowerCase()]))
            return b.Ua = c,
            b.type = "named",
            b;
        throw Error(a + " is not a valid color string");
    }
    var jc = /#(.)(.)(.)/;
    function hc(a) {
        if (!gc.test(a))
            throw Error("'" + a + "' is not a valid hex color");
        4 == a.length && (a = a.replace(jc, "#$1$1$2$2$3$3"));
        return a.toLowerCase()
    }
    var gc = /^#(?:[0-9a-f]{3}){1,2}$/i
      , ic = /^(?:rgb)?\((0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2})\)$/i;
    function kc(a) {
        return a.o ? (a.o = !1,
        !0) : !1
    }
    class lc {
        constructor(a, b) {
            a = a || "SIM_OBJ" + mc++;
            this.B = Ga(v(a));
            this.I = b || a;
            this.C = La;
            this.o = !0
        }
        toString() {
            return ""
        }
        H() {
            return ""
        }
        F(a) {
            return a ? this.I : this.B
        }
        L(a) {
            return this.B == v(a)
        }
        D(a) {
            return a == this
        }
    }
    var mc = 1;
    function nc(a, b) {
        const c = b.g() - a.s.g();
        b = b.h() - a.s.h();
        return new I(a.l.g() + (c - 0 * b),a.l.h() + (0 * c + b))
    }
    function oc(a) {
        let b = new Nb(1,0,0,1,a.l.g(),a.l.h());
        b = Pb(b, 0);
        return b.translate(-a.s.g(), -a.s.h())
    }
    function pc(a, b) {
        a.l = Xa(b);
        a.o = !0
    }
    class qc extends lc {
        constructor(a, b) {
            super(a, b);
            this.m = 1;
            this.s = this.G = this.l = ab;
            this.A = [ab]
        }
        toString() {
            return ""
        }
        j() {
            return this.h / 2 - -this.h / 2
        }
        i() {
            return this.g / 2 - -this.g / 2
        }
        v(a) {
            if (0 >= a || "number" !== typeof a)
                throw "mass must be positive " + a;
            this.m = a;
            this.o = !0;
            return this
        }
    }
    ;function rc() {
        const a = new sc("fixed_point");
        a.g = .5;
        a.h = .5;
        a.u = 1;
        a.o = !0;
        return a
    }
    function tc() {
        const a = new sc("block");
        a.g = .4;
        a.h = .8;
        a.u = 1;
        a.o = !0;
        return a
    }
    function uc(a, b) {
        b.beginPath();
        const c = a.h / 2
          , d = a.g / 2;
        if (1 == a.u)
            b.rect(-d, -c, a.g, a.h);
        else if (2 == a.u)
            "function" === typeof b.ellipse ? (b.moveTo(d, 0),
            b.ellipse(0, 0, d, c, 0, 0, 2 * Math.PI, !1)) : (b.arc(0, 0, Math.min(d, c), 0, 2 * Math.PI, !1),
            b.closePath());
        else
            throw "";
    }
    class sc extends qc {
        constructor(a) {
            if (void 0 === a || "" == a) {
                var b = vc++;
                a = wc.ab + b;
                b = xc.ab + b
            } else
                b = a;
            super(a, b);
            this.m = 1;
            this.u = 2;
            this.h = this.g = 1
        }
        toString() {
            return ""
        }
        v(a) {
            if (0 > a || "number" !== typeof a)
                throw "mass must be non-negative " + a;
            this.m = a;
            this.o = !0;
            return this
        }
        D(a, b) {
            return a instanceof sc && a.l.A(this.l, b) && !x(a.g, this.g, b) && !x(a.h, this.h, b) && a.u == this.u ? !0 : !1
        }
    }
    var vc = 1
      , wc = {
        ab: "PointMass"
    }
      , xc = wc;
    function yc(a) {
        if ("string" !== typeof a || "" == a)
            return !1;
        var b = a.match(/^rgba\((.*),\s*\d*\.?\d+\)/);
        null != b ? a = "rgb(" + b[1] + ")" : (b = a.match(/^(#[0-9a-hA-H]{3})[0-9a-hA-H]$/),
        null != b ? a = b[1] : (b = a.match(/^(#[0-9a-hA-H]{6})[0-9a-hA-H]{2}$/),
        null != b && (a = b[1])));
        a = fc(a).Ua;
        a = hc(a);
        a = parseInt(a.substr(1), 16);
        var c = [a >> 16, a >> 8 & 255, a & 255];
        a = c[0];
        b = c[1];
        var d = c[2];
        c = Math.max(Math.max(a, b), d);
        var e = Math.min(Math.min(a, b), d);
        if (e == c)
            e = a = 0;
        else {
            var f = c - e;
            e = f / c;
            a = 60 * (a == c ? (b - d) / f : b == c ? 2 + (d - a) / f : 4 + (a - b) / f);
            0 > a && (a += 360);
            360 < a && (a -= 360)
        }
        a = [a, e, c];
        return 167 > a[2] || .57 < a[1] && 40 > Math.abs(a[0] - 240)
    }
    class zc {
        constructor(a) {
            this.h = null != a ? a : new sc("proto");
            this.s = isFinite(this.h.m) && 0 < Array.from(this.h.A).length;
            this.o = void 0 !== this.i ? this.i : "lightGray";
            this.l = yc(this.o);
            this.g = !0
        }
        toString() {
            return ""
        }
        H() {
            return ""
        }
        G(a) {
            var b = this.h;
            var c = a.g() - b.l.g();
            a = a.h() - b.l.h();
            b = new I(b.s.g() + (c - -0 * a),b.s.h() + (-0 * c + a));
            c = this.h;
            c = new K(-c.g / 2,-c.h / 2,c.g / 2,c.h / 2);
            return bb(c, b)
        }
        I(a, b) {
            a.save();
            const c = 1 / b.h;
            var d = Mb(b.m, oc(this.h));
            Qb(d, a);
            uc(this.h, a);
            void 0 !== this.O && this.O && a.clip();
            var e = void 0 !== this.i ? this.i : "lightGray";
            e && (a.fillStyle = e,
            a.fill());
            var f = void 0 !== this.$ ? this.$ : "";
            if (f) {
                a.lineWidth = (void 0 !== this.u ? this.u : 1) / b.h;
                var g = void 0 !== this.B ? this.B : [];
                0 < g.length && "function" === typeof a.setLineDash && (g = g.map(h=>h / b.h),
                a.setLineDash(g));
                a.strokeStyle = f;
                a.stroke();
                a.setLineDash([])
            }
            f = void 0 !== this.Y ? this.Y : null;
            g = void 0 !== this.R ? this.R : null;
            if (null != f || null != g)
                a.translate(-this.h.g / 2, this.h.h / 2),
                a.scale(c, -c),
                Lb(void 0 !== this.N ? this.N : Rb, a),
                null != f && a.drawImage(f, 0, 0),
                null != g && g(a);
            if (this.h.m != La) {
                Qb(d, a);
                this.o !== e && (this.o = e,
                this.l = yc(e));
                e = 1 / b.h;
                a.lineWidth = e;
                if (void 0 !== this.D && this.D) {
                    f = this.h.s;
                    a.strokeStyle = this.l ? "#ccc" : "black";
                    g = .2 * Math.min(this.h.i(), this.h.j());
                    const h = 8 * e;
                    g > h && (g = h);
                    a.beginPath();
                    a.moveTo(f.g() - g, f.h());
                    a.lineTo(f.g() + g, f.h());
                    a.stroke();
                    a.beginPath();
                    a.moveTo(f.g(), f.h() - g);
                    a.lineTo(f.g(), f.h() + g);
                    a.stroke()
                }
                if (void 0 !== this.U && this.U) {
                    let h = 4 * e;
                    e = .15 * Math.min(this.h.i(), this.h.j());
                    e < h && (h = e);
                    Array.from(this.h.A).forEach(l=>{
                        a.fillStyle = this.l ? "#ccc" : "gray";
                        a.beginPath();
                        a.arc(l.g(), l.h(), h, 0, 2 * Math.PI, !1);
                        a.closePath();
                        a.fill()
                    }
                    )
                }
            }
            void 0 !== this.m && this.m && (d = d.translate(ab),
            (e = void 0 !== this.T ? this.T : 0) && (d = Pb(d, e)),
            d = d.scale(c, -c),
            Qb(d, a),
            a.fillStyle = void 0 !== this.Z ? this.Z : "black",
            a.font = void 0 !== this.m ? this.m : "",
            a.textAlign = "center",
            a.fillText(this.h.F(!0), 0, a.measureText("M").width / 2));
            a.restore()
        }
        K() {
            return kc(this.h) || this.g ? (this.g = !1,
            !0) : !1
        }
        V() {
            return [this.h]
        }
        S() {
            return this.h.l
        }
        v() {
            return [this.h]
        }
        j() {
            return void 0 !== this.A ? this.A : 0
        }
        M() {
            return this.s
        }
        C(a) {
            pc(this.h, a);
            this.g = !0
        }
    }
    ;function Ac(a) {
        if (null == a.i || null == a.l)
            throw "";
        return nc(a.l, a.i)
    }
    function Bc(a) {
        if (null == a.j || null == a.m)
            throw "";
        return nc(a.m, a.j)
    }
    function Cc(a) {
        return Ya(Bc(a), Ac(a))
    }
    function Dc(a) {
        return Cc(a) - a.g
    }
    class Ec extends lc {
        constructor(a, b) {
            super("spring");
            this.l = a;
            this.i = Xa(ab);
            this.m = b;
            this.j = Xa(ab);
            this.g = 2.5;
            this.h = 3
        }
        toString() {
            return ""
        }
    }
    ;class Fc {
        constructor(a) {
            this.h = null != a ? a : null;
            this.g = !0
        }
        toString() {
            return ""
        }
        H() {
            return ""
        }
        G() {
            return !1
        }
        I(a, b) {
            if (null != this.h) {
                var c = Cc(this.h);
                if (!(1E-6 > c || 0 == this.h.h)) {
                    a.save();
                    a.lineWidth = void 0 !== this.l ? this.l : 4;
                    a.strokeStyle = c < this.h.g - 1E-5 ? void 0 !== this.u ? this.u : "red" : void 0 !== this.A ? this.A : "green";
                    if (1 === (void 0 !== this.m ? this.m : 1)) {
                        b = b.m;
                        const d = Ac(this.h)
                          , e = Bc(this.h);
                        b = b.translate(d.g(), d.h());
                        b = Pb(b, Math.atan2(e.h() - d.h(), e.g() - d.g()));
                        c = b = b.scale(c / 6, this.i() / .5);
                        a.beginPath();
                        b = c.transform(0, 0);
                        a.moveTo(b.g(), b.h());
                        Ob(c, .375, 0, a);
                        Ob(c, .75, .25, a);
                        for (b = 1; 3 >= b; b++)
                            Ob(c, 1.5 * b, -.25, a),
                            Ob(c, .375 * (4 * b + 2), .25, a);
                        Ob(c, 5.625, 0, a);
                        Ob(c, 6, 0, a)
                    } else
                        c = dc(b, Ac(this.h)),
                        b = dc(b, Bc(this.h)),
                        a.beginPath(),
                        a.moveTo(c.g(), c.h()),
                        a.lineTo(b.g(), b.h());
                    a.stroke();
                    a.restore()
                }
            }
        }
        K() {
            return (null == this.h ? 0 : kc(this.h)) || this.g ? (this.g = !1,
            !0) : !1
        }
        V() {
            return []
        }
        S() {
            if (null == this.h)
                var a = ab;
            else
                a = Ac(this.h).add(Bc(this.h)),
                a = new I(.5 * a.i,.5 * a.j,.5 * a.l);
            return a
        }
        v() {
            return null == this.h ? [] : [this.h]
        }
        i() {
            return void 0 !== this.o ? this.o : .5
        }
        j() {
            return void 0 !== this.s ? this.s : 0
        }
        M() {
            return !1
        }
        C() {}
    }
    ;function Gc(a) {
        let b = !0
          , c = Ka;
        for (let d = 0, e = a.g.length; d < e; d++) {
            const f = a.g[d].j();
            if (f < c) {
                b = !1;
                break
            }
            c = f
        }
        b || (ua(a.g, function(d, e) {
            d = d.j();
            e = e.j();
            return d < e ? -1 : d > e ? 1 : 0
        }),
        a.i = !0)
    }
    function Hc(a, b) {
        if (!p(b))
            throw "non-object passed to DisplayList.contains";
        return a.g.includes(b)
    }
    function Ic(a, b, c) {
        Gc(a);
        a.g.forEach(d=>d.I(b, c))
    }
    function Jc(a, b) {
        if (!p(b))
            throw "non-object passed to DisplayList.add";
        const c = b.j();
        Gc(a);
        for (var d = a.g.length; 0 < d && !(c > a.g[d - 1].j()); d--)
            ;
        qa(a.g, void 0, 0, b);
        a.i = !0;
        A(a, new y(a,"OBJECT_ADDED",b))
    }
    function Kc(a, b) {
        if (!p(b))
            throw "non-object passed to DisplayList.remove";
        const c = a.g.indexOf(b);
        -1 < c && (Array.prototype.splice.call(a.g, c, 1),
        a.i = !0,
        A(a, new y(a,"OBJECT_REMOVED",b)))
    }
    class Lc extends H {
        constructor() {
            super("DISPLAY_LIST_" + Mc++);
            this.g = [];
            this.i = !0
        }
        toString() {
            return ""
        }
        H() {
            return ""
        }
        add(a) {
            if (!p(a))
                throw "non-object passed to DisplayList.add";
            const b = a.j();
            Gc(this);
            let c = this.g.length, d;
            for (d = 0; d < c && !(b < this.g[d].j()); d++)
                ;
            qa(this.g, d, 0, a);
            this.i = !0;
            A(this, new y(this,"OBJECT_ADDED",a))
        }
        find(a) {
            if ("number" === typeof a) {
                const b = this.g.length;
                if (0 > a || a >= b)
                    return null;
                Gc(this);
                return this.g[a]
            }
            if ("string" === typeof a) {
                const b = v(a);
                return la(this.g, c=>{
                    c = c.v();
                    for (let d = 0, e = c.length; d < e; d++)
                        if (c[d].F() == b)
                            return !0;
                    return !1
                }
                )
            }
            return p(a) ? la(this.g, b=>0 <= ea(b.v(), a)) : null
        }
        get(a) {
            const b = this.g.length;
            if (0 > a || a >= b)
                throw a + " is not in range 0 to " + (b - 1);
            Gc(this);
            return this.g[a]
        }
        length() {
            return this.g.length
        }
    }
    var Mc = 1;
    class Nc {
        constructor() {
            this.g = [];
            this.h = !1
        }
        toString() {
            return ""
        }
        H() {
            return ""
        }
        l(a) {
            if (this.h)
                throw "addMemo during memorize";
            this.g.includes(a) || this.g.push(a)
        }
        o() {
            try {
                this.h = !0,
                this.g.forEach(a=>a.o())
            } finally {
                this.h = !1
            }
        }
        D(a) {
            if (this.h)
                throw "removeMemo during memorize";
            na(this.g, a)
        }
    }
    ;function Oc(a, b) {
        x(a.g, b) && (a.g = b,
        a.I && (a.m = a.g / a.N),
        Pc(a))
    }
    function Qc(a, b) {
        x(a.B, b) && (a.B = b,
        Pc(a))
    }
    function Rc(a, b) {
        x(a.C, b) && (a.C = b,
        Pc(a))
    }
    function Sc(a, b) {
        a.I != b && (a.I = b,
        a.I && (a.N = a.g / a.m),
        a.G = !0,
        D(a, O.Oa))
    }
    function Tc(a, b) {
        a.O = Wb(b);
        Uc(a);
        D(a, O.Sa)
    }
    function Vc(a, b) {
        a.M = Sb(b);
        Uc(a);
        D(a, O.Ja)
    }
    function Wc(a, b) {
        if (!(b instanceof K))
            throw "not a DoubleRect: " + b;
        b.v(a.s) || (a.s = b,
        Uc(a),
        D(a, O.aa),
        D(a, O.X),
        D(a, O.ja),
        D(a, O.ka),
        A(a, new y(a,"SIM_RECT_CHANGED")))
    }
    function Pc(a) {
        var b = a.B - a.m / 2;
        const c = a.C - a.g / 2;
        b = new K(b,c,b + a.m,c + a.g);
        a.G = !0;
        Wc(a, b)
    }
    function Uc(a) {
        var b = Yb(a.u, a.s, a.M, a.O, a.K);
        if (!(b instanceof Zb))
            throw "not a CoordMap: " + b;
        a.A = b;
        a.G = !0;
        A(a, new y(a,"COORD_MAP_CHANGED"));
        a.m = a.s.i();
        a.g = a.s.j();
        a.B = cb(a.s);
        a.C = db(a.s);
        a.N = a.g / a.m;
        a.G = !0
    }
    function Xc(a, b) {
        if (!(b instanceof Ub))
            throw "not a ScreenRect: " + b;
        if (b.m())
            throw "empty screenrect";
        a.u.v(b) || (a.u = b,
        Uc(a),
        A(a, new y(a,"SCREEN_RECT_CHANGED")))
    }
    class Yc extends H {
        constructor(a, b) {
            super(a);
            if (!(b instanceof K) || b.m())
                throw "bad simRect: " + b;
            this.s = b;
            this.u = new Ub(800,600);
            this.O = this.M = "MIDDLE";
            this.K = 1;
            this.v = new Lc;
            this.I = !0;
            this.T = 1;
            this.A = Yb(this.u, this.s, this.M, this.O, this.K);
            this.m = b.i();
            this.g = b.j();
            this.B = cb(b);
            this.C = db(b);
            this.N = this.g / this.m;
            this.G = !0;
            this.R = new Nc;
            this.h(new B(this,O.aa,Zc.aa,()=>this.i(),c=>{
                x(this.m, c) && (this.m = c,
                this.I && (this.g = this.m * this.N),
                Pc(this))
            }
            ));
            this.h(new B(this,O.X,Zc.X,()=>this.j(),c=>Oc(this, c)));
            this.h(Pa(new B(this,O.ja,Zc.ja,()=>this.B,c=>Qc(this, c)), Number.NEGATIVE_INFINITY));
            this.h(Pa(new B(this,O.ka,Zc.ka,()=>this.C,c=>Rc(this, c)), Number.NEGATIVE_INFINITY));
            this.h(new z(this,O.Oa,Zc.Oa,()=>this.I,c=>Sc(this, c)));
            this.h(new Ra(this,O.Sa,Zc.Sa,()=>this.O,c=>Tc(this, Wb(c)),[Xb.Pb, Xb.Ka, Xb.xb, Xb.Ha, Xb.Ra],["TOP", "MIDDLE", "BOTTOM", "FULL", "VALUE"]));
            this.h(new Ra(this,O.Ja,Zc.Ja,()=>this.M,c=>Vc(this, Sb(c)),[Tb.Cb, Tb.Ka, Tb.Kb, Tb.Ha, Tb.Ra],["LEFT", "MIDDLE", "RIGHT", "FULL", "VALUE"]));
            this.h(new B(this,O.Ca,Zc.Ca,()=>this.K,c=>{
                x(this.K, c) && (this.K = c,
                Uc(this),
                D(this, O.Ca))
            }
            ))
        }
        toString() {
            return ""
        }
        H() {
            return ""
        }
        l(a) {
            this.R.l(a)
        }
        j() {
            return this.g
        }
        i() {
            return this.m
        }
        o() {
            this.R.o()
        }
        D(a) {
            this.R.D(a)
        }
    }
    var O = {
        Oa: "scale X-Y together",
        aa: "width",
        X: "height",
        ja: "center-x",
        ka: "center-y",
        Sa: "vertical-align",
        Ja: "horizontal-align",
        Ca: "aspect-ratio"
    }
      , Zc = O;
    function $c(a, b) {
        a.A != b && (b ? a.G && (a.reset(),
        a.C.l(a),
        ad(a, !0),
        a.A = !0,
        D(a, Q.ha)) : (a.C.D(a),
        ad(a, !1),
        a.A = !1,
        D(a, Q.ha)))
    }
    function ad(a, b) {
        [O.aa, O.X, O.ja, O.ka].forEach(c=>a.C.S(c).j(b))
    }
    function bd(a, b) {
        if (Cb(b))
            a.u.includes(b) || (a.u.push(b),
            a.B.push(-1));
        else
            throw "not a GraphLine " + b;
    }
    class cd extends H {
        constructor(a, b, c) {
            super(a);
            if (void 0 !== b && !Cb(b))
                throw "not a GraphLine " + b;
            this.u = [];
            Cb(b) && (this.u.push(b),
            Ta(b, this));
            this.C = c;
            c.l(this);
            Ta(c, this);
            this.A = this.G = !0;
            this.I = !1;
            this.D = "BOTH_AXES";
            this.B = va(this.u.length);
            this.M = this.K = !1;
            this.s = this.l = this.m = this.j = 0;
            this.g = 10;
            this.v = .01;
            this.h(Qa(new B(this,Q.za,dd.za,()=>this.g,d=>{
                x(d, this.g) && (this.g = d,
                this.reset(),
                this.o(),
                $c(this, !0),
                D(this, Q.za))
            }
            ), 3));
            a = ["VERTICAL", "HORIZONTAL", "BOTH_AXES"];
            this.h(new Ra(this,Q.Da,dd.Da,()=>this.D,d=>{
                if ("VERTICAL" == d || "HORIZONTAL" == d || "BOTH_AXES" == d)
                    this.D = d,
                    D(this, Q.Da);
                else
                    throw "unknown " + d;
            }
            ,a,a));
            this.h(new z(this,Q.ha,dd.ha,()=>this.A,d=>$c(this, d)));
            this.h(new z(this,Q.Fa,dd.Fa,()=>this.G,d=>{
                this.G != d && (this.G = d,
                $c(this, d),
                D(this, Q.Fa))
            }
            ));
            ad(this, this.A)
        }
        toString() {
            return ""
        }
        o() {
            for (let e = 0, f = this.u.length; e < f; e++)
                this.B[e] > ib(this.u[e].m) && this.reset();
            for (let e = 0, f = this.u.length; e < f; e++)
                for (var a = new pb(this.u[e].m,this.B[e]); nb(a); ) {
                    var b = ob(a)
                      , c = this.u[e]
                      , d = b.x;
                    b = b.y;
                    isFinite(d) || (d == Number.POSITIVE_INFINITY ? d = 1E308 : d == Number.NEGATIVE_INFINITY && (d = -1E308));
                    isFinite(b) || (b == Number.POSITIVE_INFINITY ? b = 1E308 : b == Number.NEGATIVE_INFINITY && (b = -1E308));
                    const g = c.g().i
                      , h = c.j == g;
                    c = c.u == g;
                    this.K ? (d < this.m && (h ? (this.m = d,
                    this.j = d + this.g) : this.m = d - this.v * (this.j - this.m)),
                    h ? d > this.j - this.v * this.g && (this.j = d + this.v * this.g,
                    this.m = this.j - this.g) : d > this.j && (this.j = d + this.v * (this.j - this.m))) : (this.m = d,
                    this.j = d + (h ? this.g : 0),
                    this.K = !0);
                    this.M ? (b < this.s && (c ? (this.s = b,
                    this.l = b + this.g) : this.s = b - this.v * (this.l - this.s)),
                    c ? b > this.l - this.v * this.g && (this.l = b + this.v * this.g,
                    this.s = this.l - this.g) : b > this.l && (this.l = b + this.v * (this.l - this.s))) : (this.s = b,
                    this.l = b + (c ? this.g : 0),
                    this.M = !0);
                    this.B[e] = mb(a)
                }
            1E-14 > this.j - this.m && (d = (this.j + this.m) / 2,
            a = Math.max(1E-14 * d, 1E-14),
            this.j = d + a,
            this.m = d - a);
            1E-14 > this.l - this.s && (d = (this.l + this.s) / 2,
            a = Math.max(1E-14 * d, 1E-14),
            this.l = d + a,
            this.s = d - a);
            d = new K(this.m,this.s,this.j,this.l);
            a = this.C.s;
            "VERTICAL" == this.D ? d = new K(a.o(),d.g,a.h,d.l()) : "HORIZONTAL" == this.D && (d = new K(d.o(),a.g,d.h,a.l()));
            this.A && !d.A(a) && (this.I = !0,
            Wc(this.C, d),
            this.I = !1,
            A(this, new y(this,"AUTO_SCALE",d)))
        }
        i(a) {
            if (a.P() == this.C)
                a.L("SIM_RECT_CHANGED") && (this.I || $c(this, !1));
            else {
                var b = a.P();
                0 <= ea(this.u, b) && (a.L(L.ca) || a.L(L.ba) ? this.reset() : a.L("RESET") && $c(this, !0))
            }
        }
        reset() {
            this.j = this.m = 0;
            this.K = !1;
            this.l = this.s = 0;
            this.M = !1;
            for (let a = 0, b = this.B.length; a < b; a++)
                this.B[a] = -1
        }
    }
    var Q = {
        Da: "axis",
        za: "time window",
        ha: "active",
        Fa: "enabled"
    }
      , dd = Q;
    function ed(a, b) {
        this.type = a;
        this.target = b
    }
    ed.prototype.h = function() {}
    ;
    var fd = String.prototype.trim ? function(a) {
        return a.trim()
    }
    : function(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    }
    ;
    function gd(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    }
    ;var hd;
    a: {
        var id = aa.navigator;
        if (id) {
            var jd = id.userAgent;
            if (jd) {
                hd = jd;
                break a
            }
        }
        hd = ""
    }
    function R(a) {
        return -1 != hd.indexOf(a)
    }
    ;(class {
        constructor(a, b) {
            this.h = b === ld ? a : ""
        }
    }
    ).prototype.toString = function() {
        return this.h.toString()
    }
    ;
    var ld = {};
    function md() {
        return R("iPhone") && !R("iPod") && !R("iPad")
    }
    ;function nd(a) {
        nd[" "](a);
        return a
    }
    nd[" "] = ba;
    function od(a, b) {
        var c = pd;
        return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a)
    }
    ;var qd = R("Opera")
      , rd = R("Trident") || R("MSIE")
      , sd = R("Edge")
      , td = R("Gecko") && !(-1 != hd.toLowerCase().indexOf("webkit") && !R("Edge")) && !(R("Trident") || R("MSIE")) && !R("Edge")
      , ud = -1 != hd.toLowerCase().indexOf("webkit") && !R("Edge");
    ud && R("Mobile");
    R("Macintosh");
    R("Windows");
    R("Linux") || R("CrOS");
    var vd = aa.navigator || null;
    vd && (vd.appVersion || "").indexOf("X11");
    R("Android");
    md();
    R("iPad");
    R("iPod");
    md() || R("iPad") || R("iPod");
    hd.toLowerCase().indexOf("kaios");
    var wd;
    a: {
        var xd = ""
          , yd = function() {
            var a = hd;
            if (td)
                return /rv:([^\);]+)(\)|;)/.exec(a);
            if (sd)
                return /Edge\/([\d\.]+)/.exec(a);
            if (rd)
                return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
            if (ud)
                return /WebKit\/(\S+)/.exec(a);
            if (qd)
                return /(?:Version)[ \/]?(\S+)/.exec(a)
        }();
        yd && (xd = yd ? yd[1] : "");
        if (rd) {
            var zd, Ad = aa.document;
            zd = Ad ? Ad.documentMode : void 0;
            if (null != zd && zd > parseFloat(xd)) {
                wd = String(zd);
                break a
            }
        }
        wd = xd
    }
    var pd = {};
    function Bd(a) {
        return od(a, function() {
            let b = 0;
            const c = fd(String(wd)).split(".")
              , d = fd(String(a)).split(".")
              , e = Math.max(c.length, d.length);
            for (let h = 0; 0 == b && h < e; h++) {
                var f = c[h] || ""
                  , g = d[h] || "";
                do {
                    f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                    g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                    if (0 == f[0].length && 0 == g[0].length)
                        break;
                    b = gd(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == g[1].length ? 0 : parseInt(g[1], 10)) || gd(0 == f[2].length, 0 == g[2].length) || gd(f[2], g[2]);
                    f = f[3];
                    g = g[3]
                } while (0 == b)
            }
            return 0 <= b
        })
    }
    ;var Cd = function() {
        if (!aa.addEventListener || !Object.defineProperty)
            return !1;
        var a = !1
          , b = Object.defineProperty({}, "passive", {
            get: function() {
                a = !0
            }
        });
        try {
            aa.addEventListener("test", ba, b),
            aa.removeEventListener("test", ba, b)
        } catch (c) {}
        return a
    }();
    function Dd(a) {
        ed.call(this, a ? a.type : "");
        this.relatedTarget = this.target = null;
        this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
        this.key = "";
        this.g = 0;
        this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
        this.state = null;
        this.pointerId = 0;
        this.pointerType = "";
        this.i = null;
        if (a) {
            var b = this.type = a.type
              , c = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
            this.target = a.target || a.srcElement;
            var d = a.relatedTarget;
            if (d) {
                if (td) {
                    a: {
                        try {
                            nd(d.nodeName);
                            var e = !0;
                            break a
                        } catch (f) {}
                        e = !1
                    }
                    e || (d = null)
                }
            } else
                "mouseover" == b ? d = a.fromElement : "mouseout" == b && (d = a.toElement);
            this.relatedTarget = d;
            c ? (this.clientX = void 0 !== c.clientX ? c.clientX : c.pageX,
            this.clientY = void 0 !== c.clientY ? c.clientY : c.pageY,
            this.screenX = c.screenX || 0,
            this.screenY = c.screenY || 0) : (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX,
            this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY,
            this.screenX = a.screenX || 0,
            this.screenY = a.screenY || 0);
            this.button = a.button;
            this.g = a.keyCode || 0;
            this.key = a.key || "";
            this.ctrlKey = a.ctrlKey;
            this.altKey = a.altKey;
            this.shiftKey = a.shiftKey;
            this.metaKey = a.metaKey;
            this.pointerId = a.pointerId || 0;
            this.pointerType = "string" === typeof a.pointerType ? a.pointerType : Ed[a.pointerType] || "";
            this.state = a.state;
            this.i = a;
            a.defaultPrevented && Dd.tb.h.call(this)
        }
    }
    da(Dd, ed);
    var Ed = {
        2: "touch",
        3: "pen",
        4: "mouse"
    };
    Dd.prototype.h = function() {
        Dd.tb.h.call(this);
        var a = this.i;
        a.preventDefault ? a.preventDefault() : a.returnValue = !1
    }
    ;
    var Fd = "closure_listenable_" + (1E6 * Math.random() | 0);
    var Gd = 0;
    function Hd(a, b, c, d, e) {
        this.listener = a;
        this.proxy = null;
        this.src = b;
        this.type = c;
        this.capture = !!d;
        this.g = e;
        this.key = ++Gd;
        this.h = this.Ta = !1
    }
    function Id(a) {
        a.h = !0;
        a.listener = null;
        a.proxy = null;
        a.src = null;
        a.g = null
    }
    ;function Jd(a) {
        this.src = a;
        this.h = {};
        this.g = 0
    }
    Jd.prototype.add = function(a, b, c, d, e) {
        var f = a.toString();
        a = this.h[f];
        a || (a = this.h[f] = [],
        this.g++);
        var g;
        a: {
            for (g = 0; g < a.length; ++g) {
                var h = a[g];
                if (!h.h && h.listener == b && h.capture == !!d && h.g == e)
                    break a
            }
            g = -1
        }
        -1 < g ? (b = a[g],
        c || (b.Ta = !1)) : (b = new Hd(b,this.src,f,!!d,e),
        b.Ta = c,
        a.push(b));
        return b
    }
    ;
    var Kd = "closure_lm_" + (1E6 * Math.random() | 0)
      , Ld = {}
      , Md = 0;
    function S(a, b, c, d, e) {
        if (d && d.once)
            Nd(a, b, c, d, e);
        else if (Array.isArray(b))
            for (var f = 0; f < b.length; f++)
                S(a, b[f], c, d, e);
        else
            c = Od(c),
            a && a[Fd] ? a.h(b, c, p(d) ? !!d.capture : !!d, e) : Pd(a, b, c, !1, d, e)
    }
    function Pd(a, b, c, d, e, f) {
        if (!b)
            throw Error("Invalid event type");
        var g = p(e) ? !!e.capture : !!e
          , h = Qd(a);
        h || (a[Kd] = h = new Jd(a));
        c = h.add(b, c, d, g, f);
        if (!c.proxy) {
            d = Rd();
            c.proxy = d;
            d.src = a;
            d.listener = c;
            if (a.addEventListener)
                Cd || (e = g),
                void 0 === e && (e = !1),
                a.addEventListener(b.toString(), d, e);
            else if (a.attachEvent)
                a.attachEvent(Sd(b.toString()), d);
            else if (a.addListener && a.removeListener)
                a.addListener(d);
            else
                throw Error("addEventListener and attachEvent are unavailable.");
            Md++
        }
    }
    function Rd() {
        function a(c) {
            return b.call(a.src, a.listener, c)
        }
        var b = Td;
        return a
    }
    function Nd(a, b, c, d, e) {
        if (Array.isArray(b))
            for (var f = 0; f < b.length; f++)
                Nd(a, b[f], c, d, e);
        else
            c = Od(c),
            a && a[Fd] ? a.g(b, c, p(d) ? !!d.capture : !!d, e) : Pd(a, b, c, !0, d, e)
    }
    function Sd(a) {
        return a in Ld ? Ld[a] : Ld[a] = "on" + a
    }
    function Td(a, b) {
        if (a.h)
            a = !0;
        else {
            b = new Dd(b,this);
            var c = a.listener
              , d = a.g || a.src;
            if (a.Ta && "number" !== typeof a && a && !a.h) {
                var e = a.src;
                if (e && e[Fd])
                    e.i(a);
                else {
                    var f = a.type
                      , g = a.proxy;
                    e.removeEventListener ? e.removeEventListener(f, g, a.capture) : e.detachEvent ? e.detachEvent(Sd(f), g) : e.addListener && e.removeListener && e.removeListener(g);
                    Md--;
                    (f = Qd(e)) ? (g = a.type,
                    g in f.h && na(f.h[g], a) && (Id(a),
                    0 == f.h[g].length && (delete f.h[g],
                    f.g--)),
                    0 == f.g && (f.src = null,
                    e[Kd] = null)) : Id(a)
                }
            }
            a = c.call(d, b)
        }
        return a
    }
    function Qd(a) {
        a = a[Kd];
        return a instanceof Jd ? a : null
    }
    var Ud = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);
    function Od(a) {
        if ("function" === typeof a)
            return a;
        a[Ud] || (a[Ud] = function(b) {
            return a.handleEvent(b)
        }
        );
        return a[Ud]
    }
    ;function Vd(a) {
        a.m();
        0 < a.g && (a.i = setTimeout(()=>Vd(a), void 0 !== a.i ? a.g : 2 * a.g))
    }
    class T {
        constructor(a, b, c) {
            if (!p(d)) {
                var d = document.createElement("button");
                d.type = "button";
                void 0 === c ? d.appendChild(document.createTextNode(a)) : (d.className = "icon",
                d.appendChild(c))
            }
            this.j = d;
            this.m = b;
            S(this.j, "mousedown", this.o, !0, this);
            S(this.j, "mouseup", this.l, !0, this);
            S(this.j, "dragleave", this.l, !1, this);
            this.i = void 0;
            this.g = 0
        }
        toString() {
            return ""
        }
        H() {
            return ""
        }
        h() {
            return this.j
        }
        o() {
            Vd(this)
        }
        l() {
            void 0 !== this.i && (clearTimeout(this.i),
            this.i = void 0)
        }
    }
    ;var Wd = rd || qd || ud;
    function Xd(a, b) {
        this.width = a;
        this.height = b
    }
    Xd.prototype.aspectRatio = function() {
        return this.width / this.height
    }
    ;
    Xd.prototype.m = function() {
        return !(this.width * this.height)
    }
    ;
    Xd.prototype.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    }
    ;
    Xd.prototype.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    }
    ;
    Xd.prototype.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    }
    ;
    Xd.prototype.scale = function(a, b) {
        this.width *= a;
        this.height *= "number" === typeof b ? b : a;
        return this
    }
    ;
    function Yd() {
        var a = window.document;
        a = "CSS1Compat" == a.compatMode ? a.documentElement : a.body;
        return new Xd(a.clientWidth,a.clientHeight)
    }
    function Zd(a) {
        var b;
        if (Wd && !(rd && Bd("9") && !Bd("10") && aa.SVGElement && a instanceof aa.SVGElement) && (b = a.parentElement))
            return b;
        b = a.parentNode;
        return p(b) && 1 == b.nodeType ? b : null
    }
    ;function $d(a, b) {
        a.g() != b && a.s(b);
        a.j != a.g() && (a.j = a.g(),
        a.l.checked = a.j)
    }
    class ae {
        constructor(a, b, c) {
            var d = void 0;
            this.m = a;
            this.g = b;
            this.s = c;
            this.j = b();
            a = null;
            p(d) ? (b = Zd(d),
            null != b && "LABEL" == b.tagName && (a = b)) : (d = document.createElement("input"),
            d.type = "checkbox",
            a = document.createElement("LABEL"),
            a.appendChild(d),
            a.appendChild(document.createTextNode(this.m)));
            this.l = d;
            this.l.checked = this.j;
            this.u = null !== a ? a : this.l;
            S(this.l, "change", this.v, !0, this)
        }
        toString() {
            return ""
        }
        H() {
            return ""
        }
        h() {
            return this.u
        }
        v() {
            $d(this, !this.g())
        }
        i() {
            $d(this, this.g())
        }
    }
    ;class be extends ae {
        constructor(a) {
            super(a.F(!0), ()=>a.J(), b=>Ma(a, b));
            this.o = a;
            Ta(this.o.P(), this)
        }
        toString() {
            return ""
        }
        i(a) {
            a == this.o && super.i(a)
        }
    }
    ;function ce(a) {
        a.g.options.length = 0;
        for (let b = 0, c = a.m.length; b < c; b++)
            a.g.options[b] = new Option(a.m[b])
    }
    function de(a, b) {
        if (a.l !== b) {
            const c = a.g.options.length;
            if (a.j.length != c)
                throw "ChoiceControl: values_.length=" + a.j.length + " but menu.options.length=" + c;
            try {
                -1 > b ? b = -1 : b > c - 1 && (b = c - 1),
                a.l = b,
                -1 < b && a.v(a.j[b])
            } catch (d) {
                alert(d),
                a.l = a.j.indexOf(a.s())
            }
            a.g.selectedIndex = a.l
        }
    }
    class ee {
        constructor(a, b, c, d, e) {
            this.s = c;
            this.v = d;
            this.m = a;
            this.j = b;
            this.l = this.j.indexOf(c());
            this.g = document.createElement("select");
            ce(this);
            this.u = "string" === typeof e ? e : "";
            a = null;
            0 < this.u.length && (a = document.createElement("LABEL"),
            a.appendChild(document.createTextNode(this.u)),
            a.appendChild(this.g));
            this.g.selectedIndex = this.l;
            this.A = null !== a ? a : this.g;
            S(this.g, "change", this.B, !0, this)
        }
        toString() {
            return ""
        }
        H() {
            return ""
        }
        h() {
            return this.A
        }
        B() {
            this.g.selectedIndex !== this.l && de(this, this.g.selectedIndex)
        }
        i() {
            const a = this.j.indexOf(this.s());
            de(this, a)
        }
    }
    ;class fe extends ee {
        constructor(a, b, c, d) {
            c = void 0 !== c ? c : a.l();
            d = void 0 !== d ? d : a.i();
            super(c, d, ()=>a.m(), e=>a.o(e), void 0 !== b ? b : a.F(!0));
            this.o = a;
            Ta(this.o.P(), this)
        }
        toString() {
            return ""
        }
        i(a) {
            a.J() == this.o && a.L("CHOICES_MODIFIED") ? setTimeout(()=>{
                const b = this.o.l();
                a: {
                    var c = this.m;
                    if (ca(c) && ca(b) && c.length == b.length) {
                        for (var d = c.length, e = 0; e < d; e++)
                            if (c[e] !== b[e]) {
                                c = !1;
                                break a
                            }
                        c = !0
                    } else
                        c = !1
                }
                if (!c) {
                    c = this.o.i();
                    if (b.length != c.length)
                        throw "";
                    this.m = b;
                    this.j = c;
                    this.l = this.j.indexOf(this.s());
                    ce(this);
                    this.g.selectedIndex = this.l
                }
            }
            , 50) : a == this.o && super.i(a)
        }
    }
    ;function ge(a) {
        a.s.forEach(b=>b.cancel())
    }
    function he(a, b, c) {
        a.s.forEach(d=>{
            d.h() >= b && d.h() <= b + c && d.g(0)
        }
        )
    }
    function ie(a) {
        return a.g ? (u() - a.u) * a.i : a.l
    }
    function U(a) {
        return a.g ? (u() - a.m) * a.i : a.j
    }
    function je(a) {
        a.o = !1;
        a.g && (a.j = U(a),
        a.l = ie(a),
        ge(a),
        a.g = !1,
        A(a, new y(a,"CLOCK_PAUSE")))
    }
    function ke(a, b) {
        a.g ? (a.m = u() - b / a.i,
        a.s.forEach(c=>{
            c.cancel();
            if (a.g) {
                const e = U(a) / a.i + a.m;
                var d = c.h() / a.i + a.m;
                x(d, e) ? d > e && c.g(d - e) : c.i()
            }
        }
        )) : a.j = b
    }
    function le(a, b) {
        a.g ? a.u = u() - b / a.i : a.l = b
    }
    function me(a) {
        a.o = !1;
        a.g || (a.g = !0,
        ke(a, a.j),
        le(a, a.l),
        A(a, new y(a,"CLOCK_RESUME")))
    }
    function ne(a, b) {
        x(U(a), b, .001) && (ke(a, b),
        A(a, new y(a,"CLOCK_SET_TIME")))
    }
    class oe extends H {
        constructor() {
            super("CLOCK");
            this.u = this.m = u();
            this.i = 1;
            this.l = this.j = 0;
            this.o = this.g = !1;
            this.s = [];
            this.h(new B(this,pe.xa,qe.xa,()=>this.i,a=>{
                if (x(this.i, a)) {
                    const b = U(this)
                      , c = ie(this);
                    this.i = a;
                    ke(this, b);
                    le(this, c);
                    D(this, pe.xa)
                }
            }
            ))
        }
        toString() {
            return ""
        }
        H() {
            return ""
        }
    }
    var pe = {
        xa: "time rate"
    }
      , qe = pe;
    function re(a, b) {
        var c = Math.pow(10, Math.floor(Math.log(b) / Math.LN10));
        b /= c;
        c *= 8 <= b ? 2 : 5 <= b ? 1 : 3 <= b ? .5 : 2 <= b ? .4 : .2;
        b = Math.log(c) / Math.LN10;
        a.s = 0 > b ? Math.ceil(-b) : 0;
        return c
    }
    function se(a) {
        a.u = "BOTTOM";
        a.h = !0
    }
    function te(a) {
        a.i = "LEFT";
        a.h = !0
    }
    class ue {
        constructor(a) {
            this.g = a || gb;
            this.A = "14pt sans-serif";
            this.o = "gray";
            this.i = this.u = "VALUE";
            this.s = 0;
            this.h = !0;
            this.m = "x";
            this.l = "y"
        }
        toString() {
            return ""
        }
        H() {
            return ""
        }
        G() {
            return !1
        }
        I(a, b) {
            a.save();
            a.strokeStyle = this.o;
            a.fillStyle = this.o;
            a.font = this.A;
            a.textAlign = "start";
            a.textBaseline = "alphabetic";
            var c = this.g;
            var d = c.o()
              , e = c.h
              , f = c.g
              , g = c.l();
            var h = e - .06 * (e - d);
            var l = d + .01 * (e - d);
            switch (this.i) {
            case "VALUE":
                var k = 0;
                k < l ? k = l : k > h && (k = h);
                h = M(b, k);
                break;
            case "RIGHT":
                h = M(b, h);
                break;
            case "LEFT":
                h = M(b, l);
                break;
            default:
                h = M(b, cb(c))
            }
            l = N(b, g);
            k = N(b, f);
            switch (this.u) {
            case "VALUE":
                c = N(b, 0);
                c < l + 30 ? c = l + 30 : c > k - 30 && (c = k - 30);
                break;
            case "TOP":
                c = l + 30;
                break;
            case "BOTTOM":
                c = k - 30;
                break;
            default:
                c = N(b, db(c))
            }
            a.beginPath();
            a.moveTo(M(b, d), c);
            a.lineTo(M(b, e), c);
            a.stroke();
            d = c;
            l = this.g;
            e = d - 4;
            c = e + 8;
            var m = l.o();
            l = l.h;
            k = re(this, l - m);
            for (var n = Math.ceil(m / k) * k; n < l; ) {
                m = M(b, n);
                a.beginPath();
                a.moveTo(m, e);
                a.lineTo(m, c);
                a.stroke();
                const w = n + k;
                if (w > n)
                    n = n.toFixed(this.s),
                    a.fillText(n, m - a.measureText(n).width / 2, c + 12);
                else {
                    a.fillText("scale is too small", m, c + 12);
                    break
                }
                n = w
            }
            e = a.measureText(this.m).width;
            a.fillText(this.m, M(b, l) - e - 5, d - 8);
            a.beginPath();
            a.moveTo(h, N(b, f));
            a.lineTo(h, N(b, g));
            a.stroke();
            f = h;
            d = this.g;
            g = f - 4;
            h = g + 8;
            c = d.g;
            d = d.l();
            e = re(this, d - c);
            for (k = Math.ceil(c / e) * e; k < d; ) {
                c = N(b, k);
                a.beginPath();
                a.moveTo(g, c);
                a.lineTo(h, c);
                a.stroke();
                l = k + e;
                if (l > k)
                    k = k.toFixed(this.s),
                    m = a.measureText(k).width,
                    "RIGHT" === this.i ? a.fillText(k, h - (m + 10), c + 6) : a.fillText(k, h + 5, c + 6);
                else {
                    a.fillText("scale is too small", h, c);
                    break
                }
                k = l
            }
            g = a.measureText(this.l).width;
            "RIGHT" === this.i ? a.fillText(this.l, f - (g + 6), N(b, d) + 13) : a.fillText(this.l, f + 6, N(b, d) + 13);
            a.restore()
        }
        K() {
            return this.h ? (this.h = !1,
            !0) : !1
        }
        V() {
            return []
        }
        S() {
            return ab
        }
        v() {
            return []
        }
        j() {
            return 100
        }
        M() {
            return !1
        }
        setColor(a) {
            this.o = a;
            this.h = !0
        }
        C() {}
    }
    ;function ve(a, b, c, d, e, f) {
        e -= 2 * Math.floor(e / 2);
        const g = e / 2;
        e = 2 * Math.sin(2 * Math.PI * g) * c.h;
        c = 2 * Math.cos(2 * Math.PI * g) * c.g;
        b.lineWidth = a.s;
        b.strokeStyle = d;
        b.beginPath();
        b.moveTo(f.g(), f.h());
        b.lineTo(f.g() + e, f.h() - c);
        b.stroke()
    }
    class we {
        constructor(a, b) {
            this.l = a;
            this.B = b;
            this.h = p() ? void 0 : ab;
            this.m = "14pt sans-serif";
            this.D = "blue";
            this.A = this.s = 1;
            this.u = "black";
            this.o = "rgba(255, 255, 255, 0.75)";
            this.g = !0;
            this.i = 0
        }
        toString() {
            return ""
        }
        H() {
            return ""
        }
        G(a) {
            return 2 >= Ya(a, this.h)
        }
        I(a, b) {
            const c = dc(b, this.h);
            var d = 2 * b.h;
            a.save();
            a.beginPath();
            a.arc(c.g(), c.h(), d, 0, 2 * Math.PI, !1);
            a.closePath();
            a.lineWidth = this.A;
            a.strokeStyle = this.u;
            a.stroke();
            a.fillStyle = this.o;
            a.fill();
            this.i = d = this.l();
            const e = this.B();
            ve(this, a, b, "blue", d, c);
            ve(this, a, b, "red", e, c);
            b = d.toFixed(3);
            a.fillStyle = this.D;
            a.font = this.m;
            a.textAlign = "center";
            a.fillText(b, c.g(), c.h());
            a.restore()
        }
        M() {
            return !0
        }
        K() {
            return this.l() != this.i || this.g ? (this.g = !1,
            !0) : !1
        }
        V() {
            return []
        }
        S() {
            return this.h
        }
        v() {
            return []
        }
        j() {
            return 0
        }
        C(a) {
            this.h = a;
            this.g = !0
        }
    }
    var xe = {
        ua: "show clock"
    };
    class ye {
        constructor(a) {
            this.h = a
        }
        toString() {
            return ""
        }
        H() {
            return ""
        }
        o() {
            this.h()
        }
    }
    ;function ze() {
        return "myPhysicsLab version 2.0.0, advanced-compiled on 2023-03-15 13:59:43."
    }
    function Ae(a) {
        return a.replace(/\\(x|u00)([0-9a-fA-F]{2})/g, function(b, c, d) {
            return String.fromCharCode(Number("0x" + d))
        })
    }
    function Be(a) {
        return encodeURIComponent(a).replace(/[!'()*]/g, b=>"%" + b.charCodeAt(0).toString(16))
    }
    function Ce(a, b) {
        for (let d in window) {
            a: {
                for (let e = 0, f = b.length; e < f; e++)
                    if (d == b[e]) {
                        var c = !1;
                        break a
                    }
                c = (new RegExp("\\b" + d + "\\b","g")).test(a)
            }
            if (c)
                throw 'prohibited name: "' + d + '" found in script: ' + a;
        }
        if (/\b(myEval|Function|with|__proto__|call|apply|caller|callee|arguments|addAllowList|vetCommand|badCommand|allowList_|addRegex|addRegex2|regexs_|afterEvalFn_|setAfterEval|parentNode|parentElement|innerHTML|outerHTML|offsetParent|insertAdjacentHTML|appendChild|insertBefore|replaceChild|removeChild|ownerDocument|insertBefore|setParser|defineNames|globalEval|window|defineProperty|defineProperties|__defineGetter__|__defineSetter__)\b/g.test(a))
            throw "prohibited name in script: " + a;
    }
    function De(a, b) {
        a.j && (a.j.value += b + "\n",
        Ee(a))
    }
    function Fe(a) {
        let b = 0, c = "", d, e, f = "", g = !1, h = !1, l = !1, k = "", m, n;
        m = 0;
        for (n = a.length; m < n; m++)
            if (d = f,
            " " != f && "\t" != f && "\n" != f && (c = f),
            f = a[m],
            e = m + 1 < n ? a[m + 1] : "\x00",
            g) {
                if ("\n" == f && (g = !1,
                0 == b))
                    break
            } else if (h)
                "/" == f && "\\" != d && (h = !1);
            else if (l)
                f == k && "\\" != d && (l = !1,
                k = "");
            else if ("/" == f)
                "/" == e ? g = !0 : "*" == e || !c || "=" != c && "(" != c || (h = !0);
            else if ('"' == f || "'" == f)
                l = !0,
                k = f;
            else if (";" == f && 0 == b)
                break;
            else
                "{" == f ? b++ : "}" == f && b--;
        return [a.slice(0, m + 1), a.slice(m + 1)]
    }
    function Ge(a, b) {
        b = He(b);
        let c = ""
          , d = 0;
        for (; b; ) {
            if (1E4 < ++d)
                throw "Terminal.expand";
            var e = b.match(/^[^'"/]+/);
            if (null !== e && (e = e[0],
            b = b.slice(e.length),
            e = ja(a.G, function(f, g) {
                return f.replace(g.$b, g.replace)
            }, e),
            Ce(e, a.B),
            c += e,
            0 == b.length))
                break;
            if (c.match(/.*[=(][ ]*$/) && (e = b.match(/^\/[^*/](\\\/|[^\\/])*\//),
            null !== e)) {
                e = e[0];
                b = b.slice(e.length);
                c += e;
                continue
            }
            0 < b.length && "/" == b[0] ? (c += "/",
            b = b.slice(1)) : (e = b.match(/^"(\\.|[^\\"])*"/),
            null !== e ? (e = e[0],
            b = b.slice(e.length),
            c += e) : 0 < b.length && '"' == b[0] ? (c += '"',
            b = b.slice(1)) : (e = b.match(/^'(\\.|[^\\'])*'/),
            null !== e ? (e = e[0],
            b = b.slice(e.length),
            c += e) : 0 < b.length && "'" == b[0] && (c += "'",
            b = b.slice(1))))
        }
        return c
    }
    function Ee(a) {
        a.h && a.j && (a.j.scrollTop = a.j.scrollHeight - a.j.offsetHeight,
        a.h.value = "")
    }
    function He(a) {
        const b = a.match(/^\s*(var|let|const)\s+(\w[\w_\d]*)(.*)/);
        return b ? b[2] + b[3] : a
    }
    function Ie() {
        let a = window.location.href;
        const b = a.indexOf("?");
        -1 < b && (a = a.slice(0, b));
        return a
    }
    function Je(a) {
        a.s = !0;
        try {
            const b = window.localStorage;
            if (null != b) {
                const c = b.getItem(Ie());
                c && (De(a, "//start of stored scripts"),
                c.split("\n").forEach(d=>a.eval(d)),
                De(a, "//end of stored scripts"))
            }
        } catch (b) {
            De(a, "//cannot access localStorage due to: " + b)
        }
        a.s = !1
    }
    class Ke {
        constructor(a, b) {
            if (this.h = a)
                a.spellcheck = !1;
            if (this.j = b)
                b.spellcheck = !1;
            this.h && S(this.h, "keydown", this.C, !1, this);
            this.h && S(this.h, "change", this.D, !0, this);
            this.v = !1;
            this.l = [];
            this.i = -1;
            this.G = [];
            this.s = !1;
            this.u = [];
            this.z = {};
            this.B = "myphysicslab goog length name terminal find setTimeout alert".split(" ");
            this.o = null;
            this.m = 0;
            De(this, ze())
        }
        toString() {
            return ""
        }
        eval(a, b, c) {
            b = "boolean" === typeof b ? b : !0;
            if ((c = c || !1) && !b)
                throw "";
            a = Ae(a).trim();
            if (!a.match(/^\s*$/)) {
                this.m++;
                1 < this.m && (b = !1);
                b ? (this.l.unshift(a),
                this.i = -1) : (this.u.push(this.g),
                this.g = void 0);
                try {
                    var d = a
                      , e = /^\w\s*\[\s*\d*\s*\]$/
                      , f = d.match(/\w\s*\[[^\]]*?\]/g);
                    if (null != f)
                        for (let k = 0, m = f.length; k < m; k++)
                            if (!e.test(f[k]))
                                throw "prohibited usage of square brackets in script: " + d + " Only positive integer is allowed in brackets.  Try using Util.get(array, index) or Util.set(array, index, value).";
                    for (f = ["", a]; f = Fe(f[1]),
                    f[0]; ) {
                        const k = f[0].trim();
                        if (0 != k.length)
                            a: {
                                b && De(this, "> " + k);
                                if (k.match(/^\s*\/\/.*/))
                                    continue;
                                if (null != this.o) {
                                    b: {
                                        d = void 0;
                                        var g = this.o;
                                        e = k;
                                        ";" == e.slice(-1) && (e = e.slice(0, e.length - 1));
                                        for (let t = 0, F = g.g.length; t < F; t++)
                                            if (e.toLowerCase() == g.g[t]) {
                                                var h = g.s[t]();
                                                break b
                                            }
                                        const n = e.split("=")
                                          , w = v(n[0].trim())
                                          , C = Le(g, w);
                                        if (null == C || 2 < n.length)
                                            h = void 0;
                                        else {
                                            if (2 == n.length)
                                                try {
                                                    c: {
                                                        var l = n[1].trim();
                                                        if (2 > l.length) {
                                                            d = l;
                                                            break c
                                                        }
                                                        const t = l.charAt(0);
                                                        if (t != l.charAt(l.length - 1) || '"' != t && "'" != t)
                                                            d = l;
                                                        else {
                                                            e = "";
                                                            for (let F = 1, J = l.length - 1; F < J; F++) {
                                                                let P = l[F];
                                                                if ("\\" == P)
                                                                    if (F++,
                                                                    F < J)
                                                                        switch (P = l[F],
                                                                        P) {
                                                                        case "0":
                                                                            e += "\x00";
                                                                            break;
                                                                        case "b":
                                                                            e += "\b";
                                                                            break;
                                                                        case "t":
                                                                            e += "\t";
                                                                            break;
                                                                        case "n":
                                                                            e += "\n";
                                                                            break;
                                                                        case "v":
                                                                            e += "\v";
                                                                            break;
                                                                        case "f":
                                                                            e += "\f";
                                                                            break;
                                                                        case "r":
                                                                            e += "\r";
                                                                            break;
                                                                        case '"':
                                                                            e += '"';
                                                                            break;
                                                                        case "'":
                                                                            e += "'";
                                                                            break;
                                                                        case "\\":
                                                                            e += "\\";
                                                                            break;
                                                                        default:
                                                                            e += "\\" + P
                                                                        }
                                                                    else
                                                                        e += P;
                                                                else
                                                                    e += P
                                                            }
                                                            d = e
                                                        }
                                                    }
                                                    C.o(d)
                                                } catch (t) {
                                                    throw t.message += '\nwhile setting value "' + d + '" on parameter ' + w,
                                                    t;
                                                }
                                            h = C.J()
                                        }
                                    }
                                    d = h;
                                    if (void 0 !== d) {
                                        this.g = d;
                                        break a
                                    }
                                }
                                const m = Ge(this, k);
                                console.log("JavaScript is disabled due to advanced compilation; try a simple-compiled version: " + m);
                                De(this, "JavaScript is disabled due to advanced compilation; try a simple-compiled version");
                                this.g = void 0
                            }
                    }
                    b && void 0 !== this.g && ";" != a.slice(-1) && De(this, String(this.g));
                    b && void 0 !== this.A && this.A()
                } catch (k) {
                    if (b ? (this.g = void 0,
                    De(this, k)) : this.g = this.u.pop(),
                    !c)
                        throw this.m--,
                        k;
                }
                this.m--;
                if (b)
                    return Ee(this),
                    this.g;
                a = this.g;
                this.g = this.u.pop();
                return a
            }
        }
        C(a) {
            this.h && this.j && (a.metaKey && 75 == a.g ? (this.j.value = "",
            a.h()) : 38 == a.g || 40 == a.g ? (-1 == this.i && "" != this.h.value && (this.l.unshift(this.h.value),
            this.i = 0),
            38 == a.g ? this.i < this.l.length - 1 && (this.i++,
            this.h.value = this.l[this.i]) : 40 == a.g && (0 < this.i ? (this.i--,
            this.h.value = this.l[this.i]) : (this.i = -1,
            this.h.value = "")),
            a.h()) : 13 == a.g && this.eval(this.h.value, !0, !0))
        }
        D() {
            this.h && this.eval(this.h.value, !0, !0)
        }
    }
    ;function Me(a) {
        const b = [];
        a.forEach(c=>{
            c = c.F();
            if (b.includes(c))
                throw "duplicate Subject name: " + c;
            b.push(c)
        }
        )
    }
    function Ne(a, b, c, d) {
        a.g.push(b);
        a.s.push(c);
        a.u.push(d)
    }
    function Oe(a) {
        return window.location.href.replace(/\.html\?.*$/, ".html") + "?" + Be(Pe(a))
    }
    function Pe(a) {
        let b = Qe(a, !1).split(";");
        b = b.concat(Qe(a, !0).split(";"));
        const c = pa(a.v, a.m);
        oa(b, d=>c.includes(d));
        return b.join(";") + (0 < b.length ? ";" : "")
    }
    function Re(a) {
        const b = ja(a.i, function(c, d) {
            d = ia(d.getParameters(), e=>"DELETED" != e.F());
            return c.concat(d)
        }, []);
        a.l = b.map(c=>c.P());
        a.h = b.map(c=>v(c.F()));
        a.j = b.map(c=>v(c.P().F() + "." + c.F()));
        a.A = a.h.map(c=>1 == ka(a.h, d=>d == c));
        a.m = Qe(a, !0).split(";")
    }
    function Le(a, b) {
        b = v(b);
        const c = b.split(".");
        let d, e;
        if (1 == c.length)
            d = "",
            e = c[0];
        else if (2 == c.length)
            d = c[0],
            e = c[1];
        else
            return null;
        if ("" == d) {
            if (1 < ka(a.h, f=>f == e))
                throw "multiple Subjects have Parameter " + e;
            b = a.h.indexOf(e)
        } else
            b = a.j.indexOf(b);
        return -1 < b ? a.l[b].S(e) : null
    }
    function Qe(a, b, c, d) {
        b = 1 == b;
        const e = a.l.map((h,l)=>h.S(a.h[l]));
        let f = e;
        c || (f = ia(f, h=>!h.fa()));
        f = ia(f, h=>a.o.includes(h.P()) == b, a);
        const g = /^[a-zA-Z0-9_]+$/;
        c = f.map(h=>{
            const l = v(h.F())
              , k = e.indexOf(h);
            let m = h.J();
            "string" !== typeof m || g.test(m) || (m = '"' + m + '"');
            return !d && a.A[k] ? l + "=" + m : v(h.P().F()) + "." + l + "=" + m
        }
        );
        return 0 < c.length ? c.join(";") + ";" : ""
    }
    class Se {
        constructor(a, b) {
            Me(a);
            this.i = a;
            this.o = Array.isArray(b) ? b : [];
            oa(this.i, c=>this.o.includes(c), this);
            this.i = this.i.concat(this.o);
            this.v = [];
            this.m = [];
            this.j = [];
            this.h = [];
            this.l = [];
            this.A = [];
            this.g = [];
            this.s = [];
            this.u = [];
            Ne(this, "url", ()=>Oe(this), "prints URL with script to recreate current state");
            Ne(this, "script", ()=>Pe(this), "prints script to recreate current state");
            Ne(this, "values", ()=>xa(this.values()), "shows available parameters and their current values");
            Ne(this, "names", ()=>xa(Array.from(this.j).join(";")), "shows available parameter names (format is SUBJECT.PARAMETER)");
            Ne(this, "help", ()=>{
                let c = ze() + "\n";
                c += 'Use the "values" command to see what can be set and the syntax.\n\ncommand-K            clear Terminal window\narrow up/down        retrieve previous or next command\n';
                for (let d = 0, e = this.g.length; d < e; d++) {
                    let f = this.g[d];
                    for (; 20 > f.length; )
                        f += " ";
                    c += f + " " + this.u[d] + "\n"
                }
                return c
            }
            , "prints this help text");
            Re(this)
        }
        toString() {
            return ""
        }
        H() {
            return ""
        }
        P() {
            const a = v();
            return la(this.i, b=>b.F() == a)
        }
        values() {
            return Qe(this, !1, !0, !0) + Qe(this, !0, !0, !0)
        }
    }
    var Te = {
        Qb: "share",
        Hb: "Press command-C to copy this URL to the clipboard, it will replicate this simulation with current parameters.",
        Rb: "WARNING: URL is longer than 2048 characters."
    };
    function Ue(a) {
        a = a.h + a.g;
        isNaN(NaN) || (a += NaN);
        return a
    }
    class Ve {
        constructor(a, b) {
            this.h = a || 0;
            this.g = b || 0
        }
        toString() {
            return ""
        }
    }
    ;var We = {
        sa: "potential energy",
        jb: "translational energy",
        qa: "kinetic energy",
        cb: "rotational energy",
        hb: "total",
        ib: "total energy",
        Na: "potential energy offset"
    };
    function Xe(a) {
        var b = Math.abs(a);
        1E-16 > b ? b = "0" : .001 > b ? (b = b.toExponential(3),
        b = b.replace(/\.0+([eE])/, "$1"),
        b = b.replace(/(\.\d*[1-9])0+([eE])/, "$1$2")) : 10 > b ? (b = b.toFixed(4),
        b = b.replace(/\.0+$/, ""),
        b = b.replace(/(\.\d*[1-9])0+$/, "$1")) : 100 > b ? (b = b.toFixed(3),
        b = b.replace(/\.0+$/, ""),
        b = b.replace(/(\.\d*[1-9])0+$/, "$1")) : 1E3 > b ? (b = b.toFixed(2),
        b = b.replace(/\.0+$/, ""),
        b = b.replace(/(\.[1-9])0$/, "$1")) : 1E4 > b ? b = b.toFixed(0) : (b = b.toExponential(3),
        b = b.replace(/\.0+([eE])/, "$1"),
        b = b.replace(/(\.\d*[1-9])0+([eE])/, "$1$2"));
        return 0 > a ? "-" + b : b
    }
    function Ye(a, b, c, d, e) {
        a.fillStyle = c;
        a.fillRect(d, e, 10, 10);
        d += 13;
        c = a.measureText(b).width;
        a.fillStyle = "#000";
        a.fillText(b, d, e + 12);
        return d += c + 5
    }
    function Ze(a, b) {
        a.u = b;
        a.Z = !0;
        a.O = !0
    }
    class $e {
        constructor(a) {
            this.ub = "10pt sans-serif";
            this.Tb = a;
            this.h = gb;
            this.D = this.l = this.g = 0;
            this.i = 10;
            this.A = 2;
            this.s = !0;
            this.ea = "#666";
            this.qb = "#999";
            this.ob = "#ccc";
            this.R = u();
            this.$ = this.T = this.da = 0;
            this.pb = 1;
            this.Aa = Ka;
            this.o = this.Y = this.N = this.m = 0;
            this.B = Array(12);
            this.U = 0;
            this.u = gb;
            this.O = this.Z = !0
        }
        toString() {
            return ""
        }
        H() {
            return ""
        }
        G(a) {
            return bb(this.h, a)
        }
        I(a, b) {
            if (!this.u.m()) {
                a.save();
                a.font = this.ub;
                a.textAlign = "start";
                a.textBaseline = "alphabetic";
                var c = af(this.Tb)
                  , d = c.g
                  , e = c.h
                  , f = bf.jb + ",";
                isNaN(NaN) && (f = bf.qa + ",");
                var g = 58 / b.g;
                if (this.Z || this.h.m() || x(g, this.h.j())) {
                    var h = this.h.m() ? this.u.l() : this.h.l();
                    let l = h - g;
                    h > this.u.l() || g > this.u.j() ? (h = this.u.l(),
                    l = h - g) : l < this.u.g && (l = this.u.g,
                    h = l + g);
                    this.h = new K(this.u.o(),l,this.u.h,h);
                    this.s = !0;
                    this.Z = !1
                }
                this.l = M(b, this.h.o()) + 10;
                this.D = M(b, this.h.h);
                g = this.D - this.l;
                b = N(b, this.h.l());
                a.fillStyle = "rgba(255,255,255,0.75)";
                a.fillRect(this.l - 10, b, g + 10, 58);
                this.o = d + e + (isNaN(NaN) ? 0 : NaN);
                this.Y = 0 > e ? e : 0;
                .3 < u() - this.Aa && (this.Aa = u(),
                this.$ = this.T,
                this.T = Ue(c));
                c = this.Y;
                d = u();
                1 < d - this.da ? (this.da = d,
                ++this.U >= this.B.length && (this.U = 0),
                this.B[this.U] = c) : this.Y < this.B[this.U] && (this.B[this.U] = c);
                12 < d - this.R ? (this.R = d,
                c = !0) : c = !1;
                d = 0;
                for (let l = 0, k = this.B.length; l < k; l++)
                    this.B[l] < d && (d = this.B[l]);
                this.m = d;
                -1E-6 > this.m ? (this.g + Math.floor(.5 + this.m * this.i) < this.l - 10 && (this.s = !0),
                c && -this.m * this.i < .2 * (this.g - this.l) && (this.s = !0)) : 1E-6 < this.m ? this.g > this.l && (this.s = !0) : c && 10 < this.g - this.l && (this.s = !0);
                this.o > this.N && (this.N = this.o);
                1E-12 < this.o ? (this.g + this.o * this.i > this.D && (this.s = !0),
                this.D - this.g > .2 * (this.g - this.l) && this.o * this.i < .2 * (this.D - this.g) && (this.s = !0,
                this.N = this.o)) : -1E-12 > this.o && c && (0 > this.N && this.g < this.D && (this.s = !0),
                this.N = this.o);
                this.s && (this.R = u(),
                this.s = !1,
                c = 0 < this.o ? this.o : 0,
                c -= this.m,
                1E-16 > c && (c = 1),
                this.i = c * this.i > g ? .75 * g / c : .95 * g / c,
                this.g = -1E-12 > this.m ? this.l + Math.floor(.5 + this.i * -this.m) : this.l,
                g = Math.pow(10, Math.floor(Math.log(c) / Math.log(10))),
                c /= g,
                this.A = 8 <= c ? 2 : 5 <= c ? 1 : 3 <= c ? .5 : 2 <= c ? .4 : .2,
                this.A *= g);
                g = this.g;
                a.fillStyle = this.ea;
                0 > e ? (e = Math.floor(.5 - e * this.i),
                a.fillRect(g - e, b, e, 10),
                g -= e) : (e = Math.floor(.5 + e * this.i),
                a.fillRect(g, b + 10, e, 10),
                g += e);
                isNaN(NaN) || (e = Math.floor(.5 + NaN * this.i),
                a.fillStyle = this.ob,
                a.fillRect(g, b + 10, e, 10),
                g += e);
                e = this.g + Math.floor(.5 + this.o * this.i) - g;
                a.fillStyle = this.qb;
                a.fillRect(g, b + 10, e, 10);
                e = this.l;
                b += 10;
                c = (this.D - this.g) / this.i;
                if (1E-18 < Math.abs(c) && 1E-18 < this.A) {
                    a.fillStyle = "#000";
                    a.strokeStyle = "#000";
                    g = 0;
                    do
                        d = this.g + Math.floor(g * this.i),
                        a.beginPath(),
                        a.moveTo(d, b + 5),
                        a.lineTo(d, b + 12),
                        a.stroke(),
                        h = Xe(g),
                        a.fillText(h, d - a.measureText(h).width / 2, b + 25),
                        g += this.A;
                    while (g < c + this.A + 1E-16);
                    if (-1E-12 > this.m) {
                        g = -this.A;
                        do
                            c = this.g + Math.floor(g * this.i),
                            a.beginPath(),
                            a.moveTo(c, b + 5),
                            a.lineTo(c, b + 12),
                            a.stroke(),
                            d = Xe(g),
                            a.fillText(d, c - a.measureText(d).width / 2, b + 25),
                            g -= this.A;
                        while (g > this.m && c >= e)
                    }
                }
                e = b + 33;
                b = this.l;
                b = Ye(a, bf.sa + ",", this.ea, b, e);
                isNaN(NaN) || (b = Ye(a, bf.cb + ",", this.ob, b, e));
                b = Ye(a, f, this.qb, b, e);
                f = bf.hb + " ";
                g = this.T;
                c = Math.abs(g - this.$);
                1E-15 < c && (c = -Math.floor(Math.log(c) / Math.log(10)),
                c = 0 < c ? c : 1,
                this.pb = 20 > c ? c : 20);
                c = Math.abs(g);
                g = 0 > g ? "-" : "+";
                f += 1E-6 > c ? g + c.toExponential(5) : g + c.toFixed(this.pb);
                a.fillStyle = "#000";
                a.fillText(f, b, e + 12);
                a.restore()
            }
        }
        K() {
            return this.O ? (this.O = !1,
            !0) : !1
        }
        v() {
            return []
        }
        V() {
            return []
        }
        S() {
            return this.h.m() ? new I(0,0) : eb(this.h)
        }
        j() {
            return 0
        }
        M() {
            return !0
        }
        C(a) {
            if (this.h.m())
                this.h = new K(-5,a.h() - .5,5,a.h() + .5);
            else {
                const b = this.h.j() / 2;
                this.h = new K(this.h.o(),a.h() - b,this.h.h,a.h() + b)
            }
            this.O = !0
        }
    }
    var cf = {
        eb: "show energy",
        sa: "potential",
        jb: "translational",
        qa: "kinetic",
        cb: "rotational",
        hb: "total"
    }
      , bf = cf;
    class df {
        constructor(a, b) {
            Ta(a, this);
            this.h = b
        }
        toString() {
            return ""
        }
        H() {
            return ""
        }
        i(a) {
            this.h(a)
        }
    }
    ;class ef {
        constructor(a) {
            this.g = a
        }
        toString() {
            return ""
        }
        H() {
            return ""
        }
        h() {
            return this.g
        }
    }
    ;function ff(a, b) {
        if (x(a.s, b)) {
            if (0 >= b || 1 < b)
                throw "alpha must be between 0 and 1";
            a.s = b;
            x(b, 1) && "" == a.u && hf(a, "white");
            a.m = !0;
            D(a, V.ALPHA)
        }
    }
    function hf(a, b) {
        a.u != b && (a.u = b,
        a.m = !0,
        D(a, V.ga))
    }
    function jf(a, b) {
        if (0 < a.i() && 0 < a.j()) {
            const c = new Ub(a.i(),a.j());
            Xc(b, c)
        }
        a.v.push(b);
        a.l(b);
        a.m = !0;
        A(a, new y(a,"VIEW_ADDED",b));
        A(a, new y(a,"VIEW_LIST_MODIFIED"));
        if (null == a.B) {
            if (null != b && !a.v.includes(b))
                throw "cannot set focus to unknown view " + b;
            a.B != b && (a.B = b,
            a.m = !0,
            A(a, new y(a,"FOCUS_VIEW_CHANGED",b)))
        }
    }
    function kf(a) {
        let b = !1;
        for (let e = 0, f = a.v.length; e < f; e++) {
            var c = a.v[e];
            {
                var d = c.v;
                let g = !1;
                for (let h = 0, l = d.g.length; h < l; h++) {
                    const k = d.g[h].K();
                    g = g || k
                }
                g || d.i ? (d.i = !1,
                d = !0) : d = !1
            }
            d || c.G ? (c.G = !1,
            c = !0) : c = !1;
            b = b || c
        }
        return b || a.m ? (a.m = !1,
        !0) : !1
    }
    function lf(a) {
        return new Ub(a.g.width,a.g.height)
    }
    function mf(a) {
        const b = lf(a);
        a.v.forEach(c=>Xc(c, b));
        a.m = !0;
        A(a, new y(a,"SIZE_CHANGED"))
    }
    function nf(a) {
        if (null != a.g.offsetParent) {
            0 < a.A && a.A--;
            const b = kf(a);
            if (b || 0 < a.A) {
                const c = a.g.getContext("2d");
                c.save();
                try {
                    "" != a.u ? (c.globalAlpha = a.s,
                    c.fillStyle = a.u,
                    c.fillRect(0, 0, a.g.width, a.g.height),
                    c.globalAlpha = 1,
                    1 == a.s ? a.A = 0 : b && (a.A = Math.floor(10 / a.s))) : c.clearRect(0, 0, a.g.width, a.g.height),
                    a.v.forEach(d=>{
                        c.save();
                        c.globalAlpha = d.T;
                        Ic(d.v, c, d.A);
                        c.restore()
                    }
                    )
                } finally {
                    c.restore()
                }
            }
        }
    }
    function of(a, b, c) {
        if ("number" !== typeof b || 0 >= b || "number" !== typeof c || 0 >= c)
            throw "bad size " + b + ", " + c;
        a.g.width = b;
        a.g.height = c;
        mf(a);
        D(a, V.aa);
        D(a, V.X)
    }
    class pf extends H {
        constructor(a, b) {
            super(b);
            this.g = a;
            a.contentEditable = !1;
            document.body.addEventListener("touchstart", function(c) {
                c.target == a && c.preventDefault()
            }, {
                passive: !1
            });
            document.body.addEventListener("touchend", function(c) {
                c.target == a && c.preventDefault()
            }, {
                passive: !1
            });
            document.body.addEventListener("touchmove", function(c) {
                c.target == a && c.preventDefault()
            }, {
                passive: !1
            });
            this.v = [];
            this.C = new Nc;
            this.B = null;
            this.s = 1;
            this.u = "";
            this.m = !0;
            this.A = 0;
            this.h(new B(this,V.aa,qf.aa,()=>this.i(),c=>{
                x(c, this.g.width) && (this.g.width = c);
                mf(this);
                D(this, V.aa)
            }
            ));
            this.h(new B(this,V.X,qf.X,()=>this.j(),c=>{
                x(c, this.g.height) && (this.g.height = c);
                mf(this);
                D(this, V.X)
            }
            ));
            this.h(new B(this,V.ALPHA,qf.ALPHA,()=>this.s,c=>ff(this, c)));
            this.h(new Ra(this,V.ga,qf.ga,()=>this.u,c=>hf(this, c)))
        }
        toString() {
            return ""
        }
        l(a) {
            this.C.l(a)
        }
        j() {
            return this.g.height
        }
        i() {
            return this.g.width
        }
        o() {
            this.C.o()
        }
        D(a) {
            this.C.D(a)
        }
    }
    var V = {
        aa: "width",
        X: "height",
        ALPHA: "alpha",
        ga: "background"
    }
      , qf = V;
    function rf(a) {
        if (null != a.o) {
            var b = u()
              , c = b - (a.l - a.j);
            c >= a.h && (a.o(),
            a.l = b,
            a.j = 0 < a.h ? c % a.h : 0);
            a.g = a.m ? setTimeout(a.s, 0 < a.h ? Math.round(1E3 * a.h) : 17) : requestAnimationFrame(a.s)
        }
    }
    function sf(a) {
        a.i = !1;
        void 0 !== a.g && (a.m ? clearTimeout(a.g) : cancelAnimationFrame(a.g),
        a.g = void 0);
        a.l = NaN;
        a.j = 0
    }
    function tf(a, b) {
        sf(a);
        a.o = b
    }
    function uf(a, b) {
        if (0 > b)
            throw "";
        a.h = b
    }
    function vf(a) {
        a.i || (a.i = !0,
        a.j = 0,
        a.l = u() - a.h - 1E-7,
        rf(a))
    }
    class wf {
        constructor() {
            this.m = "function" !== typeof requestAnimationFrame;
            this.g = void 0;
            this.o = null;
            this.s = ()=>rf(this);
            this.h = 0;
            this.i = !1;
            this.l = Ja;
            this.j = 0
        }
        toString() {
            return ""
        }
    }
    ;function xf(a, b) {
        a.A.includes(b) || (a.A.push(b),
        a.l(b))
    }
    function yf(a, b) {
        a.C.includes(b) || a.C.push(b)
    }
    function zf(a) {
        a.A.forEach(b=>nf(b))
    }
    function Af(a, b) {
        Bf(a);
        sf(a.j);
        a.C.forEach(c=>{
            c.i && Cf(c)
        }
        );
        alert(Df.Nb + (null != b ? " " + b : ""))
    }
    function Bf(a) {
        je(a.g);
        return U(a.g)
    }
    function Ef(a) {
        vf(a.j);
        me(a.g);
        return U(a.g)
    }
    function Ff(a) {
        a.m.forEach(b=>{
            Gf(b.h)
        }
        );
        return U(a.g)
    }
    function Hf(a) {
        const b = W(a.m[0].h) + a.s - U(a.g);
        var c = a.g;
        je(c);
        c.o = !0;
        const d = c.j;
        c.j += b;
        c.l += b;
        A(c, new y(c,"CLOCK_STEP"));
        he(c, d, b);
        vf(a.j);
        return U(a.g)
    }
    class If extends H {
        constructor(a) {
            super("SIM_RUNNER");
            this.m = [a];
            this.s = .025;
            this.B = 0;
            this.u = !1;
            this.j = new wf;
            uf(this.j, this.B);
            tf(this.j, ()=>{
                try {
                    if (this.g.g || this.g.o) {
                        let f = U(this.g)
                          , g = W(this.m[0].h);
                        if (f > g + 1 || f < g - 1) {
                            var b = g + this.s;
                            ne(this.g, b);
                            le(this.g, b);
                            f = b
                        }
                        const h = f;
                        for (let l = 0, k = this.m.length; l < k; l++) {
                            var c = this.m[l];
                            b = h;
                            let m = W(c.h);
                            for (; m < b; ) {
                                var d = c
                                  , e = this.s;
                                Jf(d.h.s, W(d.h));
                                const n = d.g.g(e);
                                if (null != n)
                                    throw "error during advance " + n;
                                Kf(d.h);
                                void 0 !== this && this.o();
                                if (!this.g.g)
                                    break;
                                d = m;
                                m = W(c.h);
                                if (1E-15 >= m - d)
                                    throw "SimRunner: time did not advance";
                                if (b - m < this.s)
                                    break
                            }
                        }
                        this.g.o ? this.g.o = !1 : (f = U(this.g),
                        g = W(this.m[0].h),
                        f - g > 20 * this.s && ne(this.g, g))
                    }
                    zf(this)
                } catch (f) {
                    Af(this, f)
                }
            }
            );
            this.g = new oe;
            a = W(a.h);
            ne(this.g, a);
            le(this.g, a);
            Ta(this.g, this);
            this.A = [];
            this.v = new Nc;
            this.C = [];
            this.h(Qa(new B(this,E.ya,Df.ya,()=>this.s,b=>{
                this.s = b;
                D(this, E.ya)
            }
            ), 3));
            this.h(Qa(new B(this,E.Ea,Df.Ea,()=>this.B,b=>{
                this.B = b;
                uf(this.j, b);
                D(this, E.Ea)
            }
            ), 3));
            this.h(new z(this,E.ta,Df.ta,()=>this.g.g,b=>{
                b ? Ef(this) : Bf(this)
            }
            ));
            this.h(new z(this,E.Ga,Df.Ga,()=>this.j.i,b=>{
                b ? vf(this.j) : (zf(this),
                this.u || sf(this.j));
                D(this, E.Ga)
            }
            ));
            this.h(new z(this,E.La,Df.La,()=>this.u,b=>{
                this.u = b;
                D(this, E.La)
            }
            ))
        }
        toString() {
            return ""
        }
        l(a) {
            this.v.l(a)
        }
        o() {
            this.v.o()
        }
        i(a) {
            a.P() == this.g && (a.L("CLOCK_RESUME") || a.L("CLOCK_PAUSE") ? (a = W(this.m[0].h),
            ne(this.g, a),
            le(this.g, a),
            D(this, E.ta)) : a.L("CLOCK_SET_TIME") && this.o())
        }
        D(a) {
            this.v.D(a)
        }
        reset() {
            vf(this.j);
            je(this.g);
            this.m.forEach(b=>b.reset());
            const a = W(this.m[0].h);
            ne(this.g, a);
            le(this.g, a);
            zf(this);
            A(this, new y(this,"RESET"));
            return U(this.g)
        }
    }
    var E = {
        ya: "time step",
        Ea: "display period",
        Jb: "restart",
        ta: "running",
        Ga: "firing",
        Xb: "pause",
        Yb: "resume",
        La: "non-stop",
        Mb: "step",
        Nb: "Simulation is stuck; click reset and play to continue."
    }
      , Df = E;
    function Lf(a, b) {
        a.l != b && (Ma(a.j, b),
        a.l = b,
        a.m.style.display = b ? "block" : "none",
        a.s.style.display = b ? "none" : "block")
    }
    class Mf {
        constructor(a, b, c) {
            this.j = a;
            this.l = this.j.J();
            this.s = b;
            this.m = c;
            this.g = document.createElement("button");
            this.g.type = "button";
            this.g.className = "icon";
            c.style.display = this.l ? "block" : "none";
            b.style.display = this.l ? "none" : "block";
            this.g.appendChild(b);
            this.g.appendChild(c);
            S(this.g, "click", this.o, !0, this);
            Ta(this.j.P(), this)
        }
        toString() {
            return ""
        }
        H() {
            return ""
        }
        h() {
            return this.g
        }
        o() {
            Lf(this, !this.l)
        }
        i(a) {
            a == this.j && Lf(this, this.j.J())
        }
    }
    ;function Nf(a, b) {
        const c = new ue(a.s);
        b && (se(c),
        te(c));
        new df(a,d=>{
            d.L("COORD_MAP_CHANGED") && (d = cc(a.A, a.u),
            c.g = d,
            c.h = !0)
        }
        );
        a.v.add(c);
        return c
    }
    function Of(a) {
        var b = [Pf.Ba, Pf.ia, Pf.mb, Pf.Ya, Pf.lb, Pf.Xa];
        let c = [Qf.Ba, Qf.ia, Qf.mb, Qf.Ya, Qf.lb, Qf.Xa];
        c = c.map(d=>v(d));
        b = new ee(b,c,()=>{
            const d = a.u
              , e = a.s;
            if ("" == d)
                return c[0];
            if ("black" == d)
                if (x(e, 1)) {
                    if (!x(e, .1))
                        return c[3];
                    if (!x(e, .05))
                        return c[5]
                } else
                    return c[1];
            else if ("white" == d)
                if (x(e, 1)) {
                    if (!x(e, .1))
                        return c[2];
                    if (!x(e, .05))
                        return c[4]
                } else
                    return c[0];
            return -1
        }
        ,d=>{
            switch (ea(c, d)) {
            case 0:
                hf(a, "");
                ff(a, 1);
                break;
            case 1:
                hf(a, "black");
                ff(a, 1);
                break;
            case 2:
                hf(a, "white");
                ff(a, .1);
                break;
            case 3:
                hf(a, "black");
                ff(a, .1);
                break;
            case 4:
                hf(a, "white");
                ff(a, .05);
                break;
            case 5:
                hf(a, "black"),
                ff(a, .05)
            }
        }
        ,Pf.ga);
        Ta(a, b);
        return b
    }
    function Rf(a, b) {
        var c = Ba + "/"
          , d = document.createElement("div");
        d.style.width = "96px";
        var e = q(c + "up_gray.png");
        e = new T("up",()=>{
            Rc(a, a.C + .05 * a.g)
        }
        ,e);
        e.g = 100;
        d.appendChild(e.h());
        const f = document.createElement("div");
        f.style.width = d.style.width;
        e = q(c + "backward_gray.png");
        e = new T("left",()=>{
            Qc(a, a.B - .05 * a.m)
        }
        ,e);
        e.g = 100;
        f.appendChild(e.h());
        e = q(c + "target_gray.png");
        e = new T("reset",b,e);
        f.appendChild(e.h());
        e = q(c + "forward_gray.png");
        e = new T("right",()=>{
            Qc(a, a.B + .05 * a.m)
        }
        ,e);
        e.g = 100;
        f.appendChild(e.h());
        const g = document.createElement("div");
        e = q(c + "down_gray.png");
        e = new T("down",()=>{
            Rc(a, a.C - .05 * a.g)
        }
        ,e);
        e.g = 100;
        g.appendChild(e.h());
        g.style.width = d.style.width;
        b = document.createElement("div");
        b.appendChild(d);
        b.appendChild(f);
        b.appendChild(g);
        b.style.textAlign = "center";
        d = document.createElement("div");
        e = q(c + "plus_gray.png");
        e = new T("zoomIn",()=>{
            Oc(a, a.g / 1.1)
        }
        ,e);
        e.g = 100;
        d.appendChild(e.h());
        d.appendChild(document.createElement("BR"));
        e = q(c + "minus_gray.png");
        e = new T("zoomOut",()=>{
            Oc(a, 1.1 * a.g)
        }
        ,e);
        e.g = 100;
        d.appendChild(e.h());
        d.style.cssFloat = "right";
        d.style.marginTop = "18px";
        c = document.createElement("div");
        c.style.position = "absolute";
        c.style.left = "5%";
        c.style.top = "5%";
        c.style.width = "126px";
        c.appendChild(d);
        c.appendChild(b);
        c.style.display = "none";
        return c
    }
    function Sf(a) {
        var b = Ba + "/";
        const c = document.createElement("div");
        c.style.width = "max-content";
        var d = q(b + "restart.png");
        d = new T(Df.Jb,()=>a.reset(),d);
        c.appendChild(d.h());
        d = q(b + "forward.png");
        const e = q(b + "pause.png");
        d = new Mf(Va(a),d,e);
        c.appendChild(d.h());
        d = q(b + "next.png");
        b = new T(Df.Mb,()=>Hf(a),d);
        b.g = 100;
        c.appendChild(b.h());
        return new ef(c)
    }
    function Tf(a, b, c, d) {
        a = new Se(a,b);
        Ne(a, "reset", ()=>c.reset(), "sets simulation to initial conditions");
        Ne(a, "save", ()=>Ff(c), "saves simulation initial conditions");
        Ne(a, "step", ()=>Hf(c), "advance simulation by a small time increment");
        Ne(a, "pause", ()=>Bf(c), "pause simulation");
        Ne(a, "resume", ()=>Ef(c), "resume simulation");
        return d.o = a
    }
    function Uf(a, b, c) {
        const d = b.v;
        b = new z(c,xe.ua,xe.ua,()=>Hc(d, a),e=>{
            e ? d.add(a) : Kc(d, a);
            D(c, xe.ua)
        }
        );
        c.h(b);
        new df(d,e=>{
            e.J() == a && D(c, xe.ua)
        }
        );
        return b
    }
    function Vf(a, b, c) {
        const d = cf.eb
          , e = bf.eb
          , f = cc(b.A, b.u);
        Ze(a, f);
        const g = b.v;
        b = new z(c,d,e,()=>Hc(g, a),h=>{
            h ? g.add(a) : Kc(g, a);
            D(c, d)
        }
        );
        c.h(b);
        new df(g,h=>{
            h.J() == a && D(c, d)
        }
        );
        return b
    }
    function Wf(a, b) {
        const c = new z(b,Qf.Ma,Pf.Ma,()=>"none" != a.style.display,d=>{
            a.style.display = d ? "block" : "none";
            D(b, Qf.Ma)
        }
        );
        b.h(c);
        return c
    }
    function Xf(a, b) {
        if (void 0 === a)
            throw "";
        return new T(Te.Qb,()=>{
            const c = Oe(a);
            let d = Te.Hb;
            2048 < c.length && (d = d + "  " + Te.Rb);
            const e = b.j.i;
            e && (b.u || sf(b.j));
            window.prompt(d, c);
            e && vf(b.j)
        }
        )
    }
    var Qf = {
        Ma: "pan-zoom",
        ga: "background",
        Ba: "white",
        ia: "black",
        mb: "white with trails",
        Ya: "black with trails",
        lb: "white with long trails",
        Xa: "black with long trails"
    }
      , Pf = Qf;
    function Yf(a, b) {
        return la(a.g, function(c) {
            return c.D(b, .1)
        })
    }
    function Jf(a, b) {
        for (let c = a.g.length - 1; 0 <= c; c--) {
            const d = a.g[c];
            d.C < b && (a.g.splice(c, 1),
            A(a, new y(a,"OBJECT_REMOVED",d)))
        }
    }
    class Zf extends H {
        constructor() {
            super("SIM_LIST");
            this.g = []
        }
        toString() {
            return ""
        }
        H() {
            return ""
        }
        add(a) {
            for (let c = 0; c < arguments.length; c++) {
                const d = arguments[c];
                if (!d)
                    throw "cannot add invalid SimObject";
                if (isFinite(d.C))
                    for (var b = void 0; b = Yf(this, d); )
                        na(this.g, b) && A(this, new y(this,"OBJECT_REMOVED",b));
                this.g.includes(d) || (this.g.push(d),
                A(this, new y(this,"OBJECT_ADDED",d)))
            }
        }
        get(a) {
            if ("number" === typeof a) {
                if (0 <= a && a < this.g.length)
                    return this.g[a]
            } else if ("string" === typeof a) {
                a = v(a);
                const b = la(this.g, function(c) {
                    return c.F() == a
                });
                if (null != b)
                    return b
            }
            throw "SimList did not find " + a;
        }
        indexOf(a) {
            return this.g.indexOf(a)
        }
        length() {
            return this.g.length
        }
    }
    ;class $f {
        constructor(a, b, c) {
            this.h = a;
            this.i = b;
            this.j = c
        }
        toString() {
            return ""
        }
        H() {
            return ""
        }
        F(a) {
            return a ? ag.W + "-" + this.j.F(!0) : v(bg.W) + "_" + this.j.F(!1)
        }
        L(a) {
            return this.F() == v(a)
        }
        g(a) {
            var b = this.h;
            b.B = wb(b.l);
            b = W(this.h);
            let c = a;
            Kf(this.h);
            const d = Ue(af(this.i));
            let e = La
              , f = La
              , g = !0;
            if (1E-15 > a)
                return null;
            do {
                var h = b;
                if (!g) {
                    var l = this.h;
                    null != l.B && zb(l.l, l.B, !0);
                    Kf(this.h);
                    af(this.i);
                    c /= 5;
                    if (1E-15 > c)
                        throw "time step too small " + c;
                }
                for (l = 0; h < b + a; ) {
                    let k = c;
                    h + k > b + a - 1E-10 && (k = b + a - h);
                    l++;
                    const m = this.j.g(k);
                    Kf(this.h);
                    if (null != m)
                        return m;
                    h += k
                }
                h = Ue(af(this.i));
                h = Math.abs(d - h);
                g || (f = Math.abs(h - e));
                e = h;
                g = !1
            } while (1E-6 < f);
            return null
        }
    }
    var bg = {
        W: "Adaptive"
    }
      , ag = bg;
    class cg {
        constructor(a) {
            this.j = a;
            this.h = [];
            this.i = []
        }
        toString() {
            return ""
        }
        H() {
            return ""
        }
        F(a) {
            return a ? dg.W : v(eg.W)
        }
        L(a) {
            return this.F() == v(a)
        }
        g(a) {
            const b = this.j.g()
              , c = wb(b)
              , d = c.length;
            this.h.length != d && (this.h = Array(d),
            this.i = Array(d));
            var e = this.h;
            const f = this.i;
            for (let g = 0; g < d; g++)
                e[g] = c[g];
            Ha(f);
            e = fg(this.j, e, f);
            if (null != e)
                return e;
            for (e = 0; e < d; e++)
                c[e] += f[e] * a;
            zb(b, c, !0);
            return null
        }
    }
    var eg = {
        W: "Eulers Method"
    }
      , dg = eg;
    class gg {
        constructor(a) {
            this.i = a;
            this.h = [];
            this.j = [];
            this.l = []
        }
        toString() {
            return ""
        }
        H() {
            return ""
        }
        F(a) {
            return a ? hg.W : v(ig.W)
        }
        L(a) {
            return this.F() == v(a)
        }
        g(a) {
            const b = this.i.g()
              , c = wb(b)
              , d = c.length;
            this.h.length != d && (this.h = Array(d),
            this.j = Array(d),
            this.l = Array(d));
            var e = this.h;
            const f = this.j
              , g = this.l;
            for (var h = 0; h < d; h++)
                e[h] = c[h];
            Ha(f);
            h = fg(this.i, e, f);
            if (null != h)
                return h;
            for (h = 0; h < d; h++)
                e[h] = c[h] + f[h] * a;
            Ha(g);
            h = fg(this.i, e, g);
            if (null != h)
                return h;
            for (e = 0; e < d; e++)
                c[e] += (f[e] + g[e]) * a / 2;
            zb(b, c, !0);
            return null
        }
    }
    var ig = {
        W: "Modified Euler"
    }
      , hg = ig;
    class jg {
        constructor(a) {
            this.h = a;
            this.i = [];
            this.j = [];
            this.l = [];
            this.o = [];
            this.m = []
        }
        toString() {
            return ""
        }
        H() {
            return ""
        }
        F(a) {
            return a ? kg.W : v(lg.W)
        }
        L(a) {
            return this.F() == v(a)
        }
        g(a) {
            const b = this.h.g()
              , c = wb(b)
              , d = c.length;
            this.i.length < d && (this.i = Array(d),
            this.j = Array(d),
            this.l = Array(d),
            this.o = Array(d),
            this.m = Array(d));
            var e = this.i;
            const f = this.j
              , g = this.l
              , h = this.o
              , l = this.m;
            for (var k = 0; k < d; k++)
                e[k] = c[k];
            Ha(f);
            k = fg(this.h, e, f);
            if (null !== k)
                return k;
            for (k = 0; k < d; k++)
                e[k] = c[k] + f[k] * a / 2;
            Ha(g);
            k = fg(this.h, e, g);
            if (null !== k)
                return k;
            for (k = 0; k < d; k++)
                e[k] = c[k] + g[k] * a / 2;
            Ha(h);
            k = fg(this.h, e, h);
            if (null !== k)
                return k;
            for (k = 0; k < d; k++)
                e[k] = c[k] + h[k] * a;
            Ha(l);
            k = fg(this.h, e, l);
            if (null !== k)
                return k;
            for (e = 0; e < d; e++)
                c[e] += (f[e] + 2 * g[e] + 2 * h[e] + l[e]) * a / 6;
            zb(b, c, !0);
            return null
        }
    }
    var lg = {
        W: "Runge-Kutta"
    }
      , kg = lg;
    function mg(a, b) {
        if (!a.l.g.L(b)) {
            const c = la(a.g, d=>d.L(b));
            if (null != c)
                a.l.g = c,
                D(a, ng.ma);
            else
                throw "unknown solver: " + b;
        }
    }
    class og extends H {
        constructor(a, b, c) {
            super("DIFF_EQ_SUBJECT");
            this.i = a;
            this.j = b;
            this.l = c;
            this.g = [];
            this.g.push(new cg(this.i));
            this.g.push(new gg(this.i));
            this.g.push(new jg(this.i));
            null != this.j && (a = new $f(this.i,this.j,new gg(this.i)),
            this.g.push(a),
            a = new $f(this.i,this.j,new jg(this.i)),
            this.g.push(a));
            a = this.g.map(d=>d.F(!0));
            b = this.g.map(d=>d.F());
            this.h(new Ra(this,ng.ma,pg.ma,()=>this.l.g.F(),d=>mg(this, d),a,b))
        }
        toString() {
            return ""
        }
    }
    var ng = {
        ma: "Diff Eq Solver"
    }
      , pg = ng;
    function qg(a) {
        return 1E-15 > Math.abs(a) ? 0 : Math.floor(Math.LOG10E * Math.log(Math.abs(a)))
    }
    function rg(a) {
        var b = a.g;
        const c = qg(b);
        b = 2 + sg(a, b, a.l) + (0 < c ? c : 0);
        a.s = a.g.toFixed(sg(a, a.g, a.l));
        a.j.value = a.s;
        b != a.m && (a.m = b,
        a.j.size = a.m)
    }
    function sg(a, b, c) {
        if (-1 < a.o)
            return a.o;
        a = c - 1 - qg(b);
        16 < a && (a = 16);
        return 0 < a ? a : 0
    }
    function tg(a, b) {
        if (b != a.g) {
            try {
                if (isNaN(b))
                    throw "not a number " + b;
                a.g = b;
                a.C(b)
            } catch (c) {
                alert(c),
                a.g = a.A()
            }
            rg(a)
        }
    }
    function ug(a) {
        -1 != a.o && (a.o = -1,
        rg(a))
    }
    function vg(a, b) {
        a.l != b && (a.l = b,
        rg(a))
    }
    class wg {
        constructor(a, b, c) {
            var d = void 0;
            this.B = a;
            this.A = b;
            this.C = c;
            this.g = b();
            if ("number" !== typeof this.g)
                throw "not a number " + this.g;
            this.l = 3;
            this.o = -1;
            this.m = Math.max(8, 1 + this.l);
            a = null;
            p(d) ? (b = Zd(d),
            null != b && "LABEL" == b.tagName && (a = b)) : (d = document.createElement("input"),
            d.type = "text",
            d.size = this.m,
            a = document.createElement("LABEL"),
            a.appendChild(document.createTextNode(this.B)),
            a.appendChild(d));
            this.j = d;
            this.D = null !== a ? a : this.j;
            this.s = "";
            this.j.textAlign = "right";
            S(this.j, "change", this.validate, !0, this);
            S(this.j, "focus", this.G, !1, this);
            S(this.j, "click", this.I, !1, this);
            this.v = !1;
            rg(this)
        }
        toString() {
            return ""
        }
        H() {
            return ""
        }
        I() {
            this.v && (this.j.select(),
            this.v = !1)
        }
        G() {
            this.v = !0
        }
        h() {
            return this.D
        }
        J() {
            return this.g
        }
        i() {
            tg(this, this.A())
        }
        validate() {
            const a = this.j.value.replace(/^\s*|\s*$/g, "");
            if (a != this.s) {
                const b = parseFloat(a);
                isNaN(b) ? (alert("not a number: " + a),
                rg(this)) : tg(this, b)
            }
        }
    }
    ;class xg extends wg {
        constructor(a) {
            super(a.F(!0), ()=>a.J(), b=>Oa(a, b));
            this.u = a;
            vg(this, a.s);
            ug(this);
            Ta(this.u.P(), this)
        }
        toString() {
            return ""
        }
        i(a) {
            a == this.u && (super.i(a),
            vg(this, this.u.s),
            ug(this))
        }
    }
    ;class yg {
        constructor(a, b, c, d) {
            if (null == a && null == d)
                throw "";
            this.o = a;
            this.m = b;
            this.h = d;
            this.j = !1;
            this.g = null;
            null != a && (b = a.v(),
            0 < b.length && (this.g = b[0]));
            this.l = c;
            this.i = ab;
            null != a && (this.i = $a(c, a.S()),
            null == this.g && (this.h = null))
        }
    }
    ;function zg(a, b) {
        b = $a(a.j, b);
        var c = bc(a.g, a.i.add(b))
          , d = a.h.s;
        b = d.i();
        d = d.j();
        const e = c.g();
        c = c.h();
        b = new K(e - b / 2,c - d / 2,e + b / 2,c + d / 2);
        Wc(a.h, b)
    }
    class Ag {
        constructor(a, b) {
            this.h = a;
            this.g = a.A;
            this.i = dc(this.g, eb(a.s));
            this.j = b
        }
    }
    ;function Cf(a) {
        if (null == a.j && null != a.g) {
            var b = a.g;
            null != b.h && (b.h.v = !1)
        }
        a.g = null;
        a.j = null;
        a.i = !1
    }
    function Bg(a, b, c, d) {
        if (b.target == a.h.g)
            if (a.h.g.focus(),
            a.i = !0,
            c = Cg(a, c, d),
            a.m && a.C == b.ctrlKey && a.D == b.metaKey && a.G == b.shiftKey && a.B == b.altKey) {
                var e = a.h.B;
                null != e && (a.j = new Ag(e,c),
                zg(a.j, c))
            } else {
                a: {
                    var f = a.h;
                    b = a.o;
                    d = null;
                    let k, m = La;
                    const n = Array.from(f.v);
                    b: for (let w = n.length - 1; 0 <= w; w--) {
                        const C = n[w]
                          , t = C.A
                          , F = bc(t, c);
                        var g = C.v;
                        Gc(g);
                        g = Array.from(g.g);
                        c: for (let J = g.length - 1; 0 <= J; J--) {
                            const P = g[J];
                            if (!P.M())
                                continue c;
                            var h = P.V();
                            if (!(1 < h.length))
                                if (0 == h.length) {
                                    if (P.G(F)) {
                                        d = P;
                                        e = C;
                                        k = F;
                                        break b
                                    }
                                } else {
                                    h = h[0];
                                    const gf = Array.from(h.A);
                                    for (let kd = gf.length - 1; 0 <= kd; kd--) {
                                        var l = nc(h, gf[kd]);
                                        l = Ya(c, dc(t, l));
                                        l <= m && (m = l,
                                        d = P,
                                        e = C,
                                        k = F)
                                    }
                                }
                        }
                    }
                    if (null == d) {
                        e = f.B;
                        if (null != e)
                            k = bc(e.A, c);
                        else {
                            c = null;
                            break a
                        }
                        if (null == b) {
                            c = null;
                            break a
                        }
                    }
                    c = void 0 !== e && void 0 !== k ? new yg(d,e,k,b) : null
                }
                a.g = c;
                null != a.g && (a = a.g,
                null != a.h ? (c = a.h,
                c = a.g == c.i ? c.v = !0 : !1) : c = !1,
                a.j = c)
            }
    }
    function Cg(a, b, c) {
        const d = a.h.g
          , e = d.getBoundingClientRect();
        b = new I(b - e.left,c - e.top);
        a = d.offsetWidth / a.h.i();
        if (1 === a)
            a = b;
        else {
            if (1E-10 > a)
                throw "Vector.divide by near zero factor " + (null != a ? a.toExponential(7) : null === a ? "null" : "undefined");
            a = new I(b.i / a,b.j / a,b.l / a)
        }
        return a
    }
    function Dg(a, b, c, d) {
        var e = a.h.g;
        null != e.offsetParent && (c = Cg(a, c, d),
        (b.target == e || b.target == document.body) && a.i && b.h(),
        null != a.j ? zg(a.j, c) : null != a.g && (d = a.g,
        d.l = bc(d.m.A, c),
        null == d.o || null != d.g && d.j ? null != d.h && d.j && (a = d.h,
        b = d.g,
        e = d.l,
        d = d.i,
        c = a.g(),
        b == a.i && (b = $a(e, d),
        yb(c, 0, b.g()),
        yb(c, 1, 0),
        Eg(a),
        c.j(4, 5, 6, 7),
        Fg(a, wb(c)))) : d.o.C($a(d.l, d.i))))
    }
    class Gg {
        constructor(a, b, c) {
            this.h = a;
            this.o = b || null;
            this.m = null != c;
            this.C = null != c ? 1 == c.control : !1;
            this.D = null != c ? 1 == c.sb : !1;
            this.G = null != c ? 1 == c.shift : !1;
            this.B = null != c ? 1 == c.alt : !0;
            this.i = !1;
            this.j = this.g = null;
            S(a.g, "mousedown", this.v, !1, this);
            S(document, "mousemove", this.A, !1, this);
            S(document, "mouseup", this.l, !1, this);
            S(document, "keydown", this.s, !1, this);
            S(document, "keyup", this.u, !1, this);
            S(document, "touchstart", this.S, !1, this);
            S(document, "touchmove", this.K, !1, this);
            S(document, "touchend", this.I, !1, this)
        }
        toString() {
            return ""
        }
        H() {
            return ""
        }
        v(a) {
            Bg(this, a, a.clientX, a.clientY)
        }
        A(a) {
            Dg(this, a, a.clientX, a.clientY)
        }
        l(a) {
            const b = this.h.g;
            null != b.offsetParent && ((a.target == b || a.target == document.body) && this.i && a.h(),
            Cf(this))
        }
        s() {}
        u() {}
        S(a) {
            if (a.target == this.h.g) {
                var b = a.i;
                null != b && ((b = b.touches) && 1 == b.length ? Bg(this, a, b[0].clientX, b[0].clientY) : Cf(this))
            }
        }
        K(a) {
            var b = a.i;
            b = null != b ? b.touches : [];
            this.i && b && 1 == b.length ? Dg(this, a, b[0].clientX, b[0].clientY) : Cf(this)
        }
        I(a) {
            this.i && this.l(a)
        }
    }
    ;function Hg(a, b) {
        if (Cb(b))
            a.h.includes(b) || (a.h.push(b),
            a.l.push(-1));
        else
            throw "not a GraphLine " + b;
    }
    function Ig(a, b, c) {
        for (let w = 0, C = a.h.length; w < C; w++) {
            var d = a.l
              , e = w;
            a: {
                var f = b;
                var g = c
                  , h = a.l[w]
                  , l = a.h[w];
                const t = cc(g, a.o)
                  , F = new pb(l.m,h);
                if (!nb(F)) {
                    f = h;
                    break a
                }
                h = ob(F);
                let J = Kb(l, mb(F));
                if ("dots" == J.i) {
                    var k = M(g, h.x)
                      , m = N(g, h.y)
                      , n = J.h;
                    f.fillStyle = J.g;
                    f.fillRect(k, m, n, n)
                }
                for (; nb(F); )
                    if (m = h,
                    h = ob(F),
                    h.x != m.x || h.y != m.y)
                        if (J = Kb(l, mb(F)),
                        k = h.i == m.i && h.j == m.j,
                        "dots" != J.i && k) {
                            if (!fb(t, m, h))
                                continue;
                            k = M(g, m.x);
                            m = N(g, m.y);
                            n = M(g, h.x);
                            const P = N(g, h.y);
                            f.strokeStyle = J.g;
                            f.lineWidth = J.h;
                            f.beginPath();
                            f.moveTo(k, m);
                            f.lineTo(n, P);
                            f.stroke()
                        } else
                            bb(t, h) && (k = M(g, h.x),
                            m = N(g, h.y),
                            n = J.h,
                            f.fillStyle = J.g,
                            f.fillRect(k, m, n, n));
                f = mb(F)
            }
            d[e] = f
        }
    }
    function Jg(a, b) {
        a.o = b;
        a.i = null;
        a.g = !0
    }
    function Kg(a, b) {
        b != a.m && (a.m = b,
        a.m || (a.i = null))
    }
    class Lg {
        constructor(a) {
            if (void 0 !== a && !Cb(a))
                throw "not a GraphLine " + a;
            this.h = void 0 !== a ? [a] : [];
            this.l = va(this.h.length);
            this.s = this.i = null;
            this.o = Vb;
            this.g = !1;
            this.m = !0
        }
        toString() {
            return ""
        }
        H() {
            return ""
        }
        G() {
            return !1
        }
        I(a, b) {
            if (!this.o.m()) {
                a.save();
                if (null == this.s || this.s != b)
                    this.s = b,
                    this.g = !0;
                for (let f = 0, g = this.h.length; f < g; f++)
                    if (this.l[f] > ib(this.h[f].m)) {
                        this.reset();
                        break
                    }
                if (this.m) {
                    var c = this.o.i()
                      , d = this.o.j();
                    null == this.i && (this.i = document.createElement("canvas"),
                    this.i.width = c,
                    this.i.height = d,
                    this.g = !0);
                    var e = this.i.getContext("2d");
                    this.g ? (e.clearRect(0, 0, c, d),
                    this.l = va(this.h.length),
                    Ig(this, e, b),
                    this.g = !1) : Ig(this, e, b);
                    a.drawImage(this.i, 0, 0, c, d)
                } else
                    this.g = !0,
                    this.l = va(this.h.length),
                    Ig(this, a, b),
                    this.g = !1;
                for (let f = 0, g = this.h.length; f < g; f++) {
                    c = a;
                    e = b;
                    const h = kb(this.h[f].m);
                    null != h && (d = M(e, h.g()),
                    e = N(e, h.h()),
                    c.fillStyle = "red",
                    c.fillRect(d - 2, e - 2, 5, 5))
                }
                a.restore()
            }
        }
        K() {
            let a = !1;
            for (let c = 0, d = this.h.length; c < d; c++) {
                var b = this.h[c];
                b.s ? (b.s = !1,
                b = !0) : b = !1;
                a = a || b
            }
            return a || this.g
        }
        V() {
            return []
        }
        S() {
            return ab
        }
        v() {
            return []
        }
        j() {
            return 0
        }
        M() {
            return !1
        }
        reset() {
            this.l = va(this.h.length);
            this.g = !0
        }
        C() {}
    }
    ;var X = {
        vb: "aqua",
        ia: "black",
        wb: "blue",
        zb: "fuchsia",
        Ab: "gray",
        Bb: "green",
        Db: "lime",
        Eb: "maroon",
        Fb: "navy",
        Gb: "olive",
        Ib: "purple",
        RED: "red",
        Lb: "silver",
        Ob: "teal",
        Ba: "white",
        Sb: "yellow"
    };
    function Mg(a, b) {
        const c = b.h();
        c.style.display = a.u;
        a.s.appendChild(c);
        a.o.push(b)
    }
    class Ng extends H {
        constructor(a, b, c, d, e) {
            super("GRAPH_LAYOUT");
            this.u = "block";
            xf(e, b);
            this.view = new Yc("X_Y_GRAPH_VIEW",new K(0,0,1,1));
            Vc(this.view, "FULL");
            Tc(this.view, "FULL");
            jf(b, this.view);
            this.m = this.view.v;
            this.g = new Db("X_Y_GRAPH_LINE",a);
            Fb(this.g, 0);
            Eb(this.g, 1);
            this.g.setColor("lime");
            this.view.l(this.g);
            this.l = Nf(this.view);
            a = g=>{
                if (g.L(L.ca)) {
                    var h = this.l;
                    var l = this.g;
                    l = -1 < l.j ? xb(l.l, l.j).F(!0) : "";
                    h.m = l;
                    h.h = !0
                }
                g.L(L.ba) && (g = this.l,
                h = this.g,
                h = -1 < h.u ? xb(h.l, h.u).F(!0) : "",
                g.l = h,
                g.h = !0)
            }
            ;
            new df(this.g,a);
            a(new y(this.g,Hb.ca));
            this.j = new cd("X_Y_AUTO_SCALE",this.g,this.view);
            this.j.v = .05;
            this.i = new Lg(this.g);
            Jg(this.i, this.view.u);
            Kg(this.i, !0);
            Jc(this.m, this.i);
            new df(this.view,g=>{
                g.L("SCREEN_RECT_CHANGED") && Jg(this.i, this.view.u)
            }
            );
            this.o = [];
            this.s = c;
            c = G(this.g, L.ba);
            Mg(this, new fe(c,"Y:"));
            c = G(this.g, L.ca);
            Mg(this, new fe(c,"X:"));
            Mg(this, new T(Hb.Za,()=>this.g.reset()));
            c = Wa(this.g, L.pa);
            Mg(this, new fe(c,void 0,[X.vb, X.ia, X.wb, X.zb, X.Ab, X.Bb, X.Db, X.Eb, X.Fb, X.Gb, X.Ib, X.RED, X.Lb, X.Ob, X.Ba, X.Sb],"aqua black blue fuchsia gray green lime maroon navy olive purple red silver teal white yellow".split(" ")));
            c = G(this.g, L.LINE_WIDTH);
            Mg(this, new xg(c));
            c = Wa(this.g, L.na);
            Mg(this, new fe(c));
            new Gg(b,null,{
                alt: !1,
                control: !1,
                sb: !1,
                shift: !1
            });
            b = Rf(this.view, ()=>{
                $c(this.j, !0)
            }
            );
            d.appendChild(b);
            d = Wf(b, this);
            Mg(this, new be(d));
            const f = this.g.g().i;
            e.l(new ye(()=>{
                this.g.j == f ? Kg(this.i, U(e.g) > this.j.g) : Kg(this.i, !0)
            }
            ))
        }
        toString() {
            return ""
        }
        v() {
            return [this, this.g, this.view, this.j]
        }
    }
    ;function Og(a) {
        a.style[rd ? "styleFloat" : "cssFloat"] = "left"
    }
    ;function Pg(a) {
        a = la(a.N.childNodes, function(b) {
            return b.nodeType != Node.ELEMENT_NODE || "LI" != b.tagName ? !1 : null != b.className.match(/.*selected/)
        });
        return null == a ? "" : a.className.replace(/[ ]*selected/, "")
    }
    function Qg(a, b) {
        Pg(a) != b && a.N.childNodes.forEach(c=>{
            c.nodeType == Node.ELEMENT_NODE && "LI" == c.tagName && (c.className.trim() == b ? c.className += " selected" : -1 < c.className.indexOf("selected") && (c.className = c.className.replace(/[ ]*selected/, "")))
        }
        )
    }
    function Rg(a) {
        const b = Yd();
        Og(a.j);
        Og(a.g);
        Og(a.i);
        switch (a.l) {
        case "":
        case Sg:
            a.g.style.display = "none";
            a.s.style.display = "none";
            a.i.style.display = "none";
            a.u.style.display = "none";
            Tg(a, .95 * a.K, a.g);
            Ug(a, a.j, a.m);
            a.A.style.display = "none";
            break;
        case Vg:
            a.j.style.display = "none";
            a.m.style.display = "none";
            a.i.style.display = "none";
            a.u.style.display = "none";
            Tg(a, .95 * a.C, a.g);
            Ug(a, a.g, a.s);
            a.o.checked = !1;
            a.A.style.display = "inline";
            break;
        case Wg:
            a.i.style.display = "none";
            a.m.style.display = "none";
            a.u.style.display = "none";
            600 < b.width ? Tg(a, .49, a.g) : Tg(a, .95 * a.C, a.g);
            Ug(a, a.g, a.s, a.j);
            a.o.checked = !0;
            a.A.style.display = "inline";
            break;
        case Xg:
            a.g.style.display = "none";
            a.s.style.display = "none";
            a.j.style.display = "none";
            a.m.style.display = "none";
            Tg(a, .95 * a.D, a.i);
            Ug(a, a.i, a.u);
            a.o.checked = !1;
            a.A.style.display = "inline";
            break;
        case Yg:
            a.g.style.display = "none";
            a.m.style.display = "none";
            a.s.style.display = "none";
            600 < b.width ? Tg(a, .49, a.i) : Tg(a, .95 * a.D, a.i);
            Ug(a, a.i, a.u, a.j);
            a.o.checked = !0;
            a.A.style.display = "inline";
            break;
        case Zg:
            a.g.style.display = "block";
            a.i.style.display = "block";
            a.j.style.display = "none";
            a.m.style.display = "none";
            a.s.style.display = "none";
            a.u.style.display = "none";
            Tg(a, .49, a.g);
            Tg(a, .49, a.i);
            a.o.checked = !1;
            a.A.style.display = "inline";
            break;
        case $g:
            a.g.style.display = "block";
            a.i.style.display = "block";
            a.j.style.display = "block";
            a.m.style.display = "none";
            a.s.style.display = "none";
            a.u.style.display = "none";
            Tg(a, .49, a.g);
            Tg(a, .49, a.i);
            a.o.checked = !0;
            a.A.style.display = "inline";
            break;
        default:
            throw 'redoLayout: no such layout "' + a.l + '"';
        }
    }
    function ah(a, b) {
        a.R && (a.da.style.display = b ? "block" : "none",
        (a.I.checked = b) && a.O && !a.$.s && a.O.focus())
    }
    function bh(a, b) {
        b = b.toLowerCase().trim();
        if (a.l != b) {
            a.l = b;
            b = a.l;
            switch (b) {
            case Wg:
                b = Vg;
                break;
            case Yg:
                b = Xg;
                break;
            case $g:
                b = Zg
            }
            Qg(a, b);
            Rg(a)
        }
    }
    function Ug(a, b, c, d) {
        b.style.display = "block";
        c.style.display = "inline-block";
        c.style.h = "1";
        c.style.MozColumnCount = "1";
        c.style.webkitColumnCount = "1";
        c.style.width = "auto";
        let e = c.getBoundingClientRect().width;
        e = 150 < e ? e : 300;
        b = b.offsetWidth || b.getBoundingClientRect().width;
        null != d && (d.style.display = "block",
        b += d.offsetWidth || d.getBoundingClientRect().width);
        a = a.G.offsetWidth || a.G.getBoundingClientRect().width;
        a - b - 2 < e && a > 2 * e && (c.style.width = "100%",
        c.style.h = "2",
        c.style.MozColumnCount = "2",
        c.style.webkitColumnCount = "2")
    }
    function Tg(a, b, c) {
        const d = Yd().height - 80
          , e = a.G.offsetWidth || a.G.getBoundingClientRect().width;
        var f = lf(a.B);
        const g = f.i();
        f = f.j();
        b = Math.min(b, d / e * (g / f));
        b = Math.floor(100 * b) + "%";
        a.j.style.width = b;
        a.j.style.height = "auto";
        c.style.width = b;
        c.style.height = "auto"
    }
    class ch extends H {
        constructor(a, b) {
            var c = 800
              , d = !0;
            super("TAB_LAYOUT");
            c = c || 800;
            b = b || 800;
            d = void 0 === d ? !0 : d;
            this.D = this.C = this.K = 1;
            Aa(a.images_dir);
            this.N = r(a, "tab_list");
            this.l = Pg(this);
            this.R = d;
            "" == this.l && (this.l = Sg,
            Qg(this, this.l));
            S(this.N, "click", e=>{
                e = e.target;
                if (void 0 === e)
                    throw "event target is undefined";
                if (null != e && "LI" == e.tagName && !(-1 < e.className.indexOf("selected"))) {
                    e = e.className;
                    e = e.toLowerCase().trim();
                    switch (e) {
                    case Vg:
                        e = Wg;
                        break;
                    case Xg:
                        e = Yg;
                        break;
                    case Zg:
                        e = $g
                    }
                    bh(this, e)
                }
            }
            );
            S(window, "resize", ()=>Rg(this));
            S(window, "orientationchange", ()=>Rg(this));
            d = wa(a, "term_output");
            this.O = wa(a, "term_input");
            this.$ = new Ke(this.O,d);
            this.G = r(a, "container");
            this.j = r(a, "sim_applet");
            this.j.style.position = "relative";
            d = document.createElement("canvas");
            d.tabIndex = 0;
            this.B = new pf(d,"SIM_CANVAS");
            of(this.B, c, b);
            this.j.appendChild(this.B.g);
            this.o = r(a, "show_sim");
            d = Zd(this.o);
            if (null == d || "LABEL" != d.tagName)
                throw "";
            this.A = d;
            S(this.o, "click", ()=>{
                var e = this.o.checked;
                switch (this.l) {
                case "":
                case Sg:
                    break;
                case Vg:
                    e && bh(this, Wg);
                    break;
                case Wg:
                    e || bh(this, Vg);
                    break;
                case Xg:
                    e && bh(this, Yg);
                    break;
                case Yg:
                    e || bh(this, Xg);
                    break;
                case Zg:
                    e && bh(this, $g);
                    break;
                case $g:
                    e || bh(this, Zg);
                    break;
                default:
                    throw 'showSim: no such layout "' + this.l + '"';
                }
            }
            );
            this.g = r(a, "div_graph");
            this.g.style.position = "relative";
            d = document.createElement("canvas");
            this.M = new pf(d,"GRAPH_CANVAS");
            c = Math.max(c, b);
            of(this.M, c, c);
            this.g.appendChild(d);
            this.s = r(a, "graph_controls");
            this.ea = [];
            this.m = r(a, "sim_controls");
            this.m.style.marginLeft = "10px";
            this.da = r(a, "div_terminal");
            this.da.style.display = "none";
            b = r(a, "label_terminal");
            this.R ? (b.style.display = "inline",
            this.I = r(a, "show_terminal"),
            S(this.I, "click", ()=>ah(this, this.I.checked))) : b.style.display = "none";
            this.i = r(a, "div_time_graph");
            this.i.style.position = "relative";
            b = document.createElement("canvas");
            this.T = new pf(b,"TIME_GRAPH_CANVAS");
            of(this.T, c, c);
            this.i.appendChild(b);
            this.u = r(a, "time_graph_controls");
            Rg(this);
            this.h(new B(this,dh.Pa,eh.Pa,()=>this.K,e=>{
                x(e, this.K) && (this.K = e);
                Rg(this);
                D(this, dh.Pa)
            }
            ));
            this.h(new B(this,dh.Ia,eh.Ia,()=>this.C,e=>{
                x(e, this.C) && (this.C = e);
                Rg(this);
                D(this, dh.Ia)
            }
            ));
            this.h(new B(this,dh.Qa,eh.Qa,()=>this.D,e=>{
                x(e, this.D) && (this.D = e);
                Rg(this);
                D(this, dh.Qa)
            }
            ));
            this.h(new Ra(this,dh.$a,eh.$a,()=>this.l,e=>bh(this, e),[Sg, Vg, Wg, Xg, Yg, Zg, $g],[Sg, Vg, Wg, Xg, Yg, Zg, $g]));
            this.R && this.h(new z(this,dh.fb,eh.fb,()=>this.I.checked,e=>ah(this, e)))
        }
        toString() {
            return ""
        }
        v() {
            return [this, this.B, this.M, this.T]
        }
    }
    var Sg = "sim"
      , Vg = "graph"
      , Wg = "sim+graph"
      , Xg = "time_graph"
      , Yg = "sim+time_graph"
      , Zg = "multi_graph"
      , $g = "sim+multi_graph"
      , dh = {
        Pa: "sim-width",
        Ia: "graph-width",
        Qa: "time-graph-width",
        $a: "layout",
        fb: "show terminal"
    }
      , eh = dh;
    function fh(a, b) {
        const c = b.h();
        c.style.display = "block";
        a.s.appendChild(c);
        a.m.push(b)
    }
    class gh extends H {
        constructor(a, b, c, d, e) {
            super("TIME_GRAPH_LAYOUT");
            var f = f ? f : "lime";
            var g = g ? g : "red";
            var h = h ? h : "blue";
            xf(e, b);
            this.view = new Yc("TIME_GRAPH_VIEW",new K(0,0,1,1));
            Vc(this.view, "FULL");
            Tc(this.view, "FULL");
            jf(b, this.view);
            Nf(this.view);
            this.g = new Db("TIME_GRAPH_LINE_1",a);
            this.g.setColor(f);
            this.view.l(this.g);
            this.l = new cd("TIME_GRAPH_AUTO_SCALE",this.g,this.view);
            this.l.v = .05;
            this.o = new Lg(this.g);
            Jg(this.o, this.view.u);
            Jc(this.view.v, this.o);
            new df(this.view,k=>{
                k.L("SCREEN_RECT_CHANGED") && Jg(this.o, this.view.u)
            }
            );
            const l = this.g.g().i;
            Fb(this.g, l);
            Eb(this.g, 0);
            this.i = new Db("TIME_GRAPH_LINE_2",a);
            bd(this.l, this.i);
            this.view.l(this.i);
            Fb(this.i, l);
            Eb(this.i, 1);
            this.i.setColor(g);
            Hg(this.o, this.i);
            this.j = new Db("TIME_GRAPH_LINE_3",a);
            bd(this.l, this.j);
            this.view.l(this.j);
            Fb(this.j, l);
            Eb(this.j, -1);
            this.j.setColor(h);
            Hg(this.o, this.j);
            this.m = [];
            this.s = c;
            a = G(this.g, L.ba);
            fh(this, new fe(a,f));
            a = G(this.i, L.ba);
            fh(this, new fe(a,g));
            a = G(this.j, L.ba);
            fh(this, new fe(a,h));
            a = G(this.g, L.ca);
            fh(this, new fe(a,"X:"));
            a = G(this.l, Q.za);
            fh(this, new xg(a));
            f = new T(Hb.Za,()=>{
                this.g.reset();
                this.i.reset();
                this.j.reset()
            }
            );
            fh(this, f);
            new df(this.g,()=>{
                Fb(this.i, this.g.j);
                Fb(this.j, this.g.j)
            }
            );
            new Gg(b,null,{
                alt: !1,
                control: !1,
                sb: !1,
                shift: !1
            });
            Sc(this.view, !1);
            new df(e,k=>{
                k.L("RESET") && (k = this.view.i(),
                Qc(this.view, k / 2),
                $c(this.l, !0))
            }
            );
            e.l(new ye(()=>{
                this.g.j == l ? Kg(this.o, U(e.g) > this.l.g) : Kg(this.o, !0)
            }
            ));
            b = Rf(this.view, ()=>$c(this.l, !0));
            d.appendChild(b);
            d = Wf(b, this);
            fh(this, new be(d))
        }
        toString() {
            return ""
        }
        v() {
            return [this, this.g, this.i, this.j, this.view, this.l]
        }
    }
    ;function hh(a, b) {
        a = Math.round(800 * a.m.j() / a.m.i());
        return new ch(b,a)
    }
    function Y(a, b) {
        a = a.i;
        const c = b.h();
        c.style.display = "block";
        a.m.appendChild(c);
        a.ea.push(b)
    }
    class ih extends H {
        constructor(a, b, c, d, e, f) {
            super("APP");
            this.m = b;
            this.i = hh(this, a);
            this.l = this.i.$;
            a = this.i.B;
            this.o = c;
            this.O = d;
            this.M = c.s;
            this.N = c.g();
            this.$ = new Gg(a,e);
            this.j = new Yc("SIM_VIEW",this.m);
            jf(a, this.j);
            this.B = this.j.v;
            this.s = new Yc("STATUS_VIEW",new K(-10,-10,10,10));
            jf(a, this.s);
            Nf(this.j, !0);
            this.g = new If(this.O);
            xf(this.g, a);
            yf(this.g, this.$);
            this.u = this.g.g;
            this.A = this.G = null;
            null != f && (this.G = new $e(f),
            this.A = Vf(this.G, this.s, this));
            this.D = new we(()=>W(c),()=>ie(this.u));
            this.D.C(new I(8,4));
            this.T = Uf(this.D, this.s, this);
            e = Rf(this.j, ()=>Wc(this.j, this.m));
            this.i.j.appendChild(e);
            this.K = Wf(e, this);
            Ma(this.K, !1);
            this.C = new og(c,f,d);
            this.I = new Ng(c.g(),this.i.M,this.i.s,this.i.g,this.g);
            Jb(this.I.g, "lines");
            this.ea = new gh(this.o.g(),this.i.T,this.i.u,this.i.i,this.g)
        }
        toString() {
            return ""
        }
        rb() {}
        v() {
            return [this, this.o, this.C, this.g, this.u, this.j, this.s, this.N].concat(this.i.v(), this.I.v(), this.ea.v())
        }
        eval(a, b) {
            try {
                return this.l.eval(a, b)
            } catch (c) {
                a = this.l,
                b = c,
                a.v ? console.log(b) : (a.v = !0,
                alert(b))
            }
        }
        Ub() {
            me(this.u);
            var a = this.l;
            {
                if (null != a.o) {
                    var b = a.o;
                    b.v = Qe(b, !1).split(";");
                    b.m = Qe(b, !0).split(";")
                }
                b = window.location.href;
                const c = b.indexOf("?");
                -1 < c ? (b = b.slice(c + 1),
                b = decodeURIComponent(b),
                a.eval(b),
                b = !0) : b = !1
            }
            b || Je(a);
            Gf(this.o);
            Kf(this.o);
            this.g.o()
        }
        start() {
            vf(this.g.j)
        }
    }
    ih.prototype.start = ih.prototype.start;
    ih.prototype.setup = ih.prototype.Ub;
    ih.prototype.eval = ih.prototype.eval;
    ih.prototype.defineNames = ih.prototype.rb;
    class jh {
        constructor(a) {
            this.h = a;
            this.g = new jg(a)
        }
        toString() {
            return ""
        }
        H() {
            return ""
        }
        reset() {
            this.h.reset()
        }
    }
    ;function W(a) {
        a = a.l;
        if (0 > a.i)
            throw "no time variable";
        return a.J(a.i)
    }
    function Gf(a) {
        a.u = wb(a.l);
        A(a, new y(a,"INITIAL_STATE_SAVED"))
    }
    function kh(a, b) {
        a.l = b
    }
    class lh extends H {
        constructor() {
            super("SIM");
            this.s = new Zf;
            this.l = new Ab([],[],this.F() + "_VARS");
            this.B = this.u = null
        }
        toString() {
            return ""
        }
        g() {
            return this.l
        }
        reset() {
            null != this.u && zb(this.l, this.u);
            Jf(this.s, La);
            Kf(this);
            A(this, new y(this,"RESET"))
        }
    }
    ;function af(a) {
        wb(a.g());
        return mh(a)
    }
    function Kf(a) {
        const b = a.g()
          , c = wb(b);
        Fg(a, c);
        const d = Array(c.length);
        fg(a, c, d);
        c[4] = d[1];
        a = mh(a);
        c[5] = a.g;
        c[6] = a.h;
        c[7] = Ue(a);
        zb(b, c, !0)
    }
    function fg(a, b, c) {
        Ha(c);
        c[3] = 1;
        a.v || (Fg(a, b),
        c[0] = b[1],
        c[1] = (-a.j.h * Dc(a.j) - a.m * b[1]) / a.i.m,
        c[2] = -a.m * b[1] * b[1]);
        return null
    }
    function Eg(a) {
        yb(a.g(), 2, 0);
        a.C = Ue(af(a))
    }
    function mh(a) {
        var b = a.i;
        b = .5 * b.m * Za(b.G) + 0 * b.m;
        var c = a.j;
        const d = Dc(c);
        return new Ve(.5 * c.h * d * d + a.A,b)
    }
    function Fg(a, b) {
        pc(a.i, new I(b[0],0));
        a = a.i;
        b = new I(b[1],0,0);
        a.G = Xa(b);
        a.o = !0
    }
    class nh extends lh {
        constructor() {
            super();
            kh(this, new Ab([Z.bb, Z.kb, Z.nb, Bb.gb, Z.Wa, We.qa, We.sa, We.ib],[oh.bb, oh.kb, oh.nb, Bb.gb, oh.Wa, We.qa, We.sa, We.ib],this.F() + "_VARS"));
            this.g().l(2, 4, 5, 6, 7);
            this.i = tc().v(.5);
            this.o = rc().v(La);
            pc(this.o, new I(-2.5,0));
            this.j = new Ec(this.o,this.i);
            this.m = .1;
            this.A = this.C = 0;
            this.v = !1;
            yb(this.g(), 0, -2);
            Eg(this);
            Gf(this);
            this.s.add(this.i, this.o, this.j);
            this.h(new B(this,Z.la,oh.la,()=>this.m,a=>{
                this.m = a;
                Eg(this);
                D(this, Z.la)
            }
            ));
            this.h(new B(this,Z.va,oh.va,()=>this.j.g,a=>{
                var b = this.j;
                b.g = a;
                b.o = !0;
                Eg(this);
                this.g().j(4, 6, 7);
                D(this, Z.va)
            }
            ));
            this.h(new B(this,Z.ra,oh.ra,()=>this.i.m,a=>{
                this.i.v(a);
                Eg(this);
                this.g().j(4, 5, 6, 7);
                D(this, Z.ra)
            }
            ));
            this.h(new B(this,Z.wa,oh.wa,()=>this.j.h,a=>{
                var b = this.j;
                b.h = a;
                b.o = !0;
                Eg(this);
                this.g().j(4, 6, 7);
                D(this, Z.wa)
            }
            ));
            this.h(Pa(new B(this,Z.oa,oh.oa,()=>this.o.l.g(),a=>{
                pc(this.o, new I(a,0));
                Eg(this);
                D(this, Z.oa)
            }
            ), Ka));
            this.h(Qa(Pa(new B(this,We.Na,We.Na,()=>this.A,a=>{
                this.A = a;
                this.g().j(6, 7);
                D(this, We.Na)
            }
            ), Ka), 5))
        }
        toString() {
            return ""
        }
        reset() {
            super.reset();
            Eg(this)
        }
    }
    var Z = {
        Wa: "acceleration",
        la: "damping",
        ra: "mass",
        bb: "position",
        va: "spring length",
        wa: "spring stiffness",
        kb: "velocity",
        nb: "work from damping",
        oa: "fixed point"
    }
      , oh = Z;
    class ph extends ih {
        constructor(a) {
            ya();
            const b = new K(-3,-2,3,2);
            var c = new nh;
            super(a, b, c, new jh(c), c, c);
            a = this.M.get("block");
            if (!(a instanceof sc))
                throw "no PointMass named block";
            a = new zc(a);
            a.i = "blue";
            a.g = !0;
            this.block = a;
            this.B.add(this.block);
            a = this.M.get("spring");
            if (!(a instanceof Ec))
                throw "no Spring named spring";
            a = new Fc(a);
            a.o = .4;
            a.l = 6;
            a.g = !0;
            this.da = a;
            this.B.add(this.da);
            Y(this, Sf(this.g));
            a = G(c, Z.ra);
            Y(this, new xg(a));
            a = G(c, Z.la);
            Y(this, new xg(a));
            a = G(c, Z.wa);
            Y(this, new xg(a));
            a = G(c, Z.va);
            Y(this, new xg(a));
            a = G(c, Z.oa);
            Y(this, new xg(a));
            null != this.A && Y(this, new be(this.A));
            Y(this, new be(this.T));
            Y(this, new be(this.K));
            c = G(this.g, E.ya);
            Y(this, new xg(c));
            c = G(this.g.g, pe.xa);
            Y(this, new xg(c));
            c = Wa(this.C, ng.ma);
            Y(this, new fe(c));
            c = Of(this.i.B);
            Y(this, c);
            c = [this.N];
            Array.isArray(void 0) && (c = c.concat(void 0));
            this.R = Tf(this.v(), c, this.g, this.l);
            Y(this, Xf(this.R, this.g))
        }
        toString() {
            return ""
        }
        rb() {}
    }
    function qh(a) {
        return new ph(a)
    }
    var rh = ["makeSingleSpringApp"]
      , sh = aa;
    rh[0]in sh || "undefined" == typeof sh.execScript || sh.execScript("var " + rh[0]);
    for (var th; rh.length && (th = rh.shift()); )
        rh.length || void 0 === qh ? sh[th] && sh[th] !== Object.prototype[th] ? sh = sh[th] : sh = sh[th] = {} : sh[th] = qh;
}
).call(window)
