"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
export default function Nav() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  const toggle = useRef<HTMLButtonElement>(null);
  const menu = useRef<HTMLDivElement>(null);
  useEffect(() => {
    setOpen(false);
  }, [path]);
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    menu.current?.querySelector<HTMLAnchorElement>("a")?.focus();
    function key(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
      if (e.key === "Tab") {
        const links = menu.current?.querySelectorAll<HTMLAnchorElement>("a");
        if (!links) return;
        const first = links[0],
          last = links[links.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          toggle.current?.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          toggle.current?.focus();
        } else if (document.activeElement === toggle.current) {
          e.preventDefault();
          (e.shiftKey ? last : first).focus();
        }
      }
    }
    document.addEventListener("keydown", key);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", key);
    };
  }, [open]);
  const links = [
    ["/portfolio", "Portfolio"],
    ["/o-mne", "O mně"],
    ["/kontakt", "Kontakt"],
  ];
  return (
    <header className="header">
      <Link className="wordmark" href="/" aria-label="Dominik Medek – úvod">
        DOMINIK MEDEK
        <span className="brand-dot" />
      </Link>
      <nav aria-label="Hlavní navigace" className="desktop-nav">
        {links.map(([href, label]) => (
          <Link
            aria-current={path.startsWith(href) ? "page" : undefined}
            key={href}
            href={href}
          >
            {label}
            {label === "Kontakt" && <span> ↗</span>}
          </Link>
        ))}
      </nav>
      <button
        ref={toggle}
        className="menu-toggle"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls="mobile-menu"
      >
        {open ? "Zavřít −" : "Menu +"}
      </button>
      {open && (
        <div ref={menu} id="mobile-menu" className="mobile-menu">
          <nav aria-label="Mobilní navigace">
            {links.map(([href, label], i) => (
              <Link href={href} key={href}>
                <small>0{i + 1}</small>
                {label}
                <span>↗</span>
              </Link>
            ))}
          </nav>
          <p>Design s citem. Realizace s přesností.</p>
          <a href="mailto:medekd@pm.me">medekd@pm.me</a>
        </div>
      )}
    </header>
  );
}
