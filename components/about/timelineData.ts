export interface MilestoneEvent {
  year: number | string;
  description: string;
}

export interface TimelineDecade {
  id: string;
  decadeRange: string; // e.g., "Year 1921–1930"
  periodShort: string; // e.g., "1921–1930"
  eraTitle: string;
  generation: string; // e.g., "1st Generation"
  category: "founding" | "resilience" | "modernization" | "high-tech";
  milestones: MilestoneEvent[];
  cardExcerpt: string;
  fullStory: string;
  machinery: string[];
  achievements: string[];
  badgeText: string;
  image: string;
  imageCaption: string;
}

export const TIMELINE_DECADES: TimelineDecade[] = [
  {
    id: "1921-1930",
    image: "/images/vintage_letterpress_1921.jpg",
    imageCaption: "Manual lead type cabinets & treadle letterpress platens (1921)",
    decadeRange: "Year 1921–1930",
    periodShort: "1921–1930",
    eraTitle: "The Genesis & Letterpress Craft",
    generation: "1st Generation",
    category: "founding",
    badgeText: "Foundation Era",
    milestones: [
      {
        year: 1921,
        description:
          "Shree Harihar Printing Works is founded in Gujarat with treadle and manual letterpress machines, anchored in an unwavering commitment to craft perfection.",
      },
      {
        year: 1926,
        description:
          "Expands commercial jobwork with hand-composed movable metal type cases, supplying bespoke business ledgers, trade stationery, and religious scriptures.",
      },
    ],
    cardExcerpt:
      "Our founders laid the cornerstone of Shree Harihar Printing Works on two foundational pillars: absolute print precision and trust. Operating treadle letterpress platens, the press set new benchmarks in regional commercial printing.",
    fullStory:
      "In 1921, our founders set out with a clear purpose: to craft prints that stand the test of time. In an era when printing required physical lead typesetting, ink viscosity balancing, and manually operated treadle platens, Shree Harihar quickly earned a reputation for flawless alignment and indelible impressions. Over this first decade, the workshop served merchant guilds, local publishers, and public institutions across Gujarat, laying the groundwork for a five-generation legacy.",
    machinery: [
      "Heavy Cast-Iron Treadle Letterpress Machines",
      "Hand-Composed Lead & Brass Movable Type Cabinets",
      "Manual Hand Guillotine Paper Shears",
    ],
    achievements: [
      "Established foundational customer trust across Gujarat",
      "Custom commercial ledger & security document printing",
      "Mastery of lead relief typesetting and fine black inks",
    ],
  },
  {
    id: "1931-1940",
    image: "/images/img3.png",
    imageCaption: "Mechanized stop-cylinder letterpress & scoring tables (1934)",
    decadeRange: "Year 1931–1940",
    periodShort: "1931–1940",
    eraTitle: "Cylinder Presses & Typography Mastery",
    generation: "1st Generation",
    category: "founding",
    badgeText: "Craft Expansion",
    milestones: [
      {
        year: 1934,
        description:
          "Introduces mechanized stop-cylinder letterpress equipment, quadrupling daily impression throughput for local textile mills and merchant trade.",
      },
      {
        year: 1938,
        description:
          "Pioneers multi-color relief typographic registration, introducing vibrant two-color and three-color label printing for regional commerce.",
      },
    ],
    cardExcerpt:
      "Installed high-capacity cylinder letterpress machines to support the booming textile and commercial trade of Gujarat, mastering multi-color relief typography and rapid turnaround.",
    fullStory:
      "As regional commerce flourished in the 1930s, particularly the iconic textile mills of Ahmedabad, demand for durable mill packaging labels and business circulars skyrocketed. Shree Harihar invested in mechanical stop-cylinder presses, allowing continuous impression feeding. The press perfected registration accuracy for multi-color letterpress relief, becoming the printing partner of choice for leading industrial pioneers.",
    machinery: [
      "Mechanical Stop-Cylinder Letterpress Machines",
      "Precision Rotary Card Scoring & Creasing Tables",
      "Hand-Cranked Proofing Presses",
    ],
    achievements: [
      "Major supplier of textile band labels and trade documentation",
      "Multi-color letterpress registration accuracy",
      "Tripled daily production capacity without sacrificing fidelity",
    ],
  },
  {
    id: "1941-1950",
    image: "/images/legacy_craftsmanship.jpg",
    imageCaption: "Heavy-duty power guillotine shears & post-independence bindery (1947)",
    decadeRange: "Year 1941–1950",
    periodShort: "1941–1950",
    eraTitle: "Wartime Continuity & Post-Independence Awakening",
    generation: "2nd Generation",
    category: "resilience",
    badgeText: "Resilience & Liberty",
    milestones: [
      {
        year: 1942,
        description:
          "The 2nd Generation joins the press leadership amidst severe wartime paper rationing, innovating resourceful paper converting and ink-stretching methods.",
      },
      {
        year: 1947,
        description:
          "Independent India enters a new dawn. Shree Harihar modernizes its bindery and invests in heavy-duty automated paper cutting machinery.",
      },
    ],
    cardExcerpt:
      "The second generation navigated wartime resource challenges with relentless ingenuity, followed by celebratory post-independence expansion and heavy-duty bindery upgrades.",
    fullStory:
      "The 1940s tested every business across India. With severe newsprint and imported ink shortages during World War II, the second generation stepped up, engineering local raw-material substitutions and waste-minimization techniques. With the historic arrival of Indian Independence in 1947, the country experienced an industrial renaissance. Shree Harihar celebrated the new nation by upgrading cutting and binding lines to handle unprecedented volumes.",
    machinery: [
      "Heavy-Duty Power Guillotine Paper Cutters",
      "Semi-Automatic Letterpress Book Binding Equipment",
      "Mechanical Perforating & Numbering Units",
    ],
    achievements: [
      "Uninterrupted operation throughout wartime paper rationing",
      "Transition of leadership to the 2nd generation",
      "Supported nation-building documentation and institutional printing",
    ],
  },
  {
    id: "1951-1960",
    image: "/images/img2.png",
    imageCaption: "Hot-metal line casting & early folding carton scoring (1958)",
    decadeRange: "Year 1951–1960",
    periodShort: "1951–1960",
    eraTitle: "Hot-Metal Composition & Packaging Inception",
    generation: "2nd Generation",
    category: "resilience",
    badgeText: "Industrial Surge",
    milestones: [
      {
        year: 1953,
        description:
          "Adopts mechanized hot-metal line-casting composition (Intertype/Linotype), boosting typographic typesetting speed tenfold.",
      },
      {
        year: 1958,
        description:
          "Begins early-generation folding carton fabrication and scoring for Gujarat's burgeoning consumer goods and pharmacy manufacturers.",
      },
    ],
    cardExcerpt:
      "Adopted mechanized hot-metal line casting and took early strides into rigid and folding carton manufacturing for consumer goods, establishing a footprint in emerging packaging.",
    fullStory:
      "During India's first Five-Year Plans, manufacturing grew rapidly. Harihar embraced mechanized hot-metal line casting in 1953, allowing entire pages of type to be cast from molten alloy in minutes rather than hand-assembled character by character. Recognizing that manufactured products needed sturdy, eye-catching boxes, the press began custom die-scoring and carton assembly in 1958, laying the foundation for our current packaging supremacy.",
    machinery: [
      "Hot-Metal Line-Casting Composition Units",
      "Platen Die-Cutting & Creasing Presses",
      "Specialized Carton Scoring & Corner-Stitching Machines",
    ],
    achievements: [
      "Introduced first folding boxboard cartons for pharmacy bottles",
      "Tenfold typesetting acceleration through hot-metal machinery",
      "Expanded client base to retail consumer goods",
    ],
  },
  {
    id: "1961-1970",
    image: "/images/modern_offset_press.jpg",
    imageCaption: "First-generation sheetfed offset lithography & darkroom (1968)",
    decadeRange: "Year 1961–1970",
    periodShort: "1961–1970",
    eraTitle: "The Leap to Sheetfed Offset Lithography",
    generation: "3rd Generation",
    category: "modernization",
    badgeText: "The Offset Shift",
    milestones: [
      {
        year: 1964,
        description:
          "The 3rd Generation enters management, spearheading a historic transition from relief letterpress to high-fidelity sheetfed offset lithography.",
      },
      {
        year: 1968,
        description:
          "Commissions dedicated offset presses and an in-house chemical plate-making darkroom, achieving micro-dot photographic reproduction.",
      },
    ],
    cardExcerpt:
      "Recognizing the dawn of lithographic offset printing, the third generation steered a bold technology pivot: commissioning sheetfed offset presses and darkroom plate processing.",
    fullStory:
      "The 1960s saw a transformative paradigm shift in print technology worldwide. Letterpress could no longer match the speed, fine screen ruling, and photographic clarity demanded by modern advertising. The 3rd generation boldly transformed the factory floor, acquiring modern sheetfed offset presses and constructing an in-house chemical prepress darkroom. This leap cemented Harihar's status as a technological leader in Western India.",
    machinery: [
      "First-Generation Sheetfed Offset Lithographic Presses",
      "Process Darkroom Camera & Chemical Plate Etching Baths",
      "High-Precision Paper Folding Machines",
    ],
    achievements: [
      "Successful transition from letterpress to offset lithography",
      "In-house prepress darkroom reducing lead times by 50%",
      "3rd Generation leadership taking the helm",
    ],
  },
  {
    id: "1971-1980",
    image: "/images/folding_cartons_specimen.jpg",
    imageCaption: "Dedicated pharmaceutical carton die-punching division (1973)",
    decadeRange: "Year 1971–1980",
    periodShort: "1971–1980",
    eraTitle: "Dedicated Packaging & Healthcare Division",
    generation: "3rd Generation",
    category: "modernization",
    badgeText: "Pharma Packaging",
    milestones: [
      {
        year: 1973,
        description:
          "Formalizes a dedicated Folding Carton & Label division, engineering specialized die-punching setups for high-volume paperboard cartons.",
      },
      {
        year: 1978,
        description:
          "Pioneers high-precision pharmaceutical carton packaging and moisture-resistant product labels complying with stringent medical standards.",
      },
    ],
    cardExcerpt:
      "Formalized dedicated folding carton and pharma packaging divisions, engineering custom die-punching setups and moisture-resistant labeling solutions for healthcare leaders.",
    fullStory:
      "Gujarat began evolving into the pharmaceutical capital of India during the 1970s. Shree Harihar recognized the rigorous packaging standards required by healthcare brands: tamper-evident locking tabs, batch-number clarity, and zero-defect consistency. By establishing dedicated carton punching lines and implementing multi-stage manual inspection, Harihar earned the trust of prominent pharmaceutical laboratories.",
    machinery: [
      "Specialized Platen Die-Punching Machines",
      "Precision Scoring & Creasing Tooling Beds",
      "Multi-Station Label Gumming & Slitting Units",
    ],
    achievements: [
      "Inaugurated dedicated Pharmaceutical Packaging Division",
      "Introduced strict multi-stage quality control checks",
      "Delivered first 1,000,000+ carton supply contract",
    ],
  },
  {
    id: "1981-1990",
    image: "/images/hero_brand_print.jpg",
    imageCaption: "German Heidelberg multi-color offset & gloss varnish coating (1984)",
    decadeRange: "Year 1981–1990",
    periodShort: "1981–1990",
    eraTitle: "The Heidelberg Era & Surface Embellishment",
    generation: "4th Generation",
    category: "modernization",
    badgeText: "Heidelberg & Varnish",
    milestones: [
      {
        year: 1984,
        description:
          "The 4th Generation enters operations, introducing world-renowned German Heidelberg multi-color offset presses for unmatched color consistency.",
      },
      {
        year: 1988,
        description:
          "Introduces inline and offline gloss varnish coating systems, pioneering premium high-gloss cartons for agarbatti, cosmetics, and confectionery.",
      },
    ],
    cardExcerpt:
      "Welcomed the fourth generation and ushered in German engineering excellence with Heidelberg multi-color offset presses and specialty gloss varnish coating lines.",
    fullStory:
      "In the 1980s, Indian retail packaging began competing with global aesthetic standards. The 4th generation introduced German Heidelberg offset printing machinery-renowned worldwide for mechanical durability and registration precision. By combining multi-color printing with specialized protective varnishes, Harihar helped iconic FMCG, agarbatti, and cosmetics brands stand out on store shelves across the country.",
    machinery: [
      "German Heidelberg Multi-Color Offset Presses",
      "Offline High-Gloss Varnish Coating Units",
      "Heavy-Duty Motorized Guillotine Systems",
    ],
    achievements: [
      "Commissioning of German Heidelberg printing technology",
      "Introduction of surface gloss & protective coatings",
      "Transition of leadership to the 4th generation",
    ],
  },
  {
    id: "1991-2000",
    image: "/images/img8.png",
    imageCaption: "Digital electronic prepress & Friends large-format punching (1998)",
    decadeRange: "Year 1991–2000",
    periodShort: "1991–2000",
    eraTitle: "Economic Liberalization & Digital Prepress",
    generation: "4th Generation",
    category: "modernization",
    badgeText: "Digitalization",
    milestones: [
      {
        year: 1994,
        description:
          "Integrates computerized digital prepress workstations and laser imagesetters, eliminating manual paste-up and drastically improving sharpness.",
      },
      {
        year: 1998,
        description:
          "Major conversion plant upgrade: commissions Friends manual punching machines (25\"x37\" & 22\"x32\") and Heidelberg Two-Colour offset lines.",
      },
    ],
    cardExcerpt:
      "Embraced India's economic liberalization by computerizing prepress workflows and commissioning high-capacity Friends die-punching machines and Heidelberg offset lines.",
    fullStory:
      "With India's landmark economic reforms in 1991, consumer goods and exports surged. Shree Harihar modernized its prepress department with Apple Macintosh and electronic raster workstations, replacing manual film stripping with precision digital page composition. On the post-press floor, large-format Friends punching machines were commissioned to handle complex folding carton profiles and heavy GSM boards.",
    machinery: [
      "Heidelberg Two Colour Offset Machine (20\" x 28\")",
      "Heidelberg Two Colour Offset Machine (20\" x 29\")",
      "Friends Manual Punching Machines (25\" x 37\" and 22\" x 32\")",
      "Digital Electronic Prepress Image Processors",
    ],
    achievements: [
      "Full digital prepress workflow implementation",
      "Expanded heavy carton die-cutting capacity with Friends machines",
      "Served multinational FMCG and export packaging clients",
    ],
  },
  {
    id: "2001-2010",
    image: "/images/img1.png",
    imageCaption: "Protek laser Computer-to-Plate (CTP) & Boxtech automated folder-gluer (2008)",
    decadeRange: "Year 2001–2010",
    periodShort: "2001–2010",
    eraTitle: "Computer-to-Plate (CTP) & Automated Gluing",
    generation: "4th & 5th Generation",
    category: "high-tech",
    badgeText: "CTP & Automation",
    milestones: [
      {
        year: 2004,
        description:
          "Installs Protek Computer-to-Plate (CTP) system (22\"x32\"), achieving 100% chemical film-free laser imaging and micron-precise halftone reproduction.",
      },
      {
        year: 2008,
        description:
          "Commissions Boxtech automated side + lock-bottom folder gluer (500mm) and AutoPrint Aqua/UV coater (22\"x32\"), doubling carton finishing speeds.",
      },
    ],
    cardExcerpt:
      "Revolutionized prepress with Protek CTP laser plate-making and automated finishing lines with Boxtech lock-bottom gluers and AutoPrint Aqua/UV coater technology.",
    fullStory:
      "The new millennium ushered in the digital-direct era. By commissioning the Protek 22\"x32\" CTP system in 2004, Shree Harihar eradicated photographic film variables, achieving 2400 DPI laser imaging directly onto thermal aluminum plates. To match this prepress speed, the finishing floor was equipped with the Boxtech automated folder-gluer and AutoPrint UV coater, allowing complex crash-lock boxes to be folded and glued at up to 30,000 cartons per hour.",
    machinery: [
      "Protek Plate Making CTP System (22\" x 32\")",
      "Boxtech Auto Side + Lock Bottom Folder Gluer (500mm)",
      "AutoPrint Aqua / UV Coater Machine (22\" x 32\")",
    ],
    achievements: [
      "100% chemical film-free CTP workflow",
      "Automated high-speed crash-lock carton gluing",
      "Substantial reduction in client turnaround schedules",
    ],
  },
  {
    id: "2011-2020",
    image: "/images/img6.png",
    imageCaption: "Swiss Bobst Visionfold with Accubraille & Heidelberg 6-colour press (2018)",
    decadeRange: "Year 2011–2020",
    periodShort: "2011–2020",
    eraTitle: "5th Generation, Bobst Accubraille & 6-Colour Press",
    generation: "5th Generation",
    category: "high-tech",
    badgeText: "Global Compliance",
    milestones: [
      {
        year: 2014,
        description:
          "The 5th Generation takes the helm, restructuring as Shree Harihar Printing Works LLP and adding Heidelberg Four-Colour and Six-Colour + Coater presses.",
      },
      {
        year: 2018,
        description:
          "Installs premier Swiss Bobst Visionfold with Accubraille (800mm), Maxima auto punching (28\"x40\"), and Heidelberg dripoff finishing lines.",
      },
    ],
    cardExcerpt:
      "The fifth generation assumed leadership, expanding into Shree Harihar Printing Works LLP with Heidelberg 6-colour presses, Bobst Accubraille folder-gluers, and Maxima auto die-cutters.",
    fullStory:
      "Marking almost a century of family dedication, the 5th generation brought advanced engineering and corporate governance, officially incorporating as Shree Harihar Printing Works LLP. A monumental capital expansion introduced the Heidelberg Six Colour + Coater offset press (23\"x29\"), capable of executing CMYK plus specialized brand pantones and inline protective coatings in a single pass. For pharmaceutical export compliance, the world-benchmark Bobst Visionfold with Accubraille was commissioned, providing tactile Braille dots directly onto pharma packaging.",
    machinery: [
      "Heidelberg Six Colour + Coater Offset Machine (23\" x 29\")",
      "Heidelberg Four Colour + Coater Offset Machine (20\" x 28\")",
      "Bobst Visionfold with Accubraille Folder Gluer (800mm)",
      "Maxima Fully Automatic Punching Machines (24\"x34\" & 28\"x40\")",
      "Maxima Blanking Machine (28\" x 40\")",
      "Dripoff Machine (Heidelberg + AutoPrint, 20\" x 29\")",
    ],
    achievements: [
      "Fifth-generation leadership milestone & LLP corporate conversion",
      "Accubraille European pharmacopeia export compliance",
      "Inline 6-colour single-pass printing and dripoff texturing",
    ],
  },
  {
    id: "2021-Today",
    image: "/images/img9.png",
    imageCaption: "AutoPrint 100% optical vision carton inspection & centenary milestone (2021–Today)",
    decadeRange: "Year 2021–Today",
    periodShort: "2021–Today",
    eraTitle: "The Centenary & Future-Ready Precision",
    generation: "5th Generation",
    category: "high-tech",
    badgeText: "Centenary & Beyond",
    milestones: [
      {
        year: 2021,
        description:
          "Shree Harihar celebrates 100 Centenary Years of continuous printing mastery, trusted by iconic national FMCG and healthcare leaders.",
      },
      {
        year: "Today",
        description:
          "Deploys AutoPrint 250mm carton inspection systems, sustainable vegetable-based inks, and automated end-to-end carton converting.",
      },
    ],
    cardExcerpt:
      "Celebrating over 100 years of unbroken family leadership, Shree Harihar deploys 100% carton inspection vision systems and sustainable, future-ready packaging innovation.",
    fullStory:
      "Having surpassed our 100-year centenary in 2021, Shree Harihar Printing Works LLP stands today as one of India's few 5th-generation family-owned packaging institutions. Today, our 100% offline AutoPrint carton inspection system scans every individual carton at microscopic resolution to catch defective print or foiling before it reaches packing lines. Combining sustainable boards, low-VOC inks, and automated robotics, we look forward to the next century of packaging excellence.",
    machinery: [
      "AutoPrint Carton Inspection Machine (250mm High-Speed Vision)",
      "Protek CTP Plate System (22\" x 32\")",
      "Complete Heidelberg Offset Battery (2-Colour, 4-Colour, 6-Colour)",
      "Bobst Visionfold & Maxima Automatic Converting Lines",
    ],
    achievements: [
      "100+ Centenary Years of unbroken printing heritage (1921–Present)",
      "Automated optical vision carton quality verification",
      "Pioneering sustainable, recyclable, and bio-degradable carton formats",
    ],
  },
];
