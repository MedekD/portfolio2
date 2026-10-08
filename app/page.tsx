import Link from "next/link";
import Work from "@/components/Work";
import { Collaboration } from "@/components/Footer";
import { skills } from "@/lib/content";
export default function Home() {
  return (
    <>
      <section className="hero section">
        <div className="hero-top">
          <p className="eyebrow">
            <span className="status-dot" /> Nezávislý designer & creative
            developer
          </p>
          <p className="location">
            Zlínský kraj, Česká republika
            <br />
            <span>Lokální kořeny. Otevřený pohled.</span>
          </p>
        </div>
        <h1>
          Myšlenkám
          <br />
          dávám <em>tvar.</em>
          <svg
            className="hero-asterisk"
            aria-hidden="true"
            viewBox="0 0 100 100"
          >
            <g stroke="currentColor" strokeWidth="10">
              <path d="M50 0v100M0 50h100M15 15l70 70M15 85l70-70" />
            </g>
          </svg>
        </h1>
        <div className="hero-bottom">
          <p>
            Vizuální identity, rozhraní a weby.
            <br />
            Odvážný design. Promyšlená realizace.
          </p>
          <div className="hero-disciplines">
            Graphic Design · UI/UX
            <br />
            Webdesign · Creative Development
          </div>
          <a
            href="#prace"
            className="scroll-link"
            aria-label="Přejít na vybrané práce"
          >
            Objevte moji práci <span>↓</span>
          </a>
        </div>
      </section>
      <Work />
      <section className="home-about section" data-reveal>
        <p className="eyebrow">02 / Za návrhem</p>
        <div>
          <h2>
            Designer hlavou.
            <br />
            <em>Tvůrce rukama.</em>
          </h2>
          <p>
            Jsem Dominik. Je mi 21 let a propojuji vizuální cit s technickým
            přemýšlením. Baví mě hledat jasný výraz pro dobré nápady — a
            dotáhnout je do reality.
          </p>
          <p>
            Návrhy tvořím ručně ve Figmě. Pak jim dávám život v prohlížeči, na
            papíře nebo v aplikaci.
          </p>
          <Link href="/o-mne" className="text-link">
            Více o mně <span>↗</span>
          </Link>
        </div>
      </section>
      <section className="capabilities section">
        <div className="section-top">
          <p className="eyebrow">03 / Co můžeme vytvořit</p>
          <span className="muted">Jedna vize. Více možností.</span>
        </div>
        {skills.map(([name, description], i) => (
          <details key={name} className="skill">
            <summary>
              <span className="skill-number">0{i + 1}</span>
              <h3>{name}</h3>
              <span className="skill-plus">+</span>
            </summary>
            <p>{description}</p>
          </details>
        ))}
      </section>
      <section className="visual-break" aria-label="Designové motto">
        <p>
          Dobrý design
          <br />
          je <em>dobré rozhodnutí.</em>
        </p>
        <span>Vizuál × Funkce × Detail</span>
      </section>
      <Collaboration />
    </>
  );
}
