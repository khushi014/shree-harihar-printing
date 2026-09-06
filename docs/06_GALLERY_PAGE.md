# Page Documentation: Gallery & Machinery Infrastructure (`/gallery`)

> **Page Route:** `/gallery`  
> **Source Component:** `app/gallery/page.tsx` & `app/gallery/GalleryClientPage.tsx`  
> **Container:** `<div className="flex-1 w-full bg-slate-50 relative selection:bg-primary selection:text-white font-sans text-slate-800">`  

---

## 1. Executive Summary & Page Architecture

The Gallery Page serves as the visual portfolio and technical verification center of Shree Harihar Printing Works LLP. It presents real packaging specimens and factory infrastructure photos to demonstrate that the company is a true self-sufficient manufacturer rather than an agency or broker.

### Page Flow (Pure Visual Image-Only Architecture)
1. **Header Navigation** (Global component)
2. **Gallery Hero Section** (*See the Work - Not Just the Promise*)
3. **Sticky Category Filter Bar** (`sticky top-16 sm:top-20 z-30` — All, Pharma, FMCG, Labels, Promotional, Factory)
4. **Pure Image Masonry Grid** (Pinterest-style cards with subtle hover overlays)
5. **Simplified Full-Screen Lightbox Modal** (Cinematic image-only popup on `bg-black/95` with minimalist caption pill)
6. **Direct RFQ Call-To-Action** (Contact Section)
7. **Footer** (Global component)

---

## 2. Detailed Section-by-Section Content & Visual Specifications

---

### Section 1: Gallery Hero (`GalleryHeroSection.tsx`)

#### Purpose
Set clear expectations: practical verification of executed packaging rather than generic stock imagery.

#### Visual Background
- **Image URL:** `https://images.unsplash.com/photo-1616423640778-28d1b53229bd?auto=format&fit=crop&q=80&w=1600`
- **Detailed Visual Description:**
  - High-angle wide view of an active press hall.
  - Paperboard sheets transferring at high speed between Heidelberg printing towers.
  - 30% opacity, rich full color, and upward black gradient overlay.
- **Alt Text:** *"Offset printing press in action"*

#### Hero Content
- **Main Heading:**
  - `See the Work - ` <br className="hidden sm:block" />
  - `<span className="font-bold text-primary">Not Just the Promise.</span>`
  - *Typography:* `font-heading font-light text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl leading-tight mb-8`
- **Body Subtitle:**
  - *"Numbers and machine names only tell part of the story. Here's a look at the packaging, labels, and promotional materials we've actually produced for brands across pharma, FMCG, food, and personal care."*
  - *Typography:* `font-sans text-base sm:text-lg lg:text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed`

#### Animations
- Framer Motion slide-up `initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}`. Subtitle delayed by 100ms.

---

### Section 2: Pure Visual Work Gallery (`GalleryGridSection.tsx`)

#### Sticky Category Filter Bar
Stays anchored at the top of the viewport (`sticky top-16 sm:top-20 z-30 bg-white/95 backdrop-blur-md py-4 sm:py-5 border-b border-slate-200/80 shadow-xs`) to allow effortless filtering across large image volumes:
- `All`
- `Pharma`
- `FMCG`
- `Labels`
- `Promotional`
- `Factory`

##### Filter Button Mechanics:
- Active pill: `bg-slate-900 text-white shadow-sm rounded-full`.
- Inactive pill: `bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900 rounded-full`.
- Right indicator: Dynamic live count of visible specimens (`{count} Specimens`).

#### Pure Image Masonry Grid Specifications
- **Grid Container:** `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8`
- **Card Default State:**
  - Pure, uncluttered visual cards with `aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm border border-slate-200/80 bg-slate-100 relative cursor-pointer group`.
  - Rich full-color photography with `filter saturate-105 group-hover:scale-105 transition-transform duration-700`.
  - Lazy loading enabled (`loading="lazy"`).
- **Card Hover State:**
  - Subtle dark gradient overlay (`bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`).
  - **Top:** Category pill (e.g. `PHARMA`) and zoom indicator icon (`<Maximize2 />`).
  - **Bottom:** Verified brand/client name in green (`● Abbott Healthcare & Suiphar`) and clean specimen title.
  - Zero heavy body copy or cluttered data tables on the cards.

