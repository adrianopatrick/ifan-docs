/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.1.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "031681f53676bf98307f49fc8d722fae"
  },
  {
    "url": "assets/css/14.styles.069008a2.css",
    "revision": "f6a8a025fbad004e2eae71de71a745da"
  },
  {
    "url": "assets/img/login1.57732863.png",
    "revision": "577328632b843ab5524d0d62df3c5671"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/0.fd49c217.js",
    "revision": "64c0351a5f5362b771a0661b0d8997b0"
  },
  {
    "url": "assets/js/1.a8784851.js",
    "revision": "956408c877214e2429e975d8d857f819"
  },
  {
    "url": "assets/js/10.f7ebfcdd.js",
    "revision": "b9f1df9e9b3a4ed00e401afcca90fc21"
  },
  {
    "url": "assets/js/11.fe7d5d4d.js",
    "revision": "94ee7931d4bcfb1a4da4dc4bbea011c2"
  },
  {
    "url": "assets/js/12.94d2b95d.js",
    "revision": "b0e419d4a6d70f15c5f454cf7f74cc8b"
  },
  {
    "url": "assets/js/13.425d6ffc.js",
    "revision": "e29f1b4cdfc176b88483f956549b157a"
  },
  {
    "url": "assets/js/2.c519822c.js",
    "revision": "5a07e15c1c713ec019f61c97f3c2995d"
  },
  {
    "url": "assets/js/3.b1019426.js",
    "revision": "7e395181b2a3d435ba685155b9b5097e"
  },
  {
    "url": "assets/js/4.a4d5c199.js",
    "revision": "7e1d5d6185931a915479fa68aa8c85a8"
  },
  {
    "url": "assets/js/5.8fef99b3.js",
    "revision": "c26c3a1c8a23160dbf70ce149f466aad"
  },
  {
    "url": "assets/js/6.f0cccefe.js",
    "revision": "8bec14a3bc6e6d40460ed08cc6f81f24"
  },
  {
    "url": "assets/js/7.156e11e4.js",
    "revision": "bfd078301d7f372ae7ed04acd1635ac0"
  },
  {
    "url": "assets/js/8.87e14b62.js",
    "revision": "5135458630b1ca07f865e6e84dd214c0"
  },
  {
    "url": "assets/js/9.d35f5ac5.js",
    "revision": "e4b6a3357d0ff34084ca0ccf9a1faed4"
  },
  {
    "url": "assets/js/app.b22e60a2.js",
    "revision": "5acd09271e4f1c1ec81a4b9a65d05dd8"
  },
  {
    "url": "assistidos.html",
    "revision": "dd1699375d1156ed82f3d56b967e0872"
  },
  {
    "url": "atividades.html",
    "revision": "9ac4928b8fe30549b212df38a5c96083"
  },
  {
    "url": "cadastro-geral.html",
    "revision": "da16d6d49502dd5e9a8a036604ed1b75"
  },
  {
    "url": "colaboradores.html",
    "revision": "4fdcbaedfe716bf7b8557d755d466f5e"
  },
  {
    "url": "dashboard.html",
    "revision": "0d28cc2caeb76fb4bf66064dd28ff86c"
  },
  {
    "url": "escolas.html",
    "revision": "a01cae3e85a07a48ff2ae1a5a22a939c"
  },
  {
    "url": "index.html",
    "revision": "917c383c614f81496a3ad02de216e467"
  },
  {
    "url": "login.html",
    "revision": "87f003e4d85289104d39da1418653a72"
  },
  {
    "url": "main.html",
    "revision": "41636b03add7c97a814d6fff0207125f"
  },
  {
    "url": "minha-conta.html",
    "revision": "fe782a04313c94c549ee4c663da75f88"
  },
  {
    "url": "nucleos.html",
    "revision": "8804417ef305b5d8f69b7006cf0e8ba1"
  },
  {
    "url": "projetos.html",
    "revision": "0ba9b96e7ba48b09da96e50e00c9f5c8"
  },
  {
    "url": "solicitacoes.html",
    "revision": "9142982b074b7ea7d50cc31a45d8d847"
  },
  {
    "url": "usuarios.html",
    "revision": "35ed4f778a4aa9f5141b2a73b0f4ced7"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
