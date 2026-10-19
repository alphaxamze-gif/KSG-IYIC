# KSG-IYIC Angular Scaffolding & Team Rules

This file is the shared source of truth for all contributors and AI coding assistants working on KSG-IYIC. Read it before creating or modifying files. Follow existing project conventions unless the team agrees to change them.

## 1. Project baseline

- Framework: Angular standalone components with Angular Router.
- Language: TypeScript with strict project settings.
- Styling: Tailwind CSS plus component-scoped CSS where needed.
- Tests: the repository's configured Angular unit-test runner (Vitest).
- Use the existing dependencies. Do not add a library without explaining why and getting team approval.
- Use semantic HTML, accessible controls, responsive layouts, and clear component names.
- Do not invent real-world facts, program details, people, partner relationships, contact information, or statistics. Ask for verified content or use clearly marked placeholders.

## 2. Folder responsibilities

```text
src/
  app/
    core/
      models/       # Shared TypeScript interfaces and types
      services/     # App-wide data and business services
    features/
      home/         # Home page
      about/        # About page
      programs/     # Youth skills programs page
      spaces/       # Youth spaces page
      gallery/      # Gallery page
      volunteer/    # Volunteer page
      contact/      # Contact page
    layout/
      main-layout/  # Shared site frame: header, routed page, footer
    shared/
      components/   # Reusable UI used by multiple features
    app.config.ts
    app.routes.ts
    app.ts
    app.html
  styles.css        # Global styles, Tailwind directives, design tokens
  index.html
public/
  assets/
    images/
      programs/
      spaces/
      team/
      partners/
```

Keep feature-specific components and styles inside their feature folder. Put a component in `shared/components` only when it is reused or clearly intended to be shared. Do not create duplicate headers, footers, buttons, cards, or navigation bars in individual pages.

## 3. Naming conventions

- Files: lowercase kebab-case, with clear role suffixes where appropriate: `program-card.ts`, `program-card.html`, `program-card.css`.
- Component classes: PascalCase nouns, e.g. `ProgramCard`, `MainLayout`.
- Selectors: `app-` prefix, e.g. `app-program-card`.
- Models/interfaces: descriptive singular names, e.g. `Program`, `Facility`, `Partner`.
- Routes: lowercase kebab-case, stable and human-readable.
- Use consistent relative import paths that match actual filenames and exported class names. Never import a made-up `.component.ts` suffix when the actual file uses another convention.

## 4. Component rules

Use standalone components and explicit imports. Each component should have one clear responsibility. Keep templates in the paired HTML file and styles in the paired CSS file, unless there is a clear reason not to.

A typical component follows the existing repository's filename convention:

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

- Import directives and pipes used by a template, including `RouterLink`, `RouterLinkActive`, and `RouterOutlet`.
- Use Angular template control flow (`@if`, `@for`) when suitable.
- Use stable tracking expressions with `@for`.
- Prefer signals or other clear Angular state patterns for interactive UI; avoid direct DOM manipulation.
- Use typed inputs/outputs and models. Avoid `any` unless justified.
- Do not put page-specific business logic into the header, footer, or root component.
- Use native elements before custom controls; buttons must be real `button` elements and navigation must be links.
- Every interactive control needs a working action, visible focus state, and accessible name.

## 5. Shared design system — agree before page work

All contributors must use the same design language. Do not independently invent colors, spacing, font sizes, border radii, shadows, button styles, or card styles.

Current project direction:
- Typeface: Inter.
- Primary accent: warm gold; use existing Tailwind `primary` tokens.
- Text/background: dark slate for strong text, white/light neutral backgrounds, muted slate for supporting text.
- Keep layouts spacious, readable, and professional; avoid unnecessary gradients, excessive animation, and inconsistent decoration.
- Reuse `.container-custom`, `.section-padding`, `.btn-primary`, and `.btn-outline` where they fit.
- Prefer mobile-first responsive styling. Test small phone, tablet, laptop, and wide desktop layouts.
- Do not introduce new global CSS rules for a one-off component. Use the component's CSS.
- If a new reusable token or pattern is needed, propose it to the team and update this file/global styles before applying it across pages.

