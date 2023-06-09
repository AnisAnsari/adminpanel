/* ==========================================================================
   Modernizr - v2.7.2
   ========================================================================== */

(window.Modernizr = (function (a, b, c) {
  function u(a) {
    j.cssText = a;
  }
  function v(a, b) {
    return u(prefixes.join(a + ";") + (b || ""));
  }
  function w(a, b) {
    return typeof a === b;
  }
  function x(a, b) {
    return !!~("" + a).indexOf(b);
  }
  function y(a, b, d) {
    for (var e in a) {
      var f = b[a[e]];
      if (f !== c)
        return d === !1 ? a[e] : w(f, "function") ? f.bind(d || b) : f;
    }
    return !1;
  }
  var d = "2.8.3",
    e = {},
    f = !0,
    g = b.documentElement,
    h = "modernizr",
    i = b.createElement(h),
    j = i.style,
    k,
    l = {}.toString,
    m = {},
    n = {},
    o = {},
    p = [],
    q = p.slice,
    r,
    s = {}.hasOwnProperty,
    t;
  !w(s, "undefined") && !w(s.call, "undefined")
    ? (t = function (a, b) {
        return s.call(a, b);
      })
    : (t = function (a, b) {
        return b in a && w(a.constructor.prototype[b], "undefined");
      }),
    Function.prototype.bind ||
      (Function.prototype.bind = function (b) {
        var c = this;
        if (typeof c != "function") throw new TypeError();
        var d = q.call(arguments, 1),
          e = function () {
            if (this instanceof e) {
              var a = function () {};
              a.prototype = c.prototype;
              var f = new a(),
                g = c.apply(f, d.concat(q.call(arguments)));
              return Object(g) === g ? g : f;
            }
            return c.apply(b, d.concat(q.call(arguments)));
          };
        return e;
      });
  for (var z in m)
    t(m, z) &&
      ((r = z.toLowerCase()), (e[r] = m[z]()), p.push((e[r] ? "" : "no-") + r));
  return (
    (e.addTest = function (a, b) {
      if (typeof a == "object") for (var d in a) t(a, d) && e.addTest(d, a[d]);
      else {
        a = a.toLowerCase();
        if (e[a] !== c) return e;
        (b = typeof b == "function" ? b() : b),
          typeof f != "undefined" &&
            f &&
            (g.className += " " + (b ? "" : "no-") + a),
          (e[a] = b);
      }
      return e;
    }),
    u(""),
    (i = k = null),
    (function (a, b) {
      function l(a, b) {
        var c = a.createElement("p"),
          d = a.getElementsByTagName("head")[0] || a.documentElement;
        return (
          (c.innerHTML = "x<style>" + b + "</style>"),
          d.insertBefore(c.lastChild, d.firstChild)
        );
      }
      function m() {
        var a = s.elements;
        return typeof a == "string" ? a.split(" ") : a;
      }
      function n(a) {
        var b = j[a[h]];
        return b || ((b = {}), i++, (a[h] = i), (j[i] = b)), b;
      }
      function o(a, c, d) {
        c || (c = b);
        if (k) return c.createElement(a);
        d || (d = n(c));
        var g;
        return (
          d.cache[a]
            ? (g = d.cache[a].cloneNode())
            : f.test(a)
            ? (g = (d.cache[a] = d.createElem(a)).cloneNode())
            : (g = d.createElem(a)),
          g.canHaveChildren && !e.test(a) && !g.tagUrn
            ? d.frag.appendChild(g)
            : g
        );
      }
      function p(a, c) {
        a || (a = b);
        if (k) return a.createDocumentFragment();
        c = c || n(a);
        var d = c.frag.cloneNode(),
          e = 0,
          f = m(),
          g = f.length;
        for (; e < g; e++) d.createElement(f[e]);
        return d;
      }
      function q(a, b) {
        b.cache ||
          ((b.cache = {}),
          (b.createElem = a.createElement),
          (b.createFrag = a.createDocumentFragment),
          (b.frag = b.createFrag())),
          (a.createElement = function (c) {
            return s.shivMethods ? o(c, a, b) : b.createElem(c);
          }),
          (a.createDocumentFragment = Function(
            "h,f",
            "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" +
              m()
                .join()
                .replace(/[\w\-]+/g, function (a) {
                  return (
                    b.createElem(a), b.frag.createElement(a), 'c("' + a + '")'
                  );
                }) +
              ");return n}"
          )(s, b.frag));
      }
      function r(a) {
        a || (a = b);
        var c = n(a);
        return (
          s.shivCSS &&
            !g &&
            !c.hasCSS &&
            (c.hasCSS = !!l(
              a,
              "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}"
            )),
          k || q(a, c),
          a
        );
      }
      var c = "3.7.0",
        d = a.html5 || {},
        e =
          /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
        f =
          /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
        g,
        h = "_html5shiv",
        i = 0,
        j = {},
        k;
      (function () {
        try {
          var a = b.createElement("a");
          (a.innerHTML = "<xyz></xyz>"),
            (g = "hidden" in a),
            (k =
              a.childNodes.length == 1 ||
              (function () {
                b.createElement("a");
                var a = b.createDocumentFragment();
                return (
                  typeof a.cloneNode == "undefined" ||
                  typeof a.createDocumentFragment == "undefined" ||
                  typeof a.createElement == "undefined"
                );
              })());
        } catch (c) {
          (g = !0), (k = !0);
        }
      })();
      var s = {
        elements:
          d.elements ||
          "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
        version: c,
        shivCSS: d.shivCSS !== !1,
        supportsUnknownElements: k,
        shivMethods: d.shivMethods !== !1,
        type: "default",
        shivDocument: r,
        createElement: o,
        createDocumentFragment: p,
      };
      (a.html5 = s), r(b);
    })(this, b),
    (e._version = d),
    (g.className =
      g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") +
      (f ? " js " + p.join(" ") : "")),
    e
  );
})(this, this.document)),
  (function (a, b, c) {
    function d(a) {
      return "[object Function]" == o.call(a);
    }
    function e(a) {
      return "string" == typeof a;
    }
    function f() {}
    function g(a) {
      return !a || "loaded" == a || "complete" == a || "uninitialized" == a;
    }
    function h() {
      var a = p.shift();
      (q = 1),
        a
          ? a.t
            ? m(function () {
                ("c" == a.t
                  ? B.injectCss
                  : B.injectJs)(a.s, 0, a.a, a.x, a.e, 1);
              }, 0)
            : (a(), h())
          : (q = 0);
    }
    function i(a, c, d, e, f, i, j) {
      function k(b) {
        if (
          !o &&
          g(l.readyState) &&
          ((u.r = o = 1),
          !q && h(),
          (l.onload = l.onreadystatechange = null),
          b)
        ) {
          "img" != a &&
            m(function () {
              t.removeChild(l);
            }, 50);
          for (var d in y[c]) y[c].hasOwnProperty(d) && y[c][d].onload();
        }
      }
      var j = j || B.errorTimeout,
        l = b.createElement(a),
        o = 0,
        r = 0,
        u = { t: d, s: c, e: f, a: i, x: j };
      1 === y[c] && ((r = 1), (y[c] = [])),
        "object" == a ? (l.data = c) : ((l.src = c), (l.type = a)),
        (l.width = l.height = "0"),
        (l.onerror =
          l.onload =
          l.onreadystatechange =
            function () {
              k.call(this, r);
            }),
        p.splice(e, 0, u),
        "img" != a &&
          (r || 2 === y[c]
            ? (t.insertBefore(l, s ? null : n), m(k, j))
            : y[c].push(l));
    }
    function j(a, b, c, d, f) {
      return (
        (q = 0),
        (b = b || "j"),
        e(a)
          ? i("c" == b ? v : u, a, b, this.i++, c, d, f)
          : (p.splice(this.i++, 0, a), 1 == p.length && h()),
        this
      );
    }
    function k() {
      var a = B;
      return (a.loader = { load: j, i: 0 }), a;
    }
    var l = b.documentElement,
      m = a.setTimeout,
      n = b.getElementsByTagName("script")[0],
      o = {}.toString,
      p = [],
      q = 0,
      r = "MozAppearance" in l.style,
      s = r && !!b.createRange().compareNode,
      t = s ? l : n.parentNode,
      l = a.opera && "[object Opera]" == o.call(a.opera),
      l = !!b.attachEvent && !l,
      u = r ? "object" : l ? "script" : "img",
      v = l ? "script" : u,
      w =
        Array.isArray ||
        function (a) {
          return "[object Array]" == o.call(a);
        },
      x = [],
      y = {},
      z = {
        timeout: function (a, b) {
          return b.length && (a.timeout = b[0]), a;
        },
      },
      A,
      B;
    (B = function (a) {
      function b(a) {
        var a = a.split("!"),
          b = x.length,
          c = a.pop(),
          d = a.length,
          c = { url: c, origUrl: c, prefixes: a },
          e,
          f,
          g;
        for (f = 0; f < d; f++)
          (g = a[f].split("=")), (e = z[g.shift()]) && (c = e(c, g));
        for (f = 0; f < b; f++) c = x[f](c);
        return c;
      }
      function g(a, e, f, g, h) {
        var i = b(a),
          j = i.autoCallback;
        i.url.split(".").pop().split("?").shift(),
          i.bypass ||
            (e &&
              (e = d(e)
                ? e
                : e[a] || e[g] || e[a.split("/").pop().split("?")[0]]),
            i.instead
              ? i.instead(a, e, f, g, h)
              : (y[i.url] ? (i.noexec = !0) : (y[i.url] = 1),
                f.load(
                  i.url,
                  i.forceCSS ||
                    (!i.forceJS &&
                      "css" == i.url.split(".").pop().split("?").shift())
                    ? "c"
                    : c,
                  i.noexec,
                  i.attrs,
                  i.timeout
                ),
                (d(e) || d(j)) &&
                  f.load(function () {
                    k(),
                      e && e(i.origUrl, h, g),
                      j && j(i.origUrl, h, g),
                      (y[i.url] = 2);
                  })));
      }
      function h(a, b) {
        function c(a, c) {
          if (a) {
            if (e(a))
              c ||
                (j = function () {
                  var a = [].slice.call(arguments);
                  k.apply(this, a), l();
                }),
                g(a, j, b, 0, h);
            else if (Object(a) === a)
              for (n in ((m = (function () {
                var b = 0,
                  c;
                for (c in a) a.hasOwnProperty(c) && b++;
                return b;
              })()),
              a))
                a.hasOwnProperty(n) &&
                  (!c &&
                    !--m &&
                    (d(j)
                      ? (j = function () {
                          var a = [].slice.call(arguments);
                          k.apply(this, a), l();
                        })
                      : (j[n] = (function (a) {
                          return function () {
                            var b = [].slice.call(arguments);
                            a && a.apply(this, b), l();
                          };
                        })(k[n]))),
                  g(a[n], j, b, n, h));
          } else !c && l();
        }
        var h = !!a.test,
          i = a.load || a.both,
          j = a.callback || f,
          k = j,
          l = a.complete || f,
          m,
          n;
        c(h ? a.yep : a.nope, !!i), i && c(i);
      }
      var i,
        j,
        l = this.yepnope.loader;
      if (e(a)) g(a, 0, l, 0);
      else if (w(a))
        for (i = 0; i < a.length; i++)
          (j = a[i]),
            e(j) ? g(j, 0, l, 0) : w(j) ? B(j) : Object(j) === j && h(j, l);
      else Object(a) === a && h(a, l);
    }),
      (B.addPrefix = function (a, b) {
        z[a] = b;
      }),
      (B.addFilter = function (a) {
        x.push(a);
      }),
      (B.errorTimeout = 1e4),
      null == b.readyState &&
        b.addEventListener &&
        ((b.readyState = "loading"),
        b.addEventListener(
          "DOMContentLoaded",
          (A = function () {
            b.removeEventListener("DOMContentLoaded", A, 0),
              (b.readyState = "complete");
          }),
          0
        )),
      (a.yepnope = k()),
      (a.yepnope.executeStack = h),
      (a.yepnope.injectJs = function (a, c, d, e, i, j) {
        var k = b.createElement("script"),
          l,
          o,
          e = e || B.errorTimeout;
        k.src = a;
        for (o in d) k.setAttribute(o, d[o]);
        (c = j ? h : c || f),
          (k.onreadystatechange = k.onload =
            function () {
              !l &&
                g(k.readyState) &&
                ((l = 1), c(), (k.onload = k.onreadystatechange = null));
            }),
          m(function () {
            l || ((l = 1), c(1));
          }, e),
          i ? k.onload() : n.parentNode.insertBefore(k, n);
      }),
      (a.yepnope.injectCss = function (a, c, d, e, g, i) {
        var e = b.createElement("link"),
          j,
          c = i ? h : c || f;
        (e.href = a), (e.rel = "stylesheet"), (e.type = "text/css");
        for (j in d) e.setAttribute(j, d[j]);
        g || (n.parentNode.insertBefore(e, n), m(c, 0));
      });
  })(this, document),
  (Modernizr.load = function () {
    yepnope.apply(window, [].slice.call(arguments, 0));
  });

