import type { Metadata } from "next";
import ContactForm from "./ContactForm";
import { SiteFooter, SiteHeader } from "../SiteChrome";

export const metadata: Metadata = {
  title: "Contact — Mehan Observatory",
  description: "Contact Ashok Mehan about the Observatory, research collaboration, media, speaking, or History's Future.",
  alternates: { canonical: "/contact/" },
  openGraph: {
    title: "Contact — Mehan Observatory",
    description: "Questions, corrections, research collaborations, and considered disagreements are welcome.",
    url: "https://mehanonline.com/contact/",
    images: [{ url: "https://mehanonline.com/og.png", width: 1792, height: 896, alt: "Mehan Observatory" }],
  },
  twitter: { card: "summary_large_image", images: ["https://mehanonline.com/og.png"] },
};

export default function ContactPage() {
  const contactSchema = {
    "@context": "https://schema.org", "@type": "ContactPage",
    name: "Contact Mehan Observatory", url: "https://mehanonline.com/contact/",
    about: { "@type": "Organization", name: "Mehan Observatory", url: "https://mehanonline.com/" },
  };
  return (
    <main className="contact-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }} />
      <SiteHeader active="contact" />
      <section className="contact-hero observatory-page-hero">
        <div className="observatory-hero-copy">
          <p className="kicker">Open channel / Washington, D.C.</p>
          <h1>Continue the<br /><em>inquiry.</em></h1>
          <p>Questions, corrections, research collaborations, media inquiries, and considered disagreements are welcome.</p>
        </div>
      </section>
      <section className="contact-layout">
        <div className="contact-intro">
          <span className="section-number">01</span>
          <p className="kicker">Send a message</p>
          <h2>The Observatory is<br /><em>a living record.</em></h2>
          <p>If you see evidence that should be added, a claim that should be challenged, or a subject worth investigating, write directly.</p>
          <div className="contact-direct">
            <span>Direct email</span>
            <a href="mailto:ashok@ashokmehan.com">ashok@ashokmehan.com</a>
            <small>Ashok replies personally.</small>
          </div>
        </div>
        <ContactForm />
      </section>
      <SiteFooter />
    </main>
  );
}
