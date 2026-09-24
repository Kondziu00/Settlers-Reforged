// ------------------------------------------------------------------
// KONFIGURACJA API — TO JEST JEDYNE MIEJSCE DO EDYCJI
// ------------------------------------------------------------------
// Domyślnie strona pobiera dane o najnowszym wydaniu z GitHub Releases API
// (wzorzec typowy dla projektów open source: github.com/<autor>/<repo>).
// Jeśli masz własne API, ustaw CUSTOM_API_URL — patrz src/api/releases.js
// po oczekiwany kształt odpowiedzi.

export const CONFIG = {
  // Podmień na swoje repozytorium, np. "twoj-user/settlers-reforged"
  GITHUB_REPO: "TWOJ-USER/settlers-reforged",
  // Alternatywnie: własny endpoint zwracający JSON, np. "https://api.twojadomena.pl/latest"
  CUSTOM_API_URL: null,
};
