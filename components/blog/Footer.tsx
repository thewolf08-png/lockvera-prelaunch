export function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container footer__inner">
        <span className="footer__text">© 2026 LockVera</span>
        <nav className="footer__links" aria-label="Rechtliches">
          <a href="/impressum">Impressum</a>
          <span aria-hidden="true">·</span>
          <a href="/datenschutz">Datenschutz</a>
        </nav>
      </div>
    </footer>
  );
}
