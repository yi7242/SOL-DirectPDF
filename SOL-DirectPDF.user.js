// ==UserScript==
// @name         SOL-DirectPDF
// @namespace    https://github.com/yi7242/SOL-DirectPDF/
// @version      0.1
// @description  Open PDF viewer directly without downloading the PDF file.
// @author       yi
// @match        https://sol.sfc.keio.ac.jp/*
// @icon         https://pbs.twimg.com/profile_images/1247229237699829765/pEMr46Cp_400x400.jpg
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let c = document.getElementById("file_content");
    if (c != undefined) {
        location.href = (document.getElementById("file_content").src);
    }
})();
