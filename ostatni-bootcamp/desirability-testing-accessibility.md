# Studijní poznámky — UX/UI Bootcamp (Ironhack)

> **Upozornění:** Z pěti požadovaných souborů se v uploadované složce podařilo najít a zpracovat pouze **dva**: *Desirability Testing* a *Accessibility*. Soubory pro **Project Management** (prefix 6ae07ba4), **Information Architecture** (prefix 0d3312b1) a **UX Strategy** (prefix a4d6b78a) se ve složce `/root/.claude/uploads/8c1ed16f-28a9-5f6b-a6bf-37a434abb90a/` nenacházejí — adresář obsahuje jiné prezentace (Wireframing, Sitemap, Portfolia, Native Apps, Colors, Style Tiles, Typography, Design Systems, Usability Testing, Dashboard Design, Data Visualization atd.), ale žádná z nich neodpovídá zadaným tématům PM/IA/Strategy. Tereza by měla soubory znovu nahrát, pokud tato tři témata potřebuje zpracovat.

---

## 1. Desirability Testing (Testování žádoucnosti / emoční odezvy)

### Co je Desirability Testing
- Metoda testování zaměřená na **emoční a estetickou odezvu** uživatele na design/produkt — ne na to, jestli produkt "funguje", ale jak se uživatel **cítí**, když ho používá.
- Žádoucnost (desirability) a estetika jsou **subjektivní** — cílem není zjistit, jestli se uživateli design "líbí, nebo ne", ale **pochopit konkrétní emoce a asociace**, které design vyvolává.
- Cíl: **spárovat zamýšlený efekt/cíl brandu s reálnou emocí uživatele.**

### Proč na tom záleží — Emotional Design
- **Aarron Walterova hierarchie potřeb uživatele** (analogie s Maslowovou pyramidou potřeb):
  1. Functional (funkční)
  2. Reliable (spolehlivý)
  3. Usable (použitelný)
  4. **Pleasurable (příjemný/žádoucí)** — chybějící vrstva, kterou desirability testing řeší
- Citát (Aral Balkan): *"Než může aplikace vytvořit emoční vztah s uživatelem, musí zvládnout základy. Emoční vztah — potěšení — je vrstva, kterou stavíte na této základní použitelnosti a technické kompetenci."*
- Citát (Bruno Munari): *"Designér je plánovač s estetickým citem."*

### Tři překrývající se oblasti validace
Diagram (Venn): **Functionality × Usability × Aesthetics**
- **Functionality** → testuje se landing page / survey
- **Usability** → user test
- **Aesthetics** → design test

### Funkční vs. estetická použitelnost (příklad)
- Hrnec na sporáku = funkční použitelnost (efektivní, ale ne příjemný zážitek)
- Aroma difuzér = estetická použitelnost (méně "funkční", ale příjemnější zážitek)

---

### Metoda 1: Microsoft Reaction Cards Test
- Vyvinuto v roce **2002** firmou Microsoft.
- Používá se k ověření **emoční odezvy a žádoucnosti** designu/produktu.
- Jde o **seznam 118 slov**, kterými respondenti mohou popsat produkt (např. Useful, Time-Saving, Powerful, Valuable, Overwhelming, Slow, Complex, Sophisticated, Flexible, Frustrating, Confusing, Innovative, Accessible, Intuitive...).
- **Postup:**
  1. Respondentům se ukáže design/produkt.
  2. Vyberou (typicky) až **5 slov**, která ho nejlépe popisují — omezení počtu usnadňuje analýzu a zvyšuje konzistenci odpovědí.
  3. Výsledky se vizualizují jako **word cloud** nebo **sloupcový graf četností** — nejčastěji volená slova ukazují dominantní vnímání produktu.
  4. U vybraných karet se ptá **"Proč jste zvolili toto slovo?"** — hledá se hlubší důvod (např. "Cutting edge" → *"Seems up-to-date with the latest technology and trends"*; "Unapproachable" → *"Might be too highbrow for me"*).
- **HMW (How Might We)** otázka po analýze: Jak reprezentovat výsledky? Jaké další nápady z dat vyplývají?

