import DownloadCard from "../components/DownloadCard.jsx";
import Requirements from "../components/Requirements.jsx";
import { Link } from "react-router-dom";
import "./DownloadPage.css";

export default function DownloadPage() {
  return (
    <>
      <section id="pobierz">
        <div className="wrap">
          <div className="section-head">
            <h2>Pobieranie</h2>
            <p>
              Instalator jest podpisany cyfrowo i pobierany bezpośrednio z serwera wydań —
              dane wersji poniżej są odświeżane automatycznie.
            </p>
          </div>
          <DownloadCard />
          <p style={{ marginTop: 24 }}>
            <Link to="/historia-zmian">Zobacz pełną historię zmian</Link>
          </p>
        </div>
      </section>
      <Requirements />
    </>
  );
}
