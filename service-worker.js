"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/software-design-patterns/index.html","a97aa6785daa0d4c4f063e50afa045a5"],["/software-design-patterns/static/css/main.65027555.css","41e5e45b9b5d9ecaa09b72c11eed3386"],["/software-design-patterns/static/js/main.32e7c20e.js","c79ddc8bc8d792dd007ce861ec78942b"],["/software-design-patterns/static/media/abstract-factory-code-sample.9ce73a14.png","9ce73a1441dabdc5a08cb7148eb619cd"],["/software-design-patterns/static/media/abstract-factory-diagram.574216c9.png","574216c91477bd31e80fe4604191e06d"],["/software-design-patterns/static/media/adapter-code-sample.a33f0f0c.png","a33f0f0cfbd9bd62f82deb599a19fbbc"],["/software-design-patterns/static/media/adapter-diagram.6574ca59.png","6574ca592a39da9d36138fbe96568ef0"],["/software-design-patterns/static/media/command-code-sample.c49dfd88.png","c49dfd881e546e112e7576c15a0004d9"],["/software-design-patterns/static/media/command-diagram.38ea533d.png","38ea533d4bb0f5170bb16670de1efea2"],["/software-design-patterns/static/media/facade-diagram.f0ccc68c.png","f0ccc68ca8b587027e322abf0e7b4d7a"],["/software-design-patterns/static/media/factory-method-code-sample.aa8fffc7.png","aa8fffc71b7acfa1c3a17e177db47a87"],["/software-design-patterns/static/media/factory-method-diagram.a5310c88.png","a5310c88dac1a1a4b07b687b6b0c5046"],["/software-design-patterns/static/media/mediator-diagram.b16474a8.png","b16474a878a9cc9c0ad6580486ff730a"],["/software-design-patterns/static/media/observer-code-sample.5d4928bf.png","5d4928bf2ac56d7ac14bf3aab2da7a4c"],["/software-design-patterns/static/media/observer-diagram.5db58d29.png","5db58d29386783e4bde8e4e1bf96f8c3"],["/software-design-patterns/static/media/singleton-code-sample.a386b581.png","a386b581897ab9ad267285862556752e"],["/software-design-patterns/static/media/singleton-diagram.71dfa049.png","71dfa0499195468bd836a540f4515343"],["/software-design-patterns/static/media/state-code-sample.c88f55fd.png","c88f55fd703fd83944fb929d407f7ba5"],["/software-design-patterns/static/media/state-diagram.678f0e93.png","678f0e93bf979b5c2b219c13d9f80e05"],["/software-design-patterns/static/media/strategy-code-sample.eb13e991.png","eb13e9912f5d9eca47e68faf591b4b09"],["/software-design-patterns/static/media/strategy-diagram.d36a7b84.png","d36a7b845dc9e660f1ac8346b08d6d06"],["/software-design-patterns/static/media/template-method-code-sample.5444c947.png","5444c947836a878d03cd104c2ae0027b"],["/software-design-patterns/static/media/template-method-diagram.4bb54a52.png","4bb54a529eaa3a7e50d08e91509ef7c8"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),r.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),r=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var n=new Request(t,{credentials:"same-origin"});return fetch(n).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,"index.html"),a=urlsToCacheKeys.has(t));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL("/software-design-patterns/index.html",self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});