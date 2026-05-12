import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz – LockVera",
  robots: { index: false, follow: false },
};

export default function Page() {
  return (
    <>
      <div className="grain" />
      <main className="legal-page legal-page--datenschutz">
        <a href="/" className="legal-back">
            ← Zurück
        </a>

        <h1 className="legal-title">Datenschutzerklärung</h1>
        <p className="legal-updated">Stand: Januar 2026</p>

        <div className="legal-section">
            <h2>1. Verantwortlicher</h2>
            <p>Verantwortlich für die Datenverarbeitung auf dieser Website ist:</p>
            <p>
                David Wolf<br />
                Kronenstraße 42<br />
                Haus A, 4. OG<br />
                70173 Stuttgart<br />
                Deutschland
            </p>
            <p>E-Mail: <a href="mailto:contact@lockvera.com">contact@lockvera.com</a></p>
        </div>

        <div className="legal-section">
            <h2>2. Hosting</h2>
            <p>
                Diese Website wird bei einem externen Hosting-Dienstleister innerhalb der Europäischen Union betrieben.
            </p>
            <p>
                Der Hosting-Anbieter verarbeitet personenbezogene Daten (z. B. IP-Adressen in Server-Logfiles)
                ausschließlich im Rahmen einer Auftragsverarbeitung gemäß Art. 28 DSGVO.
                Eine Übermittlung der Daten in Drittländer findet nicht statt.
            </p>
        </div>

        <div className="legal-section">
            <h2>3. Allgemeine Hinweise zur Datenverarbeitung</h2>
            <p>
                Der Schutz Ihrer personenbezogenen Daten ist uns wichtig.
                Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
            </p>
            <p>
                Diese Datenschutzerklärung erläutert, welche Daten beim Besuch dieser Website erhoben werden
                und zu welchem Zweck dies geschieht.
            </p>
        </div>

        <div className="legal-section">
            <h2>4. Datenerfassung beim Besuch der Website</h2>
            <h3>Server-Log-Dateien</h3>
            <p>
                Beim Aufruf dieser Website erhebt und speichert der Hosting-Anbieter automatisch Informationen
                in sogenannten Server-Log-Dateien, die Ihr Browser automatisch übermittelt. Dies sind insbesondere:
            </p>
            <ul>
                <li>Browsertyp und Browserversion</li>
                <li>verwendetes Betriebssystem</li>
                <li>Referrer URL</li>
                <li>Hostname des zugreifenden Rechners</li>
                <li>Uhrzeit der Serveranfrage</li>
                <li>IP-Adresse</li>
            </ul>
            <p>Diese Daten werden nicht mit anderen Datenquellen zusammengeführt.</p>
            <div className="legal-basis">
                <strong>Rechtsgrundlage:</strong><br />
                Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der sicheren und stabilen Bereitstellung der
                Website).
            </div>
        </div>

        <div className="legal-section">
            <h2>5. Kontaktaufnahme per E-Mail</h2>
            <p>
                Wenn Sie uns per E-Mail kontaktieren, werden Ihre Angaben inklusive der von Ihnen übermittelten
                personenbezogenen Daten (z. B. Name, E-Mail-Adresse, Inhalt der Anfrage) zum Zweck der
                Bearbeitung der Anfrage gespeichert.
            </p>
            <div className="legal-basis">
                <strong>Rechtsgrundlage:</strong><br />
                Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen) oder<br />
                Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Beantwortung von Anfragen).
            </div>
            <p>
                Die Daten werden gelöscht, sobald sie für den Zweck der Verarbeitung nicht mehr erforderlich sind
                und keine gesetzlichen Aufbewahrungspflichten bestehen.
            </p>
        </div>

        <div className="legal-section">
            <h2>6. Cookies und Tracking</h2>
            <p>
                Diese Website verwendet <strong>keine Cookies</strong> und keine Tracking- oder Analyse-Tools.
            </p>
        </div>

        <div className="legal-section">
            <h2>7. SSL- bzw. TLS-Verschlüsselung</h2>
            <p>
                Diese Website nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte
                eine SSL- bzw. TLS-Verschlüsselung.
                Eine verschlüsselte Verbindung erkennen Sie an „https://" in der Adresszeile Ihres Browsers.
            </p>
        </div>

        <div className="legal-section">
            <h2>8. Ihre Rechte als betroffene Person</h2>
            <p>Sie haben jederzeit das Recht:</p>
            <ul>
                <li>Auskunft über Ihre gespeicherten personenbezogenen Daten zu erhalten (Art. 15 DSGVO)</li>
                <li>Berichtigung unrichtiger Daten zu verlangen (Art. 16 DSGVO)</li>
                <li>Löschung Ihrer Daten zu verlangen (Art. 17 DSGVO)</li>
                <li>Einschränkung der Verarbeitung zu verlangen (Art. 18 DSGVO)</li>
                <li>Widerspruch gegen die Verarbeitung einzulegen (Art. 21 DSGVO)</li>
                <li>Datenübertragbarkeit zu verlangen (Art. 20 DSGVO)</li>
            </ul>
            <p>
                Außerdem haben Sie das Recht, sich bei einer zuständigen Datenschutzaufsichtsbehörde zu beschweren.
            </p>
        </div>

        <div className="legal-section">
            <h2>9. Änderungen dieser Datenschutzerklärung</h2>
            <p>
                Diese Datenschutzerklärung wird angepasst, sobald sich Art, Umfang oder Zweck der Datenverarbeitung
                ändern.
            </p>
        </div>
      </main>
    </>
  );
}
