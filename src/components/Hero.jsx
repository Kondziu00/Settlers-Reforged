import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchLatestRelease, formatDate } from "../api/releases.js";
import "./Hero.css";

export default function Hero() {
  const [versionLine, setVersionLine] = useState("sprawdzanie najnowszej wersji…");

  useEffect(() => {
    let cancelled = false;
    fetchLatestRelease()
      .then((rel) => {
        if (cancelled) return;
        setVersionLine(`najnowsza wersja: ${rel.version || "—"} • ${formatDate(rel.published_at)}`);
      })
      .catch(() => {
        if (!cancelled) setVersionLine("nie udało się sprawdzić najnowszej wersji");
      });
    return () => { cancelled = true; };
  }, []);

  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div>
          <div className="eyebrow-line">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <circle cx="9" cy="9" r="7" stroke="#e0b85c" strokeWidth="1.2" />
              <path d="M9 5v4l3 2" stroke="#e0b85c" strokeWidth="1.2" />
            </svg>
            Nieoficjalna nakładka dla Osadników IV
          </div>
          <h1 className="title">
            Ta sama osada.<br />Zbudowana <em>na nowo.</em>
          </h1>
          <p className="lede">
            Settlers Reforged naprawia dziesiątki błędów oryginału, dostosowuje grę do
            współczesnych ekranów i odświeża rozgrywkę sieciową — bez zmiany tego, za co
            pokochałeś Osadników IV.
          </p>
          <div className="hero-actions">
            <Link to="/pobierz" className="btn btn-primary">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M8 2v8m0 0 3-3m-3 3-3-3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2.5 12.5v1a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
              Pobierz instalator
            </Link>
            <a href="#o-projekcie" className="btn btn-ghost">Zobacz, co się zmieniło</a>
          </div>
          <div className="hero-meta">{versionLine}</div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <svg viewBox="0 0 420 340" fill="none">
            <ellipse cx="210" cy="300" rx="190" ry="24" fill="#0f1912" />
            <path d="M60 300 L60 180 L110 140 L160 180 L160 300 Z" stroke="#c89b3c" strokeWidth="1.6" />
            <path d="M60 180 L110 150 L160 180" stroke="#e0b85c" strokeWidth="1.6" />
            <path d="M180 300 L180 150 L235 105 L290 150 L290 300 Z" stroke="#c89b3c" strokeWidth="1.8" />
            <path d="M180 150 L235 112 L290 150" stroke="#e0b85c" strokeWidth="1.8" />
            <rect x="222" y="220" width="26" height="80" stroke="#c89b3c" strokeWidth="1.4" />
            <path d="M310 300 L310 210 L345 180 L345 300 Z" stroke="#c89b3c" strokeWidth="1.4" />
            <path d="M345 180 L345 100" stroke="#c89b3c" strokeWidth="1.2" />
            <path d="M345 100 L375 108 L345 120 Z" fill="#c89b3c" opacity="0.85" />
            <path d="M20 300 Q120 260 210 300 T400 300" stroke="#7a4b2a" strokeWidth="10" opacity="0.55" />
            <circle cx="60" cy="110" r="4" fill="#e0b85c" />
            <circle cx="360" cy="60" r="3" fill="#e0b85c" opacity="0.7" />
            <circle cx="30" cy="60" r="2.5" fill="#e0b85c" opacity="0.6" />
          </svg>
        </div>
      </div>
    </section>
  );
}
