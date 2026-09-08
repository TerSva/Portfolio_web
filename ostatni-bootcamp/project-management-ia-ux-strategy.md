# Studijní poznámky: Project Management, Information Architecture, UX Strategy

*Zpracováno z prezentací Ironhack UX/UI bootcampu.*

---

## 1. Project Management

### Role v technickém týmu

- **Front-end vývojáři** – "front-end" webu je ta část, kterou uživatel vidí a se kterou interaguje. Skládá se ze dvou částí: web designu a front-endového vývoje. Klíčové technologie: **HTML, CSS, JavaScript, jQuery**.
- **Back-end vývojáři** – zajišťují ukládání a zpracování dat, která uživatelé zadávají. Skládá se ze tří částí: **server, aplikace (software zpracovávající informace), databáze**.
- **Vztah designu a vývoje** – aby šel jakýkoli návrh implementovat, obsah musí:
  - existovat v použitelném formátu,
  - být uložen v databázi,
  - být načítán a zpracováván (vyžaduje programování).
  - UX designér zodpovídá za návrh pro všechny stavy a možné výsledky interakce uživatele (i chybové stavy, různá zařízení apod.).

### Trojimperativ projektového řízení (Project Management Triangle)

- Kvalita práce je omezena **rozpočtem (cost), termíny (time) a rozsahem (scope)**.
- Projektový manažer může mezi těmito omezeními vyvažovat.
- Změna v jednom omezení si vyžádá změny v ostatních, jinak utrpí kvalita.
- **Design Project Management Triangle**: nelze mít najednou všechny tři výstupy – rychlost (fast), cenu (cheap), kvalitu (good). Lze zvolit jen dvě ze tří, třetí tím utrpí:
  - Levné + rychlé = nízká kvalita
  - Rychlé + kvalitní = drahé
  - Levné + kvalitní = nízká priorita (pomalé)

### Metody řízení projektů

#### Waterfall (vodopádový model)
- Pochází z dob průmyslové revoluce (více než 200 let stará myšlenka), do software/designu převzatá z inženýrství.
- Lineární, sekvenční přístup – postup plyne jedním směrem přes fáze: **Analýza → Požadavky → Design → Implementace → Verifikace → Údržba**.
- Patří mezi méně iterativní a flexibilní přístupy.
- **Problémy waterfallu:**
  1. Klienti často nevědí přesně, co chtějí, dokud neuvidí výsledek.
  2. Změny požadavků vedou k předělávání, novému vývoji a testování → zvýšené náklady.
  3. Designéři si nemusí být vědomi budoucích obtíží při návrhu nového produktu/funkce.

#### Agile
- **Agile je filozofie** pro řízení týmů a projektů (ne přesná metodika).
- Agilní přístupy pomáhají týmům reagovat na nepředvídatelnost pomocí **inkrementálních, iterativních pracovních cyklů** a empirické zpětné vazby.
- **Agile manifest (hodnoty)** – co je ceněno více:
  - Jednotlivci a interakce **před** procesy a nástroji
  - Fungující software **před** vyčerpávající dokumentací
  - Spolupráce se zákazníkem **před** vyjednáváním o smlouvě
  - Reakce na změnu **před** dodržováním plánu
  - (Položky napravo mají hodnotu, ale položky nalevo jsou ceněny víc.)

- **12 principů/závazků Agile modelu:**
  1. Včasné a průběžné dodávání hodnotných návrhů/designů.
  2. Vítání měnících se požadavků, i pozdě v procesu.
  3. Dodávání funkčních designů často, s preferencí kratších časových úseků.
  4. Business lidé a vývojáři musí spolupracovat denně po celou dobu projektu.
  5. Budování projektů kolem motivovaných jednotlivců.
  6. Nejefektivnější způsob předávání informací je osobní rozhovor (face-to-face).
  7. Fungující design/software je primárním měřítkem pokroku.
  8. Agilní procesy podporují udržitelný rozvoj.
  9. Průběžná pozornost technické excelenci a dobrému designu zvyšuje agilitu.
  10. Jednoduchost je nezbytná.
  11. Nejlepší architektury a návrhy vznikají v samo-organizujících se týmech.
  12. Tým pravidelně reflektuje, jak se stát efektivnějším.

