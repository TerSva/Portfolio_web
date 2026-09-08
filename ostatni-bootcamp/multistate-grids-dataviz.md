# Studijní poznámky – Ironhack UX/UI Bootcamp

Souhrn tří přednášek: **Designing for Multi-state**, **Alignment & Grids**, **Intro to Data Visualization**.

---

## 1. Designing for Multi-state (návrh pro více stavů obrazovky)

### Hlavní myšlenka
- Design není jen o ideálním případu, ideálním workflow nebo ideálním uživateli. Je potřeba myslet na **všechny možné stavy**, se kterými bude uživatel interagovat.
- Ne každý projekt potřebuje navrhnout úplně všechny stavy – ale designový proces by neměl být zaměřený jen na "ideální stav".
- Analogie: semafor nemá jen jedno světlo (zelenou) – potřebuje červenou, oranžovou i zelenou, aby fungoval bezpečně za všech okolností.
- Špatný příklad z praxe: e-shop (Renfe), který při chybě zobrazí jen strohé "An error has occurred" bez další nápovědy – ukázka nedomyšleného error stavu.

### Hlavní kategorie stavů obrazovky

1. **Blank / Empty state** (prázdný stav)
   - Nastává při prvním spuštění (žádná data), po vymazání dat, nebo po vyhledávání bez výsledků.
   - Co by měl blank state dělat:
     - Vysvětlit, jak rozhraní funguje
     - Doporučit další akce (recommended actions)
     - Nabídnout tutoriály
     - Dát tipy a triky
     - Vyzvat uživatele, aby začal vyplňovat obsah (CTA typu "Select video", "Upload your first video")
   - Blank state se používá i pro "no search results" (např. "No Result Found" + návrh alternativních hledaných výrazů).

2. **Partial state** (částečný stav)
   - Stav, kdy je obsah částečně vyplněný a chceme podpořit další interakci uživatele (např. ukazatel "Profile Strength: Advanced" s progress barem a CTA "Add summary").
   - Cíl: povzbudit uživatele, aby pokračoval a dokončil profil/proces.

3. **Loading state** (stav načítání)
   - Objevuje se, když uživatel provede akci a výsledek má zpoždění (např. čekání na odpověď serveru).
   - Tři hlavní typy loading designu:
     - **Skeleton** (kostra rozložení – šedé placeholdery napodobující finální layout, tzv. "perceived performance")
     - **Spinners** (indeterminate wait – nevíme, jak dlouho to bude trvat)
     - **Progress bars** (determinate wait – víme procento/postup)

4. **Error states** (chybové stavy)
   - Měly by být **přátelské, nápomocné a vést uživatele** dál (ne jen suché hlášení chyby).
   - Typické scénáře: missing input, invalid input, connectivity issue, disconnected by choice, server error, warnings.
   - Příklady dobrého řešení: ilustrace + jasný nadpis ("Whoops!", "Can't Connect!") + vysvětlení + akce (např. tlačítko "Retry").

5. **Ideal state** (ideální stav)
   - Stav plný dat, dokonale zobrazený – stav, na který se často navrhuje "výchozí" mockup, ale nesmí být jediný navržený stav.

6. **Toggleable / interaktivní stavy** (togglable states)
   - Hover, clicked, focused, disabled
   - Otevřená/zavřená menu (menus open/closed)
   - Zobrazené popovery / tooltip bubliny
   - Zobrazené alerty/notifikace
   - "Show all" expanded, accordiony expanded
   - Jednoduché in-place režimy (edit, create)
   - Toggle switche (zapnuto/vypnuto – vizuálně I / O)

### Formulářové stavy (příklad)
- Prázdné pole → focus (aktivní, orámováno) → vyplněné → chyba (červený text/rámeček + chybová zpráva, "Invalid email") → disabled (šedé, needitovatelné) → success ("You have been subscribed. Thank you.")

### Checklisty (nástroj pro systematický návrh stavů)

