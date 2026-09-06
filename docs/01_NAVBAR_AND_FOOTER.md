# Global Components Documentation: Navbar, Footer & Quote Modal

> **Project:** Shree Harihar Printing Works LLP  
> **Type:** B2B Print-Packaging Web Application (Ahmedabad, Gujarat, India)  
> **Technologies:** Next.js (App Router), React, Tailwind CSS, Framer Motion, Lucide Icons  

---

## 1. Global Navigation Bar (Header)

### Component Location
- Source: `components/Header.tsx`
- Layout Integration: `app/layout.tsx`

---

### Layout, Behavior & Sticky Scroll Mechanics
- **Sticky Positioning:** Positioned at `sticky top-0 z-50 w-full`.
- **Dynamic Scroll States:**
  - **At Top of Page (`scrollY <= 20`):**
    - Height / Padding: `py-3 sm:py-3.5`
    - Background: `bg-white/95 backdrop-blur-xl`
    - Border: `border-b border-slate-200/70`
    - Shadow: `shadow-xs`
  - **Scrolled (`scrollY > 20`):**
    - Height / Padding: `py-2.5`
    - Background: `bg-white/98 backdrop-blur-2xl`
    - Border: `border-b border-slate-200/90`
    - Shadow: `shadow-md shadow-slate-900/5`
- **Mobile Menu State Handling:**
  - When mobile drawer is opened, `document.body.style.overflow = "hidden"` prevents background scrolling.
  - Automatically resets `mobileMenuOpen = false` whenever the route pathname changes.

---

### Header Elements & Content

#### 1.1 Brand Logo
- **Link Target:** `/` (Home)
- **Image File:** `/logo.png`
- **Dimensions:** Width `148px`, Height `44px` (rendered at `h-8 sm:h-9 w-auto object-contain`)
- **Alt Text:** `"Shree Harihar Printing Works LLP"`
- **Visual Description of Logo:**
  - Official vector corporate logo of Shree Harihar Printing Works LLP. Features deep corporate crimson-red (`#C62026`) and dark slate/black typography with modern typographic balancing, establishing 100+ years of industrial credibility.
- **Hover & Interaction:**
  - Scales subtly to `hover:scale-[1.02]` with smooth transition `duration-200`. Accessible keyboard focus ring `focus-visible:ring-2 focus-visible:ring-primary`.

---

#### 1.2 Desktop Navigation Links (`hidden lg:flex`)
The navigation links are rendered in a horizontal flex layout with uppercase tracking:

| Menu Item | Destination Route (`href`) | Match Logic |
| :--- | :--- | :--- |
| **HOME** | `/` | Exact match (`pathname === '/'`) |
| **ABOUT** | `/about` | Prefix match (`pathname.startsWith('/about')`) |
| **SERVICES** | `/services` | Prefix match (`pathname.startsWith('/services')`) |
| **INDUSTRIES** | `/industry` | Prefix match (`pathname.startsWith('/industry')`) |
| **GALLERY** | `/gallery` | Prefix match (`pathname.startsWith('/gallery')`) |
| **CONTACT US** | `/contact` | Prefix match (`pathname.startsWith('/contact')`) |

##### Interactive Animations on Desktop Nav:
1. **Active Route Sliding Indicator:**
   - Powered by Framer Motion `layoutId="activeNavPill"`.
   - Element: `<motion.div className="absolute inset-0 bg-gradient-to-r from-primary to-[#b11d22] rounded-full shadow-sm shadow-primary/25" transition={{ type: "spring", stiffness: 350, damping: 30 }} />`
   - Animation Effect: When navigating between pages, the pill smoothly slides from the previous route to the current active route without jumping.
   - Text Color: Crisp white (`text-white font-bold`).
2. **Hover Pill Indicator:**
   - Powered by Framer Motion `layoutId="hoverNavPill"`.
   - Trigger: `onMouseEnter` sets `hoveredPath = link.href`; `onMouseLeave` sets `hoveredPath = null`.
   - Element: `<motion.div className="absolute inset-0 bg-slate-100 rounded-full" transition={{ type: "spring", stiffness: 350, damping: 30 }} />`
   - Non-active text transitions from `text-slate-700` to `hover:text-slate-950`.

