const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/margaret/personal/pitstain-archive/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/margaret/personal/pitstain-archive/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/margaret/personal/pitstain-archive/src/pages/about.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/margaret/personal/pitstain-archive/src/pages/index.js"))),
  "component---src-pages-pitstain-archive-js": hot(preferDefault(require("/Users/margaret/personal/pitstain-archive/src/pages/pitstain-archive.js"))),
  "component---src-pages-shop-js": hot(preferDefault(require("/Users/margaret/personal/pitstain-archive/src/pages/shop.js")))
}

