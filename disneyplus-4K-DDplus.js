// ==UserScript==
// @name         4K DSNP
// @namespace   -∞WKS∞-#3982 (Discord)
// @version     1.0
// @author      -∞WKS∞-
// @match        https://www.disneyplus.com/*
// ==/UserScript==

(function() {
    'use strict';

    // Modifica la resolución en las solicitudes
    const originalOpen = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function(method, url) {
        if (url === "https://disney.playback.edge.bamgrid.com/v7/playback/ctr-regular") {
            arguments[1] = "https://disney.playback.edge.bamgrid.com/v7/playback/tv-drm-ctr-h265-hdr10-atmos";
            const originalSend = XMLHttpRequest.prototype.send;
            this.send = function(data) {
                if (data.includes("1280x720")) {
                    data = data.replace("1280x720", "3840x2160");
                }
                originalSend.call(this, data);
            };
        }
        originalOpen.apply(this, arguments);
    };
})();
