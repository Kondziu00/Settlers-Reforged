# Settlers Reforged

## Uruchomienie

```bash
npm install
npm run dev
```

## Struktura

```
src/
  api/releases.js       — pobieranie danych o wydaniu (GitHub Releases API lub własne API)
  config.js              — JEDYNE miejsce do podpięcia własnego API
  components/            — Header, Footer, Hero, About, Features (+FeatureCard),
                            DownloadCard, Requirements, Changelog (+ChangelogEntry), Faq (+FaqItem)
  pages/                 — Home ("/"), DownloadPage ("/pobierz"),
                            ChangelogPage ("/historia-zmian"), FaqPage ("/faq")
  styles/index.css        — tylko wspólne tokeny: kolory, typografia, reset,
                            siatka sekcji (.wrap, section, .section-head) i przycisk .btn
```

## Style CSS

Każdy komponent i każda podstrona ma własny plik `.css` obok siebie
(np. `Header.jsx` + `Header.css`, `DownloadPage.jsx` + `DownloadPage.css`).
`styles/index.css` zawiera tylko to, co naprawdę jest wspólne dla całej
strony: zmienne kolorów, typografię, reset i przycisk `.btn` (używany
zarówno w `Hero`, jak i w `DownloadCard`).

## Podpięcie prawdziwego API

Edytuj `src/config.js`:

- jeśli instalator publikujesz jako GitHub Release, ustaw `GITHUB_REPO`,
  np. `"twoj-user/settlers-reforged"`,
- jeśli masz własne API, ustaw `CUSTOM_API_URL` na adres endpointu zwracającego JSON
  w kształcie opisanym w `src/api/releases.js`.

## Budowanie do produkcji

```bash
npm run build
```

Pliki gotowe do wdrożenia trafią do katalogu `dist/`.
