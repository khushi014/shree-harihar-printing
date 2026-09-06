# Page Documentation: Services & Production Capabilities (`/services`)

> **Page Route:** `/services`  
> **Source Component:** `app/services/page.tsx` & `app/services/ServicesClientPage.tsx`  
> **Container:** `<div className="flex-1 w-full bg-slate-50 relative selection:bg-primary selection:text-white font-sans text-slate-800">`  

---

## 1. Executive Summary & Page Architecture

The Services Page articulates the commercial print-packaging offerings of Shree Harihar Printing Works LLP. It clarifies the manufacturing specifications, technical advantages ("Why it holds up"), and real-world industrial applications for three primary divisions:
1. **Folding Cartons & Structural Packaging**
2. **Precision Sticker & Product Labels**
3. **High-Impact Promotional Print Materials**

It is supported by an end-to-end **6-Stage In-House Production Process** diagram and closes with a direct RFQ conversion module.

### Page Flow
1. **Header Navigation** (Global component)
2. **Services Hero Section** (What We Print - And How We Do It Right)
3. **Core Services Catalog (Alternating Full-Width Rows)**
   - 01. Carton Printing & Packaging
   - 02. Sticker & Label Printing
   - 03. Promotional Print Materials
4. **End-to-End Production Process (6 Sequential Stages)**
5. **Direct RFQ Call-To-Action** (Contact Section)
6. **Footer** (Global component)

---

## 2. Detailed Section-by-Section Content & Visual Specifications

---

### Section 1: Services Hero (`ServicesHeroSection.tsx`)

#### Purpose
Immediately establish that every service operates within a controlled, zero-defect in-house pipeline.

#### Visual Background
- **Image URL:** `https://images.unsplash.com/photo-1598425237654-4c053606fbf6?auto=format&fit=crop&q=80&w=1600`
- **Detailed Visual Description:**
  - Dynamic close-up of a multi-unit Heidelberg Speedmaster offset press in full production.
  - Cylinders rotating at high speeds with vibrant ink fountains and sheet delivery guides visible.
  - Rendered with 30% opacity and an upward dark gradient (`bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-900/40`) maintaining vibrant color and crisp typographic contrast.

#### Hero Content
- **Main Heading:**
  - `What We Print - ` <br className="hidden lg:block" />
  - `<span className="font-bold text-primary">And How We Do It Right.</span>`
  - *Typography:* `font-heading font-light text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl leading-tight mb-8`
- **Body Subtitle:**
  - *"Every service we offer runs through the same in-house pipeline: prepress, printing, coating, punching, and finishing; all under our control, all checked before it ships."*
  - *Typography:* `font-sans text-base sm:text-lg lg:text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed`

#### Animations
- Framer Motion slide-up `initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}`. Subtitle delayed by 100ms.

---

### Section 2: Core Services Catalog (`ServicesListSection.tsx`)

#### Layout Pattern
Alternating visual and text columns across alternating background bands (`bg-white` and `bg-slate-50`). To guarantee optimal mobile responsiveness, the DOM order maintains the Image component first inside a `flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}` container—ensuring the image always stacks on top of the text on mobile devices (`sm` and `md`), while desktop screens enjoy alternating left/right visual balance.

---

#### Service 1: Carton Printing & Packaging

##### Visual Column
- **Image URL:** `https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=1000`
- **Detailed Visual Description:**
  - Array of custom printed folding boxboard cartons for pharmaceutical and FMCG brands.
  - Features precise crease scores, lock-bottom closures, crisp multi-color typography, and gloss UV spot varnish textures.
  - Soft ambient lighting showcasing structural rigidity and immaculate edge cutting.
- **Hover Effect:** Image scales smoothly to `group-hover:scale-105` over 700ms; subtle dark overlay transitions to transparent.

##### Text Column
- **Section Heading:**
  - `Carton Printing & ` `<span className="font-bold text-primary">Packaging</span>`
- **Body Description:**
  - *"From small retail cartons to large bulk packaging runs, our carton printing service is built on advanced multi-color offset printing, precision blanking, and automated inspection so every single batch matches the last."*
- **"Ideal For" Highlight Box (`bg-primary/5 border border-primary/20`):**
  - **Ideal for:** `Pharmaceutical cartons` • `FMCG & personal care boxes` • `Food & beverage packaging` • `Bulk retail cartons`
- **"Why it holds up" Value Matrix:**
  - Section Title: `WHY IT HOLDS UP:` (`font-heading text-sm font-bold uppercase tracking-widest text-slate-900 mb-4`)
  - Checklist (with `<CheckCircle2 className="w-5 h-5 text-emerald-600" />`):
    1. Consistent colour matching across large runs
    2. Automatic carton inspection for defect-free output
    3. Multiple size and finish options
    4. Aqua/UV coating and drip-off finishing available
- **CTA Button Link:**
  - `REQUEST A CARTON PRINTING QUOTE →` (`font-heading text-sm font-bold uppercase tracking-widest text-slate-900 border-b-2 border-slate-900 hover:text-primary hover:border-primary pb-1`)
  - Link Target: `/contact`

---

#### Service 2: Sticker & Label Printing

##### Visual Column
- **Image URL:** `https://images.unsplash.com/photo-1548345680-f5475ea90f5c?auto=format&fit=crop&q=80&w=1000`
- **Detailed Visual Description:**
  - Rolls and die-cut sheets of pressure-sensitive bottle and product labels.
  - Highlights micro-registered typography, tamper-evident safety perforations, vibrant process colors, and waterproof protective varnishes.
  - Professional studio close-up on clean, high-grade release liners.

