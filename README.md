<div align="center">

<!-- LOGO / TITLE BANNER -->
<h1>🌸 AuraBloom</h1>
<h3><em>Beauty that Radiates Naturally</em></h3>

<p>
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5"/>
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3"/>
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript"/>
  <img src="https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white" alt="Bootstrap"/>
  <img src="https://img.shields.io/badge/Font_Awesome-528DD7?style=for-the-badge&logo=fontawesome&logoColor=white" alt="Font Awesome"/>
  <img src="https://img.shields.io/badge/Google_Fonts-4285F4?style=for-the-badge&logo=google&logoColor=white" alt="Google Fonts"/>
</p>

<p>
  <img src="https://img.shields.io/badge/Subject-Web%20Development-f4b8b8?style=flat-square" alt="Subject"/>
  <img src="https://img.shields.io/badge/Pages-9-eed6d3?style=flat-square" alt="Pages"/>
  <img src="https://img.shields.io/badge/Responsive-Yes-e8b4b8?style=flat-square" alt="Responsive"/>
  <img src="https://img.shields.io/badge/Cruelty--Free-100%25-f4b8b8?style=flat-square" alt="Cruelty Free"/>
</p>

<br/>

> *A fully responsive, multi-page cosmetic e-commerce website built with pure HTML, CSS, and Vanilla JavaScript — crafted as a Web Development academic project.*

<br/>

</div>

---

## 📑 Table of Contents