### Metoda 2: Brand Personality Test (Aakerův model)
- **"Five Dimensions of Brand Personality"** od **Jennifer Aaker** — framework popisující "osobnost" značky pomocí analogie s lidskou bytostí, měřený v 5 dimenzích. Každá dimenze má sadu facet (dílčích rysů).
- **5 dimenzí a jejich facety:**
  | Dimenze | Facety (rysy) |
  |---|---|
  | **Sincerity** (upřímnost) | Down-to-earth, Honest, Wholesome, Cheerful |
  | **Excitement** (vzrušení) | Daring, Spirited, Imaginative, Up-to-date |
  | **Competence** (kompetence) | Reliable, Intelligent, Successful |
  | **Sophistication** (sofistikovanost) | Upper-class, Charming |
  | **Ruggedness** (drsnost) | Outdoorsy, Tough |
- **Postup testu:** respondentům se předloží tabulka 42 slov (viz níže) a vyberou ta, která podle nich nejlépe vystihují značku — zvýrazněná/vybraná slova se pak mapují zpět na dimenze a facety, čímž se odvodí "osobnostní profil" značky.
- Slova v tabulce zahrnují např.: exciting, independent, corporate, intelligent, unique, outdoorsy, confident, real, secure, small-town, charming, trendy, up-to-date, technical, successful, friendly, family-oriented, glamorous, western, good-looking, tough, leader, masculine, wholesome, cool, hard-working, sentimental, sincere, upper-class, contemporary, rugged, daring, young, down-to-earth, feminine, original, imaginative, honest, reliable, cheerful, spirited, smooth.
- Tabulka "Dimension → Associated Traits → PRC Example Words" propojuje Aakerovy dimenze s konkrétními slovy z Reaction Cards testu (např. Sincerity → Honest, cheerful, wholesome, friendly → PRC slova: Trustworthy, Clear, Simple).

### Metoda 3: Memory Test (Paměťový test)
- **Princip:** design se uživateli ukáže jen na **krátký okamžik**, poté se ho zeptáte, co si z designu **zapamatoval**.
- Pomáhá pochopit:
  - Co **vyniká** (nejvýraznější prvky).
  - Umožňuje **jít hlouběji do důvodů**, proč si daný prvek uživatel zapamatoval.
- Následně lze porovnat, zda zapamatované prvky odpovídají tomu, co si autor designu přál, aby si uživatel zapamatoval.

### Doplňková metoda: Five Second Test
- Metoda uživatelského výzkumu měřící **první dojem** a **schopnost zapamatování** v prvních **5 sekundách** zobrazení designu.
- Běžně se používá k ověření, zda web efektivně komunikuje zamýšlené sdělení.
- Cíl: optimalizovat **jasnost (clarity)** designu.

### Shrnutí tématu
- Vizuální prvky vyvolávají emoční odezvu — pochopení těchto reakcí pomáhá designérům vhodně ovlivňovat uživatele.
- Problémem je **jak** tyto emoční reakce od uživatelů získat — proto existují strukturované metody (Reaction Cards, Brand Personality Test, Memory Test, Five Second Test).

---

## 2. Accessibility (Přístupnost) & Inclusion (Inkluze)

### Co přístupnost NENÍ (časté mylné představy)
- Není synonymem pro "zdravotní postižení" (disabilities).
- Není výmluvou pro špatná estetická rozhodnutí.
- Není nutně namáhavá a nákladná implementace.
- Není něco, co prospívá jen zanedbatelnému procentu uživatelů.
- Není odpovědností **pouze** vývojářů.
- Není zbytečná/neziskovinná aktivita.

### Definice zdravotního postižení (WHO)
- **Do roku 2001** WHO definovala postižení jako: *"Any restriction or lack of ability to develop activity within what is considered normal for the human being."* (jakékoli omezení nebo nedostatek schopnosti vykonávat činnost v rámci toho, co je považováno za "normální" pro člověka)
- **Po roce 2001** byla definice změněna na: *"Disability is a complex phenomenon, which reflects the interaction between a person and the elements of the society in which they live."* (postižení je komplexní fenomén odrážející interakci mezi člověkem a prvky společnosti, ve které žije) — tedy důraz na **kontext a interakci se společností**, ne jen na "odchylku od normy".
- Klíčová otázka k zamyšlení: **"Co je vlastně normální?"**

### Typy postižení (kategorie)
- **Auditory** (sluchové) — hluchota, nedoslýchavost
- **Cognitive** (kognitivní) — ADHD, autismus, dyslexie
- **Neurological** (neurologické) — epilepsie, Alzheimer
- **Physical** (fyzické) — poranění míchy, amputace, artritida
- **Speech** (řečové) — němota, apraxie, afázie
- **Visual** (zrakové) — slepota, barvoslepost, astigmatismus