**Screen States Checklist** (podle Learn UI Design):
- **Blank**: první zobrazení bez dat; po vymazání všech dat; žádné výsledky vyhledávání (zvážit fuzzy match); užitečné odkazy/tipy jak začít
- **Partial**: vytváření první položky; motivace k další interakci
- **Ideal**: plné dat, perfektně zobrazené
- **Loading**: spinnery (nedeterministické čekání), progress bary (deterministické čekání), skeletony (vnímaný výkon)
- **Errors**: chybějící vstup, neplatný vstup, problém s připojením, odpojeno vlastní volbou, chyba serveru, varování
- **Lengthy input**: dlouhý text, velmi široké/vysoké obrázky
- **User-based**: přihlášený uživatel, anonymní uživatel, admin uživatel
- **Togglables**: hover, clicked, focused, otevřená menu, zobrazené popovery, oblíbené (favorited), zobrazené alerty/notifikace, "show all" rozbalené, rozbalené akordeony, jednoduché in-place režimy (edit, create)

**Actions Checklist** – pro každou akci (Create, View, List, Edit, Delete) ověřit, zda existuje způsob:
- Vrátit se zpět (Go back)
- Vrátit akci (Undo)
- Získat feedback, že akce fungovala
- Získat feedback, že akce nefungovala
- Zrušit (Cancel)
- Vymazat vše (Clear all)

### Klíčová doporučení / best practices
- Vždy myslet na **celý zážitek**, ne jen ideální stavy.
- Blank states jsou často **první dojem**, který uživatel z produktu má.
- Existují různé přístupy k loading stavům – skeleton, spinner, progress bar – volba závisí na kontextu (délka čekání, míra jistoty o době trvání).
- Error states by měly být přátelské, srozumitelné a vést uživatele k řešení.
- Partial state slouží k tomu, aby povzbudil uživatele pokračovat v interakci s funkcionalitou aplikace.
- Přístupnost (accessibility) je zajištěna, když bereme v úvahu konektivitu, dobu načítání a celkový kontext/postup interakce.
- Snažte se vždy "natáhnout" (stretch) design – nenavrhovat jen pro ideální stav textu, formulářů a dalších prvků; zvažte, co se stane v jiných reálných use cases (velmi dlouhý text, chybějící obrázek, extrémně dlouhý název apod.).

---

## 2. Alignment & Grids (zarovnání a mřížky)

### Proč designéři potřebují pravidla
- Příliš mnoho rozhodnutí je vyčerpávající ("decision fatigue").
- Odstranění nejistoty a proměnných eliminuje zbytečné rozhodování a zrychluje (streamline) produkci.
- Pravidla umožňují produkovat designy, které jsou **spolehlivě dobré a konzistentní**.
- Velká rozhodnutí + nejistota = stres (vizualizováno jako Vennův diagram: "Big decisions" ∩ "Uncertainty" = "Stress"). Grid/alignment systém tuto nejistotu eliminuje.
- Cíl: vyhnout se "pixel pushing" (zbytečnému ručnímu doladování pixelů) – je to jen "time sink" (plýtvání časem).

### Zarovnání (Alignment)

**Proč správně zarovnávat prvky:**
- Vizuálně zatraktivňuje layout.
- Usnadňuje uživatelům skenování stránky očima.
- Umožňuje designérovi dělat vědomá rozhodnutí o tom, kde jsou prvky umístěny a jak spolu interagují.

**4 způsoby zarovnání textu:**
1. **Left align** (zarovnání vlevo) – nejčastější, nejlépe čitelné pro dlouhé texty
2. **Right align** (zarovnání vpravo)
3. **Center** (na střed)
4. **Justify** (do bloku)

**Zarovnání víceprvkových (multi-layer) komponent:**
- Když má prvek text na barevném/tmavém pozadí (bounding box), je potřeba zvážit, co nese větší "vizuální váhu" – text, nebo box.
- Pokud je bounding box výrazně tmavší/větší než text, měl by se zarovnávat spíš podle boxu než podle samotného textu.

