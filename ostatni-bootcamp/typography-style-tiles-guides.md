# Typografie, Style Tiles a Style Guides — studijní poznámky (Ironhack UX/UI Bootcamp)

Shrnutí ze tří přednáškových prezentací: **Typography**, **Style Tiles** a **Style Guides**.

---

## 1. Typografie

### Co je typografie
Typografie je **umění a technika uspořádání písma** tak, aby byl psaný jazyk čitelný, srozumitelný a vizuálně přitažlivý.

- Typografie je **naprosto všude** — telefon, billboard, kelímek od kávy, blog i tento kurz.
- Každý font, písmeno a uspořádání znaků ovlivňuje, jak je sdělení vnímáno.
- **Dobrá typografie** nastavuje tón sdělení a pomáhá posílit jeho význam a kontext.

### Anatomie typografie — klíčové pojmy

**Font vs. typeface (písmo vs. řez)**
- **Typeface** = definice (např. *Futura*)
- **Font** = konkrétní instance/řez (např. *Futura Bold*, *Futura Light Italic*)
- Příklad: Futura (typeface) → Futura Light, Futura Book, Futura Medium, Futura Bold, Futura Light Italic (fonty)

**Linky (measurement lines)** — zarovnané znaky lze měřit podle minimálně 5 linek:
- **Baseline** — linka, na které text „sedí“
- **Cap-height** — vrchol velkých písmen
- **Ascender** — kam sahá horní dotažnice (např. u h, k)
- **Descender** — kam sahá dolní dotažnice (např. u g)
- **X-height** — výška malých písmen bez horní/dolní dotažnice

**Prostor (Space)** — tři klíčové pojmy:
- **Kerning** — úprava mezery mezi konkrétním párem znaků (např. AV, TY), aby text vypadal vyváženě
- **Tracking** — úprava mezer mezi všemi znaky (character spacing) rovnoměrně v celém textu/bloku
- **Leading** — mezera mezi řádky (řádkování), měřeno mezi baselines; musí dát dostatek prostoru pro descendery

> Tip na procvičení: hra **Kerntype** (kerntype.com) — hra na trénink kerningu.

### Styly typografie (kategorie písem)

1. **Serif (patkové)** — mají patky (serify) na koncích tahů.
   - Formální, klasické, snadno čitelné
   - Preferované pro delší text v knihách, novinách, časopisech

2. **Sans Serif (bezpatkové)** — bez patek, tahy mají stejnou tloušťku (málo/žádný kontrast tahu).
   - Všestranné, moderní, snadno čitelné
   - Nejrozšířenější pro zobrazení textu na obrazovkách počítačů

3. **Slab Serif** — velmi tlusté patky, téměř stejně silné jako hlavní tahy.
   - Špatně čitelné ve velkém množství textu
   - Vizuálně unikátní → skvělé pro titulky a nadpisy

4. **Fixed (monospaced)** — typicky fonty příkazové řádky a code editorů.
   - Každý znak má stejnou šířku
   - V designu se používají zřídka, ale hodí se jako „typografické koření“

5. **Display** — vznikly z reklamní stylistiky počátku 20. století, vytvořené aby prodávaly produkty → velmi výrazné.
   - Užitečné pro vytvoření nálady/tónu nebo upoutání pozornosti
   - Obtížně čitelné ve velkém množství textu

6. **Handwritten (ručně psané)** — vypadají jako lidské písmo.
   - Velmi neformální, „vřelé“
   - Špatně čitelné → používat s mírou pro navození blízké/osobní nálady

7. **Monospace** — každé písmeno/znak zabírá stejný horizontální prostor (na rozdíl od proporcionálního písma).
   - Časté u raných počítačů a terminálů kvůli omezeným grafickým možnostem

### Důležitost typografie v UI

> „Na povrchu je většina UI aplikace přesně tím typem písma, ve kterém je nastavena.“ — Thomas Byttebier

Příklad: Aplikace Weather pro iOS — kromě dekorativních mraků a ikon je celé UI v podstatě čistý text.

**Typografie v UI se týká:**
- Balance (rovnováha)
- Positioning (umístění)
- Hierarchy (hierarchie)
- Structure (struktura)

### Výběr fontu — kde začít

**Legibilita (čitelnost)** je základ:
- Snadné přečtení obsahu
- Správné vyplnění formuláře
- Následování sady instrukcí

