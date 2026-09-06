# Page Documentation: Home Page (`/`)

> **Page Route:** `/`  
> **Source Component:** `app/page.tsx`  
> **Container:** `<div className="flex-1 w-full bg-slate-50 relative selection:bg-primary selection:text-white font-sans text-slate-800">`  

---

## 1. Executive Summary & Page Architecture

The Home Page acts as the primary B2B conversion engine for Shree Harihar Printing Works LLP. It is structured to systematically build enterprise trust:
1. **Header Navigation** (Global navigation, phone dialer, quick WhatsApp & Quote CTA)
2. **Hero Carousel Section** (High-impact visual slider showcasing high-volume carton packaging, prepress craft, and defect-free inspection)
3. **Quick Trust & Certifications Bar** (ISO 9001:2015, GMP compliance, brand trust)
4. **100+ Year Legacy Section** (Five-generation story, company origins, interactive counting statistics)
5. **Infrastructure & Production Capability Section** (Cinematic background video, five in-house divisions from prepress to vision inspection)
6. **"What We Print" Packaging Portfolio Section** (Interactive hover-card matrix covering FMCG, labels, promotional materials, and pharma)
7. **Client Testimonials Carousel** (Verified enterprise feedback from pharma and FMCG procurement heads)
8. **"What Sets Us Apart" Strong Core Section** (Interactive hover tabs paired with a 3D-angled floating preview image)
9. **Dual-Row Infinite Client Marquee** (Logos of 100+ pharmaceutical and FMCG enterprise clients)
10. **Direct B2B Contact & RFQ Section** (Official plant coordinates, phone dispatch, email, and high-conversion RFQ form)
11. **Footer** (Global site links, legal disclaimers, facility address)

---

## 2. Detailed Section-by-Section Content & Visual Specifications

---

### Section 1: Hero Carousel (`HeroSection.tsx`)

#### Purpose
Captivate incoming pharmaceutical and FMCG procurement directors with scale, technological authority, and direct conversion pathways.

#### Slide Data & Full Content

##### Slide 1 (Left-Aligned Layout)
- **Pre-Title:** `High-Volume B2B` (`font-heading text-2xl sm:text-3xl md:text-4xl font-light text-white mb-2 tracking-wide`)
- **Title:** `Precision Packaging` (`font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl text-primary tracking-tight leading-none mb-6`)
- **Description:** `Mono cartons and structural packaging built for automated pharmaceutical and FMCG cartoning lines.` (`font-sans text-slate-300 text-[15px] sm:text-[17px] lg:text-[19px] font-light leading-relaxed max-w-lg`)
- **Call to Action Button:** `Explore Services!` (`bg-primary hover:bg-primary-dark font-heading text-sm font-bold text-white px-8 py-4 tracking-wider rounded-full uppercase transition-all duration-200 shadow-xl shadow-primary/20`)
- **Link Destination:** `/services`
- **Slide Image URL:** `https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&q=80&w=1920`
- **Detailed Visual Description of Image:**
  - *Subject:* Heavy industrial Heidelberg multi-unit offset press in operation on an immaculate, epoxy-coated factory floor.
  - *Details:* High-speed paperboard feeding mechanism with neatly aligned pallets of virgin carton board, robotic suction feeders, and illuminated control consoles.
  - *Mood & Lighting:* Cool industrial ambiance with bright calibrated warm LED spotlights highlighting the mechanical precision and scale of the machinery.
  - *Framing:* Wide cinematic angle, depth of field focused on the front printing unit fading into the plant depth.

