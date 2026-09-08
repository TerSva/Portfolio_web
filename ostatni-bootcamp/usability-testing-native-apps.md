# Studijní poznámky: Usability & Native Apps (Ironhack UX/UI Bootcamp)

---

# 1. Usability jako design framework

## 1.1 Co je usability (použitelnost)

- **Usability** = jakákoli technika používaná k vyhodnocení produktu nebo systému.
- Na obecné úrovni měří, jak "použitelný" daný produkt je.
- Velkou součástí usability je i **pleasurability** (příjemnost používání) – pokud uživatel odchází spokojený, jste na správné cestě; pokud ne, chybí vám alespoň jedna z klíčových kvalitativních složek.

## 1.2 Model 5 kvalitativních komponent usability (LEMES)

Framework s pěti pilíři, které dohromady definují použitelnost produktu:

1. **Learnability (naučitelnost)**
   - Jak snadné je pro uživatele zvládnout základní úkoly při **prvním** kontaktu s řešením.
   - Souvisí s efektivitou – schopností uživatele ovládat systém na určité úrovni po nějaké (i nulové) době tréninku.
   - Zahrnuje i schopnost méně častých uživatelů znovu se naučit systém po období nepoužívání.

2. **Efficiency (efektivita)**
   - Jak rychle dokážou uživatelé provádět úkoly **poté, co se design naučili**.
   - Definice: rychlost, s jakou lze přesně a úplně dosáhnout uživatelova cíle – obvykle měřeno časem.
   - Příklad benchmarku: "95 % všech uživatelů zvládne nahrát software do 10 minut."

3. **Memorability (zapamatovatelnost)**
   - Jak snadno si uživatelé znovu osvojí zručnost při návratu k designu po období nepoužívání.
   - Dobrá learnability + memorability = uživatelé se vrací.
   - Maximalizuje se logickými kroky a konzistentním designem napříč celým webem/appkou; lze měřit pomocí analytiky.

4. **Errors (chyby)**
   - Klíčové otázky: Kolik chyb uživatelé dělají? Jak závažné jsou? Jak snadno se z nich dokážou zotavit?
   - **Error tolerance** = jak dobře aplikace předchází chybám způsobeným interakcí uživatele a jak pomáhá uživatelům se z chyb, které přesto nastanou, zotavit.
   - Cíl "nulová chybovost" je nereálný – vývojáři jsou lidé, systémy nejsou dokonalé. Skutečná výzva: **jak moc je aplikace nápomocná, když k chybě dojde**.

5. **Satisfaction (spokojenost)**
   - Jak příjemné je používání systému.
   - Měří se pomocí **System Usability Scale (SUS)** – dotazníková metoda.

## 1.3 System Usability Scale (SUS)

- Metoda typu dotazník; účastníci hodnotí 10 výroků na škále 1–5 (Strongly disagree – Strongly agree).
- Příklady výroků z dotazníku:
  - Myslím, že bych tento systém chtěl/a používat často.
  - Shledal/a jsem systém zbytečně komplexní.
  - Myslel/a jsem si, že systém je snadné používat.
  - Myslím, že bych potřeboval/a podporu technika, abych systém mohl/a používat.
  - Různé funkce systému byly dobře integrované.
  - Shledal/a jsem systém příliš nekonzistentní.
  - Většina lidí by se naučila tento systém používat velmi rychle.
  - Systém mi přišel velmi neohrabaný/těžkopádný na používání.
  - Cítil/a jsem se při používání systému velmi jistě.
  - Musel/a jsem se naučit spoustu věcí, než jsem mohl/a se systémem začít pracovat.

## 1.4 Statistika (Forrester)

> "77 % uživatelů se vrací na content/informační weby **kvůli snadnosti použití**. Pouze 22 % se vrací proto, že web patří oblíbené značce."

---

# 2. Usability testing (testování použitelnosti)

## 2.1 Co je usability testing

- Vyhodnocení produktu/služby testováním s **reprezentativními uživateli**.
- Účastníci se během testu snaží dokončit **typické úkoly**, zatímco pozorovatelé sledují, poslouchají a dělají si poznámky.

### Cíl testování
- Identifikovat problémy s použitelností.
- Sbírat kvalitativní a kvantitativní data.
- Zjistit spokojenost účastníků s produktem.

## 2.2 User testing vs. Usability testing

| User testing | Usability testing |
|---|---|
| Otázka: "Potřebují uživatelé moji appku?" | Otázka: "Dokážou uživatelé moji appku používat?" |
| Ověřuje potřebu/hodnotu produktu | Ověřuje použitelnost konkrétního řešení |

