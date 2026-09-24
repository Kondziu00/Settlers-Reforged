import "./About.css";
export default function About() {
  return (
    <section id="o-projekcie">
      <div className="wrap about-grid">
        <div>
          <div className="section-head">
            <h2>Jeden instalator, cała reszta zrobiona za ciebie</h2>
          </div>
          <p>
            Settlers Reforged instaluje się na istniejącej kopii Osadników IV i podmienia
            silnik renderowania, sieciowy oraz zestaw poprawek społeczności na jedną, spójną
            paczkę. Żadnego ręcznego kopiowania plików ani grzebania w rejestrze.
          </p>
          <p>
            Projekt jest rozwijany w pełni jawnie — kod źródłowy, zgłoszenia błędów i plany
            kolejnych wersji są dostępne publicznie, a każdy wydany instalator jest budowany
            automatycznie z tego samego repozytorium.
          </p>
          <div className="stat-row">
            <div className="stat"><b>60+</b><span>naprawionych błędów</span></div>
            <div className="stat"><b>4K</b><span>wsparcie dla ekranów</span></div>
            <div className="stat"><b>100%</b><span>kompatybilność zapisów</span></div>
          </div>
        </div>
        <div>
          <div className="section-head">
            <h2 style={{ fontSize: "1.3rem" }}>Dla kogo jest ten projekt</h2>
          </div>
          <p>
            Dla graczy, którzy wracają do Osadników IV po latach i chcą, żeby gra po prostu
            działała na dzisiejszym sprzęcie — oraz dla tych, którzy nigdy nie przestali grać
            i chcą stabilnego trybu wieloosobowego.
          </p>
          <p>
            Reforged nie zmienia balansu rozgrywki ani kampanii — to warstwa techniczna, nie
            remake. Twoje zapisane gry i ulubione mapy działają bez zmian.
          </p>
        </div>
      </div>
    </section>
  );
}
