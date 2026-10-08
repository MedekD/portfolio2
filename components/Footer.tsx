import Link from "next/link";
export function Collaboration() {
  return (
    <section className="collaboration section" data-reveal>
      <p className="eyebrow">Další dobrý projekt může být ten váš.</p>
      <Link href="/kontakt" className="big-cta">
        Dáme tomu
        <br />
        <em>tvar.</em>
        <span>↗</span>
      </Link>
      <div className="cta-bottom">
        <p>
          Máte nápad, značku nebo nový začátek?
          <br />
          Pojďme zjistit, co z toho může vzniknout.
        </p>
        <a className="text-link" href="mailto:medekd@pm.me">
          medekd@pm.me ↗
        </a>
      </div>
    </section>
  );
}
export default function Footer() {
  return (
    <footer className="footer">
      <Link href="/" className="wordmark">
        DOMINIK MEDEK
      </Link>
      <p>© {new Date().getFullYear()} · Navrženo s citem.</p>
      <span>
        Zlínský kraj, CZ <span className="brand-dot" />
      </span>
    </footer>
  );
}