## 2.3 Proč testovat prototypy

- Prototypy se vytváří **za účelem testování** – vytvářet prototyp bez testování nedává smysl.
- Citát: *"Pokud vás první verze produktu nezahanbuje, spustili jste ji příliš pozdě."* – Reid Hoffman (LinkedIn)

## 2.4 Jaké typy prototypů lze testovat

**Statické wireframy** – u testování se ptáme:
- Zobrazuji všechny požadavky, které uživatel potřebuje?
- Potřebuji odstranit nějaký prvek z layoutu?
- Je zobrazený obsah pro zákazníka hodnotný?
- Je organizace sekcí srozumitelná?
- Jsou výzvy k akci (CTA) jasné?

**Interaktivní prototypy** – u testování se ptáme:
- Je navigace a interaktivita intuitivní?
- Je snadné najít určitou informaci?
- Jsou hlavní úkoly snadné k provedení?
- Reaguje/dává prototyp uživateli zpětnou vazbu na jeho akce?

## 2.5 Volba fidelity (věrnosti) prototypu podle cíle testování

- **Low fidelity (papírový prototyp)**
  - Ověření nápadu (validace idea).
  - Definování předběžného layoutu.
- **Mid-fidelity prototypy**
  - Definování navigace.
  - Definování struktury informací a informačního toku.
  - Definování CTA a některých uživatelských interakcí.
- **High fidelity prototypy**
  - Definování UI.
  - Definování vizuálních prvků (barva, typografie, estetika).
  - Zlepšování usability.

## 2.6 Způsoby testování

### In-Lab (synchronní testování)
- Videokamera snímá výrazy obličeje uživatele.
- Screen recorder zaznamenává pohyby na obrazovce.
- Facilitátor (moderátor) je v místnosti s účastníkem.
- Pozorovatelé jsou v jiné místnosti.

**Klady:** data založená na pohybech těla a mimice uživatele.
**Zápory:** nákladnější, omezený geografický dosah.

### Remotely (asynchronní testování)
**Klady:**
- Uživatelé jsou ve svém přirozeném prostředí.
- Plní konkrétní úkoly pomocí prototypů.
- Zaznamenávají se pohyby myši a telefonní rozhovor.
- Levné, rychlé.
- Širší geografická distribuce.

**Zápory:**
- Potenciál oslovit speciální publikum ne vždy dostupný.
- Méně empatie/intuitivnosti.
- Ztráta schopnosti vidět mimiku a gesta uživatelů.
- Menší technická kontrola.

### Formální vs. Neformální testování

**Formální:**
- Strukturované.
- 3–4 týdny trvání.
- V laboratoři.
- Široké spektrum uživatelů.
- Vysoká fidelita.
- Vyškolení moderátoři a analytici.

**Neformální (Guerrilla Testing):**
- S malým/žádným rozpočtem.
- 1–3 dny.
- V kanceláři/na ulici.
- Přátelé a rodina.

### Guerrilla style testing
- Rychlá, levná metoda okamžitého sběru zpětné vazby od uživatelů, kdy UX konzultant pokládá otázky ohledně konkrétních oblastí webu/aplikace (typicky přímo na ulici nebo v kavárně).

## 2.7 Moderátorské techniky

Podle cíle testování lze zvolit tyto strategie moderátora:

- **Concurrent Think Aloud / "Think Aloud Protocol"** – účastníky vedeme k tomu, aby nahlas komentovali svůj myšlenkový proces během interakce s produktem.
- **Concurrent Probing** – moderátor pokládá doplňující otázky přímo v průběhu úkolu, když účastník řekne/udělá něco zajímavého nebo neobvyklého.
- **Retrospective Probing** – otázky na myšlenky a jednání účastníka se pokládají až **po dokončení** session.

## 2.8 Struktura testovací session

Doporučení pro každý test:
- **Maximálně 5 úkolů** k dokončení.
- **45–60 minut** na jejich provedení.
- Tým: **1 moderátor** (klade otázky), **1–2 note-takeři** (zapisovatelé poznámek).

### Příklad průběhu usability testing session (6 kroků)

1. **Welcome and Intro (Přivítání a úvod)**
   - Facilitátor přivítá účastníka a vysvětlí test.
   - Účastník podepíše souhlas (release form).
   - Facilitátor položí předtestové/demografické otázky.

