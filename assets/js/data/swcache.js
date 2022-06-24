const resource = [ /* --- CSS --- */ '/lv/assets/css/style.css', /* --- PWA --- */ '/lv/app.js', '/lv/sw.js', /* --- HTML --- */ '/lv/index.html', '/lv/404.html', '/lv/categories/', '/lv/tags/', '/lv/archives/', '/lv/about/', /* --- Favicons & compressed JS --- */ '/lv/assets/img/favicons/android-chrome-192x192.png', '/lv/assets/img/favicons/android-chrome-512x512.png', '/lv/assets/img/favicons/apple-touch-icon.png', '/lv/assets/img/favicons/avatar.png', '/lv/assets/img/favicons/favicon-16x16.png', '/lv/assets/img/favicons/favicon-32x32.png', '/lv/assets/img/favicons/favicon.ico', '/lv/assets/img/favicons/mstile-150x150.png', '/lv/assets/js/dist/categories.min.js', '/lv/assets/js/dist/commons.min.js', '/lv/assets/js/dist/home.min.js', '/lv/assets/js/dist/misc.min.js', '/lv/assets/js/dist/page.min.js', '/lv/assets/js/dist/post.min.js', '/lv/assets/js/dist/pvreport.min.js' ]; /* The request url with below domain will be cached */ const allowedDomains = [ 'i-mat.github.io', 'fonts.gstatic.com', 'fonts.googleapis.com', 'cdn.jsdelivr.net', 'polyfill.io' ]; /* Requests that include the following path will be banned */ const denyUrls = [ ];
