/* Render the chapters, grouped by part, from `parts` in data.js. */
(function () {
    "use strict";
    var wrap = document.getElementById("chapters");
    if (!wrap || typeof parts === "undefined") { return; }

    function el(tag, cls, text) {
        var n = document.createElement(tag);
        if (cls) { n.className = cls; }
        if (text != null) { n.textContent = text; }
        return n;
    }

    parts.forEach(function (part) {
        var block = el("section", "part-block");
        block.appendChild(el("h2", "part-label", part.label));

        part.chapters.forEach(function (ch) {
            var row = el("div", "chapter-row");
            row.appendChild(el("div", "chapter-num", ch.num));

            var body = el("div", "chapter-body");
            body.appendChild(el("h3", null, ch.title));
            body.appendChild(el("p", "chapter-thesis", ch.thesis));
            body.appendChild(el("p", "chapter-page", ch.page));
            row.appendChild(body);

            block.appendChild(row);
        });

        wrap.appendChild(block);
    });
})();
