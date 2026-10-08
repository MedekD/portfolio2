import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
export const runtime = "nodejs";
const MAX = 5 * 1024 * 1024;
const windows = new Map<string, { count: number; until: number }>();
export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  const expectedHost = request.headers.get("host");
  let sameOrigin = false;
  try {
    sameOrigin =
      !!origin &&
      new URL(origin).host === expectedHost &&
      ["http:", "https:"].includes(new URL(origin).protocol);
  } catch {}
  if (!sameOrigin)
    return NextResponse.json(
      { error: "Neplatný původ požadavku." },
      { status: 403 },
    );
  const size = Number(request.headers.get("content-length"));
  if (!Number.isFinite(size) || size <= 0 || size > MAX + 30000)
    return NextResponse.json(
      { error: "Požadavek je příliš velký nebo nemá platnou délku." },
      { status: 413 },
    );
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "local";
  const now = Date.now();
  for (const [key, val] of windows) {
    if (val.until < now) windows.delete(key);
  }
  const entry = windows.get(ip);
  if (entry && entry.count >= 5)
    return NextResponse.json(
      { error: "Příliš mnoho zpráv. Zkuste to prosím za 15 minut." },
      { status: 429 },
    );
  if (windows.size > 10000)
    return NextResponse.json(
      { error: "Server je dočasně zaneprázdněný." },
      { status: 503 },
    );
  windows.set(ip, {
    count: (entry?.count || 0) + 1,
    until: entry?.until || now + 900000,
  });
  try {
    const data = await request.formData();
    const get = (key: string) => String(data.get(key) || "").trim();
    if (get("website")) return NextResponse.json({ ok: true });
    const first = get("firstName"),
      last = get("lastName"),
      method = get("method"),
      contact = get("contact"),
      message = get("message");
    if (
      !first ||
      !last ||
      first.length > 80 ||
      last.length > 80 ||
      message.length < 20 ||
      message.length > 5000 ||
      contact.length > 150 ||
      !(method === "email"
        ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact)
        : method === "phone" && /^[+0-9 ()-]{9,25}$/.test(contact))
    )
      return NextResponse.json(
        {
          error: "Zkontrolujte prosím jméno, kontakt a zprávu (20–5000 znaků).",
        },
        { status: 400 },
      );
    const file = data.get("file");
    let attachment: {
      filename: string;
      content: Buffer;
      contentType: string;
    }[] = [];
    if (file instanceof File && file.size) {
      if (file.size > MAX)
        return NextResponse.json(
          { error: "Příloha smí mít nejvýše 5 MB." },
          { status: 400 },
        );
      const buffer = Buffer.from(await file.arrayBuffer());
      const pdf = buffer.subarray(0, 5).toString() === "%PDF-";
      const png = buffer
        .subarray(0, 8)
        .equals(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]));
      const jpg = buffer[0] === 255 && buffer[1] === 216 && buffer[2] === 255;
      const webp =
        buffer.subarray(0, 4).toString() === "RIFF" &&
        buffer.subarray(8, 12).toString() === "WEBP";
      const mime = pdf
        ? "application/pdf"
        : png
          ? "image/png"
          : jpg
            ? "image/jpeg"
            : webp
              ? "image/webp"
              : null;
      if (!mime)
        return NextResponse.json(
          {
            error: "Povolené jsou pouze skutečné PDF, JPG, PNG a WebP soubory.",
          },
          { status: 400 },
        );
      attachment = [
        {
          filename:
            file.name.replace(/[^a-zA-Z0-9._-]/g, "_").slice(-100) || "priloha",
          content: buffer,
          contentType: mime,
        },
      ];
    }
    if (
      !process.env.SMTP_HOST ||
      !process.env.SMTP_USER ||
      !process.env.SMTP_PASS ||
      !process.env.SMTP_FROM
    )
      return NextResponse.json(
        {
          error:
            "Formulář zatím není připojen k e-mailové službě. Napište prosím přímo na medekd@pm.me.",
        },
        { status: 503 },
      );
    const port = Number(process.env.SMTP_PORT || 465);
    const transport = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port,
      secure: port === 465,
      requireTLS: port !== 465,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
      connectionTimeout: 10000,
      socketTimeout: 15000,
    });
    await transport.sendMail({
      from: process.env.SMTP_FROM,
      to: "medekd@pm.me",
      replyTo: method === "email" ? contact : undefined,
      subject: `Portfolio — nová poptávka`,
      text: `Jméno: ${first} ${last}\nKontakt (${method}): ${contact}\n\n${message}`,
      attachments: attachment,
    });
    return NextResponse.json({ ok: true });
  } catch {
    console.error("Contact delivery failed; no personal data logged.");
    return NextResponse.json(
      { error: "Odeslání se nezdařilo. Napište prosím na medekd@pm.me." },
      { status: 500 },
    );
  }
}