**Poté** — hlavní dovedností typografie je **stylizace textu** tak, aby vznikla vizuální hierarchie a layout snadný na skenování očima, kde jednotlivé typografické prvky „drží svou pozici“ vůči sobě navzájem.

### Výběr fontů podle účelu

**1. Body fonts (textové/odstavcové fonty)**
- Používají se v odstavcích a obsahu — tam, kde lidé tráví nejvíce času čtením
- Používají se v malých velikostech → mají nejvíce omezení
- Pokud používáte jen 1 font pro celé UI, musí dobře fungovat jako body font
- Zdroje pro výběr: fontsinuse.com, fontpair.co (obsahují ukázky písem, podobné fonty a doporučené páry)

**2. Title fonts (titulkové fonty)**
Pravidla pro výběr titulkového fontu:
1. Vybrat něco, co komunikuje vaši značku
2. Vybrat něco čistého a jednoduchého
   - Vybrat zajímavé tvary písmen (letterforms)
   - Vybrat zajímavou váhu (buď THIN, nebo BLACK/BOLD)
- Pokud jde o silně brandovaný vzhled, sepište **atributy značky** (adjektiva popisující brand) a hledejte fonty, které tyto vlastnosti ztělesňují

**3. UI Elements fonts (fonty pro prvky rozhraní)**
- Fonty pro tlačítka, labely, navigační lišty apod. — zde máte mnohem větší volnost
- Techniky: UPPERCASE (verzálky), prostrkání znaků (letter-spacing)
- Obvykle jde o 1–2 slova → lze použít i fonty, které nejsou skvělé pro běžný text

**4. Čísla (Numbers)**
- U datově náročných UI (tabulky, seznamy čísel) je nutné vybrat font, kde se **čísla zarovnávají** — tj. mají tabulkovou (stejnou) šířku, aby se sloupce čísel správně zarovnaly pod sebe.

### Obecná pravidla výběru fontu
1. **Keep it simple** — udržujte to jednoduché
2. **Stay away from default fonts** — vyhněte se výchozím fontům
3. **Use context** — používejte kontext k výběru titulkových/display fontů odpovídajících vizuální identitě

### Párování fontů (Font Pairing)

**Dva hlavní přístupy k párování:**
- **Organicky (Organically)** — jde o utilitární, čistý vzhled, mírně brandovaný
- **Branded** — jde více o vizuální komunikaci značky a vyjádření určité osobnosti

**Vztah brandu a typografie:**
- Čím více je produkt brandovaný, tím více fontů obvykle používá
- Méně použití „čistých/jednoduchých“ fontů u silně brandovaných produktů
- Silně brandované stránky chtějí vytvořit vlastní „svět“
- Čím víc osobnosti font má, tím méně se má používat napříč designem

**Škála brandingu:**
| Úroveň | Charakteristika | Počet fontů |
|---|---|---|
| Low brand | čistý, jednoduchý | 1–2 fonty |
| Medium brand | zřetelný brand/názor, stále „čisté“ | 1–3 fonty |
| High brand | důkladně brandované, není „čisté/jednoduché“ | 2+ fontů |

**Triky pro párování fontů:**
- Spárovat **serif** font se **sans-serif** fontem
- Použít písma **ze stejné rodiny** (family)
- Použít fonty **od stejného designéra**
- Spárovat dva fonty, které si esteticky odpovídají
- Pokud máte pro text velmi neutrální typeface, snáze se k němu hledá font s výraznější osobností pro titulek

**Praktické upozornění:** Při výběru fontu dávejte pozor, aby nabízel **kurzívu (italics)** a **tučný řez (bold)** — zjistit to až v půlce designu a muset měnit font kvůli chybějícím řezům je velká ztráta času.

### Typografické zdroje (nástroje/odkazy zmíněné v prezentaci)
- Google Fonts — největší repozitář zdarma dostupných fontů
- Fontface Ninja — Chrome plugin
- Font Pair
- Fonts in Use
- Typewolf's Definitive Guide to Free Fonts
- Typ.io — inspirace
- Type Connection
- Fontjoy

---

## 2. Style Tiles

### Co jsou Style Tiles
**Style Tile** je designový výstup (deliverable) skládající se z **fontů, barev a prvků rozhraní**, které komunikují **esenci vizuální značky pro web**.

**K čemu slouží:**
- Rychlý a snadný způsob, jak brzy v projektu určit **designový směr**, ještě než se investuje čas a energie do hi-fi mockupů
- Pomáhají vytvořit **společný vizuální jazyk** mezi designéry a stakeholdery (klienty)
- Zaměřují se **pouze na estetiku** — oddělují ji od struktury a layoutu (to je úkolem mockupů)