- **Co dělá Agile odlišným:**
  - Vývoj je **iterativní** – nikdy není hotovo; vlastnosti se buduji postupně od jednoduchého k propracovanějšímu, architektura se průběžně upravuje.
  - Plánování je **adaptivní** – když se realita liší od plánu, mění se raději plán než realita ("adaptive planning").
  - **Role se stírají** – v agilním týmu lidé dělají, co je potřeba pro úspěch projektu, bez ohledu na titul; úzce definované role (analytik, programátor, tester) v tradičním smyslu prakticky neexistují.
  - **Rozsah (scope) se může měnit** – Agile řeší odvěký problém "moc práce, málo času" tím, že dělá méně: fixuje čas, rozpočet a kvalitu a je flexibilní ohledně rozsahu.
  - **Požadavky se mohou měnit** – Agile věří, že náklady na změnu mohou zůstat relativně ploché (na rozdíl od tradičního přesvědčení, že změna je pozdě draho).
  - **Fungující software/design je primární měřítko úspěchu** – produktivita se měří rychlostí, s jakou tým promění přání zákazníků ve funkční produkt; plány a analytické artefakty samy o sobě nemají pro koncového zákazníka hodnotu.

- **Agilní hodnoty (5 C – zmíněné jako obrázky/hesla)**: Commitment (závazek), Focus (soustředění), Openness (otevřenost), Respect (respekt), Courage (odvaha).

#### Lean
- **Tři hlavní cíle Lean:**
  1. Minimalizace plýtvání (waste).
  2. Kultura neustálého zlepšování.
  3. Důležitost měření "velkého obrazu" (big picture).
- Klíčové zdroje: kniha *The Lean Startup* (Eric Ries), *Lean UX* (Jeff Gothelf, Josh Seiden).

- **Lean UX cyklus (Think → Make → Check):**
  - **Think**: generativní výzkum, ideace, mentální modely, modely chování, výsledky testů, konkurenční analýza.
  - **Make**: prototypy, wireframy, hodnotová nabídka (value prop), landing page, hypotézy, srovnání (comps), nasazený kód. Motto: **"Reduce cycle time, not build time"** (zkracujte délku cyklu, ne dobu buildu).
  - **Check**: A/B testování, analytika webu, testování použitelnosti, funnel, registrace (sign-ups).
- **Lean UX** je metodologie inspirovaná Lean a Agile, která umožňuje soustředit se na **skutečnou zkušenost, která se navrhuje**, spíše než na výstupy/dokumenty. Ukazuje, jak úzce spolupracovat s cross-funkčními členy týmu, sbírat zpětnou vazbu brzy a často, v krátkých iterativních cyklech.

- **Hierarchie pojmů:**
  - **Filozofie**: Lean, Agile atd. (nadřazená úroveň myšlení)
  - **Metodologie**: Scrum, Kanban, XP (Extreme Programming), TPS (Toyota Production System) atd. (konkrétní implementace)
  - Scrum a Kanban jsou konkrétní implementace, které naplňují agilní principy různými způsoby.
  - Vizuální hierarchie (od obecného k specifickému): Systems thinking → Lean → Agile → Scrum (a uvnitř Scrum je Kanban).

### Scrum

- **Scrum** je framework pro řízení práce, sladěný s hodnotami a principy Agile, s důrazem na vývoj softwaru. Je to **nejpoužívanější metodologie v odvětví**.
- Navržen pro **týmy o 3–9 členech**, kteří rozdělují práci na akce (**stories**), jež lze dokončit v časově ohraničených iteracích zvaných **sprinty**.
- **Proces**: Product Backlog (seřazený podle priority) → Sprint Scope (výběr do sprintu) → Iterace (sprint, 1–4 týdny, obsahuje denní standup) → Releasable Software (vydatelný produkt).

