# 't Nief Bokske — Drankenteller 🍺

Een supersnelle drankenteller en kassacalculator voor café **'t Nief Bokske** (Vosselaar).
Gebouwd als offline-werkende webapp (PWA): geen App Store, geen server, geen accounts —
alle gegevens blijven lokaal op het toestel zelf.

**Live versie:** https://nief-bokske.github.io/

## Functies

- **12 sneltoetsen** met instelbare prijs, naam en kleur, plus een vermenigvuldiger
  (1× t/m 10×) voor snelle rondjes
- **Los bedrag** via een eigen cijferklavier, met optioneel label (bv. "Snack")
  en automatische wisselgeld-berekening
- **Rekeningoverzicht** dat altijd in beeld blijft: aantallen aanpassen of
  regels verwijderen zonder te scrollen
- **Geschiedenis per dag** met logboek én een dag- & weekoverzicht
  (omzet, aantal consumpties, staafgrafiek, populairste dranken)
- **Exporteren & delen**: opgemaakt Excel-bestand (.xlsx), dagrapporten via
  WhatsApp/mail (deelmenu van de telefoon)
- **Back-up & terugzetten**: prijzen én geschiedenis in één bestand — handig
  voor een nieuwe telefoon of om helpers dezelfde instellingen te geven
- **Licht en donker thema**, in te stellen via het tandwiel rechtsboven
- **Volledig offline** na de eerste keer openen

## Installeren op je telefoon

**iPhone/iPad (Safari):**
1. Open de live-link hierboven in Safari
2. Tik op de deelknop (vierkantje met pijl omhoog)
3. Kies **"Zet op beginscherm"** en bevestig

**Android (Chrome):**
1. Open de link in Chrome
2. Tik op de drie puntjes rechtsboven
3. Kies **"App installeren"**

De app opent daarna als volwaardige app vanaf het beginscherm, ook zonder internet.

## Belangrijk: back-ups

Alle tellingen staan **enkel op het toestel zelf**. Wie de browsergegevens wist
of de app verwijdert, wist ook de geschiedenis. Maak daarom af en toe een back-up:

| Waar | Knop | Wat |
| --- | --- | --- |
| Geschiedenis | Exporteer (Excel) | Opgemaakt .xlsx met alle rekeningen en totalen |
| Geschiedenis | Deel | Dagoverzicht of alles via WhatsApp/mail |
| Instellingen (⚙) | Maak back-up | Prijzen + geschiedenis in één bestand, terug te zetten op elk toestel |

## Een update uitbrengen

1. Vervang de bestanden in deze repository door de nieuwe versie
2. Controleer dat het versienummer in `sw.js` (bovenaan, `bokske-vXX`) verhoogd is —
   anders blijven geïnstalleerde telefoons de oude versie tonen
3. Geïnstalleerde apps halen de update vanzelf op bij de volgende keer openen
   (soms is één keer sluiten en heropenen nodig)

## Techniek

Deze repository bevat de **gebouwde app**: één zelfstandige `index.html`
(React + Tailwind CSS, volledig inline gebundeld), een service worker voor
offline gebruik, het webmanifest en de app-iconen.

- Geen enkele externe dependency op runtime: geen CDN's, geen fonts van derden,
  geen trackers — de app werkt gegarandeerd offline
- De Excel-export wordt volledig in de browser opgebouwd, zonder libraries
- Opslag via `localStorage`; er verlaat nooit data het toestel, behalve wat je
  zelf exporteert of deelt

Gehost op GitHub Pages: Settings → Pages → "Deploy from a branch" →
branch `main`, map `/ (root)`.
