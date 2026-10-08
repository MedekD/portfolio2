import Work from "@/components/Work";
import { Collaboration } from "@/components/Footer";
export const metadata = {
  title: "Portfolio",
  alternates: { canonical: "/portfolio" },
};
export default function Page() {
  return (
    <>
      <div className="page-heading section">
        <p className="eyebrow">Portfolio / Výběr tvorby</p>
        <h1>
          Práce, která
          <br />
          má <em>výraz.</em>
        </h1>
      </div>
      <Work all />
      <Collaboration />
    </>
  );
}
