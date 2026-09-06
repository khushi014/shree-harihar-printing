# Page Documentation: Contact Us, Plant Visit & Location (`/contact`)

> **Page Route:** `/contact`  
> **Source Component:** `app/contact/page.tsx` & `app/contact/ContactClientPage.tsx`  
> **Container:** `<div className="flex-1 w-full bg-slate-50 relative selection:bg-primary selection:text-white font-sans text-slate-800">`  

---

## 1. Executive Summary & Page Architecture

The Contact Page is the central inbound conversion touchpoint for enterprise inquiries, sample requests, and plant visit bookings. It combines digital submission with direct communication channels, corporate facility visit invitations, and an interactive Google Maps navigation frame.

### Page Flow
1. **Header Navigation** (Global component)
2. **Contact Hero Section** (Let's Talk About Your Next Print Run)
3. **Primary B2B Contact & RFQ Module** (Direct channels + Interactive Form)
4. **Plant Inspection & Facility Visit Invitation** (B2B facility tour invitation)
5. **Interactive Factory Location Map** (Embedded Google Maps frame pointing to the Miroli plant)
6. **Footer** (Global component)

---

## 2. Detailed Section-by-Section Content & Visual Specifications

---

### Section 1: Contact Hero (`ContactHeroSection.tsx`)

#### Purpose
Create an inviting, accessible environment encouraging immediate consultation.

#### Visual Background
- **Image URL:** `https://images.unsplash.com/photo-1596524430615-b46475ddff6e?auto=format&fit=crop&q=80&w=1600`
- **Detailed Visual Description:**
  - Modern, minimalist customer consultation suite within a manufacturing facility.
  - Architectural packaging samples, paper weight swatch fans, and structural prototypes organized on a conference table.
  - Soft corporate background with 20% opacity, rich full color, and black gradient overlay.

#### Hero Content
- **Main Heading:**
  - `Let's Talk About Your ` <br className="hidden sm:block" />
  - `<span className="font-bold text-primary">Next Print Run.</span>`
  - *Typography:* `font-heading font-light text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6`
- **Body Subtitle:**
  - *"Whether you need a quote, a question answered, or a facility visit arranged; our team is ready to help."*
  - *Typography:* `font-sans text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed`

#### Animations
- Framer Motion slide-up `initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}`. Subtitle delayed by 100ms.

---

### Section 2: Primary B2B Contact & RFQ Module (`ContactSection.tsx`)

#### Header Content
- **Heading:** `Get In ` `<span className="font-bold text-primary">Touch</span>`
- **Subtitle:** *"Whether you need pharma packaging, FMCG cartons, or custom print solutions - our team is ready to help you bring your vision to life."*

#### Left Column (Corporate Communication Channels)
Arranged with rounded icon badges and direct clickable links:

1. **Manufacturing Plant Address:**
   - **Icon:** `<MapPin className="w-5 h-5 text-primary" />` (Housed in `bg-slate-50 border border-slate-200 w-12 h-12 rounded-full`)
   - **Title:** `Plant Address`
   - **Postal Address:**
     - Line 1: `233/1, Miroli Village,`
     - Line 2: `Near Pirana Village, Daskroi,`
     - Line 3: `Ahmedabad – 382425, Gujarat`
   - **Action Link:** `VIEW ON GOOGLE MAPS` with `<ExternalLink className="w-3 h-3 ml-0.5" />` linking to `https://maps.google.com/?q=Shree+Harihar+Printing+Works+LLP+Ahmedabad` (Target `_blank`).

2. **Telephone Dispatch & Landlines:**
   - **Icon:** `<Phone className="w-5 h-5 text-primary" />`
   - **Title:** `Phone`
   - **Numbers:**
     - Landlines: `(079) 22932863 / 22931311`
     - Mobile / Sales Dispatch: `+91 74900 41921`
   - **Action Link:** `CALL NOW` linking directly to `tel:+917490041921`.

3. **Official Inquiries Email:**
   - **Icon:** `<Mail className="w-5 h-5 text-primary" />`
   - **Title:** `Email`
   - **Email Address:** `info@hariharprintpack.com`
   - **Action Link:** `SEND EMAIL` linking directly to `mailto:info@hariharprintpack.com`.

---

#### Right Column (Interactive B2B RFQ Form)
- **Form Heading:** `Send Us a ` `<span className="font-bold text-primary">Message</span>`

##### Form Inputs & Controls
```markdown
| Field Name | Type | Requirement | Visual Design & Styling | Options / Placeholder Example |
| :--- | :--- | :--- | :--- | :--- |
| **Full Name** | Text | **Required** (`*`) | Minimalist transparent underline: `border-b-2 border-slate-300 focus:border-primary` | `e.g. Rajesh Mehta` |
| **Company** | Text | Optional | Minimalist transparent underline: `border-b-2 border-slate-300 focus:border-primary` | `e.g. Sun Pharma Ltd.` |
| **Email Address** | Email | **Required** (`*`) | Minimalist transparent underline: `border-b-2 border-slate-300 focus:border-primary` | `you@company.com` |
| **Phone Number** | Tel | Optional | Minimalist transparent underline: `border-b-2 border-slate-300 focus:border-primary` | `+91 98765 43210` |
| **Industry** | Select Dropdown | Optional | Native styled select with custom chevron & hover states | Options: `Pharmaceutical`, `FMCG & Personal Care`, `Food & Beverage`, `Nutraceuticals`, `Other` |
| **Product Needed** | Select Dropdown | Optional | Native styled select with custom chevron & hover states | Options: `Carton Packaging`, `Sticker & Label`, `Promotional Print`, `Not Sure` |
| **Message / Requirements** | Textarea | **Required** (`*`) | 4-row non-resizable underline area: `border-b-2 border-slate-300 focus:border-primary` | `Tell us about your packaging requirements, quantities...` |
```

##### Submit Button States & Animations:
- **Idle State:**
  - Styling: `bg-slate-900 hover:bg-primary text-white font-heading text-sm font-bold uppercase tracking-widest px-8 py-4 flex items-center justify-center gap-2 transition-colors`
  - Text: `SUBMIT ENQUIRY` with trailing `<Send className="w-4 h-4" />` icon.
- **Submitting State:**
  - Spinner: `<svg className="w-4 h-4 animate-spin" />` with label `"Sending..."` and disabled opacity (`disabled:opacity-70`).
- **Success State (`submitted === true`):**
  - Displays centered confirmation box:
    - Large emerald icon: `<CheckCircle className="w-8 h-8 text-emerald-600" />`
    - Title: `"Message Received"` (`font-heading font-bold text-slate-900 text-2xl mb-3`)
    - Message: *"Thank you for reaching out. Our team will respond within 24 business hours."*
    - Automatically resets the form fields after 3,500ms.

---

### Section 3: Facility Visit Invitation (`FacilityVisitSection.tsx`)

#### Purpose
Eliminate perceived distance and risk by encouraging technical procurement directors to inspect the factory in person before placing multi-million carton orders.

#### Container Styling
- Card structure: `bg-slate-900 text-white rounded-sm overflow-hidden flex flex-col md:flex-row items-center shadow-lg relative`.

#### Content Block (Left / 60% Width)
- **Heading:**
  - `Prefer to See the ` `<span className="font-bold text-primary">Factory First?</span>`
  - *Typography:* `font-heading font-light text-3xl sm:text-4xl text-white mb-4`
- **Body:**
  - *"We're happy to host a facility visit for serious enquiries; see our production line in action before you commit."*
  - *Typography:* `font-sans text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl`
- **Call-to-Action Button:**
  - `BOOK A FACILITY VISIT` (with `<Factory className="w-5 h-5 mr-2" />` and `<ArrowRight className="w-4 h-4 ml-1" />`)
  - **Action Target:** `mailto:info@hariharprintpack.com?subject=Facility%20Visit%20Request`
  - **Button Styling:** `bg-primary hover:bg-primary-dark text-white font-heading text-sm font-bold tracking-widest uppercase px-8 py-4 transition-colors shadow-md hover:-translate-y-1 transform duration-300`.

#### Visual Block (Right / 40% Width)
- **Image URL:** `https://images.unsplash.com/photo-1581092446327-9b52bd1570c2?auto=format&fit=crop&q=80&w=1200`
- **Alt Text:** `"Plant manager and engineers reviewing equipment on the factory floor during a facility tour"`
- **Detailed Visual Description:**
  - Project manager and engineers in protective safety attire reviewing machinery tolerances on the production floor during a technical client plant audit.
  - Eliminates product shot repetition and emphasizes enterprise hospitality and transparent facility verification.
  - Full vivid color aesthetic with subtle hover scale (`transition-all duration-700 opacity-90 hover:opacity-100 hover:scale-105 filter saturate-105`).
  - Seamless edge blend via directional gradients (`bg-gradient-to-r from-slate-900 via-slate-900/60 to-transparent`).

---

### Section 4: Interactive Factory Location Map (`MapSection.tsx`)

#### Purpose
Verify physical geographic location in the industrial hub of Ahmedabad and provide one-click GPS route guidance.

#### Header Content
- **Heading:** `Find ` `<span className="font-bold text-primary">Us</span>`
- **Subtitle:** *"Visit our manufacturing facility in Ahmedabad for scheduled plant visits and consultations."*

#### Embedded Google Maps Frame
- **Frame Type:** Interactive responsive HTML5 `<iframe>` with lazy loading.
- **Dimensions:** `w-full h-[400px] sm:h-[500px]`.
- **Target Coordinates & Pin:**
  - Name: `Shree Harihar Printing Works LLP`
  - Address: `233/1, Miroli Village, Near Pirana Village, Daskroi, Ahmedabad – 382425, Gujarat, India`
- **Map Embed URL:**
  ```html
  https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Shree%20Harihar%20Printing%20Works%20LLP,%20233/1,%20Miroli%20Village,%20Near%20Pirana%20Village,%20Daskroi,%20Ahmedabad%20%E2%80%93%20382425+(Shree%20Harihar%20Printing%20Works)&t=&z=14&ie=UTF8&iwloc=B&output=embed
  ```
- **Interactive Capabilities:** Full pan, zoom, street view toggle, satellite view, and "Get Directions" navigation.
