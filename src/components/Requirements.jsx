import "./Requirements.css";
const ROWS = [
  ["System", "Windows 10 lub 11, 64-bit"],
  ["Gra bazowa", "Osadnicy IV: Historical Edition lub wersja pudełkowa z płytą CD/DVD"],
  ["Procesor", "Dowolny x64 z ostatnich 10 lat"],
  ["Pamięć RAM", "2 GB lub więcej"],
  ["Miejsce na dysku", "500 MB wolnego miejsca na instalator i pliki launchera"],
  ["Sieć", "Połączenie internetowe wymagane do aktywacji i gry wieloosobowej"],
];

export default function Requirements() {
  return (
    <section className="alt" id="wymagania">
      <div className="wrap">
        <div className="section-head">
          <h2>Wymagania systemowe</h2>
        </div>
        <table className="req">
          <tbody>
            {ROWS.map(([label, value]) => (
              <tr key={label}>
                <th>{label}</th>
                <td>{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