### Permanentní / dočasné / situační postižení (Microsoft framework)
Přístupnost neprospívá jen lidem s trvalým postižením — příklad na kategorii "dotek/ovládání rukou":
- **Permanent** (trvalé) — člověk s jednou rukou
- **Temporary** (dočasné) — zlomená ruka v sádře
- **Situational** (situační) — nový rodič s dítětem v náručí (obě ruce zaneprázdněné)

### Persona Spectrum (spektrum person)
- Nástroj pro pochopení souvisejících "mismatch" (neshod) a motivací napříč spektrem **permanentních, dočasných a situačních** scénářů.
- Rychlý nástroj pro budování **empatie** a demonstraci, jak řešení škáluje na širší publikum.
- Příklady napříč kategoriemi Touch / See / Hear / Speak:
  - **Touch:** jedna ruka (permanent) → poranění ruky (temporary) → nový rodič (situational)
  - **See:** slepota (permanent) → katarakta/šedý zákal (temporary) → rozptýlený řidič (situational)
  - **Hear:** hluchota (permanent) → zánět ucha (temporary) → hlučné prostředí barmana (situational)
  - **Speak:** neverbální (permanent) → laryngitida (temporary) → silný přízvuk (situational)

### Definice: Accessible Design vs. Inclusive Design
- **Accessibility** = praxe tvorby produktů použitelných co nejširším okruhem lidí. Tradičně se chápe jako téma lidí se zdravotním postižením, ale prospívá i dalším skupinám.
- **Inclusive Design** (design pro všechny) = **metoda/proces**, zatímco **Accessibility je jen jeden atribut/výsledek** tohoto procesu. Praktikování inkluzivního designu by mělo produkt zpřístupnit, ale samo o sobě nezaručuje splnění všech standardů přístupnosti.
- Vztah (Venn diagram): **Human-centered design** obsahuje průnik **Accessibility** a **Usability** → tento průnik = **Inclusive Design**.
- Ideálně accessibility a inclusive design **fungují společně** — vytváří zážitky, které jsou nejen v souladu se standardami, ale skutečně použitelné a otevřené všem.

### Proces (obecný přístup k inkluzi)
1. Začínejte každý projekt s **otevřenou myslí**.
2. Investujte do **uživatelského výzkumu**.
3. Provádějte **uživatelské testování**.

---

### Praktické tipy podle typu uživatele (checklisty Do / Don't)

**Uživatelé na autistickém spektru**
- Dělat: jednoduché barvy, psát jednoduchým jazykem, jednoduché věty a odrážky, popisná tlačítka ("Attach files"), jednoduché a konzistentní layouty.
- Nedělat: jasné kontrastní barvy, obrazná vyjádření a idiomy, "zeď textu", vágní tlačítka ("Click here!"), komplexní a přeplněné layouty.

**Uživatelé čteček obrazovky (screen readers)**
- Dělat: popisovat obrázky a poskytovat přepisy videí (`<alt>`), lineární logický layout, strukturovat obsah pomocí HTML5 (`<h1>`, `<nav>`, `<label>`), navrhovat pro ovládání pouze klávesnicí, psát popisné odkazy a nadpisy ("Contact us").
- Nedělat: zobrazovat info jen v obrázku/videu, rozprostírat obsah po celé stránce, spoléhat na velikost/umístění textu pro strukturu (36pt bold header), vynucovat použití myši/obrazovky, psát nevýstižné odkazy ("Click here").

**Uživatelé se slabým zrakem (low vision)**
- Dělat: dobrý barevný kontrast a čitelnou velikost písma, publikovat všechny informace na webových stránkách, kombinovat barvu, tvary a text, lineární logický layout, umisťovat tlačítka a notifikace v kontextu.
- Nedělat: nízký kontrast a malé písmo, schovávat informace v downloadech, používat pouze barvu k předání významu, rozprostírat obsah po celé stránce, oddělovat akce od jejich kontextu.

**Uživatelé s dyslexií**
- Dělat: obrázky a diagramy podporující text, zarovnání textu doleva a konzistentní layout, poskytovat obsah v jiných formátech (audio/video), krátký jasný a jednoduchý obsah, umožnit uživatelům měnit kontrast pozadí/textu.
- Nedělat: velké bloky hutného textu, podtrhávání, kurzíva nebo VELKÁ PÍSMENA, nutit uživatele pamatovat si info z předchozích stránek, spoléhat na přesný pravopis (autocorrect), vkládat příliš mnoho informací na jedno místo.