- **Klíčové scrum ceremonie/schůzky:**
  1. **Inception meeting** – první schůzka projektu; definují se všechny funkce, které mohou být zahrnuty do produktu, a seskupují se do Product Backlogu.
  2. **Sprint Planning meeting** – na začátku každého sprintu si tým vybírá z Product Backlogu podmnožinu funkcí, ke kterým se zavazuje, a přesouvá je do Sprint Backlogu.
  3. **Daily Stand-ups** – členové sledují pokrok, sdílí strategie a přeplánovávají v 15minutových schůzkách.
  4. **Retrospective meeting** – členové analyzují, jak proběhl poslední sprint, a promýšlejí pracovní kulturu. Lze použít techniky jako **Start / Stop / Continue**. Cílem je zajistit neustálé zlepšování procesů a nástrojů.
  - Celý cyklus: Sprint Planning → Implementation → Sprint Review → Retro → (znovu) Sprint Planning.

### Kanban

- Pochází z **Toyota Production System (TPS)**.
- Vizuální metoda řízení práce – klasická tabule se sloupci **To Do / Doing / Done**.
- **Prvky Kanban tabule:**
  - **Backlog** – kompletní, nefiltrovaný seznam úkolů k udělání.
  - **Priorities** (P1, P2…) – rozdělení úkolů podle priority.
  - **WIP (Work In Progress)** – limit počtu úkolů rozpracovaných najednou (např. "WIP 5").
  - **Test** – validace úkolů před tím, než se považují za hotové.
  - **Icebox** – zásobník nápadů k budoucímu zpracování.
  - **Done** – hotovo.
- Princip práce: **dokončit nejdůležitější úkol, pak se soustředit na druhý nejdůležitější, a opakovat.**

### Scrum vs. Kanban (srovnání)

| Scrum | Kanban |
|---|---|
| Práce probíhá v časově ohraničených sprintech; cílem je po každém sprintu produkovat potenciálně vydatelný produkt. | Neexistují fixní sprinty; tým čerpá úkoly z prioritizovaného backlogu. |
| Produkt se vydává v určitém rytmu daném délkou sprintu. | Vydání probíhá průběžně, kdykoli je vytvořen vydatelný produkt. |
| Silný důraz na cross-funkčnost; tým nemá specifikované role, všichni jsou "prasata" (pig – odkaz na scrum metaforu zapojení). | Členové týmu se mohou specializovat a čerpat úkoly podle své odbornosti. |
| Sprint kickoffy, denní standupy, sprint review, sprint retrospektivy jsou klíčové rituály. | Důraz na neustálé zlepšování procesů, ale bez standardizovaných pravidelných schůzek. |

### Nástroj: Trello

- Praktický nástroj pro tvorbu **Kanban tabule** (sloupce To Do / Doing / Done, karty jako úkoly).
- V kurzu následuje praktické cvičení: postavit první Kanban tabuli pomocí Trella.

---

## 2. Information Architecture (IA)

### Co je IA a proč na ní záleží

- **Definice (Peter Morville, kniha *Information Architecture for the WWW*):** "Organizace, vyhledávání (search) a navigační systémy, které pomáhají lidem dokončit úkoly, najít, co potřebují, a pochopit, co našli."
- IA se soustředí na **organizování, strukturování a označování (labeling)** obsahu efektivním a udržitelným způsobem.
- IA informuje o tom, jak nejlépe seskupit obsah napříč stránkami a definovat vztahy mezi těmito stránkami pomocí navigačních prvků.
- IA leží na průsečíku tří kruhů: **Users (uživatelé), Content (obsah), Context (kontext)**.
  - **Context** = business cíle, financování, politika, kultura, technologie, zdroje a omezení.
  - **Content** = typy dokumentů/dat, obsahové objekty, objem, existující struktura.
  - **Users** = publikum, úkoly, potřeby, chování při vyhledávání informací, zkušenost.
