KSG-IYIC – Project Scaffolding & Team Standards
This is the single source of truth for the entire team and any AI assistants.
All code, design, and features must follow this document so the final product looks and behaves consistently.

1. Project Overview
Name: KSG-Isiolo Youth Innovation Centre (KSG-IYIC)

Purpose: Official website for the youth empowerment hub in Isiolo County, Kenya.

Goal: Clean, modern, consistent Angular website that replaces the previous template-based version.
Core pages that must exist:

Home
About Us
Youth Skills Programs
Hub Youth Spaces
Gallery
Become a Volunteer
Contact Us


2. Tech Stack (Do not change without team agreement)













































LayerChoiceNotesFrameworkAngular (standalone components)Current version in package.jsonStylingTailwind CSS v3 + plain CSSNo SCSSUI ComponentsCustom + Tailwind utilitiesNo Bootstrap, no Angular MaterialState / DataContentService (static for now)All content lives hereRoutingAngular Router (lazy loaded)See app.routes.tsIconsInline SVG or simple emojiKeep lightFontInter (Google Fonts)Already linked in index.html

3. Design System (Must be followed by everyone)
3.1 Colors
Defined in tailwind.config.js:
JavaScriptprimary: {
  DEFAULT: '#C9A227',   // Main gold
  dark:    '#A6851F',
  light:   '#E8D48B',
},
dark: {
  DEFAULT: '#1F2937',
  light:   '#374151',
}
Usage rules:

Primary gold (bg-primary, text-primary) → buttons, accents, hover states, links
Dark (bg-dark, text-dark) → headings, footer background
Gray scale from Tailwind for body text and secondary elements
Never invent new brand colors

3.2 Typography

Font family: Inter, system-ui, sans-serif
Headings: bold / semibold
Body: regular, good line-height
Use Tailwind text size utilities (text-sm, text-base, text-lg, text-xl, text-2xl, text-3xl, text-4xl)

3.3 Spacing & Layout
Use these reusable classes (already in src/styles.css):

.container-custom → max-w-7xl + horizontal padding
.section-padding → py-16 md:py-24
.btn-primary → gold filled button
.btn-outline → gold outlined button

Always wrap page sections with:
HTML<section class="section-padding">
  <div class="container-custom">
    ...
  </div>
</section>
3.4 Border Radius & Shadows

Cards & buttons: rounded-lg or rounded-xl
Prefer subtle shadows: shadow-sm / shadow-md

3.5 Buttons
Only two main button styles are allowed:

.btn-primary → filled gold
.btn-outline → outlined gold

Do not create new button variants unless the whole team agrees.

4. Folder Structure (Do not invent new top-level folders)
textsrc/app/
├── core/
│   ├── models/               ← All interfaces live here
│   └── services/
│       └── content.service.ts
├── shared/
│   └── components/           ← Truly reusable UI pieces
│       ├── header/
│       ├── footer/
│       ├── program-card/
│       ├── facility-card/
│       ├── team-card/
│       └── ...
├── features/                 ← One folder per page
│   ├── home/
│   ├── about/
│   ├── programs/
│   ├── spaces/
│   ├── gallery/
│   ├── volunteer/
│   └── contact/
└── layout/
    └── main-layout/          ← Header + <router-outlet> + Footer
Rules:

Page-specific code stays inside its features/xxx folder
Shared UI goes into shared/components
Data models and the ContentService stay in core


5. Data Layer
All static content must come from ContentService.
Available methods:

getPrograms()
getProgramsByCategory(category)
getFacilities()
getTeam()
getPartners()

Do not hard-code arrays of programs, team members, or facilities inside components.

If you need new data, add it to the ContentService and the corresponding model.
Models (already defined)

Program
Facility
TeamMember
Partner


6. Routing (Do not change paths)





































PathComponent/ or /homeHome/about-usAbout/youth-skills-programsPrograms/ksg-iyic-hub-youth-spacesSpaces/ksg-iyic-galleryGallery/become-a-volunteerVolunteer/contact-usContact
All pages are children of MainLayoutComponent so Header and Footer appear on every page.

7. Component Naming Convention
Angular is generating short file names in this project:
textheader/
  header.ts
  header.html
  header.css
Accept this convention.

When importing, use the actual generated names.

8. Required Features per Page
Home

Hero section with strong headline + CTA
Core pillars / value propositions
Impact stats (counters)
Featured programs preview
Join / newsletter form
Partners logos

About

Centre story / background
Mission, Vision, Values
Impact statistics
Team members grid

Programs

Filterable list by category
Program cards (image, title, duration, category, rating)
"All Programs" + category filters

Spaces

Grid of the 5 facility cards
Title + short description + image for each

Gallery

Responsive image grid
Simple lightbox (optional but recommended)

Volunteer & Contact

Clean forms
Use Angular Reactive Forms or Template-driven forms
Clear success / error states


9. Team Work Division





















PersonResponsibilityLeadLayout, Header, Footer, Home, ContentService, mergesPerson 2About page + Spaces page + Team cardsPerson 3Programs page + Gallery + Volunteer + Contact forms
Work on feature branches and open Pull Requests.

10. Coding Rules for Consistency

Always use Tailwind utilities instead of custom CSS whenever possible.
Never introduce new global CSS classes without updating this document and styles.css.
Reuse existing components (cards, buttons, section titles) instead of duplicating markup.
Keep components standalone.
Images go into src/assets/images/{hero,programs,spaces,team,gallery,partners}.
Mobile-first: design for mobile, then enhance for desktop.
No Bootstrap, no Angular Material, no SCSS.


11. Definition of Done for any page
A page is considered done when:

 It uses the shared Header + Footer via MainLayout
 It follows the color, typography and spacing system above
 Content comes from ContentService (where applicable)
 It is fully responsive
 It has no console errors
 It matches the visual language of the other pages


12. Future Improvements (Do not implement yet unless agreed)

Real backend / CMS
Admin panel
Authentication
Blog / News section
Advanced animations


Last updated: 2026-10-19

Maintained by: Project Lead + Team
If anything in this document needs to change, open a discussion or PR first so the whole team stays aligned.