**Uživatelé s fyzickým/motorickým postižením**
- Dělat: velké klikatelné akce, dávat klikacím prvkům dostatek prostoru, navrhovat pro ovládání klávesnicí/hlasem, navrhovat s ohledem na mobil a dotykovou obrazovku, poskytovat zkratky.
- Nedělat: vyžadovat přesnost, shlukovat interakce blízko sebe, vytvářet dynamický obsah vyžadující hodně pohybu myši, mít krátké časové limity ("Your session has timed out"), unavovat uživatele mnoha psaním a scrollováním.

**Neslyšící / nedoslýchaví uživatelé**
- Dělat: psát jednoduchým jazykem, používat titulky nebo přepisy videí (CC), lineární logický layout, rozdělovat obsah podnadpisy, obrázky a videi, nechat uživatele zvolit preferovaný způsob komunikace při rezervacích.
- Nedělat: používat komplikovaná slova nebo fráze, umisťovat obsah pouze do audia/videa, vytvářet komplexní layouty a menu, nutit uživatele číst dlouhé bloky textu, dělat z telefonu jediný způsob kontaktu.

### Genderová inkluze
- **Formuláře** — pokrýt všechny možnosti (nejen binární Male/Female — přidat "Rather not say", "Custom").
- Vytvořit **gender-neutrální personu**: zvolit neutrální jméno a vynechat fotografii persony.
- Používat **gender-inkluzivní jazyk**.

### Typografie — co lze zlepšit
- Používat **UPPERCASE, letter spacing (prostrkání), tučnější váhu** u navigačních prvků/labelů pro lepší čitelnost.
- Zvýšit **výšku řádku (line height)**.
- Vyhýbat se **lehkým (light) váhám písma**, zejména u malých velikostí.
- Délka řádku: cca **50–60 znaků na desktopu**, **30–40 znaků na mobilu**.

### Barva a kontrast
- Vyvarovat se **problematických barevných kombinací** u funkčních prvků (např. jasně zelená/oranžová na sobě, červená/zelená na sobě — špatně čitelné a problematické pro barvoslepé).
- Vyhýbat se **nízkému luminančnímu kontrastu** (např. šedá na světle šedé).
- **Podporovat barevné volby vzory, ikonami a textovými popisky** — nespoléhat pouze na barvu (příklad: zelené/červené kolečko u "Name/Address/Payment/Preferences" doplněné fajfkou/křížkem, aby fungovalo i při různých typech barvosleposti — Tritanomaly, Deuteranopia, Protanopia, Achromatopsia atd.).
- **Nepoužívat barvu samotnou k předání významu** — spoléhá se na dobré barevné vidění (a vidění obecně); nevidomí/slabozrací potřebují jiné, textově založené způsoby předání téže informace. Designér musí zajistit **redundanci** — více způsobů, jak zjistit stejnou informaci.
- Zvážit **autistické spektrum** při volbě barevných schémat — cca 1 ze 160 lidí má poruchu autistického spektra; **žluté a jiné jasné barvy jsou spojeny se senzorickým přetížením (sensory overload)**.
- Nástroje: **Stark** (plugin pro Figma/Sketch/Adobe XD na kontrolu barevného kontrastu a simulaci barvosleposti), **Check contrast** (kontrola kontrastu).

### Interakce — praktické tipy
- **Zkracujte** popisky tlačítek (např. "Get the amazing accessibility PDF" → "Download").
- Používejte **srozumitelné, akční** popisky namísto obecných ("I understand the terms and conditions" → "Agree").
- **Velikost:** tlačítka a interaktivní prvky musí být dost velké pro dotyk.
- **Odpouštějte chyby uživatele (Forgive)** — pomozte uživateli chybu odstranit/zotavit se z ní (např. inline validace u pole "Email address" s jasnou zprávou "Invalid email address" místo blokujícího pop-up "Error").
- **Prostor (Space):** zajistěte jasný prostor oddělující dotykové prvky (např. OK/Cancel tlačítka nesmí být příliš blízko u sebe).
- **Odkazy (Links):** navrhujte odkazy tak, aby vypadaly jako odkazy (podtržení, jiná barva).
- **Labels:** používejte skutečné labely nad poli formuláře, ne pouze placeholder text uvnitř pole (placeholder mizí po začátku psaní a snižuje přístupnost).
- **Responzivita:** vytvářejte plně responzivní designy.
- **Proximity (blízkost):** související prvky musí být vizuálně blízko u sebe — pomáhá uživateli (zejména se zrakovým postižením) pochopit kontext; velký dopad na webová rozhraní.
- **"Out of sight, out of mind"**: je v pořádku skrývat nadbytečné informace/pole formuláře, ale **není v pořádku skrývat důležité informace** nebo je nechat "zmizet".
- **Neautoplaye videí/audia** — může uživatele vyděsit a **interferuje se čtečkami obrazovky**... **ledaže z toho uživatelé mají prospěch** (např. lidé s motorickými potížemi mohou mít problém ručně spouštět video klávesnicí na každé stránce — co je dobré pro jednu skupinu, může být přesný opak toho, co potřebuje jiná skupina).
- **Klávesnice je nutností (must-have)** pro přístupnost — uživatel musí být schopen dokončit **všechny interakce pouze klávesnicí**, bez výjimek.

