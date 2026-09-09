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
- ~~Kolik case studies musí být v `uxportfolio` branch hotovo~~ — vyřešeno, viz níže: 4 celkem, PULS až později.
- ~~Jméno/URL struktura pro profi portfolio~~ — vyřešeno, viz sekce "Tech stack a doména" níže.

## Aktualizace ze session 2026-09-08/09 — Visual Book, case study skeleton, struktura webu

Navazuje na sekce výše, upřesňuje a doplňuje je. Kde je rozpor s textem výše (např. "krémové pozadí"), platí tahle novější verze — je podložená reálnými WCAG výpočty a skutečným obsahem, ne jen záměrem.

### Visual Book existuje

`visualbook.html` v rootu repa (branch `uxportfolio`) — dvoudílný dokument:
- **Část A** — audit skutečné main identity (barvy, typografie, glass efekt, buttony, karty/kompozice, liquid/motion), včetně reálně spočítaných WCAG kontrastů.
- **Část B** — odvozený Foundations systém pro uxportfolio: Must preserve / May adapt / Never, plus světlá paleta **matematicky odvozená** z main tokenů (ne stock AI-cream):
  - `--cs-paper: #EBEED6` — mix(ch 96%, em 4%)
  - `--cs-surface: #FDFDF8` — mix(white 80%, ch 20%)
  - `--cs-border: #D0DCC5` — mix(ch 85%, em 15%)
  - `--cs-ink: #004D40` — = main `--em`, primární text/nadpisy (AAA na obou plochách)
  - `--cs-muted: #3B7565` — mix(paper 25%, em 75%), AA na paper
  - `--cs-copper: #A14000` — mix(copper 70%, black 30%), pro linky/drobný accent text, AA
  - `--cs-gold-ui: #998100` — mix(gold 60%, black 40%), jen hranice/ikony/underline, **nikdy text** (raw gold na světlém padá na 1.19:1, naprosto nečitelné)
  - Raw `#FFD700` gold zůstává použitelný jen jako plná plocha pozadí (tag/badge) s `--cs-ink` textem na sobě (7.01:1 AAA)
  - Žádné sémantické barvy (success/warning/error) — vědomě vynecháno, portfolio je nepotřebuje.

### Case study — skeleton (zdroj pravdy, ne bootcampová teorie)

Bootcampová 7bodová anatomie z `portfolio-poznatky-bootcamp.md` byla nahrazena **10bodovým skeletonem ze skillu `case-study-writer`** — ten je ověřený na 3 reálných Medium case studies (Enow, Galerie Venek, Spotify redesign — všechny přečtené a zkontrolované v této session):

Outcome Preview → Hook+hero (kontrastní, ne jen bold statement — "před/po" napětí) → Intro (tým/brief/twist) → Empathize (research+čísla+citace) → Define (persona+journey mapa+"moment of truth") → Ideate (HMW→MoSCoW→jedna věta, **včetně toho, co bylo vyřazené a proč**) → doménová sekce dle potřeby (Brand & Visual Identity, Information Architecture...) → Prototype (2 klíčové screeny) → Test (jeden silný nález, **poctivě i co nevyšlo**) → Final Reflection (role, credit týmu, lekce, CTA).

Pravidla:
- **Nadpisy = bold-statement věty** ("Maya doesn't need an app that explains anything to her"), nikdy generický label ("Empathize"). Platí i retroaktivně pro portfoliovou verzi Venek (originál na Medium měl ještě generické nadpisy typu "Testing and iteration" — na portfoliu se přepíšou).
- **Pull-quotes povinné**, ne volitelné — vytáhnout silnou větu doprostřed sekce.
- **Zavírat tvrdými čísly**, i pod NDA — relativní % místo absolutních hodnot, když přesná čísla nejdou zveřejnit (relevantní hlavně pro PULS).
- **"My Role" pozice — rozhoduje se per-projekt**: krátká věta v header meta bloku navíc k Final Reflection u **týmových** projektů (Enow, Venek, PULS), kde je nejasné kdo dělal co. U **sólo** projektů (Spotify) vynechat, role je zjevná z celého textu.
- Sólo projekty **nemusí mít celý skeleton** — Spotify nemá tým/personu/journey mapu, dostává odlehčenou variantu (Hook→kontext→problém-finding→koncept→řešení→kritika→reflexe). Pevná struktura, ale bez nucení nesmyslů, co na projekt nesedí.
- Case study na portfoliu **nesmí být identická s Medium verzí** (poznámka od lektorky) — Medium je zdroj faktů/příběhu, portfolio potřebuje kratší, skenovatelnou redakční verzi.

