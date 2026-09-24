import { useEffect, useState } from "react";
import { fetchLatestRelease, formatSize, formatDate } from "../api/releases.js";
import "./DownloadCard.css";

export default function DownloadCard() {
  const [release, setRelease] = useState(null);
  const [status, setStatus] = useState("łączenie z serwerem wydań…");
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetchLatestRelease()
      .then((rel) => {
        if (cancelled) return;
        setRelease(rel);
        setStatus(rel.installer_url ? "gotowe do pobrania" : "brak pliku instalatora w najnowszym wydaniu");
      })
      .catch(() => {
        if (cancelled) return;
        setError(true);
        setStatus("nie udało się pobrać danych z API — skonfiguruj src/config.js");
      });
    return () => { cancelled = true; };
  }, []);

  return (
    <>
      <div className="download-card">
        <div>
          <h3>Settlers Reforged</h3>
          <div className="dl-meta">
            <div><dt>wersja:</dt> <dd style={{ margin: 0 }}>{release?.version ?? "—"}</dd></div>
            <div><dt>rozmiar:</dt> <dd style={{ margin: 0 }}>{formatSize(release?.size_bytes)}</dd></div>
            <div><dt>wydano:</dt> <dd style={{ margin: 0 }}>{formatDate(release?.published_at)}</dd></div>
          </div>
          <div className="dl-meta">
            <div><dt>SHA-256:</dt> <dd style={{ margin: 0 }}>{release?.sha256 ?? "zobacz plik z sumami kontrolnymi"}</dd></div>
          </div>
          <p className="dl-note">
            Wymaga zainstalowanej, oryginalnej kopii Osadników IV (Historical Edition lub
            wersja pudełkowa). Windows 10/11, 64-bit.
          </p>
        </div>
        <div className="dl-actions">
          <a
            href={release?.installer_url || "#"}
            className="btn btn-primary"
            aria-describedby="dl-status"
            aria-disabled={!release?.installer_url}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M8 2v8m0 0 3-3m-3 3-3-3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M2.5 12.5v1a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
            Pobierz dla Windows
          </a>
          <div className="dl-status" id="dl-status">{status}</div>
        </div>
      </div>

      <div className="other-downloads">
        <a href={release?.checksum_url || "#"}>Plik z sumami kontrolnymi</a>
        <a href={release?.source_url || "#"}>Kod źródłowy (.zip)</a>
      </div>

      {error && (
        <p className="dl-note" style={{ marginTop: 12, color: "var(--stone)" }}>
          Sprawdź <code>src/config.js</code> — trzeba tam podać właściwe repozytorium GitHub
          albo własny adres API.
        </p>
      )}
    </>
  );
}
