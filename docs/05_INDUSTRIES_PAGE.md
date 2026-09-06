# Page Documentation: Industries Served (`/industry`)

> **Page Route:** `/industry`  
> **Source Component:** `app/industry/page.tsx` & `app/industry/IndustryClientPage.tsx`  
> **Container:** `<div className="flex-1 w-full bg-slate-50 relative selection:bg-primary selection:text-white font-sans text-slate-800">`  

---

## 1. Executive Summary & Page Architecture

The Industries Page is tailored to corporate procurement decision-makers across four distinct sectors:
1. **Pharmaceuticals & Healthcare** (Zero-defect compliance, micro-text legibility, Bobst Accubraille embossing)
2. **FMCG & Personal Care** (Shelf appeal, high-speed retail production, barrier coatings, multi-SKU variants)
3. **Food, Beverage & Instant-Mix Packaging** (Food-safe low-migration inks and boards, appetite-driving color fidelity)
4. **Nutraceuticals & Dietary Supplements** (Prestige presentation, tamper deterrence, batch traceability)

### Page Flow (Eliminating Alternating Row Fatigue)
1. **Header Navigation** (Global component)
2. **Industry Hero Section** (*Packaging Built Around What Your Industry Actually Needs*)
3. **Industry Verticals Catalog — Sticky Side-Nav + Scrolling Content Cards**
   - **Left Sticky Sidebar (30% width):** Interactive Scrollspy directory menu (`sticky top-32`) with active state tracking + unified facility callout.
   - **Right Column (70% width):** 4 large full-width architectural sector cards:
     - 01. Pharmaceutical Packaging (`#pharmaceutical-packaging`)
     - 02. FMCG & Personal Care Packaging (`#fmcg-packaging`)
     - 03. Food, Beverage & Instant-Mix Packaging (`#food-packaging`)
     - 04. Nutraceutical & Supplement Packaging (`#nutra-packaging`)
4. **Catch-All Sector Banner** (*Don’t See Your Industry Listed?*)
5. **Direct RFQ Call-To-Action** (Contact Section with multi-industry spec dropdowns)
6. **Footer** (Global component)

---

## 2. Detailed Section-by-Section Content & Visual Specifications

---

### Section 1: Industry Hero (`IndustryHeroSection.tsx`)

#### Purpose
Acknowledge the unique requirements of different industries and define the company's dual expertise in compliance and shelf appeal.

#### Visual Background
- **Image URL:** `https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=1600`
- **Detailed Visual Description:**
  - A massive, high-contrast array of diverse finished packaging—a glossy cosmetic box sitting next to a clinical pharma vial carton and a vibrant food box. Shot top-down on a clean, industrial slate surface.
  - Communicates versatility, manufacturing precision, and multi-industry mastery at first glance.
  - Rendered with 35% opacity, rich full color (`filter saturate-105`), and dark cinematic vignette overlay (`bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-900/50`).
- **Alt Text:** *"Diverse assortment of pharmaceutical, cosmetic, and food packaging cartons on display"*

#### Hero Content
- **Main Heading:**
  - `Packaging Built Around What ` <br className="hidden lg:block" />
  - `<span className="font-bold text-primary mt-2">Your Industry Actually Needs.</span>`
  - *Typography:* `font-heading font-light text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl leading-tight mb-8 text-white`
- **Body Subtitle:**
  - *"A pharma carton and an FMCG carton might come off the same press, but they don't share the same demands. One needs precision and compliance; the other needs shelf appeal and speed. We've spent a century learning the difference and building the in-house capability to deliver both consistently."*
  - *Typography:* `font-sans text-base sm:text-lg lg:text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed`

#### Animations
- Framer Motion vertical slide-up `initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}`. Subtitle delayed by 100ms.

---

### Section 2: Industry Verticals Catalog (`IndustryListSection.tsx`)

#### Layout Architecture: Sticky Side-Nav (Scrollspy) + Architectural Sector Cards
To eliminate "alternating row fatigue" (since the Services page already uses alternating rows), the Industries page uses a classic enterprise B2B split layout (`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12`):

#### Left Column (30% width / `lg:col-span-4`): Sticky Sidebar Directory
- **Container:** `lg:sticky lg:top-32 self-start space-y-6`
- **Header:** `<Sparkles />` + `Industry Directory` eyebrow, heading `Sectors We ` `<span className="font-bold text-primary">Serve</span>`.
- **Navigation Buttons:**
  - 4 interactive buttons with sector number (`01` through `04`), industry category, and icon.
  - **Active State (Scrollspy):** `bg-primary/5 border-primary/40 text-primary shadow-xs` with filled icon container.
  - **Inactive State:** `bg-slate-50/70 border-slate-200/70 text-slate-600 hover:bg-slate-100 hover:text-slate-900`.
  - **Interaction:** Clicking any sector triggers butter-smooth auto-scroll to that card (`scrollIntoView({ behavior: 'smooth' })`).