- Zlepšuje interakci na **průsečíku uživatelů, obsahu a kontextu**.

### Historický problém – "weby bez plánu"

- Malé weby rostly do velkých nepořádků, což vedlo k:
  - katastrofám v použitelnosti a nalezitelnosti (usability & findability disasters),
  - noční můrám ve správě obsahu,
  - nákladným redesignům.

### Kdy je IA nejužitečnější

- Při vzniku (inception) webu.
- Když se přidává nový obsah.
- Při velkém redesignu webu.

### Proč je IA důležitá

- **Lidé organizují informace odlišně** – uživatelé mají různé **mentální modely**; přístup k informacím je pro uživatele důležitý; weby mají neustále se vyvíjející informace.
- **Payoff (přínos dobré IA):**
  - Buduje sdílenou slovní zásobu pojmů v týmu.
  - Informuje návrh rozhraní a navigace.
  - Pomáhá s návrhem databáze.
  - Pomáhá plánovat pro škálování (růst).
  - Zvyšuje použitelnost webů.

### Tři komponenty IA

1. **Ontology (ontologie)** – ustanovení konkrétních významů (např. Pantone stanovuje konkrétní význam každé barvy pomocí kódu; ontologie ustavuje společný základ pro každý pojem).
2. **Taxonomy (taxonomie)** – nejtěžší část tvorby IA je vytvořit shodu na tom, co je skutečně důležité pro organizaci obsahu. Vytvoření konkrétní taxonomie vypovídá o produktu. (Ilustrace pojmem "co je pták" – různé kultury/optiky mohou kategorizovat stejné entity odlišně, např. ornitolog řekne "všechno jsou ptáci", zatímco domorodý Karam z Papuy Nové Guineje řekne, že kasuár pták není – kategorie odráží kontext a účel uživatele.)
3. **Choreography (choreografie)** – vzniká, když se význam (ontologie) a kategorizace (taxonomie) protínají a vytváří zážitek (experience) napříč zařízeními/platformami. Definuje **pravidla zapojení** – různé způsoby, jak uživatelé nacházejí a angažují se s obsahem.

- Shrnutí vztahu: **Ontology → Taxonomy → Choreography** (soustředné kruhy, od jádra k vnějšku).

### Organizační schémata (organization schemes)

- **Exact (přesná)** schémata: **Alphabetical** (abecední – např. kontakty), **Chronological** (chronologické – např. časová osa, sociální síť), **Geographical** (geografické – např. mapy).
- **Ambiguous (nejednoznačná)** schémata: **Topic** (téma – např. IMDb podle žánrů/kategorií), **Task** (úkol – např. letecká aplikace s akcemi jako check-in, kontrola letu), **Audience** (publikum), **Metaphor** (metafora – např. iTunes U s poličkami knih jako metaforou knihovny).
- Příklad kombinace více schémat: Netflix (Trending Now, Because you watched X, Comedies, Dark TV Programmes) – kombinuje topic i personalizaci.

### 4 artefakty (core components) informační architektury

1. **Organization system** (organizační systém) – např. podle autora, času, tématu nebo geografie.
2. **Navigation system** (navigační systém) – např. globální a lokální navigace, kontextová, task-based.
3. **Labelling system** (systém označování) – např. potravinářské termíny, vědecké termíny atd.
4. **Search system** (vyhledávací systém) – např. scope, pole, klíčová slova, tagy, "best bets".
- Všechny čtyři jsou podporovány **metadaty** (např. názvy, popisy, autor atd.).

### 8 principů informační architektury (Dan Brown)

1. **Principle of Objects (princip objektů)** – "Treat content as objects." Přemýšlejte o obsahovém modelu jako o hmatatelném objektu. Seskupujte obsah logicky, zvažte účel, kterému informace na webu/platformě slouží, i to, jak se obsah může v čase měnit.

