# LockVera Blog MDX-Schablone

Neue Artikel werden als MDX-Dateien unter `content/blog/` gepflegt. `data/posts.ts` ist nicht mehr die Content-Quelle, sondern definiert nur die Typen, die Listing, Cards und Detailseiten weiterhin verwenden.

## Speicherort

- Datei: `content/blog/<slug>.mdx`
- Der Dateiname ohne `.mdx` muss exakt dem Frontmatter-Feld `slug` entsprechen.
- Nur Dateien mit `published: true` erscheinen im Listing und erzeugen Detailseiten.
- Kopiervorlage: `content/blog/_template.mdx`
- Dateien, die mit `_` beginnen, werden vom Content-System ignoriert und nicht als Artikel eingelesen.

## Pflicht-Frontmatter

```md
---
title: "Audit-Spuren, die vor Gericht standhalten"
slug: "audit-spuren-die-vor-gericht-standhalten"
topicSlug: "compliance"
teaser: "Warum belastbare Audit-Spuren mehr sind als technische Logs."
publishedAt: "2026-05-08"
readingTime: "9 Min. Lesezeit"
coverType: "trail"
ctaText: "Auditierbare Dokumentenprozesse praktisch umsetzen → Demo anfragen"
published: true
---
```

## Erlaubte Topics

- `compliance`
- `sicherheit`
- `architektur`
- `guides`
- `integrationen`
- `praxisberichte`
- `workflows`

`alle` ist nur der Reset-/Übersichtsfilter der UI und darf nie als Artikel-Topic verwendet werden.

## Erlaubte Covertypen

- `trail`
- `grid`
- `bars`
- `shield`
- `stack`
- `connect`
- `quote`
- `wash`

Das Card-Cover und das Inline-Visual nutzen dieselbe `CoverGraphic`.

## Artikelbody

Der eigentliche Artikel wird als normaler MDX-Body geschrieben. Nutze klare Zwischenüberschriften, Absätze und Listen. Das bestehende Artikeltemplate rendert Topic, Titel, Teaser, Datum, Lesezeit, Autorblock und CTA automatisch aus dem Frontmatter.

Das Inline-Bild kann gezielt im Text platziert werden:

```md
## Was Prüfer tatsächlich sehen müssen

Einleitender Absatz.

<ArticleVisual />

Weiterführender Absatz.
```

## Validierung

Der Build bricht bewusst ab, wenn Pflichtfelder fehlen, `topicSlug` ungültig ist, `topicSlug: alle` verwendet wird, `coverType` ungültig ist oder der Slug nicht zum Dateinamen passt.


## Neuer Artikel

1. `content/blog/_template.mdx` kopieren.
2. Kopie in `content/blog/<neuer-slug>.mdx` umbenennen.
3. Frontmatter ausfüllen; `slug` muss exakt dem Dateinamen entsprechen.
4. Artikeltext schreiben und `<ArticleVisual />` an einer passenden Stelle platzieren.
5. Erst zum Veröffentlichen `published: true` setzen.
