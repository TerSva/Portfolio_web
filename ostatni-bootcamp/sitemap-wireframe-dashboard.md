# Studijní poznámky: Sitemap, Wireframing, Dashboard Design (Ironhack UX/UI Bootcamp)

---

## 1. Sitemap (mapa webu)

### Definice
- **Sitemap** je artefakt informační architektury (IA), který zobrazuje **vztahy mezi stránkami** webu a dokumentuje jejich organizaci, navigaci a pojmenování (labeling).
- Sitemap znázorňuje, **kde stránky „žijí"** v rámci platformy — ale **ne nutně pořadí**, ve kterém je uživatelé uvidí (to řeší spíše user flow).

### Tři základní strukturální formy sitemapy
1. **Hierarchická organizace (Hierarchy)**
   - Nejběžnější forma.
   - Zaměřuje se na vztahy mezi stránkami (rodič–potomek).
   - Zobrazuje stránky jako statické prvky.
   - Typicky: Homepage → sekce 1. úrovně → sekce 2. úrovně atd. (barevně/úrovňově odlišené — Site Map Key: Homepage, 1st Level, 2nd Level, 3rd Level, 4th Level).

2. **Databázová organizace (Database)**
   - Klade důraz na to, **jak jsou data uložena**, nikoli jak jsou prezentována.
   - Demonstruje dynamické stránky.
   - Užitečná pro weby s obsahem generovaným uživateli (např. seznamovací appky, filtrovatelné výpisy).

3. **Hypertextová organizace (Hypertext)**
   - Klade důraz na vztahy, které vznikají „přirozeně" (in the wild) — např. odkazy v textu.
   - **Nehierarchická** struktura.
   - Může se lišit uživatel od uživatele (např. Wikipedie — každý se dostane odjinud jinam).

### Proč sitemapy tvoříme
Sitemapy pomáhají v diskuzi a spolupráci mezi:
- content stratégy a copywritery,
- UX (navigační) a UI designéry,
- database architekty (databázovými architekty).

### Framing rozsahu projektu (Project scope)
- **Scope-creep** = neplánovaný růst rozsahu očekávané práce; častý zdroj napětí mezi dodavateli (kontraktory) a klienty.
- Sitemapa slouží jako **centralizovaný plánovací nástroj**, který pomáhá vyjasnit, jaký obsah má na webu skutečně být — a tím omezuje scope-creep.

### Kdy se sitemapa tvoří
- Vzniká v momentě, kdy je definována informační architektura platformy.
- V rámci designového procesu (Define → Ideate → Prototype → Build → Analyze) je sitemapa typicky:
  - jedním z **prvních deliverables**,
  - **navazuje na uživatelský výzkum**, ale **předchází** interakčnímu a vizuálnímu designu,
  - informuje návrh databáze a navigace,
  - měla by být **průběžně aktualizovaná** (living document).

### Jak vytvořit sitemapu — 7 kroků

**Krok 1 – Definuj typy obsahu**
- Vypiš veškerý obsah, který stránka potřebuje k naplnění potřeb uživatele.
- Zatím neřeš design stránek ani vztahy mezi nimi — jen obsah.

**Krok 2 – Organizuj obsah do stránek**
- Pro každou stránku použij sticky-notu (papírovou lísteček) s jasným názvem.
- Pokud proběhlo card sorting, je toto vhodná chvíle aplikovat jeho výsledky.
- Příklady názvů stránek: Home, Blog, Support…

**Krok 3 – Vytvoř osnovu (Outline)**
- Identifikuj různé úrovně navigace (primární, sekundární…).
- **Primární navigace** = nejdůležitější stránky.
- **Sekundární navigace** = důležité, ale ne tak zásadní jako primární.
- Méně navštěvované stránky (např. právní stránky) patří do **3. nebo 4. úrovně navigace** (např. v patičce/footeru).
- Formát osnovy připomíná klasickou konspekt-strukturu (I. Hlavní téma → A./B. podtéma → 1./2. detail → a./b. subdetail).