**Optické (vizuální) zarovnání kruhů a čtverců:**
- Kruh a čtverec stejné "matematické" velikosti nevypadají opticky stejně velké – kruh vždy opticky vypadá menší.
- Kruhy je proto potřeba mírně "přetáhnout" přes okraj společné zarovnávací linie (mírně přesahovat nad/pod hranici), aby opticky působily zarovnaně se čtvercem/obdélníkem.
- Příklad: ikona "+" v tlačítku "Add user" – kruhový prvek se zarovnává opticky, ne matematicky na pixel.

**Zarovnání nepravidelných tvarů (irregular objects) – např. Play tlačítko:**
- Trojúhelník (play ikona) není opticky vystředěný, pokud se vycentruje podle bounding boxu.
- Reálný "optický střed" trojúhelníku je jinde než geometrický střed jeho ohraničujícího obdélníku – je potřeba najít skutečný vizuální střed tvaru (ne jen matematický střed bounding boxu).

### Grids (mřížky)

**Proč používat grid:**
- Vytváří strukturu a konzistenci napříč stránkami/obrazovkami (příklad: BBC.com, A List Apart – multi-column layout s viditelnými sloupci).

**Prvky gridu (Elements of a grid):**
- **Margin** – okraj mezi obsahem a hranou plátna/obrazovky
- **Column** – sloupec, do kterého se umísťuje obsah
- **Gutter** – mezera mezi sloupci

**Desktop – systém 12 sloupců (12-column grid system):**
- Proč zrovna 12 sloupců? **Flexibilita** – číslo 12 je dělitelné mnoha způsoby:
  - 12 × 1 = 12 základních sloupců
  - 6 × 2 = 12
  - 4 × 3 = 12
  - 3 × 4 = 12
  - 2 × 6 = 12
- To umožňuje vytvářet různé kombinace šířek layoutu (např. layout se 2, 3, 4 nebo 6 sloupci obsahu) při zachování jednotné podkladové mřížky.

**Breaking the grid** (vědomé porušení mřížky):
- Ve vhodných případech (např. výrazný marketingový/eventový web – příklad Roche Musique) lze grid záměrně narušit pro vizuální efekt, typicky u titulků/velkých grafických prvků – ale jde o vědomé designové rozhodnutí, ne o nedbalost.

**Mobile – 8pt grid (8bodová mřížka):**
- Základní jednotka pro spacing a velikosti prvků je **8 px** (případně násobky – 16, 24, 32...).
- **Důvod 1 – škálovatelnost:** 8px jako základní jednotka se čistě škáluje napříč hustotami displejů (např. Android @0.75x a @1.5x) beze zbytku, na rozdíl od např. 5px jednotky, kde škálování dává neceločíselné hodnoty (rozostření/nekonzistence).
- **Důvod 2:** Apple i Google doporučují 8pt grid ve svých design guidelines.
- **Důvod 3:** je to jednoduše dobrá základní jednotka pro práci (8, 16, 24, 32, 48, 64, 80...).
- Tabulka běžných rozlišení zařízení (aktivní plocha po odečtení okrajů) – např.:
  - iPhone 8: 375×667 px, okraje 18px, aktivní plocha 340×664
  - iPhone 8 Plus: 414×736 px, okraje 23px, aktivní plocha 360×664
  - iPhone X: 375×812 px, okraje 18px, aktivní plocha 340×728
  - iPhone SE: 320×568 px, okraje 4px, aktivní plocha 312×568
  - Android: 360×640, Pixel 2: 412×732, Pixel 2 XL: 360×720, Galaxy S8: 360×740

### Spacing (White Space – bílý prostor)

- Citát Jana Tschicholda: *"White Space is to be regarded as an active element, not a passive background"* (bílý prostor je aktivní prvek, ne pasivní pozadí).
- White space **není prostor, kde "nevznikl obsah"**, ale klíčová součást (key ingredient) layoutu.
- Nemusí být doslova bílý – jde o jakýkoliv prázdný prostor bez prvků, v libovolné barvě.
- Používá se k oddělení obsahu a dosažení lepší **čitelnosti a použitelnosti** (readability & usability).
- Hraje důležitou roli i ve vizuálním layoutu a positioningu značky (brand positioning).

