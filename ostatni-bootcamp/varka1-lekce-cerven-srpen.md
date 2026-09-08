# Ironhack UX/UI bootcamp – znalostní báze (zdroj pro portfolio)

Sběr informací z transcriptů hodin. **Várka 1** níže. Doplní se várka 2.
Lektorky: Diane/Diana (Figma, animace) a Snežana (UX teorie, proces, portfolio).

---

## VÁRKA 1 – přehled nahrávek (chronologicky)

| Datum | Téma |
|---|---|
| 02.06. | Figma Lab: **Auto layout** (směr, gap, padding, wrap, resizing hug/fill/fixed, min/max width, truncate text, absolute position / ignore auto layout) + úvod do business & competitive analysis |
| 11.06. | **Feature prioritizace**: MoSCoW (Must/Should/Could/Won't), Value vs. Complexity, Buy-a-feature, PIE framework, MVP |
| 13.06. | **Sitemap & informační architektura**: hierarchie, core vs. global/utility pages, jak kreslit vztahy, kroky tvorby, card sorting, mental models, hloubka vs. šířka |
| 16.06. | **Alignment & grids**: pixel pushing, sloupce/řádky, zarovnání textu (left/right/center/justify), zarovnání nepravidelných tvarů (trik s "true center"), 12-column grid, marginy/gutters, **8-point grid**, whitespace |
| 18.06. | **Komponenty & instance**: main component (matka) vs. instance (dítě), push changes, reset instance, detach, nested components, pojmenování/organizace (button/primary), properties (Boolean, Text) |
| 23.06. | **Usability testing**: 5 komponent použitelnosti (learnability, efficiency, memorability, errors, satisfaction), user vs. usability testing, lab vs. remote, formal vs. informal (guerrilla), test plan, scénáře z user flow |
| 27.06. | **Brand attributes & mood boards**: 3–5 atributů, Microsoft/Aaker karty, mood board = look & feel, bez color scheme při testování, tipy (show don't tell, kurátor ne sběratel, velký hero obrázek, keep loose) |
| 30.06. | **Barvy**: psychologie barev (red/yellow/blue/green/orange/purple/black/multicolor), HSB/RGB, UI color systém (primary, secondary, accent, semantic/feedback, neutrals), 60-30-10, monochromatic |
| 01.08. | **Portfolio jako UX projekt**: proč portfolio > CV, ukázat ne říct, About Me, 3–5 case studies, personas (recruiter, hiring manager, PM), "treat yourself as your own client", perfection = enemy of good |
| 11.08. | Krátká: projektový management / **agile mindset**, daily check-ins/standups, final project |
| 20.08. | **Figma Make** 1:1: connectors, skills (/dash), kit z published library, export (editable layers s auto layoutem vs. preview link), pomalé, Claude/Codex kombinace |
| 22.08. | **Smart Animate**: stejná hierarchie vrstev, scale/opacity/position/rotation/color, matching layers (move/push/slide), easing (ease in/out/back, spring), video v Figma (autoplay, loop, mute, triggers video ends) |
| 25.08. | **Desirability testing**: Microsoft/Product Reaction Cards (118 slov, 5 slov, word cloud), Aaker 5 dimenzí (sincerity/excitement/competence/sophistication/ruggedness), 5-second test, A/B, heatmapy, think-aloud |
| 29.08. | Krátká: **Slots** v komponentách (editovatelné instance, stále dědí z main) |

---

## DETAIL PO TÉMATECH

### 1. Auto layout (Figma)
- Auto layout = responzivní design; pracuje vždy s framem.
- 3 způsoby: toggle ikona / pravý klik "Add auto layout" / **Shift+A**.
- Nejdřív atomy (ikony, tagy) → auto layout → až pak komponenta (opačně = bugy).
- Směr: horizontal / vertical / wrap (wrap jen v horizontal).
- Gap: positive / negative / **auto gap** (vyplní podle framu). Padding = modrá, gap = růžová.
- Resizing: **Fixed** (nemění se), **Hug** (obalí obsah – responzivní tlačítko podle textu), **Fill** (vyplní kontejner).
- Min/max width = breakpointy elementu.
- **Truncate text** (tři tečky) pro responzivní text.
- **Absolute position / ignore auto layout** = element ignoruje layout (badge na ikoně); vše ale ve stejném framu → hýbe se společně.

### 2. Feature prioritizace
- **MoSCoW**: Must / Should / Could / Won't – VŽDY všechny 4 sloupce (i Won't).
- **Value vs. Complexity** quadrant – potřebuje PM/vývojáře, pro reálného klienta (finální projekt), NEMÍCHAT s MoSCoW.
- **Buy-a-feature** – fake peníze, uživatelé "kupují" features.
- **PIE**: Potential, Importance, Ease – skóre 1–10, sečíst.
- Pak → MVP (odstavec/dva o core řešení z Must-have) → sitemap → user flow → wireframes.

### 3. Sitemap & IA
- Strom: home nahoře → core pages (1. úroveň) → subpages.
- Utility/global pages (login, cart, account, search) NEPATŘÍ do core navigace – větví z rootu, značit tečkovaně/jinou barvou.
- Stejné šablony (blogy, case studies) = stackované za sebou.
- Šipky ukazují hierarchii "stránka obsahuje tyto podstránky".
- Kroky: 1) dump obsahu na stickies, 2) seskupit do stránek (card sorting), 3) úrovně navigace, 4) nakreslit diagram, 5) iterovat/testovat labeling.
- Vyhnout se: příliš hluboká vs. příliš mělká struktura; duplicitní obsah.
- Mental models: uživatelé přicházejí s očekáváním z konkurence.

