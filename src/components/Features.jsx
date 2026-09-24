import FeatureCard from "./FeatureCard.jsx";
import "./Features.css";

const ICON_PROPS = { width: 28, height: 28, viewBox: "0 0 28 28", fill: "none", "aria-hidden": true };

const FEATURES = [
  {
    title: "Obsługa nowoczesnych rozdzielczości",
    description:
      "Gra uruchamia się natywnie w rozdzielczościach powyżej 1920×1080, łącznie z ekranami ultra-szerokimi, bez rozciągniętego interfejsu.",
    icon: (
      <svg {...ICON_PROPS}>
        <rect x="4" y="6" width="20" height="14" rx="1" stroke="#e0b85c" strokeWidth="1.4" />
        <path d="M10 24h8M14 20v4" stroke="#e0b85c" strokeWidth="1.4" />
      </svg>
    ),
  },
  {
    title: "Stabilny tryb wieloosobowy",
    description:
      "Nowa warstwa sieciowa naprawia rozsynchronizowania gry, skraca czas oczekiwania na turę i działa poprawnie za NAT bez przekierowywania portów.",
    icon: (
      <svg {...ICON_PROPS}>
        <circle cx="14" cy="14" r="9" stroke="#e0b85c" strokeWidth="1.4" />
        <path d="M14 9v5l4 2" stroke="#e0b85c" strokeWidth="1.4" />
      </svg>
    ),
  },
  {
    title: "Poprawki logiki osadników",
    description:
      "Naprawione błędne ścieżki transportu, zapętlone kolejki w magazynach oraz nieprawidłowe przydziały pracowników do budynków.",
    icon: (
      <svg {...ICON_PROPS}>
        <path d="M6 22 6 14 14 8 22 14 22 22Z" stroke="#e0b85c" strokeWidth="1.4" />
        <path d="M6 14 14 20 22 14" stroke="#e0b85c" strokeWidth="1.2" />
      </svg>
    ),
  },
  {
    title: "Launcher z panelem ustawień",
    description:
      "Włączanie i wyłączanie poszczególnych poprawek, wybór trybu okna i zarządzanie modami odbywa się z jednego, czytelnego panelu.",
    icon: (
      <svg {...ICON_PROPS}>
        <path d="M14 4 L24 9 V19 L14 24 L4 19 V9 Z" stroke="#e0b85c" strokeWidth="1.4" />
      </svg>
    ),
  },
  {
    title: "Automatyczne aktualizacje",
    description:
      "Launcher sprawdza dostępność nowej wersji przy starcie i pobiera wyłącznie zmienione pliki, bez ponownego pobierania całej gry.",
    icon: (
      <svg {...ICON_PROPS}>
        <path d="M14 4v6M14 24v-6M4 14h6M24 14h-6" stroke="#e0b85c" strokeWidth="1.4" strokeLinecap="round" />
        <circle cx="14" cy="14" r="3" stroke="#e0b85c" strokeWidth="1.4" />
      </svg>
    ),
  },
  {
    title: "Zachowana kompatybilność zapisów",
    description:
      "Format zapisu gry pozostaje niezmieniony, więc możesz swobodnie przełączać się między oryginałem a Reforged na tej samej kampanii.",
    icon: (
      <svg {...ICON_PROPS}>
        <rect x="5" y="5" width="18" height="18" rx="2" stroke="#e0b85c" strokeWidth="1.4" />
        <path d="M9 14h10M9 18h6" stroke="#e0b85c" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section className="alt" id="funkcje">
      <div className="wrap">
        <div className="section-head">
          <h2>Co dokładnie się zmienia</h2>
          <p>Sześć obszarów, w które Reforged ingeruje najgłębiej.</p>
        </div>
        <div className="feature-list">
          {FEATURES.map((f) => (
            <FeatureCard key={f.title} icon={f.icon} title={f.title} description={f.description} />
          ))}
        </div>
      </div>
    </section>
  );
}
