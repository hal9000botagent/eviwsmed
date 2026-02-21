# EviWsMed Restructure Spec

## Ziel
Umstrukturierung der Starlight-Site basierend auf WordPress-Export. Dual-Audience-Ansatz (Laien + Profis) von Anfang an in der Seitenstruktur.

## Neue Seitenstruktur

```
src/content/docs/
├── index.mdx                          # Landing Page (behalten, aufhübschen)
├── fuer-patienten/                    # LAIEN-Einstieg
│   ├── index.md                       # "Für Patienten" Übersicht
│   ├── bandscheibenvorfall.md         # Laienversion
│   ├── spinalkanalstenose.md
│   ├── rueckenschmerzen.md
│   ├── ischialgien.md
│   └── ...
├── fachbereich/                       # PROFI-Bereich (nach Pathologie)
│   ├── index.md                       # Fachbereich Übersicht
│   ├── degenerativ/
│   │   ├── index.md                   # Kategorie-Übersicht
│   │   ├── bandscheibenvorfall/
│   │   │   ├── index.md              # Übersicht BSV
│   │   │   ├── lws.md               # Lumbaler BSV (13k chars Content vorhanden!)
│   │   │   ├── hws.md               # Zervikaler BSV (noch leer)
│   │   │   └── bws.md               # Thorakaler BSV (noch leer)
│   │   ├── spinalkanalstenose/
│   │   │   ├── index.md
│   │   │   ├── lws.md
│   │   │   └── hws.md
│   │   └── ischialgien.md            # 44k chars Content vorhanden!
│   ├── verletzungen/
│   │   ├── index.md
│   │   └── wirbelkoerperfraktur.md
│   ├── tumoren/
│   │   └── index.md
│   ├── entzuendlich/
│   │   └── index.md
│   └── fehlbildungen/
│       ├── index.md
│       └── skoliose.md
├── glossar/                           # Enzyklopädie/Glossar (für beide Audiences)
│   ├── index.md
│   ├── wirbelsaeule.md
│   ├── bandscheibe.md
│   ├── spinalkanal.md
│   ├── facettengelenk.md
│   ├── nervenwurzel.md
│   └── rueckenmark.md
├── faq/
│   └── haeufige-fragen.md
├── forschung/                         # Aktuelle Forschung (aus WP "Blog")
│   └── index.md
├── videos/
│   └── uebersicht.md
├── impressum.md
├── datenschutz.md
└── hinweis-medizinische-information.md
```

## Dual-Audience Konzept

### Pro Artikel-Thema:
- **Patienten-Version** (`fuer-patienten/bandscheibenvorfall.md`): Einfache Sprache, keine Fachterminologie ohne Erklärung, Fokus auf "Was bedeutet das für mich?", Verlinkung zum Glossar
- **Fach-Version** (`fachbereich/degenerativ/bandscheibenvorfall/lws.md`): Medizinische Fachsprache, Studienreferenzen, Differentialdiagnosen, OP-Indikationen

### Cross-Linking:
- Jeder Patientenartikel verlinkt zum Fachartikel: "Für Fachpersonal → Detaillierter Fachartikel"
- Jeder Fachartikel verlinkt zur Patientenversion: "Patientengerechte Version →"
- Glossar-Links inline: Fachbegriffe verlinken automatisch zum Glossar

## Content Migration

### Vorhandener Content (wp-export/content/):
1. `bandscheibenvorfall-lws.html` → Fach-Version (HTML→Markdown, Fußnoten entfernen)
2. `ischialgien.html` → Fach-Version (HTML→Markdown, Fußnoten entfernen)  
3. `rueckenschmerzen.html` → Fach-Version (HTML→Markdown, Fußnoten entfernen)
4. `wissensbank.html` → Struktur-Referenz, nicht 1:1 übernehmen

### Content-Regeln:
- **KEINE Fußnoten/Referenzen aus dem WP-Export übernehmen** (schlechte Qualität)
- HTML zu sauberem Markdown konvertieren
- Elementor/Shortcode-Markup komplett entfernen
- Tabellen beibehalten wo sinnvoll
- Bilder: Pfade notieren, aber nicht runterladen (kommen später)

## Starlight Config

### Sidebar (astro.config.mjs):
```
sidebar: [
  { label: 'Startseite', link: '/' },
  { label: 'Für Patienten', autogenerate: { directory: 'fuer-patienten' } },
  { label: 'Fachbereich', autogenerate: { directory: 'fachbereich' } },
  { label: 'Glossar', autogenerate: { directory: 'glossar' } },
  { label: 'Aktuelle Forschung', autogenerate: { directory: 'forschung' } },
  { label: 'Häufige Fragen', autogenerate: { directory: 'faq' } },
  { label: 'Videos', autogenerate: { directory: 'videos' } },
  { label: 'Rechtliches', items: [...] },
]
```

## Was NICHT tun:
- Docy-Theme-Demo-Content übernehmen (Lorem ipsum etc.)
- Alte Fußnoten/Referenzen behalten
- WordPress-Shortcodes oder Elementor-Markup behalten
- Bilder runterladen (kommt später)

## Existierende Dateien:
- Behalte: impressum.md, datenschutz.md, hinweis-medizinische-information.md, index.mdx, custom.css
- Lösche: alte artikel/ und enzyklopaedie/ Ordner (werden durch neue Struktur ersetzt)
- Behalte Glossar-Einträge (wirbelsaeule.md etc.) — verschiebe nach glossar/
