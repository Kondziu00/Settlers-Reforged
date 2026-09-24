import FaqItem from "./FaqItem.jsx";
import "./Faq.css";

export const FAQ_ITEMS = [
  {
    question: "Czy potrzebuję oryginalnej gry?",
    answer:
      "Tak. Settlers Reforged jest nakładką techniczną i nie zawiera plików gry — instalator wykrywa istniejącą kopię Osadników IV i nakłada na nią poprawki.",
  },
  {
    question: "Czy zepsuje to moje zapisane gry?",
    answer:
      "Nie. Format zapisu pozostaje bez zmian, więc możesz w dowolnym momencie wrócić do oryginalnej wersji gry i wczytać te same zapisy.",
  },
  {
    question: "Czy mogę grać online z kimś, kto nie ma Reforged?",
    answer:
      "Tryb wieloosobowy Reforged wymaga tej samej wersji nakładki po obu stronach — poprawki sieciowe zmieniają protokół komunikacji między klientami.",
  },
  {
    question: "Skąd wiem, że instalator jest bezpieczny?",
    answer:
      "Każde wydanie jest podpisane cyfrowo, a suma kontrolna SHA-256 publikowana obok pliku pozwala samodzielnie zweryfikować pobrany instalator przed uruchomieniem.",
  },
];

export default function Faq() {
  return (
    <div>
      {FAQ_ITEMS.map((item) => (
        <FaqItem key={item.question} {...item} />
      ))}
    </div>
  );
}
