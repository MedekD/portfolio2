"use client";
export default function Error({ reset }: { reset: () => void }) {
  return (
    <section className="page-heading section">
      <p className="eyebrow">Něco se nepovedlo</p>
      <h1>
        Zkusme to
        <br />
        <em>ještě jednou.</em>
      </h1>
      <button className="text-link" onClick={reset}>
        Znovu načíst ↗
      </button>
    </section>
  );
}
