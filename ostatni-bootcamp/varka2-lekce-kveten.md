# Bootcamp znalosti – várka 2 (12.5.–30.5.2026)

Zdroj: 8 nahrávek Zoom lekcí (16.5.–30.5.2026, plus 12.5.2026 duplicitně ve dvou souborech). Toto je časově DŘÍVĚJŠÍ fáze bootcampu než várka 1 (ta pokrývala červen–srpen). Chronologicky tedy várka 2 → várka 1.

## Přehled témat

| Datum | Téma |
|---|---|
| 12.5.2026 | Kvalitativní výzkum, uživatelské rozhovory (interview) – teorie a příprava |
| 16.5.2026 | Affinity diagram (pokračování), Empathy Map, User Persona |
| 19.5.2026 | User Persona (detail, elementy), primární vs. sekundární persony |
| 21.5.2026 | Empathy Map + User Persona (opakování, Q&A) |
| 23.5.2026 | Problem Statement, Crazy Eights, User Flow |
| 26.5.2026 | Figma Prototyping (interakce, scroll behavior), Concept Testing |
| 30.5.2026 | (technické potíže se sdílením obrazovky, bez nového obsahu) |

Pozn.: soubory `51811d12-...kopie` a `4090a046-...` mají identický timestamp (12.5.2026 17:20) – jde o duplicitní nahrávky stejné lekce, zpracováno jako jedna.

---

## 1. Kvalitativní výzkum a uživatelské rozhovory (User Interviews)

**Proč rozhovory:** kvantitativní data (survey) ukážou "co" a "kolik", kvalitativní rozhovory ukážou "proč". Kombinace obou dává plný obraz (kvant. = širší vzorek, povrch; kvalit. = hloubka, menší vzorek).

**Iceberg model:** to, co uživatel řekne, je jen špička ledovce – skutečné motivace, přesvědčení a pocity jsou "pod hladinou" a je třeba se k nim doptat.

**Pravidlo 5 uživatelů:** cca 5 rozhovorů odhalí většinu klíčových usability/insight problémů (diminishing returns po 5. účastníkovi).

**Délka rozhovoru:** pro první praxi max. 30 minut; v budoucnu běžně 45 min – 2 hodiny (u delších dát pauzu). Necílit na "zabití" účastníka.

**Struktura přípravy rozhovoru (Interview Guide, FigJam šablona):**
1. **Background** – krátký odstavec, co řešíte (odkaz na "Wicked Problem" brief).
2. **Research goal** – co se chcete naučit (navazuje na cíle ze survey, ale jde hlouběji).
3. **Target users** – koho cílíte.
4. **Assumptions** – veškeré předpoklady týmu i klienta – sepsat všechny, i domněnky.
5. **Otázky ze survey** se v rozhovoru opakují, ale v otevřené podobě (ne "jak často chodíš do posilovny" s možnostmi, ale otevřeně).
6. Survey výsledky/patterny určují, kam se v rozhovoru "ponořit hlouběji" (např. když survey ukáže, že lidé preferují běhání, doptat se v rozhovoru na běhání konkrétněji).