### 4. Alignment & grids
- Vyhnout se "pixel pushing" – vytvořit si vlastní systém.
- Vše zarovnat k něčemu, řádky a sloupce; margin nahoře/dole taky.
- Text: left (nejběžnější), right (jen malé prvky – footer/nav), center (tlačítka, H1/H2, malý text), justify (jen print).
- Nepravidelné tvary: kruh přesah 1–2 px přes linku; trojúhelník – najít "true center" přes pomocný tvar.
- **12-column grid** pro desktop (dělitelný 2/3/4/6), tablet 8–10, mobil 3–5.
- Margin / column / gutter.
- **8-point grid**: spacing násobky 8 (8/16/24/32…); malé prvky (ikona+label) = 4. Důvody: konzistence, hierarchie, škálovatelnost, developer-friendly (Apple/Google).
- Whitespace/negative space = aktivní prvek (Tschichold).

### 5. Komponenty & instance
- Main component (matka, jen 1) vs. instance (dítě, N). Změna v komponentě → mění instance; změna v instanci → NE zpět.
- Vytvořit → sbírat všechny komponenty do sekce → používat instance (kopie).
- Push changes to main component / Reset instance / Detach (nevratné).
- Nested components: atomy → karta → stránka; komponenty uvnitř komponent jako instance.
- Naming: `button/primary`, `button/secondary` → složky v Assets.
- Properties: **Boolean** (show/hide vrstvy, true=show), **Text** (label).

### 6. Usability testing
- 5 komponent kvality (Nielsen): learnability, efficiency, memorability, errors (kolik/jak závažné/recovery), satisfaction.
- User testing = zastřešující kategorie; usability testing = podtyp (jak snadno se produkt používá).
- Concept testing = validace nápadu (lo-fi/idea). Usability = navigace, tasky, flow (mid-fi typicky).
- Lab/moderated vs. remote/async; formal vs. informal (guerrilla – kavárna, low cost).
- Ideálně 5 testů. Test plan + recruit + run + analyze. Scénáře z user flow, každý task samostatně.

### 7. Brand attributes & mood boards
- Postup když není brand: visual competitive analysis → 3–5 brand attributes → mood board → barvy/typografie → style tile/guide.
- Atributy = emocionální jádro; ovlivní barvy, typo, layout, i rohy (Apple=round, Microsoft=sharp).
- Mood board = look & feel, exploratory research tool. Reálné barevné obrázky ANO, ale **žádné color-scheme boxy ani slova atributů** (kvůli testování – ať mood board "promluví").
- Tipy: 1) show don't tell (kurátor ne sběratel), 2) i nedigitální inspirace, 3) stavět kolem velkého hero obrázku, 4) keep loose (nic finálního).