#### Portfolio Catalog Reference

```markdown
| ID | Category | Title | Brand Highlight | Alt Text & Visual Description |
|:---|:---|:---|:---|:---|
| 01 | **Pharma** | Vial Cartons & Injection Boxes | Abbott Healthcare & Suiphar | *Alt:* "Pharma carton printing – injection box by Shree Harihar Printing Works"<br/>*Visual:* Sterile medical injection outer cartons with clean die-cut windows and sharp 2D Data Matrix code printing. |
| 02 | **Pharma** | Syrup & Oral Suspension Cartons | HAEMUP Liquid & GACET lines | *Alt:* "Pharma carton printing – syrup packaging by Shree Harihar Printing Works"<br/>*Visual:* Multi-pack syrup cartons with tamper-evident tuck closures and tactile Braille embossing. |
| 03 | **FMCG** | Cosmetics & Luxury Personal Care | Drip-Off UV & Gold Hot Foil | *Alt:* "FMCG carton packaging – cosmetics by Shree Harihar Printing Works"<br/>*Visual:* Luxury cosmetic and perfume boxes with metallic foil accents, satin soft-touch lamination, and drip-off gloss textures. |
| 04 | **FMCG** | Instant-Mix Food & Snack Cartons | Honest Foods & Frylo Poochkas | *Alt:* "FMCG carton packaging – instant-mix food by Shree Harihar Printing Works"<br/>*Visual:* Indian instant snack mix cartons with high-density food photography. |
| 05 | **Labels** | Bottle & Product Container Labels | Amul Kool Beverage Lines | *Alt:* "Sticker label printing – bottle label by Shree Harihar Printing Works"<br/>*Visual:* Industrial adhesive bottle labels on roll-form stock with UV protective coating. |
| 06 | **Labels** | Supplement & Nutraceutical Labels | Gold Standard Whey & Nutrition | *Alt:* "Sticker label printing – supplement label by Shree Harihar Printing Works"<br/>*Visual:* Metallic foil labels for protein tubs and health supplements with micro-printed nutritional fact tables. |
| 07 | **Promotional** | Brand Brochures & Literature | Healthcare Corporate Literature | *Alt:* "Promotional print material – brochure by Shree Harihar Printing Works"<br/>*Visual:* Saddle-stitched full-color brand catalogues with high-density pigment coverage and crisp geometric alignments. |
| 08 | **Promotional** | Retail Standees & Hanging Danglers | Amul Retail POP Formats | *Alt:* "Promotional print material – poster by Shree Harihar Printing Works"<br/>*Visual:* Large-format promotional wall calendars and retail ceiling danglers with die-cut custom contours. |
| 09 | **Factory** | Heidelberg Multicolor Press Hall | Ahmedabad Press Battery | *Alt:* "Shree Harihar Printing Works production facility-Heidelberg press"<br/>*Visual:* Pristine printing bay at the Ahmedabad plant showing German Heidelberg offset press lines operating under calibrated overhead illumination. |
| 10 | **Factory** | Automated Optical Inspection Line | AutoPrint 250mm High-Speed Scan | *Alt:* "Shree Harihar Printing Works production facility-carton inspection"<br/>*Visual:* AutoPrint 250mm high-speed optical vision inspection line scanning converted cartons for micro-defects at conveyor speed. |
```

#### Simplified Full-Screen Lightbox Modal
- **Overlay:** `fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8`.
- **Pure Image Centering:** High-resolution image (`max-h-[75vh] object-contain rounded-2xl shadow-2xl filter saturate-105`).
- **Minimalist Floating Caption Pill:** Clean glassmorphic capsule beneath the image displaying:
  `{Title} • {Category} • {Brand Proof}`
- **Controls:**
  - Close button (`<X />`) top-right.
  - Floating Next / Previous chevron buttons for cycling through images.
  - `Escape` key and backdrop click dismissals.
  - Zero heavy sidebars or multi-column layouts.

---

### Section 3: Direct RFQ Call-To-Action (`GalleryCTASection.tsx`)
Embeds the centralized `ContactSection` allowing visitors who have inspected the portfolio to request custom carton samples, technical material consultations, or instant production quotes.

