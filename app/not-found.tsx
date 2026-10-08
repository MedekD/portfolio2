import Link from "next/link";
export default function NotFound() {
  return (
    <section className="page-heading section">
      <p className="eyebrow">404 / Mimo záběr</p>
      <h1>
        Tady zatím
        <br />
        <em>nic není.</em>
      </h1>
      <Link className="text-link" href="/">
        Zpět na úvod ↗
      </Link>
    </section>
  );
}