/* ==========================================================================
      jQuery Easing - v1.3
      ========================================================================== */

jQuery.easing.jswing = jQuery.easing.swing;
jQuery.extend(jQuery.easing, {
  def: "easeOutQuad",
  swing: function (e, f, a, h, g) {
    return jQuery.easing[jQuery.easing.def](e, f, a, h, g);
  },
  easeInQuad: function (e, f, a, h, g) {
    return h * (f /= g) * f + a;
  },
  easeOutQuad: function (e, f, a, h, g) {
    return -h * (f /= g) * (f - 2) + a;
  },
  easeInOutQuad: function (e, f, a, h, g) {
    if ((f /= g / 2) < 1) {
      return (h / 2) * f * f + a;
    }
    return (-h / 2) * (--f * (f - 2) - 1) + a;
  },
  easeInCubic: function (e, f, a, h, g) {
    return h * (f /= g) * f * f + a;
  },
  easeOutCubic: function (e, f, a, h, g) {
    return h * ((f = f / g - 1) * f * f + 1) + a;
  },
  easeInOutCubic: function (e, f, a, h, g) {
    if ((f /= g / 2) < 1) {
      return (h / 2) * f * f * f + a;
    }
    return (h / 2) * ((f -= 2) * f * f + 2) + a;
  },
  easeInQuart: function (e, f, a, h, g) {
    return h * (f /= g) * f * f * f + a;
  },
  easeOutQuart: function (e, f, a, h, g) {
    return -h * ((f = f / g - 1) * f * f * f - 1) + a;
  },
  easeInOutQuart: function (e, f, a, h, g) {
    if ((f /= g / 2) < 1) {
      return (h / 2) * f * f * f * f + a;
    }
    return (-h / 2) * ((f -= 2) * f * f * f - 2) + a;
  },
  easeInQuint: function (e, f, a, h, g) {
    return h * (f /= g) * f * f * f * f + a;
  },
  easeOutQuint: function (e, f, a, h, g) {
    return h * ((f = f / g - 1) * f * f * f * f + 1) + a;
  },
  easeInOutQuint: function (e, f, a, h, g) {
    if ((f /= g / 2) < 1) {
      return (h / 2) * f * f * f * f * f + a;
    }
    return (h / 2) * ((f -= 2) * f * f * f * f + 2) + a;
  },
  easeInSine: function (e, f, a, h, g) {
    return -h * Math.cos((f / g) * (Math.PI / 2)) + h + a;
  },
  easeOutSine: function (e, f, a, h, g) {
    return h * Math.sin((f / g) * (Math.PI / 2)) + a;
  },
  easeInOutSine: function (e, f, a, h, g) {
    return (-h / 2) * (Math.cos((Math.PI * f) / g) - 1) + a;
  },
  easeInExpo: function (e, f, a, h, g) {
    return f == 0 ? a : h * Math.pow(2, 10 * (f / g - 1)) + a;
  },
  easeOutExpo: function (e, f, a, h, g) {
    return f == g ? a + h : h * (-Math.pow(2, (-10 * f) / g) + 1) + a;
  },
  easeInOutExpo: function (e, f, a, h, g) {
    if (f == 0) {
      return a;
    }
    if (f == g) {
      return a + h;
    }
    if ((f /= g / 2) < 1) {
      return (h / 2) * Math.pow(2, 10 * (f - 1)) + a;
    }
    return (h / 2) * (-Math.pow(2, -10 * --f) + 2) + a;
  },
  easeInCirc: function (e, f, a, h, g) {
    return -h * (Math.sqrt(1 - (f /= g) * f) - 1) + a;
  },
  easeOutCirc: function (e, f, a, h, g) {
    return h * Math.sqrt(1 - (f = f / g - 1) * f) + a;
  },
  easeInOutCirc: function (e, f, a, h, g) {
    if ((f /= g / 2) < 1) {
      return (-h / 2) * (Math.sqrt(1 - f * f) - 1) + a;
    }
    return (h / 2) * (Math.sqrt(1 - (f -= 2) * f) + 1) + a;
  },
  easeInElastic: function (f, h, e, l, k) {
    var i = 1.70158;
    var j = 0;
    var g = l;
    if (h == 0) {
      return e;
    }
    if ((h /= k) == 1) {
      return e + l;
    }
    if (!j) {
      j = k * 0.3;
    }
    if (g < Math.abs(l)) {
      g = l;
      var i = j / 4;
    } else {
      var i = (j / (2 * Math.PI)) * Math.asin(l / g);
    }
    return (
      -(
        g *
        Math.pow(2, 10 * (h -= 1)) *
        Math.sin(((h * k - i) * (2 * Math.PI)) / j)
      ) + e
    );
  },
  easeOutElastic: function (f, h, e, l, k) {
    var i = 1.70158;
    var j = 0;
    var g = l;
    if (h == 0) {
      return e;
    }
    if ((h /= k) == 1) {
      return e + l;
    }
    if (!j) {
      j = k * 0.3;
    }
    if (g < Math.abs(l)) {
      g = l;
      var i = j / 4;
    } else {
      var i = (j / (2 * Math.PI)) * Math.asin(l / g);
    }
    return (
      g * Math.pow(2, -10 * h) * Math.sin(((h * k - i) * (2 * Math.PI)) / j) +
      l +
      e
    );
  },
  easeInOutElastic: function (f, h, e, l, k) {
    var i = 1.70158;
    var j = 0;
    var g = l;
    if (h == 0) {
      return e;
    }
    if ((h /= k / 2) == 2) {
      return e + l;
    }
    if (!j) {
      j = k * (0.3 * 1.5);
    }
    if (g < Math.abs(l)) {
      g = l;
      var i = j / 4;
    } else {
      var i = (j / (2 * Math.PI)) * Math.asin(l / g);
    }
    if (h < 1) {
      return (
        -0.5 *
          (g *
            Math.pow(2, 10 * (h -= 1)) *
            Math.sin(((h * k - i) * (2 * Math.PI)) / j)) +
        e
      );
    }
    return (
      g *
        Math.pow(2, -10 * (h -= 1)) *
        Math.sin(((h * k - i) * (2 * Math.PI)) / j) *
        0.5 +
      l +
      e
    );
  },
  easeInBack: function (e, f, a, i, h, g) {
    if (g == undefined) {
      g = 1.70158;
    }
    return i * (f /= h) * f * ((g + 1) * f - g) + a;
  },
  easeOutBack: function (e, f, a, i, h, g) {
    if (g == undefined) {
      g = 1.70158;
    }
    return i * ((f = f / h - 1) * f * ((g + 1) * f + g) + 1) + a;
  },
  easeInOutBack: function (e, f, a, i, h, g) {
    if (g == undefined) {
      g = 1.70158;
    }
    if ((f /= h / 2) < 1) {
      return (i / 2) * (f * f * (((g *= 1.525) + 1) * f - g)) + a;
    }
    return (i / 2) * ((f -= 2) * f * (((g *= 1.525) + 1) * f + g) + 2) + a;
  },
  easeInBounce: function (e, f, a, h, g) {
    return h - jQuery.easing.easeOutBounce(e, g - f, 0, h, g) + a;
  },
  easeOutBounce: function (e, f, a, h, g) {
    if ((f /= g) < 1 / 2.75) {
      return h * (7.5625 * f * f) + a;
    } else {
      if (f < 2 / 2.75) {
        return h * (7.5625 * (f -= 1.5 / 2.75) * f + 0.75) + a;
      } else {
        if (f < 2.5 / 2.75) {
          return h * (7.5625 * (f -= 2.25 / 2.75) * f + 0.9375) + a;
        } else {
          return h * (7.5625 * (f -= 2.625 / 2.75) * f + 0.984375) + a;
        }
      }
    }
  },
  easeInOutBounce: function (e, f, a, h, g) {
    if (f < g / 2) {
      return jQuery.easing.easeInBounce(e, f * 2, 0, h, g) * 0.5 + a;
    }
    return (
      jQuery.easing.easeOutBounce(e, f * 2 - g, 0, h, g) * 0.5 + h * 0.5 + a
    );
  },
});

