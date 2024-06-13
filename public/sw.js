if (!self.define) {
  let e,
    s = {};
  const a = (a, n) => (
    (a = new URL(a + ".js", n).href),
    s[a] ||
      new Promise(s => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = a), (e.onload = s), document.head.appendChild(e);
        } else (e = a), importScripts(a), s();
      }).then(() => {
        let e = s[a];
        if (!e) throw new Error(`Module ${a} didn’t register its module`);
        return e;
      })
  );
  self.define = (n, t) => {
    const i = e || ("document" in self ? document.currentScript.src : "") || location.href;
    if (s[i]) return;
    let c = {};
    const r = e => a(e, i),
      o = { module: { uri: i }, exports: c, require: r };
    s[i] = Promise.all(n.map(e => o[e] || r(e))).then(e => (t(...e), c));
  };
}
define(["./workbox-c2c0676f"], function (e) {
  "use strict";
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        { url: "/_next/static/TQgPd8yaz6SU1Yz1JVkHg/_buildManifest.js", revision: "2ec694eb52ae4f523f265a46bae4d768" },
        { url: "/_next/static/TQgPd8yaz6SU1Yz1JVkHg/_ssgManifest.js", revision: "b6652df95db52feb4daf4eca35380933" },
        { url: "/_next/static/chunks/403-ba46cdab0894dff2.js", revision: "TQgPd8yaz6SU1Yz1JVkHg" },
        { url: "/_next/static/chunks/app/Workout/%5Bexercise%5D/page-80847df20dca987d.js", revision: "TQgPd8yaz6SU1Yz1JVkHg" },
        { url: "/_next/static/chunks/app/Workout/page-a17bf829c1622f93.js", revision: "TQgPd8yaz6SU1Yz1JVkHg" },
        { url: "/_next/static/chunks/app/_not-found/page-0c2cf0b572bef177.js", revision: "TQgPd8yaz6SU1Yz1JVkHg" },
        { url: "/_next/static/chunks/app/layout-b43f5f648631b4e2.js", revision: "TQgPd8yaz6SU1Yz1JVkHg" },
        { url: "/_next/static/chunks/app/page-9460aeb7a1e5a07c.js", revision: "TQgPd8yaz6SU1Yz1JVkHg" },
        { url: "/_next/static/chunks/fd9d1056-99698e2e9c7f3a30.js", revision: "TQgPd8yaz6SU1Yz1JVkHg" },
        { url: "/_next/static/chunks/framework-f66176bb897dc684.js", revision: "TQgPd8yaz6SU1Yz1JVkHg" },
        { url: "/_next/static/chunks/main-app-cc52402c1796c729.js", revision: "TQgPd8yaz6SU1Yz1JVkHg" },
        { url: "/_next/static/chunks/main-c1cf8f7b9f2cba45.js", revision: "TQgPd8yaz6SU1Yz1JVkHg" },
        { url: "/_next/static/chunks/pages/_app-6a626577ffa902a4.js", revision: "TQgPd8yaz6SU1Yz1JVkHg" },
        { url: "/_next/static/chunks/pages/_error-1be831200e60c5c0.js", revision: "TQgPd8yaz6SU1Yz1JVkHg" },
        { url: "/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js", revision: "79330112775102f91e1010318bae2bd3" },
        { url: "/_next/static/chunks/webpack-cb86a99cd2f791d1.js", revision: "TQgPd8yaz6SU1Yz1JVkHg" },
        { url: "/_next/static/css/a439296afca82271.css", revision: "a439296afca82271" },
        { url: "/exercise-app.png", revision: "f329c7414197979673385a167bda71f1" },
        { url: "/manifest.json", revision: "467a7fbd3368015566602343fb5d7c7a" },
      ],
      { ignoreURLParametersMatching: [/^utm_/, /^fbclid$/] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      "/",
      new e.NetworkFirst({
        cacheName: "start-url",
        plugins: [
          {
            cacheWillUpdate: async ({ response: e }) =>
              e && "opaqueredirect" === e.type ? new Response(e.body, { status: 200, statusText: "OK", headers: e.headers }) : e,
          },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: "google-fonts-webfonts",
        plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 })],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets",
        plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 })],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-font-assets",
        plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 })],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-image-assets",
        plugins: [new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 2592e3 })],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/static.+\.js$/i,
      new e.CacheFirst({
        cacheName: "next-static-js-assets",
        plugins: [new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 })],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-image",
        plugins: [new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 })],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: "static-audio-assets",
        plugins: [new e.RangeRequestsPlugin(), new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp4|webm)$/i,
      new e.CacheFirst({
        cacheName: "static-video-assets",
        plugins: [new e.RangeRequestsPlugin(), new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-js-assets",
        plugins: [new e.ExpirationPlugin({ maxEntries: 48, maxAgeSeconds: 86400 })],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-style-assets",
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-data",
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: "static-data-assets",
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ sameOrigin: e, url: { pathname: s } }) => !(!e || s.startsWith("/api/auth/callback") || !s.startsWith("/api/")),
      new e.NetworkFirst({
        cacheName: "apis",
        networkTimeoutSeconds: 10,
        plugins: [new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 })],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ request: e, url: { pathname: s }, sameOrigin: a }) =>
        "1" === e.headers.get("RSC") && "1" === e.headers.get("Next-Router-Prefetch") && a && !s.startsWith("/api/"),
      new e.NetworkFirst({
        cacheName: "pages-rsc-prefetch",
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ request: e, url: { pathname: s }, sameOrigin: a }) => "1" === e.headers.get("RSC") && a && !s.startsWith("/api/"),
      new e.NetworkFirst({ cacheName: "pages-rsc", plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })] }),
      "GET"
    ),
    e.registerRoute(
      ({ url: { pathname: e }, sameOrigin: s }) => s && !e.startsWith("/api/"),
      new e.NetworkFirst({ cacheName: "pages", plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })] }),
      "GET"
    ),
    e.registerRoute(
      ({ sameOrigin: e }) => !e,
      new e.NetworkFirst({
        cacheName: "cross-origin",
        networkTimeoutSeconds: 10,
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 })],
      }),
      "GET"
    );
});
