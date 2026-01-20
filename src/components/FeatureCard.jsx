export default function FeatureCard({ icon, title }) {
  return (
    <div style={styles.card}>
      <div style={styles.icon}>{icon}</div>
      <p style={styles.title}>{title}</p>
      <div style={styles.arrow}>→</div>
    </div>
  );
}

const styles = {
  card: {
    width: 180,
    height: 220,
    border: "1.5px solid #3b4eff",
    borderRadius: 14,
    padding: 20,
    position: "relative",
    cursor: "pointer",
  },
  icon: {
    fontSize: 26,
    marginBottom: 20,
  },
  title: {
    fontSize: 14,
    fontWeight: 500,
    lineHeight: 1.4,
  },
  arrow: {
    position: "absolute",
    bottom: 16,
    right: 16,
    width: 28,
    height: 28,
    borderRadius: "50%",
    background: "#3b4eff",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};