### Průmyslové standardy — WCAG a W3C
- **WCAG** (Web Content Accessibility Guidelines) — sada pravidel vytvořená **W3C** (World Wide Web Consortium) pro zpřístupnění webu všem uživatelům.
- **Tři úrovně shody (compliance levels):**
  - **A — Essential:** pokud není splněno, asistivní technologie nemusí být schopna stránku číst, chápat nebo plně ovládat.
  - **AA — Ideal Support:** vyžadováno pro weby vládních a veřejných institucí EU; projekt A11Y usiluje o AA shodu.
  - **AAA — Ideal Support (nejvyšší):** typicky vyhrazeno pro části webů/aplikací sloužící specializovanému publiku.
- Přístupnost **nemůže být pouze o compliance** (souladu s předpisy) — splnění shody samo o sobě nezaručuje, že člověk s postižením dané řešení skutečně dokáže použít. **Kontext skutečně záleží** a přístupnost musí být součástí uživatelské zkušenosti (UX), ne jen checklist.

### Kdo je odpovědný za přístupnost (role v projektu)
Přístupnost je **odpovědností téměř každého** v projektu, v různé fázi:
- **Policy** — vysvětluje potřeby uživatelů, poskytuje přístupný obsah.
- **Manager** — sestavuje tým, podporuje školení v přístupnosti.
- **Researcher** — provádí rozhovory, zahrnuje lidi s postižením do výzkumu.
- **Product** — prioritizuje úkoly včetně aktivit spojených s přístupností.
- **UI designer** — vytváří vzhled s ohledem na kontrast a přístupné vzory.
- **Developer** — staví služby, kontroluje stránky nástrojem Axe a čtečkou obrazovky.
- **UX designer** — testuje použitelnost, zahrnuje lidi s postižením do testování.
- **Writer** — píše/edituje obsah s ohledem na přístupnost a úroveň čtenářské gramotnosti.
- **QA** — kontroluje problémy včetně přístupnosti (např. zoom 400 %).
- **Accessibility guru** — poskytuje školení a poradenství dle potřeby.
- Protože **UX vstupuje do projektu velmi brzy**, UX designér může udělat **největší rozdíl** v tom, jak osoba s postižením web/produkt používá.

### Nástroje pro přístupnost
- **Stark** — plugin pro Figma/Sketch/Adobe XD: kontrola barevného kontrastu, generátor barvosleposti, simulace 8 typů barvosleposti, chytré barevné návrhy.
- **Cards for Humanity** (Idean) — praktický nástroj pro inkluzivní design; rozdá dvě náhodné karty (osoba + vlastnost/trait), úkolem je vymyslet, jak naplnit jejich potřeby.
- **Fable** (makeitfable.com) — testování digitálních produktů prováděné přímo lidmi se zdravotním postižením (klienti např. Slack, Shopify, Walmart, Airtable).
- **The Universal Score** (universalscore.global, Idean) — nástroj hodnotící, jak dobře produkt/služba navrhuje pro inkluzi a "belonging" napříč 5 oblastmi: mental wellbeing, belonging, physical needs, neurodiversity, putting people first — vygeneruje skóre a doporučení.
- **Microsoft Inclusive Design** (microsoft.com/design/inclusive) — metodologie vzešlá z digitálního prostředí, která zapojuje a čerpá z plné šíře lidské rozmanitosti; klíčem je zahrnutí a učení se od lidí s různými perspektivami.
- **A11Y Project checklist** — checklist pro provádění accessibility auditů.

---

*Poznámky vytvořeny na základě prezentací "Desirability Testing" (27 slidů) a "Intro to Accessibility" (83 slidů) z bootcampu Ironhack UX/UI Design.*
