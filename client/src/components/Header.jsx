export default function Header() {
  return (
    <header className="header">
      <div className="container header-content">
        <a className="brand" href="/">
          <img src="/images/logo.png" alt="Arkelys Créations" />
        </a>
        <a className="brand" href="/">
          Arkelys Créations
        </a>

        <nav className="nav">
          <a href="#creations">Créations</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}