/* ==========================================================================
      WOW - v0.1.9
      ========================================================================== */

(function () {
  var a,
    b,
    c = function (a, b) {
      return function () {
        return a.apply(b, arguments);
      };
    };
  (a = (function () {
    function a() {}
    return (
      (a.prototype.extend = function (a, b) {
        var c, d;
        for (c in a) (d = a[c]), null != d && (b[c] = d);
        return b;
      }),
      (a.prototype.isMobile = function (a) {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          a
        );
      }),
      a
    );
  })()),
    (b =
      this.WeakMap ||
      (b = (function () {
        function a() {
          (this.keys = []), (this.values = []);
        }
        return (
          (a.prototype.get = function (a) {
            var b, c, d, e, f;
            for (f = this.keys, b = d = 0, e = f.length; e > d; b = ++d)
              if (((c = f[b]), c === a)) return this.values[b];
          }),
          (a.prototype.set = function (a, b) {
            var c, d, e, f, g;
            for (g = this.keys, c = e = 0, f = g.length; f > e; c = ++e)
              if (((d = g[c]), d === a)) return void (this.values[c] = b);
            return this.keys.push(a), this.values.push(b);
          }),
          a
        );
      })())),
    (this.WOW = (function () {
      function d(a) {
        null == a && (a = {}),
          (this.scrollCallback = c(this.scrollCallback, this)),
          (this.scrollHandler = c(this.scrollHandler, this)),
          (this.start = c(this.start, this)),
          (this.scrolled = !0),
          (this.config = this.util().extend(a, this.defaults)),
          (this.animationNameCache = new b());
      }
      return (
        (d.prototype.defaults = {
          boxClass: "wow",
          animateClass: "animated",
          offset: 0,
          mobile: !0,
        }),
        (d.prototype.init = function () {
          var a;
          return (
            (this.element = window.document.documentElement),
            "interactive" === (a = document.readyState) || "complete" === a
              ? this.start()
              : document.addEventListener("DOMContentLoaded", this.start)
          );
        }),
        (d.prototype.start = function () {
          var a, b, c, d;
          if (
            ((this.boxes = this.element.getElementsByClassName(
              this.config.boxClass
            )),
            this.boxes.length)
          ) {
            if (this.disabled()) return this.resetStyle();
            for (d = this.boxes, b = 0, c = d.length; c > b; b++)
              (a = d[b]), this.applyStyle(a, !0);
            return (
              window.addEventListener("scroll", this.scrollHandler, !1),
              window.addEventListener("resize", this.scrollHandler, !1),
              (this.interval = setInterval(this.scrollCallback, 50))
            );
          }
        }),
        (d.prototype.stop = function () {
          return (
            window.removeEventListener("scroll", this.scrollHandler, !1),
            window.removeEventListener("resize", this.scrollHandler, !1),
            null != this.interval ? clearInterval(this.interval) : void 0
          );
        }),
        (d.prototype.show = function (a) {
          return (
            this.applyStyle(a),
            (a.className = "" + a.className + " " + this.config.animateClass)
          );
        }),
        (d.prototype.applyStyle = function (a, b) {
          var c, d, e;
          return (
            (d = a.getAttribute("data-wow-duration")),
            (c = a.getAttribute("data-wow-delay")),
            (e = a.getAttribute("data-wow-iteration")),
            this.animate(
              (function (f) {
                return function () {
                  return f.customStyle(a, b, d, c, e);
                };
              })(this)
            )
          );
        }),
        (d.prototype.animate = (function () {
          return "requestAnimationFrame" in window
            ? function (a) {
                return window.requestAnimationFrame(a);
              }
            : function (a) {
                return a();
              };
        })()),
        (d.prototype.resetStyle = function () {
          var a, b, c, d, e;
          for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++)
            (a = d[b]), e.push(a.setAttribute("style", "visibility: visible;"));
          return e;
        }),
        (d.prototype.customStyle = function (a, b, c, d, e) {
          return (
            b && this.cacheAnimationName(a),
            (a.style.visibility = b ? "hidden" : "visible"),
            c && this.vendorSet(a.style, { animationDuration: c }),
            d && this.vendorSet(a.style, { animationDelay: d }),
            e && this.vendorSet(a.style, { animationIterationCount: e }),
            this.vendorSet(a.style, {
              animationName: b ? "none" : this.cachedAnimationName(a),
            }),
            a
          );
        }),
        (d.prototype.vendors = ["moz", "webkit"]),
        (d.prototype.vendorSet = function (a, b) {
          var c, d, e, f;
          f = [];
          for (c in b)
            (d = b[c]),
              (a["" + c] = d),
              f.push(
                function () {
                  var b, f, g, h;
                  for (
                    g = this.vendors, h = [], b = 0, f = g.length;
                    f > b;
                    b++
                  )
                    (e = g[b]),
                      h.push(
                        (a["" + e + c.charAt(0).toUpperCase() + c.substr(1)] =
                          d)
                      );
                  return h;
                }.call(this)
              );
          return f;
        }),
        (d.prototype.vendorCSS = function (a, b) {
          var c, d, e, f, g, h;
          for (
            d = window.getComputedStyle(a),
              c = d.getPropertyCSSValue(b),
              h = this.vendors,
              f = 0,
              g = h.length;
            g > f;
            f++
          )
            (e = h[f]), (c = c || d.getPropertyCSSValue("-" + e + "-" + b));
          return c;
        }),
        (d.prototype.animationName = function (a) {
          var b;
          try {
            b = this.vendorCSS(a, "animation-name").cssText;
          } catch (c) {
            b = window.getComputedStyle(a).getPropertyValue("animation-name");
          }
          return "none" === b ? "" : b;
        }),
        (d.prototype.cacheAnimationName = function (a) {
          return this.animationNameCache.set(a, this.animationName(a));
        }),
        (d.prototype.cachedAnimationName = function (a) {
          return this.animationNameCache.get(a);
        }),
        (d.prototype.scrollHandler = function () {
          return (this.scrolled = !0);
        }),
        (d.prototype.scrollCallback = function () {
          var a;
          return this.scrolled &&
            ((this.scrolled = !1),
            (this.boxes = function () {
              var b, c, d, e;
              for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++)
                (a = d[b]), a && (this.isVisible(a) ? this.show(a) : e.push(a));
              return e;
            }.call(this)),
            !this.boxes.length)
            ? this.stop()
            : void 0;
        }),
        (d.prototype.offsetTop = function (a) {
          for (var b; void 0 === a.offsetTop; ) a = a.parentNode;
          for (b = a.offsetTop; (a = a.offsetParent); ) b += a.offsetTop;
          return b;
        }),
        (d.prototype.isVisible = function (a) {
          var b, c, d, e, f;
          return (
            (c = a.getAttribute("data-wow-offset") || this.config.offset),
            (f = window.pageYOffset),
            (e = f + this.element.clientHeight - c),
            (d = this.offsetTop(a)),
            (b = d + a.clientHeight),
            e >= d && b >= f
          );
        }),
        (d.prototype.util = function () {
          return this._util || (this._util = new a());
        }),
        (d.prototype.disabled = function () {
          return (
            !this.config.mobile && this.util().isMobile(navigator.userAgent)
          );
        }),
        d
      );
    })());
}).call(this);

