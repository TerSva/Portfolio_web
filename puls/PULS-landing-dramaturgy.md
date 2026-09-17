# PULS Landing — Dramaturgický scénář (FINÁLNÍ)

> Source of truth pro integraci do `index.html`.
> Všechna rozhodnutí schválena. Připraveno k handoff Codexu.
> Závisí na: dokončení fluid refactor `utulek-lab.html`.

---

## Vrstvy a stavy

### 1. Logo (logo-lab)

5 stavů: `klid` (loaded, muted), `probuzeni`, `puls`, `thread`, `nav`

### 2. Nit (thread-lab v2)

7 stavů: `zazeh`, `klid`, `zhusteni`, `flare`, `ping-flash`, `utulek`, `doutnak`
**Zlatá je integrovaná do každého stavu** přes `--thread-gold-opacity` (0.06–0.30).

### 3. Útulek smoke (utulek-lab, fluid refactor in progress)

3 stavy: `off`, `active`, `fading`

### 4. Mlha + halo (nav)

**Mlha:** statická zlatá aura kolem Kontakt segmentu, opacity 0.12
**Halo:** Quiet variant pulse, peak opacity 0.20, cyklus 4–5s, continuous

---

## AKT 1 — Hero (Zážeh)

### Logo entry: probuzení místo wow

Logo je při loadu **tlumeně přítomné**, ne neviditelné.

| Stav loga | Opacity | Aura | Halo | Emitter | Nit |
|---|---|---|---|---|---|
| Initial (loaded) | 0.50 | none | off | off | none |
| Zážeh (puls) | 1.0 | active | active | active | growing |
| Klid (thread) | 1.0 | gentle | off | dim | klid |

*Pozn.: probuzení vstupní animace se finalizuje až po vytvoření hloubky stránky (parallax background depth).*

### Časová osa Zážehu

| t (ms) | Logo | Nit |
|---|---|---|
| 0 | Initial (0.5 opacity, muted) | none |
| 600 | → `puls` (rampup) | `zazeh` (scaleY 0.04 start) |
| 600–1000 | aura otevírá, halo pulsuje | nit roste do 60% |
| 1000–2400 | core pulsuje, emitter svítí | nit 100%, gold peak 0.40 |
| 2400–3000 | `puls` → `thread` | `zazeh` → `klid` |
| 3000+ | `thread` (dýchá) | `klid` (12 vláken, gold 0.08) |

**Klid mezi loadem a Zážehem:** 600 ms.
**SessionStorage flag:** Zážeh 1× per session.
**Reduced motion:** skip rovnou do `thread` + `klid`.

```js
document.addEventListener("DOMContentLoaded", () => {
  if (!sessionStorage.getItem("puls-zazeh-played")) {
    setTimeout(() => {
      logo.setState("puls");
      thread.setState("zazeh");
      setTimeout(() => logo.setState("thread"), 2400);
      sessionStorage.setItem("puls-zazeh-played", "1");
    }, 600);
  } else {
    logo.setState("thread");
    thread.setState("klid");
  }
});
```

---

## AKT 2 — Usazení (logo → nav)

Trigger: scrollY > 0.

### Sekvence

1. Logo začne let z hero do nav target (vlevo nahoře, brand block).
2. **Současně:** horní část nitě (~prvních 200–300px) se rozšíří do horizontální zlaté mlhy pod navem.
3. **Trvání:** 2200ms, easing `cubic-bezier(0.45, 0, 0.2, 1)`.
4. **t=~1150ms:** Nav `is-settled`, logo na cílové pozici.
5. **t=2200ms:** Cloned logo zmizí.

### Mlha — okamžitý přesun doprava

Horizontální mlha **netrvá** přes celý nav. Po ~500ms po Usazení **se ihned přesouvá doprava** k Kontakt segmentu.

| Fáze | Mlha tvar | Pozice |
|---|---|---|
| t=0 (start Usazení) | horizontální pás | celý horní okraj |
| t=~2700ms | pás se stahuje | pravá strana |
| t=~3500ms | bodový anchor | Kontakt segment, opacity 0.12 |

### Tři kotvící body v navu

- **Logo vlevo** = identita
- **Nit ve středu** = proces
- **Mlha vpravo** = energie a akce

Žádné dva nejsou vizuálně přímo spojené. Mozek si je spojí přes scénu.

---

## AKT 3 — Hero ↔ Headline (sticky parallax)

### Princip

Hero zůstává **sticky**, Headline ji **shora pohlcuje**.

```css
#hero {
  position: sticky;
  top: 0;
  height: 100vh;
  z-index: 1;
}

#headline {
  position: relative;
  z-index: 2;
  background: var(--bg-solid);
}
```

### Vrstvy během scrollu

| Vrstva | Chování |
|---|---|
| Hero content | Sticky drží 100vh nahoře |
| Headline | Vystupuje zespodu, překrývá hero |
| Logo (po Usazení) | `position: fixed` v navu |
| Nit | `position: fixed`, středová osa |
| Mlha (po přesunu) | `position: fixed` v navu vpravo |

**Reduced motion:** sticky off, normální scroll.

---

## AKT 4 — Cesta dolů (mapování sekce → stav nitě)

Trigger: IntersectionObserver, threshold 0.3–0.7.

