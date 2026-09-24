import ChangelogEntry from "./ChangelogEntry.jsx";
import "./Changelog.css";

export const RELEASES = [
  {
    version: "v2.3.0",
    date: "wrzesień 2026",
    title: "Odświeżony launcher",
    items: [
      "Nowy panel ustawień z podglądem zmian na żywo",
      "Naprawiono zawieszanie się gry przy przełączaniu na pulpit",
      "Dodano obsługę monitorów o proporcjach 21:9",
    ],
  },
  {
    version: "v2.2.1",
    date: "czerwiec 2026",
    title: "Poprawki sieciowe",
    items: [
      "Naprawiono rozsynchronizowanie w grach powyżej 4 graczy",
      "Skrócono czas oczekiwania na start rozgrywki sieciowej",
    ],
  },
  {
    version: "v2.1.0",
    date: "marzec 2026",
    title: "Poprawki logiki osadników",
    items: [
      "Naprawiono zapętlanie się tragarzy przy pełnych magazynach",
      "Poprawiono przydział górników do nieaktywnych kopalni",
    ],
  },
  {
    version: "v2.0.0",
    date: "listopad 2025",
    title: "Pierwsze wydanie Reforged",
    items: [
      "Instalator jednym plikiem, bez ręcznej konfiguracji",
      "Wsparcie dla rozdzielczości powyżej 1080p",
    ],
  },
];

export default function Changelog({ limit }) {
  const releases = limit ? RELEASES.slice(0, limit) : RELEASES;
  return (
    <div className="changelog">
      {releases.map((r) => (
        <ChangelogEntry key={r.version} {...r} />
      ))}
    </div>
  );
}
