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
    "revision": "c5b61c7e6315a9eaa9c642c8269b326b"
  },
  {
    "url": "build/agc.registry.json",
    "revision": "339fbefdf759740acbdc5e4a8f5fcaf7"
  },
  {
    "url": "build/agc/ag-app.css",
    "revision": "71fc4d2bc0c61eb26a99f412535f8c0e"
  },
  {
    "url": "build/agc/ag-app.js",
    "revision": "ef4968261ed316b7b48f08093fac4eae"
  },
  {
    "url": "build/agc/ag-debug.css",
    "revision": "b0f1292f9f7ebbb94b016022850a952c"
  },
  {
    "url": "build/agc/ag-debug.js",
    "revision": "355af9bd0282ddc1bda0217d9284e02b"
  },
  {
    "url": "build/agc/ag-search.css",
    "revision": "b8795a407af28909068bb81efbb4fb38"
  },
  {
    "url": "build/agc/ag-search.js",
    "revision": "ac7c5d2681936a4e18d77d5086c36227"
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
    "url": "index.html",
    "revision": "ba3e94e0cc3b4d00ff3d6b16f3f098f0"
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