- [✨ About the Project](#-about-the-project)
- [🌐 Live Pages Overview](#-live-pages-overview)
- [🎨 Design System](#-design-system)
- [🛒 Product Catalog](#-product-catalog)
- [⚙️ Features & Functionality](#️-features--functionality)
- [🗂️ Project Structure](#️-project-structure)
- [🛠️ Tech Stack](#️-tech-stack)
- [📱 Responsive Design](#-responsive-design)
- [🚀 Getting Started](#-getting-started)
- [📚 Subject Context](#-subject-context)
- [🙏 Acknowledgements](#-acknowledgements)

---

## ✨ About the Project

**AuraBloom** is a premium cosmetic brand website designed to showcase a fictional line of clean, cruelty-free skincare and makeup products. The project was created as part of a **Web Development** course to demonstrate mastery of front-end web development concepts including semantic HTML, custom CSS layout systems, responsive design, and dynamic interactivity with Vanilla JavaScript.

The brand identity is built around a **soft, pastel aesthetic** — warm pinks, nudes, and botanical greens — reflecting the brand's core promise:

> *"To empower individuals to embrace their natural beauty by providing clean, effective, and ethically-produced cosmetics that inspire confidence and radiance."*

### 🌿 Brand Values

| Value | Description |
|---|---|
| 🐰 **Cruelty-Free** | Never tested on animals. All supplier partnerships are held to the same standard. |
| 🌱 **100% Vegan** | No animal-derived ingredients across the entire product range. |
| 🔬 **Dermatologist Tested** | All formulas use naturally derived, rigorously tested ingredients. |
| ♻️ **Sustainable Packaging** | Recyclable materials used throughout the product line. |

---

## 🌐 Live Pages Overview

The website consists of **9 fully linked HTML pages**, each serving a distinct purpose:

| Page | File | Description |
|---|---|---|
| 🏠 **Home** | `index.html` | Hero carousel, category showcase, featured products, testimonials, newsletter sign-up |
| 🛍️ **Shop** | `products.html` | Full product grid with live filtering, search, and sort functionality |
| 🔍 **Product Detail** | `product-detail.html` | In-depth single product view |
| 💬 **About Us** | `about.html` | Brand story, timeline, key botanical ingredients, mission statement |
| 💡 **Skincare Tips** | `tips.html` | Morning/night skincare routines and skin-type guide |
| 📰 **Blog** | `blog.html` | Beauty journal and article listings |
| 📄 **Blog Post** | `blog-post.html` | Individual blog article view |
| ❓ **FAQ** | `faq.html` | Accordion-style frequently asked questions (products & shipping) |
| 📩 **Contact** | `contact.html` | Contact form with validation, info cards, and map placeholder |

---

## 🎨 Design System

AuraBloom uses a **custom CSS design system** (`css/style.css` + `css/layout.css`) built from scratch — no reliance on Bootstrap's grid or utility classes for layout.

### 🎀 Color Palette

| Variable | Hex | Usage |
|---|---|---|
| `--primary-color` | `#f4b8b8` | Soft Pink — buttons, accents, highlights |
| `--primary-hover` | `#e09898` | Deeper Rose — hover states |
| `--secondary-color` | `#eed6d3` | Nude / Beige — section backgrounds, footer |
| `--accent-color` | `#e8b4b8` | Rose / Peachy — decorative accents |
| `--bg-main` | `#fffcfb` | Very Light Nude — page background |
| `--bg-card` | `#ffffff` | Pure White — card backgrounds |
| `--text-main` | `#4a403f` | Soft Dark Brown — primary text |
| `--text-muted` | `#8b7d7b` | Muted Taupe — secondary text |

### 🔤 Typography

- **Font Family**: [Poppins](https://fonts.google.com/specimen/Poppins) — weights 300, 400, 500, 600, 700
- **Heading Style**: Semi-bold (`font-weight: 600`), `var(--text-main)` color
- **Body Style**: Regular weight, smooth line-height of `1.8` for readability

### 📐 Custom Layout System

A fully custom CSS Grid system replaces Bootstrap's column classes:

```
.grid-2  → 2-column grid
.grid-3  → 3-column grid
.grid-4  → 4-column grid (collapses to 2 on tablet, 1 on mobile)
```

Flexbox utility classes handle alignment and spacing:

```
.flex-row-center      → centered row
.flex-space-between   → spaced row
.custom-container     → max-width 1320px, centered with padding
```

### 🎛️ UI Components

- **Buttons**: Pill-shaped (`border-radius: 50px`) in two variants — `.custom-btn-primary` (filled pink) and `.custom-btn-outline` (bordered)
- **Cards**: `.product-card` — rounded corners, hover lift with `translateY(-5px)` and soft pink shadow
- **Timeline**: Left-bordered with pink dots — used on the About page
- **Badges**: Inline "Bestseller" and "New" labels on product cards

---

## 🛒 Product Catalog

AuraBloom features **8 unique products** across 4 categories:

### 💄 Makeup

| Product | Price |
|---|---|
| Velvet Rose Lipstick | Rs. 24,000 |
| Luminous Foundation | Rs. 38,000 |

### 🧴 Skincare

| Product | Price | Note |
|---|---|---|
| Hydrating Cloud Cream | Rs. 45,000 | ⭐ Bestseller |
| Sheer Glow SPF 50 | Rs. 32,000 | |

### 💇 Haircare

| Product | Price | Note |
|---|---|---|
| Silk Drops Hair Oil | Rs. 28,000 | 🆕 New |
| Volume Lift Shampoo | Rs. 22,000 | |

### 🌸 Fragrance

| Product | Price |
|---|---|
| Blush Eau De Parfum | Rs. 55,000 |
| Refreshing Body Mist | Rs. 18,000 |

---

## ⚙️ Features & Functionality

### 🛒 Dynamic Shopping Cart

The cart is powered entirely by **Vanilla JavaScript** with no external cart library:

- **Add to Cart** button transforms into an inline **+/− quantity toggle** on click
- A **live badge counter** in the navbar updates with every item addition or removal (with a subtle scale animation)
- Decreasing quantity to `0` restores the "Add to Cart" button
- Uses event **delegation** on `document.body` for efficient listener management

### 🔍 Product Filtering, Search & Sort

Available on the **Shop** (`products.html`) page:

- **Category Filters**: All · Makeup · Skincare · Haircare · Fragrance
- **Live Search**: Filters product titles in real-time as you type
- **Sort Dropdown**: Featured · Price: Low to High · Price: High to Low
- Filtering and searching work **simultaneously** — active category + search term are both applied
- Re-sorting re-appends DOM nodes in sorted order without a page reload

### 🌟 Scroll Animations

Smooth **fade-in reveal animations** are triggered using the native `IntersectionObserver` API:

- Elements with the `.animate-on-scroll` class start invisible and slide up into view as they enter the viewport
- `animation-delay` values are staggered on grid items for a cascading effect
- Each element is **unobserved** after animating to save resources

### ✉️ Contact Form Validation

The contact form on `contact.html` includes client-side validation:

- Checks that **Name**, **Email**, and **Message** fields are not empty
- Validates email format with a **regex pattern**
- Shows error or success feedback inline via a `#formAlert` div
- Auto-clears success messages after 5 seconds

### 📬 Newsletter Subscription

On the homepage:

- The subscribe button temporarily shows a **spinner icon** to simulate loading
- Replaced with a confirmation message: *"Subscribed! Welcome to the AuraBloom family."*
- Form resets and alert clears after 4 seconds

### 🪗 FAQ Accordion

Powered by **Bootstrap 5's Accordion JS component** (the only Bootstrap JS feature used):

- Two accordion groups: *Product & Ingredients* and *Shipping & Returns*
- One open at a time per group (`data-bs-parent` binding)
- Styled with custom colors to match the AuraBloom design system

---

## 🗂️ Project Structure

```
AuraBloom_COSMETIC-WEBSITE/
│
├── 📄 index.html           → Homepage
├── 📄 about.html           → Brand story & mission
├── 📄 products.html        → Full product catalog
├── 📄 product-detail.html  → Single product view
├── 📄 tips.html            → Skincare tips & routines
├── 📄 blog.html            → Blog / Journal listing
├── 📄 blog-post.html       → Individual blog post
├── 📄 faq.html             → FAQ accordion
├── 📄 contact.html         → Contact form & info
│
├── 📁 css/
│   ├── 🎨 layout.css       → Custom grid, flexbox, navbar, footer, cards
│   └── 🎨 style.css        → Color system, typography, animations, components
│
├── 📁 js/
│   └── ⚙️ main.js          → Cart logic, filtering, animations, forms
│
└── 📁 images/
    ├── 🖼️ banner1_pro_*.png          → Hero carousel banner
    ├── 🖼️ image1/2/3.png             → Carousel & section images
    ├── 🖼️ lipstick_*.png             → Velvet Rose Lipstick
    ├── 🖼️ foundation_*.png           → Luminous Foundation
    ├── 🖼️ moisturizer_*.png          → Hydrating Cloud Cream
    ├── 🖼️ sunscreen_*.png            → Sheer Glow SPF 50
    ├── 🖼️ hairoil_*.png              → Silk Drops Hair Oil
    ├── 🖼️ shampoo_*.png              → Volume Lift Shampoo
    ├── 🖼️ perfume_*.png              → Blush Eau De Parfum
    ├── 🖼️ bodymist_*.png             → Refreshing Body Mist
    ├── 🖼️ about_image_*.png          → About page image
    └── 🖼️ tips_image_*.png           → Skincare tips image
```

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **HTML5** | Semantic page structure for all 9 pages |
| **CSS3** | Custom design system, grid layout, animations, responsive breakpoints |
| **Vanilla JavaScript (ES6+)** | Cart logic, filtering/sorting, IntersectionObserver animations, form validation |
| **Bootstrap 5.3** | *Strictly limited* to Carousel (homepage) and Accordion (FAQ) JS components |
| **Font Awesome 6.4** | Icons used throughout (navigation, product categories, footer socials) |
| **Google Fonts — Poppins** | Primary typeface across the entire site |

> 💡 **Design decision**: Bootstrap's grid and utility classes were intentionally avoided in favour of a hand-crafted CSS layout system, demonstrating a deep understanding of CSS Grid, Flexbox, and custom properties.

---

## 📱 Responsive Design

AuraBloom is fully responsive across all screen sizes, handled through **custom CSS media queries** in `layout.css`:

| Breakpoint | Grid Behaviour |
|---|---|
| `> 991px` (Desktop) | `.grid-4` → 4 columns · `.grid-3` → 3 columns |
| `≤ 991px` (Tablet) | `.grid-4` and `.grid-3` collapse to **2 columns** |
| `≤ 768px` (Mobile) | All grids (`.grid-2`, `.grid-3`, `.grid-4`) become **single column** |

The navigation, product cards, hero section, and all content sections adapt gracefully to every device width.

---

## 🚀 Getting Started

AuraBloom is a **pure static website** — no build tools, no package manager, no server required.

### Running Locally

**1. Clone the repository**

```bash
git clone https://github.com/evotyindia/AuraBloom_COSMETIC-WEBSITE.git
```

**2. Open the project folder**

```bash
cd AuraBloom_COSMETIC-WEBSITE
```

**3. Launch in your browser**

- Simply open `index.html` directly in any modern web browser, **or**
- Use the **Live Server** extension in VS Code for hot-reload during development:
  - Install *Live Server* by Ritwick Dey from the VS Code Extensions Marketplace
  - Right-click `index.html` → *Open with Live Server*

> ✅ No `npm install`. No build step. No dependencies to configure. Just open and go.

### Browser Compatibility

| Browser | Supported |
|---|---|
| Google Chrome | ✅ |
| Mozilla Firefox | ✅ |
| Microsoft Edge | ✅ |
| Safari | ✅ |

---

## 📚 Subject Context

This project was submitted as part of the **Web Development** subject curriculum. It demonstrates the following learning outcomes:

| Concept | Implementation in AuraBloom |
|---|---|
| **Semantic HTML5** | Proper use of `<header>`, `<section>`, `<footer>`, `<nav>`, `<form>` |
| **CSS Custom Properties** | Full `:root` variable-driven design token system |
| **CSS Grid & Flexbox** | Entirely custom layout — no Bootstrap grid utilities used |
| **Responsive Web Design** | Mobile-first media queries for all layout components |
| **DOM Manipulation** | Cart toggle UI, dynamic product filtering and sorting |
| **Event Handling** | `click`, `input`, `change`, `submit` events across all interactive features |
| **Browser APIs** | `IntersectionObserver` for performant scroll-triggered animations |
| **Form Validation** | Regex-based email validation, live error and success messaging |
| **Multi-page Architecture** | 9 interconnected pages with consistent navigation and shared footer |
| **Third-party CDN Integration** | Bootstrap (JS only), Font Awesome, Google Fonts — CDN-linked |

---

## 🙏 Acknowledgements

- [**Bootstrap 5**](https://getbootstrap.com/) — For the Carousel and Accordion JS components
- [**Font Awesome**](https://fontawesome.com/) — Icon library used throughout the UI
- [**Google Fonts**](https://fonts.google.com/specimen/Poppins) — Poppins typeface by Indian Type Foundry
- **Design Inspiration** — Clean beauty brands like Glossier, Rare Beauty, and Summer Fridays for the soft pastel aesthetic direction

---

<div align="center">

<br/>

*Made with 🌸 and a lot of CSS variables*

**© 2026 AuraBloom Cosmetics — Web Development Project**

</div>
