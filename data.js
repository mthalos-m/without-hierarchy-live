/* ============================================================
   Without Hierarchy, Live — content data
   `terms`  : the book's lexicon (glosses + verbatim quotes)
   `parts`  : the table of contents, by part, with chapter theses
   Quotes and page references are from Without Hierarchy:
   The Scale Freedom of the Universe (Oxford, 2013). All entries
   below are drawn from a full read of the book.
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
        name: "The hierarchy",
        gloss: "The picture Thalos rejects: levels stacked from a fundamental ground floor up, with everything above merely derivative.",
        quote: "I reject the hierarchy outright. It is an abomination.",
        source: "Introduction, p. 9"
    },
    {
        name: "Master Science",
        gloss: "The reductionist's imagined science that holds the key to all the rest — its completed form being a Theory of Everything.",
        quote: "Views that embrace the doctrine according to which there is a Master Science … Because the MS, once completed, will contain the true Theory of Everything.",
        source: "Introduction, p. 7"
    },
    {
        name: "Emergentism",
        gloss: "The sophisticated form of the one-scale dogma — nonreductive physicalism still wedded to levels and supervenience. Thalos's chief foil in chapter 1.",
        quote: "Emergence is reductionism in sheep's clothes.",
        source: "Chapter 1, p. 42"
    },
    {
        name: "Supervenience",
        gloss: "The doctrine that everything is fixed once the microphysical is fixed — Thalos's central target. She argues it is not even asymmetrical, so it cannot do the work of marking levels.",
        quote: "Levels and level boundaries must go. And supervenience of everything upon the microphysical, as the doctrine that makes the hierarchy picture apropos, must go with it.",
        source: "Chapter 1, p. 41"
    },
    {
        name: "Cobbling",
        gloss: "One route to novelty — simply putting parts together, one at a time. Contrasted with resheathing, which adds structure from a larger scale.",
        quote: "Cobbling is a simple putting together; where by contrast sheaths provide added structure, while the ensheathed continues to provide some but not all of what it provided before being resheathed.",
        source: "Introduction, p. 4"
    },
    {
        name: "Resheathing",
        gloss: "How genuinely new things come into being: by acting at a larger scale to entrain new order on things at a smaller scale — reclothing old things in new sheaths, not assembling parts.",
        quote: "That's what resheathing is: acting at a higher scale so as to entrain a new state upon things at a lower scale.",
        source: "Chapter 2, p. 97 · defined formally in ch. 7"
    },
    {
        name: "Concreta",
        gloss: "The things the book is about — whatever exists concretely, encounterable in space and time. Numbers and other abstracta are excluded; everything concrete is physical, at every scale.",
        quote: "If something or some feature exists concretely, it's simply, unproblematically, and indefatigably physical … numbers and other mathematical, logical, and conceptual entities are not concreta.",
        source: "Chapter 1, p. 37"
    },
    {
        name: "Fundamentality",
        gloss: "Not one notion but several. Thalos argues the reductionist conflates size with fundamentality, and advances a different sense of the term.",
        quote: "Some would use the term “fundamental” here. I shall be advocating for another sense of “fundamental” in chapter 3.",
        source: "Introduction, p. 6 · argued in ch. 3"
    },
    {
        name: "Atomism",
        gloss: "Fundamentality as ontological simplicity: absolute, independent building blocks with no internal relations. The reigning conception Thalos opposes.",
        quote: "Atomism is thus committed to the idea that independence belongs only to the atoms.",
        source: "Chapter 3, p. 109"
    },
    {
        name: "Systemism",
        gloss: "Thalos's alternative conception of fundamentality: the fundamental thing is the bond, and the basic unit is a System (capital S) — an integrate, not a mere aggregate.",
        quote: "A System is a One that is made out of many.",
        source: "Chapter 3, p. 114"
    },
    {
        name: "Dependence",
        gloss: "The asymmetrical relation that does the work people wrongly assign to causation — the real glue, and the proper subject of a theory of science.",
        quote: "The name of “causation” should not be affixed to glue that holds things together; that glue is “dependence.”",
        source: "Chapter 1, p. 45 · theory in ch. 7"
    },
    {
        name: "Protocol",
        gloss: "An asymmetrical network of dependence relations that organizes lower-order processes — the engineering-flavored structure that does what causation cannot.",
        quote: "I propose to speak of such asymmetrical dependence networks as protocols.",
        source: "Chapter 4, p. 133"
    },
    {
        name: "Control",
        gloss: "Not a probability relation but a matter of authority and rank — which directives win out in conflict. What modulation and switches really require.",
        quote: "Control is a matter of authorities, a matter of which directives have a trumping effect.",
        source: "Chapter 4, p. 141"
    },
    {
        name: "Degrees of freedom",
        gloss: "The independent “leaders” of a System. A System forms — and resheathing occurs — when the aggregation undergoes a reduction in degrees of freedom.",
        quote: "A System, with a capital S, is one in which the aggregation of the parts has undergone a reduction in degrees of freedom.",
        source: "Chapters 3 & 7"
    },
    {
        name: "Filter",
        gloss: "A science's own autonomous network of dependence relations. The collected, ever-evolving filters are themselves the cement that holds the world together.",
        quote: "The cement of the universe is its ever-evolving set of filters.",
        source: "Chapter 4, p. 153"
    },
    {
        name: "The cement of the universe",
        gloss: "What holds a many-scaled world together. For Thalos it is twofold — the laws within each filter, and resheathing, the process that builds and links new layers of order.",
        quote: "Laws and resheathing: these are the two kinds of cement in our scale-free universe.",
        source: "Chapter 6, p. 181"
    },
    {
        name: "Leading and following",
        gloss: "The logic of dependence. Wherever there is order, some quantities lead (they shape their System) and others follow; resheathing reorganizes them under new leadership.",
        quote: "Where there are laws, patterns, or order, some quantities or features of that scale are leaders in it, and others followers.",
        source: "Chapter 6, p. 175 · formalized in ch. 7"
    },
    {
        name: "Renormalization",
        gloss: "The physics that makes scale freedom transparent: it explains universality (very different substances sharing the same critical exponents) without privileging the micro.",
        quote: "Renormalization is the quintessential mathematics of the scale-free universe.",
        source: "Chapter 8, p. 226"
    },
    {
        name: "Truth is normative",
        gloss: "The book's closing claim: to call something true is to invoke standards independent of advantage. Because science aims at truth, and the world is one, science must be unified.",
        quote: "Truth deserves to be believed.",
        source: "Conclusion, p. 265"
    }
];

var parts = [
    {
        label: "Introduction",
        chapters: [
            {
                num: "✦",
                title: "Toward a theory of science",
                thesis: "States the thesis of scale freedom and sets its two pictures against each other — the reductionist hierarchy versus the overlapping ovals — and introduces resheathing as the way new things come into being.",
                page: "p. 3"
            }
        ]
    },
    {
        label: "Part One · Scale freedom multiply contextualized",
        chapters: [
            {
                num: "1",
                title: "Against the philosophy of a one-scale universe",
                thesis: "Emergentism's four commitments — physicalism, novelty-by-levels, supervenience, downward causation — cannot consistently hold together (Kim's argument), so supervenience and “levels” must go. Physics itself, from quantum sync and nonlocality to superconductivity, shows activity that is not confined to the micro scale.",
                page: "p. 31"
            },
            {
                num: "2",
                title: "Resheathing",
                thesis: "Through the contrast of Newtonian, analytical, and quantum mechanics, argues there are no truly independent entities — everything is “situated.” So we make things (a magnet, a sentence) by acting at a larger scale to entrain new order below — resheathing — not by cobbling parts one at a time.",
                page: "p. 79"
            }
        ]
    },
    {
        label: "Part Two · Philosophical foundations of science and metaphysics",
        chapters: [
            {
                num: "3",
                title: "Multiple conceptions of fundamentality",
                thesis: "Distinguishes two orthogonal conceptions of fundamentality: atomism (the fundamental is the simplest building block, with no internal relations) and systemism (the fundamental is the bond; a System is “a One made out of many”). The real question is not “is there a bottom level?” but “are there internal relations?”",
                page: "p. 105"
            },
            {
                num: "4",
                title: "Why causation cannot be the cement of the universe",
                thesis: "The prevailing conception of causation — efficient, local, probability-raising — is genuinely useful but cannot be the universal cement or lingua franca of the sciences; it can't represent asymmetrical dependence, modulation, or control. Hand “causation” to the clinic; the theory of science needs dependence, captured as protocols and control.",
                page: "p. 127"
            },
            {
                num: "5",
                title: "Moves and movers: notes on the progress of science",
                thesis: "With causation ceded to the clinic, turns to the sociology of science — how clinical versus theoretical motives “bend” it through conceptual moves. Via flocking (the coinage “boid” as a productive bridge between fields) and autism (a clinical label that may track no single real kind), argues science's task is responsiveness to the real network of dependences.",
                page: "p. 154"
            },
            {
                num: "6",
                title: "Making sense of order: the true cement of the universe",
                thesis: "The cement that holds the universe together is twofold: the laws within each discipline's filter, and resheathing — the way new layers of order arise and interpenetrate. Order is contingent, opportunistic, and historical, not a fixed hierarchy; Systems analysis is its ecumenical metaphysics.",
                page: "p. 170"
            }
        ]
    },
    {
        label: "Part Three · Deployments",
        chapters: [
            {
                num: "7",
                title: "The logic of leading and following",
                thesis: "The technical core: a formal taxonomy of dependence — functional, covariational, ontological — culminating in the asymmetric relation of “shaping.” A quantity either leads (shapes its System) or follows; this yields the precise definition of resheathing — the reorganization of old leaders and followers under new leadership, a reduction in combined degrees of freedom.",
                page: "p. 193"
            },
            {
                num: "8",
                title: "The “microcosm” of unity (of science) that is physics",
                thesis: "Physics, spanning the whole range of scales, is itself a microcosm of the scale-free universe — it is nonreductive. Renormalization, in explaining universality (wildly different substances sharing the same critical exponents), shows that micro details don't fix macro behavior, and liberates the macro rather than reducing it away.",
                page: "p. 222"
            }
        ]
    },
    {
        label: "Conclusion",
        chapters: [
            {
                num: "✦",
                title: "Toward a more truth-illuminating metaphysics",
                thesis: "Recaps the case and opens new vistas — reinventing philosophy as the unifier of inquiry, rethinking determinism and the puzzle of body, and a closing argument that truth is normative (“truth deserves to be believed”). Because science aims at truth, and the world is unified, science must adopt a unifying framework.",
                page: "p. 240"
            }
        ]
    }
];
