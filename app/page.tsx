import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="grain" />

      <main className="hero">
        <div className="hero-content">
          <div className="logo-container">
            <img src="/logo.png" alt="LockVera Logo" className="logo-symbol" />
            <div className="logo-glow" />
          </div>

          <h1 className="wordmark">LockVera</h1>

          <div className="divider" />

          <p className="claim">Power needs structure — we provide both.</p>

          <div className="status-badge">
            <span className="status-dot" />
            <span className="status-text">Coming 2026</span>
          </div>
        </div>
      </main>

      <footer className="footer">
        <span className="footer-text">© 2026 LockVera</span>
        <span className="footer-divider">·</span>
        <Link href="/impressum" className="footer-link">
          Impressum
        </Link>
        <span className="footer-divider">·</span>
        <Link href="/datenschutz" className="footer-link">
          Datenschutz
        </Link>
      </footer>
    </>
  );
}
