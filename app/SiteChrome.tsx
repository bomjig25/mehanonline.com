"use client";

import Link from "next/link";
import { useRef } from "react";

type RouteKey = "home" | "forecast" | "work" | "dossier" | "singularity" | "models" | "space" | "about" | "contact";

const navigation = [
  { label: "Forecast ledger", href: "/forecast-ledger/", key: "forecast" },
  { label: "Work Horizon", href: "/work-horizon/", key: "work" },
  { label: "Dossiers", href: "/dossiers/", key: "dossier" },
  { label: "Event Horizon", href: "/singularity/", key: "singularity" },
  { label: "U.S. vs China", href: "/models/", key: "models" },
  { label: "Space frontier", href: "/space/", key: "space" },
  { label: "About", href: "/about/", key: "about" },
  { label: "Contact", href: "/contact/", key: "contact" },
] as const;

type SectionLink = { label: string; href: string };

export function SiteHeader({ active, sections = [] }: { active?: RouteKey; sections?: SectionLink[] }) {
  const menuRef = useRef<HTMLDetailsElement>(null);
  const closeMenu = () => menuRef.current?.removeAttribute("open");

  return (
    <header className="site-header">
      <Link className="wordmark" href="/" aria-label="Mehan Observatory home">
        <span className="mark">MO</span>
        <span>Mehan Observatory</span>
      </Link>
      <details className="site-menu" ref={menuRef}>
        <summary><span>Explore</span><i aria-hidden="true" /></summary>
        <div className={sections.length ? "site-menu-panel has-sections" : "site-menu-panel"}>
          <div>
            <p>Observatory pages</p>
            <nav aria-label="Primary navigation">
              <Link className={active === "home" ? "active" : undefined} href="/" onClick={closeMenu}><span>00</span>Observatory</Link>
              {navigation.map((item, index) => (
                <Link className={active === item.key ? "active" : undefined} href={item.href} key={item.label} onClick={closeMenu}>
                  <span>{String(index + 1).padStart(2, "0")}</span>{item.label}
                </Link>
              ))}
            </nav>
          </div>
          {sections.length > 0 && <div className="site-menu-sections">
            <p>On this page</p>
            <nav aria-label="On this page">
              {sections.map((item, index) => <a href={item.href} key={item.href} onClick={closeMenu}><span>{String(index + 1).padStart(2, "0")}</span>{item.label}</a>)}
            </nav>
          </div>}
        </div>
      </details>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer>
      <div><span className="mark">MO</span><strong>Mehan Observatory</strong></div>
      <p>An independent companion to <em>History&apos;s Future: The Singularity Is Here.</em></p>
      <nav className="footer-links" aria-label="Footer navigation">
        <Link href="/">Observatory</Link>
        {navigation.map((item) => <Link href={item.href} key={item.label}>{item.label}</Link>)}
      </nav>
      <small>© 2026 Ashok Mehan · Washington, D.C.</small>
    </footer>
  );
}
