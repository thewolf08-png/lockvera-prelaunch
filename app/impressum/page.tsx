import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum – LockVera",
  robots: { index: false, follow: false },
};

export default function Page() {
  return (
    <>
      <div className="grain" />
      <main className="legal-page legal-page--impressum">
        <a href="/" className="legal-back">
            ← Zurück
        </a>

        <h1 className="legal-title">Impressum</h1>

        <div className="legal-section">
            <h2>Angaben gemäß § 5 DDG</h2>
            <p>
                David Wolf<br /><br />
                Kronenstraße 42<br />
                Haus A, 4. OG<br />
                70173 Stuttgart<br />
                Deutschland
            </p>
        </div>

        <div className="legal-section">
            <h2>Kontakt</h2>
            <p>
                E-Mail: <a href="mailto:contact@lockvera.com" className="footer-link">contact@lockvera.com</a><br />
                Gründer: <a href="mailto:founder@lockvera.com" className="footer-link">founder@lockvera.com</a>
            </p>
        </div>
      </main>
    </>
  );
}
