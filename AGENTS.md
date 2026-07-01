# Webflow → Next.js Pixel-Perfect Conversion — Agent Prompt

Use this prompt with your coding agent (Claude Code, Antigravity, Cursor, etc.).
Fill in the bracketed values before running.

---

## PROMPT (copy everything below the line)

---

You are converting a **Webflow HTML export** into a **production-grade Next.js 15 (App Router) application**, preserving **pixel-perfect visual fidelity** while gaining full Next.js capabilities (SSR/SSG, routing, image optimization, metadata, code-splitting).

### Source
- Webflow export location: `[./pages/]`
- Pages included: `[list .html files, e.g. index.html, about.html, pricing.html, blog/*.html]`
- Contains Webflow CMS collections?: `[yes/no — list collection names]`
- Contains Webflow forms?: `[yes/no — list form names + current action endpoints]`
- Contains Webflow native interactions/animations (IX2)?: `[yes/no — describe key ones: hover states, scroll-triggered, page-load]`

### Hard requirements (non-negotiable)

1. **Pixel-perfect fidelity**: Every page's computed layout, spacing, typography, colors, and breakpoints must match the Webflow export exactly at 375px, 768px, 992px, and 1440px+ viewports. Do not "clean up" or simplify Webflow's CSS structure — port it faithfully first, optimize after.
2. **Preserve Webflow's CSS as the single source of truth initially**: Copy `webflow.css` and the site's custom CSS into `/app/globals.css` (or a scoped stylesheet) unmodified in the first pass. Do NOT rewrite it into Tailwind or CSS Modules unless explicitly instructed in a later phase — rewriting during conversion is the #1 cause of visual drift.
3. **Keep Webflow's class names on all elements** (`w-container`, `w-nav`, `[custom classes]` etc.) so the ported CSS applies without edits.
4. **Componentize by section, not by page**: Extract repeated blocks (navbar, footer, hero, CTA sections, cards) into `/components/*.tsx` and reuse across routes — this is the main structural win over static HTML.
5. **Convert every page into an App Router route**: `index.html` → `app/page.tsx`, `about.html` → `app/about/page.tsx`, CMS collection pages → `app/[collection]/[slug]/page.tsx` with `generateStaticParams`.

### Data handling rule (no hardcoded/static data in components)

Webflow bakes content (text, prices, testimonials, FAQ items, nav links, card lists, etc.) directly into the HTML. Do **not** carry that pattern into React by hardcoding the same strings/arrays inline inside `.tsx` files. Instead:

- **Extract every repeatable/structured content block** (nav links, footer links, pricing tiers, testimonials, FAQ entries, team members, feature lists, CMS collection items, etc.) into a corresponding JSON file under `/data/*.json` (e.g. `/data/nav.json`, `/data/pricing.json`, `/data/testimonials.json`, `/data/faq.json`).
- Components import and map over this JSON — never inline the array/object of content directly in the component file.
- One-off page copy (a single unique heading/paragraph that appears nowhere else) can stay inline as JSX text — this rule targets **structured, list-like, or reused data**, not every string on the page.
- If a block is Webflow CMS-driven, its JSON file should mirror the CMS collection's field structure (same keys as the Webflow collection fields) so it's a drop-in replacement if the data later moves to a real database/CMS.
- Add a short comment at the top of each JSON file noting which Webflow page/component it was extracted from.
- Output a `/data/README.md` listing every JSON file created and which component(s) consume it.
- **Folder structure requirement**: create a top-level `/data` folder. Inside it, create **one JSON file per page** (e.g. `/data/home.json`, `/data/about.json`, `/data/pricing.json`, `/data/blog-post.json`) holding that page's structured content (all its repeated blocks — pricing cards, testimonials, FAQ, etc. — nested inside that one page-level file, unless a block is shared across multiple pages, e.g. nav/footer, in which case it stays in its own shared file like `/data/nav.json` / `/data/footer.json` instead of being duplicated per page).

### Detailed methodology — HOW the AI should actually execute each phase

This section tells the agent the concrete technique to use, not just the goal. Follow it step by step.

#### Phase 1 — Inventory (how to build it, not just what to list)

