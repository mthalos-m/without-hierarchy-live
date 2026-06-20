/* Render the lexicon cards from `terms` in data.js. */
(function () {
    "use strict";
    var grid = document.getElementById("lexicon");
    if (!grid || typeof terms === "undefined") { return; }

    function el(tag, cls, text) {
        var n = document.createElement(tag);
        if (cls) { n.className = cls; }
        if (text != null) { n.textContent = text; }
        return n;
    }

    terms.forEach(function (t) {
        var card = el("article", "term-card");
        card.appendChild(el("h3", "term-name", t.name));
        card.appendChild(el("p", "term-gloss", t.gloss));
        card.appendChild(el("blockquote", "term-quote", "“" + t.quote + "”"));
        card.appendChild(el("p", "term-source", t.source));
        grid.appendChild(card);
    });
})();
