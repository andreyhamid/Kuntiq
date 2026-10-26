"use client";

import { LanguageContent, LanguageSelector } from "./language";


import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const links = [
  { href: "/", label: "Origen" },
  { href: "/experiencias", label: "Experiencia" },
  { href: "/tienda", label: "Tienda" },
  { href: "/regalos", label: "Regalos" },
  { href: "/merch", label: "Merchandising" },
  { href: "/academy", label: "Academy" },
  { href: "/contacto", label: "Contacto" },
];

export default function Header() {
  const pathname = usePathname();
  const [openPath, setOpenPath] = useState<string | null>(null);
  const isOpen = openPath === pathname;
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 769px)");
    const closeOnDesktop = () => {
      if (desktop.matches) setOpenPath(null);
    };
    desktop.addEventListener("change", closeOnDesktop);
    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, []);

  return (
    <LanguageContent><header className="header" onKeyDown={(event) => {
      if (event.key === "Escape" && isOpen) {
        setOpenPath(null);
        toggleRef.current?.focus();
      }
    }}>
      <Link href="/" className="logo" onClick={() => setOpenPath(null)}>KUNTIQ</Link>
      <LanguageSelector />
      <button
        ref={toggleRef}
        type="button"
        className="menu-toggle"
        aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={isOpen}
        aria-controls="main-navigation"
        onClick={() => setOpenPath(isOpen ? null : pathname)}
      >
        <span className="menu-icon" aria-hidden="true"><span /><span /><span /></span>

      </button>
      <nav id="main-navigation" className={`nav${isOpen ? " nav-open" : ""}`} aria-label="Navegación principal">
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            aria-current={(href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`)) ? "page" : undefined}
            onClick={() => setOpenPath(null)}
          >{label}</Link>
        ))}
      </nav>
    </header></LanguageContent>
  );
}




