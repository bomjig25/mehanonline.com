import Link from "next/link";

type RouteKey = "home" | "singularity" | "models" | "space" | "contact";

const navigation = [
  { label: "Event Horizon", href: "/singularity/", key: "singularity" },
  { label: "U.S. vs China", href: "/models/", key: "models" },
  { label: "Space frontier", href: "/space/", key: "space" },
  { label: "China monitor", href: "/#intelligence", key: "home" },
  { label: "Laboratory", href: "/#laboratory", key: "home" },
] as const;

export function SiteHeader({ active }: { active?: RouteKey }) {
  return (
    <header className="site-header">
      <Link className="wordmark" href="/" aria-label="Mehan Observatory home">
        <span className="mark">MO</span>
        <span>Mehan Observatory</span>
      </Link>
      <nav aria-label="Primary navigation">
        {navigation.map((item) => (
          <Link className={active === item.key && item.key !== "home" ? "active" : undefined} href={item.href} key={item.label}>
            {item.label}
          </Link>
        ))}
      </nav>
      <Link className={active === "contact" ? "book-link active" : "book-link"} href="/contact/">
        Contact <span>→</span>
      </Link>
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
        <Link href="/contact/">Contact</Link>
      </nav>
      <small>© 2026 Ashok Mehan · Washington, D.C.</small>
    </footer>
  );
}
