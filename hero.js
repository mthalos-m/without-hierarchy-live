/* ============================================================
   Without Hierarchy, Live — the two-pictures hero
   Steps the reader through four beats: the reductionist
   hierarchy dissolves into scale freedom, then resheathing.

   Scroll-driven by default (a tall track with a pinned stage,
   scroll position choosing the beat); the buttons, dots, and
   arrow keys scroll to each beat. When the visitor prefers
   reduced motion, it degrades to a plain button-driven stepper.
   ============================================================ */
(function () {
    "use strict";

    var STACK_X = 340;
    var stackY  = [66, 118, 170, 222, 274];
    var detach  = [-24, 20, 28, -20, 8];
    var scatter = [[175, 235], [300, 265], [490, 240], [410, 140], [250, 170]];

    var beats = [
        {
            label: "the hierarchy",
            quote: "Pictures are virulent; they are highly infectious.",
            gloss: "The reigning picture: a master ontology at the base, and everything above it merely derivative."
        },
        {
            label: "the verdict",
            quote: "I reject the hierarchy outright. It is an abomination.",
            gloss: "Big things meet little things all the time — and the hierarchy has no room for it. The levels begin to come apart."
        },
        {
            label: "scale freedom",
            quote: "There is no special or privileged scale at which to view activity in the universe … the universe is scale free.",
            gloss: "The levels become overlapping ovals. Activity pulses at every scale at once — none of them privileged."
        },
        {
            label: "resheathing",
            quote: "New things come into existence through the process of reclothing old things in new sheaths.",
            gloss: "Not cobbling parts together but resheathing — one thing gathers another into a new sheath, the old features giving way without disappearing."
        }
    ];

    var root    = document.getElementById("two-pictures");
    var track   = document.getElementById("tp-track");
    var units   = Array.prototype.slice.call(root.querySelectorAll(".tp-unit"));
    var sheath  = root.querySelector(".u-sheath");
    var beatEl  = document.getElementById("tp-beat");
    var quoteEl = document.getElementById("tp-quote");
    var glossEl = document.getElementById("tp-gloss");
    var prevBtn = document.getElementById("tp-prev");
    var nextBtn = document.getElementById("tp-next");
    var dotsEl  = document.getElementById("tp-dots");
    var hintEl  = document.getElementById("tp-scrollhint");

    var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var scrolly = !reduceMotion;   // scroll-driven only when motion is welcome

    var step = 0;

    var dots = beats.map(function (b, i) {
        var d = document.createElement("button");
        d.className = "tp-dot";
        d.setAttribute("role", "tab");
        d.setAttribute("aria-label", "Beat " + (i + 1) + ": " + b.label);
        d.addEventListener("click", function () { go(i); });
        dotsEl.appendChild(d);
        return d;
    });

    function clamp(n, lo, hi) { return Math.max(lo, Math.min(hi, n)); }

    function place(g, cx, cy) {
        g.style.transform = "translate(" + cx + "px, " + cy + "px)";
    }

    function render() {
        var inOvals = step >= 2;
        units.forEach(function (g, i) {
            var rect  = g.querySelector(".u-rect");
            var oval  = g.querySelector(".u-oval");
            var pulse = g.querySelector(".u-pulse");
            var label = g.querySelector(".u-label");

            if (inOvals) {
                place(g, scatter[i][0], scatter[i][1]);
                g.style.opacity = "1";
                rect.style.opacity = "0";
                oval.style.opacity = "1";
                pulse.style.opacity = "";
                if (label) { label.style.opacity = "0"; }
            } else {
                var dx = step === 1 ? detach[i] : 0;
                place(g, STACK_X + dx, stackY[i]);
                g.style.opacity = step === 1 ? "0.55" : "1";
                rect.style.opacity = "1";
                oval.style.opacity = "0";
                pulse.style.opacity = "0";
                if (label) { label.style.opacity = "1"; }
            }
        });

        sheath.style.opacity = step === 3 ? "1" : "0";
        root.setAttribute("data-step", String(step));

        beatEl.textContent = "beat " + (step + 1) + " of " + beats.length + " · " + beats[step].label;
        quoteEl.textContent = "“" + beats[step].quote + "”";
        glossEl.textContent = beats[step].gloss;

        dots.forEach(function (d, i) {
            d.classList.toggle("active", i === step);
            d.setAttribute("aria-selected", i === step ? "true" : "false");
        });

        prevBtn.disabled = step === 0;
        nextBtn.disabled = step === beats.length - 1;

        if (hintEl) { hintEl.classList.toggle("show", scrolly && step === 0); }
    }

    function setStep(i) {
        var next = clamp(i, 0, beats.length - 1);
        if (next === step) { return; }
        step = next;
        render();
    }

    /* --- scroll-driven mode ----------------------------------- */
    function beatScrollTarget(i) {
        var absTop = track.getBoundingClientRect().top + window.pageYOffset;
        var span = track.offsetHeight - window.innerHeight;
        var progress = (i + 0.5) / beats.length;
        return absTop + span * progress;
    }

    function beatFromScroll() {
        var span = track.offsetHeight - window.innerHeight;
        if (span <= 0) { return 0; }
        var scrolled = -track.getBoundingClientRect().top;
        var progress = clamp(scrolled / span, 0, 1);
        return clamp(Math.floor(progress * beats.length), 0, beats.length - 1);
    }

    var ticking = false;
    function onScroll() {
        if (ticking) { return; }
        ticking = true;
        window.requestAnimationFrame(function () {
            setStep(beatFromScroll());
            ticking = false;
        });
    }

    function go(i) {
        var target = clamp(i, 0, beats.length - 1);
        if (scrolly) {
            window.scrollTo({ top: beatScrollTarget(target), behavior: reduceMotion ? "auto" : "smooth" });
        } else {
            setStep(target);
        }
    }

    prevBtn.addEventListener("click", function () { go(step - 1); });
    nextBtn.addEventListener("click", function () { go(step + 1); });

    document.addEventListener("keydown", function (e) {
        if (e.key === "ArrowRight") { go(step + 1); }
        else if (e.key === "ArrowLeft") { go(step - 1); }
    });

    if (scrolly && track) {
        track.classList.add("tp-scrolly");
        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onScroll, { passive: true });
        step = beatFromScroll();
    }

    render();
})();