**Krok 4 – Uspořádej všechny stránky do struktury**
- Nyní jde o to, jak spolu stránky souvisí.
- Nejjednodušší způsob: propojit připravené post-ity čarami.
- Do post-itu lze zahrnout i obsah stránky nebo definici obsahu, případně **cíl a účel stránky** — pro lepší vizualizaci hlavních cílů.

**Krok 5 – Náčrt (Sketch)**
- „Put that down on paper" — přenes strukturu na papír jako diagram/skica.

**Krok 6 – Digitalizuj to**
- Digitální nástroje pro tvorbu sitemap: **OmniGraffle, Visio, Axure, Sketch App, SlickPlan, Miro**.

**Krok 7 – Iteruj**
- **Nejdůležitější krok procesu.**
- Po dokončení první verze sitemapy je čas na zpětnou vazbu a iteraci.
- Netřeba dělat pixel-perfect verzi.
- Lze provést i malý test s uživateli, zda je sitemapa snadno srozumitelná a použitelná.

### Best practices pro sitemapy
- **Buď stručný (Be concise)** — nepoužívej celé věty k popisu jednotlivých stránek.
- **KISS – Keep It Simple and Stupid** — názvy stránek musí být snadno srozumitelné.
- **Nech web růst (Allow the site to grow)** — sitemapa by měla umožnit přidávání nového obsahu, aniž by se „rozbila".
- **Vyhni se příliš mělkým i příliš hlubokým strukturám** — najdi „sweet spot" v kategorizaci a celkové struktuře.
- **Vyhni se duplicitnímu obsahu** — sitemapa pomáhá identifikovat a eliminovat duplicity.
- **Zjednoduš konverzní trychtýř (Streamline the conversion funnel)** — ujasni, jak se budou uživatelé pohybovat webem tak, jak chceš.

### Shrnutí (Sitemap)
- Sitemapy zobrazují vztahy mezi stránkami v rámci platformy/webu.
- Vznikají ve fázi návrhu informační architektury, po definování celé IA projektu.
- Postup: nejprve znát veškerý obsah → seskupit obsah do stránek → strukturovat stránky logicky (primární/sekundární navigace) → iterovat.
- Pomáhají definovat cíl a účel každé webové stránky.

---

## 2. Wireframing (drátěné modely)

### Co je wireframing
- Wireframing vychází z **informační hierarchie (information hierarchy)**, která je založená na **user research**.
- Definuje informační hierarchii návrhu — usnadňuje plánování layoutu podle toho, jak má uživatel informace zpracovávat (proces informace).

### Klíčový princip: žádné barvy
- Wireframing umožňuje plánovat **layout a interakci rozhraní bez rozptylování barvami**, výběrem typografie nebo finálním textem.
- Pokud uživatel neví, kam kliknout na jednoduchém černobílém náčrtu stránky, je jedno, jaké barvy nebo „hezký" text se nakonec použijí.
- **Tlačítko / call-to-action musí být jasné (clear)** i bez sytých barev nebo blikání.

### Tři typy wireframů podle úrovně detailu (fidelity)

**1. Low-fidelity wireframes (nízká věrnost)**
- Skica, kterou lze nakreslit rukou.
- Černobílé.
- Pokud se použijí barvy, jen minimálně — pouze pokud jsou nezbytné pro sdělení myšlenky.
- Vypadají jako ruční náčrtky (papír a tužka, hrubé rámečky, placeholdery pro obrázky přeškrtnuté "X").

**2. Mid-fidelity wireframes (střední věrnost)**
- Digitálně strukturovaná verze předchozích skic.
- Černobílé (nebo bez brandových barev).
- **Neobsahují** design estetiku, barvy, typografii ani žádné grafické prvky navíc.
- Používá se **jeden font**, ale lze pracovat s velikostmi písma.
- Použití obrázků na minimum.

**3. High-fidelity wireframes (vysoká věrnost)**
- Obsahují většinu potřebných assetů a vizuálních komponent řešení.
- Jsou nejrealističtější a nejbližší finálnímu produktu.

### Iterativní proces
- Postup: hrubá ruční skica → jednoduchý strukturovaný (mid-fi) wireframe → finální vysoce věrný (hi-fi), interaktivní design.
- Klíčové heslo: **Test / Iterate** — testuj a iteruj v každé fázi.

