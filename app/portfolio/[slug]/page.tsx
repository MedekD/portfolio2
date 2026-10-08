import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/content";
import { Art } from "@/components/Art";
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = projects.find((p) => p.slug === slug);
  return {
    title: p?.name || "Projekt nenalezen",
    description: p?.description,
    alternates: { canonical: `/portfolio/${slug}` },
  };
}
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);
  if (index < 0) notFound();
  const p = projects[index],
    next = projects[(index + 1) % projects.length];
  return (
    <>
      <section className="case-heading section">
        <Link href="/portfolio" className="text-link">
          ← Všechny projekty
        </Link>
        <p className="eyebrow">Autorský koncept / demo projekt</p>
        <h1>
          {p.name}
          <span>↗</span>
        </h1>
        <div className="case-meta">
          <p>{p.description}</p>
          <dl>
            <div>
              <dt>Disciplína</dt>
              <dd>{p.category}</dd>
            </div>
            <div>
              <dt>Rok</dt>
              <dd>{p.year}</dd>
            </div>
            <div>
              <dt>Role / klient</dt>
              <dd>Dominik Medek / vlastní koncept</dd>
            </div>
          </dl>
        </div>
      </section>
      <div className="case-hero">
        <Art project={p} priority />
      </div>
      <section className="case-section section" data-reveal>
        <p className="eyebrow">01 / Zadání & přístup</p>
        <div>
          <h2>{p.brief}</h2>
          <p>{p.concept}</p>
        </div>
      </section>
      <section className="case-quote section">
        <span className="eyebrow">Ústřední myšlenka</span>
        <blockquote>„{p.tag}“</blockquote>
      </section>
      <section className="case-direction section" data-reveal>
        <div>
          <p className="eyebrow">02 / Vizuální směr</p>
          <h2>
            Detail tvoří
            <br />
            <em>celek.</em>
          </h2>
          <p>{p.decision}</p>
        </div>
        <div className="design-system">
          <div className="type-sample">
            Aa<span>Inter / Variable grotesk</span>
          </div>
          <div className="swatches">
            <span style={{ background: p.color }} />
            <span style={{ background: "#20211f" }} />
            <span style={{ background: "#f5f4f0" }} />
          </div>
          <p>Otevřený grid · Čistá typografie · Jasná hierarchie</p>
        </div>
      </section>
      <div className="case-gallery section">
        <Art project={p} variant />
        <div className="detail-poster" style={{ background: p.color }}>
          <span>{p.name}</span>
          <p>{p.tag}</p>
          <small>Koncept / {p.year}</small>
        </div>
      </div>
      <section className="case-section section">
        <p className="eyebrow">03 / Výsledek</p>
        <div>
          <h2>
            Od myšlenky
            <br />k systému.
          </h2>
          <p>{p.result}</p>
          <p className="muted">
            Prezentované vizuály jsou originální ukázky vytvořené pro portfolio.
            Skutečné výstupy lze snadno doplnit v datech projektu.
          </p>
        </div>
      </section>
      <section className="next-project section">
        <p className="eyebrow">Další projekt</p>
        <Link href={`/portfolio/${next.slug}`}>
          {next.name}
          <span>↗</span>
        </Link>
      </section>
    </>
  );
}