2. **Principle of Choices (princip voleb) – Paradox of Choice** – čím více voleb, tím více mentální práce jejich zpracování vyžaduje, a zvýšená práce může vést ke zvýšenému stresu. **Jak aplikovat:** uživatelům se často nabízí volby na webu/platformě, snažte se snížit kognitivní zátěž těchto souborů voleb.

3. **Principle of Disclosure (princip odhalování) – Progressive Disclosure** – odhalte jen tolik dat, kolik je potřeba, aby uživatelé věděli, jaké kategorie obsahu očekávat. **Jak aplikovat:** progresivní odhalování znamená ukázat nejprve informace, které potřebuji vědět, a pak umožnit jít hlouběji a vidět detaily.

4. **Principle of Exemplars (princip exemplářů) – Exemplifiers** – ukazujte příklady obsahu při popisu kategorií obsahu; poskytuje to větší jasnost. **Jak aplikovat:** použití placeholder textů jako nápověd, co psát nebo hledat; umísťování ukázek (demo) do prázdných stavů (empty states).

5. **Principle of Front Doors (princip předních dveří) – Multiple front doors** – díky vyhledávačům a odkazům stále více návštěvníků vstupuje na web jinou stránkou než přes homepage. Předpokládejte, že alespoň **50 % uživatelů** použije jiný vstupní bod než domovskou stránku. **Jak aplikovat:** dejte uživatelům jasně vědět, kde přistáli a jak se dostat do jiné části webu.

6. **Principle of Multiple Classification (princip vícenásobné klasifikace) – Multiple classification schemes** – nabídněte uživatelům několik různých klasifikačních schémat pro procházení obsahu webu; uživatelé mohou hledat stejný obsah pod různými nadpisy. **Jak aplikovat:** používání "tagů". Buďte opatrní na vytváření příliš mnoha překrývajících se a matoucích klasifikací při tvorbě navigačních systémů.

7. **Principle of Focused Navigation (princip zaměřené navigace) – Navigation by function** – udržujte navigaci jednoduchou a nikdy nemíchejte různé věci. Při návrhu navigace ji smysluplně označte! Navigační prvky by měly být vytvořeny a pojmenovány na základě obsahu, ke kterému uživateli pomáhají se dostat. **Jak aplikovat:** zvažte pojmenování navigací podle kategorií obsahu, ke kterým pomohou uživateli najít cestu.

8. **Principle of Growth (princip růstu) – Growth** – předpokládejte, že obsah webu poroste co do množství obsahu a interakcí. Ujistěte se, že web je škálovatelný. **Web může růst třemi způsoby:**
   - více obsahu stejného typu,
   - nový typ obsahu (např. videa nebo hudba),
   - zcela nový účel webu.

### Výstupy (deliverables) informačního architekta

- Site Maps (mapy webu)
- Hierarchies (hierarchie)
- Categorizations (kategorizace)
- Navigation (navigace)
- Metadata (metadata)

### Shrnutí IA

- Informační architektura se týká organizace, struktury a označování obsahu smysluplným způsobem.
- **Ontologie** = obsah/význam platformy.
- **Taxonomie** = seskupování, označování a organizace obsahu na platformě.
- **Choreografie** = pravidla zapojení, jak uživatel interaguje s obsahem.
- Existuje **5 primárních artefaktů**, které informační architekti navrhují.
- Dan Brown vytvořil **8 vodicích principů** pro navrhování dobré informační architektury.

---

## 3. UX Strategy

### UX jako most mezi businessem a uživateli

- **UX je most mezi byznysem a uživateli.**
- Klasický Venn diagram UX: průsečík **Technology** (funkčnost, engineering, backend, výkon, realističnost), **Business** (vize, cíle, analytika, stakeholdeři, rozpočet) a **Design** (estetika, kreativita, experimentování, front-end).
- V jádru průsečíku leží **UX** – advokacie uživatele, testování, výzkum, příběhy, validita, spolehlivost, orientace na uživatele.

### Proč startupy selhávají (kontext pro důležitost UX strategie)