##### Slide 2 (Right-Aligned Layout)
- **Pre-Title:** `Breathing Life` (`font-heading text-2xl sm:text-3xl md:text-4xl font-light text-white mb-2 tracking-wide`)
- **Title:** `Into Your Print` (`font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl text-primary tracking-tight leading-none mb-6`)
- **Description:** `Consistent color, faster turnarounds, and packaging that elevates your brand on every shelf.` (`font-sans text-slate-300 text-[15px] sm:text-[17px] lg:text-[19px] font-light leading-relaxed max-w-lg`)
- **Call to Action Button:** `Contact Us!` (`bg-primary hover:bg-primary-dark font-heading text-sm font-bold text-white px-8 py-4 tracking-wider rounded-full uppercase transition-all duration-200 shadow-xl shadow-primary/20`)
- **Link Destination:** `/contact`
- **Slide Image URL:** `https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1920`
- **Detailed Visual Description of Image:**
  - *Subject:* Print engineers and quality assurance specialists gathered around a D50 standardized color inspection viewing booth.
  - *Details:* Technicians comparing spectrophotometer digital readings against physical offset press sheets; vibrant CMYK and Pantone color swatches visibly sharp and registered.
  - *Mood & Lighting:* Clean, analytical laboratory atmosphere; crisp white illumination highlighting human craftsmanship and technical scrutiny.
  - *Framing:* Medium three-quarter shot positioned on the right side of the frame with atmospheric dark negative space on the left.

##### Slide 3 (Left-Aligned Layout)
- **Pre-Title:** `Uncompromised` (`font-heading text-2xl sm:text-3xl md:text-4xl font-light text-white mb-2 tracking-wide`)
- **Title:** `Quality Control` (`font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl text-primary tracking-tight leading-none mb-6`)
- **Description:** `Carton inspection and finishing processes built for zero-defect production in regulated industries.` (`font-sans text-slate-300 text-[15px] sm:text-[17px] lg:text-[19px] font-light leading-relaxed max-w-lg`)
- **Call to Action Button:** `View Infrastructure` (`bg-primary hover:bg-primary-dark font-heading text-sm font-bold text-white px-8 py-4 tracking-wider rounded-full uppercase transition-all duration-200 shadow-xl shadow-primary/20`)
- **Link Destination:** `/gallery`
- **Slide Image URL:** `https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1920`
- **Detailed Visual Description of Image:**
  - *Subject:* Close-up macro view of an automated optical carton inspection system conveyor line.
  - *Details:* High-speed digital camera sensor with strobe illumination inspecting die-cut folding carton blanks for microscopic color deviation, foil stamping registration, and edge creasing.
  - *Mood & Lighting:* High-tech futuristic engineering aesthetic, cool cyan and slate tones contrasting with warm mechanical chrome reflections.
  - *Framing:* Dynamic low-angle close-up emphasizing automated speed and zero-defect scrutiny.

#### Animation & Interactive Mechanics
- **Slide Rotation:** Automatic cycling every 6,000ms via `setInterval`. Clears on unmount.
- **Crossfade Transition:** Active slide receives `opacity-100 z-10 transition-opacity duration-1000 ease-in-out`; inactive slides receive `opacity-0 z-0 pointer-events-none`.
- **Text Entrance Animation:** Staggered vertical slide `translate-y-0 opacity-100` (delay 300ms, duration 1000ms).
- **Background Zoom (Ken Burns Effect):** Slow scaling animation `scale-100 group-hover:scale-105 transition-transform duration-[10000ms]`.
- **Directional Gradient Overlays:**
  - Left-aligned slides use `bg-gradient-to-r from-black/90 via-black/60 to-black/30`.
  - Right-aligned slides use `bg-gradient-to-l from-black/90 via-black/60 to-black/30`.
- **Manual Navigation:**
  - Left / Right Chevron arrows (`<ChevronLeft />`, `<ChevronRight />`) with hover transitions (`text-white/50 hover:text-white`).
  - Slide dot indicators at bottom center: Active slide expands to a wide pill `bg-primary w-8` while inactive dots remain `bg-white/50 w-2.5 h-2.5`.

---

### Section 2: Quick Trust & Standards Bar (`QuickTrustBar.tsx`)

#### Purpose
Instant reassurance of industrial certifications immediately following the hero viewport.

