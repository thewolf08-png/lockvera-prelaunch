import type { CoverType } from "../../data/blog-posts";

type CoverGraphicProps = {
  type: CoverType;
};

export function CoverGraphic({ type }: CoverGraphicProps) {
  if (type === "trail") {
    return (
      <div className="card__cover cover--trail">
        <span className="label l1">Erstellt</span>
        <span className="label l2">Geprüft</span>
        <span className="label l3">Freigegeben</span>
        <span className="label l4">Archiviert</span>
        <span className="axis" />
        <span className="step s1" />
        <span className="step s2" />
        <span className="step s3" />
        <span className="step s4" />
        <span className="meta">audit-trail · doc-7f3a · v2.4</span>
      </div>
    );
  }

  if (type === "grid") {
    return (
      <div className="card__cover cover--grid">
        <span className="line l1" />
        <span className="line l2" />
        <span className="node n1" />
        <span className="node n2" />
        <span className="node n3" />
      </div>
    );
  }

  if (type === "bars") {
    return (
      <div className="card__cover cover--bars">
        <span className="dot" />
        <span className="tag">v2.4 · maßgeblich</span>
        <span className="bar b1" />
        <span className="bar b2" />
        <span className="bar b3" />
        <span className="bar b4" />
      </div>
    );
  }

  if (type === "shield") {
    return (
      <div className="card__cover cover--shield">
        <span className="ring r1" />
        <span className="ring r2" />
        <span className="ring r3" />
        <span className="core" />
      </div>
    );
  }

  if (type === "stack") {
    return (
      <div className="card__cover cover--stack">
        <span className="page-doc p1" />
        <span className="page-doc p2" />
        <span className="page-doc p3" />
        <span className="accent" />
      </div>
    );
  }

  if (type === "connect") {
    return (
      <div className="card__cover cover--connect">
        <svg viewBox="0 0 400 250" preserveAspectRatio="none" aria-hidden="true">
          <line x1="76" y1="60" x2="200" y2="125" stroke="#7A4DDB" strokeWidth="1.4" strokeOpacity="0.55" />
          <line x1="324" y1="60" x2="200" y2="125" stroke="#59C5C9" strokeWidth="1.4" strokeOpacity="0.7" />
          <line x1="88" y1="190" x2="200" y2="125" stroke="#7A4DDB" strokeWidth="1.4" strokeOpacity="0.55" />
          <line x1="312" y1="190" x2="200" y2="125" stroke="#59C5C9" strokeWidth="1.4" strokeOpacity="0.55" />
        </svg>
        <span className="sat s1">M365</span>
        <span className="sat s2">DATEV</span>
        <span className="sat s3">DocuSign</span>
        <span className="sat s4">SAP</span>
        <span className="hub">LV</span>
      </div>
    );
  }

  if (type === "quote") {
    return (
      <div className="card__cover cover--quote">
        <span className="mark">&ldquo;</span>
        <div className="lines">
          <div className="ln" />
          <div className="ln" />
          <div className="ln" />
        </div>
      </div>
    );
  }

  return (
    <div className="card__cover cover--wash">
      <span className="glyph">
        A→Z<small>Workflow Guide</small>
      </span>
    </div>
  );
}
