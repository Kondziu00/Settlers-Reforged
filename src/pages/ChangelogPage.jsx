import Changelog from "../components/Changelog.jsx";
import "./ChangelogPage.css";

export default function ChangelogPage() {
  return (
    <section id="zmiany">
      <div className="wrap">
        <div className="section-head">
          <h2>Historia zmian</h2>
          <p>Pełny dziennik wydań Settlers Reforged, od najnowszej wersji.</p>
        </div>
        <Changelog />
      </div>
    </section>
  );
}
