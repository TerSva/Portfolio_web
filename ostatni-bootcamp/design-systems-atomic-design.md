# Design Systems & Atomic Design (Ironhack UX/UI Bootcamp)

## 1. Co je Design System

**Definice:** Dokumentace a procesy, které pomáhají týmům dělat rozhodnutí, a tím zvyšují kvalitu produktů tím, že se pracuje chytřeji ("working smarter").

> "A Design System isn't a Project. It's a Product, Serving Products." — Nathan Curtis

> "Design does not scale easily. Design scales. But it scales only with a design system." — Marcin Treder, CEO UXPin

Design systémy se také nazývají: design languages, style guides, visual identities.

### Vztah Design Systém → Produkt
Design system definuje **pravidla a propojení (rules and connections)**, ze kterých vzniká produkt. Skládá se ze dvou hlavních částí:

- **Style Guide** — definuje abstraktní styly: barvy, ikony, grid, brand, paddings, margins, typografie atd.
- **Component Library** — definuje použitelné bloky (usable blocks): item list, button, image, hero, gallery, article, navigation atd.

Design system dále obsahuje: information architecture, foundations, taxonomie, content principles, motion, dictionary, accessibility, možné kombinace komponent atd.

### Příklady reálných design systémů
- **Polaris by Shopify** (polaris.shopify.com) — design systém pro konzistentní zkušenost obchodníků na Shopify.
- **Spotify Brand Guidelines** — přesná pravidla pro práci s barvou (Spotify Green), fonty (Circular Spotify + fallbacky), práci s obsahem třetích stran a album artem (příklady YES/NO).
- **WooThemes Palette** — barevná paleta s definovaným účelem každé barvy (primary/secondary pozadí, tlačítka, odkazy, ohraničení).

## 2. Typy Design Systémů

Běžné typy design systémů:
1. **Static style** (statický styl guide)
2. **Voice and tone guides**
3. **Front-end code guidelines**
4. **Component or pattern libraries**

## 3. Proč jsou Design Systémy důležité

### Hodnota design systémů
Používání design systému garantuje **konzistenci (consistency)** produktů a umožňuje vytvářet **škálovatelné digitální zkušenosti (scalable digital experiences)**, které firmě umožní rychle a kontrolovaně růst.

Design system je "živý nástroj" (living tool) obsahující prvky společného jazyka:
- File system
- Nomenklatury (pojmenování)
- Organizace vybavení (počítače, nastavení atd.)
- Design principy
- Nástroje k použití (software, handoff atd.)
- Další prvky nutné pro konzistentní digitální produkty (komponenty, procesy atd.)

### Klíčové přínosy
- **Sdílená kultura designu (Design shared culture)** — design systém by měl být řízen principy, které vytvářejí unikátní designovou kulturu v týmu.
- **Škálovatelnost designu (Design scalability)** — design byl vždy hlavně o systémech a o tom, jak vytvářet produkty škálovatelným a opakovatelným způsobem. Tyto systémy umožňují zvládat chaos a vytvářet lepší produkty.
- **Responzivní design (Responsive Design)** — je třeba vytvořit pravidla, která pomohou rozhodnout, které prvky zůstanou konstantní a které se budou měnit při adaptaci designu na různá rozvržení (layouty).

### Citáty k zapamatování
> "The challenge to create coherent experiences multiplies exponentially as more people are added to the mix. Also over time, no matter how consistent or small a team is, different people will contribute new solutions and styles, causing experiences to diverge." — Airbnb

> Bez design systému může produkt rychle ztratit identitu a začít vypadat jako "patchwork quilt" (sešité záplaty) — sbírka nesourodých věcí, což vytváří nesourodou uživatelskou zkušenost. Solidní design systém zajišťuje, že brand a vizuální jazyk zůstanou konzistentní bez ohledu na počet funkcí nebo členů týmu přidaných do projektu.

## 4. Komponenty a obsah (Components and content)

### Komponenty, které zůstávají konstantní napříč pohledy (views)
- Typeface (font)
- Base unit (pixely, pointy atd.)
- Barva (Color)
- Styling

### Komponenty, které se mohou měnit napříč pohledy
- Grids (mřížky)
- Layout (rozvržení)
- Font size (velikost fontu)
- Element size (velikost prvku)
- Leading / line height (řádkování)

### Pravidlo obsahu
**Obsah musí být vždy stejný.** Cílem design systému je zajistit, že obsah je zobrazován co nejefektivnějším způsobem napříč všemi zařízeními na platformě. Proto je kritické, aby obsah zůstal konstantní napříč platformou.

## 5. Klíčové vizuální komponenty design systému

Hlavní (core) komponenty vizuálního design systému zahrnují: **typografii, layout, styling a barvu**.

### Typografie
- Definuje hierarchii textu, řezy písma, velikosti.