### Komponenty wireframu
Kostra (skeleton) produktu se dělí na tři komponenty:

1. **Information design (informační design)**
   - Prezentace — umístění a prioritizace informací způsobem, který usnadňuje porozumění.

2. **Navigation design (navigační design)**
   - Poskytuje sadu prvků obrazovky, které umožňují uživateli pohybovat se mezi stránkami webu.
   - Obsahuje více navigačních systémů:
     - **Globální navigace** (Global navigation)
     - **Lokální navigace** (Local navigation)
     - **Doplňková navigace** (Supplementary navigation)
     - **Kontextová navigace** (Contextual navigation)
     - **Zdvořilostní navigace** (Courtesy navigation)

3. **User interface design (design uživatelského rozhraní)**
   - Zahrnuje výběr a uspořádání **interface elementů**, které umožňují uživatelům interagovat s funkcionalitou systému.
   - **Cíl:** co nejvíce usnadnit použitelnost (usability) a efektivitu.

### Prvky pro web (typické wireframe komponenty)
- **Image Slider** (obrázkový slider s titulkem, popisem a šipkami vlevo/vpravo).
- **Image Placeholder** — obdélníky/čtverce s přeškrtnutým "X" v různých rozměrech (např. 100x120px, 200x200px, 350x350px…) — reprezentují budoucí obrázky.
- **Banners** — placeholdery pro reklamní/bannerové plochy v typických rozměrech.
- **Web Form Elements** — typické formulářové prvky: textová pole, dropdowny, checkboxy, radio buttony, kalendář, multi-select seznamy, expandable/collapsible sekce, textareas, media přehrávače, tagy, mapy, tabulky, paginace, tlačítka (Submit/Cancel/Upload/Download…), taby.

### Praktické shrnutí
- Wireframing = plánování skeletonu produktu bez barevných/estetických rozptýlení.
- Postupuje se od nízké k vysoké věrnosti (low-fi → mid-fi → hi-fi), s testováním a iterací mezi jednotlivými kroky.
- Skládá se ze tří komponent: informační design, navigační design, design rozhraní.

---

## 3. Dashboard Design

### Co je dashboard
- Dashboardy jsou **grafická uživatelská rozhraní (GUI)**, která zobrazují informace z databází.
- **Třídí informace přístupným způsobem**, který pomáhá stakeholderům **analyzovat velké soubory dat** a **činit informovanější rozhodnutí**.

### Definice dashboardu (rozšířená)
- To, co definuje dashboard, je fakt, že **uživatel chce učinit rozhodnutí** ohledně své budoucnosti a „najímá" dashboard, aby **zobrazil dostupná data co nejpřístupnějším způsobem**, který odpovídá jeho účelu (jobs-to-be-done perspektiva).

### Typy dashboardů (podle účelu)

**1. Operativní (Operational)**
- Monitorují **výkon v reálném čase**.
- Poskytují náhled na okamžitý výkon.
- Příklady: obchodování s akciemi (stock trading), směnné kurzy, výkon reklamních kampaní, automotive, zdravotnictví.

**2. Strategický (Strategic)**
- Obvykle sledují **klíčové ukazatele výkonu (KPI)** v delším časovém horizontu.
- Porovnávají aktuální výkon organizace s předchozími časovými obdobími.
- Pomáhají manažerům a vedoucím pracovníkům v strategickém rozhodování a stanovování budoucích cílů.

**3. Analytický (Analytical)**
- Vytvořeny za účelem **prozkoumání a analýzy velkých, komplexních datových sad**.
- Cílem je často zlepšit zkušenost, optimalizovat výdaje, lépe predikovat a plánovat.
- Příklady oborů: retail, služby (např. festival nebo vzdělávací zkušenost).

### Case study zmíněný v prezentaci — Fintonic App
- Uživatelský výzkum ukázal, že uživatelé chtějí vidět:
  1. Poslední výdaje (Latest expenses)
  2. Automatické odečty (Automatic Deductions)
  3. Zůstatek (Balance)
  4. Příjmy vs. výdaje za aktuální měsíc
  5. Výdaje podle kategorie