**Pravidla pro white space a text (Rules of Thumb):**
- **Šířka odstavce:** ideální šířka pro čitelnost je cca **50–70 znaků** na řádek.
- **Řádkování (line height) vs. mezery mezi odstavci:** mezera mezi odstavci by měla být **poloviční oproti výšce řádku** (line height). Příklad: line height 24 → paragraph spacing 12.
- **Řádkování obecně:** pro dobrou čitelnost by mělo být řádkování takové, aby se mezi řádky "vešlo" jedno malé písmeno (např. "n").
- **Prostrkání písmen (letter/character spacing):** v drtivé většině případů se drží na "auto" – ruční úprava (tracking) se používá spíš výjimečně (např. u nápisů/log ve velkém formátu).

---

## 3. Intro to Data Visualization (úvod do datové vizualizace)

### Co je Data
- Data = informace, zejména fakta nebo čísla, sbírané za účelem zkoumání a posuzování.
- Cílem je nakonec informovat rozhodování (decision-making), obvykle v elektronické podobě.
- Data lze ukládat a zpracovávat počítačem.

### Proč Data Viz (vizualizace dat)
- Množství generovaných a ukládaných dat je dnes větší než kdy dřív.
- Schopnost data využít (harness) se stala klíčová pro obchodní úspěch.
- Citát Alberto Cairo: *"The purpose of Infographics & Data Viz is to enlighten people – not to entertain them, not to sell them products, services, or ideas, but to inform them."* (Účelem infografiky a data vizualizace je lidi osvítit/informovat – ne bavit nebo jim něco prodávat.)

**Benefity data vizualizace:**
- Vidět trendy (see trends)
- Vytvářet prognózy (create forecasts)
- Dělat plány (make plans)

### Typy dat

1. **Kvalitativní data (Qualitative)**
   - Nečíselná, popisná/kategoriální data.
   - Příklad vizualizace: infografika párování vína a jídla (kategorie jídla × kategorie vína propojené barevnými liniemi).

2. **Kvantitativní data (Quantitative)**
   - Číselná, měřitelná data.
   - Příklad: interaktivní vizualizace "US Gun Killings" – kombinace velkých čísel (9 595 obětí, 414 973 ztracených let) s grafem věkového rozložení a filtry (gun type, race, sex, age group, region, multiple kills, relationship).

3. **Geografická data (Geographical)**
   - Vizualizační typy: **dots** (tečky – např. eyeball sessions, poptávka, aktivní města), **hex grids** (šestiúhelníková mřížka – např. průměrné čekací doby, heatmapa jízd), **lines** (linie – trasy a vzorce jízd, rozšiřování tras dopravy), **choropleths** (choroplety – barevně odstupňované oblasti/regiony, např. pokrytí ve městě).

4. **Chronologická data (Chronological)**
   - Data v čase, typicky zobrazovaná pomocí grafů vývoje/statistik (příklad: fitness aplikace Runtastic – Recent Activities, Running Statistics za měsíce).

### Vizuální slovník grafů (Visual Vocabulary) – 9 hlavních kategorií

Podle zdroje "Visual vocabulary – Designing with data" (kategorie účelu vizualizace a odpovídající typy grafů):

1. **Deviation** (odchylka) – zdůraznění odchylek od fixního referenčního bodu (typicky nula nebo cílová hodnota). Příklad použití: trade surplus/deficit, income change. Typy: diverging bar, column, spine chart, surplus/deficit filled line.

2. **Correlation** (korelace) – ukazuje vztah mezi dvěma nebo více proměnnými. Pozor: pokud to explicitně neřeknete, čtenáři si vztah často vyloží jako kauzální (jedna věc způsobuje druhou), i když tomu tak nemusí být.
   - Příklady použití: inflace & nezaměstnanost, příjem & délka dožití.
   - Typy grafů: **scatterplot** (standardní způsob zobrazení vztahu dvou proměnných, každá má vlastní osu), **line-column** (kombinace sloupců pro množství a linie pro poměr/míru), **scatterplot-connected** (spojnicový scatterplot – jak se vztah dvou proměnných vyvíjel v čase), **bubble** (jako scatterplot, ale velikost bublin kóduje třetí proměnnou), **XY-heatmap** (dobrý pro zobrazení vzorců mezi 2 kategoriemi dat, méně vhodný pro jemné rozdíly v hodnotách).

