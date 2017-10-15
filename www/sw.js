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
    "url": "build/agc.js",
    "revision": "e393ba9484208659f7af01d192911202"
  },
  {
    "url": "build/agc.registry.json",
    "revision": "2a2066a2d4090355c9d913a0e74978cd"
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
    "url": "build/agc/nuwtx8rj.js",
    "revision": "3ffadfd5ec6027f025f72b3626ee7871"
  },
  {
    "url": "build/agc/pkauaplk.css",
    "revision": "687d026bb942a8e6854611ad23c3265e"
  },
  {
    "url": "build/agc/yye7tkov.css",
    "revision": "b8795a407af28909068bb81efbb4fb38"
  },
  {
    "url": "index.html",
    "revision": "ce5f2108a01deddc3c60cae9e67bf0b5"
  }
];

const workboxSW = new self.WorkboxSW({
  "skipWaiting": true,
  "clientsClaim": true
});
workboxSW.precache(fileManifest);