/* ==========================================================================
      Animsition - v4.0.2
      ========================================================================== */

!(function (t) {
  "use strict";
  "function" == typeof define && define.amd
    ? define(["jquery"], t)
    : "object" == typeof exports
    ? (module.exports = t(require("jquery")))
    : t(jQuery);
})(function (t) {
  "use strict";
  var n = !1;
  t(window).on("load", function () {
    n = !0;
  });
  var i = "animsition",
    a = {
      init: function (o) {
        (o = t.extend(
          {
            inClass: "fade-in",
            outClass: "fade-out",
            inDuration: 1500,
            outDuration: 800,
            linkElement: ".animsition-link",
            loading: !0,
            loadingParentElement: "body",
            loadingClass: "animsition-loading",
            loadingInner: "",
            timeout: !1,
            timeoutCountdown: 5e3,
            onLoadEvent: !0,
            browser: ["animation-duration", "-webkit-animation-duration"],
            overlay: !1,
            overlayClass: "animsition-overlay-slide",
            overlayParentElement: "body",
            transition: function (t) {
              window.location.href = t;
            },
          },
          o
        )),
          (a.settings = {
            timer: !1,
            data: {
              inClass: "animsition-in-class",
              inDuration: "animsition-in-duration",
              outClass: "animsition-out-class",
              outDuration: "animsition-out-duration",
              overlay: "animsition-overlay",
            },
            events: {
              inStart: "animsition.inStart",
              inEnd: "animsition.inEnd",
              outStart: "animsition.outStart",
              outEnd: "animsition.outEnd",
            },
          });
        var e = a.supportCheck.call(this, o);
        if (!e && o.browser.length > 0 && (!e || !this.length))
          return (
            "console" in window ||
              ((window.console = {}),
              (window.console.log = function (t) {
                return t;
              })),
            this.length ||
              console.log("Animsition: Element does not exist on page."),
            e || console.log("Animsition: Does not support this browser."),
            a.destroy.call(this)
          );
        var s = a.optionCheck.call(this, o);
        return (
          s &&
            t("." + o.overlayClass).length <= 0 &&
            a.addOverlay.call(this, o),
          o.loading &&
            t("." + o.loadingClass).length <= 0 &&
            a.addLoading.call(this, o),
          this.each(function () {
            var e = this,
              s = t(this),
              r = t(window),
              l = t(document),
              d = s.data(i);
            d ||
              ((o = t.extend({}, o)),
              s.data(i, { options: o }),
              o.timeout && a.addTimer.call(e),
              o.onLoadEvent &&
                (n
                  ? (a.settings.timer && clearTimeout(a.settings.timer),
                    a["in"].call(e))
                  : r.on("load." + i, function () {
                      a.settings.timer && clearTimeout(a.settings.timer),
                        a["in"].call(e);
                    })),
              r.on("pageshow." + i, function (t) {
                t.originalEvent.persisted && a["in"].call(e);
              }),
              r.on("unload." + i, function () {}),
              l.on("click." + i, o.linkElement, function (n) {
                n.preventDefault();
                var i = t(this),
                  o = i.attr("href");
                2 === n.which ||
                n.metaKey ||
                n.shiftKey ||
                (-1 !== navigator.platform.toUpperCase().indexOf("WIN") &&
                  n.ctrlKey)
                  ? window.open(o, "_blank")
                  : a.out.call(e, i, o);
              }));
          })
        );
      },
      addOverlay: function (n) {
        t(n.overlayParentElement).prepend(
          '<div class="' + n.overlayClass + '"></div>'
        );
      },
      addLoading: function (n) {
        t(n.loadingParentElement).append(
          '<div class="' + n.loadingClass + '">' + n.loadingInner + "</div>"
        );
      },
      removeLoading: function () {
        var n = t(this),
          a = n.data(i).options,
          o = t(a.loadingParentElement).children("." + a.loadingClass);
        o.fadeOut().remove();
      },
      addTimer: function () {
        var n = this,
          o = t(this),
          e = o.data(i).options;
        a.settings.timer = setTimeout(function () {
          a["in"].call(n), t(window).off("load." + i);
        }, e.timeoutCountdown);
      },
      supportCheck: function (n) {
        var i = t(this),
          a = n.browser,
          o = a.length,
          e = !1;
        0 === o && (e = !0);
        for (var s = 0; o > s; s++)
          if ("string" == typeof i.css(a[s])) {
            e = !0;
            break;
          }
        return e;
      },
      optionCheck: function (n) {
        var i,
          o = t(this);
        return (i = n.overlay || o.data(a.settings.data.overlay) ? !0 : !1);
      },
      animationCheck: function (n, a, o) {
        var e = t(this),
          s = e.data(i).options,
          r = typeof n,
          l = !a && "number" === r,
          d = a && "string" === r && n.length > 0;
        return (
          l || d
            ? (n = n)
            : a && o
            ? (n = s.inClass)
            : !a && o
            ? (n = s.inDuration)
            : a && !o
            ? (n = s.outClass)
            : a || o || (n = s.outDuration),
          n
        );
      },
      in: function () {
        var n = this,
          o = t(this),
          e = o.data(i).options,
          s = o.data(a.settings.data.inDuration),
          r = o.data(a.settings.data.inClass),
          l = a.animationCheck.call(n, s, !1, !0),
          d = a.animationCheck.call(n, r, !0, !0),
          u = a.optionCheck.call(n, e),
          c = o.data(i).outClass;
        e.loading && a.removeLoading.call(n),
          c && o.removeClass(c),
          u ? a.inOverlay.call(n, d, l) : a.inDefault.call(n, d, l);
      },
      inDefault: function (n, i) {
        var o = t(this);
        o.css({ "animation-duration": i + "ms" })
          .addClass(n)
          .trigger(a.settings.events.inStart)
          .animateCallback(function () {
            o.removeClass(n)
              .css({ opacity: 1 })
              .trigger(a.settings.events.inEnd);
          });
      },
      inOverlay: function (n, o) {
        var e = t(this),
          s = e.data(i).options;
        e.css({ opacity: 1 }).trigger(a.settings.events.inStart),
          t(s.overlayParentElement)
            .children("." + s.overlayClass)
            .css({ "animation-duration": o + "ms" })
            .addClass(n)
            .animateCallback(function () {
              e.trigger(a.settings.events.inEnd);
            });
      },
      out: function (n, o) {
        var e = this,
          s = t(this),
          r = s.data(i).options,
          l = n.data(a.settings.data.outClass),
          d = s.data(a.settings.data.outClass),
          u = n.data(a.settings.data.outDuration),
          c = s.data(a.settings.data.outDuration),
          m = l ? l : d,
          g = u ? u : c,
          f = a.animationCheck.call(e, m, !0, !1),
          v = a.animationCheck.call(e, g, !1, !1),
          h = a.optionCheck.call(e, r);
        (s.data(i).outClass = f),
          h ? a.outOverlay.call(e, f, v, o) : a.outDefault.call(e, f, v, o);
      },
      outDefault: function (n, o, e) {
        var s = t(this),
          r = s.data(i).options;
        s.css({ "animation-duration": o + 1 + "ms" })
          .addClass(n)
          .trigger(a.settings.events.outStart)
          .animateCallback(function () {
            s.trigger(a.settings.events.outEnd), r.transition(e);
          });
      },
      outOverlay: function (n, o, e) {
        var s = this,
          r = t(this),
          l = r.data(i).options,
          d = r.data(a.settings.data.inClass),
          u = a.animationCheck.call(s, d, !0, !0);
        t(l.overlayParentElement)
          .children("." + l.overlayClass)
          .css({ "animation-duration": o + 1 + "ms" })
          .removeClass(u)
          .addClass(n)
          .trigger(a.settings.events.outStart)
          .animateCallback(function () {
            r.trigger(a.settings.events.outEnd), l.transition(e);
          });
      },
      destroy: function () {
        return this.each(function () {
          var n = t(this);
          t(window).off("." + i), n.css({ opacity: 1 }).removeData(i);
        });
      },
    };
  (t.fn.animateCallback = function (n) {
    var i = "animationend webkitAnimationEnd";
    return this.each(function () {
      var a = t(this);
      a.on(i, function () {
        return a.off(i), n.call(this);
      });
    });
  }),
    (t.fn.animsition = function (n) {
      return a[n]
        ? a[n].apply(this, Array.prototype.slice.call(arguments, 1))
        : "object" != typeof n && n
        ? void t.error("Method " + n + " does not exist on jQuery." + i)
        : a.init.apply(this, arguments);
    });
});

