import Link from "next/link";
import { skills } from "@/lib/content";
import { Collaboration } from "@/components/Footer";
export const metadata = { title: "O mně", alternates: { canonical: "/o-mne" } };
export default function Page() {
  return (
    <>
      <section className="page-heading section">
        <p className="eyebrow">O mně / Dominik Medek</p>
        <h1>
          Cit pro vizuál.
          <br />
          <em>Chuť tvořit.</em>
        </h1>
      </section>
      <section className="about-grid section">
        <div
          className="portrait"
          role="img"
          aria-label="Místo pro osobní fotografii Dominika Medka"
        >
          <span aria-hidden="true">dm.</span>
          <small>
            Prostor pro moji fotografii
            <br />
            Dominik Medek / Zlínský kraj
          </small>
        </div>
        <div className="about-copy">
          <p className="eyebrow">21 let / Česká republika</p>
          <h2>
            Design mě baví.
            <br />
            Realizace taky.
          </h2>
          <p>
            Jsem multidisciplinární designer ze Zlínského kraje. Zajímá mě, jak
            se dobrá myšlenka mění v něco, co lidé vidí, používají a pamatují
            si.
          </p>
          <p>
            Propojuji graphic design, UI/UX a webdesign s technickou realizací.
            Věřím, že vizuál a funkce mají vznikat společně. Proto návrhy
            nekončí jen ve Figmě.
          </p>
          <p>
            Dokážu navrhnout a postavit web pro jednotlivce i firmu, custom
            aplikaci nebo malou osobní microsite. Stejnou pozornost věnuji
            typografii na papíře i detailu v prohlížeči.
          </p>
          <Link href="/kontakt" className="text-link">
            Pojďme něco vytvořit ↗
          </Link>
        </div>
      </section>
      <section className="approach section">
        <p className="eyebrow">Jak přemýšlím</p>
        <h2>
          Nejdřív pochopit.
          <br />
          Potom navrhnout.
          <br />
          <em>A dotáhnout.</em>
        </h2>
        <div className="approach-grid">
          {[
            [
              "01",
              "Kontext",
              "Začínám otázkami. Co má projekt říct, komu slouží a co potřebuje vyřešit?",
            ],
            [
              "02",
              "Směr",
              "Ve Figmě hledám jasnou vizuální myšlenku. Ověřuji strukturu, rytmus a použitelnost.",
            ],
            [
              "03",
              "Realizace",
              "Návrh převádím do funkčního výsledku. Testuji, ladím a hlídám detaily.",
            ],
          ].map(([n, t, d]) => (
            <div key={n}>
              <span>{n}</span>
              <h3>{t}</h3>
              <p>{d}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="capabilities section">
        <p className="eyebrow">Disciplíny</p>
        {skills.map(([n, d], i) => (
          <details className="skill" key={n}>
            <summary>
              <span className="skill-number">0{i + 1}</span>
              <h3>{n}</h3>
              <span className="skill-plus">+</span>
            </summary>
            <p>{d}</p>
          </details>
        ))}
        <div className="tools">
          <p className="eyebrow">Moje nástroje</p>
          <p>
            Figma / Framer / Affinity / Blockbench
            <br />
            React / Next.js / TypeScript / CSS
          </p>
        </div>
      </section>
      <Collaboration />
    </>
  );
}
