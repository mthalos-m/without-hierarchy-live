/* ============================================================
   Without Hierarchy, Live — content data
   `terms`  : the book's lexicon (glosses + verbatim quotes)
   `parts`  : the table of contents, by part
   Quotes and page references are from Without Hierarchy:
   The Scale Freedom of the Universe (Oxford, 2013).
   Entries drawn from the Introduction are fully sourced;
   chapter theses marked "preview" come from the book's own
   forward-references and await a full read pass.
   ============================================================ */

var terms = [
    {
        name: "Scale freedom",
        gloss: "The thesis of the book: there is no privileged scale at which the universe is truly active. Activity happens at every scale.",
        quote: "When we are counting the number of scales at which there is activity in the universe, we cannot stop at one.",
        source: "Introduction, p. 6"
    },
    {
        name: "Activity",
        gloss: "Thalos's chosen term for the manner of happening at every scale — deliberately not called causation, which she reserves for something else.",
        quote: "There is all manner of activity in the universe, happening at every scale. Some might call this causation. I shall argue that another term should be used … So I've chosen the term “activity.”",
        source: "Introduction, pp. 5–6 · argued in ch. 4"
    },
    {
        name: "Resheathing",
        gloss: "How genuinely new things come into being: by reclothing old things in new sheaths, rather than only by assembling parts.",
        quote: "New things come into existence through the process of reclothing old things in new sheaths.",
        source: "Introduction, p. 4 · developed in ch. 2"
    },
    {
        name: "Cobbling",
        gloss: "The other, more familiar route to novelty — simply putting parts together. Contrasted with resheathing, which adds structure.",
        quote: "Cobbling is a simple putting together; where by contrast sheaths provide added structure, while the ensheathed continues to provide some but not all of what it provided before being resheathed.",
        source: "Introduction, p. 4"
    },
    {
        name: "The hierarchy",
        gloss: "The picture Thalos rejects: levels stacked from a fundamental ground floor up, with everything above merely derivative.",
        quote: "I reject the hierarchy outright. It is an abomination.",
        source: "Introduction, p. 9 · criticized throughout"
    },
    {
        name: "Master Science",
        gloss: "The reductionist's imagined science that holds the key to all the rest — its completed form being a Theory of Everything.",
        quote: "Views that embrace the doctrine according to which there is a Master Science … Because the MS, once completed, will contain the true Theory of Everything.",
        source: "Introduction, p. 7"
    },
    {
        name: "Fundamentality",
        gloss: "Not one notion but several. Thalos argues the reductionist conflates size with fundamentality, and advances a different sense of the term.",
        quote: "Some would use the term “fundamental” here. I shall be advocating for another sense of “fundamental” in chapter 3.",
        source: "Introduction, p. 6 · argued in ch. 3"
    }
];

var parts = [
    {
        label: "Part One · Scale freedom multiply contextualized",
        chapters: [
            {
                num: "1",
                title: "Against the philosophy of a one-scale universe",
                thesis: "The doctrine that complexity creates levels is metaphysically muddled — and so untenable.",
                page: "p. 31",
                kind: "preview"
            },
            {
                num: "2",
                title: "Resheathing",
                thesis: "Develops resheathing as a category of activity occurring at every scale of organization.",
                page: "p. 79",
                kind: "preview"
            }
        ]
    },
    {
        label: "Part Two · Philosophical foundations of science and metaphysics",
        chapters: [
            {
                num: "3",
                title: "Multiple conceptions of fundamentality",
                thesis: "There is more than one notion of the fundamental; size is not a guide to it.",
                page: "p. 105",
                kind: "preview"
            },
            {
                num: "4",
                title: "Why causation cannot be the cement of the universe",
                thesis: "Causation is no lingua franca among the sciences — it has other work to do.",
                page: "p. 127",
                kind: "preview"
            },
            {
                num: "5",
                title: "Moves and movers: notes on the progress of science",
                thesis: "On how science advances — its moves and the movers behind them.",
                page: "p. 154",
                kind: "preview"
            },
            {
                num: "6",
                title: "Making sense of order: the true cement of the universe",
                thesis: "Order, not causation, is what truly binds the universe together.",
                page: "p. 170",
                kind: "preview"
            }
        ]
    },
    {
        label: "Part Three · Deployments",
        chapters: [
            {
                num: "7",
                title: "The logic of leading and following",
                thesis: "A more general, more mathematical argument against the hierarchical picture.",
                page: "p. 193",
                kind: "preview"
            },
            {
                num: "8",
                title: "The “microcosm” of unity (of science) that is physics",
                thesis: "Even physics, looked at closely, does not deliver the one-scale unity reductionism wants.",
                page: "p. 222",
                kind: "preview"
            }
        ]
    }
];