- Open every `.html` file in the export and record: `<title>`, meta tags, all `<link rel="stylesheet">` and `<script>` sources, and every top-level `<section>`/`<div class="...">` block in `<body>`.
- To find **repeated sections** across pages (candidates for componentization), compare the outer `class` signature of each top-level block between pages — if the same class combination (e.g. `class="navbar w-nav"`) appears in `index.html`, `about.html`, and `pricing.html`, that's one component, not three.
- To find **structured/repeated data** (candidate for `/data/*.json`), look for sibling elements with identical class names and only text/attribute differences (e.g. 6 `<div class="pricing-card">` blocks with different price/title/feature text) — each set becomes one JSON array.
- Output the inventory as a markdown checklist with three columns: `Page/Section | Component name it maps to | Data file it needs (if any)`.

#### Phase 2 — Extract data (how to pull it out correctly)

- For each repeated block found in Phase 1, manually read the text/attribute values out of the HTML (don't guess or paraphrase copy — copy it verbatim, including punctuation and casing) and write it into a JSON array of objects, one object per repeated instance.
- Keep the JSON key names descriptive and consistent with what the component will need as props (e.g. `{ "title": "...", "price": "...", "features": ["...", "..."], "ctaLabel": "...", "ctaHref": "..." }`).
- For images inside data (e.g. a testimonial avatar), store the **original Webflow asset path** as the value — this gets resolved to `next/image` `src` when the component is built, not hardcoded per-instance in JSX.
- If Webflow used real CMS collections (visible via `/cms/` export structure or `w-dyn-list`/`w-dyn-item` classes), export those as JSON matching the CMS field names 1:1, since that's the schema you'd migrate to a real database later.

#### Phase 3 — Scaffold (how to set up without breaking fidelity)

- Create the Next.js project (`npx create-next-app@latest` with TypeScript, App Router, no Tailwind unless the site is being rebuilt in Tailwind later).
- Copy the entire Webflow `css/`, `images/`, `fonts/`, and `js/` (for anything not being reimplemented) folders into `/public/` first, unmodified, so all relative asset paths keep working while you convert incrementally.
- Paste Webflow's compiled CSS file(s) into `app/globals.css` as-is. Do not reformat, minify, or reorder it — a diff tool later needs to be able to trace any visual bug back to a specific untouched rule.
- Identify font `<link>` tags in the original `<head>`; replace each with the matching `next/font/google` import (same family/weight/style) or, for custom/self-hosted fonts, `next/font/local` pointing at the copied font files.

#### Phase 4 — Build shared layout (how to split without duplicating)

- Take the navbar and footer markup from any one page (they should be identical across pages per Phase 1's check), turn each into its own component (`components/Navbar.tsx`, `components/Footer.tsx`), and have each map over its JSON data file for links/labels.
- Place both in `app/layout.tsx` wrapping `{children}`, and delete the duplicated navbar/footer markup from what will become each page's content.

#### Phase 5 — Convert pages (how to translate HTML → JSX correctly)

For each page, work section by section, not the whole file at once:
1. Copy one section's HTML block.
2. Convert HTML attributes to JSX syntax (`class` → `className`, `for` → `htmlFor`, self-close void elements, camelCase inline `style` objects if any inline styles exist).
3. Replace `<img>` with `<Image>` — read the actual rendered width/height from the Webflow export's CSS or inline attributes and set them explicitly (`next/image` requires this to prevent layout shift).
4. Replace any repeated sibling markup (identified in Phase 1) with a `.map()` over the matching `/data/*.json` array, extracting that block into its own small component if it's reused elsewhere too.
5. Replace internal `<a href="about.html">` with `<Link href="/about">`.
6. Leave Webflow's original class names on every element untouched so `globals.css` styles it identically — do not rename classes during this pass.
7. After finishing a page, do a manual side-by-side check (or automated screenshot diff, see verification below) against the original `.html` file before moving to the next page.

#### Phase 6 — Wire up dynamic features (how to reimplement, not fake)

- **Forms**: read the original `<form>`'s field `name` attributes and its `action`/`data-name`; rebuild as a controlled component with `useState` per field, and either POST to the same original endpoint or a new `app/api/<form-name>/route.ts` handler that forwards to it.
- **Animations**: for each Webflow interaction identified in the source inventory, inspect the exported `webflow.js` for the relevant `data-w-id` interaction definition (duration, easing, trigger) if present, and rebuild it with matching timing using Framer Motion (`whileHover`, `whileInView`) or CSS transitions — match numbers, don't approximate "roughly similar."
- **CMS collections**: build the route as a Server Component that imports the corresponding `/data/*.json` (or fetches from a real backend if one exists), and use `generateStaticParams` to pre-render each item's page at build time.

#### Phase 7 — Verification (how to confirm pixel-perfect, not just "looks close")

- If Playwright is available in the project, write a small script that opens both the original `.html` file (via `file://`) and the new Next.js route at the same viewport widths (375/768/992/1440) and takes screenshots of each into `/verification/` for manual or pixel-diff comparison.
- Cross-check computed font-size, line-height, and spacing using browser devtools or a script reading `getComputedStyle` on matching elements in both versions, for at least the hero and one repeated-card component.
- Run Lighthouse against the new page and note the score in `CONVERSION_NOTES.md` — this is where the migration should show a real, measurable win over the Webflow-hosted original.
- Grep the final `/app` and `/components` directories for any array/object literal with 3+ similar-shaped entries — that's a signal structured content was left hardcoded instead of moved to `/data`.

### Next.js features to implement (this is the point of migrating)

- **`next/image`** for every `<img>` — preserve exact width/height/aspect ratio from the Webflow export to avoid layout shift; use `priority` on above-the-fold hero images only.
- **`next/font`** for any Google Fonts or custom fonts Webflow loaded via `<link>` — replace the CDN `<link>` tags with `next/font/google` or `next/font/local`.
- **`next/link`** for all internal navigation (replace raw `<a href>` between site pages).
- **Metadata API** (`generateMetadata` or static `metadata` export) — port Webflow's per-page `<title>`, meta description, and Open Graph tags exactly.
- **Static generation (`generateStaticParams` + `dynamic = 'force-static'`)** for CMS-driven pages instead of Webflow's CMS runtime.
- **Route groups / layouts** — shared navbar+footer go in `app/layout.tsx`, not duplicated per page.

### Handling things Next.js/React genuinely can't do 1:1 (fallback rules)

Webflow relies on runtime jQuery-driven behavior (`webflow.js`, IX2 interactions, CMS filtering) that has no direct React equivalent. When you hit one of these, don't silently drop the feature or fake it with a `<div>` — follow this fallback order:

| Webflow feature | Fallback strategy |
|---|---|
| IX2 scroll/hover animations | Reimplement with Framer Motion or CSS `@keyframes`/`:hover` — match timing/easing values from the exported `data-w-id` JSON in `webflow.js` if inspectable |
| Webflow native forms | Rebuild as a controlled React form; wire to the same backend endpoint or a new API route (`app/api/[name]/route.ts`) |
| CMS collection lists/filters | Move data into a real data source (Supabase/CMS/JSON) and render via Server Components + `generateStaticParams` |
| Webflow interactions tied to `data-wf-*` attributes | Strip the attribute, reimplement the described behavior in React state — note in code comments which Webflow interaction it replaces |
| Third-party embeds (Webflow embed blocks) | Port the raw embed code into a Client Component using `dangerouslySetInnerHTML` only if no safer option exists |

If a feature truly cannot be replicated pixel-for-pixel (e.g., a Webflow-specific micro-interaction), **stop and ask me** rather than approximating it silently.

### Process (work in this order, confirm after each phase)

1. **Inventory**: List every page, every reusable section, every CMS collection, every form, **and every static/structured data block found** (nav, footer, cards, pricing, testimonials, FAQ, etc.). Output as a checklist before writing code.
2. **Extract data first**: Before building components, pull all structured content identified above into `/data/*.json`. This happens *before* Phase 3 so components are written against the JSON from the start, not retrofitted later.
3. **Scaffold**: Set up Next.js 15 App Router project structure, install fonts, copy CSS assets into `/public` and `/app/globals.css`.
4. **Build shared layout**: Navbar + footer as components in `app/layout.tsx`, sourcing links/labels from `/data/nav.json` and `/data/footer.json`.
5. **Convert pages one at a time**, in this order: `[home] → [most-visited pages] → [rest]`. Each component pulls its content from the matching `/data/*.json` file — no inline arrays/objects of content. After each page, report a visual diff summary (what matches exactly, what needed a fallback).
6. **Wire up dynamic features**: forms, CMS-backed routes, animations.
7. **Final pass**: Lighthouse check (should beat the original Webflow site on performance given `next/image` + code splitting), broken link check, responsive check across breakpoints, and confirm no structured content was left hardcoded (grep for repeated string patterns in `.tsx` files as a sanity check).

### Deliverable
A working Next.js 15 project where every route visually matches the corresponding Webflow HTML page, all structured content lives in `/data/*.json` (not hardcoded), plus a short `CONVERSION_NOTES.md` listing every place a fallback strategy was used and why.

