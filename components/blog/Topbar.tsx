export function Topbar() {
  return (
    <header className="topbar" role="banner">
      <div className="container topbar__inner">
        <a className="topbar__brand" href="/" aria-label="LockVera Startseite">
          <img
            className="topbar__brand-mark"
            src="/logo.png"
            width="20"
            height="20"
            alt="LockVera"
          />
          <span className="topbar__brand-name">LockVera</span>
        </a>
        <a className="topbar__return" href="/">
          ← Zurück zur Startseite
        </a>
      </div>
    </header>
  );
}