### Barvy (Colors)
- Paleta barev s jasně definovaným účelem každé barvy (např. primary/secondary background, buttons, links, borders) — viz příklad WooThemes.

### Styling
- Např. definice tlačítek (buttons) — styly: Primary Fill, Primary Outline, Dark Fill, Dark Outline, Light Fill — s odpovídajícím kódem (HTML/CSS/JS třídy).

### Grids and Layout (Mřížky a rozvržení)
- Příklad: **lg > 1200px width → 12 columns, 30px gutter, 15px margin.**
- Grid systém definuje, jak se prvky (1, 2, 3, 4, 6, 8 sloupců) skládají do řádků.

### Spacing — pravidlo 8-BASE (8 Point Grid)
- Existují různá pravidla pro rozměry nazývaná **BASE**; nejběžnější je **BASE 8**, protože nejlépe sedí na největší počet zařízení na trhu.
- Doporučuje se vždy používat Material Design a iOS standardy pro lepší responzivní zkušenosti — toto pravidlo rozestupů se nazývá **BASE UNIT**.
- Base unit (8px/pt) se aplikuje na všechny prvky: šířky sloupců, margins, texty, ikony, obrázky atd.

### UI Primitives (příklad)
Základní stavební hodnoty, ze kterých vychází komponenty:
- color: #4F5766
- font-family: Myriad Pro
- font-size: 16px
- padding: 16px
- background-color: #F2F6F9
- border-radius: 4px, border-width: 1px, border-color: #CDD3D9, border-style: solid

*(Toto jsou tzv. design tokeny — primitivní hodnoty používané napříč komponentami.)*

## 6. Design system examples (zdroj)
- Kompletní přehled reálných design systémů: **https://designsystemsrepo.com/**

## 7. Atomic Design — co to je

**Atomic Design** je metodologie pro tvorbu design systémů vytvořená **Bradem Frostem**, inspirovaná chemií — atomy se spojují do molekul, které tvoří komplexnější organismy.

### 5 úrovní Atomic Designu
1. **Atoms (atomy)**
2. **Molecules (molekuly)**
3. **Organisms (organismy)**
4. **Templates (šablony)**
5. **Pages (stránky)**

Tato hierarchie jde od nejmenších/nejzákladnějších prvků po celé konkrétní stránky s reálným obsahem.

### Detailní popis jednotlivých úrovní

**Atoms (Atomy)**
- Nejmenší, základní stavební bloky UI — nedají se dále rozkládat, aniž by přestaly plnit svou funkci.
- Příklady: label, input pole, tlačítko (button), barvy, fonty.
- Příklad ze slidu: "SEARCH THE SITE" formulář rozložený na Label + Input + Button jako samostatné atomy.
- Další příklad atomů: základní barvy paletty (Roboto medium/regular/light, velikosti 12–24px), barevné kruhy s hex kódy, z-index vrstvy, checkboxy, radio buttony, switches (ve stavech: not selected, hovered, selected/checked, disabled).

**Molecules (Molekuly)**
- Skupiny atomů spojených dohromady, které fungují jako jedna jednotka.
- Příklad: vyhledávací formulář (search form) = label + input + button dohromady = jedna funkční molekula.
- Další příklady molekul: dropdown menu (s vyhledáváním, ikonami, kategoriemi), alert/notification boxy (default vs. dismissable, různé barevné varianty pro warning/info/success), modální okna (modal s heading, textem a akčními tlačítky).

**Organisms (Organismy)**
- Komplexnější komponenty složené z molekul a/nebo atomů, tvořící ucelenou, rozpoznatelnou část rozhraní.
- Příklad: hlavička webu (header) = logo + navigace (Home, About, Blog, Contact) + vyhledávací molekula dohromady.
- Další příklad: navigační panel s menu (Home, About, Features, Pricing, Contact), search barem, hamburger menu a avatarem uživatele.
- Formuláře jako organismy: přihlašovací formulář (login) i vícepolový formulář (adresa, město, stát, země, PSČ) s validačními hláškami.
- Rozšířené dropdown organismy s podkategoriemi (submenu options).

**Templates (Šablony)**
- Skládají organismy dohromady a vytvářejí **kostru/wireframe stránky** — definují rozvržení obsahu (layout), ale bez reálného finálního obsahu (placeholder texty a obrázky).
- Zaměřují se na **content structure** produktu spíše než na konečný obsah.
- Příklad: wireframe stránky s headerem, velkým obrázkovým blokem, sloupci textu a menšími obrázkovými bloky — vše jako placeholdery.
- Šablona přihlašovacího formuláře v kontextu stránky (např. na pruhovaném pozadí).

**Pages (Stránky)**
- Konkrétní instance šablon se **skutečným reprezentativním obsahem** (reálné texty, obrázky, data) — ukazují, jak bude finální UI vypadat.
- Stránky se používají k testování efektivity podkladového designového systému.
- Příklad: finální stránka s reálnými fotografiemi hor, nadpisem "This Is Real Content", popiskami a odznakem "STAFF PICK".
- Reálný příklad z byznysu: aplikace "Be international" (francouzský produkt) — konkrétní obrazovky se skutečnými jmény kontaktů a telefonními čísly jako plně dotažené "pages".

