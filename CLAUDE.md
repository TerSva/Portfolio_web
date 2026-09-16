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
    index.njk           Work index (project cards)
    enow/index.njk       Enow case study (EN) — shipped, live
    spotify/index.njk    Spotify case study (EN) — shipped, live
  de/                    German mirror of everything under /, incl. work/
    work/enow/index.njk
    work/spotify/index.njk
  about/, cv/, cv/print/, contact/   plus their /de/ counterparts
  assets/
    enow/, spotify/, about/, cv/     per-project image assets
  style.css              single global stylesheet, all pages share it

.eleventy.js              input=src, output=_site, includes=_includes,
                           njk for html+markdown, GH Pages path-prefix
                           transform via ELEVENTY_PATH_PREFIX env var
package.json               scripts: build / serve / debug (eleventy --serve)
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

## 7. Current state (as of this hand-off)

- **Enow** case study: shipped, live on `uxportfolio`, EN only (Czech
  version explicitly deferred — "pak dodam").
- **Spotify** case study: fully built, EN + DE, content signed off
  section-by-section, all known visual bugs fixed and verified
  (widow/orphans fixed via script + Playwright-verified at 1600px/390px ×
  EN/DE; German Hook heading now wraps to 2 lines not 3). **Shipped and
  pushed to `uxportfolio`** (commit `ce751b8`).
- Work index → Enow card hover glow: cooler green
  (`rgba(77,191,163,.16)`), resolved.
- **Work index grid rebuilt and shipped** (EN + DE, commit `b556d09`,
  deployed successfully via the GitHub Pages Actions workflow) — see §8 for
  the full as-built account, including where it deviated from the original
  brainstorm.
- Homepage redirects straight to `/work/` — discussed, she's fine with it
  for now; a stronger hero moment was explicitly deferred until more case
  studies exist ("ten silnejsi hero moment asi dame, ale az po dalsich case
  study").
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
- Verified via Playwright at 1440/1024/760/375px × EN/DE that the existing
  ambient card glow (`rgba(77,191,163,.16)`), the pointer-tracking cursor
  affordance, and the header page-transition wash all still work unchanged
  after the CSS restructuring — none of them needed code changes.

## 9. Deferred / not started

- **Venek** case study — not started.
- **Czech version of Enow** — deferred.
- **PULS card video/GIF loop** — card shipped with a static placeholder
  image (§8 "As built"); swapping in the glowing-thread animation loop is
  still open.
- **Work index filter UI** (pills/tabs by tag) — intentionally deferred
  until there are 4-5+ case studies spanning 2+ genuinely different
  categories (§8). Tag data itself is already in each card's meta line.
- **Hover/motion animation polish** on the Work-index Enow card — parked
  "until another case study exists"; two now exist (Enow, Spotify) so this
  could resurface, but she hasn't reopened it.
- A stronger homepage hero moment — deferred until more case studies ship.

## 10. Useful commands

```
npm run serve      # eleventy --serve, local dev server
npm run build      # eleventy, outputs to _site/
npm run debug       # DEBUG=Eleventy* eleventy
```
