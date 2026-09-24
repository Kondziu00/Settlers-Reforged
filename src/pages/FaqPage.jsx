import Faq from "../components/Faq.jsx";
import "./FaqPage.css";

export default function FaqPage() {
  return (
    <section id="faq">
      <div className="wrap">
        <div className="section-head">
          <h2>Najczęstsze pytania</h2>
        </div>
        <Faq />
      </div>
    </section>
  );
}