#### Full Content
- **Lead Label:** `CERTIFICATIONS & STANDARDS:` (`font-heading text-xs font-bold text-slate-400 uppercase tracking-widest`)
- **Trust Badges:**
  1. `<Shield className="h-4 w-4 text-primary" />` **`ISO 9001:2015 CERTIFIED`**
  2. `<CheckCircle className="h-4 w-4 text-primary" />` **`STRICT GMP COMPLIANCE`**
  3. `<Award className="h-4 w-4 text-primary" />` **`BRANDS TRUST FOR PACKAGING`**

#### Animation & Mechanics
- **Viewport Scroll Trigger:** Framer Motion `whileInView` with `viewport={{ once: true }}`.
- **Header Badge Animation:** `initial={{ opacity: 0, x: -20 }}` animating to `x: 0, opacity: 1` over `0.5s easeOut`.
- **Staggered Badges:** Each badge animates with `initial={{ opacity: 0, y: 12 }}` to `y: 0, opacity: 1` with a cascading delay of `idx * 0.1s`.

---

### Section 3: 100+ Year Legacy Section (`LegacySection.tsx`)

#### Purpose
Establish deep historical gravitas, highlighting five uninterrupted generations of family ownership and in-house manufacturing control.

#### Full Content

##### Heading & Narrative Column
- **Section Heading:**
  - `A Century in Business.`
  - `<span className="font-bold text-primary">A Team That Still Shows Up Like Day One.</span>`
- **Teaser Narrative Copy:**
  - *"Five generations of the same family have run Shree Harihar Printing Works since 1921. What started as a single printing press in Ahmedabad has grown into a full-scale, in-house manufacturing operation. We survived a century in business by never losing the thing that got us here: an uncompromising standard for quality and a genuine respect for the brands that trust us."*
- **Call to Action Link:**
  - `READ OUR FULL STORY` with `<ChevronRight className="w-4 h-4 ml-1" />` linking to `/about`.

##### Visual Column (Left)
- **Image URL:** `https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200`
- **Detailed Visual Description:**
  - *Subject:* Collaborative print shop floor meeting between experienced master craftsmen and modern operations engineers.
  - *Details:* Team gathered over large technical drawings of packaging structural dielines and carton mockups with offset printing presses hum in the softly blurred background.
  - *Mood & Lighting:* Authentic, dignified craftsmanship, warm natural lighting from industrial factory windows balanced with focused task lamps.
  - *Framing:* Rich horizontal presentation within a deep shadow-2xl container.

##### Animated Statistics Matrix (Bottom Row)
- **Row Heading:** `100+ Years of ` `<span className="font-bold text-primary">Printing Excellence</span>`
- **Stat Items:**
  1. **1921** — `Year Established`
  2. **5** — `Generations of Family Leadership`
  3. **100+** — `Years of Client Trust`
  4. **5** — `In-House Press & Production Divisions`

#### Animation & Mechanics
- **Entrance Animation:** Left image slides in with `initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}`.
- **Text Entrance:** Staggered fade-up (`duration: 0.65s, ease: [0.22, 1, 0.36, 1]`).
- **Dynamic Count-Up Engine:** Custom `useCounter` hook leveraging cubic ease-out (`1 - Math.pow(1 - progress, 3)`). Counts dynamically from 0 to target integer (1921, 5, 100, 5) over 1.8 seconds upon scrolling into the viewport.

---

### Section 4: Infrastructure & Production Capability (`InfrastructureSection.tsx`)

#### Purpose
Prove turnkey manufacturing self-sufficiency, removing client fears of subcontractor delays or outsourced quality loss.

#### Background Cinematic Video
- **Video Source:** `/infrastructure.mp4`
- **Playback Properties:** `autoPlay`, `loop`, `muted`, `playsInline`, `object-cover`
- **Detailed Description of Video Visuals:**
  - High-definition B-roll of the Miroli manufacturing facility. Shows continuous high-speed Heidelberg offset printing units in rhythmic synchronization, sheet feeders lifting high-caliper folding box board, automated coating rollers applying UV varnish, and high-speed folder-gluers folding lock-bottom cartons with Swiss precision.