**Pravidla vedení rozhovoru:**
- Vysvětlit účel (podobně jako u survey – proč, kdo jste, jaký to má pro účastníka smysl), ale nezacházet do celého project briefu.
- Anonymita, žádné špatné/správné odpovědi, neformální tón – budovat důvěru ("nejsme u soudu").
- Začít obecnějšími/demografickými otázkami, postupně přejít k tématu.
- Používat scénář jako vodítko, ale improvizovat – nechat účastníka vyprávět.
- Pozorovat řeč těla, mimiku, emoční reakce a zaznamenávat je zvlášť (např. "otázka 3 – odpověď pozitivní, ale výraz obličeje naznačoval nejistotu").
- Role v týmu: moderátor (vede rozhovor), note-taker (zapisuje odpovědi), pozorovatel (zapisuje neverbální projevy) – role lze rotovat.
- Nechat účastníka vést, ale při odbočení jemně vrátit k tématu.
- Zaměřit se na pain points, motivace, potřeby.
- **Best practices:**
  - Předstírat, že nic nevíte, i když víte.
  - Doptávat se na konkrétní pojmy ("co přesně myslíš tím 'frustrující'?").
  - Language mirroring – jemně přejímat slovník účastníka (ne doslovně/trapně).
  - Nevyjadřovat souhlas/nesouhlas, nesdílet vlastní názor, zůstat neutrální ("děkuji, že se s tím se mnou sdílíš" je univerzální bezpečná odpověď).
  - Nepokládat leading questions ani yes/no otázky (nikdy se neptat "koupil/a bys tohle?" – lidé odpoví kladně z zdvořilosti, ne z pravdy).
  - Otevřené otázky, připravené follow-up otázky.
  - Neklamat na ticho – je ok říct nahlas, že si zapisujete poznámku.
  - Struktura: pozdrav → intro → úkoly/otázky → debrief/poděkování.
  - Mít zálohu nahrávání (víc než jedno zařízení) – riziko ztráty zvuku/nahrávky.
  - Participant musí odpovídat cílové skupině (target user group), ne náhodná osoba.

---

## 2. Affinity Diagram – pokračování a AI asistence (FigJam AI)

(Základy affinity diagramu – bottom-up třídění sticky notes, pattern→theme→insight, oddělovat kvalitativní a kvantitativní data ("nemíchat žáby a prarodiče") – byly probrány již dříve, zde navazuje praktické cvičení.)

**Postup s AI (FigJam AI / "Organize"):**
1. Nejprve udělat affinity diagram **manuálně** (ručně roztřídit stickies do skupin) – to je prioritní krok, AI přichází až poté.
2. Zkopírovat všechny stickies (bez kategorií/skupin) do nového frame v náhodném pořadí.
3. Vybrat všechny stickies → ikona **Organize** → **Sort stickies by topic** – AI automaticky roztřídí poznámky podle podobnosti a vygeneruje nadpisy skupin (headers).
4. Zkontrolovat, zda výsledek dává smysl – AI výstup není automaticky správný, je potřeba lidský úsudek.
5. Lze aplikovat znovu na jednotlivou (velkou) skupinu pro další "prohloubení" (drill-down).
6. Funkce **Summarize** – AI shrne vybrané stickies do textového závěru/insightů.
7. Užitečné nástroje: **Copy link to section** (sdílení odkazu na konkrétní frame), **Copy as PNG** (rychlé screenshoty pro dokumentaci/Slack).

**Úkol (homework):** každý student individuálně vyzkouší AI třídění vedle manuální verze, porovná výsledky (co AI udělala lépe/hůře, jaké headers navrhla), a v týmu pak diskutuje rozdíly a začlení poznatky do finální verze affinity diagramu. Po dokončení affinity následuje **dot voting** (hlasování tečkami) pro prioritizaci.

---

## 3. Empathy Map

**Historie:** koncept redesignovali Alex Osterwalder a Dave Gray.

**6 sekcí:**
- **Says** (co říká)
- **Thinks/Feels** (co si myslí a cítí)
- **Hears** (co slyší – od okolí, médií, kolegů)
- **Sees** (co vidí – prostředí, trh, konkurenci)
- **Pains** (bolesti/frustrace)
- **Gains** (zisky/přání)

Empathy mapa pomáhá týmu sjednotit pohled na uživatele před tvorbou persony, čerpá se z affinity diagramu / user research dat.

---

## 4. User Persona

**Co persona je:** fiktivní, ale datově podložená reprezentace **skupiny** podobných uživatelů – ne jeden konkrétní člověk. Nestavíme produkt "pro každého".

**Lean Persona (přístup používaný v kurzu):** persona založená na reálném uživatelském výzkumu, bez ohledu na to, kolik atributů dokážeme popsat – kvalita nad kvantitou dat.

