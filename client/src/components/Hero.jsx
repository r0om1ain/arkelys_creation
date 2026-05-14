export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-content">
          <p className="section-kicker">Fleurs éternelles faites main</p>

          <h1>Offrez des fleurs qui durent dans le temps</h1>

          <p>
            Des créations florales artisanales, douces et personnalisables,
            imaginées pour célébrer les moments précieux.
          </p>

          <div className="hero-actions">
            <a className="button" href="#creations">
              Découvrir les créations
            </a>
            <a className="button secondary" href="#contact">
              Demander une création
            </a>
          </div>
        </div>

        <div className="hero-image-card">
          <img src="/images/sample.jpg" alt="Création florale éternelle" />
        </div>
      </div>
    </section>
  );
}