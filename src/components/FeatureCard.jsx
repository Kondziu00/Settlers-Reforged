import "./FeatureCard.css";
export default function FeatureCard({ icon, title, description }) {
  return (
    <div className="feature">
      {icon}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