---

#### 1.3 Desktop Right Action Area
1. **Quick Phone Call Pill:**
   - **Link:** `href="tel:07922932863"`
   - **Icon:** `<Phone className="w-3.5 h-3.5 text-primary" />`
   - **Text:** `(079) 22932863` (hidden on smaller screens, visible on `xl:inline`)
   - **Styling:** Pill with border `border-slate-200/80 bg-slate-100 hover:bg-slate-200/80 text-slate-700 hover:text-slate-950 text-xs font-semibold`.
2. **WhatsApp Quick Icon:**
   - **Link:** `href="https://wa.me/919825000000"` (Target `_blank`, `rel="noopener noreferrer"`)
   - **Icon:** `<Whatsapp className="h-3.5 w-3.5" />`
   - **Styling & Hover Animation:** Rounded circle pill; turns from neutral slate to WhatsApp brand emerald `hover:bg-emerald-600 hover:text-white hover:scale-110 shadow-xs duration-200`.
3. **LinkedIn Quick Icon:**
   - **Link:** `href="#"` (Target `_blank`)
   - **Icon:** `<Linkedin className="h-3.5 w-3.5" />`
   - **Styling & Hover Animation:** Rounded circle pill; turns from neutral slate to LinkedIn brand blue `hover:bg-[#0077b5] hover:text-white hover:scale-110 shadow-xs duration-200`.
4. **"GET QUOTE" Conversion CTA Button:**
   - **Link:** `href="/contact"`
   - **Icons:**
     - Leading: `<Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse" />`
     - Trailing: `<ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />`
   - **Text:** `"Get Quote"` (Uppercase, bold, tracking-wider)
   - **Gradient & Glow:** `bg-gradient-to-r from-primary to-[#b11d22] text-white shadow-md hover:shadow-primary/30 hover:scale-[1.03] transition-all duration-200`.

---

#### 1.4 Mobile Header Trigger & Mobile Drawer (`lg:hidden`)

##### Top Mobile Bar:
- Compact Quote CTA button (`px-3 py-1.5 bg-primary text-white text-[11px] font-semibold uppercase`).
- Hamburger Toggle Button (`<Menu />` / `<X />`), toggle state `mobileMenuOpen`.

##### Drawer Modal / Slide-Out Navigation (`AnimatePresence`):
- **Backdrop Overlay:**
  - Animation: `initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}`
  - Style: `fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-50`
- **Drawer Panel:**
  - Position: `fixed top-0 right-0 w-4/5 max-w-sm h-full bg-white border-l border-slate-200 p-6 shadow-2xl`
  - Spring Animation: `initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "spring", damping: 28, stiffness: 300 }}`
- **Drawer Header:**
  - Brand mark: `/squareLogo.png` (28x28px) + Brand signature: `/logo.png` (115x35px).
  - Close button with `<X className="h-5 w-5" />`.
- **Drawer Navigation List:**
  - Animated item entrance: `initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.05 }}`
  - Active Item: `bg-primary text-white shadow-md shadow-primary/20`
  - Inactive Items: `text-slate-700 hover:text-slate-950 hover:bg-slate-100` with subtle right-arrow indicator.
- **Drawer Action CTA Button:**
  - Full-width gradient button: `"Request a Quote"` with `<Sparkles className="text-amber-300" />` icon, linking to `/contact`.
- **Drawer Footer Information:**
  - Social icons row: Facebook, Instagram, Youtube, Linkedin, WhatsApp (rounded pills with colored hover backgrounds).
  - Direct telephone link: `Tel: (079) 22932863`
  - Heritage Tagline: `"EST. 1921 • 5TH GENERATION PRINTING"` (Tracking-widest, font-heading, 10px uppercase).

---

## 2. Global Footer

### Component Location
- Source: `components/FooterSection.tsx`
- Layout Integration: Root page and inner client pages (`app/page.tsx`, `app/about/AboutClientPage.tsx`, etc.)

---

### Layout & Theme
- **Background & Styling:** `bg-slate-950 text-white pt-16 pb-12 border-t border-slate-900`
- **Container:** `mx-auto w-full max-w-[90rem] px-4 sm:px-6 lg:px-8`
- **Responsive Grid:** 4 columns on large screens (`grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12`)

