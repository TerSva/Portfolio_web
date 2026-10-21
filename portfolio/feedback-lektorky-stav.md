# Feedback lektorky: provedené změny a otevřené body

Aktualizováno: 21. října 2026
Větev: `uxportfolio`

## Účel dokumentu

Tento dokument převádí zpětnou vazbu lektorky do průběžného seznamu rozhodnutí a úkolů. Rozlišuje mezi tím, co už je hotové, co je pouze provizorně vyřešené a co ještě potřebuje návrh nebo samostatné rozhodnutí.

Zdrojová zpětná vazba je uložená mimo repozitář v souboru `Snezanafeedback.txt`.

## Legenda

- `[x]` Hotovo a nahráno na větev `uxportfolio`.
- `[~]` Provizorní nebo částečné řešení.
- `[ ]` Otevřený bod.

## 1. About a CV

- [x] Sloučit obsah About a CV do jedné stránky About a odstranit samostatné CV z hlavní navigace.
- [x] Zachovat možnost stáhnout CV jako PDF přímo z horní části About.
- [x] Přidat osobnější představení: cesta od ilustrace k digitálnímu designu, vliv klasické kresby a zkušeností z účetnictví.
- [x] Doplnit osobní rovinu bez nadbytečně soukromých detailů: podzimní inspirace, knihy, káva, videohry, hudba a tvoření s dcerami.
- [x] Přesunout nástroje, procesy, metody a relevantní zkušenosti do About tak, aby nebyly rozdělené mezi dvě stránky.
- [x] Připravit About v češtině, angličtině a němčině.
- [x] Používat jednotné pojmenování `Art portfolio` a vést na něj samostatným CTA, ne odkazem schovaným uvnitř odstavce.
- [~] About nyní propojuje výtvarný a analytický základ s UX/UI. Při dalším obsahovém auditu ověřit, zda některé části stále neopakují stejné sdělení jinými slovy.
- [ ] Projít pomlčky a další nápadné AI jazykové návyky v celém portfoliu, nejen na About. V češtině současně hlídat předložky a spojky na konci řádků.

Související commit: `b6d2533 Merge About and CV into localized profile`.

## 2. Contact

- [x] Zachovat kontaktní formulář; lektorka ho hodnotila jako snazší cestu než nutit návštěvníka otevírat e-mailovou aplikaci.
- [x] Udělat z formuláře hlavní obsah stránky a odstranit konkurenční úvodní texty a druhý nadpis.
- [x] Přestavět formulář na jeden souvislý tok: téma, zpráva, jméno, e-mail, odeslání.
- [x] Na desktopu využít šířku stránky, na mobilu zachovat jeden svislý tok.
- [x] Přesunout přímý e-mail a sociální odkazy až pod formulář jako alternativní cestu.
- [x] Zkrátit a zpřirozenit microcopy ve všech třech jazykových verzích.
- [x] Zachovat stávající napojení na Formspree a původní názvy odesílaných polí.
- [ ] Před ostrým rozesláním portfolia provést jeden reálný test odeslání formuláře na produkční URL ve všech jazykových verzích a ověřit success/error stav.

Související commit: `2a4c55f Refine localized contact flow`.

## 3. Work a náhledy projektů

- [~] Náhledy používají jednotnější mockupový princip, ale původní připomínky k jejich velikosti a pozadím nejsou uzavřené.
- [ ] Zvětšit hlavní zařízení tam, kde je samotné rozhraní příliš malé vůči dekorativnímu pozadí.
- [ ] U projektů zobrazovaných jako web ověřit, zda mockup působí jako notebook, ne jako tablet.
- [ ] Sjednotit atmosféru pozadí napříč kartami. Lidé a výrazné scény nesmějí soutěžit s prezentovaným rozhraním.
- [ ] Odstranit dojem, že některá karta dostala pouze prázdné pozadí kvůli nedostatku vizuálního konceptu.
- [ ] Rozhodnout o rozpracovaných alternativách coverů pro PULS, Spotify a Venek. Náhledové PNG soubory jsou zatím záměrně mimo Git.

## 4. Vztah UX/UI a Art portfolia

- [x] Oddělit vstup do Art portfolia od UX/UI projektových karet jako samostatnou sekci.
- [x] Použít světlé žluté pozadí odvozené z existující značky, aby bylo zřejmé, že začíná jiný typ práce.
- [x] Zachovat tmavou vnitřní kartu a jasný nadpis/CTA do Art portfolia.
- [~] Žlutý Art bridge je rychlé přechodné řešení. Pomáhá orientaci, ale stále vede do druhého, samostatného portfolia.
- [ ] Prověřit doporučení lektorky sloučit UX/UI a Art portfolio do jednoho webu. Art práce by mohla mít vlastní přímou URL/sekci, kterou lze posílat samostatně, bez přepínání mezi dvěma různými weby.
- [ ] Pokud portfolia zůstanou dočasně oddělená, vyřešit plynulý návrat na odpovídající stránku a sjednotit názvosloví, navigaci a hlavní CTA v obou směrech.
- [ ] Doplnit k jednotlivým art pracím kontext nebo krátký příběh; samotná galerie čtyř obrázků podle lektorky nenaplňuje očekávání vyvolané samostatným portfoliem.
- [ ] V Art portfoliu přesunout horizontální navigační indikátory dolů. Tečky na boku signalizují svislý, ne vodorovný pohyb.

Související commit: `50ef9ff Distinguish art portfolio section`.

## 5. Navigace a konzistence

- [x] Sjednotit hlavní pořadí na `Work · About · Contact` a odstranit CV jako samostatnou položku.
- [x] Zachovat dvouřádkovou mobilní hlavičku, ale zabránit tomu, aby se položky rozletěly k okrajům.
- [x] Oddělit délku tyrkysové linky od rozestupů navigace a nechat mezery plynule růst podle šířky telefonu.
- [ ] Při případném sloučení portfolií navrhnout jednu společnou globální navigaci a přímý vstup do Art sekce.

Související commit: `8022dce Refine mobile navigation spacing`.

## 6. Témata k pozdějšímu prozkoumání

- [ ] Logo: lektorka vnímala jméno v hlavičce jako prozatímní logo. Prověřit, zda vlastní značka potřebuje samostatný symbol, nebo zda má wordmark zůstat vědomým finálním řešením.
- [ ] Signature efekt: zvážit přenesení jednoho charakteristického efektu z Art portfolia do UX/UI portfolia. Nemá jít o kopírování celé atmosféry, ale o jeden rozpoznatelný spojovací prvek mezi systémem a výtvarným přesahem.
- [ ] Nabídka/služby: prověřit, zda část obsahu z Art portfolia popisující služby patří do About. Přidat ji jen tehdy, pokud podpoří hledanou UX/UI roli a nebude působit jako nesouvisející katalog činností.
- [ ] Samostatně ověřit celé portfolio z pohledu recruitera: první dojem, rychlé pochopení role, skenovatelnost projektů, cesta k About a jednoduchost kontaktu.

## Doporučené pořadí další práce

1. Dokončit audit náhledů projektů na Work.
2. Otestovat produkční kontaktní formulář.
3. Projít jazyk, pomlčky a problematická zalomení ve všech třech jazycích.
4. Rozhodnout, zda se portfolia sloučí do jednoho webu, a teprve potom řešit společnou navigaci a obsah Art sekce.
5. Až nakonec zkoumat logo a případný společný signature efekt.