Before the team builds all pages, agree on a small set of shared patterns: page heading, section heading, primary/secondary button, card, content container, spacing scale, and responsive breakpoints.

## 6. Routing and application shell

- `app.routes.ts` is the single source of truth for page routes.
- All public pages should render inside `MainLayout`, which composes the shared header, routed page content, and footer.
- Do not add another header/footer inside feature templates unless the page has a specific approved reason.
- Lazy-load page components using `loadComponent` where the current routing structure supports it.
- Every navigation link must point to a real route.
- Keep a clear route for the home page. Do not hide routing errors by silently redirecting every unknown URL unless the team explicitly chooses that behavior.

## 7. Assets and content

- Store public website images in `public/assets/images/`; URLs in templates/data should start with `assets/images/`.
- Use the exact filename and letter case that exists in the repository. Case mismatches can break deployment on Linux hosting.
- Organize images by purpose: `programs/`, `spaces/`, `team/`, `partners/`.
- Do not commit duplicate images, cache files, screenshots of the IDE, unrelated downloads, or generated build output.
- Do not delete an image until you have searched all code/data references and confirmed it is not used.
- Optimize images for the web; avoid huge originals when a reasonable compressed image is available.
- Provide meaningful `alt` text for informative images; use empty alt text for purely decorative images.
- Never invent image paths. Check that every path in `ContentService` exists under `public/assets/images/`.

## 8. Working with AI assistants

Every contributor using AI must include this file in the prompt/context and tell the assistant to follow it.

Use a task-specific prompt such as:

> Read `scaffolding.md` and inspect the existing files before changing anything. Implement only [specific task] in the existing Angular structure. Reuse the shared design system and existing components. Do not rename files, add dependencies, change another person's feature, or invent content. Include responsive and accessible behavior, update/add tests when appropriate, and list every file changed plus any checks not run.

AI assistants must:
- Inspect existing component, route, model, and style conventions before writing code.
- Make the smallest complete change for the requested task.
- Never overwrite another contributor's unfinished work without asking.
- Never add mock facts, fake metrics, invented contact details, or unverified partner claims.
- Never delete or rename files without explaining why and checking references.
- Report honestly whether build/tests were actually run; do not claim passing tests based only on reading code.
- Show a concise summary of files changed and manual verification steps.

## 9. Three-person team workflow

1. Agree on the page boundaries and the shared design patterns before splitting work.
2. Assign one feature/page per person; one person owns the shared layout/design tokens to avoid conflicting edits.
3. Create a separate Git branch for each task. Do not commit directly to `master`.
4. Before editing, pull the latest branch and inspect the current files.
5. Keep pull requests small and focused. Include screenshots for visual changes and tests for behavior changes.
6. Review for design consistency, mobile behavior, accessibility, route correctness, and duplicate components.
7. Run checks before merging:
   - `npm ci`
   - `npm test -- --watch=false` (if supported by the configured runner; otherwise use `npm test` and follow the runner's one-shot instructions)
   - `npm run build`
8. Resolve conflicts with the relevant contributor; do not blindly accept one side.
9. Merge only after review and a successful build.

## 10. Definition of done

A task is ready for review when:
- It follows the existing folder and naming conventions.
- It uses the shared design system and reusable components.
- It works at phone, tablet, and desktop widths.
- Links and buttons work; there are no placeholder “works!” templates in completed pages.
- Images load and have appropriate alternative text.
- Loading, empty, and error states are handled where relevant.
- Keyboard navigation and focus states are usable.
- Tests are updated where behavior changed.
- The contributor reports build/test results honestly and lists any remaining limitations.
