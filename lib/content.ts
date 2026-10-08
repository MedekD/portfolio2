export const site = {
  name: "Dominik Medek",
  email: "medekd@pm.me",
  phone: null as string | null,
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://example.com",
};
export const skills = [
  [
    "Graphic Design",
    "Vizuální identity, které mají vlastní charakter. Od první skici po poslední detail.",
  ],
  [
    "UI / UX Design",
    "Srozumitelné rozhraní. Promyšlená struktura. Design, který lidem usnadňuje život.",
  ],
  [
    "Webdesign",
    "Weby navrhuji ručně ve Figmě. Každý layout začíná obsahem, ne šablonou.",
  ],
  [
    "Creative Development",
    "Z návrhu skutečný produkt. Weby, custom aplikace i malé digitální zážitky.",
  ],
  [
    "Print & Prepress",
    "Editorial, sazba a příprava pro tisk. Cit pro papír, typografii a řemeslo.",
  ],
];
export const projects = [
  {
    slug: "forma",
    name: "Forma",
    category: "Vizuální identita / Art direction",
    year: "2026",
    kind: "brand",
    color: "#dce7cb",
    tag: "Prostor pro nový pohled.",
    description:
      "Vizuální identita konceptu architektonického studia. Klidná, přesná a postavená na vztahu prostoru a typografie.",
    brief:
      "Jak dát mladému architektonickému studiu výraznou identitu, která nebude přehlušovat jeho práci?",
    concept:
      "Základem je proměnlivý rám. Stejně jako architektura vymezuje prostor, identita nechává místo pro různé úhly pohledu.",
    decision:
      "Neutrální grotesk, přírodní zelená a otevřený grid propojují digitální komunikaci s tištěnými materiály.",
    result:
      "Ucelený koncept identity: logotyp, vizitky, plakáty a směr pro web. Demonstrační projekt bez skutečného klienta.",
  },
  {
    slug: "still",
    name: "Still",
    category: "UI/UX / Digitální produkt",
    year: "2026",
    kind: "app",
    color: "#dbd5eb",
    tag: "Méně hluku. Více prostoru.",
    description:
      "Koncept aplikace pro vědomější každodennost. Jemné rozhraní, které nevyžaduje další pozornost.",
    brief:
      "Navrhnout osobní plánovač, který nepřidává stres a pomáhá soustředit se na jednu důležitou věc.",
    concept:
      "Místo nekonečných seznamů má každý den tři priority. Přehledná hierarchie odděluje dnešek od všeho ostatního.",
    decision:
      "Velké dotykové plochy, krátké texty a zřetelná zpětná vazba. Barevnost podporuje klid, kontrast zachovává čitelnost.",
    result:
      "Prototyp klíčových obrazovek a návrh komponentového systému. Ukázkový produkt, nikoliv vydaná aplikace.",
  },
  {
    slug: "atelier",
    name: "Ateliér 04",
    category: "Webdesign / Creative development",
    year: "2025",
    kind: "web",
    color: "#d9e1e7",
    tag: "Předměty s příběhem.",
    description:
      "Editorial web pro koncept keramického ateliéru. Velké fotografie, čistý rytmus a prostor pro materiál.",
    brief:
      "Přenést hmatový charakter keramiky do digitálního prostředí a vytvořit jednoduchou cestu k poptávce.",
    concept:
      "Produkty dostávají prostor jako v galerii. Navigace ustupuje obsahu a typografie propojuje všechny stránky.",
    decision:
      "Mobilní návrh pracuje s jedním sloupcem, jednoduchou navigací a přímým kontaktem místo složitého katalogu.",
    result:
      "Návrh webu a demonstrační směr realizace. Obsah a značka jsou vytvořené pro toto portfolio.",
  },
  {
    slug: "mezi-radky",
    name: "Mezi řádky",
    category: "Editorial / Print & prepress",
    year: "2025",
    kind: "print",
    color: "#e8dfd2",
    tag: "Kultura na papíře.",
    description:
      "Koncept kulturního magazínu. Výrazná sazba, přiznaný grid a nečekané vztahy textu a plochy.",
    brief:
      "Vytvořit časopis, který dokáže držet pohromadě rozhovory, vizuální eseje i krátké kulturní zprávy.",
    concept:
      "Pružný šestisloupcový grid střídá klidné textové stránky s výraznými typografickými vstupy.",
    decision:
      "Kontrast velkých titulků a drobné sazby podporuje orientaci. Tisková příprava počítá se spadávkou a konzistentními styly.",
    result:
      "Demonstrační obálka, rozvržení rubrik a ukázka sazby. Bez tvrzení o skutečné distribuci.",
  },
  {
    slug: "ano",
    name: "Ano. Spolu.",
    category: "Microsite / Custom experience",
    year: "2026",
    kind: "invite",
    color: "#e6e4cd",
    tag: "Malý web. Velký den.",
    description:
      "Koncept svatební microsite. Osobní pozvánka, program a jednoduché potvrzení účasti na jednom místě.",
    brief:
      "Zjednodušit informace pro hosty a přitom zachovat osobní charakter svatební pozvánky.",
    concept:
      "Digitální dopis místo běžného landing page. Jemná typografie a přirozené pořadí praktických informací.",
    decision:
      "Datum, místo a potvrzení účasti mají přednost. Formulář je krátký a použitelný i na telefonu.",
    result:
      "Koncept vlastní microsite s návrhem RSVP. Jména i událost jsou ukázkové.",
  },
];
export type Project = (typeof projects)[number];