### 8. Barvy
- Psychologie: red (vášeň/energie/stop), yellow (optimismus/pozor – potřebuje pozadí), blue (důvěra/klid/korporát), green (příroda/růst/go), orange (přátelské/jídlo/apetit), purple (luxus/kreativita/mystérium), black (elegance/high-end), multicolor (hravé – těžké řídit).
- Primary barva vždy v logu.
- HSB (Hue 0–359 / Saturation / Brightness) – nejpraktičtější; RGB = výchozí pro PC.
- UI color systém: primary + secondary (brand) + accent + semantic/feedback (green=success, blue=info, yellow=warning, red=error) + neutrals.
- **60-30-10** (primary / neutrals / accent).
- Nevolit očividnou barvu; monochromatic = konzervativní/vyvážené (Qatar).

### 9. Portfolio jako UX projekt
- V UX nerozhoduje diplom, ale skills → portfolio je klíčové (víc než CV).
- Portfolio = UX projekt: research, user flows, testing, iterace. Cílovka = recruiteři, hiring manageři, PM.
- Ukázat ne říct; storytelling; NEDĚLAT proces "perfektní" (challenges + jak jsi je řešila = problem solving + empatie).
- Struktura: **About Me** (osobnost, "šla bys s tebou na oběd?", i icebreaker spirit animal), **3–5 case studies** (must 3), skills/tools tertiary, CV jen tlačítko download.
- 5 projektů z bootcampu ukáže progres. P1 baby, P2 celý proces, P3 native app (range: mobil + desktop responsivní).
- Personas: **recruiter** (rychlé filtrování, pretty pixels, 100 portfolií), **hiring manager**, **PM**.
- Mindset: "treat yourself as your own client", nastav deadline, perfection = enemy of good, get it done (startup tempo).

### 10. Project management
- Bootcamp běží na **agile mindset**; daily check-ins/standups = návyk. Použitelné v interview a case studies.

### 11. Figma Make
- Vstup: frame (right-click Send to Figma Make / Ctrl+C+V), PDF, obrázky, video. Čisté framy, pojmenované vrstvy.
- **Connectors** (Notion, GitHub, Slack…) = přinášejí info zvenčí (např. brief z Notionu, obousměrně).
- **Skills** (/dash) = recept na opakovaný workflow (např. review checklist), lze z community.
- Prompt: pozitivní klíčová slova (ne negace); enhance prompt; default model (Claude nejlepší, žere tokeny).
- **Kit** z published library → aplikuje design guidelines.
- Export: kopírovat design → editable layers s auto layoutem (ale bez interakcí, karty jako auto layout ne komponenty), nebo preview link (celý flow, neupravitelné, pro vývojáře).
- Není mandatorní pro P4; není auto-sync do Figma design. Diane sama v práci používá Claude (web + Codex builder).

### 12. Smart Animate & animace
- Podmínka: **stejná hierarchie a názvy vrstev** obou framů (jinak dissolve).
- Umí: scale, position, opacity, rotation, color (kombinovatelné). Skrytý prvek nechat s opacity 0 (ne smazat – potřebuje rozdíl).
- Matching layers při move/push/slide = dvě animace naráz. Fixed/sticky vrstvy se neanimují.
- Easing: linear, ease in/out/in-out, ease-back (bounce), spring (gentle/quick/bouncy/slow), custom bezier/spring.
- **Video** (placený plán): drag / fill / shortcut, autoplay, loop, mute; akce play/pause/mute/set time/jump; triggery video ends/hits → open overlay; reset video state.

### 13. Desirability testing
- **Microsoft / Product Reaction Cards**: 118 slov (pozitiv/negativ/neutrál), uživatel vybere ~5; encourage i negativní; výstup word cloud / frequency + ptát se PROČ (kvalitativní).
- **Aaker brand personality** (Stanford, 1997): 5 dimenzí – sincerity, excitement, competence, sophistication, ruggedness; přes survey/škály; mapovat vybraná slova → dimenze; intended vs. perceived.
- **5-second test**: první dojem, clarity/recall/impression; neprozradit předem.
- **A/B testing**, heatmapy (eye tracking), visual association (emoji/metafory), think-aloud s emocemi.
- Kdy: mood boardy (Reaction Cards) → mid-fi (usability, must) → **hi-fi (desirability, must)**; usability na hi-fi jen pokud se hodně změnilo.

### 14. Slots (komponenty)
- Slot = editovatelná instance, stále dědí z main component (změna barvy komponenty se propíše, pokud link není rozbitý).
- Pro P4 nemandatorní; hodí se pro flexibilní layouty (řádky, FAQ), ne pro triviální tlačítka.