/* ==========================================================================
      Waves - v1x
      ========================================================================== */

!(function (t, e) {
  "use strict";
  "function" == typeof define && define.amd
    ? define([], function () {
        return (t.Waves = e.call(t)), t.Waves;
      })
    : "object" == typeof exports
    ? (module.exports = e.call(t))
    : (t.Waves = e.call(t));
})("object" == typeof global ? global : this, function () {
  "use strict";
  function t(t) {
    return null !== t && t === t.window;
  }
  function e(e) {
    return t(e) ? e : 9 === e.nodeType && e.defaultView;
  }
  function n(t) {
    var e = typeof t;
    return "function" === e || ("object" === e && !!t);
  }
  function o(t) {
    return n(t) && t.nodeType > 0;
  }
  function a(t) {
    var e = f.call(t);
    return "[object String]" === e
      ? d(t)
      : n(t) &&
        /^\[object (Array|HTMLCollection|NodeList|Object)\]$/.test(e) &&
        t.hasOwnProperty("length")
      ? t
      : o(t)
      ? [t]
      : [];
  }
  function i(t) {
    var n,
      o,
      a = { top: 0, left: 0 },
      i = t && t.ownerDocument;
    return (
      (n = i.documentElement),
      void 0 !== t.getBoundingClientRect && (a = t.getBoundingClientRect()),
      (o = e(i)),
      {
        top: a.top + o.pageYOffset - n.clientTop,
        left: a.left + o.pageXOffset - n.clientLeft,
      }
    );
  }
  function r(t) {
    var e = "";
    for (var n in t) t.hasOwnProperty(n) && (e += n + ":" + t[n] + ";");
    return e;
  }
  function s(t, e, n) {
    if (n) {
      n.classList.remove("waves-rippling");
      var o = n.getAttribute("data-x"),
        a = n.getAttribute("data-y"),
        i = n.getAttribute("data-scale"),
        s = n.getAttribute("data-translate"),
        u = 350 - (Date.now() - Number(n.getAttribute("data-hold")));
      u < 0 && (u = 0), "mousemove" === t.type && (u = 150);
      var c = "mousemove" === t.type ? 2500 : v.duration;
      setTimeout(function () {
        var t = {
          top: a + "px",
          left: o + "px",
          opacity: "0",
          "-webkit-transition-duration": c + "ms",
          "-moz-transition-duration": c + "ms",
          "-o-transition-duration": c + "ms",
          "transition-duration": c + "ms",
          "-webkit-transform": i + " " + s,
          "-moz-transform": i + " " + s,
          "-ms-transform": i + " " + s,
          "-o-transform": i + " " + s,
          transform: i + " " + s,
        };
        n.setAttribute("style", r(t)),
          setTimeout(function () {
            try {
              e.removeChild(n);
            } catch (t) {
              return !1;
            }
          }, c);
      }, u);
    }
  }
  function u(t) {
    if (!1 === h.allowEvent(t)) return null;
    for (var e = null, n = t.target || t.srcElement; n.parentElement; ) {
      if (!(n instanceof SVGElement) && n.classList.contains("waves-effect")) {
        e = n;
        break;
      }
      n = n.parentElement;
    }
    return e;
  }
  function c(t) {
    var e = u(t);
    if (null !== e) {
      if (
        e.disabled ||
        e.getAttribute("disabled") ||
        e.classList.contains("disabled")
      )
        return;
      if ((h.registerEvent(t), "touchstart" === t.type && v.delay)) {
        var n = !1,
          o = setTimeout(function () {
            (o = null), v.show(t, e);
          }, v.delay),
          a = function (a) {
            o && (clearTimeout(o), (o = null), v.show(t, e)),
              n || ((n = !0), v.hide(a, e)),
              r();
          },
          i = function (t) {
            o && (clearTimeout(o), (o = null)), a(t), r();
          };
        e.addEventListener("touchmove", i, !1),
          e.addEventListener("touchend", a, !1),
          e.addEventListener("touchcancel", a, !1);
        var r = function () {
          e.removeEventListener("touchmove", i),
            e.removeEventListener("touchend", a),
            e.removeEventListener("touchcancel", a);
        };
      } else
        v.show(t, e),
          m &&
            (e.addEventListener("touchend", v.hide, !1),
            e.addEventListener("touchcancel", v.hide, !1)),
          e.addEventListener("mouseup", v.hide, !1),
          e.addEventListener("mouseleave", v.hide, !1);
    }
  }
  var l = l || {},
    d = document.querySelectorAll.bind(document),
    f = Object.prototype.toString,
    m = "ontouchstart" in window,
    v = {
      duration: 750,
      delay: 200,
      show: function (t, e, n) {
        if (2 === t.button) return !1;
        e = e || this;
        var o = document.createElement("div");
        (o.className = "waves-ripple waves-rippling"), e.appendChild(o);
        var a = i(e),
          s = 0,
          u = 0;
        "touches" in t && t.touches.length
          ? ((s = t.touches[0].pageY - a.top),
            (u = t.touches[0].pageX - a.left))
          : ((s = t.pageY - a.top), (u = t.pageX - a.left)),
          (u = u >= 0 ? u : 0),
          (s = s >= 0 ? s : 0);
        var c = "scale(" + (e.clientWidth / 100) * 3 + ")",
          l = "translate(0,0)";
        n && (l = "translate(" + n.x + "px, " + n.y + "px)"),
          o.setAttribute("data-hold", Date.now()),
          o.setAttribute("data-x", u),
          o.setAttribute("data-y", s),
          o.setAttribute("data-scale", c),
          o.setAttribute("data-translate", l);
        var d = { top: s + "px", left: u + "px" };
        o.classList.add("waves-notransition"),
          o.setAttribute("style", r(d)),
          o.classList.remove("waves-notransition"),
          (d["-webkit-transform"] = c + " " + l),
          (d["-moz-transform"] = c + " " + l),
          (d["-ms-transform"] = c + " " + l),
          (d["-o-transform"] = c + " " + l),
          (d.transform = c + " " + l),
          (d.opacity = "1");
        var f = "mousemove" === t.type ? 2500 : v.duration;
        (d["-webkit-transition-duration"] = f + "ms"),
          (d["-moz-transition-duration"] = f + "ms"),
          (d["-o-transition-duration"] = f + "ms"),
          (d["transition-duration"] = f + "ms"),
          o.setAttribute("style", r(d));
      },
      hide: function (t, e) {
        for (
          var n = (e = e || this).getElementsByClassName("waves-rippling"),
            o = 0,
            a = n.length;
          o < a;
          o++
        )
          s(t, e, n[o]);
        m &&
          (e.removeEventListener("touchend", v.hide),
          e.removeEventListener("touchcancel", v.hide)),
          e.removeEventListener("mouseup", v.hide),
          e.removeEventListener("mouseleave", v.hide);
      },
    },
    p = {
      input: function (t) {
        var e = t.parentNode;
        if (
          "i" !== e.tagName.toLowerCase() ||
          !e.classList.contains("waves-effect")
        ) {
          var n = document.createElement("i");
          (n.className = t.className + " waves-input-wrapper"),
            (t.className = "waves-button-input"),
            e.replaceChild(n, t),
            n.appendChild(t);
          var o = window.getComputedStyle(t, null),
            a = o.color,
            i = o.backgroundColor;
          n.setAttribute("style", "color:" + a + ";background:" + i),
            t.setAttribute("style", "background-color:rgba(0,0,0,0);");
        }
      },
      img: function (t) {
        var e = t.parentNode;
        if (
          "i" !== e.tagName.toLowerCase() ||
          !e.classList.contains("waves-effect")
        ) {
          var n = document.createElement("i");
          e.replaceChild(n, t), n.appendChild(t);
        }
      },
    },
    h = {
      touches: 0,
      allowEvent: function (t) {
        var e = !0;
        return (
          /^(mousedown|mousemove)$/.test(t.type) && h.touches && (e = !1), e
        );
      },
      registerEvent: function (t) {
        var e = t.type;
        "touchstart" === e
          ? (h.touches += 1)
          : /^(touchend|touchcancel)$/.test(e) &&
            setTimeout(function () {
              h.touches && (h.touches -= 1);
            }, 500);
      },
    };
  return (
    (l.init = function (t) {
      var e = document.body;
      "duration" in (t = t || {}) && (v.duration = t.duration),
        "delay" in t && (v.delay = t.delay),
        m &&
          (e.addEventListener("touchstart", c, !1),
          e.addEventListener("touchcancel", h.registerEvent, !1),
          e.addEventListener("touchend", h.registerEvent, !1)),
        e.addEventListener("mousedown", c, !1);
    }),
    (l.attach = function (t, e) {
      (t = a(t)),
        "[object Array]" === f.call(e) && (e = e.join(" ")),
        (e = e ? " " + e : "");
      for (var n, o, i = 0, r = t.length; i < r; i++)
        (o = (n = t[i]).tagName.toLowerCase()),
          -1 !== ["input", "img"].indexOf(o) &&
            (p[o](n), (n = n.parentElement)),
          -1 === n.className.indexOf("waves-effect") &&
            (n.className += " waves-effect" + e);
    }),
    (l.ripple = function (t, e) {
      var n = (t = a(t)).length;
      if (
        ((e = e || {}),
        (e.wait = e.wait || 0),
        (e.position = e.position || null),
        n)
      )
        for (
          var o, r, s, u = {}, c = 0, l = { type: "mousedown", button: 1 };
          c < n;
          c++
        )
          if (
            ((o = t[c]),
            (r = e.position || { x: o.clientWidth / 2, y: o.clientHeight / 2 }),
            (s = i(o)),
            (u.x = s.left + r.x),
            (u.y = s.top + r.y),
            (l.pageX = u.x),
            (l.pageY = u.y),
            v.show(l, o),
            e.wait >= 0 && null !== e.wait)
          ) {
            var d = { type: "mouseup", button: 1 };
            setTimeout(
              (function (t, e) {
                return function () {
                  v.hide(t, e);
                };
              })(d, o),
              e.wait
            );
          }
    }),
    (l.calm = function (t) {
      for (
        var e = { type: "mouseup", button: 1 }, n = 0, o = (t = a(t)).length;
        n < o;
        n++
      )
        v.hide(e, t[n]);
    }),
    (l.displayEffect = function (t) {
      l.init(t);
    }),
    l
  );
});