2. **Methodology Overview (Přehled metodologie)**
   - Facilitátor vysvětlí "thinking aloud" a zeptá se na doplňující otázky.
   - Facilitátor vysvětlí, kde začít.

3. **Beginning Session (Zahájení session)**
   - Účastník nahlas přečte scénář úkolu a začne na něm pracovat, přičemž nahlas přemýšlí.

4. **During Sessions (Během session)**
   - Note-takeři zaznamenávají chování, komentáře, chyby a úspěšnost/neúspěšnost každého úkolu.
   - Session pokračuje, dokud nejsou dokončeny všechny scénáře nebo nevyprší čas.

5. **Debrief (Rozbor)**
   - Facilitátor buď klade závěrečné subjektivní otázky, nebo zašle online dotazník.

6. **Close (Uzavření)**
   - Poděkování účastníkovi, předání dohodnuté odměny, doprovod z testovacího prostředí.

## 2.9 Dokumentace pro usability testing

Před testem je třeba vytvořit:
- **Test plan** (testovací plán)
- **Test Metrics** (metriky testu)
- **Interview Prep / Moderator script** (příprava rozhovoru / scénář moderátora)
- **Test Report Template** (šablona reportu) – pro udržení celého procesu organizovaného a zdokumentovaného

## 2.10 Šablona Test Reportu (Test Report Template)

**1. Background Summary (Úvodní shrnutí)**
- Stručné shrnutí: co bylo testováno (web/aplikace), kde a kdy test proběhl, informace o vybavení, co se během testu dělo (veškeré materiály jako přílohu), testovací tým, stručný popis problémů i toho, co fungovalo dobře.

**2. Methodology (Metodologie)**
- Popis metodologie testu tak, aby jej ostatní mohli zopakovat – popis průběhu sessions, typ testovaného rozhraní, sbírané metriky, přehled scénářů úkolů.
- Popis účastníků + souhrnné tabulky demografických dat (věk, profese, používání internetu, navštívené stránky atd.).

**3. Test Results (Výsledky testu)**
- Analýza toho, co zaznamenal facilitátor a data loggeři.
- Úkoly s nejvyšší a nejnižší mírou dokončení.
- Přehled úspěšnosti dokončení úkolů podle účastníka, úkolu a průměrné úspěšnosti podle úkolu (v tabulce).
- Počet a procento účastníků, kteří dokončili každý scénář i všechny scénáře (vhodný je sloupcový graf).
- Průměrný čas na dokončení každého scénáře (u těch, kteří ho dokončili).
- Výsledky spokojenosti.
- Komentáře účastníků (pokud jsou vypovídající).

**4. Findings and Recommendations (Zjištění a doporučení)**
- Výčet zjištění a doporučení na základě všech dat (kvantitativních i kvalitativních, poznámek i tabulek).
- Každé zjištění musí mít oporu v datech – v tom, co jste skutečně viděli a slyšeli.
- Lze mít buď jeden celkový seznam zjištění/doporučení, nebo je členit podle jednotlivých scénářů.

### Kvantitativní vs. kvalitativní data

**Kvantitativní data:**
- Zaznamenávají se do tabulky/spreadsheetu, počítají se metriky jako:
  - Success rates (míra úspěšnosti)
  - Task time (čas na úkol)
  - Error rates (míra chybovosti)
  - Satisfaction questionnaire ratings (hodnocení spokojenosti)
- Vhodné přidat demografická data účastníků pro třídění podle demografických proměnných.
- Je nutné identifikovat scénáře úkolů pro každou metriku.

**Kvalitativní data:**
- Zaznamenává se:
  - Pozorování cest, kterými se účastníci ubírali.
  - Zažité problémy.
  - Komentáře/doporučení.
  - Odpovědi na otevřené otázky.
- Problémové výroky musí být **přesné a stručné**. Příklad:
  - ✅ Dobrý problémový výrok: "Kliknul na odkaz na Research místo na Clinical Trials."
  - ❌ Špatný: "Kliknul na špatný odkaz."
  - ❌ Špatný: "Byl zmatený z odkazů."

## 2.11 Doporučené video/zdroj
- Video "Sprint: The Five-Act Interview" (z knihy/metodiky Sprint od Google Ventures) – doporučené doplňkové zdroje k tématu moderování usability testů.

---

# 3. Native Apps (nativní aplikace)

## 3.1 iOS vs. Android – úvod

