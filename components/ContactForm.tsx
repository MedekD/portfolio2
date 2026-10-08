"use client";
import { useRef, useState } from "react";
export default function ContactForm() {
  const [method, setMethod] = useState("email"),
    [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
      "idle",
    ),
    [error, setError] = useState("");
  const form = useRef<HTMLFormElement>(null);
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const file = data.get("file");
    if (file instanceof File && file.size > 5 * 1024 * 1024) {
      setError("Příloha může mít maximálně 5 MB.");
      setStatus("error");
      return;
    }
    setStatus("loading");
    setError("");
    try {
      const res = await fetch("/api/contact", { method: "POST", body: data });
      const body = await res.json();
      if (!res.ok)
        throw new Error(body.error || "Zprávu se nepodařilo odeslat.");
      setStatus("success");
      form.current?.reset();
    } catch (e) {
      setStatus("error");
      setError(
        e instanceof Error
          ? e.message
          : "Odeslání se nezdařilo. Napište prosím na medekd@pm.me.",
      );
    }
  }
  return (
    <form ref={form} onSubmit={submit} className="contact-form">
      <div className="form-row">
        <label>
          Jméno
          <input
            name="firstName"
            autoComplete="given-name"
            required
            maxLength={80}
            placeholder="Vaše jméno"
          />
        </label>
        <label>
          Příjmení
          <input
            name="lastName"
            autoComplete="family-name"
            required
            maxLength={80}
            placeholder="Vaše příjmení"
          />
        </label>
      </div>
      <fieldset>
        <legend>Jak se vám mám ozvat?</legend>
        <div className="radio-row">
          <label>
            <input
              type="radio"
              name="method"
              value="email"
              checked={method === "email"}
              onChange={() => setMethod("email")}
            />{" "}
            E-mailem
          </label>
          <label>
            <input
              type="radio"
              name="method"
              value="phone"
              checked={method === "phone"}
              onChange={() => setMethod("phone")}
            />{" "}
            Telefonicky
          </label>
        </div>
      </fieldset>
      <label>
        {method === "email" ? "E-mail" : "Telefon"}
        <input
          key={method}
          type={method === "email" ? "email" : "tel"}
          name="contact"
          autoComplete={method === "email" ? "email" : "tel"}
          required
          maxLength={150}
          pattern={method === "phone" ? "[+0-9 ()-]{9,25}" : undefined}
          placeholder={method === "email" ? "vas@email.cz" : "+420 123 456 789"}
        />
      </label>
      <label>
        O vašem projektu
        <textarea
          name="message"
          required
          minLength={20}
          maxLength={5000}
          rows={4}
          placeholder="Co byste chtěli vytvořit? Napište alespoň 20 znaků."
        />
      </label>
      <label className="upload">
        Příloha{" "}
        <span className="muted">
          volitelné / PDF, JPG, PNG, WebP / max. 5 MB
        </span>
        <input name="file" type="file" accept=".pdf,.jpg,.jpeg,.png,.webp" />
      </label>
      <div className="honeypot" aria-hidden="true">
        <label>
          Web
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <p className="privacy-note">
        Údaje použiji pouze k vyřízení vaší poptávky. Zpráva i příloha budou
        doručeny na můj e-mail; neslouží k marketingu.
      </p>
      <button
        className="submit-button"
        disabled={status === "loading"}
        type="submit"
      >
        {status === "loading" ? "Odesílám…" : "Odeslat zprávu"}
        <span>↗</span>
      </button>
      <div aria-live="polite" aria-atomic="true">
        {status === "success" && (
          <p className="form-success" role="status">
            Děkuji. Zpráva dorazila — ozvu se vám co nejdříve.
          </p>
        )}
        {status === "error" && (
          <p className="form-error" role="alert">
            {error}
          </p>
        )}
      </div>
    </form>
  );
}