**Proto Persona vs. Product Persona (zmíněno jako kontrast k Lean Persona):**
- **Proto Persona** – rychlá, na základě předpokladů (na začátku projektu, kdy ještě nejsou data).
- **Product Persona** – vytvořená, když není čas/rozpočet na pořádný výzkum; založená na předpokladech týmu/klienta a sekundárním výzkumu; nemá fotku ani všechny elementy, slouží k sjednocení týmu.
- V tomto kurzu se staví **Lean Persona**, protože výzkum (survey + interview + affinity) už byl proveden.

**Elementy persony:**
1. **Foto** – mělo by vypadat jako reálný člověk, odpovídat archetypu (ne celebrita, ne fotka lektorky/spolužáka). Lze použít AI generované foto nebo volně dostupné fotobanky.
2. **Demografika** – čerpat ze survey dat (např. pokud 85 % respondentů bylo 25–35 let, persona bude v tomto rozmezí). Platí i pro příjem, pohlaví atd. – vše musí navazovat na skutečná survey data.
3. **Archetyp** – krátký popisný "titulek" (např. "Andrew the busy commuter", "Sara the enthusiastic educator") – při pohledu okamžitě jasné, o jaký typ uživatele jde.
4. **Citát (quote)** – reálný citát (nebo kombinace dvou) z výzkumu/affinity diagramu, který vystihuje hlavní pain point; musí být podložený daty.
5. **Psychografika:**
   - **Goals/Needs** (cíle a potřeby) – doporučeno oddělit:
     - **Needs** = to, co člověk potřebuje k fungování/spokojenosti, esenciální, nevyjednatelné (např. "potřebuji se cítit bezpečně při nakupování"). Needs = **proč**.
     - **Goals** = to, co chce aktivně dosáhnout, konkrétní a měřitelné (např. "chci úspěšně dokončit nákup, aniž bych měl pocit podvodu"). Goals = **co**.
     - Typy cílů: life goals (kým chce být), behavioral goals (co chce dělat), experience goals (jak se chce cítit).
   - **Pain points** – problémy zjištěné z affinity diagramu.
   - Volitelně: motivace, zájmy/vlivy/přesvědčení (např. fanoušek značky Nike → ovlivňuje rozhodování), technická zdatnost (novice/pokročilý), používaná zařízení a platformy.

**Primární vs. sekundární persona:**
- Rozlišení podle **frekvence/opakování patternů** ve výzkumu – nejrepetitivnější pattern = primární persona, méně repetitivní (ale stále opakující se) = sekundární.
- Příklad Uber: primární = běžní cestující, sekundární = např. luxusní tier, pet-friendly jízdy, ženy-only řidičky – různé segmenty stejné širší skupiny.
- Pro aktuální projekt v kurzu stačí dodat **jednu primární personu** (v zájmu zaměření projektu – kolik person, tolik pak i customer journey map).
- Rozhodnutí, kdo je primární uživatel, dělá tým na základě znalosti briefu, sekundárního výzkumu, survey a interview dat.

**Důležité pravidlo konzistence:** všechno musí navazovat na reálná data – pokud lektorka uvidí "disconnect" (např. věk/pohlaví/příjem persony neodpovídá survey datům), je to problém.

---

## 5. Problem Statement

(Základy – definice, "define" fáze double diamond, šablona "[typ zákazníka] potřebuje [potřeba], protože [insight]", vyhýbat se vágním termínům jako "snadné použití"/"intuitivní" – byly probrány dříve.)

- Individuální i týmový problem statement se tvoří, tým pak vybírá/kombinuje finální verzi.
- Pořadí kroků: **User Journey Map** vzniká PŘED Problem Statement (ne naopak).
- Je v pořádku dělat **předpoklady (assumptions)** podložené evidencí (např. "nosí Nike" → zájem o Nike), ale nelze si vymýšlet pain pointy, které nejsou podložené daty.
- Po finálním problem statementu tým vytváří **How Might We (HMW)** otázky – typicky 3 varianty, každá slouží jako sloupec pro brainstorming řešení/nápadů (verbální brainstorming, co nejvíc nápadů).

---

## 6. Crazy Eights

- Ideation technika: 8 nápadů/screenů, 1 minuta na každé pole.
- Slouží k rychlému generování vizuálních konceptů řešení.
- Nápady z Crazy Eights se znovu využívají později ve fázi **sketchování** (低-fidelity wireframy), ne přímo v User Flow.