- **iOS** a **Android** (Material Design) jsou dva odlišné operační systémy s vlastními standardy, funkcemi a očekáváními uživatelů.
- Základní princip: **navrhujte tak, aby design působil nativně na dané platformě** ("Design in a way that feels native to each platform").
- Marketingové postoje platforem:
  - Apple: "We offer an intuitive system with a seamless experience" (Nabízíme intuitivní systém s bezproblémovým zážitkem.)
  - Google/Android: "We pride our system to be transparent and customisable" (Jsme hrdí na to, že náš systém je transparentní a přizpůsobitelný.)

## 3.2 Krátká historie iOS

- V roce **2005**, při prvních návrzích iPodu, byly dva různé týmy pověřeny zmenšit Mac OS a vytvořit iOS.
- Mac OS byl v té době již kompletní se všemi funkcemi (zvuk, animace) – bylo potřeba jej pouze optimalizovat, aby se vešel do malého zařízení.
- Doplňkový zdroj: **iOS Human Interface Guidelines**.

## 3.3 Krátká historie Androidu

- Android byl původně vyvíjen jako software pro správu fotoaparátu (camera manager software).
- Tvůrci ale chtěli, aby byl **open source**, a v roce **1997** vydali první otevřený standard pro mobilní zařízení. (Pozn.: v prezentaci uveden rok 1997 u vydání standardu, první telefon s Androidem viz níže.)
- V roce **2008** byl vydán první telefon s Androidem – **HTC Dream**.
- Doplňkový zdroj: **Guidelines for Material Design**.

## 3.4 Statistiky – rozdíly mezi uživateli iOS a Android (příklad z online datingu, AYI.com)

- iOS uživatelé jsou **2× pravděpodobněji** v šestimístném platovém pásmu.
- iOS uživatelé o **18 % pravděpodobněji** cvičí každý den.
- iOS uživatelé nejčastěji pracují v oborech tech/engineering.
- iOS uživatelé pijí o **50 % více** a užívají drogy **2× častěji**.
- Android uživatelé nejčastěji pracují v oborech labor/construction.
- Android uživatelé jsou o **30 % pravděpodobněji** v příjmovém pásmu pod 60 000 $.
- Android uživatelé jsou o **50 % pravděpodobněji** zrzaví (hair color).
- Android uživatelé jsou o **20 % pravděpodobněji** rozvedení.

## 3.5 Obchodní úvahy – kterou platformu preferovat

- **Monetizace appky nebo placené stahování?** → **Apple** (App Store generuje vyšší příjmy)
- **Retailová aplikace?** → **Apple** (23 % iOS uživatelů nakupuje online oproti 17 % Android uživatelů)
- **Úspora nákladů na vývoj appky?** → **Těsné rozhodnutí** (close call) mezi platformami

### Data k příjmům (Sensor Tower, Q1 2014–Q1 2019)
- Průměrný příjem top 100 nejvýdělečnějších mobilních vydavatelů aplikací roste rok od roku a **App Store trvale generuje vyšší příjmy než Google Play** (např. Q1 2019: App Store 84 mil. $ vs. Google Play 51 mil. $, nárůst App Store +65 % od Q1 2018).
- Pozn.: příjmy Google Play nezahrnují Čínu.

## 3.6 Co je nativní aplikace

- **Nativní aplikace** = aplikační program vyvinutý speciálně pro použití na konkrétní platformě nebo zařízení.
- Protože jsou nativní aplikace psány pro konkrétní platformu, mohou **interagovat s funkcemi operačního systému** a dalším softwarem typicky nainstalovaným na dané platformě a využívat je.

## 3.7 Web vs. Native – výhody a nevýhody

### Výhody nativních aplikací
- Rychlejší a spolehlivější zážitek pro uživatele.
- Širší funkčnost zařízení (např. kamera, mikrofon, kompas, akcelerometr, swipe gesta).
- Vydavatelé mohou využívat **push notifikace**, upozorňovat uživatele na nový obsah nebo když je vyžadována jejich pozornost – klíčová metoda engagementu.

### Nevýhody nativních aplikací
- Nefungují na jiných typech zařízení.
- Vývoj pro více platforem může být nákladný.
- Jakákoli aktualizace nebo změna designu musí být implementována na obou platformách zvlášť – dvojnásobná práce, dvojnásobné náklady.
- Vývojáři se obvykle specializují na jednu platformu, takže může být potřeba 2 různí vývojáři/týmy.

## 3.8 Klíčové rozdíly v designu mezi iOS a Android (Design Guidelines)