- **In-House Facility Callout:**
  - Sleek dark card (`bg-slate-900 text-white rounded-3xl p-6 border border-slate-800 shadow-sm hidden lg:block`).
  - Monospace eyebrow: `IN-HOUSE CAPABILITY`
  - Title: `Unified Manufacturing Campus`
  - Narrative: *"Every sector benefits from direct single-roof accountability: prepress laser CTP, multicolor offset printing, Bobst folding, and QA inspection in Ahmedabad."*
  - Badge: `EST. 1921 ● Operational 24/7`

---

#### Right Column (70% width / `lg:col-span-8`): Scrolling Architectural Cards

#### Sector 1: Pharmaceutical Packaging (`#pharmaceutical-packaging`)
- **Card Container:** `bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-10 scroll-mt-32 hover:border-slate-300 hover:shadow-md transition-all`
- **Monospace Tag:** `SECTOR 01 // ZERO-DEFECT COMPLIANCE`
- **Counter:** `01 of 04`
- **Heading:** `Pharmaceutical ` `<span className="font-bold text-primary">Packaging</span>`
- **Full-Color Photography:**
  - **Image URL:** `https://images.unsplash.com/photo-1584308666744-24d5e4a5bf4d?auto=format&fit=crop&q=80&w=1200`
  - **Alt Text:** *"Pharmaceutical folding boxboard cartons with cleanroom medicine packaging"*
  - **Style:** `h-[280px] sm:h-[380px] w-full rounded-2xl overflow-hidden shadow-md my-6 filter saturate-105 group-hover:scale-105 transition-transform duration-700`
- **Narrative Copy (Strict Bobst Accubraille isolation):**
  - *"Pharma packaging leaves no room for error. A misaligned fold, an unreadable batch code, or an inconsistent finish isn't just a quality issue; it's a compliance risk."*
  - *"We print cartons, vial packaging, and injection boxes with the precision this industry demands, and our Bobst Visionfold line's Accubraille capability means we can handle Braille-compliant folding where it's required. From syrups and creams to injectables and tablets, we understand that \"close enough\" isn't a standard pharma brands can work with."*
- **"What We Deliver" Delivery Matrix (`bg-slate-50 p-6 sm:p-8 rounded-2xl border-l-4 border-primary`):**
  - Section Title: `WHAT WE DELIVER FOR PHARMA & HEALTHCARE:`
  - Checklist Items (with `<CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />`):
    1. Precision carton printing with micro-dot registration
    2. Accurate batch/regulatory text & 2D Data Matrix reproduction
    3. Braille-capable high-speed folding & gluing (Accubraille)
    4. Vial and injection box packaging with tight dimensional tolerances
    5. Consistent, multi-stage inspection-checked output at commercial scale
- **Capabilities Tags:** `#Accubraille Ready`, `#2D Data Matrix`, `#Tight Tolerances`, `#Vial Outers`

---

#### Sector 2: FMCG & Personal Care Packaging (`#fmcg-packaging`)
- **Card Container:** `bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-10 scroll-mt-32`
- **Monospace Tag:** `SECTOR 02 // HIGH-SPEED SHELF IMPACT`
- **Counter:** `02 of 04`
- **Heading:** `FMCG & Personal Care ` `<span className="font-bold text-primary">Packaging</span>`
- **Full-Color Photography:**
  - **Image URL:** `https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=1200`
  - **Alt Text:** *"Luxury cosmetics and personal care retail cartons with premium varnish"*
- **Narrative Copy:**
  - *"In FMCG, packaging has about two seconds to earn attention on a shelf and it has to survive the journey from factory to retail without a scratch. We print cartons for soap, perfume, agarbatti, toothpaste, cosmetics, spices, and personal care products with the design-forward finish this category demands, backed by fast turnarounds so you can move at retail speed."*
- **"What We Deliver" Delivery Matrix:**
  - Section Title: `WHAT WE DELIVER FOR FMCG & PERSONAL CARE:`
  - Checklist Items:
    1. Eye-catching, design-ready cartons with vivid process color
    2. Multiple size variants and SKU families printed concurrently
    3. Hygienic packing standards for personal care & toiletries
    4. Quality paperboard sourcing (virgin SBS, FBB, and recycled duplex)
    5. Fast, dependable turnaround for rapid retail restocking
- **Capabilities Tags:** `#Drip-Off UV`, `#Hot Foil Stamping`, `#Multi-SKU Batches`, `#High-Rub Resistant`