- Podle Fortune je hlavní důvod selhání startupů: **"Vytvářejí produkty, o které nikdo nestojí."**
- **Top důvody selhání startupů** (analýza 101 startup post-mortemů):
  1. Žádná potřeba na trhu (No Market Need) – 42 %
  2. Došly peníze (Ran Out of Cash) – 29 %
  3. Špatný tým (Not the Right Team) – 23 %
  4. Konkurence je předběhla (Get Outcompeted) – 19 %
  5. Problémy s cenou/náklady – 18 %
  6. Špatný produkt – 17 %
  7. Chybějící/špatný business model – 17 %
  8. Špatný marketing – 14 %
  9. Ignorování zákazníků – 14 %
  10. (dále: špatné načasování produktu, ztráta fokusu, nesoulad v týmu/investorech, špatný pivot, nedostatek vášně, špatná lokace, chybějící financování, právní problémy, nevyužití sítě/poradců)

### Definice UX Strategy

- **Citát (Jamie Levy, kniha *UX Strategy: How to Devise Innovative Digital Products That People Want*):** "UX Strategy leží na průsečíku UX a byznysu. Poskytuje mnohem lepší šanci na vytváření úspěšných produktů. Umožňuje týmům vidět 'velký obraz' – vysokoúrovňový plán k dosažení jednoho nebo více byznysových cílů za podmínek nejistoty."

- **Proč se obtěžovat (Why Bother?):** UX Strategy je **plán akce (plan-of-action)** na to, jak zajistit, aby uživatelská zkušenost produktu byla sladěna s byznysovými cíli. Cílem product manažera je vést tým – vizuální a UX designéry, vývojáře, marketéry atd. – k vytvoření úspěšného produktu s vynikající UX.
- Vizualizace hodnoty: průsečík **Users** a **Business** vytváří **Value (hodnotu)** → "Killer UX Design = Better Conversion" (lepší konverze).

### Jak UX podporuje byznysové cíle

- Manažeři potřebují nástroje UX strategie k **testování hodnotových nabídek**, hledání příležitostí k vytváření hodnoty na trhu a navrhování pro konverzi.
- Dobrá UX (dobrá použitelnost, adopce uživateli, vysoká hodnotová nabídka, žádné školení potřeba, uživatelsky přívětivé, intuitivní, krásný design) → roste **revenue (tržby)**.
- Špatná UX (komplexní UI, nízká adopce, nízká hodnotová nabídka, potřeba školení, špatná použitelnost) → tržby klesají.
- **Zvyšuje se:** prodeje a opakovaní zákazníci, důvěryhodnost a hodnota značky, produktivita, adopce uživateli.
- **Snižuje se:** náklady na školení, údržbu, chyby, zákaznickou podporu.

### Dopady skvělé UX na byznys

Skvělá UX ovlivňuje akvizici a retenci zákazníků – konkrétně:
- Zvyšuje tržby
- Snižuje náklady
- Posiluje image značky
- Zlepšuje loajalitu zákazníků
- Oslovuje nové zákazníky
- Maximalizuje konverzi návštěvníků
- Zvyšuje průměrnou hodnotu objednávky
- Rozšiřuje podíl na trhu
- Zvyšuje sociální odpovědnost
- Zvyšuje používání (usage)
- Šetří čas uživatele
- Snižuje pravděpodobnost chyb – zvyšuje dokončení úkolů a konverzí

### Úrovně UX vyspělosti (UX Maturity Model)

Šestistupňový model (od nejnižší po nejvyšší úroveň):

1. **Unrecognized** – UX "není důležitá".
2. **Interested** – UX je důležitá, ale dostává málo financování.
3. **Invested** – UX je velmi důležitá a vznikají formalizované programy.
4. **Committed** – UX je kritická a vedení (executives) je aktivně zapojeno.
5. **Engaged** – UX je jedním z klíčových principů strategie organizace.
6. **Embedded** – UX je součástí "tkáně" organizace; neřeší se odděleně, ale je vetkaná do všeho.

