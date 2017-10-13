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
    "revision": "3f6a5197e9a14936675014c36ae30d94"
  },
  {
    "url": "build/agc.registry.json",
    "revision": "0a1361091420bb4f30c658acd0ab2b15"
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
    "url": "build/agc/ajksi7gf.css",
    "revision": "6aacbf0ff4c6282e8a2b79a0b27e5c92"
  },
  {
    "url": "build/agc/oi8xe9hd.js",
    "revision": "e51ead3b27c50ff6ea91645f5dae6ca0"
  },
  {
    "url": "index.html",
    "revision": "e7d53963c0e43aa94054e95f459ee516"
  }
];

const workboxSW = new self.WorkboxSW({
  "skipWaiting": true,
  "clientsClaim": true
});
workboxSW.precache(fileManifest);