---

#### Sector 3: Food, Beverage & Instant-Mix Packaging (`#food-packaging`)
- **Card Container:** `bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-10 scroll-mt-32`
- **Monospace Tag:** `SECTOR 03 // FOOD SAFETY & SHELF VIBRANCY`
- **Counter:** `03 of 04`
- **Heading:** `Food, Beverage & Instant-Mix ` `<span className="font-bold text-primary">Packaging</span>`
- **Full-Color Photography:**
  - **Image URL:** `https://images.unsplash.com/photo-1606859191214-25806e9e2463?auto=format&fit=crop&q=80&w=1200`
  - **Alt Text:** *"Vibrant food packaging cartons and regional instant food mix boxes"*
- **Narrative Copy:**
  - *"Whether it's an instant-mix snack carton or a beverage box, food packaging has to look appetizing and stay food-safe. We produce vibrant, accurate color reproduction for food brands who need their packaging to sell the product before it's even opened."*
- **"What We Deliver" Delivery Matrix:**
  - Section Title: `WHAT WE DELIVER FOR FOOD & BEVERAGE:`
  - Checklist Items:
    1. Vivid, appetite-driving print quality with high-density color fidelity
    2. Food-safe production standards using low-migration inks & boards
    3. Reliable bulk-order turnaround synchronized with harvest & seasonal peaks
- **Capabilities Tags:** `#Food-Grade Boards`, `#Low-Migration Inks`, `#Grease Resistant`, `#Aromatic Spices`

---

#### Sector 4: Nutraceutical & Supplement Packaging (`#nutra-packaging`)
- **Card Container:** `bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-10 scroll-mt-32`
- **Monospace Tag:** `SECTOR 04 // PRESTIGE & INTEGRITY`
- **Counter:** `04 of 04`
- **Heading:** `Nutraceutical & Supplement ` `<span className="font-bold text-primary">Packaging</span>`
- **Full-Color Photography:**
  - **Image URL:** `https://images.unsplash.com/photo-1626808642875-0aa545464198?auto=format&fit=crop&q=80&w=1200`
  - **Alt Text:** *"Modern nutraceutical and health supplement cartons and specialized product packaging"*
- **Narrative Copy:**
  - *"Supplement buyers judge trust by presentation. We produce sharp, clean labels and cartons for nutraceutical and supplement brands; the kind of finish that signals quality before a customer reads a single ingredient."*
- **"What We Deliver" Delivery Matrix:**
  - Section Title: `WHAT WE DELIVER FOR NUTRACEUTICALS:`
  - Checklist Items:
    1. Premium label finishing with metallic foil accents & matte soft-touch
    2. Accurate, ultra-legible dosage and ingredient panel typography
    3. Custom bottle wraps and folding cartons built for shelf distinction
- **Capabilities Tags:** `#Metallic Foiling`, `#Micro-Legibility`, `#Tamper Evident`, `#Soft-Touch Matte`

---

### Section 3: "Don't See Your Industry Listed?" Catch-All Banner (`IndustryCatchAllSection.tsx`)

#### Purpose
Critical B2B conversion tool that reassures non-listed industries (e.g., cosmetics, hardware, confectionery, specialty retail) of full manufacturing capability and drives direct RFQ conversions.

#### Layout & Styling
- **Container:** `bg-slate-900 text-white py-16 md:py-20 lg:py-24 2xl:py-32 relative overflow-hidden border-t border-slate-800`
- **Texture:** Subtle engineering drafting grid (`bg-[url('/grid-pattern.svg')] bg-repeat opacity-[0.04]`).
- **Eyebrow:** `<Layers />` + `Versatile Production Architecture` monospace badge.
- **Heading:** `Don’t See ` `<span className="font-bold text-primary">Your Industry Listed?</span>`
  - *Typography:* `font-heading font-light text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight mb-3`
- **Body Copy:**
  - *"If your product needs precise, reliable carton, label, or promotional printing, chances are we can help. Our production line is built for versatility."*
  - *Typography:* `font-sans text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl`
- **Action Button:**
  - `[ Talk to Our Team → ]`
  - *Style:* `inline-flex items-center gap-2.5 px-7 py-4 rounded-2xl bg-primary hover:bg-primary-hover text-white font-heading font-semibold text-base shadow-xl shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all`
  - *Interaction:* Smoothly scrolls the user directly to the `#rfq-section` / `#contact-section` form.

---

### Section 4: Direct RFQ Call-To-Action (`IndustryCTASection.tsx`)

#### Purpose
Embeds the centralized `ContactSection` to streamline technical inquiries, artwork uploads, and RFQ submissions directly from industry procurement teams. Includes specialized material selectors and instant inquiry routing.
