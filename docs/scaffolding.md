# KSG-IYIC – Project Scaffolding & Team Standards

> **This is the single source of truth** for the entire team and any AI assistants.
> All code, design, and features must follow this document so the final product looks and behaves consistently.

---

## 1. Project Overview

**Name:** KSG-Isiolo Youth Innovation Centre (KSG-IYIC)  
**Purpose:** Official website for the youth empowerment hub in Isiolo County, Kenya.  
**Goal:** Clean, modern, consistent Angular website that replaces the previous template-based version.

**Core pages that must exist:**
- Home
- About Us
- Youth Skills Programs
- Hub Youth Spaces
- Gallery
- Become a Volunteer
- Contact Us

---

## 2. Tech Stack (Do not change without team agreement)

| Layer              | Choice                          | Notes                                      |
|--------------------|---------------------------------|--------------------------------------------|
| Framework          | Angular (standalone components) | Current version in package.json            |
| Styling            | Tailwind CSS v3 + plain CSS     | **No SCSS**                                |
| UI Components      | Custom + Tailwind utilities     | No Bootstrap, no Angular Material          |
| State / Data       | ContentService (static for now) | All content lives here                     |
| Routing            | Angular Router (lazy loaded)    | See `app.routes.ts`                        |
| Icons              | Inline SVG or simple emoji      | Keep light                                 |
| Font               | Inter (Google Fonts)            | Already linked in `index.html`             |

---

## 3. Design System (Must be followed by everyone)

### 3.1 Colors

Defined in `tailwind.config.js`:

```js
primary: {
  DEFAULT: '#C9A227',   // Main gold
  dark:    '#A6851F',
  light:   '#E8D48B',
},
dark: {
  DEFAULT: '#1F2937',
  light:   '#374151',
}