export interface ClientItem {
  id: string;
  name: string;
  category: "Pharmaceuticals" | "FMCG & Food" | "Cosmetics & Surgical" | "Industrial & Consumer";
  tag: string;
  logo?: string;
  location?: string;
  partnershipYears?: string;
}

export const CLIENTS_DATA: ClientItem[] = [
  // ── Pharmaceuticals & Lifesciences ──
  {
    id: "cadila",
    name: "Cadila Pharmaceuticals Limited",
    category: "Pharmaceuticals",
    tag: "Mono Cartons, Foil & Inserts",
    location: "Ahmedabad",
    partnershipYears: "Long-term Partner",
    logo: "/clients/cadila-pharma.png"
  },
  {
    id: "intas",
    name: "Intas Pharmaceuticals",
    category: "Pharmaceuticals",
    tag: "Export Compliance Packaging",
    location: "Ahmedabad",
    partnershipYears: "15+ Years",
    logo: "/clients/intas-pharma.png"
  },
  {
    id: "baxter",
    name: "Baxter Pharmaceuticals India Private Limited",
    category: "Pharmaceuticals",
    tag: "Sterile & Parenteral Unit Cartons",
    location: "Ahmedabad",
    partnershipYears: "Global Partner",
    logo: "/clients/baxter.svg"
  },
  {
    id: "eris",
    name: "Eris Lifesciences",
    category: "Pharmaceuticals",
    tag: "Cardiology & Diabetology Cartons",
    location: "Ahmedabad",
    partnershipYears: "10+ Years",
    logo: "/clients/eris.png"
  },
  {
    id: "lincoln",
    name: "Lincoln Pharmaceuticals",
    category: "Pharmaceuticals",
    tag: "Formulation Secondary Packaging",
    location: "Ahmedabad",
    partnershipYears: "12+ Years",
    logo: "/clients/lincoln.png"
  },
  {
    id: "unison",
    name: "Unison Pharmaceuticals",
    category: "Pharmaceuticals",
    tag: "Prescription Formulation Boxes",
    location: "Ahmedabad",
    partnershipYears: "14+ Years",
    logo: "/clients/unison-pharma.png"
  },
  {
    id: "otsuka",
    name: "Otsuka Pharmaceuticals Limited",
    category: "Pharmaceuticals",
    tag: "IV Fluid Outer Packs & Cartons",
    location: "Ahmedabad",
    partnershipYears: "Multinational Partner",
    logo: "/clients/otsuka-pharma.png"
  },
  {
    id: "aculife",
    name: "Aculife",
    category: "Pharmaceuticals",
    tag: "Infusion & Critical Care Packs",
    location: "Ahmedabad",
    partnershipYears: "Strategic Client",
    logo: "/clients/aculife.png"
  },
  {
    id: "amanta",
    name: "Amanta Healthcare",
    category: "Pharmaceuticals",
    tag: "Blow-Fill-Seal Packaging Sleeves",
    location: "Kheda / Ahmedabad",
    partnershipYears: "8+ Years",
    logo: "/clients/amanta.png"
  },
  {
    id: "swiss-parenterals",
    name: "Swiss Parenterals",
    category: "Pharmaceuticals",
    tag: "Injectable & Lyophilized Boxes",
    location: "Ahmedabad",
    partnershipYears: "10+ Years",
    logo: "/clients/swiss-parenterals.png"
  },
  {
    id: "sakar",
    name: "Sakar Healthcare",
    category: "Pharmaceuticals",
    tag: "Liquid Injectable Cartons",
    location: "Ahmedabad",
    partnershipYears: "9+ Years",
    logo: "/clients/sarkar-healthcare.png"
  },
  {
    id: "halewood",
    name: "Halewood Laboratories Pvt Ltd",
    category: "Pharmaceuticals",
    tag: "Nutraceutical & Sachet Cartons",
    location: "Ahmedabad",
    partnershipYears: "12+ Years",
    logo: "/clients/halewood-labs.png"
  },
  {
    id: "abaris",
    name: "Abaris Healthcare",
    category: "Pharmaceuticals",
    tag: "Large Volume Parenterals",
    location: "Ahmedabad",
    partnershipYears: "8+ Years",
    logo: "/clients/abaris-healthcare.png"
  },
  {
    id: "aneta",
    name: "Aneta Pharmaceuticals Pvt Limited",
    category: "Pharmaceuticals",
    tag: "Specialty Formulations Packaging",
    location: "Gujarat",
    partnershipYears: "Trusted Client",
    logo: "/clients/aneta-pharma.png"
  },
  {
    id: "claroid",
    name: "Claroid Pharmaceuticals",
    category: "Pharmaceuticals",
    tag: "Tablet & Capsule Cartons",
    location: "Ahmedabad",
    partnershipYears: "7+ Years",
    logo: "/clients/claroid.png"
  },
  {
    id: "renown",
    name: "Renown Pharmaceuticals Pvt Limited",
    category: "Pharmaceuticals",
    tag: "Soft Gelatin Outer Packaging",
    location: "Vadodara",
    partnershipYears: "9+ Years",
    logo: "/clients/renown-pharma.png"
  },
  {
    id: "saga",
    name: "Saga Lifesciences Limited",
    category: "Pharmaceuticals",
    tag: "Export Formulation Cartons",
    location: "Ahmedabad",
    partnershipYears: "11+ Years",
    logo: "/clients/saga-lifesciences.png"
  },
  {
    id: "safal",
    name: "Safal Lifescience",
    category: "Pharmaceuticals",
    tag: "API & Finished Product Packs",
    location: "Gujarat",
    partnershipYears: "6+ Years",
    logo: "/clients/safal-lifesciences.png"
  },

  // ── FMCG, Food & Confectionery ──
  {
    id: "vadilal",
    name: "Vadilal",
    category: "FMCG & Food",
    tag: "Ice Cream Sleeves & Deep-Freeze Cartons",
    location: "Ahmedabad",
    partnershipYears: "20+ Years",
    logo: "/clients/vadilal.png"
  },
  {
    id: "havmor",
    name: "Havmor",
    category: "FMCG & Food",
    tag: "Cone Sleeves & Moisture-Barrier Packs",
    location: "Ahmedabad",
    partnershipYears: "18+ Years",
    logo: "/clients/havmor.png"
  },
  {
    id: "sheetal",
    name: "Sheetal Ice Cream",
    category: "FMCG & Food",
    tag: "Frozen Dessert & Confectionery Boxes",
    location: "Amreli / Rajkot",
    partnershipYears: "10+ Years",
    logo: "/clients/sheetal-ice-cream.png"
  },
  {
    id: "monginis",
    name: "Monginis",
    category: "FMCG & Food",
    tag: "Pastry, Cake & Bakery Boxes",
    location: "Mumbai / Pan-India",
    partnershipYears: "15+ Years",
    logo: "/clients/monginis.png"
  },
  {
    id: "dimond-masala",
    name: "Dimond Masala",
    category: "FMCG & Food",
    tag: "Food Grade Spice Cartons",
    location: "Gujarat",
    partnershipYears: "12+ Years",
    logo: "/clients/diamond-masala.png"
  },
  {
    id: "gajanand",
    name: "Gajanand Agarbatti",
    category: "FMCG & Food",
    tag: "Embossed Fragrance Incense Boxes",
    location: "Ahmedabad",
    partnershipYears: "14+ Years",
    logo: "/clients/gajanan-agarbatti.png"
  },
  {
    id: "aasha",
    name: "Aasha Agarbatti",
    category: "FMCG & Food",
    tag: "Dhoop & Premium Incense Packs",
    location: "Gujarat",
    partnershipYears: "8+ Years",
    logo: ""
  },
  {
    id: "blur-vista",
    name: "Blur Vista Beverage",
    category: "FMCG & Food",
    tag: "Beverage Multipack Sleeves",
    location: "Gujarat",
    partnershipYears: "Modern Client",
    logo: "/clients/blue-vista.png"
  },
  {
    id: "cafe-de-food",
    name: "Café De Food Couture",
    category: "FMCG & Food",
    tag: "Gourmet Takeaway & Rigid Packaging",
    location: "Ahmedabad",
    partnershipYears: "Boutique Partner",
    logo: "/clients/cafe-de-food.png"
  },

  // ── Cosmetics, Healthcare & Surgical ──
  {
    id: "renee",
    name: "Renee Cosmetics",
    category: "Cosmetics & Surgical",
    tag: "Luxury D2C Cosmetic Outer Boxes",
    location: "Ahmedabad",
    partnershipYears: "Premium Brand",
    logo: "/clients/renee.png"
  },
  {
    id: "iscon",
    name: "Iscon Surgicals Limited",
    category: "Cosmetics & Surgical",
    tag: "Medical Grade Sterile Cartons",
    location: "Jodhpur / Ahmedabad",
    partnershipYears: "10+ Years",
    logo: "/clients/iscon-surgicals.png"
  },
  {
    id: "bueno-salud",
    name: "Bueno Salud Care",
    category: "Cosmetics & Surgical",
    tag: "Wellness & Health Product Boxes",
    location: "Gujarat",
    partnershipYears: "Growing Partner",
    logo: "/clients/bueno-salud-care.png"
  },

  // ── Industrial & Consumer Goods ──
  {
    id: "hippolin",
    name: "Hippolin",
    category: "Industrial & Consumer",
    tag: "Detergent & Home Care Cartons",
    location: "Ahmedabad",
    partnershipYears: "16+ Years",
    logo: "/clients/hipolin.png"
  },
  {
    id: "jasvant-soap",
    name: "Jasvant Soap Industries",
    category: "Industrial & Consumer",
    tag: "Soap Wrappers & Outer Corrugated",
    location: "Gujarat",
    partnershipYears: "15+ Years",
    logo: "/clients/jasvant-soap.png"
  },
  {
    id: "skylark",
    name: "Skylark CMC",
    category: "Industrial & Consumer",
    tag: "Industrial Chemical Packaging",
    location: "Gujarat",
    partnershipYears: "Industrial Partner",
    logo: "/clients/skylark-cmc.png"
  },
  {
    id: "ramp",
    name: "Ramp Technomation",
    category: "Industrial & Consumer",
    tag: "Automation Components Box Packaging",
    location: "Ahmedabad",
    partnershipYears: "Technical Partner",
    logo: "/clients/ramp.png"
  },
  {
    id: "hue-marcom",
    name: "Hue Marcom",
    category: "Industrial & Consumer",
    tag: "Commercial Print & Promotional Kits",
    location: "Ahmedabad",
    partnershipYears: "Creative Partner",
    logo: "/clients/hue-marcom.png"
  }
];

export const CLIENT_CATEGORIES = [
  "All",
  "Pharmaceuticals",
  "FMCG & Food",
  "Cosmetics & Surgical",
  "Industrial & Consumer"
] as const;