- **Overlay:** High-contrast `bg-black/60` dark tint ensuring pristine readability of white typographic headers.

#### Header Content (Centered over Video)
- **Heading:** `Built to Deliver - ` `<span className="font-bold text-primary">Our Production Capability</span>`
- **Subtitle:** *"Everything we produce moves through five in-house divisions, giving us tighter control over quality, cost, and turnaround than a business relying on outsourced vendors ever could."*

#### 5 Overlapping Division Cards (`-mt-24 lg:-mt-32`)
Five cards that float over the lower section of the background video:

1. **Card 01 — Prepress**
   - **Icon:** `<Layers className="w-10 h-10 text-primary" />`
   - **Number:** `01`
   - **Title:** `Prepress`
   - **Description:** *"Advanced plate-making and structural setup ensures every job starts with dot-accurate precision."*
2. **Card 02 — Printing**
   - **Icon:** `<Printer className="w-10 h-10 text-primary" />`
   - **Number:** `02`
   - **Title:** `Printing`
   - **Description:** *"Multi-color offset presses deliver sharp, consistent, high-speed production runs for bulk orders."*
3. **Card 03 — Post-Press**
   - **Icon:** `<Settings className="w-10 h-10 text-primary" />`
   - **Number:** `03`
   - **Title:** `Post-Press`
   - **Description:** *"Automated coating, precision blanking, and vision inspection built for zero-defect output."*
4. **Card 04 — Folding & Gluing**
   - **Icon:** `<Package className="w-10 h-10 text-primary" />`
   - **Number:** `04`
   - **Title:** `Folding & Gluing`
   - **Description:** *"High-speed automated folding lines, fully capable of compliance-ready and Braille-embossed packaging."*
5. **Card 05 — Label & Promo**
   - **Icon:** `<Cpu className="w-10 h-10 text-primary" />`
   - **Number:** `05`
   - **Title:** `Label & Promo`
   - **Description:** *"Stickers, labels, and marketing collateral produced with the exact same quality discipline as our cartons."*

- **Bottom Link:** `SEE FULL MACHINERY & INFRASTRUCTURE →` linking to `/gallery`.

#### Animation & Mechanics
- **Card Icon Hover Effect:** 3D card icon spins 360 degrees on its Y-axis (`group-hover:transform-[rotateY(360deg)] duration-700 ease-in-out`).
- **Card Number Fill Animation:** Numeric index `01` through `05` renders with stroke outline and fills dynamically with a gradient red wash from left to right on hover (`bg-[length:0%_100%] group-hover:bg-[length:100%_100%] duration-700`).

---

### Section 5: "What We Print" Packaging Portfolio (`SuccessFutureSection.tsx`)

#### Purpose
Categorical showcase of core packaging products with interactive hover reveals.

#### Header Content
- **Section Heading:** `What We ` `<span className="font-bold text-primary">Print</span>`
- **Subtitle:** *"We don't just print; we solve packaging problems for industries that can't afford to get it wrong."*
- **Header Link:** `VIEW ALL SERVICES` with `<ChevronRight className="w-4 h-4 ml-1" />` linking to `/services`.

#### 4 Interactive Product Cards

1. **FMCG Cartons**
   - **Destination:** `/industry`
   - **Image URL:** `https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=600`
   - **Detailed Visual Description:** High-end embossed cosmetic and soap boxes, vibrant color saturation, sharp creasing lines, gold foil detailing under studio lighting.
   - **Title:** `FMCG Cartons`
   - **Revealed Description:** *"From agarbatti boxes to soap and perfume packaging, our fast, precise production keeps FMCG brands moving without delivery glitches."*
2. **Sticker & Label Printing**
   - **Destination:** `/services`
   - **Image URL:** `https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=600`
   - **Detailed Visual Description:** Clean pharmaceutical bottle labels and nutritional supplement die-cut labels arranged in precision roll-feed packaging with crisp micro-typography.
   - **Title:** `Sticker & Label Printing`
   - **Revealed Description:** *"Small in size, big in impact, bottle labels, product labels, and promotional stickers are finished to the same standard as our largest carton orders."*
