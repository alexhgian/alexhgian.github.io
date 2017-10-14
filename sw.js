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
    "revision": "777be0159e93a6510f3b463d2608e5a5"
  },
  {
    "url": "build/agc.registry.json",
    "revision": "dc3730c93312c8f5754bacc86d0cd913"
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
    "url": "build/agc/nwdm6iqe.js",
    "revision": "0f8992f93f283163d6ba04aac1a302d2"
  },
  {
    "url": "build/agc/nz8dsqvs.css",
    "revision": "71fc4d2bc0c61eb26a99f412535f8c0e"
  },
  {
    "url": "build/agc/yye7tkov.css",
    "revision": "b8795a407af28909068bb81efbb4fb38"
  },
  {
    "url": "index.html",
    "revision": "42bde3ac82e53c206b21d6b5a100593f"
  },
  {
    "url": "manifest.json",
    "revision": "c84e9c9d5b35c4da877b66435993aca8"
  }
];

const workboxSW = new self.WorkboxSW({
  "skipWaiting": true,
  "clientsClaim": true
});
workboxSW.precache(fileManifest);
