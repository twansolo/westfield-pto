import Link from "next/link";
import { client, resourceLinksQuery } from "@/sanity";
import type { ResourceLink } from "@/sanity";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Useful Links | Westfield PTO",
  description: "Helpful links for Westfield families including educational resources, school supplies, and more.",
};

export const revalidate = 60;

async function getResourceLinks() {
  return client.fetch<ResourceLink[]>(resourceLinksQuery);
}

export default async function LinksPage() {
  const allLinks = await getResourceLinks();

  // Group links by category
  const quickLinks = allLinks.filter((link) => link.category === "quick");
  const schoolLinks = allLinks.filter((link) => link.category === "school");
  const educationalLinks = allLinks.filter((link) => link.category === "educational");

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
      {quickLinks.length > 0 && (
        <section className="py-12 lg:py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-foreground font-[family-name:var(--font-playfair)] mb-6">
              Quick Links
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {quickLinks.map((link) => (
                link.isInternal ? (
                  <Link
                    key={link._id}
                    href={link.url}
                    className="flex flex-col items-center p-4 bg-gray-50 rounded-xl hover:bg-primary/5 transition-colors text-center group"
                  >
                    {link.icon && <span className="text-2xl mb-2">{link.icon}</span>}
                    <span className="font-medium text-foreground group-hover:text-primary transition-colors">{link.name}</span>
                    <span className="text-xs text-muted mt-1">{link.description}</span>
                  </Link>
                ) : (
                  <a
                    key={link._id}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center p-4 bg-gray-50 rounded-xl hover:bg-primary/5 transition-colors text-center group"
                  >
                    {link.icon && <span className="text-2xl mb-2">{link.icon}</span>}
                    <span className="font-medium text-foreground group-hover:text-primary transition-colors">{link.name}</span>
                    <span className="text-xs text-muted mt-1">{link.description}</span>
                  </a>
                )
              ))}
            </div>
          </div>
        </section>
      )}

      {/* School Resources */}
      {schoolLinks.length > 0 && (
        <section className="py-12 lg:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-foreground font-[family-name:var(--font-playfair)] mb-6">
              School Resources
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {schoolLinks.map((link) => (
                <a
                  key={link._id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block p-6 rounded-xl border transition-all hover:shadow-lg group ${
                    link.isHighlighted 
                      ? "bg-primary/5 border-primary/20 hover:border-primary/40" 
                      : "bg-white border-border hover:border-primary/40"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    {link.icon && <span className="text-3xl">{link.icon}</span>}
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
      )}

      {/* Educational Links */}
      {educationalLinks.length > 0 && (
        <section className="py-12 lg:py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-foreground font-[family-name:var(--font-playfair)] mb-6">
              Educational Resources
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {educationalLinks.map((link) => (
                <a
                  key={link._id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-5 bg-gray-50 rounded-xl border border-border hover:border-primary/40 hover:shadow-md transition-all group"
                >
                  {link.icon && <span className="text-2xl block mb-3">{link.icon}</span>}
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {link.name}
                  </h3>
                  <p className="mt-1 text-xs text-muted line-clamp-2">{link.description}</p>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Empty State */}
      {allLinks.length === 0 && (
        <section className="py-12 lg:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-xl p-12 text-center border border-border">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Links Coming Soon</h3>
              <p className="text-muted">
                Helpful links and resources will be available here soon.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Forms CTA */}
      <section className="py-12 lg:py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold font-[family-name:var(--font-playfair)]">
            Looking for Forms?
          </h2>
          <p className="mt-2 text-white/80">
            Find important forms for Westfield staff and parents, including reimbursement forms and payment requests.
          </p>
          <Link
            href="/resources/forms"
            className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors"
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
