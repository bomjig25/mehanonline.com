import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../SiteChrome";

const profileUrl = "https://gravatar.com/bomjig25";

export const metadata: Metadata = {
  title: "About Ashok Mehan — Mehan Observatory",
  description: "Meet Ashok Mehan, author of History's Future and editor of the Mehan Observatory.",
  alternates: { canonical: "/about/" },
  openGraph: {
    title: "About Ashok Mehan — Mehan Observatory",
    description: "The author and observer behind History's Future and the Mehan Observatory.",
    url: "https://mehanonline.com/about/",
    images: [{ url: "https://mehanonline.com/og.png", width: 1792, height: 896, alt: "Mehan Observatory" }],
  },
  twitter: { card: "summary_large_image", images: ["https://mehanonline.com/og.png"] },
};

export default function AboutPage() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ashok Mehan",
    url: profileUrl,
    sameAs: [profileUrl, "https://ashokmehan.com/"],
  };

  return (
    <main className="about-page">
      <SiteHeader active="about" />
      <section className="about-hero observatory-page-hero">
        <div className="observatory-hero-copy">
          <p className="kicker">The observer / Washington, D.C.</p>
          <h1>Behind the<br /><em>Observatory.</em></h1>
        </div>
        <p>
          Ashok Mehan is the author of <em>History&apos;s Future</em> and the editor of this
          evidence-oriented field guide to accelerating intelligence.
        </p>
      </section>

      <section className="about-profile" aria-labelledby="about-profile-title">
        <div className="about-profile-copy">
          <span className="section-number">01</span>
          <p className="kicker">Identity card / Gravatar</p>
          <h2 id="about-profile-title">Ashok Mehan,<br /><em>author and editor.</em></h2>
          <p>
            This live profile card is maintained through Gravatar, so the biography, portrait,
            and verified links remain connected to their source.
          </p>
          <a className="text-action" href={profileUrl}>Open the full Gravatar profile <span>→</span></a>
        </div>

        <div className="gravatar-instrument">
          <div className="gravatar-instrument-head">
            <span><i /> Profile signal</span>
            <span>Live / Gravatar</span>
          </div>
          <div className="gravatar-identity">
            <strong>Ashok Mehan</strong>
            <span>Author of <em>History&apos;s Future</em> · Editor, Mehan Observatory</span>
          </div>
          <div className="gravatar-card-scroller">
            <iframe
              className="gravatar-profile-card"
              src="https://gravatar.com/bomjig25.card"
              width="520"
              height="320"
              title="Ashok Mehan's Gravatar profile card"
              loading="lazy"
              scrolling="no"
            />
          </div>
          <p>Profile content is served directly by Gravatar.</p>
        </div>
      </section>

      <section className="about-bridge">
        <p className="kicker">The work</p>
        <h2>The argument lives in the book.<br />The evidence lives here.</h2>
        <div>
          <a className="primary-action light" href="https://ashokmehan.com/">Explore History&apos;s Future</a>
          <a className="text-action light-text" href="/contact/">Contact Ashok <span>→</span></a>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <SiteFooter />
    </main>
  );
}