/* ==========================================================================
      Numeric - v1.4.1
      ========================================================================== */

(function (factory) {
  if (typeof define === "function" && define.amd) {
    define(["jquery"], factory);
  } else {
    factory(window.jQuery);
  }
})(function ($) {
  $.fn.numeric = function (config, callback) {
    if (typeof config === "boolean") {
      config = { decimal: config, negative: true, decimalPlaces: -1 };
    }
    config = config || {};
    if (typeof config.negative == "undefined") {
      config.negative = true;
    }
    var decimal = config.decimal === false ? "" : config.decimal || ".";
    var negative = config.negative === true ? true : false;
    var decimalPlaces =
      typeof config.decimalPlaces == "undefined" ? -1 : config.decimalPlaces;
    callback = typeof callback == "function" ? callback : function () {};
    return this.data("numeric.decimal", decimal)
      .data("numeric.negative", negative)
      .data("numeric.callback", callback)
      .data("numeric.decimalPlaces", decimalPlaces)
      .keypress($.fn.numeric.keypress)
      .keyup($.fn.numeric.keyup)
      .blur($.fn.numeric.blur);
  };
  $.fn.numeric.keypress = function (e) {
    var decimal = $.data(this, "numeric.decimal");
    var negative = $.data(this, "numeric.negative");
    var decimalPlaces = $.data(this, "numeric.decimalPlaces");
    var key = e.charCode ? e.charCode : e.keyCode ? e.keyCode : 0;
    if (key == 13 && this.nodeName.toLowerCase() == "input") {
      return true;
    } else if (key == 13) {
      return false;
    }
    var allow = false;
    if ((e.ctrlKey && key == 97) || (e.ctrlKey && key == 65)) {
      return true;
    }
    if ((e.ctrlKey && key == 120) || (e.ctrlKey && key == 88)) {
      return true;
    }
    if ((e.ctrlKey && key == 99) || (e.ctrlKey && key == 67)) {
      return true;
    }
    if ((e.ctrlKey && key == 122) || (e.ctrlKey && key == 90)) {
      return true;
    }
    if (
      (e.ctrlKey && key == 118) ||
      (e.ctrlKey && key == 86) ||
      (e.shiftKey && key == 45)
    ) {
      return true;
    }
    if (key < 48 || key > 57) {
      var value = $(this).val();
      if (
        $.inArray("-", value.split("")) !== 0 &&
        negative &&
        key == 45 &&
        (value.length === 0 || parseInt($.fn.getSelectionStart(this), 10) === 0)
      ) {
        return true;
      }
      if (
        decimal &&
        key == decimal.charCodeAt(0) &&
        $.inArray(decimal, value.split("")) != -1
      ) {
        allow = false;
      }
      if (
        key != 8 &&
        key != 9 &&
        key != 13 &&
        key != 35 &&
        key != 36 &&
        key != 37 &&
        key != 39 &&
        key != 46
      ) {
        allow = false;
      } else {
        if (typeof e.charCode != "undefined") {
          if (e.keyCode == e.which && e.which !== 0) {
            allow = true;
            if (e.which == 46) {
              allow = false;
            }
          } else if (e.keyCode !== 0 && e.charCode === 0 && e.which === 0) {
            allow = true;
          }
        }
      }
      if (decimal && key == decimal.charCodeAt(0)) {
        if ($.inArray(decimal, value.split("")) == -1) {
          allow = true;
        } else {
          allow = false;
        }
      }
    } else {
      allow = true;
      if (decimal && decimalPlaces > 0) {
        var dot = $.inArray(decimal, $(this).val().split(""));
        if (dot >= 0 && $(this).val().length > dot + decimalPlaces) {
          allow = false;
        }
      }
    }
    return allow;
  };
  $.fn.numeric.keyup = function (e) {
    var val = $(this).val();
    if (val && val.length > 0) {
      var carat = $.fn.getSelectionStart(this);
      var selectionEnd = $.fn.getSelectionEnd(this);
      var decimal = $.data(this, "numeric.decimal");
      var negative = $.data(this, "numeric.negative");
      var decimalPlaces = $.data(this, "numeric.decimalPlaces");
      if (decimal !== "" && decimal !== null) {
        var dot = $.inArray(decimal, val.split(""));
        if (dot === 0) {
          this.value = "0" + val;
          carat++;
          selectionEnd++;
        }
        if (dot == 1 && val.charAt(0) == "-") {
          this.value = "-0" + val.substring(1);
          carat++;
          selectionEnd++;
        }
        val = this.value;
      }
      var validChars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "-", decimal];
      var length = val.length;
      for (var i = length - 1; i >= 0; i--) {
        var ch = val.charAt(i);
        if (i !== 0 && ch == "-") {
          val = val.substring(0, i) + val.substring(i + 1);
        } else if (i === 0 && !negative && ch == "-") {
          val = val.substring(1);
        }
        var validChar = false;
        for (var j = 0; j < validChars.length; j++) {
          if (ch == validChars[j]) {
            validChar = true;
            break;
          }
        }
        if (!validChar || ch == " ") {
          val = val.substring(0, i) + val.substring(i + 1);
        }
      }
      var firstDecimal = $.inArray(decimal, val.split(""));
      if (firstDecimal > 0) {
        for (var k = length - 1; k > firstDecimal; k--) {
          var chch = val.charAt(k);
          if (chch == decimal) {
            val = val.substring(0, k) + val.substring(k + 1);
          }
        }
      }
      if (decimal && decimalPlaces > 0) {
        var dot = $.inArray(decimal, val.split(""));
        if (dot >= 0) {
          val = val.substring(0, dot + decimalPlaces + 1);
          selectionEnd = Math.min(val.length, selectionEnd);
        }
      }
      this.value = val;
      $.fn.setSelection(this, [carat, selectionEnd]);
    }
  };
  $.fn.numeric.blur = function () {
    var decimal = $.data(this, "numeric.decimal");
    var callback = $.data(this, "numeric.callback");
    var negative = $.data(this, "numeric.negative");
    var val = this.value;
    if (val !== "") {
      var re = new RegExp(
        "^" +
          (negative ? "-?" : "") +
          "\\d+$|^" +
          (negative ? "-?" : "") +
          "\\d*" +
          decimal +
          "\\d+$"
      );
      if (!re.exec(val)) {
        callback.apply(this);
      }
    }
  };
  $.fn.removeNumeric = function () {
    return this.data("numeric.decimal", null)
      .data("numeric.negative", null)
      .data("numeric.callback", null)
      .data("numeric.decimalPlaces", null)
      .unbind("keypress", $.fn.numeric.keypress)
      .unbind("keyup", $.fn.numeric.keyup)
      .unbind("blur", $.fn.numeric.blur);
  };
  $.fn.getSelectionStart = function (o) {
    if (o.type === "number") {
      return undefined;
    } else if (o.createTextRange && document.selection) {
      var r = document.selection.createRange().duplicate();
      r.moveEnd("character", o.value.length);
      if (r.text == "") return o.value.length;
      return Math.max(0, o.value.lastIndexOf(r.text));
    } else {
      try {
        return o.selectionStart;
      } catch (e) {
        return 0;
      }
    }
  };
  $.fn.getSelectionEnd = function (o) {
    if (o.type === "number") {
      return undefined;
    } else if (o.createTextRange && document.selection) {
      var r = document.selection.createRange().duplicate();
      r.moveStart("character", -o.value.length);
      return r.text.length;
    } else return o.selectionEnd;
  };
  $.fn.setSelection = function (o, p) {
    if (typeof p == "number") {
      p = [p, p];
    }
    if (p && p.constructor == Array && p.length == 2) {
      if (o.type === "number") {
        o.focus();
      } else if (o.createTextRange) {
        var r = o.createTextRange();
        r.collapse(true);
        r.moveStart("character", p[0]);
        r.moveEnd("character", p[1] - p[0]);
        r.select();
      } else {
        o.focus();
        try {
          if (o.setSelectionRange) {
            o.setSelectionRange(p[0], p[1]);
          }
        } catch (e) {}
      }
    }
  };
});