---

### Footer Column Breakdown

#### Column 1: Brand & Heritage
- **Logo Container:**
  - White rounded container (`bg-white px-3.5 py-2 rounded-xl shadow-xs inline-flex items-center group-hover:scale-[1.02] duration-200`).
  - Image: `/logo.png`, alt: `"Shree Harihar Printing Works LLP"`, dimensions `140x42px`.
- **Body Paragraph:**
  - *"Evolved over 5 generations into a complete, high-volume folding carton Print-Pack company serving pharmaceuticals and FMCG industries."*
- **Badge:**
  - Icon / Text: `EST. 1921 | AHMEDABAD` (`font-heading text-[10px] font-bold text-slate-500 uppercase tracking-wider`).

#### Column 2: Quick Navigation
- **Section Heading:**
  - `border-l-2 border-primary pl-2 font-heading text-xs font-extrabold uppercase tracking-widest text-slate-300 mb-4`
  - Title: `"QUICK NAVIGATION"`
- **Nav Links List:**
  1. `Home` -> `href="/"`
  2. `About Us & 100-Year Journey` -> `href="/about"`
  3. `Printing & Packaging Services` -> `href="/services"`
  4. `Industries Served` -> `href="/industry"`
  5. `Work Gallery & Machinery` -> `href="/gallery"`
  6. `Contact Us / Get Quote` -> `href="/contact"`
- **Hover Styling:** Transitions from `text-slate-400` to `hover:text-white transition-colors`.

#### Column 3: Miroli Plant Address
- **Section Heading:**
  - `border-l-2 border-primary pl-2 font-heading text-xs font-extrabold uppercase tracking-widest text-slate-300 mb-4`
  - Title: `"MIROLI PLANT ADDRESS"`
- **Address Content (with `<MapPin className="text-primary-light" />`):**
  - Line 1: `233/1, Miroli Village,`
  - Line 2: `Near Pirana Village, Daskroi,`
  - Line 3: `Ahmedabad - 382425,`
  - Line 4: `Gujarat, India`
- **Typography:** `font-sans text-xs text-slate-400 leading-relaxed`.

#### Column 4: Contact Office
- **Section Heading:**
  - `border-l-2 border-primary pl-2 font-heading text-xs font-extrabold uppercase tracking-widest text-slate-300 mb-4`
  - Title: `"CONTACT OFFICE"`
- **Contact Lines:**
  - Line 1 (Phone): `<Phone />` `(079)-22932863, 22931311`
  - Line 2 (Mobile): `<Phone />` `+91 74900 41921`
  - Line 3 (Email): `<Mail />` `info@hariharprintpack.com` (clickable `mailto:info@hariharprintpack.com` with `hover:text-primary-light`)

---

### Bottom Sub-Footer Bar
- **Border:** `border-t border-slate-900 pt-8 mt-12 flex flex-col sm:flex-row justify-between items-center gap-4`
- **Copyright Text:**
  - `© [Current Year] Shree Harihar Printing Works LLP. All Rights Reserved.`
- **Legal Links:**
  - `Privacy Policy` (`href="#"`, hover: `text-slate-300`)
  - Divider: `•`
  - `Terms of Service` (`href="#"`, hover: `text-slate-300`)
  - Divider: `•`
  - `Sitemap` (`href="#"`, hover: `text-slate-300`)

---

## 3. Global Quote Modal (Interactive Overlay)

### Component Location
- Source: `components/QuoteModal.tsx`

---

### Trigger & Display Mechanics
- **Visibility:** Conditional render based on `isOpen: boolean`.
- **Backdrop Animation:** Fixed fullscreen `bg-slate-950/75 backdrop-blur-sm animate-fade-in z-[100]`.
- **Card Container:** Centered modal `bg-white border-t-4 border-primary p-6 sm:p-8 w-full max-w-xl shadow-2xl rounded-2xl relative my-8`.
- **Close Action:** Clicking backdrop or top-right `<X />` icon invokes `onClose()`.

---

### Modal Header Content
- **Square Emblem:** `/squareLogo.png` (32x32px) in subtle bordered rounded square.
  - *Image Description:* Shree Harihar historical monogram crest featuring geometric industrial print alignment registration marks in deep primary red.