3. **Promotional Materials**
   - **Destination:** `/services`
   - **Image URL:** `https://images.unsplash.com/photo-1541462608143-67571c6738dd?auto=format&fit=crop&q=80&w=600`
   - **Detailed Visual Description:** Multi-panel product catalogues, saddle-stitched company brochures, and vibrant POP table standees laid out on an architect's desk.
   - **Title:** `Promotional Materials`
   - **Revealed Description:** *"Catalogues, standees, brochures, posters, and danglers built to fulfill out-of-the-box creative briefs for consumer brands."*
4. **Pharmaceutical Packaging**
   - **Destination:** `/industry`
   - **Image URL:** `https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=600`
   - **Detailed Visual Description:** Clinical sterile pharmaceutical carton boxes for vials and ampoules, featuring legible Braille dot embossing, 2D matrix data codes, and tamper-evident seals.
   - **Title:** `Pharmaceutical Packaging`
   - **Revealed Description:** *"Compliance-driven printing for vials, injectables, liquids, and sterile products, where precision isn't optional."*

#### Huge Background Typographic Watermark
- **Text:** `Since-1921`
- **Styling:** Giant responsive typography `text-[3.5rem] sm:text-[8rem] md:text-[11rem] lg:text-[13rem] xl:text-[15rem] leading-[0.8] text-transparent select-none whitespace-nowrap`.
- **Stroke Effect:** `-webkit-text-stroke: 1px rgba(71, 85, 105, 0.8)`.

#### Animation & Mechanics
- **Card Hover Expand:** The bottom red container is `h-[60px]` in resting state and smoothly expands to `group-hover:h-[48%]` over 300ms.
- **Card Arrow Rotation:** `<ArrowDownRight />` icon rotates `-90deg` on hover.
- **Card Description Fade:** Description text transitions from `opacity-0` to `opacity-100` with a 100ms stagger delay.
- **Image Zoom:** Background image zooms `group-hover:scale-110` with duration 700ms.

---

### Section 6: Client Testimonials Carousel (`TestimonialsSection.tsx`)

#### Purpose
Provide social proof through authentic reviews from pharmaceutical, FMCG, and consumer wellness brand procurement heads.

#### Header Content
- **Category Badge:** `CLIENT VOICES` (`font-heading text-xs font-bold uppercase tracking-[0.25em] text-primary`)
- **Main Heading:** `What Our Clients Say ` `<span className="font-bold text-primary">About Us</span>`
- **Subtitle:** *"Over a century of craftsmanship, echoed by the brands that rely on us every single day."*

#### 6 Verified Client Testimonials
Each card includes a 5-star rating visual (`<StarRating count={5} />`), a 40px red decorative rule, verbatim quotation, circular author avatar with initials, full name, and executive role:

1. **Rajesh Mehta** — *Procurement Head, Sun Pharma*
   - Rating: 5/5
   - Quote: *"Shree Harihar has been our trusted packaging partner for over a decade. Their Braille-embossed cartons meet every regulatory standard without a single deviation."*
2. **Priya Nair** — *Brand Manager, Dabur India*
   - Rating: 5/5
   - Quote: *"The color consistency across 50,000+ carton runs is simply unmatched. Our shelf presence improved dramatically after switching to their offset printing."*
3. **Amit Shah** — *Supply Chain Director, Cipla*
   - Rating: 5/5
   - Quote: *"On-time delivery has never been an issue. Even during peak demand seasons, Shree Harihar delivers without compromising on quality."*
4. **Sunita Krishnan** — *Operations Manager, Himalaya Wellness*
   - Rating: 5/5
   - Quote: *"Their team understands pharma compliance deeply. Every insert is perfectly folded, legible, and inspection-ready right out of the box."*