##### Text Column
- **Section Heading:**
  - `Sticker & Label ` `<span className="font-bold text-primary">Printing</span>`
- **Body Description:**
  - *"Small in size, big in impact. Whether it's a product label, a bottle sticker, or a compliance label for a pharma vial, we produce label runs with the same quality discipline we apply to full carton orders in the quantity you need, within the timeframe you were promised."*
- **"Ideal For" Highlight Box (`bg-primary/5 border border-primary/20`):**
  - **Ideal for:** `Bottle & product labels` • `Pharma vial and packaging labels` • `Supplement and nutraceutical labels` • `Promotional stickers`
- **"Why it holds up" Value Matrix:**
  - Section Title: `WHY IT HOLDS UP:`
  - Checklist (with `<CheckCircle2 className="w-5 h-5 text-emerald-600" />`):
    1. Prerequisite-grade quality for regulated industries
    2. Fast turnaround on smaller runs
    3. Precision cutting and finishing
- **CTA Button Link:**
  - `REQUEST A LABEL PRINTING QUOTE →`
  - Link Target: `/contact`

---

#### Service 3: Promotional Print Materials

##### Visual Column
- **Image URL:** `https://images.unsplash.com/photo-1562564055-71e051d33c19?auto=format&fit=crop&q=80&w=1000`
- **Detailed Visual Description:**
  - High-end corporate marketing collateral laid out on a design studio conference table.
  - Multi-page saddle-stitched product brochures, tri-fold brochures, table-top standees, and desktop calendars with vibrant imagery and clean page layouts.
  - Natural daytime lighting emphasizing crisp page folds and paper stock textures.

##### Text Column
- **Section Heading:**
  - `Promotional Print ` `<span className="font-bold text-primary">Materials</span>`
- **Body Description:**
  - *"Every brand needs a way to create noise in its market. We produce catalogues, standees, brochures, posters, danglers, and calendars with the same creative attention and production discipline as our packaging work, helping our clients show up sharp wherever they need to be seen."*
- **"Ideal For" Highlight Box (`bg-primary/5 border border-primary/20`):**
  - **Ideal for:** `Retail brochures & catalogues` • `In-store standees & danglers` • `Posters & seasonal calendars`
- **"Why it holds up" Value Matrix:**
  - Section Title: `WHY IT HOLDS UP:`
  - Checklist (with `<CheckCircle2 className="w-5 h-5 text-emerald-600" />`):
    1. Creative, out-of-the-box execution
    2. Consistent print quality across formats
    3. Fast production for time-sensitive campaigns
- **CTA Button Link:**
  - `REQUEST A PROMOTIONAL PRINTING QUOTE →`
  - Link Target: `/contact`

---

### Section 3: End-to-End Production Process (`ServicesProcessSection.tsx`)

#### Purpose
Demystify manufacturing complexity by laying out the exact six-stage in-house pipeline that guarantees quality.

#### Theme & Layout
- **Container:** `bg-slate-950 text-white py-16 md:py-20 lg:py-24 2xl:py-32 relative border-t border-slate-800`
- **Heading:** `Our Production Process - ` `<span className="font-bold text-primary">Start to Finish</span>`

#### 6 Sequential Process Steps
Grid of 6 interactive cards (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12`):

1. **Step 01 — Prepress**
   - **Step Number:** `01` (Large slate-800 numeral in top-right corner)
   - **Stage Name:** `Prepress`
   - **Benefit-Driven Description:** *"Flawless plate-making and structural setup ensuring every color registers perfectly before a single sheet is printed."*
2. **Step 02 — Printing**
   - **Step Number:** `02`
   - **Stage Name:** `Printing`
   - **Benefit-Driven Description:** *"High-speed, multi-color offset production delivering sharp, consistent hues across short runs and bulk orders alike."*
3. **Step 03 — Coating & Finishing**
   - **Step Number:** `03`
   - **Stage Name:** `Coating & Finishing`
   - **Benefit-Driven Description:** *"Inline UV, Aqua coating, and drip-off texturing applied for scuff-resistance, durability, and premium retail shine."*
4. **Step 04 — Punching & Stripping**
   - **Step Number:** `04`
   - **Stage Name:** `Punching & Stripping`
   - **Benefit-Driven Description:** *"Precision die-cutting and automated blanking that guarantees perfect edges and exact structural dimensions."*
5. **Step 05 — Folding & Gluing**
   - **Step Number:** `05`
   - **Stage Name:** `Folding & Gluing`
   - **Benefit-Driven Description:** *"High-speed automated lock-bottom folding, fully capable of integrating compliance-ready Braille embossing for pharma."*
6. **Step 06 — Inspection**
   - **Step Number:** `06`
   - **Stage Name:** `Inspection`
   - **Benefit-Driven Description:** *"Strict optical vision sorting that catches microscopic deviations before your packaging ever leaves our floor."*

#### Closing Assurance Banner
- Centered callout quote with thick red left accent border:
  - `<p className="font-sans text-lg lg:text-xl text-slate-300 font-light border-l-4 border-primary pl-6 text-left inline-block">`
  - *"Because every stage happens in-house, we catch issues before they become your problem."*

#### Animation & Mechanics
- Each card enters on scroll with staggered delays `initial={{ opacity: 0, y: 30 }} transition={{ delay: idx * 0.1 }}`.
- Hover effect: Card translates `-translate-y-2`, border shifts from `border-slate-800` to `border-primary/50`, and numeral highlights from `text-slate-800` to `text-slate-700`.

---

### Section 4: Services CTA Section (`ServicesCTASection.tsx`)
Mounts the unified `ContactSection` to convert prospects who have reviewed the service specifications.
