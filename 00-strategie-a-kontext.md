---
title: Kontext a strategie — UX/UI portfolio (branch uxportfolio)
vytvořeno: 2026-09-08
---

# Kontext a strategie tohoto projektu

Tento dokument shrnuje **rozhodnutí a strategii** z konverzace, kde jsme plánovali profi UX/UI portfolio Terezy. Je určen jako startovní kontext pro navazující práci (Claude Code / Codex).

## Výchozí situace

- Tereza dokončuje Ironhack UX/UI bootcamp (part-time, květen–říjen 2026).
- Před bootcampem si postavila osobní portfolio web (`tersva.github.io/Portfolio_web`, tento repo, branch `main`) — atmosférický, tmavě smaragdovo-zlatý, horizontální scroll, DM Serif Display + Space Grotesk + IBM Plex Mono. Obsahuje: Hero → O mně → 1 projekt (Job Timer — React app & design systém) → Art galerie (sněhové malby na sklo, tradiční ilustrace) → Kontakt.
- Tento web vznikl "před vyprofilováním se jako UI/UX designérka" — je to všehochuť (art, ilustrace, frontend/motion), ne cílené job-hunting portfolio podle UX metodologie.
- Cíl: postavit **druhé, profesní UX/UI portfolio** podle struktury z bootcampu (viz `portfolio/portfolio-poznatky-bootcamp.md`), které bude primární odkaz posílaný recruiterům/na pohovory.

## Rozhodnutá strategie (rozdělení rolí obou webů)

1. **`main` branch / současný web (art hub)** — zůstává jak je, **rozšiřuje se**, ne nahrazuje. Slouží jako osobní/art brand vstupní brána — pro lidi, co ji znají osobně, LinkedIn/Instagram publikum, klienty mimo UX obor. Atmosférický, tmavý, horizontální scroll zůstává.
2. **`uxportfolio` branch (tento branch) — profi UX/UI portfolio.** Struktura podle bootcampu: About → Work (case studies) → Contact. Primární odkaz pro recruitery a pohovory.
3. **Prokliky mezi weby:**
   - Na art hubu: jasné, viditelné CTA (ne schované dole) směrem na profi UX/UI portfolio — v navigaci nebo v sekci "O mně".
   - Na profi portfoliu: v sekci About / jako doplňkový blok před kontaktem odkaz zpět na art hub ("mimo UX tvořím i tradiční ilustrace a instalace →").
4. **Vizuální styl profi portfolia:**
   - Světlejší, čistší než art hub — case study vizuály (Figma screeny, wireframy, UI mockupy) jsou většinou světlé, světlé pozadí je nechá dýchat přirozeně bez "zarámování" do tmavých karet.
   - Zachovat **jeden spojovací prvek** identity s hubem (např. zlatá akcentová barva jen na CTA/odkazech, nebo DM Serif Display jen na nadpisech) — ne celou paletu. Profi web patří spíš k "low-medium brand" konci typografické škály (viz typography poznámky), hub zůstává "high brand".
   - Preferovat teplý off-white / krémové pozadí (ne čistě #FFF), pro spojitost s art hubem.
5. **Motion na profi portfoliu:**
   - **Ne** strukturální gimmick (scroll-hijacking, dlouhé loadery, intro animace blokující obsah) — recruiter skenuje 2–4 minuty, obsah musí být okamžitě dostupný.
   - **Ano** jemné akcenty — hover stavy, jemný reveal-on-scroll, případně jedna "signature" interakce.
   - Frontend/motion dovednosti (Angular, React, efekty) se neschovávají do case studies (rušily by skenovatelnost), ale ukazují se buď (a) implicitně tím, že samotný web je dobře postavený, nebo (b) jako samostatná položka/mini-showcase "Code & Motion" odkazovaná z About — tam může Tereza motion předvést naplno.
6. **Nástroje / workflow:**
   - **Figma není povinný krok** pro stavbu portfolia samotného — Tereza staví rovnou v kódu (rychlejší, přesnější pro grid/typografii/motion než Figma simulace). Figma zůstává zdrojem dat pro case studies (persony, wireframy, screeny z reálných bootcampových projektů Enow, Galerie Venek — ty žijí ve vlastních Figma souborech).
   - Sdílená šablona `Student Portfolio Builder` (Figma/FigJam od Ironhacku) — pouze jako inspirace, ne budovat 1:1.
   - **Práce probíhá přímo v gitu**, ne kopírováním kódu přes chat — stejný repo, nová branch `uxportfolio` (tento branch). Navazující práce pokračuje v Claude Code / Codexu (víc usage limitu, přímé napojení na git).

## Design mentor — Sebastian

V konverzaci byl aktivován skill `design-mentor-sebastian` — Sebastian je senior design partner/UX svědomí, který drží fázový model (F0 discovery → F1 skeleton → F2 system → F3 surface/motion → F4 polish), QA baseline checklist a mini-spec workflow před stavěním v kódu. Doporučeno používat ho i v navazující Claude Code session pro konzistentní feedback a disciplínu procesu (viz `design-mentor-sebastian` skill, pokud je v cílovém prostředí dostupný).

### Otevřené F0 otázky k dořešení před stavěním
- Kolik case studies musí být v `uxportfolio` branch hotovo, než se pošle dál (2, 3, všechny bootcampové projekty)?
- Jméno/URL struktura pro profi portfolio (subdoména, /portfolio cesta, nebo separátní GitHub Pages branch-deploy)?

## Obsah tohoto kontextového balíčku

- `portfolio/portfolio-poznatky-bootcamp.md` — **jen** bootcampové poznatky přímo o tvorbě portfolia (struktura, case study anatomie, psací proces, nástroje na tvorbu webu, sociální sítě, strategie job huntingu, reference case studies, perspektiva náborářů z externích článků).
- `ostatni-bootcamp/` — všechny ostatní bootcampové poznámky (UX metodologie, vizuální/UI teorie), zdroj faktů a terminologie pro psaní case studies a budování produktového myšlení, ale **ne** přímo o portfoliu:
  - `varka1-lekce-cerven-srpen.md`, `varka2-lekce-kveten.md` — přepisy Zoom lekcí (chronologicky: várka2 je dřívější fáze bootcampu)
  - `sitemap-wireframe-dashboard.md`
  - `usability-testing-native-apps.md`
  - `multistate-grids-dataviz.md`
  - `brand-competitive-analysis-colors.md`
  - `typography-style-tiles-guides.md`
  - `design-systems-atomic-design.md`
  - `project-management-ia-ux-strategy.md`
  - `desirability-testing-accessibility.md`