### Ukázkový příklad: Atomic Design pro Streamloan
Kompletní srovnání pěti úrovní na jednom produktu (finanční/nemovitostní aplikace):
- **Atoms:** ikony, obrázkový placeholder 375×250, textové pole "Property Name", tlačítko.
- **Molecules:** stejné prvky seskupené do menší karty s progress barem.
- **Organisms:** karta s "Property Name", progress bary a seznamem uživatelů se stavem kategorie (Incomplete/Complete).
- **Templates:** stránka s breadcrumb navigací, kartou nemovitosti a seznamem více uživatelů — stále v kostře.
- **Pages:** finální stránka s reálnými jmény ("Bryant St.", "John Harden", "Jane Peachcore") a skutečnými daty o identitě/assetech.

## 8. Proč používat Atomic Design

Výhody použití Atomic Design metodologie:
- Umožňuje **mix and match** (míchání a kombinování) komponent
- Tvorba style guide se výrazně zjednodušuje
- **Snadno čitelný kód** (easy-to-read code)
- **Kód je konzistentnější**
- Není potřeba se soustředit na pixel-perfect design u každé obrazovky zvlášť
- **Rychlejší prototypování** (quicker prototyping)
- Snazší aktualizace a odstraňování částí webu/produktu

### Důležitá poznámka k flexibilitě metodologie
Atomic Design, stejně jako jakýkoliv hodnotný nástroj, **nemusí být aplikován jako "vše nebo nic"**. Bylo by škoda Atomic Design zavrhnout jen proto, že každá jeho část hned nesedí na konkrétní situaci. Stejně tak by byla škoda slepě převzít všechny části bez promyšlení, co pro daný tým funguje nejlépe. → **Metodologii je vhodné přizpůsobit potřebám týmu/projektu.**

## 9. Interface Inventories (Inventura rozhraní)

**Definice:** "…a comprehensive collection of the bits and pieces that make up your interface" — komplexní sbírka všech kousků a součástek, které tvoří rozhraní.

### Jak začít s Interface Inventory
Začít jednoduchým úkolem: udělat spoustu screenshotů UI a kategorizovat je do skupin (v Google Slides / Keynote prezentaci).

### 4 úrovně kategorizace
1. **Elements (prvky)** — nejmenší jednotlivé kousky rozhraní fungující jako stavební bloky komponent (např. tlačítka, pole formuláře).
2. **Components (komponenty)** — nezávislé a opakovaně používané kousky rozhraní postavené z elementů (např. položka toolbaru, page loader).
3. **Modules (moduly)** — plné funkcionality postavené z komponent (např. toolbar, vyhledávání).
4. **Layout definitions** — všechny výše uvedené používají základní soubory (proměnné, definice ikonových fontů atd.) ke sjednocení stylingu.

### Postup vytvoření Interface Inventory (podle Brada Frosta)
1. **Vytvořit prázdnou šablonu (blank template)**, kam se budou ukládat a kategorizovat komponenty rozhraní.
2. **Začít se screenshotováním** — zachytit nadpisy, textová pole, radio buttony, karusely, akordeony, taby, obrázky, ikony, video přehrávače, grafy atd. Cílem není zachytit každou jednotlivou instanci komponenty, ale odhalit odlišná zpracování (treatments) dané komponenty (např. tlačítko se zkosením a šipkou vs. tlačítko bez nich).
3. **Kategorizovat screenshoty** — cílem je vidět vedle sebe všechny varianty konkrétní "molekuly".
4. **Prezentovat** inventuru rozhraní třídě/týmu.

### Class exercise (cvičení)
Prozkoumat demo vytvořené nástrojem **Pattern Lab**, které demonstruje velkoplošný (large-scale) design systém, na kterém je aplikována atomická klasifikace — ukazuje všech pět úrovní v praxi.

## 10. Shrnutí (Summary)

### Design Systems
- Design systémy (nazývané také design languages, style guides, visual identities) jsou dokumenty, které pomáhají firmám budovat lepší uživatelské zkušenosti a silnější značku (brand).
- Hlavní komponenty jsou: **Typografie, Grids and Layout, Styling a Color**.
- Design systémy mohou ilustrovat osobnost značky a definovat, jak má značka komunikovat se zákazníky.
- Front-end code guidelines pomáhají vývojářům a definují pattern library se všemi potřebnými komponentami.

### Atomic Design
- Atomic Design je **metaforický framework** pro budování design systémů.
- Atomic Design se skládá z: **Atoms, Molecules, Organisms, Templates a Pages.**
- Atomic Design je vhodný pro vytváření extrémně čistých (clean) style guides a škálovatelných systémů.
