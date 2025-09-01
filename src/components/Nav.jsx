export default function Nav() {
  return (
    <header className="site-header">
      <nav className="nav">
        <a href="#home" className="nav-home" aria-label="Home">
          <img src="/brand.png" alt="" />
        </a>

        <div className="nav-links">
          <a href="#about">about</a>
          <a href="#background">background</a>
          <a href="#portfolio">portfolio</a>
          <a href="#contact">contact</a>
        </div>
      </nav>
    </header>
  );
}