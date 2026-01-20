export default function Header() {
  return (
    <header style={styles.header}>
      <div style={styles.logo}>SHADOWFALL</div>

      <nav style={styles.nav}>
        <a>Home</a>
        <a>About</a>
        <a>Contact Us</a>
      </nav>

      <button style={styles.button}>Buy Game</button>
    </header>
  );
}

const styles = {
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 60,
  },
  logo: {
    fontWeight: 600,
    letterSpacing: "1px",
  },
  nav: {
    display: "flex",
    gap: 24,
    fontSize: 14,
  },
  button: {
    background: "#3b4eff",
    color: "#fff",
    border: "none",
    padding: "10px 18px",
    borderRadius: 6,
    cursor: "pointer",
  },
};