3. **Ranking** (pořadí/žebříček) – používá se, když je pozice/pořadí prvku v seřazeném seznamu důležitější než jeho absolutní nebo relativní hodnota.

4. **Distribution** (distribuce/rozložení) – ukazuje, jak jsou hodnoty rozložené podél intervalu, zda jsou nakupené na jedné straně, rozprostřené rovnoměrně nebo mají jiný vzorec (např. bimodální).

5. **Change over Time** (změna v čase) – zdůrazňuje trendy/vzorce v hodnotách v čase (rostoucí, klesající, kolísající).

6. **Magnitude** (velikost/rozsah) – porovnání velikosti hodnot mezi jednotlivými položkami (typicky sloupcové grafy).

7. **Part-to-whole** (část z celku) – ukazuje, jak se jednotlivé kategorie/segmenty podílí na celkovém součtu (koláčové grafy, stacked bar/area, treemap).

8. **Spatial** (prostorová/geografická data) – data vázaná na mapu/lokaci.

9. **Flow** (tok) – zobrazuje objem nebo pohyb mezi uzly/kategoriemi v rámci systému (např. Sankey diagram).

### Rozhodovací strom "What would you like to show?" (jak vybrat správný typ grafu)
Vizualizace nabízí rozhodovací diagram podle toho, co chcete ukázat:
- **Comparison** (srovnání): mezi položkami (among items) – bar chart horizontal/vertical podle počtu kategorií a proměnných; v čase (over time) – line chart, cyclical vs. non-cyclical data, circular area chart.
- **Relationship** (vztah): dvě proměnné → scatter plot; tři a více proměnných → scatter plot s velikostí bubliny (bubble size).
- **Distribution** (rozložení): málo datových bodů → bar histogram; hodně datových bodů → line histogram; dvě proměnné → scatter plot.
- **Composition** (složení): statické vs. měnící se v čase (changing over time); pro statické – simple share of total (pie chart), komponenty vs. celek; pro dynamické (few/many periods) – stacked 100% bar chart, stacked bar chart, stacked area chart (100% i absolutní), waterfall chart, treemap – podle toho, zda záleží na relativních, absolutních rozdílech nebo obojím.

### Jak vybrat správný graf (How to select the right chart)
Volba způsobu reprezentace dat závisí na **třech hlavních faktorech**:
1. **Available Data** (dostupná data) – jaká data máte k dispozici
2. **Audience** (publikum) – komu je vizualizace určena
3. **Objectives & Goals** (cíle) – co chcete vizualizací sdělit/dosáhnout

- Organizace mají velké množství dat uložených v databázích, ze kterých lze čerpat strategické poznatky (insights).
- Klíčovou výzvou je umět tato data reprezentovat smysluplným způsobem.

### Storytelling (vyprávění příběhu daty)
- Data vizualizace může sloužit i jako nástroj **storytellingu** – např. interaktivní prezentace na velké obrazovce vyprávějící příběh o znečištění oceánu plasty (konkrétní čísla + kontext + vizuál).
- Cvičení ze slidu: namapovat něco o svém životě (např. spotřebu kávy), aby to vyprávělo příběh o vás samých – ukazuje praktické propojení dat s osobním narativem.

### Shrnutí (ze summary slidu)
- Data vizualizace je grafická reprezentace informací za účelem usnadnění porozumění.
- Vizualizace dat umožňuje firmám dělat informovanější rozhodnutí díky identifikaci vzorců a trendů, které nejsou vidět jen v tabulkách/spreadsheetech.
- Data lze klasifikovat různými způsoby, což určuje, jak je lze reprezentovat pomocí grafů a grafiky.
- Výběr nejvhodnější grafiky pro reprezentaci dat je klíčový.
- Volba musí vycházet z dostupných dat, cílového publika a cílů projektu.