### Navigace / Back tlačítko
- **iOS**: tlačítko zpět je umístěno vlevo nahoře v navigační liště (např. "< Settings").
- **Android**: navigace zpět probíhá přes systémovou navigační lištu dole na obrazovce (šipka zpět, kolečko home, čtverec – přehled aplikací).

### Navigační menu (postranní panel vs. spodní lišta)
- **Android (Material Design)**: často využívá postranní hamburger menu (Navigation Drawer) se seznamem položek (Home, Activity, Messages, Profile, Settings).
- **iOS**: často preferuje spodní tab bar s ikonami jednotlivých sekcí.

### Taby / přepínání sekcí (Segmented control)
- **Android**: podtržený/zvýrazněný text pro aktivní tab (např. "OPTION A" podtržená čára).
- **iOS**: segmentovaný ovládací prvek s ohraničenými tlačítky (Option A / Option B / Option C v rámečku).

### Akční menu (Action sheets)
- **Android**: seznam akcí bez zvláštního tlačítka Cancel, akce jsou vyjmenované v jednoduchém seznamu.
- **iOS**: Action Sheet s jasně odděleným tlačítkem **Cancel** na spodní straně, samostatně od ostatních akcí (First Action, Second Action, Third Action, More…).

### Dialogová okna / potvrzovací výzvy (Permissions)
- **Android**: dialog s nadpisem otázkou (např. "Allow this app to use your location?"), popisem a tlačítky **DISAGREE / AGREE**.
- **iOS**: kompaktnější dialog (např. "'This app' Would Like to Use Your Current Location") s tlačítky **Don't Allow / OK**.

### Tlačítka (Buttons)
- **Android (Material Design)**: "Flat & Raised Buttons" – plná barevná výplň (raised) nebo bez stínu (flat), stavy Normal/Pressed/Disabled vyjádřené barevnou intenzitou a stínem.
- **iOS**: tlačítka často s obrysem (outline) nebo plnou výplní, stejné stavy Normal/Pressed/Disabled, ale odlišný vizuální jazyk (typicky modrá barva, zaoblené rohy, bez výrazného stínování).

### Floating Action Button (FAB) vs. tlačítko v navigační liště
- **Android**: primární akce často jako "plovoucí" kulaté tlačítko (Floating Action Button) v pravém dolním rohu obrazovky.
- **iOS**: primární akce obvykle umístěna vpravo nahoře v navigační liště (např. tlačítko "+").

### Primární akce – shrnutí (Primary Action)
- **iOS**: primární akce je obvykle vpravo nahoře (upper-right).
- **Android**: primární akce "plave" vpravo dole na obrazovce – tzv. "floating action button".

### Vyhledávací pole a klávesnice
- Rozdíly ve stylu vyhledávacích polí a nativních klávesnic mezi platformami (zaoblení, barvy, umístění ikon).

### Datum/čas – pickery
- **iOS**: rotující "wheel" picker (např. výběr data/času posouváním sloupců).
- **Android**: kalendářový Date Picker s měsíčním gridem a zvýrazněným vybraným dnem, tlačítka CANCEL / OK.

### Sdílecí menu (Share sheet)
- **Android (Material Design)**: sdílecí panel vyjíždí zdola, ikony aplikací v mřížce, akce jako Share / Mark as done zobrazené jako tlačítka nebo v kontextovém menu (three-dot menu).
- **iOS 11**: sdílecí panel s ikonami kontaktů/aplikací nahoře a akcemi (Copy, Print…) dole, tlačítko **Cancel**.

### Typografie
- **iOS**: primární font je **San Francisco (SF)** – SF Pro Display se používá pro velikosti 20 a více. Škála velikostí: 34, 28, 22, 20, 17, 15, 13, 10.
- **Android**: primární font je **Roboto**. Škála velikostí: 34, 24, 20, 16, 14, 12, 10.

## 3.9 Shrnutí (Summary)

- iOS byla verze operačního systému původně vytvořeného pro počítače Mac.
- Android byl zamýšlen jako open source, takže uživatelé si mohou systém přizpůsobovat a modifikovat mnohem více než uživatelé iOS.
- Je důležité rozumět rozdílům mezi oběma platformami, aby bylo možné navrhovat design, který působí nativně na každé z nich.
- **Xamarin** a **React Native** patří mezi nejnovější frameworky pro cross-platformní vývoj mobilních aplikací (umožňují psát kód jednou a nasadit na obě platformy).

## 3.10 Doplňkové zdroje (Resources)

- **iOS Human Interface Guidelines**
- **A Tale of Two Platforms: Designing for Both Android and iOS**
- **Guidelines for Material Design** (Android)
