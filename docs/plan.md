# GävleGuiden

## 📌 Syfte

Syftet med projektet **GävleGuiden** är att skapa en modern, informativ och visuellt tilltalande webbplats som presenterar utvalda sevärdheter i **Gävle**.  
Webbplatsen ska fungera som en digital guide för både turister och invånare genom att erbjuda lättillgänglig information, bilder och externa länkar till varje plats.

Hemsidan ska:
- Väcka intresse för Gävle som besöksmål
- Vara informativ och lättnavigerad
- Fungera på dator, surfplatta och mobil
- Vara helt statisk utan backend eller databas



## 📋 Kravspecifikation

### 🗺️ Innehåll
Webbplatsen ska innehålla informationssidor för följande platser:
- Boulognerskogen
- Gävlebocken
- Järnvägsmuseet
- Fängelsemuseet
- Gävle Konserthus
- Fjärran Höjder

För varje plats gäller:
- **1–3 bilder per plats**
- Bilder på alla platser **förutom Gävlebocken** ska vara egenfotograferade
- Bilder på Gävlebocken får hämtas online och måste följa **upphovsrätt**
- Kort, beskrivande information om platsen
- Extern länk till platsens position via **Google Maps**
- Bilder ska visas med **CSS Flexbox**



### 🎨 Design & Användarupplevelse
- Webbplatsens namn ska vara **GävleGuiden**
- Navigationsmeny (navbar) ska finnas på alla sidor och innehålla:
  - Länkar till samtliga platser
  - Om oss
  - Kontakt
- Footer ska innehålla:
  - Dynamiskt årtal som hämtas via JavaScript
- Webbplatsen ska ha **Ljust och Mörkt läge**
  - Växling sker via knapp
  - Valet sparas i `localStorage`
- Webbplatsen ska vara **responsiv** för PC, surfplatta och mobil



### 🧑‍💻 Teknik & Struktur

#### Fil- och mappstruktur
Projektet ska använda följande struktur:

```

src/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
└── platser/
├── boulognerskogen.html
├── gavlebocken.html
├── jarnvagsmuseet.html
├── fangelsemuseet.html
├── konserthuset.html
└── fjarran-hojder.html

```

- `index.html` ska ligga i `src/`
- Alla platser ska ha **egna HTML-filer** i `src/platser/`
- All JavaScript-kod ska ligga i `src/js/main.js`
- All CSS ska ligga i extern fil:  
  `src/css/style.css`
- Ingen backend eller databas ska användas
- Projektet ska publiceras på GitHub med **MIT-licens**



## 🛠️ Genomförande

### 1️⃣ Planering
- Välja platser och samla information
- Ta egna bilder
- Säkerställa upphovsrätt för externa bilder



### 2️⃣ Struktur & HTML
- Skapa `index.html` som startsida
- Skapa separata HTML-sidor för varje plats
- Implementera gemensam navbar och footer



### 3️⃣ CSS & Layout
- Implementera färgtema enligt specifikation
- Använda Flexbox för bildgallerier
- Säkerställa god kontrast och läsbarhet
- Skapa responsiv layout med media queries



### 4️⃣ JavaScript-funktionalitet
- Implementera ljust/mörkt läge i `main.js`
- Spara användarens val i `localStorage`
- Dynamiskt uppdatera årtal i footer
- Hantera interaktioner och navigering



### 5️⃣ Testning & Kvalitetssäkring
- Testa webbplatsen på olika skärmstorlekar
- Testa tema-växling
- Kontrollera Google Maps-länkar
- Validera HTML och CSS



## 🎨 Färgtema

### 🔴 Temafärger
- Primary: `#E10600`
- Hover: `#B10500`
- Subtle: `#FCE8E6`



### 🌕 Ljust läge
- Background: `#F8F9FB`
- Surface / Card: `#FFFFFF`
- Border / Divider: `#E5E7EB`

- Text Primary: `#0F172A`
- Text Secondary: `#475569`
- Text Muted: `#94A3B8`



### 🌑 Mörkt läge
- Background: `#0B0F14`
- Surface / Card: `#111827`
- Border / Divider: `#1F2933`

- Text Primary: `#E5E7EB`
- Text Secondary: `#9CA3AF`
- Text Muted: `#6B7280`



### 🟢 Statusfärger
- Success: `#22C55E`
- Warning: `#F59E0B`
- Error: `#EF4444`
- Info: `#38BDF8`
```

