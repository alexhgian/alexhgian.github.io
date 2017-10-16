importScripts('workbox-sw.prod.v2.1.0.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "assets/ag-icon.png",
    "revision": "c17bb3e211c01cf499f3865cf4b5717c"
  },
  {
    "url": "build/agc.js",
    "revision": "95f864080394460aad06ce5e33271e61"
  },
  {
    "url": "build/agc.registry.json",
    "revision": "6d9bd1fde4b11daafd9f66cbe9b7c23b"
  },
  {
    "url": "build/agc/agc.ihqj46bf.js",
    "revision": "1e7489b8609b9da2a61b6396956177de"
  },
  {
    "url": "build/agc/agc.j2loe9pv.pf.js",
    "revision": "ffd2fd2b9f318fd596508f92d5e2fd25"
  },
  {
    "url": "build/agc/cuyhpkeu.js",
    "revision": "4cc6b4178359325b4195d079f8cc159c"
  },
  {
    "url": "build/agc/esdty7xs.js",
    "revision": "256ab4b6e164ec874d659ce55407a886"
  },
  {
    "url": "build/agc/k5fzxems.js",
    "revision": "4c8fcfe998721396e6d52effab776de4"
  },
  {
    "url": "build/agc/l9c6jken.css",
    "revision": "b0f1292f9f7ebbb94b016022850a952c"
  },
  {
    "url": "build/agc/p0grnsji.css",
    "revision": "9cc621d1e447df2dbdb296df8a8e71f4"
  },
  {
    "url": "build/agc/qphgssjm.css",
    "revision": "e2413c3f9db94dde5db9ab4f36a974b7"
  },
  {
    "url": "favicon.ico",
    "revision": "99564f95ba2c9035d0b44ff09b765501"
  },
  {
    "url": "index.html",
    "revision": "3282fb515ff116251dae7ab14168b0b9"
  },
  {
    "url": "manifest.json",
    "revision": "df278b94ff689fa077de3f8935f7cd20"
  }
];

const workboxSW = new self.WorkboxSW({
  "skipWaiting": true,
  "clientsClaim": true
});
workboxSW.precache(fileManifest);
