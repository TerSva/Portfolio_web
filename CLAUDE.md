# Portfolio Web — CLAUDE.md

UX/UI portfolio for Tereza Britta Švanda. Eleventy (11ty v3) static site, Nunjucks
templates, plain hand-written CSS (no framework, no build step for CSS/JS).
Live branch: `uxportfolio`.

Read this file fully before touching anything. It exists so a fresh session
can pick up exactly where the last one left off, with zero re-discovery.

## 0. The one rule that matters most

**Never `git commit` or `git push` without Tereza's explicit go-ahead in the
same conversation.** This is a standing rule she set explicitly mid-project
("okej tak od teď nebudeš nic commitovat a pushovat beze mě"). It applies to
every change, however small or "obviously fine."

If a Stop-hook fires with an "uncommitted changes" reminder, **always relay
it to her** ("there are still uncommitted changes — let me know if you want
me to push") but **never act on it unilaterally**. She confirmed this
explicitly: relay it, don't push on your own.

She reviews visual work via **standalone offline HTML files**, not Claude
artifacts — see §5 below. Don't default to the Artifact tool for this project.

## 1. Project structure

```
src/
  _includes/
    base.njk          shared shell: header/nav, lang switch, footer,
                       dot-navigation, lightbox JS/overlay, page-transition JS
    case-study.njk     shared case-study frame (cover/title/meta/links/outcome),
                       wraps `layout: base.njk`. A project page supplies a
                       `caseStudy` object in front matter + its narrative
                       sections as page content.
  work/
    index.njk           Work index (project cards — Enow, Spotify, Venek, PULS)
    enow/index.njk       Enow case study (EN) — shipped, live
    spotify/index.njk    Spotify case study (EN) — shipped, live
    venek/index.njk      Galerie Venek case study (EN) — shipped, live
    puls/index.njk       PULS case study (EN), `bodyClass: puls-theme` — shipped, live
  de/                    German mirror of everything under /, incl. work/
    work/enow/index.njk, work/spotify/index.njk, work/venek/index.njk, work/puls/index.njk
  about/, cv/, cv/print/, contact/   plus their /de/ counterparts
  assets/
    enow/, spotify/, venek/, puls/, about/, cv/     per-project image assets
  style.css              single global stylesheet, all pages share it

.eleventy.js              input=src, output=_site, includes=_includes,
                           njk for html+markdown, GH Pages path-prefix
                           transform via ELEVENTY_PATH_PREFIX env var
package.json               scripts: build / serve / debug (eleventy --serve)

index.html                 SEPARATE, framework-free single-page "art portfolio"
                            (illustration/personal work) — NOT an Eleventy
                            template, just a static file passthrough-copied to
                            `/art/`. See §11 — it has its own structure, CSS
                            and JS entirely independent of src/style.css.
```

No CSS/JS bundler. `style.css` and everything in `src/assets/` are copied
through as passthrough. Adding a new image just means dropping it in
`src/assets/<project>/` with a clean, hyphenated, space-free filename.

## 2. Case-study page anatomy

Every case study is one `.njk` file with:
- Front matter: `layout: case-study.njk`, `title`, `deUrl`/`enUrl` (lang-switch
  target), `activeNav: work`, a `dots` array (id/label/zone per section — the
  right-edge scroll-spy dots), and a `caseStudy` object:
  - `projectTitle` — small eyebrow line above the H1
  - `statement` — the actual H1 (the bold hook/thesis)
  - `meta` — array of `{label, value}` (Scope/Role/Platform/Year etc.)
  - `links` — array of `{href, label}` (e.g. Prototype/Figma link)
  - `outcome` — the Outcome Preview paragraph shown right under the header
- Body content: a sequence of `<section class="cs-section">` blocks, almost
  always structured as `cs-chapter-grid` > `cs-chapter-heading h2` +
  `cs-chapter-content`, except the Hook/intro section which uses
  `cs-intro-copy` + `cs-hero-visual` instead.

**Front-matter strings (`projectTitle`, `statement`) are Nunjucks `{{ }}`
interpolations and are autoescaped** — if you need a non-breaking space in
one of these, you MUST use the literal Unicode U+00A0 character directly in
the YAML string, not the `&nbsp;` HTML entity (the entity renders as visible
literal text). Everywhere else — `<h2>`, `.cs-subtitle`, `.cs-mini-head`,
any literal text in the page body — `&nbsp;` the HTML entity is fine, since
that's raw template body text, not passed through `{{ }}`.

### The 10-part skeleton (adapt per project, don't force it)
Hook → Intro/Brief → Empathize → Define → Ideate → Prototype → Test →
(AI-use disclosure) → Reflection. Enow used the full shape including a
persona/journey map; Spotify (a solo heuristic-evaluation project) dropped
persona/journey-map sections that didn't apply — **never force the skeleton
onto content that doesn't have it**, reshape it instead.

## 3. Design tokens (`src/style.css`)

Light case-study palette (`:root`):
```
--cs-paper:#E3E9E2  --cs-surface:#F7F8F4  --cs-border:#C9D6CC
--cs-ink:#0A4B42    --cs-muted:#477269    --cs-copper:#A64F24
--cs-gold-ui:#8C7800  --cs-gold-fill:#FFD700
--font-d: 'DM Serif Display'   (display/serif headings)
--font-s: 'Space Grotesk'      (body sans)
--font-m: 'IBM Plex Mono'      (labels/eyebrows/meta, uppercase+tracked)
--measure:42rem  --intro-measure:58rem  --media-measure:72rem
--canvas:min(88vw,78rem)  --gutter:clamp(1.25rem,5vw,4rem)
```
Dark palette (prototype/reflection chapters, footer, nav) overrides `--cs-*`
inside a scoped block: paper `#001F1C`, ink `#F5F5DC`, copper `#EA8347`,
gold `#FFD700`. Nav-specific tokens: `--nav-bg:#001F1C --nav-em:#004D40
--nav-gold:#FFD700 --nav-ch:#F5F5DC --nav-height:4.75rem`.

**Cooler-green glow, not gold**, was the explicit resolution for the Work
index card hover: `rgba(77,191,163,.16)` — she rejected a gold/warm glow as
not matching the portfolio's own cooler tones.

**German heading width**: German compound words run longer than English at
the same character budget, so `.cs-intro-copy` gets a scoped override:
```css
html[lang="de"] .cs-intro-copy{width:min(100%, 66rem);}
```
placed right after the base `.cs-intro-copy` rule. This is a *general* fix
(benefits any German Hook heading sharing that class, not just one project).

## 4. Reusable components built this session (Spotify build)

All of these are shared, not Spotify-specific — reuse them for future case
studies rather than rebuilding.

**Heuristic-evaluation accordion** (`.cs-heuristics-row` /
`.cs-heuristic-col` / `.cs-heuristic-thumb` / `.cs-heuristic-label`):
flex-grow-on-hover panel row (`flex:1` → `flex:2`, 0.8s cubic-bezier),
image `object-fit:cover` inside a fixed-height clipped box, with an
always-visible caption label *below* the clipped box (not inside it, so
crop never eats the label). Two crop-position helper classes exist for when
the interesting UI detail isn't vertically centered in the source image:
`.cs-crop-bottom` (`object-position:center bottom`) and `.cs-crop-low`
(`object-position:center 80%`). Falls back to a stacked column on mobile
and disables the hover-grow (but keeps normal scale) on touch/coarse
pointers.

**Lightbox / click-to-enlarge** (`.cs-lightbox-figure` on any `<figure>`
opts it in): CSS half lives in `style.css` (`.cs-lightbox-figure`,
`.cs-lightbox-overlay`, `.cs-lightbox-close`, hover-reveal "Click to
enlarge" pill, always-visible "Tap to enlarge" on touch), JS half lives in
`base.njk` right before `</body>` — creates one shared overlay `<div>`
lazily, ESC-to-close, focus management (`lastFocused`), body scroll lock
while open. Currently used on Spotify's 3 competitive-analysis panels.

**`.cs-dashboard-screens`** (before/after screenshot pairs, used by both
Enow and Spotify): fixed two-column grid `172px 192px` — **the second
(after) column is intentionally the larger one**, emphasis goes on the
"after" state, DOM order must stay before-then-after. `align-items:center`
(not `start` — asymmetric column heights from equal-aspect images at
unequal widths caused a "stuck to top" look under `start`).
`column-gap`/`row-gap` are **split explicitly**, never a single `gap`
shorthand — a single `gap` leaks the large column-gap value into the
caption row too, since the `::after` caption pseudo-element
(`grid-column:1/-1`) counts as an implicit second grid row. A `.cs-triple`
modifier (`grid-template-columns:repeat(3,9.5rem)`) exists for 3-up
sequences (e.g. home before/after/after-scroll).

**`.cs-visual-full.cs-stack-gap`**: for two images stacked in one figure
that need real breathing room (flex column, `gap:1.5rem`, padding, surface
background) — used for the colors + brand-attributes composite.

## 5. Her workflow — how to work with Tereza

1. **Content first, then layout, then build.** Her own words: "nejprve
   vytvoříme obsah jako jsme to udělali u Enow, pak se podivame poradne na
   layoute Enow abychom věděli jak co má vypadat a pak až budeme stavět az
   budeme mít pohromadě text, potřebné vizuály a vše okolo." Don't jump to
   markup before the narrative + assets are both settled.
2. Content is built with the **case-study-writer** skill (house style: bold
   statement headings, never generic labels; no fabricated data/metrics;
   full English draft first, then a full **rewrite** into German — not a
   literal translation; UI copy inside screenshots stays in its original
   language) combined with the **grilling** skill (rounds of ❓ questions
   with an ➡️ recommended default — facts are Claude's job, decisions are
   hers).
3. **Brainstorm and get sign-off before building anything with visual
   impact.** She was explicit about this ordering when starting Spotify:
   investigate/propose first, build only after approval.
4. **Fix issues holistically across the whole page/component, not just the
   fragment she screenshots.** Several rounds this project were caused by
   fixing only the visible instance and missing siblings elsewhere in the
   same or other language file — she called this out sharply on the
   widow/orphan-word issue. When a fix is "find every instance of pattern
   X," **write a deterministic script**, don't do it by manual judgment —
   manual passes on this project missed cases three times in a row.
5. **Verify programmatically when the claim is programmatic** (e.g. "no
   heading ends on a single-word line") — don't just eyeball a screenshot
   and assert it's fixed. A Playwright script that measures actual rendered
   line boxes is the way to confirm this class of fix.
6. **She reviews via standalone offline HTML files**, sent with
   `SendUserFile`, not Claude artifacts. The generation pattern (reusable):
   fetch rendered HTML from the local Eleventy dev server, inline
   `style.css` in a `<style>` tag, base64-inline every local
   `/assets/...` image as a `data:` URI, strip the Eleventy live-reload
   script. She opens these directly in her own browser, no server needed.
7. Never commit/push without her explicit go-ahead (§0). Always relay Stop
   hook "uncommitted changes" reminders, never act on them alone.

## 6. Known CSS gotchas worth remembering

- **Nunjucks autoescape**: `&nbsp;` entity in a YAML front-matter string
  rendered via `{{ }}` shows up as literal visible text. Use the real
  U+00A0 character in front matter; the entity is fine in literal template
  body text. **Exception**: `caseStudy.statement` is rendered via
  `{{ caseStudy.statement | safe }}` in `case-study.njk` specifically so it
  can contain a literal `<br>` (needed to force the hero statement to break
  between two sentences rather than let them run together — see the
  widow/orphan note below for why). Because of `| safe`, `&nbsp;` entities
  work directly in `caseStudy.statement` too, unlike other front-matter
  fields. Don't extend `| safe` to `projectTitle` or any other field
  without a documented reason — it disables autoescaping for whatever gets
  put there.
- **CSS Grid single `gap` shorthand** sets both row-gap and column-gap —
  if a grid has an implicit extra row (e.g. a full-width `::after` caption),
  a large column-gap value silently leaks into that row's spacing too.
  Split into explicit `column-gap`/`row-gap` whenever a grid has an
  irregular/implicit row.
- **`align-items:start` vs `center`** on grid/flex items of *unequal
  rendered height* (even at identical source aspect ratio, if the columns
  themselves are different widths) produces a "stuck to top, gap at
  bottom" look. Default to `center` for image pairs unless there's a
  reason not to.
- Czech/German widow-orphan rule applied throughout: **no single short
  word alone at the end of a line**, and more strongly, **no heading's
  final rendered line should ever be a single bare word**, regardless of
  its length.
  **The static "bind any word ≤4 chars forward + always bind the last two
  words" heuristic from an earlier session is retired — it caused a real
  bug.** Applied blindly, it chains: a short word bound forward to its
  neighbor is *still* ≤4 chars itself, so the next short word in a run
  binds to *that* pair, and so on. German and English headings built mostly
  of short function words (der, die, ich, mehr, zum, a, to, has, not…)
  turned into single 5-8-word unbreakable `&nbsp;` blocks that overflowed
  their column and visually collided with the next one (worst case: the
  Spotify reflection heading's whole back half glued into one run). Found
  and fixed in the Spotify EN+DE pages via a Playwright audit (render at
  1600px and 390px, group text by rendered line, flag any line whose text
  extends past its own element's box, and any final line that's a single
  bare word).
  **Current approach: measure, don't guess statically.** Reset the heading
  to plain text, render it, and only add an `&nbsp;` binding where the
  render actually shows a violation (a short word alone at a line's end →
  bind it forward; the final line is one bare word → bind it backward to
  the previous word). Re-render and repeat until stable, checked at both
  breakpoints. This never chains further than a real violation requires,
  so it can't produce the overflow bug above. For a hero statement made of
  two short sentences where even the *first* sentence doesn't fit one line
  at typical widths (`.cs-title-statement` has `max-width:24ch`), don't
  force it onto one line by gluing the whole sentence together — that
  breaks on mobile where the glued run runs off the viewport with no way
  to wrap. Use a literal `<br>` between the sentences instead (via the
  `| safe` exception above) so they never merge onto the same line, and let
  each sentence wrap internally as needed.
- **Print CV PDFs are pre-rendered exports, not build output.** The web CV's
  download buttons point at static files
  (`src/assets/cv/Tereza-Britta-Svanda-CV-{EN,DE}-September-2026.pdf`) — the
  Eleventy build does NOT regenerate these from `src/cv/print/{en,de}.njk`
  automatically. Editing the print-CV template and forgetting to
  re-export/replace the static PDF leaves the live download silently out of
  sync with the page (this happened once: a header-link underline fix
  landed in the template but the already-downloaded PDF still had the old,
  un-underlined links). After any change to `src/cv/print/*.njk`,
  regenerate both PDFs from the live-rendered page — e.g. via a headless
  browser's print-to-PDF against the local dev server
  (`page.pdf({ preferCSSPageSize: true, printBackground: true })` in
  Playwright reproduces the `@page{size:A4;margin:0}` layout exactly) — and
  overwrite the two files in `src/assets/cv/`, not just the `.njk` source.
- **The print CV's fixed-height A4 page (`.sheet{height:297mm}`) can silently
  overflow.** `.content{min-height:0}` lets the flex layout shrink the grid
  content area below what it actually needs once total content exceeds one
  page, which visually collides the footer into whatever section was still
  rendering (looks like a misplaced border/overlapping text, not an obvious
  "overflow" cutoff). Adding even one extra bullet/line to the Experience or
  Projects section can tip this over, and German text runs long enough that
  it can overflow when the English version of the same edit still has
  slack. Check with
  `page.evaluate(() => { const s=document.querySelector('.sheet'); s.style.height='auto'; return s.scrollHeight; })`
  against the fixed 297mm pixel height (1122.5px at 96dpi) after any content
  addition to either print CV — don't just eyeball it, the overlap is easy
  to miss in a quick glance. If it overflows, trim spacing (padding/margin
  values already tuned in mm) rather than shrinking fonts, and only in the
  file that actually overflows — don't touch the other language's spacing
  if it still has slack.

## 7. Current state

**Read this section fresh from the repo before trusting it** — this file has
gone stale relative to actual shipped work at least once already (it kept
saying Venek "not started" and PULS "deferred to last" for a full session
after both had already been built and shipped). When in doubt, check
`src/work/` and `src/de/work/` directly rather than this hand-off note.

- **Enow** case study: shipped, live, EN + DE (`src/work/enow/`,
  `src/de/work/enow/`, both full 9-section builds). A Czech-language
  version is separately deferred — "pak dodam" — and this generalizes: a
  full Czech-language version of the whole site, not just Enow, is a
  genuine future plan, not a one-off exception for this one project. Don't
  confuse this with German — all 4 case studies (Enow, Spotify, Venek,
  PULS) already ship in both EN and DE.
- **Spotify** case study: shipped, EN + DE, all known visual bugs fixed and
  verified (widow/orphans fixed via script + Playwright-verified at
  1600px/390px × EN/DE).
- **Galerie Venek** case study: shipped, EN + DE (`src/work/venek/`,
  `src/de/work/venek/`). A 3-person Ironhack team project with a real
  founder/client (Markéta) rather than a fictional brief — Tereza's own part
  covered the local-market/context onboarding, the persona + journey map
  (persona "Robin"), and owned the workshop-booking flow + "What's on" page
  end-to-end through two rounds of usability testing. Follows the same
  10-part skeleton and `case-study.njk` frame as Enow/Spotify. Uses its own
  asset folder `src/assets/venek/`.
- **PULS** case study: shipped, EN + DE (`src/work/puls/`,
  `src/de/work/puls/`), `bodyClass: puls-theme` on the front matter — its own
  darker, more technical visual treatment as originally planned in §8,
  distinct from the light/dark case-study palette the bootcamp projects use.
  Covers the PULS landing page only (a real live Praut B2B AI-fluency
  academy product, `puls.praut.cz`) — not the academy's internal
  dashboard/course logic, which is explicitly out of scope. Documents her
  full ownership of content philosophy, visual/interaction design, the HTML
  prototype, and converting it into production Angular herself
  (AI-assisted; an engineering partner handled the backend). Includes 3
  looping lab videos (logo ignition, the 7-state thread, and a "smoke"
  effect around the closing quote card) under `src/assets/puls/labs/`, with
  `prefers-reduced-motion` handled (resting-state fallback) and a guerrilla
  5-person comprehensibility test that drove a real hero-section fix
  (added a "PULS · AKADEMIE" nav label + fading keywords, documented as a
  before/after image pair in the case study's own Test section). The
  business/B2B-lead section is deliberately left as a short paragraph for
  now — a dedicated inquiry form is future work, per the case study's own
  Reflection section, not a gap to "fix" unprompted.
- **Work index**: rebuilt as a 4-card grid (Enow, Spotify, Venek, PULS),
  EN + DE — see §8 for the full as-built account. **PULS's card is no
  longer a "coming soon" placeholder** — it now links internally to
  `/work/puls/` (not externally to `puls.praut.cz`), the "Coming soon"
  badge markup was removed once the case study shipped, and its video loop
  (`src/assets/puls/landing-loop.webm`/`.mp4`) replaced the static
  placeholder image. `.work-project-badge` still exists in `style.css` but
  is currently unused by any card — leave it, it's a small reusable style,
  not dead code worth deleting.
- Work index → Enow/Venek/PULS card hover glow: cooler green
  (`rgba(77,191,163,.16)`), resolved.
- Homepage redirects straight to `/work/` — discussed, she's fine with it
  for now; a stronger hero moment was explicitly deferred until more case
  studies exist.
- **Art portfolio (`index.html` → `/art/`)**: the old "Job Timer" work
  sample (outdated once the professional case studies existed) was replaced
  with a hand-built horizontal-scroll carousel showcasing all 4 professional
  case studies + a link to the full portfolio. See §11 for the full
  breakdown — this is a separate codebase from the Eleventy site.
- **Site-wide external-link convention**: no diagonal ↗ arrow glyph
  anywhere, on either site. See §12.
- **Print CV** (`src/cv/print/{en,de}.njk`): has a PULS bullet under
  "Selected design work for Praut" / "Ausgewählte Designarbeit für Praut"
  in the Experience section (not the Projects section — Projects is
  explicitly scoped to Ironhack Bootcamp work, PULS is real paid Praut
  work). The downloadable static PDFs at
  `src/assets/cv/Tereza-Britta-Svanda-CV-{EN,DE}-September-2026.pdf` are
  **pre-rendered exports of these templates, not generated at build time**
  — see the gotcha in §6 about keeping them in sync.
- **Web CV** (`src/cv/index.njk`, `src/de/cv/index.njk`): intentionally
  stays high-level and names no individual project for any entry (neither
  Praut/PULS nor the Ironhack bootcamp) — it explicitly defers all
  project-level detail to the downloadable PDF. Confirmed this needs no
  parallel PULS addition; don't add one without a specific reason to
  revisit that design choice.
- GitHub Pages URL/repo-naming question was informational only — no
  changes made.

## 8. Work index grid redesign — brainstormed 2026-09-16, built + shipped

Brainstormed with the design-mentor-sebastian skill, triggered by Tereza
wanting to add more case studies without an ever-growing vertical scroll.
**Built and shipped** (`src/work/index.njk` + `src/de/work/index.njk`,
commit `b556d09`, deployed via GitHub Pages Actions). The sections below are
the taxonomy/PULS decisions as originally brainstormed; where the actual
build ended up differently, that's called out explicitly rather than left
implied — read the "As built" note at the end of this section before
assuming any given bullet is exactly what shipped.

**Grid mechanics (superseded — see "As built"):**
- CSS Grid `auto-fill`/`minmax()` sizing, not a fixed 2-up or 3-up column
  count — cards should re-flow on their own as more case studies are added,
  instead of the grid needing a rewrite every time.
- New cards wrap into additional rows. Horizontal scroll was explicitly ruled
  out as a desktop UX antipattern.

**Card content / taxonomy:**
- Every card always shows title + one visible category tag — never hide the
  only differentiator behind hover. With several cards side by side, a bare
  title alone doesn't give someone scanning without hovering enough to go on.
- Category is a **multi-tag field, not single-select**: `UX`, `UI`,
  `Branding`, `Motion & Interaction` — a project can carry more than one
  (e.g. Enow/Spotify would be `UX` + `UI`).
- **No filter UI (pills/tabs) until there are 4-5+ case studies spanning at
  least two genuinely different categories.** A filter with only one usable
  value is worse than no filter at all — explicitly decided against building
  one now just because a reference site has one. Do add the tag data now so
  filtering can switch on later without retroactively re-tagging everything.
- Reference inspiration (external sites, structural pattern only, not to
  copy visually): Kristian Ulrych's portfolio (2-up grid, title + tag + year
  always visible under each image, a small "Soon" label for an unfinished
  project) and a Veevoy-style laptop-mockup card. Tereza was explicit: don't
  chase their visual/mockup production quality right now ("pořád jsou to
  školní projekty") — only the title/tag/year placement pattern is being
  borrowed.
- Accessibility note for whenever hover-revealed content gets added: it must
  also reveal on `:focus-visible`, not just `:hover`, or keyboard/
  screen-reader users never see it. Flagged during brainstorm, not yet
  implemented anywhere.

**PULS as the 4th card:**
- PULS (Praut's B2B AI learning platform, `puls.praut.cz`) — a real
  shipped product, not a bootcamp project — goes into the grid now as a 4th
  entry, tagged `UI` + `Motion & Interaction`.
- Unlike Enow/Spotify/Venek, its card links **externally to
  `puls.praut.cz`**, not to an internal `/work/` case-study page — reuse the
  existing "↗" external-link affordance already used for Figma prototype
  links inside case studies, so the card itself signals "this leaves the
  portfolio" before it's clicked.
- Card is labeled **"Coming soon"** (or equivalent) since there's no written
  case study behind it yet — same pattern as Kristian Ulrych's "Soon" tag.
- Card visual needs to be a short **video/GIF loop**, not a static
  screenshot — PULS's signature motif is a glowing thread from the flame
  logo that grows, golds, or recedes depending on section (the visual
  metaphor: "PULS is just the spark, the participant is the driving force").
  A still image would undersell the entire point of this entry. Tereza can
  capture the loop from either the live landing page or her component lab.
  This means the card template needs to support video/GIF media, which the
  other three cards currently don't.
- **A full written `/work/puls/` case study is intentionally deferred to
  last** — built only after the rest of the portfolio (Venek included)
  ships. When it happens, it's explicitly **not** meant to reuse the
  existing light/dark case-study palette — it gets its own darker, more
  technical-feeling visual treatment (typeface TBD), because PULS is a live
  product/"playground", not a bootcamp case study, and shouldn't be forced
  into the same template just for the sake of consistency.

**As built — where the shipped grid differs from the brainstorm above:**
- **Grid mechanics**: not `auto-fill`/`minmax()`. After seeing reference
  screenshots (Kristian Ulrych's portfolio) Tereza asked directly for a
  **fixed asymmetric 2-column grid** (`grid-template-columns:1.35fr 1fr`)
  instead — wide/narrow card pairing, matching the reference look more
  closely than a uniform auto-fill grid would. A CSS-only rule,
  `.work-project:last-child:nth-child(odd){grid-column:1/-1;}`, makes an
  odd-count trailing card (PULS, today) span the full row automatically —
  no card-count-specific markup needed. This stops applying cleanly once
  the count goes even (e.g. once Venek ships as a 4th case study).
- **Card content**: shipped even leaner than planned — title + a small
  eyebrow tagline (reusing each case study's own `projectTitle`, the part
  after the em dash) + the tag/year line. No descriptive sentence at all.
  No filter UI yet, per the original decision (still waiting on 4-5+ cards
  spanning 2+ categories).
- **Card images**: Enow and Spotify's case-study hero images (wide/cinematic,
  ~21:9) cropped badly into the new `4/5` portrait card box — no
  `object-position` fixed it, the source images were the wrong shape. Both
  were replaced with dedicated, higher-resolution portrait screenshots
  Tereza exported specifically for this: Enow uses
  `src/assets/enow/sos-lockscreen.jpg` (the SOS-flow widget on a phone lock
  screen, cropped `object-position:center bottom` via a new
  `.work-project-crop-bottom` utility, so the widget itself is never cut
  off), Spotify uses `src/assets/spotify/library-emotions.jpg` (the Library
  screen, cropped to the colorful "Your Emotions" tag row via a new
  `.work-project-crop-emotions{object-position:center 38%;}` utility — that
  row is this screen's most visually distinctive element). Both exports were
  large (300-400+KB PNG) and were re-saved as compressed JPEGs (39KB/78KB)
  before committing.
- **PULS card**: shipped with a **static placeholder image**
  (`src/assets/puls/landing-placeholder.jpg`, resized/compressed from
  Tereza's full-resolution `puls_landing.png` upload) rather than the
  video/GIF loop described above — the video swap is still a follow-up, not
  done yet. Everything else (external link, "Coming soon" badge, tags,
  full-width layout via the odd-card rule) shipped as planned.
  **Superseded — see §7:** the video loop has since shipped
  (`landing-loop.webm`/`.mp4`), the full `/work/puls/` case study has since
  been written and shipped, and the card now links internally instead of to
  `puls.praut.cz` — the "coming soon"/external-link framing in this section
  is historical (why the card was originally built this way), not current
  behavior.
- Verified via Playwright at 1440/1024/760/375px × EN/DE that the existing
  ambient card glow (`rgba(77,191,163,.16)`), the pointer-tracking cursor
  affordance, and the header page-transition wash all still work unchanged
  after the CSS restructuring — none of them needed code changes.

## 9. Deferred / not started

- **A full Czech-language version of the site** — deferred generally, not
  just for Enow. Enow's Czech version is the one instance discussed
  concretely so far ("pak dodam"), but treat it as one case of a broader
  future plan, not an isolated exception.
- **Work index filter UI** (pills/tabs by tag) — intentionally deferred
  until there are 4-5+ case studies spanning 2+ genuinely different
  categories (§8). Tag data itself is already in each card's meta line. All
  4 current cards (Enow, Spotify, Venek, PULS) are shipped, so this is
  getting closer but hasn't been revisited yet.
- **Hover/motion animation polish** on the Work-index cards — parked
  "until another case study exists"; several now exist, so this could
  resurface, but she hasn't reopened it.
- **PULS business/B2B-lead section** — deliberately left as a short
  paragraph for now; a dedicated inquiry form/CTA is planned future work
  per the case study's own Reflection section (not a bug to silently fix).
- A stronger homepage hero moment — deferred until more case studies ship.

## 10. Useful commands

```
npm run serve      # eleventy --serve, local dev server
npm run build      # eleventy, outputs to _site/
npm run debug       # DEBUG=Eleventy* eleventy
```

## 11. The art portfolio (`index.html` → `/art/`)

A completely separate, framework-free single-page site (illustration and
personal work) living at the repo root as `index.html` — NOT an Eleventy
template. `.eleventy.js` passthrough-copies it (plus its own images/JS/CSS,
all inline in the one file) straight into the build output at `/art/`. It
shares no CSS/JS with `src/style.css` or `base.njk` — its own `<style>`/
`<script>` blocks are self-contained.

**Mechanics**: horizontal-scroll engine (`#scroller`/`#track`/
`.panel[data-idx]`) with `targetX`/`currentX` lerp-smoothed
(`lerp(a,b,0.075)`) in a `requestAnimationFrame` loop; wheel/touch
hijacking attached to `#scroller` only when not on mobile
(`matchMedia('(max-width:768px)')`); dot-nav tracks active state by ARRAY
POSITION between `panels` and `dots` NodeLists, while `[data-to]` nav-jump
links match by the `data-idx` VALUE. i18n is a small inline dictionary
(`cs`/`en`) swapped via `data-i18n`/`data-i18n-html`/`data-i18n-alt`/
`data-i18n-aria` attributes — `data-i18n-html` is required (not plain
`data-i18n`) whenever the translated string contains literal HTML like
`<br>`/`<em>`.

**Work panel** (`#p-work`, replaced an outdated "Job Timer" sample once the
professional case studies existed): a hand-built drag/scroll carousel
(`.work-carousel`) showing all 4 professional case studies (Enow, Spotify,
Venek, PULS) as cards, plus a "Full portfolio" link out to `/work/`. Card
images are dedicated JPGs at the repo root (`enow-card.jpg`,
`spotify-card.jpg`, `venek-card.jpg`, `puls-card.jpg`, passthrough-copied
into `art/` via a per-file list in `.eleventy.js` — add new filenames there
if more cards are added). Cards compose two independent transform sources
(scroll-driven "base" tilt + cursor-driven "hover" tilt) via separate
`baseState`/`hoverState` `Map`s merged in one `renderCard()` function,
avoiding the two interactions clobbering each other's inline `transform`.

**"Phantom container" CSS bug pattern** (recognized twice on this project,
once here): a flex/grid wrapper defaults to filling its parent's full
width even when its fixed-width children don't need that space, leaving
dead visual space and mis-sized `box-shadow`/backgrounds. Fixed here via
`width:fit-content;max-width:100%` on `.work-carousel` and on a shared
`.work-content` wrapper around the heading + carousel together (so any
leftover canvas centers symmetrically instead of dumping on one side).

**Scroll-chaining**: `.work-carousel` must only intercept wheel/touch
events while it still has scrollable room in the requested direction
(`scrollLeft` vs `0`/`maxScroll` boundary checks before
`preventDefault()`/`stopPropagation()`) — otherwise it permanently
captures input and blocks the page's own horizontal scroll once its own
content is exhausted.

**Nav**: the external "UX/UI [portfolio]" link is visually distinguished
from the 3 in-page anchors (O mně / Práce / Kontakt) via a small IBM Plex
Mono "Portfolio" tag + a thin 1px vertical divider — not an arrow (§12). Nav
order matches actual panel order (O mně before Práce, since About is panel
index 1 and Work is panel index 2). Dot-nav was reduced from 6 to 5 dots
after the old Job Timer/visual panels were removed — if panels are ever
added/removed again, remember to update both the dot-nav `data-idx` values
AND every panel's own `data-idx`, including the trailing `panel-num` display
text (e.g. "05"/"06"), which don't auto-derive from anything.

**Relationship to the professional site**: linked from the professional
`/about/` page (one sentence + link inside the existing "creative practice"
paragraph, EN + DE) — deliberately NOT added to the main professional nav,
to avoid diluting the focused "Product & UX/UI Designer" positioning. Only
linked one-way for now; the art portfolio links back out to `/work/` from
its own Work panel.

## 12. Site-wide external-link convention: no ↗ arrow

Firm, explicit house rule, applies to BOTH the professional site and the
art portfolio: **no diagonal arrow glyph (↗, U+2197) anywhere as an
external-link affordance.** It reads as an "AI-generated" visual tell to
her and was deliberately removed everywhere it had crept in: the art
portfolio's nav (replaced with the mono "Portfolio" tag + divider, §11),
the About-page link to the art portfolio, `case-study.njk`'s
Prototype/Presentation links (shared by all 4 case studies × 2 languages),
the Contact page's LinkedIn/Behance links (EN + DE), and the print CV's
"Case study" links (EN + DE). In every case the fix was simply removing the
glyph with no replacement — plain link-color + underline/border-bottom on
hover (or, for the print CV, an always-visible `border-bottom` since it's a
static document with no hover state) is enough affordance on its own.

**Explicitly NOT covered by this rule** — don't remove these:
- The "↓" download arrow on CV PDF download links (a different glyph/
  convention, for downloads not external navigation).
- The plain "→" (non-diagonal) arrow used site-wide as the established
  primary-CTA affordance (e.g. "Start a conversation →", "tažením posuňte
  →"). Only the diagonal ↗ is banned.

When adding any new external link anywhere on either site, don't reach for
↗ by habit — use the existing plain-underline/border-bottom pattern, or ask
if a specific new context seems to need something else.