| Sekce | Stav nitě |
|---|---|
| `#hero` | `klid` |
| `#headline` | `klid` |
| `#problem` | `klid` (tlumený) |
| `#breath-1` | `klid` |
| `#reseni` | `zhusteni` |
| `#prechod` | `flare` |
| `#breath-2` | `flare` |
| `#selektor` | `flare` + `ping-flash` na click |
| `#certifikat` | `zhusteni` |
| `#planner` | `klid` |
| `#nemluvis` | `zhusteni` |
| `#tereza-quote` | **`utulek`** (vrchol, gold 0.30) |
| `#breath-3` | `klid` |
| `#garance` | `klid` |
| `#sef` | `klid` |
| `#finale` | `doutnak` |
| `#footer` | `doutnak` |

### Pravidla

- Plynulé interpolace přes CSS variables (0.4s ease).
- `ping-flash` = událost 450ms, vrací se do `flare`.
- `utulek` = stav + side effect (aktivuje smoke).

### IntersectionObserver

```js
const sectionStateMap = {
  "hero": "klid", "headline": "klid", "problem": "klid",
  "breath-1": "klid", "reseni": "zhusteni", "prechod": "flare",
  "breath-2": "flare", "selektor": "flare",
  "certifikat": "zhusteni", "planner": "klid",
  "nemluvis": "zhusteni", "tereza-quote": "utulek",
  "breath-3": "klid", "garance": "klid", "sef": "klid",
  "finale": "doutnak", "footer": "doutnak"
};

const observer = new IntersectionObserver((entries) => {
  const active = entries
    .filter(e => e.isIntersecting)
    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
  if (!active) return;
  const targetState = sectionStateMap[active.target.id];
  if (targetState && thread.currentState !== targetState) {
    thread.setState(targetState);
    if (targetState === "utulek") utulek.activate();
    else if (utulek.isActive) utulek.deactivate();
  }
}, { threshold: [0.3, 0.5, 0.7] });
```

---

## AKT 5 — Útulek (citát Terezy)

Trigger: `#tereza-quote` ve viewportu (threshold 0.5).

1. **Nit:** `utulek` (10 vláken, blur 180px, gold 0.30, dech 4.6s)
2. **Smoke field:** active (800px, fluid sim, 2 splaty / 3.5s, violet 50% / cyan 25% / gold 25%, boundary collision)
3. **Citát:** transparentní pozadí, žádný backdrop-filter, jen `text-shadow: 0 0 12px rgba(0,0,0,0.8)`

Při opuštění: smoke fade out 1.5s.

---

## AKT 6 — Doutnák (finále)

Trigger: `#finale` (threshold 0.3).

1. **Nit:** `doutnak` (6 vláken, dashed 10/20, gold 0.06, dech 8s)
2. **Logo v navu:** ztiší aura
3. **Mlha kolem Kontakt:** zůstává trvale
4. **Footer:** doznívání

**Doutnák ≠ konec.** Proces pokračuje za stránkou.

---

## Navigace (finální)

### Struktura

```text
[Logo] PULS                  ┌──────────────────────────────────────────┐
                             │  📍 Kde začít  ⊜ Přihlásit  ✉ Kontakt   │
                             └──────────────────────────────────────────┘
                                                          ↑
                                                   active style
                                                   + halo Quiet
                                                   + zlatá mlha
```

### Levá (brand block)

- **Logo** `puls1sekl.svg`, ~38px desktop / ~32px mobile
- **Text** `PULS` (Montserrat 500)
- Žádný kicker, žádný titulek
- Cíl Usazení z hero

### Pravá (pill capsule)

Inspirováno dashboard navem (Planner / Studium / Meets / Profil / Odhlásit).

| Položka | Ikona (lucide-react) | Akce | Stav |
|---|---|---|---|
| Kde začít | Compass | anchor → `#selektor` | muted, hover zesílí |
| Přihlásit | LogIn | link → planner app | muted, hover zesílí |
| Kontakt | Mail | mailto / `#finale` | **active** + halo + mlha |

### Halo + mlha specs

**Statická mlha:**
- Kolem Kontakt segmentu
- Opacity 0.12
- Žádná animace

**Halo Quiet:**
- Cyklus 4–5s ease-in-out
- Peak opacity 0.20
- Continuous
- Hover: peak → 0.45, cyklus → 2.5s

### Mobile (≤760px)

Pill kolaps na **hamburger menu**. Full-screen overlay s velkými touch targets. Stejné pořadí. Kontakt zachovává halo + mlhu.

Brand block: jen logo + "PULS" (compact).

---

## Reduced motion sumář

| Vrstva | Vypnuto | Zůstává |
|---|---|---|
| Logo Zážeh | rovnou `thread` | logo viditelné |
| Logo Usazení | skip let, jen objevení v navu | nav viditelný |
| Hero sticky parallax | off, normální scroll | layout funguje |
| Nit dech | bez `auraBreath` | stavy se mění (instant) |
| Útulek smoke | WebGL skip | static gold halo |
| Ping flash | skip | rovnou `flare` |
| Nav halo pulse | off | statická mlha zůstává |
| Mlha přesun | skip let | mlha rovnou u Kontaktu |

---

## Závislosti pro integraci

1. **Fluid refactor `utulek-lab.html`** — čeká na Codex
2. **Logo lab API** — `logo.setState(state)`
3. **Thread lab v2 API** — `thread.setState(state)` (PulsThread class)
4. **Útulek API** — `utulek.activate()`, `utulek.deactivate()`, `utulek.isActive`
5. **Pill capsule komponenta** — nová podle dashboard patternu
6. **Hamburger menu komponenta** — pro mobile

---

## Open / pozdější

- **Probuzení vstupní animace** — finalizovat po vytvoření hloubky stránky
- **Scroll up návrat na hero** — logo zůstává v navu (Usazení one-way)
- **Selektor reveal karta** — zůstává `flare`
- **Mobile state map** — případně zjednodušit (zhusteni splynout s klidem)
