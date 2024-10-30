window.screenOrientation = "sensor_landscape";
loadLib("libs/laya.core.js");
loadLib("libs/laya.ui.js");
loadLib("libs/laya.d3.js");
loadLib("libs/jslinq.min.js");
loadLib("js/bundle_.js");

// Base URL ayarı
Laya.URL.basePath = "https://example.com/";

// formatURL fonksiyonunu geçersiz kılma
Laya.URL.formatURL = function(url) {
    if (!url) return "null path";
    if (url.indexOf(":") > 0) return url;
    return Laya.URL.basePath + url;
};