---

## 7. User Flow

**Definice:** vizualizace cesty uživatele produktem/appkou, včetně rozhodovací logiky. **Happy path** = ideální/nejběžnější scénář bez odboček.

**Legenda flowchart symbolů:**
- **Ovál** = start/konec
- **Obdélník** = proces/obrazovka (page)
- **Kosočtverec (diamond)** = rozhodovací bod (decision point)
- **Rovnoběžník (parallelogram)** = vstup/výstup (input/output)
- **Šipky** = sekvence/směr

**Tvorba:** individuálně, na základě všeho, co bylo dosud vytvořeno – user persona, user journey (nízké body/low points), problem statement (flow musí řešit alespoň jeden segment problem statementu). Nejde o vytváření webu, ale mobilní aplikace (v tomto konkrétním projektu) + později nedigitální řešení.

**Finalizace flow v týmu:** buď hlasování pro jeden z individuálních návrhů, nebo kombinace nejlepších částí z více verzí (rozhodnutí + zdůvodnění).

**Návaznost:** po finálním user flow každý samostatně nakreslí (sketchne) navrhované wireframy pro každou obrazovku flow – lze ručně nebo pomocí předpřipravených “handdrawn” komponent v Figma (nástroj FigJam se štítkem podobným ručně kresleným prvkům). Časový rámec: cca 5–10 minut na obrazovku, jde o rychlý draft, ne dokonalý výsledek – detailnější verze se tvoří příští hodinu v týmu.

---

## 8. Figma Prototyping – interakce a scroll behavior

(Základy – vytváření spojení mezi frames pomocí "+" ikony, flow labels – byly zmíněny dříve; zde je kompletní přehled Interaction menu.)

**Trigger (spouštěč interakce):**
- On click / On tap
- On drag
- While hovering
- While pressing (press & hold) vs. jednoduchý click – rozdíl: "press" vyžaduje držení, "click" spustí okamžitě
- Key/gamepad
- Mouse enter/leave
- Mouse down/up
- After delay (v milisekundách) – automatické spuštění po čase

**Action (akce):**
- Navigate to
- Back
- Scroll to
- Open link
- Open overlay / Swap overlay / Close overlay

**Destination, Animation, State/reset** – doplňkové nastavení cílového framu, typu animace a resetování stavu komponenty.

**Scroll Behavior:**
- **Position:**
  - *Fixed* – zůstává na místě při scrollování (stay in place)
  - *Sticky* – zastaví se na horním okraji při scrollu (stop at top edge)
  - *Scroll with parent* – scrolluje spolu s rodičovským frame
- **Overflow:** no scroll / horizontal / vertical / both directions
- **Technický požadavek:** aby scroll fungoval, obsah musí být VĚTŠÍ než frame a musí být zaškrtnuto **"Clip content"**.
- Praktický postup: vytvořit delší/vyšší frame s obsahem, ořezat (clip) na velikost cílového zařízení (např. iPhone) – tento postup je standardní workflow.

**Cvičební úkol:** postavit interaktivní prototyp na základě papírových wireframů (příklad: menu katalogu → seznam produktů → detail produktu → potvrzení nákupu).

---

## 9. Concept Testing

**Definice:** proces používající kvalitativní i kvantitativní metody k vyhodnocení přijetí nového produktového nápadu **před** uvedením na trh. Používá se v nejranější fázi vývoje (máme jen nápad/koncept, nízko-fidelity sketch).

**Proč testovat brzy:** čím později se v procesu vývoje dělají změny, tím jsou dražší a náročnější. Testování snižuje náklady a riziko. (Citace zmíněná lektorkou – Reid Hoffman: "pokud se nestydíš za první verzi svého produktu, uvedl jsi ji na trh příliš pozdě.")

**Proč low-fidelity wireframy jsou ideální pro concept testing:**
- Rychlé a levné na vytvoření i změnu.
- Černobílý/no-color design nerozptyluje uživatele vizuálními detaily (barvy, estetika) – zpětná vazba je čistě k **konceptu/logice**, ne k vzhledu.
- Lze testovat papírové prototypy, samostatné (nepropojené) Figma screeny, nebo plně klikatelné grayscale prototypy.