- I když by dobrá UX měla být "snadný prodej" (easy sell), ne všechny firmy do ní snadno investují. S rostoucí popularitou UX si stále více firem uvědomuje její hodnotu, ale stále je co zlepšovat.

### Co tvoří dobrou produktovou strategii

1. Začíná ambiciózní, kvalitativní vizí pro **customer journey** (cestu zákazníka).
2. Zahrnuje výzvu, kterou je potřeba nejdřív vyřešit/zlepšit.
3. Zvažuje **žádaný výsledek** a **současný stav** projektu, produktu nebo firmy.

- **UX Strategy** leží na průsečíku tří oblastí (diagram):
  - **Human Elements (lidské prvky)**: stakeholdeři, SME (subject matter experts), designéři, vývojáři, inženýři.
  - **Informational Elements (informační prvky)**: existující data, rozhovory s uživateli, výzkum konkurenčních produktů, zpětná vazba zákazníků.
  - **Desired Outcomes (žádané výsledky)**: designová kritéria, funkcionalita, features, metriky úspěchu.

### Kdy je UX Strategy potřeba

Tři typické situace:
1. **Když věříte, že produkt, který máte navrhnout, je jen kopií existujícího designu** → potřeba udělat konkurenční/feature analýzu, zjistit co funguje, co ne, a najít příležitosti.
2. **Když jsou stakeholdeři 100% přesvědčeni, že jejich produktová vize je správná** a chtějí ji implementovat tak, jak je, ale vy máte podezření, že to nebude fungovat → potřeba udělat uživatelský výzkum, abyste jim ukázali, že vizi je třeba upřesnit.
3. **Když dostanete obrovský dokument požadavků** pro produkt a máte přijít s designem, který zvýší konverzi → potřeba způsob, jak je rozklíčovat a namapovat žádané akce na metriky; potřeba prioritizovat požadavky.

### Kdy dělat UX Strategy (obecně)

- Pro jakýkoli produkt design tým potřebuje **plán, roadmapu a produktovou strategii** – vždy by to mělo **začínat strategií**.
- Model: **Drivers** (hnací síly) → **Current State** (současný stav) → přes **Barriers** (bariéry) → **Goals** (cíle) → **Future State** (budoucí stav).

### Rozdíl mezi Plan, Roadmap a Strategy

| Pojem | Definice |
|---|---|
| **Plan (plán)** | Seznam toho, co se bude dělat a kdy (ještě to není strategie). |
| **Roadmap** | Naplánovaná sada funkcí, které se mají vybudovat, a kdy (také to ještě není strategie). |
| **Strategy (strategie)** | Systém dosažitelných cílů a vizí, které společně sladí tým kolem žádaných výsledků pro byznys i zákazníky. |

### Definice UX Strategy (procesní pohled)

- **"UX Strategy je metoda, kterou validujete, že vaše řešení řeší problém pro reálné zákazníky na dynamickém trhu, protože trh se neustále mění."**

### Klíčové takeaways (hlavní ponaučení)

1. **Dobrá UX sladěná se správným byznys modelem může definovat disruptivní produkt.**
2. **Strategie pomáhá celému týmu a stakeholderům sdílet vizi produktu**, což celkově tlačí na vyšší efektivitu.
3. **Pokud validujete svou UX strategii, snižujete riziko vytváření produktů, o které nikdo nestojí.**

### Shrnutí UX Strategy

- UX strategie je soubor voleb k dosažení žádané pozice v čase.
- UX strategie **není** rozpočtování, alokace zdrojů ani plánování projektu. Je to **kreativní cvičení** vytvoření a udržení konkurenční výhody.
- UX strategie se týká toho, jak produkt nebo služba pomůže byznysu uspět tím, že poskytne hodnotu zákazníkům jedinečně smysluplným způsobem.
- UX strategie se týká toho, jak design prospěje byznysu poskytováním hodnoty zákazníkům smysluplným způsobem.

---

*Konec poznámek.*