### Style Tile vs. Moodboard
> „To, co dělá style tile jedinečným oproti jiným nástrojům, je to, že jde specificky o **metodu vytvoření vizuálního slovníku mezi designérem a klientem**, spíše než o nastavení 'nálady' nebo definování prvků, které nakonec skončí v plném layoutu.“ — Samantha Warren, Design Lead at Adobe (tvůrkyně konceptu Style Tiles)

- **Moodboard** = nastavuje náladu, inspirace, méně konkrétní
- **Style Tile** = konkrétní designová rozhodnutí (fonty, barvy, komponenty) ve formě, kterou lze přímo použít při stavbě UI

### Kdy použít Style Tiles
> „Style tiles are for when a **mood board is too vague** and a **comp (mockup) is too literal**.“ — Styletil.es

Style tiles slouží jako mezikrok mezi příliš vágní inspirací (moodboard) a příliš konkrétním, hotovým návrhem (comp/mockup).

I v osobních projektech je to skvělý způsob, jak **předem** vidět, jak budou typografie, barevná paleta a styl prvků fungovat dohromady.

### Jak vytvořit Style Tile — co má obsahovat

Style tile by měl zahrnovat **základní prvky vizuálního designu**:

- **Typografie**
  - Ukázka nadpisu (Header), podnadpisu (Subheader) a textu (Body text)
  - Názvy fontů, velikosti, barvy
- **Příklady stylů tlačítek** (button styles)
- **Barevné vzorky** (color swatches) — s hex kódy
- **Příklad textového odkazu** (text link)
- Jakékoli další assety relevantní pro daný produkt (loga — verze na světlém/tmavém pozadí, obrázky/patterny, ikony...)

### Typický obsah Style Tile (příklad struktury)
- Style Tile nadpis + krátký popisný text + odkaz na hlavní stránku/blog
- Logo — verze na bílém a na tmavém pozadí
- Content example: headline, subheadline, odstavec textu s ukázkou inline odkazu
- Tlačítka ve více variantách (primary, secondary, outline)
- Barvy — barevné kruhy/čtverce s názvem barvy a hex kódem
- Images/Patterns — ukázky obrázkového stylu nebo vzorů

### Shrnutí — Style Tiles
- Style Tile = designový výstup obsahující fonty, barvy a UI prvky komunikující esenci vizuální značky pro web
- Hlavní rozdíl oproti moodboardu: Style tiles rychle generují několik designových nápadů pro klienty a přidávají **vztahy mezi prvky** v rámci designu
- Jde specificky o metodu vytváření vizuálního slovníku mezi designérem a klientem
- Používají se, když je moodboard příliš vágní a mockup příliš konkrétní
- V osobních projektech pomáhají předem vidět, jak spolu budou fungovat typografie, barevná paleta a rozhodnutí o stylu prvků

---

## 3. Style Guides (Stylové/designové příručky)

### Co jsou Style Guides
Style guide je **soubor standardů**, které komunikují designové instrukce týmu nebo organizaci, aby designy odpovídaly hlasu a misi společnosti (**consistency = konzistence**).

Obsahuje typicky:
- Barevnou paletu
- UI komponenty
- Typografii
- Pravidla pro logo (clear space, proporce, velikost, barva)

### Příklad z praxe: pravidla pro logo (Facebook Like Button)
Ukázka typického obsahu brand/style guide pro logo:
- **Clear Space** — udržení minimálního volného prostoru okolo loga/ikony, aby nebylo rušeno jinými vizuálními prvky
- **Maintaining Shape and Proportions** — nikdy neupravovat, neotáčet, nezdobit ani nepřekreslovat logo; při zmenšování/zvětšování zachovat proporce (např. držením Shift)
- **Size** — logo musí být reprodukováno v čitelné velikosti a nesmí působit podřadně vůči jiným partnerským logům
- **Color** — nikdy neměnit barvu loga; při technických omezeních lze použít černobílou verzi

### Minimální Style Guide — co by měl obsahovat (bare minimum)

1. **Color palette** — barevná paleta s hex hodnotami a CSS proměnnými pro každou barvu (např. @primaryColor, @headingColor, @errorColor, @warningColor)
2. **Logo**
   - Master logo (hlavní verze, používaná vždy pokud možné)
   - Varianty loga (např. „drops“/zkrácené verze v různých barevných verzích)