- **Title:** `Get In Touch` (with `"Touch"` highlighted in `font-bold text-primary`).
- **Subtitle:**
  - *"Whether you need pharma packaging, FMCG cartons, or custom print solutions - our team is ready to help you bring your vision to life."*

---

### Form Fields & Validation (Optimized for B2B RFQs)
1. **Full Name (Required):**
   - Label: `FULL NAME *`
   - Type: `text`
   - Placeholder: `e.g. Rajesh Mehta`
2. **Company (Optional):**
   - Label: `COMPANY`
   - Type: `text`
   - Placeholder: `e.g. Sun Pharma Ltd.`
3. **Email Address (Required):**
   - Label: `EMAIL ADDRESS *`
   - Type: `email`
   - Placeholder: `you@company.com`
4. **Phone Number (Optional):**
   - Label: `PHONE NUMBER`
   - Type: `tel`
   - Placeholder: `+91 98765 43210`
5. **Industry (Dropdown):**
   - Label: `INDUSTRY`
   - Type: Select dropdown
   - Default: `Select Industry`
   - Options:
     - `Pharmaceutical`
     - `FMCG & Personal Care`
     - `Food & Beverage`
     - `Nutraceuticals`
     - `Other`
6. **Product Needed (Dropdown):**
   - Label: `PRODUCT NEEDED`
   - Type: Select dropdown
   - Default: `Select Product Needed`
   - Options:
     - `Carton Packaging`
     - `Sticker & Label`
     - `Promotional Print`
     - `Not Sure`
7. **Message / Requirements (Optional):**
   - Label: `MESSAGE / REQUIREMENTS`
   - Type: Multi-line textarea (3 rows, non-resizable)
   - Placeholder: `Tell us about your packaging requirements, quantities...`

---

### Submission & Interactive States
- **Normal State:**
  - Button text: `"Submit Enquiry"` with `<Send className="w-4 h-4" />`.
  - Button style: Full-width dark button `bg-slate-900 hover:bg-primary text-white uppercase tracking-widest text-xs font-bold py-3.5 rounded-lg shadow-md hover:shadow-lg transition-all`.
- **Loading State:**
  - Active when user submits; shows spinning SVG circle icon and label `"Sending..."`. Button is disabled with `disabled:opacity-70`.
- **Success State:**
  - Replaces the form with an emerald card:
    - Circular icon: `<CheckCircle className="w-8 h-8 text-emerald-600" />`
    - Header: `"Message Received"`
    - Description: *"Thank you for reaching out. Our team will respond within 24 business hours."*
  - Automatically clears all inputs and closes the modal after a 2.5-second delay.

---

## 4. Strategic Architecture: The Global Text Repetition Strategy & SEO Anchoring

### Context & Rationale
Because the global navigation, mobile drawer, footer, and quote modal are rendered across every single route in the application:
- **Mobile Menu:** `"EST. 1921 • 5TH GENERATION PRINTING"`
- **Footer Narrative:** *"Evolved over 5 generations into a complete, high-volume folding carton Print-Pack company serving pharmaceuticals and FMCG industries."*
- **Footer Badge:** `"EST. 1921 | AHMEDABAD"`
- **Modal Subtitle:** *"...pharma packaging, FMCG cartons, or custom print solutions..."*

### Strategic Copy Rule for Inner Pages (Services, Industries, Contact)
1. **SEO Strength Maintained:** The persistent presence of these keywords (1921, 5th Generation, Ahmedabad, Pharma, FMCG, Printing, Mono Cartons) in the global layout guarantees strong sitewide entity anchoring for search engines without manual stuffing.
2. **Elimination of Redundancy:** Inner pages (such as `/services` and `/contact`) do not need to repeatedly announce *"We are a 5th-generation company established in 1921"* in their main page heroes. The body content can focus directly on actionable specifications, machine tolerances, technical capabilities, and customer requirements, knowing that brand heritage is already firmly anchored in the global frame.
3. **Streamlined B2B Decision Flow:** By adding targeted dropdowns (`Industry` and `Product Needed`) to the Quote Modal, cognitive load is reduced for enterprise buyers. Instead of staring at an open-ended message box, visitors can quickly qualify their project with two quick clicks.