5. **Vikram Desai** — *CEO, Ahmedabad Naturals*
   - Rating: 5/5
   - Quote: *"Switched from two vendors to just Shree Harihar for all our FMCG packaging. The savings in coordination and rework alone justified the decision in month one."*
6. **Ananya Bose** — *Head of Procurement, Emami Group*
   - Rating: 5/5
   - Quote: *"Their 100-year legacy isn't just history - it shows in how meticulous and professional every interaction is. We trust them completely."*

#### Animation & Mechanics
- **Continuous Sliding Track:** Uses `transform: translateX(calc(-${current} * (100% / 3)))` with smooth 500ms cubic transition.
- **Auto-Play Timer:** Cycles forward automatically every 5,000ms via `setInterval`.
- **Manual Navigation:** Left and right circular arrow buttons reset the auto-play timer and slide the viewport. Bottom dot indicators reflect current index.

---

### Section 7: "What Sets Us Apart" Strong Core (`StrongCoreSection.tsx`)

#### Purpose
Demonstrate core competitive advantages using an interactive master-detail hover row layout connected to a 3D-angled sticky floating image showcase.

#### Header Content
- **Section Heading:** `What Sets ` `<span className="font-bold text-primary">Us Apart</span>`

#### 5 Buyer Benefit Value Rows (Why Choose Us)

1. **Value 01 — Zero-Defect Guarantee**
   - **Number:** `01`
   - **Title:** `Zero-Defect Guarantee`
   - **Description:** *"Automated optical inspection means misprints and color deviations never leave our factory floor."*
   - **Image URL:** `https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800`
   - **Detailed Image Description:** High-speed automated optical vision inspection camera scanning die-cut carton blanks on conveyor line.
2. **Value 02 — Single-Vendor Accountability**
   - **Number:** `02`
   - **Title:** `Single-Vendor Accountability`
   - **Description:** *"Because everything happens under our roof, you never deal with subcontractor delays or finger-pointing."*
   - **Image URL:** `https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800`
   - **Detailed Image Description:** Complete in-house conversion line from prepress plate-making to folding-gluing under one single management roof.
3. **Value 03 — Retail-Speed Agility**
   - **Number:** `03`
   - **Title:** `Retail-Speed Agility`
   - **Description:** *"Fast turnarounds built to keep pace with dynamic FMCG supply chains and sudden demand spikes."*
   - **Image URL:** `https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800`
   - **Detailed Image Description:** High-throughput logistics staging area with pallets of finished retail cartons ready for rapid dispatch.
4. **Value 04 — Seamless Scalability**
   - **Number:** `04`
   - **Title:** `Seamless Scalability`
   - **Description:** *"From short-run promotional stickers to multi-million carton enterprise orders, we scale with your growth."*
   - **Image URL:** `https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=800`
   - **Detailed Image Description:** Diverse packaging portfolio exhibiting flexible print-pack runs from micro batches to mass commercial supply.
5. **Value 05 — Uncompromising Compliance**
   - **Number:** `05`
   - **Title:** `Uncompromising Compliance`
   - **Description:** *"Strict adherence to GMP standards ensures your regulated packaging sails through QA approvals."*
   - **Image URL:** `https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800`
   - **Detailed Image Description:** High-precision Braille-embossed pharmaceutical cartons under cleanroom quality audit inspection.

#### Animation & Mechanics
- **Hover Row Highlight:** Hovering over row `onMouseEnter` updates `activeIndex`.
- **Typographic Number Stroke:** The large outlined number switches stroke color from neutral slate (`1.5px #CBD5E1`) to brand primary red (`1.5px #C62026`).
- **Sticky 3D Floating Image (Desktop):**
  - Right container stays sticky at `sticky top-32 h-[600px]`.
  - Active image transitions smoothly: `opacity-100 scale-100 rotate-[8deg] z-10 translate-y-0` with `transition-all duration-700 ease-out`.
  - Inactive images receive `opacity-0 scale-95 rotate-0 z-0 translate-y-12 pointer-events-none`.

---