/* ==========================================================================
      Js-Cookie - v 2.2.0
      ========================================================================== */

!(function (e) {
  "function" == typeof define && define.amd
    ? define(["jquery"], e)
    : "object" == typeof exports
    ? (module.exports = e(require("jquery")))
    : e(jQuery);
})(function (e) {
  var n = /\+/g;
  function o(e) {
    return t.raw ? e : encodeURIComponent(e);
  }
  function i(e) {
    return o(t.json ? JSON.stringify(e) : String(e));
  }
  function r(o, i) {
    var r = t.raw
      ? o
      : (function (e) {
          0 === e.indexOf('"') &&
            (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
          try {
            return (
              (e = decodeURIComponent(e.replace(n, " "))),
              t.json ? JSON.parse(e) : e
            );
          } catch (e) {}
        })(o);
    return e.isFunction(i) ? i(r) : r;
  }
  var t = (e.cookie = function (n, c, u) {
    if (arguments.length > 1 && !e.isFunction(c)) {
      if ("number" == typeof (u = e.extend({}, t.defaults, u)).expires) {
        var s = u.expires,
          a = (u.expires = new Date());
        a.setMilliseconds(a.getMilliseconds() + 864e5 * s);
      }
      return (document.cookie = [
        o(n),
        "=",
        i(c),
        u.expires ? "; expires=" + u.expires.toUTCString() : "",
        u.path ? "; path=" + u.path : "",
        u.domain ? "; domain=" + u.domain : "",
        u.secure ? "; secure" : "",
      ].join(""));
    }
    for (
      var d,
        f = n ? void 0 : {},
        p = document.cookie ? document.cookie.split("; ") : [],
        l = 0,
        m = p.length;
      l < m;
      l++
    ) {
      var x = p[l].split("="),
        g = ((d = x.shift()), t.raw ? d : decodeURIComponent(d)),
        v = x.join("=");
      if (n === g) {
        f = r(v, c);
        break;
      }
      n || void 0 === (v = r(v)) || (f[g] = v);
    }
    return f;
  });
  (t.defaults = {}),
    (e.removeCookie = function (n, o) {
      return e.cookie(n, "", e.extend({}, o, { expires: -1 })), !e.cookie(n);
    });
});