- Cvičení: popsat, jak jsou tyto priority reprezentovány v aktuální aplikaci, a navrhnout designové iterace, které by lépe odpovídaly potřebám uživatelů.
- Účel: **evaluace (hodnocení)** — kriticky posoudit design dashboardu z human-centered (na člověka zaměřeného) hlediska.

### Guidelines (zásady) pro návrh dashboardů

**1. Pochop potřeby uživatele (Understand User Needs)**
- Pro zvýšení použitelnosti je třeba porozumět uživateli a jeho kontextu.
- Zde přichází na řadu **user interviews** a **jobs-to-be-done**.
- Klíčové otázky:
  - Jaké jsou cíle a záměry uživatele?
  - Čeho chce uživatel dosáhnout?
  - Jaké jsou jejich KPI?

**2. Zvaž médium/zařízení (Consider the medium)**
- Zjisti, na jakém zařízení bude uživatel dashboard používat — telefon / tablet / desktop.

**3. Vyber vhodné písmo (Choosing your typeface)**
- Použij dobře podporovaný webový font (well-supported web type).
- Některé rodiny písem podporují znaky pro mnoho různých zemí/jazyků.
- Doporučené fonty: **Myriad Pro, Lato, Roboto, Proxima Nova, Helvetica, Arial, Open Sans.**
- Používej **pouze jeden typeface**.
- Pro odlišení nadpisů a podnadpisů použij spíše **váhu (weight) a barvu** než velikost písma.

**4. Organizuj informace logicky (Organise information logically)**
- Uspořádej data do logické hierarchie a při rozhodování o layoutu prioritizuj nejdůležitější informace.
- Nejdůležitější informace prezentuj jako první; umožni uživateli „drill down" (proklikat se hlouběji) pro další detaily.
- Klíčové otázky:
  - Jaká informace je pro uživatele nejcennější?
  - Jaké insighty chtějí vidět na první pohled?
  - Ujisti se, že související informace jsou umístěny blízko sebe (poskytují si navzájem kontext).

**5. Odkazuj se na běžné UI patterny (Refer back to common UI patterns)**
- Umísti nejdůležitější informace podél linií, kam se stáčí zrak uživatele.
- Existují důkazy, že lidé při skenování stránky obvykle sledují **F-vzor a Z-vzor** (F & Z patterns).
- Klíčové otázky:
  - Kam se zaměří pohled uživatele nejdříve?
  - Jaké informace budou chtít skenovat?

**6. Používej vhodné designové prvky pro prezentaci informací**
- Vyber správné typy grafů pro vizualizaci dat.
- Používej sekce a bílý prostor (white space) k vizuálnímu seskupení souvisejících informací a poskytnutí kontextu.
- Barevné kódování (color-coding) pro rychlejší komunikaci výsledků uživateli.
- Používej legendy k vysvětlení významů.
- Vyhýbej se přetížení informacemi a zobrazování velkých bloků textu — místo toho používej symboly a ikony.
- KPI zobrazuj jako čísla.
- Používej popisky (labels) pro poskytnutí kontextu uživateli.

**7. Udělej to jasné a jednoduché (Make it clear and simple)**
- Uživatel musí být schopen „vykreslit si obrázek" (pochopit situaci) **na první pohled** (at a glance).
- Nepřetěžuj obrazovku nepořádkem (clutter) a ponechávej dostatek bílého prostoru.

### Shrnutí (Dashboard Design)
- Dashboardy jsou grafická rozhraní zobrazující data z databází přístupným způsobem, která pomáhají uživatelům činit informovaná rozhodnutí.
- Podle účelu se dělí na: **operativní, strategický a analytický**.
- Existují typické designové vzory pro mobilní, webové a dynamické dashboardy.
- Klíčové zásady návrhu: zaměření na uživatele (user-centricity), zohlednění zařízení (ubiquity), informační architektura a vizuální hierarchie.
- Zásadní roli hraje zvolená typografie pro zobrazení dat, barevný kontrast a využití negativního (bílého) prostoru.
