import "./ChangelogEntry.css";
export default function ChangelogEntry({ version, date, title, items }) {
  return (
    <div className="change-entry">
      <span className="change-version">{version}</span>
      <span className="change-date">{date}</span>
      <h4>{title}</h4>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
