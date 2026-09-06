# Shree Harihar Printing Works LLP — Master Content & UI Documentation Index

Welcome to the comprehensive documentation suite for **Shree Harihar Printing Works LLP** (Ahmedabad, Gujarat, India).

This directory contains individual, highly detailed `.md` documentation files for every single page and global component in the website. Each document captures **every single word, heading, button, link, detailed visual description of images, and animation mechanics**.

---

## 📑 Documentation Index & Page Directory

| File Link | Page / Section | Route / Scope | Key Highlights Covered |
| :--- | :--- | :--- | :--- |
| **[01_NAVBAR_AND_FOOTER.md](file:///c:/Users/Admin/Desktop/shree-harihar-printing/docs/01_NAVBAR_AND_FOOTER.md)** | **Global Navbar, Footer & Quote Modal** | Global Layout (`app/layout.tsx`) | Sticky scroll transitions, Framer Motion sliding active/hover pills, mobile slide drawer, 4-column footer, and interactive pop-up RFQ modal. |
| **[02_HOME_PAGE.md](file:///c:/Users/Admin/Desktop/shree-harihar-printing/docs/02_HOME_PAGE.md)** | **Home Page** | `/` (`app/page.tsx`) | 3-slide auto hero carousel, quick certifications bar, 100-year legacy story with animated counting statistics, infrastructure video with 5 floating division cards, "What We Print" portfolio hover cards, 6 verified client testimonials, "What Sets Us Apart" 3D floating image layout, dual-row infinite client logo marquee, and full RFQ contact module. |
| **[03_ABOUT_PAGE.md](file:///c:/Users/Admin/Desktop/shree-harihar-printing/docs/03_ABOUT_PAGE.md)** | **About Us & 100-Year Heritage** | `/about` (`app/about/page.tsx`) | Video hero, foundational story with "Then & Now" dual-image overlapping collage, **complete 11-decade interactive centennial timeline (1921 to Today)** with dedicated historical/industrial imagery for every decade and milestone video modal, "Faces of the Factory" team banner with bold quote, 3x2 interactive Values & Blueprint Hover Wall, filterable client logo directory, and full infrastructure checklist. |
| **[04_SERVICES_PAGE.md](file:///c:/Users/Admin/Desktop/shree-harihar-printing/docs/04_SERVICES_PAGE.md)** | **Printing & Packaging Services** | `/services` (`app/services/page.tsx`) | Monochromatic press hero, 3 detailed alternating service rows (Carton Packaging, Labels & Stickers, Promotional Print Materials) with "Ideal For" tags & "Why it holds up" checklists, plus the 6-stage in-house production pipeline. |
| **[05_INDUSTRIES_PAGE.md](file:///c:/Users/Admin/Desktop/shree-harihar-printing/docs/05_INDUSTRIES_PAGE.md)** | **Industries Served** | `/industry` (`app/industry/page.tsx`) | Warehouse logistics hero, Sticky Side-Nav (Scrollspy) directory alongside scrolling Architectural Sector Cards for Pharma, FMCG, Food, and Nutra, plus the 'Catch-All' Industry Banner. |
| **[06_GALLERY_PAGE.md](file:///c:/Users/Admin/Desktop/shree-harihar-printing/docs/06_GALLERY_PAGE.md)** | **Work Gallery & Technical Plant** | `/gallery` (`app/gallery/page.tsx`) | Pure Image-Only architecture featuring a filterable masonry grid, sticky category filters, Verified Brand Production Proof banner, and a full-screen Interactive Image Lightbox for specimen inspection. |
| **[07_CONTACT_PAGE.md](file:///c:/Users/Admin/Desktop/shree-harihar-printing/docs/07_CONTACT_PAGE.md)** | **Contact Us & Plant Visit** | `/contact` (`app/contact/page.tsx`) | Consultation hero, direct telephone dispatch, official email, postal coordinates, interactive RFQ form with validation, B2B multi-industry dropdowns, and confirmation states, corporate facility visit invitation, and embedded interactive Google Maps frame. |

---

## 🎨 Global Design System & Technical Specifications

### 1. Color Palette
- **Primary Brand Red:** `#C62026` (`--color-primary`, `bg-primary`, `text-primary`, `border-primary`)
- **Primary Dark Red:** `#b11d22` (Used in gradients and hover states: `bg-primary-dark`, `hover:bg-primary-dark`)
- **Primary Light Red:** `#e03b41` (`border-primary-light/40`)
- **Dark Neutral Canvas:** `#020617` to `#0f172a` (`bg-slate-950`, `bg-slate-900`, `text-slate-900`)
- **Body Neutral Canvas:** `#ffffff` (`bg-white`), `#f8fafc` (`bg-slate-50`), `#f1f5f9` (`bg-slate-100`)
- **Border Accents:** `border-slate-200/80`, `border-slate-300`, `border-slate-800`

### 2. Typography Scale (Montserrat & Open Sans)
- **Heading Font:** Montserrat (`font-heading`, weights: `400`, `500`, `600`, `700`, `800`, `900`)
- **Body Font:** Open Sans (`font-sans`, weights: `300`, `400`, `500`, `600`, `700`)

This scale ensures your Montserrat headings command attention on large monitors without breaking to four lines on mobile screens, while your Open Sans body text remains perfectly legible.

| Element | Mobile (`< 640px`) | Tablet (`sm` / `md`) | Desktop (`lg` / `xl`) | Ultrawide 1920px (`2xl`) |
| --- | --- | --- | --- | --- |
| **H1 (Hero Title)** | `text-4xl` (36px) | `text-5xl` (48px) | `text-6xl` (60px) | `text-7xl` or `text-8xl` (72px+) |
| **H2 (Section Title)** | `text-3xl` (30px) | `text-4xl` (36px) | `text-5xl` (48px) | `text-5xl` (48px) |
| **H3 (Card Title)** | `text-xl` (20px) | `text-2xl` (24px) | `text-2xl` (24px) | `text-3xl` (30px) |
| **Hero Subtitle** | `text-base` (16px) | `text-lg` (18px) | `text-xl` (20px) | `text-xl` (20px) |
| **Body (Paragraphs)** | `text-sm` (14px) | `text-base` (16px) | `text-base` (16px) | `text-base` (16px) |
| **Eyebrow / Badges** | `text-[10px]` | `text-xs` (12px) | `text-xs` (12px) | `text-xs` (12px) |

*Implementation Note:* Always apply `leading-tight` or `leading-none` to your H1 and H2 tags, and `leading-relaxed` to your body paragraphs for premium readability.

### 3. Motion & Animation Standards
- **Component Transitions:** Powered by `framer-motion`
- **Standard Ease:** Cubic bezier `[0.22, 1, 0.36, 1]`
- **Interactive States:** Hardware-accelerated transforms (`hover:-translate-y-1`, `hover:scale-105`, `rotateY(360deg)`)
- **Marquee Engine:** CSS keyframes `animate-marquee` and `animate-marquee-reverse` with linear infinite timing
- **Number Counters:** Custom React hook interpolation running on `requestAnimationFrame` upon entering viewport

### 4. Section Padding (Macro Spacing)

This dictates the "breathing room" between major page sections (e.g., from the Hero to the Legacy section).

* **Vertical Padding (`py`):**
  * **Mobile:** `py-16` (64px) — Keeps mobile users from endless scrolling.
  * **Tablet (`md`):** `py-20` (80px)
  * **Desktop (`lg`):** `py-24` (96px)
  * **1920x1080 (`2xl`):** `py-28` or `py-32` (112px - 128px) — Massive screens need massive whitespace to look elegant.

* **Horizontal Padding (`px`):**
  * Your global container should always handle horizontal padding so content never touches the screen edge.
  * **Container Class:** `mx-auto w-full max-w-[90rem] px-4 sm:px-6 lg:px-8`

### 5. Gap & Element Spacing (Micro Spacing)

This defines the exact distance between related elements within a section (e.g., the gap between a section title, its description, and the grid of cards below it).

| Relationship | Tailwind Class | Pixel Equivalent |
| --- | --- | --- |
| **Eyebrow ➔ Main Title (H2)** | `mb-3` or `gap-3` | 12px |
| **Main Title (H2) ➔ Description** | `mb-6` or `gap-6` | 24px |
| **Description ➔ Action Button** | `mt-8` or `pt-8` | 32px |
| **Header Block ➔ Grid Content** | `mt-12 lg:mt-16` | 48px to 64px |
| **Grid Gap (Between Cards)** | `gap-6 lg:gap-10` | 24px to 40px |

### 6. Component Layout Template

Here is how that exact scale looks when mapped into a standard section wrapper in React:

```tsx
<section className="py-16 md:py-20 lg:py-24 2xl:py-32 w-full">
  <div className="mx-auto w-full max-w-[90rem] px-4 sm:px-6 lg:px-8">
    
    {/* Header Block */}
    <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12 lg:mb-16">
      <span className="font-heading text-xs font-bold text-primary uppercase tracking-widest mb-3">
        Eyebrow Title
      </span>
      <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-6">
        Main Section <span className="font-bold text-primary">Heading</span>
      </h2>
      <p className="font-sans text-sm md:text-base text-slate-600 leading-relaxed">
        This description sits perfectly spaced below the title.
      </p>
    </div>

    {/* Content Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
      {/* Cards go here */}
    </div>
    
  </div>
</section>
```
