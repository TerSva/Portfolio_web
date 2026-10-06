# Portfolio work state — 6 October 2026

## Purpose of this file

Working context for the UX portfolio. Read this before changing the Enow case study pilot or the Work-page art bridge.

## Current task

Pilot a new visual entry pattern for the Enow case study. The goal is to make the transition from the expressive Enow card on `/work/` feel like a continuation of the same project, rather than an abrupt jump to a generic, text-heavy green case-study header.

## What has already been built locally

The Enow arrival remains an English-only pilot. The Work page also now has a shared EN/DE art-portfolio bridge after the selected-work grid.

- Added `src/_includes/project-arrival.njk`.
- `src/_includes/case-study.njk` now conditionally renders `project-arrival.njk` instead of the generic `.cs-cover` when `caseStudy.arrival` exists.
- Added EN-only `caseStudy.arrival` data in `src/work/enow/index.njk`.
- Added isolated `.enow-arrival*` styles in `src/style.css`.
- The final case-study navigation is now dark green across the case studies, so each page closes in the same visual world as the footer.
- Added an Art Portfolio bridge after the project grid in `src/work/index.njk` and `src/de/work/index.njk`.
  - Both versions link to the English art portfolio: `/art/?lang=en`.
  - The bridge crossfades between existing art illustrations and photographs every 16 seconds.
  - It respects `prefers-reduced-motion` and falls back to a single static image.
- The current hero reuses real assets from the Work card:
  - `src/assets/enow/work-cover-atmosphere-preview.png`
  - `src/assets/enow/sos-lockscreen.jpg`
- It includes a return to selected work, three factual metadata rows, and two real links: Figma prototype and YouTube SOS walkthrough.
- `npm run build` and `git diff --check` passed after this work.

No German page and no other case study has been changed as part of the pilot.

## Current design state

The pilot now uses the agreed full-width arrival pattern:

1. The dark-green opening band spans the complete viewport beneath the fixed header.
2. The asymmetrical composition is retained: project orientation and real actions left; warm living-room scene with the real phone widget right.
3. The former rounded card, pale outer margins, border and shadow are removed.
4. The hero occupies roughly 85% of the desktop viewport so the light first case-study section begins naturally below it, without a scroll prompt.
5. Mobile has been checked at 390px wide. The shared mobile navigation height is now accurate for its two-row layout, so the beginning of the hero no longer sits beneath the fixed header.
6. The editorial copy is inset further from the left viewport edge; the visual split itself remains fixed. The return control is now a separate structural link at the top, labelled `← ALL WORK`, rather than part of the project-content group.

`npm run build` and `git diff --check` passed after the change. Desktop and mobile localhost checks were completed; the change remains local and uncommitted.

Desired reading sequence:

```text
Work card (Enow atmosphere + widget)
        ↓
Full-width dark-green Enow arrival scene
        ↓
Light case-study content: “Stress apps mostly assume you have time to sit down.”
```

## Approved hero copy (EN)

- Eyebrow: `STRESS-MANAGEMENT APP`
- Title: `Enow`
- Statement: `A hands-free SOS flow for the moment stress peaks, with a separate path back to calm.`
- Facts:
  - Focus — Stress-management app
  - My role — Brand identity, SOS flow & onboarding
  - Platform — Native iOS
- Primary action: `Explore the SOS prototype →`
- Secondary action: `Watch the SOS flow →`

The copy uses existing project facts only. Do not add outcome metrics or new research claims.

## Content direction after the hero is approved

Do not rewrite the full case study yet. First reduce duplication in the first two sections:

- Keep `Stress apps mostly assume you have time to sit down.` as the problem hook.
- Shorten its supporting subtitle after the hero has taken over project orientation.
- Keep the `intro` section’s decision to narrow the scope to the stress tipping point; it explains the brief and should not repeat the hero.
- The old generic `caseStudy.outcome` is intentionally not shown for Enow while `caseStudy.arrival` is active, because it duplicates role, testing and solution claims before evidence appears.

Later visual priorities:

1. Pair major claims with relevant screens or flows.
2. Obtain higher-resolution Figma exports before promoting low-resolution assets to large visual evidence.
3. Keep lightbox for Galerie Venek; later make its click-to-expand affordance easier to notice.
4. Audit EN/DE factual parity before translating the Enow arrival pattern to German.

## Guardrails

- Do not alter other individual case studies until their visual-entry pattern has been agreed from the Enow pilot.
- Do not commit or push unless Tereza explicitly asks. (She approved the current checkpoint on 6 October.)
- Always show a localhost visual check before calling a visual change complete.
- Preserve these untracked preview assets; do not add or delete them without agreement:
  - `src/assets/puls/work-cover-atmosphere-preview.png`
  - `src/assets/spotify/work-cover-atmosphere-preview.png`
  - `src/assets/spotify/work-cover-atmosphere-v2-preview.png`
  - `src/assets/venek/work-cover-atmosphere-preview.png`
  - `src/assets/venek/work-cover-atmosphere-v2-preview.png`

## Repository state at the time of writing

- Branch: `uxportfolio`
- Last pushed commit before the current checkpoint: `556024a Improve portfolio navigation and project flow`
- Current scope: Enow arrival pilot, shared dark case-study ending, Work-page Art Portfolio bridge, and this state file.
- Local preview command used in this work:

```bash
npm run serve -- --port=8082
```

- Current preview URL:

```text
http://localhost:8082/work/enow/
```
