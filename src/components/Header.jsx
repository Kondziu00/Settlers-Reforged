import { Link, NavLink } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header className="site">
      <div className="nav">
        <Link to="/" className="brand">
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden="true">
            <path d="M13 2 L23 8 V18 L13 24 L3 18 V8 Z" stroke="#c89b3c" strokeWidth="1.4" />
            <path d="M13 2 V24 M3 8 L23 18 M23 8 L3 18" stroke="#c89b3c" strokeWidth="0.8" opacity="0.6" />
          </svg>
          Settlers Reforged
        </Link>
        <nav className="navlinks">
          <NavLink to="/" end>Strona główna</NavLink>
          <NavLink to="/pobierz">Pobierz</NavLink>
          <NavLink to="/historia-zmian">Historia zmian</NavLink>
          <NavLink to="/faq">FAQ</NavLink>
        </nav>
      </div>
    </header>
  );
}
