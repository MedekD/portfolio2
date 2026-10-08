import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/content";
export const metadata = {
  title: "Kontakt",
  alternates: { canonical: "/kontakt" },
};
export default function Page() {
  return (
    <>
      <section className="page-heading section">
        <p className="eyebrow">Kontakt / Začíná to zprávou</p>
        <h1>
          Váš nápad.
          <br />
          <em>Náš další krok.</em>
        </h1>
      </section>
      <section className="contact-layout section">
        <div>
          <h2>
            Co máte
            <br />
            na mysli?
          </h2>
          <p>
            Nový web, identitu, aplikaci nebo něco úplně jiného? Napište mi pár
            slov. Společně najdeme směr.
          </p>
          <a className="contact-email" href={`mailto:${site.email}`}>
            {site.email} ↗
          </a>
          <p className="muted">
            Zlínský kraj, Česká republika
            <br />
            Spolupráce i na dálku.
          </p>
          {site.phone && (
            <a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a>
          )}
        </div>
        <ContactForm />
      </section>
    </>
  );
}
