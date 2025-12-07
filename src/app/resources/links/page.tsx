import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Useful Links | Westfield PTO",
  description: "Helpful links for Westfield families including educational resources, school supplies, and more.",
};

const educationalLinks = [
  {
    name: "Games Tied to RIT Scores",
    description: "Online games and activities aligned with student RIT scores for targeted learning.",
    url: "#",
    icon: "🎮",
  },
  {
    name: "Promoting Literacy Links",
    description: "Resources to encourage and support reading at home.",
    url: "#",
    icon: "📖",
  },
  {
    name: "Westfield Library Link",
    description: "Access the Westfield school library resources and catalog.",
    url: "#",
    icon: "📚",
  },
  {
    name: "Iowa Education Reform Plan",
    description: "Information about Iowa's education initiatives and reforms.",
    url: "#",
    icon: "🏛️",
  },
];

const schoolLinks = [
  {
    name: "Class Packs",
    description: "Buy class packs and other school-related supplies. Enter Westfield's account #84470 and you're ready to shop! You not only have the easiest back-to-school shopping but you're benefiting our PTO as well!",
    url: "#",
    icon: "🎒",
    highlight: true,
    accountNumber: "84470",
  },
  {
    name: "Yearbook Photo Upload",
    description: "Upload photos for the Westfield yearbook from fun events at school, class trips, parties, and more! Please include your student's name and grade so the photos get placed on the appropriate page.",
    url: "#",
    icon: "📸",
  },
];

const quickLinks = [
  {
    name: "PTO Events Calendar",
    href: "/events",
    description: "View upcoming PTO events",
    internal: true,
  },
  {
    name: "Volunteer Sign-Up",
    href: "/contact",
    description: "Get involved with the PTO",
    internal: true,
  },
  {
    name: "PTO Forms",
    href: "/resources/forms",
    description: "Download important forms",
    internal: true,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/p/Westfield-PTO-100064283547071/",
    description: "Follow Westfield PTO",
    internal: false,
  },
];

export default function LinksPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-primary text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold font-[family-name:var(--font-playfair)]">
            Links for Parents
          </h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            Find online support for reading, math, personal development, and hot topics in education.
          </p>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground font-[family-name:var(--font-playfair)] mb-6">
            Quick Links
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {quickLinks.map((link) => (
              link.internal ? (
                <Link
                  key={link.name}
                  href={link.href}
                  className="flex flex-col items-center p-4 bg-gray-50 rounded-xl hover:bg-primary/5 transition-colors text-center group"
                >
                  <span className="font-medium text-foreground group-hover:text-primary transition-colors">{link.name}</span>
                  <span className="text-xs text-muted mt-1">{link.description}</span>
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center p-4 bg-gray-50 rounded-xl hover:bg-primary/5 transition-colors text-center group"
                >
                  <span className="font-medium text-foreground group-hover:text-primary transition-colors">{link.name}</span>
                  <span className="text-xs text-muted mt-1">{link.description}</span>
                </a>
              )
            ))}
          </div>
        </div>
      </section>

      {/* School Resources */}
      <section className="py-12 lg:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground font-[family-name:var(--font-playfair)] mb-6">
            School Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {schoolLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`block p-6 rounded-xl border transition-all hover:shadow-lg group ${
                  link.highlight 
                    ? "bg-primary/5 border-primary/20 hover:border-primary/40" 
                    : "bg-white border-border hover:border-primary/40"
                }`}
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{link.icon}</span>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {link.name}
                    </h3>
                    <p className="mt-2 text-sm text-muted">{link.description}</p>
                    {link.accountNumber && (
                      <div className="mt-3 inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 rounded-lg">
                        <span className="text-xs font-medium text-primary">Account #: {link.accountNumber}</span>
                      </div>
                    )}
                  </div>
                  <svg className="w-5 h-5 text-muted group-hover:text-primary transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Educational Links */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground font-[family-name:var(--font-playfair)] mb-6">
            Educational Resources
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {educationalLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-5 bg-gray-50 rounded-xl border border-border hover:border-primary/40 hover:shadow-md transition-all group"
              >
                <span className="text-2xl block mb-3">{link.icon}</span>
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {link.name}
                </h3>
                <p className="mt-1 text-xs text-muted line-clamp-2">{link.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Forms CTA */}
      <section className="py-12 lg:py-16 bg-primary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-foreground font-[family-name:var(--font-playfair)]">
            Looking for Forms?
          </h2>
          <p className="mt-2 text-muted">
            Find important forms for Westfield staff and parents, including reimbursement forms and payment requests.
          </p>
          <Link
            href="/resources/forms"
            className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors"
          >
            View All Forms
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