**Co se testuje:** zda nápad/produkt dává uživateli smysl, zda řeší problém definovaný v problem statementu a personě, zda flow je logický a zda by produkt uživatelé vůbec používali. Netestuje se vizuální dokonalost.

**Rozdíl od usability testing:** usability testing přichází později (mid-fidelity), měří konkrétní metriky a úspěšnost dokončení úkolů; concept testing v této fázi metriky vynechává – jde jen o validaci nápadu.

**Zmíněné další typy testování (jen krátce, detaily budou v budoucích lekcích):**
- **Accessibility testing** – zda produkt mohou používat lidé se zdravotním postižením; dnes samostatná kategorie, dříve součást usability testingu.
- **Usability testing** – účastníci dostanou úkoly k dokončení, pozorovatelé/note-takers zaznamenávají problémy; kombinace kvalitativních a kvantitativních dat, měří spokojenost.
- **Guerrilla testing** – rychlá, levná metoda sběru zpětné vazby (např. na ulici); concept testing je už svým způsobem "guerrilla style", ale guerrilla usability testing lze dělat až od mid-fidelity fáze.

**3 kroky přípravy concept testu:**
1. **Definice cílové skupiny a kontextu testování** – kdo se bude testovat (odpovídá user persona), kde (Zoom/osobně), co měřit (v této fázi lze přeskočit – měření patří až k usability testingu), pořadí prezentace nápadů/funkcí (pokud je jich víc).
2. **Popis produktu/nápadu** – krátký, jasný popis co produkt dělá, jaké má výhody pro uživatele (podobně jako benefit-focused text u survey), business model/cena (pokud relevantní).
3. **Core concept** – 1–2 věty/odstavec shrnující řešení; vždy uvést přínosy (benefits) a jak produkt pomáhá řešit problém uživatele.

**Průběh testu (jako mini-rozhovor):**
- Vysvětlit nápad účastníkovi, ale neprozrazovat vše najednou.
- Nechat účastníka procházet obrazovkami, povzbuzovat k mluvení nahlas (co vidí, co očekává, jak se cítí).
- Ptát se na konkrétní momenty zaseknutí ("všiml jsem si, že jsi na této obrazovce strávil více času, jak se cítíš?").
- Doptávat se na "proč" u nejasností/zmatku ("co přesně bylo matoucí?").
- Ptát se, co by uživatel očekával vidět.
- **Nebránit design** – pokud je uživatel zmatený, je to cenná data, ne osobní útok.
- Sledovat chování víc než slova – co uživatel dělá, je často cennější než co říká (neverbální signály vs. verbální ujištění "všechno je v pořádku").
- Ujistit účastníka, že upřímná kritika neurazí.
- Se všemi účastníky (doporučeno 3 lidi) pokládat **stejné otázky** kvůli hledání patternů (např. 2 ze 3 lidí měli problém s home screen = pattern k řešení).
- Vyhýbat se leading a yes/no otázkám i zde.
- Testování probíhá 10–15 minut na osobu, mezi spolužáky navzájem (nebo ideálně s někým mimo třídu).
- Test se dělá na finálním interaktivním prototypu (po sketch fázi), obvykle na mobilním mock-upu, ne nutně přímo na telefonu účastníka (odkaz na prototyp lze otevřít i na telefonu, ale není to povinné).

---

## Shrnutí návaznosti procesu (chronologicky dle várky 2)

Sekundární výzkum → Survey → User Interviews → Affinity Diagram (manuálně + AI asistence) → Empathy Map → User Persona (primární, případně sekundární) → User Journey Map → Problem Statement → How Might We → Crazy Eights (ideace) → User Flow (individuální → týmový finální) → Sketch wireframy → Figma prototyp (interakce, scroll behavior) → Concept Testing (validace nápadu s uživateli) → [další: usability testing, mid/high-fidelity – navazuje na várku 1]