### Section 8: Dual-Row Infinite Client Marquee (`ClientMarqueeSection.tsx`)

#### Purpose
Showcase breadth of corporate adoption across pharmaceutical, FMCG, and incense industries.

#### Header Content
- **Heading:** `Trusted by 100+ ` `<span className="font-bold text-primary">Industry Leaders</span>`
- **Subtitle:** *"From regulated pharmaceutical giants to FMCG household names, India's leading enterprises rely on our precision packaging lines."*

#### Marquee Configuration
- **Row 1 (Top):** 18 client cards scrolling infinitely to the left (`animate-marquee`).
- **Row 2 (Bottom):** 18 client cards scrolling infinitely to the right (`animate-marquee-reverse`).
- **Smooth Infinite Loop:** Both rows concatenate arrays (`row.concat(row)`) to prevent blank gaps during CSS translation.
- **Side Gradient Masks:** Transparent linear masks on left and right borders (`pointer-events-none w-16 sm:w-32 bg-gradient-to-r from-slate-100 to-transparent`) create an aesthetic fade-in and fade-out effect.
- **Client Cards (`ClientLogoCard.tsx`):**
  - Displays high-resolution vector logo if valid, or falls back to bold corporate typography.
  - Hover effect: Card lifts `-translate-y-1` with top red accent border line.
- **Bottom Navigation Link:** `VIEW ALL →` linking to `/about#clients`.

---

### Section 9: B2B Contact & RFQ Section (`ContactSection.tsx`)

#### Purpose
Convert corporate visitors directly into active RFQ leads with plant coordinates and a form.

#### Header Content
- **Heading:** `Get In ` `<span className="font-bold text-primary">Touch</span>`
- **Subtitle:** *"Whether you need pharma packaging, FMCG cartons, or custom print solutions - our team is ready to help you bring your vision to life."*

#### Left Column: Contact Channels
1. **Plant Address:**
   - Icon: `<MapPin className="w-5 h-5 text-primary" />`
   - Content: `233/1, Miroli Village, Near Pirana Village, Daskroi, Ahmedabad – 382425, Gujarat`
   - Action Link: `VIEW ON GOOGLE MAPS` with `<ExternalLink />` opening Google Maps in a new tab.
2. **Phone Dispatch:**
   - Icon: `<Phone className="w-5 h-5 text-primary" />`
   - Lines: `(079) 22932863 / 22931311` & `+91 74900 41921`
   - Action Link: `CALL NOW` (`tel:+917490041921`).
3. **Official Email:**
   - Icon: `<Mail className="w-5 h-5 text-primary" />`
   - Address: `info@hariharprintpack.com`
   - Action Link: `SEND EMAIL` (`mailto:info@hariharprintpack.com`).

#### Right Column: Interactive Contact Form
- **Form Heading:** `Send Us a ` `<span className="font-bold text-primary">Message</span>`
- **Fields:**
  - `Full Name *` (Required text input, underline aesthetic `border-b-2 border-slate-300 focus:border-primary`)
  - `Company` (Optional text input)
  - `Email address *` (Required email input)
  - `Phone Number` (Optional tel input)
  - `Industry` (Select dropdown: `Select Industry`, `Pharmaceutical`, `FMCG & Personal Care`, `Food & Beverage`, `Nutraceuticals`, `Other`)
  - `Product Needed` (Select dropdown: `Select Product Needed`, `Carton Packaging`, `Sticker & Label`, `Promotional Print`, `Not Sure`)
  - `Message / Requirements` (Optional textarea, 4 rows)
- **Submit Button:** `SUBMIT ENQUIRY` with `<Send />` icon.
- **Interactivity & Confirmation:**
  - Shows animated spinner icon and label `"Sending..."` during asynchronous processing.
  - On success, switches to confirmation card with `<CheckCircle className="text-emerald-600" />`, heading `"Message Received"`, and message *"Thank you for reaching out. Our team will respond within 24 business hours."*
  - Resets automatically after 3.5 seconds.