**Reference case studies (mimo bootcamp, pro čitelnost/strukturu):**
- Simon Pan — kontrastní narativní úvod, "My Role" hned na začátku (u něj vždy, u nás per-projekt), research jako pojmenovaná zjištění s bold nadpisy, pull-quotes, poctivost o zabitých nápadech, zavírá tvrdými čísly i pod NDA.
- Kyson Dana ([kysondana.com](https://www.kysondana.com/)) — jednodušší kostra (background/challenge/vizuální řešení), silný osobní hlas místo procesního psaní. Blíž Terezinu mixu design + art direction, hodí se hlavně na doménové sekce a na PULS.
- [ulrychkristian.cz/cs/work](https://www.ulrychkristian.cz/cs/work) — Tereza si ho vizuálně/strukturně oblíbila jako referenci. **Pozn.: oba odkazy jsou v prostředí Claude Code na webu blokované egress proxy** — při navazující práci je potřeba buď zkusit fetch z jiného prostředí, nebo požádat Terezu o screenshoty/popis.

### Layout vzory case study (F1 skeleton úroveň)

Jeden plynulý editorial sloupec (ne sidebar jako visualbook), sticky jump-nav nahoře jako **tiché tečky/čísla** (recyklace `#section-counter` vzoru z main) — **ne slovní jargon** ("Empathize"/"Define" apod. by v nav chips znělo AI-textbook-generic). Tooltip u každé tečky v Terezině vlastním jazyce (např. "ten research", "pro koho to je", "to rozhodnutí").

Média — 3 vzory podle situace, ne jeden univerzální:
- **Full-bleed** — jen Hook/hero, dopadový vizuál
- **Side-by-side, střídavě L/R** — hlavní vzor pro Prototype (text u screenu, nikdy scrollovat za obrázkem), taky Define (persona karta) a doménová sekce (moodboard)
- **Inline/grid** — Empathize (stat bloky), Ideate (MoSCoW karty)

Responzivně: side-by-side se na mobilu skládá **obrázek první** (recruiter skenuje vizuálně dřív než čte).

CTA link (Figma/live prototyp) je v header bloku hned nahoře vedle meta řádku (Typ/Rok/Nástroje/Role), ne až na konci — konec case study má svůj vlastní closing CTA (obvykle prezentace).

Cílová délka: ~1600–2000 slov / ~7min read. Vizuální poměr: 20–40 % média — obojí potvrzeno z reálných článků, ne z abstraktního doporučení.

### Case studies — rozsah (4 celkem)

1. **Enow** — stres-management app, tým, Medium: "Enow — Acknowledge Now, Reset Later"
2. **Galerie Venek** — první web pro galerii, tým, Medium: "What makes a first meeting with a gallery..."
3. **Spotify redesign** — sólo cvičení, Medium: "An app that knows what I listen to. Not who I am."
4. **PULS** (landing page only, ne celá appka — tam je nejsilnější motion/vizuál) — Terezina vlastní autorská práce v Praut, žádné externí NDA omezení zatím zmíněné. **Řeší se až v F3 (motion) fázi, po dokončení prvních tří bootcampových case studies.** Nepřidávat dřív.

### Struktura webu (site-level)

Navigace: **Work · About · CV · Contact**

- **Landing/Home** — krátký hero (jméno + jedna věta) rovnou přechází do Work gridu pod ním, žádná prázdná úvodní stránka k proklikání.
- **Work** — grid/index karet odkazujících na case studies, pořadí Enow → Venek → Spotify (PULS přidat později). Karta = náhledový vizuál + title + 1 tag, žádný dlouhý popis v gridu.
- **About** — bio, oblasti práce (`.domain-list` vzor z main, v cs- paletě), odkaz zpět na art hub ("mimo UX tvořím i tradiční ilustrace a instalace →", viz bod 3 výše).
- **CV** — vlastní stránka (klíčové info čitelné v prohlížeči) + tlačítko stáhnout PDF na téže stránce. Zdrojový CV soubor od Terezy zatím nedodán, čeká se.
- **Contact** — reuse `.contact-email` vzoru z main, adaptovaný na světlou cs- paletu.

### Tech stack a doména

- **main zůstává čistý HTML/CSS/JS** (žádná změna) — `uxportfolio` staví ve stejném duchu (žádné strukturální gimmicky, Figma není povinná), ale s jedním rozdílem popsaným níže.
- **Angular se zatím NEPOUŽÍVÁ** pro Work/About/CV/Contact/3 bootcamp case studies — case studies jsou obsahové stránky, ne aplikace se stavem, vanilla JS (hover, reveal-on-scroll) na to stačí stejně jako na main. Angular je záměrně vyhrazený pro pozdější **motion/PULS sekci** (pracovní název) — tam dává smysl, protože PULS *je* Angular, ne proto, že by ho struktura portfolia potřebovala.
- **Build nástroj: Eleventy** (lehký static site generator, ne framework — výstup je pořád plain HTML/CSS/JS bez klientského frameworku). Řeší duplicitu hlavičky/nav/patičky napříč ~8 HTML stránkami (Work index, 3–4 case studies, About, CV, Contact) — partial se edituje na jednom místě (`_includes/header.html` atd.), build vygeneruje kompletní statické soubory. Preferováno oproti runtime JS-partial-loaderu kvůli flickeru hlavičky při načtení stránky (první dojem u recruitera).
- **GitHub Action** spouští `eleventy build` automaticky při pushi — Tereza nemusí pamatovat na lokální build krok před nasazením.
- **Cesty: root-relative od začátku** (`/style.css`, `/work/enow/`), nikdy natvrdo zapsané s aktuální GitHub Pages cestou (`/Portfolio_web/...`). Důvod: budoucí vlastní doména (zatím nevybraná, čistě budoucí věc) se pak napojí přidáním `CNAME` souboru bez jakéhokoli refactoru cest.
- **Doporučená struktura domény, až nějaká bude**: jedna doména, různé cesty (`domena.cz/` = art hub/main, `domena.cz/work/` = profi portfolio/uxportfolio), ne oddělené subdomény — sedí to na už rozhodnutou strategii vzájemných prokliků mezi weby (bod 3 výše).
- Sitemap.xml a podobné drobnosti — s Eleventy prakticky zadarmo (generuje se ze stejných dat jako stránky), řeší se až na konci, není blokující.

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
