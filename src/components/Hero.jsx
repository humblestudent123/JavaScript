import FeatureCard from "./FeatureCard";

export default function Hero() {
  return (
    <section style={styles.hero}>
      <div>
        <h1 style={styles.title}>
          Unleash your survival instincts
          <br /> in a futuristic apocalypse.
        </h1>

        <p style={styles.text}>
          Engage in heart-pounding combat across 
        </p>
        
        <p style={styles.text}>
        ruined cityscapes and war-torn landscapes.
        </p>


        <div style={styles.cards}>
          <FeatureCard title="Gameplay and Features" icon="🎮" />
          <FeatureCard title="Items and Collectibles" icon="⚔️" />
          <FeatureCard title="Heroes and Game Locations" icon="🛡️" />
        </div>
      </div>
    </section>
  );
}

const styles = {
  hero: {
    display: "flex",
  },
  title: {
    fontSize: 48,
    fontWeight: 600,
    marginBottom: 20,
  },
  text: {
    fontSize: 15,
    fontWeight: 400,
    maxWidth: 420,
    marginBottom: 40,
    lineHeight: 1.6,
  },
  cards: {
    display: "flex",
    gap: 24,
  },
};
