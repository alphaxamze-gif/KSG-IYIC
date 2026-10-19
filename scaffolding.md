# KSG-IYIC Angular Scaffolding & Team Rules

This is the shared source of truth for contributors and AI coding assistants working on KSG-IYIC. Read it before creating or modifying files. Inspect the current implementation first and follow existing conventions unless the team agrees to change them.

## 1. Project baseline

- Framework: Angular standalone components and Angular Router.
- Language: TypeScript; keep types explicit and avoid `any` unless justified.
- Styling: Tailwind CSS plus component-scoped CSS where appropriate.
- Tests: use the test runner configured in package.json.
- Reuse existing dependencies. Do not add a package without explaining the need and getting team approval.
- Build responsive, accessible interfaces with semantic HTML.
- Never invent program details, names, partner relationships, contact information, or statistics. Ask for verified content or use clearly marked placeholders.

## 2. Folder responsibilities

```text
src/
  app/
    core/
      models/       # Shared TypeScript interfaces and types
      services/     # App-wide data and business services
    features/
      home/
      about/
      programs/
      spaces/
      gallery/
      volunteer/
      contact/
    layout/
      main-layout/  # Shared header, routed content, and footer
    shared/
      components/   # Reusable components
    app.config.ts
    app.routes.ts
    app.ts
    app.html
  styles.css
  index.html
public/
  assets/
    images/
      programs/
      spaces/
      team/
      partners/
```

Keep page-specific code inside its feature folder. Put a component in shared/components when it is reused or intentionally shared. Do not create duplicate headers, footers, buttons, cards, or navigation bars in individual pages.

## 3. Naming conventions

- File names: lowercase kebab-case, matching the repository's existing convention (e.g. program-card.ts, program-card.html, program-card.css).
- Component classes: PascalCase nouns, e.g. ProgramCard and MainLayout.
- Selectors: use the app- prefix, e.g. app-program-card.
- Models and interfaces: descriptive singular names, e.g. Program, Facility, Partner.
- Routes: lowercase kebab-case and human-readable.
- Imports must match real file paths and exported class names. Do not assume files end in .component.ts when this repository uses another pattern.

## 4. Component rules

- Use standalone components and explicitly import every directive, pipe, or component used by a template.
- Keep templates in paired HTML files and styles in paired CSS files unless there is a clear reason not to.
- Each component should have one clear responsibility.
- Use Angular template control flow (@if, @for) where appropriate, with stable tracking in repeated lists.
- Prefer signals or another consistent Angular state pattern for interactive UI. Avoid direct DOM manipulation.
- Use typed inputs, outputs, and models; avoid any unless justified.
- Use semantic HTML: navigation uses links; actions use buttons.
- Every interactive control must work, have an accessible name, and show a visible keyboard focus state.
- Do not put page-specific business logic into the root component, header, or footer.

Example component, adapted to the existing filename convention:

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  imports: [],
  templateUrl: './example.html',
  styleUrl: './example.css',
})
export class Example {}
```

## 5. Shared design system

All contributors must use the same design language. Do not independently invent colors, spacing, typography, border radii, shadows, button styles, or card styles.

Current direction:
- Typeface: Inter.
- Primary accent: warm gold using existing Tailwind primary tokens.
- Main text/background: dark slate and white/light neutral backgrounds; muted slate for supporting text.
- Keep layouts readable, spacious, and professional.
- Prefer mobile-first responsive styling and test phone, tablet, laptop, and wide desktop sizes.
- Reuse existing global utilities such as .container-custom, .section-padding, .btn-primary, and .btn-outline when appropriate.
- Avoid one-off global CSS. Put component-specific styles in component stylesheets.
- Discuss new global tokens and reusable patterns with the team before applying them across pages.

Before building pages independently, agree on shared patterns for page headings, section headings, buttons, cards, content containers, spacing, and responsive breakpoints.

## 6. Routing and layout

- app.routes.ts is the source of truth for routes.
- Public pages should render inside the shared main layout, which owns the header, routed page content, and footer.
- Do not add another header or footer inside a feature template without an agreed reason.
- Use lazy-loaded page components where consistent with the current routing setup.
- Every navigation link must point to a real route.
- Keep the home route explicit and test navigation. Do not silently hide broken URLs with redirects unless that behavior is intentional.

## 7. Assets and content

- Put public website images under public/assets/images/; use URL paths beginning with assets/images/ in templates and content data.
- Match exact filename casing. Case mismatches can fail on Linux hosting.
- Organize images by purpose: programs/, spaces/, team/, and partners/.
- Search code and content data for references before deleting an asset. Do not delete a file merely because it looks unused.
- Do not commit cache files, build output, unrelated downloads, duplicate images, or IDE screenshots.
- Prefer optimized web images over huge originals.
- Informative images need meaningful alt text; decorative images should have empty alt text.
- Verify every image path in the content service exists in the repository.

## 8. Rules for AI-assisted coding

Every contributor using an AI assistant must provide this file as context and ask the assistant to follow it.

Recommended task prompt:

> Read scaffolding.md and inspect the existing files before editing. Implement only [specific task] in the current Angular structure. Reuse shared components and design tokens. Do not rename files, add dependencies, change another person's feature, or invent content. Add or update tests where appropriate. At the end, list every changed file and state which checks you actually ran.

AI assistants must:
- Inspect current component, route, model, and style conventions before writing code.
- Make the smallest complete change that solves the task.
- Never overwrite another contributor's unfinished work without asking.
- Never add invented facts, fake metrics, contact details, or unverified partner claims.
- Never delete or rename files without explaining why and checking references.
- Report honestly whether build and tests were run. Do not claim tests passed if they were not executed.
- Summarize changed files, risks, and manual verification steps.

## 9. Three-person team workflow

1. Agree on page boundaries and shared design patterns before dividing work.
2. Assign one feature/page to each person. Assign one owner to shared layout and global design tokens to avoid conflicting edits.
3. Work on the agreed branch. Do not push directly to master.
4. Before editing, check Git status and pull the latest changes for that branch.
5. Keep changes focused. Include screenshots for visual changes and tests for behavior changes when possible.
6. Review for consistency, responsive behavior, accessibility, route correctness, and duplicate components.
7. Run project checks before review:
   - npm ci when setting up a clean checkout or installing from the lockfile
   - npm test, following the configured runner's one-shot instructions
   - npm run build
8. Resolve conflicts with the contributor who owns the affected files. Do not blindly accept one side.
9. Merge only after review and a successful build.

## 10. Definition of done

A task is ready for review when:
- It follows existing folder and naming conventions.
- It uses shared design tokens and reusable components.
- It works at phone, tablet, and desktop widths.
- All links and buttons work; completed pages do not contain placeholder “works!” content.
- Images load and have appropriate alternative text.
- Relevant empty, loading, and error states are handled.
- Keyboard navigation and focus states are usable.
- Tests are updated when behavior changes.
- The contributor reports the exact checks run and any remaining limitations.
