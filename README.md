# Dominik Medek — portfolio

Next.js 16, React 19, TypeScript, lokálně hostovaný Inter. CSS animace respektují reduced motion. Žádná externí služba pro vizuály.

## Spuštění

Node.js 24 LTS, npm 11:

```sh
npm install
cp .env.example .env.local
npm run dev
```

## Production / VPS

Nastavte `NEXT_PUBLIC_SITE_URL` na skutečnou HTTPS doménu **před buildem**. Doplňte SMTP do `.env.local`, potom:

```sh
npm ci
npm run build
npm start
```

Pro trvalý provoz použijte systemd nebo PM2, reverzní proxy Nginx/Caddy a HTTPS. Port 3000 nevystavujte přímo internetu. Proxy musí přepisovat `X-Forwarded-For`, zachovat původní host/protokol a omezit tělo požadavku na 6 MB. Formulář ověřuje same-origin požadavky; při proxy nastavte `Host` podle veřejné domény. Jedna Node instance používá paměťový limit 5 požadavků / 15 minut / IP. Pro více instancí doplňte sdílený rate limiter nebo omezování na proxy. SMTP vyžaduje TLS (465 implicitní, 587 STARTTLS). Doporučené DNS pro doručování: SPF, DKIM, DMARC. Bez SMTP formulář vrací vysvětlující chybu a nabízí přímý e-mail; nikdy nepředstírá odeslání.

Docker (volitelné):

```sh
docker build --build-arg NEXT_PUBLIC_SITE_URL=https://vase-domena.cz -t medek-portfolio .
docker run -d --restart unless-stopped --env-file .env.local -p 127.0.0.1:3000:3000 medek-portfolio
```

Docker build nebyl v tomto prostředí ověřen. Běžný Node production build byl ověřen.

## Úprava obsahu

- `lib/content.ts`: projekty, bio metadata, disciplíny, e-mail a telefon. Telefon je `null`; nastavte vlastní číslo pro zobrazení.
- `public/projects/`: pět původních demo vizuálů. Nahraďte je skutečnými exporty; pro fotografie použijte JPG/WebP a změňte cestu v `components/Art.tsx`.
- `app/o-mne/page.tsx`: bio a výslovně označený placeholder fotografie.
- `public/og.png`: náhled pro sdílení; `app/icon.svg`: favicon.
- `app/globals.css`: barevnost, grid, breakpointy a motion.

Projekty jsou jasně označené jako vlastní koncepty, bez skutečných klientů nebo smyšlených výsledků. Před publikací je nahraďte, doplňte fotografii, ověřte právní text a nastavte doménu. SMTP přihlašovací údaje nikdy necommitujte. Přílohy podporují PDF/JPG/PNG/WebP do 5 MB s kontrolou obsahu; formulář data neukládá do databáze ani logů, doručuje je e-mailem.

## Kontroly

```sh
npm run typecheck
npm run build
```

Používejte existující checkout; cloud task je již izolovaný a další Git worktree není potřeba. Vývojový server spusťte `npm run dev`. Ověřte odpověď úvodní stránky i existenci projektů a kontaktu. Běžící proces se po obnově prostředí musí spustit znovu.