3. **Buttons (tlačítka)**
   - Primary / Secondary tlačítka
   - Velikosti: Large / Medium / Small
   - Stavy: Default, Hover, Pressed/Active, Disabled, Focus
   - Varianty obsahu: Text only, Icon and text, Text and icon (se šipkou), pouze ikona
4. **Forms (formuláře)**
   - Stavy inputů: Focus, Typing/Entered, Verified, Error, Disabled/Inactive, Autocomplete/dropdown
   - Barvy stavů (např. pressed, inactive) s hex kódy
   - Radio buttons a checkboxy ve stavech: Normal, Hover, Selected, Disabled
   - Styly odkazů (link styles)
   - Standardní vs. „Tiny“ varianty polí (např. pro zadávání rozměrů)
5. **Typography**
   - Definice typeface (primárního písma) s popisem charakteru (např. „robustní, ale přátelské“)
   - Ukázka celé abecedy (velká/malá písmena, čísla)
   - Škála velikostí fontu (typicky ~8 různých velikostí) s určeným výchozím (default) stylem
   - Hierarchie nadpisů: XL Heading, LG Heading (H1), MD Heading (H2), SM Heading (H3), XS Heading (H4)
   - Intro paragraph vs. běžný paragraph
   - Seznamy: Unordered list (odrážky), Ordered list (číslované)
6. **Iconography (ikonografie)**
   - **Symbolism** — každá ikona reprezentuje konkrétní akci nebo funkci; důležitá je konzistence používání ikon napříč aplikací
   - Příklad běžně používaných ikon a jejich významu (Edit, Refresh, Settings/Preferences, Messages, Log Out/Exit, Search/Find, New Group, Open, Save, Reply to Comment, Print, Add/New, Remove/Delete, Close/Dismiss, Expand Full Screen, Pin/Add to Quick Access, Undo, Redo, Help, View, navigační šipky: Back/Previous, Forward/Next, Expand/Collapse, Download, First/Previous/Next/Last Page)

### Proč potřebujeme style guide (Why we need it)

1. **Udržuje konzistenci** (maintains consistency) napříč produktem
2. **Pomáhá efektivně využívat čas** (use our time efficiently) — designéři i vývojáři nemusí znovu vymýšlet řešení
3. **Podporuje znovupoužitelnost** (promote reuse) komponent a řešení

### ROI (návratnost) style guidelines a design systémů

Zavedení style guide/design systému přináší:
- **Zvýšení rychlosti a zkrácení time-to-market** (increase velocity and time to market)
- **Zvýšení hodnoty produktu** (increase product value)
- **Zvýšení spolupráce a sdílení znalostí** (increase collaboration and knowledge sharing)
- **Méně promarněného času a peněz** (less time and money wasted)

### Příklady a zdroje design systémů
- Design system examples: designsystemsrepo.com (repozitář reálných příkladů design systémů firem jako Buffer, Frontify, Marvel, Shyp aj.)

### Shrnutí — Style Guides
- Style Guide = soubor standardů, které komunikují designové instrukce týmu/organizaci, aby designy odpovídaly hlasu a misi firmy
- Užitečný style guide by měl obsahovat **sjednocené UI prvky** odpovídající identitě značky (barvy, typografii, komponenty, ikony, logo)

---

## Klíčová terminologie (glosář)

| Pojem | Vysvětlení |
|---|---|
| Typeface | Definice písma (rodina, např. Futura) |
| Font | Konkrétní instance/řez písma (např. Futura Bold) |
| Baseline | Linka, na níž text „sedí“ |
| Cap-height | Výška velkých písmen |
| X-height | Výška malých písmen bez dotažnic |
| Ascender / Descender | Horní / dolní dotažnice písmen |
| Kerning | Úprava mezery mezi konkrétním párem znaků |
| Tracking | Rovnoměrná úprava mezer mezi všemi znaky |
| Leading | Řádkování — mezera mezi řádky textu |
| Serif / Sans Serif | Patkové / bezpatkové písmo |
| Slab Serif | Písmo s velmi silnými patkami |
| Display font | Výrazné, „reklamní“ písmo pro titulky/nálady |
| Monospace | Písmo se stejnou šířkou všech znaků |
| Style Tile | Deliverable s fonty/barvami/UI prvky definující esenci vizuální značky |
| Style Guide | Soubor standardů pro konzistentní design napříč produktem/organizací |
| Design System | Rozšířený, komplexní systém komponent a pravidel (na rozdíl od minimálního style guide) |
